import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, RotateCcw, BookOpen, Eye, EyeOff, Filter, Shuffle } from 'lucide-react';
import { spanishVocabularyData, getCategorizedSpanishVocabulary, type SpanishVocabularyItem } from '@/data/spanishVocabularyData';

interface SpanishVocabularyFlashcardsProps {
  language: 'fr' | 'en';
  filterCategories?: string[];
}

export const SpanishVocabularyFlashcards: React.FC<SpanishVocabularyFlashcardsProps> = ({ language, filterCategories }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [studiedCards, setStudiedCards] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string | 'all'>('all');

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
    const shuffled = [...baseData].sort(() => Math.random() - 0.5);
    setShuffledData(shuffled);
    setCurrentIndex(0);
    setShowAnswer(false);
    setStudiedCards(new Set());
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const handleCategoryChange = (category: string | 'all') => {
    setSelectedCategory(category);
    setCurrentIndex(0);
    setShowAnswer(false);
    setStudiedCards(new Set());
  };

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
            <Filter className="h-4 w-4 text-orange-600" />
            <span className="text-sm font-medium text-gray-700">Filtrer par catégorie :</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge 
              variant={selectedCategory === 'all' ? 'default' : 'secondary'}
              className={`cursor-pointer hover:bg-orange-100 ${selectedCategory === 'all' ? 'bg-orange-600 text-white' : ''}`}
              onClick={() => handleCategoryChange('all')}
            >
              Toutes ({baseData.length})
            </Badge>
            {categorizedData.map(cat => (
              <Badge
                key={cat.category}
                variant={selectedCategory === cat.category ? 'default' : 'secondary'}
                className={`cursor-pointer hover:bg-orange-100 ${selectedCategory === cat.category ? 'bg-orange-600 text-white' : ''}`}
                onClick={() => handleCategoryChange(cat.category)}
              >
                {cat.category} ({cat.items.length})
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="flex items-center gap-4 mb-4">
          <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
            {currentIndex + 1} / {totalCards}
          </Badge>
          {selectedCategory !== 'all' && (
            <Badge variant="outline" className="px-3 py-1 text-sm font-medium text-orange-600 border-orange-300">
              {selectedCategory}
            </Badge>
          )}
          <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-gradient-to-r from-orange-500 to-red-600 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <span className="text-sm font-medium text-muted-foreground min-w-[3rem] text-right">
            {Math.round(progressPercentage)}%
          </span>
        </div>
      </div>

      <Card className="min-h-[500px] relative shadow-lg border-2 border-orange-100">
        <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50 rounded-t-lg">
          <CardTitle className="text-center text-lg text-muted-foreground">
            Vocabulaire politique espagnol
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center space-y-8 p-12">
          <div className="text-center max-w-2xl">
            {/* Recto - Mot espagnol */}
            <div className="mb-8">
              <div className="text-3xl font-bold text-orange-600 mb-4 leading-relaxed">
                {currentCard.spanish}
              </div>
              <Badge variant="outline" className="px-3 py-1 text-xs text-orange-600 border-orange-300">
                {currentCard.category}
              </Badge>
            </div>
            
            {/* Verso - Traduction française */}
            {showAnswer && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 border-l-4 border-green-500">
                  <div className="text-2xl font-bold text-green-700 mb-2">
                    {currentCard.french}
                  </div>
                </div>
              </div>
            )}
          </div>

          <Button 
            onClick={toggleAnswer}
            className="mt-8 px-8 py-3 text-lg font-medium transition-all duration-200 hover:scale-105 bg-orange-600 hover:bg-orange-700"
            size="lg"
          >
            {showAnswer ? (
              <>
                <EyeOff className="mr-2 h-5 w-5" />
                Cacher la traduction
              </>
            ) : (
              <>
                <Eye className="mr-2 h-5 w-5" />
                Voir le français
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
          Précédent
        </Button>

        <div className="text-center">
          <div className="text-sm font-medium text-muted-foreground">
            {studiedCards.size} carte{studiedCards.size > 1 ? 's' : ''} étudiée{studiedCards.size > 1 ? 's' : ''}
          </div>
        </div>

        <Button
          onClick={nextCard}
          disabled={currentIndex === totalCards - 1}
          variant="outline"
          className="px-6 py-2 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
        >
          Suivant
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