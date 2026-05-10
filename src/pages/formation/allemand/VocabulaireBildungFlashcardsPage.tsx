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

const VocabulaireBildungFlashcardsPage = () => {
  const vocabularyData: VocabularyCard[] = [
    { id: 1, french: "l'éducation", german: "die Bildung", category: "Éducation générale" },
    { id: 2, french: "la formation", german: "die Ausbildung", category: "Formation" },
    { id: 3, french: "le système éducatif", german: "das Bildungssystem", category: "Système éducatif" },
    { id: 4, french: "la formation professionnelle", german: "die berufliche Ausbildung", category: "Formation professionnelle" },
    { id: 5, french: "l'enseignement supérieur", german: "das Hochschulwesen", category: "Enseignement supérieur" },
    { id: 6, french: "l'orientation précoce", german: "die frühe Orientierung", category: "Orientation scolaire" },
    { id: 7, french: "le système dual", german: "das duale System", category: "Système dual" },
    { id: 8, french: "la recherche", german: "die Forschung", category: "Recherche" },
    { id: 9, french: "l'équité éducative", german: "die Bildungsgerechtigkeit", category: "Équité éducative" },
    { id: 10, french: "l'égalité des chances", german: "die Chancengleichheit", category: "Équité éducative" },
    { id: 11, french: "le système tripartite", german: "das dreigliedrige System", category: "Système scolaire secondaire" },
    { id: 12, french: "l'école principale (niveau inférieur)", german: "die Hauptschule", category: "Système scolaire secondaire" },
    { id: 13, french: "l'école réelle (niveau intermédiaire)", german: "die Realschule", category: "Système scolaire secondaire" },
    { id: 14, french: "le lycée", german: "das Gymnasium", category: "Système scolaire secondaire" },
    { id: 15, french: "la crise du modèle dual", german: "die Krise des dualen Modells", category: "Défis du système dual" },
    { id: 16, french: "la baisse du nombre d'apprentis", german: "der Rückgang der Auszubildenden", category: "Défis du système dual" },
    { id: 17, french: "l'excellence universitaire", german: "die universitäre Exzellenz", category: "Excellence académique" },
    { id: 18, french: "l'attractivité internationale", german: "die internationale Attraktivität", category: "Attractivité internationale" },
    { id: 19, french: "la concurrence", german: "die Konkurrenz", category: "Concurrence éducative" },
    { id: 20, french: "la formation scolaire", german: "die schulische Ausbildung", category: "Formation scolaire" },
    { id: 21, french: "la maternelle", german: "der Kindergarten", category: "Éducation précoce" },
    { id: 22, french: "l'école primaire", german: "die Grundschule", category: "Enseignement primaire" },
    { id: 23, french: "l'enseignement secondaire", german: "die Sekundarstufe", category: "Enseignement secondaire" },
    { id: 24, french: "le baccalauréat", german: "das Abitur", category: "Diplômes" },
    { id: 25, french: "l'école professionnelle", german: "die Berufsschule", category: "Formation professionnelle" },
    { id: 26, french: "le contrat d'apprentissage", german: "der Ausbildungsvertrag", category: "Apprentissage" },
    { id: 27, french: "le formateur", german: "der Ausbilder", category: "Personnel de formation" },
    { id: 28, french: "l'apprentissage", german: "die Lehre", category: "Apprentissage" },
    { id: 29, french: "l'université", german: "die Universität", category: "Établissements supérieurs" },
    { id: 30, french: "l'école supérieure spécialisée", german: "die Fachhochschule", category: "Établissements supérieurs" },
    { id: 31, french: "le bachelor", german: "der Bachelor", category: "Diplômes supérieurs" },
    { id: 32, french: "le master", german: "der Master", category: "Diplômes supérieurs" },
    { id: 33, french: "la thèse de doctorat", german: "die Promotion", category: "Doctorat" },
    { id: 34, french: "l'habilitation", german: "die Habilitation", category: "Doctorat" },
    { id: 35, french: "l'initiative d'excellence", german: "die Exzellenzinitiative", category: "Programmes d'excellence" },
    { id: 36, french: "la fondation Humboldt", german: "die Humboldt-Stiftung", category: "Organismes de recherche" },
    { id: 37, french: "le DAAD (service allemand d'échanges académiques)", german: "die DAAD (Deutscher Akademischer Austauschdienst)", category: "Échanges internationaux" },
    { id: 38, french: "les opportunités éducatives", german: "die Bildungschancen", category: "Opportunités éducatives" },
    { id: 39, french: "l'origine sociale", german: "die soziale Herkunft", category: "Facteurs sociaux" },
    { id: 40, french: "l'étude PISA", german: "die PISA-Studie", category: "Évaluations internationales" },
    { id: 41, french: "l'inclusion", german: "die Inklusion", category: "Inclusion scolaire" },
    { id: 42, french: "l'école à temps plein", german: "die Ganztagsschule", category: "Organisation scolaire" },
    { id: 43, french: "l'obligation scolaire", german: "die Schulpflicht", category: "Obligations légales" },
    { id: 44, french: "l'enseignant", german: "der Lehrer", category: "Personnel éducatif" },
    { id: 45, french: "l'élève (féminin)", german: "die Schülerin", category: "Apprenants" },
    { id: 46, french: "l'élève (masculin)", german: "der Schüler", category: "Apprenants" },
    { id: 47, french: "la note", german: "die Note", category: "Évaluation" },
    { id: 48, french: "le bulletin", german: "das Zeugnis", category: "Évaluation" },
    { id: 49, french: "l'examen", german: "die Prüfung", category: "Évaluation" },
    { id: 50, french: "l'examen final", german: "die Abschlussprüfung", category: "Évaluation" },
    { id: 51, french: "l'apprenti", german: "der Azubi", category: "Apprentissage" },
    { id: 52, french: "la CCI (chambre de commerce et d'industrie)", german: "die IHK (Industrie- und Handelskammer)", category: "Organismes de formation" },
    { id: 53, french: "la chambre des métiers", german: "die Handwerkskammer", category: "Organismes de formation" },
    { id: 54, french: "la formation duale", german: "die duale Ausbildung", category: "Système dual" },
    { id: 55, french: "le stage en entreprise", german: "die Betriebspraktikum", category: "Expérience pratique" },
    { id: 56, french: "la théorie et la pratique", german: "die Theorie und Praxis", category: "Méthodes pédagogiques" },
    { id: 57, french: "le spécialiste qualifié", german: "die Fachkraft", category: "Qualifications" },
    { id: 58, french: "le maître artisan", german: "der Meister", category: "Qualifications" },
    { id: 59, french: "la réforme de Bologne", german: "die Bologna-Reform", category: "Réformes éducatives" },
    { id: 60, french: "les points ECTS", german: "die ECTS-Punkte", category: "Système universitaire européen" },
    { id: 61, french: "l'accréditation", german: "die Akkreditierung", category: "Qualité éducative" },
    { id: 62, french: "les étudiants", german: "die Studierenden", category: "Étudiants universitaires" },
    { id: 63, french: "le cours magistral", german: "die Vorlesung", category: "Enseignement universitaire" },
    { id: 64, french: "le séminaire", german: "das Seminar", category: "Enseignement universitaire" },
    { id: 65, french: "la bibliothèque", german: "die Bibliothek", category: "Infrastructure universitaire" },
    { id: 66, french: "le financement de la recherche", german: "die Forschungsförderung", category: "Financement recherche" },
    { id: 67, french: "la DFG (communauté allemande de recherche)", german: "die DFG (Deutsche Forschungsgemeinschaft)", category: "Organismes de recherche" },
    { id: 68, french: "la société Max-Planck", german: "die Max-Planck-Gesellschaft", category: "Organismes de recherche" },
    { id: 69, french: "la société Fraunhofer", german: "die Fraunhofer-Gesellschaft", category: "Organismes de recherche" },
    { id: 70, french: "la politique éducative", german: "die Bildungspolitik", category: "Politique éducative" },
    { id: 71, french: "le ministère de l'éducation (länder)", german: "das Kultusministerium", category: "Institutions politiques" },
    { id: 72, french: "la conférence des ministres de l'éducation", german: "die KMK (Kultusministerkonferenz)", category: "Institutions politiques" },
    { id: 73, french: "les standards éducatifs", german: "die Bildungsstandards", category: "Standards éducatifs" },
    { id: 74, french: "la numérisation de l'éducation", german: "die Digitalisierung der Bildung", category: "Transformation numérique" },
    { id: 75, french: "l'enseignement à distance", german: "der Fernunterricht", category: "Enseignement numérique" },
    { id: 76, french: "l'apprentissage en ligne", german: "die E-Learning", category: "Enseignement numérique" },
    { id: 77, french: "la pauvreté éducative", german: "die Bildungsarmut", category: "Inégalités éducatives" },
    { id: 78, french: "la promotion précoce", german: "die Frühe Förderung", category: "Soutien scolaire" },
    { id: 79, french: "la crèche", german: "die Kita (Kindertagesstätte)", category: "Éducation précoce" },
    { id: 80, french: "les décrocheurs scolaires", german: "die Schulabbrecher", category: "Échec scolaire" },
    { id: 81, french: "la seconde chance", german: "die Zweite Chance", category: "Rattrapage scolaire" },
    { id: 82, french: "la formation continue", german: "die Weiterbildung", category: "Formation continue" },
    { id: 83, french: "la reconversion", german: "die Umschulung", category: "Formation continue" },
    { id: 84, french: "l'académisation", german: "die Akademisierung", category: "Tendances éducatives" },
    { id: 85, french: "la surqualification", german: "die Überqualifikation", category: "Défis du marché du travail" },
    { id: 86, french: "le nombre d'étudiants", german: "die Studierendenzahlen", category: "Statistiques étudiantes" },
    { id: 87, french: "les étudiants étrangers", german: "die Auslandsstudierende", category: "Étudiants internationaux" },
    { id: 88, french: "le programme Erasmus", german: "die Erasmus-Programm", category: "Programmes d'échange" },
    { id: 89, french: "la mobilité", german: "die Mobilität", category: "Mobilité étudiante" },
    { id: 90, french: "le financement de l'éducation", german: "die Bildungsfinanzierung", category: "Financement éducatif" },
    { id: 91, french: "le BAföG (aide financière aux étudiants)", german: "das BAföG", category: "Aides financières" },
    { id: 92, french: "les frais de scolarité", german: "die Studiengebühren", category: "Coûts éducatifs" },
    { id: 93, french: "les écoles privées", german: "die Privatschulen", category: "Types d'établissements" },
    { id: 94, french: "les écoles d'élite", german: "die Eliteschulen", category: "Types d'établissements" },
    { id: 95, french: "l'école polyvalente", german: "die Gesamtschule", category: "Types d'établissements" },
    { id: 96, french: "l'école spécialisée", german: "die Förderschule", category: "Éducation spécialisée" },
    { id: 97, french: "l'inégalité éducative", german: "die Bildungsungleichheit", category: "Inégalités éducatives" },
    { id: 98, french: "la justice de genre", german: "die Geschlechtergerechtigkeit", category: "Égalité des genres" },
    { id: 99, french: "les matières STEM", german: "die MINT-Fächer", category: "Disciplines scientifiques" },
    { id: 100, french: "la formation des enseignants", german: "die Lehrerbildung", category: "Formation du personnel" }
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
      "Éducation générale": "bg-carnet-red/10 text-carnet-red-deep",
      "Formation": "bg-indigo-100 text-indigo-800",
      "Système éducatif": "bg-sky-100 text-sky-800",
      "Formation professionnelle": "bg-cyan-100 text-cyan-800",
      "Enseignement supérieur": "bg-carnet-red/10 text-carnet-red-deep",
      "Orientation scolaire": "bg-violet-100 text-violet-800",
      "Système dual": "bg-teal-100 text-teal-800",
      "Recherche": "bg-purple-100 text-purple-800",
      "Équité éducative": "bg-emerald-100 text-emerald-800",
      "Système scolaire secondaire": "bg-indigo-100 text-indigo-800",
      "Défis du système dual": "bg-red-100 text-red-800",
      "Excellence académique": "bg-amber-100 text-amber-800",
      "Attractivité internationale": "bg-green-100 text-green-800",
      "Concurrence éducative": "bg-amber-100 text-orange-800",
      "Formation scolaire": "bg-carnet-rule/30 text-carnet-ink",
      "Éducation précoce": "bg-pink-100 text-pink-800",
      "Enseignement primaire": "bg-lime-100 text-lime-800",
      "Enseignement secondaire": "bg-carnet-red/10 text-carnet-red-deep",
      "Diplômes": "bg-yellow-100 text-yellow-800",
      "Apprentissage": "bg-cyan-100 text-cyan-800",
      "Personnel de formation": "bg-rose-100 text-rose-800",
      "Établissements supérieurs": "bg-indigo-100 text-indigo-800",
      "Diplômes supérieurs": "bg-purple-100 text-purple-800",
      "Doctorat": "bg-violet-100 text-violet-800",
      "Programmes d'excellence": "bg-amber-100 text-amber-800",
      "Organismes de recherche": "bg-emerald-100 text-emerald-800",
      "Échanges internationaux": "bg-sky-100 text-sky-800",
      "Opportunités éducatives": "bg-green-100 text-green-800",
      "Facteurs sociaux": "bg-gray-100 text-gray-800",
      "Évaluations internationales": "bg-amber-100 text-orange-800",
      "Inclusion scolaire": "bg-teal-100 text-teal-800",
      "Organisation scolaire": "bg-carnet-red/10 text-carnet-red-deep",
      "Obligations légales": "bg-red-100 text-red-800",
      "Personnel éducatif": "bg-indigo-100 text-indigo-800",
      "Apprenants": "bg-pink-100 text-pink-800",
      "Évaluation": "bg-yellow-100 text-yellow-800",
      "Organismes de formation": "bg-cyan-100 text-cyan-800",
      "Expérience pratique": "bg-lime-100 text-lime-800",
      "Méthodes pédagogiques": "bg-purple-100 text-purple-800",
      "Qualifications": "bg-amber-100 text-amber-800",
      "Réformes éducatives": "bg-rose-100 text-rose-800",
      "Système universitaire européen": "bg-violet-100 text-violet-800",
      "Qualité éducative": "bg-emerald-100 text-emerald-800",
      "Étudiants universitaires": "bg-carnet-red/10 text-carnet-red-deep",
      "Enseignement universitaire": "bg-indigo-100 text-indigo-800",
      "Infrastructure universitaire": "bg-carnet-rule/30 text-carnet-ink",
      "Financement recherche": "bg-green-100 text-green-800",
      "Politique éducative": "bg-amber-100 text-orange-800",
      "Institutions politiques": "bg-red-100 text-red-800",
      "Standards éducatifs": "bg-yellow-100 text-yellow-800",
      "Transformation numérique": "bg-cyan-100 text-cyan-800",
      "Enseignement numérique": "bg-sky-100 text-sky-800",
      "Inégalités éducatives": "bg-red-100 text-red-800",
      "Soutien scolaire": "bg-emerald-100 text-emerald-800",
      "Échec scolaire": "bg-amber-100 text-orange-800",
      "Rattrapage scolaire": "bg-lime-100 text-lime-800",
      "Formation continue": "bg-teal-100 text-teal-800",
      "Tendances éducatives": "bg-purple-100 text-purple-800",
      "Défis du marché du travail": "bg-amber-100 text-amber-800",
      "Statistiques étudiantes": "bg-gray-100 text-gray-800",
      "Étudiants internationaux": "bg-carnet-red/10 text-carnet-red-deep",
      "Programmes d'échange": "bg-violet-100 text-violet-800",
      "Mobilité étudiante": "bg-indigo-100 text-indigo-800",
      "Financement éducatif": "bg-green-100 text-green-800",
      "Aides financières": "bg-emerald-100 text-emerald-800",
      "Coûts éducatifs": "bg-yellow-100 text-yellow-800",
      "Types d'établissements": "bg-pink-100 text-pink-800",
      "Éducation spécialisée": "bg-rose-100 text-rose-800",
      "Égalité des genres": "bg-purple-100 text-purple-800",
      "Disciplines scientifiques": "bg-cyan-100 text-cyan-800",
      "Formation du personnel": "bg-carnet-rule/30 text-carnet-ink"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="relative">
      {/* Floating elements - Orange and blue bubbles */}

      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-carnet-paper/95 backdrop-blur-sm/95 backdrop-blur supports-[backdrop-filter]:bg-carnet-paper/95 backdrop-blur-sm/60 border-b border-border/40 relative z-10">
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
            <span className="text-gray-900 font-bold">Vocabulaire Éducation</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* En-tête */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <div className="p-3 rounded-lg bg-gradient-to-br from-orange-500 to-pr-orange text-white">
              <BookOpen className="h-9 w-9" />
            </div>
            Vocabulaire Éducation et Formation
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Maîtrisez le vocabulaire éducatif et de formation allemand avec des flashcards interactives
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">{cards.length} mots</Badge>
            <Badge variant="outline">Module 7 - Bildung und Ausbildung</Badge>
            <Badge className="bg-gradient-to-r from-orange-500 to-pr-orange text-white">Flashcards</Badge>
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
              className="bg-gradient-to-r from-orange-500 to-pr-orange h-2.5 rounded-full transition-all duration-300"
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
              <div className="absolute -z-10 top-4 right-4">
                <Badge className={getCategoryColor(currentCard.category)} variant="secondary">
                  {currentCard.category}
                </Badge>
              </div>

              {/* Indicateur de face */}
              <div className="absolute -z-10 top-4 left-4 flex items-center gap-2">
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
          <Card className="border-2 border-orange-200 bg-gradient-to-r from-orange-50 to-blue-50 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-orange-900 mb-4">🎓 Conseils pour l'apprentissage</h3>
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
                    <li>• Vocabulaire essentiel pour le système dual allemand</li>
                    <li>• Termes techniques de l'enseignement supérieur</li>
                    <li>• Base indispensable pour Module 7 - Bildung und Ausbildung</li>
                    <li>• Révisez par thèmes (système dual, université, recherche)</li>
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

export default VocabulaireBildungFlashcardsPage;