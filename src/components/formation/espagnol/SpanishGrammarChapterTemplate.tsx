import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, ChevronRight, ArrowRight, LucideIcon, Languages } from 'lucide-react';
import { SEOHead } from '@/components/SEOHead';
import ConjugationSectionComponent from '@/components/grammar/ConjugationSection';
import type { ConjugationSection } from '@/data/spanishConjugationData';

type SpanishGrammarChapterTemplateProps = {
  /** slug relatif sous /formation/espagnol/grammaire/ — ex. "subjonctif" */
  slug: string;
  /** Numéro de fiche affiché dans l'eyebrow (ex. 12) */
  chapterNumber?: number;
  title: string;
  /** Partie du titre mise en italique rouge (effet carnet) */
  titleAccent?: string;
  subtitle: string;
  Icon?: LucideIcon;
  /** Notions de cours rendues via ConjugationSectionComponent */
  sections: ConjugationSection[];
  /** Bloc d'introduction libre affiché avant les notions */
  intro?: React.ReactNode;
  /** Annotation manuscrite affichée sous le hero */
  handNote?: string;
  hasExercices?: boolean;
  hasQuiz?: boolean;
  hasFlashcards?: boolean;
};

export const SpanishGrammarChapterTemplate: React.FC<SpanishGrammarChapterTemplateProps> = ({
  slug,
  chapterNumber,
  title,
  titleAccent,
  subtitle,
  Icon = Languages,
  sections,
  intro,
  handNote = '↓ déroule chaque notion',
  hasExercices = false,
  hasQuiz = false,
  hasFlashcards = false,
}) => {
  const base = `/formation/espagnol/grammaire/${slug}`;
  const actions = [
    hasExercices && { label: 'Exercices', to: `${base}/exercices` },
    hasQuiz && { label: 'Quiz', to: `${base}/quiz` },
    hasFlashcards && { label: 'Flashcards', to: `${base}/flashcards` },
  ].filter(Boolean) as { label: string; to: string }[];

  return (
    <div className="carnet-paper min-h-screen">
      <SEOHead
        canonical={base}
        title={`${title} · Grammaire Espagnole ECG · Prépa Rationnelle`}
        description={subtitle}
      />

      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-40 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-3">
          <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute flex-wrap">
            <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
              <Home className="h-3.5 w-3.5" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <Link to="/formation/espagnol" className="hover:text-carnet-red transition-colors">
              Espagnol
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <Link to="/formation/espagnol/grammaire" className="hover:text-carnet-red transition-colors">
              Grammaire
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <span className="carnet-eyebrow text-[11px]">{title}</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative py-14 lg:py-16">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-[820px]"
          >
            <div className="carnet-eyebrow mb-6">
              Espagnol · Grammaire{chapterNumber ? ` · Fiche ${String(chapterNumber).padStart(2, '0')}` : ''}
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
                <Icon className="h-6 w-6 text-carnet-red" />
              </div>
              <h1 className="font-lora text-[34px] sm:text-[44px] lg:text-[52px] leading-[1.08] text-carnet-ink tracking-tight">
                {titleAccent ? (
                  <>
                    {title.replace(titleAccent, '').trim()}{' '}
                    <em className="font-lora italic text-carnet-red">{titleAccent}</em>.
                  </>
                ) : (
                  <>
                    {title}.
                  </>
                )}
              </h1>
            </div>

            <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.65] text-carnet-ink-soft max-w-[640px] mb-8">
              {subtitle}
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.25)]">
                <Languages className="h-4 w-4 text-carnet-red" />
                <span className="font-instrument text-[13px] font-semibold text-carnet-ink">
                  {sections.length} notion{sections.length > 1 ? 's' : ''}
                </span>
              </div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)]">
                <span className="carnet-eyebrow text-[11px]">Cours · Concours ECG</span>
              </div>
            </div>

            <div
              className="carnet-hand text-[22px] mt-7 hidden md:block"
              style={{ transform: 'rotate(-2deg)' }}
            >
              {handNote}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contenu */}
      <section className="relative pb-24">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16">
          <div className="max-w-4xl space-y-5">
            {intro && (
              <div className="carnet-card p-6 sm:p-7 mb-2">
                <div className="font-instrument text-[15px] leading-[1.7] text-carnet-ink-soft space-y-3">
                  {intro}
                </div>
              </div>
            )}

            {sections.map((section, idx) => {
              const tilt = idx % 4 === 1 ? 'carnet-tilt-r' : idx % 4 === 3 ? 'carnet-tilt-l' : '';
              return (
                <motion.div
                  key={section.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.35, delay: Math.min(idx * 0.03, 0.25) }}
                  className={tilt}
                >
                  <ConjugationSectionComponent section={section} />
                </motion.div>
              );
            })}
          </div>

          {/* Footer S'entraîner */}
          {actions.length > 0 && (
            <div className="max-w-4xl mt-14 pt-8 border-t border-dashed border-[rgba(78,55,30,0.18)]">
              <div className="mb-5">
                <div className="carnet-eyebrow text-[11px] mb-2">S'entraîner</div>
                <h3 className="font-lora text-[22px] text-carnet-ink">Continuer ce chapitre</h3>
                <hr className="w-10 h-0.5 bg-carnet-red border-0 mt-3" />
              </div>
              <div className="flex flex-wrap gap-3">
                {actions.map((a) => (
                  <Link
                    key={a.to}
                    to={a.to}
                    className="inline-flex items-center gap-1.5 bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument text-[12px] font-semibold uppercase tracking-[0.08em] px-5 py-2.5 rounded-full transition-colors"
                  >
                    {a.label}
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                ))}
              </div>
            </div>
          )}

          <div className="max-w-4xl mt-12">
            <Link
              to="/formation/espagnol/grammaire"
              className="inline-flex items-center gap-2 font-instrument text-[13px] text-carnet-ink-mute hover:text-carnet-red transition-colors"
            >
              <ChevronRight className="h-3.5 w-3.5 rotate-180" />
              Retour à tous les chapitres
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SpanishGrammarChapterTemplate;
