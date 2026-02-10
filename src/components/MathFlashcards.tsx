import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, RotateCcw, Check, X, Bookmark } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { type MathFlashcard } from '@/data/mathFlashcardsData';

interface MathFlashcardsProps {
  flashcards: MathFlashcard[];
  title: string;
  chapterNumber: number;
  hideHeader?: boolean;
}

export const MathFlashcards: React.FC<MathFlashcardsProps> = ({
  flashcards,
  title,
  chapterNumber,
  hideHeader = false
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userResponses, setUserResponses] = useState<Record<number, 'correct' | 'incorrect' | 'skip'>>({});
  const [markedForReview, setMarkedForReview] = useState<Set<number>>(new Set());
  const [isFlipped, setIsFlipped] = useState(false);

  const currentCard = flashcards[currentIndex];
  const totalCards = flashcards.length;

  const nextCard = useCallback(() => {
    if (currentIndex < totalCards - 1) {
      setCurrentIndex(prev => prev + 1);
      setShowAnswer(false);
      setIsFlipped(false);
    }
  }, [currentIndex, totalCards]);

  const prevCard = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex(prev => prev - 1);
      setShowAnswer(false);
      setIsFlipped(false);
    }
  }, [currentIndex]);

  const resetProgress = () => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setUserResponses({});
    setMarkedForReview(new Set());
    setIsFlipped(false);
  };

  const toggleAnswer = useCallback(() => {
    setShowAnswer(prev => !prev);
    setIsFlipped(prev => !prev);
  }, []);

  const markResponse = (response: 'correct' | 'incorrect' | 'skip') => {
    setUserResponses(prev => ({
      ...prev,
      [currentIndex]: response
    }));

    // Auto-advance
    setTimeout(() => {
      if (currentIndex < totalCards - 1) {
        nextCard();
      }
    }, 400);
  };

  const toggleReview = () => {
    setMarkedForReview(prev => {
      const newSet = new Set(prev);
      if (newSet.has(currentCard.id)) {
        newSet.delete(currentCard.id);
      } else {
        newSet.add(currentCard.id);
      }
      return newSet;
    });
  };

  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const target = e.target as HTMLElement | null;
    if (target && (target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
      return;
    }

    switch (e.key) {
      case 'ArrowRight':
      case ' ':
        e.preventDefault();
        if (showAnswer) {
          markResponse('correct');
        } else {
          toggleAnswer();
        }
        break;
      case 'ArrowLeft':
        e.preventDefault();
        if (showAnswer) {
          markResponse('incorrect');
        } else {
          prevCard();
        }
        break;
      case 'Enter':
        e.preventDefault();
        if (showAnswer) {
          markResponse('skip');
        }
        break;
      case 'r':
      case 'R':
        e.preventDefault();
        toggleReview();
        break;
    }
  }, [showAnswer, toggleAnswer, prevCard, toggleReview]); // Removed markResponse from deps to avoid loop, it relies on state setter anyway

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  const renderTextWithLatex = (text: string) => {
    if (!text) return null;
    return text.split(/(\$[^$]+\$)/).map((part, idx) => {
      if (part.startsWith('$') && part.endsWith('$')) {
        return <LatexRenderer key={idx} latex={part.slice(1, -1)} />;
      } else if (part.trim()) {
        return <span key={idx}>{part}</span>;
      }
      return null;
    });
  };

  if (!currentCard) {
    return (
      <div className="max-w-3xl mx-auto p-4 text-center text-slate-500">
        Aucune flashcard disponible.
      </div>
    );
  }

  // Completion view
  if (currentIndex === totalCards - 1 && userResponses[currentIndex]) {
    const correctCount = Object.values(userResponses).filter(r => r === 'correct').length;
    return (
      <div className="max-w-2xl mx-auto px-4 py-12">
        <Card className="border-0 shadow-sm bg-white text-center p-8">
          <h2 className="text-2xl font-serif text-slate-900 mb-4">Session terminée</h2>
          <div className="flex justify-center items-center gap-8 mb-8">
            <div className="text-center">
              <div className="text-3xl font-semibold text-emerald-600">{correctCount}</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Maîtrisées</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-semibold text-slate-900">{totalCards}</div>
              <div className="text-xs text-slate-500 uppercase tracking-wider mt-1">Total</div>
            </div>
          </div>
          <Button onClick={resetProgress} variant="outline" className="border-slate-200 hover:bg-slate-50">
            <RotateCcw className="h-4 w-4 mr-2" />
            Recommencer
          </Button>
        </Card>
      </div>
    );
  }

  const progress = ((currentIndex + 1) / totalCards) * 100;

  return (
    <div className="max-w-3xl mx-auto px-4 py-8">
      {/* Header */}
      {!hideHeader && (
        <div className="mb-8 text-center sm:text-left">
          <Badge variant="outline" className="mb-3 px-3 py-1 border-slate-200 text-slate-500 font-normal">
            Chapitre {chapterNumber}
          </Badge>
          <h2 className="text-3xl font-serif text-slate-900 tracking-tight">{title}</h2>
        </div>
      )}

      {/* Progress Line */}
      <div className="flex items-center gap-4 mb-6">
        <span className="text-xs font-medium text-slate-400 font-mono">
          {currentIndex + 1} / {totalCards}
        </span>
        <div className="h-[2px] w-full flex-1 bg-slate-100 rounded-full overflow-hidden">
          <div
            className="h-full bg-slate-900 transition-all duration-500 ease-out"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Card */}
      <div className="perspective-1000">
        <Card
          className="min-h-[400px] bg-white border-slate-200 shadow-sm transition-all duration-300 relative overflow-hidden group"
        >
          <CardContent className="h-full p-8 sm:p-12 flex flex-col items-center justify-center text-center">

            {/* Review bookmark */}
            <button
              onClick={toggleReview}
              className={`absolute top-6 right-6 transition-colors ${markedForReview.has(currentCard.id) ? 'text-amber-500' : 'text-slate-200 hover:text-slate-300'}`}
            >
              <Bookmark className="h-5 w-5" fill={markedForReview.has(currentCard.id) ? "currentColor" : "none"} />
            </button>

            <div className="flex-1 flex flex-col justify-center items-center w-full max-w-2xl">
              {!showAnswer ? (
                <div className="animate-in fade-in zoom-in-95 duration-300">
                  <h3 className="text-2xl sm:text-3xl font-serif text-slate-900 leading-relaxed mb-6">
                    {renderTextWithLatex(currentCard.front)}
                  </h3>
                  {currentCard.frontLatex && (
                    <div className="mt-4 p-4 rounded-lg bg-slate-50">
                      <LatexRenderer latex={currentCard.frontLatex} />
                    </div>
                  )}
                  <div className="mt-12">
                    <Button
                      onClick={toggleAnswer}
                      className="bg-slate-900 hover:bg-slate-800 text-white rounded-full px-8 shadow-none transition-transform active:scale-95"
                    >
                      Révéler la réponse
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="animate-in fade-in slide-in-from-bottom-2 duration-300 w-full">
                  <div className="prose prose-slate max-w-none mb-8">
                    <div className="text-xl text-slate-700 leading-relaxed">
                      {renderTextWithLatex(currentCard.back)}
                    </div>
                    {currentCard.backLatex && (
                      <div className="mt-4 p-6 rounded-lg bg-slate-900 text-slate-50 overflow-x-auto text-left shadow-inner">
                        <LatexRenderer latex={currentCard.backLatex} />
                      </div>
                    )}
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-8">
                    <Button
                      onClick={() => markResponse('incorrect')}
                      variant="outline"
                      className="w-full sm:w-auto border-red-100 text-red-600 hover:bg-red-50 hover:text-red-700 hover:border-red-200"
                    >
                      <X className="h-4 w-4 mr-2" />
                      À revoir
                    </Button>
                    <Button
                      onClick={() => markResponse('correct')}
                      variant="outline"
                      className="w-full sm:w-auto border-emerald-100 text-emerald-600 hover:bg-emerald-50 hover:text-emerald-700 hover:border-emerald-200"
                    >
                      <Check className="h-4 w-4 mr-2" />
                      Maîtrisée
                    </Button>
                  </div>
                </div>
              )}
            </div>

          </CardContent>
        </Card>
      </div>

      {/* Navigation Controls */}
      <div className="flex justify-between items-center mt-8">
        <Button
          onClick={prevCard}
          disabled={currentIndex === 0}
          variant="ghost"
          className="text-slate-400 hover:text-slate-900"
        >
          <ChevronLeft className="h-5 w-5" />
        </Button>

        <div />

        <Button
          onClick={nextCard}
          disabled={currentIndex === totalCards - 1}
          variant="ghost"
          className="text-slate-400 hover:text-slate-900"
        >
          <ChevronRight className="h-5 w-5" />
        </Button>
      </div>

      <div className="mt-12 text-center">
        <p className="text-xs text-slate-300 font-medium">
          ESPACE · FLIP &nbsp;|&nbsp; ← → · NAVIGUER &nbsp;|&nbsp; R · REVOIR
        </p>
      </div>
    </div>
  );
};

