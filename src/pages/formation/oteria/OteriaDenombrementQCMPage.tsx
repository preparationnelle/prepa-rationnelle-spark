import React from 'react';
import { OteriaChapterTemplate } from '@/components/formation/OteriaChapterTemplate';
import { OteriaQCM } from '@/components/formation/OteriaQCM';

const qcmData = {
  title: "Dénombrement & Paradoxe des anniversaires — QCM",
  questions: [
    {
      id: 1,
      question: "Quelle est la valeur de $5!$ ?",
      options: [
        { id: "a", text: "24", correct: false },
        { id: "b", text: "60", correct: false },
        { id: "c", text: "120", correct: true },
        { id: "d", text: "720", correct: false }
      ],
      explanation: "$5! = 1 \\times 2 \\times 3 \\times 4 \\times 5 = 120$"
    },
    {
      id: 2,
      question: "Combien de permutations peut-on former avec 4 éléments distincts ?",
      options: [
        { id: "a", text: "4", correct: false },
        { id: "b", text: "16", correct: false },
        { id: "c", text: "24", correct: true },
        { id: "d", text: "256", correct: false }
      ],
      explanation: "Le nombre de permutations de $n$ éléments est $n!$. Pour 4 éléments : $4! = 24$"
    },
    {
      id: 3,
      question: "Que vaut $\\binom{n}{0}$ (coefficient binomial) ?",
      options: [
        { id: "a", text: "0", correct: false },
        { id: "b", text: "1", correct: true },
        { id: "c", text: "$n$", correct: false },
        { id: "d", text: "$n!$", correct: false }
      ],
      explanation: "Par définition, $\\binom{n}{0} = \\frac{n!}{0!(n-0)!} = 1$. Il n'y a qu'une seule façon de choisir 0 élément."
    },
    {
      id: 4,
      question: "Quelle propriété vérifient les coefficients binomiaux $\\binom{n}{p}$ ?",
      options: [
        { id: "a", text: "$\\binom{n}{p} = \\binom{n}{n-p}$", correct: true },
        { id: "b", text: "$\\binom{n}{p} = \\binom{p}{n}$", correct: false },
        { id: "c", text: "$\\binom{n}{p} = n \\times p$", correct: false },
        { id: "d", text: "$\\binom{n}{p} = n!$", correct: false }
      ],
      explanation: "La propriété de symétrie : $\\binom{n}{p} = \\binom{n}{n-p}$. Choisir $p$ éléments équivaut à laisser de côté $n-p$ éléments."
    },
    {
      id: 5,
      question: "Dans le triangle de Pascal, quelle relation permet de calculer $\\binom{n}{p}$ ?",
      options: [
        { id: "a", text: "$\\binom{n}{p} = \\binom{n-1}{p} + \\binom{p-1}{p}$", correct: false },
        { id: "b", text: "$\\binom{n}{p} = \\binom{n-1}{p-1} + \\binom{n-1}{p}$", correct: true },
        { id: "c", text: "$\\binom{n}{p} = \\binom{n-1}{p-1} \\times \\binom{n-1}{p}$", correct: false },
        { id: "d", text: "$\\binom{n}{p} = \\binom{n}{p-1} + \\binom{n}{p+1}$", correct: false }
      ],
      explanation: "Relation de Pascal : $\\binom{n}{p} = \\binom{n-1}{p-1} + \\binom{n-1}{p}$. Cette formule permet de construire le triangle de Pascal ligne par ligne."
    },
    {
      id: 6,
      question: "Que vaut la somme $\\sum_{k=0}^n \\binom{n}{k}$ ?",
      options: [
        { id: "a", text: "$n$", correct: false },
        { id: "b", text: "$n!$", correct: false },
        { id: "c", text: "$2^n$", correct: true },
        { id: "d", text: "$n^2$", correct: false }
      ],
      explanation: "D'après le binôme de Newton avec $a=b=1$ : $(1+1)^n = 2^n = \\sum \\binom{n}{k}$. Cela compte tous les sous-ensembles."
    },
    {
      id: 7,
      question: "Développer $(a+b)^3$ selon le binôme de Newton donne :",
      options: [
        { id: "a", text: "$a^3 + b^3$", correct: false },
        { id: "b", text: "$a^3 + 3a^2b + 3ab^2 + b^3$", correct: true },
        { id: "c", text: "$a^3 + 2a^2b + 2ab^2 + b^3$", correct: false },
        { id: "d", text: "$3a^3 + 3b^3$", correct: false }
      ],
      explanation: "$(a+b)^3 = \\binom{3}{0}a^3 + \\binom{3}{1}a^2b + \\binom{3}{2}ab^2 + \\binom{3}{3}b^3 = a^3 + 3a^2b + 3ab^2 + b^3$"
    },
    {
      id: 8,
      question: "Combien de sous-ensembles différents peut-on former à partir d'un ensemble de 5 éléments ?",
      options: [
        { id: "a", text: "5", correct: false },
        { id: "b", text: "10", correct: false },
        { id: "c", text: "25", correct: false },
        { id: "d", text: "32", correct: true }
      ],
      explanation: "Un ensemble de $n$ éléments possède $2^n$ sous-ensembles. Pour $n=5$ : $2^5 = 32$"
    },
    {
      id: 9,
      question: "Dans le paradoxe des anniversaires, quelle est la probabilité qu'au moins 2 personnes aient le même anniversaire dans un groupe de 23 personnes ?",
      options: [
        { id: "a", text: "Environ 25%", correct: false },
        { id: "b", text: "Environ 50%", correct: true },
        { id: "c", text: "Environ 75%", correct: false },
        { id: "d", text: "Environ 90%", correct: false }
      ],
      explanation: "Avec 23 personnes, la probabilité dépasse 50% ($\\approx 50.7\\%$). C'est ce qui rend ce résultat contre-intuitif et « paradoxal »."
    },
    {
      id: 10,
      question: "Quelle est la formule pour calculer la probabilité qu'il n'y ait PAS de collision d'anniversaires pour $k$ personnes ?",
      options: [
        { id: "a", text: "$365^k/365!$", correct: false },
        { id: "b", text: "$365!/(365-k)! \\times 365^k$", correct: true },
        { id: "c", text: "$k!/365$", correct: false },
        { id: "d", text: "$\\binom{365}{k}/365^k$", correct: false }
      ],
      explanation: "P(pas de collision) = $365 \\times 364 \\times \\dots \\times (365-k+1) / 365^k = \\frac{365!}{(365-k)! \\times 365^k}$"
    },
    {
      id: 11,
      question: "Quel principe de dénombrement s'applique lorsqu'on doit faire plusieurs choix successifs indépendants ?",
      options: [
        { id: "a", text: "Principe additif", correct: false },
        { id: "b", text: "Principe multiplicatif", correct: true },
        { id: "c", text: "Principe de complémentarité", correct: false },
        { id: "d", text: "Principe de symétrie", correct: false }
      ],
      explanation: "Le principe multiplicatif : si on a $n_1$ choix pour la première étape, $n_2$ pour la deuxième, etc., le total est $n_1 \\times n_2 \\times \\dots$"
    },
    {
      id: 12,
      question: "Que vaut $\\binom{6}{2}$ ?",
      options: [
        { id: "a", text: "12", correct: false },
        { id: "b", text: "15", correct: true },
        { id: "c", text: "18", correct: false },
        { id: "d", text: "30", correct: false }
      ],
      explanation: "$\\binom{6}{2} = \\frac{6!}{2! \\times 4!} = \\frac{6 \\times 5}{2 \\times 1} = 15$. On peut aussi utiliser la formule $n(n-1)/2$."
    },
    {
      id: 13,
      question: "En cryptographie, le paradoxe des anniversaires est important pour évaluer :",
      options: [
        { id: "a", text: "La vitesse d'un algorithme", correct: false },
        { id: "b", text: "La sécurité contre les collisions de hash", correct: true },
        { id: "c", text: "La complexité d'un mot de passe", correct: false },
        { id: "d", text: "Le nombre de clés possibles", correct: false }
      ],
      explanation: "Le paradoxe des anniversaires montre que les collisions dans les fonctions de hachage arrivent plus vite qu'on ne le pense."
    },
    {
      id: 14,
      question: "Pour un hash sur 256 bits, combien de hashes faut-il générer pour avoir environ 50% de chances de collision ?",
      options: [
        { id: "a", text: "$2^{256}$", correct: false },
        { id: "b", text: "$2^{128}$", correct: true },
        { id: "c", text: "256", correct: false },
        { id: "d", text: "128", correct: false }
      ],
      explanation: "D'après le paradoxe des anniversaires, il faut environ $\\sqrt{N}$ hashes, soit $\\sqrt{2^{256}} = 2^{128}$ pour 50% de chances de collision."
    },
    {
      id: 15,
      question: "Quelle est la valeur de $0!$ par convention ?",
      options: [
        { id: "a", text: "0", correct: false },
        { id: "b", text: "1", correct: true },
        { id: "c", text: "$-\\infty$", correct: false },
        { id: "d", text: "Indéfini", correct: false }
      ],
      explanation: "Par convention, $0! = 1$. Cette convention permet que les formules combinatoires restent cohérentes."
    },
    {
      id: 16,
      question: "Dans une classe de 30 élèves, combien y a-t-il de façons de choisir un binôme (2 élèves) ?",
      options: [
        { id: "a", text: "30", correct: false },
        { id: "b", text: "60", correct: false },
        { id: "c", text: "435", correct: true },
        { id: "d", text: "900", correct: false }
      ],
      explanation: "$\\binom{30}{2} = \\frac{30 \\times 29}{2} = 435$ façons de choisir 2 élèves parmi 30."
    },
    {
      id: 17,
      question: "Quelle approximation est souvent utilisée pour $n!$ quand $n$ est grand ?",
      options: [
        { id: "a", text: "Formule de Taylor", correct: false },
        { id: "b", text: "Formule de Stirling", correct: true },
        { id: "c", text: "Formule de Newton", correct: false },
        { id: "d", text: "Formule de Pascal", correct: false }
      ],
      explanation: "La formule de Stirling : $n! \\approx \\sqrt{2\\pi n} \\left(\\frac{n}{e}\\right)^n$ est utilisée pour approximer les grandes factorielles."
    },
    {
      id: 18,
      question: "Si on doit compter les cas où quelque chose N'arrive PAS, quel principe utilise-t-on ?",
      options: [
        { id: "a", text: "Principe multiplicatif", correct: false },
        { id: "b", text: "Principe additif", correct: false },
        { id: "c", text: "Principe de complémentarité", correct: true },
        { id: "d", text: "Principe de symétrie", correct: false }
      ],
      explanation: "Le principe de complémentarité : calculer le total puis soustraire les cas interdits est souvent plus simple."
    },
    {
      id: 19,
      question: "Combien vaut $100!$ approximativement ?",
      options: [
        { id: "a", text: "$9.3 \\times 10^{57}$", correct: false },
        { id: "b", text: "$9.3 \\times 10^{157}$", correct: true },
        { id: "c", text: "$9.3 \\times 10^{257}$", correct: false },
        { id: "d", text: "$9.3 \\times 10^5$", correct: false }
      ],
      explanation: "$100! \\approx 9.3 \\times 10^{157}$. La factorielle croît extrêmement vite, dépassant rapidement les capacités de calcul standard."
    },
    {
      id: 20,
      question: "Dans un groupe de combien de personnes la probabilité de collision d'anniversaires dépasse-t-elle 99% ?",
      options: [
        { id: "a", text: "50", correct: false },
        { id: "b", text: "57", correct: true },
        { id: "c", text: "70", correct: false },
        { id: "d", text: "100", correct: false }
      ],
      explanation: "Avec 57 personnes, la probabilité de collision dépasse 99%. Cela illustre à quel point les collisions deviennent probables rapidement."
    }
  ]
};

const OteriaDenombrementQCMPage = () => {
  return (
    <OteriaChapterTemplate
      sessionNumber={7}
      sessionTitle="Dénombrement & Paradoxe des anniversaires"
      description="Testez vos connaissances sur les coefficients binomiaux, le binôme de Newton et le paradoxe des anniversaires."
      slug="denombrement"
      courseSlug="denombrement-paradoxes-cours"
      duration="2h"
      level="Débutant"
      activeSection="quiz"
      previousSession={{ slug: 'polynomes-approximation', title: 'Polynômes' }}
      nextSession={{ slug: 'probabilites', title: 'Probabilités' }}
    >
      <OteriaQCM
        questions={qcmData.questions}
        title={qcmData.title}
        qcmId="oteria-denombrement"
      />
    </OteriaChapterTemplate>
  );
};

export default OteriaDenombrementQCMPage;
