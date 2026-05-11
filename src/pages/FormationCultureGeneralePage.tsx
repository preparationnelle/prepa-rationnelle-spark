import React from 'react';
import { BookOpen, Layout, Target, Lightbulb, Quote } from 'lucide-react';
import { PRFormationLayout } from '@/components/formation/PRFormationLayout';
import { PRHubCard } from '@/components/formation/PRHubCard';

const modules = [
  {
    to: '/formation/culture-generale/articles',
    Icon: Layout,
    title: 'Articles',
    description: 'Sujets, pièges de libellés, analyses',
  },
  {
    to: '/formation/culture-generale/methodes',
    Icon: Target,
    title: 'Méthodes',
    description: 'Analyser, problématiser, argumenter',
  },
  {
    to: '/formation/culture-generale/references',
    Icon: Lightbulb,
    title: 'Références',
    description: 'Banque de parapersos sur l’humanité, prêts à être mobilisés en dissertation',
  },
  {
    to: '/formation/culture-generale/citations',
    Icon: Quote,
    title: 'Citations',
    description: 'Banque de citations classées par sous-thème, avec glose et paraperso lié',
  },
  {
    to: '/formation/culture-generale/juger',
    Icon: BookOpen,
    title: 'Fiche notions : L’humanité',
    description: 'Sous-thèmes du programme, distinctions et concepts clés',
  },
];

const FormationCultureGeneralePage = () => {
  return (
    <PRFormationLayout
      eyebrow="Prépa Rationnelle · Formation"
      title="Culture générale"
      subtitle={
        <>
          Thème <em>l’humanité</em> : méthode d’analyse des sujets, fiches notions et parapersos
          pour construire des copies solides.
        </>
      }
      tags={[
        { label: 'Niveau prépa' },
        { label: 'Articles & méthodes' },
        { label: 'Nouveau', highlight: true },
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

export default FormationCultureGeneralePage;
