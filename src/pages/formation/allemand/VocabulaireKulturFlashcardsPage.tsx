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

const VocabulaireKulturFlashcardsPage = () => {
  const vocabularyData: VocabularyCard[] = [
    { id: 1, french: "la culture", german: "die Kultur", category: "Culture générale" },
    { id: 2, french: "l'identité", german: "die Identität", category: "Identité" },
    { id: 3, french: "les questions d'identité", german: "die Identitätsfragen", category: "Identité" },
    { id: 4, french: "le multiculturalisme", german: "der Multikulturalismus", category: "Multiculturalisme" },
    { id: 5, french: "les défis culturels", german: "die kulturellen Herausforderungen", category: "Défis culturels" },
    { id: 6, french: "l'Allemagne moderne", german: "das moderne Deutschland", category: "Allemagne contemporaine" },
    { id: 7, french: "l'identité nationale", german: "die nationale Identität", category: "Identité" },
    { id: 8, french: "la laïcité", german: "die Laizität", category: "Laïcité et religion" },
    { id: 9, french: "le pluralisme religieux", german: "der religiöse Pluralismus", category: "Laïcité et religion" },
    { id: 10, french: "la mémoire historique", german: "das historische Gedächtnis", category: "Mémoire historique" },
    { id: 11, french: "le travail de mémoire", german: "die Vergangenheitsbewältigung", category: "Mémoire historique" },
    { id: 12, french: "la culture numérique", german: "die digitale Kultur", category: "Culture numérique" },
    { id: 13, french: "la société de l'information", german: "die Informationsgesellschaft", category: "Culture numérique" },
    { id: 14, french: "l'islam", german: "der Islam", category: "Islam en Allemagne" },
    { id: 15, french: "la place de l'islam", german: "die Stellung des Islams", category: "Islam en Allemagne" },
    { id: 16, french: "la troisième religion", german: "die dritte Religion", category: "Islam en Allemagne" },
    { id: 17, french: "l'impôt ecclésiastique", german: "die Kirchensteuer", category: "Système religieux" },
    { id: 18, french: "l'intégration institutionnelle", german: "die institutionelle Integration", category: "Intégration religieuse" },
    { id: 19, french: "le passé nazi", german: "die NS-Vergangenheit", category: "Passé nazi" },
    { id: 20, french: "la mémoire de l'Holocauste", german: "das Holocaust-Gedächtnis", category: "Mémoire de l'Holocauste" },
    { id: 21, french: "la fracture numérique", german: "die digitale Kluft", category: "Fractures numériques" },
    { id: 22, french: "la protection des données", german: "der Datenschutz", category: "Protection des données" },
    { id: 23, french: "le RGPD (Règlement général sur la protection des données)", german: "die DSGVO (Datenschutz-Grundverordnung)", category: "Protection des données" },
    { id: 24, french: "la diversité culturelle", german: "die kulturelle Vielfalt", category: "Diversité" },
    { id: 25, french: "l'immigration", german: "die Einwanderung", category: "Immigration" },
    { id: 26, french: "l'intégration", german: "die Integration", category: "Intégration" },
    { id: 27, french: "l'assimilation", german: "die Assimilation", category: "Intégration" },
    { id: 28, french: "les sociétés parallèles", german: "die Parallelgesellschaften", category: "Défis de l'intégration" },
    { id: 29, french: "le sécularisme", german: "der Säkularismus", category: "Sécularisation" },
    { id: 30, french: "la liberté religieuse", german: "die Religionsfreiheit", category: "Droits religieux" },
    { id: 31, french: "les églises", german: "die Kirchen", category: "Institutions religieuses" },
    { id: 32, french: "les mosquées", german: "die Moscheen", category: "Institutions religieuses" },
    { id: 33, french: "l'antisémitisme", german: "der Antisemitismus", category: "Discriminations religieuses" },
    { id: 34, french: "l'islamophobie", german: "der Islamophobie", category: "Discriminations religieuses" },
    { id: 35, french: "la xénophobie", german: "die Xenophobie", category: "Discriminations" },
    { id: 36, french: "la discrimination", german: "die Diskriminierung", category: "Discriminations" },
    { id: 37, french: "la tolérance", german: "die Toleranz", category: "Valeurs" },
    { id: 38, french: "les sites commémoratifs", german: "die Gedenkstätten", category: "Lieux de mémoire" },
    { id: 39, french: "Auschwitz", german: "das Auschwitz", category: "Lieux de mémoire" },
    { id: 40, french: "les pavés de mémoire", german: "die Stolpersteine", category: "Lieux de mémoire" },
    { id: 41, french: "la politique historique", german: "die Geschichtspolitik", category: "Politique mémorielle" },
    { id: 42, french: "la culture du souvenir", german: "die Erinnerungskultur", category: "Politique mémorielle" },
    { id: 43, french: "les médias", german: "die Medien", category: "Médias" },
    { id: 44, french: "la numérisation", german: "die Digitalisierung", category: "Transformation numérique" },
    { id: 45, french: "les réseaux sociaux", german: "die Social Media", category: "Réseaux sociaux" },
    { id: 46, french: "les fausses nouvelles", german: "die Fake News", category: "Désinformation" },
    { id: 47, french: "la bulle informationnelle", german: "die Informationsblase", category: "Désinformation" },
    { id: 48, french: "la compétence médiatique", german: "die Medienkompetenz", category: "Éducation aux médias" },
    { id: 49, french: "la liberté de la presse", german: "die Pressefreiheit", category: "Libertés médiatiques" },
    { id: 50, french: "les médias publics", german: "die Öffentlich-Rechtlichen", category: "Médias publics" },
    { id: 51, french: "l'ARD (chaîne publique)", german: "die ARD", category: "Médias publics" },
    { id: 52, french: "le ZDF (chaîne publique)", german: "die ZDF", category: "Médias publics" },
    { id: 53, french: "la culture dominante", german: "die Leitkultur", category: "Culture dominante" },
    { id: 54, french: "l'identité hybride", german: "die Hyphenidentität", category: "Identités plurielles" },
    { id: 55, french: "la diaspora", german: "die Diaspora", category: "Communautés" },
    { id: 56, french: "la communauté turque", german: "die türkische Community", category: "Communautés" },
    { id: 57, french: "les immigrés arabes", german: "die arabische Einwanderer", category: "Communautés" },
    { id: 58, french: "les réfugiés", german: "die Flüchtlinge", category: "Migration récente" },
    { id: 59, french: "la culture d'accueil", german: "die Willkommenskultur", category: "Accueil des migrants" },
    { id: 60, french: "l'AfD (parti politique)", german: "die AfD", category: "Partis politiques" },
    { id: 61, french: "le populisme de droite", german: "die Rechtspopulismus", category: "Mouvements politiques" },
    { id: 62, french: "la gauche", german: "die Linke", category: "Partis politiques" },
    { id: 63, french: "les Verts", german: "die Grünen", category: "Partis politiques" },
    { id: 64, french: "les débats", german: "die Debatten", category: "Débats sociaux" },
    { id: 65, french: "le débat sur le voile", german: "die Kopftuchdebatte", category: "Débats religieux" },
    { id: 66, french: "la circoncision", german: "die Beschneidung", category: "Pratiques religieuses" },
    { id: 67, french: "le halal", german: "die Halal", category: "Pratiques religieuses" },
    { id: 68, french: "l'enseignement religieux", german: "die Religionsunterricht", category: "Éducation religieuse" },
    { id: 69, french: "les sans religion", german: "die Konfessionslose", category: "Sécularisation" },
    { id: 70, french: "la sécularisation", german: "die Säkularisierung", category: "Sécularisation" },
    { id: 71, french: "la critique de l'église", german: "die Kirchenkritik", category: "Critique religieuse" },
    { id: 72, french: "l'époque nazie", german: "die NS-Zeit", category: "Histoire du nazisme" },
    { id: 73, french: "les réparations", german: "die Wiedergutmachung", category: "Réparations historiques" },
    { id: 74, french: "la dénazification", german: "die Entnazifizierung", category: "Dénazification" },
    { id: 75, french: "la politique orientale", german: "die Ostpolitik", category: "Politique historique" },
    { id: 76, french: "le tournant (réunification)", german: "die Wende", category: "Réunification" },
    { id: 77, french: "la souveraineté numérique", german: "die Digitale Souveränität", category: "Souveraineté numérique" },
    { id: 78, french: "les algorithmes", german: "die Algorithmen", category: "Technologies numériques" },
    { id: 79, french: "l'intelligence artificielle", german: "die Künstliche Intelligenz", category: "Technologies numériques" },
    { id: 80, french: "la vie privée", german: "die Privatsphäre", category: "Vie privée numérique" },
    { id: 81, french: "la surveillance", german: "die Überwachung", category: "Surveillance numérique" },
    { id: 82, french: "la politique du net", german: "die Netzpolitik", category: "Politiques numériques" },
    { id: 83, french: "les hackers", german: "die Hacker", category: "Cybersécurité" },
    { id: 84, french: "la cybersécurité", german: "die Cyber-Sicherheit", category: "Cybersécurité" },
    { id: 85, french: "l'éducation", german: "die Bildung", category: "Éducation" },
    { id: 86, french: "l'éducation culturelle", german: "die kulturelle Bildung", category: "Éducation culturelle" },
    { id: 87, french: "les musées", german: "die Museen", category: "Institutions culturelles" },
    { id: 88, french: "les théâtres", german: "die Theater", category: "Institutions culturelles" },
    { id: 89, french: "la littérature", german: "die Literatur", category: "Arts et lettres" },
    { id: 90, french: "Goethe", german: "die Goethe", category: "Figures littéraires" },
    { id: 91, french: "Kafka", german: "die Kafka", category: "Figures littéraires" },
    { id: 92, french: "l'industrie cinématographique", german: "die Filmindustrie", category: "Cinéma" },
    { id: 93, french: "la Berlinale", german: "die Berlinale", category: "Cinéma" },
    { id: 94, french: "la musique", german: "die Musik", category: "Musique" },
    { id: 95, french: "la culture techno", german: "die Techno-Kultur", category: "Culture urbaine" },
    { id: 96, french: "l'art de rue", german: "die Street Art", category: "Culture urbaine" },
    { id: 97, french: "les graffitis", german: "die Graffiti", category: "Culture urbaine" },
    { id: 98, french: "les subcultures", german: "die Subkulturen", category: "Cultures alternatives" },
    { id: 99, french: "la culture jeune", german: "die Jugendkultur", category: "Culture jeune" },
    { id: 100, french: "la culture pop", german: "die Popkultur", category: "Culture populaire" }
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
      "Culture générale": "bg-pink-100 text-pink-800",
      "Identité": "bg-rose-100 text-rose-800",
      "Multiculturalisme": "bg-purple-100 text-purple-800",
      "Défis culturels": "bg-red-100 text-red-800",
      "Allemagne contemporaine": "bg-amber-100 text-amber-800",
      "Laïcité et religion": "bg-blue-100 text-blue-800",
      "Mémoire historique": "bg-slate-100 text-slate-800",
      "Culture numérique": "bg-cyan-100 text-cyan-800",
      "Islam en Allemagne": "bg-green-100 text-green-800",
      "Système religieux": "bg-indigo-100 text-indigo-800",
      "Intégration religieuse": "bg-teal-100 text-teal-800",
      "Passé nazi": "bg-gray-100 text-gray-800",
      "Mémoire de l'Holocauste": "bg-yellow-100 text-yellow-800",
      "Fractures numériques": "bg-amber-100 text-orange-800",
      "Protection des données": "bg-emerald-100 text-emerald-800",
      "Diversité": "bg-violet-100 text-violet-800",
      "Immigration": "bg-lime-100 text-lime-800",
      "Intégration": "bg-sky-100 text-sky-800",
      "Défis de l'intégration": "bg-red-100 text-red-800",
      "Sécularisation": "bg-blue-100 text-blue-800",
      "Droits religieux": "bg-green-100 text-green-800",
      "Institutions religieuses": "bg-purple-100 text-purple-800",
      "Discriminations religieuses": "bg-red-100 text-red-800",
      "Discriminations": "bg-amber-100 text-orange-800",
      "Valeurs": "bg-emerald-100 text-emerald-800",
      "Lieux de mémoire": "bg-slate-100 text-slate-800",
      "Politique mémorielle": "bg-amber-100 text-amber-800",
      "Médias": "bg-cyan-100 text-cyan-800",
      "Transformation numérique": "bg-indigo-100 text-indigo-800",
      "Réseaux sociaux": "bg-pink-100 text-pink-800",
      "Désinformation": "bg-red-100 text-red-800",
      "Éducation aux médias": "bg-blue-100 text-blue-800",
      "Libertés médiatiques": "bg-green-100 text-green-800",
      "Médias publics": "bg-teal-100 text-teal-800",
      "Culture dominante": "bg-yellow-100 text-yellow-800",
      "Identités plurielles": "bg-purple-100 text-purple-800",
      "Communautés": "bg-lime-100 text-lime-800",
      "Migration récente": "bg-amber-100 text-orange-800",
      "Accueil des migrants": "bg-emerald-100 text-emerald-800",
      "Partis politiques": "bg-rose-100 text-rose-800",
      "Mouvements politiques": "bg-red-100 text-red-800",
      "Débats sociaux": "bg-violet-100 text-violet-800",
      "Débats religieux": "bg-blue-100 text-blue-800",
      "Pratiques religieuses": "bg-green-100 text-green-800",
      "Éducation religieuse": "bg-indigo-100 text-indigo-800",
      "Critique religieuse": "bg-gray-100 text-gray-800",
      "Histoire du nazisme": "bg-slate-100 text-slate-800",
      "Réparations historiques": "bg-amber-100 text-amber-800",
      "Dénazification": "bg-yellow-100 text-yellow-800",
      "Politique historique": "bg-amber-100 text-orange-800",
      "Réunification": "bg-cyan-100 text-cyan-800",
      "Souveraineté numérique": "bg-purple-100 text-purple-800",
      "Technologies numériques": "bg-blue-100 text-blue-800",
      "Vie privée numérique": "bg-pink-100 text-pink-800",
      "Surveillance numérique": "bg-red-100 text-red-800",
      "Politiques numériques": "bg-indigo-100 text-indigo-800",
      "Cybersécurité": "bg-slate-100 text-slate-800",
      "Éducation": "bg-emerald-100 text-emerald-800",
      "Éducation culturelle": "bg-teal-100 text-teal-800",
      "Institutions culturelles": "bg-violet-100 text-violet-800",
      "Arts et lettres": "bg-rose-100 text-rose-800",
      "Figures littéraires": "bg-amber-100 text-amber-800",
      "Cinéma": "bg-purple-100 text-purple-800",
      "Musique": "bg-pink-100 text-pink-800",
      "Culture urbaine": "bg-lime-100 text-lime-800",
      "Cultures alternatives": "bg-amber-100 text-orange-800",
      "Culture jeune": "bg-cyan-100 text-cyan-800",
      "Culture populaire": "bg-yellow-100 text-yellow-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-rose-50">
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
            <span className="text-gray-900 font-bold">Vocabulaire Culture</span>
          </div>
        </div>
      </nav>

      {/* Arrière-plan animé */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-rose-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 py-8 relative z-10">
        {/* En-tête */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <div className="p-3 rounded-lg bg-pink-600 text-white">
              <BookOpen className="h-9 w-9" />
            </div>
            Vocabulaire Culture et Identité
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Maîtrisez le vocabulaire culturel et identitaire allemand avec des flashcards interactives
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">{cards.length} mots</Badge>
            <Badge variant="outline">Module 6 - Kultur und Identität</Badge>
            <Badge className="bg-pink-600">Flashcards</Badge>
          </div>
        </div>

        {/* Barre de progrès */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Progression</span>
            <span className="text-sm font-medium text-pink-600">{currentIndex + 1} / {cards.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-gradient-to-r from-pink-500 to-rose-500 h-2.5 rounded-full transition-all duration-300"
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
            <Card className="mb-4 bg-pink-50 border-pink-200">
              <CardContent className="p-4">
                <h3 className="font-semibold text-pink-900 mb-3">Raccourcis clavier :</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-pink-700">
                  <div><kbd className="bg-pink-100 px-2 py-1 rounded">Espace</kbd> ou <kbd className="bg-pink-100 px-2 py-1 rounded">Entrée</kbd> : Retourner la carte</div>
                  <div><kbd className="bg-pink-100 px-2 py-1 rounded">←</kbd> <kbd className="bg-pink-100 px-2 py-1 rounded">→</kbd> : Navigation</div>
                  <div><kbd className="bg-pink-100 px-2 py-1 rounded">S</kbd> : Mélanger</div>
                  <div><kbd className="bg-pink-100 px-2 py-1 rounded">R</kbd> : Recommencer</div>
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
                    <Eye className="h-4 w-4 text-pink-600" />
                    <span className="text-sm font-medium text-pink-600">Allemand</span>
                  </>
                ) : (
                  <>
                    <EyeOff className="h-4 w-4 text-pink-600" />
                    <span className="text-sm font-medium text-pink-600">Français</span>
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
          <Card className="border-2 border-pink-200 bg-gradient-to-r from-pink-50 to-rose-50 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-pink-900 mb-4">🎭 Conseils pour l'apprentissage</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-pink-800">Technique de révision :</h4>
                  <ul className="text-sm text-pink-700 space-y-1">
                    <li>• Commencez par le français (plus familier)</li>
                    <li>• Tentez de deviner l'allemand avant de retourner</li>
                    <li>• Répétez à voix haute pour la prononciation</li>
                    <li>• Utilisez les catégories pour regrouper les concepts</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-pink-800">Pour les concours :</h4>
                  <ul className="text-sm text-pink-700 space-y-1">
                    <li>• Vocabulaire essentiel pour les questions d'identité</li>
                    <li>• Termes techniques du multiculturalisme allemand</li>
                    <li>• Base indispensable pour Module 6 - Kultur und Identität</li>
                    <li>• Révisez par thèmes (religion, mémoire, numérique, arts)</li>
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

export default VocabulaireKulturFlashcardsPage;