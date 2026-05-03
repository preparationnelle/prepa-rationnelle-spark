import React from 'react';
import { OteriaMinimalistChapterTemplate } from '@/components/formation/OteriaMinimalistChapterTemplate';
import { MathFlashcards } from '@/components/MathFlashcards';
import { arithmeticModularFlashcards } from '@/data/arithmeticModularFlashcardsData';

const OteriaMatricesStochastiquesFlashcardsPage: React.FC = () => {
  return (
    <OteriaMinimalistChapterTemplate
      sessionNumber={12}
      sessionTitle="Arithmétique modulaire et Cryptographie affine"
      description="Divisibilité, théorèmes de Gauss & Fermat, Congruences, inverse modulaire, Cryptographie : RSA & Diffie-Hellman"
      slug="matrices-stochastiques"
      duration="4h"
      level="Avancé"
      activeSection="flashcards"
      previousSession={{ slug: 'matrices-markov', title: 'Matrices & Markov' }}
    >
      <MathFlashcards
        flashcards={arithmeticModularFlashcards}
        title="Flashcards — Arithmétique & Cryptographie"
        chapterNumber={12}
        hideHeader={false}
      />
    </OteriaMinimalistChapterTemplate>
  );
};

export default OteriaMatricesStochastiquesFlashcardsPage;
