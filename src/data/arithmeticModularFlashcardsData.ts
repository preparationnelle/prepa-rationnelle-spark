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

// Flashcards pour le chapitre 12 - Arithmétique modulaire et Cryptographie affine
export const arithmeticModularFlashcards: MathFlashcard[] = [
  // DÉFINITIONS FONDAMENTALES
  {
    id: 1,
    front: "Définition de la divisibilité",
    back: "Un entier a divise b, noté a|b, s'il existe un entier k tel que b = a × k.",
    frontLatex: "a \\mid b \\Leftrightarrow \\text{?}",
    backLatex: "\\exists k \\in \\mathbb{Z}, \\quad b = a \\times k",
    category: "Définitions",
    chapter: 12,
    difficulty: "facile"
  },
  {
    id: 2,
    front: "Division euclidienne",
    back: "Pour tous entiers a et b > 0, il existe des entiers uniques q et r tels que a = bq + r avec 0 ≤ r < b.",
    frontLatex: "\\forall a \\in \\mathbb{Z}, \\forall b > 0, \\quad a = \\text{?}",
    backLatex: "a = bq + r \\quad 0 \\leq r < b \\quad (q, r \\text{ uniques})",
    category: "Définitions",
    chapter: 12,
    difficulty: "facile"
  },
  {
    id: 3,
    front: "Définition d'un nombre premier",
    back: "Un entier p > 1 est premier s'il n'est divisible que par 1 et lui-même.",
    frontLatex: "p \\text{ premier} \\Leftrightarrow \\text{?}",
    backLatex: "p > 1 \\text{ et diviseurs : } 1 \\text{ et } p \\text{ seulement}",
    category: "Définitions",
    chapter: 12,
    difficulty: "facile"
  },
  {
    id: 4,
    front: "Théorème de Gauss",
    back: "Si p est premier et p divise ab, alors p divise a ou p divise b.",
    frontLatex: "p \\text{ premier}, \\quad p \\mid ab \\Rightarrow \\text{?}",
    backLatex: "p \\mid a \\quad \\text{ou} \\quad p \\mid b",
    category: "Théorèmes",
    chapter: 12,
    difficulty: "moyen"
  },
  {
    id: 5,
    front: "PGCD de deux nombres",
    back: "Le plus grand commun diviseur de a et b est le plus grand entier qui divise à la fois a et b.",
    frontLatex: "\\gcd(a,b) = \\text{?}",
    backLatex: "\\max \\{ d \\in \\mathbb{N} \\mid d \\mid a \\text{ et } d \\mid b \\}",
    category: "Définitions",
    chapter: 12,
    difficulty: "facile"
  },
  {
    id: 6,
    front: "Nombres premiers entre eux",
    back: "Deux entiers sont premiers entre eux si leur PGCD vaut 1.",
    frontLatex: "a, b \\text{ premiers entre eux} \\Leftrightarrow \\text{?}",
    backLatex: "\\gcd(a,b) = 1",
    category: "Définitions",
    chapter: 12,
    difficulty: "facile"
  },

  // CONGRUENCES
  {
    id: 7,
    front: "Définition de la congruence modulo n",
    back: "a est congru à b modulo n, noté a ≡ b mod n, si n divise (a - b).",
    frontLatex: "a \\equiv b \\pmod{n} \\Leftrightarrow \\text{?}",
    backLatex: "n \\mid (a - b)",
    category: "Congruences",
    chapter: 12,
    difficulty: "facile"
  },
  {
    id: 8,
    front: "Propriétés des congruences - Addition",
    back: "Si a ≡ b mod n et c ≡ d mod n, alors a + c ≡ b + d mod n.",
    frontLatex: "a \\equiv b \\pmod{n}, \\quad c \\equiv d \\pmod{n} \\Rightarrow \\text{?}",
    backLatex: "a + c \\equiv b + d \\pmod{n}",
    category: "Propriétés",
    chapter: 12,
    difficulty: "facile"
  },
  {
    id: 9,
    front: "Propriétés des congruences - Multiplication",
    back: "Si a ≡ b mod n et c ≡ d mod n, alors a × c ≡ b × d mod n.",
    frontLatex: "a \\equiv b \\pmod{n}, \\quad c \\equiv d \\pmod{n} \\Rightarrow \\text{?}",
    backLatex: "a \\times c \\equiv b \\times d \\pmod{n}",
    category: "Propriétés",
    chapter: 12,
    difficulty: "facile"
  },
  {
    id: 10,
    front: "Propriétés des congruences - Puissance",
    back: "Si a ≡ b mod n, alors a^k ≡ b^k mod n pour tout entier k.",
    frontLatex: "a \\equiv b \\pmod{n} \\Rightarrow \\text{?}",
    backLatex: "a^k \\equiv b^k \\pmod{n} \\quad \\forall k \\in \\mathbb{N}",
    category: "Propriétés",
    chapter: 12,
    difficulty: "moyen"
  },

  // INVERS MODULAIRE
  {
    id: 11,
    front: "Définition d'un inverse modulaire",
    back: "L'inverse de a modulo n est un entier b tel que a × b ≡ 1 mod n.",
    frontLatex: "b \\text{ inverse de } a \\pmod{n} \\Leftrightarrow \\text{?}",
    backLatex: "a \\times b \\equiv 1 \\pmod{n}",
    category: "Inverses modulaires",
    chapter: 12,
    difficulty: "facile"
  },
  {
    id: 12,
    front: "Condition d'existence d'un inverse",
    back: "a admet un inverse modulo n si et seulement si gcd(a, n) = 1.",
    frontLatex: "a^{-1} \\pmod{n} \\text{ existe} \\Leftrightarrow \\text{?}",
    backLatex: "\\gcd(a,n) = 1",
    category: "Inverses modulaires",
    chapter: 12,
    difficulty: "moyen"
  },
  {
    id: 13,
    front: "Algorithme d'Euclide étendu",
    back: "Permet de trouver des entiers x, y tels que a×x + n×y = gcd(a,n).",
    frontLatex: "\\text{Euclide étendu donne } \\text{?}",
    backLatex: "x, y \\in \\mathbb{Z} \\quad a x + n y = \\gcd(a,n)",
    category: "Algorithmes",
    chapter: 12,
    difficulty: "moyen"
  },

  // CRYPTOGRAPHIE AFFINE
  {
    id: 14,
    front: "Chiffrement affine - Principe",
    back: "Le chiffrement affine transforme chaque lettre x en E(x) = (a×x + b) mod 26.",
    frontLatex: "E(x) = \\text{?}",
    backLatex: "E(x) = (a x + b) \\pmod{26}",
    category: "Cryptographie",
    chapter: 12,
    difficulty: "facile"
  },
  {
    id: 15,
    front: "Déchiffrement affine",
    back: "Le déchiffrement affine utilise D(y) = a⁻¹(y - b) mod 26.",
    frontLatex: "D(y) = \\text{?}",
    backLatex: "D(y) = a^{-1} (y - b) \\pmod{26}",
    category: "Cryptographie",
    chapter: 12,
    difficulty: "moyen"
  },
  {
    id: 16,
    front: "Condition pour le chiffrement affine",
    back: "Pour que le chiffrement affine fonctionne, a doit être premier avec 26, c'est-à-dire gcd(a, 26) = 1.",
    frontLatex: "\\text{Pour E(x) affine, } \\gcd(a, 26) = \\text{?}",
    backLatex: "\\gcd(a, 26) = 1",
    category: "Cryptographie",
    chapter: 12,
    difficulty: "moyen"
  },

  // APPLICATIONS EN CYBERSÉCURITÉ
  {
    id: 17,
    front: "RSA - Génération des clés",
    back: "Choisir p, q premiers, calculer n = p×q et φ(n) = (p-1)(q-1), puis choisir e premier avec φ(n) et calculer d = e⁻¹ mod φ(n).",
    frontLatex: "\\text{Clés RSA : } \\text{?}",
    backLatex: "n = p q, \\quad \\varphi(n) = (p-1)(q-1), \\quad d \\equiv e^{-1} \\pmod{\\varphi(n)}",
    category: "RSA",
    chapter: 12,
    difficulty: "difficile"
  },
  {
    id: 18,
    front: "RSA - Chiffrement",
    back: "Pour chiffrer un message M avec la clé publique (e, n) : C = M^e mod n.",
    frontLatex: "\\text{Chiffrement RSA : } C = \\text{?}",
    backLatex: "C \\equiv M^e \\pmod{n}",
    category: "RSA",
    chapter: 12,
    difficulty: "moyen"
  },
  {
    id: 19,
    front: "RSA - Déchiffrement",
    back: "Pour déchiffrer C avec la clé privée (d, n) : M = C^d mod n.",
    frontLatex: "\\text{Déchiffrement RSA : } M = \\text{?}",
    backLatex: "M \\equiv C^d \\pmod{n}",
    category: "RSA",
    chapter: 12,
    difficulty: "moyen"
  },
  {
    id: 20,
    front: "Diffie-Hellman - Échange de clés",
    back: "Alice et Bob conviennent de p premier et g générateur. Alice calcule A = g^a mod p, Bob calcule B = g^b mod p. La clé partagée est K = B^a mod p = A^b mod p.",
    frontLatex: "\\text{Clé partagée Diffie-Hellman : } K = \\text{?}",
    backLatex: "K = B^a \\pmod{p} = A^b \\pmod{p}",
    category: "Diffie-Hellman",
    chapter: 12,
    difficulty: "difficile"
  },

  // EXERCICES CLASSIQUES
  {
    id: 21,
    front: "Calcul de reste : 17 ÷ 5",
    back: "17 = 5×3 + 2, donc reste = 2.",
    frontLatex: "17 \\div 5 = \\text{?}",
    backLatex: "17 = 5 \\times 3 + 2 \\quad \\text{reste } 2",
    category: "Calculs",
    chapter: 12,
    difficulty: "facile"
  },
  {
    id: 22,
    front: "Inverse de 3 modulo 7",
    back: "3×5 = 15 ≡ 1 mod 7, donc l'inverse de 3 est 5.",
    frontLatex: "3^{-1} \\pmod{7} = \\text{?}",
    backLatex: "3 \\times 5 = 15 \\equiv 1 \\pmod{7} \\quad \\Rightarrow \\quad 3^{-1} \\equiv 5 \\pmod{7}",
    category: "Calculs",
    chapter: 12,
    difficulty: "facile"
  },
  {
    id: 23,
    front: "PGCD(48, 30)",
    back: "48 = 2×24, 30 = 2×15, donc PGCD = 2×3 = 6.",
    frontLatex: "\\gcd(48, 30) = \\text{?}",
    backLatex: "\\gcd(48, 30) = 6",
    category: "Calculs",
    chapter: 12,
    difficulty: "facile"
  },
  {
    id: 24,
    front: "10^n modulo 11 selon la parité de n",
    back: "Si n pair : 10^n ≡ 1 mod 11. Si n impair : 10^n ≡ 10 mod 11.",
    frontLatex: "10^n \\pmod{11} = \\text{?}",
    backLatex: "n \\text{ pair} \\Rightarrow 10^n \\equiv 1, \\quad n \\text{ impair} \\Rightarrow 10^n \\equiv 10",
    category: "Propriétés",
    chapter: 12,
    difficulty: "moyen"
  },

  // PROBLÈMES AVANCÉS
  {
    id: 25,
    front: "Théorème d'Euler",
    back: "Si gcd(a, n) = 1, alors a^φ(n) ≡ 1 mod n.",
    frontLatex: "\\gcd(a,n) = 1 \\Rightarrow a^{\\varphi(n)} \\equiv \\text{?} \\pmod{n}",
    backLatex: "a^{\\varphi(n)} \\equiv 1 \\pmod{n}",
    category: "Théorèmes",
    chapter: 12,
    difficulty: "difficile"
  },
  {
    id: 26,
    front: "Petit théorème de Fermat",
    back: "Si p premier et p ne divise pas a, alors a^(p-1) ≡ 1 mod p.",
    frontLatex: "p \\text{ premier}, \\quad p \\nmid a \\Rightarrow a^{p-1} \\equiv \\text{?} \\pmod{p}",
    backLatex: "a^{p-1} \\equiv 1 \\pmod{p}",
    category: "Théorèmes",
    chapter: 12,
    difficulty: "difficile"
  },
  {
    id: 27,
    front: "Résoudre x ≡ 3 mod 7, x ≡ 5 mod 11",
    back: "Système de congruences : x = 7k + 3 et x = 11m + 5. Solution : x ≡ 38 mod 77.",
    frontLatex: "x \\equiv 3 \\pmod{7}, \\quad x \\equiv 5 \\pmod{11} \\quad \\Rightarrow \\quad x \\equiv \\text{?}",
    backLatex: "x \\equiv 38 \\pmod{77}",
    category: "Systèmes",
    chapter: 12,
    difficulty: "difficile"
  },

  // QUESTIONS RAPIDES
  {
    id: 28,
    front: "Qu'est-ce qu'une congruence ?",
    back: "Deux nombres sont congrus modulo n s'ils ont le même reste dans la division par n.",
    category: "Définitions",
    chapter: 12,
    difficulty: "facile"
  },
  {
    id: 29,
    front: "Pourquoi RSA est-il sûr ?",
    back: "La sécurité repose sur la difficulté de factoriser de grands nombres premiers.",
    category: "Sécurité",
    chapter: 12,
    difficulty: "moyen"
  },
  {
    id: 30,
    front: "Qu'est-ce qu'un inverse modulaire ?",
    back: "Un nombre b tel que a × b ≡ 1 mod n, qui existe seulement si gcd(a,n) = 1.",
    category: "Inverses modulaires",
    chapter: 12,
    difficulty: "moyen"
  }
];

// Fonctions utilitaires pour les flashcards
export const getArithmeticModularFlashcardsByCategory = (category: string): MathFlashcard[] => {
  if (category === 'all') {
    return arithmeticModularFlashcards;
  }
  return arithmeticModularFlashcards.filter(card => card.category === category);
};

export const getArithmeticModularFlashcardsByDifficulty = (difficulty: 'facile' | 'moyen' | 'difficile'): MathFlashcard[] => {
  return arithmeticModularFlashcards.filter(card => card.difficulty === difficulty);
};

export const shuffleArithmeticModularFlashcards = (cards: MathFlashcard[] = arithmeticModularFlashcards): MathFlashcard[] => {
  const shuffled = [...cards];
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};
