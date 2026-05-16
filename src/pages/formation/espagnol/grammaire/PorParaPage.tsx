import React from 'react';
import { ArrowLeftRight } from 'lucide-react';
import { SpanishGrammarChapterTemplate } from '@/components/formation/espagnol/SpanishGrammarChapterTemplate';
import { porParaSections } from '@/data/spanishPorParaData';

const PorParaPage = () => (
  <SpanishGrammarChapterTemplate
    slug="por-para"
    chapterNumber={17}
    title="Por vs Para"
    titleAccent="Para"
    subtitle="La confusion n°1 signalée par les correcteurs : valeurs de por, valeurs de para, paires contrastives et locutions figées à connaître par cœur."
    Icon={ArrowLeftRight}
    sections={porParaSections}
    hasQuiz
    hasFlashcards
  />
);

export default PorParaPage;
