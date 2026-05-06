import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { MathFlashcards } from '@/components/MathFlashcards';
import { mathFlashcardsData } from '@/data/mathFlashcardsData';

const Chapitre10ReductionMatricesSymetriquesFlashcardsPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={9}
      chapterTitle="Réduction des endomorphismes et des matrices symétriques"
      description="Flashcards interactives — Maîtrisez les théorèmes, définitions et formules essentielles avec notation LaTeX."
      subject="maths"
      slug="reduction-matrices-symetriques"
      showNavigation={true}
      activeSection="flashcards"
      titleClassName="text-slate-800"
    >
      <MathFlashcards
        flashcards={mathFlashcardsData.chapitre9reduction}
        title="Réduction des endomorphismes et des matrices symétriques"
        chapterNumber={9}
        hideHeader={true}
      />
    </MathChapterTemplate>
  );
};

export default Chapitre10ReductionMatricesSymetriquesFlashcardsPage;
