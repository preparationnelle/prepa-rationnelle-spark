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
};

/**
 * Big hub card — used on the 4-module landing (vocab/grammar/civ/methodo).
 * Charter: white card, 0.5px gray border, orange accent line on hover, generous padding.
 */
export const PRHubCard: React.FC<PRHubCardProps> = ({
  to,
  number,
  Icon,
  title,
  description,
  bullets,
}) => {
  return (
    <Link
      to={to}
      className="group relative block bg-white border border-pr-gray-light rounded-2xl p-8 transition-all duration-300 hover:border-pr-orange hover:shadow-[0_8px_30px_rgba(244,132,95,0.12)] flex flex-col"
    >
      {/* Trait orange signature en haut, visible au hover */}
      <span className="absolute top-0 left-8 right-8 h-[2px] bg-pr-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

      {/* Numéro décoratif OU icône */}
      <div className="flex items-center justify-between mb-6">
        {number !== undefined ? (
          <span className="font-dm-serif text-5xl text-pr-orange leading-none">{number}</span>
        ) : Icon ? (
          <div className="w-12 h-12 rounded-xl bg-pr-orange-pale flex items-center justify-center">
            <Icon className="h-6 w-6 text-pr-orange-dark" />
          </div>
        ) : (
          <span />
        )}
        <ArrowRight className="h-4 w-4 text-pr-gray-mid opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
      </div>

      <h3 className="font-dm-serif text-2xl text-pr-black mb-3 leading-tight">{title}</h3>
      <p className="text-sm text-pr-gray-dark/80 leading-relaxed mb-5">{description}</p>

      {bullets && bullets.length > 0 && (
        <ul className="mt-auto space-y-2 pt-4 border-t border-pr-gray-light/70">
          {bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-xs text-pr-gray-mid">
              <span className="text-pr-orange mt-[2px]">→</span>
              <span className="leading-relaxed">{b}</span>
            </li>
          ))}
        </ul>
      )}
    </Link>
  );
};

export default PRHubCard;
