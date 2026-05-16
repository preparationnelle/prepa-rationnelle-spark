import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, Quote, Star, type LucideIcon } from 'lucide-react';
import { ComparisonCard, ComparisonGrid } from '@/components/carnet';

export interface ComparaisonEntry {
  titre: string;
  gauche: { label: string; contenu: React.ReactNode };
  droite: { label: string; contenu: React.ReactNode };
}

export interface EtudeDeCasFicheProps {
  titre: string;
  accroche: string;
  icon: LucideIcon;
  miseEnContexte: string;
  chiffres: { value: string; label: string }[];
  noms: { nom: string; detail: string }[];
  tensions: { a: string; b: string }[];
  comparaisons?: ComparaisonEntry[];
  sujets: { theme: string; angle: string }[];
  phraseTiroir: string;
}

const EtudeDeCasFiche: React.FC<EtudeDeCasFicheProps> = ({
  titre, accroche, icon: Icon, miseEnContexte, chiffres, noms, tensions, comparaisons, sujets, phraseTiroir,
}) => {
  return (
    <div className="min-h-screen bg-carnet-paper">
      {/* Trait orange signature en haut de page */}
      <div className="h-[3px] w-full bg-pr-orange" />

      {/* Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-carnet-paper-2 border-b border-pr-gray-light">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-pr-gray-mid">
            <Link to="/" className="flex items-center gap-1 hover:text-pr-orange-dark transition-colors">
              <Home className="h-3 w-3" /><span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-pr-gray-light mx-1" />
            <Link to="/formations" className="hover:text-pr-orange-dark transition-colors">Toutes les formations</Link>
            <ChevronRight className="h-3 w-3 text-pr-gray-light mx-1" />
            <Link to="/formation/geopolitique" className="hover:text-pr-orange-dark transition-colors">Formation Géopolitique</Link>
            <ChevronRight className="h-3 w-3 text-pr-gray-light mx-1" />
            <Link to="/formation/geopolitique/etudes-de-cas" className="hover:text-pr-orange-dark transition-colors">Thèmes centraux essentiels</Link>
            <ChevronRight className="h-3 w-3 text-pr-gray-light mx-1" />
            <span className="text-pr-black font-medium">{titre}</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-10 max-w-3xl">
        {/* Brand label */}
        <div className="mb-3 flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.18em] text-pr-orange">
          <span className="inline-block h-px w-6 bg-pr-orange" />
          Étude de cas géopolitique
        </div>

        {/* Header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-4">
            <Icon className="h-8 w-8 text-pr-orange" strokeWidth={1.75} />
            <h1 className="font-dm-serif text-4xl md:text-5xl text-pr-black leading-tight">
              {titre}
            </h1>
          </div>
          <blockquote className="border-l-[3px] border-pr-orange pl-4 text-lg text-pr-gray-dark italic leading-relaxed">
            {accroche}
          </blockquote>
        </div>

        {/* 1. Mise en contexte */}
        <Section title="Mise en contexte">
          <p className="text-pr-gray-dark leading-relaxed">{miseEnContexte}</p>
        </Section>

        {/* 2. Chiffres clés */}
        <Section title="Chiffres clés">
          <div className="grid sm:grid-cols-2 gap-3">
            {chiffres.map((c, i) => (
              <div
                key={i}
                className="flex items-baseline gap-3 p-4 bg-pr-orange-pale rounded-md border-l-2 border-pr-orange"
              >
                <span className="font-dm-serif text-2xl text-pr-orange-dark shrink-0 leading-none">
                  {c.value}
                </span>
                <span className="text-sm text-pr-gray-dark leading-snug">{c.label}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* 3. Noms propres */}
        <Section title="Noms propres essentiels">
          <ul className="space-y-2.5">
            {noms.map((n, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-pr-orange shrink-0 font-semibold">→</span>
                <span className="text-pr-gray-dark leading-relaxed">
                  <strong className="text-pr-black font-semibold">{n.nom}</strong>
                  {' — '}
                  {n.detail}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        {/* 4. Comparaisons côte-à-côte (optionnelles) */}
        {comparaisons?.map((comp, i) => (
          <Section key={i} title={comp.titre}>
            <ComparisonGrid>
              <ComparisonCard label={comp.gauche.label}>
                {comp.gauche.contenu}
              </ComparisonCard>
              <ComparisonCard label={comp.droite.label}>
                {comp.droite.contenu}
              </ComparisonCard>
            </ComparisonGrid>
          </Section>
        ))}

        {/* 5. Tensions */}
        <Section title="Tensions clés">
          <div className="space-y-2.5">
            {tensions.map((t, i) => (
              <div
                key={i}
                className="flex flex-wrap items-center gap-x-3 gap-y-1 p-3.5 bg-pr-gray-bg rounded-md"
              >
                <span className="font-medium text-pr-black">{t.a}</span>
                <span className="text-[10px] uppercase tracking-[0.18em] font-semibold text-pr-orange">
                  vs
                </span>
                <span className="font-medium text-pr-black">{t.b}</span>
              </div>
            ))}
          </div>
        </Section>

        {/* 5. Sujets recasables */}
        <Section title="Sujets dans lesquels recaser" titleIcon={<Star className="h-4 w-4 text-pr-orange fill-pr-orange" />}>
          <ul className="space-y-2.5">
            {sujets.map((s, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-pr-orange shrink-0 font-semibold">→</span>
                <span className="text-pr-gray-dark leading-relaxed">
                  <strong className="text-pr-black font-semibold">{s.theme}</strong>
                  {' : '}
                  {s.angle}
                </span>
              </li>
            ))}
          </ul>
        </Section>

        {/* 6. Phrase-tiroir */}
        <div className="mt-10 relative">
          <div className="absolute left-0 top-0 h-full w-1 bg-pr-orange rounded-full" />
          <div className="bg-pr-orange-pale rounded-md p-6 pl-8">
            <div className="flex items-start gap-3">
              <Quote className="h-5 w-5 text-pr-orange shrink-0 mt-1" />
              <div>
                <h2 className="text-[10px] font-semibold uppercase tracking-[0.18em] text-pr-orange-dark mb-2">
                  Phrase-tiroir
                </h2>
                <p className="font-dm-serif text-xl text-pr-black leading-relaxed italic">
                  {phraseTiroir}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer brand */}
        <div className="mt-12 pt-6 border-t border-pr-gray-light flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-pr-gray-mid">
          <span className="font-semibold text-pr-orange">Prépa Rationnelle</span>
          <span>Étude de cas · Format concours</span>
        </div>
      </div>
    </div>
  );
};

const Section: React.FC<{ title: string; titleIcon?: React.ReactNode; children: React.ReactNode }> = ({
  title, titleIcon, children,
}) => (
  <section className="mb-8">
    <h2 className="flex items-center gap-2 text-base font-semibold text-pr-black mb-4 pl-3 border-l-[3px] border-pr-orange">
      {titleIcon}
      <span className="uppercase tracking-wider text-sm">{title}</span>
    </h2>
    {children}
  </section>
);

export default EtudeDeCasFiche;
