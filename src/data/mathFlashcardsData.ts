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

// Chapitre 1: Compléments d'algèbre linéaire
export const complementsAlgebreLineaireFlashcards: MathFlashcard[] = [
  {
    id: 100,
    front: "Définition d'un sous-espace vectoriel",
    back: "Un sous-ensemble V d'un espace vectoriel E est un sous-espace vectoriel si V est stable par addition et multiplication par un scalaire.",
    frontLatex: "V \\subset E \\text{ sous-espace} \\Leftrightarrow \\text{?}",
    backLatex: "\\forall u,v \\in V, \\lambda \\in \\mathbb{K}: u+v \\in V, \\lambda u \\in V",
    category: "Définitions",
    chapter: 1,
    difficulty: "facile"
  },
  {
    id: 101,
    front: "Famille génératrice",
    back: "Une famille (u₁, ..., uₚ) engendre un sous-espace vectoriel V si tout élément de V s'écrit comme combinaison linéaire finie des uᵢ.",
    frontLatex: "\\text{Famille génératrice de } V \\Leftrightarrow \\text{?}",
    backLatex: "V = \\operatorname{Vect}(u_1, \\dots, u_p)",
    category: "Génération",
    chapter: 1,
    difficulty: "facile"
  },
  {
    id: 102,
    front: "Base d'un espace vectoriel",
    back: "Une famille de vecteurs est une base si elle est libre et génératrice.",
    frontLatex: "\\text{Base de } V \\Leftrightarrow \\text{?}",
    backLatex: "\\text{libre et génératrice de } V",
    category: "Bases",
    chapter: 1,
    difficulty: "facile"
  },
  {
    id: 103,
    front: "Dimension d'un espace vectoriel",
    back: "La dimension d'un espace vectoriel est le nombre d'éléments d'une base.",
    frontLatex: "\\dim(V) = \\text{?}",
    backLatex: "\\dim(V) = \\operatorname{card}(\\mathcal{B}) \\text{ où } \\mathcal{B} \\text{ base de } V",
    category: "Dimension",
    chapter: 1,
    difficulty: "facile"
  },
  {
    id: 104,
    front: "Théorème de la base incomplète",
    back: "Dans un espace vectoriel de dimension finie, toute famille libre peut être complétée en une base.",
    frontLatex: "\\text{Théorème de la base incomplète}",
    backLatex: "\\text{Toute famille libre peut être complétée en base}",
    category: "Théorèmes",
    chapter: 1,
    difficulty: "moyen"
  },
  {
    id: 105,
    front: "Rang d'une famille de vecteurs",
    back: "Le rang d'une famille est la dimension du sous-espace vectoriel engendré par cette famille.",
    frontLatex: "\\operatorname{rg}(u_1, \\dots, u_p) = \\text{?}",
    backLatex: "\\dim(\\operatorname{Vect}(u_1, \\dots, u_p))",
    category: "Rang",
    chapter: 1,
    difficulty: "facile"
  },
  {
    id: 106,
    front: "Famille liée",
    back: "Une famille est liée s'il existe une relation de dépendance linéaire non triviale entre ses éléments.",
    frontLatex: "\\text{Famille liée} \\Leftrightarrow \\text{?}",
    backLatex: "\\exists \\lambda_i \\not=0: \\sum \\lambda_i u_i = 0",
    category: "Dépendance",
    chapter: 1,
    difficulty: "facile"
  },
  {
    id: 107,
    front: "Somme directe de sous-espaces",
    back: "La somme de deux sous-espaces est directe si leur intersection est réduite au vecteur nul.",
    frontLatex: "V \\oplus W = V + W \\text{ avec } V \\cap W = \\{0\\}",
    backLatex: "\\forall v \\in V \\cap W, v = 0",
    category: "Sommes",
    chapter: 1,
    difficulty: "moyen"
  },
  {
    id: 108,
    front: "Formule de Grassmann",
    back: "La dimension de la somme de deux sous-espaces est la somme des dimensions moins la dimension de leur intersection.",
    frontLatex: "\\dim(V + W) = \\text{?}",
    backLatex: "\\dim(V + W) = \\dim(V) + \\dim(W) - \\dim(V \\cap W)",
    category: "Formules",
    chapter: 1,
    difficulty: "moyen"
  },
  {
    id: 109,
    front: "Sous-espace orthogonal",
    back: "Le sous-espace orthogonal à un ensemble A est l'ensemble des vecteurs orthogonaux à tous les éléments de A.",
    frontLatex: "A^\\perp = \\text{?}",
    backLatex: "A^\\perp = \\{v \\in E \\mid \\forall u \\in A, \\langle u,v \\rangle = 0\\}",
    category: "Orthogonalité",
    chapter: 1,
    difficulty: "moyen"
  },
  {
    id: 110,
    front: "Projection orthogonale",
    back: "La projection orthogonale d'un vecteur sur un sous-espace est l'unique élément du sous-espace le plus proche de ce vecteur.",
    frontLatex: "\\operatorname{proj}_V(u) = \\text{?}",
    backLatex: "\\operatorname{proj}_V(u) \\in V, \\quad u - \\operatorname{proj}_V(u) \\in V^\\perp",
    category: "Projections",
    chapter: 1,
    difficulty: "difficile"
  }
];

// Chapitre 2: Endomorphismes et matrices
export const endomorphismesMatricesFlashcards: MathFlashcard[] = [
  {
    id: 200,
    front: "Définition d'un endomorphisme",
    back: "Un endomorphisme est une application linéaire d'un espace vectoriel dans lui-même.",
    frontLatex: "f: E \\to E \\text{ endomorphisme} \\Leftrightarrow \\text{?}",
    backLatex: "f \\text{ application linéaire}",
    category: "Définitions",
    chapter: 2,
    difficulty: "facile"
  },
  {
    id: 201,
    front: "Noyau d'un endomorphisme",
    back: "Le noyau d'un endomorphisme f est l'ensemble des vecteurs que f envoie sur le vecteur nul.",
    frontLatex: "\\operatorname{Ker}(f) = \\text{?}",
    backLatex: "\\operatorname{Ker}(f) = \\{x \\in E \\mid f(x) = 0\\}",
    category: "Noyau",
    chapter: 2,
    difficulty: "facile"
  },
  {
    id: 202,
    front: "Image d'un endomorphisme",
    back: "L'image d'un endomorphisme f est l'ensemble des images de tous les vecteurs de E.",
    frontLatex: "\\operatorname{Im}(f) = \\text{?}",
    backLatex: "\\operatorname{Im}(f) = f(E) = \\{f(x) \\mid x \\in E\\}",
    category: "Image",
    chapter: 2,
    difficulty: "facile"
  },
  {
    id: 203,
    front: "Théorème du rang",
    back: "Pour tout endomorphisme, la dimension du noyau plus la dimension de l'image égale la dimension de l'espace.",
    frontLatex: "\\dim(\\operatorname{Ker}(f)) + \\dim(\\operatorname{Im}(f)) = \\text{?}",
    backLatex: "\\dim(E)",
    category: "Théorèmes",
    chapter: 2,
    difficulty: "moyen"
  },
  {
    id: 204,
    front: "Endomorphisme injectif",
    back: "Un endomorphisme est injectif si et seulement si son noyau est réduit au vecteur nul.",
    frontLatex: "f \\text{ injectif} \\Leftrightarrow \\text{?}",
    backLatex: "\\operatorname{Ker}(f) = \\{0\\}",
    category: "Injectivité",
    chapter: 2,
    difficulty: "facile"
  },
  {
    id: 205,
    front: "Endomorphisme surjectif",
    back: "Un endomorphisme est surjectif si et seulement si son image est égale à l'espace tout entier.",
    frontLatex: "f \\text{ surjectif} \\Leftrightarrow \\text{?}",
    backLatex: "\\operatorname{Im}(f) = E",
    category: "Surjectivité",
    chapter: 2,
    difficulty: "facile"
  },
  {
    id: 206,
    front: "Endomorphisme bijectif",
    back: "Un endomorphisme est bijectif s'il est à la fois injectif et surjectif.",
    frontLatex: "f \\text{ bijectif} \\Leftrightarrow \\text{?}",
    backLatex: "f \\text{ injectif et surjectif}",
    category: "Bijectivité",
    chapter: 2,
    difficulty: "facile"
  },
  {
    id: 207,
    front: "Matrice d'un endomorphisme",
    back: "Dans une base donnée, la matrice d'un endomorphisme contient les coordonnées des images des vecteurs de base.",
    frontLatex: "M_B(f) = \\text{?}",
    backLatex: "M_B(f) = (\\operatorname{Mat}_B(f(e_j)))_{i,j}",
    category: "Matrices",
    chapter: 2,
    difficulty: "moyen"
  },
  {
    id: 208,
    front: "Trace d'une matrice",
    back: "La trace d'une matrice carrée est la somme de ses éléments diagonaux.",
    frontLatex: "\\operatorname{tr}(A) = \\text{?}",
    backLatex: "\\sum_{i=1}^n a_{ii}",
    category: "Trace",
    chapter: 2,
    difficulty: "facile"
  },
  {
    id: 209,
    front: "Déterminant d'une matrice",
    back: "Le déterminant est une fonction qui associe à chaque matrice carrée un scalaire avec des propriétés importantes.",
    frontLatex: "\\det(A) \\in \\mathbb{K}",
    backLatex: "\\det(I) = 1, \\quad \\det(AB) = \\det(A)\\det(B)",
    category: "Déterminant",
    chapter: 2,
    difficulty: "moyen"
  },
  {
    id: 210,
    front: "Valeurs propres",
    back: "Un scalaire λ est valeur propre d'un endomorphisme f si il existe un vecteur non nul tel que f(u) = λu.",
    frontLatex: "\\lambda \\text{ valeur propre} \\Leftrightarrow \\text{?}",
    backLatex: "\\exists u \\neq 0, f(u) = \\lambda u",
    category: "Valeurs propres",
    chapter: 2,
    difficulty: "moyen"
  },
  {
    id: 211,
    front: "Vecteurs propres",
    back: "Un vecteur propre associé à une valeur propre λ vérifie f(u) = λu.",
    frontLatex: "u \\text{ vecteur propre} \\Leftrightarrow \\text{?}",
    backLatex: "f(u) = \\lambda u",
    category: "Vecteurs propres",
    chapter: 2,
    difficulty: "facile"
  },
  {
    id: 212,
    front: "Sous-espace propre",
    back: "Le sous-espace propre associé à λ est l'ensemble des vecteurs propres pour cette valeur propre, plus le vecteur nul.",
    frontLatex: "E_\\lambda = \\text{?}",
    backLatex: "E_\\lambda = \\operatorname{Ker}(f - \\lambda \\operatorname{Id})",
    category: "Sous-espaces propres",
    chapter: 2,
    difficulty: "moyen"
  }
];

// Chapitre 3: Algèbre bilinéaire
export const algebreBilineaireFlashcards: MathFlashcard[] = [
  {
    id: 300,
    front: "Forme bilinéaire",
    back: "Une forme bilinéaire est une application b: E×E → K qui est linéaire par rapport à chacun de ses arguments.",
    frontLatex: "b: E \\times E \\to \\mathbb{K} \\text{ bilinéaire} \\Leftrightarrow \\text{?}",
    backLatex: "\\forall x,y,z \\in E, \\lambda \\in \\mathbb{K}: b(\\lambda x, y) = \\lambda b(x,y), \\dots",
    category: "Définitions",
    chapter: 3,
    difficulty: "facile"
  },
  {
    id: 301,
    front: "Forme bilinéaire symétrique",
    back: "Une forme bilinéaire est symétrique si b(x,y) = b(y,x) pour tous x,y dans E.",
    frontLatex: "b \\text{ symétrique} \\Leftrightarrow \\text{?}",
    backLatex: "\\forall x,y \\in E, b(x,y) = b(y,x)",
    category: "Symétrie",
    chapter: 3,
    difficulty: "facile"
  },
  {
    id: 302,
    front: "Forme quadratique associée",
    back: "À toute forme bilinéaire symétrique, on peut associer une forme quadratique q(x) = b(x,x).",
    frontLatex: "q(x) = \\text{?}",
    backLatex: "q(x) = b(x,x)",
    category: "Formes quadratiques",
    chapter: 3,
    difficulty: "facile"
  },
  {
    id: 303,
    front: "Matrice d'une forme bilinéaire",
    back: "Dans une base donnée, la matrice d'une forme bilinéaire contient b(eᵢ,eⱼ) à la position (i,j).",
    frontLatex: "A = (a_{ij}) \\text{ avec } a_{ij} = \\text{?}",
    backLatex: "a_{ij} = b(e_i, e_j)",
    category: "Matrices",
    chapter: 3,
    difficulty: "moyen"
  },
  {
    id: 304,
    front: "Signature d'une forme quadratique",
    back: "La signature d'une forme quadratique est le triplet (p,n,z) où p est le nombre de +, n le nombre de -, z le nombre de zéros.",
    frontLatex: "\\text{Signature} = (p,n,z)",
    backLatex: "p = \\text{nb valeurs propres >0, } n = \\text{nb <0, } z = \\text{nb =0}",
    category: "Signature",
    chapter: 3,
    difficulty: "moyen"
  },
  {
    id: 305,
    front: "Réduction de Gauss",
    back: "La réduction de Gauss permet d'obtenir une forme diagonale pour une forme quadratique.",
    frontLatex: "\\text{Réduction de Gauss}",
    backLatex: "\\text{Complétions de carrés pour obtenir forme diagonale}",
    category: "Réduction",
    chapter: 3,
    difficulty: "difficile"
  },
  {
    id: 306,
    front: "Forme bilinéaire non dégénérée",
    back: "Une forme bilinéaire est non dégénérée si son noyau est réduit au vecteur nul.",
    frontLatex: "b \\text{ non dégénérée} \\Leftrightarrow \\text{?}",
    backLatex: "\\forall x \\neq 0, \\exists y: b(x,y) \\neq 0",
    category: "Dégénérescence",
    chapter: 3,
    difficulty: "moyen"
  }
];

// Chapitre 4: Fonctions multivariées
export const fonctionsMultivarieesFlashcards: MathFlashcard[] = [
  {
    id: 400,
    front: "Fonction de plusieurs variables",
    back: "Une fonction f: D ⊂ ℝⁿ → ℝⁿ est une application qui associe à chaque point de D un point de ℝⁿ.",
    frontLatex: "f: \\mathbb{R}^n \\to \\mathbb{R}^m",
    backLatex: "(x_1, \\dots, x_n) \\mapsto (f_1(x), \\dots, f_m(x))",
    category: "Définitions",
    chapter: 4,
    difficulty: "facile"
  },
  {
    id: 401,
    front: "Continuité en un point",
    back: "f est continue en a si pour tout ε > 0, il existe η > 0 tel que ||x - a|| < η ⇒ ||f(x) - f(a)|| < ε.",
    frontLatex: "f \\text{ continue en } a \\Leftrightarrow \\text{?}",
    backLatex: "\\forall \\epsilon > 0, \\exists \\eta > 0: \\|x - a\\| < \\eta \\implies \\|f(x) - f(a)\\| < \\epsilon",
    category: "Continuité",
    chapter: 4,
    difficulty: "moyen"
  },
  {
    id: 402,
    front: "Dérivée partielle",
    back: "La dérivée partielle par rapport à xᵢ est la dérivée de f en gardant les autres variables fixes.",
    frontLatex: "\\frac{\\partial f}{\\partial x_i}(a) = \\text{?}",
    backLatex: "\\lim_{h \\to 0} \\frac{f(a + h e_i) - f(a)}{h}",
    category: "Dérivées partielles",
    chapter: 4,
    difficulty: "facile"
  },
  {
    id: 403,
    front: "Différentielle",
    back: "La différentielle df(a) est l'application linéaire dont la matrice dans la base canonique a pour colonnes les dérivées partielles.",
    frontLatex: "df(a) \\cdot h = \\text{?}",
    backLatex: "\\sum_{i=1}^n \\frac{\\partial f}{\\partial x_i}(a) h_i",
    category: "Différentielle",
    chapter: 4,
    difficulty: "moyen"
  },
  {
    id: 404,
    front: "Fonction différentiable",
    back: "f est différentiable en a si f(a+h) = f(a) + df(a)·h + o(||h||).",
    frontLatex: "f \\text{ différentiable en } a \\Leftrightarrow \\text{?}",
    backLatex: "f(a+h) - f(a) - df(a)\\cdot h = o(\\|h\\|)",
    category: "Différentiabilité",
    chapter: 4,
    difficulty: "moyen"
  },
  {
    id: 405,
    front: "Théorème des fonctions composées",
    back: "La dérivée de g∘f est la composée des différentielles.",
    frontLatex: "d(g \\circ f)(a) = \\text{?}",
    backLatex: "dg(f(a)) \\circ df(a)",
    category: "Composition",
    chapter: 4,
    difficulty: "moyen"
  },
  {
    id: 406,
    front: "Extremum local",
    back: "Un point a est un extremum local de f si f(a) est plus petit/grand que f(x) dans un voisinage de a.",
    frontLatex: "a \\text{ extremum local} \\Leftrightarrow \\text{?}",
    backLatex: "\\exists V \\text{ voisinage}: \\forall x \\in V, f(x) \\geq f(a) \\text{ ou } \\leq",
    category: "Extremums",
    chapter: 4,
    difficulty: "facile"
  },
  {
    id: 407,
    front: "Condition nécessaire d'ordre 1",
    back: "Si f admet un extremum local en a et est différentiable, alors ∇f(a) = 0.",
    frontLatex: "\\text{Condition nécessaire d'ordre 1}",
    backLatex: "\\nabla f(a) = 0",
    category: "Conditions d'extremum",
    chapter: 4,
    difficulty: "moyen"
  },
  {
    id: 408,
    front: "Condition suffisante d'ordre 2",
    back: "Si la matrice hessienne est définie positive en a, alors a est un minimum local.",
    frontLatex: "\\text{Condition suffisante d'ordre 2}",
    backLatex: "\\text{Si Hessienne définie positive } \\implies \\text{minimum local}",
    category: "Conditions d'extremum",
    chapter: 4,
    difficulty: "difficile"
  }
];


// Chapitre 8: Algèbre bilinéaire et espaces euclidiens
export const algebreBilineaireEspacesEuclidiensFlashcards: MathFlashcard[] = [
  {
    id: 800,
    front: "Espace euclidien",
    back: "Un espace euclidien est un espace vectoriel réel de dimension finie muni d'un produit scalaire ⟨·,·⟩.",
    frontLatex: "Espace euclidien \\Leftrightarrow \\text{?}",
    backLatex: "E \\text{ réel dim finie} + \\text{ produit scalaire } \\langle \\cdot, \\cdot \\rangle",
    category: "Définitions",
    chapter: 8,
    difficulty: "facile"
  },
  {
    id: 801,
    front: "Famille orthonormée",
    back: "Une famille est orthonormée si elle est orthogonale et que chaque vecteur est de norme 1.",
    frontLatex: "\\text{Famille orthonormée} \\Leftrightarrow \\text{?}",
    backLatex: "\\text{orthogonale} + \\forall i, \\|u_i\\| = 1",
    category: "Définitions",
    chapter: 8,
    difficulty: "facile"
  },
  {
    id: 802,
    front: "Existence de bases orthonormées",
    back: "Dans un espace euclidien, toute famille orthonormée peut être complétée en une base orthonormée.",
    frontLatex: "\\text{Complétion en base orthonormée}",
    backLatex: "\\text{Toute famille orthonormée peut être complétée}",
    category: "Théorèmes",
    chapter: 8,
    difficulty: "moyen"
  },
  {
    id: 803,
    front: "Coordonnées dans une base orthonormée",
    back: "Dans une base orthonormée, les coordonnées d'un vecteur x sont les produits scalaires avec les vecteurs de base.",
    frontLatex: "x = \\sum x_i e_i \\Rightarrow x_i = \\text{?}",
    backLatex: "x_i = \\langle x, e_i \\rangle",
    category: "Formules",
    chapter: 8,
    difficulty: "facile"
  },
  {
    id: 804,
    front: "Produit scalaire dans une base orthonormée",
    back: "Le produit scalaire de deux vecteurs est la somme des produits de leurs coordonnées.",
    frontLatex: "x = \\sum x_i e_i, y = \\sum y_i e_i \\Rightarrow \\langle x,y \\rangle = \\text{?}",
    backLatex: "\\langle x,y \\rangle = \\sum_{i=1}^n x_i y_i = X^T Y",
    category: "Formules",
    chapter: 8,
    difficulty: "facile"
  },
  {
    id: 805,
    front: "Norme dans une base orthonormée",
    back: "La norme d'un vecteur est la racine carrée de la somme des carrés de ses coordonnées.",
    frontLatex: "x = \\sum x_i e_i \\Rightarrow \\|x\\|^2 = \\text{?}",
    backLatex: "\\|x\\|^2 = \\sum_{i=1}^n x_i^2 = X^T X",
    category: "Formules",
    chapter: 8,
    difficulty: "facile"
  },
  {
    id: 806,
    front: "Matrice orthogonale - Définition",
    back: "Une matrice est orthogonale si ses colonnes forment une base orthonormée de ℝⁿ.",
    frontLatex: "M \\text{ orthogonale} \\Leftrightarrow \\text{?}",
    backLatex: "\\text{Colonnes de } M \\text{ forment base orthonormée de } \\mathbb{R}^n",
    category: "Matrices orthogonales",
    chapter: 8,
    difficulty: "moyen"
  },
  {
    id: 807,
    front: "Matrice de passage et orthogonalité",
    back: "Une base B' est orthonormée si et seulement si la matrice de passage de B vers B' est orthogonale.",
    frontLatex: "B' \\text{ orthonormée} \\iff P_{B,B'} \\text{?}",
    backLatex: "B' \\text{ orthonormée} \\iff P_{B,B'} \\text{ orthogonale}",
    category: "Matrices orthogonales",
    chapter: 8,
    difficulty: "moyen"
  },
  {
    id: 808,
    front: "Propriété des matrices orthogonales",
    back: "Si M est orthogonale, alors M⁻¹ = Mᵀ.",
    frontLatex: "M \\text{ orthogonale} \\Rightarrow M^{-1} = \\text{?}",
    backLatex: "M^{-1} = M^T",
    category: "Propriétés",
    chapter: 8,
    difficulty: "facile"
  },
  {
    id: 809,
    front: "Produit scalaire préservé",
    back: "Une matrice orthogonale préserve le produit scalaire canonique.",
    frontLatex: "M \\text{ orthogonale} \\Rightarrow \\langle Mx, My \\rangle = \\text{?}",
    backLatex: "\\langle Mx, My \\rangle = \\langle x, y \\rangle",
    category: "Propriétés",
    chapter: 8,
    difficulty: "moyen"
  },
  {
    id: 810,
    front: "Norme préservée",
    back: "Une matrice orthogonale préserve la norme.",
    frontLatex: "M \\text{ orthogonale} \\Rightarrow \\|Mx\\| = \\text{?}",
    backLatex: "\\|Mx\\| = \\|x\\|",
    category: "Propriétés",
    chapter: 8,
    difficulty: "facile"
  },
  {
    id: 811,
    front: "Déterminant d'une matrice orthogonale",
    back: "Le déterminant d'une matrice orthogonale vaut ±1.",
    frontLatex: "M \\text{ orthogonale} \\Rightarrow \\det(M) = \\text{?}",
    backLatex: "\\det(M) = \\pm 1",
    category: "Propriétés",
    chapter: 8,
    difficulty: "moyen"
  }
];

// Chapitre 9: Matrices et espaces vectoriels
export const matricesEspacesVectorielsFlashcards: MathFlashcard[] = [
  {
    id: 900,
    front: "Définition d'une matrice",
    back: "Une matrice A = (aᵢⱼ) est un tableau à n lignes et p colonnes avec des coefficients dans ℝ.",
    frontLatex: "A \\in \\mathcal{M}_{n,p}(\\mathbb{R}) \\Leftrightarrow \\text{?}",
    backLatex: "A = (a_{i,j})_{1 \\leq i \\leq n, 1 \\leq j \\leq p}",
    category: "Définitions",
    chapter: 9,
    difficulty: "facile"
  },
  {
    id: 901,
    front: "Somme de matrices",
    back: "La somme de deux matrices de mêmes dimensions se fait coefficient par coefficient.",
    frontLatex: "C = A + B \\Rightarrow c_{i,j} = \\text{?}",
    backLatex: "c_{i,j} = a_{i,j} + b_{i,j}",
    category: "Opérations",
    chapter: 9,
    difficulty: "facile"
  },
  {
    id: 902,
    front: "Produit matriciel",
    back: "Le produit AB se calcule par cᵢⱼ = Σₖ aᵢₖ bₖⱼ.",
    frontLatex: "(AB)_{i,j} = \\text{?}",
    backLatex: "\\sum_{k=1}^p a_{i,k} b_{k,j}",
    category: "Opérations",
    chapter: 9,
    difficulty: "facile"
  },
  {
    id: 903,
    front: "Matrice identité",
    back: "La matrice identité Iₙ satisfait AIₙ = IₙA = A pour toute matrice carrée A.",
    frontLatex: "I_n \\text{ identité} \\Leftrightarrow \\text{?}",
    backLatex: "AI_n = I_n A = A \\quad \\forall A \\in \\mathcal{M}_n(\\mathbb{R})",
    category: "Matrices spéciales",
    chapter: 9,
    difficulty: "facile"
  },
  {
    id: 904,
    front: "Transposée d'une matrice",
    back: "La transposée ⁵A a pour coefficients aⱼᵢ = aᵢⱼ.",
    frontLatex: "{}^t A = \\text{?}",
    backLatex: "({}^t A)_{i,j} = a_{j,i}",
    category: "Opérations",
    chapter: 9,
    difficulty: "facile"
  },
  {
    id: 905,
    front: "Propriétés de la transposée",
    back: "La transposée est linéaire et satisfait (AB)ᵀ = BᵀAᵀ.",
    frontLatex: "{}^t (AB) = \\text{?}",
    backLatex: "{}^t (AB) = {}^t B \\ {}^t A",
    category: "Propriétés",
    chapter: 9,
    difficulty: "moyen"
  },
  {
    id: 906,
    front: "Matrice inversible",
    back: "Une matrice carrée A est inversible s'il existe A⁻¹ telle que AA⁻¹ = Iₙ.",
    frontLatex: "A \\text{ inversible} \\Leftrightarrow \\text{?}",
    backLatex: "\\exists A^{-1} \\in \\mathcal{M}_n(\\mathbb{R}), \\quad AA^{-1} = A^{-1}A = I_n",
    category: "Matrices inversibles",
    chapter: 9,
    difficulty: "facile"
  },
  {
    id: 907,
    front: "Inverse d'une matrice 2×2",
    back: "Pour A = [a b ; c d], si det(A) ≠ 0, alors A⁻¹ = (1/det(A)) × [d -b ; -c a].",
    frontLatex: "A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} \\Rightarrow A^{-1} = \\text{?}",
    backLatex: "\\frac{1}{ad-bc} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix}",
    category: "Matrices inversibles",
    chapter: 9,
    difficulty: "moyen"
  },
  {
    id: 908,
    front: "Système linéaire",
    back: "Un système AX = B avec A ∈ ℳₙₚ(ℝ), X ∈ ℳₚ₁(ℝ), B ∈ ℳₙ₁(ℝ).",
    frontLatex: "\\text{Système } AX = B \\text{ avec } A \\in \\text{?}",
    backLatex: "A \\in \\mathcal{M}_{n,p}(\\mathbb{R}), \\ X \\in \\mathcal{M}_{p,1}(\\mathbb{R}), \\ B \\in \\mathcal{M}_{n,1}(\\mathbb{R})",
    category: "Systèmes linéaires",
    chapter: 9,
    difficulty: "facile"
  },
  {
    id: 909,
    front: "Pivot de Gauss",
    back: "Un système n×n est de Cramer si ses pivots sont non nuls après échelonnement.",
    frontLatex: "\\text{Système de Cramer} \\Leftrightarrow \\text{?}",
    backLatex: "\\text{Pivots non nuls après échelonnement}",
    category: "Résolution",
    chapter: 9,
    difficulty: "moyen"
  },
  {
    id: 910,
    front: "Gauss-Jordan",
    back: "La méthode Gauss-Jordan transforme la matrice augmentée [A|B] en [I|C] donnant la solution.",
    frontLatex: "\\text{Gauss-Jordan donne } [A|B] \\to \\text{?}",
    backLatex: "[I_n | C] \\text{ donc } X = C",
    category: "Résolution",
    chapter: 9,
    difficulty: "moyen"
  },
  {
    id: 911,
    front: "Espace vectoriel",
    back: "Un espace vectoriel (E, +, ·) a (E, +) abélien et λ(x+y) = λx + λy avec le neutre 0ₑ.",
    frontLatex: "Espace vectoriel \\Leftrightarrow \\text{?}",
    backLatex: "(E,+) \\text{ abélien}, \\ \\lambda(x+y) = \\lambda x + \\lambda y, \\ 0_E \\text{ neutre}",
    category: "Espaces vectoriels",
    chapter: 9,
    difficulty: "moyen"
  },
  {
    id: 912,
    front: "Combinaison linéaire",
    back: "Un vecteur x est combinaison linéaire de f₁,...,fₚ si x = Σⱼ λⱼ fⱼ.",
    frontLatex: "x \\text{ combinaison linéaire} \\Leftrightarrow \\text{?}",
    backLatex: "\\exists \\lambda_1, \\dots, \\lambda_p: x = \\sum_{j=1}^p \\lambda_j f_j",
    category: "Génération",
    chapter: 9,
    difficulty: "facile"
  },
  {
    id: 913,
    front: "Base d'un espace vectoriel",
    back: "Une famille est une base si elle est libre et génératrice.",
    frontLatex: "\\text{Base de } E \\Leftrightarrow \\text{?}",
    backLatex: "\\text{libre et génératrice de } E",
    category: "Bases",
    chapter: 9,
    difficulty: "facile"
  },
  {
    id: 914,
    front: "Dimension d'un espace vectoriel",
    back: "La dimension de E est le cardinal d'une base de E.",
    frontLatex: "\\dim E = \\text{?}",
    backLatex: "\\dim E = \\operatorname{card}(\\mathcal{B}) \\text{ où } \\mathcal{B} \\text{ base de } E",
    category: "Dimension",
    chapter: 9,
    difficulty: "facile"
  },
  {
    id: 915,
    front: "Rang d'une famille",
    back: "Le rang d'une famille est la dimension du sous-espace vectoriel engendré par cette famille.",
    frontLatex: "\\operatorname{rg}(v_1, \\dots, v_k) = \\text{?}",
    backLatex: "\\dim \\operatorname{Vect}(v_1, \\dots, v_k)",
    category: "Rang",
    chapter: 9,
    difficulty: "facile"
  }
];

