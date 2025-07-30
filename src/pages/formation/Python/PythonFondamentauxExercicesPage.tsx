import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calculator, Target, Play, Code, BookOpen, ChevronDown, ChevronUp } from 'lucide-react';
import PythonModuleLayout from '@/components/formation/PythonModuleLayout';
import ModuleNavigationCards from '@/components/formation/ModuleNavigationCards';

const PythonFondamentauxExercicesPage = () => {
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);
  const [showCorrections, setShowCorrections] = useState<Set<number>>(new Set());
  
  const toggleCorrection = (index: number) => {
    const newShowCorrections = new Set(showCorrections);
    if (newShowCorrections.has(index)) {
      newShowCorrections.delete(index);
    } else {
      newShowCorrections.add(index);
    }
    setShowCorrections(newShowCorrections);
  };

  const exercises = [{
    id: 1,
    title: "Exercice 1 - Double somme avec division",
    difficulty: "Facile",
    description: "Calculer une double somme avec division. Maîtriser les boucles imbriquées.",
    color: "green",
    content: {
      objective: "Calculer la somme : ∑(k=1 à n) ∑(i=1 à k) 1/(k+i)",
      code: `n = int(input("Entrer n : "))
S = 0
for k in range(1, n + 1):
    for i in range(1, k + 1):
        S += 1 / (k + i)
print("Somme :", S)`
    }
  }, {
    id: 2,
    title: "Exercice 2 - Produit double",
    difficulty: "Facile",
    description: "Calculer une somme de produits. Manipulation des boucles et variables.",
    color: "green",
    content: {
      objective: "Calculer la somme : ∑(k=1 à n) ∑(i=1 à p) k·i",
      code: `n = int(input("Entrer n : "))
p = int(input("Entrer p : "))
S = 0
for k in range(1, n + 1):
    for i in range(1, p + 1):
        S += k * i
print("Somme :", S)`
    }
  }, {
    id: 3,
    title: "Exercice 3 - Somme exponentielle",
    difficulty: "Moyen",
    description: "Créer une fonction pour calculer une somme exponentielle.",
    color: "orange",
    content: {
      objective: "Calculer la somme : ∑(k=1 à n) 2^k/k",
      code: `def somme_exponentielle(n):
    S = 0
    for k in range(1, n + 1):
        S += (2 ** k) / k
    return S

n = int(input("Entrer un entier n : "))
resultat = somme_exponentielle(n)
print("Somme =", resultat)`
    }
  }, {
    id: 4,
    title: "Exercice 4 - Matrices avec NumPy",
    difficulty: "Moyen",
    description: "Création et manipulation de matrices avec NumPy. Accès aux lignes et colonnes.",
    color: "orange",
    content: {
      objective: "Créer des matrices spécifiques et accéder à leurs éléments",
      exercices: [
        {
          titre: "1. Matrice avec colonnes remplies par leur indice",
          enonce: "Créer une matrice carrée B ∈ Mₙ(ℝ) telle que la colonne j soit remplie de j. Par exemple, pour n=3, B doit être :\n[[1 2 3]\n [1 2 3]\n [1 2 3]]",
          correction: `n = int(input("Entrer n : "))
L = np.ones((n, n), dtype=int)
indices = np.arange(1, n + 1)
B = L * indices
print(B)`
        },
        {
          titre: "2. Matrice colonne contenant 1², 2², ..., n²",
          enonce: "Créer une matrice colonne A ∈ Mₙ,₁(ℝ) contenant les carrés des entiers de 1 à n.",
          correction: `n = int(input("Entrer n : "))
A = np.arange(1, n + 1)**2
A = A.reshape(n, 1)
print(A)`
        },
        {
          titre: "3. Matrice explicite à afficher",
          enonce: "Créer et afficher la matrice :\n[[1 2 3]\n [4 5 6]]",
          correction: `A = np.array([[1, 2, 3], [4, 5, 6]])
print(A)`
        },
        {
          titre: "4. Matrice 3×3 et accès aux lignes/colonnes",
          enonce: "Créer une matrice 3×3 contenant les entiers de 1 à 9. Afficher :\n- la première ligne\n- la deuxième colonne",
          correction: `A = np.arange(1, 10).reshape(3, 3)
print("Première ligne :", A[0])
print("Deuxième colonne :", A[:, 1])`
        }
      ]
    }
  }, {
    id: 5,
    title: "Exercice 5 - Coefficient binomial",
    difficulty: "Moyen",
    description: "Implémenter le calcul du coefficient binomial.",
    color: "orange",
    content: {
      objective: "Calculer le coefficient binomial C(n,k)",
      code: `def binomiale(n, k):
    if k > n:
        return 0
    result = 1
    for i in range(1, k + 1):
        result = result * (n - i + 1) / i
    return int(result)`
    }
  }, {
    id: 6,
    title: "Exercice 6 - Puissance d'un nombre",
    difficulty: "Facile",
    description: "Calculer la puissance d'un nombre réel.",
    color: "green",
    content: {
      objective: "Calculer a^p pour un réel a et un entier p",
      code: `a = float(input("Valeur de a : "))
p = int(input("Valeur de p : "))
résultat = a ** p
print("a élevé à la puissance p =", résultat)`
    }
  }, {
    id: 7,
    title: "Exercice 7 - Factorielle et seuil",
    difficulty: "Moyen",
    description: "Trouver le plus petit k tel que k! > 10^6.",
    color: "orange",
    content: {
      objective: "Trouver le plus petit k tel que k! > 10^6",
      code: `k = 1
fact = 1
while fact <= 10**6:
    k += 1
    fact *= k
print(k)`
    }
  }, {
    id: 8,
    title: "Exercice 8 - Fonction définie par morceaux",
    difficulty: "Facile",
    description: "Implémenter une fonction définie par morceaux.",
    color: "green",
    content: {
      objective: "Définir la fonction g(x) par morceaux",
      code: `x = float(input("Entrer un réel x : "))
if x < -1:
    print("g(x) =", 2)
elif x <= 1:
    print("g(x) =", 0)
else:
    print("g(x) =", -2)`
    }
  }];

  if (selectedExercise) {
    return <PythonModuleLayout>
        <div className="mb-8">
          <Button variant="outline" size="sm" className="flex items-center gap-2 mb-6" onClick={() => setSelectedExercise(null)}>
            ← Retour aux exercices
          </Button>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
              {exercises[selectedExercise - 1].title}
            </h1>
            <Badge variant="secondary" className="bg-green-100 text-green-700">
              {exercises[selectedExercise - 1].difficulty}
            </Badge>
          </div>
        </div>

        <Card className="mb-8 border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-red-50 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-orange-700">
              <Calculator className="h-6 w-6" />
              Objectif de l'exercice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-orange-700 font-medium mb-4">
              {exercises[selectedExercise - 1].content.objective}
            </p>
          </CardContent>
        </Card>

        {exercises[selectedExercise - 1].content.exercices && (
          <div className="space-y-6">
            {exercises[selectedExercise - 1].content.exercices.map((exercice, index) => (
              <div key={index} className="space-y-4">
                {/* Énoncé */}
                <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-blue-700">
                      <BookOpen className="h-6 w-6" />
                      {exercice.titre}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-700 whitespace-pre-line">{exercice.enonce}</p>
                  </CardContent>
                </Card>

                {/* Bouton pour afficher/masquer la correction */}
                <div className="flex justify-center">
                  <Button 
                    variant="outline" 
                    onClick={() => toggleCorrection(index)}
                    className="flex items-center gap-2 border-green-300 text-green-700 hover:bg-green-50"
                  >
                    {showCorrections.has(index) ? (
                      <>
                        <ChevronUp className="h-4 w-4" />
                        Masquer la correction
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-4 w-4" />
                        Voir la correction
                      </>
                    )}
                  </Button>
                </div>

                {/* Correction (affichée conditionnellement) */}
                {showCorrections.has(index) && (
                  <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-green-700">
                        <Code className="h-6 w-6" />
                        Correction
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-green-400 text-sm font-mono">
                          <code>{exercice.correction}</code>
                        </pre>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </div>
            ))}
          </div>
        )}

        {!exercises[selectedExercise - 1].content.exercices && (
          <Card className="mb-8 border-2 border-gray-200 bg-gradient-to-br from-gray-50 to-slate-50 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-gray-700">
                <Code className="h-6 w-6" />
                Code Python - Correction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-green-400 text-sm font-mono">
                  <code>{exercises[selectedExercise - 1].content.code}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        )}
      </PythonModuleLayout>;
  }
  
  return (
    <PythonModuleLayout>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-500 via-red-500 to-orange-600 bg-clip-text text-transparent mb-4">
          Module 0 : Exercices - Fondamentaux
        </h1>
        <p className="text-xl text-muted-foreground">
          Exercices pratiques sur les bases de Python
        </p>
      </div>

      <Card className="mb-8 border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-red-50 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-orange-700">
            <Target className="h-6 w-6" />
            Objectifs des exercices
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2 p-4 bg-orange-50 rounded-lg border border-orange-200">
              <Badge variant="outline" className="mb-2 bg-orange-100 text-orange-700 border-orange-300">Types de base</Badge>
              <p className="text-sm text-orange-700">
                Maîtriser les types fondamentaux de Python
              </p>
            </div>
            <div className="space-y-2 p-4 bg-orange-50 rounded-lg border border-orange-200">
              <Badge variant="outline" className="mb-2 bg-orange-100 text-orange-700 border-orange-300">Structures de contrôle</Badge>
              <p className="text-sm text-orange-700">
                Comprendre les conditions et les boucles
              </p>
            </div>
            <div className="space-y-2 p-4 bg-orange-50 rounded-lg border border-orange-200">
              <Badge variant="outline" className="mb-2 bg-orange-100 text-orange-700 border-orange-300">Fonctions</Badge>
              <p className="text-sm text-orange-700">
                Créer et utiliser des fonctions Python
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exercises.map(exercise => {
          const isGreen = exercise.color === 'green';
          const isOrange = exercise.color === 'orange';
          return (
            <Card 
              key={exercise.id} 
              className={`hover:shadow-lg transition-shadow cursor-pointer border-2 ${
                isGreen ? 'border-green-200 hover:border-green-300' : 
                isOrange ? 'border-orange-200 hover:border-orange-300' : 
                'border-gray-200 hover:border-gray-300'
              }`} 
              onClick={() => setSelectedExercise(exercise.id)}
            >
              <CardHeader>
                <div className="flex items-center gap-3">
                  <Calculator className={`h-6 w-6 ${
                    isGreen ? 'text-green-600' : 
                    isOrange ? 'text-orange-600' : 
                    'text-gray-600'
                  }`} />
                  <div>
                    <CardTitle className="text-lg">Exercice {exercise.id}</CardTitle>
                    <Badge variant="secondary" className={`mt-1 ${
                      isGreen ? 'bg-green-100 text-green-700' : 
                      isOrange ? 'bg-orange-100 text-orange-700' : 
                      'bg-gray-100 text-gray-700'
                    }`}>
                      {exercise.difficulty}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <h3 className={`font-semibold mb-2 ${
                  isGreen ? 'text-green-700' : 
                  isOrange ? 'text-orange-700' : 
                  'text-gray-700'
                }`}>
                  {exercise.title.replace(`Exercice ${exercise.id} - `, '')}
                </h3>
                <p className="text-sm text-muted-foreground mb-4">
                  {exercise.description}
                </p>
                <Button className={`w-full ${
                  isGreen ? 'bg-green-600 hover:bg-green-700' : 
                  isOrange ? 'bg-orange-600 hover:bg-orange-700' : 
                  'bg-gray-600 hover:bg-gray-700'
                }`}>
                  <Play className="h-4 w-4 mr-2" />
                  Commencer l'exercice
                </Button>
              </CardContent>
            </Card>
          );
        })}
      </div>

      {/* Navigation Card */}
      <ModuleNavigationCards 
        currentModule={{
          id: 0,
          title: "Fondamentaux",
          slug: "fondamentaux", 
          color: "orange"
        }}
        isExercisePage={true}
      />
    </PythonModuleLayout>
  );
};

export default PythonFondamentauxExercicesPage;