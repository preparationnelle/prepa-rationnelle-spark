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

// Chapitre 2: Ensembles et applications
export const ensemblesEtApplicationsFlashcards: MathFlashcard[] = [
  {
    id: 2001,
    front: 'Qu\'est-ce qu\'un ensemble ?',
    back: 'Un ensemble est une collection d\'objets appelés éléments. On note x ∈ E pour dire que x est un élément de E.',
    frontLatex: '\\text{Qu\'est-ce qu\'un ensemble ?}',
    backLatex: '\\text{Une collection d\'objets (éléments). Notation : } x \\in E',
    category: 'Définitions',
    chapter: 2,
    difficulty: 'facile'
  },
  {
    id: 2002,
    front: 'Qu\'est-ce qu\'un sous-ensemble ?',
    back: 'A est un sous-ensemble de B (noté A ⊂ B) si tout élément de A est aussi élément de B.',
    frontLatex: 'A \\subset B \\Leftrightarrow \\text{?}',
    backLatex: '\\forall x, x \\in A \\Rightarrow x \\in B',
    category: 'Définitions',
    chapter: 2,
    difficulty: 'facile'
  },
  {
    id: 2003,
    front: 'Qu\'est-ce que l\'union de deux ensembles ?',
    back: 'L\'union A ∪ B est l\'ensemble des éléments qui appartiennent à A ou à B (ou aux deux).',
    frontLatex: 'A \\cup B = \\text{?}',
    backLatex: 'A \\cup B = \\{x \\mid x \\in A \\text{ ou } x \\in B\\}',
    category: 'Opérations sur les ensembles',
    chapter: 2,
    difficulty: 'facile'
  },
  {
    id: 2004,
    front: 'Qu\'est-ce que l\'intersection de deux ensembles ?',
    back: 'L\'intersection A ∩ B est l\'ensemble des éléments qui appartiennent à la fois à A et à B.',
    frontLatex: 'A \\cap B = \\text{?}',
    backLatex: 'A \\cap B = \\{x \\mid x \\in A \\text{ et } x \\in B\\}',
    category: 'Opérations sur les ensembles',
    chapter: 2,
    difficulty: 'facile'
  },
  {
    id: 2005,
    front: 'Qu\'est-ce que le complémentaire d\'un ensemble ?',
    back: 'Le complémentaire de A dans E, noté A̅ ou Aᶜ, est l\'ensemble des éléments de E qui n\'appartiennent pas à A.',
    frontLatex: '\\overline{A} = \\text{?}',
    backLatex: '\\overline{A} = \\{x \\in E \\mid x \\notin A\\}',
    category: 'Opérations sur les ensembles',
    chapter: 2,
    difficulty: 'facile'
  },
  {
    id: 2006,
    front: 'Qu\'est-ce qu\'une application (ou fonction) ?',
    back: 'Une application f de E vers F associe à chaque élément x de E un unique élément f(x) de F.',
    frontLatex: 'f: E \\to F \\text{ application} \\Leftrightarrow \\text{?}',
    backLatex: '\\forall x \\in E, \\exists! y \\in F, y = f(x)',
    category: 'Applications',
    chapter: 2,
    difficulty: 'facile'
  },
  {
    id: 2007,
    front: 'Qu\'est-ce qu\'une application injective ?',
    back: 'Une application est injective si deux éléments distincts ont toujours des images distinctes.',
    frontLatex: 'f \\text{ injective} \\Leftrightarrow \\text{?}',
    backLatex: '\\forall x_1, x_2 \\in E, f(x_1) = f(x_2) \\Rightarrow x_1 = x_2',
    category: 'Propriétés des applications',
    chapter: 2,
    difficulty: 'moyen'
  },
  {
    id: 2008,
    front: 'Qu\'est-ce qu\'une application surjective ?',
    back: 'Une application f: E → F est surjective si tout élément de F admet au moins un antécédent dans E.',
    frontLatex: 'f \\text{ surjective} \\Leftrightarrow \\text{?}',
    backLatex: '\\forall y \\in F, \\exists x \\in E, f(x) = y',
    category: 'Propriétés des applications',
    chapter: 2,
    difficulty: 'moyen'
  },
  {
    id: 2009,
    front: 'Qu\'est-ce qu\'une application bijective ?',
    back: 'Une application est bijective si elle est à la fois injective et surjective.',
    frontLatex: 'f \\text{ bijective} \\Leftrightarrow \\text{?}',
    backLatex: 'f \\text{ injective et surjective}',
    category: 'Propriétés des applications',
    chapter: 2,
    difficulty: 'moyen'
  },
  {
    id: 2010,
    front: 'Qu\'est-ce que l\'image directe d\'un ensemble ?',
    back: 'L\'image directe de A par f, notée f(A), est l\'ensemble des images des éléments de A.',
    frontLatex: 'f(A) = \\text{?}',
    backLatex: 'f(A) = \\{f(x) \\mid x \\in A\\} = \\{y \\in F \\mid \\exists x \\in A, y = f(x)\\}',
    category: 'Images et antécédents',
    chapter: 2,
    difficulty: 'moyen'
  },
  {
    id: 2011,
    front: 'Qu\'est-ce que l\'image réciproque d\'un ensemble ?',
    back: 'L\'image réciproque de B par f, notée f⁻¹(B), est l\'ensemble des éléments dont l\'image appartient à B.',
    frontLatex: 'f^{-1}(B) = \\text{?}',
    backLatex: 'f^{-1}(B) = \\{x \\in E \\mid f(x) \\in B\\}',
    category: 'Images et antécédents',
    chapter: 2,
    difficulty: 'moyen'
  },
  {
    id: 2012,
    front: 'Qu\'est-ce que la composée de deux applications ?',
    back: 'La composée g∘f est l\'application qui à x associe g(f(x)).',
    frontLatex: '(g \\circ f)(x) = \\text{?}',
    backLatex: 'g(f(x))',
    category: 'Composition',
    chapter: 2,
    difficulty: 'moyen'
  },
  {
    id: 2013,
    front: 'Quelle est la condition pour qu\'une application soit inversible ?',
    back: 'Une application f: E → F est inversible si et seulement si elle est bijective.',
    frontLatex: 'f \\text{ inversible} \\Leftrightarrow \\text{?}',
    backLatex: 'f \\text{ bijective}',
    category: 'Application réciproque',
    chapter: 2,
    difficulty: 'moyen'
  },
  {
    id: 2014,
    front: 'Qu\'est-ce que le produit cartésien de deux ensembles ?',
    back: 'Le produit cartésien A × B est l\'ensemble des couples (a, b) où a ∈ A et b ∈ B.',
    frontLatex: 'A \\times B = \\text{?}',
    backLatex: 'A \\times B = \\{(a, b) \\mid a \\in A \\text{ et } b \\in B\\}',
    category: 'Produit cartésien',
    chapter: 2,
    difficulty: 'facile'
  },
  {
    id: 2015,
    front: 'Qu\'est-ce que la cardinalité d\'un ensemble fini ?',
    back: 'La cardinalité (ou cardinal) d\'un ensemble fini E, notée |E| ou card(E), est le nombre d\'éléments de E.',
    frontLatex: '|E| = \\text{?}',
    backLatex: '\\text{Nombre d\'éléments de } E',
    category: 'Cardinalité',
    chapter: 2,
    difficulty: 'facile'
  }
];

// Chapitre 3: Sommes, produits & coefficients binomiaux
export const sommesProduitsBinomiauxFlashcards: MathFlashcard[] = [
  {
    id: 3001,
    front: 'Qu\'est-ce qu\'une somme indexée ?',
    back: 'Une somme indexée ∑(i=m à n) aᵢ est la somme des termes aᵢ pour i variant de m à n.',
    frontLatex: '\\sum_{i=m}^{n} a_i = \\text{?}',
    backLatex: 'a_m + a_{m+1} + \\cdots + a_n',
    category: 'Définitions',
    chapter: 3,
    difficulty: 'facile'
  },
  {
    id: 3002,
    front: 'Quelle est la formule de la somme des n premiers entiers ?',
    back: 'La somme 1 + 2 + ... + n = n(n+1)/2',
    frontLatex: '\\sum_{k=1}^{n} k = \\text{?}',
    backLatex: '\\frac{n(n+1)}{2}',
    category: 'Formules classiques',
    chapter: 3,
    difficulty: 'facile'
  },
  {
    id: 3003,
    front: 'Quelle est la somme des n premiers carrés ?',
    back: 'La somme 1² + 2² + ... + n² = n(n+1)(2n+1)/6',
    frontLatex: '\\sum_{k=1}^{n} k^2 = \\text{?}',
    backLatex: '\\frac{n(n+1)(2n+1)}{6}',
    category: 'Formules classiques',
    chapter: 3,
    difficulty: 'moyen'
  },
  {
    id: 3004,
    front: 'Qu\'est-ce qu\'une suite géométrique ?',
    back: 'Une suite géométrique de premier terme a et de raison q a pour terme général aₙ = a·qⁿ.',
    frontLatex: 'u_n = \\text{?}',
    backLatex: 'u_n = a \\cdot q^n',
    category: 'Suites géométriques',
    chapter: 3,
    difficulty: 'facile'
  },
  {
    id: 3005,
    front: 'Quelle est la somme d\'une suite géométrique ?',
    back: 'Pour q ≠ 1, la somme 1 + q + q² + ... + qⁿ = (1 - qⁿ⁺¹)/(1 - q)',
    frontLatex: '\\sum_{k=0}^{n} q^k = \\text{?}',
    backLatex: '\\frac{1 - q^{n+1}}{1 - q} \\text{ si } q \\neq 1',
    category: 'Suites géométriques',
    chapter: 3,
    difficulty: 'moyen'
  },
  {
    id: 3006,
    front: 'Qu\'est-ce qu\'un coefficient binomial ?',
    back: 'Le coefficient binomial C(n,k) ou (n k) est le nombre de façons de choisir k éléments parmi n.',
    frontLatex: '\\binom{n}{k} = \\text{?}',
    backLatex: '\\frac{n!}{k!(n-k)!}',
    category: 'Coefficients binomiaux',
    chapter: 3,
    difficulty: 'facile'
  },
  {
    id: 3007,
    front: 'Formule du binôme de Newton',
    back: '(a + b)ⁿ est égal à la somme des C(n,k)·aⁿ⁻ᵏ·bᵏ pour k de 0 à n.',
    frontLatex: '(a + b)^n = \\text{?}',
    backLatex: '\\sum_{k=0}^{n} \\binom{n}{k} a^{n-k} b^k',
    category: 'Formule du binôme',
    chapter: 3,
    difficulty: 'moyen'
  },
  {
    id: 3008,
    front: 'Quelle est la formule de Pascal ?',
    back: 'C(n+1, k) = C(n, k-1) + C(n, k)',
    frontLatex: '\\binom{n+1}{k} = \\text{?}',
    backLatex: '\\binom{n}{k-1} + \\binom{n}{k}',
    category: 'Relations',
    chapter: 3,
    difficulty: 'moyen'
  },
  {
    id: 3009,
    front: 'Qu\'est-ce qu\'un produit indexé ?',
    back: 'Un produit indexé ∏(i=m à n) aᵢ est le produit des termes aᵢ pour i variant de m à n.',
    frontLatex: '\\prod_{i=m}^{n} a_i = \\text{?}',
    backLatex: 'a_m \\cdot a_{m+1} \\cdot \\ldots \\cdot a_n',
    category: 'Définitions',
    chapter: 3,
    difficulty: 'facile'
  },
  {
    id: 3010,
    front: 'Qu\'est-ce que la factorielle ?',
    back: 'La factorielle de n, notée n!, est le produit de tous les entiers de 1 à n. Par convention, 0! = 1.',
    frontLatex: 'n! = \\text{?}',
    backLatex: '1 \\cdot 2 \\cdot 3 \\cdot \\ldots \\cdot n',
    category: 'Factorielle',
    chapter: 3,
    difficulty: 'facile'
  }
];

