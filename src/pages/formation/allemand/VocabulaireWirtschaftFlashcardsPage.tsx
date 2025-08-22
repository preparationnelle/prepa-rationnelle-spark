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

const VocabulaireWirtschaftFlashcardsPage = () => {
  const vocabularyData: VocabularyCard[] = [
    { id: 1, french: "le modèle économique allemand", german: "das deutsche Wirtschaftsmodell", category: "Modèle économique" },
    { id: 2, french: "la transformation industrielle", german: "die industrielle Transformation", category: "Transformation industrielle" },
    { id: 3, french: "les défis structurels", german: "die strukturellen Herausforderungen", category: "Défis économiques" },
    { id: 4, french: "la crise économique", german: "die Wirtschaftskrise", category: "Crises économiques" },
    { id: 5, french: "depuis 2019", german: "seit 2019", category: "Chronologie" },
    { id: 6, french: "l'Industrie 4.0", german: "die Industrie 4.0", category: "Industrie 4.0" },
    { id: 7, french: "la transformation numérique", german: "die digitale Transformation", category: "Digitalisation" },
    { id: 8, french: "l'industrie automobile", german: "die Automobilindustrie", category: "Automobile" },
    { id: 9, french: "les nouveaux défis", german: "die neuen Herausforderungen", category: "Défis économiques" },
    { id: 10, french: "l'industrie orientée vers l'exportation", german: "die exportorientierte Industrie", category: "Commerce extérieur" },
    { id: 11, french: "la stagnation économique", german: "die Wirtschaftsstagnation", category: "Conjoncture" },
    { id: 12, french: "la prévision de croissance zéro", german: "die Nullwachstumsprognose", category: "Prévisions économiques" },
    { id: 13, french: "pour 2025", german: "für 2025", category: "Chronologie" },
    { id: 14, french: "les robots industriels", german: "die Industrieroboter", category: "Automatisation" },
    { id: 15, french: "l'automatisation", german: "die Automatisierung", category: "Automatisation" },
    { id: 16, french: "la numérisation", german: "die Digitalisierung", category: "Digitalisation" },
    { id: 17, french: "les PME (petites et moyennes entreprises)", german: "der Mittelstand", category: "Entreprises" },
    { id: 18, french: "la mobilité électrique", german: "die Elektromobilität", category: "Mobilité électrique" },
    { id: 19, french: "la concurrence chinoise", german: "die chinesische Konkurrenz", category: "Concurrence internationale" },
    { id: 20, french: "les restructurations", german: "die Umstrukturierungen", category: "Restructurations" },
    { id: 21, french: "le produit intérieur brut (PIB)", german: "das Bruttosozialprodukt (BSP)", category: "Indicateurs économiques" },
    { id: 22, french: "la conjoncture", german: "die Konjunktur", category: "Conjoncture" },
    { id: 23, french: "la récession", german: "die Rezession", category: "Crises économiques" },
    { id: 24, french: "l'inflation", german: "die Inflation", category: "Indicateurs économiques" },
    { id: 25, french: "la déflation", german: "die Deflation", category: "Indicateurs économiques" },
    { id: 26, french: "le marché du travail", german: "der Arbeitsmarkt", category: "Emploi" },
    { id: 27, french: "le chômage", german: "die Arbeitslosigkeit", category: "Emploi" },
    { id: 28, french: "le plein emploi", german: "die Vollbeschäftigung", category: "Emploi" },
    { id: 29, french: "l'économie d'exportation", german: "die Exportwirtschaft", category: "Commerce extérieur" },
    { id: 30, french: "la dépendance aux importations", german: "die Importabhängigkeit", category: "Commerce extérieur" },
    { id: 31, french: "la balance commerciale", german: "die Handelsbilanz", category: "Commerce extérieur" },
    { id: 32, french: "le commerce extérieur", german: "der Außenhandel", category: "Commerce extérieur" },
    { id: 33, french: "la mondialisation", german: "die Globalisierung", category: "Mondialisation" },
    { id: 34, french: "la désindustrialisation", german: "die Deindustrialisierung", category: "Transformation industrielle" },
    { id: 35, french: "la chaîne de valeur", german: "die Wertschöpfungskette", category: "Chaînes de production" },
    { id: 36, french: "la chaîne d'approvisionnement", german: "die Lieferkette", category: "Chaînes de production" },
    { id: 37, french: "la crise des puces", german: "die Chipkrise", category: "Crises sectorielles" },
    { id: 38, french: "les coûts énergétiques", german: "die Energiekosten", category: "Coûts de production" },
    { id: 39, french: "la compétitivité", german: "die Wettbewerbsfähigkeit", category: "Compétitivité" },
    { id: 40, french: "l'innovation", german: "die Innovation", category: "Innovation" },
    { id: 41, french: "la recherche et développement (R&D)", german: "die Forschung und Entwicklung (F&E)", category: "Innovation" },
    { id: 42, french: "les dépôts de brevets", german: "die Patentanmeldungen", category: "Innovation" },
    { id: 43, french: "les champions cachés", german: "die Hidden Champions", category: "Entreprises performantes" },
    { id: 44, french: "les entreprises familiales", german: "die Familienunternehmen", category: "Types d'entreprises" },
    { id: 45, french: "la formation duale", german: "die Dualausbildung", category: "Formation professionnelle" },
    { id: 46, french: "la pénurie de main-d'œuvre qualifiée", german: "der Fachkräftemangel", category: "Défis du travail" },
    { id: 47, french: "la densité de robots", german: "die Roboterdichte", category: "Automatisation" },
    { id: 48, french: "l'intelligence artificielle (IA)", german: "die Künstliche Intelligenz (KI)", category: "Technologies avancées" },
    { id: 49, french: "l'Internet des objets (IoT)", german: "das Internet der Dinge (IoT)", category: "Technologies avancées" },
    { id: 50, french: "les systèmes cyber-physiques", german: "die Cyber-Physical Systems", category: "Technologies avancées" },
    { id: 51, french: "les mégadonnées", german: "die Big Data", category: "Technologies numériques" },
    { id: 52, french: "l'informatique en nuage", german: "die Cloud-Computing", category: "Technologies numériques" },
    { id: 53, french: "l'usine intelligente", german: "die Smart Factory", category: "Industrie 4.0" },
    { id: 54, french: "la fabrication additive", german: "die Additive Fertigung", category: "Technologies de production" },
    { id: 55, french: "l'impression 3D", german: "die 3D-Druck", category: "Technologies de production" },
    { id: 56, french: "les fournisseurs automobiles", german: "die Automobilzulieferer", category: "Automobile" },
    { id: 57, french: "les véhicules électriques", german: "die Elektrofahrzeuge", category: "Mobilité électrique" },
    { id: 58, french: "la technologie des batteries", german: "die Batterietechnologie", category: "Mobilité électrique" },
    { id: 59, french: "l'infrastructure de recharge", german: "die Ladeinfrastruktur", category: "Mobilité électrique" },
    { id: 60, french: "l'affaire Volkswagen", german: "die Volkswagen-Affäre", category: "Scandales industriels" },
    { id: 61, french: "le Dieselgate", german: "die Dieselgate", category: "Scandales industriels" },
    { id: 62, french: "la réduction de CO2", german: "die CO2-Reduktion", category: "Transition écologique" },
    { id: 63, french: "les objectifs climatiques", german: "die Klimaziele", category: "Transition écologique" },
    { id: 64, french: "la transition énergétique", german: "die Energiewende", category: "Transition écologique" },
    { id: 65, french: "les énergies renouvelables", german: "die Erneuerbare Energien", category: "Transition écologique" },
    { id: 66, french: "les facteurs de localisation", german: "die Standortfaktoren", category: "Localisation industrielle" },
    { id: 67, french: "la bureaucratie", german: "die Bürokratie", category: "Contraintes administratives" },
    { id: 68, french: "les réglementations", german: "die Regulierungen", category: "Contraintes administratives" },
    { id: 69, french: "la réforme fiscale", german: "die Steuerreform", category: "Politique fiscale" },
    { id: 70, french: "les impôts sur les sociétés", german: "die Unternehmenssteuern", category: "Politique fiscale" },
    { id: 71, french: "les investissements", german: "die Investitionen", category: "Financement" },
    { id: 72, french: "les subventions", german: "die Subventionen", category: "Financement" },
    { id: 73, french: "les fonds européens", german: "die EU-Fördermittel", category: "Financement" },
    { id: 74, french: "les programmes conjoncturels", german: "die Konjunkturprogramme", category: "Politique économique" },
    { id: 75, french: "le frein à l'endettement", german: "die Schuldenbremse", category: "Politique budgétaire" },
    { id: 76, french: "la dette publique", german: "die Staatsverschuldung", category: "Politique budgétaire" },
    { id: 77, french: "le budget fédéral", german: "der Bundeshaushalt", category: "Politique budgétaire" },
    { id: 78, french: "la politique économique", german: "die Wirtschaftspolitik", category: "Politique économique" },
    { id: 79, french: "la coalition feu tricolore", german: "die Ampel-Koalition", category: "Gouvernement" },
    { id: 80, french: "l'indice Ifo", german: "die Ifo-Index", category: "Indicateurs économiques" },
    { id: 81, french: "le DIW (Institut allemand pour la recherche économique)", german: "die DIW", category: "Instituts de recherche" },
    { id: 82, french: "les prévisions de l'OCDE", german: "die OECD-Prognosen", category: "Prévisions économiques" },
    { id: 83, french: "l'OMC (Organisation mondiale du commerce)", german: "die WTO", category: "Organisations internationales" },
    { id: 84, french: "les accords de libre-échange", german: "die Freihandelsabkommen", category: "Commerce international" },
    { id: 85, french: "le CETA (accord UE-Canada)", german: "die CETA", category: "Accords commerciaux" },
    { id: 86, french: "le TTIP (accord UE-USA)", german: "die TTIP", category: "Accords commerciaux" },
    { id: 87, french: "la stratégie chinoise", german: "die China-Strategie", category: "Stratégies géoéconomiques" },
    { id: 88, french: "BYD (entreprise chinoise)", german: "die BYD", category: "Entreprises chinoises" },
    { id: 89, french: "Huawei", german: "die Huawei", category: "Entreprises chinoises" },
    { id: 90, french: "les réseaux 5G", german: "die 5G-Netze", category: "Infrastructure numérique" },
    { id: 91, french: "la stratégie numérique", german: "die Digitalstrategie", category: "Stratégies numériques" },
    { id: 92, french: "l'extension du haut débit", german: "die Breitbandausbau", category: "Infrastructure numérique" },
    { id: 93, french: "les PME", german: "die KMU (Klein- und Mittelunternehmen)", category: "Types d'entreprises" },
    { id: 94, french: "les start-ups", german: "die Start-ups", category: "Écosystème startup" },
    { id: 95, french: "les licornes (entreprises valorisées à plus d'un milliard)", german: "die Unicorn", category: "Écosystème startup" },
    { id: 96, french: "le capital-risque", german: "die Risikokapital", category: "Financement startup" },
    { id: 97, french: "la scène berlinoise", german: "die Berliner Szene", category: "Écosystème startup" },
    { id: 98, french: "le miracle économique", german: "die Wirtschaftswunder", category: "Histoire économique" },
    { id: 99, french: "l'Agenda 2010", german: "die Agenda 2010", category: "Réformes historiques" },
    { id: 100, french: "les réformes Hartz", german: "die Hartz-Reformen", category: "Réformes historiques" }
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
      "Modèle économique": "bg-orange-100 text-orange-800",
      "Transformation industrielle": "bg-amber-100 text-amber-800",
      "Défis économiques": "bg-red-100 text-red-800",
      "Crises économiques": "bg-red-100 text-red-800",
      "Chronologie": "bg-gray-100 text-gray-800",
      "Industrie 4.0": "bg-blue-100 text-blue-800",
      "Digitalisation": "bg-purple-100 text-purple-800",
      "Automobile": "bg-indigo-100 text-indigo-800",
      "Commerce extérieur": "bg-green-100 text-green-800",
      "Conjoncture": "bg-yellow-100 text-yellow-800",
      "Prévisions économiques": "bg-lime-100 text-lime-800",
      "Automatisation": "bg-cyan-100 text-cyan-800",
      "Entreprises": "bg-slate-100 text-slate-800",
      "Mobilité électrique": "bg-emerald-100 text-emerald-800",
      "Concurrence internationale": "bg-rose-100 text-rose-800",
      "Restructurations": "bg-gray-100 text-gray-800",
      "Indicateurs économiques": "bg-yellow-100 text-yellow-800",
      "Emploi": "bg-teal-100 text-teal-800",
      "Mondialisation": "bg-violet-100 text-violet-800",
      "Chaînes de production": "bg-orange-100 text-orange-800",
      "Crises sectorielles": "bg-red-100 text-red-800",
      "Coûts de production": "bg-amber-100 text-amber-800",
      "Compétitivité": "bg-blue-100 text-blue-800",
      "Innovation": "bg-purple-100 text-purple-800",
      "Entreprises performantes": "bg-green-100 text-green-800",
      "Types d'entreprises": "bg-slate-100 text-slate-800",
      "Formation professionnelle": "bg-indigo-100 text-indigo-800",
      "Défis du travail": "bg-orange-100 text-orange-800",
      "Technologies avancées": "bg-purple-100 text-purple-800",
      "Technologies numériques": "bg-blue-100 text-blue-800",
      "Technologies de production": "bg-cyan-100 text-cyan-800",
      "Scandales industriels": "bg-red-100 text-red-800",
      "Transition écologique": "bg-green-100 text-green-800",
      "Localisation industrielle": "bg-amber-100 text-amber-800",
      "Contraintes administratives": "bg-gray-100 text-gray-800",
      "Politique fiscale": "bg-yellow-100 text-yellow-800",
      "Financement": "bg-emerald-100 text-emerald-800",
      "Politique économique": "bg-orange-100 text-orange-800",
      "Politique budgétaire": "bg-lime-100 text-lime-800",
      "Gouvernement": "bg-rose-100 text-rose-800",
      "Instituts de recherche": "bg-violet-100 text-violet-800",
      "Organisations internationales": "bg-blue-100 text-blue-800",
      "Commerce international": "bg-green-100 text-green-800",
      "Accords commerciaux": "bg-teal-100 text-teal-800",
      "Stratégies géoéconomiques": "bg-purple-100 text-purple-800",
      "Entreprises chinoises": "bg-red-100 text-red-800",
      "Infrastructure numérique": "bg-cyan-100 text-cyan-800",
      "Stratégies numériques": "bg-indigo-100 text-indigo-800",
      "Écosystème startup": "bg-pink-100 text-pink-800",
      "Financement startup": "bg-emerald-100 text-emerald-800",
      "Histoire économique": "bg-amber-100 text-amber-800",
      "Réformes historiques": "bg-slate-100 text-slate-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
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
            <span className="text-gray-900 font-bold">Vocabulaire Économie</span>
          </div>
        </div>
      </nav>

      {/* Arrière-plan animé */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* En-tête */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <div className="p-3 rounded-lg bg-orange-600 text-white">
              <BookOpen className="h-9 w-9" />
            </div>
            Vocabulaire Économie et Industrie
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Maîtrisez le vocabulaire économique et industriel allemand avec des flashcards interactives
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">{cards.length} mots</Badge>
            <Badge variant="outline">Module 5 - Wirtschaft und Industrie</Badge>
            <Badge className="bg-orange-600">Flashcards</Badge>
          </div>
        </div>

        {/* Barre de progrès */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Progression</span>
            <span className="text-sm font-medium text-orange-600">{currentIndex + 1} / {cards.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-gradient-to-r from-orange-500 to-amber-500 h-2.5 rounded-full transition-all duration-300"
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
            <Card className="mb-4 bg-orange-50 border-orange-200">
              <CardContent className="p-4">
                <h3 className="font-semibold text-orange-900 mb-3">Raccourcis clavier :</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-orange-700">
                  <div><kbd className="bg-orange-100 px-2 py-1 rounded">Espace</kbd> ou <kbd className="bg-orange-100 px-2 py-1 rounded">Entrée</kbd> : Retourner la carte</div>
                  <div><kbd className="bg-orange-100 px-2 py-1 rounded">←</kbd> <kbd className="bg-orange-100 px-2 py-1 rounded">→</kbd> : Navigation</div>
                  <div><kbd className="bg-orange-100 px-2 py-1 rounded">S</kbd> : Mélanger</div>
                  <div><kbd className="bg-orange-100 px-2 py-1 rounded">R</kbd> : Recommencer</div>
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
                    <Eye className="h-4 w-4 text-orange-600" />
                    <span className="text-sm font-medium text-orange-600">Allemand</span>
                  </>
                ) : (
                  <>
                    <EyeOff className="h-4 w-4 text-orange-600" />
                    <span className="text-sm font-medium text-orange-600">Français</span>
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
          <Card className="border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-amber-50 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-4">🏭 Conseils pour l'apprentissage</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-orange-800">Technique de révision :</h4>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• Commencez par le français (plus familier)</li>
                    <li>• Tentez de deviner l'allemand avant de retourner</li>
                    <li>• Répétez à voix haute pour la prononciation</li>
                    <li>• Utilisez les catégories pour regrouper les concepts</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-orange-800">Pour les concours :</h4>
                  <ul className="text-sm text-orange-700 space-y-1">
                    <li>• Vocabulaire essentiel pour l'Industrie 4.0</li>
                    <li>• Termes techniques de la transformation numérique</li>
                    <li>• Base indispensable pour Module 5 - Wirtschaft und Industrie</li>
                    <li>• Révisez par thèmes (automobile, digitalisation, compétitivité)</li>
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

export default VocabulaireWirtschaftFlashcardsPage;