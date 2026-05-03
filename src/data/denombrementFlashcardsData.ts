export interface DenombrementFlashcard {
  id: number;
  front: string;
  back: string;
  frontLatex?: string;
  backLatex?: string;
  category: string;
  difficulty: 'facile' | 'moyen' | 'difficile';
}

// Flashcards pour le dénombrement - Séance 7 Oteria Cyber School
export const denombrementFlashcards: DenombrementFlashcard[] = [
  // Factorielles
  {
    id: 1,
    front: "Qu'est-ce que la factorielle de n ?",
    back: "Le produit de tous les entiers de 1 à n. Par convention, 0! = 1.",
    frontLatex: "n!",
    backLatex: "n! = 1 \\times 2 \\times 3 \\times \\cdots \\times n",
    category: "Factorielles",
    difficulty: "facile"
  },
  {
    id: 2,
    front: "Calculer 5!",
    back: "5! = 1 × 2 × 3 × 4 × 5 = 120",
    frontLatex: "5!",
    category: "Factorielles",
    difficulty: "facile"
  },
  {
    id: 3,
    front: "Calculer 0!",
    back: "0! = 1 (par convention)",
    frontLatex: "0!",
    category: "Factorielles",
    difficulty: "facile"
  },
  {
    id: 4,
    front: "Qu'est-ce qu'une permutation ?",
    back: "Une permutation de n éléments est un arrangement ordonné de ces éléments. Il y a n! permutations possibles.",
    frontLatex: "\\text{Permutations de } n \\text{ éléments}",
    backLatex: "\\text{Nombre de permutations} = n!",
    category: "Permutations",
    difficulty: "facile"
  },

  // Coefficients binomiaux
  {
    id: 5,
    front: "Que représente le coefficient binomial C(n,p) ?",
    back: "Le nombre de façons de choisir p éléments parmi n, sans tenir compte de l'ordre.",
    frontLatex: "\\binom{n}{p}",
    backLatex: "\\binom{n}{p} = \\frac{n!}{p!(n-p)!}",
    category: "Coefficients binomiaux",
    difficulty: "facile"
  },
  {
    id: 6,
    front: "Calculer C(5,2)",
    back: "C(5,2) = 5!/(2!×3!) = (5×4)/(2×1) = 10",
    frontLatex: "\\binom{5}{2}",
    category: "Coefficients binomiaux",
    difficulty: "facile"
  },
  {
    id: 7,
    front: "Propriété de symétrie des coefficients binomiaux",
    back: "C(n,p) = C(n,n-p). Choisir p éléments revient à choisir lesquels ne pas prendre.",
    frontLatex: "\\binom{n}{p} \\text{ et } \\binom{n}{n-p}",
    backLatex: "\\binom{n}{p} = \\binom{n}{n-p}",
    category: "Coefficients binomiaux",
    difficulty: "moyen"
  },
  {
    id: 8,
    front: "Formule de Pascal (triangle de Pascal)",
    back: "C(n,p) = C(n-1,p-1) + C(n-1,p). Un coefficient est la somme des deux au-dessus.",
    frontLatex: "\\binom{n}{p}",
    backLatex: "\\binom{n}{p} = \\binom{n-1}{p-1} + \\binom{n-1}{p}",
    category: "Coefficients binomiaux",
    difficulty: "moyen"
  },
  {
    id: 9,
    front: "Calculer C(n,0)",
    back: "C(n,0) = 1 pour tout n. Il n'y a qu'une façon de ne rien choisir.",
    frontLatex: "\\binom{n}{0}",
    category: "Coefficients binomiaux",
    difficulty: "facile"
  },
  {
    id: 10,
    front: "Calculer C(n,1)",
    back: "C(n,1) = n. Il y a n façons de choisir 1 élément parmi n.",
    frontLatex: "\\binom{n}{1}",
    category: "Coefficients binomiaux",
    difficulty: "facile"
  },

  // Binôme de Newton
  {
    id: 11,
    front: "Formule du binôme de Newton",
    back: "(a+b)ⁿ = Σ C(n,k) aᵏ bⁿ⁻ᵏ pour k de 0 à n",
    frontLatex: "(a+b)^n = \\sum_{k=0}^n \\binom{n}{k} a^k b^{n-k}",
    category: "Binôme de Newton",
    difficulty: "moyen"
  },
  {
    id: 12,
    front: "Développer (a+b)²",
    back: "(a+b)² = a² + 2ab + b²",
    frontLatex: "(a+b)^2",
    category: "Binôme de Newton",
    difficulty: "facile"
  },
  {
    id: 13,
    front: "Développer (a+b)³",
    back: "(a+b)³ = a³ + 3a²b + 3ab² + b³",
    frontLatex: "(a+b)^3",
    category: "Binôme de Newton",
    difficulty: "facile"
  },
  {
    id: 14,
    front: "Somme de tous les coefficients binomiaux",
    back: "Σ C(n,k) = 2ⁿ pour k de 0 à n. Un ensemble de n éléments a 2ⁿ sous-ensembles.",
    frontLatex: "\\sum_{k=0}^n \\binom{n}{k} = 2^n",
    category: "Binôme de Newton",
    difficulty: "moyen"
  },
  {
    id: 15,
    front: "Nombre de sous-ensembles d'un ensemble de 5 éléments",
    back: "2⁵ = 32 sous-ensembles (y compris l'ensemble vide et l'ensemble complet)",
    frontLatex: "2^5",
    category: "Binôme de Newton",
    difficulty: "facile"
  },

  // Principes de dénombrement
  {
    id: 16,
    front: "Principe multiplicatif",
    back: "Si une tâche se décompose en k étapes avec n₁, n₂, ..., nₖ choix possibles, le nombre total est n₁ × n₂ × ... × nₖ",
    frontLatex: "n_1 \\times n_2 \\times \\cdots \\times n_k",
    category: "Principes",
    difficulty: "moyen"
  },
  {
    id: 17,
    front: "Principe additif",
    back: "Si deux événements sont disjoints (incompatibles), le nombre total de possibilités est la somme des possibilités de chaque événement.",
    category: "Principes",
    difficulty: "moyen"
  },
  {
    id: 18,
    front: "Principe de complémentarité",
    back: "Il est parfois plus facile de compter le complémentaire : Total - Cas interdits",
    category: "Principes",
    difficulty: "moyen"
  },

  // Paradoxe des anniversaires
  {
    id: 19,
    front: "Énoncé du paradoxe des anniversaires",
    back: "Dans un groupe de 23 personnes, la probabilité que deux personnes aient le même anniversaire dépasse 50%.",
    category: "Paradoxe des anniversaires",
    difficulty: "moyen"
  },
  {
    id: 20,
    front: "Pourquoi le paradoxe des anniversaires est-il surprenant ?",
    back: "Car 23 est bien inférieur à 365, mais les paires possibles (253 paires) augmentent rapidement.",
    frontLatex: "\\binom{23}{2} = 253 \\text{ paires}",
    category: "Paradoxe des anniversaires",
    difficulty: "difficile"
  },
  {
    id: 21,
    front: "Probabilité de collision avec 23 personnes",
    back: "P(collision) ≈ 0.507 (environ 50.7%)",
    frontLatex: "P(\\text{collision}) \\approx 0.507",
    category: "Paradoxe des anniversaires",
    difficulty: "moyen"
  },
  {
    id: 22,
    front: "Application en cryptographie du paradoxe",
    back: "Attaque par collision sur les fonctions de hachage : avec √N essais, forte probabilité de trouver deux entrées avec le même hash.",
    frontLatex: "\\text{Attaques par collision : } \\sqrt{N} \\text{ essais}",
    category: "Paradoxe des anniversaires",
    difficulty: "difficile"
  },

  // Applications
  {
    id: 23,
    front: "Nombre de mots de passe de 8 lettres (26 lettres)",
    back: "26⁸ ≈ 209 milliards de mots de passe possibles",
    frontLatex: "26^8 \\approx 2.09 \\times 10^{11}",
    category: "Applications",
    difficulty: "moyen"
  },
  {
    id: 24,
    front: "Nombre de façons de choisir 3 délégués parmi 30 élèves",
    back: "C(30,3) = 30!/(3!×27!) = 4060 façons",
    frontLatex: "\\binom{30}{3} = 4060",
    category: "Applications",
    difficulty: "moyen"
  },
  {
    id: 25,
    front: "Nombre de mains de 5 cartes au poker (52 cartes)",
    back: "C(52,5) = 2 598 960 mains différentes",
    frontLatex: "\\binom{52}{5} = 2\\,598\\,960",
    category: "Applications",
    difficulty: "difficile"
  },
  {
    id: 26,
    front: "Croissance de la factorielle",
    back: "La factorielle croît extrêmement vite : 10! = 3.6M, 20! ≈ 2.4×10¹⁸, 100! ≈ 9.3×10¹⁵⁷",
    frontLatex: "100! \\approx 9.3 \\times 10^{157}",
    category: "Applications",
    difficulty: "moyen"
  },
  {
    id: 27,
    front: "Sécurité des hash 64 bits",
    back: "2⁶⁴ codes possibles, mais collision quasi-certaine après 2³² essais (paradoxe des anniversaires)",
    frontLatex: "2^{64} \\text{ codes, collision à } 2^{32}",
    category: "Applications",
    difficulty: "difficile"
  },
  {
    id: 28,
    front: "Pourquoi SHA-256 est plus sûr ?",
    back: "256 bits nécessitent 2¹²⁸ essais pour une collision - pratiquement impossible avec la technologie actuelle",
    frontLatex: "2^{256} \\text{ codes, collision à } 2^{128}",
    category: "Applications",
    difficulty: "difficile"
  }
];

// Fonctions utilitaires
export function getDenombrementFlashcardsByCategory(category: string): DenombrementFlashcard[] {
  return denombrementFlashcards.filter(card => card.category === category);
}

export function getDenombrementFlashcardsByDifficulty(difficulty: string): DenombrementFlashcard[] {
  return denombrementFlashcards.filter(card => card.difficulty === difficulty);
}

export function shuffleDenombrementFlashcards(cards: DenombrementFlashcard[]): DenombrementFlashcard[] {
  const shuffled = [...cards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
}

