import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, BookOpen, Target, Calculator, BarChart3, CheckCircle, XCircle, Eye, EyeOff, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Données du QCM
const qcmData = {
  title: "Fonctions et Python — QCM (20 questions)",
  questions: [
    {
      id: 1,
      question: "Quelle fonction Python trace une courbe ?",
      choices: [
        { key: "a", text: "np.plot(x, y)" },
        { key: "b", text: "plt.plot(x, y)" },
        { key: "c", text: "matplotlib.draw(x, y)" },
        { key: "d", text: "np.draw(x, y)" }
      ],
      answer: "b",
      explanation: "plt.plot(x, y) de matplotlib.pyplot trace une courbe."
    },
    {
      id: 2,
      question: "Quelle fonction crée un intervalle avec numpy ?",
      choices: [
        { key: "a", text: "np.range(a, b, n)" },
        { key: "b", text: "np.linspace(a, b, n)" },
        { key: "c", text: "np.interval(a, b, n)" },
        { key: "d", text: "np.create(a, b, n)" }
      ],
      answer: "b",
      explanation: "np.linspace(a, b, n) crée n points uniformément répartis entre a et b."
    },
    {
      id: 3,
      question: "Comment calculer e^x en Python ?",
      choices: [
        { key: "a", text: "np.power(e, x)" },
        { key: "b", text: "np.exp(x)" },
        { key: "c", text: "np.e ** x" },
        { key: "d", text: "np.exponent(x)" }
      ],
      answer: "b",
      explanation: "np.exp(x) calcule l'exponentielle e^x."
    },
    {
      id: 4,
      question: "La constante π en numpy s'écrit :",
      choices: [
        { key: "a", text: "np.PI" },
        { key: "b", text: "np.pi" },
        { key: "c", text: "numpy.pi()" },
        { key: "d", text: "math.pi" }
      ],
      answer: "b",
      explanation: "La constante π est accessible avec np.pi."
    },
    {
      id: 5,
      question: "Quelle fonction calcule le logarithme népérien ?",
      choices: [
        { key: "a", text: "np.ln(x)" },
        { key: "b", text: "np.log(x)" },
        { key: "c", text: "np.log10(x)" },
        { key: "d", text: "np.logarithm(x)" }
      ],
      answer: "b",
      explanation: "np.log(x) calcule le logarithme népérien (ln)."
    },
    {
      id: 6,
      question: "Une fonction f est paire si :",
      choices: [
        { key: "a", text: "f(-x) = -f(x)" },
        { key: "b", text: "f(-x) = f(x)" },
        { key: "c", text: "f(x+T) = f(x)" },
        { key: "d", text: "f(x) = x²" }
      ],
      answer: "b",
      explanation: "f est paire si f(-x) = f(x), la courbe est symétrique par rapport à l'axe des ordonnées."
    },
    {
      id: 7,
      question: "Une fonction f est impaire si :",
      choices: [
        { key: "a", text: "f(-x) = f(x)" },
        { key: "b", text: "f(-x) = -f(x)" },
        { key: "c", text: "f(x) = -x" },
        { key: "d", text: "f(x+T) = f(x)" }
      ],
      answer: "b",
      explanation: "f est impaire si f(-x) = -f(x), la courbe est symétrique par rapport à l'origine."
    },
    {
      id: 8,
      question: "Comment calculer la racine carrée en Python ?",
      choices: [
        { key: "a", text: "np.root(x)" },
        { key: "b", text: "np.sqrt(x)" },
        { key: "c", text: "np.square_root(x)" },
        { key: "d", text: "x ** 0.5" }
      ],
      answer: "b",
      explanation: "np.sqrt(x) calcule √x. (x ** 0.5 fonctionne aussi mais np.sqrt est plus explicite)."
    },
    {
      id: 9,
      question: "Quelle est la valeur de np.floor(3.7) ?",
      choices: [
        { key: "a", text: "3" },
        { key: "b", text: "4" },
        { key: "c", text: "3.7" },
        { key: "d", text: "3.0" }
      ],
      answer: "d",
      explanation: "np.floor(3.7) retourne 3.0 (partie entière inférieure)."
    },
    {
      id: 10,
      question: "Le théorème des valeurs intermédiaires (TVI) affirme que si f est continue sur [a,b] :",
      choices: [
        { key: "a", text: "f est dérivable" },
        { key: "b", text: "Pour tout λ entre f(a) et f(b), ∃c tel que f(c) = λ" },
        { key: "c", text: "f est constante" },
        { key: "d", text: "f est monotone" }
      ],
      answer: "b",
      explanation: "Le TVI garantit que f prend toutes les valeurs intermédiaires entre f(a) et f(b)."
    },
    {
      id: 11,
      question: "Comment afficher une grille sur un graphique ?",
      choices: [
        { key: "a", text: "plt.show_grid()" },
        { key: "b", text: "plt.grid(True)" },
        { key: "c", text: "plt.display_grid()" },
        { key: "d", text: "plt.enable_grid()" }
      ],
      answer: "b",
      explanation: "plt.grid(True) affiche une grille sur le graphique."
    },
    {
      id: 12,
      question: "L'inégalité triangulaire pour la valeur absolue est :",
      choices: [
        { key: "a", text: "|x+y| = |x| + |y|" },
        { key: "b", text: "|x+y| ≥ |x| + |y|" },
        { key: "c", text: "|x+y| ≤ |x| + |y|" },
        { key: "d", text: "|x+y| ≤ |x| - |y|" }
      ],
      answer: "c",
      explanation: "L'inégalité triangulaire : ∀x,y∈ℝ, |x+y| ≤ |x| + |y|."
    },
    {
      id: 13,
      question: "Quelle fonction calcule le cosinus en Python ?",
      choices: [
        { key: "a", text: "np.cosine(x)" },
        { key: "b", text: "np.cos(x)" },
        { key: "c", text: "math.cos(x)" },
        { key: "d", text: "np.trig_cos(x)" }
      ],
      answer: "b",
      explanation: "np.cos(x) calcule le cosinus de x."
    },
    {
      id: 14,
      question: "Une application f:E→F est injective si :",
      choices: [
        { key: "a", text: "∀y∈F, ∃x∈E tel que f(x)=y" },
        { key: "b", text: "f(x₁)=f(x₂) ⇒ x₁=x₂" },
        { key: "c", text: "∀x∈E, f(x)∈F" },
        { key: "d", text: "f est continue" }
      ],
      answer: "b",
      explanation: "f est injective si des images égales impliquent des antécédents égaux."
    },
    {
      id: 15,
      question: "Comment ajouter un titre à un graphique ?",
      choices: [
        { key: "a", text: "plt.name('titre')" },
        { key: "b", text: "plt.title('titre')" },
        { key: "c", text: "plt.header('titre')" },
        { key: "d", text: "plt.set_title('titre')" }
      ],
      answer: "b",
      explanation: "plt.title('titre') ajoute un titre au graphique."
    },
    {
      id: 16,
      question: "Une bijection est :",
      choices: [
        { key: "a", text: "Une injection seulement" },
        { key: "b", text: "Une surjection seulement" },
        { key: "c", text: "Une injection ET une surjection" },
        { key: "d", text: "Une fonction continue" }
      ],
      answer: "c",
      explanation: "Une bijection est à la fois injective et surjective."
    },
    {
      id: 17,
      question: "La valeur de np.abs(-5.3) est :",
      choices: [
        { key: "a", text: "-5.3" },
        { key: "b", text: "5.3" },
        { key: "c", text: "5" },
        { key: "d", text: "-5" }
      ],
      answer: "b",
      explanation: "np.abs(-5.3) retourne 5.3 (valeur absolue)."
    },
    {
      id: 18,
      question: "Quelle loi de Morgan est correcte ?",
      choices: [
        { key: "a", text: "(A∩B)̄ = Ā∩B̄" },
        { key: "b", text: "(A∩B)̄ = Ā∪B̄" },
        { key: "c", text: "(A∪B)̄ = Ā∪B̄" },
        { key: "d", text: "(A∩B)̄ = A∪B" }
      ],
      answer: "b",
      explanation: "Loi de Morgan : (A∩B)̄ = Ā∪B̄"
    },
    {
      id: 19,
      question: "Comment calculer sin(π/2) en Python ?",
      choices: [
        { key: "a", text: "np.sin(90)" },
        { key: "b", text: "np.sin(np.pi/2)" },
        { key: "c", text: "np.sin(180)" },
        { key: "d", text: "np.sine(np.pi/2)" }
      ],
      answer: "b",
      explanation: "np.sin(np.pi/2) calcule sin(π/2). Les fonctions trigonométriques utilisent des radians."
    },
    {
      id: 20,
      question: "Le théorème de la bijection monotone dit que si f est continue et strictement monotone sur I :",
      choices: [
        { key: "a", text: "f est dérivable" },
        { key: "b", text: "f est bijective de I sur f(I)" },
        { key: "c", text: "f est périodique" },
        { key: "d", text: "f est constante" }
      ],
      answer: "b",
      explanation: "Si f est continue et strictement monotone sur I, alors f est une bijection de I sur J=f(I)."
    }
  ]
};

