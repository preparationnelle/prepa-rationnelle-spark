import type { MathQuizQuestion } from '@/components/quiz/MathQuiz';

// Chapitre 1: Éléments de logique
export const chapitre1QuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Quelle est la négation de la proposition 'P' ?",
    options: ["P", "¬P", "P ∧ Q", "P ∨ Q"],
    correctAnswer: 1,
    explanation: "La négation de P se note $\\neg P$ (ou $\\sim P$) et est vraie quand P est fausse."
  },
  {
    id: 2,
    question: "Si P est vraie et Q est fausse, que vaut P ∧ Q ?",
    options: ["Vraie", "Fausse", "Indéterminée", "Aucune de ces réponses"],
    correctAnswer: 1,
    explanation: "P $\\land$ Q est vraie seulement si P ET Q sont vraies toutes les deux."
  },
  {
    id: 3,
    question: "Quelle est la contraposée de P $\\Rightarrow$ Q ?",
    options: ["Q ⇒ P", "¬Q ⇒ ¬P", "¬P ⇒ ¬Q", "P ∧ ¬Q"],
    correctAnswer: 1,
    explanation: "La contraposée de P $\\Rightarrow$ Q est $\\neg Q \\Rightarrow \\neg P$ et a la même valeur de vérité."
  },
  {
    id: 4,
    question: "Que signifie le quantificateur $\\exists$ ?",
    options: ["Pour tout", "Il existe", "Il n'existe pas", "Aucun"],
    correctAnswer: 1,
    explanation: "$\\exists$ signifie 'il existe au moins un'."
  },
  {
    id: 5,
    question: "Quel type de raisonnement utilise-t-on pour prouver qu'une proposition est fausse ?",
    options: ["Raisonnement par récurrence", "Raisonnement par l'absurde", "Raisonnement direct", "Raisonnement par disjonction de cas"],
    correctAnswer: 1,
    explanation: "Le raisonnement par l'absurde consiste à supposer que la proposition est vraie et à aboutir à une contradiction."
  },
  {
    id: 6,
    question: "La proposition '$P \\vee \\neg P$' est toujours vraie.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "C'est le principe du tiers exclu : une proposition est soit vraie, soit fausse."
  },
  {
    id: 7,
    question: "Si $P \\Rightarrow Q$ est vraie et $Q \\Rightarrow R$ est vraie, alors $P \\Rightarrow R$ est vraie.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "C'est la transitivité de l'implication : si P implique Q et Q implique R, alors P implique R."
  },
  {
    id: 8,
    question: "La négation de '$\\forall x, P(x)$' est '$\\exists x, \\neg P(x)$'.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "La négation d'un 'pour tout' est un 'il existe' avec la négation de la proposition."
  },
  {
    id: 9,
    question: "La conjonction $P \\wedge Q$ est vraie seulement si P et Q sont toutes deux vraies.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "Par définition, $P \\land Q$ n'est vraie que si les deux propositions le sont."
  },
  {
    id: 10,
    question: "Une implication $P \\Rightarrow Q$ est équivalente à $\\neg P \\vee Q$.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "C'est la définition logique de l'implication : P implique Q équivaut à 'non P ou Q'."
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
    question: "Que signifie A $\\subset$ B ?",
    options: ["A et B sont égaux", "A est inclus dans B", "B est inclus dans A", "A et B sont disjoints"],
    correctAnswer: 1,
    explanation: "A $\\subset$ B signifie que A est inclus dans B (tous les éléments de A sont dans B)."
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
    question: "Que vaut A $\\cap$ (B $\\cup$ C) ?",
    options: ["(A ∩ B) ∪ (A ∩ C)", "(A ∪ B) ∩ (A ∪ C)", "A ∪ (B ∩ C)", "A ∩ B ∩ C"],
    correctAnswer: 0,
    explanation: "C'est la distributivité de l'intersection sur la réunion : A $\\cap$ (B $\\cup$ C) = (A $\\cap$ B) $\\cup$ (A $\\cap$ C)."
  },
  {
    id: 5,
    question: "Qu'est-ce qu'une bijection ?",
    options: ["Une application injective", "Une application surjective", "Une application injective et surjective", "Une application quelconque"],
    correctAnswer: 2,
    explanation: "Une bijection est une application qui est à la fois injective et surjective."
  },
  {
    id: 6,
    question: "L'ensemble vide $\\emptyset$ est un sous-ensemble de tout ensemble.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "Par définition, l'ensemble vide est un sous-ensemble de tout ensemble."
  },
  {
    id: 7,
    question: "Si $A \\subset B$ et $B \\subset A$, alors $A = B$.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "C'est la définition de l'égalité ensembliste : deux ensembles sont égaux si chacun est inclus dans l'autre."
  },
  {
    id: 8,
    question: "Le produit cartésien $A \\times B$ est toujours égal à $B \\times A$.",
    options: ["Vrai", "Faux"],
    correctAnswer: 1,
    explanation: "Le produit cartésien n'est pas commutatif : $A \\times B \\neq B \\times A$ sauf si $A = B$."
  },
  {
    id: 9,
    question: "Une fonction injective peut avoir plusieurs antécédents pour la même image.",
    options: ["Vrai", "Faux"],
    correctAnswer: 1,
    explanation: "Par définition, une fonction injective a au plus un antécédent par image."
  },
  {
    id: 10,
    question: "Si $f: A \\to B$ est surjective, alors $f(A) = B$.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "Une fonction surjective couvre tout l'ensemble d'arrivée : l'image de A est exactement B."
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
  },
  {
    id: 6,
    question: "La formule du binôme $(a+b)^n = \\sum_{k=0}^n C(n,k) a^{n-k} b^k$ est vraie pour tout $n \\in \\mathbb{N}$.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "C'est la formule du binôme de Newton, valable pour tout entier naturel n."
  },
  {
    id: 7,
    question: "Le coefficient binomial C(n,k) est défini pour k > n.",
    options: ["Vrai", "Faux"],
    correctAnswer: 1,
    explanation: "C(n,k) n'est défini que pour 0 ≤ k ≤ n. Pour k > n, il vaut 0 par convention."
  },
  {
    id: 8,
    question: "La somme des coefficients binomiaux $\\sum_{k=0}^n C(n,k) = 2^n$.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "C'est une propriété fondamentale : $(1+1)^n = \\sum C(n,k) 1^{n-k} 1^k = 2^n$."
  },
  {
    id: 9,
    question: "C(n,k) = C(n,n-k) pour tout k.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "Par symétrie : C(n,k) = n!/(k!(n-k)!) = n!/((n-k)!k!) = C(n,n-k)."
  },
  {
    id: 10,
    question: "Le triangle de Pascal permet de calculer les coefficients binomiaux.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "Chaque coefficient est la somme des deux coefficients au-dessus dans le triangle."
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
    question: "Que vaut la somme des $n$ premiers termes d'une suite géométrique de raison $q \\neq 1$ ?",
    options: ["n × u₁", "u₁(1-qⁿ)/(1-q)", "u₁(1+qⁿ)/(1+q)", "u₁ × qⁿ"],
    correctAnswer: 1,
    explanation: "La somme des n premiers termes d'une suite géométrique vaut u₁(1-qⁿ)/(1-q) si q ≠ 1."
  },
  {
    id: 6,
    question: "Une suite arithmético-géométrique est de la forme $u_n = a \\times r^n + b \\times n$.",
    options: ["Vrai", "Faux"],
    correctAnswer: 1,
    explanation: "Une suite arithmético-géométrique est de la forme u_n = a × r^n + b × n × r^n."
  },
  {
    id: 7,
    question: "Toute suite convergente est bornée.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "Une suite convergente tend vers une limite finie et est donc bornée."
  },
  {
    id: 8,
    question: "La suite $(n)_{n\\in\\mathbb{N}}$ tend vers $+\\infty$.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "La suite des entiers naturels diverge vers +∞."
  },
  {
    id: 9,
    question: "Si une suite est croissante et bornée, elle converge.",
    options: ["Vrai", "Faux"],
    correctAnswer: 1,
    explanation: "Une suite croissante et bornée converge, mais une suite décroissante et bornée converge aussi."
  },
  {
    id: 10,
    question: "Le théorème de convergence monotone s'applique aux suites décroissantes.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "Le théorème dit qu'une suite monotone bornée converge."
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
  },
  {
    id: 6,
    question: "Toute fonction continue sur un intervalle fermé borné est bornée.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "Théorème des valeurs intermédiaires : une fonction continue sur un compact atteint ses bornes."
  },
  {
    id: 7,
    question: "Une fonction dérivable est toujours continue.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "Si une fonction est dérivable en un point, elle est continue en ce point."
  },
  {
    id: 8,
    question: "La fonction $f(x) = |x|$ est dérivable en 0.",
    options: ["Vrai", "Faux"],
    correctAnswer: 1,
    explanation: "La fonction valeur absolue n'est pas dérivable en 0 car elle n'est pas localement linéaire."
  },
  {
    id: 9,
    question: "Une fonction strictement croissante est injective.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "Une fonction strictement croissante est injective car elle préserve l'ordre strict."
  },
  {
    id: 10,
    question: "Le graphe d'une fonction paire est symétrique par rapport à l'axe des ordonnées.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "Une fonction paire vérifie f(-x) = f(x), donc son graphe est symétrique par rapport à l'axe Oy."
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
  },
  {
    id: 6,
    question: "La dérivée d'une fonction constante est nulle.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "La dérivée d'une constante est 0."
  },
  {
    id: 7,
    question: "Le théorème de Rolle s'applique à une fonction continue sur [a,b] et dérivable sur ]a,b[.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "Le théorème de Rolle dit que si f(a) = f(b), alors il existe c ∈ ]a,b[ tel que f'(c) = 0."
  },
  {
    id: 8,
    question: "La dérivée de ln(x) est 1/x pour x > 0.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "La dérivée de ln(x) est 1/x sur ℝ₊*."
  },
  {
    id: 9,
    question: "Une fonction dont la dérivée est toujours positive est strictement croissante.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "Si f'(x) > 0 pour tout x, alors f est strictement croissante."
  },
  {
    id: 10,
    question: "La dérivée d'un produit (uv)' = u'v + uv'.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "Formule de dérivation d'un produit : (uv)' = u'v + uv'."
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
  },
  {
    id: 6,
    question: "L'intégrale d'une fonction constante k est kx + C.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "L'intégrale d'une constante k est kx + C."
  },
  {
    id: 7,
    question: "Le théorème fondamental du calcul lie dérivation et intégration.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "Ce théorème dit que la dérivée de l'intégrale est la fonction intégrée."
  },
  {
    id: 8,
    question: "L'intégrale de eˣ dx est eˣ + C.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "L'intégrale de eˣ dx est eˣ + C."
  },
  {
    id: 9,
    question: "L'intégrale définie ∫_a^b f(x) dx est indépendante du choix de la primitive.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "Toutes les primitives diffèrent d'une constante, donc F(b) - F(a) est indépendant de F."
  },
  {
    id: 10,
    question: "Une fonction continue sur [a,b] admet une primitive sur [a,b].",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "Toute fonction continue sur un intervalle admet des primitives."
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
  },
  {
    id: 6,
    question: "Un polynôme non nul a toujours au moins une racine dans ℂ.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "Théorème de d'Alembert-Gauss : tout polynôme non constant a au moins une racine complexe."
  },
  {
    id: 7,
    question: "La somme des coefficients d'un polynôme P donne P(1).",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "Pour P(X) = a₀ + a₁X + ... + aₙXⁿ, P(1) = somme des coefficients."
  },
  {
    id: 8,
    question: "Deux polynômes sont égaux si et seulement s'ils ont les mêmes coefficients.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "Deux polynômes sont égaux s'ils ont les mêmes coefficients pour tous les degrés."
  },
  {
    id: 9,
    question: "Le produit de deux polynômes de degrés m et n a degré m+n.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "Le degré du produit est la somme des degrés (sauf si l'un est constant)."
  },
  {
    id: 10,
    question: "Un polynôme de degré impair a toujours au moins une racine réelle.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "Par continuité, un polynôme impair change de signe entre -∞ et +∞."
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
  },
  {
    id: 6,
    question: "La matrice identité I_n laisse tout vecteur invariant.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "Par définition, I_n × v = v pour tout vecteur v."
  },
  {
    id: 7,
    question: "Deux espaces vectoriels de même dimension sont isomorphes.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "Deux espaces de dimension finie égale sont toujours isomorphes."
  },
  {
    id: 8,
    question: "La somme de deux sous-espaces vectoriels est toujours un sous-espace vectoriel.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "La somme F + G = {f + g | f ∈ F, g ∈ G} est toujours un sous-espace vectoriel."
  },
  {
    id: 9,
    question: "Une matrice carrée n × n est inversible si et seulement si son déterminant est non nul.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "C'est la caractérisation des matrices inversibles : det(A) ≠ 0."
  },
  {
    id: 10,
    question: "Dans un espace vectoriel de dimension n, toute famille de n+1 vecteurs est liée.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "Dans un espace de dimension finie n, toute famille de plus de n vecteurs est liée."
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
    question: "Que vaut $\\mathbb{P}(A \\cup B)$ si A et B sont incompatibles ?",
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
  },
  {
    id: 6,
    question: "La probabilité d'un événement impossible est 0.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "Un événement impossible a probabilité 0."
  },
  {
    id: 7,
    question: "Si A ⊂ B alors P(A) ≤ P(B).",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "La probabilité est croissante : si A ⊂ B alors P(A) ≤ P(B)."
  },
  {
    id: 8,
    question: "Deux événements indépendants ont P(A ∩ B) = P(A) + P(B).",
    options: ["Vrai", "Faux"],
    correctAnswer: 1,
    explanation: "Pour des événements indépendants, P(A ∩ B) = P(A) × P(B), pas P(A) + P(B)."
  },
  {
    id: 9,
    question: "La probabilité conditionnelle P(A|B) est définie seulement si P(B) > 0.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "P(A|B) = P(A ∩ B)/P(B) nécessite P(B) ≠ 0."
  },
  {
    id: 10,
    question: "La formule des probabilités totales utilise une partition de l'univers.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "P(A) = Σ P(A ∩ B_i) où (B_i) est une partition."
  }
];

