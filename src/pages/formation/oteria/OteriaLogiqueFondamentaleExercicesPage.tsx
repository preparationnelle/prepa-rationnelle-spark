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
              🎯 Objectifs
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

          {/* Section 1: Propositions */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">
              1. Propositions (vrai/faux, reconnaissance)
            </h2>

            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">1.1 Dire si les phrases suivantes sont des propositions :</h3>
                <ol className="space-y-2 text-blue-800 ml-6">
                  <li className="list-decimal">2+3=5</li>
                  <li className="list-decimal">x+1=3</li>
                  <li className="list-decimal">5 est un nombre premier</li>
                  <li className="list-decimal">Paris est la capitale de l'Italie</li>
                </ol>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">1.2 Transformer en proposition une phrase ouverte :</h3>
                <ul className="space-y-2 text-blue-800 ml-6">
                  <li className="list-disc">x+2=7</li>
                  <li className="list-disc">n est divisible par 3</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Section 2: Négation */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">
              2. Négation
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

          {/* Section 3: Tables de vérité */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">
              3. Tables de vérité
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

          {/* Section 4: Quantificateurs */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">
              4. Quantificateurs
            </h2>
            <p className="text-blue-800 mb-4">Traduire, expliquer et dire si elles sont vraies ou fausses :</p>

            <div className="bg-blue-50 p-4 rounded-lg">
              <ol className="space-y-3 text-blue-800 ml-6">
                <li className="list-decimal">∀n ∈ ℕ, n² ≥ 0</li>
                <li className="list-decimal">∃n ∈ ℕ, n² = 2</li>
                <li className="list-decimal">∃!n ∈ ℕ, n² = 0</li>
                <li className="list-decimal">∀x ∈ ℝ, x² + 1 &gt; 0</li>
                <li className="list-decimal">∃x ∈ ℤ, x² = -1</li>
              </ol>
            </div>
          </div>

          {/* Section 5: Disjonction de cas */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">
              5. Disjonction de cas
            </h2>

            <div className="bg-blue-50 p-4 rounded-lg">
              <ol className="space-y-3 text-blue-800 ml-6">
                <li className="list-decimal">Montrer que n² est pair si et seulement si n est pair</li>
                <li className="list-decimal">Montrer que pour tout n ∈ ℤ, n est divisible par 2 ou par 2n+1 est impair</li>
                <li className="list-decimal">Pour tout n ∈ ℤ, montrer que n est pair ou impair (disjonction exhaustive)</li>
              </ol>
            </div>
          </div>

          {/* Section 6: Contraposée */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">
              6. Contraposée
            </h2>

            <div className="bg-blue-50 p-4 rounded-lg">
              <ol className="space-y-3 text-blue-800 ml-6">
                <li className="list-decimal">Démontrer : « Si n² est pair, alors n est pair » en utilisant la contraposée</li>
                <li className="list-decimal">Démontrer : « Si n est divisible par 6, alors n est divisible par 3 » en utilisant la contraposée</li>
              </ol>
            </div>
          </div>

          {/* Section 7: Raisonnement par l'absurde */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">
              7. Raisonnement par l'absurde
            </h2>

            <div className="bg-blue-50 p-4 rounded-lg">
              <ol className="space-y-3 text-blue-800 ml-6">
                <li className="list-decimal">Prouver que √2 est irrationnel (détailler toutes les étapes)</li>
                <li className="list-decimal">Montrer par l'absurde que tout nombre premier supérieur à 2 est impair</li>
                <li className="list-decimal">Prouver qu'il existe une infinité de nombres premiers (esquisse d'Euclide)</li>
              </ol>
            </div>
          </div>

          {/* Section 8: Récurrence simple */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">
              8. Récurrence simple
            </h2>

            <div className="bg-blue-50 p-4 rounded-lg">
              <ol className="space-y-3 text-blue-800 ml-6">
                <li className="list-decimal">Prouver : 1+2+⋯+n = n(n+1)/2</li>
                <li className="list-decimal">Prouver : 1²+2²+⋯+n² = n(n+1)(2n+1)/6</li>
                <li className="list-decimal">Montrer : 2ⁿ ≥ n+1 pour tout n ∈ ℕ</li>
              </ol>
            </div>
          </div>

          {/* Section 9: Récurrence forte */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">
              9. Récurrence forte
            </h2>

            <div className="bg-blue-50 p-4 rounded-lg">
              <ol className="space-y-3 text-blue-800 ml-6">
                <li className="list-decimal">Prouver que tout entier n ≥ 2 peut s'écrire comme un produit de nombres premiers</li>
                <li className="list-decimal">Montrer que pour tout n ≥ 2, il existe une suite de n entiers consécutifs contenant un nombre divisible par n</li>
              </ol>
            </div>
          </div>

          {/* Section 10: Analyse-Synthèse */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">
              10. Analyse-Synthèse
            </h2>

            <div className="bg-blue-50 p-4 rounded-lg">
              <ol className="space-y-3 text-blue-800 ml-6">
                <li className="list-decimal">Résoudre x²=9 en distinguant analyse et synthèse</li>
                <li className="list-decimal">Résoudre x²=2x+3 par analyse-synthèse</li>
                <li className="list-decimal">Résoudre x²+1=0 dans ℝ : que conclure ?</li>
              </ol>
            </div>
          </div>

          {/* Section 11: Logique et Python */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">
              11. Logique et Python
            </h2>

            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">11.1 Tester dans Python les expressions suivantes :</h3>
                <div className="bg-white p-4 rounded border font-mono text-sm text-blue-800">
                  <div>True and False</div>
                  <div>True or False</div>
                  <div>not True</div>
                  <div>not (True or False)</div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">11.2 Écrire un programme qui demande un entier n :</h3>
                <p className="text-blue-800 mb-3">Le programme doit afficher :</p>
                <ul className="space-y-2 text-blue-800 ml-6">
                  <li className="list-disc">« pair » si n est divisible par 2</li>
                  <li className="list-disc">« impair » sinon</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h3 className="font-semibold text-blue-900 mb-3">11.3 Compléter le code suivant :</h3>
                <p className="text-blue-800 mb-3">Pour afficher la table de vérité de p et q avec l'opérateur and :</p>
                <div className="bg-white p-4 rounded border font-mono text-sm text-blue-800">
                  <div>for p in [True, False]:</div>
                  <div className="ml-4">for q in [True, False]:</div>
                  <div className="ml-8">print(p, q, ??? )</div>
                </div>
              </div>
            </div>
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
