import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, ArrowRight, RotateCcw, Shuffle, Filter, BookOpen, Target, Calculator, Zap, Eye, EyeOff, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { fonctionsFlashcards, getFonctionsFlashcardsByCategory, getFonctionsFlashcardsByDifficulty, shuffleFonctionsFlashcards } from '@/data/fonctionsFlashcardsData';

const OteriaFonctionsFlashcardsPage = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [studiedCards, setStudiedCards] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [reviewCards, setReviewCards] = useState<Set<number>>(new Set());
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [filteredCards, setFilteredCards] = useState(fonctionsFlashcards);

  // Mettre à jour les cartes filtrées
  useEffect(() => {
    let filtered = fonctionsFlashcards;

    if (selectedCategory !== 'all') {
      filtered = getFonctionsFlashcardsByCategory(selectedCategory);
    }

    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter(card => card.difficulty === selectedDifficulty);
    }

    if (isReviewMode) {
      filtered = filtered.filter((_, index) => reviewCards.has(index));
    }

    if (isShuffled) {
      filtered = shuffleFonctionsFlashcards(filtered);
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
        case 'r':
        case 'R':
          event.preventDefault();
          markForReview();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showAnswer, currentIndex]);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'facile': return 'bg-green-100 text-green-800';
      case 'moyen': return 'bg-yellow-100 text-yellow-800';
      case 'difficile': return 'bg-red-100 text-red-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'Ensembles': return 'bg-blue-100 text-blue-800';
      case 'Applications': return 'bg-purple-100 text-purple-800';
      case 'Valeur absolue': return 'bg-pink-100 text-pink-800';
      case 'Propriétés': return 'bg-indigo-100 text-indigo-800';
      case 'Continuité': return 'bg-teal-100 text-teal-800';
      case 'Limites': return 'bg-orange-100 text-orange-800';
      case 'Python': return 'bg-cyan-100 text-cyan-800';
      default: return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-blue-600">
            <Link to="/" className="flex items-center gap-1 hover:text-blue-700 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <Link to="/articles" className="hover:text-blue-700 transition-colors">
              Niveau
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <Link to="/articles/oteria-cyber-school" className="hover:text-blue-700 transition-colors">
              OTERIA Cyber School
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <span className="text-blue-600 font-medium">Séance 5 - Flashcards</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <BarChart3 className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-blue-900">Flashcards : Fonctions</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Parité, périodicité, continuité (aperçu), Théorème de croissance comparée
          </p>

          {/* Informations de séance */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Cartes étudiées</span>
                  <span className="text-2xl font-bold text-blue-900">{studiedCards.size}/{totalCards}</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Cartes à réviser</span>
                  <span className="text-2xl font-bold text-blue-900">{reviewCards.size}</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Progression</span>
                  <span className="text-2xl font-bold text-blue-900">{Math.round((studiedCards.size / totalCards) * 100)}%</span>
                </div>
              </div>
            </div>
          </div>

          {/* Ressources pédagogiques */}
          <div className="max-w-4xl mx-auto mb-6">
            <div className="bg-white border border-blue-200 rounded-lg p-6 shadow-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link to="/formation/oteria/fonctions-variable-reelle-cours" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <BookOpen className="h-5 w-5 mx-auto mb-2" />
                    Cours
                  </button>
                </Link>
                <Link to="/formation/oteria/fonctions-exercices" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <Target className="h-5 w-5 mx-auto mb-2" />
                    Exercices
                  </button>
                </Link>
                <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg cursor-default font-medium shadow-md">
                  <Calculator className="h-5 w-5 mx-auto mb-2" />
                  Flashcards
                </button>
                <Link to="/formation/oteria/fonctions-qcm" className="group">
                  <button className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
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
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filtres et options
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4 mb-4">
                <div>
                  <label className="text-sm font-medium text-blue-900 mb-2 block">Catégorie</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger>
                      <SelectValue placeholder="Toutes" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Toutes</SelectItem>
                      <SelectItem value="Ensembles">Ensembles</SelectItem>
                      <SelectItem value="Applications">Applications</SelectItem>
                      <SelectItem value="Valeur absolue">Valeur absolue</SelectItem>
                      <SelectItem value="Propriétés">Propriétés</SelectItem>
                      <SelectItem value="Continuité">Continuité</SelectItem>
                      <SelectItem value="Limites">Limites</SelectItem>
                      <SelectItem value="Python">Python</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-blue-900 mb-2 block">Difficulté</label>
                  <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                    <SelectTrigger>
                      <SelectValue placeholder="Toutes" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Toutes</SelectItem>
                      <SelectItem value="facile">Facile</SelectItem>
                      <SelectItem value="moyen">Moyen</SelectItem>
                      <SelectItem value="difficile">Difficile</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="text-sm font-medium text-blue-900 mb-2 block">Actions</label>
                  <div className="flex gap-2">
                    <Button onClick={toggleShuffle} variant={isShuffled ? "default" : "outline"} className="flex-1">
                      <Shuffle className="h-4 w-4 mr-2" />
                      Mélanger
                    </Button>
                    <Button onClick={resetProgress} variant="outline">
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <Button
                  onClick={() => setIsReviewMode(!isReviewMode)}
                  variant={isReviewMode ? "default" : "outline"}
                  disabled={reviewCards.size === 0}
                >
                  Mode révision ({reviewCards.size})
                </Button>
                <div className="text-sm text-blue-600">
                  Utilisez les flèches ← → ou Espace pour naviguer, R pour marquer à réviser
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Carte principale */}
        <div className="max-w-4xl mx-auto">
          {currentCard && (
            <Card className="shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100">
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <Badge className={getCategoryColor(currentCard.category)}>
                      {currentCard.category}
                    </Badge>
                    <Badge className={getDifficultyColor(currentCard.difficulty)}>
                      {currentCard.difficulty}
                    </Badge>
                  </div>
                  <div className="text-sm font-medium text-blue-900">
                    Carte {currentIndex + 1} / {totalCards}
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="min-h-[200px] flex flex-col justify-center">
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Question</h3>
                    <p className="text-lg text-blue-800">{currentCard.question}</p>
                  </div>

                  {showAnswer && (
                    <div className="border-t-2 border-blue-200 pt-6 mt-6 animate-in fade-in duration-300">
                      <h3 className="text-xl font-semibold text-green-900 mb-4 text-center">Réponse</h3>
                      <p className="text-lg text-green-800 text-center">{currentCard.answer}</p>
                    </div>
                  )}
                </div>

                <div className="flex justify-center gap-4 mt-8">
                  <Button onClick={prevCard} variant="outline" size="lg">
                    <ArrowLeft className="h-5 w-5 mr-2" />
                    Précédent
                  </Button>
                  <Button onClick={toggleAnswer} size="lg" className="min-w-[150px]">
                    {showAnswer ? (
                      <>
                        <EyeOff className="h-5 w-5 mr-2" />
                        Masquer
                      </>
                    ) : (
                      <>
                        <Eye className="h-5 w-5 mr-2" />
                        Révéler
                      </>
                    )}
                  </Button>
                  <Button onClick={nextCard} variant="outline" size="lg">
                    Suivant
                    <ArrowRight className="h-5 w-5 ml-2" />
                  </Button>
                </div>

                <div className="flex justify-center mt-4">
                  <Button onClick={markForReview} variant="ghost" size="sm">
                    Marquer pour révision (R)
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Navigation bas de page */}
        <div className="max-w-4xl mx-auto mt-8">
          <div className="flex justify-between items-center bg-blue-50 p-6 rounded-lg">
            <Link to="/formation/oteria/suites-numeriques-qcm">
              <div className="text-blue-600 hover:text-blue-700">← Séance précédente</div>
            </Link>
            <div className="flex gap-3">
              <Link to="/formation/oteria/fonctions-variable-reelle-cours">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Cours
                </button>
              </Link>
              <Link to="/formation/oteria/fonctions-exercices">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Exercices
                </button>
              </Link>
              <Link to="/articles/oteria-cyber-school">
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Retour au programme
                </button>
              </Link>
            </div>
            <Link to="/formation/oteria/polynomes-cours">
              <div className="text-blue-600 hover:text-blue-700">Séance suivante →</div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OteriaFonctionsFlashcardsPage;

