import React, { useState, useEffect } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronLeft, ChevronRight, RotateCcw, BookOpen, Eye, EyeOff, Filter, Shuffle, Star } from 'lucide-react';
import { useUserData } from '@/context/UserDataContext';

interface GeopoliticsGuerresCard {
  term: string;
  definition: string;
  category: string;
}

const geopoliticsGuerresData: GeopoliticsGuerresCard[] = [
  {
    term: "Jus ad bellum",
    definition: "Droit de faire la guerre selon l'École de Salamanque (XVIe-XVIIe). Partie du droit international définissant les conditions légales pour déclencher un conflit armé.",
    category: "Droit de la guerre"
  },
  {
    term: "Jus in bello",
    definition: "Droit dans la guerre selon l'École de Salamanque. Partie du droit international définissant comment mener la guerre (manière de combattre).",
    category: "Droit de la guerre"
  },
  {
    term: "Traités de Westphalie (1648)",
    definition: "Accords fondateurs du droit international moderne : souveraineté étatique, droit des nations à s'allier, fin de la suprématie impériale.",
    category: "Droit international"
  },
  {
    term: "Société des Nations (SDN)",
    definition: "Première organisation internationale créée en 1919, inaboutie en raison de l'absence américaine et de son incapacité à prévenir l'agression japonaise en Mandchourie.",
    category: "Organisations internationales"
  },
  {
    term: "Organisation des Nations Unies (ONU)",
    definition: "Créée en 1945 par la Charte de San Francisco, chargée du maintien de la paix internationale après l'échec de la SDN.",
    category: "Organisations internationales"
  },
  {
    term: "Convention de Genève (1949)",
    definition: "Socle du Droit International Humanitaire (DIH) : protection des civils et prisonniers de guerre, interdiction de la torture et des armes inhumaines.",
    category: "Droit humanitaire"
  },
  {
    term: "Protocoles additionnels (1977)",
    definition: "Complètent les Conventions de Genève : protection étendue des civils en temps de guerre, prohibition des armes causant des maux superflus.",
    category: "Droit humanitaire"
  },
  {
    term: "Arme nucléaire",
    definition: "Inhibition de l'affrontement direct entre grandes puissances, déplacement des conflits vers des guerres de basse intensité et conflits asymétriques.",
    category: "Dissuasion nucléaire"
  },
  {
    term: "Guerre par procuration",
    definition: "Selon Zbigniew Brzezinski : affrontement indirect entre puissances via des acteurs soutenus (États, groupes armés, proxies).",
    category: "Stratégies indirectes"
  },
  {
    term: "Complexe militaro-industriel",
    definition: "Système d'interdépendance entre forces armées, industries d'armement et décideurs politiques. Exemple : financement et maîtrise aux États-Unis.",
    category: "Économie de guerre"
  },
  {
    term: "Dilemme de sécurité",
    definition: "Plus une puissance accroît sa sécurité nationale, plus elle accroît l'insécurité globale pour les autres acteurs.",
    category: "Théories stratégiques"
  },
  {
    term: "Théorie de la paix démocratique",
    definition: "Selon Michael Doyle : les démocraties ne se font pas la guerre entre elles, favorisant la stabilité internationale.",
    category: "Théories stratégiques"
  },
  {
    term: "Terrorisme international",
    definition: "Attaques du 11 septembre 2001 (2 977 victimes), dissémination d'armes post-URSS, traité de non-prolifération (TNP) et dénucléarisation ukrainienne.",
    category: "Menaces asymétriques"
  },
  {
    term: "Guerres intra-étatiques",
    definition: "Conflits internes à un État, plus fréquents que les guerres interétatiques depuis la fin de la Seconde Guerre mondiale.",
    category: "Typologie des guerres"
  },
  {
    term: "Guerres asymétriques",
    definition: "Conflits entre acteurs de puissance très différente : État vs groupes armés, terroristes, guérillas...",
    category: "Typologie des guerres"
  },
  {
    term: "Guerres hybrides",
    definition: "Combinaison de méthodes conventionnelles, irrégulières et cybernétiques dans un même conflit.",
    category: "Typologie des guerres"
  },
  {
    term: "4e génération de guerre",
    definition: "Selon William S. Lind : guerre de l'information, mobilisation de tous les domaines (médias, économie, société civile...).",
    category: "Évolutions stratégiques"
  },
  {
    term: "Netwar",
    definition: "Selon Arquilla et Ronfeldt : guerre des réseaux, utilisant les technologies de l'information pour la coordination et la désinformation.",
    category: "Guerre numérique"
  },
  {
    term: "Guerre préventive vs préemptive",
    definition: "Préventive (illégale) : attaquer avant une menace imminente. Préemptive (légitime) : attaquer en réponse à une menace immédiate. Exemple : Irak 2003 présenté comme préemptive.",
    category: "Doctrine militaire"
  },
  {
    term: "Doctrine zéro mort",
    definition: "Guerre propre utilisant drones et robotisation pour minimiser les pertes humaines, créant un monde post-héroïque selon Edward Luttwak.",
    category: "Évolutions technologiques"
  },
  {
    term: "RMA (Révolution dans les Affaires Militaires)",
    definition: "Transformation des forces armées par les NTIC (Nouvelles Technologies de l'Information et de la Communication), créant un 'gap technologique'.",
    category: "Évolutions technologiques"
  },
  {
    term: "Privatisation de la guerre",
    definition: "Recours à des sociétés militaires privées (SMP) comme DynCorp, Academi/Blackwater ou Groupe Wagner (paramilitaire russe en Afrique et Ukraine).",
    category: "Économie de guerre"
  },
  {
    term: "Guerre économique",
    definition: "Selon Ali Laïdi : transposition de la géoéconomie au niveau des entreprises, contrôle des ressources rares comme avantage concurrentiel.",
    category: "Géoéconomie"
  },
  {
    term: "Cyberconflits",
    definition: "Le cyberspace comme 5e domaine de guerre : propagande, sabotage industriel, rançongiciels. Exemples : Stuxnet (2010), Pegasus, Wannacry/NotPetya (2017).",
    category: "Guerre numérique"
  },
  {
    term: "Guerre spatiale",
    definition: "Militarisation de l'espace extra-atmosphérique avec programmes comme Helios (France), Skynet (Royaume-Uni), FSW (États-Unis), Yaogan (Chine).",
    category: "Nouveaux domaines"
  },
  {
    term: "Nouveau cycle nucléaire",
    definition: "Essais nord-coréens, retrait américain du JCPoA (Plan d'Action Global Conjoints), égalisation des arsenaux et instabilités accrues.",
    category: "Armes de destruction massive"
  }
];

