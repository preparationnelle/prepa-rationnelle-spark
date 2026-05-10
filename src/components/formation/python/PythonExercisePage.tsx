import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp, CheckCircle, Trophy, Play, Target, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------- */
/*  PythonExerciseHero                                                         */
/* -------------------------------------------------------------------------- */

export interface PythonExerciseHeroProps {
  moduleLabel: string;
  title: ReactNode;
  subtitle?: string;
  annotation?: string;
}

export const PythonExerciseHero: React.FC<PythonExerciseHeroProps> = ({
  moduleLabel,
  title,
  subtitle,
  annotation,
}) => (
  <header className="text-center mb-12 max-w-2xl mx-auto relative">
    {annotation && (
      <div
        className="carnet-hand hidden md:block absolute pointer-events-none whitespace-pre-line text-carnet-red"
        style={{ right: -24, top: 8, fontSize: 24, transform: 'rotate(-6deg)', maxWidth: 170, lineHeight: 1.1, textAlign: 'left' }}
      >
        {annotation}
      </div>
    )}
    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.2)]">
      <span className="font-instrument text-[10px] font-semibold uppercase tracking-[0.16em] text-carnet-red">
        {moduleLabel}
      </span>
    </div>
    <h1 className="font-lora text-4xl md:text-5xl text-carnet-ink tracking-tight leading-tight mb-4">
      {title}
    </h1>
    <hr className="w-14 h-0.5 bg-carnet-ink border-0 mx-auto mb-4" />
    {subtitle && (
      <p className="font-instrument text-base md:text-lg text-carnet-ink-soft leading-relaxed">
        {subtitle}
      </p>
    )}
  </header>
);

/* -------------------------------------------------------------------------- */
/*  PythonExerciseTopBar                                                        */
/* -------------------------------------------------------------------------- */

