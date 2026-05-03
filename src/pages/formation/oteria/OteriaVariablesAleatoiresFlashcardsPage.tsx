import React from 'react';
import { OteriaMinimalistChapterTemplate } from '@/components/formation/OteriaMinimalistChapterTemplate';
import { MathFlashcards } from '@/components/MathFlashcards';
import { variablesAleatoiresFlashcards } from '@/data/variablesAleatoiresFlashcardsData';
import { MathFlashcard } from '@/data/mathFlashcardsData';

const OteriaVariablesAleatoiresFlashcardsPage: React.FC = () => {
  const adaptedFlashcards: MathFlashcard[] = variablesAleatoiresFlashcards.map(card => ({
    id: card.id,
    front: card.front,
    back: card.back,
    frontLatex: card.frontLatex,
    backLatex: card.backLatex,
    category: card.category,
    chapter: 9,
    difficulty: card.difficulty,
  }));

  return (
    <OteriaMinimalistChapterTemplate
      sessionNumber={9}
      sessionTitle="Variables aléatoires & histogrammes"
      description="Lois usuelles (Bernoulli, Binomiale, Géométrique, Poisson, Expo…), espérance, variance."
      slug="variables-aleatoires"
      courseSlug="variables-aleatoires-cours"
      exercisesSlug="variables-aleatoires-exercices"
      flashcardsSlug="variables-aleatoires-flashcards"
      quizSlug="variables-aleatoires-qcm"
      duration="4h"
      level="Intermédiaire"
      activeSection="flashcards"
      previousSession={{ slug: 'probabilites-introduction', title: 'Probabilités' }}
      nextSession={{ slug: 'integrales-monte-carlo', title: 'Intégrales & Monte-Carlo' }}
    >
      <MathFlashcards
        flashcards={adaptedFlashcards}
        title="Flashcards — Variables Aléatoires"
        chapterNumber={9}
        hideHeader={false}
      />
    </OteriaMinimalistChapterTemplate>
  );
};

export default OteriaVariablesAleatoiresFlashcardsPage;
