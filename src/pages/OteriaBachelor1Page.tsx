import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Award, Code2, CodeIcon, Database, Cpu, Shield, Zap, Binary, Network, Lock, BarChart3, Target, Brain } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { BookOpen, Play, Target as TargetIcon, Brain as BrainIcon } from 'lucide-react';

// Données des séances Bachelor 1
const bachelor1Sessions = [
  {
    id: 1,
    title: "Logique fondamentale & booléens en Python",
    content: "Tables de vérité, connecteurs (¬ ∧ ∨ ⇒), Quantificateurs ∀ / ∃ & rôle en preuve, Traduction : not, and, or ; booléens True/False",
    icon: Binary,
    color: "bg-teal-600",
    hasCourse: true,
    hasExercises: true,
    hasQuiz: true,
    hasFlashcards: true
  },
  {
    id: 2,
    title: "Types & structures de contrôle Python",
    content: "int, float, str, list, erreurs de flottants, Boucles if/for/while, fonctions def, Librairies : math, random, numpy",
    icon: Code2,
    color: "bg-teal-600",
    hasCourse: true,
    hasExercises: true,
    hasQuiz: true,
    hasFlashcards: true
  },
  {
    id: 3,
    title: "Récurrence & récursivité – sommes / produits",
    content: "Ensembles N Z Q R, fonctions usuelles, Preuve par récurrence simple/double/forte, Programmes récursifs classiques (factorielle, Fib)",
    icon: Zap,
    color: "bg-teal-600",
    hasCourse: true,
    hasExercises: true,
    hasQuiz: true,
    hasFlashcards: true
  },
  {
    id: 4,
    title: "Suites numériques & modélisation",
    content: "Suites explicites vs récurrentes ; limite Un, Étude de convergence",
    icon: BarChart3,
    color: "bg-teal-600",
    hasCourse: true,
    hasExercises: true,
    hasQuiz: true,
    hasFlashcards: true
  },
  {
    id: 5,
    title: "Fonctions, croissance, polynômes (I)",
    content: "Parité, périodicité, continuité (aperçu), Théorème de croissance comparée",
    icon: Database,
    color: "bg-teal-600",
    hasCourse: true,
    hasExercises: true,
    hasQuiz: true,
    hasFlashcards: true
  },
  {
    id: 6,
    title: "Polynômes & dichotomie (II)",
    content: "Degré, racines, division euclidienne, Algorithme de la dichotomie pour f(x)=0",
    icon: Target,
    color: "bg-teal-600",
    hasCourse: true,
    hasExercises: true,
    hasQuiz: true,
    hasFlashcards: true
  },
  {
    id: 7,
    title: "Dénombrement & probas : paradoxes",
    content: "Coefficients binomiaux, binôme de Newton, Paradoxe des anniversaires (= collision hash)",
    icon: Shield,
    color: "bg-teal-600",
    hasCourse: true,
    hasExercises: true,
    hasQuiz: true,
    hasFlashcards: true
  },
  {
    id: 8,
    title: "Introduction aux probabilités",
    content: "Génération d'aléatoire, Règles addition / multiplication, indépendance",
    icon: Network,
    color: "bg-teal-600",
    hasCourse: true,
    hasExercises: true,
    hasQuiz: true,
    hasFlashcards: true
  },
  {
    id: 9,
    title: "Variables aléatoires & histogrammes",
    content: "Lois usuelles (Bernoulli, Binomiale, Expo…)",
    icon: Cpu,
    color: "bg-teal-600",
    hasCourse: true,
    hasExercises: true,
    hasQuiz: true,
    hasFlashcards: true
  },
  {
    id: 10,
    title: "Intégrales & π par Monte-Carlo",
    content: "Approximation d'intégrales (aire sous courbe), Monte-Carlo",
    icon: Zap,
    color: "bg-teal-600",
    hasCourse: true,
    hasExercises: true,
    hasQuiz: true,
    hasFlashcards: true
  },
  {
    id: 11,
    title: "Matrices & chaînes de Markov",
    content: "Opérations, inversion, résolution Ax = b (numpy.linalg)",
    icon: Database,
    color: "bg-teal-600",
    hasCourse: true,
    hasExercises: true,
    hasQuiz: true,
    hasFlashcards: true
  },
  {
    id: 12,
    title: "Arithmétique modulaire & crypto affine",
    content: "Diviseurs, primes, modulo, inverses",
    icon: Lock,
    color: "bg-teal-600",
    hasCourse: true,
    hasExercises: true,
    hasQuiz: true,
    hasFlashcards: true
  },
  {
    id: 13,
    title: "Mini-projet – ateliers & méthodologie",
    content: "Le projet de groupe : articulation et déroulement complet avec guide méthodologique détaillé pour mener à bien votre projet de groupe étape par étape.",
    icon: Code2,
    color: "bg-teal-600",
    hasCourse: false,
    hasExercises: false,
    hasQuiz: false,
    hasFlashcards: false,
    hasMiniProjet: true
  },
  {
    id: 14,
    title: "Évaluation Finale - QCM Complet",
    content: "Évaluation finale du programme Bachelor 1 : QCM complet sur logique, Python, algorithmes et structures de données. 50 questions couvrant tous les chapitres du programme.",
    icon: TargetIcon,
    color: "bg-teal-600",
    hasCourse: false,
    hasExercises: false,
    hasQuiz: true,
    hasFlashcards: false
  }
];

