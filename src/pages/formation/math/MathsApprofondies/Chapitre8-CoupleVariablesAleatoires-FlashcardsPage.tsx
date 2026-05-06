import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { MathFlashcards } from '@/components/MathFlashcards';
import { mathFlashcardsData } from '@/data/mathFlashcardsData';

const Chapitre8CoupleVariablesAleatoiresFlashcardsPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={8}
      chapterTitle="Cas particulier du couple"
      description="Flashcards interactives — Maîtrisez les théorèmes, définitions et formules essentielles avec notation LaTeX."
      subject="maths"
      slug="couple-variables-aleatoires"
      showNavigation={true}
      activeSection="flashcards"
      titleClassName="text-slate-800"
    >
      <MathFlashcards
        flashcards={mathFlashcardsData.chapitre8couple}
        title="Cas particulier du couple"
        chapterNumber={8}
        hideHeader={true}
      />
    </MathChapterTemplate>
  );
};

export default Chapitre8CoupleVariablesAleatoiresFlashcardsPage;
