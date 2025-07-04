
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, RotateCcw, BookOpen } from 'lucide-react';
import { vocabularyData, type VocabularyItem } from '@/data/vocabularyData';

interface VocabularyFlashcardsProps {
  language: 'fr' | 'en';
}

export const VocabularyFlashcards: React.FC<VocabularyFlashcardsProps> = ({ language }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [studiedCards, setStudiedCards] = useState<Set<number>>(new Set());

  const currentCard = vocabularyData[currentIndex];
  const totalCards = vocabularyData.length;

  const nextCard = () => {
    if (currentIndex < totalCards - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false);
      setStudiedCards(prev => new Set([...prev, currentIndex]));
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
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const progressPercentage = ((studiedCards.size + (showAnswer ? 1 : 0)) / totalCards) * 100;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-primary" />
            Vocabulaire utile pour les concours
          </h2>
          <Button onClick={resetProgress} variant="outline" size="sm">
            <RotateCcw className="h-4 w-4 mr-2" />
            {language === 'fr' ? 'Recommencer' : 'Reset'}
          </Button>
        </div>
        
        <div className="flex items-center gap-4 mb-4">
          <Badge variant="secondary">
            {currentIndex + 1} / {totalCards}
          </Badge>
          <div className="flex-1 bg-gray-200 rounded-full h-2">
            <div 
              className="bg-primary h-2 rounded-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <span className="text-sm text-muted-foreground">
            {Math.round(progressPercentage)}%
          </span>
        </div>
      </div>

      <Card className="min-h-[400px] relative">
        <CardHeader>
          <CardTitle className="text-center">
            {language === 'fr' ? 'Traduction française' : 'French Translation'}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center space-y-6 p-8">
          <div className="text-center">
            <div className="text-2xl font-bold text-primary mb-4">
              {currentCard.french}
            </div>
            
            {showAnswer && (
              <div className="space-y-4 animate-fade-in">
                <div className="text-xl font-semibold text-secondary-foreground">
                  {currentCard.english}
                </div>
                
                <div className="text-sm text-muted-foreground italic border-l-4 border-primary pl-4 text-left max-w-2xl">
                  <strong>Exemple :</strong> {currentCard.example}
                </div>
              </div>
            )}
          </div>

          <Button 
            onClick={toggleAnswer}
            className="mt-6"
            size="lg"
          >
            {showAnswer 
              ? (language === 'fr' ? 'Cacher la réponse' : 'Hide answer')
              : (language === 'fr' ? 'Voir l\'anglais' : 'Show English')
            }
          </Button>
        </CardContent>
      </Card>

      <div className="flex justify-between items-center mt-6">
        <Button
          onClick={prevCard}
          disabled={currentIndex === 0}
          variant="outline"
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          {language === 'fr' ? 'Précédent' : 'Previous'}
        </Button>

        <div className="text-sm text-muted-foreground">
          {language === 'fr' 
            ? `${studiedCards.size} carte${studiedCards.size > 1 ? 's' : ''} étudiée${studiedCards.size > 1 ? 's' : ''}`
            : `${studiedCards.size} card${studiedCards.size > 1 ? 's' : ''} studied`
          }
        </div>

        <Button
          onClick={nextCard}
          disabled={currentIndex === totalCards - 1}
          variant="outline"
        >
          {language === 'fr' ? 'Suivant' : 'Next'}
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

      {currentIndex === totalCards - 1 && showAnswer && (
        <div className="text-center mt-6 p-4 bg-primary/10 rounded-lg">
          <h3 className="text-lg font-semibold mb-2">
            {language === 'fr' ? '🎉 Félicitations !' : '🎉 Congratulations!'}
          </h3>
          <p className="text-muted-foreground">
            {language === 'fr' 
              ? 'Vous avez terminé toutes les cartes de vocabulaire !'
              : 'You have completed all vocabulary cards!'
            }
          </p>
        </div>
      )}
    </div>
  );
};
