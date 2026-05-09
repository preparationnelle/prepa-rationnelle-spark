import type { MathFlashcard } from '@/data/mathFlashcardsData';

// ============================================================
// Chapitre 1 — Calculs (puissances, exp, ln, identités)
// ============================================================
export const calculsFlashcards: MathFlashcard[] = [
  { id: 1, front: 'Produit de puissances (même base)', back: 'On somme les exposants quand on multiplie deux puissances de même base.', frontLatex: 'a^m \\times a^n = \\;?', backLatex: 'a^{m+n}', category: 'Puissances', chapter: 1, difficulty: 'facile' },
  { id: 2, front: 'Quotient de puissances (même base)', back: 'On soustrait les exposants quand on divise (avec $a \\neq 0$).', frontLatex: '\\dfrac{a^m}{a^n} = \\;?', backLatex: 'a^{m-n}\\quad(a \\neq 0)', category: 'Puissances', chapter: 1, difficulty: 'facile' },
  { id: 3, front: 'Puissance d\'une puissance', back: 'On multiplie les exposants.', frontLatex: '(a^m)^n = \\;?', backLatex: 'a^{m \\cdot n}', category: 'Puissances', chapter: 1, difficulty: 'facile' },
  { id: 4, front: 'Exposant négatif', back: 'Un exposant négatif passe au dénominateur.', frontLatex: 'a^{-n} = \\;?', backLatex: '\\dfrac{1}{a^n}\\quad(a \\neq 0)', category: 'Puissances', chapter: 1, difficulty: 'facile' },
  { id: 5, front: 'Exposant fractionnaire', back: 'L\'exposant $1/n$ correspond à la racine $n$-ième (pour $a \\geq 0$).', frontLatex: 'a^{1/n} = \\;?', backLatex: '\\sqrt[n]{a}\\quad(a \\geq 0)', category: 'Puissances', chapter: 1, difficulty: 'moyen' },
  { id: 6, front: 'Produit élevé à une puissance', back: 'On distribue l\'exposant sur chaque facteur.', frontLatex: '(ab)^n = \\;?', backLatex: 'a^n\\,b^n', category: 'Puissances', chapter: 1, difficulty: 'facile' },
  { id: 7, front: 'Piège classique sur les puissances', back: 'Le développement de $(a+b)^2$ donne trois termes (pas deux).', frontLatex: '(a+b)^2 = \\;?', backLatex: 'a^2 + 2ab + b^2', category: 'Pièges', chapter: 1, difficulty: 'moyen' },
  { id: 8, front: 'Définition de l\'exponentielle', back: 'L\'exponentielle est définie sur $\\mathbb{R}$, à valeurs strictement positives.', frontLatex: '\\exp(x) = \\;?', backLatex: 'e^x,\\quad e^x > 0\\;\\forall x \\in \\mathbb{R}', category: 'Exponentielle', chapter: 1, difficulty: 'facile' },
  { id: 9, front: 'Règle produit (exp)', back: 'L\'exponentielle transforme une somme en produit.', frontLatex: 'e^{a+b} = \\;?', backLatex: 'e^a \\cdot e^b', category: 'Exponentielle', chapter: 1, difficulty: 'facile' },
  { id: 10, front: 'Inverse de l\'exponentielle', back: 'Le signe moins dans l\'exposant inverse.', frontLatex: 'e^{-x} = \\;?', backLatex: '\\dfrac{1}{e^x}', category: 'Exponentielle', chapter: 1, difficulty: 'facile' },
  { id: 11, front: 'Limites de l\'exponentielle', back: 'L\'exponentielle explose en $+\\infty$ et tend vers $0$ en $-\\infty$.', frontLatex: '\\lim_{x \\to \\pm\\infty} e^x = \\;?', backLatex: '\\lim_{+\\infty} e^x = +\\infty,\\quad \\lim_{-\\infty} e^x = 0', category: 'Exponentielle', chapter: 1, difficulty: 'moyen' },
  { id: 12, front: 'Domaine du logarithme népérien', back: 'Le $\\ln$ n\'est défini que pour les réels strictement positifs.', frontLatex: '\\ln :\\; ?\\;\\to\\;\\mathbb{R}', backLatex: ']0;+\\infty[\\;\\to\\;\\mathbb{R}', category: 'Logarithme', chapter: 1, difficulty: 'facile' },
  { id: 13, front: 'Réciprocité ln / exp', back: 'L\'exponentielle et le logarithme sont réciproques l\'un de l\'autre.', frontLatex: '\\ln(e^x) = \\;? \\quad e^{\\ln x} = \\;?', backLatex: '\\ln(e^x) = x,\\quad e^{\\ln x} = x\\;(x > 0)', category: 'Logarithme', chapter: 1, difficulty: 'moyen' },
  { id: 14, front: 'ln d\'un produit', back: 'Le logarithme transforme un produit en somme.', frontLatex: '\\ln(ab) = \\;?', backLatex: '\\ln a + \\ln b\\quad(a,b > 0)', category: 'Logarithme', chapter: 1, difficulty: 'facile' },
  { id: 15, front: 'ln d\'un quotient', back: 'Le $\\ln$ d\'un quotient est la différence des $\\ln$.', frontLatex: '\\ln\\!\\left(\\dfrac{a}{b}\\right) = \\;?', backLatex: '\\ln a - \\ln b', category: 'Logarithme', chapter: 1, difficulty: 'facile' },
  { id: 16, front: 'ln d\'une puissance', back: 'L\'exposant sort en facteur du $\\ln$.', frontLatex: '\\ln(a^n) = \\;?', backLatex: 'n\\,\\ln a\\quad(a > 0)', category: 'Logarithme', chapter: 1, difficulty: 'moyen' },
  { id: 17, front: 'Valeurs particulières du logarithme', back: 'À retenir absolument : ces deux valeurs servent constamment.', frontLatex: '\\ln 1 = \\;? \\quad \\ln e = \\;?', backLatex: '\\ln 1 = 0,\\quad \\ln e = 1', category: 'Logarithme', chapter: 1, difficulty: 'facile' },
  { id: 18, front: 'Piège : ln d\'une somme', back: 'Le logarithme transforme un produit en somme, mais $\\ln(a+b)$ ne se simplifie pas.', frontLatex: '\\ln(a+b) \\stackrel{?}{=} \\ln a + \\ln b', backLatex: '\\text{FAUX — pas de simplification.}', category: 'Pièges', chapter: 1, difficulty: 'moyen' },
  { id: 19, front: 'Limites du logarithme', back: 'Le $\\ln$ tend vers $+\\infty$ très lentement, et vers $-\\infty$ en $0^+$.', frontLatex: '\\lim_{+\\infty} \\ln x,\\quad \\lim_{0^+} \\ln x', backLatex: '+\\infty,\\quad -\\infty', category: 'Logarithme', chapter: 1, difficulty: 'moyen' },
  { id: 20, front: 'Application : résoudre $e^x = 5$', back: 'On applique le $\\ln$ aux deux membres.', frontLatex: 'e^x = 5 \\;\\Rightarrow\\; x = \\;?', backLatex: 'x = \\ln 5 \\approx 1{,}609', category: 'Application', chapter: 1, difficulty: 'moyen' },
  { id: 21, front: 'Application : résoudre $\\ln(x) = 2$', back: 'On applique l\'exponentielle aux deux membres.', frontLatex: '\\ln x = 2 \\;\\Rightarrow\\; x = \\;?', backLatex: 'x = e^2 \\approx 7{,}389', category: 'Application', chapter: 1, difficulty: 'moyen' },
  { id: 22, front: 'Application : simplifier $\\ln(8) - \\ln(2)$', back: 'On utilise la règle du quotient puis on factorise.', frontLatex: '\\ln 8 - \\ln 2 = \\;?', backLatex: '\\ln 4 = 2\\ln 2', category: 'Application', chapter: 1, difficulty: 'moyen' },
  { id: 23, front: 'Application : simplifier $(e^x)^2 \\cdot e^{-3x}$', back: 'On regroupe les exposants : $2x - 3x = -x$.', frontLatex: '(e^x)^2 \\cdot e^{-3x} = \\;?', backLatex: 'e^{-x}', category: 'Application', chapter: 1, difficulty: 'moyen' },
  { id: 24, front: 'Inégalité fondamentale (exp)', back: 'L\'exponentielle est toujours au-dessus de sa tangente en $0$. Égalité ssi $x = 0$.', frontLatex: 'e^x \\;?\\; 1 + x', backLatex: 'e^x \\geq 1 + x\\quad\\forall x \\in \\mathbb{R}', category: 'Inégalités', chapter: 1, difficulty: 'difficile' },
  { id: 25, front: 'Inégalité fondamentale (ln)', back: 'Le $\\ln$ est toujours en-dessous de la droite $y = x$ (en $0$). Égalité ssi $x = 0$.', frontLatex: '\\ln(1+x) \\;?\\; x', backLatex: '\\ln(1+x) \\leq x\\quad(x > -1)', category: 'Inégalités', chapter: 1, difficulty: 'difficile' },
  { id: 26, front: 'Croissance comparée — exp vs polynôme', back: 'L\'exponentielle l\'emporte sur toute puissance de $x$ en $+\\infty$.', frontLatex: '\\lim_{x \\to +\\infty}\\dfrac{e^x}{x^n} = \\;?', backLatex: '+\\infty\\quad(n \\in \\mathbb{N})', category: 'Croissance comparée', chapter: 1, difficulty: 'difficile' },
  { id: 27, front: 'Croissance comparée — ln vs polynôme', back: 'Le polynôme l\'emporte sur le $\\ln$ en $+\\infty$.', frontLatex: '\\lim_{x \\to +\\infty}\\dfrac{\\ln x}{x^n} = \\;?', backLatex: '0\\quad(n > 0)', category: 'Croissance comparée', chapter: 1, difficulty: 'difficile' },
  { id: 28, front: 'Limite remarquable (exp en 0)', back: 'C\'est le taux d\'accroissement de $\\exp$ en $0$ : $\\exp\'(0) = 1$.', frontLatex: '\\lim_{x \\to 0}\\dfrac{e^x - 1}{x} = \\;?', backLatex: '1', category: 'Limites remarquables', chapter: 1, difficulty: 'moyen' },
  { id: 29, front: 'Limite remarquable (ln en 0)', back: 'C\'est le taux d\'accroissement de $\\ln$ en $1$.', frontLatex: '\\lim_{x \\to 0}\\dfrac{\\ln(1+x)}{x} = \\;?', backLatex: '1', category: 'Limites remarquables', chapter: 1, difficulty: 'moyen' },
  { id: 30, front: 'Identité remarquable $a^2 - b^2$', back: 'À reconnaître pour factoriser un trinôme du type différence de carrés.', frontLatex: 'a^2 - b^2 = \\;?', backLatex: '(a-b)(a+b)', category: 'Identités', chapter: 1, difficulty: 'facile' },
];

