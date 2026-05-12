import React from 'react';
import { Card } from '@/components/ui/card';

const ProgrammeCultureGeneralePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-pr-gray-bg font-dm-sans">
      <section className="py-16 px-4 sm:px-6">
        <div className="container mx-auto max-w-4xl">
          {/* Header */}
          <div className="text-center mb-12">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-pr-black mb-4">
              Culture générale · Programme
            </p>
            <h1 className="font-dm-serif text-4xl md:text-5xl text-pr-black leading-tight mb-5">
              Programme
            </h1>
            <div className="h-[3px] w-16 bg-pr-black mx-auto mb-6" />
            <p className="text-base md:text-lg text-pr-gray-dark max-w-2xl mx-auto leading-relaxed">
              Aperçu des rubriques et ressources. Ajouts progressifs.
            </p>
          </div>

          <Card className="relative bg-white rounded-2xl p-8 md:p-10 border border-pr-gray-light overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-[3px] bg-pr-black" />

            <span className="inline-block px-2.5 py-1 bg-pr-gray-bg text-pr-black rounded text-[10px] font-semibold uppercase tracking-[0.12em] mb-4">
              Thème 2025-2026
            </span>
            <h2 className="font-dm-serif text-2xl md:text-3xl text-pr-black mb-3">
              L&apos;humanité — 8 sous-thèmes du programme
            </h2>
            <p className="text-pr-gray-dark leading-relaxed mb-5">
              Programme couvert progressivement à travers articles, fiches notions et parapersos.
            </p>
            <ol className="space-y-1.5 text-sm text-pr-gray-dark list-decimal list-inside marker:text-pr-black marker:font-dm-serif">
              <li>Définir l&apos;humanité (essence, nature, propre de l&apos;homme)</li>
              <li>L&apos;humanité comme construction (culture, langage, technique)</li>
              <li>L&apos;inhumanité au cœur de l&apos;humain (barbarie, totalitarismes)</li>
              <li>L&apos;humanité face à la nature (anthropocène, animalité)</li>
              <li>L&apos;humanité à l&apos;épreuve de la technique (transhumanisme, IA)</li>
              <li>La solidarité et le commun (droits humains, hospitalité)</li>
              <li>Les frontières de l&apos;humanité (déshumanisation, altérité)</li>
              <li>L&apos;humanité comme idéal (perfectibilité, progrès moral)</li>
            </ol>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default ProgrammeCultureGeneralePage;