// Chapitre 12: Comparaison — négligeabilité & équivalence
export const chapitre12QuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Que signifie $f(x) = o(g(x))$ lorsque $x \\to a$ ?",
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
    question: "Que signifie $f(x) \\sim g(x)$ lorsque $x \\to a$ ?",
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
    question: "Pour $x \\to +\\infty$, quelle relation est correcte ?",
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
  },
  {
    id: 6,
    question: "Si f(x) ~ g(x) quand x → a, alors lim f(x)/g(x) = 1.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "L'équivalence f ~ g signifie lim f(x)/g(x) = 1."
  },
  {
    id: 7,
    question: "Si f(x) = o(g(x)), alors f(x)/g(x) → 0.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "La négligeabilité f = o(g) signifie lim f(x)/g(x) = 0."
  },
  {
    id: 8,
    question: "L'équivalence est symétrique et transitive.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "L'équivalence ~ est une relation d'équivalence : réflexive, symétrique, transitive."
  },
  {
    id: 9,
    question: "Si f ~ g et c ∈ ℝ*, alors c×f ~ g.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "Multiplier par une constante non nulle préserve l'équivalence."
  },
  {
    id: 10,
    question: "x² = o(e^x) quand x → +∞.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "L'exponentielle croît beaucoup plus vite que tout polynôme."
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
    question: "La densité de la loi exponentielle $\\mathcal{E}(\\lambda)$ pour $t \\geq 0$ est :",
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
    question: "Pour une transformation affine $Y = aX + b$ avec $a \\neq 0$, on a :",
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
    question: "La matrice Hessienne d'une fonction $f : \\mathbb{R}^2 \\to \\mathbb{R}$ est :",
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
    question: "Dans les conditions KKT pour l'optimisation sous contraintes d'inégalité, que signifie $\\mu_i \\geq 0$ ?",
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
    question: "Quelle est la dimension de la matrice Hessienne d'une fonction $f : \\mathbb{R}^n \\to \\mathbb{R}$ ?",
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

// Questions pour les chapitres de 2e année - Compléments d'algèbre linéaire
export const chapitre1Complements2eQuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Que signifie $F \\oplus G$ pour deux sous-espaces $F$ et $G$ ?",
    options: ["F + G", "F ∩ G = {0} et F + G", "F ∪ G", "F × G"],
    correctAnswer: 1,
    explanation: "F ⊕ G signifie somme directe : F ∩ G = {0} et tout élément de F + G s'écrit uniquement comme somme d'un élément de F et d'un élément de G."
  },
  {
    id: 2,
    question: "Quelle est la formule de Grassmann ?",
    options: ["$\\dim(F + G) = \\dim F + \\dim G$", "$\\dim(F + G) = \\dim F + \\dim G - \\dim(F \\cap G)$", "$\\dim(F \\oplus G) = \\dim F \\times \\dim G$", "$\\dim(F + G) = \\max(\\dim F, \\dim G)$"],
    correctAnswer: 1,
    explanation: "La formule de Grassmann : $\\dim(F + G) = \\dim F + \\dim G - \\dim(F \\cap G)$."
  },
  {
    id: 3,
    question: "Si F et G sont supplémentaires dans E, alors :",
    options: ["F ∩ G = E", "F + G = {0}", "F ⊕ G = E", "F = G"],
    correctAnswer: 2,
    explanation: "F et G sont supplémentaires si et seulement si F ⊕ G = E."
  },
  {
    id: 4,
    question: "Pour une somme directe de $p$ sous-espaces $F_1 \\oplus \\dots \\oplus F_p$, on a :",
    options: ["$\\dim(\\bigoplus F_i) \\leq \\sum \\dim(F_i)$", "$\\dim(\\bigoplus F_i) = \\sum \\dim(F_i)$", "$\\dim(\\bigoplus F_i) = \\prod \\dim(F_i)$", "$\\dim(\\bigoplus F_i) = \\max \\dim(F_i)$"],
    correctAnswer: 1,
    explanation: "Pour une somme directe, $\\dim(F_1 \\oplus \\dots \\oplus F_p) = \\dim F_1 + \\dots + \\dim F_p$."
  },
  {
    id: 5,
    question: "Tout sous-espace d'un espace vectoriel de dimension finie :",
    options: ["N'admet pas de supplémentaire", "Admet un unique supplémentaire", "Admet au moins un supplémentaire", "Est égal à l'espace entier"],
    correctAnswer: 2,
    explanation: "Tout sous-espace d'un espace vectoriel de dimension finie admet au moins un supplémentaire (mais pas nécessairement unique)."
  },
  {
    id: 6,
    question: "Soit $f \\in \\mathcal{L}(E,F)$ une application linéaire. Que vaut $\\dim(\\ker f) + \\dim(\\operatorname{im} f)$ ?",
    options: ["$\\dim E$", "$\\dim F$", "$\\dim E + \\dim F$", "$\\dim E \\times \\dim F$"],
    correctAnswer: 0,
    explanation: "Théorème du rang : pour f $\\in$ L(E,F), rg(f) + dim($\\ker$ f) = dim E.",
    latex: "\\dim(\\ker f) + \\dim(\\operatorname{im} f) = \\dim E"
  },
  {
    id: 7,
    question: "Une application linéaire $f : E \\to F$ est injective si et seulement si :",
    options: ["$\\ker f = \\{0\\}$", "$\\operatorname{im} f = F$", "f est surjective", "$\\ker f = F$"],
    correctAnswer: 0,
    explanation: "f est injective $\\Leftrightarrow \\ker f = \\{0\\}$."
  },
  {
    id: 8,
    question: "Une application linéaire $f : E \\to F$ est surjective si et seulement si :",
    options: ["$\\ker f = \\{0\\}$", "$\\operatorname{im} f = F$", "f est injective", "$\\ker f = E$"],
    correctAnswer: 1,
    explanation: "f est surjective $\\Leftrightarrow \\operatorname{im} f = F$."
  },
  {
    id: 9,
    question: "Une application linéaire $f : E \\to F$ est bijective si et seulement si :",
    options: ["$\\ker f = \\{0\\} \\text{ et } \\operatorname{im} f = F$", "$\\ker f = F$", "$\\operatorname{im} f = \\{0\\}$", "$\\ker f = \\{0\\} \\text{ ou } \\operatorname{im} f = F$"],
    correctAnswer: 0,
    explanation: "f est bijective $\\Leftrightarrow$ f est injective et surjective $\\Leftrightarrow \\ker f = \\{0\\} \\text{ et } \\operatorname{im} f = F$."
  },
  {
    id: 10,
    question: "Soit $f \\in \\mathcal{L}(E)$ un endomorphisme. $f$ est inversible si et seulement si :",
    options: ["$\\ker f = \\{0\\}$", "$\\operatorname{im} f = E$", "$\\ker f = \\{0\\} \\text{ et } \\operatorname{im} f = E$", "f(0) = 0"],
    correctAnswer: 2,
    explanation: "Pour un endomorphisme, f est bijectif $\\Leftrightarrow$ f est inversible $\\Leftrightarrow \\ker f = \\{0\\} \\text{ et } \\operatorname{im} f = E$."
  },
  {
    id: 11,
    question: "La matrice de passage $P_{B\\leftarrow C}$ permet de :",
    options: ["Passer de la base B à la base C", "Passer de la base C à la base B", "Calculer le déterminant", "Diagonaliser une matrice"],
    correctAnswer: 1,
    explanation: "$P_{B\\leftarrow C}$ est la matrice de passage de la base C vers la base B."
  },
  {
    id: 12,
    question: "Si Mat_B(f) et Mat_C(f) sont les matrices de f dans les bases B et C, alors :",
    options: ["$\\operatorname{Mat}_B(f) = \\operatorname{Mat}_C(f)$", "$\\operatorname{Mat}_B(f) = P_{C\\leftarrow B} \\operatorname{Mat}_C(f)$", "$\\operatorname{Mat}_B(f) = \\operatorname{Mat}_C(f) P_{B\\leftarrow C}$", "$\\operatorname{Mat}_B(f) = P_{B\\leftarrow C} \\operatorname{Mat}_C(f) P_{C\\leftarrow B}$"],
    correctAnswer: 3,
    explanation: "Formule de changement de base : $\\operatorname{Mat}_B(f) = P_{B\\leftarrow C} \\operatorname{Mat}_C(f) P_{C\\leftarrow B}$."
  },
  {
    id: 13,
    question: "Pour une matrice carrée $A \\in \\mathcal{M}_n(\\mathbb{R})$, la trace vérifie :",
    options: ["$\\operatorname{Tr}(A) = \\sum_{i=1}^n a_{ii}$", "$\\operatorname{Tr}(A) = \\prod_{i=1}^n a_{ii}$", "$\\operatorname{Tr}(A) = \\det(A)$", "$\\operatorname{Tr}(A) = \\|A\\|$"],
    correctAnswer: 0,
    explanation: "La trace de A est la somme des éléments diagonaux : $\\operatorname{Tr}(A) = \\sum_{i=1}^n a_{ii}$."
  },
  {
    id: 14,
    question: "Si A et B sont des matrices carrées de même taille, alors Tr(A + B) = :",
    options: ["$\\operatorname{Tr}(A) + \\operatorname{Tr}(B)$", "$\\operatorname{Tr}(A) \\times \\operatorname{Tr}(B)$", "$\\operatorname{Tr}(A) - \\operatorname{Tr}(B)$", "$\\operatorname{Tr}(A)/\\operatorname{Tr}(B)$"],
    correctAnswer: 0,
    explanation: "La trace est linéaire : $\\operatorname{Tr}(A + B) = \\operatorname{Tr}(A) + \\operatorname{Tr}(B)$."
  },
  {
    id: 15,
    question: "Si $\\lambda$ est une valeur propre de $A \\in \\mathcal{M}_n(\\mathbb{R})$, alors :",
    options: ["λ ∈ ℝ", "λ ∈ ℂ", "λ peut être complexe", "λ = 0"],
    correctAnswer: 2,
    explanation: "Les valeurs propres peuvent être complexes même si A a des coefficients réels."
  },
  {
    id: 16,
    question: "Un vecteur propre associé à $\\lambda$ est un vecteur $\\mathbf{v} \\neq \\mathbf{0}$ tel que :",
    options: ["$A \\mathbf{v} = \\lambda \\mathbf{v}$", "$A \\mathbf{v} = \\mathbf{v}$", "$A \\mathbf{v} = \\mathbf{0}$", "$\\mathbf{v}^T A = \\lambda \\mathbf{v}^T$"],
    correctAnswer: 0,
    explanation: "Définition : $\\mathbf{v}$ est vecteur propre de A associé à $\\lambda$ si $A \\mathbf{v} = \\lambda \\mathbf{v}$ et $\\mathbf{v} \\neq \\mathbf{0}$."
  },
  {
    id: 17,
    question: "Si A est diagonalisable, alors il existe une base de :",
    options: ["Vecteurs propres", "Vecteurs du noyau", "Vecteurs de l'image", "Vecteurs quelconques"],
    correctAnswer: 0,
    explanation: "A est diagonalisable si et seulement s'il existe une base formée de vecteurs propres de A."
  },
  {
    id: 18,
    question: "Le polynôme caractéristique de $A \\in \\mathcal{M}_n(\\mathbb{R})$ est de degré :",
    options: ["$n-1$", "$n$", "$2n$", "$n^2$"],
    correctAnswer: 1,
    explanation: "Le polynôme caractéristique $P_A(X) = \\det(A - X I_n)$ est de degré $n$."
  },
  {
    id: 19,
    question: "Si v₁, ..., vₚ sont des vecteurs linéairement indépendants, alors :",
    options: ["Ils forment une base", "Ils sont libres", "Ils engendrent un sous-espace", "Ils sont liés"],
    correctAnswer: 1,
    explanation: "Des vecteurs linéairement indépendants sont libres par définition."
  },
  {
    id: 20,
    question: "La dimension d'un espace vectoriel E est :",
    options: ["Le nombre d'éléments dans E", "Le cardinal de toute base de E", "Le nombre de sous-espaces de E", "La taille des matrices associées"],
    correctAnswer: 1,
    explanation: "La dimension de E est le nombre d'éléments dans toute base de E (toutes les bases ont le même cardinal)."
  }
];

