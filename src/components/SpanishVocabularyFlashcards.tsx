import React, { useMemo } from 'react';
import { ThemedFlashcards, type ThemedFlashcardItem } from '@/components/ui/ThemedFlashcards';
import { spanishVocabularyData, type SpanishVocabularyItem } from '@/data/spanishVocabularyData';
import { useUserData } from '@/context/UserDataContext';

interface SpanishVocabularyFlashcardsProps {
  language: 'fr' | 'en';
  filterCategories?: string[];
}

export const SpanishVocabularyFlashcards: React.FC<SpanishVocabularyFlashcardsProps> = ({
  filterCategories,
}) => {
  const {
    addFlashcardForReview,
    removeFlashcardFromReview,
    isFlashcardMarkedForReview,
    updateProgress,
  } = useUserData();

  const baseData: SpanishVocabularyItem[] = useMemo(
    () =>
      filterCategories
        ? spanishVocabularyData.filter((item) => filterCategories.includes(item.category))
        : spanishVocabularyData,
    [filterCategories],
  );

  const cards: ThemedFlashcardItem[] = useMemo(
    () =>
      baseData.map((item) => ({
        id: item.id,
        front: item.french,
        back: item.spanish,
        category: item.category,
      })),
    [baseData],
  );

  const numericId = (cardId: string | number | undefined) => {
    if (typeof cardId === 'number') return cardId;
    const str = String(cardId ?? '');
    return parseInt(str.replace('vocab_', ''), 10) || 0;
  };

  return (
    <ThemedFlashcards
      cards={cards}
      title={filterCategories ? 'Vocabulaire spécialisé espagnol' : 'Vocabulaire espagnol — français'}
      frontLabel="Français"
      backLabel="Espagnol"
      showCategories
      enableShuffle
      isMarkedForReview={(card) => isFlashcardMarkedForReview(numericId(card.id), 'spanish')}
      onMarkReview={(card, marked) => {
        const id = numericId(card.id);
        if (marked) {
          addFlashcardForReview({
            id,
            language: 'spanish',
            category: card.category ?? '',
            french: card.front,
            translation: card.back,
          });
        } else {
          removeFlashcardFromReview(id, 'spanish');
        }
      }}
      onProgress={(studied) =>
        updateProgress({
          totalFlashcardsStudied: studied,
          subjectsStudied: ['Espagnol'],
        })
      }
    />
  );
};

export default SpanishVocabularyFlashcards;
