
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  BookOpen,
  ThumbsUp,
  ThumbsDown,
  Eye,
  EyeOff,
  Shuffle,
  RefreshCw
} from 'lucide-react';
import { useSimplifiedFlashcardReview } from '@/hooks/useSimplifiedFlashcardReview';

interface SimplifiedFlashcardReviewProps {
  language: 'fr' | 'en';
  refreshTrigger?: number;
}

export const SimplifiedFlashcardReview: React.FC<SimplifiedFlashcardReviewProps> = ({ 
  language, 
  refreshTrigger 
}) => {
  const {
    flashcards,
    allFlashcards,
    currentIndex,
    isFlipped,
    isLoading,
    progress,
    reviewMode,
    markAsKnown,
    markAsDifficult,
    nextCard,
    previousCard,
    flipCard,
    resetReview,
    shuffleCards,
    loadFlashcards,
  } = useSimplifiedFlashcardReview(language, refreshTrigger);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-12">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
        <span className="ml-4 text-lg">
          {language === 'fr' ? 'Chargement...' : 'Loading...'}
        </span>
      </div>
    );
  }

  if (allFlashcards.length === 0) {
    return (
      <Card className="text-center p-8">
        <CardContent>
          <BookOpen className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-semibold mb-2">
            {language === 'fr' ? 'Aucune flashcard' : 'No flashcards'}
          </h3>
          <p className="text-muted-foreground mb-4">
            {language === 'fr' 
              ? 'Créez des flashcards pour commencer !' 
              : 'Create flashcards to get started!'
            }
          </p>
          <Button onClick={loadFlashcards} variant="outline">
            <RefreshCw className="mr-2 h-4 w-4" />
            {language === 'fr' ? 'Actualiser' : 'Refresh'}
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (flashcards.length === 0 && reviewMode === 'difficult') {
    return (
      <Card className="text-center p-8">
        <CardContent>
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="text-lg font-semibold mb-2 text-green-700">
            {language === 'fr' ? 'Excellent travail !' : 'Excellent work!'}
          </h3>
          <p className="text-muted-foreground mb-4">
            {language === 'fr' 
              ? 'Toutes les cartes difficiles ont été révisées !' 
              : 'All difficult cards have been reviewed!'
            }
          </p>
          <Button onClick={resetReview} variant="outline">
            <RotateCcw className="mr-2 h-4 w-4" />
            {language === 'fr' ? 'Nouvelle session' : 'New session'}
          </Button>
        </CardContent>
      </Card>
    );
  }

  const currentCard = flashcards[currentIndex];
  if (!currentCard) return null;

  return (
    <div className="space-y-6">
      {/* Header with stats */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                {language === 'fr' ? 'Révision Flashcards' : 'Flashcard Review'}
                {reviewMode === 'difficult' && (
                  <Badge variant="destructive">Mode Difficile</Badge>
                )}
              </CardTitle>
              <div className="flex gap-4 mt-2">
                <Badge variant="secondary">
                  {currentIndex + 1} / {flashcards.length}
                </Badge>
                <Badge className="bg-green-500">
                  ✓ {progress.known.size} {language === 'fr' ? 'acquises' : 'known'}
                </Badge>
                <Badge variant="destructive">
                  🔄 {progress.difficult.size} {language === 'fr' ? 'difficiles' : 'difficult'}
                </Badge>
                {progress.currentStreak > 0 && (
                  <Badge variant="outline">
                    🔥 {progress.currentStreak} {language === 'fr' ? 'd\'affilée' : 'streak'}
                  </Badge>
                )}
              </div>
            </div>
            <div className="flex gap-2">
              <Button onClick={shuffleCards} variant="outline" size="sm">
                <Shuffle className="h-4 w-4 mr-1" />
                {language === 'fr' ? 'Mélanger' : 'Shuffle'}
              </Button>
              <Button onClick={resetReview} variant="outline" size="sm">
                <RotateCcw className="h-4 w-4 mr-1" />
                Reset
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Keyboard shortcuts */}
      <div className="bg-blue-50 rounded-lg p-3">
        <div className="text-xs text-blue-700 grid grid-cols-2 md:grid-cols-5 gap-2">
          <span><kbd className="bg-white px-1 rounded">Entrée</kbd> Retourner</span>
          <span><kbd className="bg-white px-1 rounded">←→</kbd> Navigation</span>
          <span><kbd className="bg-white px-1 rounded">1</kbd> Acquis</span>
          <span><kbd className="bg-white px-1 rounded">2</kbd> Difficile</span>
          <span><kbd className="bg-white px-1 rounded text-xs">Total: {allFlashcards.length}</kbd></span>
        </div>
      </div>

      {/* Flashcard */}
      <Card className="min-h-[400px] cursor-pointer transition-all duration-300 hover:shadow-lg" onClick={flipCard}>
        <CardContent className="flex flex-col items-center justify-center space-y-6 p-8">
          {!isFlipped ? (
            <div className="text-center">
              <div className="text-sm text-muted-foreground mb-4">
                🇫🇷 {language === 'fr' ? 'Français' : 'French'}
              </div>
              <div className="text-4xl font-bold text-primary mb-6">
                {currentCard.word_fr}
              </div>
              <div className="text-lg text-muted-foreground italic bg-blue-50 p-4 rounded-lg">
                "{currentCard.sentence_fr}"
              </div>
            </div>
          ) : (
            <div className="text-center space-y-6 animate-in fade-in duration-500">
              <div className="text-sm text-muted-foreground">
                🇬🇧 {language === 'fr' ? 'Anglais' : 'English'}
              </div>
              
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border-l-4 border-green-500">
                <div className="text-3xl font-bold text-green-700">
                  {currentCard.word_en}
                </div>
              </div>
              
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-500">
                <div className="text-lg text-gray-700 italic">
                  "{currentCard.sentence_en}"
                </div>
              </div>
              
              {/* Action buttons */}
              <div className="flex gap-4 justify-center mt-6">
                <Button 
                  onClick={(e) => {
                    e.stopPropagation();
                    markAsDifficult();
                  }}
                  variant="destructive"
                  size="lg"
                  className="px-8 py-3"
                >
                  <ThumbsDown className="mr-2 h-5 w-5" />
                  Difficile (2)
                </Button>
                <Button 
                  onClick={(e) => {
                    e.stopPropagation();
                    markAsKnown();
                  }}
                  size="lg"
                  className="px-8 py-3 bg-green-600 hover:bg-green-700"
                >
                  <ThumbsUp className="mr-2 h-5 w-5" />
                  Acquis (1)
                </Button>
              </div>
            </div>
          )}

          <Button 
            onClick={(e) => {
              e.stopPropagation();
              flipCard();
            }}
            variant="outline"
            className="mt-4"
          >
            {isFlipped ? (
              <>
                <EyeOff className="mr-2 h-4 w-4" />
                Cacher
              </>
            ) : (
              <>
                <Eye className="mr-2 h-4 w-4" />
                Révéler
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button
          onClick={previousCard}
          disabled={currentIndex === 0}
          variant="outline"
          size="lg"
        >
          <ChevronLeft className="h-5 w-5 mr-2" />
          {language === 'fr' ? 'Précédent' : 'Previous'}
        </Button>

        <div className="text-center">
          <div className="text-lg font-semibold">
            {Math.round(((progress.known.size + progress.difficult.size) / allFlashcards.length) * 100)}% 
            {language === 'fr' ? ' révisé' : ' reviewed'}
          </div>
          <div className="w-32 bg-gray-200 rounded-full h-2 mt-1">
            <div 
              className="bg-gradient-to-r from-green-500 to-blue-500 h-2 rounded-full transition-all duration-300"
              style={{ 
                width: `${((progress.known.size + progress.difficult.size) / allFlashcards.length) * 100}%` 
              }}
            />
          </div>
        </div>

        <Button
          onClick={nextCard}
          disabled={currentIndex === flashcards.length - 1}
          variant="outline"
          size="lg"
        >
          {language === 'fr' ? 'Suivant' : 'Next'}
          <ChevronRight className="h-5 w-5 ml-2" />
        </Button>
      </div>
    </div>
  );
};