// Questions pour Chapitre 2 - Endomorphismes matrices avancées
export const chapitre2Endomorphismes2eQuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Que représente la matrice de passage P_{B←C} ?",
    options: ["La matrice de C dans B", "La matrice pour passer de la base B à la base C", "La matrice pour passer de la base C à la base B", "L'inverse de la matrice C"],
    correctAnswer: 2,
    explanation: "P_{B←C} est la matrice de passage de la base C vers la base B."
  },
  {
    id: 2,
    question: "Si A et B sont des matrices semblables, alors :",
    options: ["A = B", "Il existe P inversible telle que B = P⁻¹AP", "A + B = 0", "AB = BA"],
    correctAnswer: 1,
    explanation: "Deux matrices A et B sont semblables s'il existe une matrice inversible P telle que B = P⁻¹AP."
  },
  {
    id: 3,
    question: "La trace d'une matrice $A \\in \\mathcal{M}_n(\\mathbb{R})$ est :",
    options: ["Le produit des éléments diagonaux", "La somme des éléments diagonaux", "Le déterminant de A", "La norme de A"],
    correctAnswer: 1,
    explanation: "Tr(A) = ∑ᵢ₌₁ⁿ aᵢᵢ est la somme des éléments diagonaux."
  },
  {
    id: 4,
    question: "Pour toutes matrices $A, B \\in \\mathcal{M}_n(\\mathbb{R})$, on a :",
    options: ["Tr(AB) = Tr(A)Tr(B)", "Tr(AB) = Tr(BA)", "Tr(A + B) = Tr(A)Tr(B)", "Tr(A⁻¹) = 1/Tr(A)"],
    correctAnswer: 1,
    explanation: "Propriété fondamentale : Tr(AB) = Tr(BA) pour toutes matrices compatibles."
  },
  {
    id: 5,
    question: "Un sous-espace $F$ est stable par $\\varphi \\in \\mathcal{L}(E)$ si :",
    options: ["φ(F) ⊂ F", "φ(F) = F", "φ(F) = E", "φ⁻¹(F) = F"],
    correctAnswer: 0,
    explanation: "F est stable par φ si φ(F) ⊂ F, c'est-à-dire si l'image de F par φ est incluse dans F."
  }
];

// Questions pour Chapitre 3 - Algèbre bilinéaire
export const chapitre3AlgebreBilineaire2eQuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Un produit scalaire sur E est une application :",
    options: ["Linéaire", "Bilinéaire, symétrique et définie positive", "Quadratique", "Multilinéaire"],
    correctAnswer: 1,
    explanation: "Un produit scalaire est bilinéaire (linéaire en chaque variable), symétrique et définie positive."
  },
  {
    id: 2,
    question: "L'inégalité de Cauchy-Schwarz s'écrit :",
    options: ["⟨x,y⟩ ≤ ‖x‖ + ‖y‖", "|⟨x,y⟩| ≤ ‖x‖ · ‖y‖", "‖x + y‖ ≤ ‖x‖ + ‖y‖", "⟨x,y⟩² ≤ ‖x‖²‖y‖²"],
    correctAnswer: 1,
    explanation: "L'inégalité de Cauchy-Schwarz : |⟨x,y⟩| ≤ ‖x‖ · ‖y‖ avec égalité ssi x et y sont colinéaires."
  },
  {
    id: 3,
    question: "Le théorème de Pythagore s'énonce :",
    options: ["‖x + y‖² = ‖x‖² + ‖y‖²", "x ⊥ y ⟺ ‖x + y‖² = ‖x‖² + ‖y‖²", "⟨x,y⟩ = 0", "‖x‖ = ‖y‖"],
    correctAnswer: 1,
    explanation: "Théorème de Pythagore : x ⊥ y si et seulement si ‖x + y‖² = ‖x‖² + ‖y‖²."
  },
  {
    id: 4,
    question: "Une famille orthogonale de vecteurs non nuls est :",
    options: ["Toujours liée", "Toujours libre", "Parfois libre", "Jamais libre"],
    correctAnswer: 1,
    explanation: "Une famille orthogonale de vecteurs non nuls est toujours libre."
  },
  {
    id: 5,
    question: "Le procédé d'orthonormalisation de Gram-Schmidt permet de :",
    options: ["Calculer des produits scalaires", "Construire une base orthonormée à partir d'une base quelconque", "Diagonaliser des matrices", "Calculer des déterminants"],
    correctAnswer: 1,
    explanation: "Gram-Schmidt transforme toute base en une base orthonormée en préservant les espaces engendrés."
  }
];

// Questions pour Chapitre 6 - n-uplets de variables aléatoires réelles
export const chapitre6NupletsVariablesQuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Un vecteur aléatoire X = (X₁,...,Xₙ) est :",
    options: ["Une application Ω → ℝ", "Une application Ω → ℝⁿ", "Un nombre réel", "Une matrice"],
    correctAnswer: 1,
    explanation: "Un vecteur aléatoire est une application de Ω vers ℝⁿ."
  },
  {
    id: 2,
    question: "Si X₁,...,Xₙ sont mutuellement indépendantes, alors :",
    options: ["F_{X₁,...,Xₙ}(x₁,...,xₙ) = ∑F_{Xᵢ}(xᵢ)", "F_{X₁,...,Xₙ}(x₁,...,xₙ) = ∏F_{Xᵢ}(xᵢ)", "F_{X₁,...,Xₙ}(x₁,...,xₙ) = max F_{Xᵢ}(xᵢ)", "F_{X₁,...,Xₙ}(x₁,...,xₙ) = 0"],
    correctAnswer: 1,
    explanation: "Pour des variables indépendantes, la fonction de répartition conjointe est le produit des fonctions de répartition marginales."
  },
  {
    id: 3,
    question: "La linéarité de l'espérance s'écrit :",
    options: ["E(XY) = E(X)E(Y)", "E(∑Xᵢ) = ∑E(Xᵢ)", "E(X²) = E(X)²", "E(X + Y) = E(X) × E(Y)"],
    correctAnswer: 1,
    explanation: "L'espérance est linéaire : E(∑Xᵢ) = ∑E(Xᵢ), même si les variables ne sont pas indépendantes."
  },
  {
    id: 4,
    question: "Si $X_1,\\dots,X_n$ sont indépendantes, alors $\\operatorname{Var}(\\sum X_i) = $ :",
    options: ["∑V(Xᵢ)", "∏V(Xᵢ)", "(∑V(Xᵢ))²", "max V(Xᵢ)"],
    correctAnswer: 0,
    explanation: "Pour des variables indépendantes, V(∑Xᵢ) = ∑V(Xᵢ)."
  },
  {
    id: 5,
    question: "Si $X_i \\sim \\mathcal{B}(p)$ indépendantes, alors $\\sum X_i \\sim$ :",
    options: ["B(np)", "B(n,p)", "P(np)", "N(np,np(1-p))"],
    correctAnswer: 1,
    explanation: "La somme de n variables de Bernoulli indépendantes de paramètre p suit une loi binomiale B(n,p)."
  }
];

// Questions pour Chapitre 7 - Probabilités (Variables aléatoires)
export const chapitre7CoupleVariablesQuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "X et Y sont indépendantes si et seulement si :",
    options: ["P(X=x, Y=y) = P(X=x) + P(Y=y)", "P(X=x, Y=y) = P(X=x) × P(Y=y)", "P(X=x, Y=y) = 0", "Cov(X,Y) = 1"],
    correctAnswer: 1,
    explanation: "Deux variables discrètes X et Y sont indépendantes ssi P(X=x, Y=y) = P(X=x) × P(Y=y) pour tout (x,y)."
  },
  {
    id: 2,
    question: "La formule de Huygens pour la covariance est :",
    options: ["Cov(X,Y) = E(XY)", "Cov(X,Y) = E(X)E(Y)", "Cov(X,Y) = E(XY) - E(X)E(Y)", "Cov(X,Y) = V(X)V(Y)"],
    correctAnswer: 2,
    explanation: "Formule de Huygens : Cov(X,Y) = E(XY) - E(X)E(Y)."
  },
  {
    id: 3,
    question: "Si X et Y sont indépendantes, alors Cov(X,Y) = :",
    options: ["1", "0", "E(X)E(Y)", "V(X) + V(Y)"],
    correctAnswer: 1,
    explanation: "Si X et Y sont indépendantes, alors Cov(X,Y) = 0."
  },
  {
    id: 4,
    question: "Le coefficient de corrélation linéaire $\\rho_{X,Y}$ vérifie :",
    options: ["0 ≤ ρ_{X,Y} ≤ 1", "-1 ≤ ρ_{X,Y} ≤ 1", "ρ_{X,Y} ≥ 1", "ρ_{X,Y} est quelconque"],
    correctAnswer: 1,
    explanation: "Le coefficient de corrélation vérifie toujours -1 ≤ ρ_{X,Y} ≤ 1."
  },
  {
    id: 5,
    question: "Si $X \\sim \\mathcal{P}(\\lambda)$ et $Y \\sim \\mathcal{P}(\\mu)$ indépendantes, alors $X + Y \\sim$ :",
    options: ["P(λ + μ)", "P(λμ)", "B(λ + μ)", "N(λ + μ, λ + μ)"],
    correctAnswer: 0,
    explanation: "Stabilité des lois de Poisson : si X ~ P(λ) et Y ~ P(μ) indépendantes, alors X + Y ~ P(λ + μ)."
  },
  {
    id: 6,
    question: "Si X et Y sont indépendantes, alors E(XY) = E(X) × E(Y).",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "Pour des variables indépendantes, E(XY) = E(X)E(Y)."
  },
  {
    id: 7,
    question: "La covariance est toujours positive pour des variables corrélées.",
    options: ["Vrai", "Faux"],
    correctAnswer: 1,
    explanation: "La covariance peut être négative : Cov(X,Y) peut être négative si les variables sont anticorrélées."
  },
  {
    id: 8,
    question: "Si ρ_{X,Y} = 0, alors X et Y sont indépendantes.",
    options: ["Vrai", "Faux"],
    correctAnswer: 1,
    explanation: "ρ = 0 signifie absence de corrélation linéaire, mais pas nécessairement indépendance."
  },
  {
    id: 9,
    question: "Pour deux variables aléatoires, V(X+Y) = V(X) + V(Y) si elles sont indépendantes.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "Propriété de la variance : V(X+Y) = V(X) + V(Y) + 2Cov(X,Y), donc si indépendantes, V(X+Y) = V(X) + V(Y)."
  },
  {
    id: 10,
    question: "La loi binomiale négative est la loi du nombre d'échecs avant r succès.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "La loi binomiale négative compte le nombre d'échecs avant d'obtenir r succès."
  }
];

