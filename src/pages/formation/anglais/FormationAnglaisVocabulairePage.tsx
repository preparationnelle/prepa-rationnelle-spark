import React, { useState } from 'react';
import {
  BookOpen, Leaf, Users, DollarSign, Heart, GraduationCap, Newspaper,
  Globe, UserCheck, Scale, Briefcase, Zap, Split, Cpu, Flag, Shield,
  Church, Crown, AlertTriangle,
} from 'lucide-react';
import { PRFormationLayout } from '@/components/formation/PRFormationLayout';
import { PRTopicCard } from '@/components/formation/PRTopicCard';
import { VocabularyFlashcards } from '@/components/VocabularyFlashcards';

const FormationAnglaisVocabulairePage = () => {
  const [language] = useState<'fr' | 'en'>('fr');

  const themes = [
    { Icon: Leaf, title: 'Environnement', description: 'Écologie & Climat', to: '/formation/anglais/civilisation/environment/vocabulary' },
    { Icon: Users, title: 'Politique', description: 'Institutions & Pouvoir', to: '/formation/anglais/civilisation/politics/vocabulary' },
    { Icon: DollarSign, title: 'Économie', description: 'Finance & Commerce', to: '/formation/anglais/civilisation/economy/vocabulary' },
    { Icon: Heart, title: 'Santé', description: 'Médecine & Bien-être', to: '/formation/anglais/civilisation/health/vocabulary' },
    { Icon: GraduationCap, title: 'Éducation', description: 'Apprentissage & Formation', to: '/formation/anglais/civilisation/education/vocabulary' },
    { Icon: Newspaper, title: 'Médias', description: 'Information & Communication', to: '/formation/anglais/civilisation/media/vocabulary' },
    { Icon: Globe, title: 'Géopolitique', description: 'Relations Internationales', to: '/formation/anglais/civilisation/geopolitics/vocabulary' },
    { Icon: UserCheck, title: 'Immigration', description: 'Migration & Intégration', to: '/formation/anglais/civilisation/immigration/vocabulary' },
    { Icon: Scale, title: 'Justice', description: 'Droit & Équité', to: '/formation/anglais/civilisation/justice/vocabulary' },
    { Icon: Briefcase, title: 'Travail', description: 'Emploi & Syndicalisme', to: '/formation/anglais/civilisation/labor/vocabulary' },
    { Icon: Split, title: 'Polarisation', description: 'Division Sociale', to: '/formation/anglais/civilisation/polarization/vocabulary' },
    { Icon: Cpu, title: 'IA & Tech', description: 'Innovation Numérique', to: '/formation/anglais/civilisation/ai-technology/vocabulary' },
    { Icon: Flag, title: 'Brexit', description: 'Europe & Royaume-Uni', to: '/formation/anglais/civilisation/brexit/vocabulary' },
    { Icon: Shield, title: 'Droits Civils', description: 'Libertés & Égalité', to: '/formation/anglais/civilisation/civil-rights/vocabulary' },
    { Icon: Church, title: 'Religion Civile', description: 'Valeurs & Société', to: '/formation/anglais/civilisation/civil-religion/vocabulary' },
    { Icon: Crown, title: 'Commonwealth', description: 'Nations Unies', to: '/formation/anglais/civilisation/commonwealth/vocabulary' },
    { Icon: AlertTriangle, title: 'Crises', description: 'Urgences & Défis', to: '/formation/anglais/civilisation/crises/vocabulary' },
  ];

  return (
    <PRFormationLayout
      crumbs={[
        { label: 'Accueil', to: '/' },
        { label: 'Anglais', to: '/formation/anglais' },
        { label: 'Vocabulaire' },
      ]}
      badge="Vocabulaire · 1000+ mots"
      title="Vocabulaire"
      titleAccent="Anglais"
      subtitle="Maîtrisez le lexique essentiel pour vos concours ECG."
      Icon={BookOpen}
    >
      {/* Flashcards principales */}
      <div className="max-w-6xl mx-auto mb-20">
        <div className="bg-white border border-pr-gray-light rounded-2xl overflow-hidden">
          <div className="h-[2px] bg-pr-orange" />
          <div className="p-6 sm:p-8">
            <VocabularyFlashcards language={language} />
          </div>
        </div>
      </div>

      {/* Vocabulaire par thème */}
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="font-dm-serif text-3xl sm:text-4xl text-pr-black mb-3">Vocabulaire par thème</h2>
          <div className="w-12 h-[3px] bg-pr-orange mx-auto mb-4" />
          <p className="text-base text-pr-gray-dark/80 max-w-2xl mx-auto">
            Explorez le vocabulaire spécialisé par domaine de civilisation.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {themes.map((t) => (
            <PRTopicCard key={t.to} {...t} small />
          ))}
        </div>
      </div>
    </PRFormationLayout>
  );
};

export default FormationAnglaisVocabulairePage;
