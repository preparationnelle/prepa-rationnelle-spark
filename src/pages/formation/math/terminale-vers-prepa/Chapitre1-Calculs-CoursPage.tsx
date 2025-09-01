import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { LatexRenderer } from '@/components/LatexRenderer';
import { Home, ChevronRight, Calculator, BookOpen, ArrowRight } from 'lucide-react';

const Chapitre1CalculsCoursPage = () => {
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
            <span className="text-[#2D5BFF] font-bold">Cours - Chapitre 1</span>
          </div>
        </div>
      </nav>

      <div className="space-y-8 max-w-5xl mx-auto px-4 py-8">
        {/* En-tête */}
        <Card className="border-0 shadow-lg bg-gradient-to-br from-purple-50 via-blue-50 to-indigo-50">
          <CardHeader className="pb-6">
            <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Chapitre 1 : Calculs
            </CardTitle>
            <p className="text-slate-600 text-lg">
              Règles de calcul sur les puissances, exponentielles et logarithmes naturels
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
              Cette fiche résume les règles essentielles de calcul sur les <strong>puissances</strong>, les <strong>fonctions exponentielles</strong> (base <span className="inline-block align-middle"><LatexRenderer latex={"e"} /></span>) et les <strong>logarithmes naturels</strong> (<span className="inline-block align-middle"><LatexRenderer latex={"\\ln"} /></span>), vues au lycée et indispensables en classes préparatoires.
            </p>
            <p className="text-slate-700 leading-relaxed">
              Ces outils sont fondamentaux pour les manipulations algébriques, les dérivations, les intégrales et les équations différentielles.
            </p>
          </CardContent>
        </Card>

        {/* Section 1 - Puissances */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              <span className="font-semibold">Puissances</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div>
              <p className="text-slate-700 mb-4">
                Pour <span className="inline-block align-middle"><LatexRenderer latex={"a > 0"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"b > 0"} /></span> (ou adaptés pour exposants négatifs/fractionnaires), et <span className="inline-block align-middle"><LatexRenderer latex={"m, n \\in \\mathbb{R}"} /></span> :
              </p>

              <h4 className="text-lg font-semibold text-slate-800 mb-4">Règles de base</h4>
              <div className="space-y-3 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="mb-2"><strong>Produit :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"a^m \\cdot a^n = a^{m+n}"} /></span></p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="mb-2"><strong>Quotient :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{a^m}{a^n} = a^{m-n}"} /></span></p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="mb-2"><strong>Puissance d'une puissance :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"(a^m)^n = a^{mn}"} /></span></p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="mb-2"><strong>Produit élevé à une puissance :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"(ab)^m = a^m b^m"} /></span></p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="mb-2"><strong>Quotient élevé à une puissance :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\left(\\frac{a}{b}\\right)^m = \\frac{a^m}{b^m}"} /></span></p>
                </div>
                <div className="bg-indigo-50 p-4 rounded-lg">
                  <p className="mb-2"><strong>Racine :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"a^{1/n} = \\sqrt[n]{a}"} /></span> (pour <span className="inline-block align-middle"><LatexRenderer latex={"n"} /></span> entier positif)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2"><strong>Exposant négatif :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"a^{-m} = \\frac{1}{a^m}"} /></span></p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="mb-2"><strong>Exposant zéro :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"a^0 = 1"} /></span> (si <span className="inline-block align-middle"><LatexRenderer latex={"a \\neq 0"} /></span>)</p>
                </div>
              </div>

              <h4 className="text-lg font-semibold text-slate-800 mb-4">Exemples</h4>
              <div className="space-y-2 mb-6">
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
          </CardContent>
        </Card>

        {/* Section 2 - Fonction exponentielle */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              <span className="font-semibold">Fonction exponentielle</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div>
              <p className="text-slate-700 mb-6">
                La fonction exponentielle est <span className="inline-block align-middle"><LatexRenderer latex={"\\exp(x) = e^x"} /></span>, où <span className="inline-block align-middle"><LatexRenderer latex={"e \\approx 2.71828"} /></span> est la base du logarithme naturel.
              </p>

              <h4 className="text-lg font-semibold text-slate-800 mb-4">Propriétés algébriques</h4>
              <div className="space-y-3 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="mb-2"><strong>Produit :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"e^x \\cdot e^y = e^{x+y}"} /></span></p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="mb-2"><strong>Quotient :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\frac{e^x}{e^y} = e^{x-y}"} /></span></p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="mb-2"><strong>Puissance :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"(e^x)^y = e^{xy}"} /></span></p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="mb-2"><strong>Inverse :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"e^{-x} = 1 / e^x"} /></span></p>
                </div>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p className="mb-2"><strong>Valeur en 0 :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"e^0 = 1"} /></span></p>
                </div>
              </div>

              <h4 className="text-lg font-semibold text-slate-800 mb-4">Exemples</h4>
              <div className="space-y-2">
                <p>• <span className="inline-block align-middle"><LatexRenderer latex={"e^2 \\cdot e^3 = e^5 \\approx 148.413"} /></span></p>
                <p>• <span className="inline-block align-middle"><LatexRenderer latex={"(e^4)^{1/2} = e^2 \\approx 7.389"} /></span></p>
                <p>• Dérivée de <span className="inline-block align-middle"><LatexRenderer latex={"e^{2x} = 2 e^{2x}"} /></span></p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3 - Logarithme naturel */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-violet-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              <span className="font-semibold">Logarithme naturel</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div>
              <p className="text-slate-700 mb-6">
                La fonction <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(x)"} /></span> est définie pour <span className="inline-block align-middle"><LatexRenderer latex={"x > 0"} /></span>, et c'est l'inverse de <span className="inline-block align-middle"><LatexRenderer latex={"e^x"} /></span> : <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(e^x) = x"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"e^{\\ln(x)} = x"} /></span>.
              </p>

              <h4 className="text-lg font-semibold text-slate-800 mb-4">Propriétés algébriques</h4>
              <div className="space-y-3 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="mb-2"><strong>Produit :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(ab) = \\ln a + \\ln b"} /></span> (pour <span className="inline-block align-middle"><LatexRenderer latex={"a>0"} /></span>, <span className="inline-block align-middle"><LatexRenderer latex={"b>0"} /></span>)</p>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="mb-2"><strong>Quotient :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\ln\\left(\\frac{a}{b}\\right) = \\ln a - \\ln b"} /></span></p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg">
                  <p className="mb-2"><strong>Puissance :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(a^m) = m \\ln a"} /></span></p>
                </div>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <p className="mb-2"><strong>Valeur en 1 :</strong> <span className="inline-block align-middle"><LatexRenderer latex={"\\ln 1 = 0"} /></span></p>
                </div>
              </div>

              <h4 className="text-lg font-semibold text-slate-800 mb-4">Exemples</h4>
              <div className="space-y-2">
                <p>• <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(4) = \\ln(2^2) = 2 \\ln 2 \\approx 1.386"} /></span></p>
                <p>• <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(e^3) = 3"} /></span></p>
                <p>• <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(1/2) = -\\ln 2 \\approx -0.693"} /></span></p>
                <p>• Dérivée de <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(3x) = 1/x"} /></span></p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4 - Relations entre puissances, exp et ln */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                4
              </span>
              <span className="font-semibold">Relations entre puissances, exp et ln</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div className="space-y-4">
              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-slate-700 mb-2">• Toute puissance peut s'écrire avec exp : <span className="inline-block align-middle"><LatexRenderer latex={"a^b = e^{b \\ln a}"} /></span> (pour <span className="inline-block align-middle"><LatexRenderer latex={"a > 0"} /></span>)</p>
              </div>
              
              <div className="bg-green-50 p-6 rounded-lg">
                <p className="text-slate-700 mb-2">• Exemple : <span className="inline-block align-middle"><LatexRenderer latex={"2^3 = e^{3 \\ln 2}"} /></span></p>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <p className="text-slate-700 mb-2">• Utile pour dériver <span className="inline-block align-middle"><LatexRenderer latex={"a^x = e^{x \\ln a}"} /></span>, dérivée <span className="inline-block align-middle"><LatexRenderer latex={"a^x \\ln a"} /></span></p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <p className="text-slate-700 mb-2">• Logarithme d'une puissance : <span className="inline-block align-middle"><LatexRenderer latex={"\\ln(a^b) = b \\ln a"} /></span></p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation vers les exercices */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-orange-50 via-white to-red-50">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-slate-600 mb-4 font-medium">
                Maintenant que vous maîtrisez les règles de calcul, passez aux exercices !
              </p>
              <Link to="/formation/math/terminale-vers-prepa/calculs-exercices">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg hover:from-orange-600 hover:to-red-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <Calculator className="h-5 w-5" />
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
                Fin du chapitre 1 — Maîtrisez ces règles fondamentales pour réussir en prépa !
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Chapitre1CalculsCoursPage;