const SessionCard = ({ session }) => {
  return (
    <Card className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-teal-200 h-full flex flex-col">
      <CardHeader className="text-center pb-4">
        <div className={`w-16 h-16 ${session.color} rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg relative`}>
          <session.icon className="h-8 w-8 text-white" />
          <div className="absolute -top-1 -right-1 bg-white text-teal-600 rounded-full w-6 h-6 flex items-center justify-center text-xs font-bold border-2 border-teal-600 shadow-sm">
            {session.id}
          </div>
        </div>
        <Badge variant="outline" className="text-teal-600 border-teal-200 bg-teal-50/50 text-center px-3 py-2 text-sm font-medium w-full flex items-center justify-center">
          Séance {session.id} : {session.title}
        </Badge>
      </CardHeader>
      <CardContent className="pt-0 flex-1 flex flex-col">
        <p className="text-sm text-gray-600 mb-6 text-center leading-relaxed flex-1">
          {session.content}
        </p>
        <div className="space-y-3 mt-auto">
          {session.hasCourse && (
            session.id === 1 ? (
              <Link to="/formation/oteria/logique-fondamentale-cours" className="w-full">
                <Button variant="default" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Cours
                </Button>
              </Link>
            ) : session.id === 2 ? (
              <Link to="/formation/oteria/python-bases-cours" className="w-full">
                <Button variant="default" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Cours
                </Button>
              </Link>
            ) : session.id === 3 ? (
              <Link to="/formation/oteria/recurrence-recursivite-cours" className="w-full">
                <Button variant="default" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Cours
                </Button>
              </Link>
            ) : session.id === 4 ? (
              <Link to="/formation/oteria/suites-numeriques-cours" className="w-full">
                <Button variant="default" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Cours
                </Button>
              </Link>
            ) : session.id === 5 ? (
              <Link to="/formation/oteria/fonctions-variable-reelle-cours" className="w-full">
                <Button variant="default" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Cours
                </Button>
              </Link>
            ) : session.id === 6 ? (
              <Link to="/formation/oteria/polynomes-approximation-cours" className="w-full">
                <Button variant="default" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Cours
                </Button>
              </Link>
            ) : session.id === 7 ? (
              <Link to="/formation/oteria/denombrement-paradoxes-cours" className="w-full">
                <Button variant="default" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Cours
                </Button>
              </Link>
            ) : session.id === 8 ? (
              <Link to="/formation/oteria/probabilites-introduction-cours" className="w-full">
                <Button variant="default" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Cours
                </Button>
              </Link>
            ) : session.id === 9 ? (
              <Link to="/formation/oteria/variables-aleatoires-cours" className="w-full">
                <Button variant="default" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Cours
                </Button>
              </Link>
            ) : session.id === 10 ? (
              <Link to="/formation/oteria/integrales-monte-carlo-cours" className="w-full">
                <Button variant="default" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Cours
                </Button>
              </Link>
            ) : session.id === 11 ? (
              <Link to="/formation/oteria/matrices-markov-cours" className="w-full">
                <Button variant="default" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Cours
                </Button>
              </Link>
            ) : session.id === 12 ? (
              <Link to="/formation/oteria/matrices-stochastiques-cours" className="w-full">
                <Button variant="default" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Cours
                </Button>
              </Link>
            ) : (
              <Button variant="default" className="w-full bg-teal-600 hover:bg-teal-700 text-white font-medium transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg">
                <BookOpen className="mr-2 h-4 w-4" />
                Cours
              </Button>
            )
          )}

          {session.hasExercises && (
            session.id === 1 ? (
              <Link to="/formation/oteria/logique-fondamentale-exercices">
                <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                  <Play className="mr-2 h-4 w-4" />
                  Exercices
                </Button>
              </Link>
            ) : session.id === 2 ? (
              <Link to="/formation/oteria/python-bases-exercices">
                <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                  <Play className="mr-2 h-4 w-4" />
                  Exercices
                </Button>
              </Link>
            ) : session.id === 3 ? (
              <Link to="/formation/oteria/recurrence-recursivite-exercices">
                <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                  <Play className="mr-2 h-4 w-4" />
                  Exercices
                </Button>
              </Link>
            ) : session.id === 4 ? (
              <Link to="/formation/oteria/suites-numeriques-exercices">
                <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                  <Play className="mr-2 h-4 w-4" />
                  Exercices
                </Button>
              </Link>
            ) : session.id === 5 ? (
              <Link to="/formation/oteria/fonctions-exercices">
                <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                  <Play className="mr-2 h-4 w-4" />
                  Exercices
                </Button>
              </Link>
            ) : session.id === 6 ? (
              <Link to="/formation/oteria/polynomes-exercices">
                <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                  <Play className="mr-2 h-4 w-4" />
                  Exercices
                </Button>
              </Link>
            ) : session.id === 7 ? (
              <Link to="/formation/oteria/denombrement-exercices">
                <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                  <Play className="mr-2 h-4 w-4" />
                  Exercices
                </Button>
              </Link>
            ) : session.id === 8 ? (
              <Link to="/formation/oteria/probabilites-exercices">
                <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                  <Play className="mr-2 h-4 w-4" />
                  Exercices
                </Button>
              </Link>
            ) : session.id === 9 ? (
              <Link to="/formation/oteria/variables-aleatoires-exercices">
                <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                  <Play className="mr-2 h-4 w-4" />
                  Exercices
                </Button>
              </Link>
            ) : session.id === 10 ? (
              <Link to="/formation/oteria/integrales-monte-carlo-exercices">
                <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                  <Play className="mr-2 h-4 w-4" />
                  Exercices
                </Button>
              </Link>
            ) : session.id === 11 ? (
              <Link to="/formation/oteria/matrices-markov-exercices">
                <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                  <Play className="mr-2 h-4 w-4" />
                  Exercices
                </Button>
              </Link>
            ) : session.id === 12 ? (
              <Link to="/formation/oteria/matrices-stochastiques-exercices">
                <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                  <Play className="mr-2 h-4 w-4" />
                  Exercices
                </Button>
              </Link>
            ) : (
              <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                <Play className="mr-2 h-4 w-4" />
                Exercices
              </Button>
            )
          )}

          {session.hasFlashcards && (
            session.id === 1 ? (
              <Link to="/formation/oteria/logique-fondamentale-flashcards">
                <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                  <BrainIcon className="mr-2 h-4 w-4" />
                  Flashcards
                </Button>
              </Link>
            ) : session.id === 2 ? (
              <Link to="/formation/oteria/python-bases-flashcards">
                <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                  <BrainIcon className="mr-2 h-4 w-4" />
                  Flashcards
                </Button>
              </Link>
            ) : session.id === 3 ? (
              <Link to="/formation/oteria/recurrence-recursivite-flashcards">
                <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                  <BrainIcon className="mr-2 h-4 w-4" />
                  Flashcards
                </Button>
              </Link>
            ) : session.id === 4 ? (
              <Link to="/formation/oteria/suites-numeriques-flashcards">
                <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                  <BrainIcon className="mr-2 h-4 w-4" />
                  Flashcards
                </Button>
              </Link>
            ) : session.id === 5 ? (
              <Link to="/formation/oteria/fonctions-flashcards">
                <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                  <BrainIcon className="mr-2 h-4 w-4" />
                  Flashcards
                </Button>
              </Link>
            ) : session.id === 6 ? (
              <Link to="/formation/oteria/polynomes-dichotomie-flashcards">
                <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                  <BrainIcon className="mr-2 h-4 w-4" />
                  Flashcards
                </Button>
              </Link>
            ) : session.id === 7 ? (
              <Link to="/formation/oteria/denombrement-flashcards">
                <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                  <BrainIcon className="mr-2 h-4 w-4" />
                  Flashcards
                </Button>
              </Link>
            ) : session.id === 8 ? (
              <Link to="/formation/oteria/probabilites-flashcards">
                <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                  <BrainIcon className="mr-2 h-4 w-4" />
                  Flashcards
                </Button>
              </Link>
            ) : session.id === 9 ? (
              <Link to="/formation/oteria/variables-aleatoires-flashcards">
                <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                  <BrainIcon className="mr-2 h-4 w-4" />
                  Flashcards
                </Button>
              </Link>
            ) : session.id === 10 ? (
              <Link to="/formation/oteria/integrales-monte-carlo-flashcards">
                <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                  <BrainIcon className="mr-2 h-4 w-4" />
                  Flashcards
                </Button>
              </Link>
            ) : session.id === 11 ? (
              <Link to="/formation/oteria/matrices-markov-flashcards">
                <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                  <BrainIcon className="mr-2 h-4 w-4" />
                  Flashcards
                </Button>
              </Link>
            ) : (
              <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                <BrainIcon className="mr-2 h-4 w-4" />
                Flashcards
              </Button>
            )
          )}

          {session.hasQuiz && (
            session.id === 1 ? (
              <Link to="/formation/oteria/logique-fondamentale-qcm">
                <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                  <TargetIcon className="mr-2 h-4 w-4" />
                  QCM
                </Button>
              </Link>
            ) : session.id === 14 ? (
              <div className="space-y-2">
                <Link to="/formation/oteria/fiche-evaluation-finale">
                  <Button variant="outline" className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium transition-all duration-300 hover:scale-105">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Fiche récapitulative
                  </Button>
                </Link>
                <Link to="/formation/oteria/evaluation-finale">
                  <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                    <TargetIcon className="mr-2 h-4 w-4" />
                    Évaluation Finale
                  </Button>
                </Link>
                <Link to="/formation/oteria/python-references">
                  <Button variant="outline" className="w-full border-2 border-purple-600 text-purple-600 hover:bg-purple-50 font-medium transition-all duration-300 hover:scale-105">
                    <CodeIcon className="mr-2 h-4 w-4" />
                    Références Python
                  </Button>
                </Link>
              </div>
            ) : session.id === 2 ? (
              <Link to="/formation/oteria/python-bases-qcm">
                <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                  <TargetIcon className="mr-2 h-4 w-4" />
                  QCM
                </Button>
              </Link>
            ) : session.id === 3 ? (
              <Link to="/formation/oteria/recurrence-recursivite-qcm">
                <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                  <TargetIcon className="mr-2 h-4 w-4" />
                  QCM
                </Button>
              </Link>
            ) : session.id === 4 ? (
              <Link to="/formation/oteria/suites-numeriques-qcm">
                <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                  <TargetIcon className="mr-2 h-4 w-4" />
                  QCM
                </Button>
              </Link>
            ) : session.id === 5 ? (
              <Link to="/formation/oteria/fonctions-qcm">
                <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                  <TargetIcon className="mr-2 h-4 w-4" />
                  QCM
                </Button>
              </Link>
            ) : session.id === 6 ? (
              <Link to="/formation/oteria/polynomes-qcm">
                <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                  <TargetIcon className="mr-2 h-4 w-4" />
                  QCM
                </Button>
              </Link>
            ) : session.id === 7 ? (
              <Link to="/formation/oteria/denombrement-qcm">
                <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                  <TargetIcon className="mr-2 h-4 w-4" />
                  QCM
                </Button>
              </Link>
            ) : session.id === 9 ? (
              <Link to="/formation/oteria/variables-aleatoires-qcm">
                <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                  <TargetIcon className="mr-2 h-4 w-4" />
                  QCM
                </Button>
              </Link>
            ) : session.id === 11 ? (
              <Link to="/formation/oteria/matrices-markov-qcm">
                <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                  <TargetIcon className="mr-2 h-4 w-4" />
                  QCM
                </Button>
              </Link>
            ) : session.id === 14 ? (
              <Link to="/formation/oteria/evaluation-finale">
                <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                  <TargetIcon className="mr-2 h-4 w-4" />
                  Évaluation Finale
                </Button>
              </Link>
            ) : (
              <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                <TargetIcon className="mr-2 h-4 w-4" />
                QCM
              </Button>
            )
          )}

          {session.hasMiniProjet && (
            session.id === 13 ? (
              <div className="space-y-2">
                <Link to="/formation/oteria/mini-projet">
                  <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                    <Code2 className="mr-2 h-4 w-4" />
                    Mini Projet - Ateliers
                  </Button>
                </Link>
                <Link to="/formation/oteria/mini-projet-deroulement">
                  <Button variant="outline" className="w-full border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-medium transition-all duration-300 hover:scale-105">
                    <BookOpen className="mr-2 h-4 w-4" />
                    Déroulement du projet
                  </Button>
                </Link>
              </div>
            ) : (
              <Button variant="outline" className="w-full border-2 border-teal-600 text-teal-600 hover:bg-teal-50 font-medium transition-all duration-300 hover:scale-105">
                <Code2 className="mr-2 h-4 w-4" />
                Mini Projet
              </Button>
            )
          )}
        </div>
      </CardContent>
    </Card>
  );
};

