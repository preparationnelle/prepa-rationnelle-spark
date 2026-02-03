
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Youtube, ChevronRight, Lightbulb } from 'lucide-react';
import { FlashcardGenerator } from '@/components/generator/FlashcardGenerator';
import { useProgress } from "@/context/ProgressContext";
import { Link } from 'react-router-dom';

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
    <div className="min-h-screen bg-white dark:bg-black relative overflow-hidden transition-colors duration-300">

      {/* Breadcrumb - Simplified and cleaner */}
      <nav className="sticky top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-gray-100 dark:border-gray-800">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-gray-500 dark:text-gray-400">
            <Link to="/" className="hover:text-orange-600 transition-colors">Accueil</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link to="/generator" className="hover:text-orange-600 transition-colors">Générateurs</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-gray-900 dark:text-gray-100 font-medium tracking-wide">Flashcards</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 relative z-10">

        {/* Main Generator Component replaces the page header */}
        <div className="max-w-6xl mx-auto mb-16">
          <FlashcardGenerator language={language} onFlashcardCreated={handleFlashcardCreated} />
        </div>

        {/* Info Cards - Moved to bottom and redesigned to fit the new aesthetic */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {/* Usage Instructions Card */}
          <Card className="border border-orange-100/50 dark:border-orange-900/30 bg-orange-50/50 dark:bg-orange-900/10 hover:bg-orange-50 dark:hover:bg-orange-900/20 transition-all duration-300 shadow-sm">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-orange-100 dark:bg-orange-900/50 rounded-xl">
                  <Lightbulb className="h-5 w-5 text-orange-600 dark:text-orange-400" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-800 dark:text-gray-200">Comment l'utiliser ?</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-sm">
                Collez votre cours ou saisissez un thème, l'IA génère des flashcards avec questions-réponses optimisées. Système de révision espacée intégré pour mémoriser efficacement.
              </p>
            </CardContent>
          </Card>

          {/* Video Card */}
          <Card className="border border-gray-100 dark:border-gray-800 bg-white dark:bg-gray-900 hover:shadow-lg transition-all duration-300 overflow-hidden group">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-red-50 dark:bg-red-900/20 rounded-xl group-hover:scale-110 transition-transform">
                  <Youtube className="h-5 w-5 text-red-500" />
                </div>
                <CardTitle className="text-lg font-bold text-gray-800 dark:text-gray-200">Tutoriel vidéo</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative w-full rounded-lg overflow-hidden shadow-sm border border-gray-100 dark:border-gray-800" style={{ paddingBottom: '56.25%' }}>
                <iframe
                  src="https://www.loom.com/embed/136b7d11d85948679b56ee740374c683"
                  frameBorder="0"
                  allowFullScreen
                  className="absolute top-0 left-0 w-full h-full"
                  title="Tutoriel Flashcards"
                />
              </div>
            </CardContent>
          </Card>
        </div>

      </div>
    </div>
  );
};

export default FlashcardsGeneratorPage;