// ============================================================
// Chapitre 2 — Sommes, suites et produits
// ============================================================
export const sommesSuitesFlashcards: MathFlashcard[] = [
  { id: 1, front: 'Somme des $n$ premiers entiers', back: 'Formule de Gauss : à connaître par cœur.', frontLatex: '\\sum_{k=1}^{n} k = \\;?', backLatex: '\\dfrac{n(n+1)}{2}', category: 'Sommes', chapter: 2, difficulty: 'facile' },
  { id: 2, front: 'Somme des carrés des $n$ premiers entiers', back: 'Formule classique. Trois facteurs au numérateur, $6$ au dénominateur.', frontLatex: '\\sum_{k=1}^{n} k^2 = \\;?', backLatex: '\\dfrac{n(n+1)(2n+1)}{6}', category: 'Sommes', chapter: 2, difficulty: 'moyen' },
  { id: 3, front: 'Somme des cubes des $n$ premiers entiers', back: 'C\'est le carré de la somme simple : $(\\sum k)^2$.', frontLatex: '\\sum_{k=1}^{n} k^3 = \\;?', backLatex: '\\left(\\dfrac{n(n+1)}{2}\\right)^2', category: 'Sommes', chapter: 2, difficulty: 'moyen' },
  { id: 4, front: 'Somme géométrique', back: 'Valable pour tout $q \\neq 1$.', frontLatex: '\\sum_{k=0}^{n} q^k = \\;?', backLatex: '\\dfrac{1 - q^{n+1}}{1 - q}\\quad(q \\neq 1)', category: 'Sommes', chapter: 2, difficulty: 'moyen' },
  { id: 5, front: 'Linéarité de la somme', back: 'On peut sortir les constantes et séparer les sommes.', frontLatex: '\\sum (\\lambda a_k + \\mu b_k) = \\;?', backLatex: '\\lambda \\sum a_k + \\mu \\sum b_k', category: 'Sommes', chapter: 2, difficulty: 'moyen' },
  { id: 6, front: 'Somme d\'une constante', back: 'On somme $n$ fois la même valeur.', frontLatex: '\\sum_{k=1}^{n} c = \\;?', backLatex: 'n c', category: 'Sommes', chapter: 2, difficulty: 'facile' },
  { id: 7, front: 'Indice muet', back: 'Le nom de l\'indice de sommation n\'a aucune importance : on peut le renommer librement.', frontLatex: '\\sum_{k=1}^{n} a_k \\stackrel{?}{=} \\sum_{i=1}^{n} a_i', backLatex: '\\text{Vrai. L\'indice est muet.}', category: 'Sommes', chapter: 2, difficulty: 'facile' },
  { id: 8, front: 'Application : $1 + 2 + \\ldots + 100$', back: 'Application directe de la formule de Gauss : $100 \\times 101 / 2$.', frontLatex: '\\sum_{k=1}^{100} k = \\;?', backLatex: '5050', category: 'Application', chapter: 2, difficulty: 'facile' },
  { id: 9, front: 'Application : $1^2 + 2^2 + \\ldots + 10^2$', back: 'Application : $\\dfrac{10 \\times 11 \\times 21}{6}$.', frontLatex: '\\sum_{k=1}^{10} k^2 = \\;?', backLatex: '385', category: 'Application', chapter: 2, difficulty: 'moyen' },
  { id: 10, front: 'Suite arithmétique : terme général', back: 'On ajoute la raison $r$ à chaque pas.', frontLatex: 'u_n = \\;?', backLatex: 'u_1 + (n-1)r', category: 'Suites arithmétiques', chapter: 2, difficulty: 'facile' },
  { id: 11, front: 'Somme d\'une suite arithmétique', back: 'Moyenne des extrêmes multipliée par le nombre de termes.', frontLatex: 'S_n = \\sum_{k=1}^{n} u_k = \\;?', backLatex: '\\dfrac{n}{2}(u_1 + u_n)', category: 'Suites arithmétiques', chapter: 2, difficulty: 'moyen' },
  { id: 12, front: 'Suite géométrique : terme général', back: 'On multiplie par la raison $q$ à chaque pas.', frontLatex: 'u_n = \\;?', backLatex: 'u_1 \\cdot q^{n-1}', category: 'Suites géométriques', chapter: 2, difficulty: 'facile' },
  { id: 13, front: 'Somme d\'une suite géométrique ($q \\neq 1$)', back: 'Formule clé pour les calculs financiers (intérêts composés, annuités).', frontLatex: 'S_n = \\;?', backLatex: 'u_1\\,\\dfrac{1 - q^n}{1 - q}', category: 'Suites géométriques', chapter: 2, difficulty: 'moyen' },
  { id: 14, front: 'Reconnaître une suite arithmétique', back: 'On vérifie que la différence $u_{n+1} - u_n$ est constante.', category: 'Reconnaissance', chapter: 2, difficulty: 'facile' },
  { id: 15, front: 'Reconnaître une suite géométrique', back: 'On vérifie que le quotient $u_{n+1}/u_n$ est constant.', category: 'Reconnaissance', chapter: 2, difficulty: 'facile' },
  { id: 16, front: 'Application : $u_1 = 3$, $r = 2$, calculer $u_5$', back: 'On applique $u_n = u_1 + (n-1)r$.', frontLatex: 'u_5 = 3 + 4 \\times 2', backLatex: '11', category: 'Application', chapter: 2, difficulty: 'facile' },
  { id: 17, front: 'Application : $u_1 = 2$, $q = 3$, calculer $u_4$', back: 'On applique $u_n = u_1 \\cdot q^{n-1}$.', frontLatex: 'u_4 = 2 \\times 3^{3}', backLatex: '54', category: 'Application', chapter: 2, difficulty: 'moyen' },
  { id: 18, front: 'Application : $2 + 5 + 8 + \\ldots + u_{10}$', back: 'Suite arithmétique $u_1 = 2$, $r = 3$. On a $u_{10} = 29$, puis $S_{10} = 10/2 \\times 31$.', frontLatex: 'S_{10} = \\;?', backLatex: '155', category: 'Application', chapter: 2, difficulty: 'moyen' },
  { id: 19, front: 'Factorielle', back: 'Produit des $n$ premiers entiers naturels (avec $0! = 1$ par convention).', frontLatex: 'n! = \\;?', backLatex: '\\prod_{k=1}^{n} k', category: 'Produits', chapter: 2, difficulty: 'facile' },
  { id: 20, front: 'Produit d\'une constante', back: 'On multiplie $n$ fois la constante.', frontLatex: '\\prod_{k=1}^{n} c = \\;?', backLatex: 'c^n', category: 'Produits', chapter: 2, difficulty: 'facile' },
  { id: 21, front: 'Produit de produits', back: 'On regroupe sous un seul produit.', frontLatex: '\\prod a_k \\cdot \\prod b_k = \\;?', backLatex: '\\prod (a_k\\,b_k)', category: 'Produits', chapter: 2, difficulty: 'moyen' },
  { id: 22, front: 'Changement d\'indice', back: 'En posant $j = k - 1$, on translate les bornes.', frontLatex: '\\sum_{k=2}^{n+1} a_k = \\;?', backLatex: '\\sum_{j=1}^{n} a_{j+1}', category: 'Sommes', chapter: 2, difficulty: 'difficile' },
  { id: 23, front: 'Somme télescopique', back: 'Tous les termes intermédiaires se simplifient.', frontLatex: '\\sum_{k=1}^{n} (a_{k+1} - a_k) = \\;?', backLatex: 'a_{n+1} - a_1', category: 'Sommes', chapter: 2, difficulty: 'difficile' },
  { id: 24, front: 'Application : $\\sum_{k=1}^{20}(2k+1)$', back: 'Linéarité : $2\\sum k + \\sum 1 = 2 \\times 210 + 20$.', frontLatex: '\\sum_{k=1}^{20}(2k+1) = \\;?', backLatex: '440', category: 'Application', chapter: 2, difficulty: 'moyen' },
  { id: 25, front: 'Limite d\'une suite géométrique', back: 'Trois cas selon $q$ : convergence, stationnarité, divergence.', frontLatex: '\\lim_{n \\to +\\infty} q^n', backLatex: '0\\;\\text{si }|q|<1,\\;\\;1\\;\\text{si }q=1,\\;\\;+\\infty\\;\\text{si }q>1', category: 'Limites', chapter: 2, difficulty: 'moyen' },
];