// Chapitre 4: Suites numériques
export const suitesNumeriquesFlashcards: MathFlashcard[] = [
  {
    id: 4001,
    front: 'Qu\'est-ce qu\'une suite numérique ?',
    back: 'Une suite numérique est une fonction de ℕ (ou ℕ*) dans ℝ qui associe à chaque entier n un nombre réel uₙ.',
    frontLatex: 'u: \\mathbb{N} \\to \\mathbb{R}',
    backLatex: 'n \\mapsto u_n',
    category: 'Définitions',
    chapter: 4,
    difficulty: 'facile'
  },
  {
    id: 4002,
    front: 'Qu\'est-ce qu\'une suite croissante ?',
    back: 'Une suite (uₙ) est croissante si pour tout n, uₙ₊₁ ≥ uₙ.',
    frontLatex: '(u_n) \\text{ croissante} \\Leftrightarrow \\text{?}',
    backLatex: '\\forall n, u_{n+1} \\geq u_n',
    category: 'Monotonie',
    chapter: 4,
    difficulty: 'facile'
  },
  {
    id: 4003,
    front: 'Qu\'est-ce qu\'une suite majorée ?',
    back: 'Une suite (uₙ) est majorée s\'il existe M tel que pour tout n, uₙ ≤ M.',
    frontLatex: '(u_n) \\text{ majorée} \\Leftrightarrow \\text{?}',
    backLatex: '\\exists M \\in \\mathbb{R}, \\forall n, u_n \\leq M',
    category: 'Bornage',
    chapter: 4,
    difficulty: 'facile'
  },
  {
    id: 4004,
    front: 'Qu\'est-ce qu\'une suite convergente ?',
    back: 'Une suite (uₙ) converge vers ℓ si pour tout ε > 0, il existe N tel que pour n ≥ N, |uₙ - ℓ| < ε.',
    frontLatex: '\\lim_{n \\to \\infty} u_n = \\ell \\Leftrightarrow \\text{?}',
    backLatex: '\\forall \\varepsilon > 0, \\exists N, \\forall n \\geq N: |u_n - \\ell| < \\varepsilon',
    category: 'Convergence',
    chapter: 4,
    difficulty: 'moyen'
  },
  {
    id: 4005,
    front: 'Théorème de la limite monotone',
    back: 'Toute suite croissante et majorée converge vers une limite finie.',
    frontLatex: '(u_n) \\text{ croissante et majorée} \\Rightarrow \\text{?}',
    backLatex: '(u_n) \\text{ converge}',
    category: 'Théorèmes',
    chapter: 4,
    difficulty: 'moyen'
  },
  {
    id: 4006,
    front: 'Qu\'est-ce qu\'une suite arithmétique ?',
    back: 'Une suite est arithmétique s\'il existe r tel que uₙ₊₁ = uₙ + r pour tout n.',
    frontLatex: 'u_{n+1} = \\text{?}',
    backLatex: 'u_n + r',
    category: 'Suites particulières',
    chapter: 4,
    difficulty: 'facile'
  },
  {
    id: 4007,
    front: 'Terme général d\'une suite arithmétique',
    back: 'Pour une suite arithmétique de premier terme u₀ et de raison r, uₙ = u₀ + nr.',
    frontLatex: 'u_n = \\text{?}',
    backLatex: 'u_0 + nr',
    category: 'Suites particulières',
    chapter: 4,
    difficulty: 'facile'
  },
  {
    id: 4008,
    front: 'Qu\'est-ce qu\'une suite adjacente ?',
    back: 'Deux suites (uₙ) et (vₙ) sont adjacentes si l\'une est croissante, l\'autre décroissante, et leur différence tend vers 0.',
    frontLatex: '\\text{Suites adjacentes} \\Leftrightarrow \\text{?}',
    backLatex: '(u_n) \\nearrow, (v_n) \\searrow, \\lim(v_n - u_n) = 0',
    category: 'Suites adjacentes',
    chapter: 4,
    difficulty: 'difficile'
  },
  {
    id: 4009,
    front: 'Théorème des suites adjacentes',
    back: 'Si deux suites sont adjacentes, elles convergent vers la même limite.',
    frontLatex: '(u_n), (v_n) \\text{ adjacentes} \\Rightarrow \\text{?}',
    backLatex: '\\lim u_n = \\lim v_n',
    category: 'Théorèmes',
    chapter: 4,
    difficulty: 'moyen'
  },
  {
    id: 4010,
    front: 'Qu\'est-ce qu\'une suite de Cauchy ?',
    back: 'Une suite (uₙ) est de Cauchy si pour tout ε > 0, il existe N tel que pour tous m,n ≥ N, |uₘ - uₙ| < ε.',
    frontLatex: '(u_n) \\text{ de Cauchy} \\Leftrightarrow \\text{?}',
    backLatex: '\\forall \\varepsilon > 0, \\exists N, \\forall m,n \\geq N: |u_m - u_n| < \\varepsilon',
    category: 'Suites de Cauchy',
    chapter: 4,
    difficulty: 'difficile'
  }
];

// Chapitre 5: Fonctions d'une variable réelle
export const fonctionsVariableReelleFlashcards: MathFlashcard[] = [
  {
    id: 5001,
    front: 'Qu\'est-ce qu\'une fonction continue en un point ?',
    back: 'f est continue en a si lim(x→a) f(x) = f(a).',
    frontLatex: 'f \\text{ continue en } a \\Leftrightarrow \\text{?}',
    backLatex: '\\lim_{x \\to a} f(x) = f(a)',
    category: 'Continuité',
    chapter: 5,
    difficulty: 'facile'
  },
  {
    id: 5002,
    front: 'Théorème des valeurs intermédiaires',
    back: 'Si f est continue sur [a,b] et si k est entre f(a) et f(b), alors il existe c dans [a,b] tel que f(c) = k.',
    frontLatex: '\\text{TVI} : \\text{?}',
    backLatex: 'f \\text{ continue sur } [a,b] \\Rightarrow \\forall k \\in [f(a),f(b)], \\exists c: f(c) = k',
    category: 'Théorèmes',
    chapter: 5,
    difficulty: 'moyen'
  },
  {
    id: 5003,
    front: 'Qu\'est-ce qu\'une fonction croissante ?',
    back: 'f est croissante si pour tous x₁ < x₂, f(x₁) ≤ f(x₂).',
    frontLatex: 'f \\nearrow \\Leftrightarrow \\text{?}',
    backLatex: '\\forall x_1 < x_2, f(x_1) \\leq f(x_2)',
    category: 'Monotonie',
    chapter: 5,
    difficulty: 'facile'
  },
  {
    id: 5004,
    front: 'Qu\'est-ce qu\'une fonction paire ?',
    back: 'f est paire si f(-x) = f(x) pour tout x dans le domaine.',
    frontLatex: 'f \\text{ paire} \\Leftrightarrow \\text{?}',
    backLatex: '\\forall x, f(-x) = f(x)',
    category: 'Parité',
    chapter: 5,
    difficulty: 'facile'
  },
  {
    id: 5005,
    front: 'Qu\'est-ce qu\'une fonction impaire ?',
    back: 'f est impaire si f(-x) = -f(x) pour tout x dans le domaine.',
    frontLatex: 'f \\text{ impaire} \\Leftrightarrow \\text{?}',
    backLatex: '\\forall x, f(-x) = -f(x)',
    category: 'Parité',
    chapter: 5,
    difficulty: 'facile'
  },
  {
    id: 5006,
    front: 'Qu\'est-ce qu\'une fonction périodique ?',
    back: 'f est périodique de période T si f(x+T) = f(x) pour tout x.',
    frontLatex: 'f \\text{ périodique} \\Leftrightarrow \\text{?}',
    backLatex: '\\exists T > 0, \\forall x: f(x+T) = f(x)',
    category: 'Périodicité',
    chapter: 5,
    difficulty: 'facile'
  },
  {
    id: 5007,
    front: 'Théorème de la bijection',
    back: 'Une fonction continue et strictement monotone sur un intervalle I réalise une bijection de I sur f(I).',
    frontLatex: '\\text{Théorème de la bijection} : \\text{?}',
    backLatex: 'f \\text{ continue et strictement monotone} \\Rightarrow f \\text{ bijective}',
    category: 'Théorèmes',
    chapter: 5,
    difficulty: 'moyen'
  },
  {
    id: 5008,
    front: 'Qu\'est-ce qu\'un extremum local ?',
    back: 'f admet un maximum local en a s\'il existe un voisinage V de a tel que f(x) ≤ f(a) pour tout x dans V.',
    frontLatex: 'a \\text{ maximum local} \\Leftrightarrow \\text{?}',
    backLatex: '\\exists V \\text{ voisinage de } a, \\forall x \\in V: f(x) \\leq f(a)',
    category: 'Extremums',
    chapter: 5,
    difficulty: 'moyen'
  },
  {
    id: 5009,
    front: 'Qu\'est-ce qu\'une asymptote verticale ?',
    back: 'La droite x = a est une asymptote verticale si lim(x→a) f(x) = ±∞.',
    frontLatex: 'x = a \\text{ asymptote verticale} \\Leftrightarrow \\text{?}',
    backLatex: '\\lim_{x \\to a} f(x) = \\pm\\infty',
    category: 'Asymptotes',
    chapter: 5,
    difficulty: 'facile'
  },
  {
    id: 5010,
    front: 'Qu\'est-ce qu\'une asymptote horizontale ?',
    back: 'La droite y = L est une asymptote horizontale si lim(x→±∞) f(x) = L.',
    frontLatex: 'y = L \\text{ asymptote horizontale} \\Leftrightarrow \\text{?}',
    backLatex: '\\lim_{x \\to \\pm\\infty} f(x) = L',
    category: 'Asymptotes',
    chapter: 5,
    difficulty: 'facile'
  }
];

