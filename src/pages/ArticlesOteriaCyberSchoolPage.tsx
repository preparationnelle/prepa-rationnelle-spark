import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ChevronRight, Award, Code2, Database, Cpu, Shield, Zap, Binary, Network, Lock, BarChart3, Target, Brain, BookOpen, ArrowLeft } from 'lucide-react';
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
    qcmLink: "/formation/oteria/matrices-markov-qcm"
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
    flashcardsLink: "/formation/oteria/matrices-stochastiques-flashcards",
    qcmLink: "/formation/oteria/matrices-stochastiques-qcm"
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
            <span className="carnet-eyebrow text-[11px]">Programme Bachelor 2</span>
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
              Mathématiques{' '}
              <em className="font-lora italic text-carnet-red">& Informatique</em>.
            </h1>

            <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.65] text-carnet-ink-soft max-w-[640px] mb-8">
              <span className="carnet-hl font-lora italic">Logique, algorithmique et programmation Python</span> au service de l'informatique et de la cybersécurité. Programme structuré en 14 séances intensives.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.25)]">
                <Award className="h-4 w-4 text-carnet-red" />
                <span className="font-instrument text-[13px] font-semibold text-carnet-ink">14 séances intensives</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)]">
                <Target className="h-4 w-4 text-carnet-ink-soft" />
                <span className="font-instrument text-[13px] text-carnet-ink-soft">Logique & algorithmique</span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)]">
                <Shield className="h-4 w-4 text-carnet-ink-soft" />
                <span className="font-instrument text-[13px] text-carnet-ink-soft">Bases cybersécurité</span>
              </div>
            </div>

            <div className="carnet-hand text-[24px] mt-6 hidden md:block" style={{ transform: 'rotate(-2deg)' }}>
              ↓ commence par la séance 01 et avance dans l'ordre
            </div>
          </motion.div>
        </div>
      </section>

      {/* Liste des séances */}
      <section className="relative pb-24 lg:pb-28">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <div className="space-y-4">
            {oteriaSessions.map((session, idx) => {
              const tilt = idx % 4 === 1 ? 'carnet-tilt-r' : idx % 4 === 3 ? 'carnet-tilt-l' : '';
              return (
                <motion.div
                  key={session.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: Math.min(idx * 0.04, 0.3) }}
                  className={tilt}
                >
                  <OteriaSessionListRow session={session} />
                </motion.div>
              );
            })}
          </div>

          {/* Informations complémentaires */}
          <div className="mt-20">
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
                  description: 'Applications directes des mathématiques à la cryptographie et à la sécurité.',
                },
                {
                  icon: Code2,
                  title: 'Programmation',
                  description: 'Implémentation Python des concepts théoriques vus en cours.',
                },
                {
                  icon: Network,
                  title: 'Projets Réels',
                  description: 'Ateliers et mini-projets pour valider vos compétences en situation.',
                },
              ].map((module, idx) => {
                const tilt = idx === 0 ? 'carnet-tilt-l' : idx === 2 ? 'carnet-tilt-r' : '';
                return (
                  <motion.div
                    key={module.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.08 }}
                    className={tilt}
                  >
                    <div className="carnet-card relative p-7 sm:p-8 h-full">
                      <div className="flex items-center gap-3 mb-4">
                        <div className="w-11 h-11 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
                          <module.icon className="h-5 w-5 text-carnet-red" />
                        </div>
                        <h3 className="font-lora text-[20px] sm:text-[22px] leading-[1.25] text-carnet-ink">
                          {module.title}
                        </h3>
                      </div>
                      <hr className="w-10 h-0.5 bg-carnet-ink border-0 mb-4" />
                      <p className="font-instrument text-[14px] sm:text-[15px] text-carnet-ink-soft leading-[1.6]">
                        {module.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
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

export default ArticlesOteriaCyberSchoolPage;
