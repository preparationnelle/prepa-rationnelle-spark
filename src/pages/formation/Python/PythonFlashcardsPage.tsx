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
      <div className="min-h-screen bg-[#F8FAFF] relative flex items-center justify-center">
        {/* Background de chargement moderne */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-15 animate-pulse-slow"></div>
        </div>
        
        <div className="relative z-10 text-center">
          <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 font-medium">Chargement des flashcards...</p>
        </div>
      </div>
    );
  }

  const currentCard = cards[currentIndex];

  return (
    <div className={`min-h-screen bg-[#F8FAFF] relative ${isFullscreen ? 'overflow-hidden' : ''}`}>
      {/* Background moderne avec bulles bleues subtiles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-15 animate-pulse-slow"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-blue-100 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute bottom-40 left-20 w-56 h-56 bg-blue-200 rounded-full opacity-8 animate-pulse"></div>
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
        {/* En-tête moderne - masqué en plein écran */}
        {!isFullscreen && (
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-3 mb-6 p-3 rounded-lg bg-blue-100 text-blue-700 border border-blue-300">
              <HelpCircle className="h-8 w-8" />
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-blue-800">
                Flashcards Python ECG
              </h1>
            </div>
            <p className="text-xl sm:text-2xl text-blue-600 mb-8 max-w-3xl mx-auto leading-relaxed">
              Maîtrisez les 54 commandes essentielles avec nos flashcards interactives !
            </p>
            
            {/* Indicateurs de progression modernes */}
            <div className="flex items-center justify-center gap-2 mb-4">
              <div className="flex items-center gap-3 bg-white border-2 border-blue-100 rounded-full px-6 py-3 shadow-lg">
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <span className="text-sm font-semibold text-blue-700">{currentIndex + 1} / {cards.length}</span>
                <div className="w-20 h-2 bg-blue-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-600 transition-all duration-300 ease-out"
                    style={{ width: `${((currentIndex + 1) / cards.length) * 100}%` }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Navigation Tabs - masquée en plein écran */}
        {!isFullscreen && <PythonNavigationTabs className="mb-8" />}

        {/* Flashcard moderne */}
        <Card 
          data-card
          className={`${isFullscreen ? 'w-full max-w-5xl h-[90vh] flex flex-col relative' : 'mb-8 max-w-4xl'} mx-auto shadow-2xl border-2 border-blue-100 bg-white hover:shadow-3xl hover:scale-105 transition-all duration-300 ease-out`}
        >
          <CardHeader className="relative border-b border-blue-100 bg-gradient-to-r from-blue-50 to-blue-100">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                {!isFullscreen && (
                  <Badge variant="secondary" className="bg-blue-600 text-white border-blue-600 px-3 py-1">
                    Question {currentIndex + 1} sur {cards.length}
                  </Badge>
                )}
                {/* Bouton Mélanger avec design moderne */}
                {!isFullscreen && (
                  <Button 
                    onClick={handleShuffle}
                    size="sm"
                    variant="outline"
                    className="border-blue-300 text-blue-600 hover:bg-orange-100 hover:text-orange-800 hover:border-orange-400 transition-all duration-200"
                  >
                    <RotateCcw className="h-3 w-3 mr-2" />
                    Mélanger
                  </Button>
                )}
              </div>
              
              {/* Boutons d'action modernes */}
              <div className="flex items-center gap-2">
                <div className="relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => setShowKeyboardHelp(!showKeyboardHelp)}
                    className="h-8 w-8 p-0 text-blue-600 hover:text-orange-700 hover:bg-orange-100 flex items-center justify-center transition-colors"
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
                    className="h-8 w-8 p-0 text-blue-600 hover:text-orange-700 hover:bg-orange-100 flex items-center justify-center transition-colors"
                    title="Plein écran (F)"
                  >
                    <Maximize className="h-4 w-4" />
                  </Button>
                )}
                
                {/* Bouton de sortie plein écran moderne */}
                {isFullscreen && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleToggleFullscreen}
                    className="h-8 w-8 p-0 text-blue-600 hover:text-blue-700 hover:bg-blue-50 flex items-center justify-center bg-white/90 hover:bg-white border border-blue-200"
                    title="Quitter le plein écran (Echap)"
                  >
                    <Minimize className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </div>
          </CardHeader>
          
          <CardContent className={`${isFullscreen ? 'flex-1 flex flex-col justify-center' : ''} text-center space-y-8 p-8`}>
            {/* Badge catégorie moderne */}
            <div className="flex justify-center">
              <Badge variant="secondary" className={`${isFullscreen ? 'text-xl px-8 py-4' : 'text-base px-6 py-3'} bg-blue-100 text-blue-700 border-blue-200 font-semibold rounded-full`}>
                {currentCard.category}
              </Badge>
            </div>

            {/* Question moderne avec design épuré */}
            <div className="space-y-8">
              <div className="relative">
                <p className={`font-semibold text-gray-600 ${isFullscreen ? 'text-2xl' : 'text-xl'} mb-6`}>
                  Quelle est la commande Python pour :
                </p>
                
                {/* Card question avec design moderne et sobre */}
                <div className={`relative bg-gradient-to-br from-blue-50 to-blue-100 rounded-3xl border-2 border-blue-200 ${isFullscreen ? 'p-12' : 'p-8'} shadow-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 group`}>
                  <p className={`font-bold text-blue-800 relative z-10 ${isFullscreen ? 'text-4xl leading-relaxed' : 'text-2xl leading-relaxed'}`}>
                    {currentCard.description}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Réponse moderne avec animation */}
            <div className="min-h-[120px] flex items-center justify-center">
              {isFlipped ? (
                <div className={`animate-in fade-in slide-in-from-bottom-4 duration-500 w-full`}>
                  <div className={`bg-gradient-to-r from-blue-50 to-blue-100 border-2 border-blue-300 rounded-3xl ${isFullscreen ? 'p-12' : 'p-8'} shadow-xl`}>
                    <div className="flex items-center justify-center gap-3 mb-4">
                      <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                      <span className="text-blue-700 font-bold text-lg uppercase tracking-wider">Réponse</span>
                      <div className="w-3 h-3 bg-blue-600 rounded-full animate-pulse"></div>
                    </div>
                    <code className={`font-mono font-bold text-blue-800 bg-white rounded-2xl px-6 py-4 inline-block ${isFullscreen ? 'text-4xl' : 'text-2xl'} border-2 border-blue-200 shadow-lg break-all`}>
                      {currentCard.command}
                    </code>
                  </div>
                </div>
              ) : (
                <div className="flex items-center justify-center gap-3 text-gray-500">
                  <div className="flex gap-2">
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                    <div className="w-2 h-2 bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                  </div>
                  <span className="text-base font-medium">Appuyez sur Espace ou Entrée pour révéler</span>
                </div>
              )}
            </div>

            {/* Boutons de navigation modernes avec palette bleue */}
            <div className={`flex flex-col sm:flex-row justify-center items-center gap-4 pt-8 ${isFullscreen ? 'pt-12' : ''}`}>
              <div className="flex gap-4 sm:contents">
                <Button 
                  variant="outline" 
                  onClick={handlePrevious}
                  disabled={currentIndex === 0}
                  className={`${isFullscreen ? 'w-48 h-16 text-xl' : 'w-36 h-14 text-lg'} border-2 border-blue-300 text-blue-600 hover:bg-blue-50 hover:border-blue-400 hover:shadow-lg transition-all duration-200 disabled:opacity-30 disabled:border-gray-200 disabled:text-gray-400 group`}
                >
                  <ArrowLeft className={`${isFullscreen ? 'h-6 w-6' : 'h-5 w-5'} mr-2 transition-transform group-hover:-translate-x-1 group-disabled:translate-x-0`} />
                  Précédent
                </Button>

                <Button 
                  variant="outline"
                  onClick={handleNext}
                  disabled={currentIndex === cards.length - 1}
                  className={`${isFullscreen ? 'w-48 h-16 text-xl' : 'w-36 h-14 text-lg'} border-2 border-blue-300 text-blue-600 hover:bg-blue-50 hover:border-blue-400 hover:shadow-lg transition-all duration-200 disabled:opacity-30 disabled:border-gray-200 disabled:text-gray-400 group`}
                >
                  Suivant
                  <ArrowRight className={`${isFullscreen ? 'h-6 w-6' : 'h-5 w-5'} ml-2 transition-transform group-hover:translate-x-1 group-disabled:translate-x-0`} />
                </Button>
              </div>

              <Button 
                onClick={handleFlip}
                className={`${isFullscreen ? 'w-52 h-16 text-xl' : 'w-44 h-14 text-lg'} bg-blue-600 hover:bg-orange-600 text-white shadow-xl hover:shadow-2xl transition-all duration-200 transform hover:scale-105 active:scale-95 order-first sm:order-none`}
              >
                <RotateCcw className={`${isFullscreen ? 'h-6 w-6' : 'h-5 w-5'} mr-3 ${isFlipped ? 'rotate-180' : ''} transition-transform duration-300`} />
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