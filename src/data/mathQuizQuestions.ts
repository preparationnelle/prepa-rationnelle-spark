import type { MathQuizQuestion } from '@/components/quiz/MathQuiz';

// Chapitre 1: Éléments de logique
export const chapitre1QuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Quelle est la négation de la proposition 'P' ?",
    options: ["P", "¬P", "P ∧ Q", "P ∨ Q"],
    correctAnswer: 1,
    explanation: "La négation de P se note ¬P (ou ~P) et est vraie quand P est fausse."
  },
  {
    id: 2,
    question: "Si P est vraie et Q est fausse, que vaut P ∧ Q ?",
    options: ["Vraie", "Fausse", "Indéterminée", "Aucune de ces réponses"],
    correctAnswer: 1,
    explanation: "P ∧ Q est vraie seulement si P ET Q sont vraies toutes les deux."
  },
  {
    id: 3,
    question: "Quelle est la contraposée de P ⇒ Q ?",
    options: ["Q ⇒ P", "¬Q ⇒ ¬P", "¬P ⇒ ¬Q", "P ∧ ¬Q"],
    correctAnswer: 1,
    explanation: "La contraposée de P ⇒ Q est ¬Q ⇒ ¬P et a la même valeur de vérité."
  },
  {
    id: 4,
    question: "Que signifie le quantificateur ∃ ?",
    options: ["Pour tout", "Il existe", "Il n'existe pas", "Aucun"],
    correctAnswer: 1,
    explanation: "∃ signifie 'il existe au moins un'."
  },
  {
    id: 5,
    question: "Quel type de raisonnement utilise-t-on pour prouver qu'une proposition est fausse ?",
    options: ["Raisonnement par récurrence", "Raisonnement par l'absurde", "Raisonnement direct", "Raisonnement par disjonction de cas"],
    correctAnswer: 1,
    explanation: "Le raisonnement par l'absurde consiste à supposer que la proposition est vraie et à aboutir à une contradiction."
  }
];

// Chapitre 2: Ensembles et applications
export const chapitre2QuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Qu'est-ce qu'un ensemble ?",
    options: ["Une liste ordonnée d'éléments", "Une collection d'objets distincts", "Une fonction", "Une relation binaire"],
    correctAnswer: 1,
    explanation: "Un ensemble est une collection d'objets distincts appelés éléments."
  },
  {
    id: 2,
    question: "Que signifie A ⊂ B ?",
    options: ["A et B sont égaux", "A est inclus dans B", "B est inclus dans A", "A et B sont disjoints"],
    correctAnswer: 1,
    explanation: "A ⊂ B signifie que A est inclus dans B (tous les éléments de A sont dans B)."
  },
  {
    id: 3,
    question: "Qu'est-ce qu'une application injective ?",
    options: ["Une application surjective", "Une application qui associe un seul élément", "Une application qui associe des éléments différents à des éléments différents", "Une application bijective"],
    correctAnswer: 2,
    explanation: "Une application injective associe des éléments différents de l'ensemble de départ à des éléments différents de l'ensemble d'arrivée."
  },
  {
    id: 4,
    question: "Que vaut A ∩ (B ∪ C) ?",
    options: ["(A ∩ B) ∪ (A ∩ C)", "(A ∪ B) ∩ (A ∪ C)", "A ∪ (B ∩ C)", "A ∩ B ∩ C"],
    correctAnswer: 0,
    explanation: "C'est la distributivité de l'intersection sur la réunion : A ∩ (B ∪ C) = (A ∩ B) ∪ (A ∩ C)."
  },
  {
    id: 5,
    question: "Qu'est-ce qu'une bijection ?",
    options: ["Une application injective", "Une application surjective", "Une application injective et surjective", "Une application quelconque"],
    correctAnswer: 2,
    explanation: "Une bijection est une application qui est à la fois injective et surjective."
  }
];

// Chapitre 3: Sommes, produits & coefficients binomiaux
export const chapitre3QuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Que vaut la somme des n premiers entiers naturels ?",
    options: ["n²", "n(n+1)/2", "n(n-1)/2", "n²/2"],
    correctAnswer: 1,
    explanation: "La somme des n premiers entiers naturels vaut n(n+1)/2."
  },
  {
    id: 2,
    question: "Que vaut le coefficient binomial C(n,k) ?",
    options: ["n!/k!", "n!/(k!(n-k)!)", "k!/(n!(n-k)!)", "n!/k!(n-k)!"],
    correctAnswer: 1,
    explanation: "C(n,k) = n!/(k!(n-k)!) = n!/(k!(n-k)!)."
  },
  {
    id: 3,
    question: "Quelle est la formule du binôme de Newton ?",
    options: ["(a+b)ⁿ = Σ C(n,k) aᵏbⁿ⁻ᵏ", "(a+b)ⁿ = Σ C(n,k) aⁿ⁻ᵏbᵏ", "(a+b)ⁿ = Σ aᵏbⁿ⁻ᵏ", "(a+b)ⁿ = Σ C(n,k) aᵏbᵏ"],
    correctAnswer: 0,
    explanation: "(a+b)ⁿ = Σ C(n,k) aᵏbⁿ⁻ᵏ pour k allant de 0 à n."
  },
  {
    id: 4,
    question: "Que vaut C(n,0) ?",
    options: ["0", "1", "n", "n!"],
    correctAnswer: 1,
    explanation: "C(n,0) = n!/(0!(n-0)!) = n!/(1 × n!) = 1."
  },
  {
    id: 5,
    question: "Que vaut C(n,n) ?",
    options: ["0", "1", "n", "n!"],
    correctAnswer: 1,
    explanation: "C(n,n) = n!/(n!(n-n)!) = n!/(n! × 1) = 1."
  }
];

