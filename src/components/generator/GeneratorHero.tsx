import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, LucideIcon } from 'lucide-react';

interface GeneratorHeroProps {
  badge?: string;
  badgeIcon?: LucideIcon;
  title: string;
  highlight?: string;
  subtitle?: string;
  breadcrumb?: string;
}

/**
 * Hero d'en-tête réutilisable pour les pages de générateur.
 * Charte Prépa Rationnelle : fond clair, DM Serif Display titre, trait noir signature.
 */
export const GeneratorHero: React.FC<GeneratorHeroProps> = ({
  badge,
  badgeIcon: BadgeIcon,
  title,
  highlight,
  subtitle,
  breadcrumb,
}) => {
  return (
    <div className="max-w-3xl mx-auto text-center">
      {breadcrumb && (
        <nav className="flex items-center justify-center gap-1.5 text-xs text-pr-gray-mid mb-6 font-dm-sans">
          <Link to="/" className="hover:text-pr-black transition-colors">Accueil</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/generator" className="hover:text-pr-black transition-colors">Générateurs</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-pr-black font-medium">{breadcrumb}</span>
        </nav>
      )}

      {badge && (
        <div className="inline-flex items-center gap-2 bg-pr-gray-bg text-pr-black px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.08em] mb-6 font-dm-sans">
          {BadgeIcon && <BadgeIcon className="h-3.5 w-3.5" />}
          {badge}
        </div>
      )}

      <h1 className="font-dm-serif text-4xl sm:text-5xl lg:text-6xl text-pr-black mb-5 leading-[1.05]">
        {title}
        {highlight && (
          <>
            {' '}
            <span className="text-pr-black">{highlight}</span>
          </>
        )}
      </h1>

      <div className="flex justify-center mb-6">
        <div className="h-[3px] w-14 bg-pr-black rounded-full" />
      </div>

      {subtitle && (
        <p className="text-base sm:text-lg text-pr-gray-dark font-dm-sans leading-relaxed max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </div>
  );
};

export default GeneratorHero;
