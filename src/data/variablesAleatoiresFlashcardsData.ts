export interface VariablesAleatoiresFlashcard {
  id: number;
  front: string;
  back: string;
  frontLatex?: string;
  backLatex?: string;
  category: string;
  difficulty: 'facile' | 'moyen' | 'difficile';
}

// Flashcards pour Variables aléatoires & histogrammes - Séance 9 Oteria Cyber School
export const variablesAleatoiresFlashcards: VariablesAleatoiresFlashcard[] = [
  // Concepts de base
  {
    id: 1,
    front: "Qu'est-ce qu'une variable aléatoire ?",
    back: "Une variable aléatoire (v.a.) est une fonction X qui à chaque résultat ω de l'univers Ω associe un nombre réel X(ω). Elle permet de quantifier les résultats d'une expérience aléatoire.",
    frontLatex: "X : \\Omega \\to \\mathbb{R}",
    backLatex: "\\omega \\mapsto X(\\omega)",
    category: "Concepts de base",
    difficulty: "facile"
  },
  {
    id: 2,
    front: "Quelle est la différence entre une variable aléatoire discrète et continue ?",
    back: "Une v.a. discrète prend un ensemble fini ou dénombrable de valeurs (ex: nombre de succès). Une v.a. continue peut prendre toute valeur dans un intervalle (ex: durée, température).",
    frontLatex: "X \\text{ discrète vs continue}",
    category: "Concepts de base",
    difficulty: "facile"
  },
  {
    id: 3,
    front: "Qu'est-ce que la loi de probabilité d'une variable aléatoire discrète X ?",
    back: "C'est l'ensemble des probabilités P(X = xᵢ) pour toutes les valeurs possibles xᵢ de X. On a toujours Σᵢ P(X = xᵢ) = 1.",
    frontLatex: "\\text{Loi de } X",
    backLatex: "\\sum_i P(X = x_i) = 1",
    category: "Concepts de base",
    difficulty: "facile"
  },
  {
    id: 4,
    front: "Comment note-t-on l'événement 'X prend la valeur k' ?",
    back: "On note (X = k) ou {X = k}. C'est l'ensemble des ω ∈ Ω tels que X(ω) = k. On écrit P(X = k) pour sa probabilité.",
    frontLatex: "\\{X = k\\} = ?",
    backLatex: "\\{\\omega \\in \\Omega : X(\\omega) = k\\}",
    category: "Concepts de base",
    difficulty: "facile"
  },

  // Espérance et variance
  {
    id: 5,
    front: "Définition de l'espérance E(X) d'une variable aléatoire discrète",
    back: "L'espérance est la moyenne pondérée des valeurs de X par leurs probabilités. C'est le centre de gravité de la loi.",
    frontLatex: "E(X) = ?",
    backLatex: "E(X) = \\sum_i x_i \\cdot P(X = x_i)",
    category: "Espérance et variance",
    difficulty: "facile"
  },
  {
    id: 6,
    front: "Définition de la variance V(X) d'une variable aléatoire",
    back: "La variance mesure la dispersion de X autour de son espérance. C'est l'espérance du carré des écarts à la moyenne.",
    frontLatex: "V(X) = ?",
    backLatex: "V(X) = E[(X - E(X))^2] = E(X^2) - [E(X)]^2",
    category: "Espérance et variance",
    difficulty: "moyen"
  },
  {
    id: 7,
    front: "Qu'est-ce que l'écart-type σ(X) ?",
    back: "L'écart-type est la racine carrée de la variance : σ(X) = √V(X). Il a la même unité que X et mesure la dispersion typique autour de E(X).",
    frontLatex: "\\sigma(X) = ?",
    backLatex: "\\sigma(X) = \\sqrt{V(X)}",
    category: "Espérance et variance",
    difficulty: "facile"
  },
  {
    id: 8,
    front: "Propriété de linéarité de l'espérance",
    back: "Pour des constantes a et b : E(aX + b) = aE(X) + b. L'espérance est linéaire.",
    frontLatex: "E(aX + b) = ?",
    backLatex: "E(aX + b) = aE(X) + b",
    category: "Espérance et variance",
    difficulty: "moyen"
  },
  {
    id: 9,
    front: "Comment se transforme la variance par transformation affine ?",
    back: "V(aX + b) = a²V(X). La constante b n'affecte pas la variance (translation), mais a² multiplie la variance.",
    frontLatex: "V(aX + b) = ?",
    backLatex: "V(aX + b) = a^2 V(X)",
    category: "Espérance et variance",
    difficulty: "moyen"
  },

  // Loi de Bernoulli
  {
    id: 10,
    front: "Qu'est-ce qu'une loi de Bernoulli B(p) ?",
    back: "Une v.a. X suit une loi de Bernoulli de paramètre p si X vaut 1 avec probabilité p (succès) et 0 avec probabilité 1-p (échec). C'est une expérience à deux issues.",
    frontLatex: "X \\sim \\mathcal{B}(p)",
    backLatex: "P(X=1) = p, \\quad P(X=0) = 1-p",
    category: "Loi de Bernoulli",
    difficulty: "facile"
  },
  {
    id: 11,
    front: "Espérance et variance d'une loi de Bernoulli B(p)",
    back: "E(X) = p et V(X) = p(1-p). La variance est maximale pour p = 1/2.",
    frontLatex: "X \\sim \\mathcal{B}(p) \\Rightarrow ?",
    backLatex: "E(X) = p, \\quad V(X) = p(1-p)",
    category: "Loi de Bernoulli",
    difficulty: "facile"
  },

  // Loi Binomiale
  {
    id: 12,
    front: "Qu'est-ce qu'une loi binomiale B(n,p) ?",
    back: "X suit une loi binomiale de paramètres n et p si X compte le nombre de succès sur n expériences de Bernoulli indépendantes de paramètre p. X ∈ {0, 1, ..., n}.",
    frontLatex: "X \\sim \\mathcal{B}(n, p)",
    backLatex: "P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}",
    category: "Loi Binomiale",
    difficulty: "moyen"
  },
  {
    id: 13,
    front: "Espérance et variance d'une loi binomiale B(n,p)",
    back: "E(X) = np (nombre moyen de succès) et V(X) = np(1-p).",
    frontLatex: "X \\sim \\mathcal{B}(n, p) \\Rightarrow ?",
    backLatex: "E(X) = np, \\quad V(X) = np(1-p)",
    category: "Loi Binomiale",
    difficulty: "moyen"
  },
  {
    id: 14,
    front: "En Python, comment générer une loi binomiale B(n,p) ?",
    back: "On utilise rd.binomial(n, p) qui retourne une réalisation, ou rd.binomial(n, p, size=N) pour N réalisations.",
    backLatex: "\\text{rd.binomial(n, p)} \\\\ \\text{rd.binomial(n, p, size=N)}",
    category: "Loi Binomiale",
    difficulty: "facile"
  },

  // Loi géométrique
  {
    id: 15,
    front: "Qu'est-ce qu'une loi géométrique G(p) ?",
    back: "X suit une loi géométrique de paramètre p si X compte le rang du premier succès dans une suite d'expériences de Bernoulli indépendantes de paramètre p. X ∈ {1, 2, 3, ...}.",
    frontLatex: "X \\sim \\mathcal{G}(p)",
    backLatex: "P(X = k) = (1-p)^{k-1} p \\text{ pour } k \\geq 1",
    category: "Loi Géométrique",
    difficulty: "moyen"
  },
  {
    id: 16,
    front: "Espérance d'une loi géométrique G(p)",
    back: "E(X) = 1/p. C'est le nombre moyen d'essais avant le premier succès.",
    frontLatex: "X \\sim \\mathcal{G}(p) \\Rightarrow ?",
    backLatex: "E(X) = \\frac{1}{p}",
    category: "Loi Géométrique",
    difficulty: "moyen"
  },
  {
    id: 17,
    front: "En Python, comment générer une loi géométrique G(p) ?",
    back: "On utilise rd.geometric(p). Attention : en Python, la numérotation peut commencer à 0 selon la convention. Il faut vérifier la documentation.",
    backLatex: "\\text{rd.geometric(p)}",
    category: "Loi Géométrique",
    difficulty: "facile"
  },

  // Loi de Poisson
  {
    id: 18,
    front: "Qu'est-ce qu'une loi de Poisson P(λ) ?",
    back: "X suit une loi de Poisson de paramètre λ > 0 si X compte le nombre d'événements rares sur un intervalle (temps, espace). X ∈ {0, 1, 2, ...}. C'est l'approximation de B(n,p) quand n est grand et p petit avec np = λ.",
    frontLatex: "X \\sim \\mathcal{P}(\\lambda)",
    backLatex: "P(X = k) = e^{-\\lambda} \\frac{\\lambda^k}{k!}",
    category: "Loi de Poisson",
    difficulty: "moyen"
  },
  {
    id: 19,
    front: "Espérance et variance d'une loi de Poisson P(λ)",
    back: "E(X) = λ et V(X) = λ. Particularité : espérance = variance pour Poisson.",
    frontLatex: "X \\sim \\mathcal{P}(\\lambda) \\Rightarrow ?",
    backLatex: "E(X) = \\lambda, \\quad V(X) = \\lambda",
    category: "Loi de Poisson",
    difficulty: "facile"
  },
  {
    id: 20,
    front: "En Python, comment générer une loi de Poisson P(λ) ?",
    back: "On utilise rd.poisson(lam) ou rd.poisson(lam, size=N) pour N réalisations.",
    backLatex: "\\text{rd.poisson(lam)}",
    category: "Loi de Poisson",
    difficulty: "facile"
  },

  // Loi uniforme discrète
  {
    id: 21,
    front: "Qu'est-ce qu'une loi uniforme discrète sur {a, a+1, ..., b} ?",
    back: "Tous les entiers de a à b ont la même probabilité 1/(b-a+1). C'est le modèle équiprobable discret.",
    frontLatex: "X \\sim \\mathcal{U}\\{a, ..., b\\}",
    backLatex: "P(X = k) = \\frac{1}{b-a+1} \\text{ pour } k \\in \\{a, ..., b\\}",
    category: "Loi Uniforme discrète",
    difficulty: "facile"
  },
  {
    id: 22,
    front: "Espérance d'une loi uniforme discrète sur {1, 2, ..., n}",
    back: "E(X) = (n+1)/2. C'est la moyenne arithmétique des valeurs extrêmes.",
    frontLatex: "X \\sim \\mathcal{U}\\{1, ..., n\\} \\Rightarrow ?",
    backLatex: "E(X) = \\frac{n+1}{2}",
    category: "Loi Uniforme discrète",
    difficulty: "moyen"
  },
  {
    id: 23,
    front: "En Python, comment générer une loi uniforme discrète sur {a, ..., b} ?",
    back: "On utilise rd.randint(a, b+1). Attention : b+1 car randint exclut la borne supérieure.",
    backLatex: "\\text{rd.randint(a, b+1)}",
    category: "Loi Uniforme discrète",
    difficulty: "facile"
  },

  // Histogrammes et visualisation
  {
    id: 24,
    front: "Qu'est-ce qu'un histogramme ?",
    back: "Un histogramme est une représentation graphique de la distribution d'une variable. Pour une v.a. discrète, il affiche des barres dont la hauteur est proportionnelle à P(X = k).",
    category: "Histogrammes",
    difficulty: "facile"
  },
  {
    id: 25,
    front: "En Python, comment tracer un histogramme d'un échantillon ?",
    back: "On utilise plt.hist(echantillon, bins=nb_classes, density=True) pour normaliser. Le paramètre density=True permet de comparer avec la densité théorique.",
    backLatex: "\\text{plt.hist(echantillon, bins=..., density=True)}",
    category: "Histogrammes",
    difficulty: "facile"
  },
  {
    id: 26,
    front: "Comment vérifier empiriquement l'espérance d'une loi ?",
    back: "On génère N réalisations de X (N grand), puis on calcule la moyenne empirique : np.mean(echantillon) ≈ E(X) par la loi des grands nombres.",
    backLatex: "\\frac{1}{N}\\sum_{i=1}^N X_i \\xrightarrow{N\\to\\infty} E(X)",
    category: "Histogrammes",
    difficulty: "moyen"
  },
  {
    id: 27,
    front: "Comment tracer un diagramme en bâtons pour une loi discrète ?",
    back: "On utilise plt.bar(valeurs, probabilites, width=0.5) où valeurs sont les k possibles et probabilites les P(X=k).",
    backLatex: "\\text{plt.bar(valeurs, probabilites, width=...)}",
    category: "Histogrammes",
    difficulty: "facile"
  },

  // Variables aléatoires continues (aperçu)
  {
    id: 28,
    front: "Qu'est-ce qu'une fonction de densité pour une v.a. continue ?",
    back: "Une fonction f(x) ≥ 0 telle que P(a ≤ X ≤ b) = ∫ₐᵇ f(x)dx et ∫₋∞⁺∞ f(x)dx = 1. La densité remplace les probabilités ponctuelles.",
    frontLatex: "P(a \\leq X \\leq b) = ?",
    backLatex: "P(a \\leq X \\leq b) = \\int_a^b f(x)dx",
    category: "Variables continues",
    difficulty: "difficile"
  },
  {
    id: 29,
    front: "Pourquoi P(X = x) = 0 pour une v.a. continue ?",
    back: "Car X peut prendre une infinité de valeurs dans un intervalle. La probabilité d'une valeur exacte est infinitésimale, donc nulle. On s'intéresse aux intervalles.",
    frontLatex: "P(X = x) = 0 \\text{ si } X \\text{ continue}",
    category: "Variables continues",
    difficulty: "moyen"
  },
  {
    id: 30,
    front: "Qu'est-ce qu'une loi exponentielle Exp(λ) ?",
    back: "Une v.a. continue X suit une loi exponentielle de paramètre λ > 0 si elle modélise une durée d'attente. Sa densité est f(x) = λe^(-λx) pour x ≥ 0. Propriété : E(X) = 1/λ.",
    frontLatex: "X \\sim \\text{Exp}(\\lambda)",
    backLatex: "f(x) = \\lambda e^{-\\lambda x}, \\quad E(X) = \\frac{1}{\\lambda}",
    category: "Variables continues",
    difficulty: "difficile"
  }
];

// Fonctions utilitaires pour filtrer les flashcards
export const getVariablesAleatoiresFlashcardsByCategory = (category: string): VariablesAleatoiresFlashcard[] => {
  return variablesAleatoiresFlashcards.filter(card => card.category === category);
};

export const getVariablesAleatoiresFlashcardsByDifficulty = (difficulty: 'facile' | 'moyen' | 'difficile'): VariablesAleatoiresFlashcard[] => {
  return variablesAleatoiresFlashcards.filter(card => card.difficulty === difficulty);
};

export const shuffleVariablesAleatoiresFlashcards = (cards: VariablesAleatoiresFlashcard[]): VariablesAleatoiresFlashcard[] => {
  const shuffled = [...cards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

