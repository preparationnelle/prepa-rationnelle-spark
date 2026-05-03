import React from 'react';
import { Target } from 'lucide-react';
import { PRFormationLayout } from '@/components/formation/PRFormationLayout';
import { PRChapterRow } from '@/components/formation/PRChapterRow';

const chapters = [
  {
    title: "Les Colles d'Anglais",
    description: 'Méthode sobre pour réussir résumé et commentaire en colle.',
    to: '/formation/anglais/methodologie/colles',
  },
  {
    title: 'Partie synthèse (question 1)',
    description: 'Répondre à la question sur les textes en 3 parties claires.',
    to: '/formation/anglais/methodologie/synthese-question-1',
  },
  {
    title: 'Question de réflexion personnelle — essai (question 2)',
    description: 'Plan en 4 temps : opinion commune, contre-argument, solution, réponse.',
    to: '/formation/anglais/methodologie/essai-question-2',
  },
];

const MethodologieAnglaisPage = () => {
  return (
    <PRFormationLayout
      crumbs={[
        { label: 'Accueil', to: '/' },
        { label: 'Anglais', to: '/formation/anglais' },
        { label: 'Méthodologie' },
      ]}
      badge="Méthodologie"
      title="Méthodologie"
      titleAccent="Anglais"
      subtitle="Sélection de chapitres méthodologiques essentiels. Style sobre, efficace."
      Icon={Target}
    >
      <div className="space-y-4 max-w-4xl mx-auto">
        {chapters.map((c, i) => (
          <PRChapterRow
            key={c.to}
            number={i + 1}
            to={c.to}
            title={c.title}
            description={c.description}
          />
        ))}
      </div>
    </PRFormationLayout>
  );
};

export default MethodologieAnglaisPage;
