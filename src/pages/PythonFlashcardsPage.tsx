import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Home, ChevronRight, RefreshCw, ChevronLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Badge } from '@/components/ui/badge';
import PythonNavigationTabs from '@/components/formation/PythonNavigationTabs';
import { pythonCommands } from '@/data/pythonCommands';

const PythonFlashcardsPage = () => {
  const [cards, setCards] = useState<Array<{
    command: string;
    description: string;
    category: string;
  }>>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);

  // Préparer les cartes à partir des commandes Python
  useEffect(() => {
    const allCards = Object.entries(pythonCommands).flatMap(([category, data]) =>
      data.commands.map(cmd => ({
        command: cmd.command,
        description: cmd.description,
        category: data.title
      }))
    );
    setCards(allCards);
  }, []);

  const handleShuffle = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  if (cards.length === 0) {
    return <div className="min-h-screen bg-[#F8FAFF] flex items-center justify-center">Chargement...</div>;
  }

  const currentCard = cards[currentIndex];

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-[#F8FAFF]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F8FAFF]/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formations" className="hover:text-foreground transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Formation Python ECG</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* En-tête */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Flashcards Python ECG
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Maîtrisez les 54 commandes essentielles avec nos flashcards interactives !
          </p>
        </div>

        {/* Navigation Tabs */}
        <PythonNavigationTabs className="mb-8" />

        {/* Flashcard */}
        <Card className="mb-8 max-w-2xl mx-auto">
          <CardHeader>
            <div className="flex justify-between items-center">
              <span className="text-sm text-muted-foreground">
                Question {currentIndex + 1} sur {cards.length}
              </span>
            </div>
          </CardHeader>
          <CardContent className="text-center space-y-6">
            <div className="space-y-4">
              <Badge variant="secondary" className="text-sm px-3 py-1">
                {currentCard.category}
              </Badge>
              <p className="text-lg font-medium">Que fait cette commande Python ?</p>
              <div className="bg-slate-50 dark:bg-slate-900 rounded-lg p-4">
                <code className="text-lg font-mono">
                  {currentCard.command}
                </code>
              </div>
            </div>
            
            {isFlipped && (
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-lg text-slate-700">{currentCard.description}</p>
              </div>
            )}

            <div className="flex justify-center gap-3 pt-4">
              <Button 
                variant="outline" 
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className="w-32"
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Précédent
              </Button>
              
              <Button 
                onClick={handleShuffle}
                className="w-32 bg-[#FF7A1C] hover:bg-[#FF6B00]"
              >
                <RefreshCw className="h-4 w-4 mr-1" />
                Mélanger
              </Button>

              <Button 
                variant="outline"
                onClick={handleFlip}
                className="w-32"
              >
                {isFlipped ? 'Cacher' : 'Révéler'}
              </Button>

              <Button 
                variant="outline"
                onClick={handleNext}
                disabled={currentIndex === cards.length - 1}
                className="w-32"
              >
                Suivant
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Section "Pourquoi ces flashcards ?" */}
        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8">Pourquoi ces flashcards ?</h2>
          <div className="max-w-2xl mx-auto text-center">
            <p className="text-slate-600 mb-6">
              Les flashcards sont un excellent moyen de mémoriser les commandes Python essentielles pour les concours ECG.
              Révisez régulièrement pour une meilleure rétention !
            </p>
            <Button variant="link" className="text-[#FF7A1C] hover:text-[#FF6B00]">
              Une question sur la prépa ?
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PythonFlashcardsPage;