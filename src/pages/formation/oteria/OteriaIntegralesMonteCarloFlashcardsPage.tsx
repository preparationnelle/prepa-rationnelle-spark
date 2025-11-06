import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, ArrowRight, RotateCcw, Shuffle, Filter, BookOpen, Target, Calculator, Zap, Eye, EyeOff } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { analyseLoisMonteCarloFlashcards, AnalyseLoisMonteCarloFlashcard } from '@/data/analyseLoisMonteCarloFlashcardsData';
import { LatexRenderer } from '@/components/LatexRenderer';

const OteriaIntegralesMonteCarloFlashcardsPage = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [studiedCards, setStudiedCards] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [reviewCards, setReviewCards] = useState<Set<number>>(new Set());
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [filteredCards, setFilteredCards] = useState(analyseLoisMonteCarloFlashcards);

  // Mettre à jour les cartes filtrées
  useEffect(() => {
    let filtered = analyseLoisMonteCarloFlashcards;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(card => card.category === selectedCategory);
    }

    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter(card => card.difficulty === selectedDifficulty);
    }

    if (isReviewMode) {
      filtered = filtered.filter(card => reviewCards.has(card.id));
    }

    if (isShuffled) {
      filtered = [...filtered].sort(() => Math.random() - 0.5);
    }

    setFilteredCards(filtered);
    setCurrentIndex(0);
    setShowAnswer(false);
  }, [selectedCategory, selectedDifficulty, isReviewMode, reviewCards, isShuffled]);

  const currentCard = filteredCards[currentIndex];
  const totalCards = filteredCards.length;

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
    if (!showAnswer) {
      setStudiedCards(prev => new Set([...prev, currentCard.id]));
    }
  };

  const markForReview = () => {
    setReviewCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(currentCard.id)) {
        newSet.delete(currentCard.id);
      } else {
        newSet.add(currentCard.id);
      }
      return newSet;
    });
  };

  const resetProgress = () => {
    setStudiedCards(new Set());
    setReviewCards(new Set());
    setCurrentIndex(0);
    setShowAnswer(false);
    setIsReviewMode(false);
  };

  const toggleShuffle = () => {
    setIsShuffled(!isShuffled);
  };

  const toggleReviewMode = () => {
    setIsReviewMode(!isReviewMode);
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'facile': return 'bg-green-100 text-green-800';
      case 'moyen': return 'bg-yellow-100 text-yellow-800';
      case 'difficile': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Algorithmes sur les listes': return <Calculator className="h-4 w-4" />;
      case 'Histogrammes': return <Target className="h-4 w-4" />;
      case 'Simulation de lois': return <Zap className="h-4 w-4" />;
      case 'Inégalités fondamentales': return <BookOpen className="h-4 w-4" />;
      case 'Convergence en probabilité': return <Target className="h-4 w-4" />;
      case 'Convergence en loi': return <Target className="h-4 w-4" />;
      case 'Monte Carlo': return <Calculator className="h-4 w-4" />;
      case 'Applications': return <Zap className="h-4 w-4" />;
      default: return <BookOpen className="h-4 w-4" />;
    }
  };

  const categories = Array.from(new Set(analyseLoisMonteCarloFlashcards.map(card => card.category)));

  if (!currentCard) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto py-8 px-4">
          <div className="text-center">
            <p className="text-gray-500">Aucune carte trouvée avec ces filtres.</p>
          </div>
        </div>
      </div>
    );
  }

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
            <span className="text-teal-600 font-medium">Chapitre 10 - Flashcards</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4 text-teal-900">Flashcards - Analyse de lois & Monte Carlo</h1>
          <p className="text-lg text-blue-800 max-w-2xl mx-auto">
            Chapitre 10 : Approximation d'intégrales, histogrammes, théorèmes limites et convergence
          </p>

          {/* Informations de chapitre */}
          <div className="max-w-xl mx-auto mt-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Séance</span>
                  <span className="text-2xl font-bold text-blue-900">10</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Cartes</span>
                  <span className="text-2xl font-bold text-blue-900">{analyseLoisMonteCarloFlashcards.length}</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Niveau</span>
                  <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    Avancé
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Filtres */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filtres et options
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-1 block">Catégorie</label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger>
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
                <label className="text-sm font-medium text-gray-700 mb-1 block">Difficulté</label>
                <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                  <SelectTrigger>
                    <SelectValue placeholder="Toutes les difficultés" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">Toutes les difficultés</SelectItem>
                    <SelectItem value="facile">Facile</SelectItem>
                    <SelectItem value="moyen">Moyen</SelectItem>
                    <SelectItem value="difficile">Difficile</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-end gap-2">
                <Button
                  variant={isShuffled ? "default" : "outline"}
                  size="sm"
                  onClick={toggleShuffle}
                  className="flex-1"
                >
                  <Shuffle className="h-4 w-4 mr-1" />
                  Mélanger
                </Button>
              </div>

              <div className="flex items-end gap-2">
                <Button
                  variant={isReviewMode ? "default" : "outline"}
                  size="sm"
                  onClick={toggleReviewMode}
                  className="flex-1"
                >
                  <Eye className="h-4 w-4 mr-1" />
                  Révision ({reviewCards.size})
                </Button>
              </div>
            </div>

            <div className="flex justify-between items-center text-sm text-gray-600">
              <span>{totalCards} carte{totalCards > 1 ? 's' : ''} affichée{totalCards > 1 ? 's' : ''}</span>
              <span>{studiedCards.size} carte{studiedCards.size > 1 ? 's' : ''} étudiée{studiedCards.size > 1 ? 's' : ''}</span>
            </div>
          </CardContent>
        </Card>

        {/* Carte principale */}
        <div className="mb-8">
          <Card className="shadow-xl border-2 hover:shadow-2xl transition-shadow duration-300">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 border-b">
              <div className="flex justify-between items-start">
                <div className="flex items-center gap-2">
                  {getCategoryIcon(currentCard.category)}
                  <span className="text-sm text-blue-700 font-medium">{currentCard.category}</span>
                </div>
                <div className="flex gap-2">
                  <Badge className={getDifficultyColor(currentCard.difficulty)}>
                    {currentCard.difficulty}
                  </Badge>
                  {reviewCards.has(currentCard.id) && (
                    <Badge className="bg-purple-100 text-purple-800">
                      À réviser
                    </Badge>
                  )}
                  {studiedCards.has(currentCard.id) && (
                    <Badge className="bg-green-100 text-green-800">
                      Étudiée
                    </Badge>
                  )}
                </div>
              </div>
              <div className="text-center">
                <span className="text-sm text-gray-500">
                  Carte {currentIndex + 1} sur {totalCards}
                </span>
              </div>
            </CardHeader>

            <CardContent className="p-8">
              <div className="text-center">
                {!showAnswer ? (
                  <div>
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Question</h3>
                      <div className="text-lg text-gray-700 leading-relaxed">
                        {currentCard.frontLatex ? (
                          <LatexRenderer latex={currentCard.frontLatex} block={true} />
                        ) : (
                          currentCard.front
                        )}
                      </div>
                    </div>
                    <Button
                      onClick={toggleAnswer}
                      className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg"
                    >
                      <Eye className="mr-2 h-5 w-5" />
                      Montrer la réponse
                    </Button>
                  </div>
                ) : (
                  <div>
                    <div className="mb-6">
                      <h3 className="text-xl font-semibold text-gray-800 mb-4">Réponse</h3>
                      <div className="text-lg text-gray-700 leading-relaxed">
                        {currentCard.backLatex ? (
                          <LatexRenderer latex={currentCard.backLatex} block={true} />
                        ) : (
                          currentCard.back
                        )}
                      </div>
                    </div>
                    <div className="flex gap-3 justify-center">
                      <Button
                        variant="outline"
                        onClick={markForReview}
                        className={reviewCards.has(currentCard.id) ? "border-purple-500 text-purple-600" : ""}
                      >
                        {reviewCards.has(currentCard.id) ? "Retirer de la révision" : "À réviser"}
                      </Button>
                      <Button
                        onClick={toggleAnswer}
                        className="bg-gray-600 hover:bg-gray-700 text-white"
                      >
                        <EyeOff className="mr-2 h-5 w-5" />
                        Masquer la réponse
                      </Button>
                    </div>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Contrôles de navigation */}
        <div className="flex justify-between items-center mb-8">
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={prevCard}
              disabled={currentIndex === 0}
              className="px-4 py-2"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Précédent
            </Button>
            <Button
              variant="outline"
              onClick={nextCard}
              disabled={currentIndex === totalCards - 1}
              className="px-4 py-2"
            >
              Suivant
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>

          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={resetProgress}
              className="px-4 py-2"
            >
              <RotateCcw className="mr-2 h-4 w-4" />
              Réinitialiser
            </Button>
          </div>
        </div>

        {/* Indicateur de progression */}
        <div className="mb-8">
          <div className="bg-gray-200 rounded-full h-3">
            <div
              className="bg-teal-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${((currentIndex + 1) / totalCards) * 100}%` }}
            ></div>
          </div>
          <div className="text-center mt-2 text-sm text-gray-600">
            Progression : {currentIndex + 1} / {totalCards}
          </div>
        </div>

        {/* Navigation vers autres ressources */}
        <div className="text-center">
          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/formation/oteria/integrales-monte-carlo-cours">
              <button className="inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                <BookOpen className="h-4 w-4" />
                Retour au cours
              </button>
            </Link>
            <Link to="/formation/oteria/integrales-monte-carlo-exercices">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <Target className="h-4 w-4" />
                Exercices
              </button>
            </Link>
            <Link to="/articles/oteria-cyber-school">
              <button className="inline-flex items-center gap-2 bg-gray-600 text-white px-4 py-2 rounded-lg hover:bg-gray-700 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Programme OTERIA
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OteriaIntegralesMonteCarloFlashcardsPage;
