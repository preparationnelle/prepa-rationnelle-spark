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
  <div className="relative font-sans bg-carnet-paper-2 min-h-screen overflow-hidden">
    {/* Abstract red/orange background */}
    <div className="absolute top-0 left-0 w-full h-[500px] bg-gradient-to-b from-red-50/60 to-transparent -z-10" />
    <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-red-100/30 rounded-full blur-3xl -z-10" />
    <div className="absolute bottom-[10%] left-[-10%] w-[500px] h-[500px] bg-orange-100/30 rounded-full blur-3xl -z-10" />

    <div className="container mx-auto py-12 px-4 sm:px-6 relative z-10">
      <div className="mb-8">
        <Link to={backTo}>
          <Button
            variant="ghost"
            className="group text-carnet-ink-soft hover:text-red-600 hover:bg-red-50 transition-all duration-300 px-3"
          >
            <ArrowLeft className="mr-2 h-4 w-4 group-hover:-translate-x-1 transition-transform" />
            {backLabel}
          </Button>
        </Link>
      </div>

      <div className="max-w-6xl mx-auto">
        {/* Hero */}
        <div className="text-center mb-16 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-red-700 text-sm font-medium border border-red-100 animate-fade-in-up">
            <Icon className="h-4 w-4" />
            <span>{moduleLabel}</span>
          </div>

          <h1 className="font-dm-serif text-5xl md:text-6xl lg:text-7xl tracking-tight text-carnet-ink leading-[1.05]">
            {titlePrefix}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pr-orange-dark">
              {titleAccent}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-carnet-ink-soft max-w-3xl mx-auto leading-relaxed font-light">
            {intro}
          </p>
        </div>

        {children}

        {cta && (
          <div className="mt-20 grid md:grid-cols-12 gap-8">
            <div className="md:col-span-12">
              <div className="relative overflow-hidden rounded-2xl shadow-xl shadow-red-200/40 bg-gradient-to-br from-red-600 to-pr-orange-dark text-white">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-40 h-40 bg-white opacity-10 rounded-full translate-y-1/2 -translate-x-1/2" />

                <div className="relative z-10 px-8 py-12 sm:px-12 sm:py-14 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center mb-6 shadow-inner">
                    <GraduationCap className="h-10 w-10 text-white" strokeWidth={1.6} />
                  </div>
                  <h3 className="font-dm-serif text-3xl sm:text-4xl mb-4">{cta.title}</h3>
                  <p className="text-red-50/90 max-w-xl mx-auto mb-8 leading-relaxed">
                    {cta.text}
                  </p>
                  <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
                    <Link to="/methodologie/entretiens-personnalite" className="sm:flex-none">
                      <Button
                        size="lg"
                        className="w-full sm:w-auto bg-white text-red-600 hover:bg-red-50 font-bold border-0 shadow-lg hover:shadow-xl transition-all h-12"
                      >
                        Voir toutes les méthodologies
                      </Button>
                    </Link>
                    <Link to="/contact" className="sm:flex-none">
                      <Button
                        size="lg"
                        variant="outline"
                        className="w-full sm:w-auto bg-transparent border-white/40 text-white hover:bg-white/10 hover:text-white hover:border-white h-12"
                      >
                        Coaching personnalisé
                      </Button>
                    </Link>
                  </div>
                </div>
              </div>
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
        <div className="w-1.5 h-7 bg-red-500 rounded-full" />
        <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-red-700">
          {label}
        </span>
      </div>
      <div className="flex items-center gap-3">
        <div className="p-2.5 rounded-xl bg-white border border-carnet-rule/30 shadow-sm">
          <Icon className="w-6 h-6 text-red-600" strokeWidth={1.6} />
        </div>
        <h2 className="font-dm-serif text-3xl sm:text-4xl text-carnet-ink leading-tight">
          {title}
        </h2>
      </div>
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
  <div className="mb-12 relative overflow-hidden rounded-2xl border border-red-100 bg-gradient-to-br from-red-50/80 to-orange-50/40 p-7 shadow-sm">
    <div className="absolute top-0 right-0 w-40 h-40 bg-red-100/30 rounded-full blur-2xl -translate-y-1/2 translate-x-1/4" />
    <div className="relative flex items-start gap-4">
      <div className="p-3 rounded-xl bg-white shadow-sm border border-carnet-rule/30 flex-shrink-0">
        <Icon className="w-6 h-6 text-red-600" strokeWidth={1.6} />
      </div>
      <div>
        <h3 className="font-dm-serif text-2xl text-carnet-ink mb-2">{title}</h3>
        <div className="text-carnet-ink-soft leading-relaxed">{children}</div>
      </div>
    </div>
  </div>
);
