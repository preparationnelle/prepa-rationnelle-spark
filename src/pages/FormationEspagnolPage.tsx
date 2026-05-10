import React from 'react';
import { BookOpen, MessageSquare, Target, Languages } from 'lucide-react';
import { PRFormationLayout } from '@/components/formation/PRFormationLayout';
import { PRHubCard } from '@/components/formation/PRHubCard';

const modules = [
  {
    to: '/formation/espagnol/vocabulaire',
    Icon: Languages,
    title: 'Vocabulaire',
    description: 'Lexique thématique et expressions idiomatiques.',
    bullets: ['Économie et affaires', 'Culture et société', 'Expressions courantes'],
    cta: 'Accéder au vocabulaire',
  },
  {
    to: '/formation/espagnol/grammaire',
    Icon: BookOpen,
    title: 'Grammaire',
    description: 'Conjugaisons, syntaxe et structures.',
    bullets: ['Temps verbaux', 'Syntaxe idiomatique', 'Thèmes grammaticaux'],
    cta: 'Accéder à la grammaire',
  },
  {
    to: '/formation/espagnol/civilisation',
    Icon: MessageSquare,
    title: 'Civilisation',
    description: 'Enjeux contemporains d’Espagne et d’Amérique latine.',
    bullets: ['Politique et démocratie', 'Enjeux sociaux et égalité', 'Migrations et environnement'],
    cta: 'Accéder à la civilisation',
  },
  {
    to: '/formation/espagnol/methodologie',
    Icon: Target,
    title: 'Méthodologie',
    description: 'Techniques et stratégies pour réussir les épreuves.',
    bullets: ['Épreuves écrites', 'Épreuves orales (colles)', 'Gestion du temps et stress'],
    cta: 'Accéder à la méthodologie',
  },
];

const FormationEspagnolPage = () => {
  return (
    <PRFormationLayout
      crumbs={[
        { label: 'Accueil', to: '/' },
        { label: 'Toutes les formations', to: '/formations' },
        { label: 'Espagnol ECG' },
      ]}
      eyebrow="Prépa Rationnelle · Formation"
      title="Espagnol"
      subtitle="Une formation complète pour exceller en espagnol aux concours des Grandes Écoles de Commerce — vocabulaire, grammaire, civilisation et méthodologie réunis dans un parcours structuré."
      tags={[
        { label: 'Niveau prépa' },
        { label: 'Concours BCE & Ecricome' },
        { label: 'ECG 1 & 2', highlight: true },
      ]}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {modules.map((m, idx) => (
          <PRHubCard key={m.to} number={idx + 1} {...m} />
        ))}
      </div>
    </PRFormationLayout>
  );
};

export default FormationEspagnolPage;
