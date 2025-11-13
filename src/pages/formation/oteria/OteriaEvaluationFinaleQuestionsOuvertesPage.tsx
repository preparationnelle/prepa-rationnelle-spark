import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ArrowLeft, Target, BookOpen, CheckCircle, Clock, Users, Code, Calculator, Network } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

// Données des questions ouvertes
const questionsOuvertesData = {
  title: "Évaluation Finale - Partie 2 : Questions ouvertes",
  subtitle: "Questions rédigées sur les notions mathématiques et algorithmiques",
  estimatedTime: "2h30 total pour les 5 parties",
  introduction: "Cette partie évalue votre capacité à expliquer, démontrer et appliquer les concepts mathématiques et algorithmiques vus tout au long du programme.",
  chapters: [
    {
      id: 1,
      title: "Chapitre 1 : Logique et Raisonnement",
      icon: CheckCircle,
      color: "text-green-600",
      bgColor: "bg-green-50",
      borderColor: "border-green-200",
      questions: [
        {
          id: 1,
          question: "Expliquez en détail comment démontrer qu'une proposition de la forme ∀n ∈ ℕ, n² ≥ 0 est vraie. Quelle est la structure du raisonnement logique utilisé ?",
          points: 4,
          keywords: ["quantificateur universel", "démonstration directe", "axiome"]
        },
        {
          id: 2,
          question: "Donnez un exemple de raisonnement par contraposée et un exemple de raisonnement par l'absurde. Expliquez dans quel cas il est préférable d'utiliser l'un plutôt que l'autre.",
          points: 4,
          keywords: ["contraposée", "absurde", "cas d'usage"]
        },
        {
          id: 3,
          question: "Montrez, à l'aide d'un exemple concret, comment les lois de De Morgan permettent de simplifier une expression logique complexe.",
          points: 3,
          keywords: ["lois de De Morgan", "simplification", "exemple concret"]
        }
      ]
    },
    {
      id: 2,
      title: "Chapitre 2 : Programmation Python",
      icon: Code,
      color: "text-blue-600",
      bgColor: "bg-blue-50",
      borderColor: "border-blue-200",
      questions: [
        {
          id: 4,
          question: "On considère le code suivant :\n\ndef somme(n):\n    s = 0\n    for k in range(1, n+1):\n        s += k\n    return s\n\nExpliquez ce que fait ce programme. Quelle est sa complexité algorithmique ? Proposez une autre méthode pour obtenir le même résultat sans boucle.",
          points: 4,
          keywords: ["complexité O(n)", "formule mathématique", "somme des premiers entiers"]
        },
        {
          id: 5,
          question: "Écrivez une fonction Python produit(n) qui renvoie le produit des entiers de 1 à n. Expliquez la différence entre une somme et un produit dans la logique de programmation.",
          points: 3,
          keywords: ["fonction récursive/itérative", "accumulateur", "différence somme/produit"]
        },
        {
          id: 6,
          question: "Le code suivant simule une estimation de π :\n\nimport random\n\nN = 100000\ncount = 0\nfor _ in range(N):\n    x, y = random.random(), random.random()\n    if x**2 + y**2 <= 1:\n        count += 1\npi_estime = 4 * count / N\n\nExpliquez pas à pas le raisonnement mathématique qui justifie cette méthode de Monte Carlo.",
          points: 4,
          keywords: ["quart de disque", "probabilité géométrique", "convergence statistique"]
        }
      ]
    },
    {
      id: 3,
      title: "Chapitre 3 : Combinatoire et Probabilités",
      icon: Calculator,
      color: "text-purple-600",
      bgColor: "bg-purple-50",
      borderColor: "border-purple-200",
      questions: [
        {
          id: 7,
          question: "Démontrez la formule du coefficient binomial Cₙᵏ = n! / (k!(n-k)!) en expliquant son interprétation combinatoire à partir d'un exemple (tirage de boules, équipes d'étudiants, etc.).",
          points: 4,
          keywords: ["démonstration combinatoire", "interprétation", "exemple concret"]
        },
        {
          id: 8,
          question: "Quelle est la différence entre une permutation, un arrangement et une combinaison ? Donnez un exemple concret de situation correspondant à chaque cas.",
          points: 3,
          keywords: ["ordre/non-ordre", "avec/sans remise", "exemples concrets"]
        },
        {
          id: 9,
          question: "Expliquez la différence entre une loi de Bernoulli, une loi binomiale et une loi géométrique. Pour chacune, indiquez un scénario réel et une modélisation possible en Python.",
          points: 4,
          keywords: ["lois de probabilité", "scénarios", "simulation Python"]
        }
      ]
    },
    {
      id: 4,
      title: "Chapitre 4 : Suites et Fonctions",
      icon: Network,
      color: "text-orange-600",
      bgColor: "bg-orange-50",
      borderColor: "border-orange-200",
      questions: [
        {
          id: 10,
          question: "Définissez ce que signifie : \"une suite est croissante et majorée\". Donnez un exemple concret de suite ayant ces propriétés et expliquez pourquoi elle converge.",
          points: 3,
          keywords: ["définition rigoureuse", "exemple concret", "théorème de convergence"]
        },
        {
          id: 11,
          question: "On considère la suite définie par uₙ₊₁ = ½(uₙ + 2/uₙ) avec u₀ = 1. Expliquez le comportement de cette suite et son lien avec la recherche de √2.",
          points: 4,
          keywords: ["algorithme de Héron", "convergence quadratique", "racine carrée"]
        },
        {
          id: 12,
          question: "Soit la fonction f(x) = |x|. Justifiez rigoureusement si f est injective, surjective ou bijective sur ℝ.",
          points: 3,
          keywords: ["injection", "surjection", "bijection", "preuve mathématique"]
        }
      ]
    },
    {
      id: 5,
      title: "Chapitre 5 : Matrices et Algèbre",
      icon: Users,
      color: "text-red-600",
      bgColor: "bg-red-50",
      borderColor: "border-red-200",
      questions: [
        {
          id: 13,
          question: "Définissez ce qu'est une matrice diagonale, symétrique et antisymétrique. Donnez un exemple de chacune et expliquez comment vérifier ces propriétés en Python.",
          points: 4,
          keywords: ["définitions", "exemples", "vérification algorithmique"]
        },
        {
          id: 14,
          question: "Écrivez une fonction Python trace(M) qui calcule la trace d'une matrice carrée M. Expliquez la signification mathématique de la trace et dans quel type de problème elle intervient.",
          points: 3,
          keywords: ["implémentation", "signification mathématique", "applications"]
        },
        {
          id: 15,
          question: "Une matrice M est dite inversible si et seulement si det(M) ≠ 0. Expliquez le sens de cette condition et décrivez en quoi elle est utile pour la résolution de systèmes linéaires.",
          points: 4,
          keywords: ["déterminant", "inversibilité", "systèmes linéaires"]
        }
      ]
    }
  ]
};

