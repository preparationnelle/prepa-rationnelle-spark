import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Home, ChevronRight, RefreshCw, HelpCircle, Maximize, Minimize, RotateCcw, ArrowRight, ArrowLeft } from 'lucide-react';
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
          if (showKeyboardHelp) setShowKeyboardHelp(false);
          else if (isFullscreen) setIsFullscreen(false);
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
  }, [currentIndex, isFlipped, showKeyboardHelp, isFullscreen, cards.length]);

  const handleShuffle = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const handleNext = () => {
    if (currentIndex < cards.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setIsFlipped(false);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setIsFlipped(false);
    }
  };

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };

  if (cards.length === 0) return null;

  const currentCard = cards[currentIndex];
  // Calculate progress percentage
  const progress = ((currentIndex + 1) / cards.length) * 100;

  return (
    <div className={`min-h-screen bg-white ${isFullscreen ? 'overflow-hidden' : ''}`}>
      {/* Sticky Breadcrumb (Hidden in Fullscreen) */}
      {!isFullscreen && (
        <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center text-sm text-gray-500">
              <Link to="/" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
                <Home className="h-3.5 w-3.5" />
                <span>Accueil</span>
              </Link>
              <ChevronRight className="h-3.5 w-3.5 mx-1" />
              <Link to="/formations" className="hover:text-gray-900 transition-colors">
                Formations
              </Link>
              <ChevronRight className="h-3.5 w-3.5 mx-1" />
              <span className="text-gray-900 font-medium">Flashcards Python</span>
            </div>
          </div>
        </nav>
      )}

      <div className={`
        ${isFullscreen ? 'fixed inset-0 z-50 flex items-center justify-center bg-white p-8' : 'container mx-auto py-12 px-4 max-w-5xl'}
      `}>

        {/* Header (Hidden in Fullscreen) */}
        {!isFullscreen && (
          <div className="mb-12">
            <div className="flex justify-between items-end mb-6">
              <div>
                <h1 className="text-3xl font-bold text-gray-900 mb-2 tracking-tight">
                  Flashcards Python
                </h1>
                <p className="text-gray-500">
                  Maîtrisez les 54 commandes essentielles du programme.
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleShuffle}
                  className="gap-2 text-gray-600 hover:text-gray-900"
                >
                  <RefreshCw className="h-3.5 w-3.5" />
                  Mélanger
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsFullscreen(true)}
                  className="gap-2 text-gray-600 hover:text-gray-900"
                >
                  <Maximize className="h-3.5 w-3.5" />
                  Plein écran
                </Button>
              </div>
            </div>

            <PythonNavigationTabs className="mb-8" />
          </div>
        )}

        {/* Main Flashcard Interface */}
        <div className={`w-full ${isFullscreen ? 'max-w-4xl' : 'max-w-2xl mx-auto'}`}>

          {/* Progress Bar */}
          <div className="flex items-center gap-4 mb-4 text-sm font-medium text-gray-500">
            <span>Carte {currentIndex + 1} / {cards.length}</span>
            <div className="h-1 flex-1 bg-gray-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-slate-900 transition-all duration-300"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Card Area */}
          <div className="relative perspective-1000 group">
            <Card
              className={`
                   relative min-h-[400px] flex flex-col justify-center items-center text-center p-8 cursor-pointer transition-all duration-500
                   border-gray-200 shadow-sm hover:shadow-md bg-white
                `}
              onClick={handleFlip}
            >
              <CardContent className="w-full flex flex-col items-center justify-center space-y-8">

                {/* Category Badge */}
                <Badge variant="outline" className="mb-4 text-gray-400 border-gray-200 font-normal uppercase tracking-wider text-xs">
                  {currentCard.category}
                </Badge>

                {/* Content */}
                <div className="flex-1 flex items-center justify-center w-full">
                  {!isFlipped ? (
                    <div className="animate-in fade-in duration-300">
                      <h3 className="text-2xl font-serif text-gray-900 font-medium leading-relaxed">
                        {currentCard.description}
                      </h3>
                      <p className="text-sm text-gray-400 mt-6 font-medium tracking-wide uppercase">
                        Cliquez pour retourner
                      </p>
                    </div>
                  ) : (
                    <div className="w-full animate-in fade-in zoom-in-95 duration-300">
                      <div className="bg-slate-900 rounded-lg p-6 w-full shadow-inner text-left overflow-x-auto">
                        <code className="font-mono text-lg text-emerald-400 block whitespace-pre-wrap">
                          {currentCard.command}
                        </code>
                      </div>
                      <p className="text-sm text-gray-400 mt-6 font-medium tracking-wide uppercase">
                        Réponse
                      </p>
                    </div>
                  )}
                </div>

              </CardContent>
            </Card>

            {/* Minimalist Controls */}
            <div className="absolute top-4 right-4 z-10">
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-400 hover:text-gray-900 hover:bg-transparent"
                onClick={(e) => { e.stopPropagation(); setShowKeyboardHelp(!showKeyboardHelp); }}
              >
                <HelpCircle className="h-5 w-5" />
              </Button>
              {showKeyboardHelp && (
                <div className="absolute right-0 top-10 w-64 p-4 bg-white border border-gray-100 shadow-xl rounded-lg z-20 text-sm text-gray-500">
                  <h4 className="font-semibold text-gray-900 mb-2">Raccourcis clavier</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between"><span>Suivant</span> <kbd className="bg-gray-100 px-1 rounded">→</kbd></div>
                    <div className="flex justify-between"><span>Précédent</span> <kbd className="bg-gray-100 px-1 rounded">←</kbd></div>
                    <div className="flex justify-between"><span>Retourner</span> <kbd className="bg-gray-100 px-1 rounded">Espace</kbd></div>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="flex justify-between items-center mt-8">
            <Button
              variant="ghost"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="text-gray-500 hover:text-gray-900 font-normal"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Précédent
            </Button>

            <Button onClick={handleFlip} className="min-w-[120px] bg-slate-900 hover:bg-slate-800 text-white shadow-none rounded-full">
              {isFlipped ? <RotateCcw className="h-4 w-4 mr-2" /> : null}
              {isFlipped ? 'Revoir' : 'Révéler'}
            </Button>

            <Button
              variant="ghost"
              onClick={handleNext}
              disabled={currentIndex === cards.length - 1}
              className="text-gray-500 hover:text-gray-900 font-normal"
            >
              Suivant
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>

          {/* Fullscreen Exit Button */}
          {isFullscreen && (
            <div className="absolute top-8 right-8">
              <Button variant="outline" size="icon" onClick={() => setIsFullscreen(false)}>
                <Minimize className="h-4 w-4" />
              </Button>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export default PythonFlashcardsPage;