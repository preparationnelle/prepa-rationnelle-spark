import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, BookOpen, Target, Calculator, CheckCircle, XCircle, RotateCcw, Trophy, Clock } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const questions = [
  {
    id: 1,
    category: "Sommes de base",
    difficulty: "Facile",
    question: "Quelle est la valeur de \\sum_{k=1}^{10} k ?",
    options: [
      { id: "A", text: "45", latex: "45" },
      { id: "B", text: "55", latex: "55" },
      { id: "C", text: "65", latex: "65" },
      { id: "D", text: "100", latex: "100" }
    ],
    correct: "B",
    explanation: "On utilise la formule \\sum_{k=1}^n k = \\frac{n(n+1)}{2} avec n=10 : \\frac{10 \\times 11}{2} = 55"
  },
  {
    id: 2,
    category: "Sommes de base",
    difficulty: "Moyen",
    question: "Combien vaut \\sum_{k=1}^{5} k^2 ?",
    options: [
      { id: "A", text: "25", latex: "25" },
      { id: "B", text: "40", latex: "40" },
      { id: "C", text: "55", latex: "55" },
      { id: "D", text: "75", latex: "75" }
    ],
    correct: "C",
    explanation: "Formule : \\sum_{k=1}^n k^2 = \\frac{n(n+1)(2n+1)}{6}. Pour n=5 : \\frac{5 \\times 6 \\times 11}{6} = 55"
  },
  {
    id: 3,
    category: "Sommes géométriques",
    difficulty: "Moyen",
    question: "Quelle est la valeur de \\sum_{k=0}^{4} 2^k ?",
    options: [
      { id: "A", text: "15", latex: "15" },
      { id: "B", text: "30", latex: "30" },
      { id: "C", text: "31", latex: "31" },
      { id: "D", text: "32", latex: "32" }
    ],
    correct: "C",
    explanation: "Somme géométrique : \\frac{1-2^5}{1-2} = \\frac{1-32}{-1} = 31"
  },
  {
    id: 4,
    category: "Changement d'indice",
    difficulty: "Moyen",
    question: "Si on pose j = k+2, comment réécrire \\sum_{k=1}^{n} x_k ?",
    options: [
      { id: "A", text: "\\sum_{j=3}^{n+2} x_{j-2}", latex: "\\sum_{j=3}^{n+2} x_{j-2}" },
      { id: "B", text: "\\sum_{j=2}^{n+1} x_{j-2}", latex: "\\sum_{j=2}^{n+1} x_{j-2}" },
      { id: "C", text: "\\sum_{j=1}^{n} x_{j+2}", latex: "\\sum_{j=1}^{n} x_{j+2}" },
      { id: "D", text: "\\sum_{j=0}^{n-1} x_{j+2}", latex: "\\sum_{j=0}^{n-1} x_{j+2}" }
    ],
    correct: "A",
    explanation: "Si j = k+2, alors k = j-2. Quand k=1, j=3 et quand k=n, j=n+2"
  },
  {
    id: 5,
    category: "Sommes télescopiques",
    difficulty: "Difficile",
    question: "Combien vaut \\sum_{k=1}^{n} \\left(\\frac{1}{k} - \\frac{1}{k+1}\\right) ?",
    options: [
      { id: "A", text: "\\frac{1}{n+1}", latex: "\\frac{1}{n+1}" },
      { id: "B", text: "1 - \\frac{1}{n+1}", latex: "1 - \\frac{1}{n+1}" },
      { id: "C", text: "\\frac{n}{n+1}", latex: "\\frac{n}{n+1}" },
      { id: "D", text: "1", latex: "1" }
    ],
    correct: "C",
    explanation: "Somme télescopique : 1 - \\frac{1}{n+1} = \\frac{n+1-1}{n+1} = \\frac{n}{n+1}"
  },
  {
    id: 6,
    category: "Coefficients binomiaux",
    difficulty: "Facile",
    question: "Combien vaut \\binom{5}{2} ?",
    options: [
      { id: "A", text: "5", latex: "5" },
      { id: "B", text: "10", latex: "10" },
      { id: "C", text: "15", latex: "15" },
      { id: "D", text: "20", latex: "20" }
    ],
    correct: "B",
    explanation: "\\binom{5}{2} = \\frac{5!}{2! \\cdot 3!} = \\frac{5 \\times 4}{2 \\times 1} = 10"
  },
  {
    id: 7,
    category: "Coefficients binomiaux",
    difficulty: "Moyen",
    question: "Quelle propriété vérifie \\binom{n}{k} ?",
    options: [
      { id: "A", text: "\\binom{n}{k} = \\binom{n}{n-k}", latex: "\\binom{n}{k} = \\binom{n}{n-k}" },
      { id: "B", text: "\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}", latex: "\\binom{n}{k} = \\binom{n-1}{k-1} + \\binom{n-1}{k}" },
      { id: "C", text: "k\\binom{n}{k} = n\\binom{n-1}{k-1}", latex: "k\\binom{n}{k} = n\\binom{n-1}{k-1}" },
      { id: "D", text: "Toutes les réponses", latex: "\\text{Toutes les réponses}" }
    ],
    correct: "D",
    explanation: "Toutes ces propriétés sont vraies : symétrie, relation de Pascal, et propriété multiplicative"
  },
  {
    id: 8,
    category: "Binôme de Newton",
    difficulty: "Moyen",
    question: "Dans le développement de (x+1)^4, quel est le coefficient de x^2 ?",
    options: [
      { id: "A", text: "4", latex: "4" },
      { id: "B", text: "6", latex: "6" },
      { id: "C", text: "8", latex: "8" },
      { id: "D", text: "12", latex: "12" }
    ],
    correct: "B",
    explanation: "Le coefficient de x^2 est \\binom{4}{2} = 6"
  },
  {
    id: 9,
    category: "Binôme de Newton",
    difficulty: "Difficile",
    question: "Combien vaut \\sum_{k=0}^{n} (-1)^k \\binom{n}{k} pour n \\geq 1 ?",
    options: [
      { id: "A", text: "0", latex: "0" },
      { id: "B", text: "1", latex: "1" },
      { id: "C", text: "2^n", latex: "2^n" },
      { id: "D", text: "n", latex: "n" }
    ],
    correct: "A",
    explanation: "C'est (1-1)^n = 0^n = 0 pour n \\geq 1"
  },
  {
    id: 10,
    category: "Produits",
    difficulty: "Moyen",
    question: "Combien vaut \\prod_{k=2}^{n} \\frac{k}{k-1} ?",
    options: [
      { id: "A", text: "n!", latex: "n!" },
      { id: "B", text: "n", latex: "n" },
      { id: "C", text: "\\frac{n!}{1!}", latex: "\\frac{n!}{1!}" },
      { id: "D", text: "\\frac{n}{2}", latex: "\\frac{n}{2}" }
    ],
    correct: "B",
    explanation: "Produit télescopique : \\frac{2}{1} \\cdot \\frac{3}{2} \\cdot \\frac{4}{3} \\cdots \\frac{n}{n-1} = n"
  },
  {
    id: 11,
    category: "Applications",
    difficulty: "Difficile",
    question: "Que vaut \\sum_{k=0}^{n} k \\binom{n}{k} ?",
    options: [
      { id: "A", text: "n \\cdot 2^n", latex: "n \\cdot 2^n" },
      { id: "B", text: "n \\cdot 2^{n-1}", latex: "n \\cdot 2^{n-1}" },
      { id: "C", text: "2^n", latex: "2^n" },
      { id: "D", text: "n!", latex: "n!" }
    ],
    correct: "B",
    explanation: "En utilisant k\\binom{n}{k} = n\\binom{n-1}{k-1}, on obtient n \\cdot 2^{n-1}"
  },
  {
    id: 12,
    category: "Sommes doubles",
    difficulty: "Difficile",
    question: "Combien vaut \\left(\\sum_{k=1}^{n} k\\right)^2 ?",
    options: [
      { id: "A", text: "\\sum_{k=1}^{n} k^2", latex: "\\sum_{k=1}^{n} k^2" },
      { id: "B", text: "\\sum_{k=1}^{n} k^3", latex: "\\sum_{k=1}^{n} k^3" },
      { id: "C", text: "\\frac{n^2(n+1)^2}{4}", latex: "\\frac{n^2(n+1)^2}{4}" },
      { id: "D", text: "B et C", latex: "\\text{B et C}" }
    ],
    correct: "D",
    explanation: "Les deux expressions sont égales : \\left(\\frac{n(n+1)}{2}\\right)^2 = \\sum_{k=1}^{n} k^3"
  }
];

const OteriaRecurrenceRecursiviteQCMPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [timeLeft, setTimeLeft] = useState(1800); // 30 minutes
  const [quizStarted, setQuizStarted] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");

  const categories = [...new Set(questions.map(q => q.category))];
  
  const filteredQuestions = selectedCategory === "all" 
    ? questions
    : questions.filter(q => q.category === selectedCategory);

  useEffect(() => {
    let timer;
    if (quizStarted && timeLeft > 0 && !showResults) {
      timer = setInterval(() => {
        setTimeLeft(prev => {
          if (prev <= 1) {
            setShowResults(true);
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(timer);
  }, [quizStarted, timeLeft, showResults]);

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const startQuiz = () => {
    setQuizStarted(true);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setTimeLeft(1800);
  };

  const selectAnswer = (questionId, answerId) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerId
    }));
  };

  const nextQuestion = () => {
    if (currentQuestion < filteredQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const finishQuiz = () => {
    setShowResults(true);
  };

  const resetQuiz = () => {
    setQuizStarted(false);
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setTimeLeft(1800);
  };

  const calculateScore = () => {
    const answered = Object.keys(selectedAnswers).length;
    const correct = filteredQuestions.filter(q => selectedAnswers[q.id] === q.correct).length;
    return { answered, correct, total: filteredQuestions.length };
  };

  const getScoreColor = (percentage) => {
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-orange-600";
    return "text-red-600";
  };

  if (!quizStarted) {
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
              <span className="text-teal-600 font-medium">Chapitre 3 - QCM</span>
            </div>
          </div>
        </nav>

        <div className="container mx-auto py-8 px-4">
          <div className="max-w-2xl mx-auto text-center">
            <div className="flex justify-center mb-6">
              <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center">
                <Trophy className="h-10 w-10 text-teal-600" />
              </div>
            </div>
            
            <h1 className="text-3xl font-bold mb-4 text-teal-900">QCM - Sommes, produits et coefficients binomiaux</h1>
            <p className="text-lg text-gray-600 mb-8">Testez vos connaissances avec ce quiz interactif</p>

            <Card className="bg-white shadow-lg border border-blue-200 mb-8">
              <CardHeader>
                <CardTitle className="text-xl text-teal-900">Configuration du quiz</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Sélectionner la catégorie</label>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                    >
                      <option value="all">Toutes les catégories ({questions.length} questions)</option>
                      {categories.map(category => (
                        <option key={category} value={category}>
                          {category} ({questions.filter(q => q.category === category).length} questions)
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="bg-blue-50 p-4 rounded-lg">
                    <h3 className="font-semibold text-blue-900 mb-2">Informations du quiz :</h3>
                    <ul className="text-sm text-blue-800 space-y-1">
                      <li>• {filteredQuestions.length} questions au total</li>
                      <li>• Durée : 30 minutes</li>
                      <li>• Questions à choix multiples</li>
                      <li>• Vous pouvez revenir sur vos réponses</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex gap-4 justify-center">
              <Button onClick={startQuiz} size="lg" className="bg-teal-600 hover:bg-teal-700">
                Commencer le quiz
              </Button>
              <Link to="/articles/oteria-cyber-school">
                <Button variant="outline" size="lg">
                  <ArrowLeft className="h-4 w-4 mr-2" />
                  Retour au programme
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (showResults) {
    const { answered, correct, total } = calculateScore();
    const percentage = Math.round((correct / total) * 100);

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
              <span className="text-teal-600 font-medium">Résultats QCM</span>
            </div>
          </div>
        </nav>

        <div className="container mx-auto py-8 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                <div className="w-20 h-20 bg-teal-100 rounded-full flex items-center justify-center">
                  <Trophy className="h-10 w-10 text-teal-600" />
                </div>
              </div>
              <h1 className="text-3xl font-bold mb-4 text-teal-900">Résultats du QCM</h1>
              
              <Card className="bg-white shadow-lg border border-blue-200 mb-8">
                <CardContent className="p-8">
                  <div className="text-center mb-6">
                    <div className={`text-6xl font-bold mb-2 ${getScoreColor(percentage)}`}>
                      {percentage}%
                    </div>
                    <p className="text-lg text-gray-600">
                      {correct} bonnes réponses sur {total} questions
                    </p>
                    <p className="text-sm text-gray-500">
                      Questions répondues : {answered}/{total}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-3 gap-4 mb-6">
                    <div className="bg-green-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-green-600">{correct}</div>
                      <div className="text-sm text-green-800">Correctes</div>
                    </div>
                    <div className="bg-red-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-red-600">{answered - correct}</div>
                      <div className="text-sm text-red-800">Incorrectes</div>
                    </div>
                    <div className="bg-gray-50 p-4 rounded-lg text-center">
                      <div className="text-2xl font-bold text-gray-600">{total - answered}</div>
                      <div className="text-sm text-gray-800">Non répondues</div>
                    </div>
                  </div>

                  <div className="flex gap-4 justify-center">
                    <Button onClick={resetQuiz} className="bg-teal-600 hover:bg-teal-700">
                      <RotateCcw className="h-4 w-4 mr-2" />
                      Recommencer
                    </Button>
                    <Link to="/formation/oteria/recurrence-recursivite-cours">
                      <Button variant="outline">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Revoir le cours
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Correction détaillée */}
            <div className="space-y-4">
              <h2 className="text-2xl font-bold text-teal-900 mb-4">Correction détaillée</h2>
              {filteredQuestions.map((question, index) => {
                const userAnswer = selectedAnswers[question.id];
                const isCorrect = userAnswer === question.correct;
                const wasAnswered = userAnswer !== undefined;

                return (
                  <Card key={question.id} className={`border-2 ${
                    !wasAnswered ? 'border-gray-300' : 
                    isCorrect ? 'border-green-300 bg-green-50' : 'border-red-300 bg-red-50'
                  }`}>
                    <CardHeader>
                      <div className="flex items-center justify-between">
                        <CardTitle className="text-lg">Question {index + 1}</CardTitle>
                        <div className="flex items-center gap-2">
                          {!wasAnswered ? (
                            <span className="text-gray-500 text-sm">Non répondue</span>
                          ) : isCorrect ? (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-600" />
                          )}
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="mb-4">
                        <LatexRenderer latex={question.question} />
                      </div>
                      
                      <div className="space-y-2 mb-4">
                        {question.options.map((option) => {
                          const isUserChoice = userAnswer === option.id;
                          const isCorrectChoice = option.id === question.correct;
                          
                          return (
                            <div key={option.id} className={`p-3 rounded-lg border ${
                              isCorrectChoice ? 'bg-green-100 border-green-300' :
                              isUserChoice && !isCorrectChoice ? 'bg-red-100 border-red-300' :
                              'bg-gray-50 border-gray-200'
                            }`}>
                              <div className="flex items-center gap-2">
                                <span className="font-bold">{option.id}.</span>
                                <LatexRenderer latex={option.latex} />
                                {isCorrectChoice && <CheckCircle className="h-4 w-4 text-green-600 ml-auto" />}
                                {isUserChoice && !isCorrectChoice && <XCircle className="h-4 w-4 text-red-600 ml-auto" />}
                              </div>
                            </div>
                          );
                        })}
                      </div>

                      <div className="bg-blue-50 p-4 rounded-lg">
                        <h4 className="font-semibold text-blue-900 mb-2">Explication :</h4>
                        <LatexRenderer latex={question.explanation} />
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = filteredQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / filteredQuestions.length) * 100;

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
            <span className="text-teal-600 font-medium">QCM en cours</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header avec timer et progression */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-blue-200">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-teal-600" />
                <span className="text-lg font-semibold text-teal-900">
                  Temps restant : {formatTime(timeLeft)}
                </span>
              </div>
              <div className="text-right">
                <div className="text-sm text-gray-600">Question {currentQuestion + 1} sur {filteredQuestions.length}</div>
                <div className="text-sm text-gray-600">
                  Répondues : {Object.keys(selectedAnswers).length}/{filteredQuestions.length}
                </div>
              </div>
            </div>
            <Progress value={progress} className="h-2" />
          </div>

          {/* Question */}
          <Card className="bg-white shadow-lg border border-blue-200 mb-8">
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl text-teal-900">
                  Question {currentQuestion + 1}
                </CardTitle>
                <div className="flex gap-2">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                    {currentQ.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    currentQ.difficulty === 'Facile' ? 'bg-green-100 text-green-800' :
                    currentQ.difficulty === 'Moyen' ? 'bg-orange-100 text-orange-800' :
                    'bg-red-100 text-red-800'
                  }`}>
                    {currentQ.difficulty}
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="mb-6">
                <LatexRenderer latex={currentQ.question} />
              </div>

              <div className="space-y-3">
                {currentQ.options.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => selectAnswer(currentQ.id, option.id)}
                    className={`w-full p-4 text-left rounded-lg border-2 transition-colors ${
                      selectedAnswers[currentQ.id] === option.id
                        ? 'border-teal-500 bg-teal-50'
                        : 'border-gray-200 hover:border-teal-300 hover:bg-teal-50'
                    }`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="font-bold text-teal-900">{option.id}.</span>
                      <LatexRenderer latex={option.latex} />
                    </div>
                  </button>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Navigation */}
          <div className="flex items-center justify-between bg-white rounded-xl shadow-lg p-6 border border-blue-200">
            <Button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              variant="outline"
            >
              ← Précédent
            </Button>

            <div className="flex gap-3">
              {currentQuestion === filteredQuestions.length - 1 ? (
                <Button onClick={finishQuiz} className="bg-teal-600 hover:bg-teal-700">
                  Terminer le quiz
                </Button>
              ) : (
                <Button
                  onClick={nextQuestion}
                  disabled={currentQuestion === filteredQuestions.length - 1}
                  className="bg-teal-600 hover:bg-teal-700"
                >
                  Suivant →
                </Button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OteriaRecurrenceRecursiviteQCMPage;
