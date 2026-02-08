import React from 'react';
import { OteriaMinimalistChapterTemplate } from '@/components/formation/OteriaMinimalistChapterTemplate';
import { MathFlashcards } from '@/components/MathFlashcards';
import { fonctionsFlashcards } from '@/data/fonctionsFlashcardsData';
import { MathFlashcard } from '@/data/mathFlashcardsData';

const OteriaFonctionsFlashcardsPage: React.FC = () => {
  // Adapt fonctionsFlashcards to MathFlashcard interface
  const adaptedFlashcards: MathFlashcard[] = fonctionsFlashcards.map(card => ({
    id: card.id,
    front: card.question,
    back: card.answer,
    category: card.category,
    chapter: 5, // Arbitrary chapter number for Oteria
    difficulty: card.difficulty,
    // Add dummy latex fields if needed, or leave undefined
  }));

  return (
    <OteriaMinimalistChapterTemplate
      sessionNumber={5}
      sessionTitle="Fonctions, croissance, polynômes (I)"
      description="Mémorisez les définitions clés : ensembles, applications, continuité, limites et Python."
      slug="fonctions-variable-reelle"
      duration="3h"
      level="Débutant"
      activeSection="flashcards"
      previousSession={{ slug: 'suites-numeriques', title: 'Suites numériques' }}
      nextSession={{ slug: 'polynomes-approximation', title: 'Polynômes & approximation' }}
    >
      <MathFlashcards
        flashcards={adaptedFlashcards}
        title="Flashcards — Fonctions & Polynômes"
        chapterNumber={5}
        hideHeader={false}
      />
    </OteriaMinimalistChapterTemplate>
  );
};

export default OteriaFonctionsFlashcardsPage;
