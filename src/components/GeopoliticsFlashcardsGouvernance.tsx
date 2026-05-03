import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, RotateCcw, BookOpen, Eye, EyeOff, Filter, Shuffle, Star } from 'lucide-react';
import { useUserData } from '@/context/UserDataContext';

interface GeopoliticsGouvernanceCard {
  term: string;
  definition: string;
  category: string;
}

const geopoliticsGouvernanceData: GeopoliticsGouvernanceCard[] = [
  {
    term: "Gouvernance mondiale",
    definition: "Ensemble des règles qui permettent d'assurer le bon fonctionnement d'un État, d'une institution ou d'une organisation à l'échelle planétaire. Volonté d'ordonner le monde dans un schéma supranational.",
    category: "Définitions"
  },
  {
    term: "Diplomatie de connivence",
    definition: "Selon Bertrand Badie : 'diplomatie de clubs' (G8, G20) risquant d'établir une oligarchie mondiale avec une 'noblesse occidentale' utilisant la démocratie comme critère de distinction.",
    category: "Analyse critique"
  },
  {
    term: "Égoïsmes sacrés",
    definition: "Selon Bertrand Badie : 'égoïsmes sacrés' qui menacent la gouvernance mondiale, dans son ouvrage 'Le retournement du monde'.",
    category: "Analyse critique"
  },
  {
    term: "Conseil de sécurité (ONU)",
    definition: "Organe exécutif de l'ONU avec droit de veto pour les 5 membres permanents. Aucun acteur africain, Brésil non permanent, candidats : Japon, Allemagne, Russie écartée.",
    category: "Limites institutionnelles"
  },
  {
    term: "FMI et Banque mondiale",
    definition: "Institutions de Bretton Woods (1944). Vécues comme instruments de contrainte avec des coûts sociaux (Grèce, troïka, Amérique latine).",
    category: "Limites institutionnelles"
  },
  {
    term: "Guerre d'Irak (1990-1991)",
    definition: "Succès de la gouvernance : coalition internationale contre Saddam Hussein sous l'égide de l'ONU.",
    category: "Réussites"
  },
  {
    term: "OMC",
    definition: "Organisation Mondiale du Commerce dotée de l'ORD (Organisme de Règlement des Différends). Adhésion Chine (2001) et Russie (2012).",
    category: "Réussites"
  },
  {
    term: "OMS et Covax",
    definition: "Dispositif Covax et devoir de solidarité internationale pendant la crise COVID-19.",
    category: "Réussites"
  },
  {
    term: "G7 - Taxe minimale",
    definition: "Accord historique sur la taxation minimale de 15% pour les multinationales.",
    category: "Réussites"
  },
  {
    term: "Bretton Woods (1944)",
    definition: "Accords monétaires et financiers : création de la BIRD (Banque mondiale) et du FMI.",
    category: "Architecture historique"
  },
  {
    term: "GATT puis OMC",
    definition: "Accord Général sur les Tarifs Douaniers et le Commerce (1947) devenu Organisation Mondiale du Commerce (1995).",
    category: "Architecture historique"
  },
  {
    term: "ONU et OTAN",
    definition: "Charte de San Francisco (1945) pour l'ONU, traité de l'Atlantique Nord (1949) pour l'OTAN.",
    category: "Architecture historique"
  },
  {
    term: "Accords environnementaux",
    definition: "Rio (1992), Kyoto (2005), Paris (2015/COP21), Initiative PPTE (1996), Objectifs du Millénaire/Objectifs de Développement Durable (ONU, 2000).",
    category: "Environnement et social"
  },
  {
    term: "Club de Paris",
    definition: "Institution financière informelle chargée de la restructuration de la dette des pays en développement.",
    category: "Architecture historique"
  },
  {
    term: "Multipolarité vs Unipolarité",
    definition: "Évolution du monde de l'unipolarité américaine (1991) vers la multipolarité voire apolarité, complexifiant les rapports de force mondiaux.",
    category: "Contextes géopolitiques"
  },
  {
    term: "Mercosur",
    definition: "Zone de libre-échange régionale en Amérique latine ayant acquis une certaine maturité institutionnelle.",
    category: "Gouvernance régionale"
  },
  {
    term: "Union Européenne",
    definition: "Exemple de gouvernance régionale mature avec des institutions supranationales développées.",
    category: "Gouvernance régionale"
  },
  {
    term: "Paix perpétuelle",
    definition: "Idée philosophique de Kant (XVIIIe siècle) sur l'établissement d'une paix durable entre nations.",
    category: "Origines intellectuelles"
  },
  {
    term: "Société des Nations (SDN)",
    definition: "Première tentative d'organisation internationale (1919), inaboutie en raison de l'absence des États-Unis et de l'échec face à l'agression japonaise en Mandchourie.",
    category: "Origines institutionnelles"
  },
  {
    term: "Kofi Annan",
    definition: "Échec du Secrétaire général de l'ONU dans la réunification de Chypre malgré ses efforts diplomatiques.",
    category: "Limites institutionnelles"
  }
];

