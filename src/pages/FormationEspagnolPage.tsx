import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, MessageSquare, Target, ArrowRight, Languages } from 'lucide-react';

const PR_ORANGE = '#F4845F';
const PR_ORANGE_LIGHT = '#FDF0EC';
const PR_ORANGE_DARK = '#C45A35';
const PR_GRAY_DARK = '#3A3A38';
const PR_GRAY_MID = '#888880';
const PR_GRAY_BORDER = '#D8D6CE';
const PR_GRAY_BG = '#F7F6F3';
const PR_TEXT = '#1A1A18';

type Module = {
  number: string;
  title: string;
  subtitle: string;
  to: string;
  icon: React.ReactNode;
  bullets: string[];
  cta: string;
};

const modules: Module[] = [
  {
    number: '01',
    title: 'Vocabulaire',
    subtitle: 'Lexique thématique et expressions idiomatiques',
    to: '/formation/espagnol/vocabulaire',
    icon: <Languages className="h-5 w-5" />,
    bullets: ['Économie et affaires', 'Culture et société', 'Expressions courantes'],
    cta: 'Accéder au vocabulaire',
  },
  {
    number: '02',
    title: 'Grammaire',
    subtitle: 'Conjugaisons, syntaxe et structures',
    to: '/formation/espagnol/grammaire',
    icon: <BookOpen className="h-5 w-5" />,
    bullets: ['Temps verbaux', 'Syntaxe idiomatique', 'Thèmes grammaticaux'],
    cta: 'Accéder à la grammaire',
  },
  {
    number: '03',
    title: 'Civilisation',
    subtitle: "Enjeux contemporains d'Espagne et d'Amérique latine",
    to: '/formation/espagnol/civilisation',
    icon: <MessageSquare className="h-5 w-5" />,
    bullets: ['Politique et démocratie', 'Enjeux sociaux et égalité', 'Migrations et environnement'],
    cta: 'Accéder à la civilisation',
  },
  {
    number: '04',
    title: 'Méthodologie',
    subtitle: 'Techniques et stratégies pour réussir les épreuves',
    to: '/formation/espagnol/methodologie',
    icon: <Target className="h-5 w-5" />,
    bullets: ['Épreuves écrites', 'Épreuves orales (colles)', 'Gestion du temps et stress'],
    cta: 'Accéder à la méthodologie',
  },
];

