
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calculator, Target, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import { PythonExerciseValidator } from '@/components/python/PythonExerciseValidator';

const PythonProbabilitesExercicesPage = () => {
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);

  const exercises = [
    {
      id: 1,
      exerciseId: 'loi_arret_aleatoire',
      title: "Loi d'arrêt aléatoire",
      difficulty: "Moyen",
      description: "Simuler X = rang d'obtention de deux Pile consécutifs au pile ou face.",
      color: "orange",
      template: `import random as rd

def simulX():
    # TODO: Compléter la fonction
    # Simuler les lancers jusqu'à obtenir deux Pile consécutifs
    # Retourner le nombre de lancers effectués
    pass`,
      hints: [
        'Utilisez une variable pour compter les Pile consécutifs',
        'Remettez le compteur à 0 si vous obtenez Face',
        'Arrêtez quand vous avez 2 Pile consécutifs'
      ]
    },
    {
      id: 2,
      exerciseId: 'processus_renforcement',
      title: "Processus de renforcement",
      difficulty: "Moyen",
      description: "Simuler le processus de renforcement dans une urne avec règles spécifiques.",
      color: "orange",
      template: `import random as rd

def simulY(n):
    # TODO: Compléter la fonction
    # Simuler le processus de renforcement
    # Retourner le rang d'obtention de n boules vertes
    pass`,
      hints: [
        'Commencez avec 1 boule rouge et 1 boule verte',
        'Si boule rouge: ajouter 2 rouges',
        'Si boule verte: ajouter 1 rouge et 2 vertes'
      ]
    },
    {
      id: 3,
      exerciseId: 'tirages_urne',
      title: "Tirages dans une urne",
      difficulty: "Moyen",
      description: "Simuler Z = rang d'apparition de la première boule rouge et Y_n = nombre de boules vertes.",
      color: "orange",
      template: `import random as rd

def simulZ(a, b):
    # TODO: Simuler le rang d'apparition de la première boule rouge
    pass

def simulY(n, a, b):
    # TODO: Simuler le nombre de boules vertes parmi n tirages
    pass`,
      hints: [
        'Probabilité de tirer une boule verte = b/(a+b)',
        'Pour simulZ: continuer tant qu\'on tire des vertes',
        'Pour simulY: compter sur n tirages'
      ]
    },
    {
      id: 4,
      exerciseId: 'simulation_evenement',
      title: "Simulation d'un événement",
      difficulty: "Moyen",
      description: "Simuler la réalisation d'un événement A de probabilité p avec Python.",
      color: "orange",
      template: `import random as rd

def simuler_evenement(p):
    # TODO: Retourner True si l'événement se réalise, False sinon
    pass`,
      hints: [
        'Utiliser rd.random() pour un nombre aléatoire entre 0 et 1',
        'Comparer avec la probabilité p',
        'Si < p, alors l\'événement se réalise'
      ]
    },
    {
      id: 5,
      exerciseId: 'sauts_escalier',
      title: "Sauts aléatoires dans un escalier",
      difficulty: "Moyen",
      description: "Un animal gravit un escalier en montant 1 ou 2 marches à chaque bond. Simuler le nombre de bonds.",
      color: "orange",
      template: `import numpy.random as rd

def saut_escalier(n):
    # TODO: Simuler le comportement de l'animal
    # Retourner le nombre de bonds pour atteindre la marche n
    pass`,
      hints: [
        'Commencer à la marche 0',
        'Chaque bond: 1 ou 2 marches avec probabilité 1/2',
        'Continuer jusqu\'à atteindre la marche n'
      ]
    },
    {
      id: 6,
      exerciseId: 'simulation_geometrique',
      title: "Simulation de lois géométriques",
      difficulty: "Moyen",
      description: "Estimer P(X = 2Y) où X et Y suivent des lois géométriques par méthode de Monte-Carlo.",
      color: "orange",
      template: `import numpy.random as rd

def simulation_geom(p, q):
    # TODO: Estimer P(X = 2Y) par méthode de Monte-Carlo
    # Retourner l'estimation de la probabilité
    pass`,
      hints: [
        'Utiliser rd.geometric(p) pour simuler une loi géométrique',
        'Effectuer un grand nombre de simulations',
        'Compter combien de fois X = 2Y'
      ]
    }
  ];

  const currentExercise = selectedExercise ? exercises.find(ex => ex.id === selectedExercise) : null;

  if (selectedExercise && currentExercise) {
    const exerciseForValidator = {
      id: currentExercise.exerciseId,
      title: currentExercise.title,
      description: currentExercise.description,
      difficulty: currentExercise.difficulty,
      template: currentExercise.template,
      hints: currentExercise.hints,
      category: 'probabilites'
    };

    return (
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
          </div>

          <PythonExerciseValidator exercise={exerciseForValidator} />
        </div>
      </div>
    );
  }

  return (
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
              Module 4 : Exercices - Probabilités
            </h1>
            <p className="text-xl text-muted-foreground">
              Exercices pratiques sur les probabilités et les statistiques
            </p>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-purple-700">
              <Target className="h-6 w-6" />
              Objectifs des exercices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Badge variant="outline" className="mb-2">Simulation</Badge>
                <p className="text-sm text-muted-foreground">
                  Maîtriser la simulation de processus aléatoires
                </p>
              </div>
              <div className="space-y-2">
                <Badge variant="outline" className="mb-2">Lois de probabilité</Badge>
                <p className="text-sm text-muted-foreground">
                  Simuler et analyser des lois de probabilité
                </p>
              </div>
              <div className="space-y-2">
                <Badge variant="outline" className="mb-2">Monte-Carlo</Badge>
                <p className="text-sm text-muted-foreground">
                  Appliquer les méthodes de Monte-Carlo
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map((exercise) => (
            <Card 
              key={exercise.id} 
              className="hover:shadow-lg transition-shadow cursor-pointer border border-orange-200"
              onClick={() => setSelectedExercise(exercise.id)}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Calculator className="h-6 w-6 text-orange-600" />
                  <div>
                    <CardTitle className="text-lg">Exercice {exercise.id}</CardTitle>
                    <Badge variant="secondary" className="mt-1 bg-orange-100 text-orange-700">
                      {exercise.difficulty}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className="font-semibold text-orange-700 mb-2">
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
  );
};

export default PythonProbabilitesExercicesPage;
