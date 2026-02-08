import React from 'react';
import { OteriaMinimalistChapterTemplate } from '@/components/formation/OteriaMinimalistChapterTemplate';
import { MathFlashcards } from '@/components/MathFlashcards';
import { denombrementFlashcards } from '@/data/denombrementFlashcardsData';
import { MathFlashcard } from '@/data/mathFlashcardsData';

const OteriaDenombrementFlashcardsPage: React.FC = () => {
  const adaptedFlashcards: MathFlashcard[] = denombrementFlashcards.map(card => ({
    id: card.id,
    front: card.front,
    back: card.back,
    frontLatex: card.frontLatex,
    backLatex: card.backLatex,
    category: card.category,
    chapter: 7,
    difficulty: card.difficulty,
  }));

  return (
    <OteriaMinimalistChapterTemplate
      sessionNumber={7}
      sessionTitle="Dénombrement & paradoxes"
      description="Factorielles, permutations, coefficients binomiaux, principe multiplicatif/additif, paradoxe des anniversaires."
      slug="denombrement"
      courseSlug="denombrement-paradoxes-cours"
      exercisesSlug="denombrement-exercices"
      flashcardsSlug="denombrement-flashcards"
      quizSlug="denombrement-qcm"
      duration="4h"
      level="Intermédiaire"
      activeSection="flashcards"
      previousSession={{ slug: 'polynomes-approximation', title: 'Polynômes' }}
      nextSession={{ slug: 'probabilites-introduction', title: 'Probabilités' }}
    >
      <MathFlashcards
        flashcards={adaptedFlashcards}
        title="Flashcards — Dénombrement"
        chapterNumber={7}
        hideHeader={false}
      />
    </OteriaMinimalistChapterTemplate>
  );
};

export default OteriaDenombrementFlashcardsPage;
