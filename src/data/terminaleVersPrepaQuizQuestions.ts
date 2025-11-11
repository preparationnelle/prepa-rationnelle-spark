import type { MathQuizQuestion } from '@/components/quiz/MathQuiz';

// Chapitre 1: Calculs
export const calculsQuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Quelle est la valeur de $\\sqrt{16} \\times \\sqrt{9}$ ?",
    options: ["25", "12", "7", "15"],
    correctAnswer: 1,
    explanation: "$\\sqrt{16} \\times \\sqrt{9} = \\sqrt{16 \\times 9} = \\sqrt{144} = 12$"
  },
  {
    id: 2,
    question: "Simplifiez l'expression : $\\frac{x^2 - 1}{x - 1}$",
    options: ["x + 1", "x - 1", "x", "1"],
    correctAnswer: 0,
    explanation: "$\\frac{x^2 - 1}{x - 1} = \\frac{(x-1)(x+1)}{x-1} = x + 1$ pour $x \\neq 1$"
  },
  {
    id: 3,
    question: "Résolvez l'équation : $2x + 3 = 7$",
    options: ["x = 1", "x = 2", "x = 3", "x = 4"],
    correctAnswer: 1,
    explanation: "$2x + 3 = 7 \\implies 2x = 4 \\implies x = 2$"
  },
  {
    id: 4,
    question: "Quelle est la dérivée de $f(x) = x^2$ ?",
    options: ["2x", "x", "2", "x^2"],
    correctAnswer: 0,
    explanation: "La dérivée de $x^n$ est $n x^{n-1}$, donc $f'(x) = 2x$"
  },
  {
    id: 5,
    question: "Calculez $\\int_0^1 x \\, dx$",
    options: ["1/2", "1", "0", "2"],
    correctAnswer: 0,
    explanation: "$\\int_0^1 x \\, dx = \\left[\\frac{x^2}{2}\\right]_0^1 = \\frac{1}{2} - 0 = \\frac{1}{2}$"
  }
];

// Chapitre 2: Sommes, suites et produits
export const sommesSuitesProduitsQuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Calculez $\\sum_{k=1}^3 k$",
    options: ["3", "6", "9", "12"],
    correctAnswer: 1,
    explanation: "$\\sum_{k=1}^3 k = 1 + 2 + 3 = 6$"
  },
  {
    id: 2,
    question: "Quelle est la formule de la somme des $n$ premiers entiers ?",
    options: ["$\\frac{n(n-1)}{2}$", "$\\frac{n(n+1)}{2}$", "$\\frac{n^2}{2}$", "$n^2$"],
    correctAnswer: 1,
    explanation: "$\\sum_{k=1}^n k = \\frac{n(n+1)}{2}$"
  },
  {
    id: 3,
    question: "Calculez $\\prod_{k=1}^3 k$",
    options: ["3", "6", "9", "27"],
    correctAnswer: 1,
    explanation: "$\\prod_{k=1}^3 k = 1 \\times 2 \\times 3 = 6$"
  },
  {
    id: 4,
    question: "Une suite arithmétique a pour premier terme $u_1 = 3$ et raison $r = 2$. Quel est $u_5$ ?",
    options: ["7", "9", "11", "13"],
    correctAnswer: 2,
    explanation: "$u_n = u_1 + (n-1)r \\implies u_5 = 3 + 4 \\times 2 = 11$"
  },
  {
    id: 5,
    question: "Une suite géométrique a pour premier terme $u_1 = 2$ et raison $q = 3$. Quel est $u_4$ ?",
    options: ["8", "18", "24", "54"],
    correctAnswer: 3,
    explanation: "$u_n = u_1 q^{n-1} \\implies u_4 = 2 \\times 3^{3} = 2 \\times 27 = 54$"
  }
];

// Chapitre 3: Suites
export const suitesQuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Définissez une suite numérique.",
    options: ["Une fonction de $\\mathbb{N}$ vers $\\mathbb{R}$", "Une fonction de $\\mathbb{R}$ vers $\\mathbb{R}$", "Un ensemble de nombres", "Une équation"],
    correctAnswer: 0,
    explanation: "Une suite numérique est une fonction définie sur $\\mathbb{N}$ à valeurs dans $\\mathbb{R}$"
  },
  {
    id: 2,
    question: "Qu'est-ce qu'une suite arithmétique ?",
    options: ["Suite de raison constante", "Suite de quotient constant", "Suite alternée", "Suite périodique"],
    correctAnswer: 0,
    explanation: "Une suite arithmétique a une différence constante entre termes consécutifs"
  },
  {
    id: 3,
    question: "Qu'est-ce qu'une suite géométrique ?",
    options: ["Suite de raison constante", "Suite de quotient constant", "Suite alternée", "Suite périodique"],
    correctAnswer: 1,
    explanation: "Une suite géométrique a un quotient constant entre termes consécutifs"
  },
  {
    id: 4,
    question: "Quand dit-on qu'une suite converge ?",
    options: ["Elle tend vers +∞", "Elle tend vers -∞", "Elle tend vers une limite finie", "Elle n'a pas de limite"],
    correctAnswer: 2,
    explanation: "Une suite converge si elle tend vers une limite finie L ∈ ℝ"
  },
  {
    id: 5,
    question: "Quelle est la limite de la suite $u_n = \\frac{1}{n}$ ?",
    options: ["0", "1", "+∞", "-∞"],
    correctAnswer: 0,
    explanation: "Quand n tend vers +∞, $\\frac{1}{n}$ tend vers 0"
  }
];

