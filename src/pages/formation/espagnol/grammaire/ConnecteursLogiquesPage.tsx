import React from 'react';
import { Network } from 'lucide-react';
import { SpanishGrammarChapterTemplate } from '@/components/formation/espagnol/SpanishGrammarChapterTemplate';
import { connectorsSections } from '@/data/spanishConnectorsData';

const ConnecteursLogiquesPage = () => (
  <SpanishGrammarChapterTemplate
    slug="connecteurs-logiques"
    chapterNumber={20}
    title="Connecteurs Logiques"
    titleAccent="Logiques"
    subtitle="La boîte à outils de l'argumentation : addition, cause, conséquence, opposition, concession, reformulation — pour structurer synthèse et dissertation."
    Icon={Network}
    sections={connectorsSections}
    hasQuiz
    hasFlashcards
  />
);

export default ConnecteursLogiquesPage;