// ============================================================
// Chapitre 3 — Suites
// ============================================================
export const suitesFlashcards: MathFlashcard[] = [
  { id: 1, front: 'Définition d\'une suite numérique', back: 'Application $u : \\mathbb{N} \\to \\mathbb{R}$. On note $u_n$ l\'image de $n$.', frontLatex: 'u :\\;?\\;\\to\\;?', backLatex: '\\mathbb{N} \\to \\mathbb{R}', category: 'Définitions', chapter: 3, difficulty: 'facile' },
  { id: 2, front: 'Suite arithmétique', back: 'La différence entre deux termes consécutifs est constante (la raison $r$).', frontLatex: 'u_{n+1} = \\;?', backLatex: 'u_n + r', category: 'Définitions', chapter: 3, difficulty: 'facile' },
  { id: 3, front: 'Suite géométrique', back: 'Le quotient entre deux termes consécutifs est constant (la raison $q$).', frontLatex: 'u_{n+1} = \\;?', backLatex: 'q \\cdot u_n', category: 'Définitions', chapter: 3, difficulty: 'facile' },
  { id: 4, front: 'Suite croissante', back: 'Chaque terme est supérieur ou égal au précédent.', frontLatex: 'u_{n+1} \\;?\\; u_n', backLatex: 'u_{n+1} \\geq u_n\\;\\forall n', category: 'Monotonie', chapter: 3, difficulty: 'facile' },
  { id: 5, front: 'Étudier la monotonie', back: 'Méthode : étudier le signe de $u_{n+1} - u_n$, ou (si $u_n > 0$) comparer $u_{n+1}/u_n$ à $1$.', category: 'Monotonie', chapter: 3, difficulty: 'moyen' },
  { id: 6, front: 'Suite majorée', back: 'Il existe un réel $M$ tel que $u_n \\leq M$ pour tout $n$.', frontLatex: '\\exists M,\\;\\forall n,\\; u_n \\;?\\; M', backLatex: 'u_n \\leq M', category: 'Bornes', chapter: 3, difficulty: 'facile' },
  { id: 7, front: 'Convergence d\'une suite', back: 'La suite admet une limite finie : $u_n$ s\'approche aussi près qu\'on veut de $L$.', frontLatex: 'u_n \\to L \\;\\Leftrightarrow\\; ?', backLatex: '\\forall \\varepsilon > 0,\\;\\exists N,\\;n \\geq N \\Rightarrow |u_n - L| < \\varepsilon', category: 'Limites', chapter: 3, difficulty: 'moyen' },
  { id: 8, front: 'Suite divergente', back: 'Suite qui n\'admet pas de limite finie : tend vers $\\pm\\infty$ ou n\'a pas de limite.', category: 'Limites', chapter: 3, difficulty: 'moyen' },
  { id: 9, front: 'Théorème de la limite monotone', back: 'Toute suite croissante majorée converge (et toute suite décroissante minorée aussi).', category: 'Théorèmes', chapter: 3, difficulty: 'difficile' },
  { id: 10, front: 'Théorème des gendarmes', back: 'Si $v_n \\leq u_n \\leq w_n$ et $\\lim v_n = \\lim w_n = L$, alors $\\lim u_n = L$.', frontLatex: 'v_n \\leq u_n \\leq w_n,\\;\\lim v_n = \\lim w_n = L', backLatex: '\\lim u_n = L', category: 'Théorèmes', chapter: 3, difficulty: 'difficile' },
  { id: 11, front: 'Limite d\'une suite géométrique', back: 'Quatre cas selon la raison $q$.', frontLatex: '\\lim_{n \\to +\\infty} q^n', backLatex: '0\\;(|q|<1),\\;1\\;(q=1),\\;+\\infty\\;(q>1),\\;\\text{div.}\\;(q\\leq -1)', category: 'Limites', chapter: 3, difficulty: 'moyen' },
  { id: 12, front: 'Limite d\'une suite arithmétique', back: 'Selon le signe de la raison.', frontLatex: '\\lim u_n,\\;u_n = u_1 + (n-1)r', backLatex: '+\\infty\\;(r>0),\\;-\\infty\\;(r<0),\\;u_1\\;(r=0)', category: 'Limites', chapter: 3, difficulty: 'facile' },
  { id: 13, front: 'Opérations sur les limites', back: 'Limite d\'une somme = somme des limites, idem pour le produit (sous réserve de formes définies).', frontLatex: '\\lim(u_n + v_n) = \\;?', backLatex: '\\lim u_n + \\lim v_n', category: 'Limites', chapter: 3, difficulty: 'moyen' },
  { id: 14, front: 'Limite de référence : $1/n$', back: 'À connaître absolument.', frontLatex: '\\lim_{n \\to +\\infty} \\dfrac{1}{n} = \\;?', backLatex: '0', category: 'Limites', chapter: 3, difficulty: 'facile' },
  { id: 15, front: 'Application : limite de $u_n = (n+1)/n$', back: 'On factorise : $u_n = 1 + 1/n$.', frontLatex: '\\lim_{n \\to +\\infty} \\dfrac{n+1}{n} = \\;?', backLatex: '1', category: 'Application', chapter: 3, difficulty: 'facile' },
  { id: 16, front: 'Application : limite de $u_n = (-1)^n$', back: 'La suite alterne entre $-1$ et $1$, elle ne converge pas.', frontLatex: '\\lim_{n \\to +\\infty} (-1)^n = \\;?', backLatex: '\\text{Pas de limite (suite divergente)}', category: 'Application', chapter: 3, difficulty: 'facile' },
  { id: 17, front: 'Suite récurrente : limite éventuelle', back: 'Si $u_{n+1} = f(u_n)$ converge vers $L$ et $f$ est continue, alors $L$ est un point fixe de $f$.', frontLatex: 'u_{n+1} = f(u_n) \\to L \\;\\Rightarrow\\; ?', backLatex: 'L = f(L)', category: 'Récurrentes', chapter: 3, difficulty: 'difficile' },
  { id: 18, front: 'Application : $u_0 = 1$, $u_{n+1} = \\sqrt{u_n}$', back: 'Décroissante, minorée par $1$, donc converge. Limite : $L = \\sqrt{L}$, soit $L = 1$.', frontLatex: '\\lim u_n = \\;?', backLatex: '1', category: 'Application', chapter: 3, difficulty: 'difficile' },
  { id: 19, front: 'Application : limite de $n^2 / 2^n$', back: 'Croissance comparée : la géométrique l\'emporte.', frontLatex: '\\lim_{n \\to +\\infty} \\dfrac{n^2}{2^n} = \\;?', backLatex: '0', category: 'Application', chapter: 3, difficulty: 'difficile' },
  { id: 20, front: 'Suites adjacentes', back: '$u$ croissante, $v$ décroissante, et $u_n - v_n \\to 0$. Alors les deux convergent vers la même limite.', category: 'Théorèmes', chapter: 3, difficulty: 'difficile' },
  { id: 21, front: 'Suite bornée', back: 'Majorée ET minorée. Toute suite convergente est nécessairement bornée.', category: 'Bornes', chapter: 3, difficulty: 'moyen' },
  { id: 22, front: 'Limite et inégalités larges', back: 'Le passage à la limite préserve les inégalités larges (mais pas les strictes).', frontLatex: 'u_n \\leq v_n,\\;u_n \\to \\ell,\\;v_n \\to \\ell\'', backLatex: '\\ell \\leq \\ell\'', category: 'Limites', chapter: 3, difficulty: 'moyen' },
  { id: 23, front: 'Théorème de comparaison', back: 'Si $u_n \\geq v_n$ et $v_n \\to +\\infty$, alors $u_n \\to +\\infty$.', category: 'Théorèmes', chapter: 3, difficulty: 'moyen' },
  { id: 24, front: 'Suite arith-géo', back: 'Astuce : poser $v_n = u_n - L$ avec $L = b/(1-a)$. Alors $v_n$ est géométrique de raison $a$.', frontLatex: 'u_{n+1} = a\\,u_n + b', backLatex: 'v_n = u_n - \\dfrac{b}{1-a}\\;\\text{est géométrique}', category: 'Récurrentes', chapter: 3, difficulty: 'difficile' },
  { id: 25, front: 'Application : $u_{n+1} = u_n/2 + 1$, $u_0 = 0$', back: '$L = 2$. Poser $v_n = u_n - 2$, géométrique de raison $1/2$. Alors $u_n = 2 - 2(1/2)^n \\to 2$.', frontLatex: '\\lim u_n = \\;?', backLatex: '2', category: 'Application', chapter: 3, difficulty: 'difficile' },
];

// ============================================================
// Chapitre 4 — Fonctions
// ============================================================
export const fonctionsFlashcards: MathFlashcard[] = [
  { id: 1, front: 'Définition d\'une fonction', back: 'Application $f : D \\to \\mathbb{R}$ qui à tout $x \\in D$ associe un unique réel $f(x)$.', category: 'Définitions', chapter: 4, difficulty: 'facile' },
  { id: 2, front: 'Domaine de définition', back: 'Ensemble des $x$ pour lesquels $f(x)$ existe : dénominateur $\\neq 0$, racine $\\geq 0$, $\\ln$ de strict positif.', category: 'Domaine', chapter: 4, difficulty: 'facile' },
  { id: 3, front: 'Fonction paire', back: 'Symétrie par rapport à l\'axe $Oy$.', frontLatex: 'f \\text{ paire} \\Leftrightarrow \\;?', backLatex: 'f(-x) = f(x)\\;\\forall x', category: 'Symétries', chapter: 4, difficulty: 'facile' },
  { id: 4, front: 'Fonction impaire', back: 'Symétrie par rapport à l\'origine $O$.', frontLatex: 'f \\text{ impaire} \\Leftrightarrow \\;?', backLatex: 'f(-x) = -f(x)\\;\\forall x', category: 'Symétries', chapter: 4, difficulty: 'facile' },
  { id: 5, front: 'Fonction périodique', back: 'Il existe $T > 0$ tel que $f(x+T) = f(x)$ pour tout $x$. $T$ est une période.', frontLatex: 'f(x+T) = \\;?', backLatex: 'f(x)\\quad(T > 0)', category: 'Symétries', chapter: 4, difficulty: 'moyen' },
  { id: 6, front: 'Monotonie', back: 'Croissante : $x \\leq y \\Rightarrow f(x) \\leq f(y)$. Décroissante : inégalité inversée.', category: 'Monotonie', chapter: 4, difficulty: 'facile' },
  { id: 7, front: 'Domaine de $\\ln(x)$', back: 'Le $\\ln$ n\'est défini que pour les réels strictement positifs.', frontLatex: 'D_{\\ln} = \\;?', backLatex: ']0;+\\infty[', category: 'Domaine', chapter: 4, difficulty: 'facile' },
  { id: 8, front: 'Domaine de $\\sqrt{x}$', back: 'On peut prendre la racine de $0$ (mais pas d\'un négatif).', frontLatex: 'D_{\\sqrt{\\cdot}} = \\;?', backLatex: '[0;+\\infty[', category: 'Domaine', chapter: 4, difficulty: 'facile' },
  { id: 9, front: 'Domaine de $1/x$', back: 'On exclut le $0$ du dénominateur.', frontLatex: 'D_{1/x} = \\;?', backLatex: '\\mathbb{R} \\setminus \\{0\\}', category: 'Domaine', chapter: 4, difficulty: 'facile' },
  { id: 10, front: 'Composition de fonctions', back: 'On applique $g$ d\'abord, puis $f$. Le domaine est l\'ensemble des $x$ tels que $g(x) \\in D_f$.', frontLatex: '(f \\circ g)(x) = \\;?', backLatex: 'f(g(x))', category: 'Composition', chapter: 4, difficulty: 'moyen' },
  { id: 11, front: 'Bijection', back: 'Injective ($f(x)=f(y) \\Rightarrow x=y$) ET surjective (tout $y$ est atteint). Une bijection admet une réciproque.', category: 'Bijection', chapter: 4, difficulty: 'difficile' },
  { id: 12, front: 'Fonction réciproque', back: 'Notée $f^{-1}$. Le graphe de $f^{-1}$ est symétrique de celui de $f$ par rapport à la droite $y = x$.', frontLatex: 'f \\circ f^{-1} = \\;?', backLatex: '\\mathrm{Id}', category: 'Bijection', chapter: 4, difficulty: 'difficile' },
  { id: 13, front: 'Continuité en un point', back: '$f$ est continue en $a$ si la limite en $a$ existe et vaut $f(a)$.', frontLatex: 'f \\text{ continue en } a \\Leftrightarrow \\;?', backLatex: '\\lim_{x \\to a} f(x) = f(a)', category: 'Continuité', chapter: 4, difficulty: 'moyen' },
  { id: 14, front: 'Théorème des valeurs intermédiaires (TVI)', back: '$f$ continue sur $[a,b]$, $k$ entre $f(a)$ et $f(b)$ : il existe $c \\in [a,b]$ tel que $f(c) = k$.', category: 'Théorèmes', chapter: 4, difficulty: 'difficile' },
  { id: 15, front: 'Asymptote horizontale', back: 'Si $\\lim_{\\pm\\infty} f = L$ (fini), alors $y = L$ est asymptote horizontale.', frontLatex: '\\lim_{x \\to \\pm\\infty} f(x) = L', backLatex: 'y = L \\text{ asymptote horizontale}', category: 'Asymptotes', chapter: 4, difficulty: 'moyen' },
  { id: 16, front: 'Asymptote verticale', back: 'Si $\\lim_{x \\to a} f(x) = \\pm\\infty$, alors $x = a$ est asymptote verticale.', frontLatex: '\\lim_{x \\to a} f(x) = \\pm\\infty', backLatex: 'x = a \\text{ asymptote verticale}', category: 'Asymptotes', chapter: 4, difficulty: 'moyen' },
  { id: 17, front: 'Application : domaine de $\\ln(x^2 - 4)$', back: 'On résout $x^2 - 4 > 0$, soit $|x| > 2$.', frontLatex: 'D_f = \\;?', backLatex: ']{-\\infty};-2[\\,\\cup\\,]2;+\\infty[', category: 'Application', chapter: 4, difficulty: 'moyen' },
  { id: 18, front: 'Application : parité de $f(x) = x^3 - x$', back: 'On calcule $f(-x) = -x^3 + x = -f(x)$ : impaire.', frontLatex: 'f(-x) = \\;?', backLatex: '-f(x) \\Rightarrow \\text{impaire}', category: 'Application', chapter: 4, difficulty: 'facile' },
  { id: 19, front: 'Application : domaine de $\\dfrac{\\sqrt{x-1}}{x-3}$', back: 'On exige $x - 1 \\geq 0$ ET $x - 3 \\neq 0$.', frontLatex: 'D_f = \\;?', backLatex: '[1;3[\\,\\cup\\,]3;+\\infty[', category: 'Application', chapter: 4, difficulty: 'moyen' },
  { id: 20, front: 'Fonctions usuelles : monotonie', back: '$x^2$ : décroissante puis croissante. $e^x$, $\\ln$, $x^3$ : strictement croissantes sur leur domaine.', category: 'Usuelles', chapter: 4, difficulty: 'facile' },
  { id: 21, front: 'Étape d\'une étude de fonction', back: '1) Domaine 2) Parité/périodicité 3) Limites 4) Dérivée et signe 5) Tableau de variations 6) Asymptotes 7) Tracé.', category: 'Méthode', chapter: 4, difficulty: 'moyen' },
  { id: 22, front: 'Tangente en $a$', back: 'Équation de la tangente à la courbe de $f$ au point d\'abscisse $a$.', frontLatex: 'T_a:\\; y = \\;?', backLatex: 'f\'(a)(x - a) + f(a)', category: 'Tangente', chapter: 4, difficulty: 'moyen' },
  { id: 23, front: 'Image directe et antécédent', back: 'Image de $a$ : c\'est $f(a)$. Antécédent de $y$ : tout $x$ tel que $f(x) = y$.', category: 'Vocabulaire', chapter: 4, difficulty: 'facile' },
  { id: 24, front: 'Application : résoudre $x^2 - 5x + 6 = 0$', back: 'Discriminant $\\Delta = 25 - 24 = 1$. Racines $x = (5 \\pm 1)/2$.', frontLatex: 'x = \\;?', backLatex: 'x = 2 \\text{ ou } x = 3', category: 'Application', chapter: 4, difficulty: 'moyen' },
  { id: 25, front: 'Application : tangente à $f(x) = x^2$ en $x = 1$', back: 'On a $f\'(1) = 2$ et $f(1) = 1$.', frontLatex: 'T_1:\\; y = \\;?', backLatex: '2(x-1) + 1 = 2x - 1', category: 'Application', chapter: 4, difficulty: 'moyen' },
];

