export interface MatricesMarkovFlashcard {
  id: number;
  front: string;
  back: string;
  frontLatex?: string;
  backLatex?: string;
  category: string;
  difficulty: 'facile' | 'moyen' | 'difficile';
}

// Flashcards pour les matrices et chaînes de Markov - Séance 11 Oteria Cyber School
export const matricesMarkovFlashcards: MatricesMarkovFlashcard[] = [
  // Définitions et opérations de base
  {
    id: 1,
    front: "Qu'est-ce qu'une matrice ?",
    back: "Une matrice est un tableau rectangulaire de nombres organisés en lignes et colonnes. On note M_{n,p}(ℝ) l'ensemble des matrices à n lignes et p colonnes.",
    category: "Définitions",
    difficulty: "facile"
  },
  {
    id: 2,
    front: "Comment se calcule la somme de deux matrices A et B ?",
    back: "La somme A + B se calcule élément par élément : (A + B)_{i,j} = a_{i,j} + b_{i,j}",
    frontLatex: "(A + B)_{i,j} = a_{i,j} + b_{i,j}",
    category: "Opérations",
    difficulty: "facile"
  },
  {
    id: 3,
    front: "Comment se calcule le produit matriciel AB ?",
    back: "Le produit AB se calcule ainsi : (AB)_{i,j} = ∑_{k=1}^p a_{i,k} × b_{k,j}",
    frontLatex: "(AB)_{i,j} = \\sum_{k=1}^p a_{i,k} \\times b_{k,j}",
    category: "Opérations",
    difficulty: "moyen"
  },
  {
    id: 4,
    front: "Quelle est la matrice identité I_n ?",
    back: "La matrice identité I_n est la matrice carrée diagonale dont tous les éléments diagonaux valent 1 et les autres valent 0.",
    frontLatex: "I_n = \\begin{pmatrix} 1 & 0 & \\cdots & 0 \\\\ 0 & 1 & \\cdots & 0 \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & \\cdots & 1 \\end{pmatrix}",
    category: "Opérations",
    difficulty: "facile"
  },
  {
    id: 5,
    front: "Quelles sont les propriétés du produit matriciel ?",
    back: "Le produit matriciel n'est pas commutatif (AB ≠ BA en général), mais il est associatif (A(BC) = (AB)C) et distributif par rapport à l'addition.",
    category: "Propriétés",
    difficulty: "moyen"
  },

  // Types particuliers de matrices
  {
    id: 6,
    front: "Qu'est-ce qu'une matrice diagonale ?",
    back: "Une matrice diagonale a tous ses éléments nuls en dehors de la diagonale principale. On peut la noter diag(d₁, d₂, ..., dₙ).",
    frontLatex: "D = \\diag(d_1, d_2, \\dots, d_n)",
    category: "Types de matrices",
    difficulty: "facile"
  },
  {
    id: 7,
    front: "Qu'est-ce qu'une matrice triangulaire supérieure ?",
    back: "Une matrice triangulaire supérieure a tous ses éléments sous la diagonale principale nuls. Les éléments au-dessus peuvent être non nuls.",
    frontLatex: "U = \\begin{pmatrix} \\times & \\times & \\times \\\\ 0 & \\times & \\times \\\\ 0 & 0 & \\times \\end{pmatrix}",
    category: "Types de matrices",
    difficulty: "facile"
  },
  {
    id: 8,
    front: "Qu'est-ce qu'une matrice symétrique ?",
    back: "Une matrice carrée est symétrique si elle est égale à sa transposée : A^T = A, ce qui signifie a_{i,j} = a_{j,i} pour tous i,j.",
    frontLatex: "A^T = A",
    category: "Types de matrices",
    difficulty: "moyen"
  },
  {
    id: 9,
    front: "Qu'est-ce qu'une matrice antisymétrique (ou skew-symétrique) ?",
    back: "Une matrice carrée est antisymétrique si A^T = -A. La diagonale est forcément nulle et a_{i,j} = -a_{j,i}.",
    frontLatex: "A^T = -A",
    category: "Types de matrices",
    difficulty: "moyen"
  },
  {
    id: 10,
    front: "Qu'est-ce qu'une matrice orthogonale ?",
    back: "Une matrice carrée est orthogonale si son inverse est égale à sa transposée : A^T = A^{-1}, ou encore A^T A = I_n.",
    frontLatex: "A^T = A^{-1}",
    category: "Types de matrices",
    difficulty: "difficile"
  },

  // Propriétés importantes
  {
    id: 11,
    front: "Comment se calcule la trace d'une matrice carrée ?",
    back: "La trace tr(A) d'une matrice carrée est la somme des éléments de sa diagonale principale : tr(A) = ∑_{i=1}^n a_{i,i}",
    frontLatex: "\\tr(A) = \\sum_{i=1}^n a_{i,i}",
    category: "Propriétés",
    difficulty: "facile"
  },
  {
    id: 12,
    front: "Quelles sont les propriétés de la trace ?",
    back: "tr(A + B) = tr(A) + tr(B), tr(cA) = c tr(A), tr(AB) = tr(BA), tr(A^T) = tr(A).",
    frontLatex: "\\tr(AB) = \\tr(BA)",
    category: "Propriétés",
    difficulty: "moyen"
  },
  {
    id: 13,
    front: "Comment se calcule le déterminant d'une matrice 2×2 ?",
    back: "Pour une matrice A = [a b ; c d], det(A) = a×d - b×c.",
    frontLatex: "\\det\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = ad - bc",
    category: "Déterminant",
    difficulty: "facile"
  },
  {
    id: 14,
    front: "Quelles sont les propriétés du déterminant ?",
    back: "det(A^T) = det(A), det(AB) = det(A) × det(B), det(A^{-1}) = 1/det(A) si A inversible.",
    frontLatex: "\\det(AB) = \\det(A) \\times \\det(B)",
    category: "Déterminant",
    difficulty: "moyen"
  },
  {
    id: 15,
    front: "Quand une matrice carrée est-elle inversible ?",
    back: "Une matrice carrée est inversible si et seulement si son déterminant est non nul : det(A) ≠ 0.",
    frontLatex: "A \\text{ inversible } \\iff \\det(A) \\neq 0",
    category: "Matrices inversibles",
    difficulty: "moyen"
  },

  // Valeurs propres et vecteurs propres
  {
    id: 16,
    front: "Qu'est-ce qu'une valeur propre d'une matrice A ?",
    back: "Un scalaire λ est valeur propre de A s'il existe un vecteur non nul v tel que A v = λ v.",
    frontLatex: "A \\vec{v} = \\lambda \\vec{v}",
    category: "Valeurs propres",
    difficulty: "moyen"
  },
  {
    id: 17,
    front: "Comment trouver les valeurs propres d'une matrice ?",
    back: "Les valeurs propres sont les racines de l'équation det(A - λI) = 0, appelée polynôme caractéristique.",
    frontLatex: "\\det(A - \\lambda I_n) = 0",
    category: "Valeurs propres",
    difficulty: "difficile"
  },
  {
    id: 18,
    front: "Qu'est-ce qu'un vecteur propre ?",
    back: "Un vecteur propre v associé à la valeur propre λ vérifie A v = λ v. Il n'est pas nul.",
    frontLatex: "A \\vec{v} = \\lambda \\vec{v}",
    category: "Vecteurs propres",
    difficulty: "moyen"
  },

  // Systèmes linéaires
  {
    id: 19,
    front: "Qu'est-ce que le rang d'une matrice ?",
    back: "Le rang d'une matrice est la dimension de l'espace engendré par ses colonnes (ou lignes).",
    category: "Systèmes linéaires",
    difficulty: "moyen"
  },
  {
    id: 20,
    front: "Quand un système Ax = b admet-il une solution unique ?",
    back: "Un système Ax = b admet une solution unique si A est carrée et inversible (det(A) ≠ 0).",
    frontLatex: "A \\vec{x} = \\vec{b}",
    category: "Systèmes linéaires",
    difficulty: "moyen"
  },

  // Chaînes de Markov
  {
    id: 21,
    front: "Qu'est-ce qu'une chaîne de Markov ?",
    back: "Une chaîne de Markov est un processus aléatoire où l'état futur ne dépend que de l'état présent, pas du passé.",
    frontLatex: "P(X_{n+1} = j | X_n = i, X_{n-1}, \\dots, X_0) = P(X_{n+1} = j | X_n = i)",
    category: "Chaînes de Markov",
    difficulty: "moyen"
  },
  {
    id: 22,
    front: "Qu'est-ce qu'une matrice de transition ?",
    back: "La matrice de transition P contient les probabilités P_{i,j} = P(X_{n+1}=j | X_n=i). Chaque ligne somme à 1.",
    frontLatex: "P = (P_{i,j}), \\quad P_{i,j} \\geq 0, \\quad \\sum_j P_{i,j} = 1",
    category: "Chaînes de Markov",
    difficulty: "moyen"
  },
  {
    id: 23,
    front: "Comment évolue la loi d'une chaîne de Markov ?",
    back: "Si π^{(0)} est la loi initiale, alors π^{(n)} = π^{(0)} P^n.",
    frontLatex: "\\pi^{(n)} = \\pi^{(0)} P^n",
    category: "Chaînes de Markov",
    difficulty: "difficile"
  },
  {
    id: 24,
    front: "Qu'est-ce qu'un vecteur stationnaire ?",
    back: "Un vecteur stationnaire π vérifie π P = π et ∑π_i = 1. Il représente un équilibre du système.",
    frontLatex: "\\pi P = \\pi",
    category: "Vecteurs stationnaires",
    difficulty: "difficile"
  },

  // Matrices stochastiques
  {
    id: 25,
    front: "Qu'est-ce qu'une matrice stochastique ?",
    back: "Une matrice stochastique a des éléments ≥ 0 et chaque ligne somme à 1. Elle décrit les transitions d'une chaîne de Markov.",
    frontLatex: "p_{i,j} \\geq 0, \\quad \\sum_j p_{i,j} = 1",
    category: "Matrices stochastiques",
    difficulty: "moyen"
  },
  {
    id: 26,
    front: "Quelles sont les propriétés des matrices stochastiques ?",
    back: "Le produit de matrices stochastiques est stochastique. Les puissances successives décrivent l'évolution temporelle.",
    category: "Matrices stochastiques",
    difficulty: "difficile"
  },
  {
    id: 27,
    front: "Quelle est l'application pratique des chaînes de Markov ?",
    back: "Les chaînes de Markov sont utilisées pour modéliser la météo, les files d'attente, la navigation web (PageRank), etc.",
    category: "Applications",
    difficulty: "facile"
  },

  // Implémentation Python
  {
    id: 28,
    front: "Comment créer une matrice en Python avec NumPy ?",
    back: "On utilise np.array() : A = np.array([[1, 2], [3, 4]]) pour créer une matrice 2×2.",
    category: "Python",
    difficulty: "facile"
  },
  {
    id: 29,
    front: "Comment calculer le produit matriciel en Python ?",
    back: "On utilise l'opérateur @ ou la fonction np.dot() : C = A @ B ou C = np.dot(A, B).",
    category: "Python",
    difficulty: "facile"
  },
  {
    id: 30,
    front: "Comment calculer le déterminant en Python ?",
    back: "On utilise np.linalg.det(A) pour calculer le déterminant de la matrice A.",
    category: "Python",
    difficulty: "facile"
  },
  {
    id: 31,
    front: "Comment résoudre un système Ax = b en Python ?",
    back: "On utilise np.linalg.solve(A, b) qui retourne la solution x du système.",
    category: "Python",
    difficulty: "moyen"
  },
  {
    id: 32,
    front: "Comment calculer les valeurs propres en Python ?",
    back: "On utilise np.linalg.eig(A) qui retourne les valeurs propres et les vecteurs propres.",
    category: "Python",
    difficulty: "moyen"
  }
];

// Fonctions utilitaires pour filtrer les flashcards
export const getMatricesMarkovFlashcardsByCategory = (category: string) => {
  if (category === 'all') return matricesMarkovFlashcards;
  return matricesMarkovFlashcards.filter(card => card.category === category);
};

export const getMatricesMarkovFlashcardsByDifficulty = (difficulty: string) => {
  if (difficulty === 'all') return matricesMarkovFlashcards;
  return matricesMarkovFlashcards.filter(card => card.difficulty === difficulty);
};

export const shuffleMatricesMarkovFlashcards = (cards: MatricesMarkovFlashcard[]) => {
  const shuffled = [...cards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
