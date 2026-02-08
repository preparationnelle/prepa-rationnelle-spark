import React from 'react';
import { OteriaMinimalistChapterTemplate } from '@/components/formation/OteriaMinimalistChapterTemplate';
import { MathFlashcards } from '@/components/MathFlashcards';
import { analyseLoisMonteCarloFlashcards } from '@/data/analyseLoisMonteCarloFlashcardsData';
import { MathFlashcard } from '@/data/mathFlashcardsData';

const OteriaIntegralesMonteCarloFlashcardsPage: React.FC = () => {
  const adaptedFlashcards: MathFlashcard[] = analyseLoisMonteCarloFlashcards.map(card => ({
    id: card.id,
    front: card.front,
    back: card.back,
    frontLatex: card.frontLatex,
    backLatex: card.backLatex,
    category: card.category,
    chapter: 10,
    difficulty: card.difficulty,
  }));

  return (
    <OteriaMinimalistChapterTemplate
      sessionNumber={10}
      sessionTitle="Intégrales & π par Monte-Carlo"
      description="Approximation d'intégrales, histogrammes, théorèmes limites et convergence"
      slug="integrales-monte-carlo"
      duration="4h"
      level="Avancé"
      activeSection="flashcards"
      previousSession={{ slug: 'variables-aleatoires', title: 'Variables Aléatoires' }}
      nextSession={{ slug: 'matrices-markov', title: 'Matrices & Markov' }}
    >
      <MathFlashcards
        flashcards={adaptedFlashcards}
        title="Flashcards — Analyse de lois & Monte Carlo"
        chapterNumber={10}
        hideHeader={false}
      />
    </OteriaMinimalistChapterTemplate>
  );
};

export default OteriaIntegralesMonteCarloFlashcardsPage;
