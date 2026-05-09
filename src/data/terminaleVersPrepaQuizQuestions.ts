import type { MathQuizQuestion } from '@/components/quiz/MathQuiz';

// ============================================================
// Chapitre 1 — Calculs (puissances, exponentielles, logarithmes)
// ============================================================
export const calculsQuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Vrai ou faux ? Pour tous réels $a, b > 0$ : $\\;\\ln(a + b) = \\ln(a) + \\ln(b)$.",
    options: ["Vrai", "Faux"],
    correctAnswer: 1,
    explanation: "Faux. La règle est $\\ln(ab) = \\ln a + \\ln b$. Le logarithme transforme un PRODUIT en somme, pas une somme. Contre-exemple : $\\ln(1+1)=\\ln 2 \\neq 0 = \\ln 1 + \\ln 1$."
  },
  {
    id: 2,
    question: "Vrai ou faux ? Pour tous $a, b \\in \\mathbb{R}$ : $\\;e^{a+b} = e^a + e^b$.",
    options: ["Vrai", "Faux"],
    correctAnswer: 1,
    explanation: "Faux. La règle est $e^{a+b} = e^a \\times e^b$. Contre-exemple : $e^0 = 1 \\neq 2 = e^0+e^0$."
  },
  {
    id: 3,
    question: "L'équation $e^x = -3$ admet :",
    options: ["Aucune solution", "Une solution unique", "Deux solutions", "Une infinité"],
    correctAnswer: 0,
    explanation: "$e^x > 0$ pour tout $x$. L'équation $e^x = k$ n'a de solution que si $k > 0$."
  },
  {
    id: 4,
    question: "Simplifier : $\\dfrac{e^{2x} \\cdot e^{-x}}{e^{x}}$",
    options: ["$e^{4x}$", "$1$", "$e^{x}$", "$e^{-2x}$"],
    correctAnswer: 1,
    explanation: "$e^{2x-x-x} = e^0 = 1$."
  },
  {
    id: 5,
    question: "Pour $a > 0$, $a^x$ s'écrit :",
    options: ["$e^{x \\ln a}$", "$e^{a \\ln x}$", "$\\ln(a^x)$", "$x \\ln a$"],
    correctAnswer: 0,
    explanation: "Définition générale d'une puissance réelle : $a^x = e^{x \\ln a}$."
  },
  {
    id: 6,
    question: "Simplifier : $\\ln(8) - \\ln(2)$",
    options: ["$\\ln 6$", "$\\ln 4$", "$2\\ln 2$", "Les deux options 'ln 4' et '2 ln 2'"],
    correctAnswer: 3,
    explanation: "$\\ln(8/2) = \\ln 4 = \\ln(2^2) = 2 \\ln 2$. Les deux écritures sont équivalentes."
  },
  {
    id: 7,
    question: "Solution de $\\ln(2x - 1) = 0$ :",
    options: ["$x = 0$", "$x = 1$", "$x = 1/2$", "$x = e$"],
    correctAnswer: 1,
    explanation: "$\\ln(y)=0 \\Leftrightarrow y=1 \\Rightarrow 2x-1 = 1 \\Rightarrow x = 1$."
  },
  {
    id: 8,
    question: "Domaine de $f(x) = \\ln(x^2 - 4)$ :",
    options: ["$\\mathbb{R}$", "$]-\\infty;-2[\\cup\\,]2;+\\infty[$", "$]-2;2[$", "$]2;+\\infty[$"],
    correctAnswer: 1,
    explanation: "$x^2 - 4 > 0 \\Leftrightarrow x<-2$ ou $x>2$."
  },
  {
    id: 9,
    question: "Résoudre $e^{2x} - 3 e^x + 2 = 0$.",
    options: ["$x = 0$ uniquement", "$x = \\ln 2$ uniquement", "$x = 0$ ou $x = \\ln 2$", "Pas de solution"],
    correctAnswer: 2,
    explanation: "Poser $X=e^x$ : $X^2-3X+2=(X-1)(X-2)=0 \\Rightarrow e^x=1$ ou $e^x=2$, soit $x=0$ ou $x=\\ln 2$."
  },
  {
    id: 10,
    question: "Que vaut $\\displaystyle\\lim_{x \\to +\\infty} \\dfrac{e^x}{x^{100}}$ ?",
    options: ["$0$", "$1$", "$+\\infty$", "Indéterminé"],
    correctAnswer: 2,
    explanation: "Croissance comparée : l'exponentielle l'emporte sur toute puissance. $\\lim e^x/x^n = +\\infty$."
  },
  {
    id: 11,
    question: "Que vaut $\\displaystyle\\lim_{x \\to 0^+} x \\ln(x)$ ?",
    options: ["$-\\infty$", "$+\\infty$", "$0$", "$1$"],
    correctAnswer: 2,
    explanation: "Croissance comparée en $0$ : $\\lim_{0^+} x^n \\ln x = 0$ pour $n>0$."
  },
  {
    id: 12,
    question: "Que vaut $A = \\ln(e^3) + e^{\\ln 5}$ ?",
    options: ["$3 + \\ln 5$", "$8$", "$e^3 + 5$", "$15$"],
    correctAnswer: 1,
    explanation: "Réciprocité : $\\ln(e^3) = 3$ et $e^{\\ln 5} = 5$, donc $A = 8$."
  }
];

