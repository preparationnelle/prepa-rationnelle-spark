import React from 'react';
import { Scale } from 'lucide-react';
import { SpanishGrammarChapterTemplate } from '@/components/formation/espagnol/SpanishGrammarChapterTemplate';
import { comparativesSections } from '@/data/spanishComparativesData';

const ComparatifsSuperlatifsPage = () => (
  <SpanishGrammarChapterTemplate
    slug="comparatifs-superlatifs"
    chapterNumber={19}
    title="Comparatifs & Superlatifs"
    titleAccent="& Superlatifs"
    subtitle="Supériorité, égalité, irréguliers (mejor, peor, mayor), superlatif absolu en -ísimo et structures comparatives complexes (de lo que, cuanto más…)."
    Icon={Scale}
    sections={comparativesSections}
    hasQuiz
    hasFlashcards
  />
);

export default ComparatifsSuperlatifsPage;
