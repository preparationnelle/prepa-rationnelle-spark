import React from 'react';
import { Split } from 'lucide-react';
import { SpanishGrammarChapterTemplate } from '@/components/formation/espagnol/SpanishGrammarChapterTemplate';
import { conditionalsSections } from '@/data/spanishConditionalsData';

const ConditionnellesPage = () => (
  <SpanishGrammarChapterTemplate
    slug="conditionnelles"
    chapterNumber={14}
    title="Conditionnelles & Hypothèse"
    titleAccent="& Hypothèse"
    subtitle="Les trois types de « si », le système hypothétique et les connecteurs conditionnels — sans jamais mettre de conditionnel après « si »."
    Icon={Split}
    sections={conditionalsSections}
    hasQuiz
    hasFlashcards
  />
);

export default ConditionnellesPage;
