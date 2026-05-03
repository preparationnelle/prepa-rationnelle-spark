import React, { useState } from 'react';
import { AlertTriangle, ChevronDown, Code } from 'lucide-react';
import { cn } from '@/lib/utils';
import {
  Table,
  TableHeader,
  TableBody,
  TableHead,
  TableRow,
  TableCell,
} from '@/components/ui/table';

// ─── Types communs ───────────────────────────────────────────────

interface AcademicBlockProps {
  number?: string;
  title?: string;
  children: React.ReactNode;
  className?: string;
}

interface TheoremBlockProps extends AcademicBlockProps {
  variant?: 'theorem' | 'proposition' | 'lemma';
}

interface CodeBlockProps {
  code: string;
  language?: string;
  title?: string;
  collapsible?: boolean;
  defaultOpen?: boolean;
  className?: string;
}

interface TruthTableProps {
  headers: React.ReactNode[];
  rows: React.ReactNode[][];
  caption?: string;
  className?: string;
}

interface ExerciseBlockProps {
  number?: string;
  title?: string;
  children: React.ReactNode;
  solution?: React.ReactNode;
  className?: string;
}

interface FlashcardBlockProps {
  category?: string;
  difficulty?: 'facile' | 'moyen' | 'difficile';
  question: React.ReactNode;
  answer: React.ReactNode;
  onNext?: () => void;
  onPrev?: () => void;
  currentCardIndex?: number;
  totalCards?: number;
  className?: string;
}

// ─── Helpers ─────────────────────────────────────────────────────

const blockLabel = (type: string, number?: string, title?: string) => {
  const parts = [type];
  if (number) parts[0] += ` ${number}`;
  if (title) parts.push(title);
  return parts.join(' — ');
};

// ─── DefinitionBlock ─────────────────────────────────────────────

export const DefinitionBlock: React.FC<AcademicBlockProps> = ({
  number,
  title,
  children,
  className,
}) => (
  <div
    className={cn(
      'border-l-4 border-emerald-500 bg-emerald-50/30 pl-5 pr-4 py-4 my-6',
      className
    )}
  >
    <p className="text-xs font-bold uppercase tracking-wide text-emerald-700 mb-2">
      {blockLabel('Définition', number, title)}
    </p>
    <div className="text-slate-700 leading-relaxed text-[0.95rem]">{children}</div>
  </div>
);

// ─── TheoremBlock ────────────────────────────────────────────────

const variantLabels: Record<string, string> = {
  theorem: 'Théorème',
  proposition: 'Proposition',
  lemma: 'Lemme',
};

export const TheoremBlock: React.FC<TheoremBlockProps> = ({
  variant = 'theorem',
  number,
  title,
  children,
  className,
}) => (
  <div
    className={cn(
      'border-l-4 border-indigo-500 bg-indigo-50/30 pl-5 pr-4 py-4 my-6',
      className
    )}
  >
    <p className="text-xs font-bold uppercase tracking-wide text-indigo-700 mb-2">
      {blockLabel(variantLabels[variant] || 'Théorème', number, title)}
    </p>
    <div className="text-slate-800 leading-relaxed italic text-[0.95rem]">{children}</div>
  </div>
);

// ─── ExampleBlock ────────────────────────────────────────────────

export const ExampleBlock: React.FC<AcademicBlockProps> = ({
  number,
  title,
  children,
  className,
}) => (
  <div
    className={cn(
      'border-l-2 border-slate-300 pl-5 py-2 my-6',
      className
    )}
  >
    <p className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-1">
      {blockLabel('Exemple', number, title)}
    </p>
    <div className="text-slate-600 leading-relaxed text-sm">{children}</div>
  </div>
);

// ─── ProofBlock ──────────────────────────────────────────────────

export const ProofBlock: React.FC<AcademicBlockProps> = ({
  title,
  children,
  className,
}) => (
  <div
    className={cn(
      'pl-5 py-2 my-4 text-sm',
      className
    )}
  >
    <p className="font-semibold italic text-slate-500 mb-1">
      {title || 'Démonstration.'}
    </p>
    <div className="text-slate-600 leading-relaxed">{children}</div>
    <div className="text-right mt-1 text-slate-300 text-xs select-none">∎</div>
  </div>
);

// ─── RemarkBlock ─────────────────────────────────────────────────

export const RemarkBlock: React.FC<AcademicBlockProps> = ({
  number,
  title,
  children,
  className,
}) => (
  <div
    className={cn(
      'bg-slate-50 rounded px-5 py-4 my-6 border border-slate-100',
      className
    )}
  >
    <p className="text-xs font-bold uppercase tracking-wide text-slate-500 mb-2">
      {blockLabel('Remarque', number, title)}
    </p>
    <div className="text-slate-600 leading-relaxed text-sm">{children}</div>
  </div>
);

