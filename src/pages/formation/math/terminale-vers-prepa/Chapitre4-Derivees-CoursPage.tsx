import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { LatexRenderer } from '@/components/LatexRenderer';
import { Home, ChevronRight, Spline, BookOpen, ArrowRight, Calculator } from 'lucide-react';

const Chapitre4DeriveesCoursPage = () => {
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
            <span className="text-[#2D5BFF] font-bold">Cours - Chapitre 4</span>
          </div>
        </div>
      </nav>

      <div className="space-y-8 max-w-5xl mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
          <CardHeader className="pb-6">
            <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Chapitre 4 : Dérivées
            </CardTitle>
            <p className="text-slate-600 text-lg">
              Les dérivées - Définition, règles de calcul et applications
            </p>
            <p className="text-slate-500 text-sm mt-2">
              La dérivée d'une fonction mesure la variation instantanée, comme la pente de la tangente à la courbe.
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
              En Terminale, la <strong>dérivée</strong> d'une fonction <span className="inline-block align-middle"><LatexRenderer latex={"f"} /></span> en un point <span className="inline-block align-middle"><LatexRenderer latex={"x"} /></span> mesure la <strong>variation instantanée</strong> de la fonction, comme la pente de la tangente à la courbe en ce point.
            </p>
            <p className="text-slate-700 leading-relaxed">
              On note la dérivée <span className="inline-block align-middle"><LatexRenderer latex={"f'(x)"} /></span> (notation prime).
            </p>
          </CardContent>
        </Card>

        {/* Section 1 - Définition de la dérivée */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              <span className="font-semibold">Définition de la dérivée</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div>
              <p className="text-slate-700 mb-4">
                La dérivée de <span className="inline-block align-middle"><LatexRenderer latex={"f"} /></span> en <span className="inline-block align-middle"><LatexRenderer latex={"a"} /></span> (si la limite existe) est :
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <div className="text-center">
                  <LatexRenderer latex={"f'(a) = \\lim_{h \\to 0} \\frac{f(a + h) - f(a)}{h}"} />
                </div>
              </div>

              <p className="text-slate-700 mb-6">
                La fonction est <strong>dérivable</strong> en <span className="inline-block align-middle"><LatexRenderer latex={"a"} /></span> si cette limite existe et est finie. Si dérivable partout sur son domaine, on a la fonction dérivée <span className="inline-block align-middle"><LatexRenderer latex={"f'"} /></span>.
              </p>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <p className="text-slate-700 mb-4"><strong>Exemple :</strong> Pour <span className="inline-block align-middle"><LatexRenderer latex={"f(x) = x^2"} /></span>,</p>
                <div className="text-center mb-4">
                  <LatexRenderer latex={"f'(a) = \\lim_{h \\to 0} \\frac{(a + h)^2 - a^2}{h} = \\lim_{h \\to 0} \\frac{2ah + h^2}{h} = 2a"} />
                </div>
                <p className="text-slate-700 text-center">Ainsi, <span className="inline-block align-middle"><LatexRenderer latex={"f'(x) = 2x"} /></span></p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2 - Règles de dérivation */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              <span className="font-semibold">Règles de dérivation</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-slate-800 mb-3">Dérivée d'une constante</h4>
                <div className="text-center">
                  <LatexRenderer latex={"\\text{Si } f(x) = c, \\text{ alors } f'(x) = 0"} />
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-slate-800 mb-3">Dérivée d'une somme</h4>
                <div className="text-center">
                  <LatexRenderer latex={"(f + g)'(x) = f'(x) + g'(x)"} />
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-slate-800 mb-3">Dérivée d'un produit par une constante</h4>
                <div className="text-center">
                  <LatexRenderer latex={"(cf)'(x) = cf'(x)"} />
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-slate-800 mb-3">Dérivée d'un produit</h4>
                <div className="text-center">
                  <LatexRenderer latex={"(fg)'(x) = f'(x)g(x) + f(x)g'(x)"} />
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-slate-800 mb-3">Dérivée d'un quotient</h4>
                <div className="text-center mb-3">
                  <LatexRenderer latex={"\\left( \\frac{f}{g} \\right)'(x) = \\frac{f'(x)g(x) - f(x)g'(x)}{[g(x)]^2}"} />
                </div>
                <p className="text-slate-600 text-center text-sm">(si <span className="inline-block align-middle"><LatexRenderer latex={"g(x) \\neq 0"} /></span>)</p>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-slate-800 mb-3">Dérivée d'une composée</h4>
                <div className="text-center mb-4">
                  <LatexRenderer latex={"(f \\circ g)'(x) = f'(g(x)) \\cdot g'(x)"} />
                </div>
                <div className="bg-white p-4 rounded">
                  <p className="text-slate-700 mb-3"><strong>Exemple :</strong> Pour <span className="inline-block align-middle"><LatexRenderer latex={"h(x) = (2x + 1)^3"} /></span></p>
                  <p className="text-slate-700 mb-2">Poser <span className="inline-block align-middle"><LatexRenderer latex={"u(x) = 2x + 1"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"h = u^3"} /></span></p>
                  <div className="text-center">
                    <LatexRenderer latex={"h'(x) = 3u(x)^2 \\cdot u'(x) = 3(2x + 1)^2 \\cdot 2 = 6(2x + 1)^2"} />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3 - Dérivées des fonctions usuelles */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-violet-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              <span className="font-semibold">Dérivées des fonctions usuelles</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-6 rounded-lg">
                <div className="text-center">
                  <LatexRenderer latex={"(x^n)' = nx^{n-1}"} />
                </div>
                <p className="text-slate-600 text-xs text-center mt-2">(pour n entier, ou fractionnaire si domaine ok)</p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <div className="text-center">
                  <LatexRenderer latex={"(e^x)' = e^x"} />
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <div className="text-center">
                  <LatexRenderer latex={"(\\ln x)' = \\frac{1}{x}"} />
                </div>
                <p className="text-slate-600 text-xs text-center mt-2">(pour x > 0)</p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <div className="text-center">
                  <LatexRenderer latex={"(\\sin x)' = \\cos x"} />
                </div>
              </div>

              <div className="bg-red-50 p-6 rounded-lg">
                <div className="text-center">
                  <LatexRenderer latex={"(\\cos x)' = -\\sin x"} />
                </div>
              </div>

              <div className="bg-indigo-50 p-6 rounded-lg">
                <div className="text-center">
                  <LatexRenderer latex={"(\\tan x)' = \\frac{1}{\\cos^2 x}"} />
                </div>
              </div>
            </div>

            <div className="bg-orange-50 p-6 rounded-lg">
              <p className="text-slate-700 mb-4"><strong>Exemple :</strong> Dérivée de <span className="inline-block align-middle"><LatexRenderer latex={"f(x) = e^{3x}"} /></span></p>
              <p className="text-slate-700 mb-3">Avec <span className="inline-block align-middle"><LatexRenderer latex={"u = 3x"} /></span>, on a <span className="inline-block align-middle"><LatexRenderer latex={"(e^u)' = e^u \\cdot u'"} /></span></p>
              <div className="text-center">
                <LatexRenderer latex={"f'(x) = e^{3x} \\cdot 3 = 3e^{3x}"} />
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4 - Applications des dérivées */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                4
              </span>
              <span className="font-semibold">Applications des dérivées</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Équation de la tangente</h4>
              <p className="text-slate-700 mb-4">
                À la courbe de f en <span className="inline-block align-middle"><LatexRenderer latex={"x = a"} /></span>, la tangente a pour équation :
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <div className="text-center">
                  <LatexRenderer latex={"y = f'(a)(x - a) + f(a)"} />
                </div>
              </div>
              
              <div className="bg-yellow-50 p-6 rounded-lg mb-8">
                <p className="text-slate-700 mb-3"><strong>Exemple :</strong> Pour <span className="inline-block align-middle"><LatexRenderer latex={"f(x) = x^2"} /></span> en x=1</p>
                <p className="text-slate-700 mb-2">f(1)=1, f'(1)=2</p>
                <p className="text-slate-700 mb-2">Tangente : <span className="inline-block align-middle"><LatexRenderer latex={"y = 2(x-1) + 1 = 2x - 1"} /></span></p>
              </div>

              <Separator className="my-6" />

              <h4 className="text-lg font-semibold text-slate-800 mb-4">Sens de variation</h4>
              <div className="space-y-4 mb-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <p className="text-slate-700">• Si <span className="inline-block align-middle"><LatexRenderer latex={"f'(x) > 0"} /></span> sur un intervalle, f est <strong>croissante</strong> sur cet intervalle</p>
                </div>
                <div className="bg-red-50 p-6 rounded-lg">
                  <p className="text-slate-700">• Si <span className="inline-block align-middle"><LatexRenderer latex={"f'(x) < 0"} /></span>, f est <strong>décroissante</strong></p>
                </div>
                <div className="bg-purple-50 p-6 rounded-lg">
                  <p className="text-slate-700">• Si <span className="inline-block align-middle"><LatexRenderer latex={"f'(x) = 0"} /></span> en un point, possible <strong>extremum</strong> (maximum ou minimum local)</p>
                </div>
              </div>

              <p className="text-slate-700 mb-4">
                <strong>Pour trouver les extrema :</strong> Résoudre <span className="inline-block align-middle"><LatexRenderer latex={"f'(x) = 0"} /></span>, puis étudier le signe de f' autour.
              </p>

              <div className="bg-orange-50 p-6 rounded-lg">
                <p className="text-slate-700 mb-3"><strong>Exemple :</strong> Pour <span className="inline-block align-middle"><LatexRenderer latex={"f(x) = x^3 - 3x"} /></span></p>
                <p className="text-slate-700 mb-2"><span className="inline-block align-middle"><LatexRenderer latex={"f'(x) = 3x^2 - 3 = 3(x^2 - 1)"} /></span></p>
                <p className="text-slate-700 mb-2">Zéros en x = ±1</p>
                <p className="text-slate-700 mb-2">Signe de f' : négatif sur (-1,1), positif ailleurs</p>
                <p className="text-slate-700">Ainsi, max local en x=-1, min local en x=1</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5 - Exercices simples */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-red-500 to-pink-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                5
              </span>
              <span className="font-semibold">Exercices simples</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-slate-700 mb-2"><strong>1.</strong> Calculer la dérivée de <span className="inline-block align-middle"><LatexRenderer latex={"f(x) = 3x^2 - 2x + 1"} /></span></p>
                <p className="text-slate-600 text-sm">(Réponse : 6x - 2)</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-slate-700 mb-2"><strong>2.</strong> Trouver l'équation de la tangente à <span className="inline-block align-middle"><LatexRenderer latex={"y = \\sqrt{x}"} /></span> en x=4</p>
                <p className="text-slate-600 text-sm">(Réponse : y = x/4 + 1)</p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-slate-700 mb-2"><strong>3.</strong> Étudier les variations de <span className="inline-block align-middle"><LatexRenderer latex={"f(x) = e^x + x"} /></span></p>
                <p className="text-slate-600 text-sm">(f'(x) = e^x + 1 > 0 toujours, donc strictement croissante)</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-slate-700 mb-2"><strong>4.</strong> Dérivée de <span className="inline-block align-middle"><LatexRenderer latex={"\\sin(2x)"} /></span></p>
                <p className="text-slate-600 text-sm">(Réponse : 2cos(2x))</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation vers les exercices */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-orange-50 via-white to-red-50">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-slate-600 mb-4 font-medium">
                Maintenant que vous maîtrisez les dérivées, passez aux exercices !
              </p>
              <Link to="/formation/math/terminale-vers-prepa/derivees-exercices">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <Spline className="h-5 w-5" />
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
                Fin du chapitre 4 — Maîtrisez ces outils essentiels pour l'analyse !
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Chapitre4DeriveesCoursPage;