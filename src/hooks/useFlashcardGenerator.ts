
import { useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';

interface FlashcardData {
  id?: string;
  word_en: string;
  word_fr: string;
  sentence_en: string;
  sentence_fr: string;
  created_at?: string;
}

export const useFlashcardGenerator = (language: 'fr' | 'en', onFlashcardCreated?: () => void) => {
  const [inputWord, setInputWord] = useState('');
  const [inputLanguage, setInputLanguage] = useState<'fr' | 'en'>('fr');
  const [isGenerating, setIsGenerating] = useState(false);
  
  // Load generated flashcards from localStorage on component mount
  const loadGeneratedFlashcards = () => {
    const stored = localStorage.getItem('generatedFlashcards');
    return stored ? JSON.parse(stored) : [];
  };
  
  const [generatedFlashcards, setGeneratedFlashcards] = useState<FlashcardData[]>(loadGeneratedFlashcards);
  const [savedFlashcards, setSavedFlashcards] = useState<FlashcardData[]>([]);
  const { toast } = useToast();
  const { currentUser } = useAuth();

  // Save generated flashcards to localStorage whenever they change
  const updateGeneratedFlashcards = (newFlashcards: FlashcardData[]) => {
    setGeneratedFlashcards(newFlashcards);
    localStorage.setItem('generatedFlashcards', JSON.stringify(newFlashcards));
  };

  const generateFlashcard = async () => {
    if (!inputWord.trim()) {
      toast({
        title: language === 'fr' ? "Erreur" : "Error",
        description: language === 'fr' ? "Veuillez entrer un mot" : "Please enter a word",
        variant: "destructive",
      });
      return;
    }

    if (!currentUser) {
      toast({
        title: language === 'fr' ? "Erreur" : "Error",
        description: language === 'fr' ? "Vous devez être connecté" : "You must be logged in",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);

    try {
      const { data, error } = await supabase.functions.invoke('generate-flashcard', {
        body: {
          word: inputWord.trim(),
          language: inputLanguage,
          userId: currentUser.id,
        },
      });

      if (error) {
        console.error('Error generating flashcard:', error);
        toast({
          title: language === 'fr' ? "Erreur" : "Error",
          description: language === 'fr' ? "Erreur lors de la génération" : "Error generating flashcard",
          variant: "destructive",
        });
        return;
      }

      // Add the new flashcard to the beginning of the generated list and save to localStorage
      const newGeneratedList = [data.flashcard, ...generatedFlashcards];
      updateGeneratedFlashcards(newGeneratedList);
      setInputWord(''); // Clear input after successful generation
      toast({
        title: language === 'fr' ? "Succès" : "Success",
        description: language === 'fr' ? "Flashcard générée avec succès !" : "Flashcard generated successfully!",
      });

      // Refresh saved flashcards and notify parent
      await loadSavedFlashcards();
      if (onFlashcardCreated) {
        onFlashcardCreated();
      }

    } catch (error) {
      console.error('Error:', error);
      toast({
        title: language === 'fr' ? "Erreur" : "Error",
        description: language === 'fr' ? "Une erreur s'est produite" : "An error occurred",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const loadSavedFlashcards = async () => {
    if (!currentUser) return;

    try {
      const { data, error } = await supabase
        .from('flashcards')
        .select('*')
        .eq('user_id', currentUser.id)
        .order('created_at', { ascending: false })
        .limit(10);

      if (error) {
        console.error('Error loading flashcards:', error);
        return;
      }

      setSavedFlashcards(data || []);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const deleteFlashcard = async (id: string) => {
    try {
      const { error } = await supabase
        .from('flashcards')
        .delete()
        .eq('id', id);

      if (error) {
        console.error('Error deleting flashcard:', error);
        toast({
          title: language === 'fr' ? "Erreur" : "Error",
          description: language === 'fr' ? "Erreur lors de la suppression" : "Error deleting flashcard",
          variant: "destructive",
        });
        return;
      }

      setSavedFlashcards(prev => prev.filter(card => card.id !== id));
      toast({
        title: language === 'fr' ? "Succès" : "Success",
        description: language === 'fr' ? "Flashcard supprimée" : "Flashcard deleted",
      });

      // Notify parent of change
      if (onFlashcardCreated) {
        onFlashcardCreated();
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const clearGeneratedHistory = () => {
    updateGeneratedFlashcards([]);
  };

  useEffect(() => {
    if (currentUser) {
      loadSavedFlashcards();
    }
  }, [currentUser]);

  return {
    inputWord,
    setInputWord,
    inputLanguage,
    setInputLanguage,
    isGenerating,
    generatedFlashcards,
    savedFlashcards,
    generateFlashcard,
    deleteFlashcard,
    clearGeneratedHistory,
  };
};
