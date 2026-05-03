import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, RotateCcw, BookOpen, Eye, EyeOff, Filter, Shuffle, Star } from 'lucide-react';
import { useUserData } from '@/context/UserDataContext';

interface GeopoliticsEnergiesCard {
  term: string;
  definition: string;
  category: string;
}

const geopoliticsEnergiesData: GeopoliticsEnergiesCard[] = [
  {
    term: "Transition énergétique",
    definition: "Processus de passage d'un système énergétique basé sur les fossiles vers des sources renouvelables et bas carbone, marqué par des incertitudes technologiques, coûts élevés et défis de coordination internationale.",
    category: "Transition énergétique"
  },
  {
    term: "Terres rares",
    definition: "Minerais essentiels aux technologies bas carbone (éoliennes, véhicules électriques, panneaux solaires). L'Union Européenne dépend à plus de 98% des importations chinoises. Découverte majeure en Suède (LKAB, 2023).",
    category: "Matières premières critiques"
  },
  {
    term: "Cuivre stratégique",
    definition: "Métal essentiel pour les renouvelables, représentant 75% des exportations du Panama. Fermeture de la mine de Cobre Panamá (2022) a impacté l'approvisionnement mondial.",
    category: "Matières premières critiques"
  },
  {
    term: "Géothermie au Kenya",
    definition: "Deuxième source d'électricité après l'hydroélectricité. Centrale d'Olkaria (8e mondiale) produit de l'énergie renouvelable via la chaleur terrestre.",
    category: "Énergies renouvelables"
  },
  {
    term: "Nucléaire au Japon",
    definition: "Relance post-Fukushima sous Fumio Kishida pour atteindre la neutralité carbone, malgré l'opposition publique persistante à l'énergie nucléaire.",
    category: "Énergie nucléaire"
  },
  {
    term: "Uranium kazakh",
    definition: "Kazakhstan = 1er producteur mondial (42% en 2019). Pour la France (41% d'électricité nucléaire), sécurisation des approvisionnements avec Orano présent via KATCO.",
    category: "Énergie nucléaire"
  },
  {
    term: "RePowerEU",
    definition: "Plan européen (mai 2022) pour se passer des fossiles russes d'ici 2027 via sobriété énergétique, diversification des sources et développement des renouvelables.",
    category: "Politique énergétique UE"
  },
  {
    term: "Dépendance énergétique russe",
    definition: "Avant la guerre d'Ukraine : 40% des importations de gaz européen. Réduite à 13% en novembre 2022 grâce à la diversification.",
    category: "Politique énergétique UE"
  },
  {
    term: "Next Generation EU",
    definition: "Plan de relance européen de 750 milliards d'euros post-COVID, priorisant climat et numérique pour la transition énergétique.",
    category: "Politique énergétique UE"
  },
  {
    term: "Paquet Fit for 55",
    definition: "Législation européenne visant -55% d'émissions de GES en 2030 vs 1990 et neutralité carbone en 2050.",
    category: "Politique énergétique UE"
  },
  {
    term: "Gazoducs alternatifs",
    definition: "Nouveaux projets pour acheminer hydrocarbures d'Asie centrale vers l'Europe : Turkménistan→Turquie→Europe et Kazakhstan prêt à exporter 20 Mt via la voie transcaspienne.",
    category: "Diversification énergétique"
  },
  {
    term: "Économie de guerre énergétique",
    definition: "Utilisation des ressources énergétiques comme arme économique, comme accusé la Chine par Lynas (Australie) en 2019 pour sa domination sur les terres rares.",
    category: "Géoéconomie énergétique"
  },
  {
    term: "Sobriété énergétique",
    definition: "Réduction volontaire de la consommation d'énergie. En Europe, demande d'électricité diminuée de 19% entre août 2022 et janvier 2023.",
    category: "Gestion de crise"
  },
  {
    term: "Justice climatique",
    definition: "Principe de responsabilité différenciée dans la transition énergétique, reconnaissant que les pays développés ont historiquement émis plus de GES.",
    category: "Transition énergétique"
  },
  {
    term: "Décarbonation",
    definition: "Processus de réduction des émissions de CO2 dans l'économie, nécessitant investissements massifs dans les technologies vertes et la restructuration industrielle.",
    category: "Transition énergétique"
  }
];

