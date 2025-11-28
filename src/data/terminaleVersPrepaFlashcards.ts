import type { MathFlashcard } from '@/data/mathFlashcardsData';

// Chapitre 1: Calculs
export const calculsFlashcards: MathFlashcard[] = [
  {
    id: 1,
    front: 'Propriété des puissances',
    back: 'a^m × a^n = a^(m+n)',
    frontLatex: 'a^m \\times a^n = \\text{?}',
    backLatex: 'a^{m+n}',
    category: 'Puissances',
    chapter: 1,
    difficulty: 'facile'
  },
  {
    id: 2,
    front: 'Division de puissances',
    back: 'a^m ÷ a^n = a^(m-n) (pour a ≠ 0)',
    frontLatex: '\\frac{a^m}{a^n} = \\text{?}',
    backLatex: 'a^{m-n} \\text{ (pour } a \\neq 0\\text{)}',
    category: 'Puissances',
    chapter: 1,
    difficulty: 'facile'
  },
  {
    id: 3,
    front: 'Puissance de puissance',
    back: '(a^m)^n = a^(m × n)',
    frontLatex: '(a^m)^n = \\text{?}',
    backLatex: 'a^{m \\times n}',
    category: 'Puissances',
    chapter: 1,
    difficulty: 'facile'
  },
  {
    id: 4,
    front: 'Racine carrée',
    back: '√a × √b = √(a × b) (pour a, b ≥ 0)',
    frontLatex: '\\sqrt{a} \\times \\sqrt{b} = \\text{?}',
    backLatex: '\\sqrt{a \\times b} \\text{ (pour } a, b \\geq 0\\text{)}',
    category: 'Racines',
    chapter: 1,
    difficulty: 'moyen'
  },
  {
    id: 5,
    front: 'Factorisation x² - 1',
    back: 'x² - 1 = (x - 1)(x + 1)',
    frontLatex: 'x^2 - 1 = \\text{?}',
    backLatex: '(x - 1)(x + 1)',
    category: 'Factorisation',
    chapter: 1,
    difficulty: 'facile'
  },
  {
    id: 6,
    front: 'Identité remarquable (a+b)²',
    back: '(a+b)² = a² + 2ab + b²',
    frontLatex: '(a+b)^2 = \\text{?}',
    backLatex: 'a^2 + 2ab + b^2',
    category: 'Identités remarquables',
    chapter: 1,
    difficulty: 'facile'
  },
  {
    id: 7,
    front: 'Identité remarquable (a-b)²',
    back: '(a-b)² = a² - 2ab + b²',
    frontLatex: '(a-b)^2 = \\text{?}',
    backLatex: 'a^2 - 2ab + b^2',
    category: 'Identités remarquables',
    chapter: 1,
    difficulty: 'facile'
  },
  {
    id: 8,
    front: 'Identité remarquable a² - b²',
    back: 'a² - b² = (a - b)(a + b)',
    frontLatex: 'a^2 - b^2 = \\text{?}',
    backLatex: '(a - b)(a + b)',
    category: 'Identités remarquables',
    chapter: 1,
    difficulty: 'moyen'
  }
];

