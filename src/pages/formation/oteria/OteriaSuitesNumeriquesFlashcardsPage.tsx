import React from 'react';
import { OteriaMinimalistChapterTemplate } from '@/components/formation/OteriaMinimalistChapterTemplate';
import { MathFlashcards } from '@/components/MathFlashcards';
import { MathFlashcard } from '@/data/mathFlashcardsData';

const flashcards = [
  {
    id: 1,
    front: "Que signifie qu'une suite (un) est majorée ?",
    frontLatex: "\\exists M \\in \\mathbb{R}, \\forall n \\in \\mathbb{N}, u_n \\le M",
    back: "Tous les termes de la suite sont inférieurs ou égaux à un réel M fixe.",
    category: "Définitions",
    difficulty: "facile" as const
  },
  {
    id: 2,
    front: "Définition de la convergence vers un réel L",
    frontLatex: "\\forall \\epsilon > 0, \\exists N \\in \\mathbb{N}, \\forall n \\ge N, |u_n - L| < \\epsilon",
    back: "À partir d'un certain rang, tous les termes sont arbitrairement proches de L.",
    category: "Définitions",
    difficulty: "moyen" as const
  },
  {
    id: 3,
    front: "Théorème de la limite monotone (cas croissant)",
    back: "Toute suite croissante et majorée converge (vers une limite finie). Sinon, elle tend vers +∞.",
    category: "Théorèmes",
    difficulty: "moyen" as const
  },
  {
    id: 4,
    front: "Formule explicite d'une suite arithmétique",
    frontLatex: "u_{n+1} = u_n + r \\implies u_n = \\;?",
    back: "",
    backLatex: "u_n = u_0 + n \\cdot r",
    category: "Classiques",
    difficulty: "facile" as const
  },
  {
    id: 5,
    front: "Formule explicite d'une suite géométrique",
    frontLatex: "u_{n+1} = q \\cdot u_n \\implies u_n = \\;?",
    back: "",
    backLatex: "u_n = u_0 \\cdot q^n",
    category: "Classiques",
    difficulty: "facile" as const
  },
  {
    id: 6,
    front: "Limite d'une suite géométrique (q > 1)",
    frontLatex: "\\lim_{n \\to +\\infty} q^n \\text{ si } q > 1",
    back: "La limite est +∞.",
    category: "Limites",
    difficulty: "facile" as const
  },
  {
    id: 7,
    front: "Limite d'une suite géométrique (|q| < 1)",
    frontLatex: "\\lim_{n \\to +\\infty} q^n \\text{ si } -1 < q < 1",
    back: "La limite est 0.",
    category: "Limites",
    difficulty: "facile" as const
  },
  {
    id: 8,
    front: "Théorème des gendarmes (encadrement)",
    frontLatex: "v_n \\le u_n \\le w_n \\text{ et } v_n, w_n \\to L",
    back: "Alors (un) converge aussi vers L.",
    category: "Théorèmes",
    difficulty: "moyen" as const
  },
  {
    id: 9,
    front: "Suite adjacente : définition",
    back: "(un) croissante, (vn) décroissante et un - vn tend vers 0.",
    category: "Définitions",
    difficulty: "moyen" as const
  },
  {
    id: 10,
    front: "Théorème des suites adjacentes",
    back: "Deux suites adjacentes convergent vers la même limite.",
    category: "Théorèmes",
    difficulty: "moyen" as const
  }
];

const OteriaSuitesNumeriquesFlashcardsPage: React.FC = () => {
  const adaptedFlashcards: MathFlashcard[] = flashcards.map(card => ({
    id: card.id,
    front: card.front,
    back: card.back,
    frontLatex: card.frontLatex,
    backLatex: card.backLatex,
    category: card.category,
    chapter: 4,
    difficulty: card.difficulty,
  }));

  return (
    <OteriaMinimalistChapterTemplate
      sessionNumber={4}
      sessionTitle="Suites numériques usuelles"
      description="Définitions convergence, monotonie, bornée, Théorème limite monotone, gendarmes, Suites arithmétiques & géométriques, Suites adjacentes"
      slug="suites-numeriques"
      duration="4h"
      level="Intermédiaire"
      activeSection="flashcards"
      previousSession={{ slug: 'recurrence-recursivite', title: 'Récurrence' }}
      nextSession={{ slug: 'fonctions-variable-reelle', title: 'Fonctions' }}
    >
      <MathFlashcards
        flashcards={adaptedFlashcards}
        title="Flashcards — Suites Numériques"
        chapterNumber={4}
        hideHeader={false}
      />
    </OteriaMinimalistChapterTemplate>
  );
};

export default OteriaSuitesNumeriquesFlashcardsPage;
