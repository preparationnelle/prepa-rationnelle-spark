import React, { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, ChevronDown, ChevronUp, CheckCircle, Trophy, Play, Target, BookOpen } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { cn } from '@/lib/utils';

/* -------------------------------------------------------------------------- */
/*  PythonExerciseHero — header utilisé en haut de la liste d'exercices       */
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
        className="carnet-hand hidden md:block absolute pointer-events-none whitespace-pre-line"
        style={{
          right: -24,
          top: 8,
          fontSize: 24,
          transform: 'rotate(-6deg)',
          maxWidth: 170,
          lineHeight: 1.1,
          textAlign: 'left',
        }}
      >
        {annotation}
      </div>
    )}
    <div className="inline-flex items-center gap-2 mb-4 px-3 py-1 rounded-full bg-pr-orange-pale border border-pr-orange-soft/60">
      <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-pr-orange-dark">
        {moduleLabel}
      </span>
    </div>
    <h1 className="font-dm-serif text-4xl md:text-5xl text-pr-black tracking-tight leading-tight mb-4">
      {title}
    </h1>
    <div className="flex justify-center mb-4">
      <div className="h-[2px] w-14 bg-pr-orange" />
    </div>
    {subtitle && (
      <p className="text-base md:text-lg text-pr-gray-dark/80 leading-relaxed">
        {subtitle}
      </p>
    )}
  </header>
);

/* -------------------------------------------------------------------------- */
/*  PythonExerciseTopBar — sticky bar en haut de la vue détail                */
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
  <div className="mb-8 sticky top-[42px] z-20 -mx-6 px-6 py-3 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 border-b border-pr-gray-light/60">
    <div className="flex items-center justify-between gap-4">
      <button
        onClick={onBack}
        className="inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.12em] font-semibold text-pr-gray-mid hover:text-pr-orange-dark transition-colors"
      >
        <ArrowLeft className="h-3.5 w-3.5" />
        Liste des exercices
      </button>

      <div className="hidden md:flex items-center gap-3">
        <span className="text-[11px] uppercase tracking-[0.12em] font-semibold text-pr-gray-mid">
          {String(current).padStart(2, '0')} <span className="text-pr-gray-light">/</span> {String(total).padStart(2, '0')}
        </span>
        <div className="w-32 h-[3px] bg-pr-gray-light/60 rounded-full overflow-hidden">
          <div
            className="h-full bg-pr-orange transition-all duration-300"
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
          className="h-8 px-2 text-pr-gray-dark hover:text-pr-orange-dark hover:bg-pr-orange-pale disabled:opacity-30"
        >
          <ArrowLeft className="h-4 w-4" />
          <span className="sr-only">Précédent</span>
        </Button>
        <Button
          variant="ghost"
          size="sm"
          onClick={onNext}
          disabled={!hasNext}
          className="h-8 px-2 text-pr-gray-dark hover:text-pr-orange-dark hover:bg-pr-orange-pale disabled:opacity-30"
        >
          <ArrowRight className="h-4 w-4" />
          <span className="sr-only">Suivant</span>
        </Button>
      </div>
    </div>
  </div>
);

/* -------------------------------------------------------------------------- */
/*  PythonExerciseDetailHeader — gros titre + difficulté en vue détail        */
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
    <div className="mb-8 pb-6 border-b border-pr-gray-light/60">
      <div className="text-[11px] uppercase tracking-[0.12em] font-semibold text-pr-orange mb-3">
        Exercice {String(number).padStart(2, '0')}
      </div>
      <h1 className="font-dm-serif text-3xl md:text-4xl text-pr-black leading-tight tracking-tight mb-3">
        {cleanedTitle}
      </h1>
      <div className="flex flex-wrap items-center gap-2">
        {difficulty && (
          <span className="inline-flex items-center text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-orange-dark bg-pr-orange-pale border border-pr-orange-soft/40 rounded-full px-2.5 py-1">
            {difficulty}
          </span>
        )}
        {badges?.map((b) => (
          <span
            key={b}
            className="inline-flex items-center text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-gray-dark bg-pr-gray-bg border border-pr-gray-light rounded-full px-2.5 py-1"
          >
            {b}
          </span>
        ))}
      </div>
    </div>
  );
};