// Chapitre 5: Fonctions d'une variable réelle
export const fonctionsUneVariableReelleFlashcards: MathFlashcard[] = [
  {
    id: 550,
    front: "Fonction paire",
    back: "Une fonction f est paire si f(-x) = f(x) pour tout x dans le domaine.",
    frontLatex: "f \\text{ paire} \\Leftrightarrow \\text{?}",
    backLatex: "f(-x) = f(x) \\quad \\forall x \\in D_f",
    category: "Parité",
    chapter: 5,
    difficulty: "facile"
  },
  {
    id: 551,
    front: "Fonction impaire",
    back: "Une fonction f est impaire si f(-x) = -f(x) pour tout x dans le domaine.",
    frontLatex: "f \\text{ impaire} \\Leftrightarrow \\text{?}",
    backLatex: "f(-x) = -f(x) \\quad \\forall x \\in D_f",
    category: "Parité",
    chapter: 5,
    difficulty: "facile"
  },
  {
    id: 552,
    front: "Fonction périodique",
    back: "Une fonction f est périodique de période T si f(x+T) = f(x) pour tout x.",
    frontLatex: "f \\text{ périodique de période } T \\Leftrightarrow \\text{?}",
    backLatex: "f(x+T) = f(x) \\quad \\forall x \\in D_f",
    category: "Périodicité",
    chapter: 5,
    difficulty: "facile"
  },
  {
    id: 553,
    front: "Fonction majorée",
    back: "Une fonction f est majorée s'il existe M tel que f(x) ≤ M pour tout x.",
    frontLatex: "f \\text{ majorée} \\Leftrightarrow \\text{?}",
    backLatex: "\\exists M \\in \\mathbb{R}, \\forall x \\in D_f : f(x) \\leq M",
    category: "Bornes",
    chapter: 5,
    difficulty: "facile"
  },
  {
    id: 554,
    front: "Fonction minorée",
    back: "Une fonction f est minorée s'il existe m tel que f(x) ≥ m pour tout x.",
    frontLatex: "f \\text{ minorée} \\Leftrightarrow \\text{?}",
    backLatex: "\\exists m \\in \\mathbb{R}, \\forall x \\in D_f : f(x) \\geq m",
    category: "Bornes",
    chapter: 5,
    difficulty: "facile"
  },
  {
    id: 555,
    front: "Fonction croissante",
    back: "Une fonction f est croissante si x₁ < x₂ ⟹ f(x₁) ≤ f(x₂).",
    frontLatex: "f \\text{ croissante} \\Leftrightarrow \\text{?}",
    backLatex: "x_1 < x_2 \\implies f(x_1) \\leq f(x_2)",
    category: "Variations",
    chapter: 5,
    difficulty: "facile"
  },
  {
    id: 556,
    front: "Limite finie en un point",
    back: "lim_{x→a} f(x) = ℓ si pour tout ε > 0, il existe α > 0 tel que |x-a| < α ⟹ |f(x)-ℓ| < ε.",
    frontLatex: "\\lim_{x \\to a} f(x) = \\ell \\Leftrightarrow \\text{?}",
    backLatex: "\\forall \\varepsilon > 0, \\exists \\alpha > 0 : |x-a| < \\alpha \\implies |f(x)-\\ell| < \\varepsilon",
    category: "Limites",
    chapter: 5,
    difficulty: "moyen"
  },
  {
    id: 557,
    front: "Continuité en un point",
    back: "f est continue en a si lim_{x→a} f(x) = f(a).",
    frontLatex: "f \\text{ continue en } a \\Leftrightarrow \\text{?}",
    backLatex: "\\lim_{x \\to a} f(x) = f(a)",
    category: "Continuité",
    chapter: 5,
    difficulty: "facile"
  },
  {
    id: 558,
    front: "Théorème des valeurs intermédiaires",
    back: "Si f est continue sur [a,b] et k est entre f(a) et f(b), alors ∃c∈[a,b] : f(c) = k.",
    frontLatex: "\\text{TVI : } f \\text{ continue sur } [a,b] \\implies \\text{?}",
    backLatex: "\\forall k \\text{ entre } f(a) \\text{ et } f(b), \\exists c \\in [a,b] : f(c) = k",
    category: "Théorèmes",
    chapter: 5,
    difficulty: "moyen"
  },
  {
    id: 559,
    front: "Théorème de Weierstrass",
    back: "Toute fonction continue sur un segment [a,b] atteint ses bornes.",
    frontLatex: "\\text{Weierstrass : } f \\text{ continue sur } [a,b] \\implies \\text{?}",
    backLatex: "\\exists x_1, x_2 \\in [a,b] : f(x_1) = \\min f, f(x_2) = \\max f",
    category: "Théorèmes",
    chapter: 5,
    difficulty: "moyen"
  },
  {
    id: 560,
    front: "Bijection continue",
    back: "Une fonction continue et strictement monotone sur un intervalle est une bijection vers son image.",
    frontLatex: "f \\text{ continue et strictement monotone} \\implies \\text{?}",
    backLatex: "f : I \\to f(I) \\text{ bijective}",
    category: "Bijections",
    chapter: 5,
    difficulty: "moyen"
  },
  {
    id: 561,
    front: "Fonction cosinus",
    back: "cos est paire, périodique de période 2π, cos(0) = 1, cos(π/2) = 0.",
    frontLatex: "\\text{Propriétés de } \\cos",
    backLatex: "\\cos(-x) = \\cos(x), \\cos(x+2\\pi) = \\cos(x), \\cos(0) = 1",
    category: "Fonctions usuelles",
    chapter: 5,
    difficulty: "facile"
  },
  {
    id: 562,
    front: "Fonction sinus",
    back: "sin est impaire, périodique de période 2π, sin(0) = 0, sin(π/2) = 1.",
    frontLatex: "\\text{Propriétés de } \\sin",
    backLatex: "\\sin(-x) = -\\sin(x), \\sin(x+2\\pi) = \\sin(x), \\sin(0) = 0",
    category: "Fonctions usuelles",
    chapter: 5,
    difficulty: "facile"
  }
];

// Chapitre 10: Probabilités et conditionnement
export const probabilitesConditionnementFlashcards: MathFlashcard[] = [
  {
    id: 1000,
    front: "Espace probabilisé",
    back: "Un espace probabilisé est un triplet (Ω, ℱ, ℙ) où ℱ est une tribu sur Ω et ℙ une probabilité sur ℱ.",
    frontLatex: "(\\Omega, \\mathcal{F}, \\mathbb{P}) \\text{ espace probabilisé} \\Leftrightarrow \\text{?}",
    backLatex: "\\mathcal{F} \\text{ tribu sur } \\Omega, \\ \\mathbb{P} \\text{ probabilité sur } \\mathcal{F}",
    category: "Définitions",
    chapter: 10,
    difficulty: "facile"
  },
  {
    id: 1001,
    front: "Tribu",
    back: "Une tribu ℱ sur Ω est un système d'événements contenant Ω et fermé par complémentaire et union dénombrable.",
    frontLatex: "\\mathcal{F} \\text{ tribu sur } \\Omega \\Leftrightarrow \\text{?}",
    backLatex: "\\Omega \\in \\mathcal{F}, \\ A \\in \\mathcal{F} \\implies A^\\complement \\in \\mathcal{F}, \\ \\bigcup A_n \\in \\mathcal{F}",
    category: "Définitions",
    chapter: 10,
    difficulty: "moyen"
  },
  {
    id: 1002,
    front: "Probabilité",
    back: "Une probabilité ℙ sur une tribu ℱ vérifie ℙ(Ω) = 1 et ℙ(∪Aᵢ) = Σℙ(Aᵢ) pour événements incompatibles.",
    frontLatex: "\\mathbb{P} \\text{ probabilité} \\Leftrightarrow \\text{?}",
    backLatex: "\\mathbb{P}(\\Omega) = 1, \\ \\mathbb{P}(\\bigcup A_i) = \\sum \\mathbb{P}(A_i) \\text{ incompatibles}",
    category: "Définitions",
    chapter: 10,
    difficulty: "facile"
  },
  {
    id: 1003,
    front: "Événements remarquables",
    back: "Événements particuliers : Ω (certain), ∅ (impossible), {ω} (élémentaire).",
    frontLatex: "\\text{Événements remarquables}",
    backLatex: "\\Omega \\text{ certain}, \\ \\emptyset \\text{ impossible}, \\ \\{\\omega\\} \\text{ élémentaire}",
    category: "Définitions",
    chapter: 10,
    difficulty: "facile"
  },
  {
    id: 1004,
    front: "Théorème de limite monotone (croissante)",
    back: "Si Aₙ ↑ (suite croissante), alors ℙ(∪Aₙ) = lim ℙ(Aₙ).",
    frontLatex: "A_n \\uparrow \\implies \\text{?}",
    backLatex: "\\mathbb{P}(\\bigcup A_n) = \\lim \\mathbb{P}(A_n)",
    category: "Théorèmes",
    chapter: 10,
    difficulty: "moyen"
  },
  {
    id: 1005,
    front: "Théorème de limite monotone (décroissante)",
    back: "Si Aₙ ↓ (suite décroissante), alors ℙ(∩Aₙ) = lim ℙ(Aₙ).",
    frontLatex: "A_n \\downarrow \\implies \\text{?}",
    backLatex: "\\mathbb{P}(\\bigcap A_n) = \\lim \\mathbb{P}(A_n)",
    category: "Théorèmes",
    chapter: 10,
    difficulty: "moyen"
  },
  {
    id: 1006,
    front: "Formule du crible (2 événements)",
    back: "ℙ(A∪B) = ℙ(A) + ℙ(B) - ℙ(A∩B).",
    frontLatex: "\\mathbb{P}(A \\cup B) = \\text{?}",
    backLatex: "\\mathbb{P}(A) + \\mathbb{P}(B) - \\mathbb{P}(A \\cap B)",
    category: "Formules",
    chapter: 10,
    difficulty: "facile"
  },
  {
    id: 1007,
    front: "Équiprobabilité",
    back: "Dans un univers fini avec équiprobabilité, ℙ(A) = |A|/|Ω|.",
    frontLatex: "\\text{Équiprobabilité} \\implies \\mathbb{P}(A) = \\text{?}",
    backLatex: "\\mathbb{P}(A) = \\frac{|A|}{|\\Omega|}",
    category: "Formules",
    chapter: 10,
    difficulty: "facile"
  },
  {
    id: 1008,
    front: "Probabilité conditionnelle",
    back: "Si ℙ(B) > 0, alors ℙ_B(A) = ℙ(A∩B)/ℙ(B).",
    frontLatex: "\\mathbb{P}_B(A) = \\text{?}",
    backLatex: "\\frac{\\mathbb{P}(A \\cap B)}{\\mathbb{P}(B)} \\text{ si } \\mathbb{P}(B) > 0",
    category: "Conditionnement",
    chapter: 10,
    difficulty: "facile"
  },
  {
    id: 1009,
    front: "Indépendance de deux événements",
    back: "A et B sont indépendants si ℙ(A∩B) = ℙ(A)ℙ(B).",
    frontLatex: "A \\perp B \\Leftrightarrow \\text{?}",
    backLatex: "\\mathbb{P}(A \\cap B) = \\mathbb{P}(A) \\mathbb{P}(B)",
    category: "Indépendance",
    chapter: 10,
    difficulty: "facile"
  },
  {
    id: 1010,
    front: "Probabilités composées",
    back: "ℙ(∩Aᵢ) = ℙ(A₁)ℙ_{A₁}(A₂)...ℙ_{A₁∩...∩A_{n-1}}(Aₙ).",
    frontLatex: "\\mathbb{P}(\\bigcap A_k) = \\text{?}",
    backLatex: "\\mathbb{P}(A_1) \\mathbb{P}_{A_1}(A_2) \\cdots \\mathbb{P}_{A_1 \\cap \\dots \\cap A_{n-1}}(A_n)",
    category: "Formules",
    chapter: 10,
    difficulty: "moyen"
  },
  {
    id: 1011,
    front: "Formule de Bayes",
    back: "ℙ_B(A) = ℙ(A)ℙ_A(B)/ℙ(B).",
    frontLatex: "\\mathbb{P}_B(A) = \\text{?}",
    backLatex: "\\frac{\\mathbb{P}(A) \\mathbb{P}_A(B)}{\\mathbb{P}(B)}",
    category: "Théorèmes",
    chapter: 10,
    difficulty: "moyen"
  },
  {
    id: 1012,
    front: "Propriété conditionnelle",
    back: "ℙ_B(Ω) = 1 et ℙ_B(Aᶜ) = 1 - ℙ_B(A).",
    frontLatex: "\\text{Propriétés de } \\mathbb{P}_B",
    backLatex: "\\mathbb{P}_B(\\Omega) = 1, \\ \\mathbb{P}_B(A^\\complement) = 1 - \\mathbb{P}_B(A)",
    category: "Propriétés",
    chapter: 10,
    difficulty: "facile"
  },
  {
    id: 1013,
    front: "Indépendance complémentaire",
    back: "Si A et B sont indépendants, alors A est indépendant de Bᶜ.",
    frontLatex: "A \\perp B \\implies \\text{?}",
    backLatex: "A \\perp B^\\complement",
    category: "Indépendance",
    chapter: 10,
    difficulty: "facile"
  }
];

// Chapitre 12: Comparaison — négligeabilité & équivalence
export const comparaisonNegligeabiliteEquivalenceFlashcards: MathFlashcard[] = [
  {
    id: 1200,
    front: "Négligeabilité pour fonctions",
    back: "f est négligeable devant g près de a si lim f/g = 0 ou f(x) = ε(x)g(x) avec ε→0.",
    frontLatex: "f(x) = o(g(x)) (x \\to a) \\Leftrightarrow \\text{?}",
    backLatex: "\\lim_{x \\to a} \\frac{f(x)}{g(x)} = 0 \\text{ ou } f(x) = \\varepsilon(x) g(x), \\ \\varepsilon \\to 0",
    category: "Négligeabilité",
    chapter: 12,
    difficulty: "facile"
  },
  {
    id: 1201,
    front: "Négligeabilité pour suites",
    back: "uₙ est négligeable devant vₙ si lim uₙ/vₙ = 0 ou uₙ = εₙvₙ avec εₙ→0.",
    frontLatex: "u_n = o(v_n) (n \\to +\\infty) \\Leftrightarrow \\text{?}",
    backLatex: "\\lim_{n \\to +\\infty} \\frac{u_n}{v_n} = 0 \\text{ ou } u_n = \\varepsilon_n v_n, \\ \\varepsilon_n \\to 0",
    category: "Négligeabilité",
    chapter: 12,
    difficulty: "facile"
  },
  {
    id: 1202,
    front: "Transitivité de la négligeabilité",
    back: "Si f = o(g) et g = o(h), alors f = o(h).",
    frontLatex: "Transitivité : f = o(g) \\wedge g = o(h) \\implies \\text{?}",
    backLatex: "f = o(h)",
    category: "Propriétés",
    chapter: 12,
    difficulty: "facile"
  },
  {
    id: 1203,
    front: "Linéarité de la négligeabilité",
    back: "Si f = o(h) et g = o(h), alors αf + βg = o(h) pour tous scalaires α, β.",
    frontLatex: "Linéarité : f = o(h) \\wedge g = o(h) \\implies \\text{?}",
    backLatex: "\\alpha f + \\beta g = o(h) \\ \\forall \\alpha, \\beta \\in \\mathbb{R}",
    category: "Propriétés",
    chapter: 12,
    difficulty: "moyen"
  },
  {
    id: 1204,
    front: "Équivalence pour fonctions",
    back: "f ∼ g près de a si lim f/g = 1 ou f(x) = α(x)g(x) avec α→1.",
    frontLatex: "f(x) \\sim g(x) (x \\to a) \\Leftrightarrow \\text{?}",
    backLatex: "\\lim_{x \\to a} \\frac{f(x)}{g(x)} = 1 \\text{ ou } f(x) = \\alpha(x) g(x), \\ \\alpha \\to 1",
    category: "Équivalence",
    chapter: 12,
    difficulty: "facile"
  },
  {
    id: 1205,
    front: "Équivalence pour suites",
    back: "uₙ ∼ vₙ si lim uₙ/vₙ = 1 ou uₙ = αₙvₙ avec αₙ→1.",
    frontLatex: "u_n \\sim v_n (n \\to +\\infty) \\Leftrightarrow \\text{?}",
    backLatex: "\\lim_{n \\to +\\infty} \\frac{u_n}{v_n} = 1 \\text{ ou } u_n = \\alpha_n v_n, \\ \\alpha_n \\to 1",
    category: "Équivalence",
    chapter: 12,
    difficulty: "facile"
  },
  {
    id: 1206,
    front: "Lien entre négligeabilité et équivalence",
    back: "f ∼ g si et seulement si f - g = o(g).",
    frontLatex: "f \\sim g \\iff \\text{?}",
    backLatex: "f - g = o(g)",
    category: "Relations",
    chapter: 12,
    difficulty: "moyen"
  },
  {
    id: 1207,
    front: "Transitivité de l'équivalence",
    back: "Si f ∼ g et g ∼ h, alors f ∼ h.",
    frontLatex: "Transitivité : f \\sim g \\wedge g \\sim h \\implies \\text{?}",
    backLatex: "f \\sim h",
    category: "Propriétés",
    chapter: 12,
    difficulty: "facile"
  },
  {
    id: 1208,
    front: "Multiplicativité de l'équivalence",
    back: "Si f ∼ g et h ∼ k, alors fh ∼ gk.",
    frontLatex: "Multiplicativité : f \\sim g \\wedge h \\sim k \\implies \\text{?}",
    backLatex: "fh \\sim gk",
    category: "Propriétés",
    chapter: 12,
    difficulty: "moyen"
  },
  {
    id: 1209,
    front: "Équivalent de eˣ - 1",
    back: "Quand x→0, eˣ - 1 ∼ x.",
    frontLatex: "x \\to 0 : e^x - 1 \\sim \\text{?}",
    backLatex: "e^x - 1 \\sim x",
    category: "Équivalents usuels",
    chapter: 12,
    difficulty: "facile"
  },
  {
    id: 1210,
    front: "Équivalent de ln(1+x)",
    back: "Quand x→0, ln(1+x) ∼ x.",
    frontLatex: "x \\to 0 : \\ln(1+x) \\sim \\text{?}",
    backLatex: "\\ln(1+x) \\sim x",
    category: "Équivalents usuels",
    chapter: 12,
    difficulty: "facile"
  },
  {
    id: 1211,
    front: "Équivalent de (1+x)ᵅ - 1",
    back: "Quand x→0, (1+x)ᵅ - 1 ∼ αx.",
    frontLatex: "x \\to 0 : (1+x)^\\alpha - 1 \\sim \\text{?}",
    backLatex: "(1+x)^\\alpha - 1 \\sim \\alpha x",
    category: "Équivalents usuels",
    chapter: 12,
    difficulty: "moyen"
  },
  {
    id: 1212,
    front: "Équivalent de sin(x)",
    back: "Quand x→0, sin(x) ∼ x.",
    frontLatex: "x \\to 0 : \\sin x \\sim \\text{?}",
    backLatex: "\\sin x \\sim x",
    category: "Équivalents usuels",
    chapter: 12,
    difficulty: "facile"
  },
  {
    id: 1213,
    front: "Équivalent de 1 - cos(x)",
    back: "Quand x→0, 1 - cos(x) ∼ x²/2.",
    frontLatex: "x \\to 0 : 1 - \\cos x \\sim \\text{?}",
    backLatex: "1 - \\cos x \\sim \\frac{x^2}{2}",
    category: "Équivalents usuels",
    chapter: 12,
    difficulty: "moyen"
  },
  {
    id: 1214,
    front: "Équivalent de ln(n) quand n→+∞",
    back: "Pour les suites, ln(n) ∼ n (attention : faux !).",
    frontLatex: "n \\to +\\infty : \\ln n \\sim \\text{?}",
    backLatex: "\\ln n \\text{ n'est pas équivalent à une puissance de n}",
    category: "Équivalents usuels",
    chapter: 12,
    difficulty: "difficile"
  },
  {
    id: 1215,
    front: "Équivalents et limites",
    back: "Si f ∼ g et lim f = ℓ, alors lim g = ℓ.",
    frontLatex: "f \\sim g \\wedge \\lim f = \\ell \\implies \\text{?}",
    backLatex: "\\lim g = \\ell",
    category: "Théorèmes",
    chapter: 12,
    difficulty: "moyen"
  },
  {
    id: 1216,
    front: "Réciproque : limite non nulle implique équivalent",
    back: "Si lim f = ℓ ≠ 0, alors f ∼ ℓ.",
    frontLatex: "\\lim f = \\ell \\neq 0 \\implies \\text{?}",
    backLatex: "f \\sim \\ell",
    category: "Théorèmes",
    chapter: 12,
    difficulty: "moyen"
  }
];

// Chapitre 11: Optimisation multivariée avancée
export const optimisationMultivarieeAvanceeFlashcards: MathFlashcard[] = [
  {
    id: 1100,
    front: "Dérivées partielles d'ordre 2",
    back: "Pour i,j dans {1,...,n}, si les dérivées partielles d'ordre 1 existent, on définit la dérivée partielle d'ordre 2.",
    frontLatex: "\\partial^{\\,2}_{i,j}f = \\text{?}",
    backLatex: "\\partial^{\\,2}_{i,j}f = \\partial_{i}(\\partial_{j}f)",
    category: "Dérivées partielles",
    chapter: 11,
    difficulty: "facile"
  },
  {
    id: 1101,
    front: "Fonction de classe C²",
    back: "Une fonction est de classe C² sur Ω lorsque toutes ses dérivées partielles d'ordre 2 sont continues sur Ω.",
    frontLatex: "f \\in \\mathcal{C}^2(\\Omega) \\Leftrightarrow \\text{?}",
    backLatex: "\\forall i,j, \\quad \\partial^{\\,2}_{i,j}f \\text{ continue sur } \\Omega",
    category: "Classe C²",
    chapter: 11,
    difficulty: "facile"
  },
  {
    id: 1102,
    front: "Théorème de Schwarz",
    back: "Si f ∈ C²(Ω), alors les dérivées partielles croisées sont égales.",
    frontLatex: "f \\in \\mathcal{C}^2(\\Omega) \\implies \\text{?}",
    backLatex: "\\forall (i,j), \\quad \\partial^{\\,2}_{i,j}f = \\partial^{\\,2}_{j,i}f",
    category: "Théorèmes",
    chapter: 11,
    difficulty: "moyen"
  },
  {
    id: 1103,
    front: "Matrice hessienne",
    back: "La matrice hessienne en a contient toutes les dérivées partielles d'ordre 2.",
    frontLatex: "\\nabla^2 f(a) = \\text{?}",
    backLatex: "\\nabla^2 f(a) = \\bigl(\\partial^{\\,2}_{i,j}f(a)\\bigr)_{1 \\leq i,j \\leq n}",
    category: "Hessienne",
    chapter: 11,
    difficulty: "moyen"
  },
  {
    id: 1104,
    front: "Forme quadratique associée à la hessienne",
    back: "La forme quadratique associée à la matrice hessienne en a.",
    frontLatex: "q_a(u) = \\text{?}",
    backLatex: "q_a(u) = \\langle \\nabla^2 f(a) u, u \\rangle",
    category: "Formes quadratiques",
    chapter: 11,
    difficulty: "moyen"
  },
  {
    id: 1105,
    front: "Extremum local",
    back: "Un point a est un extremum local si f(a) est un minimum ou maximum local dans un voisinage de a.",
    frontLatex: "a \\text{ extremum local} \\Leftrightarrow \\text{?}",
    backLatex: "\\exists V \\text{ voisinage}: \\forall x \\in V, f(x) \\geq f(a) \\text{ ou } \\leq f(a)",
    category: "Extremums",
    chapter: 11,
    difficulty: "facile"
  },
  {
    id: 1106,
    front: "Condition nécessaire d'ordre 1",
    back: "Si f admet un extremum local en a et est différentiable en a, alors le gradient en a est nul.",
    frontLatex: "\\text{Condition nécessaire d'ordre 1}",
    backLatex: "\\nabla f(a) = 0",
    category: "Conditions d'extremum",
    chapter: 11,
    difficulty: "facile"
  },
  {
    id: 1107,
    front: "Condition suffisante d'ordre 2 - Minimum",
    back: "Si ∇f(a) = 0 et que la hessienne est définie positive en a, alors a est un minimum local.",
    frontLatex: "\\nabla f(a) = 0 \\text{ et Hessienne définie positive} \\implies \\text{?}",
    backLatex: "a \\text{ est un minimum local}",
    category: "Conditions d'extremum",
    chapter: 11,
    difficulty: "moyen"
  },
  {
    id: 1108,
    front: "Condition suffisante d'ordre 2 - Maximum",
    back: "Si ∇f(a) = 0 et que la hessienne est définie négative en a, alors a est un maximum local.",
    frontLatex: "\\nabla f(a) = 0 \\text{ et Hessienne définie négative} \\implies \\text{?}",
    backLatex: "a \\text{ est un maximum local}",
    category: "Conditions d'extremum",
    chapter: 11,
    difficulty: "moyen"
  },
  {
    id: 1109,
    front: "Condition suffisante d'ordre 2 - Point col",
    back: "Si ∇f(a) = 0 et que la hessienne est indéfinie en a, alors a est un point col.",
    frontLatex: "\\nabla f(a) = 0 \\text{ et Hessienne indéfinie} \\implies \\text{?}",
    backLatex: "a \\text{ est un point col}",
    category: "Conditions d'extremum",
    chapter: 11,
    difficulty: "moyen"
  },
  {
    id: 1110,
    front: "Test de Sylvester pour matrice définie positive",
    back: "Pour qu'une matrice symétrique soit définie positive, tous ses mineurs principaux doivent être positifs.",
    frontLatex: "A \\text{ définie positive} \\Leftrightarrow \\text{?}",
    backLatex: "\\forall k=1,\\dots,n, \\quad \\det(A_k) > 0",
    category: "Critères",
    chapter: 11,
    difficulty: "difficile"
  },
  {
    id: 1111,
    front: "Fonction convexe",
    back: "Une fonction est convexe si son épigraphe est convexe, ou si elle vérifie l'inégalité de Jensen.",
    frontLatex: "f \\text{ convexe} \\Leftrightarrow \\text{?}",
    backLatex: "\\forall x,y, \\forall t \\in [0,1], f(tx + (1-t)y) \\leq tf(x) + (1-t)f(y)",
    category: "Convexité",
    chapter: 11,
    difficulty: "moyen"
  },
  {
    id: 1112,
    front: "Condition de convexité par la hessienne",
    back: "Si f ∈ C² et que sa hessienne est définie positive partout, alors f est convexe.",
    frontLatex: "f \\in \\mathcal{C}^2, \\nabla^2 f \\geq 0 \\implies \\text{?}",
    backLatex: "f \\text{ est convexe}",
    category: "Convexité",
    chapter: 11,
    difficulty: "difficile"
  },
  {
    id: 1113,
    front: "Multiplicateurs de Lagrange - Contraintes d'égalité",
    back: "Pour optimiser f sous la contrainte g(x) = 0, on résout le système avec multiplicateur λ.",
    frontLatex: "\\nabla f(x) = \\text{?} \\cdot \\nabla g(x)",
    backLatex: "\\nabla f(x) = \\lambda \\nabla g(x)",
    category: "Contraintes",
    chapter: 11,
    difficulty: "difficile"
  }
];

// Chapitre 6: Dérivation
export const derivationFlashcards: MathFlashcard[] = [
  {
    id: 600,
    front: "Dérivée d'une fonction",
    back: "La dérivée de f en a est la limite du taux d'accroissement quand h tend vers 0.",
    frontLatex: "f'(a) = \\text{?}",
    backLatex: "f'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}",
    category: "Définitions",
    chapter: 6,
    difficulty: "facile"
  },
  {
    id: 601,
    front: "Interprétation géométrique",
    back: "La dérivée en un point est le coefficient directeur de la tangente à la courbe en ce point.",
    frontLatex: "\\text{Tangente en } a: y = \\text{?}",
    backLatex: "y = f(a) + f'(a)(x - a)",
    category: "Géométrie",
    chapter: 6,
    difficulty: "facile"
  },
  {
    id: 602,
    front: "Règles de dérivation - Somme",
    back: "La dérivée d'une somme est la somme des dérivées.",
    frontLatex: "(f + g)' = \\text{?}",
    backLatex: "(f + g)' = f' + g'",
    category: "Règles",
    chapter: 6,
    difficulty: "facile"
  },
  {
    id: 603,
    front: "Règles de dérivation - Produit",
    back: "La dérivée d'un produit est donnée par la formule (fg)' = f'g + fg'.",
    frontLatex: "(fg)' = \\text{?}",
    backLatex: "(fg)' = f'g + fg'",
    category: "Règles",
    chapter: 6,
    difficulty: "facile"
  },
  {
    id: 604,
    front: "Règles de dérivation - Quotient",
    back: "La dérivée d'un quotient est donnée par la formule (f/g)' = (f'g - fg')/g².",
    frontLatex: "\\left(\\frac{f}{g}\\right)' = \\text{?}",
    backLatex: "\\left(\\frac{f}{g}\\right)' = \\frac{f'g - fg'}{g^2}",
    category: "Règles",
    chapter: 6,
    difficulty: "moyen"
  },
  {
    id: 605,
    front: "Dérivée de la fonction composée",
    back: "La dérivée de g∘f est g'(f(x)) × f'(x).",
    frontLatex: "(g \\circ f)'(x) = \\text{?}",
    backLatex: "(g \\circ f)'(x) = g'(f(x)) \\times f'(x)",
    category: "Composition",
    chapter: 6,
    difficulty: "moyen"
  },
  {
    id: 606,
    front: "Dérivée de fonctions usuelles - Puissance",
    back: "La dérivée de xⁿ est n x^(n-1).",
    frontLatex: "\\frac{d}{dx}(x^n) = \\text{?}",
    backLatex: "\\frac{d}{dx}(x^n) = n x^{n-1}",
    category: "Fonctions usuelles",
    chapter: 6,
    difficulty: "facile"
  },
  {
    id: 607,
    front: "Dérivée de fonctions usuelles - Exponentielle",
    back: "La dérivée de e^x est e^x.",
    frontLatex: "\\frac{d}{dx}(e^x) = \\text{?}",
    backLatex: "\\frac{d}{dx}(e^x) = e^x",
    category: "Fonctions usuelles",
    chapter: 6,
    difficulty: "facile"
  },
  {
    id: 608,
    front: "Dérivée de fonctions usuelles - Logarithme",
    back: "La dérivée de ln(x) est 1/x.",
    frontLatex: "\\frac{d}{dx}(\\ln x) = \\text{?}",
    backLatex: "\\frac{d}{dx}(\\ln x) = \\frac{1}{x}",
    category: "Fonctions usuelles",
    chapter: 6,
    difficulty: "facile"
  },
  {
    id: 609,
    front: "Dérivée de fonctions usuelles - Sinus",
    back: "La dérivée de sin(x) est cos(x).",
    frontLatex: "\\frac{d}{dx}(\\sin x) = \\text{?}",
    backLatex: "\\frac{d}{dx}(\\sin x) = \\cos x",
    category: "Fonctions usuelles",
    chapter: 6,
    difficulty: "facile"
  },
  {
    id: 610,
    front: "Dérivée de fonctions usuelles - Cosinus",
    back: "La dérivée de cos(x) est -sin(x).",
    frontLatex: "\\frac{d}{dx}(\\cos x) = \\text{?}",
    backLatex: "\\frac{d}{dx}(\\cos x) = -\\sin x",
    category: "Fonctions usuelles",
    chapter: 6,
    difficulty: "facile"
  },
  {
    id: 611,
    front: "Théorème de Rolle",
    back: "Si f est continue sur [a,b], dérivable sur ]a,b[, et f(a)=f(b), alors il existe c∈]a,b[ tel que f'(c)=0.",
    frontLatex: "\\text{Théorème de Rolle}",
    backLatex: "f \\text{ continue sur } [a,b], \\text{ dérivable sur } ]a,b[, f(a)=f(b) \\implies \\exists c \\in ]a,b[, f'(c)=0",
    category: "Théorèmes",
    chapter: 6,
    difficulty: "moyen"
  },
  {
    id: 612,
    front: "Théorème des accroissements finis",
    back: "Pour f continue sur [a,b] et dérivable sur ]a,b[, il existe c∈]a,b[ tel que f(b)-f(a) = f'(c)(b-a).",
    frontLatex: "\\text{Théorème des accroissements finis}",
    backLatex: "\\exists c \\in ]a,b[, \\quad f(b) - f(a) = f'(c)(b - a)",
    category: "Théorèmes",
    chapter: 6,
    difficulty: "moyen"
  },
  {
    id: 613,
    front: "Extremum local",
    back: "Un point c est un extremum local si f(c) est un maximum ou minimum local.",
    frontLatex: "c \\text{ extremum local} \\Leftrightarrow \\text{?}",
    backLatex: "\\exists \\delta > 0: \\forall x \\in ]c-\\delta,c+\\delta[, f(x) \\geq f(c) \\text{ ou } \\leq",
    category: "Extremums",
    chapter: 6,
    difficulty: "facile"
  },
  {
    id: 614,
    front: "Condition nécessaire pour extremum",
    back: "Si f admet un extremum local en c et est dérivable en c, alors f'(c) = 0.",
    frontLatex: "\\text{Condition nécessaire pour extremum}",
    backLatex: "\\text{Extremum local en } c \\implies f'(c) = 0",
    category: "Conditions d'extremum",
    chapter: 6,
    difficulty: "moyen"
  },
  {
    id: 615,
    front: "Test de la dérivée seconde",
    back: "Si f'(c)=0 et f''(c)>0, alors c est un minimum local.",
    frontLatex: "\\text{Test de la dérivée seconde}",
    backLatex: "f'(c)=0 \\text{ et } f''(c)>0 \\implies \\text{minimum local en } c",
    category: "Tests",
    chapter: 6,
    difficulty: "moyen"
  }
];