// Chapitre 4: Suites numériques
export const chapitre4QuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Qu'est-ce qu'une suite arithmétique ?",
    options: ["Une suite où chaque terme est le carré du précédent", "Une suite où la différence entre deux termes consécutifs est constante", "Une suite où le rapport entre deux termes consécutifs est constant", "Une suite qui converge vers 0"],
    correctAnswer: 1,
    explanation: "Une suite arithmétique est une suite où la différence entre deux termes consécutifs est constante."
  },
  {
    id: 2,
    question: "Qu'est-ce qu'une suite géométrique ?",
    options: ["Une suite où chaque terme est la somme du précédent", "Une suite où la différence entre deux termes consécutifs est constante", "Une suite où le rapport entre deux termes consécutifs est constant", "Une suite qui diverge"],
    correctAnswer: 2,
    explanation: "Une suite géométrique est une suite où le rapport entre deux termes consécutifs est constant."
  },
  {
    id: 3,
    question: "Quand dit-on qu'une suite converge vers L ?",
    options: ["Quand tous ses termes sont égaux à L", "Quand elle est bornée", "Quand pour tout ε > 0, il existe N tel que pour tout n ≥ N, |uₙ - L| < ε", "Quand elle est monotone"],
    correctAnswer: 2,
    explanation: "Une suite converge vers L si pour tout ε > 0, il existe N tel que pour tout n ≥ N, |uₙ - L| < ε."
  },
  {
    id: 4,
    question: "Qu'est-ce qu'une suite majorée ?",
    options: ["Une suite qui converge", "Une suite qui a une limite finie", "Une suite dont tous les termes sont inférieurs à un nombre M", "Une suite monotone"],
    correctAnswer: 2,
    explanation: "Une suite est majorée s'il existe un nombre M tel que pour tout n, uₙ ≤ M."
  },
  {
    id: 5,
    question: "Que vaut la somme des n premiers termes d'une suite géométrique de raison q ≠ 1 ?",
    options: ["n × u₁", "u₁(1-qⁿ)/(1-q)", "u₁(1+qⁿ)/(1+q)", "u₁ × qⁿ"],
    correctAnswer: 1,
    explanation: "La somme des n premiers termes d'une suite géométrique vaut u₁(1-qⁿ)/(1-q) si q ≠ 1."
  }
];

// Chapitre 5: Fonctions d'une variable réelle
export const chapitre5QuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Qu'est-ce qu'une fonction paire ?",
    options: ["Une fonction qui est toujours positive", "Une fonction qui vérifie f(-x) = f(x)", "Une fonction qui vérifie f(-x) = -f(x)", "Une fonction qui est symétrique par rapport à l'axe des y"],
    correctAnswer: 1,
    explanation: "Une fonction paire vérifie f(-x) = f(x) pour tout x de son domaine de définition."
  },
  {
    id: 2,
    question: "Qu'est-ce qu'une fonction impaire ?",
    options: ["Une fonction qui est toujours négative", "Une fonction qui vérifie f(-x) = f(x)", "Une fonction qui vérifie f(-x) = -f(x)", "Une fonction qui passe par l'origine"],
    correctAnswer: 2,
    explanation: "Une fonction impaire vérifie f(-x) = -f(x) pour tout x de son domaine de définition."
  },
  {
    id: 3,
    question: "Qu'est-ce qu'une fonction périodique de période T ?",
    options: ["Une fonction qui se répète tous les T unités", "Une fonction qui vérifie f(x+T) = f(x)", "Une fonction qui a une limite en +∞", "Une fonction qui est bornée"],
    correctAnswer: 1,
    explanation: "Une fonction périodique de période T vérifie f(x+T) = f(x) pour tout x de son domaine de définition."
  },
  {
    id: 4,
    question: "Qu'est-ce qu'une fonction continue en un point a ?",
    options: ["Une fonction qui est dérivable en a", "Une fonction qui a une limite en a", "Une fonction qui vérifie lim(x→a) f(x) = f(a)", "Une fonction qui est bornée au voisinage de a"],
    correctAnswer: 2,
    explanation: "Une fonction est continue en a si lim(x→a) f(x) = f(a)."
  },
  {
    id: 5,
    question: "Qu'est-ce qu'une fonction bijective ?",
    options: ["Une fonction injective", "Une fonction surjective", "Une fonction injective et surjective", "Une fonction continue"],
    correctAnswer: 2,
    explanation: "Une fonction bijective est une fonction qui est à la fois injective et surjective."
  }
];