// ============================================================
// Chapitre 2 — Sommes, suites et produits
// ============================================================
export const sommesSuitesQuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Que vaut $\\sum_{k=1}^{n} k$ ?",
    options: ["$n^2$", "$\\dfrac{n(n+1)}{2}$", "$\\dfrac{n(n-1)}{2}$", "$\\dfrac{n^2}{2}$"],
    correctAnswer: 1,
    explanation: "Formule de Gauss : $\\sum_{k=1}^n k = n(n+1)/2$."
  },
  {
    id: 2,
    question: "$\\sum_{k=1}^{100} k$ vaut :",
    options: ["4950", "5000", "5050", "10000"],
    correctAnswer: 2,
    explanation: "$100 \\times 101 / 2 = 5050$."
  },
  {
    id: 3,
    question: "$\\sum_{k=1}^n k^2$ vaut :",
    options: ["$\\dfrac{n(n+1)}{2}$", "$\\dfrac{n(n+1)(2n+1)}{6}$", "$\\left(\\dfrac{n(n+1)}{2}\\right)^2$", "$\\dfrac{n^3}{3}$"],
    correctAnswer: 1,
    explanation: "Formule des carrés : $\\sum k^2 = n(n+1)(2n+1)/6$."
  },
  {
    id: 4,
    question: "Vrai ou faux ? Si $|q|<1$, $\\sum_{k=0}^n q^k = \\dfrac{1-q^{n+1}}{1-q}$.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "Vrai. Cette formule est valable pour tout $q \\neq 1$, indépendamment de $|q|$."
  },
  {
    id: 5,
    question: "Suite arithmétique $u_1=3$, $r=2$. Que vaut $u_5$ ?",
    options: ["7", "9", "11", "13"],
    correctAnswer: 2,
    explanation: "$u_n = u_1 + (n-1)r \\Rightarrow u_5 = 3 + 4\\times 2 = 11$."
  },
  {
    id: 6,
    question: "Suite géométrique $u_1=2$, $q=3$. Que vaut $u_4$ ?",
    options: ["8", "18", "24", "54"],
    correctAnswer: 3,
    explanation: "$u_4 = u_1 q^3 = 2 \\times 27 = 54$."
  },
  {
    id: 7,
    question: "Somme $2+5+8+\\ldots+u_{10}$ (suite arithmétique de raison 3) :",
    options: ["140", "155", "165", "175"],
    correctAnswer: 1,
    explanation: "$u_{10}=2+9\\times 3=29$. $S_{10}=10/2 \\times (2+29)=155$."
  },
  {
    id: 8,
    question: "$\\sum_{k=1}^{20}(2k+1)$ vaut :",
    options: ["420", "440", "460", "480"],
    correctAnswer: 1,
    explanation: "$2 \\sum k + \\sum 1 = 2 \\times 210 + 20 = 440$."
  },
  {
    id: 9,
    question: "Que vaut $\\prod_{k=1}^4 k$ ?",
    options: ["10", "16", "24", "120"],
    correctAnswer: 2,
    explanation: "$4! = 1\\times 2\\times 3\\times 4 = 24$."
  },
  {
    id: 10,
    question: "Vrai ou faux ? L'indice de sommation est muet : $\\sum_{k=1}^n a_k = \\sum_{i=1}^n a_i$.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "Vrai. Le nom de l'indice n'a pas d'importance."
  },
  {
    id: 11,
    question: "Pour la suite géométrique $u_n=(1/2)^n$, $\\sum_{k=0}^{+\\infty} u_k$ vaut :",
    options: ["1", "2", "$+\\infty$", "Indéterminée"],
    correctAnswer: 1,
    explanation: "Série géométrique de raison $1/2$ : $1/(1-1/2)=2$."
  },
  {
    id: 12,
    question: "Somme télescopique $\\sum_{k=1}^n (a_{k+1}-a_k)$ vaut :",
    options: ["$a_n - a_1$", "$a_{n+1} - a_1$", "$a_{n+1} - a_0$", "$a_n + a_1$"],
    correctAnswer: 1,
    explanation: "Tous les termes intermédiaires se simplifient, il reste $a_{n+1}-a_1$."
  }
];