// Chapitre 6: Dérivation
export const derivationFlashcards: MathFlashcard[] = [
  {
    id: 6001,
    front: 'Qu\'est-ce que la dérivée d\'une fonction en un point ?',
    back: 'La dérivée f\'(a) est la limite du taux d\'accroissement (f(a+h) - f(a))/h quand h tend vers 0.',
    frontLatex: 'f\'(a) = \\text{?}',
    backLatex: '\\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}',
    category: 'Définitions',
    chapter: 6,
    difficulty: 'facile'
  },
  {
    id: 6002,
    front: 'Dérivée d\'une somme',
    back: '(u + v)\' = u\' + v\'',
    frontLatex: '(u + v)\' = \\text{?}',
    backLatex: 'u\' + v\'',
    category: 'Règles de dérivation',
    chapter: 6,
    difficulty: 'facile'
  },
  {
    id: 6003,
    front: 'Dérivée d\'un produit',
    back: '(uv)\' = u\'v + uv\'',
    frontLatex: '(uv)\' = \\text{?}',
    backLatex: 'u\'v + uv\'',
    category: 'Règles de dérivation',
    chapter: 6,
    difficulty: 'facile'
  },
  {
    id: 6004,
    front: 'Dérivée d\'un quotient',
    back: '(u/v)\' = (u\'v - uv\')/v²',
    frontLatex: '\\left(\\frac{u}{v}\\right)\' = \\text{?}',
    backLatex: '\\frac{u\'v - uv\'}{v^2}',
    category: 'Règles de dérivation',
    chapter: 6,
    difficulty: 'moyen'
  },
  {
    id: 6005,
    front: 'Dérivée d\'une composée',
    back: '(f∘g)\' = (f\'∘g) × g\'',
    frontLatex: '(f \\circ g)\' = \\text{?}',
    backLatex: '(f\' \\circ g) \\times g\'',
    category: 'Règles de dérivation',
    chapter: 6,
    difficulty: 'moyen'
  },
  {
    id: 6006,
    front: 'Dérivée de xⁿ',
    back: '(xⁿ)\' = nxⁿ⁻¹',
    frontLatex: '(x^n)\' = \\text{?}',
    backLatex: 'nx^{n-1}',
    category: 'Dérivées usuelles',
    chapter: 6,
    difficulty: 'facile'
  },
  {
    id: 6007,
    front: 'Dérivée de eˣ',
    back: '(eˣ)\' = eˣ',
    frontLatex: '(e^x)\' = \\text{?}',
    backLatex: 'e^x',
    category: 'Dérivées usuelles',
    chapter: 6,
    difficulty: 'facile'
  },
  {
    id: 6008,
    front: 'Dérivée de ln(x)',
    back: '(ln x)\' = 1/x',
    frontLatex: '(\\ln x)\' = \\text{?}',
    backLatex: '\\frac{1}{x}',
    category: 'Dérivées usuelles',
    chapter: 6,
    difficulty: 'facile'
  },
  {
    id: 6009,
    front: 'Théorème de Rolle',
    back: 'Si f est continue sur [a,b], dérivable sur ]a,b[ et f(a) = f(b), alors il existe c dans ]a,b[ tel que f\'(c) = 0.',
    frontLatex: '\\text{Rolle} : \\text{?}',
    backLatex: 'f(a) = f(b) \\Rightarrow \\exists c \\in ]a,b[: f\'(c) = 0',
    category: 'Théorèmes',
    chapter: 6,
    difficulty: 'moyen'
  },
  {
    id: 6010,
    front: 'Théorème des accroissements finis',
    back: 'Si f est continue sur [a,b] et dérivable sur ]a,b[, il existe c dans ]a,b[ tel que f(b) - f(a) = f\'(c)(b - a).',
    frontLatex: '\\text{TAF} : \\text{?}',
    backLatex: '\\exists c \\in ]a,b[: f(b) - f(a) = f\'(c)(b - a)',
    category: 'Théorèmes',
    chapter: 6,
    difficulty: 'moyen'
  },
  {
    id: 6011,
    front: 'Condition nécessaire d\'extremum',
    back: 'Si f admet un extremum local en a et est dérivable en a, alors f\'(a) = 0.',
    frontLatex: 'a \\text{ extremum local} \\Rightarrow \\text{?}',
    backLatex: 'f\'(a) = 0',
    category: 'Extremums',
    chapter: 6,
    difficulty: 'moyen'
  }
];

// Chapitre 7: Intégration sur un segment
export const integrationSegmentFlashcards: MathFlashcard[] = [
  {
    id: 7001,
    front: 'Qu\'est-ce qu\'une primitive ?',
    back: 'F est une primitive de f si F est dérivable et F\' = f.',
    frontLatex: 'F \\text{ primitive de } f \\Leftrightarrow \\text{?}',
    backLatex: 'F\' = f',
    category: 'Définitions',
    chapter: 7,
    difficulty: 'facile'
  },
  {
    id: 7002,
    front: 'Théorème fondamental de l\'analyse',
    back: 'Si f est continue sur [a,b], alors ∫ₐᵇ f(x)dx = F(b) - F(a) où F est une primitive de f.',
    frontLatex: '\\int_a^b f(x)dx = \\text{?}',
    backLatex: 'F(b) - F(a) \\text{ où } F\' = f',
    category: 'Théorèmes',
    chapter: 7,
    difficulty: 'facile'
  },
  {
    id: 7003,
    front: 'Linéarité de l\'intégrale',
    back: '∫(αf + βg) = α∫f + β∫g',
    frontLatex: '\\int (\\alpha f + \\beta g) = \\text{?}',
    backLatex: '\\alpha \\int f + \\beta \\int g',
    category: 'Propriétés',
    chapter: 7,
    difficulty: 'facile'
  },
  {
    id: 7004,
    front: 'Relation de Chasles',
    back: '∫ₐᵇ f + ∫ᵇᶜ f = ∫ₐᶜ f',
    frontLatex: '\\int_a^b f + \\int_b^c f = \\text{?}',
    backLatex: '\\int_a^c f',
    category: 'Propriétés',
    chapter: 7,
    difficulty: 'facile'
  },
  {
    id: 7005,
    front: 'Intégration par parties',
    back: '∫ᵃᵇ u\'v = [uv]ₐᵇ - ∫ᵃᵇ uv\'',
    frontLatex: '\\int_a^b u\'v = \\text{?}',
    backLatex: '[uv]_a^b - \\int_a^b uv\'',
    category: 'Méthodes d\'intégration',
    chapter: 7,
    difficulty: 'moyen'
  },
  {
    id: 7006,
    front: 'Changement de variable',
    back: '∫ᵃᵇ f(φ(t))φ\'(t)dt = ∫φ(a)φ(b) f(u)du',
    frontLatex: '\\int_a^b f(\\varphi(t))\\varphi\'(t)dt = \\text{?}',
    backLatex: '\\int_{\\varphi(a)}^{\\varphi(b)} f(u)du',
    category: 'Méthodes d\'intégration',
    chapter: 7,
    difficulty: 'difficile'
  },
  {
    id: 7007,
    front: 'Primitive de xⁿ (n ≠ -1)',
    back: '∫xⁿ dx = xⁿ⁺¹/(n+1) + C',
    frontLatex: '\\int x^n dx = \\text{?}',
    backLatex: '\\frac{x^{n+1}}{n+1} + C',
    category: 'Primitives usuelles',
    chapter: 7,
    difficulty: 'facile'
  },
  {
    id: 7008,
    front: 'Primitive de 1/x',
    back: '∫(1/x) dx = ln|x| + C',
    frontLatex: '\\int \\frac{1}{x} dx = \\text{?}',
    backLatex: '\\ln|x| + C',
    category: 'Primitives usuelles',
    chapter: 7,
    difficulty: 'facile'
  },
  {
    id: 7009,
    front: 'Primitive de eˣ',
    back: '∫eˣ dx = eˣ + C',
    frontLatex: '\\int e^x dx = \\text{?}',
    backLatex: 'e^x + C',
    category: 'Primitives usuelles',
    chapter: 7,
    difficulty: 'facile'
  },
  {
    id: 7010,
    front: 'Inégalité de la moyenne',
    back: 'Si m ≤ f ≤ M sur [a,b], alors m(b-a) ≤ ∫ₐᵇ f ≤ M(b-a).',
    frontLatex: 'm \\leq f \\leq M \\Rightarrow \\text{?}',
    backLatex: 'm(b-a) \\leq \\int_a^b f \\leq M(b-a)',
    category: 'Inégalités',
    chapter: 7,
    difficulty: 'moyen'
  }
];

