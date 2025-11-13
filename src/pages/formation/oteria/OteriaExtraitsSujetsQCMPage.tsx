import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, BookOpen, Target, Database, Calculator, CheckCircle, XCircle, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Données du QCM
const qcmData = {
  title: "Extraits de Sujets — QCM de Révision (19 questions)",
  subtitle: "Mathématiques et Python appliqués à l'Informatique",
  duration: "Durée indicative : 3 heures",
  questions: [
    {
      id: 1,
      chapter: "Chapitre 1 : Logique et Ensembles",
      question: "La négation de la proposition « Tous les entiers naturels sont pairs » est :",
      choices: [
        { key: "a", text: "Aucun entier naturel n'est pair." },
        { key: "b", text: "Il existe un entier naturel impair." },
        { key: "c", text: "Tous les entiers naturels sont impairs." },
        { key: "d", text: "Aucun entier naturel n'est impair." }
      ],
      answer: "b",
      explanation: "La négation de « Pour tout x, P(x) » est « Il existe x tel que non P(x) »."
    },
    {
      id: 2,
      chapter: "Chapitre 1 : Logique et Ensembles",
      question: "Si A et B sont deux ensembles, alors x ∈ A ∩ B signifie :",
      choices: [
        { key: "a", text: "x ∈ A et x ∈ B." },
        { key: "b", text: "x ∈ A ou x ∈ B." },
        { key: "c", text: "x ∉ A ou x ∉ B." },
        { key: "d", text: "x ∉ A et x ∉ B." }
      ],
      answer: "a",
      explanation: "L'intersection A ∩ B contient les éléments communs aux deux ensembles."
    },
    {
      id: 3,
      chapter: "Chapitre 1 : Logique et Ensembles",
      question: "La loi de De Morgan pour les ensembles stipule que :",
      choices: [
        { key: "a", text: "Ā ∪ B̄ = Ā ∩ B̄" },
        { key: "b", text: "Ā ∩ B̄ = Ā ∪ B̄" },
        { key: "c", text: "A ∪ B = A ∩ B" },
        { key: "d", text: "A ∩ B = ∅" }
      ],
      answer: "b",
      explanation: "La loi de De Morgan : Ā ∩ B̄ = (A ∪ B)̄"
    },
    {
      id: 4,
      chapter: "Chapitre 1 : Logique et Ensembles",
      question: "Une fonction f est dite injective si :",
      choices: [
        { key: "a", text: "Deux images différentes ont la même préimage." },
        { key: "b", text: "Deux antécédents différents ont des images différentes." },
        { key: "c", text: "Chaque élément du codomaine a une image." },
        { key: "d", text: "L'image de f est égale à son domaine." }
      ],
      answer: "b",
      explanation: "Une fonction injective établit une correspondance bijective entre éléments distincts."
    },
    {
      id: 5,
      chapter: "Chapitre 2 : Python et Algorithmes",
      question: "Que renvoie le code suivant ?\n\ns = 0\nfor k in range(1, 4):\n    s += k\nprint(s)",
      choices: [
        { key: "a", text: "3" },
        { key: "b", text: "6" },
        { key: "c", text: "10" },
        { key: "d", text: "4" }
      ],
      answer: "b",
      explanation: "range(1, 4) donne [1, 2, 3], donc 1 + 2 + 3 = 6."
    },
    {
      id: 6,
      chapter: "Chapitre 2 : Python et Algorithmes",
      question: "Dans une boucle, l'initialisation d'un produit doit se faire avec :",
      choices: [
        { key: "a", text: "1" },
        { key: "b", text: "0" },
        { key: "c", text: "La première valeur de la suite" },
        { key: "d", text: "Aucun initialiseur" }
      ],
      answer: "a",
      explanation: "Pour un produit, l'initialisation doit être 1 (élément neutre de la multiplication)."
    },
    {
      id: 7,
      chapter: "Chapitre 2 : Python et Algorithmes",
      question: "Quelle est la sortie de ce programme ?\n\nimport math\ndef binom(n, k):\n    return math.factorial(n) // (math.factorial(k)*math.factorial(n-k))\nprint(binom(5,2))",
      choices: [
        { key: "a", text: "5" },
        { key: "b", text: "10" },
        { key: "c", text: "25" },
        { key: "d", text: "20" }
      ],
      answer: "b",
      explanation: "C(5,2) = 5! / (2! × 3!) = 120 / (2 × 6) = 120 / 12 = 10."
    },
    {
      id: 8,
      chapter: "Chapitre 2 : Python et Algorithmes",
      question: "Que calcule le code suivant ?\n\ndef trace(M):\n    s = 0\n    for i in range(len(M)):\n        s += M[i][i]\n    return s",
      choices: [
        { key: "a", text: "Le déterminant de M" },
        { key: "b", text: "La trace de M" },
        { key: "c", text: "La somme de tous les coefficients de M" },
        { key: "d", text: "La norme de M" }
      ],
      answer: "b",
      explanation: "La trace d'une matrice est la somme des éléments de sa diagonale principale."
    },
    {
      id: 9,
      chapter: "Chapitre 3 : Suites et Raisonnements",
      question: "Une suite (uₙ) est croissante si :",
      choices: [
        { key: "a", text: "uₙ₊₁ ≥ uₙ pour tout n" },
        { key: "b", text: "uₙ₊₁ ≤ uₙ pour tout n" },
        { key: "c", text: "Elle a une limite finie" },
        { key: "d", text: "Elle est bornée" }
      ],
      answer: "a",
      explanation: "Une suite croissante vérifie uₙ₊₁ ≥ uₙ pour tout entier n."
    },
    {
      id: 10,
      chapter: "Chapitre 3 : Suites et Raisonnements",
      question: "Si une suite est croissante et majorée, alors :",
      choices: [
        { key: "a", text: "Elle converge." },
        { key: "b", text: "Elle diverge." },
        { key: "c", text: "Elle est bornée mais non convergente." },
        { key: "d", text: "Elle est constante." }
      ],
      answer: "a",
      explanation: "Théorème de convergence monotone : une suite croissante majorée converge."
    },
    {
      id: 11,
      chapter: "Chapitre 4 : Combinatoire et Probabilités",
      question: "Le nombre de combinaisons de n éléments pris k à k est :",
      choices: [
        { key: "a", text: "Cₙᵏ = n! / (k!(n-k)!)" },
        { key: "b", text: "Aₙᵏ = n! / (n-k)!" },
        { key: "c", text: "Pₙ = n!" },
        { key: "d", text: "Cₙᵏ = nᵏ" }
      ],
      answer: "a",
      explanation: "La formule des combinaisons est C(n,k) = n! / (k! × (n-k)!)."
    },
    {
      id: 12,
      chapter: "Chapitre 4 : Combinatoire et Probabilités",
      question: "Dans une urne contenant 5 boules, on en tire 2 sans ordre ni remise. On a affaire à :",
      choices: [
        { key: "a", text: "Une combinaison" },
        { key: "b", text: "Un arrangement" },
        { key: "c", text: "Une permutation" },
        { key: "d", text: "Une loi géométrique" }
      ],
      answer: "a",
      explanation: "Le tirage sans considération de l'ordre est une combinaison."
    },
    {
      id: 13,
      chapter: "Chapitre 4 : Combinatoire et Probabilités",
      question: "Une loi de Bernoulli modélise :",
      choices: [
        { key: "a", text: "Une expérience à deux issues (succès/échec)" },
        { key: "b", text: "Une suite d'expériences indépendantes" },
        { key: "c", text: "Un nombre de succès dans n essais" },
        { key: "d", text: "Une expérience continue" }
      ],
      answer: "a",
      explanation: "La loi de Bernoulli décrit une expérience aléatoire à deux issues."
    },
    {
      id: 14,
      chapter: "Chapitre 4 : Combinatoire et Probabilités",
      question: "La loi binomiale correspond :",
      choices: [
        { key: "a", text: "À un seul essai" },
        { key: "b", text: "À n essais indépendants de Bernoulli" },
        { key: "c", text: "À une variable continue" },
        { key: "d", text: "À un calcul de moyenne" }
      ],
      answer: "b",
      explanation: "La loi binomiale compte le nombre de succès dans n épreuves de Bernoulli indépendantes."
    },
    {
      id: 15,
      chapter: "Chapitre 5 : Simulation et Méthode de Monte Carlo",
      question: "La méthode de Monte Carlo pour estimer π repose sur :",
      choices: [
        { key: "a", text: "Le rapport du nombre de points dans le disque sur le nombre total de points." },
        { key: "b", text: "La somme des entiers pairs jusqu'à n." },
        { key: "c", text: "Le développement en série de π." },
        { key: "d", text: "La dérivation d'une fonction circulaire." }
      ],
      answer: "a",
      explanation: "L'estimation de π utilise le rapport des points dans le quart de disque."
    },
    {
      id: 16,
      chapter: "Chapitre 5 : Simulation et Méthode de Monte Carlo",
      question: "Pour simuler un tirage aléatoire uniforme dans [0,1], on utilise :",
      choices: [
        { key: "a", text: "random.random()" },
        { key: "b", text: "math.random()" },
        { key: "c", text: "numpy.sqrt()" },
        { key: "d", text: "randint(1)" }
      ],
      answer: "a",
      explanation: "random.random() génère un nombre aléatoire uniforme dans [0, 1)."
    },
    {
      id: 17,
      chapter: "Chapitre 6 : Matrices",
      question: "Une matrice diagonale :",
      choices: [
        { key: "a", text: "N'a que des zéros hors diagonale principale." },
        { key: "b", text: "Est toujours carrée et symétrique." },
        { key: "c", text: "A toutes ses lignes identiques." },
        { key: "d", text: "Ne peut pas être inversée." }
      ],
      answer: "a",
      explanation: "Une matrice diagonale a tous ses coefficients non diagonaux égaux à zéro."
    },
    {
      id: 18,
      chapter: "Chapitre 6 : Matrices",
      question: "La trace d'une matrice M est :",
      choices: [
        { key: "a", text: "La somme des coefficients diagonaux de M." },
        { key: "b", text: "Le produit des coefficients diagonaux de M." },
        { key: "c", text: "Le nombre de lignes de M." },
        { key: "d", text: "La norme de M." }
      ],
      answer: "a",
      explanation: "La trace est la somme des éléments de la diagonale principale."
    },
    {
      id: 19,
      chapter: "Chapitre 6 : Matrices",
      question: "Si M est antisymétrique (Mᵀ = -M), alors :",
      choices: [
        { key: "a", text: "Les coefficients diagonaux sont nuls." },
        { key: "b", text: "La trace est toujours égale à 1." },
        { key: "c", text: "Tous les coefficients sont positifs." },
        { key: "d", text: "M est diagonale." }
      ],
      answer: "a",
      explanation: "Dans une matrice antisymétrique, Mᵢᵢ = -Mᵢᵢ donc Mᵢᵢ = 0."
    }
  ]
};