// Chapitre 6: Dérivation
export const chapitre6QuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Qu'est-ce que la dérivée d'une fonction f en un point a ?",
    options: ["La valeur de f en a", "La limite de (f(x)-f(a))/(x-a) quand x tend vers a", "La pente de la tangente en a", "La valeur de f'(a)"],
    correctAnswer: 1,
    explanation: "La dérivée de f en a est la limite de (f(x)-f(a))/(x-a) quand x tend vers a."
  },
  {
    id: 2,
    question: "Que vaut la dérivée de xⁿ ?",
    options: ["nxⁿ⁻¹", "nxⁿ", "xⁿ⁻¹", "n²xⁿ⁻¹"],
    correctAnswer: 0,
    explanation: "La dérivée de xⁿ est nxⁿ⁻¹."
  },
  {
    id: 3,
    question: "Que vaut la dérivée de sin(x) ?",
    options: ["cos(x)", "-cos(x)", "sin(x)", "-sin(x)"],
    correctAnswer: 0,
    explanation: "La dérivée de sin(x) est cos(x)."
  },
  {
    id: 4,
    question: "Que vaut la dérivée de eˣ ?",
    options: ["eˣ", "xeˣ", "eˣ/x", "ln(x)"],
    correctAnswer: 0,
    explanation: "La dérivée de eˣ est eˣ."
  },
  {
    id: 5,
    question: "Qu'est-ce qu'un point critique d'une fonction ?",
    options: ["Un point où la fonction s'annule", "Un point où la dérivée s'annule", "Un point où la fonction a un extremum", "Un point où la fonction n'est pas dérivable"],
    correctAnswer: 1,
    explanation: "Un point critique est un point où la dérivée s'annule ou n'existe pas."
  }
];

// Chapitre 7: Intégration sur un segment
export const chapitre7QuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Qu'est-ce qu'une primitive d'une fonction f ?",
    options: ["Une fonction F telle que F' = f", "Une fonction F telle que F = f'", "Une fonction F telle que F'' = f", "Une fonction F telle que F = ∫f"],
    correctAnswer: 0,
    explanation: "Une primitive de f est une fonction F telle que F' = f."
  },
  {
    id: 2,
    question: "Que vaut l'intégrale de xⁿ dx ?",
    options: ["xⁿ⁺¹/(n+1) + C", "xⁿ⁺¹/n + C", "nxⁿ⁻¹ + C", "xⁿ + C"],
    correctAnswer: 0,
    explanation: "L'intégrale de xⁿ dx est xⁿ⁺¹/(n+1) + C (pour n ≠ -1)."
  },
  {
    id: 3,
    question: "Que vaut l'intégrale de 1/x dx ?",
    options: ["ln(x) + C", "1/x² + C", "x + C", "ln|x| + C"],
    correctAnswer: 3,
    explanation: "L'intégrale de 1/x dx est ln|x| + C."
  },
  {
    id: 4,
    question: "Qu'est-ce que la formule d'intégration par parties ?",
    options: ["∫u dv = uv - ∫v du", "∫u dv = uv + ∫v du", "∫u dv = u'v - ∫v' du", "∫u dv = u'v + ∫v' du"],
    correctAnswer: 0,
    explanation: "La formule d'intégration par parties est ∫u dv = uv - ∫v du."
  },
  {
    id: 5,
    question: "Que vaut l'intégrale de cos(x) dx ?",
    options: ["sin(x) + C", "-sin(x) + C", "cos(x) + C", "-cos(x) + C"],
    correctAnswer: 0,
    explanation: "L'intégrale de cos(x) dx est sin(x) + C."
  }
];

