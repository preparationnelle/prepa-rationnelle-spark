import React, { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Link } from 'react-router-dom';
import { ArrowLeft, Brain, Target, Code } from 'lucide-react';
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
  return <div className="min-h-screen bg-background py-8">
      <div className="max-w-4xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            Flashcards Python ECG
          </h1>
          <p className="text-xl text-muted-foreground mb-6">
            Testez vos connaissances sur les 54 commandes essentielles
          </p>
        </div>

        {/* Navigation Tabs */}
        <PythonNavigationTabs className="mb-8" />
        
        <div className="mb-8">
          <div className="text-center mb-6">
            
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
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

          {/* Instructions */}
          <Card className="mb-8 bg-blue-50 border-blue-200">
            <CardHeader>
              <CardTitle className="text-blue-800">Comment ça marche ?</CardTitle>
            </CardHeader>
            <CardContent>
              <ol className="space-y-2 text-blue-700">
                <li><strong>1.</strong> Une commande Python s'affiche</li>
                <li><strong>2.</strong> Essayez de deviner ce qu'elle fait</li>
                <li><strong>3.</strong> Cliquez pour révéler la réponse</li>
                <li><strong>4.</strong> Indiquez si vous avez trouvé ou non</li>
                <li><strong>5.</strong> Obtenez votre score final sur 54 commandes</li>
              </ol>
            </CardContent>
          </Card>
        </div>

        {/* Flashcard Generator */}
        <PythonFlashcardGenerator />

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