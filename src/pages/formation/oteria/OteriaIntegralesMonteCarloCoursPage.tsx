import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, BookOpen, Target, Zap, Shield, Code, BarChart3, TrendingUp } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const OteriaIntegralesMonteCarloCoursPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-teal-600">
            <Link to="/" className="flex items-center gap-1 hover:text-teal-700 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <Link to="/articles" className="hover:text-teal-700 transition-colors">
              Niveau
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <Link to="/articles/oteria-cyber-school" className="hover:text-teal-700 transition-colors">
              OTERIA Cyber School
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <span className="text-teal-600 font-medium">Séance 10 - Cours</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4 text-teal-900">Chapitre 10 : Analyse de lois</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Approximation d'intégrales (aire sous courbe), Monte-Carlo — Histogrammes, théorèmes limites et convergence
          </p>

          {/* Informations de chapitre */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Séance</span>
                  <span className="text-2xl font-bold text-blue-900">10</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Durée estimée</span>
                  <span className="text-2xl font-bold text-blue-900">4h</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Niveau</span>
                  <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    Avancé
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/articles/oteria-cyber-school">
              <button className="inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Retour au programme
              </button>
            </Link>
          </div>
        </div>

        {/* Informations de cours */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <BookOpen className="h-6 w-6" />
              Informations du cours
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3 text-lg">
              <p className="font-semibold text-blue-900">
                Professeur : Dimitar Dimitrov
              </p>
              <p className="text-blue-800">
                Oteria Cyber School, Bachelor 1 — 2025
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 1: Algorithmes sur les listes */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Code className="h-6 w-6" />
              1. Algorithmes sur les listes
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <p>
                En pratique, on manipule souvent des <strong>listes de données simulées</strong> pour analyser des lois de probabilité.
              </p>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Opérations usuelles</p>
                <div className="space-y-3">
                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <code className="text-blue-700">min(L)</code>
                    <p className="text-base mt-1">Valeur minimale.</p>
                  </div>

                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <code className="text-blue-700">max(L)</code>
                    <p className="text-base mt-1">Valeur maximale.</p>
                  </div>

                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <code className="text-blue-700">sorted(L)</code>
                    <p className="text-base mt-1">Tri croissant.</p>
                  </div>

                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <code className="text-blue-700">filter</code>
                    <p className="text-base mt-1">Sélection d'éléments selon un critère.</p>
                  </div>
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Applications</p>
                <div className="space-y-3">
                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p>Estimer la loi d'une variable aléatoire en simulant <LatexRenderer latex="n" block={false} /> tirages.</p>
                  </div>
                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p>Calculer les fréquences empiriques et les comparer aux probabilités théoriques.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2: Histogrammes et fonctions de répartition */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <BarChart3 className="h-6 w-6" />
              2. Histogrammes et fonctions de répartition
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Histogramme</p>
                <p className="mb-3">
                  Un histogramme représente la distribution des fréquences observées.
                </p>
                <p className="mb-3">
                  Si <LatexRenderer latex="n" block={false} /> valeurs <LatexRenderer latex="x_1,\dots,x_n" block={false} /> sont observées, la fréquence d'une classe <LatexRenderer latex="C" block={false} /> est :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                  <LatexRenderer latex="f(C) = \frac{\#\{i : x_i \in C\}}{n}" block={true} />
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Fonction de répartition empirique</p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded mb-3">
                  <LatexRenderer latex="F_n(x) = \frac{1}{n} \sum_{i=1}^n \mathbf{1}_{\{x_i \leq x\}}" block={true} />
                </div>
                <p>
                  Elle converge vers la fonction de répartition <LatexRenderer latex="F(x)" block={false} /> quand <LatexRenderer latex="n\to\infty" block={false} />.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3: Simulation d'une loi */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Zap className="h-6 w-6" />
              3. Simulation d'une loi
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Méthode d'inversion</p>
                <p className="mb-3">
                  Si <LatexRenderer latex="U \sim \mathcal{U}[0,1]" block={false} /> et <LatexRenderer latex="F" block={false} /> est la fonction de répartition d'une variable <LatexRenderer latex="X" block={false} />, alors :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded my-4">
                  <LatexRenderer latex="X = F^{-1}(U)" block={true} />
                </div>
                <p className="mb-3">a pour loi <LatexRenderer latex="F" block={false} />.</p>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Exemple</p>
                <p className="mb-3">
                  Pour une loi géométrique <LatexRenderer latex="G(p)" block={false} /> :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                  <LatexRenderer latex="P(X \leq k) = 1 - (1-p)^k \quad \Rightarrow \quad X = \min\{k : U \leq 1-(1-p)^k\}" block={true} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4: Inégalités fondamentales */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Target className="h-6 w-6" />
              4. Inégalités fondamentales
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Inégalité de Markov</p>
                <p className="mb-3">
                  Si <LatexRenderer latex="Z \geq 0" block={false} /> et <LatexRenderer latex="a>0" block={false} /> :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                  <LatexRenderer latex="P(Z \geq a) \leq \frac{E(Z)}{a}" block={true} />
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Inégalité de Bienaymé-Tchebychev</p>
                <p className="mb-3">
                  Si <LatexRenderer latex="\mathrm{Var}(Z)" block={false} /> existe, alors pour <LatexRenderer latex="\varepsilon >0" block={false} /> :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                  <LatexRenderer latex="P(|Z - E(Z)| \geq \varepsilon) \leq \frac{\mathrm{Var}(Z)}{\varepsilon^2}" block={true} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5: Convergence en probabilité */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <TrendingUp className="h-6 w-6" />
              5. Convergence en probabilité
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Définition</p>
                <p className="mb-3">
                  <LatexRenderer latex="Z_n \xrightarrow{P} Z" block={false} /> si :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                  <LatexRenderer latex="\forall \varepsilon>0, \quad \lim_{n\to\infty} P(|Z_n - Z| \geq \varepsilon) = 0" block={true} />
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Loi faible des grands nombres</p>
                <p className="mb-3">
                  Pour <LatexRenderer latex="(Y_k)" block={false} /> indépendantes, identiquement distribuées d'espérance <LatexRenderer latex="m" block={false} /> :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                  <LatexRenderer latex="\overline{Y}_n = \frac{1}{n} \sum_{k=1}^n Y_k \xrightarrow{P} m" block={true} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 6: Convergence en loi */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <TrendingUp className="h-6 w-6" />
              6. Convergence en loi
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Définition</p>
                <p className="mb-3">
                  <LatexRenderer latex="Z_n \xrightarrow{\mathcal{L}} Z" block={false} /> si :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                  <LatexRenderer latex="\forall x \; \text{où } F_Z \text{ est continue}, \quad \lim_{n\to\infty} F_{Z_n}(x) = F_Z(x)" block={true} />
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Théorème central limite (TCL)</p>
                <p className="mb-3">
                  Soit <LatexRenderer latex="(Y_k)" block={false} /> une suite de variables i.i.d. d'espérance <LatexRenderer latex="m" block={false} /> et variance <LatexRenderer latex="\sigma^2" block={false} /> :
                </p>
                <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                  <LatexRenderer latex="Z_n^* = \frac{\overline{Y}_n - m}{\sigma/\sqrt{n}} \xrightarrow{\mathcal{L}} \mathcal{N}(0,1)" block={true} />
                </div>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Approximations classiques</p>
                <div className="space-y-3">
                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p className="font-semibold mb-2 text-blue-700">Binomiale</p>
                    <LatexRenderer latex="B(n,p) \approx \mathcal{N}(np, np(1-p)) \text{ si } n\geq 20" block={true} />
                  </div>

                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p className="font-semibold mb-2 text-blue-700">Poisson</p>
                    <LatexRenderer latex="P(\lambda) \approx \mathcal{N}(\lambda, \lambda) \text{ si } \lambda \geq 10" block={true} />
                  </div>

                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p className="font-semibold mb-2 text-blue-700">Approximation de Poisson</p>
                    <LatexRenderer latex="B(n,\tfrac{\lambda}{n}) \xrightarrow{\mathcal{L}} P(\lambda) \text{ quand } n \to \infty" block={true} />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 7: Cas pratique - Monte Carlo */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100 mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
              <Shield className="h-6 w-6" />
              7. Cas pratique : Approximation d'intégrales et calcul de π
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="space-y-6 text-lg">
              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Méthode de Monte Carlo</p>
                <p className="mb-3">
                  On peut estimer une intégrale par simulation aléatoire.
                </p>
                <p className="mb-3">
                  <strong>Exemple :</strong> calcul de <LatexRenderer latex="\pi" block={false} /> en utilisant des points aléatoires dans le carré unité.
                </p>
              </div>

              <div>
                <p className="font-semibold text-lg mb-3 text-blue-900">Algorithme</p>
                <div className="space-y-3">
                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p>On tire <LatexRenderer latex="n" block={false} /> couples <LatexRenderer latex="(x_i,y_i)" block={false} /> uniformes dans <LatexRenderer latex="[0,1]^2" block={false} />.</p>
                  </div>

                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p>On compte <LatexRenderer latex="N" block={false} /> points tels que <LatexRenderer latex="x_i^2+y_i^2 \leq 1" block={false} />.</p>
                  </div>

                  <div className="bg-white border-l-4 border-blue-400 p-4 rounded">
                    <p className="mb-2">Alors :</p>
                    <LatexRenderer latex="\pi \approx 4 \cdot \frac{N}{n}" block={true} />
                  </div>
                </div>
              </div>

              <div className="bg-blue-100 border border-blue-300 rounded p-4">
                <p className="font-semibold text-blue-900 mb-3">Idée clé</p>
                <p>
                  Plus <LatexRenderer latex="n" block={false} /> est grand, plus l'approximation est précise (loi des grands nombres).
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Retour */}
        <div className="text-center mt-8">
          <Link to="/articles/oteria-cyber-school">
            <button className="inline-flex items-center gap-2 bg-teal-600 text-white px-6 py-3 rounded-lg hover:bg-teal-700 transition-colors text-lg">
              <ArrowLeft className="h-5 w-5" />
              Retour au programme OTERIA
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OteriaIntegralesMonteCarloCoursPage;