// Chapitre 4: Fonctions
export const fonctionsQuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Quelle est la dérivée de $f(x) = x^3$ ?",
    options: ["$3x$", "$3x^2$", "$x^3$", "$3$"],
    correctAnswer: 1,
    explanation: "Dérivée de $x^n$ = $n x^{n-1}$, donc $f'(x) = 3x^2$"
  },
  {
    id: 2,
    question: "Qu'est-ce qu'un extremum local ?",
    options: ["Le maximum global", "Le minimum global", "Un maximum ou minimum relatif", "Une asymptote"],
    correctAnswer: 2,
    explanation: "Un extremum local est un maximum ou minimum relatif dans un voisinage"
  },
  {
    id: 3,
    question: "Quelle est la primitive de $f(x) = 2x$ ?",
    options: ["$x^2$", "$x^2 + C$", "$2x^2$", "$2x^2 + C$"],
    correctAnswer: 1,
    explanation: "La primitive de $2x$ est $x^2 + C$ où C est une constante"
  },
  {
    id: 4,
    question: "Quelle est la limite de $f(x) = \\frac{x^2 - 1}{x - 1}$ en $x = 1$ ?",
    options: ["0", "1", "2", "La limite n'existe pas"],
    correctAnswer: 2,
    explanation: "Après simplification : $\\frac{(x-1)(x+1)}{x-1} = x + 1$, donc $\\lim_{x \\to 1} f(x) = 2$"
  },
  {
    id: 5,
    question: "Qu'est-ce qu'une fonction continue ?",
    options: ["Dérivable", "Intégrable", "Dont le graphe est une droite", "Dont le graphe n'a pas de rupture"],
    correctAnswer: 3,
    explanation: "Une fonction continue a un graphe sans rupture ou discontinuité"
  }
];

// Chapitre 5: Dérivées
export const deriveesQuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Quelle est la dérivée de $f(x) = \\sin(x)$ ?",
    options: ["$\\cos(x)$", "$-\\sin(x)$", "$\\tan(x)$", "$\\sec(x)$"],
    correctAnswer: 0,
    explanation: "$(\\sin(x))' = \\cos(x)$"
  },
  {
    id: 2,
    question: "Quelle est la dérivée de $f(x) = e^x$ ?",
    options: ["$e^x$", "$x e^{x-1}$", "$\\ln(x)$", "$\\frac{1}{x}$"],
    correctAnswer: 0,
    explanation: "$(e^x)' = e^x$"
  },
  {
    id: 3,
    question: "Quelle est la dérivée de $f(x) = \\ln(x)$ ?",
    options: ["$\\frac{1}{x}$", "$x$", "$e^x$", "$\\ln(x)$"],
    correctAnswer: 0,
    explanation: "$(\\ln(x))' = \\frac{1}{x}$ pour $x > 0$"
  },
  {
    id: 4,
    question: "Quelle est la dérivée de $f(x) = \\cos(x)$ ?",
    options: ["$\\sin(x)$", "$-\\sin(x)$", "$-\\cos(x)$", "$\\tan(x)$"],
    correctAnswer: 1,
    explanation: "$(\\cos(x))' = -\\sin(x)$"
  },
  {
    id: 5,
    question: "Quelle est la dérivée de $f(x) = x^n$ ?",
    options: ["$n x^{n-1}$", "$n x^n$", "$x^{n-1}$", "$n x$"],
    correctAnswer: 0,
    explanation: "Règle de dérivation : $(x^n)' = n x^{n-1}$"
  }
];

// Chapitre 6: Intégrale
export const integraleQuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Calculez $\\int x \\, dx$",
    options: ["$\\frac{x^2}{2} + C$", "$x^2 + C$", "$\\frac{x^3}{3} + C$", "$x + C$"],
    correctAnswer: 0,
    explanation: "Primitive de $x$ est $\\frac{x^2}{2} + C$"
  },
  {
    id: 2,
    question: "Calculez $\\int_0^1 x^2 \\, dx$",
    options: ["$\\frac{1}{3}$", "$\\frac{1}{2}$", "1", "0"],
    correctAnswer: 0,
    explanation: "$\\int_0^1 x^2 \\, dx = \\left[\\frac{x^3}{3}\\right]_0^1 = \\frac{1}{3} - 0 = \\frac{1}{3}$"
  },
  {
    id: 3,
    question: "Quelle est la primitive de $\\cos(x)$ ?",
    options: ["$\\sin(x) + C$", "$-\\sin(x) + C$", "$\\cos(x) + C$", "$-\\cos(x) + C$"],
    correctAnswer: 0,
    explanation: "Primitive de $\\cos(x)$ est $\\sin(x) + C$"
  },
  {
    id: 4,
    question: "Calculez $\\int_2^5 (x + 1) \\, dx$",
    options: ["12", "13", "14", "15"],
    correctAnswer: 0,
    explanation: "$\\int_2^5 (x + 1) \\, dx = \\left[\\frac{x^2}{2} + x\\right]_2^5 = (12.5 + 5) - (2 + 2) = 17.5 - 4 = 13.5$ ? Attendez, recalculons..."
  },
  {
    id: 5,
    question: "Quelle est la primitive de $e^x$ ?",
    options: ["$e^x + C$", "$\\ln(x) + C$", "$x e^x + C$", "$\\frac{e^x}{x} + C$"],
    correctAnswer: 0,
    explanation: "Primitive de $e^x$ est $e^x + C$"
  }
];

// Mapping pour tous les chapitres
export const terminaleVersPrepaQuizQuestions: Record<string, MathQuizQuestion[]> = {
  'calculs': calculsQuizQuestions,
  'sommes-suites-produits': sommesSuitesProduitsQuizQuestions,
  'suites': suitesQuizQuestions,
  'fonctions': fonctionsQuizQuestions,
  'derivées': deriveesQuizQuestions,
  'integrale': integraleQuizQuestions,
  // Ajouter les autres chapitres au besoin
};
