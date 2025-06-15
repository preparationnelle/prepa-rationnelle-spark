
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { AdditionalInfo } from '@/components/generator/AdditionalInfoForm';
import { Answer } from '@/components/generator/ResponseTabs';

const supaProjectId = 'xamkaphelshsavcacbdy';
const region = 'eu-central-1';

// OPTIONNEL : utiliser la clé anonyme Supabase, mais pour les edge functions publiques elle est rarement utile !
const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhbWthcGhlbHNoc2F2Y2FjYmR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwODc0MDQsImV4cCI6MjA2MTY2MzQwNH0.7G6hKGrmG_JmV_DZKyYCTmsS-soI0tofSKHA4fB8jAY";

export const useStreamingAnswer = (currentUserId?: string) => {
  const [generating, setGenerating] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [streamingContent, setStreamingContent] = useState('');
  const [currentAnswer, setCurrentAnswer] = useState<Answer | null>(null);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
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
    setErrorMsg(null);

    try {
      console.log('[useStreamingAnswer] Starting fetch streaming process...');
      const url = `https://xamkaphelshsavcacbdy.functions.supabase.eu-central-1.supabase.co/generate-interview-answer`;
      console.log('[useStreamingAnswer] Using URL:', url);

      // Ne PAS inclure Authorization, juste Content-Type (et éventuellement apikey publique)
      const headers: Record<string, string> = {
        'Content-Type': 'application/json',
        //'apikey': SUPABASE_ANON_KEY, // strictement optionnel !
      };
      console.log('[useStreamingAnswer] Using headers:', headers);

      const resp = await fetch(url, {
        method: 'POST',
        headers,
        body: JSON.stringify({
          question,
          language,
          additionalInfo,
        }),
      });

      if (!resp.ok) {
        const errorText = await resp.text();
        setErrorMsg("Erreur HTTP: " + errorText);
        throw new Error("HTTP error: " + errorText);
      }
      if (!resp.body) {
        setErrorMsg(language === 'fr' ? "Streaming non supporté par la réponse serveur." : "Streaming is not supported by the server response.");
        throw new Error('Stream not supported in response.');
      }
      const reader = resp.body.getReader();
      const decoder = new TextDecoder();

      let full = '';
      let done = false;
      let gotAnyChunk = false;

      while (!done) {
        const { value, done: doneReading } = await reader.read();
        done = doneReading;
        const chunk = decoder.decode(value || new Uint8Array(), { stream: !done });
        if (chunk.trim().length > 0) {
          gotAnyChunk = true;
        }

        // Split chunk by SSE lines
        const lines = chunk.split('\n');
        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const jsonData = JSON.parse(line.slice(6));
              console.log('[useStreamingAnswer] Received chunk:', jsonData);
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
              console.warn('[useStreamingAnswer] Échec parsing JSON du chunk:', line, err);
            }
          } else if (line.trim().length > 0) {
            console.log('[useStreamingAnswer] Received line not starting with "data:":', line);
          }
        }
      }
      if (!gotAnyChunk) {
        setErrorMsg(language === 'fr' ? 
          "Aucun flux n'a été reçu : la fonction n'a pas répondu (voir console)." :
          "No streaming chunks received: the edge function did not respond (see console)."
        );
        console.error('[useStreamingAnswer] Streaming problem: no data received.');
      }
      return currentAnswer;
    } catch (error) {
      console.error("[useStreamingAnswer] Error:", error);
      setErrorMsg((error as Error)?.message || "Erreur inconnue");
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
    errorMsg,
  };
};
