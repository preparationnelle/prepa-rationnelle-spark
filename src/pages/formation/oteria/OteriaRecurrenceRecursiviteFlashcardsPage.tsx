import React from 'react';
import { OteriaMinimalistChapterTemplate } from '@/components/formation/OteriaMinimalistChapterTemplate';
import { MathFlashcards } from '@/components/MathFlashcards';
import { MathFlashcard } from '@/data/mathFlashcardsData';

const flashcards = [
  {
    id: 1,
    front: "Somme des n premiers entiers",
    frontLatex: "\\sum_{k=1}^n k = \\;?",
    back: "",
    backLatex: "\\frac{n(n+1)}{2}",
    category: "Sommes",
    difficulty: "facile" as const
  },
  {
    id: 2,
    front: "Somme des carrés",
    frontLatex: "\\sum_{k=1}^n k^2 = \\;?",
    back: "",
    backLatex: "\\frac{n(n+1)(2n+1)}{6}",
    category: "Sommes",
    difficulty: "moyen" as const
  },
  {
    id: 3,
    front: "Somme géométrique",
    frontLatex: "\\sum_{k=0}^n q^k = \\;? \\quad (q \\neq 1)",
    back: "",
    backLatex: "\\frac{1-q^{n+1}}{1-q}",
    category: "Sommes",
    difficulty: "facile" as const
  },
  {
    id: 4,
    front: "Formule du binôme de Newton",
    frontLatex: "(a+b)^n = \\;?",
    back: "",
    backLatex: "\\sum_{k=0}^n \\binom{n}{k} a^k b^{n-k}",
    category: "Binôme",
    difficulty: "moyen" as const
  },
  {
    id: 5,
    front: "Relation de Pascal",
    frontLatex: "\\binom{n}{k} = \\;?",
    back: "",
    backLatex: "\\binom{n-1}{k-1} + \\binom{n-1}{k}",
    category: "Binôme",
    difficulty: "moyen" as const
  },
  {
    id: 6,
    front: "Définition de la factorielle n!",
    back: "n! = 1 × 2 × … × n. Convention : 0! = 1",
    frontLatex: "n! = \\;?",
    backLatex: "n! = \\prod_{k=1}^n k, \\quad 0! = 1",
    category: "Factorielles",
    difficulty: "facile" as const
  },
  {
    id: 7,
    front: "Valeurs particulières des coefficients binomiaux",
    frontLatex: "\\binom{n}{0} = \\;? \\quad \\binom{n}{n} = \\;?",
    back: "",
    backLatex: "\\binom{n}{0} = 1 \\quad \\text{et} \\quad \\binom{n}{n} = 1",
    category: "Binôme",
    difficulty: "facile" as const
  },
  {
    id: 8,
    front: "Formule explicite du coefficient binomial",
    frontLatex: "\\binom{n}{k} = \\;?",
    back: "",
    backLatex: "\\frac{n!}{k!(n-k)!}",
    category: "Binôme",
    difficulty: "facile" as const
  }
];

const OteriaRecurrenceRecursiviteFlashcardsPage: React.FC = () => {
  const adaptedFlashcards: MathFlashcard[] = flashcards.map(card => ({
    id: card.id,
    front: card.front,
    back: card.back,
    frontLatex: card.frontLatex,
    backLatex: card.backLatex,
    category: card.category,
    chapter: 3,
    difficulty: card.difficulty,
  }));

  return (
    <OteriaMinimalistChapterTemplate
      sessionNumber={3}
      sessionTitle="Récurrence & récursivité – sommes / produits"
      description="Ensembles N Z Q R, fonctions usuelles, Preuve par récurrence simple/double/forte, Programmes récursifs classiques (factorielle, Fib)"
      slug="recurrence"
      courseSlug="recurrence-recursivite-cours"
      duration="4h"
      level="Intermédiaire"
      activeSection="flashcards"
      previousSession={{ slug: 'python', title: 'Bases Python' }}
      nextSession={{ slug: 'suites-numeriques', title: 'Suites numériques' }}
    >
      <MathFlashcards
        flashcards={adaptedFlashcards}
        title="Flashcards — Sommes & Récurrence"
        chapterNumber={3}
        hideHeader={false}
      />
    </OteriaMinimalistChapterTemplate>
  );
};

export default OteriaRecurrenceRecursiviteFlashcardsPage;
