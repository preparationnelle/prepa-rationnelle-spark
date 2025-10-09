import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Home,
  ChevronRight,
  ArrowLeft,
  BookOpen,
  Target,
  Zap,
  Code,
  Calculator,
  CheckCircle,
  XCircle,
  Eye,
  EyeOff,
  BarChart3,
  TrendingUp
} from 'lucide-react';

const OteriaFonctionsExercicesPage = () => {
  const [expandedCode, setExpandedCode] = useState<string | null>(null);

  const toggleCode = (codeId: string) => {
    setExpandedCode(expandedCode === codeId ? null : codeId);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-blue-600">
            <Link to="/" className="flex items-center gap-1 hover:text-blue-700 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <Link to="/articles" className="hover:text-blue-700 transition-colors">
              Niveau
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <Link to="/articles/oteria-cyber-school" className="hover:text-blue-700 transition-colors">
              OTERIA Cyber School
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <span className="text-blue-600 font-medium">Séance 5 - Exercices</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <BarChart3 className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-blue-900">Séance 5 : Fonctions, croissance, polynômes (I)</h1>
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
                  <span className="text-2xl font-bold text-blue-900">2h</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Niveau</span>
                  <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    🟢 Débutant
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Ressources pédagogiques */}
          <div className="max-w-4xl mx-auto mb-6">
            <div className="bg-white border border-blue-200 rounded-lg p-6 shadow-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link to="/formation/oteria/fonctions-variable-reelle-cours" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <BookOpen className="h-5 w-5 mx-auto mb-2" />
                    Cours
                  </button>
                </Link>
                <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg cursor-default font-medium shadow-md">
                  <Target className="h-5 w-5 mx-auto mb-2" />
                  Exercices
                </button>
                <Link to="/formation/oteria/fonctions-flashcards" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <Calculator className="h-5 w-5 mx-auto mb-2" />
                    Flashcards
                  </button>
                </Link>
                <Link to="/formation/oteria/fonctions-qcm" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <Zap className="h-5 w-5 mx-auto mb-2" />
                    QCM
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Contenu des exercices */}
        <div className="max-w-4xl mx-auto">

          {/* Exercice 1: Tracer une courbe simple */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-900 font-bold text-lg">1</span>
              </div>
              <h2 className="text-2xl font-bold text-blue-900">Tracer une courbe simple</h2>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">Facile</Badge>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-900 mb-2">Objectif</h3>
                <p className="text-blue-800">
                  Tracer la courbe de la fonction f(x) = 7x³ + 1 sur l'intervalle [-5, 5]
                </p>
              </div>

              {/* Code Python */}
              <div className="border border-blue-200 rounded-lg overflow-hidden">
                <div className="bg-blue-50 px-4 py-2 border-b border-blue-200">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-blue-900 flex items-center gap-2">
                      <Code className="h-4 w-4" />
                      Code Python
                    </h4>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCode('matplotlib-simple')}
                      className="text-blue-600 hover:text-blue-700"
                    >
                      {expandedCode === 'matplotlib-simple' ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      {expandedCode === 'matplotlib-simple' ? 'Masquer' : 'Voir le code'}
                    </Button>
                  </div>
                </div>
                
                {expandedCode === 'matplotlib-simple' && (
                  <div className="p-4 bg-gray-50">
                    <pre className="text-sm overflow-x-auto">
                      <code>{`import matplotlib.pyplot as plt
import numpy as np

x = np.arange(-5, 6)
y = 7 * x**3 + 1

plt.plot(x, y)
plt.title("Courbe de f(x) = 7x³ + 1")
plt.xlabel("x")
plt.ylabel("f(x)")
plt.grid(True)
plt.show()`}</code>
                    </pre>
                  </div>
                )}
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Points clés à retenir</h4>
                <ul className="text-blue-800 space-y-1 list-disc list-inside">
                  <li>Utiliser <code>np.arange()</code> pour créer les valeurs de x</li>
                  <li>La fonction <code>plt.plot(x, y)</code> trace la courbe</li>
                  <li>Ajouter des titres et labels avec <code>plt.title()</code>, <code>plt.xlabel()</code>, <code>plt.ylabel()</code></li>
                  <li>La grille améliore la lisibilité avec <code>plt.grid(True)</code></li>
                </ul>
              </div>
            </div>
          </div>

          {/* Exercice 2: Représenter une suite */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-900 font-bold text-lg">2</span>
              </div>
              <h2 className="text-2xl font-bold text-blue-900">Représenter une suite numérique</h2>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">Facile</Badge>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-900 mb-2">Objectif</h3>
                <p className="text-blue-800">
                  Représenter les 10 premiers termes de la suite définie par u<sub>n</sub> = 3n - 4
                </p>
              </div>

              {/* Code Python */}
              <div className="border border-blue-200 rounded-lg overflow-hidden">
                <div className="bg-blue-50 px-4 py-2 border-b border-blue-200">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-blue-900 flex items-center gap-2">
                      <Code className="h-4 w-4" />
                      Code Python
                    </h4>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCode('matplotlib-suite')}
                      className="text-blue-600 hover:text-blue-700"
                    >
                      {expandedCode === 'matplotlib-suite' ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      {expandedCode === 'matplotlib-suite' ? 'Masquer' : 'Voir le code'}
                    </Button>
                  </div>
                </div>
                
                {expandedCode === 'matplotlib-suite' && (
                  <div className="p-4 bg-gray-50">
                    <pre className="text-sm overflow-x-auto">
                      <code>{`import matplotlib.pyplot as plt
import numpy as np

# Définition de la suite
x = np.arange(10)
y = 3 * x - 4

# Tracé avec des points uniquement
plt.plot(x, y, linestyle='', marker='o')
plt.title("Suite uₙ = 3n - 4")
plt.xlabel("n")
plt.ylabel("uₙ")
plt.grid(True)
plt.show()

# Version raccourcie avec style 'g^' (triangles verts)
plt.plot(x, y, 'g^')
plt.title("Version raccourcie : plt.plot(x, y, 'g^')")
plt.xlabel("n")
plt.ylabel("uₙ")
plt.grid(True)
plt.show()`}</code>
                    </pre>
                  </div>
                )}
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Points clés à retenir</h4>
                <ul className="text-blue-800 space-y-1 list-disc list-inside">
                  <li>Pour une suite, on utilise des points (markers) et non des lignes</li>
                  <li>Utiliser <code>linestyle=''</code> et <code>marker='o'</code> pour des points ronds</li>
                  <li>Notation raccourcie : <code>'g^'</code> pour des triangles verts</li>
                  <li>Les suites sont des fonctions discrètes (valeurs entières de n)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Exercice 3: Tracer plusieurs courbes */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <span className="text-blue-900 font-bold text-lg">3</span>
              </div>
              <h2 className="text-2xl font-bold text-blue-900">Tracer plusieurs courbes</h2>
              <Badge variant="secondary" className="bg-blue-100 text-blue-800">Moyen</Badge>
            </div>

            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-500">
                <h3 className="font-semibold text-blue-900 mb-2">Objectif</h3>
                <p className="text-blue-800">
                  Montrer graphiquement que ∀x ∈ [-5,5], e<sup>x</sup> ≥ x + 1 (inégalité de convexité)
                </p>
              </div>

              {/* Code Python */}
              <div className="border border-blue-200 rounded-lg overflow-hidden">
                <div className="bg-blue-50 px-4 py-2 border-b border-blue-200">
                  <div className="flex items-center justify-between">
                    <h4 className="font-semibold text-blue-900 flex items-center gap-2">
                      <Code className="h-4 w-4" />
                      Code Python
                    </h4>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleCode('matplotlib-multiple')}
                      className="text-blue-600 hover:text-blue-700"
                    >
                      {expandedCode === 'matplotlib-multiple' ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      {expandedCode === 'matplotlib-multiple' ? 'Masquer' : 'Voir le code'}
                    </Button>
                  </div>
                </div>
                
                {expandedCode === 'matplotlib-multiple' && (
                  <div className="p-4 bg-gray-50">
                    <pre className="text-sm overflow-x-auto">
                      <code>{`import matplotlib.pyplot as plt
import numpy as np

# Définition de l'intervalle et des fonctions
x = np.arange(-5, 5.01, 0.01)
y = np.exp(x)
z = x + 1

# Tracé des deux courbes
plt.plot(x, y)
plt.plot(x, z)
plt.title("Inégalité de convexité : e^x ≥ x + 1")
plt.xlabel("x")
plt.ylabel("y")
plt.grid(True)
plt.show()`}</code>
                    </pre>
                  </div>
                )}
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-900 mb-2">Points clés à retenir</h4>
                <ul className="text-blue-800 space-y-1 list-disc list-inside">
                  <li>Pour tracer plusieurs courbes, faire plusieurs appels à <code>plt.plot()</code></li>
                  <li>L'inégalité e<sup>x</sup> ≥ x + 1 est visible graphiquement</li>
                  <li>Un pas plus fin (0.01) avec <code>np.arange()</code> donne une courbe plus lisse</li>
                  <li>Utiliser <code>np.exp()</code> pour la fonction exponentielle</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Conseils pratiques */}
          <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl shadow-lg p-8 mb-8 border-2 border-blue-300">
            <div className="flex items-center gap-3 mb-6">
              <CheckCircle className="h-8 w-8 text-blue-600" />
              <h2 className="text-2xl font-bold text-blue-900">Conseils pratiques avec Matplotlib</h2>
            </div>

            <div className="space-y-4">
              <ul className="text-blue-800 space-y-2 list-disc list-inside">
                <li>Idéal pour l'analyse scientifique et les mathématiques</li>
                <li>Syntaxe proche de MATLAB, facile à apprendre</li>
                <li>Excellent pour les publications et présentations</li>
                <li>Nombreuses options de personnalisation des graphiques</li>
                <li>Utiliser <code>np.arange()</code> ou <code>np.linspace()</code> pour créer les intervalles</li>
                <li>Toujours ajouter des labels avec <code>plt.xlabel()</code> et <code>plt.ylabel()</code></li>
                <li>La fonction <code>plt.grid(True)</code> améliore la lisibilité</li>
              </ul>
            </div>

            <div className="mt-6 p-4 bg-blue-50 rounded-lg">
              <h4 className="font-semibold text-blue-900 mb-2">À retenir</h4>
              <p className="text-blue-800">
                Ces exercices illustrent les concepts fondamentaux : représentation de fonctions continues, 
                suites discrètes, et comparaison de fonctions. La visualisation est essentielle pour 
                comprendre le comportement des fonctions mathématiques.
              </p>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center bg-blue-50 p-6 rounded-lg">
            <Link to="/formation/oteria/suites-numeriques-qcm">
              <div className="text-blue-600 hover:text-blue-700">← Séance précédente</div>
            </Link>
            <div className="flex gap-3">
            <Link to="/formation/oteria/fonctions-variable-reelle-cours">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Cours
              </button>
            </Link>
              <Link to="/formation/oteria/fonctions-flashcards">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Flashcards
                </button>
              </Link>
              <button className="bg-gray-400 text-white px-4 py-2 rounded-lg cursor-not-allowed font-medium" disabled>
                QCM (bientôt)
              </button>
              <Link to="/articles/oteria-cyber-school">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Retour au programme
                </button>
              </Link>
            </div>
            <Link to="/formation/oteria/polynomes-cours">
              <div className="text-blue-600 hover:text-blue-700">Séance suivante →</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OteriaFonctionsExercicesPage;
