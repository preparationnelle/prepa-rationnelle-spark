import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, type LucideIcon } from 'lucide-react';
import { Button } from '@/components/ui/button';

type IconType = LucideIcon;

export const MethodologyShell = ({
  moduleLabel,
  icon: Icon,
  titlePrefix,
  titleAccent,
  intro,
  backTo = '/methodologie/entretiens-personnalite',
  backLabel = 'Retour aux entretiens de personnalité',
  children,
  cta,
}: {
  moduleLabel: string;
  icon: IconType;
  titlePrefix: string;
  titleAccent: string;
  intro: string;
  backTo?: string;
  backLabel?: string;
  children: React.ReactNode;
  cta?: { title: string; text: string };
}) => (
  <div className="min-h-screen bg-pr-gray-bg font-dm-sans">
    <div className="container mx-auto py-12 px-4">
      <div className="mb-8">
        <Link
          to={backTo}
          className="inline-flex items-center text-sm text-pr-gray-mid hover:text-pr-orange-dark transition-colors"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {backLabel}
        </Link>
      </div>

      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-6">
            <span className="h-px w-8 bg-pr-orange" />
            <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-pr-orange-dark">
              {moduleLabel}
            </span>
            <span className="h-px w-8 bg-pr-orange" />
          </div>
          <div className="w-16 h-16 bg-pr-orange-pale rounded-full mx-auto mb-6 flex items-center justify-center">
            <Icon className="w-8 h-8 text-pr-orange-dark" strokeWidth={1.6} />
          </div>
          <h1 className="font-dm-serif text-4xl sm:text-5xl text-pr-black mb-5 leading-tight">
            {titlePrefix} <span className="text-pr-orange">{titleAccent}</span>
          </h1>
          <p className="text-lg text-pr-gray-dark max-w-3xl mx-auto leading-relaxed">
            {intro}
          </p>
        </div>

        {children}

        {cta && (
          <div className="mt-16 text-center bg-white border border-pr-gray-light rounded-xl px-8 py-12">
            <div className="h-1 w-12 bg-pr-orange mx-auto mb-6 rounded-full" />
            <h3 className="font-dm-serif text-2xl sm:text-3xl text-pr-black mb-3">
              {cta.title}
            </h3>
            <p className="text-base text-pr-gray-mid max-w-xl mx-auto mb-8">
              {cta.text}
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link to="/methodologie/entretiens-personnalite">
                <Button className="bg-pr-orange hover:bg-pr-orange-dark text-white px-6">
                  Voir toutes les méthodologies
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="border-pr-gray-light text-pr-gray-dark hover:bg-pr-orange-pale hover:text-pr-orange-dark hover:border-pr-orange"
                >
                  Coaching personnalisé
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  </div>
);

export const MethodSection = ({
  label,
  title,
  icon: Icon,
  children,
}: {
  label: string;
  title: string;
  icon: IconType;
  children: React.ReactNode;
}) => (
  <section className="mb-16">
    <div className="mb-8">
      <div className="flex items-center gap-3 mb-3">
        <span className="h-7 w-1 bg-pr-orange rounded-full" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-pr-orange-dark">
          {label}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <Icon className="w-7 h-7 text-pr-gray-dark" strokeWidth={1.5} />
        <h2 className="font-dm-serif text-2xl sm:text-3xl text-pr-black">{title}</h2>
      </div>
    </div>
    {children}
  </section>
);

export const MethodIntroCard = ({ icon: Icon, title, children }: { icon: IconType; title: string; children: React.ReactNode }) => (
  <div className="mb-12 bg-pr-orange-pale border-l-4 border-pr-orange rounded-r-lg p-7">
    <div className="flex items-start gap-4">
      <Icon className="w-7 h-7 text-pr-orange-dark mt-1 flex-shrink-0" strokeWidth={1.6} />
      <div>
        <h3 className="font-dm-serif text-xl text-pr-black mb-3">{title}</h3>
        <div className="text-pr-gray-dark leading-relaxed">{children}</div>
      </div>
    </div>
  </div>
);
