
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { AdditionalInfo } from '@/components/generator/AdditionalInfoForm';
import { Answer } from '@/components/generator/ResponseTabs';

export const useStreamingAnswer = (currentUserId?: string) => {
  const [generating, setGenerating] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [streamingContent, setStreamingContent] = useState('');
  const [currentAnswer, setCurrentAnswer] = useState<Answer | null>(null);
  const { toast } = useToast();

  const generateAnswer = async (question: string, language: 'fr' | 'en', additionalInfo: AdditionalInfo) => {
    if (!question.trim()) {
      toast({
        title: language === 'fr' ? "Question requise" : "Question required",
        description: language === 'fr' 
          ? "Veuillez entrer une question d'entretien pour générer une réponse." 
          : "Please enter an interview question to generate an answer.",
        variant: "destructive"
      });
      return null;
    }

    setGenerating(true);
    setStreamingContent('');
    setCurrentAnswer(null);
    setWordCount(0);
    
    try {
      console.log('Starting generation with streaming...');
      
      // Get the session token
      const { data: sessionData } = await supabase.auth.getSession();
      const token = sessionData.session?.access_token;
      
      // Use the full Supabase URL for the function
      const response = await fetch('https://xamkaphelshsavcacbdy.supabase.co/functions/v1/generate-interview-answer', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
          'apikey': 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhbWthcGhlbHNoc2F2Y2FjYmR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwODc0MDQsImV4cCI6MjA2MTY2MzQwNH0.7G6hKGrmG_JmV_DZKyYCTmsS-soI0tofSKHA4fB8jAY'
        },
        body: JSON.stringify({
          question: question,
          language: language,
          additionalInfo: additionalInfo
        })
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const reader = response.body?.getReader();
      if (!reader) {
        throw new Error('No reader available');
      }

      const decoder = new TextDecoder();
      
      while (true) {
        const { done, value } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value);
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            try {
              const jsonData = JSON.parse(line.slice(6));
              
              if (jsonData.type === 'chunk') {
                console.log('Received chunk:', jsonData.content);
                setStreamingContent(jsonData.fullContent);
                setWordCount(jsonData.fullContent.split(' ').length);
              } else if (jsonData.type === 'complete') {
                console.log('Generation complete:', jsonData.answer);
                setCurrentAnswer(jsonData.answer);
                setWordCount(jsonData.wordCount);
                setStreamingContent('');
                
                // Save the generated answer to Supabase if user is logged in
                if (currentUserId) {
                  const { error: saveError } = await supabase.from('submissions').insert({
                    user_id: currentUserId,
                    title: question,
                    texte: JSON.stringify(jsonData.answer),
                    date: new Date().toISOString(),
                    status: "generated"
                  });

                  if (saveError) {
                    console.error("Error saving answer:", saveError);
                  }
                }
              }
            } catch (e) {
              console.error('Error parsing JSON:', e);
            }
          }
        }
      }
      
      return currentAnswer;
    } catch (error) {
      console.error("Error generating answer:", error);
      toast({
        title: language === 'fr' ? "Erreur" : "Error",
        description: language === 'fr' 
          ? "Une erreur est survenue lors de la génération de la réponse: " + (error as Error).message 
          : "An error occurred while generating the answer: " + (error as Error).message,
        variant: "destructive"
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
    generateAnswer
  };
};
