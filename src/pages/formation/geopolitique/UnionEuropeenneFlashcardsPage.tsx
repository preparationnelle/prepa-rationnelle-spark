import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, RotateCcw, ChevronLeft, ChevronRight as NextIcon, Eye, EyeOff } from 'lucide-react';

const UnionEuropeenneFlashcardsPage = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showAllCards, setShowAllCards] = useState(false);

  // Flashcards basées sur le contenu détaillé de l'Union européenne
  const flashcards = [
    {
      id: 1,
      question: "Quelles sont les trois parties de la dissertation sur l'Union européenne ?",
      answer: "I. Historique de la construction européenne\nII. Les défis contemporains de l'Union européenne\nIII. Les voies de l'avenir et la réinvention de l'Europe"
    },
    {
      id: 2,
      question: "Selon Emmanuel Kant, qu'est-ce que représente l'idée de la paix perpétuelle ?",
      answer: "Emmanuel Kant (1795) dans 'Vers la paix perpétuelle' propose un projet de paix perpétuelle qui influence les penseurs européens du XXe siècle."
    },
    {
      id: 3,
      question: "Quel rôle joue Coudenhove-Kalergi dans l'idée paneuropéenne ?",
      answer: "Coudenhove-Kalergi (1923) publie 'Paneuropa' et propose une union des peuples européens pour éviter la guerre."
    },
    {
      id: 4,
      question: "Comment Stefan Zweig voit-il l'Europe dans son ouvrage autobiographique ?",
      answer: "Dans 'Le monde d'hier, souvenirs d'un Européen' (1941), Zweig analyse l'excès de puissance en Europe en 1913 comme cause de la Première Guerre mondiale."
    },
    {
      id: 5,
      question: "Quelle est l'analyse de Robert Kagan sur les Européens après la Seconde Guerre mondiale ?",
      answer: "Dans 'La puissance et la faiblesse' (2002), Kagan affirme que les Européens sont 'de Vénus' (pacifistes) tandis que les Américains sont 'de Mars' (belliqueux)."
    },
    {
      id: 6,
      question: "Quelle citation célèbre de Zbigniew Brzezinski résume la construction européenne ?",
      answer: "'À travers l'Europe, la France vise la réincarnation, l'Allemagne la rédemption' - montrant les motivations différentes des deux pays fondateurs."
    },
    {
      id: 7,
      question: "Quelle est la célèbre citation de Robert Schuman du 9 mai 1950 ?",
      answer: "'L'Europe ne se fera pas d'un coup, ni dans une construction d'ensemble : elle se fera par des réalisations concrètes créant d'abord une solidarité de fait.'"
    },
    {
      id: 8,
      question: "Quelles sont les trois approches des pères fondateurs selon l'analyse présentée ?",
      answer: "1. Pragmatisme (réalisations concrètes et spillover fonctionnel)\n2. Fédéralisme (vision ambitieuse d'intégration)\n3. Unionisme (coopération intergouvernementale)"
    },
    {
      id: 9,
      question: "Qu'est-ce que le 'Ring of Fire' européen selon The Economist (2014) ?",
      answer: "L'échec des politiques de voisinage européennes créant un 'anneau de feu' autour de l'Europe avec des conflits en Syrie, Ukraine, Haut-Karabakh, révolutions arabes et crise des réfugiés."
    },
    {
      id: 10,
      question: "Quelle est la dépendance énergétique historique de l'Europe envers la Russie ?",
      answer: "55% du gaz européen venait de Russie, illustrant la 'géopolitique des tubes' selon Philippe Rekacewicz."
    },
    {
      id: 11,
      question: "Qu'est-ce que la 'culture de la retenue' allemande selon l'analyse présentée ?",
      answer: "La doctrine allemande traditionnelle 'Wandel durch Handel' (changement par le commerce) qui privilégie le dialogue économique avec des puissances comme la Russie."
    },
    {
      id: 12,
      question: "Qu'est-ce que le concept de 'polycrise' selon Guy Verhofstadt ?",
      answer: "Dans 'Le mal européen' (2016), Verhofstadt décrit une crise globale affectant tous les domaines : économique, identitaire, migratoire, énergétique, guerrière et démographique."
    },
    {
      id: 13,
      question: "Quelles sont les 6 crises identifiées dans la polycrise européenne ?",
      answer: "1. Économique (dette souveraine, Grexit)\n2. Identitaire (désunion Ouest/Est)\n3. Migratoire (1,5M en 2015)\n4. Énergétique (dépendance gaz russe)\n5. Guerre (Ukraine)\n6. Démographique ('suicide démographique')"
    },
    {
      id: 14,
      question: "Quelle est la position du Groupe de Visegrád (V4) face à la crise migratoire ?",
      answer: "Le V4 (Pologne, Hongrie, République tchèque, Slovaquie) s'oppose systématiquement à la politique migratoire commune de l'UE, préférant la souveraineté nationale."
    },
    {
      id: 15,
      question: "Quelle citation d'Henry Kissinger souligne l'absence d'unité européenne ?",
      answer: "'When I want to call Europe, what number do I dial?' ('Quand je veux appeler l'Europe, quel numéro dois-je composer ?')"
    },
    {
      id: 16,
      question: "Selon El Mouhoub Mouhoud, pourquoi l'UE est-elle un 'artefact statistique' ?",
      answer: "L'UE n'est forte que pendant les crises : 'sans crise, pas de fédéralisme européen'. Les périodes calmes favorisent les égoïsmes nationaux."
    },
    {
      id: 17,
      question: "Quels sont les principaux partis eurosceptiques en Europe selon l'analyse ?",
      answer: "RN (France), AfD (Allemagne), Ligue du Nord (Italie), UKIP (Royaume-Uni), FPÖ (Autriche), et opposition systématique du Groupe V4."
    },
    {
      id: 18,
      question: "Quelle est la thèse centrale de Viktor Orbán sur l'État 'non libéral' ?",
      answer: "Orbán défend un État non libéral avec une 'approche spécifique et nationale', s'inspirant des modèles de Singapour, Chine, Inde, Turquie et Russie."
    },
    {
      id: 19,
      question: "Selon François Heisbourg, quelle est la menace pour l'Europe ?",
      answer: "La 'tiermondialisation de l'UE' : l'Europe risque de devenir un acteur de second plan dans un monde où les prédateurs (USA, Chine) dominent."
    },
    {
      id: 20,
      question: "Quelles sont les quatre dépendances structurelles européennes identifiées ?",
      answer: "1. Énergétique (55% gaz russe)\n2. Économique (guerre économique mondiale)\n3. Militaire (70% OTAN financé par USA)\n4. Technologique (retard innovation, perte de champions comme KUKA)"
    },
    {
      id: 21,
      question: "Qu'est-ce que la 'Zietenwende' allemande ?",
      answer: "Le 'changement d'époque' allemand : allocation de 100 milliards d'euros pour moderniser l'armée allemande, marquant la fin de la culture de la retenue."
    },
    {
      id: 22,
      question: "Quels sont les trois scénarios d'avenir pour l'Europe selon l'analyse ?",
      answer: "1. Fédéralisme accru (plus d'intégration)\n2. Europe à plusieurs vitesses (intégration différenciée)\n3. Désintégration (retour aux nationalismes)"
    },
    {
      id: 23,
      question: "Quelle est la puissance normative de l'Union européenne ?",
      answer: "L'UE influence par les valeurs et les règles : RGPD, critères de Copenhague pour l'adhésion, diplomatie climatique, etc."
    },
    {
      id: 24,
      question: "Qu'est-ce que PESCO dans le contexte du réarmement européen ?",
      answer: "PESCO (Coopération Structurée Permanente) : mécanisme de coopération militaire européenne pour développer des capacités de défense communes."
    },
    {
      id: 25,
      question: "Quelle est la position de Daniel Cohen sur le retard technologique européen ?",
      answer: "Dans son article du Monde (2002), Cohen analyse le retard technologique européen dû au manque d'innovation destructrice et de dynamisme entrepreneurial schumpétérien."
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
            <Link to="/formation/geopolitique/union-europeenne" className="hover:text-gray-900 transition-colors">
              Union européenne
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
            Flashcards - Union européenne
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Révisez les concepts clés de l'Union européenne avec ces flashcards interactives.
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
                <span className="hidden sm:inline">Carte précédente</span>
                <span className="sm:hidden">Précédente</span>
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
                    title={`Aller à la carte ${index + 1}`}
                  />
                ))}
              </div>

              <button
                onClick={handleNext}
                disabled={currentCardIndex === flashcards.length - 1}
                className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 disabled:cursor-not-allowed text-white px-4 py-2 rounded-md transition-colors"
              >
                <span className="hidden sm:inline">Carte suivante</span>
                <span className="sm:hidden">Suivante</span>
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

export default UnionEuropeenneFlashcardsPage;
