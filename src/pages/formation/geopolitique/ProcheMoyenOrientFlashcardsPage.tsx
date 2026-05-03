import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, RotateCcw, ChevronLeft, ChevronRight as NextIcon, Eye, EyeOff } from 'lucide-react';

const ProcheMoyenOrientFlashcardsPage = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showAllCards, setShowAllCards] = useState(false);

  // Flashcards basées sur le contenu détaillé du Proche et Moyen-Orient
  const flashcards = [
    {
      id: 1,
      question: "Quel est le titre principal de la dissertation sur le Proche et Moyen-Orient ?",
      answer: "Le Proche et Moyen-Orient : une région aux frontières floues, épicentre des tensions mondiales entre puissances régionales et enjeux stratégiques."
    },
    {
      id: 2,
      question: "Quels sont les trois badges décrivant les thèmes principaux du Proche et Moyen-Orient ?",
      answer: "États et territoires, Cultures et sociétés, Géopolitique et conflits."
    },
    {
      id: 3,
      question: "Quelle est la définition officielle du Moyen-Orient selon le cours ?",
      answer: "Le Moyen-Orient est une région aux frontières fluctuantes, englobant l'Asie occidentale et l'Afrique du Nord, où se rencontrent des enjeux énergétiques, religieux et stratégiques majeurs. Il est marqué par la rivalité entre puissances régionales (Iran, Turquie, Arabie Saoudite), l'intervention des grandes puissances et des conflits récurrents, faisant de cette zone un épicentre des tensions mondiales."
    },
    {
      id: 4,
      question: "Quelles sont les différentes terminologies utilisées pour désigner la région ?",
      answer: "1. Moyen-Orient (Middle East) - expression occidentale popularisée après la Seconde Guerre mondiale\n2. Proche-Orient - terme européen désignant le Levant (Liban, Syrie, Palestine, Irak)\n3. MENA (Middle East and North Africa) - inclut l'Afrique du Nord\n4. Grand Moyen-Orient - vision américaine élargie incluant l'Afghanistan et le Pakistan\n5. Arc de crises - zone d'instabilité s'étendant de l'Afrique du Nord à l'Asie centrale"
    },
    {
      id: 5,
      question: "Quelles sont les trois grandes puissances régionales non arabes du Moyen-Orient ?",
      answer: "1. Turquie - puissance militaire et économique, ambition néo-ottomane sous Erdogan\n2. Iran - puissance chiite, influence en Irak, Syrie, Liban et Yémen\n3. Égypte - puissance démographique et militaire, rôle central dans le monde arabe"
    },
    {
      id: 6,
      question: "Quelles sont les autres puissances majeures du Moyen-Orient ?",
      answer: "1. Arabie Saoudite - leader du monde sunnite, puissance pétrolière, rival de l'Iran\n2. Israël - puissance militaire et technologique, alliances avec les États-Unis et les pays du Golfe\n3. Qatar et Émirats arabes unis - influence diplomatique et financière (soft power, Al Jazeera, investissements)"
    },
    {
      id: 7,
      question: "Quelles sont les principales instabilités internes du Moyen-Orient ?",
      answer: "1. Guerres civiles et conflits ethniques (Syrie, Yémen, Libye, Irak)\n2. Crises économiques et mal-développement (Liban, Irak)\n3. Inégalités sociales et contestations (Printemps arabes, révoltes au Soudan et en Iran)"
    },
    {
      id: 8,
      question: "Quelles sont les principales instabilités externes du Moyen-Orient ?",
      answer: "1. Interventions militaires étrangères (États-Unis en Irak, Russie en Syrie)\n2. Conflits par procuration (guerre froide Arabie Saoudite/Iran)\n3. Ingérences diplomatiques et économiques des grandes puissances"
    },
    {
      id: 9,
      question: "Quels sont les accords historiques qui ont façonné le partage du Moyen-Orient ?",
      answer: "1. Accords Sykes-Picot (1916) - découpage de la région par France et Royaume-Uni\n2. Traité de Sèvres (1920) - démantèlement de l'Empire ottoman\n3. Conférence de San Remo (1920) - confirmation des mandats européens\n4. Accords d'Achnacarry (1928) - cartel pétrolier occidental\n5. Pacte de Quincy (1945) - protection saoudienne contre accès privilégié au pétrole"
    },
    {
      id: 10,
      question: "Quelle est l'importance énergétique du Moyen-Orient ?",
      answer: "Le Moyen-Orient détient plus de 40% des réserves mondiales de pétrole et une part significative des ressources gazières. Dès la révolution industrielle, les grandes puissances cherchent à sécuriser leur approvisionnement énergétique."
    },
    {
      id: 11,
      question: "Quelle est la thèse de Pierre Blanc et Jean-Paul Chagnollaud sur le Moyen-Orient ?",
      answer: "Dans 'L'invention tragique du Moyen-Orient' (2017), ils parlent d'une 'invention tragique' illustrant la fragmentation territoriale et ses conséquences, avec des frontières artificielles ne tenant pas compte des réalités ethniques et religieuses."
    },
    {
      id: 12,
      question: "Quelle est la thèse de Dominique Moïsi sur la géopolitique émotionnelle du Moyen-Orient ?",
      answer: "Dans 'La géopolitique de l'émotion' (2009), Moïsi souligne que le Moyen-Orient est marqué par un sentiment d'humiliation collective, nourri par des conflits récurrents et des ingérences étrangères."
    },
    {
      id: 13,
      question: "Qu'est-ce que la 'malédiction des matières premières' (Resource Curse) ?",
      answer: "Concept développé par Richard Auty (1993) : les richesses naturelles servent souvent à financer des régimes autoritaires sans générer un développement industriel ou technologique durable."
    },
    {
      id: 14,
      question: "Quelles sont les principales guerres civiles actuelles au Moyen-Orient ?",
      answer: "1. Syrie (depuis 2011) - oppose le régime Assad aux rebelles et djihadistes, avec interventions russe, iranienne et turque\n2. Yémen - opposé Houthis (soutenus par l'Iran) et gouvernement (soutenu par Arabie Saoudite)\n3. Libye - guerre entre factions rivales après la chute de Kadhafi (2011)"
    },
    {
      id: 15,
      question: "Quels sont les principaux conflits territoriaux non résolus ?",
      answer: "1. Conflit israélo-palestinien (depuis 1948)\n2. Question kurde (peuple réparti entre Turquie, Irak, Iran, Syrie)\n3. Revendications territoriales multiples au Moyen-Orient"
    },
    {
      id: 16,
      question: "Quelle est la stratégie Vision 2030 de l'Arabie Saoudite ?",
      answer: "Plan de diversification économique lancé par Mohammed Ben Salmane pour réduire la dépendance au pétrole et développer d'autres secteurs (tourisme, technologie, industrie)."
    },
    {
      id: 17,
      question: "Quelles sont les interventions étrangères majeures au Moyen-Orient ?",
      answer: "1. États-Unis : Irak (2003), soutien aux monarchies du Golfe, retrait d'Afghanistan (2021)\n2. Russie : alliée du régime syrien, base militaire à Tartous\n3. Chine : investissements via les Nouvelles Routes de la Soie"
    },
    {
      id: 18,
      question: "Quel paradoxe soulignent les ingérences étrangères au Moyen-Orient ?",
      answer: "Intervention en Irak (2003) a déstabilisé le pays et favorisé Daech. Retrait d'Afghanistan (2021) a laissé place aux Talibans. Absence d'ingérence en Syrie a laissé place au chaos prolongé."
    },
    {
      id: 19,
      question: "Quels sont les défis économiques majeurs du Moyen-Orient ?",
      answer: "1. Dépendance aux hydrocarbures malgré la rente pétrolière\n2. Difficulté de diversification économique\n3. Inégalités sociales (chômage des jeunes >30% dans certains pays)\n4. Disparités urbain/rural"
    },
    {
      id: 20,
      question: "Quelle est la superficie du Moyen-Orient et ses principales caractéristiques géographiques ?",
      answer: "Le Moyen-Orient couvre environ 7 millions de km². Il est marqué par des déserts (Sahara, Arabie), des chaînes montagneuses (Zagros, Taurus), des fleuves importants (Nil, Euphrate, Tigre) et des détroits stratégiques (Ormuz, Bab el-Mandeb)."
    },
    {
      id: 21,
      question: "Quelle est la population du Moyen-Orient et ses caractéristiques démographiques ?",
      answer: "Le Moyen-Orient compte environ 400 millions d'habitants. La région est marquée par une jeunesse importante (âge médian autour de 25 ans), une urbanisation rapide et des flux migratoires importants."
    },
    {
      id: 22,
      question: "Quelles sont les principales religions présentes au Moyen-Orient ?",
      answer: "1. Islam (sunnite majoritaire, chiite en Iran et Irak)\n2. Christianisme (minorités importantes au Liban, Égypte, Syrie)\n3. Judaïsme (Israël)\n4. Autres (druzes, yazidis, etc.)"
    },
    {
      id: 23,
      question: "Qu'est-ce que le détroit d'Ormuz et son importance stratégique ?",
      answer: "Le détroit d'Ormuz relie le golfe Persique à l'océan Indien. Il représente environ 20% du commerce pétrolier mondial et constitue un point de tension géopolitique majeur entre l'Iran et les pays occidentaux."
    },
    {
      id: 24,
      question: "Quelle est la signification historique de la Nakba ?",
      answer: "La Nakba (1948) désigne 'la catastrophe' pour les Palestiniens : l'expulsion ou la fuite de 750 000 Arabes palestiniens lors de la création de l'État d'Israël, marquant le début du conflit israélo-palestinien."
    },
    {
      id: 25,
      question: "Qu'est-ce que l'OPEP et son rôle dans l'économie mondiale ?",
      answer: "L'Organisation des pays exportateurs de pétrole (OPEP), créée en 1960, regroupe 13 pays producteurs. Elle coordonne les politiques pétrolières pour stabiliser les prix du pétrole sur les marchés mondiaux."
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
            <Link to="/formation/geopolitique/proche-moyen-orient" className="hover:text-gray-900 transition-colors">
              Proche et Moyen-Orient
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
            Flashcards - Proche et Moyen-Orient
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Révisez les concepts clés du Proche et Moyen-Orient avec ces flashcards interactives.
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

export default ProcheMoyenOrientFlashcardsPage;