// Chapitre 8: Polynômes
export const polynomesFlashcards: MathFlashcard[] = [
  {
    id: 8001,
    front: 'Qu\'est-ce qu\'un polynôme ?',
    back: 'Un polynôme est une expression de la forme P(X) = aₙXⁿ + ... + a₁X + a₀ où les aᵢ sont des coefficients.',
    frontLatex: 'P(X) = \\text{?}',
    backLatex: '\\sum_{k=0}^{n} a_k X^k',
    category: 'Définitions',
    chapter: 8,
    difficulty: 'facile'
  },
  {
    id: 8002,
    front: 'Qu\'est-ce que le degré d\'un polynôme ?',
    back: 'Le degré d\'un polynôme non nul est le plus grand entier k tel que aₖ ≠ 0.',
    frontLatex: '\\deg(P) = \\text{?}',
    backLatex: '\\max\\{k \\mid a_k \\neq 0\\}',
    category: 'Degré',
    chapter: 8,
    difficulty: 'facile'
  },
  {
    id: 8003,
    front: 'Degré d\'un produit de polynômes',
    back: 'deg(PQ) = deg(P) + deg(Q)',
    frontLatex: '\\deg(PQ) = \\text{?}',
    backLatex: '\\deg(P) + \\deg(Q)',
    category: 'Degré',
    chapter: 8,
    difficulty: 'facile'
  },
  {
    id: 8004,
    front: 'Qu\'est-ce qu\'une racine d\'un polynôme ?',
    back: 'a est une racine de P si P(a) = 0.',
    frontLatex: 'a \\text{ racine de } P \\Leftrightarrow \\text{?}',
    backLatex: 'P(a) = 0',
    category: 'Racines',
    chapter: 8,
    difficulty: 'facile'
  },
  {
    id: 8005,
    front: 'Théorème de factorisation',
    back: 'Si a est racine de P, alors P(X) = (X - a)Q(X) où Q est un polynôme de degré deg(P) - 1.',
    frontLatex: 'a \\text{ racine} \\Rightarrow P(X) = \\text{?}',
    backLatex: '(X - a)Q(X)',
    category: 'Factorisation',
    chapter: 8,
    difficulty: 'moyen'
  },
  {
    id: 8006,
    front: 'Qu\'est-ce que la division euclidienne de polynômes ?',
    back: 'Pour deux polynômes A et B (B ≠ 0), il existe uniques Q et R tels que A = BQ + R avec deg(R) < deg(B).',
    frontLatex: 'A = \\text{?}',
    backLatex: 'BQ + R \\text{ avec } \\deg(R) < \\deg(B)',
    category: 'Division euclidienne',
    chapter: 8,
    difficulty: 'moyen'
  },
  {
    id: 8007,
    front: 'Théorème de d\'Alembert-Gauss',
    back: 'Tout polynôme non constant à coefficients complexes admet au moins une racine complexe.',
    frontLatex: '\\text{d\'Alembert-Gauss} : \\text{?}',
    backLatex: 'P \\in \\mathbb{C}[X], \\deg(P) \\geq 1 \\Rightarrow \\exists z \\in \\mathbb{C}: P(z) = 0',
    category: 'Théorèmes',
    chapter: 8,
    difficulty: 'moyen'
  },
  {
    id: 8008,
    front: 'Qu\'est-ce que la multiplicité d\'une racine ?',
    back: 'a est racine de multiplicité k de P si P(X) = (X - a)ᵏQ(X) avec Q(a) ≠ 0.',
    frontLatex: 'a \\text{ racine mult. } k \\Leftrightarrow \\text{?}',
    backLatex: 'P(X) = (X - a)^k Q(X), Q(a) \\neq 0',
    category: 'Multiplicité',
    chapter: 8,
    difficulty: 'moyen'
  },
  {
    id: 8009,
    front: 'Formules de Viète (polynôme de degré 2)',
    back: 'Pour P(X) = X² - SX + P avec racines x₁ et x₂ : S = x₁ + x₂ et P = x₁x₂',
    frontLatex: 'x_1 + x_2 = \\text{?}, x_1 x_2 = \\text{?}',
    backLatex: 'x_1 + x_2 = S, x_1 x_2 = P',
    category: 'Relations coefficients-racines',
    chapter: 8,
    difficulty: 'moyen'
  },
  {
    id: 8010,
    front: 'Dérivée d\'un polynôme',
    back: 'Si P(X) = aₙXⁿ + ... + a₁X + a₀, alors P\'(X) = naₙXⁿ⁻¹ + ... + 2a₂X + a₁',
    frontLatex: 'P\'(X) = \\text{?}',
    backLatex: '\\sum_{k=1}^{n} k a_k X^{k-1}',
    category: 'Dérivation',
    chapter: 8,
    difficulty: 'facile'
  }
];

// Chapitre 9: Matrices & espaces vectoriels
export const matricesEspacesVectorielsFlashcards: MathFlashcard[] = [
  {
    id: 9001,
    front: 'Qu\'est-ce qu\'une matrice ?',
    back: 'Une matrice est un tableau rectangulaire de nombres disposés en lignes et colonnes.',
    frontLatex: 'M \\in \\mathcal{M}_{n,p}(\\mathbb{K}) = \\text{?}',
    backLatex: '(a_{ij})_{1 \\leq i \\leq n, 1 \\leq j \\leq p}',
    category: 'Définitions',
    chapter: 9,
    difficulty: 'facile'
  },
  {
    id: 9002,
    front: 'Qu\'est-ce que la transposée d\'une matrice ?',
    back: 'La transposée de A, notée ᵗA ou Aᵀ, est obtenue en échangeant lignes et colonnes.',
    frontLatex: '(^t\\!A)_{ij} = \\text{?}',
    backLatex: 'A_{ji}',
    category: 'Opérations matricielles',
    chapter: 9,
    difficulty: 'facile'
  },
  {
    id: 9003,
    front: 'Produit de deux matrices',
    back: 'Le coefficient (i,j) du produit AB est la somme des produits des éléments de la ligne i de A par ceux de la colonne j de B.',
    frontLatex: '(AB)_{ij} = \\text{?}',
    backLatex: '\\sum_{k} A_{ik} B_{kj}',
    category: 'Opérations matricielles',
    chapter: 9,
    difficulty: 'moyen'
  },
  {
    id: 9004,
    front: 'Qu\'est-ce qu\'une matrice inversible ?',
    back: 'Une matrice carrée A est inversible s\'il existe B telle que AB = BA = I.',
    frontLatex: 'A \\text{ inversible} \\Leftrightarrow \\text{?}',
    backLatex: '\\exists B: AB = BA = I',
    category: 'Inversibilité',
    chapter: 9,
    difficulty: 'facile'
  },
  {
    id: 9005,
    front: 'Qu\'est-ce qu\'un espace vectoriel ?',
    back: 'Un espace vectoriel sur 𝕂 est un ensemble E muni d\'une addition et d\'une multiplication par un scalaire satisfaisant certaines propriétés.',
    frontLatex: '(E, +, \\cdot) \\text{ espace vectoriel} \\Leftrightarrow \\text{?}',
    backLatex: '\\text{Propriétés d\'addition et multiplication scalaire}',
    category: 'Espaces vectoriels',
    chapter: 9,
    difficulty: 'moyen'
  },
  {
    id: 9006,
    front: 'Qu\'est-ce qu\'une famille libre ?',
    back: 'Une famille (v₁,...,vₙ) est libre si la seule combinaison linéaire nulle est triviale.',
    frontLatex: '(v_1,\\ldots,v_n) \\text{ libre} \\Leftrightarrow \\text{?}',
    backLatex: '\\sum \\lambda_i v_i = 0 \\Rightarrow \\forall i, \\lambda_i = 0',
    category: 'Indépendance linéaire',
    chapter: 9,
    difficulty: 'moyen'
  },
  {
    id: 9007,
    front: 'Qu\'est-ce qu\'une base ?',
    back: 'Une base est une famille libre et génératrice.',
    frontLatex: '\\mathcal{B} \\text{ base} \\Leftrightarrow \\text{?}',
    backLatex: '\\mathcal{B} \\text{ libre et génératrice}',
    category: 'Bases',
    chapter: 9,
    difficulty: 'facile'
  },
  {
    id: 9008,
    front: 'Qu\'est-ce que la dimension d\'un espace vectoriel ?',
    back: 'La dimension est le nombre d\'éléments d\'une base (toutes les bases ont le même cardinal).',
    frontLatex: '\\dim(E) = \\text{?}',
    backLatex: '|\\mathcal{B}| \\text{ où } \\mathcal{B} \\text{ est une base}',
    category: 'Dimension',
    chapter: 9,
    difficulty: 'facile'
  },
  {
    id: 9009,
    front: 'Rang d\'une matrice',
    back: 'Le rang d\'une matrice est la dimension du sous-espace vectoriel engendré par ses colonnes (ou lignes).',
    frontLatex: '\\text{rg}(A) = \\text{?}',
    backLatex: '\\dim(\\text{Vect(colonnes de } A))',
    category: 'Rang',
    chapter: 9,
    difficulty: 'moyen'
  },
  {
    id: 9010,
    front: 'Qu\'est-ce que le déterminant ?',
    back: 'Le déterminant est une forme n-linéaire alternée sur les colonnes, égale à 1 sur la matrice identité.',
    frontLatex: '\\det: \\mathcal{M}_n(\\mathbb{K}) \\to \\mathbb{K}',
    backLatex: '\\text{n-linéaire, alternée, } \\det(I) = 1',
    category: 'Déterminant',
    chapter: 9,
    difficulty: 'difficile'
  }
];

// Chapitre 10: Probabilités & conditionnement
export const probabilitesConditionnementFlashcards: MathFlashcard[] = [
  {
    id: 10001,
    front: 'Qu\'est-ce qu\'un espace probabilisé ?',
    back: 'Un triplet (Ω, 𝒜, ℙ) où Ω est l\'univers, 𝒜 une tribu et ℙ une probabilité.',
    frontLatex: '(\\Omega, \\mathcal{A}, \\mathbb{P}) = \\text{?}',
    backLatex: '\\text{Univers, tribu, probabilité}',
    category: 'Définitions',
    chapter: 10,
    difficulty: 'moyen'
  },
  {
    id: 10002,
    front: 'Axiomes de Kolmogorov (probabilité)',
    back: 'ℙ(Ω) = 1, ℙ(A) ≥ 0 pour tout A, et ℙ est σ-additive.',
    frontLatex: '\\mathbb{P} \\text{ probabilité} \\Leftrightarrow \\text{?}',
    backLatex: '\\mathbb{P}(\\Omega) = 1, \\mathbb{P}(A) \\geq 0, \\sigma\\text{-additive}',
    category: 'Axiomes',
    chapter: 10,
    difficulty: 'moyen'
  },
  {
    id: 10003,
    front: 'Formule de la probabilité totale',
    back: 'Si (Aᵢ) est une partition de Ω, alors ℙ(B) = ∑ ℙ(B ∩ Aᵢ).',
    frontLatex: '\\mathbb{P}(B) = \\text{?}',
    backLatex: '\\sum_i \\mathbb{P}(B \\cap A_i)',
    category: 'Formules',
    chapter: 10,
    difficulty: 'moyen'
  },
  {
    id: 10004,
    front: 'Qu\'est-ce que la probabilité conditionnelle ?',
    back: 'ℙ(A|B) = ℙ(A ∩ B) / ℙ(B) si ℙ(B) > 0.',
    frontLatex: '\\mathbb{P}(A|B) = \\text{?}',
    backLatex: '\\frac{\\mathbb{P}(A \\cap B)}{\\mathbb{P}(B)}',
    category: 'Conditionnement',
    chapter: 10,
    difficulty: 'facile'
  },
  {
    id: 10005,
    front: 'Formule des probabilités composées',
    back: 'ℙ(A ∩ B) = ℙ(A) × ℙ(B|A) = ℙ(B) × ℙ(A|B)',
    frontLatex: '\\mathbb{P}(A \\cap B) = \\text{?}',
    backLatex: '\\mathbb{P}(A) \\times \\mathbb{P}(B|A)',
    category: 'Formules',
    chapter: 10,
    difficulty: 'facile'
  },
  {
    id: 10006,
    front: 'Formule de Bayes',
    back: 'ℙ(A|B) = ℙ(B|A) × ℙ(A) / ℙ(B)',
    frontLatex: '\\mathbb{P}(A|B) = \\text{?}',
    backLatex: '\\frac{\\mathbb{P}(B|A) \\times \\mathbb{P}(A)}{\\mathbb{P}(B)}',
    category: 'Formule de Bayes',
    chapter: 10,
    difficulty: 'moyen'
  },
  {
    id: 10007,
    front: 'Qu\'est-ce que l\'indépendance de deux événements ?',
    back: 'A et B sont indépendants si ℙ(A ∩ B) = ℙ(A) × ℙ(B).',
    frontLatex: 'A, B \\text{ indépendants} \\Leftrightarrow \\text{?}',
    backLatex: '\\mathbb{P}(A \\cap B) = \\mathbb{P}(A) \\times \\mathbb{P}(B)',
    category: 'Indépendance',
    chapter: 10,
    difficulty: 'facile'
  },
  {
    id: 10008,
    front: 'Qu\'est-ce qu\'une variable aléatoire discrète ?',
    back: 'Une variable aléatoire X est discrète si X(Ω) est fini ou dénombrable.',
    frontLatex: 'X \\text{ discrète} \\Leftrightarrow \\text{?}',
    backLatex: 'X(\\Omega) \\text{ fini ou dénombrable}',
    category: 'Variables aléatoires',
    chapter: 10,
    difficulty: 'facile'
  },
  {
    id: 10009,
    front: 'Qu\'est-ce que l\'espérance d\'une variable aléatoire ?',
    back: 'L\'espérance 𝔼(X) = ∑ₓ x·ℙ(X = x) (si la somme converge absolument).',
    frontLatex: '\\mathbb{E}(X) = \\text{?}',
    backLatex: '\\sum_x x \\cdot \\mathbb{P}(X = x)',
    category: 'Espérance',
    chapter: 10,
    difficulty: 'facile'
  },
  {
    id: 10010,
    front: 'Qu\'est-ce que la variance d\'une variable aléatoire ?',
    back: 'Var(X) = 𝔼[(X - 𝔼(X))²] = 𝔼(X²) - (𝔼(X))²',
    frontLatex: '\\text{Var}(X) = \\text{?}',
    backLatex: '\\mathbb{E}(X^2) - (\\mathbb{E}(X))^2',
    category: 'Variance',
    chapter: 10,
    difficulty: 'facile'
  }
];

