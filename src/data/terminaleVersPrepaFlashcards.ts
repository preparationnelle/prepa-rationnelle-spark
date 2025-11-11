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
    id: 'suites-1',
    front: 'Définition d\'une suite',
    back: 'Une suite est une fonction définie sur $\\mathbb{N}$ (ou un sous-ensemble de $\\mathbb{N}$) à valeurs dans $\\mathbb{R}$.',
    difficulty: 'easy',
    category: 'Suites'
  },
  {
    id: 'suites-2',
    front: 'Suite arithmétique',
    back: 'Suite où la différence entre deux termes consécutifs est constante (raison r).',
    difficulty: 'easy',
    category: 'Suites'
  },
  {
    id: 'suites-3',
    front: 'Suite géométrique',
    back: 'Suite où le quotient entre deux termes consécutifs est constant (raison q).',
    difficulty: 'easy',
    category: 'Suites'
  },
  {
    id: 'suites-4',
    front: 'Limite d\'une suite',
    back: '$\\lim_{n \\to +\\infty} u_n = L$ si pour tout $\\epsilon > 0$, il existe N tel que $|u_n - L| < \\epsilon$ pour n > N.',
    difficulty: 'hard',
    category: 'Suites'
  },
  {
    id: 'suites-5',
    front: 'Suite convergente',
    back: 'Une suite qui admet une limite finie.',
    difficulty: 'medium',
    category: 'Suites'
  },
  {
    id: 'suites-6',
    front: 'Suite divergente',
    back: 'Une suite qui tend vers +∞, -∞ ou qui n\'admet pas de limite.',
    difficulty: 'medium',
    category: 'Suites'
  },
  {
    id: 'suites-7',
    front: 'Théorème des gendarmes',
    back: 'Si $u_n \\leq v_n \\leq w_n$ et $\\lim u_n = \\lim w_n = L$, alors $\\lim v_n = L$.',
    difficulty: 'hard',
    category: 'Suites'
  },
  {
    id: 'suites-8',
    front: 'Opérations sur les limites',
    back: '$\\lim (u_n + v_n) = \\lim u_n + \\lim v_n$<br>$\\lim (u_n \\times v_n) = \\lim u_n \\times \\lim v_n$<br>$\\lim (\\frac{u_n}{v_n}) = \\frac{\\lim u_n}{\\lim v_n}$ si $\\lim v_n \\neq 0$',
    difficulty: 'hard',
    category: 'Suites'
  }
];

// Chapitre 4: Fonctions
export const fonctionsFlashcards: MathFlashcard[] = [
  {
    id: 'fonctions-1',
    front: 'Dérivée de $x^n$',
    back: '$(x^n)\' = n x^{n-1}$',
    difficulty: 'easy',
    category: 'Dérivation'
  },
  {
    id: 'fonctions-2',
    front: 'Dérivée de $\\sin(x)$',
    back: '$(\\sin(x))\' = \\cos(x)$',
    difficulty: 'easy',
    category: 'Dérivation'
  },
  {
    id: 'fonctions-3',
    front: 'Dérivée de $\\cos(x)$',
    back: '$(\\cos(x))\' = -\\sin(x)$',
    difficulty: 'easy',
    category: 'Dérivation'
  },
  {
    id: 'fonctions-4',
    front: 'Dérivée de $e^x$',
    back: '$(e^x)\' = e^x$',
    difficulty: 'easy',
    category: 'Dérivation'
  },
  {
    id: 'fonctions-5',
    front: 'Dérivée de $\\ln(x)$',
    back: '$(\\ln(x))\' = \\frac{1}{x}$ pour $x > 0$',
    difficulty: 'easy',
    category: 'Dérivation'
  },
  {
    id: 'fonctions-6',
    front: 'Condition nécessaire d\'extremum',
    back: 'Si f admet un extremum local en a, alors f\'(a) = 0.',
    difficulty: 'medium',
    category: 'Extremums'
  },
  {
    id: 'fonctions-7',
    front: 'Condition suffisante d\'extremum (test de la dérivée seconde)',
    back: 'Si f\'(a) = 0 et f\'\'(a) > 0, alors minimum local.<br>Si f\'(a) = 0 et f\'\'(a) < 0, alors maximum local.',
    difficulty: 'hard',
    category: 'Extremums'
  },
  {
    id: 'fonctions-8',
    front: 'Primitive d\'une fonction',
    back: 'Une primitive de f est une fonction F telle que F\' = f.',
    difficulty: 'medium',
    category: 'Primitives'
  }
];

