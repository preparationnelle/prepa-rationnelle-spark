import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { LatexRenderer } from '@/components/LatexRenderer';
import { Home, ChevronRight, BookOpen, Target, TrendingUp, AlertCircle, Calendar, CheckCircle2, XCircle } from 'lucide-react';

const IntroductionBilanPage = () => {
  return (
    <div className="min-h-screen bg-[#EEF3FC]">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-[#2D5BFF]">
            <Link to="/" className="flex items-center gap-1 hover:text-[#1e3a8a] transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formations" className="hover:text-[#1e3a8a] transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formation/maths-choix" className="hover:text-[#1e3a8a] transition-colors">
              Choix option Maths
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <Link to="/formation/math/terminale-vers-prepa" className="hover:text-[#1e3a8a] transition-colors">
              Terminale vers la prépa
            </Link>
            <ChevronRight className="h-3 w-3 text-[#2D5BFF]/50 mx-1" />
            <span className="text-[#2D5BFF] font-bold">Introduction & Bilan</span>
          </div>
        </div>
      </nav>

      <div className="space-y-8 max-w-6xl mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-xl bg-gradient-to-br from-orange-50 via-amber-50 to-yellow-50">
          <CardHeader className="pb-8 text-center">
            <CardTitle className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 via-amber-600 to-yellow-600 bg-clip-text text-transparent mb-4">
              Révisions mathématiques
            </CardTitle>
            <h2 className="text-2xl md:text-3xl font-semibold text-slate-700 mb-4">
              Pour une entrée sereine en prépa ECG
            </h2>
            <Badge variant="outline" className="mx-auto text-lg px-4 py-2 bg-gradient-to-r from-orange-100 to-amber-100">
              <Calendar className="h-4 w-4 mr-2" />
              Août 2025 - Guide complet
            </Badge>
          </CardHeader>
        </Card>

        {/* L'essentiel à retenir */}
        <Card className="border border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-orange-500 to-amber-500 text-white">
            <CardTitle className="text-2xl flex items-center gap-3">
              <Target className="h-7 w-7" />
              L'essentiel à retenir
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="bg-white p-6 rounded-lg border-l-4 border-orange-500">
              <p className="text-lg text-slate-800 leading-relaxed">
                <strong className="text-orange-600">Maîtriser parfaitement les suites, fonctions usuelles (ln, exp), probabilités de base, et le calcul algébrique est crucial.</strong> La rigueur de rédaction doit être automatique. Pas besoin de connaître tout le programme de prépa à l'avance : des bases solides suffisent pour démarrer sereinement.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Partie 1 : Analyse */}
        <Card className="border border-slate-200 bg-white shadow-lg">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-indigo-500 text-white">
            <CardTitle className="text-2xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                1
              </span>
              Partie 1 : Analyse — Du lycée à la prépa
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            
            {/* Suites numériques */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-4 flex items-center gap-2">
                <TrendingUp className="h-5 w-5 text-blue-600" />
                Suites numériques
              </h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                  <h4 className="font-semibold text-slate-800 mb-2">Suites arithmétiques et géométriques</h4>
                  <p className="text-slate-700 mb-3">Base des raisonnements.</p>
                  <ul className="list-disc list-inside text-slate-700 space-y-1 mb-3">
                    <li>Formule : <span className="inline-block align-middle"><LatexRenderer latex={"u_n = u_0 + n \\cdot r"} /></span> (arithmétique), <span className="inline-block align-middle"><LatexRenderer latex={"u_n = u_0 \\cdot q^n"} /></span> (géométrique)</li>
                    <li>Sommes : <span className="inline-block align-middle"><LatexRenderer latex={"\\sum_{k=0}^n u_0 q^k = u_0 \\frac{1-q^{n+1}}{1-q}"} /></span> (géométrique, q ≠ 1)</li>
                  </ul>
                  <p className="text-slate-600 italic">Exemple : <span className="inline-block align-middle"><LatexRenderer latex={"u_n = 2^n"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"\\sum_{k=0}^3 2^k = 1 + 2 + 4 + 8 = 15"} /></span></p>
                </div>

                <div className="bg-white p-4 rounded">
                  <h4 className="font-semibold text-slate-800 mb-2">Propriétés importantes</h4>
                  <ul className="list-disc list-inside text-slate-700 space-y-1">
                    <li><strong>Monotonie :</strong> Étudier le signe de <span className="inline-block align-middle"><LatexRenderer latex={"u_{n+1} - u_n"} /></span> ou <span className="inline-block align-middle"><LatexRenderer latex={"u_{n+1}/u_n"} /></span></li>
                    <li><strong>Majorée/Minorée :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"u_n \\leq M"} /></span> (majorée), <span className="inline-block align-middle"><LatexRenderer latex={"u_n \\geq m"} /></span> (minorée)</li>
                    <li><strong>Théorème des gendarmes :</strong> Si <span className="inline-block align-middle"><LatexRenderer latex={"a_n \\leq u_n \\leq b_n"} /></span> et <span className="inline-block align-middle"><LatexRenderer latex={"a_n, b_n \\to L"} /></span>, alors <span className="inline-block align-middle"><LatexRenderer latex={"u_n \\to L"} /></span></li>
                    <li><strong>Suites récurrentes :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"u_{n+1} = f(u_n)"} /></span>. Étudier points fixes et convergence</li>
                  </ul>
                  <p className="text-slate-600 italic mt-3">Exemple : <span className="inline-block align-middle"><LatexRenderer latex={"u_n = \\frac{\\sin(n)}{n^2}"} /></span>, encadrée par <span className="inline-block align-middle"><LatexRenderer latex={"-\\frac{1}{n^2}"} /></span> et <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{1}{n^2}"} /></span>, donc <span className="inline-block align-middle"><LatexRenderer latex={"u_n \\to 0"} /></span></p>
                </div>
              </div>
            </div>

            {/* Fonctions essentielles */}
            <div className="bg-green-50 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-slate-800 mb-4">Fonctions essentielles</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border-l-4 border-green-500">
                  <h4 className="font-semibold text-slate-800 mb-2">Logarithme et exponentielle</h4>
                  <p className="text-slate-700 mb-3">Omniprésentes en prépa ECG. Maîtriser :</p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <h5 className="font-medium text-slate-800 mb-2">Propriétés algébriques</h5>
                      <ul className="text-sm text-slate-700 space-y-1">
                        <li><span className="inline-block align-middle"><LatexRenderer latex={"\\ln(ab) = \\ln(a) + \\ln(b)"} /></span></li>
                        <li><span className="inline-block align-middle"><LatexRenderer latex={"\\ln(a/b) = \\ln(a) - \\ln(b)"} /></span></li>
                        <li><span className="inline-block align-middle"><LatexRenderer latex={"\\ln(a^c) = c \\ln(a)"} /></span></li>
                        <li><span className="inline-block align-middle"><LatexRenderer latex={"e^x = a \\iff x = \\ln(a)"} /></span></li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-800 mb-2">Dérivées & limites</h5>
                      <ul className="text-sm text-slate-700 space-y-1">
                        <li><span className="inline-block align-middle"><LatexRenderer latex={"(\\ln(x))' = \\frac{1}{x}"} /></span></li>
                        <li><span className="inline-block align-middle"><LatexRenderer latex={"(e^x)' = e^x"} /></span></li>
                        <li><span className="inline-block align-middle"><LatexRenderer latex={"\\lim_{x \\to +\\infty} e^x = +\\infty"} /></span></li>
                        <li><span className="inline-block align-middle"><LatexRenderer latex={"\\lim_{x \\to 0^+} \\ln(x) = -\\infty"} /></span></li>
                      </ul>
                    </div>
                  </div>
                  <p className="text-slate-600 italic mt-3">Exemple : <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(e^3) = 3"} /></span></p>
                </div>

                <div className="bg-white p-4 rounded">
                  <h4 className="font-semibold text-slate-800 mb-2">Autres fonctions usuelles</h4>
                  <ul className="list-disc list-inside text-slate-700 space-y-1">
                    <li><strong>Valeur absolue :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"|x| = x"} /></span> si x ≥ 0, -x sinon. Non dérivable en 0</li>
                    <li><strong>Partie entière :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\lfloor x \\rfloor = \\max\\{ n \\in \\mathbb{Z} \\mid n \\leq x \\}"} /></span>. En escalier</li>
                    <li><strong>Puissances :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"x^\\alpha"} /></span>, α ∈ ℝ. Dérivée : <span className="inline-block align-middle"><LatexRenderer latex={"(x^\\alpha)' = \\alpha x^{\\alpha-1}"} /></span></li>
                  </ul>
                  <p className="text-slate-600 italic mt-3">Exemple : <span className="inline-block align-middle"><LatexRenderer latex={"|x - 2| = 3 \\implies x = 5 \\text{ ou } x = -1"} /></span></p>
                </div>
              </div>
            </div>

            {/* Dérivées, Primitives, Limites */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-purple-50 p-4 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-3">Dérivées</h4>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li><strong>Règles :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"(u+v)' = u' + v'"} /></span></li>
                  <li><strong>Composée :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"(f(g(x)))' = f'(g(x)) \\cdot g'(x)"} /></span></li>
                  <li><strong>Produit :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"(uv)' = u'v + uv'"} /></span></li>
                  <li><strong>Quotient :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\left(\\frac{u}{v}\\right)' = \\frac{u'v - uv'}{v^2}"} /></span></li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-3">Primitives</h4>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li><span className="inline-block align-middle"><LatexRenderer latex={"\\int x^n \\, dx = \\frac{x^{n+1}}{n+1}"} /></span> (n ≠ -1)</li>
                  <li><span className="inline-block align-middle"><LatexRenderer latex={"\\int e^x \\, dx = e^x"} /></span></li>
                  <li><span className="inline-block align-middle"><LatexRenderer latex={"\\int \\frac{1}{x} \\, dx = \\ln|x|"} /></span></li>
                  <li><strong>Par parties :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\int u v' \\, dx = [u v] - \\int u' v \\, dx"} /></span></li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-slate-800 mb-3">Limites</h4>
                <ul className="text-sm text-slate-700 space-y-2">
                  <li><strong>Formes indéterminées :</strong> 0/0, ∞/∞, ∞ - ∞</li>
                  <li><span className="inline-block align-middle"><LatexRenderer latex={"\\lim_{x \\to 0} \\frac{\\sin(x)}{x} = 1"} /></span></li>
                  <li><span className="inline-block align-middle"><LatexRenderer latex={"\\lim_{x \\to +\\infty} \\ln(x) = +\\infty"} /></span></li>
                  <li>Théorèmes : valeurs intermédiaires, bornes atteintes</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Partie 2 : Probabilités */}
        <Card className="border border-slate-200 bg-white shadow-lg">
          <CardHeader className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white">
            <CardTitle className="text-2xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                2
              </span>
              Partie 2 : Probabilités — Fondations solides
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-emerald-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-slate-800 mb-4">Loi binomiale B(n,p)</h3>
                <ul className="text-slate-700 space-y-2">
                  <li><strong>Définition :</strong> X compte le nombre de succès en n épreuves indépendantes</li>
                  <li><strong>Probabilité :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"P(X = k) = \\binom{n}{k} p^k (1-p)^{n-k}"} /></span></li>
                  <li><strong>Espérance :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"E(X) = np"} /></span></li>
                  <li><strong>Variance :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"V(X) = np(1-p)"} /></span></li>
                </ul>
                <p className="text-slate-600 italic mt-3">Exemple : 10 lancers, p = 0.5, <span className="inline-block align-middle"><LatexRenderer latex={"P(X = 5) = \\binom{10}{5} \\cdot 0.5^{10}"} /></span></p>
              </div>

              <div className="bg-teal-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-slate-800 mb-4">Probabilités conditionnelles</h3>
                <ul className="text-slate-700 space-y-2">
                  <li><strong>Formule de Bayes :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"P(A|B) = \\frac{P(B|A) \\cdot P(A)}{P(B)}"} /></span></li>
                  <li><strong>Probabilités totales :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"P(B) = \\sum_i P(B|A_i) \\cdot P(A_i)"} /></span></li>
                  <li><strong>Indépendance :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"P(A \\cap B) = P(A) \\cdot P(B)"} /></span></li>
                </ul>
              </div>
            </div>

            <div className="bg-cyan-50 p-6 rounded-lg">
              <h3 className="text-lg font-bold text-slate-800 mb-4">Variables aléatoires discrètes</h3>
              <ul className="text-slate-700 space-y-2">
                <li><strong>Loi :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\sum P(X = x_i) = 1"} /></span></li>
                <li><strong>Fonction de répartition :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"F(x) = P(X \\leq x)"} /></span></li>
              </ul>
              <p className="text-slate-600 italic mt-3">Exemple : <span className="inline-block align-middle"><LatexRenderer latex={"X \\sim B(3, 0.5)"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"F(2) = P(X \\leq 2) = P(X = 0) + P(X = 1) + P(X = 2)"} /></span></p>
            </div>
          </CardContent>
        </Card>

        {/* Partie 3 : Raisonnements */}
        <Card className="border border-slate-200 bg-white shadow-lg">
          <CardHeader className="bg-gradient-to-r from-violet-500 to-purple-500 text-white">
            <CardTitle className="text-2xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                3
              </span>
              Partie 3 : Raisonnements et calculs
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-violet-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-slate-800 mb-4">Modes de raisonnement</h3>
                <ul className="text-slate-700 space-y-2">
                  <li><strong>Récurrence :</strong> Initialisation, hérédité, conclusion</li>
                  <li><strong>Par l'absurde :</strong> Supposer ¬P, aboutir à une contradiction</li>
                  <li><strong>Contraposée :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"(P \\Rightarrow Q) \\equiv (\\neg Q \\Rightarrow \\neg P)"} /></span></li>
                  <li><strong>Analyse-synthèse :</strong> Condition nécessaire, puis suffisante</li>
                </ul>
                <p className="text-slate-600 italic mt-3">Exemple : Prouver <span className="inline-block align-middle"><LatexRenderer latex={"\\sum_{k=1}^n k = \\frac{n(n+1)}{2}"} /></span></p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-slate-800 mb-4">Calcul algébrique</h3>
                <ul className="text-slate-700 space-y-2">
                  <li><strong>Identités remarquables :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"(a+b)^2 = a^2 + 2ab + b^2"} /></span></li>
                  <li><span className="inline-block align-middle"><LatexRenderer latex={"a^2 - b^2 = (a+b)(a-b)"} /></span></li>
                  <li><strong>Fractions :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{a}{c} + \\frac{b}{c} = \\frac{a+b}{c}"} /></span></li>
                  <li><strong>Puissances :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"a^m \\cdot a^n = a^{m+n}"} /></span></li>
                </ul>
                <p className="text-slate-600 italic mt-3">Exemple : Simplifier <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{x^2 - 1}{x - 1} = x + 1"} /></span> (x ≠ 1)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Plan de révisions */}
        <Card className="border border-slate-200 bg-white shadow-lg">
          <CardHeader className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white">
            <CardTitle className="text-2xl flex items-center gap-3">
              <Calendar className="h-7 w-7" />
              Plan de révisions été/rentrée
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <CheckCircle2 className="h-5 w-5 text-blue-600" />
                  Juillet-Août : Consolidation
                </h3>
                <p className="text-slate-700 mb-4"><strong>Rythme :</strong> 1h30 à 2h/jour</p>
                <ul className="text-slate-700 space-y-2">
                  <li><strong>Semaine 1-2 :</strong> Calcul algébrique, suites arithmétiques/géométriques</li>
                  <li><strong>Semaine 3-4 :</strong> Fonctions ln, exp, équations</li>
                  <li><strong>Semaine 5-6 :</strong> Probabilités conditionnelles, loi binomiale</li>
                  <li><strong>Semaine 7-8 :</strong> Récurrence, limites</li>
                </ul>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg">
                <h3 className="text-lg font-bold text-slate-800 mb-4 flex items-center gap-2">
                  <TrendingUp className="h-5 w-5 text-indigo-600" />
                  Septembre : Mise à niveau
                </h3>
                <ul className="text-slate-700 space-y-3">
                  <li><strong>2h/jour</strong> pour suivre le rythme</li>
                  <li><strong>Priorité</strong> aux TD des professeurs</li>
                  <li><strong>Révision continue</strong> des automatismes</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Erreurs à éviter */}
        <Card className="border border-red-200 bg-gradient-to-r from-red-50 to-pink-50 shadow-lg">
          <CardHeader className="bg-gradient-to-r from-red-500 to-pink-500 text-white">
            <CardTitle className="text-2xl flex items-center gap-3">
              <AlertCircle className="h-7 w-7" />
              Erreurs à éviter
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-red-700">
                  <XCircle className="h-4 w-4" />
                  <span>Confondre condition nécessaire et suffisante</span>
                </div>
                <div className="flex items-center gap-2 text-red-700">
                  <XCircle className="h-4 w-4" />
                  <span>Oublier les domaines de définition</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2 text-red-700">
                  <XCircle className="h-4 w-4" />
                  <span>Rédaction imprécise ou calculs bâclés</span>
                </div>
                <div className="flex items-center gap-2 text-red-700">
                  <XCircle className="h-4 w-4" />
                  <span><strong>Fausse bonne idée :</strong> Apprendre par cœur les notions avancées avant la rentrée</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation vers les chapitres */}
        <Card className="border-0 shadow-xl bg-gradient-to-r from-orange-50 via-amber-50 to-yellow-50">
          <CardContent className="pt-6">
            <div className="text-center">
              <h3 className="text-2xl font-bold text-slate-800 mb-4">Commencez vos révisions !</h3>
              <p className="text-slate-600 mb-6 text-lg">
                Explorez les 7 chapitres détaillés pour maîtriser chaque notion
              </p>
              <Link to="/formation/math/terminale-vers-prepa">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-orange-500 to-amber-500 text-white px-8 py-4 rounded-xl hover:from-orange-600 hover:to-amber-600 transition-all duration-300 transform hover:scale-105 shadow-xl text-lg font-semibold">
                  <BookOpen className="h-6 w-6" />
                  <span>Accéder aux chapitres</span>
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default IntroductionBilanPage;