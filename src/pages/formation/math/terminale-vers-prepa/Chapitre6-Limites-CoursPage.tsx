import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { LatexRenderer } from '@/components/LatexRenderer';
import { Home, ChevronRight, Infinity, BookOpen, ArrowRight } from 'lucide-react';

const Chapitre6LimitesCoursPage = () => {
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
            <span className="text-[#2D5BFF] font-bold">Cours - Chapitre 6</span>
          </div>
        </div>
      </nav>

      <div className="space-y-8 max-w-5xl mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50">
          <CardHeader className="pb-6">
            <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent mb-4">
              Chapitre 6 : Limites
            </CardTitle>
            <p className="text-slate-600 text-lg">
              Limites de fonctions et techniques de calcul des limites
            </p>
            <p className="text-slate-500 text-sm mt-2">
              Formation mathématiques pour bien réussir la transition lycée → prépa ECG, avec les chapitres fondamentaux à maîtriser.
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
              Les <strong>limites</strong> constituent un concept fondamental de l'analyse mathématique. Test LaTeX simple : <LatexRenderer latex="x^2" />
            </p>
            <p className="text-slate-700 leading-relaxed">
              Cette notion est essentielle pour comprendre la continuité, la dérivabilité et l'intégration des fonctions. Test limite : <LatexRenderer latex="\lim_{x \to 0} x = 0" />
            </p>
          </CardContent>
        </Card>

        {/* Section 1 - Définitions */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              <span className="font-semibold">Définitions des limites</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Limite finie en un point</h4>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-slate-700 mb-3">
                  Soit f une fonction définie au voisinage de a (sauf éventuellement en a).
                </p>
                <p className="text-slate-700 mb-2">
                  On dit que f admet pour limite L en a si :
                </p>
                <div className="text-center bg-white p-4 rounded border">
                  <LatexRenderer latex="\lim_{x \to a} f(x) = L" block={true} />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Limite infinie en un point</h4>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-slate-700 mb-2">
                  On dit que f tend vers l'infini en a si :
                </p>
                <div className="text-center bg-white p-4 rounded border">
                  <LatexRenderer latex="\lim_{x \to a} f(x) = +\infty" block={true} />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Limite à l'infini</h4>
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-slate-700 mb-2">
                  On dit que f admet pour limite L en <span className="inline-block align-middle"><LatexRenderer latex="+\\infty" /></span> si :
                </p>
                <div className="text-center bg-white p-4 rounded border">
                  <LatexRenderer latex="\lim_{x \to +\infty} f(x) = L" block={true} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2 - Propriétés */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              <span className="font-semibold">Propriétés des limites</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Opérations sur les limites</h4>
              <p className="text-slate-700 mb-4">
                Si <span className="inline-block align-middle"><LatexRenderer latex="\\lim_{x \\to a} f(x) = L" /></span> et <span className="inline-block align-middle"><LatexRenderer latex="\\lim_{x \\to a} g(x) = M" /></span>, alors :
              </p>
              
              <div className="space-y-3">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="mb-2"><strong>Somme :</strong></p>
                    <div className="text-center bg-white p-3 rounded border">
                      <LatexRenderer latex="\lim_{x \to a} [f(x) + g(x)] = L + M" block={true} />
                    </div>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="mb-2"><strong>Produit :</strong></p>
                    <div className="text-center bg-white p-3 rounded border">
                      <LatexRenderer latex="\lim_{x \to a} [f(x) \times g(x)] = L \times M" block={true} />
                    </div>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="mb-2"><strong>Quotient :</strong> (si <span className="inline-block align-middle"><LatexRenderer latex="M \\neq 0" /></span>)</p>
                    <div className="text-center bg-white p-3 rounded border">
                      <LatexRenderer latex="\lim_{x \to a} \frac{f(x)}{g(x)} = \frac{L}{M}" block={true} />
                    </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Théorème d'encadrement</h4>
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-slate-700 mb-3">
                  Si <span className="inline-block align-middle"><LatexRenderer latex="g(x) \\leq f(x) \\leq h(x)" /></span> au voisinage de a et 
                  <span className="inline-block align-middle"><LatexRenderer latex="\\lim_{x \\to a} g(x) = \\lim_{x \\to a} h(x) = L" /></span>, alors :
                </p>
                <div className="text-center bg-white p-3 rounded border">
                  <LatexRenderer latex="\lim_{x \to a} f(x) = L" block={true} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3 - Formes indéterminées */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              <span className="font-semibold">Formes indéterminées</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Types de formes indéterminées</h4>
              <div className="grid grid-cols-3 gap-4 mb-6">
                <div className="bg-red-50 p-3 rounded-lg text-center">
                  <LatexRenderer latex="\frac{0}{0}" />
                </div>
                <div className="bg-red-50 p-3 rounded-lg text-center">
                  <LatexRenderer latex="\frac{\infty}{\infty}" />
                </div>
                <div className="bg-red-50 p-3 rounded-lg text-center">
                  <LatexRenderer latex="\infty - \infty" />
                </div>
                <div className="bg-red-50 p-3 rounded-lg text-center">
                  <LatexRenderer latex="0 \times \infty" />
                </div>
                <div className="bg-red-50 p-3 rounded-lg text-center">
                  <LatexRenderer latex="1^\infty" />
                </div>
                <div className="bg-red-50 p-3 rounded-lg text-center">
                  <LatexRenderer latex="0^0" />
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Techniques de levée</h4>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-medium text-blue-800 mb-2">1. Factorisation</h5>
                  <p className="text-slate-700 mb-2">Exemple :</p>
                  <div className="text-center bg-white p-3 rounded border">
                    <LatexRenderer latex="\lim_{x \to 1} \frac{x^2 - 1}{x - 1} = \lim_{x \to 1} \frac{(x-1)(x+1)}{x - 1} = \lim_{x \to 1} (x+1) = 2" block={true} />
                  </div>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-medium text-green-800 mb-2">2. Expression conjuguée</h5>
                  <p className="text-slate-700 mb-2">Exemple :</p>
                  <div className="text-center bg-white p-3 rounded border">
                    <LatexRenderer latex="\lim_{x \to +\infty} (\sqrt{x+1} - \sqrt{x}) = \lim_{x \to +\infty} \frac{1}{\sqrt{x+1} + \sqrt{x}} = 0" block={true} />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4 - Limites usuelles */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                4
              </span>
              <span className="font-semibold">Limites usuelles</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Limites de référence</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="text-center bg-white p-3 rounded border">
                    <LatexRenderer latex="\lim_{x \to 0} \frac{\sin x}{x} = 1" block={true} />
                  </div>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <div className="text-center bg-white p-3 rounded border">
                    <LatexRenderer latex="\lim_{x \to 0} \frac{e^x - 1}{x} = 1" block={true} />
                  </div>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <div className="text-center bg-white p-3 rounded border">
                    <LatexRenderer latex="\lim_{x \to 0} \frac{\ln(1 + x)}{x} = 1" block={true} />
                  </div>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <div className="text-center bg-white p-3 rounded border">
                    <LatexRenderer latex="\lim_{x \to 0} \frac{1 - \cos x}{x^2} = \frac{1}{2}" block={true} />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Croissances comparées</h4>
              <div className="bg-gray-50 p-4 rounded-lg">
                <p className="text-slate-700 mb-3">À l'infini :</p>
                <div className="text-center bg-white p-3 rounded border">
                  <LatexRenderer latex="\ln x \ll x^\alpha \ll e^x \text{ pour } \alpha > 0" block={true} />
                </div>
                <p className="text-slate-700 mt-3 text-sm">
                  Le logarithme croît moins vite que toute puissance, qui croît moins vite que l'exponentielle.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Résumé */}
        <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-blue-700 flex items-center gap-2">
              <Infinity className="h-5 w-5" />
              Points clés à retenir
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium text-blue-600">Méthodes essentielles :</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Maîtriser les définitions</li>
                  <li>✓ Identifier les formes indéterminées</li>
                  <li>✓ Appliquer les techniques de levée</li>
                  <li>✓ Utiliser les limites de référence</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-blue-600">Applications :</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Étudier la continuité</li>
                  <li>✓ Déterminer les asymptotes</li>
                  <li>✓ Analyser le comportement des fonctions</li>
                  <li>✓ Résoudre des équations</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation */}
        <div className="flex justify-between items-center pt-6">
          <Link
            to="/formation/math/terminale-vers-prepa"
            className="flex items-center gap-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-lg hover:bg-blue-200 transition-colors"
          >
            ← Retour au sommaire
          </Link>
          <Link
            to="/formation/math/terminale-vers-prepa/limites-exercices"
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            Exercices
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Chapitre6LimitesCoursPage;
