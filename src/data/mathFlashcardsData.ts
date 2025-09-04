export interface MathFlashcard {
  id: number;
  front: string;
  back: string;
  frontLatex?: string;
  backLatex?: string;
  category: string;
  chapter: number;
  difficulty: 'facile' | 'moyen' | 'difficile';
}

// Flashcards pour le chapitre 46 - Variables aléatoires à densité
export const variablesAleatoiresDensiteFlashcards: MathFlashcard[] = [
  {
    id: 1,
    front: "Définition d'une variable aléatoire à densité",
    back: "Une variable aléatoire X est dite à densité lorsque sa fonction de répartition F_X est continue sur ℝ et admet, sauf peut-être en un nombre fini de points, une dérivée continue.",
    frontLatex: "X \\text{ à densité} \\Leftrightarrow \\text{?}",
    backLatex: "F_X \\text{ continue sur } \\mathbb{R} \\text{ et dérivable p.p.}",
    category: "Définitions",
    chapter: 46,
    difficulty: "facile"
  },
  {
    id: 2,
    front: "Relation entre densité et fonction de répartition",
    back: "Si f_X est une densité de X, alors la fonction de répartition s'exprime comme l'intégrale de la densité.",
    frontLatex: "F_X(x) = \\text{?}",
    backLatex: "F_X(x) = \\int_{-\\infty}^{x} f_X(t) \\, dt",
    category: "Définitions",
    chapter: 46,
    difficulty: "facile"
  },
  {
    id: 3,
    front: "Caractérisation d'une densité - Conditions",
    back: "Une fonction g est une densité si et seulement si : g ≥ 0 sur ℝ, l'intégrale de g sur ℝ vaut 1, et g n'a qu'un nombre fini de discontinuités.",
    frontLatex: "g \\text{ densité} \\Leftrightarrow \\text{?}",
    backLatex: "g \\geq 0, \\quad \\int_{-\\infty}^{+\\infty} g(t) \\, dt = 1, \\quad g \\text{ fini de discontinuités}",
    category: "Caractérisation",
    chapter: 46,
    difficulty: "moyen"
  },
  {
    id: 4,
    front: "Probabilité d'une valeur exacte pour une v.a. continue",
    back: "Pour une variable aléatoire continue, la probabilité qu'elle prenne exactement une valeur donnée est toujours nulle.",
    frontLatex: "X \\text{ continue} \\Rightarrow \\mathbb{P}(X = x) = \\text{?}",
    backLatex: "\\mathbb{P}(X = x) = 0 \\quad \\forall x \\in \\mathbb{R}",
    category: "Propriétés",
    chapter: 46,
    difficulty: "facile"
  },
  {
    id: 5,
    front: "Calcul de probabilité avec la densité",
    back: "La probabilité que X soit dans un intervalle se calcule par l'intégrale de la densité sur cet intervalle.",
    frontLatex: "\\mathbb{P}(a < X \\leq b) = \\text{?}",
    backLatex: "\\mathbb{P}(a < X \\leq b) = \\int_a^b f_X(t) \\, dt = F_X(b) - F_X(a)",
    category: "Calculs",
    chapter: 46,
    difficulty: "moyen"
  },
  {
    id: 6,
    front: "Espérance d'une variable aléatoire à densité",
    back: "L'espérance d'une variable aléatoire à densité est l'intégrale de t multiplié par la densité.",
    frontLatex: "\\mathbb{E}(X) = \\text{?}",
    backLatex: "\\mathbb{E}(X) = \\int_{-\\infty}^{+\\infty} t \\, f_X(t) \\, dt",
    category: "Espérance",
    chapter: 46,
    difficulty: "moyen"
  },
  {
    id: 7,
    front: "Théorème de transfert (version continue)",
    back: "Pour calculer l'espérance d'une fonction g(X) sans connaître la loi de g(X).",
    frontLatex: "\\mathbb{E}(g(X)) = \\text{?}",
    backLatex: "\\mathbb{E}(g(X)) = \\int_{I} g(t) f_X(t) \\, dt \\quad \\text{où } I = \\operatorname{Supp}(X)",
    category: "Théorèmes",
    chapter: 46,
    difficulty: "difficile"
  },
  {
    id: 8,
    front: "Moment d'ordre 2",
    back: "Le moment d'ordre 2 (espérance du carré) pour une variable à densité.",
    frontLatex: "\\mathbb{E}(X^2) = \\text{?}",
    backLatex: "\\mathbb{E}(X^2) = \\int_{-\\infty}^{+\\infty} t^2 f_X(t) \\, dt",
    category: "Moments",
    chapter: 46,
    difficulty: "moyen"
  },
  {
    id: 9,
    front: "Variance avec la densité",
    back: "La variance s'exprime comme l'intégrale de l'écart au carré pondéré par la densité.",
    frontLatex: "\\operatorname{Var}(X) = \\text{?}",
    backLatex: "\\operatorname{Var}(X) = \\int_{-\\infty}^{+\\infty} (t - \\mathbb{E}(X))^2 f_X(t) \\, dt",
    category: "Variance",
    chapter: 46,
    difficulty: "moyen"
  },
  {
    id: 10,
    front: "Formule de Koenig-Huygens",
    back: "La formule de Koenig-Huygens exprime la variance comme la différence entre le moment d'ordre 2 et le carré de l'espérance.",
    frontLatex: "\\operatorname{Var}(X) = \\text{?}",
    backLatex: "\\operatorname{Var}(X) = \\mathbb{E}(X^2) - (\\mathbb{E}(X))^2",
    category: "Formules",
    chapter: 46,
    difficulty: "facile"
  },
  {
    id: 11,
    front: "Transformation affine - Espérance",
    back: "Pour une transformation affine Y = aX + b, l'espérance se transforme linéairement.",
    frontLatex: "Y = aX + b \\Rightarrow \\mathbb{E}(Y) = \\text{?}",
    backLatex: "\\mathbb{E}(Y) = a \\mathbb{E}(X) + b",
    category: "Transformations",
    chapter: 46,
    difficulty: "facile"
  },
  {
    id: 12,
    front: "Transformation affine - Variance",
    back: "Pour une transformation affine Y = aX + b, la variance est multipliée par le carré du coefficient.",
    frontLatex: "Y = aX + b \\Rightarrow \\operatorname{Var}(Y) = \\text{?}",
    backLatex: "\\operatorname{Var}(Y) = a^2 \\operatorname{Var}(X)",
    category: "Transformations",
    chapter: 46,
    difficulty: "facile"
  },
  {
    id: 13,
    front: "Variable centrée réduite - Définition",
    back: "Une variable est centrée réduite si son espérance est nulle et sa variance égale à 1.",
    frontLatex: "X \\text{ centrée réduite} \\Leftrightarrow \\text{?}",
    backLatex: "\\mathbb{E}(X) = 0 \\text{ et } \\operatorname{Var}(X) = 1",
    category: "Définitions",
    chapter: 46,
    difficulty: "facile"
  },
  {
    id: 14,
    front: "Variable centrée réduite associée",
    back: "La transformation pour obtenir la variable centrée réduite associée à X.",
    frontLatex: "X^* = \\text{?}",
    backLatex: "X^* = \\frac{X - \\mathbb{E}(X)}{\\sqrt{\\operatorname{Var}(X)}}",
    category: "Transformations",
    chapter: 46,
    difficulty: "moyen"
  },
  {
    id: 15,
    front: "Loi uniforme sur [a,b] - Densité",
    back: "La densité de la loi uniforme est constante sur l'intervalle.",
    frontLatex: "X \\sim \\mathcal{U}([a,b]) \\Rightarrow f(t) = \\text{?}",
    backLatex: "f(t) = \\begin{cases} \\frac{1}{b-a} & \\text{si } t \\in [a,b] \\\\ 0 & \\text{sinon} \\end{cases}",
    category: "Lois usuelles",
    chapter: 46,
    difficulty: "facile"
  },
  {
    id: 16,
    front: "Loi uniforme sur [a,b] - Espérance",
    back: "L'espérance de la loi uniforme est le milieu de l'intervalle.",
    frontLatex: "X \\sim \\mathcal{U}([a,b]) \\Rightarrow \\mathbb{E}(X) = \\text{?}",
    backLatex: "\\mathbb{E}(X) = \\frac{a+b}{2}",
    category: "Lois usuelles",
    chapter: 46,
    difficulty: "facile"
  },
  {
    id: 17,
    front: "Loi uniforme sur [a,b] - Variance",
    back: "La variance de la loi uniforme dépend de la longueur de l'intervalle.",
    frontLatex: "X \\sim \\mathcal{U}([a,b]) \\Rightarrow \\operatorname{Var}(X) = \\text{?}",
    backLatex: "\\operatorname{Var}(X) = \\frac{(b-a)^2}{12}",
    category: "Lois usuelles",
    chapter: 46,
    difficulty: "moyen"
  },
  {
    id: 18,
    front: "Loi exponentielle E(λ) - Densité",
    back: "La densité de la loi exponentielle décroît exponentiellement.",
    frontLatex: "X \\sim \\mathcal{E}(\\lambda) \\Rightarrow f(t) = \\text{?}",
    backLatex: "f(t) = \\begin{cases} \\lambda e^{-\\lambda t} & \\text{si } t \\geq 0 \\\\ 0 & \\text{si } t < 0 \\end{cases}",
    category: "Lois usuelles",
    chapter: 46,
    difficulty: "facile"
  },
  {
    id: 19,
    front: "Loi exponentielle E(λ) - Espérance",
    back: "L'espérance de la loi exponentielle est l'inverse du paramètre.",
    frontLatex: "X \\sim \\mathcal{E}(\\lambda) \\Rightarrow \\mathbb{E}(X) = \\text{?}",
    backLatex: "\\mathbb{E}(X) = \\frac{1}{\\lambda}",
    category: "Lois usuelles",
    chapter: 46,
    difficulty: "facile"
  },
  {
    id: 20,
    front: "Loi exponentielle - Propriété sans mémoire",
    back: "La propriété caractéristique de la loi exponentielle.",
    frontLatex: "\\mathbb{P}(X > t+h \\mid X > h) = \\text{?}",
    backLatex: "\\mathbb{P}(X > t+h \\mid X > h) = \\mathbb{P}(X > t)",
    category: "Propriétés",
    chapter: 46,
    difficulty: "difficile"
  },
  {
    id: 21,
    front: "Loi gamma γ(k) - Espérance et Variance",
    back: "Pour la loi gamma, l'espérance et la variance sont égales au paramètre k.",
    frontLatex: "X \\sim \\gamma(k) \\Rightarrow \\mathbb{E}(X) = \\text{?}, \\operatorname{Var}(X) = \\text{?}",
    backLatex: "\\mathbb{E}(X) = k \\text{ et } \\operatorname{Var}(X) = k",
    category: "Lois usuelles",
    chapter: 46,
    difficulty: "moyen"
  },
  {
    id: 22,
    front: "Loi normale N(m,σ²) - Densité",
    back: "La densité de la loi normale (gaussienne) générale.",
    frontLatex: "X \\sim \\mathcal{N}(m,\\sigma^2) \\Rightarrow f(t) = \\text{?}",
    backLatex: "f(t) = \\frac{1}{\\sigma\\sqrt{2\\pi}} \\exp\\left(-\\frac{(t-m)^2}{2\\sigma^2}\\right)",
    category: "Lois usuelles",
    chapter: 46,
    difficulty: "difficile"
  },
  {
    id: 23,
    front: "Loi normale centrée réduite N(0,1) - Densité",
    back: "La densité de la loi normale centrée réduite.",
    frontLatex: "Z \\sim \\mathcal{N}(0,1) \\Rightarrow \\varphi(t) = \\text{?}",
    backLatex: "\\varphi(t) = \\frac{1}{\\sqrt{2\\pi}} e^{-t^2/2}",
    category: "Lois usuelles",
    chapter: 46,
    difficulty: "moyen"
  },
  {
    id: 24,
    front: "Loi normale - Centrage et réduction",
    back: "Comment obtenir une loi normale centrée réduite à partir d'une loi normale générale.",
    frontLatex: "X \\sim \\mathcal{N}(m,\\sigma^2) \\Rightarrow \\frac{X-m}{\\sigma} \\sim \\text{?}",
    backLatex: "\\frac{X-m}{\\sigma} \\sim \\mathcal{N}(0,1)",
    category: "Transformations",
    chapter: 46,
    difficulty: "moyen"
  },
  {
    id: 25,
    front: "Récapitulatif des transformations affines",
    back: "Les lois uniforme, exponentielle et normale conservent leur nature par transformation affine.",
    frontLatex: "Y = aX + b \\text{ avec } X \\sim \\text{uniforme/exp/normale}",
    backLatex: "Y \\text{ suit la même famille de lois avec paramètres ajustés}",
    category: "Théorèmes",
    chapter: 46,
    difficulty: "moyen"
  }
];

// Export par chapitre pour faciliter l'accès
export const mathFlashcardsData = {
  chapitre46: variablesAleatoiresDensiteFlashcards
};

// Fonctions utilitaires
export const getFlashcardsByChapter = (chapter: number) => {
  const key = `chapitre${chapter}` as keyof typeof mathFlashcardsData;
  return mathFlashcardsData[key] || [];
};

export const getFlashcardsByCategory = (flashcards: MathFlashcard[], category: string) => {
  return flashcards.filter(card => card.category === category);
};

export const getFlashcardsByDifficulty = (flashcards: MathFlashcard[], difficulty: string) => {
  return flashcards.filter(card => card.difficulty === difficulty);
};

export const getUniqueCategories = (flashcards: MathFlashcard[]) => {
  return [...new Set(flashcards.map(card => card.category))];
};
