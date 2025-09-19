import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, RotateCcw, BookOpen, Eye, EyeOff, Filter, Shuffle, Star } from 'lucide-react';
import { useUserData } from '@/context/UserDataContext';

interface GeopoliticsMigrationsCard {
  term: string;
  definition: string;
  category: string;
}

const geopoliticsMigrationsData: GeopoliticsMigrationsCard[] = [
  {
    term: "Migration internationale",
    definition: "Déplacement de populations entre pays, distincte de la migration interne au sein d'un même pays. Environ 280 millions de migrants internationaux en 2022, soit 3,5% de la population mondiale.",
    category: "Définitions"
  },
  {
    term: "Dynamiques push/pull",
    definition: "Facteurs repoussoirs (push : guerres, pauvreté, catastrophes) et facteurs attracteurs (pull : emplois, sécurité, opportunités) qui déterminent les flux migratoires.",
    category: "Mécanismes"
  },
  {
    term: "Crise migratoire de 2015",
    definition: "Arrivée incontrôlée d'environ 1,5 million de migrants du Moyen-Orient et d'Afrique subsaharienne en Europe, révélant l'incapacité des États membres de l'UE à adopter une réponse commune.",
    category: "Événements majeurs"
  },
  {
    term: "Afrique subsaharienne",
    definition: "Zone où les migrations économiques sont nombreuses, avec plus de 80% de flux intra-africains vers des pays comme l'Afrique du Sud, le Nigeria et le Kenya.",
    category: "Zones migratoires"
  },
  {
    term: "Conflits et migrations",
    definition: "Printemps arabe (2011) et guerres civiles (Syrie avec 8 millions de déplacés) génèrent d'importants flux migratoires forcés vers l'Europe et les pays voisins.",
    category: "Causes politiques"
  },
  {
    term: "Amérique latine",
    definition: "Migrations issues de violences (Honduras, Venezuela). Crise au Venezuela (2019) a généré 4 millions de migrants, principalement vers la Colombie.",
    category: "Zones migratoires"
  },
  {
    term: "Mondialisation et migrations",
    definition: "Accroissement des mobilités humaines dû à la désactivation relative des frontières et à l'accélération des échanges économiques mondiaux.",
    category: "Facteurs globaux"
  },
  {
    term: "Chine et migrations",
    definition: "Système Hukou assoupli avec l'ouverture économique, générant plus de 200 millions de 'mingongs' (travailleurs migrants) vers les zones économiques spéciales.",
    category: "Migrations internes"
  },
  {
    term: "Gouvernance migratoire",
    definition: "Ensemble des politiques et institutions régulant les flux migratoires. L'UE et la Turquie ont établi un Pacte (2016) avec financement européen contre le contrôle des migrants.",
    category: "Politiques"
  },
  {
    term: "Populismes et migrations",
    definition: "Montée des mouvements populistes (USA 2016, Brexit, AfD, Italie) souvent liée à la peur de l'immigration et à la surestimation des parts de migrants dans la population.",
    category: "Réactions politiques"
  },
  {
    term: "Effets contrastés des migrations",
    definition: "Opportunités économiques (Erasmus avec 12 millions de participants), démographiques (remplacement en Allemagne), culturelles, mais aussi rejets xénophobes et populistes.",
    category: "Impacts"
  },
  {
    term: "Programme Erasmus",
    definition: "Depuis 1987, plus de 12 millions de participants, budget de 26 milliards d'euros, ayant généré environ 1 million de 'bébés Erasmus' (enfants nés d'unions transnationales).",
    category: "Politiques européennes"
  },
  {
    term: "Diaspora indienne",
    definition: "Environ 30 millions de personnes dans 130 pays, représentant un soft power et un lobbying efficace, avec la communauté indienne aux USA comme plus haut revenu ethnique.",
    category: "Diasporas"
  },
  {
    term: "Pacte de Marrakech",
    definition: "Adopté par 160 pays en 2018, vise des 'migrations sûres, ordonnées et régulières' mais reste non contraignant et renforce seulement l'action de l'UNHCR.",
    category: "Gouvernance internationale"
  },
  {
    term: "Harraga",
    definition: "Terme maghrébin désignant les migrants clandestins traversant la Méditerranée. Entre 2010 et 2020, environ 20 000 morts en Méditerranée.",
    category: "Migrations clandestines"
  },
  {
    term: "Passeports inégaux",
    definition: "Hiérarchie mondiale des passeports : Japon et Singapour offrent accès à 192 pays sans visa, l'Afghanistan seulement à 26 pays, selon le Henley Passport Index 2022.",
    category: "Liberté de circulation"
  },
  {
    term: "Justice climatique",
    definition: "Principe de responsabilité différenciée dans les migrations climatiques, reconnaissant que les pays développés ont historiquement émis plus de GES.",
    category: "Migrations environnementales"
  },
  {
    term: "Banque mondiale",
    definition: "Prévoit 216 millions de migrants climatiques d'ici 2050, avec des effets sur les littoraux (élévation de 20 cm du niveau marin pouvant déplacer 200 millions de personnes).",
    category: "Projections climatiques"
  },
  {
    term: "Démographie du Sahel",
    definition: "Région à forte croissance démographique risquant d'accroître les flux migratoires, avec un 'dividende démographique' conditionné aux capacités d'éducation et d'emploi.",
    category: "Facteurs démographiques"
  },
  {
    term: "Flux migratoires contemporains",
    definition: "Combinaison de facteurs économiques, politiques, environnementaux et démographiques dans un contexte de mondialisation accélérée.",
    category: "Tendances actuelles"
  }
];

