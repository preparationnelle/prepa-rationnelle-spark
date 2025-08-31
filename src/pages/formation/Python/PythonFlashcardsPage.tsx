import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Home, ChevronRight, RefreshCw, ChevronLeft, HelpCircle, Maximize, Minimize, RotateCcw, ArrowRight, ArrowLeft, Space } from 'lucide-react';
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
      // Animation de transition
      const card = document.querySelector('[data-card]');
      if (card) {
        card.classList.add('animate-out', 'fade-out-0', 'slide-out-to-left-1/2');
        setTimeout(() => {
          setCurrentIndex(currentIndex + 1);
          setIsFlipped(false);
          card.classList.remove('animate-out', 'fade-out-0', 'slide-out-to-left-1/2');
          card.classList.add('animate-in', 'fade-in-0', 'slide-in-from-right-1/2');
          setTimeout(() => {
            card.classList.remove('animate-in', 'fade-in-0', 'slide-in-from-right-1/2');
          }, 300);
        }, 150);
      } else {
        setCurrentIndex(currentIndex + 1);
        setIsFlipped(false);
      }
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      // Animation de transition
      const card = document.querySelector('[data-card]');
      if (card) {
        card.classList.add('animate-out', 'fade-out-0', 'slide-out-to-right-1/2');
        setTimeout(() => {
          setCurrentIndex(currentIndex - 1);
          setIsFlipped(false);
          card.classList.remove('animate-out', 'fade-out-0', 'slide-out-to-right-1/2');
          card.classList.add('animate-in', 'fade-in-0', 'slide-in-from-left-1/2');
          setTimeout(() => {
            card.classList.remove('animate-in', 'fade-in-0', 'slide-in-from-left-1/2');
          }, 300);
        }, 150);
      } else {
        setCurrentIndex(currentIndex - 1);
        setIsFlipped(false);
      }
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  const handleToggleFullscreen = () => {
    setIsFullscreen(!isFullscreen);
  };

  if (cards.length === 0) {
    return (
      <div className="min-h-screen bg-background relative flex items-center justify-center">
        {/* Background avec bulles animées */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 bg-orange-100 rounded-full opacity-5 animate-pulse-slow"></div>
          <div className="absolute bottom-40 right-10 w-80 h-80 bg-blue-50 rounded-full opacity-5 animate-pulse"></div>
        </div>
        
        <div className="relative z-10 text-center">
          <div className="w-12 h-12 border-4 border-primary/20 border-t-primary rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-muted-foreground">Chargement des flashcards...</p>
        </div>
      </div>
    );
  }

  const currentCard = cards[currentIndex];

  return (
    <div className={`min-h-screen bg-background relative ${isFullscreen ? 'overflow-hidden' : ''}`}>
      {/* Background avec bulles animées - reprend l'identité du site */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-orange-100 rounded-full opacity-5 animate-pulse-slow"></div>
        <div className="absolute bottom-40 right-10 w-80 h-80 bg-blue-50 rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-72 h-72 bg-orange-50 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-1/4 left-20 w-96 h-96 bg-orange-100 rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/3 w-48 h-48 bg-blue-100 rounded-full opacity-5 animate-pulse-slow"></div>
      </div>

      {/* Fil d'Ariane - masqué en plein écran */}
      {!isFullscreen && (
        <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
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
              <span className="text-foreground font-medium">Formation <span className="text-orange-600">Python</span> ECG</span>
            </div>
          </div>
        </nav>
      )}

      <div className={`relative z-10 ${isFullscreen ? 'fixed inset-0 z-50 flex items-center justify-center bg-background p-8' : 'container mx-auto py-8 px-4'}`}>
        {/* En-tête - masqué en plein écran */}
        {!isFullscreen && (
          <div className="text-center mb-8">
            <h1 className="hero-heading gradient-text mb-4">
              Flashcards Python ECG
            </h1>
            <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
              Maîtrisez les 54 commandes essentielles avec nos flashcards interactives !
            </p>
            
            {/* Indicateurs de progression plus visuels */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex items-center gap-2 bg-card border rounded-full px-4 py-2 shadow-sm">
                <div className="w-2 h-2 bg-primary rounded-full"></div>
                <span className="text-sm font-medium">{currentIndex + 1} / {cards.length}</span>
                <div className="w-16 h-1 bg-muted rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-primary transition-all duration-300 ease-out"
                    style={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Tabs - masquée en plein écran */}
        {!isFullscreen && <PythonNavigationTabs className="mb-8" />}

        {/* Flashcard */}
        <Card 
          data-card
          className={`${isFullscreen ? 'w-full max-w-5xl h-[90vh] flex flex-col relative' : 'mb-8 max-w-3xl'} mx-auto shadow-lg border-0 bg-card/50 backdrop-blur-sm transition-all duration-300 ease-out`}
        >
          <CardHeader className="relative border-b border-border/10">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                {!isFullscreen && (
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    Question {currentIndex + 1} sur {cards.length}
                  </Badge>
                )}
                {/* Bouton Mélanger avec design amélioré */}
                {!isFullscreen && (
                  <Button 
                    onClick={handleShuffle}
                    size="sm"
                    variant="outline"
                    className="border-primary/20 text-primary hover:bg-primary/5 transition-all duration-200"
                  >
                    <RotateCcw className="h-3 w-3 mr-1" />
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
                  
                  {/* Tooltip raccourcis clavier amélioré */}
                  {showKeyboardHelp && (
                    <div 
                      className="absolute right-0 top-10 z-50 bg-card border border-border rounded-xl shadow-xl p-4 w-72 backdrop-blur-sm"
                      data-keyboard-help
                    >
                      <div className="space-y-3">
                        <h4 className="font-semibold text-sm text-foreground mb-3 flex items-center gap-2">
                          <HelpCircle className="h-4 w-4 text-primary" />
                          Contrôles clavier
                        </h4>
                        <div className="text-xs text-muted-foreground space-y-3">
                          <div className="flex items-center gap-3 p-2 rounded-lg bg-accent/50">
                            <ArrowRight className="h-3 w-3 text-primary" />
                            <kbd className="bg-muted px-2 py-1 rounded text-xs font-mono min-w-[24px] text-center">→</kbd>
                            <span>Carte suivante</span>
                          </div>
                          <div className="flex items-center gap-3 p-2 rounded-lg bg-accent/50">
                            <ArrowLeft className="h-3 w-3 text-primary" />
                            <kbd className="bg-muted px-2 py-1 rounded text-xs font-mono min-w-[24px] text-center">←</kbd>
                            <span>Carte précédente</span>
                          </div>
                          <div className="flex items-center gap-3 p-2 rounded-lg bg-accent/50">
                            <RotateCcw className="h-3 w-3 text-primary" />
                            <div className="flex gap-1">
                              <kbd className="bg-muted px-2 py-1 rounded text-xs font-mono">↵</kbd>
                              <kbd className="bg-muted px-2 py-1 rounded text-xs font-mono">␣</kbd>
                            </div>
                            <span>Retourner</span>
                          </div>
                          <div className="flex items-center gap-3 p-2 rounded-lg bg-accent/50">
                            <Maximize className="h-3 w-3 text-primary" />
                            <kbd className="bg-muted px-2 py-1 rounded text-xs font-mono min-w-[24px] text-center">F</kbd>
                            <span>Plein écran</span>
                          </div>
                        </div>
                      </div>
                      {/* Flèche pointant vers le bouton */}
                      <div className="absolute -top-2 right-4 w-4 h-4 bg-card border-l border-t border-border transform rotate-45"></div>
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
          
          <CardContent className={`${isFullscreen ? 'flex-1 flex flex-col justify-center' : ''} text-center space-y-6 sm:space-y-8 p-4 sm:p-6 lg:p-8`}>
            {/* Badge catégorie avec style amélioré */}
            <div className="flex justify-center">
              <Badge variant="secondary" className={`${isFullscreen ? 'text-lg px-6 py-3' : 'text-sm px-4 py-2'} bg-primary/10 text-primary border-primary/20 font-medium`}>
                {currentCard.category}
              </Badge>
            </div>

            {/* Question avec design moderne */}
            <div className="space-y-6">
              <div className="relative">
                <p className={`font-semibold text-muted-foreground ${isFullscreen ? 'text-2xl' : 'text-lg'} mb-4`}>
                  Quelle est la commande Python pour :
                </p>
                
                {/* Card question avec effet de glass et gradient */}
                <div className={`relative bg-gradient-to-br from-accent to-accent/50 backdrop-blur-sm rounded-2xl border border-border/20 ${isFullscreen ? 'p-8' : 'p-4 sm:p-6'} shadow-lg transition-all duration-300 hover:shadow-xl group`}>
                  {/* Effet de brillance au hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out"></div>
                  
                  <p className={`font-semibold text-foreground relative z-10 ${isFullscreen ? 'text-3xl leading-relaxed' : 'text-lg sm:text-xl leading-relaxed'}`}>
                    {currentCard.description}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Réponse avec animation d'apparition */}
            <div className="min-h-[80px] flex items-center justify-center">
              {isFlipped ? (
                <div className={`animate-in fade-in slide-in-from-bottom-4 duration-500 w-full`}>
                  <div className={`bg-gradient-to-r from-primary/5 to-primary/10 border-2 border-primary/20 rounded-2xl ${isFullscreen ? 'p-8' : 'p-6'} shadow-inner`}>
                    <div className="flex items-center justify-center gap-3 mb-3">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                      <span className="text-primary font-semibold text-sm uppercase tracking-wider">Réponse</span>
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
                    </div>
                    <code className={`font-mono font-bold text-primary bg-primary/10 rounded-lg px-3 sm:px-4 py-2 sm:py-3 inline-block ${isFullscreen ? 'text-3xl' : 'text-lg sm:text-xl'} border border-primary/20 shadow-sm break-all`}>
                      {currentCard.command}
                    </code>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-2 text-muted-foreground">
                  <div className="flex gap-1">
                    <div className="w-1 h-1 bg-muted-foreground/50 rounded-full animate-pulse"></div>
                    <div className="w-1 h-1 bg-muted-foreground/50 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-1 h-1 bg-muted-foreground/50 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  <span className="text-sm">Appuyez sur Espace ou Entrée pour révéler</span>
                </div>
              )}
            </div>

            {/* Boutons de navigation modernisés et responsifs */}
            <div className={`flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-4 pt-6 ${isFullscreen ? 'pt-8' : ''}`}>
              <div className="flex gap-3 sm:contents">
                <Button 
                  variant="outline" 
                  onClick={handlePrevious}
                  disabled={currentIndex === 0}
                  className={`${isFullscreen ? 'w-44 h-14 text-lg' : 'w-32 sm:w-36 h-12'} border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all duration-200 disabled:opacity-30 group`}
                >
                  <ArrowLeft className={`${isFullscreen ? 'h-5 w-5' : 'h-4 w-4'} ${isFullscreen ? 'mr-2' : 'mr-1 sm:mr-2'} transition-transform group-hover:-translate-x-1 group-disabled:translate-x-0`} />
                  <span className="hidden sm:inline">Précédent</span>
                  <span className="sm:hidden">Préc.</span>
                </Button>

                <Button 
                  variant="outline"
                  onClick={handleNext}
                  disabled={currentIndex === cards.length - 1}
                  className={`${isFullscreen ? 'w-44 h-14 text-lg' : 'w-32 sm:w-36 h-12'} border-primary/20 hover:bg-primary/5 hover:border-primary/40 transition-all duration-200 disabled:opacity-30 group`}
                >
                  <span className="hidden sm:inline">Suivant</span>
                  <span className="sm:hidden">Suiv.</span>
                  <ArrowRight className={`${isFullscreen ? 'h-5 w-5' : 'h-4 w-4'} ${isFullscreen ? 'ml-2' : 'ml-1 sm:ml-2'} transition-transform group-hover:translate-x-1 group-disabled:translate-x-0`} />
                </Button>
              </div>

              <Button 
                onClick={handleFlip}
                className={`${isFullscreen ? 'w-48 h-14 text-lg' : 'w-full sm:w-40 h-12 max-w-xs'} bg-primary hover:bg-primary/90 shadow-lg transition-all duration-200 transform hover:scale-105 active:scale-95 order-first sm:order-none`}
              >
                <RotateCcw className={`${isFullscreen ? 'h-5 w-5' : 'h-4 w-4'} mr-2 ${isFlipped ? 'rotate-180' : ''} transition-transform duration-300`} />
                {isFlipped ? 'Cacher' : 'Révéler'}
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