import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Bookmark, Check, ChevronLeft, ChevronRight, RotateCcw, Shuffle, X } from 'lucide-react';

export interface ThemedFlashcardItem {
  id?: string | number;
  front: string;
  back: string;
  category?: string;
  hint?: string;
}

interface ThemedFlashcardsProps {
  cards: ThemedFlashcardItem[];
  title?: string;
  chip?: string;
  frontLabel?: string;
  backLabel?: string;
  showCategories?: boolean;
  hideHeader?: boolean;
  enableShuffle?: boolean;
  onMarkReview?: (card: ThemedFlashcardItem, marked: boolean) => void;
  isMarkedForReview?: (card: ThemedFlashcardItem) => boolean;
  onProgress?: (studied: number) => void;
}

export const ThemedFlashcards: React.FC<ThemedFlashcardsProps> = ({
  cards,
  title,
  chip,
  frontLabel,
  backLabel,
  showCategories = false,
  hideHeader = false,
  enableShuffle = false,
  onMarkReview,
  isMarkedForReview,
  onProgress,
}) => {
  const [order, setOrder] = useState<ThemedFlashcardItem[]>(cards);
  const [selectedCategory, setSelectedCategory] = useState<string | 'all'>('all');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [userResponses, setUserResponses] = useState<Record<number, 'correct' | 'incorrect' | 'skip'>>({});
  const [localMarked, setLocalMarked] = useState<Set<string | number>>(new Set());

  useEffect(() => {
    setOrder(cards);
  }, [cards]);

  const categories = useMemo(() => {
    if (!showCategories) return [] as string[];
    return Array.from(new Set(cards.map((c) => c.category).filter(Boolean) as string[]));
  }, [cards, showCategories]);

  const filteredCards = useMemo(() => {
    if (!showCategories || selectedCategory === 'all') return order;
    return order.filter((c) => c.category === selectedCategory);
  }, [order, selectedCategory, showCategories]);

  const totalCards = filteredCards.length;
  const currentCard = filteredCards[currentIndex];

  const cardKey = (card?: ThemedFlashcardItem, idx: number = 0) =>
    card?.id ?? `${card?.front ?? ''}::${idx}`;

  const isMarked = useCallback(
    (card?: ThemedFlashcardItem) => {
      if (!card) return false;
      if (isMarkedForReview) return isMarkedForReview(card);
      return localMarked.has(cardKey(card, currentIndex));
    },
    [isMarkedForReview, localMarked, currentIndex],
  );

  const goNext = useCallback(() => {
    if (currentIndex < totalCards - 1) {
      setCurrentIndex((i) => i + 1);
      setShowAnswer(false);
    }
  }, [currentIndex, totalCards]);

  const goPrev = useCallback(() => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
      setShowAnswer(false);
    }
  }, [currentIndex]);

  const toggleAnswer = useCallback(() => {
    setShowAnswer((v) => !v);
  }, []);

  const resetProgress = useCallback(() => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setUserResponses({});
    setLocalMarked(new Set());
  }, []);

  const shuffle = useCallback(() => {
    setOrder((prev) => [...prev].sort(() => Math.random() - 0.5));
    setCurrentIndex(0);
    setShowAnswer(false);
  }, []);

  const markResponse = useCallback(
    (response: 'correct' | 'incorrect' | 'skip') => {
      setUserResponses((prev) => ({ ...prev, [currentIndex]: response }));
      if (response === 'correct' && onProgress) {
        onProgress(Object.values({ ...userResponses, [currentIndex]: response }).filter((r) => r === 'correct').length);
      }
      setTimeout(() => {
        if (currentIndex < totalCards - 1) goNext();
      }, 300);
    },
    [currentIndex, totalCards, goNext, onProgress, userResponses],
  );

  const toggleReview = useCallback(() => {
    if (!currentCard) return;
    const key = cardKey(currentCard, currentIndex);
    const wasMarked = isMarked(currentCard);
    if (onMarkReview) {
      onMarkReview(currentCard, !wasMarked);
      return;
    }
    setLocalMarked((prev) => {
      const next = new Set(prev);
      if (next.has(key)) next.delete(key);
      else next.add(key);
      return next;
    });
  }, [currentCard, currentIndex, isMarked, onMarkReview]);

  const handleCategoryChange = (category: string | 'all') => {
    setSelectedCategory(category);
    setCurrentIndex(0);
    setShowAnswer(false);
  };

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (
        target &&
        (target.tagName === 'INPUT' ||
          target.tagName === 'SELECT' ||
          target.tagName === 'TEXTAREA' ||
          target.isContentEditable)
      ) {
        return;
      }
      switch (e.key) {
        case 'ArrowRight':
        case ' ':
          e.preventDefault();
          if (showAnswer) markResponse('correct');
          else toggleAnswer();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          if (showAnswer) markResponse('incorrect');
          else goPrev();
          break;
        case 'Enter':
          e.preventDefault();
          if (showAnswer) markResponse('skip');
          else toggleAnswer();
          break;
        case 'r':
        case 'R':
          e.preventDefault();
          toggleReview();
          break;
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [showAnswer, toggleAnswer, goPrev, markResponse, toggleReview]);

  if (!currentCard) {
    return (
      <div className="max-w-3xl mx-auto p-4 text-center text-slate-500">
        Aucune flashcard disponible.
      </div>
    );
  }

  if (currentIndex === totalCards - 1 && userResponses[currentIndex]) {
    const correctCount = Object.values(userResponses).filter((r) => r === 'correct').length;
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
      {!hideHeader && (title || chip) && (
        <div className="mb-8 text-center sm:text-left">
          {chip && (
            <Badge variant="outline" className="mb-3 px-3 py-1 border-slate-200 text-slate-500 font-normal">
              {chip}
            </Badge>
          )}
          {title && (
            <h2 className="text-3xl font-serif text-slate-900 tracking-tight">{title}</h2>
          )}
        </div>
      )}

      {showCategories && categories.length > 0 && (
        <div className="mb-6 flex flex-wrap gap-2">
          <button
            onClick={() => handleCategoryChange('all')}
            className={`text-xs uppercase tracking-wider px-3 py-1.5 rounded-full border transition-colors ${
              selectedCategory === 'all'
                ? 'bg-slate-900 text-white border-slate-900'
                : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
            }`}
          >
            Toutes ({cards.length})
          </button>
          {categories.map((cat) => {
            const count = cards.filter((c) => c.category === cat).length;
            return (
              <button
                key={cat}
                onClick={() => handleCategoryChange(cat)}
                className={`text-xs uppercase tracking-wider px-3 py-1.5 rounded-full border transition-colors ${
                  selectedCategory === cat
                    ? 'bg-slate-900 text-white border-slate-900'
                    : 'bg-white text-slate-600 border-slate-200 hover:bg-slate-50'
                }`}
              >
                {cat} ({count})
              </button>
            );
          })}
        </div>
      )}

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
        {enableShuffle && (
          <button
            onClick={shuffle}
            aria-label="Mélanger les cartes"
            className="text-slate-400 hover:text-slate-700 transition-colors"
          >
            <Shuffle className="h-4 w-4" />
          </button>
        )}
      </div>

      <div className="perspective-1000">
        <Card className="min-h-[400px] bg-white border-slate-200 shadow-sm transition-all duration-300 relative overflow-hidden group">
          <CardContent className="h-full p-8 sm:p-12 flex flex-col items-center justify-center text-center">
            <button
              onClick={toggleReview}
              aria-label="Marquer à revoir"
              className={`absolute top-6 right-6 transition-colors ${
                isMarked(currentCard) ? 'text-amber-500' : 'text-slate-200 hover:text-slate-300'
              }`}
            >
              <Bookmark className="h-5 w-5" fill={isMarked(currentCard) ? 'currentColor' : 'none'} />
            </button>

            {currentCard.category && (
              <Badge
                variant="outline"
                className="absolute top-6 left-6 px-2.5 py-0.5 text-[10px] uppercase tracking-wider border-slate-200 text-slate-500 font-normal"
              >
                {currentCard.category}
              </Badge>
            )}

            <div className="flex-1 flex flex-col justify-center items-center w-full max-w-2xl pt-6">
              {!showAnswer ? (
                <div className="animate-in fade-in zoom-in-95 duration-300 w-full">
                  {frontLabel && (
                    <div className="text-xs uppercase tracking-wider text-slate-400 mb-4">
                      {frontLabel}
                    </div>
                  )}
                  <h3 className="text-2xl sm:text-3xl font-serif text-slate-900 leading-relaxed mb-6">
                    {currentCard.front}
                  </h3>
                  <div className="mt-10">
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
                  {backLabel && (
                    <div className="text-xs uppercase tracking-wider text-slate-400 mb-4">
                      {backLabel}
                    </div>
                  )}
                  <div className="prose prose-slate max-w-none mb-6">
                    <div className="text-2xl sm:text-3xl font-serif text-slate-900 leading-relaxed">
                      {currentCard.back}
                    </div>
                    {currentCard.hint && (
                      <div className="mt-5 p-5 rounded-lg bg-pr-orange-pale border border-pr-orange-soft/40 text-pr-orange-dark text-base italic">
                        {currentCard.hint}
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

      <div className="flex justify-between items-center mt-8">
        <Button
          onClick={goPrev}
          disabled={currentIndex === 0}
          variant="outline"
          className="border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 disabled:opacity-30 rounded-full px-5 h-11"
        >
          <ChevronLeft className="h-5 w-5 mr-1.5" />
          Précédente
        </Button>

        <span className="text-xs text-slate-400 font-mono hidden sm:inline">
          Carte {currentIndex + 1} / {totalCards}
        </span>

        <Button
          onClick={goNext}
          disabled={currentIndex === totalCards - 1}
          variant="outline"
          className="border-slate-200 text-slate-700 hover:bg-slate-50 hover:text-slate-900 disabled:opacity-30 rounded-full px-5 h-11"
        >
          Suivante
          <ChevronRight className="h-5 w-5 ml-1.5" />
        </Button>
      </div>

      <div className="mt-10 text-center">
        <p className="text-xs text-slate-400 font-medium">
          ESPACE · FLIP &nbsp;|&nbsp; ← → · NAVIGUER &nbsp;|&nbsp; R · MARQUER À REVOIR
        </p>
      </div>
    </div>
  );
};

export default ThemedFlashcards;
