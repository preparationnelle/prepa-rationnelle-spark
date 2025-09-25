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

          {/* Introduction - Paradoxe du barbier */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-teal-900 border-b border-teal-200 pb-3">
              Introduction au cours de logique
            </h2>

            {/* Énoncé du paradoxe du barbier */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Le paradoxe du barbier</h3>
              
              <div className="bg-blue-50 p-6 rounded-lg mb-6 border border-blue-200">
                <div className="space-y-4">
                  <p className="text-blue-800 leading-relaxed">
                    <strong>Imagine un village.</strong>
                  </p>
                  <p className="text-blue-800 leading-relaxed">
                    Il y a un barbier qui a une règle très stricte :
                  </p>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-blue-900 font-semibold">
                      « Il rase tous les hommes qui ne se rasent pas eux-mêmes, et seulement ceux-là. »
                    </p>
                  </div>
                  <p className="text-blue-800 leading-relaxed">
                    On peut alors se poser une question toute simple :
                  </p>
                  <div className="text-center py-4">
                    <p className="text-xl font-bold text-blue-700">
                      👉 Que fait-il avec lui-même ?
                    </p>
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-6 mb-6">
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-300">
                  <h5 className="font-semibold text-blue-900 mb-2">S'il se rase lui-même :</h5>
                  <p className="text-blue-700 text-sm">
                    Alors il ne devrait pas se raser (puisqu'il ne rase que ceux qui ne se rasent pas).
                  </p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg border border-blue-300">
                  <h5 className="font-semibold text-blue-900 mb-2">S'il ne se rase pas lui-même :</h5>
                  <p className="text-blue-700 text-sm">
                    Alors il devrait se raser (puisqu'il rase tous ceux qui ne se rasent pas).
                  </p>
                </div>
              </div>

              <div className="bg-blue-100 p-4 rounded-lg border border-blue-400 text-center mb-6">
                <h5 className="font-bold text-blue-900 mb-2">⚠️ Résultat : contradiction.</h5>
                <p className="text-blue-800 font-medium">
                  Il est impossible qu'un tel barbier existe.
                </p>
              </div>
            </div>

            {/* Pourquoi commencer par cette histoire */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Pourquoi commencer par cette histoire ?</h3>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <div className="space-y-4">
                  <p className="text-blue-800 leading-relaxed">
                    Ce paradoxe a été inventé par le philosophe et mathématicien <strong>Bertrand Russell</strong> pour illustrer les dangers de certaines définitions.
                  </p>
                  <p className="text-blue-800 leading-relaxed">
                    Derrière le barbier se cache un problème beaucoup plus sérieux en mathématiques : le <strong>paradoxe de Russell</strong> dans la théorie des ensembles.
                  </p>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-blue-500">
                    <p className="text-blue-900 font-medium">
                      <strong>Message clé pour la logique :</strong> toute règle doit être formulée clairement, sans ambiguïté et sans auto-contradiction.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Conclusion de l'introduction */}
            <div className="mb-6">
              <h3 className="text-xl font-semibold mb-4 text-blue-900">Conclusion de l'introduction</h3>
              
              <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                <div className="space-y-4">
                  <p className="text-blue-800 leading-relaxed">
                    Le paradoxe du barbier n'est pas un problème à résoudre, <strong>c'est une alerte.</strong>
                  </p>
                  <p className="text-blue-800 leading-relaxed">
                    La logique, c'est l'art de construire des raisonnements qui évitent ce type de piège.
                  </p>
                  <div className="bg-white p-4 rounded-lg border-l-4 border-blue-600">
                    <p className="text-blue-900 font-medium">
                      Dans ce cours, nous allons apprendre à utiliser la logique comme un outil rigoureux pour raisonner, prouver et comprendre les mathématiques… <strong>sans tomber dans les paradoxes.</strong>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

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

            {/* A.2 Implication logique (détaillée) */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-teal-800">A.2. L'implication logique P → Q</h3>

              {/* 1. La lecture « si… alors… » */}
              <div className="mb-6">
                <h4 className="font-bold text-blue-900 mb-3">1. La lecture « si… alors… »</h4>
              <div className="bg-blue-50 p-4 rounded-lg mb-4">
                  <p className="text-blue-800 mb-3">P → Q se lit :</p>
                  <div className="text-center py-2">
                    <p className="text-xl font-bold text-blue-700">
                      👉 « Si P est vrai, alors Q est vrai. »
                    </p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-blue-200">
                  <h5 className="font-semibold text-blue-900 mb-2">Exemple :</h5>
                  <ul className="space-y-1 text-blue-800">
                    <li>P = « Il pleut »</li>
                    <li>Q = « Le sol est mouillé »</li>
                    <li><strong>P → Q :</strong> « S'il pleut, alors le sol est mouillé. »</li>
                  </ul>
                </div>
              </div>

              {/* 2. La table de vérité (clé) */}
              <div className="mb-6">
                <h4 className="font-bold text-blue-900 mb-3">2. La table de vérité (clé)</h4>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="overflow-x-auto">
                    <table className="min-w-full bg-white border border-blue-300 rounded-lg">
                      <thead>
                        <tr className="bg-blue-100">
                          <th className="border border-blue-300 px-4 py-2 font-bold text-blue-900">P</th>
                          <th className="border border-blue-300 px-4 py-2 font-bold text-blue-900">Q</th>
                          <th className="border border-blue-300 px-4 py-2 font-bold text-blue-900">P → Q</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-blue-300 px-4 py-2 text-center">V</td>
                          <td className="border border-blue-300 px-4 py-2 text-center">V</td>
                          <td className="border border-blue-300 px-4 py-2 text-center font-bold text-blue-700">V</td>
                        </tr>
                        <tr>
                          <td className="border border-blue-300 px-4 py-2 text-center">V</td>
                          <td className="border border-blue-300 px-4 py-2 text-center">F</td>
                          <td className="border border-blue-300 px-4 py-2 text-center font-bold text-blue-700">F</td>
                        </tr>
                        <tr>
                          <td className="border border-blue-300 px-4 py-2 text-center">F</td>
                          <td className="border border-blue-300 px-4 py-2 text-center">V</td>
                          <td className="border border-blue-300 px-4 py-2 text-center font-bold text-blue-700">V</td>
                        </tr>
                        <tr>
                          <td className="border border-blue-300 px-4 py-2 text-center">F</td>
                          <td className="border border-blue-300 px-4 py-2 text-center">F</td>
                          <td className="border border-blue-300 px-4 py-2 text-center font-bold text-blue-700">V</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <div className="text-center mt-4">
                    <p className="text-blue-700 font-medium">
                      👉 L'implication est fausse seulement si P est vrai et Q est faux.
                    </p>
                  </div>
                </div>
              </div>

              {/* 3. Pourquoi cette définition ? */}
              <div className="mb-6">
                <h4 className="font-bold text-blue-900 mb-3">3. Pourquoi cette définition ?</h4>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 mb-3">
                    Si il pleut (P vrai) mais le sol n'est pas mouillé (Q faux), alors la phrase « S'il pleut alors le sol est mouillé » est clairement fausse.
                  </p>
                  <p className="text-blue-800">
                    Dans tous les autres cas, la phrase n'est pas contredite, donc on la considère vraie.
                  </p>
                </div>
              </div>

              {/* 4. Les deux lectures utiles */}
              <div className="mb-6">
                <h4 className="font-bold text-blue-900 mb-3">4. Les deux lectures utiles</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h5 className="font-semibold text-blue-900 mb-2">Condition suffisante :</h5>
                    <p className="text-blue-800 text-sm mb-2">P est une condition suffisante pour Q.</p>
                    <p className="text-blue-700 text-sm italic">
                      Exemple : « Être un carré implique être un rectangle. »
                    </p>
                  </div>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <h5 className="font-semibold text-blue-900 mb-2">Condition nécessaire :</h5>
                    <p className="text-blue-800 text-sm mb-2">Q est une condition nécessaire pour P.</p>
                    <p className="text-blue-700 text-sm italic">
                      Exemple : « Être rectangle est nécessaire pour être carré. »
                    </p>
                  </div>
                </div>
                
                <div className="bg-white p-4 rounded-lg border border-blue-300 text-center mt-4">
                  <p className="text-blue-900 font-medium">
                    Donc : <span className="font-mono bg-blue-100 px-2 py-1 rounded">P → Q ≡ ¬P ∨ Q</span>
                  </p>
                  <p className="text-blue-700 text-sm mt-2">(soit P est faux, soit Q est vrai)</p>
                </div>
              </div>

              {/* 5. Les pièges classiques */}
              <div className="mb-6">
                <h4 className="font-bold text-blue-900 mb-3">5. Les pièges classiques</h4>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <div className="space-y-4">
                    <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                      <p className="text-blue-800 mb-2">
                        <strong>Attention :</strong> P → Q n'est pas équivalent à Q → P.
                      </p>
                      <ul className="text-blue-700 text-sm space-y-1">
                        <li>• « Être carré → être rectangle » est vrai,</li>
                        <li>• mais « Être rectangle → être carré » est faux.</li>
                      </ul>
                    </div>
                    
                    <div className="bg-white p-3 rounded border-l-4 border-blue-600">
                      <p className="text-blue-800 mb-2">
                        <strong>La vraie équivalence, c'est la contraposée :</strong>
                      </p>
                      <p className="text-center font-mono bg-blue-100 px-3 py-2 rounded text-blue-900">
                        P → Q ≡ ¬Q → ¬P
                      </p>
                      <div className="mt-3 text-sm text-blue-700">
                        <p><strong>Ex. :</strong> « Si ça pleut → sol mouillé »</p>
                        <p><strong>Contraposée :</strong> « Si le sol n'est pas mouillé → il n'a pas plu. »</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Équivalence */}
              <div className="mb-6">
                <h4 className="font-bold text-blue-900 mb-3">Équivalence P ⇔ Q</h4>
              <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="text-blue-800 mb-3">
                    P ⇔ Q signifie P → Q <strong>et</strong> Q → P.
                  </p>
                  <p className="text-blue-800">
                    Autrement dit : P et Q ont toujours la même valeur de vérité.
                  </p>
                </div>
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

            {/* A.5 Tables de vérité */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-teal-800">A.5. Tables de vérité</h3>

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

            {/* A.4 Propositions (vrai/faux, reconnaissance) */}
            <div className="mb-8">
              <h3 className="text-xl font-semibold mb-4 text-teal-800">A.4. Propositions (vrai/faux, reconnaissance)</h3>

              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="font-bold text-blue-900 mb-3">Rappel : Qu'est-ce qu'une proposition ?</h4>
                <p className="text-blue-800 mb-3">
                  Une proposition est un énoncé mathématique qui peut être qualifié de <strong>vrai</strong> ou de <strong>faux</strong>, 
                  mais pas les deux à la fois.
                </p>
                <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                  <p className="text-blue-800 font-medium">
                    ⚠️ Attention : Un énoncé contenant des variables libres (non précisées) n'est pas une proposition !
                  </p>
                </div>
              </div>

              {/* Exercice de reconnaissance */}
              <div className="bg-blue-50 p-4 rounded-lg mb-6">
                <h4 className="font-bold text-blue-900 mb-4">4.1 Dire si les phrases suivantes sont des propositions :</h4>
                
                <div className="space-y-4">
                  {/* Question a */}
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-bold text-sm">a)</span>
                      <span className="text-blue-900 font-medium">« 2+3=5 »</span>
                    </div>
                    <div className="ml-8 bg-green-50 p-3 rounded border-l-4 border-green-400">
                      <p className="text-green-800 font-medium mb-2">✅ C'est une proposition</p>
                      <p className="text-green-700 text-sm">
                        Cette égalité mathématique a une valeur de vérité claire et non ambiguë : elle est <strong>vraie</strong>.
                        On peut décider sans hésitation si elle est vraie ou fausse.
                      </p>
                    </div>
                  </div>

                  {/* Question b */}
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-bold text-sm">b)</span>
                      <span className="text-blue-900 font-medium">« x+1=3 »</span>
                    </div>
                    <div className="ml-8 bg-red-50 p-3 rounded border-l-4 border-red-400">
                      <p className="text-red-800 font-medium mb-2">❌ Ce n'est PAS une proposition</p>
                      <p className="text-red-700 text-sm mb-2">
                        Cette phrase contient une <strong>variable libre</strong> (x) dont la valeur n'est pas précisée.
                      </p>
                      <ul className="text-red-700 text-sm space-y-1">
                        <li>• Si x = 2, alors l'énoncé est <em>vrai</em></li>
                        <li>• Si x = 5, alors l'énoncé est <em>faux</em></li>
                        <li>• Impossible de décider sans connaître x !</li>
                      </ul>
                    </div>
                  </div>

                  {/* Question c */}
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-bold text-sm">c)</span>
                      <span className="text-blue-900 font-medium">« 5 est un nombre premier »</span>
                    </div>
                    <div className="ml-8 bg-green-50 p-3 rounded border-l-4 border-green-400">
                      <p className="text-green-800 font-medium mb-2">✅ C'est une proposition</p>
                      <p className="text-green-700 text-sm">
                        Cette affirmation mathématique est <strong>vraie</strong> : le nombre 5 n'a que deux diviseurs (1 et 5), 
                        donc c'est bien un nombre premier. La valeur de vérité est claire.
                      </p>
                    </div>
                  </div>

                  {/* Question d */}
                  <div className="bg-white p-4 rounded-lg border border-blue-200">
                    <div className="flex items-start gap-3 mb-3">
                      <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded font-bold text-sm">d)</span>
                      <span className="text-blue-900 font-medium">« Paris est la capitale de l'Italie »</span>
                    </div>
                    <div className="ml-8 bg-green-50 p-3 rounded border-l-4 border-green-400">
                      <p className="text-green-800 font-medium mb-2">✅ C'est une proposition</p>
                      <p className="text-green-700 text-sm">
                        Cette affirmation géographique est <strong>fausse</strong> (la capitale de l'Italie est Rome), 
                        mais on peut décider clairement de sa valeur de vérité. Même fausse, c'est une proposition !
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Règles de reconnaissance */}
              <div className="bg-blue-100 p-4 rounded-lg mb-6">
                <h4 className="font-bold text-blue-900 mb-3">📋 Règles de reconnaissance d'une proposition</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-green-300">
                    <h5 className="font-semibold text-green-800 mb-2">✅ C'est une proposition si :</h5>
                    <ul className="space-y-1 text-green-700 text-sm">
                      <li>• L'énoncé est <strong>complet</strong> (pas de variables libres)</li>
                      <li>• On peut décider s'il est vrai ou faux</li>
                      <li>• Il n'y a <strong>qu'une seule</strong> valeur de vérité possible</li>
                      <li>• L'énoncé porte sur des objets mathématiques précis</li>
                    </ul>
                  </div>
                  <div className="bg-white p-4 rounded-lg border border-red-300">
                    <h5 className="font-semibold text-red-800 mb-2">❌ Ce n'est PAS une proposition si :</h5>
                    <ul className="space-y-1 text-red-700 text-sm">
                      <li>• L'énoncé contient des <strong>variables libres</strong></li>
                      <li>• C'est une question ou un ordre</li>
                      <li>• La valeur de vérité dépend du contexte</li>
                      <li>• L'énoncé est ambigu ou incomplet</li>
                    </ul>
                  </div>
                </div>
              </div>

              {/* Exemples supplémentaires */}
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-bold text-blue-900 mb-3">Autres exemples à analyser</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <h5 className="font-semibold text-green-800">✅ Propositions :</h5>
                    <ul className="space-y-1 text-blue-700 text-sm">
                      <li>• « 7 × 8 = 56 »</li>
                      <li>• « √2 est irrationnel »</li>
                      <li>• « Tous les nombres pairs sont divisibles par 2 »</li>
                      <li>• « La somme des angles d'un triangle vaut 180° »</li>
                    </ul>
                  </div>
                  <div className="space-y-2">
                    <h5 className="font-semibold text-red-800">❌ Non-propositions :</h5>
                    <ul className="space-y-1 text-blue-700 text-sm">
                      <li>• « n est divisible par 3 » (variable libre n)</li>
                      <li>• « Résolvez cette équation » (ordre)</li>
                      <li>• « Combien vaut x ? » (question)</li>
                      <li>• « Cette ville est belle » (subjectif)</li>
                    </ul>
                  </div>
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
