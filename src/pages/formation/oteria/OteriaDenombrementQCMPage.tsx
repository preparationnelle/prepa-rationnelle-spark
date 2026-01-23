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

const OteriaDenombrementQCMPage = () => {
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
      question: "Quelle est la valeur de 5! ?",
      options: ["24", "60", "120", "720"],
      correctAnswer: 2,
      explanation: "5! = 1 × 2 × 3 × 4 × 5 = 120",
      category: "Factorielle"
    },
    {
      id: 2,
      question: "Combien de permutations peut-on former avec 4 éléments distincts ?",
      options: ["4", "16", "24", "256"],
      correctAnswer: 2,
      explanation: "Le nombre de permutations de n éléments est n!. Pour 4 éléments : 4! = 24",
      category: "Permutations"
    },
    {
      id: 3,
      question: "Que vaut C(n,0) (coefficient binomial) ?",
      options: ["0", "1", "n", "n!"],
      correctAnswer: 1,
      explanation: "Par définition, C(n,0) = n!/(0!(n-0)!) = 1. Il n'y a qu'une seule façon de choisir 0 élément.",
      category: "Coefficients binomiaux"
    },
    {
      id: 4,
      question: "Quelle propriété vérifient les coefficients binomiaux C(n,p) ?",
      options: ["C(n,p) = C(n,n-p)", "C(n,p) = C(p,n)", "C(n,p) = n×p", "C(n,p) = n!"],
      correctAnswer: 0,
      explanation: "La propriété de symétrie : C(n,p) = C(n,n-p). Choisir p éléments équivaut à laisser de côté n-p éléments.",
      category: "Coefficients binomiaux"
    },
    {
      id: 5,
      question: "Dans le triangle de Pascal, quelle relation permet de calculer C(n,p) ?",
      options: ["C(n,p) = C(n-1,p) + C(p-1,p)", "C(n,p) = C(n-1,p-1) + C(n-1,p)", "C(n,p) = C(n-1,p-1) × C(n-1,p)", "C(n,p) = C(n,p-1) + C(n,p+1)"],
      correctAnswer: 1,
      explanation: "Relation de Pascal : C(n,p) = C(n-1,p-1) + C(n-1,p). Cette formule permet de construire le triangle de Pascal ligne par ligne.",
      category: "Triangle de Pascal"
    },
    {
      id: 6,
      question: "Que vaut la somme Σ C(n,k) pour k de 0 à n ?",
      options: ["n", "n!", "2ⁿ", "n²"],
      correctAnswer: 2,
      explanation: "D'après le binôme de Newton avec a=b=1 : (1+1)ⁿ = 2ⁿ = Σ C(n,k). Cela compte tous les sous-ensembles.",
      category: "Binôme de Newton"
    },
    {
      id: 7,
      question: "Développer (a+b)³ selon le binôme de Newton donne :",
      options: ["a³ + b³", "a³ + 3a²b + 3ab² + b³", "a³ + 2a²b + 2ab² + b³", "3a³ + 3b³"],
      correctAnswer: 1,
      explanation: "(a+b)³ = C(3,0)a³ + C(3,1)a²b + C(3,2)ab² + C(3,3)b³ = a³ + 3a²b + 3ab² + b³",
      category: "Binôme de Newton"
    },
    {
      id: 8,
      question: "Combien de sous-ensembles différents peut-on former à partir d'un ensemble de 5 éléments ?",
      options: ["5", "10", "25", "32"],
      correctAnswer: 3,
      explanation: "Un ensemble de n éléments possède 2ⁿ sous-ensembles. Pour n=5 : 2⁵ = 32",
      category: "Dénombrement"
    },
    {
      id: 9,
      question: "Dans le paradoxe des anniversaires, quelle est la probabilité qu'au moins 2 personnes aient le même anniversaire dans un groupe de 23 personnes ?",
      options: ["Environ 25%", "Environ 50%", "Environ 75%", "Environ 90%"],
      correctAnswer: 1,
      explanation: "Avec 23 personnes, la probabilité dépasse 50% (≈50.7%). C'est ce qui rend ce résultat contre-intuitif et « paradoxal ».",
      category: "Paradoxe des anniversaires"
    },
    {
      id: 10,
      question: "Quelle est la formule pour calculer la probabilité qu'il n'y ait PAS de collision d'anniversaires pour k personnes ?",
      options: ["365ᵏ/365!", "365!/(365-k)!×365ᵏ", "k!/365", "C(365,k)/365ᵏ"],
      correctAnswer: 1,
      explanation: "P(pas de collision) = 365×364×...×(365-k+1) / 365ᵏ = 365!/(365-k)!×365ᵏ",
      category: "Paradoxe des anniversaires"
    },
    {
      id: 11,
      question: "Quel principe de dénombrement s'applique lorsqu'on doit faire plusieurs choix successifs indépendants ?",
      options: ["Principe additif", "Principe multiplicatif", "Principe de complémentarité", "Principe de symétrie"],
      correctAnswer: 1,
      explanation: "Le principe multiplicatif : si on a n₁ choix pour la première étape, n₂ pour la deuxième, etc., le total est n₁ × n₂ × ...",
      category: "Principes de dénombrement"
    },
    {
      id: 12,
      question: "Que vaut C(6,2) ?",
      options: ["12", "15", "18", "30"],
      correctAnswer: 1,
      explanation: "C(6,2) = 6!/(2!×4!) = (6×5)/(2×1) = 15. On peut aussi utiliser la formule n(n-1)/2.",
      category: "Coefficients binomiaux"
    },
    {
      id: 13,
      question: "En cryptographie, le paradoxe des anniversaires est important pour évaluer :",
      options: ["La vitesse d'un algorithme", "La sécurité contre les collisions de hash", "La complexité d'un mot de passe", "Le nombre de clés possibles"],
      correctAnswer: 1,
      explanation: "Le paradoxe des anniversaires montre que les collisions dans les fonctions de hachage arrivent plus vite qu'on ne le pense.",
      category: "Application cryptographique"
    },
    {
      id: 14,
      question: "Pour un hash sur 256 bits, combien de hashes faut-il générer pour avoir environ 50% de chances de collision ?",
      options: ["2²⁵⁶", "2¹²⁸", "256", "128"],
      correctAnswer: 1,
      explanation: "D'après le paradoxe des anniversaires, il faut environ √N hashes, soit √(2²⁵⁶) = 2¹²⁸ pour 50% de chances de collision.",
      category: "Application cryptographique"
    },
    {
      id: 15,
      question: "Quelle est la valeur de 0! par convention ?",
      options: ["0", "1", "-∞", "Indéfini"],
      correctAnswer: 1,
      explanation: "Par convention, 0! = 1. Cette convention permet que les formules combinatoires restent cohérentes.",
      category: "Factorielle"
    },
    {
      id: 16,
      question: "Dans une classe de 30 élèves, combien y a-t-il de façons de choisir un binôme (2 élèves) ?",
      options: ["30", "60", "435", "900"],
      correctAnswer: 2,
      explanation: "C(30,2) = 30×29/2 = 435 façons de choisir 2 élèves parmi 30.",
      category: "Applications pratiques"
    },
    {
      id: 17,
      question: "Quelle approximation est souvent utilisée pour n! quand n est grand ?",
      options: ["Formule de Taylor", "Formule de Stirling", "Formule de Newton", "Formule de Pascal"],
      correctAnswer: 1,
      explanation: "La formule de Stirling : n! ≈ √(2πn) × (n/e)ⁿ est utilisée pour approximer les grandes factorielles.",
      category: "Factorielle"
    },
    {
      id: 18,
      question: "Si on doit compter les cas où quelque chose N'arrive PAS, quel principe utilise-t-on ?",
      options: ["Principe multiplicatif", "Principe additif", "Principe de complémentarité", "Principe de symétrie"],
      correctAnswer: 2,
      explanation: "Le principe de complémentarité : calculer le total puis soustraire les cas interdits est souvent plus simple.",
      category: "Principes de dénombrement"
    },
    {
      id: 19,
      question: "Combien vaut 100! approximativement ?",
      options: ["9.3 × 10⁵⁷", "9.3 × 10¹⁵⁷", "9.3 × 10²⁵⁷", "9.3 × 10⁵"],
      correctAnswer: 1,
      explanation: "100! ≈ 9.3 × 10¹⁵⁷. La factorielle croît extrêmement vite, dépassant rapidement les capacités de calcul standard.",
      category: "Limites du calcul"
    },
    {
      id: 20,
      question: "Dans un groupe de combien de personnes la probabilité de collision d'anniversaires dépasse-t-elle 99% ?",
      options: ["50", "57", "70", "100"],
      correctAnswer: 1,
      explanation: "Avec 57 personnes, la probabilité de collision dépasse 99%. Cela illustre à quel point les collisions deviennent probables rapidement.",
      category: "Paradoxe des anniversaires"
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
            qcm_id: 'oteria-denombrement',
            title: 'Dénombrement & Paradoxe - QCM',
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
              <span className="text-blue-600 font-medium">Séance 7 - QCM</span>
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
                  <Link to="/formation/oteria/denombrement-paradoxes-cours" className="w-full">
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
            <span className="text-blue-600 font-medium">Séance 7 - QCM</span>
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
          <h1 className="text-3xl font-bold mb-4 text-blue-900">QCM - Dénombrement & paradoxe des anniversaires</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto">
            Testez vos connaissances sur les coefficients binomiaux, le binôme de Newton et le paradoxe des anniversaires
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
          <Link to="/formation/oteria/denombrement-exercices">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              ← Exercices
            </button>
          </Link>
          <div className="flex gap-3">
            <Link to="/formation/oteria/denombrement-paradoxes-cours">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <BookOpen className="h-4 w-4" />
                Cours
              </button>
            </Link>
            <Link to="/formation/oteria/denombrement-flashcards">
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
          <Link to="/formation/oteria/probabilites-introduction-cours">
            <div className="text-blue-600 hover:text-blue-700 font-medium">Séance suivante →</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OteriaDenombrementQCMPage;

