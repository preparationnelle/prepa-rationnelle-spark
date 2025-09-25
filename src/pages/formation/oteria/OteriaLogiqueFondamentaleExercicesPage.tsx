import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, BookOpen, Binary, Calculator, Zap, BarChart3, Target } from 'lucide-react';

const OteriaLogiqueFondamentaleExercicesPage = () => {
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
            <span className="text-teal-600 font-medium">Séance 1 - Exercices</span>
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
          <h1 className="text-3xl font-bold mb-4 text-teal-900">Séance 1 : Exercices - Logique fondamentale & booléens en Python</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Exercices pratiques pour maîtriser les concepts de logique et de raisonnement
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

          <div className="flex gap-3 justify-center">
            <Link to="/formation/oteria/logique-fondamentale-cours">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <BookOpen className="h-4 w-4" />
                Cours
              </button>
            </Link>
            <Link to="/articles/oteria-cyber-school">
              <button className="inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Retour au programme
              </button>
            </Link>
          </div>
        </div>

        {/* Contenu des exercices */}
        <div className="max-w-4xl mx-auto">

          {/* Objectifs */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              Objectifs
            </h2>
            <ul className="space-y-3 text-blue-800">
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Identifier et manipuler les propositions logiques</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Maîtriser les connecteurs et construire des tables de vérité</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Utiliser correctement les quantificateurs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Savoir démontrer par contraposée, par l'absurde, et par récurrence</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-2 h-2 bg-blue-500 rounded-full mt-2 flex-shrink-0"></span>
                <span>Appliquer la démarche analyse-synthèse</span>
              </li>
            </ul>
          </div>

          {/* Exercice 1: Quantificateurs */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">
              Exercice 1. Écrire avec des quantificateurs les propositions suivantes
            </h2>

            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <ol className="space-y-3 text-blue-800 ml-6">
                  <li className="list-decimal">
                    <strong>f</strong> est la fonction nulle (où <strong>f</strong> est une fonction de ℝ dans ℝ).
                  </li>
                  <li className="list-decimal">
                    Le dénominateur <strong>D</strong> de <strong>f</strong> s'annule au moins une fois sur ℝ.
                  </li>
                  <li className="list-decimal">
                    <strong>f</strong> est l'identité de ℝ (c'est-à-dire la fonction qui, à chaque réel, associe lui-même).
                  </li>
                  <li className="list-decimal">
                    Le graphe de <strong>f</strong> coupe la droite d'équation y = x.
                  </li>
                  <li className="list-decimal">
                    <strong>f</strong> est croissante sur ℝ (où <strong>f</strong> est une fonction de ℝ dans ℝ).
                  </li>
                  <li className="list-decimal">
                    L'équation sin x = x a une et une seule solution dans ℝ.
                  </li>
                  <li className="list-decimal">
                    Pour tout point <strong>M</strong> du plan 𝒫, <strong>M</strong> est sur le cercle 𝒞 de centre Ω et de rayon R si et seulement si la distance de <strong>M</strong> à Ω vaut R.
                  </li>
                </ol>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-900 mb-3">Solution</h3>
                <ol className="space-y-2 text-green-800 ml-6">
                  <li className="list-decimal">∀x ∈ ℝ, f(x) = 0.</li>
                  <li className="list-decimal">∃x ∈ ℝ/ D(x) = 0.</li>
                  <li className="list-decimal">∀x ∈ ℝ, f(x) = x.</li>
                  <li className="list-decimal">∃x ∈ ℝ/ f(x) = x.</li>
                  <li className="list-decimal">∀(a,b) ∈ ℝ², (a ≤ b ⇒ f(a) ≤ f(b)).</li>
                  <li className="list-decimal">∃!x ∈ ℝ/ sin(x) = x.</li>
                  <li className="list-decimal">∀M ∈ 𝒫, (M ∈ 𝒞 ⇔ ΩM = R).</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Exercice 2: Quantificateurs avancés */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">
              Exercice 2. Écrire avec des quantificateurs les propositions suivantes
            </h2>

            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="space-y-4">
                  <div>
                    <strong className="text-blue-900">1) a)</strong> <span className="text-blue-800">Tout entier naturel est pair ou impair.</span>
                  </div>
                  <div className="ml-4">
                    <strong className="text-blue-900">b)</strong> <span className="text-blue-800">Tout entier naturel est pair ou tout entier naturel est impair.</span>
                  </div>
                  <div className="mt-4">
                    <strong className="text-blue-900">2) a)</strong> <span className="text-blue-800">f est strictement monotone sur ℝ (où f désigne une fonction de ℝ dans ℝ).</span>
                  </div>
                  <div className="ml-4">
                    <strong className="text-blue-900">b)</strong> <span className="text-blue-800">f n'est pas strictement monotone sur ℝ.</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-900 mb-3">Solution</h3>
                <div className="space-y-3 text-green-800">
                  <div>
                    <strong>1) a)</strong> ∀n ∈ ℕ, (n est pair ou n est impair).
                  </div>
                  <div className="ml-4">
                    <strong>b)</strong> (∀n ∈ ℕ, n est pair) ou (∀n ∈ ℕ, n est impair).
                  </div>
                  <div className="mt-4">
                    <strong>2) a)</strong> (∀(a,b) ∈ ℝ², (a &lt; b ⇒ f(a) &lt; f(b))) ou (∀(a,b) ∈ ℝ², (a &lt; b ⇒ f(a) &gt; f(b))).
                  </div>
                  <div className="ml-4">
                    <strong>b)</strong> (∃(a,b) ∈ ℝ²/ (a &lt; b et f(a) ≥ f(b))) et (∃(a,b) ∈ ℝ²/ (a &lt; b et f(a) ≤ f(b))).
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Exercice 3: Quantificateurs - Entiers naturels et fonctions */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">
              Exercice 3. Écrire avec des quantificateurs les propositions suivantes
            </h2>

            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <div className="space-y-4">
                  <div>
                    <strong className="text-blue-900">1) a)</strong> <span className="text-blue-800">Tout entier naturel est pair ou impair.</span>
                  </div>
                  <div className="ml-4">
                    <strong className="text-blue-900">b)</strong> <span className="text-blue-800">Tout entier naturel est pair ou tout entier naturel est impair.</span>
                  </div>
                  <div className="mt-4">
                    <strong className="text-blue-900">2) a)</strong> <span className="text-blue-800">f est strictement monotone sur ℝ (où f désigne une fonction de ℝ dans ℝ).</span>
                  </div>
                  <div className="ml-4">
                    <strong className="text-blue-900">b)</strong> <span className="text-blue-800">f n'est pas strictement monotone sur ℝ.</span>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                <h3 className="font-semibold text-green-900 mb-3">Solution</h3>
                <div className="space-y-3 text-green-800">
                  <div>
                    <strong>1) a)</strong> ∀n ∈ ℕ, (n est pair ou n est impair).
                  </div>
                  <div className="ml-4">
                    <strong>b)</strong> (∀n ∈ ℕ, n est pair) ou (∀n ∈ ℕ, n est impair).
                  </div>
                  <div className="mt-4">
                    <strong>2) a)</strong> (∀(a,b) ∈ ℝ², (a &lt; b ⇒ f(a) &lt; f(b))) ou (∀(a,b) ∈ ℝ², (a &lt; b ⇒ f(a) &gt; f(b))).
                  </div>
                  <div className="ml-4">
                    <strong>b)</strong> (∃(a,b) ∈ ℝ²/ (a &lt; b et f(a) ≥ f(b))) et (∃(a,b) ∈ ℝ²/ (a &lt; b et f(a) ≤ f(b))).
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section 4: Propositions */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">
              4. Propositions (vrai/faux, reconnaissance)
            </h2>

            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">4.1 Dire si les phrases suivantes sont des propositions :</h3>
                <ol className="space-y-2 text-blue-800 ml-6">
                  <li className="list-decimal">2+3=5</li>
                  <li className="list-decimal">x+1=3</li>
                  <li className="list-decimal">5 est un nombre premier</li>
                  <li className="list-decimal">Paris est la capitale de l'Italie</li>
                </ol>
              </div>
            </div>
          </div>

          {/* Section 5: Négation */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">
              5. Négation
            </h2>
            <p className="text-blue-800 mb-4">Donner la négation des propositions suivantes (attention aux quantificateurs et aux connecteurs) :</p>

            <div className="bg-blue-50 p-4 rounded-lg">
              <ol className="space-y-2 text-blue-800 ml-6">
                <li className="list-decimal">Tous les étudiants ont réussi l'examen</li>
                <li className="list-decimal">Il existe un entier pair supérieur à 2 qui est premier</li>
                <li className="list-decimal">n est pair et n est multiple de 3</li>
                <li className="list-decimal">n est impair ou n est supérieur à 10</li>
              </ol>
            </div>
          </div>

          {/* Section 6: Tables de vérité */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">
              6. Tables de vérité
            </h2>
            <p className="text-blue-800 mb-4">Compléter les tables de vérité suivantes :</p>

            <div className="bg-blue-50 p-4 rounded-lg">
              <ol className="space-y-3 text-blue-800 ml-6">
                <li className="list-decimal">P ∧ Q</li>
                <li className="list-decimal">P ∨ Q</li>
                <li className="list-decimal">P ⇒ Q</li>
                <li className="list-decimal">¬(P ∨ Q) et comparer avec (¬P) ∧ (¬Q)</li>
                <li className="list-decimal">(P ⇒ Q) ⇔ (¬Q ⇒ ¬P)</li>
              </ol>
            </div>
          </div>

          {/* Section 7: Quantificateurs */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">
              7. Quantificateurs
            </h2>
            <p className="text-blue-800 mb-4">Traduire, expliquer et dire si elles sont vraies ou fausses :</p>

            <div className="bg-blue-50 p-4 rounded-lg">
              <ol className="space-y-3 text-blue-800 ml-6">
                <li className="list-decimal">∀n ∈ ℕ, n² ≥ 0</li>
                <li className="list-decimal">∃n ∈ ℕ, n² = 2</li>
                <li className="list-decimal">∃n ∈ ℕ, n² = 0</li>
                <li className="list-decimal">∀x ∈ ℝ, x² + 1 &gt; 0</li>
                <li className="list-decimal">∃x ∈ ℤ, x² = -1</li>
              </ol>
            </div>
          </div>

          {/* Section 8: Contraposée */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">
              8. Contraposée
            </h2>

            <div className="bg-blue-50 p-4 rounded-lg">
              <ol className="space-y-3 text-blue-800 ml-6">
                <li className="list-decimal">Démontrer : « Si n² est pair, alors n est pair » en utilisant la contraposée</li>
                <li className="list-decimal">Démontrer : « Si n est divisible par 6, alors n est divisible par 3 » en utilisant la contraposée</li>
              </ol>
            </div>
          </div>

          {/* Section 9: Raisonnement par l'absurde */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">
              9. Raisonnement par l'absurde
            </h2>

            <div className="bg-blue-50 p-4 rounded-lg">
              <ol className="space-y-3 text-blue-800 ml-6">
                <li className="list-decimal">Prouver que √2 est irrationnel (détailler toutes les étapes)</li>
              </ol>
            </div>
          </div>

          {/* Section 10: Récurrence simple */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">
              10. Récurrence simple
            </h2>

            <div className="bg-blue-50 p-4 rounded-lg">
              <ol className="space-y-3 text-blue-800 ml-6">
                <li className="list-decimal">Prouver : 1+2+⋯+n = n(n+1)/2</li>
                <li className="list-decimal">Prouver : 1²+2²+⋯+n² = n(n+1)(2n+1)/6</li>
                <li className="list-decimal">Montrer : 2ⁿ ≥ n+1 pour tout n ∈ ℕ</li>
              </ol>
            </div>
          </div>

          {/* Section 11: Analyse-Synthèse */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">
              11. Analyse-Synthèse
            </h2>

            <div className="bg-blue-50 p-4 rounded-lg">
              <ol className="space-y-3 text-blue-800 ml-6">
                <li className="list-decimal">Résoudre x²=9 en distinguant analyse et synthèse</li>
                <li className="list-decimal">Résoudre x²=2x+3 par analyse-synthèse</li>
                <li className="list-decimal">Résoudre x²+1=0 dans ℝ : que conclure ?</li>
              </ol>
            </div>
          </div>

          {/* Section 12: Logique et Python */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">
              12. Logique et Python
            </h2>

            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">12.1 Tester dans Python les expressions suivantes :</h3>
                <div className="bg-white p-4 rounded border font-mono text-sm text-blue-800">
                  <div>True and False</div>
                  <div>True or False</div>
                  <div>not True</div>
                  <div>not (True or False)</div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">12.2 Écrire un programme qui demande un entier n :</h3>
                <p className="text-blue-800 mb-3">Le programme doit afficher :</p>
                <ul className="space-y-2 text-blue-800 ml-6">
                  <li className="list-disc">« pair » si n est divisible par 2</li>
                  <li className="list-disc">« impair » sinon</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">12.3 Compléter le code suivant :</h3>
                <p className="text-blue-800 mb-3">Pour afficher la table de vérité de p et q avec l'opérateur and :</p>
                <div className="bg-white p-4 rounded border font-mono text-sm text-blue-800">
                  <div>for p in [True, False]:</div>
                  <div className="ml-4">for q in [True, False]:</div>
                  <div className="ml-8">print(p, q, ??? )</div>
                </div>
              </div>
            </div>
          </div>

          {/* Section C: Applications en Python */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">
              C. Applications en Python
            </h2>

            <div className="space-y-6">
              <h3 className="text-lg font-semibold text-blue-900 mb-4">Booléens en Python</h3>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-3"># Valeurs booléennes</h4>
                <div className="bg-white p-4 rounded border font-mono text-sm text-blue-800">
                  <div>True # Vrai</div>
                  <div>False # Faux</div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-3"># Opérateurs logiques</h4>
                <div className="bg-white p-4 rounded border font-mono text-sm text-blue-800">
                  <div>not x # Négation</div>
                  <div>x and y # Et logique</div>
                  <div>x or y # Ou logique</div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-3">Exemples pratiques</h4>
                <div className="space-y-3">
                  <div>
                    <p className="font-semibold text-blue-900 mb-2">Test de parité :</p>
                    <div className="bg-white p-3 rounded border font-mono text-sm text-blue-800">
                      n % 2 == 0 # True si n pair
                    </div>
                  </div>
                  <div>
                    <p className="font-semibold text-blue-900 mb-2">Condition composée :</p>
                    <div className="bg-white p-3 rounded border font-mono text-sm text-blue-800">
                      x &gt; 0 and x &lt; 10 # x entre 0 et 10
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Erreurs classiques à ne pas commettre */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-red-200">
            <h2 className="text-2xl font-bold mb-6 text-red-900 border-b border-red-200 pb-3">
              Erreurs classiques à ne pas commettre
            </h2>
            <ul className="space-y-4 text-blue-800">
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-xl mt-1">⋄</span>
                <span>Croire que le contraire de x ≥ 0 est x ≤ 0. Le contraire de x ≥ 0 est x &lt; 0.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-xl mt-1">⋄</span>
                <span>Confondre ⇒ et ⇔. Une équivalence est constituée de deux implications.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-xl mt-1">⋄</span>
                <span>Refuser l'usage des quantificateurs ∀ et ∃. Par exemple, la phrase sin(x) ̸= x n'a pas de sens. Signifie-t-elle ∀x ∈ R, sin(x) ̸= x, auquel cas elle est fausse car sin(0) = 0, ou signifie-t-elle que la fonction sinus n'est pas la fonction x → x, auquel cas elle devrait être proprement écrite sous la forme ∃x ∈ R/ sin(x) ̸= x ou aussi sin ̸= Id ? De manière générale, tout résultat contenant une variable doit être précédé du quantificateur adéquat.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-xl mt-1">⋄</span>
                <span>Placer n'importe où des quantificateurs. Par exemple, la phrase f(x) ̸= 0, ∀x ∈ R n'est pas vraiment correcte car dans cette phrase, la première fois que l'on parle de x (f(x) ̸= 0), on ne sait pas ce que x représente et on doit attendre encore le ∀x ∈ R pour savoir qu'il s'agit d'un réel ou encore, la première fois que l'on parle de x, x n'est pas défini. La bonne phrase est ∀x ∈ R, f(x) ̸= 0 et se lit de manière naturelle : pour tout réel x, f(x) est différent de 0. Une phrase du genre « ∀ point M ∈ au plan, . . . » n'est pas correcte non plus, car elle mélange deux langages. On doit l'écrire ou bien « ∀M ∈ P », ou bien « pour tout point M du plan ».</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-xl mt-1">⋄</span>
                <span>Penser que les phrases ∀n ∈ N, ∃m ∈ N/ m &gt; n et ∃m ∈ N/ ∀n ∈ N, m &gt; n signifient la même chose et donc, ne prêter aucune attention à l'ordre des quantificateurs.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-xl mt-1">⋄</span>
                <span>Penser que les phrases ∀x ∈ R, (f(x) = 0 ou g(x) = 0) et ((∀x ∈ R, f(x) = 0) ou (∀x ∈ R, g(x) = 0) signifient la même chose. Encore une fois, on ne peut pas distribuer ∀ sur ou.</span>
              </li>
            </ul>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center bg-blue-50 p-6 rounded-lg">
            <div className="text-blue-600">Séance précédente</div>
            <div className="flex gap-3">
              <Link to="/formation/oteria/logique-fondamentale-cours">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                  <BookOpen className="h-4 w-4" />
                  Cours
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

export default OteriaLogiqueFondamentaleExercicesPage;
