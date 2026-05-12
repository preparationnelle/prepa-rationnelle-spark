import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, LucideIcon } from 'lucide-react';

type PRHubCardProps = {
  to: string;
  number?: number | string;
  Icon?: LucideIcon;
  title: string;
  description: string;
  bullets?: string[];
  cta?: string;
};

/**
 * Hub card — used on formation landing pages.
 * Carnet design: white card, gray border, orange accent on hover.
 * Supports number + icon together (number top-left, icon below).
 */
export const PRHubCard: React.FC<PRHubCardProps> = ({
  to,
  number,
  Icon,
  title,
  description,
  bullets,
  cta = 'Découvrir',
}) => {
  return (
    <Link
      to={to}
      className="group relative block bg-carnet-paper-2 border border-carnet-rule rounded-2xl p-7 transition-all duration-300 hover:border-pr-orange hover:shadow-[0_4px_16px_rgba(193,68,58,0.10)] hover:-translate-y-1 flex flex-col h-full overflow-hidden"
    >
      <span className="absolute top-0 left-0 right-0 h-[3px] bg-pr-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {number !== undefined && (
        <span className="font-dm-serif text-pr-orange text-3xl leading-none mb-3">
          {typeof number === 'number' ? String(number).padStart(2, '0') : number}
        </span>
      )}

      {Icon && (
        <div className="w-12 h-12 rounded-xl bg-pr-orange-pale flex items-center justify-center mb-5 group-hover:bg-pr-orange-soft/40 transition-colors">
          <Icon className="h-6 w-6 text-pr-orange-dark" />
        </div>
      )}

      <h3 className="font-dm-serif text-2xl text-pr-black mb-2 leading-tight">{title}</h3>
      <p className="text-sm text-pr-gray-dark/80 leading-relaxed">{description}</p>

      {bullets && bullets.length > 0 && (
        <ul className="mt-4 space-y-2 pt-4 border-t border-pr-gray-light/70">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-pr-gray-mid">
              <span className="text-pr-orange mt-[2px]">→</span>
              <span className="leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
      )}

      <span className="mt-auto pt-5 inline-flex items-center gap-1 text-xs font-semibold uppercase tracking-[0.12em] text-pr-orange-dark">
        {cta}
        <ArrowRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
};

export default PRHubCard;
