import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { MathFlashcards } from '@/components/MathFlashcards';
import { endomorphismesMatricesFlashcards } from '@/data/mathFlashcardsData';

const Chapitre2EndomorphismesMatricesFlashcardsPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={2}
      chapterTitle="Éléments propres et réduction des endomorphismes"
      description="Flashcards interactives — Maîtrisez les théorèmes, définitions et formules essentielles avec notation LaTeX."
      subject="maths"
      slug="endomorphismes-matrices-avancees"
      showNavigation={true}
      activeSection="flashcards"
      titleClassName="text-slate-800"
    >
      <MathFlashcards
        flashcards={endomorphismesMatricesFlashcards}
        title="Éléments propres et réduction des endomorphismes"
        chapterNumber={2}
        hideHeader={true}
      />
    </MathChapterTemplate>
  );
};

export default Chapitre2EndomorphismesMatricesFlashcardsPage;
