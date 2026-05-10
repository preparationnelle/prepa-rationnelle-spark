import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Target, Calendar } from 'lucide-react';
import { PRFormationLayout } from '@/components/formation/PRFormationLayout';
import { PRHubCard } from '@/components/formation/PRHubCard';

const modules = [
  {
    to: '/formation/synthese-texte/methode',
    Icon: Target,
    title: 'Méthode de l’épreuve',
    description: 'Technique complète et stratégie pour réussir l’épreuve de synthèse.',
    bullets: ['Structure de synthèse', 'Gestion du temps', 'Critères d’évaluation'],
    cta: 'Accéder à la méthode',
  },
  {
    to: '/formation/synthese-texte/travail-annuel',
    Icon: Calendar,
    title: 'Travail annuel',
    description: 'Organisation complète du travail sur toute l’année de prépa.',
    bullets: ['Planning annuel', 'Préparation progressive', 'Révision et entraînement'],
    cta: 'Accéder au travail annuel',
  },
  {
    to: '/formation/synthese-texte/ressources',
    Icon: BookOpen,
    title: 'Ressources & exercices',
    description: 'Outils, annales et exercices pour s’entraîner efficacement.',
    bullets: ['Annales corrigées', 'Exercices pratiques', 'Grilles d’évaluation'],
    cta: 'Accéder aux ressources',
  },
];

const FormationSyntheseTextePage = () => {
  return (
    <PRFormationLayout
      crumbs={[
        { label: 'Accueil', to: '/' },
        { label: 'Toutes les formations', to: '/formations' },
        { label: 'Synthèse de texte ECG' },
      ]}
      eyebrow="Prépa Rationnelle · Formation"
      title="Synthèse"
      titleAccent="de texte"
      subtitle="Méthodologie complète pour maîtriser l’épreuve de synthèse aux concours des Grandes Écoles de Commerce."
      tags={[
        { label: 'Niveau prépa' },
        { label: 'Méthodologie 4h' },
        { label: 'Annales corrigées', highlight: true },
      ]}
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {modules.map((m, idx) => (
          <PRHubCard key={m.to} number={idx + 1} {...m} />
        ))}
      </div>

      <div className="text-center">
        <Link
          to="/formation/synthese-texte/overview"
          className="inline-flex items-center justify-center px-6 py-3 rounded-full border border-pr-gray-light bg-white hover:border-pr-orange text-pr-black font-semibold text-sm transition-colors"
        >
          Voir le guide complet de l’épreuve
        </Link>
      </div>
    </PRFormationLayout>
  );
};

export default FormationSyntheseTextePage;
