import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { LatexRenderer } from '@/components/LatexRenderer';
import { Home, ChevronRight, AreaChart, BookOpen, ArrowRight, Calculator } from 'lucide-react';

const Chapitre5IntegralesCoursPage = () => {
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
            <span className="text-[#2D5BFF] font-bold">Cours - Chapitre 5</span>
          </div>
        </div>
      </nav>

      <div className="space-y-8 max-w-5xl mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
          <CardHeader className="pb-6">
            <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Chapitre 5 : Intégrales
            </CardTitle>
            <p className="text-slate-600 text-lg">
              Les intégrales - Primitives, règles d'intégration et applications
            </p>
            <p className="text-slate-500 text-sm mt-2">
              L'intégrale représente l'aire sous la courbe et est l'opération inverse de la dérivation.
            </p>
          </CardHeader>
        </Card>

        {/* Introduction */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                <BookOpen className="h-5 w-5" />
              </span>
              <span className="font-semibold">Introduction</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <p className="text-slate-700 leading-relaxed">
              En Terminale, l'<strong>intégrale</strong> d'une fonction continue positive sur un intervalle représente l'<strong>aire sous la courbe</strong>. Plus généralement, c'est l'opération inverse de la dérivation : on cherche les <strong>primitives</strong> (antidérivées).
            </p>
          </CardContent>
        </Card>

        {/* Section 1 - Définition de la primitive */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              <span className="font-semibold">Définition de la primitive</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div>
              <p className="text-slate-700 mb-4">
                Une fonction <span className="inline-block align-middle"><LatexRenderer latex={"F"} /></span> est une <strong>primitive</strong> de <span className="inline-block align-middle"><LatexRenderer latex={"f"} /></span> sur un intervalle I si <span className="inline-block align-middle"><LatexRenderer latex={"F'(x) = f(x)"} /></span> pour tout x dans I.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <p className="text-slate-700 mb-3">Toute primitive de f est de la forme :</p>
                <div className="text-center">
                  <LatexRenderer latex={"F(x) + C"} />
                </div>
                <p className="text-slate-700 text-center text-sm mt-2">où C est une constante</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <p className="text-slate-700 mb-3"><strong>Notation :</strong></p>
                <div className="text-center">
                  <LatexRenderer latex={"\\int f(x) \\, dx = F(x) + C"} />
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <p className="text-slate-700 mb-4"><strong>Exemple :</strong></p>
                <p className="text-slate-700 mb-3">Une primitive de <span className="inline-block align-middle"><LatexRenderer latex={"x^2"} /></span> est <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{x^3}{3} + C"} /></span></p>
                <p className="text-slate-700">car la dérivée de <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{x^3}{3}"} /></span> est <span className="inline-block align-middle"><LatexRenderer latex={"x^2"} /></span></p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2 - Règles d'intégration */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              <span className="font-semibold">Règles d'intégration</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-slate-800 mb-3">Primitive d'une constante</h4>
                <div className="text-center">
                  <LatexRenderer latex={"\\int c \\, dx = cx + C"} />
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-slate-800 mb-3">Primitive d'une somme</h4>
                <div className="text-center">
                  <LatexRenderer latex={"\\int (f(x) + g(x)) \\, dx = \\int f(x) \\, dx + \\int g(x) \\, dx"} />
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-slate-800 mb-3">Primitive d'un produit par une constante</h4>
                <div className="text-center">
                  <LatexRenderer latex={"\\int cf(x) \\, dx = c \\int f(x) \\, dx"} />
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-slate-800 mb-3">Intégration par parties</h4>
                <div className="text-center mb-4">
                  <LatexRenderer latex={"\\int uv' \\, dx = uv - \\int u'v \\, dx"} />
                </div>
                <p className="text-slate-700 mb-4"><strong>Choix :</strong> Souvent u = ln x ou polynôme, v' = exp ou trigonométrique</p>
                
                <div className="bg-white p-4 rounded">
                  <p className="text-slate-700 mb-3"><strong>Exemple :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\int xe^x \\, dx"} /></span></p>
                  <p className="text-slate-700 mb-2">Poser u = x, v' = e^x, alors u' = 1, v = e^x</p>
                  <div className="text-center">
                    <LatexRenderer latex={"\\int xe^x \\, dx = xe^x - \\int e^x \\, dx = xe^x - e^x + C = e^x(x-1) + C"} />
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-slate-800 mb-3">Substitution</h4>
                <p className="text-slate-700 mb-4">Si <span className="inline-block align-middle"><LatexRenderer latex={"\\int f(g(x))g'(x) \\, dx"} /></span>, poser t = g(x), dt = g'(x) dx, alors <span className="inline-block align-middle"><LatexRenderer latex={"\\int f(t) \\, dt"} /></span></p>
                
                <div className="bg-white p-4 rounded">
                  <p className="text-slate-700 mb-3"><strong>Exemple :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\int 2xe^{x^2} \\, dx"} /></span></p>
                  <p className="text-slate-700 mb-2">t = x², dt = 2x dx</p>
                  <div className="text-center">
                    <LatexRenderer latex={"\\int e^t \\, dt = e^t + C = e^{x^2} + C"} />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3 - Primitives des fonctions usuelles */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-violet-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              <span className="font-semibold">Primitives des fonctions usuelles</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-center mb-2">
                  <LatexRenderer latex={"\\int x^n \\, dx = \\frac{x^{n+1}}{n+1} + C"} />
                </div>
                <p className="text-slate-600 text-xs text-center">(pour n ≠ -1)</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <div className="text-center mb-2">
                  <LatexRenderer latex={"\\int \\frac{1}{x} \\, dx = \\ln |x| + C"} />
                </div>
                <p className="text-slate-600 text-xs text-center">(pour x ≠ 0)</p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="text-center">
                  <LatexRenderer latex={"\\int e^x \\, dx = e^x + C"} />
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <div className="text-center">
                  <LatexRenderer latex={"\\int \\sin x \\, dx = -\\cos x + C"} />
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <div className="text-center">
                  <LatexRenderer latex={"\\int \\cos x \\, dx = \\sin x + C"} />
                </div>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg">
                <div className="text-center">
                  <LatexRenderer latex={"\\int \\frac{1}{\\cos^2 x} \\, dx = \\tan x + C"} />
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <p className="text-slate-700 mb-4"><strong>Exemple :</strong></p>
              <div className="text-center">
                <LatexRenderer latex={"\\int (3x^2 + 2) \\, dx = x^3 + 2x + C"} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4 - Intégrale définie */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                4
              </span>
              <span className="font-semibold">Intégrale définie</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div>
              <p className="text-slate-700 mb-4">
                L'intégrale de a à b de f(x) dx est :
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <div className="text-center">
                  <LatexRenderer latex={"[F(x)]_a^b = F(b) - F(a)"} />
                </div>
                <p className="text-slate-700 text-center text-sm mt-2">où F est une primitive de f</p>
              </div>

              <p className="text-slate-700 mb-6">
                Représente l'<strong>aire signée</strong> sous la courbe de a à b.
              </p>

              <div className="bg-green-50 p-6 rounded-lg mb-6">
                <p className="text-slate-700 mb-3"><strong>Théorème fondamental :</strong></p>
                <p className="text-slate-700 mb-3">Si f continue sur [a,b], alors :</p>
                <div className="text-center">
                  <LatexRenderer latex={"\\int_a^b f(x) \\, dx = F(b) - F(a)"} />
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <p className="text-slate-700 mb-4"><strong>Exemple :</strong></p>
                <div className="text-center">
                  <LatexRenderer latex={"\\int_1^2 x \\, dx = \\left[ \\frac{x^2}{2} \\right]_1^2 = \\frac{4}{2} - \\frac{1}{2} = 1{,}5"} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5 - Applications */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-red-500 to-pink-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                5
              </span>
              <span className="font-semibold">Applications</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-slate-800 mb-3">Calcul d'aires</h4>
                <p className="text-slate-700">Pour f ≥ 0, <span className="inline-block align-middle"><LatexRenderer latex={"\\int_a^b f(x) \\, dx"} /></span> = aire</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-slate-800 mb-3">Moyenne</h4>
                <p className="text-slate-700 mb-3">Valeur moyenne de f sur [a,b] :</p>
                <div className="text-center">
                  <LatexRenderer latex={"\\frac{1}{b-a} \\int_a^b f(x) \\, dx"} />
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-slate-800 mb-3">Vitesses et positions (physique)</h4>
                <p className="text-slate-700">Position = intégrale de vitesse</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 6 - Exercices simples */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                6
              </span>
              <span className="font-semibold">Exercices simples</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-slate-700 mb-2"><strong>1.</strong> Trouver une primitive de <span className="inline-block align-middle"><LatexRenderer latex={"4x^3 - 1"} /></span></p>
                <p className="text-slate-600 text-sm">(Réponse : x⁴ - x + C)</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-slate-700 mb-2"><strong>2.</strong> Calculer <span className="inline-block align-middle"><LatexRenderer latex={"\\int_0^{\\pi/2} \\sin x \\, dx"} /></span></p>
                <p className="text-slate-600 text-sm">(Réponse : [-cos x]₀^(π/2) = 1)</p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-slate-700 mb-2"><strong>3.</strong> Intégrer par parties <span className="inline-block align-middle"><LatexRenderer latex={"\\int \\ln x \\, dx"} /></span></p>
                <p className="text-slate-600 text-sm">(u = ln x, v' = 1, Résponse : x ln x - x + C)</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-slate-700 mb-2"><strong>4.</strong> Substitution pour <span className="inline-block align-middle"><LatexRenderer latex={"\\int \\frac{2x}{x^2 + 1} \\, dx"} /></span></p>
                <p className="text-slate-600 text-sm">(t = x² + 1, Résponse : ln |x² + 1| + C)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation vers les exercices */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-orange-50 via-white to-red-50">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-slate-600 mb-4 font-medium">
                Maintenant que vous maîtrisez les intégrales, passez aux exercices !
              </p>
              <Link to="/formation/math/terminale-vers-prepa/integrale-exercices">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <AreaChart className="h-5 w-5" />
                  <span className="font-semibold">Faire les exercices</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Conclusion */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 via-white to-purple-50">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-slate-600 italic font-medium">
                Fin du chapitre 5 — Maîtrisez ces techniques d'intégration fondamentales !
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Chapitre5IntegralesCoursPage;