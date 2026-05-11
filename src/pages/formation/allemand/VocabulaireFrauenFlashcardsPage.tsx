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

const VocabulaireFrauenFlashcardsPage = () => {
  const vocabularyData: VocabularyCard[] = [
    { id: 1, french: "l'égalité des genres", german: "die Geschlechtergleichstellung", category: "Égalité des genres" },
    { id: 2, french: "les femmes dans la société", german: "die Frauen in der Gesellschaft", category: "Femmes et société" },
    { id: 3, french: "la participation politique", german: "die politische Partizipation", category: "Participation politique" },
    { id: 4, french: "le leadership féminin", german: "die weibliche Führung", category: "Leadership féminin" },
    { id: 5, french: "les femmes en politique", german: "die Frauen in der Politik", category: "Femmes en politique" },
    { id: 6, french: "les femmes dans l'économie", german: "die Frauen in der Wirtschaft", category: "Femmes dans l'économie" },
    { id: 7, french: "les positions de direction", german: "die Führungspositionen", category: "Positions de direction" },
    { id: 8, french: "la conciliation famille-travail", german: "die Vereinbarkeit von Familie und Beruf", category: "Conciliation vie-travail" },
    { id: 9, french: "l'évolution sociétale", german: "die gesellschaftliche Entwicklung", category: "Évolution sociale" },
    { id: 10, french: "l'égalité des sexes", german: "die Geschlechtergleichstellung", category: "Égalité des genres" },
    { id: 11, french: "le changement sociétal", german: "der gesellschaftliche Wandel", category: "Transformation sociale" },
    { id: 12, french: "l'héritage d'Angela Merkel", german: "das Erbe Angela Merkels", category: "Héritage politique" },
    { id: 13, french: "la chancellerie féminine", german: "die weibliche Kanzlerschaft", category: "Leadership politique" },
    { id: 14, french: "le quota de femmes", german: "die Frauenquote", category: "Quotas et parité" },
    { id: 15, french: "les conseils d'administration", german: "die Vorstände", category: "Gouvernance d'entreprise" },
    { id: 16, french: "les entreprises du DAX", german: "die DAX-Unternehmen", category: "Grandes entreprises" },
    { id: 17, french: "le congé parental", german: "die Elternzeit", category: "Politiques familiales" },
    { id: 18, french: "l'extension des crèches", german: "der Kita-Ausbau", category: "Garde d'enfants" },
    { id: 19, french: "la politique familiale", german: "die Familienpolitik", category: "Politiques familiales" },
    { id: 20, french: "l'écart salarial entre genres", german: "der Gender Pay Gap", category: "Écarts salariaux" },
    { id: 21, french: "les inégalités structurelles", german: "die strukturellen Ungleichheiten", category: "Inégalités structurelles" },
    { id: 22, french: "le féminisme", german: "die Feminismus", category: "Mouvements féministes" },
    { id: 23, french: "les droits des femmes", german: "die Frauenrechte", category: "Droits des femmes" },
    { id: 24, french: "l'égalité des droits", german: "die Gleichberechtigung", category: "Égalité juridique" },
    { id: 25, french: "le patriarcat", german: "die Patriarchat", category: "Structures sociales" },
    { id: 26, french: "le matriarcat", german: "die Matriarchat", category: "Structures sociales" },
    { id: 27, french: "les rôles de genre", german: "die Geschlechterrollen", category: "Rôles de genre" },
    { id: 28, french: "les stéréotypes", german: "die Stereotypen", category: "Stéréotypes de genre" },
    { id: 29, french: "la discrimination", german: "die Diskriminierung", category: "Discriminations" },
    { id: 30, french: "le sexisme", german: "die Sexismus", category: "Sexisme" },
    { id: 31, french: "le mouvement des femmes", german: "die Frauenbewegung", category: "Mouvements féministes" },
    { id: 32, french: "les suffragettes", german: "die Suffragetten", category: "Histoire féministe" },
    { id: 33, french: "le quota", german: "die Quote", category: "Quotas et parité" },
    { id: 34, french: "le plafond de verre", german: "die Gläserne Decke", category: "Obstacles professionnels" },
    { id: 35, french: "les opportunités de carrière", german: "die Karrierechancen", category: "Carrières professionnelles" },
    { id: 36, french: "les possibilités d'avancement", german: "die Aufstiegsmöglichkeiten", category: "Évolution professionnelle" },
    { id: 37, french: "les femmes au Bundestag", german: "die Frauen in der Bundestag", category: "Parlement" },
    { id: 38, french: "la chancelière fédérale", german: "die Bundeskanzlerin", category: "Haute fonction politique" },
    { id: 39, french: "Angela Merkel", german: "die Angela Merkel", category: "Figures politiques" },
    { id: 40, french: "Annalena Baerbock", german: "die Annalena Baerbock", category: "Figures politiques" },
    { id: 41, french: "les femmes dans la CDU", german: "die Frauen in der CDU", category: "Partis politiques" },
    { id: 42, french: "les femmes dans la SPD", german: "die Frauen in der SPD", category: "Partis politiques" },
    { id: 43, french: "les femmes chez les Verts", german: "die Frauen in der Grünen", category: "Partis politiques" },
    { id: 44, french: "les ministres femmes", german: "die Weibliche Minister", category: "Gouvernement" },
    { id: 45, french: "les dirigeantes économiques", german: "die Wirtschaftsführerinnen", category: "Leadership économique" },
    { id: 46, french: "les femmes aux conseils d'administration", german: "die Vorstandsfrauen", category: "Gouvernance d'entreprise" },
    { id: 47, french: "les groupes du DAX", german: "die DAX-Konzerne", category: "Grandes entreprises" },
    { id: 48, french: "Siemens", german: "die Siemens", category: "Entreprises emblématiques" },
    { id: 49, french: "Volkswagen", german: "die Volkswagen", category: "Entreprises emblématiques" },
    { id: 50, french: "la proportion de femmes", german: "die Frauenanteil", category: "Statistiques de genre" },
    { id: 51, french: "la parentalité", german: "die Elternschaft", category: "Parentalité" },
    { id: 52, french: "la maternité", german: "die Mutterschaft", category: "Maternité" },
    { id: 53, french: "la paternité", german: "die Vaterschaft", category: "Paternité" },
    { id: 54, french: "l'allocation parentale", german: "die Elterngeld", category: "Aides familiales" },
    { id: 55, french: "les allocations familiales", german: "die Kindergeld", category: "Aides familiales" },
    { id: 56, french: "la garde d'enfants", german: "die Kinderbetreuung", category: "Garde d'enfants" },
    { id: 57, french: "la crèche", german: "die Kita", category: "Garde d'enfants" },
    { id: 58, french: "la garde à temps plein", german: "die Ganztagsbetreuung", category: "Modes de garde" },
    { id: 59, french: "la promotion familiale", german: "die Familienförderung", category: "Soutien familial" },
    { id: 60, french: "l'équilibre vie professionnelle-personnelle", german: "die Work-Life-Balance", category: "Équilibre vie-travail" },
    { id: 61, french: "la différence de salaire", german: "der Lohnunterschied", category: "Inégalités salariales" },
    { id: 62, french: "l'écart salarial", german: "die Lohnlücke", category: "Écarts salariaux" },
    { id: 63, french: "salaire égal pour travail égal", german: "die gleicher Lohn für gleiche Arbeit", category: "Égalité salariale" },
    { id: 64, french: "les conventions collectives", german: "die Tarifverträge", category: "Relations sociales" },
    { id: 65, french: "le salaire minimum", german: "die Mindestlohn", category: "Rémunération" },
    { id: 66, french: "le travail à temps partiel", german: "die Teilzeitarbeit", category: "Modalités de travail" },
    { id: 67, french: "le travail à temps plein", german: "die Vollzeitarbeit", category: "Modalités de travail" },
    { id: 68, french: "le travail de soin", german: "die Care-Arbeit", category: "Travail de care" },
    { id: 69, french: "les tâches ménagères", german: "die Hausarbeit", category: "Travail domestique" },
    { id: 70, french: "la justice de genre", german: "die Geschlechtergerechtigkeit", category: "Justice de genre" },
    { id: 71, french: "l'intersectionnalité", german: "die Intersektionalität", category: "Théories féministes" },
    { id: 72, french: "la diversité", german: "die Diversität", category: "Diversité et inclusion" },
    { id: 73, french: "l'inclusion", german: "die Inklusion", category: "Diversité et inclusion" },
    { id: 74, french: "la promotion des femmes", german: "die Frauenförderung", category: "Promotion professionnelle" },
    { id: 75, french: "les programmes de mentorat", german: "die Mentoring-Programme", category: "Accompagnement professionnel" },
    { id: 76, french: "les réseaux", german: "die Netzwerke", category: "Réseaux professionnels" },
    { id: 77, french: "les réseaux de femmes", german: "die Frauennetzwerke", category: "Réseaux féminins" },
    { id: 78, french: "le mouvement MeToo", german: "die MeToo-Bewegung", category: "Mouvements contemporains" },
    { id: 79, french: "le harcèlement sexuel", german: "die sexuelle Belästigung", category: "Violences sexuelles" },
    { id: 80, french: "la violence contre les femmes", german: "die Gewalt gegen Frauen", category: "Violences de genre" },
    { id: 81, french: "la violence domestique", german: "die häusliche Gewalt", category: "Violences domestiques" },
    { id: 82, french: "la maison pour femmes", german: "die Frauenhaus", category: "Structures d'aide" },
    { id: 83, french: "la politique d'égalité", german: "die Gleichstellungspolitik", category: "Politiques d'égalité" },
    { id: 84, french: "le ministère des Femmes", german: "die Frauenministerium", category: "Institutions spécialisées" },
    { id: 85, french: "l'égalité dans l'UE", german: "die EU-Gleichstellung", category: "Niveau européen" },
    { id: 86, french: "la CEDAW (convention sur l'élimination de la discrimination à l'égard des femmes)", german: "die CEDAW", category: "Conventions internationales" },
    { id: 87, french: "les études de genre", german: "die Geschlechterstudien", category: "Recherche académique" },
    { id: 88, french: "l'intégration de la dimension de genre", german: "die Gender-Mainstreaming", category: "Approches transversales" },
    { id: 89, french: "la réglementation des quotas", german: "die Quotenregelung", category: "Régulation légale" },
    { id: 90, french: "la fondation AllBright", german: "die AllBright-Stiftung", category: "Organisations spécialisées" },
    { id: 91, french: "les femmes dans la science", german: "die Frauen in der Wissenschaft", category: "STEM et sciences" },
    { id: 92, french: "les femmes dans la technique", german: "die Frauen in der Technik", category: "STEM et sciences" },
    { id: 93, french: "les matières STEM", german: "die STEM-Fächer", category: "Éducation STEM" },
    { id: 94, french: "les opportunités éducatives", german: "die Bildungschancen", category: "Éducation et formation" },
    { id: 95, french: "les parents isolés", german: "die Alleinerziehende", category: "Famille monoparentale" },
    { id: 96, french: "la pauvreté infantile", german: "die Kinderarmut", category: "Pauvreté familiale" },
    { id: 97, french: "la politique sociale", german: "die Sozialpolitik", category: "Politiques sociales" },
    { id: 98, french: "l'écart de pension", german: "die Rentenlücke", category: "Inégalités de retraite" },
    { id: 99, french: "la pauvreté des personnes âgées", german: "die Altersarmut", category: "Précarité âgée" },
    { id: 100, french: "l'avenir de l'égalité", german: "die Zukunft der Gleichstellung", category: "Perspectives d'avenir" }
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
      "Égalité des genres": "bg-carnet-rule/30 text-carnet-ink",
      "Femmes et société": "bg-carnet-rule/30 text-carnet-ink",
      "Participation politique": "bg-carnet-rule/30 text-carnet-ink",
      "Leadership féminin": "bg-carnet-rule/30 text-carnet-ink",
      "Femmes en politique": "bg-carnet-rule/30 text-carnet-ink",
      "Femmes dans l'économie": "bg-carnet-rule/30 text-carnet-ink",
      "Positions de direction": "bg-carnet-red/10 text-carnet-red-deep",
      "Conciliation vie-travail": "bg-carnet-rule/30 text-carnet-ink",
      "Évolution sociale": "bg-carnet-rule/30 text-carnet-ink",
      "Transformation sociale": "bg-carnet-rule/30 text-carnet-ink",
      "Héritage politique": "bg-carnet-rule/30 text-carnet-ink",
      "Leadership politique": "bg-carnet-rule/30 text-carnet-ink",
      "Quotas et parité": "bg-carnet-rule/30 text-carnet-ink",
      "Gouvernance d'entreprise": "bg-carnet-rule/30 text-carnet-ink",
      "Grandes entreprises": "bg-carnet-rule/30 text-carnet-ink",
      "Politiques familiales": "bg-carnet-rule/30 text-carnet-ink",
      "Garde d'enfants": "bg-carnet-rule/30 text-carnet-ink",
      "Écarts salariaux": "bg-carnet-rule/30 text-carnet-ink",
      "Inégalités structurelles": "bg-carnet-rule/30 text-carnet-ink",
      "Mouvements féministes": "bg-carnet-rule/30 text-carnet-ink",
      "Droits des femmes": "bg-carnet-rule/30 text-carnet-ink",
      "Égalité juridique": "bg-carnet-rule/30 text-carnet-ink",
      "Structures sociales": "bg-carnet-rule/30 text-carnet-ink",
      "Rôles de genre": "bg-carnet-rule/30 text-carnet-ink",
      "Stéréotypes de genre": "bg-carnet-red/10 text-carnet-red-deep",
      "Discriminations": "bg-carnet-rule/30 text-carnet-ink",
      "Sexisme": "bg-carnet-rule/30 text-carnet-ink",
      "Histoire féministe": "bg-carnet-rule/30 text-carnet-ink",
      "Obstacles professionnels": "bg-carnet-rule/30 text-carnet-ink",
      "Carrières professionnelles": "bg-carnet-rule/30 text-carnet-ink",
      "Évolution professionnelle": "bg-carnet-rule/30 text-carnet-ink",
      "Parlement": "bg-carnet-rule/30 text-carnet-ink",
      "Haute fonction politique": "bg-carnet-rule/30 text-carnet-ink",
      "Figures politiques": "bg-carnet-rule/30 text-carnet-ink",
      "Partis politiques": "bg-carnet-rule/30 text-carnet-ink",
      "Gouvernement": "bg-carnet-red/10 text-carnet-red-deep",
      "Leadership économique": "bg-carnet-rule/30 text-carnet-ink",
      "Entreprises emblématiques": "bg-carnet-rule/30 text-carnet-ink",
      "Statistiques de genre": "bg-carnet-rule/30 text-carnet-ink",
      "Parentalité": "bg-carnet-rule/30 text-carnet-ink",
      "Maternité": "bg-carnet-rule/30 text-carnet-ink",
      "Paternité": "bg-carnet-red/10 text-carnet-red-deep",
      "Aides familiales": "bg-carnet-rule/30 text-carnet-ink",
      "Modes de garde": "bg-carnet-rule/30 text-carnet-ink",
      "Soutien familial": "bg-carnet-rule/30 text-carnet-ink",
      "Équilibre vie-travail": "bg-carnet-rule/30 text-carnet-ink",
      "Inégalités salariales": "bg-carnet-rule/30 text-carnet-ink",
      "Égalité salariale": "bg-carnet-rule/30 text-carnet-ink",
      "Relations sociales": "bg-carnet-rule/30 text-carnet-ink",
      "Rémunération": "bg-carnet-rule/30 text-carnet-ink",
      "Modalités de travail": "bg-carnet-rule/30 text-carnet-ink",
      "Travail de care": "bg-carnet-rule/30 text-carnet-ink",
      "Travail domestique": "bg-carnet-rule/30 text-carnet-ink",
      "Justice de genre": "bg-carnet-rule/30 text-carnet-ink",
      "Théories féministes": "bg-carnet-rule/30 text-carnet-ink",
      "Diversité et inclusion": "bg-carnet-rule/30 text-carnet-ink",
      "Promotion professionnelle": "bg-carnet-rule/30 text-carnet-ink",
      "Accompagnement professionnel": "bg-carnet-rule/30 text-carnet-ink",
      "Réseaux professionnels": "bg-carnet-rule/30 text-carnet-ink",
      "Réseaux féminins": "bg-carnet-rule/30 text-carnet-ink",
      "Mouvements contemporains": "bg-carnet-rule/30 text-carnet-ink",
      "Violences sexuelles": "bg-carnet-rule/30 text-carnet-ink",
      "Violences de genre": "bg-carnet-rule/30 text-carnet-ink",
      "Violences domestiques": "bg-carnet-rule/30 text-carnet-ink",
      "Structures d'aide": "bg-carnet-red/10 text-carnet-red-deep",
      "Politiques d'égalité": "bg-carnet-rule/30 text-carnet-ink",
      "Institutions spécialisées": "bg-carnet-rule/30 text-carnet-ink",
      "Niveau européen": "bg-carnet-rule/30 text-carnet-ink",
      "Conventions internationales": "bg-carnet-rule/30 text-carnet-ink",
      "Recherche académique": "bg-carnet-rule/30 text-carnet-ink",
      "Approches transversales": "bg-carnet-rule/30 text-carnet-ink",
      "Régulation légale": "bg-carnet-rule/30 text-carnet-ink",
      "Organisations spécialisées": "bg-carnet-rule/30 text-carnet-ink",
      "STEM et sciences": "bg-carnet-rule/30 text-carnet-ink",
      "Éducation STEM": "bg-carnet-rule/30 text-carnet-ink",
      "Éducation et formation": "bg-carnet-rule/30 text-carnet-ink",
      "Famille monoparentale": "bg-carnet-rule/30 text-carnet-ink",
      "Pauvreté familiale": "bg-carnet-rule/30 text-carnet-ink",
      "Politiques sociales": "bg-carnet-rule/30 text-carnet-ink",
      "Inégalités de retraite": "bg-carnet-rule/30 text-carnet-ink",
      "Précarité âgée": "bg-carnet-rule/30 text-carnet-ink",
      "Perspectives d'avenir": "bg-carnet-rule/30 text-carnet-ink"
    };
    return colors[category as keyof typeof colors] || "bg-carnet-paper-2 text-carnet-ink";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pr-orange-pale via-white to-pr-orange-soft">
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
            <span className="text-carnet-ink font-bold">Vocabulaire Femmes</span>
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
            <div className="p-3 rounded-lg bg-pr-orange-dark text-white">
              <BookOpen className="h-9 w-9" />
            </div>
            Vocabulaire Femmes dans la Société
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Maîtrisez le vocabulaire de l'égalité des genres et des femmes allemandes avec des flashcards interactives
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">{cards.length} mots</Badge>
            <Badge variant="outline">Module 9 - Frauen in der deutschen Gesellschaft</Badge>
            <Badge className="bg-pr-orange-dark">Flashcards</Badge>
          </div>
        </div>

        {/* Barre de progrès */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-carnet-ink-soft">Progression</span>
            <span className="text-sm font-medium text-pr-orange-dark">{currentIndex + 1} / {cards.length}</span>
          </div>
          <div className="w-full bg-carnet-rule/40 rounded-full h-2.5">
            <div 
              className="bg-gradient-to-r from-pr-orange to-pr-orange-dark h-2.5 rounded-full transition-all duration-300"
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
            <Card className="mb-4 bg-pr-orange-pale border-pr-orange-soft">
              <CardContent className="p-4">
                <h3 className="font-semibold text-carnet-ink mb-3">Raccourcis clavier :</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-pr-orange-dark">
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
                    <Eye className="h-4 w-4 text-pr-orange-dark" />
                    <span className="text-sm font-medium text-pr-orange-dark">Allemand</span>
                  </>
                ) : (
                  <>
                    <EyeOff className="h-4 w-4 text-pr-orange-dark" />
                    <span className="text-sm font-medium text-pr-orange-dark">Français</span>
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
          <Card className="border-2 border-pr-orange-soft bg-gradient-to-r from-pr-orange-pale to-pr-orange-soft shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-carnet-ink mb-4">♀️ Conseils pour l'apprentissage</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-carnet-ink">Technique de révision :</h4>
                  <ul className="text-sm text-pr-orange-dark space-y-1">
                    <li>• Commencez par le français (plus familier)</li>
                    <li>• Tentez de deviner l'allemand avant de retourner</li>
                    <li>• Répétez à voix haute pour la prononciation</li>
                    <li>• Utilisez les catégories pour regrouper les concepts</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-carnet-ink">Pour les concours :</h4>
                  <ul className="text-sm text-pr-orange-dark space-y-1">
                    <li>• Vocabulaire essentiel pour l'égalité des genres</li>
                    <li>• Termes techniques de la parité en Allemagne</li>
                    <li>• Base indispensable pour Module 9 - Frauen in der deutschen Gesellschaft</li>
                    <li>• Révisez par thèmes (politique, économie, famille, droits)</li>
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

export default VocabulaireFrauenFlashcardsPage;