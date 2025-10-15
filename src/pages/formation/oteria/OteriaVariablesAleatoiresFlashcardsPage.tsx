import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, ArrowRight, RotateCcw, Shuffle, Filter, BookOpen, Target, Calculator, Zap, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { variablesAleatoiresFlashcards, getVariablesAleatoiresFlashcardsByCategory, getVariablesAleatoiresFlashcardsByDifficulty, shuffleVariablesAleatoiresFlashcards } from '@/data/variablesAleatoiresFlashcardsData';
import { LatexRenderer } from '@/components/LatexRenderer';

const OteriaVariablesAleatoiresFlashcardsPage = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [studiedCards, setStudiedCards] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [reviewCards, setReviewCards] = useState<Set<number>>(new Set());
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [filteredCards, setFilteredCards] = useState(variablesAleatoiresFlashcards);

  // Mettre à jour les cartes filtrées
  useEffect(() => {
    let filtered = variablesAleatoiresFlashcards;

    if (selectedCategory !== 'all') {
      filtered = getVariablesAleatoiresFlashcardsByCategory(selectedCategory);
    }

    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter(card => card.difficulty === selectedDifficulty);
    }

    if (isReviewMode) {
      filtered = filtered.filter((_, index) => reviewCards.has(index));
    }

    if (isShuffled) {
      filtered = shuffleVariablesAleatoiresFlashcards(filtered);
    }

    setFilteredCards(filtered);
    setCurrentIndex(0);
    setShowAnswer(false);
  }, [selectedCategory, selectedDifficulty, isReviewMode, reviewCards, isShuffled]);

  const currentCard = filteredCards[currentIndex];
  const totalCards = filteredCards.length;

  // Navigation
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
    if (!showAnswer) {
      setStudiedCards(prev => new Set([...prev, currentIndex]));
    }
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

  const toggleShuffle = () => {
    setIsShuffled(!isShuffled);
  };

  // Navigation au clavier
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.key) {
        case 'ArrowRight':
        case ' ':
          event.preventDefault();
          if (showAnswer) {
            nextCard();
          } else {
            toggleAnswer();
          }
          break;
        case 'ArrowLeft':
          event.preventDefault();
          prevCard();
          break;
        case 'Enter':
          event.preventDefault();
          toggleAnswer();
          break;
        case 'r':
        case 'R':
          event.preventDefault();
          markForReview();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentIndex, totalCards, showAnswer]);

  const progressPercentage = totalCards > 0 ? ((currentIndex + 1) / totalCards) * 100 : 0;
  const studiedPercentage = totalCards > 0 ? (studiedCards.size / totalCards) * 100 : 0;

  // Obtenir les catégories uniques
  const categories = Array.from(new Set(variablesAleatoiresFlashcards.map(card => card.category)));
  const difficulties = ['facile', 'moyen', 'difficile'];

  return (
    <div className="min-h-screen bg-white">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-teal-600">
            <Link to="/" className="flex items-center gap-1 hover:text-teal-700 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <Link to="/articles" className="hover:text-teal-700 transition-colors">
              Niveau
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <Link to="/articles/oteria-cyber-school" className="hover:text-teal-700 transition-colors">
              OTERIA Cyber School
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <span className="text-teal-600 font-medium">Séance 9 - Flashcards</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-teal-900 mb-4">
            Flashcards - Variables Aléatoires & Histogrammes
          </h1>
          <p className="text-lg text-blue-700 mb-6">
            Lois usuelles (Bernoulli, Binomiale, Géométrique, Poisson, Expo…)
          </p>

          {/* Ressources pédagogiques */}
          <div className="max-w-4xl mx-auto mb-6">
            <div className="bg-white border border-blue-200 rounded-lg p-6 shadow-sm">
              <h3 className="text-lg font-semibold text-blue-900 mb-4 text-center">
                Ressources pédagogiques
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link to="/formation/oteria/variables-aleatoires-cours" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <BookOpen className="h-5 w-5 mx-auto mb-2" />
                    Cours
                  </button>
                </Link>
                <Link to="/formation/oteria/variables-aleatoires-exercices" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <Target className="h-5 w-5 mx-auto mb-2" />
                    Exercices
                  </button>
                </Link>
                <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg cursor-default font-medium shadow-md">
                  <Calculator className="h-5 w-5 mx-auto mb-2" />
                  Flashcards
                </button>
                <Link to="/formation/oteria/variables-aleatoires-qcm" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <Zap className="h-5 w-5 mx-auto mb-2" />
                    QCM
                  </button>
                </Link>
              </div>
            </div>
          </div>

          {/* Filtres et contrôles */}
          <div className="flex flex-wrap gap-4 justify-center items-center mb-6">
            <div className="flex items-center gap-2">
              <Filter className="h-5 w-5 text-teal-600" />
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger className="w-[220px]">
                  <SelectValue placeholder="Catégorie" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les catégories</SelectItem>
                  {categories.map(cat => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Difficulté" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Toutes difficultés</SelectItem>
                {difficulties.map(diff => (
                  <SelectItem key={diff} value={diff}>{diff.charAt(0).toUpperCase() + diff.slice(1)}</SelectItem>
                ))}
              </SelectContent>
            </Select>

            <Button
              onClick={toggleShuffle}
              variant={isShuffled ? "default" : "outline"}
              className={isShuffled ? "bg-teal-600 hover:bg-teal-700" : ""}
            >
              <Shuffle className="h-4 w-4 mr-2" />
              {isShuffled ? "Mélangé" : "Mélanger"}
            </Button>

            <Button
              onClick={() => setIsReviewMode(!isReviewMode)}
              variant={isReviewMode ? "default" : "outline"}
              disabled={reviewCards.size === 0}
              className={isReviewMode ? "bg-orange-600 hover:bg-orange-700" : ""}
            >
              <Eye className="h-4 w-4 mr-2" />
              {isReviewMode ? "Mode révision" : `À réviser (${reviewCards.size})`}
            </Button>

            <Button onClick={resetProgress} variant="outline">
              <RotateCcw className="h-4 w-4 mr-2" />
              Réinitialiser
            </Button>
          </div>

          {/* Statistiques */}
          <div className="flex gap-6 justify-center mb-6">
            <div className="text-center">
              <p className="text-sm text-gray-600">Progression</p>
              <p className="text-2xl font-bold text-teal-600">
                {currentIndex + 1}/{totalCards}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">Étudiées</p>
              <p className="text-2xl font-bold text-teal-600">
                {studiedCards.size}/{totalCards}
              </p>
            </div>
            <div className="text-center">
              <p className="text-sm text-gray-600">À réviser</p>
              <p className="text-2xl font-bold text-orange-600">
                {reviewCards.size}
              </p>
            </div>
          </div>

          {/* Barre de progression */}
          <div className="w-full max-w-2xl mx-auto mb-6">
            <div className="relative h-4 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="absolute top-0 left-0 h-full bg-teal-500 transition-all duration-300"
                style={{ width: `${studiedPercentage}%` }}
              />
              <div
                className="absolute top-0 left-0 h-full border-r-4 border-teal-700 transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            <p className="text-sm text-gray-600 mt-2 text-center">
              {Math.round(studiedPercentage)}% étudiées
            </p>
          </div>
        </div>

        {/* Carte flashcard principale */}
        {currentCard && (
          <div className="max-w-3xl mx-auto mb-8">
            <Card className="shadow-2xl border-2 border-teal-200 bg-gradient-to-br from-white to-blue-50">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-between items-center mb-4">
                  <Badge variant="outline" className="text-teal-700 border-teal-700">
                    {currentCard.category}
                  </Badge>
                  <Badge 
                    variant="outline" 
                    className={
                      currentCard.difficulty === 'facile' ? 'text-green-700 border-green-700' :
                      currentCard.difficulty === 'moyen' ? 'text-orange-700 border-orange-700' :
                      'text-red-700 border-red-700'
                    }
                  >
                    {currentCard.difficulty.charAt(0).toUpperCase() + currentCard.difficulty.slice(1)}
                  </Badge>
                </div>
                <CardTitle className="text-2xl font-bold text-teal-900">
                  Question {currentIndex + 1}
                </CardTitle>
              </CardHeader>
              <CardContent className="min-h-[300px] flex flex-col justify-between">
                <div className="space-y-6">
                  {/* Question (Front) */}
                  <div className="bg-white rounded-lg p-6 border-2 border-teal-300">
                    <h3 className="text-lg font-semibold text-teal-800 mb-3">Question :</h3>
                    <p className="text-lg text-gray-800 mb-3">{currentCard.front}</p>
                    {currentCard.frontLatex && (
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <LatexRenderer latex={currentCard.frontLatex} />
                      </div>
                    )}
                  </div>

                  {/* Réponse (Back) */}
                  {showAnswer && (
                    <div className="bg-teal-50 rounded-lg p-6 border-2 border-teal-400 animate-in fade-in slide-in-from-bottom-4 duration-300">
                      <h3 className="text-lg font-semibold text-teal-800 mb-3">Réponse :</h3>
                      <p className="text-lg text-gray-800 mb-3">{currentCard.back}</p>
                      {currentCard.backLatex && (
                        <div className="bg-white p-4 rounded-lg border border-teal-200 mt-3">
                          <LatexRenderer latex={currentCard.backLatex} />
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Bouton montrer/cacher la réponse */}
                <div className="mt-6 flex justify-center gap-4">
                  <Button
                    onClick={toggleAnswer}
                    size="lg"
                    className="bg-teal-600 hover:bg-teal-700 text-white px-8"
                  >
                    {showAnswer ? (
                      <>
                        <EyeOff className="mr-2 h-5 w-5" />
                        Cacher la réponse
                      </>
                    ) : (
                      <>
                        <Eye className="mr-2 h-5 w-5" />
                        Afficher la réponse
                      </>
                    )}
                  </Button>
                  {showAnswer && (
                    <Button
                      onClick={markForReview}
                      variant="outline"
                      size="lg"
                      className="border-orange-600 text-orange-600 hover:bg-orange-50"
                    >
                      Marquer pour révision
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Navigation */}
        <div className="flex justify-center gap-4 mb-8">
          <Button
            onClick={prevCard}
            size="lg"
            variant="outline"
            className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50"
          >
            <ArrowLeft className="mr-2 h-5 w-5" />
            Précédente
          </Button>
          <Button
            onClick={nextCard}
            size="lg"
            variant="outline"
            className="border-2 border-teal-600 text-teal-600 hover:bg-teal-50"
          >
            Suivante
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>

        {/* Raccourcis clavier */}
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 max-w-2xl mx-auto mb-8">
          <h3 className="font-semibold text-blue-900 mb-3 text-center">Raccourcis clavier</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="text-center">
              <kbd className="px-2 py-1 bg-white border border-blue-300 rounded">←</kbd>
              <p className="mt-1 text-blue-700">Précédente</p>
            </div>
            <div className="text-center">
              <kbd className="px-2 py-1 bg-white border border-blue-300 rounded">→</kbd>
              <p className="mt-1 text-blue-700">Suivante</p>
            </div>
            <div className="text-center">
              <kbd className="px-2 py-1 bg-white border border-blue-300 rounded">Entrée</kbd>
              <p className="mt-1 text-blue-700">Afficher</p>
            </div>
            <div className="text-center">
              <kbd className="px-2 py-1 bg-white border border-blue-300 rounded">R</kbd>
              <p className="mt-1 text-blue-700">À réviser</p>
            </div>
          </div>
        </div>

        {/* Navigation cours */}
        <div className="flex justify-between items-center pt-6 border-t border-blue-200 max-w-4xl mx-auto">
          <Link to="/formation/oteria/probabilites-introduction-cours">
            <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Séance précédente
            </Button>
          </Link>
          <Link to="/articles/oteria-cyber-school">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white">
              Retour au programme OTERIA
            </Button>
          </Link>
          <Link to="/formation/oteria/integrales-monte-carlo-cours">
            <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-50">
              Séance suivante
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OteriaVariablesAleatoiresFlashcardsPage;

