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
        category: data.title,
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
  const progress = ((currentIndex + 1) / cards.length) * 100;

  return (
    <div className={`carnet-paper min-h-screen ${isFullscreen ? 'overflow-hidden' : ''}`}>
      {/* Fil d'Ariane */}
      {!isFullscreen && (
        <nav className="sticky top-0 z-40 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
          <div className="container mx-auto px-4 py-3">
            <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute flex-wrap">
              <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
                <Home className="h-3.5 w-3.5" />
                <span>Accueil</span>
              </Link>
              <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
              <Link to="/formations" className="hover:text-carnet-red transition-colors">
                Formations
              </Link>
              <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
              <span className="carnet-eyebrow text-[11px]">Flashcards Python</span>
            </div>
          </div>
        </nav>
      )}

      <div className={`
        ${isFullscreen ? 'fixed inset-0 z-50 flex items-center justify-center bg-[#FAF8F4] p-8' : 'container mx-auto py-12 px-4 max-w-5xl'}
      `}>
        {/* Header */}
        {!isFullscreen && (
          <div className="mb-10">
            <div className="flex justify-between items-end mb-6">
              <div>
                <div className="carnet-eyebrow mb-4">Python ECG · Mémorisation</div>
                <h1 className="font-lora text-[36px] sm:text-[44px] text-carnet-ink leading-tight mb-4">
                  Flashcards <em className="italic text-carnet-red">Python</em>
                </h1>
                <hr className="w-10 h-0.5 bg-carnet-ink border-0 mb-4" />
                <p className="font-instrument text-[15px] text-carnet-ink-soft">
                  Maîtrisez les 54 commandes essentielles du programme.
                </p>
              </div>
              <div className="hidden sm:flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleShuffle}
                  className="border-[rgba(78,55,30,0.18)] text-carnet-ink-soft hover:bg-[rgba(193,68,58,0.06)] hover:text-carnet-red hover:border-carnet-red font-instrument rounded-full h-9 px-4 text-xs bg-transparent"
                >
                  <RefreshCw className="h-3.5 w-3.5 mr-1.5" />
                  Mélanger
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsFullscreen(true)}
                  className="border-[rgba(78,55,30,0.18)] text-carnet-ink-soft hover:bg-[rgba(193,68,58,0.06)] hover:text-carnet-red hover:border-carnet-red font-instrument rounded-full h-9 px-4 text-xs bg-transparent"
                >
                  <Maximize className="h-3.5 w-3.5 mr-1.5" />
                  Plein écran
                </Button>
              </div>
            </div>
            <PythonNavigationTabs className="mb-8" />
          </div>
        )}

        {/* Flashcard Interface */}
        <div className={`w-full ${isFullscreen ? 'max-w-4xl' : 'max-w-2xl mx-auto'}`}>
          {/* Progress Bar */}
          <div className="flex items-center gap-4 mb-4 font-instrument text-sm text-carnet-ink-soft">
            <span>Carte {currentIndex + 1} / {cards.length}</span>
            <div className="h-1 flex-1 bg-[rgba(78,55,30,0.08)] rounded-full overflow-hidden">
              <div
                className="h-full bg-carnet-ink transition-all duration-300 rounded-full"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Card */}
          <div className="relative group">
            <Card
              className="relative min-h-[400px] flex flex-col justify-center items-center text-center p-8 cursor-pointer transition-all duration-300 border-[rgba(78,55,30,0.14)] shadow-none hover:shadow-[0_8px_24px_rgba(78,55,30,0.08)] bg-white rounded-2xl"
              onClick={handleFlip}
            >
              <CardContent className="w-full flex flex-col items-center justify-center space-y-8">
                {/* Category Badge */}
                <Badge
                  variant="outline"
                  className="font-instrument text-[10px] uppercase tracking-widest border-[rgba(78,55,30,0.18)] text-carnet-ink-mute"
                >
                  {currentCard.category}
                </Badge>

                {/* Content */}
                <div className="flex-1 flex items-center justify-center w-full">
                  {!isFlipped ? (
                    <div className="animate-in fade-in duration-300">
                      <h3 className="font-lora text-[22px] text-carnet-ink leading-relaxed">
                        {currentCard.description}
                      </h3>
                      <p className="font-instrument text-xs text-carnet-ink-mute mt-6 uppercase tracking-widest">
                        Cliquez pour retourner
                      </p>
                    </div>
                  ) : (
                    <div className="w-full animate-in fade-in zoom-in-95 duration-300">
                      <div className="bg-carnet-ink rounded-xl p-6 w-full shadow-inner text-left overflow-x-auto">
                        <code className="font-mono text-lg text-emerald-400 block whitespace-pre-wrap">
                          {currentCard.command}
                        </code>
                      </div>
                      <p className="font-instrument text-xs text-carnet-ink-mute mt-6 uppercase tracking-widest">
                        Réponse
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>

              {/* Keyboard help */}
              <div className="absolute top-4 right-4 z-10">
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-carnet-ink-mute hover:text-carnet-ink hover:bg-transparent"
                  onClick={(e) => { e.stopPropagation(); setShowKeyboardHelp(!showKeyboardHelp); }}
                >
                  <HelpCircle className="h-5 w-5" />
                </Button>
                {showKeyboardHelp && (
                  <div className="absolute right-0 top-10 w-64 p-4 carnet-card shadow-xl rounded-xl z-20 font-instrument text-sm text-carnet-ink-soft">
                    <h4 className="font-semibold text-carnet-ink mb-2">Raccourcis clavier</h4>
                    <div className="space-y-1">
                      <div className="flex justify-between"><span>Suivant</span><kbd className="bg-[rgba(78,55,30,0.08)] px-1.5 rounded text-xs">→</kbd></div>
                      <div className="flex justify-between"><span>Précédent</span><kbd className="bg-[rgba(78,55,30,0.08)] px-1.5 rounded text-xs">←</kbd></div>
                      <div className="flex justify-between"><span>Retourner</span><kbd className="bg-[rgba(78,55,30,0.08)] px-1.5 rounded text-xs">Espace</kbd></div>
                    </div>
                  </div>
                )}
              </div>
            </Card>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-8">
            <Button
              variant="ghost"
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="font-instrument text-carnet-ink-soft hover:text-carnet-ink hover:bg-transparent disabled:opacity-30"
            >
              <ArrowLeft className="h-4 w-4 mr-2" />
              Précédent
            </Button>

            <Button
              onClick={handleFlip}
              className="min-w-[120px] bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold rounded-full h-9 px-5 text-xs border-0"
            >
              {isFlipped && <RotateCcw className="h-3.5 w-3.5 mr-2" />}
              {isFlipped ? 'Revoir' : 'Révéler'}
            </Button>

            <Button
              variant="ghost"
              onClick={handleNext}
              disabled={currentIndex === cards.length - 1}
              className="font-instrument text-carnet-ink-soft hover:text-carnet-ink hover:bg-transparent disabled:opacity-30"
            >
              Suivant
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </div>

          {/* Fullscreen Exit */}
          {isFullscreen && (
            <div className="absolute top-8 right-8">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setIsFullscreen(false)}
                className="border-[rgba(78,55,30,0.18)] text-carnet-ink-soft hover:bg-[rgba(193,68,58,0.06)] hover:text-carnet-red"
              >
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
