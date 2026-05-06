import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { MathFlashcards } from '@/components/MathFlashcards';
import { fonctionsMultivarieesFlashcards } from '@/data/mathFlashcardsData';

const Chapitre4FonctionsMultivarieesCalculDifferentielFlashcardsPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={4}
      chapterTitle="Fonctions multivariées et calcul différentiel"
      description="Flashcards interactives — Maîtrisez les théorèmes, définitions et formules essentielles avec notation LaTeX."
      subject="maths"
      slug="fonctions-multivariees-calcul-differentiel"
      showNavigation={true}
      activeSection="flashcards"
      titleClassName="text-slate-800"
    >
      <MathFlashcards
        flashcards={fonctionsMultivarieesFlashcards}
        title="Fonctions multivariées et calcul différentiel"
        chapterNumber={4}
        hideHeader={true}
      />
    </MathChapterTemplate>
  );
};

export default Chapitre4FonctionsMultivarieesCalculDifferentielFlashcardsPage;
