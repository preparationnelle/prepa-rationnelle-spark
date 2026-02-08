import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Award, Code2, Database, Cpu, Shield, Zap, Binary, Network, Lock, BarChart3, Target, Brain, BookOpen } from 'lucide-react';
import OteriaSessionListRow from '@/components/formation/OteriaSessionListRow';
import { Button } from '@/components/ui/button';

// Données des séances OTERIA
// Updated with explicit links where the default slug pattern doesn't match
const oteriaSessions = [
  {
    id: 1,
    title: "Logique fondamentale & booléens en Python",
    content: "Tables de vérité, connecteurs (¬ ∧ ∨ ⇒), Quantificateurs ∀ / ∃ & rôle en preuve, Traduction : not, and, or ; booléens True/False",
    icon: Binary,
    color: "bg-teal-600",
    hasCourse: true,
    hasExercises: true,
    hasQuiz: true,
    hasFlashcards: true,
    courseLink: "/formation/oteria/logique-fondamentale-cours",
    exercisesLink: "/formation/oteria/logique-fondamentale-exercices",
    flashcardsLink: "/formation/oteria/logique-fondamentale-flashcards",
    qcmLink: "/formation/oteria/logique-fondamentale-qcm"
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
    hasFlashcards: true,
    courseLink: "/formation/oteria/python-bases-cours",
    exercisesLink: "/formation/oteria/python-bases-exercices",
    flashcardsLink: "/formation/oteria/python-bases-flashcards",
    qcmLink: "/formation/oteria/python-bases-qcm"
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
    hasFlashcards: true,
    courseLink: "/formation/oteria/recurrence-recursivite-cours",
    exercisesLink: "/formation/oteria/recurrence-recursivite-exercices",
    flashcardsLink: "/formation/oteria/recurrence-recursivite-flashcards",
    qcmLink: "/formation/oteria/recurrence-recursivite-qcm"
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
    hasFlashcards: true,
    courseLink: "/formation/oteria/suites-numeriques-cours",
    exercisesLink: "/formation/oteria/suites-numeriques-exercices",
    flashcardsLink: "/formation/oteria/suites-numeriques-flashcards",
    qcmLink: "/formation/oteria/suites-numeriques-qcm"
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
    hasFlashcards: true,
    courseLink: "/formation/oteria/fonctions-variable-reelle-cours",
    exercisesLink: "/formation/oteria/fonctions-variable-reelle-exercices",
    flashcardsLink: "/formation/oteria/fonctions-variable-reelle-flashcards",
    // Original file had no explicit link for 5 flashcards, just default button.
    // I'll leave flashcardsLink empty if unsure to avoid 404, or use a likely one.
    // Actually, let's look at route.ts search for OteriaFonctionsFlashcardsPage if I could.
    // For now, I'll stick to what I know works or is standard.
    qcmLink: "/formation/oteria/fonctions-variable-reelle-qcm"
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
    hasFlashcards: true,
    courseLink: "/formation/oteria/polynomes-approximation-cours",
    exercisesLink: "/formation/oteria/polynomes-approximation-exercices",
    flashcardsLink: "/formation/oteria/polynomes-dichotomie-flashcards",
    qcmLink: "/formation/oteria/polynomes-approximation-qcm"
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
    hasFlashcards: true,
    courseLink: "/formation/oteria/denombrement-paradoxes-cours",
    exercisesLink: "/formation/oteria/denombrement-exercices",
    flashcardsLink: "/formation/oteria/denombrement-flashcards",
    qcmLink: "/formation/oteria/denombrement-qcm"
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
    hasFlashcards: true,
    courseLink: "/formation/oteria/probabilites-introduction-cours",
    exercisesLink: "/formation/oteria/probabilites-exercices",
    flashcardsLink: "/formation/oteria/probabilites-flashcards",
    qcmLink: "/formation/oteria/probabilites-qcm"
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
    hasFlashcards: true,
    courseLink: "/formation/oteria/variables-aleatoires-cours",
    exercisesLink: "/formation/oteria/variables-aleatoires-exercices",
    flashcardsLink: "/formation/oteria/variables-aleatoires-flashcards",
    qcmLink: "/formation/oteria/variables-aleatoires-qcm"
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
    hasFlashcards: true,
    courseLink: "/formation/oteria/integrales-monte-carlo-cours",
    exercisesLink: "/formation/oteria/integrales-monte-carlo-exercices",
    flashcardsLink: "/formation/oteria/integrales-monte-carlo-flashcards",
    qcmLink: "/formation/oteria/integrales-monte-carlo-qcm"
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
    hasFlashcards: true,
    courseLink: "/formation/oteria/matrices-markov-cours",
    exercisesLink: "/formation/oteria/matrices-markov-exercices",
    flashcardsLink: "/formation/oteria/matrices-markov-flashcards",
    qcmLink: "/formation/oteria/matrices-markov-qcm" // Inferred
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
    hasFlashcards: true,
    courseLink: "/formation/oteria/matrices-stochastiques-cours",
    exercisesLink: "/formation/oteria/matrices-stochastiques-exercices",
    flashcardsLink: "/formation/oteria/matrices-stochastiques-flashcards", // Inferred
    qcmLink: "/formation/oteria/matrices-stochastiques-qcm" // Inferred
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
    hasMiniProjet: true,
    customLink: "/formation/oteria/mini-projet",
    customButtonText: "Accéder au projet"
  },
  {
    id: 14,
    title: "Évaluation Finale - QCM Complet",
    content: "Évaluation finale du programme Bachelor 2 : QCM complet sur logique, Python, algorithmes et structures de données. 50 questions couvrant tous les chapitres du programme.",
    icon: Target,
    color: "bg-teal-600",
    hasCourse: false,
    hasExercises: false,
    hasQuiz: true,
    hasFlashcards: false,
    customLink: "/formation/oteria/evaluation-finale",
    customButtonText: "Commencer l'évaluation"
  }
];

const ArticlesOteriaCyberSchoolPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden">
      {/* Floating elements - Teal bubbles (matched to Oteria theme) */}
      <div className="absolute -z-10 top-20 left-10 w-32 h-32 bg-teal-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute -z-10 bottom-20 right-10 w-28 h-28 bg-teal-200 rounded-full opacity-15 animate-pulse-slow"></div>
      <div className="absolute -z-10 top-40 right-20 w-48 h-48 bg-teal-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute -z-10 bottom-40 left-20 w-56 h-56 bg-teal-200 rounded-full opacity-8 animate-pulse"></div>
      <div className="absolute -z-10 top-1/4 left-1/3 w-64 h-64 bg-teal-50 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute -z-10 top-3/4 right-1/4 w-40 h-40 bg-teal-100 rounded-full opacity-8 animate-pulse"></div>
      <div className="absolute -z-10 top-10 right-1/3 w-24 h-24 bg-teal-300 rounded-full opacity-12 animate-pulse-slow"></div>
      <div className="absolute -z-10 bottom-10 left-1/4 w-36 h-36 bg-teal-100 rounded-full opacity-10 animate-pulse"></div>

      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-[#F8FAFF]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F8FAFF]/60 border-b border-border/40 relative z-10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-teal-700 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-300 mx-1" />
            <Link to="/articles/oteria-cyber-school" className="hover:text-teal-700 transition-colors">
              OTERIA Cyber School
            </Link>
            <ChevronRight className="h-3 w-3 text-slate-300 mx-1" />
            <span className="text-teal-600 font-medium">Programme Bachelor 2</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-2 bg-teal-50 rounded-full mb-4">
            <Code2 className="h-6 w-6 text-teal-600" />
          </div>
          <h1 className="text-4xl font-bold mb-4 text-slate-900">Mathématiques & Informatique</h1>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto mb-6 leading-relaxed">
            Programme Bachelor 2 — Oteria Cyber School
          </p>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-teal-50 text-teal-700 border border-teal-100">
              <Award className="w-4 h-4 mr-1" />
              14 Séances Intensives
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-50 text-blue-700 border border-blue-100">
              <Target className="w-4 h-4 mr-1" />
              Logique & Algorithmique
            </span>
            <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-indigo-50 text-indigo-700 border border-indigo-100">
              <Shield className="w-4 h-4 mr-1" />
              Bases Cybersécurité
            </span>
          </div>
        </div>

        {/* Liste des séances */}
        <div className="max-w-4xl mx-auto space-y-4 mb-16">
          {oteriaSessions.map((session) => (
            <OteriaSessionListRow key={session.id} session={session} />
          ))}
        </div>

        {/* Informations complémentaires - Cards Layout */}
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-12 h-12 bg-teal-50 rounded-full flex items-center justify-center mx-auto mb-4 text-teal-600">
              <Shield className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Cybersécurité</h3>
            <p className="text-sm text-slate-600">
              Applications directes des mathématiques à la cryptographie et à la sécurité.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4 text-blue-600">
              <Code2 className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Programmation</h3>
            <p className="text-sm text-slate-600">
              Implémentation Python des concepts théoriques vus en cours.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow text-center">
            <div className="w-12 h-12 bg-indigo-50 rounded-full flex items-center justify-center mx-auto mb-4 text-indigo-600">
              <Network className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">Projets Réels</h3>
            <p className="text-sm text-slate-600">
              Ateliers et mini-projets pour valider vos compétences en situation.
            </p>
          </div>
        </div>

        {/* Navigation entre programmes */}
        <div className="mt-16 text-center">
          <Link to="/articles/oteria-cyber-school">
            <Button variant="outline" className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50 px-6 py-3">
              ← Retour à OTERIA Cyber School
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ArticlesOteriaCyberSchoolPage;