// Chapitre 13 - Séries numériques (1ère année)
export const chapitre13SeriesNumeriquesQuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Une série $\\sum u_n$ converge si :",
    options: ["La suite (u_n) tend vers 0", "La suite des sommes partielles converge", "Tous les termes sont positifs", "La suite (u_n) est bornée"],
    correctAnswer: 1,
    explanation: "Une série converge si la suite des sommes partielles S_n = u₀ + ... + u_n converge."
  },
  {
    id: 2,
    question: "Le critère de Cauchy pour les séries dit que :",
    options: ["Si ∑u_n converge alors u_n → 0", "Si u_n → 0 alors ∑u_n converge", "Si u_n ⩾ 0 alors ∑u_n converge", "Toutes les séries convergent"],
    correctAnswer: 0,
    explanation: "Critère nécessaire : si ∑u_n converge alors u_n → 0."
  },
  {
    id: 3,
    question: "Pour une série à termes positifs, la convergence équivaut à :",
    options: ["La suite des restes tend vers 0", "La série des inverses diverge", "La somme est finie", "Tous les termes sont < 1"],
    correctAnswer: 0,
    explanation: "Pour les séries positives, convergence ⇔ suite des sommes partielles bornée."
  },
  {
    id: 4,
    question: "Le critère de d'Alembert compare :",
    options: ["u_{n+1}/u_n avec une constante", "|u_{n+1}|/|u_n| avec une constante", "u_n avec n", "u_n avec 1/n"],
    correctAnswer: 1,
    explanation: "Critère de d'Alembert : si lim |u_{n+1}/u_n| = L < 1 alors convergence."
  },
  {
    id: 5,
    question: "Le critère de comparaison dit que si :",
    options: ["0 ≤ u_n ≤ v_n et ∑v_n converge alors ∑u_n converge", "u_n > 0 et ∑u_n converge alors ∑1/u_n diverge", "u_n alternés alors convergence", "Tous les termes sont égaux"],
    correctAnswer: 0,
    explanation: "Critère de comparaison : si 0 ≤ u_n ≤ v_n et ∑v_n converge alors ∑u_n converge."
  },
  {
    id: 6,
    question: "Une série alternée ∑(-1)^n u_n avec u_n > 0 décroissante :",
    options: ["Diverge toujours", "Converge toujours", "Converge si u_n → 0", "Diverge si u_n → 0"],
    correctAnswer: 1,
    explanation: "Critère de Leibniz : série alternée avec u_n ↓ 0 converge."
  },
  {
    id: 7,
    question: "La série harmonique ∑1/n :",
    options: ["Converge", "Diverge", "Converge absolument", "Alterne"],
    correctAnswer: 1,
    explanation: "La série harmonique diverge (comparaison avec intégrale)."
  },
  {
    id: 8,
    question: "∑1/n² converge car :",
    options: ["Termes positifs décroissants", "Critère de d'Alembert", "Intégrale converge", "Termes alternés"],
    correctAnswer: 2,
    explanation: "∑1/n² converge par comparaison avec ∫dx/x² qui converge."
  },
  {
    id: 9,
    question: "Une série absolument convergente est :",
    options: ["Seulement convergente", "Convergente", "Divergente", "Conditionnellement convergente"],
    correctAnswer: 1,
    explanation: "La convergence absolue implique la convergence simple."
  },
  {
    id: 10,
    question: "Le rayon de convergence d'une série entière ∑a_n x^n est :",
    options: ["1/|a_n|", "lim |a_{n+1}/a_n|", "1/lim|a_{n+1}/a_n|", "∑|a_n|"],
    correctAnswer: 2,
    explanation: "Formule d'Hadamard : R = 1/lim sup √[n]{|a_n|} ou 1/lim|a_{n+1}/a_n|."
  }
];

// Chapitre 14 - Développements limités & formule de Taylor (1ère année)
export const chapitre14DeveloppementsLimitesQuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Un développement limité d'ordre n de f au voisinage de a est :",
    options: ["Un polynôme de degré n égal à f(a)", "Un polynôme de degré ≤ n égal à f près de a", "La série de Taylor tronquée à l'ordre n", "L'intégrale de f"],
    correctAnswer: 1,
    explanation: "DL_n f(a) = polynôme P de deg ≤ n tel que f(x) = P(x) + o((x-a)^n) quand x→a."
  },
  {
    id: 2,
    question: "La formule de Taylor avec reste intégral dit que :",
    options: ["f(a+h) = ∑(h^k/k!)f^(k)(a) + ∫reste", "f(a+h) = ∑(h^k/k!)f^(k)(a) + reste", "f(a+h) = f(a) + f'(a)h + reste", "f(a+h) = ∫f'(x)dx"],
    correctAnswer: 0,
    explanation: "Formule de Taylor-Lagrange : f(a+h) = ∑_{k=0}^n (h^k/k!)f^(k)(a) + (h^{n+1}/(n+1)!)f^(n+1)(c)."
  },
  {
    id: 3,
    question: "Pour développer f(x) = e^x au voisinage de 0 :",
    options: ["DL: 1 + x + x²/2 + x³/6 + o(x³)", "DL: 1 + x + x²/2 + x³/3 + o(x³)", "DL: 1 + x + x² + x³ + o(x³)", "DL: x + x²/2 + x³/6 + o(x³)"],
    correctAnswer: 0,
    explanation: "e^x = ∑_{n=0}^∞ x^n/n! donc DL₃: 1 + x + x²/2 + x³/6 + o(x³)."
  },
  {
    id: 4,
    question: "Le développement limité de ln(1+x) au voisinage de 0 est :",
    options: ["x - x²/2 + x³/3 + o(x³)", "x + x²/2 + x³/3 + o(x³)", "1 + x - x²/2 + x³/3 + o(x³)", "x - x² + x³ + o(x³)"],
    correctAnswer: 0,
    explanation: "ln(1+x) = ∑_{n=1}^∞ (-1)^{n-1} x^n/n donc DL₃: x - x²/2 + x³/3 + o(x³)."
  },
  {
    id: 5,
    question: "Pour f(x) = sin(x) au voisinage de 0 :",
    options: ["DL: x - x³/6 + o(x³)", "DL: x - x²/2 + x³/3 + o(x³)", "DL: 1 + x + x²/2 + o(x²)", "DL: x + x²/2 + x³/6 + o(x³)"],
    correctAnswer: 0,
    explanation: "sin(x) = x - x³/6 + x⁵/120 + ... donc DL₃: x - x³/6 + o(x³)."
  },
  {
    id: 6,
    question: "Le développement limité de cos(x) au voisinage de 0 est :",
    options: ["1 - x²/2 + x⁴/24 + o(x⁴)", "1 - x + x²/2 + o(x²)", "x - x³/6 + o(x³)", "1 + x + x²/2 + o(x²)"],
    correctAnswer: 0,
    explanation: "cos(x) = 1 - x²/2 + x⁴/24 - ... donc DL₄: 1 - x²/2 + x⁴/24 + o(x⁴)."
  },
  {
    id: 7,
    question: "Pour calculer lim x→0 (1-cos(x))/x², on utilise :",
    options: ["DL de cos(x): 1 - x²/2 + o(x²)", "DL de sin(x): x + o(x)", "DL de e^x: 1 + x + o(x)", "DL de ln(x): x + o(x)"],
    correctAnswer: 0,
    explanation: "(1-cos(x))/x² = (1 - (1 - x²/2 + o(x²)))/x² = (x²/2 + o(x²))/x² = 1/2 + o(1) → 1/2."
  },
  {
    id: 8,
    question: "Le développement limité de (1+x)^α au voisinage de 0 est :",
    options: ["1 + αx + α(α-1)x²/2 + o(x²)", "1 + x + x²/2 + o(x²)", "e^{αx}", "ln(1+αx)"],
    correctAnswer: 0,
    explanation: "(1+x)^α = ∑_{n=0}^∞ C(α,n) x^n où C(α,n) = α(α-1)...(α-n+1)/n!."
  },
  {
    id: 9,
    question: "Pour f(x) = √(1+x) au voisinage de 0 :",
    options: ["DL: 1 + x/2 - x²/8 + o(x²)", "DL: 1 + x + x²/2 + o(x²)", "DL: x + x²/2 + o(x²)", "DL: 1 + x/2 + x²/2 + o(x²)"],
    correctAnswer: 0,
    explanation: "√(1+x) = (1+x)^{1/2} = 1 + (1/2)x + (-1/8)x² + o(x²)."
  },
  {
    id: 10,
    question: "La composition de développements limités :",
    options: ["Est toujours possible", "Nécessite le même ordre", "Peut créer des termes d'ordre inférieur", "Annule les termes d'ordre supérieur"],
    correctAnswer: 1,
    explanation: "Pour composer DL, ils doivent être du même ordre pour éviter les pertes de termes."
  }
];

// Chapitre 4 - Fonctions multivariées et calcul différentiel (2ème année)
export const chapitre4FonctionsMultivarieesQuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Qu'est-ce qu'une fonction de plusieurs variables ?",
    options: ["Une fonction de ℝ dans ℝ", "Une fonction de ℝⁿ dans ℝ", "Une fonction de ℝ dans ℝⁿ", "Une fonction périodique"],
    correctAnswer: 1,
    explanation: "Une fonction de plusieurs variables est une application de ℝⁿ dans ℝ."
  },
  {
    id: 2,
    question: "Que représente le graphe d'une fonction f(x,y) ?",
    options: ["Une courbe dans ℝ²", "Une surface dans ℝ³", "Un ensemble de points dans ℝ⁴", "Une droite dans ℝ³"],
    correctAnswer: 1,
    explanation: "Le graphe de f(x,y) est l'ensemble {(x,y,f(x,y)) | (x,y) ∈ domaine de f}, donc une surface dans ℝ³."
  },
  {
    id: 3,
    question: "Qu'est-ce que la continuité d'une fonction de deux variables ?",
    options: ["La fonction est dérivable", "La fonction est bornée", "lim_{(x,y)→(a,b)} f(x,y) = f(a,b)", "La fonction est périodique"],
    correctAnswer: 2,
    explanation: "Une fonction f est continue en (a,b) si lim_{(x,y)→(a,b)} f(x,y) = f(a,b)."
  },
  {
    id: 4,
    question: "Que vaut la dérivée partielle ∂f/∂x en un point ?",
    options: ["La limite de [f(x+dx,y) - f(x,y)]/dx", "La limite de [f(x,y+dy) - f(x,y)]/dy", "La dérivée totale", "Le gradient"],
    correctAnswer: 0,
    explanation: "∂f/∂x(x₀,y₀) = lim_{h→0} [f(x₀+h,y₀) - f(x₀,y₀)]/h."
  },
  {
    id: 5,
    question: "Le gradient ∇f est un :",
    options: ["Nombre réel", "Vecteur", "Matrice", "Ensemble"],
    correctAnswer: 1,
    explanation: "Le gradient est un vecteur dont les composantes sont les dérivées partielles."
  },
  {
    id: 6,
    question: "Une fonction différentiable admet-elle des dérivées partielles ?",
    options: ["Non", "Oui", "Seulement si elle est continue", "Seulement si elle est polynomiale"],
    correctAnswer: 1,
    explanation: "Si f est différentiable en un point, elle admet des dérivées partielles en ce point."
  },
  {
    id: 7,
    question: "La différentielle df(a,b) est :",
    options: ["Un nombre", "Une fonction", "Une forme linéaire", "Un vecteur"],
    correctAnswer: 2,
    explanation: "La différentielle est une application linéaire qui approche la variation de f."
  },
  {
    id: 8,
    question: "Le théorème des fonctions composées s'applique à :",
    options: ["Une seule fonction", "Deux fonctions composées", "Trois fonctions composées", "Toutes les fonctions"],
    correctAnswer: 1,
    explanation: "Le théorème donne la différentielle de f∘g en termes des différentielles de f et g."
  },
  {
    id: 9,
    question: "Une fonction de classe C¹ est :",
    options: ["Continue", "Dérivable avec dérivée continue", "Deux fois dérivable", "Analytique"],
    correctAnswer: 1,
    explanation: "C¹ signifie que f est dérivable et que ses dérivées partielles sont continues."
  },
  {
    id: 10,
    question: "La matrice jacobienne de f : ℝ² → ℝ² est :",
    options: ["Un nombre", "Un vecteur", "Une matrice 2×2", "Une matrice 1×2"],
    correctAnswer: 2,
    explanation: "La matrice jacobienne contient toutes les dérivées partielles de f."
  }
];

