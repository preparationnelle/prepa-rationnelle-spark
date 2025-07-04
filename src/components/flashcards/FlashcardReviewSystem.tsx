
import React, { useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  RotateCcw, 
  ChevronLeft, 
  ChevronRight, 
  Brain, 
  Clock, 
  Target,
  ThumbsUp,
  ThumbsDown,
  Eye,
  EyeOff
} from 'lucide-react';
import { useFlashcardReview } from '@/hooks/useFlashcardReview';

interface FlashcardReviewSystemProps {
  language: 'fr' | 'en';
  refreshTrigger?: number;
}

export const FlashcardReviewSystem: React.FC<FlashcardReviewSystemProps> = ({ 
  language, 
  refreshTrigger 
}) => {
  const {
    flashcards,
    reviewData,
    currentIndex,
    isFlipped,
    isLoading,
    showingDifficult,
    showingDueForReview,
    getCurrentDisplayCards,
    getDifficultCards,
    getDueForReviewCards,
    handleReviewAnswer,
    nextCard,
    previousCard,
    flipCard,
    resetReview,
    toggleDifficultMode,
    toggleDueForReviewMode,
  } = useFlashcardReview(language, refreshTrigger);

  const displayCards = getCurrentDisplayCards();
  const currentCard = displayCards[currentIndex];
  const dueCards = getDueForReviewCards();
  const difficultCards = getDifficultCards();

  // Keyboard shortcuts info
  useEffect(() => {
    const showKeyboardHelp = () => {
      console.log('Raccourcis clavier:');
      console.log('Entrée/Espace: Retourner la carte');
      console.log('← →: Navigation');
      console.log('1: Marquer comme acquis');
      console.log('2: Marquer comme difficile');
    };
    showKeyboardHelp();
  }, []);

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

  if (flashcards.length === 0) {
    return (
      <Card className="text-center p-8">
        <CardContent>
          <Brain className="h-16 w-16 mx-auto mb-4 text-muted-foreground" />
          <h3 className="text-lg font-semibold mb-2">
            {language === 'fr' ? 'Aucune flashcard à réviser' : 'No flashcards to review'}
          </h3>
          <p className="text-muted-foreground">
            {language === 'fr' 
              ? 'Créez des flashcards pour commencer vos révisions !' 
              : 'Create flashcards to start reviewing!'
            }
          </p>
        </CardContent>
      </Card>
    );
  }

  if (displayCards.length === 0) {
    return (
      <Card className="text-center p-8">
        <CardContent>
          <Target className="h-16 w-16 mx-auto mb-4 text-green-500" />
          <h3 className="text-lg font-semibold mb-2 text-green-700">
            {language === 'fr' ? 'Toutes les cartes sont à jour !' : 'All cards are up to date!'}
          </h3>
          <p className="text-muted-foreground mb-4">
            {showingDueForReview 
              ? (language === 'fr' ? 'Aucune carte n\'est due pour révision.' : 'No cards are due for review.')
              : (language === 'fr' ? 'Aucune carte difficile trouvée.' : 'No difficult cards found.')
            }
          </p>
          <Button onClick={resetReview} variant="outline">
            <RotateCcw className="mr-2 h-4 w-4" />
            {language === 'fr' ? 'Réviser toutes les cartes' : 'Review all cards'}
          </Button>
        </CardContent>
      </Card>
    );
  }

  const currentReview = reviewData.get(currentCard.id);
  const difficultyLevel = currentReview?.difficulty || 0;
  const status = currentReview?.status || 'new';

  return (
    <div className="space-y-6">
      {/* Header with controls */}
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h3 className="text-xl font-bold mb-2">
            {language === 'fr' ? 'Système de révision espacée' : 'Spaced Repetition System'}
          </h3>
          <div className="flex gap-2">
            <Badge variant="secondary">
              {currentIndex + 1} / {displayCards.length}
            </Badge>
            <Badge className={`${
              status === 'mastered' ? 'bg-green-500' :
              status === 'review' ? 'bg-blue-500' :
              status === 'learning' ? 'bg-yellow-500' :
              'bg-gray-500'
            }`}>
              {status === 'mastered' ? '✓ Maîtrisé' :
               status === 'review' ? '🔄 Révision' :
               status === 'learning' ? '📚 Apprentissage' :
               '🆕 Nouveau'}
            </Badge>
          </div>
        </div>

        <div className="flex gap-2">
          <Button
            onClick={toggleDueForReviewMode}
            variant={showingDueForReview ? 'default' : 'outline'}
            size="sm"
          >
            <Clock className="mr-2 h-4 w-4" />
            À réviser ({dueCards.length})
          </Button>
          <Button
            onClick={toggleDifficultMode}
            variant={showingDifficult ? 'default' : 'outline'}
            size="sm"
          >
            <Target className="mr-2 h-4 w-4" />
            Difficiles ({difficultCards.length})
          </Button>
          <Button onClick={resetReview} variant="outline" size="sm">
            <RotateCcw className="mr-2 h-4 w-4" />
            Reset
          </Button>
        </div>
      </div>

      {/* Keyboard shortcuts info */}
      <div className="bg-blue-50 rounded-lg p-3">
        <div className="text-xs text-blue-700 grid grid-cols-2 md:grid-cols-5 gap-2">
          <span><kbd className="bg-white px-1 rounded">Entrée</kbd> Retourner</span>
          <span><kbd className="bg-white px-1 rounded">←→</kbd> Navigation</span>
          <span><kbd className="bg-white px-1 rounded">1</kbd> Acquis</span>
          <span><kbd className="bg-white px-1 rounded">2</kbd> Difficile</span>
          <span><kbd className="bg-white px-1 rounded">R</kbd> Reset</span>
        </div>
      </div>

      {/* Flashcard */}
      <Card className={`min-h-[400px] cursor-pointer transition-all duration-300 hover:shadow-lg ${
        difficultyLevel >= 3 ? 'border-red-200 bg-red-50' : 
        status === 'mastered' ? 'border-green-200 bg-green-50' : 
        'border-gray-200'
      }`} onClick={flipCard}>
        <CardHeader className="text-center">
          <CardTitle className="text-lg text-muted-foreground">
            {!isFlipped ? 
              (language === 'fr' ? 'Français → Anglais' : 'French → English') :
              (language === 'fr' ? 'Anglais + Exemple' : 'English + Example')
            }
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center space-y-6 p-8">
          {!isFlipped ? (
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-4">
                {currentCard.word_fr}
              </div>
              <div className="text-lg text-muted-foreground italic">
                {currentCard.sentence_fr}
              </div>
            </div>
          ) : (
            <div className="text-center space-y-6 animate-in fade-in duration-500">
              <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border-l-4 border-green-500">
                <div className="text-2xl font-bold text-green-700">
                  {currentCard.word_en}
                </div>
              </div>
              <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-500">
                <div className="text-base text-gray-700 italic">
                  {currentCard.sentence_en}
                </div>
              </div>
              
              {/* Review buttons */}
              <div className="flex gap-4 justify-center mt-6">
                <Button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleReviewAnswer(false);
                  }}
                  variant="destructive"
                  className="px-6 py-2"
                >
                  <ThumbsDown className="mr-2 h-4 w-4" />
                  Difficile (2)
                </Button>
                <Button 
                  onClick={(e) => {
                    e.stopPropagation();
                    handleReviewAnswer(true);
                  }}
                  className="px-6 py-2 bg-green-600 hover:bg-green-700"
                >
                  <ThumbsUp className="mr-2 h-4 w-4" />
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
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          {language === 'fr' ? 'Précédent' : 'Previous'}
        </Button>

        <div className="text-center">
          <div className="text-sm text-muted-foreground">
            {language === 'fr' ? 'Niveau de difficulté:' : 'Difficulty level:'} {difficultyLevel}/5
          </div>
          <div className="text-xs text-muted-foreground">
            {currentReview ? 
              `${currentReview.correct_count}/${currentReview.review_count} correct` : 
              'Première fois'
            }
          </div>
        </div>

        <Button
          onClick={nextCard}
          disabled={currentIndex === displayCards.length - 1}
          variant="outline"
        >
          {language === 'fr' ? 'Suivant' : 'Next'}
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>
    </div>
  );
};