// Chapitre 7: n-uplets de variables aléatoires réelles
export const nupletsVariablesAleatoiresFlashcards: MathFlashcard[] = [
  {
    id: 700,
    front: "Vecteur aléatoire",
    back: "Un vecteur aléatoire X = (X₁, ..., Xₙ) est une application de Ω vers ℝⁿ.",
    frontLatex: "\\text{Vecteur aléatoire } X = \\text{?}",
    backLatex: "X = (X_1, \\ldots, X_n): \\Omega \\to \\mathbb{R}^n",
    category: "Définitions",
    chapter: 7,
    difficulty: "facile"
  },
  {
    id: 701,
    front: "Fonction de répartition d'un vecteur aléatoire",
    back: "La fonction de répartition de X = (X₁, ..., Xₙ) est F_X(x₁, ..., xₙ) = ℙ(X₁ ≤ x₁, ..., Xₙ ≤ xₙ).",
    frontLatex: "F_X(x_1, \\ldots, x_n) = \\text{?}",
    backLatex: "F_X(x_1, \\ldots, x_n) = \\mathbb{P}(X_1 \\leq x_1, \\ldots, X_n \\leq x_n)",
    category: "Lois conjointes",
    chapter: 7,
    difficulty: "facile"
  },
  {
    id: 702,
    front: "Loi marginale",
    back: "La loi de Xₖ est la loi marginale de la loi conjointe de (X₁, ..., Xₙ).",
    frontLatex: "\\text{Loi marginale de } X_k",
    backLatex: "\\text{Loi de } X_k \\text{ obtenue à partir de la loi conjointe de } (X_1, \\ldots, X_n)",
    category: "Lois marginales",
    chapter: 7,
    difficulty: "facile"
  },
  {
    id: 703,
    front: "Loi conjointe discrète",
    back: "Pour un vecteur discret, p(x₁, ..., xₙ) = ℙ(X₁ = x₁, ..., Xₙ = xₙ).",
    frontLatex: "p(x_1, \\ldots, x_n) = \\text{?}",
    backLatex: "p(x_1, \\ldots, x_n) = \\mathbb{P}(X_1 = x_1, \\ldots, X_n = x_n)",
    category: "Lois discrètes",
    chapter: 7,
    difficulty: "facile"
  },
  {
    id: 704,
    front: "Propriété de normalisation",
    back: "La somme de toutes les probabilités conjointes vaut 1.",
    frontLatex: "\\sum_{(x_1, \\ldots, x_n)} \\mathbb{P}(X_1 = x_1, \\ldots, X_n = x_n) = \\text{?}",
    backLatex: "\\sum_{(x_1, \\ldots, x_n)} \\mathbb{P}(X_1 = x_1, \\ldots, X_n = x_n) = 1",
    category: "Propriétés",
    chapter: 7,
    difficulty: "facile"
  },
  {
    id: 705,
    front: "Linéarité de l'espérance",
    back: "𝔼(X + Y) = 𝔼(X) + 𝔼(Y) si X et Y admettent une espérance.",
    frontLatex: "\\mathbb{E}(X + Y) = \\text{?}",
    backLatex: "\\mathbb{E}(X + Y) = \\mathbb{E}(X) + \\mathbb{E}(Y)",
    category: "Espérance",
    chapter: 7,
    difficulty: "facile"
  },
  {
    id: 706,
    front: "Linéarité pour n variables",
    back: "𝔼(∑ᵢ₌₁ⁿ Xᵢ) = ∑ᵢ₌₁ⁿ 𝔼(Xᵢ) si chaque Xᵢ admet une espérance.",
    frontLatex: "\\mathbb{E}\\left(\\sum_{i=1}^n X_i\\right) = \\text{?}",
    backLatex: "\\mathbb{E}\\left(\\sum_{i=1}^n X_i\\right) = \\sum_{i=1}^n \\mathbb{E}(X_i)",
    category: "Espérance",
    chapter: 7,
    difficulty: "moyen"
  },
  {
    id: 707,
    front: "Croissance de l'espérance",
    back: "Si X ≤ Y p.s. et X, Y admettent une espérance, alors 𝔼(X) ≤ 𝔼(Y).",
    frontLatex: "X \\leq Y \\text{ p.s.} \\implies \\mathbb{E}(X) \\text{?} \\mathbb{E}(Y)",
    backLatex: "X \\leq Y \\text{ p.s.} \\implies \\mathbb{E}(X) \\leq \\mathbb{E}(Y)",
    category: "Propriétés espérance",
    chapter: 7,
    difficulty: "moyen"
  },
  {
    id: 708,
    front: "Indépendance mutuelle",
    back: "X₁, ..., Xₙ sont mutuellement indépendantes si F_{X₁,...,Xₙ}(x₁, ..., xₙ) = ∏ᵢ₌₁ⁿ F_{Xᵢ}(xᵢ).",
    frontLatex: "X_1, \\ldots, X_n \\text{ indépendantes} \\iff \\text{?}",
    backLatex: "F_{X_1,\\ldots,X_n}(x_1, \\ldots, x_n) = \\prod_{i=1}^n F_{X_i}(x_i)",
    category: "Indépendance",
    chapter: 7,
    difficulty: "moyen"
  },
  {
    id: 709,
    front: "Indépendance cas discret",
    back: "Pour des v.a. discrètes : ℙ(X₁ = x₁, ..., Xₙ = xₙ) = ∏ᵢ₌₁ⁿ ℙ(Xᵢ = xᵢ).",
    frontLatex: "\\text{Indépendance discrète : } \\mathbb{P}(X_1 = x_1, \\ldots, X_n = x_n) = \\text{?}",
    backLatex: "\\mathbb{P}(X_1 = x_1, \\ldots, X_n = x_n) = \\prod_{i=1}^n \\mathbb{P}(X_i = x_i)",
    category: "Indépendance",
    chapter: 7,
    difficulty: "moyen"
  },
  {
    id: 710,
    front: "Espérance du produit",
    back: "Si X et Y sont indépendantes et admettent une espérance, alors 𝔼(XY) = 𝔼(X)𝔼(Y).",
    frontLatex: "X, Y \\text{ indépendantes} \\implies \\mathbb{E}(XY) = \\text{?}",
    backLatex: "\\mathbb{E}(XY) = \\mathbb{E}(X)\\mathbb{E}(Y)",
    category: "Indépendance",
    chapter: 7,
    difficulty: "moyen"
  },
  {
    id: 711,
    front: "Lemme des coalitions",
    back: "Si X₁, ..., Xₙ sont indépendantes, toute fonction des premières est indépendante de toute fonction des autres.",
    frontLatex: "\\text{Lemme des coalitions}",
    backLatex: "X_1, \\ldots, X_n \\text{ indép.} \\implies g(X_1, \\ldots, X_k) \\perp h(X_{k+1}, \\ldots, X_n)",
    category: "Indépendance",
    chapter: 7,
    difficulty: "difficile"
  },
  {
    id: 712,
    front: "Variance d'une somme indépendante",
    back: "Si X₁, ..., Xₙ sont indépendantes, Var(∑Xᵢ) = ∑Var(Xᵢ).",
    frontLatex: "X_1, \\ldots, X_n \\text{ indép.} \\implies \\operatorname{Var}\\left(\\sum X_i\\right) = \\text{?}",
    backLatex: "\\operatorname{Var}\\left(\\sum X_i\\right) = \\sum \\operatorname{Var}(X_i)",
    category: "Variance",
    chapter: 7,
    difficulty: "moyen"
  }
];

// Chapitre 8: Couple de variables aléatoires (Cas particulier du couple)
export const coupleVariablesAleatoiresFlashcards: MathFlashcard[] = [
  {
    id: 850,
    front: "Indépendance d'événements",
    back: "Deux événements A et B sont indépendants si ℙ(A ∩ B) = ℙ(A)ℙ(B).",
    frontLatex: "A, B \\text{ indépendants} \\Leftrightarrow \\text{?}",
    backLatex: "\\mathbb{P}(A \\cap B) = \\mathbb{P}(A)\\mathbb{P}(B)",
    category: "Indépendance",
    chapter: 8,
    difficulty: "facile"
  },
  {
    id: 851,
    front: "Indépendance de variables aléatoires",
    back: "X et Y sont indépendantes si ℙ(X ≤ x, Y ≤ y) = ℙ(X ≤ x)ℙ(Y ≤ y) pour tout (x,y).",
    frontLatex: "X, Y \\text{ indépendantes} \\Leftrightarrow \\text{?}",
    backLatex: "\\mathbb{P}(X \\leq x, Y \\leq y) = \\mathbb{P}(X \\leq x)\\mathbb{P}(Y \\leq y)",
    category: "Indépendance",
    chapter: 8,
    difficulty: "facile"
  },
  {
    id: 852,
    front: "Propriété indépendance intervalles",
    back: "X, Y indépendantes ⟺ ℙ(X ∈ I, Y ∈ J) = ℙ(X ∈ I)ℙ(Y ∈ J) pour tous intervalles I, J.",
    frontLatex: "X, Y \\text{ indép.} \\iff \\mathbb{P}(X \\in I, Y \\in J) = \\text{?}",
    backLatex: "\\mathbb{P}(X \\in I, Y \\in J) = \\mathbb{P}(X \\in I)\\mathbb{P}(Y \\in J)",
    category: "Indépendance",
    chapter: 8,
    difficulty: "moyen"
  },
  {
    id: 853,
    front: "Fonctions de variables indépendantes",
    back: "Si X et Y sont indépendantes, alors f(X) et g(Y) sont indépendantes pour toutes fonctions f, g.",
    frontLatex: "X \\perp Y \\implies f(X) \\text{ et } g(Y) \\text{ sont ?}",
    backLatex: "f(X) \\perp g(Y)",
    category: "Propriétés",
    chapter: 8,
    difficulty: "moyen"
  },
  {
    id: 854,
    front: "Indépendance cas discret",
    back: "X, Y discrètes sont indépendantes ⟺ ℙ(X = x, Y = y) = ℙ(X = x)ℙ(Y = y) pour tout (x,y).",
    frontLatex: "X, Y \\text{ discrètes indép.} \\iff \\mathbb{P}(X=x, Y=y) = \\text{?}",
    backLatex: "\\mathbb{P}(X=x, Y=y) = \\mathbb{P}(X=x)\\mathbb{P}(Y=y)",
    category: "Cas discret",
    chapter: 8,
    difficulty: "facile"
  },
  {
    id: 855,
    front: "Couple aléatoire",
    back: "Un couple aléatoire (X,Y) est une application de Ω vers ℝ² : ω ↦ (X(ω), Y(ω)).",
    frontLatex: "(X,Y): \\Omega \\to \\text{?}",
    backLatex: "(X,Y): \\Omega \\to \\mathbb{R}^2, \\omega \\mapsto (X(\\omega), Y(\\omega))",
    category: "Définitions",
    chapter: 8,
    difficulty: "facile"
  },
  {
    id: 856,
    front: "Fonction de répartition conjointe",
    back: "F_{X,Y}(x,y) = ℙ(X ≤ x, Y ≤ y) est la fonction de répartition conjointe du couple (X,Y).",
    frontLatex: "F_{X,Y}(x,y) = \\text{?}",
    backLatex: "F_{X,Y}(x,y) = \\mathbb{P}(X \\leq x, Y \\leq y)",
    category: "Lois conjointes",
    chapter: 8,
    difficulty: "facile"
  },
  {
    id: 857,
    front: "Loi marginale",
    back: "La loi de X (resp. Y) est la loi marginale de la loi conjointe de (X,Y).",
    frontLatex: "\\text{Loi marginale}",
    backLatex: "\\text{Loi de } X \\text{ obtenue à partir de la loi conjointe de } (X,Y)",
    category: "Lois marginales",
    chapter: 8,
    difficulty: "facile"
  },
  {
    id: 858,
    front: "Indépendance et répartition conjointe",
    back: "X, Y indépendantes ⟺ F_{X,Y}(x,y) = F_X(x)F_Y(y).",
    frontLatex: "X, Y \\text{ indép.} \\iff F_{X,Y}(x,y) = \\text{?}",
    backLatex: "F_{X,Y}(x,y) = F_X(x)F_Y(y)",
    category: "Indépendance",
    chapter: 8,
    difficulty: "moyen"
  },
  {
    id: 859,
    front: "Loi conjointe discrète",
    back: "Pour un couple discret, la loi est donnée par p_{i,j} = ℙ(X = x_i, Y = y_j) avec ∑p_{i,j} = 1.",
    frontLatex: "p_{i,j} = \\text{?} \\text{ et } \\sum p_{i,j} = \\text{?}",
    backLatex: "p_{i,j} = \\mathbb{P}(X=x_i, Y=y_j), \\sum p_{i,j} = 1",
    category: "Cas discret",
    chapter: 8,
    difficulty: "facile"
  },
  {
    id: 860,
    front: "Lois marginales discrètes",
    back: "ℙ(X = x_i) = ∑_j p_{i,j} et ℙ(Y = y_j) = ∑_i p_{i,j}.",
    frontLatex: "\\mathbb{P}(X = x_i) = \\text{?}, \\mathbb{P}(Y = y_j) = \\text{?}",
    backLatex: "\\mathbb{P}(X = x_i) = \\sum_j p_{i,j}, \\mathbb{P}(Y = y_j) = \\sum_i p_{i,j}",
    category: "Lois marginales",
    chapter: 8,
    difficulty: "moyen"
  },
  {
    id: 861,
    front: "Probabilité conditionnelle",
    back: "Si ℙ(X = x_i) ≠ 0, alors ℙ(Y = y_j | X = x_i) = p_{i,j}/p_i.",
    frontLatex: "\\mathbb{P}(Y = y_j | X = x_i) = \\text{?}",
    backLatex: "\\mathbb{P}(Y = y_j | X = x_i) = \\frac{p_{i,j}}{p_i}",
    category: "Lois conditionnelles",
    chapter: 8,
    difficulty: "moyen"
  },
  {
    id: 862,
    front: "Formule des probabilités composées",
    back: "ℙ(X = x_i, Y = y_j) = ℙ(X = x_i)ℙ(Y = y_j | X = x_i).",
    frontLatex: "\\mathbb{P}(X = x_i, Y = y_j) = \\text{?}",
    backLatex: "\\mathbb{P}(X = x_i, Y = y_j) = \\mathbb{P}(X = x_i)\\mathbb{P}(Y = y_j | X = x_i)",
    category: "Lois conditionnelles",
    chapter: 8,
    difficulty: "moyen"
  },
  {
    id: 863,
    front: "Loi d'une fonction de couple",
    back: "Si Z = g(X,Y), alors ℙ(Z = z) = ∑_{(x,y): g(x,y)=z} ℙ(X = x, Y = y).",
    frontLatex: "Z = g(X,Y) \\implies \\mathbb{P}(Z = z) = \\text{?}",
    backLatex: "\\mathbb{P}(Z = z) = \\sum_{(x,y): g(x,y)=z} \\mathbb{P}(X = x, Y = y)",
    category: "Fonctions de couples",
    chapter: 8,
    difficulty: "difficile"
  }
];

// Chapitre 9: Réduction des endomorphismes et des matrices symétriques
export const reductionMatricesSymetriquesFlashcards: MathFlashcard[] = [
  {
    id: 950,
    front: "Endomorphisme symétrique",
    back: "Un endomorphisme φ est symétrique si ⟨φ(x), y⟩ = ⟨x, φ(y)⟩ pour tout x, y ∈ E.",
    frontLatex: "\\varphi \\text{ symétrique} \\Leftrightarrow \\text{?}",
    backLatex: "\\forall x,y \\in E, \\langle \\varphi(x), y \\rangle = \\langle x, \\varphi(y) \\rangle",
    category: "Définitions",
    chapter: 9,
    difficulty: "facile"
  },
  {
    id: 951,
    front: "Espace des endomorphismes symétriques",
    back: "L'ensemble S(E) des endomorphismes symétriques est un sous-espace vectoriel de L(E).",
    frontLatex: "\\mathcal{S}(E) = \\text{?}",
    backLatex: "\\mathcal{S}(E) \\text{ sous-espace vectoriel de } \\mathcal{L}(E)",
    category: "Propriétés",
    chapter: 9,
    difficulty: "facile"
  },
  {
    id: 952,
    front: "Caractérisation matricielle",
    back: "φ est symétrique ⟺ il existe une base orthonormée dans laquelle la matrice de φ est symétrique (égale à sa transposée).",
    frontLatex: "\\varphi \\text{ symétrique} \\iff \\text{?}",
    backLatex: "\\exists \\text{ base orthonormée : matrice de } \\varphi \\text{ symétrique}",
    category: "Caractérisation",
    chapter: 9,
    difficulty: "moyen"
  },
  {
    id: 953,
    front: "Stabilité de l'orthogonal",
    back: "Si φ est symétrique et F stable par φ, alors F⊥ est aussi stable par φ.",
    frontLatex: "\\varphi \\text{ symétrique, } F \\text{ stable} \\implies F^\\perp \\text{ ?}",
    backLatex: "F^\\perp \\text{ stable par } \\varphi",
    category: "Propriétés",
    chapter: 9,
    difficulty: "moyen"
  },
  {
    id: 954,
    front: "Existence du spectre",
    back: "Un endomorphisme symétrique possède au moins une valeur propre ; elles sont toutes réelles.",
    frontLatex: "\\varphi \\text{ symétrique} \\implies \\text{ valeurs propres ?}",
    backLatex: "\\text{Au moins une valeur propre, toutes réelles}",
    category: "Spectre",
    chapter: 9,
    difficulty: "moyen"
  },
  {
    id: 955,
    front: "Diagonalisation des endomorphismes symétriques",
    back: "Un endomorphisme symétrique est diagonalisable et les sous-espaces propres relatifs à des valeurs propres distinctes sont orthogonaux.",
    frontLatex: "\\varphi \\text{ symétrique} \\implies \\text{?}",
    backLatex: "\\text{Diagonalisable, espaces propres orthogonaux}",
    category: "Diagonalisation",
    chapter: 9,
    difficulty: "moyen"
  },
  {
    id: 956,
    front: "Forme quadratique associée",
    back: "À une matrice symétrique A, on associe la forme quadratique q(x) = ⟨x, φ(x)⟩ = ᵀX A X.",
    frontLatex: "q(x) = \\text{?}",
    backLatex: "q(x) = \\langle x, \\varphi(x) \\rangle = {}^\\mathsf{T}X A X",
    category: "Formes quadratiques",
    chapter: 9,
    difficulty: "moyen"
  },
  {
    id: 957,
    front: "Forme quadratique positive",
    back: "q(x) ≥ 0 ∀x ⟺ toutes les valeurs propres de φ sont ≥ 0.",
    frontLatex: "q(x) \\geq 0 \\ \\forall x \\iff \\text{?}",
    backLatex: "\\text{Toutes les valeurs propres } \\geq 0",
    category: "Signe des formes",
    chapter: 9,
    difficulty: "moyen"
  },
  {
    id: 958,
    front: "Forme quadratique définie positive",
    back: "q(x) > 0 ∀x ≠ 0 ⟺ toutes les valeurs propres λᵢ > 0.",
    frontLatex: "q(x) > 0 \\ \\forall x \\neq 0 \\iff \\text{?}",
    backLatex: "\\lambda_i > 0 \\text{ pour tout } \\lambda_i",
    category: "Signe des formes",
    chapter: 9,
    difficulty: "moyen"
  },
  {
    id: 959,
    front: "Matrice orthogonale",
    back: "Une matrice Ω est orthogonale si ᵀΩ Ω = Iₙ, alors Ω⁻¹ = ᵀΩ.",
    frontLatex: "\\Omega \\text{ orthogonale} \\iff \\text{?}",
    backLatex: "{}^\\mathsf{T}\\Omega \\, \\Omega = I_n \\text{ et } \\Omega^{-1} = {}^\\mathsf{T}\\Omega",
    category: "Matrices orthogonales",
    chapter: 9,
    difficulty: "facile"
  },
  {
    id: 960,
    front: "Diagonalisation orthogonale",
    back: "Toute matrice symétrique réelle est diagonalisable par orthogonalité : A = PDP^T avec P orthogonale.",
    frontLatex: "A \\text{ symétrique} \\implies A = \\text{?}",
    backLatex: "A = PDP^\\mathsf{T} \\text{ avec } P \\text{ orthogonale, } D \\text{ diagonale}",
    category: "Diagonalisation",
    chapter: 9,
    difficulty: "difficile"
  },
  {
    id: 961,
    front: "Matrice de passage orthonormée",
    back: "Toute matrice de passage entre deux bases orthonormées est orthogonale.",
    frontLatex: "\\text{Passage entre bases orthonormées} \\implies \\text{?}",
    backLatex: "\\text{Matrice de passage orthogonale}",
    category: "Matrices orthogonales",
    chapter: 9,
    difficulty: "moyen"
  },
  {
    id: 962,
    front: "Réduction complète",
    back: "La réduction complète d'une matrice symétrique donne une diagonalisation orthogonale avec des valeurs propres réelles.",
    frontLatex: "\\text{Réduction complète matrice symétrique}",
    backLatex: "\\text{Diagonalisation orthogonale, valeurs propres réelles}",
    category: "Réduction",
    chapter: 9,
    difficulty: "difficile"
  }
];

// Chapitre 12: Convergences et approximations  
export const convergencesApproximationsFlashcards: MathFlashcard[] = [
  {
    id: 1200,
    front: "Inégalité de Markov",
    back: "Pour une variable aléatoire positive Z et a > 0 : ℙ(Z ≥ a) ≤ 𝔼(Z)/a.",
    frontLatex: "\\text{Inégalité de Markov : } \\mathbb{P}(Z \\geq a) \\leq \\text{?}",
    backLatex: "\\mathbb{P}(Z \\geq a) \\leq \\frac{\\mathbb{E}(Z)}{a} \\quad (Z \\geq 0, a > 0)",
    category: "Inégalités",
    chapter: 12,
    difficulty: "facile"
  },
  {
    id: 1201,
    front: "Inégalité de Bienaymé-Tchebychev",
    back: "Pour tout ε > 0 : ℙ(|Z - 𝔼(Z)| ≥ ε) ≤ Var(Z)/ε².",
    frontLatex: "\\text{Bienaymé-Tchebychev : } \\mathbb{P}(|Z - \\mathbb{E}(Z)| \\geq \\varepsilon) \\leq \\text{?}",
    backLatex: "\\mathbb{P}(|Z - \\mathbb{E}(Z)| \\geq \\varepsilon) \\leq \\frac{\\operatorname{Var}(Z)}{\\varepsilon^2}",
    category: "Inégalités",
    chapter: 12,
    difficulty: "moyen"
  },
  {
    id: 1202,
    front: "Convergence en probabilité",
    back: "Zₙ converge en probabilité vers Z si pour tout ε > 0, lim ℙ(|Zₙ - Z| ≥ ε) = 0.",
    frontLatex: "Z_n \\xrightarrow{\\mathbb{P}} Z \\Leftrightarrow \\text{?}",
    backLatex: "\\forall \\varepsilon > 0, \\lim_{n \\to \\infty} \\mathbb{P}(|Z_n - Z| \\geq \\varepsilon) = 0",
    category: "Convergences",
    chapter: 12,
    difficulty: "moyen"
  },
  {
    id: 1203,
    front: "Loi faible des grands nombres",
    back: "Pour des variables iid de même espérance m, la moyenne empirique Ȳₙ converge en probabilité vers m.",
    frontLatex: "\\text{LFGN : } \\overline{Y}_n \\xrightarrow{\\mathbb{P}} \\text{?}",
    backLatex: "\\overline{Y}_n \\xrightarrow{\\mathbb{P}} m \\text{ où } m = \\mathbb{E}(Y_1)",
    category: "Théorèmes limites",
    chapter: 12,
    difficulty: "moyen"
  },
  {
    id: 1204,
    front: "Composition par fonction continue",
    back: "Si Zₙ converge en probabilité vers Z et g est continue, alors g(Zₙ) converge vers g(Z).",
    frontLatex: "Z_n \\xrightarrow{\\mathbb{P}} Z \\text{ et } g \\text{ continue} \\implies \\text{?}",
    backLatex: "g(Z_n) \\xrightarrow{\\mathbb{P}} g(Z)",
    category: "Propriétés",
    chapter: 12,
    difficulty: "moyen"
  },
  {
    id: 1205,
    front: "Addition de convergences en probabilité",
    back: "Si Zₙ → Z et Wₙ → W en probabilité, alors Zₙ + Wₙ → Z + W.",
    frontLatex: "Z_n \\xrightarrow{\\mathbb{P}} Z \\text{ et } W_n \\xrightarrow{\\mathbb{P}} W \\implies \\text{?}",
    backLatex: "Z_n + W_n \\xrightarrow{\\mathbb{P}} Z + W",
    category: "Propriétés",
    chapter: 12,
    difficulty: "moyen"
  },
  {
    id: 1206,
    front: "Convergence en loi",
    back: "Zₙ converge en loi vers Z si pour toute fonction continue bornée h, lim 𝔼[h(Zₙ)] = 𝔼[h(Z)].",
    frontLatex: "Z_n \\xrightarrow{\\mathcal{L}} Z \\Leftrightarrow \\text{?}",
    backLatex: "\\forall h \\text{ continue bornée}, \\lim \\mathbb{E}[h(Z_n)] = \\mathbb{E}[h(Z)]",
    category: "Convergences",
    chapter: 12,
    difficulty: "difficile"
  },
  {
    id: 1207,
    front: "Théorème central limite",
    back: "Pour des variables iid de moyenne m et variance σ², √n(Ȳₙ - m) converge vers 𝒩(0, σ²).",
    frontLatex: "\\text{TCL : } \\sqrt{n}(\\overline{Y}_n - m) \\xrightarrow{\\mathcal{L}} \\text{?}",
    backLatex: "\\sqrt{n}(\\overline{Y}_n - m) \\xrightarrow{\\mathcal{L}} \\mathcal{N}(0, \\sigma^2)",
    category: "Théorèmes limites",
    chapter: 12,
    difficulty: "difficile"
  },
  {
    id: 1208,
    front: "Approximation normale",
    back: "Pour n grand, Ȳₙ suit approximativement une loi 𝒩(m, σ²/n).",
    frontLatex: "\\text{Approximation : } \\overline{Y}_n \\approx \\text{?}",
    backLatex: "\\overline{Y}_n \\approx \\mathcal{N}\\left(m, \\frac{\\sigma^2}{n}\\right)",
    category: "Approximations",
    chapter: 12,
    difficulty: "moyen"
  },
  {
    id: 1209,
    front: "Condition d'application du TCL",
    back: "Le TCL s'applique aux variables iid de moyenne finie et de variance finie non nulle.",
    frontLatex: "\\text{Conditions TCL}",
    backLatex: "\\text{Variables iid, } \\mathbb{E}[Y_1] = m < \\infty, \\operatorname{Var}(Y_1) = \\sigma^2 \\in (0, +\\infty)",
    category: "Conditions",
    chapter: 12,
    difficulty: "moyen"
  }
];

