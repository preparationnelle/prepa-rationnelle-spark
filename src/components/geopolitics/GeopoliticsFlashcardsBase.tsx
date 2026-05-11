import React, { useMemo } from 'react';
import { ThemedFlashcards, type ThemedFlashcardItem } from '@/components/ui/ThemedFlashcards';
import { useUserData } from '@/context/UserDataContext';

export interface GeopoliticsCard {
  term: string;
  definition: string;
  category?: string;
}

interface GeopoliticsFlashcardsBaseProps {
  data: GeopoliticsCard[];
  title: string;
  subject: string;
  idOffset: number;
  showCategories?: boolean;
  enableShuffle?: boolean;
}

export const GeopoliticsFlashcardsBase: React.FC<GeopoliticsFlashcardsBaseProps> = ({
  data,
  title,
  subject,
  idOffset,
  showCategories = true,
  enableShuffle = true,
}) => {
  const { addFlashcardForReview, removeFlashcardFromReview, isFlashcardMarkedForReview, updateProgress } = useUserData();

  const cards: ThemedFlashcardItem[] = useMemo(
    () =>
      data.map((item, idx) => ({
        id: idOffset + idx,
        front: item.term,
        back: item.definition,
        category: item.category,
      })),
    [data, idOffset],
  );

  return (
    <ThemedFlashcards
      cards={cards}
      title={title}
      frontLabel="Terme"
      backLabel="Définition"
      showCategories={showCategories}
      enableShuffle={enableShuffle}
      isMarkedForReview={(card) => isFlashcardMarkedForReview(Number(card.id), 'english')}
      onMarkReview={(card, marked) => {
        const id = Number(card.id);
        if (marked) {
          addFlashcardForReview({
            id,
            language: 'english',
            category: card.category ?? '',
            french: card.front,
            translation: card.back,
          });
        } else {
          removeFlashcardFromReview(id, 'english');
        }
      }}
      onProgress={(studied) =>
        updateProgress({
          totalFlashcardsStudied: studied,
          subjectsStudied: [subject],
        })
      }
    />
  );
};

export default GeopoliticsFlashcardsBase;
