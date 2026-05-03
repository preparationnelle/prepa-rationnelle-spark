import React from 'react';
import { OteriaChapterTemplate } from '@/components/formation/OteriaChapterTemplate';
import { OteriaQCM, QCMQuestion } from '@/components/formation/OteriaQCM';

// Données du QCM
const qcmData = {
  title: "Sommes & Produits — QCM",
  questions: [
    {
      id: 1,
      question: "Quelle est la valeur de $\\sum_{k=1}^n C$ où C est une constante ?",
      options: [
        { id: 'a', text: "$C$", correct: false },
        { id: 'b', text: "$nC$", correct: true },
        { id: 'c', text: "$n^2 C$", correct: false },
        { id: 'd', text: "$(n+1)C$", correct: false },
      ],
      explanation: "C'est la somme de n termes identiques égaux à C : $\\underbrace{C + C + \\cdots + C}_{n \\text{ fois}} = nC$."
    },
    {
      id: 2,
      question: "Que vaut $\\sum_{k=1}^n k$ ?",
      options: [
        { id: 'a', text: "$n^2$", correct: false },
        { id: 'b', text: "$\\frac{n(n+1)}{2}$", correct: true },
        { id: 'c', text: "$n(n+1)$", correct: false },
        { id: 'd', text: "$\\frac{n^2+n}{4}$", correct: false },
      ],
      explanation: "C'est la formule classique de la somme des n premiers entiers."
    },
    {
      id: 3,
      question: "Quelle instruction Python calcule correctement $\\sum_{k=0}^{10} k^2$ ?",
      options: [
        { id: 'a', text: "`sum([k**2 for k in range(10)])`", correct: false },
        { id: 'b', text: "`sum([k**2 for k in range(11)])`", correct: true },
        { id: 'c', text: "`sum([k^2 for k in range(11)])`", correct: false },
        { id: 'd', text: "`np.sum(np.arange(10)**2)`", correct: false },
      ],
      explanation: "`range(11)` génère les entiers de 0 à 10 inclus. `range(10)` s'arrête à 9. En Python, `^` est le OU exclusif binaire, la puissance s'écrit `**`."
    },
    {
      id: 4,
      question: "Que vaut $\\prod_{k=1}^n \\frac{k+1}{k}$ (produit télescopique) ?",
      options: [
        { id: 'a', text: "$n$", correct: false },
        { id: 'b', text: "$n+1$", correct: true },
        { id: 'c', text: "$\\frac{1}{n}$", correct: false },
        { id: 'd', text: "$n!$", correct: false },
      ],
      explanation: "$\\frac{2}{1} \\times \\frac{3}{2} \\times \\cdots \\times \\frac{n+1}{n} = n+1$ (tous les termes intermédiaires se simplifient)."
    },
    {
      id: 5,
      question: "Combien de termes comporte la somme $\\sum_{k=5}^{15} u_k$ ?",
      options: [
        { id: 'a', text: "10", correct: false },
        { id: 'b', text: "11", correct: true },
        { id: 'c', text: "15", correct: false },
        { id: 'd', text: "9", correct: false },
      ],
      explanation: "Le nombre de termes est (indice final - indice initial) + 1, soit $15 - 5 + 1 = 11$."
    },
    {
      id: 6,
      question: "Quelle est la valeur de $\\binom{n}{1}$ ?",
      options: [
        { id: 'a', text: "$1$", correct: false },
        { id: 'b', text: "$n$", correct: true },
        { id: 'c', text: "$n!$", correct: false },
        { id: 'd', text: "$0$", correct: false },
      ],
      explanation: "Il y a n façons de choisir 1 élément parmi n."
    },
    {
      id: 7,
      question: "Si `S = 0` et qu'on exécute `for k in range(3): S += k`, que vaut S ?",
      options: [
        { id: 'a', text: "3", correct: true },
        { id: 'b', text: "6", correct: false },
        { id: 'c', text: "0", correct: false },
        { id: 'd', text: "5", correct: false },
      ],
      explanation: "`range(3)` donne 0, 1, 2. Donc $S = 0 + 0 + 1 + 2 = 3$."
    },
    {
      id: 8,
      question: "Que renvoie `math.comb(4, 2)` ?",
      options: [
        { id: 'a', text: "4", correct: false },
        { id: 'b', text: "6", correct: true },
        { id: 'c', text: "8", correct: false },
        { id: 'd', text: "12", correct: false },
      ],
      explanation: "$\\binom{4}{2} = \\frac{4 \\times 3}{2} = 6$."
    }
  ]
};

const OteriaRecurrenceRecursiviteQCMPage = () => {
  return (
    <OteriaChapterTemplate
      sessionNumber={3}
      sessionTitle="Sommes, produits & coefficients binomiaux"
      description="Évaluez votre compréhension des sommes, produits et concepts combinatoires"
      slug="recurrence"
      courseSlug="recurrence-recursivite-cours"
      flashcardsSlug="recurrence-recursivite-flashcards"
      duration="4h"
      level="Intermédiaire"
      activeSection="quiz"
      previousSession={{ slug: 'python', title: 'Bases de Python' }}
      nextSession={{ slug: 'suites-numeriques', title: 'Suites numériques' }}
    >
      <OteriaQCM
        questions={qcmData.questions}
        title={qcmData.title}
        qcmId="oteria-recurrence-recursivite"
      />
    </OteriaChapterTemplate>
  );
};

export default OteriaRecurrenceRecursiviteQCMPage;
