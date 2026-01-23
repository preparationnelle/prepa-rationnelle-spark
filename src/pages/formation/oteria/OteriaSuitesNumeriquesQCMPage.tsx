import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, BookOpen, Target, Calculator, BarChart3, CheckCircle, XCircle, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';

// Données du QCM
const qcmData = {
  title: "Suites numériques — QCM (20 questions)",
  questions: [
    {
      id: 1,
      question: "Quelle est la définition d'une suite explicite ?",
      choices: [
        { key: "a", text: "Une suite donnée par une formule directe uₙ = f(n)" },
        { key: "b", text: "Une suite où chaque terme dépend du précédent" },
        { key: "c", text: "Une suite définie par récurrence avec condition initiale" },
        { key: "d", text: "Une suite dont tous les termes sont identiques" }
      ],
      answer: "a",
      explanation: "Une suite explicite est donnée directement par une formule en fonction de n."
    },
    {
      id: 2,
      question: "Pour une suite récurrente u(n+1) = 2uₙ + 1 avec u₀ = 0, le terme u₁ vaut :",
      choices: [
        { key: "a", text: "0" },
        { key: "b", text: "1" },
        { key: "c", text: "2" },
        { key: "d", text: "3" }
      ],
      answer: "b",
      explanation: "u₁ = 2×u₀ + 1 = 2×0 + 1 = 1"
    },
    {
      id: 3,
      question: "Une suite est majorée si :",
      choices: [
        { key: "a", text: "Elle possède un minimum" },
        { key: "b", text: "Il existe M tel que ∀n, uₙ ≤ M" },
        { key: "c", text: "Elle est croissante" },
        { key: "d", text: "Elle converge" }
      ],
      answer: "b",
      explanation: "Une suite majorée admet un majorant M qui borne ses termes par le dessus."
    },
    {
      id: 4,
      question: "La suite uₙ = (-1)ⁿ est :",
      choices: [
        { key: "a", text: "Croissante" },
        { key: "b", text: "Décroissante" },
        { key: "c", text: "Monotone" },
        { key: "d", text: "Ni croissante ni décroissante" }
      ],
      answer: "d",
      explanation: "La suite alterne entre -1 et 1 : elle n'est ni croissante ni décroissante."
    },
    {
      id: 5,
      question: "La définition de la convergence d'une suite (uₙ) vers ℓ est :",
      choices: [
        { key: "a", text: "∀ε>0, ∃n₀, ∀n≥n₀, |uₙ| ≤ ε" },
        { key: "b", text: "∀ε>0, ∃n₀, ∀n≥n₀, |uₙ - ℓ| ≤ ε" },
        { key: "c", text: "∀ε>0, ∃n₀, ∀n≥n₀, uₙ = ℓ" },
        { key: "d", text: "∀ε>0, ∃n₀, ∀n≥n₀, |uₙ| ≥ ε" }
      ],
      answer: "b",
      explanation: "Définition ε-n₀ de la convergence : les termes se rapprochent arbitrairement de ℓ."
    },
    {
      id: 6,
      question: "Si uₙ → ℓ et vₙ → ℓ', alors uₙ + vₙ → :",
      choices: [
        { key: "a", text: "ℓ - ℓ'" },
        { key: "b", text: "ℓ × ℓ'" },
        { key: "c", text: "ℓ + ℓ'" },
        { key: "d", text: "ℓ / ℓ'" }
      ],
      answer: "c",
      explanation: "La somme de limites convergentes donne la limite de la somme."
    },
    {
      id: 7,
      question: "Selon le théorème de la limite monotone, une suite croissante majorée :",
      choices: [
        { key: "a", text: "Converge vers son supremum" },
        { key: "b", text: "Diverge vers +∞" },
        { key: "c", text: "Diverge vers -∞" },
        { key: "d", text: "Ne converge pas nécessairement" }
      ],
      answer: "a",
      explanation: "Une suite croissante majorée converge vers son supremum."
    },
    {
      id: 8,
      question: "Le théorème d'encadrement (des gendarmes) stipule que si vₙ ≤ uₙ ≤ wₙ et vₙ → ℓ, wₙ → ℓ, alors :",
      choices: [
        { key: "a", text: "uₙ → ℓ" },
        { key: "b", text: "uₙ → 0" },
        { key: "c", text: "uₙ diverge" },
        { key: "d", text: "uₙ → ℓ/2" }
      ],
      answer: "a",
      explanation: "Si uₙ est « coincée » entre deux suites qui convergent vers ℓ, alors uₙ → ℓ."
    },
    {
      id: 9,
      question: "Pour la suite uₙ = sin(n²)/n, on peut utiliser comme encadrement :",
      choices: [
        { key: "a", text: "-1 ≤ uₙ ≤ 1" },
        { key: "b", text: "-1/n ≤ uₙ ≤ 1/n" },
        { key: "c", text: "-n ≤ uₙ ≤ n" },
        { key: "d", text: "-√n ≤ uₙ ≤ √n" }
      ],
      answer: "b",
      explanation: "Puisque |sin(x)| ≤ 1 pour tout x réel, donc |sin(n²)/n| ≤ 1/n."
    },
    {
      id: 10,
      question: "Si f est continue en a et uₙ → a, alors f(uₙ) → :",
      choices: [
        { key: "a", text: "f(a)" },
        { key: "b", text: "a" },
        { key: "c", text: "uₙ" },
        { key: "d", text: "0" }
      ],
      answer: "a",
      explanation: "Composition de fonctions continues avec convergence : f(uₙ) → f(a)."
    },
    {
      id: 11,
      question: "La suite uₙ = 1/n :",
      choices: [
        { key: "a", text: "Converge vers 1" },
        { key: "b", text: "Converge vers 0" },
        { key: "c", text: "Diverge vers +∞" },
        { key: "d", text: "Diverge vers -∞" }
      ],
      answer: "b",
      explanation: "La suite harmonique converge vers 0."
    },
    {
      id: 12,
      question: "La suite uₙ = n² :",
      choices: [
        { key: "a", text: "Converge vers 0" },
        { key: "b", text: "Converge vers 1" },
        { key: "c", text: "Diverge vers +∞" },
        { key: "d", text: "Diverge vers -∞" }
      ],
      answer: "c",
      explanation: "Une suite polynomiale de degré ≥ 1 diverge vers +∞."
    },
    {
      id: 13,
      question: "Une suite est stationnaire à partir du rang n₀ si :",
      choices: [
        { key: "a", text: "Elle est constante" },
        { key: "b", text: "∀n ≥ n₀, u(n+1) = uₙ" },
        { key: "c", text: "Elle converge" },
        { key: "d", text: "Elle est bornée" }
      ],
      answer: "b",
      explanation: "À partir d'un certain rang, tous les termes suivants sont égaux."
    },
    {
      id: 14,
      question: "Le point fixe d'une suite récurrente u(n+1) = f(uₙ) vérifie :",
      choices: [
        { key: "a", text: "f(ℓ) = 0" },
        { key: "b", text: "f(ℓ) = ℓ" },
        { key: "c", text: "f(ℓ) = u₀" },
        { key: "d", text: "f(ℓ) = 1" }
      ],
      answer: "b",
      explanation: "Un point fixe ℓ vérifie f(ℓ) = ℓ."
    },
    {
      id: 15,
      question: "La méthode de Babylone pour calculer √2 utilise la suite :",
      choices: [
        { key: "a", text: "u(n+1) = uₙ² + 2" },
        { key: "b", text: "u(n+1) = (uₙ + 2/uₙ)/2" },
        { key: "c", text: "u(n+1) = uₙ + 2" },
        { key: "d", text: "u(n+1) = 2uₙ" }
      ],
      answer: "b",
      explanation: "La formule de Héron pour √a est u(n+1) = (uₙ + a/uₙ)/2."
    },
    {
      id: 16,
      question: "Deux suites adjacentes uₙ et vₙ avec uₙ ≤ vₙ et vₙ - uₙ → 0 :",
      choices: [
        { key: "a", text: "Convergent toutes deux vers 0" },
        { key: "b", text: "Convergent vers la même limite ℓ" },
        { key: "c", text: "Divergent" },
        { key: "d", text: "Ont des limites différentes" }
      ],
      answer: "b",
      explanation: "Les suites adjacentes convergent vers la même limite ℓ."
    },
    {
      id: 17,
      question: "Pour la suite uₙ = (-1)ⁿ/n, on peut affirmer que :",
      choices: [
        { key: "a", text: "Elle converge vers 0" },
        { key: "b", text: "Elle diverge" },
        { key: "c", text: "Elle converge vers 1" },
        { key: "d", text: "Elle converge vers -1" }
      ],
      answer: "a",
      explanation: "Le théorème d'encadrement : -1/n ≤ uₙ ≤ 1/n et les deux bornes convergent vers 0."
    },
    {
      id: 18,
      question: "La suite u(n+1) = 2uₙ - 1 avec u₀ = 3 :",
      choices: [
        { key: "a", text: "Converge vers 1" },
        { key: "b", text: "Diverge vers +∞" },
        { key: "c", text: "Diverge vers -∞" },
        { key: "d", text: "Est périodique" }
      ],
      answer: "b",
      explanation: "Point fixe : ℓ = 2ℓ - 1 ⇒ ℓ = 1. Mais |coefficient| = 2 > 1, donc divergence."
    },
    {
      id: 19,
      question: "Si une suite extraite (u₂ₙ) converge vers ℓ et (u₂ₙ₊₁) converge vers ℓ, alors :",
      choices: [
        { key: "a", text: "La suite uₙ converge vers ℓ/2" },
        { key: "b", text: "La suite uₙ diverge" },
        { key: "c", text: "La suite uₙ converge vers ℓ" },
        { key: "d", text: "La suite uₙ converge vers 2ℓ" }
      ],
      answer: "c",
      explanation: "Si les termes pairs et impairs convergent vers la même limite, la suite entière converge."
    },
    {
      id: 20,
      question: "Laquelle de ces suites est décroissante ?",
      choices: [
        { key: "a", text: "uₙ = n" },
        { key: "b", text: "uₙ = -n" },
        { key: "c", text: "uₙ = 1/n" },
        { key: "d", text: "uₙ = n²" }
      ],
      answer: "c",
      explanation: "uₙ = 1/n : u(n+1) = 1/(n+1) < 1/n = uₙ, donc décroissante."
    }
  ]
};

