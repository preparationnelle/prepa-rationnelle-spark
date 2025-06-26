
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';
import { useToast } from '@/components/ui/use-toast';
import { useActivityHistory } from './useActivityHistory';

export interface GeneratedFlashcard {
  word_en: string;
  word_fr: string;
  sentence_en: string;
  sentence_fr: string;
}

export const useFlashcardGenerator = () => {
  const [generating, setGenerating] = useState(false);
  const { currentUser } = useAuth();
  const { toast } = useToast();
  const { saveActivity } = useActivityHistory();

  const generateFlashcard = async (word: string, language: 'fr' | 'en'): Promise<GeneratedFlashcard | null> => {
    if (!word.trim()) {
      toast({
        title: language === 'fr' ? "Mot requis" : "Word required",
        description: language === 'fr' 
          ? "Veuillez entrer un mot pour générer une flashcard." 
          : "Please enter a word to generate a flashcard.",
        variant: "destructive"
      });
      return null;
    }

    if (!currentUser) {
      toast({
        title: language === 'fr' ? "Connexion requise" : "Login required",
        description: language === 'fr' 
          ? "Vous devez être connecté pour générer des flashcards." 
          : "You must be logged in to generate flashcards.",
        variant: "destructive"
      });
      return null;
    }

    setGenerating(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('generate-flashcard', {
        body: {
          word: word,
          language: language,
          userId: currentUser.id
        }
      });

      if (error) {
        throw new Error(error.message);
      }

      if (data.error) {
        throw new Error(data.error);
      }

      // Save to activity history
      await saveActivity(
        'generator',
        'flashcards',
        { word, language },
        data.generated,
        { success: data.success }
      );

      toast({
        title: language === 'fr' ? "Flashcard créée" : "Flashcard created",
        description: language === 'fr' 
          ? "Votre flashcard a été générée et sauvegardée avec succès." 
          : "Your flashcard has been generated and saved successfully.",
      });

      return data.generated;
    } catch (error) {
      console.error("Error generating flashcard:", error);
      toast({
        title: language === 'fr' ? "Erreur" : "Error",
        description: language === 'fr' 
          ? "Une erreur est survenue lors de la génération de la flashcard: " + (error as Error).message 
          : "An error occurred while generating the flashcard: " + (error as Error).message,
        variant: "destructive"
      });
      return null;
    } finally {
      setGenerating(false);
    }
  };

  return {
    generating,
    generateFlashcard
  };
};
