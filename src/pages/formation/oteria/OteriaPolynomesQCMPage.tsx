import React from 'react';
import { OteriaChapterTemplate } from '@/components/formation/OteriaChapterTemplate';
import { OteriaQCM } from '@/components/formation/OteriaQCM';

const qcmData = {
  title: "Polynômes & Dichotomie — QCM",
  questions: [
    {
      id: 1,
      question: "Quel est le degré du polynôme $P(x) = 3x^5 - 2x^3 + x^2 - 7$ ?",
      options: [
        { id: "a", text: "3", correct: false },
        { id: "b", text: "5", correct: true },
        { id: "c", text: "7", correct: false },
        { id: "d", text: "2", correct: false }
      ],
      explanation: "Le degré d'un polynôme est la plus grande puissance de x dont le coefficient est non nul. Ici, c'est 5."
    },
    {
      id: 2,
      question: "Un nombre $r$ est une racine du polynôme $P$ si :",
      options: [
        { id: "a", text: "$P(r) = 1$", correct: false },
        { id: "b", text: "$P(r) = 0$", correct: true },
        { id: "c", text: "$P'(r) = 0$", correct: false },
        { id: "d", text: "$P(r) > 0$", correct: false }
      ],
      explanation: "Par définition, $r$ est une racine de $P$ si et seulement si $P(r) = 0$."
    },
    {
      id: 3,
      question: "Quel est le degré du polynôme nul ?",
      options: [
        { id: "a", text: "0", correct: false },
        { id: "b", text: "1", correct: false },
        { id: "c", text: "$-\\infty$", correct: true },
        { id: "d", text: "Indéfini", correct: false }
      ],
      explanation: "Par convention, le degré du polynôme nul est $-\\infty$ car tous ses coefficients sont nuls."
    },
    {
      id: 4,
      question: "Si $P$ est de degré 3 et $Q$ est de degré 2, quel est le degré de $P \\times Q$ ?",
      options: [
        { id: "a", text: "5", correct: true },
        { id: "b", text: "6", correct: false },
        { id: "c", text: "3", correct: false },
        { id: "d", text: "2", correct: false }
      ],
      explanation: "Le degré d'un produit de polynômes est la somme des degrés : $\\deg(P \\times Q) = 3 + 2 = 5$."
    },
    {
      id: 5,
      question: "Dans la division euclidienne $P = D \\times Q + R$, quelle condition vérifie le reste $R$ ?",
      options: [
        { id: "a", text: "$\\deg(R) = \\deg(D)$", correct: false },
        { id: "b", text: "$\\deg(R) > \\deg(D)$", correct: false },
        { id: "c", text: "$\\deg(R) < \\deg(D)$ ou $R = 0$", correct: true },
        { id: "d", text: "$R = 0$ toujours", correct: false }
      ],
      explanation: "Dans la division euclidienne, le reste $R$ vérifie soit $R = 0$, soit $\\deg(R) < \\deg(D)$."
    },
    {
      id: 6,
      question: "Un polynôme de degré 3 peut avoir au maximum combien de racines réelles ?",
      options: [
        { id: "a", text: "1", correct: false },
        { id: "b", text: "2", correct: false },
        { id: "c", text: "3", correct: true },
        { id: "d", text: "Infiniment", correct: false }
      ],
      explanation: "Un polynôme de degré $n$ peut avoir au maximum $n$ racines distinctes dans $\\mathbb{R}$. Pour degré 3, c'est 3 racines."
    },
    {
      id: 7,
      question: "Quelle est la condition nécessaire pour appliquer la dichotomie à $f$ sur $[a,b]$ ?",
      options: [
        { id: "a", text: "$f$ continue et $f(a) \\times f(b) < 0$", correct: true },
        { id: "b", text: "$f$ dérivable", correct: false },
        { id: "c", text: "$f$ strictement croissante", correct: false },
        { id: "d", text: "$f$ polynomiale", correct: false }
      ],
      explanation: "La dichotomie nécessite que $f$ soit continue sur $[a,b]$ et que $f(a)$ et $f(b)$ soient de signes opposés."
    },
    {
      id: 8,
      question: "À chaque itération de la dichotomie, la taille de l'intervalle est :",
      options: [
        { id: "a", text: "Multipliée par 2", correct: false },
        { id: "b", text: "Divisée par 2", correct: true },
        { id: "c", text: "Réduite de 1", correct: false },
        { id: "d", text: "Constante", correct: false }
      ],
      explanation: "À chaque itération, on divise l'intervalle en deux parties égales, donc la taille est divisée par 2."
    },
    {
      id: 9,
      question: "Après $n$ itérations de dichotomie sur $[a,b]$, la largeur de l'intervalle est :",
      options: [
        { id: "a", text: "$(b-a)/n$", correct: false },
        { id: "b", text: "$(b-a)/2^n$", correct: true },
        { id: "c", text: "$(b-a)/2n$", correct: false },
        { id: "d", text: "$2^n(b-a)$", correct: false }
      ],
      explanation: "Après $n$ itérations, la largeur est divisée par $2^n$ : $|b_n - a_n| = (b-a)/2^n$."
    },
    {
      id: 10,
      question: "Si $(x-2)^2$ divise $P(x)$, quelle est la multiplicité de la racine 2 ?",
      options: [
        { id: "a", text: "0", correct: false },
        { id: "b", text: "1", correct: false },
        { id: "c", text: "2", correct: true },
        { id: "d", text: "3", correct: false }
      ],
      explanation: "La multiplicité d'une racine $r$ est l'exposant $k$ tel que $(x-r)^k$ divise $P$. Ici $k = 2$."
    },
    {
      id: 11,
      question: "En Python, quelle condition teste si $f(a)$ et $f(b)$ sont de signes opposés ?",
      options: [
        { id: "a", text: "`f(a) != f(b)`", correct: false },
        { id: "b", text: "`f(a) * f(b) < 0`", correct: true },
        { id: "c", text: "`f(a) + f(b) < 0`", correct: false },
        { id: "d", text: "`f(a) < 0 and f(b) > 0`", correct: false }
      ],
      explanation: "Le produit $f(a) \\times f(b)$ est négatif si et seulement si $f(a)$ et $f(b)$ ont des signes opposés."
    },
    {
      id: 12,
      question: "Dans l'algorithme de dichotomie en Python, comment calcule-t-on le milieu $c$ ?",
      options: [
        { id: "a", text: "`c = a + b`", correct: false },
        { id: "b", text: "`c = (a + b) / 2`", correct: true },
        { id: "c", text: "`c = (a - b) / 2`", correct: false },
        { id: "d", text: "`c = a * b / 2`", correct: false }
      ],
      explanation: "Le milieu de l'intervalle $[a,b]$ est la moyenne arithmétique : $c = (a + b) / 2$."
    },
    {
      id: 13,
      question: "Le théorème des valeurs intermédiaires garantit qu'une fonction continue sur $[a,b]$ avec $f(a) < 0$ et $f(b) > 0$ :",
      options: [
        { id: "a", text: "N'a pas de racines", correct: false },
        { id: "b", text: "A exactement une racine", correct: false },
        { id: "c", text: "A au moins une racine", correct: true },
        { id: "d", text: "A plusieurs racines", correct: false }
      ],
      explanation: "Le TVI garantit l'existence d'au moins une racine, mais pas l'unicité."
    },
    {
      id: 14,
      question: "Quel est l'avantage principal de la méthode de dichotomie ?",
      options: [
        { id: "a", text: "Convergence rapide", correct: false },
        { id: "b", text: "Convergence garantie", correct: true },
        { id: "c", text: "Ne nécessite pas de continuité", correct: false },
        { id: "d", text: "Trouve toutes les racines", correct: false }
      ],
      explanation: "La dichotomie garantit la convergence vers une racine si les hypothèses sont vérifiées."
    },
    {
      id: 15,
      question: "Pour atteindre une précision $\\varepsilon = 10^{-6}$ sur $[0,1]$, combien d'itérations faut-il environ ?",
      options: [
        { id: "a", text: "6", correct: false },
        { id: "b", text: "12", correct: false },
        { id: "c", text: "20", correct: true },
        { id: "d", text: "100", correct: false }
      ],
      explanation: "$n \\approx \\log_2((b-a)/\\varepsilon) = \\log_2(10^6) \\approx 20$ itérations."
    },
    {
      id: 16,
      question: "Dans la méthode de Babylone pour calculer $\\sqrt{a}$, quelle est la formule de récurrence ?",
      options: [
        { id: "a", text: "$u_{n+1} = u_n + a$", correct: false },
        { id: "b", text: "$u_{n+1} = (u_n + a/u_n)/2$", correct: true },
        { id: "c", text: "$u_{n+1} = u_n^2/a$", correct: false },
        { id: "d", text: "$u_{n+1} = a/u_n$", correct: false }
      ],
      explanation: "La méthode de Babylone utilise la formule $u_{n+1} = (u_n + a/u_n)/2$ pour converger vers $\\sqrt{a}$."
    },
    {
      id: 17,
      question: "Combien de racines réelles a le polynôme $P(x) = x^2 + 1$ ?",
      options: [
        { id: "a", text: "0", correct: true },
        { id: "b", text: "1", correct: false },
        { id: "c", text: "2", correct: false },
        { id: "d", text: "Infiniment", correct: false }
      ],
      explanation: "$x^2 + 1 > 0$ pour tout $x$ réel, donc ce polynôme n'a pas de racines réelles (mais 2 racines complexes)."
    },
    {
      id: 18,
      question: "En Python, quelle boucle utilise-t-on généralement pour la dichotomie ?",
      options: [
        { id: "a", text: "`for i in range(n)`", correct: false },
        { id: "b", text: "`while condition`", correct: true },
        { id: "c", text: "`do...while`", correct: false },
        { id: "d", text: "`foreach`", correct: false }
      ],
      explanation: "On utilise `while (b - a) > precision` pour continuer tant que la précision n'est pas atteinte."
    },
    {
      id: 19,
      question: "Si $P(x) = (x-1)(x+2)(x-3)$, quelles sont les racines de $P$ ?",
      options: [
        { id: "a", text: "1, 2, 3", correct: false },
        { id: "b", text: "-1, 2, -3", correct: false },
        { id: "c", text: "1, -2, 3", correct: true },
        { id: "d", text: "-1, -2, -3", correct: false }
      ],
      explanation: "Les racines sont les valeurs qui annulent chaque facteur : $x=1, x=-2$ et $x=3$."
    },
    {
      id: 20,
      question: "Quel est le principal inconvénient de la dichotomie par rapport à la méthode de Newton ?",
      options: [
        { id: "a", text: "Ne converge pas toujours", correct: false },
        { id: "b", text: "Convergence lente", correct: true },
        { id: "c", text: "Difficile à programmer", correct: false },
        { id: "d", text: "Nécessite la dérivée", correct: false }
      ],
      explanation: "La dichotomie converge lentement (linéairement) comparée à Newton (quadratique), mais elle est plus robuste."
    }
  ]
};

const OteriaPolynomesQCMPage = () => {
  return (
    <OteriaChapterTemplate
      sessionNumber={6}
      sessionTitle="Polynômes & Algorithme de dichotomie"
      description="Testez vos connaissances sur les polynômes, la division euclidienne et l'algorithme de dichotomie."
      slug="polynomes"
      courseSlug="polynomes-approximation-cours"
      flashcardsSlug="polynomes-dichotomie-flashcards"
      duration="3h"
      level="Intermédiaire"
      activeSection="quiz"
      previousSession={{ slug: 'fonctions-variable-reelle', title: 'Fonctions' }}
      nextSession={{ slug: 'denombrement', title: 'Dénombrement' }}
    >
      <OteriaQCM
        questions={qcmData.questions}
        title={qcmData.title}
        qcmId="oteria-polynomes"
      />
    </OteriaChapterTemplate>
  );
};

export default OteriaPolynomesQCMPage;
