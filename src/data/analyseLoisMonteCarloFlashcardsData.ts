export interface AnalyseLoisMonteCarloFlashcard {
  id: number;
  front: string;
  back: string;
  frontLatex?: string;
  backLatex?: string;
  category: string;
  difficulty: 'facile' | 'moyen' | 'difficile';
}

// Flashcards pour Analyse de lois & Monte Carlo - Séance 10 Oteria Cyber School
export const analyseLoisMonteCarloFlashcards: AnalyseLoisMonteCarloFlashcard[] = [
  // Algorithmes sur les listes
  {
    id: 1,
    front: "Quelles sont les opérations usuelles sur les listes de données simulées ?",
    back: "min(L), max(L), sorted(L) et filter (sélection selon un critère). Elles permettent d'analyser des simulations de lois de probabilité.",
    category: "Algorithmes sur les listes",
    difficulty: "facile"
  },
  {
    id: 2,
    front: "Quelle est la fréquence d'une classe C dans un échantillon de taille n ?",
    back: "f(C) = nombre de valeurs dans C / n, ou en notation mathématique f(C) = #{i : xᵢ ∈ C} / n",
    frontLatex: "f(C) = ?",
    backLatex: "f(C) = \\frac{\\text{nombre de valeurs dans } C}{n} = \\frac{\\#\\{i : x_i \\in C\\}}{n}",
    category: "Algorithmes sur les listes",
    difficulty: "facile"
  },

  // Histogrammes
  {
    id: 3,
    front: "Qu'est-ce qu'un histogramme ?",
    back: "Un graphique en barres qui représente la distribution des fréquences d'un ensemble de données. Plus une barre est haute, plus il y a de valeurs dans cette plage.",
    category: "Histogrammes",
    difficulty: "facile"
  },
  {
    id: 4,
    front: "Pourquoi utilise-t-on les histogrammes ?",
    back: "Pour visualiser la répartition des données, identifier les valeurs fréquentes, comparer différentes distributions, et détecter des anomalies ou des tendances.",
    category: "Histogrammes",
    difficulty: "facile"
  },

  // Méthode d'inversion
  {
    id: 5,
    front: "Quel est le principe de la méthode d'inversion ?",
    back: "Si U ~ U[0,1] et F est la fonction de répartition d'une v.a. X, alors X = F⁻¹(U) suit la loi F.",
    frontLatex: "\\text{Méthode d'inversion}",
    backLatex: "U \\sim \\mathcal{U}[0,1] \\quad \\Rightarrow \\quad X = F^{-1}(U) \\sim F",
    category: "Simulation de lois",
    difficulty: "moyen"
  },
  {
    id: 6,
    front: "Comment simuler une loi exponentielle avec la méthode d'inversion ?",
    back: "Pour une loi exponentielle de paramètre λ, si F(x) = 1 - e^{-λx}, alors F⁻¹(u) = -ln(1-u)/λ",
    frontLatex: "\\text{Loi exponentielle } \\mathcal{E}(\\lambda)",
    backLatex: "F(x) = 1 - e^{-\\lambda x} \\quad \\Rightarrow \\quad F^{-1}(u) = -\\frac{\\ln(1-u)}{\\lambda}",
    category: "Simulation de lois",
    difficulty: "moyen"
  },
  {
    id: 7,
    front: "Comment simuler une loi géométrique avec la méthode d'inversion ?",
    back: "Pour une loi géométrique G(p), on cherche le plus petit k tel que U ≤ 1 - (1-p)^k, ou k = min{n : U ≤ 1-(1-p)^n}",
    frontLatex: "\\text{Loi géométrique } G(p)",
    backLatex: "k = \\min\\{n : U \\leq 1-(1-p)^n\\}",
    category: "Simulation de lois",
    difficulty: "moyen"
  },

  // Inégalités fondamentales
  {
    id: 8,
    front: "Quelle est l'inégalité de Markov ?",
    back: "Si Z ≥ 0 et a > 0, alors P(Z ≥ a) ≤ E(Z)/a",
    frontLatex: "\\text{Inégalité de Markov}",
    backLatex: "Z \\geq 0, \\, a > 0 \\quad \\Rightarrow \\quad P(Z \\geq a) \\leq \\frac{E(Z)}{a}",
    category: "Inégalités fondamentales",
    difficulty: "moyen"
  },
  {
    id: 9,
    front: "Quelle est l'inégalité de Bienaymé-Tchebychev ?",
    back: "Si Var(Z) existe et ε > 0, alors P(|Z - E(Z)| ≥ ε) ≤ Var(Z)/ε²",
    frontLatex: "\\text{Inégalité de Bienaymé-Tchebychev}",
    backLatex: "\\varepsilon > 0 \\quad \\Rightarrow \\quad P(|Z - E(Z)| \\geq \\varepsilon) \\leq \\frac{\\mathrm{Var}(Z)}{\\varepsilon^2}",
    category: "Inégalités fondamentales",
    difficulty: "moyen"
  },

  // Convergence en probabilité
  {
    id: 10,
    front: "Qu'est-ce que la convergence en probabilité ?",
    back: "Zₙ ⟶ Z en probabilité si ∀ε > 0, lim_{n→∞} P(|Zₙ - Z| ≥ ε) = 0",
    frontLatex: "Z_n \\xrightarrow{P} Z",
    backLatex: "\\forall \\varepsilon > 0, \\quad \\lim_{n \\to \\infty} P(|Z_n - Z| \\geq \\varepsilon) = 0",
    category: "Convergence en probabilité",
    difficulty: "moyen"
  },
  {
    id: 11,
    front: "Quelle est la loi faible des grands nombres ?",
    back: "Pour des v.a. i.i.d. d'espérance m, la moyenne empirique Ȳₙ ⟶ m en probabilité quand n → ∞",
    frontLatex: "\\text{Loi faible des grands nombres}",
    backLatex: "\\overline{Y}_n = \\frac{1}{n} \\sum_{k=1}^n Y_k \\xrightarrow{P} m",
    category: "Convergence en probabilité",
    difficulty: "moyen"
  },

  // Convergence en loi
  {
    id: 12,
    front: "Qu'est-ce que la convergence en loi ?",
    back: "Zₙ ⟶ Z en loi si ∀x où F_Z est continue, lim_{n→∞} F_{Zₙ}(x) = F_Z(x)",
    frontLatex: "Z_n \\xrightarrow{\\mathcal{L}} Z",
    backLatex: "\\forall x \\, (F_Z \\text{ continue en } x), \\quad \\lim_{n \\to \\infty} F_{Z_n}(x) = F_Z(x)",
    category: "Convergence en loi",
    difficulty: "difficile"
  },
  {
    id: 13,
    front: "Quel est le théorème central limite (TCL) ?",
    back: "Soit (Yₖ) i.i.d. d'espérance m et variance σ², alors Zₙ* = (Ȳₙ - m)/(σ/√n) ⟶ N(0,1) en loi quand n → ∞",
    frontLatex: "\\text{Théorème central limite}",
    backLatex: "Z_n^* = \\frac{\\overline{Y}_n - m}{\\sigma/\\sqrt{n}} \\xrightarrow{\\mathcal{L}} \\mathcal{N}(0,1)",
    category: "Convergence en loi",
    difficulty: "difficile"
  },
  {
    id: 14,
    front: "Quand peut-on approximer une loi binomiale par une loi normale ?",
    back: "Pour une loi binomiale B(n,p), l'approximation N(np, np(1-p)) est valide si n ≥ 20",
    frontLatex: "B(n,p) \\approx \\mathcal{N}(np, np(1-p))",
    backLatex: "\\text{si } n \\geq 20",
    category: "Convergence en loi",
    difficulty: "moyen"
  },
  {
    id: 15,
    front: "Quand peut-on approximer une loi de Poisson par une loi normale ?",
    back: "Pour une loi de Poisson P(λ), l'approximation N(λ, λ) est valide si λ ≥ 10",
    frontLatex: "P(\\lambda) \\approx \\mathcal{N}(\\lambda, \\lambda)",
    backLatex: "\\text{si } \\lambda \\geq 10",
    category: "Convergence en loi",
    difficulty: "moyen"
  },

  // Méthode de Monte Carlo
  {
    id: 16,
    front: "Quel est le principe de la méthode de Monte Carlo pour calculer π ?",
    back: "On estime le rapport des aires d'un quart de cercle et d'un carré. Aire cercle = πr², aire carré = (2r)² = 4r², donc π/4 = Ac/As",
    frontLatex: "\\pi \\approx 4 \\times \\frac{A_c}{A_s}",
    backLatex: "\\frac{A_c}{A_s} = \\frac{\\pi r^2}{4r^2} = \\frac{\\pi}{4}",
    category: "Monte Carlo",
    difficulty: "moyen"
  },
  {
    id: 17,
    front: "Comment fonctionne l'algorithme Monte Carlo pour π ?",
    back: "1) Tirer n points au hasard dans [0,1]×[0,1], 2) Compter les points avec x²+y² ≤ 1, 3) π ≈ 4 × (points dans cercle)/n",
    frontLatex: "\\text{Algorithme Monte Carlo pour } \\pi",
    backLatex: "\\pi \\approx 4 \\times \\frac{\\text{points dans cercle}}{n}",
    category: "Monte Carlo",
    difficulty: "moyen"
  },
  {
    id: 18,
    front: "Quelle est la vitesse de convergence de Monte Carlo ?",
    back: "L'erreur suit la loi des grands nombres : erreur ≈ 1/√n. Pour doubler la précision, il faut multiplier par 4 le nombre de points.",
    frontLatex: "\\text{Erreur Monte Carlo}",
    backLatex: "\\text{erreur} \\approx \\frac{1}{\\sqrt{n}}",
    category: "Monte Carlo",
    difficulty: "moyen"
  },

  // Applications pratiques
  {
    id: 19,
    front: "Comment estimer une probabilité par simulation ?",
    back: "Répéter beaucoup d'expériences et calculer la fréquence : P(A) ≈ nombre de succès / n",
    frontLatex: "P(A) \\approx \\frac{\\text{succès}}{n}",
    category: "Applications",
    difficulty: "facile"
  },
  {
    id: 20,
    front: "Pourquoi la moyenne empirique converge vers la moyenne vraie ?",
    back: "Par la loi faible des grands nombres : plus on répète les expériences, plus la fréquence observée se rapproche de la probabilité vraie.",
    frontLatex: "\\overline{Y}_n \\to m \\text{ quand } n \\to \\infty",
    category: "Applications",
    difficulty: "moyen"
  }
];
