import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type Action = {
  label: string;
  to: string;
};

type PRChapterRowProps = {
  number: number;
  to: string;
  title: string;
  description?: string;
  primaryActionLabel?: string;
  actions?: Action[];
};

/**
 * Chapter row — used on grammar/methodology pages.
 * Charter: numéro orange en DM Serif Display, fond blanc, trait orange à gauche au hover.
 */
export const PRChapterRow: React.FC<PRChapterRowProps> = ({
  number,
  to,
  title,
  description,
  primaryActionLabel = 'Étudier ce chapitre',
  actions = [],
}) => {
  return (
    <div className="group relative bg-carnet-paper-2 border border-carnet-rule rounded-xl transition-all duration-300 hover:border-pr-orange hover:shadow-[0_4px_16px_rgba(193,68,58,0.08)] overflow-hidden">
      {/* Trait orange à gauche, visible au hover */}
      <span className="absolute top-0 bottom-0 left-0 w-[3px] bg-pr-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      <div className="flex items-start gap-6 p-6 sm:p-7">
        {/* Numéro décoratif */}
        <div className="flex-shrink-0">
          <span className="font-dm-serif text-5xl text-pr-orange leading-none">
            {number.toString().padStart(2, '0')}
          </span>
        </div>

        <div className="flex-1 min-w-0">
          <Link to={to} className="block group/title">
            <h3 className="font-dm-serif text-xl sm:text-2xl text-pr-black mb-2 leading-tight group-hover/title:text-pr-orange-dark transition-colors">
              {title}
            </h3>
          </Link>

          {description && (
            <p className="text-sm text-pr-gray-dark/80 leading-relaxed mb-4">{description}</p>
          )}

          <div className="flex flex-wrap gap-2 items-center">
            <Link
              to={to}
              className="inline-flex items-center gap-1.5 bg-pr-orange hover:bg-pr-orange-dark text-white text-xs font-dm-sans font-semibold uppercase tracking-[0.08em] px-4 py-2 rounded-md transition-colors"
            >
              {primaryActionLabel}
              <ArrowRight className="h-3 w-3" />
            </Link>

            {actions.map((a) => (
              <Link
                key={a.to}
                to={a.to}
                className="inline-flex items-center gap-1.5 bg-pr-orange-pale hover:bg-pr-orange-soft text-pr-orange-dark text-xs font-dm-sans font-semibold uppercase tracking-[0.08em] px-4 py-2 rounded-md transition-colors"
              >
                {a.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PRChapterRow;