export interface PythonExerciseTopBarProps {
  current: number;
  total: number;
  onBack: () => void;
  onPrev?: () => void;
  onNext?: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export const PythonExerciseTopBar: React.FC<PythonExerciseTopBarProps> = ({
  current,
  total,
  onBack,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}) => (
  <div className="mb-8 sticky top-[42px] z-20 -mx-6 px-6 py-3 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
    <div className="flex items-center justify-between gap-4">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1.5 font-instrument text-[11px] uppercase tracking-[0.12em] font-semibold text-carnet-ink-mute hover:text-carnet-red transition-colors"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Liste des exercices
      </button>

      <div className="hidden md:flex items-center gap-3">
        <span className="font-instrument text-[11px] uppercase tracking-[0.12em] font-semibold text-carnet-ink-mute">
          {String(current).padStart(2, '0')} <span className="opacity-40">/</span> {String(total).padStart(2, '0')}
        </span>
        <div className="w-32 h-[3px] bg-[rgba(78,55,30,0.10)] rounded-full overflow-hidden">
          <div
            className="h-full bg-carnet-red transition-all duration-300"
            style={{ width: `${(current / total) * 100}%` }}
          />
        </div>
      </div>

      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="sm"
          onClick={onPrev}
          disabled={!hasPrev}
          className="h-8 px-2 text-carnet-ink-soft hover:text-carnet-red hover:bg-[rgba(193,68,58,0.06)] disabled:opacity-30"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="sr-only">Précédent</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={onNext}
          disabled={!hasNext}
          className="h-8 px-2 text-carnet-ink-soft hover:text-carnet-red hover:bg-[rgba(193,68,58,0.06)] disabled:opacity-30"
        >
          <ArrowRight className="h-4 w-4" />
          <span className="sr-only">Suivant</span>
        </Button>
      </div>
    </div>
  </div>
);

/* -------------------------------------------------------------------------- */
/*  PythonExerciseDetailHeader                                                  */
/* -------------------------------------------------------------------------- */

export interface PythonExerciseDetailHeaderProps {
  number: number;
  title: string;
  difficulty?: string;
  badges?: string[];
}

export const PythonExerciseDetailHeader: React.FC<PythonExerciseDetailHeaderProps> = ({
  number,
  title,
  difficulty,
  badges,
}) => {
  const cleanedTitle = title.includes(' - ')
    ? title.split(' - ').slice(1).join(' - ')
    : title;

  return (
    <div className="mb-8 pb-6 border-b border-dashed border-[rgba(78,55,30,0.18)]">
      <div className="carnet-eyebrow text-[11px] mb-3">
        Exercice {String(number).padStart(2, '0')}
      </div>
      <h1 className="font-lora text-3xl md:text-4xl text-carnet-ink leading-tight mb-3">
        {cleanedTitle}
      </h1>
      <div className="flex flex-wrap items-center gap-2">
        {difficulty && (
          <span className="font-instrument inline-flex items-center text-[10px] font-semibold uppercase tracking-[0.12em] text-carnet-red bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.2)] rounded-full px-2.5 py-1">
            {difficulty}
          </span>
        )}
        {badges?.map((b) => (
          <span
            key={b}
            className="font-instrument inline-flex items-center text-[10px] font-semibold uppercase tracking-[0.12em] text-carnet-ink-soft bg-[rgba(78,55,30,0.06)] border border-[rgba(78,55,30,0.12)] rounded-full px-2.5 py-1"
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*  PythonExerciseFooterNav                                                     */
/* -------------------------------------------------------------------------- */

export interface PythonExerciseFooterNavProps {
  current: number;
  total: number;
  onPrev: () => void;
  onNext: () => void;
  hasPrev: boolean;
  hasNext: boolean;
}

export const PythonExerciseFooterNav: React.FC<PythonExerciseFooterNavProps> = ({
  current,
  total,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
}) => (
  <div className="mt-12 pt-6 border-t border-dashed border-[rgba(78,55,30,0.18)]">
    <div className="flex items-center justify-between gap-3">
      <Button
        variant="outline"
        onClick={onPrev}
        disabled={!hasPrev}
        className="rounded-full border-[rgba(78,55,30,0.18)] text-carnet-ink-soft hover:bg-[rgba(193,68,58,0.06)] hover:text-carnet-red hover:border-carnet-red font-instrument text-xs disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-carnet-ink-soft bg-transparent"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Précédent
      </Button>

      <span className="font-instrument text-[11px] uppercase tracking-[0.12em] font-semibold text-carnet-ink-mute">
        {String(current).padStart(2, '0')} <span className="opacity-40">/</span> {String(total).padStart(2, '0')}
      </span>

      <Button
        variant="outline"
        onClick={onNext}
        className="rounded-full border-[rgba(78,55,30,0.18)] text-carnet-ink-soft hover:bg-[rgba(193,68,58,0.06)] hover:text-carnet-red hover:border-carnet-red font-instrument text-xs bg-transparent"
      >
        {hasNext ? 'Suivant' : 'Retour'}
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  </div>
);

/* -------------------------------------------------------------------------- */
/*  PythonStatementCard                                                         */
/* -------------------------------------------------------------------------- */

export interface PythonStatementCardProps {
  label?: string;
  children: ReactNode;
  className?: string;
  icon?: 'target' | 'book';
}

export const PythonStatementCard: React.FC<PythonStatementCardProps> = ({
  label = 'Énoncé',
  children,
  className,
  icon = 'book',
}) => {
  const Icon = icon === 'target' ? Target : BookOpen;
  return (
    <div className={cn('mb-6 bg-white border border-[rgba(78,55,30,0.14)] rounded-2xl overflow-hidden relative', className)}>
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-carnet-red" />
      <div className="px-6 md:px-8 pt-6 pb-3 flex items-center gap-2.5">
        <Icon className="h-4 w-4 text-carnet-red" />
        <span className="font-instrument text-[10px] font-semibold uppercase tracking-[0.12em] text-carnet-red">
          {label}
        </span>
      </div>
      <div className="px-6 md:px-8 pb-6 pt-0">
        <div className="font-instrument text-carnet-ink-soft text-base leading-[1.75]" style={{ wordWrap: 'break-word', overflowWrap: 'break-word' }}>
          {children}
        </div>
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*  PythonCorrectionToggle                                                      */
/* -------------------------------------------------------------------------- */

export interface PythonCorrectionToggleProps {
  isOpen: boolean;
  onToggle: () => void;
  labelClosed?: string;
  labelOpen?: string;
}

export const PythonCorrectionToggle: React.FC<PythonCorrectionToggleProps> = ({
  isOpen,
  onToggle,
  labelClosed = 'Voir la correction',
  labelOpen = 'Masquer la correction',
}) => (
  <div className="flex justify-center my-8">
    <Button
      onClick={onToggle}
      variant="outline"
      className={cn(
        'rounded-full px-6 py-5 h-auto font-instrument text-sm font-semibold transition-all',
        isOpen
          ? 'border-[rgba(78,55,30,0.18)] text-carnet-ink-soft bg-[rgba(78,55,30,0.04)] hover:bg-[rgba(78,55,30,0.08)]'
          : 'border-[rgba(193,68,58,0.3)] text-carnet-red bg-white hover:bg-[rgba(193,68,58,0.06)] hover:border-carnet-red'
      )}
    >
      {isOpen ? (
        <><ChevronUp className="h-4 w-4 mr-2" />{labelOpen}</>
      ) : (
        <><ChevronDown className="h-4 w-4 mr-2" />{labelClosed}</>
      )}
    </Button>
  </div>
);

/* -------------------------------------------------------------------------- */
/*  PythonCorrectionPanel                                                       */
/* -------------------------------------------------------------------------- */

export interface PythonCorrectionPanelProps {
  title?: string;
  children: ReactNode;
}

export const PythonCorrectionPanel: React.FC<PythonCorrectionPanelProps> = ({
  title = 'Correction',
  children,
}) => (
  <div className="animate-in fade-in slide-in-from-top-4 duration-500">
    <div className="bg-white border border-[rgba(78,55,30,0.14)] rounded-2xl overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-carnet-red" />
      <div className="px-6 md:px-8 pt-6 pb-3 flex items-center gap-2.5 border-b border-dashed border-[rgba(78,55,30,0.12)]">
        <CheckCircle className="h-4 w-4 text-carnet-red" />
        <span className="font-instrument text-[10px] font-semibold uppercase tracking-[0.12em] text-carnet-red">
          {title}
        </span>
      </div>
      <div>{children}</div>
    </div>
  </div>
);

/* -------------------------------------------------------------------------- */
/*  PythonCodeBlock                                                             */
/* -------------------------------------------------------------------------- */

export interface PythonCodeBlockProps {
  code: string;
  caption?: string;
}

export const PythonCodeBlock: React.FC<PythonCodeBlockProps> = ({ code, caption }) => (
  <div className="bg-carnet-ink overflow-x-auto rounded-lg">
    {caption && (
      <div className="px-6 md:px-8 pt-4 pb-2 font-instrument text-[10px] uppercase tracking-[0.12em] font-semibold text-carnet-paper/50">
        {caption}
      </div>
    )}
    <pre className="px-6 md:px-8 py-5 text-[13px] md:text-sm font-mono leading-[1.75] whitespace-pre text-emerald-400">
      <code>{code}</code>
    </pre>
  </div>
);

/* -------------------------------------------------------------------------- */
/*  PythonExerciseGrid + PythonExerciseCard                                    */
/* -------------------------------------------------------------------------- */

export interface PythonExerciseCardData {
  id: number;
  title: string;
  description?: string;
  difficulty?: string;
}

export interface PythonExerciseGridProps {
  exercises: PythonExerciseCardData[];
  onSelect: (id: number) => void;
}

export const PythonExerciseGrid: React.FC<PythonExerciseGridProps> = ({ exercises, onSelect }) => (
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
    {exercises.map((ex, i) => {
      const tilt = i % 3 === 1 ? 'l' : i % 3 === 2 ? 'r' : undefined;
      return (
        <PythonExerciseCard
          key={ex.id}
          exercise={ex}
          onClick={() => onSelect(ex.id)}
          tilt={tilt}
        />
      );
    })}
  </div>
);

interface PythonExerciseCardInternalProps {
  exercise: PythonExerciseCardData;
  onClick: () => void;
  tilt?: 'l' | 'r';
}

const PythonExerciseCard: React.FC<PythonExerciseCardInternalProps> = ({ exercise, onClick, tilt }) => {
  const cleanedTitle = exercise.title.includes(' - ')
    ? exercise.title.split(' - ').slice(1).join(' - ')
    : exercise.title;

  return (
    <button
      onClick={onClick}
      className={cn(
        'group carnet-card text-left p-6 transition-shadow hover:shadow-[0_12px_32px_rgba(78,55,30,0.10)] flex flex-col h-full',
        tilt === 'l' && 'carnet-tilt-l',
        tilt === 'r' && 'carnet-tilt-r',
      )}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex flex-col items-start">
          <span className="carnet-hand text-[32px] text-carnet-red leading-none font-semibold">
            {String(exercise.id).padStart(2, '0')}
          </span>
          <hr className="w-5 h-0.5 bg-carnet-ink border-0 mt-1" />
        </div>
        {exercise.difficulty && (
          <span className="font-instrument inline-flex items-center text-[10px] font-semibold uppercase tracking-[0.12em] text-carnet-ink-soft bg-[rgba(78,55,30,0.06)] border border-[rgba(78,55,30,0.12)] rounded-full px-2.5 py-1">
            {exercise.difficulty}
          </span>
        )}
      </div>

      <h3 className="font-lora text-[18px] text-carnet-ink leading-tight mb-2 group-hover:text-carnet-red transition-colors">
        {cleanedTitle}
      </h3>

      {exercise.description && (
        <p className="font-instrument text-[13px] text-carnet-ink-soft leading-relaxed line-clamp-3 mb-5">
          {exercise.description}
        </p>
      )}

      <div className="mt-auto flex items-center gap-1.5 font-instrument text-[11px] uppercase tracking-[0.12em] font-semibold text-carnet-red group-hover:gap-2.5 transition-all">
        Commencer
        <ArrowRight className="h-3 w-3" />
      </div>
    </button>
  );
};

/* -------------------------------------------------------------------------- */
/*  PythonQCMLauncher                                                           */
/* -------------------------------------------------------------------------- */

export interface PythonQCMLauncherProps {
  title?: string;
  description: string;
  questionCount?: number;
  onLaunch: () => void;
  className?: string;
}

export const PythonQCMLauncher: React.FC<PythonQCMLauncherProps> = ({
  title = "QCM d'évaluation",
  description,
  questionCount = 20,
  onLaunch,
  className,
}) => (
  <button
    onClick={onLaunch}
    className={cn('group carnet-card w-full text-left p-6 md:p-7 mb-10 transition-shadow hover:shadow-[0_12px_32px_rgba(78,55,30,0.10)]', className)}
  >
    <div className="flex items-center gap-5">
      <div className="w-12 h-12 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
        <Trophy className="h-5 w-5 text-carnet-red" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="carnet-eyebrow text-[10px] mb-1">Évaluation</div>
        <h3 className="font-lora text-xl text-carnet-ink mb-1 group-hover:text-carnet-red transition-colors">
          {title}
        </h3>
        <p className="font-instrument text-sm text-carnet-ink-soft">
          {description} · <span className="font-semibold">{questionCount} questions</span>
        </p>
      </div>
      <div className="hidden md:inline-flex items-center gap-1.5 font-instrument text-[11px] uppercase tracking-[0.12em] font-semibold text-carnet-red group-hover:gap-2.5 transition-all">
        Commencer
        <ArrowRight className="h-3 w-3" />
      </div>
    </div>
  </button>
);

/* -------------------------------------------------------------------------- */
/*  PythonSectionHeading                                                        */
/* -------------------------------------------------------------------------- */

export interface PythonSectionHeadingProps {
  label?: string;
  title: string;
  className?: string;
}

export const PythonSectionHeading: React.FC<PythonSectionHeadingProps> = ({
  label,
  title,
  className,
}) => (
  <div className={cn('mb-6', className)}>
    {label && (
      <div className="carnet-eyebrow text-[10px] mb-2">{label}</div>
    )}
    <h2 className="font-lora text-2xl md:text-3xl text-carnet-ink leading-tight pl-3 border-l-[3px] border-carnet-red">
      {title}
    </h2>
  </div>
);
