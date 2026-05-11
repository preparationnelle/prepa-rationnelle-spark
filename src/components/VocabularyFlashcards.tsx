import React, { useMemo } from 'react';
import { ThemedFlashcards, type ThemedFlashcardItem } from '@/components/ui/ThemedFlashcards';
import { vocabularyData } from '@/data/vocabularyData';

interface VocabularyFlashcardsProps {
  language: 'fr' | 'en';
}

export const VocabularyFlashcards: React.FC<VocabularyFlashcardsProps> = ({ language }) => {
  const cards: ThemedFlashcardItem[] = useMemo(
    () =>
      vocabularyData.map((item, idx) => ({
        id: idx,
        front: item.french,
        back: item.english,
        category: item.category,
        hint: item.example,
      })),
    [],
  );

  return (
    <ThemedFlashcards
      cards={cards}
      title={language === 'fr' ? 'Vocabulaire utile pour les concours' : 'Useful vocabulary for the exam'}
      frontLabel={language === 'fr' ? 'Français' : 'French'}
      backLabel={language === 'fr' ? 'Anglais' : 'English'}
      enableShuffle
    />
  );
};

export default VocabularyFlashcards;
