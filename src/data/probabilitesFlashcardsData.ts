export interface ProbabilitesFlashcard {
  id: number;
  front: string;
  back: string;
  frontLatex?: string;
  backLatex?: string;
  category: string;
  difficulty: 'facile' | 'moyen' | 'difficile';
}

// Flashcards pour Introduction aux probabilités - Séance 8 Oteria Cyber School
export const probabilitesFlashcards: ProbabilitesFlashcard[] = [
  // Concepts de base
  {
    id: 1,
    front: "Qu'est-ce qu'une expérience aléatoire ?",
    back: "Une expérience aléatoire est un processus dont on ne peut pas prédire le résultat avec certitude, même si on connaît toutes les conditions initiales. Exemples : lancer un dé, tirer une carte, mesurer une durée de vie.",
    category: "Concepts de base",
    difficulty: "facile"
  },
  {
    id: 2,
    front: "Qu'est-ce que l'univers Ω d'une expérience aléatoire ?",
    back: "L'univers Ω (oméga) est l'ensemble de tous les résultats possibles d'une expérience aléatoire. C'est l'ensemble fondamental sur lequel on définit les probabilités.",
    frontLatex: "\\text{Univers } \\Omega",
    category: "Concepts de base",
    difficulty: "facile"
  },
  {
    id: 3,
    front: "Qu'est-ce qu'un événement élémentaire ?",
    back: "Un événement élémentaire est un singleton de Ω, c'est-à-dire un ensemble contenant un seul résultat possible de l'expérience aléatoire.",
    backLatex: "\\text{Exemple : } \\{6\\} \\text{ pour obtenir 6 au lancer de dé}",
    category: "Concepts de base",
    difficulty: "facile"
  },
  {
    id: 4,
    front: "Qu'est-ce qu'un événement (général) ?",
    back: "Un événement est une partie (sous-ensemble) de l'univers Ω. Il regroupe plusieurs événements élémentaires.",
    backLatex: "\\text{Exemple : } A = \\{2, 4, 6\\} \\text{ pour obtenir un nombre pair au dé}",
    category: "Concepts de base",
    difficulty: "facile"
  },
  {
    id: 5,
    front: "Comment définit-on une probabilité P ?",
    back: "Une probabilité P est une application de l'ensemble des événements vers [0, 1] qui vérifie :",
    backLatex: "1) \\, P(\\Omega) = 1 \\quad 2) \\, P(A \\cup B) = P(A) + P(B) \\text{ si } A \\cap B = \\emptyset",
    category: "Concepts de base",
    difficulty: "moyen"
  },
  {
    id: 6,
    front: "Dans un modèle équiprobable (uniforme), comment calcule-t-on P(A) ?",
    back: "P(A) = |A| / |Ω| = (nombre de cas favorables) / (nombre de cas possibles). Chaque événement élémentaire a la même probabilité 1/|Ω|.",
    frontLatex: "P(A) = ?",
    backLatex: "P(A) = \\frac{|A|}{|\\Omega|}",
    category: "Concepts de base",
    difficulty: "facile"
  },

  // Génération aléatoire Python
  {
    id: 7,
    front: "En Python, comment générer un nombre aléatoire entre 0 et 1 ?",
    back: "On utilise rd.random() après avoir importé numpy.random as rd. Cette fonction retourne un réel uniforme sur l'intervalle [0, 1[.",
    backLatex: "\\text{import numpy.random as rd} \\\\ \\text{x = rd.random()}",
    category: "Python - Génération",
    difficulty: "facile"
  },
  {
    id: 8,
    front: "Comment simuler le lancer d'un dé à 6 faces en Python ?",
    back: "Deux méthodes : rd.randint(1, 7) ou np.floor(6 * rd.random()) + 1",
    backLatex: "\\text{rd.randint(1, 7)} \\\\ \\text{ou} \\\\ \\text{np.floor(6 * rd.random()) + 1}",
    category: "Python - Génération",
    difficulty: "facile"
  },
  {
    id: 9,
    front: "Comment générer un tableau de n nombres aléatoires en Python ?",
    back: "On utilise rd.random(n) pour obtenir un vecteur de n réels uniformes sur [0, 1[, ou rd.random((n, m)) pour une matrice n×m.",
    backLatex: "\\text{Vecteur : rd.random(n)} \\\\ \\text{Matrice : rd.random((n, m))}",
    category: "Python - Génération",
    difficulty: "facile"
  },
  {
    id: 10,
    front: "En Python, comment simuler une loi de Bernoulli B(p) ?",
    back: "Deux méthodes : rd.binomial(1, p) qui retourne 1 avec probabilité p et 0 avec probabilité 1-p, ou écrire : 1 if rd.random() <= p else 0",
    backLatex: "\\text{rd.binomial(1, p)} \\\\ \\text{ou} \\\\ \\text{1 if rd.random() <= p else 0}",
    category: "Python - Génération",
    difficulty: "moyen"
  },
  {
    id: 11,
    front: "Comment vérifier expérimentalement une probabilité théorique en Python ?",
    back: "On simule N expériences (N grand), on compte le nombre de fois où l'événement A se réalise (compteur), puis on calcule la fréquence empirique : compteur/N ≈ P(A) quand N → ∞.",
    backLatex: "\\text{frequence} = \\frac{\\text{compteur}}{N} \\approx P(A)",
    category: "Python - Génération",
    difficulty: "moyen"
  },

  // Règles de calcul
  {
    id: 12,
    front: "Quelle est la probabilité de l'événement contraire ?",
    back: "P(Ā) = 1 - P(A), où Ā (ou Ac) désigne le complémentaire de A dans Ω. Cette formule découle de P(Ω) = P(A ∪ Ā) = P(A) + P(Ā) = 1.",
    frontLatex: "P(\\overline{A}) = ?",
    backLatex: "P(\\overline{A}) = 1 - P(A)",
    category: "Règles de calcul",
    difficulty: "facile"
  },
  {
    id: 13,
    front: "Énoncez la règle d'addition pour deux événements quelconques A et B",
    back: "P(A ∪ B) = P(A) + P(B) - P(A ∩ B). On soustrait P(A ∩ B) car l'intersection est comptée deux fois dans P(A) + P(B).",
    frontLatex: "P(A \\cup B) = ?",
    backLatex: "P(A \\cup B) = P(A) + P(B) - P(A \\cap B)",
    category: "Règles de calcul",
    difficulty: "facile"
  },
  {
    id: 14,
    front: "Quelle est la formule de P(A ∪ B) si A et B sont incompatibles (disjoints) ?",
    back: "Si A ∩ B = ∅, alors P(A ∪ B) = P(A) + P(B). C'est un cas particulier de la règle d'addition générale.",
    frontLatex: "A \\cap B = \\emptyset \\Rightarrow P(A \\cup B) = ?",
    backLatex: "P(A \\cup B) = P(A) + P(B)",
    category: "Règles de calcul",
    difficulty: "facile"
  },
  {
    id: 15,
    front: "Si A ⊂ B, que peut-on dire de P(A) et P(B) ?",
    back: "Si A ⊂ B, alors P(A) ≤ P(B). La probabilité est croissante pour l'inclusion. De plus, P(B\\A) = P(B) - P(A).",
    frontLatex: "A \\subset B \\Rightarrow ?",
    backLatex: "P(A) \\leq P(B) \\text{ et } P(B \\setminus A) = P(B) - P(A)",
    category: "Règles de calcul",
    difficulty: "moyen"
  },
  {
    id: 16,
    front: "Que signifie P(A ∪ B ∪ C) pour trois événements ?",
    back: "C'est la probabilité qu'au moins un des trois événements se réalise.",
    frontLatex: "P(A \\cup B \\cup C) = ?",
    backLatex: "P(A)+P(B)+P(C) - P(A\\cap B) - P(A\\cap C) - P(B\\cap C) + P(A\\cap B\\cap C)",
    category: "Règles de calcul",
    difficulty: "difficile"
  },

  // Probabilité conditionnelle
  {
    id: 17,
    front: "Qu'est-ce que la probabilité conditionnelle P(A|B) ?",
    back: "P(A|B) = P(A ∩ B) / P(B) (si P(B) > 0). C'est la probabilité que A se réalise sachant que B est réalisé. On restreint l'univers à B.",
    frontLatex: "P(A|B) = ?",
    backLatex: "P(A|B) = \\frac{P(A \\cap B)}{P(B)} \\text{ si } P(B) > 0",
    category: "Probabilité conditionnelle",
    difficulty: "moyen"
  },
  {
    id: 18,
    front: "Énoncez la règle de multiplication (formule des probabilités composées)",
    back: "P(A ∩ B) = P(B) × P(A|B) = P(A) × P(B|A) (si les probabilités conditionnelles sont définies). Elle permet de calculer la probabilité d'une intersection.",
    frontLatex: "P(A \\cap B) = ?",
    backLatex: "P(A \\cap B) = P(B) \\times P(A|B) = P(A) \\times P(B|A)",
    category: "Probabilité conditionnelle",
    difficulty: "moyen"
  },
  {
    id: 19,
    front: "Qu'est-ce que la formule des probabilités totales ?",
    back: "Si (B₁, B₂, ..., Bₙ) forme une partition de Ω, alors P(A) = Σᵢ P(A ∩ Bᵢ) = Σᵢ P(Bᵢ) × P(A|Bᵢ). Elle permet de décomposer le calcul de P(A) selon différents cas.",
    frontLatex: "P(A) = ?",
    backLatex: "P(A) = \\sum_i P(B_i) \\times P(A|B_i)",
    category: "Probabilité conditionnelle",
    difficulty: "difficile"
  },
  {
    id: 20,
    front: "Énoncez la formule de Bayes",
    back: "P(Bⱼ|A) = P(Bⱼ) × P(A|Bⱼ) / P(A) = P(Bⱼ) × P(A|Bⱼ) / Σᵢ P(Bᵢ) × P(A|Bᵢ). Elle permet d'inverser le conditionnement (passer de P(A|B) à P(B|A)).",
    frontLatex: "P(B_j|A) = ?",
    backLatex: "P(B_j|A) = \\frac{P(B_j) \\times P(A|B_j)}{\\sum_i P(B_i) \\times P(A|B_i)}",
    category: "Probabilité conditionnelle",
    difficulty: "difficile"
  },

  // Indépendance
  {
    id: 21,
    front: "Quand dit-on que deux événements A et B sont indépendants ?",
    back: "A et B sont indépendants si P(A ∩ B) = P(A) × P(B). De manière équivalente : P(A|B) = P(A) (si P(B) > 0), c'est-à-dire que B n'apporte aucune information sur A.",
    frontLatex: "A \\text{ et } B \\text{ indépendants } \\Leftrightarrow ?",
    backLatex: "P(A \\cap B) = P(A) \\times P(B)",
    category: "Indépendance",
    difficulty: "moyen"
  },
  {
    id: 22,
    front: "Si A et B sont indépendants, que peut-on dire de Ā et B ?",
    back: "Si A et B sont indépendants, alors Ā et B sont également indépendants. Plus généralement, toute combinaison (A, B), (Ā, B), (A, B̄), (Ā, B̄) sont indépendantes.",
    frontLatex: "A \\perp B \\Rightarrow \\overline{A} \\perp B ?",
    category: "Indépendance",
    difficulty: "moyen"
  },
  {
    id: 23,
    front: "Incompatibilité vs indépendance : quelle est la différence ?",
    back: "Deux événements incompatibles (disjoints) vérifient A ∩ B = ∅ donc P(A ∩ B) = 0. Deux événements indépendants vérifient P(A ∩ B) = P(A)×P(B). Si A et B sont incompatibles ET de probabilités non nulles, ils NE PEUVENT PAS être indépendants !",
    frontLatex: "\\text{Incompatibles } \\neq \\text{ Indépendants}",
    backLatex: "A \\cap B = \\emptyset \\Rightarrow P(A \\cap B) = 0 \\neq P(A) \\times P(B)",
    category: "Indépendance",
    difficulty: "difficile"
  },
  {
    id: 24,
    front: "Quel est le lien entre indépendance de deux événements et leurs variables indicatrices ?",
    back: "A et B sont indépendants ⟺ E(𝟙ₐ × 𝟙ᵦ) = E(𝟙ₐ) × E(𝟙ᵦ) ⟺ P(A∩B) = P(A) × P(B). L'indépendance se traduit par la factorisation des espérances.",
    frontLatex: "A \\perp B \\Leftrightarrow ?",
    backLatex: "\\mathbb{E}(\\mathbb{1}_A \\times \\mathbb{1}_B) = \\mathbb{E}(\\mathbb{1}_A) \\times \\mathbb{E}(\\mathbb{1}_B)",
    category: "Indépendance",
    difficulty: "difficile"
  },

  // Systèmes complets
  {
    id: 25,
    front: "Qu'est-ce qu'un système complet d'événements ?",
    back: "Un système complet d'événements (ou partition de Ω) est une famille (B₁, B₂, ..., Bₙ) d'événements deux à deux disjoints dont l'union est Ω. On a Σᵢ P(Bᵢ) = 1.",
    frontLatex: "\\text{Système complet}",
    backLatex: "B_i \\cap B_j = \\emptyset \\text{ et } \\bigcup_i B_i = \\Omega \\Rightarrow \\sum_i P(B_i) = 1",
    category: "Systèmes complets",
    difficulty: "moyen"
  }
];

// Fonctions utilitaires pour filtrer les flashcards
export const getProbabilitesFlashcardsByCategory = (category: string): ProbabilitesFlashcard[] => {
  return probabilitesFlashcards.filter(card => card.category === category);
};

export const getProbabilitesFlashcardsByDifficulty = (difficulty: 'facile' | 'moyen' | 'difficile'): ProbabilitesFlashcard[] => {
  return probabilitesFlashcards.filter(card => card.difficulty === difficulty);
};

export const shuffleProbabilitesFlashcards = (cards: ProbabilitesFlashcard[]): ProbabilitesFlashcard[] => {
  const shuffled = [...cards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