// ============================================================
// Chapitre 3 — Suites
// ============================================================
export const suitesQuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Une suite est définie comme :",
    options: ["Une fonction de $\\mathbb{N}$ vers $\\mathbb{R}$", "Une fonction de $\\mathbb{R}$ vers $\\mathbb{R}$", "Un ensemble fini", "Une équation"],
    correctAnswer: 0,
    explanation: "Une suite est une application $u : \\mathbb{N} \\to \\mathbb{R}$."
  },
  {
    id: 2,
    question: "Quelle suite est arithmétique ?",
    options: ["$u_n = 2^n$", "$u_n = 3n + 1$", "$u_n = n^2$", "$u_n = \\dfrac{1}{n}$"],
    correctAnswer: 1,
    explanation: "$u_{n+1}-u_n=3$ est constante : c'est une suite arithmétique."
  },
  {
    id: 3,
    question: "Quelle suite est géométrique ?",
    options: ["$u_n = 2^n$", "$u_n = 3n+1$", "$u_n = n+2$", "$u_n = n^2$"],
    correctAnswer: 0,
    explanation: "$u_{n+1}/u_n = 2$ est constant."
  },
  {
    id: 4,
    question: "Que vaut $\\displaystyle\\lim_{n \\to +\\infty} \\dfrac{1}{n}$ ?",
    options: ["0", "1", "$+\\infty$", "$-\\infty$"],
    correctAnswer: 0,
    explanation: "Limite usuelle : $1/n \\to 0$."
  },
  {
    id: 5,
    question: "Limite de $u_n = (1/2)^n$ :",
    options: ["0", "$1/2$", "1", "$+\\infty$"],
    correctAnswer: 0,
    explanation: "$|q|<1 \\Rightarrow q^n \\to 0$."
  },
  {
    id: 6,
    question: "Limite de $u_n = (-1)^n$ :",
    options: ["0", "1", "$-1$", "Pas de limite"],
    correctAnswer: 3,
    explanation: "La suite alterne entre 1 et -1, elle ne converge pas."
  },
  {
    id: 7,
    question: "Théorème des gendarmes : si $v_n \\le u_n \\le w_n$ et $\\lim v_n = \\lim w_n = L$, alors :",
    options: ["$\\lim u_n = L$", "$\\lim u_n = 0$", "$u_n$ diverge", "Indécidable"],
    correctAnswer: 0,
    explanation: "L'encadrement force $u_n$ à converger vers $L$."
  },
  {
    id: 8,
    question: "Une suite croissante et majorée :",
    options: ["Diverge", "Converge", "N'admet pas de limite", "Tend vers $+\\infty$"],
    correctAnswer: 1,
    explanation: "Théorème de la limite monotone : croissante majorée ⟹ converge."
  },
  {
    id: 9,
    question: "Si $u_n=(n+1)/n$, alors $\\lim u_n$ vaut :",
    options: ["0", "1", "$+\\infty$", "Pas de limite"],
    correctAnswer: 1,
    explanation: "$u_n = 1 + 1/n \\to 1$."
  },
  {
    id: 10,
    question: "Limite de $u_n = n^2/2^n$ :",
    options: ["0", "1", "$+\\infty$", "Pas de limite"],
    correctAnswer: 0,
    explanation: "Croissance comparée : $2^n$ croît plus vite que toute puissance de $n$."
  },
  {
    id: 11,
    question: "Suite récurrente $u_{n+1}=f(u_n)$ converge vers $L$ ($f$ continue). Alors :",
    options: ["$L=0$", "$L=f(L)$", "$L=u_0$", "$L$ indéfini"],
    correctAnswer: 1,
    explanation: "Par passage à la limite : $L = f(L)$ (point fixe de $f$)."
  },
  {
    id: 12,
    question: "Vrai ou faux ? Toute suite convergente est bornée.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "Vrai. Une suite convergente s'approche d'une limite finie, donc est bornée."
  }
];

// ============================================================
// Chapitre 4 — Fonctions
// ============================================================
export const fonctionsQuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Le domaine de définition de $\\ln(x)$ est :",
    options: ["$\\mathbb{R}$", "$[0;+\\infty[$", "$]0;+\\infty[$", "$]-\\infty;0]$"],
    correctAnswer: 2,
    explanation: "Le ln n'est défini que pour $x>0$ strictement."
  },
  {
    id: 2,
    question: "Le domaine de $\\sqrt{x-1}$ est :",
    options: ["$\\mathbb{R}$", "$[0;+\\infty[$", "$[1;+\\infty[$", "$]1;+\\infty[$"],
    correctAnswer: 2,
    explanation: "$x-1 \\ge 0 \\Leftrightarrow x \\ge 1$."
  },
  {
    id: 3,
    question: "$f(x) = x^3 - x$ est :",
    options: ["Paire", "Impaire", "Périodique", "Ni paire ni impaire"],
    correctAnswer: 1,
    explanation: "$f(-x) = -x^3 + x = -f(x)$ ⟹ impaire."
  },
  {
    id: 4,
    question: "Une fonction paire vérifie :",
    options: ["$f(-x)=f(x)$", "$f(-x)=-f(x)$", "$f(x+T)=f(x)$", "$f(x)=x$"],
    correctAnswer: 0,
    explanation: "Définition de la parité : symétrie par rapport à $Oy$."
  },
  {
    id: 5,
    question: "Si $f(x) = e^x$, sa fonction réciproque est :",
    options: ["$1/x$", "$\\ln(x)$", "$-x$", "$e^{-x}$"],
    correctAnswer: 1,
    explanation: "$\\ln$ est la réciproque de $\\exp$ : $\\ln(e^x) = x$."
  },
  {
    id: 6,
    question: "Limite de $f(x) = (x^2-1)/(x-1)$ en $x=1$ :",
    options: ["0", "1", "2", "N'existe pas"],
    correctAnswer: 2,
    explanation: "$(x-1)(x+1)/(x-1) = x+1 \\to 2$."
  },
  {
    id: 7,
    question: "Domaine de $f(x) = \\ln(x^2-4)$ :",
    options: ["$\\mathbb{R}$", "$]-2;2[$", "$]-\\infty;-2[\\cup\\,]2;+\\infty[$", "$]2;+\\infty[$"],
    correctAnswer: 2,
    explanation: "$x^2-4>0 \\Leftrightarrow |x|>2$."
  },
  {
    id: 8,
    question: "Tangente à $f(x)=x^2$ en $x=1$ :",
    options: ["$y=x$", "$y=2x-1$", "$y=2x+1$", "$y=x+1$"],
    correctAnswer: 1,
    explanation: "$f'(x)=2x$, $f'(1)=2$, $f(1)=1$ ⟹ $y=2(x-1)+1=2x-1$."
  },
  {
    id: 9,
    question: "Vrai ou faux ? $e^x$ est strictement croissante sur $\\mathbb{R}$.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "Vrai : $(e^x)'=e^x>0$ partout."
  },
  {
    id: 10,
    question: "Théorème des valeurs intermédiaires : si $f$ est continue sur $[a,b]$ et $k$ est entre $f(a)$ et $f(b)$ :",
    options: ["Il existe $c \\in [a,b]$ tel que $f(c)=k$", "$k=f(a)$", "$f$ est constante", "$k=0$"],
    correctAnswer: 0,
    explanation: "C'est le TVI : la continuité garantit que $f$ atteint toute valeur intermédiaire."
  },
  {
    id: 11,
    question: "Si $\\lim_{x\\to+\\infty} f(x) = 2$, alors :",
    options: ["$x=2$ asymptote verticale", "$y=2$ asymptote horizontale", "$f(2)=0$", "$f$ continue en 2"],
    correctAnswer: 1,
    explanation: "Limite finie en $\\pm\\infty$ ⟹ asymptote horizontale $y=L$."
  },
  {
    id: 12,
    question: "Solutions de $x^2 - 5x + 6 = 0$ :",
    options: ["$x=1$ et $x=6$", "$x=2$ et $x=3$", "$x=-2$ et $x=-3$", "$x=0$ et $x=5$"],
    correctAnswer: 1,
    explanation: "$\\Delta = 25-24=1$, $x = (5\\pm 1)/2$ ⟹ $x=2$ ou $x=3$."
  }
];

