
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/components/ui/use-toast';
import { AdditionalInfo } from '@/components/generator/AdditionalInfoForm';
import { Answer } from '@/components/generator/ResponseTabs';
import { useActivityHistory } from './useActivityHistory';

export const useGenerateAnswer = (currentUserId?: string) => {
  const [generating, setGenerating] = useState(false);
  const [wordCount, setWordCount] = useState(0);
  const [currentAnswer, setCurrentAnswer] = useState<Answer | null>(null);
  const { toast } = useToast();
  const { saveActivity } = useActivityHistory();

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
    
    try {
      // Call the Supabase Edge Function to generate the answer
      const { data, error } = await supabase.functions.invoke('generate-interview-answer', {
        body: {
          question: question,
          language: language,
          additionalInfo: additionalInfo
        }
      });

      if (error) {
        throw new Error(error.message);
      }

      if (data.error) {
        throw new Error(data.error);
      }

      setCurrentAnswer(data.answer);
      setWordCount(data.wordCount || 0);
      
      // Save the generated answer to Supabase if user is logged in
      if (currentUserId) {
        const { error: saveError } = await supabase.from('submissions').insert({
          user_id: currentUserId,
          title: question,
          texte: JSON.stringify(data.answer),
          date: new Date().toISOString(),
          status: "generated"
        });

        if (saveError) {
          console.error("Error saving answer:", saveError);
        }

        // Save to activity history
        await saveActivity(
          'generator',
          'answer',
          { question, language, additionalInfo },
          data.answer,
          { wordCount: data.wordCount }
        );
      }
      
      return data.answer;
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
    currentAnswer,
    setCurrentAnswer,
    generateAnswer
  };
};