// Chapitre 5 - Variables aléatoires à densité (2ème année)
export const chapitre5VariablesAleatoiresDensiteQuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Une variable aléatoire X admet une densité si :",
    options: ["Elle est discrète", "Sa fonction de répartition est continue", "Elle est absolument continue", "Elle prend des valeurs entières"],
    correctAnswer: 2,
    explanation: "X admet une densité f si F_X(x) = ∫_{-∞}^x f(t) dt pour une fonction f ≥ 0 d'intégrale 1."
  },
  {
    id: 2,
    question: "La densité d'une variable uniforme sur [a,b] vaut :",
    options: ["1/(b-a)", "1/b", "1/a", "(b-a)"],
    correctAnswer: 0,
    explanation: "Pour X ~ U([a,b]), f(x) = 1/(b-a) pour x ∈ [a,b]."
  },
  {
    id: 3,
    question: "L'espérance d'une variable à densité X est :",
    options: ["∫ x f(x) dx", "∫ f(x) dx", "∫ x² f(x) dx", "∫ 1/f(x) dx"],
    correctAnswer: 0,
    explanation: "E[X] = ∫_{-∞}^{+∞} x f(x) dx si l'intégrale converge."
  },
  {
    id: 4,
    question: "La variance d'une variable à densité X est :",
    options: ["E[X²]", "E[X]²", "E[X²] - E[X]²", "E[X] - E[X]²"],
    correctAnswer: 2,
    explanation: "V(X) = E[X²] - (E[X])²."
  },
  {
    id: 5,
    question: "La loi normale N(μ,σ²) a pour densité :",
    options: ["(1/σ√(2π)) exp(-(x-μ)²/(2σ²))", "(1/σ) exp(-x/μ)", "exp(-x²/2)", "1/√(2π) exp(-x²/2)"],
    correctAnswer: 0,
    explanation: "La densité de N(μ,σ²) est (1/(σ√(2π))) exp(-(x-μ)²/(2σ²))."
  },
  {
    id: 6,
    question: "La loi exponentielle de paramètre λ a pour espérance :",
    options: ["λ", "1/λ", "λ²", "1/λ²"],
    correctAnswer: 1,
    explanation: "Pour X ~ Exp(λ), E[X] = 1/λ."
  },
  {
    id: 7,
    question: "Si X ~ N(0,1), alors E[X] = :",
    options: ["0", "1", "1/√(2π)", "Variable"],
    correctAnswer: 0,
    explanation: "La loi normale centrée réduite a espérance 0."
  },
  {
    id: 8,
    question: "La fonction de répartition F(x) = P(X ≤ x) vérifie :",
    options: ["F est décroissante", "F est continue à droite", "F(x) = 1 pour x ≥ max(support)", "F est discontinue"],
    correctAnswer: 1,
    explanation: "Toute fonction de répartition est continue à droite et croissante."
  },
  {
    id: 9,
    question: "Le mode d'une distribution est :",
    options: ["La moyenne", "La médiane", "La valeur la plus probable", "La variance"],
    correctAnswer: 2,
    explanation: "Le mode est la valeur où la densité atteint son maximum."
  },
  {
    id: 10,
    question: "Si X et Y sont indépendantes, alors f_{X,Y}(x,y) = :",
    options: ["f_X(x) + f_Y(y)", "f_X(x) × f_Y(y)", "f_X(x) / f_Y(y)", "max(f_X(x), f_Y(y))"],
    correctAnswer: 1,
    explanation: "Pour des variables indépendantes, la densité conjointe est le produit des densités marginales."
  }
];

// Chapitre 9 - Réduction des matrices symétriques (2ème année)
export const chapitre9ReductionMatricesQuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Une matrice symétrique A vérifie :",
    options: ["A = A^T", "A = -A^T", "A = A^{-1}", "A = 0"],
    correctAnswer: 0,
    explanation: "Une matrice est symétrique si elle est égale à sa transposée : A^T = A."
  },
  {
    id: 2,
    question: "Les valeurs propres d'une matrice symétrique réelle sont :",
    options: ["Complexes", "Réelles", "Imaginaires pures", "Nulles"],
    correctAnswer: 1,
    explanation: "Théorème spectral : les valeurs propres d'une matrice symétrique réelle sont réelles."
  },
  {
    id: 3,
    question: "Pour une matrice symétrique, les sous-espaces propres associés à des valeurs propres distinctes sont :",
    options: ["Identiques", "Orthogonaux", "Parallèles", "Confondus"],
    correctAnswer: 1,
    explanation: "Sous-espaces propres pour valeurs propres distinctes sont orthogonaux."
  },
  {
    id: 4,
    question: "Une matrice symétrique est diagonalisable si :",
    options: ["Elle est carrée", "Elle est inversible", "Elle admet une base orthonormée de vecteurs propres", "Elle est triangulaire"],
    correctAnswer: 2,
    explanation: "Une matrice symétrique réelle est diagonalisable dans une base orthonormée."
  },
  {
    id: 5,
    question: "La forme quadratique associée à une matrice symétrique A est :",
    options: ["x^T A x", "x A x^T", "A x x^T", "x^T x A"],
    correctAnswer: 0,
    explanation: "La forme quadratique est q(x) = x^T A x."
  },
  {
    id: 6,
    question: "Une forme quadratique est définie positive si :",
    options: ["q(x) > 0 pour x ≠ 0", "q(x) ≥ 0 pour tout x", "q(x) < 0 pour x ≠ 0", "q(x) peut être négative"],
    correctAnswer: 0,
    explanation: "Définie positive signifie q(x) > 0 pour tout x ≠ 0."
  },
  {
    id: 7,
    question: "Le théorème d'inertie de Sylvester dit que :",
    options: ["Le nombre de valeurs propres positives est invariant", "Les valeurs propres ne changent pas de base", "La trace est invariante", "Le déterminant est invariant"],
    correctAnswer: 0,
    explanation: "Le nombre de valeurs propres positives (resp. négatives, nulles) est invariant par changement de base."
  },
  {
    id: 8,
    question: "Une matrice symétrique définit positive a toutes ses valeurs propres :",
    options: ["Négatives", "Nulles", "Positives", "Imaginaires"],
    correctAnswer: 2,
    explanation: "Matrice définie positive ⇔ toutes valeurs propres > 0."
  },
  {
    id: 9,
    question: "La réduction d'une forme quadratique revient à :",
    options: ["La diagonaliser", "La rendre triangulaire", "La rendre nulle", "La multiplier par une constante"],
    correctAnswer: 0,
    explanation: "Réduire une forme quadratique signifie la diagonaliser par un changement de base orthonormé."
  },
  {
    id: 10,
    question: "Dans la base des vecteurs propres orthonormés, la matrice de A est :",
    options: ["Triangulaire", "Diagonale", "Symétrique", "Antisymétrique"],
    correctAnswer: 1,
    explanation: "Dans la base orthonormée de vecteurs propres, la matrice est diagonale avec les valeurs propres."
  }
];

// Chapitre 11 - Optimisation multivariée avancée (2ème année)
export const chapitre11OptimisationMultivarieeQuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Un point critique d'une fonction f : ℝⁿ → ℝ est un point où :",
    options: ["f s'annule", "∇f = 0", "f est maximale", "f est minimale"],
    correctAnswer: 1,
    explanation: "Un point critique est un point où le gradient s'annule : ∇f(x₀) = 0."
  },
  {
    id: 2,
    question: "La matrice hessienne H_f(x) contient :",
    options: ["Les dérivées partielles premières", "Les dérivées partielles secondes", "Les dérivées directionnelles", "Les intégrales"],
    correctAnswer: 1,
    explanation: "La matrice hessienne contient les dérivées partielles secondes : H_f(x)_{ij} = ∂²f/∂x_i∂x_j."
  },
  {
    id: 3,
    question: "Pour un point critique x₀, si la hessienne est définie positive, alors :",
    options: ["x₀ est un maximum local", "x₀ est un minimum local", "x₀ est un point col", "On ne peut pas conclure"],
    correctAnswer: 1,
    explanation: "Hessienne définie positive ⇒ minimum local ; définie négative ⇒ maximum local."
  },
  {
    id: 4,
    question: "La méthode du gradient utilise :",
    options: ["Les dérivées premières", "Les dérivées secondes", "Les intégrales", "Les séries"],
    correctAnswer: 0,
    explanation: "La méthode du gradient descend vers le minimum en suivant -∇f."
  },
  {
    id: 5,
    question: "Un extremum global sur un compact est atteint si f est :",
    options: ["Continue", "Dérivable", "Continûment différentiable", "Toutes les réponses"],
    correctAnswer: 0,
    explanation: "Théorème : une fonction continue sur un compact atteint ses bornes."
  },
  {
    id: 6,
    question: "Les conditions de Karush-Kuhn-Tucker généralisent :",
    options: ["Le théorème de Rolle", "Les conditions du second ordre", "Les multiplicateurs de Lagrange", "Le théorème des valeurs intermédiaires"],
    correctAnswer: 2,
    explanation: "KKT étend les multiplicateurs de Lagrange aux contraintes d'inégalité."
  },
  {
    id: 7,
    question: "Une fonction convexe f vérifie :",
    options: ["f(λx + (1-λ)y) ≤ λf(x) + (1-λ)f(y)", "f(λx + (1-λ)y) ≥ λf(x) + (1-λ)f(y)", "f(x) = f(y)", "f est constante"],
    correctAnswer: 0,
    explanation: "Définition de la convexité : l'épigraphe est convexe."
  },
  {
    id: 8,
    question: "Pour une fonction convexe différentiable, un point critique est :",
    options: ["Toujours un minimum global", "Toujours un maximum global", "Un minimum global", "Un point d'inflexion"],
    correctAnswer: 2,
    explanation: "Pour une fonction convexe, les points critiques sont des minima globaux."
  },
  {
    id: 9,
    question: "L'algorithme de Newton utilise :",
    options: ["Le gradient", "La hessienne", "Les dérivées troisièmes", "Les intégrales"],
    correctAnswer: 1,
    explanation: "Newton utilise l'inverse de la hessienne pour converger quadratiquement."
  },
  {
    id: 10,
    question: "Un problème d'optimisation sous contraintes utilise souvent :",
    options: ["Les conditions KKT", "Le théorème de Pythagore", "Les séries de Fourier", "Les intégrales multiples"],
    correctAnswer: 0,
    explanation: "Les conditions KKT sont nécessaires pour les optima sous contraintes."
  }
];

