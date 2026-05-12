import React from 'react';
import { LucideIcon, AlertTriangle, Lightbulb, BookOpen, Info } from 'lucide-react';

type PRGrammarCardProps = {
  title?: string;
  number?: string | number;
  children: React.ReactNode;
  className?: string;
};

export const PRGrammarCard: React.FC<PRGrammarCardProps> = ({ title, number, children, className = '' }) => (
  <div className={`bg-carnet-paper-2 border border-pr-gray-light rounded-2xl overflow-hidden ${className}`}>
    <div className="h-[2px] bg-pr-orange" />
    <div className="p-6 sm:p-8">
      {(title || number) && (
        <div className="flex items-baseline gap-4 mb-5">
          {number !== undefined && (
            <span className="font-dm-serif text-3xl text-pr-orange leading-none">
              {typeof number === 'number' ? number.toString().padStart(2, '0') : number}
            </span>
          )}
          {title && (
            <h2 className="font-dm-serif text-2xl text-pr-black leading-tight">{title}</h2>
          )}
        </div>
      )}
      <div className="space-y-5 text-pr-gray-dark/90 leading-relaxed">{children}</div>
    </div>
  </div>
);

type PRGrammarRuleProps = {
  title: string;
  structure?: string;
  uses?: string[];
  examples?: { en: string; fr?: string }[];
  notes?: string[];
};

export const PRGrammarRule: React.FC<PRGrammarRuleProps> = ({
  title,
  structure,
  uses,
  examples,
  notes,
}) => (
  <section className="border-l-2 border-pr-orange-pale pl-5">
    <h3 className="font-dm-serif text-lg text-pr-black mb-3">{title}</h3>
    {structure && (
      <p className="mb-3">
        <span className="text-[10px] font-dm-sans font-semibold uppercase tracking-[0.12em] text-pr-orange-dark mr-2">
          Structure
        </span>
        <span className="font-mono text-sm text-pr-black">{structure}</span>
      </p>
    )}
    {uses && uses.length > 0 && (
      <div className="mb-3">
        <div className="text-[10px] font-dm-sans font-semibold uppercase tracking-[0.12em] text-pr-orange-dark mb-1.5">
          Utilisations
        </div>
        <ul className="space-y-1.5">
          {uses.map((u, i) => (
            <li key={i} className="flex gap-2 text-sm">
              <span className="text-pr-orange mt-[2px]">→</span>
              <span>{u}</span>
            </li>
          ))}
        </ul>
      </div>
    )}
    {examples && examples.length > 0 && (
      <div className="mb-3">
        <div className="text-[10px] font-dm-sans font-semibold uppercase tracking-[0.12em] text-pr-orange-dark mb-1.5">
          Exemples
        </div>
        <ul className="space-y-1.5">
          {examples.map((ex, i) => (
            <li key={i} className="text-sm">
              <span className="text-pr-black font-medium">{ex.en}</span>
              {ex.fr && <span className="text-pr-gray-mid"> — {ex.fr}</span>}
            </li>
          ))}
        </ul>
      </div>
    )}
    {notes && notes.length > 0 && (
      <ul className="space-y-1 text-sm text-pr-gray-mid italic">
        {notes.map((n, i) => (
          <li key={i}>{n}</li>
        ))}
      </ul>
    )}
  </section>
);

type CalloutKind = 'info' | 'tip' | 'warning' | 'definition';

const calloutConfig: Record<CalloutKind, { Icon: LucideIcon; label: string }> = {
  info: { Icon: Info, label: 'Note' },
  tip: { Icon: Lightbulb, label: 'Astuce' },
  warning: { Icon: AlertTriangle, label: 'Attention' },
  definition: { Icon: BookOpen, label: 'Définition' },
};

export const PRGrammarCallout: React.FC<{
  kind?: CalloutKind;
  title?: string;
  children: React.ReactNode;
}> = ({ kind = 'tip', title, children }) => {
  const { Icon, label } = calloutConfig[kind];
  return (
    <div className="bg-pr-orange-pale/40 border border-pr-orange-pale rounded-xl p-5 flex gap-4">
      <div className="flex-shrink-0 w-9 h-9 rounded-lg bg-pr-orange-pale flex items-center justify-center">
        <Icon className="h-4 w-4 text-pr-orange-dark" />
      </div>
      <div className="flex-1">
        <div className="text-[10px] font-dm-sans font-semibold uppercase tracking-[0.12em] text-pr-orange-dark mb-1">
          {title ?? label}
        </div>
        <div className="text-sm text-pr-gray-dark/90 leading-relaxed">{children}</div>
      </div>
    </div>
  );
};

export const PRGrammarTable: React.FC<{
  headers: string[];
  rows: (string | React.ReactNode)[][];
}> = ({ headers, rows }) => (
  <div className="overflow-x-auto rounded-xl border border-pr-gray-light">
    <table className="w-full text-sm">
      <thead className="bg-pr-orange-pale/30">
        <tr>
          {headers.map((h, i) => (
            <th
              key={i}
              className="text-left text-[10px] font-dm-sans font-semibold uppercase tracking-[0.12em] text-pr-orange-dark px-4 py-3 border-b border-pr-gray-light"
            >
              {h}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, ri) => (
          <tr key={ri} className="border-b border-pr-gray-light/60 last:border-0">
            {row.map((cell, ci) => (
              <td key={ci} className="px-4 py-3 text-pr-gray-dark/90">
                {cell}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);
