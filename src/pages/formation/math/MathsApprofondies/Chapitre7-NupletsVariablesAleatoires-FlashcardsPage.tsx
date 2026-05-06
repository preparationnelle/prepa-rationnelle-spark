import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { MathFlashcards } from '@/components/MathFlashcards';
import { nupletsVariablesAleatoiresFlashcards } from '@/data/mathFlashcardsData';

const Chapitre7NupletsVariablesAleatoiresFlashcardsPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={7}
      chapterTitle="n-uplets de variables aléatoires réelles"
      description="Flashcards interactives — Maîtrisez les théorèmes, définitions et formules essentielles avec notation LaTeX."
      subject="maths"
      slug="n-uplets-variables-aleatoires"
      showNavigation={true}
      activeSection="flashcards"
      titleClassName="text-slate-800"
    >
      <MathFlashcards
        flashcards={nupletsVariablesAleatoiresFlashcards}
        title="n-uplets de variables aléatoires réelles"
        chapterNumber={7}
        hideHeader={true}
      />
    </MathChapterTemplate>
  );
};

export default Chapitre7NupletsVariablesAleatoiresFlashcardsPage;
