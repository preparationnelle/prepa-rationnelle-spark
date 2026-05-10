import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, MessageSquare, Target, TrendingUp, ArrowRight } from 'lucide-react';
import { PRFormationLayout } from '@/components/formation/PRFormationLayout';
import { PRHubCard } from '@/components/formation/PRHubCard';

const modules = [
  {
    to: '/formation/esh/premiere-annee',
    Icon: BookOpen,
    title: 'Première année',
    description:
      'Fondamentaux de l’économie et des sciences sociales. Construis les bases solides nécessaires pour aborder la deuxième année avec sérénité.',
    bullets: ['Microéconomie', 'Sociologie', 'Concepts de base'],
    cta: 'Accéder à la première année',
  },
  {
    to: '/formation/esh/deuxieme-annee',
    Icon: TrendingUp,
    title: 'Deuxième année',
    description:
      'Approfondissement et analyse des mécanismes économiques. Maîtrise les théories et les enjeux contemporains pour les concours.',
    bullets: ['Macroéconomie', 'Histoire économique', 'Analyse critique'],
    cta: 'Accéder à la deuxième année',
  },
  {
    to: '/formation/esh/ressources',
    Icon: MessageSquare,
    title: 'Ressources',
    description:
      'Application pratique des concepts économiques et sociaux. Études de cas concrètes et problématiques d’actualité.',
    bullets: ['Cas d’entreprises', 'Études de marché', 'Problématiques actuelles'],
    cta: 'Accéder aux ressources',
  },
  {
    to: '/formation/esh/methodologie',
    Icon: Target,
    title: 'Méthodologie',
    description:
      'Techniques et stratégies pour réussir les épreuves ESH. Analyse de documents, raisonnement, préparation aux colles.',
    bullets: ['Analyse de documents', 'Raisonnement économique', 'Préparation aux colles'],
    cta: 'Accéder à la méthodologie',
  },
];

const FormationESHPage = () => {
  return (
    <PRFormationLayout
      crumbs={[
        { label: 'Accueil', to: '/' },
        { label: 'Formations', to: '/formations' },
        { label: 'ESH ECG' },
      ]}
      eyebrow="Prépa Rationnelle · Formation"
      title="ESH"
      titleAccent="ECG"
      subtitle="Maîtrise l’économie, sociologie et histoire du monde contemporain. Quatre modules progressifs pour aborder les épreuves ESH avec méthode et confiance."
      tags={[
        { label: 'Prépa ECG' },
        { label: '4 modules progressifs' },
        { label: 'Méthodologie + colles', highlight: true },
      ]}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-20">
        {modules.map((m, idx) => (
          <PRHubCard key={m.to} number={idx + 1} {...m} />
        ))}
      </div>

      <section className="rounded-2xl border border-pr-gray-light bg-white p-8 sm:p-12 text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-pr-orange-dark mb-3">
          Besoin d’un accompagnement ?
        </p>
        <h2 className="font-dm-serif text-3xl sm:text-4xl text-pr-black mb-3">
          Discutons de tes <span className="text-pr-orange">objectifs ESH</span>
        </h2>
        <div className="w-12 h-[3px] bg-pr-orange mx-auto mb-5" />
        <p className="text-base text-pr-gray-dark/80 max-w-xl mx-auto mb-8">
          Premier cours offert. Diagnostic gratuit de ton niveau et conseils sur la stratégie la plus adaptée à ton concours.
        </p>
        <Link
          to="/contact"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-pr-orange hover:bg-pr-orange-dark text-white font-semibold text-sm transition-all duration-300 hover:-translate-y-0.5 shadow-[0_2px_8px_rgba(244,132,95,0.25)]"
        >
          Nous contacter
          <ArrowRight className="h-4 w-4" />
        </Link>
      </section>
    </PRFormationLayout>
  );
};

export default FormationESHPage;
