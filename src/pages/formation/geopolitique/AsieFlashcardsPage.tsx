import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home, RotateCcw, ChevronLeft, ChevronRight as NextIcon, Eye, EyeOff } from 'lucide-react';

const AsieFlashcardsPage = () => {
  const [currentCardIndex, setCurrentCardIndex] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);
  const [showAllCards, setShowAllCards] = useState(false);

  // Données temporaires pour les flashcards - à remplacer par le vrai contenu
  const flashcards = [
    {
      id: 1,
      question: "Quelle est la population de l'Asie ?",
      answer: "L'Asie compte environ 4,6 milliards d'habitants, soit environ 59% de la population mondiale. La Chine et l'Inde concentrent à elles seules près de 2,8 milliards d'habitants."
    },
    {
      id: 2,
      question: "Qu'est-ce que l'ASEAN ?",
      answer: "L'ASEAN (Association of Southeast Asian Nations) est une organisation régionale créée en 1967 regroupant 10 pays d'Asie du Sud-Est : Indonésie, Thaïlande, Singapour, Malaisie, Philippines, Vietnam, Birmanie, Cambodge, Laos et Brunei. Elle vise à promouvoir la paix, la stabilité et la coopération économique."
    },
    {
      id: 3,
      question: "Quelle est la stratégie chinoise des 'Nouvelles Routes de la Soie' ?",
      answer: "Les 'Nouvelles Routes de la Soie' (Belt and Road Initiative) constituent la principale initiative géopolitique chinoise depuis 2013. Elles visent à créer un réseau d'infrastructures reliant la Chine à l'Asie, l'Europe et l'Afrique, représentant plus de 900 milliards de dollars d'investissements."
    },
    {
      id: 4,
      question: "Qu'est-ce que la 'ligne des neuf traits' chinoise ?",
      answer: "La 'ligne des neuf traits' est une revendication territoriale chinoise en mer de Chine méridionale. Elle englobe environ 90% de cette mer stratégique, créant des tensions avec le Vietnam, les Philippines, la Malaisie et Brunei sur des îles et des eaux riches en ressources."
    },
    {
      id: 5,
      question: "Quel rôle joue l'Inde dans la géopolitique asiatique ?",
      answer: "L'Inde est la démocratie la plus peuplée du monde et une puissance régionale émergente. Elle est en compétition avec la Chine pour l'hégémonie régionale, développe ses capacités nucléaires et militaires, et joue un rôle pivot entre l'Asie et l'Occident."
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
            <Link to="/formation/geopolitique/asie" className="hover:text-gray-900 transition-colors">
              Asie
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
            Flashcards - Asie
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Révisez les concepts clés de l'Asie avec ces flashcards interactives.
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

export default AsieFlashcardsPage;