// Chapitre 2: Sommes, suites et produits
export const sommesSuitesProduitsFlashcards: MathFlashcard[] = [
  {
    id: 9,
    front: 'Somme des n premiers entiers',
    back: '∑(k=1 à n) k = n(n+1)/2',
    frontLatex: '\\sum_{k=1}^n k = \\text{?}',
    backLatex: '\\frac{n(n+1)}{2}',
    category: 'Sommes',
    chapter: 2,
    difficulty: 'moyen'
  },
  {
    id: 10,
    front: 'Somme des carrés des n premiers entiers',
    back: '∑(k=1 à n) k² = n(n+1)(2n+1)/6',
    frontLatex: '\\sum_{k=1}^n k^2 = \\text{?}',
    backLatex: '\\frac{n(n+1)(2n+1)}{6}',
    category: 'Sommes',
    chapter: 2,
    difficulty: 'difficile'
  },
  {
    id: 11,
    front: 'Somme des cubes des n premiers entiers',
    back: '∑(k=1 à n) k³ = [n(n+1)/2]²',
    frontLatex: '\\sum_{k=1}^n k^3 = \\text{?}',
    backLatex: '\\left(\\frac{n(n+1)}{2}\\right)^2',
    category: 'Sommes',
    chapter: 2,
    difficulty: 'difficile'
  },
  {
    id: 12,
    front: 'Suite arithmétique - terme général',
    back: 'uₙ = u₁ + (n-1)r',
    frontLatex: 'u_n = \\text{?}',
    backLatex: 'u_1 + (n-1)r',
    category: 'Suites arithmétiques',
    chapter: 2,
    difficulty: 'moyen'
  },
  {
    id: 13,
    front: 'Suite arithmétique - somme des n premiers termes',
    back: 'Sₙ = n/2 × (u₁ + uₙ) = n/2 × (2u₁ + (n-1)r)',
    frontLatex: 'S_n = \\text{?}',
    backLatex: '\\frac{n}{2} (u_1 + u_n) = \\frac{n}{2} (2u_1 + (n-1)r)',
    category: 'Suites arithmétiques',
    chapter: 2,
    difficulty: 'difficile'
  },
  {
    id: 14,
    front: 'Suite géométrique - terme général',
    back: 'uₙ = u₁ × q^(n-1)',
    frontLatex: 'u_n = \\text{?}',
    backLatex: 'u_1 \\times q^{n-1}',
    category: 'Suites géométriques',
    chapter: 2,
    difficulty: 'moyen'
  },
  {
    id: 15,
    front: 'Suite géométrique - somme (q ≠ 1)',
    back: 'Sₙ = u₁ × (1 - qⁿ)/(1 - q)',
    frontLatex: 'S_n = \\text{?} \\text{ (q ≠ 1)}',
    backLatex: 'u_1 \\frac{1 - q^n}{1 - q}',
    category: 'Suites géométriques',
    chapter: 2,
    difficulty: 'difficile'
  },
  {
    id: 16,
    front: 'Produit factorielle',
    back: 'n! = 1 × 2 × ⋯ × n = ∏(k=1 à n) k',
    frontLatex: 'n! = \\text{?}',
    backLatex: '\\prod_{k=1}^n k',
    category: 'Produits',
    chapter: 2,
    difficulty: 'moyen'
  }
];

// Chapitre 3: Suites
export const suitesFlashcards: MathFlashcard[] = [
  {
    id: 17,
    front: 'Définition d\'une suite',
    back: 'Une suite est une fonction définie sur $\\mathbb{N}$ (ou un sous-ensemble de $\\mathbb{N}$) à valeurs dans $\\mathbb{R}$.',
    difficulty: 'facile',
    category: 'Suites',
    chapter: 3
  },
  {
    id: 18,
    front: 'Suite arithmétique',
    back: 'Suite où la différence entre deux termes consécutifs est constante (raison r).',
    difficulty: 'facile',
    category: 'Suites',
    chapter: 3
  },
  {
    id: 19,
    front: 'Suite géométrique',
    back: 'Suite où le quotient entre deux termes consécutifs est constant (raison q).',
    difficulty: 'facile',
    category: 'Suites',
    chapter: 3
  },
  {
    id: 20,
    front: 'Limite d\'une suite',
    back: '$\\lim_{n \\to +\\infty} u_n = L$ si pour tout $\\epsilon > 0$, il existe N tel que $|u_n - L| < \\epsilon$ pour n > N.',
    difficulty: 'difficile',
    category: 'Suites',
    chapter: 3
  },
  {
    id: 21,
    front: 'Suite convergente',
    back: 'Une suite qui admet une limite finie.',
    difficulty: 'moyen',
    category: 'Suites',
    chapter: 3
  },
  {
    id: 22,
    front: 'Suite divergente',
    back: 'Une suite qui tend vers +∞, -∞ ou qui n\'admet pas de limite.',
    difficulty: 'moyen',
    category: 'Suites',
    chapter: 3
  },
  {
    id: 23,
    front: 'Théorème des gendarmes',
    back: 'Si $u_n \\leq v_n \\leq w_n$ et $\\lim u_n = \\lim w_n = L$, alors $\\lim v_n = L$.',
    difficulty: 'difficile',
    category: 'Suites',
    chapter: 3
  },
  {
    id: 24,
    front: 'Opérations sur les limites',
    back: '$\\lim (u_n + v_n) = \\lim u_n + \\lim v_n$<br>$\\lim (u_n \\times v_n) = \\lim u_n \\times \\lim v_n$<br>$\\lim (\\frac{u_n}{v_n}) = \\frac{\\lim u_n}{\\lim v_n}$ si $\\lim v_n \\neq 0$',
    difficulty: 'difficile',
    category: 'Suites',
    chapter: 3
  }
];