// ─── WarningBlock ────────────────────────────────────────────────

export const WarningBlock: React.FC<AcademicBlockProps> = ({
  title,
  children,
  className,
}) => (
  <div
    className={cn(
      'border-l-4 border-red-400 bg-red-50/30 pl-5 pr-4 py-4 my-6',
      className
    )}
  >
    <div className="flex items-center gap-2 mb-2">
      <AlertTriangle className="h-4 w-4 text-red-500" />
      <p className="text-xs font-bold uppercase tracking-wide text-red-600">
        {title || 'Attention'}
      </p>
    </div>
    <div className="text-slate-700 leading-relaxed text-sm">{children}</div>
  </div>
);

// ─── CodeBlock ───────────────────────────────────────────────────

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'python',
  title,
  collapsible = false,
  defaultOpen = true,
  className,
}) => {
  const [isOpen, setIsOpen] = useState(defaultOpen);

  return (
    <div className={cn('rounded border border-slate-200 overflow-hidden my-6', className)}>
      <div
        className={cn(
          'bg-slate-50 px-4 py-2 flex items-center justify-between border-b border-slate-100',
          collapsible && 'cursor-pointer hover:bg-slate-100 transition-colors'
        )}
        onClick={collapsible ? () => setIsOpen(!isOpen) : undefined}
      >
        <div className="flex items-center gap-2">
          <Code className="h-3.5 w-3.5 text-slate-500" />
          <span className="text-xs font-semibold text-slate-600 uppercase tracking-wider">
            {title || language}
          </span>
        </div>
        {collapsible && (
          <ChevronDown
            className={cn(
              'h-4 w-4 text-slate-400 transition-transform duration-200',
              isOpen && 'rotate-180'
            )}
          />
        )}
      </div>
      {(!collapsible || isOpen) && (
        <pre className="bg-[#1e1e1e] text-slate-200 p-4 overflow-x-auto text-sm leading-relaxed font-mono">
          <code>{code}</code>
        </pre>
      )}
    </div>
  );
};

// ─── TruthTable ──────────────────────────────────────────────────

