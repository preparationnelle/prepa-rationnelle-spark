import React from 'react';
import { Sparkles } from 'lucide-react';
import { SpanishGrammarChapterTemplate } from '@/components/formation/espagnol/SpanishGrammarChapterTemplate';
import { subjonctifSections } from '@/data/spanishSubjonctifData';

const SubjonctifPage = () => (
  <SpanishGrammarChapterTemplate
    slug="subjonctif"
    chapterNumber={12}
    title="Le Subjonctif"
    titleAccent="Subjonctif"
    subtitle="Le mode du virtuel : formation, déclencheurs et test de décision pour ne plus jamais hésiter entre indicatif et subjonctif aux concours."
    Icon={Sparkles}
    sections={subjonctifSections}
    hasQuiz
    hasFlashcards
  />
);

export default SubjonctifPage;
