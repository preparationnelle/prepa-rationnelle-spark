import React from 'react';
import { LucideIcon, BookOpen } from 'lucide-react';
import { PRFormationLayout } from '@/components/formation/PRFormationLayout';
import { UnifiedFlashcards } from '@/components/ui/UnifiedFlashcards';

export type EnglishVocabularyItem = {
  french: string;
  english: string;
  category: string;
};

type EnglishVocabularyTemplateProps = {
  themeLabel: string;
  themeSlug: string;
  title: string;
  subtitle?: string;
  Icon?: LucideIcon;
  data: EnglishVocabularyItem[];
};

export const EnglishVocabularyTemplate: React.FC<EnglishVocabularyTemplateProps> = ({
  themeLabel,
  themeSlug,
  title,
  subtitle,
  Icon = BookOpen,
  data,
}) => {
  const mapped = data.map(({ category, french, english }) => ({
    category,
    front: french,
    back: english,
  }));

  return (
    <PRFormationLayout
      crumbs={[
        { label: 'Accueil', to: '/' },
        { label: 'Anglais', to: '/formation/anglais' },
        { label: 'Civilisation', to: '/formation/anglais/civilisation' },
        { label: themeLabel, to: `/formation/anglais/civilisation/${themeSlug}` },
        { label: 'Vocabulaire' },
      ]}
      badge={`Vocabulaire · ${themeLabel}`}
      title="Vocabulaire"
      titleAccent={themeLabel}
      subtitle={subtitle ?? `Lexique essentiel sur le thème « ${themeLabel} » pour les épreuves d'anglais ECG.`}
      Icon={Icon}
    >
      <div className="max-w-6xl mx-auto">
        <div className="bg-white border border-pr-gray-light rounded-2xl overflow-hidden">
          <div className="h-[2px] bg-pr-orange" />
          <div className="p-6 sm:p-8">
            <UnifiedFlashcards
              data={mapped as any}
              title={title}
              frontKey="front"
              backKey="back"
              frontLabel="Français"
              backLabel="Anglais"
            />
          </div>
        </div>
      </div>
    </PRFormationLayout>
  );
};

export default EnglishVocabularyTemplate;