// ============================================================
// Chapitre 5 — Dérivées
// ============================================================
export const deriveesFlashcards: MathFlashcard[] = [
  { id: 1, front: 'Définition de $f\'(a)$', back: 'Limite du taux d\'accroissement quand $h \\to 0$.', frontLatex: 'f\'(a) = \\;?', backLatex: '\\lim_{h \\to 0}\\dfrac{f(a+h) - f(a)}{h}', category: 'Définition', chapter: 5, difficulty: 'moyen' },
  { id: 2, front: 'Dérivée de $x^n$', back: 'L\'exposant descend, on retire $1$ à l\'exposant.', frontLatex: '(x^n)\' = \\;?', backLatex: 'n\\,x^{n-1}', category: 'Dérivées usuelles', chapter: 5, difficulty: 'facile' },
  { id: 3, front: 'Dérivée de $e^x$', back: 'L\'exponentielle est sa propre dérivée.', frontLatex: '(e^x)\' = \\;?', backLatex: 'e^x', category: 'Dérivées usuelles', chapter: 5, difficulty: 'facile' },
  { id: 4, front: 'Dérivée de $\\ln(x)$', back: 'Valable pour $x > 0$.', frontLatex: '(\\ln x)\' = \\;?', backLatex: '\\dfrac{1}{x}\\quad(x > 0)', category: 'Dérivées usuelles', chapter: 5, difficulty: 'facile' },
  { id: 5, front: 'Dérivée de $\\sin$ et $\\cos$', back: '$\\sin$ donne $\\cos$, $\\cos$ donne $-\\sin$.', frontLatex: '(\\sin x)\',\\;(\\cos x)\' = \\;?', backLatex: '\\cos x,\\quad -\\sin x', category: 'Dérivées usuelles', chapter: 5, difficulty: 'facile' },
  { id: 6, front: 'Dérivée de $\\sqrt{x}$', back: 'Valable pour $x > 0$.', frontLatex: '(\\sqrt{x})\' = \\;?', backLatex: '\\dfrac{1}{2\\sqrt{x}}', category: 'Dérivées usuelles', chapter: 5, difficulty: 'moyen' },
  { id: 7, front: 'Dérivée de $1/x$', back: 'Attention au signe moins.', frontLatex: '\\left(\\dfrac{1}{x}\\right)\' = \\;?', backLatex: '-\\dfrac{1}{x^2}', category: 'Dérivées usuelles', chapter: 5, difficulty: 'facile' },
  { id: 8, front: 'Dérivée d\'une somme', back: 'La dérivée passe sur la somme.', frontLatex: '(u + v)\' = \\;?', backLatex: 'u\' + v\'', category: 'Règles', chapter: 5, difficulty: 'facile' },
  { id: 9, front: 'Dérivée d\'un produit', back: 'Règle du produit : derivative crosswise.', frontLatex: '(u v)\' = \\;?', backLatex: 'u\' v + u v\'', category: 'Règles', chapter: 5, difficulty: 'moyen' },
  { id: 10, front: 'Dérivée d\'un quotient', back: 'Attention : le signe est moins, le dénominateur est au carré.', frontLatex: '\\left(\\dfrac{u}{v}\\right)\' = \\;?', backLatex: '\\dfrac{u\' v - u v\'}{v^2}', category: 'Règles', chapter: 5, difficulty: 'moyen' },
  { id: 11, front: 'Dérivée d\'une composée', back: 'Règle de la chaîne.', frontLatex: '(f \\circ g)\'(x) = \\;?', backLatex: 'f\'(g(x)) \\cdot g\'(x)', category: 'Règles', chapter: 5, difficulty: 'difficile' },
  { id: 12, front: 'Dérivée de $e^u$', back: 'On multiplie par $u\'$.', frontLatex: '(e^u)\' = \\;?', backLatex: 'u\'\\,e^u', category: 'Composées', chapter: 5, difficulty: 'moyen' },
  { id: 13, front: 'Dérivée de $\\ln(u)$', back: 'Quotient $u\'$ sur $u$ (avec $u > 0$).', frontLatex: '(\\ln u)\' = \\;?', backLatex: '\\dfrac{u\'}{u}', category: 'Composées', chapter: 5, difficulty: 'moyen' },
  { id: 14, front: 'Dérivée de $u^n$', back: 'Puissance externe + dérivée interne.', frontLatex: '(u^n)\' = \\;?', backLatex: 'n\\,u\'\\,u^{n-1}', category: 'Composées', chapter: 5, difficulty: 'moyen' },
  { id: 15, front: 'Dérivée et monotonie', back: 'Le signe de la dérivée donne le sens de variation.', frontLatex: 'f\' > 0 \\;\\Rightarrow\\; ?', backLatex: 'f\\;\\text{strictement croissante}', category: 'Monotonie', chapter: 5, difficulty: 'moyen' },
  { id: 16, front: 'Tangente en $a$', back: 'Coefficient directeur = $f\'(a)$, passant par $(a, f(a))$.', frontLatex: 'T_a:\\;y = \\;?', backLatex: 'f\'(a)(x-a) + f(a)', category: 'Tangente', chapter: 5, difficulty: 'moyen' },
  { id: 17, front: 'Application : dériver $3x^2 + 2x - 1$', back: 'Linéarité : on dérive terme à terme.', frontLatex: '(3x^2 + 2x - 1)\' = \\;?', backLatex: '6x + 2', category: 'Application', chapter: 5, difficulty: 'facile' },
  { id: 18, front: 'Application : dériver $x^2 e^x$', back: 'Produit : $(2x)e^x + x^2 e^x$.', frontLatex: '(x^2 e^x)\' = \\;?', backLatex: 'e^x(x^2 + 2x)', category: 'Application', chapter: 5, difficulty: 'moyen' },
  { id: 19, front: 'Application : dériver $\\ln(x^2 + 1)$', back: 'On a $u = x^2 + 1$, $u\' = 2x$.', frontLatex: '(\\ln(x^2+1))\' = \\;?', backLatex: '\\dfrac{2x}{x^2 + 1}', category: 'Application', chapter: 5, difficulty: 'moyen' },
  { id: 20, front: 'Application : dériver $\\dfrac{2x+1}{x-3}$', back: 'Quotient : $(2(x-3) - (2x+1))/(x-3)^2$.', frontLatex: '\\left(\\dfrac{2x+1}{x-3}\\right)\' = \\;?', backLatex: '\\dfrac{-7}{(x-3)^2}', category: 'Application', chapter: 5, difficulty: 'moyen' },
  { id: 21, front: 'Extremum local — condition nécessaire', back: 'Si $f$ admet un extremum local en $a$ (intérieur au domaine), alors la dérivée s\'annule.', frontLatex: 'f\\;\\text{extremum en } a \\Rightarrow \\;?', backLatex: 'f\'(a) = 0', category: 'Extremums', chapter: 5, difficulty: 'moyen' },
  { id: 22, front: 'Test de la dérivée seconde', back: 'Si $f\'(a) = 0$ : $f\'\'(a) > 0$ donne un minimum local, $f\'\'(a) < 0$ donne un maximum local.', category: 'Extremums', chapter: 5, difficulty: 'difficile' },
  { id: 23, front: 'Convexité via $f\'\'$', back: '$f\'\' \\geq 0$ donne $f$ convexe (au-dessus des tangentes), $f\'\' \\leq 0$ donne $f$ concave.', category: 'Convexité', chapter: 5, difficulty: 'difficile' },
  { id: 24, front: 'Point d\'inflexion', back: 'Point où $f\'\'$ change de signe. La courbe traverse sa tangente.', category: 'Convexité', chapter: 5, difficulty: 'difficile' },
  { id: 25, front: 'Application : tangente à $f(x) = x^3$ en $x = 1$', back: 'On a $f\'(x) = 3x^2$, donc $f\'(1) = 3$ et $f(1) = 1$.', frontLatex: 'T_1:\\;y = \\;?', backLatex: '3(x-1) + 1 = 3x - 2', category: 'Application', chapter: 5, difficulty: 'moyen' },
];

