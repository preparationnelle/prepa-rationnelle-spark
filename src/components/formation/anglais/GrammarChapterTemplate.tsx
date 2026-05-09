import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, LucideIcon, Languages } from 'lucide-react';
import { PRFormationLayout } from '@/components/formation/PRFormationLayout';

type GrammarChapterTemplateProps = {
  slug: string;
  title: string;
  titleAccent?: string;
  badge?: string;
  subtitle: string;
  Icon?: LucideIcon;
  children: React.ReactNode;
  hasExercices?: boolean;
  hasQuiz?: boolean;
  hasFlashcards?: boolean;
};

export const GrammarChapterTemplate: React.FC<GrammarChapterTemplateProps> = ({
  slug,
  title,
  titleAccent,
  badge,
  subtitle,
  Icon = Languages,
  children,
  hasExercices = true,
  hasQuiz = true,
  hasFlashcards = false,
}) => {
  const base = `/formation/anglais/grammaire/${slug}`;
  const actions = [
    hasExercices && { label: 'Exercices', to: `${base}/exercices` },
    hasQuiz && { label: 'Quiz', to: `${base}/quiz` },
    hasFlashcards && { label: 'Flashcards', to: `${base}/flashcards` },
  ].filter(Boolean) as { label: string; to: string }[];

  return (
    <PRFormationLayout
      crumbs={[
        { label: 'Accueil', to: '/' },
        { label: 'Anglais', to: '/formation/anglais' },
        { label: 'Grammaire', to: '/formation/anglais/grammaire' },
        { label: title },
      ]}
      badge={badge ?? 'Grammaire · Cours'}
      title={titleAccent ? title : title}
      titleAccent={titleAccent}
      subtitle={subtitle}
      Icon={Icon}
    >
      <div className="max-w-4xl mx-auto space-y-8">{children}</div>

      {actions.length > 0 && (
        <div className="max-w-4xl mx-auto mt-12 pt-8 border-t border-pr-gray-light">
          <div className="text-center mb-5">
            <div className="text-[10px] font-dm-sans font-semibold uppercase tracking-[0.12em] text-pr-orange-dark mb-2">
              S'entraîner
            </div>
            <h3 className="font-dm-serif text-xl text-pr-black">Continuer ce chapitre</h3>
            <div className="w-10 h-[2px] bg-pr-orange mx-auto mt-3" />
          </div>
          <div className="flex flex-wrap justify-center gap-3">
            {actions.map((a) => (
              <Link
                key={a.to}
                to={a.to}
                className="inline-flex items-center gap-1.5 bg-pr-orange-pale hover:bg-pr-orange-soft text-pr-orange-dark text-xs font-dm-sans font-semibold uppercase tracking-[0.08em] px-5 py-2.5 rounded-md transition-colors"
              >
                {a.label}
                <ArrowRight className="h-3 w-3" />
              </Link>
            ))}
          </div>
        </div>
      )}
    </PRFormationLayout>
  );
};

export default GrammarChapterTemplate;
