import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calculator, Target, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PythonModuleGuard } from '@/components/python/PythonModuleGuard';
import { PythonExerciseValidator } from '@/components/python/PythonExerciseValidator';

const PythonMatricesExercicesPage = () => {
  const [selectedExercise, setSelectedExercise] = useState<string | null>(null);

  const exercises = [
    {
      id: 'matrice_z',
      title: "Création de matrice Z",
      difficulty: "Débutant" as const,
      description: "D'après ECE EDHEC 2015. Créer une matrice 5×5 spécifique avec différentes méthodes numpy.",
      category: "Matrices",
      template: `import numpy as np

# Question a) Créer Z avec numpy.ones et boucles for
def creer_Z_ones():
    # TODO: Créer la matrice Z avec np.ones et modifier avec des boucles
    # La matrice Z a des 1 sur les bords et des 0 au centre
    pass

# Question b) Créer Z avec numpy.zeros et boucles for  
def creer_Z_zeros():
    # TODO: Créer la matrice Z avec np.zeros et remplir avec des boucles
    pass

# Question c) Créer Z avec numpy.ones puis modifier avec numpy.zeros
def creer_Z_slicing():
    # TODO: Créer Z avec np.ones puis utiliser le slicing pour modifier
    pass

# Test des fonctions
print("Question a):")
print(creer_Z_ones())
print("\\nQuestion b):")  
print(creer_Z_zeros())
print("\\nQuestion c):")
print(creer_Z_slicing())`
    },
    {
      id: 'trace',
      title: "Trace d'une matrice",
      difficulty: "Débutant" as const,
      description: "Écrire une fonction qui calcule la trace (somme des éléments diagonaux) d'une matrice carrée.",
      category: "Matrices",
      template: `def trace(M):
    # TODO: compléter la fonction
    # La trace est la somme des éléments diagonaux M[i][i]
    pass

# Test de la fonction
test_matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(f"Trace de la matrice : {trace(test_matrix)}")`
    },
    {
      id: 'est_symetrique',
      title: "Test de symétrie",
      difficulty: "Intermédiaire" as const,
      description: "Écrire une fonction qui vérifie si une matrice est symétrique (M[i,j] == M[j,i]).",
      category: "Matrices",
      template: `def est_symetrique(M):
    # TODO: compléter la fonction
    # Vérifier que M[i][j] == M[j][i] pour tous i,j
    pass

# Tests
matrice_sym = [[1, 2, 3], [2, 4, 5], [3, 5, 6]]
matrice_non_sym = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
print(f"Matrice symétrique : {est_symetrique(matrice_sym)}")
print(f"Matrice non symétrique : {est_symetrique(matrice_non_sym)}")`
    },
    {
      id: 'matmul',
      title: "Produit matriciel",
      difficulty: "Avancé" as const,
      description: "Implémenter la multiplication matricielle sans utiliser l'opérateur @ ou numpy.dot.",
      category: "Matrices",
      template: `def matmul(A, B):
    # TODO: compléter la fonction
    # Implémenter la multiplication matricielle A × B
    # Vérifier que les dimensions sont compatibles
    pass

# Test
A = [[1, 2], [3, 4]]
B = [[2, 1], [1, 2]]
result = matmul(A, B)
print(f"A × B = {result}")`
    }
  ];

  if (selectedExercise) {
    const exercise = exercises.find(ex => ex.id === selectedExercise);
    if (!exercise) return null;

    return (
      <PythonModuleGuard moduleId={2} moduleName="Matrices NumPy">
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
                <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
                  {exercise.title}
                </h1>
                <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                  {exercise.difficulty}
                </Badge>
              </div>
            </div>

            <div className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-blue-700">📋 Énoncé</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{exercise.description}</p>
                  <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                    <p className="text-sm text-blue-800">
                      <strong>🚀 Instructions :</strong> Complétez le code ci-dessous puis cliquez sur "Tester mon code" 
                      pour obtenir un feedback instantané de l'IA utilisant les 54 commandes ECG.
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
    <PythonModuleGuard moduleId={2} moduleName="Matrices NumPy">
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
              <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
                Module 2 : Exercices - Matrices NumPy
              </h1>
              <p className="text-xl text-muted-foreground">
                🚀 Coder → Tester → Corriger : L'évaluation interactive avec IA
              </p>
            </div>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-blue-700">
                <Target className="h-6 w-6" />
                🎯 Système d'évaluation interactive avancé
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold mb-4 text-blue-800">✨ L'IA analyse votre code avec les 54 commandes ECG :</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <div className="bg-white p-3 rounded border-l-4 border-green-500">
                      <Badge variant="outline" className="mb-2 bg-green-100 text-green-700">🧮 np.zeros, np.ones</Badge>
                      <p className="text-sm text-muted-foreground">
                        Création de matrices avec NumPy
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                      <Badge variant="outline" className="mb-2 bg-blue-100 text-blue-700">⚡ np.dot, np.transpose</Badge>
                      <p className="text-sm text-muted-foreground">
                        Opérations matricielles avancées
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white p-3 rounded border-l-4 border-orange-500">
                      <Badge variant="outline" className="mb-2 bg-orange-100 text-orange-700">🔧 Feedback IA</Badge>
                      <p className="text-sm text-muted-foreground">
                        Indices progressifs et correction ciblée
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            {exercises.map((exercise, index) => (
              <Card 
                key={exercise.id} 
                className="hover:shadow-lg transition-shadow cursor-pointer border border-blue-200"
                onClick={() => setSelectedExercise(exercise.id)}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Calculator className="h-6 w-6 text-blue-600" />
                    <div>
                      <CardTitle className="text-lg">Exercice {index + 1}</CardTitle>
                      <Badge variant="secondary" className="mt-1 bg-blue-100 text-blue-700">
                        {exercise.difficulty}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold mb-2 text-blue-700">
                    {exercise.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {exercise.description}
                  </p>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
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

export default PythonMatricesExercicesPage;