// ============================================================
// Chapitre 5 — Dérivées
// ============================================================
export const deriveesQuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Dérivée de $f(x) = x^3$ :",
    options: ["$3x$", "$3x^2$", "$x^3$", "$3$"],
    correctAnswer: 1,
    explanation: "$(x^n)' = n x^{n-1}$ donc $f'(x) = 3x^2$."
  },
  {
    id: 2,
    question: "Dérivée de $f(x) = e^x$ :",
    options: ["$e^x$", "$x e^{x-1}$", "$\\ln x$", "$1/x$"],
    correctAnswer: 0,
    explanation: "L'exponentielle est sa propre dérivée."
  },
  {
    id: 3,
    question: "Dérivée de $f(x) = \\ln(x)$ ($x>0$) :",
    options: ["$1/x$", "$x$", "$e^x$", "$\\ln x$"],
    correctAnswer: 0,
    explanation: "$(\\ln x)' = 1/x$."
  },
  {
    id: 4,
    question: "Dérivée de $f(x) = \\sin x$ :",
    options: ["$\\cos x$", "$-\\cos x$", "$-\\sin x$", "$\\tan x$"],
    correctAnswer: 0,
    explanation: "$(\\sin x)' = \\cos x$."
  },
  {
    id: 5,
    question: "Formule de la dérivée d'un produit $(uv)'$ :",
    options: ["$u'v'$", "$u'v + uv'$", "$u'v - uv'$", "$(uv)' = uv$"],
    correctAnswer: 1,
    explanation: "Règle du produit : $(uv)' = u'v + u v'$."
  },
  {
    id: 6,
    question: "Formule de la dérivée d'un quotient $(u/v)'$ :",
    options: ["$u'/v'$", "$(u'v - uv')/v^2$", "$(u'v + uv')/v^2$", "$u'v - uv'$"],
    correctAnswer: 1,
    explanation: "Règle du quotient : $(u/v)' = (u'v - uv')/v^2$."
  },
  {
    id: 7,
    question: "Dérivée de $f(x) = x^2 e^x$ :",
    options: ["$2x e^x$", "$x^2 e^x$", "$e^x(x^2 + 2x)$", "$2x e^x + x^2$"],
    correctAnswer: 2,
    explanation: "Produit : $(2x)e^x + x^2 e^x = e^x(x^2+2x)$."
  },
  {
    id: 8,
    question: "Dérivée de $f(x) = \\ln(x^2 + 1)$ :",
    options: ["$1/(x^2+1)$", "$2x/(x^2+1)$", "$2x \\ln(x^2+1)$", "$x^2+1$"],
    correctAnswer: 1,
    explanation: "$(\\ln u)' = u'/u$ avec $u = x^2+1$, $u'=2x$."
  },
  {
    id: 9,
    question: "Dérivée de $f(x) = (2x+1)/(x-3)$ :",
    options: ["$2$", "$-7/(x-3)^2$", "$1/(x-3)$", "$2/(x-3)^2$"],
    correctAnswer: 1,
    explanation: "$(2(x-3) - (2x+1))/(x-3)^2 = (2x-6-2x-1)/(x-3)^2 = -7/(x-3)^2$."
  },
  {
    id: 10,
    question: "Tangente à $f(x) = x^3$ en $x=1$ :",
    options: ["$y = x$", "$y = 3x - 2$", "$y = 3x + 1$", "$y = x^3$"],
    correctAnswer: 1,
    explanation: "$f'(1)=3$, $f(1)=1$ ⟹ $y = 3(x-1)+1 = 3x-2$."
  },
  {
    id: 11,
    question: "Si $f'(a)=0$ et $f''(a)>0$, alors :",
    options: ["Maximum local en $a$", "Minimum local en $a$", "Point d'inflexion", "Aucune conclusion"],
    correctAnswer: 1,
    explanation: "Test de la dérivée seconde : $f''>0$ ⟹ minimum local."
  },
  {
    id: 12,
    question: "Vrai ou faux ? $f'>0$ sur un intervalle $\\Rightarrow$ $f$ strictement croissante.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "Vrai. Le signe strictement positif de la dérivée garantit la croissance stricte."
  }
];