// Chapitre 11: Applications linéaires & structures vectorielles
export const applicationsLineairesFlashcards: MathFlashcard[] = [
  {
    id: 11001,
    front: 'Qu\'est-ce qu\'une application linéaire ?',
    back: 'Une application f: E → F est linéaire si f(λu + μv) = λf(u) + μf(v) pour tous u,v ∈ E et λ,μ scalaires.',
    frontLatex: 'f \\text{ linéaire} \\Leftrightarrow \\text{?}',
    backLatex: 'f(\\lambda u + \\mu v) = \\lambda f(u) + \\mu f(v)',
    category: 'Définitions',
    chapter: 11,
    difficulty: 'facile'
  },
  {
    id: 11002,
    front: 'Qu\'est-ce que le noyau d\'une application linéaire ?',
    back: 'Le noyau Ker(f) est l\'ensemble des vecteurs u tels que f(u) = 0.',
    frontLatex: '\\text{Ker}(f) = \\text{?}',
    backLatex: '\\{u \\in E \\mid f(u) = 0\\}',
    category: 'Noyau',
    chapter: 11,
    difficulty: 'facile'
  },
  {
    id: 11003,
    front: 'Qu\'est-ce que l\'image d\'une application linéaire ?',
    back: 'L\'image Im(f) est l\'ensemble f(E) = {f(u) | u ∈ E}.',
    frontLatex: '\\text{Im}(f) = \\text{?}',
    backLatex: '\\{f(u) \\mid u \\in E\\}',
    category: 'Image',
    chapter: 11,
    difficulty: 'facile'
  },
  {
    id: 11004,
    front: 'Théorème du rang pour les applications linéaires',
    back: 'dim(Ker(f)) + dim(Im(f)) = dim(E)',
    frontLatex: '\\dim(\\text{Ker}(f)) + \\dim(\\text{Im}(f)) = \\text{?}',
    backLatex: '\\dim(E)',
    category: 'Théorèmes',
    chapter: 11,
    difficulty: 'moyen'
  },
  {
    id: 11005,
    front: 'Condition d\'injectivité',
    back: 'f est injective si et seulement si Ker(f) = {0}.',
    frontLatex: 'f \\text{ injective} \\Leftrightarrow \\text{?}',
    backLatex: '\\text{Ker}(f) = \\{0\\}',
    category: 'Injectivité',
    chapter: 11,
    difficulty: 'facile'
  },
  {
    id: 11006,
    front: 'Condition de surjectivité',
    back: 'f est surjective si et seulement si Im(f) = F.',
    frontLatex: 'f \\text{ surjective} \\Leftrightarrow \\text{?}',
    backLatex: '\\text{Im}(f) = F',
    category: 'Surjectivité',
    chapter: 11,
    difficulty: 'facile'
  },
  {
    id: 11007,
    front: 'Rang d\'une application linéaire',
    back: 'Le rang de f est rg(f) = dim(Im(f)).',
    frontLatex: '\\text{rg}(f) = \\text{?}',
    backLatex: '\\dim(\\text{Im}(f))',
    category: 'Rang',
    chapter: 11,
    difficulty: 'facile'
  },
  {
    id: 11008,
    front: 'Isomorphisme',
    back: 'Un isomorphisme est une application linéaire bijective.',
    frontLatex: 'f \\text{ isomorphisme} \\Leftrightarrow \\text{?}',
    backLatex: 'f \\text{ linéaire et bijective}',
    category: 'Isomorphisme',
    chapter: 11,
    difficulty: 'facile'
  },
  {
    id: 11009,
    front: 'Matrice d\'une application linéaire',
    back: 'Dans des bases fixées, toute application linéaire peut être représentée par une matrice.',
    frontLatex: 'f \\leftrightarrow \\text{?}',
    backLatex: 'M \\in \\mathcal{M}_{m,n}(\\mathbb{K})',
    category: 'Représentation',
    chapter: 11,
    difficulty: 'moyen'
  },
  {
    id: 11010,
    front: 'Composition d\'applications linéaires',
    back: 'Si f et g sont linéaires, alors g∘f est linéaire et Mat(g∘f) = Mat(g) × Mat(f).',
    frontLatex: '\\text{Mat}(g \\circ f) = \\text{?}',
    backLatex: '\\text{Mat}(g) \\times \\text{Mat}(f)',
    category: 'Composition',
    chapter: 11,
    difficulty: 'moyen'
  }
];

// Chapitre 12: Comparaison, négligeabilité & équivalence
export const comparaisonNegligeabiliteFlashcards: MathFlashcard[] = [
  {
    id: 12001,
    front: 'Notation petit o (Landau)',
    back: 'f = o(g) au voisinage de a signifie que f(x)/g(x) → 0 quand x → a.',
    frontLatex: 'f = o(g) \\Leftrightarrow \\text{?}',
    backLatex: '\\lim_{x \\to a} \\frac{f(x)}{g(x)} = 0',
    category: 'Négligeabilité',
    chapter: 12,
    difficulty: 'facile'
  },
  {
    id: 12002,
    front: 'Notation grand O',
    back: 'f = O(g) au voisinage de a signifie qu\'il existe M > 0 et un voisinage V tel que |f(x)| ≤ M|g(x)| sur V.',
    frontLatex: 'f = O(g) \\Leftrightarrow \\text{?}',
    backLatex: '\\exists M, V: |f(x)| \\leq M|g(x)| \\text{ sur } V',
    category: 'Domination',
    chapter: 12,
    difficulty: 'moyen'
  },
  {
    id: 12003,
    front: 'Équivalence de fonctions',
    back: 'f ~ g au voisinage de a signifie que f(x)/g(x) → 1 quand x → a.',
    frontLatex: 'f \\sim g \\Leftrightarrow \\text{?}',
    backLatex: '\\lim_{x \\to a} \\frac{f(x)}{g(x)} = 1',
    category: 'Équivalence',
    chapter: 12,
    difficulty: 'facile'
  },
  {
    id: 12004,
    front: 'Propriété de transitivité des équivalents',
    back: 'Si f ~ g et g ~ h, alors f ~ h.',
    frontLatex: 'f \\sim g, g \\sim h \\Rightarrow \\text{?}',
    backLatex: 'f \\sim h',
    category: 'Propriétés',
    chapter: 12,
    difficulty: 'facile'
  },
  {
    id: 12005,
    front: 'Équivalent en 0 de ln(1+x)',
    back: 'ln(1+x) ~ x quand x → 0',
    frontLatex: '\\ln(1+x) \\sim \\text{?} \\text{ quand } x \\to 0',
    backLatex: 'x',
    category: 'Équivalents usuels',
    chapter: 12,
    difficulty: 'facile'
  },
  {
    id: 12006,
    front: 'Équivalent en 0 de eˣ - 1',
    back: 'eˣ - 1 ~ x quand x → 0',
    frontLatex: 'e^x - 1 \\sim \\text{?} \\text{ quand } x \\to 0',
    backLatex: 'x',
    category: 'Équivalents usuels',
    chapter: 12,
    difficulty: 'facile'
  },
  {
    id: 12007,
    front: 'Équivalent en 0 de sin(x)',
    back: 'sin(x) ~ x quand x → 0',
    frontLatex: '\\sin(x) \\sim \\text{?} \\text{ quand } x \\to 0',
    backLatex: 'x',
    category: 'Équivalents usuels',
    chapter: 12,
    difficulty: 'facile'
  },
  {
    id: 12008,
    front: 'Règle des équivalents pour les produits',
    back: 'Si f ~ f\' et g ~ g\', alors fg ~ f\'g\'.',
    frontLatex: 'f \\sim f\', g \\sim g\' \\Rightarrow fg \\sim \\text{?}',
    backLatex: 'f\'g\'',
    category: 'Opérations',
    chapter: 12,
    difficulty: 'moyen'
  },
  {
    id: 12009,
    front: 'Croissances comparées: polynômes vs exponentielles',
    back: 'Pour tout n > 0 et a > 0, xⁿ = o(eᵃˣ) quand x → +∞.',
    frontLatex: 'x^n = o(\\text{?}) \\text{ quand } x \\to +\\infty',
    backLatex: 'e^{ax}',
    category: 'Croissances comparées',
    chapter: 12,
    difficulty: 'moyen'
  },
  {
    id: 12010,
    front: 'Croissances comparées: logarithmes vs polynômes',
    back: 'Pour tout α > 0, ln(x) = o(xᵅ) quand x → +∞.',
    frontLatex: '\\ln(x) = o(\\text{?}) \\text{ quand } x \\to +\\infty',
    backLatex: 'x^\\alpha',
    category: 'Croissances comparées',
    chapter: 12,
    difficulty: 'moyen'
  }
];

