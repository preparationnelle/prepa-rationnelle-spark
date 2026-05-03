// TEMPLATE STANDARD POUR LES FLASHCARDS - À COPIER POUR TOUS LES NOUVEAUX MODULES
// =============================================================================

import React, { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight, RotateCcw } from 'lucide-react';
import { ChevronUp, ChevronDown } from 'lucide-react';

interface VocabularyItem {
  id: number;
  french: string;
  spanish: string;
  category: string;
}

// =============================================================================
// TEMPLATE DE DONNÉES - REMPLACER PAR VOS DONNÉES
// =============================================================================

const vocabularyData: VocabularyItem[] = [
  {
    id: 1,
    french: "Mot français 1",
    spanish: "Traducción española 1",
    category: "Catégorie 1"
  },
  // ... ajouter vos données ici
];

// =============================================================================
// COMPOSANT FLASHCARD PRINCIPAL
// =============================================================================

const SubjectVocabularyFlashcards: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [studiedCards, setStudiedCards] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string | 'all'>('all');
  const [reviewCards, setReviewCards] = useState<Set<number>>(new Set());
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  // =============================================================================
  // DONNÉES FILTRÉES
  // =============================================================================

  const categorizedData = vocabularyData.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = { category: item.category, items: [] };
    }
    acc[item.category].items.push(item);
    return acc;
  }, {} as Record<string, { category: string; items: VocabularyItem[] }>);

  const filteredData = isReviewMode
    ? vocabularyData.filter((_, index) => reviewCards.has(index))
    : selectedCategory === 'all'
    ? vocabularyData
    : vocabularyData.filter(item => item.category === selectedCategory);

  const currentCard = filteredData[currentIndex];
  const totalCards = filteredData.length;
  const progressPercentage = totalCards > 0 ? ((currentIndex + 1) / totalCards) * 100 : 0;

  // =============================================================================
  // FONCTIONS DE NAVIGATION
  // =============================================================================

  const nextCard = () => {
    if (currentIndex < totalCards - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false);
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowAnswer(false);
    }
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
    if (!studiedCards.has(currentIndex)) {
      setStudiedCards(prev => new Set([...prev, currentIndex]));
    }
  };

  const markForReview = () => {
    if (currentCard) {
      const originalIndex = vocabularyData.findIndex(card => card.id === currentCard.id);
      setReviewCards(prev => new Set([...prev, originalIndex]));
    }
  };

  const toggleReviewMode = () => {
    setIsReviewMode(!isReviewMode);
    setCurrentIndex(0);
    setShowAnswer(false);
  };

  const resetProgress = () => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setStudiedCards(new Set());
    setReviewCards(new Set());
    setIsReviewMode(false);
  };

  // =============================================================================
  // GESTION DU SWIPE
  // =============================================================================

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const distance = touchStartX - touchEndX;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextCard();
    }
    if (isRightSwipe) {
      prevCard();
    }

    setTouchStartX(0);
    setTouchEndX(0);
  };

  // =============================================================================
  // RACCOURCIS CLAVIER
  // =============================================================================

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowLeft':
          event.preventDefault();
          prevCard();
          break;
        case 'ArrowRight':
          event.preventDefault();
          nextCard();
          break;
        case 'ArrowUp':
          event.preventDefault();
          nextCard();
          break;
        case 'ArrowDown':
          event.preventDefault();
          prevCard();
          break;
        case 'Enter':
        case ' ':
          event.preventDefault();
          toggleAnswer();
          break;
        case 'r':
        case 'R':
          if (showAnswer) {
            event.preventDefault();
            markForReview();
          }
          break;
        case 's':
        case 'S':
          event.preventDefault();
          toggleReviewMode();
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [currentIndex, showAnswer, totalCards]);

  // =============================================================================
  // RENDU JSX
  // =============================================================================

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50 p-4">
      <div className="max-w-4xl mx-auto">
        {/* HEADER */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="p-4 rounded-2xl bg-blue-600 text-white shadow-lg">
            <RotateCcw className="h-12 w-12" />
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold">
            <span className="text-blue-700 font-bold">
              Vocabulaire [SUJET]
            </span>
          </h1>
        </div>

        {/* FILTRES PAR CATÉGORIE */}
        <div className="mb-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-medium text-gray-700">Filtrer par catégorie :</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedCategory === 'all' ? 'default' : 'secondary'}
              className={`cursor-pointer hover:bg-blue-100 ${selectedCategory === 'all' ? 'bg-blue-600 text-white' : ''}`}
              onClick={() => setSelectedCategory('all')}
            >
              Toutes ({vocabularyData.length})
            </Button>
            {Object.values(categorizedData).map(cat => (
              <Button
                key={cat.category}
                variant={selectedCategory === cat.category ? 'default' : 'secondary'}
                className={`cursor-pointer hover:bg-blue-100 ${selectedCategory === cat.category ? 'bg-blue-600 text-white' : ''}`}
                onClick={() => setSelectedCategory(cat.category)}
              >
                {cat.category} ({cat.items.length})
              </Button>
            ))}
          </div>
        </div>

        {/* BARRE DE PROGRESSION */}
        <div className="flex items-center gap-4 mb-4">
          <span className="text-sm font-medium text-gray-700">
            {Math.round(progressPercentage)}%
          </span>
          <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 to-orange-600 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
        </div>

        {/* CARTE PRINCIPALE */}
        <Card
          className="min-h-[320px] max-h-[380px] shadow-sm border border-gray-100 bg-white"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <CardContent className="flex flex-col items-center justify-between p-3 h-full">
            <div className="text-center flex-1 flex flex-col justify-center w-full">
              {/* RECTO - Mot français */}
              <div className="mb-4">
                <div className="text-5xl font-bold text-blue-600 leading-tight mb-1">
                  {currentCard?.french}
                </div>
                <div className="text-xs text-gray-400 uppercase tracking-wide">
                  {currentCard?.category}
                </div>
              </div>

              {/* VERSO - Traduction espagnole */}
              {showAnswer && (
                <div className="animate-in fade-in duration-300 w-full">
                  <div className="bg-orange-50 rounded-lg p-3 border border-orange-200 w-full">
                    <div className="text-3xl font-bold text-orange-800 leading-tight">
                      {currentCard?.spanish}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-2 w-full">
              <button
                onClick={toggleAnswer}
                className="px-8 py-2 text-base font-medium bg-orange-200 hover:bg-orange-300 text-gray-800 rounded-lg transition-colors"
              >
                {showAnswer ? 'Cacher' : 'Voir la traduction'}
              </button>

              {showAnswer && (
                <button
                  onClick={markForReview}
                  className="px-6 py-1.5 text-sm font-medium bg-red-500 hover:bg-red-600 text-white rounded-lg transition-colors"
                >
                  À revoir (R)
                </button>
              )}
            </div>
          </CardContent>
        </Card>

        {/* CONTROLES DE NAVIGATION */}
        <div className="flex justify-between items-center mt-8">
          <Button
            variant="outline"
            onClick={prevCard}
            disabled={currentIndex === 0}
            className="flex items-center gap-2"
          >
            <ArrowLeft className="h-4 w-4" />
            Précédent
          </Button>

          <div className="flex items-center gap-2 text-sm text-gray-600">
            <span>{currentIndex + 1}</span>
            <span>/</span>
            <span>{totalCards}</span>
          </div>

          <Button
            variant="outline"
            onClick={nextCard}
            disabled={currentIndex === totalCards - 1}
            className="flex items-center gap-2"
          >
            Suivant
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* MESSAGE DE FÉLICITATIONS */}
        {currentIndex === totalCards - 1 && (
          <div className="text-center mt-8 p-6 bg-gradient-to-r from-orange-50 to-blue-50 rounded-lg border-2 border-orange-200">
            <h3 className="text-xl font-bold mb-3 text-orange-700">
              🎉 Félicitations !
            </h3>
            <p className="text-gray-600 mb-4">
              Vous avez terminé toutes les cartes de vocabulaire [SUJET] !
            </p>

            {reviewCards.size > 0 && (
              <div className="bg-orange-100 border border-orange-300 rounded-lg p-4 mb-4">
                <p className="text-orange-800 font-semibold">
                  📚 Vous avez {reviewCards.size} carte{reviewCards.size > 1 ? 's' : ''} à réviser
                </p>
                <p className="text-orange-700 text-sm mt-1">
                  Concentrez-vous sur les mots que vous voulez maîtriser parfaitement
                </p>
              </div>
            )}

            <div className="mt-4 flex flex-col sm:flex-row justify-center gap-3">
              <Button
                onClick={resetProgress}
                className="bg-orange-200 hover:bg-orange-300 text-gray-800 px-6 py-2 font-medium"
              >
                🔄 Recommencer cette série
              </Button>

              {reviewCards.size > 0 && (
                <Button
                  onClick={toggleReviewMode}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-2 font-medium"
                >
                  📖 Mode révision ({reviewCards.size})
                </Button>
              )}
            </div>
          </div>
        )}

        {/* RACCOURCIS CLAVIER */}
        <div className="mt-6 p-2 bg-gray-50 rounded-lg border border-gray-200">
          <div className="text-center mb-1">
            <h4 className="text-sm font-semibold text-gray-700">Raccourcis</h4>
          </div>
          <div className="flex flex-wrap justify-center gap-3 text-xs text-gray-600">
            <div className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-gray-200 rounded text-xs font-mono">←</kbd>
              <span>Précédent</span>
            </div>
            <div className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-gray-200 rounded text-xs font-mono">→</kbd>
              <span>Suivant</span>
            </div>
            <div className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-gray-200 rounded text-xs font-mono">↵</kbd>
              <span>Retourner</span>
            </div>
            <div className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-gray-200 rounded text-xs font-mono">␣</kbd>
              <span>Retourner</span>
            </div>
            <div className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-gray-200 rounded text-xs font-mono">R</kbd>
              <span>À revoir</span>
            </div>
            <div className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 bg-gray-200 rounded text-xs font-mono">S</kbd>
              <span>Révision</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// =============================================================================
// COMPOSANT PAGE PRINCIPAL
// =============================================================================

const SubjectVocabularyPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-orange-50">
      <SubjectVocabularyFlashcards />
    </div>
  );
};

export default SubjectVocabularyPage;

// =============================================================================
// INSTRUCTIONS D'UTILISATION
// =============================================================================

/*
POUR UTILISER CE TEMPLATE :

1. REMPLACER [SUJET] par le nom de votre sujet (ex: "Politique", "Économie", etc.)
2. REMPLACER vocabularyData par vos propres données
3. AJUSTER les couleurs si nécessaire
4. COPIER ce fichier pour créer de nouveaux modules

CARACTÉRISTIQUES DU TEMPLATE :
✅ Design responsive et moderne
✅ Gestion du swipe tactile
✅ Raccourcis clavier complets
✅ Système de révision intégré
✅ Messages de félicitations
✅ Filtres par catégorie
✅ Barre de progression
✅ Mode révision automatique
*/
