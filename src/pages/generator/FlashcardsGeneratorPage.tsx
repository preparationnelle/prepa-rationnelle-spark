import React, { useEffect, useState } from 'react';
import { Youtube, Lightbulb, Brain } from 'lucide-react';
import { FlashcardGenerator } from '@/components/generator/FlashcardGenerator';
import { GeneratorHero } from '@/components/generator/GeneratorHero';
import { useProgress } from '@/context/ProgressContext';

const FlashcardsGeneratorPage = () => {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleFlashcardCreated = () => {
    setRefreshTrigger((prev) => prev + 1);
  };

  const { trackPageVisit } = useProgress();

  useEffect(() => {
    trackPageVisit('generator');
  }, [trackPageVisit]);

  return (
    <div className="min-h-screen bg-pr-gray-bg">
      <div className="container mx-auto py-12 px-4">
        <div className="mb-12">
          <GeneratorHero
            badge="Mémorisation"
            badgeIcon={Brain}
            title="Générateur de"
            highlight="Flashcards"
            subtitle="Crée tes flashcards et révise avec feedback immédiat — système de répétition espacée intégré."
            breadcrumb="Flashcards"
          />
        </div>

        <div className="max-w-6xl mx-auto mb-12">
          <FlashcardGenerator language={language} onFlashcardCreated={handleFlashcardCreated} />
        </div>

        {/* Cartes d'info — charte PR */}
        <div className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto">
          <div className="bg-white rounded-2xl border border-pr-gray-light overflow-hidden">
            <div className="h-[3px] w-full bg-pr-orange" />
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-pr-orange-pale rounded-xl flex items-center justify-center">
                  <Lightbulb className="h-5 w-5 text-pr-orange-dark" />
                </div>
                <h3 className="font-dm-serif text-xl text-pr-black">Comment l'utiliser ?</h3>
              </div>
              <p className="text-sm text-pr-gray-dark leading-relaxed font-dm-sans">
                Colle ton cours ou saisis un thème : l'IA génère des flashcards avec questions-réponses optimisées. Système de révision espacée intégré pour mémoriser efficacement.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-pr-gray-light overflow-hidden">
            <div className="h-[3px] w-full bg-pr-orange" />
            <div className="p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-pr-orange-pale rounded-xl flex items-center justify-center">
                  <Youtube className="h-5 w-5 text-pr-orange-dark" />
                </div>
                <h3 className="font-dm-serif text-xl text-pr-black">Tutoriel vidéo</h3>
              </div>
              <div className="relative w-full rounded-xl overflow-hidden border border-pr-gray-light" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.loom.com/embed/136b7d11d85948679b56ee740374c683"
                  frameBorder="0"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                  title="Tutoriel Flashcards"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlashcardsGeneratorPage;
