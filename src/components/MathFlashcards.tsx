import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, RotateCcw, BookOpen, Eye, EyeOff, Filter, Shuffle, Star, Trophy } from 'lucide-react';
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

  // Page de fin quand toutes les flashcards sont terminées
  if (currentIndex === totalCards - 1 && showAnswer) {
    return (
      <div className="max-w-4xl mx-auto p-4">
        <Card className="mt-8 border-0 shadow-xl bg-blue-50">
          <CardContent className="text-center p-8">
            <h2 className="text-2xl font-bold text-black mb-4">QCM terminé !</h2>
            <p className="text-lg text-black">
              Vous avez terminé toutes les flashcards de ce chapitre.
            </p>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      {/* En-tête simplifié */}
      <div className="mb-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-semibold text-slate-800 mb-2">{title}</h2>
          <div className="text-sm text-slate-500">
            Chapitre {chapterNumber} • {currentIndex + 1} / {totalCards}
          </div>
        </div>

        {/* Barre de progression minimaliste */}
        <div className="w-full bg-blue-100 rounded-full h-2 mb-6">
          <div 
            className="bg-blue-500 h-2 rounded-full transition-all duration-500"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>

        {/* Contrôles compacts */}
        <div className="flex justify-center gap-2 mb-4">
          <Button onClick={() => setShowFilters(!showFilters)} variant="ghost" size="sm" className="text-slate-600">
            <Filter className="h-4 w-4" />
          </Button>
          <Button onClick={shuffleCards} variant="ghost" size="sm" className="text-slate-600">
            <Shuffle className="h-4 w-4" />
          </Button>
          <Button onClick={resetProgress} variant="ghost" size="sm" className="text-slate-600">
            <RotateCcw className="h-4 w-4" />
          </Button>
        </div>

        {/* Filtres minimalistes */}
        {showFilters && (
          <div className="bg-slate-50 rounded-lg p-4 mb-6 border">
            <div className="grid grid-cols-2 gap-3">
              <select
                value={filterCategory}
                onChange={(e) => {
                  setFilterCategory(e.target.value);
                  setCurrentIndex(0);
                  setShowAnswer(false);
                }}
                className="text-sm p-2 border border-slate-200 rounded bg-white"
              >
                <option value="all">Toutes les catégories</option>
                {categories.map(cat => (
                  <option key={cat} value={cat}>{cat}</option>
                ))}
              </select>
              <select
                value={filterDifficulty}
                onChange={(e) => {
                  setFilterDifficulty(e.target.value);
                  setCurrentIndex(0);
                  setShowAnswer(false);
                }}
                className="text-sm p-2 border border-slate-200 rounded bg-white"
              >
                <option value="all">Toutes les difficultés</option>
                {difficulties.map(diff => (
                  <option key={diff} value={diff}>{diff}</option>
                ))}
              </select>
            </div>
          </div>
        )}
      </div>

      {/* Flashcard épurée */}
      <Card className="min-h-[400px] bg-white border border-blue-200 shadow-sm">
        <CardContent className="p-8">
          <div className="text-center">
            {/* Badge de difficulté discret */}
            <div className="flex justify-center mb-6">
              <Badge 
                variant="outline" 
                className={`text-xs px-2 py-1 ${
                  currentCard.difficulty === 'facile' ? 'border-blue-300 text-blue-600 bg-blue-50' :
                  currentCard.difficulty === 'moyen' ? 'border-blue-400 text-blue-700 bg-blue-100' :
                  'border-blue-500 text-blue-800 bg-blue-200'
                }`}
              >
                {currentCard.difficulty}
              </Badge>
            </div>

            {/* Question - Focus sur les maths */}
            <div className="mb-8">
              <div className="text-xl font-medium text-slate-700 mb-6 leading-relaxed">
                {currentCard.front}
              </div>
              {currentCard.frontLatex && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center">
                  <LatexRenderer latex={currentCard.frontLatex} />
                </div>
              )}
            </div>
            
            {/* Réponse - Style épuré */}
            {showAnswer && (
              <div className="animate-in fade-in duration-300">
                <div className="border-t border-blue-200 pt-6">
                  <div className="text-lg text-slate-700 mb-4 font-medium">
                    {currentCard.back}
                  </div>
                  {currentCard.backLatex && (
                    <div className="bg-slate-50 border border-slate-200 rounded-lg p-6">
                      <LatexRenderer latex={currentCard.backLatex} />
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Boutons de contrôle simplifiés */}
            <div className="flex justify-center items-center gap-4 mt-8">
              <Button 
                onClick={prevCard} 
                disabled={currentIndex === 0}
                variant="ghost"
                size="sm"
                className="text-slate-500 hover:text-slate-700"
              >
                <ChevronLeft className="h-5 w-5" />
              </Button>
              
              <Button 
                onClick={toggleAnswer}
                className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 rounded-lg shadow-sm"
              >
                {showAnswer ? (
                  <>
                    <EyeOff className="h-4 w-4 mr-2" />
                    Masquer
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
                variant="ghost"
                size="sm"
                className="text-slate-500 hover:text-slate-700"
              >
                <ChevronRight className="h-5 w-5" />
              </Button>
            </div>

          </div>
        </CardContent>
      </Card>

      {/* Navigation clavier discrète */}
      <div className="mt-4 text-center text-xs text-slate-400">
        <kbd className="px-1.5 py-0.5 bg-slate-100 rounded text-xs">←</kbd> 
        <span className="mx-2">•</span>
        <kbd className="px-1.5 py-0.5 bg-slate-100 rounded text-xs">Espace</kbd>
        <span className="mx-2">•</span>
        <kbd className="px-1.5 py-0.5 bg-slate-100 rounded text-xs">→</kbd>
      </div>
    </div>
  );
};