// ============================================================
// Chapitre 6 — Intégrale
// ============================================================
export const integralesFlashcards: MathFlashcard[] = [
  { id: 1, front: 'Définition d\'une primitive', back: 'Une primitive de $f$ est une fonction $F$ dont la dérivée vaut $f$.', frontLatex: 'F\\;\\text{primitive de}\\;f \\Leftrightarrow \\;?', backLatex: 'F\' = f', category: 'Définition', chapter: 6, difficulty: 'facile' },
  { id: 2, front: 'Théorème fondamental de l\'analyse', back: 'L\'intégrale définie est la différence des valeurs d\'une primitive.', frontLatex: '\\int_a^b f(x)\\,dx = \\;?', backLatex: 'F(b) - F(a)', category: 'Théorèmes', chapter: 6, difficulty: 'difficile' },
  { id: 3, front: 'Primitive de $x^n$ ($n \\neq -1$)', back: 'On augmente l\'exposant de $1$ et on divise par le nouvel exposant.', frontLatex: '\\int x^n\\,dx = \\;?', backLatex: '\\dfrac{x^{n+1}}{n+1} + C', category: 'Primitives usuelles', chapter: 6, difficulty: 'facile' },
  { id: 4, front: 'Primitive de $1/x$', back: 'Cas particulier exclu de la formule générale.', frontLatex: '\\int \\dfrac{1}{x}\\,dx = \\;?', backLatex: '\\ln|x| + C', category: 'Primitives usuelles', chapter: 6, difficulty: 'facile' },
  { id: 5, front: 'Primitive de $e^x$', back: 'L\'exponentielle est sa propre primitive (à constante près).', frontLatex: '\\int e^x\\,dx = \\;?', backLatex: 'e^x + C', category: 'Primitives usuelles', chapter: 6, difficulty: 'facile' },
  { id: 6, front: 'Primitives de $\\sin$ et $\\cos$', back: 'Attention au signe : $\\sin$ donne $-\\cos$.', frontLatex: '\\int \\sin x\\,dx,\\;\\int \\cos x\\,dx', backLatex: '-\\cos x + C,\\;\\sin x + C', category: 'Primitives usuelles', chapter: 6, difficulty: 'facile' },
  { id: 7, front: 'Primitive de $u\' u^n$', back: 'Forme à reconnaître pour intégrer une composée polynomiale.', frontLatex: '\\int u\'\\,u^n\\,dx = \\;?', backLatex: '\\dfrac{u^{n+1}}{n+1} + C\\quad(n \\neq -1)', category: 'Primitives composées', chapter: 6, difficulty: 'moyen' },
  { id: 8, front: 'Primitive de $u\'/u$', back: 'Forme à reconnaître pour faire apparaître un $\\ln$.', frontLatex: '\\int \\dfrac{u\'}{u}\\,dx = \\;?', backLatex: '\\ln|u| + C', category: 'Primitives composées', chapter: 6, difficulty: 'moyen' },
  { id: 9, front: 'Primitive de $u\' e^u$', back: 'Forme à reconnaître pour intégrer une exponentielle composée.', frontLatex: '\\int u\'\\,e^u\\,dx = \\;?', backLatex: 'e^u + C', category: 'Primitives composées', chapter: 6, difficulty: 'moyen' },
  { id: 10, front: 'Linéarité de l\'intégrale', back: 'L\'intégrale est linéaire : on peut sortir les constantes et séparer.', frontLatex: '\\int (\\lambda f + \\mu g) = \\;?', backLatex: '\\lambda \\int f + \\mu \\int g', category: 'Propriétés', chapter: 6, difficulty: 'facile' },
  { id: 11, front: 'Relation de Chasles', back: 'On peut découper l\'intervalle d\'intégration.', frontLatex: '\\int_a^b f = \\;?', backLatex: '\\int_a^c f + \\int_c^b f', category: 'Propriétés', chapter: 6, difficulty: 'facile' },
  { id: 12, front: 'Inversion des bornes', back: 'Échanger les bornes change le signe.', frontLatex: '\\int_a^b f = \\;?', backLatex: '-\\int_b^a f', category: 'Propriétés', chapter: 6, difficulty: 'facile' },
  { id: 13, front: 'Positivité de l\'intégrale', back: 'Si $f \\geq 0$ sur $[a,b]$ avec $a \\leq b$, alors l\'intégrale est positive.', frontLatex: 'f \\geq 0 \\Rightarrow \\;?', backLatex: '\\int_a^b f \\geq 0', category: 'Inégalités', chapter: 6, difficulty: 'moyen' },
  { id: 14, front: 'Croissance de l\'intégrale', back: 'On peut intégrer une inégalité (sous réserve $a \\leq b$).', frontLatex: 'f \\leq g \\Rightarrow \\;?', backLatex: '\\int_a^b f \\leq \\int_a^b g', category: 'Inégalités', chapter: 6, difficulty: 'moyen' },
  { id: 15, front: 'Intégration par parties (IPP)', back: 'Méthode pour intégrer un produit (souvent polynôme $\\times$ exp/ln/trig).', frontLatex: '\\int_a^b u\' v\\,dx = \\;?', backLatex: '[uv]_a^b - \\int_a^b u\\,v\'\\,dx', category: 'Méthodes', chapter: 6, difficulty: 'difficile' },
  { id: 16, front: 'Aire sous une courbe', back: 'Pour $f \\geq 0$, l\'intégrale donne l\'aire entre la courbe et l\'axe $Ox$.', frontLatex: '\\mathcal{A} = \\;?', backLatex: '\\int_a^b f(x)\\,dx', category: 'Géométrie', chapter: 6, difficulty: 'moyen' },
  { id: 17, front: 'Valeur moyenne de $f$', back: 'Hauteur moyenne de la courbe sur l\'intervalle.', frontLatex: '\\mu = \\;?', backLatex: '\\dfrac{1}{b-a}\\int_a^b f(x)\\,dx', category: 'Définitions', chapter: 6, difficulty: 'moyen' },
  { id: 18, front: 'Symétrie pour $f$ paire', back: 'On peut intégrer sur la moitié et doubler.', frontLatex: '\\int_{-a}^{a} f = \\;?\\quad(f\\;\\text{paire})', backLatex: '2 \\int_0^a f', category: 'Symétries', chapter: 6, difficulty: 'moyen' },
  { id: 19, front: 'Symétrie pour $f$ impaire', back: 'L\'intégrale d\'une fonction impaire sur un intervalle symétrique est nulle.', frontLatex: '\\int_{-a}^{a} f = \\;?\\quad(f\\;\\text{impaire})', backLatex: '0', category: 'Symétries', chapter: 6, difficulty: 'moyen' },
  { id: 20, front: 'Application : $\\int_0^1 x^2\\,dx$', back: 'Primitive : $x^3/3$, évaluée entre $0$ et $1$.', frontLatex: '\\int_0^1 x^2\\,dx = \\;?', backLatex: '\\dfrac{1}{3}', category: 'Application', chapter: 6, difficulty: 'facile' },
  { id: 21, front: 'Application : $\\int_0^1 e^x\\,dx$', back: 'Primitive : $e^x$, évaluée entre $0$ et $1$.', frontLatex: '\\int_0^1 e^x\\,dx = \\;?', backLatex: 'e - 1', category: 'Application', chapter: 6, difficulty: 'facile' },
  { id: 22, front: 'Application : $\\int_1^e \\dfrac{1}{x}\\,dx$', back: 'Primitive : $\\ln|x|$, évaluée entre $1$ et $e$.', frontLatex: '\\int_1^e \\dfrac{dx}{x} = \\;?', backLatex: '\\ln e - \\ln 1 = 1', category: 'Application', chapter: 6, difficulty: 'facile' },
  { id: 23, front: 'Application : $\\int_2^5 (x+1)\\,dx$', back: 'Primitive : $x^2/2 + x$. Évaluation entre $2$ et $5$.', frontLatex: '\\int_2^5 (x+1)\\,dx = \\;?', backLatex: '\\dfrac{27}{2} = 13{,}5', category: 'Application', chapter: 6, difficulty: 'moyen' },
  { id: 24, front: 'Application IPP : $\\int x e^x\\,dx$', back: 'On pose $u = x$ (donc $u\' = 1$) et $v\' = e^x$ (donc $v = e^x$).', frontLatex: '\\int x e^x\\,dx = \\;?', backLatex: '(x-1)\\,e^x + C', category: 'Application', chapter: 6, difficulty: 'difficile' },
  { id: 25, front: 'Application IPP : $\\int \\ln(x)\\,dx$', back: 'On pose $u = \\ln x$ et $v\' = 1$.', frontLatex: '\\int \\ln x\\,dx = \\;?', backLatex: 'x\\,\\ln x - x + C', category: 'Application', chapter: 6, difficulty: 'difficile' },
];

