import React from 'react';
import { Link2 } from 'lucide-react';
import { SpanishGrammarChapterTemplate } from '@/components/formation/espagnol/SpanishGrammarChapterTemplate';
import { relativesSections } from '@/data/spanishRelativesData';

const RelativesPage = () => (
  <SpanishGrammarChapterTemplate
    slug="relatives"
    chapterNumber={16}
    title="Subordonnées Relatives"
    titleAccent="Relatives"
    subtitle="que, quien, el cual, cuyo, lo que : choisir le bon relatif, traduire « dont », et savoir quand la relative passe au subjonctif."
    Icon={Link2}
    sections={relativesSections}
    hasQuiz
    hasFlashcards
  />
);

export default RelativesPage;
