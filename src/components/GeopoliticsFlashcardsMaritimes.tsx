import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, RotateCcw, BookOpen, Eye, EyeOff, Filter, Shuffle, Star } from 'lucide-react';
import { useUserData } from '@/context/UserDataContext';

interface GeopoliticsMaritimesCard {
  term: string;
  definition: string;
  category: string;
}

const geopoliticsMaritimesData: GeopoliticsMaritimesCard[] = [
  {
    term: "Territorialisation des espaces maritimes",
    definition: "Processus d'appropriation croissante des espaces maritimes par les États, conduisant à multiplier les frontières maritimes et transformant ces espaces en territoires propices aux rivalités.",
    category: "Concept fondamental"
  },
  {
    term: "Mare Liberum",
    definition: "Doctrine juridique défendue par Hugo Grotius en 1609 affirmant que la mer est un espace de liberté ne pouvant être confisqué par quiconque.",
    category: "Conceptions juridiques"
  },
  {
    term: "Mare Clausum",
    definition: "Doctrine juridique défendue par John Selden en 1635 affirmant la souveraineté britannique sur les mers environnantes.",
    category: "Conceptions juridiques"
  },
  {
    term: "Plateau continental",
    definition: "Notion juridique originaire d'une déclaration du président Truman en 1945, codifiée par la convention de Genève de 1958, permettant l'exploitation des ressources du fond marin.",
    category: "Droit de la mer"
  },
  {
    term: "Convention de Montego Bay (1982)",
    definition: "Convention signée par 166 États introduisant le principe de Zone Économique Exclusive (ZEE) à 200 milles des lignes de base.",
    category: "Droit de la mer"
  },
  {
    term: "Zone Économique Exclusive (ZEE)",
    definition: "Zone maritime s'étendant jusqu'à 200 milles des lignes de base où l'État côtier exerce des droits souverains sur l'exploitation des ressources.",
    category: "Droit de la mer"
  },
  {
    term: "Maritimité",
    definition: "Façons de s'approprier la mer (relations économiques, culturelles entre les sociétés et la mer). Nouvelle maritimité fin XXe siècle : sports nautiques, tourisme maritime, reconquête urbaine des espaces portuaires.",
    category: "Économie maritime"
  },
  {
    term: "Maritimisation",
    definition: "Processus d'accroissement des échanges internationaux par voie maritime qui s'accélère depuis les années 1970, liée à la littoralisation et à la mondialisation.",
    category: "Économie maritime"
  },
  {
    term: "Ressources halieutiques",
    definition: "Ressources de pêche : 2 100 catégories d'espèces exploitées commercialement, assurant 10% des exportations agricoles mondiales et générant 200 millions d'emplois.",
    category: "Ressources maritimes"
  },
  {
    term: "Ressources énergétiques marines",
    definition: "20% des réserves de pétrole et 25% des réserves de gaz se trouvent en mer. L'offshore profond représenterait 7% des réserves mondiales selon Total.",
    category: "Ressources maritimes"
  },
  {
    term: "Énergies marines renouvelables",
    definition: "Potentiel de 20 à 40 000 TWh/an (1 à 2 fois la consommation annuelle mondiale d'électricité) : éoliennes offshore, hydroliennes.",
    category: "Ressources maritimes"
  },
  {
    term: "OMI (Organisation Maritime Internationale)",
    definition: "Organisation regroupant 160 pays chargée de la régulation du commerce maritime dans un cadre libéral.",
    category: "Gouvernance"
  },
  {
    term: "Thalassocratie",
    definition: "Domination maritime, illustrée par la suprématie britannique renforcée par le 'two-power standard' en 1889.",
    category: "Puissance navale"
  },
  {
    term: "Two-power standard",
    definition: "Doctrine britannique de 1889 exigeant que la Royal Navy soit supérieure à la somme des deux plus grandes marines étrangères.",
    category: "Puissance navale"
  },
  {
    term: "Seapower vs Landpower",
    definition: "Théorie de Mackinder suggérant un possible déclin du pouvoir maritime face aux puissances terrestres (chemins de fer), mais domination de l'US Navy après 1945.",
    category: "Puissance navale"
  },
  {
    term: "Mahan (doctrine)",
    definition: "Théoricien américain affirmant la nécessité de la suprématie maritime pour les États-Unis.",
    category: "Puissance navale"
  },
  {
    term: "Transport maritime",
    definition: "Circulation marchande : 2,5 milliards de tonnes en 1970 → 8,4 milliards de tonnes en 2012. Flottes de commerce : 49 000 navires pour 1,6 milliard de tonnes.",
    category: "Économie maritime"
  },
  {
    term: "Équivalent Vingt Pieds (EVP)",
    definition: "Unité de mesure des conteneurs inventés par McLean en 1956, permettant de réduire les temps de rupture de charge.",
    category: "Transport maritime"
  },
  {
    term: "Eco-Ships",
    definition: "Navires de nouvelle génération plus sobres écologiquement. Exemple : Classe Triple E de Maersk (-37% de fioul lourd et -50% de GES).",
    category: "Environnement"
  },
  {
    term: "Porte-avions",
    definition: "Atout majeur des grandes puissances maritimes. US Navy : 11 porte-avions. Chine : Liaoning (2017), Shandong, Fujian (2022).",
    category: "Flottes militaires"
  },
  {
    term: "Sous-marins nucléaires",
    definition: "SNA (attaque) : USA 56, Russie 17, Chine 8, Royaume-Uni 6, France 6. SNLE (dissuasion) : USA 14, Russie 10, Chine 5, Royaume-Uni 4, France 4, Inde 1.",
    category: "Flottes militaires"
  },
  {
    term: "Frontières chaudes",
    definition: "Selon Michel Foucher, délimitations maritimes pouvant former des zones de conflit. Georges Labrecque recense 450 zones de chevauchement.",
    category: "Conflits"
  },
  {
    term: "Accord ONU 2023",
    definition: "Accord historique du 4 mars 2023 sur la conservation et l'utilisation durable de la biodiversité marine des zones ne relevant pas de la juridiction nationale (haute mer).",
    category: "Gouvernance"
  },
  {
    term: "Résolution ONU 2017",
    definition: "Résolution visant à combler le vide juridique de Montego Bay concernant la haute mer, objectif de préserver 45% de la surface du globe comme res nullius.",
    category: "Gouvernance"
  }
];

