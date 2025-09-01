import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { LatexRenderer } from '@/components/LatexRenderer';
import { Home, ChevronRight, Dices, BookOpen, ArrowRight, Calculator } from 'lucide-react';

const Chapitre6ProbabilitesCoursPage = () => {
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
        <Card className="border-0 shadow-lg bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50">
          <CardHeader className="pb-6">
            <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent mb-4">
              Chapitre 6 : Probabilités de base
            </CardTitle>
            <p className="text-slate-600 text-lg">
              Les probabilités - Modélisation des situations aléatoires
            </p>
            <p className="text-slate-500 text-sm mt-2">
              Apprenez à calculer les probabilités dans des situations simples.
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
              Les <strong>probabilités</strong> aident à modéliser les situations aléatoires simples. On étudie des expériences comme lancer un dé ou tirer une carte, souvent avec des <strong>chances égales</strong>.
            </p>
          </CardContent>
        </Card>

        {/* Section 1 - Bases */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              <span className="font-semibold">Bases</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-slate-800 mb-4 flex items-center gap-2">
                  <Dices className="h-5 w-5 text-blue-600" />
                  Univers
                </h4>
                <p className="text-slate-700 mb-4">
                  L'<strong>univers</strong> est la liste de tous les résultats possibles.
                </p>
                <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                  <p className="text-slate-700 mb-2"><strong>Exemple :</strong></p>
                  <p className="text-slate-700">Pour un dé : 1, 2, 3, 4, 5, 6</p>
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-slate-800 mb-4">Événement</h4>
                <p className="text-slate-700 mb-4">
                  Un <strong>événement</strong> est une partie de l'univers.
                </p>
                <div className="bg-white p-4 rounded border-l-4 border-green-500">
                  <p className="text-slate-700 mb-2"><strong>Exemple :</strong></p>
                  <p className="text-slate-700">"Pair" = {'{'}2, 4, 6{'}'}</p>
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-slate-800 mb-4">Probabilité</h4>
                <p className="text-slate-700 mb-4">
                  La probabilité P(A) est entre 0 et 1. Pour chances égales :
                </p>
                <div className="bg-white p-4 rounded mb-4">
                  <div className="text-center">
                    <LatexRenderer latex={"P(A) = \\frac{\\text{nombre de cas favorables}}{\\text{nombre total de cas}}"} />
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded border-l-4 border-purple-500 mb-4">
                  <p className="text-slate-700 mb-2"><strong>Exemple :</strong></p>
                  <div className="text-center">
                    <LatexRenderer latex={"P(\\text{pair}) = \\frac{3}{6} = \\frac{1}{2}"} />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded text-center">
                    <LatexRenderer latex={"P(\\text{univers}) = 1"} />
                  </div>
                  <div className="bg-white p-4 rounded text-center">
                    <LatexRenderer latex={"P(\\emptyset) = 0"} />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2 - Opérations simples */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-green-500 to-emerald-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              <span className="font-semibold">Opérations simples</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-slate-800 mb-4">Union (Ou)</h4>
                <p className="text-slate-700 mb-4">
                  Si A et B <strong>n'ont pas d'éléments en commun</strong> :
                </p>
                <div className="bg-white p-4 rounded mb-4 text-center">
                  <LatexRenderer latex={"P(A \\text{ ou } B) = P(A) + P(B)"} />
                </div>
                <p className="text-slate-700 mb-4">
                  Si A et B <strong>ont des éléments en commun</strong>, soustraire P(commun) :
                </p>
                <div className="bg-white p-4 rounded text-center">
                  <LatexRenderer latex={"P(A \\cup B) = P(A) + P(B) - P(A \\cap B)"} />
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-slate-800 mb-4">Complément</h4>
                <p className="text-slate-700 mb-4">
                  La probabilité de l'événement contraire :
                </p>
                <div className="bg-white p-4 rounded text-center">
                  <LatexRenderer latex={"P(\\overline{A}) = 1 - P(A)"} />
                </div>
                <p className="text-slate-700 text-center text-sm mt-2">
                  (où <span className="inline-block align-middle"><LatexRenderer latex={"\\overline{A}"} /></span> signifie "pas A")
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3 - Conditionnelles simples */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-violet-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              <span className="font-semibold">Probabilités conditionnelles</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div className="space-y-6">
              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-slate-800 mb-4">Probabilité conditionnelle</h4>
                <div className="bg-white p-4 rounded mb-4 text-center">
                  <LatexRenderer latex={"P(A \\text{ sachant } B) = \\frac{P(A \\cap B)}{P(B)}"} />
                </div>
                <p className="text-slate-700 text-center text-sm">
                  (si P(B) ≠ 0)
                </p>
              </div>

              <div className="bg-yellow-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-slate-800 mb-4">Événements indépendants</h4>
                <p className="text-slate-700 mb-4">
                  Si A et B sont <strong>indépendants</strong> :
                </p>
                <div className="bg-white p-4 rounded text-center">
                  <LatexRenderer latex={"P(A \\cap B) = P(A) \\times P(B)"} />
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4 - Arbres */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                4
              </span>
              <span className="font-semibold">Arbres de probabilité</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div>
              <p className="text-slate-700 mb-6">
                Pour <strong>plusieurs étapes</strong>, dessiner un arbre avec les probabilités sur les branches, puis <strong>multiplier</strong> sur les chemins.
              </p>

              <div className="bg-blue-50 p-6 rounded-lg">
                <p className="text-slate-700 mb-4"><strong>Exemple :</strong> Lancer une pièce deux fois</p>
                <p className="text-slate-700 mb-4">Probabilité d'obtenir deux "pile" :</p>
                <div className="bg-white p-4 rounded text-center">
                  <LatexRenderer latex={"P(\\text{deux piles}) = \\frac{1}{2} \\times \\frac{1}{2} = \\frac{1}{4}"} />
                </div>
              </div>

              <div className="bg-green-50 p-6 rounded-lg mt-6">
                <h4 className="text-lg font-semibold text-slate-800 mb-4">Règle générale</h4>
                <ul className="list-disc list-inside text-slate-700 space-y-2">
                  <li>Chaque branche porte une probabilité</li>
                  <li>Pour un chemin : multiplier toutes les probabilités du chemin</li>
                  <li>Pour plusieurs chemins : additionner leurs probabilités</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5 - Variables simples */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-red-500 to-pink-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                5
              </span>
              <span className="font-semibold">Variables aléatoires simples</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div className="space-y-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-slate-800 mb-4">Variable aléatoire</h4>
                <p className="text-slate-700 mb-4">
                  X donne un <strong>nombre</strong> à chaque résultat de l'expérience.
                </p>
              </div>

              <div className="bg-green-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-slate-800 mb-4">Espérance</h4>
                <p className="text-slate-700 mb-4">
                  L'<strong>espérance</strong> E(X) est la moyenne pondérée :
                </p>
                <div className="bg-white p-4 rounded mb-4 text-center">
                  <LatexRenderer latex={"E(X) = \\sum \\text{valeurs} \\times \\text{leurs probabilités}"} />
                </div>
              </div>

              <div className="bg-purple-50 p-6 rounded-lg">
                <h4 className="text-lg font-semibold text-slate-800 mb-4">Loi binomiale</h4>
                <p className="text-slate-700 mb-4">
                  Pour n épreuves indépendantes avec probabilité p de succès :
                </p>
                <div className="bg-white p-4 rounded text-center">
                  <LatexRenderer latex={"E(X) = np"} />
                </div>
                <p className="text-slate-700 text-center text-sm mt-2">
                  (espérance du nombre de succès)
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation vers les exercices */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-emerald-50 via-white to-teal-50">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-slate-600 mb-4 font-medium">
                Maintenant que vous maîtrisez les probabilités de base, passez aux exercices !
              </p>
              <Link to="/formation/math/terminale-vers-prepa/probabilites-exercices">
                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-emerald-500 to-teal-500 text-white px-6 py-3 rounded-lg hover:from-emerald-600 hover:to-teal-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  <Dices className="h-5 w-5" />
                  <span className="font-semibold">Faire les exercices</span>
                  <ArrowRight className="h-4 w-4" />
                </div>
              </Link>
            </div>
          </CardContent>
        </Card>

        {/* Conclusion */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 via-white to-cyan-50">
          <CardContent className="pt-6">
            <div className="text-center">
              <p className="text-slate-600 italic font-medium">
                Fin du chapitre 6 — Maîtrisez ces concepts fondamentaux des probabilités !
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Chapitre6ProbabilitesCoursPage;