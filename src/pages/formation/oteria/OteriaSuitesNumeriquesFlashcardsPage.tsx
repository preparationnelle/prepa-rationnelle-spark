import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, ArrowRight, RotateCcw, Shuffle, Filter, BookOpen, Target, Calculator, Zap, Eye, EyeOff, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { sequencesFlashcards, getSequencesFlashcardsByCategory, getSequencesFlashcardsByDifficulty, shuffleSequencesFlashcards } from '@/data/sequencesFlashcardsData';
import { LatexRenderer } from '@/components/LatexRenderer';

const OteriaSuitesNumeriquesFlashcardsPage = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [studiedCards, setStudiedCards] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [reviewCards, setReviewCards] = useState<Set<number>>(new Set());
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [filteredCards, setFilteredCards] = useState(sequencesFlashcards);

  // Mettre à jour les cartes filtrées
  useEffect(() => {
    let filtered = sequencesFlashcards;

    if (selectedCategory !== 'all') {
      filtered = getSequencesFlashcardsByCategory(selectedCategory);
    }

    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter(card => card.difficulty === selectedDifficulty);
    }

    if (isReviewMode) {
      filtered = filtered.filter((_, index) => reviewCards.has(index));
    }

    if (isShuffled) {
      filtered = shuffleSequencesFlashcards(filtered);
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
  const categories = Array.from(new Set(sequencesFlashcards.map(card => card.category)));
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
            <span className="text-teal-600 font-medium">Séance 4 - Flashcards</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <BarChart3 className="h-8 w-8 text-teal-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-teal-900">Flashcards - Suites numériques</h1>
          <p className="text-lg text-teal-700 max-w-3xl mx-auto mb-6">
            Révisez les concepts clés des suites explicites et récurrentes
          </p>

          {/* Informations de séance */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-teal-600 font-medium mb-1">Numéro de séance</span>
                  <span className="text-2xl font-bold text-teal-900">4</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-teal-600 font-medium mb-1">Durée estimée</span>
                  <span className="text-2xl font-bold text-teal-900">3h</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-teal-600 font-medium mb-1">Niveau</span>
                  <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    🟢 Débutant
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Ressources pédagogiques */}
          <div className="max-w-4xl mx-auto mb-6">
            <div className="bg-white border border-teal-200 rounded-lg p-6 shadow-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link to="/formation/oteria/suites-numeriques-cours" className="group">
                  <button className="w-full bg-teal-600 text-white px-4 py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <BookOpen className="h-5 w-5 mx-auto mb-2" />
                    Cours
                  </button>
                </Link>
                <Link to="/formation/oteria/suites-numeriques-exercices" className="group">
                  <button className="w-full bg-teal-600 text-white px-4 py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <Target className="h-5 w-5 mx-auto mb-2" />
                    Exercices
                  </button>
                </Link>
                <button className="w-full bg-orange-600 text-white px-4 py-3 rounded-lg cursor-default font-medium shadow-md">
                  <Calculator className="h-5 w-5 mx-auto mb-2" />
                  Flashcards
                </button>
                <Link to="/formation/oteria/suites-numeriques-qcm" className="group">
                  <button className="w-full bg-teal-600 text-white px-4 py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <Zap className="h-5 w-5 mx-auto mb-2" />
                    QCM
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Filtres et contrôles */}
        <div className="max-w-4xl mx-auto mb-6">
          <Card className="border-teal-200">
            <CardHeader className="bg-teal-50">
              <CardTitle className="text-teal-900 flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filtres et contrôles
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-teal-900 mb-2">Catégorie</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="border-teal-300">
                      <SelectValue placeholder="Toutes les catégories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Toutes les catégories</SelectItem>
                      {categories.map(category => (
                        <SelectItem key={category} value={category}>{category}</SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-teal-900 mb-2">Difficulté</label>
                  <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                    <SelectTrigger className="border-teal-300">
                      <SelectValue placeholder="Toutes les difficultés" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Toutes les difficultés</SelectItem>
                      {difficulties.map(difficulty => (
                        <SelectItem key={difficulty} value={difficulty}>
                          {difficulty.charAt(0).toUpperCase() + difficulty.slice(1)}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="flex items-end gap-2">
                  <Button
                    onClick={toggleShuffle}
                    variant={isShuffled ? "default" : "outline"}
                    className={isShuffled ? "bg-teal-600 hover:bg-teal-700" : "border-teal-300 text-teal-700"}
                    size="sm"
                  >
                    <Shuffle className="h-4 w-4 mr-2" />
                    {isShuffled ? "Mélangé" : "Mélanger"}
                  </Button>
                </div>

                <div className="flex items-end gap-2">
                  <Button
                    onClick={resetProgress}
                    variant="outline"
                    className="border-gray-300 text-gray-700 hover:bg-gray-50"
                    size="sm"
                  >
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Réinitialiser
                  </Button>
                </div>
              </div>

              {reviewCards.size > 0 && (
                <div className="mt-4 flex items-center gap-2">
                  <Button
                    onClick={() => setIsReviewMode(!isReviewMode)}
                    variant={isReviewMode ? "default" : "outline"}
                    className={isReviewMode ? "bg-orange-600 hover:bg-orange-700" : "border-orange-300 text-orange-700"}
                    size="sm"
                  >
                    Mode révision ({reviewCards.size} cartes)
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>

        {/* Barre de progression */}
        <div className="max-w-4xl mx-auto mb-6">
          <div className="bg-teal-50 rounded-lg p-4">
            <div className="flex justify-between text-sm text-teal-700 mb-2">
              <span>Progression : {currentIndex + 1} / {totalCards}</span>
              <span>Étudiées : {studiedCards.size} / {totalCards}</span>
            </div>
            <div className="w-full bg-teal-200 rounded-full h-3">
              <div
                className="bg-teal-600 h-3 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              ></div>
            </div>
          </div>
        </div>

        {/* Flashcard principale */}
        {totalCards > 0 && currentCard ? (
          <div className="max-w-4xl mx-auto mb-8">
            <Card className="min-h-[400px] border-2 border-teal-200 shadow-lg">
              <CardHeader className="text-center bg-teal-50">
                <div className="flex justify-between items-center">
                  <Badge variant="secondary">{currentCard.category}</Badge>
                  <Badge
                    variant={currentCard.difficulty === 'facile' ? 'default' :
                            currentCard.difficulty === 'moyen' ? 'secondary' : 'destructive'}
                  >
                    {currentCard.difficulty}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-8 flex flex-col justify-center items-center min-h-[300px]">
                <div className="text-center w-full">
                  {!showAnswer ? (
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-teal-900">Question :</h3>
                      <div className="text-lg text-gray-700 leading-relaxed">
                        {currentCard.front}
                      </div>
                      {currentCard.frontLatex && (
                        <div className="mt-6 bg-blue-50 border border-blue-200 rounded-lg p-4">
                          <LatexRenderer latex={currentCard.frontLatex} className="text-2xl" />
                        </div>
                      )}
                    </div>
                  ) : (
                    <div>
                      <h3 className="text-xl font-semibold mb-4 text-green-900">Réponse :</h3>
                      <div className="text-lg text-gray-700 leading-relaxed">
                        {currentCard.back}
                      </div>
                      {currentCard.backLatex && (
                        <div className="mt-6 bg-slate-50 border border-slate-200 rounded-lg p-4">
                          <LatexRenderer latex={currentCard.backLatex} className="text-2xl" />
                        </div>
                      )}
                    </div>
                  )}
                </div>

                <div className="flex justify-center gap-4 mt-8">
                  <Button
                    onClick={toggleAnswer}
                    size="lg"
                    className="bg-teal-600 hover:bg-teal-700"
                  >
                    {showAnswer ? <EyeOff className="h-5 w-5 mr-2" /> : <Eye className="h-5 w-5 mr-2" />}
                    {showAnswer ? "Masquer la réponse" : "Voir la réponse"}
                  </Button>

                  {showAnswer && (
                    <Button
                      onClick={markForReview}
                      variant="outline"
                      className="border-orange-300 text-orange-700 hover:bg-orange-50"
                      size="lg"
                    >
                      Marquer pour révision
                    </Button>
                  )}
                </div>
              </CardContent>
            </Card>
          </div>
        ) : totalCards === 0 ? (
          <div className="max-w-4xl mx-auto mb-8">
            <Card className="min-h-[200px] border-2 border-gray-200 shadow-lg">
              <CardContent className="p-8 flex flex-col justify-center items-center min-h-[200px]">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-4 text-gray-600">Aucune flashcard trouvée</h3>
                  <p className="text-gray-500">Vérifiez vos filtres ou rechargez la page.</p>
                </div>
              </CardContent>
            </Card>
          </div>
        ) : null}

        {/* Navigation simplifiée */}
        <div className="max-w-4xl mx-auto mb-8">
          <div className="flex justify-center items-center gap-6">
            <Button
              onClick={prevCard}
              disabled={totalCards === 0}
              variant="outline"
              size="lg"
            >
              <ArrowLeft className="h-5 w-5 mr-2" />
              Précédente
            </Button>

            <Button
              onClick={nextCard}
              disabled={totalCards === 0}
              size="lg"
              className="bg-teal-600 hover:bg-teal-700"
            >
              Suivante
              <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </div>

          <div className="text-center mt-4">
            <div className="text-xs text-gray-500">
              Utilisez les flèches ← → ou Espace pour naviguer, Entrée pour voir/cacher la réponse, R pour marquer pour révision
            </div>
          </div>
        </div>

        {/* Navigation vers autres ressources */}
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center bg-teal-50 p-6 rounded-lg">
            <Link to="/formation/oteria/suites-numeriques-cours">
              <Button variant="outline" className="border-teal-600 text-teal-600 hover:bg-teal-600 hover:text-white">
                Retour au cours
              </Button>
            </Link>
            <div className="flex gap-3">
              <Link to="/formation/oteria/suites-numeriques-exercices">
                <Button className="bg-teal-600 hover:bg-teal-700">
                  Exercices
                </Button>
              </Link>
              <Link to="/formation/oteria/suites-numeriques-qcm">
                <Button className="bg-teal-600 hover:bg-teal-700">
                  QCM
                </Button>
              </Link>
            </div>
            <Link to="/articles/oteria-cyber-school">
              <Button className="bg-teal-600 hover:bg-teal-700">
                Retour au programme
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OteriaSuitesNumeriquesFlashcardsPage;
