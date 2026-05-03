import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, LucideIcon } from 'lucide-react';

type Crumb = { label: string; to?: string };

type PRFormationLayoutProps = {
  crumbs: Crumb[];
  badge?: string;
  title: string;
  titleAccent?: string;
  subtitle?: string;
  Icon?: LucideIcon;
  children: React.ReactNode;
};

export const PRFormationLayout: React.FC<PRFormationLayoutProps> = ({
  crumbs,
  badge,
  title,
  titleAccent,
  subtitle,
  Icon,
  children,
}) => {
  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans text-pr-gray-dark">
      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/70 border-b border-pr-gray-light/70">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-[11px] uppercase tracking-[0.08em] text-pr-gray-mid font-dm-sans font-semibold">
            {crumbs.map((c, i) => (
              <React.Fragment key={i}>
                {c.to ? (
                  <Link to={c.to} className="hover:text-pr-orange-dark transition-colors">
                    {c.label}
                  </Link>
                ) : (
                  <span className="text-pr-black">{c.label}</span>
                )}
                {i < crumbs.length - 1 && (
                  <ChevronRight className="h-3 w-3 mx-2 text-pr-gray-light" />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 pt-14 pb-20 max-w-6xl">
        {/* Header */}
        <header className="text-center mb-16">
          {badge && (
            <span className="inline-block bg-pr-orange-pale text-pr-orange-dark text-[10px] font-dm-sans font-semibold uppercase tracking-[0.12em] px-3 py-1.5 rounded-full mb-6">
              {badge}
            </span>
          )}

          {Icon && (
            <div className="flex items-center justify-center mb-5">
              <div className="w-12 h-12 bg-pr-orange-pale rounded-full flex items-center justify-center">
                <Icon className="h-6 w-6 text-pr-orange-dark" />
              </div>
            </div>
          )}

          <h1 className="font-dm-serif text-4xl sm:text-5xl md:text-6xl text-pr-black leading-tight mb-4">
            {title}
            {titleAccent && (
              <>
                {' '}
                <span className="text-pr-orange">{titleAccent}</span>
              </>
            )}
          </h1>

          {/* Trait orange signature */}
          <div className="w-16 h-[3px] bg-pr-orange mx-auto mb-6" />

          {subtitle && (
            <p className="text-base sm:text-lg text-pr-gray-dark/80 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}
        </header>

        {children}
      </div>
    </div>
  );
};

export default PRFormationLayout;
