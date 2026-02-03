
import { useState } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';
import { useUserData } from '@/context/UserDataContext';
import { useToast } from '@/components/ui/use-toast';
import { useActivityHistory } from './useActivityHistory';

// Universal flashcard format
export interface UniversalFlashcard {
  id?: string;
  front: string;
  back: string;
  hint?: string | null;
  category?: string;
  tags?: string[];
  source?: 'manual' | 'ai_generated';
  created_at?: string;
}

// Legacy format for backward compatibility
export interface LegacyFlashcard {
  word_en: string;
  word_fr: string;
  sentence_en: string;
  sentence_fr: string;
}

// Categories for flashcards
export const FLASHCARD_CATEGORIES = [
  { id: 'general', label: { fr: 'Général', en: 'General' } },
  { id: 'math', label: { fr: 'Mathématiques', en: 'Mathematics' } },
  { id: 'python', label: { fr: 'Python', en: 'Python' } },
  { id: 'history', label: { fr: 'Histoire', en: 'History' } },
  { id: 'vocabulary', label: { fr: 'Vocabulaire', en: 'Vocabulary' } },
  { id: 'science', label: { fr: 'Sciences', en: 'Science' } },
  { id: 'geography', label: { fr: 'Géographie', en: 'Geography' } },
  { id: 'custom', label: { fr: 'Personnalisé', en: 'Custom' } },
];

