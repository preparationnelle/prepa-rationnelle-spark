import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Zap, Youtube, Brain, ChevronRight, Lightbulb, GraduationCap } from 'lucide-react';
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
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Floating elements - Orange bubbles */}
      <div className="absolute -z-10 top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute -z-10 bottom-20 right-10 w-28 h-28 bg-orange-200 rounded-full opacity-15 animate-pulse-slow"></div>
      <div className="absolute -z-10 top-40 right-20 w-48 h-48 bg-orange-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute -z-10 bottom-40 left-20 w-56 h-56 bg-orange-200 rounded-full opacity-8 animate-pulse"></div>
      <div className="absolute -z-10 top-1/4 left-1/3 w-64 h-64 bg-orange-50 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute -z-10 top-3/4 right-1/4 w-40 h-40 bg-orange-100 rounded-full opacity-8 animate-pulse"></div>
      <div className="absolute -z-10 top-10 right-1/3 w-24 h-24 bg-orange-300 rounded-full opacity-12 animate-pulse-slow"></div>
      <div className="absolute -z-10 bottom-10 left-1/4 w-36 h-36 bg-orange-100 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute -z-10 top-1/2 right-10 w-20 h-20 bg-orange-200 rounded-full opacity-15 animate-pulse-slow"></div>
      <div className="absolute -z-10 top-1/3 left-10 w-28 h-28 bg-orange-100 rounded-full opacity-8 animate-pulse"></div>

      {/* Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link to="/" className="hover:text-orange-600 transition-colors">Accueil</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link to="/generator" className="hover:text-orange-600 transition-colors">Générateurs</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-foreground font-medium text-orange-600">Flashcards</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-12 px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-orange-100 rounded-2xl mb-6 shadow-sm">
            <Brain className="h-10 w-10 text-orange-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Flashcards <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Intelligentes</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Créez automatiquement des flashcards optimisées pour la mémorisation avec révision espacée intégrée.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto mb-12">
          {/* Usage Instructions Card */}
          <Card className="border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 shadow-lg hover:shadow-xl bg-gradient-to-br from-white to-orange-50/30">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-orange-100 rounded-lg">
                  <Lightbulb className="h-6 w-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">Comment l'utiliser ?</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 leading-relaxed">
                Collez votre cours ou saisissez un thème, l'IA génère des flashcards avec questions-réponses optimisées. Système de révision espacée intégré pour mémoriser efficacement.
              </p>
            </CardContent>
          </Card>

          {/* Video Card */}
          <Card className="border-2 border-orange-100 hover:border-orange-300 transition-all duration-300 shadow-lg hover:shadow-xl bg-white overflow-hidden group">
            <CardHeader className="pb-2">
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-red-100 rounded-lg group-hover:bg-red-200 transition-colors">
                  <Youtube className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-xl font-bold text-gray-800">Tutoriel vidéo</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="relative w-full rounded-xl overflow-hidden shadow-md border border-gray-100" style={{ paddingBottom: '56.25%' }}>
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

        <div className="max-w-6xl mx-auto">
          <FlashcardGenerator language={language} onFlashcardCreated={handleFlashcardCreated} />
        </div>
      </div>
    </div>
  );
};

export default FlashcardsGeneratorPage;