/* -------------------------------------------------------------------------- */
/*  PythonExerciseFooterNav — barre prev/next en bas de la vue détail         */
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
  <div className="mt-12 pt-6 border-t border-pr-gray-light/60">
    <div className="flex items-center justify-between gap-3">
      <Button
        variant="outline"
        onClick={onPrev}
        disabled={!hasPrev}
        className="rounded-xl border-pr-gray-light text-pr-gray-dark hover:bg-pr-orange-pale hover:text-pr-orange-dark hover:border-pr-orange-soft disabled:opacity-40 disabled:hover:bg-transparent disabled:hover:text-pr-gray-dark"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        Précédent
      </Button>

      <div className="text-[11px] uppercase tracking-[0.12em] font-semibold text-pr-gray-mid">
        {String(current).padStart(2, '0')} <span className="text-pr-gray-light">/</span> {String(total).padStart(2, '0')}
      </div>

      <Button
        variant="outline"
        onClick={onNext}
        className="rounded-xl border-pr-gray-light text-pr-gray-dark hover:bg-pr-orange-pale hover:text-pr-orange-dark hover:border-pr-orange-soft"
      >
        {hasNext ? 'Suivant' : 'Retour'}
        <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  </div>
);

/* -------------------------------------------------------------------------- */
/*  PythonStatementCard — carte qui affiche l'énoncé d'un exercice            */
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
    <Card
      className={cn(
        'mb-6 bg-white border border-pr-gray-light rounded-2xl shadow-none overflow-hidden relative',
        className
      )}
    >
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-pr-orange" />
      <div className="px-6 md:px-8 pt-6 pb-3 flex items-center gap-2.5">
        <Icon className="h-4 w-4 text-pr-orange" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-orange-dark">
          {label}
        </span>
      </div>
      <CardContent className="px-6 md:px-8 pb-6 pt-0">
        <div
          className="text-pr-gray-dark text-base leading-[1.75]"
          style={{
            wordWrap: 'break-word',
            overflowWrap: 'break-word',
          }}
        >
          {children}
        </div>
      </CardContent>
    </Card>
  );
};

/* -------------------------------------------------------------------------- */
/*  PythonCorrectionToggle — bouton pour révéler la correction                */
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
        'rounded-xl px-6 py-5 h-auto text-sm font-semibold transition-all',
        isOpen
          ? 'border-pr-gray-light text-pr-gray-dark bg-pr-gray-bg hover:bg-pr-gray-light/40'
          : 'border-pr-orange-soft text-pr-orange-dark bg-white hover:bg-pr-orange-pale hover:border-pr-orange'
      )}
    >
      {isOpen ? (
        <>
          <ChevronUp className="h-4 w-4 mr-2" />
          {labelOpen}
        </>
      ) : (
        <>
          <ChevronDown className="h-4 w-4 mr-2" />
          {labelClosed}
        </>
      )}
    </Button>
  </div>
);

/* -------------------------------------------------------------------------- */
/*  PythonCorrectionPanel — panneau qui affiche la correction (code + texte)  */
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
    <Card className="bg-white border border-pr-gray-light rounded-2xl shadow-none overflow-hidden relative">
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-pr-orange" />
      <div className="px-6 md:px-8 pt-6 pb-3 flex items-center gap-2.5 border-b border-pr-gray-light/40">
        <CheckCircle className="h-4 w-4 text-pr-orange" />
        <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-orange-dark">
          {title}
        </span>
      </div>
      <CardContent className="p-0">{children}</CardContent>
    </Card>
  </div>
);

/* -------------------------------------------------------------------------- */
/*  PythonCodeBlock — bloc de code Python sombre, signature PR                */
/* -------------------------------------------------------------------------- */

export interface PythonCodeBlockProps {
  code: string;
  caption?: string;
}

export const PythonCodeBlock: React.FC<PythonCodeBlockProps> = ({ code, caption }) => (
  <div className="bg-pr-black text-pr-orange-pale overflow-x-auto">
    {caption && (
      <div className="px-6 md:px-8 pt-4 pb-2 text-[10px] uppercase tracking-[0.12em] font-semibold text-pr-orange-pale/70">
        {caption}
      </div>
    )}
    <pre className="px-6 md:px-8 py-5 text-[13px] md:text-sm font-mono leading-[1.75] whitespace-pre">
      <code>{code}</code>
    </pre>
  </div>
);