// Chapitre 8: Polynômes
export const chapitre8QuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Qu'est-ce qu'un polynôme de degré n ?",
    options: ["Un polynôme avec n termes", "Un polynôme dont le terme de plus haut degré est de degré n", "Un polynôme avec n coefficients", "Un polynôme de n variables"],
    correctAnswer: 1,
    explanation: "Un polynôme de degré n est un polynôme dont le terme de plus haut degré est de degré n."
  },
  {
    id: 2,
    question: "Que vaut le degré du produit de deux polynômes de degrés n et m ?",
    options: ["n + m", "n × m", "max(n,m)", "min(n,m)"],
    correctAnswer: 0,
    explanation: "Le degré du produit de deux polynômes est la somme de leurs degrés."
  },
  {
    id: 3,
    question: "Qu'est-ce qu'une racine d'un polynôme P ?",
    options: ["Un coefficient de P", "Une valeur a telle que P(a) = 0", "Le degré de P", "Le terme constant de P"],
    correctAnswer: 1,
    explanation: "Une racine d'un polynôme P est une valeur a telle que P(a) = 0."
  },
  {
    id: 4,
    question: "Qu'est-ce que le théorème de factorisation ?",
    options: ["Tout polynôme peut être factorisé", "Si a est racine de P, alors P = (X-a)Q", "Tout polynôme a au moins une racine", "Tout polynôme est divisible par X-1"],
    correctAnswer: 1,
    explanation: "Si a est racine de P, alors P est divisible par (X-a), c'est-à-dire P = (X-a)Q."
  },
  {
    id: 5,
    question: "Que vaut le nombre de racines d'un polynôme de degré n ?",
    options: ["Exactement n", "Au plus n", "Au moins n", "Toujours n"],
    correctAnswer: 1,
    explanation: "Un polynôme de degré n a au plus n racines (comptées avec leur multiplicité)."
  }
];

// Chapitre 9: Matrices & espaces vectoriels
export const chapitre9QuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Qu'est-ce qu'une matrice carrée ?",
    options: ["Une matrice avec autant de lignes que de colonnes", "Une matrice avec plus de lignes que de colonnes", "Une matrice avec plus de colonnes que de lignes", "Une matrice avec des éléments carrés"],
    correctAnswer: 0,
    explanation: "Une matrice carrée est une matrice qui a autant de lignes que de colonnes."
  },
  {
    id: 2,
    question: "Que vaut le produit de deux matrices A(m×n) et B(n×p) ?",
    options: ["Une matrice de taille m×p", "Une matrice de taille n×n", "Une matrice de taille m×m", "Une matrice de taille p×m"],
    correctAnswer: 0,
    explanation: "Le produit de A(m×n) et B(n×p) donne une matrice de taille m×p."
  },
  {
    id: 3,
    question: "Qu'est-ce qu'un espace vectoriel ?",
    options: ["Un ensemble de vecteurs", "Un ensemble muni d'une addition et d'une multiplication par un scalaire", "Un ensemble de matrices", "Un ensemble de fonctions"],
    correctAnswer: 1,
    explanation: "Un espace vectoriel est un ensemble muni d'une addition et d'une multiplication par un scalaire vérifiant certaines propriétés."
  },
  {
    id: 4,
    question: "Qu'est-ce qu'une base d'un espace vectoriel ?",
    options: ["Un ensemble de vecteurs", "Un ensemble libre et générateur", "Un ensemble de vecteurs non nuls", "Un ensemble de vecteurs orthogonaux"],
    correctAnswer: 1,
    explanation: "Une base est un ensemble libre et générateur de l'espace vectoriel."
  },
  {
    id: 5,
    question: "Que vaut la dimension d'un espace vectoriel ?",
    options: ["Le nombre de vecteurs dans l'espace", "Le nombre de vecteurs dans une base", "Le nombre de coordonnées", "Le nombre de lignes d'une matrice"],
    correctAnswer: 1,
    explanation: "La dimension d'un espace vectoriel est le nombre de vecteurs dans une base (toutes les bases ont le même cardinal)."
  }
];

// Chapitre 10: Probabilités & conditionnement
export const chapitre10QuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Qu'est-ce qu'un événement ?",
    options: ["Un nombre réel", "Un sous-ensemble de l'univers", "Une fonction", "Une variable"],
    correctAnswer: 1,
    explanation: "Un événement est un sous-ensemble de l'univers des possibles."
  },
  {
    id: 2,
    question: "Que vaut P(A ∪ B) si A et B sont incompatibles ?",
    options: ["P(A) + P(B)", "P(A) × P(B)", "P(A) - P(B)", "P(A)/P(B)"],
    correctAnswer: 0,
    explanation: "Si A et B sont incompatibles, P(A ∪ B) = P(A) + P(B)."
  },
  {
    id: 3,
    question: "Qu'est-ce qu'une probabilité conditionnelle P(A|B) ?",
    options: ["P(A ∩ B)", "P(A ∩ B)/P(B)", "P(A)/P(B)", "P(A ∪ B)/P(B)"],
    correctAnswer: 1,
    explanation: "P(A|B) = P(A ∩ B)/P(B) si P(B) ≠ 0."
  },
  {
    id: 4,
    question: "Qu'est-ce que l'indépendance de deux événements A et B ?",
    options: ["P(A ∩ B) = 0", "P(A ∩ B) = P(A) × P(B)", "P(A|B) = P(A)", "P(A ∪ B) = P(A) + P(B)"],
    correctAnswer: 1,
    explanation: "A et B sont indépendants si P(A ∩ B) = P(A) × P(B)."
  },
  {
    id: 5,
    question: "Que vaut P(A̅) ?",
    options: ["1 - P(A)", "P(A)", "0", "1"],
    correctAnswer: 0,
    explanation: "P(A̅) = 1 - P(A) où A̅ est le complémentaire de A."
  }
];