const OteriaSuitesNumeriquesQCMPage = () => {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showExplanations, setShowExplanations] = useState(false);
  const { currentUser } = useAuth();
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  const handleAnswerSelect = (questionId, choiceKey) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: choiceKey
    }));
  };



  const calculateScore = () => {
    let correct = 0;
    qcmData.questions.forEach(question => {
      if (answers[question.id] === question.answer) {
        correct++;
      }
    });
    return { correct, total: qcmData.questions.length };
  };

  const handleValidation = async () => {
    setShowResults(true);

    if (currentUser) {
      setIsSaving(true);
      const { correct, total } = calculateScore();
      const percentage = Math.round((correct / total) * 100);

      try {
        const { error } = await supabase
          .from('qcm_results')
          .insert({
            user_id: currentUser.id,
            qcm_id: 'oteria-suites-numeriques',
            title: 'Suites Numériques - QCM',
            score: percentage,
            total_questions: total,
            correct_answers: correct
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
    setAnswers({});
    setShowResults(false);

    setShowExplanations(false);
    setSaveMessage('');
  };

  const { correct, total } = calculateScore();
  const scorePercentage = total > 0 ? Math.round((correct / total) * 100) : 0;

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
            <span className="text-teal-600 font-medium">Séance 4 - QCM</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <BarChart3 className="h-8 w-8 text-teal-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-teal-900">Séance 4 : QCM - Suites numériques</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Testez vos connaissances sur les suites numériques explicites et récurrentes
          </p>

          {/* Informations de séance */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Numéro de séance</span>
                  <span className="text-2xl font-bold text-blue-900">4</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Durée estimée</span>
                  <span className="text-2xl font-bold text-blue-900">3h</span>
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

          <div className="flex gap-3 justify-center mb-8">
            <Link to="/formation/oteria/suites-numeriques-cours">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <BookOpen className="h-4 w-4 mr-2" />
                Cours
              </Button>
            </Link>
            <Link to="/formation/oteria/suites-numeriques-exercices">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Target className="h-4 w-4 mr-2" />
                Exercices
              </Button>
            </Link>
            <Link to="/formation/oteria/suites-numeriques-flashcards">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Calculator className="h-4 w-4 mr-2" />
                Flashcards
              </Button>
            </Link>
            <Link to="/articles/oteria-cyber-school">
              <Button className="bg-teal-600 hover:bg-teal-700">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Retour au programme
              </Button>
            </Link>
          </div>
        </div>

        {/* Contenu du QCM */}
        <div className="max-w-4xl mx-auto">
          {/* En-tête du QCM */}
          <Card className="mb-8 border-blue-200">
            <CardHeader className="bg-blue-50 border-b border-blue-200">
              <div className="flex justify-between items-center">
                <CardTitle className="text-blue-900 flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  {qcmData.title}
                </CardTitle>
                {showResults && (
                  <Badge variant="outline" className={`text-lg px-4 py-2 ${scorePercentage >= 80 ? 'border-green-500 text-green-700 bg-green-50' :
                    scorePercentage >= 60 ? 'border-yellow-500 text-yellow-700 bg-yellow-50' :
                      'border-red-500 text-red-700 bg-red-50'
                    }`}>
                    {correct}/{total} ({scorePercentage}%)
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex gap-4 justify-center">
                {!showResults ? (

                  <Button
                    onClick={handleValidation}
                    disabled={Object.keys(answers).length < qcmData.questions.length || isSaving}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    {isSaving ? 'Enregistrement...' : `Valider les réponses (${Object.keys(answers).length}/${qcmData.questions.length})`}
                  </Button>
                ) : (
                  <>
                    <Button
                      onClick={() => setShowExplanations(!showExplanations)}
                      variant="outline"
                      className="border-blue-600 text-blue-600 hover:bg-blue-50"
                    >
                      {showExplanations ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
                      {showExplanations ? 'Masquer' : 'Afficher'} les explications
                    </Button>
                    <Button
                      onClick={resetQCM}
                      variant="outline"
                      className="border-gray-600 text-gray-600 hover:bg-gray-50"
                    >
                      Recommencer
                    </Button>
                  </>
                )}

              </div>
              {saveMessage && (
                <div className={`text-center mt-4 font-medium ${saveMessage.includes('Erreur') ? 'text-red-600' : 'text-green-600'}`}>
                  {saveMessage}
                </div>
              )}
            </CardContent>
          </Card>

          {/* Questions */}
          {qcmData.questions.map((question, index) => (
            <Card key={question.id} className="mb-6 border-blue-200">
              <CardHeader className="bg-blue-50 border-b border-blue-200">
                <CardTitle className="text-blue-900 flex items-center gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                    {question.id}
                  </span>
                  {question.question}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-4">
                <div className="space-y-3">
                  {question.choices.map((choice) => {
                    const isSelected = answers[question.id] === choice.key;
                    const isCorrect = choice.key === question.answer;
                    const showCorrectAnswer = showResults && isCorrect;
                    const showWrongAnswer = showResults && isSelected && !isCorrect;

                    return (
                      <div
                        key={choice.key}
                        onClick={() => !showResults && handleAnswerSelect(question.id, choice.key)}
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${showResults ? (
                          showCorrectAnswer ? 'border-green-500 bg-green-50' :
                            showWrongAnswer ? 'border-red-500 bg-red-50' :
                              isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'
                        ) : (
                          isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white hover:border-blue-300'
                        )
                          }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${showResults ? (
                            showCorrectAnswer ? 'border-green-500 bg-green-500' :
                              showWrongAnswer ? 'border-red-500 bg-red-500' :
                                isSelected ? 'border-blue-500 bg-blue-500' : 'border-gray-400'
                          ) : (
                            isSelected ? 'border-blue-500 bg-blue-500' : 'border-gray-400'
                          )
                            }`}>
                            {(isSelected || showCorrectAnswer) && (
                              <div className="w-2 h-2 bg-white rounded-full"></div>
                            )}
                          </div>
                          <span className={`font-medium ${showResults ? (
                            showCorrectAnswer ? 'text-green-800' :
                              showWrongAnswer ? 'text-red-800' :
                                'text-gray-700'
                          ) : 'text-gray-700'
                            }`}>
                            {choice.key.toUpperCase()}) {choice.text}
                          </span>
                          {showResults && isCorrect && (
                            <CheckCircle className="h-5 w-5 text-green-600 ml-auto" />
                          )}
                          {showResults && showWrongAnswer && (
                            <XCircle className="h-5 w-5 text-red-600 ml-auto" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Explication */}
                {showResults && showExplanations && (
                  <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                    <h4 className="font-semibold text-blue-900 mb-2">💡 Explication :</h4>
                    <p className="text-blue-800">{question.explanation}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}

          {/* Navigation */}
          <div className="flex justify-between items-center bg-blue-50 p-6 rounded-lg">
            <Link to="/formation/oteria/recurrence-recursivite-qcm">
              <div className="text-blue-600 hover:text-blue-700">← Séance précédente</div>
            </Link>
            <div className="flex gap-3">
              <Link to="/formation/oteria/suites-numeriques-cours">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Cours
                </Button>
              </Link>
              <Link to="/formation/oteria/suites-numeriques-exercices">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Target className="h-4 w-4 mr-2" />
                  Exercices
                </Button>
              </Link>
              <Link to="/formation/oteria/suites-numeriques-flashcards">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Calculator className="h-4 w-4 mr-2" />
                  Flashcards
                </Button>
              </Link>
              <Link to="/articles/oteria-cyber-school">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  Retour au programme
                </Button>
              </Link>
            </div>
            <div className="text-blue-600 font-medium">Séance suivante →</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OteriaSuitesNumeriquesQCMPage;