// Chapitre 13: Estimation statistique avancée
export const estimationStatistiqueAvanceeFlashcards: MathFlashcard[] = [
  {
    id: 1300,
    front: "n-échantillon",
    back: "Un n-échantillon est un n-uplet (Z₁, Z₂, ..., Zₙ) de variables aléatoires mutuellement indépendantes ayant toutes la même loi que X.",
    frontLatex: "n\\text{-échantillon} \\Leftrightarrow \\text{?}",
    backLatex: "(Z_1, Z_2, \\ldots, Z_n) \\text{ mutuellement indépendantes, même loi que } X",
    category: "Échantillonnage",
    chapter: 13,
    difficulty: "facile"
  },
  {
    id: 1301,
    front: "Estimateur",
    back: "Un estimateur de θ est une variable aléatoire Tₙ = Tₙ(Z₁, ..., Zₙ) fonction de l'échantillon, indépendante de θ.",
    frontLatex: "\\text{Estimateur de } \\theta \\Leftrightarrow \\text{?}",
    backLatex: "T_n = T_n(Z_1, \\ldots, Z_n) \\text{ fonction de l'échantillon, indépendante de } \\theta",
    category: "Définitions",
    chapter: 13,
    difficulty: "facile"
  },
  {
    id: 1302,
    front: "Estimation",
    back: "Une estimation est la valeur tₙ = Tₙ(z₁, ..., zₙ) obtenue en remplaçant les variables par leurs valeurs observées.",
    frontLatex: "\\text{Estimation} \\Leftrightarrow \\text{?}",
    backLatex: "t_n = T_n(z_1, \\ldots, z_n) \\text{ valeur observée}",
    category: "Définitions",
    chapter: 13,
    difficulty: "facile"
  },
  {
    id: 1303,
    front: "Biais d'un estimateur",
    back: "Le biais de Tₙ est b_θ(Tₙ) = 𝔼(Tₙ) - θ.",
    frontLatex: "\\text{Biais de } T_n = \\text{?}",
    backLatex: "b_\\theta(T_n) = \\mathbb{E}(T_n) - \\theta",
    category: "Propriétés",
    chapter: 13,
    difficulty: "facile"
  },
  {
    id: 1304,
    front: "Estimateur sans biais",
    back: "Un estimateur est sans biais si 𝔼(Tₙ) = θ.",
    frontLatex: "T_n \\text{ sans biais} \\Leftrightarrow \\text{?}",
    backLatex: "\\mathbb{E}(T_n) = \\theta",
    category: "Propriétés",
    chapter: 13,
    difficulty: "facile"
  },
  {
    id: 1305,
    front: "Convergence (consistance) d'un estimateur",
    back: "Tₙ converge vers θ si pour tout ε > 0, lim P(|Tₙ - θ| ≥ ε) = 0.",
    frontLatex: "T_n \\text{ convergent vers } \\theta \\Leftrightarrow \\text{?}",
    backLatex: "\\forall \\varepsilon > 0, \\lim_{n \\to \\infty} \\mathbb{P}(|T_n - \\theta| \\geq \\varepsilon) = 0",
    category: "Convergence",
    chapter: 13,
    difficulty: "moyen"
  },
  {
    id: 1306,
    front: "Condition suffisante de convergence",
    back: "Si lim 𝔼(Tₙ) = θ et lim Var(Tₙ) = 0, alors Tₙ converge vers θ.",
    frontLatex: "\\text{Condition suffisante de convergence}",
    backLatex: "\\lim \\mathbb{E}(T_n) = \\theta \\text{ et } \\lim \\operatorname{Var}(T_n) = 0 \\implies T_n \\to \\theta",
    category: "Convergence",
    chapter: 13,
    difficulty: "moyen"
  },
  {
    id: 1307,
    front: "Moyenne empirique",
    back: "La moyenne empirique Z̄ₙ = (1/n)Σᵢ₌₁ⁿ Zᵢ est un estimateur sans biais de 𝔼(X).",
    frontLatex: "\\text{Moyenne empirique} = \\text{?}",
    backLatex: "\\overline{Z}_n = \\frac{1}{n} \\sum_{i=1}^n Z_i, \\text{ estimateur sans biais de } \\mathbb{E}(X)",
    category: "Estimateurs usuels",
    chapter: 13,
    difficulty: "facile"
  },
  {
    id: 1308,
    front: "Fonction continue d'un estimateur convergent",
    back: "Si Tₙ converge vers θ et f est continue, alors f(Tₙ) converge vers f(θ).",
    frontLatex: "T_n \\to \\theta \\text{ et } f \\text{ continue} \\implies \\text{?}",
    backLatex: "f(T_n) \\to f(\\theta)",
    category: "Convergence",
    chapter: 13,
    difficulty: "moyen"
  },
  {
    id: 1309,
    front: "Intervalle de confiance",
    back: "[Uₙ, Vₙ] est un intervalle de confiance pour θ au niveau 1-α si ℙ(Uₙ ≤ θ ≤ Vₙ) ≥ 1-α.",
    frontLatex: "[U_n, V_n] \\text{ intervalle de confiance niveau } 1-\\alpha \\Leftrightarrow \\text{?}",
    backLatex: "\\mathbb{P}(U_n \\leq \\theta \\leq V_n) \\geq 1 - \\alpha",
    category: "Intervalles de confiance",
    chapter: 13,
    difficulty: "moyen"
  },
  {
    id: 1310,
    front: "Niveau de confiance",
    back: "Le niveau de confiance 1-α représente la probabilité que l'intervalle contienne le paramètre θ.",
    frontLatex: "\\text{Niveau de confiance } 1-\\alpha = \\text{?}",
    backLatex: "\\mathbb{P}(\\theta \\in [U_n, V_n]) \\geq 1 - \\alpha",
    category: "Intervalles de confiance",
    chapter: 13,
    difficulty: "facile"
  },
  {
    id: 1311,
    front: "Théorème central limite pour les estimateurs",
    back: "Sous certaines conditions, √n(Tₙ - θ) converge en loi vers une normale.",
    frontLatex: "\\text{TCL pour estimateurs}",
    backLatex: "\\sqrt{n}(T_n - \\theta) \\xrightarrow{\\mathcal{L}} \\mathcal{N}(0, \\sigma^2)",
    category: "Théorèmes asymptotiques",
    chapter: 13,
    difficulty: "difficile"
  },
  {
    id: 1312,
    front: "Erreur quadratique moyenne",
    back: "L'EQM de Tₙ est 𝔼[(Tₙ - θ)²] = Var(Tₙ) + [biais(Tₙ)]².",
    frontLatex: "\\text{EQM}(T_n) = \\text{?}",
    backLatex: "\\mathbb{E}[(T_n - \\theta)^2] = \\operatorname{Var}(T_n) + [\\text{biais}(T_n)]^2",
    category: "Critères de qualité",
    chapter: 13,
    difficulty: "moyen"
  }
];

  
// Flashcards pour le chapitre 2 - Ensembles et applications
export const chapitre2EnsemblesFlashcards: MathFlashcard[] = [
  {
    id: 1,
    front: "Que signifie A ⊂ B ?",
    back: "A ⊂ B signifie que A est contenu dans B, c'est-à-dire que tout élément de A appartient également à B.",
    frontLatex: "A \\subset B \\text{ signifie ?}",
    backLatex: "\\forall x \\in A, \\quad x \\in B",
    category: "Inclusions",
    chapter: 2,
    difficulty: "facile"
  },
  {
    id: 2,
    front: "Quand deux ensembles A et B sont-ils égaux ?",
    back: "A = B si et seulement si A ⊂ B et B ⊂ A.",
    frontLatex: "A = B \\Leftrightarrow \\text{?}",
    backLatex: "A \\subset B \\land B \\subset A",
    category: "Égalité d'ensembles",
    chapter: 2,
    difficulty: "facile"
  },
  {
    id: 3,
    front: "Qu'est-ce que l'ensemble des parties de E ?",
    back: "L'ensemble des parties de E, noté ℘(E), est l'ensemble de tous les sous-ensembles de E.",
    frontLatex: "\\mathcal{P}(E) = \\text{?}",
    backLatex: "\\{ A \\mid A \\subset E \\}",
    category: "Ensemble des parties",
    chapter: 2,
    difficulty: "facile"
  },
  {
    id: 4,
    front: "Que vaut A ∩ B ?",
    back: "A ∩ B est l'ensemble des éléments qui appartiennent à la fois à A et à B.",
    frontLatex: "x \\in A \\cap B \\Leftrightarrow \\text{?}",
    backLatex: "x \\in A \\land x \\in B",
    category: "Intersection",
    chapter: 2,
    difficulty: "facile"
  },
  {
    id: 5,
    front: "Que vaut A ∪ B ?",
    back: "A ∪ B est l'ensemble des éléments qui appartiennent à A ou à B (ou aux deux).",
    frontLatex: "x \\in A \\cup B \\Leftrightarrow \\text{?}",
    backLatex: "x \\in A \\lor x \\in B",
    category: "Réunion",
    chapter: 2,
    difficulty: "facile"
  },
  {
    id: 6,
    front: "Qu'est-ce que le complémentaire de A dans E ?",
    back: "Le complémentaire de A dans E, noté A̅ ou ∁_E A, est l'ensemble des éléments de E qui n'appartiennent pas à A.",
    frontLatex: "\\overline{A} = \\text{?}",
    backLatex: "\\{ x \\in E \\mid x \\notin A \\}",
    category: "Complémentaire",
    chapter: 2,
    difficulty: "facile"
  },
  {
    id: 7,
    front: "Quelle est la loi de De Morgan pour l'intersection ?",
    back: "(A ∩ B)̅ = A̅ ∪ B̅",
    frontLatex: "\\overline{A \\cap B} = \\text{?}",
    backLatex: "\\overline{A} \\cup \\overline{B}",
    category: "Lois de De Morgan",
    chapter: 2,
    difficulty: "moyen"
  },
  {
    id: 8,
    front: "Quelle est la loi de De Morgan pour la réunion ?",
    back: "(A ∪ B)̅ = A̅ ∩ B̅",
    frontLatex: "\\overline{A \\cup B} = \\text{?}",
    backLatex: "\\overline{A} \\cap \\overline{B}",
    category: "Lois de De Morgan",
    chapter: 2,
    difficulty: "moyen"
  },
  {
    id: 9,
    front: "Qu'est-ce qu'une relation binaire sur E ?",
    back: "Une relation binaire sur E est un sous-ensemble du produit cartésien E × E.",
    frontLatex: "\\text{Relation binaire sur } E = \\text{?}",
    backLatex: "R \\subset E \\times E",
    category: "Relations binaires",
    chapter: 2,
    difficulty: "facile"
  },
  {
    id: 10,
    front: "Qu'est-ce qu'une fonction (ou application) ?",
    back: "Une fonction f de E vers F associe à chaque élément de E exactement un élément de F.",
    frontLatex: "f : E \\to F \\text{ signifie ?}",
    backLatex: "\\forall x \\in E, \\quad \\exists! y \\in F, \\quad y = f(x)",
    category: "Applications",
    chapter: 2,
    difficulty: "facile"
  },
  {
    id: 11,
    front: "Qu'est-ce qu'une application injective ?",
    back: "f est injective si elle associe des éléments différents de E à des éléments différents de F.",
    frontLatex: "f \\text{ injective } \\Leftrightarrow \\text{?}",
    backLatex: "\\forall (x_1, x_2) \\in E^2, \\quad f(x_1) = f(x_2) \\Rightarrow x_1 = x_2",
    category: "Injection",
    chapter: 2,
    difficulty: "moyen"
  },
  {
    id: 12,
    front: "Qu'est-ce qu'une application surjective ?",
    back: "f est surjective si tout élément de F a au moins un antécédent dans E.",
    frontLatex: "f \\text{ surjective } \\Leftrightarrow \\text{?}",
    backLatex: "\\forall y \\in F, \\quad \\exists x \\in E, \\quad y = f(x)",
    category: "Surjection",
    chapter: 2,
    difficulty: "moyen"
  },
  {
    id: 13,
    front: "Qu'est-ce qu'une application bijective ?",
    back: "f est bijective si elle est à la fois injective et surjective.",
    frontLatex: "f \\text{ bijective } \\Leftrightarrow \\text{?}",
    backLatex: "f \\text{ injective } \\land f \\text{ surjective}",
    category: "Bijection",
    chapter: 2,
    difficulty: "facile"
  },
  {
    id: 14,
    front: "Qu'est-ce que l'image d'un ensemble A par f ?",
    back: "L'image de A par f, notée f(A), est l'ensemble des images des éléments de A.",
    frontLatex: "f(A) = \\text{?}",
    backLatex: "\\{ f(x) \\mid x \\in A \\}",
    category: "Image",
    chapter: 2,
    difficulty: "facile"
  },
  {
    id: 15,
    front: "Qu'est-ce que l'image réciproque de B par f ?",
    back: "L'image réciproque de B par f, notée f⁻¹(B), est l'ensemble des antécédents des éléments de B.",
    frontLatex: "f^{-1}(B) = \\text{?}",
    backLatex: "\\{ x \\in E \\mid f(x) \\in B \\}",
    category: "Image réciproque",
    chapter: 2,
    difficulty: "moyen"
  },
  {
    id: 16,
    front: "Quelle est l'application identité sur E ?",
    back: "L'application identité sur E, notée Id_E, associe à chaque élément x de E l'élément x lui-même.",
    frontLatex: "Id_E(x) = \\text{?}",
    backLatex: "x \\quad \\forall x \\in E",
    category: "Application identité",
    chapter: 2,
    difficulty: "facile"
  },
  {
    id: 17,
    front: "Qu'est-ce que la composée de deux applications ?",
    back: "La composée de f et g, notée g ∘ f, est l'application qui associe à x l'élément g(f(x)).",
    frontLatex: "(g \\circ f)(x) = \\text{?}",
    backLatex: "g(f(x))",
    category: "Composition",
    chapter: 2,
    difficulty: "moyen"
  },
  {
    id: 18,
    front: "Si f est bijective, qu'est-ce que f⁻¹ ?",
    back: "f⁻¹ est l'application réciproque de f, qui est aussi bijective et telle que f⁻¹ ∘ f = Id_E et f ∘ f⁻¹ = Id_F.",
    frontLatex: "f \\text{ bijective } \\Rightarrow f^{-1} \\text{ existe et } \\text{?}",
    backLatex: "f^{-1} \\circ f = Id_E \\land f \\circ f^{-1} = Id_F",
    category: "Application réciproque",
    chapter: 2,
    difficulty: "moyen"
  },
  {
    id: 19,
    front: "Énoncé du théorème de la bijection monotone",
    back: "Soit f une application continue et strictement monotone sur un intervalle I ⊂ ℝ. Alors f est une bijection de I sur J = f(I).",
    frontLatex: "\\text{Théorème de la bijection monotone :}",
    backLatex: "f : I \\to \\mathbb{R} \\text{ continue et strictement monotone} \\Rightarrow f \\text{ bijection de } I \\text{ sur } f(I)",
    category: "Théorème de la bijection monotone",
    chapter: 2,
    difficulty: "difficile"
  },
  {
    id: 20,
    front: "Propriété des bijections monotones",
    back: "Si f est continue et strictement monotone sur I, alors f et f⁻¹ ont les mêmes variations.",
    frontLatex: "f \\text{ continue et strictement monotone} \\Rightarrow \\text{?}",
    backLatex: "f \\text{ et } f^{-1} \\text{ ont les mêmes variations}",
    category: "Théorème de la bijection monotone",
    chapter: 2,
    difficulty: "difficile"
  }
];

// Flashcards pour le chapitre 3 - Sommes, produits & coefficients binomiaux
export const chapitre3SommesProduitsFlashcards: MathFlashcard[] = [
  {
    id: 1,
    front: "Quelle est la somme d'une suite constante ?",
    back: "Pour une constante c, la somme de m à n vaut (n-m+1)×c.",
    frontLatex: "\\sum_{i=m}^n c = \\text{?}",
    backLatex: "(n-m+1) \\times c",
    category: "Sommes élémentaires",
    chapter: 3,
    difficulty: "facile"
  },
  {
    id: 2,
    front: "Quelle est la somme des n premiers entiers naturels ?",
    back: "La somme des n premiers entiers naturels vaut n(n+1)/2.",
    frontLatex: "\\sum_{i=1}^n i = \\text{?}",
    backLatex: "\\frac{n(n+1)}{2}",
    category: "Sommes arithmétiques",
    chapter: 3,
    difficulty: "facile"
  },
  {
    id: 3,
    front: "Quelle est la somme des carrés des n premiers entiers ?",
    back: "La somme des carrés des n premiers entiers vaut n(n+1)(2n+1)/6.",
    frontLatex: "\\sum_{i=1}^n i^2 = \\text{?}",
    backLatex: "\\frac{n(n+1)(2n+1)}{6}",
    category: "Sommes de puissances",
    chapter: 3,
    difficulty: "moyen"
  },
  {
    id: 4,
    front: "Quelle est la somme des cubes des n premiers entiers ?",
    back: "La somme des cubes des n premiers entiers vaut [n(n+1)/2]².",
    frontLatex: "\\sum_{i=1}^n i^3 = \\text{?}",
    backLatex: "\\left[\\frac{n(n+1)}{2}\\right]^2",
    category: "Sommes de puissances",
    chapter: 3,
    difficulty: "moyen"
  },
  {
    id: 5,
    front: "Quelle est la somme géométrique finie pour q ≠ 1 ?",
    back: "Pour q ≠ 1, la somme de q⁰ à qⁿ vaut (1-q^(n+1))/(1-q).",
    frontLatex: "\\sum_{i=0}^n q^i = \\text{?} \\quad (q \\neq 1)",
    backLatex: "\\frac{1-q^{n+1}}{1-q}",
    category: "Sommes géométriques",
    chapter: 3,
    difficulty: "moyen"
  },
  {
    id: 6,
    front: "Quelle est la somme géométrique finie pour q = 1 ?",
    back: "Pour q = 1, la somme de 1⁰ à 1ⁿ vaut n+1.",
    frontLatex: "\\sum_{i=0}^n 1^i = \\text{?}",
    backLatex: "n+1",
    category: "Sommes géométriques",
    chapter: 3,
    difficulty: "facile"
  },
  {
    id: 7,
    front: "Que vaut le coefficient binomial C(n,k) ?",
    back: "Le coefficient binomial C(n,k) = n!/(k!(n-k)!) représente le nombre de combinaisons de k éléments parmi n.",
    frontLatex: "C(n,k) = \\text{?}",
    backLatex: "\\frac{n!}{k!(n-k)!}",
    category: "Coefficients binomiaux",
    chapter: 3,
    difficulty: "moyen"
  },
  {
    id: 8,
    front: "Quelle est la formule du binôme de Newton ?",
    back: "Le développement de (a+b)ⁿ = Σ C(n,k) a^(n-k) b^k pour k=0 à n.",
    frontLatex: "(a+b)^n = \\text{?}",
    backLatex: "\\sum_{k=0}^n \\binom{n}{k} a^{n-k} b^k",
    category: "Binôme de Newton",
    chapter: 3,
    difficulty: "moyen"
  },
  {
    id: 9,
    front: "Quelles sont les propriétés des coefficients binomiaux ?",
    back: "C(n,0) = 1, C(n,n) = 1, C(n,k) = C(n,n-k), et la relation de Pascal C(n,k) = C(n-1,k-1) + C(n-1,k).",
    frontLatex: "\\text{Propriétés de } \\binom{n}{k} \\text{ :}",
    backLatex: "\\binom{n}{0} = 1, \\quad \\binom{n}{n} = 1, \\quad \\binom{n}{k} = \\binom{n}{n-k}, \\quad \\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}",
    category: "Propriétés binômiales",
    chapter: 3,
    difficulty: "difficile"
  },
  {
    id: 10,
    front: "Quel est le développement de (1+x)ⁿ ?",
    back: "Le développement de (1+x)ⁿ = Σ C(n,k) x^k pour k=0 à n.",
    frontLatex: "(1+x)^n = \\text{?}",
    backLatex: "\\sum_{k=0}^n \\binom{n}{k} x^k",
    category: "Développements binômiaux",
    chapter: 3,
    difficulty: "moyen"
  },
  {
    id: 11,
    front: "Comment factoriser une somme télescopique ?",
    back: "Une somme télescopique est de la forme Σ (u_{k+1} - u_k) = u_{n+1} - u_1.",
    frontLatex: "\\sum_{k=1}^n (u_{k+1} - u_k) = \\text{?}",
    backLatex: "u_{n+1} - u_1",
    category: "Sommes télescopiques",
    chapter: 3,
    difficulty: "moyen"
  },
  {
    id: 12,
    front: "Comment calculer un produit télescopique ?",
    back: "Un produit télescopique est de la forme ∏ (1 - v_k) où la plupart des termes se simplifient.",
    frontLatex: "\\prod_{k=1}^n (1 - v_k) = \\text{?}",
    backLatex: "\\text{Produit où les termes intermédiaires se simplifient}",
    category: "Produits télescopiques",
    chapter: 3,
    difficulty: "moyen"
  },
  {
    id: 13,
    front: "Comment changer l'indice d'une somme ?",
    back: "Pour changer d'indice : remplacer i par i+a, ajuster les bornes en conséquence.",
    frontLatex: "\\sum_{i=m}^n f(i) = \\text{? (changement d'indice)}",
    backLatex: "\\sum_{j=m+a}^{n+a} f(j-a)",
    category: "Manipulation d'indices",
    chapter: 3,
    difficulty: "moyen"
  },
  {
    id: 14,
    front: "Comment séparer une somme en deux parties ?",
    back: "Σ_{i=1}^n f(i) = Σ_{i=1}^k f(i) + Σ_{i=k+1}^n f(i).",
    frontLatex: "\\sum_{i=1}^n f(i) = \\text{?}",
    backLatex: "\\sum_{i=1}^k f(i) + \\sum_{i=k+1}^n f(i)",
    category: "Manipulation de bornes",
    chapter: 3,
    difficulty: "facile"
  },
  {
    id: 15,
    front: "Quelle est la formule pour une somme avec terme constant ?",
    back: "Σ_{i=m}^n c = (n-m+1)×c.",
    frontLatex: "\\sum_{i=m}^n c = \\text{?}",
    backLatex: "(n-m+1) \\times c",
    category: "Sommes avec terme constant",
    chapter: 3,
    difficulty: "facile"
  },
  {
    id: 16,
    front: "Comment linéariser une somme double ?",
    back: "Σ_{i=1}^m Σ_{j=1}^n f(i,j) = Σ_{k=1}^{mn} f(i(k),j(k)) où k parcourt tous les couples (i,j).",
    frontLatex: "\\sum_{i=1}^m \\sum_{j=1}^n f(i,j) = \\text{?}",
    backLatex: "\\sum_{k=1}^{mn} f(i(k),j(k))",
    category: "Sommes doubles",
    chapter: 3,
    difficulty: "difficile"
  },
  {
    id: 17,
    front: "Quelle est la somme des coefficients binomiaux d'ordre n ?",
    back: "La somme des C(n,k) pour k=0 à n vaut 2^n.",
    frontLatex: "\\sum_{k=0}^n \\binom{n}{k} = \\text{?}",
    backLatex: "2^n",
    category: "Propriétés binômiales",
    chapter: 3,
    difficulty: "moyen"
  },
  {
    id: 18,
    front: "Comment développer (a+b+c)² ?",
    back: "Utiliser le binôme : (a+b+c)² = a² + b² + c² + 2ab + 2ac + 2bc.",
    frontLatex: "(a+b+c)^2 = \\text{?}",
    backLatex: "a^2 + b^2 + c^2 + 2ab + 2ac + 2bc",
    category: "Développements",
    chapter: 3,
    difficulty: "facile"
  },
  {
    id: 19,
    front: "Quel est le développement de (1+x)^n pour n négatif ?",
    back: "Pour |x| < 1, (1+x)^(-n) = Σ C(n+k-1,k) x^k.",
    frontLatex: "(1+x)^{-n} = \\text{?} \\quad (|x| < 1)",
    backLatex: "\\sum_{k=0}^\\infty \\binom{n+k-1}{k} x^k",
    category: "Binôme généralisé",
    chapter: 3,
    difficulty: "difficile"
  },
  {
    id: 20,
    front: "Comment reconnaître une somme télescopique ?",
    back: "Une somme est télescopique si elle s'écrit comme Σ (terme dépendant de k+1 - terme dépendant de k).",
    frontLatex: "\\text{Somme télescopique = ?}",
    backLatex: "\\sum (u_{k+1} - u_k) = u_{n+1} - u_1",
    category: "Reconnaissance de sommes",
    chapter: 3,
    difficulty: "moyen"
  }
];

// Flashcards pour les autres chapitres (versions simplifiées)
export const chapitre4SuitesNumeriquesFlashcards: MathFlashcard[] = [
  {
    id: 1,
    front: "Qu'est-ce qu'une suite arithmétique ?",
    back: "Une suite où la différence entre deux termes consécutifs est constante.",
    frontLatex: "\\text{Suite arithmétique = ?}",
    backLatex: "u_{n+1} - u_n = r \\text{ (raison constante)}",
    category: "Suites arithmétiques",
    chapter: 4,
    difficulty: "facile"
  },
  {
    id: 2,
    front: "Quelle est l'expression générale d'une suite arithmétique ?",
    back: "Pour une suite arithmétique de raison r et premier terme u₀, u_n = u₀ + n×r.",
    frontLatex: "\\text{Suite arithmétique : } u_n = \\text{?}",
    backLatex: "u_0 + n \\times r",
    category: "Suites arithmétiques",
    chapter: 4,
    difficulty: "facile"
  },
  {
    id: 3,
    front: "Quelle est la somme des n premiers termes d'une suite arithmétique ?",
    back: "S_n = n×(u₀ + uₙ)/2 où uₙ est le dernier terme.",
    frontLatex: "\\text{Somme arithmétique : } S_n = \\text{?}",
    backLatex: "\\frac{n}{2} \\times (u_0 + u_n)",
    category: "Suites arithmétiques",
    chapter: 4,
    difficulty: "facile"
  },
  {
    id: 4,
    front: "Qu'est-ce qu'une suite géométrique ?",
    back: "Une suite où le rapport entre deux termes consécutifs est constant.",
    frontLatex: "\\text{Suite géométrique = ?}",
    backLatex: "\\frac{u_{n+1}}{u_n} = q \\text{ (raison constante)}",
    category: "Suites géométriques",
    chapter: 4,
    difficulty: "facile"
  },
  {
    id: 5,
    front: "Quelle est l'expression générale d'une suite géométrique ?",
    back: "Pour une suite géométrique de raison q et premier terme u₀, u_n = u₀ × q^n.",
    frontLatex: "\\text{Suite géométrique : } u_n = \\text{?}",
    backLatex: "u_0 \\times q^n",
    category: "Suites géométriques",
    chapter: 4,
    difficulty: "facile"
  },
  {
    id: 6,
    front: "Quelle est la somme des n premiers termes d'une suite géométrique ?",
    back: "Pour q ≠ 1 : S_n = u₀×(1-q^n)/(1-q). Pour q = 1 : S_n = n×u₀.",
    frontLatex: "\\text{Somme géométrique : } S_n = \\text{?}",
    backLatex: "\\begin{cases} \\frac{u_0(1-q^n)}{1-q} & \\text{si } q \\neq 1 \\\\ n u_0 & \\text{si } q = 1 \\end{cases}",
    category: "Suites géométriques",
    chapter: 4,
    difficulty: "moyen"
  },
  {
    id: 7,
    front: "Quand une suite géométrique converge-t-elle ?",
    back: "Une suite géométrique converge si et seulement si |q| < 1, et elle converge vers 0.",
    frontLatex: "u_n = u_0 q^n \\text{ converge si ?}",
    backLatex: "|q| < 1 \\text{ et } \\lim u_n = 0",
    category: "Suites géométriques",
    chapter: 4,
    difficulty: "moyen"
  },
  {
    id: 8,
    front: "Quand une suite converge-t-elle vers L ?",
    back: "Une suite converge vers L si ∀ε>0, ∃N tel que ∀n≥N, |u_n - L| < ε.",
    frontLatex: "u_n \\to L \\Leftrightarrow \\text{?}",
    backLatex: "\\forall \\epsilon > 0, \\quad \\exists N, \\quad \\forall n \\geq N, \\quad |u_n - L| < \\epsilon",
    category: "Convergence",
    chapter: 4,
    difficulty: "moyen"
  },
  {
    id: 9,
    front: "Qu'est-ce qu'une suite majorée ?",
    back: "Une suite est majorée s'il existe M ∈ ℝ tel que ∀n ∈ ℕ, u_n ≤ M.",
    frontLatex: "\\text{Suite majorée = ?}",
    backLatex: "\\exists M \\in \\mathbb{R}, \\quad \\forall n \\in \\mathbb{N}, \\quad u_n \\leq M",
    category: "Majoration et minoration",
    chapter: 4,
    difficulty: "facile"
  },
  {
    id: 10,
    front: "Qu'est-ce qu'une suite minorée ?",
    back: "Une suite est minorée s'il existe m ∈ ℝ tel que ∀n ∈ ℕ, u_n ≥ m.",
    frontLatex: "\\text{Suite minorée = ?}",
    backLatex: "\\exists m \\in \\mathbb{R}, \\quad \\forall n \\in \\mathbb{N}, \\quad u_n \\geq m",
    category: "Majoration et minoration",
    chapter: 4,
    difficulty: "facile"
  },
  {
    id: 11,
    front: "Qu'est-ce qu'une suite bornée ?",
    back: "Une suite est bornée si elle est à la fois majorée et minorée.",
    frontLatex: "\\text{Suite bornée = ?}",
    backLatex: "\\text{majorée et minorée}",
    category: "Majoration et minoration",
    chapter: 4,
    difficulty: "facile"
  },
  {
    id: 12,
    front: "Qu'est-ce qu'une suite monotone ?",
    back: "Une suite est croissante si ∀n ∈ ℕ, u_n ≤ u_{n+1}, décroissante si ∀n ∈ ℕ, u_n ≥ u_{n+1}.",
    frontLatex: "\\text{Suite croissante = ?}",
    backLatex: "\\forall n \\in \\mathbb{N}, \\quad u_n \\leq u_{n+1}",
    category: "Suites monotones",
    chapter: 4,
    difficulty: "facile"
  },
  {
    id: 13,
    front: "Théorème : Toute suite monotone convergente est bornée.",
    back: "Vrai : une suite monotone convergente est nécessairement bornée.",
    frontLatex: "\\text{Suite monotone convergente } \\Rightarrow \\text{?}",
    backLatex: "\\text{bornée}",
    category: "Suites monotones",
    chapter: 4,
    difficulty: "moyen"
  },
  {
    id: 14,
    front: "Réciproque : Toute suite bornée converge-t-elle ?",
    back: "Faux : une suite bornée ne converge pas forcément (exemple : (-1)^n).",
    frontLatex: "\\text{Suite bornée } \\Rightarrow \\text{convergente ?}",
    backLatex: "\\text{Faux !} \\quad ((-1)^n \\text{ est bornée mais diverge})",
    category: "Suites bornées",
    chapter: 4,
    difficulty: "moyen"
  },
  {
    id: 15,
    front: "Qu'est-ce que la limite infinie ?",
    back: "Une suite tend vers +∞ si ∀A>0, ∃N tel que ∀n≥N, u_n > A. Vers -∞ si ∀A<0, ∃N tel que ∀n≥N, u_n < A.",
    frontLatex: "u_n \\to +\\infty \\Leftrightarrow \\text{?}",
    backLatex: "\\forall A > 0, \\quad \\exists N, \\quad \\forall n \\geq N, \\quad u_n > A",
    category: "Limite infinie",
    chapter: 4,
    difficulty: "moyen"
  },
  {
    id: 16,
    front: "Opérations sur les limites : lim(u_n + v_n) = ?",
    back: "lim(u_n + v_n) = lim u_n + lim v_n si les limites existent.",
    frontLatex: "\\lim (u_n + v_n) = \\text{?}",
    backLatex: "\\lim u_n + \\lim v_n",
    category: "Opérations sur les limites",
    chapter: 4,
    difficulty: "facile"
  },
  {
    id: 17,
    front: "Opérations sur les limites : lim(u_n × v_n) = ?",
    back: "lim(u_n × v_n) = lim u_n × lim v_n si les limites existent.",
    frontLatex: "\\lim (u_n \\times v_n) = \\text{?}",
    backLatex: "\\lim u_n \\times \\lim v_n",
    category: "Opérations sur les limites",
    chapter: 4,
    difficulty: "facile"
  },
  {
    id: 18,
    front: "Opérations sur les limites : lim(u_n / v_n) = ?",
    back: "lim(u_n / v_n) = lim u_n / lim v_n si lim v_n ≠ 0.",
    frontLatex: "\\lim (u_n / v_n) = \\text{?}",
    backLatex: "\\frac{\\lim u_n}{\\lim v_n} \\quad (\\lim v_n \\neq 0)",
    category: "Opérations sur les limites",
    chapter: 4,
    difficulty: "moyen"
  },
  {
    id: 19,
    front: "Théorème d'encadrement (généralisé)",
    back: "Si ∀n, u_n ≤ v_n ≤ w_n et lim u_n = lim w_n = L, alors lim v_n = L.",
    frontLatex: "\\text{Théorème d'encadrement :}",
    backLatex: "u_n \\leq v_n \\leq w_n \\land \\lim u_n = \\lim w_n = L \\Rightarrow \\lim v_n = L",
    category: "Théorèmes sur les limites",
    chapter: 4,
    difficulty: "moyen"
  },
  {
    id: 20,
    front: "Qu'est-ce qu'une suite de Cauchy ?",
    back: "Une suite est de Cauchy si ∀ε>0, ∃N tel que ∀p,q ≥ N, |u_p - u_q| < ε.",
    frontLatex: "\\text{Suite de Cauchy = ?}",
    backLatex: "\\forall \\epsilon > 0, \\quad \\exists N, \\quad \\forall p,q \\geq N, \\quad |u_p - u_q| < \\epsilon",
    category: "Suites de Cauchy",
    chapter: 4,
    difficulty: "difficile"
  }
];

export const chapitre5FonctionsReellesFlashcards: MathFlashcard[] = [
  {
    id: 1,
    front: "Qu'est-ce qu'une fonction paire ?",
    back: "Une fonction paire vérifie f(-x) = f(x) pour tout x dans son domaine.",
    frontLatex: "f \\text{ paire } \\Leftrightarrow \\text{?}",
    backLatex: "f(-x) = f(x) \\quad \\forall x \\in \\mathbb{R}",
    category: "Fonctions paires",
    chapter: 5,
    difficulty: "facile"
  },
  {
    id: 2,
    front: "Qu'est-ce qu'une fonction impaire ?",
    back: "Une fonction impaire vérifie f(-x) = -f(x) pour tout x dans son domaine.",
    frontLatex: "f \\text{ impaire } \\Leftrightarrow \\text{?}",
    backLatex: "f(-x) = -f(x) \\quad \\forall x \\in \\mathbb{R}",
    category: "Fonctions impaires",
    chapter: 5,
    difficulty: "facile"
  },
  {
    id: 3,
    front: "Qu'est-ce qu'une fonction périodique ?",
    back: "Une fonction périodique admet une période T > 0 telle que f(x+T) = f(x) pour tout x.",
    frontLatex: "f \\text{ périodique de période } T \\Leftrightarrow \\text{?}",
    backLatex: "f(x+T) = f(x) \\quad \\forall x \\in \\mathbb{R}",
    category: "Fonctions périodiques",
    chapter: 5,
    difficulty: "facile"
  },
  {
    id: 4,
    front: "Qu'est-ce qu'une fonction continue en a ?",
    back: "f est continue en a si lim(x→a) f(x) = f(a).",
    frontLatex: "f \\text{ continue en } a \\Leftrightarrow \\text{?}",
    backLatex: "\\lim_{x \\to a} f(x) = f(a)",
    category: "Continuité",
    chapter: 5,
    difficulty: "moyen"
  },
  {
    id: 5,
    front: "Qu'est-ce qu'une fonction continue sur un intervalle ?",
    back: "f est continue sur I si elle est continue en tout point de I.",
    frontLatex: "f \\text{ continue sur } I \\Leftrightarrow \\text{?}",
    backLatex: "\\forall a \\in I, \\quad \\lim_{x \\to a} f(x) = f(a)",
    category: "Continuité",
    chapter: 5,
    difficulty: "moyen"
  },
  {
    id: 6,
    front: "Théorème des valeurs intermédiaires (TVI)",
    back: "Si f continue sur [a,b] et f(a) < k < f(b), alors ∃c ∈ [a,b] tel que f(c) = k.",
    frontLatex: "\\text{TVI : si } f \\text{ continue sur } [a,b] \\text{ et } f(a) < k < f(b) \\text{ alors ?}",
    backLatex: "\\exists c \\in [a,b], \\quad f(c) = k",
    category: "Théorèmes",
    chapter: 5,
    difficulty: "moyen"
  },
  {
    id: 7,
    front: "Propriétés des fonctions continues sur un segment",
    back: "Une fonction continue sur [a,b] est bornée et atteint ses bornes.",
    frontLatex: "f \\text{ continue sur } [a,b] \\Rightarrow \\text{?}",
    backLatex: "f \\text{ bornée et atteint ses bornes}",
    category: "Propriétés des fonctions continues",
    chapter: 5,
    difficulty: "moyen"
  },
  {
    id: 8,
    front: "Qu'est-ce qu'une fonction dérivable en a ?",
    back: "f est dérivable en a si f'(a) = lim(h→0) [f(a+h) - f(a)]/h existe.",
    frontLatex: "f \\text{ dérivable en } a \\Leftrightarrow \\text{?}",
    backLatex: "f'(a) = \\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h} \\text{ existe}",
    category: "Dérivabilité",
    chapter: 5,
    difficulty: "moyen"
  },
  {
    id: 9,
    front: "Si f est dérivable en a, alors f est continue en a.",
    back: "Vrai : la dérivabilité implique la continuité.",
    frontLatex: "f \\text{ dérivable en } a \\Rightarrow \\text{f continue en a ?}",
    backLatex: "\\text{Oui !}",
    category: "Relation dérivabilité-continuité",
    chapter: 5,
    difficulty: "facile"
  },
  {
    id: 10,
    front: "Réciproque : si f est continue en a, alors f est dérivable en a ?",
    back: "Faux : exemple f(x) = |x| en 0.",
    frontLatex: "f \\text{ continue en } a \\Rightarrow \\text{f dérivable en a ?}",
    backLatex: "\\text{Faux !} \\quad (f(x) = |x| \\text{ en 0})",
    category: "Relation dérivabilité-continuité",
    chapter: 5,
    difficulty: "moyen"
  },
  {
    id: 11,
    front: "Théorème de Rolle",
    back: "Si f continue sur [a,b], dérivable sur ]a,b[, et f(a) = f(b), alors ∃c ∈ ]a,b[ tel que f'(c) = 0.",
    frontLatex: "\\text{Théorème de Rolle :}",
    backLatex: "f \\text{ continue sur } [a,b], \\quad f \\text{ dérivable sur } ]a,b[, \\quad f(a) = f(b) \\Rightarrow \\exists c \\in ]a,b[, \\quad f'(c) = 0",
    category: "Théorèmes",
    chapter: 5,
    difficulty: "moyen"
  },
  {
    id: 12,
    front: "Théorème des accroissements finis",
    back: "Si f dérivable sur ]a,b[, alors ∃c ∈ ]a,b[ tel que f'(c) = [f(b) - f(a)]/(b-a).",
    frontLatex: "\\text{Théorème des accroissements finis :}",
    backLatex: "f \\text{ dérivable sur } ]a,b[ \\Rightarrow \\exists c \\in ]a,b[, \\quad f'(c) = \\frac{f(b) - f(a)}{b - a}",
    category: "Théorèmes",
    chapter: 5,
    difficulty: "difficile"
  },
  {
    id: 13,
    front: "Condition nécessaire d'existence d'extremum local",
    back: "Si f admet un extremum local en a et est dérivable en a, alors f'(a) = 0.",
    frontLatex: "\\text{Extremum local en } a \\land f \\text{ dérivable en } a \\Rightarrow \\text{?}",
    backLatex: "f'(a) = 0",
    category: "Extremums",
    chapter: 5,
    difficulty: "moyen"
  },
  {
    id: 14,
    front: "Qu'est-ce qu'un point d'inflexion ?",
    back: "Un point où la concavité change de signe, et où f''(a) = 0 si elle existe.",
    frontLatex: "\\text{Point d'inflexion = ?}",
    backLatex: "\\text{point où la concavité change, } f''(a) = 0",
    category: "Points d'inflexion",
    chapter: 5,
    difficulty: "moyen"
  },
  {
    id: 15,
    front: "Qu'est-ce qu'une fonction convexe ?",
    back: "f est convexe sur I si ∀x,y ∈ I, ∀t ∈ [0,1], f(tx + (1-t)y) ≤ tf(x) + (1-t)f(y).",
    frontLatex: "f \\text{ convexe sur } I \\Leftrightarrow \\text{?}",
    backLatex: "\\forall x,y \\in I, \\quad \\forall t \\in [0,1], \\quad f(tx + (1-t)y) \\leq t f(x) + (1-t) f(y)",
    category: "Convexité",
    chapter: 5,
    difficulty: "difficile"
  },
  {
    id: 16,
    front: "Pour une fonction convexe dérivable, que dire de f' ?",
    back: "f' est croissante sur l'intervalle de définition.",
    frontLatex: "f \\text{ convexe } \\land f \\text{ dérivable } \\Rightarrow f' \\text{ ?}",
    backLatex: "\\text{croissante}",
    category: "Convexité",
    chapter: 5,
    difficulty: "moyen"
  },
  {
    id: 17,
    front: "Qu'est-ce qu'une asymptote verticale ?",
    back: "Une droite x = a est asymptote verticale si lim(x→a) f(x) = ±∞.",
    frontLatex: "\\text{Asymptote verticale :}",
    backLatex: "x = a \\text{ si } \\lim_{x \\to a} f(x) = \\pm \\infty",
    category: "Asymptotes",
    chapter: 5,
    difficulty: "moyen"
  },
  {
    id: 18,
    front: "Qu'est-ce qu'une asymptote horizontale ?",
    back: "Une droite y = L est asymptote horizontale si lim(x→±∞) f(x) = L.",
    frontLatex: "\\text{Asymptote horizontale :}",
    backLatex: "y = L \\text{ si } \\lim_{x \\to \\pm \\infty} f(x) = L",
    category: "Asymptotes",
    chapter: 5,
    difficulty: "moyen"
  },
  {
    id: 19,
    front: "Qu'est-ce qu'une asymptote oblique ?",
    back: "Une droite y = ax + b est asymptote oblique si lim(x→±∞) [f(x) - (ax + b)] = 0.",
    frontLatex: "\\text{Asymptote oblique :}",
    backLatex: "y = ax + b \\text{ si } \\lim_{x \\to \\pm \\infty} [f(x) - (ax + b)] = 0",
    category: "Asymptotes",
    chapter: 5,
    difficulty: "difficile"
  },
  {
    id: 20,
    front: "Méthode pour trouver l'asymptote oblique",
    back: "Calculer a = lim(x→±∞) f(x)/x et b = lim(x→±∞) [f(x) - ax].",
    frontLatex: "\\text{Pour trouver } y = ax + b \\text{ asymptote :}",
    backLatex: "a = \\lim_{x \\to \\pm \\infty} \\frac{f(x)}{x}, \\quad b = \\lim_{x \\to \\pm \\infty} [f(x) - ax]",
    category: "Asymptotes",
    chapter: 5,
    difficulty: "difficile"
  }
];

