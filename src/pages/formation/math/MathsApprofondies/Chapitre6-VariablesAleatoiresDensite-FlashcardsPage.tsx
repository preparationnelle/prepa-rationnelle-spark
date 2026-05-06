import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { MathFlashcards } from '@/components/MathFlashcards';
import { variablesAleatoiresDensiteFlashcards } from '@/data/mathFlashcardsData';

const Chapitre6VariablesAleatoiresDensiteFlashcardsPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={6}
      chapterTitle="Variables aléatoires à densité & lois usuelles"
      description="Flashcards interactives — Maîtrisez les théorèmes, définitions et formules essentielles avec notation LaTeX."
      subject="maths"
      slug="variables-aleatoires-densite"
      showNavigation={true}
      activeSection="flashcards"
      titleClassName="text-slate-800"
    >
      <MathFlashcards
        flashcards={variablesAleatoiresDensiteFlashcards}
        title="Variables aléatoires à densité & lois usuelles"
        chapterNumber={6}
        hideHeader={true}
      />
    </MathChapterTemplate>
  );
};

export default Chapitre6VariablesAleatoiresDensiteFlashcardsPage;
