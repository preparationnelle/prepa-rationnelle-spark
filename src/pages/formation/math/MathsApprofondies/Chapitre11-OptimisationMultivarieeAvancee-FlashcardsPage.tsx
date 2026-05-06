import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { MathFlashcards } from '@/components/MathFlashcards';
import { optimisationMultivarieeAvanceeFlashcards } from '@/data/mathFlashcardsData';

const Chapitre11OptimisationMultivarieeAvanceeFlashcardsPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={11}
      chapterTitle="Optimisation multivariée avancée"
      description="Flashcards interactives — Maîtrisez les théorèmes, définitions et formules essentielles avec notation LaTeX."
      subject="maths"
      slug="optimisation-multivariee-avancee"
      showNavigation={true}
      activeSection="flashcards"
      titleClassName="text-slate-800"
    >
      <MathFlashcards
        flashcards={optimisationMultivarieeAvanceeFlashcards}
        title="Optimisation multivariée avancée"
        chapterNumber={11}
        hideHeader={true}
      />
    </MathChapterTemplate>
  );
};

export default Chapitre11OptimisationMultivarieeAvanceeFlashcardsPage;
