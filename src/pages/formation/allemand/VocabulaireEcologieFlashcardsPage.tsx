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

const VocabulaireEcologieFlashcardsPage = () => {
  const vocabularyData: VocabularyCard[] = [
    { id: 1, french: "la transition énergétique", german: "die Energiewende", category: "Transition énergétique" },
    { id: 2, french: "la politique environnementale", german: "die Umweltpolitik", category: "Politique" },
    { id: 3, french: "le développement durable", german: "die nachhaltige Entwicklung", category: "Développement durable" },
    { id: 4, french: "la compétitivité", german: "die Wettbewerbsfähigkeit", category: "Économie" },
    { id: 5, french: "la sortie du nucléaire", german: "der Atomausstieg", category: "Énergie nucléaire" },
    { id: 6, french: "les coûts élevés de l'énergie", german: "die hohen Energiekosten", category: "Économie" },
    { id: 7, french: "la politique climatique", german: "die Klimapolitik", category: "Politique" },
    { id: 8, french: "le rôle de leader", german: "die Führungsrolle", category: "Leadership" },
    { id: 9, french: "l'UE (Union européenne)", german: "die EU", category: "Institutions" },
    { id: 10, french: "la mobilité durable", german: "die nachhaltige Mobilität", category: "Transport" },
    { id: 11, french: "la transition des transports", german: "die Verkehrswende", category: "Transport" },
    { id: 12, french: "la sortie du charbon", german: "der Kohleausstieg", category: "Combustibles fossiles" },
    { id: 13, french: "les investissements", german: "die Investitionen", category: "Économie" },
    { id: 14, french: "les énergies renouvelables", german: "die erneuerbaren Energien", category: "Énergies renouvelables" },
    { id: 15, french: "l'industrie allemande", german: "die deutsche Industrie", category: "Industrie" },
    { id: 16, french: "les transports publics", german: "der öffentliche Verkehr", category: "Transport" },
    { id: 17, french: "la circulation à vélo", german: "der Fahrradverkehr", category: "Transport" },
    { id: 18, french: "le débat", german: "die Debatte", category: "Société" },
    { id: 19, french: "la limitation de vitesse", german: "das Tempolimit", category: "Transport" },
    { id: 20, french: "les autoroutes", german: "die Autobahnen", category: "Transport" },
    { id: 21, french: "le changement climatique", german: "der Klimawandel", category: "Changement climatique" },
    { id: 22, french: "les émissions de CO2", german: "die CO2-Emissionen", category: "Changement climatique" },
    { id: 23, french: "la neutralité climatique", german: "die Klimaneutralität", category: "Changement climatique" },
    { id: 24, french: "l'énergie solaire", german: "die Solarenergie", category: "Énergies renouvelables" },
    { id: 25, french: "l'énergie éolienne", german: "die Windenergie", category: "Énergies renouvelables" },
    { id: 26, french: "la biomasse", german: "die Biomasse", category: "Énergies renouvelables" },
    { id: 27, french: "l'énergie hydraulique", german: "die Wasserkraft", category: "Énergies renouvelables" },
    { id: 28, french: "la géothermie", german: "die Geothermie", category: "Énergies renouvelables" },
    { id: 29, french: "le mix électrique", german: "der Strommix", category: "Énergie" },
    { id: 30, french: "l'extension du réseau", german: "die Netzausbau", category: "Infrastructure" },
    { id: 31, french: "l'efficacité énergétique", german: "die Energieeffizienz", category: "Énergie" },
    { id: 32, french: "les subventions", german: "die Subventionen", category: "Économie" },
    { id: 33, french: "la loi sur les énergies renouvelables", german: "das EEG (Erneuerbare-Energien-Gesetz)", category: "Législation" },
    { id: 34, french: "la sortie des combustibles fossiles", german: "der Ausstieg aus fossilen Brennstoffen", category: "Combustibles fossiles" },
    { id: 35, french: "le lignite", german: "die Braunkohle", category: "Combustibles fossiles" },
    { id: 36, french: "le charbon", german: "die Steinkohle", category: "Combustibles fossiles" },
    { id: 37, french: "l'énergie nucléaire", german: "die Kernenergie", category: "Énergie nucléaire" },
    { id: 38, french: "le réacteur", german: "der Reaktor", category: "Énergie nucléaire" },
    { id: 39, french: "les centrales nucléaires", german: "die Atomkraftwerke", category: "Énergie nucléaire" },
    { id: 40, french: "l'économie énergétique", german: "die Energiewirtschaft", category: "Économie" },
    { id: 41, french: "la politique industrielle", german: "die Industriepolitik", category: "Industrie" },
    { id: 42, french: "la désindustrialisation", german: "die Deindustrialisierung", category: "Industrie" },
    { id: 43, french: "les facteurs de localisation", german: "die Standortfaktoren", category: "Industrie" },
    { id: 44, french: "la mobilité électrique", german: "die Elektromobilität", category: "Transport" },
    { id: 45, french: "la voiture électrique", german: "das Elektroauto", category: "Transport" },
    { id: 46, french: "l'infrastructure de recharge", german: "die Ladeinfrastruktur", category: "Infrastructure" },
    { id: 47, french: "les transports locaux", german: "der Nahverkehr", category: "Transport" },
    { id: 48, french: "les transports longue distance", german: "der Fernverkehr", category: "Transport" },
    { id: 49, french: "le RER (train suburbain)", german: "die S-Bahn", category: "Transport" },
    { id: 50, french: "le métro", german: "die U-Bahn", category: "Transport" },
    { id: 51, french: "la piste cyclable", german: "der Radweg", category: "Transport" },
    { id: 52, french: "la ville cyclable", german: "die Fahrradstadt", category: "Transport" },
    { id: 53, french: "l'apaisement du trafic", german: "die Verkehrsberuhigung", category: "Transport" },
    { id: 54, french: "la zone environnementale", german: "die Umweltzone", category: "Pollution" },
    { id: 55, french: "la pollution aux particules fines", german: "die Feinstaubbelastung", category: "Pollution" },
    { id: 56, french: "les oxydes d'azote", german: "die Stickoxide", category: "Pollution" },
    { id: 57, french: "la qualité de l'air", german: "die Luftqualität", category: "Pollution" },
    { id: 58, french: "la protection du climat", german: "der Klimaschutz", category: "Protection environnementale" },
    { id: 59, french: "les Accords de Paris", german: "die Pariser Abkommen", category: "Accords internationaux" },
    { id: 60, french: "les objectifs climatiques de l'UE", german: "die EU-Klimaziele", category: "Accords internationaux" },
    { id: 61, french: "la biodiversité", german: "die Biodiversität", category: "Nature" },
    { id: 62, french: "la protection de la nature", german: "der Naturschutz", category: "Protection environnementale" },
    { id: 63, french: "les parcs nationaux", german: "die Nationalparks", category: "Nature" },
    { id: 64, french: "le dépérissement des forêts", german: "die Waldsterben", category: "Nature" },
    { id: 65, french: "le reboisement", german: "die Aufforstung", category: "Nature" },
    { id: 66, french: "l'économie circulaire", german: "die Kreislaufwirtschaft", category: "Développement durable" },
    { id: 67, french: "le recyclage", german: "der Recycling", category: "Gestion des déchets" },
    { id: 68, french: "la gestion des déchets", german: "die Abfallwirtschaft", category: "Gestion des déchets" },
    { id: 69, french: "les déchets plastiques", german: "die Plastikmüll", category: "Gestion des déchets" },
    { id: 70, french: "le microplastique", german: "die Mikroplastik", category: "Pollution" },
    { id: 71, french: "la pollution de l'eau", german: "die Wasserverschmutzung", category: "Pollution" },
    { id: 72, french: "les eaux souterraines", german: "die Grundwasser", category: "Eau" },
    { id: 73, french: "les catastrophes inondations", german: "die Flutkatastrophen", category: "Catastrophes naturelles" },
    { id: 74, french: "la protection contre les inondations", german: "der Hochwasserschutz", category: "Protection environnementale" },
    { id: 75, french: "la sécheresse", german: "die Dürre", category: "Catastrophes naturelles" },
    { id: 76, french: "l'agriculture", german: "die Landwirtschaft", category: "Agriculture" },
    { id: 77, french: "l'agriculture biologique", german: "die ökologische Landwirtschaft", category: "Agriculture" },
    { id: 78, french: "les pesticides", german: "die Pestizide", category: "Agriculture" },
    { id: 79, french: "les engrais", german: "die Düngemittel", category: "Agriculture" },
    { id: 80, french: "l'érosion des sols", german: "die Bodenerosion", category: "Agriculture" },
    { id: 81, french: "les objectifs de développement durable", german: "die Nachhaltigkeitsziele", category: "Développement durable" },
    { id: 82, french: "les ODD (Objectifs de développement durable)", german: "das SDG (Sustainable Development Goals)", category: "Développement durable" },
    { id: 83, french: "l'éducation environnementale", german: "die Umweltbildung", category: "Éducation" },
    { id: 84, french: "les initiatives citoyennes", german: "die Bürgerinitiativen", category: "Société" },
    { id: 85, french: "les Vendredis pour l'avenir", german: "die Fridays for Future", category: "Mouvement écologiste" },
    { id: 86, french: "le mouvement écologiste", german: "die Umweltbewegung", category: "Mouvement écologiste" },
    { id: 87, french: "les Verts (parti politique)", german: "die Grünen", category: "Politique" },
    { id: 88, french: "les groupes énergétiques", german: "die Energiekonzern", category: "Entreprises" },
    { id: 89, french: "RWE (entreprise énergétique)", german: "die RWE", category: "Entreprises" },
    { id: 90, french: "E.ON (entreprise énergétique)", german: "die E.ON", category: "Entreprises" },
    { id: 91, french: "les prix de l'électricité", german: "die Strompreise", category: "Économie" },
    { id: 92, french: "la crise du gaz", german: "die Gaskrise", category: "Crise énergétique" },
    { id: 93, french: "le GNL (gaz naturel liquéfié)", german: "der LNG (Liquefied Natural Gas)", category: "Énergie" },
    { id: 94, french: "les importations d'énergie", german: "die Energieimporte", category: "Énergie" },
    { id: 95, french: "la sécurité d'approvisionnement", german: "die Versorgungssicherheit", category: "Sécurité énergétique" },
    { id: 96, french: "les réseaux intelligents", german: "die Smart Grids", category: "Technologies" },
    { id: 97, french: "les technologies de stockage", german: "die Speichertechnologien", category: "Technologies" },
    { id: 98, french: "les batteries", german: "die Batterien", category: "Technologies" },
    { id: 99, french: "l'hydrogène", german: "der Wasserstoff", category: "Technologies" },
    { id: 100, french: "l'hydrogène vert", german: "die grüne Wasserstoff", category: "Technologies" }
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
      "Transition énergétique": "bg-carnet-rule/30 text-carnet-ink",
      "Politique": "bg-carnet-red/10 text-carnet-red-deep",
      "Développement durable": "bg-carnet-rule/30 text-carnet-ink",
      "Économie": "bg-carnet-rule/30 text-carnet-ink",
      "Énergie nucléaire": "bg-carnet-rule/30 text-carnet-ink",
      "Leadership": "bg-carnet-rule/30 text-carnet-ink",
      "Institutions": "bg-carnet-rule/30 text-carnet-ink",
      "Transport": "bg-carnet-rule/30 text-carnet-ink",
      "Combustibles fossiles": "bg-carnet-paper-2 text-carnet-ink",
      "Énergies renouvelables": "bg-carnet-rule/30 text-carnet-ink",
      "Industrie": "bg-carnet-paper-2 text-carnet-ink",
      "Société": "bg-carnet-rule/30 text-carnet-ink",
      "Changement climatique": "bg-carnet-rule/30 text-carnet-ink",
      "Énergie": "bg-carnet-rule/30 text-carnet-ink",
      "Infrastructure": "bg-carnet-rule/30 text-carnet-ink",
      "Législation": "bg-carnet-rule/30 text-carnet-ink",
      "Pollution": "bg-carnet-rule/30 text-carnet-ink",
      "Protection environnementale": "bg-carnet-rule/30 text-carnet-ink",
      "Accords internationaux": "bg-carnet-rule/30 text-carnet-ink",
      "Nature": "bg-carnet-rule/30 text-carnet-ink",
      "Gestion des déchets": "bg-carnet-rule/30 text-carnet-ink",
      "Eau": "bg-carnet-red/10 text-carnet-red-deep",
      "Catastrophes naturelles": "bg-carnet-rule/30 text-carnet-ink",
      "Agriculture": "bg-carnet-rule/30 text-carnet-ink",
      "Éducation": "bg-carnet-rule/30 text-carnet-ink",
      "Mouvement écologiste": "bg-carnet-rule/30 text-carnet-ink",
      "Entreprises": "bg-carnet-paper-2 text-carnet-ink",
      "Crise énergétique": "bg-carnet-rule/30 text-carnet-ink",
      "Sécurité énergétique": "bg-carnet-rule/30 text-carnet-ink",
      "Technologies": "bg-carnet-rule/30 text-carnet-ink"
    };
    return colors[category as keyof typeof colors] || "bg-carnet-paper-2 text-carnet-ink";
  };

  return (
    <div className="min-h-screen bg-transparent font-dm-sans">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-40 bg-carnet-paper-2/90 backdrop-blur supports-[backdrop-filter]:bg-carnet-paper-2/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-carnet-ink-soft">
            <Link to="/" className="flex items-center gap-1 hover:text-carnet-ink transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-carnet-ink-mute mx-1" />
            <Link to="/formation/allemand" className="hover:text-carnet-ink transition-colors">
              Formation Allemand
            </Link>
            <ChevronRight className="h-3 w-3 text-carnet-ink-mute mx-1" />
            <Link to="/formation/allemand/civilisation" className="hover:text-carnet-ink transition-colors">
              Civilisation
            </Link>
            <ChevronRight className="h-3 w-3 text-carnet-ink-mute mx-1" />
            <span className="text-carnet-ink font-bold">Vocabulaire Écologie</span>
          </div>
        </div>
      </nav>

      {/* Arrière-plan animé */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -z-10 -top-40 -right-40 w-80 h-80 bg-carnet-rule/30 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -z-10 -bottom-40 -left-40 w-80 h-80 bg-carnet-rule/30 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-carnet-rule/30 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* En-tête */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-carnet-ink mb-4 flex items-center justify-center gap-3">
            <div className="p-3 rounded-lg bg-carnet-red/10 text-carnet-red-deep">
              <BookOpen className="h-9 w-9" />
            </div>
            Vocabulaire Écologie et Environnement
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Maîtrisez le vocabulaire écologique et environnemental allemand avec des flashcards interactives
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">{cards.length} mots</Badge>
            <Badge variant="outline">Module 3 - Ökologie und Umwelt</Badge>
            <Badge className="bg-carnet-red hover:bg-carnet-red-deep text-white border-0">Flashcards</Badge>
          </div>
        </div>

        {/* Barre de progrès */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-carnet-ink-soft">Progression</span>
            <span className="text-sm font-medium text-carnet-red-deep">{currentIndex + 1} / {cards.length}</span>
          </div>
          <div className="w-full bg-carnet-rule/40 rounded-full h-2.5">
            <div 
              className="bg-carnet-red h-2.5 rounded-full transition-all duration-300"
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
              className="flex items-center gap-2 bg-carnet-paper-2/80 backdrop-blur-sm hover:bg-carnet-paper-2 hover:scale-105 transition-all duration-200"
            >
              <Shuffle className="h-4 w-4" />
              Mélanger (S)
            </Button>
            <Button
              onClick={resetCards}
              variant="outline"
              className="flex items-center gap-2 bg-carnet-paper-2/80 backdrop-blur-sm hover:bg-carnet-paper-2 hover:scale-105 transition-all duration-200"
            >
              <RotateCcw className="h-4 w-4" />
              Recommencer (R)
            </Button>
            <Button
              onClick={() => setShowHelp(!showHelp)}
              variant="outline"
              className="flex items-center gap-2 bg-carnet-paper-2/80 backdrop-blur-sm hover:bg-carnet-paper-2 hover:scale-105 transition-all duration-200"
            >
              <Lightbulb className="h-4 w-4" />
              Aide
            </Button>
          </div>

          {/* Aide aux raccourcis */}
          {showHelp && (
            <Card className="mb-4 bg-carnet-paper-2 border-carnet-rule">
              <CardContent className="p-4">
                <h3 className="font-semibold text-carnet-ink mb-3">Raccourcis clavier :</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-carnet-ink-soft">
                  <div><kbd className="bg-carnet-rule/30 px-2 py-1 rounded">Espace</kbd> ou <kbd className="bg-carnet-rule/30 px-2 py-1 rounded">Entrée</kbd> : Retourner la carte</div>
                  <div><kbd className="bg-carnet-rule/30 px-2 py-1 rounded">←</kbd> <kbd className="bg-carnet-rule/30 px-2 py-1 rounded">→</kbd> : Navigation</div>
                  <div><kbd className="bg-carnet-rule/30 px-2 py-1 rounded">S</kbd> : Mélanger</div>
                  <div><kbd className="bg-carnet-rule/30 px-2 py-1 rounded">R</kbd> : Recommencer</div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Carte principale */}
        <div className="max-w-2xl mx-auto mb-6">
          <Card 
            className="h-80 cursor-pointer transform transition-all duration-500 hover:scale-105 bg-carnet-paper-2/90 backdrop-blur-sm shadow-xl"
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
                    <Eye className="h-4 w-4 text-carnet-red-deep" />
                    <span className="text-sm font-medium text-carnet-red-deep">Allemand</span>
                  </>
                ) : (
                  <>
                    <EyeOff className="h-4 w-4 text-carnet-red-deep" />
                    <span className="text-sm font-medium text-carnet-red-deep">Français</span>
                  </>
                )}
              </div>

              {/* Contenu de la carte */}
              <div className="text-center space-y-4">
                <div className="text-3xl font-bold text-carnet-ink mb-6">
                  {isFlipped ? currentCard.german : currentCard.french}
                </div>
                
                {isFlipped && (
                  <div className="text-lg text-carnet-ink-soft bg-carnet-paper-2 rounded-lg p-4">
                    <strong>Français :</strong> {currentCard.french}
                  </div>
                )}
                
                <div className="text-sm text-carnet-ink-mute text-center">
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
              className="flex items-center gap-2 bg-carnet-paper-2/80 backdrop-blur-sm hover:bg-carnet-paper-2 px-6 py-3"
            >
              <ChevronLeft className="h-5 w-5" />
              Précédent
            </Button>
            
            <div className="text-sm text-carnet-ink-soft bg-carnet-paper-2/80 backdrop-blur-sm rounded-lg px-4 py-2">
              {currentIndex + 1} sur {cards.length}
            </div>
            
            <Button
              onClick={goToNext}
              variant="outline"
              className="flex items-center gap-2 bg-carnet-paper-2/80 backdrop-blur-sm hover:bg-carnet-paper-2 px-6 py-3"
            >
              Suivant
              <ChevronRightIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Section informative */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="border border-carnet-rule bg-carnet-paper-2">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-carnet-ink mb-4">💡 Conseils pour l'apprentissage</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-carnet-ink">Technique de révision :</h4>
                  <ul className="text-sm text-carnet-ink-soft space-y-1">
                    <li>• Commencez par le français (plus familier)</li>
                    <li>• Tentez de deviner l'allemand avant de retourner</li>
                    <li>• Répétez à voix haute pour la prononciation</li>
                    <li>• Utilisez les catégories pour regrouper les concepts</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-carnet-ink">Pour les concours :</h4>
                  <ul className="text-sm text-carnet-ink-soft space-y-1">
                    <li>• Vocabulaire essentiel pour l'Energiewende</li>
                    <li>• Termes techniques de la transition écologique</li>
                    <li>• Base indispensable pour Module 3 - Ökologie und Umwelt</li>
                    <li>• Révisez par thèmes (énergie, transport, protection)</li>
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

export default VocabulaireEcologieFlashcardsPage;