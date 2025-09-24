import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, BookOpen, Target, Calculator, Zap } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';

const OteriaPolynomesApproximationCoursPage = () => {
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
            <span className="text-teal-600 font-medium">Séance 6 - Cours</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <Target className="h-8 w-8 text-teal-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-teal-900">Séance 6 : Polynômes & dichotomie (II)</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Degré, racines, division euclidienne, Algorithme de la dichotomie pour f(x)=0
          </p>

          {/* Informations de séance */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Numéro de séance</span>
                  <span className="text-2xl font-bold text-blue-900">6</span>
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
                Degré, racines, division euclidienne, Algorithme de la dichotomie pour f(x)=0
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
                Les polynômes sont des outils fondamentaux en algèbre et en analyse. 
                Ils permettent de représenter des fonctions, d'étudier leurs racines et de développer des méthodes d'approximation (ex. dichotomie, Newton).
              </p>
            </div>
          </div>

          {/* Section 2: Définition et opérations */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              2. Définition et opérations
            </h2>

            {/* 2.1 Définition */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Définition</h3>
              
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="text-blue-800 mb-3">Un polynôme réel est une fonction de la forme :</p>
                <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                  <LatexRenderer latex="P(x) = a_0 + a_1 x + \\cdots + a_n x^n, \\quad a_i \\in \\mathbb{R}, \\; n \\in \\mathbb{N}" className="text-lg text-blue-900 font-semibold" block={true} />
                </div>
              </div>

              <div className="grid md:grid-cols-3 gap-4">
                <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                  <strong>Degré :</strong> n si aₙ ≠ 0
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-blue-600">
                  <strong>Coefficient dominant :</strong> aₙ
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-blue-700">
                  <strong>Unitaire :</strong> si aₙ = 1
                </div>
              </div>
            </div>

            {/* 2.2 Égalité de polynômes */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Égalité de polynômes</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800">
                  Deux polynômes sont égaux s'ils ont le même degré et les mêmes coefficients.
                </p>
              </div>
            </div>

            {/* 2.3 Somme et produit */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Somme et produit</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                    <LatexRenderer latex="\\deg(P+Q) \\leq \\max(\\deg P, \\deg Q)" className="text-blue-900 font-semibold" block={true} />
                  </div>
                  <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                    <LatexRenderer latex="\\deg(PQ) = \\deg P + \\deg Q" className="text-blue-900 font-semibold" block={true} />
                  </div>
                </div>
              </div>
            </div>

            {/* 2.4 Division euclidienne */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Division euclidienne</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 mb-3">Pour A,B ∈ ℝ[X] avec B ≠ 0, il existe un unique couple (Q,R) tel que :</p>
                <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                  <LatexRenderer latex="A = BQ + R, \\qquad \\deg R < \\deg B" className="text-lg text-blue-900 font-semibold" block={true} />
                </div>
              </div>
            </div>
          </div>

          {/* Section 3: Dérivation et Taylor */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              3. Dérivation et Taylor
            </h2>

            {/* 3.1 Polynôme dérivé */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Polynôme dérivé</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                  <LatexRenderer latex="P(x) = \\sum_{i=0}^n a_i x^i \\quad \\Rightarrow \\quad P'(x) = \\sum_{i=1}^n i a_i x^{i-1}" className="text-lg text-blue-900 font-semibold" block={true} />
                </div>
              </div>
            </div>

            {/* 3.2 Formule de Taylor */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Formule de Taylor</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 mb-3">Pour a ∈ ℝ :</p>
                <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                  <LatexRenderer latex="P(x) = \\sum_{k=0}^n \\frac{P^{(k)}(a)}{k!} (x-a)^k" className="text-lg text-blue-900 font-semibold" block={true} />
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Racines et factorisation */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              4. Racines et factorisation
            </h2>

            {/* 4.1 Définition */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Définition</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800">
                  Un réel r est une racine de P si P(r) = 0, équivalemment si (x-r) divise P.
                </p>
              </div>
            </div>

            {/* 4.2 Racine multiple */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Racine multiple</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800">
                  r est racine d'ordre m si (x-r)ᵐ | P mais (x-r)ᵐ⁺¹ ∤ P.
                </p>
              </div>
            </div>

            {/* 4.3 Théorème fondamental */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Théorème fondamental</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                  <strong className="text-blue-900">
                    Un polynôme de degré n a au plus n racines réelles distinctes
                  </strong>
                </div>
              </div>
            </div>

            {/* 4.4 Factorisation */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Factorisation</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800">
                  Tout polynôme réel se factorise en produit de polynômes du 1er degré et de polynômes quadratiques sans racine réelle.
                </p>
              </div>
            </div>
          </div>

          {/* Section 5: Trinôme et discriminant */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              5. Trinôme et discriminant
            </h2>

            {/* 5.1 Discriminant */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Discriminant</h3>
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="text-blue-800 mb-3">Pour P(x) = ax² + bx + c, a ≠ 0, on pose Δ = b² - 4ac :</p>
                
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                    <strong>Δ &lt; 0 :</strong> aucune racine réelle
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-blue-600">
                    <strong>Δ = 0 :</strong> racine double x₀ = -b/(2a)
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-blue-700">
                    <strong>Δ &gt; 0 :</strong> deux racines réelles distinctes
                  </div>
                </div>

                <div className="bg-white p-4 rounded border-2 border-blue-300 text-center mt-4">
                  <LatexRenderer latex="x_{1,2} = \\frac{-b \\pm \\sqrt{\\Delta}}{2a}" className="text-lg text-blue-900 font-semibold" block={true} />
                </div>
              </div>
            </div>

            {/* 5.2 Signe du trinôme */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Signe du trinôme</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                  <strong>Si Δ ≤ 0 :</strong><br/>
                  Signe constant = signe de a
                </div>
                <div className="bg-white p-4 rounded border-l-4 border-blue-600">
                  <strong>Si Δ &gt; 0 :</strong><br/>
                  Signe de a en dehors de [x₁,x₂], signe de -a à l'intérieur
                </div>
              </div>
            </div>

            {/* 5.3 Relations racines-coefficients */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Relations racines-coefficients</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 mb-3">Si x₁, x₂ sont racines de ax² + bx + c :</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                    <strong className="text-blue-900">
                      x₁ + x₂ = -b/a
                    </strong>
                  </div>
                  <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                    <strong className="text-blue-900">
                      x₁ × x₂ = c/a
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 6: Binôme de Newton */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              6. Binôme de Newton
            </h2>

            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <div className="bg-white p-4 rounded border-2 border-blue-300 text-center mb-4">
                <LatexRenderer latex="(a+b)^n = \\sum_{k=0}^n \\binom{n}{k} a^k b^{n-k}" className="text-lg text-blue-900 font-semibold" block={true} />
              </div>
              
              <div className="bg-white p-4 rounded border-l-4 border-blue-500">
                <p className="text-blue-800">
                  <strong>Cas particulier a = b = 1 :</strong>
                </p>
                <div className="text-center mt-2">
                  <LatexRenderer latex="\\sum_{k=0}^n \\binom{n}{k} = 2^n" className="text-blue-900 font-semibold" block={true} />
                </div>
              </div>
            </div>
          </div>

          {/* Section 7: Algorithme de la dichotomie */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              7. Algorithme de la dichotomie
            </h2>

            {/* 7.1 Principe */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Principe</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 mb-3">
                  Soit f continue sur [a,b] avec f(a)f(b) &lt; 0.
                </p>
                <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                  <strong className="text-blue-900">
                    Alors ∃c ∈ [a,b] tel que f(c) = 0
                  </strong>
                </div>
                <p className="text-blue-700 text-sm mt-2">
                  (Théorème des valeurs intermédiaires)
                </p>
              </div>
            </div>

            {/* 7.2 Méthode */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Méthode</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                    <strong>1.</strong> On part d'un intervalle [a,b] avec f(a)f(b) &lt; 0
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-blue-600">
                    <strong>2.</strong> On calcule m = (a+b)/2
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-blue-700">
                    <strong>3.</strong> Si f(m) = 0, la racine est trouvée
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-blue-800">
                    <strong>4.</strong> Sinon, on remplace [a,b] par [a,m] ou [m,b] selon le signe
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                    <strong>5.</strong> On répète jusqu'à la précision voulue
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 8: Cas pratique */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              8. Cas pratique
            </h2>

            <div className="bg-blue-50 p-4 rounded-lg">
              <div className="text-center mb-4">
                <h4 className="font-bold text-blue-900 mb-3">Exemple pratique</h4>
                <p className="text-blue-800 mb-3">Trouver une racine de :</p>
                <LatexRenderer latex="P(x) = x^3 - 2 \\text{ dans } [1,2]" className="text-lg text-blue-900 font-semibold" block={true} />
              </div>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded border-2 border-blue-300">
                  <div className="grid md:grid-cols-2 gap-4 text-center">
                    <div>
                      <LatexRenderer latex="P(1) = -1 < 0" className="text-blue-900 font-semibold" />
                    </div>
                    <div>
                      <LatexRenderer latex="P(2) = 6 > 0" className="text-blue-900 font-semibold" />
                    </div>
                  </div>
                </div>
                
                <div className="bg-white p-3 rounded border-l-4 border-blue-600">
                  <strong>Conclusion :</strong> Il existe une racine dans [1,2]
                </div>
                
                <div className="bg-white p-3 rounded border-l-4 border-blue-700">
                  <p className="text-blue-800">
                    On applique la méthode en divisant l'intervalle jusqu'à obtenir une approximation de <LatexRenderer latex="\\sqrt[3]{2}" />.
                  </p>
                </div>

                <div className="bg-white p-4 rounded border-2 border-blue-300">
                  <h5 className="font-semibold text-blue-900 mb-2">Étapes de l'algorithme :</h5>
                  <div className="space-y-2 text-sm">
                    <div>m₁ = 1.5, P(1.5) = 1.375 &gt; 0 → [1, 1.5]</div>
                    <div>m₂ = 1.25, P(1.25) ≈ -0.047 &lt; 0 → [1.25, 1.5]</div>
                    <div>m₃ = 1.375, P(1.375) ≈ 0.599 &gt; 0 → [1.25, 1.375]</div>
                    <div>...</div>
                    <div className="font-semibold">Convergence vers <LatexRenderer latex="\\sqrt[3]{2} \\approx 1.2599" /></div>
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

export default OteriaPolynomesApproximationCoursPage;