const getCategorizedEnergiesData = () => {
  const categories = [...new Set(geopoliticsEnergiesData.map(item => item.category))];
  return categories.map(category => ({
    category,
    items: geopoliticsEnergiesData.filter(item => item.category === category)
  }));
};

export const GeopoliticsFlashcardsEnergies: React.FC = () => {
  const { addFlashcardForReview, removeFlashcardFromReview, isFlashcardMarkedForReview, updateProgress } = useUserData();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [studiedCards, setStudiedCards] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string | 'all'>('all');
  const [isFlipped, setIsFlipped] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const categorizedData = getCategorizedEnergiesData();

  const filteredData = selectedCategory === 'all'
    ? geopoliticsEnergiesData
    : geopoliticsEnergiesData.filter(item => item.category === selectedCategory);

  const currentCard = filteredData[currentIndex];
  const totalCards = filteredData.length;

  const nextCard = () => {
    if (currentIndex < totalCards - 1) {
      setCurrentIndex(currentIndex + 1);
      setShowAnswer(false);
      setIsFlipped(false);
      setStudiedCards(prev => {
        const newSet = new Set([...prev, currentIndex]);
        updateProgress({
          totalFlashcardsStudied: newSet.size,
          subjectsStudied: ['Géopolitique - Énergies']
        });
        return newSet;
      });
    }
  };

  const prevCard = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
      setShowAnswer(false);
      setIsFlipped(false);
    }
  };

  const resetProgress = () => {
    setCurrentIndex(0);
    setShowAnswer(false);
    setIsFlipped(false);
    setStudiedCards(new Set());
  };

  const shuffleCards = () => {
    const shuffled = [...filteredData].sort(() => Math.random() - 0.5);
    setCurrentIndex(0);
    setShowAnswer(false);
    setIsFlipped(false);
    setStudiedCards(new Set());
  };

  const toggleAnswer = () => {
    // À la dernière carte, forcer l'affichage de la réponse et du message de fin
    if (currentIndex === totalCards - 1) {
      setShowAnswer(true);
      return;
    }
    setShowAnswer(!showAnswer);
  };

  const flipCard = () => {
    // Empêcher toute interaction à la fin
    if (currentIndex === totalCards - 1 && showAnswer) return;
    setIsFlipped(!isFlipped);
    setShowAnswer(false);
  };

  const markForReview = () => {
    // Empêcher toute interaction à la fin
    if (currentIndex === totalCards - 1 && showAnswer) return;
    const cardId = geopoliticsEnergiesData.findIndex(card => card.term === currentCard.term) + 200; // +200 pour différencier des autres flashcards
    const isMarked = isFlashcardMarkedForReview(cardId, 'english');

    if (isMarked) {
      removeFlashcardFromReview(cardId, 'english');
    } else {
      addFlashcardForReview({
        id: cardId,
        language: 'english',
        category: currentCard.category,
        french: currentCard.term,
        translation: currentCard.definition
      });
    }
  };

  const handleCategoryChange = (category: string | 'all') => {
    setSelectedCategory(category);
    setCurrentIndex(0);
    setShowAnswer(false);
    setIsFlipped(false);
    setStudiedCards(new Set());
  };

  // Gestion du swipe
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

  // Gestion du clavier - désactivée complètement à la fin
  const isAtEnd = currentIndex === totalCards - 1 && showAnswer;

  React.useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Désactiver complètement les raccourcis clavier quand on arrive à la fin
      if (isAtEnd) {
        return;
      }

      switch (event.key) {
        case 'ArrowRight':
          event.preventDefault();
          nextCard();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          prevCard();
          break;
        case ' ':
        case 'Enter':
          event.preventDefault();
          toggleAnswer();
          break;
        case 'r':
        case 'R':
          event.preventDefault();
          markForReview();
          break;
        case 'f':
        case 'F':
          event.preventDefault();
          flipCard();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [currentIndex, totalCards, showAnswer, isFlipped]);

  const progressPercentage = ((studiedCards.size + (showAnswer ? 1 : 0)) / totalCards) * 100;

  if (!currentCard) {
    return (
      <div className="max-w-4xl mx-auto p-4 text-center">
        <p className="text-gray-600">Aucune carte disponible pour cette catégorie.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto p-4">
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold flex items-center gap-2">
            <BookOpen className="h-6 w-6 text-blue-600" />
            Vocabulaire de la géopolitique des énergies
          </h2>
          <div className="flex gap-2">
            <Button onClick={flipCard} variant="outline" size="sm">
              <RotateCcw className="h-4 w-4 mr-2" />
              Retourner (F)
            </Button>
            <Button onClick={shuffleCards} variant="outline" size="sm">
              <Shuffle className="h-4 w-4 mr-2" />
              Mélanger
            </Button>
            <Button onClick={resetProgress} variant="outline" size="sm">
              <RotateCcw className="h-4 w-4 mr-2" />
              Recommencer
            </Button>
          </div>
        </div>

        {/* Filtres par catégorie */}
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-3">
            <Filter className="h-4 w-4 text-blue-600" />
            <span className="text-sm font-medium text-gray-700">Filtrer par catégorie :</span>
          </div>
          <div className="max-w-xs">
            <select
              value={selectedCategory}
              onChange={(e) => handleCategoryChange(e.target.value)}
              className="w-full px-3 py-2 border border-blue-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700"
            >
              <option value="all">Toutes les catégories ({geopoliticsEnergiesData.length})</option>
              {categorizedData.map(cat => (
                <option key={cat.category} value={cat.category}>
                  {cat.category} ({cat.items.length})
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4">
          <Badge variant="secondary" className="px-3 py-1 text-sm font-medium">
            {currentIndex + 1} / {totalCards}
          </Badge>
          {selectedCategory !== 'all' && (
            <Badge variant="outline" className="px-3 py-1 text-sm font-medium text-blue-600 border-blue-300">
              {selectedCategory}
            </Badge>
          )}
          <div className="flex-1 bg-gray-200 rounded-full h-3 overflow-hidden">
            <div
              className="bg-gradient-to-r from-blue-500 to-blue-600 h-3 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progressPercentage}%` }}
            />
          </div>
          <span className="text-sm font-medium text-muted-foreground min-w-[3rem] text-right">
            {Math.round(progressPercentage)}%
          </span>
        </div>
      </div>

      <Card className="min-h-[500px] relative shadow-lg border-2 border-blue-100" onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
        <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-t-lg">
          <CardTitle className="text-center text-lg text-blue-700">
            Géopolitique - Énergies
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col items-center justify-center space-y-8 p-12">
          <div className="text-center max-w-2xl">
            {/* Affichage selon le mode retourné ou non */}
            <div className="mb-8">
              <div className="text-3xl font-bold text-blue-600 mb-4 leading-relaxed">
                {isFlipped ? currentCard.definition : currentCard.term}
              </div>
              <Badge variant="outline" className="px-3 py-1 text-xs text-blue-600 border-blue-300">
                {currentCard.category}
              </Badge>
              {isFlashcardMarkedForReview(geopoliticsEnergiesData.findIndex(card => card.term === currentCard.term) + 200, 'english') && (
                <div className="mt-2">
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-300">
                    <Star className="h-3 w-3 mr-1" />
                    À revoir
                  </Badge>
                </div>
              )}
            </div>

            {/* Définition */}
            {showAnswer && (
              <div className="animate-in fade-in duration-500 mt-6">
                <div className="text-xl text-blue-600 leading-relaxed">
                  {isFlipped ? currentCard.term : currentCard.definition}
                </div>
              </div>
            )}
          </div>

          {/* Masquer les boutons d'interaction quand on arrive à la fin */}
          {!isAtEnd && (
            <div className="flex gap-3">
              <Button
                onClick={toggleAnswer}
                className="px-6 py-3 text-lg font-medium transition-all duration-200 hover:scale-105 bg-blue-600 hover:bg-blue-700"
                size="lg"
              >
                {showAnswer ? (
                  <>
                    <EyeOff className="mr-2 h-5 w-5" />
                    Cacher
                  </>
                ) : (
                  <>
                    <Eye className="mr-2 h-5 w-5" />
                    Voir ({isFlipped ? 'terme' : 'définition'})
                  </>
                )}
              </Button>

              <Button
                onClick={markForReview}
                variant={isFlashcardMarkedForReview(geopoliticsEnergiesData.findIndex(card => card.term === currentCard.term) + 200, 'english') ? "default" : "outline"}
                className={`px-6 py-3 text-lg font-medium transition-all duration-200 hover:scale-105 ${
                  isFlashcardMarkedForReview(geopoliticsEnergiesData.findIndex(card => card.term === currentCard.term) + 200, 'english')
                    ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                    : 'border-yellow-500 text-yellow-600 hover:bg-yellow-50'
                }`}
                size="lg"
              >
                <Star className="mr-2 h-5 w-5" />
                {isFlashcardMarkedForReview(geopoliticsEnergiesData.findIndex(card => card.term === currentCard.term) + 200, 'english') ? 'Retiré' : 'À revoir'} (R)
              </Button>
            </div>
          )}
        </CardContent>
      </Card>

      {/* Masquer les contrôles de navigation quand on arrive à la fin */}
      {!isAtEnd && (
        <div className="flex justify-between items-center mt-8">
          <Button
            onClick={prevCard}
            disabled={currentIndex === 0}
            variant="outline"
            className="px-6 py-2 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
          >
            <ChevronLeft className="h-4 w-4 mr-2" />
            Précédent (←)
          </Button>

          <div className="text-center">
            <div className="text-sm font-medium text-muted-foreground mb-1">
              {studiedCards.size} carte{studiedCards.size > 1 ? 's' : ''} étudiée{studiedCards.size > 1 ? 's' : ''}
            </div>
            <div className="text-xs text-gray-500 mt-2">
              Raccourcis: ← → (navigation) | Espace (révéler) | F (retourner) | R (marquer)
            </div>
          </div>

          <Button
            onClick={nextCard}
            disabled={currentIndex === totalCards - 1}
            variant="outline"
            className="px-6 py-2 transition-all duration-200 hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
          >
            Suivant (→)
            <ChevronRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      )}

      {currentIndex === totalCards - 1 && showAnswer && (
        <div className="text-center mt-8 p-6 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg border-2 border-green-200">
          <h3 className="text-xl font-bold mb-3 text-green-700">
            🎉 Fin des flashcards !
          </h3>
          <p className="text-muted-foreground mb-4">
            Vous avez terminé toutes les cartes de vocabulaire sur la géopolitique des énergies.
          </p>
          <p className="text-sm text-gray-600 mb-6">
            Voulez-vous recommencer ou réviser les cartes marquées pour révision ?
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button
              onClick={resetProgress}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              🔄 Recommencer
            </Button>
            {/* Révision désactivée pour cette version simplifiée */}
            {selectedCategory !== 'all' && (
              <Button
                onClick={() => handleCategoryChange('all')}
                variant="outline"
                className="border-green-600 text-green-600 hover:bg-green-50"
              >
                Voir toutes les catégories
              </Button>
            )}
          </div>
        </div>
      )}
    </div>
  );
};