// ============================================================
// Chapitre 6 — Intégrale
// ============================================================
export const integralesQuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Une primitive de $f$ est :",
    options: ["$F$ tel que $F = f$", "$F$ tel que $F' = f$", "$F$ tel que $F + f = 0$", "$F$ inverse de $f$"],
    correctAnswer: 1,
    explanation: "Définition : $F$ primitive de $f$ ⟺ $F' = f$."
  },
  {
    id: 2,
    question: "Primitive de $x^n$ ($n \\neq -1$) :",
    options: ["$n x^{n-1}$", "$x^{n+1}/(n+1) + C$", "$x^{n-1}/(n-1) + C$", "$n x^n$"],
    correctAnswer: 1,
    explanation: "$\\int x^n dx = x^{n+1}/(n+1) + C$."
  },
  {
    id: 3,
    question: "Primitive de $1/x$ :",
    options: ["$\\ln|x| + C$", "$1/x^2 + C$", "$-1/x + C$", "$x \\ln x + C$"],
    correctAnswer: 0,
    explanation: "$\\int 1/x \\, dx = \\ln|x| + C$."
  },
  {
    id: 4,
    question: "Primitive de $e^x$ :",
    options: ["$x e^x$", "$e^x + C$", "$e^x/x$", "$\\ln(e^x)$"],
    correctAnswer: 1,
    explanation: "$\\int e^x dx = e^x + C$."
  },
  {
    id: 5,
    question: "$\\int_0^1 x^2 dx$ vaut :",
    options: ["$1/2$", "$1/3$", "$1/4$", "$1$"],
    correctAnswer: 1,
    explanation: "$[x^3/3]_0^1 = 1/3$."
  },
  {
    id: 6,
    question: "$\\int_0^1 e^x dx$ vaut :",
    options: ["$1$", "$e$", "$e-1$", "$e+1$"],
    correctAnswer: 2,
    explanation: "$[e^x]_0^1 = e - 1$."
  },
  {
    id: 7,
    question: "$\\int_1^e \\dfrac{1}{x} dx$ vaut :",
    options: ["$0$", "$1$", "$e$", "$e-1$"],
    correctAnswer: 1,
    explanation: "$[\\ln x]_1^e = \\ln e - \\ln 1 = 1$."
  },
  {
    id: 8,
    question: "Vrai ou faux ? Si $f \\le g$ sur $[a,b]$, alors $\\int_a^b f \\le \\int_a^b g$.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "Vrai (sous réserve $a \\le b$). C'est la croissance de l'intégrale."
  },
  {
    id: 9,
    question: "Formule d'intégration par parties :",
    options: ["$\\int u'v = uv - \\int u v'$", "$\\int u'v' = uv$", "$\\int uv = u'v$", "$\\int u/v$"],
    correctAnswer: 0,
    explanation: "IPP : $\\int u'v = [uv] - \\int u v'$."
  },
  {
    id: 10,
    question: "Si $f$ est paire, alors $\\int_{-a}^{a} f$ vaut :",
    options: ["0", "$2 \\int_0^a f$", "$\\int_0^a f$", "$-\\int_0^a f$"],
    correctAnswer: 1,
    explanation: "Par symétrie : $\\int_{-a}^a f = 2 \\int_0^a f$ pour $f$ paire."
  },
  {
    id: 11,
    question: "Si $f$ est impaire, alors $\\int_{-a}^{a} f$ vaut :",
    options: ["0", "$2 \\int_0^a f$", "$a \\cdot f(a)$", "Indéterminé"],
    correctAnswer: 0,
    explanation: "Par symétrie : $\\int_{-a}^a f = 0$ pour $f$ impaire."
  },
  {
    id: 12,
    question: "$\\int x e^x \\, dx$ (par IPP) :",
    options: ["$x e^x + C$", "$(x-1) e^x + C$", "$x^2 e^x / 2 + C$", "$e^x / x + C$"],
    correctAnswer: 1,
    explanation: "IPP avec $u=x$, $v'=e^x$ : $x e^x - \\int e^x = (x-1)e^x + C$."
  }
];

// ============================================================
// Chapitre 7 — Limites
// ============================================================
export const limitesQuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "$\\displaystyle\\lim_{x \\to +\\infty} e^x$ vaut :",
    options: ["0", "1", "$+\\infty$", "$-\\infty$"],
    correctAnswer: 2,
    explanation: "L'exponentielle tend vers $+\\infty$ en $+\\infty$."
  },
  {
    id: 2,
    question: "$\\displaystyle\\lim_{x \\to -\\infty} e^x$ vaut :",
    options: ["0", "1", "$+\\infty$", "$-\\infty$"],
    correctAnswer: 0,
    explanation: "$e^x \\to 0^+$ quand $x \\to -\\infty$."
  },
  {
    id: 3,
    question: "$\\displaystyle\\lim_{x \\to 0^+} \\ln(x)$ vaut :",
    options: ["0", "1", "$+\\infty$", "$-\\infty$"],
    correctAnswer: 3,
    explanation: "Asymptote verticale en 0 : $\\ln x \\to -\\infty$."
  },
  {
    id: 4,
    question: "$\\displaystyle\\lim_{x \\to +\\infty} \\dfrac{e^x}{x^{100}}$ vaut :",
    options: ["0", "1", "$+\\infty$", "Indéterminé"],
    correctAnswer: 2,
    explanation: "Croissance comparée : $e^x$ l'emporte sur toute puissance."
  },
  {
    id: 5,
    question: "$\\displaystyle\\lim_{x \\to +\\infty} \\dfrac{\\ln x}{x}$ vaut :",
    options: ["0", "1", "$+\\infty$", "$-\\infty$"],
    correctAnswer: 0,
    explanation: "Croissance comparée : le polynôme l'emporte sur le ln."
  },
  {
    id: 6,
    question: "$\\displaystyle\\lim_{x \\to 0} \\dfrac{\\sin x}{x}$ vaut :",
    options: ["0", "1", "$\\pi$", "Indéterminé"],
    correctAnswer: 1,
    explanation: "Limite remarquable : $(\\sin x)/x \\to 1$ en 0."
  },
  {
    id: 7,
    question: "$\\displaystyle\\lim_{x \\to 0} \\dfrac{e^x - 1}{x}$ vaut :",
    options: ["0", "1", "$e$", "Indéterminé"],
    correctAnswer: 1,
    explanation: "Limite remarquable : taux d'accroissement de $e^x$ en 0, soit $\\exp'(0)=1$."
  },
  {
    id: 8,
    question: "$\\displaystyle\\lim_{x \\to 1} \\dfrac{x^2 - 1}{x - 1}$ vaut :",
    options: ["0", "1", "2", "$+\\infty$"],
    correctAnswer: 2,
    explanation: "Forme $0/0$ : factoriser $(x-1)(x+1)/(x-1) = x+1 \\to 2$."
  },
  {
    id: 9,
    question: "$\\displaystyle\\lim_{x \\to +\\infty} \\big(\\sqrt{x^2+1} - x\\big)$ vaut :",
    options: ["0", "1", "$+\\infty$", "Indéterminé"],
    correctAnswer: 0,
    explanation: "Conjugué : $1/(\\sqrt{x^2+1}+x) \\to 0$."
  },
  {
    id: 10,
    question: "$\\displaystyle\\lim_{x \\to 0} \\dfrac{\\sin(3x)}{x}$ vaut :",
    options: ["0", "1", "3", "$1/3$"],
    correctAnswer: 2,
    explanation: "$\\sin(3x)/x = 3 \\times \\sin(3x)/(3x) \\to 3 \\times 1 = 3$."
  },
  {
    id: 11,
    question: "$\\displaystyle\\lim_{x \\to 0^+} x \\ln x$ vaut :",
    options: ["0", "$-\\infty$", "$+\\infty$", "1"],
    correctAnswer: 0,
    explanation: "Croissance comparée : $x^n \\ln x \\to 0$ pour $n>0$."
  },
  {
    id: 12,
    question: "Lever une forme $\\infty - \\infty$ avec deux racines passe par :",
    options: ["Identité de Bernoulli", "Quantité conjuguée", "Intégration", "TVI"],
    correctAnswer: 1,
    explanation: "Multiplier par la quantité conjuguée transforme $\\sqrt{a}-\\sqrt{b}$ en $(a-b)/(\\sqrt{a}+\\sqrt{b})$."
  }
];

