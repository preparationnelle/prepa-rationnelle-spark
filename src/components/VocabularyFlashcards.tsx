
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, RotateCcw, BookOpen, Eye, EyeOff, Shuffle } from 'lucide-react';
import { vocabularyData, type VocabularyItem } from '@/data/vocabularyData';

interface VocabularyFlashcardsProps {
  language: 'fr' | 'en';
}

export const VocabularyFlashcards: React.FC<VocabularyFlashcardsProps> = ({ language }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [studiedCards, setStudiedCards] = useState<Set<number>>(new Set());
  const [shuffledData, setShuffledData] = useState<VocabularyItem[]>(vocabularyData);

  const currentCard = shuffledData[currentIndex];
  const totalCards = shuffledData.length;

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

  const shuffleCards = () => {
    const shuffled = [...vocabularyData].sort(() => Math.random() - 0.5);
    setShuffledData(shuffled);
    setCurrentIndex(0);
    setShowAnswer(false);
    setStudiedCards(new Set());
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  // Navigation au clavier: ← → pour naviguer, Espace pour révéler
  React.useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowRight':
          event.preventDefault();
          nextCard();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          prevCard();
          break;
        case ' ':
          event.preventDefault();
          toggleAnswer();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentIndex, totalCards, showAnswer]);

  const progressPercentage = ((studiedCards.size + (showAnswer ? 1 : 0)) / totalCards) * 100;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold flex items-center gap-3 text-gray-800">
            <div className="p-2 bg-gray-100 rounded-lg">
              <BookOpen className="h-6 w-6 text-gray-600" />
            </div>
            Vocabulaire utile pour les concours
          </h2>
          <div className="flex gap-3">
            <Button onClick={shuffleCards} variant="outline" size="sm" className="border-gray-300 hover:bg-gray-50 transition-colors duration-200">
              <Shuffle className="h-4 w-4 mr-2" />
              {language === 'fr' ? 'Mélanger' : 'Shuffle'}
            </Button>
            <Button onClick={resetProgress} variant="outline" size="sm" className="border-gray-300 hover:bg-gray-50 transition-colors duration-200">
              <RotateCcw className="h-4 w-4 mr-2" />
              {language === 'fr' ? 'Recommencer' : 'Reset'}
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-6">
          <div className="px-4 py-2 bg-gray-100 rounded-lg text-sm font-medium text-gray-700">
            {currentIndex + 1} / {totalCards}
          </div>
          <div className="flex-1 bg-gray-100 rounded-full h-2 overflow-hidden">
            <div
              className="bg-gradient-to-r from-emerald-400 to-teal-500 h-2 rounded-full transition-all duration-700 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <span className="text-sm font-medium text-gray-600 min-w-[3rem] text-right">
            {Math.round(progressPercentage)}%
          </span>
        </div>
      </div>

      <Card className="min-h-[500px] relative shadow-xl border border-gray-200 bg-white">
        <CardHeader className="bg-gray-50 border-b border-gray-100 rounded-t-lg">
          <CardTitle className="text-center text-lg text-gray-600 font-medium">
            {language === 'fr' ? 'Traduction française' : 'French Translation'}
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center space-y-8 p-12">
          <div className="text-center max-w-2xl w-full">
            {/* Recto - Mot français */}
            <div className="mb-8">
              <div className="text-4xl font-bold text-gray-800 mb-3 leading-relaxed">
                {currentCard.french}
              </div>
            </div>

            {/* Verso - Mot anglais + exemple */}
            {showAnswer && (
              <div className="space-y-6 animate-in fade-in duration-500 w-full">
                <div className="bg-emerald-50 border border-emerald-200 rounded-xl p-6">
                  <div className="text-2xl font-bold text-emerald-800 mb-2">
                    {currentCard.english}
                  </div>
                </div>

                <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
                  <div className="text-sm font-semibold text-gray-700 mb-3 uppercase tracking-wide">
                    Exemple :
                  </div>
                  <div className="text-base text-gray-700 italic leading-relaxed">
                    {currentCard.example}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Button
            onClick={toggleAnswer}
            className="mt-8 px-10 py-4 text-lg font-medium bg-gray-800 hover:bg-gray-900 text-white transition-all duration-300 hover:shadow-lg rounded-xl"
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

      <div className="flex justify-between items-center mt-10">
        <Button
          onClick={prevCard}
          disabled={currentIndex === 0}
          variant="outline"
          className="px-6 py-3 border-gray-300 hover:bg-gray-50 transition-all duration-200 disabled:opacity-50 rounded-lg"
        >
          <ChevronLeft className="h-4 w-4 mr-2" />
          {language === 'fr' ? 'Précédent (←)' : 'Previous (←)'}
        </Button>

        <div className="text-center px-6">
          <div className="text-sm font-medium text-gray-600 mb-2">
            {language === 'fr'
              ? `${studiedCards.size} carte${studiedCards.size > 1 ? 's' : ''} étudiée${studiedCards.size > 1 ? 's' : ''}`
              : `${studiedCards.size} card${studiedCards.size > 1 ? 's' : ''} studied`
            }
          </div>
          <div className="text-xs text-gray-500 bg-gray-50 px-3 py-1 rounded-md">
            {language === 'fr'
              ? 'Raccourcis: ← → (navigation) | Espace (révéler)'
              : 'Shortcuts: ← → (navigate) | Space (reveal)'}
          </div>
        </div>

        <Button
          onClick={nextCard}
          disabled={currentIndex === totalCards - 1}
          variant="outline"
          className="px-6 py-3 border-gray-300 hover:bg-gray-50 transition-all duration-200 disabled:opacity-50 rounded-lg"
        >
          {language === 'fr' ? 'Suivant (→)' : 'Next (→)'}
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

      {currentIndex === totalCards - 1 && showAnswer && (
        <div className="text-center mt-10 p-8 bg-emerald-50 border border-emerald-200 rounded-xl">
          <div className="text-6xl mb-4">🎉</div>
          <h3 className="text-2xl font-bold mb-4 text-emerald-800">
            {language === 'fr' ? 'Félicitations !' : 'Congratulations!'}
          </h3>
          <p className="text-gray-600 text-lg">
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
