import React, { useEffect } from 'react';
import { Dices } from 'lucide-react';
import { RandomWordGenerator } from '@/components/RandomWordGenerator';
import { GeneratorHero } from '@/components/generator/GeneratorHero';
import { useProgress } from '@/context/ProgressContext';

const steps = [
  {
    n: 1,
    label: 'Génère un mot',
    body: 'Clique sur « Générer un mot aléatoire » pour obtenir un mot surprise.',
  },
  {
    n: 2,
    label: 'Présentation 3 minutes',
    body: 'Définition (avec tes mots) → exemples personnels → ouverture sur ton projet pro.',
  },
];

const EDHECGeneratorPage = () => {
  const { trackPageVisit } = useProgress();

  useEffect(() => {
    trackPageVisit('generator');
  }, [trackPageVisit]);

  return (
    <div className="min-h-screen bg-pr-gray-bg">
      <div className="container mx-auto py-12 px-4">
        <div className="mb-10">
          <GeneratorHero
            badge="Oraux · EDHEC"
            badgeIcon={Dices}
            title="Mots"
            highlight="EDHEC"
            subtitle="Générateur de mots aléatoires pour ta présentation EDHEC."
            breadcrumb="EDHEC"
          />
        </div>

        {/* Mode d'emploi */}
        <div className="max-w-4xl mx-auto mb-10 bg-white rounded-2xl border border-pr-gray-light overflow-hidden">
          <div className="h-[3px] w-full bg-pr-orange" />
          <div className="p-6 sm:p-8">
            <h3 className="font-dm-serif text-xl text-pr-black mb-5">Mode d'emploi</h3>
            <div className="space-y-4 font-dm-sans">
              {steps.map((s) => (
                <div key={s.n} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-7 h-7 bg-pr-orange text-white text-xs font-bold rounded-full flex items-center justify-center mt-0.5 font-dm-sans">
                    {s.n}
                  </span>
                  <div>
                    <p className="font-semibold text-pr-black mb-1">{s.label}</p>
                    <p className="text-sm text-pr-gray-dark leading-relaxed">{s.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Générateur */}
        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-pr-gray-light overflow-hidden">
          <div className="h-[3px] w-full bg-pr-orange" />
          <div className="px-6 py-5 border-b border-pr-gray-light bg-pr-gray-bg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-pr-orange-pale rounded-xl flex items-center justify-center">
                <Dices className="h-5 w-5 text-pr-orange-dark" />
              </div>
              <div>
                <h2 className="font-dm-serif text-xl text-pr-black">Générateur de mots EDHEC</h2>
                <p className="font-dm-sans text-xs text-pr-gray-mid mt-0.5">
                  Mots aléatoires pour ta présentation
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 sm:p-8">
            <RandomWordGenerator type="word" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EDHECGeneratorPage;
