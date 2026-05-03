import React from 'react';
import { OteriaMinimalistChapterTemplate } from '@/components/formation/OteriaMinimalistChapterTemplate';
import { MathFlashcards } from '@/components/MathFlashcards';
import { logicFlashcards } from '@/data/logicFlashcardsData';
import { MathFlashcard } from '@/data/mathFlashcardsData';

const OteriaLogiqueFondamentaleFlashcardsPage: React.FC = () => {
  const adaptedFlashcards: MathFlashcard[] = logicFlashcards.map(card => ({
    id: card.id,
    front: card.front,
    back: card.back,
    frontLatex: card.frontLatex,
    backLatex: card.backLatex,
    category: card.category,
    chapter: 1,
    difficulty: card.difficulty as 'facile' | 'moyen' | 'difficile',
  }));

  return (
    <OteriaMinimalistChapterTemplate
      sessionNumber={1}
      sessionTitle="Logique fondamentale & booléens en Python"
      description="Tables de vérité, connecteurs (¬ ∧ ∨ ⇒), Quantificateurs ∀ / ∃ & rôle en preuve, Traduction : not, and, or ; booléens True/False"
      slug="logique-fondamentale"
      duration="3h"
      level="Débutant"
      activeSection="flashcards"
      nextSession={{ slug: 'python-bases', title: 'Bases de Python' }}
    >
      <MathFlashcards
        flashcards={adaptedFlashcards}
        title="Flashcards — Logique & Booléens"
        chapterNumber={1}
        hideHeader={false}
      />
    </OteriaMinimalistChapterTemplate>
  );
};

export default OteriaLogiqueFondamentaleFlashcardsPage;