import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, BookOpen, Target, Zap, Calculator, FunctionSquare, CheckCircle, AlertCircle } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const exercises = [
  {
    id: 1,
    title: "Sommes des puissances",
    difficulty: "Facile",
    points: 3,
    enonce: "Calculer les sommes suivantes :",
    questions: [
      {
        question: "\\sum_{k=1}^{10} k",
        solution: "\\frac{10 \\times 11}{2} = 55",
        explanation: "On utilise la formule \\sum_{k=1}^n k = \\frac{n(n+1)}{2} avec n=10"
      },
      {
        question: "\\sum_{k=1}^{5} k^2",
        solution: "\\frac{5 \\times 6 \\times 11}{6} = 55",
        explanation: "On utilise la formule \\sum_{k=1}^n k^2 = \\frac{n(n+1)(2n+1)}{6} avec n=5"
      },
      {
        question: "\\sum_{k=1}^{4} k^3",
        solution: "\\left(\\frac{4 \\times 5}{2}\\right)^2 = 100",
        explanation: "On utilise la formule \\sum_{k=1}^n k^3 = \\left(\\frac{n(n+1)}{2}\\right)^2 avec n=4"
      }
    ]
  },
  {
    id: 2,
    title: "Sommes géométriques",
    difficulty: "Moyen",
    points: 4,
    enonce: "Calculer les sommes géométriques suivantes :",
    questions: [
      {
        question: "\\sum_{k=0}^{6} 2^k",
        solution: "\\frac{1-2^7}{1-2} = 2^7 - 1 = 127",
        explanation: "Somme géométrique de raison q=2, avec n=6 termes : \\frac{1-q^{n+1}}{1-q}"
      },
      {
        question: "\\sum_{k=2}^{5} 3^k",
        solution: "3^2 \\cdot \\frac{1-3^4}{1-3} = 9 \\cdot \\frac{80}{2} = 360",
        explanation: "Somme géométrique décalée : q^m \\cdot \\frac{1-q^{n-m+1}}{1-q} avec m=2, n=5, q=3"
      },
      {
        question: "\\sum_{k=0}^{n} \\left(\\frac{1}{2}\\right)^k",
        solution: "\\frac{1-(1/2)^{n+1}}{1-1/2} = 2\\left(1-\\frac{1}{2^{n+1}}\\right)",
        explanation: "Somme géométrique de raison q=1/2"
      }
    ]
  },
  {
    id: 3,
    title: "Changements d'indices",
    difficulty: "Moyen",
    points: 5,
    enonce: "Effectuer les changements d'indices demandés :",
    questions: [
      {
        question: "Réécrire \\sum_{k=2}^{8} (k+1)^2 avec l'indice j = k-1",
        solution: "\\sum_{j=1}^{7} (j+2)^2",
        explanation: "Si j = k-1, alors k = j+1. Quand k=2, j=1 et quand k=8, j=7"
      },
      {
        question: "Réécrire \\sum_{i=1}^{n} x_{i+2} avec l'indice m = i+2",
        solution: "\\sum_{m=3}^{n+2} x_m",
        explanation: "Si m = i+2, quand i=1, m=3 et quand i=n, m=n+2"
      },
      {
        question: "Réécrire \\sum_{k=0}^{n} x_{n-k} avec l'indice \\ell = n-k",
        solution: "\\sum_{\\ell=0}^{n} x_\\ell",
        explanation: "Si \\ell = n-k, quand k=0, \\ell=n et quand k=n, \\ell=0. L'ordre est inversé."
      }
    ]
  },
  {
    id: 4,
    title: "Sommes télescopiques",
    difficulty: "Moyen",
    points: 4,
    enonce: "Calculer les sommes télescopiques suivantes :",
    questions: [
      {
        question: "\\sum_{k=1}^{n} \\left(\\frac{1}{k} - \\frac{1}{k+1}\\right)",
        solution: "1 - \\frac{1}{n+1} = \\frac{n}{n+1}",
        explanation: "Somme télescopique : la plupart des termes s'annulent, il reste u_1 - u_{n+1}"
      },
      {
        question: "\\sum_{k=1}^{5} (k^2 - (k-1)^2)",
        solution: "5^2 - 0^2 = 25",
        explanation: "Forme télescopique : \\sum_{k=1}^n (u_{k+1} - u_k) = u_{n+1} - u_1"
      },
      {
        question: "\\sum_{k=2}^{n} \\left(\\sqrt{k} - \\sqrt{k-1}\\right)",
        solution: "\\sqrt{n} - \\sqrt{1} = \\sqrt{n} - 1",
        explanation: "Somme télescopique avec u_k = \\sqrt{k}"
      }
    ]
  },
  {
    id: 5,
    title: "Coefficients binomiaux",
    difficulty: "Difficile",
    points: 6,
    enonce: "Calculer et démontrer les relations suivantes :",
    questions: [
      {
        question: "Calculer \\binom{7}{3}",
        solution: "\\frac{7!}{3! \\cdot 4!} = \\frac{7 \\times 6 \\times 5}{3 \\times 2 \\times 1} = 35",
        explanation: "Application directe de la définition des coefficients binomiaux"
      },
      {
        question: "Vérifier que \\binom{6}{2} = \\binom{6}{4}",
        solution: "\\binom{6}{2} = 15 = \\binom{6}{4}",
        explanation: "Propriété de symétrie : \\binom{n}{k} = \\binom{n}{n-k}"
      },
      {
        question: "Démontrer que \\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}",
        solution: "Relation de Pascal (triangle de Pascal)",
        explanation: "Cette relation permet de construire le triangle de Pascal ligne par ligne"
      }
    ]
  },
  {
    id: 6,
    title: "Binôme de Newton",
    difficulty: "Difficile",
    points: 7,
    enonce: "Applications de la formule du binôme de Newton :",
    questions: [
      {
        question: "Développer (x+2)^4",
        solution: "x^4 + 8x^3 + 24x^2 + 32x + 16",
        explanation: "Application du binôme : \\sum_{k=0}^4 \\binom{4}{k} x^k 2^{4-k}"
      },
      {
        question: "Calculer \\sum_{k=0}^{5} \\binom{5}{k}",
        solution: "2^5 = 32",
        explanation: "En posant a=b=1 dans (a+b)^n, on obtient \\sum_{k=0}^n \\binom{n}{k} = 2^n"
      },
      {
        question: "Calculer \\sum_{k=0}^{4} (-1)^k \\binom{4}{k}",
        solution: "0",
        explanation: "En posant a=1, b=-1 dans (a+b)^n, on obtient \\sum_{k=0}^n (-1)^k \\binom{n}{k} = 0"
      }
    ]
  },
  {
    id: 7,
    title: "Produits et factorielles",
    difficulty: "Moyen",
    points: 4,
    enonce: "Calculer les produits suivants :",
    questions: [
      {
        question: "\\prod_{k=1}^{5} (2k+1)",
        solution: "3 \\times 5 \\times 7 \\times 9 \\times 11 = 10395",
        explanation: "Produit des premiers nombres impairs ≥ 3"
      },
      {
        question: "\\prod_{k=2}^{n} \\frac{k}{k-1}",
        solution: "\\frac{n}{1} = n",
        explanation: "Produit télescopique : \\frac{2}{1} \\cdot \\frac{3}{2} \\cdot \\frac{4}{3} \\cdots \\frac{n}{n-1}"
      },
      {
        question: "Simplifier \\frac{n!}{(n-3)!}",
        solution: "n(n-1)(n-2)",
        explanation: "\\frac{n!}{(n-3)!} = \\frac{n \\cdot (n-1) \\cdot (n-2) \\cdot (n-3)!}{(n-3)!}"
      }
    ]
  },
  {
    id: 8,
    title: "Problème de synthèse",
    difficulty: "Très difficile",
    points: 10,
    enonce: "Problème combinant plusieurs notions :",
    questions: [
      {
        question: "Démontrer que \\sum_{k=0}^{n} k \\binom{n}{k} = n \\cdot 2^{n-1}",
        solution: "Utiliser la propriété k\\binom{n}{k} = n\\binom{n-1}{k-1} et la formule du binôme",
        explanation: "\\sum_{k=0}^{n} k \\binom{n}{k} = n \\sum_{k=1}^{n} \\binom{n-1}{k-1} = n \\sum_{j=0}^{n-1} \\binom{n-1}{j} = n \\cdot 2^{n-1}"
      },
      {
        question: "Calculer \\sum_{k=0}^{n} \\binom{n}{k}^2",
        solution: "\\binom{2n}{n}",
        explanation: "Identité de Vandermonde : cette somme compte le nombre de façons de choisir n objets parmi 2n"
      },
      {
        question: "Prouver que \\left(\\sum_{k=1}^{n} k\\right)^2 = \\sum_{k=1}^{n} k^3",
        solution: "\\left(\\frac{n(n+1)}{2}\\right)^2 = \\sum_{k=1}^{n} k^3",
        explanation: "Les deux membres valent \\frac{n^2(n+1)^2}{4}"
      }
    ]
  }
];

