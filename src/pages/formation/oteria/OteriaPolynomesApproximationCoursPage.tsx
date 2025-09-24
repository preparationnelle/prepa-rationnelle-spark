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
          
          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              Introduction
            </h2>
            <div className="bg-blue-50 p-4 rounded-lg">
              <p className="text-blue-800 leading-relaxed">
                Les polynômes sont des outils fondamentaux en algèbre, utilisés pour représenter des fonctions polynomiales et analyser leurs propriétés. Ce chapitre couvre les définitions, les opérations, la dérivation, les racines, la factorisation, et les relations entre racines et coefficients.
              </p>
            </div>
          </div>

          {/* Définition : Polynôme */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-4 text-blue-700 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              Définition : Polynôme
            </h2>
            <div className="space-y-4">
              <p>Un polynôme réel est une expression de la forme :</p>
              <div className="my-2 text-center bg-blue-50 p-4 rounded"><LatexRenderer latex={"P(x) = a_0 + a_1 x + \\dots + a_n x^n \\quad (n \\in \\mathbb{N})"} /></div>
              <p>où <LatexRenderer latex={"a_i \\in \\mathbb{R}"} />.</p>
              <p>S'il est non nul, son <em>degré</em> est le plus grand indice <LatexRenderer latex={"n"} /> tel que <LatexRenderer latex={"a_n \\neq 0"} />; <LatexRenderer latex={"a_n"} /> est alors le <em>coefficient dominant</em>.</p>
              <p>Lorsque <LatexRenderer latex={"a_n = 1"} />, on dit que <LatexRenderer latex={"P"} /> est <em>unitaire</em>.</p>
              <p>Par convention, <LatexRenderer latex={"\\deg 0 = -\\infty"} />.</p>
              <p>On note <LatexRenderer latex={"\\mathbb{R}[X]"} /> l'ensemble de tous les polynômes réels, et <LatexRenderer latex={"\\mathbb{R}_n[X]"} /> ceux de degré <LatexRenderer latex={"\\leq n"} />.</p>
            </div>
          </div>

          {/* Définition : Égalité de deux polynômes */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-4 text-blue-700 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              Définition : Égalité de deux polynômes
            </h2>
            <p>Deux polynômes non nuls sont identiques s'ils ont le même degré et des coefficients correspondants égaux.</p>
          </div>

          {/* Opération : Somme et produit */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-4 text-blue-700 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              Opération : Somme et produit
            </h2>
            <div className="space-y-4">
              <p>Pour <LatexRenderer latex={"P, Q \\in \\mathbb{R}[X]"} /> :</p>
              <div className="text-center bg-blue-50 p-4 rounded">
                <LatexRenderer latex={"\\deg(P + Q) \\leq \\max(\\deg P, \\deg Q), \\qquad \\deg(PQ) = \\deg P + \\deg Q"} />
              </div>
            </div>
          </div>

          {/* Théorème : Division euclidienne */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-4 text-orange-700 bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
              Théorème : Division euclidienne
            </h2>
            <div className="space-y-4">
              <p>Pour <LatexRenderer latex={"A, B \\in \\mathbb{R}[X]"} /> avec <LatexRenderer latex={"B \\neq 0"} />, il existe un unique couple <LatexRenderer latex={"(Q, R)"} /> tel que :</p>
              <div className="text-center bg-orange-50 p-4 rounded">
                <LatexRenderer latex={"A = B Q + R, \\qquad \\deg R < \\deg B"} />
              </div>
            </div>
          </div>

          {/* Définition : Polynôme dérivé */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-4 text-blue-700 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              Définition : Polynôme dérivé
            </h2>
            <div className="space-y-4">
              <p>Si <LatexRenderer latex={"P(x) = \\sum\\limits_{i=0}^n a_i x^i"} />, alors :</p>
              <div className="text-center bg-blue-50 p-4 rounded">
                <LatexRenderer latex={"P'(x) = \\sum\\limits_{i=1}^n i a_i x^{i-1}"} />
              </div>
              <p>et <LatexRenderer latex={"P'"} /> est nul lorsque <LatexRenderer latex={"P"} /> est constant.</p>
            </div>
          </div>

          {/* Théorème : Dérivées successives */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-4 text-orange-700 bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
              Théorème : Dérivées successives
            </h2>
            <div className="space-y-4">
              <p>Définies par <LatexRenderer latex={"P^{(0)} = P"} /> et <LatexRenderer latex={"P^{(k)} = (P^{(k-1)})'"} />.</p>
              <p>Si <LatexRenderer latex={"P(x) = \\sum\\limits_{i=0}^n a_i x^i"} />, alors pour <LatexRenderer latex={"k \\leq n"} /> :</p>
              <div className="text-center bg-orange-50 p-4 rounded">
                <LatexRenderer latex={"P^{(k)}(x) = \\sum\\limits_{i=k}^n \\frac{i!}{(i-k)!} a_i x^{i-k}, \\qquad \\deg P^{(k)} = n - k"} />
              </div>
              <p>et <LatexRenderer latex={"P^{(k)} \\equiv 0"} /> pour <LatexRenderer latex={"k \\geq n + 1"} />.</p>
            </div>
          </div>

          {/* Théorème : Formule de Taylor */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-4 text-orange-700 bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
              Théorème : Formule de Taylor
            </h2>
            <div className="space-y-4">
              <p>Pour <LatexRenderer latex={"a \\in \\mathbb{R}"} /> et tout <LatexRenderer latex={"P \\in \\mathbb{R}[X]"} /> de degré <LatexRenderer latex={"n"} /> :</p>
              <div className="text-center bg-orange-50 p-4 rounded border-2 border-orange-300">
                <LatexRenderer latex={"\\boxed{P(x) = \\sum\\limits_{k=0}^n \\frac{P^{(k)}(a)}{k!} (x - a)^k}"} />
              </div>
            </div>
          </div>

          {/* Définition : Racines */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-4 text-blue-700 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              Définition : Racines
            </h2>
            <div className="space-y-4">
              <p>Un réel <LatexRenderer latex={"r"} /> est une racine de <LatexRenderer latex={"P"} /> si <LatexRenderer latex={"P(r) = 0"} />, équivalemment si <LatexRenderer latex={"x - r"} /> divise <LatexRenderer latex={"P"} />.</p>
              <p>Un polynôme non nul de degré <LatexRenderer latex={"n"} /> possède au plus <LatexRenderer latex={"n"} /> racines réelles.</p>
              <p>S'il en a <LatexRenderer latex={"n"} /> distinctes <LatexRenderer latex={"r_1, \\dots, r_n"} />, alors <LatexRenderer latex={"\\prod\\limits_{i=1}^n (x - r_i)"} /> divise <LatexRenderer latex={"P"} />.</p>
            </div>
          </div>

          {/* Définition : Racine multiple */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-4 text-blue-700 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              Définition : Racine multiple
            </h2>
            <p>On dit que <LatexRenderer latex={"r"} /> est une racine d'ordre <LatexRenderer latex={"m \\geq 1"} /> de <LatexRenderer latex={"P"} /> si <LatexRenderer latex={"(x - r)^m"} /> divise <LatexRenderer latex={"P"} /> tandis que <LatexRenderer latex={"(x - r)^{m+1}"} /> ne le divise pas.</p>
          </div>

          {/* Théorème : Factorisation */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-4 text-orange-700 bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
              Théorème : Factorisation
            </h2>
            <p>Tout polynôme réel se factorise en produit de polynômes de degré 1 et de polynômes quadratiques sans racine réelle.</p>
          </div>

          {/* Définition : Trinôme et discriminant */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-4 text-blue-700 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              Définition : Trinôme et discriminant
            </h2>
            <div className="space-y-4">
              <p>Pour <LatexRenderer latex={"P(x) = a x^2 + b x + c"} /> (<LatexRenderer latex={"a \\neq 0"} />), on pose <LatexRenderer latex={"\\Delta = b^2 - 4ac"} />.</p>
              <ul className="list-disc list-inside space-y-2 ml-4">
                <li><LatexRenderer latex={"\\Delta < 0"} /> : aucune racine réelle.</li>
                <li><LatexRenderer latex={"\\Delta = 0"} /> : racine double <LatexRenderer latex={"x_0 = -\\frac{b}{2a}"} /> et <LatexRenderer latex={"P(x) = a (x - x_0)^2"} />.</li>
                <li><LatexRenderer latex={"\\Delta > 0"} /> : racines <LatexRenderer latex={"x_1 = \\frac{-b - \\sqrt{\\Delta}}{2a}"} /> et <LatexRenderer latex={"x_2 = \\frac{-b + \\sqrt{\\Delta}}{2a}"} />, <LatexRenderer latex={"P(x) = a (x - x_1)(x - x_2)"} />.</li>
              </ul>
            </div>
          </div>

          {/* Théorème : Signe du trinôme */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-4 text-orange-700 bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
              Théorème : Signe du trinôme
            </h2>
            <ul className="list-disc list-inside space-y-2 ml-4">
              <li>Si <LatexRenderer latex={"\\Delta \\leq 0"} />, le signe de <LatexRenderer latex={"P"} /> est celui de <LatexRenderer latex={"a"} /> pour tout <LatexRenderer latex={"x"} />.</li>
              <li>Si <LatexRenderer latex={"\\Delta > 0"} />, le signe est celui de <LatexRenderer latex={"a"} /> en dehors de <LatexRenderer latex={"[x_1, x_2]"} /> et celui de <LatexRenderer latex={"-a"} /> entre <LatexRenderer latex={"x_1"} /> et <LatexRenderer latex={"x_2"} />.</li>
            </ul>
          </div>

          {/* Théorème : Relations entre racines et coefficients */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-4 text-orange-700 bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
              Théorème : Relations entre racines et coefficients
            </h2>
            <div className="space-y-4">
              <p>Lorsque <LatexRenderer latex={"\\Delta \\geq 0"} /> et <LatexRenderer latex={"x_1, x_2"} /> sont les racines de <LatexRenderer latex={"a x^2 + b x + c"} /> :</p>
              <div className="text-center bg-orange-50 p-4 rounded border-2 border-orange-300">
                <LatexRenderer latex={"\\boxed{x_1 + x_2 = -\\frac{b}{a}, \\qquad x_1 x_2 = \\frac{c}{a}}"} />
              </div>
            </div>
          </div>

          {/* Formule du binôme de Newton */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-4 text-orange-700 bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
              Formule du binôme de Newton
            </h2>
            <div className="space-y-4">
              <p>Pour tous réels <LatexRenderer latex={"(a,b)"} /> et tout entier <LatexRenderer latex={"n \\geq 0"} /> :</p>
              <div className="text-center bg-orange-50 p-4 rounded">
                <LatexRenderer latex={"(a+b)^n = \\sum\\limits_{k=0}^n \\binom{n}{k} a^k b^{n-k} = \\sum\\limits_{k=0}^n \\binom{n}{k} a^{n-k} b^k"} />
              </div>
            </div>
          </div>

          {/* Nombre de parties d'un ensemble */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-4 text-blue-700 bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
              Nombre de parties d'un ensemble
            </h2>
            <div className="space-y-4">
              <p>En posant <LatexRenderer latex={"a = b = 1"} /> dans l'identité précédente, on obtient :</p>
              <div className="text-center bg-blue-50 p-4 rounded">
                <LatexRenderer latex={"\\sum\\limits_{k=0}^n \\binom{n}{k} = 2^n"} />
              </div>
            </div>
          </div>

          {/* Section : Algorithme de la dichotomie */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              Algorithme de la dichotomie
            </h2>

            {/* Principe */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Principe</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-blue-800 mb-3">
                  Soit <LatexRenderer latex="f" /> continue sur <LatexRenderer latex="[a, b]" /> avec <LatexRenderer latex="f(a) \\cdot f(b) < 0" />.
                </p>
                <div className="bg-white p-4 rounded border-2 border-blue-300 text-center">
                  <strong className="text-blue-900">
                    Alors <LatexRenderer latex="\\exists c \\in [a, b]" /> tel que <LatexRenderer latex="f(c) = 0" />
                  </strong>
                </div>
                <p className="text-blue-700 text-sm mt-2">
                  (Théorème des valeurs intermédiaires)
                </p>
              </div>
            </div>

            {/* Méthode */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Méthode</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="space-y-3">
                  <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                    <strong>1.</strong> On part d'un intervalle <LatexRenderer latex="[a, b]" /> avec <LatexRenderer latex="f(a) \\cdot f(b) < 0" />
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-blue-600">
                    <strong>2.</strong> On calcule <LatexRenderer latex="m = \\frac{a + b}{2}" />
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-blue-700">
                    <strong>3.</strong> Si <LatexRenderer latex="f(m) = 0" />, la racine est trouvée
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-blue-800">
                    <strong>4.</strong> Sinon, on remplace <LatexRenderer latex="[a, b]" /> par <LatexRenderer latex="[a, m]" /> ou <LatexRenderer latex="[m, b]" /> selon le signe
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                    <strong>5.</strong> On répète jusqu'à la précision voulue
                  </div>
                </div>
              </div>
            </div>

            {/* Exemple pratique */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Exemple pratique</h3>
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="text-center mb-4">
                  <p className="text-blue-800 mb-3">Trouver une racine de :</p>
                  <LatexRenderer latex="P(x) = x^3 - 2 \\quad \\text{dans } [1, 2]" className="text-lg text-blue-900 font-semibold" block={true} />
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
                      <div><LatexRenderer latex="m_1 = 1.5, \\quad P(1.5) = 1.375 > 0 \\quad \\Rightarrow [1, 1.5]" /></div>
                      <div><LatexRenderer latex="m_2 = 1.25, \\quad P(1.25) \\approx -0.047 < 0 \\quad \\Rightarrow [1.25, 1.5]" /></div>
                      <div><LatexRenderer latex="m_3 = 1.375, \\quad P(1.375) \\approx 0.599 > 0 \\quad \\Rightarrow [1.25, 1.375]" /></div>
                      <div>...</div>
                      <div className="font-semibold">Convergence vers <LatexRenderer latex="\\sqrt[3]{2} \\approx 1.2599" /></div>
                    </div>
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
