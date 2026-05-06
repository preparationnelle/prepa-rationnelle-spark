import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { MathFlashcards } from '@/components/MathFlashcards';
import { probabilitesConditionnementFlashcards } from '@/data/mathFlashcardsData';

const Chapitre10ProbabilitesEtConditionnementFlashcardsPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={10}
      chapterTitle="Espaces probabilisés & conditionnement"
      description="Flashcards interactives — Maîtrisez les théorèmes, définitions et formules essentielles avec notation LaTeX."
      subject="maths"
      slug="probabilites-conditionnement"
      showNavigation={true}
      activeSection="flashcards"
      titleClassName="text-slate-800"
    >
      <MathFlashcards
        flashcards={probabilitesConditionnementFlashcards}
        title="Espaces probabilisés & conditionnement"
        chapterNumber={10}
        hideHeader={true}
      />
    </MathChapterTemplate>
  );
};

export default Chapitre10ProbabilitesEtConditionnementFlashcardsPage;