export const useFlashcardGenerator = (language: 'fr' | 'en' = 'fr', onFlashcardCreated?: () => void) => {
  const [generating, setGenerating] = useState(false);

  // Universal mode state
  const [frontInput, setFrontInput] = useState('');
  const [backInput, setBackInput] = useState('');
  const [hintInput, setHintInput] = useState('');
  const [categoryInput, setCategoryInput] = useState('general');
  const [tagsInput, setTagsInput] = useState<string[]>([]);
  const [topicInput, setTopicInput] = useState('');
  const [isAiMode, setIsAiMode] = useState(true);

  // Legacy mode state (for backward compatibility)
  const [inputWord, setInputWord] = useState('');
  const [inputLanguage, setInputLanguage] = useState<'fr' | 'en'>('fr');

  // Generated flashcards list
  const [generatedFlashcards, setGeneratedFlashcards] = useState<UniversalFlashcard[]>([]);

  const { currentUser } = useAuth();
  const { addGeneratedContent } = useUserData();
  const { toast } = useToast();
  const { saveActivity } = useActivityHistory();

  // =============================================
  // UNIVERSAL FLASHCARD GENERATION
  // =============================================
  const generateFlashcardUniversal = async (): Promise<UniversalFlashcard | null> => {
    if (!currentUser) {
      toast({
        title: language === 'fr' ? "Connexion requise" : "Login required",
        description: language === 'fr'
          ? "Vous devez être connecté pour créer des flashcards."
          : "You must be logged in to create flashcards.",
        variant: "destructive"
      });
      return null;
    }

    // Validation based on mode
    if (isAiMode && !topicInput.trim()) {
      toast({
        title: language === 'fr' ? "Sujet requis" : "Topic required",
        description: language === 'fr'
          ? "Veuillez entrer un sujet pour générer une flashcard."
          : "Please enter a topic to generate a flashcard.",
        variant: "destructive"
      });
      return null;
    }

    if (!isAiMode && (!frontInput.trim() || !backInput.trim())) {
      toast({
        title: language === 'fr' ? "Champs requis" : "Fields required",
        description: language === 'fr'
          ? "Veuillez remplir la question et la réponse."
          : "Please fill in both question and answer.",
        variant: "destructive"
      });
      return null;
    }

    setGenerating(true);

    try {
      const requestBody = isAiMode
        ? {
          mode: 'ai',
          userId: currentUser.id,
          topic: topicInput,
          category: getCategoryLabel(categoryInput),
        }
        : {
          mode: 'manual',
          userId: currentUser.id,
          front: frontInput,
          back: backInput,
          hint: hintInput || null,
          category: getCategoryLabel(categoryInput),
          tags: tagsInput,
        };

      const { data, error } = await supabase.functions.invoke('generate-flashcard', {
        body: requestBody
      });

      if (error) throw new Error(error.message);
      if (data.error) throw new Error(data.error);

      const newFlashcard: UniversalFlashcard = {
        id: data.flashcard?.id,
        front: data.generated.front,
        back: data.generated.back,
        hint: data.generated.hint,
        category: data.generated.category || getCategoryLabel(categoryInput),
        tags: data.generated.tags || tagsInput,
        source: isAiMode ? 'ai_generated' : 'manual',
        created_at: data.flashcard?.created_at,
      };

      setGeneratedFlashcards(prev => [newFlashcard, ...prev]);

      // Save to user data for dashboard
      addGeneratedContent({
        type: 'flashcard',
        title: `Flashcard: ${newFlashcard.front.substring(0, 30)}...`,
        content: `Q: ${newFlashcard.front}\nR: ${newFlashcard.back}`,
        subject: newFlashcard.category || 'Général',
        language: language
      });

      // Save to activity history
      await saveActivity(
        'generator',
        'flashcards',
        { mode: isAiMode ? 'ai' : 'manual', topic: topicInput || frontInput },
        newFlashcard,
        { success: data.success }
      );

      // Call callback if provided
      if (onFlashcardCreated) onFlashcardCreated();

      toast({
        title: language === 'fr' ? "Flashcard créée" : "Flashcard created",
        description: language === 'fr'
          ? "Votre flashcard a été générée et sauvegardée."
          : "Your flashcard has been generated and saved.",
      });

      // Clear inputs
      if (isAiMode) {
        setTopicInput('');
      } else {
        setFrontInput('');
        setBackInput('');
        setHintInput('');
      }

      return newFlashcard;
    } catch (error) {
      console.error("Error generating flashcard:", error);
      toast({
        title: language === 'fr' ? "Erreur" : "Error",
        description: language === 'fr'
          ? "Une erreur est survenue: " + (error as Error).message
          : "An error occurred: " + (error as Error).message,
        variant: "destructive"
      });
      return null;
    } finally {
      setGenerating(false);
    }
  };

  // =============================================
  // LEGACY FLASHCARD GENERATION (backward compat)
  // =============================================
  const generateFlashcard = async (word: string, lang: 'fr' | 'en'): Promise<LegacyFlashcard | null> => {
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
          mode: 'legacy',
          word: word,
          language: lang,
          userId: currentUser.id
        }
      });

      if (error) throw new Error(error.message);
      if (data.error) throw new Error(data.error);

      const legacyFlashcard = data.generated;

      // Convert to universal format for local state
      const universalCard: UniversalFlashcard = {
        id: data.flashcard?.id,
        front: legacyFlashcard.word_fr,
        back: legacyFlashcard.word_en,
        hint: `${legacyFlashcard.sentence_fr} / ${legacyFlashcard.sentence_en}`,
        category: 'Vocabulaire',
        source: 'ai_generated',
        created_at: data.flashcard?.created_at,
      };

      setGeneratedFlashcards(prev => [universalCard, ...prev]);

      addGeneratedContent({
        type: 'flashcard',
        title: `Flashcard: ${word}`,
        content: `${legacyFlashcard.word_fr} → ${legacyFlashcard.word_en}`,
        subject: 'Vocabulaire',
        language: lang
      });

      await saveActivity(
        'generator',
        'flashcards',
        { word, language: lang, mode: 'legacy' },
        legacyFlashcard,
        { success: data.success }
      );

      if (onFlashcardCreated) onFlashcardCreated();

      toast({
        title: language === 'fr' ? "Flashcard créée" : "Flashcard created",
        description: language === 'fr'
          ? "Votre flashcard a été générée et sauvegardée."
          : "Your flashcard has been generated and saved.",
      });

      return legacyFlashcard;
    } catch (error) {
      console.error("Error generating flashcard:", error);
      toast({
        title: language === 'fr' ? "Erreur" : "Error",
        description: (error as Error).message,
        variant: "destructive"
      });
      return null;
    } finally {
      setGenerating(false);
    }
  };

  const getCategoryLabel = (categoryId: string): string => {
    const cat = FLASHCARD_CATEGORIES.find(c => c.id === categoryId);
    return cat ? cat.label[language] : categoryId;
  };

  const clearGeneratedHistory = () => {
    setGeneratedFlashcards([]);
  };

  return {
    // Generation state
    generating,
    isGenerating: generating,
    generatedFlashcards,

    // Universal mode
    isAiMode,
    setIsAiMode,
    frontInput,
    setFrontInput,
    backInput,
    setBackInput,
    hintInput,
    setHintInput,
    categoryInput,
    setCategoryInput,
    tagsInput,
    setTagsInput,
    topicInput,
    setTopicInput,
    generateFlashcardUniversal,

    // Legacy mode (backward compat)
    inputWord,
    setInputWord,
    inputLanguage,
    setInputLanguage,
    generateFlashcard,

    // Utils
    clearGeneratedHistory,
    categories: FLASHCARD_CATEGORIES,
  };
};
