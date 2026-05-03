import React from 'react';
import { OteriaChapterTemplate } from '@/components/formation/OteriaChapterTemplate';
import { OteriaQCM } from '@/components/formation/OteriaQCM';

const qcmData = {
  title: "Variables Aléatoires & Histogrammes — QCM",
  questions: [
    {
      id: 1,
      question: "Qu'est-ce qu'une variable aléatoire ?",
      options: [
        { id: "a", text: "Une variable qui change de valeur au hasard", correct: false },
        { id: "b", text: "Une fonction qui associe un nombre réel à chaque résultat d'une expérience aléatoire", correct: true },
        { id: "c", text: "Un ensemble de nombres aléatoires", correct: false },
        { id: "d", text: "Une probabilité variable", correct: false }
      ],
      explanation: "Une variable aléatoire $X$ est une fonction $X : \\Omega \\to \\mathbb{R}$ qui à chaque résultat $\\omega$ de l'univers associe un nombre réel $X(\\omega)$."
    },
    {
      id: 2,
      question: "Quelle est la différence entre une variable aléatoire discrète et continue ?",
      options: [
        { id: "a", text: "Discrète : valeurs entières seulement ; Continue : valeurs réelles", correct: false },
        { id: "b", text: "Discrète : ensemble fini/dénombrable ; Continue : ensemble continu d'un intervalle", correct: true },
        { id: "c", text: "Discrète : petites valeurs ; Continue : grandes valeurs", correct: false },
        { id: "d", text: "Il n'y a pas de différence", correct: false }
      ],
      explanation: "Une v.a. discrète prend un ensemble fini ou dénombrable de valeurs. Une v.a. continue peut prendre toute valeur dans un intervalle."
    },
    {
      id: 3,
      question: "Si $X$ est une variable aléatoire discrète, que vaut la somme $\\sum P(X = x_i)$ pour tous les $x_i$ possibles ?",
      options: [
        { id: "a", text: "0", correct: false },
        { id: "b", text: "0.5", correct: false },
        { id: "c", text: "1", correct: true },
        { id: "d", text: "$\\infty$", correct: false }
      ],
      explanation: "La somme de toutes les probabilités doit toujours valoir 1 : $\\sum_i P(X = x_i) = 1$"
    },
    {
      id: 4,
      question: "Quelle est la formule de l'espérance $E(X)$ d'une variable aléatoire discrète ?",
      options: [
        { id: "a", text: "$E(X) = \\sum x_i$", correct: false },
        { id: "b", text: "$E(X) = \\sum P(X = x_i)$", correct: false },
        { id: "c", text: "$E(X) = \\sum x_i \\times P(X = x_i)$", correct: true },
        { id: "d", text: "$E(X) = \\sum x_i / P(X = x_i)$", correct: false }
      ],
      explanation: "L'espérance est la moyenne pondérée des valeurs : $E(X) = \\sum x_i \\times P(X = x_i)$"
    },
    {
      id: 5,
      question: "Si $E(X) = 5$ et $a = 3, b = 2$, que vaut $E(aX + b)$ ?",
      options: [
        { id: "a", text: "10", correct: false },
        { id: "b", text: "15", correct: false },
        { id: "c", text: "17", correct: true },
        { id: "d", text: "21", correct: false }
      ],
      explanation: "$E(aX + b) = aE(X) + b = 3 \\times 5 + 2 = 17$. L'espérance est linéaire."
    },
    {
      id: 6,
      question: "Quelle est la formule de la variance $V(X)$ ?",
      options: [
        { id: "a", text: "$V(X) = E(X^2)$", correct: false },
        { id: "b", text: "$V(X) = E(X)^2$", correct: false },
        { id: "c", text: "$V(X) = E(X^2) - [E(X)]^2$", correct: true },
        { id: "d", text: "$V(X) = E[(X - E(X))^2]$ seulement", correct: false }
      ],
      explanation: "$V(X) = E[(X - E(X))^2] = E(X^2) - [E(X)]^2$. Les deux formules sont équivalentes."
    },
    {
      id: 7,
      question: "Si $V(X) = 4$ et $a = 2$, que vaut $V(aX)$ ?",
      options: [
        { id: "a", text: "4", correct: false },
        { id: "b", text: "8", correct: false },
        { id: "c", text: "16", correct: true },
        { id: "d", text: "2", correct: false }
      ],
      explanation: "$V(aX) = a^2 V(X) = 2^2 \\times 4 = 16$. La variance est multipliée par le carré du coefficient."
    },
    {
      id: 8,
      question: "Une variable aléatoire $X$ suit une loi de Bernoulli $\\mathcal{B}(0.3)$. Que vaut $P(X = 1)$ ?",
      options: [
        { id: "a", text: "0", correct: false },
        { id: "b", text: "0.3", correct: true },
        { id: "c", text: "0.7", correct: false },
        { id: "d", text: "1", correct: false }
      ],
      explanation: "Pour une loi de Bernoulli $\\mathcal{B}(p)$, $P(X = 1) = p$. Donc $P(X = 1) = 0.3$"
    },
    {
      id: 9,
      question: "Si $X \\sim \\mathcal{B}(p)$ (loi de Bernoulli), que vaut $E(X)$ ?",
      options: [
        { id: "a", text: "0", correct: false },
        { id: "b", text: "1", correct: false },
        { id: "c", text: "$p$", correct: true },
        { id: "d", text: "$1-p$", correct: false }
      ],
      explanation: "Pour une loi de Bernoulli $\\mathcal{B}(p)$, $E(X) = p$"
    },
    {
      id: 10,
      question: "Si $X \\sim \\mathcal{B}(p)$ (loi de Bernoulli), que vaut $V(X)$ ?",
      options: [
        { id: "a", text: "$p$", correct: false },
        { id: "b", text: "$p^2$", correct: false },
        { id: "c", text: "$p(1-p)$", correct: true },
        { id: "d", text: "$1-p$", correct: false }
      ],
      explanation: "Pour une loi de Bernoulli $\\mathcal{B}(p)$, $V(X) = p(1-p)$. La variance est maximale pour $p = 1/2$."
    },
    {
      id: 11,
      question: "Une variable aléatoire $X$ suit une loi binomiale $\\mathcal{B}(10, 0.4)$. Que représente $X$ ?",
      options: [
        { id: "a", text: "Le rang du premier succès", correct: false },
        { id: "b", text: "Le nombre de succès sur 10 essais", correct: true },
        { id: "c", text: "La probabilité de succès", correct: false },
        { id: "d", text: "Le nombre d'échecs", correct: false }
      ],
      explanation: "Une loi binomiale $\\mathcal{B}(n,p)$ compte le nombre de succès sur $n$ essais indépendants de probabilité $p$."
    },
    {
      id: 12,
      question: "Si $X \\sim \\mathcal{B}(20, 0.3)$ (loi binomiale), que vaut $E(X)$ ?",
      options: [
        { id: "a", text: "3", correct: false },
        { id: "b", text: "6", correct: true },
        { id: "c", text: "9", correct: false },
        { id: "d", text: "20", correct: false }
      ],
      explanation: "$E(X) = np = 20 \\times 0.3 = 6$ pour une loi binomiale $\\mathcal{B}(n,p)$"
    },
    {
      id: 13,
      question: "Si $X \\sim \\mathcal{B}(100, 0.2)$ (loi binomiale), que vaut $V(X)$ ?",
      options: [
        { id: "a", text: "20", correct: false },
        { id: "b", text: "16", correct: true },
        { id: "c", text: "80", correct: false },
        { id: "d", text: "4", correct: false }
      ],
      explanation: "$V(X) = np(1-p) = 100 \\times 0.2 \\times 0.8 = 16$ pour une loi binomiale $\\mathcal{B}(n,p)$"
    },
    {
      id: 14,
      question: "Quelle commande Python génère une loi binomiale $\\mathcal{B}(50, 0.6)$ ?",
      options: [
        { id: "a", text: "`rd.bernoulli(50, 0.6)`", correct: false },
        { id: "b", text: "`rd.binomial(50, 0.6)`", correct: true },
        { id: "c", text: "`rd.random(50, 0.6)`", correct: false },
        { id: "d", text: "`rd.geometric(50, 0.6)`", correct: false }
      ],
      explanation: "On utilise `rd.binomial(n, p)` pour générer une loi binomiale $\\mathcal{B}(n,p)$"
    },
    {
      id: 15,
      question: "Une variable aléatoire $X$ suit une loi géométrique $\\mathcal{G}(0.2)$. Que représente $X$ ?",
      options: [
        { id: "a", text: "Le nombre de succès", correct: false },
        { id: "b", text: "Le rang du premier succès", correct: true },
        { id: "c", text: "La probabilité d'échec", correct: false },
        { id: "d", text: "Le nombre total d'essais", correct: false }
      ],
      explanation: "Une loi géométrique $\\mathcal{G}(p)$ modélise le rang du premier succès dans une suite d'essais de Bernoulli."
    },
    {
      id: 16,
      question: "Si $X \\sim \\mathcal{G}(0.25)$ (loi géométrique), que vaut $E(X)$ ?",
      options: [
        { id: "a", text: "0.25", correct: false },
        { id: "b", text: "4", correct: true },
        { id: "c", text: "0.75", correct: false },
        { id: "d", text: "1", correct: false }
      ],
      explanation: "$E(X) = 1/p = 1/0.25 = 4$ pour une loi géométrique $\\mathcal{G}(p)$"
    },
    {
      id: 17,
      question: "Une loi de Poisson $\\mathcal{P}(\\lambda)$ est utilisée pour modéliser :",
      options: [
        { id: "a", text: "Des durées d'attente", correct: false },
        { id: "b", text: "Des événements rares sur un intervalle", correct: true },
        { id: "c", text: "Des choix parmi $n$ éléments", correct: false },
        { id: "d", text: "Des succès garantis", correct: false }
      ],
      explanation: "La loi de Poisson modélise le nombre d'événements rares sur un intervalle (temps, espace)."
    },
    {
      id: 18,
      question: "Si $X \\sim \\mathcal{P}(\\lambda)$ (loi de Poisson), quelle relation lie $E(X)$ et $V(X)$ ?",
      options: [
        { id: "a", text: "$E(X) = 2V(X)$", correct: false },
        { id: "b", text: "$E(X) = V(X)$", correct: true },
        { id: "c", text: "$E(X) = V(X)^2$", correct: false },
        { id: "d", text: "$E(X) + V(X) = \\lambda$", correct: false }
      ],
      explanation: "Pour une loi de Poisson $\\mathcal{P}(\\lambda)$, $E(X) = V(X) = \\lambda$. C'est une propriété caractéristique."
    },
    {
      id: 19,
      question: "Quelle commande Python trace un histogramme normalisé d'un échantillon ?",
      options: [
        { id: "a", text: "`plt.hist(echantillon)`", correct: false },
        { id: "b", text: "`plt.hist(echantillon, density=True)`", correct: true },
        { id: "c", text: "`plt.bar(echantillon)`", correct: false },
        { id: "d", text: "`plt.plot(echantillon)`", correct: false }
      ],
      explanation: "`plt.hist(echantillon, density=True)` trace un histogramme normalisé, permettant la comparaison avec la densité théorique."
    },
    {
      id: 20,
      question: "Pour une variable aléatoire continue $X$, pourquoi $P(X = x) = 0$ ?",
      options: [
        { id: "a", text: "Car $x$ est trop grand", correct: false },
        { id: "b", text: "Car $X$ peut prendre une infinité de valeurs dans un intervalle", correct: true },
        { id: "c", text: "Car la probabilité est négative", correct: false },
        { id: "d", text: "Car $X$ est mal définie", correct: false }
      ],
      explanation: "Pour une v.a. continue, $X$ peut prendre une infinité de valeurs. La probabilité d'une valeur exacte est infinitésimale, donc nulle. On s'intéresse aux intervalles."
    }
  ]
};

const OteriaVariablesAleatoiresQCMPage: React.FC = () => {
  return (
    <OteriaChapterTemplate
      sessionNumber={9}
      sessionTitle="Variables Aléatoires & Histogrammes"
      description="Lois usuelles (Bernoulli, Binomiale, Géométrique, Poisson, Expo…)"
      slug="variables-aleatoires"
      duration="3h"
      level="Intermédiaire"
      activeSection="quiz"
      previousSession={{ slug: 'probabilites-introduction', title: 'Probabilités' }}
      nextSession={{ slug: 'integrales-monte-carlo', title: 'Intégrales' }}
    >
      <OteriaQCM
        questions={qcmData.questions}
        title={qcmData.title}
        qcmId="oteria-variables-aleatoires"
      />
    </OteriaChapterTemplate>
  );
};

export default OteriaVariablesAleatoiresQCMPage;
