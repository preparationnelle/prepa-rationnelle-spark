import React, { useState } from 'react';
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

const OteriaVariablesAleatoiresQCMPage = () => {
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
      question: "Qu'est-ce qu'une variable aléatoire ?",
      options: [
        "Une variable qui change de valeur au hasard",
        "Une fonction qui associe un nombre réel à chaque résultat d'une expérience aléatoire",
        "Un ensemble de nombres aléatoires",
        "Une probabilité variable"
      ],
      correctAnswer: 1,
      explanation: "Une variable aléatoire X est une fonction X : Ω → ℝ qui à chaque résultat ω de l'univers associe un nombre réel X(ω).",
      category: "Concepts de base"
    },
    {
      id: 2,
      question: "Quelle est la différence entre une variable aléatoire discrète et continue ?",
      options: [
        "Discrète : valeurs entières seulement ; Continue : valeurs réelles",
        "Discrète : ensemble fini/dénombrable ; Continue : ensemble continu d'un intervalle",
        "Discrète : petites valeurs ; Continue : grandes valeurs",
        "Il n'y a pas de différence"
      ],
      correctAnswer: 1,
      explanation: "Une v.a. discrète prend un ensemble fini ou dénombrable de valeurs. Une v.a. continue peut prendre toute valeur dans un intervalle.",
      category: "Concepts de base"
    },
    {
      id: 3,
      question: "Si X est une variable aléatoire discrète, que vaut la somme Σ P(X = xᵢ) pour tous les xᵢ possibles ?",
      options: ["0", "0.5", "1", "∞"],
      correctAnswer: 2,
      explanation: "La somme de toutes les probabilités doit toujours valoir 1 : Σᵢ P(X = xᵢ) = 1",
      category: "Loi de probabilité"
    },
    {
      id: 4,
      question: "Quelle est la formule de l'espérance E(X) d'une variable aléatoire discrète ?",
      options: [
        "E(X) = Σ xᵢ",
        "E(X) = Σ P(X = xᵢ)",
        "E(X) = Σ xᵢ × P(X = xᵢ)",
        "E(X) = Σ xᵢ / P(X = xᵢ)"
      ],
      correctAnswer: 2,
      explanation: "L'espérance est la moyenne pondérée des valeurs : E(X) = Σ xᵢ × P(X = xᵢ)",
      category: "Espérance et variance"
    },
    {
      id: 5,
      question: "Si E(X) = 5 et a = 3, b = 2, que vaut E(aX + b) ?",
      options: ["10", "15", "17", "21"],
      correctAnswer: 2,
      explanation: "E(aX + b) = aE(X) + b = 3×5 + 2 = 17. L'espérance est linéaire.",
      category: "Espérance et variance"
    },
    {
      id: 6,
      question: "Quelle est la formule de la variance V(X) ?",
      options: [
        "V(X) = E(X²)",
        "V(X) = E(X)²",
        "V(X) = E(X²) - [E(X)]²",
        "V(X) = E[(X - E(X))²] seulement"
      ],
      correctAnswer: 2,
      explanation: "V(X) = E[(X - E(X))²] = E(X²) - [E(X)]². Les deux formules sont équivalentes.",
      category: "Espérance et variance"
    },
    {
      id: 7,
      question: "Si V(X) = 4 et a = 2, que vaut V(aX) ?",
      options: ["4", "8", "16", "2"],
      correctAnswer: 2,
      explanation: "V(aX) = a²V(X) = 2² × 4 = 16. La variance est multipliée par le carré du coefficient.",
      category: "Espérance et variance"
    },
    {
      id: 8,
      question: "Une variable aléatoire X suit une loi de Bernoulli B(0.3). Que vaut P(X = 1) ?",
      options: ["0", "0.3", "0.7", "1"],
      correctAnswer: 1,
      explanation: "Pour une loi de Bernoulli B(p), P(X = 1) = p. Donc P(X = 1) = 0.3",
      category: "Loi de Bernoulli"
    },
    {
      id: 9,
      question: "Si X ~ B(p) (loi de Bernoulli), que vaut E(X) ?",
      options: ["0", "1", "p", "1-p"],
      correctAnswer: 2,
      explanation: "Pour une loi de Bernoulli B(p), E(X) = p",
      category: "Loi de Bernoulli"
    },
    {
      id: 10,
      question: "Si X ~ B(p) (loi de Bernoulli), que vaut V(X) ?",
      options: ["p", "p²", "p(1-p)", "1-p"],
      correctAnswer: 2,
      explanation: "Pour une loi de Bernoulli B(p), V(X) = p(1-p). La variance est maximale pour p = 1/2.",
      category: "Loi de Bernoulli"
    },
    {
      id: 11,
      question: "Une variable aléatoire X suit une loi binomiale B(10, 0.4). Que représente X ?",
      options: [
        "Le rang du premier succès",
        "Le nombre de succès sur 10 essais",
        "La probabilité de succès",
        "Le nombre d'échecs"
      ],
      correctAnswer: 1,
      explanation: "Une loi binomiale B(n,p) compte le nombre de succès sur n essais indépendants de probabilité p.",
      category: "Loi Binomiale"
    },
    {
      id: 12,
      question: "Si X ~ B(20, 0.3) (loi binomiale), que vaut E(X) ?",
      options: ["3", "6", "9", "20"],
      correctAnswer: 1,
      explanation: "E(X) = np = 20 × 0.3 = 6 pour une loi binomiale B(n,p)",
      category: "Loi Binomiale"
    },
    {
      id: 13,
      question: "Si X ~ B(100, 0.2) (loi binomiale), que vaut V(X) ?",
      options: ["20", "16", "80", "4"],
      correctAnswer: 1,
      explanation: "V(X) = np(1-p) = 100 × 0.2 × 0.8 = 16 pour une loi binomiale B(n,p)",
      category: "Loi Binomiale"
    },
    {
      id: 14,
      question: "Quelle commande Python génère une loi binomiale B(50, 0.6) ?",
      options: [
        "rd.bernoulli(50, 0.6)",
        "rd.binomial(50, 0.6)",
        "rd.random(50, 0.6)",
        "rd.geometric(50, 0.6)"
      ],
      correctAnswer: 1,
      explanation: "On utilise rd.binomial(n, p) pour générer une loi binomiale B(n,p)",
      category: "Python - Lois"
    },
    {
      id: 15,
      question: "Une variable aléatoire X suit une loi géométrique G(0.2). Que représente X ?",
      options: [
        "Le nombre de succès",
        "Le rang du premier succès",
        "La probabilité d'échec",
        "Le nombre total d'essais"
      ],
      correctAnswer: 1,
      explanation: "Une loi géométrique G(p) modélise le rang du premier succès dans une suite d'essais de Bernoulli.",
      category: "Loi Géométrique"
    },
    {
      id: 16,
      question: "Si X ~ G(0.25) (loi géométrique), que vaut E(X) ?",
      options: ["0.25", "4", "0.75", "1"],
      correctAnswer: 1,
      explanation: "E(X) = 1/p = 1/0.25 = 4 pour une loi géométrique G(p)",
      category: "Loi Géométrique"
    },
    {
      id: 17,
      question: "Une loi de Poisson P(λ) est utilisée pour modéliser :",
      options: [
        "Des durées d'attente",
        "Des événements rares sur un intervalle",
        "Des choix parmi n éléments",
        "Des succès garantis"
      ],
      correctAnswer: 1,
      explanation: "La loi de Poisson modélise le nombre d'événements rares sur un intervalle (temps, espace).",
      category: "Loi de Poisson"
    },
    {
      id: 18,
      question: "Si X ~ P(λ) (loi de Poisson), quelle relation lie E(X) et V(X) ?",
      options: [
        "E(X) = 2V(X)",
        "E(X) = V(X)",
        "E(X) = V(X)²",
        "E(X) + V(X) = λ"
      ],
      correctAnswer: 1,
      explanation: "Pour une loi de Poisson P(λ), E(X) = V(X) = λ. C'est une propriété caractéristique.",
      category: "Loi de Poisson"
    },
    {
      id: 19,
      question: "Quelle commande Python trace un histogramme normalisé d'un échantillon ?",
      options: [
        "plt.hist(echantillon)",
        "plt.hist(echantillon, density=True)",
        "plt.bar(echantillon)",
        "plt.plot(echantillon)"
      ],
      correctAnswer: 1,
      explanation: "plt.hist(echantillon, density=True) trace un histogramme normalisé, permettant la comparaison avec la densité théorique.",
      category: "Histogrammes"
    },
    {
      id: 20,
      question: "Pour une variable aléatoire continue X, pourquoi P(X = x) = 0 ?",
      options: [
        "Car x est trop grand",
        "Car X peut prendre une infinité de valeurs dans un intervalle",
        "Car la probabilité est négative",
        "Car X est mal définie"
      ],
      correctAnswer: 1,
      explanation: "Pour une v.a. continue, X peut prendre une infinité de valeurs. La probabilité d'une valeur exacte est infinitésimale, donc nulle. On s'intéresse aux intervalles.",
      category: "Variables continues"
    }
  ];

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const calculateScore = () => {
    let correctCount = 0;
    questions.forEach(q => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correctCount++;
      }
    });
    return correctCount;
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
            qcm_id: 'oteria-variables-aleatoires',
            title: 'Variables Aléatoires & Histogrammes - QCM',
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
    setSaveMessage('');
  };

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;

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
            <span className="text-teal-600 font-medium">Séance 9 - QCM</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-teal-900 mb-4">
            QCM - Variables Aléatoires & Histogrammes
          </h1>
          <p className="text-lg text-blue-700 mb-6">
            Lois usuelles (Bernoulli, Binomiale, Géométrique, Poisson, Expo…)
          </p>

          {/* Ressources pédagogiques */}
          <div className="max-w-4xl mx-auto mb-6">
            <div className="bg-white border border-blue-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-900 mb-4 text-center">
                Ressources pédagogiques
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link to="/formation/oteria/variables-aleatoires-cours" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <BookOpen className="h-5 w-5 mx-auto mb-2" />
                    Cours
                  </button>
                </Link>
                <Link to="/formation/oteria/variables-aleatoires-exercices" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <Target className="h-5 w-5 mx-auto mb-2" />
                    Exercices
                  </button>
                </Link>
                <Link to="/formation/oteria/variables-aleatoires-flashcards" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <Calculator className="h-5 w-5 mx-auto mb-2" />
                    Flashcards
                  </button>
                </Link>
                <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg cursor-default font-medium shadow-md">
                  <Zap className="h-5 w-5 mx-auto mb-2" />
                  QCM
                </button>
              </div>
            </div>
          </div>
        </div>

        {!showResults ? (
          <>
            {/* Progress Bar */}
            <div className="mb-6">
              <div className="flex justify-between items-center mb-2">
                <span className="text-sm font-medium text-teal-700">
                  Question {currentQuestion + 1} sur {questions.length}
                </span>
                <Badge variant="outline" className="text-teal-700 border-teal-700">
                  {currentQ.category}
                </Badge>
              </div>
              <Progress value={progress} className="h-2" />
            </div>

            {/* Question Card */}
            <Card className="mb-6 shadow-lg border-2 border-teal-200">
              <CardContent className="pt-6">
                <h2 className="text-xl font-bold text-teal-900 mb-6">
                  {currentQ.question}
                </h2>

                <div className="space-y-3">
                  {currentQ.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(currentQ.id, index)}
                      className={`w-full p-4 text-left rounded-lg border-2 transition-all duration-200 ${selectedAnswers[currentQ.id] === index
                          ? 'border-teal-600 bg-teal-50 font-medium'
                          : 'border-gray-200 hover:border-teal-300 hover:bg-teal-50/50'
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center ${selectedAnswers[currentQ.id] === index
                            ? 'border-teal-600 bg-teal-600'
                            : 'border-gray-300'
                          }`}>
                          {selectedAnswers[currentQ.id] === index && (
                            <div className="w-3 h-3 bg-white rounded-full" />
                          )}
                        </div>
                        <span className="text-gray-800">{option}</span>
                      </div>
                    </button>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Navigation Buttons */}
            <div className="flex justify-between gap-4">
              <Button
                onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
                disabled={currentQuestion === 0}
                variant="outline"
                className="border-teal-600 text-teal-600 hover:bg-teal-50"
              >
                Précédent
              </Button>

              {currentQuestion === questions.length - 1 ? (
                <Button
                  onClick={handleFinish}
                  disabled={Object.keys(selectedAnswers).length !== questions.length}
                  className="bg-teal-600 hover:bg-teal-700 text-white"
                >
                  <Trophy className="mr-2 h-4 w-4" />
                  Terminer le QCM
                </Button>
              ) : (
                <Button
                  onClick={() => setCurrentQuestion(prev => Math.min(questions.length - 1, prev + 1))}
                  className="bg-teal-600 hover:bg-teal-700 text-white"
                >
                  Suivant
                </Button>
              )}
            </div>

            {/* Questions answered counter */}
            <div className="mt-6 text-center text-sm text-gray-600">
              {Object.keys(selectedAnswers).length} / {questions.length} questions répondues
            </div>
          </>
        ) : (
          <>
            {/* Results Section */}
            <Card className="mb-6 shadow-lg border-2 border-teal-200">
              <CardContent className="pt-6">
                <div className="text-center mb-6">
                  <Trophy className="w-16 h-16 mx-auto mb-4 text-teal-600" />
                  <h2 className="text-3xl font-bold text-teal-900 mb-2">
                    QCM Terminé !
                  </h2>
                  <p className="text-xl text-gray-700 mb-4">
                    Votre score : <span className="font-bold text-teal-600">{score} / {questions.length}</span>
                  </p>
                  <div className="w-full max-w-md mx-auto">
                    <Progress value={(score / questions.length) * 100} className="h-3" />
                  </div>
                  <p className="mt-4 text-lg font-medium text-gray-700">
                    {score >= 18 ? "🎉 Excellent ! Vous maîtrisez parfaitement les variables aléatoires !" :
                      score >= 15 ? "👏 Très bien ! Vous avez une bonne compréhension du sujet." :
                        score >= 12 ? "👍 Bien ! Continuez vos efforts." :
                          "📚 Révisez le cours et réessayez."}
                  </p>
                  {saveMessage && (
                    <div className={`mt-4 font-medium ${saveMessage.includes('Erreur') ? 'text-red-600' : 'text-green-600'}`}>
                      {saveMessage}
                    </div>
                  )}
                </div>

                {/* Detailed Results */}
                <div className="space-y-4 mt-8">
                  <h3 className="text-xl font-bold text-teal-900 mb-4">Correction détaillée :</h3>
                  {questions.map((q, qIndex) => {
                    const isCorrect = selectedAnswers[q.id] === q.correctAnswer;
                    return (
                      <div key={q.id} className={`p-4 rounded-lg border-2 ${isCorrect ? 'border-green-200 bg-green-50' : 'border-red-200 bg-red-50'
                        }`}>
                        <div className="flex items-start gap-3 mb-3">
                          {isCorrect ? (
                            <CheckCircle className="w-6 h-6 text-green-600 mt-1 flex-shrink-0" />
                          ) : (
                            <XCircle className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
                          )}
                          <div className="flex-1">
                            <p className="font-semibold text-gray-900 mb-2">
                              Question {qIndex + 1}: {q.question}
                            </p>
                            <p className="text-sm text-gray-700 mb-1">
                              <span className="font-medium">Votre réponse :</span>{' '}
                              <span className={isCorrect ? 'text-green-700' : 'text-red-700'}>
                                {q.options[selectedAnswers[q.id]]}
                              </span>
                            </p>
                            {!isCorrect && (
                              <p className="text-sm text-gray-700 mb-2">
                                <span className="font-medium">Bonne réponse :</span>{' '}
                                <span className="text-green-700 font-medium">
                                  {q.options[q.correctAnswer]}
                                </span>
                              </p>
                            )}
                            <p className="text-sm text-blue-800 bg-blue-100 p-2 rounded mt-2">
                              <span className="font-medium">Explication :</span> {q.explanation}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Retry Button */}
                <div className="mt-8 text-center">
                  <Button onClick={resetQCM} className="bg-teal-600 hover:bg-teal-700 text-white">
                    <RotateCcw className="mr-2 h-4 w-4" />
                    Recommencer le QCM
                  </Button>
                </div>
              </CardContent>
            </Card>
          </>
        )}

        {/* Navigation footer */}
        <div className="flex justify-between items-center pt-6 border-t border-blue-200 mt-8">
          <Link to="/formation/oteria/probabilites-introduction-cours">
            <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
              ← Séance précédente
            </Button>
          </Link>
          <Link to="/articles/oteria-cyber-school">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white">
              Retour au programme OTERIA
            </Button>
          </Link>
          <Link to="/formation/oteria/integrales-monte-carlo-cours">
            <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
              Séance suivante →
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OteriaVariablesAleatoiresQCMPage;

