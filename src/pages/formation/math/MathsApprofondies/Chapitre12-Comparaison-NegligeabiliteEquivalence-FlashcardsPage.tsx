import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { MathFlashcards } from '@/components/MathFlashcards';
import { comparaisonNegligeabiliteEquivalenceFlashcards } from '@/data/mathFlashcardsData';

const Chapitre12ComparaisonNegligeabiliteEquivalenceFlashcardsPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={12}
      chapterTitle="Comparaison — négligeabilité & équivalence"
      description="Flashcards interactives — Maîtrisez les théorèmes, définitions et formules essentielles avec notation LaTeX."
      subject="maths"
      slug="comparaison-negligeabilite-equivalence"
      showNavigation={true}
      activeSection="flashcards"
      titleClassName="text-slate-800"
    >
      <MathFlashcards
        flashcards={comparaisonNegligeabiliteEquivalenceFlashcards}
        title="Comparaison — négligeabilité & équivalence"
        chapterNumber={12}
        hideHeader={true}
      />
    </MathChapterTemplate>
  );
};

export default Chapitre12ComparaisonNegligeabiliteEquivalenceFlashcardsPage;
