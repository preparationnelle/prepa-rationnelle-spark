import React from 'react';
import { UnifiedFlashcards } from '@/components/ui/UnifiedFlashcards';

interface VocabularyCard {
  id: number;
  french: string;
  english: string;
  category: string;
}

const LaborVocabularyPage = () => {
  const vocabularyData: VocabularyCard[] = [
    // 1. Marché du travail / Labor Market
    { id: 1, french: 'Marché du travail', english: 'Labor market', category: 'Marché du travail' },
    { id: 2, french: 'Taux de chômage', english: 'Unemployment rate', category: 'Marché du travail' },
    { id: 3, french: 'Taux d’activité', english: 'Labor force participation rate', category: 'Marché du travail' },
    { id: 4, french: 'Emploi à temps plein', english: 'Full-time employment', category: 'Marché du travail' },
    { id: 5, french: 'Emploi à temps partiel', english: 'Part-time employment', category: 'Marché du travail' },
    { id: 6, french: 'Sous‑emploi', english: 'Underemployment', category: 'Marché du travail' },
    { id: 7, french: 'Création d’emplois', english: 'Job creation', category: 'Marché du travail' },
    { id: 8, french: 'Destruction d’emplois', english: 'Job destruction', category: 'Marché du travail' },
    { id: 9, french: 'Pénurie de compétences', english: 'Skills shortage', category: 'Marché du travail' },
    { id: 10, french: 'Pénurie de main‑d’œuvre', english: 'Labor shortage', category: 'Marché du travail' },

    // 2. Économie des plateformes / Gig Economy
    { id: 11, french: 'Économie des plateformes', english: 'Gig economy', category: 'Économie des plateformes' },
    { id: 12, french: 'Travailleur de plateforme', english: 'Platform worker', category: 'Économie des plateformes' },
    { id: 13, french: 'Indépendant', english: 'Independent contractor', category: 'Économie des plateformes' },
    { id: 14, french: 'Statut d’employé', english: 'Employee status', category: 'Économie des plateformes' },
    { id: 15, french: 'Requalification', english: 'Reclassification', category: 'Économie des plateformes' },
    { id: 16, french: 'Algorithme de répartition', english: 'Allocation algorithm', category: 'Économie des plateformes' },
    { id: 17, french: 'Notation des travailleurs', english: 'Worker rating', category: 'Économie des plateformes' },
    { id: 18, french: 'Transparence algorithmique', english: 'Algorithmic transparency', category: 'Économie des plateformes' },
    { id: 19, french: 'Protection sociale', english: 'Social protection', category: 'Économie des plateformes' },
    { id: 20, french: 'Négociation collective', english: 'Collective bargaining', category: 'Économie des plateformes' },

    // 3. Transformation du travail / Future of Work
    { id: 21, french: 'Télétravail', english: 'Remote work', category: 'Transformation du travail' },
    { id: 22, french: 'Travail hybride', english: 'Hybrid work', category: 'Transformation du travail' },
    { id: 23, french: 'Flexibilité', english: 'Flexibility', category: 'Transformation du travail' },
    { id: 24, french: 'Semaine de 4 jours', english: 'Four-day workweek', category: 'Transformation du travail' },
    { id: 25, french: 'Bureau partagé', english: 'Hot desking', category: 'Transformation du travail' },
    { id: 26, french: 'Productivité', english: 'Productivity', category: 'Transformation du travail' },
    { id: 27, french: 'Automatisation', english: 'Automation', category: 'Transformation du travail' },
    { id: 28, french: 'Collaboration humain‑IA', english: 'Human‑AI collaboration', category: 'Transformation du travail' },
    { id: 29, french: 'Réorganisation des tâches', english: 'Task redesign', category: 'Transformation du travail' },
    { id: 30, french: 'Réallocation des emplois', english: 'Job reallocation', category: 'Transformation du travail' },

    // 4. Compétences et formation / Skills and Training
    { id: 31, french: 'Montée en compétences', english: 'Upskilling', category: 'Compétences et formation' },
    { id: 32, french: 'Reconversion', english: 'Reskilling', category: 'Compétences et formation' },
    { id: 33, french: 'Compétences numériques', english: 'Digital skills', category: 'Compétences et formation' },
    { id: 34, french: 'Compétences vertes', english: 'Green skills', category: 'Compétences et formation' },
    { id: 35, french: 'Apprentissage tout au long de la vie', english: 'Lifelong learning', category: 'Compétences et formation' },
    { id: 36, french: 'Académie digitale', english: 'Digital academy', category: 'Compétences et formation' },

    // 5. Droit du travail et protection / Labor Law
    { id: 37, french: 'Salaire minimum', english: 'Minimum wage', category: 'Droit du travail' },
    { id: 38, french: 'Temps de travail', english: 'Working time', category: 'Droit du travail' },
    { id: 39, french: 'Heures supplémentaires', english: 'Overtime', category: 'Droit du travail' },
    { id: 40, french: 'Congés payés', english: 'Paid leave', category: 'Droit du travail' },
    { id: 41, french: 'Congé maladie', english: 'Sick leave', category: 'Droit du travail' },
    { id: 42, french: 'Sécurité et santé au travail', english: 'Occupational safety and health', category: 'Droit du travail' },
    { id: 43, french: 'Discrimination', english: 'Discrimination', category: 'Droit du travail' },
    { id: 44, french: 'Égalité salariale', english: 'Equal pay', category: 'Droit du travail' },

    // 6. Bien‑être au travail / Wellbeing
    { id: 45, french: 'Qualité de vie au travail', english: 'Workplace wellbeing', category: 'Bien‑être au travail' },
    { id: 46, french: 'Épuisement professionnel', english: 'Burnout', category: 'Bien‑être au travail' },
    { id: 47, french: 'Santé mentale', english: 'Mental health', category: 'Bien‑être au travail' },
    { id: 48, french: 'Charge de travail', english: 'Workload', category: 'Bien‑être au travail' },
    { id: 49, french: 'Flexibilité horaire', english: 'Flexible hours', category: 'Bien‑être au travail' },
    { id: 50, french: 'Concilier vie pro/vie perso', english: 'Work‑life balance', category: 'Bien‑être au travail' },
  ];

  const mapped = vocabularyData.map(({ category, french, english }) => ({ category, front: french, back: english }));

  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-6xl mx-auto px-4 py-8">
        <UnifiedFlashcards
          data={mapped as any}
          title="Labor Markets and Future of Work (FR → EN)"
          frontKey="front"
          backKey="back"
          frontLabel="Français"
          backLabel="Anglais"
        />
      </div>
    </div>
  );
};

export default LaborVocabularyPage;
