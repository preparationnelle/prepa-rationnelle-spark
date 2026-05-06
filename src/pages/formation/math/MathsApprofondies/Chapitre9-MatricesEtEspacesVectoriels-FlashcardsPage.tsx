import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { MathFlashcards } from '@/components/MathFlashcards';
import { matricesEspacesVectorielsFlashcards } from '@/data/mathFlashcardsData';

const Chapitre9MatricesEtEspacesVectorielsFlashcardsPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={9}
      chapterTitle="Matrices, systèmes linéaires & espaces vectoriels"
      description="Flashcards interactives — Maîtrisez les théorèmes, définitions et formules essentielles avec notation LaTeX."
      subject="maths"
      slug="matrices-espaces-vectoriels"
      showNavigation={true}
      activeSection="flashcards"
      titleClassName="text-slate-800"
    >
      <MathFlashcards
        flashcards={matricesEspacesVectorielsFlashcards}
        title="Matrices, systèmes linéaires & espaces vectoriels"
        chapterNumber={9}
        hideHeader={true}
      />
    </MathChapterTemplate>
  );
};

export default Chapitre9MatricesEtEspacesVectorielsFlashcardsPage;
