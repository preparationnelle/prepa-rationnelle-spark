
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Youtube } from 'lucide-react';
import { FlashcardGenerator } from '@/components/generator/FlashcardGenerator';
import { useProgress } from "@/context/ProgressContext";

const FlashcardsGeneratorPage = () => {
  const [language, setLanguage] = useState<'fr' | 'en'>('fr');
  const [refreshTrigger, setRefreshTrigger] = useState(0);

  const handleFlashcardCreated = () => {
    setRefreshTrigger(prev => prev + 1);
  };

  const { trackPageVisit } = useProgress();
  
  useEffect(() => {
    trackPageVisit('generator');
  }, [trackPageVisit]);

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent mb-4">
          Flashcards intelligentes
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-6">
          Créez automatiquement des flashcards optimisées pour la mémorisation avec révision espacée intégrée.
        </p>

        {/* Usage Instructions */}
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 border border-orange-200 p-6 rounded-2xl max-w-4xl mx-auto mb-8 shadow-lg">
          <p className="text-base text-orange-800 font-semibold mb-3">Comment l'utiliser :</p>
          <p className="text-orange-700">
            Collez votre cours ou saisissez un thème, l'IA génère des flashcards avec questions-réponses optimisées. Système de révision espacée intégré pour mémoriser efficacement.
          </p>
        </div>
      </div>

      {/* Video Section */}
      <div className="max-w-4xl mx-auto mb-10">
        <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-8 rounded-2xl border border-orange-200 shadow-lg">
          <div className="flex items-center justify-center gap-3 mb-6">
            <Youtube className="h-7 w-7 text-orange-600" />
            <h2 className="text-2xl font-semibold text-orange-800">
              Tutoriel vidéo - Comment créer des flashcards intelligentes
            </h2>
          </div>
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              src="https://www.loom.com/embed/136b7d11d85948679b56ee740374c683"
              frameBorder="0"
              allowFullScreen
              className="absolute top-0 left-0 w-full h-full rounded-xl shadow-lg"
              title="Tutoriel Flashcards"
            />
          </div>
        </div>
      </div>

      <FlashcardGenerator language={language} onFlashcardCreated={handleFlashcardCreated} />
    </div>
  );
};

export default FlashcardsGeneratorPage;
