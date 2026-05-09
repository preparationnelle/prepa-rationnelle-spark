import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, BookOpen, LucideIcon } from 'lucide-react';
import { PRFormationLayout } from '@/components/formation/PRFormationLayout';

export type EssaySection = {
  heading: string;
  paragraphs: string[];
};

type EnglishSampleEssayTemplateProps = {
  themeLabel: string;
  themeSlug: string;
  badge?: string;
  essayTitle: string;
  essayTagline?: string;
  Icon?: LucideIcon;
  sections: EssaySection[];
};

export const EnglishSampleEssayTemplate: React.FC<EnglishSampleEssayTemplateProps> = ({
  themeLabel,
  themeSlug,
  badge,
  essayTitle,
  essayTagline,
  Icon = BookOpen,
  sections,
}) => {
  return (
    <PRFormationLayout
      crumbs={[
        { label: 'Accueil', to: '/' },
        { label: 'Anglais', to: '/formation/anglais' },
        { label: 'Civilisation', to: '/formation/anglais/civilisation' },
        { label: themeLabel, to: `/formation/anglais/civilisation/${themeSlug}` },
        { label: 'Sample Essays' },
      ]}
      badge={badge ?? `Sample Essay · ${themeLabel}`}
      title="Sample"
      titleAccent="Essay"
      subtitle={essayTagline ?? `Modèle d'essai sur le thème « ${themeLabel} » pour t'inspirer en concours.`}
      Icon={Icon}
    >
      <div className="max-w-3xl mx-auto">
        <article className="bg-white border border-pr-gray-light rounded-2xl overflow-hidden">
          <div className="h-[2px] bg-pr-orange" />
          <header className="p-6 sm:p-8 border-b border-pr-gray-light">
            <div className="text-[10px] font-dm-sans font-semibold uppercase tracking-[0.12em] text-pr-orange-dark mb-3">
              {themeLabel} · Sample Essay
            </div>
            <h2 className="font-dm-serif text-2xl sm:text-3xl text-pr-black leading-tight">
              {essayTitle}
            </h2>
          </header>

          <div className="p-6 sm:p-8 space-y-6">
            {sections.map((section, idx) => (
              <section key={idx}>
                <h3 className="font-dm-serif text-xl text-pr-black mb-2">
                  {section.heading}
                </h3>
                <div className="w-10 h-[2px] bg-pr-orange mb-4" />
                <div className="space-y-4 text-pr-gray-dark/90 leading-relaxed">
                  {section.paragraphs.map((p, pIdx) => (
                    <p key={pIdx}>{p}</p>
                  ))}
                </div>
              </section>
            ))}
          </div>

          <footer className="p-5 sm:p-6 bg-pr-orange-pale/30 border-t border-pr-gray-light flex justify-end">
            <Link
              to={`/formation/anglais/civilisation/${themeSlug}`}
              className="inline-flex items-center gap-1.5 text-pr-orange-dark hover:text-pr-orange text-xs font-dm-sans font-semibold uppercase tracking-[0.08em] transition-colors"
            >
              <ArrowLeft className="h-3 w-3" />
              Retour au chapitre
            </Link>
          </footer>
        </article>
      </div>
    </PRFormationLayout>
  );
};

export default EnglishSampleEssayTemplate;
