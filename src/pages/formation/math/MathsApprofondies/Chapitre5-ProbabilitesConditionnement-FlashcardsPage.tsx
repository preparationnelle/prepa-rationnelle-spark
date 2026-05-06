import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { MathFlashcards } from '@/components/MathFlashcards';
import { probabilitesConditionnementFlashcards } from '@/data/mathFlashcardsData';

const Chapitre5ProbabilitesConditionnementFlashcardsPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={5}
      chapterTitle="Probabilités et conditionnement"
      description="Flashcards interactives — Maîtrisez les théorèmes, définitions et formules essentielles avec notation LaTeX."
      subject="maths"
      slug="probabilites-conditionnement"
      showNavigation={true}
      activeSection="flashcards"
      titleClassName="text-slate-800"
    >
      <MathFlashcards
        flashcards={probabilitesConditionnementFlashcards}
        title="Probabilités et conditionnement"
        chapterNumber={5}
        hideHeader={true}
      />
    </MathChapterTemplate>
  );
};

export default Chapitre5ProbabilitesConditionnementFlashcardsPage;
