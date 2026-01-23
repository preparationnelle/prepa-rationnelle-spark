import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, BookOpen, Target, Database, Calculator, CheckCircle, XCircle, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';

// Données du QCM
const qcmData = {
  title: "Matrices & Chaînes de Markov — QCM (20 questions)",
  questions: [
    {
      id: 1,
      question: "Quelle est la définition correcte d'une matrice carrée d'ordre n ?",
      choices: [
        { key: "a", text: "Une matrice avec n lignes et n colonnes" },
        { key: "b", text: "Une matrice avec n lignes et p colonnes différentes" },
        { key: "c", text: "Une matrice avec des éléments tous nuls" },
        { key: "d", text: "Une matrice avec une seule ligne" }
      ],
      answer: "a",
      explanation: "Une matrice carrée a le même nombre de lignes et de colonnes, soit n×n."
    },
    {
      id: 2,
      question: "Quelle est la formule du produit matriciel AB pour des matrices compatibles ?",
      choices: [
        { key: "a", text: "(AB)_{i,j} = a_{i,j} + b_{i,j}" },
        { key: "b", text: "(AB)_{i,j} = a_{i,j} × b_{i,j}" },
        { key: "c", text: "(AB)_{i,j} = ∑_{k} a_{i,k} b_{k,j}" },
        { key: "d", text: "(AB)_{i,j} = ∑_{k} a_{k,i} b_{j,k}" }
      ],
      answer: "c",
      explanation: "Le produit matriciel utilise la somme des produits des éléments des lignes et colonnes."
    },
    {
      id: 3,
      question: "Quelle propriété est vraie pour la matrice identité I_n ?",
      choices: [
        { key: "a", text: "I_n A = 0 pour toute matrice A" },
        { key: "b", text: "I_n A = A I_n = A pour toute matrice carrée A" },
        { key: "c", text: "I_n est toujours nulle" },
        { key: "d", text: "I_n n'existe que pour n=1" }
      ],
      answer: "b",
      explanation: "La matrice identité est l'élément neutre de la multiplication matricielle."
    },
    {
      id: 4,
      question: "Quelle matrice est dite triangulaire supérieure ?",
      choices: [
        { key: "a", text: "Tous les éléments au-dessus de la diagonale sont nuls" },
        { key: "b", text: "Tous les éléments en dessous de la diagonale sont nuls" },
        { key: "c", text: "Tous les éléments de la diagonale sont nuls" },
        { key: "d", text: "Tous les éléments sont nuls sauf les coins" }
      ],
      answer: "b",
      explanation: "Dans une matrice triangulaire supérieure, les éléments sous la diagonale principale sont nuls."
    },
    {
      id: 5,
      question: "Quelle matrice est dite symétrique ?",
      choices: [
        { key: "a", text: "A = A^T (égale à sa transposée)" },
        { key: "b", text: "A = -A^T (opposée à sa transposée)" },
        { key: "c", text: "A A^T = I_n" },
        { key: "d", text: "A^T A = I_n" }
      ],
      answer: "a",
      explanation: "Une matrice symétrique vérifie A^T = A, c'est-à-dire a_{i,j} = a_{j,i} pour tous i,j."
    },
    {
      id: 6,
      question: "Quelle est la formule du déterminant d'une matrice 2×2 ?",
      choices: [
        { key: "a", text: "det(A) = a_{11} + a_{22}" },
        { key: "b", text: "det(A) = a_{11} × a_{22}" },
        { key: "c", text: "det(A) = a_{11} - a_{22}" },
        { key: "d", text: "det(A) = a_{11}a_{22} - a_{12}a_{21}" }
      ],
      answer: "d",
      explanation: "Pour une matrice 2×2 [a b ; c d], det = ad - bc."
    },
    {
      id: 7,
      question: "Quand une matrice carrée est-elle inversible ?",
      choices: [
        { key: "a", text: "Si elle est symétrique" },
        { key: "b", text: "Si son déterminant n'est pas nul" },
        { key: "c", text: "Si elle est triangulaire" },
        { key: "d", text: "Si elle est orthogonale" }
      ],
      answer: "b",
      explanation: "Une matrice carrée est inversible si et seulement si son déterminant est non nul."
    },
    {
      id: 8,
      question: "Quelle est la définition d'une valeur propre λ d'une matrice A ?",
      choices: [
        { key: "a", text: "Un élément diagonal de A" },
        { key: "b", text: "Un scalaire tel qu'il existe v ≠ 0 avec A v = λ v" },
        { key: "c", text: "La somme des éléments de A" },
        { key: "d", text: "Le produit des éléments diagonaux de A" }
      ],
      answer: "b",
      explanation: "λ est valeur propre si le système (A - λI)v = 0 admet une solution non triviale v."
    },
    {
      id: 9,
      question: "Quelle est la trace d'une matrice carrée ?",
      choices: [
        { key: "a", text: "La somme de tous ses éléments" },
        { key: "b", text: "Le produit des éléments diagonaux" },
        { key: "c", text: "La somme des éléments de la diagonale principale" },
        { key: "d", text: "Le déterminant de la matrice" }
      ],
      answer: "c",
      explanation: "tr(A) = ∑_{i=1}^n a_{i,i}, la somme des éléments diagonaux."
    },
    {
      id: 10,
      question: "Quelle propriété est vraie pour la trace ?",
      choices: [
        { key: "a", text: "tr(A + B) = tr(A) - tr(B)" },
        { key: "b", text: "tr(A B) = tr(B A)" },
        { key: "c", text: "tr(A^T) = -tr(A)" },
        { key: "d", text: "tr(λ A) = λ tr(A) seulement si λ > 0" }
      ],
      answer: "b",
      explanation: "La trace est invariante par transposition et commute avec le produit matriciel."
    },
    {
      id: 11,
      question: "Quelle est la définition d'une matrice stochastique ?",
      choices: [
        { key: "a", text: "Une matrice avec des éléments positifs ou nuls" },
        { key: "b", text: "Une matrice où chaque ligne somme à 1" },
        { key: "c", text: "Une matrice où chaque colonne somme à 1" },
        { key: "d", text: "Une matrice avec des éléments négatifs" }
      ],
      answer: "b",
      explanation: "Une matrice stochastique a des éléments ≥ 0 et chaque ligne somme à 1."
    },
    {
      id: 12,
      question: "Dans une chaîne de Markov, que représente la matrice de transition P ?",
      choices: [
        { key: "a", text: "Les probabilités d'être dans chaque état" },
        { key: "b", text: "Les probabilités de transition entre états" },
        { key: "c", text: "Le nombre d'états du système" },
        { key: "d", text: "La durée moyenne dans chaque état" }
      ],
      answer: "b",
      explanation: "P_{i,j} = P(X_{n+1}=j | X_n=i), les probabilités de transition."
    },
    {
      id: 13,
      question: "Quelle est la formule d'évolution d'une chaîne de Markov ?",
      choices: [
        { key: "a", text: "π^{(n+1)} = π^{(n)} + P" },
        { key: "b", text: "π^{(n+1)} = π^{(n)} × P" },
        { key: "c", text: "π^{(n+1)} = π^{(n)} P^n" },
        { key: "d", text: "π^{(n+1)} = P π^{(n)}" }
      ],
      answer: "b",
      explanation: "La loi évolue par multiplication matricielle : π^{(n+1)} = π^{(n)} P."
    },
    {
      id: 14,
      question: "Qu'est-ce qu'un vecteur stationnaire π d'une chaîne de Markov ?",
      choices: [
        { key: "a", text: "Le vecteur initial du système" },
        { key: "b", text: "Un vecteur tel que π P = π" },
        { key: "c", text: "Un vecteur qui change à chaque étape" },
        { key: "d", text: "Le nombre d'états visités" }
      ],
      answer: "b",
      explanation: "Le vecteur stationnaire π satisfait π P = π et représente ∑π_i = 1."
    },
    {
      id: 15,
      question: "Quelle matrice est dite orthogonale ?",
      choices: [
        { key: "a", text: "A^T = A" },
        { key: "b", text: "A^T = -A" },
        { key: "c", text: "A^T A = I_n" },
        { key: "d", text: "A A^T = I_n" }
      ],
      answer: "c",
      explanation: "Une matrice orthogonale vérifie A^T A = I_n (ou A A^T = I_n)."
    },
    {
      id: 16,
      question: "Quelle est la propriété fondamentale du déterminant ?",
      choices: [
        { key: "a", text: "det(A + B) = det(A) + det(B)" },
        { key: "b", text: "det(A B) = det(A) × det(B)" },
        { key: "c", text: "det(λ A) = λ^n det(A)" },
        { key: "d", text: "det(A^T) = -det(A)" }
      ],
      answer: "b",
      explanation: "Le déterminant est multiplicatif : det(AB) = det(A)det(B)."
    },
    {
      id: 17,
      question: "Dans un système Ax = b, que représente le rang de A ?",
      choices: [
        { key: "a", text: "Le nombre de solutions du système" },
        { key: "b", text: "La dimension de l'espace engendré par les colonnes de A" },
        { key: "c", text: "Le nombre d'équations du système" },
        { key: "d", text: "Le nombre de variables du système" }
      ],
      answer: "b",
      explanation: "Le rang est la dimension de l'image de A, c'est-à-dire l'espace engendré par ses colonnes."
    },
    {
      id: 18,
      question: "Quelle méthode permet de résoudre un système triangulaire ?",
      choices: [
        { key: "a", text: "La méthode de Cramer" },
        { key: "b", text: "La substitution ascendante ou descendante" },
        { key: "c", text: "L'inversion directe de la matrice" },
        { key: "d", text: "La méthode de Gauss-Jordan uniquement" }
      ],
      answer: "b",
      explanation: "Pour une matrice triangulaire, on résout par substitution successive."
    },
    {
      id: 19,
      question: "Quelle est la propriété des matrices stochastiques régulières ?",
      choices: [
        { key: "a", text: "Elles ont une seule valeur propre égale à 1" },
        { key: "b", text: "Elles convergent vers un vecteur stationnaire unique" },
        { key: "c", text: "Elles sont toujours orthogonales" },
        { key: "d", text: "Elles ont des éléments négatifs" }
      ],
      answer: "b",
      explanation: "Les matrices stochastiques régulières convergent vers une distribution stationnaire unique."
    },
    {
      id: 20,
      question: "Quelle application pratique utilise les chaînes de Markov ?",
      choices: [
        { key: "a", text: "La résolution d'équations différentielles" },
        { key: "b", text: "La prédiction de la météo" },
        { key: "c", text: "Le calcul d'intégrales définies" },
        { key: "d", text: "La factorisation de nombres premiers" }
      ],
      answer: "b",
      explanation: "Les chaînes de Markov modélisent l'évolution de systèmes aléatoires comme la météo."
    }
  ]
};

