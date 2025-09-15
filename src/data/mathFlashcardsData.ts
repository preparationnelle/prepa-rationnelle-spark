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

// Export par chapitre pour faciliter l'accès
export const mathFlashcardsData = {
  chapitre1: complementsAlgebreLineaireFlashcards,
  chapitre2: endomorphismesMatricesFlashcards,
  chapitre3: algebreBilineaireFlashcards,
  chapitre4: fonctionsMultivarieesFlashcards,
  chapitre5: fonctionsUneVariableReelleFlashcards,
  chapitre6: derivationFlashcards,
  chapitre7: nupletsVariablesAleatoiresFlashcards,
  chapitre8: algebreBilineaireEspacesEuclidiensFlashcards,
  chapitre8couple: coupleVariablesAleatoiresFlashcards, // Chapitre 7 "Cas particulier du couple" dans l'interface
  chapitre9: matricesEspacesVectorielsFlashcards,
  chapitre9reduction: reductionMatricesSymetriquesFlashcards, // Chapitre 9 "Réduction des endomorphismes" dans l'interface
  chapitre10: probabilitesConditionnementFlashcards,
  chapitre11: optimisationMultivarieeAvanceeFlashcards,
  chapitre12: convergencesApproximationsFlashcards,
  chapitre13: estimationStatistiqueAvanceeFlashcards,
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
  const categories = new Set(flashcards.map(card => card.category));
  return Array.from(categories);
};
