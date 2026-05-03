export interface SequencesFlashcard {
  id: number;
  front: string;
  back: string;
  frontLatex?: string;
  backLatex?: string;
  category: string;
  difficulty: 'facile' | 'moyen' | 'difficile';
}

// Flashcards pour les suites numériques - Séance 4 Oteria Cyber School
export const sequencesFlashcards: SequencesFlashcard[] = [
  // Définitions de base
  {
    id: 1,
    front: "Qu'est-ce qu'une suite explicite ?",
    back: "Une suite définie directement par une formule donnant le terme général uₙ en fonction de n.",
    frontLatex: "\\text{Suite explicite : } u_n = f(n)",
    category: "Définitions",
    difficulty: "facile"
  },
  {
    id: 2,
    front: "Qu'est-ce qu'une suite récurrente ?",
    back: "Une suite où chaque terme est défini en fonction du ou des termes précédents, avec des conditions initiales.",
    frontLatex: "\\text{Suite récurrente : } u_{n+1} = f(u_n)",
    category: "Définitions",
    difficulty: "facile"
  },
  {
    id: 3,
    front: "Donnez un exemple de suite explicite",
    back: "uₙ = 1/n pour n ≥ 1 (suite harmonique)",
    frontLatex: "u_n = \\frac{1}{n}",
    category: "Définitions",
    difficulty: "facile"
  },
  {
    id: 4,
    front: "Donnez un exemple de suite récurrente",
    back: "u₀ = 0 et u(n+1) = (1/2)uₙ + 1",
    frontLatex: "u_0 = 0 \\quad u_{n+1} = \\frac{1}{2}u_n + 1",
    category: "Définitions",
    difficulty: "facile"
  },

  // Majorants et minorants
  {
    id: 5,
    front: "Qu'est-ce qu'une suite majorée ?",
    back: "Une suite (uₙ) est majorée s'il existe M ∈ ℝ tel que ∀n ∈ ℕ, uₙ ≤ M",
    frontLatex: "\\exists M \\in \\mathbb{R} \\quad \\forall n \\in \\mathbb{N} \\quad u_n \\leq M",
    category: "Bornes",
    difficulty: "facile"
  },
  {
    id: 6,
    front: "Qu'est-ce qu'une suite minorée ?",
    back: "Une suite (uₙ) est minorée s'il existe m ∈ ℝ tel que ∀n ∈ ℕ, uₙ ≥ m",
    frontLatex: "\\exists m \\in \\mathbb{R} \\quad \\forall n \\in \\mathbb{N} \\quad u_n \\geq m",
    category: "Bornes",
    difficulty: "facile"
  },
  {
    id: 7,
    front: "Qu'est-ce qu'une suite bornée ?",
    back: "Une suite est bornée si elle est à la fois majorée et minorée.",
    category: "Bornes",
    difficulty: "facile"
  },
  {
    id: 8,
    front: "La suite uₙ = sin(n²)/n est-elle bornée ?",
    back: "Oui, car |sin(x)| ≤ 1 pour tout x réel, donc |uₙ| ≤ 1/n et elle converge vers 0.",
    frontLatex: "u_n = \\frac{\\sin(n^2)}{n}",
    category: "Bornes",
    difficulty: "moyen"
  },

  // Sens de variation
  {
    id: 9,
    front: "Qu'est-ce qu'une suite croissante ?",
    back: "Une suite (uₙ) est croissante si ∀n ∈ ℕ, u(n+1) ≥ uₙ",
    frontLatex: "\\forall n \\in \\mathbb{N} \\quad u_{n+1} \\geq u_n",
    category: "Sens de variation",
    difficulty: "facile"
  },
  {
    id: 10,
    front: "Qu'est-ce qu'une suite décroissante ?",
    back: "Une suite (uₙ) est décroissante si ∀n ∈ ℕ, u(n+1) ≤ uₙ",
    frontLatex: "\\forall n \\in \\mathbb{N} \\quad u_{n+1} \\leq u_n",
    category: "Sens de variation",
    difficulty: "facile"
  },
  {
    id: 11,
    front: "La suite uₙ = 1/n est-elle décroissante ?",
    back: "Oui, car u(n+1) = 1/(n+1) < 1/n = uₙ pour tout n ≥ 1.",
    frontLatex: "u_n = \\frac{1}{n}",
    category: "Sens de variation",
    difficulty: "moyen"
  },
  {
    id: 12,
    front: "Qu'est-ce qu'une suite stationnaire à partir d'un rang n₀ ?",
    back: "À partir d'un certain rang n₀, tous les termes suivants sont égaux : ∀n ≥ n₀, u(n+1) = uₙ",
    frontLatex: "\\exists n_0 \\quad \\forall n \\geq n_0 \\quad u_{n+1} = u_n",
    category: "Sens de variation",
    difficulty: "moyen"
  },

  // Convergence
  {
    id: 13,
    front: "Quelle est la définition de la convergence d'une suite ?",
    back: "Une suite (uₙ) converge vers ℓ ∈ ℝ si ∀ε > 0, ∃n₀ ∈ ℕ tel que ∀n ≥ n₀, |uₙ - ℓ| ≤ ε",
    frontLatex: "\\lim_{n \\to +\\infty} u_n = \\ell \\iff \\forall \\epsilon > 0 \\quad \\exists n_0 \\quad \\forall n \\geq n_0 \\quad |u_n - \\ell| \\leq \\epsilon",
    category: "Convergence",
    difficulty: "moyen"
  },
  {
    id: 14,
    front: "Qu'est-ce qu'une suite divergente ?",
    back: "Une suite qui ne converge pas vers une limite finie.",
    category: "Convergence",
    difficulty: "facile"
  },
  {
    id: 15,
    front: "Quand dit-on qu'une suite tend vers +∞ ?",
    back: "∀A > 0, ∃n₀ ∈ ℕ tel que ∀n ≥ n₀, uₙ ≥ A",
    frontLatex: "\\lim_{n \\to +\\infty} u_n = +\\infty \\iff \\forall A > 0 \\quad \\exists n_0 \\quad \\forall n \\geq n_0 \\quad u_n \\geq A",
    category: "Convergence",
    difficulty: "moyen"
  },
  {
    id: 16,
    front: "La suite uₙ = n² diverge-t-elle ? Vers quoi ?",
    back: "Oui, elle diverge vers +∞ car elle n'est pas majorée.",
    frontLatex: "u_n = n^2",
    category: "Convergence",
    difficulty: "facile"
  },

  // Opérations sur les limites
  {
    id: 17,
    front: "Si uₙ → ℓ et vₙ → ℓ', alors uₙ + vₙ → ?",
    back: "uₙ + vₙ → ℓ + ℓ'",
    frontLatex: "\\lim (u_n + v_n) = \\lim u_n + \\lim v_n = \\ell + \\ell'",
    category: "Opérations sur les limites",
    difficulty: "facile"
  },
  {
    id: 18,
    front: "Si uₙ → ℓ et vₙ → ℓ' ≠ 0, alors uₙ × vₙ → ?",
    back: "uₙ × vₙ → ℓ × ℓ'",
    frontLatex: "\\lim (u_n \\times v_n) = \\lim u_n \\times \\lim v_n = \\ell \\times \\ell'",
    category: "Opérations sur les limites",
    difficulty: "facile"
  },
  {
    id: 19,
    front: "Si uₙ → ℓ ≠ 0, alors 1/uₙ → ?",
    back: "1/uₙ → 1/ℓ",
    frontLatex: "\\lim \\frac{1}{u_n} = \\frac{1}{\\lim u_n} = \\frac{1}{\\ell}",
    category: "Opérations sur les limites",
    difficulty: "facile"
  },
  {
    id: 20,
    front: "Si uₙ → ℓ et vₙ → ℓ' ≠ 0, alors uₙ/vₙ → ?",
    back: "uₙ/vₙ → ℓ/ℓ'",
    frontLatex: "\\lim \\frac{u_n}{v_n} = \\frac{\\lim u_n}{\\lim v_n} = \\frac{\\ell}{\\ell'}",
    category: "Opérations sur les limites",
    difficulty: "moyen"
  },

  // Théorème de la limite monotone
  {
    id: 21,
    front: "Théorème de la limite monotone : suite croissante majorée ?",
    back: "Une suite croissante majorée converge vers son supremum.",
    category: "Théorème limite monotone",
    difficulty: "moyen"
  },
  {
    id: 22,
    front: "Théorème de la limite monotone : suite décroissante minorée ?",
    back: "Une suite décroissante minorée converge vers son infimum.",
    category: "Théorème limite monotone",
    difficulty: "moyen"
  },
  {
    id: 23,
    front: "Théorème de la limite monotone : suite croissante non majorée ?",
    back: "Une suite croissante non majorée diverge vers +∞.",
    category: "Théorème limite monotone",
    difficulty: "moyen"
  },
  {
    id: 24,
    front: "Théorème de la limite monotone : suite décroissante non minorée ?",
    back: "Une suite décroissante non minorée diverge vers -∞.",
    category: "Théorème limite monotone",
    difficulty: "moyen"
  },

  // Théorème d'encadrement
  {
    id: 25,
    front: "Théorème d'encadrement (des gendarmes)",
    back: "Si vₙ ≤ uₙ ≤ wₙ et vₙ → ℓ, wₙ → ℓ, alors uₙ → ℓ",
    frontLatex: "v_n \\leq u_n \\leq w_n \\quad \\lim v_n = \\lim w_n = \\ell \\implies \\lim u_n = \\ell",
    category: "Théorème d'encadrement",
    difficulty: "moyen"
  },
  {
    id: 26,
    front: "Prolongement des inégalités",
    back: "Si uₙ ≤ vₙ à partir d'un certain rang et uₙ → ℓ, alors ℓ ≤ ℓ' où vₙ → ℓ'",
    frontLatex: "u_n \\leq v_n \\quad \\lim u_n = \\ell \\quad \\lim v_n = \\ell' \\implies \\ell \\leq \\ell'",
    category: "Théorème d'encadrement",
    difficulty: "moyen"
  },
  {
    id: 27,
    front: "Théorème de comparaison",
    back: "Si uₙ ≤ vₙ à partir d'un certain rang, alors : si vₙ → +∞ alors uₙ → +∞, si uₙ → -∞ alors vₙ → -∞",
    category: "Théorème d'encadrement",
    difficulty: "difficile"
  },

  // Convergence et composition
  {
    id: 28,
    front: "Théorème de composition des limites",
    back: "Si uₙ → a et f est continue en a, alors f(uₙ) → f(a)",
    frontLatex: "\\lim u_n = a \\quad f \\text{ continue en } a \\implies \\lim f(u_n) = f(a)",
    category: "Composition",
    difficulty: "moyen"
  },
  {
    id: 29,
    front: "Exemple de composition : uₙ → 2, alors sin(uₙ) → ?",
    back: "sin(uₙ) → sin(2), car sin est continue partout.",
    frontLatex: "\\lim u_n = 2 \\implies \\lim \\sin(u_n) = \\sin(2)",
    category: "Composition",
    difficulty: "facile"
  },

  // Suites particulières
  {
    id: 30,
    front: "Qu'est-ce qu'une suite adjacente ?",
    back: "Deux suites uₙ et vₙ avec uₙ ≤ vₙ et vₙ - uₙ → 0. Elles convergent vers la même limite ℓ.",
    frontLatex: "u_n \\leq v_n \\quad \\lim (v_n - u_n) = 0 \\implies \\lim u_n = \\lim v_n = \\ell",
    category: "Suites particulières",
    difficulty: "difficile"
  },
  {
    id: 31,
    front: "Qu'est-ce qu'un point fixe d'une suite récurrente ?",
    back: "Une valeur ℓ telle que ℓ = f(ℓ), où u(n+1) = f(uₙ)",
    frontLatex: "\\ell = f(\\ell)",
    category: "Suites particulières",
    difficulty: "moyen"
  },
  {
    id: 32,
    front: "Méthode de Babylone pour calculer √2",
    back: "u(n+1) = (uₙ + 2/uₙ)/2 avec u₀ > 0. Le point fixe est √2.",
    frontLatex: "u_{n+1} = \\frac{u_n + \\frac{2}{u_n}}{2} \\quad \\text{Point fixe : } \\sqrt{2}",
    category: "Suites particulières",
    difficulty: "difficile"
  },
  {
    id: 33,
    front: "Suites extraites : condition pour que (uₙ) converge",
    back: "Si les suites des termes pairs et impairs convergent vers la même limite ℓ, alors uₙ → ℓ",
    frontLatex: "\\lim u_{2n} = \\lim u_{2n+1} = \\ell \\implies \\lim u_n = \\ell",
    category: "Suites particulières",
    difficulty: "difficile"
  },

  // Applications pratiques
  {
    id: 34,
    front: "Comment déterminer graphiquement la limite d'une suite ?",
    back: "Tracer les premiers termes et observer vers quelle valeur ils se rapprochent.",
    category: "Applications",
    difficulty: "facile"
  },
  {
    id: 35,
    front: "Comment vérifier qu'une suite est bornée ?",
    back: "Chercher un majorant M et un minorant m tels que m ≤ uₙ ≤ M pour tout n.",
    category: "Applications",
    difficulty: "moyen"
  },
  {
    id: 36,
    front: "Quelle est la différence entre convergence et divergence ?",
    back: "Convergence : la suite se rapproche d'une limite finie. Divergence : elle s'éloigne vers ±∞ ou oscille.",
    category: "Applications",
    difficulty: "facile"
  }
];

// Fonctions utilitaires
export const getSequencesFlashcardsByCategory = (category: string): SequencesFlashcard[] => {
  return sequencesFlashcards.filter(card => card.category === category);
};

export const getSequencesFlashcardsByDifficulty = (difficulty: string): SequencesFlashcard[] => {
  return sequencesFlashcards.filter(card => card.difficulty === difficulty);
};

export const shuffleSequencesFlashcards = (cards: SequencesFlashcard[]): SequencesFlashcard[] => {
  const shuffled = [...cards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
