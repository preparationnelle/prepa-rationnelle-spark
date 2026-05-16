import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Youtube, Home, ChevronRight } from 'lucide-react';
import { FlashcardGenerator } from '@/components/generator/FlashcardGenerator';
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
    <div className="min-h-screen carnet-paper">
      <nav className="sticky top-0 z-40 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-3">
          <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute flex-wrap">
            <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
              <Home className="h-3.5 w-3.5" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <Link to="/generator" className="hover:text-carnet-red transition-colors">Générateurs</Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <span className="carnet-eyebrow text-[11px]">Flashcards</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-6 lg:py-8">
        <div className="max-w-6xl mx-auto mb-8">
          <FlashcardGenerator language={language} onFlashcardCreated={handleFlashcardCreated} />
        </div>

        <div className="max-w-3xl mx-auto">
          <div className="carnet-card p-6 sm:p-7 carnet-tilt-r">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center">
                <Youtube className="h-5 w-5 text-carnet-red" />
              </div>
              <h3 className="font-lora text-[20px] text-carnet-ink leading-tight">
                Tutoriel <em className="font-lora italic text-carnet-red">vidéo</em>
              </h3>
            </div>
            <div className="relative w-full rounded-md overflow-hidden border border-dashed border-[rgba(78,55,30,0.18)]" style={{ paddingBottom: '56.25%' }}>
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
  );
};

export default FlashcardsGeneratorPage;