// Chapitre 4: Fonctions
export const fonctionsFlashcards: MathFlashcard[] = [
  {
    id: 25,
    front: 'Dérivée de $x^n$',
    back: '$(x^n)\' = n x^{n-1}$',
    difficulty: 'facile',
    category: 'Dérivation',
    chapter: 4
  },
  {
    id: 26,
    front: 'Dérivée de $\\sin(x)$',
    back: '$(\\sin(x))\' = \\cos(x)$',
    difficulty: 'facile',
    category: 'Dérivation',
    chapter: 4
  },
  {
    id: 27,
    front: 'Dérivée de $\\cos(x)$',
    back: '$(\\cos(x))\' = -\\sin(x)$',
    difficulty: 'facile',
    category: 'Dérivation',
    chapter: 4
  },
  {
    id: 28,
    front: 'Dérivée de $e^x$',
    back: '$(e^x)\' = e^x$',
    difficulty: 'facile',
    category: 'Dérivation',
    chapter: 4
  },
  {
    id: 29,
    front: 'Dérivée de $\\ln(x)$',
    back: '$(\\ln(x))\' = \\frac{1}{x}$ pour $x > 0$',
    difficulty: 'facile',
    category: 'Dérivation',
    chapter: 4
  },
  {
    id: 30,
    front: 'Condition nécessaire d\'extremum',
    back: 'Si f admet un extremum local en a, alors f\'(a) = 0.',
    difficulty: 'moyen',
    category: 'Extremums',
    chapter: 4
  },
  {
    id: 31,
    front: 'Condition suffisante d\'extremum (test de la dérivée seconde)',
    back: 'Si f\'(a) = 0 et f\'\'(a) > 0, alors minimum local.<br>Si f\'(a) = 0 et f\'\'(a) < 0, alors maximum local.',
    difficulty: 'difficile',
    category: 'Extremums',
    chapter: 4
  },
  {
    id: 32,
    front: 'Primitive d\'une fonction',
    back: 'Une primitive de f est une fonction F telle que F\' = f.',
    difficulty: 'moyen',
    category: 'Primitives',
    chapter: 4
  }
];

// Chapitre 5: Dérivées
export const deriveesFlashcards: MathFlashcard[] = [
  {
    id: 33,
    front: 'Règle de dérivation en chaîne',
    back: '$(f \\circ g)\'(x) = f\'(g(x)) \\times g\'(x)$',
    difficulty: 'difficile',
    category: 'Règles',
    chapter: 5
  },
  {
    id: 34,
    front: 'Dérivée d\'un produit',
    back: '$(u \\times v)\' = u\'v + uv\'$',
    difficulty: 'moyen',
    category: 'Règles',
    chapter: 5
  },
  {
    id: 35,
    front: 'Dérivée d\'un quotient',
    back: '$\\left(\\frac{u}{v}\\right)\' = \\frac{u\'v - uv\'}{v^2}$ si $v \\neq 0$',
    difficulty: 'difficile',
    category: 'Règles',
    chapter: 5
  },
  {
    id: 36,
    front: 'Dérivée de $\\tan(x)$',
    back: '$(\\tan(x))\' = \\frac{1}{\\cos^2(x)} = 1 + \\tan^2(x)$',
    difficulty: 'moyen',
    category: 'Trigonométrie',
    chapter: 5
  },
  {
    id: 37,
    front: 'Dérivée de fonctions composées',
    back: '$(\\ln(u))\' = \\frac{u\'}{u}$<br>$(e^u)\' = e^u u\'$<br>$(u^v)\' = u^v (v\' \\ln u + \\frac{v u\'}{u})$',
    difficulty: 'difficile',
    category: 'Fonctions composées',
    chapter: 5
  },
  {
    id: 38,
    front: 'Dérivée de fonctions réciproques',
    back: '$(\\arcsin(x))\' = \\frac{1}{\\sqrt{1-x^2}}$<br>$(\\arccos(x))\' = -\\frac{1}{\\sqrt{1-x^2}}$<br>$(\\arctan(x))\' = \\frac{1}{1+x^2}$',
    difficulty: 'difficile',
    category: 'Trigonométrie inverse',
    chapter: 5
  },
  {
    id: 39,
    front: 'Règle de l\'hospital',
    back: 'Pour des formes indéterminées $\\frac{0}{0}$ ou $\\frac{\\infty}{\\infty}$ : $\\lim \\frac{f(x)}{g(x)} = \\lim \\frac{f\'(x)}{g\'(x)}$',
    difficulty: 'difficile',
    category: 'Limites',
    chapter: 5
  },
  {
    id: 40,
    front: 'Équation différentielle',
    back: 'Équation de la forme $y\' = f(x,y)$ ou plus généralement $F(x,y,y\') = 0$',
    difficulty: 'moyen',
    category: 'Équations différentielles',
    chapter: 5
  }
];

