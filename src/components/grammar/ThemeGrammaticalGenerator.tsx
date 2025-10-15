import React, { useState, useCallback, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, Languages, Target, RefreshCw, Eye, EyeOff, Plus, CheckCircle, BookOpen, Save, Play, Pause, Clock, Trophy, Trash2, History } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';

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

  const { currentUser } = useAuth();
  const { toast } = useToast();

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const getScoreColor = (score: number) => {
    if (score >= 8) return 'text-blue-700';
    if (score >= 6) return 'text-blue-600';
    return 'text-blue-500';
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
          // MEDIO AMBIENTE
          {
            id: 'es-env-1',
            category: "Medio Ambiente",
            theme: "Energías renovables",
            french: "L'Espagne investit massivement dans les énergies renouvelables.",
            reference: "España invierte masivamente en energías renovables.",
            grammar_points: ["Presente de indicativo", "Preposiciones", "Adverbios"],
            difficulty_level: "intermediate"
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
    };

    initializePredefinedSentences();
  }, []);

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
                    setLanguage(value as 'en' | 'de' | 'es');
                    resetExercise();
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
                <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg text-sm font-mono border border-blue-200">
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

      {/* Statistiques de session - toujours visibles */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-5xl mx-auto px-6 py-3">
          <div className="grid grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-900">{sessionStats.totalExercises}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Exercices</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-900">{sessionStats.averageScore.toFixed(1)}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Moyenne</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-900">{sessionStats.bestScore}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Meilleur</div>
            </div>
            <div className="text-center">
              <div className="text-lg font-semibold text-gray-900">{formatTime(sessionStats.timeSpent)}</div>
              <div className="text-xs text-gray-500 uppercase tracking-wide">Temps total</div>
            </div>
          </div>
        </div>
      </div>

      {/* Layout principal vertical */}
      <div className="max-w-5xl mx-auto p-6 space-y-6">
        
        {/* Section de sélection de phrase */}
        <Card className="border-2 border-blue-200 bg-white">
          <CardContent className="p-4">
            <div className="flex items-center gap-3">
              {/* Bouton génération aléatoire */}
              <Button
                onClick={generateNewSentence}
                disabled={isGenerating}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Générer
                  </>
                ) : (
                  <>
                    <Plus className="mr-2 h-4 w-4" />
                    Nouvelle phrase
                  </>
                )}
              </Button>

              {/* Catalogue complet des phrases */}
                <Select value={selectedPredefinedId} onValueChange={loadPredefinedSentence}>
                <SelectTrigger className="flex-1">
                  <SelectValue placeholder="Ou choisir une phrase du catalogue..." />
                  </SelectTrigger>
                  <SelectContent className="max-h-80">
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
                      <div key={category}>
                        <div className="px-2 py-1 text-xs font-medium text-gray-500 bg-gray-50 border-b">
                          {category}
                        </div>
                        {sentences.map((sentence) => (
                          <SelectItem key={sentence.id} value={sentence.id}>
                          <div className="flex items-center gap-2">
                            <span className="text-sm truncate">{sentence.french.substring(0, 60)}...</span>
                            </div>
                          </SelectItem>
                        ))}
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

              {/* Bouton reset */}
              <Button
                variant="outline"
                size="icon"
                onClick={resetExercise}
                title="Recommencer"
              >
                <RefreshCw className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Section principale : Phrase française en GRAND */}
              {currentSentence ? (
                <>
            <Card className="border-2 border-blue-300 bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-8">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-sm font-semibold text-blue-700 uppercase tracking-wide">Phrase à traduire</h2>
                  <div className="flex gap-2">
                    {currentSentence.specialized && (
                      <Badge className="bg-blue-100 text-blue-700 border border-blue-300">Spécialisé</Badge>
                    )}
                    {currentSentence.difficulty_level && (
                      <Badge className="bg-blue-200 text-blue-800 border border-blue-400">
                        {currentSentence.difficulty_level === 'advanced' ? 'Avancé' : 'Intermédiaire'}
                      </Badge>
                    )}
                  </div>
                </div>
                <p className="text-3xl font-medium text-gray-900 leading-relaxed text-center py-6">
                  {currentSentence.french}
                </p>
              </CardContent>
            </Card>

            {/* Section traduction */}
            <Card className="border-2 border-blue-200 bg-white">
              <CardContent className="p-6">
                <label className="text-lg font-semibold text-gray-900 mb-4 block">
                  Votre traduction en {language === 'de' ? 'allemand' : language === 'en' ? 'anglais' : 'espagnol'} :
                </label>
                <Textarea
                  value={studentAnswer}
                  onChange={(e) => setStudentAnswer(e.target.value)}
                  placeholder={`Écrivez votre traduction en ${language === 'de' ? 'allemand' : language === 'en' ? 'anglais' : 'espagnol'}...`}
                  className="min-h-[150px] text-xl resize-none"
                  disabled={isEvaluating}
                />
                
                {/* Bouton corriger - GRAND */}
                <Button
                  onClick={evaluateAnswer}
                  disabled={!studentAnswer.trim() || isEvaluating}
                  className="w-full mt-4 h-14 text-lg bg-blue-600 hover:bg-blue-700 text-white"
                  size="lg"
                >
                  {isEvaluating ? (
                    <>
                      <Loader2 className="mr-2 h-6 w-6 animate-spin" />
                      Correction en cours...
                    </>
                  ) : (
                    <>
                      <CheckCircle className="mr-2 h-6 w-6" />
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
          <Card className="border-2 border-blue-200 bg-white">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 border-b">
              <CardTitle className="text-2xl flex items-center gap-2 text-blue-800">
                <CheckCircle className="h-6 w-6" />
                Réponse correcte
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              {/* Réponse de référence - AFFICHAGE IMMÉDIAT */}
              <div className="p-6 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg border-2 border-blue-300">
                <h3 className="font-bold text-blue-900 mb-3 text-lg flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Traduction correcte
                </h3>
                <p className="text-2xl text-blue-900 font-medium leading-relaxed">
                  {currentSentence.reference}
                </p>
              </div>

              {/* Points de grammaire - AFFICHAGE IMMÉDIAT */}
              {currentSentence.grammar_points && currentSentence.grammar_points.length > 0 && (
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-3 text-lg">Points de grammaire travaillés</h3>
                  <ul className="space-y-2">
                    {currentSentence.grammar_points.map((point, index) => (
                      <li key={index} className="flex items-start gap-2 text-blue-800">
                        <span className="w-2 h-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></span>
                        <span className="font-medium">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Notes et règles - AFFICHAGE IMMÉDIAT */}
              {currentSentence.notes && currentSentence.notes.length > 0 && (
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-3 text-lg">Règles et erreurs fréquentes</h3>
                  <ul className="space-y-3">
                    {currentSentence.notes.map((note, index) => (
                      <li key={index} className="flex items-start gap-2 text-blue-800">
                        <span className="text-blue-600 font-bold flex-shrink-0">→</span>
                        <span>{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Glossaire si disponible */}
              {currentSentence.glossary && Object.keys(currentSentence.glossary).length > 0 && (
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <h3 className="font-semibold text-blue-900 mb-3 text-lg">Vocabulaire clé</h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                    {Object.entries(currentSentence.glossary).map(([fr, de], index) => (
                      <div key={index} className="text-sm text-blue-800">
                        <span className="font-medium">{fr}</span> = <span className="italic">{de}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Loader pour le feedback personnalisé */}
              {isLoadingFeedback && (
                <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                  <div className="flex items-center gap-3">
                    <Loader2 className="h-5 w-5 animate-spin text-blue-600" />
                    <span className="text-blue-700">Analyse détaillée en cours avec l'IA...</span>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        )}

        {/* Section correction OpenAI - Affichage après chargement */}
        {evaluation && feedbackLoaded && (
          <Card className="border-2 border-blue-200 bg-white">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 border-b">
              <CardTitle className="text-2xl flex items-center gap-2 text-blue-800">
                <Trophy className="h-6 w-6" />
                Feedback Personnalisé IA
              </CardTitle>
            </CardHeader>
            <CardContent className="p-6 space-y-4">
              {/* Score */}
              <div className="p-4 rounded-lg border-2 bg-blue-50 border-blue-200">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-900">Note</span>
                  <Trophy className="h-5 w-5 text-blue-600" />
                </div>
                <div className="text-3xl font-bold text-blue-700">
                  {evaluation.score}/10
                </div>
              </div>

                  {/* Réponse corrigée */}
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                      <CheckCircle className="h-4 w-4" />
                      Traduction correcte
                    </h3>
                    <p className="text-blue-800">{evaluation.corrected}</p>
                                      </div>

                  {/* Réponse de référence */}
                  <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                    <h3 className="font-semibold text-blue-900 mb-2 flex items-center gap-2">
                      <BookOpen className="h-4 w-4" />
                      Réponse de référence
                    </h3>
                    <p className="text-blue-800">{evaluation.reference}</p>
                  </div>

                  {/* Erreurs majeures */}
                  {evaluation.severity.major_errors.length > 0 && (
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h3 className="font-semibold text-blue-900 mb-3">Erreurs majeures</h3>
                      <div className="space-y-2">
                        {evaluation.severity.major_errors.map((error, index) => (
                          <div key={index} className="text-sm text-blue-800">
                            {typeof error === 'string' ? (
                              <p>• {error}</p>
                            ) : (
                              <div className="space-y-1">
                                <p className="font-medium">• {error.error}</p>
                                <p className="ml-4 text-blue-700">→ {error.explanation}</p>
                                <p className="ml-4 text-blue-900">Correction : {error.correction}</p>
                                <p className="ml-4 italic text-blue-600">Règle : {error.rule}</p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Erreurs mineures */}
                  {evaluation.severity.minor_errors.length > 0 && (
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h3 className="font-semibold text-blue-900 mb-3">Erreurs mineures</h3>
                      <div className="space-y-2">
                        {evaluation.severity.minor_errors.map((error, index) => (
                          <div key={index} className="text-sm text-blue-800">
                            {typeof error === 'string' ? (
                              <p>• {error}</p>
                            ) : (
                              <div className="space-y-1">
                                <p className="font-medium">• {error.error}</p>
                                <p className="ml-4 text-blue-700">→ {error.explanation}</p>
                                <p className="ml-4 text-blue-900">Correction : {error.correction}</p>
                              </div>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Variations acceptées */}
                  {evaluation.severity.accepted_variations?.length > 0 && (
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h3 className="font-semibold text-blue-900 mb-2">Variations acceptées</h3>
                      <ul className="space-y-1 text-sm text-blue-800">
                        {evaluation.severity.accepted_variations.map((variation, index) => (
                          <li key={index}>• {variation}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Règles de grammaire */}
                  {evaluation.grammar_rules?.length > 0 && (
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h3 className="font-semibold text-blue-900 mb-2">Règles à retenir</h3>
                      <ul className="space-y-1 text-sm text-blue-800">
                        {evaluation.grammar_rules.map((rule, index) => (
                          <li key={index}>• {rule}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Conseils */}
                  {evaluation.tips?.length > 0 && (
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h3 className="font-semibold text-blue-900 mb-2">Conseils</h3>
                      <ul className="space-y-1 text-sm text-blue-800">
                        {evaluation.tips.map((tip, index) => (
                          <li key={index}>• {tip}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Phrases similaires */}
                  {evaluation.similar_sentences?.length > 0 && (
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h3 className="font-semibold text-blue-900 mb-2">Phrases similaires à pratiquer</h3>
                      <ul className="space-y-1 text-sm text-blue-800">
                        {evaluation.similar_sentences.map((sentence, index) => (
                          <li key={index}>• {sentence}</li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Règle pour flashcard */}
                  {evaluation.flashcard_rule && (
                    <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                      <h3 className="font-semibold text-blue-900 mb-2">Flashcard recommandée</h3>
                      <p className="text-sm text-blue-800">{evaluation.flashcard_rule}</p>
                    </div>
                  )}

            </CardContent>
          </Card>
        )}
                        </div>
    </div>
  );
};

export default ThemeGrammaticalGenerator;
