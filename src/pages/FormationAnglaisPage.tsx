import React from 'react';
import { BookOpen, Globe, PenTool, Languages } from 'lucide-react';
import { PRFormationLayout } from '@/components/formation/PRFormationLayout';
import { PRHubCard } from '@/components/formation/PRHubCard';

const modules = [
  {
    to: '/formation/anglais/vocabulaire',
    Icon: BookOpen,
    title: 'Vocabulaire',
    description: 'Maîtrisez le lexique essentiel pour vos épreuves de concours.',
    bullets: ['1000+ termes essentiels', 'Flashcards interactives', 'Système de révision'],
  },
  {
    to: '/formation/anglais/grammaire',
    Icon: Languages,
    title: 'Grammaire',
    description: 'Maîtrisez les règles essentielles de grammaire anglaise.',
    bullets: ['Temps verbaux complexes', 'Structures syntaxiques', 'Style et expression'],
  },
  {
    to: '/formation/anglais/civilisation',
    Icon: Globe,
    title: 'Civilisation',
    description: 'Enjeux contemporains du monde anglophone.',
    bullets: ['Politique et société', 'Économie et technologie', 'Culture et environnement'],
  },
  {
    to: '/formation/anglais/methodologie-complete',
    Icon: PenTool,
    title: 'Méthodologie',
    description: 'Méthode complète en 7 étapes pour réussir les épreuves.',
    bullets: ['Traduction et grammaire', 'Essais et synthèses', 'Préparation aux colles'],
  },
];

const FormationAnglaisPage = () => {
  return (
    <PRFormationLayout
      crumbs={[
        { label: 'Accueil', to: '/' },
        { label: 'Formations', to: '/formations' },
        { label: 'Anglais ECG' },
      ]}
      eyebrow="Prépa Rationnelle · Formation"
      title="Anglais"
      subtitle="Formation complète pour maîtriser l’anglais aux concours des Grandes Écoles de Commerce."
      tags={[
        { label: 'Niveau prépa' },
        { label: 'Vocabulaire & méthode' },
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

export default FormationAnglaisPage;