export const chapitre6DerivationFlashcards: MathFlashcard[] = [
  {
    id: 1,
    front: "Quelle est la définition de la dérivée ?",
    back: "La dérivée de f en a est f'(a) = lim(h→0) [f(a+h) - f(a)]/h.",
    frontLatex: "f'(a) = \\text{?}",
    backLatex: "\\lim_{h \\to 0} \\frac{f(a+h) - f(a)}{h}",
    category: "Définition",
    chapter: 6,
    difficulty: "moyen"
  },
  {
    id: 2,
    front: "Quelle est la dérivée de x^n ?",
    back: "La dérivée de x^n est n×x^(n-1).",
    frontLatex: "(x^n)' = \\text{?}",
    backLatex: "n x^{n-1}",
    category: "Dérivées usuelles",
    chapter: 6,
    difficulty: "facile"
  },
  {
    id: 3,
    front: "Quelle est la dérivée de e^x ?",
    back: "La dérivée de e^x est e^x.",
    frontLatex: "(e^x)' = \\text{?}",
    backLatex: "e^x",
    category: "Dérivées usuelles",
    chapter: 6,
    difficulty: "facile"
  },
  {
    id: 4,
    front: "Quelle est la dérivée de ln(x) ?",
    back: "La dérivée de ln(x) est 1/x pour x > 0.",
    frontLatex: "(\\ln x)' = \\text{?}",
    backLatex: "\\frac{1}{x} \\quad (x > 0)",
    category: "Dérivées usuelles",
    chapter: 6,
    difficulty: "facile"
  },
  {
    id: 5,
    front: "Quelle est la dérivée de cos(x) ?",
    back: "La dérivée de cos(x) est -sin(x).",
    frontLatex: "(\\cos x)' = \\text{?}",
    backLatex: "-\\sin x",
    category: "Dérivées trigonométriques",
    chapter: 6,
    difficulty: "facile"
  },
  {
    id: 6,
    front: "Quelle est la dérivée de sin(x) ?",
    back: "La dérivée de sin(x) est cos(x).",
    frontLatex: "(\\sin x)' = \\text{?}",
    backLatex: "\\cos x",
    category: "Dérivées trigonométriques",
    chapter: 6,
    difficulty: "facile"
  },
  {
    id: 7,
    front: "Règle de dérivation : dérivée d'une somme",
    back: "(f+g)' = f' + g'",
    frontLatex: "(f + g)' = \\text{?}",
    backLatex: "f' + g'",
    category: "Règles de dérivation",
    chapter: 6,
    difficulty: "facile"
  },
  {
    id: 8,
    front: "Règle de dérivation : dérivée d'un produit",
    back: "(f×g)' = f'×g + f×g'",
    frontLatex: "(f \\times g)' = \\text{?}",
    backLatex: "f' g + f g'",
    category: "Règles de dérivation",
    chapter: 6,
    difficulty: "moyen"
  },
  {
    id: 9,
    front: "Règle de dérivation : dérivée d'un quotient",
    back: "(f/g)' = (f'×g - f×g')/g² si g ≠ 0",
    frontLatex: "\\left( \\frac{f}{g} \\right)' = \\text{?}",
    backLatex: "\\frac{f' g - f g'}{g^2} \\quad (g \\neq 0)",
    category: "Règles de dérivation",
    chapter: 6,
    difficulty: "moyen"
  },
  {
    id: 10,
    front: "Règle de dérivation : dérivée d'une fonction composée",
    back: "(f∘g)' = f'(g) × g'",
    frontLatex: "(f \\circ g)' = \\text{?}",
    backLatex: "f'(g) \\times g'",
    category: "Règles de dérivation",
    chapter: 6,
    difficulty: "moyen"
  },
  {
    id: 11,
    front: "Quelle est la dérivée de a^x ?",
    back: "La dérivée de a^x est a^x × ln(a).",
    frontLatex: "(a^x)' = \\text{?}",
    backLatex: "a^x \\ln a",
    category: "Dérivées usuelles",
    chapter: 6,
    difficulty: "facile"
  },
  {
    id: 12,
    front: "Quelle est la dérivée de x^a (a réel) ?",
    back: "La dérivée de x^a est a×x^(a-1).",
    frontLatex: "(x^a)' = \\text{?}",
    backLatex: "a x^{a-1}",
    category: "Dérivées usuelles",
    chapter: 6,
    difficulty: "facile"
  },
  {
    id: 13,
    front: "Quelle est la dérivée de tan(x) ?",
    back: "La dérivée de tan(x) est 1/cos²(x) = sec²(x).",
    frontLatex: "(\\tan x)' = \\text{?}",
    backLatex: "\\frac{1}{\\cos^2 x} = \\sec^2 x",
    category: "Dérivées trigonométriques",
    chapter: 6,
    difficulty: "moyen"
  },
  {
    id: 14,
    front: "Dérivée de la fonction inverse",
    back: "Si f est bijective et dérivable, alors (f⁻¹)'(b) = 1/f'(a) où b = f(a).",
    frontLatex: "\\text{Si } f \\text{ bijective dérivable, alors } (f^{-1})' = \\text{?}",
    backLatex: "\\frac{1}{f'(a)} \\quad \\text{où } b = f(a)",
    category: "Fonction inverse",
    chapter: 6,
    difficulty: "difficile"
  },
  {
    id: 15,
    front: "Quelle est la dérivée de arcsin(x) ?",
    back: "La dérivée de arcsin(x) est 1/√(1-x²) pour |x| < 1.",
    frontLatex: "(\\arcsin x)' = \\text{?}",
    backLatex: "\\frac{1}{\\sqrt{1 - x^2}} \\quad (|x| < 1)",
    category: "Dérivées des fonctions trigonométriques inverses",
    chapter: 6,
    difficulty: "moyen"
  },
  {
    id: 16,
    front: "Quelle est la dérivée d'arctan(x) ?",
    back: "La dérivée d'arctan(x) est 1/(1+x²).",
    frontLatex: "(\\arctan x)' = \\text{?}",
    backLatex: "\\frac{1}{1 + x^2}",
    category: "Dérivées des fonctions trigonométriques inverses",
    chapter: 6,
    difficulty: "facile"
  },
  {
    id: 17,
    front: "Quelle est la dérivée de ln|u| où u > 0 ?",
    back: "La dérivée de ln|u| est 1/u × u'/|u| = u'/u.",
    frontLatex: "(\\ln |u|)' = \\text{?}",
    backLatex: "\\frac{u'}{u} \\quad (u > 0)",
    category: "Dérivées usuelles",
    chapter: 6,
    difficulty: "moyen"
  },
  {
    id: 18,
    front: "Règle de dérivation : dérivée d'une constante",
    back: "(k)' = 0 pour toute constante k.",
    frontLatex: "(k)' = \\text{?}",
    backLatex: "0",
    category: "Règles de dérivation",
    chapter: 6,
    difficulty: "facile"
  },
  {
    id: 19,
    front: "Dérivée seconde : interprétation géométrique",
    back: "f''(a) donne la concavité de la courbe en a : positive = concave vers le haut, négative = concave vers le bas.",
    frontLatex: "f''(a) > 0 \\text{ signifie ?}",
    backLatex: "\\text{concave vers le haut en } a",
    category: "Dérivée seconde",
    chapter: 6,
    difficulty: "moyen"
  },
  {
    id: 20,
    front: "Équations différentielles du premier ordre",
    back: "Une équation y' = f(x,y) est une équation différentielle du premier ordre.",
    frontLatex: "\\text{Équation différentielle 1er ordre :}",
    backLatex: "y' = f(x,y)",
    category: "Équations différentielles",
    chapter: 6,
    difficulty: "moyen"
  }
];

export const chapitre7IntegrationFlashcards: MathFlashcard[] = [
  {
    id: 1,
    front: "Qu'est-ce qu'une primitive de f ?",
    back: "Une primitive de f est une fonction F telle que F' = f.",
    frontLatex: "\\text{Primitive de } f = \\text{?}",
    backLatex: "F \\text{ telle que } F' = f",
    category: "Primitives",
    chapter: 7,
    difficulty: "facile"
  },
  {
    id: 2,
    front: "Quelle est l'intégrale de x^n dx ?",
    back: "L'intégrale de x^n dx vaut x^(n+1)/(n+1) + C pour n ≠ -1.",
    frontLatex: "\\int x^n \\, dx = \\text{?}",
    backLatex: "\\frac{x^{n+1}}{n+1} + C \\quad (n \\neq -1)",
    category: "Intégrales usuelles",
    chapter: 7,
    difficulty: "facile"
  },
  {
    id: 3,
    front: "Quelle est l'intégrale de e^x dx ?",
    back: "L'intégrale de e^x dx vaut e^x + C.",
    frontLatex: "\\int e^x \\, dx = \\text{?}",
    backLatex: "e^x + C",
    category: "Intégrales usuelles",
    chapter: 7,
    difficulty: "facile"
  },
  {
    id: 4,
    front: "Quelle est l'intégrale de 1/x dx ?",
    back: "L'intégrale de 1/x dx vaut ln|x| + C pour x ≠ 0.",
    frontLatex: "\\int \\frac{1}{x} \\, dx = \\text{?}",
    backLatex: "\\ln |x| + C \\quad (x \\neq 0)",
    category: "Intégrales usuelles",
    chapter: 7,
    difficulty: "facile"
  },
  {
    id: 5,
    front: "Quelle est l'intégrale de cos(x) dx ?",
    back: "L'intégrale de cos(x) dx vaut sin(x) + C.",
    frontLatex: "\\int \\cos x \\, dx = \\text{?}",
    backLatex: "\\sin x + C",
    category: "Intégrales trigonométriques",
    chapter: 7,
    difficulty: "facile"
  },
  {
    id: 6,
    front: "Quelle est l'intégrale de sin(x) dx ?",
    back: "L'intégrale de sin(x) dx vaut -cos(x) + C.",
    frontLatex: "\\int \\sin x \\, dx = \\text{?}",
    backLatex: "-\\cos x + C",
    category: "Intégrales trigonométriques",
    chapter: 7,
    difficulty: "facile"
  },
  {
    id: 7,
    front: "Intégrale par changement de variable",
    back: "Si u = g(x), alors ∫f(g(x))×g'(x) dx = ∫f(u) du",
    frontLatex: "\\text{Changement de variable :}",
    backLatex: "\\int f(g(x)) g'(x) \\, dx = \\int f(u) \\, du \\quad (u = g(x))",
    category: "Méthodes d'intégration",
    chapter: 7,
    difficulty: "moyen"
  },
  {
    id: 8,
    front: "Intégration par parties",
    back: "∫u dv = u×v - ∫v du",
    frontLatex: "\\int u \\, dv = \\text{?}",
    backLatex: "u \\cdot v - \\int v \\, du",
    category: "Méthodes d'intégration",
    chapter: 7,
    difficulty: "moyen"
  },
  {
    id: 9,
    front: "Théorème fondamental du calcul intégral",
    back: "Si F est une primitive de f sur [a,b], alors ∫(a→b) f(x) dx = F(b) - F(a).",
    frontLatex: "\\int_a^b f(x) \\, dx = \\text{?}",
    backLatex: "F(b) - F(a) \\quad \\text{où } F' = f",
    category: "Théorème fondamental",
    chapter: 7,
    difficulty: "moyen"
  },
  {
    id: 10,
    front: "Propriétés des intégrales : linéarité",
    back: "∫[αf(x) + βg(x)] dx = α∫f(x) dx + β∫g(x) dx",
    frontLatex: "\\int [\\alpha f(x) + \\beta g(x)] \\, dx = \\text{?}",
    backLatex: "\\alpha \\int f(x) \\, dx + \\beta \\int g(x) \\, dx",
    category: "Propriétés des intégrales",
    chapter: 7,
    difficulty: "facile"
  },
  {
    id: 11,
    front: "Propriétés des intégrales : additivité",
    back: "∫(a→c) f(x) dx = ∫(a→b) f(x) dx + ∫(b→c) f(x) dx",
    frontLatex: "\\int_a^c f(x) \\, dx = \\text{?}",
    backLatex: "\\int_a^b f(x) \\, dx + \\int_b^c f(x) \\, dx",
    category: "Propriétés des intégrales",
    chapter: 7,
    difficulty: "facile"
  },
  {
    id: 12,
    front: "Intégrale d'une fonction constante",
    back: "∫k dx = k×x + C",
    frontLatex: "\\int k \\, dx = \\text{?}",
    backLatex: "k x + C",
    category: "Intégrales usuelles",
    chapter: 7,
    difficulty: "facile"
  },
  {
    id: 13,
    front: "Quelle est l'intégrale de 1/(x²+a²) dx ?",
    back: "L'intégrale de 1/(x²+a²) dx vaut (1/a)×arctan(x/a) + C.",
    frontLatex: "\\int \\frac{1}{x^2 + a^2} \\, dx = \\text{?}",
    backLatex: "\\frac{1}{a} \\arctan \\left( \\frac{x}{a} \\right) + C",
    category: "Intégrales usuelles",
    chapter: 7,
    difficulty: "moyen"
  },
  {
    id: 14,
    front: "Quelle est l'intégrale de 1/√(x²+a²) dx ?",
    back: "L'intégrale de 1/√(x²+a²) dx vaut ln|x + √(x²+a²)| + C.",
    frontLatex: "\\int \\frac{1}{\\sqrt{x^2 + a^2}} \\, dx = \\text{?}",
    backLatex: "\\ln |x + \\sqrt{x^2 + a^2}| + C",
    category: "Intégrales usuelles",
    chapter: 7,
    difficulty: "difficile"
  },
  {
    id: 15,
    front: "Méthode d'intégration : décomposition en éléments simples",
    back: "Pour intégrer P(x)/Q(x), on décompose P(x)/Q(x) en somme de fractions simples.",
    frontLatex: "\\text{Intégration par décomposition :}",
    backLatex: "\\frac{P(x)}{Q(x)} = \\sum \\frac{A_i}{(x - \\alpha_i)^{k_i}} + \\cdots",
    category: "Méthodes d'intégration",
    chapter: 7,
    difficulty: "difficile"
  },
  {
    id: 16,
    front: "Intégrale définie sur un intervalle",
    back: "L'intégrale définie ∫(a→b) f(x) dx donne l'aire algébrique sous la courbe de f entre a et b.",
    frontLatex: "\\int_a^b f(x) \\, dx = \\text{?}",
    backLatex: "\\text{aire algébrique sous la courbe de } f \\text{ entre } a \\text{ et } b",
    category: "Intégrale définie",
    chapter: 7,
    difficulty: "moyen"
  },
  {
    id: 17,
    front: "Relation entre intégrale et primitive",
    back: "Toute fonction continue admet une primitive, mais l'intégrale définie existe toujours.",
    frontLatex: "\\text{Fonction continue } \\Rightarrow \\text{?}",
    backLatex: "\\text{admet une primitive}",
    category: "Relation intégrale-primitive",
    chapter: 7,
    difficulty: "moyen"
  },
  {
    id: 18,
    front: "Quelle est l'intégrale de sec²(x) dx ?",
    back: "L'intégrale de sec²(x) dx vaut tan(x) + C.",
    frontLatex: "\\int \\sec^2 x \\, dx = \\text{?}",
    backLatex: "\\tan x + C",
    category: "Intégrales trigonométriques",
    chapter: 7,
    difficulty: "facile"
  },
  {
    id: 19,
    front: "Calcul d'aire entre deux courbes",
    back: "L'aire entre f et g est ∫|f(x) - g(x)| dx sur l'intervalle considéré.",
    frontLatex: "\\text{Aire entre } f \\text{ et } g \\text{ :}",
    backLatex: "\\int |f(x) - g(x)| \\, dx",
    category: "Applications géométriques",
    chapter: 7,
    difficulty: "moyen"
  },
  {
    id: 20,
    front: "Valeur moyenne d'une fonction",
    back: "La valeur moyenne de f sur [a,b] est (1/(b-a))×∫(a→b) f(x) dx.",
    frontLatex: "\\text{Valeur moyenne de } f \\text{ sur } [a,b] \\text{ :}",
    backLatex: "\\frac{1}{b-a} \\int_a^b f(x) \\, dx",
    category: "Applications géométriques",
    chapter: 7,
    difficulty: "moyen"
  }
];

export const chapitre8PolynomesFlashcards: MathFlashcard[] = [
  {
    id: 1,
    front: "Qu'est-ce qu'un polynôme de degré n ?",
    back: "Un polynôme de degré n est une somme finie de monômes dont le terme de plus haut degré est de degré n.",
    frontLatex: "\\text{Polynôme degré } n = \\text{?}",
    backLatex: "P(x) = a_n x^n + \\dots + a_1 x + a_0 \\quad (a_n \\neq 0)",
    category: "Définition",
    chapter: 8,
    difficulty: "facile"
  },
  {
    id: 2,
    front: "Qu'est-ce qu'une racine d'un polynôme ?",
    back: "Une racine d'un polynôme P est une valeur a telle que P(a) = 0.",
    frontLatex: "\\text{Racine de } P = \\text{?}",
    backLatex: "a \\in \\mathbb{R} \\text{ tel que } P(a) = 0",
    category: "Racines",
    chapter: 8,
    difficulty: "facile"
  },
  {
    id: 3,
    front: "Division euclidienne des polynômes",
    back: "Pour deux polynômes A et B ≠ 0, il existe des polynômes uniques Q et R tels que A = B×Q + R avec deg(R) < deg(B).",
    frontLatex: "\\text{Division euclidienne :}",
    backLatex: "A = B Q + R \\quad \\text{avec } \\deg R < \\deg B",
    category: "Division euclidienne",
    chapter: 8,
    difficulty: "moyen"
  },
  {
    id: 4,
    front: "Théorème du reste",
    back: "Le reste de la division de P par (x - a) est P(a).",
    frontLatex: "\\text{Théorème du reste :}",
    backLatex: "P(x) = (x - a) Q(x) + P(a)",
    category: "Division euclidienne",
    chapter: 8,
    difficulty: "facile"
  },
  {
    id: 5,
    front: "Théorème de factorisation",
    back: "Si a est racine de P, alors (x - a) divise P.",
    frontLatex: "\\text{Théorème de factorisation :}",
    backLatex: "P(a) = 0 \\Rightarrow (x - a) \\text{ divise } P",
    category: "Factorisation",
    chapter: 8,
    difficulty: "facile"
  },
  {
    id: 6,
    front: "Multiplicité d'une racine",
    back: "Si (x - a)^k divise P mais (x - a)^(k+1) ne divise pas P, alors a est racine de multiplicité k.",
    frontLatex: "\\text{Multiplicité de la racine } a \\text{ :}",
    backLatex: "\\max k \\text{ tel que } (x - a)^k \\text{ divise } P",
    category: "Multiplicité",
    chapter: 8,
    difficulty: "moyen"
  },
  {
    id: 7,
    front: "Relation coefficients-racines (réels)",
    back: "Pour P(x) = a_n x^n + ... + a_0 avec racines r1, ..., rn : somme ri = -a_(n-1)/a_n, produit ri = (-1)^n a_0/a_n.",
    frontLatex: "\\text{Relations coefficients-racines :}",
    backLatex: "\\sum r_i = -\\frac{a_{n-1}}{a_n}, \\quad \\prod r_i = (-1)^n \\frac{a_0}{a_n}",
    category: "Relations coefficients-racines",
    chapter: 8,
    difficulty: "moyen"
  },
  {
    id: 8,
    front: "Polynôme scindé sur ℝ",
    back: "Un polynôme est scindé sur ℝ si on peut l'écrire comme produit de polynômes du premier degré à coefficients réels.",
    frontLatex: "\\text{Polynôme scindé sur } \\mathbb{R} \\text{ :}",
    backLatex: "P(x) = a_n \\prod (x - r_i) \\quad (r_i \\in \\mathbb{R})",
    category: "Factorisation",
    chapter: 8,
    difficulty: "moyen"
  },
  {
    id: 9,
    front: "Racines complexes conjuguées",
    back: "Si un polynôme à coefficients réels admet une racine complexe z, alors il admet aussi la conjuguée z̄.",
    frontLatex: "\\text{Racines complexes conjuguées :}",
    backLatex: "z \\text{ racine } \\Rightarrow \\bar{z} \\text{ racine}",
    category: "Racines complexes",
    chapter: 8,
    difficulty: "moyen"
  },
  {
    id: 10,
    front: "Théorème de d'Alembert-Gauss",
    back: "Tout polynôme non constant de degré n à coefficients complexes admet au moins une racine complexe.",
    frontLatex: "\\text{Théorème de d'Alembert-Gauss :}",
    backLatex: "\\deg P \\geq 1 \\Rightarrow \\exists z \\in \\mathbb{C}, \\quad P(z) = 0",
    category: "Théorème fondamental",
    chapter: 8,
    difficulty: "moyen"
  },
  {
    id: 11,
    front: "Polynômes irréductibles sur ℝ",
    back: "Les polynômes irréductibles sur ℝ sont les polynômes du premier degré (x - a) et du deuxième degré sans racine réelle.",
    frontLatex: "\\text{Polynômes irréductibles sur } \\mathbb{R} \\text{ :}",
    backLatex: "\\text{(degré 1) et (degré 2 sans racine réelle)}",
    category: "Polynômes irréductibles",
    chapter: 8,
    difficulty: "moyen"
  },
  {
    id: 12,
    front: "Décomposition en facteurs irréductibles",
    back: "Tout polynôme à coefficients réels se décompose de manière unique en produit de polynômes irréductibles sur ℝ.",
    frontLatex: "\\text{Décomposition irréductible :}",
    backLatex: "P(x) = a_n \\prod_{i=1}^k (x - r_i) \\prod_{j=1}^m (x^2 + p_j x + q_j)",
    category: "Factorisation",
    chapter: 8,
    difficulty: "difficile"
  },
  {
    id: 13,
    front: "Polynôme monique",
    back: "Un polynôme est monique si son coefficient dominant est 1.",
    frontLatex: "\\text{Polynôme monique = ?}",
    backLatex: "a_n = 1 \\quad (\\deg P = n)",
    category: "Définition",
    chapter: 8,
    difficulty: "facile"
  },
  {
    id: 14,
    front: "Polynôme unitaire",
    back: "Un polynôme est unitaire si son coefficient dominant est 1.",
    frontLatex: "\\text{Polynôme unitaire = ?}",
    backLatex: "a_n = 1 \\quad (\\deg P = n)",
    category: "Définition",
    chapter: 8,
    difficulty: "facile"
  },
  {
    id: 15,
    front: "PGCD de deux polynômes",
    back: "Le PGCD de deux polynômes est le polynôme monique de plus haut degré qui divise les deux.",
    frontLatex: "\\text{PGCD de } A \\text{ et } B = \\text{?}",
    backLatex: "\\text{polynôme monique } \\deg \\max \\text{ divisant } A \\text{ et } B",
    category: "PGCD",
    chapter: 8,
    difficulty: "moyen"
  },
  {
    id: 16,
    front: "Identité de Bézout pour polynômes",
    back: "Si D est PGCD(A,B), il existe des polynômes U et V tels que A×U + B×V = D.",
    frontLatex: "\\text{Identité de Bézout :}",
    backLatex: "\\exists U,V, \\quad A U + B V = D \\quad (D = \\PGCD(A,B))",
    category: "PGCD",
    chapter: 8,
    difficulty: "difficile"
  },
  {
    id: 17,
    front: "Polynômes premiers entre eux",
    back: "Deux polynômes sont premiers entre eux si leur PGCD est 1.",
    frontLatex: "\\text{Polynômes premiers entre eux :}",
    backLatex: "\\PGCD(A,B) = 1",
    category: "PGCD",
    chapter: 8,
    difficulty: "facile"
  },
  {
    id: 18,
    front: "Racines rationnelles (théorème)",
    back: "Si p/q est racine rationnelle de P (coefficients entiers), alors p divise le terme constant et q divise le coefficient dominant.",
    frontLatex: "\\text{Racines rationnelles :}",
    backLatex: "\\frac{p}{q} \\text{ racine } \\Rightarrow p \\div a_0, \\quad q \\div a_n",
    category: "Racines rationnelles",
    chapter: 8,
    difficulty: "moyen"
  },
  {
    id: 19,
    front: "Formule de Viète généralisée",
    back: "Pour les racines r1, ..., rn : ∑ ri = -a_(n-1)/a_n, ∑ ri rj = a_(n-2)/a_n, etc.",
    frontLatex: "\\text{Formules de Viète :}",
    backLatex: "\\sum r_i = -\\frac{a_{n-1}}{a_n}, \\quad \\sum r_i r_j = \\frac{a_{n-2}}{a_n}, \\quad \\dots",
    category: "Relations coefficients-racines",
    chapter: 8,
    difficulty: "difficile"
  },
  {
    id: 20,
    front: "Polynôme réciproque",
    back: "Le polynôme réciproque de P(x) = a_n x^n + ... + a_0 est P^*(x) = a_0 x^n + ... + a_n.",
    frontLatex: "\\text{Polynôme réciproque :}",
    backLatex: "P^*(x) = a_0 x^n + \\dots + a_n \\quad (P(x) = a_n x^n + \\dots + a_0)",
    category: "Polynôme réciproque",
    chapter: 8,
    difficulty: "moyen"
  }
];

export const chapitre9MatricesEspacesFlashcards: MathFlashcard[] = [
  {
    id: 1,
    front: "Qu'est-ce qu'une matrice carrée ?",
    back: "Une matrice carrée est une matrice qui a autant de lignes que de colonnes.",
    frontLatex: "\\text{Matrice carrée = ?}",
    backLatex: "n \\times n \\text{ (même nombre de lignes et colonnes)}",
    category: "Matrices",
    chapter: 9,
    difficulty: "facile"
  },
  {
    id: 2,
    front: "Qu'est-ce qu'un espace vectoriel ?",
    back: "Un espace vectoriel est un ensemble muni d'une addition et d'une multiplication par un scalaire vérifiant certaines propriétés.",
    frontLatex: "\\text{Espace vectoriel = ?}",
    backLatex: "(E, +, \\cdot) \\text{ avec propriétés d'addition et multiplication}",
    category: "Espaces vectoriels",
    chapter: 9,
    difficulty: "moyen"
  },
  {
    id: 3,
    front: "Qu'est-ce qu'une famille génératrice ?",
    back: "Une famille (v_i) est génératrice de E si tout vecteur de E s'écrit comme combinaison linéaire des v_i.",
    frontLatex: "\\text{Famille génératrice = ?}",
    backLatex: "\\forall v \\in E, \\quad \\exists \\lambda_i, \\quad v = \\sum \\lambda_i v_i",
    category: "Familles de vecteurs",
    chapter: 9,
    difficulty: "moyen"
  },
  {
    id: 4,
    front: "Qu'est-ce qu'une famille libre ?",
    back: "Une famille est libre si la seule combinaison linéaire nulle est celle avec tous les coefficients nuls.",
    frontLatex: "\\text{Famille libre = ?}",
    backLatex: "\\sum \\lambda_i v_i = 0 \\Rightarrow \\forall i, \\lambda_i = 0",
    category: "Familles de vecteurs",
    chapter: 9,
    difficulty: "moyen"
  },
  {
    id: 5,
    front: "Qu'est-ce qu'une base ?",
    back: "Une base est une famille libre et génératrice.",
    frontLatex: "\\text{Base = ?}",
    backLatex: "\\text{famille libre et génératrice}",
    category: "Bases",
    chapter: 9,
    difficulty: "moyen"
  },
  {
    id: 6,
    front: "Dimension d'un espace vectoriel",
    back: "La dimension de E est le nombre d'éléments d'une base de E.",
    frontLatex: "\\dim E = \\text{?}",
    backLatex: "\\text{cardinal d'une base de } E",
    category: "Dimension",
    chapter: 9,
    difficulty: "moyen"
  },
  {
    id: 7,
    front: "Théorème de la base incomplète",
    back: "Toute famille libre peut être complétée en une base.",
    frontLatex: "\\text{Théorème de la base incomplète :}",
    backLatex: "\\text{famille libre } \\Rightarrow \\text{peut être complétée en base}",
    category: "Bases",
    chapter: 9,
    difficulty: "difficile"
  },
  {
    id: 8,
    front: "Rang d'une matrice",
    back: "Le rang d'une matrice A est la dimension de l'image de l'application linéaire canoniquement associée.",
    frontLatex: "\\text{Rang de } A = \\text{?}",
    backLatex: "\\dim \\Im A \\quad (\\text{ou } \\dim \\Im A^t)",
    category: "Rang d'une matrice",
    chapter: 9,
    difficulty: "moyen"
  },
  {
    id: 9,
    front: "Matrice identité",
    back: "La matrice identité I_n a des 1 sur la diagonale et des 0 ailleurs.",
    frontLatex: "I_n = \\text{?}",
    backLatex: "\\begin{pmatrix} 1 & 0 & \\dots & 0 \\\\ 0 & 1 & \\dots & 0 \\\\ \\vdots & \\vdots & \\ddots & \\vdots \\\\ 0 & 0 & \\dots & 1 \\end{pmatrix}",
    category: "Matrices particulières",
    chapter: 9,
    difficulty: "facile"
  },
  {
    id: 10,
    front: "Produit matriciel",
    back: "Le produit AB a pour coefficient (i,j) : somme des produits des coefficients de la ligne i de A et colonne j de B.",
    frontLatex: "(AB)_{i,j} = \\text{?}",
    backLatex: "\\sum_k A_{i,k} B_{k,j}",
    category: "Opérations sur les matrices",
    chapter: 9,
    difficulty: "moyen"
  },
  {
    id: 11,
    front: "Matrice inverse",
    back: "L'inverse de A est la matrice A⁻¹ telle que A × A⁻¹ = A⁻¹ × A = I.",
    frontLatex: "A^{-1} = \\text{?}",
    backLatex: "A A^{-1} = A^{-1} A = I \\quad (\\text{si elle existe)}",
    category: "Matrice inverse",
    chapter: 9,
    difficulty: "moyen"
  },
  {
    id: 12,
    front: "Déterminant d'une matrice 2×2",
    back: "det([a b; c d]) = a×d - b×c",
    frontLatex: "\\det \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} = \\text{?}",
    backLatex: "a d - b c",
    category: "Déterminant",
    chapter: 9,
    difficulty: "facile"
  },
  {
    id: 13,
    front: "Propriétés du déterminant",
    back: "det(AB) = det(A)×det(B), det(A⁻¹) = 1/det(A), det(A^t) = det(A).",
    frontLatex: "\\text{Propriétés du déterminant :}",
    backLatex: "\\det(AB) = \\det A \\cdot \\det B, \\quad \\det A^{-1} = \\frac{1}{\\det A}",
    category: "Déterminant",
    chapter: 9,
    difficulty: "moyen"
  },
  {
    id: 14,
    front: "Système linéaire : forme matricielle",
    back: "AX = B où A est la matrice des coefficients, X le vecteur inconnu, B le second membre.",
    frontLatex: "\\text{Système } AX = B \\text{ signifie ?}",
    backLatex: "\\begin{cases} a_{11}x_1 + \\dots + a_{1n}x_n = b_1 \\\\ \\vdots \\\\ a_{n1}x_1 + \\dots + a_{nn}x_n = b_n \\end{cases}",
    category: "Systèmes linéaires",
    chapter: 9,
    difficulty: "moyen"
  },
  {
    id: 15,
    front: "Méthode de Gauss",
    back: "La méthode de Gauss transforme la matrice augmentée en forme échelonnée pour résoudre le système.",
    frontLatex: "\\text{Méthode de Gauss :}",
    backLatex: "\\text{transformation de la matrice augmentée } [A|B] \\text{ en forme échelonnée}",
    category: "Résolution de systèmes",
    chapter: 9,
    difficulty: "moyen"
  },
  {
    id: 16,
    front: "Sous-espace vectoriel",
    back: "Un sous-espace vectoriel F de E est un sous-ensemble stable par addition et multiplication par scalaire.",
    frontLatex: "\\text{Sous-espace vectoriel = ?}",
    backLatex: "F \\subset E \\text{ stable par } + \\text{ et } \\cdot",
    category: "Sous-espaces",
    chapter: 9,
    difficulty: "moyen"
  },
  {
    id: 17,
    front: "Somme directe de sous-espaces",
    back: "F + G est somme directe si F ∩ G = {0}, alors tout vecteur de F+G s'écrit de manière unique comme f+g.",
    frontLatex: "F \\oplus G = \\text{?}",
    backLatex: "F + G \\text{ avec } F \\cap G = \\{0\\} \\text{ et décomposition unique}",
    category: "Sous-espaces",
    chapter: 9,
    difficulty: "difficile"
  },
  {
    id: 18,
    front: "Théorème de Grassmann",
    back: "dim(F+G) = dim F + dim G - dim(F∩G)",
    frontLatex: "\\dim(F + G) = \\text{?}",
    backLatex: "\\dim F + \\dim G - \\dim(F \\cap G)",
    category: "Formule de Grassmann",
    chapter: 9,
    difficulty: "moyen"
  },
  {
    id: 19,
    front: "Noyau et image d'une application linéaire",
    back: "Ker(f) = {x ∈ E | f(x) = 0}, Im(f) = {f(x) | x ∈ E}",
    frontLatex: "\\text{Noyau et image :}",
    backLatex: "\\Ker f = f^{-1}(\\{0\\}), \\quad \\Im f = f(E)",
    category: "Applications linéaires",
    chapter: 9,
    difficulty: "moyen"
  },
  {
    id: 20,
    front: "Théorème du rang",
    back: "Pour une application linéaire f : E → F, rg(f) + dim(Ker f) = dim E",
    frontLatex: "\\text{Théorème du rang :}",
    backLatex: "\\rg f + \\dim \\Ker f = \\dim E",
    category: "Théorème du rang",
    chapter: 9,
    difficulty: "moyen"
  }
];

