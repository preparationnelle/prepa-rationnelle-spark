import React from 'react';
import { Link2 } from 'lucide-react';
import { SpanishGrammarChapterTemplate } from '@/components/formation/espagnol/SpanishGrammarChapterTemplate';
import { concordanceSections } from '@/data/spanishConcordanceData';

const ConcordanceTempsPage = () => (
  <SpanishGrammarChapterTemplate
    slug="concordance-temps"
    chapterNumber={13}
    title="Concordance des Temps"
    titleAccent="des Temps"
    subtitle="Axe du présent, axe du passé : le temps du verbe principal commande celui de la subordonnée. La faute la plus pénalisée en thème, expliquée pas à pas."
    Icon={Link2}
    sections={concordanceSections}
    hasQuiz
    hasFlashcards
  />
);

export default ConcordanceTempsPage;
