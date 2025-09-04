import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, RotateCcw, BookOpen, Eye, EyeOff, Filter, Shuffle, Star } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { type MathFlashcard, getUniqueCategories } from '@/data/mathFlashcardsData';

interface MathFlashcardsProps {
  flashcards: MathFlashcard[];
  title: string;
  chapterNumber: number;
}

export const MathFlashcards: React.FC<MathFlashcardsProps> = ({
  flashcards,
  title,
  chapterNumber
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [studiedCards, setStudiedCards] = useState<Set<number>>(new Set());
  const [filterCategory, setFilterCategory] = useState<string>('all');
  const [filterDifficulty, setFilterDifficulty] = useState<string>('all');
  const [isShuffled, setIsShuffled] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [markedForReview, setMarkedForReview] = useState<Set<number>>(new Set());

  // Filtrer les flashcards
  const filteredCards = flashcards.filter(card => {
    const categoryMatch = filterCategory === 'all' || card.category === filterCategory;
    const difficultyMatch = filterDifficulty === 'all' || card.difficulty === filterDifficulty;
    return categoryMatch && difficultyMatch;
  });

  const currentCard = filteredCards[currentIndex];
  const totalCards = filteredCards.length;

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

  const shuffleCards = () => {
    setIsShuffled(!isShuffled);
    setCurrentIndex(0);
    setShowAnswer(false);
    // Note: Pour un vrai mélange, il faudrait créer un état pour l'ordre mélangé
  };

  const toggleReview = () => {
    if (markedForReview.has(currentCard.id)) {
      setMarkedForReview(prev => {
        const newSet = new Set(prev);
        newSet.delete(currentCard.id);
        return newSet;
      });
    } else {
      setMarkedForReview(prev => new Set([...prev, currentCard.id]));
    }
  };

  const progressPercentage = ((studiedCards.size + (showAnswer ? 1 : 0)) / totalCards) * 100;
  const categories = getUniqueCategories(flashcards);
  const difficulties = ['facile', 'moyen', 'difficile'];

  // Navigation clavier: ← → pour naviguer, Espace/Entrée pour révéler
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    const target = e.target as HTMLElement | null;
    if (target && (target.tagName === 'INPUT' || target.tagName === 'SELECT' || target.tagName === 'TEXTAREA' || target.isContentEditable)) {
      return;
    }

    if (e.key === 'ArrowRight') {
      e.preventDefault();
      nextCard();
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      prevCard();
    } else if (e.key === ' ' || e.key === 'Enter') {
      e.preventDefault();
      toggleAnswer();
    }
  }, [nextCard, prevCard, toggleAnswer]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  if (!currentCard) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <Card className="text-center p-8">
          <CardContent>
            <h3 className="text-lg font-semibold mb-2">Aucune flashcard trouvée</h3>
            <p className="text-slate-600">Essayez de modifier les filtres.</p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* En-tête avec contrôles */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold flex items-center gap-2 text-black">
            <BookOpen className="h-6 w-6 text-blue-600" />
            {title}
          </h2>
          <div className="flex gap-2">
            <Button onClick={() => setShowFilters(!showFilters)} variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filtres
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

        {/* Filtres */}
        {showFilters && (
          <div className="bg-blue-50 rounded-lg p-4 mb-4 border border-blue-200">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-black mb-2">Catégorie</label>
                <select
                  value={filterCategory}
                  onChange={(e) => {
                    setFilterCategory(e.target.value);
                    setCurrentIndex(0);
                    setShowAnswer(false);
                  }}
                  className="w-full p-2 border border-blue-300 rounded-md bg-white text-black"
                >
                  <option value="all">Toutes les catégories</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat}>{cat}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-black mb-2">Difficulté</label>
                <select
                  value={filterDifficulty}
                  onChange={(e) => {
                    setFilterDifficulty(e.target.value);
                    setCurrentIndex(0);
                    setShowAnswer(false);
                  }}
                  className="w-full p-2 border border-blue-300 rounded-md bg-white text-black"
                >
                  <option value="all">Toutes les difficultés</option>
                  {difficulties.map(diff => (
                    <option key={diff} value={diff}>{diff}</option>
                  ))}
                </select>
              </div>
            </div>
          </div>
        )}
        
        {/* Barre de progression */}
        <div className="flex items-center gap-4 mb-4">
          <Badge variant="secondary" className="px-3 py-1 text-sm font-medium bg-blue-100 text-blue-800">
            {currentIndex + 1} / {totalCards}
          </Badge>
          <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-blue-600 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <span className="text-sm font-medium text-black min-w-[3rem] text-right">
            {Math.round(progressPercentage)}%
          </span>
        </div>
      </div>

      {/* Flashcard principale */}
      <Card className="min-h-[500px] relative shadow-lg border-2 border-blue-100 bg-blue-50">
        <CardHeader className="bg-blue-600 text-white rounded-t-lg">
          <CardTitle className="text-center text-lg flex items-center justify-between">
            <span>Chapitre {chapterNumber} - {currentCard.category}</span>
            <div className="flex items-center gap-2">
              <Badge 
                variant="secondary" 
                className={`px-2 py-1 text-xs ${
                  currentCard.difficulty === 'facile' ? 'bg-green-100 text-green-800' :
                  currentCard.difficulty === 'moyen' ? 'bg-yellow-100 text-yellow-800' :
                  'bg-red-100 text-red-800'
                }`}
              >
                {currentCard.difficulty}
              </Badge>
              <Button
                onClick={toggleReview}
                variant="ghost"
                size="sm"
                className={`text-white hover:bg-white/20 ${
                  markedForReview.has(currentCard.id) ? 'bg-white/20' : ''
                }`}
              >
                <Star className={`h-4 w-4 ${markedForReview.has(currentCard.id) ? 'fill-yellow-400 text-yellow-400' : ''}`} />
              </Button>
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center space-y-8 p-12">
          <div className="text-center max-w-2xl w-full">
            {/* Recto - Question */}
            <div className="mb-8">
              <div className="text-2xl font-bold text-black mb-4 leading-relaxed">
                {currentCard.front}
              </div>
              {currentCard.frontLatex && (
                <div className="bg-white p-4 rounded-lg border border-blue-200 shadow-sm">
                  <LatexRenderer latex={currentCard.frontLatex} />
                </div>
              )}
            </div>
            
            {/* Verso - Réponse */}
            {showAnswer && (
              <div className="space-y-6 animate-in fade-in duration-500">
                <div className="bg-white rounded-lg p-6 border-l-4 border-blue-500 shadow-sm">
                  <div className="text-lg text-black mb-4">
                    {currentCard.back}
                  </div>
                  {currentCard.backLatex && (
                    <div className="bg-blue-50 p-4 rounded border border-blue-200">
                      <LatexRenderer latex={currentCard.backLatex} />
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>

          {/* Boutons de contrôle */}
          <div className="flex gap-3">
            <Button 
              onClick={prevCard} 
              disabled={currentIndex === 0}
              variant="outline"
              className="border-blue-300 text-blue-700 hover:bg-blue-50"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button 
              onClick={toggleAnswer}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6"
            >
              {showAnswer ? (
                <>
                  <EyeOff className="h-4 w-4 mr-2" />
                  Cacher
                </>
              ) : (
                <>
                  <Eye className="h-4 w-4 mr-2" />
                  Révéler
                </>
              )}
            </Button>
            
            <Button 
              onClick={nextCard} 
              disabled={currentIndex === totalCards - 1}
              variant="outline"
              className="border-blue-300 text-blue-700 hover:bg-blue-50"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Compteur restant */}
          {currentIndex === totalCards - 1 && showAnswer && (
            <div className="text-center">
              <Badge variant="secondary" className="bg-green-100 text-green-800 text-lg px-4 py-2">
                🎉 Toutes les flashcards terminées !
              </Badge>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Navigation rapide */}
      <div className="mt-4 text-center text-sm text-slate-600">
        <kbd className="px-2 py-1 bg-slate-100 rounded text-xs">←</kbd> Précédent •
        <kbd className="px-2 py-1 bg-slate-100 rounded text-xs mx-2">Espace</kbd> /
        <kbd className="px-2 py-1 bg-slate-100 rounded text-xs mx-2">Entrée</kbd> Révéler •
        <kbd className="px-2 py-1 bg-slate-100 rounded text-xs">→</kbd> Suivant
      </div>
    </div>
  );
};
