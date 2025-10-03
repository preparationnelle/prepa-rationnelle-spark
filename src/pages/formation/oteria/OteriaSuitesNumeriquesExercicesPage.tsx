import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, BookOpen, Target, Code, Play, CheckCircle } from 'lucide-react';

const OteriaSuitesNumeriquesExercicesPage = () => {
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
            <span className="text-teal-600 font-medium">Séance 4 - Exercices</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
              <Target className="h-8 w-8 text-orange-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-teal-900">Exercices : Suites numériques</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Mettez en pratique vos connaissances sur les suites avec Python
          </p>

          {/* Navigation vers le cours */}
          <div className="max-w-2xl mx-auto mb-6">
            <Link to="/formation/oteria/suites-numeriques-cours">
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 hover:bg-blue-100 transition-colors cursor-pointer">
                <div className="flex items-center justify-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  <span className="text-blue-900 font-medium">Retour au cours</span>
                </div>
              </div>
            </Link>
          </div>
        </div>

        {/* Contenu des exercices */}
        <div className="max-w-4xl mx-auto">

          {/* Exercice 1 */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-900 font-bold">1</span>
              </div>
              <h2 className="text-2xl font-bold text-teal-900">Calcul de termes d'une suite récurrente</h2>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-4">
              <h3 className="font-bold text-blue-900 mb-3">Énoncé</h3>
              <p className="text-blue-800 mb-4">
                Écrire une fonction qui prend en argument un entier n et renvoie les n premiers termes de la suite définie par :
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-blue-500 text-center">
                <strong className="text-blue-900">u₀ = 2, u(n+1) = 3uₙ + 1</strong>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-5 rounded-lg border-2 border-orange-300">
              <h4 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
                <Code className="h-5 w-5" />
                Solution Python
              </h4>
              
              <CodeBlock 
                id="ex1"
                title="Calculer les n premiers termes"
                code={`def suite_u(n):
    """Calcule les n premiers termes de la suite u_0=2, u_{n+1}=3*u_n+1"""
    u = 2
    termes = [u]
    
    for i in range(1, n):
        u = 3 * u + 1
        termes.append(u)
    
    return termes

# Calculer les 10 premiers termes
resultat = suite_u(10)
print("Les 10 premiers termes:")
for i, terme in enumerate(resultat):
    print(f"u_{i} = {terme}")`}
              />

              <div className="mt-4 bg-white p-4 rounded border-l-4 border-orange-500">
                <strong className="text-orange-900">Question supplémentaire :</strong>
                <p className="text-gray-700 mt-2">
                  Cette suite converge-t-elle ? Justifiez votre réponse.
                </p>
              </div>
            </div>
          </div>

          {/* Exercice 2 */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-900 font-bold">2</span>
              </div>
              <h2 className="text-2xl font-bold text-teal-900">Suite géométrique : récurrence vs formule explicite</h2>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-4">
              <h3 className="font-bold text-blue-900 mb-3">Énoncé</h3>
              <p className="text-blue-800 mb-4">
                On définit la suite géométrique :
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-blue-500 text-center mb-4">
                <strong className="text-blue-900">v₀ = 1, v(n+1) = 2vₙ</strong>
              </div>
              <p className="text-blue-800">
                Écrire deux fonctions : une utilisant la récurrence et une autre utilisant la formule explicite vₙ = 2ⁿ.
                Vérifier que les deux méthodes donnent le même résultat pour n ≤ 10.
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-5 rounded-lg border-2 border-orange-300">
              <h4 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
                <Code className="h-5 w-5" />
                Solution Python
              </h4>
              
              <CodeBlock 
                id="ex2"
                title="Comparaison récurrence vs formule explicite"
                code={`# Méthode par récurrence
def suite_v_rec(n):
    """Calcule v_n par récurrence"""
    v = 1
    for i in range(n):
        v = v * 2
    return v

# Méthode par formule explicite
def suite_v_exp(n):
    """Calcule v_n avec la formule explicite v_n = 2^n"""
    return 2**n

# Vérification pour n <= 10
print("Vérification des deux méthodes:")
print("n  | Récurrence | Explicite")
print("-" * 35)
for k in range(11):
    rec = suite_v_rec(k)
    exp = suite_v_exp(k)
    egal = "✓" if rec == exp else "✗"
    print(f"{k:2d} | {rec:10d} | {exp:10d} {egal}")`}
              />

              <div className="mt-4 bg-white p-4 rounded border-l-4 border-green-500">
                <strong className="text-green-900">Observation :</strong>
                <p className="text-gray-700 mt-2">
                  Les deux méthodes donnent exactement le même résultat. La formule explicite est plus efficace car elle ne nécessite pas de boucle.
                </p>
              </div>
            </div>
          </div>

          {/* Exercice 3 */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-900 font-bold">3</span>
              </div>
              <h2 className="text-2xl font-bold text-teal-900">Convergence d'une suite</h2>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-4">
              <h3 className="font-bold text-blue-900 mb-3">Énoncé</h3>
              <p className="text-blue-800 mb-4">
                On définit la suite :
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-blue-500 text-center mb-4">
                <strong className="text-blue-900">w₀ = 1, w(n+1) = wₙ/2 + 1</strong>
              </div>
              <p className="text-blue-800">
                Écrire un programme qui calcule wₙ jusqu'à ce que deux termes consécutifs soient égaux à 10⁻⁶ près.
                Donner une approximation numérique de la limite.
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-5 rounded-lg border-2 border-orange-300">
              <h4 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
                <Code className="h-5 w-5" />
                Solution Python
              </h4>
              
              <CodeBlock 
                id="ex3"
                title="Calcul de la limite par convergence"
                code={`def suite_w(epsilon=1e-6):
    """Calcule la suite jusqu'à convergence"""
    w = 1
    n = 0
    
    while True:
        w_next = w / 2 + 1
        
        # Vérifier si on a convergé
        if abs(w_next - w) < epsilon:
            return w_next, n
        
        w = w_next
        n += 1

# Calculer la limite
valeur, rang = suite_w()
print(f"Limite approchée : {valeur:.10f}")
print(f"Atteinte au rang : {rang}")
print(f"Vérification : ℓ/2 + 1 = {valeur/2 + 1:.10f}")`}
              />

              <div className="mt-4 bg-white p-4 rounded border-l-4 border-blue-500">
                <strong className="text-blue-900">Point fixe :</strong>
                <p className="text-gray-700 mt-2">
                  La limite ℓ vérifie : ℓ = ℓ/2 + 1, donc ℓ = 2
                </p>
              </div>
            </div>
          </div>

          {/* Exercice 4 */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-900 font-bold">4</span>
              </div>
              <h2 className="text-2xl font-bold text-teal-900">Visualisation graphique d'une suite</h2>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-4">
              <h3 className="font-bold text-blue-900 mb-3">Énoncé</h3>
              <p className="text-blue-800 mb-4">
                Tracer avec matplotlib les 20 premiers termes de la suite définie par :
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-blue-500 text-center">
                <strong className="text-blue-900">z₀ = 0, z(n+1) = z²ₙ + 0.5</strong>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-5 rounded-lg border-2 border-orange-300">
              <h4 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
                <Code className="h-5 w-5" />
                Solution Python
              </h4>
              
              <CodeBlock 
                id="ex4"
                title="Tracer la suite avec matplotlib"
                code={`import matplotlib.pyplot as plt

def suite_z(n):
    """Calcule les n premiers termes de z_{n+1} = z_n^2 + 0.5"""
    z = 0
    termes = [z]
    
    for i in range(1, n):
        z = z**2 + 0.5
        termes.append(z)
    
    return termes

# Calculer les 20 premiers termes
termes = suite_z(20)

# Tracer la suite
plt.plot(range(20), termes, marker='o', color='orange', markersize=6)
plt.xlabel('n')
plt.ylabel('z_n')
plt.title('Suite z définie par z_{n+1} = z_n² + 0.5')
plt.grid(True)
plt.show()

# Afficher quelques valeurs
print("Quelques termes de la suite:")
for i in [0, 5, 10, 15, 19]:
    print(f"z_{i} = {termes[i]:.6f}")`}
              />

              <div className="mt-4 bg-white p-4 rounded border-l-4 border-orange-500">
                <strong className="text-orange-900">Question :</strong>
                <p className="text-gray-700 mt-2">
                  Que remarquez-vous sur le comportement de cette suite ? Converge-t-elle ou diverge-t-elle ?
                </p>
              </div>
            </div>
          </div>

          {/* Exercice 5 */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                <span className="text-orange-900 font-bold">5</span>
              </div>
              <h2 className="text-2xl font-bold text-teal-900">Recherche de point fixe</h2>
            </div>

            <div className="bg-blue-50 p-6 rounded-lg mb-4">
              <h3 className="font-bold text-blue-900 mb-3">Énoncé</h3>
              <p className="text-blue-800 mb-4">
                On définit une suite par :
              </p>
              <div className="bg-white p-4 rounded border-l-4 border-blue-500 text-center mb-4">
                <strong className="text-blue-900">x(n+1) = cos(xₙ), x₀ = 1</strong>
              </div>
              <p className="text-blue-800">
                Programmer cette suite et afficher les 30 premiers termes.
                Observer si la suite semble converger et comparer avec la solution numérique de l'équation x = cos(x).
              </p>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-orange-100 p-5 rounded-lg border-2 border-orange-300">
              <h4 className="font-bold text-orange-900 mb-3 flex items-center gap-2">
                <Code className="h-5 w-5" />
                Solution Python
              </h4>
              
              <CodeBlock 
                id="ex5"
                title="Point fixe de x = cos(x)"
                code={`import math
import matplotlib.pyplot as plt

def suite_x(n):
    """Calcule les n premiers termes de x_{n+1} = cos(x_n)"""
    x = 1
    termes = [x]
    
    for i in range(1, n):
        x = math.cos(x)
        termes.append(x)
    
    return termes

# Calculer les 30 premiers termes
termes = suite_x(30)

# Afficher les termes
print("Les 30 premiers termes:")
for i in range(0, 30, 5):
    print(f"x_{i} = {termes[i]:.10f}")

# Tracer la convergence
plt.plot(termes, 'o-', color='orange', markersize=4)
plt.xlabel('n')
plt.ylabel('x_n')
plt.title('Convergence vers le point fixe de cos(x)')
plt.grid(True)
plt.show()

# Valeur limite
limite = termes[-1]
print(f"\\nLimite observée : {limite:.10f}")
print(f"Vérification cos(ℓ) = {math.cos(limite):.10f}")
print(f"Équation vérifiée : {abs(limite - math.cos(limite)) < 1e-9}")`}
              />

              <div className="mt-4 bg-white p-4 rounded border-l-4 border-blue-500">
                <strong className="text-blue-900">Interprétation :</strong>
                <p className="text-gray-700 mt-2">
                  La suite converge vers le point fixe de la fonction cosinus, c'est-à-dire la solution de l'équation x = cos(x) ≈ 0.739085.
                </p>
              </div>
            </div>
          </div>

          {/* Exercice bonus */}
          <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-xl shadow-lg p-8 mb-8 border-2 border-green-300">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="h-8 w-8 text-green-600" />
              <h2 className="text-2xl font-bold text-green-900">Exercice bonus : Suite de Fibonacci</h2>
            </div>

            <div className="bg-white p-6 rounded-lg mb-4">
              <h3 className="font-bold text-green-900 mb-3">Énoncé</h3>
              <p className="text-gray-800 mb-4">
                La célèbre suite de Fibonacci est définie par :
              </p>
              <div className="bg-green-50 p-4 rounded border-l-4 border-green-500 text-center mb-4">
                <strong className="text-green-900">F₀ = 0, F₁ = 1, F(n+2) = Fₙ + F(n+1)</strong>
              </div>
              <p className="text-gray-800">
                1. Calculer les 20 premiers termes<br/>
                2. Calculer le rapport Fₙ/F(n-1) pour n = 2 à 20<br/>
                3. Observer vers quelle valeur ce rapport converge (nombre d'or φ ≈ 1.618)
              </p>
            </div>

            <CodeBlock 
              id="bonus"
              title="Suite de Fibonacci et nombre d'or"
              code={`def fibonacci(n):
    """Calcule les n premiers termes de Fibonacci"""
    if n == 0:
        return [0]
    elif n == 1:
        return [0, 1]
    
    fib = [0, 1]
    for i in range(2, n):
        fib.append(fib[-1] + fib[-2])
    
    return fib

# Calculer les 20 premiers termes
termes = fibonacci(20)
print("Suite de Fibonacci:")
for i, f in enumerate(termes):
    print(f"F_{i} = {f}")

# Calculer les rapports
print("\\nRapports successifs (convergence vers φ):")
for i in range(2, 20):
    rapport = termes[i] / termes[i-1]
    print(f"F_{i}/F_{i-1} = {rapport:.10f}")

# Nombre d'or théorique
phi = (1 + 5**0.5) / 2
print(f"\\nNombre d'or φ = {phi:.10f}")`}
            />
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center bg-blue-50 p-6 rounded-lg">
            <Link to="/formation/oteria/suites-numeriques-cours">
              <div className="text-blue-600 flex items-center gap-2 hover:text-blue-700 transition-colors">
                <BookOpen className="h-5 w-5" />
                <span>Retour au cours</span>
              </div>
            </Link>
            <Link to="/articles/oteria-cyber-school">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Retour au programme
              </button>
            </Link>
            <div className="text-blue-600 font-medium">Flashcards →</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OteriaSuitesNumeriquesExercicesPage;

