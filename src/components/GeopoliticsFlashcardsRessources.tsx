import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, RotateCcw, BookOpen, Eye, EyeOff, Filter, Shuffle, Star } from 'lucide-react';
import { useUserData } from '@/context/UserDataContext';

interface GeopoliticsRessourcesCard {
  term: string;
  definition: string;
  category: string;
}

const geopoliticsRessourcesData: GeopoliticsRessourcesCard[] = [
  {
    term: "Ressources stratégiques",
    definition: "Ressources essentielles au développement économique et à la puissance des États : productions agricoles, minerais (or, argent, étain, zinc), métaux rares (cobalt, lithium, terres rares), ressources énergétiques (charbon, hydrocarbures), eau.",
    category: "Typologie"
  },
  {
    term: "Terres rares",
    definition: "17 éléments chimiques essentiels aux technologies modernes (éoliennes, véhicules électriques, panneaux solaires). La Chine contrôle 60% de la production mondiale et 98% du raffinage.",
    category: "Métaux stratégiques"
  },
  {
    term: "Malédiction des ressources",
    definition: "Paradoxe où les pays riches en ressources naturelles connaissent souvent corruption, conflits armés et instabilité économique due aux rentes pétrolières/gazières.",
    category: "Géopolitique des ressources"
  },
  {
    term: "Rivalités pour les ressources",
    definition: "Conflits à toutes les échelles pour le contrôle des ressources : guerres locales, contrôle de populations, outils de négociation. Les ressources utilisées comme leviers d'indépendance ou instruments de conflit.",
    category: "Conflits et ressources"
  },
  {
    term: "Coopération dans les ressources",
    definition: "Aucun acteur n'étant autosuffisant, les interdépendances économiques favorisent la coopération malgré les tensions. Forums et associations régionales stabilisent marchés et flux.",
    category: "Coopération"
  },
  {
    term: "Répartition inégale des ressources",
    definition: "Les ressources sont inégalement réparties géographiquement. Approche historique : tournant avec les révolutions industrielles et conquêtes coloniales.",
    category: "Caractéristiques"
  },
  {
    term: "Pressions accrues sur les ressources",
    definition: "Besoins en hausse dus à l'industrialisation, émergences et croissance démographique. Défi environnemental (Rapport Meadows, 1972) et risques d'épuisement.",
    category: "Tendances contemporaines"
  },
  {
    term: "Interdépendances économiques",
    definition: "Économies imbriquées nécessitent des coopérations sur les flux et la sécurité d'approvisionnement. Instabilités et conflits perturbent l'approvisionnement et l'exploitation.",
    category: "Économie mondiale"
  },
  {
    term: "3e révolution industrielle",
    definition: "Selon Jeremy Rifkin : transition énergétique rendant stratégiques de nouveaux matériaux, rebattant les hiérarchies géopolitiques mondiales.",
    category: "Transition énergétique"
  },
  {
    term: "Guerre des métaux rares",
    definition: "Selon Guillaume Pitron (2018) : prépondérance chinoise sur les gisements et le raffinage crée des tensions géopolitiques accrues pour l'appropriation des ressources.",
    category: "Géoéconomie"
  },
  {
    term: "Transition énergétique verte",
    definition: "La décarbonation exige extraction plus intense de ressources, avec impacts environnementaux potentiellement supérieurs aux énergies fossiles.",
    category: "Enjeux environnementaux"
  },
  {
    term: "Climat et ressources",
    definition: "Changements climatiques, épuisement et démographie renforcent simultanément les risques de conflits et les besoins de coopération internationale.",
    category: "Facteurs globaux"
  },
  {
    term: "Bassin permien",
    definition: "Gisement majeur de schistes aux États-Unis (Texas/Nouveau-Mexique). Collusions politico-industrielles, remodelage économique et environnemental (fracturation hydraulique, risques sismiques, pollution).",
    category: "Études de cas"
  },
  {
    term: "Orpaillage en Guyane",
    definition: "Exploitation illégale représentant 9 000 orpailleurs. Déboisement, pollutions (mercure), trafics clandestins. Production légale en baisse malgré protections environnementales.",
    category: "Études de cas"
  },
  {
    term: "Front pionnier égyptien",
    definition: "Projet agricole pour maîtriser foncier et eau face à la croissance démographique (104 M habitants en 2021). Villages ex nihilo, irrigation de précision, objectif de diversification agricole.",
    category: "Études de cas"
  },
  {
    term: "Syndrome hollandais",
    definition: "Maladie économique où la rente des ressources naturelles (pétrole, gaz) affaiblit les autres secteurs économiques et crée des dépendances structurelles (Venezuela, Angola).",
    category: "Impacts économiques"
  },
  {
    term: "Ressources et développement",
    definition: "Les ressources peuvent être des freins au développement en raison de la volatilité des prix, de la corruption et de la dépendance aux marchés internationaux.",
    category: "Économie du développement"
  },
  {
    term: "Sécurité énergétique",
    definition: "Capacité d'un État à assurer son approvisionnement énergétique de manière stable et prévisible, face aux risques géopolitiques et aux fluctuations des marchés.",
    category: "Stratégies nationales"
  }
];

const getCategorizedRessourcesData = () => {
  const categories = [...new Set(geopoliticsRessourcesData.map(item => item.category))];
  return categories.map(category => ({
    category,
    items: geopoliticsRessourcesData.filter(item => item.category === category)
  }));
};

export const GeopoliticsFlashcardsRessources: React.FC = () => {
  const { addFlashcardForReview, removeFlashcardFromReview, isFlashcardMarkedForReview, updateProgress } = useUserData();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [studiedCards, setStudiedCards] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string | 'all'>('all');
  const [isFlipped, setIsFlipped] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const categorizedData = getCategorizedRessourcesData();

  const filteredData = selectedCategory === 'all'
    ? geopoliticsRessourcesData
    : geopoliticsRessourcesData.filter(item => item.category === selectedCategory);

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
          subjectsStudied: ['Géopolitique - Ressources stratégiques']
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
    const cardId = geopoliticsRessourcesData.findIndex(card => card.term === currentCard.term) + 700; // +700 pour différencier des autres flashcards
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
            Vocabulaire des ressources stratégiques
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
              <option value="all">Toutes les catégories ({geopoliticsRessourcesData.length})</option>
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
            Géopolitique - Ressources stratégiques
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
              {isFlashcardMarkedForReview(geopoliticsRessourcesData.findIndex(card => card.term === currentCard.term) + 700, 'english') && (
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
                variant={isFlashcardMarkedForReview(geopoliticsRessourcesData.findIndex(card => card.term === currentCard.term) + 700, 'english') ? "default" : "outline"}
                className={`px-6 py-3 text-lg font-medium transition-all duration-200 hover:scale-105 ${
                  isFlashcardMarkedForReview(geopoliticsRessourcesData.findIndex(card => card.term === currentCard.term) + 700, 'english')
                    ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                    : 'border-yellow-500 text-yellow-600 hover:bg-yellow-50'
                }`}
                size="lg"
              >
                <Star className="mr-2 h-5 w-5" />
                {isFlashcardMarkedForReview(geopoliticsRessourcesData.findIndex(card => card.term === currentCard.term) + 700, 'english') ? 'Retiré' : 'À revoir'} (R)
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
            Vous avez terminé toutes les cartes de vocabulaire sur les ressources stratégiques.
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
