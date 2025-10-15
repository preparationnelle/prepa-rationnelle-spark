import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, ArrowRight, RotateCcw, Shuffle, Filter, BookOpen, Target, Shield, Eye, EyeOff, Calculator, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { denombrementFlashcards, getDenombrementFlashcardsByCategory, getDenombrementFlashcardsByDifficulty, shuffleDenombrementFlashcards } from '@/data/denombrementFlashcardsData';
import { LatexRenderer } from '@/components/LatexRenderer';

const OteriaDenombrementFlashcardsPage = () => {

  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [studiedCards, setStudiedCards] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>('all');
  const [reviewCards, setReviewCards] = useState<Set<number>>(new Set());
  const [isReviewMode, setIsReviewMode] = useState(false);
  const [isShuffled, setIsShuffled] = useState(false);
  const [filteredCards, setFilteredCards] = useState(denombrementFlashcards);

  // Mettre à jour les cartes filtrées
  useEffect(() => {
    let filtered = denombrementFlashcards;

    if (selectedCategory !== 'all') {
      filtered = getDenombrementFlashcardsByCategory(selectedCategory);
    }

    if (selectedDifficulty !== 'all') {
      filtered = filtered.filter(card => card.difficulty === selectedDifficulty);
    }

    if (isReviewMode) {
      filtered = filtered.filter((_, index) => reviewCards.has(index));
    }

    if (isShuffled) {
      filtered = shuffleDenombrementFlashcards(filtered);
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
  const categories = Array.from(new Set(denombrementFlashcards.map(card => card.category)));
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
            <span className="text-teal-600 font-medium">Séance 7 - Flashcards</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <Shield className="h-8 w-8 text-teal-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-teal-900">Flashcards - Dénombrement & paradoxes</h1>
          <p className="text-lg text-teal-700 max-w-3xl mx-auto mb-6">
            Révisez les concepts clés des coefficients binomiaux et du paradoxe des anniversaires
          </p>

          {/* Informations de séance */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-teal-600 font-medium mb-1">Numéro de séance</span>
                  <span className="text-2xl font-bold text-teal-900">7</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-teal-600 font-medium mb-1">Nombre de cartes</span>
                  <span className="text-2xl font-bold text-teal-900">{denombrementFlashcards.length}</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-teal-600 font-medium mb-1">Niveau</span>
                  <span className="inline-flex items-center gap-2 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
                    🟠 Intermédiaire
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Ressources pédagogiques */}
          <div className="max-w-4xl mx-auto mb-6">
            <div className="bg-white border border-teal-200 rounded-lg p-6 shadow-sm">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Link to="/formation/oteria/denombrement-paradoxes-cours" className="group">
                  <button className="w-full bg-teal-600 text-white px-4 py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <BookOpen className="h-5 w-5 mx-auto mb-2" />
                    Cours
                  </button>
                </Link>
                <Link to="/formation/oteria/denombrement-exercices" className="group">
                  <button className="w-full bg-teal-600 text-white px-4 py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <Target className="h-5 w-5 mx-auto mb-2" />
                    Exercices
                  </button>
                </Link>
                <button className="w-full bg-teal-600 text-white px-4 py-3 rounded-lg cursor-default font-medium shadow-md">
                  <Calculator className="h-5 w-5 mx-auto mb-2" />
                  Flashcards
                </button>
                <Link to="/formation/oteria/denombrement-qcm" className="group">
                  <button className="w-full bg-teal-600 text-white px-4 py-3 rounded-lg hover:bg-teal-700 transition-all duration-300 font-medium group-hover:scale-105 shadow-md hover:shadow-lg">
                    <Zap className="h-5 w-5 mx-auto mb-2" />
                    QCM
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Barre de progression */}
        <div className="max-w-4xl mx-auto mb-6">
          <div className="bg-gray-200 rounded-full h-3 overflow-hidden">
            <div 
              className="bg-teal-600 h-full transition-all duration-300"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <div className="flex justify-between mt-2 text-sm text-gray-600">
            <span>Carte {currentIndex + 1} sur {totalCards}</span>
            <span>{studiedCards.size} étudiées ({Math.round(studiedPercentage)}%)</span>
          </div>
        </div>

        {/* Filtres et contrôles */}
        <div className="max-w-4xl mx-auto mb-6">
          <div className="bg-white border border-teal-200 rounded-lg p-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                <SelectTrigger>
                  <SelectValue placeholder="Catégorie" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes les catégories</SelectItem>
                  {categories.map((cat) => (
                    <SelectItem key={cat} value={cat}>{cat}</SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Select value={selectedDifficulty} onValueChange={setSelectedDifficulty}>
                <SelectTrigger>
                  <SelectValue placeholder="Difficulté" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Toutes difficultés</SelectItem>
                  {difficulties.map((diff) => (
                    <SelectItem key={diff} value={diff}>
                      {diff.charAt(0).toUpperCase() + diff.slice(1)}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>

              <Button
                onClick={toggleShuffle}
                variant={isShuffled ? "default" : "outline"}
                className="w-full"
              >
                <Shuffle className="h-4 w-4 mr-2" />
                {isShuffled ? 'Mélangé' : 'Mélanger'}
              </Button>

              <Button
                onClick={resetProgress}
                variant="outline"
                className="w-full"
              >
                <RotateCcw className="h-4 w-4 mr-2" />
                Réinitialiser
              </Button>
            </div>
          </div>
        </div>

        {/* Carte de révision */}
        {totalCards > 0 && currentCard ? (
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-teal-200 shadow-2xl">
              <CardHeader className="bg-gradient-to-r from-teal-50 to-blue-50">
                <div className="flex justify-between items-center">
                  <CardTitle className="text-xl text-teal-900">
                    {currentCard.category}
                  </CardTitle>
                  <Badge 
                    variant={
                      currentCard.difficulty === 'facile' ? 'default' :
                      currentCard.difficulty === 'moyen' ? 'secondary' : 'destructive'
                    }
                  >
                    {currentCard.difficulty.charAt(0).toUpperCase() + currentCard.difficulty.slice(1)}
                  </Badge>
                </div>
              </CardHeader>
              <CardContent className="p-8">
                <div className="min-h-[300px] flex flex-col justify-center">
                  {/* Question */}
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-800 mb-4">
                      {currentCard.front}
                    </h3>
                    {currentCard.frontLatex && (
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <LatexRenderer latex={currentCard.frontLatex} block={true} />
                      </div>
                    )}
                  </div>

                  {/* Réponse */}
                  {showAnswer && (
                    <div className="border-t-2 border-teal-200 pt-6 animate-in fade-in duration-300">
                      <p className="text-lg text-gray-700 mb-3">
                        {currentCard.back}
                      </p>
                      {currentCard.backLatex && (
                        <div className="bg-green-50 p-4 rounded-lg">
                          <LatexRenderer latex={currentCard.backLatex} block={true} />
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Boutons de contrôle */}
                <div className="flex gap-4 mt-6">
                  <Button
                    onClick={toggleAnswer}
                    className="flex-1"
                    variant={showAnswer ? "secondary" : "default"}
                  >
                    {showAnswer ? (
                      <><EyeOff className="h-4 w-4 mr-2" /> Masquer la réponse</>
                    ) : (
                      <><Eye className="h-4 w-4 mr-2" /> Afficher la réponse</>
                    )}
                  </Button>
                  <Button
                    onClick={markForReview}
                    variant="outline"
                    className="flex-1"
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    À réviser
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-6">
              <Button
                onClick={prevCard}
                variant="outline"
                size="lg"
                disabled={totalCards <= 1}
              >
                <ArrowLeft className="h-5 w-5 mr-2" />
                Précédent
              </Button>

              <div className="text-center">
                <p className="text-sm text-gray-600">
                  Raccourcis : ← Précédent | Espace/→ Suivant | Entrée Révéler | R À réviser
                </p>
              </div>

              <Button
                onClick={nextCard}
                variant="default"
                size="lg"
                disabled={totalCards <= 1}
              >
                Suivant
                <ArrowRight className="h-5 w-5 ml-2" />
              </Button>
            </div>
          </div>
        ) : (
          <div className="max-w-4xl mx-auto text-center py-12">
            <p className="text-xl text-gray-600">Aucune carte ne correspond aux filtres sélectionnés.</p>
          </div>
        )}

        {/* Statistiques */}
        {reviewCards.size > 0 && (
          <div className="max-w-4xl mx-auto mt-8">
            <Card className="border-orange-200 bg-orange-50">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-lg font-semibold text-orange-900">
                      Cartes à réviser : {reviewCards.size}
                    </h3>
                    <p className="text-sm text-orange-700">
                      Cliquez sur "À réviser" pour marquer les cartes difficiles
                    </p>
                  </div>
                  <Button
                    onClick={() => setIsReviewMode(!isReviewMode)}
                    variant={isReviewMode ? "default" : "outline"}
                  >
                    <Filter className="h-4 w-4 mr-2" />
                    {isReviewMode ? 'Mode révision actif' : 'Activer mode révision'}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Retour au programme */}
        <div className="text-center mt-12">
          <Link to="/articles/oteria-cyber-school">
            <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-3 text-lg">
              Retour au programme OTERIA
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OteriaDenombrementFlashcardsPage;

