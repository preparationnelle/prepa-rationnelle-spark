import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { LatexRenderer } from '@/components/LatexRenderer';
import { Home, ChevronRight, Sigma, BookOpen, ArrowRight, Calculator } from 'lucide-react';

const Chapitre2SommesSuitesCoursPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-gray-700">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formations" className="hover:text-gray-900 transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/maths-choix" className="hover:text-gray-900 transition-colors">
              Choix option Maths
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/math/terminale-vers-prepa" className="hover:text-gray-900 transition-colors">
              Terminale vers la prépa
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Cours - Chapitre 2</span>
          </div>
        </div>
      </nav>

      <div className="space-y-8 max-w-5xl mx-auto px-4 py-8">
        {/* En-tête */}
        <div className="text-center py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Chapitre 2 : Sommes, suites et produits
          </h1>
          <p className="text-gray-700 text-lg mb-2">
            Sommes et produits de base - Notation, propriétés et formules classiques
          </p>
          <p className="text-gray-600 text-sm">
            Cette fiche couvre les bases des sommes et produits en Terminale
          </p>
        </div>

        {/* Introduction */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                <BookOpen className="h-4 w-4 text-gray-600" />
              </div>
              Introduction
            </h2>
          </div>
          <div className="p-6">
            <p className="text-gray-700 leading-relaxed">
              Cette fiche couvre les bases des <strong>sommes</strong> et <strong>produits</strong> en Terminale. On se concentre sur les <strong>notations</strong>, <strong>propriétés simples</strong> et <strong>formules classiques</strong> pour les suites arithmétiques et géométriques.
            </p>
          </div>
        </div>

        {/* Section 1 - Notation des sommes et produits */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-700">
                1
              </div>
              Notation des sommes et produits
            </h2>
          </div>
          <div className="p-6 space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Sommes</h4>
              <p className="text-gray-700 mb-4">
                Une somme s'écrit avec le symbole sigma :
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-4 border-l-4 border-blue-200">
                <div className="text-center">
                  <LatexRenderer latex={"S = \\sum\\limits_{k=1}^n a_k = a_1 + a_2 + \\cdots + a_n"} />
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                <strong>Exemple :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\sum_{k=1}^4 k = 1 + 2 + 3 + 4 = 10"} /></span>
              </p>

              <div className="border-t border-gray-200 my-6"></div>

              <h4 className="text-lg font-semibold text-gray-900 mb-4">Produits</h4>
              <p className="text-gray-700 mb-4">
                Un produit s'écrit avec le symbole pi :
              </p>
              <div className="bg-gray-50 p-6 rounded-lg mb-4 border-l-4 border-green-200">
                <div className="text-center">
                  <LatexRenderer latex={"P = \\prod\\limits_{k=1}^n a_k = a_1 \\cdot a_2 \\cdots a_n"} />
                </div>
              </div>
              <p className="text-gray-700 mb-4">
                <strong>Exemple :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\prod_{k=1}^3 k = 1 \\cdot 2 \\cdot 3 = 6"} /></span>
              </p>
            </div>
          </div>
        </div>

        {/* Section 2 - Propriétés simples des sommes */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-700">
                2
              </div>
              Propriétés simples des sommes
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-200">
                <p className="text-gray-700 mb-3"><strong>Linéarité :</strong></p>
                <div className="text-center">
                  <LatexRenderer latex={"\\sum\\limits_{k=1}^n (c a_k + d b_k) = c \\sum\\limits_{k=1}^n a_k + d \\sum\\limits_{k=1}^n b_k"} />
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-200">
                <p className="text-gray-700 mb-3"><strong>Somme d'une constante :</strong></p>
                <div className="text-center">
                  <LatexRenderer latex={"\\sum_{k=1}^n c = nc"} />
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-200">
                <p className="text-gray-700 mb-3"><strong>Exemple :</strong></p>
                <div className="text-center">
                  <LatexRenderer latex={"\\sum_{k=1}^3 (2k + 1) = 2 \\sum_{k=1}^3 k + \\sum_{k=1}^3 1 = 2(6) + 3 = 15"} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 - Propriétés simples des produits */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-700">
                3
              </div>
              Propriétés simples des produits
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-6">
              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-blue-200">
                <p className="text-gray-700 mb-3"><strong>Produit d'une constante :</strong></p>
                <div className="text-center">
                  <LatexRenderer latex={"\\prod\\limits_{k=1}^n (c a_k) = c^n \\prod\\limits_{k=1}^n a_k"} />
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-green-200">
                <p className="text-gray-700 mb-3"><strong>Factorielle :</strong></p>
                <div className="text-center">
                  <LatexRenderer latex={"n! = \\prod_{k=1}^n k"} />
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-yellow-200">
                <p className="text-gray-700 mb-3"><strong>Exemple :</strong></p>
                <div className="text-center">
                  <LatexRenderer latex={"4! = 24"} />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4 - Sommes classiques */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-700">
                4
              </div>
              Sommes classiques
            </h2>
          </div>
          <div className="p-6 space-y-6">
            <div>
              <h4 className="text-lg font-semibold text-gray-900 mb-4">Somme arithmétique</h4>
              <p className="text-gray-700 mb-4">Pour les entiers de 1 à n :</p>
              <div className="bg-gray-50 p-6 rounded-lg mb-4 border-l-4 border-blue-200">
                <div className="text-center">
                  <LatexRenderer latex={"\\sum\\limits_{k=1}^n k = \\frac{n(n+1)}{2}"} />
                </div>
              </div>
              <p className="text-gray-700 mb-4">Général pour suite arithmétique (premier terme a, raison d) :</p>
              <div className="bg-gray-50 p-6 rounded-lg mb-4 border-l-4 border-blue-300">
                <div className="text-center">
                  <LatexRenderer latex={"S_n = \\frac{n}{2} [2a + (n-1)d]"} />
                </div>
              </div>
              <p className="text-gray-700 mb-6">
                <strong>Exemple :</strong> Somme de 1 à 5 = 15
              </p>

              <div className="border-t border-gray-200 my-6"></div>

              <h4 className="text-lg font-semibold text-gray-900 mb-4">Somme géométrique</h4>
              <p className="text-gray-700 mb-4">Pour suite géométrique (premier terme a, raison r ≠ 1) :</p>
              <div className="bg-gray-50 p-6 rounded-lg mb-4 border-l-4 border-green-200">
                <div className="text-center">
                  <LatexRenderer latex={"S_n = a \\frac{1 - r^n}{1 - r}"} />
                </div>
              </div>
              <p className="text-gray-700 mb-4">Si r = 1, <span className="inline-block align-middle"><LatexRenderer latex={"S_n = na"} /></span></p>
              <div className="bg-gray-50 p-4 rounded-lg mb-6 border-l-4 border-yellow-200">
                <p className="text-gray-700 mb-2"><strong>Exemple :</strong></p>
                <div className="text-center">
                  <LatexRenderer latex={"\\sum\\limits_{k=0}^3 2^k = 1 + 2 + 4 + 8 = 15 = \\frac{2^4 - 1}{2-1}"} />
                </div>
              </div>

              <div className="border-t border-gray-200 my-6"></div>

              <h4 className="text-lg font-semibold text-gray-900 mb-4">Autres sommes de base</h4>
              <div className="space-y-4">
                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-purple-200">
                  <p className="text-gray-700 mb-3"><strong>Carrés :</strong></p>
                  <div className="text-center">
                    <LatexRenderer latex={"\\sum\\limits_{k=1}^n k^2 = \\frac{n(n+1)(2n+1)}{6}"} />
                  </div>
                </div>

                <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-indigo-200">
                  <p className="text-gray-700 mb-3"><strong>Cubes :</strong></p>
                  <div className="text-center">
                    <LatexRenderer latex={"\\sum\\limits_{k=1}^n k^3 = \\left( \\frac{n(n+1)}{2} \\right)^2"} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section 5 - Exercices simples */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-700">
                5
              </div>
              Exercices simples
            </h2>
          </div>
          <div className="p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-200">
                <p className="text-gray-700 mb-2"><strong>1.</strong> Calculer <span className="inline-block align-middle"><LatexRenderer latex={"\\sum\\limits_{k=1}^5 k^2"} /></span></p>
                <p className="text-gray-600 text-sm">(Réponse : 55)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-200">
                <p className="text-gray-700 mb-2"><strong>2.</strong> Calculer <span className="inline-block align-middle"><LatexRenderer latex={"\\prod\\limits_{k=1}^4 (k+1)"} /></span></p>
                <p className="text-gray-600 text-sm">(Réponse : 120)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-200">
                <p className="text-gray-700 mb-2"><strong>3.</strong> Somme arithmétique : 3 + 6 + 9 + 12</p>
                <p className="text-gray-600 text-sm">(Réponse : 30)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-purple-200">
                <p className="text-gray-700 mb-2"><strong>4.</strong> Somme géométrique : 2 + 4 + 8 + 16</p>
                <p className="text-gray-600 text-sm">(Réponse : 30)</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation vers les exercices */}
        <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
          <div className="text-center">
            <p className="text-gray-700 mb-4 font-medium">
              Maintenant que vous maîtrisez les sommes et produits, passez aux exercices !
            </p>
            <Link to="/formation/math/terminale-vers-prepa/sommes-suites-exercices">
              <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                <Sigma className="h-5 w-5" />
                <span className="font-semibold">Faire les exercices</span>
                <ArrowRight className="h-4 w-4" />
              </div>
            </Link>
          </div>
        </div>

        {/* Conclusion */}
        <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
          <div className="text-center">
            <p className="text-gray-700 italic font-medium">
              Fin du chapitre 2 — Maîtrisez ces notations et formules essentielles !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapitre2SommesSuitesCoursPage;