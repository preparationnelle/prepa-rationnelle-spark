import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { MathFlashcards } from '@/components/MathFlashcards';
import { convergencesApproximationsFlashcards } from '@/data/mathFlashcardsData';

const Chapitre12ConvergencesApproximationsFlashcardsPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={12}
      chapterTitle="Convergences et approximations"
      description="Flashcards interactives — Maîtrisez les théorèmes, définitions et formules essentielles avec notation LaTeX."
      subject="maths"
      slug="convergences-approximations"
      showNavigation={true}
      activeSection="flashcards"
      titleClassName="text-slate-800"
    >
      <MathFlashcards
        flashcards={convergencesApproximationsFlashcards}
        title="Convergences et approximations"
        chapterNumber={12}
        hideHeader={true}
      />
    </MathChapterTemplate>
  );
};

export default Chapitre12ConvergencesApproximationsFlashcardsPage;