// ============================================================
// Chapitre 7 — Limites
// ============================================================
export const limitesFlashcards: MathFlashcard[] = [
  { id: 1, front: 'Limite de $x^n$ en $+\\infty$', back: 'Pour tout $n > 0$, $x^n$ tend vers $+\\infty$.', frontLatex: '\\lim_{x \\to +\\infty} x^n = \\;?', backLatex: '+\\infty\\quad(n > 0)', category: 'Limites usuelles', chapter: 7, difficulty: 'facile' },
  { id: 2, front: 'Limite de $1/x$ en $0^+$', back: 'Asymptote verticale en $0$.', frontLatex: '\\lim_{x \\to 0^+}\\dfrac{1}{x} = \\;?', backLatex: '+\\infty', category: 'Limites usuelles', chapter: 7, difficulty: 'facile' },
  { id: 3, front: 'Limites de l\'exponentielle', back: 'Explose en $+\\infty$, tend vers $0$ en $-\\infty$.', frontLatex: '\\lim_{\\pm\\infty} e^x', backLatex: '+\\infty,\\;\\;0', category: 'Limites usuelles', chapter: 7, difficulty: 'facile' },
  { id: 4, front: 'Limites du logarithme', back: 'Tend vers $+\\infty$ en $+\\infty$ (lentement) et vers $-\\infty$ en $0^+$.', frontLatex: '\\lim_{+\\infty} \\ln,\\;\\lim_{0^+} \\ln', backLatex: '+\\infty,\\;-\\infty', category: 'Limites usuelles', chapter: 7, difficulty: 'facile' },
  { id: 5, front: 'Croissance comparée — exp vs polynôme', back: 'L\'exponentielle l\'emporte sur n\'importe quelle puissance.', frontLatex: '\\lim_{x \\to +\\infty}\\dfrac{e^x}{x^n} = \\;?', backLatex: '+\\infty', category: 'Croissance comparée', chapter: 7, difficulty: 'difficile' },
  { id: 6, front: 'Croissance comparée — ln vs polynôme', back: 'Le polynôme l\'emporte sur le $\\ln$.', frontLatex: '\\lim_{x \\to +\\infty}\\dfrac{\\ln x}{x^n} = \\;?\\quad(n > 0)', backLatex: '0', category: 'Croissance comparée', chapter: 7, difficulty: 'difficile' },
  { id: 7, front: 'Croissance comparée — $x^n e^x$ en $-\\infty$', back: 'L\'exponentielle écrase la puissance.', frontLatex: '\\lim_{x \\to -\\infty} x^n e^x = \\;?', backLatex: '0', category: 'Croissance comparée', chapter: 7, difficulty: 'difficile' },
  { id: 8, front: 'Croissance comparée — $x^n \\ln x$ en $0^+$', back: 'La puissance écrase le $\\ln$.', frontLatex: '\\lim_{x \\to 0^+} x^n \\ln x = \\;?\\quad(n > 0)', backLatex: '0', category: 'Croissance comparée', chapter: 7, difficulty: 'difficile' },
  { id: 9, front: 'Limite remarquable : $\\sin x / x$', back: 'C\'est le taux d\'accroissement de $\\sin$ en $0$ : $\\sin\'(0) = \\cos 0 = 1$.', frontLatex: '\\lim_{x \\to 0}\\dfrac{\\sin x}{x} = \\;?', backLatex: '1', category: 'Limites remarquables', chapter: 7, difficulty: 'moyen' },
  { id: 10, front: 'Limite remarquable : $(e^x - 1)/x$', back: 'Taux d\'accroissement de $\\exp$ en $0$.', frontLatex: '\\lim_{x \\to 0}\\dfrac{e^x - 1}{x} = \\;?', backLatex: '1', category: 'Limites remarquables', chapter: 7, difficulty: 'moyen' },
  { id: 11, front: 'Limite remarquable : $\\ln(1+x)/x$', back: 'Taux d\'accroissement de $\\ln$ en $1$.', frontLatex: '\\lim_{x \\to 0}\\dfrac{\\ln(1+x)}{x} = \\;?', backLatex: '1', category: 'Limites remarquables', chapter: 7, difficulty: 'moyen' },
  { id: 12, front: 'Limite remarquable : $(1 - \\cos x)/x^2$', back: 'À retenir : équivalent classique de $\\cos$ en $0$.', frontLatex: '\\lim_{x \\to 0}\\dfrac{1 - \\cos x}{x^2} = \\;?', backLatex: '\\dfrac{1}{2}', category: 'Limites remarquables', chapter: 7, difficulty: 'difficile' },
  { id: 13, front: 'Formes indéterminées', back: 'Les 4 grandes : $0/0$, $\\infty/\\infty$, $\\infty - \\infty$, $0 \\times \\infty$. Aussi : $1^\\infty$, $0^0$, $\\infty^0$.', category: 'Formes indéterminées', chapter: 7, difficulty: 'moyen' },
  { id: 14, front: 'Lever la forme $0/0$', back: 'Méthode : factoriser le numérateur ET le dénominateur, simplifier le facteur commun.', category: 'Méthodes', chapter: 7, difficulty: 'moyen' },
  { id: 15, front: 'Lever la forme $\\infty - \\infty$', back: 'Multiplier par la quantité conjuguée (cas $\\sqrt{a} - \\sqrt{b}$), ou factoriser par le terme dominant.', category: 'Méthodes', chapter: 7, difficulty: 'difficile' },
  { id: 16, front: 'Lever la forme $\\infty/\\infty$', back: 'Factoriser numérateur et dénominateur par le terme dominant (souvent $x^n$).', category: 'Méthodes', chapter: 7, difficulty: 'moyen' },
  { id: 17, front: 'Théorème des gendarmes', back: 'Si $g \\leq f \\leq h$ et $g, h \\to L$, alors $f \\to L$.', frontLatex: 'g(x) \\leq f(x) \\leq h(x),\\;\\lim g = \\lim h = L', backLatex: '\\lim f = L', category: 'Théorèmes', chapter: 7, difficulty: 'difficile' },
  { id: 18, front: 'Asymptote horizontale', back: 'Limite finie en $\\pm\\infty$ donne une asymptote horizontale.', frontLatex: '\\lim_{\\pm\\infty} f = L \\Rightarrow \\;?', backLatex: 'y = L\\;\\text{asymptote horizontale}', category: 'Asymptotes', chapter: 7, difficulty: 'moyen' },
  { id: 19, front: 'Asymptote verticale', back: 'Limite infinie en un point donne une asymptote verticale.', frontLatex: '\\lim_{x \\to a} f = \\pm\\infty \\Rightarrow \\;?', backLatex: 'x = a\\;\\text{asymptote verticale}', category: 'Asymptotes', chapter: 7, difficulty: 'moyen' },
  { id: 20, front: 'Application : $\\lim_{x \\to 1}\\dfrac{x^2-1}{x-1}$', back: 'Forme $0/0$. On factorise : $(x-1)(x+1)/(x-1) = x+1 \\to 2$.', frontLatex: '\\lim_{x \\to 1}\\dfrac{x^2-1}{x-1} = \\;?', backLatex: '2', category: 'Application', chapter: 7, difficulty: 'moyen' },
  { id: 21, front: 'Application : $\\lim_{x \\to +\\infty}(\\sqrt{x^2+1} - x)$', back: 'Forme $\\infty - \\infty$. Conjugué : $1/(\\sqrt{x^2+1} + x) \\to 0$.', frontLatex: '\\lim_{x \\to +\\infty}(\\sqrt{x^2+1} - x) = \\;?', backLatex: '0', category: 'Application', chapter: 7, difficulty: 'difficile' },
  { id: 22, front: 'Application : $\\lim_{x \\to 0}\\dfrac{e^{2x}-1}{x}$', back: 'On reconnaît : $2 \\cdot (e^{2x}-1)/(2x) \\to 2$.', frontLatex: '\\lim_{x \\to 0}\\dfrac{e^{2x}-1}{x} = \\;?', backLatex: '2', category: 'Application', chapter: 7, difficulty: 'moyen' },
  { id: 23, front: 'Application : $\\lim_{x \\to +\\infty} x^2 / e^x$', back: 'Croissance comparée : l\'exp l\'emporte.', frontLatex: '\\lim_{x \\to +\\infty}\\dfrac{x^2}{e^x} = \\;?', backLatex: '0', category: 'Application', chapter: 7, difficulty: 'moyen' },
  { id: 24, front: 'Limite par taux d\'accroissement', back: 'Si $\\lim_{x \\to a}(f(x) - f(a))/(x - a) = \\ell$, alors $f\'(a) = \\ell$. Astuce pour reconnaître certaines limites.', category: 'Méthodes', chapter: 7, difficulty: 'difficile' },
  { id: 25, front: 'Application : $\\lim_{x \\to 0}\\dfrac{\\sin(3x)}{x}$', back: 'On force le $3x$ : $3 \\cdot \\sin(3x)/(3x) \\to 3 \\cdot 1$.', frontLatex: '\\lim_{x \\to 0}\\dfrac{\\sin(3x)}{x} = \\;?', backLatex: '3', category: 'Application', chapter: 7, difficulty: 'moyen' },
];

