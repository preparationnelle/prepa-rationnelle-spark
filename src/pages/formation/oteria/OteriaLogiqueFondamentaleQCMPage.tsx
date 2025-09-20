import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, BookOpen, Target, Binary, Calculator, CheckCircle, XCircle, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Données du QCM
const qcmData = {
  title: "Logique & Raisonnement fondamentaux — QCM (20 questions)",
  questions: [
    {
      id: 1,
      question: "Laquelle des phrases est une proposition ?",
      choices: [
        { key: "a", text: "« 2+3=5 »" },
        { key: "b", text: "« x+1=4 »" },
        { key: "c", text: "« Dessine-moi un mouton »" },
        { key: "d", text: "« n est pair »" }
      ],
      answer: "a",
      explanation: "Une proposition a une valeur de vérité (vrai/faux). « 2+3=5 » est vraie. Les énoncés avec variables libres (b, d) ne sont pas des propositions fermées ; (c) n'a pas de valeur logique."
    },
    {
      id: 2,
      question: "La phrase « x+1=4 » est :",
      choices: [
        { key: "a", text: "Une proposition vraie" },
        { key: "b", text: "Une proposition fausse" },
        { key: "c", text: "Pas une proposition tant que x n'est pas précisé" },
        { key: "d", text: "Une tautologie" }
      ],
      answer: "c",
      explanation: "Énoncé ouvert : sa vérité dépend de x (vrai si x=3, faux si x=2)."
    },
    {
      id: 3,
      question: "La négation de « Tous les étudiants sont motivés » est :",
      choices: [
        { key: "a", text: "Aucun étudiant n'est motivé" },
        { key: "b", text: "Certains étudiants ne sont pas motivés" },
        { key: "c", text: "Tous les étudiants sont paresseux" },
        { key: "d", text: "Il existe un étudiant très motivé" }
      ],
      answer: "b",
      explanation: "¬(∀x, P(x)) ≡ ∃x, ¬P(x). Il suffit d'un contre-exemple."
    },
    {
      id: 4,
      question: "La négation de « Il existe un entier divisible par 7 et 11 » est :",
      choices: [
        { key: "a", text: "Aucun entier n'est divisible par 7" },
        { key: "b", text: "Aucun entier n'est divisible par 11" },
        { key: "c", text: "Aucun entier n'est divisible à la fois par 7 et 11" },
        { key: "d", text: "Tous les entiers sont divisibles par 7 ou 11" }
      ],
      answer: "c",
      explanation: "¬(∃x, P(x)) ≡ ∀x, ¬P(x). On nie l'existence par une universalité du contraire."
    },
    {
      id: 5,
      question: "La contraposée de « Si n² est pair, alors n est pair » est :",
      choices: [
        { key: "a", text: "Si n² est impair, alors n est impair" },
        { key: "b", text: "Si n est pair, alors n² est pair" },
        { key: "c", text: "Si n est impair, alors n² est impair" },
        { key: "d", text: "Si n² est impair, alors n est pair" }
      ],
      answer: "c",
      explanation: "Contraposée de P⇒Q : ¬Q⇒¬P. Ici Q≡« n pair », ¬Q≡« n impair » ; ¬P≡« n² impair »."
    },
    {
      id: 6,
      question: "Traduire ∀x∈ℝ, x² ≥ 0 :",
      choices: [
        { key: "a", text: "Pour tout réel x, x² est positif ou nul" },
        { key: "b", text: "Il existe un réel x tel que x² ≥ 0" },
        { key: "c", text: "Il existe un réel unique x tel que x² ≥ 0" },
        { key: "d", text: "Pour tout réel x, x² est strictement positif" }
      ],
      answer: "a",
      explanation: "Tout carré réel est ≥ 0."
    },
    {
      id: 7,
      question: "La négation de ∀x∈ℝ, x² ≥ 0 est :",
      choices: [
        { key: "a", text: "∃x∈ℝ, x² > 0" },
        { key: "b", text: "∃x∈ℝ, x² < 0" },
        { key: "c", text: "∀x∈ℝ, x² ≤ 0" },
        { key: "d", text: "∃x∈ℝ, x² = 0" }
      ],
      answer: "b",
      explanation: "¬∀ ≡ ∃ et on nie la propriété : x² ≥ 0 devient x² < 0 (même si c'est impossible en ℝ)."
    },
    {
      id: 8,
      question: "Traduire ∃!x∈ℝ, x² = 0 :",
      choices: [
        { key: "a", text: "Il existe au moins un réel dont le carré est nul" },
        { key: "b", text: "Il existe un réel dont le carré est nul et c'est le seul" },
        { key: "c", text: "Il existe un réel dont le carré est strictement positif" },
        { key: "d", text: "Tous les réels ont un carré nul" }
      ],
      answer: "b",
      explanation: "La solution unique est x=0 (unicité cruciale)."
    },
    {
      id: 9,
      question: "Si P=Vrai et Q=Faux, alors P∧Q vaut :",
      choices: [
        { key: "a", text: "Vrai" },
        { key: "b", text: "Faux" }
      ],
      answer: "b",
      explanation: "Conjonction vraie ⇔ les deux sont vrais. Ici Q est faux."
    },
    {
      id: 10,
      question: "La proposition « n multiple de 4 ⇒ n est pair » est :",
      choices: [
        { key: "a", text: "Toujours vraie" },
        { key: "b", text: "Toujours fausse" },
        { key: "c", text: "Vraie seulement pour certains n" },
        { key: "d", text: "Indécidable" }
      ],
      answer: "a",
      explanation: "Tout multiple de 4 est multiple de 2, donc pair."
    },
    {
      id: 11,
      question: "La disjonction de cas consiste à :",
      choices: [
        { key: "a", text: "Démontrer en testant des exemples au hasard" },
        { key: "b", text: "Diviser le problème en sous-cas couvrant toutes les possibilités" },
        { key: "c", text: "Démontrer en supposant le contraire" },
        { key: "d", text: "Utiliser la récurrence" }
      ],
      answer: "b",
      explanation: "On traite des cas exclusifs et exhaustifs (ex : n pair ou n impair)."
    },
    {
      id: 12,
      question: "Quelle méthode correspond à : « Supposons que √2 est rationnel et aboutissons à une contradiction » ?",
      choices: [
        { key: "a", text: "Preuve directe" },
        { key: "b", text: "Contraposée" },
        { key: "c", text: "Raisonnement par disjonction de cas" },
        { key: "d", text: "Raisonnement par l'absurde" }
      ],
      answer: "d",
      explanation: "On suppose la négation de l'énoncé à prouver et on obtient une impossibilité."
    },
    {
      id: 13,
      question: "La contraposée de « Si n² est impair, alors n est impair » est :",
      choices: [
        { key: "a", text: "Si n est impair, alors n² est impair" },
        { key: "b", text: "Si n est pair, alors n² est pair" },
        { key: "c", text: "Si n est impair, alors n² est pair" },
        { key: "d", text: "Si n² est pair, alors n est pair" }
      ],
      answer: "b",
      explanation: "P≡« n² impair », Q≡« n impair ». Contraposée : ¬Q⇒¬P, soit « n pair ⇒ n² pair »."
    },
    {
      id: 14,
      question: "Laquelle des phrases traduit correctement « P ⇔ Q » ?",
      choices: [
        { key: "a", text: "P⇒Q" },
        { key: "b", text: "Q⇒P" },
        { key: "c", text: "P⇒Q et Q⇒P" },
        { key: "d", text: "P∧Q" }
      ],
      answer: "c",
      explanation: "Équivalence = double implication."
    },
    {
      id: 15,
      question: "P est nécessaire pour Q si :",
      choices: [
        { key: "a", text: "P⇒Q" },
        { key: "b", text: "Q⇒P" },
        { key: "c", text: "P⇔Q" },
        { key: "d", text: "Ni l'un ni l'autre" }
      ],
      answer: "b",
      explanation: "Si Q est vrai, P doit l'être : Q⇒P (ex : être majeur est nécessaire pour voter)."
    },
    {
      id: 16,
      question: "La proposition ∀x∈ℝ, ∃y∈ℝ, x+y=0 est :",
      choices: [
        { key: "a", text: "Vraie" },
        { key: "b", text: "Fausse" }
      ],
      answer: "a",
      explanation: "Prendre y=−x pour chaque x."
    },
    {
      id: 17,
      question: "La proposition ∃y∈ℝ, ∀x∈ℝ, x+y=0 est :",
      choices: [
        { key: "a", text: "Vraie" },
        { key: "b", text: "Fausse" }
      ],
      answer: "b",
      explanation: "Aucun y unique ne convient pour tous les x (x=0 ⇒ y=0 ; x=1 ⇒ y=−1, contradiction)."
    },
    {
      id: 18,
      question: "Démontrer par récurrence consiste à :",
      choices: [
        { key: "a", text: "Vérifier la propriété pour n=0 (ou 1)" },
        { key: "b", text: "Supposer la propriété vraie pour n et montrer pour n+1" },
        { key: "c", text: "(a) et (b)" },
        { key: "d", text: "Aucun des deux" }
      ],
      answer: "c",
      explanation: "Deux étapes : initialisation + hérédité."
    },
    {
      id: 19,
      question: "Quelle méthode consiste à supposer le contraire et obtenir une contradiction ?",
      choices: [
        { key: "a", text: "Contraposée" },
        { key: "b", text: "Disjonction de cas" },
        { key: "c", text: "Raisonnement par l'absurde" },
        { key: "d", text: "Récurrence" }
      ],
      answer: "c",
      explanation: "Supposer ¬Énoncé et déduire une impossibilité."
    },
    {
      id: 20,
      question: "Les solutions de x²=9 par analyse–synthèse sont :",
      choices: [
        { key: "a", text: "3 seulement" },
        { key: "b", text: "-3 seulement" },
        { key: "c", text: "-3 et 3" },
        { key: "d", text: "0" }
      ],
      answer: "c",
      explanation: "Analyse : x=±3. Synthèse : vérification que -3 et 3 conviennent."
    }
  ]
};

