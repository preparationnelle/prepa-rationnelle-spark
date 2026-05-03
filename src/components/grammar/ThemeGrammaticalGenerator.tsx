import React, { useState, useCallback, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, Languages, Target, RefreshCw, Eye, EyeOff, Plus, CheckCircle, BookOpen, Save, Play, Pause, Clock, Trophy, Trash2, History, ChevronLeft, ChevronRight, BookMarked, Star, Zap, Users, Globe, Building, Code, Keyboard, PenTool, AlertCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';
import VoiceRecorder from '@/components/voice/VoiceRecorder';

interface ThemeSentence {
  french: string;
  reference: string;
  grammar_points: string[];
  notes?: string[];
  glossary?: Record<string, string>;
  difficulty_level?: string;
  specialized?: boolean;
}

interface HistorySentence extends ThemeSentence {
  id: string;
  createdAt: number;
  language: 'en' | 'de' | 'es';
  status?: 'completed' | 'in-progress' | 'new';
}

interface PredefinedSentence extends ThemeSentence {
  id: string;
  category: string;
  theme: string;
  language: 'en' | 'de' | 'es';
  used?: boolean;
}

interface ThemeEvaluation {
  score: number;
  severity: {
    major_errors: (string | {
      error: string;
      explanation: string;
      correction: string;
      rule: string;
    })[];
    minor_errors: (string | {
      error: string;
      explanation: string;
      correction: string;
      rule: string;
    })[];
    accepted_variations: string[];
  };
  corrected: string;
  reference: string;
  grammar_rules: string[];
  tips: string[];
  weak_grammar_points: string[];
  similar_sentences: string[];
  flashcard_rule: string;
}

export const ThemeGrammaticalGenerator: React.FC = () => {
  const [language, setLanguage] = useState<'en' | 'de' | 'es'>('en');
  const [currentSentence, setCurrentSentence] = useState<ThemeSentence | null>(null);
  const [studentAnswer, setStudentAnswer] = useState('');
  const [evaluation, setEvaluation] = useState<ThemeEvaluation | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [showHints, setShowHints] = useState(false);
  const [showMiniExercise, setShowMiniExercise] = useState(false);
  const [sentenceHistory, setSentenceHistory] = useState<HistorySentence[]>([]);
  const [selectedHistoryId, setSelectedHistoryId] = useState<string>('');
  const [predefinedSentences, setPredefinedSentences] = useState<PredefinedSentence[]>([]);
  const [selectedPredefinedId, setSelectedPredefinedId] = useState<string>('');
  const [completedSentence, setCompletedSentence] = useState(false);

  // Nouvelles fonctionnalités
  const [examMode, setExamMode] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  const [sessionStats, setSessionStats] = useState({
    totalExercises: 0,
    averageScore: 0,
    bestScore: 0,
    timeSpent: 0
  });

  // Nouveaux états pour l'interface améliorée
  const [showPerfectAnswer, setShowPerfectAnswer] = useState(false);
  const [isLoadingFeedback, setIsLoadingFeedback] = useState(false);
  const [feedbackLoaded, setFeedbackLoaded] = useState(false);

  // État pour le mode de saisie (écrit ou vocal)
  const [inputMode, setInputMode] = useState<'text' | 'voice'>('text');

  const { currentUser } = useAuth();
  const { toast } = useToast();

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getScoreColor = (score: number) => {
    if (score >= 8) return 'text-orange-700';
    if (score >= 6) return 'text-orange-600';
    return 'text-blue-500';
  };

  const getCategoryIcon = (category: string) => {
    const iconMap: Record<string, React.ReactNode> = {
      'Géopolitique': <Globe className="h-4 w-4" />,
      'Commerce international': <Building className="h-4 w-4" />,
      'Union européenne': <Users className="h-4 w-4" />,
      'Ressources stratégiques': <Zap className="h-4 w-4" />,
      'Continent africain': <Globe className="h-4 w-4" />,
      'Amérique latine': <Globe className="h-4 w-4" />,
      'Asie': <Globe className="h-4 w-4" />,
      'Relations internationales': <Users className="h-4 w-4" />
    };
    return iconMap[category] || <BookMarked className="h-4 w-4" />;
  };

  const getCategoryColor = (category: string) => {
    const colorMap: Record<string, string> = {
      'Géopolitique': 'bg-blue-50 text-blue-700 border-blue-200',
      'Commerce international': 'bg-green-50 text-green-700 border-green-200',
      'Union européenne': 'bg-purple-50 text-purple-700 border-purple-200',
      'Ressources stratégiques': 'bg-amber-50 text-amber-700 border-amber-200',
      'Continent africain': 'bg-orange-50 text-orange-700 border-orange-200',
      'Amérique latine': 'bg-red-50 text-red-700 border-red-200',
      'Asie': 'bg-indigo-50 text-indigo-700 border-indigo-200',
      'Relations internationales': 'bg-teal-50 text-teal-700 border-teal-200'
    };
    return colorMap[category] || 'bg-gray-50 text-gray-700 border-gray-200';
  };

  // Timer effect for exam mode
  useEffect(() => {
    if (isTimerRunning && examMode) {
      const interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isTimerRunning, examMode]);

  // Initialize predefined sentences database
  useEffect(() => {
    const initializePredefinedSentences = () => {
      const allSentences = {
        en: [
          // GÉOPOLITIQUE & RELATIONS INTERNATIONALES
          {
            id: 'en-geo-1',
            category: "Géopolitique",
            theme: "Relations internationales",
            french: "Les tensions géopolitiques entre la Chine et les États-Unis s'intensifient dans le domaine technologique.",
            reference: "Geopolitical tensions between China and the United States are intensifying in the technological domain.",
            grammar_points: ["Present continuous", "Passive voice", "Complex sentence structure"],
            difficulty_level: "advanced",
            specialized: true
          },
          {
            id: 'en-geo-2',
            category: "Géopolitique",
            theme: "Union européenne",
            french: "L'Union européenne cherche à renforcer son autonomie stratégique face aux défis mondiaux.",
            reference: "The European Union seeks to strengthen its strategic autonomy in the face of global challenges.",
            grammar_points: ["Present simple", "Infinitive of purpose", "Complex noun phrases"],
            difficulty_level: "intermediate"
          },
          {
            id: 'en-geo-3',
            category: "Géopolitique",
            theme: "Commerce international",
            french: "Le commerce international représente une part croissante de l'économie mondiale malgré les tensions protectionnistes.",
            reference: "International trade represents a growing share of the global economy despite protectionist tensions.",
            grammar_points: ["Present simple", "Despite + noun", "Adjectives of degree"],
            difficulty_level: "intermediate"
          },
          {
            id: 'en-geo-4',
            category: "Géopolitique",
            theme: "Migrations internationales",
            french: "Les migrations internationales constituent un défi majeur pour les politiques européennes d'intégration.",
            reference: "International migrations represent a major challenge for European integration policies.",
            grammar_points: ["Present simple", "For + noun", "Compound nouns"],
            difficulty_level: "advanced"
          },
          // ÉCONOMIE
          {
            id: 'en-eco-1',
            category: "Économie",
            theme: "Innovation technologique",
            french: "L'intelligence artificielle transforme radicalement les modèles économiques traditionnels.",
            reference: "Artificial intelligence is radically transforming traditional economic models.",
            grammar_points: ["Present continuous", "Adverbs", "Complex object"],
            difficulty_level: "intermediate"
          },
          {
            id: 'en-eco-2',
            category: "Économie",
            theme: "Développement durable",
            french: "Les investissements verts représentent un enjeu majeur pour la transition écologique.",
            reference: "Green investments represent a major challenge for the ecological transition.",
            grammar_points: ["Present simple", "Complex noun phrases", "Prepositions"],
            difficulty_level: "intermediate"
          },
          {
            id: 'en-eco-3',
            category: "Économie",
            theme: "Croissance économique",
            french: "La croissance économique dépend largement des investissements dans l'éducation et la recherche.",
            reference: "Economic growth largely depends on investments in education and research.",
            grammar_points: ["Present simple", "On + noun", "Adverbs of manner"],
            difficulty_level: "intermediate"
          },
          // SOCIÉTÉ & CULTURE
          {
            id: 'en-soc-1',
            category: "Société",
            theme: "Éducation numérique",
            french: "L'enseignement à distance transforme les méthodes pédagogiques traditionnelles.",
            reference: "Distance learning is transforming traditional teaching methods.",
            grammar_points: ["Present continuous", "Gerunds", "Complex objects"],
            difficulty_level: "intermediate"
          },
          {
            id: 'en-soc-2',
            category: "Société",
            theme: "Diversité culturelle",
            french: "La diversité culturelle enrichit le tissu social des métropoles modernes.",
            reference: "Cultural diversity enriches the social fabric of modern metropolises.",
            grammar_points: ["Present simple", "Complex noun phrases", "Prepositions"],
            difficulty_level: "intermediate"
          },
          {
            id: 'en-soc-3',
            category: "Société",
            theme: "Cohésion sociale",
            french: "La cohésion sociale nécessite des politiques publiques inclusives pour tous les citoyens.",
            reference: "Social cohesion requires inclusive public policies for all citizens.",
            grammar_points: ["Present simple", "For + plural noun", "Adjectives"],
            difficulty_level: "intermediate"
          },
          // TECHNOLOGIE & INNOVATION
          {
            id: 'en-tech-1',
            category: "Technologie",
            theme: "Intelligence artificielle",
            french: "Les progrès de l'intelligence artificielle soulèvent des questions éthiques complexes.",
            reference: "Advances in artificial intelligence raise complex ethical questions.",
            grammar_points: ["Present simple", "Passive voice", "Complex adjectives"],
            difficulty_level: "intermediate"
          },
          {
            id: 'en-tech-2',
            category: "Technologie",
            theme: "Réseaux sociaux",
            french: "Les réseaux sociaux ont révolutionné la façon dont nous communiquons et partageons l'information.",
            reference: "Social media have revolutionized the way we communicate and share information.",
            grammar_points: ["Present perfect", "Relative clauses", "Have/has + past participle"],
            difficulty_level: "intermediate"
          },
          {
            id: 'en-tech-3',
            category: "Technologie",
            theme: "Big data",
            french: "Le big data offre de nouvelles opportunités pour l'analyse prédictive dans de nombreux secteurs.",
            reference: "Big data offers new opportunities for predictive analysis in many sectors.",
            grammar_points: ["Present simple", "For + noun", "In + plural noun"],
            difficulty_level: "advanced"
          },
          // ENVIRONNEMENT & ÉCOLOGIE
          {
            id: 'en-env-1',
            category: "Environnement",
            theme: "Changement climatique",
            french: "Le changement climatique représente la plus grande menace pour l'humanité au 21ème siècle.",
            reference: "Climate change represents the greatest threat to humanity in the 21st century.",
            grammar_points: ["Present simple", "Superlative adjectives", "Ordinal numbers"],
            difficulty_level: "intermediate"
          },
          {
            id: 'en-env-2',
            category: "Environnement",
            theme: "Énergies renouvelables",
            french: "Les énergies renouvelables deviennent progressivement plus compétitives sur le marché mondial.",
            reference: "Renewable energies are gradually becoming more competitive on the global market.",
            grammar_points: ["Present continuous", "Comparative adverbs", "Complex noun phrases"],
            difficulty_level: "advanced"
          },
          {
            id: 'en-env-3',
            category: "Environnement",
            theme: "Biodiversité",
            french: "La perte de biodiversité constitue un risque majeur pour l'équilibre des écosystèmes terrestres.",
            reference: "The loss of biodiversity represents a major risk for the balance of terrestrial ecosystems.",
            grammar_points: ["Present simple", "For + noun", "Of + noun"],
            difficulty_level: "advanced"
          },
          // SANTÉ & BIEN-ÊTRE
          {
            id: 'en-health-1',
            category: "Santé",
            theme: "Télémedicine",
            french: "La télémédecine offre de nouvelles possibilités pour améliorer l'accès aux soins médicaux.",
            reference: "Telemedicine offers new possibilities for improving access to medical care.",
            grammar_points: ["Present simple", "Gerunds", "Infinitive of purpose"],
            difficulty_level: "intermediate"
          },
          {
            id: 'en-health-2',
            category: "Santé",
            theme: "Pandémie mondiale",
            french: "La pandémie de COVID-19 a profondément transformé nos habitudes quotidiennes et nos comportements sociaux.",
            reference: "The COVID-19 pandemic has profoundly transformed our daily habits and social behaviors.",
            grammar_points: ["Present perfect", "Adverbs of manner", "Compound nouns"],
            difficulty_level: "intermediate"
          },
          {
            id: 'en-health-3',
            category: "Santé",
            theme: "Prévention santé",
            french: "La prévention des maladies cardiovasculaires passe par une alimentation équilibrée et l'exercice physique régulier.",
            reference: "The prevention of cardiovascular diseases involves a balanced diet and regular physical exercise.",
            grammar_points: ["Present simple", "Of + noun", "And + noun"],
            difficulty_level: "intermediate"
          },
          // POLITIQUE & INSTITUTIONS
          {
            id: 'en-pol-1',
            category: "Politique",
            theme: "Démocratie représentative",
            french: "La démocratie représentative nécessite une participation active des citoyens pour fonctionner efficacement.",
            reference: "Representative democracy requires active citizen participation to function effectively.",
            grammar_points: ["Present simple", "Infinitive of purpose", "Adjectives"],
            difficulty_level: "intermediate"
          },
          {
            id: 'en-pol-2',
            category: "Politique",
            theme: "Politique internationale",
            french: "Les organisations internationales jouent un rôle crucial dans la résolution des conflits mondiaux.",
            reference: "International organizations play a crucial role in resolving global conflicts.",
            grammar_points: ["Present simple", "Gerunds", "Adjectives of degree"],
            difficulty_level: "intermediate"
          },
          {
            id: 'en-pol-3',
            category: "Politique",
            theme: "Gouvernance mondiale",
            french: "La gouvernance mondiale nécessite une coopération accrue entre les nations pour faire face aux défis globaux.",
            reference: "Global governance requires increased cooperation between nations to address global challenges.",
            grammar_points: ["Present simple", "Between + plural noun", "Infinitive of purpose"],
            difficulty_level: "advanced"
          },
          // ÉDUCATION & FORMATION
          {
            id: 'en-edu-1',
            category: "Éducation",
            theme: "Formation continue",
            french: "La formation continue est devenue essentielle dans un monde où les compétences évoluent rapidement.",
            reference: "Continuing education has become essential in a world where skills evolve rapidly.",
            grammar_points: ["Present perfect", "Relative clauses", "Adverbs"],
            difficulty_level: "intermediate"
          },
          {
            id: 'en-edu-2',
            category: "Éducation",
            theme: "Éducation inclusive",
            french: "L'éducation inclusive vise à garantir que tous les élèves puissent bénéficier d'une éducation de qualité.",
            reference: "Inclusive education aims to ensure that all students can benefit from quality education.",
            grammar_points: ["Present simple", "Infinitive of purpose", "Modal verbs"],
            difficulty_level: "intermediate"
          },
          {
            id: 'en-edu-3',
            category: "Éducation",
            theme: "Apprentissage en ligne",
            french: "L'apprentissage en ligne offre une flexibilité accrue pour les étudiants de tous âges et origines.",
            reference: "Online learning offers increased flexibility for students of all ages and backgrounds.",
            grammar_points: ["Present simple", "For + noun", "Of + plural noun"],
            difficulty_level: "intermediate"
          },
          // CULTURE & ARTS
          {
            id: 'en-cult-1',
            category: "Culture",
            theme: "Arts numériques",
            french: "Les arts numériques combinent créativité artistique et technologies modernes pour créer de nouvelles formes d'expression.",
            reference: "Digital arts combine artistic creativity and modern technologies to create new forms of expression.",
            grammar_points: ["Present simple", "Infinitive of purpose", "Compound nouns"],
            difficulty_level: "advanced"
          },
          {
            id: 'en-cult-2',
            category: "Culture",
            theme: "Patrimoine culturel",
            french: "Le patrimoine culturel doit être préservé pour les générations futures malgré les défis de la mondialisation.",
            reference: "Cultural heritage must be preserved for future generations despite the challenges of globalization.",
            grammar_points: ["Modal verbs", "Passive voice", "Despite + noun"],
            difficulty_level: "advanced"
          },
          {
            id: 'en-cult-3',
            category: "Culture",
            theme: "Industries culturelles",
            french: "Les industries culturelles contribuent significativement à l'économie créative et à l'emploi dans de nombreux pays.",
            reference: "Cultural industries contribute significantly to the creative economy and employment in many countries.",
            grammar_points: ["Present simple", "To + noun", "In + plural noun"],
            difficulty_level: "advanced"
          },
          // TRANSPORT & MOBILITÉ
          {
            id: 'en-trans-1',
            category: "Transport",
            theme: "Mobilité urbaine",
            french: "La mobilité urbaine durable nécessite une coordination entre transport public et véhicules individuels.",
            reference: "Sustainable urban mobility requires coordination between public transport and individual vehicles.",
            grammar_points: ["Present simple", "Gerunds", "Between + plural nouns"],
            difficulty_level: "intermediate"
          },
          {
            id: 'en-trans-2',
            category: "Transport",
            theme: "Transports aériens",
            french: "L'industrie du transport aérien fait face à des défis importants liés à la réduction des émissions de CO2.",
            reference: "The aviation industry faces major challenges related to reducing CO2 emissions.",
            grammar_points: ["Present simple", "Past participles as adjectives", "Related to + noun"],
            difficulty_level: "advanced"
          },
          {
            id: 'en-trans-3',
            category: "Transport",
            theme: "Transport ferroviaire",
            french: "Le transport ferroviaire représente une alternative écologique aux transports routiers pour les longs trajets.",
            reference: "Rail transport represents an ecological alternative to road transport for long journeys.",
            grammar_points: ["Present simple", "To + noun", "For + noun"],
            difficulty_level: "intermediate"
          },
          // SCIENCE & RECHERCHE
          {
            id: 'en-sci-1',
            category: "Science",
            theme: "Recherche scientifique",
            french: "La recherche scientifique fondamentale constitue la base de l'innovation technologique future.",
            reference: "Fundamental scientific research forms the basis of future technological innovation.",
            grammar_points: ["Present simple", "Complex noun phrases", "Ordinal numbers"],
            difficulty_level: "advanced"
          },
          {
            id: 'en-sci-2',
            category: "Science",
            theme: "Biotechnologie",
            french: "Les avancées en biotechnologie ouvrent de nouvelles perspectives pour la médecine personnalisée.",
            reference: "Advances in biotechnology open new perspectives for personalized medicine.",
            grammar_points: ["Present simple", "Adjectives", "For + noun (purpose)"],
            difficulty_level: "advanced"
          },
          {
            id: 'en-sci-3',
            category: "Science",
            theme: "Intelligence artificielle",
            french: "L'intelligence artificielle scientifique facilite l'analyse de grandes quantités de données complexes.",
            reference: "Scientific artificial intelligence facilitates the analysis of large amounts of complex data.",
            grammar_points: ["Present simple", "Of + plural noun", "Compound nouns"],
            difficulty_level: "advanced"
          },
          {
            id: 'en-sci-4',
            category: "Science",
            theme: "Médecine régénérative",
            french: "La médecine régénérative offre de nouveaux espoirs pour le traitement des maladies chroniques.",
            reference: "Regenerative medicine offers new hopes for the treatment of chronic diseases.",
            grammar_points: ["Present simple", "For + noun", "Of + noun"],
            difficulty_level: "advanced"
          },
          // ÉCONOMIE DIGITALE
          {
            id: 'en-econ-1',
            category: "Économie digitale",
            theme: "Commerce électronique",
            french: "Le commerce électronique a transformé les habitudes de consommation des citoyens européens.",
            reference: "E-commerce has transformed European citizens' consumption habits.",
            grammar_points: ["Present perfect", "Possessive case", "Compound nouns"],
            difficulty_level: "intermediate"
          },
          {
            id: 'en-econ-2',
            category: "Économie digitale",
            theme: "Cryptomonnaies",
            french: "Les cryptomonnaies représentent un défi majeur pour les régulateurs financiers mondiaux.",
            reference: "Cryptocurrencies represent a major challenge for global financial regulators.",
            grammar_points: ["Present simple", "Adjectives of degree", "For + noun"],
            difficulty_level: "advanced"
          },
          {
            id: 'en-econ-3',
            category: "Économie digitale",
            theme: "Plateformes numériques",
            french: "Les plateformes numériques transforment les modèles économiques traditionnels dans de nombreux secteurs.",
            reference: "Digital platforms are transforming traditional business models in many sectors.",
            grammar_points: ["Present continuous", "Adjectives", "In + plural noun"],
            difficulty_level: "intermediate"
          },
          // TRAVAIL & EMPLOI
          {
            id: 'en-work-1',
            category: "Travail",
            theme: "Télétravail",
            french: "Le télétravail est devenu une norme dans de nombreux secteurs professionnels depuis la pandémie.",
            reference: "Remote work has become standard in many professional sectors since the pandemic.",
            grammar_points: ["Present perfect", "Adjectives", "Since + noun"],
            difficulty_level: "intermediate"
          },
          {
            id: 'en-work-2',
            category: "Travail",
            theme: "Égalité salariale",
            french: "L'écart salarial entre hommes et femmes persiste malgré les efforts législatifs.",
            reference: "The gender pay gap persists despite legislative efforts.",
            grammar_points: ["Present simple", "Despite + noun", "Compound nouns"],
            difficulty_level: "intermediate"
          },
          {
            id: 'en-work-3',
            category: "Travail",
            theme: "Formation professionnelle",
            french: "La formation professionnelle continue est essentielle pour s'adapter aux changements technologiques.",
            reference: "Continuing professional training is essential to adapt to technological changes.",
            grammar_points: ["Present simple", "To + infinitive", "Adjectives"],
            difficulty_level: "intermediate"
          },
          // MÉDIAS & COMMUNICATION
          {
            id: 'en-media-1',
            category: "Médias",
            theme: "Désinformation",
            french: "La désinformation en ligne constitue une menace sérieuse pour la démocratie moderne.",
            reference: "Online disinformation represents a serious threat to modern democracy.",
            grammar_points: ["Present simple", "Adjectives", "To + noun"],
            difficulty_level: "intermediate"
          },
          {
            id: 'en-media-2',
            category: "Médias",
            theme: "Streaming",
            french: "Les plateformes de streaming ont révolutionné l'industrie du divertissement traditionnel.",
            reference: "Streaming platforms have revolutionized the traditional entertainment industry.",
            grammar_points: ["Present perfect", "Adjectives", "Compound nouns"],
            difficulty_level: "intermediate"
          },
          {
            id: 'en-media-3',
            category: "Médias",
            theme: "Réseaux sociaux",
            french: "Les réseaux sociaux influencent considérablement l'opinion publique et les comportements électoraux.",
            reference: "Social networks significantly influence public opinion and electoral behavior.",
            grammar_points: ["Present simple", "Adverbs", "And + noun"],
            difficulty_level: "intermediate"
          },
          // SÉCURITÉ & DÉFENSE
          {
            id: 'en-sec-1',
            category: "Sécurité",
            theme: "Cybersécurité",
            french: "La cybersécurité est devenue une priorité nationale pour la plupart des gouvernements européens.",
            reference: "Cybersecurity has become a national priority for most European governments.",
            grammar_points: ["Present perfect", "Adjectives", "For + plural noun"],
            difficulty_level: "advanced"
          },
          {
            id: 'en-sec-2',
            category: "Sécurité",
            theme: "Intelligence artificielle",
            french: "L'intelligence artificielle militaire soulève des questions éthiques complexes sur l'autonomie des armes.",
            reference: "Military artificial intelligence raises complex ethical questions about weapon autonomy.",
            grammar_points: ["Present simple", "Adjectives", "About + noun"],
            difficulty_level: "advanced"
          },
          {
            id: 'en-sec-3',
            category: "Sécurité",
            theme: "Terrorisme international",
            french: "La lutte contre le terrorisme international nécessite une coopération étroite entre les services de renseignement.",
            reference: "The fight against international terrorism requires close cooperation between intelligence services.",
            grammar_points: ["Present simple", "Against + noun", "Between + plural noun"],
            difficulty_level: "advanced"
          },
          // URBANISME & VILLES
          {
            id: 'en-urban-1',
            category: "Urbanisme",
            theme: "Villes durables",
            french: "Les villes durables intègrent des solutions innovantes pour réduire leur impact environnemental.",
            reference: "Sustainable cities integrate innovative solutions to reduce their environmental impact.",
            grammar_points: ["Present simple", "Infinitive of purpose", "Possessive adjectives"],
            difficulty_level: "advanced"
          },
          {
            id: 'en-urban-2',
            category: "Urbanisme",
            theme: "Mobilité électrique",
            french: "La transition vers la mobilité électrique nécessite des investissements massifs dans les infrastructures.",
            reference: "The transition to electric mobility requires massive investments in infrastructure.",
            grammar_points: ["Present simple", "To + noun", "In + noun"],
            difficulty_level: "advanced"
          },
          {
            id: 'en-urban-3',
            category: "Urbanisme",
            theme: "Architecture durable",
            french: "L'architecture durable intègre des matériaux écologiques et des systèmes d'énergie renouvelable.",
            reference: "Sustainable architecture integrates ecological materials and renewable energy systems.",
            grammar_points: ["Present simple", "Adjectives", "And + noun"],
            difficulty_level: "intermediate"
          },
          // AGRICULTURE & ALIMENTATION
          {
            id: 'en-agri-1',
            category: "Agriculture",
            theme: "Agriculture durable",
            french: "L'agriculture durable vise à concilier production alimentaire et préservation de l'environnement.",
            reference: "Sustainable agriculture aims to reconcile food production and environmental preservation.",
            grammar_points: ["Present simple", "Infinitive of purpose", "And + noun"],
            difficulty_level: "advanced"
          },
          {
            id: 'en-agri-2',
            category: "Agriculture",
            theme: "Alimentation bio",
            french: "La demande d'aliments biologiques a considérablement augmenté ces dernières années.",
            reference: "The demand for organic food has increased considerably in recent years.",
            grammar_points: ["Present perfect", "For + noun", "In + noun"],
            difficulty_level: "intermediate"
          },
          {
            id: 'en-agri-3',
            category: "Agriculture",
            theme: "Agriculture de précision",
            french: "L'agriculture de précision utilise les technologies numériques pour optimiser les rendements agricoles.",
            reference: "Precision agriculture uses digital technologies to optimize agricultural yields.",
            grammar_points: ["Present simple", "To + infinitive", "Compound nouns"],
            difficulty_level: "advanced"
          },
          // ÉNERGIE & CLIMAT
          {
            id: 'en-energy-1',
            category: "Énergie",
            theme: "Transition énergétique",
            french: "La transition énergétique représente un défi majeur pour les économies développées.",
            reference: "The energy transition represents a major challenge for developed economies.",
            grammar_points: ["Present simple", "Adjectives", "For + plural noun"],
            difficulty_level: "intermediate"
          },
          {
            id: 'en-energy-2',
            category: "Énergie",
            theme: "Éolien offshore",
            french: "L'énergie éolienne offshore offre un potentiel considérable pour la production d'électricité renouvelable.",
            reference: "Offshore wind energy offers considerable potential for renewable electricity production.",
            grammar_points: ["Present simple", "Adjectives", "For + noun"],
            difficulty_level: "advanced"
          },
          {
            id: 'en-energy-3',
            category: "Énergie",
            theme: "Stockage énergétique",
            french: "Le stockage énergétique constitue un défi majeur pour l'intégration des énergies renouvelables.",
            reference: "Energy storage represents a major challenge for the integration of renewable energies.",
            grammar_points: ["Present simple", "For + noun", "Of + noun"],
            difficulty_level: "advanced"
          },
          // SANTÉ PUBLIQUE
          {
            id: 'en-pubhealth-1',
            category: "Santé publique",
            theme: "Prévention",
            french: "La prévention des maladies chroniques constitue un enjeu majeur pour les systèmes de santé.",
            reference: "The prevention of chronic diseases represents a major challenge for health systems.",
            grammar_points: ["Present simple", "Of + noun", "For + noun"],
            difficulty_level: "advanced"
          },
          {
            id: 'en-pubhealth-2',
            category: "Santé publique",
            theme: "Vaccination",
            french: "Les campagnes de vaccination ont permis d'éradiquer de nombreuses maladies infectieuses.",
            reference: "Vaccination campaigns have made it possible to eradicate numerous infectious diseases.",
            grammar_points: ["Present perfect", "Infinitive of purpose", "Adjectives"],
            difficulty_level: "intermediate"
          },
          {
            id: 'en-pubhealth-3',
            category: "Santé publique",
            theme: "Santé mentale",
            french: "La santé mentale constitue un défi croissant pour les systèmes de santé publique modernes.",
            reference: "Mental health represents a growing challenge for modern public health systems.",
            grammar_points: ["Present simple", "Adjectives", "For + plural noun"],
            difficulty_level: "intermediate"
          },
          // ÉDUCATION SUPÉRIEURE
          {
            id: 'en-high-edu-1',
            category: "Éducation supérieure",
            theme: "Universités numériques",
            french: "Les universités numériques offrent de nouvelles opportunités d'accès à l'éducation supérieure.",
            reference: "Digital universities offer new opportunities for access to higher education.",
            grammar_points: ["Present simple", "Adjectives", "For + noun"],
            difficulty_level: "intermediate"
          },
          {
            id: 'en-high-edu-2',
            category: "Éducation supérieure",
            theme: "Mobilité étudiante",
            french: "La mobilité étudiante internationale favorise les échanges culturels et linguistiques.",
            reference: "International student mobility promotes cultural and linguistic exchanges.",
            grammar_points: ["Present simple", "Adjectives", "And + noun"],
            difficulty_level: "intermediate"
          },
          {
            id: 'en-high-edu-3',
            category: "Éducation supérieure",
            theme: "Formation doctorale",
            french: "La formation doctorale prépare les chercheurs aux défis de la recherche scientifique moderne.",
            reference: "Doctoral training prepares researchers for the challenges of modern scientific research.",
            grammar_points: ["Present simple", "For + noun", "Of + noun"],
            difficulty_level: "advanced"
          },
          // INNOVATION & STARTUPS
          {
            id: 'en-inno-1',
            category: "Innovation",
            theme: "Écosystème startup",
            french: "L'écosystème des startups européennes bénéficie d'investissements croissants des fonds de capital-risque.",
            reference: "The European startup ecosystem benefits from increasing venture capital investments.",
            grammar_points: ["Present simple", "From + noun", "Compound nouns"],
            difficulty_level: "advanced"
          },
          {
            id: 'en-inno-2',
            category: "Innovation",
            theme: "Recherche appliquée",
            french: "La recherche appliquée transforme les découvertes scientifiques en solutions pratiques.",
            reference: "Applied research transforms scientific discoveries into practical solutions.",
            grammar_points: ["Present simple", "Into + noun", "Adjectives"],
            difficulty_level: "advanced"
          },
          {
            id: 'en-inno-3',
            category: "Innovation",
            theme: "Propriété intellectuelle",
            french: "La protection de la propriété intellectuelle encourage l'innovation et les investissements en R&D.",
            reference: "Intellectual property protection encourages innovation and R&D investments.",
            grammar_points: ["Present simple", "Adjectives", "And + noun"],
            difficulty_level: "advanced"
          },
          // NOUVELLES CATÉGORIES
          // DROIT & JUSTICE
          {
            id: 'en-law-1',
            category: "Droit & Justice",
            theme: "État de droit",
            french: "L'État de droit constitue la base de toute démocratie moderne et stable.",
            reference: "The rule of law forms the basis of any modern and stable democracy.",
            grammar_points: ["Present simple", "Of + noun", "And + adjective"],
            difficulty_level: "advanced"
          },
          {
            id: 'en-law-2',
            category: "Droit & Justice",
            theme: "Justice internationale",
            french: "Les tribunaux internationaux jouent un rôle essentiel dans la résolution des conflits armés.",
            reference: "International courts play an essential role in resolving armed conflicts.",
            grammar_points: ["Present simple", "In + gerund", "Compound nouns"],
            difficulty_level: "advanced"
          },
          {
            id: 'en-law-3',
            category: "Droit & Justice",
            theme: "Droits humains",
            french: "La protection des droits humains représente un défi permanent dans un monde globalisé.",
            reference: "The protection of human rights represents a permanent challenge in a globalized world.",
            grammar_points: ["Present simple", "Of + noun", "In + noun"],
            difficulty_level: "advanced"
          },
          // PHILOSOPHIE & ÉTHIQUE
          {
            id: 'en-philo-1',
            category: "Philosophie & Éthique",
            theme: "Intelligence artificielle éthique",
            french: "L'éthique de l'intelligence artificielle soulève des questions fondamentales sur la responsabilité humaine.",
            reference: "Artificial intelligence ethics raises fundamental questions about human responsibility.",
            grammar_points: ["Present simple", "About + noun", "Compound nouns"],
            difficulty_level: "advanced"
          },
          {
            id: 'en-philo-2',
            category: "Philosophie & Éthique",
            theme: "Développement durable",
            french: "Le développement durable nécessite une réflexion éthique sur nos responsabilités envers les générations futures.",
            reference: "Sustainable development requires ethical reflection on our responsibilities towards future generations.",
            grammar_points: ["Present simple", "On + noun", "Towards + noun"],
            difficulty_level: "advanced"
          },
          // SANTÉ MENTALE
          {
            id: 'en-mental-1',
            category: "Santé mentale",
            theme: "Bien-être psychologique",
            french: "Le bien-être psychologique constitue un facteur essentiel pour la productivité au travail.",
            reference: "Psychological well-being represents an essential factor for workplace productivity.",
            grammar_points: ["Present simple", "For + noun", "Compound nouns"],
            difficulty_level: "intermediate"
          },
          {
            id: 'en-mental-2',
            category: "Santé mentale",
            theme: "Prévention suicide",
            french: "La prévention du suicide nécessite une approche multidimensionnelle impliquant société et individus.",
            reference: "Suicide prevention requires a multidimensional approach involving society and individuals.",
            grammar_points: ["Present simple", "Involving + noun", "And + noun"],
            difficulty_level: "advanced"
          },
          // ÉDUCATION SPÉCIALE
          {
            id: 'en-spec-ed-1',
            category: "Éducation spéciale",
            theme: "Inclusion scolaire",
            french: "L'inclusion scolaire permet aux élèves handicapés de bénéficier d'une éducation adaptée à leurs besoins.",
            reference: "School inclusion allows disabled students to benefit from education adapted to their needs.",
            grammar_points: ["Present simple", "To + infinitive", "Adapted to + noun"],
            difficulty_level: "intermediate"
          },
          {
            id: 'en-spec-ed-2',
            category: "Éducation spéciale",
            theme: "Apprentissage personnalisé",
            french: "L'apprentissage personnalisé prend en compte les rythmes et styles d'apprentissage individuels.",
            reference: "Personalized learning takes into account individual learning rhythms and styles.",
            grammar_points: ["Present simple", "Into account + noun", "And + noun"],
            difficulty_level: "advanced"
          },
          // CYBERSÉCURITÉ
          {
            id: 'en-cyber-1',
            category: "Cybersécurité",
            theme: "Protection données",
            french: "La protection des données personnelles constitue un droit fondamental dans l'ère numérique.",
            reference: "The protection of personal data constitutes a fundamental right in the digital age.",
            grammar_points: ["Present simple", "Of + noun", "In + noun"],
            difficulty_level: "advanced"
          },
          {
            id: 'en-cyber-2',
            category: "Cybersécurité",
            theme: "Ransomware",
            french: "Les attaques par ransomware paralysent de plus en plus les infrastructures critiques mondiales.",
            reference: "Ransomware attacks increasingly paralyze global critical infrastructures.",
            grammar_points: ["Present simple", "Adverbs", "Compound nouns"],
            difficulty_level: "advanced"
          },
          // GÉNÉRATION Z
          {
            id: 'en-genz-1',
            category: "Génération Z",
            theme: "Consommation responsable",
            french: "La génération Z privilégie la consommation responsable et l'impact environnemental des produits.",
            reference: "Generation Z prioritizes responsible consumption and the environmental impact of products.",
            grammar_points: ["Present simple", "And + noun", "Of + noun"],
            difficulty_level: "intermediate"
          },
          {
            id: 'en-genz-2',
            category: "Génération Z",
            theme: "Équilibre vie-travail",
            french: "Les jeunes générations revendiquent un meilleur équilibre entre vie professionnelle et vie privée.",
            reference: "Younger generations demand better balance between professional life and private life.",
            grammar_points: ["Present simple", "Between + noun", "And + noun"],
            difficulty_level: "intermediate"
          },
          // BIOTECHNOLOGIES
          {
            id: 'en-bio-1',
            category: "Biotechnologies",
            theme: "Édition génomique",
            french: "L'édition génomique ouvre de nouvelles perspectives thérapeutiques pour les maladies génétiques.",
            reference: "Genome editing opens new therapeutic perspectives for genetic diseases.",
            grammar_points: ["Present simple", "For + noun", "Compound adjectives"],
            difficulty_level: "advanced"
          },
          {
            id: 'en-bio-2',
            category: "Biotechnologies",
            theme: "Agriculture biologique",
            french: "L'agriculture biologique préserve la biodiversité et améliore la qualité des sols.",
            reference: "Organic farming preserves biodiversity and improves soil quality.",
            grammar_points: ["Present simple", "And + verb", "Compound nouns"],
            difficulty_level: "intermediate"
          },
          // ESPACE & ASTRONAUTIQUE
          {
            id: 'en-space-1',
            category: "Espace",
            theme: "Exploration spatiale",
            french: "L'exploration spatiale internationale favorise la coopération scientifique entre les nations.",
            reference: "International space exploration promotes scientific cooperation between nations.",
            grammar_points: ["Present simple", "Between + plural noun", "Compound nouns"],
            difficulty_level: "intermediate"
          },
          {
            id: 'en-space-2',
            category: "Espace",
            theme: "Satellites",
            french: "Les satellites permettent de surveiller l'évolution du climat et des ressources naturelles.",
            reference: "Satellites make it possible to monitor climate change and natural resources.",
            grammar_points: ["Present simple", "To + infinitive", "And + noun"],
            difficulty_level: "intermediate"
          },
          // NOUVELLES PHRASES ANGLAISES SUPPLÉMENTAIRES
          // ÉCONOMIE DIGITALE
          {
            id: 'en-econ-4',
            category: "Économie digitale",
            theme: "Commerce avancé",
            french: "Le commerce électronique avancé transforme les habitudes de consommation des générations numériques.",
            reference: "Advanced e-commerce transforms the consumption habits of digital generations.",
            grammar_points: ["Present simple", "Of + plural noun", "Compound nouns"],
            difficulty_level: "intermediate"
          },
          {
            id: 'en-econ-5',
            category: "Économie digitale",
            theme: "Économie circulaire",
            french: "L'économie circulaire vise à réduire les déchets et optimiser l'utilisation des ressources.",
            reference: "The circular economy aims to reduce waste and optimize resource utilization.",
            grammar_points: ["Present simple", "To + infinitive", "And + infinitive"],
            difficulty_level: "advanced"
          },
          // TRAVAIL & EMPLOI
          {
            id: 'en-work-3',
            category: "Travail",
            theme: "Travail hybride",
            french: "Le travail hybride combine les avantages du bureau et du télétravail pour les employés.",
            reference: "Hybrid work combines the benefits of office and remote work for employees.",
            grammar_points: ["Present simple", "Of + noun", "For + plural noun"],
            difficulty_level: "intermediate"
          },
          {
            id: 'en-work-4',
            category: "Travail",
            theme: "Formation continue",
            french: "La formation continue constitue un investissement essentiel pour le développement professionnel.",
            reference: "Continuing education represents an essential investment for professional development.",
            grammar_points: ["Present simple", "For + noun", "Compound nouns"],
            difficulty_level: "intermediate"
          },
          // MÉDIAS & COMMUNICATION
          {
            id: 'en-media-4',
            category: "Médias",
            theme: "Journalisme numérique",
            french: "Le journalisme numérique transforme les méthodes de diffusion de l'information en ligne.",
            reference: "Digital journalism transforms information dissemination methods online.",
            grammar_points: ["Present simple", "Compound nouns", "Adverbs"],
            difficulty_level: "intermediate"
          },
          {
            id: 'en-media-5',
            category: "Médias",
            theme: "Réseaux sociaux d'entreprise",
            french: "Les réseaux sociaux d'entreprise facilitent la communication interne et externe des organisations.",
            reference: "Corporate social networks facilitate internal and external organizational communication.",
            grammar_points: ["Present simple", "And + adjective", "Compound nouns"],
            difficulty_level: "advanced"
          },
          // SÉCURITÉ & DÉFENSE
          {
            id: 'en-sec-4',
            category: "Sécurité",
            theme: "Cyberdéfense nationale",
            french: "La cyberdéfense nationale protège les infrastructures critiques contre les cyberattaques.",
            reference: "National cybersecurity protects critical infrastructure against cyber attacks.",
            grammar_points: ["Present simple", "Against + noun", "Compound nouns"],
            difficulty_level: "advanced"
          },
          {
            id: 'en-sec-5',
            category: "Sécurité",
            theme: "IA défensive",
            french: "L'intelligence artificielle défensive améliore la détection des menaces cybernétiques.",
            reference: "Defensive artificial intelligence improves the detection of cyber threats.",
            grammar_points: ["Present simple", "Of + noun", "Compound adjectives"],
            difficulty_level: "advanced"
          },
          // URBANISME & VILLES
          {
            id: 'en-urban-4',
            category: "Urbanisme",
            theme: "Villes intelligentes",
            french: "Les villes intelligentes utilisent les technologies IoT pour améliorer la qualité de vie urbaine.",
            reference: "Smart cities use IoT technologies to improve urban quality of life.",
            grammar_points: ["Present simple", "To + infinitive", "Compound nouns"],
            difficulty_level: "advanced"
          },
          {
            id: 'en-urban-5',
            category: "Urbanisme",
            theme: "Mobilité durable",
            french: "La mobilité durable réduit l'empreinte carbone des déplacements urbains modernes.",
            reference: "Sustainable mobility reduces the carbon footprint of modern urban travel.",
            grammar_points: ["Present simple", "Of + noun", "Compound nouns"],
            difficulty_level: "intermediate"
          },
          // AGRICULTURE & ALIMENTATION
          {
            id: 'en-agri-4',
            category: "Agriculture",
            theme: "Agroalimentaire innovant",
            french: "L'agroalimentaire innovant combine tradition et technologies modernes pour la qualité alimentaire.",
            reference: "Innovative agribusiness combines tradition and modern technologies for food quality.",
            grammar_points: ["Present simple", "And + noun", "For + noun"],
            difficulty_level: "advanced"
          },
          {
            id: 'en-agri-5',
            category: "Agriculture",
            theme: "Sécurité alimentaire",
            french: "La sécurité alimentaire mondiale nécessite une coopération internationale accrue.",
            reference: "Global food security requires increased international cooperation.",
            grammar_points: ["Present simple", "Compound nouns", "Past participles as adjectives"],
            difficulty_level: "advanced"
          },
          // ÉNERGIE & CLIMAT
          {
            id: 'en-energy-4',
            category: "Énergie",
            theme: "Stockage énergétique",
            french: "Le stockage énergétique innovant permet d'équilibrer l'offre et la demande d'électricité renouvelable.",
            reference: "Innovative energy storage enables the balance of renewable electricity supply and demand.",
            grammar_points: ["Present simple", "Of + noun", "And + noun"],
            difficulty_level: "advanced"
          },
          {
            id: 'en-energy-5',
            category: "Énergie",
            theme: "Transition énergétique juste",
            french: "La transition énergétique juste inclut toutes les communautés dans le processus de transformation.",
            reference: "The just energy transition includes all communities in the transformation process.",
            grammar_points: ["Present simple", "In + noun", "Compound nouns"],
            difficulty_level: "advanced"
          },
          // SANTÉ PUBLIQUE
          {
            id: 'en-pubhealth-4',
            category: "Santé publique",
            theme: "Médecine préventive",
            french: "La médecine préventive met l'accent sur les habitudes de vie saines et la prévention des maladies.",
            reference: "Preventive medicine emphasizes healthy lifestyles and disease prevention.",
            grammar_points: ["Present simple", "And + noun", "Compound nouns"],
            difficulty_level: "intermediate"
          },
          {
            id: 'en-pubhealth-5',
            category: "Santé publique",
            theme: "Systèmes de santé",
            french: "Les systèmes de santé modernes font face à des défis démographiques et technologiques importants.",
            reference: "Modern health systems face significant demographic and technological challenges.",
            grammar_points: ["Present simple", "And + adjective", "Compound nouns"],
            difficulty_level: "advanced"
          },
          // ÉDUCATION SUPÉRIEURE
          {
            id: 'en-high-edu-4',
            category: "Éducation supérieure",
            theme: "Internationalisation universitaire",
            french: "L'internationalisation universitaire attire des étudiants et des chercheurs du monde entier.",
            reference: "University internationalization attracts students and researchers from around the world.",
            grammar_points: ["Present simple", "And + noun", "From + preposition"],
            difficulty_level: "intermediate"
          },
          {
            id: 'en-high-edu-5',
            category: "Éducation supérieure",
            theme: "Recherche appliquée",
            french: "La recherche appliquée universitaire contribue à l'innovation technologique et au développement économique.",
            reference: "Applied university research contributes to technological innovation and economic development.",
            grammar_points: ["Present simple", "To + noun", "And + noun"],
            difficulty_level: "advanced"
          },
          // INNOVATION & STARTUPS
          {
            id: 'en-inno-4',
            category: "Innovation",
            theme: "Entrepreneuriat social",
            french: "L'entrepreneuriat social résout des problèmes sociaux par des solutions innovantes et durables.",
            reference: "Social entrepreneurship solves social problems through innovative and sustainable solutions.",
            grammar_points: ["Present simple", "Through + adjective", "And + adjective"],
            difficulty_level: "advanced"
          },
          {
            id: 'en-inno-5',
            category: "Innovation",
            theme: "Transfert technologique",
            french: "Le transfert technologique universitaire facilite la création d'entreprises innovantes et compétitives.",
            reference: "University technology transfer facilitates the creation of innovative and competitive companies.",
            grammar_points: ["Present simple", "Of + adjective", "And + adjective"],
            difficulty_level: "advanced"
          }
        ],
        de: [
          // ÉNERGIE & ENVIRONNEMENT
          {
            id: 'de-env-1',
            category: "Umwelt & Energie",
            theme: "Erneuerbare Energien",
            french: "L'Allemagne investit massivement dans les énergies renouvelables pour réduire sa dépendance aux combustibles fossiles.",
            reference: "Deutschland investiert massiv in erneuerbare Energien, um seine Abhängigkeit von fossilen Brennstoffen zu reduzieren.",
            grammar_points: ["um ... zu + infinitif (but)", "abhängig von + datif", "Mot composé: Brennstoffe"],
            notes: ["um ... zu + infinitif exprime le but → ne jamais mettre de sujet après um", "abhängig von = dépendant de → on emploie von + datif", "Brennstoffe (combustibles) est plus précis que Energie"],
            difficulty_level: "advanced",
            specialized: true
          },
          {
            id: 'de-env-2',
            category: "Umwelt & Energie",
            theme: "Klimaschutz",
            french: "Beaucoup de jeunes s'engagent aujourd'hui pour la protection du climat.",
            reference: "Viele junge Menschen engagieren sich heute für den Klimaschutz.",
            grammar_points: ["sich engagieren für + Akkusativ", "Position de heute", "Klimaschutz (mot composé)"],
            notes: ["sich engagieren für + Akkusativ → verbe réfléchi", "Klimaschutz = mot composé : 'protection du climat' → toujours singulier", "heute se place généralement après le verbe ou avant le complément"],
            difficulty_level: "intermediate"
          },
          {
            id: 'de-env-3',
            category: "Umwelt & Energie",
            theme: "Wasserkraft",
            french: "L'énergie hydraulique représente une source d'énergie renouvelable importante en Allemagne.",
            reference: "Wasserkraft stellt eine wichtige erneuerbare Energiequelle in Deutschland dar.",
            grammar_points: ["stellen dar (présenter)", "wichtige + nominatif", "in + datif"],
            notes: ["stellen dar = représenter, présenter (construction figée)", "wichtige Energiequelle → adjectif épithète au nominatif", "in Deutschland → in + datif"],
            difficulty_level: "intermediate"
          },
          {
            id: 'de-env-4',
            category: "Umwelt & Energie",
            theme: "Klimawandel",
            french: "Le changement climatique affecte considérablement l'agriculture et les forêts allemandes.",
            reference: "Der Klimawandel beeinflusst die Landwirtschaft und die Wälder Deutschlands erheblich.",
            grammar_points: ["beeinflussen (transitif)", "die + accusatif", "erheblich (adverbe)"],
            notes: ["beeinflussen = influencer, affecter (verbe transitif)", "die Landwirtschaft → accusatif pluriel", "erheblich = considérablement (adverbe)"],
            difficulty_level: "intermediate"
          },
          // ÉCONOMIE
          {
            id: 'de-eco-1',
            category: "Wirtschaft",
            theme: "Inflation",
            french: "L'inflation reste à un niveau élevé malgré la baisse des prix de l'énergie.",
            reference: "Die Inflation bleibt trotz sinkender Energiepreise auf einem hohen Niveau.",
            grammar_points: ["trotz + génitif", "auf + datif (position)", "Adjectif génitif sans article"],
            notes: ["trotz + génitif (jamais trotz von)", "auf einem hohen Niveau → datif, car il n'y a pas de déplacement", "sinkender Energiepreise : adjectif au génitif sans article → terminaison -er"],
            difficulty_level: "advanced"
          },
          {
            id: 'de-eco-2',
            category: "Wirtschaft",
            theme: "Arbeitswelt",
            french: "L'intelligence artificielle transforme profondément le monde du travail.",
            reference: "Künstliche Intelligenz verändert die Arbeitswelt grundlegend.",
            grammar_points: ["verändern + Akkusativ", "grundlegend (adverbe)", "Pas de réfléchi"],
            notes: ["verändern = modifier, transformer (verbe transitif → COD à l'accusatif)", "grundlegend = profondément, de manière fondamentale (adverbe courant dans la presse)", "Ne pas dire verändert sich die Arbeitswelt ici, car ce n'est pas réfléchi"],
            difficulty_level: "intermediate"
          },
          {
            id: 'de-eco-3',
            category: "Wirtschaft",
            theme: "Homeoffice",
            french: "De plus en plus d'Allemands travaillent à distance depuis la pandémie.",
            reference: "Immer mehr Deutsche arbeiten seit der Pandemie im Homeoffice.",
            grammar_points: ["immer mehr + nom pluriel", "seit + datif", "im Homeoffice (expression)"],
            notes: ["immer mehr + nom pluriel sans article → construction correcte pour 'de plus en plus de'", "seit + datif pour exprimer la durée commencée dans le passé", "im Homeoffice (expression figée) → ne pas dire zu Hause arbeiten si on parle de télétravail"],
            difficulty_level: "intermediate"
          },
          {
            id: 'de-eco-4',
            category: "Wirtschaft",
            theme: "Arbeitslosigkeit",
            french: "Le chômage des jeunes a légèrement augmenté au cours des derniers mois.",
            reference: "Die Jugendarbeitslosigkeit ist in den letzten Monaten leicht gestiegen.",
            grammar_points: ["steigen avec sein", "in + datif pluriel", "leicht (adverbe)"],
            notes: ["steigen = verbe intransitif → auxiliaire sein au parfait", "in den letzten Monaten : in + datif pluriel", "leicht = légèrement, adverbe courant"],
            difficulty_level: "intermediate"
          },
          {
            id: 'de-eco-5',
            category: "Wirtschaft",
            theme: "Fachkräftemangel",
            french: "Les entreprises allemandes craignent une pénurie de main-d'œuvre qualifiée.",
            reference: "Deutsche Unternehmen fürchten einen Mangel an Fachkräften.",
            grammar_points: ["fürchten + Akkusativ", "Mangel an + datif", "Fachkräfte (pluriel)"],
            notes: ["fürchten + Akkusativ → pas de préposition", "Mangel an + datif → toujours an", "Fachkräfte = main-d'œuvre qualifiée, pluriel"],
            difficulty_level: "advanced"
          },
          {
            id: 'de-eco-6',
            category: "Wirtschaft",
            theme: "Zuwanderung",
            french: "Le gouvernement veut encourager l'immigration de travailleurs étrangers.",
            reference: "Die Regierung will die Zuwanderung ausländischer Arbeitskräfte fördern.",
            grammar_points: ["wollen + infinitif", "ausländisch vs fremd", "fördern (registre)"],
            notes: ["wollen + infinitif → modal sans zu", "ausländisch = adjectif, fremd = étranger mais connotation différente (non-national)", "fördern = promouvoir, encourager (registre administratif)"],
            difficulty_level: "intermediate"
          },
          {
            id: 'de-eco-7',
            category: "Wirtschaft",
            theme: "Wirtschaftserholung",
            french: "L'économie allemande montre des signes de reprise après la récession.",
            reference: "Die deutsche Wirtschaft zeigt Anzeichen einer Erholung nach der Rezession.",
            grammar_points: ["zeigen + Akkusativ", "Génitif après Anzeichen", "nach + datif"],
            notes: ["zeigen + Akkusativ (verbe transitif)", "Anzeichen einer Erholung : génitif après Anzeichen", "nach + datif pour 'après'"],
            difficulty_level: "intermediate"
          },
          {
            id: 'de-eco-8',
            category: "Wirtschaft",
            theme: "Export",
            french: "L'Allemagne maintient sa position de leader mondial dans le secteur de l'exportation.",
            reference: "Deutschland behauptet seine Position als weltweiter Exportführer.",
            grammar_points: ["behaupten (transitif)", "als + nominatif", "weltweiter + nominatif"],
            notes: ["behaupten = maintenir, affirmer (verbe transitif)", "als Exportführer → als + nominatif", "weltweiter Exportführer → adjectif épithète au nominatif"],
            difficulty_level: "advanced"
          },
          {
            id: 'de-eco-9',
            category: "Wirtschaft",
            theme: "Digitalisierung",
            french: "La numérisation transforme profondément les processus de production industriels.",
            reference: "Die Digitalisierung verändert die industriellen Produktionsprozesse grundlegend.",
            grammar_points: ["verändern (transitif)", "die + accusatif", "grundlegend (adverbe)"],
            notes: ["verändern = transformer (verbe transitif)", "die Produktionsprozesse → accusatif pluriel", "grundlegend = profondément (adverbe)"],
            difficulty_level: "advanced"
          },
          // SOCIÉTÉ & DÉMOGRAPHIE
          {
            id: 'de-soc-1',
            category: "Gesellschaft",
            theme: "Demographie",
            french: "La population allemande vieillit rapidement.",
            reference: "Die deutsche Bevölkerung altert schnell.",
            grammar_points: ["altern (intransitif)", "Adjectif épithète sans article", "Éviter wird alt"],
            notes: ["altern = vieillir → verbe intransitif (pas de COD)", "deutsche Bevölkerung → adjectif épithète sans article → terminaison -e", "Éviter wird alt qui signifie 'devient vieux' pour une personne, pas pour une population"],
            difficulty_level: "intermediate"
          },
          {
            id: 'de-soc-2',
            category: "Gesellschaft",
            theme: "Wohnen",
            french: "Le logement devient de plus en plus cher dans les grandes villes allemandes.",
            reference: "Wohnen wird in deutschen Großstädten immer teurer.",
            grammar_points: ["immer + comparatif", "in + datif pluriel", "Wohnen (nom verbal)"],
            notes: ["immer + comparatif = 'de plus en plus'", "in deutschen Großstädten → datif pluriel", "Wohnen est un nom verbal neutre (usage courant pour 'le logement')"],
            difficulty_level: "intermediate"
          },
          {
            id: 'de-soc-3',
            category: "Gesellschaft",
            theme: "Arbeitsbedingungen",
            french: "Les syndicats exigent de meilleures conditions de travail.",
            reference: "Die Gewerkschaften fordern bessere Arbeitsbedingungen.",
            grammar_points: ["fordern (transitif)", "bessere (comparatif)", "Arbeitsbedingungen (pluriel)"],
            notes: ["fordern = exiger, réclamer → verbe transitif", "bessere : adjectif comparatif au pluriel (pas de mehr gut)", "Arbeitsbedingungen toujours au pluriel"],
            difficulty_level: "intermediate"
          },
          {
            id: 'de-soc-4',
            category: "Gesellschaft",
            theme: "Integration",
            french: "L'intégration des migrants constitue un défi majeur pour la société allemande.",
            reference: "Die Integration von Migranten stellt eine große Herausforderung für die deutsche Gesellschaft dar.",
            grammar_points: ["stellen dar", "von + datif", "für + accusatif"],
            notes: ["stellen dar = représenter (construction figée)", "von Migranten → von + datif", "für die Gesellschaft → für + accusatif"],
            difficulty_level: "advanced"
          },
          {
            id: 'de-soc-5',
            category: "Gesellschaft",
            theme: "Bildung",
            french: "L'éducation joue un rôle essentiel dans la mobilité sociale en Allemagne.",
            reference: "Bildung spielt eine entscheidende Rolle bei der sozialen Mobilität in Deutschland.",
            grammar_points: ["spielen (transitif)", "bei + datif", "soziale + nominatif"],
            notes: ["eine Rolle spielen = jouer un rôle (locution)", "bei der Mobilität → bei + datif", "soziale Mobilität → adjectif épithète au nominatif"],
            difficulty_level: "intermediate"
          },
          // POLITIQUE & GÉOPOLITIQUE
          {
            id: 'de-pol-1',
            category: "Politik",
            theme: "Klimakrise",
            french: "Le gouvernement allemand est sous pression pour réagir plus vite à la crise climatique.",
            reference: "Die Bundesregierung steht unter Druck, schneller auf die Klimakrise zu reagieren.",
            grammar_points: ["unter Druck stehen", "auf + Akkusativ", "schneller (comparatif)"],
            notes: ["unter Druck stehen = être sous pression → expression figée", "auf etwas reagieren + accusatif (jamais datif)", "schneller = comparatif régulier (pas mehr schnell)"],
            difficulty_level: "advanced",
            specialized: true
          },
          {
            id: 'de-pol-2',
            category: "Politik",
            theme: "Beziehungen",
            french: "Les relations entre Berlin et Paris se sont récemment intensifiées.",
            reference: "Die Beziehungen zwischen Berlin und Paris haben sich in letzter Zeit intensiviert.",
            grammar_points: ["sich intensivieren", "zwischen + datif", "in letzter Zeit"],
            notes: ["sich intensivieren = verbe réfléchi ici (changement d'état)", "zwischen + datif → zwischen Berlin und Paris", "in letzter Zeit = expression figée pour 'récemment'"],
            difficulty_level: "advanced"
          },
          {
            id: 'de-pol-3',
            category: "Politik",
            theme: "Europa",
            french: "Le chancelier Olaf Scholz appelle à une Europe plus unie face aux défis mondiaux.",
            reference: "Bundeskanzler Olaf Scholz ruft zu einem geeinten Europa angesichts globaler Herausforderungen auf.",
            grammar_points: ["zu etwas aufrufen + datif", "angesichts + génitif", "vereint vs geeint"],
            notes: ["zu etwas aufrufen + datif → construction figée : 'appeler à'", "angesichts + génitif = 'face à', 'au vu de'", "Attention : vereint (uni) ≠ geeint (rassemblé politiquement, plus institutionnel)"],
            difficulty_level: "advanced",
            specialized: true
          },
          {
            id: 'de-pol-4',
            category: "Politik",
            theme: "Europawahlen",
            french: "Les élections européennes ont montré une montée des partis populistes.",
            reference: "Die Europawahlen haben einen Aufstieg populistischer Parteien gezeigt.",
            grammar_points: ["haben + participe passé", "Génitif pluriel sans article", "Aufstieg (masculin)"],
            notes: ["haben ... gezeigt → parfait avec haben (verbe transitif)", "populistischer Parteien : génitif pluriel sans article → terminaison -er", "Aufstieg = montée, essor → masculin"],
            difficulty_level: "advanced"
          },
          {
            id: 'de-pol-5',
            category: "Politik",
            theme: "Afrika-Kooperation",
            french: "Le gouvernement veut renforcer la coopération avec les pays africains.",
            reference: "Die Regierung will die Zusammenarbeit mit afrikanischen Ländern stärken.",
            grammar_points: ["mit + datif", "stärken (transitif)", "wollen + infinitif"],
            notes: ["mit + datif", "stärken = renforcer (transitif)", "wollen + infinitif → pas de zu"],
            difficulty_level: "intermediate"
          },
          {
            id: 'de-pol-6',
            category: "Politik",
            theme: "Europäische Union",
            french: "L'Union européenne doit faire face à des défis importants liés à la souveraineté numérique.",
            reference: "Die Europäische Union muss sich großen Herausforderungen im Bereich der digitalen Souveränität stellen.",
            grammar_points: ["sich stellen + datif", "im Bereich + génitif", "großen + datif"],
            notes: ["sich stellen = faire face (verbe réfléchi)", "im Bereich der Souveränität → im Bereich + génitif", "großen Herausforderungen → adjectif au datif pluriel"],
            difficulty_level: "advanced"
          },
          {
            id: 'de-pol-7',
            category: "Politik",
            theme: "Außenpolitik",
            french: "La politique étrangère allemande se concentre sur le multilatéralisme et la coopération internationale.",
            reference: "Die deutsche Außenpolitik konzentriert sich auf Multilateralismus und internationale Zusammenarbeit.",
            grammar_points: ["sich konzentrieren auf + accusatif", "auf + accusatif", "internationale + accusatif"],
            notes: ["sich konzentrieren auf = se concentrer sur (verbe réfléchi)", "auf Multilateralismus → auf + accusatif", "internationale Zusammenarbeit → adjectif épithète à l'accusatif"],
            difficulty_level: "advanced"
          },
          // MÉDIAS & SOCIÉTÉ
          {
            id: 'de-med-1',
            category: "Medien",
            theme: "Energiesicherheit",
            french: "Les médias allemands débattent de la sécurité énergétique du pays.",
            reference: "Die deutschen Medien diskutieren über die Energiesicherheit des Landes.",
            grammar_points: ["diskutieren über + Akkusativ", "Génitif singulier", "Mot composé"],
            notes: ["diskutieren über + Akkusativ (jamais datif ni mit ici)", "des Landes : génitif singulier (de + le pays)", "Energiesicherheit = mot composé neutre → attention à la majuscule"],
            difficulty_level: "intermediate"
          },
          {
            id: 'de-med-2',
            category: "Medien",
            theme: "Digitalisierung",
            french: "De nombreux experts critiquent la lenteur de la transition numérique.",
            reference: "Zahlreiche Experten kritisieren die Langsamkeit der digitalen Transformation.",
            grammar_points: ["kritisieren + Akkusativ", "zahlreich", "Adjectif épithète"],
            notes: ["kritisieren + Akkusativ → pas de préposition", "zahlreich = nombreux, souvent employé avec Experten, Studien, etc.", "digitale Transformation : adjectif épithète → digitale, pas digitalen (nominatif)"],
            difficulty_level: "intermediate"
          },
          {
            id: 'de-med-3',
            category: "Medien",
            theme: "Presse internationale",
            french: "La presse internationale couvre largement les élections allemandes.",
            reference: "Die internationale Presse berichtet ausführlich über die deutschen Wahlen.",
            grammar_points: ["berichten über + Akkusativ", "ausführlich (adverbe)", "Adjectif épithète"],
            notes: ["berichten über = rendre compte de (verbe + préposition)", "ausführlich = en détail (adverbe)", "internationale Presse → adjectif épithète au nominatif"],
            difficulty_level: "intermediate"
          },
          {
            id: 'de-med-4',
            category: "Medien",
            theme: "Soziale Medien",
            french: "Les réseaux sociaux influencent de plus en plus l'opinion publique en Allemagne.",
            reference: "Soziale Medien beeinflussen die öffentliche Meinung in Deutschland zunehmend.",
            grammar_points: ["beeinflussen (transitif)", "die + accusatif", "zunehmend (adverbe)"],
            notes: ["beeinflussen = influencer (verbe transitif)", "die öffentliche Meinung → accusatif singulier", "zunehmend = de plus en plus (adverbe)"],
            difficulty_level: "intermediate"
          },
          // TRANSPORTS
          {
            id: 'de-tra-1',
            category: "Verkehr",
            theme: "Nahverkehr",
            french: "Les transports publics devraient être rendus plus attractifs pour réduire la circulation automobile.",
            reference: "Der öffentliche Nahverkehr soll attraktiver gestaltet werden, um den Autoverkehr zu reduzieren.",
            grammar_points: ["sollen (objectif)", "Passif au présent", "um ... zu + infinitif"],
            notes: ["sollen = modal pour exprimer un objectif ou une intention politique", "gestaltet werden = passif au présent", "um ... zu + infinitif exprime ici le but → ne jamais ajouter damit dans la même phrase"],
            difficulty_level: "advanced"
          },
          {
            id: 'de-tra-2',
            category: "Verkehr",
            theme: "Elektromobilität",
            french: "L'Allemagne encourage le développement de la mobilité électrique pour atteindre ses objectifs climatiques.",
            reference: "Deutschland fördert die Entwicklung der Elektromobilität, um seine Klimaziele zu erreichen.",
            grammar_points: ["fördern + Akkusativ", "um ... zu + infinitif", "seine + accusatif"],
            notes: ["fördern = promouvoir, encourager (transitif)", "um ... zu + infinitif exprime le but", "seine Klimaziele → pronom possessif à l'accusatif"],
            difficulty_level: "intermediate"
          },
          {
            id: 'de-tra-3',
            category: "Verkehr",
            theme: "Luftverkehr",
            french: "Le transport aérien allemand fait face à des défis importants en matière d'émissions de CO2.",
            reference: "Der deutsche Luftverkehr steht vor großen Herausforderungen bezüglich CO2-Emissionen.",
            grammar_points: ["stehen vor + datif", "bezüglich + génitif", "großen + datif"],
            notes: ["stehen vor = faire face à (locution)", "bezüglich CO2-Emissionen → bezüglich + génitif", "großen Herausforderungen → adjectif au datif pluriel"],
            difficulty_level: "advanced"
          },
          // NOUVELLES CATÉGORIES ALLEMANDES
          // DROIT & JUSTICE
          {
            id: 'de-law-1',
            category: "Recht & Justiz",
            theme: "Rechtsstaat",
            french: "L'État de droit allemand garantit la protection des droits fondamentaux des citoyens.",
            reference: "Der deutsche Rechtsstaat gewährleistet den Schutz der Grundrechte der Bürger.",
            grammar_points: ["gewährleisten (transitif)", "den Schutz + génitif", "der Bürger + génitif"],
            notes: ["gewährleisten = garantir (verbe transitif)", "den Schutz der Grundrechte → accusatif + génitif", "der Bürger → génitif pluriel"],
            difficulty_level: "advanced"
          },
          {
            id: 'de-law-2',
            category: "Recht & Justiz",
            theme: "Europäischer Gerichtshof",
            french: "La Cour de justice européenne joue un rôle essentiel dans l'harmonisation du droit européen.",
            reference: "Der Europäische Gerichtshof spielt eine entscheidende Rolle bei der Harmonisierung des europäischen Rechts.",
            grammar_points: ["spielen (transitif)", "bei + datif", "des europäischen Rechts + génitif"],
            notes: ["eine Rolle spielen = jouer un rôle (locution)", "bei der Harmonisierung → bei + datif", "des europäischen Rechts → génitif"],
            difficulty_level: "advanced"
          },
          // PHILOSOPHIE & ÉTHIQUE
          {
            id: 'de-philo-1',
            category: "Philosophie & Ethik",
            theme: "Nachhaltige Entwicklung",
            french: "Le développement durable nécessite une réflexion éthique sur notre responsabilité envers l'environnement.",
            reference: "Nachhaltige Entwicklung erfordert ethische Reflexion über unsere Verantwortung gegenüber der Umwelt.",
            grammar_points: ["erfordern (transitif)", "über + accusatif", "gegenüber + datif"],
            notes: ["erfordern = nécessiter, exiger (verbe transitif)", "über unsere Verantwortung → über + accusatif", "gegenüber der Umwelt → gegenüber + datif"],
            difficulty_level: "advanced"
          },
          {
            id: 'de-philo-2',
            category: "Philosophie & Ethik",
            theme: "Künstliche Intelligenz",
            french: "L'intelligence artificielle soulève des questions philosophiques fondamentales sur la conscience humaine.",
            reference: "Künstliche Intelligenz wirft grundlegende philosophische Fragen über das menschliche Bewusstsein auf.",
            grammar_points: ["aufwerfen (séparé)", "grundlegende + accusatif", "über + accusatif"],
            notes: ["aufwerfen = soulever (verbe séparé)", "grundlegende Fragen → adjectif épithète à l'accusatif", "über das Bewusstsein → über + accusatif"],
            difficulty_level: "advanced"
          },
          // SANTÉ MENTALE
          {
            id: 'de-mental-1',
            category: "Psychische Gesundheit",
            theme: "Burnout-Prävention",
            french: "La prévention du burnout constitue un défi majeur pour les entreprises allemandes.",
            reference: "Die Burnout-Prävention stellt eine große Herausforderung für deutsche Unternehmen dar.",
            grammar_points: ["stellen dar", "eine große + accusatif", "für + accusatif"],
            notes: ["stellen dar = représenter (construction figée)", "eine große Herausforderung → accusatif singulier", "für deutsche Unternehmen → für + accusatif"],
            difficulty_level: "advanced"
          },
          {
            id: 'de-mental-2',
            category: "Psychische Gesundheit",
            theme: "Stressbewältigung",
            french: "La gestion du stress au travail améliore significativement la santé mentale des employés.",
            reference: "Stressbewältigung am Arbeitsplatz verbessert die psychische Gesundheit der Mitarbeiter erheblich.",
            grammar_points: ["verbessern (transitif)", "die psychische Gesundheit + accusatif", "erheblich (adverbe)"],
            notes: ["verbessern = améliorer (verbe transitif)", "die psychische Gesundheit → accusatif singulier", "erheblich = considérablement (adverbe)"],
            difficulty_level: "intermediate"
          },
          // ÉDUCATION SPÉCIALE
          {
            id: 'de-spec-ed-1',
            category: "Sonderpädagogik",
            theme: "Inklusive Bildung",
            french: "L'éducation inclusive permet aux enfants handicapés de s'intégrer pleinement dans le système scolaire.",
            reference: "Inklusive Bildung ermöglicht behinderten Kindern die vollständige Integration in das Schulsystem.",
            grammar_points: ["ermöglichen (transitif)", "behinderten Kindern + datif", "in + accusatif"],
            notes: ["ermöglichen = permettre, rendre possible (verbe transitif)", "behinderten Kindern → datif pluriel", "in das Schulsystem → in + accusatif"],
            difficulty_level: "advanced"
          },
          {
            id: 'de-spec-ed-2',
            category: "Sonderpädagogik",
            theme: "Individualisierung",
            french: "L'individualisation de l'enseignement prend en compte les besoins spécifiques de chaque élève.",
            reference: "Die Individualisierung des Unterrichts berücksichtigt die spezifischen Bedürfnisse jedes Schülers.",
            grammar_points: ["berücksichtigen (transitif)", "die spezifischen Bedürfnisse + accusatif", "jedes Schülers + génitif"],
            notes: ["berücksichtigen = prendre en compte (verbe transitif)", "die spezifischen Bedürfnisse → accusatif pluriel", "jedes Schülers → génitif singulier"],
            difficulty_level: "advanced"
          },
          // CYBERSÉCURITÉ
          {
            id: 'de-cyber-1',
            category: "Cybersicherheit",
            theme: "Datenschutz",
            french: "La protection des données constitue un pilier fondamental de la cybersécurité moderne.",
            reference: "Der Datenschutz bildet einen grundlegenden Pfeiler der modernen Cybersicherheit.",
            grammar_points: ["bilden (transitif)", "einen grundlegenden + accusatif", "der modernen + génitif"],
            notes: ["bilden = constituer, former (verbe transitif)", "einen grundlegenden Pfeiler → accusatif singulier", "der modernen Cybersicherheit → génitif"],
            difficulty_level: "advanced"
          },
          {
            id: 'de-cyber-2',
            category: "Cybersicherheit",
            theme: "Cyberangriffe",
            french: "Les attaques informatiques menacent de plus en plus les infrastructures critiques allemandes.",
            reference: "Cyberangriffe bedrohen zunehmend die kritischen Infrastrukturen Deutschlands.",
            grammar_points: ["bedrohen (transitif)", "zunehmend (adverbe)", "Deutschlands + génitif"],
            notes: ["bedrohen = menacer (verbe transitif)", "zunehmend = de plus en plus (adverbe)", "Deutschlands → génitif singulier"],
            difficulty_level: "advanced"
          },
          // GÉNÉRATION Z
          {
            id: 'de-genz-1',
            category: "Generation Z",
            theme: "Nachhaltiger Konsum",
            french: "La génération Z privilégie la consommation durable et respectueuse de l'environnement.",
            reference: "Die Generation Z bevorzugt nachhaltigen Konsum und umweltfreundliches Verhalten.",
            grammar_points: ["bevorzugen (transitif)", "nachhaltigen + accusatif", "umweltfreundliches + accusatif"],
            notes: ["bevorzugen = privilégier (verbe transitif)", "nachhaltigen Konsum → accusatif singulier", "umweltfreundliches Verhalten → accusatif singulier"],
            difficulty_level: "intermediate"
          },
          {
            id: 'de-genz-2',
            category: "Generation Z",
            theme: "Work-Life-Balance",
            french: "Les jeunes générations revendiquent un meilleur équilibre entre vie professionnelle et vie privée.",
            reference: "Junge Generationen fordern bessere Balance zwischen Berufsleben und Privatleben.",
            grammar_points: ["fordern (transitif)", "bessere + accusatif", "zwischen + datif"],
            notes: ["fordern = revendiquer, exiger (verbe transitif)", "bessere Balance → accusatif singulier", "zwischen Berufsleben und Privatleben → zwischen + datif"],
            difficulty_level: "intermediate"
          },
          // BIOTECHNOLOGIE
          {
            id: 'de-bio-1',
            category: "Biotechnologie",
            theme: "Gentechnik",
            french: "La technique génétique offre de nouvelles possibilités pour la médecine personnalisée.",
            reference: "Die Gentechnik bietet neue Möglichkeiten für die personalisierte Medizin.",
            grammar_points: ["bieten (transitif)", "neue Möglichkeiten + accusatif", "für + accusatif"],
            notes: ["bieten = offrir (verbe transitif)", "neue Möglichkeiten → accusatif pluriel", "für die Medizin → für + accusatif"],
            difficulty_level: "advanced"
          },
          {
            id: 'de-bio-2',
            category: "Biotechnologie",
            theme: "Bioökonomie",
            french: "La bioéconomie transforme les ressources biologiques en produits durables et innovants.",
            reference: "Die Bioökonomie wandelt biologische Ressourcen in nachhaltige und innovative Produkte um.",
            grammar_points: ["umwandeln (séparé)", "biologische Ressourcen + accusatif", "in + accusatif"],
            notes: ["umwandeln = transformer (verbe séparé)", "biologische Ressourcen → accusatif pluriel", "in nachhaltige Produkte → in + accusatif"],
            difficulty_level: "advanced"
          },
          // ESPACE
          {
            id: 'de-space-1',
            category: "Weltraum",
            theme: "Raumfahrt",
            french: "L'astronautique allemande contribue significativement aux missions spatiales européennes.",
            reference: "Die deutsche Raumfahrt trägt wesentlich zu europäischen Weltraummissionen bei.",
            grammar_points: ["beitragen zu + datif", "wesentlich (adverbe)", "europäischen + datif"],
            notes: ["beitragen zu = contribuer à (verbe + préposition)", "wesentlich = significativement (adverbe)", "europäischen Weltraummissionen → datif pluriel"],
            difficulty_level: "advanced"
          },
          {
            id: 'de-space-2',
            category: "Weltraum",
            theme: "Satelliten",
            french: "Les satellites allemands surveillent l'évolution du climat et des catastrophes naturelles.",
            reference: "Deutsche Satelliten überwachen die Entwicklung des Klimas und Naturkatastrophen.",
            grammar_points: ["überwachen (transitif)", "die Entwicklung + accusatif", "des Klimas + génitif"],
            notes: ["überwachen = surveiller (verbe transitif)", "die Entwicklung → accusatif singulier", "des Klimas → génitif singulier"],
            difficulty_level: "advanced"
          },
          // NOUVELLES PHRASES ALLEMANDES SUPPLÉMENTAIRES
          // ÉCONOMIE DIGITALE
          {
            id: 'de-econ-10',
            category: "Wirtschaft",
            theme: "E-Commerce",
            french: "Le commerce électronique allemand atteint de nouveaux records grâce à la digitalisation.",
            reference: "Der deutsche E-Commerce erreicht dank der Digitalisierung neue Rekorde.",
            grammar_points: ["erreichen (transitif)", "dank + génitif", "neue + accusatif"],
            notes: ["erreichen = atteindre (verbe transitif)", "dank der Digitalisierung → dank + génitif", "neue Rekorde → accusatif pluriel"],
            difficulty_level: "intermediate"
          },
          {
            id: 'de-econ-11',
            category: "Wirtschaft",
            theme: "Kreislaufwirtschaft",
            french: "L'économie circulaire allemande vise à réduire les déchets et préserver les ressources.",
            reference: "Die deutsche Kreislaufwirtschaft zielt darauf ab, Abfälle zu reduzieren und Ressourcen zu schonen.",
            grammar_points: ["zielen + darauf ab", "zu + infinitif", "und + infinitif"],
            notes: ["zielen darauf ab = viser à (locution)", "Abfälle zu reduzieren → zu + infinitif", "Ressourcen zu schonen → zu + infinitif"],
            difficulty_level: "advanced"
          },
          // TRAVAIL & EMPLOI
          {
            id: 'de-work-1',
            category: "Arbeitswelt",
            theme: "Hybrides Arbeiten",
            french: "Le travail hybride allemand combine les avantages du bureau et du travail à domicile.",
            reference: "Das hybride Arbeiten in Deutschland kombiniert die Vorteile des Büros und der Heimarbeit.",
            grammar_points: ["kombinieren (transitif)", "die Vorteile + génitif", "des Büros + génitif"],
            notes: ["kombinieren = combiner (verbe transitif)", "die Vorteile → accusatif pluriel", "des Büros → génitif singulier"],
            difficulty_level: "intermediate"
          },
          {
            id: 'de-work-2',
            category: "Arbeitswelt",
            theme: "Weiterbildung",
            french: "La formation continue allemande constitue un investissement essentiel pour les entreprises.",
            reference: "Die deutsche Weiterbildung stellt eine wesentliche Investition für Unternehmen dar.",
            grammar_points: ["stellen dar", "eine wesentliche + accusatif", "für + accusatif"],
            notes: ["stellen dar = représenter (construction figée)", "eine wesentliche Investition → accusatif singulier", "für Unternehmen → für + accusatif"],
            difficulty_level: "intermediate"
          },
          // MÉDIAS & COMMUNICATION
          {
            id: 'de-media-5',
            category: "Medien",
            theme: "Digitaljournalismus",
            french: "Le journalisme numérique allemand transforme les méthodes de diffusion de l'information.",
            reference: "Der deutsche Digitaljournalismus verändert die Methoden der Informationsverbreitung.",
            grammar_points: ["verändern (transitif)", "die Methoden + accusatif", "der Informationsverbreitung + génitif"],
            notes: ["verändern = transformer (verbe transitif)", "die Methoden → accusatif pluriel", "der Informationsverbreitung → génitif"],
            difficulty_level: "intermediate"
          },
          {
            id: 'de-media-6',
            category: "Medien",
            theme: "Soziale Unternehmensnetzwerke",
            french: "Les réseaux sociaux d'entreprise facilitent la communication interne des organisations allemandes.",
            reference: "Soziale Unternehmensnetzwerke erleichtern die interne Kommunikation deutscher Organisationen.",
            grammar_points: ["erleichtern (transitif)", "die interne Kommunikation + accusatif", "deutscher Organisationen + génitif"],
            notes: ["erleichtern = faciliter (verbe transitif)", "die interne Kommunikation → accusatif singulier", "deutscher Organisationen → génitif pluriel"],
            difficulty_level: "advanced"
          },
          // SÉCURITÉ & DÉFENSE
          {
            id: 'de-sec-1',
            category: "Sicherheit",
            theme: "Nationale Cyberverteidigung",
            french: "La cyberdéfense nationale allemande protège les infrastructures critiques contre les cyberattaques.",
            reference: "Die nationale Cyberverteidigung Deutschlands schützt kritische Infrastrukturen vor Cyberangriffen.",
            grammar_points: ["schützen (transitif)", "kritische Infrastrukturen + accusatif", "vor + datif"],
            notes: ["schützen = protéger (verbe transitif)", "kritische Infrastrukturen → accusatif pluriel", "vor Cyberangriffen → vor + datif"],
            difficulty_level: "advanced"
          },
          {
            id: 'de-sec-2',
            category: "Sicherheit",
            theme: "Defensive KI",
            french: "L'intelligence artificielle défensive améliore la détection des menaces cybernétiques allemandes.",
            reference: "Die defensive künstliche Intelligenz verbessert die Erkennung deutscher Cyberbedrohungen.",
            grammar_points: ["verbessern (transitif)", "die Erkennung + accusatif", "deutscher + génitif"],
            notes: ["verbessern = améliorer (verbe transitif)", "die Erkennung → accusatif singulier", "deutscher Cyberbedrohungen → génitif pluriel"],
            difficulty_level: "advanced"
          },
          // URBANISME & VILLES
          {
            id: 'de-urban-4',
            category: "Stadtplanung",
            theme: "Smart Cities",
            french: "Les villes intelligentes allemandes utilisent les technologies IoT pour améliorer la qualité de vie urbaine.",
            reference: "Deutsche Smart Cities nutzen IoT-Technologien, um die urbane Lebensqualität zu verbessern.",
            grammar_points: ["nutzen (transitif)", "um ... zu + infinitif", "die urbane Lebensqualität + accusatif"],
            notes: ["nutzen = utiliser (verbe transitif)", "um zu verbessern → um ... zu + infinitif", "die urbane Lebensqualität → accusatif singulier"],
            difficulty_level: "advanced"
          },
          {
            id: 'de-urban-5',
            category: "Stadtplanung",
            theme: "Nachhaltige Mobilität",
            french: "La mobilité durable réduit l'empreinte carbone des déplacements urbains en Allemagne.",
            reference: "Die nachhaltige Mobilität reduziert den CO2-Fußabdruck urbaner Verkehrsmittel in Deutschland.",
            grammar_points: ["reduzieren (transitif)", "den CO2-Fußabdruck + accusatif", "urbaner Verkehrsmittel + génitif"],
            notes: ["reduzieren = réduire (verbe transitif)", "den CO2-Fußabdruck → accusatif singulier", "urbaner Verkehrsmittel → génitif pluriel"],
            difficulty_level: "advanced"
          },
          // AGRICULTURE & ALIMENTATION
          {
            id: 'de-agri-1',
            category: "Landwirtschaft",
            theme: "Innovative Agrarwirtschaft",
            french: "L'agroalimentaire innovant allemand combine tradition et technologies modernes pour la qualité.",
            reference: "Die innovative deutsche Agrarwirtschaft kombiniert Tradition und moderne Technologien für die Qualität.",
            grammar_points: ["kombinieren (transitif)", "Tradition + accusatif", "für + accusatif"],
            notes: ["kombinieren = combiner (verbe transitif)", "Tradition → accusatif singulier", "für die Qualität → für + accusatif"],
            difficulty_level: "advanced"
          },
          {
            id: 'de-agri-2',
            category: "Landwirtschaft",
            theme: "Ernährungssicherheit",
            french: "La sécurité alimentaire mondiale nécessite une coopération internationale accrue.",
            reference: "Die globale Ernährungssicherheit erfordert eine verstärkte internationale Zusammenarbeit.",
            grammar_points: ["erfordern (transitif)", "eine verstärkte + accusatif", "internationale + accusatif"],
            notes: ["erfordern = nécessiter (verbe transitif)", "eine verstärkte Zusammenarbeit → accusatif singulier", "internationale Zusammenarbeit → adjectif épithète"],
            difficulty_level: "advanced"
          },
          // ÉNERGIE & CLIMAT
          {
            id: 'de-energy-1',
            category: "Energie",
            theme: "Energiespeicherung",
            french: "Le stockage énergétique innovant permet d'équilibrer l'offre et la demande d'électricité renouvelable.",
            reference: "Die innovative Energiespeicherung ermöglicht den Ausgleich von Angebot und Nachfrage erneuerbarer Elektrizität.",
            grammar_points: ["ermöglichen (transitif)", "den Ausgleich + génitif", "von + datif"],
            notes: ["ermöglichen = permettre (verbe transitif)", "den Ausgleich → accusatif singulier", "von Angebot und Nachfrage → von + datif"],
            difficulty_level: "advanced"
          },
          {
            id: 'de-energy-2',
            category: "Energie",
            theme: "Gerechter Energiewandel",
            french: "La transition énergétique juste inclut toutes les communautés dans le processus de transformation.",
            reference: "Der gerechte Energiewandel bezieht alle Gemeinschaften in den Transformationsprozess ein.",
            grammar_points: ["einbeziehen (séparé)", "alle Gemeinschaften + accusatif", "in + accusatif"],
            notes: ["einbeziehen = inclure (verbe séparé)", "alle Gemeinschaften → accusatif pluriel", "in den Prozess → in + accusatif"],
            difficulty_level: "advanced"
          },
          // SANTÉ PUBLIQUE
          {
            id: 'de-pubhealth-1',
            category: "Öffentliche Gesundheit",
            theme: "Präventivmedizin",
            french: "La médecine préventive allemande met l'accent sur les habitudes de vie saines.",
            reference: "Die deutsche Präventivmedizin legt den Schwerpunkt auf gesunde Lebensgewohnheiten.",
            grammar_points: ["legen (transitif)", "den Schwerpunkt + accusatif", "auf + accusatif"],
            notes: ["den Schwerpunkt legen = mettre l'accent (locution)", "den Schwerpunkt → accusatif singulier", "auf gesunde Lebensgewohnheiten → auf + accusatif"],
            difficulty_level: "intermediate"
          },
          {
            id: 'de-pubhealth-2',
            category: "Öffentliche Gesundheit",
            theme: "Gesundheitssysteme",
            french: "Les systèmes de santé allemands font face à des défis démographiques importants.",
            reference: "Die deutschen Gesundheitssysteme stehen vor bedeutenden demografischen Herausforderungen.",
            grammar_points: ["stehen vor + datif", "bedeutenden + datif", "demografischen + datif"],
            notes: ["stehen vor = faire face à (locution)", "bedeutenden Herausforderungen → datif pluriel", "demografischen Herausforderungen → adjectif au datif"],
            difficulty_level: "advanced"
          },
          // ÉDUCATION SUPÉRIEURE
          {
            id: 'de-high-edu-1',
            category: "Hochschulbildung",
            theme: "Internationalisierung",
            french: "L'internationalisation universitaire allemande attire des étudiants du monde entier.",
            reference: "Die Internationalisierung deutscher Hochschulen zieht Studenten aus aller Welt an.",
            grammar_points: ["anziehen (séparé)", "Studenten + accusatif", "aus + datif"],
            notes: ["anziehen = attirer (verbe séparé)", "Studenten → accusatif pluriel", "aus aller Welt → aus + datif"],
            difficulty_level: "intermediate"
          },
          {
            id: 'de-high-edu-2',
            category: "Hochschulbildung",
            theme: "Angewandte Forschung",
            french: "La recherche appliquée universitaire contribue à l'innovation et au développement économique.",
            reference: "Die angewandte Hochschulforschung trägt zur Innovation und zur wirtschaftlichen Entwicklung bei.",
            grammar_points: ["beitragen zu + datif", "zur Innovation + datif", "zur Entwicklung + datif"],
            notes: ["beitragen zu = contribuer à (verbe + préposition)", "zur Innovation → zu + datif", "zur wirtschaftlichen Entwicklung → zu + datif"],
            difficulty_level: "advanced"
          },
          // INNOVATION & STARTUPS
          {
            id: 'de-inno-1',
            category: "Innovation",
            theme: "Soziales Unternehmertum",
            french: "L'entrepreneuriat social allemand résout des problèmes sociaux par des solutions innovantes.",
            reference: "Das deutsche soziale Unternehmertum löst soziale Probleme mittels innovativer Lösungen.",
            grammar_points: ["lösen (transitif)", "soziale Probleme + accusatif", "mittels + génitif"],
            notes: ["lösen = résoudre (verbe transitif)", "soziale Probleme → accusatif pluriel", "mittels innovativer Lösungen → mittels + génitif"],
            difficulty_level: "advanced"
          },
          {
            id: 'de-inno-2',
            category: "Innovation",
            theme: "Technologietransfer",
            french: "Le transfert technologique universitaire facilite la création d'entreprises innovantes en Allemagne.",
            reference: "Der universitäre Technologietransfer erleichtert die Gründung innovativer Unternehmen in Deutschland.",
            grammar_points: ["erleichtern (transitif)", "die Gründung + accusatif", "in + datif"],
            notes: ["erleichtern = faciliter (verbe transitif)", "die Gründung → accusatif singulier", "in Deutschland → in + datif"],
            difficulty_level: "advanced"
          }
        ],
        es: [
          // GEOPOLÍTICA
          {
            id: 'es-geo-1',
            category: "Geopolítica",
            theme: "Relaciones internacionales",
            french: "L'Espagne renforce ses liens diplomatiques avec l'Amérique latine.",
            reference: "España refuerza sus vínculos diplomáticos con América Latina.",
            grammar_points: ["Presente de indicativo", "Pronombres posesivos", "Preposiciones"],
            difficulty_level: "intermediate"
          },
          {
            id: 'es-geo-2',
            category: "Geopolítica",
            theme: "Unión Europea",
            french: "La position de l'Espagne sur la politique migratoire européenne évolue.",
            reference: "La posición de España sobre la política migratoria europea evoluciona.",
            grammar_points: ["Presente de indicativo", "Preposiciones", "Adjetivos"],
            difficulty_level: "intermediate"
          },
          {
            id: 'es-geo-3',
            category: "Geopolítica",
            theme: "Cooperación internacional",
            french: "L'Espagne participe activement aux missions de paix internationales.",
            reference: "España participa activamente en las misiones de paz internacionales.",
            grammar_points: ["Presente de indicativo", "Adverbios", "en + artículo"],
            difficulty_level: "intermediate"
          },
          {
            id: 'es-geo-4',
            category: "Geopolítica",
            theme: "Relaciones transatlánticas",
            french: "Les relations transatlantiques constituent un pilier essentiel de la politique étrangère espagnole.",
            reference: "Las relaciones transatlánticas constituyen un pilar esencial de la política exterior española.",
            grammar_points: ["Presente de indicativo", "un + sustantivo", "de + sustantivo"],
            difficulty_level: "advanced"
          },
          // ECONOMÍA
          {
            id: 'es-eco-1',
            category: "Economía",
            theme: "Turismo sostenible",
            french: "Le tourisme durable devient une priorité économique en Espagne.",
            reference: "El turismo sostenible se convierte en una prioridad económica en España.",
            grammar_points: ["Presente de indicativo", "Reflexivos", "Preposiciones"],
            difficulty_level: "intermediate"
          },
          {
            id: 'es-eco-2',
            category: "Economía",
            theme: "Innovación tecnológica",
            french: "L'Espagne investit dans l'innovation technologique pour améliorer sa compétitivité.",
            reference: "España invierte en innovación tecnológica para mejorar su competitividad.",
            grammar_points: ["Presente de indicativo", "en + sustantivo", "para + infinitivo"],
            difficulty_level: "intermediate"
          },
          {
            id: 'es-eco-3',
            category: "Economía",
            theme: "Emprendimiento",
            french: "L'entrepreneuriat représente une opportunité importante pour les jeunes espagnols.",
            reference: "El emprendimiento representa una oportunidad importante para los jóvenes españoles.",
            grammar_points: ["Presente de indicativo", "una + sustantivo", "para + artículo"],
            difficulty_level: "intermediate"
          },
          // SOCIEDAD
          {
            id: 'es-soc-1',
            category: "Sociedad",
            theme: "Innovación educativa",
            french: "L'innovation pédagogique transforme l'enseignement supérieur espagnol.",
            reference: "La innovación pedagógica transforma la enseñanza superior española.",
            grammar_points: ["Presente de indicativo", "Adjetivos", "Artículos"],
            difficulty_level: "intermediate"
          },
          {
            id: 'es-soc-2',
            category: "Sociedad",
            theme: "Cambio demográfico",
            french: "Le vieillissement de la population pose des défis au système social espagnol.",
            reference: "El envejecimiento de la población plantea desafíos al sistema social español.",
            grammar_points: ["Presente de indicativo", "Preposiciones", "Artículos"],
            difficulty_level: "intermediate"
          },
          {
            id: 'es-soc-3',
            category: "Sociedad",
            theme: "Igualdad de género",
            french: "L'Espagne promeut l'égalité de genre dans tous les domaines de la société.",
            reference: "España promueve la igualdad de género en todos los ámbitos de la sociedad.",
            grammar_points: ["Presente de indicativo", "en + artículo", "de + sustantivo"],
            difficulty_level: "intermediate"
          },
          {
            id: 'es-soc-4',
            category: "Sociedad",
            theme: "Envejecimiento poblacional",
            french: "Le vieillissement de la population pose des défis importants aux systèmes de retraite espagnols.",
            reference: "El envejecimiento de la población plantea desafíos importantes a los sistemas de pensiones españoles.",
            grammar_points: ["Presente de indicativo", "desafíos + adjetivo", "a + artículo"],
            difficulty_level: "intermediate"
          },
          // MEDIO AMBIENTE
          {
            id: 'es-env-1',
            category: "Medio Ambiente",
            theme: "Energías renovables",
            french: "L'Espagne investit massivement dans les énergies renouvelables.",
            reference: "España invierte masivamente en energías renovables.",
            grammar_points: ["Presente de indicativo", "Preposiciones", "Adverbios"],
            difficulty_level: "intermediate"
          },
          {
            id: 'es-env-2',
            category: "Medio Ambiente",
            theme: "Cambio climático",
            french: "Le changement climatique affecte directement les côtes espagnoles.",
            reference: "El cambio climático afecta directamente a las costas españolas.",
            grammar_points: ["Presente de indicativo", "Adverbios", "a + artículo"],
            difficulty_level: "intermediate"
          },
          {
            id: 'es-env-3',
            category: "Medio Ambiente",
            theme: "Conservación biodiversidad",
            french: "La conservation de la biodiversité constitue une priorité pour la politique environnementale espagnole.",
            reference: "La conservación de la biodiversidad constituye una prioridad para la política medioambiental española.",
            grammar_points: ["Presente de indicativo", "una + sustantivo", "para + artículo"],
            difficulty_level: "advanced"
          },
          // NOUVELLES CATÉGORIES ESPAGNOLES
          // DROIT & JUSTICE
          {
            id: 'es-law-1',
            category: "Derecho & Justicia",
            theme: "Estado de derecho",
            french: "L'État de droit espagnol garantit la protection des droits fondamentaux des citoyens.",
            reference: "El estado de derecho español garantiza la protección de los derechos fundamentales de los ciudadanos.",
            grammar_points: ["Presente de indicativo", "la protección + de + sustantivo", "de + artículo"],
            difficulty_level: "intermediate"
          },
          {
            id: 'es-law-2',
            category: "Derecho & Justicia",
            theme: "Tribunal Europeo",
            french: "Le Tribunal européen joue un rôle crucial dans l'harmonisation du droit communautaire.",
            reference: "El Tribunal Europeo desempeña un papel crucial en la armonización del derecho comunitario.",
            grammar_points: ["Presente de indicativo", "en + artículo", "del + sustantivo"],
            difficulty_level: "advanced"
          },
          {
            id: 'es-law-3',
            category: "Derecho & Justicia",
            theme: "Derechos humanos",
            french: "La protection des droits humains constitue un défi permanent dans un monde globalisé.",
            reference: "La protección de los derechos humanos constituye un desafío permanente en un mundo globalizado.",
            grammar_points: ["Presente de indicativo", "un + adjetivo", "en + artículo"],
            difficulty_level: "advanced"
          },
          // PHILOSOPHIE & ÉTHIQUE
          {
            id: 'es-philo-1',
            category: "Filosofía & Ética",
            theme: "Desarrollo sostenible",
            french: "Le développement durable nécessite une réflexion éthique sur nos responsabilités environnementales.",
            reference: "El desarrollo sostenible requiere una reflexión ética sobre nuestras responsabilidades medioambientales.",
            grammar_points: ["Presente de indicativo", "una + sustantivo", "sobre + sustantivo"],
            difficulty_level: "advanced"
          },
          {
            id: 'es-philo-2',
            category: "Filosofía & Ética",
            theme: "Inteligencia artificial",
            french: "L'intelligence artificielle soulève des questions éthiques fondamentales sur l'autonomie humaine.",
            reference: "La inteligencia artificial plantea cuestiones éticas fundamentales sobre la autonomía humana.",
            grammar_points: ["Presente de indicativo", "cuestiones + adjetivo", "sobre + artículo"],
            difficulty_level: "advanced"
          },
          // SANTÉ MENTALE
          {
            id: 'es-mental-1',
            category: "Salud Mental",
            theme: "Prevención burnout",
            french: "La prévention du burnout représente un défi majeur pour les entreprises espagnoles.",
            reference: "La prevención del burnout representa un desafío mayor para las empresas españolas.",
            grammar_points: ["Presente de indicativo", "del + sustantivo", "para + artículo"],
            difficulty_level: "intermediate"
          },
          {
            id: 'es-mental-2',
            category: "Salud Mental",
            theme: "Gestión estrés",
            french: "La gestion du stress au travail améliore considérablement la santé mentale des employés.",
            reference: "La gestión del estrés en el trabajo mejora considerablemente la salud mental de los empleados.",
            grammar_points: ["Presente de indicativo", "en + artículo", "de + artículo"],
            difficulty_level: "intermediate"
          },
          // ÉDUCATION SPÉCIALE
          {
            id: 'es-spec-ed-1',
            category: "Educación Especial",
            theme: "Educación inclusiva",
            french: "L'éducation inclusive permet aux élèves handicapés de s'intégrer pleinement dans le système éducatif.",
            reference: "La educación inclusiva permite a los alumnos con discapacidad integrarse plenamente en el sistema educativo.",
            grammar_points: ["Presente de indicativo", "a + artículo", "en + artículo"],
            difficulty_level: "intermediate"
          },
          {
            id: 'es-spec-ed-2',
            category: "Educación Especial",
            theme: "Aprendizaje personalizado",
            french: "L'apprentissage personnalisé prend en compte les rythmes individuels d'apprentissage des élèves.",
            reference: "El aprendizaje personalizado tiene en cuenta los ritmos individuales de aprendizaje de los alumnos.",
            grammar_points: ["Presente de indicativo", "en + sustantivo", "de + artículo"],
            difficulty_level: "intermediate"
          },
          // CYBERSÉCURITÉ
          {
            id: 'es-cyber-1',
            category: "Ciberseguridad",
            theme: "Protección datos",
            french: "La protection des données constitue un droit fondamental dans l'ère numérique espagnole.",
            reference: "La protección de datos constituye un derecho fundamental en la era digital española.",
            grammar_points: ["Presente de indicativo", "un + sustantivo", "en + artículo"],
            difficulty_level: "advanced"
          },
          {
            id: 'es-cyber-2',
            category: "Ciberseguridad",
            theme: "Ataques ransomware",
            french: "Les attaques par ransomware paralysent de plus en plus les infrastructures critiques espagnoles.",
            reference: "Los ataques de ransomware paralizan cada vez más las infraestructuras críticas españolas.",
            grammar_points: ["Presente de indicativo", "cada vez más", "infraestructuras + adjetivo"],
            difficulty_level: "advanced"
          },
          // GÉNÉRATION Z
          {
            id: 'es-genz-1',
            category: "Generación Z",
            theme: "Consumo responsable",
            french: "La génération Z privilégie le consumérisme responsable et l'impact environnemental des produits.",
            reference: "La generación Z prioriza el consumismo responsable y el impacto medioambiental de los productos.",
            grammar_points: ["Presente de indicativo", "el + sustantivo", "de + artículo"],
            difficulty_level: "intermediate"
          },
          {
            id: 'es-genz-2',
            category: "Generación Z",
            theme: "Equilibrio vida-trabajo",
            french: "Les jeunes générations revendiquent un meilleur équilibre entre vie professionnelle et vie personnelle.",
            reference: "Las jóvenes generaciones reivindican un mejor equilibrio entre vida profesional y vida personal.",
            grammar_points: ["Presente de indicativo", "un + adjetivo", "entre + sustantivo"],
            difficulty_level: "intermediate"
          },
          // BIOTECNOLOGÍA
          {
            id: 'es-bio-1',
            category: "Biotecnología",
            theme: "Edición genómica",
            french: "L'édition génomique ouvre de nouvelles perspectives thérapeutiques pour les maladies héréditaires.",
            reference: "La edición genómica abre nuevas perspectivas terapéuticas para las enfermedades hereditarias.",
            grammar_points: ["Presente de indicativo", "nuevas + sustantivo", "para + artículo"],
            difficulty_level: "advanced"
          },
          {
            id: 'es-bio-2',
            category: "Biotecnología",
            theme: "Agricultura sostenible",
            french: "La biotechnologie améliore l'agriculture durable et la sécurité alimentaire mondiale.",
            reference: "La biotecnología mejora la agricultura sostenible y la seguridad alimentaria mundial.",
            grammar_points: ["Presente de indicativo", "la + sustantivo", "y + sustantivo"],
            difficulty_level: "advanced"
          },
          // ESPACIO & AERONÁUTICA
          {
            id: 'es-space-1',
            category: "Espacio",
            theme: "Exploración espacial",
            french: "L'exploration spatiale espagnole contribue aux missions internationales de recherche scientifique.",
            reference: "La exploración espacial española contribuye a las misiones internacionales de investigación científica.",
            grammar_points: ["Presente de indicativo", "a + artículo", "de + sustantivo"],
            difficulty_level: "advanced"
          },
          {
            id: 'es-space-2',
            category: "Espacio",
            theme: "Satélites",
            french: "Les satellites espagnols surveillent l'évolution du climat et les phénomènes météorologiques.",
            reference: "Los satélites españoles vigilan la evolución del clima y los fenómenos meteorológicos.",
            grammar_points: ["Presente de indicativo", "la evolución + del + sustantivo", "y + artículo"],
            difficulty_level: "advanced"
          },
          // NOUVELLES PHRASES ESPAGNOLES SUPPLÉMENTAIRES
          // ÉCONOMIE DIGITALE
          {
            id: 'es-econ-4',
            category: "Economía",
            theme: "Comercio electrónico avanzado",
            french: "Le commerce électronique avancé transforme les habitudes de consommation des générations numériques.",
            reference: "El comercio electrónico avanzado transforma los hábitos de consumo de las generaciones digitales.",
            grammar_points: ["Presente de indicativo", "los hábitos + de + sustantivo", "de + artículo"],
            difficulty_level: "intermediate"
          },
          {
            id: 'es-econ-5',
            category: "Economía",
            theme: "Economía circular",
            french: "L'économie circulaire vise à réduire les déchets et optimiser l'utilisation des ressources.",
            reference: "La economía circular busca reducir los residuos y optimizar la utilización de los recursos.",
            grammar_points: ["Presente de indicativo", "busca + infinitivo", "la utilización + de + artículo"],
            difficulty_level: "advanced"
          },
          // TRAVAIL & EMPLOI
          {
            id: 'es-work-1',
            category: "Trabajo",
            theme: "Trabajo híbrido",
            french: "Le travail hybride combine les avantages du bureau et du télétravail pour les employés.",
            reference: "El trabajo híbrido combina las ventajas de la oficina y el teletrabajo para los empleados.",
            grammar_points: ["Presente de indicativo", "las ventajas + de + artículo", "para + artículo"],
            difficulty_level: "intermediate"
          },
          {
            id: 'es-work-2',
            category: "Trabajo",
            theme: "Formación continua",
            french: "La formation continue constitue un investissement essentiel pour le développement professionnel.",
            reference: "La formación continua constituye una inversión esencial para el desarrollo profesional.",
            grammar_points: ["Presente de indicativo", "una inversión + adjetivo", "para + artículo"],
            difficulty_level: "intermediate"
          },
          // MÉDIAS & COMMUNICATION
          {
            id: 'es-media-4',
            category: "Medios",
            theme: "Periodismo digital",
            french: "Le journalisme numérique transforme les méthodes de diffusion de l'information en Espagne.",
            reference: "El periodismo digital transforma los métodos de difusión de la información en España.",
            grammar_points: ["Presente de indicativo", "los métodos + de + sustantivo", "en + nombre propio"],
            difficulty_level: "intermediate"
          },
          {
            id: 'es-media-5',
            category: "Medios",
            theme: "Redes sociales corporativas",
            french: "Les réseaux sociaux d'entreprise facilitent la communication interne et externe des organisations.",
            reference: "Las redes sociales corporativas facilitan la comunicación interna y externa de las organizaciones.",
            grammar_points: ["Presente de indicativo", "la comunicación + adjetivo", "de + artículo"],
            difficulty_level: "advanced"
          },
          // SÉCURITÉ & DÉFENSE
          {
            id: 'es-sec-1',
            category: "Seguridad",
            theme: "Ciberdefensa nacional",
            french: "La cyberdéfense nationale espagnole protège les infrastructures critiques contre les cyberattaques.",
            reference: "La ciberdefensa nacional española protege las infraestructuras críticas contra los ciberataques.",
            grammar_points: ["Presente de indicativo", "las infraestructuras + adjetivo", "contra + artículo"],
            difficulty_level: "advanced"
          },
          {
            id: 'es-sec-2',
            category: "Seguridad",
            theme: "Inteligencia artificial defensiva",
            french: "L'intelligence artificielle défensive améliore la détection des menaces cybernétiques.",
            reference: "La inteligencia artificial defensiva mejora la detección de amenazas cibernéticas.",
            grammar_points: ["Presente de indicativo", "la detección + de + sustantivo", "adjetivos compuestos"],
            difficulty_level: "advanced"
          },
          // URBANISME & VILLES
          {
            id: 'es-urban-4',
            category: "Urbanismo",
            theme: "Ciudades inteligentes",
            french: "Les villes intelligentes espagnoles utilisent les technologies IoT pour améliorer la qualité de vie.",
            reference: "Las ciudades inteligentes españolas utilizan las tecnologías IoT para mejorar la calidad de vida.",
            grammar_points: ["Presente de indicativo", "las tecnologías + sustantivo", "para + infinitivo"],
            difficulty_level: "advanced"
          },
          {
            id: 'es-urban-5',
            category: "Urbanismo",
            theme: "Movilidad sostenible",
            french: "La mobilité durable réduit l'empreinte carbone des déplacements urbains en Espagne.",
            reference: "La movilidad sostenible reduce la huella de carbono de los desplazamientos urbanos en España.",
            grammar_points: ["Presente de indicativo", "la huella + de + sustantivo", "de + artículo"],
            difficulty_level: "intermediate"
          },
          // AGRICULTURE & ALIMENTATION
          {
            id: 'es-agri-4',
            category: "Agricultura",
            theme: "Agroalimentario innovador",
            french: "L'agroalimentaire innovant espagnol combine tradition et technologies modernes pour la qualité.",
            reference: "El agroalimentario innovador español combina tradición y tecnologías modernas para la calidad.",
            grammar_points: ["Presente de indicativo", "combina + sustantivos", "para + artículo"],
            difficulty_level: "advanced"
          },
          {
            id: 'es-agri-5',
            category: "Agricultura",
            theme: "Seguridad alimentaria",
            french: "La sécurité alimentaire mondiale nécessite une coopération internationale accrue.",
            reference: "La seguridad alimentaria mundial requiere una cooperación internacional incrementada.",
            grammar_points: ["Presente de indicativo", "requiere + sustantivo", "adjetivo + participio"],
            difficulty_level: "advanced"
          },
          // ÉNERGIE & CLIMAT
          {
            id: 'es-energy-4',
            category: "Energía",
            theme: "Almacenamiento energético",
            french: "Le stockage énergétique innovant permet d'équilibrer l'offre et la demande d'électricité renouvelable.",
            reference: "El almacenamiento energético innovador permite equilibrar la oferta y la demanda de electricidad renovable.",
            grammar_points: ["Presente de indicativo", "permite + infinitivo", "la oferta + y + sustantivo"],
            difficulty_level: "advanced"
          },
          {
            id: 'es-energy-5',
            category: "Energía",
            theme: "Transición energética justa",
            french: "La transition énergétique juste inclut toutes les communautés dans le processus de transformation.",
            reference: "La transición energética justa incluye a todas las comunidades en el proceso de transformación.",
            grammar_points: ["Presente de indicativo", "incluye + a + artículo", "en + artículo"],
            difficulty_level: "advanced"
          },
          // SANTÉ PUBLIQUE
          {
            id: 'es-pubhealth-4',
            category: "Salud Pública",
            theme: "Medicina preventiva",
            french: "La médecine préventive espagnole met l'accent sur les habitudes de vie saines.",
            reference: "La medicina preventiva española pone el énfasis en los hábitos de vida saludables.",
            grammar_points: ["Presente de indicativo", "pone + artículo", "en + artículo"],
            difficulty_level: "intermediate"
          },
          {
            id: 'es-pubhealth-5',
            category: "Salud Pública",
            theme: "Sistemas sanitarios",
            french: "Les systèmes de santé espagnols font face à des défis démographiques importants.",
            reference: "Los sistemas sanitarios españoles hacen frente a desafíos demográficos importantes.",
            grammar_points: ["Presente de indicativo", "hacen frente + a + sustantivo", "adjetivos + sustantivos"],
            difficulty_level: "advanced"
          },
          // ÉDUCATION SUPÉRIEURE
          {
            id: 'es-high-edu-4',
            category: "Educación Superior",
            theme: "Internacionalización universitaria",
            french: "L'internationalisation universitaire espagnole attire des étudiants du monde entier.",
            reference: "La internacionalización universitaria española atrae estudiantes de todo el mundo.",
            grammar_points: ["Presente de indicativo", "atrae + sustantivo", "de + todo + artículo"],
            difficulty_level: "intermediate"
          },
          {
            id: 'es-high-edu-5',
            category: "Educación Superior",
            theme: "Investigación aplicada",
            french: "La recherche appliquée universitaire contribue à l'innovation et au développement économique.",
            reference: "La investigación aplicada universitaria contribuye a la innovación y al desarrollo económico.",
            grammar_points: ["Presente de indicativo", "contribuye + a + artículo", "y + a + artículo"],
            difficulty_level: "advanced"
          },
          // INNOVATION & STARTUPS
          {
            id: 'es-inno-3',
            category: "Innovación",
            theme: "Emprendimiento social",
            french: "L'entrepreneuriat social espagnol résout des problèmes sociaux par des solutions innovantes.",
            reference: "El emprendimiento social español resuelve problemas sociales mediante soluciones innovadoras.",
            grammar_points: ["Presente de indicativo", "resuelve + sustantivo", "mediante + sustantivo"],
            difficulty_level: "advanced"
          },
          {
            id: 'es-inno-4',
            category: "Innovación",
            theme: "Transferencia tecnológica",
            french: "La transfert technologique universitaire facilite la création d'entreprises innovantes.",
            reference: "La transferencia tecnológica universitaria facilita la creación de empresas innovadoras.",
            grammar_points: ["Presente de indicativo", "facilita + artículo", "de + sustantivo"],
            difficulty_level: "advanced"
          }
        ]
      };

      const formatted = Object.entries(allSentences).flatMap(([lang, sentences]) =>
        sentences.map(sentence => ({
          ...sentence,
          language: lang as 'en' | 'de' | 'es',
          used: false
        }))
      );

      setPredefinedSentences(formatted);

      // Load first sentence automatically
      const firstSentence = formatted.find(s => s.language === language);
      if (firstSentence) {
        const { id, category, theme, language: lang, used, ...sentenceData } = firstSentence;
        setCurrentSentence(sentenceData);
        setSelectedPredefinedId(id);
      }
    };

    initializePredefinedSentences();
  }, []);

  // Keyboard shortcuts for navigation

  const loadPredefinedSentence = useCallback((sentenceId: string) => {
    const selectedSentence = predefinedSentences.find(s => s.id === sentenceId);
    if (selectedSentence) {
      const { id, category, theme, language: lang, used, ...sentenceData } = selectedSentence;
      setCurrentSentence(sentenceData);
      setStudentAnswer('');
      setEvaluation(null);
      setShowHints(false);
      setShowMiniExercise(false);
      setCompletedSentence(false);
      setShowPerfectAnswer(false);
      setFeedbackLoaded(false);
      setIsLoadingFeedback(false);
      setSelectedPredefinedId(sentenceId);
      setSelectedHistoryId('');

      // Mark sentence as used
      setPredefinedSentences(prev =>
        prev.map(s =>
          s.id === sentenceId
            ? { ...s, used: true }
            : s
        )
      );

      toast({
        title: "Phrase sélectionnée",
        description: `${category} - ${theme}`,
        variant: "default"
      });
    }
  }, [predefinedSentences, toast]);

  const loadSentenceFromHistory = useCallback((historyId: string) => {
    const selectedSentence = sentenceHistory.find(s => s.id === historyId);
    if (selectedSentence) {
      const { id, createdAt, language: lang, status, ...sentenceData } = selectedSentence;
      setCurrentSentence(sentenceData);
      setStudentAnswer('');
      setEvaluation(null);
      setShowHints(false);
      setShowMiniExercise(false);
      setCompletedSentence(false);
      setShowPerfectAnswer(false);
      setFeedbackLoaded(false);
      setIsLoadingFeedback(false);
      setSelectedHistoryId(historyId);
      setSelectedPredefinedId('');

      toast({
        title: "Phrase de l'historique",
        description: "Phrase rechargée depuis l'historique",
        variant: "default"
      });
    }
  }, [sentenceHistory, toast]);

  const clearHistory = useCallback(() => {
    setSentenceHistory([]);
    setSelectedHistoryId('');
    toast({
      title: "Historique vidé",
      description: "L'historique des phrases a été supprimé",
      variant: "default"
    });
  }, [toast]);

  const resetExercise = useCallback(() => {
    setCurrentSentence(null);
    setStudentAnswer('');
    setEvaluation(null);
    setShowHints(false);
    setShowMiniExercise(false);
    setSelectedHistoryId('');
    setSelectedPredefinedId('');
    setCompletedSentence(false);
    setShowPerfectAnswer(false);
    setFeedbackLoaded(false);
    setIsLoadingFeedback(false);
    if (examMode) {
      setIsTimerRunning(false);
      setTimer(0);
    }
  }, [examMode]);

  // Navigation functions
  const goToPreviousSentence = useCallback(() => {
    if (!selectedPredefinedId || !currentSentence) return;

    const currentSentences = predefinedSentences.filter(s => s.language === language);
    const currentIndex = currentSentences.findIndex(s => s.id === selectedPredefinedId);

    if (currentIndex > 0) {
      const previousSentence = currentSentences[currentIndex - 1];
      loadPredefinedSentence(previousSentence.id);
    }
  }, [selectedPredefinedId, currentSentence, predefinedSentences, language, loadPredefinedSentence]);

  const goToNextSentence = useCallback(() => {
    if (!selectedPredefinedId || !currentSentence) return;

    const currentSentences = predefinedSentences.filter(s => s.language === language);
    const currentIndex = currentSentences.findIndex(s => s.id === selectedPredefinedId);

    if (currentIndex < currentSentences.length - 1) {
      const nextSentence = currentSentences[currentIndex + 1];
      loadPredefinedSentence(nextSentence.id);
    }
  }, [selectedPredefinedId, currentSentence, predefinedSentences, language, loadPredefinedSentence]);


  const generateNewSentence = useCallback(async () => {
    if (isGenerating) return;
    setIsGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-theme-sentence', {
        body: { language }
      });

      if (error) throw error;

      if (data) {
        setCurrentSentence(data);
        setStudentAnswer('');
        setEvaluation(null);
        setShowHints(false);
        setShowMiniExercise(false);
        setCompletedSentence(false);
        setShowPerfectAnswer(false);
        setFeedbackLoaded(false);
        setIsLoadingFeedback(false);

        // Create new history entry
        const newHistoryEntry: HistorySentence = {
          id: Date.now().toString() + Math.random().toString(36).substr(2, 9),
          createdAt: Date.now(),
          language,
          status: 'new',
          ...data
        };

        setSentenceHistory(prev => [newHistoryEntry, ...prev].slice(0, 20));
        setSelectedHistoryId(newHistoryEntry.id);
        setSelectedPredefinedId('');

        if (examMode) {
          setIsTimerRunning(true);
          setTimer(0);
        }

        toast({
          title: "Nouvelle phrase générée",
          description: `Phrase ${data.specialized ? 'spécialisée' : 'standard'} en ${language === 'de' ? 'allemand' : language === 'en' ? 'anglais' : 'espagnol'}`,
          variant: "default"
        });
      }
    } catch (error) {
      console.error('Erreur lors de la génération:', error);
      toast({
        title: "Erreur de génération",
        description: "Impossible de générer une nouvelle phrase",
        variant: "destructive"
      });
    } finally {
      setIsGenerating(false);
    }
  }, [language, examMode, toast]);

  const evaluateAnswer = useCallback(async () => {
    if (!currentSentence || !studentAnswer.trim() || isEvaluating) return;

    // Afficher immédiatement la réponse de référence
    setShowPerfectAnswer(true);
    setIsEvaluating(true);
    setFeedbackLoaded(false);
    setIsLoadingFeedback(true);

    // Arrêter le timer en mode examen
    if (examMode) {
      setIsTimerRunning(false);
    }

    try {
      const { data, error } = await supabase.functions.invoke('evaluate-theme-translation', {
        body: {
          french: currentSentence.french,
          student: studentAnswer.trim(),
          reference: currentSentence.reference,
          language: language,
          grammar_points: currentSentence.grammar_points || []
        }
      });

      if (error) {
        console.error('Erreur API:', error);
        throw error;
      }

      if (data) {
        setEvaluation(data);
        setFeedbackLoaded(true);
        setCompletedSentence(true);

        // Mettre à jour les statistiques de session
        setSessionStats(prev => {
          const newTotal = prev.totalExercises + 1;
          const newAverage = (prev.averageScore * prev.totalExercises + data.score) / newTotal;
          const newBest = Math.max(prev.bestScore, data.score);
          const newTimeSpent = prev.timeSpent + timer;

          return {
            totalExercises: newTotal,
            averageScore: newAverage,
            bestScore: newBest,
            timeSpent: newTimeSpent
          };
        });

        // Sauvegarder les résultats dans la base de données
        if (currentUser) {
          try {
            const { error: saveError } = await supabase
              .from('language_grammar_results')
              .insert({
                user_id: currentUser.id,
                language: language,
                sentence_id: (currentSentence as any).id || null,
                french_sentence: currentSentence.french,
                reference_answer: currentSentence.reference,
                student_answer: studentAnswer.trim(),
                score: data.score,
                major_errors: data.severity.major_errors,
                minor_errors: data.severity.minor_errors,
                weak_grammar_points: data.weak_grammar_points || [],
                time_spent: timer
              });

            if (saveError) {
              console.error('Error saving grammar result:', saveError);
            }
          } catch (saveErr) {
            console.error('Exception saving grammar result:', saveErr);
          }
        }


        // Mettre à jour le statut dans l'historique
        if (selectedHistoryId) {
          setSentenceHistory(prev =>
            prev.map(s =>
              s.id === selectedHistoryId
                ? { ...s, status: 'completed' as const }
                : s
            )
          );
        }

        toast({
          title: "Correction terminée",
          description: `Note: ${data.score}/10`,
          variant: data.score >= 8 ? "default" : data.score >= 6 ? "default" : "destructive"
        });
      }
    } catch (error) {
      console.error('Erreur lors de l\'évaluation:', error);
      toast({
        title: "Erreur de correction",
        description: "Le feedback personnalisé n'a pas pu être chargé, mais vous pouvez voir la réponse correcte ci-dessous.",
        variant: "default"
      });
    } finally {
      setIsEvaluating(false);
      setIsLoadingFeedback(false);
    }
  }, [currentSentence, studentAnswer, language, isEvaluating, examMode, timer, selectedHistoryId, toast]);

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      // Gestion de la correction avec Ctrl+Enter ou Cmd+Enter
      if ((event.ctrlKey || event.metaKey) && event.key === 'Enter') {
        if (studentAnswer.trim() && !isEvaluating) {
          event.preventDefault();
          evaluateAnswer();
        }
        return;
      }

      // Navigation avec les flèches (seulement si pas dans textarea)
      if (!currentSentence || event.target instanceof HTMLTextAreaElement) return;

      if (event.key === 'ArrowLeft' && !event.ctrlKey && !event.altKey) {
        event.preventDefault();
        goToPreviousSentence();
      } else if (event.key === 'ArrowRight' && !event.ctrlKey && !event.altKey) {
        event.preventDefault();
        goToNextSentence();
      }
    };

    document.addEventListener('keydown', handleKeyPress);
    return () => document.removeEventListener('keydown', handleKeyPress);
  }, [currentSentence, goToPreviousSentence, goToNextSentence, studentAnswer, isEvaluating, evaluateAnswer]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Header fixe et épuré */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Navigation des langues */}
            <div className="flex items-center gap-6">
              <h1 className="text-xl font-semibold text-gray-900">Thème Grammatical</h1>
              <ToggleGroup
                type="single"
                value={language}
                onValueChange={(value) => {
                  if (value) {
                    const newLang = value as 'en' | 'de' | 'es';
                    setLanguage(newLang);

                    // Automatically load the first sentence of the new language
                    const firstSentence = predefinedSentences.find(s => s.language === newLang);
                    if (firstSentence) {
                      loadPredefinedSentence(firstSentence.id);
                    } else {
                      resetExercise();
                    }
                  }
                }}
                className="bg-gray-100 rounded-lg p-1"
              >
                <ToggleGroupItem value="de" className="data-[state=on]:bg-white data-[state=on]:shadow-sm">
                  Allemand
                </ToggleGroupItem>
                <ToggleGroupItem value="en" className="data-[state=on]:bg-white data-[state=on]:shadow-sm">
                  Anglais
                </ToggleGroupItem>
                <ToggleGroupItem value="es" className="data-[state=on]:bg-white data-[state=on]:shadow-sm">
                  Espagnol
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            {/* Contrôles à droite */}
            <div className="flex items-center gap-3">
              {examMode && (
                <div className="flex items-center gap-2 px-3 py-1.5 bg-orange-50 text-orange-700 rounded-lg text-sm font-mono border border-orange-200">
                  <Clock className="h-4 w-4" />
                  {formatTime(timer)}
                </div>
              )}
              <Button
                variant={examMode ? "destructive" : "outline"}
                size="sm"
                onClick={() => setExamMode(!examMode)}
                className="flex items-center gap-2"
              >
                {examMode ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                {examMode ? "Arrêter" : "Mode examen"}
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Layout principal vertical */}
      <div className="max-w-5xl mx-auto p-6 space-y-6">

        {/* Section de sélection de phrase */}
        <Card className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:border-orange-200 hover:shadow-xl transition-all duration-300">
          <CardContent className="p-6">
            <div className="flex items-center gap-4">
              {/* Catalogue complet des phrases */}
              <Select value={selectedPredefinedId} onValueChange={loadPredefinedSentence}>
                <SelectTrigger className="flex-1 h-14 bg-white border-2 border-gray-100 hover:border-orange-300 hover:shadow-md transition-all duration-300 rounded-xl px-4 text-lg">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <BookMarked className="h-4 w-4 text-orange-600" />
                    </div>
                    <SelectValue placeholder="Choisir une phrase du catalogue..." />
                  </div>
                </SelectTrigger>
                <SelectContent className="max-h-[500px] min-w-[600px] bg-white border-2 border-gray-200 shadow-2xl">
                  {Object.entries(
                    predefinedSentences
                      .filter(s => s.language === language)
                      .reduce((acc, sentence) => {
                        const category = sentence.category;
                        if (!acc[category]) {
                          acc[category] = [];
                        }
                        acc[category].push(sentence);
                        return acc;
                      }, {} as Record<string, PredefinedSentence[]>)
                  ).map(([category, sentences]) => (
                    <div key={category} className="mb-2">
                      <div className={`px-4 py-3 font-semibold text-sm border-l-4 border-b ${getCategoryColor(category)} flex items-center gap-2 shadow-sm`}>
                        {getCategoryIcon(category)}
                        <span>{category}</span>
                        <Badge variant="secondary" className="ml-auto text-xs">
                          {sentences.length}
                        </Badge>
                      </div>
                      <div className="space-y-1">
                        {sentences.map((sentence) => (
                          <SelectItem
                            key={sentence.id}
                            value={sentence.id}
                            className="mx-2 px-4 py-3 cursor-pointer hover:bg-orange-50 focus:bg-orange-50 transition-colors duration-150 rounded-lg border-l-4 border-transparent hover:border-orange-300"
                          >
                            <div className="flex items-start gap-3 w-full">
                              <div className="flex-shrink-0 mt-0.5">
                                {sentence.specialized ? (
                                  <Star className="h-4 w-4 text-amber-500" />
                                ) : (
                                  <BookOpen className="h-4 w-4 text-gray-400" />
                                )}
                              </div>
                              <div className="flex-1 min-w-0">
                                <p className="text-sm font-medium text-gray-900 leading-tight">
                                  {sentence.french.length > 80
                                    ? `${sentence.french.substring(0, 80)}...`
                                    : sentence.french
                                  }
                                </p>
                              </div>
                            </div>
                          </SelectItem>
                        ))}
                      </div>
                    </div>
                  ))}
                </SelectContent>
              </Select>

              {/* Bouton historique */}
              {sentenceHistory.length > 0 && (
                <Select value={selectedHistoryId} onValueChange={loadSentenceFromHistory}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Historique" />
                  </SelectTrigger>
                  <SelectContent>
                    {sentenceHistory
                      .filter(s => s.language === language)
                      .sort((a, b) => b.createdAt - a.createdAt)
                      .slice(0, 10)
                      .map((sentence) => (
                        <SelectItem key={sentence.id} value={sentence.id}>
                          <span className="text-sm truncate">{sentence.french.substring(0, 40)}...</span>
                        </SelectItem>
                      ))}
                  </SelectContent>
                </Select>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Section principale : Phrase française en GRAND */}
        {currentSentence ? (
          <>
            <Card
              className="bg-gradient-to-br from-white via-orange-50/30 to-white rounded-2xl shadow-lg border border-orange-100 hover:shadow-xl transition-all duration-500 overflow-hidden group cursor-pointer"
              onClick={() => {
                if (!isEvaluating) {
                  if (studentAnswer.trim()) {
                    evaluateAnswer();
                  } else {
                    // Mode "voir la réponse" sans évaluation IA
                    setShowPerfectAnswer(true);
                    setCompletedSentence(true);
                    toast({
                      title: "Réponse affichée",
                      description: "La traduction correcte a été révélée.",
                      variant: "default"
                    });
                  }
                }
              }}
              title={studentAnswer.trim() ? "Cliquez pour corriger" : "Cliquez pour voir la réponse"}
            >
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-orange-600 to-orange-500"></div>
              <CardContent className="p-10">
                <div className="flex items-center justify-between mb-6">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Languages className="h-4 w-4 text-orange-600" />
                    </div>
                    <h2 className="text-sm font-bold text-orange-600 uppercase tracking-wider">
                      {showPerfectAnswer ? "Traduction correcte" : "Phrase à traduire"}
                    </h2>
                  </div>
                  <div className="flex gap-2">
                    {currentSentence.specialized && (
                      <Badge className="bg-orange-100 text-orange-700 border border-orange-200 hover:bg-orange-200 transition-colors rounded-lg px-3 py-1">Spécialisé</Badge>
                    )}
                    {currentSentence.difficulty_level && (
                      <Badge className={`${currentSentence.difficulty_level === 'advanced' ? 'bg-red-50 text-red-700 border-red-200' : 'bg-green-50 text-green-700 border-green-200'} border rounded-lg px-3 py-1`}>
                        {currentSentence.difficulty_level === 'advanced' ? 'Avancé' : 'Intermédiaire'}
                      </Badge>
                    )}
                  </div>
                </div>
                <p className="text-3xl md:text-4xl font-medium text-gray-900 leading-relaxed text-center py-8 font-serif transition-all duration-500">
                  {showPerfectAnswer ? currentSentence.reference : currentSentence.french}
                </p>
              </CardContent>
            </Card>

            {/* Navigation buttons */}
            {selectedPredefinedId && (
              <div className="flex items-center justify-between py-4 px-2">
                <div className="flex items-center gap-4">
                  <Button
                    onClick={goToPreviousSentence}
                    variant="outline"
                    size="sm"
                    disabled={!selectedPredefinedId || predefinedSentences.filter(s => s.language === language).findIndex(s => s.id === selectedPredefinedId) === 0}
                    className="flex items-center gap-2"
                  >
                    <ChevronLeft className="h-4 w-4" />
                    Précédent
                  </Button>

                  <div className="text-sm text-gray-500 flex items-center gap-2">
                    <span>Phrase {predefinedSentences.filter(s => s.language === language).findIndex(s => s.id === selectedPredefinedId) + 1}</span>
                    <span>sur</span>
                    <span>{predefinedSentences.filter(s => s.language === language).length}</span>
                  </div>

                  <Button
                    onClick={goToNextSentence}
                    variant="outline"
                    size="sm"
                    disabled={!selectedPredefinedId || predefinedSentences.filter(s => s.language === language).findIndex(s => s.id === selectedPredefinedId) === predefinedSentences.filter(s => s.language === language).length - 1}
                    className="flex items-center gap-2"
                  >
                    Suivant
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>

                <div className="text-xs text-gray-400">
                  Utilisez les flèches ← → du clavier pour naviguer
                </div>
              </div>
            )}

            {/* Section traduction */}
            <Card className="bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-6">
                  <label className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                    <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                      <Code className="h-4 w-4 text-orange-600" />
                    </div>
                    Votre traduction en {language === 'de' ? 'allemand' : language === 'en' ? 'anglais' : 'espagnol'} :
                  </label>

                  {/* Toggle écrit / oral */}
                  <div className="flex items-center gap-2 bg-gray-100 p-1 rounded-lg">
                    <Button
                      variant={inputMode === 'text' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setInputMode('text')}
                      className={`flex items-center gap-2 transition-all ${inputMode === 'text'
                        ? 'bg-white shadow-sm'
                        : 'hover:bg-gray-200'
                        }`}
                    >
                      <Keyboard className="h-4 w-4" />
                      <span className="hidden sm:inline">Écrit</span>
                    </Button>
                    <Button
                      variant={inputMode === 'voice' ? 'default' : 'ghost'}
                      size="sm"
                      onClick={() => setInputMode('voice')}
                      className={`flex items-center gap-2 transition-all ${inputMode === 'voice'
                        ? 'bg-white shadow-sm'
                        : 'hover:bg-gray-200'
                        }`}
                    >
                      <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                      <span className="hidden sm:inline">Oral</span>
                    </Button>
                  </div>
                </div>

                <div className="relative">
                  {inputMode === 'text' ? (
                    <Textarea
                      value={studentAnswer}
                      onChange={(e) => setStudentAnswer(e.target.value)}
                      placeholder={`Écrivez votre traduction en ${language === 'de' ? 'allemand' : language === 'en' ? 'anglais' : 'espagnol'}...`}
                      className="min-h-[150px] text-xl resize-none p-6 rounded-xl border-2 border-gray-100 focus:border-orange-400 focus:ring-4 focus:ring-orange-50 transition-all duration-300 bg-gray-50/50"
                      disabled={isEvaluating}
                    />
                  ) : (
                    <div className="space-y-4">
                      <VoiceRecorder
                        language={language}
                        onTranscriptionComplete={(text) => setStudentAnswer(text)}
                        disabled={isEvaluating}
                      />

                      {/* Afficher le texte transcrit - ÉDITABLE */}
                      {studentAnswer && (
                        <div className="mt-6">
                          <div className="flex items-center justify-between mb-2">
                            <label className="text-sm font-medium text-gray-700">
                              Texte transcrit :
                            </label>
                            <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                              ✏️ Éditable
                            </span>
                          </div>
                          <Textarea
                            value={studentAnswer}
                            onChange={(e) => setStudentAnswer(e.target.value)}
                            placeholder="Le texte transcrit apparaîtra ici et sera modifiable..."
                            className="min-h-[80px] text-base resize-none p-3 rounded-xl border-2 border-gray-200 focus:border-orange-400 focus:ring-4 focus:ring-orange-50 transition-all duration-300 bg-white"
                            disabled={isEvaluating}
                          />
                          <p className="text-xs text-gray-500 mt-2 flex items-center gap-1">
                            <span>💡</span>
                            <span>Vous pouvez modifier le texte avant de corriger</span>
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Bouton corriger - STYLE DESIGN SYSTEM */}
                <Button
                  onClick={evaluateAnswer}
                  disabled={!studentAnswer.trim() || isEvaluating}
                  className="w-full mt-8 h-16 text-xl font-bold text-white rounded-xl bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 shadow-lg hover:shadow-2xl hover:scale-[1.02] transition-all duration-300"
                  style={{ boxShadow: "0 8px 25px rgba(249, 115, 22, 0.25)" }}
                >
                  {isEvaluating ? (
                    <>
                      <Loader2 className="mr-3 h-6 w-6 animate-spin" />
                      Correction en cours...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="mr-3 h-6 w-6" />
                      Corriger ma traduction
                    </>
                  )}
                </Button>
              </CardContent>
            </Card>
          </>
        ) : (
          <Card className="border-2 border-dashed border-gray-300 bg-gray-50">
            <CardContent className="p-12">
              <div className="flex flex-col items-center justify-center text-gray-400">
                <Languages className="h-20 w-20 mb-4" />
                <p className="text-xl font-medium mb-2">Aucune phrase sélectionnée</p>
                <p className="text-gray-500">Cliquez sur "Nouvelle phrase" ou choisissez dans le catalogue ci-dessus</p>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Section correction - Affichage immédiat de la réponse */}
        {showPerfectAnswer && currentSentence && (
          <Card className="border border-gray-200 bg-white shadow-sm mt-8 overflow-hidden rounded-xl">
            <CardHeader className="bg-white border-b border-gray-100 pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl flex items-center gap-2 text-gray-900 font-semibold">
                  <BookOpen className="h-5 w-5 text-gray-500" />
                  Correction et Analyse
                </CardTitle>
                <div className="flex items-center gap-2">
                  <span className="text-xs font-medium text-gray-500 bg-gray-100 px-2 py-1 rounded-full uppercase tracking-wider">
                    Référence
                  </span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="p-0">
              <div className="grid md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                {/* Colonne Gauche : La Phrase Correcte */}
                <div className="p-6 md:p-8 bg-gray-50/50">
                  <h3 className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wide">Traduction Correcte</h3>
                  <div className="relative">
                    <div className="absolute -left-4 top-0 bottom-0 w-1 bg-gradient-to-b from-orange-400 to-orange-500 rounded-full"></div>
                    <p className="text-2xl text-gray-900 font-medium leading-relaxed font-serif pl-2">
                      {currentSentence.reference}
                    </p>
                  </div>

                  {currentSentence.glossary && Object.keys(currentSentence.glossary).length > 0 && (
                    <div className="mt-8 pt-6 border-t border-gray-200">
                      <h4 className="flex items-center gap-2 text-sm font-semibold text-gray-900 mb-3">
                        <BookMarked className="h-4 w-4 text-orange-500" />
                        Vocabulaire clé
                      </h4>
                      <div className="grid gap-2">
                        {Object.entries(currentSentence.glossary).map(([fr, de], index) => (
                          <div key={index} className="flex items-center justify-between text-sm group hover:bg-white p-2 rounded-lg transition-colors">
                            <span className="text-gray-600">{fr}</span>
                            <span className="w-px h-3 bg-gray-300 mx-2"></span>
                            <span className="font-medium text-gray-900">{de}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>

                {/* Colonne Droite : Points techniques */}
                <div className="p-6 md:p-8 bg-white">
                  {currentSentence.grammar_points && currentSentence.grammar_points.length > 0 && (
                    <div className="mb-8">
                      <h3 className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wide flex items-center gap-2">
                        <Target className="h-4 w-4" />
                        Points de grammaire
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {currentSentence.grammar_points.map((point, index) => (
                          <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gray-100 text-gray-700 border border-gray-200">
                            {point}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {currentSentence.notes && currentSentence.notes.length > 0 && (
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wide flex items-center gap-2">
                        <AlertCircle className="h-4 w-4" />
                        Points de vigilance
                      </h3>
                      <ul className="space-y-3">
                        {currentSentence.notes.map((note, index) => (
                          <li key={index} className="flex items-start gap-3 text-sm text-gray-700 bg-orange-50/50 p-3 rounded-lg border border-orange-100/50">
                            <span className="mt-0.5 w-1.5 h-1.5 rounded-full bg-orange-500 flex-shrink-0"></span>
                            <span className="leading-relaxed">{note}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>

              {/* Loader feedback élégant */}
              {isLoadingFeedback && (
                <div className="p-4 border-t border-gray-100 bg-gray-50 flex items-center justify-center gap-3">
                  <div className="relative">
                    <div className="h-3 w-3 rounded-full bg-orange-500 animate-ping absolute"></div>
                    <div className="h-3 w-3 rounded-full bg-orange-500 relative"></div>
                  </div>
                  <span className="text-sm font-medium text-gray-600 animate-pulse">
                    L'IA analyse votre réponse en détail...
                  </span>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Section correction OpenAI - Affichage après chargement */}
        {evaluation && feedbackLoaded && (
          <div className="mt-8 space-y-6 animate-in slide-in-from-bottom-4 duration-700">
            {/* Résumé du score */}
            <Card className="border border-gray-200 shadow-sm bg-white overflow-hidden rounded-xl">
              <div className="flex flex-col md:flex-row">
                {/* Score Panel */}
                <div className={`p-8 flex flex-col items-center justify-center min-w-[200px] border-b md:border-b-0 md:border-r border-gray-100 ${evaluation.score >= 8 ? 'bg-green-50/50' : evaluation.score >= 5 ? 'bg-orange-50/50' : 'bg-red-50/50'
                  }`}>
                  <div className="relative mb-2">
                    <svg className="w-24 h-24 transform -rotate-90">
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        className={`${evaluation.score >= 8 ? 'text-green-200' : evaluation.score >= 5 ? 'text-orange-200' : 'text-red-200'
                          }`}
                      />
                      <circle
                        cx="48"
                        cy="48"
                        r="40"
                        stroke="currentColor"
                        strokeWidth="8"
                        fill="transparent"
                        strokeDasharray={251.2}
                        strokeDashoffset={251.2 - (251.2 * evaluation.score) / 10}
                        className={`${evaluation.score >= 8 ? 'text-green-500' : evaluation.score >= 5 ? 'text-orange-500' : 'text-red-500'
                          } transition-all duration-1000 ease-out`}
                      />
                    </svg>
                    <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
                      <span className={`text-3xl font-bold ${evaluation.score >= 8 ? 'text-green-700' : evaluation.score >= 5 ? 'text-orange-700' : 'text-red-700'
                        }`}>
                        {evaluation.score}
                      </span>
                      <span className="text-xs font-medium text-gray-400">/ 10</span>
                    </div>
                  </div>
                  <div className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wide ${evaluation.score >= 8
                    ? 'bg-green-100 text-green-700'
                    : evaluation.score >= 5
                      ? 'bg-orange-100 text-orange-700'
                      : 'bg-red-100 text-red-700'
                    }`}>
                    {evaluation.score >= 9 ? 'Excellent' : evaluation.score >= 7 ? 'Très bien' : evaluation.score >= 5 ? 'Correct' : 'À travailler'}
                  </div>
                </div>

                {/* Feedback Content */}
                <div className="flex-1 p-8">
                  <div className="grid md:grid-cols-2 gap-8">
                    {/* Correction */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wide flex items-center gap-2">
                        <PenTool className="h-4 w-4" />
                        Votre correction
                      </h3>
                      <div className="bg-gray-50 rounded-lg p-4 border border-gray-100 text-gray-800 italic leading-relaxed">
                        "{evaluation.corrected}"
                      </div>
                    </div>

                    {/* Analyse */}
                    <div>
                      <h3 className="text-sm font-medium text-gray-500 mb-3 uppercase tracking-wide flex items-center gap-2">
                        <Star className="h-4 w-4" />
                        Analyse rapide
                      </h3>
                      <div className="space-y-3">
                        {evaluation.severity.major_errors.length === 0 && evaluation.severity.minor_errors.length === 0 ? (
                          <div className="flex items-start gap-3 text-green-700 bg-green-50 p-3 rounded-lg text-sm">
                            <CheckCircle className="h-5 w-5 flex-shrink-0" />
                            <p>Aucune erreur détectée. Bravo pour cette performance !</p>
                          </div>
                        ) : (
                          <>
                            {evaluation.severity.major_errors.length > 0 && (
                              <div className="flex items-center gap-2 text-red-600 bg-red-50 px-3 py-2 rounded-lg text-sm font-medium">
                                <AlertCircle className="h-4 w-4" />
                                {evaluation.severity.major_errors.length} erreur(s) majeure(s)
                              </div>
                            )}
                            {evaluation.severity.minor_errors.length > 0 && (
                              <div className="flex items-center gap-2 text-orange-600 bg-orange-50 px-3 py-2 rounded-lg text-sm font-medium">
                                <AlertCircle className="h-4 w-4" />
                                {evaluation.severity.minor_errors.length} erreur(s) mineure(s)
                              </div>
                            )}
                          </>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Detailed Errors */}
                  {(evaluation.severity.major_errors.length > 0 || evaluation.severity.minor_errors.length > 0) && (
                    <div className="mt-8 pt-6 border-t border-gray-100">
                      <h3 className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wide">Détail des erreurs</h3>
                      <div className="space-y-4">
                        {[
                          ...evaluation.severity.major_errors.map(e => typeof e === 'string' ? { error: e, type: 'major' } : { ...e, type: 'major' }),
                          ...evaluation.severity.minor_errors.map(e => typeof e === 'string' ? { error: e, type: 'minor' } : { ...e, type: 'minor' })
                        ].map((error: any, index) => (
                          <div key={index} className="flex gap-4 group">
                            <div className={`mt-1 h-2 w-2 rounded-full flex-shrink-0 ${error.type === 'major' ? 'bg-red-500' : 'bg-orange-400'}`}></div>
                            <div className="flex-1">
                              {typeof error === 'string' ? (
                                <p className="text-gray-800 text-sm">{error}</p>
                              ) : (
                                <div className="text-sm space-y-1.5">
                                  <div className="flex items-baseline justify-between">
                                    <p className="font-medium text-gray-900 border-b border-red-200 inline-block pb-0.5 decoration-red-400 decoration-wavy">
                                      {error.error}
                                    </p>
                                    {error.rule && (
                                      <span className="text-xs text-gray-400 font-mono bg-gray-50 px-2 py-0.5 rounded border border-gray-100">{error.rule}</span>
                                    )}
                                  </div>
                                  <p className="text-gray-600">
                                    <span className="text-gray-400 mr-2">Why?</span>
                                    {error.explanation}
                                  </p>
                                  <p className="text-green-700 font-medium bg-green-50 inline-block px-2 py-1 rounded text-xs mt-1">
                                    Correct: {error.correction}
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Conseils & Next Steps Footer */}
              {(evaluation.tips?.length > 0 || evaluation.grammar_rules?.length > 0) && (
                <div className="bg-gray-50 p-6 border-t border-gray-100 flex flex-col md:flex-row gap-8">
                  {evaluation.grammar_rules?.length > 0 && (
                    <div className="flex-1">
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Règles à retenir</h4>
                      <ul className="space-y-2">
                        {evaluation.grammar_rules.map((rule, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-blue-400 mt-1.5 flex-shrink-0"></div>
                            {rule}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {evaluation.tips?.length > 0 && (
                    <div className="flex-1">
                      <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Conseil du coach</h4>
                      <ul className="space-y-2">
                        {evaluation.tips.map((tip, idx) => (
                          <li key={idx} className="text-sm text-gray-600 flex items-start gap-2">
                            <div className="h-1.5 w-1.5 rounded-full bg-purple-400 mt-1.5 flex-shrink-0"></div>
                            {tip}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </Card>
          </div>
        )}
      </div>
    </div>
  );
};

export default ThemeGrammaticalGenerator;
