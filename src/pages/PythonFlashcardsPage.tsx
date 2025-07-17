import React, { useEffect, useState, useCallback } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { ArrowLeft, Brain, Target, Code, Home, ChevronRight, RotateCcw, ChevronLeft, Play, Pause, Shuffle } from 'lucide-react';

// Données d'exemple pour les flashcards Python
const pythonCommands = [
  {
    id: 1,
    category: "Imports",
    command: "import numpy as np",
    description: "Importe la bibliothèque NumPy avec l'alias 'np'",
    example: "import numpy as np\narr = np.array([1, 2, 3])"
  },
  {
    id: 2,
    category: "Imports",
    command: "import pandas as pd",
    description: "Importe la bibliothèque Pandas avec l'alias 'pd'",
    example: "import pandas as pd\ndf = pd.DataFrame({'A': [1, 2, 3]})"
  },
  {
    id: 3,
    category: "Matrices",
    command: "np.array()",
    description: "Crée un tableau NumPy à partir d'une liste",
    example: "arr = np.array([1, 2, 3, 4])\nprint(arr)"
  },
  {
    id: 4,
    category: "Matrices",
    command: "np.zeros()",
    description: "Crée un tableau rempli de zéros",
    example: "zeros = np.zeros((3, 4))\nprint(zeros)"
  },
  {
    id: 5,
    category: "Graphiques",
    command: "plt.plot()",
    description: "Crée un graphique linéaire",
    example: "import matplotlib.pyplot as plt\nplt.plot([1, 2, 3], [4, 5, 6])\nplt.show()"
  }
];

const PythonFlashcardGenerator = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [isAutoPlay, setIsAutoPlay] = useState(false);
  const [shuffledCards, setShuffledCards] = useState(pythonCommands);

  // Gestion du clavier
  const handleKeyPress = useCallback((event) => {
    switch(event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        setIsFlipped(!isFlipped);
        break;
      case 'ArrowRight':
        event.preventDefault();
        goToNext();
        break;
      case 'ArrowLeft':
        event.preventDefault();
        goToPrevious();
        break;
      case 'r':
      case 'R':
        event.preventDefault();
        shuffleCards();
        break;
    }
  }, [isFlipped]);

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [handleKeyPress]);

  // Auto-play functionality
  useEffect(() => {
    let interval;
    if (isAutoPlay) {
      interval = setInterval(() => {
        setCurrentCardIndex((prev) => (prev + 1) % shuffledCards.length);
        setIsFlipped(false);
      }, 3000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlay, shuffledCards.length]);

  const goToNext = () => {
    setCurrentCardIndex((prev) => (prev + 1) % shuffledCards.length);
    setIsFlipped(false);
  };

  const goToPrevious = () => {
    setCurrentCardIndex((prev) => (prev - 1 + shuffledCards.length) % shuffledCards.length);
    setIsFlipped(false);
  };

  const shuffleCards = () => {
    const shuffled = [...pythonCommands].sort(() => Math.random() - 0.5);
    setShuffledCards(shuffled);
    setCurrentCardIndex(0);
    setIsFlipped(false);
  };

  const currentCard = shuffledCards[currentCardIndex];

  return (
    <div className="max-w-4xl mx-auto">
      {/* Contrôles */}
      <div className="flex flex-wrap items-center justify-between mb-6 p-4 bg-muted/50 rounded-lg border">
        <div className="flex items-center gap-2 mb-2 sm:mb-0">
          <Badge variant="secondary" className="text-sm">
            {currentCardIndex + 1} / {shuffledCards.length}
          </Badge>
          <Badge variant="outline" className="text-sm">
            {currentCard.category}
          </Badge>
        </div>
        
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={shuffleCards}
            className="flex items-center gap-1"
          >
            <Shuffle className="h-3 w-3" />
            Mélanger
          </Button>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setIsAutoPlay(!isAutoPlay)}
            className="flex items-center gap-1"
          >
            {isAutoPlay ? <Pause className="h-3 w-3" /> : <Play className="h-3 w-3" />}
            {isAutoPlay ? 'Pause' : 'Auto'}
          </Button>
        </div>
      </div>

      {/* Flashcard */}
      <div className="relative mb-6">
        <div 
          className={`relative w-full h-96 cursor-pointer transition-all duration-700 transform-style-preserve-3d ${
            isFlipped ? 'rotate-y-180' : ''
          }`}
          onClick={() => setIsFlipped(!isFlipped)}
          style={{ transformStyle: 'preserve-3d' }}
        >
          {/* Face avant */}
          <Card className={`absolute inset-0 w-full h-full backface-hidden border-2 transition-all duration-300 ${
            isFlipped ? 'opacity-0' : 'opacity-100 hover:border-blue-300 hover:shadow-lg'
          }`}>
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold text-blue-600 mb-2">
                Commande Python
              </CardTitle>
              <p className="text-sm text-muted-foreground">
                Cliquez ou appuyez sur Entrée pour voir la réponse
              </p>
            </CardHeader>
            <CardContent className="flex-1 flex items-center justify-center">
              <div className="text-center">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mb-4 border-2 border-dashed border-gray-300 dark:border-gray-600">
                  <code className="text-2xl font-mono font-bold text-green-600 dark:text-green-400">
                    {currentCard.command}
                  </code>
                </div>
                <p className="text-lg text-muted-foreground">
                  Que fait cette commande ?
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Face arrière */}
          <Card className={`absolute inset-0 w-full h-full backface-hidden border-2 transition-all duration-300 ${
            isFlipped ? 'opacity-100 border-green-300 shadow-lg' : 'opacity-0'
          }`} style={{ transform: 'rotateY(180deg) scaleX(-1)' }}>
            <CardHeader className="text-center pb-4">
              <CardTitle className="text-2xl font-bold text-green-600 mb-2">
                Réponse
              </CardTitle>
              <Badge variant="secondary" className="text-sm">
                {currentCard.category}
              </Badge>
            </CardHeader>
            <CardContent className="flex-1 flex items-center justify-center">
              <div className="text-center space-y-4">
                <div className="bg-gray-100 dark:bg-gray-800 rounded-lg p-4 mb-4">
                  <code className="text-lg font-mono font-bold text-green-600 dark:text-green-400">
                    {currentCard.command}
                  </code>
                </div>
                <p className="text-lg font-medium mb-4">
                  {currentCard.description}
                </p>
                <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-4 border border-blue-200 dark:border-blue-800">
                  <p className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2">
                    Exemple d'utilisation :
                  </p>
                  <pre className="text-sm text-left bg-gray-900 text-green-400 p-3 rounded overflow-x-auto">
                    <code>{currentCard.example}</code>
                  </pre>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Navigation */}
      <div className="flex items-center justify-between mb-6">
        <Button
          variant="outline"
          onClick={goToPrevious}
          className="flex items-center gap-2"
        >
          <ChevronLeft className="h-4 w-4" />
          Précédent
        </Button>
        
        <div className="flex items-center gap-2">
          <Button
            variant="outline"
            onClick={() => setIsFlipped(!isFlipped)}
            className="flex items-center gap-2"
          >
            <RotateCcw className="h-4 w-4" />
            Retourner
          </Button>
        </div>
        
        <Button
          variant="outline"
          onClick={goToNext}
          className="flex items-center gap-2"
        >
          Suivant
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Raccourcis clavier */}
      <Card className="bg-muted/30 border-dashed">
        <CardContent className="p-4">
          <h4 className="font-semibold mb-3 text-center">Raccourcis clavier</h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 text-sm">
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">Entrée</Badge>
              <span className="text-muted-foreground">Retourner</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">→</Badge>
              <span className="text-muted-foreground">Suivant</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">←</Badge>
              <span className="text-muted-foreground">Précédent</span>
            </div>
            <div className="flex items-center gap-2">
              <Badge variant="outline" className="text-xs">R</Badge>
              <span className="text-muted-foreground">Mélanger</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

