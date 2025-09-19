import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, RotateCcw, BookOpen, Eye, EyeOff, Filter, Shuffle, Star } from 'lucide-react';
import { useUserData } from '@/context/UserDataContext';

interface GeopoliticsMaritimesTensionsCard {
  term: string;
  definition: string;
  category: string;
}

const geopoliticsMaritimesTensionsData: GeopoliticsMaritimesTensionsCard[] = [
  {
    term: "Hard power",
    definition: "Selon J. Nye : pouvoir politique, puissance militaire, force économique. Attribut classique de la puissance nationale dans les espaces maritimes.",
    category: "Puissance maritime"
  },
  {
    term: "Thalassocratie",
    definition: "Domination maritime, illustrée par la suprématie britannique avec une large flotte militaire et le 'two power standard'.",
    category: "Puissance maritime"
  },
  {
    term: "Two power standard",
    definition: "Doctrine britannique exigeant que la Royal Navy soit supérieure à la somme des deux plus grandes marines étrangères.",
    category: "Puissance maritime"
  },
  {
    term: "Guerre du Pacifique (1879-1884)",
    definition: "Conflit entre Chili et Pérou/Bolivie. Chili vainqueur, Bolivie privée du littoral d'Atacama, devenant un pays enclavé.",
    category: "Conflits historiques"
  },
  {
    term: "Guerres de la morue",
    definition: "Conflits halieutiques entre Islande et Royaume-Uni (1958-1976) pour l'exploitation des ressources de pêche en Atlantique Nord.",
    category: "Conflits halieutiques"
  },
  {
    term: "Bataille de l'Atlantique",
    definition: "Conflit naval majeur de la Seconde Guerre mondiale entre Alliés et forces de l'Axe, impliquant notamment les U-Boat allemands.",
    category: "Conflits mondiaux"
  },
  {
    term: "Bataille du Pacifique",
    definition: "Théâtre majeur de la Seconde Guerre mondiale opposant États-Unis et Japon après l'attaque de Pearl Harbor (1941).",
    category: "Conflits mondiaux"
  },
  {
    term: "Guerre des Malouines (1982)",
    definition: "Conflit armé entre Royaume-Uni et Argentine pour le contrôle des îles Malouines/Falkland dans l'Atlantique Sud.",
    category: "Conflits contemporains"
  },
  {
    term: "Pavillons de complaisance",
    definition: "Immatriculation de navires sous des drapeaux étrangers (Panama, Îles Marshall) avec des législations de 'dumping' pour attirer les armateurs.",
    category: "Mondialisation maritime"
  },
  {
    term: "Transport maritime mondial",
    definition: "Environ 80% du commerce mondial transite par voie maritime, rôle déterminant dans la mondialisation économique.",
    category: "Mondialisation maritime"
  },
  {
    term: "Convention de Montego Bay (1982)",
    definition: "Convention internationale établissant la Zone Économique Exclusive (ZEE) donnant des droits d'exploitation sur 200 milles marins aux États côtiers.",
    category: "Droit maritime"
  },
  {
    term: "Zone Économique Exclusive (ZEE)",
    definition: "Espace maritime de 200 milles à partir des lignes de base côtières où l'État exerce des droits souverains d'exploitation des ressources.",
    category: "Droit maritime"
  },
  {
    term: "Géopolitique de la Méditerranée",
    definition: "Selon Yves Lacoste : la Méditerranée comme 'carrefour des civilisations' et 'enjeu stratégique majeur' dans les relations internationales.",
    category: "Analyse géopolitique"
  },
  {
    term: "Peak oil",
    definition: "Point où les découvertes de pétrole ne compensent plus l'exploitation (Rapport Meadows, 1972). Accélère la compétition pour les ressources maritimes.",
    category: "Ressources énergétiques"
  },
  {
    term: "Militarisation des espaces maritimes",
    definition: "Déploiement croissant de bases militaires (Djibouti, Diego Garcia) et acquisition de porte-avions pour sécuriser routes commerciales et approvisionnements.",
    category: "Sécurité maritime"
  },
  {
    term: "Spratleys et Paracels",
    definition: "Archipels disputés en Mer de Chine méridionale, objets de revendications territoriales chinoises, vietnamiennes et philippines pour leurs hydrocarbures et position stratégique.",
    category: "Conflits territoriaux"
  },
  {
    term: "Pollution maritime",
    definition: "Problématiques environnementales aggravées dans les embouchures (Gange, Yang-Tsé) nécessitant des révisions des politiques publiques environnementales.",
    category: "Enjeux environnementaux"
  },
  {
    term: "Grands canaux maritimes",
    definition: "Canaux de Suez (1869) et Panama (1914) qui transforment la géopolitique en permettant aux pays enclavés de reculer en influence et aux autres d'accéder aux échanges mondiaux.",
    category: "Infrastructures stratégiques"
  },
  {
    term: "Course aux armements maritimes",
    definition: "Acquisition et modernisation de porte-avions (comme le Charles de Gaulle français) pour maintenir la puissance navale face à la compétition internationale.",
    category: "Armements modernes"
  },
  {
    term: "Dynamiques de conflictualité maritime",
    definition: "Deux dynamiques principales : montée des revendications territoriales (Spratleys) et aggravation des problématiques environnementales (pollution).",
    category: "Prospective géopolitique"
  }
];

