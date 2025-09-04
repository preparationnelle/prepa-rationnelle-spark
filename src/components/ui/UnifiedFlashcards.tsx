import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft, BookOpen } from 'lucide-react';

interface VocabularyItem {
  category: string;
  [key: string]: string;
}

interface UnifiedFlashcardsProps {
  data: VocabularyItem[];
  title: string;
  language?: 'fr' | 'en';
  frontKey?: string;
  backKey?: string;
  frontLabel?: string;
  backLabel?: string;
}

export const UnifiedFlashcards: React.FC<UnifiedFlashcardsProps> = ({
  data,
  title,
  language = 'fr',
  frontKey = 'spanish',
  backKey = 'french',
  frontLabel = 'Espagnol',
  backLabel = 'Français'
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [studiedCards, setStudiedCards] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string | 'all'>('all');
  const [reviewCards, setReviewCards] = useState<Set<number>>(new Set());
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  // Référence pour le focus automatique
  const flashcardsRef = React.useRef<HTMLDivElement>(null);

  const categorizedData = [
    ...Array.from(new Set(data.map(item => item.category))).map(category => ({
      category,
      items: data.filter(item => item.category === category)
    }))
  ];

  const filteredData = selectedCategory === 'all'
    ? data
    : data.filter(item => item.category === selectedCategory);

  const reviewData = isReviewMode
    ? filteredData.filter((_, index) => reviewCards.has(index))
    : filteredData;

  const totalCards = reviewData.length;
  const currentCard = totalCards > 0 ? reviewData[currentIndex] : null;

  const nextCard = () => {
    setCurrentIndex((prev) => (prev + 1) % totalCards);
    setShowAnswer(false);
  };

  const prevCard = () => {
    setCurrentIndex((prev) => (prev - 1 + totalCards) % totalCards);
    setShowAnswer(false);
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const markAsStudied = () => {
    setStudiedCards(prev => new Set([...prev, currentIndex]));
  };

  const markForReview = () => {
    setReviewCards(prev => new Set([...prev, currentIndex]));
  };

  const resetProgress = () => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setStudiedCards(new Set());
    setReviewCards(new Set());
    setIsReviewMode(false);
  };

  const toggleReviewMode = () => {
    setIsReviewMode(!isReviewMode);
    setCurrentIndex(0);
    setShowAnswer(false);
  };

  const handleTouchStart = () => {
    setTouchStartX(0);
  };

  const handleTouchEnd = () => {
    setTouchEndX(0);
  };

  const handleCategoryChange = (category: string | 'all') => {
    setSelectedCategory(category);
    setCurrentIndex(0);
    setShowAnswer(false);
    setStudiedCards(new Set());
  };

  // Gestionnaire d'événements clavier
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
        event.preventDefault();
        toggleAnswer();
        break;
      case ' ': // Espace aussi pour retourner la carte
        event.preventDefault();
        toggleAnswer();
        break;
      case 'r':
      case 'R':
        event.preventDefault();
        markForReview();
        break;
      default:
        break;
    }
  };

  // Configuration des event listeners du clavier et focus automatique
  useEffect(() => {
    // Donner le focus au composant au montage
    if (flashcardsRef.current) {
      flashcardsRef.current.focus();
    }

    // Ajouter l'event listener
    document.addEventListener('keydown', handleKeyPress);

    // Nettoyer l'event listener lors du démontage du composant
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [currentIndex, showAnswer, totalCards]); // Dépendances pour que les fonctions soient à jour

  const progressPercentage = ((studiedCards.size + (showAnswer ? 1 : 0)) / totalCards) * 100;

  if (!currentCard) {
    return (
      <div className="max-w-4xl mx-auto p-4 text-center">
        <p className="text-gray-600">Aucune carte disponible pour cette catégorie.</p>
      </div>
    );
  }

  return (
    <div
      ref={flashcardsRef}
      className="max-w-4xl mx-auto p-4"
      tabIndex={-1}
    >
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-blue-600" />
            {title}
            {isReviewMode && <span className="text-red-600 text-lg">🔄 Mode révision</span>}
          </h2>
          <div className="flex gap-2">
            {reviewCards.size > 0 && (
              <button
                onClick={toggleReviewMode}
                className={`px-3 py-1 text-sm rounded-md transition-colors ${
                  isReviewMode
                    ? 'bg-red-100 hover:bg-red-200 text-red-700'
                    : 'bg-orange-100 hover:bg-orange-200 text-orange-700'
                }`}
              >
                {isReviewMode ? 'Quitter révision' : `À revoir (${reviewCards.size})`}
              </button>
            )}
            <button onClick={resetProgress} className="px-3 py-1 text-sm bg-gray-100 hover:bg-gray-200 rounded-md transition-colors">
              Recommencer
            </button>
          </div>
        </div>

        {/* Filtres par catégorie */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-3">
            <span className="text-sm font-medium text-gray-700">Filtrer par catégorie :</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <Badge
              variant={selectedCategory === 'all' ? 'default' : 'secondary'}
              className={`cursor-pointer hover:bg-blue-100 ${selectedCategory === 'all' ? 'bg-blue-600 text-white' : ''}`}
              onClick={() => handleCategoryChange('all')}
            >
              Toutes ({data.length})
            </Badge>
            {categorizedData.map(cat => (
              <Badge
                key={cat.category}
                variant={selectedCategory === cat.category ? 'default' : 'secondary'}
                className={`cursor-pointer hover:bg-blue-100 ${selectedCategory === cat.category ? 'bg-blue-600 text-white' : ''}`}
                onClick={() => handleCategoryChange(cat.category)}
              >
                {cat.category} ({cat.items.length})
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
            Carte {currentIndex + 1} sur {totalCards}
          </Badge>
          <Badge variant="secondary" className="px-3 py-1 text-sm">
            Étudiées : {studiedCards.size} / {totalCards}
          </Badge>
        </div>

        {/* Barre de progression */}
        <div className="w-full bg-gray-200 rounded-full h-3 mb-6">
          <div
            className="bg-blue-600 h-3 rounded-full transition-all duration-300"
            style={{ width: `${progressPercentage}%` }}
          />
        </div>
      </div>

      {/* Carte principale */}
      <div
        className="flex justify-center mb-6"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <Card
          className={`w-full max-w-lg h-80 cursor-pointer transition-all duration-300 hover:shadow-xl border-2 ${
            showAnswer ? 'border-orange-300 bg-orange-50' : 'border-blue-300 bg-blue-50'
          }`}
          onClick={toggleAnswer}
        >
          <CardContent className="p-8 h-full flex flex-col justify-center items-center text-center">
            <Badge variant="outline" className="mb-6">
              {currentCard.category}
            </Badge>

            <h2 className={`text-4xl font-bold mb-6 transition-colors ${
              showAnswer ? 'text-orange-700' : 'text-blue-700'
            }`}>
              {showAnswer ? currentCard[backKey] : currentCard[frontKey]}
            </h2>

            <p className="text-gray-600 mb-6 text-lg">
              {showAnswer ? backLabel : frontLabel}
            </p>

            <p className="text-sm text-gray-500">
              {showAnswer ? 'Cliquez pour retourner la carte' : 'Cliquez pour voir la traduction'}
            </p>
          </CardContent>
        </Card>
      </div>

      {/* Boutons de navigation */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          onClick={prevCard}
          className="flex items-center gap-2 px-6 py-3 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Précédent
        </button>

        <button
          onClick={toggleAnswer}
          className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
        >
          {showAnswer ? 'Masquer la traduction' : 'Voir la traduction'}
        </button>

        <button
          onClick={nextCard}
          className="flex items-center gap-2 px-6 py-3 bg-white rounded-lg border border-gray-200 hover:bg-gray-50 transition-colors"
        >
          Suivant
          <ArrowLeft className="h-4 w-4 rotate-180" />
        </button>
      </div>

      {/* Boutons d'action */}
      <div className="flex justify-center gap-4">
        <button
          onClick={markAsStudied}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-colors ${
            studiedCards.has(currentIndex)
              ? 'bg-green-100 border-green-300 text-green-700'
              : 'bg-white border-gray-200 hover:bg-gray-50'
          }`}
        >
          {studiedCards.has(currentIndex) ? '✓ Étudié' : 'Marquer comme étudié'}
        </button>

        <button
          onClick={markForReview}
          className="flex items-center gap-2 px-4 py-2 bg-orange-100 border border-orange-300 text-orange-700 rounded-lg hover:bg-orange-200 transition-colors"
        >
          À revoir plus tard
        </button>
      </div>

      {/* Raccourcis clavier */}
      <div className="text-center text-xs text-gray-500 mt-6">
        <p>Raccourcis clavier : ← → pour naviguer, Entrée/Espace pour retourner la carte, R pour marquer à revoir</p>
      </div>
    </div>
  );
};