const PythonNavigationTabs = ({ className }) => {
  const tabs = [
    { id: 'flashcards', label: 'Flashcards', active: true },
    { id: 'reference', label: 'Référence complète' },
    { id: 'quiz', label: 'Quiz interactif' },
    { id: 'progression', label: 'Ma progression' }
  ];

  return (
    <div className={`flex flex-wrap justify-center gap-2 ${className}`}>
      {tabs.map((tab) => (
        <Button
          key={tab.id}
          variant={tab.active ? "default" : "outline"}
          className="flex items-center gap-2"
        >
          {tab.label}
        </Button>
      ))}
    </div>
  );
};

const PythonFlashcardsPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-900 dark:to-gray-800">
      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <div className="flex items-center gap-1 hover:text-foreground transition-colors cursor-pointer">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </div>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <div className="hover:text-foreground transition-colors cursor-pointer">
              Formation
            </div>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Formation Python ECG</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header amélioré */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-200 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Code className="h-4 w-4" />
            Formation Python ECG
          </div>
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Flashcards Python
          </h1>
          <p className="text-xl text-muted-foreground mb-6 max-w-2xl mx-auto">
            Maîtrisez les 54 commandes essentielles avec nos flashcards interactives. 
            Utilisez votre clavier pour naviguer rapidement !
          </p>
        </div>

        {/* Navigation Tabs */}
        <PythonNavigationTabs className="mb-8" />

        {/* Flashcard Generator */}
        <PythonFlashcardGenerator />

        {/* Stats Section améliorée */}
        <div className="mt-16 mb-8">
          <h2 className="text-3xl font-bold text-center mb-8 bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent dark:from-gray-200 dark:to-gray-400">
            Pourquoi ces flashcards ?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-blue-300 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">54 Commandes</h3>
                <p className="text-sm text-muted-foreground">
                  Toutes les commandes Python au programme ECG, organisées par catégories
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-green-300 bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Brain className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">9 Catégories</h3>
                <p className="text-sm text-muted-foreground">
                  Imports, matrices, graphiques, statistiques et bien plus
                </p>
              </CardContent>
            </Card>
            
            <Card className="hover:shadow-lg transition-all duration-300 border-2 hover:border-orange-300 bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <h3 className="font-bold text-lg mb-2">+3 à 5 points</h3>
                <p className="text-sm text-muted-foreground">
                  Points sûrs aux concours avec une préparation optimale
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Call to Action amélioré */}
        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white mb-8">
            <h3 className="text-2xl font-bold mb-4">Prêt à aller plus loin ?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Découvrez notre référence complète des commandes Python et notre coaching personnalisé
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" className="flex items-center gap-2 bg-white text-blue-600 hover:bg-blue-50">
                <Code className="h-4 w-4" />
                Référence complète
              </Button>
              <Button variant="outline" className="flex items-center gap-2 border-white text-white hover:bg-white hover:text-blue-600">
                <Target className="h-4 w-4" />
                Coaching individuel
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PythonFlashcardsPage;