// ============================================================
// Chapitre 8 — Probabilités
// ============================================================
export const probabilitesQuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "L'univers $\\Omega$ représente :",
    options: ["Un événement", "L'ensemble des résultats possibles", "Une variable aléatoire", "Une probabilité"],
    correctAnswer: 1,
    explanation: "$\\Omega$ est l'ensemble de tous les résultats possibles d'une expérience."
  },
  {
    id: 2,
    question: "Lancer d'un dé équilibré : P(obtenir un pair) vaut :",
    options: ["$1/3$", "$1/2$", "$2/3$", "$3/4$"],
    correctAnswer: 1,
    explanation: "Cas favorables {2,4,6} : 3 sur 6 = 1/2."
  },
  {
    id: 3,
    question: "Pour deux événements quelconques : $P(A \\cup B)$ vaut :",
    options: ["$P(A)+P(B)$", "$P(A)+P(B)-P(A\\cap B)$", "$P(A)P(B)$", "$P(A)/P(B)$"],
    correctAnswer: 1,
    explanation: "Formule générale : il faut retrancher l'intersection (sinon comptée 2 fois)."
  },
  {
    id: 4,
    question: "$P(\\bar A)$ vaut :",
    options: ["$P(A)$", "$1 - P(A)$", "$0$", "$P(A) - 1$"],
    correctAnswer: 1,
    explanation: "Probabilité du complémentaire : $P(\\bar A) = 1 - P(A)$."
  },
  {
    id: 5,
    question: "Probabilité conditionnelle $P(A | B)$ vaut :",
    options: ["$P(A) - P(B)$", "$P(A) P(B)$", "$P(A \\cap B) / P(B)$", "$P(A) + P(B)$"],
    correctAnswer: 2,
    explanation: "Définition : $P(A|B) = P(A\\cap B)/P(B)$ avec $P(B)>0$."
  },
  {
    id: 6,
    question: "$A$ et $B$ indépendants ⟺ :",
    options: ["$A \\cap B = \\emptyset$", "$P(A \\cap B) = P(A)P(B)$", "$P(A) = P(B)$", "$A = B$"],
    correctAnswer: 1,
    explanation: "Indépendance : $P(A\\cap B) = P(A) \\times P(B)$."
  },
  {
    id: 7,
    question: "Pour $X \\sim \\mathcal{B}(p)$ (Bernoulli), $E(X)$ vaut :",
    options: ["$1-p$", "$p$", "$p(1-p)$", "$1/p$"],
    correctAnswer: 1,
    explanation: "Bernoulli : $E(X)=p$, $V(X)=p(1-p)$."
  },
  {
    id: 8,
    question: "Pour $X \\sim \\mathcal{B}(n,p)$ (binomiale), $E(X)$ vaut :",
    options: ["$p$", "$np$", "$np(1-p)$", "$n+p$"],
    correctAnswer: 1,
    explanation: "Espérance d'une binomiale : $np$."
  },
  {
    id: 9,
    question: "Pour $X \\sim \\mathcal{B}(n,p)$, $V(X)$ vaut :",
    options: ["$np$", "$np^2$", "$np(1-p)$", "$n(1-p)$"],
    correctAnswer: 2,
    explanation: "Variance d'une binomiale : $np(1-p)$."
  },
  {
    id: 10,
    question: "5 lancers de pile/face équilibré, $P(\\text{obtenir 3 piles})$ vaut :",
    options: ["$1/8$", "$5/16$", "$10/32$", "Les options 'b' et 'c' sont équivalentes"],
    correctAnswer: 3,
    explanation: "$X \\sim \\mathcal{B}(5;0{,}5)$. $P(X=3) = \\binom{5}{3}(0{,}5)^5 = 10/32 = 5/16$. Les deux écritures sont équivalentes."
  },
  {
    id: 11,
    question: "Pour $X$ et $Y$ indépendantes : $V(X+Y)$ vaut :",
    options: ["$V(X) + V(Y)$", "$V(X) V(Y)$", "$V(X) - V(Y)$", "$|V(X)-V(Y)|$"],
    correctAnswer: 0,
    explanation: "Indépendance ⟹ additivité des variances : $V(X+Y) = V(X) + V(Y)$."
  },
  {
    id: 12,
    question: "Linéarité de l'espérance : $E(aX + b)$ vaut :",
    options: ["$E(X)$", "$a E(X)$", "$a E(X) + b$", "$a^2 E(X) + b$"],
    correctAnswer: 2,
    explanation: "$E(aX+b) = a E(X) + b$. (Comparer avec $V(aX+b)=a^2 V(X)$.)"
  }
];

