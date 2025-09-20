import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  Home,
  ChevronRight,
  ArrowLeft,
  BookOpen,
  Target,
  Zap,
  Code,
  CheckCircle,
  XCircle,
  RotateCcw,
  Trophy
} from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

const OteriaPythonBasesQCMPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);

  const questions: Question[] = [
    {
      id: 1,
      question: "Quel est le type de la variable x = 5 en Python ?",
      options: ["float", "str", "int", "bool"],
      correctAnswer: 2,
      explanation: "5 est un nombre entier, donc son type est int (integer).",
      category: "Types"
    },
    {
      id: 2,
      question: "Quelle opération représente le symbole // en Python ?",
      options: ["Division", "Modulo", "Division entière", "Puissance"],
      correctAnswer: 2,
      explanation: "// effectue une division entière (quotient sans reste).",
      category: "Opérateurs"
    },
    {
      id: 3,
      question: "Comment créer une liste vide en Python ?",
      options: ["L = ()", "L = {}", "L = []", "L = list()"],
      correctAnswer: 2,
      explanation: "[] crée une liste vide, et list() est également valide.",
      category: "Listes"
    },
    {
      id: 4,
      question: "Quelle est la syntaxe correcte pour une boucle for de 0 à 4 ?",
      options: ["for i in range(5):", "for i in range(0, 5):", "Les deux sont correctes", "Aucune des deux"],
      correctAnswer: 2,
      explanation: "range(5) et range(0, 5) donnent tous deux [0, 1, 2, 3, 4].",
      category: "Boucles"
    },
    {
      id: 5,
      question: "Quel mot-clé permet de sortir d'une boucle ?",
      options: ["exit", "stop", "break", "end"],
      correctAnswer: 2,
      explanation: "break permet de sortir immédiatement d'une boucle for ou while.",
      category: "Boucles"
    },
    {
      id: 6,
      question: "Quelle est la valeur de 17 % 6 ?",
      options: ["2", "3", "5", "11"],
      correctAnswer: 2,
      explanation: "17 ÷ 6 = 2*6 + 5, donc le reste (modulo) est 5.",
      category: "Opérateurs"
    },
    {
      id: 7,
      question: "Comment accéder au premier élément d'une liste L ?",
      options: ["L[1]", "L[0]", "L.first()", "L.get(0)"],
      correctAnswer: 1,
      explanation: "Les indices de liste commencent à 0 en Python.",
      category: "Listes"
    },
    {
      id: 8,
      question: "Quelle librairie est utilisée pour les calculs numériques avancés ?",
      options: ["random", "math", "numpy", "os"],
      correctAnswer: 2,
      explanation: "numpy (souvent importé comme np) est spécialisée dans les calculs vectoriels et matriciels.",
      category: "Librairies"
    },
    {
      id: 9,
      question: "Quelle est la syntaxe pour définir une fonction ?",
      options: ["function nom():", "def nom():", "create nom():", "func nom():"],
      correctAnswer: 1,
      explanation: "Les fonctions se définissent avec le mot-clé def suivi du nom et des parenthèses.",
      category: "Fonctions"
    },
    {
      id: 10,
      question: "Comment générer un nombre aléatoire entre 1 et 10 ?",
      options: ["random.randint(1, 10)", "rd.random(1, 10)", "random.choice(1, 10)", "rd.uniform(1, 10)"],
      correctAnswer: 0,
      explanation: "random.randint(a, b) génère un entier aléatoire entre a et b inclus.",
      category: "Librairies"
    },
    {
      id: 11,
      question: "Quelle condition teste si un nombre n est pair ?",
      options: ["n == 2", "n % 2 = 0", "n % 2 == 0", "n / 2 == 0"],
      correctAnswer: 2,
      explanation: "n % 2 == 0 vérifie que le reste de la division par 2 est nul.",
      category: "Conditions"
    },
    {
      id: 12,
      question: "Comment ajouter un élément à la fin d'une liste L ?",
      options: ["L.add(element)", "L.insert(element)", "L.append(element)", "L.push(element)"],
      correctAnswer: 2,
      explanation: "append() ajoute un élément à la fin de la liste.",
      category: "Listes"
    },
    {
      id: 13,
      question: "Quelle librairie est utilisée pour tracer des graphiques ?",
      options: ["plotly", "matplotlib", "seaborn", "bokeh"],
      correctAnswer: 1,
      explanation: "matplotlib (souvent importé comme plt) est la librairie standard pour les graphiques.",
      category: "Librairies"
    },
    {
      id: 14,
      question: "Quel est le résultat de 2 ** 4 ?",
      options: ["6", "8", "16", "24"],
      correctAnswer: 2,
      explanation: "2 ** 4 = 2⁴ = 16 (opérateur de puissance).",
      category: "Opérateurs"
    },
    {
      id: 15,
      question: "Comment créer une liste de compréhension pour les carrés de 0 à 4 ?",
      options: ["[x^2 for x in range(5)]", "[x**2 for x in range(5)]", "[pow(x, 2) for x in range(5)]", "Les trois sont correctes"],
      correctAnswer: 1,
      explanation: "[x**2 for x in range(5)] crée [0, 1, 4, 9, 16].",
      category: "Listes"
    },
    {
      id: 16,
      question: "Quelle boucle permet de répéter tant qu'une condition est vraie ?",
      options: ["for", "while", "repeat", "loop"],
      correctAnswer: 1,
      explanation: "while condition: répète tant que la condition est vraie.",
      category: "Boucles"
    },
    {
      id: 17,
      question: "Quel type représente les valeurs True/False ?",
      options: ["int", "float", "str", "bool"],
      correctAnswer: 3,
      explanation: "Le type bool représente les valeurs booléennes True et False.",
      category: "Types"
    },
    {
      id: 18,
      question: "Comment obtenir la longueur d'une liste L ?",
      options: ["L.size()", "L.length()", "len(L)", "L.count()"],
      correctAnswer: 2,
      explanation: "len(L) retourne le nombre d'éléments dans la liste L.",
      category: "Listes"
    },
    {
      id: 19,
      question: "Quelle librairie gère les données tabulaires comme Excel ?",
      options: ["numpy", "pandas", "scipy", "sympy"],
      correctAnswer: 1,
      explanation: "pandas (souvent importé comme pd) est spécialisée dans la manipulation de données tabulaires.",
      category: "Librairies"
    },
    {
      id: 20,
      question: "Quel opérateur compare deux valeurs pour l'égalité ?",
      options: ["=", "==", "!=", "==="],
      correctAnswer: 1,
      explanation: "== teste l'égalité, tandis que = est l'opérateur d'affectation.",
      category: "Opérateurs"
    }
  ];

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const handleFinish = () => {
    const finalScore = calculateScore();
    setScore(finalScore);
    setShowResults(true);
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setShowExplanation(false);
    setScore(0);
  };

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const isAnswered = selectedAnswers[currentQ.id] !== undefined;

  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100);
    const getGrade = (score: number) => {
      if (score >= 18) return { grade: "Excellent", color: "text-green-600" };
      if (score >= 15) return { grade: "Très bien", color: "text-blue-600" };
      if (score >= 12) return { grade: "Bien", color: "text-yellow-600" };
      if (score >= 10) return { grade: "Passable", color: "text-orange-600" };
      return { grade: "À retravailler", color: "text-red-600" };
    };

    const gradeInfo = getGrade(score);

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="container mx-auto py-8 px-4">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Résultats du QCM</h2>
                <p className="text-lg text-gray-600">Chapitre 2 - Bases de Python</p>
              </div>

              <div className="mb-8">
                <div className="text-6xl font-bold text-blue-600 mb-2">{score}/{questions.length}</div>
                <div className="text-2xl font-semibold text-gray-700 mb-2">{percentage}%</div>
                <div className={`text-xl font-medium ${gradeInfo.color}`}>
                  {gradeInfo.grade}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                {questions.map((question, index) => {
                  const userAnswer = selectedAnswers[question.id];
                  const isCorrect = userAnswer === question.correctAnswer;

                  return (
                    <div key={question.id} className={`p-4 rounded-lg border-l-4 ${isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'}`}>
                      <div className="flex items-center gap-3">
                        {isCorrect ? (
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        ) : (
                          <XCircle className="h-5 w-5 text-red-600" />
                        )}
                        <span className="font-medium">Question {index + 1}</span>
                        <Badge variant="outline" className="text-xs">
                          {question.category}
                        </Badge>
                      </div>
                      {!isCorrect && (
                        <div className="mt-2 text-sm text-gray-600">
                          Votre réponse : {question.options[userAnswer]}
                          <br />
                          Bonne réponse : {question.options[question.correctAnswer]}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-4 justify-center">
                <Button onClick={resetQuiz} className="flex items-center gap-2">
                  <RotateCcw className="h-4 w-4" />
                  Refaire le QCM
                </Button>
                <Link to="/formation/oteria/python-bases-flashcards">
                  <Button variant="outline" className="flex items-center gap-2">
                    <BookOpen className="h-4 w-4" />
                    Réviser avec les flashcards
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
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
            <span className="text-teal-600 font-medium">Chapitre 2 - QCM</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <Zap className="h-8 w-8 text-teal-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-teal-900">Chapitre 2 : QCM - Bases de Python</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Testez vos connaissances sur les bases de Python avec ce QCM interactif
          </p>

          {/* Informations de QCM */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Chapitre</span>
                  <span className="text-2xl font-bold text-blue-900">2</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Questions</span>
                  <span className="text-2xl font-bold text-blue-900">20</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Progression</span>
                  <span className="text-2xl font-bold text-blue-900">{currentQuestion + 1}/20</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Niveau</span>
                  <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    🟢 Débutant
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Barre de progression */}
          <div className="max-w-2xl mx-auto mb-6">
            <Progress value={progress} className="h-2" />
            <div className="text-center mt-2 text-sm text-gray-600">
              {currentQuestion + 1} sur {questions.length} questions
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="max-w-2xl mx-auto mb-8">
          <Card className="shadow-lg border border-blue-200">
            <CardContent className="p-6">
              <div className="mb-4">
                <Badge className="mb-3" variant="outline">
                  {currentQ.category}
                </Badge>
                <h3 className="text-xl font-bold text-gray-900 leading-relaxed">
                  {currentQ.question}
                </h3>
              </div>

              <div className="space-y-3">
                {currentQ.options.map((option, index) => {
                  const isSelected = selectedAnswers[currentQ.id] === index;
                  const isCorrect = index === currentQ.correctAnswer;
                  const showCorrect = showExplanation && isCorrect;
                  const showIncorrect = showExplanation && isSelected && !isCorrect;

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(currentQ.id, index)}
                      disabled={showExplanation}
                      className={`w-full p-4 text-left rounded-lg border transition-all ${
                        showCorrect
                          ? 'border-green-500 bg-green-50 text-green-800'
                          : showIncorrect
                          ? 'border-red-500 bg-red-50 text-red-800'
                          : isSelected
                          ? 'border-blue-500 bg-blue-50 text-blue-800'
                          : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                      }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                          showCorrect
                            ? 'border-green-500 bg-green-500'
                            : showIncorrect
                            ? 'border-red-500 bg-red-500'
                            : isSelected
                            ? 'border-blue-500 bg-blue-500'
                            : 'border-gray-400'
                        }`}>
                          {(showCorrect || (isSelected && !showIncorrect)) && (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          )}
                        </div>
                        <span className="font-medium">{option}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {showExplanation && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-900 mb-2">Explication :</h4>
                  <p className="text-blue-800">{currentQ.explanation}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center">
            <Button
              onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
              disabled={currentQuestion === 0}
              variant="outline"
            >
              ← Précédent
            </Button>

            <div className="flex gap-3">
              {!showExplanation && isAnswered && (
                <Button
                  onClick={() => setShowExplanation(true)}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="h-4 w-4" />
                  Vérifier
                </Button>
              )}

              {showExplanation && currentQuestion < questions.length - 1 && (
                <Button
                  onClick={() => {
                    setCurrentQuestion(prev => prev + 1);
                    setShowExplanation(false);
                  }}
                  className="flex items-center gap-2"
                >
                  Suivant
                  <ChevronRight className="h-4 w-4" />
                </Button>
              )}

              {showExplanation && currentQuestion === questions.length - 1 && (
                <Button
                  onClick={handleFinish}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                >
                  <Trophy className="h-4 w-4" />
                  Terminer le QCM
                </Button>
              )}
            </div>

            <Button
              onClick={() => setCurrentQuestion(prev => Math.min(questions.length - 1, prev + 1))}
              disabled={currentQuestion === questions.length - 1}
              variant="outline"
            >
              Suivant →
            </Button>
          </div>
        </div>

        {/* Navigation finale */}
        <div className="flex justify-between items-center bg-blue-50 p-6 rounded-lg mt-8">
          <Link to="/formation/oteria/logique-fondamentale-qcm">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              ← Chapitre 1
            </button>
          </Link>
          <div className="flex gap-3">
            <Link to="/formation/oteria/python-bases-cours">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <BookOpen className="h-4 w-4" />
                Cours
              </button>
            </Link>
            <Link to="/formation/oteria/python-bases-exercices">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <Target className="h-4 w-4" />
                Exercices
              </button>
            </Link>
            <Link to="/formation/oteria/python-bases-flashcards">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <Target className="h-4 w-4" />
                Flashcards
              </button>
            </Link>
            <Link to="/articles/oteria-cyber-school">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Retour au programme
              </button>
            </Link>
          </div>
          <div className="text-blue-600 font-medium">Chapitre suivant →</div>
        </div>
      </div>
    </div>
  );
};

export default OteriaPythonBasesQCMPage;
