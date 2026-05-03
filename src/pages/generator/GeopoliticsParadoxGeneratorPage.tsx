import React from 'react';
import { Target } from 'lucide-react';
import { GeopoliticsParadoxGenerator } from '@/components/generator/GeopoliticsParadoxGenerator';
import { GeneratorHero } from '@/components/generator/GeneratorHero';

const GeopoliticsParadoxGeneratorPage = () => {
  return (
    <div className="min-h-screen bg-pr-gray-bg">
      <div className="container mx-auto py-12 px-4 max-w-7xl">
        <div className="mb-12">
          <GeneratorHero
            badge="Analyse IA"
            badgeIcon={Target}
            title="Paradoxes"
            highlight="Géopolitiques"
            subtitle="Construis et fais évaluer tes problématiques paradoxales — clarté, paradoxe, ancrage, ouverture, pertinence."
            breadcrumb="Paradoxes Géopo"
          />
        </div>

        <GeopoliticsParadoxGenerator />

        {/* Critères — encadré charte PR */}
        <div className="mt-8 bg-white rounded-2xl border border-pr-gray-light overflow-hidden">
          <div className="h-[3px] w-full bg-pr-orange" />
          <div className="p-6 sm:p-8">
            <h3 className="font-dm-serif text-2xl text-pr-black mb-5">
              Critères d'évaluation <span className="text-pr-gray-mid font-dm-sans text-sm font-normal">(sur 20 points)</span>
            </h3>
            <div className="space-y-3 font-dm-sans">
              {[
                ['Clarté (4 pts)', 'Question compréhensible et bien posée'],
                ['Paradoxe explicite (4 pts)', "Présence d'une contradiction féconde"],
                ['Ancrage géopolitique (4 pts)', "Mention d'acteurs, d'espaces ou de puissances"],
                ['Ouverture analytique (4 pts)', 'Question ouverte, non descriptive'],
                ['Pertinence stratégique (4 pts)', 'Enjeux stratégiques majeurs et profondeur'],
              ].map(([label, desc]) => (
                <div key={label} className="flex flex-col sm:flex-row sm:gap-4 text-sm">
                  <span className="font-semibold text-pr-orange-dark sm:min-w-[210px]">{label}</span>
                  <span className="text-pr-gray-dark">{desc}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 bg-pr-orange-pale border-l-2 border-pr-orange p-4 rounded-r">
              <p className="text-sm text-pr-orange-dark font-dm-sans">
                <strong>Note :</strong> l'IA est sévère et honnête. Si la réponse ne fait pas sens, elle peut noter 0/20.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GeopoliticsParadoxGeneratorPage;
