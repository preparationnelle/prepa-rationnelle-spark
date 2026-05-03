import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { LatexRenderer } from '@/components/LatexRenderer';
import { Home, ChevronRight, FunctionSquare, BookOpen, ArrowRight, Calculator } from 'lucide-react';

const Chapitre3FonctionsCoursPage = () => {
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
            <span className="text-[#2D5BFF] font-bold">Cours - Chapitre 3</span>
          </div>
        </div>
      </nav>

      <div className="space-y-8 max-w-5xl mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
          <CardHeader className="pb-6">
            <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Chapitre 3 : Fonctions
            </CardTitle>
            <p className="text-slate-600 text-lg">
              Les fonctions de base - Définitions, propriétés et fonctions classiques
            </p>
            <p className="text-slate-500 text-sm mt-2">
              En Terminale, une fonction associe à chaque élément d'un ensemble de départ un unique élément d'un ensemble d'arrivée.
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
              En Terminale, une <strong>fonction</strong> associe à chaque élément d'un ensemble de départ (domaine) un unique élément d'un ensemble d'arrivée. On se concentre sur les <strong>fonctions réelles d'une variable réelle</strong>, notées <span className="inline-block align-middle"><LatexRenderer latex={"f: x \\mapsto f(x)"} /></span>.
            </p>
          </CardContent>
        </Card>

        {/* Section 1 - Définition et notation */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              <span className="font-semibold">Définition et notation</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div>
              <p className="text-slate-700 mb-4">
                Une fonction <span className="inline-block align-middle"><LatexRenderer latex={"f"} /></span> est définie par :
              </p>

              <div className="space-y-4 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="mb-2">• Son <strong>domaine de définition</strong> <span className="inline-block align-middle"><LatexRenderer latex={"D_f"} /></span> (ensemble où elle est définie)</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="mb-2">• Sa <strong>règle</strong> : pour chaque <span className="inline-block align-middle"><LatexRenderer latex={"x \\in D_f"} /></span>, une valeur <span className="inline-block align-middle"><LatexRenderer latex={"f(x)"} /></span></p>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <p className="text-slate-700 mb-3"><strong>Exemple :</strong></p>
                <p className="mb-2"><span className="inline-block align-middle"><LatexRenderer latex={"f(x) = x^2"} /></span>, domaine <span className="inline-block align-middle"><LatexRenderer latex={"\\mathbb{R}"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"f(2) = 4"} /></span></p>
              </div>

              <h4 className="text-lg font-semibold text-slate-800 mb-4">Représentation</h4>
              <div className="space-y-3">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p>• <strong>Algébrique :</strong> formule</p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <p>• <strong>Graphique :</strong> courbe dans le plan</p>
                </div>
                <div className="bg-pink-50 p-4 rounded-lg">
                  <p>• <strong>Tableau de valeurs</strong></p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2 - Propriétés de base */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              <span className="font-semibold">Propriétés de base</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Parité</h4>
              <div className="space-y-4 mb-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-slate-700 mb-3"><strong>Fonction paire :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"f(-x) = f(x)"} /></span> (symétrie axe y)</p>
                  <p className="text-slate-600 text-sm">Exemple : <span className="inline-block align-middle"><LatexRenderer latex={"x^2"} /></span></p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <p className="text-slate-700 mb-3"><strong>Fonction impaire :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"f(-x) = -f(x)"} /></span> (symétrie origine)</p>
                  <p className="text-slate-600 text-sm">Exemple : <span className="inline-block align-middle"><LatexRenderer latex={"x^3"} /></span></p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <p className="text-slate-700">• <strong>Ni paire ni impaire</strong> sinon</p>
                </div>
              </div>

              <Separator className="my-6" />

              <h4 className="text-lg font-semibold text-slate-800 mb-4">Monotonie</h4>
              <div className="space-y-4 mb-6">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-slate-700 mb-3"><strong>Croissante</strong> sur I si <span className="inline-block align-middle"><LatexRenderer latex={"x_1 < x_2 \\implies f(x_1) < f(x_2)"} /></span> (strictement) ou ≤ (au sens large)</p>
                </div>
                <div className="bg-red-50 p-6 rounded-lg">
                  <p className="text-slate-700 mb-3"><strong>Décroissante</strong> pareil avec &gt; ou ≥</p>
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg mb-6">
                <p className="text-slate-700 mb-3"><strong>Exemple :</strong></p>
                <p><span className="inline-block align-middle"><LatexRenderer latex={"f(x) = x^2"} /></span> décroissante sur <span className="inline-block align-middle"><LatexRenderer latex={"(-\\infty, 0]"} /></span>, croissante sur <span className="inline-block align-middle"><LatexRenderer latex={"[0, +\\infty)"} /></span></p>
              </div>

              <Separator className="my-6" />

              <h4 className="text-lg font-semibold text-slate-800 mb-4">Extrema</h4>
              <div className="space-y-4">
                <div className="bg-blue-50 p-6 rounded-lg">
                  <p className="text-slate-700"><strong>Maximum local :</strong> point où f est plus grande que voisines</p>
                </div>
                <div className="bg-green-50 p-6 rounded-lg">
                  <p className="text-slate-700"><strong>Minimum local :</strong> inverse</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3 - Fonctions classiques */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-violet-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              <span className="font-semibold">Fonctions classiques</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Fonctions affines</h4>
              <div className="bg-blue-50 p-6 rounded-lg mb-6">
                <div className="text-center mb-3">
                  <LatexRenderer latex={"f(x) = ax + b"} />
                </div>
                <p className="text-slate-700 text-center">droite de pente a, ordonnée à l'origine b</p>
              </div>

              <Separator className="my-6" />

              <h4 className="text-lg font-semibold text-slate-800 mb-4">Fonctions puissances</h4>
              <div className="space-y-4 mb-6">
                <div className="bg-green-50 p-6 rounded-lg">
                  <p className="text-slate-700">• <span className="inline-block align-middle"><LatexRenderer latex={"x^n"} /></span> pour n entier</p>
                </div>
                <div className="bg-green-100 p-6 rounded-lg">
                  <p className="text-slate-700">• <strong>Racine :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\sqrt{x} = x^{1/2}"} /></span> (domaine <span className="inline-block align-middle"><LatexRenderer latex={"[0, +\\infty)"} /></span>)</p>
                </div>
              </div>

              <Separator className="my-6" />

              <h4 className="text-lg font-semibold text-slate-800 mb-4">Exponentielle et logarithme</h4>
              <div className="space-y-4 mb-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <p className="text-slate-700">• <span className="inline-block align-middle"><LatexRenderer latex={"\\exp(x) = e^x"} /></span>, croissante, <span className="inline-block align-middle"><LatexRenderer latex={"e^0 = 1"} /></span></p>
                </div>
                <div className="bg-purple-100 p-6 rounded-lg">
                  <p className="text-slate-700">• <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(x)"} /></span>, domaine <span className="inline-block align-middle"><LatexRenderer latex={"(0, +\\infty)"} /></span>, croissante, <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(1) = 0"} /></span></p>
                </div>
              </div>

              <Separator className="my-6" />

              <h4 className="text-lg font-semibold text-slate-800 mb-4">Trigonométriques</h4>
              <div className="space-y-4">
                <div className="bg-yellow-50 p-6 rounded-lg">
                  <p className="text-slate-700">• <span className="inline-block align-middle"><LatexRenderer latex={"\\sin x, \\cos x"} /></span>, période <span className="inline-block align-middle"><LatexRenderer latex={"2\\pi"} /></span>, bornées entre -1 et 1</p>
                </div>
                <div className="bg-yellow-100 p-6 rounded-lg">
                  <p className="text-slate-700">• <span className="inline-block align-middle"><LatexRenderer latex={"\\tan x = \\sin x / \\cos x"} /></span>, domaine sans multiples de <span className="inline-block align-middle"><LatexRenderer latex={"\\pi/2 + k\\pi"} /></span></p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4 - Opérations sur les fonctions */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                4
              </span>
              <span className="font-semibold">Opérations sur les fonctions</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-slate-700 mb-3"><strong>Somme :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"(f + g)(x) = f(x) + g(x)"} /></span></p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-slate-700 mb-3"><strong>Produit :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"(fg)(x) = f(x)g(x)"} /></span></p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <p className="text-slate-700 mb-3"><strong>Composition :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"(f \\circ g)(x) = f(g(x))"} /></span></p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <p className="text-slate-700 mb-3"><strong>Exemple :</strong></p>
                <p className="mb-2"><span className="inline-block align-middle"><LatexRenderer latex={"f(x) = x^2"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"g(x) = x + 1"} /></span></p>
                <p><span className="inline-block align-middle"><LatexRenderer latex={"f \\circ g(x) = (x+1)^2"} /></span></p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5 - Étude de fonctions */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-red-500 to-pink-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                5
              </span>
              <span className="font-semibold">Étude de fonctions</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 pt-6">
            <h4 className="text-lg font-semibold text-slate-800 mb-4">Étapes</h4>
            <div className="space-y-3">
              <div className="flex items-center gap-3 bg-blue-50 p-4 rounded-lg">
                <span className="bg-blue-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                <p className="text-slate-700">Domaine</p>
              </div>
              <div className="flex items-center gap-3 bg-green-50 p-4 rounded-lg">
                <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                <p className="text-slate-700">Limites aux bornes et en ±∞</p>
              </div>
              <div className="flex items-center gap-3 bg-purple-50 p-4 rounded-lg">
                <span className="bg-purple-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                <p className="text-slate-700">Dérivée pour monotonie et extrema</p>
              </div>
              <div className="flex items-center gap-3 bg-yellow-50 p-4 rounded-lg">
                <span className="bg-yellow-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                <p className="text-slate-700">Tableau de variations</p>
              </div>
              <div className="flex items-center gap-3 bg-red-50 p-4 rounded-lg">
                <span className="bg-red-500 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold">5</span>
                <p className="text-slate-700">Graphique</p>
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
                <p className="text-slate-700 mb-2"><strong>1.</strong> Déterminer le domaine de <span className="inline-block align-middle"><LatexRenderer latex={"f(x) = \\sqrt{x-1}"} /></span></p>
                <p className="text-slate-600 text-sm">(Réponse : [1, +∞))</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-slate-700 mb-2"><strong>2.</strong> Est-ce que <span className="inline-block align-middle"><LatexRenderer latex={"f(x) = x^3 - x"} /></span> est impaire ?</p>
                <p className="text-slate-600 text-sm">(Oui, car f(-x) = -f(x))</p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-slate-700 mb-2"><strong>3.</strong> Composition : <span className="inline-block align-middle"><LatexRenderer latex={"f(x) = 2x"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"g(x) = x^2"} /></span>, calculer <span className="inline-block align-middle"><LatexRenderer latex={"g \\circ f(3)"} /></span></p>
                <p className="text-slate-600 text-sm">(Réponse : 36)</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-slate-700 mb-2"><strong>4.</strong> Monotonie de <span className="inline-block align-middle"><LatexRenderer latex={"\\ln x"} /></span> sur (0, +∞)</p>
                <p className="text-slate-600 text-sm">(Croissante)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation vers les exercices */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-orange-50 via-white to-red-50">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-slate-600 mb-4 font-medium">
                Maintenant que vous maîtrisez les fonctions de base, passez aux exercices !
              </p>
              <Link to="/formation/math/terminale-vers-prepa/fonctions-exercices">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <FunctionSquare className="h-5 w-5" />
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
                Fin du chapitre 3 — Maîtrisez ces concepts fondamentaux sur les fonctions !
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Chapitre3FonctionsCoursPage;