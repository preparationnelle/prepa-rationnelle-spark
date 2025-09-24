import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, BookOpen, BarChart3, Calculator, Zap, Target } from 'lucide-react';

const OteriaSuitesNumeriquesCoursPage = () => {
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
            <span className="text-teal-600 font-medium">Séance 4 - Cours</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <BarChart3 className="h-8 w-8 text-teal-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-teal-900">Séance 4 : Suites numériques & modélisation</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Suites explicites vs récurrentes ; limite Un, Étude de convergence
          </p>

          {/* Informations de séance */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Numéro de séance</span>
                  <span className="text-2xl font-bold text-blue-900">4</span>
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
                Suites explicites vs récurrentes ; limite Un, Étude de convergence
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

          {/* Section 1: Définitions de base */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              1. Définitions de base
            </h2>

            {/* 1.1 Suites explicites et récurrentes */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-teal-800">Suites explicites et récurrentes</h3>

              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-bold text-blue-900 mb-2">Définition explicite</h4>
                <p className="text-blue-800 mb-3">
                  Une suite (uₙ) est donnée directement par une formule.
                </p>
                <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                  <strong>Exemple :</strong> uₙ = 1/n pour n ≥ 1
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-2">Définition par récurrence</h4>
                <p className="text-blue-800 mb-3">
                  Chaque terme dépend du précédent.
                </p>
                <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                  <strong>Exemple :</strong> u₀ donné et u(n+1) = (1/2)uₙ + 1
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Majorants et minorants */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              2. Majorants et minorants
            </h2>

            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <p className="text-blue-800 mb-4">Une suite réelle (uₙ) est :</p>
              
              <div className="space-y-3">
                <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                  <strong className="text-blue-900">Majorée</strong> s'il existe M ∈ ℝ tel que ∀n ∈ ℕ, uₙ ≤ M
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-blue-600">
                  <strong className="text-blue-900">Minorée</strong> s'il existe m ∈ ℝ tel que ∀n ∈ ℕ, uₙ ≥ m
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-blue-700">
                  <strong className="text-blue-900">Bornée</strong> s'il existe m,M ∈ ℝ tels que ∀n ∈ ℕ, m ≤ uₙ ≤ M
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Sens de variation */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              3. Sens de variation
            </h2>

            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <p className="text-blue-800 mb-4">Une suite (uₙ) est :</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                    <strong className="text-blue-900">Croissante</strong><br/>
                    si ∀n, u(n+1) ≥ uₙ
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-blue-600">
                    <strong className="text-blue-900">Décroissante</strong><br/>
                    si ∀n, u(n+1) ≤ uₙ
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-blue-700">
                    <strong className="text-blue-900">Strictement croissante</strong><br/>
                    si ∀n, u(n+1) &gt; uₙ
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-blue-800">
                    <strong className="text-blue-900">Strictement décroissante</strong><br/>
                    si ∀n, u(n+1) &lt; uₙ
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                    <strong className="text-blue-900">Monotone</strong><br/>
                    si elle est croissante ou décroissante
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-blue-600">
                    <strong className="text-blue-900">Constante</strong><br/>
                    si ∀n, u(n+1) = uₙ
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-blue-700">
                    <strong className="text-blue-900">Stationnaire</strong><br/>
                    à partir d'un certain rang n₀<br/>
                    si ∀n ≥ n₀, u(n+1) = uₙ
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Convergence et divergence */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              4. Convergence et divergence
            </h2>

            {/* 4.1 Définition */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Définition</h3>

              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="text-blue-800 mb-3">
                  (uₙ) converge vers ℓ ∈ ℝ si :
                </p>
                <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                  <strong className="text-blue-900 text-lg">
                    lim_n→+∞ uₙ = ℓ ⟺ ∀ε&gt;0, ∃n₀, ∀n ≥ n₀, |uₙ - ℓ| ≤ ε
                  </strong>
                </div>
                <p className="text-blue-800 mt-3">
                  Sinon, la suite est divergente.
                </p>
              </div>
            </div>

            {/* 4.2 Limites infinies */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Limites infinies</h3>

              <div className="space-y-4">
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                    <strong className="text-blue-900">
                      lim_n→+∞ uₙ = +∞ ⟺ ∀A&gt;0, ∃n₀, ∀n ≥ n₀, uₙ ≥ A
                    </strong>
                  </div>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                    <strong className="text-blue-900">
                      lim_n→+∞ uₙ = -∞ ⟺ ∀A&lt;0, ∃n₀, ∀n ≥ n₀, uₙ ≤ A
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 5: Opérations sur les limites */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              5. Opérations sur les limites
            </h2>

            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <p className="text-blue-800 mb-4">Si uₙ → ℓ et vₙ → ℓ' :</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                  <div className="space-y-2">
                    <div><strong>Addition :</strong> uₙ + vₙ → ℓ + ℓ'</div>
                    <div><strong>Multiplication :</strong> uₙ × vₙ → ℓ × ℓ'</div>
                    <div><strong>Multiplication scalaire :</strong> λuₙ → λℓ</div>
                  </div>
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-blue-600">
                  <div className="space-y-2">
                    <div><strong>Division :</strong> uₙ/vₙ → ℓ/ℓ' si ℓ' ≠ 0</div>
                    <div><strong>Inverse :</strong> 1/uₙ → 1/ℓ si ℓ ≠ 0</div>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 border border-blue-300 p-3 rounded mt-4">
                <strong className="text-blue-800">Attention :</strong> 
                <span className="text-blue-700"> Certaines formes comme 0×∞ ou ∞/∞ sont indéterminées.</span>
              </div>
            </div>
          </div>

          {/* Section 6: Théorème de la limite monotone */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              6. Théorème de la limite monotone
            </h2>

            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                    <strong className="text-blue-900">Suite croissante :</strong><br/>
                    • Si majorée → converge<br/>
                    • Si non majorée → +∞
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border-l-4 border-blue-600">
                    <strong className="text-blue-900">Suite décroissante :</strong><br/>
                    • Si minorée → converge<br/>
                    • Si non minorée → -∞
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 7: Comparaison et encadrement */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              7. Comparaison et encadrement
            </h2>

            {/* 7.1 Prolongement des inégalités */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Prolongement des inégalités</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800">
                  Si uₙ ≤ vₙ à partir d'un certain rang et uₙ → ℓ, vₙ → ℓ', alors ℓ ≤ ℓ'.
                </p>
              </div>
            </div>

            {/* 7.2 Théorème d'encadrement */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Théorème d'encadrement</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 mb-3">
                  Si vₙ ≤ uₙ ≤ wₙ et vₙ → ℓ, wₙ → ℓ, alors uₙ → ℓ.
                </p>
                <div className="bg-white p-3 rounded border-l-4 border-blue-600">
                  <strong>Théorème des gendarmes :</strong> la suite uₙ est "coincée" entre vₙ et wₙ
                </div>
              </div>
            </div>

            {/* 7.3 Théorème de comparaison */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Théorème de comparaison</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 mb-3">Si uₙ ≤ vₙ à partir d'un certain rang :</p>
                <div className="space-y-2">
                  <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                    Si vₙ → +∞, alors uₙ → +∞
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-blue-600">
                    Si uₙ → -∞, alors vₙ → -∞
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 8: Convergence et composition */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              8. Convergence et composition
            </h2>

            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800 mb-3">
                Si uₙ → a et f: ℝ → ℝ est continue en a, alors f(uₙ) → f(a).
              </p>
              <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                <strong>Exemple :</strong> Si uₙ → 2, alors sin(uₙ) → sin(2)
              </div>
            </div>
          </div>

          {/* Section 9: Suites particulières */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              9. Suites particulières
            </h2>

            {/* 9.1 Suites adjacentes */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Suites adjacentes</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 mb-3">
                  Si (uₙ) est croissante, (vₙ) décroissante, (vₙ - uₙ) → 0, alors :
                </p>
                <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                  <strong className="text-blue-900">uₙ → ℓ et vₙ → ℓ</strong>
                </div>
              </div>
            </div>

            {/* 9.2 Théorème du point fixe */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Théorème du point fixe</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 mb-3">
                  Si u(n+1) = f(uₙ) et que uₙ → ℓ, alors f(ℓ) = ℓ si f est continue.
                </p>
                <div className="bg-white p-3 rounded border-l-4 border-blue-600">
                  <strong>Point fixe :</strong> valeur ℓ telle que f(ℓ) = ℓ
                </div>
              </div>
            </div>

            {/* 9.3 Suites extraites */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Suites extraites</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 mb-3">
                  Si (u₂ₙ) → ℓ et (u₂ₙ₊₁) → ℓ, alors (uₙ) → ℓ.
                </p>
                <div className="bg-white p-3 rounded border-l-4 border-blue-600">
                  <strong>Sous-suites :</strong> termes d'indices pairs et impairs
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

export default OteriaSuitesNumeriquesCoursPage;
