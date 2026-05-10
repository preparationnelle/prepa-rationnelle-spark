import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Calculator, TrendingUp, BarChart3, Home, ChevronRight, ArrowRight } from 'lucide-react';
import PythonNavigationTabs from '@/components/formation/PythonNavigationTabs';
import { useProgress } from '@/context/ProgressContext';

const PythonExercicesPage: React.FC = () => {
  const { trackPageVisit } = useProgress();

  useEffect(() => {
    trackPageVisit('python-exercices');
  }, [trackPageVisit]);

  const exerciseModules = [
    {
      id: 0,
      title: 'Module 0 — Fondamentaux',
      description: 'Variables, types de données, opérateurs et structures de contrôle.',
      icon: BookOpen,
      link: '/formation/python-fondamentaux-exercices',
      topics: [
        'Variables et types de données',
        'Opérateurs arithmétiques et logiques',
        'Structures conditionnelles (if, elif, else)',
        'Boucles (for, while)',
        'Fonctions de base',
      ],
    },
    {
      id: 1,
      title: 'Module 1 — Matrices',
      description: 'Manipulation des matrices avec NumPy : création, indexation et opérations.',
      icon: Calculator,
      link: '/formation/python-matrices-exercices',
      topics: [
        'Création et manipulation de matrices',
        'Indexation et slicing',
        'Opérations matricielles',
        'Fonctions NumPy essentielles',
        'Applications pratiques',
      ],
    },
    {
      id: 2,
      title: 'Module 2 — Analyse Numérique',
      description: 'Méthodes numériques : suites, approximation et visualisation.',
      icon: TrendingUp,
      link: '/formation/python-analyse-exercices',
      topics: [
        'Suites et convergence',
        'Méthode de Newton',
        'Intégration numérique',
        'Visualisation avec Matplotlib',
        'Statistiques descriptives',
      ],
    },
    {
      id: 3,
      title: 'Module 3 — Probabilités',
      description: 'Probabilités et statistiques : distributions, tests et simulations Monte-Carlo.',
      icon: BarChart3,
      link: '/formation/python-probabilites-exercices',
      topics: [
        'Distributions de probabilité',
        'Échantillonnage et simulation',
        'Tests statistiques',
        'Intervalles de confiance',
        'Applications ECG',
      ],
    },
  ];

  return (
    <div className="carnet-paper min-h-screen">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-40 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute flex-wrap">
            <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
              <Home className="h-3.5 w-3.5" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <Link to="/formations" className="hover:text-carnet-red transition-colors">
              Formations
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <Link to="/formation" className="hover:text-carnet-red transition-colors">
              Python ECG
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <span className="carnet-eyebrow text-[11px]">Exercices</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12 max-w-4xl">
        {/* Header */}
        <div className="mb-10">
          <div className="carnet-eyebrow mb-4">Python ECG · Exercices</div>
          <h1 className="font-lora text-[36px] sm:text-[44px] text-carnet-ink leading-tight mb-4">
            Exercices <em className="italic text-carnet-red">Python</em>
          </h1>
          <hr className="w-10 h-0.5 bg-carnet-ink border-0 mb-5" />
          <p className="font-instrument text-[16px] text-carnet-ink-soft leading-relaxed max-w-xl">
            Renforcez vos compétences Python avec nos exercices pratiques par module.
          </p>
        </div>

        {/* Navigation Tabs */}
        <PythonNavigationTabs className="mb-10" />

        {/* Exercise Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
          {exerciseModules.map((module) => {
            const IconComponent = module.icon;
            return (
              <Link key={module.id} to={module.link} className="block group">
                <div className="carnet-card p-6 flex flex-col h-full hover:shadow-[0_12px_32px_rgba(78,55,30,0.10)] transition-shadow">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="flex-shrink-0 flex flex-col items-center w-10">
                      <span className="carnet-hand text-[28px] text-carnet-red leading-none font-semibold">
                        {String(module.id).padStart(2, '0')}
                      </span>
                      <hr className="w-5 h-0.5 bg-carnet-ink border-0 mt-1" />
                    </div>
                    <div className="w-10 h-10 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center">
                      <IconComponent className="h-4 w-4 text-carnet-red" />
                    </div>
                    <h3 className="font-lora text-[17px] text-carnet-ink group-hover:text-carnet-red transition-colors leading-tight">
                      {module.title}
                    </h3>
                  </div>

                  <p className="font-instrument text-[13px] text-carnet-ink-soft leading-[1.55] mb-4">
                    {module.description}
                  </p>

                  <div className="mb-5">
                    <p className="carnet-eyebrow text-[10px] mb-2">Au programme</p>
                    <ul className="space-y-1">
                      {module.topics.map((topic, index) => (
                        <li key={index} className="font-instrument text-[12px] text-carnet-ink-soft flex items-start gap-2">
                          <span className="text-carnet-red mt-0.5 flex-shrink-0">→</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-auto">
                    <span className="inline-flex items-center gap-1.5 font-instrument text-xs font-semibold uppercase tracking-[0.12em] text-carnet-red">
                      Accéder aux exercices
                      <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                    </span>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA */}
        <div className="carnet-card p-7 text-center">
          <h3 className="font-lora text-[22px] text-carnet-ink mb-2">
            Besoin d'aide supplémentaire ?
          </h3>
          <p className="font-instrument text-[14px] text-carnet-ink-soft mb-5">
            Découvrez nos flashcards Python et notre référence complète des commandes essentielles.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/python-flashcards"
              className="inline-flex items-center justify-center gap-1.5 px-5 h-9 rounded-full border border-[rgba(78,55,30,0.18)] text-carnet-ink-soft hover:bg-[rgba(193,68,58,0.06)] hover:text-carnet-red hover:border-carnet-red font-instrument text-xs bg-transparent transition-colors"
            >
              Flashcards Python
            </Link>
            <Link
              to="/python-reference"
              className="inline-flex items-center justify-center gap-1.5 px-5 h-9 rounded-full border border-[rgba(78,55,30,0.18)] text-carnet-ink-soft hover:bg-[rgba(193,68,58,0.06)] hover:text-carnet-red hover:border-carnet-red font-instrument text-xs bg-transparent transition-colors"
            >
              Référence Python
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PythonExercicesPage;