// Chapitre 12: Comparaison — négligeabilité & équivalence
export const chapitre12QuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Que signifie f(x) = o(g(x)) lorsque x → a ?",
    options: [
      "f est bornée",
      "f(x)/g(x) → 0",
      "g(x)/f(x) → 0",
      "f(x) − g(x) → 0"
    ],
    correctAnswer: 1,
    explanation: "Par définition, f = o(g) si f(x)/g(x) tend vers 0 quand x tend vers a."
  },
  {
    id: 2,
    question: "Que signifie f(x) ~ g(x) lorsque x → a ?",
    options: [
      "f(x)/g(x) → 1",
      "f(x) − g(x) → 0",
      "f(x) = o(g(x))",
      "g(x) = o(f(x))"
    ],
    correctAnswer: 0,
    explanation: "L'équivalence f ~ g signifie que f(x)/g(x) tend vers 1."
  },
  {
    id: 3,
    question: "Laquelle est vraie si f(x) ~ g(x) et g(x) ~ h(x) ?",
    options: [
      "f(x) ~ h(x)",
      "f(x) = o(h(x))",
      "h(x) = o(f(x))",
      "aucune des réponses"
    ],
    correctAnswer: 0,
    explanation: "L'équivalence est transitive: si f~g et g~h alors f~h."
  },
  {
    id: 4,
    question: "Pour x → +∞, quelle relation est correcte ?",
    options: [
      "ln x = o(x)",
      "x = o(ln x)",
      "e^x = o(x^2)",
      "x^2 = o(e^x)"
    ],
    correctAnswer: 0,
    explanation: "On a ln x = o(x) (croissance plus lente du logarithme)."
  },
  {
    id: 5,
    question: "Si f = o(g) et g ~ h, alors ?",
    options: [
      "f ~ h",
      "f = o(h)",
      "h = o(f)",
      "aucune des réponses"
    ],
    correctAnswer: 1,
    explanation: "Si g et h sont équivalentes, remplacer g par h conserve la négligeabilité: f = o(h)."
  }
];

