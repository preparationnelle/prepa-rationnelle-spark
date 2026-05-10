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

const VocabulaireGeschichteFlashcardsPage = () => {
  const vocabularyData: VocabularyCard[] = [
    { id: 1, french: "l'histoire", german: "die Geschichte", category: "Histoire générale" },
    { id: 2, french: "la culture du souvenir", german: "die Erinnerungskultur", category: "Culture mémorielle" },
    { id: 3, french: "l'histoire allemande", german: "die deutsche Geschichte", category: "Histoire allemande" },
    { id: 4, french: "le 20e siècle", german: "das 20. Jahrhundert", category: "Périodes historiques" },
    { id: 5, french: "la confrontation avec le passé", german: "die Auseinandersetzung mit der Vergangenheit", category: "Travail de mémoire" },
    { id: 6, french: "la division de l'Allemagne", german: "die Teilung Deutschlands", category: "Division allemande" },
    { id: 7, french: "la réunification", german: "die Wiedervereinigung", category: "Réunification" },
    { id: 8, french: "la Seconde Guerre mondiale", german: "der Zweite Weltkrieg", category: "Seconde Guerre mondiale" },
    { id: 9, french: "l'Holocauste", german: "der Holocaust", category: "Holocauste" },
    { id: 10, french: "le travail de mémoire", german: "die Vergangenheitsbewältigung", category: "Travail de mémoire" },
    { id: 11, french: "la RDA (République démocratique allemande)", german: "die DDR (Deutsche Demokratische Republik)", category: "RDA" },
    { id: 12, french: "la dictature du SED", german: "die SED-Diktatur", category: "Régime DDR" },
    { id: 13, french: "la vie en RDA", german: "das Leben in der DDR", category: "Société DDR" },
    { id: 14, french: "le traitement (du passé)", german: "die Aufarbeitung", category: "Travail de mémoire" },
    { id: 15, french: "Berlin comme symbole", german: "Berlin als Symbol", category: "Symboles historiques" },
    { id: 16, french: "l'histoire allemande", german: "die deutsche Geschichte", category: "Histoire allemande" },
    { id: 17, french: "les procès de Nuremberg", german: "die Nürnberger Prozesse", category: "Justice post-guerre" },
    { id: 18, french: "le leitmotiv", german: "das Leitmotiv", category: "Concepts mémoriels" },
    { id: 19, french: "Plus jamais la guerre", german: "Nie wieder Krieg", category: "Devises mémorielles" },
    { id: 20, french: "les monuments", german: "die Denkmäler", category: "Lieux de mémoire" },
    { id: 21, french: "les sites commémoratifs", german: "die Gedenkstätten", category: "Lieux de mémoire" },
    { id: 22, french: "la politique de mémoire", german: "die Erinnerungspolitik", category: "Politique mémorielle" },
    { id: 23, french: "les différences Est/Ouest", german: "die Unterschiede Ost/West", category: "Divisions mémorielles" },
    { id: 24, french: "la mémoire historique", german: "das historische Gedächtnis", category: "Mémoire collective" },
    { id: 25, french: "le 3 octobre", german: "der 3. Oktober", category: "Dates commémoratives" },
    { id: 26, french: "la Journée de l'Unité allemande", german: "der Tag der Deutschen Einheit", category: "Fêtes nationales" },
    { id: 27, french: "la division", german: "die Teilung", category: "Division allemande" },
    { id: 28, french: "la Guerre froide", german: "das Kalter Krieg", category: "Guerre froide" },
    { id: 29, french: "le Mur de Berlin", german: "die Berliner Mauer", category: "Symboles de division" },
    { id: 30, french: "la chute du Mur", german: "der Mauerfall", category: "Événements 1989" },
    { id: 31, french: "le tournant (réunification)", german: "die Wende", category: "Réunification" },
    { id: 32, french: "l'Allemagne de l'Est", german: "die Ostdeutschland", category: "Géographie politique" },
    { id: 33, french: "l'Allemagne de l'Ouest", german: "die Westdeutschland", category: "Géographie politique" },
    { id: 34, french: "la RFA (République fédérale d'Allemagne)", german: "die BRD (Bundesrepublik Deutschland)", category: "RFA" },
    { id: 35, french: "le national-socialisme", german: "der Nationalsozialismus", category: "Nazisme" },
    { id: 36, french: "l'époque nazie", german: "die NS-Zeit", category: "Périodes nazies" },
    { id: 37, french: "les camps de concentration", german: "die Konzentrationslager", category: "Système concentrationnaire" },
    { id: 38, french: "Auschwitz", german: "das Auschwitz", category: "Camps emblématiques" },
    { id: 39, french: "la Shoah", german: "die Shoah", category: "Holocauste" },
    { id: 40, french: "la persécution des Juifs", german: "die Judenverfolgung", category: "Persécutions nazies" },
    { id: 41, french: "les crimes de guerre", german: "die Kriegsverbrechen", category: "Crimes de guerre" },
    { id: 42, french: "la dénazification", german: "die Entnazifizierung", category: "Dénazification" },
    { id: 43, french: "les réparations", german: "die Wiedergutmachung", category: "Réparations" },
    { id: 44, french: "la Stasi", german: "die Stasi", category: "Surveillance DDR" },
    { id: 45, french: "la surveillance", german: "die Überwachung", category: "Surveillance DDR" },
    { id: 46, french: "l'opposition en RDA", german: "die Opposition in der DDR", category: "Résistance DDR" },
    { id: 47, french: "la Révolution pacifique", german: "die Friedliche Revolution", category: "Révolution 1989" },
    { id: 48, french: "les manifestations du lundi", german: "die Montagsdemonstrationen", category: "Mouvements 1989" },
    { id: 49, french: "la place Alexander", german: "der Alexanderplatz", category: "Lieux berlinois" },
    { id: 50, french: "la capitale", german: "die Hauptstadt", category: "Géographie politique" },
    { id: 51, french: "la Porte de Brandebourg", german: "das Brandenburger Tor", category: "Monuments berlinois" },
    { id: 52, french: "le Reichstag", german: "das Reichstag", category: "Monuments berlinois" },
    { id: 53, french: "la division de Berlin", german: "die Teilung Berlins", category: "Berlin divisé" },
    { id: 54, french: "les Alliés", german: "die Alliierten", category: "Acteurs post-guerre" },
    { id: 55, french: "la conférence de Potsdam", german: "die Potsdamer Konferenz", category: "Conférences alliées" },
    { id: 56, french: "la conférence de Yalta", german: "die Jalta-Konferenz", category: "Conférences alliées" },
    { id: 57, french: "les zones d'occupation", german: "die Besatzungszonen", category: "Occupation alliée" },
    { id: 58, french: "le pont aérien", german: "die Luftbrücke", category: "Crise berlinoise" },
    { id: 59, french: "le Rideau de fer", german: "der Eiserne Vorhang", category: "Guerre froide" },
    { id: 60, french: "le blocus", german: "die Blockade", category: "Crise berlinoise" },
    { id: 61, french: "la politique orientale", german: "die Ostpolitik", category: "Politique étrangère" },
    { id: 62, french: "Willy Brandt", german: "der Willy Brandt", category: "Figures politiques" },
    { id: 63, french: "Helmut Kohl", german: "der Helmut Kohl", category: "Figures politiques" },
    { id: 64, french: "les traités Deux-plus-Quatre", german: "die Zwei-plus-Vier-Verträge", category: "Traités unification" },
    { id: 65, french: "l'unité", german: "die Einheit", category: "Unification" },
    { id: 66, french: "l'hymne national", german: "die Nationalhymne", category: "Symboles nationaux" },
    { id: 67, french: "le drapeau", german: "die Flagge", category: "Symboles nationaux" },
    { id: 68, french: "la Loi fondamentale", german: "das Grundgesetz", category: "Droit constitutionnel" },
    { id: 69, french: "la constitution", german: "die Verfassung", category: "Droit constitutionnel" },
    { id: 70, french: "la querelle des historiens", german: "die Historikerstreit", category: "Débats historiques" },
    { id: 71, french: "le débat Goldhagen", german: "die Goldhagen-Debatte", category: "Débats historiques" },
    { id: 72, french: "la Wehrmacht", german: "die Wehrmacht", category: "Forces armées nazies" },
    { id: 73, french: "les SS", german: "die SS", category: "Organisations nazies" },
    { id: 74, french: "la Gestapo", german: "die Gestapo", category: "Organisations nazies" },
    { id: 75, french: "Adolf Hitler", german: "der Adolf Hitler", category: "Dirigeants nazis" },
    { id: 76, french: "Joseph Goebbels", german: "der Joseph Goebbels", category: "Dirigeants nazis" },
    { id: 77, french: "la propagande", german: "die Propaganda", category: "Méthodes nazies" },
    { id: 78, french: "les lois raciales", german: "die Rassengesetze", category: "Législation nazie" },
    { id: 79, french: "la Solution finale", german: "die Endlösung", category: "Génocide" },
    { id: 80, french: "les survivants", german: "die Überlebenden", category: "Témoins et victimes" },
    { id: 81, french: "les témoins", german: "die Zeugen", category: "Témoins et victimes" },
    { id: 82, french: "les monuments d'avertissement", german: "die Mahnmale", category: "Monuments mémoriels" },
    { id: 83, french: "le mémorial de l'Holocauste", german: "das Holocaust-Mahnmal", category: "Mémoriaux spécifiques" },
    { id: 84, french: "la Topographie de la terreur", german: "die Topographie des Terrors", category: "Musées mémoriels" },
    { id: 85, french: "Sachsenhausen", german: "die Sachsenhausen", category: "Camps historiques" },
    { id: 86, french: "Buchenwald", german: "die Buchenwald", category: "Camps historiques" },
    { id: 87, french: "le traitement de la RDA", german: "die DDR-Aufarbeitung", category: "Traitement DDR" },
    { id: 88, french: "l'autorité Gauck", german: "die Gauck-Behörde", category: "Institutions mémorielles" },
    { id: 89, french: "les dossiers de la Stasi", german: "die Stasi-Unterlagen", category: "Archives DDR" },
    { id: 90, french: "les victimes", german: "die Opfer", category: "Victimes historiques" },
    { id: 91, french: "les coupables", german: "die Täter", category: "Responsabilités" },
    { id: 92, french: "la culpabilité collective", german: "die Kollektivschuld", category: "Questions de culpabilité" },
    { id: 93, french: "la question de la culpabilité", german: "die Schuldfrage", category: "Questions de culpabilité" },
    { id: 94, french: "le refoulement", german: "die Verdrängung", category: "Mécanismes psychologiques" },
    { id: 95, french: "le travail de deuil", german: "die Trauerarbeit", category: "Processus mémoriels" },
    { id: 96, french: "les jours commémoratifs", german: "die Gedenktage", category: "Commémoration" },
    { id: 97, french: "le 27 janvier", german: "der 27. Januar", category: "Dates mémorielles" },
    { id: 98, french: "le 9 novembre", german: "der 9. November", category: "Dates mémorielles" },
    { id: 99, french: "la Nuit de Cristal", german: "die Reichspogromnacht", category: "Événements nazisme" },
    { id: 100, french: "l'avenir du souvenir", german: "die Zukunft der Erinnerung", category: "Perspectives mémorielles" }
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
      "Histoire générale": "bg-slate-100 text-slate-800",
      "Culture mémorielle": "bg-gray-100 text-gray-800",
      "Histoire allemande": "bg-zinc-100 text-zinc-800",
      "Périodes historiques": "bg-stone-100 text-stone-800",
      "Travail de mémoire": "bg-neutral-100 text-neutral-800",
      "Division allemande": "bg-red-100 text-red-800",
      "Réunification": "bg-green-100 text-green-800",
      "Seconde Guerre mondiale": "bg-amber-100 text-orange-800",
      "Holocauste": "bg-amber-100 text-amber-800",
      "RDA": "bg-carnet-red/10 text-carnet-red-deep",
      "Régime DDR": "bg-indigo-100 text-indigo-800",
      "Société DDR": "bg-purple-100 text-purple-800",
      "Symboles historiques": "bg-violet-100 text-violet-800",
      "Justice post-guerre": "bg-pink-100 text-pink-800",
      "Concepts mémoriels": "bg-rose-100 text-rose-800",
      "Devises mémorielles": "bg-emerald-100 text-emerald-800",
      "Lieux de mémoire": "bg-teal-100 text-teal-800",
      "Politique mémorielle": "bg-cyan-100 text-cyan-800",
      "Divisions mémorielles": "bg-sky-100 text-sky-800",
      "Mémoire collective": "bg-carnet-red/10 text-carnet-red-deep",
      "Dates commémoratives": "bg-lime-100 text-lime-800",
      "Fêtes nationales": "bg-yellow-100 text-yellow-800",
      "Guerre froide": "bg-red-100 text-red-800",
      "Symboles de division": "bg-amber-100 text-orange-800",
      "Événements 1989": "bg-green-100 text-green-800",
      "Géographie politique": "bg-slate-100 text-slate-800",
      "RFA": "bg-carnet-red/10 text-carnet-red-deep",
      "Nazisme": "bg-red-100 text-red-800",
      "Périodes nazies": "bg-amber-100 text-orange-800",
      "Système concentrationnaire": "bg-gray-100 text-gray-800",
      "Camps emblématiques": "bg-zinc-100 text-zinc-800",
      "Persécutions nazies": "bg-amber-100 text-amber-800",
      "Crimes de guerre": "bg-red-100 text-red-800",
      "Dénazification": "bg-emerald-100 text-emerald-800",
      "Réparations": "bg-teal-100 text-teal-800",
      "Surveillance DDR": "bg-indigo-100 text-indigo-800",
      "Résistance DDR": "bg-purple-100 text-purple-800",
      "Révolution 1989": "bg-green-100 text-green-800",
      "Mouvements 1989": "bg-lime-100 text-lime-800",
      "Lieux berlinois": "bg-cyan-100 text-cyan-800",
      "Monuments berlinois": "bg-sky-100 text-sky-800",
      "Berlin divisé": "bg-carnet-red/10 text-carnet-red-deep",
      "Acteurs post-guerre": "bg-violet-100 text-violet-800",
      "Conférences alliées": "bg-pink-100 text-pink-800",
      "Occupation alliée": "bg-rose-100 text-rose-800",
      "Crise berlinoise": "bg-red-100 text-red-800",
      "Politique étrangère": "bg-emerald-100 text-emerald-800",
      "Figures politiques": "bg-teal-100 text-teal-800",
      "Traités unification": "bg-green-100 text-green-800",
      "Unification": "bg-lime-100 text-lime-800",
      "Symboles nationaux": "bg-yellow-100 text-yellow-800",
      "Droit constitutionnel": "bg-amber-100 text-amber-800",
      "Débats historiques": "bg-amber-100 text-orange-800",
      "Forces armées nazies": "bg-red-100 text-red-800",
      "Organisations nazies": "bg-zinc-100 text-zinc-800",
      "Dirigeants nazis": "bg-gray-100 text-gray-800",
      "Méthodes nazies": "bg-slate-100 text-slate-800",
      "Législation nazie": "bg-stone-100 text-stone-800",
      "Génocide": "bg-neutral-100 text-neutral-800",
      "Témoins et victimes": "bg-cyan-100 text-cyan-800",
      "Monuments mémoriels": "bg-sky-100 text-sky-800",
      "Mémoriaux spécifiques": "bg-carnet-red/10 text-carnet-red-deep",
      "Musées mémoriels": "bg-indigo-100 text-indigo-800",
      "Camps historiques": "bg-purple-100 text-purple-800",
      "Traitement DDR": "bg-violet-100 text-violet-800",
      "Institutions mémorielles": "bg-pink-100 text-pink-800",
      "Archives DDR": "bg-rose-100 text-rose-800",
      "Victimes historiques": "bg-emerald-100 text-emerald-800",
      "Responsabilités": "bg-teal-100 text-teal-800",
      "Questions de culpabilité": "bg-green-100 text-green-800",
      "Mécanismes psychologiques": "bg-lime-100 text-lime-800",
      "Processus mémoriels": "bg-yellow-100 text-yellow-800",
      "Commémoration": "bg-amber-100 text-amber-800",
      "Dates mémorielles": "bg-amber-100 text-orange-800",
      "Événements nazisme": "bg-red-100 text-red-800",
      "Perspectives mémorielles": "bg-slate-100 text-slate-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50">
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
            <span className="text-gray-900 font-bold">Vocabulaire Histoire</span>
          </div>
        </div>
      </nav>

      {/* Arrière-plan animé */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -z-10 -top-40 -right-40 w-80 h-80 bg-slate-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -z-10 -bottom-40 -left-40 w-80 h-80 bg-gray-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-zinc-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* En-tête */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <div className="p-3 rounded-lg bg-slate-600 text-white">
              <BookOpen className="h-9 w-9" />
            </div>
            Vocabulaire Histoire et Mémoire
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Maîtrisez le vocabulaire de l'histoire et de la culture mémorielle allemandes avec des flashcards interactives
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">{cards.length} mots</Badge>
            <Badge variant="outline">Module 10 - Geschichte und Erinnerungskultur</Badge>
            <Badge className="bg-slate-600">Flashcards</Badge>
          </div>
        </div>

        {/* Barre de progrès */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Progression</span>
            <span className="text-sm font-medium text-slate-600">{currentIndex + 1} / {cards.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-gradient-to-r from-slate-500 to-gray-500 h-2.5 rounded-full transition-all duration-300"
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
            <Card className="mb-4 bg-slate-50 border-slate-200">
              <CardContent className="p-4">
                <h3 className="font-semibold text-slate-900 mb-3">Raccourcis clavier :</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-slate-700">
                  <div><kbd className="bg-slate-100 px-2 py-1 rounded">Espace</kbd> ou <kbd className="bg-slate-100 px-2 py-1 rounded">Entrée</kbd> : Retourner la carte</div>
                  <div><kbd className="bg-slate-100 px-2 py-1 rounded">←</kbd> <kbd className="bg-slate-100 px-2 py-1 rounded">→</kbd> : Navigation</div>
                  <div><kbd className="bg-slate-100 px-2 py-1 rounded">S</kbd> : Mélanger</div>
                  <div><kbd className="bg-slate-100 px-2 py-1 rounded">R</kbd> : Recommencer</div>
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
              <div className="absolute -z-10 top-4 right-4">
                <Badge className={getCategoryColor(currentCard.category)} variant="secondary">
                  {currentCard.category}
                </Badge>
              </div>

              {/* Indicateur de face */}
              <div className="absolute -z-10 top-4 left-4 flex items-center gap-2">
                {isFlipped ? (
                  <>
                    <Eye className="h-4 w-4 text-slate-600" />
                    <span className="text-sm font-medium text-slate-600">Allemand</span>
                  </>
                ) : (
                  <>
                    <EyeOff className="h-4 w-4 text-slate-600" />
                    <span className="text-sm font-medium text-slate-600">Français</span>
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
                
                <div className="text-sm text-gray-500 text-center">
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
          <Card className="border-2 border-slate-200 bg-gradient-to-r from-slate-50 to-gray-50 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-slate-900 mb-4">📚 Conseils pour l'apprentissage</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-800">Technique de révision :</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Commencez par le français (plus familier)</li>
                    <li>• Tentez de deviner l'allemand avant de retourner</li>
                    <li>• Répétez à voix haute pour la prononciation</li>
                    <li>• Utilisez les catégories pour regrouper les concepts</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-slate-800">Pour les concours :</h4>
                  <ul className="text-sm text-slate-700 space-y-1">
                    <li>• Vocabulaire essentiel pour l'histoire du 20e siècle</li>
                    <li>• Termes techniques de la culture mémorielle</li>
                    <li>• Base indispensable pour Module 10 - Geschichte und Erinnerungskultur</li>
                    <li>• Révisez par thèmes (nazisme, DDR, réunification, mémoire)</li>
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

export default VocabulaireGeschichteFlashcardsPage;