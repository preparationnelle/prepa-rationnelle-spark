import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, RotateCcw, ChevronLeft, ChevronRight as NextIcon, Eye, EyeOff } from 'lucide-react';

const AmeriqueLatineFlashcardsPage = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showAllCards, setShowAllCards] = useState(false);

  // Flashcards basées sur le contenu détaillé de l'Amérique latine
  const flashcards = [
    {
      id: 1,
      question: "Quel est le titre principal de la dissertation sur l'Amérique latine ?",
      answer: "L'Amérique latine : Émergences, crises, intégrations régionales et géopolitique du sous-continent latino-américain."
    },
    {
      id: 2,
      question: "Quelles sont les trois parties de la dissertation sur l'Amérique latine ?",
      answer: "I. Historique de l'Amérique latine : entre rêve d'unité, influences extérieures et instabilités internes\nII. Les défis structurels contemporains de l'Amérique latine\nIII. Perspectives d'avenir et enjeux géopolitiques"
    },
    {
      id: 3,
      question: "Quelle citation célèbre résume la relation entre le Mexique et les États-Unis ?",
      answer: "\"Pauvre Mexique, si loin de Dieu, si près des États-Unis.\" - Porfirio Díaz\nCette citation illustre la tension permanente entre l'Amérique latine et son voisin du Nord, révélant la contrainte géographique et géopolitique majeure de la région."
    },
    {
      id: 4,
      question: "Qui est Simón Bolívar et quel était son rêve pour l'Amérique latine ?",
      answer: "Simón Bolívar était le Libérateur de l'Amérique latine au XIXe siècle. Son rêve était de créer une Grande Colombie unissant tous les États d'Amérique latine en une grande république, dans une vision nationaliste et anti-impérialiste rejetant la domination européenne puis nord-américaine."
    },
    {
      id: 5,
      question: "Qu'est-ce que la Doctrine Monroe (1823) ?",
      answer: "La Doctrine Monroe, énoncée par le président américain James Monroe, affirme que les Amériques sont la sphère d'influence exclusive des États-Unis. Elle s'oppose à toute ingérence européenne dans les affaires du continent américain."
    },
    {
      id: 6,
      question: "Quelle est la population de l'Amérique latine et ses principales caractéristiques démographiques ?",
      answer: "L'Amérique latine compte environ 650 millions d'habitants (8,5% de la population mondiale). La région est jeune (âge médian autour de 30 ans), urbanisée à 80%, avec des flux migratoires importants et une forte diversité ethnique."
    },
    {
      id: 7,
      question: "Qu'est-ce que l'ALBA (Alliance Bolivarienne pour les Amériques) ?",
      answer: "L'ALBA est une alliance alternative à l'ALCA proposée par les États-Unis, créée en 2004 à l'initiative du Venezuela. Elle regroupe des pays comme le Venezuela, Cuba, Bolivie, Nicaragua et Équateur, et promeut l'intégration régionale sur des bases anti-impérialistes."
    },
    {
      id: 8,
      question: "Quelle est l'importance économique du Brésil dans la région ?",
      answer: "Le Brésil représente environ 50% du PIB de l'Amérique du Sud et est la 9e économie mondiale. C'est le premier exportateur de café, de soja et de sucre, et joue un rôle moteur dans le Mercosur. Sa population de 215 millions d'habitants en fait le géant démographique de la région."
    },
    {
      id: 9,
      question: "Qu'est-ce que le Mercosur ?",
      answer: "Le Marché Commun du Sud (Mercosur) est un processus d'intégration régionale créé en 1991 entre l'Argentine, le Brésil, l'Uruguay et le Paraguay. Le Venezuela a été suspendu en 2016. L'objectif est de créer un marché commun similaire à l'Union européenne avec libre circulation des biens, services et capitaux."
    },
    {
      id: 10,
      question: "Quels sont les principaux défis économiques de l'Amérique latine ?",
      answer: "1. Dépendance aux matières premières (syndrome hollandais)\n2. Inégalités sociales persistantes\n3. Endettement extérieur élevé\n4. Inflation chronique dans certains pays\n5. Déficits budgétaires et fiscaux"
    },
    {
      id: 11,
      question: "Quel rôle joue l'Amérique latine dans les enjeux climatiques mondiaux ?",
      answer: "L'Amérique latine abrite la forêt amazonienne ('poumon de la Terre') qui représente 15% des émissions mondiales de CO2. Le Brésil et l'Indonésie sont les deux principaux pays émetteurs liés à la déforestation. La région est vulnérable aux dérèglements climatiques (sécheresses, inondations)."
    },
    {
      id: 12,
      question: "Qu'est-ce que le narcotrafic et son impact en Amérique latine ?",
      answer: "Le narcotrafic représente une économie parallèle massive en Amérique latine (Colombie, Mexique, Pérou). Il génère violence, corruption et instabilité politique. Les cartels contrôlent des territoires entiers et influencent les élections."
    },
    {
      id: 13,
      question: "Quelle est l'influence de la Chine en Amérique latine ?",
      answer: "La Chine est devenue le premier partenaire commercial de l'Amérique latine devant les États-Unis. Elle investit massivement dans les infrastructures, les mines et l'énergie, offrant une alternative aux prêts du FMI et de la Banque mondiale, mais créant une nouvelle forme de dépendance."
    },
    {
      id: 14,
      question: "Qu'est-ce que le populisme en Amérique latine ?",
      answer: "Le populisme latino-américain (Chávez au Venezuela, Correa en Équateur, Morales en Bolivie) se caractérise par une rhétorique anti-impérialiste, des politiques sociales redistributives et un rejet des élites traditionnelles. Il alterne souvent avec des périodes de conservatisme."
    },
    {
      id: 15,
      question: "Quelles sont les principales organisations d'intégration régionale en Amérique latine ?",
      answer: "1. Mercosur (Brésil, Argentine, Uruguay, Paraguay)\n2. ALBA (Venezuela, Cuba, Bolivie, Nicaragua, Équateur)\n3. CELAC (Communauté des États Latino-Américains et Caraïbes)\n4. Pacte Andin\n5. CARICOM (Caraïbes)"
    },
    {
      id: 16,
      question: "Quel est le rôle des États-Unis en Amérique latine selon la 'Big Stick' policy ?",
      answer: "La politique du 'gros bâton' (Theodore Roosevelt) justifiait les interventions militaires américaines pour 'protéger' les intérêts économiques des États-Unis en Amérique latine, menant à de nombreuses ingérences (Panama, Nicaragua, République Dominicaine)."
    },
    {
      id: 17,
      question: "Qu'est-ce que le 'supercycle des matières premières' ?",
      answer: "Le supercycle (2003-2013) a vu les prix des matières premières exploser grâce à la demande chinoise. Il a généré une croissance économique importante en Amérique latine mais aussi des vulnérabilités quand les prix ont chuté, causant crises budgétaires et récessions."
    },
    {
      id: 18,
      question: "Quelle est la situation de l'immigration en Amérique latine ?",
      answer: "L'Amérique latine est marquée par d'importants flux migratoires : émigration vers les États-Unis (Mexique, Amérique centrale), immigration vénézuélienne (Colombie, Pérou), et réfugiés climatiques (Amérique centrale). Le Mexique est un pays de transit majeur."
    },
    {
      id: 19,
      question: "Quels sont les principaux acteurs régionaux émergents en Amérique latine ?",
      answer: "1. Brésil (puissance économique et démographique)\n2. Mexique (intégration nord-américaine via USMCA)\n3. Chili (stabilité politique et économique)\n4. Colombie (transition post-conflit)\n5. Pérou (diversité économique)"
    },
    {
      id: 20,
      question: "Quelle est la superficie de l'Amérique latine et ses principales caractéristiques géographiques ?",
      answer: "L'Amérique latine couvre 20,5 millions de km² (13% des terres émergées). Elle comprend des Andes majestueuses, la forêt amazonienne, des déserts (Atacama), des hauts plateaux (Altiplano) et des archipels caraïbes."
    },
    {
      id: 21,
      question: "Qu'est-ce que le 'syndrome hollandais' appliqué à l'Amérique latine ?",
      answer: "Le syndrome hollandais (Dutch Disease) désigne la malédiction des ressources naturelles : les exportations de matières premières font monter la monnaie locale, rendant les autres secteurs non compétitifs et créant une économie mono-exportatrice vulnérable."
    },
    {
      id: 22,
      question: "Quelle est la situation démocratique en Amérique latine ?",
      answer: "L'Amérique latine a connu une vague de démocratisation dans les années 1980-1990 (fin des dictatures). Cependant, elle reste vulnérable aux coups d'État (Bolivie 2019, Pérou 2022), aux populismes autoritaires et aux crises institutionnelles."
    },
    {
      id: 23,
      question: "Quel est l'impact des changements climatiques en Amérique latine ?",
      answer: "L'Amérique latine est particulièrement vulnérable : fonte des glaciers andins, désertification (Sahel latino-américain), inondations côtières, cyclones plus intenses. L'Amazonie joue un rôle crucial dans la régulation climatique mondiale."
    },
    {
      id: 24,
      question: "Qu'est-ce que la 'rivalité sino-américaine' en Amérique latine ?",
      answer: "Les États-Unis et la Chine se disputent l'influence économique en Amérique latine. Les USA privilégient la sécurité et le commerce (ALCA/USMCA), tandis que la Chine offre des investissements sans conditions (Initiative Ceinture et Route)."
    },
    {
      id: 25,
      question: "Quelles sont les perspectives d'avenir pour l'Amérique latine ?",
      answer: "1. Consolidation démocratique et institutionnelle\n2. Diversification économique (économie verte, numérique)\n3. Intégration régionale renforcée\n4. Transition démographique favorable (dividende démographique)\n5. Leadership environnemental (Amazonie, biodiversité)"
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
            <Link to="/formation/geopolitique/amerique-latine" className="hover:text-gray-900 transition-colors">
              Amérique latine
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
            Flashcards - Amérique latine
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Révisez les concepts clés de l'Amérique latine avec ces flashcards interactives.
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

export default AmeriqueLatineFlashcardsPage;
