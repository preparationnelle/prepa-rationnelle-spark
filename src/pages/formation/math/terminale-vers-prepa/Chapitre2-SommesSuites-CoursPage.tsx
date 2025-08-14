import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { LatexRenderer } from '@/components/LatexRenderer';
import { Home, ChevronRight, Sigma, BookOpen, ArrowRight, Calculator } from 'lucide-react';

const Chapitre2SommesSuitesCoursPage = () => {
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
            <span className="text-[#2D5BFF] font-bold">Cours - Chapitre 2</span>
          </div>
        </div>
      </nav>

      <div className="space-y-8 max-w-5xl mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
          <CardHeader className="pb-6">
            <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Chapitre 2 : Sommes, suites et produits
            </CardTitle>
            <p className="text-slate-600 text-lg">
              Sommes et produits de base - Notation, propriétés et formules classiques
            </p>
            <p className="text-slate-500 text-sm mt-2">
              Cette fiche couvre les bases des sommes et produits en Terminale, avec les notations, propriétés simples et formules classiques pour les suites arithmétiques et géométriques.
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
              Cette fiche couvre les bases des <strong>sommes</strong> et <strong>produits</strong> en Terminale. On se concentre sur les <strong>notations</strong>, <strong>propriétés simples</strong> et <strong>formules classiques</strong> pour les suites arithmétiques et géométriques.
            </p>
          </CardContent>
        </Card>

        {/* Section 1 - Notation des sommes et produits */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              <span className="font-semibold">Notation des sommes et produits</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Sommes</h4>
              <p className="text-slate-700 mb-4">
                Une somme s'écrit avec le symbole sigma :
              </p>
              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <div className="text-center">
                  <LatexRenderer latex={"S = \\sum_{k=1}^n a_k = a_1 + a_2 + \\cdots + a_n"} />
                </div>
              </div>
              <p className="text-slate-700 mb-4">
                <strong>Exemple :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\sum_{k=1}^4 k = 1 + 2 + 3 + 4 = 10"} /></span>
              </p>

              <Separator className="my-6" />

              <h4 className="text-lg font-semibold text-slate-800 mb-4">Produits</h4>
              <p className="text-slate-700 mb-4">
                Un produit s'écrit avec le symbole pi :
              </p>
              <div className="bg-green-50 p-6 rounded-lg mb-4">
                <div className="text-center">
                  <LatexRenderer latex={"P = \\prod_{k=1}^n a_k = a_1 \\cdot a_2 \\cdots a_n"} />
                </div>
              </div>
              <p className="text-slate-700 mb-4">
                <strong>Exemple :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\prod_{k=1}^3 k = 1 \\cdot 2 \\cdot 3 = 6"} /></span>
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section 2 - Propriétés simples des sommes */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              <span className="font-semibold">Propriétés simples des sommes</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-slate-700 mb-3"><strong>Linéarité :</strong></p>
                <div className="text-center">
                  <LatexRenderer latex={"\\sum_{k=1}^n (c a_k + d b_k) = c \\sum_{k=1}^n a_k + d \\sum_{k=1}^n b_k"} />
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-slate-700 mb-3"><strong>Somme d'une constante :</strong></p>
                <div className="text-center">
                  <LatexRenderer latex={"\\sum_{k=1}^n c = nc"} />
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <p className="text-slate-700 mb-3"><strong>Exemple :</strong></p>
                <div className="text-center">
                  <LatexRenderer latex={"\\sum_{k=1}^3 (2k + 1) = 2 \\sum_{k=1}^3 k + \\sum_{k=1}^3 1 = 2(6) + 3 = 15"} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3 - Propriétés simples des produits */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-violet-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              <span className="font-semibold">Propriétés simples des produits</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-slate-700 mb-3"><strong>Produit d'une constante :</strong></p>
                <div className="text-center">
                  <LatexRenderer latex={"\\prod_{k=1}^n (c a_k) = c^n \\prod_{k=1}^n a_k"} />
                </div>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-slate-700 mb-3"><strong>Factorielle :</strong></p>
                <div className="text-center">
                  <LatexRenderer latex={"n! = \\prod_{k=1}^n k"} />
                </div>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <p className="text-slate-700 mb-3"><strong>Exemple :</strong></p>
                <div className="text-center">
                  <LatexRenderer latex={"4! = 24"} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4 - Sommes classiques */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                4
              </span>
              <span className="font-semibold">Sommes classiques</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Somme arithmétique</h4>
              <p className="text-slate-700 mb-4">Pour les entiers de 1 à n :</p>
              <div className="bg-blue-50 p-6 rounded-lg mb-4">
                <div className="text-center">
                  <LatexRenderer latex={"\\sum_{k=1}^n k = \\frac{n(n+1)}{2}"} />
                </div>
              </div>
              <p className="text-slate-700 mb-4">Général pour suite arithmétique (premier terme a, raison d) :</p>
              <div className="bg-blue-100 p-6 rounded-lg mb-4">
                <div className="text-center">
                  <LatexRenderer latex={"S_n = \\frac{n}{2} [2a + (n-1)d]"} />
                </div>
              </div>
              <p className="text-slate-700 mb-6">
                <strong>Exemple :</strong> Somme de 1 à 5 = 15
              </p>

              <Separator className="my-6" />

              <h4 className="text-lg font-semibold text-slate-800 mb-4">Somme géométrique</h4>
              <p className="text-slate-700 mb-4">Pour suite géométrique (premier terme a, raison r ≠ 1) :</p>
              <div className="bg-green-50 p-6 rounded-lg mb-4">
                <div className="text-center">
                  <LatexRenderer latex={"S_n = a \\frac{1 - r^n}{1 - r}"} />
                </div>
              </div>
              <p className="text-slate-700 mb-4">Si r = 1, <span className="inline-block align-middle"><LatexRenderer latex={"S_n = na"} /></span></p>
              <div className="bg-yellow-50 p-4 rounded-lg mb-6">
                <p className="text-slate-700 mb-2"><strong>Exemple :</strong></p>
                <div className="text-center">
                  <LatexRenderer latex={"\\sum_{k=0}^3 2^k = 1 + 2 + 4 + 8 = 15 = \\frac{2^4 - 1}{2-1}"} />
                </div>
              </div>

              <Separator className="my-6" />

              <h4 className="text-lg font-semibold text-slate-800 mb-4">Autres sommes de base</h4>
              <div className="space-y-4">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <p className="text-slate-700 mb-3"><strong>Carrés :</strong></p>
                  <div className="text-center">
                    <LatexRenderer latex={"\\sum_{k=1}^n k^2 = \\frac{n(n+1)(2n+1)}{6}"} />
                  </div>
                </div>
                
                <div className="bg-indigo-50 p-6 rounded-lg">
                  <p className="text-slate-700 mb-3"><strong>Cubes :</strong></p>
                  <div className="text-center">
                    <LatexRenderer latex={"\\sum_{k=1}^n k^3 = \\left( \\frac{n(n+1)}{2} \\right)^2"} />
                  </div>
                </div>
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
                <p className="text-slate-700 mb-2"><strong>1.</strong> Calculer <span className="inline-block align-middle"><LatexRenderer latex={"\\sum_{k=1}^5 k^2"} /></span></p>
                <p className="text-slate-600 text-sm">(Réponse : 55)</p>
              </div>
              
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-slate-700 mb-2"><strong>2.</strong> Calculer <span className="inline-block align-middle"><LatexRenderer latex={"\\prod_{k=1}^4 (k+1)"} /></span></p>
                <p className="text-slate-600 text-sm">(Réponse : 120)</p>
              </div>
              
              <div className="bg-yellow-50 p-4 rounded-lg">
                <p className="text-slate-700 mb-2"><strong>3.</strong> Somme arithmétique : 3 + 6 + 9 + 12</p>
                <p className="text-slate-600 text-sm">(Réponse : 30)</p>
              </div>
              
              <div className="bg-purple-50 p-4 rounded-lg">
                <p className="text-slate-700 mb-2"><strong>4.</strong> Somme géométrique : 2 + 4 + 8 + 16</p>
                <p className="text-slate-600 text-sm">(Réponse : 30)</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation vers les exercices */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-orange-50 via-white to-red-50">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-slate-600 mb-4 font-medium">
                Maintenant que vous maîtrisez les sommes et produits, passez aux exercices !
              </p>
              <Link to="/formation/math/terminale-vers-prepa/sommes-suites-exercices">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <Sigma className="h-5 w-5" />
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
                Fin du chapitre 2 — Maîtrisez ces notations et formules essentielles !
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Chapitre2SommesSuitesCoursPage;