import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, LucideIcon } from 'lucide-react';

export type ESHCrumb = { label: string; to?: string };

type ESHChapterShellProps = {
  crumbs: ESHCrumb[];
  backTo?: { label: string; to: string };
  eyebrow?: string;
  Icon?: LucideIcon;
  title: string;
  subtitle?: React.ReactNode;
  tags?: Array<{ label: string; highlight?: boolean }>;
  children: React.ReactNode;
};

export const ESHChapterShell: React.FC<ESHChapterShellProps> = ({
  crumbs,
  backTo,
  eyebrow,
  Icon,
  title,
  subtitle,
  tags,
  children,
}) => {
  return (
    <div className="carnet-paper min-h-screen">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-40 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-3">
          <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute flex-wrap">
            <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
              <Home className="h-3.5 w-3.5" />
              <span>Accueil</span>
            </Link>
            {crumbs.map((c, i) => (
              <React.Fragment key={i}>
                <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
                {c.to ? (
                  <Link to={c.to} className="hover:text-carnet-red transition-colors">
                    {c.label}
                  </Link>
                ) : (
                  <span className="carnet-eyebrow text-[11px]">{c.label}</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-12 lg:py-16">
        {backTo && (
          <div className="mb-8">
            <Link
              to={backTo.to}
              className="inline-flex items-center gap-2 font-instrument text-[13px] text-carnet-ink-soft hover:text-carnet-red transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              {backTo.label}
            </Link>
          </div>
        )}

        {/* Hero */}
        <header className="max-w-[820px] mb-12 lg:mb-16">
          {eyebrow && <div className="carnet-eyebrow mb-6">{eyebrow}</div>}

          <div className="flex items-center gap-4 mb-6">
            {Icon && (
              <div className="w-14 h-14 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
                <Icon className="h-6 w-6 text-carnet-red" />
              </div>
            )}
            <h1 className="font-lora text-[34px] sm:text-[44px] lg:text-[52px] leading-[1.1] text-carnet-ink tracking-tight">
              {title}
            </h1>
          </div>

          {subtitle && (
            <p className="font-instrument text-[16px] lg:text-[18px] leading-[1.65] text-carnet-ink-soft max-w-[640px]">
              {subtitle}
            </p>
          )}

          {tags && tags.length > 0 && (
            <div className="flex flex-wrap items-center gap-3 mt-6">
              {tags.map((t, i) => (
                <span
                  key={i}
                  className={
                    t.highlight
                      ? 'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.25)] font-instrument text-[13px] font-semibold text-carnet-ink'
                      : 'inline-flex items-center gap-2 px-4 py-2 rounded-full bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] font-instrument text-[12px] uppercase tracking-[0.12em] text-carnet-ink-mute'
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

export default ESHChapterShell;
