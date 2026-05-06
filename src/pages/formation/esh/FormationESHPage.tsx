import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import {
  BookOpen,
  MessageSquare,
  Target,
  TrendingUp,
  Home,
  ChevronRight,
  ArrowRight,
} from 'lucide-react';

type Module = {
  index: string;
  title: string;
  slug: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  features: string[];
  cta: string;
};

const modules: Module[] = [
  {
    index: '01',
    title: 'Première année',
    slug: 'premiere-annee',
    description:
      "Fondamentaux de l'économie et des sciences sociales. Construis les bases solides nécessaires pour aborder la deuxième année avec sérénité.",
    icon: BookOpen,
    features: ['Microéconomie', 'Sociologie', 'Concepts de base'],
    cta: 'Accéder à la première année',
  },
  {
    index: '02',
    title: 'Deuxième année',
    slug: 'deuxieme-annee',
    description:
      'Approfondissement et analyse des mécanismes économiques. Maîtrise les théories et les enjeux contemporains pour les concours.',
    icon: TrendingUp,
    features: ['Macroéconomie', 'Histoire économique', 'Analyse critique'],
    cta: 'Accéder à la deuxième année',
  },
  {
    index: '03',
    title: 'Ressources',
    slug: 'ressources',
    description:
      "Application pratique des concepts économiques et sociaux. Études de cas concrètes et problématiques d'actualité.",
    icon: MessageSquare,
    features: ["Cas d'entreprises", 'Études de marché', 'Problématiques actuelles'],
    cta: 'Accéder aux ressources',
  },
  {
    index: '04',
    title: 'Méthodologie',
    slug: 'methodologie',
    description:
      "Techniques et stratégies pour réussir les épreuves ESH. Analyse de documents, raisonnement, préparation aux colles.",
    icon: Target,
    features: ['Analyse de documents', 'Raisonnement économique', 'Préparation aux colles'],
    cta: 'Accéder à la méthodologie',
  },
];

const FormationESHPage = () => {
  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans text-pr-gray-dark">
      {/* Sticky Breadcrumb avec trait orange signature */}
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-pr-gray-light/60">
        <div className="h-[2px] w-full bg-pr-orange" />
        <div className="container mx-auto px-4 py-2.5">
          <div className="flex items-center text-[11px] uppercase tracking-[0.08em] text-pr-gray-mid">
            <Link
              to="/"
              className="flex items-center gap-1.5 hover:text-pr-orange-dark transition-colors"
            >
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-pr-gray-light mx-1.5" />
            <Link
              to="/formations"
              className="hover:text-pr-orange-dark transition-colors"
            >
              Formations
            </Link>
            <ChevronRight className="h-3 w-3 text-pr-gray-light mx-1.5" />
            <span className="text-pr-black font-semibold normal-case tracking-normal">
              Formation <span className="text-pr-orange">ESH</span> ECG
            </span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-16 pb-20">
        {/* Hero */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-6 px-3 py-1 rounded-full bg-pr-orange-pale border border-pr-orange-soft/60">
            <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-orange-dark">
              Formation · Prépa ECG
            </span>
          </div>

          <h1 className="font-dm-serif text-5xl md:text-6xl text-pr-black tracking-tight leading-[1.05] mb-5">
            Formation <span className="text-pr-orange">ESH</span> ECG
          </h1>

          <div className="flex justify-center mb-6">
            <div className="h-[2px] w-16 bg-pr-orange" />
          </div>

          <p className="text-lg text-pr-gray-dark max-w-2xl mx-auto leading-relaxed">
            Maîtrise l'économie, sociologie et histoire du monde contemporain.
            Quatre modules progressifs pour aborder les épreuves ESH avec méthode et confiance.
          </p>
        </div>

        {/* Modules ESH */}
        <div className="max-w-4xl mx-auto space-y-5">
          {modules.map((module) => {
            const Icon = module.icon;
            return (
              <Link
                key={module.slug}
                to={`/formation/esh/${module.slug}`}
                className="block group"
              >
                <div className="relative bg-white rounded-2xl p-7 md:p-9 shadow-sm hover:shadow-lg transition-all duration-300 border border-pr-gray-light hover:border-pr-orange-soft overflow-hidden">
                  {/* Trait orange signature à gauche au hover */}
                  <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-pr-orange opacity-0 group-hover:opacity-100 transition-opacity" />

                  <div className="flex flex-col md:flex-row gap-6 md:gap-8 items-start">
                    {/* Numéro décoratif */}
                    <div className="flex-shrink-0">
                      <div className="w-20 h-20 rounded-2xl flex items-center justify-center bg-pr-orange-pale border border-pr-orange-soft/40 group-hover:scale-105 transition-transform duration-300">
                        <span className="font-dm-serif text-4xl text-pr-orange leading-none">
                          {module.index}
                        </span>
                      </div>
                    </div>

                    {/* Contenu */}
                    <div className="flex-1 w-full">
                      <div className="flex items-center gap-3 mb-3">
                        <span className="inline-flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-orange-dark bg-pr-orange-pale px-2 py-0.5 rounded">
                          <Icon className="h-3 w-3" />
                          Module {module.index}
                        </span>
                      </div>

                      <h3 className="font-dm-serif text-2xl md:text-3xl text-pr-black leading-tight mb-3 group-hover:text-pr-orange-dark transition-colors">
                        {module.title}
                      </h3>

                      <p className="text-[15px] text-pr-gray-dark leading-[1.65] mb-5">
                        {module.description}
                      </p>

                      <ul className="space-y-2 mb-6 pt-5 border-t border-pr-gray-light">
                        {module.features.map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-2 text-[13px] text-pr-gray-dark"
                          >
                            <span className="text-pr-orange mt-0.5">→</span>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="flex items-center gap-1 text-[12px] font-semibold uppercase tracking-[0.08em] text-pr-orange-dark group-hover:text-pr-orange transition-colors">
                        {module.cta}
                        <ArrowRight className="h-3.5 w-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </div>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA contact */}
        <div className="max-w-3xl mx-auto mt-20 text-center">
          <span className="inline-block text-[11px] font-semibold uppercase tracking-[0.12em] text-pr-orange-dark mb-5">
            Besoin d'un accompagnement ?
          </span>
          <h2 className="font-dm-serif text-3xl sm:text-4xl text-pr-black leading-[1.1] mb-5">
            Discutons de tes <em className="text-pr-orange not-italic">objectifs ESH</em>
          </h2>
          <div className="flex justify-center mb-6">
            <div className="h-[2px] w-16 bg-pr-orange" />
          </div>
          <p className="text-base sm:text-lg text-pr-gray-dark max-w-xl mx-auto leading-[1.7] mb-10">
            Premier cours offert. Diagnostic gratuit de ton niveau et conseils sur la stratégie
            la plus adaptée à ton concours.
          </p>
          <Link to="/contact">
            <Button className="bg-pr-orange hover:bg-pr-orange-dark text-white font-dm-sans font-semibold py-6 px-8 rounded-full">
              Nous contacter <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormationESHPage;
