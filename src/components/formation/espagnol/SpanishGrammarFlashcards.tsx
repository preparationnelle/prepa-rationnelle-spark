import React, { useState, useEffect, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { RefreshCw, HelpCircle, Maximize, Minimize, RotateCcw, ArrowRight, ArrowLeft, Lightbulb } from 'lucide-react';
import type { SpanishFlashcard } from '@/data/spanishGrammar/types';

interface SpanishGrammarFlashcardsProps {
  cards: SpanishFlashcard[];
  /** Sous-titre affiché sous le bandeau « Mémorisation » — ex. "Le Subjonctif" */
  chapterTitle: string;
}

// Calqué sur PythonFlashcardsPage (formation Python) : carte cliquable,
// barre de progression, navigation clavier, mélange, plein écran. Charte « carnet ».
export const SpanishGrammarFlashcards: React.FC<SpanishGrammarFlashcardsProps> = ({ cards: initialCards, chapterTitle }) => {
  const [cards, setCards] = useState<SpanishFlashcard[]>(initialCards);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showKeyboardHelp, setShowKeyboardHelp] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    setCards(initialCards);
    setCurrentIndex(0);
    setIsFlipped(false);
  }, [initialCards]);

  const handleNext = useCallback(() => {
    setCurrentIndex((prev) => (prev < cards.length - 1 ? prev + 1 : prev));
    setIsFlipped(false);
  }, [cards.length]);

  const handlePrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev > 0 ? prev - 1 : prev));
    setIsFlipped(false);
  }, []);

  const handleFlip = useCallback(() => setIsFlipped((f) => !f), []);

  const handleShuffle = () => {
    setCards((prev) => [...prev].sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
    setIsFlipped(false);
  };

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
          setIsFullscreen((v) => !v);
          break;
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrevious, handleFlip, showKeyboardHelp, isFullscreen]);

  if (cards.length === 0) return null;

  const currentCard = cards[currentIndex];
  const progress = ((currentIndex + 1) / cards.length) * 100;

  return (
    <div className={isFullscreen ? 'fixed inset-0 z-50 flex items-center justify-center bg-[#FAF8F4] p-8' : ''}>
      <div className={`w-full ${isFullscreen ? 'max-w-4xl' : 'max-w-2xl mx-auto'}`}>
        {/* En-tête + actions */}
        {!isFullscreen && (
          <div className="flex justify-between items-end mb-6">
            <div>
              <div className="carnet-eyebrow mb-2">Espagnol · Mémorisation</div>
              <h2 className="font-lora text-[26px] sm:text-[30px] text-carnet-ink leading-tight">
                Flashcards <em className="italic text-carnet-red">{chapterTitle}</em>
              </h2>
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
        )}

        {/* Barre de progression */}
        <div className="flex items-center gap-4 mb-4 font-instrument text-sm text-carnet-ink-soft">
          <span>Carte {currentIndex + 1} / {cards.length}</span>
          <div className="h-1 flex-1 bg-[rgba(78,55,30,0.08)] rounded-full overflow-hidden">
            <div
              className="h-full bg-carnet-ink transition-all duration-300 rounded-full"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {/* Carte */}
        <div className="relative group">
          <Card
            className="relative min-h-[400px] flex flex-col justify-center items-center text-center p-8 cursor-pointer transition-all duration-300 border-[rgba(78,55,30,0.14)] shadow-none hover:shadow-[0_8px_24px_rgba(78,55,30,0.08)] bg-white rounded-2xl"
            onClick={handleFlip}
          >
            <CardContent className="w-full flex flex-col items-center justify-center space-y-8">
              <Badge
                variant="outline"
                className="font-instrument text-[10px] uppercase tracking-widest border-[rgba(78,55,30,0.18)] text-carnet-ink-mute"
              >
                {currentCard.category}
              </Badge>

              <div className="flex-1 flex items-center justify-center w-full">
                {!isFlipped ? (
                  <div className="animate-in fade-in duration-300 max-w-lg">
                    <h3 className="font-lora text-[22px] sm:text-[24px] text-carnet-ink leading-relaxed">
                      {currentCard.front}
                    </h3>
                    {currentCard.hint && (
                      <p className="font-instrument text-sm text-carnet-ink-mute mt-5 italic flex items-center justify-center gap-2">
                        <Lightbulb className="h-3.5 w-3.5 text-carnet-red" />
                        {currentCard.hint}
                      </p>
                    )}
                    <p className="font-instrument text-xs text-carnet-ink-mute mt-6 uppercase tracking-widest">
                      Cliquez pour retourner
                    </p>
                  </div>
                ) : (
                  <div className="w-full animate-in fade-in zoom-in-95 duration-300 max-w-lg">
                    <div className="bg-carnet-paper-2 border-l-[3px] border-carnet-red rounded-xl p-6 w-full text-left">
                      <p className="font-instrument text-lg text-carnet-ink leading-relaxed whitespace-pre-wrap">
                        {currentCard.back}
                      </p>
                    </div>
                    <p className="font-instrument text-xs text-carnet-ink-mute mt-6 uppercase tracking-widest">
                      Réponse
                    </p>
                  </div>
                )}
              </div>
            </CardContent>

            {/* Aide clavier */}
            <div className="absolute top-4 right-4 z-10">
              <Button
                variant="ghost"
                size="icon"
                className="text-carnet-ink-mute hover:text-carnet-ink hover:bg-transparent"
                onClick={(e) => {
                  e.stopPropagation();
                  setShowKeyboardHelp(!showKeyboardHelp);
                }}
              >
                <HelpCircle className="h-5 w-5" />
              </Button>
              {showKeyboardHelp && (
                <div className="absolute right-0 top-10 w-64 p-4 carnet-card shadow-xl rounded-xl z-20 font-instrument text-sm text-carnet-ink-soft text-left">
                  <h4 className="font-semibold text-carnet-ink mb-2">Raccourcis clavier</h4>
                  <div className="space-y-1">
                    <div className="flex justify-between"><span>Suivant</span><kbd className="bg-[rgba(78,55,30,0.08)] px-1.5 rounded text-xs">→</kbd></div>
                    <div className="flex justify-between"><span>Précédent</span><kbd className="bg-[rgba(78,55,30,0.08)] px-1.5 rounded text-xs">←</kbd></div>
                    <div className="flex justify-between"><span>Retourner</span><kbd className="bg-[rgba(78,55,30,0.08)] px-1.5 rounded text-xs">Espace</kbd></div>
                    <div className="flex justify-between"><span>Plein écran</span><kbd className="bg-[rgba(78,55,30,0.08)] px-1.5 rounded text-xs">F</kbd></div>
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
  );
};

export default SpanishGrammarFlashcards;
