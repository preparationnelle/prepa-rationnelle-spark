import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { MathFlashcards } from '@/components/MathFlashcards';
import { complementsAlgebreLineaireFlashcards } from '@/data/mathFlashcardsData';

const Chapitre1ComplementsAlgebreLineaireFlashcardsPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={1}
      chapterTitle="Compléments d'algèbre linéaire"
      description="Flashcards interactives — Maîtrisez les théorèmes, définitions et formules essentielles avec notation LaTeX."
      subject="maths"
      slug="complements-algebre-lineaire"
      showNavigation={true}
      activeSection="flashcards"
      titleClassName="text-slate-800"
    >
      <MathFlashcards
        flashcards={complementsAlgebreLineaireFlashcards}
        title="Compléments d'algèbre linéaire"
        chapterNumber={1}
        hideHeader={true}
      />
    </MathChapterTemplate>
  );
};

export default Chapitre1ComplementsAlgebreLineaireFlashcardsPage;
