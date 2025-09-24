import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, BookOpen, Target, Calculator, Zap } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';

const OteriaIntegralesMonteCarloCoursPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-teal-600">
            <Link to="/" className="flex items-center gap-1 hover:text-teal-700 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <Link to="/articles" className="hover:text-teal-700 transition-colors">
              Niveau
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <Link to="/articles/oteria-cyber-school" className="hover:text-teal-700 transition-colors">
              OTERIA Cyber School
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <span className="text-teal-600 font-medium">Séance 10 - Cours</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <Zap className="h-8 w-8 text-teal-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-teal-900">Séance 10 : Intégrales & π par Monte-Carlo</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Primitives, intégrale définie, propriétés (Chasles, positivité, croissance), sommes de Riemann ; techniques d'intégration (par parties, changement de variable)
          </p>

          {/* Informations de séance */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Numéro de séance</span>
                  <span className="text-2xl font-bold text-blue-900">10</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Durée estimée</span>
                  <span className="text-2xl font-bold text-blue-900">3h</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Niveau</span>
                  <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Intermédiaire
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Ressources pédagogiques */}
          <div className="max-w-4xl mx-auto mb-6">
            <div className="bg-white border border-blue-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-900 mb-4 text-center">
                Primitives, intégrale définie, propriétés et techniques d'intégration
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <button className="w-full bg-orange-600 text-white px-4 py-3 rounded-lg cursor-default font-medium shadow-md">
                  <BookOpen className="h-5 w-5 mx-auto mb-2" />
                  Cours
                </button>
                <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium hover:scale-105 shadow-md hover:shadow-lg">
                  <Target className="h-5 w-5 mx-auto mb-2" />
                  Exercices
                </button>
                <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium hover:scale-105 shadow-md hover:shadow-lg">
                  <Calculator className="h-5 w-5 mx-auto mb-2" />
                  Flashcards
                </button>
                <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium hover:scale-105 shadow-md hover:shadow-lg">
                  <Zap className="h-5 w-5 mx-auto mb-2" />
                  QCM
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Contenu du cours */}
        <div className="max-w-4xl mx-auto">
          
          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              Introduction
            </h2>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800 leading-relaxed">
                L'intégration sur un segment est une extension naturelle de la notion de primitive, permettant de calculer des aires et de modéliser des variations cumulées. Ce chapitre explore les primitives, les intégrales définies, leurs propriétés, et les techniques associées.
              </p>
            </div>
          </div>

          {/* Définition : Primitive */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-4 text-blue-700 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              Définition : Primitive
            </h2>
            <div className="space-y-4">
              <p>Soit <LatexRenderer latex={"f"} /> continue sur un intervalle <LatexRenderer latex={"I"} />.</p>
              <p>On appelle <em>primitive</em> de <LatexRenderer latex={"f"} /> sur <LatexRenderer latex={"I"} /> toute fonction <LatexRenderer latex={"F"} /> telle que :</p>
              <div className="my-2 text-center bg-blue-50 p-4 rounded">
                <LatexRenderer latex={"\\forall x \\in I,\\ F'(x) = f(x)."} />
              </div>
            </div>
          </div>

          {/* Théorème : Relation entre intégrale et primitive */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-4 text-orange-700 bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
              Théorème : Relation entre intégrale et primitive
            </h2>
            <div className="space-y-4">
              <p>Si <LatexRenderer latex={"f"} /> est continue sur <LatexRenderer latex={"I"} /> et <LatexRenderer latex={"F"} /> l'une de ses primitives, alors, pour <LatexRenderer latex={"(a, b) \\in I^2"} /> :</p>
              <div className="my-2 text-center bg-orange-50 p-4 rounded">
                <LatexRenderer latex={"\\int_a^b f(x)\\,dx = F(b) - F(a)"} />
              </div>
            </div>
          </div>

          {/* Définition : Primitive à borne supérieure variable */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-4 text-blue-700 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              Définition : Primitive à borne supérieure variable
            </h2>
            <div className="space-y-4">
              <p>Fixons <LatexRenderer latex={"a \\in I"} /> et définissons :</p>
              <div className="my-2 text-center bg-blue-50 p-4 rounded">
                <LatexRenderer latex={"G(x) = \\int_a^x f(t)\\,dt \\quad (x \\in I)."} />
              </div>
              <p>La fonction <LatexRenderer latex={"G"} /> est <LatexRenderer latex={"\\mathcal{C}^1"} /> sur <LatexRenderer latex={"I"} />, vérifie <LatexRenderer latex={"G(a) = 0"} /> et <LatexRenderer latex={"G'(x) = f(x)"} /> ; c'est donc <em>la</em> primitive de <LatexRenderer latex={"f"} /> qui s'annule en <LatexRenderer latex={"a"} /> (intégrale à borne supérieure variable).</p>
            </div>
          </div>

          {/* Tableaux de primitives */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-4 text-blue-700 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              Tableaux de primitives
            </h2>
            <div className="space-y-6">
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-center border border-slate-300 bg-white rounded-lg">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="px-2 py-2">f(x)</th>
                      <th className="px-2 py-2">F(x)</th>
                      <th className="px-2 py-2">f(x)</th>
                      <th className="px-2 py-2">F(x)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b-2 border-slate-200">
                      <td className="py-3"><LatexRenderer latex={"a \\ (a \\in \\mathbb{R})"} /></td>
                      <td className="py-3"><LatexRenderer latex={"ax"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\frac{1}{x}"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\ln |x|"} /></td>
                    </tr>
                    <tr className="bg-[#f9fafb] border-b-2 border-slate-200">
                      <td className="py-3"><LatexRenderer latex={"x^{\\alpha} \\ (\\alpha \\neq -1)"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\frac{x^{\\alpha + 1}}{\\alpha + 1}"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\frac{1}{\\sqrt{x}}"} /></td>
                      <td className="py-3"><LatexRenderer latex={"2 \\sqrt{x}"} /></td>
                    </tr>
                    <tr className="bg-white border-b-2 border-slate-200">
                      <td className="py-3"><LatexRenderer latex={"\\cos x"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\sin x"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\sin x"} /></td>
                      <td className="py-3"><LatexRenderer latex={"-\\cos x"} /></td>
                    </tr>
                    <tr className="bg-[#f9fafb] border-b-2 border-slate-200">
                      <td className="py-3"><LatexRenderer latex={"e^x"} /></td>
                      <td className="py-3"><LatexRenderer latex={"e^x"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\frac{1}{1 + x^2}"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\arctan x"} /></td>
                    </tr>
                    <tr className="bg-white border-b-2 border-slate-200">
                      <td className="py-3"><LatexRenderer latex={"\\ln x"} /></td>
                      <td className="py-3"><LatexRenderer latex={"x \\ln x - x"} /></td>
                      <td className="py-3"><LatexRenderer latex={"a^x \\ (a > 0)"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\frac{a^x}{\\ln a}"} /></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div className="overflow-x-auto">
                <table className="min-w-full text-sm text-center border border-slate-300 bg-white rounded-lg">
                  <thead>
                    <tr className="bg-blue-100">
                      <th className="px-2 py-2">f</th>
                      <th className="px-2 py-2">F</th>
                      <th className="px-2 py-2">f</th>
                      <th className="px-2 py-2">F</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b-2 border-slate-200">
                      <td className="py-3"><LatexRenderer latex={"a u' + b v'"} /></td>
                      <td className="py-3"><LatexRenderer latex={"a u + b v"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\frac{u'}{u}"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\ln |u|"} /></td>
                    </tr>
                    <tr className="bg-[#f9fafb] border-b-2 border-slate-200">
                      <td className="py-3"><LatexRenderer latex={"u^{\\alpha} u' \\ (\\alpha \\neq -1)"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\frac{u^{\\alpha + 1}}{\\alpha + 1}"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\frac{u'}{\\sqrt{u}}"} /></td>
                      <td className="py-3"><LatexRenderer latex={"2 \\sqrt{u}"} /></td>
                    </tr>
                    <tr className="bg-white border-b-2 border-slate-200">
                      <td className="py-3"><LatexRenderer latex={"u' \\cos u"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\sin u"} /></td>
                      <td className="py-3"><LatexRenderer latex={"u' \\sin u"} /></td>
                      <td className="py-3"><LatexRenderer latex={"-\\cos u"} /></td>
                    </tr>
                    <tr className="bg-[#f9fafb] border-b-2 border-slate-200">
                      <td className="py-3"><LatexRenderer latex={"u' e^u"} /></td>
                      <td className="py-3"><LatexRenderer latex={"e^u"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\frac{u'}{1 + u^2}"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\arctan u"} /></td>
                    </tr>
                    <tr className="bg-white border-b-2 border-slate-200">
                      <td className="py-3"><LatexRenderer latex={"u^a \\ln u \\ (a > 0)"} /></td>
                      <td className="py-3"><LatexRenderer latex={"\\frac{u^a}{\\ln a}"} /></td>
                      <td className="py-3"></td>
                      <td className="py-3"></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* Propriétés de l'intégrale */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              Propriétés de l'intégrale
            </h2>

            {/* Linéarité */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-orange-700 bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                Théorème : Linéarité
              </h3>
              <div className="space-y-4">
                <p>Pour <LatexRenderer latex={"f, g"} /> continues sur <LatexRenderer latex={"[a, b]"} /> et <LatexRenderer latex={"(\\lambda, \\mu) \\in \\mathbb{R}^2"} /> :</p>
                <div className="text-center bg-orange-50 p-4 rounded">
                  <LatexRenderer latex={"\\int_a^b (\\lambda f(x) + \\mu g(x))\\,dx = \\lambda \\int_a^b f(x)\\,dx + \\mu \\int_a^b g(x)\\,dx"} />
                </div>
              </div>
            </div>

            {/* Relation de Chasles */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-orange-700 bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                Théorème : Relation de Chasles
              </h3>
              <div className="space-y-4">
                <p>Si <LatexRenderer latex={"f"} /> est continue sur un intervalle <LatexRenderer latex={"I"} /> et <LatexRenderer latex={"(a, b, c) \\in I^3"} /> :</p>
                <div className="text-center bg-orange-50 p-4 rounded">
                  <LatexRenderer latex={"\\int_a^b f(x)\\,dx = \\int_a^c f(x)\\,dx + \\int_c^b f(x)\\,dx"} />
                </div>
              </div>
            </div>

            {/* Positivité */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-orange-700 bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                Théorème : Positivité
              </h3>
              <div className="space-y-4">
                <p>Si <LatexRenderer latex={"f"} /> est continue, <em>positive</em> sur <LatexRenderer latex={"[a, b]"} /> avec <LatexRenderer latex={"a \\leq b"} />, alors :</p>
                <div className="text-center bg-orange-50 p-4 rounded">
                  <LatexRenderer latex={"\\int_a^b f(x)\\,dx \\geq 0"} />
                </div>
                <p>Si <LatexRenderer latex={"f"} /> est positive, non nulle, et <LatexRenderer latex={"a < b"} />, alors l'intégrale est <LatexRenderer latex={"> 0"} />.</p>
                <p>Si l'intégrale d'une fonction positive vaut <LatexRenderer latex={"0"} />, cette fonction est identiquement nulle sur <LatexRenderer latex={"[a, b]"} />.</p>
              </div>
            </div>

            {/* Croissance de l'intégrale */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-orange-700 bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                Théorème : Croissance de l'intégrale
              </h3>
              <div className="space-y-4">
                <p>Si <LatexRenderer latex={"f \\leq g"} /> sur <LatexRenderer latex={"[a, b]"} /> alors :</p>
                <div className="text-center bg-orange-50 p-4 rounded">
                  <LatexRenderer latex={"\\int_a^b f(x)\\,dx \\leq \\int_a^b g(x)\\,dx"} />
                </div>
              </div>
            </div>

            {/* Inégalité triangulaire */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-orange-700 bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                Théorème : Inégalité triangulaire
              </h3>
              <div className="text-center bg-orange-50 p-4 rounded border-2 border-orange-300">
                <LatexRenderer latex={"\\left|\\int_a^b f(t)\\,dt\\right| \\leq \\int_a^b |f(t)|\\,dt"} />
              </div>
            </div>
          </div>

          {/* Sommes de Riemann */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-4 text-blue-700 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              Définition : Sommes de Riemann
            </h2>
            <div className="space-y-4">
              <p>Pour <LatexRenderer latex={"f"} /> continue sur <LatexRenderer latex={"[a, b]"} /> et <LatexRenderer latex={"n \\in \\mathbb{N}^*"} />, posons :</p>
              <div className="text-center bg-blue-50 p-4 rounded">
                <LatexRenderer latex={"S_n = \\frac{b-a}{n} \\sum_{k=0}^{n-1} f\\left(a + k\\frac{b-a}{n}\\right)"} />
              </div>
              <div className="text-center bg-blue-50 p-4 rounded mt-3">
                <LatexRenderer latex={"T_n = \\frac{b-a}{n} \\sum_{k=1}^n f\\left(a + k\\frac{b-a}{n}\\right)"} />
              </div>
              <p>Alors :</p>
              <div className="text-center bg-blue-50 p-4 rounded border-2 border-blue-300">
                <LatexRenderer latex={"\\lim_{n \\to +\\infty} S_n = \\lim_{n \\to +\\infty} T_n = \\int_a^b f(t)\\,dt"} />
              </div>
            </div>
          </div>

          {/* Techniques d'intégration */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              Techniques d'intégration
            </h2>

            {/* Intégration par parties */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-orange-700 bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                Théorème : Intégration par parties
              </h3>
              <div className="space-y-4">
                <p>Pour <LatexRenderer latex={"u, v \\in \\mathcal{C}^1[a, b]"} /> :</p>
                <div className="text-center bg-orange-50 p-4 rounded border-2 border-orange-300">
                  <LatexRenderer latex={"\\int_a^b u'(x)v(x)\\,dx = \\left[u(x)v(x)\\right]_a^b - \\int_a^b u(x)v'(x)\\,dx"} />
                </div>
              </div>
            </div>

            {/* Changement de variable */}
            <div className="mb-8">
              <h3 className="text-xl font-bold mb-4 text-orange-700 bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                Théorème : Changement de variable
              </h3>
              <div className="space-y-4">
                <p>Soient <LatexRenderer latex={"f"} /> continue sur un intervalle <LatexRenderer latex={"I"} />, <LatexRenderer latex={"\\varphi"} /> une fonction de classe <LatexRenderer latex={"\\mathcal{C}^1"} /> sur <LatexRenderer latex={"[a, b]"} /> telle que <LatexRenderer latex={"\\varphi([a, b]) \\subset I"} />. Alors :</p>
                <div className="text-center bg-orange-50 p-4 rounded border-2 border-orange-300">
                  <LatexRenderer latex={"\\int_a^b f(\\varphi(x))\\varphi'(x)\\,dx = \\int_{\\varphi(a)}^{\\varphi(b)} f(u)\\,du"} />
                </div>
              </div>
            </div>
          </div>


          {/* Navigation */}
          <div className="flex justify-between items-center bg-blue-50 p-6 rounded-lg">
            <Link to="/articles/oteria-cyber-school">
              <div className="text-blue-600">← Séance précédente</div>
            </Link>
            <div className="flex gap-3">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                Exercices
              </button>
              <Link to="/articles/oteria-cyber-school">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Retour au programme
                </button>
              </Link>
            </div>
            <div className="text-blue-600 font-medium">Séance suivante →</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OteriaIntegralesMonteCarloCoursPage;
