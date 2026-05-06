import React from 'react';
import { MathChapterTemplate } from '@/components/formation/MathChapterTemplate';
import { MathFlashcards } from '@/components/MathFlashcards';
import { fonctionsUneVariableReelleFlashcards } from '@/data/mathFlashcardsData';

const Chapitre5FonctionsUneVariableReelleFlashcardsPage = () => {
  return (
    <MathChapterTemplate
      chapterNumber={5}
      chapterTitle="Fonctions d'une variable réelle"
      description="Flashcards interactives — Maîtrisez les théorèmes, définitions et formules essentielles avec notation LaTeX."
      subject="maths"
      slug="fonctions-une-variable-reelle"
      showNavigation={true}
      activeSection="flashcards"
      titleClassName="text-slate-800"
      coursePath="/formation/maths-fonctions-d-une-variable-reelle"
      exercisesPath="/formation/maths-fonctions-une-variable-reelle-exercices"
      flashcardsPath="/formation/maths-fonctions-une-variable-reelle-flashcards"
      quizPath="/formation/maths-fonctions-une-variable-reelle-quiz"
    >
      <MathFlashcards
        flashcards={fonctionsUneVariableReelleFlashcards}
        title="Fonctions d'une variable réelle"
        chapterNumber={5}
        hideHeader={true}
      />
    </MathChapterTemplate>
  );
};

export default Chapitre5FonctionsUneVariableReelleFlashcardsPage;