// Chapitre 13: Séries numériques
export const seriesNumeriquesFlashcards: MathFlashcard[] = [
  {
    id: 13001,
    front: 'Qu\'est-ce qu\'une série numérique ?',
    back: 'Une série de terme général uₙ est la suite de ses sommes partielles Sₙ = ∑ᵏ⁼⁰ⁿ uₖ.',
    frontLatex: 'S_n = \\text{?}',
    backLatex: '\\sum_{k=0}^{n} u_k',
    category: 'Définitions',
    chapter: 13,
    difficulty: 'facile'
  },
  {
    id: 13002,
    front: 'Convergence d\'une série',
    back: 'La série ∑uₙ converge si la suite des sommes partielles (Sₙ) converge.',
    frontLatex: '\\sum u_n \\text{ converge} \\Leftrightarrow \\text{?}',
    backLatex: '(S_n) \\text{ converge}',
    category: 'Convergence',
    chapter: 13,
    difficulty: 'facile'
  },
  {
    id: 13003,
    front: 'Condition nécessaire de convergence',
    back: 'Si ∑uₙ converge, alors lim uₙ = 0.',
    frontLatex: '\\sum u_n \\text{ converge} \\Rightarrow \\text{?}',
    backLatex: '\\lim u_n = 0',
    category: 'Théorèmes',
    chapter: 13,
    difficulty: 'facile'
  },
  {
    id: 13004,
    front: 'Série géométrique',
    back: 'La série ∑qⁿ converge si et seulement si |q| < 1, et alors sa somme vaut 1/(1-q).',
    frontLatex: '\\sum q^n \\text{ converge} \\Leftrightarrow \\text{?}',
    backLatex: '|q| < 1, \\text{ somme } = \\frac{1}{1-q}',
    category: 'Séries de référence',
    chapter: 13,
    difficulty: 'moyen'
  },
  {
    id: 13005,
    front: 'Série de Riemann',
    back: 'La série ∑(1/nᵅ) converge si et seulement si α > 1.',
    frontLatex: '\\sum \\frac{1}{n^\\alpha} \\text{ converge} \\Leftrightarrow \\text{?}',
    backLatex: '\\alpha > 1',
    category: 'Séries de référence',
    chapter: 13,
    difficulty: 'moyen'
  },
  {
    id: 13006,
    front: 'Critère de comparaison',
    back: 'Si 0 ≤ uₙ ≤ vₙ et ∑vₙ converge, alors ∑uₙ converge.',
    frontLatex: '0 \\leq u_n \\leq v_n, \\sum v_n \\text{ CV} \\Rightarrow \\text{?}',
    backLatex: '\\sum u_n \\text{ converge}',
    category: 'Critères de convergence',
    chapter: 13,
    difficulty: 'moyen'
  },
  {
    id: 13007,
    front: 'Critère de d\'Alembert',
    back: 'Si uₙ > 0 et lim(uₙ₊₁/uₙ) = ℓ, alors: ℓ < 1 ⇒ convergence, ℓ > 1 ⇒ divergence.',
    frontLatex: '\\lim \\frac{u_{n+1}}{u_n} = \\ell < 1 \\Rightarrow \\text{?}',
    backLatex: '\\sum u_n \\text{ converge}',
    category: 'Critères de convergence',
    chapter: 13,
    difficulty: 'moyen'
  },
  {
    id: 13008,
    front: 'Série alternée - Critère de Leibniz',
    back: 'Si (uₙ) décroît vers 0, alors ∑(-1)ⁿuₙ converge.',
    frontLatex: 'u_n \\searrow 0 \\Rightarrow \\sum (-1)^n u_n \\text{?}',
    backLatex: '\\text{converge}',
    category: 'Séries alternées',
    chapter: 13,
    difficulty: 'moyen'
  },
  {
    id: 13009,
    front: 'Convergence absolue',
    back: 'Une série ∑uₙ est absolument convergente si ∑|uₙ| converge.',
    frontLatex: '\\sum u_n \\text{ abs. CV} \\Leftrightarrow \\text{?}',
    backLatex: '\\sum |u_n| \\text{ converge}',
    category: 'Convergence absolue',
    chapter: 13,
    difficulty: 'facile'
  },
  {
    id: 13010,
    front: 'Théorème fondamental',
    back: 'Toute série absolument convergente est convergente.',
    frontLatex: '\\sum |u_n| \\text{ CV} \\Rightarrow \\text{?}',
    backLatex: '\\sum u_n \\text{ CV}',
    category: 'Théorèmes',
    chapter: 13,
    difficulty: 'facile'
  }
];

// Chapitre 14: Développements limités & formule de Taylor
export const developpementsLimitesFlashcards: MathFlashcard[] = [
  {
    id: 14001,
    front: 'Qu\'est-ce qu\'un développement limité ?',
    back: 'f admet un DL d\'ordre n en a si f(x) = Pₙ(x-a) + o((x-a)ⁿ) où Pₙ est un polynôme de degré ≤ n.',
    frontLatex: 'f(x) = \\text{?}',
    backLatex: 'P_n(x-a) + o((x-a)^n)',
    category: 'Définitions',
    chapter: 14,
    difficulty: 'moyen'
  },
  {
    id: 14002,
    front: 'Formule de Taylor-Young',
    back: 'Si f est n fois dérivable en a, f(x) = ∑ᵏ⁼⁰ⁿ (fᵏ(a)/k!)(x-a)ᵏ + o((x-a)ⁿ).',
    frontLatex: 'f(x) = \\text{?}',
    backLatex: '\\sum_{k=0}^{n} \\frac{f^{(k)}(a)}{k!}(x-a)^k + o((x-a)^n)',
    category: 'Formules',
    chapter: 14,
    difficulty: 'difficile'
  },
  {
    id: 14003,
    front: 'DL de eˣ en 0',
    back: 'eˣ = 1 + x + x²/2! + ... + xⁿ/n! + o(xⁿ)',
    frontLatex: 'e^x = \\text{?}',
    backLatex: '\\sum_{k=0}^{n} \\frac{x^k}{k!} + o(x^n)',
    category: 'DL usuels',
    chapter: 14,
    difficulty: 'moyen'
  },
  {
    id: 14004,
    front: 'DL de ln(1+x) en 0',
    back: 'ln(1+x) = x - x²/2 + x³/3 - ... + (-1)ⁿ⁺¹xⁿ/n + o(xⁿ)',
    frontLatex: '\\ln(1+x) = \\text{?}',
    backLatex: '\\sum_{k=1}^{n} \\frac{(-1)^{k+1} x^k}{k} + o(x^n)',
    category: 'DL usuels',
    chapter: 14,
    difficulty: 'moyen'
  },
  {
    id: 14005,
    front: 'DL de 1/(1-x) en 0',
    back: '1/(1-x) = 1 + x + x² + ... + xⁿ + o(xⁿ)',
    frontLatex: '\\frac{1}{1-x} = \\text{?}',
    backLatex: '\\sum_{k=0}^{n} x^k + o(x^n)',
    category: 'DL usuels',
    chapter: 14,
    difficulty: 'facile'
  },
  {
    id: 14006,
    front: 'DL de sin(x) en 0',
    back: 'sin(x) = x - x³/3! + x⁵/5! - ... + o(x²ⁿ⁺¹)',
    frontLatex: '\\sin(x) = \\text{?}',
    backLatex: '\\sum_{k=0}^{n} \\frac{(-1)^k x^{2k+1}}{(2k+1)!} + o(x^{2n+2})',
    category: 'DL usuels',
    chapter: 14,
    difficulty: 'moyen'
  },
  {
    id: 14007,
    front: 'DL de cos(x) en 0',
    back: 'cos(x) = 1 - x²/2! + x⁴/4! - ... + o(x²ⁿ)',
    frontLatex: '\\cos(x) = \\text{?}',
    backLatex: '\\sum_{k=0}^{n} \\frac{(-1)^k x^{2k}}{(2k)!} + o(x^{2n+1})',
    category: 'DL usuels',
    chapter: 14,
    difficulty: 'moyen'
  },
  {
    id: 14008,
    front: 'Opération sur les DL: somme',
    back: 'Si f et g admettent des DL en a, alors f+g admet un DL qui est la somme des DL.',
    frontLatex: 'DL(f+g) = \\text{?}',
    backLatex: 'DL(f) + DL(g)',
    category: 'Opérations',
    chapter: 14,
    difficulty: 'facile'
  },
  {
    id: 14009,
    front: 'Opération sur les DL: produit',
    back: 'Si f et g admettent des DL en a, alors fg admet un DL obtenu en multipliant les DL et en tronquant.',
    frontLatex: 'DL(fg) = \\text{?}',
    backLatex: '\\text{Produit tronqué des DL}',
    category: 'Opérations',
    chapter: 14,
    difficulty: 'moyen'
  },
  {
    id: 14010,
    front: 'Application des DL au calcul de limites',
    back: 'Les DL permettent de lever des formes indéterminées en remplaçant les fonctions par leurs approximations polynomiales.',
    frontLatex: '\\lim \\frac{f(x)}{g(x)} = \\text{?}',
    backLatex: '\\text{Utiliser DL de } f \\text{ et } g',
    category: 'Applications',
    chapter: 14,
    difficulty: 'moyen'
  }
];

