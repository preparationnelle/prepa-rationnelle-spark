import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, RotateCcw, ChevronLeft, ChevronRight as NextIcon, Eye, EyeOff } from 'lucide-react';

const ContinentAfricainFlashcardsPage = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showAllCards, setShowAllCards] = useState(false);

  // Flashcards basées sur le contenu détaillé du continent africain
  const flashcards = [
    {
      id: 1,
      question: "Quel est le titre principal de la dissertation sur le continent africain ?",
      answer: "L'Afrique et la mondialisation : entre dépendance et émancipation, enjeux géopolitiques et perspectives d'avenir."
    },
    {
      id: 2,
      question: "Quels sont les trois badges décrivant les thèmes principaux du continent africain ?",
      answer: "États et territoires africains, Cultures et sociétés, Développement et enjeux."
    },
    {
      id: 3,
      question: "Quelle citation d'Edem Kodjo résume le paradoxe africain ?",
      answer: "\"L'Afrique est un continent riche, mais peuplé de pauvres\" - illustrant la contradiction entre ressources abondantes et pauvreté généralisée."
    },
    {
      id: 4,
      question: "Quelle citation de Bertrand Badie définit l'État africain ?",
      answer: "\"L'État en Afrique est une greffe qui n'a pas pris\" - montrant comment les structures politiques africaines ont été calquées sur des modèles occidentaux inadaptés."
    },
    {
      id: 5,
      question: "Quelle citation d'Émilie Aubry souligne les inégalités en Afrique ?",
      answer: "\"Les lumières de la nuit ne scintillent pas pour tout le monde en Afrique\" - illustrant la fracture numérique et énergétique sur le continent."
    },
    {
      id: 6,
      question: "Quelle citation de Jacques Foccart résume la Françafrique ?",
      answer: "\"Ce qui est bon pour la France est bon pour l'Afrique\" - principe fondateur de la politique néocoloniale française."
    },
    {
      id: 7,
      question: "Quels sont les 6 paradoxes majeurs de l'Afrique selon l'analyse présentée ?",
      answer: "1. Richesse naturelle vs pauvreté humaine\n2. Croissance démographique vs sous-développement économique\n3. Mégapoles globalisées vs enclavement rural\n4. Dépendance extérieure vs volonté d'autonomie\n5. Leapfrog technologique vs fracture numérique\n6. Intervention étrangère : stabilisation ou chaos ?"
    },
    {
      id: 8,
      question: "Quelle est la définition du concept de \"Leapfrog\" appliqué à l'Afrique ?",
      answer: "Concept de \"saut de grenouille\" où un pays contourne certaines étapes du développement classique pour adopter directement des technologies avancées. L'Afrique illustre ce phénomène dans les télécommunications et les énergies renouvelables."
    },
    {
      id: 9,
      question: "Quelle est la problématique centrale sur la dépendance de l'Afrique ?",
      answer: "L'Afrique peut-elle s'émanciper de sa dépendance aux puissances extérieures pour devenir un acteur stratégique autonome ?"
    },
    {
      id: 10,
      question: "Quels sont les quatre enjeux principaux identifiés pour l'Afrique ?",
      answer: "1. Géopolitique (reconfiguration des alliances)\n2. Économique (diversification pour sortir du modèle extractif)\n3. Démographique et social (maîtriser l'explosion démographique)\n4. Environnemental (impacts du réchauffement climatique)"
    },
    {
      id: 11,
      question: "Quel ouvrage de Bertrand Badie analyse l'État africain ?",
      answer: "L'État importé (1992) - montre comment les structures politiques africaines ont été calquées sur des modèles occidentaux, souvent inadaptés aux réalités locales."
    },
    {
      id: 12,
      question: "Quel ouvrage de Sylvie Brunel analyse les inégalités africaines ?",
      answer: "L'Afrique est-elle si bien partie ? (2014) - analyse des inégalités de développement sur le continent, illustrées par la métaphore de la \"peau de léopard\"."
    },
    {
      id: 13,
      question: "Quel ouvrage de Philippe Hugon propose trois scénarios pour l'Afrique ?",
      answer: "La Géopolitique de l'Afrique (2006) - propose trois scénarios d'évolution : largage, rattrapage, éclatement en archipels."
    },
    {
      id: 14,
      question: "Quel ouvrage d'Antoine Glaser analyse les relations Afrique-France ?",
      answer: "AfricaFrance (2014) - analyse comment les élites africaines ont progressivement inversé le rapport de dépendance avec la France."
    },
    {
      id: 15,
      question: "Quelles sont les trois phases de mondialisation identifiées par Laurent Carroué ?",
      answer: "Trois phases majeures qui ont toutes intégré l'Afrique de manière asymétrique : 1. Traite négrière et grandes découvertes, 2. Colonisation et industrialisation, 3. Mondialisation contemporaine."
    },
    {
      id: 16,
      question: "Quelle est la superficie de l'Afrique et sa part des terres émergées ?",
      answer: "L'Afrique est le deuxième continent le plus vaste avec une superficie de 30,3 millions de km², soit environ 20,3% des terres émergées."
    },
    {
      id: 17,
      question: "Quelle est la population actuelle de l'Afrique et ses caractéristiques démographiques ?",
      answer: "L'Afrique compte environ 1,4 milliard d'habitants (18% de la population mondiale). C'est le continent le plus jeune avec une médiane d'âge de 19,7 ans."
    },
    {
      id: 18,
      question: "Combien de pays compte le continent africain ?",
      answer: "Le continent africain compte 54 pays souverains, plus 2 États contestés (Sahara Occidental et Somaliland)."
    },
    {
      id: 19,
      question: "Qu'est-ce que l'Union Africaine et quand a-t-elle été créée ?",
      answer: "L'Union Africaine (UA) est l'organisation panafricaine créée en 2002 qui regroupe les 55 États africains. Elle a succédé à l'Organisation de l'Unité Africaine (OUA) fondée en 1963."
    },
    {
      id: 20,
      question: "Qu'est-ce que le Sahel et quelles sont ses caractéristiques ?",
      answer: "Le Sahel est une zone de transition entre le Sahara et la savane soudanaise, s'étendant de l'Atlantique à la mer Rouge. C'est une région fragile confrontée à la désertification, aux conflits et au terrorisme."
    },
    {
      id: 21,
      question: "Quelle citation de Pierre Jacquemot sur l'avenir de l'Afrique ?",
      answer: "\"L'Afrique est en train de devenir un laboratoire du futur\" - soulignant le potentiel innovant du continent."
    },
    {
      id: 22,
      question: "Quelle citation de Philippe Hugon sur la géopolitique africaine ?",
      answer: "\"L'Afrique n'a jamais été un angle mort géopolitique\" - montrant l'importance stratégique permanente du continent."
    },
    {
      id: 23,
      question: "Quel paradoxe oppose richesse naturelle et pauvreté humaine en Afrique ?",
      answer: "L'Afrique possède 40% des réserves mondiales de métaux rares, 60% des terres arables non exploitées, et de vastes ressources énergétiques. Pourtant, elle reste le continent le plus pauvre et le moins industrialisé."
    },
    {
      id: 24,
      question: "Quel paradoxe démographique affecte l'Afrique ?",
      answer: "L'Afrique connaît une explosion démographique (âge médian de 23 ans, taux de fécondité record au Niger : 7,4 enfants par femme), mais le marché du travail ne suit pas et les infrastructures sont insuffisantes."
    },
    {
      id: 25,
      question: "Quel paradoxe oppose mégapoles globalisées et enclavement rural ?",
      answer: "Des villes comme Johannesburg, Lagos, Nairobi sont intégrées à la mondialisation, mais 63% des Subsahariens vivent en milieu rural sans accès aux services essentiels (eau, électricité, éducation)."
    }
  ];

  const handlePrevious = () => {
    if (currentCardIndex > 0) {
      setCurrentCardIndex(currentCardIndex - 1);
      setShowAnswer(false);
    }
  };

  const handleNext = () => {
    if (currentCardIndex < flashcards.length - 1) {
      setCurrentCardIndex(currentCardIndex + 1);
      setShowAnswer(false);
    }
  };

  const toggleAnswer = () => {
    setShowAnswer(!showAnswer);
  };

  const resetCards = () => {
    setCurrentCardIndex(0);
    setShowAnswer(false);
  };

  const currentCard = flashcards[currentCardIndex];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-gray-600">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formations" className="hover:text-gray-900 transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/geopolitique" className="hover:text-gray-900 transition-colors">
              Formation Géopolitique
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/geopolitique/deuxieme-annee" className="hover:text-gray-900 transition-colors">
              Deuxième Année
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/geopolitique/continent-africain" className="hover:text-gray-900 transition-colors">
              Continent africain
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Flashcards</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Flashcards - Continent africain
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Révisez les concepts clés du continent africain avec ces flashcards interactives.
          </p>
        </div>

        {/* Contrôles */}
        <div className="max-w-4xl mx-auto mb-6 flex flex-wrap justify-center gap-4">
          <button
            onClick={resetCards}
            className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            <RotateCcw className="w-4 h-4" />
            Recommencer
          </button>

          <button
            onClick={() => setShowAllCards(!showAllCards)}
            className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-md transition-colors"
          >
            {showAllCards ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
            {showAllCards ? 'Masquer toutes les cartes' : 'Voir toutes les cartes'}
          </button>
        </div>

        {/* Affichage de toutes les cartes */}
        {showAllCards ? (
          <div className="max-w-4xl mx-auto space-y-4">
            {flashcards.map((card, index) => (
              <div key={card.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 font-bold text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-900 mb-2">{card.question}</h3>
                    <p className="text-gray-600">{card.answer}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Mode flashcards individuel */
          <div className="max-w-2xl mx-auto">
            {/* Progress bar */}
            <div className="mb-6">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Carte {currentCardIndex + 1} sur {flashcards.length}</span>
                <span>{Math.round(((currentCardIndex + 1) / flashcards.length) * 100)}%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                  style={{ width: `${((currentCardIndex + 1) / flashcards.length) * 100}%` }}
                ></div>
              </div>
            </div>

            {/* Flashcard */}
            <div className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden">
              <div className="p-8 min-h-[300px] flex flex-col justify-center">
                <div className="text-center">
                  {!showAnswer ? (
                    <div>
                      <h2 className="text-xl font-semibold text-gray-900 mb-6">
                        {currentCard.question}
                      </h2>
                      <button
                        onClick={toggleAnswer}
                        className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition-colors"
                      >
                        <Eye className="w-5 h-5" />
                        Voir la réponse
                      </button>
                    </div>
                  ) : (
                    <div>
                      <h2 className="text-lg font-medium text-gray-700 mb-4">
                        {currentCard.question}
                      </h2>
                      <div className="border-t border-gray-200 pt-4">
                        <p className="text-gray-900 leading-relaxed">
                          {currentCard.answer}
                        </p>
                      </div>
                      <button
                        onClick={toggleAnswer}
                        className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors mt-6"
                      >
                        <EyeOff className="w-5 h-5" />
                        Masquer la réponse
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-8">
              <button
                onClick={handlePrevious}
                disabled={currentCardIndex === 0}
                className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 disabled:bg-gray-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded-md transition-colors"
              >
                <ChevronLeft className="w-4 h-4" />
                Précédent
              </button>

              <div className="flex gap-2">
                {flashcards.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      setCurrentCardIndex(index);
                      setShowAnswer(false);
                    }}
                    className={`w-3 h-3 rounded-full transition-colors ${
                      index === currentCardIndex ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={currentCardIndex === flashcards.length - 1}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded-md transition-colors"
              >
                Suivant
                <NextIcon className="w-4 h-4" />
              </button>
            </div>
          </div>
        )}

        {/* Footer avec lien de retour */}
        <div className="text-center mt-12">
          <Link
            to="/formation/geopolitique/deuxieme-annee"
            className="inline-flex items-center gap-2 bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-lg transition-colors"
          >
            Retour à la liste des continents
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ContinentAfricainFlashcardsPage;