// ============================================================
// Chapitre 9 — Récurrence
// ============================================================
export const recurrenceQuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Une démonstration par récurrence comporte :",
    options: ["1 étape", "2 étapes", "3 étapes", "Une infinité"],
    correctAnswer: 2,
    explanation: "Initialisation, hérédité, conclusion."
  },
  {
    id: 2,
    question: "L'initialisation consiste à :",
    options: ["Supposer P(n) vrai", "Vérifier P(0) ou P($n_0$)", "Conclure", "Choisir la formule"],
    correctAnswer: 1,
    explanation: "On vérifie que la propriété est vraie au rang de départ."
  },
  {
    id: 3,
    question: "L'hérédité consiste à montrer :",
    options: ["P(0) ⟹ P(1)", "P(n) ⟹ P(n+1)", "P($\\infty$)", "P(n+1) ⟹ P(n)"],
    correctAnswer: 1,
    explanation: "On suppose P(n) vraie (HR) et on en déduit P(n+1)."
  },
  {
    id: 4,
    question: "Dans une récurrence forte, on suppose :",
    options: ["P(n) seulement", "P(0)…P(n)", "P(n+1)", "P(n-1) seulement"],
    correctAnswer: 1,
    explanation: "Récurrence forte : P(k) supposée pour TOUT k ≤ n."
  },
  {
    id: 5,
    question: "Vrai ou faux ? Sans initialisation, l'hérédité suffit à démontrer P(n).",
    options: ["Vrai", "Faux"],
    correctAnswer: 1,
    explanation: "Faux. Sans P($n_0$) vrai, l'hérédité ne démontre rien."
  },
  {
    id: 6,
    question: "L'inégalité $2^n \\ge n^2$ est vraie à partir de :",
    options: ["$n=0$", "$n=1$", "$n=2$", "$n=4$"],
    correctAnswer: 3,
    explanation: "Vrai pour $n=0,1$ ; faux pour $n=2,3$ ; vrai à partir de $n=4$."
  },
  {
    id: 7,
    question: "Inégalité de Bernoulli : pour $x > -1$ et $n \\in \\mathbb{N}$ :",
    options: ["$(1+x)^n \\le 1+nx$", "$(1+x)^n \\ge 1+nx$", "$(1+x)^n = 1+nx$", "$(1+x)^n \\ge n^x$"],
    correctAnswer: 1,
    explanation: "$(1+x)^n \\ge 1+nx$, démontrée par récurrence sur $n$."
  },
  {
    id: 8,
    question: "$\\sum_{k=1}^n k = \\dfrac{n(n+1)}{2}$ se démontre :",
    options: ["Par TVI", "Par récurrence", "Par dérivation", "Pas démontrable"],
    correctAnswer: 1,
    explanation: "Récurrence : init n=1 vrai ; hérédité ajoute n+1 au membre de droite."
  },
  {
    id: 9,
    question: "Pour montrer 7 | $8^n - 1$, on utilise :",
    options: ["TVI", "Récurrence", "IPP", "Inversion"],
    correctAnswer: 1,
    explanation: "Récurrence : $8^{n+1}-1 = 8(8^n-1) + 7$, divisible par 7."
  },
  {
    id: 10,
    question: "Vrai ou faux ? L'hypothèse de récurrence (HR) doit toujours être utilisée explicitement dans l'hérédité.",
    options: ["Vrai", "Faux"],
    correctAnswer: 0,
    explanation: "Vrai. Sinon ce n'est pas une récurrence — la HR est l'outil clé."
  },
  {
    id: 11,
    question: "Pour la suite de Fibonacci, on utilise :",
    options: ["Récurrence simple", "Récurrence double", "Récurrence forte", "Pas de récurrence"],
    correctAnswer: 1,
    explanation: "Fibonacci : $F_{n+2} = F_{n+1} + F_n$ ⟹ récurrence double (initialisation $F_0$ et $F_1$)."
  },
  {
    id: 12,
    question: "Pour démontrer $0 \\le u_n \\le 2$, dans l'hérédité :",
    options: ["On montre uniquement $u_{n+1} \\ge 0$", "On montre uniquement $u_{n+1} \\le 2$", "On montre les deux simultanément", "On ne peut pas par récurrence"],
    correctAnswer: 2,
    explanation: "Les deux inégalités doivent être prouvées dans la même hérédité."
  }
];

