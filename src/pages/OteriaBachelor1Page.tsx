import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ChevronRight, Award, Code2, CodeIcon, Database, Cpu, Shield, Zap, Binary, Network, Lock, BarChart3, Target, Brain, ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { BookOpen, Play, Target as TargetIcon, Brain as BrainIcon } from 'lucide-react';

// Données des séances Bachelor 2
const bachelor1Sessions = [
  {
    id: 1,
    title: "Logique fondamentale & booléens en Python",
    content: "Tables de vérité, connecteurs (¬ ∧ ∨ ⇒), Quantificateurs ∀ / ∃ & rôle en preuve, Traduction : not, and, or ; booléens True/False",
    icon: Binary,
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
    hasCourse: false,
    hasExercises: false,
    hasQuiz: false,
    hasFlashcards: false,
    hasMiniProjet: true
  },
  {
    id: 14,
    title: "Évaluation Finale - QCM Complet",
    content: "Évaluation finale du programme Bachelor 2 : QCM complet sur logique, Python, algorithmes et structures de données. 50 questions couvrant tous les chapitres du programme.",
    icon: TargetIcon,
    hasCourse: false,
    hasExercises: false,
    hasQuiz: true,
    hasFlashcards: false
  }
];

const primaryButtonClass = "w-full bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold rounded-full h-10 px-4 text-xs border-0";
const outlineButtonClass = "w-full border-[rgba(78,55,30,0.18)] text-carnet-ink-soft hover:bg-[rgba(193,68,58,0.06)] hover:text-carnet-red hover:border-carnet-red font-instrument rounded-full h-10 px-4 text-xs bg-transparent";

