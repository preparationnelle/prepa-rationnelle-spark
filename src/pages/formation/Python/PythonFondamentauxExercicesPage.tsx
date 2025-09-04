import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calculator, Target, Play, Code, BookOpen, ChevronDown, ChevronUp, ChevronLeft, HelpCircle, CheckCircle, Star } from 'lucide-react';
import PythonModuleLayout from '@/components/formation/PythonModuleLayout';
import ModuleNavigationCards from '@/components/formation/ModuleNavigationCards';

const PythonFondamentauxExercicesPage = () => {
  const [searchParams] = useSearchParams();
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);
  const [showCorrections, setShowCorrections] = useState<Set<number>>(new Set());
  const [showQCM, setShowQCM] = useState(false);

  // États pour le QCM d'évaluation
  const [qcmAnswers, setQcmAnswers] = useState<{[key: number]: string}>({});
  const [qcmSubmitted, setQcmSubmitted] = useState(false);
  const [qcmScore, setQcmScore] = useState<number | null>(null);

  // Détecter le paramètre quiz dans l'URL
  useEffect(() => {
    const quizParam = searchParams.get('quiz');
    if (quizParam === 'true') {
      setShowQCM(true);
    }
  }, [searchParams]);

  // Fonction pour gérer les réponses du QCM
  const handleQCMAnswer = (questionId: number, answer: string) => {
    setQcmAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  // Fonction pour soumettre le QCM et calculer la note
  const submitQCM = () => {
    let correctAnswers = 0;
    qcmQuestions.forEach(question => {
      if (qcmAnswers[question.id] === question.answer) {
        correctAnswers++;
      }
    });
    const score = (correctAnswers / qcmQuestions.length) * 20;
    setQcmScore(score);
    setQcmSubmitted(true);
  };

  // Fonction pour recommencer le QCM
  const restartQCM = () => {
    setQcmAnswers({});
    setQcmSubmitted(false);
    setQcmScore(null);
  };

  const toggleCorrection = (index: number) => {
    const newShowCorrections = new Set(showCorrections);
    if (newShowCorrections.has(index)) {
      newShowCorrections.delete(index);
    } else {
      newShowCorrections.add(index);
    }
    setShowCorrections(newShowCorrections);
  };

  const handleNavigate = (exerciseId: number) => {
    const exerciseExists = exercises.some(ex => ex.id === exerciseId);
    if (exerciseExists) {
      setSelectedExercise(exerciseId);
      window.scrollTo(0, 0);
    }
  };

  const qcmQuestions = [
    {
      id: 1,
      question: "Quel est le résultat de l'expression 3 + 4 * 2 en Python ?",
      options: ["A) 14", "B) 11", "C) 7", "D) Erreur"],
      answer: "B) 11"
    },
    {
      id: 2,
      question: "Quelle est la syntaxe correcte pour définir une fonction en Python ?",
      options: ["A) function ma_fonction():", "B) def ma_fonction():", "C) func ma_fonction():", "D) define ma_fonction():"],
      answer: "B) def ma_fonction():"
    },
    {
      id: 3,
      question: "Quel type de données est retourné par l'expression 5 / 2 en Python 3 ?",
      options: ["A) int", "B) float", "C) str", "D) bool"],
      answer: "B) float"
    },
    {
      id: 4,
      question: "Quelle méthode permet d'ajouter un élément à une liste en Python ?",
      options: ["A) list.add()", "B) list.append()", "C) list.insert()", "D) list.push()"],
      answer: "B) list.append()"
    },
    {
      id: 5,
      question: "Quel mot-clé est utilisé pour créer une boucle conditionnelle en Python ?",
      options: ["A) for", "B) while", "C) loop", "D) repeat"],
      answer: "B) while"
    },
    {
      id: 6,
      question: "Quelle est la valeur de vérité de l'expression 5 > 3 and 2 < 4 ?",
      options: ["A) True", "B) False", "C) None", "D) Erreur"],
      answer: "A) True"
    },
    {
      id: 7,
      question: "Comment accéder au premier élément d'une liste nommée 'ma_liste' ?",
      options: ["A) ma_liste[0]", "B) ma_liste[1]", "C) ma_liste.first()", "D) ma_liste.get(1)"],
      answer: "A) ma_liste[0]"
    },
    {
      id: 8,
      question: "Quel opérateur est utilisé pour la comparaison d'égalité en Python ?",
      options: ["A) =", "B) ==", "C) ===", "D) equals"],
      answer: "B) =="
    },
    {
      id: 9,
      question: "Quelle fonction permet de convertir une chaîne de caractères en entier ?",
      options: ["A) str()", "B) int()", "C) float()", "D) bool()"],
      answer: "B) int()"
    },
    {
      id: 10,
      question: "Quel est le résultat de len([1, 2, 3, 4, 5]) ?",
      options: ["A) 4", "B) 5", "C) 6", "D) Erreur"],
      answer: "B) 5"
    },
    {
      id: 11,
      question: "Quelle structure permet de répéter un bloc de code un nombre défini de fois ?",
      options: ["A) if", "B) while", "C) for", "D) repeat"],
      answer: "C) for"
    },
    {
      id: 12,
      question: "Quel symbole est utilisé pour les commentaires en Python ?",
      options: ["A) //", "B) /* */", "C) #", "D) --"],
      answer: "C) #"
    },
    {
      id: 13,
      question: "Quelle méthode permet de supprimer le dernier élément d'une liste ?",
      options: ["A) list.remove()", "B) list.pop()", "C) list.delete()", "D) list.clear()"],
      answer: "B) list.pop()"
    },
    {
      id: 14,
      question: "Quel est le résultat de 'Hello' + ' World' en Python ?",
      options: ["A) 'Hello World'", "B) 'HelloWorld'", "C) Erreur", "D) None"],
      answer: "B) 'HelloWorld'"
    },
    {
      id: 15,
      question: "Quelle fonction permet d'obtenir la longueur d'une chaîne de caractères ?",
      options: ["A) size()", "B) length()", "C) len()", "D) count()"],
      answer: "C) len()"
    },
    {
      id: 16,
      question: "Quel mot-clé est utilisé pour définir une condition en Python ?",
      options: ["A) when", "B) if", "C) case", "D) switch"],
      answer: "B) if"
    },
    {
      id: 17,
      question: "Quelle est la valeur de 2 ** 3 en Python ?",
      options: ["A) 5", "B) 6", "C) 8", "D) 9"],
      answer: "C) 8"
    },
    {
      id: 18,
      question: "Quel type de boucle est préférable quand on connaît le nombre d'itérations ?",
      options: ["A) while", "B) for", "C) repeat", "D) loop"],
      answer: "B) for"
    },
    {
      id: 19,
      question: "Quelle méthode permet d'inverser une liste en Python ?",
      options: ["A) list.reverse()", "B) list.inverse()", "C) reversed(list)", "D) list.flip()"],
      answer: "A) list.reverse()"
    },
    {
      id: 20,
      question: "Quel est le résultat de bool([]) en Python ?",
      options: ["A) True", "B) False", "C) None", "D) Erreur"],
      answer: "B) False"
    }
  ];

  const exercises = [{
    id: 1,
    title: "Exercice 1 - Double somme avec division",
    difficulty: "Facile",
    description: "Calculer une double somme avec division. Maîtriser les boucles imbriquées.",
    color: "gray",
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
    color: "gray",
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
    color: "gray",
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
    color: "gray",
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
  }, {
    id: 9,
    title: "Exercice 9 - Partie entière",
    difficulty: "Facile",
    description: "Comprendre le fonctionnement d'une boucle while avec un compteur",
    color: "gray",
    content: {
      objective: "Analyser le comportement d'un code utilisant une boucle while",
      exercices: [{
        titre: "Analyse de code",
        enonce: "Que fait le code suivant ?\n\nx = float(input(\"Entrez un réel positif\"))\nn = 0\nwhile n <= x - 1:\n    n += 1\nprint(n)",
        correction: `# Le code calcule la partie entière d'un nombre positif
x = float(input("Entrez un réel positif"))
n = 0
while n <= x - 1:
    n += 1
print(n)

# Explication :
# La boucle incrémente n jusqu'à ce qu'il atteigne la partie entière de x.
# Par exemple :
# - Pour x = 3.7, n va jusqu'à 3
# - Pour x = 5.2, n va jusqu'à 5
# - Pour x = 2.0, n va jusqu'à 2`
      }]
    }
  }];

  if (selectedExercise) {
    return <PythonModuleLayout>
        <div className="mb-8">
          <Button variant="outline" size="sm" className="flex items-center gap-2 mb-6" onClick={() => setSelectedExercise(null)}>
            ← Retour aux exercices
          </Button>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-gray-800 mb-4">
              {exercises[selectedExercise - 1].title}
            </h1>
            <Badge variant="secondary" className="bg-gray-100 text-gray-700">
              {exercises[selectedExercise - 1].difficulty}
            </Badge>
          </div>
        </div>

        <Card className="mb-8 border-2 border-gray-200 bg-gray-50 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-3 text-gray-700">
              <Calculator className="h-6 w-6" />
              Objectif de l'exercice
            </CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 font-medium mb-4">
              {exercises[selectedExercise - 1].content.objective}
            </p>
          </CardContent>
        </Card>

        {exercises[selectedExercise - 1].content.exercices && (
          <div className="space-y-6">
            {exercises[selectedExercise - 1].content.exercices.map((exercice, index) => (
              <div key={index} className="space-y-4">
                {/* Énoncé */}
                <Card className="border-2 border-blue-300 bg-blue-50/50 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-blue-800">
                      <BookOpen className="h-6 w-6 text-blue-700" />
                      {exercice.titre}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-blue-800 whitespace-pre-line">{exercice.enonce}</p>
                  </CardContent>
                </Card>

                {/* Bouton pour afficher/masquer la correction */}
                <div className="flex justify-center">
                  <Button
                    variant="outline"
                    onClick={() => toggleCorrection(index)}
                    className="flex items-center gap-2 border-blue-300 text-blue-700 hover:bg-orange-100 hover:text-orange-800 hover:border-orange-400"
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
                  <Card className="border-2 border-orange-300 bg-orange-50/50 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-orange-800">
                        <Code className="h-6 w-6 text-orange-700" />
                        Correction
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-orange-200 text-sm font-mono">
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
          <Card className="mb-8 border-2 border-gray-200 bg-gray-50 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-gray-700">
                <Code className="h-6 w-6" />
                Code Python - Correction
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                <pre className="text-gray-600 text-sm font-mono">
                  <code>{exercises[selectedExercise - 1].content.code}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        )}

      <ModuleNavigationCards 
        currentModule={{
          id: 0,
          title: "Fondamentaux",
          slug: "fondamentaux", 
          color: "gray"
        }}
        isExercisePage={true}
        totalExercises={exercises.length}
        currentExerciseId={selectedExercise}
        onNavigate={handleNavigate}
      />
      </PythonModuleLayout>;
  }
  
  return (
    <PythonModuleLayout>
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-3 mb-4 p-3 rounded-lg bg-blue-100 text-blue-700 border border-blue-300">
          <Calculator className="h-8 w-8" />
          <h1 className="text-4xl font-bold text-blue-800">
            Module 0 : Exercices - Fondamentaux
          </h1>
        </div>
        <p className="text-xl text-blue-600">
          Exercices pratiques sur les bases de Python
        </p>
      </div>

      <div className="mb-6 p-4 bg-blue-50/50 rounded-lg border-2 border-blue-300">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="space-y-2">
            <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">Types de base</Badge>
            <p className="text-sm text-blue-700">
              Maîtriser les types fondamentaux de Python
            </p>
          </div>
          <div className="space-y-2">
            <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">Structures de contrôle</Badge>
            <p className="text-sm text-blue-700">
              Comprendre les conditions et les boucles
            </p>
          </div>
          <div className="space-y-2">
            <Badge variant="outline" className="bg-blue-100 text-blue-800 border-blue-300">Fonctions</Badge>
            <p className="text-sm text-blue-700">
              Créer et utiliser des fonctions Python
            </p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {exercises.map(exercise => (
            <Card
              key={exercise.id}
              className="hover:shadow-lg transition-shadow cursor-pointer border-2 border-blue-300 bg-blue-50/50 hover:border-blue-400 h-full flex flex-col"
              onClick={() => setSelectedExercise(exercise.id)}
            >
              <CardHeader className="flex-shrink-0">
                <div className="flex items-center gap-3">
                  <Calculator className="h-6 w-6 text-blue-700" />
                  <div>
                    <CardTitle className="text-lg">Exercice {exercise.id}</CardTitle>
                    <Badge variant="secondary" className="mt-1 bg-blue-100 text-blue-800 border border-blue-300">
                      {exercise.difficulty}
                    </Badge>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col">
                <h3 className="font-semibold mb-2 text-blue-800 flex-grow">
                  {exercise.title.replace(`Exercice ${exercise.id} - `, '')}
                </h3>
                <p className="text-sm text-blue-700 mb-4 flex-grow">
                  {exercise.description}
                </p>
                <div className="mt-auto">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    <Play className="h-4 w-4 mr-2" />
                    Commencer l'exercice
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
      </div>

      {/* Section QCM */}
      {showQCM && (
        <>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2 mb-6"
            onClick={() => {
              setShowQCM(false);
              setQcmSubmitted(false);
              setQcmAnswers({});
              setQcmScore(null);
            }}
          >
            <ChevronLeft className="h-4 w-4" />
            Retour aux exercices
          </Button>

          <Card className="mb-8 border-2 border-gray-200 bg-gray-50 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-gray-700">
                <HelpCircle className="h-6 w-6" />
                QCM d'évaluation - Testez vos connaissances
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!qcmSubmitted ? (
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-gray-700 font-medium">
                      Répondez aux 20 questions pour évaluer votre niveau sur les fondamentaux Python
                    </p>
                    <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-300">
                      {Object.keys(qcmAnswers).length}/20 répondues
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {qcmQuestions.map((question) => (
                      <Card key={question.id} className="border border-gray-200 hover:border-gray-300 transition-colors">
                        <CardContent className="pt-4">
                          <div className="flex items-center gap-2 mb-2">
                            <Badge variant="outline" className="bg-gray-100 text-gray-700 text-xs border-gray-300">
                              Q{question.id}
                            </Badge>
                            {qcmAnswers[question.id] && (
                              <CheckCircle className="h-3 w-3 text-gray-600" />
                            )}
                          </div>
                          <p className="mb-3 text-sm">{question.question}</p>
                          <div className="space-y-2">
                            {question.options.map((option, optIndex) => (
                              <label key={optIndex} className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer">
                                <input
                                  type="radio"
                                  name={`question-${question.id}`}
                                  value={option}
                                  checked={qcmAnswers[question.id] === option}
                                  onChange={(e) => handleQCMAnswer(question.id, e.target.value)}
                                  className="text-gray-600"
                                />
                                <span className="text-sm">{option}</span>
                              </label>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="flex justify-center">
                    <Button
                      onClick={submitQCM}
                      disabled={Object.keys(qcmAnswers).length < 20}
                      className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3"
                    >
                      <HelpCircle className="h-4 w-4 mr-2" />
                      Valider le QCM
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="text-center space-y-4">
                    <div className="flex items-center justify-center gap-3">
                      <HelpCircle className="h-8 w-8 text-gray-600" />
                      <h3 className="text-2xl font-bold text-gray-700">Résultats du QCM</h3>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
                      <div className="text-4xl font-bold text-gray-700 mb-2">
                        {qcmScore?.toFixed(1)}/20
                      </div>
                      <div className="flex items-center justify-center gap-2 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-6 w-6 ${i < Math.floor((qcmScore || 0) / 4) ? 'text-gray-600 fill-current' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-700 font-medium">
                        {qcmScore && qcmScore >= 16 ? "Excellent ! Vous maîtrisez parfaitement les fondamentaux Python." :
                         qcmScore && qcmScore >= 12 ? "Bon niveau ! Quelques révisions pour perfectionner." :
                         qcmScore && qcmScore >= 8 ? "Niveau correct. Continuez à vous entraîner." :
                         "Niveau à améliorer. Revenez sur les bases des fondamentaux Python."}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-center">
                    <Button
                      variant="outline"
                      onClick={restartQCM}
                      className="border-gray-300 text-gray-700 hover:bg-gray-50"
                    >
                      Recommencer le QCM
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </>
      )}

      {/* Navigation Card */}
      <ModuleNavigationCards 
        currentModule={{
          id: 0,
          title: "Fondamentaux",
          slug: "fondamentaux", 
          color: "gray"
        }}
        isExercisePage={true}
        totalExercises={exercises.length}
        currentExerciseId={selectedExercise}
        onNavigate={handleNavigate}
      />
    </PythonModuleLayout>
  );
};

export default PythonFondamentauxExercicesPage;