// Chapitre 12 - Convergences et approximations (2ème année)
export const chapitre12ConvergencesApproximationsQuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "La convergence en moyenne quadratique signifie :",
    options: ["lim E[X_n] = μ", "lim E[(X_n - μ)²] = 0", "lim P(|X_n - μ| > ε) = 0", "lim X_n = μ p.s."],
    correctAnswer: 1,
    explanation: "Convergence en moyenne quadratique : E[(X_n - μ)²] → 0."
  },
  {
    id: 2,
    question: "La convergence presque sûre implique :",
    options: ["Convergence en probabilité", "Convergence en loi", "Convergence en moyenne", "Toutes les réponses"],
    correctAnswer: 0,
    explanation: "Presque sûre ⇒ en probabilité ⇒ en loi."
  },
  {
    id: 3,
    question: "Le théorème de Slutsky concerne :",
    options: ["La convergence des sommes", "Les fonctions continues de variables convergentes", "Les lois limites", "Les martingales"],
    correctAnswer: 1,
    explanation: "Si X_n → X et Y_n → c, alors f(X_n, Y_n) → f(X, c) si f continue."
  },
  {
    id: 4,
    question: "L'approximation normale utilise :",
    options: ["La loi binomiale", "Le TCL", "Les martingales", "Les chaînes de Markov"],
    correctAnswer: 1,
    explanation: "Le théorème central limite justifie l'approximation normale des sommes."
  },
  {
    id: 5,
    question: "La vitesse de convergence du TCL est :",
    options: ["1/√n", "1/n", "1/n²", "Exponentielle"],
    correctAnswer: 0,
    explanation: "Le TCL donne une convergence en 1/√n vers la loi normale."
  },
  {
    id: 6,
    question: "Le delta method concerne :",
    options: ["Les différences finies", "Les fonctions de variables convergentes", "Les intégrales", "Les séries"],
    correctAnswer: 1,
    explanation: "Le delta method donne la loi limite de g(X_n) quand X_n → N(μ,σ²)."
  },
  {
    id: 7,
    question: "Les méthodes de Monte-Carlo utilisent :",
    options: ["Des simulations", "Des intégrales exactes", "Des séries", "Des matrices"],
    correctAnswer: 0,
    explanation: "Monte-Carlo approxime les espérances par moyennes empiriques."
  },
  {
    id: 8,
    question: "La méthode des moindres carrés minimise :",
    options: ["La somme des valeurs absolues", "La somme des carrés", "La variance", "L'espérance"],
    correctAnswer: 1,
    explanation: "Les moindres carrés minimisent Σ(y_i - f(x_i))²."
  },
  {
    id: 9,
    question: "L'interpolation polynomiale de Lagrange :",
    options: ["Passe par tous les points", "Minimise les oscillations", "Utilise des splines", "Est toujours de degré 1"],
    correctAnswer: 0,
    explanation: "Le polynôme de Lagrange passe exactement par tous les points d'interpolation."
  },
  {
    id: 10,
    question: "La stabilité numérique mesure :",
    options: ["La vitesse de calcul", "La sensibilité aux erreurs d'arrondi", "La complexité", "La précision"],
    correctAnswer: 1,
    explanation: "La stabilité numérique évalue comment les erreurs se propagent."
  }
];

// Chapitre 15: Intégrales impropres & critères de convergence
export const chapitre15QuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Une intégrale impropre de première espèce est une intégrale :",
    options: [
      "Définie sur un intervalle fini",
      "Dont l'un des bornes est infinie",
      "Dont l'intégrande présente une discontinuité",
      "Dont la primitive est connue"
    ],
    correctAnswer: 1,
    explanation: "Une intégrale impropre de première espèce a au moins une borne infinie : $\\int_a^{+\\infty} f(x) \\, dx$ ou $\\int_{-\\infty}^b f(x) \\, dx$."
  },
  {
    id: 2,
    question: "L'intégrale $\\int_1^{+\\infty} \\frac{dx}{x^p}$ converge si et seulement si :",
    options: [
      "$p > 0$",
      "$p < 1$",
      "$p > 1$",
      "$p < 0$"
    ],
    correctAnswer: 2,
    explanation: "Par comparaison avec $\\int \\frac{dx}{x^q}$, l'intégrale converge quand $p > 1$."
  },
  {
    id: 3,
    question: "Le critère de comparaison pour les intégrales impropres dit que si $0 \\leq f \\leq g$ et $\\int g$ converge, alors :",
    options: [
      "$\\int f$ diverge",
      "$\\int f$ converge",
      "On ne peut pas conclure",
      "$\\int f$ converge absolument"
    ],
    correctAnswer: 1,
    explanation: "Si $0 \\leq f(x) \\leq g(x)$ pour $x \\geq a$ et $\\int_a^{+\\infty} g(x) \\, dx$ converge, alors $\\int_a^{+\\infty} f(x) \\, dx$ converge aussi."
  },
  {
    id: 4,
    question: "Une intégrale impropre converge absolument si :",
    options: [
      "Elle converge",
      "$\\int |f|$ converge",
      "Elle converge conditionnellement",
      "$f$ est positive"
    ],
    correctAnswer: 1,
    explanation: "La convergence absolue signifie que $\\int |f(x)| \\, dx$ converge, ce qui implique la convergence simple."
  },
  {
    id: 5,
    question: "Le critère de comparaison limite pour $\\int_a^{+\\infty} f(x) \\, dx$ et $\\int_a^{+\\infty} g(x) \\, dx$ avec $g > 0$ est :",
    options: [
      "Si $\\lim \\frac{f(x)}{g(x)} = L \\in \\mathbb{R}^*$, alors même nature",
      "Si $\\lim \\frac{f(x)}{g(x)} = 0$, alors $\\int f$ converge",
      "Si $\\lim \\frac{f(x)}{g(x)} = +\\infty$, alors $\\int f$ diverge",
      "Toutes les réponses"
    ],
    correctAnswer: 3,
    explanation: "Le critère dit : si $\\lim f/g = L \\in \\mathbb{R}^*$, même nature ; si $\\lim = 0$ et $g$ converge, $f$ converge ; si $\\lim = +\\infty$ et $g$ diverge, $f$ diverge."
  },
  {
    id: 6,
    question: "Le test intégral de Cauchy pour les séries $\\sum u_n$ avec $u_n > 0$ est :",
    options: [
      "$\\sum u_n$ converge $\\Leftrightarrow \\int u_n \\, dx$ converge",
      "$\\sum u_n$ converge $\\Leftrightarrow \\int u_n \\, dx$ diverge",
      "$\\sum u_n$ diverge $\\Leftrightarrow \\int u_n \\, dx$ converge",
      "Il n'y a pas de lien"
    ],
    correctAnswer: 0,
    explanation: "Le test intégral dit que $\\sum u_n$ et $\\int u_n \\, dx$ ont la même nature pour $u_n$ décroissante positive."
  },
  {
    id: 7,
    question: "Pour une intégrale impropre de deuxième espèce $\\int_a^b f(x) \\, dx$ avec $f$ discontinue en $c \\in [a,b]$, on définit :",
    options: [
      "$\\lim_{\\varepsilon \\to 0} \\int_a^{c-\\varepsilon} f + \\lim_{\\varepsilon \\to 0} \\int_{c+\\varepsilon}^b f$",
      "$\\int_a^c f + \\int_c^b f$",
      "$\\lim_{x \\to c} \\int_a^x f$",
      "Aucune des réponses"
    ],
    correctAnswer: 0,
    explanation: "Pour une discontinuité en $c$, on définit la valeur principale : $\\lim_{\\varepsilon \\to 0^+} \\left[ \\int_a^{c-\\varepsilon} f + \\int_{c+\\varepsilon}^b f \\right]$."
  },
  {
    id: 8,
    question: "Le critère d'Abel pour les intégrales $\\int_a^{+\\infty} f(x) g(x) \\, dx$ avec $g$ monotone bornée et $f$ intégrable dit :",
    options: [
      "L'intégrale converge toujours",
      "L'intégrale diverge toujours",
      "L'intégrale converge",
      "Il faut vérifier les dérivées"
    ],
    correctAnswer: 2,
    explanation: "Le critère d'Abel : si $\\int f$ converge et $g$ est monotone bornée, alors $\\int f g$ converge."
  },
  {
    id: 9,
    question: "Le critère de Dirichlet pour $\\int_a^{+\\infty} f(x) g(x) \\, dx$ dit que si $\\int f$ converge et $g$ est monotone vers 0, alors :",
    options: [
      "$\\int f g$ diverge",
      "$\\int f g$ converge",
      "On ne peut pas conclure",
      "$\\int f g$ converge absolument"
    ],
    correctAnswer: 1,
    explanation: "Critère de Dirichlet : si $\\int f$ converge et $g$ est monotone bornée, alors $\\int f g$ converge."
  },
  {
    id: 10,
    question: "L'intégrale $\\int_0^1 \\frac{dx}{\\sqrt{x}}$ converge car :",
    options: [
      "Elle est définie",
      "Près de 0, $\\frac{1}{\\sqrt{x}} \\sim \\frac{1}{\\sqrt{t}}$ avec $\\int \\frac{dt}{\\sqrt{t}} = 2\\sqrt{t}$ converge",
      "Près de 0, $\\frac{1}{\\sqrt{x}} \\sim \\frac{1}{t}$ avec $\\int \\frac{dt}{t}$ diverge",
      "Elle est de première espèce"
    ],
    correctAnswer: 1,
    explanation: "$\\int_0^1 \\frac{dx}{\\sqrt{x}} = \\lim_{\\varepsilon \\to 0} \\int_\\varepsilon^1 \\frac{dx}{\\sqrt{x}} = \\lim_{\\varepsilon \\to 0} [2\\sqrt{x}]_\\varepsilon^1 = 2(1 - \\sqrt{\\varepsilon}) \\to 2$, donc converge."
  }
];

