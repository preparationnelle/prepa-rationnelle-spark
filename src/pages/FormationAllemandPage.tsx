import React from 'react';
import { BookOpen, Globe, Target, Languages, Award } from 'lucide-react';
import { PRFormationLayout } from '@/components/formation/PRFormationLayout';
import { PRHubCard } from '@/components/formation/PRHubCard';

const modules = [
  {
    to: '/formation/allemand/vocabulaire',
    Icon: Languages,
    title: 'Vocabulaire',
    description: 'Lexique thématique et expressions idiomatiques pour les concours.',
    bullets: ['200+ termes essentiels', 'Vocabulaire thématique', 'Flashcards interactives'],
  },
  {
    to: '/formation/allemand/grammaire',
    Icon: BookOpen,
    title: 'Grammaire',
    description: 'Déclinaisons, conjugaisons et structures avancées.',
    bullets: ['6 fiches de grammaire', 'Exercices pratiques', 'Conjugaisons'],
  },
  {
    to: '/formation/allemand/civilisation',
    Icon: Globe,
    title: 'Civilisation',
    description: 'Politique, société et géopolitique de l’espace germanophone.',
    bullets: ['Modules thématiques', 'Culture allemande', 'Géopolitique européenne'],
  },
  {
    to: '/formation/allemand/epreuves',
    Icon: Target,
    title: 'Méthodologie',
    description: 'Techniques et stratégies pour réussir les épreuves d’allemand.',
    bullets: ['Techniques d’examen', 'Méthodologie complète', 'Exemples pratiques'],
  },
  {
    to: '/formation/allemand/sesame',
    Icon: Award,
    title: 'Exercices',
    description: 'Exercices types du concours pour s’entraîner efficacement.',
    bullets: ['50 questions', 'Traduction & grammaire', 'Explications détaillées'],
  },
];

const FormationAllemandPage = () => {
  return (
    <PRFormationLayout
      crumbs={[
        { label: 'Accueil', to: '/' },
        { label: 'Formations', to: '/formations' },
        { label: 'Allemand ECG' },
      ]}
      eyebrow="Prépa Rationnelle · Formation"
      title="Allemand"
      subtitle="Formation complète pour maîtriser l’allemand aux concours des Grandes Écoles de Commerce."
      tags={[
        { label: 'Niveau prépa' },
        { label: 'Vocabulaire & civilisation' },
        { label: 'ECG 1 & 2', highlight: true },
      ]}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
        {modules.map((m, idx) => (
          <PRHubCard key={m.to} number={idx + 1} {...m} />
        ))}
      </div>
    </PRFormationLayout>
  );
};

export default FormationAllemandPage;
