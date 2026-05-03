import React from 'react';
import { OteriaMinimalistChapterTemplate } from '@/components/formation/OteriaMinimalistChapterTemplate';
import { MathFlashcards } from '@/components/MathFlashcards';
import { matricesMarkovFlashcards } from '@/data/matricesMarkovFlashcardsData';
import { MathFlashcard } from '@/data/mathFlashcardsData';

const OteriaMatricesMarkovFlashcardsPage: React.FC = () => {
  const adaptedFlashcards: MathFlashcard[] = matricesMarkovFlashcards.map(card => ({
    id: card.id,
    front: card.front,
    back: card.back,
    frontLatex: card.frontLatex,
    backLatex: card.backLatex,
    category: card.category,
    chapter: 11,
    difficulty: card.difficulty,
  }));

  return (
    <OteriaMinimalistChapterTemplate
      sessionNumber={11}
      sessionTitle="Matrices & Chaînes de Markov"
      description="Opérations matricielles, déterminant, inverse, systèmes linéaires, valeurs propres, Markov"
      slug="matrices-markov"
      duration="4h"
      level="Avancé"
      activeSection="flashcards"
      previousSession={{ slug: 'integrales-monte-carlo', title: 'Intégrales & Monte-Carlo' }}
      nextSession={{ slug: 'matrices-stochastiques', title: 'Arithmétique & Crypto' }}
    >
      <MathFlashcards
        flashcards={adaptedFlashcards}
        title="Flashcards — Matrices & Markov"
        chapterNumber={11}
        hideHeader={false}
      />
    </OteriaMinimalistChapterTemplate>
  );
};

export default OteriaMatricesMarkovFlashcardsPage;
