
import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, RotateCcw, BookOpen, Eye, EyeOff, ThumbsUp, ThumbsDown, Shuffle } from 'lucide-react';
import { vocabularyData, type VocabularyItem } from '@/data/vocabularyData';

interface VocabularyFlashcardsProps {
  language: 'fr' | 'en';
}

export const VocabularyFlashcards: React.FC<VocabularyFlashcardsProps> = ({ language }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [studiedCards, setStudiedCards] = useState<Set<number>>(new Set());
  const [masteredCards, setMasteredCards] = useState<Set<number>>(new Set());
  const [difficultCards, setDifficultCards] = useState<Set<number>>(new Set());
  const [shuffled, setShuffled] = useState(false);
  const [cardOrder, setCardOrder] = useState<number[]>([]);

  const currentCard = vocabularyData[cardOrder[currentIndex] || currentIndex];
  const totalCards = vocabularyData.length;

  // Initialize card order
  useEffect(() => {
    if (cardOrder.length === 0) {
      setCardOrder(Array.from({ length: totalCards }, (_, i) => i));
    }
  }, [totalCards, cardOrder.length]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'Enter':
        case ' ':
          event.preventDefault();
          toggleAnswer();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          prevCard();
          break;
        case 'ArrowRight':
          event.preventDefault();
          nextCard();
          break;
        case '1':
          event.preventDefault();
          if (showAnswer) markAsAcquired();
          break;
        case '2':
          event.preventDefault();
          if (showAnswer) markAsDifficult();
          break;
        case 'r':
        case 'R':
          event.preventDefault();
          resetProgress();
          break;
        case 's':
        case 'S':
          event.preventDefault();
          shuffleCards();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showAnswer]);

  const nextCard = () => {
    if (currentIndex < totalCards - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false);
      setStudiedCards(prev => new Set([...prev, cardOrder[currentIndex] || currentIndex]));
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowAnswer(false);
    }
  };

  const resetProgress = () => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setStudiedCards(new Set());
    setMasteredCards(new Set());
    setDifficultCards(new Set());
    setShuffled(false);
    setCardOrder(Array.from({ length: totalCards }, (_, i) => i));
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const shuffleCards = () => {
    const newOrder = [...cardOrder].sort(() => Math.random() - 0.5);
    setCardOrder(newOrder);
    setCurrentIndex(0);
    setShowAnswer(false);
    setShuffled(!shuffled);
  };

  const markAsAcquired = () => {
    const cardId = cardOrder[currentIndex] || currentIndex;
    setMasteredCards(prev => new Set([...prev, cardId]));
    setDifficultCards(prev => {
      const newSet = new Set(prev);
      newSet.delete(cardId);
      return newSet;
    });
    nextCard();
  };

  const markAsDifficult = () => {
    const cardId = cardOrder[currentIndex] || currentIndex;
    setDifficultCards(prev => new Set([...prev, cardId]));
    setMasteredCards(prev => {
      const newSet = new Set(prev);
      newSet.delete(cardId);
      return newSet;
    });
    nextCard();
  };

  const progressPercentage = ((studiedCards.size + (showAnswer ? 1 : 0)) / totalCards) * 100;
  const currentCardId = cardOrder[currentIndex] || currentIndex;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Vocabulaire utile pour les concours
          </h2>
          <div className="flex gap-2">
            <Button onClick={shuffleCards} variant="outline" size="sm">
              <Shuffle className="h-4 w-4 mr-2" />
              {shuffled ? 'Désactiver mélange' : 'Mélanger'}
            </Button>
            <Button onClick={resetProgress} variant="outline" size="sm">
              <RotateCcw className="h-4 w-4 mr-2" />
              {language === 'fr' ? 'Recommencer' : 'Reset'}
            </Button>
          </div>
        </div>
        
        <div className="flex items-center gap-4 mb-4">
          <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
            {currentIndex + 1} / {totalCards}
          </Badge>
          <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <span className="text-sm font-medium text-muted-foreground min-w-[3rem] text-right">
            {Math.round(progressPercentage)}%
          </span>
        </div>

        {/* Status badges */}
        <div className="flex gap-2 mb-4">
          <Badge variant="default" className="bg-green-500">
            ✓ Acquis: {masteredCards.size}
          </Badge>
          <Badge variant="destructive">
            ✗ Difficile: {difficultCards.size}
          </Badge>
          <Badge variant="secondary">
            📚 Étudiées: {studiedCards.size}
          </Badge>
        </div>

        {/* Keyboard shortcuts */}
        <div className="bg-blue-50 rounded-lg p-3 mb-4">
          <div className="text-xs text-blue-700 grid grid-cols-2 md:grid-cols-4 gap-2">
            <span><kbd className="bg-white px-1 rounded">Entrée</kbd> Retourner</span>
            <span><kbd className="bg-white px-1 rounded">←→</kbd> Navigation</span>
            <span><kbd className="bg-white px-1 rounded">1</kbd> Acquis</span>
            <span><kbd className="bg-white px-1 rounded">2</kbd> Difficile</span>
          </div>
        </div>
      </div>

      <Card className={`min-h-[500px] relative shadow-lg border-2 transition-all duration-300 ${
        masteredCards.has(currentCardId) ? 'border-green-300 bg-green-50' : 
        difficultCards.has(currentCardId) ? 'border-red-300 bg-red-50' : 
        'border-gray-100'
      }`}>
        <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-t-lg">
          <CardTitle className="text-center text-lg text-muted-foreground">
            {language === 'fr' ? 'Traduction française' : 'French Translation'}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center space-y-8 p-12">
          <div className="text-center max-w-2xl">
            {/* Recto - Mot français */}
            <div className="mb-8">
              <div className="text-3xl font-bold text-primary mb-2 leading-relaxed">
                {currentCard.french}
              </div>
            </div>
            
            {/* Verso - Mot anglais + exemple */}
            {showAnswer && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border-l-4 border-green-500">
                  <div className="text-2xl font-bold text-green-700 mb-2">
                    {currentCard.english}
                  </div>
                </div>
                
                <div className="bg-gray-50 rounded-lg p-6 border-l-4 border-blue-500">
                  <div className="text-sm font-semibold text-blue-700 mb-2 uppercase tracking-wide">
                    Exemple :
                  </div>
                  <div className="text-base text-gray-700 italic leading-relaxed">
                    {currentCard.example}
                  </div>
                </div>

                {/* Action buttons when answer is shown */}
                <div className="flex gap-4 justify-center mt-6">
                  <Button 
                    onClick={markAsDifficult}
                    variant="destructive"
                    className="px-6 py-2"
                  >
                    <ThumbsDown className="mr-2 h-4 w-4" />
                    Difficile (2)
                  </Button>
                  <Button 
                    onClick={markAsAcquired}
                    className="px-6 py-2 bg-green-600 hover:bg-green-700"
                  >
                    <ThumbsUp className="mr-2 h-4 w-4" />
                    Acquis (1)
                  </Button>
                </div>
              </div>
            )}
          </div>

          <Button 
            onClick={toggleAnswer}
            className="mt-8 px-8 py-3 text-lg font-medium transition-all duration-200 hover:scale-105"
            size="lg"
          >
            {showAnswer ? (
              <>
                <EyeOff className="mr-2 h-5 w-5" />
                {language === 'fr' ? 'Cacher la réponse' : 'Hide answer'}
              </>
            ) : (
              <>
                <Eye className="mr-2 h-5 w-5" />
                {language === 'fr' ? 'Voir l\'anglais' : 'Show English'}
              </>
            )}
          </Button>
        </CardContent>
      </Card>

      <div className="flex justify-between items-center mt-8">
        <Button
          onClick={prevCard}
          disabled={currentIndex === 0}
          variant="outline"
          className="px-6 py-2 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          {language === 'fr' ? 'Précédent' : 'Previous'}
        </Button>

        <div className="text-center">
          <div className="text-sm font-medium text-muted-foreground">
            {language === 'fr' 
              ? `${studiedCards.size} carte${studiedCards.size > 1 ? 's' : ''} étudiée${studiedCards.size > 1 ? 's' : ''}`
              : `${studiedCards.size} card${studiedCards.size > 1 ? 's' : ''} studied`
            }
          </div>
        </div>

        <Button
          onClick={nextCard}
          disabled={currentIndex === totalCards - 1}
          variant="outline"
          className="px-6 py-2 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
        >
          {language === 'fr' ? 'Suivant' : 'Next'}
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

      {currentIndex === totalCards - 1 && showAnswer && (
        <div className="text-center mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border-2 border-green-200">
          <h3 className="text-xl font-bold mb-3 text-green-700">
            {language === 'fr' ? '🎉 Félicitations !' : '🎉 Congratulations!'}
          </h3>
          <p className="text-muted-foreground mb-4">
            {language === 'fr' 
              ? 'Vous avez terminé toutes les cartes de vocabulaire !'
              : 'You have completed all vocabulary cards!'
            }
          </p>
          <div className="flex justify-center gap-4">
            <Button onClick={resetProgress} variant="outline">
              <RotateCcw className="mr-2 h-4 w-4" />
              Recommencer
            </Button>
            <Button onClick={shuffleCards}>
              <Shuffle className="mr-2 h-4 w-4" />
              Réviser en mode aléatoire
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};