// Chapitre 6: Intégrale
export const integraleFlashcards: MathFlashcard[] = [
  {
    id: 41,
    front: 'Théorème fondamental de l\'analyse',
    back: 'Si F est une primitive de f sur [a,b], alors $\\int_a^b f(x) \\, dx = F(b) - F(a)$',
    difficulty: 'difficile',
    category: 'Théorie',
    chapter: 6
  },
  {
    id: 42,
    front: 'Primitives usuelles',
    back: '$\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$ (n ≠ -1)<br>$\\int \\frac{1}{x} \\, dx = \\ln|x| + C$<br>$\\int e^x \\, dx = e^x + C$',
    difficulty: 'moyen',
    category: 'Primitives',
    chapter: 6
  },
  {
    id: 43,
    front: 'Primitives trigonométriques',
    back: '$\\int \\sin(x) \\, dx = -\\cos(x) + C$<br>$\\int \\cos(x) \\, dx = \\sin(x) + C$<br>$\\int \\sec^2(x) \\, dx = \\tan(x) + C$',
    difficulty: 'moyen',
    category: 'Primitives',
    chapter: 6
  },
  {
    id: 44,
    front: 'Intégration par parties',
    back: '$\\int u \\, dv = uv - \\int v \\, du$',
    difficulty: 'difficile',
    category: 'Méthodes',
    chapter: 6
  },
  {
    id: 45,
    front: 'Changement de variable',
    back: 'Si $x = g(t)$, alors $\\int f(g(t)) g\'(t) \\, dt = \\int f(x) \\, dx$',
    difficulty: 'difficile',
    category: 'Méthodes',
    chapter: 6
  },
  {
    id: 46,
    front: 'Intégrales définies',
    back: 'Aire algébrique sous la courbe f entre a et b : $\\int_a^b f(x) \\, dx$',
    difficulty: 'moyen',
    category: 'Définies',
    chapter: 6
  },
  {
    id: 47,
    front: 'Propriétés des intégrales',
    back: '$\\int_a^b f(x) \\, dx = -\\int_b^a f(x) \\, dx$<br>$\\int_a^b f(x) \\, dx = \\int_a^c f(x) \\, dx + \\int_c^b f(x) \\, dx$<br>$\\int_a^b (f+g)(x) \\, dx = \\int_a^b f(x) \\, dx + \\int_a^b g(x) \\, dx$',
    difficulty: 'moyen',
    category: 'Propriétés',
    chapter: 6
  },
  {
    id: 48,
    front: 'Valeur moyenne',
    back: 'Il existe c ∈ [a,b] tel que $\\int_a^b f(x) \\, dx = f(c)(b-a)$',
    difficulty: 'difficile',
    category: 'Théorèmes',
    chapter: 6
  }
];

// Mapping pour tous les chapitres
export const terminaleVersPrepaFlashcards: Record<string, MathFlashcard[]> = {
  'calculs': calculsFlashcards,
  'sommes-suites-produits': sommesSuitesProduitsFlashcards,
  'suites': suitesFlashcards,
  'fonctions': fonctionsFlashcards,
  'derivées': deriveesFlashcards,
  'integrale': integraleFlashcards,
  // Ajouter les autres chapitres au besoin
};