// ============================================================
// Chapitre 8 — Probabilités
// ============================================================
export const probabilitesFlashcards: MathFlashcard[] = [
  { id: 1, front: 'Univers $\\Omega$', back: 'Ensemble de tous les résultats possibles d\'une expérience aléatoire.', category: 'Définitions', chapter: 8, difficulty: 'facile' },
  { id: 2, front: 'Événement', back: 'Sous-ensemble $A \\subset \\Omega$. $A$ est réalisé si le résultat appartient à $A$.', category: 'Définitions', chapter: 8, difficulty: 'facile' },
  { id: 3, front: 'Axiomes des probabilités', back: '$0 \\leq P(A) \\leq 1$, $P(\\Omega) = 1$, et additivité pour des événements incompatibles.', frontLatex: 'P(A \\cup B) = \\;?\\;\\text{si}\\;A \\cap B = \\emptyset', backLatex: 'P(A) + P(B)', category: 'Axiomes', chapter: 8, difficulty: 'moyen' },
  { id: 4, front: 'Équiprobabilité', back: 'Tous les résultats sont également probables : on compte les cas favorables sur les cas possibles.', frontLatex: 'P(A) = \\;?', backLatex: '\\dfrac{|A|}{|\\Omega|}', category: 'Calcul', chapter: 8, difficulty: 'facile' },
  { id: 5, front: 'Événement contraire', back: 'La probabilité du contraire est $1$ moins la probabilité de l\'événement.', frontLatex: 'P(\\bar A) = \\;?', backLatex: '1 - P(A)', category: 'Propriétés', chapter: 8, difficulty: 'facile' },
  { id: 6, front: 'Probabilité d\'une union', back: 'Inclusion-exclusion : on retranche l\'intersection (sinon comptée 2 fois).', frontLatex: 'P(A \\cup B) = \\;?', backLatex: 'P(A) + P(B) - P(A \\cap B)', category: 'Propriétés', chapter: 8, difficulty: 'moyen' },
  { id: 7, front: 'Probabilité conditionnelle', back: 'Probabilité de $A$ sachant $B$, avec $P(B) > 0$.', frontLatex: 'P(A \\mid B) = \\;?', backLatex: '\\dfrac{P(A \\cap B)}{P(B)}', category: 'Conditionnelle', chapter: 8, difficulty: 'moyen' },
  { id: 8, front: 'Formule des probabilités composées', back: 'Permet de calculer une intersection à partir d\'une probabilité conditionnelle.', frontLatex: 'P(A \\cap B) = \\;?', backLatex: 'P(A \\mid B)\\,P(B) = P(B \\mid A)\\,P(A)', category: 'Conditionnelle', chapter: 8, difficulty: 'moyen' },
  { id: 9, front: 'Indépendance', back: '$A$ et $B$ sont indépendants si la probabilité d\'observer les deux est le produit.', frontLatex: 'A \\perp B \\Leftrightarrow \\;?', backLatex: 'P(A \\cap B) = P(A)\\,P(B)', category: 'Indépendance', chapter: 8, difficulty: 'moyen' },
  { id: 10, front: 'Formule des probabilités totales', back: 'Pour un système complet $(B_i)$, on décompose la probabilité de $A$.', frontLatex: 'P(A) = \\;?', backLatex: '\\sum_i P(A \\mid B_i)\\,P(B_i)', category: 'Théorèmes', chapter: 8, difficulty: 'difficile' },
  { id: 11, front: 'Formule de Bayes', back: 'Permet d\'inverser un conditionnement : très utile en diagnostic.', frontLatex: 'P(B_i \\mid A) = \\;?', backLatex: '\\dfrac{P(A \\mid B_i)\\,P(B_i)}{P(A)}', category: 'Théorèmes', chapter: 8, difficulty: 'difficile' },
  { id: 12, front: 'Variable aléatoire (VA)', back: 'Application $X : \\Omega \\to \\mathbb{R}$ qui à chaque résultat associe un réel.', category: 'Définitions', chapter: 8, difficulty: 'moyen' },
  { id: 13, front: 'Loi de probabilité', back: 'Donnée des $P(X = x_i)$ pour toutes les valeurs possibles. Leur somme vaut $1$.', frontLatex: '\\sum_i P(X = x_i) = \\;?', backLatex: '1', category: 'Définitions', chapter: 8, difficulty: 'moyen' },
  { id: 14, front: 'Espérance $E(X)$', back: 'Moyenne pondérée des valeurs prises, pondérée par leurs probabilités.', frontLatex: 'E(X) = \\;?', backLatex: '\\sum_i x_i\\,P(X = x_i)', category: 'Espérance/Variance', chapter: 8, difficulty: 'moyen' },
  { id: 15, front: 'Linéarité de l\'espérance', back: 'Toujours vraie (même sans indépendance).', frontLatex: 'E(aX + b) = \\;?', backLatex: 'a\\,E(X) + b', category: 'Espérance/Variance', chapter: 8, difficulty: 'moyen' },
  { id: 16, front: 'Variance', back: 'Mesure de la dispersion. Formule de König-Huygens : $V(X) = E(X^2) - E(X)^2$.', frontLatex: 'V(X) = \\;?', backLatex: 'E(X^2) - E(X)^2', category: 'Espérance/Variance', chapter: 8, difficulty: 'difficile' },
  { id: 17, front: 'Variance et translation', back: 'Le $b$ disparaît (translation), $a$ se met au carré (scaling).', frontLatex: 'V(aX + b) = \\;?', backLatex: 'a^2\\,V(X)', category: 'Espérance/Variance', chapter: 8, difficulty: 'difficile' },
  { id: 18, front: 'Écart-type', back: 'Racine de la variance : même unité que la VA.', frontLatex: '\\sigma(X) = \\;?', backLatex: '\\sqrt{V(X)}', category: 'Espérance/Variance', chapter: 8, difficulty: 'facile' },
  { id: 19, front: 'Loi de Bernoulli $\\mathcal{B}(p)$', back: '$X = 1$ (succès, probabilité $p$) ou $X = 0$ (échec, probabilité $1-p$).', frontLatex: 'E(X),\\;V(X) = \\;?', backLatex: 'p,\\quad p(1-p)', category: 'Lois', chapter: 8, difficulty: 'moyen' },
  { id: 20, front: 'Loi binomiale $\\mathcal{B}(n,p)$', back: 'Nombre de succès sur $n$ épreuves indépendantes de Bernoulli.', frontLatex: 'P(X = k) = \\;?', backLatex: '\\binom{n}{k}\\,p^k\\,(1-p)^{n-k}', category: 'Lois', chapter: 8, difficulty: 'difficile' },
  { id: 21, front: 'Binomiale : espérance et variance', back: 'À retenir absolument : $np$ et $np(1-p)$.', frontLatex: 'E(X),\\;V(X)\\;\\text{pour}\\;X \\sim \\mathcal{B}(n,p)', backLatex: 'np,\\quad np(1-p)', category: 'Lois', chapter: 8, difficulty: 'moyen' },
  { id: 22, front: 'Application : $P(\\text{somme de 2 dés} = 7)$', back: '$6$ couples favorables sur $36$ : $(1,6), (2,5), \\ldots, (6,1)$.', frontLatex: 'P(\\text{somme} = 7) = \\;?', backLatex: '\\dfrac{6}{36} = \\dfrac{1}{6}', category: 'Application', chapter: 8, difficulty: 'moyen' },
  { id: 23, front: 'Application : $3$ piles sur $5$ lancers', back: '$X \\sim \\mathcal{B}(5;\\,0{,}5)$. $P(X = 3) = \\binom{5}{3}\\,(0{,}5)^5$.', frontLatex: 'P(X = 3) = \\;?', backLatex: '\\dfrac{10}{32} = \\dfrac{5}{16}', category: 'Application', chapter: 8, difficulty: 'difficile' },
  { id: 24, front: 'Application Bayes : test médical', back: 'Test fiable à $99\\%$, maladie chez $1\\%$ de la population. Bayes donne $P(\\text{malade} \\mid +) \\approx 50\\%$ (effet base rate).', category: 'Application', chapter: 8, difficulty: 'difficile' },
  { id: 25, front: 'Indépendance — somme', back: 'Indépendance entraîne $E(XY) = E(X)E(Y)$ et additivité des variances.', frontLatex: 'V(X+Y) = \\;?\\;(X \\perp Y)', backLatex: 'V(X) + V(Y)', category: 'Indépendance', chapter: 8, difficulty: 'difficile' },
];

// ============================================================
// Chapitre 9 — Récurrence
// ============================================================
export const recurrenceFlashcards: MathFlashcard[] = [
  { id: 1, front: 'Principe de récurrence', back: 'Si $P(n_0)$ vraie ET $(P(n) \\Rightarrow P(n+1))$ pour tout $n \\geq n_0$, alors $P(n)$ vraie pour tout $n \\geq n_0$.', category: 'Principe', chapter: 9, difficulty: 'moyen' },
  { id: 2, front: 'Étape 1 — Initialisation', back: 'Vérifier $P(n_0)$ — souvent $n_0 = 0$ ou $1$, mais parfois plus grand.', category: 'Méthode', chapter: 9, difficulty: 'facile' },
  { id: 3, front: 'Étape 2 — Hérédité', back: 'Supposer $P(n)$ vraie pour un $n$ quelconque (HR), montrer que $P(n+1)$ en découle.', category: 'Méthode', chapter: 9, difficulty: 'moyen' },
  { id: 4, front: 'Étape 3 — Conclusion', back: '« Par principe de récurrence, $P(n)$ est vraie pour tout $n \\geq n_0$. »', category: 'Méthode', chapter: 9, difficulty: 'facile' },
  { id: 5, front: 'Énoncer $P(n)$ explicitement', back: 'Toujours formuler $P(n)$ avant de commencer la démonstration.', category: 'Méthode', chapter: 9, difficulty: 'moyen' },
  { id: 6, front: 'Erreur classique : oublier l\'initialisation', back: 'Sans $P(n_0)$ vrai, l\'hérédité ne suffit pas. Une « récurrence sans base » est invalide.', category: 'Pièges', chapter: 9, difficulty: 'moyen' },
  { id: 7, front: 'Erreur classique : ne pas utiliser HR', back: 'L\'hérédité doit s\'appuyer sur l\'hypothèse de récurrence. Si vous n\'utilisez pas HR, ce n\'est pas une récurrence.', category: 'Pièges', chapter: 9, difficulty: 'moyen' },
  { id: 8, front: 'Récurrence forte', back: 'Pour montrer $P(n+1)$, on suppose $P(k)$ vraie pour TOUT $k \\leq n$. Utile pour Fibonacci, divisibilité.', category: 'Variantes', chapter: 9, difficulty: 'difficile' },
  { id: 9, front: 'Récurrence double', back: 'Initialisation $P(0)$ ET $P(1)$. Hérédité : $(P(n)$ et $P(n+1)) \\Rightarrow P(n+2)$.', category: 'Variantes', chapter: 9, difficulty: 'difficile' },
  { id: 10, front: 'Application : démontrer $\\sum_{k=1}^n k = n(n+1)/2$', back: 'Init $n=1$ : $1 = 1$ ✓. Hérédité : on ajoute $n+1$ et on factorise.', frontLatex: '\\sum_{k=1}^{n+1} k = \\;?', backLatex: '\\dfrac{n(n+1)}{2} + (n+1) = \\dfrac{(n+1)(n+2)}{2}', category: 'Application', chapter: 9, difficulty: 'moyen' },
  { id: 11, front: 'Application : $\\sum k^2 = n(n+1)(2n+1)/6$', back: 'Init $n=1$ : $1 = 1$. Hérédité : ajouter $(n+1)^2$ et factoriser par $(n+1)$.', category: 'Application', chapter: 9, difficulty: 'difficile' },
  { id: 12, front: 'Application : $\\sum k^3 = [n(n+1)/2]^2$', back: 'Init $n=1$ : $1 = 1$. Hérédité : ajouter $(n+1)^3$, factoriser par $(n+1)^2$ ; on retrouve $[(n+1)(n+2)/2]^2$.', category: 'Application', chapter: 9, difficulty: 'difficile' },
  { id: 13, front: 'Application : $2^n \\geq n^2$ pour $n \\geq 4$', back: 'Init $n=4$ : $16 = 16$ ✓. Hérédité : $2^{n+1} = 2 \\cdot 2^n \\geq 2n^2 \\geq (n+1)^2$ vraie car $n^2 - 2n - 1 \\geq 0$ pour $n \\geq 4$.', category: 'Application', chapter: 9, difficulty: 'difficile' },
  { id: 14, front: 'Application : $7 \\mid 8^n - 1$', back: 'Init $n=0$ : $0$ divisible. Hérédité : $8^{n+1} - 1 = 8(8^n - 1) + 7 = 7(8 k_n + 1)$.', category: 'Application', chapter: 9, difficulty: 'difficile' },
  { id: 15, front: 'Inégalité de Bernoulli', back: 'Démontrée par récurrence sur $n$.', frontLatex: '(1 + x)^n \\;?\\; 1 + nx\\quad(x > -1)', backLatex: '(1 + x)^n \\geq 1 + nx', category: 'Inégalités', chapter: 9, difficulty: 'difficile' },
  { id: 16, front: 'Récurrence sur encadrement', back: 'Pour montrer $0 \\leq u_n \\leq M$, montrer les deux inégalités SIMULTANÉMENT dans l\'hérédité.', category: 'Méthode', chapter: 9, difficulty: 'difficile' },
  { id: 17, front: 'Application : $u_0 = 0$, $u_{n+1} = \\sqrt{u_n + 2}$, $0 \\leq u_n \\leq 2$', back: 'Init $n=0$ : $0 \\leq 0 \\leq 2$ ✓. Hérédité : $0 \\leq u_n \\leq 2 \\Rightarrow 2 \\leq u_n + 2 \\leq 4 \\Rightarrow \\sqrt{2} \\leq u_{n+1} \\leq 2$.', category: 'Application', chapter: 9, difficulty: 'difficile' },
  { id: 18, front: 'Choisir le bon rang de départ', back: 'Pour $2^n \\geq n^2$, l\'initialisation est à $n = 4$ (faux pour $n = 2, 3$).', category: 'Méthode', chapter: 9, difficulty: 'moyen' },
  { id: 19, front: 'Quand utiliser la récurrence ?', back: 'Quand l\'énoncé porte sur « tout $n \\in \\mathbb{N}$ » et que $P(n+1)$ se déduit naturellement de $P(n)$.', category: 'Stratégie', chapter: 9, difficulty: 'moyen' },
  { id: 20, front: 'Hypothèse de récurrence (HR)', back: 'L\'énoncé qu\'on suppose vrai au rang $n$. Doit être utilisé EXPLICITEMENT dans l\'hérédité.', category: 'Méthode', chapter: 9, difficulty: 'moyen' },
  { id: 21, front: 'Rédaction type — initialisation', back: '« Pour $n = n_0$, on a [calcul]. Donc $P(n_0)$ est vraie. »', category: 'Rédaction', chapter: 9, difficulty: 'facile' },
  { id: 22, front: 'Rédaction type — hérédité', back: '« Soit $n \\geq n_0$. Supposons $P(n)$ vraie. Montrons $P(n+1)$ : [calcul utilisant HR]. Donc $P(n+1)$ est vraie. »', category: 'Rédaction', chapter: 9, difficulty: 'moyen' },
  { id: 23, front: 'Application : Fibonacci $F_n \\leq 2^n$', back: 'Récurrence forte. Init $F_0 = 0 \\leq 1$, $F_1 = 1 \\leq 2$. HR : $F_n \\leq 2^n$ et $F_{n-1} \\leq 2^{n-1}$. Alors $F_{n+1} = F_n + F_{n-1} \\leq 2^n + 2^{n-1} \\leq 2^{n+1}$.', category: 'Application', chapter: 9, difficulty: 'difficile' },
  { id: 24, front: 'Récurrence vs sommes', back: 'La récurrence est la méthode privilégiée pour démontrer une formule de somme.', category: 'Stratégie', chapter: 9, difficulty: 'facile' },
  { id: 25, front: 'Vérifier $P(0)$ avant de commencer', back: 'Si l\'énoncé démarre à $n = 0$, toujours vérifier $P(0)$. Exemple : $P(n) : « u_n = 2^n - 1 »$ ⟹ $P(0) : u_0 = 0$.', category: 'Méthode', chapter: 9, difficulty: 'facile' },
];

