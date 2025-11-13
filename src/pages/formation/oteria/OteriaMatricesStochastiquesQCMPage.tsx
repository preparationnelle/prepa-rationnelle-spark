import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, BookOpen, Target, Database, Calculator, CheckCircle, XCircle, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Données du QCM
const qcmData = {
  title: "Arithmétique Modulaire & Cryptographie Affine — QCM (20 questions)",
  questions: [
    {
      id: 1,
      question: "Quelle est la définition correcte de la divisibilité en mathématiques ?",
      choices: [
        { key: "a", text: "a divise b si b est multiple de a" },
        { key: "b", text: "a divise b si a = b × k pour un entier k" },
        { key: "c", text: "a divise b si a est plus petit que b" },
        { key: "d", text: "a divise b si a et b sont pairs" }
      ],
      answer: "b",
      explanation: "a divise b (noté a|b) s'il existe un entier k tel que b = a × k."
    },
    {
      id: 2,
      question: "Quel théorème énonce qu'un entier p > 1 est premier si ses seuls diviseurs positifs sont 1 et p ?",
      choices: [
        { key: "a", text: "Théorème de Fermat" },
        { key: "b", text: "Théorème de Wilson" },
        { key: "c", text: "Définition des nombres premiers" },
        { key: "d", text: "Théorème fondamental de l'arithmétique" }
      ],
      answer: "c",
      explanation: "C'est la définition même des nombres premiers."
    },
    {
      id: 3,
      question: "Dans la division euclidienne de a par b > 0, quel est le domaine de variation du reste r ?",
      choices: [
        { key: "a", text: "0 ≤ r < b" },
        { key: "b", text: "0 ≤ r ≤ b" },
        { key: "c", text: "1 ≤ r ≤ b" },
        { key: "d", text: "r peut être négatif" }
      ],
      answer: "a",
      explanation: "Le reste r vérifie toujours 0 ≤ r < b dans la division euclidienne."
    },
    {
      id: 4,
      question: "Quelle est la définition correcte de la congruence modulo n ?",
      choices: [
        { key: "a", text: "a ≡ b mod n si n divise (a - b)" },
        { key: "b", text: "a ≡ b mod n si a = b" },
        { key: "c", text: "a ≡ b mod n si a et b sont pairs" },
        { key: "d", text: "a ≡ b mod n si n divise (a + b)" }
      ],
      answer: "a",
      explanation: "La congruence modulo n signifie que n divise la différence (a - b)."
    },
    {
      id: 5,
      question: "Quelle propriété est vraie pour l'arithmétique modulaire ?",
      choices: [
        { key: "a", text: "Si a ≡ b mod n et c ≡ d mod n, alors a + c ≡ b + d mod n" },
        { key: "b", text: "Si a ≡ b mod n, alors a = b" },
        { key: "c", text: "La congruence est seulement valable pour les nombres pairs" },
        { key: "d", text: "Il n'y a pas de propriétés additives" }
      ],
      answer: "a",
      explanation: "L'arithmétique modulaire respecte les opérations usuelles : addition, soustraction et multiplication."
    },
    {
      id: 6,
      question: "Quand un entier a admet-il un inverse modulo n ?",
      choices: [
        { key: "a", text: "Toujours" },
        { key: "b", text: "Seulement si a est premier avec n" },
        { key: "c", text: "Seulement si a > n" },
        { key: "d", text: "Jamais pour n > 2" }
      ],
      answer: "b",
      explanation: "Un inverse modulo n existe seulement si pgcd(a, n) = 1."
    },
    {
      id: 7,
      question: "Quel algorithme permet de trouver l'inverse modulo n et le PGCD ?",
      choices: [
        { key: "a", text: "Algorithme d'Euclide" },
        { key: "b", text: "Algorithme d'Euclide étendu" },
        { key: "c", text: "Algorithme de Gauss" },
        { key: "d", text: "Algorithme de Newton" }
      ],
      answer: "b",
      explanation: "L'algorithme d'Euclide étendu trouve le PGCD et les coefficients de Bézout."
    },
    {
      id: 8,
      question: "Quelle est la formule du chiffrement affine ?",
      choices: [
        { key: "a", text: "E(x) = (a × x + b) mod 26" },
        { key: "b", text: "E(x) = (a + x + b) mod 26" },
        { key: "c", text: "E(x) = (a × x) mod 26" },
        { key: "d", text: "E(x) = x + b mod 26" }
      ],
      answer: "a",
      explanation: "Le chiffrement affine utilise la formule E(x) = (a × x + b) mod 26."
    },
    {
      id: 9,
      question: "Quelle condition doit vérifier la clé a dans le chiffrement affine ?",
      choices: [
        { key: "a", text: "a doit être impair" },
        { key: "b", text: "pgcd(a, 26) = 1" },
        { key: "c", text: "a doit être supérieur à 13" },
        { key: "d", text: "a peut être quelconque" }
      ],
      answer: "b",
      explanation: "a doit être premier avec 26 pour que le déchiffrement soit possible."
    },
    {
      id: 10,
      question: "Quelle est la formule du déchiffrement affine ?",
      choices: [
        { key: "a", text: "D(y) = a^{-1} × (y - b) mod 26" },
        { key: "b", text: "D(y) = (y - b) × a mod 26" },
        { key: "c", text: "D(y) = y + b mod 26" },
        { key: "d", text: "D(y) = y × a mod 26" }
      ],
      answer: "a",
      explanation: "Le déchiffrement utilise l'inverse de a : D(y) = a^{-1} × (y - b) mod 26."
    },
    {
      id: 11,
      question: "Quel est l'inverse de 5 modulo 26 ?",
      choices: [
        { key: "a", text: "21" },
        { key: "b", text: "5" },
        { key: "c", text: "13" },
        { key: "d", text: "1" }
      ],
      answer: "a",
      explanation: "Puisque 5 × 21 = 105 ≡ 105 - 4×26 = 105 - 104 = 1 mod 26."
    },
    {
      id: 12,
      question: "Dans RSA, quelle est la relation entre les clés publique et privée ?",
      choices: [
        { key: "a", text: "e × d ≡ 1 mod φ(n)" },
        { key: "b", text: "e + d = φ(n)" },
        { key: "c", text: "e = d" },
        { key: "d", text: "e × d = n" }
      ],
      answer: "a",
      explanation: "Les exposants e et d sont inverses modulo φ(n) : e × d ≡ 1 mod φ(n)."
    },
    {
      id: 13,
      question: "Dans RSA, comment calcule-t-on φ(n) pour n = p × q ?",
      choices: [
        { key: "a", text: "φ(n) = (p-1) × (q-1)" },
        { key: "b", text: "φ(n) = p × q" },
        { key: "c", text: "φ(n) = p + q" },
        { key: "d", text: "φ(n) = (p-1) + (q-1)" }
      ],
      answer: "a",
      explanation: "Pour n = p × q avec p et q premiers, φ(n) = (p-1) × (q-1)."
    },
    {
      id: 14,
      question: "Quelle est la formule de chiffrement dans RSA ?",
      choices: [
        { key: "a", text: "C ≡ M^e mod n" },
        { key: "b", text: "C ≡ M^d mod n" },
        { key: "c", text: "C ≡ M × e mod n" },
        { key: "d", text: "C ≡ M + e mod n" }
      ],
      answer: "a",
      explanation: "Le chiffrement RSA élève le message M à la puissance e modulo n."
    },
    {
      id: 15,
      question: "Quelle est la formule de déchiffrement dans RSA ?",
      choices: [
        { key: "a", text: "M ≡ C^d mod n" },
        { key: "b", text: "M ≡ C^e mod n" },
        { key: "c", text: "M ≡ C × d mod n" },
        { key: "d", text: "M ≡ C - d mod n" }
      ],
      answer: "a",
      explanation: "Le déchiffrement RSA élève le chiffré C à la puissance d modulo n."
    },
    {
      id: 16,
      question: "Quelle opération cryptographique utilise les inverses modulaires ?",
      choices: [
        { key: "a", text: "Le hachage SHA" },
        { key: "b", text: "Les signatures numériques" },
        { key: "c", text: "Le chiffrement symétrique" },
        { key: "d", text: "La compression de données" }
      ],
      answer: "b",
      explanation: "Les signatures numériques utilisent les inverses modulaires pour signer et vérifier."
    },
    {
      id: 17,
      question: "Quel algorithme quantique menace RSA ?",
      choices: [
        { key: "a", text: "Algorithme de Shor" },
        { key: "b", text: "Algorithme de Grover" },
        { key: "c", text: "Algorithme de Deutsch" },
        { key: "d", text: "Algorithme de Simon" }
      ],
      answer: "a",
      explanation: "L'algorithme de Shor peut factoriser de grands nombres en temps polynomial."
    },
    {
      id: 18,
      question: "Quelle propriété est vraie pour les congruences ?",
      choices: [
        { key: "a", text: "Si a ≡ b mod n, alors a^k ≡ b^k mod n pour tout k" },
        { key: "b", text: "Si a ≡ b mod n, alors a = b" },
        { key: "c", text: "Les congruences ne respectent que l'addition" },
        { key: "d", text: "a^k ≡ b^k mod n seulement pour k pair" }
      ],
      answer: "a",
      explanation: "Les congruences respectent les puissances : si a ≡ b mod n, alors a^k ≡ b^k mod n."
    },
    {
      id: 19,
      question: "Quelle fonction Python calcule efficacement les puissances modulaires ?",
      choices: [
        { key: "a", text: "pow(a, b, n)" },
        { key: "b", text: "math.pow(a, b) % n" },
        { key: "c", text: "a ** b % n" },
        { key: "d", text: "mod_pow(a, b, n)" }
      ],
      answer: "a",
      explanation: "pow(a, b, n) calcule a^b mod n efficacement en utilisant l'exponentiation rapide."
    },
    {
      id: 20,
      question: "Quel est le principe de base de la cryptographie post-quantique ?",
      choices: [
        { key: "a", text: "Utiliser des réseaux vectoriels (lattice-based)" },
        { key: "b", text: "Augmenter la taille des clés RSA" },
        { key: "c", text: "Utiliser des algorithmes quantiques" },
        { key: "d", text: "Abandonner la cryptographie" }
      ],
      answer: "a",
      explanation: "La cryptographie post-quantique utilise notamment les réseaux vectoriels (lattices)."
    }
  ]
};

const OteriaMatricesStochastiquesQCMPage: React.FC = () => {
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
                <Link to="/formation/oteria/matrices-stochastiques-cours">
                  <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Retour au cours
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
              <CardTitle className="text-blue-900">{question.question}</CardTitle>
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
                    {choice.text}
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
          <div className="flex justify-center gap-4 mb-4">
            <Link to="/formation/oteria/matrices-stochastiques-cours">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                <BookOpen className="mr-2 h-4 w-4" />
                Cours
              </Button>
            </Link>
            <Link to="/formation/oteria/matrices-stochastiques-exercices">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Exercices
              </Button>
            </Link>
            <Link to="/formation/oteria/matrices-stochastiques-flashcards">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50">
                Flashcards
              </Button>
            </Link>
          </div>
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

export default OteriaMatricesStochastiquesQCMPage;
