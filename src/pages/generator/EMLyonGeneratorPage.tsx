import React, { useEffect } from 'react';
import { HelpCircle } from 'lucide-react';
import { RandomWordGenerator } from '@/components/RandomWordGenerator';
import { GeneratorHero } from '@/components/generator/GeneratorHero';
import { useProgress } from '@/context/ProgressContext';

const EMLyonGeneratorPage = () => {
  const { trackPageVisit } = useProgress();

  useEffect(() => {
    trackPageVisit('generator');
  }, [trackPageVisit]);

  return (
    <div className="min-h-screen bg-pr-gray-bg">
      <div className="container mx-auto py-12 px-4">
        <div className="mb-12">
          <GeneratorHero
            badge="Oraux · EM Lyon"
            badgeIcon={HelpCircle}
            title="Questions"
            highlight="EM Lyon"
            subtitle="Questions aléatoires pour l'entretien « Flash » avec cartes thématiques."
            breadcrumb="EM Lyon"
          />
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-2xl border border-pr-gray-light overflow-hidden">
          <div className="h-[3px] w-full bg-pr-orange" />
          <div className="px-6 py-5 border-b border-pr-gray-light bg-pr-gray-bg">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-pr-orange-pale rounded-xl flex items-center justify-center">
                <HelpCircle className="h-5 w-5 text-pr-orange-dark" />
              </div>
              <div>
                <h2 className="font-dm-serif text-xl text-pr-black">Questions d'entretien EM Lyon</h2>
                <p className="font-dm-sans text-xs text-pr-gray-mid mt-0.5">
                  Questions aléatoires pour l'entretien « Flash » avec cartes thématiques
                </p>
              </div>
            </div>
          </div>
          <div className="p-6 sm:p-8">
            <RandomWordGenerator type="emlyon" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EMLyonGeneratorPage;