const SessionCard = ({ session, idx }: { session: any; idx: number }) => {
  const navigate = useNavigate();
  const tilt = idx % 4 === 1 ? 'carnet-tilt-r' : idx % 4 === 3 ? 'carnet-tilt-l' : '';

  // Determine main link for card click navigation
  const mainHref = (() => {
    if (session.id === 13) return '/formation/oteria/mini-projet';
    if (session.id === 14) return '/formation/oteria/evaluation-finale';
    if (session.id === 1) return '/formation/oteria/logique-fondamentale-cours';
    if (session.id === 2) return '/formation/oteria/python-bases-cours';
    if (session.id === 3) return '/formation/oteria/recurrence-recursivite-cours';
    if (session.id === 4) return '/formation/oteria/suites-numeriques-cours';
    if (session.id === 5) return '/formation/oteria/fonctions-variable-reelle-cours';
    if (session.id === 6) return '/formation/oteria/polynomes-approximation-cours';
    if (session.id === 7) return '/formation/oteria/denombrement-paradoxes-cours';
    if (session.id === 8) return '/formation/oteria/probabilites-introduction-cours';
    if (session.id === 9) return '/formation/oteria/variables-aleatoires-cours';
    if (session.id === 10) return '/formation/oteria/integrales-monte-carlo-cours';
    if (session.id === 11) return '/formation/oteria/matrices-markov-cours';
    if (session.id === 12) return '/formation/oteria/matrices-stochastiques-cours';
    return undefined;
  })();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: Math.min(idx * 0.04, 0.3) }}
      className={`${tilt} h-full`}
    >
      <div
        onClick={() => mainHref && navigate(mainHref)}
        className="carnet-card group cursor-pointer p-6 h-full flex flex-col hover:shadow-[0_12px_32px_rgba(78,55,30,0.10)] transition-shadow"
      >
        {/* Header avec numéro et icône */}
        <div className="flex items-start gap-4 mb-4">
          <div className="flex-shrink-0 flex flex-col items-center">
            <span className="carnet-hand text-[36px] text-carnet-red leading-none font-semibold">
              {String(session.id).padStart(2, '0')}
            </span>
            <hr className="w-7 h-0.5 bg-carnet-ink border-0 mt-1" />
          </div>
          <div className="w-11 h-11 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
            <session.icon className="h-5 w-5 text-carnet-red" />
          </div>
        </div>

        {/* Titre & description */}
        <div className="mb-5 flex-1">
          <div className="carnet-eyebrow text-[11px] mb-1.5">Séance {session.id}</div>
          <h3 className="font-lora text-[18px] sm:text-[19px] leading-[1.3] text-carnet-ink mb-2 group-hover:text-carnet-red transition-colors">
            {session.title}
          </h3>
          <p className="font-instrument text-[14px] text-carnet-ink-soft leading-[1.55]">
            {session.content}
          </p>
        </div>

        {/* Actions */}
        <div className="space-y-2 mt-auto" onClick={(e) => e.stopPropagation()}>
          {session.hasCourse && (
            session.id === 1 ? (
              <Link to="/formation/oteria/logique-fondamentale-cours" className="block">
                <Button className={primaryButtonClass}>
                  <BookOpen className="mr-2 h-3.5 w-3.5" />
                  Cours
                </Button>
              </Link>
            ) : session.id === 2 ? (
              <Link to="/formation/oteria/python-bases-cours" className="block">
                <Button className={primaryButtonClass}>
                  <BookOpen className="mr-2 h-3.5 w-3.5" />
                  Cours
                </Button>
              </Link>
            ) : session.id === 3 ? (
              <Link to="/formation/oteria/recurrence-recursivite-cours" className="block">
                <Button className={primaryButtonClass}>
                  <BookOpen className="mr-2 h-3.5 w-3.5" />
                  Cours
                </Button>
              </Link>
            ) : session.id === 4 ? (
              <Link to="/formation/oteria/suites-numeriques-cours" className="block">
                <Button className={primaryButtonClass}>
                  <BookOpen className="mr-2 h-3.5 w-3.5" />
                  Cours
                </Button>
              </Link>
            ) : session.id === 5 ? (
              <Link to="/formation/oteria/fonctions-variable-reelle-cours" className="block">
                <Button className={primaryButtonClass}>
                  <BookOpen className="mr-2 h-3.5 w-3.5" />
                  Cours
                </Button>
              </Link>
            ) : session.id === 6 ? (
              <Link to="/formation/oteria/polynomes-approximation-cours" className="block">
                <Button className={primaryButtonClass}>
                  <BookOpen className="mr-2 h-3.5 w-3.5" />
                  Cours
                </Button>
              </Link>
            ) : session.id === 7 ? (
              <Link to="/formation/oteria/denombrement-paradoxes-cours" className="block">
                <Button className={primaryButtonClass}>
                  <BookOpen className="mr-2 h-3.5 w-3.5" />
                  Cours
                </Button>
              </Link>
            ) : session.id === 8 ? (
              <Link to="/formation/oteria/probabilites-introduction-cours" className="block">
                <Button className={primaryButtonClass}>
                  <BookOpen className="mr-2 h-3.5 w-3.5" />
                  Cours
                </Button>
              </Link>
            ) : session.id === 9 ? (
              <Link to="/formation/oteria/variables-aleatoires-cours" className="block">
                <Button className={primaryButtonClass}>
                  <BookOpen className="mr-2 h-3.5 w-3.5" />
                  Cours
                </Button>
              </Link>
            ) : session.id === 10 ? (
              <Link to="/formation/oteria/integrales-monte-carlo-cours" className="block">
                <Button className={primaryButtonClass}>
                  <BookOpen className="mr-2 h-3.5 w-3.5" />
                  Cours
                </Button>
              </Link>
            ) : session.id === 11 ? (
              <Link to="/formation/oteria/matrices-markov-cours" className="block">
                <Button className={primaryButtonClass}>
                  <BookOpen className="mr-2 h-3.5 w-3.5" />
                  Cours
                </Button>
              </Link>
            ) : session.id === 12 ? (
              <Link to="/formation/oteria/matrices-stochastiques-cours" className="block">
                <Button className={primaryButtonClass}>
                  <BookOpen className="mr-2 h-3.5 w-3.5" />
                  Cours
                </Button>
              </Link>
            ) : (
              <Button className={primaryButtonClass}>
                <BookOpen className="mr-2 h-3.5 w-3.5" />
                Cours
              </Button>
            )
          )}

          {session.hasExercises && (
            session.id === 1 ? (
              <Link to="/formation/oteria/logique-fondamentale-exercices" className="block">
                <Button variant="outline" className={outlineButtonClass}>
                  <Play className="mr-2 h-3.5 w-3.5" />
                  Exercices
                </Button>
              </Link>
            ) : session.id === 2 ? (
              <Link to="/formation/oteria/python-bases-exercices" className="block">
                <Button variant="outline" className={outlineButtonClass}>
                  <Play className="mr-2 h-3.5 w-3.5" />
                  Exercices
                </Button>
              </Link>
            ) : session.id === 3 ? (
              <Link to="/formation/oteria/recurrence-recursivite-exercices" className="block">
                <Button variant="outline" className={outlineButtonClass}>
                  <Play className="mr-2 h-3.5 w-3.5" />
                  Exercices
                </Button>
              </Link>
            ) : session.id === 4 ? (
              <Link to="/formation/oteria/suites-numeriques-exercices" className="block">
                <Button variant="outline" className={outlineButtonClass}>
                  <Play className="mr-2 h-3.5 w-3.5" />
                  Exercices
                </Button>
              </Link>
            ) : session.id === 5 ? (
              <Link to="/formation/oteria/fonctions-variable-reelle-exercices" className="block">
                <Button variant="outline" className={outlineButtonClass}>
                  <Play className="mr-2 h-3.5 w-3.5" />
                  Exercices
                </Button>
              </Link>
            ) : session.id === 6 ? (
              <Link to="/formation/oteria/polynomes-exercices" className="block">
                <Button variant="outline" className={outlineButtonClass}>
                  <Play className="mr-2 h-3.5 w-3.5" />
                  Exercices
                </Button>
              </Link>
            ) : session.id === 7 ? (
              <Link to="/formation/oteria/denombrement-exercices" className="block">
                <Button variant="outline" className={outlineButtonClass}>
                  <Play className="mr-2 h-3.5 w-3.5" />
                  Exercices
                </Button>
              </Link>
            ) : session.id === 8 ? (
              <Link to="/formation/oteria/probabilites-exercices" className="block">
                <Button variant="outline" className={outlineButtonClass}>
                  <Play className="mr-2 h-3.5 w-3.5" />
                  Exercices
                </Button>
              </Link>
            ) : session.id === 9 ? (
              <Link to="/formation/oteria/variables-aleatoires-exercices" className="block">
                <Button variant="outline" className={outlineButtonClass}>
                  <Play className="mr-2 h-3.5 w-3.5" />
                  Exercices
                </Button>
              </Link>
            ) : session.id === 10 ? (
              <Link to="/formation/oteria/integrales-monte-carlo-exercices" className="block">
                <Button variant="outline" className={outlineButtonClass}>
                  <Play className="mr-2 h-3.5 w-3.5" />
                  Exercices
                </Button>
              </Link>
            ) : session.id === 11 ? (
              <Link to="/formation/oteria/matrices-markov-exercices" className="block">
                <Button variant="outline" className={outlineButtonClass}>
                  <Play className="mr-2 h-3.5 w-3.5" />
                  Exercices
                </Button>
              </Link>
            ) : session.id === 12 ? (
              <Link to="/formation/oteria/matrices-stochastiques-exercices" className="block">
                <Button variant="outline" className={outlineButtonClass}>
                  <Play className="mr-2 h-3.5 w-3.5" />
                  Exercices
                </Button>
              </Link>
            ) : (
              <Button variant="outline" className={outlineButtonClass}>
                <Play className="mr-2 h-3.5 w-3.5" />
                Exercices
              </Button>
            )
          )}

          {session.hasFlashcards && (
            session.id === 1 ? (
              <Link to="/formation/oteria/logique-fondamentale-flashcards" className="block">
                <Button variant="outline" className={outlineButtonClass}>
                  <BrainIcon className="mr-2 h-3.5 w-3.5" />
                  Flashcards
                </Button>
              </Link>
            ) : session.id === 2 ? (
              <Link to="/formation/oteria/python-bases-flashcards" className="block">
                <Button variant="outline" className={outlineButtonClass}>
                  <BrainIcon className="mr-2 h-3.5 w-3.5" />
                  Flashcards
                </Button>
              </Link>
            ) : session.id === 3 ? (
              <Link to="/formation/oteria/recurrence-recursivite-flashcards" className="block">
                <Button variant="outline" className={outlineButtonClass}>
                  <BrainIcon className="mr-2 h-3.5 w-3.5" />
                  Flashcards
                </Button>
              </Link>
            ) : session.id === 4 ? (
              <Link to="/formation/oteria/suites-numeriques-flashcards" className="block">
                <Button variant="outline" className={outlineButtonClass}>
                  <BrainIcon className="mr-2 h-3.5 w-3.5" />
                  Flashcards
                </Button>
              </Link>
            ) : session.id === 5 ? (
              <Link to="/formation/oteria/fonctions-variable-reelle-flashcards" className="block">
                <Button variant="outline" className={outlineButtonClass}>
                  <BrainIcon className="mr-2 h-3.5 w-3.5" />
                  Flashcards
                </Button>
              </Link>
            ) : session.id === 6 ? (
              <Link to="/formation/oteria/polynomes-dichotomie-flashcards" className="block">
                <Button variant="outline" className={outlineButtonClass}>
                  <BrainIcon className="mr-2 h-3.5 w-3.5" />
                  Flashcards
                </Button>
              </Link>
            ) : session.id === 7 ? (
              <Link to="/formation/oteria/denombrement-flashcards" className="block">
                <Button variant="outline" className={outlineButtonClass}>
                  <BrainIcon className="mr-2 h-3.5 w-3.5" />
                  Flashcards
                </Button>
              </Link>
            ) : session.id === 8 ? (
              <Link to="/formation/oteria/probabilites-flashcards" className="block">
                <Button variant="outline" className={outlineButtonClass}>
                  <BrainIcon className="mr-2 h-3.5 w-3.5" />
                  Flashcards
                </Button>
              </Link>
            ) : session.id === 9 ? (
              <Link to="/formation/oteria/variables-aleatoires-flashcards" className="block">
                <Button variant="outline" className={outlineButtonClass}>
                  <BrainIcon className="mr-2 h-3.5 w-3.5" />
                  Flashcards
                </Button>
              </Link>
            ) : session.id === 10 ? (
              <Link to="/formation/oteria/integrales-monte-carlo-flashcards" className="block">
                <Button variant="outline" className={outlineButtonClass}>
                  <BrainIcon className="mr-2 h-3.5 w-3.5" />
                  Flashcards
                </Button>
              </Link>
            ) : session.id === 11 ? (
              <Link to="/formation/oteria/matrices-markov-flashcards" className="block">
                <Button variant="outline" className={outlineButtonClass}>
                  <BrainIcon className="mr-2 h-3.5 w-3.5" />
                  Flashcards
                </Button>
              </Link>
            ) : session.id === 12 ? (
              <Link to="/formation/oteria/matrices-stochastiques-flashcards" className="block">
                <Button variant="outline" className={outlineButtonClass}>
                  <BrainIcon className="mr-2 h-3.5 w-3.5" />
                  Flashcards
                </Button>
              </Link>
            ) : (
              <Button variant="outline" className={outlineButtonClass}>
                <BrainIcon className="mr-2 h-3.5 w-3.5" />
                Flashcards
              </Button>
            )
          )}

          {session.hasQuiz && (
            session.id === 1 ? (
              <Link to="/formation/oteria/logique-fondamentale-qcm" className="block">
                <Button variant="outline" className={outlineButtonClass}>
                  <TargetIcon className="mr-2 h-3.5 w-3.5" />
                  QCM
                </Button>
              </Link>
            ) : session.id === 14 ? (
              <div className="space-y-2">
                <Link to="/formation/oteria/fiche-evaluation-finale" className="block">
                  <Button variant="outline" className={outlineButtonClass}>
                    <BookOpen className="mr-2 h-3.5 w-3.5" />
                    Fiche récapitulative
                  </Button>
                </Link>
                <Link to="/formation/oteria/extraits-sujets-qcm" className="block">
                  <Button variant="outline" className={outlineButtonClass}>
                    <TargetIcon className="mr-2 h-3.5 w-3.5" />
                    Extraits de sujets
                  </Button>
                </Link>
                <Link to="/formation/oteria/evaluation-finale-questions-ouvertes" className="block">
                  <Button variant="outline" className={outlineButtonClass}>
                    <TargetIcon className="mr-2 h-3.5 w-3.5" />
                    Questions ouvertes
                  </Button>
                </Link>
                <Link to="/formation/oteria/evaluation-finale" className="block">
                  <Button className={primaryButtonClass}>
                    <TargetIcon className="mr-2 h-3.5 w-3.5" />
                    Évaluation Finale
                  </Button>
                </Link>
                <Link to="/formation/oteria/python-references" className="block">
                  <Button variant="outline" className={outlineButtonClass}>
                    <CodeIcon className="mr-2 h-3.5 w-3.5" />
                    Références Python
                  </Button>
                </Link>
              </div>
            ) : session.id === 2 ? (
              <Link to="/formation/oteria/python-bases-qcm" className="block">
                <Button variant="outline" className={outlineButtonClass}>
                  <TargetIcon className="mr-2 h-3.5 w-3.5" />
                  QCM
                </Button>
              </Link>
            ) : session.id === 3 ? (
              <Link to="/formation/oteria/recurrence-recursivite-qcm" className="block">
                <Button variant="outline" className={outlineButtonClass}>
                  <TargetIcon className="mr-2 h-3.5 w-3.5" />
                  QCM
                </Button>
              </Link>
            ) : session.id === 4 ? (
              <Link to="/formation/oteria/suites-numeriques-qcm" className="block">
                <Button variant="outline" className={outlineButtonClass}>
                  <TargetIcon className="mr-2 h-3.5 w-3.5" />
                  QCM
                </Button>
              </Link>
            ) : session.id === 5 ? (
              <Link to="/formation/oteria/fonctions-variable-reelle-qcm" className="block">
                <Button variant="outline" className={outlineButtonClass}>
                  <TargetIcon className="mr-2 h-3.5 w-3.5" />
                  QCM
                </Button>
              </Link>
            ) : session.id === 6 ? (
              <Link to="/formation/oteria/polynomes-qcm" className="block">
                <Button variant="outline" className={outlineButtonClass}>
                  <TargetIcon className="mr-2 h-3.5 w-3.5" />
                  QCM
                </Button>
              </Link>
            ) : session.id === 7 ? (
              <Link to="/formation/oteria/denombrement-qcm" className="block">
                <Button variant="outline" className={outlineButtonClass}>
                  <TargetIcon className="mr-2 h-3.5 w-3.5" />
                  QCM
                </Button>
              </Link>
            ) : session.id === 9 ? (
              <Link to="/formation/oteria/variables-aleatoires-qcm" className="block">
                <Button variant="outline" className={outlineButtonClass}>
                  <TargetIcon className="mr-2 h-3.5 w-3.5" />
                  QCM
                </Button>
              </Link>
            ) : session.id === 11 ? (
              <Link to="/formation/oteria/matrices-markov-qcm" className="block">
                <Button variant="outline" className={outlineButtonClass}>
                  <TargetIcon className="mr-2 h-3.5 w-3.5" />
                  QCM
                </Button>
              </Link>
            ) : session.id === 12 ? (
              <Link to="/formation/oteria/matrices-stochastiques-qcm" className="block">
                <Button variant="outline" className={outlineButtonClass}>
                  <TargetIcon className="mr-2 h-3.5 w-3.5" />
                  QCM
                </Button>
              </Link>
            ) : (
              <Button variant="outline" className={outlineButtonClass}>
                <TargetIcon className="mr-2 h-3.5 w-3.5" />
                QCM
              </Button>
            )
          )}

          {session.hasMiniProjet && (
            session.id === 13 ? (
              <div className="space-y-2">
                <Link to="/formation/oteria/mini-projet" className="block">
                  <Button className={primaryButtonClass}>
                    <Code2 className="mr-2 h-3.5 w-3.5" />
                    Mini Projet - Ateliers
                  </Button>
                </Link>
                <Link to="/formation/oteria/mini-projet-deroulement" className="block">
                  <Button variant="outline" className={outlineButtonClass}>
                    <BookOpen className="mr-2 h-3.5 w-3.5" />
                    Déroulement du projet
                  </Button>
                </Link>
              </div>
            ) : (
              <Button variant="outline" className={outlineButtonClass}>
                <Code2 className="mr-2 h-3.5 w-3.5" />
                Mini Projet
              </Button>
            )
          )}
        </div>
      </div>
    </motion.div>
  );
};