// Chapitre 15: Intégrales impropres & critères de convergence
export const integralesImpropresFlashcards: MathFlashcard[] = [
  {
    id: 15001,
    front: 'Qu\'est-ce qu\'une intégrale impropre ?',
    back: 'Une intégrale impropre est une intégrale sur un intervalle non borné ou d\'une fonction non bornée.',
    frontLatex: '\\int_a^{+\\infty} f(x)dx \\text{ ou } \\int_a^b f \\text{ avec } f \\text{ non bornée}',
    backLatex: '\\text{Intégrale impropre}',
    category: 'Définitions',
    chapter: 15,
    difficulty: 'facile'
  },
  {
    id: 15002,
    front: 'Convergence d\'une intégrale sur [a,+∞[',
    back: '∫ₐ⁺∞ f converge si lim(b→+∞) ∫ₐᵇ f existe et est finie.',
    frontLatex: '\\int_a^{+\\infty} f \\text{ converge} \\Leftrightarrow \\text{?}',
    backLatex: '\\lim_{b \\to +\\infty} \\int_a^b f \\text{ existe et finie}',
    category: 'Convergence',
    chapter: 15,
    difficulty: 'facile'
  },
  {
    id: 15003,
    front: 'Intégrale de Riemann',
    back: '∫₁⁺∞ (1/xᵅ)dx converge si et seulement si α > 1.',
    frontLatex: '\\int_1^{+\\infty} \\frac{1}{x^\\alpha}dx \\text{ converge} \\Leftrightarrow \\text{?}',
    backLatex: '\\alpha > 1',
    category: 'Intégrales de référence',
    chapter: 15,
    difficulty: 'moyen'
  },
  {
    id: 15004,
    front: 'Critère de comparaison (fonctions positives)',
    back: 'Si 0 ≤ f ≤ g et ∫g converge, alors ∫f converge.',
    frontLatex: '0 \\leq f \\leq g, \\int g \\text{ CV} \\Rightarrow \\text{?}',
    backLatex: '\\int f \\text{ converge}',
    category: 'Critères de convergence',
    chapter: 15,
    difficulty: 'moyen'
  },
  {
    id: 15005,
    front: 'Critère d\'équivalence',
    back: 'Si f ~ g au voisinage de +∞ avec f,g > 0, alors ∫f et ∫g ont même nature.',
    frontLatex: 'f \\sim g \\Rightarrow \\int f \\text{ et } \\int g \\text{?}',
    backLatex: '\\text{même nature}',
    category: 'Critères de convergence',
    chapter: 15,
    difficulty: 'moyen'
  },
  {
    id: 15006,
    front: 'Convergence absolue',
    back: '∫f est absolument convergente si ∫|f| converge.',
    frontLatex: '\\int f \\text{ abs. CV} \\Leftrightarrow \\text{?}',
    backLatex: '\\int |f| \\text{ converge}',
    category: 'Convergence absolue',
    chapter: 15,
    difficulty: 'facile'
  },
  {
    id: 15007,
    front: 'Théorème fondamental',
    back: 'Toute intégrale absolument convergente est convergente.',
    frontLatex: '\\int |f| \\text{ CV} \\Rightarrow \\text{?}',
    backLatex: '\\int f \\text{ CV}',
    category: 'Théorèmes',
    chapter: 15,
    difficulty: 'facile'
  },
  {
    id: 15008,
    front: 'Intégration par parties (intégrale impropre)',
    back: '[uv]ₐ⁺∞ - ∫ₐ⁺∞ u\'v, en vérifiant que [uv]ₐ⁺∞ existe.',
    frontLatex: '\\int_a^{+\\infty} u\'v = \\text{?}',
    backLatex: '[uv]_a^{+\\infty} - \\int_a^{+\\infty} uv\'',
    category: 'Méthodes',
    chapter: 15,
    difficulty: 'difficile'
  },
  {
    id: 15009,
    front: 'Intégrale de Bertrand',
    back: '∫₂⁺∞ dx/(xᵅ(ln x)ᵝ) converge ssi α > 1 ou (α = 1 et β > 1).',
    frontLatex: '\\int_2^{+\\infty} \\frac{dx}{x^\\alpha(\\ln x)^\\beta} \\text{ CV} \\Leftrightarrow \\text{?}',
    backLatex: '\\alpha > 1 \\text{ ou } (\\alpha = 1, \\beta > 1)',
    category: 'Intégrales de référence',
    chapter: 15,
    difficulty: 'difficile'
  },
  {
    id: 15010,
    front: 'Comportement en 0⁺de 1/xᵅ',
    back: '∫₀¹ (1/xᵅ)dx converge si et seulement si α < 1.',
    frontLatex: '\\int_0^1 \\frac{1}{x^\\alpha}dx \\text{ converge} \\Leftrightarrow \\text{?}',
    backLatex: '\\alpha < 1',
    category: 'Singularités',
    chapter: 15,
    difficulty: 'moyen'
  }
];

// Chapitre 16: Espaces probabilisés & conditionnement
export const espacesProbabilisesFlashcards: MathFlashcard[] = [
  {
    id: 16001,
    front: 'Qu\'est-ce qu\'une tribu ?',
    back: 'Une tribu 𝒜 sur Ω est un ensemble de parties de Ω stable par complémentaire et union dénombrable, contenant Ω.',
    frontLatex: '\\mathcal{A} \\text{ tribu} \\Leftrightarrow \\text{?}',
    backLatex: '\\Omega \\in \\mathcal{A}, \\text{ stable par } \\overline{\\cdot}, \\cup_{\\text{dénomb.}}',
    category: 'Définitions',
    chapter: 16,
    difficulty: 'moyen'
  },
  {
    id: 16002,
    front: 'Propriété de σ-additivité',
    back: 'Pour une suite (Aₙ) d\'événements disjoints, ℙ(⋃Aₙ) = ∑ℙ(Aₙ).',
    frontLatex: '\\mathbb{P}(\\bigcup A_n) = \\text{?} \\text{ si } A_i \\cap A_j = \\emptyset',
    backLatex: '\\sum \\mathbb{P}(A_n)',
    category: 'Propriétés',
    chapter: 16,
    difficulty: 'moyen'
  },
  {
    id: 16003,
    front: 'Formule de Poincaré (inclusion-exclusion)',
    back: 'ℙ(A∪B) = ℙ(A) + ℙ(B) - ℙ(A∩B)',
    frontLatex: '\\mathbb{P}(A \\cup B) = \\text{?}',
    backLatex: '\\mathbb{P}(A) + \\mathbb{P}(B) - \\mathbb{P}(A \\cap B)',
    category: 'Formules',
    chapter: 16,
    difficulty: 'facile'
  },
  {
    id: 16004,
    front: 'Probabilité du complémentaire',
    back: 'ℙ(A̅) = 1 - ℙ(A)',
    frontLatex: '\\mathbb{P}(\\overline{A}) = \\text{?}',
    backLatex: '1 - \\mathbb{P}(A)',
    category: 'Propriétés',
    chapter: 16,
    difficulty: 'facile'
  },
  {
    id: 16005,
    front: 'Continuité croissante',
    back: 'Si A₁ ⊂ A₂ ⊂ ..., alors ℙ(⋃Aₙ) = lim ℙ(Aₙ).',
    frontLatex: 'A_1 \\subset A_2 \\subset \\cdots \\Rightarrow \\mathbb{P}(\\bigcup A_n) = \\text{?}',
    backLatex: '\\lim \\mathbb{P}(A_n)',
    category: 'Continuité',
    chapter: 16,
    difficulty: 'moyen'
  },
  {
    id: 16006,
    front: 'Continuité décroissante',
    back: 'Si A₁ ⊃ A₂ ⊃ ..., alors ℙ(⋂Aₙ) = lim ℙ(Aₙ).',
    frontLatex: 'A_1 \\supset A_2 \\supset \\cdots \\Rightarrow \\mathbb{P}(\\bigcap A_n) = \\text{?}',
    backLatex: '\\lim \\mathbb{P}(A_n)',
    category: 'Continuité',
    chapter: 16,
    difficulty: 'moyen'
  },
  {
    id: 16007,
    front: 'Système complet d\'événements',
    back: 'Une partition (Aᵢ) forme un système complet si les Aᵢ sont disjoints et ⋃Aᵢ = Ω.',
    frontLatex: '\\text{Système complet} \\Leftrightarrow \\text{?}',
    backLatex: 'A_i \\cap A_j = \\emptyset, \\bigcup A_i = \\Omega',
    category: 'Partitions',
    chapter: 16,
    difficulty: 'facile'
  },
  {
    id: 16008,
    front: 'Indépendance mutuelle',
    back: 'Des événements (A₁,...,Aₙ) sont mutuellement indépendants si pour toute partie I, ℙ(⋂ᵢ∈ᵢ Aᵢ) = ∏ᵢ∈ᵢ ℙ(Aᵢ).',
    frontLatex: 'A_1,\\ldots,A_n \\text{ indép. mutuels} \\Leftrightarrow \\text{?}',
    backLatex: '\\forall I, \\mathbb{P}(\\bigcap_{i\\in I} A_i) = \\prod_{i\\in I} \\mathbb{P}(A_i)',
    category: 'Indépendance',
    chapter: 16,
    difficulty: 'difficile'
  },
  {
    id: 16009,
    front: 'Lemme des coalitions',
    back: 'Si A et B sont indépendants, alors A̅ et B sont indépendants.',
    frontLatex: 'A, B \\text{ indép.} \\Rightarrow \\overline{A}, B \\text{?}',
    backLatex: '\\text{indépendants}',
    category: 'Indépendance',
    chapter: 16,
    difficulty: 'moyen'
  },
  {
    id: 16010,
    front: 'Probabilités totales (version générale)',
    back: 'Si (Aᵢ) est une partition, ℙ(B) = ∑ᵢ ℙ(B|Aᵢ)ℙ(Aᵢ).',
    frontLatex: '\\mathbb{P}(B) = \\text{?}',
    backLatex: '\\sum_i \\mathbb{P}(B|A_i)\\mathbb{P}(A_i)',
    category: 'Formules',
    chapter: 16,
    difficulty: 'moyen'
  }
];

