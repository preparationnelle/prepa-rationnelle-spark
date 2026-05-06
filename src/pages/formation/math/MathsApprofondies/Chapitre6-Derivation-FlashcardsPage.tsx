import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { MathFlashcards } from '@/components/MathFlashcards';
import { derivationFlashcards } from '@/data/mathFlashcardsData';

const Chapitre6DerivationFlashcardsPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={6}
      chapterTitle="Dérivation"
      description="Flashcards interactives — Maîtrisez les théorèmes, définitions et formules essentielles avec notation LaTeX."
      subject="maths"
      slug="derivation"
      showNavigation={true}
      activeSection="flashcards"
      titleClassName="text-slate-800"
    >
      <MathFlashcards
        flashcards={derivationFlashcards}
        title="Dérivation"
        chapterNumber={6}
        hideHeader={true}
      />
    </MathChapterTemplate>
  );
};

export default Chapitre6DerivationFlashcardsPage;