export const chapitre10ProbabilitesFlashcards: MathFlashcard[] = [
  {
    id: 1,
    front: "Qu'est-ce qu'un événement ?",
    back: "Un événement est un sous-ensemble de l'univers des possibles Ω.",
    frontLatex: "\\text{Événement = ?}",
    backLatex: "A \\subset \\Omega \\text{ (univers des possibles)}",
    category: "Événements",
    chapter: 10,
    difficulty: "facile"
  },
  {
    id: 2,
    front: "Qu'est-ce qu'une probabilité conditionnelle ?",
    back: "La probabilité conditionnelle de A sachant B est P(A∩B)/P(B) si P(B) > 0.",
    frontLatex: "P(A|B) = \\text{?}",
    backLatex: "\\frac{P(A \\cap B)}{P(B)} \\quad (P(B) > 0)",
    category: "Probabilités conditionnelles",
    chapter: 10,
    difficulty: "moyen"
  },
  {
    id: 3,
    front: "Axiomes des probabilités",
    back: "1. P(Ω) = 1, 2. P(A) ≥ 0 pour tout A, 3. P(A∪B) = P(A) + P(B) si A∩B = ∅.",
    frontLatex: "\\text{Axiomes des probabilités :}",
    backLatex: "\\begin{enumerate} \\item P(\\Omega) = 1 \\\\ \\item P(A) \\geq 0 \\\\ \\item \\sigma\\text{-additivité} \\end{enumerate}",
    category: "Axiomes",
    chapter: 10,
    difficulty: "moyen"
  },
  {
    id: 4,
    front: "Probabilité d'un événement complémentaire",
    back: "P(Ā) = 1 - P(A)",
    frontLatex: "P(\\bar{A}) = \\text{?}",
    backLatex: "1 - P(A)",
    category: "Propriétés élémentaires",
    chapter: 10,
    difficulty: "facile"
  },
  {
    id: 5,
    front: "Formule des probabilités totales",
    back: "Si (B_i) partition de Ω, alors P(A) = Σ P(A∩B_i) = Σ P(A|B_i)×P(B_i)",
    frontLatex: "\\text{Probabilités totales :}",
    backLatex: "P(A) = \\sum_i P(A \\cap B_i) = \\sum_i P(A|B_i) \\cdot P(B_i)",
    category: "Probabilités conditionnelles",
    chapter: 10,
    difficulty: "moyen"
  },
  {
    id: 6,
    front: "Formule de Bayes",
    back: "P(B|A) = [P(A|B)×P(B)] / P(A)",
    frontLatex: "\\text{Formule de Bayes :}",
    backLatex: "P(B|A) = \\frac{P(A|B) \\cdot P(B)}{P(A)}",
    category: "Probabilités conditionnelles",
    chapter: 10,
    difficulty: "moyen"
  },
  {
    id: 7,
    front: "Événements indépendants",
    back: "A et B sont indépendants si P(A∩B) = P(A)×P(B)",
    frontLatex: "A \\perp B \\Leftrightarrow \\text{?}",
    backLatex: "P(A \\cap B) = P(A) \\cdot P(B)",
    category: "Indépendance",
    chapter: 10,
    difficulty: "moyen"
  },
  {
    id: 8,
    front: "Indépendance conditionnelle",
    back: "A et B sont indépendants sachant C si P(A∩B|C) = P(A|C)×P(B|C)",
    frontLatex: "A \\perp B \\mid C \\Leftrightarrow \\text{?}",
    backLatex: "P(A \\cap B | C) = P(A|C) \\cdot P(B|C)",
    category: "Indépendance",
    chapter: 10,
    difficulty: "difficile"
  },
  {
    id: 9,
    front: "Théorème des probabilités composées",
    back: "P(A∩B∩C) = P(A)×P(B|A)×P(C|A∩B)",
    frontLatex: "\\text{Probabilités composées :}",
    backLatex: "P(\\cap_{i=1}^n A_i) = P(A_1) \\prod_{k=2}^n P(A_k | \\cap_{i=1}^{k-1} A_i)",
    category: "Probabilités conditionnelles",
    chapter: 10,
    difficulty: "moyen"
  },
  {
    id: 10,
    front: "Paradoxe de Monty Hall",
    back: "Avec 3 portes (1 voiture, 2 chèvres), après révélation d'une chèvre, il vaut mieux changer.",
    frontLatex: "\\text{Paradoxe de Monty Hall :}",
    backLatex: "\\text{Probabilité de gagner en changeant : } \\frac{2}{3}",
    category: "Paradoxes",
    chapter: 10,
    difficulty: "difficile"
  },
  {
    id: 11,
    front: "Théorème de Bernoulli",
    back: "Pour des épreuves indépendantes de même probabilité p, la loi binomiale donne P(k succès en n épreuves).",
    frontLatex: "\\text{Loi binomiale :}",
    backLatex: "P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}",
    category: "Loi binomiale",
    chapter: 10,
    difficulty: "moyen"
  },
  {
    id: 12,
    front: "Approximation de la loi binomiale par la loi normale",
    back: "Pour n grand, X ~ B(n,p) ≈ N(np, np(1-p))",
    frontLatex: "\\text{Théorème central limite :}",
    backLatex: "X \\sim \\mathcal{B}(n,p) \\approx \\mathcal{N}(np, np(1-p)) \\quad (n \\text{ grand})",
    category: "Théorème central limite",
    chapter: 10,
    difficulty: "difficile"
  },
  {
    id: 13,
    front: "Loi de Poisson",
    back: "Modèle les événements rares : P(X = k) = e^(-λ) λ^k / k!",
    frontLatex: "\\text{Loi de Poisson :}",
    backLatex: "P(X = k) = \\frac{e^{-\\lambda} \\lambda^k}{k!} \\quad (\\lambda > 0)",
    category: "Loi de Poisson",
    chapter: 10,
    difficulty: "moyen"
  },
  {
    id: 14,
    front: "Loi géométrique",
    back: "Nombre d'épreuves jusqu'au premier succès : P(X = k) = (1-p)^(k-1) p",
    frontLatex: "\\text{Loi géométrique :}",
    backLatex: "P(X = k) = (1-p)^{k-1} p \\quad (k \\geq 1)",
    category: "Loi géométrique",
    chapter: 10,
    difficulty: "moyen"
  },
  {
    id: 15,
    front: "Loi exponentielle",
    back: "Temps d'attente : f(x) = λe^(-λx) pour x > 0, E[X] = 1/λ",
    frontLatex: "\\text{Loi exponentielle :}",
    backLatex: "f(x) = \\lambda e^{-\\lambda x} \\quad (x > 0)",
    category: "Loi exponentielle",
    chapter: 10,
    difficulty: "moyen"
  },
  {
    id: 16,
    front: "Loi normale centrée réduite",
    back: "φ(x) = (1/√(2π)) e^(-x²/2), Φ(x) = ∫(-∞→x) φ(t) dt",
    frontLatex: "\\text{Loi normale } \\mathcal{N}(0,1) \\text{ :}",
    backLatex: "\\phi(x) = \\frac{1}{\\sqrt{2\\pi}} e^{-x^2/2}, \\quad \\Phi(x) = \\int_{-\\infty}^x \\phi(t) \\, dt",
    category: "Loi normale",
    chapter: 10,
    difficulty: "difficile"
  },
  {
    id: 17,
    front: "Inégalité de Markov",
    back: "P(X ≥ a) ≤ E[X]/a pour X ≥ 0 et a > 0",
    frontLatex: "\\text{Inégalité de Markov :}",
    backLatex: "P(X \\geq a) \\leq \\frac{\\mathbb{E}[X]}{a} \\quad (X \\geq 0, a > 0)",
    category: "Inégalités",
    chapter: 10,
    difficulty: "moyen"
  },
  {
    id: 18,
    front: "Inégalité de Bienaymé-Tchebychev",
    back: "P(|X - E[X]| ≥ ε) ≤ Var(X)/ε²",
    frontLatex: "\\text{Inégalité de Tchebychev :}",
    backLatex: "P(|X - \\mathbb{E}[X]| \\geq \\epsilon) \\leq \\frac{\\mathbb{V}[X]}{\\epsilon^2}",
    category: "Inégalités",
    chapter: 10,
    difficulty: "moyen"
  },
  {
    id: 19,
    front: "Espérance mathématique",
    back: "E[X] = Σ x_i P(X = x_i) pour variables discrètes, ∫ x f(x) dx pour continues",
    frontLatex: "\\mathbb{E}[X] = \\text{?}",
    backLatex: "\\sum x_i P(X = x_i) \\text{ ou } \\int x f(x) \\, dx",
    category: "Espérance et variance",
    chapter: 10,
    difficulty: "moyen"
  },
  {
    id: 20,
    front: "Variance",
    back: "Var(X) = E[(X - E[X])²] = E[X²] - (E[X])²",
    frontLatex: "\\mathbb{V}[X] = \\text{?}",
    backLatex: "\\mathbb{E}[(X - \\mathbb{E}[X])^2] = \\mathbb{E}[X^2] - (\\mathbb{E}[X])^2",
    category: "Espérance et variance",
    chapter: 10,
    difficulty: "moyen"
  }
];

export const chapitre11ApplicationsLineairesFlashcards: MathFlashcard[] = [
  {
    id: 1,
    front: "Qu'est-ce qu'une application linéaire ?",
    back: "Une application linéaire f vérifie f(u+v) = f(u) + f(v) et f(λu) = λf(u).",
    frontLatex: "f \\text{ linéaire } \\Leftrightarrow \\text{?}",
    backLatex: "f(u+v) = f(u) + f(v) \\land f(\\lambda u) = \\lambda f(u)",
    category: "Applications linéaires",
    chapter: 11,
    difficulty: "moyen"
  },
  {
    id: 2,
    front: "Quel est le théorème du rang ?",
    back: "Pour f ∈ L(E,F), rang(f) + dim(Ker f) = dim(E).",
    frontLatex: "\\text{Théorème du rang : ?}",
    backLatex: "\\dim(\\ker f) + \\dim(\\operatorname{im} f) = \\dim E",
    category: "Théorème du rang",
    chapter: 11,
    difficulty: "moyen"
  },
  {
    id: 3,
    front: "Matrice d'une application linéaire",
    back: "Dans des bases (e_i) et (f_j), la matrice de f a pour coefficients M_{i,j} = coordonnées de f(e_j) dans (f_i).",
    frontLatex: "\\text{Matrice de } f \\text{ dans les bases } \\mathcal{B}, \\mathcal{B}' \\text{ :}",
    backLatex: "M_{i,j} = \\text{coordonnées de } f(e'_j) \\text{ dans } \\mathcal{B}",
    category: "Matrice d'une application linéaire",
    chapter: 11,
    difficulty: "moyen"
  },
  {
    id: 4,
    front: "Endomorphisme",
    back: "Une application linéaire f : E → E est appelée endomorphisme.",
    frontLatex: "\\text{Endomorphisme = ?}",
    backLatex: "f \\in \\mathcal{L}(E) \\quad (f : E \\to E)",
    category: "Endomorphismes",
    chapter: 11,
    difficulty: "facile"
  },
  {
    id: 5,
    front: "Isomorphisme",
    back: "Un endomorphisme bijectif est appelé isomorphisme.",
    frontLatex: "\\text{Isomorphisme = ?}",
    backLatex: "f \\in \\mathcal{L}(E) \\text{ bijective}",
    category: "Endomorphismes",
    chapter: 11,
    difficulty: "facile"
  },
  {
    id: 6,
    front: "Polynôme d'endomorphisme",
    back: "P(f) = Σ a_k f^k où f^k = f∘f∘...∘f (k fois).",
    frontLatex: "\\text{Polynôme de } f \\text{ :}",
    backLatex: "P(f) = \\sum_{k=0}^n a_k f^k \\quad (f^k = f \\circ \\dots \\circ f)",
    category: "Polynômes d'endomorphismes",
    chapter: 11,
    difficulty: "moyen"
  },
  {
    id: 7,
    front: "Valeur propre et vecteur propre",
    back: "λ est valeur propre de f si ∃v ≠ 0 tel que f(v) = λv. v est alors vecteur propre associé à λ.",
    frontLatex: "\\text{Valeur propre de } f \\text{ :}",
    backLatex: "\\exists v \\neq 0, \\quad f(v) = \\lambda v",
    category: "Valeurs et vecteurs propres",
    chapter: 11,
    difficulty: "moyen"
  },
  {
    id: 8,
    front: "Sous-espace propre",
    back: "Le sous-espace propre associé à λ est Ker(f - λId).",
    frontLatex: "\\text{Sous-espace propre } E_\\lambda = \\text{?}",
    backLatex: "\\ker(f - \\lambda \\mathrm{Id})",
    category: "Valeurs et vecteurs propres",
    chapter: 11,
    difficulty: "moyen"
  },
  {
    id: 9,
    front: "Multiplicité algébrique",
    back: "La multiplicité algébrique de λ est la dimension de E_λ.",
    frontLatex: "\\text{Multiplicité algébrique de } \\lambda = \\text{?}",
    backLatex: "\\dim E_\\lambda = \\dim \\ker(f - \\lambda \\mathrm{Id})",
    category: "Multiplicités",
    chapter: 11,
    difficulty: "moyen"
  },
  {
    id: 10,
    front: "Polynôme caractéristique",
    back: "Pour f endomorphisme de E de dimension n, χ_f(X) = det(XId - M_f) où M_f est sa matrice.",
    frontLatex: "\\text{Polynôme caractéristique :}",
    backLatex: "\\chi_f(X) = \\det(X \\mathrm{Id} - M_f)",
    category: "Polynôme caractéristique",
    chapter: 11,
    difficulty: "moyen"
  },
  {
    id: 11,
    front: "Théorème de Cayley-Hamilton",
    back: "Tout endomorphisme annule son polynôme caractéristique : χ_f(f) = 0.",
    frontLatex: "\\text{Théorème de Cayley-Hamilton :}",
    backLatex: "\\chi_f(f) = 0",
    category: "Théorème de Cayley-Hamilton",
    chapter: 11,
    difficulty: "difficile"
  },
  {
    id: 12,
    front: "Endomorphisme diagonalisable",
    back: "f est diagonalisable s'il existe une base de vecteurs propres.",
    frontLatex: "f \\text{ diagonalisable } \\Leftrightarrow \\text{?}",
    backLatex: "\\exists \\mathcal{B} \\text{ base de vecteurs propres}",
    category: "Diagonalisation",
    chapter: 11,
    difficulty: "moyen"
  },
  {
    id: 13,
    front: "Conditions de diagonalisation",
    back: "f diagonalisable ⇔ spectre simple ou pour chaque valeur propre, multiplicité géométrique = multiplicité algébrique.",
    frontLatex: "f \\text{ diagonalisable si :}",
    backLatex: "\\forall \\lambda, \\quad \\dim E_\\lambda = m_a(\\lambda)",
    category: "Diagonalisation",
    chapter: 11,
    difficulty: "difficile"
  },
  {
    id: 14,
    front: "Matrice diagonale dans une base de vecteurs propres",
    back: "Si (v_1, ..., v_n) base de vecteurs propres avec f(v_i) = λ_i v_i, alors la matrice diagonale a λ_i en diagonale.",
    frontLatex: "\\text{Matrice diagonale de } f \\text{ :}",
    backLatex: "\\mathrm{diag}(\\lambda_1, \\dots, \\lambda_n)",
    category: "Diagonalisation",
    chapter: 11,
    difficulty: "moyen"
  },
  {
    id: 15,
    front: "Trigonalisation",
    back: "Tout endomorphisme d'un espace complexe est trigonalisable.",
    frontLatex: "\\text{Trigonalisation sur } \\mathbb{C} \\text{ :}",
    backLatex: "\\forall f \\in \\mathcal{L}(E), \\quad \\exists \\mathcal{B}, \\quad M_f^{\\mathcal{B}} \\text{ triangulaire supérieure}",
    category: "Trigonalisation",
    chapter: 11,
    difficulty: "difficile"
  },
  {
    id: 16,
    front: "Forme de Jordan",
    back: "La forme de Jordan est la forme canonique la plus fine pour les endomorphismes.",
    frontLatex: "\\text{Forme de Jordan :}",
    backLatex: "\\text{blocs de Jordan sur la diagonale}",
    category: "Réduction de Jordan",
    chapter: 11,
    difficulty: "difficile"
  },
  {
    id: 17,
    front: "Trace d'un endomorphisme",
    back: "La trace de f est la somme des valeurs propres (comptées avec multiplicité).",
    frontLatex: "\\mathrm{tr}(f) = \\text{?}",
    backLatex: "\\sum_{\\lambda \\in \\mathrm{Sp}(f)} m_a(\\lambda) \\lambda",
    category: "Trace et déterminant",
    chapter: 11,
    difficulty: "moyen"
  },
  {
    id: 18,
    front: "Déterminant d'un endomorphisme",
    back: "det(f) = produit des valeurs propres (comptées avec multiplicité).",
    frontLatex: "\\det(f) = \\text{?}",
    backLatex: "\\prod_{\\lambda \\in \\mathrm{Sp}(f)} \\lambda^{m_a(\\lambda)}",
    category: "Trace et déterminant",
    chapter: 11,
    difficulty: "moyen"
  },
  {
    id: 19,
    front: "Application linéaire symétrique",
    back: "Une application linéaire f est symétrique si <f(u),v> = <u,f(v)> pour tout u,v.",
    frontLatex: "f \\text{ symétrique } \\Leftrightarrow \\text{?}",
    backLatex: "\\forall u,v, \\quad \\langle f(u), v \\rangle = \\langle u, f(v) \\rangle",
    category: "Applications symétriques",
    chapter: 11,
    difficulty: "moyen"
  },
  {
    id: 20,
    front: "Théorème spectral",
    back: "Les endomorphismes symétriques sont diagonalisables dans une base orthonormée.",
    frontLatex: "\\text{Théorème spectral :}",
    backLatex: "f \\text{ symétrique } \\Rightarrow \\exists \\mathcal{B} \\text{ o.n. de v.p.}",
    category: "Théorème spectral",
    chapter: 11,
    difficulty: "difficile"
  }
];

export const chapitre12ComparaisonFlashcards: MathFlashcard[] = [
  {
    id: 1,
    front: "Que signifie f(x) = o(g(x)) ?",
    back: "f(x) = o(g(x)) signifie que f(x)/g(x) → 0 quand x → a.",
    frontLatex: "f(x) = o(g(x)) \\Leftrightarrow \\text{?}",
    backLatex: "\\frac{f(x)}{g(x)} \\to 0 \\quad (x \\to a)",
    category: "Comparaisons asymptotiques",
    chapter: 12,
    difficulty: "moyen"
  },
  {
    id: 2,
    front: "Que signifie f(x) ∼ g(x) ?",
    back: "f(x) ∼ g(x) signifie que f(x)/g(x) → 1 quand x → a.",
    frontLatex: "f(x) \\sim g(x) \\Leftrightarrow \\text{?}",
    backLatex: "\\frac{f(x)}{g(x)} \\to 1 \\quad (x \\to a)",
    category: "Équivalence",
    chapter: 12,
    difficulty: "moyen"
  },
  {
    id: 3,
    front: "Que signifie f(x) = O(g(x)) ?",
    back: "f(x) = O(g(x)) signifie que |f(x)/g(x)| est borné quand x → a.",
    frontLatex: "f(x) = O(g(x)) \\Leftrightarrow \\text{?}",
    backLatex: "\\exists M > 0, \\quad |f(x)| \\leq M |g(x)| \\quad (x \\to a)",
    category: "Comparaisons asymptotiques",
    chapter: 12,
    difficulty: "moyen"
  },
  {
    id: 4,
    front: "Ordre des comparaisons asymptotiques",
    back: "o ⊂ O ⊂ Θ où Θ signifie que f ∼ g (à une constante près).",
    frontLatex: "\\text{Hiérarchie :}",
    backLatex: "o \\subset O \\subset \\Theta \\quad (\\Theta : f \\asymp g)",
    category: "Comparaisons asymptotiques",
    chapter: 12,
    difficulty: "moyen"
  },
  {
    id: 5,
    front: "Propriétés des équivalences",
    back: "Si f ∼ f' et g ∼ g', alors f+g ∼ f'+g', f×g ∼ f'×g', f/g ∼ f'/g' si g' ≠ 0.",
    frontLatex: "\\text{Opérations sur } \\sim \\text{ :}",
    backLatex: "f \\sim f', g \\sim g' \\Rightarrow f \\pm g \\sim f' \\pm g', \\quad f g \\sim f' g', \\quad \\frac{f}{g} \\sim \\frac{f'}{g'}",
    category: "Équivalence",
    chapter: 12,
    difficulty: "moyen"
  },
  {
    id: 6,
    front: "Équivalence et limites",
    back: "Si f ∼ g et lim g = L ≠ 0, alors lim f = L.",
    frontLatex: "f \\sim g \\land \\lim g = L \\neq 0 \\Rightarrow \\text{?}",
    backLatex: "\\lim f = L",
    category: "Équivalence",
    chapter: 12,
    difficulty: "moyen"
  },
  {
    id: 7,
    front: "Équivalence de fonctions composées",
    back: "Si f ∼ f' et g ∼ g', alors f∘g ∼ f'∘g' au voisinage de a.",
    frontLatex: "\\text{Composition :}",
    backLatex: "f \\sim f', g \\sim g' \\Rightarrow f \\circ g \\sim f' \\circ g'",
    category: "Équivalence",
    chapter: 12,
    difficulty: "difficile"
  },
  {
    id: 8,
    front: "Formes indéterminées classiques",
    back: "0/0, ∞/∞, 0×∞, ∞-∞, 0^0, 1^∞, ∞^0 peuvent être résolues par équivalences.",
    frontLatex: "\\text{Formes indéterminées :}",
    backLatex: "\\frac{0}{0}, \\quad \\frac{\\infty}{\\infty}, \\quad 0 \\cdot \\infty, \\quad \\infty - \\infty, \\quad 0^0, \\quad 1^\\infty, \\quad \\infty^0",
    category: "Formes indéterminées",
    chapter: 12,
    difficulty: "moyen"
  },
  {
    id: 9,
    front: "Équivalence pour sin(x) quand x→0",
    back: "sin(x) ∼ x quand x → 0.",
    frontLatex: "\\sin x \\sim \\text{?} \\quad (x \\to 0)",
    backLatex: "x",
    category: "Équivalences usuelles",
    chapter: 12,
    difficulty: "facile"
  },
  {
    id: 10,
    front: "Équivalence pour tan(x) quand x→0",
    back: "tan(x) ∼ x quand x → 0.",
    frontLatex: "\\tan x \\sim \\text{?} \\quad (x \\to 0)",
    backLatex: "x",
    category: "Équivalences usuelles",
    chapter: 12,
    difficulty: "facile"
  },
  {
    id: 11,
    front: "Équivalence pour e^x - 1 quand x→0",
    back: "e^x - 1 ∼ x quand x → 0.",
    frontLatex: "e^x - 1 \\sim \\text{?} \\quad (x \\to 0)",
    backLatex: "x",
    category: "Équivalences usuelles",
    chapter: 12,
    difficulty: "facile"
  },
  {
    id: 12,
    front: "Équivalence pour ln(1+x) quand x→0",
    back: "ln(1+x) ∼ x quand x → 0.",
    frontLatex: "\\ln(1+x) \\sim \\text{?} \\quad (x \\to 0)",
    backLatex: "x",
    category: "Équivalences usuelles",
    chapter: 12,
    difficulty: "facile"
  },
  {
    id: 13,
    front: "Équivalence pour 1-cos(x) quand x→0",
    back: "1 - cos(x) ∼ x²/2 quand x → 0.",
    frontLatex: "1 - \\cos x \\sim \\text{?} \\quad (x \\to 0)",
    backLatex: "\\frac{x^2}{2}",
    category: "Équivalences usuelles",
    chapter: 12,
    difficulty: "moyen"
  },
  {
    id: 14,
    front: "Équivalence pour (1+x)^α - 1 quand x→0",
    back: "(1+x)^α - 1 ∼ αx quand x → 0.",
    frontLatex: "(1+x)^\\alpha - 1 \\sim \\text{?} \\quad (x \\to 0)",
    backLatex: "\\alpha x",
    category: "Équivalences usuelles",
    chapter: 12,
    difficulty: "moyen"
  },
  {
    id: 15,
    front: "Équivalence pour √(1+x) - 1 quand x→0",
    back: "√(1+x) - 1 ∼ x/2 quand x → 0.",
    frontLatex: "\\sqrt{1+x} - 1 \\sim \\text{?} \\quad (x \\to 0)",
    backLatex: "\\frac{x}{2}",
    category: "Équivalences usuelles",
    chapter: 12,
    difficulty: "moyen"
  },
  {
    id: 16,
    front: "Comparaison d'intégrales",
    back: "Si f(x) ∼ g(x) et f,g continues, alors ∫f(x)dx ∼ ∫g(x)dx.",
    frontLatex: "f \\sim g \\Rightarrow \\text{?}",
    backLatex: "\\int f(x) \\, dx \\sim \\int g(x) \\, dx",
    category: "Intégrales",
    chapter: 12,
    difficulty: "moyen"
  },
  {
    id: 17,
    front: "Développement limité",
    back: "f(x) = f(a) + f'(a)(x-a) + ... + (1/n!)f^(n)(a)(x-a)^n + o((x-a)^n)",
    frontLatex: "\\text{Développement limité d'ordre } n \\text{ :}",
    backLatex: "f(x) = \\sum_{k=0}^n \\frac{f^{(k)}(a)}{k!} (x-a)^k + o((x-a)^n)",
    category: "Développements limités",
    chapter: 12,
    difficulty: "moyen"
  },
  {
    id: 18,
    front: "DL de e^x en 0",
    back: "e^x = 1 + x + x²/2! + x³/3! + ... + x^n/n! + o(x^n)",
    frontLatex: "e^x = \\text{?} \\quad (x \\to 0)",
    backLatex: "\\sum_{k=0}^n \\frac{x^k}{k!} + o(x^n)",
    category: "Développements limités",
    chapter: 12,
    difficulty: "moyen"
  },
  {
    id: 19,
    front: "DL de cos(x) en 0",
    back: "cos(x) = 1 - x²/2! + x⁴/4! - ... + (-1)^k x^(2k)/(2k)! + o(x^(2k+1))",
    frontLatex: "\\cos x = \\text{?} \\quad (x \\to 0)",
    backLatex: "\\sum_{k=0}^n (-1)^k \\frac{x^{2k}}{(2k)!} + o(x^{2n+1})",
    category: "Développements limités",
    chapter: 12,
    difficulty: "difficile"
  },
  {
    id: 20,
    front: "DL de sin(x) en 0",
    back: "sin(x) = x - x³/3! + x⁵/5! - ... + (-1)^k x^(2k+1)/(2k+1)! + o(x^(2k+2))",
    frontLatex: "\\sin x = \\text{?} \\quad (x \\to 0)",
    backLatex: "\\sum_{k=0}^n (-1)^k \\frac{x^{2k+1}}{(2k+1)!} + o(x^{2n+2})",
    category: "Développements limités",
    chapter: 12,
    difficulty: "difficile"
  }
];

