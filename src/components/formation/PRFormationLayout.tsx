import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, LucideIcon } from 'lucide-react';

type Crumb = { label: string; to?: string };
type Tag = { label: string; highlight?: boolean };

type PRFormationLayoutProps = {
  crumbs?: Crumb[];
  eyebrow?: string;
  badge?: string;
  tags?: Tag[];
  title: string;
  titleAccent?: string;
  subtitle?: React.ReactNode;
  Icon?: LucideIcon;
  children: React.ReactNode;
};

export const PRFormationLayout: React.FC<PRFormationLayoutProps> = ({
  crumbs,
  eyebrow,
  badge,
  tags,
  title,
  titleAccent,
  subtitle,
  Icon,
  children,
}) => {
  const eyebrowText = eyebrow ?? badge;

  return (
    <div className="min-h-screen font-dm-sans text-pr-gray-dark">
      {crumbs && crumbs.length > 0 && (
        <nav className="sticky top-0 z-40 bg-carnet-paper/95 backdrop-blur supports-[backdrop-filter]:bg-carnet-paper/90 border-b border-carnet-rule/60">
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
      )}

      <div className="container mx-auto px-4 sm:px-6 pt-14 pb-20 max-w-6xl">
        <header className="text-center mb-16">
          {Icon && (
            <div className="flex items-center justify-center mb-5">
              <div className="w-12 h-12 bg-pr-orange-pale rounded-full flex items-center justify-center">
                <Icon className="h-6 w-6 text-pr-orange-dark" />
              </div>
            </div>
          )}

          {eyebrowText && (
            <p className="text-[11px] sm:text-xs font-semibold uppercase tracking-[0.18em] text-pr-orange-dark mb-4">
              {eyebrowText}
            </p>
          )}

          <h1 className="font-dm-serif text-4xl sm:text-5xl md:text-6xl text-pr-black leading-tight mb-5">
            {title}
            {titleAccent && (
              <>
                {' '}
                <span className="text-pr-orange">{titleAccent}</span>
              </>
            )}
          </h1>

          <div className="w-16 h-[3px] bg-pr-orange mx-auto mb-6" />

          {subtitle && (
            <p className="text-base sm:text-lg text-pr-gray-dark/80 max-w-2xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2 mt-7">
              {tags.map((t, i) => (
                <span
                  key={i}
                  className={
                    t.highlight
                      ? 'px-3 py-1 bg-pr-orange-pale text-pr-orange-dark rounded-full text-xs font-semibold uppercase tracking-wider'
                      : 'px-3 py-1 bg-carnet-paper-2 border border-carnet-rule text-pr-gray-dark rounded-full text-xs font-semibold uppercase tracking-wider'
                  }
                >
                  {t.label}
                </span>
              ))}
            </div>
          )}
        </header>

        {children}
      </div>
    </div>
  );
};

export default PRFormationLayout;
