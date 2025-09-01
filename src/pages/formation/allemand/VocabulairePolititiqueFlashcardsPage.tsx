import React, { useState, useEffect, useCallback } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Home, 
  ChevronRight, 
  RotateCcw, 
  Shuffle, 
  ChevronLeft, 
  ChevronRight as ChevronRightIcon,
  BookOpen,
  Volume2,
  Eye,
  EyeOff,
  Lightbulb
} from 'lucide-react';

interface VocabularyCard {
  id: number;
  french: string;
  german: string;
  category: string;
}

const VocabulairePolititiqueFlashcardsPage = () => {
  const vocabularyData: VocabularyCard[] = [
    { id: 1, french: "le gouvernement", german: "die Regierung", category: "Institutions" },
    { id: 2, french: "démocratique", german: "demokratisch", category: "Système politique" },
    { id: 3, french: "l'alliance", german: "die Allianz", category: "Relations" },
    { id: 4, french: "l'électeur", german: "der Wähler", category: "Élections" },
    { id: 5, french: "l'élection", german: "die Wahl, -en", category: "Élections" },
    { id: 6, french: "l'élection législative", german: "die Parlementswahl", category: "Élections" },
    { id: 7, french: "l'élection présidentielle", german: "die Präsidentenwahl", category: "Élections" },
    { id: 8, french: "l'inflation", german: "die Inflation", category: "Économie" },
    { id: 9, french: "l'anarchie", german: "die Anarchie", category: "Système politique" },
    { id: 10, french: "l'opposition (politique)", german: "die politische Opposition", category: "Politique" },
    { id: 11, french: "la campagne électorale", german: "die politische Kampagne", category: "Élections" },
    { id: 12, french: "la candidature", german: "die Kandidatur", category: "Élections" },
    { id: 13, french: "la coalition", german: "die Koalition", category: "Gouvernement" },
    { id: 14, french: "la crise", german: "die Krise", category: "Société" },
    { id: 15, french: "la déclaration des droits de l'Homme", german: "die Erklärung der Menschenrechte", category: "Droits" },
    { id: 16, french: "la démocratie", german: "die Demokratie", category: "Système politique" },
    { id: 17, french: "la dictature", german: "die Diktatur", category: "Système politique" },
    { id: 18, french: "la diplomatie", german: "die Diplomatie", category: "Relations internationales" },
    { id: 19, french: "la loi", german: "das Gesetz", category: "Droit" },
    { id: 20, french: "la majorité", german: "die Mehrheit", category: "Politique" },
    { id: 21, french: "la politique", german: "die Politik", category: "Politique" },
    { id: 22, french: "la politique étrangère", german: "die Außenpolitik", category: "Relations internationales" },
    { id: 23, french: "la politique intérieure", german: "die Innenpolitik", category: "Politique" },
    { id: 24, french: "la relation diplomatique", german: "die diplomatische Beziehung", category: "Relations internationales" },
    { id: 25, french: "la république", german: "die Republik", category: "Système politique" },
    { id: 26, french: "le chancelier", german: "der Kanzler", category: "Gouvernement" },
    { id: 27, french: "le communisme", german: "der Kommunismus", category: "Idéologies" },
    { id: 28, french: "le démocrate", german: "der Demokrat", category: "Acteurs politiques" },
    { id: 29, french: "le député", german: "der Abgeordnete", category: "Institutions" },
    { id: 30, french: "le diplomate", german: "der Diplomat", category: "Relations internationales" },
    { id: 31, french: "le droit de véto", german: "das Vetorecht", category: "Droits" },
    { id: 32, french: "le droit de vote", german: "das Wahlrecht", category: "Droits" },
    { id: 33, french: "le ministère", german: "das Ministerium", category: "Institutions" },
    { id: 34, french: "le nationaliste", german: "der Nationalist", category: "Idéologies" },
    { id: 35, french: "le parti politique", german: "die politische Partei", category: "Partis" },
    { id: 36, french: "le parti conservateur", german: "die konservative Partei", category: "Partis" },
    { id: 37, french: "le parti libéral", german: "die liberale Partei", category: "Partis" },
    { id: 38, french: "le pouvoir", german: "die Macht", category: "Politique" },
    { id: 39, french: "le premier tour", german: "die erste Runde", category: "Élections" },
    { id: 40, french: "le résultat", german: "das Ergebnis", category: "Élections" },
    { id: 41, french: "le socialisme", german: "der Sozialismus", category: "Idéologies" },
    { id: 42, french: "le sondage", german: "die Umfrage", category: "Opinion" },
    { id: 43, french: "le système électoral", german: "das Wahlsystem", category: "Élections" },
    { id: 44, french: "le système parlementaire", german: "das parlamentarische System", category: "Institutions" },
    { id: 45, french: "le taux de chômage", german: "die Arbeitslosenquote", category: "Économie" },
    { id: 46, french: "les impôts", german: "die Steuern", category: "Économie" },
    { id: 47, french: "les républicains", german: "die Republikaner", category: "Partis" },
    { id: 48, french: "adhérer", german: "haften", category: "Actions politiques" },
    { id: 49, french: "changer de gouvernement", german: "die Regierung wechseln", category: "Actions politiques" },
    { id: 50, french: "conseiller", german: "beraten", category: "Actions politiques" },
    { id: 51, french: "débattre", german: "(über etwas) diskutieren", category: "Actions politiques" },
    { id: 52, french: "dénoncer", german: "denunzieren", category: "Actions politiques" },
    { id: 53, french: "diriger le pays", german: "regieren", category: "Actions politiques" },
    { id: 54, french: "élire", german: "wählen", category: "Actions politiques" },
    { id: 55, french: "faire campagne pour qqch", german: "eine Kampagne für etw führen", category: "Actions politiques" },
    { id: 56, french: "négocier", german: "verhandeln", category: "Actions politiques" },
    { id: 57, french: "promettre", german: "versprechen", category: "Actions politiques" },
    { id: 58, french: "nommer", german: "benennen", category: "Actions politiques" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [cards, setCards] = useState(vocabularyData);
  const [progress, setProgress] = useState(0);

  // Calcul du progrès
  useEffect(() => {
    setProgress(((currentIndex + 1) / cards.length) * 100);
  }, [currentIndex, cards.length]);

  // Navigation avec les touches
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'Space':
        case 'Enter':
          event.preventDefault();
          setIsFlipped(!isFlipped);
          break;
        case 'ArrowLeft':
          event.preventDefault();
          goToPrevious();
          break;
        case 'ArrowRight':
          event.preventDefault();
          goToNext();
          break;
        case 'KeyS':
          event.preventDefault();
          shuffleCards();
          break;
        case 'KeyR':
          event.preventDefault();
          resetCards();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isFlipped, currentIndex]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
    setIsFlipped(false);
  }, [cards.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    setIsFlipped(false);
  }, [cards.length]);

  const shuffleCards = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const resetCards = () => {
    setCards(vocabularyData);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const currentCard = cards[currentIndex];

  const getCategoryColor = (category: string) => {
    const colors = {
      "Institutions": "bg-blue-100 text-blue-800",
      "Système politique": "bg-purple-100 text-purple-800",
      "Relations": "bg-green-100 text-green-800",
      "Élections": "bg-red-100 text-red-800",
      "Économie": "bg-yellow-100 text-yellow-800",
      "Politique": "bg-indigo-100 text-indigo-800",
      "Gouvernement": "bg-blue-100 text-blue-800",
      "Société": "bg-gray-100 text-gray-800",
      "Droits": "bg-emerald-100 text-emerald-800",
      "Droit": "bg-emerald-100 text-emerald-800",
      "Relations internationales": "bg-teal-100 text-teal-800",
      "Idéologies": "bg-amber-100 text-orange-800",
      "Acteurs politiques": "bg-pink-100 text-pink-800",
      "Partis": "bg-violet-100 text-violet-800",
      "Opinion": "bg-cyan-100 text-cyan-800",
      "Actions politiques": "bg-lime-100 text-lime-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-gray-600">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/allemand" className="hover:text-gray-900 transition-colors">
              Formation Allemand
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/allemand/civilisation" className="hover:text-gray-900 transition-colors">
              Civilisation
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Vocabulaire Politique</span>
          </div>
        </div>
      </nav>

      {/* Arrière-plan animé */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* En-tête */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <div className="p-3 rounded-lg bg-blue-600 text-white">
              <BookOpen className="h-9 w-9" />
            </div>
            Vocabulaire Politique Allemand
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Maîtrisez le vocabulaire politique essentiel avec des flashcards interactives
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">{cards.length} mots</Badge>
            <Badge variant="outline">Module 1 - Deutsche Politik</Badge>
            <Badge className="bg-blue-600">Flashcards</Badge>
          </div>
        </div>

        {/* Barre de progrès */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Progression</span>
            <span className="text-sm font-medium text-orange-800">{currentIndex + 1} / {cards.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-500 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Contrôles principaux */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="flex justify-center gap-3 mb-4">
            <Button
              onClick={shuffleCards}
              variant="outline"
              className="flex items-center gap-2 bg-white/80 backdrop-blur-sm hover:bg-white hover:scale-105 transition-all duration-200"
            >
              <Shuffle className="h-4 w-4" />
              Mélanger (S)
            </Button>
            <Button
              onClick={resetCards}
              variant="outline"
              className="flex items-center gap-2 bg-white/80 backdrop-blur-sm hover:bg-white hover:scale-105 transition-all duration-200"
            >
              <RotateCcw className="h-4 w-4" />
              Recommencer (R)
            </Button>
            <Button
              onClick={() => setShowHelp(!showHelp)}
              variant="outline"
              className="flex items-center gap-2 bg-white/80 backdrop-blur-sm hover:bg-white hover:scale-105 transition-all duration-200"
            >
              <Lightbulb className="h-4 w-4" />
              Aide
            </Button>
          </div>

          {/* Aide aux raccourcis */}
          {showHelp && (
            <Card className="mb-4 bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <h3 className="font-semibold text-blue-900 mb-3">Raccourcis clavier :</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-blue-700">
                  <div><kbd className="bg-blue-100 px-2 py-1 rounded">Espace</kbd> ou <kbd className="bg-blue-100 px-2 py-1 rounded">Entrée</kbd> : Retourner la carte</div>
                  <div><kbd className="bg-blue-100 px-2 py-1 rounded">←</kbd> <kbd className="bg-blue-100 px-2 py-1 rounded">→</kbd> : Navigation</div>
                  <div><kbd className="bg-blue-100 px-2 py-1 rounded">S</kbd> : Mélanger</div>
                  <div><kbd className="bg-blue-100 px-2 py-1 rounded">R</kbd> : Recommencer</div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Carte principale */}
        <div className="max-w-2xl mx-auto mb-6">
          <Card 
            className="h-80 cursor-pointer transform transition-all duration-500 hover:scale-105 bg-white/90 backdrop-blur-sm shadow-xl"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <CardContent className="h-full flex flex-col justify-center items-center p-8 relative">
              {/* Badge catégorie */}
              <div className="absolute top-4 right-4">
                <Badge className={getCategoryColor(currentCard.category)} variant="secondary">
                  {currentCard.category}
                </Badge>
              </div>

              {/* Indicateur de face */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                {isFlipped ? (
                  <>
                    <Eye className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-green-600">Allemand</span>
                  </>
                ) : (
                  <>
                    <EyeOff className="h-4 w-4 text-orange-800" />
                    <span className="text-sm font-medium text-orange-800">Français</span>
                  </>
                )}
              </div>

              {/* Contenu de la carte */}
              <div className="text-center space-y-4">
                <div className="text-3xl font-bold text-gray-900 mb-6">
                  {isFlipped ? currentCard.german : currentCard.french}
                </div>
                
                {isFlipped && (
                  <div className="text-lg text-gray-600 bg-gray-50 rounded-lg p-4">
                    <strong>Français :</strong> {currentCard.french}
                  </div>
                )}
                
                <div className="text-sm text-gray-500 flex items-center justify-center gap-2">
                  <Volume2 className="h-4 w-4" />
                  Cliquez ou appuyez sur Espace pour retourner
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center">
            <Button
              onClick={goToPrevious}
              variant="outline"
              className="flex items-center gap-2 bg-white/80 backdrop-blur-sm hover:bg-white px-6 py-3"
            >
              <ChevronLeft className="h-5 w-5" />
              Précédent
            </Button>
            
            <div className="text-sm text-gray-600 bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2">
              {currentIndex + 1} sur {cards.length}
            </div>
            
            <Button
              onClick={goToNext}
              variant="outline"
              className="flex items-center gap-2 bg-white/80 backdrop-blur-sm hover:bg-white px-6 py-3"
            >
              Suivant
              <ChevronRightIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Section informative */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">💡 Conseils pour l'apprentissage</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-blue-800">Technique de révision :</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Commencez par le français (plus familier)</li>
                    <li>• Tentez de deviner l'allemand avant de retourner</li>
                    <li>• Répétez à voix haute pour la prononciation</li>
                    <li>• Utilisez les catégories pour regrouper les concepts</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-blue-800">Pour les concours :</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Vocabulaire essentiel pour les dissertations</li>
                    <li>• Termes techniques du système politique allemand</li>
                    <li>• Base indispensable pour Module 1 - Deutsche Politik</li>
                    <li>• Révisez régulièrement avec les flashcards</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default VocabulairePolititiqueFlashcardsPage;