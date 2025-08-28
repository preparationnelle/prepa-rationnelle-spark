import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';
import { geopoliticsGlossary } from '@/data/geopoliticsGlossary';

interface GeopoliticsCard {
  term: string;
  definition: string;
  category?: string;
}

export const GeopoliticsFlashcards: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [studiedCards, setStudiedCards] = useState<Set<number>>(new Set());
  const [reviewCards, setReviewCards] = useState<Set<number>>(new Set());
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const filteredData = isReviewMode
    ? geopoliticsGlossary.filter((_, index) => reviewCards.has(index))
    : geopoliticsGlossary;

  const currentCard = filteredData[currentIndex] as GeopoliticsCard;
  const totalCards = filteredData.length;
  const progressPercentage = totalCards > 0 ? ((currentIndex + 1) / totalCards) * 100 : 0;

  const nextCard = () => {
    if (currentIndex < totalCards - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowAnswer(false);
    }
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
    if (!studiedCards.has(currentIndex)) {
      setStudiedCards(prev => new Set([...prev, currentIndex]));
    }
  };

  const markForReview = () => {
    if (currentCard) {
      const originalIndex = geopoliticsGlossary.findIndex(card => card.term === currentCard.term);
      setReviewCards(prev => new Set([...prev, originalIndex]));
    }
  };

  const toggleReviewMode = () => {
    setIsReviewMode(!isReviewMode);
    setCurrentIndex(0);
    setShowAnswer(false);
  };

  const resetProgress = () => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setStudiedCards(new Set());
    setReviewCards(new Set());
    setIsReviewMode(false);
  };

  // Gestion du swipe
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextCard();
    }
    if (isRightSwipe) {
      prevCard();
    }

    setTouchStartX(0);
    setTouchEndX(0);
  };

  // Raccourcis clavier
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          prevCard();
          break;
        case 'ArrowRight':
          event.preventDefault();
          nextCard();
          break;
        case 'Enter':
        case ' ':
          event.preventDefault();
          toggleAnswer();
          break;
        case 'r':
        case 'R':
          if (showAnswer) {
            event.preventDefault();
            markForReview();
          }
          break;
        case 's':
        case 'S':
          event.preventDefault();
          toggleReviewMode();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [currentIndex, showAnswer, totalCards]);

  return (
    <div className="max-w-4xl mx-auto">
      {/* BARRE DE PROGRESSION */}
      <div className="flex items-center gap-4 mb-6">
        <span className="text-sm font-medium text-gray-700">
          {Math.round(progressPercentage)}%
        </span>
        <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
          <div
            className="bg-gradient-to-r from-blue-500 to-orange-600 h-3 rounded-full transition-all duration-500 ease-out"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* CARTE PRINCIPALE */}
      <Card
        className="min-h-[320px] max-h-[380px] shadow-sm border border-gray-100 bg-white"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <CardContent className="flex flex-col items-center justify-between p-3 h-full">
          <div className="text-center flex-1 flex flex-col justify-center w-full">
            {/* RECTO - Terme géopolitique */}
            <div className="mb-4">
              <div className="text-5xl font-bold text-blue-600 leading-tight mb-1">
                {currentCard?.term}
              </div>
              <div className="text-xs text-gray-400 uppercase tracking-wide">
                Géopolitique
              </div>
            </div>

            {/* VERSO - Définition */}
            {showAnswer && (
              <div className="animate-in fade-in duration-300 w-full">
                <div className="bg-orange-50 rounded-lg p-3 border border-orange-200 w-full">
                  <div className="text-3xl font-bold text-orange-800 leading-tight">
                    {currentCard?.definition}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2 w-full">
            <button
              onClick={toggleAnswer}
              className="px-8 py-2 text-base font-medium bg-orange-200 hover:bg-orange-300 text-gray-800 rounded-lg transition-colors"
            >
              {showAnswer ? 'Masquer la définition' : 'Voir la définition'}
            </button>

            {showAnswer && (
              <button
                onClick={markForReview}
                className="px-6 py-1.5 text-sm font-medium bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
              >
                À revoir (R)
              </button>
            )}
          </div>
        </CardContent>
      </Card>

      {/* CONTROLES DE NAVIGATION */}
      <div className="flex justify-between items-center mt-8">
        <Button
          variant="outline"
          onClick={prevCard}
          disabled={currentIndex === 0}
          className="flex items-center gap-2"
        >
          <ArrowLeft className="h-4 w-4" />
          Précédent
        </Button>

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <span>{currentIndex + 1}</span>
          <span>/</span>
          <span>{totalCards}</span>
        </div>

        <Button
          variant="outline"
          onClick={nextCard}
          disabled={currentIndex === totalCards - 1}
          className="flex items-center gap-2"
        >
          Suivant
          <ArrowRight className="h-4 w-4" />
        </Button>
      </div>

      {/* MESSAGE DE FÉLICITATIONS */}
      {currentIndex === totalCards - 1 && (
        <div className="text-center mt-8 p-6 bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg border-2 border-orange-200">
          <h3 className="text-xl font-bold mb-3 text-orange-700">
            🎉 Félicitations !
          </h3>
          <p className="text-gray-600 mb-4">
            Vous avez terminé toutes les cartes de vocabulaire géopolitique !
          </p>

          {reviewCards.size > 0 && (
            <div className="bg-orange-100 border border-orange-300 rounded-lg p-4 mb-4">
              <p className="text-orange-800 font-semibold">
                📚 Vous avez {reviewCards.size} carte{reviewCards.size > 1 ? 's' : ''} à réviser
              </p>
              <p className="text-orange-700 text-sm mt-1">
                Concentrez-vous sur les mots que vous voulez maîtriser parfaitement
              </p>
            </div>
          )}

          <div className="mt-4 flex flex-col sm:flex-row justify-center gap-3">
            <Button
              onClick={resetProgress}
              className="bg-orange-200 hover:bg-orange-300 text-gray-800 px-6 py-2 font-medium"
            >
              🔄 Recommencer cette série
            </Button>

            {reviewCards.size > 0 && (
              <Button
                onClick={toggleReviewMode}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 font-medium"
              >
                📖 Mode révision ({reviewCards.size})
              </Button>
            )}
          </div>
        </div>
      )}

      {/* RACCOURCIS CLAVIER */}
      <div className="mt-6 p-2 bg-gray-50 rounded-lg border border-gray-200">
        <div className="text-center mb-1">
          <h4 className="text-sm font-semibold text-gray-700">Raccourcis</h4>
        </div>
        <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-600">
          <div className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 bg-gray-200 rounded text-xs font-mono">←</kbd>
            <span>Précédent</span>
          </div>
          <div className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 bg-gray-200 rounded text-xs font-mono">→</kbd>
            <span>Suivant</span>
          </div>
          <div className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 bg-gray-200 rounded text-xs font-mono">↵</kbd>
            <span>Retourner</span>
          </div>
          <div className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 bg-gray-200 rounded text-xs font-mono">␣</kbd>
            <span>Retourner</span>
          </div>
          <div className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 bg-gray-200 rounded text-xs font-mono">R</kbd>
            <span>À revoir</span>
          </div>
          <div className="flex items-center gap-1">
            <kbd className="px-1.5 py-0.5 bg-gray-200 rounded text-xs font-mono">S</kbd>
            <span>Révision</span>
          </div>
        </div>
      </div>
    </div>
  );
};

