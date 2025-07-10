import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calculator, Target, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PythonExerciseValidator } from '@/components/python/PythonExerciseValidator';
import { PythonModuleGuard } from '@/components/python/PythonModuleGuard';

const PythonFondamentauxExercicesPage = () => {
  const [selectedExercise, setSelectedExercise] = useState<string | null>(null);

  const exercises = [
    {
      id: 'variables_types',
      title: "Variables et types de base",
      difficulty: "Débutant" as const,
      description: "Créer une fonction qui calcule l'aire d'un rectangle et retourne le type du résultat.",
      category: "Fondamentaux",
      template: `# Créer une fonction qui calcule l'aire d'un rectangle
def calculer_aire(longueur, largeur):
    # TODO: Calculer l'aire et retourner le résultat
    # Vérifier que les paramètres sont des nombres
    pass

# Tester la fonction
print(calculer_aire(5.0, 3))
print(type(calculer_aire(5.0, 3)))`
    },
    {
      id: 'operations_numeriques',
      title: "Opérations numériques",
      difficulty: "Débutant" as const, 
      description: "Écrire une fonction qui calcule la moyenne de trois nombres avec gestion de division par zéro.",
      category: "Fondamentaux",
      template: `# Calculer la moyenne de trois nombres
def moyenne_trois(a, b, c):
    # TODO: Calculer et retourner la moyenne
    # Gérer le cas division par zéro
    pass

# Tester la fonction
print(moyenne_trois(10, 20, 30))
print(moyenne_trois(0, 0, 0))`
    },
    {
      id: 'conditions_logiques',
      title: "Structures conditionnelles",
      difficulty: "Débutant" as const,
      description: "Créer une fonction qui détermine si un nombre est pair, impair ou nul.",
      category: "Fondamentaux",
      template: `# Déterminer la parité d'un nombre
def analyser_nombre(n):
    # TODO: Retourner "pair", "impair" ou "nul"
    # Utiliser les structures if/elif/else
    pass

# Tester la fonction  
print(analyser_nombre(0))
print(analyser_nombre(4))
print(analyser_nombre(7))`
    }
  ];

  if (selectedExercise) {
    const exercise = exercises.find(ex => ex.id === selectedExercise);
    if (!exercise) return null;

    return (
      <PythonModuleGuard moduleId={1} moduleName="Fondamentaux Python">
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
                <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                  {exercise.title}
                </h1>
                <Badge variant="secondary" className="bg-green-100 text-green-700">
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
                      <strong>Instructions :</strong> Complétez le code ci-dessous puis cliquez sur "Tester mon code" 
                      pour obtenir un feedback instantané de l'IA.
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
    <PythonModuleGuard moduleId={1} moduleName="Fondamentaux Python">
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
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Module 1 : Exercices - Fondamentaux
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
                🎯 Nouvelle expérience d'apprentissage
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold mb-4 text-blue-800">✨ Système d'évaluation interactive :</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <div className="bg-white p-3 rounded border-l-4 border-green-500">
                      <Badge variant="outline" className="mb-2 bg-green-100 text-green-700">💻 Coder</Badge>
                      <p className="text-sm text-muted-foreground">
                        Écrivez votre script Python dans l'interface
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white p-3 rounded border-l-4 border-blue-500">
                      <Badge variant="outline" className="mb-2 bg-blue-100 text-blue-700">🧪 Tester</Badge>
                      <p className="text-sm text-muted-foreground">
                        L'IA exécute et analyse votre code instantanément
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white p-3 rounded border-l-4 border-orange-500">
                      <Badge variant="outline" className="mb-2 bg-orange-100 text-orange-700">🔧 Corriger</Badge>
                      <p className="text-sm text-muted-foreground">
                        Feedback personnalisé avec indices progressifs
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exercises.map((exercise, index) => (
              <Card 
                key={exercise.id} 
                className="hover:shadow-lg transition-shadow cursor-pointer border border-green-200"
                onClick={() => setSelectedExercise(exercise.id)}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Calculator className="h-6 w-6 text-green-600" />
                    <div>
                      <CardTitle className="text-lg">Exercice {index + 1}</CardTitle>
                      <Badge variant="secondary" className="mt-1 bg-green-100 text-green-700">
                        {exercise.difficulty}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold mb-2 text-green-700">
                    {exercise.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {exercise.description}
                  </p>
                  <Button className="w-full bg-green-600 hover:bg-green-700">
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

export default PythonFondamentauxExercicesPage;