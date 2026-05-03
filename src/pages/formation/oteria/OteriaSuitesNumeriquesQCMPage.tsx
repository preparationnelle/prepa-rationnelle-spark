import React from 'react';
import { OteriaChapterTemplate } from '@/components/formation/OteriaChapterTemplate';
import { OteriaQCM } from '@/components/formation/OteriaQCM';

const qcmData = {
  title: "Suites numériques & Modélisation — QCM",
  questions: [
    {
      id: 1,
      question: "Quelle est la limite de $u_n = \\frac{3n^2 - 1}{2n^2 + n}$ en $+\\infty$ ?",
      options: [
        { id: 'a', text: "$0$", correct: false },
        { id: 'b', text: "$3/2$", correct: true },
        { id: 'c', text: "$+\\infty$", correct: false },
        { id: 'd', text: "$-\\infty$", correct: false }
      ],
      explanation: "En factorisant par le terme de plus haut degré $n^2$, on obtient $u_n = \\frac{3 - 1/n^2}{2 + 1/n} \\to 3/2$."
    },
    {
      id: 2,
      question: "Si $u_n$ est croissante et $u_n \\le 5$, alors :",
      options: [
        { id: 'a', text: "$u_n \\to 5$", correct: false },
        { id: 'b', text: "$u_n$ converge vers $\\ell \\le 5$", correct: true },
        { id: 'c', text: "$u_n$ diverge", correct: false },
        { id: 'd', text: "$u_n$ est constante", correct: false }
      ],
      explanation: "D'après le théorème de la limite monotone, une suite croissante et majorée converge. Sa limite vérifie $\\ell \\le M$."
    },
    {
      id: 3,
      question: "Si $u_{n+1} = \\frac{1}{2}u_n + 1$ et $u_0 = 0$, vers quoi converge la suite ?",
      options: [
        { id: 'a', text: "$1$", correct: false },
        { id: 'b', text: "$2$", correct: true },
        { id: 'c', text: "$0$", correct: false },
        { id: 'd', text: "$+\\infty$", correct: false }
      ],
      explanation: "La limite $\\ell$ vérifie $\\ell = \\frac{1}{2}\\ell + 1 \\Rightarrow \\frac{1}{2}\\ell = 1 \\Rightarrow \\ell = 2$."
    },
    {
      id: 4,
      question: "Si $v_n \\le u_n$ et $v_n \\to +\\infty$, alors :",
      options: [
        { id: 'a', text: "$u_n \\to +\\infty$", correct: true },
        { id: 'b', text: "$u_n \\to -\\infty$", correct: false },
        { id: 'c', text: "$u_n$ est majorée", correct: false },
        { id: 'd', text: "On ne peut rien conclure", correct: false }
      ],
      explanation: "Par le théorème de comparaison, si une suite est minorée par une suite qui tend vers $+\\infty$, elle tend aussi vers $+\\infty$."
    },
    {
      id: 5,
      question: "Quelle affirmation est vraie pour une suite bornée ?",
      options: [
        { id: 'a', text: "Elle est convergente", correct: false },
        { id: 'b', text: "Elle peut être divergente", correct: true },
        { id: 'c', text: "Elle est monotone", correct: false },
        { id: 'd', text: "Elle admet une limite finie", correct: false }
      ],
      explanation: "Contre-exemple : $u_n = (-1)^n$ est bornée mais divergente (oscille entre -1 et 1)."
    }
  ]
};


const OteriaSuitesNumeriquesQCMPage: React.FC = () => {
  return (
    <OteriaChapterTemplate
      sessionNumber={4}
      sessionTitle="Suites numériques & modélisation"
      description="QCM d'évaluation sur les limites, la convergence et les théorèmes fondamentaux."
      slug="suites-numeriques"
      duration="3h"
      level="Débutant"
      activeSection="quiz"
      previousSession={{ slug: 'recurrence', title: 'Récurrence' }}
      nextSession={{ slug: 'fonctions-variable-reelle', title: 'Fonctions' }}
    >
      <OteriaQCM
        questions={qcmData.questions}
        title={qcmData.title}
        qcmId="oteria-suites-numeriques"
      />
    </OteriaChapterTemplate>
  );
};

export default OteriaSuitesNumeriquesQCMPage;
