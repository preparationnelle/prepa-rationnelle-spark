import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Home, ChevronRight, RefreshCw, ChevronLeft, HelpCircle, Maximize, Minimize } from 'lucide-react';
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
  const [showKeyboardHelp, setShowKeyboardHelp] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

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

  // Gestion de la navigation au clavier
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowRight':
          event.preventDefault();
          handleNext();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          handlePrevious();
          break;
        case 'Enter':
        case ' ':
          event.preventDefault();
          handleFlip();
          break;
        case 'Escape':
          event.preventDefault();
          if (showKeyboardHelp) {
            setShowKeyboardHelp(false);
          } else if (isFullscreen) {
            setIsFullscreen(false);
          }
          break;
        case 'f':
        case 'F':
          event.preventDefault();
          setIsFullscreen(!isFullscreen);
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentIndex, isFlipped, showKeyboardHelp, isFullscreen]);

  // Fermer le tooltip en cliquant en dehors
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Element;
      if (!target.closest('[data-keyboard-help]')) {
        setShowKeyboardHelp(false);
      }
    };

    if (showKeyboardHelp) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [showKeyboardHelp]);

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

  const handleToggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  if (cards.length === 0) {
    return <div className="min-h-screen bg-[#F8FAFF] flex items-center justify-center">Chargement...</div>;
  }

  const currentCard = cards[currentIndex];

  return (
    <div className={`min-h-screen bg-[#F8FAFF] ${isFullscreen ? 'overflow-hidden' : ''}`}>
      {/* Fil d'Ariane - masqué en plein écran */}
      {!isFullscreen && (
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
      )}

      <div className={`${isFullscreen ? 'fixed inset-0 z-50 flex items-center justify-center bg-[#F8FAFF] p-8' : 'container mx-auto py-8 px-4'}`}>
        {/* En-tête - masqué en plein écran */}
        {!isFullscreen && (
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Flashcards Python ECG
            </h1>
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Maîtrisez les 54 commandes essentielles avec nos flashcards interactives !
            </p>
          </div>
        )}

        {/* Navigation Tabs - masquée en plein écran */}
        {!isFullscreen && <PythonNavigationTabs className="mb-8" />}

        {/* Flashcard */}
        <Card className={`${isFullscreen ? 'w-full max-w-5xl h-[90vh] flex flex-col relative' : 'mb-8 max-w-2xl'} mx-auto`}>
          <CardHeader className="relative">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground">
                  Question {currentIndex + 1} sur {cards.length}
                </span>
                {/* Bouton Mélanger intégré dans le coin supérieur gauche */}
                {!isFullscreen && (
                  <Button 
                    onClick={handleShuffle}
                    size="sm"
                    className="bg-[#FF7A1C] hover:bg-[#FF6B00] text-xs px-3 py-1.5 h-8"
                  >
                    <RefreshCw className="h-3 w-3 mr-1" />
                    Mélanger
                  </Button>
                )}
              </div>
              
              {/* Boutons d'action regroupés - coin supérieur droit avec espacement optimisé */}
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowKeyboardHelp(!showKeyboardHelp)}
                    className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground flex items-center justify-center"
                    title="Raccourcis clavier"
                    data-keyboard-help
                  >
                    <HelpCircle className="h-4 w-4" />
                  </Button>
                  
                  {/* Tooltip raccourcis clavier */}
                  {showKeyboardHelp && (
                    <div 
                      className="absolute right-0 top-10 z-50 bg-popover border border-border rounded-lg shadow-lg p-4 w-64"
                      data-keyboard-help
                    >
                      <div className="space-y-2">
                        <h4 className="font-medium text-sm text-foreground mb-3">Navigation au clavier :</h4>
                        <div className="text-xs text-muted-foreground space-y-2">
                          <div className="flex items-center gap-2">
                            <kbd className="bg-muted px-2 py-1 rounded text-xs font-mono">→</kbd>
                            <span>Carte suivante</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <kbd className="bg-muted px-2 py-1 rounded text-xs font-mono">←</kbd>
                            <span>Carte précédente</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <kbd className="bg-muted px-2 py-1 rounded text-xs font-mono">Entrée</kbd>
                            <kbd className="bg-muted px-2 py-1 rounded text-xs font-mono">Espace</kbd>
                            <span>Retourner la carte</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <kbd className="bg-muted px-2 py-1 rounded text-xs font-mono">F</kbd>
                            <span>Mode plein écran</span>
                          </div>
                          <div className="flex items-center gap-2">
                            <kbd className="bg-muted px-2 py-1 rounded text-xs font-mono">Echap</kbd>
                            <span>Fermer cette aide</span>
                          </div>
                        </div>
                      </div>
                      {/* Flèche pointant vers le bouton */}
                      <div className="absolute -top-2 right-4 w-4 h-4 bg-popover border-l border-t border-border transform rotate-45"></div>
                    </div>
                  )}
                </div>
                
                {!isFullscreen && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleToggleFullscreen}
                    className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground flex items-center justify-center"
                    title="Plein écran (F)"
                  >
                    <Maximize className="h-4 w-4" />
                  </Button>
                )}
                
                {/* Bouton de sortie plein écran - aligné avec les autres boutons */}
                {isFullscreen && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleToggleFullscreen}
                    className="h-8 w-8 p-0 text-muted-foreground hover:text-foreground flex items-center justify-center bg-white/80 hover:bg-white border border-border/50"
                    title="Quitter le plein écran (Echap)"
                  >
                    <Minimize className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          </CardHeader>
          
          <CardContent className={`${isFullscreen ? 'flex-1 flex flex-col justify-center' : ''} text-center space-y-6`}>
            <div className="space-y-4">
              <Badge variant="secondary" className={`text-sm px-3 py-1 ${isFullscreen ? 'text-lg px-4 py-2' : ''}`}>
                {currentCard.category}
              </Badge>
              <p className={`font-medium ${isFullscreen ? 'text-2xl' : 'text-lg'}`}>Quelle est la commande Python pour :</p>
              <div className={`bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 ${isFullscreen ? 'p-8' : ''}`}>
                <p className={`font-medium text-blue-800 dark:text-blue-200 ${isFullscreen ? 'text-3xl' : 'text-lg'}`}>
                  {currentCard.description}
                </p>
              </div>
            </div>
            
            {isFlipped && (
              <div className={`mt-4 p-4 bg-green-50 rounded-lg ${isFullscreen ? 'p-8 mt-8' : ''}`}>
                <p className={`font-mono text-green-800 bg-green-100 p-3 rounded ${isFullscreen ? 'text-2xl p-6' : 'text-lg'}`}>
                  {currentCard.command}
                </p>
              </div>
            )}

            <div className={`flex justify-center gap-3 pt-4 ${isFullscreen ? 'pt-8' : ''}`}>
              <Button 
                variant="outline" 
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className={`${isFullscreen ? 'w-40 h-12 text-lg' : 'w-32'}`}
              >
                <ChevronLeft className="h-4 w-4 mr-1" />
                Précédent
              </Button>

              <Button 
                variant="outline"
                onClick={handleFlip}
                className={`${isFullscreen ? 'w-40 h-12 text-lg' : 'w-32'}`}
              >
                {isFlipped ? 'Cacher' : 'Révéler'}
              </Button>

              <Button 
                variant="outline"
                onClick={handleNext}
                disabled={currentIndex === cards.length - 1}
                className={`${isFullscreen ? 'w-40 h-12 text-lg' : 'w-32'}`}
              >
                Suivant
                <ChevronRight className="h-4 w-4 ml-1" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Section "Pourquoi ces flashcards ?" - supprimée */}
      </div>
    </div>
  );
};

export default PythonFlashcardsPage;