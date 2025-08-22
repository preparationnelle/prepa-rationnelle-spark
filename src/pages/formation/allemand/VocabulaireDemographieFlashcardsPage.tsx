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

const VocabulaireDemographieFlashcardsPage = () => {
  const vocabularyData: VocabularyCard[] = [
    { id: 1, french: "le vieillissement de la population", german: "die Bevölkerungsalterung", category: "Démographie" },
    { id: 2, french: "le changement démographique", german: "der demografische Wandel", category: "Démographie" },
    { id: 3, french: "le taux de natalité", german: "die Geburtenrate", category: "Statistiques" },
    { id: 4, french: "le taux de mortalité", german: "die Sterberate", category: "Statistiques" },
    { id: 5, french: "l'espérance de vie", german: "die Lebenserwartung", category: "Statistiques" },
    { id: 6, french: "la pyramide des âges", german: "die Alterspyramide", category: "Démographie" },
    { id: 7, french: "le sur-vieillissement", german: "die Überalterung", category: "Démographie" },
    { id: 8, french: "l'âge moyen", german: "das Durchschnittsalter", category: "Statistiques" },
    { id: 9, french: "la pénurie de main-d'œuvre qualifiée", german: "der Fachkräftemangel", category: "Emploi" },
    { id: 10, french: "les travailleurs étrangers", german: "die ausländischen Arbeitskräfte", category: "Migration" },
    { id: 11, french: "l'immigration", german: "die Zuwanderung", category: "Migration" },
    { id: 12, french: "l'émigration", german: "die Auswanderung", category: "Migration" },
    { id: 13, french: "la migration", german: "die Migration", category: "Migration" },
    { id: 14, french: "les réfugiés", german: "die Flüchtlinge", category: "Migration" },
    { id: 15, french: "les demandeurs d'asile", german: "die Asylbewerber", category: "Migration" },
    { id: 16, french: "les travailleurs invités", german: "die Gastarbeiter", category: "Migration" },
    { id: 17, french: "la loi sur l'immigration", german: "das Einwanderungsgesetz", category: "Législation" },
    { id: 18, french: "l'intégration", german: "die Integration", category: "Société" },
    { id: 19, french: "l'assimilation", german: "die Assimilation", category: "Société" },
    { id: 20, french: "le multiculturalisme", german: "der Multikulturalismus", category: "Société" },
    { id: 21, french: "le cours de langue", german: "der Sprachkurs", category: "Intégration" },
    { id: 22, french: "la double nationalité", german: "die doppelte Staatsbürgerschaft", category: "Législation" },
    { id: 23, french: "l'inégalité sociale", german: "die soziale Ungleichheit", category: "Inégalités" },
    { id: 24, french: "la précarisation", german: "die Prekarisierung", category: "Inégalités" },
    { id: 25, french: "le plein emploi", german: "die Vollbeschäftigung", category: "Emploi" },
    { id: 26, french: "le chômage", german: "die Arbeitslosigkeit", category: "Emploi" },
    { id: 27, french: "la pauvreté", german: "die Armut", category: "Inégalités" },
    { id: 28, french: "la richesse", german: "der Reichtum", category: "Inégalités" },
    { id: 29, french: "l'aide sociale", german: "die Sozialhilfe", category: "Protection sociale" },
    { id: 30, french: "le revenu citoyen", german: "das Bürgergeld", category: "Protection sociale" },
    { id: 31, french: "le marché du travail", german: "der Arbeitsmarkt", category: "Emploi" },
    { id: 32, french: "le salaire minimum", german: "der Mindestlohn", category: "Emploi" },
    { id: 33, french: "la convention collective", german: "der Tarifvertrag", category: "Emploi" },
    { id: 34, french: "la pension", german: "die Rente", category: "Protection sociale" },
    { id: 35, french: "la réforme des retraites", german: "die Rentenreform", category: "Protection sociale" },
    { id: 36, french: "l'âge de la retraite", german: "das Rentenalter", category: "Protection sociale" },
    { id: 37, french: "les soins", german: "die Pflege", category: "Santé" },
    { id: 38, french: "les soins aux personnes âgées", german: "die Altenpflege", category: "Santé" },
    { id: 39, french: "la démence", german: "die Demenz", category: "Santé" },
    { id: 40, french: "la réunification", german: "die Wiedervereinigung", category: "Histoire" },
    { id: 41, french: "la fracture Est-Ouest", german: "der Ost-West-Bruch", category: "Géographie" },
    { id: 42, french: "l'Allemagne de l'Est", german: "das Ostdeutschland", category: "Géographie" },
    { id: 43, french: "l'Allemagne de l'Ouest", german: "das Westdeutschland", category: "Géographie" },
    { id: 44, french: "la migration sortante", german: "die Abwanderung", category: "Migration" },
    { id: 45, french: "l'exode rural", german: "die Landflucht", category: "Migration" },
    { id: 46, french: "l'urbanisation", german: "die Urbanisierung", category: "Société" },
    { id: 47, french: "le changement structurel", german: "der Strukturwandel", category: "Société" },
    { id: 48, french: "l'AfD (Alternative pour l'Allemagne)", german: "die AfD", category: "Politique" },
    { id: 49, french: "les Verts", german: "die Grünen", category: "Politique" },
    { id: 50, french: "la politique familiale", german: "die Familienpolitik", category: "Politique" },
    { id: 51, french: "la garde d'enfants", german: "die Kinderbetreuung", category: "Famille" },
    { id: 52, french: "l'égalité des droits", german: "die Gleichberechtigung", category: "Droits" },
    { id: 53, french: "la justice de genre", german: "die Geschlechtergerechtigkeit", category: "Droits" },
    { id: 54, french: "le Hartz-IV (ancien système d'aide)", german: "das Hartz-IV", category: "Protection sociale" },
    { id: 55, french: "l'État providence", german: "der Sozialstaat", category: "Protection sociale" },
    { id: 56, french: "les défis démographiques", german: "die demografischen Herausforderungen", category: "Démographie" },
    { id: 57, french: "le déclin démographique", german: "der Bevölkerungsrückgang", category: "Démographie" },
    { id: 58, french: "le taux de fécondité", german: "die Fertilitätsrate", category: "Statistiques" },
    { id: 59, french: "l'origine migratoire", german: "der Migrationshintergrund", category: "Migration" },
    { id: 60, french: "la politique d'intégration", german: "die Integrationspolitik", category: "Intégration" },
    { id: 61, french: "la culture d'accueil", german: "die Willkommenskultur", category: "Société" },
    { id: 62, french: "la crise des réfugiés", german: "die Flüchtlingskrise", category: "Migration" },
    { id: 63, french: "depuis 2015", german: "seit 2015", category: "Temps" },
    { id: 64, french: "le populisme de droite", german: "der Rechtspopulismus", category: "Politique" },
    { id: 65, french: "la mobilité sociale", german: "die soziale Mobilität", category: "Société" },
    { id: 66, french: "les opportunités éducatives", german: "die Bildungschancen", category: "Éducation" },
    { id: 67, french: "la distribution des revenus", german: "die Einkommensverteilung", category: "Économie" },
    { id: 68, french: "le coefficient de Gini", german: "der Gini-Koeffizient", category: "Statistiques" },
    { id: 69, french: "l'emploi précaire", german: "die prekäre Beschäftigung", category: "Emploi" },
    { id: 70, french: "le travail intérimaire", german: "die Leiharbeit", category: "Emploi" },
    { id: 71, french: "le mini-job", german: "der Minijob", category: "Emploi" },
    { id: 72, french: "la pauvreté des personnes âgées", german: "die Altersarmut", category: "Inégalités" },
    { id: 73, french: "la pénurie de personnel soignant", german: "der Pflegekräftemangel", category: "Santé" },
    { id: 74, french: "le dividende démographique", german: "die demografische Dividende", category: "Démographie" },
    { id: 75, french: "la société en rétrécissement", german: "die schrumpfende Gesellschaft", category: "Société" },
    { id: 76, french: "le besoin en immigration", german: "der Einwanderungsbedarf", category: "Migration" },
    { id: 77, french: "la Carte Bleue (permis de travail UE)", german: "die Blue Card", category: "Législation" },
    { id: 78, french: "le permis de séjour", german: "die Aufenthaltserlaubnis", category: "Législation" },
    { id: 79, french: "l'expulsion", german: "die Abschiebung", category: "Législation" },
    { id: 80, french: "le cours d'intégration", german: "der Integrationskurs", category: "Intégration" },
    { id: 81, french: "la discrimination", german: "die Diskriminierung", category: "Société" },
    { id: 82, french: "la xénophobie", german: "die Xenophobie", category: "Société" },
    { id: 83, french: "la société multiculturelle", german: "die multikulturelle Gesellschaft", category: "Société" },
    { id: 84, french: "la cohésion sociale", german: "die soziale Kohäsion", category: "Société" },
    { id: 85, french: "l'indice d'inégalité", german: "der Ungleichheitsindex", category: "Statistiques" },
    { id: 86, french: "les réformes Hartz", german: "die Hartz-Reformen", category: "Protection sociale" },
    { id: 87, french: "l'Agenda 2010", german: "die Agenda 2010", category: "Protection sociale" },
    { id: 88, french: "la surtaxe de solidarité", german: "der Solidaritätszuschlag", category: "Économie" },
    { id: 89, french: "les disparités Est-Ouest", german: "die Ost-West-Disparitäten", category: "Géographie" },
    { id: 90, french: "la migration depuis l'Est", german: "die Abwanderung aus dem Osten", category: "Migration" },
    { id: 91, french: "l'extrémisme de droite", german: "der Rechtsextremismus", category: "Politique" },
    { id: 92, french: "le populisme", german: "der Populismus", category: "Politique" },
    { id: 93, french: "la migration des électeurs", german: "die Wählerwanderung", category: "Politique" },
    { id: 94, french: "la pauvreté infantile", german: "die Kinderarmut", category: "Inégalités" },
    { id: 95, french: "les parents isolés", german: "die Alleinerziehenden", category: "Famille" },
    { id: 96, french: "le regroupement familial", german: "die Familienzusammenführung", category: "Migration" },
    { id: 97, french: "le droit d'asile", german: "das Asylrecht", category: "Droits" },
    { id: 98, french: "le déclassement social", german: "der soziale Abstieg", category: "Société" },
    { id: 99, french: "les opportunités d'ascension", german: "die Aufstiegschancen", category: "Société" },
    { id: 100, french: "la crise démographique", german: "die demografische Krise", category: "Démographie" }
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
      "Démographie": "bg-green-100 text-green-800",
      "Statistiques": "bg-blue-100 text-blue-800",
      "Migration": "bg-orange-100 text-orange-800",
      "Emploi": "bg-purple-100 text-purple-800",
      "Société": "bg-indigo-100 text-indigo-800",
      "Inégalités": "bg-red-100 text-red-800",
      "Protection sociale": "bg-teal-100 text-teal-800",
      "Santé": "bg-pink-100 text-pink-800",
      "Histoire": "bg-gray-100 text-gray-800",
      "Géographie": "bg-emerald-100 text-emerald-800",
      "Politique": "bg-violet-100 text-violet-800",
      "Famille": "bg-rose-100 text-rose-800",
      "Droits": "bg-cyan-100 text-cyan-800",
      "Législation": "bg-slate-100 text-slate-800",
      "Intégration": "bg-amber-100 text-amber-800",
      "Éducation": "bg-lime-100 text-lime-800",
      "Économie": "bg-yellow-100 text-yellow-800",
      "Temps": "bg-neutral-100 text-neutral-800"
    };
    return colors[category as keyof typeof colors] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-50">
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
            <span className="text-gray-900 font-bold">Vocabulaire Démographie</span>
          </div>
        </div>
      </nav>

      {/* Arrière-plan animé */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-emerald-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" style={{animationDelay: '2s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" style={{animationDelay: '4s'}}></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative z-10">
        {/* En-tête */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <div className="p-3 rounded-lg bg-green-600 text-white">
              <BookOpen className="h-9 w-9" />
            </div>
            Vocabulaire Démographie et Société
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Maîtrisez le vocabulaire démographique et sociétal allemand avec des flashcards interactives
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">{cards.length} mots</Badge>
            <Badge variant="outline">Module 2 - Demografie und Gesellschaft</Badge>
            <Badge className="bg-green-600">Flashcards</Badge>
          </div>
        </div>

        {/* Barre de progrès */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Progression</span>
            <span className="text-sm font-medium text-green-600">{currentIndex + 1} / {cards.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div 
              className="bg-gradient-to-r from-green-500 to-emerald-500 h-2.5 rounded-full transition-all duration-300"
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
            <Card className="mb-4 bg-green-50 border-green-200">
              <CardContent className="p-4">
                <h3 className="font-semibold text-green-900 mb-3">Raccourcis clavier :</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-green-700">
                  <div><kbd className="bg-green-100 px-2 py-1 rounded">Espace</kbd> ou <kbd className="bg-green-100 px-2 py-1 rounded">Entrée</kbd> : Retourner la carte</div>
                  <div><kbd className="bg-green-100 px-2 py-1 rounded">←</kbd> <kbd className="bg-green-100 px-2 py-1 rounded">→</kbd> : Navigation</div>
                  <div><kbd className="bg-green-100 px-2 py-1 rounded">S</kbd> : Mélanger</div>
                  <div><kbd className="bg-green-100 px-2 py-1 rounded">R</kbd> : Recommencer</div>
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
                    <EyeOff className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-green-600">Français</span>
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
          <Card className="border-2 border-green-200 bg-gradient-to-r from-green-50 to-emerald-50 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-green-900 mb-4">💡 Conseils pour l'apprentissage</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-green-800">Technique de révision :</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Commencez par le français (plus familier)</li>
                    <li>• Tentez de deviner l'allemand avant de retourner</li>
                    <li>• Répétez à voix haute pour la prononciation</li>
                    <li>• Utilisez les catégories pour regrouper les concepts</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-green-800">Pour les concours :</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Vocabulaire essentiel pour analyser la société allemande</li>
                    <li>• Termes techniques des enjeux démographiques</li>
                    <li>• Base indispensable pour Module 2 - Demografie und Gesellschaft</li>
                    <li>• Révisez les catégories par thème (migration, emploi, etc.)</li>
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

export default VocabulaireDemographieFlashcardsPage;