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
  Target,
  CheckCircle,
  XCircle,
  Trophy,
  Clock,
  Award
} from 'lucide-react';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
  chapter: number;
}

const OteriaEvaluationFinaleQCMPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<{ [key: number]: number }>({});
  const [showResults, setShowResults] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(5400); // 90 minutes = 5400 secondes

  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState('');
  const { currentUser } = useAuth();

  // Timer pour l'évaluation
  useEffect(() => {
    if (timeLeft > 0 && !showResults) {
      const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
      return () => clearTimeout(timer);
    } else if (timeLeft === 0 && !showResults) {
      handleFinish();
    }
  }, [timeLeft, showResults]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const questions: Question[] = [
    // Chapitre 1 : Logique fondamentale
    {
      id: 1,
      question: "Quelle est la valeur de vérité de ¬(P ∧ ¬P) ?",
      options: ["Toujours vrai", "Toujours faux", "Dépend de P", "Impossible à déterminer"],
      correctAnswer: 0,
      explanation: "¬(P ∧ ¬P) est toujours vrai car une proposition ne peut pas être vraie et fausse simultanément.",
      category: "Logique",
      chapter: 1
    },
    {
      id: 2,
      question: "Que signifie ∀x∈ℝ, x² ≥ 0 ?",
      options: ["Tous les réels au carré sont positifs", "Il existe un réel dont le carré est positif", "Tous les réels sont positifs", "Aucun réel n'est négatif"],
      correctAnswer: 0,
      explanation: "∀x∈ℝ signifie 'pour tout réel x', et x² ≥ 0 est toujours vrai pour tout réel x.",
      category: "Quantificateurs",
      chapter: 1
    },
    {
      id: 3,
      question: "Quelle est la négation de 'Tous les élèves réussissent' ?",
      options: ["Aucun élève ne réussit", "Tous les élèves échouent", "Il existe au moins un élève qui échoue", "Certains élèves réussissent"],
      correctAnswer: 2,
      explanation: "La négation de 'tous réussissent' est 'il existe au moins un qui n'a pas réussi'.",
      category: "Négation",
      chapter: 1
    },

    // Chapitre 2 : Python - Types et variables
    {
      id: 4,
      question: "Quel type Python représente les nombres décimaux ?",
      options: ["int", "float", "str", "bool"],
      correctAnswer: 1,
      explanation: "Le type float représente les nombres à virgule flottante (décimaux).",
      category: "Types Python",
      chapter: 2
    },
    {
      id: 5,
      question: "Comment créer une liste vide en Python ?",
      options: ["L = ()", "L = {}", "L = []", "L = list"],
      correctAnswer: 2,
      explanation: "[] crée une liste vide, et list() est également valide.",
      category: "Listes",
      chapter: 2
    },
    {
      id: 6,
      question: "Quelle opération réalise le modulo en Python ?",
      options: ["/", "//", "%", "**"],
      correctAnswer: 2,
      explanation: "L'opérateur % calcule le reste de la division entière.",
      category: "Opérateurs",
      chapter: 2
    },

    // Questions sur les autres chapitres (3-13)
    {
      id: 7,
      question: "Quel principe utilise-t-on pour démontrer qu'une propriété est vraie pour tout entier naturel ?",
      options: ["Raisonnement par l'absurde", "Récurrence", "Contraposée", "Disjonction de cas"],
      correctAnswer: 1,
      explanation: "La récurrence permet de prouver une propriété pour tous les entiers naturels.",
      category: "Démonstration",
      chapter: 3
    },
    {
      id: 8,
      question: "Comment définit-on une fonction récursive en Python ?",
      options: ["def fonction():", "function fonction():", "create fonction():", "La récursivité n'existe pas en Python"],
      correctAnswer: 0,
      explanation: "Les fonctions récursives s'écrivent comme les autres fonctions avec def.",
      category: "Récursivité",
      chapter: 3
    },
    {
      id: 9,
      question: "Quelle structure permet de répéter une action tant qu'une condition est vraie ?",
      options: ["for", "while", "if", "repeat"],
      correctAnswer: 1,
      explanation: "while condition: permet de répéter tant que la condition est vraie.",
      category: "Boucles",
      chapter: 4
    },
    {
      id: 10,
      question: "Comment tester si un nombre n est pair en Python ?",
      options: ["n == 2", "n % 2 = 0", "n % 2 == 0", "n / 2 == 0"],
      correctAnswer: 2,
      explanation: "n % 2 == 0 vérifie que le reste de la division par 2 est nul.",
      category: "Conditions",
      chapter: 4
    },
    {
      id: 11,
      question: "Quelle librairie Python est spécialisée dans les calculs numériques avancés ?",
      options: ["random", "math", "numpy", "os"],
      correctAnswer: 2,
      explanation: "numpy est spécialisée dans les calculs vectoriels et matriciels.",
      category: "Librairies",
      chapter: 5
    },
    {
      id: 12,
      question: "Comment tracer un graphique avec matplotlib ?",
      options: ["plt.draw()", "plt.plot()", "plt.graph()", "plt.chart()"],
      correctAnswer: 1,
      explanation: "plt.plot() permet de tracer des courbes.",
      category: "Visualisation",
      chapter: 5
    },
    {
      id: 13,
      question: "Que représente une suite récurrente ?",
      options: ["Une liste finie", "Chaque terme défini en fonction du précédent", "Une suite aléatoire", "Une suite décroissante"],
      correctAnswer: 1,
      explanation: "Une suite récurrente définit chaque terme en fonction des précédents.",
      category: "Suites",
      chapter: 6
    },
    {
      id: 14,
      question: "Quelle méthode permet de résoudre f(x) = 0 sur un intervalle ?",
      options: ["Newton", "Dichotomie", "Euler", "Runge-Kutta"],
      correctAnswer: 1,
      explanation: "La dichotomie divise l'intervalle en deux à chaque itération.",
      category: "Équations",
      chapter: 7
    },
    {
      id: 15,
      question: "Que calculent les coefficients binomiaux ?",
      options: ["Des intégrales", "Des combinaisons", "Des dérivées", "Des probabilités"],
      correctAnswer: 1,
      explanation: "Les coefficients binomiaux C(n,k) calculent le nombre de combinaisons de k éléments parmi n.",
      category: "Dénombrement",
      chapter: 8
    },
    {
      id: 16,
      question: "Quel paradoxe montre qu'il y a collision avec 23 personnes ?",
      options: ["Paradoxe de Russell", "Paradoxe des anniversaires", "Paradoxe de Monty Hall", "Paradoxe de Simpson"],
      correctAnswer: 1,
      explanation: "Le paradoxe des anniversaires montre qu'avec 23 personnes, la probabilité de collision d'anniversaire dépasse 50%.",
      category: "Probabilités",
      chapter: 8
    },
    {
      id: 17,
      question: "Quelle structure de données permet un accès rapide aux éléments ?",
      options: ["Liste chaînée", "Table de hachage", "Arbre binaire", "File d'attente"],
      correctAnswer: 1,
      explanation: "Une table de hachage permet un accès en O(1) en moyenne.",
      category: "Structures de données",
      chapter: 9
    },
    {
      id: 18,
      question: "Quel algorithme trie en O(n log n) dans le pire cas ?",
      options: ["Tri bulle", "Tri rapide", "Tri fusion", "Tri sélection"],
      correctAnswer: 2,
      explanation: "Le tri fusion a une complexité O(n log n) dans tous les cas.",
      category: "Algorithmes de tri",
      chapter: 10
    },
    {
      id: 19,
      question: "Quelle structure LIFO permet de gérer les appels de fonctions ?",
      options: ["File", "Pile", "Arbre", "Graphe"],
      correctAnswer: 1,
      explanation: "Une pile (LIFO) gère parfaitement la pile d'appels des fonctions récursives.",
      category: "Structures de données",
      chapter: 11
    },
    {
      id: 20,
      question: "Quel algorithme trouve le plus court chemin dans un graphe ?",
      options: ["Tri topologique", "Dijkstra", "Bellman-Ford", "Les deux derniers"],
      correctAnswer: 3,
      explanation: "Dijkstra et Bellman-Ford trouvent les plus courts chemins selon les poids des arêtes.",
      category: "Graphes",
      chapter: 12
    },
    {
      id: 21,
      question: "Quelle opération cryptographique utilise des nombres premiers ?",
      options: ["AES", "RSA", "DES", "MD5"],
      correctAnswer: 1,
      explanation: "RSA utilise la factorisation de grands nombres premiers comme base de sécurité.",
      category: "Cryptographie",
      chapter: 13
    },
    {
      id: 22,
      question: "Que garantit l'arithmétique modulaire dans la crypto ?",
      options: ["Confidentialité", "Authenticité", "Intégrité", "Toutes les réponses"],
      correctAnswer: 3,
      explanation: "L'arithmétique modulaire est la base des systèmes cryptographiques modernes.",
      category: "Arithmétique modulaire",
      chapter: 13
    },
    {
      id: 23,
      question: "Quelle est la complexité temporelle optimale pour le tri ?",
      options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
      correctAnswer: 1,
      explanation: "O(n log n) est la complexité optimale pour le tri par comparaison.",
      category: "Complexité",
      chapter: 10
    },
    {
      id: 24,
      question: "Quel type de graphe n'a pas de cycles ?",
      options: ["Complet", "Connexe", "Arbre", "Orienté"],
      correctAnswer: 2,
      explanation: "Un arbre est un graphe acyclique connexe.",
      category: "Graphes",
      chapter: 12
    },
    {
      id: 25,
      question: "Quelle structure permet une recherche dichotomique efficace ?",
      options: ["Liste non triée", "Table de hachage", "Arbre binaire de recherche", "Liste chaînée"],
      correctAnswer: 2,
      explanation: "Un ABR permet une recherche en O(log n) en moyenne.",
      category: "Structures de données",
      chapter: 9
    },
    {
      id: 26,
      question: "Que calcule l'algorithme d'Euclide ?",
      options: ["PGCD", "PPCM", "Factorielle", "Exponentielle"],
      correctAnswer: 0,
      explanation: "L'algorithme d'Euclide calcule le Plus Grand Commun Diviseur.",
      category: "Arithmétique",
      chapter: 13
    },
    {
      id: 27,
      question: "Quelle librairie Python gère les tableaux de données ?",
      options: ["numpy", "pandas", "scipy", "matplotlib"],
      correctAnswer: 1,
      explanation: "pandas est spécialisée dans la manipulation de données tabulaires.",
      category: "Librairies",
      chapter: 2
    },
    {
      id: 28,
      question: "Que représente le principe de la récurrence ?",
      options: ["Une boucle infinie", "Une preuve par étapes", "Une fonction itérative", "Un calcul récursif"],
      correctAnswer: 1,
      explanation: "La récurrence prouve une propriété en vérifiant le cas de base et l'hérédité.",
      category: "Démonstration",
      chapter: 3
    },
    {
      id: 29,
      question: "Quelle est la négation de ∃x, P(x) ?",
      options: ["∀x, ¬P(x)", "∃x, ¬P(x)", "¬∀x, P(x)", "Les deux premiers"],
      correctAnswer: 0,
      explanation: "La négation de 'il existe x tel que P(x)' est 'pour tout x, non P(x)'.",
      category: "Logique",
      chapter: 1
    },
    {
      id: 30,
      question: "Comment s'appelle l'opération inverse du modulo ?",
      options: ["Division", "Multiplication", "Inverse modulaire", "Exponentiation"],
      correctAnswer: 2,
      explanation: "L'inverse modulaire permet de résoudre des équations modulaires.",
      category: "Arithmétique modulaire",
      chapter: 13
    },
    {
      id: 31,
      question: "Quelle structure FIFO permet de gérer les files d'attente ?",
      options: ["Pile", "File", "Arbre", "Table de hachage"],
      correctAnswer: 1,
      explanation: "Une file (FIFO) gère les éléments dans l'ordre d'arrivée.",
      category: "Structures de données",
      chapter: 11
    },
    {
      id: 32,
      question: "Que garantit l'algorithme de tri fusion ?",
      options: ["Stabilité", "Rapidité", "Simplicité", "Toutes les réponses"],
      correctAnswer: 0,
      explanation: "Le tri fusion est stable : il préserve l'ordre relatif des éléments égaux.",
      category: "Algorithmes de tri",
      chapter: 10
    },
    {
      id: 33,
      question: "Quelle est la complexité de la recherche dans un graphe ?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n²)"],
      correctAnswer: 2,
      explanation: "La recherche en largeur ou profondeur visite tous les nœuds : O(n).",
      category: "Graphes",
      chapter: 12
    },
    {
      id: 34,
      question: "Que permet la transformation de Fourier discrète ?",
      options: ["Compresser des images", "Analyser des signaux", "Crypter des données", "Toutes les réponses"],
      correctAnswer: 1,
      explanation: "La DFT permet d'analyser la composition fréquentielle d'un signal.",
      category: "Mathématiques appliquées",
      chapter: 6
    },
    {
      id: 35,
      question: "Quelle méthode optimise les fonctions convexes ?",
      options: ["Newton", "Gradient", "Dichotomie", "Les trois méthodes"],
      correctAnswer: 3,
      explanation: "Ces trois méthodes peuvent être utilisées pour optimiser des fonctions convexes.",
      category: "Optimisation",
      chapter: 7
    },
    {
      id: 36,
      question: "Que mesure la complexité spatiale d'un algorithme ?",
      options: ["Temps d'exécution", "Mémoire utilisée", "Nombre d'opérations", "Taille des données"],
      correctAnswer: 1,
      explanation: "La complexité spatiale mesure la quantité de mémoire utilisée.",
      category: "Complexité",
      chapter: 10
    },
    {
      id: 37,
      question: "Quelle propriété garantit l'unicité d'un plus court chemin ?",
      options: ["Acyclicité", "Poids positifs", "Connexité", "Toutes les réponses"],
      correctAnswer: 1,
      explanation: "Avec des poids positifs, les plus courts chemins sont uniques dans les graphes sans cycles négatifs.",
      category: "Graphes",
      chapter: 12
    },
    {
      id: 38,
      question: "Que permet l'interpolation polynomiale ?",
      options: ["Approximer des fonctions", "Résoudre des équations", "Optimiser des calculs", "Analyser des données"],
      correctAnswer: 0,
      explanation: "L'interpolation polynomiale permet d'approximer des fonctions complexes.",
      category: "Mathématiques appliquées",
      chapter: 6
    },
    {
      id: 39,
      question: "Quelle structure permet une recherche en O(1) ?",
      options: ["Liste", "Table de hachage", "Arbre binaire", "Graphe"],
      correctAnswer: 1,
      explanation: "Une table de hachage parfaite permet un accès en temps constant.",
      category: "Structures de données",
      chapter: 9
    },
    {
      id: 40,
      question: "Que garantit le théorème des nombres premiers ?",
      options: ["Infinité des nombres premiers", "Distribution des nombres premiers", "Les deux réponses", "Aucune des deux"],
      correctAnswer: 2,
      explanation: "Le théorème des nombres premiers décrit leur distribution asymptotique.",
      category: "Théorie des nombres",
      chapter: 13
    },
    {
      id: 41,
      question: "Quelle méthode résout les systèmes linéaires ?",
      options: ["Gauss", "Newton", "Dichotomie", "Gradient"],
      correctAnswer: 0,
      explanation: "L'élimination de Gauss résout les systèmes d'équations linéaires.",
      category: "Algèbre linéaire",
      chapter: 5
    },
    {
      id: 42,
      question: "Que permet la décomposition QR ?",
      options: ["Résoudre des systèmes", "Calculer des valeurs propres", "Compresser des matrices", "Toutes les réponses"],
      correctAnswer: 0,
      explanation: "La décomposition QR est utilisée dans la résolution de systèmes linéaires.",
      category: "Algèbre linéaire",
      chapter: 5
    },
    {
      id: 43,
      question: "Quelle est la complexité du tri rapide en moyenne ?",
      options: ["O(n)", "O(n log n)", "O(n²)", "O(log n)"],
      correctAnswer: 1,
      explanation: "Le tri rapide a une complexité O(n log n) en moyenne.",
      category: "Algorithmes de tri",
      chapter: 10
    },
    {
      id: 44,
      question: "Que permet l'analyse de complexité amortie ?",
      options: ["Mesurer le pire cas", "Mesurer le cas moyen", "Analyser les opérations coûteuses", "Toutes les réponses"],
      correctAnswer: 2,
      explanation: "L'amortissement analyse le coût moyen des opérations coûteuses.",
      category: "Complexité",
      chapter: 10
    },
    {
      id: 45,
      question: "Quelle propriété ont les graphes eulériens ?",
      options: ["Tous les sommets ont degré pair", "Un seul sommet a degré impair", "Deux sommets ont degré impair", "Aucune contrainte"],
      correctAnswer: 0,
      explanation: "Un graphe eulérien a tous ses sommets de degré pair.",
      category: "Graphes",
      chapter: 12
    },
    {
      id: 46,
      question: "Que permet la programmation dynamique ?",
      options: ["Résoudre des problèmes récursifs", "Optimiser des calculs", "Mémoriser des résultats", "Toutes les réponses"],
      correctAnswer: 2,
      explanation: "La programmation dynamique mémorise les résultats des sous-problèmes.",
      category: "Algorithmique",
      chapter: 11
    },
    {
      id: 47,
      question: "Quelle méthode approxime les intégrales ?",
      options: ["Méthode des trapèzes", "Méthode des rectangles", "Méthode de Simpson", "Toutes les réponses"],
      correctAnswer: 2,
      explanation: "Ces trois méthodes permettent d'approximer des intégrales définies.",
      category: "Mathématiques appliquées",
      chapter: 6
    },
    {
      id: 48,
      question: "Que garantit l'algorithme de Kruskal ?",
      options: ["Arbre couvrant minimal", "Plus court chemin", "Composantes connexes", "Ordonnancement"],
      correctAnswer: 0,
      explanation: "Kruskal construit un arbre couvrant de poids minimal.",
      category: "Graphes",
      chapter: 12
    },
    {
      id: 49,
      question: "Quelle est la base de la cryptographie asymétrique ?",
      options: ["Fonction de hachage", "Nombre premier", "Courbe elliptique", "Les trois réponses"],
      correctAnswer: 3,
      explanation: "Ces trois éléments sont utilisés dans la cryptographie asymétrique moderne.",
      category: "Cryptographie",
      chapter: 13
    },
    {
      id: 50,
      question: "Que permet l'algorithme de factorisation ?",
      options: ["Casser RSA", "Générer des clés", "Signer des messages", "Chiffrer des données"],
      correctAnswer: 0,
      explanation: "La factorisation de grands nombres permet de casser le système RSA.",
      category: "Cryptographie",
      chapter: 13
    }
  ];

  const handleAnswerSelect = (questionId: number, answerIndex: number) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionId]: answerIndex
    }));
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach(question => {
      if (selectedAnswers[question.id] === question.correctAnswer) {
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
            qcm_id: 'oteria-evaluation-finale',
            title: 'Évaluation Finale - Bachelor 2',
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

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResults(false);
    setShowExplanation(false);
    setScore(0);
    setScore(0);
    setTimeLeft(5400);
    setSaveMessage('');
  };

  const currentQ = questions[currentQuestion];
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  const isAnswered = selectedAnswers[currentQ.id] !== undefined;

  if (showResults) {
    const percentage = Math.round((score / questions.length) * 100);
    const getGrade = (score: number) => {
      if (score >= 45) return { grade: "Excellent", color: "text-green-600", emoji: "🏆" };
      if (score >= 40) return { grade: "Très bien", color: "text-blue-600", emoji: "👏" };
      if (score >= 35) return { grade: "Bien", color: "text-yellow-600", emoji: "👍" };
      if (score >= 30) return { grade: "Passable", color: "text-orange-600", emoji: "📚" };
      return { grade: "À retravailler", color: "text-red-600", emoji: "📖" };
    };

    const gradeInfo = getGrade(score);

    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
        <div className="container mx-auto py-8 px-4">
          <Card className="max-w-2xl mx-auto">
            <CardContent className="p-8 text-center">
              <div className="mb-6">
                <Trophy className="h-16 w-16 text-yellow-500 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-gray-900 mb-2">Résultats de l'Évaluation Finale</h2>
                <p className="text-lg text-gray-600">Bachelor 2 - Mathématiques et Informatique</p>
              </div>

              <div className="mb-8">
                <div className="text-6xl font-bold text-blue-600 mb-2">{score}/{questions.length}</div>
                <div className="text-2xl font-semibold text-gray-700 mb-2">{percentage}%</div>
                <div className={`text-xl font-medium ${gradeInfo.color}`}>
                  {gradeInfo.grade}
                </div>
              </div>
              {saveMessage && (
                <div className={`text-center mb-8 font-medium ${saveMessage.includes('Erreur') ? 'text-red-600' : 'text-green-600'}`}>
                  {saveMessage}
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-lg font-semibold mb-4">Répartition par chapitre :</h3>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-sm">
                  {Array.from({ length: 13 }, (_, i) => i + 1).map(chapter => {
                    const chapterQuestions = questions.filter(q => q.chapter === chapter);
                    const chapterCorrect = chapterQuestions.filter(q =>
                      selectedAnswers[q.id] === q.correctAnswer
                    ).length;
                    return (
                      <div key={chapter} className="bg-gray-50 p-3 rounded-lg">
                        <div className="font-medium">Chapitre {chapter}</div>
                        <div className="text-gray-600">{chapterCorrect}/{chapterQuestions.length}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <h3 className="text-lg font-semibold">Questions incorrectes :</h3>
                {questions.map((question, index) => {
                  const userAnswer = selectedAnswers[question.id];
                  const isCorrect = userAnswer === question.correctAnswer;

                  if (isCorrect) return null;

                  return (
                    <div key={question.id} className="p-4 rounded-lg border-l-4 border-red-500 bg-red-50">
                      <div className="flex items-center gap-3 mb-2">
                        <XCircle className="h-5 w-5 text-red-600" />
                        <span className="font-medium">Question {index + 1} - Chapitre {question.chapter}</span>
                        <Badge variant="outline" className="text-xs">
                          {question.category}
                        </Badge>
                      </div>
                      <div className="text-sm text-gray-600 mb-2">
                        <strong>Question :</strong> {question.question}
                      </div>
                      <div className="text-sm text-gray-600 mb-2">
                        <strong>Votre réponse :</strong> {question.options[userAnswer]}
                      </div>
                      <div className="text-sm text-green-600">
                        <strong>Bonne réponse :</strong> {question.options[question.correctAnswer]}
                      </div>
                      <div className="text-sm text-blue-600 mt-2">
                        <strong>Explication :</strong> {question.explanation}
                      </div>
                    </div>
                  );
                })}
              </div>

              <div className="flex gap-4 justify-center">
                <Button onClick={resetQuiz} className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  Refaire l'évaluation
                </Button>
                <Link to="/articles/oteria-cyber-school">
                  <Button variant="outline" className="flex items-center gap-2">
                    <Home className="h-4 w-4" />
                    Retour au programme
                  </Button>
                </Link>
              </div>
            </CardContent>
          </Card>
        </div>
      </div >
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
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
              MATHÉMATIQUES, LOGIQUE ET ALGORITHMIQUE
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <span className="text-teal-600 font-medium">Évaluation Finale</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <Award className="h-8 w-8 text-teal-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-teal-900">Évaluation Finale - QCM Complet</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Testez vos connaissances acquises tout au long du programme Bachelor 2
          </p>

          {/* Informations d'évaluation */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Questions</span>
                  <span className="text-2xl font-bold text-blue-900">50</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Durée</span>
                  <span className="text-2xl font-bold text-blue-900">90 min</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Progression</span>
                  <span className="text-2xl font-bold text-blue-900">{currentQuestion + 1}/50</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Temps restant</span>
                  <span className="text-2xl font-bold text-blue-900 flex items-center gap-2">
                    <Clock className="h-5 w-5" />
                    {formatTime(timeLeft)}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Barre de progression */}
          <div className="max-w-2xl mx-auto mb-6">
            <Progress value={progress} className="h-2" />
            <div className="text-center mt-2 text-sm text-gray-600">
              {currentQuestion + 1} sur {questions.length} questions
            </div>
          </div>
        </div>

        {/* Question */}
        <div className="max-w-2xl mx-auto mb-8">
          <Card className="shadow-lg border border-blue-200">
            <CardContent className="p-6">
              <div className="mb-4">
                <Badge className="mb-3 mr-2" variant="outline">
                  Chapitre {currentQ.chapter}
                </Badge>
                <Badge className="mb-3" variant="secondary">
                  {currentQ.category}
                </Badge>
                <h3 className="text-xl font-bold text-gray-900 leading-relaxed mt-3">
                  {currentQ.question}
                </h3>
              </div>

              <div className="space-y-3">
                {currentQ.options.map((option, index) => {
                  const isSelected = selectedAnswers[currentQ.id] === index;
                  const isCorrect = index === currentQ.correctAnswer;
                  const showCorrect = showExplanation && isCorrect;
                  const showIncorrect = showExplanation && isSelected && !isCorrect;

                  return (
                    <button
                      key={index}
                      onClick={() => handleAnswerSelect(currentQ.id, index)}
                      disabled={showExplanation}
                      className={`w-full p-4 text-left rounded-lg border transition-all ${showCorrect
                        ? 'border-green-500 bg-green-50 text-green-800'
                        : showIncorrect
                          ? 'border-red-500 bg-red-50 text-red-800'
                          : isSelected
                            ? 'border-blue-500 bg-blue-50 text-blue-800'
                            : 'border-gray-300 hover:border-gray-400 hover:bg-gray-50'
                        }`}
                    >
                      <div className="flex items-center gap-3">
                        <div className={`w-4 h-4 rounded-full border-2 flex items-center justify-center ${showCorrect
                          ? 'border-green-500 bg-green-500'
                          : showIncorrect
                            ? 'border-red-500 bg-red-500'
                            : isSelected
                              ? 'border-blue-500 bg-blue-500'
                              : 'border-gray-400'
                          }`}>
                          {(showCorrect || (isSelected && !showIncorrect)) && (
                            <div className="w-2 h-2 bg-white rounded-full"></div>
                          )}
                        </div>
                        <span className="font-medium">{option}</span>
                      </div>
                    </button>
                  );
                })}
              </div>

              {showExplanation && (
                <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <h4 className="font-semibold text-blue-900 mb-2">Explication :</h4>
                  <p className="text-blue-800">{currentQ.explanation}</p>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center">
            <Button
              onClick={() => setCurrentQuestion(prev => Math.max(0, prev - 1))}
              disabled={currentQuestion === 0}
              variant="outline"
            >
              ← Précédent
            </Button>

            <div className="flex gap-3">
              {!showExplanation && isAnswered && (
                <Button
                  onClick={() => setShowExplanation(true)}
                  variant="outline"
                  className="flex items-center gap-2"
                >
                  <CheckCircle className="h-4 w-4" />
                  Vérifier
                </Button>
              )}

              {showExplanation && currentQuestion < questions.length - 1 && (
                <Button
                  onClick={() => {
                    setCurrentQuestion(prev => prev + 1);
                    setShowExplanation(false);
                  }}
                  className="flex items-center gap-2"
                >
                  Suivant
                  <ChevronRight className="h-4 w-4" />
                </Button>
              )}

              {showExplanation && currentQuestion === questions.length - 1 && (
                <Button
                  onClick={handleFinish}
                  className="flex items-center gap-2 bg-green-600 hover:bg-green-700"
                >
                  <Trophy className="h-4 w-4" />
                  Terminer l'évaluation
                </Button>
              )}
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
        <div className="flex justify-between items-center bg-blue-50 p-6 rounded-lg mt-8">
          <Link to="/articles/oteria-cyber-school">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              ← Programme principal
            </button>
          </Link>
          <div className="flex gap-3">
            <div className="text-center">
              <div className="text-sm text-gray-600">Temps restant</div>
              <div className="text-lg font-bold text-teal-600">{formatTime(timeLeft)}</div>
            </div>
          </div>
          <div className="text-blue-600 font-medium">Évaluation finale →</div>
        </div>
      </div>
    </div>
  );
};

export default OteriaEvaluationFinaleQCMPage;