// ============================================================
// Chapitre 10 — Matrices
// ============================================================
export const matricesQuizQuestions: MathQuizQuestion[] = [
  {
    id: 1,
    question: "Une matrice $m \\times n$ a :",
    options: ["$m$ colonnes et $n$ lignes", "$m$ lignes et $n$ colonnes", "$m \\times n$ lignes", "Aucune dimension"],
    correctAnswer: 1,
    explanation: "Convention : la première dimension est le nombre de lignes."
  },
  {
    id: 2,
    question: "Pour calculer $AB$, il faut :",
    options: ["$A$ et $B$ carrées", "Nb colonnes de $A$ = nb lignes de $B$", "$A=B$", "Aucune condition"],
    correctAnswer: 1,
    explanation: "Compatibilité : $(m\\times n) \\cdot (n \\times p) = (m \\times p)$."
  },
  {
    id: 3,
    question: "Vrai ou faux ? $AB = BA$ pour toutes matrices $A, B$ carrées.",
    options: ["Vrai", "Faux"],
    correctAnswer: 1,
    explanation: "Faux. Le produit matriciel n'est PAS commutatif en général."
  },
  {
    id: 4,
    question: "$\\det\\begin{pmatrix}3 & 2 \\\\ 1 & 4\\end{pmatrix}$ vaut :",
    options: ["10", "14", "$-10$", "$5$"],
    correctAnswer: 0,
    explanation: "$ad-bc = 3\\times 4 - 2\\times 1 = 10$."
  },
  {
    id: 5,
    question: "$A$ est inversible ⟺ :",
    options: ["$A = I$", "$\\det(A) \\neq 0$", "$A$ symétrique", "$A^T = A$"],
    correctAnswer: 1,
    explanation: "Une matrice carrée est inversible si et seulement si son déterminant est non nul."
  },
  {
    id: 6,
    question: "Inverse de $\\begin{pmatrix}a & b \\\\ c & d\\end{pmatrix}$ :",
    options: ["$\\dfrac{1}{ad-bc}\\begin{pmatrix}d & -b \\\\ -c & a\\end{pmatrix}$", "$\\begin{pmatrix}d & b \\\\ c & a\\end{pmatrix}$", "$\\begin{pmatrix}1/a & 1/b \\\\ 1/c & 1/d\\end{pmatrix}$", "L'inverse n'existe pas"],
    correctAnswer: 0,
    explanation: "Formule de l'inverse 2×2 : on échange les diagonales et on change le signe des extra-diagonaux, divisé par le déterminant."
  },
  {
    id: 7,
    question: "$\\begin{pmatrix}1 & 2 \\\\ 3 & 4\\end{pmatrix} \\begin{pmatrix}2 \\\\ 1\\end{pmatrix}$ vaut :",
    options: ["$\\begin{pmatrix}4 \\\\ 10\\end{pmatrix}$", "$\\begin{pmatrix}2 \\\\ 4\\end{pmatrix}$", "$\\begin{pmatrix}3 \\\\ 7\\end{pmatrix}$", "$\\begin{pmatrix}5 \\\\ 11\\end{pmatrix}$"],
    correctAnswer: 0,
    explanation: "$1\\cdot 2+2\\cdot 1=4$ et $3\\cdot 2+4\\cdot 1=10$."
  },
  {
    id: 8,
    question: "Pour résoudre $AX = Y$ avec $A$ inversible :",
    options: ["$X = AY$", "$X = A^{-1}Y$", "$X = YA^{-1}$", "$X = Y/A$"],
    correctAnswer: 1,
    explanation: "Multiplier à GAUCHE par $A^{-1}$ : $X = A^{-1} Y$."
  },
  {
    id: 9,
    question: "$(AB)^T$ vaut :",
    options: ["$A^T B^T$", "$B^T A^T$", "$AB$", "$BA$"],
    correctAnswer: 1,
    explanation: "Transposée d'un produit : $(AB)^T = B^T A^T$ (l'ordre est inversé)."
  },
  {
    id: 10,
    question: "$(AB)^{-1}$ vaut (si $A,B$ inversibles) :",
    options: ["$A^{-1} B^{-1}$", "$B^{-1} A^{-1}$", "$AB$", "$(AB)^T$"],
    correctAnswer: 1,
    explanation: "Inverse d'un produit : $(AB)^{-1} = B^{-1} A^{-1}$ (ordre inversé)."
  },
  {
    id: 11,
    question: "Vrai ou faux ? $A^2$ s'obtient en élevant chaque coefficient au carré.",
    options: ["Vrai", "Faux"],
    correctAnswer: 1,
    explanation: "Faux. $A^2 = A \\times A$ (produit matriciel)."
  },
  {
    id: 12,
    question: "La matrice identité $I_n$ vérifie :",
    options: ["$I_n A = 0$", "$I_n A = A I_n = A$", "$I_n^2 = 0$", "$\\det(I_n) = 0$"],
    correctAnswer: 1,
    explanation: "$I_n$ est l'élément neutre pour le produit matriciel."
  }
];

// ============================================================
// Mapping global slug URL → questions
// ============================================================
export const terminaleVersPrepaQuizQuestions: Record<string, MathQuizQuestion[]> = {
  'calculs': calculsQuizQuestions,
  'sommes-suites': sommesSuitesQuizQuestions,
  'sommes-suites-produits': sommesSuitesQuizQuestions, // alias clé interne
  'suites': suitesQuizQuestions,
  'fonctions': fonctionsQuizQuestions,
  'derivees': deriveesQuizQuestions,
  'derivées': deriveesQuizQuestions, // alias clé interne
  'integrales': integralesQuizQuestions,
  'integrale': integralesQuizQuestions, // alias clé interne
  'limites': limitesQuizQuestions,
  'probabilites': probabilitesQuizQuestions,
  'recurrence': recurrenceQuizQuestions,
  'matrices': matricesQuizQuestions,
  'matrice': matricesQuizQuestions, // alias clé interne
};
