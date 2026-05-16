import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, BookOpen, Target, Brain, Zap } from 'lucide-react';

/**
 * Template carnet dédié aux 5 pages Oteria Python.
 * API identique à OteriaChapterTemplate (swap d'import sans changer les call-sites)
 * mais 100 % charte « Carnet Python » : Lora / Instrument, papier ligné, accent rouge,
 * filets pointillés. OteriaChapterTemplate reste intact pour les autres chapitres Oteria.
 */
interface OteriaPythonChapterTemplateProps {
  sessionNumber: number;
  sessionTitle: string;
  description: string;
  children: React.ReactNode;
  slug: string;
  courseSlug?: string;
  exercisesSlug?: string;
  flashcardsSlug?: string;
  quizSlug?: string;
  duration?: string;
  level?: string;
  activeSection?: 'course' | 'exercises' | 'flashcards' | 'quiz';
  previousSession?: { slug: string; title: string };
  nextSession?: { slug: string; title: string };
}

const sectionLabels: Record<NonNullable<OteriaPythonChapterTemplateProps['activeSection']>, string> = {
  course: 'Cours',
  exercises: 'Exercices',
  flashcards: 'Flashcards',
  quiz: 'QCM',
};

export const OteriaPythonChapterTemplate: React.FC<OteriaPythonChapterTemplateProps> = ({
  sessionNumber,
  sessionTitle,
  description,
  children,
  slug,
  courseSlug,
  exercisesSlug,
  flashcardsSlug,
  quizSlug,
  duration,
  level,
  activeSection = 'course',
  previousSession,
  nextSession,
}) => {
  const courseLink = `/formation/oteria/${courseSlug || `${slug}-cours`}`;
  const exercisesLink = `/formation/oteria/${exercisesSlug || `${slug}-exercices`}`;
  const flashcardsLink = `/formation/oteria/${flashcardsSlug || `${slug}-flashcards`}`;
  const quizLink = `/formation/oteria/${quizSlug || `${slug}-qcm`}`;

  const pills: { to: string; label: string; key: typeof activeSection; Icon: typeof BookOpen }[] = [
    { to: courseLink, label: 'Cours', key: 'course', Icon: BookOpen },
    { to: exercisesLink, label: 'Exercices', key: 'exercises', Icon: Target },
    { to: flashcardsLink, label: 'Flashcards', key: 'flashcards', Icon: Brain },
    { to: quizLink, label: 'QCM', key: 'quiz', Icon: Zap },
  ];

  return (
    <div className="min-h-screen carnet-paper text-carnet-ink-soft">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="mx-auto max-w-[1080px] px-6 lg:pl-[200px] lg:pr-16 py-3">
          <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute flex-wrap">
            <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
              <Home className="h-3.5 w-3.5" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <Link to="/articles/oteria-cyber-school" className="hover:text-carnet-red transition-colors">
              OTERIA Cyber School
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <span className="carnet-eyebrow text-[11px]">
              Séance {sessionNumber} — {sectionLabels[activeSection]}
            </span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1080px] px-6 lg:pl-[200px] lg:pr-16 py-10 lg:py-14 space-y-8">
        {/* En-tête */}
        <header>
          <div className="carnet-eyebrow mb-4">
            Python · Séance {String(sessionNumber).padStart(2, '0')}
            {duration ? ` · ${duration}` : ''}
            {level ? ` · ${level}` : ''}
          </div>
          <h1 className="font-lora text-[34px] sm:text-[42px] lg:text-[48px] leading-[1.08] text-carnet-ink tracking-tight mb-4">
            {sessionTitle}
          </h1>
          <p className="font-instrument text-[16px] lg:text-[18px] leading-[1.65] text-carnet-ink-soft max-w-[680px]">
            {description}
          </p>

          {/* Onglets de section */}
          <div className="flex flex-wrap items-center gap-2 mt-7 pt-5 border-t border-dashed border-[rgba(78,55,30,0.18)]">
            {pills.map(({ to, label, key, Icon }) => {
              const active = activeSection === key;
              return (
                <Link
                  key={key}
                  to={to}
                  className={`inline-flex items-center gap-2 h-9 rounded-full px-4 font-instrument text-[13px] font-semibold transition-colors ${
                    active
                      ? 'bg-carnet-ink text-carnet-paper'
                      : 'bg-transparent border border-[rgba(78,55,30,0.18)] text-carnet-ink-soft hover:text-carnet-red hover:border-carnet-red'
                  }`}
                >
                  <Icon className="h-3.5 w-3.5" />
                  {label}
                </Link>
              );
            })}
          </div>
        </header>

        {/* Contenu */}
        <div className="space-y-6">{children}</div>

        {/* Navigation de pied */}
        <div className="flex items-center justify-between gap-3 pt-8 border-t border-dashed border-[rgba(78,55,30,0.18)]">
          {previousSession ? (
            <Link
              to={`/formation/oteria/${previousSession.slug}-cours`}
              className="inline-flex items-center gap-2 font-instrument text-[12px] uppercase tracking-[0.12em] font-semibold text-carnet-ink-mute hover:text-carnet-red transition-colors"
            >
              <ChevronRight className="h-3.5 w-3.5 rotate-180" />
              Séance précédente
            </Link>
          ) : (
            <div />
          )}

          <Link
            to="/articles/oteria-cyber-school"
            className="inline-flex items-center gap-2 font-instrument text-[12px] uppercase tracking-[0.12em] font-semibold text-carnet-ink-mute hover:text-carnet-red transition-colors"
          >
            <BookOpen className="h-3.5 w-3.5" />
            Programme
          </Link>

          {nextSession ? (
            <Link
              to={`/formation/oteria/${nextSession.slug}-cours`}
              className="inline-flex items-center gap-2 font-instrument text-[12px] uppercase tracking-[0.12em] font-semibold text-carnet-ink-mute hover:text-carnet-red transition-colors"
            >
              Séance suivante
              <ChevronRight className="h-3.5 w-3.5" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
};

export default OteriaPythonChapterTemplate;
