import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, BookOpen, Binary, Calculator, Zap, BarChart3, Target } from 'lucide-react';

const OteriaLogiqueFondamentaleCoursPage = () => {
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
            <span className="text-teal-600 font-medium">Séance 1 - Cours</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <Binary className="h-8 w-8 text-teal-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-teal-900">Séance 1 : Logique fondamentale & booléens en Python</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Éléments de logique, méthodes de raisonnement et applications en programmation
          </p>

          {/* Informations de séance */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Numéro de séance</span>
                  <span className="text-2xl font-bold text-blue-900">1</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Durée estimée</span>
                  <span className="text-2xl font-bold text-blue-900">3h</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Niveau</span>
                  <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    🟢 Débutant
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Ressources pédagogiques */}
          <div className="max-w-4xl mx-auto mb-6">
            <div className="bg-white border border-blue-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-900 mb-4 text-center">
                Tables de vérité, connecteurs (¬ ∧ ∨ ⇒), Quantificateurs ∀ / ∃ & rôle en preuve, Traduction : not, and, or ; booléens True/False
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link to="/formation/oteria/logique-fondamentale-cours" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <BookOpen className="h-5 w-5 mx-auto mb-2" />
                    Cours
                  </button>
                </Link>
                <Link to="/formation/oteria/logique-fondamentale-exercices" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <Target className="h-5 w-5 mx-auto mb-2" />
                    Exercices
                  </button>
                </Link>
                <Link to="/formation/oteria/logique-fondamentale-flashcards" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <Calculator className="h-5 w-5 mx-auto mb-2" />
                    Flashcards
                  </button>
                </Link>
                <Link to="/formation/oteria/logique-fondamentale-qcm" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <Zap className="h-5 w-5 mx-auto mb-2" />
                    QCM
                  </button>
                </Link>
              </div>
            </div>
          </div>

        </div>

        {/* Contenu du cours */}
        <div className="max-w-4xl mx-auto">

          {/* Section A: Éléments de logique */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              A. Éléments de logique
            </h2>

            {/* A.1 Propositions et opérations logiques */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-teal-800">A.1. Propositions et opérations logiques</h3>

              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-bold text-blue-900 mb-2">Définition 1.1 — Proposition</h4>
                <p className="text-blue-800">
                  Une <strong>proposition</strong> est une affirmation concernant des objets mathématiques dont on peut décider sans ambiguïté si elle est vraie ou fausse.
                </p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h5 className="font-semibold text-blue-900 mb-2">Exemples :</h5>
                <ul className="list-disc list-inside space-y-1 text-blue-700">
                  <li>« 2+2=4 » est une proposition vraie.</li>
                  <li>« 5 est pair » est une proposition fausse.</li>
                  <li>« x+1=3 » n'est pas une proposition tant qu'on ne connaît pas la valeur de x.</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-bold text-blue-900 mb-2">Définition 1.2 — Négation</h4>
                <p className="text-blue-800 mb-3">
                  Pour une proposition P, on note ¬P la <strong>négation</strong> de P, c'est-à-dire la proposition qui est vraie quand P est fausse, et fausse quand P est vraie.
                </p>
                <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                  <strong>Exemple :</strong> Si P = « 7 est premier », alors ¬P = « 7 n'est pas premier ».
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-bold text-blue-900 mb-3">Opérations logiques</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm font-mono">P ∧ Q</span>
                    <span className="text-blue-800">: P <strong>et</strong> Q sont vraies.</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm font-mono">P ∨ Q</span>
                    <span className="text-blue-800">: au moins l'une des deux est vraie.</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-3">Exemple pratique</h4>
                <p className="text-blue-800 mb-3">Soit P = « n est pair », Q = « n est multiple de 3 ».</p>
                <ul className="space-y-2 text-blue-800">
                  <li><strong>P ∧ Q :</strong> « n est pair et multiple de 3 » (exemple n=6).</li>
                  <li><strong>P ∨ Q :</strong> « n est pair ou multiple de 3 » (exemple n=4, n=9).</li>
                </ul>
              </div>
            </div>

            {/* A.2 Implication et équivalence */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-teal-800">A.2. Implication et équivalence</h3>

              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-bold text-blue-900 mb-3">Définition 1.3 — Implication et équivalence</h4>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm font-mono">P ⇒ Q</span>
                    <span className="text-blue-800">: « si P est vraie alors Q l'est ».</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <span className="bg-blue-200 text-blue-800 px-2 py-1 rounded text-sm font-mono">P ⇔ Q</span>
                    <span className="text-blue-800">: équivalence, c'est-à-dire P ⇒ Q et Q ⇒ P.</span>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-3">Exemple</h4>
                <p className="text-blue-800 mb-3">P = « n est multiple de 4 », Q = « n est pair ».</p>
                <p className="text-blue-800">Alors P ⇒ Q est vrai, mais Q ⇒ P est faux (exemple : n=6).</p>
              </div>
            </div>

            {/* A.3 Quantificateurs */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-teal-800">A.3. Quantificateurs</h3>

              <div className="bg-blue-100 p-4 rounded-lg mb-4">
                <div className="text-center text-2xl mb-3">
                  <span className="font-mono">∀x</span> : pour tout x
                  <span className="mx-4">∃x</span> : il existe un x
                  <span className="ml-4">∃!x</span> : il existe un unique x
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-3">Exemples</h4>
                <ul className="space-y-2 text-blue-800">
                  <li><strong>∀n ∈ ℕ, n² ≥ 0</strong> (toujours vrai).</li>
                  <li><strong>∃x ∈ ℝ, x² = 2</strong> (exemple x=√2).</li>
                  <li><strong>∃!x ∈ ℝ, x² = 0</strong> (solution unique x=0).</li>
                </ul>
              </div>
            </div>

            {/* A.4 Tables de vérité */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-teal-800">A.4. Tables de vérité</h3>

              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <p className="text-blue-800 mb-4">
                  Une table de vérité donne les valeurs de propositions composées en fonction des valeurs de P et Q.
                </p>

                <div className="overflow-x-auto">
                  <table className="min-w-full bg-white border border-blue-300 rounded-lg">
                    <thead>
                      <tr className="bg-blue-100">
                        <th className="border border-blue-300 px-4 py-2">P</th>
                        <th className="border border-blue-300 px-4 py-2">Q</th>
                        <th className="border border-blue-300 px-4 py-2">¬P</th>
                        <th className="border border-blue-300 px-4 py-2">P ∧ Q</th>
                        <th className="border border-blue-300 px-4 py-2">P ∨ Q</th>
                        <th className="border border-blue-300 px-4 py-2">P ⇒ Q</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-blue-300 px-4 py-2 text-center bg-green-100">V</td>
                        <td className="border border-blue-300 px-4 py-2 text-center bg-green-100">V</td>
                        <td className="border border-blue-300 px-4 py-2 text-center bg-red-100">F</td>
                        <td className="border border-blue-300 px-4 py-2 text-center bg-green-100">V</td>
                        <td className="border border-blue-300 px-4 py-2 text-center bg-green-100">V</td>
                        <td className="border border-blue-300 px-4 py-2 text-center bg-green-100">V</td>
                      </tr>
                      <tr>
                        <td className="border border-blue-300 px-4 py-2 text-center bg-green-100">V</td>
                        <td className="border border-blue-300 px-4 py-2 text-center bg-red-100">F</td>
                        <td className="border border-blue-300 px-4 py-2 text-center bg-red-100">F</td>
                        <td className="border border-blue-300 px-4 py-2 text-center bg-red-100">F</td>
                        <td className="border border-blue-300 px-4 py-2 text-center bg-green-100">V</td>
                        <td className="border border-blue-300 px-4 py-2 text-center bg-red-100">F</td>
                      </tr>
                      <tr>
                        <td className="border border-blue-300 px-4 py-2 text-center bg-red-100">F</td>
                        <td className="border border-blue-300 px-4 py-2 text-center bg-green-100">V</td>
                        <td className="border border-blue-300 px-4 py-2 text-center bg-green-100">V</td>
                        <td className="border border-blue-300 px-4 py-2 text-center bg-red-100">F</td>
                        <td className="border border-blue-300 px-4 py-2 text-center bg-green-100">V</td>
                        <td className="border border-blue-300 px-4 py-2 text-center bg-green-100">V</td>
                      </tr>
                      <tr>
                        <td className="border border-blue-300 px-4 py-2 text-center bg-red-100">F</td>
                        <td className="border border-blue-300 px-4 py-2 text-center bg-red-100">F</td>
                        <td className="border border-blue-300 px-4 py-2 text-center bg-green-100">V</td>
                        <td className="border border-blue-300 px-4 py-2 text-center bg-red-100">F</td>
                        <td className="border border-blue-300 px-4 py-2 text-center bg-red-100">F</td>
                        <td className="border border-blue-300 px-4 py-2 text-center bg-green-100">V</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Section B: Méthodes de raisonnement */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              B. Méthodes de raisonnement
            </h2>

            {/* B.1 Disjonction de cas */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">B.1. Disjonction de cas</h3>

              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-bold text-blue-900 mb-2">Principe</h4>
                <p className="text-blue-800">On divise le problème en plusieurs cas couvrant toutes les possibilités.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-3">Exemple</h4>
                <p className="text-blue-800 mb-3">Montrer que n² est pair si et seulement si n est pair.</p>
                <ul className="space-y-1 text-blue-800">
                  <li><strong>Cas 1 :</strong> n est pair ⇒ n² pair.</li>
                  <li><strong>Cas 2 :</strong> n est impair ⇒ n² impair.</li>
                </ul>
              </div>
            </div>

            {/* B.2 Contraposée */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">B.2. Contraposée</h3>

              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-bold text-blue-900 mb-2">Définition</h4>
                <p className="text-blue-800">La contraposée de P ⇒ Q est ¬Q ⇒ ¬P.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-3">Exemple</h4>
                <p className="text-blue-800 mb-2"><strong>Proposition :</strong> « si n² est pair, alors n est pair ».</p>
                <p className="text-blue-800"><strong>Contraposée :</strong> « si n est impair, alors n² est impair ».</p>
              </div>
            </div>

            {/* B.3 Raisonnement par l'absurde */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">B.3. Raisonnement par l'absurde</h3>

              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-bold text-blue-900 mb-2">Idée</h4>
                <p className="text-blue-800">Supposer le contraire de ce que l'on veut prouver, et arriver à une contradiction.</p>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-bold text-blue-900 mb-3">Exemple détaillé : Irrationalité de √2</h4>
                <p className="text-blue-800 mb-3">On veut montrer que √2 n'est pas rationnel.</p>
                <ol className="space-y-2 text-blue-800 list-decimal list-inside">
                  <li><em>Supposons par l'absurde</em> que √2 = p/q avec p, q ∈ ℤ, q ≠ 0, et la fraction irréductible.</li>
                  <li>Alors 2 = p²/q² ⇒ p² = 2q².</li>
                  <li>Donc p² est pair ⇒ p est pair. Écrivons p = 2k.</li>
                  <li>Substituons : p² = 4k² = 2q² ⇒ q² = 2k².</li>
                  <li>Donc q² est pair ⇒ q est pair.</li>
                  <li>On conclut que p et q sont tous deux pairs, ce qui contredit l'hypothèse d'irréductibilité.</li>
                </ol>
                <div className="mt-3 p-3 bg-white rounded border-l-4 border-blue-500">
                  <strong>Conclusion :</strong> L'hypothèse est impossible, donc √2 est irrationnel.
                </div>
              </div>
            </div>

            {/* B.4 Récurrence */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">B.4. Récurrence</h3>

              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                <h4 className="font-bold text-blue-900 mb-3">Exemple</h4>
                <p className="text-blue-800 mb-3">∀n ∈ ℕ, 1+2+⋯+n = n(n+1)/2.</p>
                <div className="bg-white p-3 rounded border-l-4 border-blue-500 mb-3">
                  <strong>Initialisation :</strong> n=1, 1 = 1×2/2.
                </div>
                <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                  <strong>Hérédité :</strong> Supposons la formule vraie pour n. Alors 1+2+⋯+n+(n+1) = n(n+1)/2 + (n+1) = (n+1)(n+2)/2.
                </div>
              </div>
            </div>

            {/* B.5 Analyse-Synthèse */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">B.5. Analyse–Synthèse</h3>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-3">Exemple</h4>
                <p className="text-blue-800 mb-3">Résoudre x² = 4.</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                    <strong>Analyse :</strong> Si x²=4, alors x=±2.
                  </div>
                  <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                    <strong>Synthèse :</strong> 2²=4 et (-2)²=4. Donc solutions x=2 ou x=-2.
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Applications en Python */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">
              C. Applications en Python
            </h2>

            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h3 className="text-lg font-semibold mb-3 text-blue-900">Booléens en Python</h3>
              <div className="bg-white p-4 rounded border font-mono text-sm">
                <div className="text-blue-600"># Valeurs booléennes</div>
                <div>True  # Vrai</div>
                <div>False # Faux</div>
                <br/>
                <div className="text-blue-600"># Opérateurs logiques</div>
                <div>not x    # Négation</div>
                <div>x and y  # Et logique</div>
                <div>x or y   # Ou logique</div>
              </div>
            </div>

            <div className="bg-blue-50 p-4 rounded-lg">
              <h3 className="text-lg font-semibold mb-3 text-blue-900">Exemples pratiques</h3>
              <div className="space-y-3">
                <div className="bg-white p-3 rounded">
                  <strong>Test de parité :</strong>
                  <div className="font-mono text-sm mt-1">n % 2 == 0  # True si n pair</div>
                </div>
                  <div className="bg-white p-3 rounded">
                    <strong>Condition composée :</strong>
                    <div className="font-mono text-sm mt-1">x &gt; 0 and x &lt; 10  # x entre 0 et 10</div>
                  </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center bg-blue-50 p-6 rounded-lg">
            <div className="text-blue-600">Séance précédente</div>
            <div className="flex gap-3">
              <Link to="/formation/oteria/logique-fondamentale-exercices">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                  Exercices
                </button>
              </Link>
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

export default OteriaLogiqueFondamentaleCoursPage;
