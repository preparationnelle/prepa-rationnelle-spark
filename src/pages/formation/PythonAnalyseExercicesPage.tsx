import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calculator, Target, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PythonModuleGuard } from '@/components/python/PythonModuleGuard';
import { PythonExerciseValidator } from '@/components/python/PythonExerciseValidator';

const PythonAnalyseExercicesPage = () => {
  const [selectedExercise, setSelectedExercise] = useState<string | null>(null);

  const exercises = [
    {
      id: 'creation_vecteurs',
      title: "Création de vecteurs",
      difficulty: "Débutant" as const,
      description: "En une seule ligne de commande, créer le vecteur x = (1, 1/4, 1/9, 1/16, ..., 1/100) puis calculer sa somme.",
      category: "Analyse",
      template: `import numpy as np

# TODO: Créer le vecteur x = (1, 1/4, 1/9, 1/16, ..., 1/100)
# Utiliser np.arange et les opérations sur les vecteurs
def creer_vecteur():
    # Créer x en une seule ligne
    pass

# TODO: Calculer la somme du vecteur
def calculer_somme():
    x = creer_vecteur()
    # Calculer la somme en une seule ligne
    pass

# Tests
print("Vecteur x:")
print(creer_vecteur())
print(f"Somme: {calculer_somme()}")`
    },
    {
      id: 'somme_geometrique',
      title: "Somme géométrique",
      difficulty: "Débutant" as const,
      description: "En une seule ligne de commande, calculer la somme ∑(n=0 à 10) 1/2ⁿ",
      category: "Analyse",
      template: `import numpy as np

def somme_geometrique():
    # TODO: Calculer ∑(n=0 à 10) 1/2ⁿ en une seule ligne
    # Utiliser np.arange et les puissances
    pass

# Test
result = somme_geometrique()
print(f"Somme géométrique: {result}")
print(f"Valeur théorique (2 - 1/1024): {2 - 1/1024}")`
    },
    {
      id: 'somme_harmonique',
      title: "Somme harmonique",
      difficulty: "Intermédiaire" as const,
      description: "Compléter la fonction Python pour calculer la somme harmonique Sₙ = ∑(k=1 à n) 1/k",
      category: "Analyse",
      template: `import numpy as np

def somme_harmonique(n):
    # TODO: Calculer la somme harmonique d'ordre n
    # Sₙ = 1 + 1/2 + 1/3 + ... + 1/n
    pass

def somme_harmonique_efficace(n):
    # TODO: Version efficace avec NumPy en une ligne
    pass

# Tests
for n in [10, 100, 1000]:
    s1 = somme_harmonique(n)
    s2 = somme_harmonique_efficace(n)
    print(f"H_{n} = {s1:.6f} (efficace: {s2:.6f})")`
    },
    {
      id: 'suite_convergence',
      title: "Convergence de suite",
      difficulty: "Avancé" as const,
      description: "Trouver le premier entier n tel que |uₙ - α| ≤ eps pour une suite convergente.",
      category: "Analyse",
      template: `import numpy as np

def premier_terme_precision(alpha, eps):
    # TODO: Compléter la fonction
    # Trouver le premier n tel que |u_n - alpha| <= eps
    # où u_n = 1 - 1/2^n (exemple de suite convergente vers 1)
    n = 1
    # Implémenter la logique de convergence
    pass

def suite_recurrente(x0, f, alpha, eps):
    # TODO: Suite définie par récurrence x_{n+1} = f(x_n)
    # Arrêter quand |x_n - alpha| <= eps
    pass

# Tests
print(f"Premier terme à eps près: {premier_terme_precision(1.0, 1e-6)}")

# Exemple avec f(x) = 1/(1 + exp(x)) qui converge vers 0
import math
f = lambda x: 1/(1 + math.exp(x))
print(f"Suite récurrente: {suite_recurrente(0.5, f, 0.0, 1e-6)}")`
    }
  ];

  if (selectedExercise) {
    const exercise = exercises.find(ex => ex.id === selectedExercise);
    if (!exercise) return null;

    return (
      <PythonModuleGuard moduleId={3} moduleName="Analyse Python">
        <div className="min-h-screen bg-background py-8">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-8">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 mb-6"
                onClick={() => setSelectedExercise(null)}
              >
                <ArrowLeft className="h-4 w-4" />
                Retour aux exercices
              </Button>
              
              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
                  {exercise.title}
                </h1>
                <Badge variant="secondary" className="bg-orange-100 text-orange-700">
                  {exercise.difficulty}
                </Badge>
              </div>
            </div>

            <div className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-orange-700">📋 Énoncé</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{exercise.description}</p>
                  <div className="bg-orange-50 p-4 rounded-lg border border-orange-200">
                    <p className="text-sm text-orange-800">
                      <strong>🚀 Instructions :</strong> Complétez le code ci-dessous puis cliquez sur "Tester mon code" 
                      pour obtenir un feedback instantané de l'IA spécialisée en analyse numérique.
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>

            <PythonExerciseValidator exercise={exercise} />
          </div>
        </div>
      </PythonModuleGuard>
    );
  }

  return (
    <PythonModuleGuard moduleId={3} moduleName="Analyse Python">
      <div className="min-h-screen bg-background py-8">
        <div className="max-w-6xl mx-auto px-6">
          <div className="mb-8">
            <Link to="/formation">
              <Button variant="outline" size="sm" className="flex items-center gap-2 mb-6">
                <ArrowLeft className="h-4 w-4" />
                Retour à la formation
              </Button>
            </Link>
            
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent mb-4">
                Module 3 : Exercices - Analyse Python
              </h1>
              <p className="text-xl text-muted-foreground">
                🚀 Coder → Tester → Corriger : Suites, séries et fonctions
              </p>
            </div>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-orange-700">
                <Target className="h-6 w-6" />
                🎯 Analyse numérique interactive
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-6 rounded-lg border border-orange-200">
                <h3 className="text-lg font-semibold mb-4 text-orange-800">✨ L'IA analyse votre code d'analyse numérique :</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <div className="bg-white p-3 rounded border-l-4 border-orange-500">
                      <Badge variant="outline" className="mb-2 bg-orange-100 text-orange-700">📊 np.arange, np.linspace</Badge>
                      <p className="text-sm text-muted-foreground">
                        Création de séquences numériques
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white p-3 rounded border-l-4 border-amber-500">
                      <Badge variant="outline" className="mb-2 bg-amber-100 text-amber-700">⚡ np.sum, np.cumsum</Badge>
                      <p className="text-sm text-muted-foreground">
                        Calculs de sommes et convergence
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white p-3 rounded border-l-4 border-red-500">
                      <Badge variant="outline" className="mb-2 bg-red-100 text-red-700">🔧 Feedback IA</Badge>
                      <p className="text-sm text-muted-foreground">
                        Correction mathématique précise
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {exercises.map((exercise, index) => (
              <Card 
                key={exercise.id} 
                className="hover:shadow-lg transition-shadow cursor-pointer border border-orange-200"
                onClick={() => setSelectedExercise(exercise.id)}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Calculator className="h-6 w-6 text-orange-600" />
                    <div>
                      <CardTitle className="text-lg">Exercice {index + 1}</CardTitle>
                      <Badge variant="secondary" className="mt-1 bg-orange-100 text-orange-700">
                        {exercise.difficulty}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold mb-2 text-orange-700">
                    {exercise.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {exercise.description}
                  </p>
                  <Button className="w-full bg-orange-600 hover:bg-orange-700">
                    <Play className="h-4 w-4 mr-2" />
                    Commencer l'exercice
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </PythonModuleGuard>
  );
};

export default PythonAnalyseExercicesPage;