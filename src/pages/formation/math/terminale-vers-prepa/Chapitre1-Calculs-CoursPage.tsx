import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { LatexRenderer } from '@/components/LatexRenderer';
import { Home, ChevronRight, Calculator, BookOpen, ArrowRight } from 'lucide-react';

const Chapitre1CalculsCoursPage = () => {
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
            <span className="text-gray-900 font-bold">Cours - Chapitre 1</span>
          </div>
        </div>
      </nav>

      <div className="space-y-8 max-w-5xl mx-auto px-4 py-8">
        {/* En-tête */}
        <div className="text-center py-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Chapitre 1 : Calculs
          </h1>
          <p className="text-gray-700 text-lg mb-2">
            Règles de calcul sur les puissances, exponentielles et logarithmes naturels
          </p>
          <p className="text-gray-600 text-sm">
            Formation mathématiques pour bien réussir la transition lycée → prépa ECG
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
          <div className="p-6 space-y-4">
            <p className="text-gray-700 leading-relaxed">
              Cette fiche résume les règles essentielles de calcul sur les <strong>puissances</strong>, les <strong>fonctions exponentielles</strong> (base <span className="inline-block align-middle"><LatexRenderer latex={"e"} /></span>) et les <strong>logarithmes naturels</strong> (<span className="inline-block align-middle"><LatexRenderer latex={"\\ln"} /></span>), vues au lycée et indispensables en classes préparatoires.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Ces outils sont fondamentaux pour les manipulations algébriques, les dérivations, les intégrales et les équations différentielles.
            </p>
          </div>
        </div>

        {/* Section 1 - Puissances */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-700">
                1
              </div>
              Puissances
            </h2>
          </div>
          <div className="p-6 space-y-6">
            <div>
              <p className="text-gray-700 mb-4">
                Pour <span className="inline-block align-middle"><LatexRenderer latex={"a > 0"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"b > 0"} /></span> (ou adaptés pour exposants négatifs/fractionnaires), et <span className="inline-block align-middle"><LatexRenderer latex={"m, n \\in \\mathbb{R}"} /></span> :
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-4">Règles de base</h4>
              <div className="space-y-3 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-200">
                  <p><strong>Produit :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"a^m \\cdot a^n = a^{m+n}"} /></span></p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-200">
                  <p><strong>Quotient :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{a^m}{a^n} = a^{m-n}"} /></span></p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-purple-200">
                  <p><strong>Puissance d'une puissance :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"(a^m)^n = a^{mn}"} /></span></p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-200">
                  <p><strong>Produit élevé à une puissance :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"(ab)^m = a^m b^m"} /></span></p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-red-200">
                  <p><strong>Quotient élevé à une puissance :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\left(\\frac{a}{b}\\right)^m = \\frac{a^m}{b^m}"} /></span></p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-indigo-200">
                  <p><strong>Racine :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"a^{1/n} = \\sqrt[n]{a}"} /></span> (pour <span className="inline-block align-middle"><LatexRenderer latex={"n"} /></span> entier positif)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-gray-300">
                  <p><strong>Exposant négatif :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"a^{-m} = \\frac{1}{a^m}"} /></span></p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-orange-200">
                  <p><strong>Exposant zéro :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"a^0 = 1"} /></span> (si <span className="inline-block align-middle"><LatexRenderer latex={"a \\neq 0"} /></span>)</p>
                </div>
              </div>

              <h4 className="text-lg font-semibold text-gray-900 mb-4">Exemples</h4>
              <div className="space-y-2 mb-6 pl-4">
                <p>• <span className="inline-block align-middle"><LatexRenderer latex={"2^3 \\cdot 2^2 = 2^5 = 32"} /></span></p>
                <p>• <span className="inline-block align-middle"><LatexRenderer latex={"(3^2)^4 = 3^8 = 6561"} /></span></p>
                <p>• <span className="inline-block align-middle"><LatexRenderer latex={"4^{1/2} = \\sqrt{4} = 2"} /></span></p>
                <p>• <span className="inline-block align-middle"><LatexRenderer latex={"5^{-1} = 1/5"} /></span></p>
              </div>

              <div className="bg-amber-50 border-l-4 border-amber-400 p-4 rounded-r-lg">
                <h4 className="text-lg font-semibold text-amber-800 mb-2">Remarques pour la prépa</h4>
                <p className="text-amber-700">• Attention aux bases négatives avec exposants fractionnaires (non réels si dénominateur pair)</p>
                <p className="text-amber-700">• Utiliser pour simplifier des expressions comme <span className="inline-block align-middle"><LatexRenderer latex={"\\sqrt[3]{a^6 b^3} = a^2 b"} /></span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 2 - Fonction exponentielle */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-700">
                2
              </div>
              Fonction exponentielle
            </h2>
          </div>
          <div className="p-6 space-y-6">
            <div>
              <p className="text-gray-700 mb-6">
                La fonction exponentielle est <span className="inline-block align-middle"><LatexRenderer latex={"\\exp(x) = e^x"} /></span>, où <span className="inline-block align-middle"><LatexRenderer latex={"e \\approx 2.71828"} /></span> est la base du logarithme naturel.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-4">Propriétés algébriques</h4>
              <div className="space-y-3 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-200">
                  <p><strong>Produit :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"e^x \\cdot e^y = e^{x+y}"} /></span></p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-200">
                  <p><strong>Quotient :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{e^x}{e^y} = e^{x-y}"} /></span></p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-purple-200">
                  <p><strong>Puissance :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"(e^x)^y = e^{xy}"} /></span></p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-200">
                  <p><strong>Inverse :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"e^{-x} = 1 / e^x"} /></span></p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-red-200">
                  <p><strong>Valeur en 0 :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"e^0 = 1"} /></span></p>
                </div>
              </div>

              <h4 className="text-lg font-semibold text-gray-900 mb-4">Exemples</h4>
              <div className="space-y-2 pl-4">
                <p>• <span className="inline-block align-middle"><LatexRenderer latex={"e^2 \\cdot e^3 = e^5 \\approx 148.413"} /></span></p>
                <p>• <span className="inline-block align-middle"><LatexRenderer latex={"(e^4)^{1/2} = e^2 \\approx 7.389"} /></span></p>
                <p>• Dérivée de <span className="inline-block align-middle"><LatexRenderer latex={"e^{2x} = 2 e^{2x}"} /></span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 3 - Logarithme naturel */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-700">
                3
              </div>
              Logarithme naturel
            </h2>
          </div>
          <div className="p-6 space-y-6">
            <div>
              <p className="text-gray-700 mb-6">
                La fonction <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(x)"} /></span> est définie pour <span className="inline-block align-middle"><LatexRenderer latex={"x > 0"} /></span>, et c'est l'inverse de <span className="inline-block align-middle"><LatexRenderer latex={"e^x"} /></span> : <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(e^x) = x"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"e^{\\ln(x)} = x"} /></span>.
              </p>

              <h4 className="text-lg font-semibold text-gray-900 mb-4">Propriétés algébriques</h4>
              <div className="space-y-3 mb-6">
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-200">
                  <p><strong>Produit :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(ab) = \\ln a + \\ln b"} /></span> (pour <span className="inline-block align-middle"><LatexRenderer latex={"a>0"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"b>0"} /></span>)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-200">
                  <p><strong>Quotient :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\ln\\left(\\frac{a}{b}\\right) = \\ln a - \\ln b"} /></span></p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-purple-200">
                  <p><strong>Puissance :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(a^m) = m \\ln a"} /></span></p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-200">
                  <p><strong>Valeur en 1 :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\ln 1 = 0"} /></span></p>
                </div>
              </div>

              <h4 className="text-lg font-semibold text-gray-900 mb-4">Exemples</h4>
              <div className="space-y-2 pl-4">
                <p>• <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(4) = \\ln(2^2) = 2 \\ln 2 \\approx 1.386"} /></span></p>
                <p>• <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(e^3) = 3"} /></span></p>
                <p>• <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(1/2) = -\\ln 2 \\approx -0.693"} /></span></p>
                <p>• Dérivée de <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(3x) = 1/x"} /></span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Section 4 - Relations entre puissances, exp et ln */}
        <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900 flex items-center gap-3">
              <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-sm font-bold text-gray-700">
                4
              </div>
              Relations entre puissances, exp et ln
            </h2>
          </div>
          <div className="p-6">
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-blue-200">
                <p className="text-gray-700">Toute puissance peut s'écrire avec exp : <span className="inline-block align-middle"><LatexRenderer latex={"a^b = e^{b \\ln a}"} /></span> (pour <span className="inline-block align-middle"><LatexRenderer latex={"a > 0"} /></span>)</p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-200">
                <p className="text-gray-700">Exemple : <span className="inline-block align-middle"><LatexRenderer latex={"2^3 = e^{3 \\ln 2}"} /></span></p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-purple-200">
                <p className="text-gray-700">Utile pour dériver <span className="inline-block align-middle"><LatexRenderer latex={"a^x = e^{x \\ln a}"} /></span>, dérivée <span className="inline-block align-middle"><LatexRenderer latex={"a^x \\ln a"} /></span></p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-yellow-200">
                <p className="text-gray-700">Logarithme d'une puissance : <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(a^b) = b \\ln a"} /></span></p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation vers les exercices */}
        <div className="bg-gray-50 rounded-lg border border-gray-200 p-6">
          <div className="text-center">
            <p className="text-gray-700 mb-4 font-medium">
              Maintenant que vous maîtrisez les règles de calcul, passez aux exercices !
            </p>
            <Link to="/formation/math/terminale-vers-prepa/calculs-exercices">
              <div className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                <Calculator className="h-5 w-5" />
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
              Fin du chapitre 1 — Maîtrisez ces règles fondamentales pour réussir en prépa !
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chapitre1CalculsCoursPage;