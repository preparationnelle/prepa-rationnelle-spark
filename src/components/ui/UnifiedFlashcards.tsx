import React, { useMemo } from 'react';
import { ThemedFlashcards, type ThemedFlashcardItem } from '@/components/ui/ThemedFlashcards';

interface VocabularyItem {
  category: string;
  [key: string]: string;
}

interface UnifiedFlashcardsProps {
  data: VocabularyItem[];
  title: string;
  language?: 'fr' | 'en';
  frontKey?: string;
  backKey?: string;
  frontLabel?: string;
  backLabel?: string;
}

export const UnifiedFlashcards: React.FC<UnifiedFlashcardsProps> = ({
  data,
  title,
  frontKey = 'spanish',
  backKey = 'french',
  frontLabel = 'Espagnol',
  backLabel = 'Français',
}) => {
  const cards: ThemedFlashcardItem[] = useMemo(
    () =>
      data.map((item, idx) => ({
        id: `${frontKey}-${idx}`,
        front: item[frontKey] ?? '',
        back: item[backKey] ?? '',
        category: item.category,
      })),
    [data, frontKey, backKey],
  );

  return (
    <ThemedFlashcards
      cards={cards}
      title={title}
      frontLabel={frontLabel}
      backLabel={backLabel}
      showCategories
    />
  );
};

export default UnifiedFlashcards;