const OteriaRecurrenceRecursiviteExercicesPage = () => {
  const [selectedExercise, setSelectedExercise] = useState(1);
  const [showSolutions, setShowSolutions] = useState({});

  const toggleSolution = (exerciseId, questionIndex) => {
    const key = `${exerciseId}-${questionIndex}`;
    setShowSolutions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const currentExercise = exercises.find(ex => ex.id === selectedExercise);

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case "Facile": return "bg-green-100 text-green-800";
      case "Moyen": return "bg-orange-100 text-orange-800";
      case "Difficile": return "bg-red-100 text-red-800";
      case "Très difficile": return "bg-purple-100 text-purple-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

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
            <span className="text-teal-600 font-medium">Chapitre 3 - Exercices</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <Target className="h-8 w-8 text-teal-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-teal-900">Chapitre 3 : Exercices - Sommes, produits et coefficients binomiaux</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Maîtrisez les techniques de calcul avec des exercices progressifs et détaillés
          </p>

          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/formation/oteria/recurrence-recursivite-cours">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <BookOpen className="h-4 w-4" />
                Cours
              </button>
            </Link>
            <Link to="/formation/oteria/recurrence-recursivite-flashcards">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <Calculator className="h-4 w-4" />
                Flashcards
              </button>
            </Link>
            <Link to="/formation/oteria/recurrence-recursivite-qcm">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <Zap className="h-4 w-4" />
                QCM
              </button>
            </Link>
            <Link to="/articles/oteria-cyber-school">
              <button className="inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Retour au programme
              </button>
            </Link>
          </div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-4 gap-8">
            {/* Liste des exercices */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-xl shadow-lg p-6 border border-blue-200 sticky top-24">
                <h3 className="text-lg font-semibold mb-4 text-teal-900">Exercices</h3>
                <div className="space-y-2">
                  {exercises.map((exercise) => (
                    <button
                      key={exercise.id}
                      onClick={() => setSelectedExercise(exercise.id)}
                      className={`w-full text-left p-3 rounded-lg transition-colors ${
                        selectedExercise === exercise.id
                          ? 'bg-teal-600 text-white'
                          : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
                      }`}
                    >
                      <div className="font-medium text-sm">Exercice {exercise.id}</div>
                      <div className="text-xs opacity-80">{exercise.title}</div>
                      <div className="flex items-center justify-between mt-1">
                        <span className={`text-xs px-2 py-1 rounded-full ${getDifficultyColor(exercise.difficulty)}`}>
                          {exercise.difficulty}
                        </span>
                        <span className="text-xs">{exercise.points} pts</span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Contenu de l'exercice */}
            <div className="lg:col-span-3">
              {currentExercise && (
                <Card className="bg-white shadow-lg border border-blue-200">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-xl text-teal-900">
                        Exercice {currentExercise.id} : {currentExercise.title}
                      </CardTitle>
                      <div className="flex items-center gap-2">
                        <span className={`text-sm px-3 py-1 rounded-full ${getDifficultyColor(currentExercise.difficulty)}`}>
                          {currentExercise.difficulty}
                        </span>
                        <span className="text-sm bg-teal-100 text-teal-800 px-3 py-1 rounded-full">
                          {currentExercise.points} points
                        </span>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-6">
                      <h4 className="font-semibold text-blue-900 mb-3">Énoncé :</h4>
                      <p className="text-blue-800">{currentExercise.enonce}</p>
                    </div>

                    <div className="space-y-6">
                      {currentExercise.questions.map((question, index) => (
                        <div key={index} className="border border-gray-200 rounded-lg p-4">
                          <div className="mb-3">
                            <h5 className="font-medium text-blue-900 mb-2">
                              Question {index + 1} :
                            </h5>
                            <div className="bg-blue-50 p-3 rounded-lg">
                              <LatexRenderer latex={question.question} block />
                            </div>
                          </div>

                          <Button
                            onClick={() => toggleSolution(currentExercise.id, index)}
                            variant="outline"
                            className="mb-3"
                          >
                            {showSolutions[`${currentExercise.id}-${index}`] ? (
                              <>
                                <CheckCircle className="h-4 w-4 mr-2" />
                                Masquer la solution
                              </>
                            ) : (
                              <>
                                <AlertCircle className="h-4 w-4 mr-2" />
                                Voir la solution
                              </>
                            )}
                          </Button>

                          {showSolutions[`${currentExercise.id}-${index}`] && (
                            <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                              <h6 className="font-medium text-green-900 mb-2">Solution :</h6>
                              <div className="mb-3">
                                <LatexRenderer latex={question.solution} block />
                              </div>
                              <h6 className="font-medium text-green-900 mb-2">Explication :</h6>
                              <p className="text-green-800">
                                <LatexRenderer latex={question.explanation} />
                              </p>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              )}
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center bg-blue-50 p-6 rounded-lg mt-8 max-w-6xl mx-auto">
          <Link to="/formation/oteria/recurrence-recursivite-cours">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              ← Retour au cours
            </button>
          </Link>
          <div className="flex gap-3">
            <Link to="/formation/oteria/recurrence-recursivite-flashcards">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <Calculator className="h-4 w-4" />
                Flashcards
              </button>
            </Link>
            <Link to="/formation/oteria/recurrence-recursivite-qcm">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <Zap className="h-4 w-4" />
                QCM
              </button>
            </Link>
          </div>
          <div className="text-blue-600 font-medium">Flashcards →</div>
        </div>
      </div>
    </div>
  );
};

export default OteriaRecurrenceRecursiviteExercicesPage;
