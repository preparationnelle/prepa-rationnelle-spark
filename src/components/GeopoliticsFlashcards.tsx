import React from 'react';
import { GeopoliticsFlashcardsBase, type GeopoliticsCard } from '@/components/geopolitics/GeopoliticsFlashcardsBase';
import { geopoliticsGlossary } from '@/data/geopoliticsGlossary';

const data: GeopoliticsCard[] = geopoliticsGlossary.map((item) => ({
  term: item.term,
  definition: item.definition,
}));

export const GeopoliticsFlashcards: React.FC = () => (
  <GeopoliticsFlashcardsBase
    data={data}
    title="Vocabulaire de géopolitique"
    subject="Géopolitique - Glossaire général"
    idOffset={0}
    showCategories={false}
  />
);

export default GeopoliticsFlashcards;
