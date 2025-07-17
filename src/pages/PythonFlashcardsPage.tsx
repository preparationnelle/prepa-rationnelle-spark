import React, { useEffect, useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { Code, Brain, Target, Home, ChevronRight, ArrowLeft, ArrowRight, RotateCw } from 'lucide-react';
import PythonNavigationTabs from '@/components/formation/PythonNavigationTabs';

// EXEMPLE de données flashcards – à remplacer par tes vraies data
const FLASHCARDS = [
  { question: 'Comment afficher un texte à l’écran ?', answer: 'print("Hello world")' },
  { question: 'Comment faire une boucle de 0 à 4 ?', answer: 'for i in range(5):' },
  { question: 'Comment importer numpy ?', answer: 'import numpy as np' },
  { question: 'Comment créer une liste ?', answer: 'ma_liste = [1, 2, 3]' },
  // ... à compléter avec tes vraies 54 commandes
];

// FLASHCARD GENERATOR avec navigation clavier
function FlashcardViewer() {
  const [index, setIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  const goPrev = useCallback(() => {
    setIndex((prev) => (prev > 0 ? prev - 1 : FLASHCARDS.length - 1));
    setIsFlipped(false);
  }, []);
  const goNext = useCallback(() => {
    setIndex((prev) => (prev + 1) % FLASHCARDS.length);
    setIsFlipped(false);
  }, []);
  const flip = useCallback(() => setIsFlipped((v) => !v), []);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === 'ArrowRight') goNext();
      else if (e.key === 'ArrowLeft') goPrev();
      else if (e.key === 'Enter' || e.key === ' ') flip();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [goNext, goPrev, flip]);

  return (
    <div className="flex flex-col items-center gap-6 mt-8">
      <div
        tabIndex={0}
        aria-label="Flashcard"
        className={`relative select-none bg-white/80 backdrop-blur shadow-2xl rounded-3xl w-full max-w-xl h-64 flex items-center justify-center cursor-pointer transition-all duration-500 border-4 ${isFlipped ? 'rotate-y-180 border-purple-300' : 'border-blue-200 hover:border-blue-400'}`}
        style={{ perspective: 1200 }}
        onClick={flip}
      >
        <div className={`absolute inset-0 flex items-center justify-center p-8 text-2xl font-semibold transition-transform duration-500 ${isFlipped ? 'opacity-0' : 'opacity-100'}`}>
          <span className="text-blue-900">{FLASHCARDS[index].question}</span>
        </div>
        <div className={`absolute inset-0 flex items-center justify-center p-8 text-2xl font-semibold transition-transform duration-500 ${isFlipped ? 'opacity-100 rotate-y-180' : 'opacity-0'}`}>
          <span className="text-green-800">{FLASHCARDS[index].answer}</span>
        </div>
      </div>
      <div className="flex gap-4 justify-center items-center mt-2">
        <Button variant="outline" size="icon" aria-label="Précédent" onClick={goPrev}>
          <ArrowLeft />
        </Button>
        <span className="font-bold text-lg">
          {index + 1} / {FLASHCARDS.length}
        </span>
        <Button variant="outline" size="icon" aria-label="Suivant" onClick={goNext}>
          <ArrowRight />
        </Button>
        <Button variant="ghost" size="icon" aria-label="Retourner la carte" onClick={flip}>
          <RotateCw />
        </Button>
      </div>
      <p className="text-gray-500 text-sm mt-2">Astuce : <kbd className="px-2 py-1 rounded bg-gray-100 border text-xs">⏎</kbd> ou <kbd className="px-2 py-1 rounded bg-gray-100 border text-xs">Espace</kbd> = retourner &nbsp; | &nbsp; <kbd className="px-2 py-1 rounded bg-gray-100 border text-xs">←</kbd> / <kbd className="px-2 py-1 rounded bg-gray-100 border text-xs">→</kbd> = naviguer</p>
    </div>
  );
}

// PAGE PRINCIPALE FLASHCARDS
const PythonFlashcardsPage = () => {
  useEffect(() => {
    // Par exemple : trackPageVisit('python-flashcards');
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-white to-purple-100">
      {/* Breadcrumb */}
      <nav className="sticky top-0 z-40 bg-background/80 backdrop-blur border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-3 w-3" /> <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formation" className="hover:text-foreground transition-colors">Formation</Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Flashcards Python ECG</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-12 px-4">
        {/* Hero */}
        <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-3xl shadow-xl py-12 mb-12 text-center border border-blue-100">
          <h1 className="text-5xl font-extrabold text-blue-900 mb-2 tracking-tight">
            <Badge variant="outline" className="bg-yellow-50 text-yellow-700 px-4 py-2 rounded-xl text-lg mr-2">Nouveau</Badge>
            Flashcards Python ECG
          </h1>
          <p className="text-2xl text-blue-600 mb-6">Entraîne-toi sur les <span className="font-bold text-blue-800">54 commandes-clés</span> du programme ECG et rafle les points faciles au concours.</p>
        </div>

        {/* Navigation Tabs */}
        <PythonNavigationTabs className="mb-10" />

        {/* Flashcards */}
        <FlashcardViewer />

        {/* Stats Section */}
        <div className="mt-16 mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-blue-800">Pourquoi bosser les flashcards ?</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="shadow-lg hover:shadow-2xl transition-all border-2 border-blue-100">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Code className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold">54 Commandes</span>
                </div>
                <p className="text-sm text-muted-foreground">Toutes les commandes du programme ECG</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-2xl transition-all border-2 border-green-100">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Brain className="h-5 w-5 text-green-600" />
                  <span className="font-semibold">9 Catégories</span>
                </div>
                <p className="text-sm text-muted-foreground">Imports, matrices, graphiques...</p>
              </CardContent>
            </Card>
            <Card className="shadow-lg hover:shadow-2xl transition-all border-2 border-orange-100">
              <CardContent className="p-6 text-center">
                <div className="flex items-center justify-center gap-2 mb-3">
                  <Target className="h-5 w-5 text-orange-600" />
                  <span className="font-semibold">+3 à 5 pts</span>
                </div>
                <p className="text-sm text-muted-foreground">Des points sûrs aux concours</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-10 text-center space-y-4">
          <p className="text-muted-foreground text-lg">Envie d'aller plus loin ?</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/python-reference">
              <Button variant="outline" className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                Voir toutes les commandes
              </Button>
            </Link>
            <Link to="/offre/coaching-python">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white text-base">
                Coaching Python individuel
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PythonFlashcardsPage;