const getCategorizedMaritimesData = () => {
  const categories = [...new Set(geopoliticsMaritimesData.map(item => item.category))];
  return categories.map(category => ({
    category,
    items: geopoliticsMaritimesData.filter(item => item.category === category)
  }));
};

export const GeopoliticsFlashcardsMaritimes: React.FC = () => {
  const { addFlashcardForReview, removeFlashcardFromReview, isFlashcardMarkedForReview, updateProgress } = useUserData();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [studiedCards, setStudiedCards] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string | 'all'>('all');
  const [isFlipped, setIsFlipped] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const categorizedData = getCategorizedMaritimesData();

  const filteredData = selectedCategory === 'all'
    ? geopoliticsMaritimesData
    : geopoliticsMaritimesData.filter(item => item.category === selectedCategory);

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
          subjectsStudied: ['Géopolitique - Espaces maritimes']
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
    // Pour mélanger, on devrait modifier l'ordre des données filtrées, mais pour simplifier on remet juste à zéro
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
    if (isAtEnd) return;
    setIsFlipped(!isFlipped);
    setShowAnswer(false);
  };

  const markForReview = () => {
    // Empêcher toute interaction à la fin
    if (isAtEnd) return;
    const cardId = geopoliticsMaritimesData.findIndex(card => card.term === currentCard.term) + 1;
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
            Vocabulaire des espaces maritimes
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
              <option value="all">Toutes les catégories ({geopoliticsMaritimesData.length})</option>
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
            Géopolitique - Espaces maritimes
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
              {isFlashcardMarkedForReview(geopoliticsMaritimesData.findIndex(card => card.term === currentCard.term) + 1, 'english') && (
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
                variant={isFlashcardMarkedForReview(geopoliticsMaritimesData.findIndex(card => card.term === currentCard.term) + 1, 'english') ? "default" : "outline"}
                className={`px-6 py-3 text-lg font-medium transition-all duration-200 hover:scale-105 ${
                  isFlashcardMarkedForReview(geopoliticsMaritimesData.findIndex(card => card.term === currentCard.term) + 1, 'english')
                    ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                    : 'border-yellow-500 text-yellow-600 hover:bg-yellow-50'
                }`}
                size="lg"
              >
                <Star className="mr-2 h-5 w-5" />
                {isFlashcardMarkedForReview(geopoliticsMaritimesData.findIndex(card => card.term === currentCard.term) + 1, 'english') ? 'Retiré' : 'À revoir'} (R)
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
            Vous avez terminé toutes les cartes de vocabulaire {selectedCategory !== 'all' ? `de la catégorie "${selectedCategory}"` : ''} sur les espaces maritimes.
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
