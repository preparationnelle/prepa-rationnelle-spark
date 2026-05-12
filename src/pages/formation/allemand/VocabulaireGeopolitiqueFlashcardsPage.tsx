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

const VocabulaireGeopolitiqueFlashcardsPage = () => {
  const vocabularyData: VocabularyCard[] = [
    { id: 1, french: "la géopolitique européenne", german: "die Europäische Geopolitik", category: "Géopolitique générale" },
    { id: 2, french: "le rôle de l'Allemagne", german: "die Rolle Deutschlands", category: "Allemagne" },
    { id: 3, french: "l'UE (Union européenne)", german: "die EU (Europäische Union)", category: "Union européenne" },
    { id: 4, french: "les relations internationales", german: "die internationalen Beziehungen", category: "Relations internationales" },
    { id: 5, french: "les défis géostratégiques", german: "die geostrategischen Herausforderungen", category: "Géostratégie" },
    { id: 6, french: "le tournant historique", german: "die Zeitenwende", category: "Transformation politique" },
    { id: 7, french: "la révolution géopolitique", german: "die geopolitische Revolution", category: "Transformation politique" },
    { id: 8, french: "depuis 2022", german: "seit 2022", category: "Chronologie" },
    { id: 9, french: "la dépendance énergétique", german: "die Energieabhängigkeit", category: "Énergie et sécurité" },
    { id: 10, french: "la sécurité nationale", german: "die nationale Sicherheit", category: "Sécurité" },
    { id: 11, french: "les relations transatlantiques", german: "die transatlantischen Beziehungen", category: "Relations transatlantiques" },
    { id: 12, french: "l'ère Trump", german: "die Trump-Ära", category: "Relations transatlantiques" },
    { id: 13, french: "les relations franco-allemandes", german: "die deutsch-französischen Beziehungen", category: "Relations franco-allemandes" },
    { id: 14, french: "le leadership de l'UE", german: "die EU-Führung", category: "Leadership européen" },
    { id: 15, french: "la guerre en Ukraine", german: "der Ukraine-Krieg", category: "Conflit ukrainien" },
    { id: 16, french: "le changement radical", german: "der radikale Wandel", category: "Transformation politique" },
    { id: 17, french: "l'augmentation du budget militaire", german: "die Aufstockung des Militärbudgets", category: "Défense" },
    { id: 18, french: "la redéfinition du pacifisme", german: "die Neudefinition des Pazifismus", category: "Transformation politique" },
    { id: 19, french: "l'abandon du gaz russe", german: "die Abkehr vom russischen Gas", category: "Énergie et sécurité" },
    { id: 20, french: "la crise de Nord Stream", german: "die Nord-Stream-Krise", category: "Énergie et sécurité" },
    { id: 21, french: "l'autonomie stratégique", german: "die strategische Autonomie", category: "Souveraineté européenne" },
    { id: 22, french: "l'OTAN", german: "die NATO", category: "OTAN" },
    { id: 23, french: "la Bundeswehr (forces armées allemandes)", german: "die Bundeswehr", category: "Défense" },
    { id: 24, french: "le fonds spécial", german: "das Sondervermögen", category: "Défense" },
    { id: 25, french: "le pacifisme", german: "der Pazifismus", category: "Doctrines politiques" },
    { id: 26, french: "le service militaire obligatoire", german: "die Wehrpflicht", category: "Défense" },
    { id: 27, french: "les dépenses en armement", german: "die Rüstungsausgaben", category: "Défense" },
    { id: 28, french: "la politique de défense", german: "die Verteidigungspolitik", category: "Défense" },
    { id: 29, french: "la politique étrangère de l'UE", german: "die EU-Außenpolitik", category: "Politique étrangère UE" },
    { id: 30, french: "la politique étrangère et de sécurité commune (PESC)", german: "die Gemeinsame Außen- und Sicherheitspolitik (GASP)", category: "Politique étrangère UE" },
    { id: 31, french: "l'élargissement à l'Est", german: "die Osterweiterung", category: "Élargissement UE" },
    { id: 32, french: "la politique envers la Russie", german: "die Russland-Politik", category: "Relations avec la Russie" },
    { id: 33, french: "les sanctions", german: "die Sanktionen", category: "Instruments diplomatiques" },
    { id: 34, french: "l'approvisionnement énergétique", german: "die Energieversorgung", category: "Énergie et sécurité" },
    { id: 35, french: "la diversification", german: "die Diversifikation", category: "Stratégie énergétique" },
    { id: 36, french: "le GNL (gaz naturel liquéfié)", german: "das LNG (Liquefied Natural Gas)", category: "Énergie" },
    { id: 37, french: "le pipeline", german: "die Pipeline", category: "Infrastructure énergétique" },
    { id: 38, french: "Nord Stream 2", german: "die Nord Stream 2", category: "Infrastructure énergétique" },
    { id: 39, french: "Gazprom", german: "die Gasprom", category: "Acteurs énergétiques" },
    { id: 40, french: "la crise énergétique", german: "die Energiekrise", category: "Crises" },
    { id: 41, french: "les États-Unis", german: "die USA", category: "Relations transatlantiques" },
    { id: 42, french: "l'alliance transatlantique", german: "die transatlantische Allianz", category: "Relations transatlantiques" },
    { id: 43, french: "le Pacte atlantique", german: "der Atlantikpakt", category: "OTAN" },
    { id: 44, french: "l'élargissement de l'OTAN à l'Est", german: "die NATO-Osterweiterung", category: "OTAN" },
    { id: 45, french: "l'objectif de 2 %", german: "die Zwei-Prozent-Ziel", category: "OTAN" },
    { id: 46, french: "l'aide militaire", german: "die Militärhilfe", category: "Conflit ukrainien" },
    { id: 47, french: "les chars Leopard", german: "die Leopard-Panzer", category: "Conflit ukrainien" },
    { id: 48, french: "l'aide à l'Ukraine", german: "die Ukraine-Hilfe", category: "Conflit ukrainien" },
    { id: 49, french: "la Commission européenne", german: "die EU-Kommission", category: "Institutions UE" },
    { id: 50, french: "la présidence du Conseil de l'UE", german: "die EU-Ratspräsidentschaft", category: "Institutions UE" },
    { id: 51, french: "le traité de l'Élysée", german: "der Élysée-Vertrag", category: "Relations franco-allemandes" },
    { id: 52, french: "l'axe franco-allemand", german: "die deutsch-französische Achse", category: "Relations franco-allemandes" },
    { id: 53, french: "la souveraineté de l'UE", german: "die EU-Souveränität", category: "Souveraineté européenne" },
    { id: 54, french: "la souveraineté stratégique", german: "die strategische Souveränität", category: "Souveraineté européenne" },
    { id: 55, french: "la politique industrielle", german: "die Industriepolitik", category: "Politiques UE" },
    { id: 56, french: "le Pacte vert", german: "die Green Deal", category: "Politiques UE" },
    { id: 57, french: "la neutralité climatique", german: "die Klimaneutralität", category: "Politique climatique" },
    { id: 58, french: "les relations UE-Chine", german: "die EU-China-Beziehungen", category: "Relations UE-Chine" },
    { id: 59, french: "la Route de la soie", german: "die Seidenstraße", category: "Relations UE-Chine" },
    { id: 60, french: "la géopolitique", german: "die Geopolitik", category: "Géopolitique générale" },
    { id: 61, french: "l'équilibre des pouvoirs", german: "die Machtbalance", category: "Géopolitique générale" },
    { id: 62, french: "l'hégémonie", german: "die Hegemonie", category: "Géopolitique générale" },
    { id: 63, french: "la multipolarité", german: "die Multipolarität", category: "Géopolitique générale" },
    { id: 64, french: "la diplomatie", german: "die Diplomatie", category: "Diplomatie" },
    { id: 65, french: "les relations bilatérales", german: "die Bilateralen Beziehungen", category: "Diplomatie" },
    { id: 66, french: "le multilatéralisme", german: "die Multilateralismus", category: "Diplomatie" },
    { id: 67, french: "l'ONU (Nations Unies)", german: "die UNO (Vereinte Nationen)", category: "Organisations internationales" },
    { id: 68, french: "le Conseil de sécurité", german: "der Sicherheitsrat", category: "Organisations internationales" },
    { id: 69, french: "le pouvoir de veto", german: "die Veto-Macht", category: "Organisations internationales" },
    { id: 70, french: "les droits de l'homme", german: "die Menschenrechte", category: "Valeurs européennes" },
    { id: 71, french: "l'aide au développement", german: "die Entwicklungshilfe", category: "Coopération internationale" },
    { id: 72, french: "la politique africaine", german: "die Afrika-Politik", category: "Politiques régionales" },
    { id: 73, french: "la politique méditerranéenne", german: "die Mittelmeerpolitik", category: "Politiques régionales" },
    { id: 74, french: "la stabilité des Balkans", german: "die Balkan-Stabilität", category: "Politiques régionales" },
    { id: 75, french: "l'élargissement de l'UE", german: "die EU-Erweiterung", category: "Élargissement UE" },
    { id: 76, french: "les pays candidats", german: "die Kandidatenländer", category: "Élargissement UE" },
    { id: 77, french: "l'État de droit", german: "die Rechtsstaatlichkeit", category: "Valeurs européennes" },
    { id: 78, french: "la corruption", german: "die Korruption", category: "Défis institutionnels" },
    { id: 79, french: "les guerres hybrides", german: "die Hybridkriege", category: "Nouvelles menaces" },
    { id: 80, french: "les cyberattaques", german: "die Cyberangriffe", category: "Cybersécurité" },
    { id: 81, french: "la désinformation", german: "die Desinformation", category: "Guerre informationnelle" },
    { id: 82, french: "la propagande", german: "die Propaganda", category: "Guerre informationnelle" },
    { id: 83, french: "les services secrets", german: "die Geheimdienste", category: "Renseignement" },
    { id: 84, french: "le BND (service de renseignement fédéral)", german: "die BND (Bundesnachrichtendienst)", category: "Renseignement" },
    { id: 85, french: "l'espionnage", german: "die Spionage", category: "Renseignement" },
    { id: 86, french: "les armes nucléaires", german: "die Atomwaffen", category: "Désarmement" },
    { id: 87, french: "le désarmement", german: "die Abrüstung", category: "Désarmement" },
    { id: 88, french: "le traité de non-prolifération nucléaire", german: "der Atomwaffensperrvertrag", category: "Traités internationaux" },
    { id: 89, french: "la politique envers l'Iran", german: "die Iran-Politik", category: "Proche-Orient" },
    { id: 90, french: "le conflit au Proche-Orient", german: "die Nahost-Konflikt", category: "Proche-Orient" },
    { id: 91, french: "les relations Israël-Palestine", german: "die Israel-Palästina-Beziehungen", category: "Proche-Orient" },
    { id: 92, french: "l'antisémitisme", german: "die Antisemitismus", category: "Mémoire historique" },
    { id: 93, french: "la mémoire de l'Holocauste", german: "die Holocaust-Erinnerung", category: "Mémoire historique" },
    { id: 94, french: "la politique historique", german: "die Geschichtspolitik", category: "Mémoire historique" },
    { id: 95, french: "le travail de mémoire", german: "die Vergangenheitsbewältigung", category: "Mémoire historique" },
    { id: 96, french: "la politique orientale", german: "die Ostpolitik", category: "Politique orientale" },
    { id: 97, french: "le changement par le commerce", german: "die Wandel durch Handel", category: "Politique orientale" },
    { id: 98, french: "l'ère Merkel", german: "die Merkel-Ära", category: "Gouvernements allemands" },
    { id: 99, french: "le gouvernement Scholz", german: "die Scholz-Regierung", category: "Gouvernements allemands" },
    { id: 100, french: "la coalition feu tricolore", german: "die Ampel-Koalition", category: "Gouvernements allemands" }
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
      "Géopolitique générale": "bg-carnet-rule/30 text-carnet-ink",
      "Allemagne": "bg-carnet-rule/30 text-carnet-ink",
      "Union européenne": "bg-carnet-red/10 text-carnet-red-deep",
      "Relations internationales": "bg-carnet-rule/30 text-carnet-ink",
      "Géostratégie": "bg-carnet-rule/30 text-carnet-ink",
      "Transformation politique": "bg-carnet-rule/30 text-carnet-ink",
      "Chronologie": "bg-carnet-paper-2 text-carnet-ink",
      "Énergie et sécurité": "bg-carnet-rule/30 text-carnet-ink",
      "Sécurité": "bg-carnet-rule/30 text-carnet-ink",
      "Relations transatlantiques": "bg-carnet-red/10 text-carnet-red-deep",
      "Relations franco-allemandes": "bg-carnet-rule/30 text-carnet-ink",
      "Leadership européen": "bg-carnet-rule/30 text-carnet-ink",
      "Conflit ukrainien": "bg-carnet-rule/30 text-carnet-ink",
      "Défense": "bg-carnet-paper-2 text-carnet-ink",
      "Souveraineté européenne": "bg-carnet-rule/30 text-carnet-ink",
      "OTAN": "bg-carnet-rule/30 text-carnet-ink",
      "Doctrines politiques": "bg-carnet-rule/30 text-carnet-ink",
      "Politique étrangère UE": "bg-carnet-red/10 text-carnet-red-deep",
      "Élargissement UE": "bg-carnet-rule/30 text-carnet-ink",
      "Relations avec la Russie": "bg-carnet-rule/30 text-carnet-ink",
      "Instruments diplomatiques": "bg-carnet-rule/30 text-carnet-ink",
      "Stratégie énergétique": "bg-carnet-rule/30 text-carnet-ink",
      "Énergie": "bg-carnet-rule/30 text-carnet-ink",
      "Infrastructure énergétique": "bg-carnet-rule/30 text-carnet-ink",
      "Acteurs énergétiques": "bg-carnet-rule/30 text-carnet-ink",
      "Crises": "bg-carnet-rule/30 text-carnet-ink",
      "Institutions UE": "bg-carnet-red/10 text-carnet-red-deep",
      "Politiques UE": "bg-carnet-rule/30 text-carnet-ink",
      "Politique climatique": "bg-carnet-rule/30 text-carnet-ink",
      "Relations UE-Chine": "bg-carnet-rule/30 text-carnet-ink",
      "Diplomatie": "bg-carnet-rule/30 text-carnet-ink",
      "Organisations internationales": "bg-carnet-rule/30 text-carnet-ink",
      "Valeurs européennes": "bg-carnet-rule/30 text-carnet-ink",
      "Coopération internationale": "bg-carnet-rule/30 text-carnet-ink",
      "Politiques régionales": "bg-carnet-rule/30 text-carnet-ink",
      "Défis institutionnels": "bg-carnet-paper-2 text-carnet-ink",
      "Nouvelles menaces": "bg-carnet-rule/30 text-carnet-ink",
      "Cybersécurité": "bg-carnet-paper-2 text-carnet-ink",
      "Guerre informationnelle": "bg-carnet-rule/30 text-carnet-ink",
      "Renseignement": "bg-carnet-paper-2 text-carnet-ink",
      "Désarmement": "bg-carnet-rule/30 text-carnet-ink",
      "Traités internationaux": "bg-carnet-red/10 text-carnet-red-deep",
      "Proche-Orient": "bg-carnet-rule/30 text-carnet-ink",
      "Mémoire historique": "bg-carnet-rule/30 text-carnet-ink",
      "Politique orientale": "bg-carnet-rule/30 text-carnet-ink",
      "Gouvernements allemands": "bg-carnet-rule/30 text-carnet-ink"
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
            <span className="text-carnet-ink font-bold">Vocabulaire Géopolitique</span>
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
            Vocabulaire Géopolitique Européenne
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Maîtrisez le vocabulaire géopolitique et diplomatique allemand avec des flashcards interactives
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">{cards.length} mots</Badge>
            <Badge variant="outline">Module 4 - Géopolitique Européenne</Badge>
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
              <h3 className="text-xl font-bold text-carnet-ink mb-4">🌍 Conseils pour l'apprentissage</h3>
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
                    <li>• Vocabulaire essentiel pour la Zeitenwende</li>
                    <li>• Termes techniques des relations internationales</li>
                    <li>• Base indispensable pour Module 4 - Géopolitique</li>
                    <li>• Révisez par thèmes (UE, OTAN, relations bilatérales)</li>
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

export default VocabulaireGeopolitiqueFlashcardsPage;