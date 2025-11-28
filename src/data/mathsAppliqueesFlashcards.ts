import type { MathFlashcard } from '@/data/mathFlashcardsData';

// Chapitre 1: Éléments de logique
export const elementsDeLogiqueFlashcards: MathFlashcard[] = [
  {
    id: 1001,
    front: 'Qu\'est-ce qu\'une proposition ?',
    back: 'Une proposition est une affirmation concernant des objets mathématiques dont on peut décider sans ambiguïté si elle est vraie ou fausse.',
    frontLatex: '\\text{Qu\'est-ce qu\'une proposition ?}',
    backLatex: '\\text{Une proposition est une affirmation concernant des objets mathématiques dont on peut décider sans ambiguïté si elle est vraie ou fausse.}',
    category: 'Définitions',
    chapter: 1,
    difficulty: 'facile'
  },
  {
    id: 1002,
    front: 'Qu\'est-ce que la négation d\'une proposition P ?',
    back: 'La négation de P, notée ¬P, est vraie quand P est fausse, et fausse quand P est vraie.',
    frontLatex: '\\text{Qu\'est-ce que la négation d\'une proposition P ?}',
    backLatex: '\\text{La négation de P, notée } \\neg P\\text{, est vraie quand P est fausse, et fausse quand P est vraie.}',
    category: 'Opérations logiques',
    chapter: 1,
    difficulty: 'facile'
  },
  {
    id: 1003,
    front: 'Quelle est la conjonction de deux propositions P et Q ?',
    back: 'La conjonction P ∧ Q ("P et Q") est vraie seulement si P et Q sont toutes deux vraies.',
    frontLatex: '\\text{Quelle est la conjonction de deux propositions P et Q ?}',
    backLatex: '\\text{La conjonction } P \\wedge Q \\text{ ("P et Q") est vraie seulement si P et Q sont toutes deux vraies.}',
    category: 'Opérations logiques',
    chapter: 1,
    difficulty: 'facile'
  },
  {
    id: 1004,
    front: 'Quelle est la disjonction de deux propositions P et Q ?',
    back: 'La disjonction P ∨ Q ("P ou Q") est vraie si au moins l\'une des propositions P ou Q est vraie.',
    frontLatex: '\\text{Quelle est la disjonction de deux propositions P et Q ?}',
    backLatex: '\\text{La disjonction } P \\vee Q \\text{ ("P ou Q") est vraie si au moins l\'une des propositions P ou Q est vraie.}',
    category: 'Opérations logiques',
    chapter: 1,
    difficulty: 'facile'
  },
  {
    id: 1005,
    front: 'Quelle est l\'implication P ⇒ Q ?',
    back: 'L\'implication P ⇒ Q ("P implique Q") est fausse seulement si P est vraie et Q est fausse.',
    frontLatex: '\\text{Quelle est l\'implication } P \\Rightarrow Q\\text{ ?}',
    backLatex: '\\text{L\'implication } P \\Rightarrow Q \\text{ ("P implique Q") est fausse seulement si P est vraie et Q est fausse.}',
    category: 'Opérations logiques',
    chapter: 1,
    difficulty: 'moyen'
  },
  {
    id: 1006,
    front: 'Quelle est l\'équivalence P ⇔ Q ?',
    back: 'L\'équivalence P ⇔ Q ("P équivaut à Q") est vraie si P et Q ont la même valeur de vérité.',
    frontLatex: '\\text{Quelle est l\'équivalence } P \\Leftrightarrow Q\\text{ ?}',
    backLatex: '\\text{L\'équivalence } P \\Leftrightarrow Q \\text{ ("P équivaut à Q") est vraie si P et Q ont la même valeur de vérité.}',
    category: 'Opérations logiques',
    chapter: 1,
    difficulty: 'moyen'
  },
  {
    id: 1007,
    front: 'Quelle est la contraposée de P ⇒ Q ?',
    back: 'La contraposée de P ⇒ Q est ¬Q ⇒ ¬P.',
    frontLatex: '\\text{Quelle est la contraposée de } P \\Rightarrow Q\\text{ ?}',
    backLatex: '\\text{La contraposée de } P \\Rightarrow Q \\text{ est } \\neg Q \\Rightarrow \\neg P\\text{.}',
    category: 'Propriétés des connecteurs',
    chapter: 1,
    difficulty: 'moyen'
  },
  {
    id: 1008,
    front: 'Qu\'est-ce qu\'une proposition quantifiée universellement ?',
    back: 'Une proposition de la forme "∀x ∈ E, P(x)" signifie "pour tout x dans E, P(x) est vraie".',
    frontLatex: '\\text{Qu\'est-ce qu\'une proposition quantifiée universellement ?}',
    backLatex: '\\text{Une proposition de la forme } \\forall x \\in E, P(x) \\text{ signifie "pour tout x dans E, P(x) est vraie".}',
    category: 'Quantificateurs',
    chapter: 1,
    difficulty: 'moyen'
  },
  {
    id: 1009,
    front: 'Qu\'est-ce qu\'une proposition quantifiée existentiellement ?',
    back: 'Une proposition de la forme "∃x ∈ E, P(x)" signifie "il existe au moins un x dans E tel que P(x) est vraie".',
    frontLatex: '\\text{Qu\'est-ce qu\'une proposition quantifiée existentiellement ?}',
    backLatex: '\\text{Une proposition de la forme } \\exists x \\in E, P(x) \\text{ signifie "il existe au moins un x dans E tel que P(x) est vraie".}',
    category: 'Quantificateurs',
    chapter: 1,
    difficulty: 'moyen'
  },
  {
    id: 1010,
    front: 'Qu\'est-ce qu\'une démonstration par l\'absurde ?',
    back: 'Une démonstration par l\'absurde consiste à supposer que la proposition à démontrer est fausse, puis à aboutir à une contradiction.',
    frontLatex: '\\text{Qu\'est-ce qu\'une démonstration par l\'absurde ?}',
    backLatex: '\\text{Une démonstration par l\'absurde consiste à supposer que la proposition à démontrer est fausse, puis à aboutir à une contradiction.}',
    category: 'Méthodes de démonstration',
    chapter: 1,
    difficulty: 'difficile'
  }
];

// Mapping pour tous les chapitres des maths appliquées
export const mathsAppliqueesFlashcards: Record<string, MathFlashcard[]> = {
  'elements-de-logique': elementsDeLogiqueFlashcards,
  // Ajouter les autres chapitres au besoin
};