const OteriaLogiqueFondamentaleQCMPage = () => {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showExplanations, setShowExplanations] = useState(false);

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

  const resetQCM = () => {
    setAnswers({});
    setShowResults(false);
    setShowExplanations(false);
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
            <span className="text-teal-600 font-medium">Séance 1 - QCM</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <Binary className="h-8 w-8 text-teal-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-teal-900">Séance 1 : QCM - Logique fondamentale</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Testez vos connaissances avec des questionnaires à choix multiples
          </p>

          {/* Informations de séance */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Numéro de séance</span>
                  <span className="text-2xl font-bold text-blue-900">1</span>
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
            <Link to="/formation/oteria/logique-fondamentale-cours">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <BookOpen className="h-4 w-4 mr-2" />
                Cours
              </Button>
            </Link>
            <Link to="/formation/oteria/logique-fondamentale-exercices">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Target className="h-4 w-4 mr-2" />
                Exercices
              </Button>
            </Link>
            <Link to="/formation/oteria/logique-fondamentale-flashcards">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <Calculator className="h-4 w-4 mr-2" />
                Flashcards
              </Button>
            </Link>
            <Link to="/articles/oteria-cyber-school">
              <Button variant="default" className="bg-teal-600 hover:bg-teal-700">
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
                  <Badge variant="outline" className={`text-lg px-4 py-2 ${
                    scorePercentage >= 80 ? 'border-green-500 text-green-700 bg-green-50' :
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
                    onClick={() => setShowResults(true)}
                    disabled={Object.keys(answers).length < qcmData.questions.length}
                    className="bg-blue-600 hover:bg-blue-700"
                  >
                    <CheckCircle className="h-4 w-4 mr-2" />
                    Valider les réponses ({Object.keys(answers).length}/{qcmData.questions.length})
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
                        className={`p-4 rounded-lg border-2 cursor-pointer transition-all duration-200 ${
                          showResults ? (
                            showCorrectAnswer ? 'border-green-500 bg-green-50' :
                            showWrongAnswer ? 'border-red-500 bg-red-50' :
                            isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white'
                          ) : (
                            isSelected ? 'border-blue-500 bg-blue-50' : 'border-gray-200 bg-white hover:border-blue-300'
                          )
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${
                            showResults ? (
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
                          <span className={`font-medium ${
                            showResults ? (
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
            <div className="text-blue-600">Séance précédente</div>
            <div className="flex gap-3">
              <Link to="/formation/oteria/logique-fondamentale-cours">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <BookOpen className="h-4 w-4 mr-2" />
                  Cours
                </Button>
              </Link>
              <Link to="/formation/oteria/logique-fondamentale-exercices">
                <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                  <Target className="h-4 w-4 mr-2" />
                  Exercices
                </Button>
              </Link>
              <Link to="/formation/oteria/logique-fondamentale-flashcards">
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

export default OteriaLogiqueFondamentaleQCMPage;