// Chapitre 16: Espaces probabilisés & conditionnement
export const chapitre16QuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Un espace probabilisé est un triplet $(\\Omega, \\mathcal{A}, \\mathbb{P})$ où :",
    options: [
      "$\\Omega$ est fini, $\\mathcal{A}$ est une tribu, $\\mathbb{P}$ est une probabilité",
      "$\\Omega$ est un ensemble, $\\mathcal{A}$ est une $\\sigma$-algèbre, $\\mathbb{P}$ est une probabilité",
      "$\\Omega$ est dénombrable, $\\mathcal{A}$ est une algèbre, $\\mathbb{P}$ est positive",
      "$\\Omega$ est un ensemble, $\\mathcal{A}$ est une tribu, $\\mathbb{P}$ est additive"
    ],
    correctAnswer: 1,
    explanation: "Un espace probabilisé est un triplet $(\\Omega, \\mathcal{A}, \\mathbb{P})$ où $\\Omega$ est l'ensemble des possibles, $\\mathcal{A}$ une $\\sigma$-algèbre de parties de $\\Omega$, et $\\mathbb{P}$ une probabilité sur $(\\Omega, \\mathcal{A})$."
  },
  {
    id: 2,
    question: "Une tribu $\\mathcal{A}$ sur $\\Omega$ est une collection de parties qui est :",
    options: [
      "Fermée par union dénombrable seulement",
      "Fermée par complémentaire seulement",
      "Fermée par union dénombrable et complémentaire",
      "Contenant $\\Omega$ seulement"
    ],
    correctAnswer: 2,
    explanation: "Une tribu est une collection de parties contenant $\\Omega$ et fermée par complémentaire et union dénombrable."
  },
  {
    id: 3,
    question: "La probabilité conditionnelle $\\mathbb{P}(A|B)$ est définie si :",
    options: [
      "$\\mathbb{P}(B) = 0$",
      "$\\mathbb{P}(B) > 0$",
      "$A \\cap B = \\emptyset$",
      "$A \\subset B$"
    ],
    correctAnswer: 1,
    explanation: "$\\mathbb{P}(A|B) = \\frac{\\mathbb{P}(A \\cap B)}{\\mathbb{P}(B)}$ est définie seulement si $\\mathbb{P}(B) > 0$."
  },
  {
    id: 4,
    question: "La formule des probabilités composées dit que :",
    options: [
      "$\\mathbb{P}(A \\cap B) = \\mathbb{P}(A) \\times \\mathbb{P}(B)$",
      "$\\mathbb{P}(A \\cap B) = \\mathbb{P}(A|B) \\times \\mathbb{P}(B)$",
      "$\\mathbb{P}(A \\cup B) = \\mathbb{P}(A) + \\mathbb{P}(B)$",
      "$\\mathbb{P}(A \\cup B) = \\mathbb{P}(A|B) \\times \\mathbb{P}(B)$"
    ],
    correctAnswer: 1,
    explanation: "$\\mathbb{P}(A \\cap B) = \\mathbb{P}(A|B) \\times \\mathbb{P}(B)$ quand $\\mathbb{P}(B) > 0$."
  },
  {
    id: 5,
    question: "Le théorème de Bayes s'écrit :",
    options: [
      "$\\mathbb{P}(A|B) = \\frac{\\mathbb{P}(B|A) \\times \\mathbb{P}(A)}{\\mathbb{P}(B)}$",
      "$\\mathbb{P}(A|B) = \\frac{\\mathbb{P}(B|A)}{\\mathbb{P}(A)}$",
      "$\\mathbb{P}(A|B) = \\mathbb{P}(B|A) \\times \\mathbb{P}(A)$",
      "$\\mathbb{P}(A|B) = \\frac{\\mathbb{P}(A)}{\\mathbb{P}(B)}$"
    ],
    correctAnswer: 0,
    explanation: "Le théorème de Bayes : $\\mathbb{P}(A|B) = \\frac{\\mathbb{P}(B|A) \\times \\mathbb{P}(A)}{\\mathbb{P}(B)}$."
  },
  {
    id: 6,
    question: "Si $A$ et $B$ sont indépendants, alors :",
    options: [
      "$\\mathbb{P}(A \\cap B) = 0$",
      "$\\mathbb{P}(A|B) = \\mathbb{P}(A)$",
      "$\\mathbb{P}(A|B) = 0$",
      "$\\mathbb{P}(A \\cap B) = 1$"
    ],
    correctAnswer: 1,
    explanation: "L'indépendance signifie que $\\mathbb{P}(A|B) = \\mathbb{P}(A)$ et $\\mathbb{P}(A \\cap B) = \\mathbb{P}(A) \\times \\mathbb{P}(B)$."
  },
  {
    id: 7,
    question: "La formule des probabilités totales pour une partition $(B_i)$ s'écrit :",
    options: [
      "$\\mathbb{P}(A) = \\sum \\mathbb{P}(B_i)$",
      "$\\mathbb{P}(A) = \\sum \\mathbb{P}(A|B_i) \\times \\mathbb{P}(B_i)$",
      "$\\mathbb{P}(A) = \\prod \\mathbb{P}(A|B_i)$",
      "$\\mathbb{P}(A) = \\mathbb{P}(A|B_1) + \\mathbb{P}(A|B_2)$"
    ],
    correctAnswer: 1,
    explanation: "Si $(B_i)$ est une partition, alors $\\mathbb{P}(A) = \\sum_i \\mathbb{P}(A \\cap B_i) = \\sum_i \\mathbb{P}(A|B_i) \\times \\mathbb{P}(B_i)$."
  },
  {
    id: 8,
    question: "Une variable aléatoire $X$ est une application :",
    options: [
      "$\\Omega \\to \\mathbb{R}$ seulement",
      "$\\Omega \\to \\mathbb{R}$ mesurable",
      "$\\mathbb{R} \\to \\Omega$",
      "$\\mathbb{R}^2 \\to \\mathbb{R}$"
    ],
    correctAnswer: 1,
    explanation: "Une variable aléatoire est une application mesurable $X: (\\Omega, \\mathcal{A}) \\to (\\mathbb{R}, \\mathcal{B}(\\mathbb{R}))$."
  },
  {
    id: 9,
    question: "La loi d'une variable aléatoire $X$ est :",
    options: [
      "Son espérance",
      "Sa variance",
      "La probabilité image $\\mathbb{P}_X$",
      "Son domaine de définition"
    ],
    correctAnswer: 2,
    explanation: "La loi de $X$ est la probabilité image $\\mathbb{P}_X(B) = \\mathbb{P}(\\omega \\in \\Omega : X(\\omega) \\in B)$."
  },
  {
    id: 10,
    question: "L'indépendance de deux variables aléatoires $X$ et $Y$ signifie que :",
    options: [
      "$\\mathbb{P}(X = x, Y = y) = \\mathbb{P}(X = x) \\times \\mathbb{P}(Y = y)$ pour tout $(x,y)$",
      "$\\mathbb{P}(X \\leq x, Y \\leq y) = \\mathbb{P}(X \\leq x) \\times \\mathbb{P}(Y \\leq y)$",
      "$\\mathbb{E}[XY] = \\mathbb{E}[X] \\times \\mathbb{E}[Y]$",
      "Toutes les réponses"
    ],
    correctAnswer: 3,
    explanation: "Pour des variables discrètes, l'indépendance équivaut à : $\\mathbb{P}(X = x, Y = y) = \\mathbb{P}(X = x) \\times \\mathbb{P}(Y = y)$, ce qui implique $\\mathbb{E}[XY] = \\mathbb{E}[X] \\times \\mathbb{E}[Y]$ et l'indépendance des fonctions de répartition."
  }
];

// Chapitre 17: Variables aléatoires discrètes & lois
export const chapitre17QuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Une variable aléatoire discrète $X$ prend ses valeurs dans :",
    options: [
      "Un ensemble fini ou dénombrable",
      "Un intervalle de $\\mathbb{R}$",
      "Tout $\\mathbb{R}$",
      "Un ensemble continu"
    ],
    correctAnswer: 0,
    explanation: "Une variable aléatoire discrète prend un nombre fini ou dénombrable de valeurs distinctes."
  },
  {
    id: 2,
    question: "La fonction de masse d'une variable aléatoire discrète $X$ vérifie :",
    options: [
      "$\\sum p_k = 1$ avec $p_k = \\mathbb{P}(X = x_k)$",
      "$\\sum p_k = 0$",
      "$\\int p(x) \\, dx = 1$",
      "$\\sum p_k = n$ où n est le nombre de valeurs"
    ],
    correctAnswer: 0,
    explanation: "La fonction de masse satisfait $\\sum_{k} \\mathbb{P}(X = x_k) = 1$ et chaque probabilité est positive."
  },
  {
    id: 3,
    question: "L'espérance d'une variable aléatoire discrète $X$ est :",
    options: [
      "$\\mathbb{E}[X] = \\sum x_k \\mathbb{P}(X = x_k)$",
      "$\\mathbb{E}[X] = \\sum \\mathbb{P}(X = x_k)$",
      "$\\mathbb{E}[X] = \\int x f(x) \\, dx$",
      "$\\mathbb{E}[X] = \\sum x_k$"
    ],
    correctAnswer: 0,
    explanation: "$\\mathbb{E}[X] = \\sum_{k} x_k \\mathbb{P}(X = x_k)$ pour une variable discrète."
  },
  {
    id: 4,
    question: "La variance d'une variable aléatoire discrète $X$ est :",
    options: [
      "$\\operatorname{Var}(X) = \\mathbb{E}[X^2]$",
      "$\\operatorname{Var}(X) = \\mathbb{E}[X^2] - (\\mathbb{E}[X])^2$",
      "$\\operatorname{Var}(X) = (\\mathbb{E}[X])^2$",
      "$\\operatorname{Var}(X) = \\mathbb{E}[X]$"
    ],
    correctAnswer: 1,
    explanation: "$\\operatorname{Var}(X) = \\mathbb{E}[X^2] - (\\mathbb{E}[X])^2$ pour toute variable aléatoire."
  },
  {
    id: 5,
    question: "Pour une loi de Bernoulli $\\mathcal{B}(p)$, l'espérance vaut :",
    options: ["$p$", "$p(1-p)$", "$\\sqrt{p(1-p)}$", "$1-p$"],
    correctAnswer: 0,
    explanation: "Pour $X \\sim \\mathcal{B}(p)$, $\\mathbb{E}[X] = p$ et $\\operatorname{Var}(X) = p(1-p)$."
  },
  {
    id: 6,
    question: "La loi binomiale $\\mathcal{B}(n,p)$ représente :",
    options: [
      "Le nombre de succès dans n épreuves indépendantes de même probabilité p",
      "Le nombre d'échecs avant le premier succès",
      "Le nombre d'épreuves nécessaires pour obtenir k succès",
      "Une loi continue"
    ],
    correctAnswer: 0,
    explanation: "$X \\sim \\mathcal{B}(n,p)$ compte le nombre de succès dans n épreuves de Bernoulli indépendantes."
  },
  {
    id: 7,
    question: "La loi géométrique $\\mathcal{G}(p)$ compte :",
    options: [
      "Le nombre de succès dans n épreuves",
      "Le nombre d'échecs avant le premier succès",
      "Le nombre d'épreuves nécessaires pour obtenir k succès",
      "Une loi avec mémoire"
    ],
    correctAnswer: 1,
    explanation: "$X \\sim \\mathcal{G}(p)$ compte le nombre d'échecs avant d'obtenir le premier succès."
  },
  {
    id: 8,
    question: "La loi de Poisson $\\mathcal{P}(\\lambda)$ est :",
    options: [
      "Une loi discrète avec espérance $\\lambda$",
      "Une loi continue",
      "Une loi de limite de la loi binomiale quand n→∞ et p→0 avec np=λ",
      "Toutes les réponses sauf la 2"
    ],
    correctAnswer: 3,
    explanation: "La loi de Poisson est discrète, a pour espérance $\\lambda$, et est la limite de $\\mathcal{B}(n,p)$ quand n→∞, p→0 avec np=λ."
  },
  {
    id: 9,
    question: "La loi hypergéométrique $\\mathcal{H}(N,K,n)$ est utilisée pour :",
    options: [
      "Les tirages sans remise",
      "Les tirages avec remise",
      "Les épreuves indépendantes",
      "Les lois continues"
    ],
    correctAnswer: 0,
    explanation: "La loi hypergéométrique modèle le nombre de succès dans un échantillon de taille n tiré sans remise d'une population de taille N contenant K succès."
  },
  {
    id: 10,
    question: "La loi uniforme discrète sur $\\{1,2,\\dots,n\\}$ a pour espérance :",
    options: [
      "$\\frac{n+1}{2}$",
      "$\\frac{n}{2}$",
      "$\\sqrt{n}$",
      "$\\frac{1}{n}$"
    ],
    correctAnswer: 0,
    explanation: "Pour $X$ uniforme sur $\\{1,2,\\dots,n\\}$, $\\mathbb{E}[X] = \\frac{1+2+\\dots+n}{n} = \\frac{n(n+1)/2}{n} = \\frac{n+1}{2}$."
  }
];