const OteriaFonctionsQCMPage = () => {
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [showResults, setShowResults] = useState(false);
  const [showExplanations, setShowExplanations] = useState<{ [key: number]: boolean }>({});

  const handleAnswer = (questionId: number, answer: string) => {
    setUserAnswers({ ...userAnswers, [questionId]: answer });
  };

  const toggleExplanation = (questionId: number) => {
    setShowExplanations({
      ...showExplanations,
      [questionId]: !showExplanations[questionId]
    });
  };

  const calculateScore = () => {
    let correct = 0;
    qcmData.questions.forEach(q => {
      if (userAnswers[q.id] === q.answer) correct++;
    });
    return correct;
  };

  const getScoreColor = (score: number) => {
    const percentage = (score / qcmData.questions.length) * 100;
    if (percentage >= 80) return 'text-green-600';
    if (percentage >= 60) return 'text-yellow-600';
    return 'text-red-600';
  };

  const score = showResults ? calculateScore() : 0;

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
            <span className="text-blue-600 font-medium">Séance 5 - QCM</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <BarChart3 className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-blue-900">{qcmData.title}</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Testez vos connaissances sur les fonctions, Python et les bibliothèques NumPy/Matplotlib
          </p>

          {/* Score */}
          {showResults && (
            <div className="max-w-2xl mx-auto mb-6">
              <Card className="bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-300">
                <CardContent className="p-6">
                  <div className="text-center">
                    <h3 className="text-xl font-semibold text-blue-900 mb-2">Votre score</h3>
                    <p className={`text-5xl font-bold ${getScoreColor(score)}`}>
                      {score} / {qcmData.questions.length}
                    </p>
                    <p className="text-blue-700 mt-2">
                      {Math.round((score / qcmData.questions.length) * 100)}% de bonnes réponses
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          )}

          {/* Ressources pédagogiques */}
          <div className="max-w-4xl mx-auto mb-6">
            <div className="bg-white border border-blue-200 rounded-lg p-6 shadow-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link to="/formation/oteria/fonctions-variable-reelle-cours" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <BookOpen className="h-5 w-5 mx-auto mb-2" />
                    Cours
                  </button>
                </Link>
                <Link to="/formation/oteria/fonctions-exercices" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <Target className="h-5 w-5 mx-auto mb-2" />
                    Exercices
                  </button>
                </Link>
                <Link to="/formation/oteria/fonctions-flashcards" className="group">
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

        {/* Questions */}
        <div className="max-w-4xl mx-auto space-y-6">
          {qcmData.questions.map((q, index) => {
            const isAnswered = userAnswers[q.id] !== undefined;
            const isCorrect = showResults && userAnswers[q.id] === q.answer;
            const isWrong = showResults && isAnswered && !isCorrect;

            return (
              <Card key={q.id} className={`${
                showResults 
                  ? isCorrect ? 'border-green-300 bg-green-50' 
                  : isWrong ? 'border-red-300 bg-red-50' 
                  : 'border-gray-300'
                  : 'border-blue-200'
              }`}>
                <CardHeader>
                  <CardTitle className="flex items-center justify-between">
                    <span className="text-blue-900">
                      Question {index + 1}
                      {showResults && (
                        isCorrect 
                          ? <CheckCircle className="inline ml-2 h-6 w-6 text-green-600" />
                          : isWrong 
                          ? <XCircle className="inline ml-2 h-6 w-6 text-red-600" />
                          : null
                      )}
                    </span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg font-medium text-blue-800 mb-4">{q.question}</p>
                  
                  <div className="space-y-2">
                    {q.choices.map(choice => (
                      <button
                        key={choice.key}
                        onClick={() => !showResults && handleAnswer(q.id, choice.key)}
                        disabled={showResults}
                        className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                          userAnswers[q.id] === choice.key
                            ? showResults
                              ? choice.key === q.answer
                                ? 'border-green-500 bg-green-100'
                                : 'border-red-500 bg-red-100'
                              : 'border-blue-500 bg-blue-100'
                            : showResults && choice.key === q.answer
                            ? 'border-green-500 bg-green-50'
                            : 'border-gray-300 hover:border-blue-400 hover:bg-blue-50'
                        } ${showResults ? 'cursor-default' : 'cursor-pointer'}`}
                      >
                        <span className="font-semibold text-blue-900">{choice.key}.</span> {choice.text}
                      </button>
                    ))}
                  </div>

                  {showResults && (
                    <div className="mt-4">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => toggleExplanation(q.id)}
                        className="text-blue-600"
                      >
                        {showExplanations[q.id] ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
                        {showExplanations[q.id] ? 'Masquer' : 'Voir'} l'explication
                      </Button>
                      {showExplanations[q.id] && (
                        <div className="mt-2 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                          <p className="text-blue-800">{q.explanation}</p>
                        </div>
                      )}
                    </div>
                  )}
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Bouton de validation */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="flex justify-center gap-4">
            {!showResults ? (
              <Button
                onClick={() => setShowResults(true)}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
                disabled={Object.keys(userAnswers).length !== qcmData.questions.length}
              >
                Valider mes réponses ({Object.keys(userAnswers).length}/{qcmData.questions.length})
              </Button>
            ) : (
              <Button
                onClick={() => {
                  setUserAnswers({});
                  setShowResults(false);
                  setShowExplanations({});
                  window.scrollTo(0, 0);
                }}
                size="lg"
                className="bg-blue-600 hover:bg-blue-700"
              >
                Recommencer le QCM
              </Button>
            )}
          </div>
        </div>

        {/* Navigation */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="flex justify-between items-center bg-blue-50 p-6 rounded-lg">
            <Link to="/formation/oteria/fonctions-flashcards">
              <div className="text-blue-600 hover:text-blue-700">← Flashcards</div>
            </Link>
            <div className="flex gap-3">
              <Link to="/formation/oteria/fonctions-variable-reelle-cours">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Cours
                </button>
              </Link>
              <Link to="/formation/oteria/fonctions-exercices">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Exercices
                </button>
              </Link>
              <Link to="/articles/oteria-cyber-school">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Retour au programme
                </button>
              </Link>
            </div>
            <Link to="/formation/oteria/polynomes-cours">
              <div className="text-blue-600 hover:text-blue-700">Séance suivante →</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OteriaFonctionsQCMPage;

