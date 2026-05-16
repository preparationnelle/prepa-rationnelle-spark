import React from 'react';
import { Layers } from 'lucide-react';
import { SpanishGrammarChapterTemplate } from '@/components/formation/espagnol/SpanishGrammarChapterTemplate';
import { periphrasesSections } from '@/data/spanishPeriphrasesData';

const PeriphrasesVerbalesPage = () => (
  <SpanishGrammarChapterTemplate
    slug="periphrases-verbales"
    chapterNumber={18}
    title="Périphrases Verbales"
    titleAccent="Verbales"
    subtitle="ir a, acabar de, volver a, llevar + gérondif, tener + participe… Les structures qui enrichissent l'expression et impressionnent en copie."
    Icon={Layers}
    sections={periphrasesSections}
    hasQuiz
    hasFlashcards
  />
);

export default PeriphrasesVerbalesPage;
