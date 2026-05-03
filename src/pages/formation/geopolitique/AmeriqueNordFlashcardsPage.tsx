import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, RotateCcw, ChevronLeft, ChevronRight as NextIcon, Eye, EyeOff } from 'lucide-react';

const AmeriqueNordFlashcardsPage = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showAllCards, setShowAllCards] = useState(false);

  // Flashcards basées sur le contenu de l'Amérique du Nord
  const flashcards = [
    {
      id: 1,
      question: "Quel est le titre principal de la dissertation sur l'Amérique du Nord ?",
      answer: "Amérique du Nord : États-Unis, Canada, Mexique : société, politique et puissance dans un espace intégré."
    },
    {
      id: 2,
      question: "Quels sont les trois pays constituant l'Amérique du Nord ?",
      answer: "États-Unis, Canada et Mexique - trois pays aux systèmes politiques, économiques et culturels différents mais liés par des accords de libre-échange et des enjeux géopolitiques communs."
    },
    {
      id: 3,
      question: "Quelle est la population des États-Unis et son poids démographique ?",
      answer: "Les États-Unis comptent environ 331 millions d'habitants, soit environ 4,2% de la population mondiale. C'est le troisième pays le plus peuplé après la Chine et l'Inde."
    },
    {
      id: 4,
      question: "Quelle est la superficie des États-Unis et ses principales caractéristiques géographiques ?",
      answer: "Les États-Unis couvrent 9,8 millions de km². Le pays est marqué par une grande diversité géographique : côtes atlantiques et pacifiques, montagnes Rocheuses, plaines centrales, déserts du Sud-Ouest."
    },
    {
      id: 5,
      question: "Qu'est-ce que le système fédéral américain ?",
      answer: "Les États-Unis fonctionnent selon un système fédéral où le pouvoir est partagé entre le gouvernement fédéral et les 50 États. Chaque État a sa propre constitution, son gouverneur et son assemblée législative, mais le gouvernement fédéral détient des pouvoirs importants en matière de défense, commerce extérieur et droits constitutionnels."
    },
    {
      id: 6,
      question: "Quels sont les trois pouvoirs constitutionnels aux États-Unis ?",
      answer: "1. Pouvoir exécutif : Président élu pour 4 ans, maximum 2 mandats\n2. Pouvoir législatif : Congrès bicaméral (Sénat + Chambre des représentants)\n3. Pouvoir judiciaire : Cour suprême et système fédéral des cours"
    },
    {
      id: 7,
      question: "Qu'est-ce que l'ALENA (maintenant USMCA) ?",
      answer: "L'Accord de Libre-Échange Nord-Américain (ALENA) a été remplacé par l'Accord États-Unis-Mexique-Canada (USMCA) en 2020. Il crée la plus grande zone de libre-échange du monde avec un PIB combiné de plus de 28 trillions de dollars et 500 millions d'habitants."
    },
    {
      id: 8,
      question: "Quelle est la population du Canada et ses caractéristiques démographiques ?",
      answer: "Le Canada compte environ 38 millions d'habitants. C'est un pays multiculturel avec deux langues officielles (anglais et français) et une population très urbanisée (80% vit à moins de 200 km de la frontière américaine)."
    },
    {
      id: 9,
      question: "Quelle est la superficie du Canada et ses principales régions ?",
      answer: "Le Canada couvre 9,98 millions de km² (deuxième pays du monde). Il comprend 10 provinces et 3 territoires, avec des régions contrastées : côtes pacifique et atlantique, Prairies, Bouclier canadien, Arctique."
    },
    {
      id: 10,
      question: "Quel rôle joue le Canada dans la géopolitique nord-américaine ?",
      answer: "Le Canada est un partenaire stratégique des États-Unis dans le cadre du NORAD (Commandement de la défense aérospatiale de l'Amérique du Nord) et de l'OTAN. Sa position géographique fait de lui une porte d'entrée vers l'Arctique et l'Asie-Pacifique."
    },
    {
      id: 11,
      question: "Qu'est-ce que NORAD ?",
      answer: "NORAD (North American Aerospace Defense Command) est un commandement binational États-Unis/Canada créé en 1957 pour la défense aérienne et spatiale de l'Amérique du Nord contre les menaces aériennes et balistiques."
    },
    {
      id: 12,
      question: "Quelle est la population du Mexique et ses caractéristiques démographiques ?",
      answer: "Le Mexique compte environ 128 millions d'habitants. C'est un pays jeune (âge médian de 28 ans) avec une forte croissance urbaine et d'importants flux migratoires vers les États-Unis."
    },
    {
      id: 13,
      question: "Quels sont les principaux défis économiques du Mexique ?",
      answer: "1. Dépendance économique vis-à-vis des États-Unis (80% des exportations)\n2. Inégalités sociales importantes\n3. Criminalité organisée liée au narcotrafic\n4. Dette publique élevée"
    },
    {
      id: 14,
      question: "Quelle est l'importance stratégique de l'Arctique pour l'Amérique du Nord ?",
      answer: "L'Arctique représente environ 13% du territoire canadien et contient d'importantes ressources naturelles (pétrole, gaz, minéraux). Le réchauffement climatique rend ces ressources plus accessibles, créant de nouvelles tensions géopolitiques et des routes maritimes alternatives."
    },
    {
      id: 15,
      question: "Qu'est-ce que le 'Rideau de fer nord-américain' ?",
      answer: "Le 'Rideau de fer nord-américain' désigne la frontière États-Unis/Mexique, qui est la frontière la plus surveillée du monde avec des mesures de sécurité importantes pour contrôler l'immigration et le narcotrafic."
    },
    {
      id: 16,
      question: "Quelle est la structure politique du Canada ?",
      answer: "Le Canada est une monarchie constitutionnelle parlementaire avec un Premier ministre qui est le chef du gouvernement. Le pays est organisé en 10 provinces et 3 territoires, avec un système fédéral équilibré."
    },
    {
      id: 17,
      question: "Qu'est-ce que la 'relation spéciale' États-Unis/Royaume-Uni appliquée au Canada ?",
      answer: "Le Canada bénéficie d'une relation privilégiée avec les États-Unis, similaire à celle entre États-Unis et Royaume-Uni, en matière de défense (NORAD, OTAN), commerce (USMCA) et intelligence (Five Eyes)."
    },
    {
      id: 18,
      question: "Quels sont les principaux secteurs économiques des États-Unis ?",
      answer: "1. Technologie et innovation (Silicon Valley)\n2. Finance (Wall Street)\n3. Défense et industrie aéronautique\n4. Agriculture et agroalimentaire\n5. Énergie (pétrole, gaz de schiste)"
    },
    {
      id: 19,
      question: "Quelle est la politique énergétique des États-Unis ?",
      answer: "Les États-Unis sont devenus le premier producteur mondial de pétrole et gaz grâce à la révolution du schiste. Ils sont également leaders dans les énergies renouvelables et cherchent à devenir énergétiquement indépendants."
    },
    {
      id: 20,
      question: "Quels sont les principaux défis sociaux aux États-Unis ?",
      answer: "1. Inégalités économiques croissantes\n2. Violence par armes à feu\n3. Crise des opioïdes\n4. Polarisation politique\n5. Immigration et diversité culturelle"
    },
    {
      id: 21,
      question: "Quelle est la politique étrangère des États-Unis en Amérique du Nord ?",
      answer: "Les États-Unis pratiquent une politique de 'leadership hégémonique' en Amérique du Nord : primauté économique et militaire, mais aussi coopération institutionnelle (OTAN, USMCA, NORAD)."
    },
    {
      id: 22,
      question: "Qu'est-ce que la 'Doctrine Monroe' et son évolution ?",
      answer: "Doctrine Monroe (1823) : 'L'Amérique aux Américains' - opposition à l'ingérence européenne. Elle a évolué vers une politique d'influence américaine prépondérante en Amérique latine et une protection des intérêts nord-américains."
    },
    {
      id: 23,
      question: "Quels sont les principaux accords de sécurité en Amérique du Nord ?",
      answer: "1. NORAD (1957) : défense aérienne conjointe USA-Canada\n2. OTAN (1949) : alliance militaire incluant USA et Canada\n3. Accord de coopération en matière de défense USA-Mexique"
    },
    {
      id: 24,
      question: "Quelle est la place du Mexique dans l'intégration nord-américaine ?",
      answer: "Le Mexique est le maillon le plus vulnérable de l'intégration nord-américaine : forte dépendance économique vis-à-vis des États-Unis, mais aussi tensions sur l'immigration, le narcotrafic et les investissements étrangers."
    },
    {
      id: 25,
      question: "Quels sont les défis environnementaux de l'Amérique du Nord ?",
      answer: "1. Changements climatiques et fonte des glaces arctiques\n2. Gestion des ressources en eau (fleuve Colorado)\n3. Pollution industrielle et urbaine\n4. Conservation des espaces naturels (forêts, parcs nationaux)"
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
            <Link to="/formation/geopolitique/amerique-nord" className="hover:text-gray-900 transition-colors">
              Amérique du Nord
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
            Flashcards - Amérique du Nord
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Révisez les concepts clés de l'Amérique du Nord avec ces flashcards interactives.
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

export default AmeriqueNordFlashcardsPage;
