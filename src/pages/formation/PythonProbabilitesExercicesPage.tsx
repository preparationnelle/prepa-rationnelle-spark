import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calculator, Target, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PythonModuleGuard } from '@/components/python/PythonModuleGuard';
import { PythonExerciseValidator } from '@/components/python/PythonExerciseValidator';

const PythonProbabilitesExercicesPage = () => {
  const [selectedExercise, setSelectedExercise] = useState<string | null>(null);

  const exercises = [
    {
      id: 'loi_arret_aleatoire',
      title: "Loi d'arrêt aléatoire",
      difficulty: "Intermédiaire" as const,
      description: "Simuler X = rang d'obtention de deux Pile consécutifs au pile ou face.",
      category: "Probabilités",
      template: `import random as rd

def simulX():
    # TODO: Compléter la fonction
    # Simuler les lancers jusqu'à obtenir deux Pile consécutifs
    # Retourner le nombre de lancers effectués
    pass

# Test de la fonction avec simulation Monte-Carlo
def test_esperance(n_simulations=10000):
    total = 0
    for _ in range(n_simulations):
        total += simulX()
    return total / n_simulations

# Tests
print(f"Un exemple de simulation : {simulX()}")
print(f"Espérance estimée sur 10000 simulations : {test_esperance()}")
print("Espérance théorique : 6.0")`
    },
    {
      id: 'processus_renforcement',
      title: "Processus de renforcement",
      difficulty: "Intermédiaire" as const,
      description: "Simuler le processus de renforcement dans une urne avec règles spécifiques.",
      category: "Probabilités",
      template: `import random as rd

def simulY(n):
    # TODO: Compléter la fonction
    # Simuler le processus de renforcement
    # Urne initiale : 1 rouge, 1 verte
    # Si rouge : +2 rouges, Si verte : +1 rouge + 2 vertes
    # Retourner le rang d'obtention de n boules vertes
    pass

# Tests avec différentes valeurs
for n in [5, 10, 15]:
    result = simulY(n)
    print(f"Rang d'obtention de {n} boules vertes : {result}")`
    },
    {
      id: 'tirages_urne',
      title: "Tirages dans une urne",
      difficulty: "Intermédiaire" as const,
      description: "Simuler Z = rang d'apparition de la première boule rouge et Y_n = nombre de boules vertes.",
      category: "Probabilités",
      template: `import random as rd

def simulZ(a, b):
    # TODO: Simuler le rang d'apparition de la première boule rouge
    # Urne : a rouges, b vertes (tirages avec remise)
    pass

def simulY(n, a, b):
    # TODO: Simuler le nombre de boules vertes parmi n tirages
    # Urne : a rouges, b vertes (tirages avec remise)
    pass

# Tests
a, b = 3, 7  # 3 rouges, 7 vertes
print(f"Première rouge au rang : {simulZ(a, b)}")
print(f"Nombre de vertes sur 10 tirages : {simulY(10, a, b)}")

# Vérification des propriétés théoriques
print(f"E[Z] théorique = {(a+b)/a}")
print(f"E[Y_10] théorique = {10*b/(a+b)}")`
    },
    {
      id: 'simulation_geometrique',
      title: "Simulation de lois géométriques",
      difficulty: "Avancé" as const,
      description: "Estimer P(X = 2Y) où X et Y suivent des lois géométriques par méthode de Monte-Carlo.",
      category: "Probabilités",
      template: `import numpy.random as rd

def simulation_geom(p, q):
    # TODO: Compléter la fonction
    # Estimer P(X = 2Y) par méthode de Monte-Carlo
    # X ~ Géom(p), Y ~ Géom(q)
    # Retourner l'estimation de la probabilité
    pass

# Tests avec différents paramètres
test_cases = [
    (0.3, 0.5),
    (0.2, 0.4), 
    (0.1, 0.2)
]

for p, q in test_cases:
    prob_estimee = simulation_geom(p, q)
    print(f"p={p}, q={q} : P(X=2Y) ≈ {prob_estimee:.4f}")
    
# Calcul théorique pour vérification (cas p=0.3, q=0.5)
theorique = sum((1-0.3)**(2*k-1) * 0.3 * (1-0.5)**(k-1) * 0.5 for k in range(1, 100))
print(f"Valeur théorique (p=0.3, q=0.5) : {theorique:.4f}")`
    }
  ];

  if (selectedExercise) {
    const exercise = exercises.find(ex => ex.id === selectedExercise);
    if (!exercise) return null;

    return (
      <PythonModuleGuard moduleId={4} moduleName="Probabilités Python">
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
                <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                  {exercise.title}
                </h1>
                <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                  {exercise.difficulty}
                </Badge>
              </div>
            </div>

            <div className="mb-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl text-purple-700">📋 Énoncé</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">{exercise.description}</p>
                  <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                    <p className="text-sm text-purple-800">
                      <strong>🚀 Instructions :</strong> Complétez le code ci-dessous puis cliquez sur "Tester mon code" 
                      pour obtenir un feedback instantané de l'IA spécialisée en probabilités et simulations.
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
    <PythonModuleGuard moduleId={4} moduleName="Probabilités Python">
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
              <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-4">
                Module 4 : Exercices - Probabilités Python
              </h1>
              <p className="text-xl text-muted-foreground">
                🚀 Coder → Tester → Corriger : Simulations et lois de probabilité
              </p>
            </div>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-purple-700">
                <Target className="h-6 w-6" />
                🎯 Simulations probabilistes interactives
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
                <h3 className="text-lg font-semibold mb-4 text-purple-800">✨ L'IA analyse vos simulations probabilistes :</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <div className="bg-white p-3 rounded border-l-4 border-purple-500">
                      <Badge variant="outline" className="mb-2 bg-purple-100 text-purple-700">🎲 rd.random, rd.geometric</Badge>
                      <p className="text-sm text-muted-foreground">
                        Génération de variables aléatoires
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white p-3 rounded border-l-4 border-pink-500">
                      <Badge variant="outline" className="mb-2 bg-pink-100 text-pink-700">⚡ Monte-Carlo, Simulations</Badge>
                      <p className="text-sm text-muted-foreground">
                        Méthodes de simulation avancées
                      </p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <div className="bg-white p-3 rounded border-l-4 border-red-500">
                      <Badge variant="outline" className="mb-2 bg-red-100 text-red-700">🔧 Feedback IA</Badge>
                      <p className="text-sm text-muted-foreground">
                        Validation statistique automatique
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
                className="hover:shadow-lg transition-shadow cursor-pointer border border-purple-200"
                onClick={() => setSelectedExercise(exercise.id)}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Calculator className="h-6 w-6 text-purple-600" />
                    <div>
                      <CardTitle className="text-lg">Exercice {index + 1}</CardTitle>
                      <Badge variant="secondary" className="mt-1 bg-purple-100 text-purple-700">
                        {exercise.difficulty}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-semibold mb-2 text-purple-700">
                    {exercise.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {exercise.description}
                  </p>
                  <Button className="w-full bg-purple-600 hover:bg-purple-700">
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

export default PythonProbabilitesExercicesPage;