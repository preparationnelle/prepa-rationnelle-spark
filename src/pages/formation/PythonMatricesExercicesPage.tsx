
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Calculator, Target, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const PythonMatricesExercicesPage = () => {
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);

  const exercises = [
    {
      id: 1,
      title: "Exercice 1 - Création de matrices",
      difficulty: "Facile",
      description: "Création de matrices avec np.array, np.zeros, np.ones, np.eye. Dimensions et propriétés.",
      color: "green"
    },
    {
      id: 2,
      title: "Exercice 2 - Opérations matricielles",
      difficulty: "Moyen",
      description: "Addition, multiplication, transposition. Produit matriciel et produit terme à terme.",
      color: "orange"
    },
    {
      id: 3,
      title: "Exercice 3 - Indexation et slicing",
      difficulty: "Moyen",
      description: "Accès aux éléments, lignes et colonnes. Modifications et extractions de sous-matrices.",
      color: "orange"
    }
  ];

  if (selectedExercise) {
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
            
            <div className="text-center mb-8">
              <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
                {exercises[selectedExercise - 1].title}
              </h1>
              <Badge variant="secondary" className={`${
                exercises[selectedExercise - 1].color === 'green' 
                  ? 'bg-green-100 text-green-700' 
                  : 'bg-orange-100 text-orange-700'
              }`}>
                {exercises[selectedExercise - 1].difficulty}
              </Badge>
            </div>
          </div>

          <Card className="mb-8">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-green-700">
                <Calculator className="h-6 w-6" />
                Contenu à venir
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Le contenu détaillé de cet exercice sera ajouté prochainement.
              </p>
            </CardContent>
          </Card>
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
            <h1 className="text-4xl font-bold bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent mb-4">
              Module 2 : Exercices - Matrices NumPy
            </h1>
            <p className="text-xl text-muted-foreground">
              Exercices pratiques sur les matrices et NumPy
            </p>
          </div>
        </div>

        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-green-700">
              <Target className="h-6 w-6" />
              Objectifs des exercices
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Badge variant="outline" className="mb-2">Création de matrices</Badge>
                <p className="text-sm text-muted-foreground">
                  Maîtriser les différentes méthodes de création
                </p>
              </div>
              <div className="space-y-2">
                <Badge variant="outline" className="mb-2">Opérations matricielles</Badge>
                <p className="text-sm text-muted-foreground">
                  Effectuer des calculs sur les matrices
                </p>
              </div>
              <div className="space-y-2">
                <Badge variant="outline" className="mb-2">Indexation</Badge>
                <p className="text-sm text-muted-foreground">
                  Accéder et modifier les éléments des matrices
                </p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map((exercise) => (
            <Card 
              key={exercise.id} 
              className={`hover:shadow-lg transition-shadow cursor-pointer ${
                exercise.color === 'green' 
                  ? 'border border-green-200' 
                  : 'border border-orange-200'
              }`}
              onClick={() => setSelectedExercise(exercise.id)}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Calculator className={`h-6 w-6 ${
                    exercise.color === 'green' ? 'text-green-600' : 'text-orange-600'
                  }`} />
                  <div>
                    <CardTitle className="text-lg">Exercice {exercise.id}</CardTitle>
                    <Badge 
                      variant="secondary" 
                      className={`mt-1 ${
                        exercise.color === 'green' 
                          ? 'bg-green-100 text-green-700' 
                          : 'bg-orange-100 text-orange-700'
                      }`}
                    >
                      {exercise.difficulty}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className={`font-semibold mb-2 ${
                  exercise.color === 'green' ? 'text-green-700' : 'text-orange-700'
                }`}>
                  {exercise.title.replace(`Exercice ${exercise.id} - `, '')}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {exercise.description}
                </p>
                <Button className={`w-full ${
                  exercise.color === 'green' 
                    ? 'bg-green-600 hover:bg-green-700' 
                    : 'bg-orange-600 hover:bg-orange-700'
                }`}>
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

export default PythonMatricesExercicesPage;
