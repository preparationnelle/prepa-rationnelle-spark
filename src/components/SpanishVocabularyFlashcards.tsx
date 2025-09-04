import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, RotateCcw, BookOpen, Eye, EyeOff, Filter, Shuffle, RotateCcw as RotateBackward, Star } from 'lucide-react';
import { spanishVocabularyData, getCategorizedSpanishVocabulary, type SpanishVocabularyItem } from '@/data/spanishVocabularyData';
import { useUserData } from '@/context/UserDataContext';

interface SpanishVocabularyFlashcardsProps {
  language: 'fr' | 'en';
  filterCategories?: string[];
}

export const SpanishVocabularyFlashcards: React.FC<SpanishVocabularyFlashcardsProps> = ({ language, filterCategories }) => {
  const { addFlashcardForReview, removeFlashcardFromReview, isFlashcardMarkedForReview, updateProgress } = useUserData();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [studiedCards, setStudiedCards] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string | 'all'>('all');
  const [isFlipped, setIsFlipped] = useState(false);

  // Filtrer les données selon les catégories spécifiées ou toutes
  const baseData = filterCategories 
    ? spanishVocabularyData.filter(item => filterCategories.includes(item.category))
    : spanishVocabularyData;
    
  const [shuffledData, setShuffledData] = useState<SpanishVocabularyItem[]>(baseData);

  const categorizedData = filterCategories 
    ? getCategorizedSpanishVocabulary().filter(cat => filterCategories.includes(cat.category))
    : getCategorizedSpanishVocabulary();
    
  const filteredData = selectedCategory === 'all' 
    ? shuffledData 
    : shuffledData.filter(item => item.category === selectedCategory);

  const currentCard = filteredData[currentIndex];
  const totalCards = filteredData.length;

  const nextCard = () => {
    if (currentIndex < totalCards - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false);
      setIsFlipped(false);
      setStudiedCards(prev => {
        const newSet = new Set([...prev, currentIndex]);
        // Mettre à jour les progrès utilisateur
        updateProgress({
          totalFlashcardsStudied: newSet.size,
          subjectsStudied: ['Espagnol']
        });
        return newSet;
      });
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowAnswer(false);
      setIsFlipped(false);
    }
  };

  const resetProgress = () => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setIsFlipped(false);
    setStudiedCards(new Set());
  };

  const shuffleCards = () => {
    const shuffled = [...baseData].sort(() => Math.random() - 0.5);
    setShuffledData(shuffled);
    setCurrentIndex(0);
    setShowAnswer(false);
    setIsFlipped(false);
    setStudiedCards(new Set());
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
    setShowAnswer(false);
  };

  const markForReview = () => {
    const isMarked = isFlashcardMarkedForReview(currentCard.id, 'spanish');
    
    if (isMarked) {
      removeFlashcardFromReview(currentCard.id, 'spanish');
    } else {
      addFlashcardForReview({
        id: currentCard.id,
        language: 'spanish',
        category: currentCard.category,
        french: currentCard.french,
        translation: currentCard.spanish
      });
    }
  };

  const handleCategoryChange = (category: string | 'all') => {
    setSelectedCategory(category);
    setCurrentIndex(0);
    setShowAnswer(false);
    setIsFlipped(false);
    setStudiedCards(new Set());
  };

  // Gestion du clavier
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
        case 'r':
        case 'R':
          event.preventDefault();
          markForReview();
          break;
        case 'f':
        case 'F':
          event.preventDefault();
          flipCard();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentIndex, totalCards, showAnswer, isFlipped]);

  const progressPercentage = ((studiedCards.size + (showAnswer ? 1 : 0)) / totalCards) * 100;

  if (!currentCard) {
    return (
      <div className="max-w-4xl mx-auto p-4 text-center">
        <p className="text-gray-600">Aucune carte disponible pour cette catégorie.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-orange-600" />
            {filterCategories ? 'Vocabulaire spécialisé espagnol' : 'Vocabulaire politique espagnol-français'}
          </h2>
          <div className="flex gap-2">
            <Button onClick={flipCard} variant="outline" size="sm">
              <RotateBackward className="h-4 w-4 mr-2" />
              Retourner (F)
            </Button>
            <Button onClick={shuffleCards} variant="outline" size="sm">
              <Shuffle className="h-4 w-4 mr-2" />
              Mélanger
            </Button>
            <Button onClick={resetProgress} variant="outline" size="sm">
              <RotateCcw className="h-4 w-4 mr-2" />
              Recommencer
            </Button>
          </div>
        </div>

        {/* Filtres par catégorie */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Filtrer par catégorie :</span>
          </div>
          <div className="max-w-xs">
            <select 
              value={selectedCategory} 
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="w-full px-3 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700"
            >
              <option value="all">Toutes les catégories ({baseData.length})</option>
              {categorizedData.map(cat => (
                <option key={cat.category} value={cat.category}>
                  {cat.category} ({cat.items.length})
                </option>
              ))}
            </select>
          </div>
        </div>
        
        <div className="flex items-center gap-4 mb-4">
          <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
            {currentIndex + 1} / {totalCards}
          </Badge>
          {selectedCategory !== 'all' && (
            <Badge variant="outline" className="px-3 py-1 text-sm font-medium text-blue-600 border-blue-300">
              {selectedCategory}
            </Badge>
          )}
          <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <span className="text-sm font-medium text-muted-foreground min-w-[3rem] text-right">
            {Math.round(progressPercentage)}%
          </span>
        </div>
      </div>

      <Card className="min-h-[500px] relative shadow-lg border-2 border-blue-100">
        <CardHeader className="bg-blue-50 rounded-t-lg">
          <CardTitle className="text-center text-lg text-blue-700">
            Vocabulaire politique français-espagnol
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center space-y-8 p-12">
          <div className="text-center max-w-2xl">
            {/* Affichage selon le mode retourné ou non */}
            <div className="mb-8">
              <div className="text-3xl font-bold text-blue-600 mb-4 leading-relaxed">
                {isFlipped ? currentCard.spanish : currentCard.french}
              </div>
              <Badge variant="outline" className="px-3 py-1 text-xs text-blue-600 border-blue-300">
                {currentCard.category}
              </Badge>
              {isFlashcardMarkedForReview(currentCard.id, 'spanish') && (
                <div className="mt-2">
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-300">
                    <Star className="h-3 w-3 mr-1" />
                    À revoir
                  </Badge>
                </div>
              )}
            </div>
            
            {/* Traduction (selon le mode) */}
            {showAnswer && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border-l-4 border-green-500">
                  <div className="text-2xl font-bold text-green-700 mb-2">
                    {isFlipped ? currentCard.french : currentCard.spanish}
                  </div>
                </div>
              </div>
            )}
          </div>

          <div className="flex gap-3">
            <Button 
              onClick={toggleAnswer}
              className="px-6 py-3 text-lg font-medium transition-all duration-200 hover:scale-105 bg-blue-600 hover:bg-blue-700"
              size="lg"
            >
              {showAnswer ? (
                <>
                  <EyeOff className="mr-2 h-5 w-5" />
                  Cacher
                </>
              ) : (
                <>
                  <Eye className="mr-2 h-5 w-5" />
                  Voir ({isFlipped ? 'français' : 'espagnol'})
                </>
              )}
            </Button>
            
            <Button 
              onClick={markForReview}
              variant={isFlashcardMarkedForReview(currentCard.id, 'spanish') ? "default" : "outline"}
              className={`px-6 py-3 text-lg font-medium transition-all duration-200 hover:scale-105 ${
                isFlashcardMarkedForReview(currentCard.id, 'spanish') 
                  ? 'bg-yellow-500 hover:bg-yellow-600 text-white' 
                  : 'border-yellow-500 text-yellow-600 hover:bg-yellow-50'
              }`}
              size="lg"
            >
              <Star className="mr-2 h-5 w-5" />
              {isFlashcardMarkedForReview(currentCard.id, 'spanish') ? 'Retiré' : 'À revoir'} (R)
            </Button>
          </div>
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
          Précédent (←)
        </Button>

        <div className="text-center">
          <div className="text-sm font-medium text-muted-foreground mb-1">
            {studiedCards.size} carte{studiedCards.size > 1 ? 's' : ''} étudiée{studiedCards.size > 1 ? 's' : ''}
          </div>
          <div className="text-xs text-gray-500 mt-2">
            Raccourcis: ← → (navigation) | Espace (révéler) | F (retourner) | R (marquer)
          </div>
        </div>

        <Button
          onClick={nextCard}
          disabled={currentIndex === totalCards - 1}
          variant="outline"
          className="px-6 py-2 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
        >
          Suivant (→)
          <ChevronRight className="h-4 w-4 ml-2" />
        </Button>
      </div>

      {currentIndex === totalCards - 1 && showAnswer && (
        <div className="text-center mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border-2 border-green-200">
          <h3 className="text-xl font-bold mb-3 text-green-700">
            🎉 Félicitations !
          </h3>
          <p className="text-muted-foreground">
            Vous avez terminé toutes les cartes de vocabulaire {selectedCategory !== 'all' ? `de la catégorie "${selectedCategory}"` : filterCategories ? 'spécialisé' : ''} !
          </p>
          <div className="mt-4 flex justify-center gap-3">
            <Button 
              onClick={resetProgress}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              Recommencer cette série
            </Button>
            {selectedCategory !== 'all' && (
              <Button 
                onClick={() => handleCategoryChange('all')}
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50"
              >
                Voir toutes les catégories
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};