import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { LatexRenderer } from '@/components/LatexRenderer';
import { Home, ChevronRight, TrendingDown, BookOpen, ArrowRight } from 'lucide-react';

const Chapitre3SuitesCoursPage = () => {
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
        <Card className="border-0 shadow-lg bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50">
          <CardHeader className="pb-6">
            <CardTitle className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent mb-4">
              Chapitre 3 : Suites numériques
            </CardTitle>
            <p className="text-slate-600 text-lg">
              Étude complète des suites numériques : définitions, propriétés, convergence et récurrence
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
              Les <strong>suites numériques</strong> constituent un objet mathématique fondamental qui permet de modéliser des phénomènes discrets. 
              Une suite est une fonction définie sur <LatexRenderer latex="\mathbb{N}" /> (ou une partie de <LatexRenderer latex="\mathbb{N}" />) à valeurs dans <LatexRenderer latex="\mathbb{R}" />.
            </p>
            <p className="text-slate-700 leading-relaxed">
              L'étude des suites est essentielle en prépa ECG car elle intervient dans de nombreux domaines : 
              analyse, probabilités, optimisation et algorithmes.
            </p>
          </CardContent>
        </Card>

        {/* Section 1 - Définitions et notations */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-orange-500 to-red-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                1
              </span>
              <span className="font-semibold">Définitions et notations</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Définition d'une suite</h4>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-slate-700 mb-3">
                  Une suite numérique est une application de <LatexRenderer latex="\mathbb{N}" /> (ou d'une partie de <LatexRenderer latex="\mathbb{N}" />) dans <LatexRenderer latex="\mathbb{R}" />.
                </p>
                <p className="text-slate-700 mb-2">On note généralement :</p>
                <div className="text-center bg-white p-4 rounded border">
                  <LatexRenderer latex="u : \mathbb{N} \to \mathbb{R}, \quad n \mapsto u(n) = u_n" block={true} />
                </div>
                <p className="text-slate-700 mt-3">
                  La suite est notée <LatexRenderer latex="(u_n)_{n \in \mathbb{N}}" /> ou plus simplement <LatexRenderer latex="(u_n)" />.
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Modes de définition</h4>
              <div className="space-y-3">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-medium text-green-800 mb-2">1. Forme explicite</h5>
                  <p className="text-slate-700 mb-2">Le terme général est donné par une formule :</p>
                  <div className="text-center bg-white p-3 rounded border">
                    <LatexRenderer latex="u_n = f(n) \text{ où } f \text{ est une fonction}" block={true} />
                  </div>
                  <p className="text-slate-700 mt-2">Exemple : <LatexRenderer latex="u_n = \frac{1}{n+1}" /></p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-medium text-purple-800 mb-2">2. Définition par récurrence</h5>
                  <p className="text-slate-700 mb-2">On donne le premier terme et une relation de récurrence :</p>
                  <div className="text-center bg-white p-3 rounded border">
                    <LatexRenderer latex="\begin{cases} u_0 \text{ donné} \\ u_{n+1} = f(u_n) \end{cases}" block={true} />
                  </div>
                  <p className="text-slate-700 mt-2">Exemple : <LatexRenderer latex="u_0 = 1" /> et <LatexRenderer latex="u_{n+1} = 2u_n + 1" /></p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 2 - Suites particulières */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-green-500 to-teal-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                2
              </span>
              <span className="font-semibold">Suites particulières</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Suites arithmétiques</h4>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-slate-700 mb-3">
                  Une suite <LatexRenderer latex="(u_n)" /> est arithmétique s'il existe un réel <LatexRenderer latex="r" /> tel que :
                </p>
                <div className="text-center bg-white p-3 rounded border">
                  <LatexRenderer latex="u_{n+1} = u_n + r \quad \forall n \in \mathbb{N}" block={true} />
                </div>
                <p className="text-slate-700 mt-3">
                  <LatexRenderer latex="r" /> est appelé la <strong>raison</strong> de la suite arithmétique.
                </p>
                <div className="mt-4 p-3 bg-white rounded border">
                  <p className="font-medium mb-2">Terme général :</p>
                  <div className="text-center">
                    <LatexRenderer latex="u_n = u_0 + nr" block={true} />
                  </div>
                </div>
                <div className="mt-4 p-3 bg-white rounded border">
                  <p className="font-medium mb-2">Somme des n premiers termes :</p>
                  <div className="text-center">
                    <LatexRenderer latex="S_n = \sum_{k=0}^{n-1} u_k = \frac{n(u_0 + u_{n-1})}{2} = \frac{n(2u_0 + (n-1)r)}{2}" block={true} />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Suites géométriques</h4>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-slate-700 mb-3">
                  Une suite <LatexRenderer latex="(u_n)" /> est géométrique s'il existe un réel <LatexRenderer latex="q \neq 0" /> tel que :
                </p>
                <div className="text-center bg-white p-3 rounded border">
                  <LatexRenderer latex="u_{n+1} = q \cdot u_n \quad \forall n \in \mathbb{N}" block={true} />
                </div>
                <p className="text-slate-700 mt-3">
                  <LatexRenderer latex="q" /> est appelé la <strong>raison</strong> de la suite géométrique.
                </p>
                <div className="mt-4 p-3 bg-white rounded border">
                  <p className="font-medium mb-2">Terme général :</p>
                  <div className="text-center">
                    <LatexRenderer latex="u_n = u_0 \cdot q^n" block={true} />
                  </div>
                </div>
                <div className="mt-4 p-3 bg-white rounded border">
                  <p className="font-medium mb-2">Somme des n premiers termes :</p>
                  <div className="text-center">
                    <LatexRenderer latex="S_n = \sum_{k=0}^{n-1} u_k = \begin{cases} nu_0 & \text{si } q = 1 \\ u_0 \frac{1-q^n}{1-q} & \text{si } q \neq 1 \end{cases}" block={true} />
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 3 - Propriétés et comportement */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                3
              </span>
              <span className="font-semibold">Propriétés et comportement</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Monotonie d'une suite</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-medium text-blue-800 mb-2">Suite croissante</h5>
                  <div className="text-center bg-white p-3 rounded border">
                    <LatexRenderer latex="u_{n+1} \geq u_n \quad \forall n" />
                  </div>
                </div>
                
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-medium text-green-800 mb-2">Suite décroissante</h5>
                  <div className="text-center bg-white p-3 rounded border">
                    <LatexRenderer latex="u_{n+1} \leq u_n \quad \forall n" />
                  </div>
                </div>
              </div>
              
              <div className="mt-4 bg-yellow-50 p-4 rounded-lg">
                <h5 className="font-medium text-yellow-800 mb-2">Méthodes pour étudier la monotonie</h5>
                <ul className="text-slate-700 space-y-2">
                  <li>• Étudier le signe de <LatexRenderer latex="u_{n+1} - u_n" /></li>
                  <li>• Si <LatexRenderer latex="u_n > 0" />, étudier le signe de <LatexRenderer latex="\frac{u_{n+1}}{u_n} - 1" /></li>
                  <li>• Utiliser une fonction auxiliaire si <LatexRenderer latex="u_{n+1} = f(u_n)" /></li>
                </ul>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Suites bornées</h4>
              <div className="space-y-4">
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-medium text-purple-800 mb-2">Définitions</h5>
                  <p className="text-slate-700 mb-2">Une suite <LatexRenderer latex="(u_n)" /> est :</p>
                  <ul className="text-slate-700 space-y-1">
                    <li>• <strong>Majorée</strong> s'il existe <LatexRenderer latex="M \in \mathbb{R}" /> tel que <LatexRenderer latex="u_n \leq M" /> pour tout <LatexRenderer latex="n" /></li>
                    <li>• <strong>Minorée</strong> s'il existe <LatexRenderer latex="m \in \mathbb{R}" /> tel que <LatexRenderer latex="u_n \geq m" /> pour tout <LatexRenderer latex="n" /></li>
                    <li>• <strong>Bornée</strong> si elle est à la fois majorée et minorée</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 4 - Convergence */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-teal-500 to-cyan-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                4
              </span>
              <span className="font-semibold">Convergence des suites</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Définition de la convergence</h4>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-slate-700 mb-3">
                  Une suite <LatexRenderer latex="(u_n)" /> converge vers un réel <LatexRenderer latex="l" /> si :
                </p>
                <div className="text-center bg-white p-4 rounded border">
                  <LatexRenderer latex="\forall \varepsilon > 0, \exists N \in \mathbb{N}, \forall n \geq N : |u_n - l| < \varepsilon" block={true} />
                </div>
                <p className="text-slate-700 mt-3">
                  On note alors : <LatexRenderer latex="\lim_{n \to +\infty} u_n = l" /> ou <LatexRenderer latex="u_n \to l" />
                </p>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Théorèmes fondamentaux</h4>
              <div className="space-y-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-medium text-green-800 mb-2">Théorème de convergence monotone</h5>
                  <p className="text-slate-700 mb-2">
                    Toute suite croissante et majorée converge vers sa borne supérieure.
                  </p>
                  <p className="text-slate-700">
                    Toute suite décroissante et minorée converge vers sa borne inférieure.
                  </p>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-medium text-purple-800 mb-2">Théorème des gendarmes</h5>
                  <p className="text-slate-700 mb-2">
                    Si <LatexRenderer latex="a_n \leq u_n \leq b_n" /> pour tout <LatexRenderer latex="n" /> assez grand et si
                    <LatexRenderer latex="\lim a_n = \lim b_n = l" />, alors <LatexRenderer latex="\lim u_n = l" />.
                  </p>
                </div>
                
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-medium text-yellow-800 mb-2">Opérations sur les limites</h5>
                  <p className="text-slate-700 mb-2">
                    Si <LatexRenderer latex="\lim u_n = l" /> et <LatexRenderer latex="\lim v_n = l'" />, alors :
                  </p>
                  <ul className="text-slate-700 space-y-1">
                    <li>• <LatexRenderer latex="\lim (u_n + v_n) = l + l'" /></li>
                    <li>• <LatexRenderer latex="\lim (u_n \times v_n) = l \times l'" /></li>
                    <li>• <LatexRenderer latex="\lim \frac{u_n}{v_n} = \frac{l}{l'}" /> si <LatexRenderer latex="l' \neq 0" /></li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Section 5 - Suites récurrentes */}
        <Card className="border border-slate-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
          <CardHeader className="bg-gradient-to-r from-indigo-500 to-purple-500 text-white">
            <CardTitle className="text-xl flex items-center gap-3">
              <span className="bg-white/20 backdrop-blur-sm text-white w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold">
                5
              </span>
              <span className="font-semibold">Suites récurrentes</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-8 pt-6">
            <div>
              <h4 className="text-lg font-semibold text-slate-800 mb-4">Étude d'une suite récurrente</h4>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-slate-700 mb-3">
                  Soit <LatexRenderer latex="f" /> une fonction et la suite définie par :
                </p>
                <div className="text-center bg-white p-3 rounded border">
                  <LatexRenderer latex="\begin{cases} u_0 \text{ donné} \\ u_{n+1} = f(u_n) \end{cases}" block={true} />
                </div>
              </div>
              
              <div className="mt-4 space-y-3">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-medium text-green-800 mb-2">Méthode d'étude</h5>
                  <ol className="text-slate-700 space-y-1 list-decimal list-inside">
                    <li>Déterminer le domaine de définition</li>
                    <li>Étudier la fonction <LatexRenderer latex="f" /> (continuité, monotonie)</li>
                    <li>Rechercher les points fixes : <LatexRenderer latex="f(x) = x" /></li>
                    <li>Étudier la monotonie de <LatexRenderer latex="(u_n)" /></li>
                    <li>Déterminer les bornes éventuelles</li>
                    <li>Conclure sur la convergence</li>
                  </ol>
                </div>
                
                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-medium text-purple-800 mb-2">Points fixes et convergence</h5>
                  <p className="text-slate-700 mb-2">
                    Si la suite <LatexRenderer latex="(u_n)" /> converge vers <LatexRenderer latex="l" /> et si <LatexRenderer latex="f" /> est continue en <LatexRenderer latex="l" />, 
                    alors <LatexRenderer latex="l" /> est un point fixe de <LatexRenderer latex="f" /> : <LatexRenderer latex="f(l) = l" />.
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Résumé */}
        <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-blue-100 shadow-lg">
          <CardHeader>
            <CardTitle className="text-xl font-semibold text-blue-700 flex items-center gap-2">
              <TrendingDown className="h-5 w-5" />
              Points clés à retenir
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h4 className="font-medium text-blue-600">Définitions essentielles :</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Suite arithmétique et géométrique</li>
                  <li>✓ Monotonie et suites bornées</li>
                  <li>✓ Convergence et divergence</li>
                  <li>✓ Suites récurrentes</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h4 className="font-medium text-blue-600">Théorèmes clés :</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  <li>✓ Convergence monotone</li>
                  <li>✓ Théorème des gendarmes</li>
                  <li>✓ Opérations sur les limites</li>
                  <li>✓ Points fixes et récurrence</li>
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
            to="/formation/math/terminale-vers-prepa/suites-exercices"
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

export default Chapitre3SuitesCoursPage;
