import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, ArrowRight, RotateCcw, Shuffle, Filter, BookOpen, Database, Target, Zap, Eye, EyeOff, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { arithmeticModularFlashcards, getArithmeticModularFlashcardsByCategory, getArithmeticModularFlashcardsByDifficulty, shuffleArithmeticModularFlashcards } from '@/data/arithmeticModularFlashcardsData';
import { LatexRenderer } from '@/components/LatexRenderer';

const OteriaMatricesStochastiquesFlashcardsPage = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [studiedCards, setStudiedCards] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [reviewCards, setReviewCards] = useState<Set<number>>(new Set());
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [filteredCards, setFilteredCards] = useState(arithmeticModularFlashcards);

  // Mettre à jour les cartes filtrées
  useEffect(() => {
    let filtered = arithmeticModularFlashcards;

    if (selectedCategory !== 'all') {
      filtered = getArithmeticModularFlashcardsByCategory(selectedCategory);
    }

    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter(card => card.difficulty === selectedDifficulty);
    }

    if (isReviewMode) {
      filtered = filtered.filter((_, index) => reviewCards.has(index));
    }

    if (isShuffled) {
      filtered = shuffleArithmeticModularFlashcards(filtered);
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
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [showAnswer, currentIndex, totalCards]);

  // Catégories disponibles
  const categories = ['all', ...Array.from(new Set(arithmeticModularFlashcards.map(card => card.category)))];

  if (!currentCard) {
    return (
      <div className="min-h-screen bg-white">
        <div className="container mx-auto py-8 px-4 text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Aucune flashcard trouvée</h1>
          <p className="text-gray-600">Ajustez vos filtres pour voir des flashcards.</p>
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
            <span className="text-teal-600 font-medium">Séance 12 - Flashcards</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold mb-4 text-blue-900">Chapitre 12 : Arithmétique modulaire et Cryptographie affine</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Flashcards interactives — Testez vos connaissances sur l'arithmétique modulaire et la cryptographie
          </p>

          {/* Informations de chapitre */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Flashcards</span>
                  <span className="text-2xl font-bold text-blue-900">{arithmeticModularFlashcards.length}</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Catégories</span>
                  <span className="text-2xl font-bold text-blue-900">{categories.length - 1}</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Niveau</span>
                  <span className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    <Database className="h-4 w-4" />
                    Avancé
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/formation/oteria/matrices-stochastiques-cours">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <BookOpen className="h-4 w-4" />
                Retour au cours
              </button>
            </Link>
            <Link to="/formation/oteria/matrices-stochastiques-exercices">
              <button className="inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                <Target className="h-4 w-4" />
                Exercices
              </button>
            </Link>
            <Link to="/formation/oteria/matrices-stochastiques-qcm">
              <button className="inline-flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg hover:bg-purple-700 transition-colors">
                <BarChart3 className="h-4 w-4" />
                QCM
              </button>
            </Link>
          </div>
        </div>

        {/* Filtres et contrôles */}
        <div className="mb-6">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100">
            <CardHeader>
              <CardTitle className="text-xl font-bold text-blue-600 flex items-center gap-2">
                <Filter className="h-5 w-5" />
                Filtres et contrôles
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <label className="block text-sm font-medium text-blue-700 mb-2">Catégorie</label>
                  <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Toutes les catégories" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="all">Toutes les catégories</SelectItem>
                      <SelectItem value="Définitions">Définitions</SelectItem>
                      <SelectItem value="Congruences">Congruences</SelectItem>
                      <SelectItem value="Propriétés">Propriétés</SelectItem>
                      <SelectItem value="Inverses modulaires">Inverses modulaires</SelectItem>
                      <SelectItem value="Algorithmes">Algorithmes</SelectItem>
                      <SelectItem value="Cryptographie">Cryptographie</SelectItem>
                      <SelectItem value="RSA">RSA</SelectItem>
                      <SelectItem value="Diffie-Hellman">Diffie-Hellman</SelectItem>
                      <SelectItem value="Calculs">Calculs</SelectItem>
                      <SelectItem value="Théorèmes">Théorèmes</SelectItem>
                      <SelectItem value="Systèmes">Systèmes</SelectItem>
                      <SelectItem value="Sécurité">Sécurité</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-blue-700 mb-2">Difficulté</label>
                  <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                    <SelectTrigger className="w-full">
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
                    onClick={toggleShuffle}
                    variant={isShuffled ? "default" : "outline"}
                    className="flex-1"
                  >
                    <Shuffle className="h-4 w-4 mr-2" />
                    {isShuffled ? 'Ordre normal' : 'Mélanger'}
                  </Button>
                </div>

                <div className="flex items-end gap-2">
                  <Button
                    onClick={resetProgress}
                    variant="outline"
                    className="flex-1"
                  >
                    <RotateCcw className="h-4 w-4 mr-2" />
                    Réinitialiser
                  </Button>
                </div>
              </div>

              {/* Mode révision */}
              {reviewCards.size > 0 && (
                <div className="flex items-center gap-4 p-3 bg-yellow-50 border border-yellow-200 rounded-lg">
                  <div className="flex-1">
                    <p className="text-yellow-800 font-medium">
                      {reviewCards.size} carte{reviewCards.size > 1 ? 's' : ''} à réviser
                    </p>
                  </div>
                  <Button
                    onClick={() => setIsReviewMode(!isReviewMode)}
                    variant={isReviewMode ? "default" : "outline"}
                    size="sm"
                  >
                    {isReviewMode ? 'Voir toutes' : 'Mode révision'}
                  </Button>
                </div>
              )}

              {/* Statistiques */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="p-3 bg-white rounded-lg border">
                  <div className="text-2xl font-bold text-blue-600">{currentIndex + 1}</div>
                  <div className="text-sm text-gray-600">Carte actuelle</div>
                </div>
                <div className="p-3 bg-white rounded-lg border">
                  <div className="text-2xl font-bold text-blue-600">{totalCards}</div>
                  <div className="text-sm text-gray-600">Total cartes</div>
                </div>
                <div className="p-3 bg-white rounded-lg border">
                  <div className="text-2xl font-bold text-green-600">{studiedCards.size}</div>
                  <div className="text-sm text-gray-600">Étudiées</div>
                </div>
                <div className="p-3 bg-white rounded-lg border">
                  <div className="text-2xl font-bold text-yellow-600">{reviewCards.size}</div>
                  <div className="text-sm text-gray-600">À réviser</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Carte principale */}
        <div className="mb-6">
          <Card className="border-0 shadow-xl bg-gradient-to-br from-blue-50 to-blue-100 min-h-[400px]">
            <CardContent className="p-8">
              <div className="text-center">
                {/* Question/Recto */}
                <div className="mb-8">
                  <div className="flex items-center justify-center gap-2 mb-4">
                    <Badge variant="outline" className="text-blue-600 border-blue-300 bg-blue-50">
                      {currentCard.category}
                    </Badge>
                    <Badge
                      variant="outline"
                      className={`${
                        currentCard.difficulty === 'facile' ? 'text-green-600 border-green-300 bg-green-50' :
                        currentCard.difficulty === 'moyen' ? 'text-yellow-600 border-yellow-300 bg-yellow-50' :
                        'text-red-600 border-red-300 bg-red-50'
                      }`}
                    >
                      {currentCard.difficulty}
                    </Badge>
                  </div>

                  <div className="text-xl font-semibold text-blue-900 mb-4">
                    Question {currentCard.id}
                  </div>

                  <div className="text-2xl font-bold text-blue-900 leading-relaxed max-w-3xl mx-auto">
                    {currentCard.frontLatex ? (
                      <LatexRenderer latex={currentCard.frontLatex} block={true} />
                    ) : (
                      currentCard.front
                    )}
                  </div>
                </div>

                {/* Réponse */}
                {showAnswer && (
                  <div className="border-t border-blue-200 pt-8">
                    <div className="text-xl font-semibold text-green-700 mb-4">Réponse</div>
                    <div className="text-lg text-blue-800 leading-relaxed max-w-3xl mx-auto">
                      {currentCard.backLatex ? (
                        <LatexRenderer latex={currentCard.backLatex} block={true} />
                      ) : (
                        currentCard.back
                      )}
                    </div>
                  </div>
                )}

                {/* Boutons d'action */}
                <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center">
                  {!showAnswer ? (
                    <Button
                      onClick={toggleAnswer}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg"
                    >
                      <Eye className="mr-2 h-5 w-5" />
                      Voir la réponse
                    </Button>
                  ) : (
                    <>
                      <Button
                        onClick={markForReview}
                        variant="outline"
                        className="border-yellow-600 text-yellow-600 hover:bg-yellow-50"
                      >
                        <RotateCcw className="mr-2 h-4 w-4" />
                        À réviser
                      </Button>
                      <Button
                        onClick={toggleAnswer}
                        variant="outline"
                        className="border-blue-600 text-blue-600 hover:bg-blue-50"
                      >
                        <EyeOff className="mr-2 h-4 w-4" />
                        Masquer
                      </Button>
                    </>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mb-6">
          <Button
            onClick={prevCard}
            variant="outline"
            className="flex items-center gap-2"
            disabled={totalCards <= 1}
          >
            <ArrowLeft className="h-4 w-4" />
            Précédente
          </Button>

          <div className="text-center">
            <div className="text-lg font-semibold text-gray-700">
              {currentIndex + 1} / {totalCards}
            </div>
            <div className="w-64 bg-gray-200 rounded-full h-2 mt-2">
              <div
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentIndex + 1) / totalCards) * 100}%` }}
              ></div>
            </div>
          </div>

          <Button
            onClick={nextCard}
            variant="outline"
            className="flex items-center gap-2"
            disabled={totalCards <= 1}
          >
            Suivante
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Raccourcis clavier */}
        <Card className="border-0 shadow-lg bg-gradient-to-r from-gray-50 to-gray-100">
          <CardHeader>
            <CardTitle className="text-lg font-bold text-gray-700 flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Raccourcis clavier
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">Espace</kbd>
                <span>ou</span>
                <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">→</kbd>
                <span>: Voir réponse / Carte suivante</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">←</kbd>
                <span>: Carte précédente</span>
              </div>
              <div className="flex items-center gap-2">
                <kbd className="px-2 py-1 bg-gray-200 rounded text-xs">R</kbd>
                <span>: Marquer pour révision</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Navigation entre pages */}
        <div className="text-center mt-8">
          <Link to="/articles/oteria-cyber-school">
            <Button variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50">
              ← Retour au programme OTERIA
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OteriaMatricesStochastiquesFlashcardsPage;
