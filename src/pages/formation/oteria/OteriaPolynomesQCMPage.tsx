import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import {
  Home,
  ChevronRight,
  ArrowLeft,
  BookOpen,
  Target,
  Zap,
  Calculator,
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

const OteriaPolynomesQCMPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [score, setScore] = useState(0);
  const { currentUser } = useAuth();
  const [saveMessage, setSaveMessage] = useState('');
  const [isSaving, setIsSaving] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: "Quel est le degré du polynôme P(x) = 3x⁵ - 2x³ + x² - 7 ?",
      options: ["3", "5", "7", "2"],
      correctAnswer: 1,
      explanation: "Le degré d'un polynôme est la plus grande puissance de x dont le coefficient est non nul. Ici, c'est 5.",
      category: "Définitions"
    },
    {
      id: 2,
      question: "Un nombre r est une racine du polynôme P si :",
      options: ["P(r) = 1", "P(r) = 0", "P'(r) = 0", "P(r) > 0"],
      correctAnswer: 1,
      explanation: "Par définition, r est une racine de P si et seulement si P(r) = 0.",
      category: "Racines"
    },
    {
      id: 3,
      question: "Quel est le degré du polynôme nul ?",
      options: ["0", "1", "-∞", "Indéfini"],
      correctAnswer: 2,
      explanation: "Par convention, le degré du polynôme nul est -∞ car tous ses coefficients sont nuls.",
      category: "Définitions"
    },
    {
      id: 4,
      question: "Si P est de degré 3 et Q est de degré 2, quel est le degré de P×Q ?",
      options: ["5", "6", "3", "2"],
      correctAnswer: 0,
      explanation: "Le degré d'un produit de polynômes est la somme des degrés : deg(P×Q) = 3 + 2 = 5.",
      category: "Opérations"
    },
    {
      id: 5,
      question: "Dans la division euclidienne P = D×Q + R, quelle condition vérifie le reste R ?",
      options: ["deg(R) = deg(D)", "deg(R) > deg(D)", "deg(R) < deg(D) ou R = 0", "R = 0 toujours"],
      correctAnswer: 2,
      explanation: "Dans la division euclidienne, le reste R vérifie soit R = 0, soit deg(R) < deg(D).",
      category: "Division euclidienne"
    },
    {
      id: 6,
      question: "Un polynôme de degré 3 peut avoir au maximum combien de racines réelles ?",
      options: ["1", "2", "3", "Infiniment"],
      correctAnswer: 2,
      explanation: "Un polynôme de degré n peut avoir au maximum n racines distinctes dans ℝ. Pour degré 3, c'est 3 racines.",
      category: "Racines"
    },
    {
      id: 7,
      question: "Quelle est la condition nécessaire pour appliquer la dichotomie à f sur [a,b] ?",
      options: ["f continue et f(a)×f(b) < 0", "f dérivable", "f strictement croissante", "f polynomiale"],
      correctAnswer: 0,
      explanation: "La dichotomie nécessite que f soit continue sur [a,b] et que f(a) et f(b) soient de signes opposés.",
      category: "Dichotomie"
    },
    {
      id: 8,
      question: "À chaque itération de la dichotomie, la taille de l'intervalle est :",
      options: ["Multipliée par 2", "Divisée par 2", "Réduite de 1", "Constante"],
      correctAnswer: 1,
      explanation: "À chaque itération, on divise l'intervalle en deux parties égales, donc la taille est divisée par 2.",
      category: "Dichotomie"
    },
    {
      id: 9,
      question: "Après n itérations de dichotomie sur [a,b], la largeur de l'intervalle est :",
      options: ["(b-a)/n", "(b-a)/2ⁿ", "(b-a)/2n", "2ⁿ(b-a)"],
      correctAnswer: 1,
      explanation: "Après n itérations, la largeur est divisée par 2ⁿ : |bₙ - aₙ| = (b-a)/2ⁿ.",
      category: "Dichotomie"
    },
    {
      id: 10,
      question: "Si (x-2)² divise P(x), quelle est la multiplicité de la racine 2 ?",
      options: ["0", "1", "2", "3"],
      correctAnswer: 2,
      explanation: "La multiplicité d'une racine r est l'exposant k tel que (x-r)ᵏ divise P. Ici k = 2.",
      category: "Racines"
    },
    {
      id: 11,
      question: "En Python, quelle condition teste si f(a) et f(b) sont de signes opposés ?",
      options: ["f(a) != f(b)", "f(a) * f(b) < 0", "f(a) + f(b) < 0", "f(a) < 0 and f(b) > 0"],
      correctAnswer: 1,
      explanation: "Le produit f(a) × f(b) est négatif si et seulement si f(a) et f(b) ont des signes opposés.",
      category: "Python"
    },
    {
      id: 12,
      question: "Dans l'algorithme de dichotomie en Python, comment calcule-t-on le milieu c ?",
      options: ["c = a + b", "c = (a + b) / 2", "c = (a - b) / 2", "c = a * b / 2"],
      correctAnswer: 1,
      explanation: "Le milieu de l'intervalle [a,b] est la moyenne arithmétique : c = (a + b) / 2.",
      category: "Python"
    },
    {
      id: 13,
      question: "Le théorème des valeurs intermédiaires garantit qu'une fonction continue sur [a,b] avec f(a) < 0 et f(b) > 0 :",
      options: ["N'a pas de racines", "A exactement une racine", "A au moins une racine", "A plusieurs racines"],
      correctAnswer: 2,
      explanation: "Le TVI garantit l'existence d'au moins une racine, mais pas l'unicité.",
      category: "Théorie"
    },
    {
      id: 14,
      question: "Quel est l'avantage principal de la méthode de dichotomie ?",
      options: ["Convergence rapide", "Convergence garantie", "Ne nécessite pas de continuité", "Trouve toutes les racines"],
      correctAnswer: 1,
      explanation: "La dichotomie garantit la convergence vers une racine si les hypothèses sont vérifiées.",
      category: "Dichotomie"
    },
    {
      id: 15,
      question: "Pour atteindre une précision ε = 10⁻⁶ sur [0,1], combien d'itérations faut-il environ ?",
      options: ["6", "12", "20", "100"],
      correctAnswer: 2,
      explanation: "n ≈ log₂((b-a)/ε) = log₂(10⁶) ≈ 20 itérations.",
      category: "Dichotomie"
    },
    {
      id: 16,
      question: "Dans la méthode de Babylone pour calculer √a, quelle est la formule de récurrence ?",
      options: ["uₙ₊₁ = uₙ + a", "uₙ₊₁ = (uₙ + a/uₙ)/2", "uₙ₊₁ = uₙ²/a", "uₙ₊₁ = a/uₙ"],
      correctAnswer: 1,
      explanation: "La méthode de Babylone utilise la formule uₙ₊₁ = (uₙ + a/uₙ)/2 pour converger vers √a.",
      category: "Applications"
    },
    {
      id: 17,
      question: "Combien de racines réelles a le polynôme P(x) = x² + 1 ?",
      options: ["0", "1", "2", "Infiniment"],
      correctAnswer: 0,
      explanation: "x² + 1 > 0 pour tout x réel, donc ce polynôme n'a pas de racines réelles (mais 2 racines complexes).",
      category: "Racines"
    },
    {
      id: 18,
      question: "En Python, quelle boucle utilise-t-on généralement pour la dichotomie ?",
      options: ["for i in range(n)", "while condition", "do...while", "foreach"],
      correctAnswer: 1,
      explanation: "On utilise while (b - a) > precision pour continuer tant que la précision n'est pas atteinte.",
      category: "Python"
    },
    {
      id: 19,
      question: "Si P(x) = (x-1)(x+2)(x-3), quelles sont les racines de P ?",
      options: ["1, 2, 3", "-1, 2, -3", "1, -2, 3", "-1, -2, -3"],
      correctAnswer: 2,
      explanation: "Les racines sont les valeurs qui annulent chaque facteur : x=1, x=-2 et x=3.",
      category: "Racines"
    },
    {
      id: 20,
      question: "Quel est le principal inconvénient de la dichotomie par rapport à la méthode de Newton ?",
      options: ["Ne converge pas toujours", "Convergence lente", "Difficile à programmer", "Nécessite la dérivée"],
      correctAnswer: 1,
      explanation: "La dichotomie converge lentement (linéairement) comparée à Newton (quadratique), mais elle est plus robuste.",
      category: "Dichotomie"
    }
  ];

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answerIndex
    });
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const handleFinish = async () => {
    const finalScore = calculateScore();
    setScore(finalScore);
    setShowResults(true);

    if (currentUser) {
      setIsSaving(true);
      const percentage = Math.round((finalScore / questions.length) * 100);

      try {
        const { error } = await supabase
          .from('qcm_results')
          .insert({
            user_id: currentUser.id,
            qcm_id: 'oteria-polynomes',
            title: 'Polynômes & Dichotomie - QCM',
            score: percentage,
            total_questions: questions.length,
            correct_answers: finalScore
          });

        if (error) throw error;
        setSaveMessage('Résultat enregistré dans votre dashboard !');
      } catch (error) {
        console.error('Erreur sauvegarde:', error);
        setSaveMessage('Erreur lors de la sauvegarde.');
      } finally {
        setIsSaving(false);
      }
    }
  };

  const resetQCM = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setScore(0);
  };

  const currentQ = questions[currentQuestion];
  const progressPercentage = (Object.keys(selectedAnswers).length / questions.length) * 100;

  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100);
    const getScoreColor = () => {
      if (percentage >= 80) return 'text-green-600';
      if (percentage >= 60) return 'text-blue-600';
      if (percentage >= 40) return 'text-orange-600';
      return 'text-red-600';
    };

    return (
      <div className="min-h-screen bg-white">
        {/* Fil d'Ariane */}
        <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
          <div className="container mx-auto px-4 py-2">
            <div className="flex items-center text-xs text-blue-600">
              <Link to="/" className="flex items-center gap-1 hover:text-blue-700 transition-colors">
                <Home className="h-3 w-3" />
                <span>Accueil</span>
              </Link>
              <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
              <Link to="/articles" className="hover:text-blue-700 transition-colors">
                Niveau
              </Link>
              <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
              <Link to="/articles/oteria-cyber-school" className="hover:text-blue-700 transition-colors">
                OTERIA Cyber School
              </Link>
              <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
              <span className="text-blue-600 font-medium">Séance 6 - QCM</span>
            </div>
          </div>
        </nav>

        <div className="container mx-auto py-12 px-4">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-2xl">
              <CardContent className="p-8">
                <div className="text-center">
                  <div className="flex justify-center mb-6">
                    <div className={`w-24 h-24 rounded-full flex items-center justify-center ${percentage >= 80 ? 'bg-green-100' : percentage >= 60 ? 'bg-blue-100' : percentage >= 40 ? 'bg-orange-100' : 'bg-red-100'
                      }`}>
                      <Trophy className={`h-12 w-12 ${getScoreColor()}`} />
                    </div>
                  </div>

                  <h2 className="text-3xl font-bold text-blue-900 mb-4">QCM Terminé !</h2>

                  <div className="mb-8">
                    <div className={`text-6xl font-bold ${getScoreColor()} mb-2`}>
                      {score}/{questions.length}
                    </div>
                    <div className={`text-2xl ${getScoreColor()}`}>
                      {percentage}%
                    </div>
                  </div>
                  {saveMessage && (
                    <div className={`text-center mt-4 font-medium ${saveMessage.includes('Erreur') ? 'text-red-600' : 'text-green-600'}`}>
                      {saveMessage}
                    </div>
                  )}
                </div>

                <div className="space-y-4 text-left mb-8">
                  <div className="flex items-center justify-between p-4 bg-green-50 rounded-lg">
                    <span className="text-green-800 font-medium">Réponses correctes</span>
                    <span className="text-green-900 font-bold">{score}</span>
                  </div>
                  <div className="flex items-center justify-between p-4 bg-red-50 rounded-lg">
                    <span className="text-red-800 font-medium">Réponses incorrectes</span>
                    <span className="text-red-900 font-bold">{questions.length - score}</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3 mb-8">
                  <Button onClick={resetQCM} className="w-full" size="lg">
                    <RotateCcw className="h-5 w-5 mr-2" />
                    Recommencer le QCM
                  </Button>
                  <Link to="/formation/oteria/polynomes-approximation-cours" className="w-full">
                    <Button variant="outline" className="w-full" size="lg">
                      <BookOpen className="h-5 w-5 mr-2" />
                      Retour au cours
                    </Button>
                  </Link>
                </div>

                {/* Détails des réponses */}
                <div className="space-y-4 text-left">
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Détails de vos réponses :</h3>
                  {questions.map((q, idx) => {
                    const userAnswer = selectedAnswers[q.id];
                    const hasAnswered = userAnswer !== undefined;
                    const isCorrect = hasAnswered && userAnswer === q.correctAnswer;

                    return (
                      <div key={q.id} className={`p-4 rounded-lg border-2 ${!hasAnswered ? 'border-gray-300 bg-gray-50' :
                        isCorrect ? 'border-green-500 bg-green-50' : 'border-red-500 bg-red-50'
                        }`}>
                        <div className="flex items-start gap-3 mb-3">
                          {!hasAnswered ? (
                            <XCircle className="h-5 w-5 text-gray-400 flex-shrink-0 mt-1" />
                          ) : isCorrect ? (
                            <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0 mt-1" />
                          ) : (
                            <XCircle className="h-5 w-5 text-red-600 flex-shrink-0 mt-1" />
                          )}
                          <div className="flex-1">
                            <p className="font-semibold text-gray-900 mb-2">Question {idx + 1} : {q.question}</p>
                            {hasAnswered ? (
                              <p className={`text-sm mb-1 ${isCorrect ? 'text-green-800' : 'text-red-800'}`}>
                                <strong>Votre réponse :</strong> {q.options[userAnswer]}
                              </p>
                            ) : (
                              <p className="text-sm text-gray-600 mb-2">
                                <strong>❌ Non répondue</strong>
                              </p>
                            )}
                            <p className="text-sm text-blue-800 mb-2">
                              <strong>Bonne réponse :</strong> {q.options[q.correctAnswer]}
                            </p>
                            <p className="text-sm text-gray-700 mt-2">
                              <strong>Explication :</strong> {q.explanation}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-blue-600">
            <Link to="/" className="flex items-center gap-1 hover:text-blue-700 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <Link to="/articles" className="hover:text-blue-700 transition-colors">
              Niveau
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <Link to="/articles/oteria-cyber-school" className="hover:text-blue-700 transition-colors">
              OTERIA Cyber School
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <span className="text-blue-600 font-medium">Séance 6 - QCM</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Zap className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-blue-900">QCM - Polynômes & dichotomie</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto">
            Testez vos connaissances sur les polynômes, la division euclidienne et l'algorithme de dichotomie
          </p>
        </div>

        {/* Progress Bar */}
        <div className="max-w-2xl mx-auto mb-8">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm font-medium text-blue-900">
              Question {currentQuestion + 1} sur {questions.length}
            </span>
            <span className="text-sm font-medium text-blue-900">
              {Object.keys(selectedAnswers).length}/{questions.length} réponses
            </span>
          </div>
          <Progress value={progressPercentage} className="h-2" />
        </div>

        {/* Question Card */}
        <div className="max-w-2xl mx-auto mb-8">
          <Card className="shadow-2xl">
            <CardContent className="p-8">
              <div className="mb-6">
                <Badge className="mb-4">{currentQ.category}</Badge>
                <h3 className="text-xl font-semibold text-blue-900 mb-6">
                  {currentQ.question}
                </h3>
              </div>

              <div className="space-y-3">
                {currentQ.options.map((option, index) => {
                  const isSelected = selectedAnswers[currentQ.id] === index;

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(currentQ.id, index)}
                      className={`w-full p-4 text-left rounded-lg border transition-all ${isSelected
                        ? 'border-blue-500 bg-blue-50 text-blue-800'
                        : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${isSelected
                          ? 'border-blue-500 bg-blue-500'
                          : 'border-gray-400'
                          }`}>
                          {isSelected && (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          )}
                        </div>
                        <span className="font-medium">{option}</span>
                      </div>
                    </button>
                  );
                })}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center gap-4">
            <Button
              onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
              disabled={currentQuestion === 0}
              variant="outline"
            >
              ← Précédent
            </Button>

            <div className="flex flex-col items-center gap-2">
              <div className="text-sm font-medium text-gray-600">
                Question {currentQuestion + 1} / {questions.length}
              </div>
              <Button
                onClick={handleFinish}
                className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                size="lg"
              >
                <Trophy className="h-5 w-5" />
                Voir le corrigé
                <span className="text-xs">
                  ({Object.keys(selectedAnswers).length}/{questions.length} réponses)
                </span>
              </Button>
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
        <div className="flex justify-between items-center bg-blue-50 p-6 rounded-lg mt-8 max-w-4xl mx-auto">
          <Link to="/formation/oteria/polynomes-exercices">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              ← Exercices
            </button>
          </Link>
          <div className="flex gap-3">
            <Link to="/formation/oteria/polynomes-approximation-cours">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <BookOpen className="h-4 w-4" />
                Cours
              </button>
            </Link>
            <Link to="/formation/oteria/polynomes-flashcards">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <Calculator className="h-4 w-4" />
                Flashcards
              </button>
            </Link>
            <Link to="/articles/oteria-cyber-school">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Retour au programme
              </button>
            </Link>
          </div>
          <Link to="/formation/oteria/fonctions-variable-reelle-cours">
            <div className="text-blue-600 hover:text-blue-700 font-medium">Séance suivante →</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OteriaPolynomesQCMPage;

