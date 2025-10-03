import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, BookOpen, BarChart3, Calculator, Zap, Target, Code, Play } from 'lucide-react';

const OteriaSuitesNumeriquesCoursPage = () => {
  const [expandedCode, setExpandedCode] = useState<string | null>(null);

  const toggleCode = (id: string) => {
    setExpandedCode(expandedCode === id ? null : id);
  };

  const CodeBlock = ({ code, title, id }: { code: string; title: string; id: string }) => (
    <div className="my-4 border border-orange-200 rounded-lg overflow-hidden">
      <div 
        className="bg-orange-100 px-4 py-2 flex items-center justify-between cursor-pointer hover:bg-orange-200 transition-colors"
        onClick={() => toggleCode(id)}
      >
        <div className="flex items-center gap-2">
          <Code className="h-4 w-4 text-orange-600" />
          <span className="font-semibold text-orange-900">{title}</span>
        </div>
        <Play className={`h-4 w-4 text-orange-600 transition-transform ${expandedCode === id ? 'rotate-90' : ''}`} />
      </div>
      {expandedCode === id && (
        <pre className="bg-blue-950 text-gray-100 p-4 overflow-x-auto">
          <code className="text-sm">{code}</code>
        </pre>
      )}
    </div>
  );

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
                <Link to="/formation/oteria/suites-numeriques-exercices" className="w-full">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium hover:scale-105 shadow-md hover:shadow-lg">
                    <Target className="h-5 w-5 mx-auto mb-2" />
                    Exercices
                  </button>
                </Link>
                <Link to="/formation/oteria/suites-numeriques-flashcards" className="w-full">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium hover:scale-105 shadow-md hover:shadow-lg">
                    <Calculator className="h-5 w-5 mx-auto mb-2" />
                    Flashcards
                  </button>
                </Link>
                <Link to="/formation/oteria/suites-numeriques-qcm" className="w-full">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium hover:scale-105 shadow-md hover:shadow-lg">
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

              {/* Application Python */}
              <div className="mt-6 bg-gradient-to-r from-orange-50 to-orange-100 p-5 rounded-lg border-2 border-orange-300">
                <h4 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Application Python : Visualisation de suites
                </h4>
                
                <CodeBlock 
                  id="code1"
                  title="Tracer une suite explicite : uₙ = 1/n"
                  code={`import numpy as np
import matplotlib.pyplot as plt

# Définir les valeurs de n
n = np.arange(1, 51)

# Calculer la suite u_n = 1/n
u_n = 1 / n

# Tracer la suite
plt.plot(n, u_n, 'o-', color='orange', markersize=4)
plt.axhline(y=0, color='red', linestyle='--', label='Limite = 0')
plt.xlabel('n')
plt.ylabel('u_n')
plt.title('Suite u_n = 1/n')
plt.grid(True)
plt.legend()
plt.show()

# Afficher quelques valeurs
print(f"u_1 = {u_n[0]:.4f}")
print(f"u_10 = {u_n[9]:.4f}")
print(f"u_50 = {u_n[49]:.4f}")`}
                />

                <CodeBlock 
                  id="code2"
                  title="Tracer une suite récurrente : u₀=0, u(n+1) = (1/2)uₙ + 1"
                  code={`import numpy as np
import matplotlib.pyplot as plt

# Calculer les termes de la suite récurrente
u0 = 0
n_max = 30
u = [u0]

for i in range(n_max):
    u_next = 0.5 * u[-1] + 1  # u(n+1) = (1/2)*u_n + 1
    u.append(u_next)

# Point fixe : ℓ = (1/2)*ℓ + 1 → ℓ = 2
point_fixe = 2

# Tracer la suite
plt.plot(u, 'o-', color='orange', markersize=5, label='u_n')
plt.axhline(y=point_fixe, color='red', linestyle='--', label='Point fixe = 2')
plt.xlabel('n')
plt.ylabel('u_n')
plt.title('Suite récurrente')
plt.grid(True)
plt.legend()
plt.show()

# Afficher les résultats
print(f"Premiers termes: {u[:5]}")
print(f"u_30 = {u[-1]:.6f}")
print(f"Point fixe théorique: {point_fixe}")`}
                />

                <div className="mt-4 bg-white p-4 rounded border-l-4 border-orange-500">
                  <strong className="text-orange-900">Exercice :</strong>
                  <p className="text-gray-700 mt-2">
                    Modifiez le code pour étudier la suite u(n+1) = 2uₙ - 1 avec u₀ = 3. 
                    Cette suite converge-t-elle ? Tracez son évolution.
                  </p>
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

              {/* Application Python */}
              <div className="mt-6 bg-gradient-to-r from-orange-50 to-orange-100 p-5 rounded-lg border-2 border-orange-300">
                <h4 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
                  <Code className="h-5 w-5" />
                  Application Python : Visualiser les bornes
                </h4>
                
                <CodeBlock 
                  id="code3"
                  title="Suite bornée : uₙ = sin(n)/n"
                  code={`import numpy as np
import matplotlib.pyplot as plt

# Calculer la suite u_n = sin(n) / n
n = np.arange(1, 101)
u_n = np.sin(n) / n

# Tracer la suite avec ses bornes
plt.plot(n, u_n, 'o', color='orange', markersize=3, label='u_n = sin(n)/n')
plt.axhline(y=1, color='red', linestyle='--', label='Majorant = 1')
plt.axhline(y=-1, color='blue', linestyle='--', label='Minorant = -1')
plt.axhline(y=0, color='green', linestyle=':', label='Limite = 0')
plt.fill_between(n, -1, 1, alpha=0.1, color='gray')
plt.xlabel('n')
plt.ylabel('u_n')
plt.title('Suite bornée : -1 ≤ u_n ≤ 1')
plt.grid(True)
plt.legend()
plt.ylim(-1.2, 1.2)
plt.show()

print(f"La suite est bornée entre -1 et 1")`}
                />

                <CodeBlock 
                  id="code4"
                  title="Suite non bornée : uₙ = n²"
                  code={`import numpy as np
import matplotlib.pyplot as plt

# Calculer la suite u_n = n²
n = np.arange(1, 51)
u_n = n**2

# Tracer la suite
plt.plot(n, u_n, 'o-', color='red', markersize=4)
plt.xlabel('n')
plt.ylabel('u_n')
plt.title('Suite non majorée : u_n = n²')
plt.grid(True)
plt.show()

# Afficher quelques valeurs
print(f"u_1 = {u_n[0]}")
print(f"u_10 = {u_n[9]}")
print(f"u_50 = {u_n[49]}")
print("Cette suite tend vers +∞")`}
                />

                <div className="mt-4 bg-white p-4 rounded border-l-4 border-orange-500">
                  <strong className="text-orange-900">Exercice :</strong>
                  <p className="text-gray-700 mt-2">
                    1. Tracez la suite uₙ = (-1)ⁿ/n. Est-elle bornée ? <br/>
                    2. Tracez la suite uₙ = n/(n+1). Déterminez graphiquement son majorant et sa limite.
                  </p>
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

            {/* Application Python */}
            <div className="mt-6 bg-gradient-to-r from-orange-50 to-orange-100 p-5 rounded-lg border-2 border-orange-300">
              <h4 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
                <Code className="h-5 w-5" />
                Application Python : Théorème des gendarmes
              </h4>
              
              <CodeBlock 
                id="code5"
                title="Théorème des gendarmes : -1/n ≤ sin(n²)/n ≤ 1/n"
                code={`import numpy as np
import matplotlib.pyplot as plt

# Définir les trois suites
n = np.arange(1, 101)
u_n = np.sin(n**2) / n  # Suite encadrée
v_n = -1 / n            # Minorant
w_n = 1 / n             # Majorant

# Tracer les trois suites
plt.plot(n, u_n, 'o', color='orange', markersize=3, label='u_n = sin(n²)/n')
plt.plot(n, v_n, '-', color='blue', linewidth=2, label='v_n = -1/n')
plt.plot(n, w_n, '-', color='red', linewidth=2, label='w_n = 1/n')
plt.axhline(y=0, color='green', linestyle='--', label='Limite = 0')
plt.fill_between(n, v_n, w_n, alpha=0.15, color='gray')
plt.xlabel('n')
plt.ylabel('Valeur')
plt.title('Théorème des gendarmes')
plt.grid(True)
plt.legend()
plt.ylim(-0.3, 0.3)
plt.show()

# Vérifier l'encadrement
print("Vérification pour quelques valeurs:")
for i in [0, 9, 49]:
    print(f"n={n[i]}: {v_n[i]:.5f} ≤ {u_n[i]:.5f} ≤ {w_n[i]:.5f}")
print("Toutes les suites convergent vers 0")`}
              />

              <CodeBlock 
                id="code6"
                title="Exercice : Étude de uₙ = cos(n)/√n"
                code={`import numpy as np
import matplotlib.pyplot as plt

# Définir les trois suites
n = np.arange(1, 101)
u_n = np.cos(n) / np.sqrt(n)    # Suite encadrée
v_n = -1 / np.sqrt(n)           # Minorant
w_n = 1 / np.sqrt(n)            # Majorant

# Tracer l'encadrement
plt.plot(n, u_n, 'o', color='orange', markersize=2, label='u_n = cos(n)/√n')
plt.plot(n, v_n, '-', color='blue', linewidth=2, label='v_n = -1/√n')
plt.plot(n, w_n, '-', color='red', linewidth=2, label='w_n = 1/√n')
plt.fill_between(n, v_n, w_n, alpha=0.1, color='gray')
plt.axhline(y=0, color='green', linestyle='--', label='Limite = 0')
plt.xlabel('n')
plt.ylabel('Valeur')
plt.title('Encadrement de la suite')
plt.grid(True)
plt.legend()
plt.show()

# Afficher quelques valeurs
print(f"u_10 = {u_n[9]:.6f}")
print(f"u_50 = {u_n[49]:.6f}")
print(f"u_100 = {u_n[99]:.6f}")
print("Conclusion: La suite converge vers 0")`}
              />

              <div className="mt-4 bg-white p-4 rounded border-l-4 border-orange-500">
                <strong className="text-orange-900">Exercice :</strong>
                <p className="text-gray-700 mt-2">
                  Montrez graphiquement que la suite uₙ = sin(n³)/(n+1) converge vers 0. 
                  Trouvez un encadrement et tracez les trois suites.
                </p>
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

            {/* Application Python */}
            <div className="mt-6 bg-gradient-to-r from-orange-50 to-orange-100 p-5 rounded-lg border-2 border-orange-300">
              <h4 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
                <Code className="h-5 w-5" />
                Application Python : Suites adjacentes
              </h4>
              
              <CodeBlock 
                id="code7"
                title="Suites adjacentes : approximation de π (Leibniz)"
                code={`import numpy as np
import matplotlib.pyplot as plt

# Calculer les suites adjacentes (formule de Leibniz)
u = []
v = []
for n in range(1, 51):
    # Somme partielle: 4 * (1 - 1/3 + 1/5 - 1/7 + ...)
    k = np.arange(0, n+1)
    u_n = 4 * np.sum((-1)**k / (2*k + 1))
    v_n = u_n + 2/n
    u.append(u_n)
    v.append(v_n)

# Tracer les deux suites
n = np.arange(1, 51)
plt.plot(n, u, 'o-', color='blue', markersize=3, label='u_n (croissante)')
plt.plot(n, v, 'o-', color='red', markersize=3, label='v_n (décroissante)')
plt.axhline(y=np.pi, color='green', linestyle='--', label=f'π = {np.pi:.4f}')
plt.xlabel('n')
plt.ylabel('Valeur')
plt.title('Suites adjacentes encadrant π')
plt.grid(True)
plt.legend()
plt.ylim(2.8, 3.5)
plt.show()

# Afficher l'encadrement
print(f"n=10: {u[9]:.6f} < π < {v[9]:.6f}")
print(f"n=50: {u[49]:.6f} < π < {v[49]:.6f}")
print(f"π = {np.pi:.10f}")`}
              />

              <CodeBlock 
                id="code8"
                title="Méthode de Babylone : approximation de √2"
                code={`import numpy as np
import matplotlib.pyplot as plt

# Méthode de Babylone : u_{n+1} = (u_n + 2/u_n) / 2
u = [1.0]  # Valeur initiale
for i in range(10):
    u_next = (u[-1] + 2/u[-1]) / 2
    u.append(u_next)

sqrt2 = np.sqrt(2)

# Tracer la convergence
plt.plot(u, 'o-', color='orange', markersize=8, label='u_n')
plt.axhline(y=sqrt2, color='red', linestyle='--', label=f'√2 = {sqrt2:.6f}')
plt.xlabel('n')
plt.ylabel('u_n')
plt.title('Méthode de Babylone')
plt.grid(True)
plt.legend()
plt.show()

# Afficher la convergence
print(f"Valeur exacte: √2 = {sqrt2:.10f}")
for i in [0, 2, 5, 10]:
    erreur = abs(u[i] - sqrt2)
    print(f"n={i}: u_{i} = {u[i]:.10f}, erreur = {erreur:.2e}")`}
              />

              <div className="mt-4 bg-white p-4 rounded border-l-4 border-orange-500">
                <strong className="text-orange-900">Exercice avancé :</strong>
                <p className="text-gray-700 mt-2">
                  Implémentez la méthode de Newton pour calculer √3 avec la suite u(n+1) = (uₙ + 3/uₙ)/2. 
                  Comparez la vitesse de convergence avec la méthode de Babylone pour √2.
                </p>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center bg-blue-50 p-6 rounded-lg">
            <Link to="/articles/oteria-cyber-school">
              <div className="text-blue-600">← Séance précédente</div>
            </Link>
            <div className="flex gap-3">
              <Link to="/formation/oteria/suites-numeriques-exercices">
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

export default OteriaSuitesNumeriquesCoursPage;