// Chapitre 5: Dérivées
export const deriveesFlashcards: MathFlashcard[] = [
  {
    id: 'deriv-1',
    front: 'Règle de dérivation en chaîne',
    back: '$(f \\circ g)\'(x) = f\'(g(x)) \\times g\'(x)$',
    difficulty: 'hard',
    category: 'Règles'
  },
  {
    id: 'deriv-2',
    front: 'Dérivée d\'un produit',
    back: '$(u \\times v)\' = u\'v + uv\'$',
    difficulty: 'medium',
    category: 'Règles'
  },
  {
    id: 'deriv-3',
    front: 'Dérivée d\'un quotient',
    back: '$\\left(\\frac{u}{v}\\right)\' = \\frac{u\'v - uv\'}{v^2}$ si $v \\neq 0$',
    difficulty: 'hard',
    category: 'Règles'
  },
  {
    id: 'deriv-4',
    front: 'Dérivée de $\\tan(x)$',
    back: '$(\\tan(x))\' = \\frac{1}{\\cos^2(x)} = 1 + \\tan^2(x)$',
    difficulty: 'medium',
    category: 'Trigonométrie'
  },
  {
    id: 'deriv-5',
    front: 'Dérivée de fonctions composées',
    back: '$(\\ln(u))\' = \\frac{u\'}{u}$<br>$(e^u)\' = e^u u\'$<br>$(u^v)\' = u^v (v\' \\ln u + \\frac{v u\'}{u})$',
    difficulty: 'hard',
    category: 'Fonctions composées'
  },
  {
    id: 'deriv-6',
    front: 'Dérivée de fonctions réciproques',
    back: '$(\\arcsin(x))\' = \\frac{1}{\\sqrt{1-x^2}}$<br>$(\\arccos(x))\' = -\\frac{1}{\\sqrt{1-x^2}}$<br>$(\\arctan(x))\' = \\frac{1}{1+x^2}$',
    difficulty: 'hard',
    category: 'Trigonométrie inverse'
  },
  {
    id: 'deriv-7',
    front: 'Règle de l\'hospital',
    back: 'Pour des formes indéterminées $\\frac{0}{0}$ ou $\\frac{\\infty}{\\infty}$ : $\\lim \\frac{f(x)}{g(x)} = \\lim \\frac{f\'(x)}{g\'(x)}$',
    difficulty: 'hard',
    category: 'Limites'
  },
  {
    id: 'deriv-8',
    front: 'Équation différentielle',
    back: 'Équation de la forme $y\' = f(x,y)$ ou plus généralement $F(x,y,y\') = 0$',
    difficulty: 'medium',
    category: 'Équations différentielles'
  }
];

// Chapitre 6: Intégrale
export const integraleFlashcards: MathFlashcard[] = [
  {
    id: 'int-1',
    front: 'Théorème fondamental de l\'analyse',
    back: 'Si F est une primitive de f sur [a,b], alors $\\int_a^b f(x) \\, dx = F(b) - F(a)$',
    difficulty: 'hard',
    category: 'Théorie'
  },
  {
    id: 'int-2',
    front: 'Primitives usuelles',
    back: '$\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C$ (n ≠ -1)<br>$\\int \\frac{1}{x} \\, dx = \\ln|x| + C$<br>$\\int e^x \\, dx = e^x + C$',
    difficulty: 'medium',
    category: 'Primitives'
  },
  {
    id: 'int-3',
    front: 'Primitives trigonométriques',
    back: '$\\int \\sin(x) \\, dx = -\\cos(x) + C$<br>$\\int \\cos(x) \\, dx = \\sin(x) + C$<br>$\\int \\sec^2(x) \\, dx = \\tan(x) + C$',
    difficulty: 'medium',
    category: 'Primitives'
  },
  {
    id: 'int-4',
    front: 'Intégration par parties',
    back: '$\\int u \\, dv = uv - \\int v \\, du$',
    difficulty: 'hard',
    category: 'Méthodes'
  },
  {
    id: 'int-5',
    front: 'Changement de variable',
    back: 'Si $x = g(t)$, alors $\\int f(g(t)) g\'(t) \\, dt = \\int f(x) \\, dx$',
    difficulty: 'hard',
    category: 'Méthodes'
  },
  {
    id: 'int-6',
    front: 'Intégrales définies',
    back: 'Aire algébrique sous la courbe f entre a et b : $\\int_a^b f(x) \\, dx$',
    difficulty: 'medium',
    category: 'Définies'
  },
  {
    id: 'int-7',
    front: 'Propriétés des intégrales',
    back: '$\\int_a^b f(x) \\, dx = -\\int_b^a f(x) \\, dx$<br>$\\int_a^b f(x) \\, dx = \\int_a^c f(x) \\, dx + \\int_c^b f(x) \\, dx$<br>$\\int_a^b (f+g)(x) \\, dx = \\int_a^b f(x) \\, dx + \\int_a^b g(x) \\, dx$',
    difficulty: 'medium',
    category: 'Propriétés'
  },
  {
    id: 'int-8',
    front: 'Valeur moyenne',
    back: 'Il existe c ∈ [a,b] tel que $\\int_a^b f(x) \\, dx = f(c)(b-a)$',
    difficulty: 'hard',
    category: 'Théorèmes'
  }
];

// Mapping pour tous les chapitres
export const terminaleVersPrepaFlashcards: Record<string, Flashcard[]> = {
  'calculs': calculsFlashcards,
  'sommes-suites-produits': sommesSuitesProduitsFlashcards,
  'suites': suitesFlashcards,
  'fonctions': fonctionsFlashcards,
  'derivées': deriveesFlashcards,
  'integrale': integraleFlashcards,
  // Ajouter les autres chapitres au besoin
};
