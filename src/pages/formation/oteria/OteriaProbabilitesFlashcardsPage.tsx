import React from 'react';
import { OteriaMinimalistChapterTemplate } from '@/components/formation/OteriaMinimalistChapterTemplate';
import { MathFlashcards } from '@/components/MathFlashcards';
import { probabilitesFlashcards } from '@/data/probabilitesFlashcardsData';
import { MathFlashcard } from '@/data/mathFlashcardsData';

const OteriaProbabilitesFlashcardsPage: React.FC = () => {
  const adaptedFlashcards: MathFlashcard[] = probabilitesFlashcards.map(card => ({
    id: card.id,
    front: card.front,
    back: card.back,
    frontLatex: card.frontLatex,
    backLatex: card.backLatex,
    category: card.category,
    chapter: 8,
    difficulty: card.difficulty,
  }));

  return (
    <OteriaMinimalistChapterTemplate
      sessionNumber={8}
      sessionTitle="Introduction aux probabilités"
      description="Génération d'aléatoire, Règles addition / multiplication, indépendance, probabilités conditionnelles."
      slug="probabilites"
      courseSlug="probabilites-introduction-cours"
      exercisesSlug="probabilites-exercices"
      flashcardsSlug="probabilites-flashcards"
      quizSlug="probabilites-qcm"
      duration="4h"
      level="Intermédiaire"
      activeSection="flashcards"
      previousSession={{ slug: 'denombrement-paradoxes', title: 'Dénombrement' }}
      nextSession={{ slug: 'variables-aleatoires', title: 'Variables aléatoires' }}
    >
      <MathFlashcards
        flashcards={adaptedFlashcards}
        title="Flashcards — Probabilités"
        chapterNumber={8}
        hideHeader={false}
      />
    </OteriaMinimalistChapterTemplate>
  );
};

export default OteriaProbabilitesFlashcardsPage;
