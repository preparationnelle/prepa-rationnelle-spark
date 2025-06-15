
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { AdditionalInfo } from '@/components/generator/AdditionalInfoForm';
import { Answer } from '@/components/generator/ResponseTabs';

const supaProjectId = 'xamkaphelshsavcacbdy'; // <- extrait de l'URL Supabase
const region = 'eu-central-1';                // <- par défaut pour ce projet Lovable

// Utilitaire pour récupérer le header d'auth supabase
function getSupabaseAuthHeaders() {
  const apiKey = (supabase as any).rest._headers.Authorization?.replace('Bearer ', '') ||
    (supabase as any).rest._headers['apikey'] ||
    (supabase as any).rest._headers['Authorization'];
  return {
    'apikey': apiKey || '',
    'Authorization': `Bearer ${apiKey || ''}`,
  };
}

export const useStreamingAnswer = (currentUserId?: string) => {
  const [generating, setGenerating] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [streamingContent, setStreamingContent] = useState('');
  const [currentAnswer, setCurrentAnswer] = useState<Answer | null>(null);
  const { toast } = useToast();

  const generateAnswer = async (
    question: string,
    language: 'fr' | 'en',
    additionalInfo: AdditionalInfo
  ) => {
    if (!question.trim()) {
      toast({
        title: language === 'fr' ? "Question requise" : "Question required",
        description:
          language === 'fr'
            ? "Veuillez entrer une question d'entretien pour générer une réponse."
            : "Please enter an interview question to generate an answer.",
        variant: "destructive",
      });
      return null;
    }

    setGenerating(true);
    setStreamingContent('');
    setCurrentAnswer(null);
    setWordCount(0);

    try {
      console.log('Starting real streaming with fetch...');

      // URL EDGE FUNCTION SUPABASE -- adapte ton projectId si besoin !
      const url = `https://${supaProjectId}.functions.supabase.${region}.supabase.co/generate-interview-answer`;

      const resp = await fetch(url, {
        method: 'POST',
        headers: {
          ...getSupabaseAuthHeaders(),
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          question,
          language,
          additionalInfo,
        }),
      });

      if (!resp.ok) {
        const errorText = await resp.text();
        throw new Error("Function error: " + errorText);
      }

      if (!resp.body) {
        throw new Error('Stream not supported in response.');
      }
      const reader = resp.body.getReader();
      const decoder = new TextDecoder();

      let full = '';
      let done = false;

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunk = decoder.decode(value || new Uint8Array(), { stream: !done });

        // Split chunk by SSE lines
        const lines = chunk.split('\n');
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const jsonData = JSON.parse(line.slice(6));
              if (jsonData.type === 'chunk') {
                full = jsonData.fullContent;
                setStreamingContent(full);
                setWordCount(full.split(/\s+/).filter(Boolean).length);
              } else if (jsonData.type === 'complete') {
                setCurrentAnswer(jsonData.answer);
                setWordCount(jsonData.wordCount);
                setStreamingContent(''); // clear stream for final
                // Sauvegarde de la réponse si connecté :
                if (currentUserId) {
                  await supabase.from('submissions').insert({
                    user_id: currentUserId,
                    title: question,
                    texte: JSON.stringify(jsonData.answer),
                    date: new Date().toISOString(),
                    status: "generated",
                  });
                }
              }
            } catch (err) {
              // On ignore parsing error
            }
          }
        }
      }
      return currentAnswer;
    } catch (error) {
      console.error("Error generating answer:", error);
      toast({
        title: language === 'fr' ? "Erreur" : "Error",
        description:
          language === 'fr'
            ? "Une erreur est survenue lors de la génération de la réponse: " +
              (error as Error)?.message
            : "An error occurred while generating the answer: " +
              (error as Error)?.message,
        variant: "destructive",
      });
      return null;
    } finally {
      setGenerating(false);
    }
  };

  return {
    generating,
    wordCount,
    streamingContent,
    currentAnswer,
    setCurrentAnswer,
    generateAnswer,
  };
};