const FormationEspagnolPage = () => {
  return (
    <div
      className="min-h-screen"
      style={{ backgroundColor: PR_GRAY_BG, color: PR_TEXT, fontFamily: "'DM Sans', sans-serif" }}
    >
      {/* Sticky breadcrumb */}
      <nav
        className="sticky top-0 z-50 border-b"
        style={{ backgroundColor: '#FFFFFF', borderColor: PR_GRAY_BORDER }}
      >
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center text-xs" style={{ color: PR_GRAY_MID }}>
            <Link to="/" className="transition-colors hover:text-[color:var(--pr-orange)]" style={{ ['--pr-orange' as any]: PR_ORANGE }}>
              Accueil
            </Link>
            <span className="mx-2">›</span>
            <Link to="/formations" className="transition-colors hover:text-[color:var(--pr-orange)]" style={{ ['--pr-orange' as any]: PR_ORANGE }}>
              Toutes les formations
            </Link>
            <span className="mx-2">›</span>
            <span style={{ color: PR_TEXT, fontWeight: 500 }}>Formation Espagnol ECG</span>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <header className="container mx-auto px-6 pt-16 pb-12">
        <div className="max-w-4xl mx-auto text-center">
          {/* Mention brand */}
          <div
            className="inline-flex items-center gap-2 mb-6"
            style={{ color: PR_ORANGE, fontFamily: "'DM Sans', sans-serif", fontWeight: 600, fontSize: '11px', letterSpacing: '0.16em', textTransform: 'uppercase' }}
          >
            <span style={{ display: 'inline-block', width: '24px', height: '2px', backgroundColor: PR_ORANGE }} />
            Prépa Rationnelle
            <span style={{ display: 'inline-block', width: '24px', height: '2px', backgroundColor: PR_ORANGE }} />
          </div>

          {/* Badges */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-8">
            <span
              className="inline-block px-3 py-1 rounded"
              style={{
                backgroundColor: PR_ORANGE_LIGHT,
                color: PR_ORANGE_DARK,
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Espagnol
            </span>
            <span
              className="inline-block px-3 py-1 rounded"
              style={{
                backgroundColor: PR_ORANGE_LIGHT,
                color: PR_ORANGE_DARK,
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Prépa ECG
            </span>
            <span
              className="inline-block px-3 py-1 rounded"
              style={{
                backgroundColor: PR_ORANGE_LIGHT,
                color: PR_ORANGE_DARK,
                fontSize: '10px',
                fontWeight: 600,
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
              }}
            >
              Concours BCE & Ecricome
            </span>
          </div>

          {/* H1 */}
          <h1
            className="mb-6"
            style={{
              fontFamily: "'DM Serif Display', serif",
              fontWeight: 400,
              color: PR_TEXT,
              fontSize: 'clamp(36px, 6vw, 64px)',
              lineHeight: 1.1,
              letterSpacing: '-0.01em',
            }}
          >
            Formation Espagnol ECG
          </h1>

          {/* Trait orange signature */}
          <div className="flex justify-center mb-8">
            <span style={{ display: 'inline-block', width: '64px', height: '3px', backgroundColor: PR_ORANGE }} />
          </div>

          {/* Sous-titre */}
          <p
            className="max-w-2xl mx-auto"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 400,
              color: PR_GRAY_DARK,
              fontSize: '18px',
              lineHeight: 1.65,
            }}
          >
            Une formation complète pour exceller en espagnol aux concours des Grandes Écoles de
            Commerce — vocabulaire, grammaire, civilisation et méthodologie réunis dans un parcours
            structuré.
          </p>
        </div>
      </header>

      {/* Modules */}
      <section className="container mx-auto px-6 pb-24">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {modules.map((m) => (
              <Link
                key={m.number}
                to={m.to}
                className="group flex flex-col h-full transition-all duration-200 hover:-translate-y-1"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: `0.5px solid ${PR_GRAY_BORDER}`,
                  borderRadius: '6px',
                  padding: '24px',
                  borderTop: `3px solid ${PR_ORANGE}`,
                  boxShadow: '0 1px 2px rgba(26,26,24,0.04)',
                }}
              >
                {/* Numéro décoratif + icône */}
                <div className="flex items-start justify-between mb-6">
                  <span
                    style={{
                      fontFamily: "'DM Serif Display', serif",
                      fontWeight: 400,
                      color: PR_ORANGE,
                      fontSize: '48px',
                      lineHeight: 1,
                    }}
                  >
                    {m.number}
                  </span>
                  <span
                    className="flex items-center justify-center"
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '4px',
                      backgroundColor: PR_ORANGE_LIGHT,
                      color: PR_ORANGE_DARK,
                    }}
                  >
                    {m.icon}
                  </span>
                </div>

                {/* Trait orange court */}
                <div style={{ width: '24px', height: '2px', backgroundColor: PR_ORANGE, marginBottom: '16px' }} />

                {/* Titre */}
                <h3
                  style={{
                    fontFamily: "'DM Serif Display', serif",
                    fontWeight: 400,
                    color: PR_TEXT,
                    fontSize: '24px',
                    lineHeight: 1.2,
                    marginBottom: '8px',
                  }}
                >
                  {m.title}
                </h3>

                {/* Sous-titre */}
                <p
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 400,
                    color: PR_GRAY_MID,
                    fontSize: '13px',
                    lineHeight: 1.6,
                    marginBottom: '20px',
                  }}
                >
                  {m.subtitle}
                </p>

                {/* Bullets */}
                <ul className="space-y-2 mb-8 flex-1">
                  {m.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-2"
                      style={{
                        fontFamily: "'DM Sans', sans-serif",
                        fontWeight: 400,
                        color: PR_GRAY_DARK,
                        fontSize: '13px',
                        lineHeight: 1.5,
                      }}
                    >
                      <span style={{ color: PR_ORANGE, fontWeight: 600, marginTop: '1px' }}>→</span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  className="w-full justify-between transition-all duration-200"
                  style={{
                    backgroundColor: PR_ORANGE,
                    color: '#FFFFFF',
                    fontFamily: "'DM Sans', sans-serif",
                    fontWeight: 500,
                    fontSize: '13px',
                    letterSpacing: '0.02em',
                    borderRadius: '4px',
                    padding: '12px 16px',
                    height: 'auto',
                    boxShadow: 'none',
                  }}
                  onMouseEnter={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = PR_ORANGE_DARK;
                  }}
                  onMouseLeave={(e) => {
                    (e.currentTarget as HTMLButtonElement).style.backgroundColor = PR_ORANGE;
                  }}
                >
                  <span>{m.cta}</span>
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            ))}
          </div>

          {/* Footer mention */}
          <div className="mt-16 flex flex-col items-center text-center">
            <span style={{ display: 'inline-block', width: '48px', height: '2px', backgroundColor: PR_ORANGE, marginBottom: '12px' }} />
            <p
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                color: PR_ORANGE,
                fontSize: '11px',
                letterSpacing: '0.16em',
                textTransform: 'uppercase',
              }}
            >
              Prépa Rationnelle · Espagnol ECG
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormationEspagnolPage;