const getCategorizedMaritimesTensionsData = () => {
  const categories = [...new Set(geopoliticsMaritimesTensionsData.map(item => item.category))];
  return categories.map(category => ({
    category,
    items: geopoliticsMaritimesTensionsData.filter(item => item.category === category)
  }));
};

export const GeopoliticsFlashcardsMaritimesTensions: React.FC = () => {
  const { addFlashcardForReview, removeFlashcardFromReview, isFlashcardMarkedForReview, updateProgress } = useUserData();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [studiedCards, setStudiedCards] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string | 'all'>('all');
  const [isFlipped, setIsFlipped] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const categorizedData = getCategorizedMaritimesTensionsData();

  const filteredData = selectedCategory === 'all'
    ? geopoliticsMaritimesTensionsData
    : geopoliticsMaritimesTensionsData.filter(item => item.category === selectedCategory);

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
          subjectsStudied: ['Géopolitique - Tensions maritimes']
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
    const cardId = geopoliticsMaritimesTensionsData.findIndex(card => card.term === currentCard.term) + 100; // +100 pour différencier des autres flashcards
    const isMarked = isFlashcardMarkedForReview(cardId, 'geopolitics-maritimes-tensions');

    if (isMarked) {
      removeFlashcardFromReview(cardId, 'geopolitics-maritimes-tensions');
    } else {
      addFlashcardForReview({
        id: cardId,
        language: 'geopolitics-maritimes-tensions',
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
            Vocabulaire des tensions maritimes
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
              <option value="all">Toutes les catégories ({geopoliticsMaritimesTensionsData.length})</option>
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
            Géopolitique - Tensions et conflits maritimes
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
              {isFlashcardMarkedForReview(geopoliticsMaritimesTensionsData.findIndex(card => card.term === currentCard.term) + 100, 'geopolitics-maritimes-tensions') && (
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
                variant={isFlashcardMarkedForReview(geopoliticsMaritimesTensionsData.findIndex(card => card.term === currentCard.term) + 100, 'geopolitics-maritimes-tensions') ? "default" : "outline"}
                className={`px-6 py-3 text-lg font-medium transition-all duration-200 hover:scale-105 ${
                  isFlashcardMarkedForReview(geopoliticsMaritimesTensionsData.findIndex(card => card.term === currentCard.term) + 100, 'geopolitics-maritimes-tensions')
                    ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                    : 'border-yellow-500 text-yellow-600 hover:bg-yellow-50'
                }`}
                size="lg"
              >
                <Star className="mr-2 h-5 w-5" />
                {isFlashcardMarkedForReview(geopoliticsMaritimesTensionsData.findIndex(card => card.term === currentCard.term) + 100, 'geopolitics-maritimes-tensions') ? 'Retiré' : 'À revoir'} (R)
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
            Vous avez terminé toutes les cartes de vocabulaire sur les tensions et conflits maritimes.
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
            {reviewCards.size > 0 && (
              <Button
                onClick={toggleReviewMode}
                className="bg-blue-500 hover:bg-blue-600 text-white"
              >
                📖 Réviser ({reviewCards.size})
              </Button>
            )}
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