export const chapitre13SeriesFlashcards: MathFlashcard[] = [
  {
    id: 1,
    front: "Qu'est-ce qu'une série numérique ?",
    back: "Une série numérique est une somme infinie Σ u_n où (u_n) est une suite.",
    frontLatex: "\\text{Série } \\sum u_n = \\text{?}",
    backLatex: "\\lim_{n \\to \\infty} \\sum_{k=1}^n u_k",
    category: "Définition",
    chapter: 13,
    difficulty: "facile"
  },
  {
    id: 2,
    front: "Critère de convergence absolue",
    back: "Si Σ |u_n| converge, alors Σ u_n converge.",
    frontLatex: "\\sum |u_n| \\text{ converge } \\Rightarrow \\text{?}",
    backLatex: "\\sum u_n \\text{ converge}",
    category: "Critères de convergence",
    chapter: 13,
    difficulty: "moyen"
  },
  {
    id: 3,
    front: "Série géométrique",
    back: "Σ q^n converge si |q| < 1 et vaut 1/(1-q). Diverge sinon.",
    frontLatex: "\\sum q^n = \\text{?}",
    backLatex: "\\frac{1}{1-q} \\quad (|q| < 1), \\quad \\text{diverge sinon}",
    category: "Séries usuelles",
    chapter: 13,
    difficulty: "facile"
  },
  {
    id: 4,
    front: "Série harmonique",
    back: "Σ 1/n diverge.",
    frontLatex: "\\sum \\frac{1}{n} \\text{ ?}",
    backLatex: "\\text{diverge}",
    category: "Séries usuelles",
    chapter: 13,
    difficulty: "facile"
  },
  {
    id: 5,
    front: "Critère de d'Alembert",
    back: "Σ u_n converge si lim |u_{n+1}/u_n| < 1, diverge si > 1.",
    frontLatex: "\\text{D'Alembert : } \\lim \\frac{|u_{n+1}|}{|u_n|} = \\ell \\Rightarrow \\text{?}",
    backLatex: "\\text{converge si } \\ell < 1, \\quad \\text{diverge si } \\ell > 1",
    category: "Critères de convergence",
    chapter: 13,
    difficulty: "moyen"
  },
  {
    id: 6,
    front: "Critère de Cauchy",
    back: "Σ u_n converge si lim √(|u_n|) < 1, diverge si > 1.",
    frontLatex: "\\text{Cauchy : } \\lim \\sqrt[n]{|u_n|} = \\ell \\Rightarrow \\text{?}",
    backLatex: "\\text{converge si } \\ell < 1, \\quad \\text{diverge si } \\ell > 1",
    category: "Critères de convergence",
    chapter: 13,
    difficulty: "moyen"
  },
  {
    id: 7,
    front: "Critère de Riemann",
    back: "Σ 1/n^p converge si p > 1, diverge si p ≤ 1.",
    frontLatex: "\\sum \\frac{1}{n^p} \\text{ ?}",
    backLatex: "\\text{converge si } p > 1, \\quad \\text{diverge si } p \\leq 1",
    category: "Critères de convergence",
    chapter: 13,
    difficulty: "facile"
  },
  {
    id: 8,
    front: "Critère des séries alternées",
    back: "Σ (-1)^n u_n converge si (u_n) décroissante vers 0.",
    frontLatex: "\\text{Série alternée : } \\sum (-1)^n u_n \\text{ converge si ?}",
    backLatex: "u_n \\searrow 0",
    category: "Critères de convergence",
    chapter: 13,
    difficulty: "moyen"
  },
  {
    id: 9,
    front: "Somme d'une série convergente",
    back: "Si Σ u_n = S, alors lim S_n = S où S_n est la somme partielle.",
    frontLatex: "\\sum u_n = S \\Leftrightarrow \\text{?}",
    backLatex: "\\lim_{n \\to \\infty} S_n = S \\quad (S_n = \\sum_{k=1}^n u_k)",
    category: "Propriétés",
    chapter: 13,
    difficulty: "facile"
  },
  {
    id: 10,
    front: "Linéarité des séries",
    back: "Σ (a u_n + b v_n) = a Σ u_n + b Σ v_n si convergent.",
    frontLatex: "\\sum (a u_n + b v_n) = \\text{?}",
    backLatex: "a \\sum u_n + b \\sum v_n",
    category: "Propriétés",
    chapter: 13,
    difficulty: "facile"
  },
  {
    id: 11,
    front: "Produit de Cauchy de deux séries",
    back: "Le produit de Σ u_n et Σ v_n est Σ c_n où c_n = Σ_{k=0}^n u_k v_{n-k}.",
    frontLatex: "\\text{Produit Cauchy : } \\sum u_n \\cdot \\sum v_n = \\text{?}",
    backLatex: "\\sum_{n=0}^\\infty c_n \\quad (c_n = \\sum_{k=0}^n u_k v_{n-k})",
    category: "Opérations sur les séries",
    chapter: 13,
    difficulty: "difficile"
  },
  {
    id: 12,
    front: "Série entière",
    back: "Une série entière est Σ a_n x^n. Son rayon de convergence R est tel qu'elle converge pour |x| < R.",
    frontLatex: "\\text{Série entière :}",
    backLatex: "\\sum a_n x^n \\quad (\\text{converge pour } |x| < R)",
    category: "Séries entières",
    chapter: 13,
    difficulty: "moyen"
  },
  {
    id: 13,
    front: "Rayon de convergence",
    back: "R = sup{r ≥ 0 | Σ a_n r^n converge} = 1/lim sup √(|a_n|).",
    frontLatex: "\\text{Rayon de convergence } R = \\text{?}",
    backLatex: "\\frac{1}{\\lim \\sup \\sqrt[n]{|a_n|}}",
    category: "Séries entières",
    chapter: 13,
    difficulty: "difficile"
  },
  {
    id: 14,
    front: "Somme d'une série entière",
    back: "La somme S(x) = Σ a_n x^n est définie et C^∞ sur ]-R,R[.",
    frontLatex: "S(x) = \\sum a_n x^n \\text{ est ?}",
    backLatex: "C^\\infty \\text{ sur } ]-R,R[",
    category: "Séries entières",
    chapter: 13,
    difficulty: "moyen"
  },
  {
    id: 15,
    front: "Dérivation terme à terme",
    back: "Si Σ u_n(x) converge uniformément sur I, alors Σ u_n'(x) converge et Σ u_n' = (Σ u_n)'.",
    frontLatex: "\\text{Dérivation terme à terme :}",
    backLatex: "\\sum u_n' = \\left( \\sum u_n \\right)' \\quad (\\text{si convergence uniforme})",
    category: "Opérations sur les séries",
    chapter: 13,
    difficulty: "difficile"
  },
  {
    id: 16,
    front: "Intégration terme à terme",
    back: "Si Σ u_n converge uniformément sur [a,b], alors ∫ Σ u_n = Σ ∫ u_n.",
    frontLatex: "\\text{Intégration terme à terme :}",
    backLatex: "\\int \\sum u_n = \\sum \\int u_n \\quad (\\text{si convergence uniforme})",
    category: "Opérations sur les séries",
    chapter: 13,
    difficulty: "difficile"
  },
  {
    id: 17,
    front: "Série de Taylor",
    back: "La série de Taylor de f en a est Σ (1/n!) f^(n)(a) (x-a)^n.",
    frontLatex: "\\text{Série de Taylor de } f \\text{ en } a \\text{ :}",
    backLatex: "\\sum_{n=0}^\\infty \\frac{f^{(n)}(a)}{n!} (x-a)^n",
    category: "Séries de Taylor",
    chapter: 13,
    difficulty: "moyen"
  },
  {
    id: 18,
    front: "Convergence de la série de Taylor",
    back: "Si f admet des DL de tous ordres en a, alors sa série de Taylor converge vers f sur un intervalle.",
    frontLatex: "f \\text{ admet DL tous ordres } \\Rightarrow \\text{?}",
    backLatex: "\\text{série de Taylor converge vers } f \\text{ sur un intervalle}",
    category: "Séries de Taylor",
    chapter: 13,
    difficulty: "difficile"
  },
  {
    id: 19,
    front: "Série exponentielle",
    back: "e^x = Σ x^n / n! pour tout x ∈ ℝ.",
    frontLatex: "e^x = \\text{?}",
    backLatex: "\\sum_{n=0}^\\infty \\frac{x^n}{n!}",
    category: "Séries usuelles",
    chapter: 13,
    difficulty: "facile"
  },
  {
    id: 20,
    front: "Série trigonométriques",
    back: "cos(x) = Σ (-1)^n x^(2n)/(2n)!, sin(x) = Σ (-1)^n x^(2n+1)/(2n+1)!",
    frontLatex: "\\cos x = \\sum (-1)^n \\frac{x^{2n}}{(2n)!}, \\quad \\sin x = \\text{?}",
    backLatex: "\\sum (-1)^n \\frac{x^{2n+1}}{(2n+1)!}",
    category: "Séries usuelles",
    chapter: 13,
    difficulty: "moyen"
  }
];

export const chapitre14DeveloppementsLimitesFlashcards: MathFlashcard[] = [
  {
    id: 1,
    front: "Qu'est-ce qu'un développement limité ?",
    back: "Un développement limité d'ordre n de f au voisinage de a est f(x) = P_n(x-a) + o((x-a)^n).",
    frontLatex: "f(x) \\sim P_n(x-a) \\text{ à l'ordre } n \\Leftrightarrow \\text{?}",
    backLatex: "f(x) = P_n(x-a) + o((x-a)^n) \\quad (x \\to a)",
    category: "Développements limités",
    chapter: 14,
    difficulty: "moyen"
  },
  {
    id: 2,
    front: "Quelle est la formule de Taylor d'ordre n ?",
    back: "f(a+h) = Σ_{k=0}^n [f^{(k)}(a)/k!] h^k + R_n(h) où R_n est le reste.",
    frontLatex: "\\text{Formule de Taylor : } f(a+h) = \\text{?}",
    backLatex: "\\sum_{k=0}^n \\frac{f^{(k)}(a)}{k!} h^k + R_n(h)",
    category: "Formule de Taylor",
    chapter: 14,
    difficulty: "difficile"
  },
  {
    id: 3,
    front: "Reste intégral de Taylor-Lagrange",
    back: "R_n(h) = [f^{(n+1)}(a+θh)/(n+1)!] h^(n+1) avec θ ∈ ]0,1[.",
    frontLatex: "\\text{Reste de Lagrange : } R_n(h) = \\text{?}",
    backLatex: "\\frac{f^{(n+1)}(a + \\theta h)}{(n+1)!} h^{n+1} \\quad (\\theta \\in ]0,1[)",
    category: "Restes de Taylor",
    chapter: 14,
    difficulty: "difficile"
  },
  {
    id: 4,
    front: "Condition pour qu'un DL existe",
    back: "f admet un DL d'ordre n en a si f est n fois dérivable en a.",
    frontLatex: "f \\text{ admet DL ordre } n \\text{ en } a \\Leftrightarrow \\text{?}",
    backLatex: "f \\text{ est } n \\text{ fois dérivable en } a",
    category: "Existence des DL",
    chapter: 14,
    difficulty: "moyen"
  },
  {
    id: 5,
    front: "DL de e^x en 0",
    back: "e^x = 1 + x + x²/2! + x³/3! + ... + x^n/n! + o(x^n)",
    frontLatex: "e^x = \\sum_{k=0}^n \\frac{x^k}{k!} + \\text{?} \\quad (x \\to 0)",
    backLatex: "o(x^n)",
    category: "DL usuels",
    chapter: 14,
    difficulty: "moyen"
  },
  {
    id: 6,
    front: "DL de cos(x) en 0",
    back: "cos(x) = 1 - x²/2! + x⁴/4! - ... + (-1)^k x^(2k)/(2k)! + o(x^(2k+1))",
    frontLatex: "\\cos x = \\sum_{k=0}^n (-1)^k \\frac{x^{2k}}{(2k)!} + \\text{?} \\quad (x \\to 0)",
    backLatex: "o(x^{2n+1})",
    category: "DL usuels",
    chapter: 14,
    difficulty: "difficile"
  },
  {
    id: 7,
    front: "DL de sin(x) en 0",
    back: "sin(x) = x - x³/3! + x⁵/5! - ... + (-1)^k x^(2k+1)/(2k+1)! + o(x^(2k+2))",
    frontLatex: "\\sin x = \\sum_{k=0}^n (-1)^k \\frac{x^{2k+1}}{(2k+1)!} + \\text{?} \\quad (x \\to 0)",
    backLatex: "o(x^{2n+2})",
    category: "DL usuels",
    chapter: 14,
    difficulty: "difficile"
  },
  {
    id: 8,
    front: "DL de ln(1+x) en 0",
    back: "ln(1+x) = x - x²/2 + x³/3 - ... + (-1)^{n-1} x^n/n + o(x^n)",
    frontLatex: "\\ln(1+x) = \\sum_{k=1}^n (-1)^{k-1} \\frac{x^k}{k} + \\text{?} \\quad (x \\to 0)",
    backLatex: "o(x^n)",
    category: "DL usuels",
    chapter: 14,
    difficulty: "moyen"
  },
  {
    id: 9,
    front: "DL de (1+x)^α en 0",
    back: "(1+x)^α = 1 + αx + α(α-1)x²/2! + ... + [α(α-1)...(α-n+1)/n!] x^n + o(x^n)",
    frontLatex: "(1+x)^\\alpha = \\sum_{k=0}^n \\binom{\\alpha}{k} x^k + \\text{?} \\quad (x \\to 0)",
    backLatex: "o(x^n)",
    category: "DL usuels",
    chapter: 14,
    difficulty: "difficile"
  },
  {
    id: 10,
    front: "Opérations sur les DL",
    back: "Si f ∼ f' et g ∼ g', alors f±g ∼ f'±g', f×g ∼ f'×g', f/g ∼ f'/g' si g'≠0.",
    frontLatex: "\\text{Opérations sur DL :}",
    backLatex: "f \\sim f', g \\sim g' \\Rightarrow f \\pm g \\sim f' \\pm g', \\quad f g \\sim f' g', \\quad \\frac{f}{g} \\sim \\frac{f'}{g'}",
    category: "Opérations sur les DL",
    chapter: 14,
    difficulty: "moyen"
  },
  {
    id: 11,
    front: "Composition des DL",
    back: "Si f ∼ f' et g ∼ g', alors f∘g ∼ f'∘g' au voisinage de a.",
    frontLatex: "\\text{Composition : } f \\sim f', g \\sim g' \\Rightarrow \\text{?}",
    backLatex: "f \\circ g \\sim f' \\circ g'",
    category: "Opérations sur les DL",
    chapter: 14,
    difficulty: "difficile"
  },
  {
    id: 12,
    front: "DL d'une fonction composée",
    back: "Si g ∼ g' et f admet DL en g'(a), alors f∘g ∼ f∘g' en a.",
    frontLatex: "\\text{DL de } f \\circ g \\text{ :}",
    backLatex: "f \\circ g \\sim f \\circ g' \\quad (\\text{si } g \\sim g')",
    category: "Composition",
    chapter: 14,
    difficulty: "difficile"
  },
  {
    id: 13,
    front: "DL d'une fonction inverse",
    back: "Si f(a) = b, f'(a) ≠ 0, alors f⁻¹ admet DL en b de f⁻¹(x) ∼ f⁻¹(b) + 1/f'(a) (x-b).",
    frontLatex: "\\text{DL de la fonction inverse :}",
    backLatex: "f^{-1}(x) \\sim f^{-1}(b) + \\frac{1}{f'(a)} (x - b)",
    category: "Fonction inverse",
    chapter: 14,
    difficulty: "difficile"
  },
  {
    id: 14,
    front: "DL de √(1+x) en 0",
    back: "√(1+x) = 1 + x/2 - x²/8 + x³/16 - ... + (-1)^{n-1} [1×3×...×(2n-3)]/(2^n n!) x^n + o(x^n)",
    frontLatex: "\\sqrt{1+x} = \\sum_{k=0}^n \\frac{(-1)^k}{2^{2k+1}} \\binom{2k}{k} \\frac{x^k}{k+1} + \\text{?} \\quad (x \\to 0)",
    backLatex: "o(x^n)",
    category: "DL usuels",
    chapter: 14,
    difficulty: "difficile"
  },
  {
    id: 15,
    front: "DL de arcsin(x) en 0",
    back: "arcsin(x) = x + x³/6 + 3x⁵/40 + ... + (2n)!/(4^n (n!)^2 (2n+1)) x^(2n+1) + o(x^(2n+1))",
    frontLatex: "\\arcsin x = \\sum_{k=0}^n \\frac{(2k)!}{4^k (k!)^2 (2k+1)} x^{2k+1} + \\text{?} \\quad (x \\to 0)",
    backLatex: "o(x^{2n+1})",
    category: "DL usuels",
    chapter: 14,
    difficulty: "difficile"
  },
  {
    id: 16,
    front: "DL de arctan(x) en 0",
    back: "arctan(x) = x - x³/3 + x⁵/5 - ... + (-1)^n x^(2n+1)/(2n+1) + o(x^(2n+1))",
    frontLatex: "\\arctan x = \\sum_{k=0}^n (-1)^k \\frac{x^{2k+1}}{2k+1} + \\text{?} \\quad (x \\to 0)",
    backLatex: "o(x^{2n+1})",
    category: "DL usuels",
    chapter: 14,
    difficulty: "moyen"
  },
  {
    id: 17,
    front: "DL de sinh(x) en 0",
    back: "sinh(x) = x + x³/3! + x⁵/5! + ... + x^(2n+1)/(2n+1)! + o(x^(2n+1))",
    frontLatex: "\\sinh x = \\sum_{k=0}^n \\frac{x^{2k+1}}{(2k+1)!} + \\text{?} \\quad (x \\to 0)",
    backLatex: "o(x^{2n+1})",
    category: "DL usuels",
    chapter: 14,
    difficulty: "moyen"
  },
  {
    id: 18,
    front: "DL de cosh(x) en 0",
    back: "cosh(x) = 1 + x²/2! + x⁴/4! + ... + x^(2n)/(2n)! + o(x^(2n))",
    frontLatex: "\\cosh x = \\sum_{k=0}^n \\frac{x^{2k}}{(2k)!} + \\text{?} \\quad (x \\to 0)",
    backLatex: "o(x^{2n})",
    category: "DL usuels",
    chapter: 14,
    difficulty: "moyen"
  },
  {
    id: 19,
    front: "DL de tan(x) en 0",
    back: "tan(x) = x + x³/3 + 2x⁵/15 + ... + B_{2n} (-4)^n (1-4^n) x^(2n-1)/(2n)! + o(x^(2n))",
    frontLatex: "\\tan x = \\sum_{k=1}^n \\frac{B_{2k} (-4)^k (1-4^k)}{(2k)!} x^{2k-1} + \\text{?} \\quad (x \\to 0)",
    backLatex: "o(x^{2n})",
    category: "DL usuels",
    chapter: 14,
    difficulty: "difficile"
  },
  {
    id: 20,
    front: "Application aux limites",
    back: "Pour calculer lim f(x) quand x→a, on utilise le DL de f - g où g est connue.",
    frontLatex: "\\text{Calcul de limites avec DL :}",
    backLatex: "\\lim_{x \\to a} f(x) = \\lim_{x \\to a} \\frac{f(x) - g(x)}{x - a} \\cdot \\frac{x - a}{g(x)} \\cdot g(x)",
    category: "Applications",
    chapter: 14,
    difficulty: "moyen"
  }
];

export const chapitre15IntegralesImpropresFlashcards: MathFlashcard[] = [
  {
    id: 1,
    front: "Qu'est-ce qu'une intégrale impropre de première espèce ?",
    back: "Une intégrale impropre ∫_a^∞ f(t) dt = lim(b→∞) ∫_a^b f(t) dt.",
    frontLatex: "\\int_a^\\infty f(t) \\, dt = \\text{?}",
    backLatex: "\\lim_{b \\to \\infty} \\int_a^b f(t) \\, dt",
    category: "Intégrales impropres",
    chapter: 15,
    difficulty: "moyen"
  },
  {
    id: 2,
    front: "Critère de Riemann pour l'intégrale ∫_1^∞ 1/x^p dx",
    back: "∫_1^∞ x^{-p} dx converge si p > 1 et diverge si p ≤ 1.",
    frontLatex: "\\int_1^\\infty \\frac{1}{x^p} \\, dx \\text{ converge si ?}",
    backLatex: "p > 1",
    category: "Critères de convergence",
    chapter: 15,
    difficulty: "moyen"
  },
  {
    id: 3,
    front: "Intégrale impropre de deuxième espèce",
    back: "Une intégrale impropre ∫_a^b f(t) dt où f n'est pas intégrable en c ∈ [a,b].",
    frontLatex: "\\int_a^b f(t) \\, dt \\text{ impropre en } c \\in ]a,b[ \\text{ si ?}",
    backLatex: "f \\text{ non intégrable en } c \\text{ ou } \\lim_{x \\to c} f(x) = \\infty",
    category: "Intégrales impropres",
    chapter: 15,
    difficulty: "moyen"
  },
  {
    id: 4,
    front: "Convergence d'une intégrale impropre en +∞",
    back: "∫_a^∞ f(t) dt converge si lim(b→∞) ∫_a^b f(t) dt existe et est finie.",
    frontLatex: "\\int_a^\\infty f(t) \\, dt \\text{ converge } \\Leftrightarrow \\text{?}",
    backLatex: "\\lim_{b \\to \\infty} \\int_a^b f(t) \\, dt \\in \\mathbb{R}",
    category: "Critères de convergence",
    chapter: 15,
    difficulty: "moyen"
  },
  {
    id: 5,
    front: "Comparaison pour les intégrales impropres",
    back: "Si 0 ≤ f ≤ g et ∫ g converge, alors ∫ f converge. Si 0 ≤ g ≤ f et ∫ f diverge, alors ∫ g diverge.",
    frontLatex: "\\text{Théorème de comparaison :}",
    backLatex: "0 \\leq f \\leq g \\land \\int g < \\infty \\Rightarrow \\int f < \\infty",
    category: "Critères de convergence",
    chapter: 15,
    difficulty: "moyen"
  },
  {
    id: 6,
    front: "Critère de Cauchy pour intégrales impropres",
    back: "∫_a^∞ f converge ⇔ ∀ε>0, ∃B≥a tel que ∀c>d≥B, |∫_c^d f| < ε.",
    frontLatex: "\\text{Critère de Cauchy :}",
    backLatex: "\\forall \\epsilon > 0, \\quad \\exists B \\geq a, \\quad \\forall c > d \\geq B, \\quad \\left| \\int_d^c f \\right| < \\epsilon",
    category: "Critères de convergence",
    chapter: 15,
    difficulty: "difficile"
  },
  {
    id: 7,
    front: "Intégrale de Gauss ∫_0^∞ e^{-x²} dx",
    back: "Cette intégrale converge et vaut √π/2.",
    frontLatex: "\\int_0^\\infty e^{-x^2} \\, dx = \\text{?}",
    backLatex: "\\frac{\\sqrt{\\pi}}{2}",
    category: "Intégrales impropres particulières",
    chapter: 15,
    difficulty: "moyen"
  },
  {
    id: 8,
    front: "Intégrale ∫_0^∞ sin(x)/x dx",
    back: "Cette intégrale converge et vaut π/2.",
    frontLatex: "\\int_0^\\infty \\frac{\\sin x}{x} \\, dx = \\text{?}",
    backLatex: "\\frac{\\pi}{2}",
    category: "Intégrales impropres particulières",
    chapter: 15,
    difficulty: "moyen"
  },
  {
    id: 9,
    front: "Intégrale ∫_0^∞ e^{-ax} sin(bx) dx",
    back: "Cette intégrale converge pour a > 0 et vaut b/(a²+b²).",
    frontLatex: "\\int_0^\\infty e^{-a x} \\sin(b x) \\, dx = \\text{?}",
    backLatex: "\\frac{b}{a^2 + b^2} \\quad (a > 0)",
    category: "Intégrales impropres particulières",
    chapter: 15,
    difficulty: "difficile"
  },
  {
    id: 10,
    front: "Fonction Gamma Γ(z)",
    back: "Γ(z) = ∫_0^∞ t^{z-1} e^{-t} dt pour Re(z) > 0.",
    frontLatex: "\\Gamma(z) = \\text{?}",
    backLatex: "\\int_0^\\infty t^{z-1} e^{-t} \\, dt \\quad (\\Re(z) > 0)",
    category: "Fonction Gamma",
    chapter: 15,
    difficulty: "difficile"
  },
  {
    id: 11,
    front: "Propriétés de la fonction Gamma",
    back: "Γ(z+1) = z Γ(z), Γ(n+1) = n! pour n ∈ ℕ, Γ(1/2) = √π.",
    frontLatex: "\\text{Propriétés de } \\Gamma \\text{ :}",
    backLatex: "\\Gamma(z+1) = z \\Gamma(z), \\quad \\Gamma\\left(\\frac{1}{2}\\right) = \\sqrt{\\pi}",
    category: "Fonction Gamma",
    chapter: 15,
    difficulty: "moyen"
  },
  {
    id: 12,
    front: "Intégrale de Dirichlet ∫_0^∞ sin(x)/x dx",
    back: "Cette intégrale converge en valeur principale et vaut π/2.",
    frontLatex: "\\int_0^\\infty \\frac{\\sin x}{x} \\, dx = \\text{?}",
    backLatex: "\\frac{\\pi}{2} \\quad (\\text{valeur principale})",
    category: "Intégrales impropres particulières",
    chapter: 15,
    difficulty: "moyen"
  },
  {
    id: 13,
    front: "Transformation d'Abel pour intégrales impropres",
    back: "∫_a^∞ u dv = [u v]_a^∞ - ∫_a^∞ v du (si limites existent).",
    frontLatex: "\\text{Transformation d'Abel :}",
    backLatex: "\\int_a^\\infty u \\, dv = [u v]_a^\\infty - \\int_a^\\infty v \\, du",
    category: "Méthodes d'intégration",
    chapter: 15,
    difficulty: "difficile"
  },
  {
    id: 14,
    front: "Critère d'Abel pour les intégrales",
    back: "Si u est décroissante vers 0 et ∫ v converge, alors ∫ u v converge.",
    frontLatex: "\\text{Critère d'Abel :}",
    backLatex: "u \\searrow 0 \\land \\int v < \\infty \\Rightarrow \\int u v < \\infty",
    category: "Critères de convergence",
    chapter: 15,
    difficulty: "difficile"
  },
  {
    id: 15,
    front: "Intégrale de Fresnel ∫_0^∞ cos(x²) dx",
    back: "Cette intégrale converge et vaut √π/(2√2).",
    frontLatex: "\\int_0^\\infty \\cos(x^2) \\, dx = \\text{?}",
    backLatex: "\\frac{\\sqrt{\\pi}}{2 \\sqrt{2}}",
    category: "Intégrales impropres particulières",
    chapter: 15,
    difficulty: "difficile"
  },
  {
    id: 16,
    front: "Convergence absolue d'une intégrale impropre",
    back: "Si ∫ |f| converge, alors ∫ f converge.",
    frontLatex: "\\int |f| < \\infty \\Rightarrow \\text{?}",
    backLatex: "\\int f < \\infty",
    category: "Critères de convergence",
    chapter: 15,
    difficulty: "moyen"
  },
  {
    id: 17,
    front: "Intégrale semi-convergente",
    back: "Une intégrale impropre qui converge mais pas absolument.",
    frontLatex: "\\text{Intégrale semi-convergente :}",
    backLatex: "\\int f < \\infty \\land \\int |f| = \\infty",
    category: "Critères de convergence",
    chapter: 15,
    difficulty: "moyen"
  },
  {
    id: 18,
    front: "Critère de Dirichlet pour les intégrales",
    back: "Si ∫_a^∞ |dα| < ∞ et β bornée, alors ∫_a^∞ α dβ converge.",
    frontLatex: "\\text{Critère de Dirichlet :}",
    backLatex: "\\int |d\\alpha| < \\infty \\land \\beta \\text{ bornée} \\Rightarrow \\int \\alpha \\, d\\beta < \\infty",
    category: "Critères de convergence",
    chapter: 15,
    difficulty: "difficile"
  },
  {
    id: 19,
    front: "Valeur principale au sens de Cauchy",
    back: "lim(ε→0) [∫_a^{c-ε} f + ∫_{c+ε}^b f] pour une singularité en c.",
    frontLatex: "\\text{Valeur principale :}",
    backLatex: "V.p. \\int_a^b f = \\lim_{\\epsilon \\to 0} \\left( \\int_a^{c-\\epsilon} f + \\int_{c+\\epsilon}^b f \\right)",
    category: "Valeur principale",
    chapter: 15,
    difficulty: "difficile"
  },
  {
    id: 20,
    front: "Intégrale de Riemann ∫_{-∞}^∞ 1/(1+x²) dx",
    back: "Cette intégrale converge et vaut π.",
    frontLatex: "\\int_{-\\infty}^\\infty \\frac{1}{1+x^2} \\, dx = \\text{?}",
    backLatex: "\\pi",
    category: "Intégrales impropres particulières",
    chapter: 15,
    difficulty: "moyen"
  }
];

export const chapitre16EspacesProbabilisesFlashcards: MathFlashcard[] = [
  {
    id: 1,
    front: "Qu'est-ce qu'un espace probabilisé ?",
    back: "Un espace probabilisé est un triplet (Ω, T, P) où Ω est l'univers, T une tribu, P une probabilité.",
    frontLatex: "\\text{Espace probabilisé = ?}",
    backLatex: "(\\Omega, \\mathcal{T}, P)",
    category: "Espaces probabilisés",
    chapter: 16,
    difficulty: "moyen"
  },
  {
    id: 2,
    front: "Quelles sont les propriétés d'une probabilité ?",
    back: "P(∅) = 0, P(Ω) = 1, et P est σ-additive.",
    frontLatex: "\\text{Propriétés de } P \\text{ : ?}",
    backLatex: "P(\\emptyset) = 0, \\quad P(\\Omega) = 1, \\quad \\sigma\\text{-additivité}",
    category: "Propriétés",
    chapter: 16,
    difficulty: "facile"
  },
  {
    id: 3,
    front: "Qu'est-ce qu'une tribu ?",
    back: "Une tribu T sur Ω est une famille de sous-ensembles contenant Ω et ∅, stable par complémentaire et union dénombrable.",
    frontLatex: "\\text{Tribu } \\mathcal{T} \\text{ sur } \\Omega \\text{ : ?}",
    backLatex: "\\Omega, \\emptyset \\in \\mathcal{T}, \\quad \\text{stable par } ^c \\text{ et } \\cup_{n \\in \\mathbb{N}}",
    category: "Tribus",
    chapter: 16,
    difficulty: "moyen"
  },
  {
    id: 4,
    front: "Probabilité conditionnelle",
    back: "P(A|B) = P(A∩B)/P(B) si P(B) > 0.",
    frontLatex: "P(A|B) = \\text{?}",
    backLatex: "\\frac{P(A \\cap B)}{P(B)} \\quad (P(B) > 0)",
    category: "Probabilités conditionnelles",
    chapter: 16,
    difficulty: "facile"
  },
  {
    id: 5,
    front: "Formule des probabilités totales",
    back: "Si (B_i) partition, alors P(A) = Σ P(A∩B_i) = Σ P(A|B_i)×P(B_i).",
    frontLatex: "\\text{Probabilités totales :}",
    backLatex: "P(A) = \\sum_i P(A \\cap B_i) = \\sum_i P(A|B_i) \\cdot P(B_i)",
    category: "Probabilités conditionnelles",
    chapter: 16,
    difficulty: "moyen"
  },
  {
    id: 6,
    front: "Formule de Bayes",
    back: "P(B|A) = [P(A|B)×P(B)] / P(A).",
    frontLatex: "\\text{Formule de Bayes :}",
    backLatex: "P(B|A) = \\frac{P(A|B) \\cdot P(B)}{P(A)}",
    category: "Probabilités conditionnelles",
    chapter: 16,
    difficulty: "moyen"
  },
  {
    id: 7,
    front: "Indépendance de deux événements",
    back: "A et B indépendants si P(A∩B) = P(A)×P(B).",
    frontLatex: "A \\perp B \\Leftrightarrow \\text{?}",
    backLatex: "P(A \\cap B) = P(A) \\cdot P(B)",
    category: "Indépendance",
    chapter: 16,
    difficulty: "facile"
  },
  {
    id: 8,
    front: "Indépendance de plusieurs événements",
    back: "A1, ..., An indépendants si pour toute partie I, P(∩_{i∈I} A_i) = ∏_{i∈I} P(A_i).",
    frontLatex: "\\text{Indépendance de } A_1, \\dots, A_n \\text{ :}",
    backLatex: "\\forall I \\subset \\{1,\\dots,n\\}, \\quad P(\\cap_{i \\in I} A_i) = \\prod_{i \\in I} P(A_i)",
    category: "Indépendance",
    chapter: 16,
    difficulty: "moyen"
  },
  {
    id: 9,
    front: "Indépendance conditionnelle",
    back: "A ⊥ B | C si P(A∩B|C) = P(A|C)×P(B|C).",
    frontLatex: "A \\perp B \\mid C \\Leftrightarrow \\text{?}",
    backLatex: "P(A \\cap B | C) = P(A|C) \\cdot P(B|C)",
    category: "Indépendance",
    chapter: 16,
    difficulty: "moyen"
  },
  {
    id: 10,
    front: "Partition de l'univers",
    back: "Une partition de Ω est une famille d'événements disjoints dont la réunion fait Ω.",
    frontLatex: "\\text{Partition de } \\Omega \\text{ :}",
    backLatex: "\\bigcup_{i=1}^n A_i = \\Omega, \\quad A_i \\cap A_j = \\emptyset \\quad (i \\neq j)",
    category: "Événements",
    chapter: 16,
    difficulty: "facile"
  },
  {
    id: 11,
    front: "Probabilité d'une union d'événements",
    back: "P(A∪B) = P(A) + P(B) - P(A∩B).",
    frontLatex: "P(A \\cup B) = \\text{?}",
    backLatex: "P(A) + P(B) - P(A \\cap B)",
    category: "Propriétés",
    chapter: 16,
    difficulty: "facile"
  },
  {
    id: 12,
    front: "Probabilité d'un événement complémentaire",
    back: "P(Ā) = 1 - P(A).",
    frontLatex: "P(\\bar{A}) = \\text{?}",
    backLatex: "1 - P(A)",
    category: "Propriétés",
    chapter: 16,
    difficulty: "facile"
  },
  {
    id: 13,
    front: "Événements incompatibles",
    back: "A et B incompatibles si A∩B = ∅, alors P(A∪B) = P(A) + P(B).",
    frontLatex: "\\text{Événements incompatibles :}",
    backLatex: "A \\cap B = \\emptyset \\Rightarrow P(A \\cup B) = P(A) + P(B)",
    category: "Événements",
    chapter: 16,
    difficulty: "facile"
  },
  {
    id: 14,
    front: "Probabilité nulle et probabilité 1",
    back: "P(A) = 0 signifie que A est impossible, P(A) = 1 signifie que A est certain.",
    frontLatex: "P(A) = 0 \\text{ signifie ?}",
    backLatex: "A \\text{ est impossible}, \\quad P(A) = 1 \\Rightarrow A \\text{ est certain}",
    category: "Propriétés",
    chapter: 16,
    difficulty: "facile"
  },
  {
    id: 15,
    front: "Formule des probabilités composées",
    back: "P(A∩B∩C) = P(A)×P(B|A)×P(C|A∩B).",
    frontLatex: "\\text{Probabilités composées :}",
    backLatex: "P(A \\cap B \\cap C) = P(A) \\cdot P(B|A) \\cdot P(C|A \\cap B)",
    category: "Probabilités conditionnelles",
    chapter: 16,
    difficulty: "moyen"
  },
  {
    id: 16,
    front: "Probabilité conditionnelle et indépendance",
    back: "Si A ⊥ B alors P(A|B) = P(A) et P(B|A) = P(B).",
    frontLatex: "\\text{Indépendance et conditionnelle :}",
    backLatex: "A \\perp B \\Rightarrow P(A|B) = P(A) \\land P(B|A) = P(B)",
    category: "Indépendance",
    chapter: 16,
    difficulty: "moyen"
  },
  {
    id: 17,
    front: "Continuité des probabilités",
    back: "Si A_n ↑ A alors P(A_n) ↑ P(A), si A_n ↓ A alors P(A_n) ↓ P(A).",
    frontLatex: "\\text{Continuité :}",
    backLatex: "A_n \\uparrow A \\Rightarrow P(A_n) \\uparrow P(A), \\quad A_n \\downarrow A \\Rightarrow P(A_n) \\downarrow P(A)",
    category: "Propriétés",
    chapter: 16,
    difficulty: "moyen"
  },
  {
    id: 18,
    front: "Probabilité conditionnelle et indépendance",
    back: "Si A ⊥ B alors P(A|B) = P(A). L'indépendance signifie que la connaissance de B n'apporte aucune information sur A.",
    frontLatex: "\\text{Indépendance conditionnelle :}",
    backLatex: "A \\perp B \\Rightarrow P(A|B) = P(A) \\land P(B|A) = P(B)",
    category: "Indépendance",
    chapter: 16,
    difficulty: "moyen"
  },
  {
    id: 19,
    front: "Propriétés de monotonicité",
    back: "Si A ⊂ B alors P(A) ≤ P(B).",
    frontLatex: "\\text{Monotonicité :}",
    backLatex: "A \\subset B \\Rightarrow P(A) \\leq P(B)",
    category: "Propriétés",
    chapter: 16,
    difficulty: "facile"
  },
  {
    id: 20,
    front: "Probabilité d'une différence",
    back: "P(A\\B) = P(A) - P(A∩B).",
    frontLatex: "P(A \\setminus B) = \\text{?}",
    backLatex: "P(A) - P(A \\cap B)",
    category: "Propriétés",
    chapter: 16,
    difficulty: "facile"
  }
];