const OteriaExtraitsSujetsQCMPage: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);
  const [showExplanations, setShowExplanations] = useState<Record<number, boolean>>({});

  const handleAnswer = (questionId: number, answer: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: answer }));
  };

  const toggleExplanation = (questionId: number) => {
    setShowExplanations(prev => ({ ...prev, [questionId]: !prev[questionId] }));
  };

  const calculateScore = () => {
    const totalQuestions = qcmData.questions.length;
    const correctAnswers = qcmData.questions.filter(q => answers[q.id] === q.answer).length;
    return { correct: correctAnswers, total: totalQuestions };
  };

  const nextQuestion = () => {
    if (currentQuestion < qcmData.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers({});
    setShowResults(false);
    setShowExplanations({});
  };

  const question = qcmData.questions[currentQuestion];
  const { correct, total } = calculateScore();

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/articles/oteria-cyber-school">
            <Button variant="outline" className="mb-4 border-2 border-teal-600 text-teal-600 hover:bg-teal-50">
              <Home className="mr-2 h-4 w-4" />
              Retour à l'accueil
            </Button>
          </Link>
          <h1 className="text-3xl font-bold text-blue-900 mb-2">{qcmData.title}</h1>
          <p className="text-lg text-blue-700 mb-2">{qcmData.subtitle}</p>
          <p className="text-sm text-blue-600 mb-4 font-medium">{qcmData.duration}</p>
          <div className="flex items-center justify-center gap-4 mb-4">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              <Target className="mr-1 h-3 w-3" />
              Question {currentQuestion + 1} / {qcmData.questions.length}
            </Badge>
            {!showResults && (
              <Badge variant="outline" className="border-blue-300 text-blue-700">
                <Calculator className="mr-1 h-3 w-3" />
                {Object.keys(answers).length} / {qcmData.questions.length} répondues
              </Badge>
            )}
          </div>
        </div>

        {/* Results */}
        {showResults && (
          <Card className="mb-8 border-2 border-blue-200">
            <CardHeader className="bg-blue-50">
              <CardTitle className="text-center text-blue-900 flex items-center justify-center gap-2">
                <Database className="h-5 w-5" />
                Résultats du QCM
              </CardTitle>
            </CardHeader>
            <CardContent className="text-center py-8">
              <div className="text-6xl font-bold text-blue-600 mb-4">
                {correct}/{total}
              </div>
              <p className="text-xl text-blue-700 mb-6">
                Score : {Math.round((correct / total) * 100)}%
              </p>
              <div className="flex justify-center gap-4">
                <Button onClick={resetQuiz} className="bg-blue-600 hover:bg-blue-700">
                  Refaire le QCM
                </Button>
                <Link to="/articles/oteria-cyber-school">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Retour au programme
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Question */}
        {!showResults && (
          <Card className="mb-8 border-2 border-blue-200">
            <CardHeader className="bg-blue-50">
              <Badge variant="outline" className="mb-2 border-blue-300 text-blue-700">
                {question.chapter}
              </Badge>
              <CardTitle className="text-blue-900 whitespace-pre-line">{question.question}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {question.choices.map((choice) => (
                  <button
                    key={choice.key}
                    onClick={() => handleAnswer(question.id, choice.key)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all duration-200 ${
                      answers[question.id] === choice.key
                        ? 'border-blue-500 bg-blue-50 text-blue-900'
                        : 'border-gray-200 hover:border-blue-300 hover:bg-blue-25'
                    }`}
                  >
                    <span className="font-medium mr-3">{choice.key.toUpperCase()}.</span>
                    <span className="whitespace-pre-line">{choice.text}</span>
                  </button>
                ))}
              </div>

              {/* Show explanation if answer selected */}
              {answers[question.id] && (
                <div className="mt-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-medium text-gray-900 flex items-center gap-2">
                      {answers[question.id] === question.answer ? (
                        <CheckCircle className="h-4 w-4 text-green-600" />
                      ) : (
                        <XCircle className="h-4 w-4 text-red-600" />
                      )}
                      {answers[question.id] === question.answer ? 'Bonne réponse !' : 'Réponse incorrecte'}
                    </h4>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => toggleExplanation(question.id)}
                      className="text-blue-600 hover:text-blue-800"
                    >
                      {showExplanations[question.id] ? (
                        <>
                          <EyeOff className="mr-1 h-3 w-3" />
                          Masquer
                        </>
                      ) : (
                        <>
                          <Eye className="mr-1 h-3 w-3" />
                          Explication
                        </>
                      )}
                    </Button>
                  </div>

                  {showExplanations[question.id] && (
                    <p className="text-gray-700">{question.explanation}</p>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Navigation */}
        {!showResults && (
          <div className="flex justify-between items-center">
            <Button
              onClick={prevQuestion}
              disabled={currentQuestion === 0}
              variant="outline"
              className="border-blue-600 text-blue-600 hover:bg-blue-50 disabled:opacity-50"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Précédent
            </Button>

            <div className="flex gap-2">
              {qcmData.questions.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentQuestion(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentQuestion
                      ? 'bg-blue-600'
                      : answers[qcmData.questions[index].id]
                      ? 'bg-blue-300'
                      : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>

            <Button
              onClick={nextQuestion}
              disabled={!answers[question.id]}
              className="bg-blue-600 hover:bg-blue-700 disabled:opacity-50"
            >
              {currentQuestion === qcmData.questions.length - 1 ? 'Voir résultats' : 'Suivant'}
              <ChevronRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        )}

        {/* Progress indicator */}
        {!showResults && (
          <div className="mt-8">
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentQuestion + 1) / qcmData.questions.length) * 100}%` }}
              />
            </div>
            <p className="text-center text-sm text-gray-600 mt-2">
              {Math.round(((currentQuestion + 1) / qcmData.questions.length) * 100)}% terminé
            </p>
          </div>
        )}

        {/* Warning message */}
        {Object.keys(answers).length !== qcmData.questions.length && !showResults && (
          <p className="text-gray-500 text-sm text-center mt-4">
            Répondez à toutes les questions pour voir vos résultats
          </p>
        )}

        {/* Navigation to other pages */}
        <div className="text-center mt-12">
          <Link to="/articles/oteria-cyber-school">
            <Button variant="outline" className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50">
              ← Retour au programme OTERIA
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OteriaExtraitsSujetsQCMPage;