const getCategorizedGouvernanceData = () => {
  const categories = [...new Set(geopoliticsGouvernanceData.map(item => item.category))];
  return categories.map(category => ({
    category,
    items: geopoliticsGouvernanceData.filter(item => item.category === category)
  }));
};

export const GeopoliticsFlashcardsGouvernance: React.FC = () => {
  const { addFlashcardForReview, removeFlashcardFromReview, isFlashcardMarkedForReview, updateProgress } = useUserData();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [studiedCards, setStudiedCards] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string | 'all'>('all');
  const [isFlipped, setIsFlipped] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const categorizedData = getCategorizedGouvernanceData();

  const filteredData = selectedCategory === 'all'
    ? geopoliticsGouvernanceData
    : geopoliticsGouvernanceData.filter(item => item.category === selectedCategory);

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
          subjectsStudied: ['Géopolitique - Gouvernance mondiale']
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
    const cardId = geopoliticsGouvernanceData.findIndex(card => card.term === currentCard.term) + 300; // +300 pour différencier des autres flashcards
    const isMarked = isFlashcardMarkedForReview(cardId, 'english');

    if (isMarked) {
      removeFlashcardFromReview(cardId, 'geopolitics-gouvernance' as any);
    } else {
      addFlashcardForReview({
        id: cardId,
        language: 'geopolitics-gouvernance' as any,
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
            Vocabulaire de la gouvernance mondiale
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
              <option value="all">Toutes les catégories ({geopoliticsGouvernanceData.length})</option>
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
            Géopolitique - Gouvernance mondiale
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
              {isFlashcardMarkedForReview(geopoliticsGouvernanceData.findIndex(card => card.term === currentCard.term) + 300, 'english') && (
                <div className="mt-2">
                  <Badge variant="secondary" className="bg-yellow-100 text-yellow-800 border-yellow-300">
                    <Star className="h-3 w-3 mr-1" />
                    À revoir
                  </Badge>
                </div>
              )}
...
              <Button
                onClick={markForReview}
                variant={isFlashcardMarkedForReview(geopoliticsGouvernanceData.findIndex(card => card.term === currentCard.term) + 300, 'english') ? "default" : "outline"}
                className={`px-6 py-3 text-lg font-medium transition-all duration-200 hover:scale-105 ${
                  isFlashcardMarkedForReview(geopoliticsGouvernanceData.findIndex(card => card.term === currentCard.term) + 300, 'english')
                    ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                    : 'border-yellow-500 text-yellow-600 hover:bg-yellow-50'
                }`}
                size="lg"
              >
                <Star className="mr-2 h-5 w-5" />
                {isFlashcardMarkedForReview(geopoliticsGouvernanceData.findIndex(card => card.term === currentCard.term) + 300, 'english') ? 'Retiré' : 'À revoir'} (R)
              </Button>
            </div>
            </div>
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
            Vous avez terminé toutes les cartes de vocabulaire sur la gouvernance mondiale.
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