const OteriaBachelor1Page = () => {
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
            <Link to="/articles/oteria-cyber-school" className="hover:text-teal-700 transition-colors">
              OTERIA Cyber School
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <span className="text-teal-600 font-medium">Bachelor 1</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <Award className="h-8 w-8 text-teal-600" />
            </div>
          </div>
          <h1 className="text-4xl font-bold mb-8 text-teal-900">Programme Bachelor 1</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-6">
            MATHÉMATIQUES, LOGIQUE ET ALGORITHMIQUE POUR L'INFORMATIQUE
          </p>
          <Badge variant="outline" className="px-4 py-2 text-teal-600 border-teal-200 bg-teal-50">
            Niveau Fondamental - 14 Séances
          </Badge>
        </div>

        {/* Programme Principal */}
        <div className="mb-8">
          <div className="bg-teal-50 rounded-lg p-4 mb-4 text-center border border-teal-200">
            <h2 className="text-xl font-bold mb-2 text-teal-900 flex items-center justify-center gap-2">
              <div className="p-2 rounded-lg bg-teal-600 text-white">
                <Award className="h-5 w-5" />
              </div>
              Programme Bachelor 1 - Mathématiques et Informatique
            </h2>
            <p className="text-sm text-teal-700">
              Mathématiques, logique et algorithmique pour l'informatique - 14 séances intensives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bachelor1Sessions.map((session) => (
              <SessionCard key={session.id} session={session} />
            ))}
          </div>
        </div>

        {/* Informations complémentaires */}
        <div className="grid md:grid-cols-3 gap-6 mt-12">
          <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl border border-teal-200 text-center">
            <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-teal-800 mb-2">Cybersécurité</h3>
            <p className="text-sm text-teal-700">
              Formation spécialisée en sécurité informatique et protection des données
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl border border-teal-200 text-center">
            <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Code2 className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-teal-800 mb-2">Programmation</h3>
            <p className="text-sm text-teal-700">
              Maîtrise des langages de programmation et algorithmes avancés
            </p>
          </div>

          <div className="bg-gradient-to-br from-teal-50 to-teal-100 p-6 rounded-xl border border-teal-200 text-center">
            <div className="w-12 h-12 bg-teal-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Network className="h-6 w-6 text-white" />
            </div>
            <h3 className="text-lg font-bold text-teal-800 mb-2">Projets Réels</h3>
            <p className="text-sm text-teal-700">
              Mise en pratique avec des projets concrets et challenges techniques
            </p>
          </div>
        </div>

        {/* Navigation entre programmes */}
        <div className="mt-12 text-center">
          <Link to="/articles/oteria-cyber-school">
            <Button variant="outline" className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50">
              ← Retour à OTERIA Cyber School
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OteriaBachelor1Page;
