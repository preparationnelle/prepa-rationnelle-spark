
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, RotateCcw, BookOpen, Eye, EyeOff, Check, X, RefreshCw } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';
import { Badge } from '@/components/ui/badge';

interface FlashcardData {
  id: string;
  word_en: string;
  word_fr: string;
  sentence_en: string;
  sentence_fr: string;
  created_at: string;
}

interface ReviewData {
  id?: string;
  status: 'new' | 'learning' | 'review' | 'mastered';
  difficulty: number;
  review_count: number;
  correct_count: number;
  next_review_date: string;
}

interface FlashcardReviewSystemProps {
  language: 'fr' | 'en';
  refreshTrigger?: number;
}

export const FlashcardReviewSystem = ({ language, refreshTrigger }: FlashcardReviewSystemProps) => {
  const [flashcards, setFlashcards] = useState<FlashcardData[]>([]);
  const [reviewData, setReviewData] = useState<Map<string, ReviewData>>(new Map());
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [showingDifficult, setShowingDifficult] = useState(false);
  const [showingDueForReview, setShowingDueForReview] = useState(false);
  const { toast } = useToast();
  const { currentUser } = useAuth();

  // Algorithme de répétition espacée amélioré
  const calculateNextReviewDate = (difficulty: number, correct: boolean, reviewCount: number): Date => {
    let intervalHours: number;
    
    if (correct) {
      // Si correct, augmenter l'intervalle basé sur la facilité (inverse de la difficulté)
      const easeFactor = Math.max(1.3, 2.5 - (difficulty * 0.3));
      const baseInterval = Math.pow(easeFactor, reviewCount);
      intervalHours = baseInterval * 24; // En heures
    } else {
      // Si incorrect, revoir rapidement (1-4 heures selon la difficulté)
      intervalHours = Math.max(1, 4 - difficulty);
    }

    // Limiter les intervalles extrêmes
    intervalHours = Math.min(intervalHours, 365 * 24); // Max 1 an
    intervalHours = Math.max(intervalHours, 0.5); // Min 30 minutes

    return new Date(Date.now() + intervalHours * 60 * 60 * 1000);
  };

  const getDueForReviewCards = () => {
    const now = new Date();
    return flashcards.filter(card => {
      const review = reviewData.get(card.id);
      if (!review) return true; // Nouvelles cartes sont dues
      return new Date(review.next_review_date) <= now;
    });
  };

  const loadFlashcardsWithReviews = async () => {
    if (!currentUser) return;

    try {
      setIsLoading(true);
      
      // Load flashcards
      const { data: flashcardsData, error: flashcardsError } = await supabase
        .from('flashcards')
        .select('*')
        .eq('user_id', currentUser.id)
        .order('created_at', { ascending: false });

      if (flashcardsError) {
        console.error('Error loading flashcards:', flashcardsError);
        return;
      }

      // Load review data
      const { data: reviewsData, error: reviewsError } = await supabase
        .from('flashcard_reviews')
        .select('*')
        .eq('user_id', currentUser.id);

      if (reviewsError) {
        console.error('Error loading reviews:', reviewsError);
        return;
      }

      setFlashcards(flashcardsData || []);
      
      const reviewMap = new Map<string, ReviewData>();
      reviewsData?.forEach(review => {
        const validStatuses = ['new', 'learning', 'review', 'mastered'] as const;
        const status = validStatuses.includes(review.status as any) 
          ? (review.status as 'new' | 'learning' | 'review' | 'mastered')
          : 'new';
          
        reviewMap.set(review.flashcard_id, {
          id: review.id,
          status,
          difficulty: review.difficulty,
          review_count: review.review_count,
          correct_count: review.correct_count,
          next_review_date: review.next_review_date,
        });
      });
      setReviewData(reviewMap);

      setCurrentIndex(0);
      setIsFlipped(false);
    } catch (error) {
      console.error('Error:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReviewAnswer = async (correct: boolean) => {
    if (!currentUser || flashcards.length === 0) return;

    const currentCard = getCurrentDisplayCards()[currentIndex];
    const existingReview = reviewData.get(currentCard.id);

    // Algorithme de difficulté amélioré
    let newDifficulty: number;
    if (correct) {
      // Réduire la difficulté graduellement quand c'est correct
      newDifficulty = Math.max(0, (existingReview?.difficulty || 2) - 0.5);
    } else {
      // Augmenter la difficulté plus agressivement quand c'est incorrect
      newDifficulty = Math.min(5, (existingReview?.difficulty || 2) + 1);
    }

    const reviewCount = (existingReview?.review_count || 0) + 1;
    const correctCount = (existingReview?.correct_count || 0) + (correct ? 1 : 0);

    // Calculer la prochaine date de révision avec l'algorithme amélioré
    const nextReviewDate = calculateNextReviewDate(newDifficulty, correct, reviewCount);

    // Déterminer le statut
    let status: 'new' | 'learning' | 'review' | 'mastered' = 'learning';
    
    // Une carte est maîtrisée si elle a été vue plusieurs fois avec succès et a une faible difficulté
    if (newDifficulty === 0 && correctCount >= 3 && reviewCount >= 3) {
      status = 'mastered';
    } else if (correctCount >= 2 && newDifficulty <= 1) {
      status = 'review';
    } else if (reviewCount === 1) {
      status = 'learning';
    } else {
      status = 'review';
    }

    const reviewPayload = {
      user_id: currentUser.id,
      flashcard_id: currentCard.id,
      status,
      difficulty: newDifficulty,
      review_count: reviewCount,
      correct_count: correctCount,
      next_review_date: nextReviewDate.toISOString(),
    };

    try {
      const { error } = await supabase
        .from('flashcard_reviews')
        .upsert(reviewPayload);

      if (error) {
        console.error('Error updating review:', error);
        toast({
          title: language === 'fr' ? "Erreur" : "Error",
          description: language === 'fr' ? "Erreur lors de la sauvegarde" : "Error saving review",
          variant: "destructive",
        });
        return;
      }

      // Update local state
      setReviewData(prev => new Map(prev.set(currentCard.id, {
        id: existingReview?.id,
        status,
        difficulty: newDifficulty,
        review_count: reviewCount,
        correct_count: correctCount,
        next_review_date: nextReviewDate.toISOString(),
      })));

      // Move to next card
      nextCard();

      // Messages d'encouragement plus détaillés
      const nextReviewText = nextReviewDate.getTime() - Date.now() < 24 * 60 * 60 * 1000 
        ? language === 'fr' ? 'bientôt' : 'soon'
        : language === 'fr' ? `dans ${Math.ceil((nextReviewDate.getTime() - Date.now()) / (24 * 60 * 60 * 1000))} jour(s)` : `in ${Math.ceil((nextReviewDate.getTime() - Date.now()) / (24 * 60 * 60 * 1000))} day(s)`;

      toast({
        title: correct ? "✅ Acquis !" : "❌ À revoir",
        description: correct 
          ? (language === 'fr' ? `Parfait ! Prochaine révision ${nextReviewText}` : `Perfect! Next review ${nextReviewText}`)
          : (language === 'fr' ? `Cette carte reviendra ${nextReviewText}` : `This card will return ${nextReviewText}`),
      });

    } catch (error) {
      console.error('Error:', error);
    }
  };

  const getCurrentDisplayCards = () => {
    if (showingDueForReview) {
      return getDueForReviewCards();
    } else if (showingDifficult) {
      return getDifficultCards();
    }
    return flashcards;
  };

  const nextCard = () => {
    const displayCards = getCurrentDisplayCards();
    if (currentIndex < displayCards.length - 1) {
      setCurrentIndex(currentIndex + 1);
      setIsFlipped(false);
    }
  };

  const previousCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setIsFlipped(false);
    }
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const resetReview = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const getDifficultCards = () => {
    return flashcards.filter(card => {
      const review = reviewData.get(card.id);
      return review && review.difficulty >= 3;
    });
  };

  const toggleDifficultMode = () => {
    setShowingDifficult(!showingDifficult);
    setShowingDueForReview(false);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const toggleDueForReviewMode = () => {
    setShowingDueForReview(!showingDueForReview);
    setShowingDifficult(false);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  useEffect(() => {
    if (currentUser) {
      loadFlashcardsWithReviews();
    }
  }, [currentUser, refreshTrigger]);

  if (isLoading) {
    return (
      <div className="flex items-center justify-center p-8">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">
            {language === 'fr' ? 'Chargement...' : 'Loading...'}
          </p>
        </div>
      </div>
    );
  }

  const displayCards = getCurrentDisplayCards();
  const difficultCount = getDifficultCards().length;
  const dueForReviewCount = getDueForReviewCards().length;

  if (displayCards.length === 0) {
    return (
      <Card>
        <CardContent className="p-8 text-center">
          <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h3 className="text-lg font-semibold mb-2">
            {showingDueForReview 
              ? (language === 'fr' ? 'Aucune carte à réviser maintenant' : 'No cards due for review now')
              : showingDifficult 
                ? (language === 'fr' ? 'Aucune carte difficile' : 'No difficult cards')
                : (language === 'fr' ? 'Aucune flashcard trouvée' : 'No flashcards found')
            }
          </h3>
          <p className="text-muted-foreground mb-4">
            {showingDueForReview
              ? (language === 'fr' ? 'Revenez plus tard pour de nouvelles révisions !' : 'Come back later for new reviews!')
              : showingDifficult
                ? (language === 'fr' ? 'Toutes vos cartes sont maîtrisées !' : 'All your cards are mastered!')
                : (language === 'fr' ? 'Créez des flashcards d\'abord' : 'Create flashcards first')
            }
          </p>
          <div className="flex gap-2 justify-center">
            {(showingDifficult || showingDueForReview) && (
              <Button onClick={() => {
                setShowingDifficult(false);
                setShowingDueForReview(false);
              }} variant="outline">
                {language === 'fr' ? 'Voir toutes les cartes' : 'Show all cards'}
              </Button>
            )}
            <Button onClick={loadFlashcardsWithReviews} variant="outline">
              <RefreshCw className="h-4 w-4 mr-2" />
              {language === 'fr' ? 'Actualiser' : 'Refresh'}
            </Button>
          </div>
        </CardContent>
      </Card>
    );
  }

  const currentCard = displayCards[currentIndex];
  const currentReview = reviewData.get(currentCard.id);

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card>
        <CardHeader>
          <div className="flex justify-between items-center">
            <div>
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                {language === 'fr' ? 'Système de Révision Intelligent' : 'Intelligent Review System'}
                {showingDueForReview && (
                  <Badge variant="default">
                    {language === 'fr' ? 'À Réviser' : 'Due for Review'}
                  </Badge>
                )}
                {showingDifficult && (
                  <Badge variant="destructive">
                    {language === 'fr' ? 'Mode Difficile' : 'Difficult Mode'}
                  </Badge>
                )}
              </CardTitle>
              <CardDescription>
                {language === 'fr' 
                  ? `Carte ${currentIndex + 1} sur ${displayCards.length}`
                  : `Card ${currentIndex + 1} of ${displayCards.length}`
                }
                {dueForReviewCount > 0 && !showingDueForReview && (
                  <span className="ml-2 text-blue-600">
                    ({dueForReviewCount} {language === 'fr' ? 'à réviser' : 'due for review'})
                  </span>
                )}
                {difficultCount > 0 && !showingDifficult && (
                  <span className="ml-2 text-orange-600">
                    ({difficultCount} {language === 'fr' ? 'difficiles' : 'difficult'})
                  </span>
                )}
              </CardDescription>
            </div>
            <div className="flex gap-2">
              {dueForReviewCount > 0 && (
                <Button
                  variant={showingDueForReview ? "default" : "outline"}
                  onClick={toggleDueForReviewMode}
                  size="sm"
                >
                  {language === 'fr' ? 'À réviser' : 'Due for review'} ({dueForReviewCount})
                </Button>
              )}
              {difficultCount > 0 && (
                <Button
                  variant={showingDifficult ? "default" : "outline"}
                  onClick={toggleDifficultMode}
                  size="sm"
                >
                  {language === 'fr' ? 'Difficiles' : 'Difficult'} ({difficultCount})
                </Button>
              )}
              <Button variant="outline" onClick={resetReview} size="sm">
                <RotateCcw className="h-4 w-4 mr-1" />
                {language === 'fr' ? 'Recommencer' : 'Reset'}
              </Button>
              <Button variant="outline" onClick={loadFlashcardsWithReviews} size="sm">
                <RefreshCw className="h-4 w-4 mr-1" />
                {language === 'fr' ? 'Actualiser' : 'Refresh'}
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Flashcard */}
      <Card className="min-h-[400px] cursor-pointer" onClick={flipCard}>
        <CardContent className="p-8">
          <div className="text-center space-y-6">
            {/* Card status info */}
            {currentReview && (
              <div className="flex justify-center gap-2 mb-4">
                <Badge variant={currentReview.status === 'mastered' ? 'default' : 'secondary'}>
                  {currentReview.status === 'mastered' ? '🏆 Maîtrisé' : 
                   currentReview.status === 'learning' ? '📚 Apprentissage' :
                   currentReview.status === 'review' ? '🔄 Révision' : '🆕 Nouveau'}
                </Badge>
                <Badge variant="outline">
                  Difficulté: {currentReview.difficulty}/5
                </Badge>
                <Badge variant="outline">
                  {language === 'fr' ? 'Révisions' : 'Reviews'}: {currentReview.review_count}
                </Badge>
                <Badge variant={currentReview.correct_count / Math.max(1, currentReview.review_count) >= 0.8 ? 'default' : 'secondary'}>
                  {language === 'fr' ? 'Réussite' : 'Success'}: {Math.round((currentReview.correct_count / Math.max(1, currentReview.review_count)) * 100)}%
                </Badge>
              </div>
            )}

            <div className="flex justify-center mb-4">
              <Button
                variant="ghost"
                size="sm"
                onClick={(e) => {
                  e.stopPropagation();
                  flipCard();
                }}
                className="flex items-center gap-2"
              >
                {isFlipped ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                {language === 'fr' ? 'Retourner' : 'Flip'}
              </Button>
            </div>

            {!isFlipped ? (
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground">
                  {language === 'fr' ? '🇫🇷 Français' : '🇫🇷 French'}
                </div>
                <h2 className="text-4xl font-bold text-blue-600">{currentCard.word_fr}</h2>
                <p className="text-xl text-muted-foreground italic bg-blue-50 p-4 rounded-lg">
                  "{currentCard.sentence_fr}"
                </p>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="text-sm text-muted-foreground">
                  {language === 'fr' ? '🇬🇧 Anglais' : '🇬🇧 English'}
                </div>
                <h2 className="text-4xl font-bold text-green-600">{currentCard.word_en}</h2>
                <p className="text-xl text-muted-foreground italic bg-green-50 p-4 rounded-lg">
                  "{currentCard.sentence_en}"
                </p>
              </div>
            )}

            <div className="pt-4 text-sm text-muted-foreground">
              {language === 'fr' ? 'Cliquez pour retourner la carte' : 'Click to flip the card'}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Review buttons (only show when card is flipped) */}
      {isFlipped && (
        <Card className="bg-gradient-to-r from-red-50 to-green-50 border-2">
          <CardContent className="p-6">
            <div className="text-center space-y-4">
              <p className="text-lg font-medium">
                {language === 'fr' ? 'Avez-vous mémorisé cette carte ?' : 'Have you memorized this card?'}
              </p>
              <div className="flex gap-4 justify-center">
                <Button
                  onClick={() => handleReviewAnswer(false)}
                  variant="outline"
                  size="lg"
                  className="bg-red-50 border-red-200 text-red-700 hover:bg-red-100 flex items-center gap-2 px-8 py-3"
                >
                  <X className="h-5 w-5" />
                  {language === 'fr' ? 'À revoir' : 'Review again'}
                </Button>
                <Button
                  onClick={() => handleReviewAnswer(true)}
                  variant="outline"
                  size="lg"
                  className="bg-green-50 border-green-200 text-green-700 hover:bg-green-100 flex items-center gap-2 px-8 py-3"
                >
                  <Check className="h-5 w-5" />
                  {language === 'fr' ? 'Acquis' : 'Mastered'}
                </Button>
              </div>
              <p className="text-sm text-muted-foreground">
                {language === 'fr' 
                  ? 'Soyez honnête pour optimiser votre apprentissage !'
                  : 'Be honest to optimize your learning!'
                }
              </p>
            </div>
          </CardContent>
        </Card>
      )}

      {/* Navigation */}
      <div className="flex justify-between items-center">
        <Button
          variant="outline"
          onClick={previousCard}
          disabled={currentIndex === 0}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          {language === 'fr' ? 'Précédente' : 'Previous'}
        </Button>

        <div className="flex gap-2">
          {displayCards.map((_, index) => (
            <div
              key={index}
              className={`w-2 h-2 rounded-full ${
                index === currentIndex ? 'bg-primary' : 'bg-muted'
              }`}
            />
          ))}
        </div>

        <Button
          variant="outline"
          onClick={nextCard}
          disabled={currentIndex === displayCards.length - 1}
          className="flex items-center gap-2"
        >
          {language === 'fr' ? 'Suivante' : 'Next'}
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Progress */}
      <div className="w-full bg-muted rounded-full h-2">
        <div 
          className="bg-primary h-2 rounded-full transition-all duration-300"
          style={{ width: `${((currentIndex + 1) / displayCards.length) * 100}%` }}
        />
      </div>
    </div>
  );
};