// Chapitre 46: Variables aléatoires à densité
export const chapitre46QuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Une variable aléatoire X est dite à densité lorsque :",
    options: [
      "Sa fonction de répartition est continue sur ℝ",
      "Sa fonction de répartition est dérivable partout",
      "Sa fonction de répartition est continue sur ℝ et admet une dérivée continue sauf en un nombre fini de points",
      "Elle prend un nombre fini de valeurs"
    ],
    correctAnswer: 2,
    explanation: "Une variable aléatoire X est à densité si sa fonction de répartition F_X est continue sur ℝ et admet, sauf peut-être en un nombre fini de points, une dérivée continue.",
    latex: "F_X(x) = \\int_{-\\infty}^{x} f_X(t) \\, dt"
  },
  {
    id: 2,
    question: "Pour qu'une fonction g soit une densité de probabilité, elle doit vérifier :",
    options: [
      "g ≥ 0 seulement",
      "∫g(t)dt = 1 seulement", 
      "g ≥ 0 et ∫g(t)dt = 1",
      "g ≥ 0, ∫g(t)dt = 1 et g continue partout"
    ],
    correctAnswer: 2,
    explanation: "Une fonction g est une densité si et seulement si : g ≥ 0 sur ℝ, l'intégrale de g sur ℝ vaut 1, et g n'a qu'un nombre fini de discontinuités.",
    latex: "\\int_{-\\infty}^{+\\infty} g(t) \\, dt = 1"
  },
  {
    id: 3,
    question: "Pour une variable aléatoire continue X, P(X = x) vaut :",
    options: ["1", "0", "$f_X(x)$", "$F_X(x)$"],
    correctAnswer: 1,
    explanation: "Pour une variable aléatoire continue, la probabilité qu'elle prenne exactement une valeur donnée est toujours nulle.",
    latex: "\\mathbb{P}(X = x) = 0 \\quad \\forall x \\in \\mathbb{R}"
  },
  {
    id: 4,
    question: "L'espérance d'une variable aléatoire à densité X est donnée par :",
    options: [
      "$\\mathbb{E}(X) = \\int f_X(t) \\, dt$",
      "$\\mathbb{E}(X) = \\int t \\, f_X(t) \\, dt$", 
      "$\\mathbb{E}(X) = \\int t^2 \\, f_X(t) \\, dt$",
      "$\\mathbb{E}(X) = \\int F_X(t) \\, dt$"
    ],
    correctAnswer: 1,
    explanation: "L'espérance d'une variable aléatoire à densité est l'intégrale de t multiplié par la densité.",
    latex: "\\mathbb{E}(X) = \\int_{-\\infty}^{+\\infty} t \\, f_X(t) \\, dt"
  },
  {
    id: 5,
    question: "La formule de Koenig-Huygens s'écrit :",
    options: [
      "$\\operatorname{Var}(X) = \\mathbb{E}(X^2) + (\\mathbb{E}(X))^2$",
      "$\\operatorname{Var}(X) = \\mathbb{E}(X^2) - (\\mathbb{E}(X))^2$",
      "$\\operatorname{Var}(X) = (\\mathbb{E}(X))^2 - \\mathbb{E}(X^2)$", 
      "$\\operatorname{Var}(X) = \\mathbb{E}(X^2)$"
    ],
    correctAnswer: 1,
    explanation: "La formule de Koenig-Huygens exprime la variance comme la différence entre le moment d'ordre 2 et le carré de l'espérance.",
    latex: "\\operatorname{Var}(X) = \\mathbb{E}(X^2) - (\\mathbb{E}(X))^2"
  },
  {
    id: 6,
    question: "Pour la loi uniforme sur [a,b], l'espérance vaut :",
    options: ["$\\frac{a+b}{2}$", "$b-a$", "$\\frac{b-a}{2}$", "$a+b$"],
    correctAnswer: 0,
    explanation: "Pour une loi uniforme sur [a,b], l'espérance est le milieu de l'intervalle.",
    latex: "X \\sim \\mathcal{U}([a,b]) \\Rightarrow \\mathbb{E}(X) = \\frac{a+b}{2}"
  },
  {
    id: 7,
    question: "La densité de la loi exponentielle E(λ) pour t ≥ 0 est :",
    options: [
      "$\\lambda e^{-\\lambda t}$",
      "$e^{-\\lambda t}$",
      "$\\lambda e^{\\lambda t}$",
      "$\\lambda^2 e^{-\\lambda t}$"
    ],
    correctAnswer: 0,
    explanation: "La densité de la loi exponentielle de paramètre λ est λe^(-λt) pour t ≥ 0.",
    latex: "f(t) = \\lambda e^{-\\lambda t} \\quad \\text{pour } t \\geq 0"
  },
  {
    id: 8,
    question: "La propriété sans mémoire de la loi exponentielle s'écrit :",
    options: [
      "$\\mathbb{P}(X > t+h \\mid X > h) = \\mathbb{P}(X > h)$",
      "$\\mathbb{P}(X > t+h \\mid X > h) = \\mathbb{P}(X > t)$",
      "$\\mathbb{P}(X > t+h \\mid X > h) = \\mathbb{P}(X > t+h)$",
      "$\\mathbb{P}(X > t+h \\mid X > h) = 0$"
    ],
    correctAnswer: 1,
    explanation: "La propriété sans mémoire signifie que la probabilité de survie après un temps h ne dépend pas du temps déjà écoulé.",
    latex: "\\mathbb{P}(X > t+h \\mid X > h) = \\mathbb{P}(X > t)"
  },
  {
    id: 9,
    question: "Pour la loi normale N(m,σ²), la variable centrée réduite est :",
    options: [
      "$\\frac{X-m}{\\sigma^2}$",
      "$\\frac{X-m}{\\sigma}$", 
      "$\\frac{X}{\\sigma}$",
      "$\\frac{X-\\sigma}{m}$"
    ],
    correctAnswer: 1,
    explanation: "La variable centrée réduite associée à X~N(m,σ²) est (X-m)/σ qui suit une loi N(0,1).",
    latex: "X \\sim \\mathcal{N}(m,\\sigma^2) \\Rightarrow Z = \\frac{X-m}{\\sigma} \\sim \\mathcal{N}(0,1)"
  },
  {
    id: 10,
    question: "Pour la loi gamma γ(k), on a :",
    options: [
      "$\\mathbb{E}(X) = k \\text{ et } \\operatorname{Var}(X) = k^2$",
      "$\\mathbb{E}(X) = k^2 \\text{ et } \\operatorname{Var}(X) = k$",
      "$\\mathbb{E}(X) = k \\text{ et } \\operatorname{Var}(X) = k$",
      "$\\mathbb{E}(X) = \\frac{1}{k} \\text{ et } \\operatorname{Var}(X) = \\frac{1}{k^2}$"
    ],
    correctAnswer: 2,
    explanation: "Pour la loi gamma γ(k), l'espérance et la variance sont toutes deux égales au paramètre k.",
    latex: "X \\sim \\gamma(k) \\Rightarrow \\mathbb{E}(X) = k \\text{ et } \\operatorname{Var}(X) = k"
  },
  {
    id: 11,
    question: "La densité de la loi normale centrée réduite N(0,1) est :",
    options: [
      "$\\varphi(t) = e^{-t^2/2}$",
      "$\\varphi(t) = \\frac{1}{\\sqrt{2\\pi}} e^{-t^2/2}$",
      "$\\varphi(t) = \\frac{1}{\\sqrt{\\pi}} e^{-t^2}$",
      "$\\varphi(t) = \\frac{1}{2\\pi} e^{-t^2/2}$"
    ],
    correctAnswer: 1,
    explanation: "La densité de la loi normale centrée réduite inclut le facteur de normalisation 1/√(2π).",
    latex: "\\varphi(t) = \\frac{1}{\\sqrt{2\\pi}} e^{-t^2/2}"
  },
  {
    id: 12,
    question: "Pour une transformation affine Y = aX + b avec a ≠ 0, on a :",
    options: [
      "$\\mathbb{E}(Y) = \\mathbb{E}(X) + b \\text{ et } \\operatorname{Var}(Y) = \\operatorname{Var}(X)$",
      "$\\mathbb{E}(Y) = a\\mathbb{E}(X) + b \\text{ et } \\operatorname{Var}(Y) = a^2\\operatorname{Var}(X)$",
      "$\\mathbb{E}(Y) = a\\mathbb{E}(X) \\text{ et } \\operatorname{Var}(Y) = a\\operatorname{Var}(X)$",
      "$\\mathbb{E}(Y) = \\mathbb{E}(X) \\text{ et } \\operatorname{Var}(Y) = a^2\\operatorname{Var}(X) + b^2$"
    ],
    correctAnswer: 1,
    explanation: "Pour une transformation affine, l'espérance se transforme linéairement et la variance par le carré du coefficient.",
    latex: "Y = aX + b \\Rightarrow \\mathbb{E}(Y) = a\\mathbb{E}(X) + b \\text{ et } \\operatorname{Var}(Y) = a^2\\operatorname{Var}(X)"
  },
  {
    id: 13,
    question: "Le théorème de transfert pour une variable continue s'écrit :",
    options: [
      "$\\mathbb{E}(g(X)) = \\int g(t) \\, dt$",
      "$\\mathbb{E}(g(X)) = \\int g(t) f_X(t) \\, dt$",
      "$\\mathbb{E}(g(X)) = \\int g(F_X(t)) \\, dt$", 
      "$\\mathbb{E}(g(X)) = g(\\mathbb{E}(X))$"
    ],
    correctAnswer: 1,
    explanation: "Le théorème de transfert permet de calculer l'espérance de g(X) sans connaître la loi de g(X).",
    latex: "\\mathbb{E}(g(X)) = \\int_{I} g(t) f_X(t) \\, dt \\quad \\text{où } I = \\operatorname{Supp}(X)"
  },
  {
    id: 14,
    question: "Pour la loi uniforme sur [0,1], la variance vaut :",
    options: ["$\\frac{1}{12}$", "$\\frac{1}{6}$", "$\\frac{1}{4}$", "$\\frac{1}{3}$"],
    correctAnswer: 0,
    explanation: "Pour une loi uniforme sur [0,1], la variance est (1-0)²/12 = 1/12.",
    latex: "X \\sim \\mathcal{U}([0,1]) \\Rightarrow \\operatorname{Var}(X) = \\frac{1}{12}"
  },
  {
    id: 15,
    question: "Une variable X est centrée réduite si :",
    options: [
      "$\\mathbb{E}(X) = 0$ seulement",
      "$\\operatorname{Var}(X) = 1$ seulement",
      "$\\mathbb{E}(X) = 0 \\text{ et } \\operatorname{Var}(X) = 1$",
      "$\\mathbb{E}(X) = 1 \\text{ et } \\operatorname{Var}(X) = 0$"
    ],
    correctAnswer: 2,
    explanation: "Une variable est centrée réduite si son espérance est nulle et sa variance égale à 1.",
    latex: "X \\text{ centrée réduite} \\Leftrightarrow \\mathbb{E}(X) = 0 \\text{ et } \\operatorname{Var}(X) = 1"
  }
];

