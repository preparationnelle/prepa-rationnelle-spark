import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, BookOpen, MessageSquare, Wand2, Target, CheckCircle, Languages } from 'lucide-react';
import { PRFormationLayout } from '@/components/formation/PRFormationLayout';
import { PRHubCard } from '@/components/formation/PRHubCard';

const modules = [
  {
    to: '/formation/chinois/grammaire',
    Icon: FileText,
    title: 'Grammaire',
    description: 'Maîtrisez la grammaire chinoise avec des exercices interactifs et des explications détaillées.',
    cta: 'Explorer la grammaire',
  },
  {
    to: '/formation/chinois/civilisation',
    Icon: BookOpen,
    title: 'Civilisation',
    description: 'Découvrez la civilisation et la culture chinoises à travers l’histoire et l’actualité.',
    cta: 'Explorer la civilisation',
  },
  {
    to: '/formation/chinois/vocabulaire',
    Icon: Languages,
    title: 'Vocabulaire',
    description: 'Enrichissez votre vocabulaire chinois avec des flashcards et des exercices thématiques.',
    cta: 'Explorer le vocabulaire',
  },
];

const generatorTools = [
  {
    Icon: MessageSquare,
    title: 'Générateur de paragraphes',
    description: 'Créez des paragraphes argumentatifs en chinois basés sur des articles de presse.',
  },
  {
    Icon: Wand2,
    title: 'Générateur de thèmes',
    description: 'Entraînez-vous aux thèmes grammaticaux avec correction automatique.',
  },
];

const sesameSteps = [
  { Icon: FileText, title: 'QCU/QCM', description: 'Entraînement aux questions à choix multiple.' },
  { Icon: BookOpen, title: 'Analyse documentaire', description: 'Méthodologie pour les épreuves complexes.' },
  { Icon: Target, title: 'Réussite garantie', description: 'Préparation optimale pour le concours.' },
];

const FormationChinoisSommairePage = () => {
  return (
    <PRFormationLayout
      crumbs={[
        { label: 'Accueil', to: '/' },
        { label: 'Toutes les formations', to: '/formations' },
        { label: 'Chinois' },
      ]}
      eyebrow="Prépa Rationnelle · Formation"
      title="Chinois"
      subtitle="Préparation complète au concours SESAME — grammaire, civilisation, vocabulaire et outils de génération."
      tags={[
        { label: 'Concours SESAME' },
        { label: 'Grammaire & vocabulaire' },
        { label: 'Outils IA', highlight: true },
      ]}
    >
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {modules.map((m, idx) => (
          <PRHubCard key={m.to} number={idx + 1} {...m} />
        ))}
      </section>

      <section className="mb-20">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-[2px] w-6 bg-pr-black" />
          <h2 className="font-dm-serif text-2xl sm:text-3xl text-pr-black">Outils de génération</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {generatorTools.map(({ Icon, title, description }) => (
            <div
              key={title}
              className="flex items-start gap-4 bg-white border border-pr-gray-light rounded-2xl p-6"
            >
              <div className="w-10 h-10 rounded-lg bg-pr-gray-bg flex items-center justify-center flex-shrink-0">
                <Icon className="h-5 w-5 text-pr-black" />
              </div>
              <div className="flex-1">
                <h3 className="font-dm-serif text-xl text-pr-black mb-1">{title}</h3>
                <p className="text-sm text-pr-gray-dark/80 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="rounded-2xl border border-pr-gray-light bg-white p-8 sm:p-12">
        <div className="text-center mb-10 max-w-2xl mx-auto">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-pr-black mb-3">
            <CheckCircle className="inline h-3.5 w-3.5 mr-1 -mt-0.5" />
            Préparation concours
          </p>
          <h2 className="font-dm-serif text-3xl sm:text-4xl text-pr-black mb-3">SESAME — Chinois</h2>
          <div className="w-12 h-[3px] bg-pr-black mx-auto mb-5" />
          <p className="text-base text-pr-gray-dark/80">
            Préparez-vous efficacement aux épreuves de chinois du concours SESAME avec notre programme complet.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {sesameSteps.map(({ Icon, title, description }) => (
            <div key={title} className="text-center">
              <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-pr-gray-bg flex items-center justify-center">
                <Icon className="h-6 w-6 text-pr-black" />
              </div>
              <h3 className="font-dm-serif text-lg text-pr-black mb-1">{title}</h3>
              <p className="text-sm text-pr-gray-dark/80">{description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link
            to="/formations"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-pr-gray-light bg-white hover:border-pr-black text-pr-black font-semibold text-sm transition-colors"
          >
            Toutes les formations
          </Link>
        </div>
      </section>
    </PRFormationLayout>
  );
};

export default FormationChinoisSommairePage;