export const TruthTable: React.FC<TruthTableProps> = ({
  headers,
  rows,
  caption,
  className,
}) => (
  <div className={cn('my-8 mx-auto max-w-lg', className)}>
    <div className="rounded border border-slate-200 overflow-hidden shadow-sm">
      <Table>
        <TableHeader>
          <TableRow className="bg-slate-50 border-b border-slate-200">
            {headers.map((header, i) => (
              <TableHead
                key={i}
                className="text-center h-10 font-bold text-slate-700 border-r border-slate-200 last:border-r-0"
              >
                {header}
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i} className="hover:bg-slate-50/30">
              {row.map((cell, j) => {
                const cellStr = typeof cell === 'string' ? cell : '';
                const isTrue = cellStr === 'V';
                const isFalse = cellStr === 'F';
                return (
                  <TableCell
                    key={j}
                    className={cn(
                      'text-center py-2 border-r border-slate-100 last:border-r-0 font-medium',
                      isTrue && 'text-emerald-700 bg-emerald-50/30',
                      isFalse && 'text-red-700 bg-red-50/30'
                    )}
                  >
                    {cell}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
    {caption && (
      <p className="text-center text-xs text-slate-500 mt-2 font-medium">
        {caption}
      </p>
    )}
  </div>
);

// ─── ExerciseBlock ───────────────────────────────────────────────

export const ExerciseBlock: React.FC<ExerciseBlockProps> = ({
  number,
  title,
  children,
  solution,
  className,
}) => {
  const [showSolution, setShowSolution] = useState(false);

  return (
    <div className={cn('border border-slate-200 rounded-lg p-6 my-8 shadow-sm bg-white', className)}>
      <div className="flex items-baseline gap-3 mb-4">
        {number && (
          <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wide">
            Exercice {number}
          </h3>
        )}
        {title && <span className="text-slate-500 font-medium text-sm">— {title}</span>}
      </div>

      <div className="text-slate-700 leading-relaxed mb-6 text-[0.95rem]">
        {children}
      </div>

      {solution && (
        <div className="border-t border-slate-100 pt-4">
          <button
            onClick={() => setShowSolution(!showSolution)}
            className="flex items-center gap-2 text-sm font-semibold text-emerald-600 hover:text-emerald-700 transition-colors focus:outline-none"
          >
            <ChevronDown
              className={cn(
                'h-4 w-4 transition-transform duration-200',
                showSolution && 'rotate-180'
              )}
            />
            {showSolution ? 'Masquer la correction' : 'Voir la correction'}
          </button>

          {showSolution && (
            <div className="mt-4 bg-slate-50 border border-slate-100 rounded-md p-4 text-slate-700 text-sm leading-relaxed">
              {solution}
            </div>
          )}
        </div>
      )}
    </div>
  );
};

// ─── FlashcardBlock ──────────────────────────────────────────────

export const FlashcardBlock: React.FC<FlashcardBlockProps> = ({
  category,
  difficulty,
  question,
  answer,
  onNext,
  onPrev,
  currentCardIndex,
  totalCards,
  className,
}) => {
  const [isFlipped, setIsFlipped] = useState(false);

  // Reset flip state when question changes (new card)
  React.useEffect(() => {
    setIsFlipped(false);
  }, [question, answer]);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  return (
    <div className={cn('mx-auto max-w-4xl px-4 select-none mb-12', className)}>

      {/* Meta Header */}
      <div className="flex items-center justify-between mb-8 text-xs font-medium tracking-widest text-slate-400 uppercase">
        <div className="flex items-center gap-4">
          {category && (
            <span>{category}</span>
          )}
          {difficulty && (
            <>
              <span className="w-1 h-1 rounded-full bg-slate-300" />
              <span>{difficulty}</span>
            </>
          )}
        </div>
        {(currentCardIndex !== undefined && totalCards) && (
          <span className="font-mono text-slate-300">
            {currentCardIndex + 1} / {totalCards}
          </span>
        )}
      </div>

      {/* Card Container */}
      <div
        className="relative w-full min-h-[450px] cursor-pointer group perspective-1000"
        onClick={handleFlip}
      >
        <div className={cn(
          "relative w-full h-full transition-all duration-500 transform-style-3d",
          isFlipped && "rotate-y-180"
        )}>

          {/* Common Card Styles */}
          <div className={cn(
            "absolute inset-0 backface-hidden w-full h-full",
            "bg-white rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100",
            "flex flex-col items-center justify-center p-8 md:p-16",
            "transition-shadow duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
          )}>
            {/* Front Content */}
            {!isFlipped && (
              <>
                <div className="flex-1 flex flex-col items-center justify-center w-full">
                  <div className="text-xl md:text-3xl font-serif text-slate-800 text-center leading-relaxed max-w-3xl">
                    {question}
                  </div>
                </div>
                <div className="mt-8 text-[10px] font-medium tracking-widest text-slate-300 uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Cliquer pour révéler
                </div>
              </>
            )}
          </div>

          <div className={cn(
            "absolute inset-0 backface-hidden w-full h-full rotate-y-180",
            "bg-slate-50 rounded-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-slate-100",
            "flex flex-col items-center justify-center p-8 md:p-16",
            "transition-shadow duration-300 hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)]"
          )}>
            {/* Back Content */}
            {isFlipped && (
              <>
                <div className="flex-1 flex flex-col items-center justify-center w-full">
                  <div className="text-lg md:text-2xl text-slate-700 text-center leading-relaxed font-medium max-w-3xl">
                    {answer}
                  </div>
                </div>
                <div className="mt-8 text-[10px] font-medium tracking-widest text-slate-300 uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Cliquer pour retourner
                </div>
              </>
            )}
          </div>

        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-12 mt-12">
        <button
          onClick={(e) => { e.stopPropagation(); onPrev?.(); }}
          disabled={!onPrev}
          className="group p-2 text-slate-300 hover:text-slate-800 transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
          title="Précédent"
        >
          <ChevronDown className="h-6 w-6 rotate-90 stroke-[1.5]" />
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); handleFlip(); }}
          className="text-xs font-medium tracking-widest uppercase text-slate-400 hover:text-slate-800 transition-colors py-2 px-4"
        >
          {isFlipped ? 'Question' : 'Réponse'}
        </button>

        <button
          onClick={(e) => { e.stopPropagation(); onNext?.(); }}
          disabled={!onNext}
          className="group p-2 text-slate-300 hover:text-slate-800 transition-colors disabled:opacity-20 disabled:cursor-not-allowed"
          title="Suivant"
        >
          <ChevronDown className="h-6 w-6 -rotate-90 stroke-[1.5]" />
        </button>
      </div>

      <div className="text-center mt-8 text-[10px] text-slate-200 font-medium uppercase tracking-widest">
        Navigation Clavier
      </div>

    </div>
  );
};