const OteriaEvaluationFinaleQuestionsOuvertesPage: React.FC = () => {
  const totalQuestions = questionsOuvertesData.chapters.reduce((acc, chapter) => acc + chapter.questions.length, 0);
  const totalPoints = questionsOuvertesData.chapters.reduce((acc, chapter) =>
    acc + chapter.questions.reduce((sum, q) => sum + q.points, 0), 0
  );

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 py-8 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <Link to="/articles/oteria-cyber-school">
            <Button variant="outline" className="mb-4 border-2 border-teal-600 text-teal-600 hover:bg-teal-50">
              <Home className="mr-2 h-4 w-4" />
              Retour à l'accueil
            </Button>
          </Link>
          <h1 className="text-4xl font-bold text-blue-900 mb-2">{questionsOuvertesData.title}</h1>
          <p className="text-xl text-blue-700 mb-4">{questionsOuvertesData.subtitle}</p>

          <div className="flex items-center justify-center gap-6 mb-6">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800 px-4 py-2">
              <Target className="mr-2 h-4 w-4" />
              {totalQuestions} questions
            </Badge>
            <Badge variant="secondary" className="bg-green-100 text-green-800 px-4 py-2">
              <CheckCircle className="mr-2 h-4 w-4" />
              {totalPoints} points
            </Badge>
            <Badge variant="secondary" className="bg-orange-100 text-orange-800 px-4 py-2">
              <Clock className="mr-2 h-4 w-4" />
              {questionsOuvertesData.estimatedTime}
            </Badge>
          </div>
        </div>

        {/* Introduction */}
        <Card className="mb-8 border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-indigo-50">
          <CardContent className="p-6">
            <p className="text-lg text-blue-800 text-center">
              {questionsOuvertesData.introduction}
            </p>
            <div className="mt-4 text-center">
              <p className="text-sm text-gray-600">
                <strong>Conseil :</strong> Structurez vos réponses avec une introduction, un développement argumenté et une conclusion.
                Utilisez des exemples concrets pour illustrer vos explications.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Questions par chapitre */}
        <div className="space-y-8">
          {questionsOuvertesData.chapters.map((chapter) => {
            const ChapterIcon = chapter.icon;
            return (
              <Card key={chapter.id} className={`border-2 ${chapter.borderColor} ${chapter.bgColor}`}>
                <CardHeader>
                  <CardTitle className={`text-2xl font-bold ${chapter.color} flex items-center gap-3`}>
                    <ChapterIcon className="h-6 w-6" />
                    {chapter.title}
                  </CardTitle>
                  <div className="flex gap-2 mt-2">
                    {chapter.questions.map((q) => (
                      <Badge key={q.id} variant="outline" className={`${chapter.color} border-current`}>
                        Q{q.id} - {q.points} pts
                      </Badge>
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    {chapter.questions.map((question) => (
                      <div key={question.id} className="border-l-4 border-blue-300 pl-4 bg-white p-4 rounded-r-lg">
                        <div className="flex items-start justify-between mb-3">
                          <h3 className="text-lg font-semibold text-gray-900">
                            Question {question.id}
                          </h3>
                          <Badge variant="secondary" className="bg-blue-100 text-blue-800">
                            {question.points} points
                          </Badge>
                        </div>
                        <p className="text-gray-700 leading-relaxed whitespace-pre-line mb-4">
                          {question.question}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {question.keywords.map((keyword, index) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {keyword}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Navigation */}
        <div className="text-center mt-12 space-y-4">
          <div className="flex justify-center gap-4">
            <Link to="/formation/oteria/evaluation-finale">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
                <Target className="mr-2 h-5 w-5" />
                Passer l'évaluation QCM
              </Button>
            </Link>
            <Link to="/formation/oteria/fiche-evaluation-finale">
              <Button variant="outline" className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-3">
                <BookOpen className="mr-2 h-5 w-5" />
                Fiche récapitulative
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

export default OteriaEvaluationFinaleQuestionsOuvertesPage;