export const chapitre17VariablesDiscretesFlashcards: MathFlashcard[] = [
  {
    id: 1,
    front: "Qu'est-ce qu'une variable aléatoire discrète ?",
    back: "Une v.a. discrète prend un nombre fini ou dénombrable de valeurs.",
    frontLatex: "\\text{V.a. discrète = ?}",
    backLatex: "\\text{Prend un nombre fini ou dénombrable de valeurs}",
    category: "Variables aléatoires discrètes",
    chapter: 17,
    difficulty: "facile"
  },
  {
    id: 2,
    front: "Quelle est la loi binomiale B(n,p) ?",
    back: "Loi de P(X=k) = C(n,k) p^k (1-p)^{n-k} pour k=0 à n.",
    frontLatex: "X \\sim \\mathcal{B}(n,p) \\Rightarrow P(X=k) = \\text{?}",
    backLatex: "\\binom{n}{k} p^k (1-p)^{n-k} \\quad (k=0,\\dots,n)",
    category: "Lois usuelles",
    chapter: 17,
    difficulty: "moyen"
  },
  {
    id: 3,
    front: "Espérance d'une v.a. discrète",
    back: "E[X] = Σ x_i P(X = x_i).",
    frontLatex: "\\mathbb{E}[X] = \\text{?}",
    backLatex: "\\sum x_i P(X = x_i)",
    category: "Espérance et variance",
    chapter: 17,
    difficulty: "facile"
  },
  {
    id: 4,
    front: "Variance d'une v.a. discrète",
    back: "Var(X) = E[X²] - (E[X])².",
    frontLatex: "\\mathbb{V}[X] = \\text{?}",
    backLatex: "\\mathbb{E}[X^2] - (\\mathbb{E}[X])^2",
    category: "Espérance et variance",
    chapter: 17,
    difficulty: "facile"
  },
  {
    id: 5,
    front: "Loi uniforme discrète",
    back: "P(X = x_i) = 1/n pour i=1 à n.",
    frontLatex: "X \\sim \\mathcal{U}(\\{x_1,\\dots,x_n\\}) \\Rightarrow P(X=x_i) = \\text{?}",
    backLatex: "\\frac{1}{n} \\quad \\forall i",
    category: "Lois usuelles",
    chapter: 17,
    difficulty: "facile"
  },
  {
    id: 6,
    front: "Loi de Poisson P(λ)",
    back: "P(X = k) = e^(-λ) λ^k / k! pour k ∈ ℕ.",
    frontLatex: "X \\sim \\mathcal{P}(\\lambda) \\Rightarrow P(X=k) = \\text{?}",
    backLatex: "\\frac{e^{-\\lambda} \\lambda^k}{k!} \\quad (k \\in \\mathbb{N})",
    category: "Lois usuelles",
    chapter: 17,
    difficulty: "moyen"
  },
  {
    id: 7,
    front: "Loi géométrique G(p)",
    back: "P(X = k) = (1-p)^(k-1) p pour k ≥ 1.",
    frontLatex: "X \\sim \\mathcal{G}(p) \\Rightarrow P(X=k) = \\text{?}",
    backLatex: "(1-p)^{k-1} p \\quad (k \\geq 1)",
    category: "Lois usuelles",
    chapter: 17,
    difficulty: "moyen"
  },
  {
    id: 8,
    front: "Loi hypergéométrique H(N,K,n)",
    back: "P(X = k) = C(K,k) × C(N-K,n-k) / C(N,n) pour max(0,n-(N-K)) ≤ k ≤ min(n,K).",
    frontLatex: "X \\sim \\mathcal{H}(N,K,n) \\Rightarrow P(X=k) = \\text{?}",
    backLatex: "\\frac{\\binom{K}{k} \\binom{N-K}{n-k}}{\\binom{N}{n}}",
    category: "Lois usuelles",
    chapter: 17,
    difficulty: "difficile"
  },
  {
    id: 9,
    front: "Espérance de la loi binomiale B(n,p)",
    back: "E[X] = n×p.",
    frontLatex: "X \\sim \\mathcal{B}(n,p) \\Rightarrow \\mathbb{E}[X] = \\text{?}",
    backLatex: "n p",
    category: "Espérances des lois usuelles",
    chapter: 17,
    difficulty: "facile"
  },
  {
    id: 10,
    front: "Variance de la loi binomiale B(n,p)",
    back: "Var(X) = n×p×(1-p).",
    frontLatex: "X \\sim \\mathcal{B}(n,p) \\Rightarrow \\mathbb{V}[X] = \\text{?}",
    backLatex: "n p (1-p)",
    category: "Variances des lois usuelles",
    chapter: 17,
    difficulty: "facile"
  },
  {
    id: 11,
    front: "Espérance de la loi de Poisson P(λ)",
    back: "E[X] = λ.",
    frontLatex: "X \\sim \\mathcal{P}(\\lambda) \\Rightarrow \\mathbb{E}[X] = \\text{?}",
    backLatex: "\\lambda",
    category: "Espérances des lois usuelles",
    chapter: 17,
    difficulty: "facile"
  },
  {
    id: 12,
    front: "Variance de la loi de Poisson P(λ)",
    back: "Var(X) = λ.",
    frontLatex: "X \\sim \\mathcal{P}(\\lambda) \\Rightarrow \\mathbb{V}[X] = \\text{?}",
    backLatex: "\\lambda",
    category: "Variances des lois usuelles",
    chapter: 17,
    difficulty: "facile"
  },
  {
    id: 13,
    front: "Espérance de la loi géométrique G(p)",
    back: "E[X] = 1/p.",
    frontLatex: "X \\sim \\mathcal{G}(p) \\Rightarrow \\mathbb{E}[X] = \\text{?}",
    backLatex: "\\frac{1}{p}",
    category: "Espérances des lois usuelles",
    chapter: 17,
    difficulty: "facile"
  },
  {
    id: 14,
    front: "Variance de la loi géométrique G(p)",
    back: "Var(X) = (1-p)/p².",
    frontLatex: "X \\sim \\mathcal{G}(p) \\Rightarrow \\mathbb{V}[X] = \\text{?}",
    backLatex: "\\frac{1-p}{p^2}",
    category: "Variances des lois usuelles",
    chapter: 17,
    difficulty: "moyen"
  },
  {
    id: 15,
    front: "Fonction génératrice d'une v.a. discrète",
    back: "G_X(t) = E[t^X] = Σ P(X=k) t^k.",
    frontLatex: "G_X(t) = \\text{?}",
    backLatex: "\\mathbb{E}[t^X] = \\sum P(X = k) t^k",
    category: "Fonction génératrice",
    chapter: 17,
    difficulty: "moyen"
  },
  {
    id: 16,
    front: "Propriétés de la fonction génératrice",
    back: "G'(0) = E[X], G''(0) = E[X(X-1)], Var(X) = G''(0) + G'(0) - (G'(0))².",
    frontLatex: "\\text{Propriétés de } G_X \\text{ :}",
    backLatex: "G'(0) = \\mathbb{E}[X], \\quad G''(0) = \\mathbb{E}[X(X-1)]",
    category: "Fonction génératrice",
    chapter: 17,
    difficulty: "moyen"
  },
  {
    id: 17,
    front: "Somme de v.a. indépendantes",
    back: "Si X,Y indépendantes, E[X+Y] = E[X] + E[Y], Var(X+Y) = Var(X) + Var(Y).",
    frontLatex: "\\text{Somme de v.a. indép. :}",
    backLatex: "\\mathbb{E}[X+Y] = \\mathbb{E}[X] + \\mathbb{E}[Y], \\quad \\mathbb{V}[X+Y] = \\mathbb{V}[X] + \\mathbb{V}[Y]",
    category: "Propriétés",
    chapter: 17,
    difficulty: "moyen"
  },
  {
    id: 18,
    front: "Approximation de la loi binomiale par la loi de Poisson",
    back: "Si n grand, p petit, np ≈ λ fixe, alors B(n,p) ≈ P(λ).",
    frontLatex: "\\text{Approximation binomiale-Poisson :}",
    backLatex: "n \\gg 1, \\quad p \\ll 1, \\quad \\lambda = np \\text{ fixe } \\Rightarrow \\mathcal{B}(n,p) \\approx \\mathcal{P}(\\lambda)",
    category: "Approximations",
    chapter: 17,
    difficulty: "moyen"
  },
  {
    id: 19,
    front: "Théorème central limite pour v.a. discrètes",
    back: "Sous conditions, (S_n - nμ)/√(nσ²) → N(0,1) où S_n somme de n v.a. i.i.d.",
    frontLatex: "\\text{TCL :}",
    backLatex: "\\frac{S_n - n\\mu}{\\sqrt{n} \\sigma} \\xrightarrow{\\mathcal{L}} \\mathcal{N}(0,1)",
    category: "Théorème central limite",
    chapter: 17,
    difficulty: "difficile"
  },
  {
    id: 20,
    front: "Inégalité de Markov pour v.a. positives",
    back: "P(X ≥ a) ≤ E[X]/a pour a > 0.",
    frontLatex: "\\text{Markov :} \\quad P(X \\geq a) \\leq \\text{?}",
    backLatex: "\\frac{\\mathbb{E}[X]}{a} \\quad (a > 0, X \\geq 0)",
    category: "Inégalités",
    chapter: 17,
    difficulty: "moyen"
  }
];

export const chapitre18ConvergencesFlashcards: MathFlashcard[] = [
  {
    id: 1,
    front: "Inégalité de Markov",
    back: "Pour X ≥ 0, P(X ≥ a) ≤ E[X]/a.",
    frontLatex: "\\text{Markov :}",
    backLatex: "\\mathbb{P}(X \\geq a) \\leq \\frac{\\mathbb{E}[X]}{a} \\quad (X \\geq 0)",
    category: "Inégalités de base",
    chapter: 18,
    difficulty: "facile"
  },
  {
    id: 2,
    front: "Inégalité de Bienaymé-Tchebychev",
    back: "P(|X - E[X]| ≥ ε) ≤ Var(X)/ε².",
    frontLatex: "\\text{Bienaymé-Tchebychev :}",
    backLatex: "\\mathbb{P}(|X - \\mathbb{E}[X]| \\geq \\epsilon) \\leq \\frac{\\mathbb{V}[X]}{\\epsilon^2}",
    category: "Inégalités de base",
    chapter: 18,
    difficulty: "moyen"
  },
  {
    id: 3,
    front: "Convergence en probabilité",
    back: "X_n → X en probabilité si ∀ε > 0, P(|X_n - X| > ε) → 0.",
    frontLatex: "X_n \\overset{\\mathbb{P}}{\\to} X \\Leftrightarrow \\text{?}",
    backLatex: "\\forall \\epsilon > 0, \\quad \\mathbb{P}(|X_n - X| > \\epsilon) \\to 0",
    category: "Convergence en probabilité",
    chapter: 18,
    difficulty: "moyen"
  },
  {
    id: 4,
    front: "Loi faible des grands nombres (LFGN)",
    back: "Si X_i i.i.d. d'espérance μ, alors (1/n)Σ X_i → μ en probabilité.",
    frontLatex: "\\text{LFGN :}",
    backLatex: "\\frac{1}{n} \\sum_{i=1}^n X_i \\overset{\\mathbb{P}}{\\to} \\mu \\quad (X_i \\text{ i.i.d. }, \\mathbb{E}[X_1] = \\mu)",
    category: "Convergence en probabilité",
    chapter: 18,
    difficulty: "moyen"
  },
  {
    id: 5,
    front: "Stabilité de la convergence en probabilité par somme",
    back: "Si X_n → X et Y_n → Y en probabilité, alors X_n + Y_n → X + Y en probabilité.",
    frontLatex: "\\text{Somme :}",
    backLatex: "X_n \\overset{\\mathbb{P}}{\\to} X, \\quad Y_n \\overset{\\mathbb{P}}{\\to} Y \\Rightarrow X_n + Y_n \\overset{\\mathbb{P}}{\\to} X + Y",
    category: "Stabilité par composition et somme",
    chapter: 18,
    difficulty: "moyen"
  },
  {
    id: 6,
    front: "Stabilité de la convergence en probabilité par produit",
    back: "Si X_n → X et Y_n → c (constante) en probabilité, alors X_n Y_n → X c en probabilité.",
    frontLatex: "\\text{Produit par constante :}",
    backLatex: "X_n \\overset{\\mathbb{P}}{\\to} X, \\quad Y_n \\overset{\\mathbb{P}}{\\to} c \\Rightarrow X_n Y_n \\overset{\\mathbb{P}}{\\to} X c",
    category: "Stabilité par composition et somme",
    chapter: 18,
    difficulty: "moyen"
  },
  {
    id: 7,
    front: "Convergence en loi",
    back: "X_n → X en loi si F_{X_n}(x) → F_X(x) en tout point de continuité de F_X.",
    frontLatex: "X_n \\xrightarrow{\\mathcal{L}} X \\Leftrightarrow \\text{?}",
    backLatex: "F_{X_n}(x) \\to F_X(x) \\quad \\forall x \\text{ continuité de } F_X",
    category: "Convergence en loi",
    chapter: 18,
    difficulty: "moyen"
  },
  {
    id: 8,
    front: "Convergence en loi et espérances",
    back: "Si X_n → X en loi et f continue bornée, alors E[f(X_n)] → E[f(X)].",
    frontLatex: "\\text{Continuité des espérances :}",
    backLatex: "X_n \\xrightarrow{\\mathcal{L}} X \\land f \\text{ continue bornée} \\Rightarrow \\mathbb{E}[f(X_n)] \\to \\mathbb{E}[f(X)]",
    category: "Convergence en loi",
    chapter: 18,
    difficulty: "difficile"
  },
  {
    id: 9,
    front: "Théorème central limite (TCL)",
    back: "Si X_i i.i.d. d'espérance μ et variance σ², alors (S_n - nμ)/√(nσ²) → N(0,1) en loi.",
    frontLatex: "\\text{TCL :}",
    backLatex: "\\frac{S_n - n\\mu}{\\sqrt{n} \\sigma} \\xrightarrow{\\mathcal{L}} \\mathcal{N}(0,1) \\quad (X_i \\text{ i.i.d.})",
    category: "Théorèmes limites",
    chapter: 18,
    difficulty: "difficile"
  },
  {
    id: 10,
    front: "Approximation normale par TCL",
    back: "Pour n grand, une somme de v.a. i.i.d. suit approximativement une loi normale.",
    frontLatex: "\\text{Application du TCL :}",
    backLatex: "S_n \\approx \\mathcal{N}(n\\mu, n\\sigma^2) \\quad (n \\text{ grand})",
    category: "Théorèmes limites",
    chapter: 18,
    difficulty: "moyen"
  },
  {
    id: 11,
    front: "Conditions du TCL",
    back: "Les X_i doivent être i.i.d. avec E[X_i] = μ fini et Var(X_i) = σ² fini.",
    frontLatex: "\\text{Hypothèses du TCL :}",
    backLatex: "X_i \\text{ i.i.d., } \\mathbb{E}[X_1] = \\mu < \\infty, \\quad \\mathbb{V}[X_1] = \\sigma^2 < \\infty",
    category: "Théorèmes limites",
    chapter: 18,
    difficulty: "moyen"
  },
  {
    id: 12,
    front: "LFGN et TCL sont compatibles",
    back: "La LFGN donne la convergence de la moyenne, le TCL donne sa loi limite.",
    frontLatex: "\\text{LFGN vs TCL :}",
    backLatex: "\\overline{X}_n \\overset{\\mathbb{P}}{\\to} \\mu, \\quad \\sqrt{n}(\\overline{X}_n - \\mu) \\xrightarrow{\\mathcal{L}} \\mathcal{N}(0,\\sigma^2)",
    category: "Théorèmes limites",
    chapter: 18,
    difficulty: "difficile"
  },
  {
    id: 13,
    front: "Convergence en probabilité implique convergence en loi",
    back: "Si X_n → X en probabilité, alors X_n → X en loi.",
    frontLatex: "\\text{Implication :}",
    backLatex: "X_n \\overset{\\mathbb{P}}{\\to} X \\Rightarrow X_n \\xrightarrow{\\mathcal{L}} X",
    category: "Relations entre convergences",
    chapter: 18,
    difficulty: "moyen"
  },
  {
    id: 14,
    front: "L'inverse n'est pas vrai",
    back: "La convergence en loi n'implique pas la convergence en probabilité.",
    frontLatex: "\\text{Réciproque fausse :}",
    backLatex: "X_n \\xrightarrow{\\mathcal{L}} X \\not\\Rightarrow X_n \\overset{\\mathbb{P}}{\\to} X",
    category: "Relations entre convergences",
    chapter: 18,
    difficulty: "moyen"
  },
  {
    id: 15,
    front: "Application des inégalités : contrôle de probabilités",
    back: "Markov et Tchebychev permettent de majorer des probabilités à partir des moments.",
    frontLatex: "\\text{Applications :}",
    backLatex: "\\mathbb{P}(|X - \\mu| \\geq \\epsilon) \\leq \\frac{\\sigma^2}{\\epsilon^2} \\quad (\\text{Tchebychev})",
    category: "Inégalités de base",
    chapter: 18,
    difficulty: "moyen"
  },
  {
    id: 16,
    front: "Utilisation de la LFGN dans la pratique",
    back: "Pour estimer une proportion ou une moyenne, la moyenne empirique converge vers la vraie valeur.",
    frontLatex: "\\text{Estimation :}",
    backLatex: "\\hat{p} = \\frac{1}{n} \\sum X_i \\overset{\\mathbb{P}}{\\to} p \\quad (\\text{estimation de proportion})",
    category: "Convergence en probabilité",
    chapter: 18,
    difficulty: "facile"
  },
  {
    id: 17,
    front: "Stabilité par composition continue",
    back: "Si X_n → X en probabilité et f continue, alors f(X_n) → f(X) en probabilité.",
    frontLatex: "\\text{Composition :}",
    backLatex: "X_n \\overset{\\mathbb{P}}{\\to} X \\land f \\text{ continue} \\Rightarrow f(X_n) \\overset{\\mathbb{P}}{\\to} f(X)",
    category: "Stabilité par composition et somme",
    chapter: 18,
    difficulty: "moyen"
  },
  {
    id: 18,
    front: "LFGN implique convergence en loi",
    back: "Si (1/n)Σ X_i → μ en probabilité, alors la moyenne converge aussi en loi vers μ.",
    frontLatex: "\\text{LFGN } \\Rightarrow \\text{?}",
    backLatex: "\\overline{X}_n \\xrightarrow{\\mathcal{L}} \\mu \\quad (\\text{sous conditions})",
    category: "Relations entre convergences",
    chapter: 18,
    difficulty: "difficile"
  },
  {
    id: 19,
    front: "TCL justifie l'approximation normale",
    back: "Le TCL explique pourquoi de nombreuses statistiques suivent approximativement une loi normale.",
    frontLatex: "\\text{Justification statistique :}",
    backLatex: "\\text{Somme de nombreux facteurs indépendants } \\approx \\text{ loi normale}",
    category: "Théorèmes limites",
    chapter: 18,
    difficulty: "moyen"
  },
  {
    id: 20,
    front: "Récapitulatif : hiérarchie des convergences",
    back: "Convergence presque sûre ⇒ convergence en probabilité ⇒ convergence en loi.",
    frontLatex: "\\text{Hiérarchie :}",
    backLatex: "\\text{p.s.} \\Rightarrow \\mathbb{P} \\Rightarrow \\mathcal{L}",
    category: "Relations entre convergences",
    chapter: 18,
    difficulty: "facile"
  }
];

// Flashcards pour le chapitre 1 - Logique & raisonnement fondamentaux
export const chapitre1LogiqueFlashcards: MathFlashcard[] = [
  {
    id: 1,
    front: "Qu'est-ce qu'une proposition ?",
    back: "Une proposition est une affirmation concernant des objets mathématiques dont on peut décider sans ambiguïté si elle est vraie ou fausse.",
    frontLatex: "\\text{Proposition = ?}",
    backLatex: "\\text{Affirmation vraie ou fausse sans ambiguïté}",
    category: "Définitions",
    chapter: 1,
    difficulty: "facile"
  },
  {
    id: 2,
    front: "Quelle est la négation de P ?",
    back: "La négation de P se note ¬P (ou ∼P) et est vraie quand P est fausse.",
    frontLatex: "\\neg P = \\text{?}",
    backLatex: "\\neg P \\text{ vraie ssi } P \\text{ fausse}",
    category: "Connecteurs logiques",
    chapter: 1,
    difficulty: "facile"
  },
  {
    id: 3,
    front: "Que vaut P ∧ Q ?",
    back: "P ∧ Q est vraie seulement si P ET Q sont vraies toutes les deux.",
    frontLatex: "P \\land Q = \\text{?}",
    backLatex: "\\text{Vrai ssi } P \\text{ et } Q \\text{ vrais}",
    category: "Connecteurs logiques",
    chapter: 1,
    difficulty: "facile"
  },
  {
    id: 4,
    front: "Que vaut P ∨ Q ?",
    back: "P ∨ Q est vraie si P est vraie OU si Q est vraie (ou les deux).",
    frontLatex: "P \\lor Q = \\text{?}",
    backLatex: "\\text{Vrai si } P \\text{ ou } Q \\text{ (ou les deux) vrais}",
    category: "Connecteurs logiques",
    chapter: 1,
    difficulty: "facile"
  },
  {
    id: 5,
    front: "Quelle est la contraposée de P ⇒ Q ?",
    back: "La contraposée de P ⇒ Q est ¬Q ⇒ ¬P et a la même valeur de vérité.",
    frontLatex: "\\text{Contraposée de } P \\Rightarrow Q \\text{ = ?}",
    backLatex: "\\neg Q \\Rightarrow \\neg P \\quad (\\text{même valeur de vérité})",
    category: "Implications",
    chapter: 1,
    difficulty: "moyen"
  },
  {
    id: 6,
    front: "Que signifie P ⇔ Q ?",
    back: "P ⇔ Q signifie P ⇒ Q ET Q ⇒ P, c'est-à-dire que P et Q sont équivalentes.",
    frontLatex: "P \\Leftrightarrow Q \\text{ signifie ?}",
    backLatex: "(P \\Rightarrow Q) \\land (Q \\Rightarrow P)",
    category: "Équivalences",
    chapter: 1,
    difficulty: "facile"
  },
  {
    id: 7,
    front: "Que signifie le quantificateur ∀ ?",
    back: "∀ signifie 'pour tout' ou 'quel que soit'. ∀x ∈ E, P(x) signifie que P(x) est vraie pour tous les x dans E.",
    frontLatex: "\\forall \\text{ signifie ?}",
    backLatex: "\\forall x \\in E, P(x) \\text{ = pour tout } x \\in E, P(x)",
    category: "Quantificateurs",
    chapter: 1,
    difficulty: "facile"
  },
  {
    id: 8,
    front: "Que signifie le quantificateur ∃ ?",
    back: "∃ signifie 'il existe'. ∃x ∈ E tel que P(x) signifie qu'il y a au moins un x dans E pour lequel P(x) est vraie.",
    frontLatex: "\\exists \\text{ signifie ?}",
    backLatex: "\\exists x \\in E, P(x) \\text{ = il existe } x \\in E \\text{ tel que } P(x)",
    category: "Quantificateurs",
    chapter: 1,
    difficulty: "facile"
  },
  {
    id: 9,
    front: "Qu'est-ce qu'un raisonnement par l'absurde ?",
    back: "Le raisonnement par l'absurde consiste à supposer que la proposition à démontrer est fausse et à aboutir à une contradiction.",
    frontLatex: "\\text{Raisonnement par l'absurde = ?}",
    backLatex: "\\text{Supposer P fausse } \\Rightarrow \\text{ contradiction}",
    category: "Méthodes de démonstration",
    chapter: 1,
    difficulty: "moyen"
  },
  {
    id: 10,
    front: "Qu'est-ce qu'une démonstration par disjonction de cas ?",
    back: "Une démonstration par disjonction de cas consiste à diviser le problème en plusieurs cas disjoints et à traiter chaque cas séparément.",
    frontLatex: "\\text{Disjonction de cas = ?}",
    backLatex: "\\text{Diviser en cas disjoints et traiter chacun}",
    category: "Méthodes de démonstration",
    chapter: 1,
    difficulty: "facile"
  },
  {
    id: 11,
    front: "Que vaut ¬(P ∧ Q) ?",
    back: "¬(P ∧ Q) = ¬P ∨ ¬Q (loi de Morgan).",
    frontLatex: "\\neg(P \\land Q) = \\text{?}",
    backLatex: "\\neg P \\lor \\neg Q",
    category: "Lois de Morgan",
    chapter: 1,
    difficulty: "moyen"
  },
  {
    id: 12,
    front: "Que vaut ¬(P ∨ Q) ?",
    back: "¬(P ∨ Q) = ¬P ∧ ¬Q (loi de Morgan).",
    frontLatex: "\\neg(P \\lor Q) = \\text{?}",
    backLatex: "\\neg P \\land \\neg Q",
    category: "Lois de Morgan",
    chapter: 1,
    difficulty: "moyen"
  },
  {
    id: 13,
    front: "Quelle est la réciproque de P ⇒ Q ?",
    back: "La réciproque de P ⇒ Q est Q ⇒ P.",
    frontLatex: "\\text{Réciproque de } P \\Rightarrow Q \\text{ = ?}",
    backLatex: "Q \\Rightarrow P",
    category: "Implications",
    chapter: 1,
    difficulty: "facile"
  },
  {
    id: 14,
    front: "Quand dit-on que deux propositions sont équivalentes ?",
    back: "Deux propositions P et Q sont équivalentes si elles ont la même valeur de vérité dans tous les cas.",
    frontLatex: "P \\text{ et } Q \\text{ équivalentes} \\Leftrightarrow \\text{?}",
    backLatex: "\\text{Même valeur de vérité dans tous les cas}",
    category: "Équivalences",
    chapter: 1,
    difficulty: "facile"
  },
  {
    id: 15,
    front: "Qu'est-ce qu'une démonstration directe ?",
    back: "Une démonstration directe consiste à partir des hypothèses et à appliquer successivement des règles logiques pour arriver à la conclusion.",
    frontLatex: "\\text{Démonstration directe = ?}",
    backLatex: "\\text{Hypothèses } \\Rightarrow \\text{ règles logiques } \\Rightarrow \\text{ conclusion}",
    category: "Méthodes de démonstration",
    chapter: 1,
    difficulty: "moyen"
  },
  {
    id: 16,
    front: "Que signifie ¬∃x, P(x) ?",
    back: "¬∃x, P(x) signifie qu'il n'existe aucun x tel que P(x) soit vraie, c'est-à-dire ∀x, ¬P(x).",
    frontLatex: "\\neg \\exists x, P(x) = \\text{?}",
    backLatex: "\\forall x, \\neg P(x)",
    category: "Quantificateurs",
    chapter: 1,
    difficulty: "moyen"
  },
  {
    id: 17,
    front: "Que signifie ¬∀x, P(x) ?",
    back: "¬∀x, P(x) signifie qu'il existe au moins un x tel que P(x) soit fausse, c'est-à-dire ∃x, ¬P(x).",
    frontLatex: "\\neg \\forall x, P(x) = \\text{?}",
    backLatex: "\\exists x, \\neg P(x)",
    category: "Quantificateurs",
    chapter: 1,
    difficulty: "moyen"
  },
  {
    id: 18,
    front: "Quelle est la table de vérité de P ⇒ Q ?",
    back: "P ⇒ Q est fausse seulement quand P est vraie et Q est fausse. Sinon elle est vraie.",
    frontLatex: "\\text{Table de vérité de } P \\Rightarrow Q \\text{ :}",
    backLatex: "\\begin{array}{cc|c} P & Q & P \\Rightarrow Q \\\\ \\hline T & T & T \\\\ T & F & F \\\\ F & T & T \\\\ F & F & T \\end{array}",
    category: "Implications",
    chapter: 1,
    difficulty: "difficile"
  },
  {
    id: 19,
    front: "Qu'est-ce qu'une tautologie ?",
    back: "Une tautologie est une proposition composée qui est toujours vraie, quel que soit la valeur de vérité de ses propositions élémentaires.",
    frontLatex: "\\text{Tautologie = ?}",
    backLatex: "\\text{Proposition toujours vraie}",
    category: "Propriétés",
    chapter: 1,
    difficulty: "moyen"
  },
  {
    id: 20,
    front: "Qu'est-ce qu'une contradiction ?",
    back: "Une contradiction est une proposition composée qui est toujours fausse, quel que soit la valeur de vérité de ses propositions élémentaires.",
    frontLatex: "\\text{Contradiction = ?}",
    backLatex: "\\text{Proposition toujours fausse}",
    category: "Propriétés",
    chapter: 1,
    difficulty: "moyen"
  }
];

// Export par chapitre pour faciliter l'accès
export const mathFlashcardsData = {
  chapitre1: chapitre1LogiqueFlashcards,
  chapitre2: chapitre2EnsemblesFlashcards,
  chapitre3: chapitre3SommesProduitsFlashcards,
  chapitre4: chapitre4SuitesNumeriquesFlashcards,
  chapitre5: chapitre5FonctionsReellesFlashcards,
  chapitre6: chapitre6DerivationFlashcards,
  chapitre7: chapitre7IntegrationFlashcards,
  chapitre8: chapitre8PolynomesFlashcards,
  chapitre9: chapitre9MatricesEspacesFlashcards,
  chapitre10: chapitre10ProbabilitesFlashcards,
  chapitre11: chapitre11ApplicationsLineairesFlashcards,
  chapitre12: chapitre12ComparaisonFlashcards,
  chapitre13: chapitre13SeriesFlashcards,
  chapitre14: chapitre14DeveloppementsLimitesFlashcards,
  chapitre15: chapitre15IntegralesImpropresFlashcards,
  chapitre16: chapitre16EspacesProbabilisesFlashcards,
  chapitre17: chapitre17VariablesDiscretesFlashcards,
  chapitre18: chapitre18ConvergencesFlashcards,
  // Chapitres de deuxième année (conservés)
  chapitre8couple: coupleVariablesAleatoiresFlashcards, // Chapitre 7 "Cas particulier du couple" dans l'interface
  chapitre9reduction: reductionMatricesSymetriquesFlashcards, // Chapitre 9 "Réduction des endomorphismes" dans l'interface
  chapitre46: variablesAleatoiresDensiteFlashcards
};

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
  const categories = new Set(flashcards.map(card => card.category));
  return Array.from(categories);
};
