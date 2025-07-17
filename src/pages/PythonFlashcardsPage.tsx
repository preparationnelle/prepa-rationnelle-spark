import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Target, Code, Home, ChevronRight } from 'lucide-react';
import { useProgress } from '@/context/ProgressContext';
import PythonFlashcardGenerator from '@/components/python/PythonFlashcardGenerator';
import PythonNavigationTabs from '@/components/formation/PythonNavigationTabs';

const PythonFlashcardsPage = () => {
  const {
    trackPageVisit
  } = useProgress();
  useEffect(() => {
    trackPageVisit('python-flashcards');
  }, [trackPageVisit]);
  return <div className="min-h-screen bg-background">
      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formation" className="hover:text-foreground transition-colors">
              Formation
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Formation Python ECG</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">
            Flashcards Python ECG
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Testez vos connaissances sur les 54 commandes essentielles
          </p>
        </div>

        {/* Navigation Tabs */}
        <PythonNavigationTabs className="mb-8" />

        {/* Flashcard Generator */}
        <PythonFlashcardGenerator />

        {/* Stats Section */}
        <div className="mt-12 mb-8">
          <h2 className="text-2xl font-bold text-center mb-6">Informations</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Card>
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Code className="h-5 w-5 text-blue-600" />
                  <span className="font-semibold">54 Commandes</span>
                </div>
                <p className="text-sm text-muted-foreground">Toutes les commandes au programme ECG</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Brain className="h-5 w-5 text-green-600" />
                  <span className="font-semibold">9 Catégories</span>
                </div>
                <p className="text-sm text-muted-foreground">Imports, matrices, graphiques...</p>
              </CardContent>
            </Card>
            
            <Card>
              <CardContent className="p-4 text-center">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <Target className="h-5 w-5 text-orange-600" />
                  <span className="font-semibold">+3 à 5 pts</span>
                </div>
                <p className="text-sm text-muted-foreground">Points sûrs aux concours</p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Links */}
        <div className="mt-12 text-center space-y-4">
          <p className="text-muted-foreground">Envie d'aller plus loin ?</p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link to="/python-reference">
              <Button variant="outline" className="flex items-center gap-2">
                <Code className="h-4 w-4" />
                Voir toutes les commandes
              </Button>
            </Link>
            <Link to="/offre/coaching-python">
              <Button className="bg-orange-600 hover:bg-orange-700">
                Coaching Python individuel
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>;
};
export default PythonFlashcardsPage;