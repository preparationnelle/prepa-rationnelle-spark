import React from 'react';
import { MessageSquareQuote } from 'lucide-react';
import { SpanishGrammarChapterTemplate } from '@/components/formation/espagnol/SpanishGrammarChapterTemplate';
import { reportedSpeechSections } from '@/data/spanishReportedSpeechData';

const StyleIndirectPage = () => (
  <SpanishGrammarChapterTemplate
    slug="style-indirect"
    chapterNumber={15}
    title="Style Indirect"
    titleAccent="Indirect"
    subtitle="Rapporter des paroles : transposition des temps, des personnes et des déictiques, questions et ordres rapportés. Un automatisme de thème."
    Icon={MessageSquareQuote}
    sections={reportedSpeechSections}
    hasQuiz
    hasFlashcards
  />
);

export default StyleIndirectPage;