const getCategorizedGuerresData = () => {
  const categories = [...new Set(geopoliticsGuerresData.map(item => item.category))];
  return categories.map(category => ({
    category,
    items: geopoliticsGuerresData.filter(item => item.category === category)
  }));
};

export const GeopoliticsFlashcardsGuerres: React.FC = () => {
  const { addFlashcardForReview, removeFlashcardFromReview, isFlashcardMarkedForReview, updateProgress } = useUserData();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [studiedCards, setStudiedCards] = useState<Set<number>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string | 'all'>('all');
  const [isFlipped, setIsFlipped] = useState(false);
  const [touchStartX, setTouchStartX] = useState(0);
  const [touchEndX, setTouchEndX] = useState(0);

  const categorizedData = getCategorizedGuerresData();

  const filteredData = selectedCategory === 'all'
    ? geopoliticsGuerresData
    : geopoliticsGuerresData.filter(item => item.category === selectedCategory);

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
          subjectsStudied: ['Géopolitique - Les guerres']
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
    const cardId = geopoliticsGuerresData.findIndex(card => card.term === currentCard.term) + 400; // +400 pour différencier des autres flashcards
    const isMarked = isFlashcardMarkedForReview(cardId, 'geopolitics-guerres');

    if (isMarked) {
      removeFlashcardFromReview(cardId, 'geopolitics-guerres');
    } else {
      addFlashcardForReview({
        id: cardId,
        language: 'geopolitics-guerres',
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
            Vocabulaire des guerres
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
              <option value="all">Toutes les catégories ({geopoliticsGuerresData.length})</option>
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
            Géopolitique - Les guerres
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
              {isFlashcardMarkedForReview(geopoliticsGuerresData.findIndex(card => card.term === currentCard.term) + 400, 'geopolitics-guerres') && (
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
                variant={isFlashcardMarkedForReview(geopoliticsGuerresData.findIndex(card => card.term === currentCard.term) + 400, 'geopolitics-guerres') ? "default" : "outline"}
                className={`px-6 py-3 text-lg font-medium transition-all duration-200 hover:scale-105 ${
                  isFlashcardMarkedForReview(geopoliticsGuerresData.findIndex(card => card.term === currentCard.term) + 400, 'geopolitics-guerres')
                    ? 'bg-yellow-500 hover:bg-yellow-600 text-white'
                    : 'border-yellow-500 text-yellow-600 hover:bg-yellow-50'
                }`}
                size="lg"
              >
                <Star className="mr-2 h-5 w-5" />
                {isFlashcardMarkedForReview(geopoliticsGuerresData.findIndex(card => card.term === currentCard.term) + 400, 'geopolitics-guerres') ? 'Retiré' : 'À revoir'} (R)
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
            Vous avez terminé toutes les cartes de vocabulaire sur les guerres.
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