const getCategorizedMigrationsData = () => {
  const categories = [...new Set(geopoliticsMigrationsData.map(item => item.category))];
  return categories.map(category => ({
    category,
    items: geopoliticsMigrationsData.filter(item => item.category === category)
  }));
};

export const GeopoliticsFlashcardsMigrations: React.FC = () => {
  const { addFlashcardForReview, removeFlashcardFromReview, isFlashcardMarkedForReview, updateProgress } = useUserData();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [studiedCards, setStudiedCards] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string | 'all'>('all');
  const [isFlipped, setIsFlipped] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const categorizedData = getCategorizedMigrationsData();

  const filteredData = selectedCategory === 'all'
    ? geopoliticsMigrationsData
    : geopoliticsMigrationsData.filter(item => item.category === selectedCategory);

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
          subjectsStudied: ['Géopolitique - Migrations']
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
    const cardId = geopoliticsMigrationsData.findIndex(card => card.term === currentCard.term) + 500; // +500 pour différencier des autres flashcards
    const isMarked = isFlashcardMarkedForReview(cardId, 'geopolitics-migrations');

    if (isMarked) {
      removeFlashcardFromReview(cardId, 'geopolitics-migrations');
    } else {
      addFlashcardForReview({
        id: cardId,
        language: 'geopolitics-migrations',
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
            Vocabulaire des migrations
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
              <option value="all">Toutes les catégories ({geopoliticsMigrationsData.length})</option>
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
            Géopolitique - Les migrations
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
              {isFlashcardMarkedForReview(geopoliticsMigrationsData.findIndex(card => card.term === currentCard.term) + 500, 'geopolitics-migrations') && (
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
                variant={isFlashcardMarkedForReview(geopoliticsMigrationsData.findIndex(card => card.term === currentCard.term) + 500, 'geopolitics-migrations') ? "default" : "outline"}
                className={`px-6 py-3 text-lg font-medium transition-all duration-200 hover:scale-105 ${
                  isFlashcardMarkedForReview(geopoliticsMigrationsData.findIndex(card => card.term === currentCard.term) + 500, 'geopolitics-migrations')
                    ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                    : 'border-yellow-500 text-yellow-600 hover:bg-yellow-50'
                }`}
                size="lg"
              >
                <Star className="mr-2 h-5 w-5" />
                {isFlashcardMarkedForReview(geopoliticsMigrationsData.findIndex(card => card.term === currentCard.term) + 500, 'geopolitics-migrations') ? 'Retiré' : 'À revoir'} (R)
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
            Vous avez terminé toutes les cartes de vocabulaire sur les migrations.
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
