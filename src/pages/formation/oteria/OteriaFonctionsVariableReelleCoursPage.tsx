import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, BookOpen, Database, Calculator, Zap, Target } from 'lucide-react';

const OteriaFonctionsVariableReelleCoursPage = () => {
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
            <span className="text-teal-600 font-medium">Séance 5 - Cours</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <Database className="h-8 w-8 text-teal-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-teal-900">Séance 5 : Fonctions, croissance, polynômes (I)</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Parité, périodicité, continuité (aperçu), Théorème de croissance comparée
          </p>

          {/* Informations de séance */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Numéro de séance</span>
                  <span className="text-2xl font-bold text-blue-900">5</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Durée estimée</span>
                  <span className="text-2xl font-bold text-blue-900">3h</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Niveau</span>
                  <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    Débutant
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Ressources pédagogiques */}
          <div className="max-w-4xl mx-auto mb-6">
            <div className="bg-white border border-blue-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-900 mb-4 text-center">
                Parité, périodicité, continuité (aperçu), Théorème de croissance comparée
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

          {/* Section 1: Introduction */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              1. Introduction
            </h2>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800 leading-relaxed">
                Les fonctions d'une variable réelle jouent un rôle central en analyse mathématique. 
                Elles permettent d'étudier des phénomènes continus, de modéliser des variations et d'analyser des comportements limites.
              </p>
            </div>
          </div>

          {/* Section 2: Valeur absolue */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              2. Valeur absolue
            </h2>

            <div className="mb-6">
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-bold text-blue-900 mb-3">Définition</h4>
                <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                  <strong className="text-blue-900 text-lg">
                    |x| = x si x ≥ 0, |x| = -x si x &lt; 0
                  </strong>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-3">Propriétés</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                      <strong>Paire :</strong> |-x| = |x|
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-blue-600">
                      <strong>Multiplication :</strong> |xy| = |x||y|
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border-l-4 border-blue-700">
                      <strong>Inégalité triangulaire :</strong><br/>
                      ∀x,y ∈ ℝ, |x+y| ≤ |x| + |y|
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-blue-800">
                      <strong>Encadrement :</strong><br/>
                      |x| ≤ M ⟺ -M ≤ x ≤ M
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Généralités sur les fonctions */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              3. Généralités sur les fonctions
            </h2>

            {/* 3.1 Définition */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Définition</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800">
                  Une fonction f: ℝ → ℝ est définie sur un ensemble Df ⊆ ℝ et représentée par sa courbe (Cf).
                </p>
              </div>
            </div>

            {/* 3.2 Parité */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Parité</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                  <h5 className="font-semibold text-blue-900 mb-2">Fonction paire</h5>
                  <p className="text-blue-800 mb-2">f(-x) = f(x)</p>
                  <p className="text-blue-700 text-sm">Symétrie par rapport à l'axe des ordonnées</p>
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-blue-600">
                  <h5 className="font-semibold text-blue-900 mb-2">Fonction impaire</h5>
                  <p className="text-blue-800 mb-2">f(-x) = -f(x)</p>
                  <p className="text-blue-700 text-sm">Symétrie par rapport à l'origine</p>
                </div>
              </div>
            </div>

            {/* 3.3 Périodicité */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Périodicité</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                  <strong className="text-blue-900">f est T-périodique si ∀x, f(x+T) = f(x)</strong>
                </div>
              </div>
            </div>

            {/* 3.4 Bornes et extrémums */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Bornes et extrémums</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                    <strong>Majorée :</strong> ∃M : f(x) ≤ M
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-blue-600">
                    <strong>Minorée :</strong> ∃m : f(x) ≥ m
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border-l-4 border-blue-700">
                    <strong>Maximum global :</strong><br/>
                    f(x₀) ≥ f(x) pour tout x
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-blue-800">
                    <strong>Minimum global :</strong><br/>
                    f(x₀) ≤ f(x) pour tout x
                  </div>
                </div>
              </div>
            </div>

            {/* 3.5 Variations */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Variations</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                    <strong>Croissante :</strong><br/>
                    x ≤ y ⟹ f(x) ≤ f(y)
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-blue-600">
                    <strong>Strictement croissante :</strong><br/>
                    x &lt; y ⟹ f(x) &lt; f(y)
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border-l-4 border-blue-700">
                    <strong>Décroissante :</strong><br/>
                    x ≤ y ⟹ f(x) ≥ f(y)
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-blue-800">
                    <strong>Monotone :</strong><br/>
                    croissante ou décroissante
                  </div>
                </div>
              </div>
            </div>

            {/* 3.6 Composition et bijection */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Composition et bijection</h3>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                  Si f croît et g croît, alors g ∘ f croît
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-blue-600">
                  Si f est strictement monotone, f⁻¹ existe, est continue et conserve le sens de variation
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Fonctions trigonométriques */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              4. Fonctions trigonométriques
            </h2>

            {/* 4.1 Définitions et propriétés */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Définitions et propriétés</h3>
              
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="bg-white p-4 rounded border-2 border-blue-300 text-center mb-4">
                    <strong className="text-blue-900 text-lg">
                      ∀x ∈ ℝ, cos²x + sin²x = 1
                    </strong>
                  </div>
                  <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                    <strong className="text-blue-900">
                      (sin x)' = cos x, (cos x)' = -sin x
                    </strong>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                      sin est impaire, cos est paire
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-blue-600">
                      sin et cos sont 2π-périodiques
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="bg-white p-3 rounded border-l-4 border-blue-700">
                      sin : [-π/2, π/2] → [-1,1] bijective
                    </div>
                    <div className="bg-white p-3 rounded border-l-4 border-blue-800">
                      cos : [0,π] → [-1,1] bijective
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* 4.2 Formules d'addition */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Formules d'addition</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                    <strong className="text-blue-900">
                      cos(a+b) = cos a cos b - sin a sin b
                    </strong>
                  </div>
                  <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                    <strong className="text-blue-900">
                      sin(a+b) = sin a cos b + cos a sin b
                    </strong>
                  </div>
                </div>
              </div>
            </div>

            {/* 4.3 Formules de duplication */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Formules de duplication</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                    <strong className="text-blue-900">
                      cos(2a) = 2cos²a - 1 = 1 - 2sin²a
                    </strong>
                  </div>
                  <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                    <strong className="text-blue-900">
                      sin(2a) = 2sin a cos a
                    </strong>
                  </div>
                </div>
              </div>
            </div>

            {/* 4.4 Valeurs remarquables */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Valeurs remarquables</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-blue-300 rounded-lg">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="border border-blue-300 px-4 py-2">x</th>
                        <th className="border border-blue-300 px-4 py-2">0</th>
                        <th className="border border-blue-300 px-4 py-2">π/6</th>
                        <th className="border border-blue-300 px-4 py-2">π/4</th>
                        <th className="border border-blue-300 px-4 py-2">π/3</th>
                        <th className="border border-blue-300 px-4 py-2">π/2</th>
                        <th className="border border-blue-300 px-4 py-2">π</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-blue-300 px-4 py-2 font-semibold bg-blue-50">sin x</td>
                        <td className="border border-blue-300 px-4 py-2 text-center">0</td>
                        <td className="border border-blue-300 px-4 py-2 text-center">1/2</td>
                        <td className="border border-blue-300 px-4 py-2 text-center">√2/2</td>
                        <td className="border border-blue-300 px-4 py-2 text-center">√3/2</td>
                        <td className="border border-blue-300 px-4 py-2 text-center">1</td>
                        <td className="border border-blue-300 px-4 py-2 text-center">0</td>
                      </tr>
                      <tr>
                        <td className="border border-blue-300 px-4 py-2 font-semibold bg-blue-50">cos x</td>
                        <td className="border border-blue-300 px-4 py-2 text-center">1</td>
                        <td className="border border-blue-300 px-4 py-2 text-center">√3/2</td>
                        <td className="border border-blue-300 px-4 py-2 text-center">√2/2</td>
                        <td className="border border-blue-300 px-4 py-2 text-center">1/2</td>
                        <td className="border border-blue-300 px-4 py-2 text-center">0</td>
                        <td className="border border-blue-300 px-4 py-2 text-center">-1</td>
                      </tr>
                      <tr>
                        <td className="border border-blue-300 px-4 py-2 font-semibold bg-blue-50">tan x</td>
                        <td className="border border-blue-300 px-4 py-2 text-center">0</td>
                        <td className="border border-blue-300 px-4 py-2 text-center">√3/3</td>
                        <td className="border border-blue-300 px-4 py-2 text-center">1</td>
                        <td className="border border-blue-300 px-4 py-2 text-center">√3</td>
                        <td className="border border-blue-300 px-4 py-2 text-center">-</td>
                        <td className="border border-blue-300 px-4 py-2 text-center">0</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>

            {/* 4.5 Tangente et arctangente */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Tangente et arctangente</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="space-y-3">
                  <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                    <strong className="text-blue-900">
                      tan x = sin x / cos x, D_tan = ℝ \ π/2 + kπ
                    </strong>
                  </div>
                  <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                    <strong className="text-blue-900">
                      1 + tan²x = 1/cos²x, (tan x)' = 1 + tan²x
                    </strong>
                  </div>
                  <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                    <strong className="text-blue-900">
                      arctan : ℝ → ]-π/2, π/2[, (arctan x)' = 1/(1+x²)
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Continuité */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              5. Continuité
            </h2>

            {/* 5.1 Définitions */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Définitions</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="space-y-4">
                  <div className="bg-white p-4 rounded border-2 border-blue-300">
                    <p className="text-blue-800 mb-2">
                      <strong>Continuité en x₀ :</strong>
                    </p>
                    <p className="text-center text-blue-900 font-semibold">
                      f est continue en x₀ si lim(x→x₀) f(x) = f(x₀)
                    </p>
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                    <strong>Continuité unilatérale :</strong> limite à gauche/droite correspond à f(x₀)
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-blue-600">
                    <strong>Continuité sur I :</strong> f est continue en tout point de I
                  </div>
                </div>
              </div>
            </div>

            {/* 5.2 Théorèmes */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Théorèmes</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                  <h5 className="font-semibold text-blue-900 mb-2">Théorème des valeurs intermédiaires</h5>
                  <p className="text-blue-800">
                    Si f continue sur [a,b], pour toute valeur λ entre f(a) et f(b), ∃c ∈ [a,b] : f(c) = λ
                  </p>
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-blue-600">
                  <h5 className="font-semibold text-blue-900 mb-2">Théorème de Weierstrass</h5>
                  <p className="text-blue-800">
                    Si f est continue sur [a,b], alors f est bornée et atteint ses bornes
                  </p>
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-blue-700">
                  <h5 className="font-semibold text-blue-900 mb-2">Bijection continue</h5>
                  <p className="text-blue-800">
                    Si f est continue et strictement monotone sur I, alors f est bijective de I sur f(I), et f⁻¹ est continue
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6: Limites */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              6. Limites
            </h2>

            {/* 6.1 Définition */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Définition</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                  <strong className="text-blue-900 text-lg">
                    lim(x→x₀) f(x) = ℓ ⟺ ∀ε&gt;0, ∃α&gt;0, 0&lt;|x-x₀|&lt;α ⟹ |f(x)-ℓ|&lt;ε
                  </strong>
                </div>
              </div>
            </div>

            {/* 6.2 Limites unilatérales */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Limites unilatérales</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border-l-4 border-blue-500 text-center">
                  <strong>Limite à gauche :</strong><br/>
                  lim(x→x₀⁻) f(x) = ℓ
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-blue-600 text-center">
                  <strong>Limite à droite :</strong><br/>
                  lim(x→x₀⁺) f(x) = ℓ
                </div>
              </div>
            </div>

            {/* 6.3 Limites infinies et à l'infini */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Limites infinies et à l'infini</h3>
              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                    <strong className="text-blue-900">
                      lim(x→x₀) f(x) = +∞ ⟺ ∀A&gt;0, ∃α&gt;0, 0&lt;|x-x₀|&lt;α ⟹ f(x) &gt; A
                    </strong>
                  </div>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                    <strong className="text-blue-900">
                      lim(x→+∞) f(x) = ℓ ⟺ ∀ε&gt;0, ∃B&gt;0, x&gt;B ⟹ |f(x)-ℓ|&lt;ε
                    </strong>
                  </div>
                </div>
              </div>
            </div>

            {/* 6.4 Limites usuelles */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Limites usuelles</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                    <strong className="text-blue-900">
                      lim(x→0) sin x / x = 1
                    </strong>
                  </div>
                  <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                    <strong className="text-blue-900">
                      lim(x→0) (eˣ-1) / x = 1
                    </strong>
                  </div>
                  <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                    <strong className="text-blue-900">
                      lim(x→0) ln(1+x) / x = 1
                    </strong>
                  </div>
                </div>
              </div>
            </div>

            {/* 6.5 Croissances comparées */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Croissances comparées</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                    <strong className="text-blue-900">
                      lim(x→+∞) ln x / x = 0
                    </strong>
                  </div>
                  <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                    <strong className="text-blue-900">
                      lim(x→+∞) xⁿ / eˣ = 0 (n ∈ ℕ*)
                    </strong>
                  </div>
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

export default OteriaFonctionsVariableReelleCoursPage;
