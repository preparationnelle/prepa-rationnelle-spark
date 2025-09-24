export interface LogicFlashcard {
  id: number;
  front: string;
  back: string;
  frontLatex?: string;
  backLatex?: string;
  category: string;
  difficulty: 'facile' | 'moyen' | 'difficile';
}

// Flashcards pour la logique fondamentale - Séance 1 Oteria Cyber School
export const logicFlashcards: LogicFlashcard[] = [
  // Propositions et négation
  {
    id: 1,
    front: "Qu'est-ce qu'une proposition en logique ?",
    back: "Une proposition est une affirmation concernant des objets mathématiques dont on peut décider sans ambiguïté si elle est vraie ou fausse.",
    category: "Propositions",
    difficulty: "facile"
  },
  {
    id: 2,
    front: "Comment note-t-on la négation d'une proposition P ?",
    back: "La négation de P se note ¬P. Elle est vraie quand P est fausse, et fausse quand P est vraie.",
    frontLatex: "\\neg P",
    category: "Propositions",
    difficulty: "facile"
  },
  {
    id: 3,
    front: "Donnez un exemple de proposition vraie",
    back: "« 2+2=4 » est une proposition vraie car elle peut être vérifiée sans ambiguïté.",
    category: "Propositions",
    difficulty: "facile"
  },
  {
    id: 4,
    front: "Donnez un exemple de proposition fausse",
    back: "« 5 est pair » est une proposition fausse car 5 est impair.",
    category: "Propositions",
    difficulty: "facile"
  },
  {
    id: 5,
    front: "Pourquoi « x+1=3 » n'est-il pas une proposition ?",
    back: "Ce n'est pas une proposition tant qu'on ne connaît pas la valeur de x. Sa valeur de vérité dépend de la variable x.",
    category: "Propositions",
    difficulty: "moyen"
  },

  // Connecteurs logiques
  {
    id: 6,
    front: "Que signifie P ∧ Q ?",
    back: "P ∧ Q signifie « P ET Q », c'est-à-dire que P et Q sont toutes les deux vraies.",
    frontLatex: "P \\land Q",
    category: "Connecteurs",
    difficulty: "facile"
  },
  {
    id: 7,
    front: "Que signifie P ∨ Q ?",
    back: "P ∨ Q signifie « P OU Q », c'est-à-dire qu'au moins l'une des deux propositions est vraie.",
    frontLatex: "P \\lor Q",
    category: "Connecteurs",
    difficulty: "facile"
  },
  {
    id: 8,
    front: "Quand P ∧ Q est-elle vraie ?",
    back: "P ∧ Q est vraie seulement quand P et Q sont toutes les deux vraies. Dans tous les autres cas, elle est fausse.",
    frontLatex: "P \\land Q",
    category: "Connecteurs",
    difficulty: "moyen"
  },
  {
    id: 9,
    front: "Quand P ∨ Q est-elle fausse ?",
    back: "P ∨ Q est fausse seulement quand P et Q sont toutes les deux fausses. Sinon, elle est vraie.",
    frontLatex: "P \\lor Q",
    category: "Connecteurs",
    difficulty: "moyen"
  },
  {
    id: 10,
    front: "Donnez un exemple avec P = « n est pair » et Q = « n est multiple de 3 »",
    back: "P ∧ Q : « n est pair ET multiple de 3 » (ex: n=6). P ∨ Q : « n est pair OU multiple de 3 » (ex: n=4, n=9).",
    category: "Connecteurs",
    difficulty: "moyen"
  },

  // Implication
  {
    id: 11,
    front: "Que signifie P ⇒ Q ?",
    back: "P ⇒ Q signifie « si P est vraie alors Q l'est ». C'est une implication logique.",
    frontLatex: "P \\Rightarrow Q",
    category: "Implication",
    difficulty: "facile"
  },
  {
    id: 12,
    front: "Que signifie P ⇔ Q ?",
    back: "P ⇔ Q signifie que P et Q sont équivalentes : P ⇒ Q ET Q ⇒ P. P est vraie si et seulement si Q est vraie.",
    frontLatex: "P \\Leftrightarrow Q",
    category: "Implication",
    difficulty: "moyen"
  },
  {
    id: 13,
    front: "Quand P ⇒ Q est-elle fausse ?",
    back: "P ⇒ Q est fausse seulement quand P est vraie et Q est fausse. Dans tous les autres cas, elle est vraie.",
    frontLatex: "P \\Rightarrow Q",
    category: "Implication",
    difficulty: "moyen"
  },
  {
    id: 14,
    front: "Donnez un exemple d'implication vraie",
    back: "« Si n est multiple de 4, alors n est pair » est vraie car tout multiple de 4 est effectivement pair.",
    category: "Implication",
    difficulty: "moyen"
  },
  {
    id: 15,
    front: "Qu'est-ce que la contraposée de P ⇒ Q ?",
    back: "La contraposée de P ⇒ Q est ¬Q ⇒ ¬P. Elle a la même valeur de vérité que l'implication originale.",
    frontLatex: "\\neg Q \\Rightarrow \\neg P",
    category: "Implication",
    difficulty: "difficile"
  },

  // Quantificateurs
  {
    id: 16,
    front: "Que signifie le quantificateur ∀ ?",
    back: "∀ signifie « pour tout » ou « quel que soit ». ∀x, P(x) signifie que P(x) est vraie pour tous les x.",
    frontLatex: "\\forall",
    category: "Quantificateurs",
    difficulty: "facile"
  },
  {
    id: 17,
    front: "Que signifie le quantificateur ∃ ?",
    back: "∃ signifie « il existe ». ∃x, P(x) signifie qu'il existe au moins un x tel que P(x) soit vraie.",
    frontLatex: "\\exists",
    category: "Quantificateurs",
    difficulty: "facile"
  },
  {
    id: 18,
    front: "Que signifie ∃! ?",
    back: "∃! signifie « il existe un unique ». ∃!x, P(x) signifie qu'il existe exactement un x tel que P(x) soit vraie.",
    frontLatex: "\\exists!",
    category: "Quantificateurs",
    difficulty: "moyen"
  },
  {
    id: 19,
    front: "Donnez un exemple avec ∀",
    back: "∀n ∈ ℕ, n² ≥ 0 signifie que pour tout entier naturel n, le carré de n est positif ou nul.",
    frontLatex: "\\forall n \\in \\mathbb{N}, n^2 \\geq 0",
    category: "Quantificateurs",
    difficulty: "moyen"
  },
  {
    id: 20,
    front: "Donnez un exemple avec ∃",
    back: "∃x ∈ ℝ, x² = 2 signifie qu'il existe un nombre réel x tel que x² = 2 (par exemple x = √2).",
    frontLatex: "\\exists x \\in \\mathbb{R}, x^2 = 2",
    category: "Quantificateurs",
    difficulty: "moyen"
  },
  {
    id: 21,
    front: "Donnez un exemple avec ∃!",
    back: "∃!x ∈ ℝ, x² = 0 signifie qu'il existe un unique nombre réel x tel que x² = 0, à savoir x = 0.",
    frontLatex: "\\exists! x \\in \\mathbb{R}, x^2 = 0",
    category: "Quantificateurs",
    difficulty: "moyen"
  },

  // Tables de vérité
  {
    id: 22,
    front: "À quoi sert une table de vérité ?",
    back: "Une table de vérité donne les valeurs de propositions composées en fonction des valeurs de vérité des propositions simples qui les composent.",
    category: "Tables de vérité",
    difficulty: "facile"
  },
  {
    id: 23,
    front: "Dans une table de vérité, que vaut ¬P quand P est vraie ?",
    back: "Quand P est vraie (V), ¬P est fausse (F).",
    category: "Tables de vérité",
    difficulty: "facile"
  },
  {
    id: 24,
    front: "Dans une table de vérité, que vaut P ∧ Q quand P=V et Q=F ?",
    back: "Quand P=V et Q=F, alors P ∧ Q = F car les deux propositions ne sont pas vraies simultanément.",
    category: "Tables de vérité",
    difficulty: "moyen"
  },
  {
    id: 25,
    front: "Dans une table de vérité, que vaut P ∨ Q quand P=F et Q=F ?",
    back: "Quand P=F et Q=F, alors P ∨ Q = F car aucune des deux propositions n'est vraie.",
    category: "Tables de vérité",
    difficulty: "moyen"
  },

  // Méthodes de démonstration
  {
    id: 26,
    front: "Qu'est-ce que la disjonction de cas ?",
    back: "La disjonction de cas consiste à diviser le problème en plusieurs cas qui couvrent toutes les possibilités, puis à traiter chaque cas séparément.",
    category: "Démonstration",
    difficulty: "moyen"
  },
  {
    id: 27,
    front: "Qu'est-ce que le raisonnement par l'absurde ?",
    back: "Le raisonnement par l'absurde consiste à supposer le contraire de ce que l'on veut prouver, puis à arriver à une contradiction.",
    category: "Démonstration",
    difficulty: "moyen"
  },
  {
    id: 28,
    front: "Donnez un exemple de raisonnement par l'absurde",
    back: "Pour montrer que √2 est irrationnel : supposons √2 = p/q (fraction irréductible), on aboutit à p et q tous deux pairs, contradiction avec l'irréductibilité.",
    category: "Démonstration",
    difficulty: "difficile"
  },
  {
    id: 29,
    front: "Qu'est-ce que la méthode analyse-synthèse ?",
    back: "Analyse : on suppose que la solution existe et on détermine ses propriétés. Synthèse : on vérifie que les candidats trouvés sont effectivement solutions.",
    category: "Démonstration",
    difficulty: "difficile"
  },
  {
    id: 30,
    front: "Quel est le principe de la récurrence ?",
    back: "Récurrence : initialisation (vérifier pour n₀), puis hérédité (si vrai pour n, alors vrai pour n+1). Cela prouve la propriété pour tout n ≥ n₀.",
    category: "Démonstration",
    difficulty: "difficile"
  },

  // Applications Python
  {
    id: 31,
    front: "Quelles sont les deux valeurs booléennes en Python ?",
    back: "En Python, les valeurs booléennes sont True (vrai) et False (faux).",
    category: "Python",
    difficulty: "facile"
  },
  {
    id: 32,
    front: "Comment traduit-on ¬P en Python ?",
    back: "La négation ¬P se traduit par 'not P' en Python.",
    category: "Python",
    difficulty: "facile"
  },
  {
    id: 33,
    front: "Comment traduit-on P ∧ Q en Python ?",
    back: "Le ET logique P ∧ Q se traduit par 'P and Q' en Python.",
    category: "Python",
    difficulty: "facile"
  },
  {
    id: 34,
    front: "Comment traduit-on P ∨ Q en Python ?",
    back: "Le OU logique P ∨ Q se traduit par 'P or Q' en Python.",
    category: "Python",
    difficulty: "facile"
  },
  {
    id: 35,
    front: "Comment teste-t-on si un nombre n est pair en Python ?",
    back: "On utilise l'expression 'n % 2 == 0' qui retourne True si n est pair, False sinon.",
    category: "Python",
    difficulty: "moyen"
  },
  {
    id: 36,
    front: "Comment écrit-on une condition composée en Python ?",
    back: "Exemple : 'x > 0 and x < 10' pour tester si x est strictement entre 0 et 10.",
    category: "Python",
    difficulty: "moyen"
  }
];

// Fonction utilitaire pour obtenir les flashcards par catégorie
export const getFlashcardsByCategory = (category: string) => {
  return logicFlashcards.filter(card => card.category === category);
};

// Fonction utilitaire pour obtenir les flashcards par difficulté
export const getFlashcardsByDifficulty = (difficulty: 'facile' | 'moyen' | 'difficile') => {
  return logicFlashcards.filter(card => card.difficulty === difficulty);
};

// Fonction utilitaire pour mélanger les flashcards
export const shuffleFlashcards = (cards: LogicFlashcard[]) => {
  return [...cards].sort(() => Math.random() - 0.5);
};