// Chapitre 11: Optimisation multivariée avancée
export const chapitre11QuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Quelle est la condition nécessaire pour qu'un point critique soit un minimum local pour une fonction de classe C² ?",
    options: [
      "Le gradient s'annule seulement",
      "La Hessienne est définie positive",
      "La Hessienne est définie négative",
      "Le déterminant de la Hessienne est positif"
    ],
    correctAnswer: 1,
    explanation: "Pour qu'un point critique soit un minimum local, la Hessienne doit être définie positive en ce point."
  },
  {
    id: 2,
    question: "Le théorème de Schwarz affirme que :",
    options: [
      "Les dérivées partielles d'ordre 2 sont continues",
      "Les dérivées partielles croisées sont égales pour les fonctions de classe C²",
      "Le gradient s'annule aux points critiques",
      "La Hessienne est symétrique"
    ],
    correctAnswer: 1,
    explanation: "Le théorème de Schwarz stipule que pour f de classe C², ∂²f/∂i∂j = ∂²f/∂j∂i."
  },
  {
    id: 3,
    question: "Quelle est la forme du développement limité d'ordre 2 de f autour de a ?",
    options: [
      "f(a+h) = f(a) + ⟨∇f(a),h⟩ + (1/2)q_a(h) + o(||h||²)",
      "f(a+h) = f(a) + ⟨∇f(a),h⟩ + q_a(h)",
      "f(a+h) = f(a) + (1/2)⟨∇²f(a)h,h⟩",
      "f(a+h) = f(a) + ∇f(a) · h"
    ],
    correctAnswer: 0,
    explanation: "Le développement limité d'ordre 2 inclut le terme quadratique (1/2)q_a(h) où q_a est la forme quadratique associée à la Hessienne."
  },
  {
    id: 4,
    question: "Dans la méthode des multiplicateurs de Lagrange, que représente le multiplicateur λ ?",
    options: [
      "Le gradient de la fonction objectif",
      "Le taux marginal de substitution",
      "La valeur de la fonction objectif",
      "Le déterminant de la matrice Hessienne"
    ],
    correctAnswer: 1,
    explanation: "Le multiplicateur de Lagrange λ représente le taux marginal de substitution entre la fonction objectif et la contrainte."
  },
  {
    id: 5,
    question: "Pour qu'un point critique soit un point-selle, il faut que :",
    options: [
      "La Hessienne soit définie positive",
      "La Hessienne soit définie négative",
      "La Hessienne ait des valeurs propres de signes différents",
      "La Hessienne soit nulle"
    ],
    correctAnswer: 2,
    explanation: "Un point-selle correspond à une Hessienne indéfinie, c'est-à-dire ayant des valeurs propres de signes opposés."
  },
  {
    id: 6,
    question: "Quelle condition est nécessaire mais pas suffisante pour qu'un point soit un extrémum local ?",
    options: [
      "∇f(a) = 0 seulement",
      "H_f(a) définie positive seulement",
      "∇f(a) = 0 et H_f(a) définie positive",
      "f de classe C² seulement"
    ],
    correctAnswer: 0,
    explanation: "La condition ∇f(a) = 0 est nécessaire pour qu'un point soit un extrémum local, mais pas suffisante (il pourrait être un point-selle)."
  },
  {
    id: 7,
    question: "La matrice Hessienne d'une fonction f : ℝ² → ℝ est :",
    options: [
      "Le gradient de f",
      "La matrice des dérivées partielles d'ordre 2",
      "Le jacobien de f",
      "La matrice des dérivées partielles d'ordre 1"
    ],
    correctAnswer: 1,
    explanation: "La matrice Hessienne contient toutes les dérivées partielles d'ordre 2 de f."
  },
  {
    id: 8,
    question: "Pour une fonction convexe de classe C², quelle propriété a sa Hessienne ?",
    options: [
      "Elle est définie négative",
      "Elle est semi-définie positive",
      "Elle est indéfinie",
      "Elle est antisymétrique"
    ],
    correctAnswer: 1,
    explanation: "Pour une fonction convexe de classe C², la Hessienne est semi-définie positive en tout point."
  },
  {
    id: 9,
    question: "Dans les conditions KKT pour l'optimisation sous contraintes d'inégalité, que signifie μᵢ ≥ 0 ?",
    options: [
      "Les contraintes sont actives",
      "Les multiplicateurs sont positifs ou nuls",
      "Le gradient s'annule",
      "La fonction objectif atteint son minimum"
    ],
    correctAnswer: 1,
    explanation: "Dans les conditions KKT, les multiplicateurs associés aux contraintes d'inégalité doivent être positifs ou nuls."
  },
  {
    id: 10,
    question: "Quelle est la dimension de la matrice Hessienne d'une fonction f : ℝⁿ → ℝ ?",
    options: [
      "n × 1",
      "1 × n",
      "n × n",
      "2n × 2n"
    ],
    correctAnswer: 2,
    explanation: "La matrice Hessienne d'une fonction de ℝⁿ dans ℝ est de dimension n × n."
  }
];

// Export de toutes les questions par chapitre
export const mathQuizQuestions = {
  chapitre1: chapitre1QuizQuestions,
  chapitre2: chapitre2QuizQuestions,
  chapitre3: chapitre3QuizQuestions,
  chapitre4: chapitre4QuizQuestions,
  chapitre5: chapitre5QuizQuestions,
  chapitre6: chapitre6QuizQuestions,
  chapitre7: chapitre7QuizQuestions,
  chapitre8: chapitre8QuizQuestions,
  chapitre9: chapitre9QuizQuestions,
  chapitre10: chapitre10QuizQuestions,
  chapitre11: chapitre11QuizQuestions,
  chapitre12: chapitre12QuizQuestions,
  chapitre46: chapitre46QuizQuestions,
}; 