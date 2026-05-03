import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, LucideIcon } from 'lucide-react';

type PRTopicCardProps = {
  to: string;
  title: string;
  description?: string;
  Icon?: LucideIcon;
  small?: boolean;
};

/**
 * Compact topic card — used in dense grids (civilisation chapters, vocab themes).
 * Charter: minimal, icône orange-pale, trait orange à gauche au hover.
 */
export const PRTopicCard: React.FC<PRTopicCardProps> = ({
  to,
  title,
  description,
  Icon,
  small = false,
}) => {
  return (
    <Link
      to={to}
      className="group relative block bg-white border border-pr-gray-light rounded-xl p-5 transition-all duration-300 hover:border-pr-orange hover:shadow-[0_4px_16px_rgba(244,132,95,0.08)] h-full"
    >
      <span className="absolute top-0 bottom-0 left-0 w-[3px] bg-pr-orange opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-l-xl" />

      <div className="flex items-start gap-4">
        {Icon && (
          <div className={`flex-shrink-0 ${small ? 'w-10 h-10' : 'w-11 h-11'} rounded-lg bg-pr-orange-pale flex items-center justify-center group-hover:bg-pr-orange-soft transition-colors`}>
            <Icon className={`${small ? 'h-5 w-5' : 'h-5 w-5'} text-pr-orange-dark`} />
          </div>
        )}
        <div className="flex-1 min-w-0">
          <h3 className={`font-dm-serif ${small ? 'text-base' : 'text-lg'} text-pr-black mb-1 leading-tight flex items-center gap-2`}>
            <span>{title}</span>
            <ArrowRight className="h-3.5 w-3.5 text-pr-gray-mid opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
          </h3>
          {description && (
            <p className="text-xs text-pr-gray-mid leading-relaxed">{description}</p>
          )}
        </div>
      </div>
    </Link>
  );
};

export default PRTopicCard;