const OteriaMatricesMarkovQCMPage = () => {
  const [answers, setAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [showExplanations, setShowExplanations] = useState({});
  const { currentUser } = useAuth();
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');

  const handleAnswerSelect = (questionId, choiceKey) => {
    setAnswers(prev => ({
      ...prev,
      [questionId]: choiceKey
    }));
  };

  const toggleExplanation = (questionId) => {
    setShowExplanations(prev => ({
      ...prev,
      [questionId]: !prev[questionId]
    }));
  };

  const calculateScore = () => {
    let correct = 0;
    qcmData.questions.forEach(question => {
      if (answers[question.id] === question.answer) {
        correct++;
      }
    });
    return correct;
  };

  const handleValidation = async () => {
    setShowResults(true);

    if (currentUser) {
      setIsSaving(true);
      const score = calculateScore();
      const percentage = Math.round((score / qcmData.questions.length) * 100);

      try {
        const { error } = await supabase
          .from('qcm_results')
          .insert({
            user_id: currentUser.id,
            qcm_id: 'oteria-matrices-markov',
            title: qcmData.title,
            score: percentage,
            total_questions: qcmData.questions.length,
            correct_answers: score
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

  const getScoreColor = (score) => {
    const percentage = (score / qcmData.questions.length) * 100;
    if (percentage >= 80) return "text-green-600";
    if (percentage >= 60) return "text-yellow-600";
    return "text-red-600";
  };

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
            <span className="text-teal-600 font-medium">Séance 11 - QCM</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4 text-teal-900">{qcmData.title}</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Testez vos connaissances sur les matrices, les opérations matricielles et les chaînes de Markov
          </p>

          {/* Informations de QCM */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Questions</span>
                  <span className="text-2xl font-bold text-blue-900">{qcmData.questions.length}</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Durée estimée</span>
                  <span className="text-2xl font-bold text-blue-900">30 min</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Niveau</span>
                  <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    <Database className="h-4 w-4" />
                    Avancé
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/formation/oteria/matrices-markov-cours">
              <button className="inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                <BookOpen className="h-4 w-4" />
                Retour au cours
              </button>
            </Link>
            <Link to="/formation/oteria/matrices-markov-exercices">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Calculator className="h-4 w-4" />
                Exercices
              </button>
            </Link>
          </div>
        </div>

        {/* Questions */}
        <div className="space-y-6">
          {qcmData.questions.map((question) => (
            <Card key={question.id} className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100">
              <CardHeader>
                <CardTitle className="text-xl font-bold text-blue-600 flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Question {question.id}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <p className="text-lg font-medium text-blue-900 mb-4">{question.question}</p>

                <div className="space-y-2">
                  {question.choices.map((choice) => {
                    const isSelected = answers[question.id] === choice.key;
                    const isCorrect = choice.key === question.answer;
                    const isIncorrectSelection = showResults && isSelected && !isCorrect;

                    return (
                      <div
                        key={choice.key}
                        className={`p-3 rounded-lg border cursor-pointer transition-all ${showResults
                            ? isCorrect
                              ? 'bg-green-100 border-green-300 text-green-800'
                              : isIncorrectSelection
                                ? 'bg-red-100 border-red-300 text-red-800'
                                : 'bg-white border-gray-200 text-gray-700'
                            : isSelected
                              ? 'bg-blue-100 border-blue-300 text-blue-800'
                              : 'bg-white border-gray-200 hover:bg-gray-50 text-gray-700'
                          }`}
                        onClick={() => !showResults && handleAnswerSelect(question.id, choice.key)}
                      >
                        <div className="flex items-center gap-3">
                          <span className={`w-6 h-6 rounded-full border-2 flex items-center justify-center text-sm font-bold ${showResults
                              ? isCorrect
                                ? 'bg-green-500 border-green-500 text-white'
                                : isIncorrectSelection
                                  ? 'bg-red-500 border-red-500 text-white'
                                  : 'border-gray-300'
                              : isSelected
                                ? 'bg-blue-500 border-blue-500 text-white'
                                : 'border-gray-300'
                            }`}>
                            {choice.key.toUpperCase()}
                          </span>
                          <span className="flex-1">{choice.text}</span>
                          {showResults && isCorrect && (
                            <CheckCircle className="h-5 w-5 text-green-600" />
                          )}
                          {showResults && isIncorrectSelection && (
                            <XCircle className="h-5 w-5 text-red-600" />
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>

                {showResults && (
                  <div className="mt-4">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => toggleExplanation(question.id)}
                      className="flex items-center gap-2"
                    >
                      {showExplanations[question.id] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      {showExplanations[question.id] ? 'Masquer' : 'Voir'} l'explication
                    </Button>

                    {showExplanations[question.id] && (
                      <div className="mt-3 p-4 bg-white border border-blue-200 rounded-lg">
                        <p className="text-blue-800">
                          <strong>Réponse correcte :</strong> {question.answer.toUpperCase()}
                        </p>
                        <p className="text-blue-700 mt-2">{question.explanation}</p>
                      </div>
                    )}
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Boutons d'action */}
        <div className="text-center mt-8 space-y-4">
          {!showResults ? (
            <Button
              onClick={handleValidation}
              className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg"
              disabled={Object.keys(answers).length !== qcmData.questions.length || isSaving}
            >
              <Target className="mr-2 h-5 w-5" />
              {isSaving ? 'Enregistrement...' : 'Voir les résultats'}
            </Button>
          ) : (
            <div className="space-y-4">
              <div className="bg-gradient-to-r from-teal-50 to-blue-50 p-6 rounded-xl border border-teal-200">
                <h3 className="text-2xl font-bold mb-2 text-teal-900">Résultats du QCM</h3>
                <p className={`text-3xl font-bold mb-4 ${getScoreColor(calculateScore())}`}>
                  {calculateScore()}/{qcmData.questions.length} bonnes réponses
                </p>
                <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                  <div
                    className="bg-teal-600 h-4 rounded-full transition-all duration-500"
                    style={{ width: `${(calculateScore() / qcmData.questions.length) * 100}%` }}
                  ></div>
                </div>
                <p className="text-gray-600">
                  {calculateScore() >= 16 ? 'Excellent travail ! 🎉' :
                    calculateScore() >= 12 ? 'Bon résultat, continuez ! 👏' :
                      'À retravailler. Revoyez le cours et réessayez. 📚'}
                </p>
              </div>
              {saveMessage && (
                <div className={`text-center mt-4 font-medium ${saveMessage.includes('Erreur') ? 'text-red-600' : 'text-green-600'}`}>
                  {saveMessage}
                </div>
              )}

              <div className="flex gap-3 justify-center flex-wrap">
                <Button
                  onClick={() => {
                    setAnswers({});
                    setShowResults(false);
                    setAnswers({});
                    setShowResults(false);
                    setShowExplanations({});
                    setSaveMessage('');
                  }}
                  variant="outline"
                  className="border-teal-600 text-teal-600 hover:bg-teal-50"
                >
                  Refaire le QCM
                </Button>
                <Link to="/formation/oteria/matrices-markov-cours">
                  <Button className="bg-teal-600 hover:bg-teal-700 text-white">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Retour au cours
                  </Button>
                </Link>
              </div>
            </div>
          )}

          {Object.keys(answers).length !== qcmData.questions.length && !showResults && (
            <p className="text-gray-500 text-sm">
              Répondez à toutes les questions pour voir vos résultats
            </p>
          )}
        </div>

        {/* Navigation */}
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

export default OteriaMatricesMarkovQCMPage;