// Chapitre 18: Convergences & théorèmes limites
export const chapitre18QuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "La convergence presque sûre $X_n \\overset{\\text{p.s.}}{\\to} X$ signifie que :",
    options: [
      "$\\mathbb{P}(\\lim X_n = X) = 1$",
      "$\\lim \\mathbb{P}(|X_n - X| > \\varepsilon) = 0$ pour tout $\\varepsilon > 0$",
      "$\\lim \\mathbb{E}[|X_n - X|] = 0$",
      "$\\lim \\mathbb{E}[|X_n - X|^2] = 0$"
    ],
    correctAnswer: 0,
    explanation: "La convergence presque sûre signifie que $\\mathbb{P}(\\{\\omega : \\lim X_n(\\omega) = X(\\omega)\\}) = 1$."
  },
  {
    id: 2,
    question: "La convergence en probabilité $X_n \\overset{\\mathbb{P}}{\\to} X$ signifie que :",
    options: [
      "$\\mathbb{P}(\\lim X_n = X) = 1$",
      "$\\lim \\mathbb{P}(|X_n - X| > \\varepsilon) = 0$ pour tout $\\varepsilon > 0$",
      "$\\lim \\mathbb{E}[|X_n - X|] = 0$",
      "$\\lim \\mathbb{E}[|X_n - X|^2] = 0$"
    ],
    correctAnswer: 1,
    explanation: "$X_n \\overset{\\mathbb{P}}{\\to} X$ si $\\forall \\varepsilon > 0, \\lim \\mathbb{P}(|X_n - X| > \\varepsilon) = 0$."
  },
  {
    id: 3,
    question: "La convergence en moyenne quadratique $X_n \\overset{\\text{m.q.}}{\\to} X$ signifie que :",
    options: [
      "$\\mathbb{P}(\\lim X_n = X) = 1$",
      "$\\lim \\mathbb{P}(|X_n - X| > \\varepsilon) = 0$",
      "$\\lim \\mathbb{E}[|X_n - X|] = 0$",
      "$\\lim \\mathbb{E}[|X_n - X|^2] = 0$"
    ],
    correctAnswer: 3,
    explanation: "$X_n \\overset{\\text{m.q.}}{\\to} X$ si $\\lim \\mathbb{E}[|X_n - X|^2] = 0$."
  },
  {
    id: 4,
    question: "Laquelle des implications suivantes est vraie ?",
    options: [
      "Presque sûre $\\implies$ En probabilité $\\implies$ En loi",
      "En loi $\\implies$ En probabilité $\\implies$ Presque sûre",
      "En probabilité $\\implies$ Presque sûre $\\implies$ En loi",
      "En moyenne quadratique $\\implies$ Presque sûre $\\implies$ En loi"
    ],
    correctAnswer: 0,
    explanation: "L'ordre d'implication est : Presque sûre $\\implies$ En probabilité $\\implies$ En loi. La convergence en moyenne quadratique implique la convergence en probabilité."
  },
  {
    id: 5,
    question: "La loi faible des grands nombres affirme que :",
    options: [
      "$\\frac{1}{n} \\sum X_i \\overset{\\text{p.s.}}{\\to} \\mathbb{E}[X_1]$ pour des v.a. i.i.d.",
      "$\\frac{1}{n} \\sum X_i \\overset{\\mathbb{P}}{\\to} \\mathbb{E}[X_1]$ pour des v.a. i.i.d.",
      "$\\frac{S_n}{\\sqrt{n}} \\overset{\\mathcal{L}}{\\to} \\mathcal{N}(0, \\sigma^2)$",
      "$\\frac{1}{\\sqrt{n}} \\sum X_i \\overset{\\text{p.s.}}{\\to} 0$"
    ],
    correctAnswer: 1,
    explanation: "La loi faible des grands nombres dit que $\\frac{1}{n} \\sum_{i=1}^n X_i \\overset{\\mathbb{P}}{\\to} \\mathbb{E}[X_1]$ pour des variables i.i.d. intégrables."
  },
  {
    id: 6,
    question: "La loi forte des grands nombres affirme que :",
    options: [
      "$\\frac{1}{n} \\sum X_i \\overset{\\text{p.s.}}{\\to} \\mathbb{E}[X_1]$ pour des v.a. i.i.d.",
      "$\\frac{1}{n} \\sum X_i \\overset{\\mathbb{P}}{\\to} \\mathbb{E}[X_1]$ pour des v.a. i.i.d.",
      "$\\frac{S_n - n\\mu}{\\sqrt{n\\sigma^2}} \\overset{\\mathcal{L}}{\\to} \\mathcal{N}(0,1)$",
      "$\\frac{1}{\\sqrt{n}} \\sum X_i \\overset{\\text{p.s.}}{\\to} 0$"
    ],
    correctAnswer: 0,
    explanation: "La loi forte des grands nombres dit que $\\frac{1}{n} \\sum_{i=1}^n X_i \\overset{\\text{p.s.}}{\\to} \\mathbb{E}[X_1]$ pour des variables i.i.d. intégrables."
  },
  {
    id: 7,
    question: "Le théorème central limite affirme que :",
    options: [
      "$\\frac{1}{n} \\sum X_i \\overset{\\text{p.s.}}{\\to} \\mathbb{E}[X_1]$",
      "$\\frac{1}{n} \\sum X_i \\overset{\\mathbb{P}}{\\to} \\mathbb{E}[X_1]$",
      "$\\frac{S_n - n\\mu}{\\sqrt{n\\sigma^2}} \\overset{\\mathcal{L}}{\\to} \\mathcal{N}(0,1)$",
      "$\\frac{1}{\\sqrt{n}} \\sum X_i \\overset{\\text{p.s.}}{\\to} 0$"
    ],
    correctAnswer: 2,
    explanation: "Le TCL dit que $\\frac{S_n - n\\mu}{\\sqrt{n\\sigma^2}} \\overset{\\mathcal{L}}{\\to} \\mathcal{N}(0,1)$ pour des v.a. i.i.d. de moyenne $\\mu$ et variance $\\sigma^2$."
  },
  {
    id: 8,
    question: "Pour appliquer le théorème central limite, il faut que :",
    options: [
      "Les variables aient la même espérance",
      "Les variables soient indépendantes et de même loi",
      "Les variables soient de variance finie",
      "Toutes les réponses sauf la 1"
    ],
    correctAnswer: 3,
    explanation: "Le TCL s'applique à des variables i.i.d. (indépendantes de même loi) d'espérance et variance finies."
  },
  {
    id: 9,
    question: "La convergence en loi $X_n \\overset{\\mathcal{L}}{\\to} X$ signifie que :",
    options: [
      "$\\mathbb{P}(X_n \\leq x) \\to \\mathbb{P}(X \\leq x)$ pour tout x continu",
      "$\\mathbb{P}(\\lim X_n = X) = 1$",
      "$\\lim \\mathbb{P}(|X_n - X| > \\varepsilon) = 0$",
      "$\\lim \\mathbb{E}[|X_n - X|^2] = 0$"
    ],
    correctAnswer: 0,
    explanation: "$X_n \\overset{\\mathcal{L}}{\\to} X$ si $F_{X_n}(x) \\to F_X(x)$ en tout point de continuité de $F_X$."
  },
  {
    id: 10,
    question: "Le lemme de Slutsky concerne :",
    options: [
      "La convergence de fonctions continues",
      "La limite de sommes normalisées",
      "Les approximations d'intégrales",
      "Les convergences de séries"
    ],
    correctAnswer: 0,
    explanation: "Le lemme de Slutsky dit que si $X_n \\overset{\\mathcal{L}}{\\to} X$ et $Y_n \\overset{\\mathbb{P}}{\\to} c$, alors $g(X_n, Y_n) \\overset{\\mathcal{L}}{\\to} g(X, c)$ pour g continue."
  }
];

// Chapitre 13 - Estimation statistique avancée (2ème année)
export const chapitre13EstimationStatistiqueQuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Un estimateur sans biais vérifie :",
    options: ["E[θ̂] = θ", "V(θ̂) = 0", "θ̂ = θ", "E[θ̂] ≠ θ"],
    correctAnswer: 0,
    explanation: "Un estimateur est sans biais si son espérance égale le paramètre vrai."
  },
  {
    id: 2,
    question: "La variance minimale pour un estimateur sans biais est donnée par :",
    options: ["Le théorème de Gauss", "L'inégalité de Cramer-Rao", "Le théorème central limite", "La loi des grands nombres"],
    correctAnswer: 1,
    explanation: "La borne de Cramer-Rao donne la variance minimale pour les estimateurs sans biais."
  },
  {
    id: 3,
    question: "La méthode du maximum de vraisemblance maximise :",
    options: ["La variance", "La fonction de répartition", "La fonction de vraisemblance", "L'espérance"],
    correctAnswer: 2,
    explanation: "Le MV maximise L(θ|x) = f(x|θ)."
  },
  {
    id: 4,
    question: "Pour une loi normale N(μ,σ²), l'estimateur MV de μ est :",
    options: ["La médiane", "La moyenne empirique", "La variance empirique", "Le mode"],
    correctAnswer: 1,
    explanation: "Pour N(μ,σ²), la moyenne empirique est l'EMV de μ."
  },
  {
    id: 5,
    question: "Un intervalle de confiance au niveau 95% signifie :",
    options: ["P(θ ∈ IC) = 0.95", "P(θ ∈ IC) = 0.05", "IC contient θ dans 95% des cas", "IC contient θ dans 5% des cas"],
    correctAnswer: 2,
    explanation: "Un IC au niveau 1-α couvre le vrai paramètre dans 100(1-α)% des échantillons."
  },
  {
    id: 6,
    question: "Le test du χ² de Pearson teste :",
    options: ["L'égalité des moyennes", "L'ajustement à une loi", "L'indépendance", "La normalité"],
    correctAnswer: 1,
    explanation: "Le χ² teste l'ajustement d'une distribution observée à une distribution théorique."
  },
  {
    id: 7,
    question: "Le test de Student compare :",
    options: ["Deux proportions", "Deux moyennes", "Deux variances", "Deux médianes"],
    correctAnswer: 1,
    explanation: "Le test de Student compare les moyennes de deux échantillons gaussiens."
  },
  {
    id: 8,
    question: "La p-valeur représente :",
    options: ["La probabilité de l'hypothèse nulle", "La probabilité d'observer des données plus extrêmes", "Le niveau de signification", "La puissance du test"],
    correctAnswer: 1,
    explanation: "La p-valeur est P(données ≥ aussi extrêmes | H₀ vraie)."
  },
  {
    id: 9,
    question: "La puissance d'un test est :",
    options: ["P(rejeter H₀ | H₀ vraie)", "P(rejeter H₀ | H₁ vraie)", "P(accepter H₀ | H₁ vraie)", "P(accepter H₀ | H₀ vraie)"],
    correctAnswer: 1,
    explanation: "La puissance est la probabilité de rejeter H₀ quand H₁ est vraie."
  },
  {
    id: 10,
    question: "L'estimation bayésienne utilise :",
    options: ["Une priori sur θ", "Seulement les données", "La loi de θ connue", "L'inférence fréquentiste"],
    correctAnswer: 0,
    explanation: "Le bayésianisme combine une distribution priori avec les données via le théorème de Bayes."
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
  chapitre13: chapitre13SeriesNumeriquesQuizQuestions,
  chapitre14: chapitre14DeveloppementsLimitesQuizQuestions,
  chapitre15: chapitre15QuizQuestions,
  chapitre16: chapitre16QuizQuestions,
  chapitre17: chapitre17QuizQuestions,
  chapitre18: chapitre18QuizQuestions,
  chapitre46: chapitre46QuizQuestions,
  // Questions 2e année
  chapitre1Complements2e: chapitre1Complements2eQuizQuestions,
  chapitre2Endomorphismes2e: chapitre2Endomorphismes2eQuizQuestions,
  chapitre3AlgebreBilineaire2e: chapitre3AlgebreBilineaire2eQuizQuestions,
  chapitre4FonctionsMultivariees: chapitre4FonctionsMultivarieesQuizQuestions,
  chapitre5VariablesAleatoiresDensite: chapitre5VariablesAleatoiresDensiteQuizQuestions,
  chapitre6NupletsVariables: chapitre6NupletsVariablesQuizQuestions,
  chapitre7CoupleVariables: chapitre7CoupleVariablesQuizQuestions,
  chapitre9ReductionMatrices: chapitre9ReductionMatricesQuizQuestions,
  chapitre11OptimisationMultivariee: chapitre11OptimisationMultivarieeQuizQuestions,
  chapitre12ConvergencesApproximations: chapitre12ConvergencesApproximationsQuizQuestions,
  chapitre13EstimationStatistique: chapitre13EstimationStatistiqueQuizQuestions,
}; 