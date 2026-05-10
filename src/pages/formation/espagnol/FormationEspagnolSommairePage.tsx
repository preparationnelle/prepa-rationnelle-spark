import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, MessageSquare, Wand2, Target } from 'lucide-react';
import { PRFormationLayout } from '@/components/formation/PRFormationLayout';

type Step = {
  number: number;
  title: string;
  subtitle: string;
  cards: { Icon: React.ComponentType<{ className?: string }>; title: string; description: string }[];
};

const steps: Step[] = [
  {
    number: 1,
    title: 'Modules principaux',
    subtitle: 'Les deux piliers fondamentaux de la formation espagnol',
    cards: [
      {
        Icon: BookOpen,
        title: 'Grammaire espagnole',
        description: 'Maîtrise conjugaisons, syntaxe et structures avancées avec 6 fiches détaillées.',
      },
      {
        Icon: MessageSquare,
        title: 'Civilisation hispanique',
        description: 'Explore l’Espagne et l’Amérique latine contemporaines pour les épreuves.',
      },
    ],
  },
  {
    number: 2,
    title: 'Outils IA',
    subtitle: 'Technologies avancées pour accélérer ton apprentissage',
    cards: [
      {
        Icon: MessageSquare,
        title: 'Générateur de paragraphes',
        description: 'Crée des paragraphes argumentatifs de 150 mots basés sur articles de presse.',
      },
      {
        Icon: Wand2,
        title: 'Générateur de thèmes',
        description: 'Entraîne-toi aux thèmes grammaticaux avec correction automatique.',
      },
    ],
  },
  {
    number: 3,
    title: 'Vocabulaire spécialisé',
    subtitle: 'Le lexique essentiel pour les épreuves de concours',
    cards: [
      {
        Icon: MessageSquare,
        title: 'Flashcards interactives',
        description:
          '+70 termes et expressions par thématiques : institutions, élections, partis, législation, administration et relations internationales.',
      },
    ],
  },
  {
    number: 4,
    title: 'Méthodes & ressources',
    subtitle: 'Techniques éprouvées pour réussir tes épreuves',
    cards: [
      {
        Icon: BookOpen,
        title: 'Méthodes essentielles',
        description: 'Version espagnole, thème espagnol et expression écrite.',
      },
      {
        Icon: Target,
        title: 'Préparation concours',
        description: 'Épreuves écrites, épreuves orales et civilisation hispanique.',
      },
    ],
  },
];

const parcours = [
  { title: 'Commence par la grammaire', description: 'Maîtrise les bases avec les 6 fiches détaillées.' },
  { title: 'Utilise les générateurs IA', description: 'Entraîne-toi avec nos outils de correction automatique.' },
  { title: 'Explore la civilisation', description: 'Découvre l’actualité hispanique pour tes dissertations.' },
  { title: 'Perfectionne-toi', description: 'Utilise méthodes et vocabulaire pour tes révisions finales.' },
];

const FormationEspagnolSommairePage = () => {
  return (
    <PRFormationLayout
      crumbs={[
        { label: 'Accueil', to: '/' },
        { label: 'Toutes les formations', to: '/formations' },
        { label: 'Espagnol', to: '/formation/espagnol' },
        { label: 'Sommaire' },
      ]}
      eyebrow="Espagnol · Sommaire"
      title="Sommaire"
      titleAccent="de la formation"
      subtitle="Guide complet pour naviguer dans la formation Espagnol ECG."
    >
      <div className="flex justify-center mb-12">
        <Link
          to="/formation/espagnol"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-pr-gray-light bg-white hover:border-pr-orange text-pr-black text-sm font-semibold transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Retour à la formation
        </Link>
      </div>

      <div className="space-y-6 mb-20">
        {steps.map((step) => (
          <section
            key={step.number}
            className="relative bg-white border border-pr-gray-light rounded-2xl p-7 sm:p-9"
          >
            <span className="absolute top-0 left-0 right-0 h-[3px] bg-pr-orange rounded-t-2xl" />
            <div className="flex items-start gap-5 mb-6">
              <span className="font-dm-serif text-5xl text-pr-orange leading-none">
                {String(step.number).padStart(2, '0')}
              </span>
              <div className="flex-1 pt-1">
                <h3 className="font-dm-serif text-2xl text-pr-black mb-1 leading-tight">{step.title}</h3>
                <p className="text-sm text-pr-gray-dark/80">{step.subtitle}</p>
              </div>
            </div>
            <div className={`grid gap-4 ${step.cards.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
              {step.cards.map(({ Icon, title, description }) => (
                <div
                  key={title}
                  className="bg-pr-gray-bg border border-pr-gray-light rounded-xl p-5 flex items-start gap-3"
                >
                  <div className="w-10 h-10 rounded-lg bg-pr-orange-pale flex items-center justify-center flex-shrink-0">
                    <Icon className="h-5 w-5 text-pr-orange-dark" />
                  </div>
                  <div>
                    <h4 className="font-dm-serif text-lg text-pr-black mb-1">{title}</h4>
                    <p className="text-sm text-pr-gray-dark/80 leading-relaxed">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>

      <section className="rounded-2xl border border-pr-gray-light bg-white p-8 sm:p-10">
        <div className="mb-6">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-pr-orange-dark mb-2">
            Parcours recommandé
          </p>
          <h2 className="font-dm-serif text-2xl sm:text-3xl text-pr-black">
            Suis ce guide étape par étape pour optimiser ton apprentissage
          </h2>
        </div>
        <ol className="space-y-4">
          {parcours.map((p, i) => (
            <li key={p.title} className="flex items-start gap-4">
              <span className="w-9 h-9 flex-shrink-0 rounded-full bg-pr-orange-pale text-pr-orange-dark font-dm-serif text-lg flex items-center justify-center">
                {i + 1}
              </span>
              <div>
                <p className="font-semibold text-pr-black">{p.title}</p>
                <p className="text-sm text-pr-gray-dark/80">{p.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </section>
    </PRFormationLayout>
  );
};

export default FormationEspagnolSommairePage;
