import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, GraduationCap, type LucideIcon } from 'lucide-react';
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
  <div className="relative carnet-paper min-h-screen overflow-hidden">
    {/* Margin line */}
    <div className="carnet-margin-line" />
    {/* Punch holes */}
    <div className="carnet-hole" style={{ top: 80 }} />
    <div className="carnet-hole" style={{ top: 220 }} />
    <div className="carnet-hole" style={{ top: 360 }} />

    <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-10">
      {/* Back nav */}
      <div className="mb-10">
        <Link to={backTo}>
          <Button
            variant="ghost"
            className="group text-carnet-ink-soft hover:text-carnet-red px-3 font-instrument text-[13px] font-semibold uppercase tracking-[0.1em]"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            {backLabel}
          </Button>
        </Link>
      </div>

      {/* Hero */}
      <div className="mb-16 max-w-[760px]">
        <span className="carnet-eyebrow inline-flex items-center gap-2 mb-6">
          <Icon className="h-3.5 w-3.5" />
          {moduleLabel}
        </span>
        <h1 className="font-lora text-[38px] sm:text-[52px] lg:text-[60px] leading-[1.05] text-carnet-ink tracking-tight mb-5">
          {titlePrefix}{' '}
          <em className="text-carnet-red not-italic">{titleAccent}</em>
        </h1>
        <hr className="carnet-divider mb-5" />
        <p className="font-instrument text-[17px] lg:text-[18px] leading-[1.6] text-carnet-ink-soft">
          {intro}
        </p>
      </div>

      {children}

      {cta && (
        <div className="mt-20">
          <div className="carnet-card px-8 py-12 sm:px-12 sm:py-14 flex flex-col items-start">
            <span className="carnet-eyebrow mb-4">
              <GraduationCap className="inline h-3.5 w-3.5 mr-1.5" />
              Accompagnement
            </span>
            <h3 className="font-lora text-[28px] sm:text-[34px] text-carnet-ink mb-3">{cta.title}</h3>
            <hr className="carnet-divider w-full mb-5" />
            <p className="font-instrument text-[16px] text-carnet-ink-soft leading-[1.6] mb-8 max-w-xl">
              {cta.text}
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Link to="/methodologie/entretiens-personnalite">
                <Button className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold py-6 px-8 rounded-full border-0">
                  Voir toutes les méthodologies
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="ghost" className="font-instrument font-semibold text-carnet-ink hover:text-carnet-red py-6 px-8">
                  Coaching personnalisé →
                </Button>
              </Link>
            </div>
          </div>
        </div>
      )}
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
      <span className="carnet-eyebrow inline-flex items-center gap-1.5 mb-3">
        <Icon className="h-3 w-3" />
        {label}
      </span>
      <h2 className="font-lora text-[28px] sm:text-[34px] text-carnet-ink leading-tight">
        {title}
      </h2>
      <hr className="carnet-divider mt-4" />
    </div>
    {children}
  </section>
);

export const MethodIntroCard = ({
  icon: Icon,
  title,
  children,
}: {
  icon: IconType;
  title: string;
  children: React.ReactNode;
}) => (
  <div className="carnet-card mb-12 p-7">
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 mt-0.5">
        <Icon className="w-5 h-5 text-carnet-red" strokeWidth={1.8} />
      </div>
      <div>
        <h3 className="font-lora text-[22px] text-carnet-ink mb-3">{title}</h3>
        <hr className="carnet-divider mb-4" />
        <div className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.65]">{children}</div>
      </div>
    </div>
  </div>
);