const OteriaBachelor1Page = () => {
  return (
    <div className="carnet-paper min-h-screen">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-40 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-3">
          <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute">
            <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
              <Home className="h-3.5 w-3.5" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <Link to="/articles/oteria-cyber-school" className="hover:text-carnet-red transition-colors">
              OTERIA Cyber School
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <span className="carnet-eyebrow text-[11px]">Bachelor 2</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-20 lg:py-24">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[820px]"
          >
            <div className="carnet-eyebrow mb-6">Programme Bachelor 2 · OTERIA Cyber School</div>

            <h1 className="font-lora text-[44px] sm:text-[56px] lg:text-[68px] leading-[1.05] text-carnet-ink tracking-tight mb-6">
              Programme{' '}
              <em className="font-lora italic text-carnet-red">Bachelor 2</em>.
            </h1>

            <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.65] text-carnet-ink-soft max-w-[680px] mb-8">
              <span className="carnet-hl font-lora italic">Mathématiques, logique et algorithmique</span> pour l'informatique. 14 séances intensives pour bâtir des fondations solides.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.25)]">
                <Award className="h-4 w-4 text-carnet-red" />
                <span className="font-instrument text-[13px] font-semibold text-carnet-ink">Niveau Fondamental</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)]">
                <Target className="h-4 w-4 text-carnet-ink-soft" />
                <span className="font-instrument text-[13px] text-carnet-ink-soft">14 séances</span>
              </div>
            </div>

            <div className="carnet-hand text-[24px] mt-6 hidden md:block" style={{ transform: 'rotate(-2deg)' }}>
              ↓ commence par la séance 01 et avance dans l'ordre
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programme Principal — 14 séances */}
      <section className="relative pb-20 lg:pb-24">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-[760px] mb-10"
          >
            <div className="carnet-eyebrow mb-5">Programme Bachelor 2</div>
            <h2 className="font-lora text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.1] text-carnet-ink tracking-tight">
              Mathématiques <em className="font-lora italic text-carnet-red">& informatique</em>.
            </h2>
            <p className="font-instrument text-[15px] lg:text-[17px] leading-[1.6] text-carnet-ink-soft mt-4 max-w-[600px]">
              Mathématiques, logique et algorithmique pour l'informatique — 14 séances intensives.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bachelor1Sessions.map((session, idx) => (
              <SessionCard key={session.id} session={session} idx={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* Informations complémentaires */}
      <section className="relative pb-24 lg:pb-28">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-[760px] mb-10"
          >
            <div className="carnet-eyebrow mb-5">En complément</div>
            <h2 className="font-lora text-[28px] sm:text-[36px] lg:text-[44px] leading-[1.1] text-carnet-ink tracking-tight">
              Pour aller <em className="font-lora italic text-carnet-red">plus loin</em>.
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: Shield,
                title: 'Cybersécurité',
                description: 'Formation spécialisée en sécurité informatique et protection des données.',
              },
              {
                icon: Code2,
                title: 'Programmation',
                description: 'Maîtrise des langages de programmation et algorithmes avancés.',
              },
              {
                icon: Network,
                title: 'Projets Réels',
                description: 'Mise en pratique avec des projets concrets et challenges techniques.',
              },
            ].map((item, idx) => {
              const tilt = idx === 0 ? 'carnet-tilt-l' : idx === 2 ? 'carnet-tilt-r' : '';
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: idx * 0.08 }}
                  className={tilt}
                >
                  <div className="carnet-card p-7 sm:p-8 h-full">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-11 h-11 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
                        <item.icon className="h-5 w-5 text-carnet-red" />
                      </div>
                      <h3 className="font-lora text-[20px] sm:text-[22px] leading-[1.25] text-carnet-ink">
                        {item.title}
                      </h3>
                    </div>
                    <hr className="w-10 h-0.5 bg-carnet-ink border-0 mb-4" />
                    <p className="font-instrument text-[14px] sm:text-[15px] text-carnet-ink-soft leading-[1.6]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Retour */}
          <div className="mt-14 flex items-center gap-4">
            <Link
              to="/articles/oteria-cyber-school"
              className="inline-flex items-center gap-1.5 font-instrument text-[14px] text-carnet-ink-soft hover:text-carnet-red transition-colors"
            >
              <ArrowLeft className="h-3.5 w-3.5" />
              Retour à OTERIA Cyber School
            </Link>
            <span className="text-carnet-ink-mute">·</span>
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 font-instrument text-[14px] text-carnet-ink-soft hover:text-carnet-red transition-colors"
            >
              Accueil
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default OteriaBachelor1Page;