// Chapitre 17: Variables aléatoires discrètes & lois
export const variablesAleatoiresDiscretesFlashcards: MathFlashcard[] = [
  {
    id: 17001,
    front: 'Loi de Bernoulli B(p)',
    back: 'ℙ(X = 1) = p, ℙ(X = 0) = 1-p, 𝔼(X) = p, Var(X) = p(1-p).',
    frontLatex: 'X \\sim \\mathcal{B}(p) \\Rightarrow \\mathbb{E}(X) = \\text{?}, \\text{Var}(X) = \\text{?}',
    backLatex: '\\mathbb{E}(X) = p, \\text{Var}(X) = p(1-p)',
    category: 'Lois usuelles',
    chapter: 17,
    difficulty: 'facile'
  },
  {
    id: 17002,
    front: 'Loi binomiale B(n,p)',
    back: 'ℙ(X = k) = C(n,k)pᵏ(1-p)ⁿ⁻ᵏ, 𝔼(X) = np, Var(X) = np(1-p).',
    frontLatex: 'X \\sim \\mathcal{B}(n,p) \\Rightarrow \\mathbb{E}(X) = \\text{?}, \\text{Var}(X) = \\text{?}',
    backLatex: '\\mathbb{E}(X) = np, \\text{Var}(X) = np(1-p)',
    category: 'Lois usuelles',
    chapter: 17,
    difficulty: 'facile'
  },
  {
    id: 17003,
    front: 'Loi géométrique G(p)',
    back: 'ℙ(X = k) = p(1-p)ᵏ⁻¹, 𝔼(X) = 1/p, Var(X) = (1-p)/p².',
    frontLatex: 'X \\sim \\mathcal{G}(p) \\Rightarrow \\mathbb{E}(X) = \\text{?}',
    backLatex: '\\mathbb{E}(X) = \\frac{1}{p}',
    category: 'Lois usuelles',
    chapter: 17,
    difficulty: 'moyen'
  },
  {
    id: 17004,
    front: 'Loi de Poisson P(λ)',
    back: 'ℙ(X = k) = e⁻ᵏ λᵏ/k!, 𝔼(X) = λ, Var(X) = λ.',
    frontLatex: 'X \\sim \\mathcal{P}(\\lambda) \\Rightarrow \\mathbb{E}(X) = \\text{?}, \\text{Var}(X) = \\text{?}',
    backLatex: '\\mathbb{E}(X) = \\lambda, \\text{Var}(X) = \\lambda',
    category: 'Lois usuelles',
    chapter: 17,
    difficulty: 'facile'
  },
  {
    id: 17005,
    front: 'Linéarité de l\'espérance',
    back: '𝔼(aX + bY) = a𝔼(X) + b𝔼(Y)',
    frontLatex: '\\mathbb{E}(aX + bY) = \\text{?}',
    backLatex: 'a\\mathbb{E}(X) + b\\mathbb{E}(Y)',
    category: 'Propriétés de l\'espérance',
    chapter: 17,
    difficulty: 'facile'
  },
  {
    id: 17006,
    front: 'Espérance d\'un produit (variables indépendantes)',
    back: 'Si X et Y sont indépendantes, 𝔼(XY) = 𝔼(X)𝔼(Y).',
    frontLatex: 'X, Y \\text{ indép.} \\Rightarrow \\mathbb{E}(XY) = \\text{?}',
    backLatex: '\\mathbb{E}(X)\\mathbb{E}(Y)',
    category: 'Indépendance',
    chapter: 17,
    difficulty: 'moyen'
  },
  {
    id: 17007,
    front: 'Variance d\'une somme (variables indépendantes)',
    back: 'Si X et Y sont indépendantes, Var(X+Y) = Var(X) + Var(Y).',
    frontLatex: 'X, Y \\text{ indép.} \\Rightarrow \\text{Var}(X+Y) = \\text{?}',
    backLatex: '\\text{Var}(X) + \\text{Var}(Y)',
    category: 'Indépendance',
    chapter: 17,
    difficulty: 'moyen'
  },
  {
    id: 17008,
    front: 'Inégalité de Markov',
    back: 'Pour X ≥ 0 et a > 0, ℙ(X ≥ a) ≤ 𝔼(X)/a.',
    frontLatex: '\\mathbb{P}(X \\geq a) \\leq \\text{?}',
    backLatex: '\\frac{\\mathbb{E}(X)}{a}',
    category: 'Inégalités',
    chapter: 17,
    difficulty: 'moyen'
  },
  {
    id: 17009,
    front: 'Inégalité de Bienaymé-Tchebychev',
    back: 'ℙ(|X - 𝔼(X)| ≥ ε) ≤ Var(X)/ε².',
    frontLatex: '\\mathbb{P}(|X - \\mathbb{E}(X)| \\geq \\varepsilon) \\leq \\text{?}',
    backLatex: '\\frac{\\text{Var}(X)}{\\varepsilon^2}',
    category: 'Inégalités',
    chapter: 17,
    difficulty: 'moyen'
  },
  {
    id: 17010,
    front: 'Covariance de deux variables',
    back: 'Cov(X,Y) = 𝔼(XY) - 𝔼(X)𝔼(Y) = 𝔼[(X - 𝔼(X))(Y - 𝔼(Y))].',
    frontLatex: '\\text{Cov}(X,Y) = \\text{?}',
    backLatex: '\\mathbb{E}(XY) - \\mathbb{E}(X)\\mathbb{E}(Y)',
    category: 'Covariance',
    chapter: 17,
    difficulty: 'facile'
  }
];

// Chapitre 18: Convergences & théorèmes limites
export const convergencesTheoremesFaiblesFlashcards: MathFlashcard[] = [
  {
    id: 18001,
    front: 'Convergence en probabilité',
    back: 'Xₙ converge en probabilité vers X si pour tout ε > 0, ℙ(|Xₙ - X| > ε) → 0.',
    frontLatex: 'X_n \\xrightarrow{\\mathbb{P}} X \\Leftrightarrow \\text{?}',
    backLatex: '\\forall \\varepsilon > 0, \\mathbb{P}(|X_n - X| > \\varepsilon) \\to 0',
    category: 'Modes de convergence',
    chapter: 18,
    difficulty: 'moyen'
  },
  {
    id: 18002,
    front: 'Convergence en loi',
    back: 'Xₙ converge en loi vers X si Fₙ(x) → F(x) en tout point de continuité de F.',
    frontLatex: 'X_n \\xrightarrow{\\mathcal{L}} X \\Leftrightarrow \\text{?}',
    backLatex: 'F_n(x) \\to F(x) \\text{ aux pts de continuité}',
    category: 'Modes de convergence',
    chapter: 18,
    difficulty: 'moyen'
  },
  {
    id: 18003,
    front: 'Loi faible des grands nombres',
    back: 'Si (Xₙ) sont iid avec espérance μ, alors (X₁+...+Xₙ)/n converge en probabilité vers μ.',
    frontLatex: '\\frac{X_1 + \\cdots + X_n}{n} \\xrightarrow{\\mathbb{P}} \\text{?}',
    backLatex: '\\mu = \\mathbb{E}(X_1)',
    category: 'Loi des grands nombres',
    chapter: 18,
    difficulty: 'moyen'
  },
  {
    id: 18004,
    front: 'Loi forte des grands nombres',
    back: 'Si (Xₙ) sont iid avec espérance μ, alors (X₁+...+Xₙ)/n converge presque sûrement vers μ.',
    frontLatex: '\\frac{X_1 + \\cdots + X_n}{n} \\xrightarrow{p.s.} \\text{?}',
    backLatex: '\\mu = \\mathbb{E}(X_1)',
    category: 'Loi des grands nombres',
    chapter: 18,
    difficulty: 'moyen'
  },
  {
    id: 18005,
    front: 'Théorème central limite (TCL)',
    back: 'Si (Xₙ) sont iid avec 𝔼(X₁) = μ et Var(X₁) = σ², alors √n(X̄ₙ - μ)/σ converge en loi vers N(0,1).',
    frontLatex: '\\frac{\\sqrt{n}(\\overline{X}_n - \\mu)}{\\sigma} \\xrightarrow{\\mathcal{L}} \\text{?}',
    backLatex: '\\mathcal{N}(0,1)',
    category: 'TCL',
    chapter: 18,
    difficulty: 'difficile'
  },
  {
    id: 18006,
    front: 'Approximation normale de la binomiale',
    back: 'Si X ~ B(n,p) avec n grand, alors (X - np)/√(np(1-p)) ≈ N(0,1).',
    frontLatex: 'X \\sim \\mathcal{B}(n,p), n \\text{ grand} \\Rightarrow \\frac{X - np}{\\sqrt{np(1-p)}} \\approx \\text{?}',
    backLatex: '\\mathcal{N}(0,1)',
    category: 'Approximations',
    chapter: 18,
    difficulty: 'moyen'
  },
  {
    id: 18007,
    front: 'Approximation de Poisson de la binomiale',
    back: 'Si X ~ B(n,p) avec n grand et p petit (np = λ fixé), alors X ≈ P(λ).',
    frontLatex: 'X \\sim \\mathcal{B}(n,p), n \\to \\infty, p \\to 0, np = \\lambda \\Rightarrow X \\approx \\text{?}',
    backLatex: '\\mathcal{P}(\\lambda)',
    category: 'Approximations',
    chapter: 18,
    difficulty: 'moyen'
  },
  {
    id: 18008,
    front: 'Convergence presque sûre',
    back: 'Xₙ → X presque sûrement si ℙ({ω : Xₙ(ω) → X(ω)}) = 1.',
    frontLatex: 'X_n \\xrightarrow{p.s.} X \\Leftrightarrow \\text{?}',
    backLatex: '\\mathbb{P}(\\{\\omega : X_n(\\omega) \\to X(\\omega)\\}) = 1',
    category: 'Modes de convergence',
    chapter: 18,
    difficulty: 'difficile'
  },
  {
    id: 18009,
    front: 'Relation entre convergences',
    back: 'Convergence p.s. ⇒ convergence en probabilité ⇒ convergence en loi.',
    frontLatex: '\\text{p.s.} \\Rightarrow \\mathbb{P} \\Rightarrow \\text{?}',
    backLatex: '\\mathcal{L} \\text{ (loi)}',
    category: 'Relations',
    chapter: 18,
    difficulty: 'moyen'
  },
  {
    id: 18010,
    front: 'Lemme de Slutsky',
    back: 'Si Xₙ → X en loi et Yₙ → c en probabilité, alors XₙYₙ → cX en loi.',
    frontLatex: 'X_n \\xrightarrow{\\mathcal{L}} X, Y_n \\xrightarrow{\\mathbb{P}} c \\Rightarrow X_n Y_n \\xrightarrow{\\mathcal{L}} \\text{?}',
    backLatex: 'cX',
    category: 'Théorèmes',
    chapter: 18,
    difficulty: 'difficile'
  }
];

// Mapping pour tous les chapitres des maths appliquées
export const mathsAppliqueesFlashcards: Record<string, MathFlashcard[]> = {
  'elements-de-logique': elementsDeLogiqueFlashcards,
  'ensembles-et-applications': ensemblesEtApplicationsFlashcards,
  'sommes-produits-coefficients-binomiaux': sommesProduitsBinomiauxFlashcards,
  'suites-numeriques': suitesNumeriquesFlashcards,
  'fonctions-d-une-variable-reelle': fonctionsVariableReelleFlashcards,
  'derivation': derivationFlashcards,
  'integration-sur-un-segment': integrationSegmentFlashcards,
  'polynomes': polynomesFlashcards,
  'matrices-espaces-vectoriels': matricesEspacesVectorielsFlashcards,
  'probabilites-conditionnement': probabilitesConditionnementFlashcards,
  'applications-lineaires-structures-vectorielles': applicationsLineairesFlashcards,
  'comparaison-negligeabilite-equivalence': comparaisonNegligeabiliteFlashcards,
  'series-numeriques': seriesNumeriquesFlashcards,
  'developpements-limites-formule-de-taylor': developpementsLimitesFlashcards,
  'integrales-impropres-criteres-de-convergence': integralesImpropresFlashcards,
  'espaces-probabilises-conditionnement': espacesProbabilisesFlashcards,
  'variables-aleatoires-discretes-lois': variablesAleatoiresDiscretesFlashcards,
  'convergences-theoremes-limites': convergencesTheoremesFaiblesFlashcards,
  // Ajouter les autres chapitres au besoin
};