/* -------------------------------------------------------------------------- */
/*  PythonExerciseGrid + PythonExerciseCard — liste des exercices             */
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

export const PythonExerciseGrid: React.FC<PythonExerciseGridProps> = ({
  exercises,
  onSelect,
}) => (
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

const PythonExerciseCard: React.FC<PythonExerciseCardInternalProps> = ({
  exercise,
  onClick,
  tilt,
}) => {
  const cleanedTitle = exercise.title.includes(' - ')
    ? exercise.title.split(' - ').slice(1).join(' - ')
    : exercise.title;

  return (
    <button
      onClick={onClick}
      className={cn(
        'group relative text-left bg-white border border-pr-gray-light rounded-2xl p-6 transition-all duration-300 hover:border-pr-orange-soft hover:-translate-y-0.5 hover:shadow-[0_8px_30px_rgb(0,0,0,0.05)] flex flex-col h-full overflow-hidden',
        tilt === 'l' && 'carnet-tilt-l',
        tilt === 'r' && 'carnet-tilt-r',
      )}
    >
      <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-pr-orange opacity-0 group-hover:opacity-100 transition-opacity" />

      <div className="flex items-start justify-between mb-5">
        <div className="font-dm-serif text-4xl text-pr-orange leading-none">
          {String(exercise.id).padStart(2, '0')}
        </div>
        {exercise.difficulty && (
          <span className="inline-flex items-center text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-gray-dark bg-pr-gray-bg border border-pr-gray-light rounded-full px-2.5 py-1">
            {exercise.difficulty}
          </span>
        )}
      </div>

      <h3 className="font-dm-serif text-xl text-pr-black leading-tight mb-2 group-hover:text-pr-orange-dark transition-colors">
        {cleanedTitle}
      </h3>

      {exercise.description && (
        <p className="text-sm text-pr-gray-dark/80 leading-relaxed line-clamp-3 mb-6">
          {exercise.description}
        </p>
      )}

      <div className="mt-auto flex items-center gap-1.5 text-[11px] uppercase tracking-[0.12em] font-semibold text-pr-orange-dark group-hover:gap-2.5 transition-all">
        Commencer
        <ArrowRight className="h-3 w-3" />
      </div>
    </button>
  );
};

/* -------------------------------------------------------------------------- */
/*  PythonQCMLauncher — carte cliquable pour lancer le QCM                    */
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
    className={cn(
      'group relative w-full text-left bg-white border border-pr-gray-light rounded-2xl p-6 md:p-7 mb-10 transition-all duration-300 hover:border-pr-orange-soft hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden',
      className
    )}
  >
    <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-pr-orange" />
    <div className="flex items-center gap-5">
      <div className="w-12 h-12 rounded-xl bg-pr-orange-pale border border-pr-orange-soft/40 flex items-center justify-center flex-shrink-0">
        <Trophy className="h-5 w-5 text-pr-orange-dark" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-[10px] uppercase tracking-[0.12em] font-semibold text-pr-orange-dark mb-1">
          Évaluation
        </div>
        <h3 className="font-dm-serif text-xl text-pr-black mb-1 group-hover:text-pr-orange-dark transition-colors">
          {title}
        </h3>
        <p className="text-sm text-pr-gray-dark/80">
          {description} · <span className="font-semibold">{questionCount} questions</span>
        </p>
      </div>
      <div className="hidden md:inline-flex items-center gap-1.5 text-[11px] uppercase tracking-[0.12em] font-semibold text-pr-orange-dark group-hover:gap-2.5 transition-all">
        Commencer
        <ArrowRight className="h-3 w-3" />
      </div>
    </div>
  </button>
);

/* -------------------------------------------------------------------------- */
/*  PythonSectionHeading — titre interne de section avec trait orange         */
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
      <div className="text-[10px] uppercase tracking-[0.12em] font-semibold text-pr-orange-dark mb-2">
        {label}
      </div>
    )}
    <h2 className="font-dm-serif text-2xl md:text-3xl text-pr-black leading-tight tracking-tight pl-3 border-l-[3px] border-pr-orange">
      {title}
    </h2>
  </div>
);
