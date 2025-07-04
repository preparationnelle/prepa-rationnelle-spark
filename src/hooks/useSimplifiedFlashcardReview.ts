
import { useState, useEffect } from 'react';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';

interface FlashcardData {
  id: string;
  word_en: string;
  word_fr: string;
  sentence_en: string;
  sentence_fr: string;
  created_at: string;
}

interface ReviewProgress {
  known: Set<string>;
  difficult: Set<string>;
  currentStreak: number;
}

export const useSimplifiedFlashcardReview = (language: 'fr' | 'en', refreshTrigger?: number) => {
  const [flashcards, setFlashcards] = useState<FlashcardData[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState<ReviewProgress>({
    known: new Set(),
    difficult: new Set(),
    currentStreak: 0
  });
  const [reviewMode, setReviewMode] = useState<'all' | 'difficult'>('all');
  
  const { toast } = useToast();
  const { currentUser } = useAuth();

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return; // Don't interfere with input fields
      }
      
      switch (event.key) {
        case 'Enter':
        case ' ':
          event.preventDefault();
          flipCard();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          previousCard();
          break;
        case 'ArrowRight':
          event.preventDefault();
          nextCard();
          break;
        case '1':
          event.preventDefault();
          if (isFlipped) markAsKnown();
          break;
        case '2':
          event.preventDefault();
          if (isFlipped) markAsDifficult();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isFlipped]);

  const loadFlashcards = async () => {
    if (!currentUser) return;

    try {
      setIsLoading(true);
      
      const { data, error } = await supabase
        .from('flashcards')
        .select('*')
        .eq('user_id', currentUser.id)
        .order('created_at', { ascending: false });

      if (error) {
        console.error('Error loading flashcards:', error);
        return;
      }

      setFlashcards(data || []);
      setCurrentIndex(0);
      setIsFlipped(false);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const getDisplayCards = () => {
    if (reviewMode === 'difficult') {
      return flashcards.filter(card => progress.difficult.has(card.id));
    }
    return flashcards;
  };

  const markAsKnown = () => {
    const currentCard = getDisplayCards()[currentIndex];
    if (!currentCard) return;

    setProgress(prev => {
      const newKnown = new Set(prev.known);
      const newDifficult = new Set(prev.difficult);
      
      newKnown.add(currentCard.id);
      newDifficult.delete(currentCard.id);
      
      return {
        known: newKnown,
        difficult: newDifficult,
        currentStreak: prev.currentStreak + 1
      };
    });

    toast({
      title: "✅ Acquis !",
      description: language === 'fr' ? "Bien joué !" : "Well done!",
    });

    nextCard();
  };

  const markAsDifficult = () => {
    const currentCard = getDisplayCards()[currentIndex];
    if (!currentCard) return;

    setProgress(prev => {
      const newKnown = new Set(prev.known);
      const newDifficult = new Set(prev.difficult);
      
      newKnown.delete(currentCard.id);
      newDifficult.add(currentCard.id);
      
      return {
        known: newKnown,
        difficult: newDifficult,
        currentStreak: 0
      };
    });

    toast({
      title: "🔄 À revoir",
      description: language === 'fr' ? "Cette carte reviendra" : "This card will return",
    });

    nextCard();
  };

  const nextCard = () => {
    const displayCards = getDisplayCards();
    if (currentIndex < displayCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    } else {
      // End of deck
      if (progress.difficult.size > 0 && reviewMode === 'all') {
        setReviewMode('difficult');
        setCurrentIndex(0);
        setIsFlipped(false);
        toast({
          title: language === 'fr' ? "🎯 Mode révision" : "🎯 Review mode",
          description: language === 'fr' 
            ? `Révisons les ${progress.difficult.size} cartes difficiles` 
            : `Let's review the ${progress.difficult.size} difficult cards`,
        });
      } else {
        toast({
          title: language === 'fr' ? "🎉 Terminé !" : "🎉 Complete!",
          description: language === 'fr' 
            ? `${progress.known.size} cartes maîtrisées` 
            : `${progress.known.size} cards mastered`,
        });
      }
    }
  };

  const previousCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const resetReview = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setReviewMode('all');
    setProgress({
      known: new Set(),
      difficult: new Set(),
      currentStreak: 0
    });
  };

  const shuffleCards = () => {
    const shuffled = [...flashcards].sort(() => Math.random() - 0.5);
    setFlashcards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  useEffect(() => {
    if (currentUser) {
      loadFlashcards();
    }
  }, [currentUser, refreshTrigger]);

  return {
    flashcards: getDisplayCards(),
    allFlashcards: flashcards,
    currentIndex,
    isFlipped,
    isLoading,
    progress,
    reviewMode,
    markAsKnown,
    markAsDifficult,
    nextCard,
    previousCard,
    flipCard,
    resetReview,
    shuffleCards,
    loadFlashcards,
  };
};