// ============================================================
// Chapitre 10 — Matrices
// ============================================================
export const matricesFlashcards: MathFlashcard[] = [
  { id: 1, front: 'Matrice $m \\times n$', back: 'Tableau de $m$ lignes et $n$ colonnes. On note $A = (a_{ij})$ où $a_{ij}$ est en ligne $i$, colonne $j$.', category: 'Définitions', chapter: 10, difficulty: 'facile' },
  { id: 2, front: 'Matrice carrée', back: 'Matrice avec autant de lignes que de colonnes ($m = n$).', category: 'Définitions', chapter: 10, difficulty: 'facile' },
  { id: 3, front: 'Matrice identité $I_n$', back: 'Matrice carrée avec des $1$ sur la diagonale et des $0$ ailleurs. Élément neutre du produit.', frontLatex: 'A \\cdot I_n = \\;?', backLatex: 'A', category: 'Définitions', chapter: 10, difficulty: 'facile' },
  { id: 4, front: 'Matrice nulle', back: 'Tous les coefficients valent $0$. Élément neutre de l\'addition.', category: 'Définitions', chapter: 10, difficulty: 'facile' },
  { id: 5, front: 'Matrice diagonale', back: 'Matrice carrée où $a_{ij} = 0$ pour $i \\neq j$. Seuls les éléments diagonaux peuvent être non nuls.', category: 'Définitions', chapter: 10, difficulty: 'facile' },
  { id: 6, front: 'Addition de matrices', back: 'Coefficient par coefficient. Doivent avoir mêmes dimensions.', frontLatex: '(A + B)_{ij} = \\;?', backLatex: 'a_{ij} + b_{ij}', category: 'Opérations', chapter: 10, difficulty: 'facile' },
  { id: 7, front: 'Multiplication par un scalaire', back: 'On multiplie chaque coefficient par $\\lambda$.', frontLatex: '(\\lambda A)_{ij} = \\;?', backLatex: '\\lambda\\,a_{ij}', category: 'Opérations', chapter: 10, difficulty: 'facile' },
  { id: 8, front: 'Produit matriciel', back: 'On multiplie « lignes de $A$ par colonnes de $B$ ».', frontLatex: '(AB)_{ij} = \\;?', backLatex: '\\sum_{k} a_{ik}\\,b_{kj}', category: 'Produit', chapter: 10, difficulty: 'difficile' },
  { id: 9, front: 'Compatibilité des dimensions', back: 'Pour calculer $AB$ : nb colonnes de $A$ = nb lignes de $B$.', frontLatex: '(m \\times n) \\cdot (n \\times p) = \\;?', backLatex: 'm \\times p', category: 'Produit', chapter: 10, difficulty: 'moyen' },
  { id: 10, front: 'Non-commutativité', back: 'Le produit matriciel n\'est PAS commutatif en général. Toujours préciser à gauche/à droite.', frontLatex: 'AB \\stackrel{?}{=} BA', backLatex: '\\text{FAUX en général}', category: 'Produit', chapter: 10, difficulty: 'moyen' },
  { id: 11, front: 'Associativité du produit', back: 'On peut regrouper sans changer l\'ordre.', frontLatex: '(AB)C = \\;?', backLatex: 'A(BC)', category: 'Propriétés', chapter: 10, difficulty: 'moyen' },
  { id: 12, front: 'Distributivité', back: 'Le produit se distribue sur l\'addition.', frontLatex: 'A(B + C) = \\;?', backLatex: 'AB + AC', category: 'Propriétés', chapter: 10, difficulty: 'moyen' },
  { id: 13, front: 'Transposée', back: 'On échange lignes et colonnes.', frontLatex: '(A^T)_{ij} = \\;?', backLatex: 'a_{ji}', category: 'Transposée', chapter: 10, difficulty: 'facile' },
  { id: 14, front: 'Transposée d\'un produit', back: 'L\'ordre est inversé !', frontLatex: '(AB)^T = \\;?', backLatex: 'B^T A^T', category: 'Transposée', chapter: 10, difficulty: 'difficile' },
  { id: 15, front: 'Déterminant 2×2', back: 'Diagonale principale moins diagonale anti-diagonale.', frontLatex: '\\det\\!\\begin{pmatrix}a & b \\\\ c & d\\end{pmatrix} = \\;?', backLatex: 'ad - bc', category: 'Déterminant', chapter: 10, difficulty: 'moyen' },
  { id: 16, front: 'Inverse 2×2', back: 'Valable si $\\det(A) \\neq 0$. On échange les diagonales et on change le signe des extra-diagonaux.', frontLatex: 'A^{-1} = \\;?', backLatex: '\\dfrac{1}{ad - bc}\\!\\begin{pmatrix}d & -b \\\\ -c & a\\end{pmatrix}', category: 'Inverse', chapter: 10, difficulty: 'difficile' },
  { id: 17, front: 'Propriété de l\'inverse', back: '$A \\cdot A^{-1} = A^{-1} \\cdot A = I_n$.', frontLatex: 'A \\cdot A^{-1} = \\;?', backLatex: 'I_n', category: 'Inverse', chapter: 10, difficulty: 'moyen' },
  { id: 18, front: 'Inverse d\'un produit', back: 'Attention à l\'ordre : $(AB)^{-1} = B^{-1} A^{-1}$.', frontLatex: '(AB)^{-1} = \\;?', backLatex: 'B^{-1}\\,A^{-1}', category: 'Inverse', chapter: 10, difficulty: 'difficile' },
  { id: 19, front: 'Système linéaire en forme matricielle', back: 'On regroupe les inconnues dans le vecteur $X$ et les seconds membres dans $Y$.', frontLatex: '\\text{Système} \\Leftrightarrow \\;?', backLatex: 'AX = Y', category: 'Systèmes', chapter: 10, difficulty: 'moyen' },
  { id: 20, front: 'Résolution de $AX = Y$', back: 'Si $A$ inversible, on multiplie à GAUCHE par $A^{-1}$.', frontLatex: 'AX = Y \\Rightarrow X = \\;?', backLatex: 'A^{-1}\\,Y', category: 'Systèmes', chapter: 10, difficulty: 'difficile' },
  { id: 21, front: 'Application : produit', back: 'On fait « ligne par colonne » : $(1 \\cdot 2 + 2 \\cdot 1, 3 \\cdot 2 + 4 \\cdot 1) = (4, 10)$.', frontLatex: '\\begin{pmatrix}1 & 2 \\\\ 3 & 4\\end{pmatrix}\\begin{pmatrix}2 \\\\ 1\\end{pmatrix} = \\;?', backLatex: '\\begin{pmatrix}4 \\\\ 10\\end{pmatrix}', category: 'Application', chapter: 10, difficulty: 'moyen' },
  { id: 22, front: 'Application : déterminant', back: '$ad - bc = 3 \\cdot 4 - 2 \\cdot 1$.', frontLatex: '\\det\\!\\begin{pmatrix}3 & 2 \\\\ 1 & 4\\end{pmatrix} = \\;?', backLatex: '10', category: 'Application', chapter: 10, difficulty: 'facile' },
  { id: 23, front: 'Application : inverse 2×2', back: '$\\det = 4 - 6 = -2 \\neq 0$. On applique la formule.', frontLatex: 'A = \\begin{pmatrix}1 & 2 \\\\ 3 & 4\\end{pmatrix},\\;A^{-1} = \\;?', backLatex: '-\\dfrac{1}{2}\\!\\begin{pmatrix}4 & -2 \\\\ -3 & 1\\end{pmatrix}', category: 'Application', chapter: 10, difficulty: 'difficile' },
  { id: 24, front: 'Piège : $A^2 \\neq$ chaque coefficient au carré', back: '$A^2 = A \\times A$ (produit matriciel), pas $(a_{ij})^2$.', category: 'Pièges', chapter: 10, difficulty: 'moyen' },
  { id: 25, front: 'Application : système $2x + y = 5,\\; x - y = 1$', back: 'Forme matricielle $A = \\begin{pmatrix}2 & 1 \\\\ 1 & -1\\end{pmatrix}$, $Y = \\begin{pmatrix}5 \\\\ 1\\end{pmatrix}$. $\\det A = -3 \\neq 0$.', frontLatex: 'X = \\;?', backLatex: '\\begin{pmatrix}2 \\\\ 1\\end{pmatrix}', category: 'Application', chapter: 10, difficulty: 'difficile' },
];

// ============================================================
// Mapping global slug URL → flashcards
// ============================================================
export const terminaleVersPrepaFlashcards: Record<string, MathFlashcard[]> = {
  'calculs': calculsFlashcards,
  'sommes-suites': sommesSuitesFlashcards,
  'sommes-suites-produits': sommesSuitesFlashcards,
  'suites': suitesFlashcards,
  'fonctions': fonctionsFlashcards,
  'derivees': deriveesFlashcards,
  'derivées': deriveesFlashcards,
  'integrales': integralesFlashcards,
  'integrale': integralesFlashcards,
  'limites': limitesFlashcards,
  'probabilites': probabilitesFlashcards,
  'recurrence': recurrenceFlashcards,
  'matrices': matricesFlashcards,
  'matrice': matricesFlashcards,
};
