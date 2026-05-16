import React, { useState, useCallback, useEffect, useMemo } from 'react';
import { Link } from 'react-router-dom';
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
  lesson_slug?: string;
  lesson_title?: string;
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

type ScoreErrorType = 'false_meaning' | 'major_conjugation' | 'grammar' | 'minor';

interface ScoreBreakdownEntry {
  type: ScoreErrorType;
  label: string;
  penalty: number;
  span: string;
  explanation: string;
  correction: string;
  rule: string;
}

interface CoverageSegment {
  segment: string;
  status: 'present' | 'altered' | 'missing';
}

interface ThemeEvaluation {
  score: number;
  breakdown?: ScoreBreakdownEntry[];
  coverage?: CoverageSegment[];
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

// === Helpers de notation / surlignage ===

const ERROR_STYLES: Record<ScoreErrorType, { bg: string; text: string; border: string; ring: string; label: string }> = {
  false_meaning:     { bg: 'bg-[rgba(193,68,58,0.18)]', text: 'text-carnet-red',    border: 'border-[rgba(193,68,58,0.55)]', ring: 'decoration-[#C1443A]', label: 'Faux sens' },
  major_conjugation: { bg: 'bg-[rgba(217,119,6,0.18)]', text: 'text-[#9A4D00]',     border: 'border-[rgba(217,119,6,0.55)]', ring: 'decoration-[#D97706]', label: 'Conjugaison' },
  grammar:           { bg: 'bg-[rgba(202,138,4,0.18)]', text: 'text-[#7C5A0A]',     border: 'border-[rgba(202,138,4,0.50)]', ring: 'decoration-[#CA8A04]', label: 'Grammaire' },
  minor:             { bg: 'bg-[rgba(120,113,108,0.18)]', text: 'text-carnet-ink-soft', border: 'border-[rgba(120,113,108,0.45)]', ring: 'decoration-[#78716C]', label: 'Petite erreur' },
};

const formatPenalty = (n: number): string => {
  const abs = Math.abs(n);
  const formatted = Number.isInteger(abs) ? `${abs}` : `${abs.toString().replace('.', ',')}`;
  return `−${formatted}`;
};

// Découpe la réponse de l'élève en segments avec surlignage par span
type Segment = { text: string; entry?: ScoreBreakdownEntry & { index: number } };

function buildHighlightedSegments(answer: string, breakdown: ScoreBreakdownEntry[]): Segment[] {
  if (!answer || !breakdown || breakdown.length === 0) {
    return [{ text: answer }];
  }
  // Trouver toutes les positions de match (premier match insensible à la casse, pas de chevauchement)
  type Match = { start: number; end: number; entry: ScoreBreakdownEntry & { index: number } };
  const matches: Match[] = [];
  const lower = answer.toLowerCase();
  const claimedRanges: { start: number; end: number }[] = [];

  breakdown.forEach((entry, idx) => {
    const span = (entry.span || '').trim();
    if (!span) return;
    const needle = span.toLowerCase();
    let from = 0;
    while (from <= lower.length - needle.length) {
      const found = lower.indexOf(needle, from);
      if (found === -1) break;
      const end = found + needle.length;
      // Évite un chevauchement avec un span déjà attribué
      const overlap = claimedRanges.some(r => !(end <= r.start || found >= r.end));
      if (!overlap) {
        matches.push({ start: found, end, entry: { ...entry, index: idx } });
        claimedRanges.push({ start: found, end });
        break;
      }
      from = found + 1;
    }
  });

  matches.sort((a, b) => a.start - b.start);
  const segments: Segment[] = [];
  let cursor = 0;
  for (const m of matches) {
    if (m.start > cursor) segments.push({ text: answer.slice(cursor, m.start) });
    segments.push({ text: answer.slice(m.start, m.end), entry: m.entry });
    cursor = m.end;
  }
  if (cursor < answer.length) segments.push({ text: answer.slice(cursor) });
  return segments;
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
  const [selectedGrammarTopic, setSelectedGrammarTopic] = useState<string | null>(null);

  // Phrases visibles dans la navigation (filtrées par langue et, en anglais, par rubrique grammaticale active)
  const visibleSentences = useMemo(() => {
    const langFiltered = predefinedSentences.filter(s => s.language === language);
    if (language === 'en' && selectedGrammarTopic) {
      return langFiltered.filter(s => s.lesson_slug === selectedGrammarTopic);
    }
    return langFiltered;
  }, [predefinedSentences, language, selectedGrammarTopic]);

  // Liste des rubriques grammaticales (anglais uniquement) : un slug par leçon, avec son titre et son décompte
  const grammarTopics = useMemo(() => {
    const map = new Map<string, { slug: string; title: string; count: number }>();
    for (const s of predefinedSentences) {
      if (s.language !== 'en' || !s.lesson_slug) continue;
      const existing = map.get(s.lesson_slug);
      if (existing) {
        existing.count += 1;
      } else {
        map.set(s.lesson_slug, {
          slug: s.lesson_slug,
          title: s.lesson_title || s.lesson_slug,
          count: 1,
        });
      }
    }
    return Array.from(map.values());
  }, [predefinedSentences]);

  // Nouvelles fonctionnalités
  const [examMode, setExamMode] = useState(false);
  const [timer, setTimer] = useState(0);
  const [isTimerRunning, setIsTimerRunning] = useState(false);

  // Mode examen : configuration multi-questions avec compte à rebours par question
  type ExamPhase = 'idle' | 'setup' | 'active' | 'summary';
  type ExamDifficulty = 'all' | 'intermediate' | 'advanced' | 'specialized';
  const QUESTION_DURATION = 60; // secondes par question
  const [examPhase, setExamPhase] = useState<ExamPhase>('idle');
  const [examConfig, setExamConfig] = useState<{ questionCount: number; difficulty: ExamDifficulty }>({
    questionCount: 10,
    difficulty: 'all',
  });
  const [examQueue, setExamQueue] = useState<PredefinedSentence[]>([]);
  const [examIndex, setExamIndex] = useState(0);
  const [examQuestionTimer, setExamQuestionTimer] = useState(QUESTION_DURATION);
  const [examResults, setExamResults] = useState<Array<{
    sentenceId: string;
    french: string;
    userAnswer: string;
    score: number;
    timedOut: boolean;
  }>>([]);
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

  // === Mode examen : helpers ===
  const openExamSetup = () => {
    setExamPhase('setup');
  };

  const exitExam = () => {
    setExamPhase('idle');
    setExamMode(false);
    setExamQueue([]);
    setExamIndex(0);
    setExamResults([]);
    setExamQuestionTimer(QUESTION_DURATION);
  };

  const startExam = () => {
    const filtered = predefinedSentences.filter(s => s.language === language);
    let candidates = filtered;
    if (examConfig.difficulty === 'intermediate') {
      candidates = filtered.filter(s => s.difficulty_level === 'intermediate');
    } else if (examConfig.difficulty === 'advanced') {
      candidates = filtered.filter(s => s.difficulty_level === 'advanced');
    } else if (examConfig.difficulty === 'specialized') {
      candidates = filtered.filter(s => s.specialized);
    }

    if (candidates.length === 0) {
      toast({
        title: "Aucune phrase disponible",
        description: "Aucune phrase ne correspond à ces critères pour cette langue.",
        variant: "destructive",
      });
      return;
    }

    const shuffled = [...candidates].sort(() => Math.random() - 0.5);
    const queue = shuffled.slice(0, Math.min(examConfig.questionCount, shuffled.length));

    setExamQueue(queue);
    setExamIndex(0);
    setExamResults([]);
    setExamQuestionTimer(QUESTION_DURATION);
    setExamPhase('active');
    setExamMode(true);
    loadPredefinedSentence(queue[0].id);
  };

  const advanceExam = (score: number, timedOut: boolean) => {
    if (currentSentence) {
      setExamResults(r => [...r, {
        sentenceId: selectedPredefinedId,
        french: currentSentence.french,
        userAnswer: studentAnswer,
        score,
        timedOut,
      }]);
    }
    const nextIdx = examIndex + 1;
    if (nextIdx >= examQueue.length) {
      setExamPhase('summary');
      return;
    }
    setExamIndex(nextIdx);
    setExamQuestionTimer(QUESTION_DURATION);
    loadPredefinedSentence(examQueue[nextIdx].id);
  };

  const getScoreColor = (score: number) => {
    if (score >= 8) return 'text-carnet-red';
    if (score >= 6) return 'text-carnet-red';
    return 'text-pr-gray-mid';
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
      'Géopolitique': 'bg-carnet-red-pale text-carnet-red border-carnet-red-soft',
      'Commerce international': 'bg-pr-gray-bg text-pr-gray-dark border-pr-gray-light',
      'Union européenne': 'bg-carnet-red-pale/60 text-carnet-red border-carnet-red-pale',
      'Ressources stratégiques': 'bg-carnet-red-pale text-carnet-red border-carnet-red-soft',
      'Continent africain': 'bg-carnet-red-pale text-carnet-red border-carnet-red-soft',
      'Amérique latine': 'bg-pr-gray-bg text-pr-gray-dark border-pr-gray-light',
      'Asie': 'bg-pr-gray-bg text-pr-gray-dark border-pr-gray-light',
      'Relations internationales': 'bg-carnet-red-pale/60 text-carnet-red border-carnet-red-pale'
    };
    return colorMap[category] || 'bg-pr-gray-bg text-pr-gray-dark border-pr-gray-light';
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

  // === Mode examen : compte à rebours par question ===
  // Tick toutes les secondes pendant la phase active, sauf si évaluation en cours/terminée
  useEffect(() => {
    if (examPhase !== 'active') return;
    if (examQuestionTimer <= 0) return;
    if (isEvaluating || feedbackLoaded) return;
    const id = setTimeout(() => {
      setExamQuestionTimer(t => Math.max(0, t - 1));
    }, 1000);
    return () => clearTimeout(id);
  }, [examPhase, examQuestionTimer, isEvaluating, feedbackLoaded]);

  // Quand le timer atteint 0 : auto-évaluation ou skip si vide
  useEffect(() => {
    if (examPhase !== 'active') return;
    if (examQuestionTimer > 0) return;
    if (isEvaluating || feedbackLoaded) return;
    if (studentAnswer.trim()) {
      evaluateAnswer();
    } else {
      // Pas de réponse : on enregistre 0 et on avance après 1.5s
      const id = setTimeout(() => advanceExam(0, true), 1500);
      return () => clearTimeout(id);
    }
  }, [examPhase, examQuestionTimer, studentAnswer, isEvaluating, feedbackLoaded]);

  // Quand l'évaluation arrive en mode examen : avance après 3s
  useEffect(() => {
    if (examPhase !== 'active') return;
    if (!feedbackLoaded || !evaluation) return;
    const id = setTimeout(() => {
      advanceExam(evaluation.score ?? 0, examQuestionTimer === 0);
    }, 3000);
    return () => clearTimeout(id);
  }, [examPhase, feedbackLoaded, evaluation, examQuestionTimer]);

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
          },
          // POINTS DE GRAMMAIRE CIBLÉS — PIÈGES CONCOURS
          {
            id: 'en-gram-tenses-1',
            category: "Temps verbaux",
            theme: "Present perfect vs présent",
            french: "Depuis l'invasion de l'Ukraine en 2022, l'Union européenne a sanctionné la Russie à quinze reprises et continue d'élargir la liste des entités visées.",
            reference: "Since the invasion of Ukraine in 2022, the European Union has sanctioned Russia fifteen times and continues to expand the list of targeted entities.",
            grammar_points: ["Present perfect (since + date)", "Present simple (généralité)", "Piège 'depuis' / 'since'"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "temps-verbaux",
            lesson_title: "Temps Verbaux"
          },
          {
            id: 'en-gram-cond-1',
            category: "Conditionnels",
            theme: "Troisième conditionnel",
            french: "Si la Fed avait baissé ses taux plus tôt, l'économie américaine n'aurait pas connu un tel ralentissement de l'investissement productif.",
            reference: "If the Fed had cut its rates earlier, the American economy would not have experienced such a slowdown in productive investment.",
            grammar_points: ["Third conditional", "If + past perfect", "Would have + past participle"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "conditionnels",
            lesson_title: "Conditionnels"
          },
          {
            id: 'en-gram-passive-1',
            category: "Voix passive",
            theme: "Passif prétérit",
            french: "Le projet de loi sur l'intelligence artificielle a été voté par le Parlement européen après dix-huit mois de négociations entre les États membres.",
            reference: "The artificial intelligence bill was passed by the European Parliament after eighteen months of negotiations between the member states.",
            grammar_points: ["Passive voice (preterite)", "Agent introduit par 'by'", "Choix lexical 'pass' vs 'vote on'"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "voix-passives",
            lesson_title: "Voix Passives"
          },
          {
            id: 'en-gram-reported-1',
            category: "Discours indirect",
            theme: "Reported speech",
            french: "Le président américain a déclaré que les droits de douane sur les produits chinois seraient renforcés dès le mois suivant.",
            reference: "The American president declared that tariffs on Chinese products would be reinforced from the following month.",
            grammar_points: ["Reported speech", "Will → would", "Next month → the following month"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "discours-indirect",
            lesson_title: "Discours Indirect"
          },
          {
            id: 'en-gram-modal-1',
            category: "Modaux et auxiliaires",
            theme: "Might + passif",
            french: "La Banque centrale européenne pourrait être contrainte de relever ses taux si l'inflation venait à dépasser durablement les trois pour cent.",
            reference: "The European Central Bank might be forced to raise its rates if inflation were to durably exceed three percent.",
            grammar_points: ["Modal 'might' (éventualité)", "Passive infinitive 'be forced to'", "Subjunctive 'were to'"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "modaux",
            lesson_title: "Modaux et Auxiliaires"
          },
          {
            id: 'en-gram-prep-1',
            category: "Prépositions et particules",
            theme: "Phrasal verbs",
            french: "Le gouvernement britannique est revenu sur sa décision de réduire les dépenses publiques après la pression exercée par les marchés obligataires.",
            reference: "The British government backed down on its decision to cut public spending after pressure from bond markets.",
            grammar_points: ["Phrasal verb 'back down on'", "Préposition 'from' après 'pressure'", "Piège calque 'exercée par'"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "prepositions",
            lesson_title: "Prépositions et Particules"
          },
          {
            id: 'en-gram-art-1',
            category: "Articles et déterminants",
            theme: "Absence d'article",
            french: "La pauvreté demeure un fléau majeur dans les pays en développement, où l'accès à l'éducation reste profondément inégal.",
            reference: "Poverty remains a major scourge in developing countries, where access to education remains deeply unequal.",
            grammar_points: ["Absence d'article devant noms abstraits", "Généralités sans 'the'", "Piège 'la pauvreté' / 'poverty'"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "articles",
            lesson_title: "Articles et Déterminants"
          },
          {
            id: 'en-gram-rel-1',
            category: "Subordonnées relatives",
            theme: "Whose",
            french: "Les entreprises dont les chaînes d'approvisionnement dépendent de Taïwan redoutent une escalade militaire dans le détroit.",
            reference: "Companies whose supply chains depend on Taiwan dread a military escalation in the strait.",
            grammar_points: ["Relative 'whose' (possession)", "Whose pour entités non humaines", "Piège 'of which'"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "relatives",
            lesson_title: "Subordonnées Relatives"
          },
          {
            id: 'en-gram-ger-1',
            category: "Gérondif et infinitif",
            theme: "Refuse to / without -ing",
            french: "Le Premier ministre a refusé de commenter les allégations de corruption sans avoir préalablement consulté ses avocats.",
            reference: "The Prime Minister refused to comment on the corruption allegations without first consulting his lawyers.",
            grammar_points: ["Refuse + to + infinitif", "Without + gérondif (-ing)", "Comment ON something"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "gerondif-infinitif",
            lesson_title: "Gérondif et Infinitif"
          },
          {
            id: 'en-gram-comp-1',
            category: "Comparatifs et superlatifs",
            theme: "Faster than / largest",
            french: "L'économie indienne croît désormais plus rapidement que celle de la Chine, devenant la plus grande puissance émergente de la décennie.",
            reference: "The Indian economy is now growing faster than that of China, becoming the largest emerging power of the decade.",
            grammar_points: ["Comparatif 'faster than'", "Superlatif 'the largest'", "'That of' pour éviter la répétition"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "comparatifs",
            lesson_title: "Comparatifs et Superlatifs"
          },
          {
            id: 'en-gram-quest-1',
            category: "Questions et interrogatifs",
            theme: "Inversion question directe",
            french: "Comment l'Europe peut-elle assurer son autonomie stratégique face à la dépendance énergétique qu'elle a longtemps acceptée.",
            reference: "How can Europe ensure its strategic autonomy in the face of the energy dependence it has long accepted.",
            grammar_points: ["Inversion sujet-auxiliaire (question)", "Pas d'inversion en relative", "How can + sujet + V"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "questions",
            lesson_title: "Questions et Interrogatifs"
          },
          {
            id: 'en-gram-time-1',
            category: "Expressions de temps",
            theme: "Since + present perfect",
            french: "La Corée du Nord n'a pas effectué d'essai nucléaire depuis 2017, mais elle vient de tester un nouveau missile balistique intercontinental.",
            reference: "North Korea has not carried out a nuclear test since 2017, but it has just tested a new intercontinental ballistic missile.",
            grammar_points: ["Since + date + present perfect", "'Just' entre auxiliaire et participe", "Has not + past participle"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "expressions-temps",
            lesson_title: "Expressions de Temps"
          },
          {
            id: 'en-gram-concord-1',
            category: "Concordance des temps",
            theme: "Backshift",
            french: "Les analystes pensaient que la récession serait évitée si la consommation des ménages se maintenait pendant l'hiver.",
            reference: "Analysts thought that the recession would be avoided if household consumption held up during the winter.",
            grammar_points: ["Concordance après prétérit", "Futur français → conditionnel anglais", "If + preterite (in past context)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "concordance",
            lesson_title: "Concordance des Temps"
          },
          {
            id: 'en-gram-quant-1',
            category: "Quantifieurs",
            theme: "Few vs a few / much of",
            french: "Peu d'économistes contestent désormais le fait que l'intelligence artificielle bouleversera une grande partie du marché du travail.",
            reference: "Few economists now dispute the fact that artificial intelligence will disrupt much of the labor market.",
            grammar_points: ["'Few' (quantité négative)", "Distinction few / a few", "'Much of' + indénombrable"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "quantifieurs",
            lesson_title: "Quantifieurs"
          },
          {
            id: 'en-gram-subj-1',
            category: "Subjonctif",
            theme: "It is essential that",
            french: "Il est essentiel que la communauté internationale agisse rapidement pour empêcher l'effondrement humanitaire au Soudan.",
            reference: "It is essential that the international community act quickly to prevent the humanitarian collapse in Sudan.",
            grammar_points: ["Subjonctif présent", "Base verbale après 'essential that'", "Pas de 's' à la 3e personne"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "subjunctif",
            lesson_title: "Subjunctif et Structures Subjectives"
          },
          {
            id: 'en-gram-inv-1',
            category: "Inversions et emphase",
            theme: "Never + inversion",
            french: "Jamais depuis la chute du mur de Berlin la stabilité de l'ordre européen n'avait été aussi gravement remise en cause.",
            reference: "Never since the fall of the Berlin Wall had the stability of the European order been so seriously challenged.",
            grammar_points: ["Inversion après adverbe négatif", "Pluperfect inversé", "Construction emphatique 'never... had'"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "inversions",
            lesson_title: "Inversions et Emphase"
          },
          {
            id: 'en-gram-connect-1',
            category: "Connecteurs logiques",
            theme: "Nevertheless",
            french: "La transition énergétique impose des investissements colossaux. Néanmoins, les gouvernements européens hésitent encore à mobiliser les financements nécessaires.",
            reference: "The energy transition demands colossal investments. Nevertheless, European governments still hesitate to mobilize the necessary funding.",
            grammar_points: ["'Nevertheless' (opposition forte)", "Registre soutenu", "Distinction however / yet / nevertheless"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "connecteurs",
            lesson_title: "Connecteurs Logiques"
          },
          {
            id: 'en-gram-irreg-1',
            category: "Verbes irréguliers",
            theme: "Shook / led",
            french: "La crise financière a profondément ébranlé la confiance des investisseurs et conduit plusieurs banques régionales à la faillite.",
            reference: "The financial crisis deeply shook investors' confidence and led several regional banks to bankruptcy.",
            grammar_points: ["Prétérit irrégulier 'shook' (shake)", "Prétérit irrégulier 'led' (lead)", "Piège 'shaked' / 'leaded'"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "verbes-irreguliers",
            lesson_title: "Verbes Irréguliers"
          },
          {
            id: 'en-gram-caus-1',
            category: "Structures causatives",
            theme: "Have something done",
            french: "Le gouvernement français a fait adopter sa réforme des retraites sans recourir au vote parlementaire, ce qui a déclenché des manifestations massives.",
            reference: "The French government had its pension reform adopted without resorting to a parliamentary vote, which triggered massive protests.",
            grammar_points: ["Causative 'have something done'", "Faire faire → have + past participle", "Piège calque 'made adopt'"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "causatives",
            lesson_title: "Structures Causatives"
          },
          {
            id: 'en-gram-lex-1',
            category: "Nuances lexicales",
            theme: "Affect vs effect",
            french: "La hausse des taux d'intérêt affecte directement le pouvoir d'achat des ménages, et ses effets se font sentir sur l'ensemble de la zone euro.",
            reference: "The rise in interest rates directly affects household purchasing power, and its effects are felt throughout the eurozone.",
            grammar_points: ["'Affect' (verbe) vs 'effect' (nom)", "Passive 'are felt'", "Confusion lexicale pénalisée"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "nuances-lexicales",
            lesson_title: "Nuances Lexicales"
          },
          // === 4 PHRASES SUPPLÉMENTAIRES PAR RUBRIQUE ===
          // 1. TEMPS VERBAUX
          {
            id: 'en-gram-tenses-2',
            category: "Temps verbaux",
            theme: "Present perfect continuous",
            french: "Depuis le début de la guerre commerciale, les exportateurs allemands subissent une chute continue de leurs commandes asiatiques.",
            reference: "Since the beginning of the trade war, German exporters have been suffering a continuous drop in their Asian orders.",
            grammar_points: ["Present perfect continuous", "Since + point de départ", "Action continue dans le présent"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "temps-verbaux",
            lesson_title: "Temps Verbaux"
          },
          {
            id: 'en-gram-tenses-3',
            category: "Temps verbaux",
            theme: "Past simple avec marqueur temporel",
            french: "L'OPEP a annoncé hier une nouvelle baisse de production, ce qui a immédiatement fait flamber les cours du brut.",
            reference: "OPEC announced a new production cut yesterday, which immediately sent crude oil prices soaring.",
            grammar_points: ["Past simple obligatoire avec 'yesterday'", "Pas de present perfect avec date précise", "Send + V-ing (faire faire)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "temps-verbaux",
            lesson_title: "Temps Verbaux"
          },
          {
            id: 'en-gram-tenses-4',
            category: "Temps verbaux",
            theme: "Present continuous (futur planifié)",
            french: "Le gouvernement japonais lance la semaine prochaine un plan de relance massif pour soutenir une économie au bord de la déflation.",
            reference: "The Japanese government is launching a massive stimulus plan next week to support an economy on the brink of deflation.",
            grammar_points: ["Present continuous pour futur planifié", "Next week + be + V-ing", "Piège 'will launch'"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "temps-verbaux",
            lesson_title: "Temps Verbaux"
          },
          {
            id: 'en-gram-tenses-5',
            category: "Temps verbaux",
            theme: "Present perfect + never",
            french: "Les sanctions occidentales n'ont jamais réussi à isoler complètement la Russie sur la scène internationale.",
            reference: "Western sanctions have never managed to completely isolate Russia on the international stage.",
            grammar_points: ["Present perfect avec 'never'", "Manage to + infinitive", "Bilan jusqu'à aujourd'hui"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "temps-verbaux",
            lesson_title: "Temps Verbaux"
          },
          // 2. CONDITIONNELS
          {
            id: 'en-gram-cond-2',
            category: "Conditionnels",
            theme: "Deuxième conditionnel",
            french: "Si la Chine cessait d'acheter de la dette américaine, les marchés financiers connaîtraient une instabilité sans précédent.",
            reference: "If China stopped buying American debt, financial markets would experience unprecedented instability.",
            grammar_points: ["Second conditional (irréel présent)", "If + past simple, would + base", "Hypothèse improbable"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "conditionnels",
            lesson_title: "Conditionnels"
          },
          {
            id: 'en-gram-cond-3',
            category: "Conditionnels",
            theme: "Premier conditionnel",
            french: "Si la Banque centrale européenne maintient ses taux directeurs élevés, la zone euro entrera probablement en récession l'an prochain.",
            reference: "If the European Central Bank keeps its key rates high, the eurozone will probably enter recession next year.",
            grammar_points: ["First conditional (réel)", "If + present, will + base", "Pas de 'would' dans le réel"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "conditionnels",
            lesson_title: "Conditionnels"
          },
          {
            id: 'en-gram-cond-4',
            category: "Conditionnels",
            theme: "Mixed conditional",
            french: "Si l'Allemagne avait investi davantage dans son réseau ferroviaire, elle ne dépendrait plus aujourd'hui autant du diesel et du charbon.",
            reference: "If Germany had invested more in its rail network, it would not depend so much on diesel and coal today.",
            grammar_points: ["Mixed conditional (passé → présent)", "If + past perfect, would + base", "Conséquence présente d'un passé irréel"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "conditionnels",
            lesson_title: "Conditionnels"
          },
          {
            id: 'en-gram-cond-5',
            category: "Conditionnels",
            theme: "Unless + present",
            french: "À moins que les États-Unis ne ratifient l'accord climatique de Paris, les négociations multilatérales resteront paralysées pour la décennie à venir.",
            reference: "Unless the United States ratifies the Paris climate agreement, multilateral negotiations will remain deadlocked for the coming decade.",
            grammar_points: ["Unless + present (= if not)", "Pas de 'don't' après 'unless'", "Will + base dans la principale"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "conditionnels",
            lesson_title: "Conditionnels"
          },
          // 3. VOIX PASSIVE
          {
            id: 'en-gram-passive-2',
            category: "Voix passive",
            theme: "Present perfect passive",
            french: "Plus de deux mille civils ont été déplacés depuis que le conflit a éclaté dans la région du Tigré.",
            reference: "More than two thousand civilians have been displaced since the conflict broke out in the Tigray region.",
            grammar_points: ["Present perfect passive (have been + V-en)", "Since + past simple", "Broke out (phrasal verb)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "voix-passives",
            lesson_title: "Voix Passives"
          },
          {
            id: 'en-gram-passive-3',
            category: "Voix passive",
            theme: "Modal + passive",
            french: "Une réforme structurelle du marché du travail devra être adoptée si la France veut respecter ses engagements budgétaires européens.",
            reference: "A structural reform of the labor market will have to be adopted if France wants to meet its European budgetary commitments.",
            grammar_points: ["Will have to + be + V-en", "Modal au passif", "Meet commitments (collocation)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "voix-passives",
            lesson_title: "Voix Passives"
          },
          {
            id: 'en-gram-passive-4',
            category: "Voix passive",
            theme: "Passive continuous",
            french: "De nouvelles routes commerciales sont actuellement explorées par les pays asiatiques pour contourner les sanctions occidentales.",
            reference: "New trade routes are currently being explored by Asian countries to circumvent Western sanctions.",
            grammar_points: ["Present continuous passive (are being + V-en)", "Currently + continuous", "Agent introduit par 'by'"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "voix-passives",
            lesson_title: "Voix Passives"
          },
          {
            id: 'en-gram-passive-5',
            category: "Voix passive",
            theme: "Get passive",
            french: "Trois ministres se sont vu retirer leur portefeuille après la publication du rapport sur les conflits d'intérêts.",
            reference: "Three ministers had their portfolios removed after the publication of the report on conflicts of interest.",
            grammar_points: ["Causative passive (have + obj + V-en)", "Alternative au passif simple", "Action subie"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "voix-passives",
            lesson_title: "Voix Passives"
          },
          // 4. DISCOURS INDIRECT
          {
            id: 'en-gram-reported-2',
            category: "Discours indirect",
            theme: "Past → past perfect",
            french: "La directrice générale du FMI a affirmé que la croissance mondiale avait ralenti plus vite que prévu durant le troisième trimestre.",
            reference: "The IMF managing director stated that global growth had slowed down faster than expected during the third quarter.",
            grammar_points: ["Past → past perfect (backshift)", "Stated that + clause", "Faster than expected (comparatif idiomatique)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "discours-indirect",
            lesson_title: "Discours Indirect"
          },
          {
            id: 'en-gram-reported-3',
            category: "Discours indirect",
            theme: "Ordre indirect",
            french: "Le secrétaire général de l'ONU a appelé les belligérants à cesser immédiatement les hostilités et à entamer des négociations de paix.",
            reference: "The UN Secretary-General urged the warring parties to immediately cease hostilities and to begin peace talks.",
            grammar_points: ["Urge somebody to + infinitive", "Reported orders (verbe + COD + to V)", "Pas de 'that' avec verbes d'ordre"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "discours-indirect",
            lesson_title: "Discours Indirect"
          },
          {
            id: 'en-gram-reported-4',
            category: "Discours indirect",
            theme: "Question indirecte",
            french: "Les journalistes se sont demandé pourquoi le président avait choisi d'annoncer cette mesure controversée la veille du sommet européen.",
            reference: "Journalists wondered why the president had chosen to announce this controversial measure the day before the European summit.",
            grammar_points: ["Indirect question (pas d'inversion)", "Wondered why + sujet + V", "The day before (≠ yesterday)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "discours-indirect",
            lesson_title: "Discours Indirect"
          },
          {
            id: 'en-gram-reported-5',
            category: "Discours indirect",
            theme: "Verbes de démenti",
            french: "Le porte-parole du Kremlin a démenti que la Russie ait l'intention d'utiliser des armes tactiques sur le territoire ukrainien.",
            reference: "The Kremlin spokesperson denied that Russia intended to use tactical weapons on Ukrainian territory.",
            grammar_points: ["Deny that + clause + backshift", "Intend to + infinitive", "Verbes de discours nuancés"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "discours-indirect",
            lesson_title: "Discours Indirect"
          },
          // 5. MODAUX
          {
            id: 'en-gram-modal-2',
            category: "Modaux et auxiliaires",
            theme: "Should have + past participle",
            french: "Les régulateurs européens auraient dû anticiper la crise des liquidités qui a frappé plusieurs banques régionales l'an passé.",
            reference: "European regulators should have anticipated the liquidity crisis that hit several regional banks last year.",
            grammar_points: ["Should have + past participle (reproche)", "Hit (irrégulier invariant)", "Conséquence passée non réalisée"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "modaux",
            lesson_title: "Modaux et Auxiliaires"
          },
          {
            id: 'en-gram-modal-3',
            category: "Modaux et auxiliaires",
            theme: "Must have + past participle",
            french: "Les négociateurs chinois ont dû recevoir des instructions claires de Pékin, car leur position s'est durcie en quelques heures.",
            reference: "The Chinese negotiators must have received clear instructions from Beijing, as their position hardened within a few hours.",
            grammar_points: ["Must have + past participle (déduction)", "As (causalité, registre soutenu)", "Within + durée"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "modaux",
            lesson_title: "Modaux et Auxiliaires"
          },
          {
            id: 'en-gram-modal-4',
            category: "Modaux et auxiliaires",
            theme: "Would (habitude passée)",
            french: "Avant la chute du Rideau de fer, les diplomates occidentaux passaient des mois entiers à négocier des échanges commerciaux mineurs.",
            reference: "Before the fall of the Iron Curtain, Western diplomats would spend entire months negotiating minor trade exchanges.",
            grammar_points: ["Would + base verb (habitude passée)", "≠ conditionnel", "Spend + time + V-ing"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "modaux",
            lesson_title: "Modaux et Auxiliaires"
          },
          {
            id: 'en-gram-modal-5',
            category: "Modaux et auxiliaires",
            theme: "Be able to (réussite)",
            french: "Aucun gouvernement n'a pu enrayer la spirale inflationniste sans provoquer un ralentissement significatif de la consommation.",
            reference: "No government has been able to halt the inflationary spiral without causing a significant slowdown in consumption.",
            grammar_points: ["Has been able to (≠ could)", "Réussite ponctuelle au present perfect", "Without + V-ing"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "modaux",
            lesson_title: "Modaux et Auxiliaires"
          },
          // 6. PRÉPOSITIONS
          {
            id: 'en-gram-prep-2',
            category: "Prépositions et particules",
            theme: "Do away with",
            french: "Le Parti travailliste s'est défait de son aile la plus radicale avant de remporter les élections législatives britanniques.",
            reference: "The Labour Party did away with its most radical wing before winning the British general election.",
            grammar_points: ["Phrasal verb 'do away with' (abolir/éliminer)", "Before + V-ing", "Compound phrasal (3 mots)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "prepositions",
            lesson_title: "Prépositions et Particules"
          },
          {
            id: 'en-gram-prep-3',
            category: "Prépositions et particules",
            theme: "Account for",
            french: "Le secteur tertiaire représente désormais plus de soixante-dix pour cent du produit intérieur brut français.",
            reference: "The service sector now accounts for more than seventy percent of French gross domestic product.",
            grammar_points: ["Account for (représenter/expliquer)", "Faux ami 'represent'", "Percentage + of"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "prepositions",
            lesson_title: "Prépositions et Particules"
          },
          {
            id: 'en-gram-prep-4',
            category: "Prépositions et particules",
            theme: "Result in",
            french: "La hausse des matières premières a entraîné une augmentation généralisée des prix dans l'ensemble de l'industrie manufacturière.",
            reference: "The rise in raw materials has resulted in a widespread increase in prices throughout the manufacturing industry.",
            grammar_points: ["Result in (avoir pour conséquence)", "≠ result from (provenir de)", "Throughout + nom"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "prepositions",
            lesson_title: "Prépositions et Particules"
          },
          {
            id: 'en-gram-prep-5',
            category: "Prépositions et particules",
            theme: "Cope with",
            french: "Les municipalités côtières peinent à faire face à la montée des eaux et à la multiplication des épisodes climatiques extrêmes.",
            reference: "Coastal municipalities are struggling to cope with rising waters and the multiplication of extreme climate events.",
            grammar_points: ["Cope with + nom (faire face à)", "Struggle to + infinitive", "Phrasal verb sans particule"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "prepositions",
            lesson_title: "Prépositions et Particules"
          },
          // 7. ARTICLES
          {
            id: 'en-gram-art-2',
            category: "Articles et déterminants",
            theme: "Zero article (institutions)",
            french: "Le Premier ministre indien s'est rendu à l'université de Cambridge pour prononcer un discours sur la coopération scientifique.",
            reference: "The Indian Prime Minister visited Cambridge University to deliver a speech on scientific cooperation.",
            grammar_points: ["Cambridge University (sans 'the')", "Universités + nom propre = zéro article", "The + titre + adjectif de nationalité"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "articles",
            lesson_title: "Articles et Déterminants"
          },
          {
            id: 'en-gram-art-3',
            category: "Articles et déterminants",
            theme: "The + superlatif",
            french: "La Suède reste le pays le plus avancé en matière de transition énergétique parmi les démocraties européennes.",
            reference: "Sweden remains the most advanced country in terms of energy transition among European democracies.",
            grammar_points: ["'The' obligatoire devant superlatif", "Sweden sans article", "Among (parmi un groupe défini)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "articles",
            lesson_title: "Articles et Déterminants"
          },
          {
            id: 'en-gram-art-4',
            category: "Articles et déterminants",
            theme: "A + nom (générique)",
            french: "Une démocratie ne saurait fonctionner durablement sans une presse libre et indépendante.",
            reference: "A democracy cannot function sustainably without a free and independent press.",
            grammar_points: ["'A' générique (= n'importe quelle)", "Cannot + base (impossibilité)", "Sans 'the' devant 'democracy'"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "articles",
            lesson_title: "Articles et Déterminants"
          },
          {
            id: 'en-gram-art-5',
            category: "Articles et déterminants",
            theme: "The + adjective (groupe)",
            french: "Les plus défavorisés sont les premiers à subir les conséquences sociales des politiques d'austérité budgétaire.",
            reference: "The most disadvantaged are the first to bear the social consequences of budgetary austerity policies.",
            grammar_points: ["The + adjective = groupe de personnes", "Verbe au pluriel après 'the + adj'", "Bear (irrég. : bear/bore/borne)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "articles",
            lesson_title: "Articles et Déterminants"
          },
          // 8. RELATIVES
          {
            id: 'en-gram-rel-2',
            category: "Subordonnées relatives",
            theme: "Non-defining relative",
            french: "Les pays membres du G20, qui représentent quatre-vingts pour cent de l'économie mondiale, doivent désormais coordonner leur réponse climatique.",
            reference: "The G20 member countries, which represent eighty percent of the global economy, must now coordinate their climate response.",
            grammar_points: ["Non-defining (entre virgules)", "'Which' obligatoire (pas 'that')", "Information additionnelle non essentielle"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "relatives",
            lesson_title: "Subordonnées Relatives"
          },
          {
            id: 'en-gram-rel-3',
            category: "Subordonnées relatives",
            theme: "Omission du pronom",
            french: "Les réformes que la Banque mondiale recommande aux pays émergents suscitent souvent une vive résistance sociale.",
            reference: "The reforms the World Bank recommends to emerging countries often spark strong social resistance.",
            grammar_points: ["Pronom relatif COD omis (defining)", "≠ non-defining (jamais d'omission)", "Spark + nom (collocation)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "relatives",
            lesson_title: "Subordonnées Relatives"
          },
          {
            id: 'en-gram-rel-4',
            category: "Subordonnées relatives",
            theme: "Where (relatif de lieu)",
            french: "Le sommet de Glasgow, où les engagements climatiques avaient été solennellement renouvelés, n'a finalement débouché sur aucune sanction contraignante.",
            reference: "The Glasgow summit, where climate commitments had been solemnly renewed, ultimately led to no binding sanctions.",
            grammar_points: ["'Where' relatif de lieu", "Non-defining avec virgules", "Past perfect passive"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "relatives",
            lesson_title: "Subordonnées Relatives"
          },
          {
            id: 'en-gram-rel-5',
            category: "Subordonnées relatives",
            theme: "Préposition + which",
            french: "L'accord sur lequel reposait l'équilibre stratégique entre Washington et Moscou n'a pas survécu à la dernière administration américaine.",
            reference: "The agreement on which the strategic balance between Washington and Moscow rested did not survive the last American administration.",
            grammar_points: ["Preposition + which (registre soutenu)", "≠ 'which... on' (registre oral)", "Rested on (verbe + préposition)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "relatives",
            lesson_title: "Subordonnées Relatives"
          },
          // 9. GÉRONDIF / INFINITIF
          {
            id: 'en-gram-ger-2',
            category: "Gérondif et infinitif",
            theme: "Stop + V-ing",
            french: "L'Allemagne a cessé d'importer du gaz russe et a investi des sommes considérables pour diversifier ses sources d'énergie.",
            reference: "Germany stopped importing Russian gas and invested considerable sums to diversify its energy sources.",
            grammar_points: ["Stop + V-ing (cesser de)", "≠ stop + to V (s'arrêter pour)", "Invest + sums to + V (but)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "gerondif-infinitif",
            lesson_title: "Gérondif et Infinitif"
          },
          {
            id: 'en-gram-ger-3',
            category: "Gérondif et infinitif",
            theme: "Get used to + V-ing",
            french: "Les économies émergentes commencent à s'habituer à fonctionner sans le soutien direct des institutions financières occidentales.",
            reference: "Emerging economies are starting to get used to operating without the direct support of Western financial institutions.",
            grammar_points: ["Get used to + V-ing (s'habituer à)", "'To' = préposition, pas marqueur d'infinitif", "Piège 'used to + base' (habitude révolue)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "gerondif-infinitif",
            lesson_title: "Gérondif et Infinitif"
          },
          {
            id: 'en-gram-ger-4',
            category: "Gérondif et infinitif",
            theme: "Succeed in + V-ing",
            french: "Aucun chef d'État européen n'a véritablement réussi à convaincre Pékin de modifier sa politique commerciale agressive.",
            reference: "No European head of state has truly succeeded in convincing Beijing to change its aggressive trade policy.",
            grammar_points: ["Succeed in + V-ing", "≠ succeed to (faux ami)", "Convince + COD + to + V"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "gerondif-infinitif",
            lesson_title: "Gérondif et Infinitif"
          },
          {
            id: 'en-gram-ger-5',
            category: "Gérondif et infinitif",
            theme: "Prefer + V-ing",
            french: "Les électeurs préfèrent désormais voter pour des candidats issus de la société civile plutôt que pour des politiques de carrière.",
            reference: "Voters now prefer voting for candidates from civil society rather than for career politicians.",
            grammar_points: ["Prefer + V-ing (préférence générale)", "Rather than + nom/V-ing", "From + nom (issu de)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "gerondif-infinitif",
            lesson_title: "Gérondif et Infinitif"
          },
          // 10. COMPARATIFS / SUPERLATIFS
          {
            id: 'en-gram-comp-2',
            category: "Comparatifs et superlatifs",
            theme: "As + adjective + as",
            french: "Les marchés financiers américains demeurent presque aussi profonds qu'ils l'étaient avant la crise des subprimes de 2008.",
            reference: "American financial markets remain almost as deep as they were before the 2008 subprime crisis.",
            grammar_points: ["As + adj + as (égalité)", "Almost + as...as (presque égal)", "Before + nom de période"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "comparatifs",
            lesson_title: "Comparatifs et Superlatifs"
          },
          {
            id: 'en-gram-comp-3',
            category: "Comparatifs et superlatifs",
            theme: "Less + indénombrable",
            french: "L'Espagne consomme moins d'énergie par habitant que la plupart de ses voisins du nord-ouest européen.",
            reference: "Spain consumes less energy per capita than most of its northwestern European neighbors.",
            grammar_points: ["Less + indénombrable (≠ fewer)", "Per capita (locution latine)", "Most of + déterminant + nom"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "comparatifs",
            lesson_title: "Comparatifs et Superlatifs"
          },
          {
            id: 'en-gram-comp-4',
            category: "Comparatifs et superlatifs",
            theme: "The + comparative... the + comparative",
            french: "Plus une économie dépend des exportations de matières premières, plus elle est vulnérable aux retournements de cycle mondiaux.",
            reference: "The more an economy depends on raw material exports, the more vulnerable it is to global cyclical reversals.",
            grammar_points: ["The + comparative... the + comparative", "Corrélation entre deux variables", "Inversion souple en anglais"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "comparatifs",
            lesson_title: "Comparatifs et Superlatifs"
          },
          {
            id: 'en-gram-comp-5',
            category: "Comparatifs et superlatifs",
            theme: "By far + superlative",
            french: "Singapour reste de loin le port le plus efficace d'Asie du Sud-Est en matière de logistique conteneurisée.",
            reference: "Singapore remains by far the most efficient port in Southeast Asia in terms of container logistics.",
            grammar_points: ["By far + the + superlative (emphase)", "Singapore sans article", "In terms of + nom"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "comparatifs",
            lesson_title: "Comparatifs et Superlatifs"
          },
          // 11. QUESTIONS
          {
            id: 'en-gram-quest-2',
            category: "Questions et interrogatifs",
            theme: "Question indirecte (when)",
            french: "Personne ne sait encore quand les négociations sur le Brexit aboutiront à un accord commercial définitif avec l'Union européenne.",
            reference: "No one yet knows when the Brexit negotiations will result in a final trade agreement with the European Union.",
            grammar_points: ["Indirect question : pas d'inversion", "When + sujet + will + base", "Result in + nom"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "questions",
            lesson_title: "Questions et Interrogatifs"
          },
          {
            id: 'en-gram-quest-3',
            category: "Questions et interrogatifs",
            theme: "Tag question",
            french: "L'Union européenne ne peut pas continuer à dépendre du gaz américain, n'est-ce pas ?",
            reference: "The European Union cannot keep depending on American gas, can it?",
            grammar_points: ["Tag question (polarité inversée)", "Cannot → can it?", "Keep + V-ing (continuer à)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "questions",
            lesson_title: "Questions et Interrogatifs"
          },
          {
            id: 'en-gram-quest-4',
            category: "Questions et interrogatifs",
            theme: "What + nom + auxiliaire",
            french: "Quelles mesures la communauté internationale devrait-elle prendre pour prévenir la prolifération nucléaire au Moyen-Orient ?",
            reference: "What measures should the international community take to prevent nuclear proliferation in the Middle East?",
            grammar_points: ["What + noun + auxiliaire + sujet + V", "Should (conseil/devoir moral)", "Prevent + nom"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "questions",
            lesson_title: "Questions et Interrogatifs"
          },
          {
            id: 'en-gram-quest-5',
            category: "Questions et interrogatifs",
            theme: "How is it that",
            french: "Comment expliquer que l'Inde, malgré sa croissance fulgurante, demeure incapable de réduire significativement la pauvreté rurale ?",
            reference: "How is it that India, despite its rapid growth, remains unable to significantly reduce rural poverty?",
            grammar_points: ["'How is it that' + sujet + V (sans inversion)", "Despite + nom (≠ although + clause)", "Unable to + V"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "questions",
            lesson_title: "Questions et Interrogatifs"
          },
          // 12. EXPRESSIONS DE TEMPS
          {
            id: 'en-gram-time-2',
            category: "Expressions de temps",
            theme: "For + durée",
            french: "La Chine maintient depuis plus de quatre décennies un contrôle strict sur les mouvements de capitaux entrant et sortant de son territoire.",
            reference: "China has maintained strict control over capital movements in and out of its territory for more than four decades.",
            grammar_points: ["For + durée + present perfect", "≠ since (point de départ)", "Control over (collocation)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "expressions-temps",
            lesson_title: "Expressions de Temps"
          },
          {
            id: 'en-gram-time-3',
            category: "Expressions de temps",
            theme: "By the time + futur antérieur",
            french: "Lorsque la conférence climatique commencera, la plupart des pays auront déjà rendu publics leurs nouveaux engagements de réduction d'émissions.",
            reference: "By the time the climate conference begins, most countries will have already made public their new emissions reduction commitments.",
            grammar_points: ["By the time + present (pas de 'will')", "Will have + past participle (futur antérieur)", "Already entre auxiliaires"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "expressions-temps",
            lesson_title: "Expressions de Temps"
          },
          {
            id: 'en-gram-time-4',
            category: "Expressions de temps",
            theme: "Ago + past simple",
            french: "La Bundesbank a abandonné sa politique monétaire indépendante il y a plus de vingt ans, lors de la création de la zone euro.",
            reference: "The Bundesbank abandoned its independent monetary policy more than twenty years ago, when the eurozone was created.",
            grammar_points: ["Ago + past simple (pas present perfect)", "≠ since/for", "When + past passive"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "expressions-temps",
            lesson_title: "Expressions de Temps"
          },
          {
            id: 'en-gram-time-5',
            category: "Expressions de temps",
            theme: "Not yet + present perfect",
            french: "Le gouvernement français n'a pas encore présenté son plan détaillé pour la décarbonation du secteur industriel d'ici 2035.",
            reference: "The French government has not yet presented its detailed plan for decarbonizing the industrial sector by 2035.",
            grammar_points: ["Not yet + present perfect", "By + date (avant)", "For + V-ing (but)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "expressions-temps",
            lesson_title: "Expressions de Temps"
          },
          // 13. CONCORDANCE DES TEMPS
          {
            id: 'en-gram-concord-2',
            category: "Concordance des temps",
            theme: "Future in the past",
            french: "Les économistes avaient prédit que la pandémie provoquerait un effondrement durable de l'économie mondiale, ce qui ne s'est pas produit.",
            reference: "Economists had predicted that the pandemic would cause a lasting collapse of the world economy, which did not happen.",
            grammar_points: ["Past perfect + would (future in the past)", "Predict that + clause", "Which (non-defining)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "concordance",
            lesson_title: "Concordance des Temps"
          },
          {
            id: 'en-gram-concord-3',
            category: "Concordance des temps",
            theme: "Past + past perfect",
            french: "Les analystes ont expliqué que les marchés avaient anticipé la hausse des taux bien avant l'annonce officielle de la Réserve fédérale.",
            reference: "Analysts explained that the markets had anticipated the rate hike well before the Federal Reserve's official announcement.",
            grammar_points: ["Past + past perfect (antériorité)", "Well before + nom", "Génitif saxon (Fed's announcement)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "concordance",
            lesson_title: "Concordance des Temps"
          },
          {
            id: 'en-gram-concord-4',
            category: "Concordance des temps",
            theme: "Will → would",
            french: "Lors du sommet de Washington, les dirigeants alliés ont assuré qu'ils continueraient de soutenir Kiev aussi longtemps que nécessaire.",
            reference: "At the Washington summit, allied leaders assured that they would continue supporting Kyiv for as long as necessary.",
            grammar_points: ["Will → would (concordance)", "Continue + V-ing", "As long as necessary"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "concordance",
            lesson_title: "Concordance des Temps"
          },
          {
            id: 'en-gram-concord-5',
            category: "Concordance des temps",
            theme: "Reported conditional",
            french: "Le ministre des finances a déclaré que si les marchés réagissaient mal, le gouvernement réviserait son projet de budget.",
            reference: "The finance minister stated that if the markets reacted badly, the government would revise its budget proposal.",
            grammar_points: ["Reported 1st conditional (past + would)", "If + past simple (in past context)", "Stated that + clause"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "concordance",
            lesson_title: "Concordance des Temps"
          },
          // 14. QUANTIFIEURS
          {
            id: 'en-gram-quant-2',
            category: "Quantifieurs",
            theme: "Little + indénombrable",
            french: "Peu de progrès a été réalisé depuis la signature des accords de Minsk sur la stabilisation politique de l'Ukraine orientale.",
            reference: "Little progress has been made since the signing of the Minsk agreements on the political stabilization of eastern Ukraine.",
            grammar_points: ["Little + indénombrable (sens négatif)", "≠ a little (quelque)", "Progress = indénombrable"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "quantifieurs",
            lesson_title: "Quantifieurs"
          },
          {
            id: 'en-gram-quant-3',
            category: "Quantifieurs",
            theme: "A great deal of",
            french: "Une grande partie de la croissance allemande a longtemps reposé sur les exportations industrielles vers les économies asiatiques.",
            reference: "A great deal of German growth has long relied on industrial exports to Asian economies.",
            grammar_points: ["A great deal of + indénombrable", "Long (adverbe) + present perfect", "Rely on (collocation)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "quantifieurs",
            lesson_title: "Quantifieurs"
          },
          {
            id: 'en-gram-quant-4',
            category: "Quantifieurs",
            theme: "Most (sans the)",
            french: "La plupart des pays du Golfe diversifient désormais leurs sources de revenus pour réduire leur dépendance au pétrole.",
            reference: "Most Gulf countries are now diversifying their sources of income to reduce their dependence on oil.",
            grammar_points: ["Most + nom général (sans 'the')", "≠ most of the + nom spécifique", "Dependence on (collocation)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "quantifieurs",
            lesson_title: "Quantifieurs"
          },
          {
            id: 'en-gram-quant-5',
            category: "Quantifieurs",
            theme: "Enough + nom",
            french: "L'Europe n'a pas mobilisé suffisamment de capitaux pour rivaliser avec les géants technologiques américains et chinois.",
            reference: "Europe has not mobilized enough capital to compete with American and Chinese tech giants.",
            grammar_points: ["Enough + nom (avant le nom)", "≠ adjective + enough (après l'adjectif)", "Compete with + nom"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "quantifieurs",
            lesson_title: "Quantifieurs"
          },
          // 15. SUBJONCTIF
          {
            id: 'en-gram-subj-2',
            category: "Subjonctif",
            theme: "Recommend that + base",
            french: "Le Conseil de sécurité a recommandé que chaque État membre renforce immédiatement la surveillance de ses frontières maritimes.",
            reference: "The Security Council recommended that each member state immediately strengthen the surveillance of its maritime borders.",
            grammar_points: ["Recommend that + base verb (subjonctif)", "Pas de 's' à la 3e personne", "Each + singulier"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "subjunctif",
            lesson_title: "Subjunctif et Structures Subjectives"
          },
          {
            id: 'en-gram-subj-3',
            category: "Subjonctif",
            theme: "If I were",
            french: "Si j'étais à la tête de l'Union européenne, je donnerais la priorité absolue à l'investissement dans les technologies de défense.",
            reference: "If I were at the head of the European Union, I would give absolute priority to investment in defense technologies.",
            grammar_points: ["If I were (subjonctif, pas 'was')", "Second conditional", "Give priority to + nom"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "subjunctif",
            lesson_title: "Subjunctif et Structures Subjectives"
          },
          {
            id: 'en-gram-subj-4',
            category: "Subjonctif",
            theme: "It is high time + past",
            french: "Il est grand temps que les pays développés tiennent les promesses financières faites aux pays du Sud lors des conférences climatiques.",
            reference: "It is high time that developed countries kept the financial promises made to Southern countries at climate conferences.",
            grammar_points: ["It is high time + past simple (subjonctif)", "Kept (pas 'keep')", "Made to (participe passé adjectif)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "subjunctif",
            lesson_title: "Subjunctif et Structures Subjectives"
          },
          {
            id: 'en-gram-subj-5',
            category: "Subjonctif",
            theme: "Insist that + base",
            french: "Le président argentin a insisté pour que les réformes structurelles soient menées sans aucun délai supplémentaire.",
            reference: "The Argentine president insisted that structural reforms be carried out without any further delay.",
            grammar_points: ["Insist that + base verb (subjonctif)", "Passive subjunctive (be + V-en)", "Carry out (phrasal verb)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "subjunctif",
            lesson_title: "Subjunctif et Structures Subjectives"
          },
          // 16. INVERSIONS
          {
            id: 'en-gram-inv-2',
            category: "Inversions et emphase",
            theme: "Not only... but also",
            french: "Non seulement la Corée du Sud a-t-elle développé une industrie de pointe, mais elle est aussi devenue un acteur diplomatique majeur en Asie.",
            reference: "Not only has South Korea developed a cutting-edge industry, but it has also become a major diplomatic player in Asia.",
            grammar_points: ["Not only + inversion auxiliaire-sujet", "But also (corrélation)", "Cutting-edge (adj. composé)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "inversions",
            lesson_title: "Inversions et Emphase"
          },
          {
            id: 'en-gram-inv-3',
            category: "Inversions et emphase",
            theme: "Hardly... when",
            french: "À peine le nouveau dirigeant avait-il pris ses fonctions que les marchés ont commencé à manifester leur inquiétude.",
            reference: "Hardly had the new leader taken office when the markets began to express their concern.",
            grammar_points: ["Hardly + had + sujet + V-en... when", "Inversion emphatique au pluperfect", "Take office (collocation)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "inversions",
            lesson_title: "Inversions et Emphase"
          },
          {
            id: 'en-gram-inv-4',
            category: "Inversions et emphase",
            theme: "So + adj + that",
            french: "L'épidémie était d'une telle gravité que de nombreux gouvernements ont décrété l'état d'urgence sanitaire.",
            reference: "So serious was the epidemic that many governments declared a state of health emergency.",
            grammar_points: ["So + adj + was + sujet + that (inversion)", "Construction emphatique soutenue", "Declare a state of (collocation)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "inversions",
            lesson_title: "Inversions et Emphase"
          },
          {
            id: 'en-gram-inv-5',
            category: "Inversions et emphase",
            theme: "Only after + inversion",
            french: "Ce n'est qu'après la chute de Lehman Brothers que les régulateurs ont véritablement compris l'ampleur du risque systémique.",
            reference: "Only after the fall of Lehman Brothers did regulators truly understand the scale of systemic risk.",
            grammar_points: ["Only after + inversion (did + sujet + V)", "Construction restrictive", "The scale of (collocation)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "inversions",
            lesson_title: "Inversions et Emphase"
          },
          // 17. CONNECTEURS
          {
            id: 'en-gram-connect-2',
            category: "Connecteurs logiques",
            theme: "Although + clause",
            french: "Bien que l'inflation ait reculé, la Banque centrale européenne demeure prudente quant à un éventuel assouplissement monétaire.",
            reference: "Although inflation has receded, the European Central Bank remains cautious about a possible monetary easing.",
            grammar_points: ["Although + clause (≠ despite + nom)", "Cautious about + nom", "Has receded (present perfect)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "connecteurs",
            lesson_title: "Connecteurs Logiques"
          },
          {
            id: 'en-gram-connect-3',
            category: "Connecteurs logiques",
            theme: "Therefore",
            french: "L'économie chinoise ralentit plus rapidement que prévu ; par conséquent, Pékin envisage de nouvelles mesures de relance.",
            reference: "The Chinese economy is slowing down faster than expected; therefore, Beijing is considering new stimulus measures.",
            grammar_points: ["Therefore + virgule (conséquence)", "Point-virgule + connecteur", "Faster than expected (idiomatique)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "connecteurs",
            lesson_title: "Connecteurs Logiques"
          },
          {
            id: 'en-gram-connect-4',
            category: "Connecteurs logiques",
            theme: "Whereas",
            french: "Tandis que les États-Unis privilégient la confrontation directe avec la Chine, l'Europe tente de maintenir un dialogue stratégique.",
            reference: "Whereas the United States favors direct confrontation with China, Europe tries to maintain a strategic dialogue.",
            grammar_points: ["Whereas (contraste soutenu)", "≠ while (plus neutre)", "Favor + nom"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "connecteurs",
            lesson_title: "Connecteurs Logiques"
          },
          {
            id: 'en-gram-connect-5',
            category: "Connecteurs logiques",
            theme: "Moreover",
            french: "La crise migratoire fragilise l'unité européenne ; de plus, elle nourrit la montée des partis populistes dans plusieurs États membres.",
            reference: "The migration crisis weakens European unity; moreover, it fuels the rise of populist parties in several member states.",
            grammar_points: ["Moreover (addition, registre soutenu)", "≠ also (plus neutre)", "Fuel + nom (alimenter)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "connecteurs",
            lesson_title: "Connecteurs Logiques"
          },
          // 18. VERBES IRRÉGULIERS
          {
            id: 'en-gram-irreg-2',
            category: "Verbes irréguliers",
            theme: "Arose / undergone",
            french: "Les tensions diplomatiques nées au sujet de Taïwan ont profondément transformé l'équilibre stratégique du Pacifique.",
            reference: "The diplomatic tensions that arose over Taiwan have profoundly transformed the strategic balance of the Pacific.",
            grammar_points: ["Arose (past de arise)", "Undergone (V-en de undergo)", "Arise over + nom (collocation)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "verbes-irreguliers",
            lesson_title: "Verbes Irréguliers"
          },
          {
            id: 'en-gram-irreg-3',
            category: "Verbes irréguliers",
            theme: "Thought / sought",
            french: "Les économistes pensaient depuis longtemps que la zone euro avait cherché à imiter le modèle allemand de rigueur budgétaire.",
            reference: "Economists had long thought that the eurozone had sought to imitate the German model of budgetary rigor.",
            grammar_points: ["Thought (V-en de think)", "Sought (V-en de seek)", "Past perfect (avait pensé / avait cherché)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "verbes-irreguliers",
            lesson_title: "Verbes Irréguliers"
          },
          {
            id: 'en-gram-irreg-4',
            category: "Verbes irréguliers",
            theme: "Spoke / spread",
            french: "Le porte-parole a évoqué les défis sécuritaires qui se sont propagés à travers la région du Sahel depuis le retrait français.",
            reference: "The spokesperson spoke about the security challenges that have spread throughout the Sahel region since the French withdrawal.",
            grammar_points: ["Spoke (past de speak)", "Spread (invariant : spread/spread/spread)", "Speak about + nom"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "verbes-irreguliers",
            lesson_title: "Verbes Irréguliers"
          },
          {
            id: 'en-gram-irreg-5',
            category: "Verbes irréguliers",
            theme: "Rose / fell / struck",
            french: "Les cours du baril ont grimpé, le dollar a chuté, et les marchés émergents ont été frappés par une vague de défiance.",
            reference: "Oil prices rose, the dollar fell, and emerging markets were struck by a wave of mistrust.",
            grammar_points: ["Rose (past de rise)", "Fell (past de fall)", "Struck (past + V-en de strike)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "verbes-irreguliers",
            lesson_title: "Verbes Irréguliers"
          },
          // 19. CAUSATIVES
          {
            id: 'en-gram-caus-2',
            category: "Structures causatives",
            theme: "Make + somebody + base verb",
            french: "Les pressions internationales ont contraint le régime à libérer plusieurs opposants politiques détenus depuis des années.",
            reference: "International pressure made the regime release several political opponents detained for years.",
            grammar_points: ["Make + somebody + base verb (sans 'to')", "Piège 'made to release'", "Detained for years (participe passé adjectif)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "causatives",
            lesson_title: "Structures Causatives"
          },
          {
            id: 'en-gram-caus-3',
            category: "Structures causatives",
            theme: "Get + somebody + to + V",
            french: "Le président américain est parvenu à convaincre les pays alliés d'augmenter significativement leur budget militaire.",
            reference: "The American president got allied countries to significantly increase their military budget.",
            grammar_points: ["Get + somebody + to + V (persuader)", "≠ make (contraindre)", "Significantly + V (place de l'adverbe)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "causatives",
            lesson_title: "Structures Causatives"
          },
          {
            id: 'en-gram-caus-4',
            category: "Structures causatives",
            theme: "Let + bare infinitive",
            french: "Bruxelles n'a pas laissé Budapest bloquer indéfiniment la procédure d'élargissement de l'Union européenne.",
            reference: "Brussels did not let Budapest block the European Union's enlargement procedure indefinitely.",
            grammar_points: ["Let + somebody + base verb (sans 'to')", "Piège 'let to block'", "Indefinitely (place de l'adverbe)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "causatives",
            lesson_title: "Structures Causatives"
          },
          {
            id: 'en-gram-caus-5',
            category: "Structures causatives",
            theme: "Have + object + state",
            french: "Le scandale a tenu le gouvernement britannique en alerte pendant plusieurs semaines.",
            reference: "The scandal kept the British government on alert for several weeks.",
            grammar_points: ["Keep + object + complement (état)", "On alert (collocation)", "For + durée (passé)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "causatives",
            lesson_title: "Structures Causatives"
          },
          // 20. NUANCES LEXICALES
          {
            id: 'en-gram-lex-2',
            category: "Nuances lexicales",
            theme: "Rise vs raise",
            french: "La Banque centrale a relevé ses taux directeurs alors que l'inflation continue de grimper plus vite que prévu.",
            reference: "The central bank raised its key rates while inflation continues to rise faster than expected.",
            grammar_points: ["Raise (transitif, régulier : raised)", "Rise (intransitif, irrégulier : rose/risen)", "Confusion lexicale fréquente"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "nuances-lexicales",
            lesson_title: "Nuances Lexicales"
          },
          {
            id: 'en-gram-lex-3',
            category: "Nuances lexicales",
            theme: "Economic vs economical",
            french: "Les politiques économiques restrictives ne sont pas toujours les plus économiques sur le long terme.",
            reference: "Restrictive economic policies are not always the most economical in the long run.",
            grammar_points: ["Economic (relatif à l'économie)", "Economical (peu coûteux)", "In the long run (idiomatique)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "nuances-lexicales",
            lesson_title: "Nuances Lexicales"
          },
          {
            id: 'en-gram-lex-4',
            category: "Nuances lexicales",
            theme: "Sensitive vs sensible",
            french: "Le dossier nucléaire iranien demeure un sujet particulièrement sensible dans les négociations diplomatiques avec les Européens.",
            reference: "The Iranian nuclear file remains a particularly sensitive subject in diplomatic negotiations with Europeans.",
            grammar_points: ["Sensitive (délicat, susceptible)", "≠ sensible (raisonnable) — faux ami", "Confusion classique"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "nuances-lexicales",
            lesson_title: "Nuances Lexicales"
          },
          {
            id: 'en-gram-lex-5',
            category: "Nuances lexicales",
            theme: "Currently vs actually",
            french: "Le ministère des affaires étrangères examine actuellement les conditions d'une éventuelle reprise des relations avec Damas.",
            reference: "The Foreign Ministry is currently examining the conditions for a possible resumption of relations with Damascus.",
            grammar_points: ["Currently (en ce moment) — pas 'actually'", "Actually = 'en réalité' (faux ami)", "Is + currently + V-ing"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "nuances-lexicales",
            lesson_title: "Nuances Lexicales"
          },
          // === 5 PHRASES SUPPLÉMENTAIRES PAR RUBRIQUE (porte chaque rubrique à 10 phrases) ===
          // 1. TEMPS VERBAUX
          {
            id: 'en-gram-tenses-6',
            category: "Temps verbaux",
            theme: "Present perfect continuous + for",
            french: "Le Royaume-Uni vit depuis plus d'une décennie une instabilité politique sans précédent dans son histoire récente.",
            reference: "The United Kingdom has been living through unprecedented political instability for over a decade.",
            grammar_points: ["Present perfect continuous + for", "Live through (collocation)", "Over a decade"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "temps-verbaux",
            lesson_title: "Temps Verbaux"
          },
          {
            id: 'en-gram-tenses-7',
            category: "Temps verbaux",
            theme: "Used to + base",
            french: "Avant la guerre en Ukraine, l'Allemagne importait massivement son gaz de Russie sans envisager d'alternative crédible.",
            reference: "Before the war in Ukraine, Germany used to import its gas massively from Russia without considering any credible alternative.",
            grammar_points: ["Used to + base verb (habitude révolue)", "Without + V-ing", "Piège 'used to + V-ing'"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "temps-verbaux",
            lesson_title: "Temps Verbaux"
          },
          {
            id: 'en-gram-tenses-8',
            category: "Temps verbaux",
            theme: "Will (prédiction)",
            french: "Selon les démographes, la population mondiale franchira le seuil des dix milliards avant la fin du siècle.",
            reference: "According to demographers, the world population will cross the ten-billion threshold before the end of the century.",
            grammar_points: ["Will + base (prédiction)", "According to + nom", "Adjectif composé (ten-billion)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "temps-verbaux",
            lesson_title: "Temps Verbaux"
          },
          {
            id: 'en-gram-tenses-9',
            category: "Temps verbaux",
            theme: "Past perfect",
            french: "Lorsque la Réserve fédérale a annoncé sa décision, les marchés avaient déjà intégré l'essentiel de la hausse attendue.",
            reference: "By the time the Federal Reserve announced its decision, the markets had already priced in most of the expected hike.",
            grammar_points: ["Past perfect (had + V-en)", "By the time + past simple", "Price in (phrasal verb financier)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "temps-verbaux",
            lesson_title: "Temps Verbaux"
          },
          {
            id: 'en-gram-tenses-10',
            category: "Temps verbaux",
            theme: "Going to (intention)",
            french: "Le gouvernement japonais prévoit de doubler son budget de défense au cours des cinq prochaines années.",
            reference: "The Japanese government is going to double its defense budget over the next five years.",
            grammar_points: ["Be going to + base (intention/projet)", "Over + durée future", "Distinction avec 'will'"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "temps-verbaux",
            lesson_title: "Temps Verbaux"
          },
          // 2. CONDITIONNELS
          {
            id: 'en-gram-cond-6',
            category: "Conditionnels",
            theme: "Were it not for",
            french: "Sans le soutien financier de la Banque mondiale, plusieurs économies africaines seraient au bord de la faillite.",
            reference: "Were it not for the financial support of the World Bank, several African economies would be on the brink of bankruptcy.",
            grammar_points: ["Were it not for + nom (inversion conditionnelle)", "Registre soutenu", "On the brink of (collocation)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "conditionnels",
            lesson_title: "Conditionnels"
          },
          {
            id: 'en-gram-cond-7',
            category: "Conditionnels",
            theme: "Should + inversion",
            french: "Si la situation venait à se détériorer, l'OTAN devrait renforcer immédiatement sa présence sur le flanc oriental.",
            reference: "Should the situation deteriorate, NATO would have to immediately reinforce its presence on the eastern flank.",
            grammar_points: ["Should + inversion (= if... were to)", "Registre formel", "Would have to + base"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "conditionnels",
            lesson_title: "Conditionnels"
          },
          {
            id: 'en-gram-cond-8',
            category: "Conditionnels",
            theme: "Had + inversion",
            french: "Si Pékin avait anticipé l'ampleur de la crise immobilière, le gouvernement aurait pris des mesures préventives plus tôt.",
            reference: "Had Beijing anticipated the scale of the real estate crisis, the government would have taken preventive measures earlier.",
            grammar_points: ["Had + inversion (= if... had + V-en)", "3rd conditional inversé", "Construction soutenue"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "conditionnels",
            lesson_title: "Conditionnels"
          },
          {
            id: 'en-gram-cond-9',
            category: "Conditionnels",
            theme: "Provided that",
            french: "À condition que les négociations aboutissent rapidement, un cessez-le-feu pourrait être signé avant la fin du mois.",
            reference: "Provided that the negotiations conclude swiftly, a ceasefire could be signed before the end of the month.",
            grammar_points: ["Provided that + present", "Synonyme formel de 'if'", "Could + be + V-en (passif modal)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "conditionnels",
            lesson_title: "Conditionnels"
          },
          {
            id: 'en-gram-cond-10',
            category: "Conditionnels",
            theme: "Otherwise",
            french: "Les pays développés doivent honorer leurs engagements climatiques ; sinon, la confiance des pays du Sud sera définitivement rompue.",
            reference: "Developed countries must honor their climate commitments; otherwise, the trust of Southern countries will be permanently broken.",
            grammar_points: ["Otherwise (= or else)", "Point-virgule + connecteur", "Will + be + V-en (futur passif)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "conditionnels",
            lesson_title: "Conditionnels"
          },
          // 3. VOIX PASSIVE
          {
            id: 'en-gram-passive-6',
            category: "Voix passive",
            theme: "Past simple passive",
            french: "La constitution chilienne a été rejetée par référendum à deux reprises depuis 2022.",
            reference: "The Chilean constitution was rejected by referendum twice since 2022.",
            grammar_points: ["Past simple passive (was + V-en)", "Twice (adverbe de fréquence)", "By referendum (sans article)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "voix-passives",
            lesson_title: "Voix Passives"
          },
          {
            id: 'en-gram-passive-7',
            category: "Voix passive",
            theme: "It is believed that",
            french: "On pense généralement que l'intelligence artificielle bouleversera plus de professions que toute révolution technologique précédente.",
            reference: "It is generally believed that artificial intelligence will disrupt more professions than any previous technological revolution.",
            grammar_points: ["It is + V-en + that (passif impersonnel)", "More + nom + than + any", "Traduit le 'on' français"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "voix-passives",
            lesson_title: "Voix Passives"
          },
          {
            id: 'en-gram-passive-8',
            category: "Voix passive",
            theme: "Be supposed to",
            french: "Les pays de l'OPEP+ sont censés réduire leur production conformément à l'accord conclu en avril.",
            reference: "OPEC+ countries are supposed to reduce their production in accordance with the April agreement.",
            grammar_points: ["Be supposed to + base verb", "Obligation/attente externe", "In accordance with + nom"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "voix-passives",
            lesson_title: "Voix Passives"
          },
          {
            id: 'en-gram-passive-9',
            category: "Voix passive",
            theme: "Past perfect passive",
            french: "Avant la chute du régime, des milliers d'opposants avaient été emprisonnés sans procès équitable.",
            reference: "Before the fall of the regime, thousands of opponents had been imprisoned without a fair trial.",
            grammar_points: ["Past perfect passive (had been + V-en)", "Thousands of + nom pluriel", "Without + nom (sans 'the')"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "voix-passives",
            lesson_title: "Voix Passives"
          },
          {
            id: 'en-gram-passive-10',
            category: "Voix passive",
            theme: "Passive infinitive",
            french: "De nouvelles sanctions sont susceptibles d'être adoptées si les négociations diplomatiques échouent.",
            reference: "New sanctions are likely to be adopted if diplomatic negotiations fail.",
            grammar_points: ["Be likely + to be + V-en", "Passive infinitive", "If + present + present (1st cond.)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "voix-passives",
            lesson_title: "Voix Passives"
          },
          // 4. DISCOURS INDIRECT
          {
            id: 'en-gram-reported-6',
            category: "Discours indirect",
            theme: "Reported request (ask + to)",
            french: "Les ONG ont demandé aux gouvernements occidentaux de doubler leur aide humanitaire à destination de Gaza.",
            reference: "NGOs asked Western governments to double their humanitarian aid to Gaza.",
            grammar_points: ["Ask + somebody + to + V", "Reported request", "Aid to + lieu (collocation)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "discours-indirect",
            lesson_title: "Discours Indirect"
          },
          {
            id: 'en-gram-reported-7',
            category: "Discours indirect",
            theme: "Wonder whether",
            french: "Les analystes se demandent si la zone euro parviendra à éviter la récession malgré le ralentissement allemand.",
            reference: "Analysts wonder whether the eurozone will manage to avoid recession despite the German slowdown.",
            grammar_points: ["Wonder whether (question indirecte yes/no)", "Pas d'inversion après whether", "Manage to + infinitive"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "discours-indirect",
            lesson_title: "Discours Indirect"
          },
          {
            id: 'en-gram-reported-8',
            category: "Discours indirect",
            theme: "Praise + for",
            french: "Le secrétaire général a salué les efforts diplomatiques déployés par Pretoria pour apaiser les tensions régionales.",
            reference: "The Secretary-General praised the diplomatic efforts deployed by Pretoria to ease regional tensions.",
            grammar_points: ["Praise + nom (saluer)", "Distinction praise/congratulate", "Deploy + nom (collocation)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "discours-indirect",
            lesson_title: "Discours Indirect"
          },
          {
            id: 'en-gram-reported-9',
            category: "Discours indirect",
            theme: "Warn that",
            french: "Les économistes ont averti que le surendettement public pourrait fragiliser durablement la confiance des investisseurs étrangers.",
            reference: "Economists warned that public over-indebtedness could lastingly weaken the confidence of foreign investors.",
            grammar_points: ["Warn that + clause", "Could + base (possibilité au passé)", "Lastingly (place de l'adverbe)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "discours-indirect",
            lesson_title: "Discours Indirect"
          },
          {
            id: 'en-gram-reported-10',
            category: "Discours indirect",
            theme: "Promise that + would",
            french: "Le candidat démocrate a promis qu'il rétablirait l'accord nucléaire iranien dès son arrivée à la Maison-Blanche.",
            reference: "The Democratic candidate promised that he would restore the Iranian nuclear deal as soon as he arrived at the White House.",
            grammar_points: ["Promise that + would + base", "As soon as + past (in past context)", "Restore + nom"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "discours-indirect",
            lesson_title: "Discours Indirect"
          },
          // 5. MODAUX
          {
            id: 'en-gram-modal-6',
            category: "Modaux et auxiliaires",
            theme: "Could have + V-en",
            french: "Les régulateurs européens auraient pu intervenir plus tôt pour limiter la spéculation sur les marchés énergétiques.",
            reference: "European regulators could have intervened earlier to limit speculation on energy markets.",
            grammar_points: ["Could have + V-en (possibilité non réalisée)", "To + infinitive (but)", "Earlier (comparatif d'adverbe)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "modaux",
            lesson_title: "Modaux et Auxiliaires"
          },
          {
            id: 'en-gram-modal-7',
            category: "Modaux et auxiliaires",
            theme: "Need not",
            french: "Les pays exportateurs de pétrole n'ont pas besoin de craindre une chute durable des cours, selon plusieurs analystes.",
            reference: "Oil-exporting countries need not fear a lasting drop in prices, according to several analysts.",
            grammar_points: ["Need not + base (registre soutenu)", "= don't have to", "Lasting + nom"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "modaux",
            lesson_title: "Modaux et Auxiliaires"
          },
          {
            id: 'en-gram-modal-8',
            category: "Modaux et auxiliaires",
            theme: "Must (obligation interne)",
            french: "Les États membres de l'Union européenne doivent désormais consacrer au moins deux pour cent de leur PIB à la défense.",
            reference: "The Member States of the European Union must now devote at least two percent of their GDP to defense.",
            grammar_points: ["Must + base (obligation morale/interne)", "Devote + obj + to + nom", "At least + nombre"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "modaux",
            lesson_title: "Modaux et Auxiliaires"
          },
          {
            id: 'en-gram-modal-9',
            category: "Modaux et auxiliaires",
            theme: "Had to (obligation externe passée)",
            french: "Le Royaume-Uni a dû renégocier l'ensemble de ses accords commerciaux après son retrait de l'Union européenne.",
            reference: "The United Kingdom had to renegotiate all its trade agreements after its withdrawal from the European Union.",
            grammar_points: ["Had to + base (obligation externe passée)", "≠ must (pas de passé direct)", "Withdrawal from + nom"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "modaux",
            lesson_title: "Modaux et Auxiliaires"
          },
          {
            id: 'en-gram-modal-10',
            category: "Modaux et auxiliaires",
            theme: "May (concession)",
            french: "Les politiques d'austérité peuvent paraître nécessaires à court terme, mais elles finissent par étouffer la demande intérieure.",
            reference: "Austerity policies may appear necessary in the short term, but they end up stifling domestic demand.",
            grammar_points: ["May + base (concession)", "End up + V-ing (finir par)", "In the short term (collocation)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "modaux",
            lesson_title: "Modaux et Auxiliaires"
          },
          // 6. PRÉPOSITIONS
          {
            id: 'en-gram-prep-6',
            category: "Prépositions et particules",
            theme: "Take over",
            french: "Les fonds d'investissement chinois ont pris le contrôle de plusieurs ports stratégiques en Afrique de l'Est au cours de la dernière décennie.",
            reference: "Chinese investment funds took over several strategic ports in East Africa over the last decade.",
            grammar_points: ["Take over (prendre le contrôle de)", "Over + durée passée", "East Africa (sans 'the')"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "prepositions",
            lesson_title: "Prépositions et Particules"
          },
          {
            id: 'en-gram-prep-7',
            category: "Prépositions et particules",
            theme: "Stem from",
            french: "La crise migratoire actuelle découle largement des conflits qui ravagent le Sahel depuis plus de quinze ans.",
            reference: "The current migration crisis stems largely from the conflicts that have been ravaging the Sahel for over fifteen years.",
            grammar_points: ["Stem from (provenir de)", "Present perfect continuous + for", "Largely (place de l'adverbe)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "prepositions",
            lesson_title: "Prépositions et Particules"
          },
          {
            id: 'en-gram-prep-8',
            category: "Prépositions et particules",
            theme: "Carry out + investigation",
            french: "Les Nations unies ont mené une enquête approfondie sur les violations des droits humains commises au Soudan.",
            reference: "The United Nations carried out an in-depth investigation into the human rights violations committed in Sudan.",
            grammar_points: ["Carry out (mener à bien)", "Investigation into + nom", "In-depth (adjectif composé)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "prepositions",
            lesson_title: "Prépositions et Particules"
          },
          {
            id: 'en-gram-prep-9',
            category: "Prépositions et particules",
            theme: "Step up",
            french: "L'Union européenne a intensifié ses efforts diplomatiques pour rallier les pays du Sud à sa position climatique.",
            reference: "The European Union stepped up its diplomatic efforts to rally Southern countries to its climate position.",
            grammar_points: ["Step up (intensifier)", "Rally + somebody + to + nom", "Adjective + Southern (capitalisé)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "prepositions",
            lesson_title: "Prépositions et Particules"
          },
          {
            id: 'en-gram-prep-10',
            category: "Prépositions et particules",
            theme: "Crack down on",
            french: "Le gouvernement chinois a sévèrement réprimé les manifestations qui ont éclaté dans plusieurs grandes villes.",
            reference: "The Chinese government cracked down hard on the demonstrations that erupted in several major cities.",
            grammar_points: ["Crack down on (réprimer)", "Hard (adverbe sans -ly)", "Erupted (past de erupt, régulier)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "prepositions",
            lesson_title: "Prépositions et Particules"
          },
          // 7. ARTICLES
          {
            id: 'en-gram-art-6',
            category: "Articles et déterminants",
            theme: "Zero article + the + événement",
            french: "Les institutions américaines traversent une crise de légitimité sans précédent depuis la guerre civile.",
            reference: "American institutions are going through an unprecedented crisis of legitimacy since the Civil War.",
            grammar_points: ["Pas de 'the' devant 'American institutions' (général)", "'The' devant événement spécifique (Civil War)", "Go through + nom"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "articles",
            lesson_title: "Articles et Déterminants"
          },
          {
            id: 'en-gram-art-7',
            category: "Articles et déterminants",
            theme: "Plural sans article",
            french: "Les femmes représentent désormais plus de la moitié des effectifs dans les universités françaises de premier cycle.",
            reference: "Women now represent more than half of the workforce in undergraduate French universities.",
            grammar_points: ["Pluriel généralisant sans article ('women')", "Half of the + nom (article devant nom spécifique)", "Undergraduate (zero article)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "articles",
            lesson_title: "Articles et Déterminants"
          },
          {
            id: 'en-gram-art-8',
            category: "Articles et déterminants",
            theme: "The + pays pluriels",
            french: "Les Pays-Bas et les Émirats arabes unis figurent parmi les pays les plus exposés à la montée des eaux.",
            reference: "The Netherlands and the United Arab Emirates are among the countries most exposed to rising waters.",
            grammar_points: ["'The' obligatoire devant pays pluriels/fédérations", "Among the + nom pluriel", "Most exposed (postposé)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "articles",
            lesson_title: "Articles et Déterminants"
          },
          {
            id: 'en-gram-art-9',
            category: "Articles et déterminants",
            theme: "A + fonction",
            french: "Un président américain ne peut être réélu plus d'une fois après son premier mandat.",
            reference: "An American president cannot be re-elected more than once after his first term.",
            grammar_points: ["An + adjectif + fonction (général)", "Cannot + be + V-en (passif modal)", "More than once"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "articles",
            lesson_title: "Articles et Déterminants"
          },
          {
            id: 'en-gram-art-10',
            category: "Articles et déterminants",
            theme: "Zero article (langues)",
            french: "Le mandarin est désormais enseigné dans la plupart des grandes universités occidentales aux côtés de l'anglais et de l'espagnol.",
            reference: "Mandarin is now taught in most major Western universities alongside English and Spanish.",
            grammar_points: ["Pas d'article devant les langues", "Most + nom (sans 'the')", "Alongside + nom"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "articles",
            lesson_title: "Articles et Déterminants"
          },
          // 8. RELATIVES
          {
            id: 'en-gram-rel-6',
            category: "Subordonnées relatives",
            theme: "Which (commentaire global)",
            french: "L'Italie a élu une coalition d'extrême droite, ce qui a profondément inquiété les institutions européennes.",
            reference: "Italy elected a far-right coalition, which deeply worried European institutions.",
            grammar_points: ["Which (commente la phrase entière)", "Non-defining (virgule)", "Far-right (adjectif composé)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "relatives",
            lesson_title: "Subordonnées Relatives"
          },
          {
            id: 'en-gram-rel-7',
            category: "Subordonnées relatives",
            theme: "Who (defining)",
            french: "Les diplomates qui ont participé aux négociations de Camp David sont aujourd'hui presque tous décédés.",
            reference: "The diplomats who took part in the Camp David negotiations have almost all passed away today.",
            grammar_points: ["Who (sujet defining, humain)", "Have all + V-en (tous + V)", "Pass away (euphémisme)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "relatives",
            lesson_title: "Subordonnées Relatives"
          },
          {
            id: 'en-gram-rel-8',
            category: "Subordonnées relatives",
            theme: "With whom",
            french: "Les dirigeants avec qui Washington souhaite renouer le dialogue ont rejeté toute proposition de rencontre bilatérale.",
            reference: "The leaders with whom Washington wishes to resume dialogue have rejected any bilateral meeting proposal.",
            grammar_points: ["With whom (registre soutenu)", "Wish + to + V (souhaiter)", "Any + nom (négatif)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "relatives",
            lesson_title: "Subordonnées Relatives"
          },
          {
            id: 'en-gram-rel-9',
            category: "Subordonnées relatives",
            theme: "That (defining)",
            french: "Les pays qui dépendent fortement des hydrocarbures peinent à amorcer leur transition énergétique.",
            reference: "The countries that heavily depend on hydrocarbons struggle to initiate their energy transition.",
            grammar_points: ["That (defining, sujet, non humain)", "Depend on (collocation)", "Struggle to + V"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "relatives",
            lesson_title: "Subordonnées Relatives"
          },
          {
            id: 'en-gram-rel-10',
            category: "Subordonnées relatives",
            theme: "What (= ce que)",
            french: "Ce que les électeurs attendent désormais des dirigeants, c'est une réponse concrète à l'inflation persistante.",
            reference: "What voters now expect from their leaders is a concrete response to persistent inflation.",
            grammar_points: ["What (pronom relatif sans antécédent)", "= 'ce que / la chose que'", "Expect + nom + from + nom"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "relatives",
            lesson_title: "Subordonnées Relatives"
          },
          // 9. GÉRONDIF / INFINITIF
          {
            id: 'en-gram-ger-6',
            category: "Gérondif et infinitif",
            theme: "Avoid + V-ing",
            french: "Le gouvernement britannique a tenté d'éviter de heurter ses partenaires européens en gardant sa position sur le Brexit ambiguë.",
            reference: "The British government tried to avoid offending its European partners by keeping its position on Brexit ambiguous.",
            grammar_points: ["Avoid + V-ing (≠ avoid to)", "By + V-ing (manière)", "Try to + V (essayer de)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "gerondif-infinitif",
            lesson_title: "Gérondif et Infinitif"
          },
          {
            id: 'en-gram-ger-7',
            category: "Gérondif et infinitif",
            theme: "Decide to + V",
            french: "L'Union européenne a décidé d'imposer des droits de douane sur les véhicules électriques importés de Chine.",
            reference: "The European Union decided to impose tariffs on electric vehicles imported from China.",
            grammar_points: ["Decide to + V (infinitive)", "Imposed from (participe passé)", "Tariffs on + nom"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "gerondif-infinitif",
            lesson_title: "Gérondif et Infinitif"
          },
          {
            id: 'en-gram-ger-8',
            category: "Gérondif et infinitif",
            theme: "Look forward to + V-ing",
            french: "Les négociateurs attendent avec impatience de pouvoir relancer les discussions sur le climat lors de la prochaine COP.",
            reference: "Negotiators look forward to being able to relaunch climate discussions at the next COP.",
            grammar_points: ["Look forward to + V-ing", "'To' = préposition", "Being able to (gerundive of 'can')"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "gerondif-infinitif",
            lesson_title: "Gérondif et Infinitif"
          },
          {
            id: 'en-gram-ger-9',
            category: "Gérondif et infinitif",
            theme: "Manage to + V",
            french: "Aucun gouvernement n'est véritablement parvenu à enrayer la montée du populisme dans les démocraties occidentales.",
            reference: "No government has truly managed to halt the rise of populism in Western democracies.",
            grammar_points: ["Manage to + V (réussite)", "Has + adverbe + V-en", "The rise of + nom"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "gerondif-infinitif",
            lesson_title: "Gérondif et Infinitif"
          },
          {
            id: 'en-gram-ger-10',
            category: "Gérondif et infinitif",
            theme: "Worth + V-ing",
            french: "Il vaut la peine de souligner que la Norvège a investi des milliards dans son fonds souverain depuis les années 1990.",
            reference: "It is worth pointing out that Norway has invested billions in its sovereign wealth fund since the 1990s.",
            grammar_points: ["Worth + V-ing (≠ to + V)", "It is + worth + V-ing", "Sovereign wealth fund (collocation)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "gerondif-infinitif",
            lesson_title: "Gérondif et Infinitif"
          },
          // 10. COMPARATIFS
          {
            id: 'en-gram-comp-6',
            category: "Comparatifs et superlatifs",
            theme: "More and more + adj",
            french: "Les jeunes générations sont de plus en plus préoccupées par les conséquences du réchauffement climatique sur leur avenir.",
            reference: "Younger generations are more and more concerned about the consequences of global warming on their future.",
            grammar_points: ["More and more + adj long (progression)", "Concerned about + nom", "Younger (comparatif adjectif court)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "comparatifs",
            lesson_title: "Comparatifs et Superlatifs"
          },
          {
            id: 'en-gram-comp-7',
            category: "Comparatifs et superlatifs",
            theme: "Twice as + adj + as",
            french: "L'économie indienne croît désormais deux fois plus rapidement que celle de la Chine en termes réels.",
            reference: "The Indian economy is now growing twice as fast as the Chinese one in real terms.",
            grammar_points: ["Twice as + adj + as", "The Chinese one (pour éviter répétition)", "In real terms (idiomatique)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "comparatifs",
            lesson_title: "Comparatifs et Superlatifs"
          },
          {
            id: 'en-gram-comp-8',
            category: "Comparatifs et superlatifs",
            theme: "Less and less + adj",
            french: "La confiance des citoyens envers leurs institutions ne cesse de diminuer dans la plupart des démocraties européennes.",
            reference: "Citizens' trust in their institutions is becoming less and less significant in most European democracies.",
            grammar_points: ["Less and less + adj", "Trust in + nom (collocation)", "Génitif saxon (citizens')"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "comparatifs",
            lesson_title: "Comparatifs et Superlatifs"
          },
          {
            id: 'en-gram-comp-9',
            category: "Comparatifs et superlatifs",
            theme: "Far + comparative",
            french: "Le coût humain de la guerre en Ukraine s'est révélé bien plus lourd que ne le prévoyaient les analystes occidentaux.",
            reference: "The human cost of the war in Ukraine has proven far heavier than Western analysts had predicted.",
            grammar_points: ["Far + comparative (renforcement)", "Prove + adjectif (se révéler)", "Past perfect (had predicted)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "comparatifs",
            lesson_title: "Comparatifs et Superlatifs"
          },
          {
            id: 'en-gram-comp-10',
            category: "Comparatifs et superlatifs",
            theme: "Nothing like as + adj + as",
            french: "L'économie russe n'est plus du tout aussi performante qu'elle l'était avant l'imposition des sanctions occidentales.",
            reference: "The Russian economy is nothing like as efficient as it was before the imposition of Western sanctions.",
            grammar_points: ["Nothing like as + adj + as (négation comparative)", "Construction soutenue", "It was (reprise du sujet)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "comparatifs",
            lesson_title: "Comparatifs et Superlatifs"
          },
          // 11. QUESTIONS
          {
            id: 'en-gram-quest-6',
            category: "Questions et interrogatifs",
            theme: "Whom (registre soutenu)",
            french: "À qui les démocraties occidentales s'adresseront-elles pour limiter la prolifération des armes hypersoniques ?",
            reference: "Whom will Western democracies turn to in order to limit the proliferation of hypersonic weapons?",
            grammar_points: ["Whom + auxiliaire + sujet + V", "Turn to + somebody (s'adresser à)", "In order to + V (but)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "questions",
            lesson_title: "Questions et Interrogatifs"
          },
          {
            id: 'en-gram-quest-7',
            category: "Questions et interrogatifs",
            theme: "Embedded question (when)",
            french: "Aucun analyste ne peut prédire exactement quand la transition énergétique deviendra économiquement rentable pour les pays émergents.",
            reference: "No analyst can predict exactly when the energy transition will become economically profitable for emerging countries.",
            grammar_points: ["Embedded question (pas d'inversion)", "When + sujet + will + base", "Economically (adverbe)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "questions",
            lesson_title: "Questions et Interrogatifs"
          },
          {
            id: 'en-gram-quest-8',
            category: "Questions et interrogatifs",
            theme: "Negative question (why didn't)",
            french: "Pourquoi l'Europe n'a-t-elle pas anticipé la dépendance énergétique qu'elle avait construite vis-à-vis de la Russie ?",
            reference: "Why didn't Europe anticipate the energy dependence it had built on Russia?",
            grammar_points: ["Why + didn't + sujet + base", "Past perfect (had built)", "Omission de 'that' relative"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "questions",
            lesson_title: "Questions et Interrogatifs"
          },
          {
            id: 'en-gram-quest-9',
            category: "Questions et interrogatifs",
            theme: "What if",
            french: "Et si la Réserve fédérale décidait de baisser ses taux directeurs avant la fin de l'année ?",
            reference: "What if the Federal Reserve decided to cut its key rates before the end of the year?",
            grammar_points: ["What if + past simple (hypothèse)", "Decide to + V", "Key rates (collocation financière)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "questions",
            lesson_title: "Questions et Interrogatifs"
          },
          {
            id: 'en-gram-quest-10',
            category: "Questions et interrogatifs",
            theme: "Which (choix dans un ensemble)",
            french: "Lequel des candidats à l'élection présidentielle américaine recueille actuellement le plus de soutiens financiers ?",
            reference: "Which of the candidates in the American presidential election currently receives the most financial support?",
            grammar_points: ["Which of + the + nom pluriel (choix)", "Currently + V-s (place de l'adverbe)", "The most + nom"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "questions",
            lesson_title: "Questions et Interrogatifs"
          },
          // 12. EXPRESSIONS DE TEMPS
          {
            id: 'en-gram-time-6',
            category: "Expressions de temps",
            theme: "During",
            french: "Pendant la pandémie de COVID-19, les inégalités sociales se sont considérablement aggravées dans la plupart des pays développés.",
            reference: "During the COVID-19 pandemic, social inequalities considerably worsened in most developed countries.",
            grammar_points: ["During + nom (≠ for + durée)", "Considerably + V (place de l'adverbe)", "In most + nom pluriel"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "expressions-temps",
            lesson_title: "Expressions de Temps"
          },
          {
            id: 'en-gram-time-7',
            category: "Expressions de temps",
            theme: "While + V-ing",
            french: "Tout en condamnant officiellement l'invasion russe, plusieurs pays ont continué d'importer du pétrole de Moscou.",
            reference: "While officially condemning the Russian invasion, several countries continued to import oil from Moscow.",
            grammar_points: ["While + V-ing (concession simultanée)", "Continued to + V (ou continued V-ing)", "Officially (place de l'adverbe)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "expressions-temps",
            lesson_title: "Expressions de Temps"
          },
          {
            id: 'en-gram-time-8',
            category: "Expressions de temps",
            theme: "Until + present (futur)",
            french: "L'Iran n'autorisera pas les inspections de ses sites nucléaires tant que les sanctions américaines ne seront pas levées.",
            reference: "Iran will not allow inspections of its nuclear sites until American sanctions are lifted.",
            grammar_points: ["Until + present (pour parler du futur)", "Will not allow + nom", "Sanctions are lifted (passive)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "expressions-temps",
            lesson_title: "Expressions de Temps"
          },
          {
            id: 'en-gram-time-9',
            category: "Expressions de temps",
            theme: "As soon as",
            french: "Dès que les marchés ont appris la nouvelle, la livre sterling a chuté de plus de trois pour cent face au dollar.",
            reference: "As soon as the markets learned the news, the pound dropped by more than three percent against the dollar.",
            grammar_points: ["As soon as + past simple (passé)", "Drop by + pourcentage", "Against + monnaie"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "expressions-temps",
            lesson_title: "Expressions de Temps"
          },
          {
            id: 'en-gram-time-10',
            category: "Expressions de temps",
            theme: "In + période future",
            french: "Au cours du siècle prochain, l'Afrique deviendra le continent le plus peuplé devant l'Asie.",
            reference: "In the next century, Africa will become the most populated continent ahead of Asia.",
            grammar_points: ["In + the next + nom (futur)", "Become + the + superlative", "Ahead of + nom"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "expressions-temps",
            lesson_title: "Expressions de Temps"
          },
          // 13. CONCORDANCE
          {
            id: 'en-gram-concord-6',
            category: "Concordance des temps",
            theme: "Past continuous + when + past",
            french: "Les habitants d'Hiroshima dormaient encore lorsque la bombe atomique a frappé leur ville le 6 août 1945.",
            reference: "The inhabitants of Hiroshima were still sleeping when the atomic bomb hit their city on August 6, 1945.",
            grammar_points: ["Past continuous + when + past simple", "Still entre auxiliaire et V-ing", "Hit (irrégulier invariant)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "concordance",
            lesson_title: "Concordance des Temps"
          },
          {
            id: 'en-gram-concord-7',
            category: "Concordance des temps",
            theme: "By the time + past + past perfect",
            french: "Lorsque les premiers vaccins ont été distribués, la pandémie avait déjà fait plus de deux millions de morts.",
            reference: "By the time the first vaccines were distributed, the pandemic had already killed more than two million people.",
            grammar_points: ["By the time + past simple", "Past perfect + already", "Two million people (millions sans 's')"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "concordance",
            lesson_title: "Concordance des Temps"
          },
          {
            id: 'en-gram-concord-8',
            category: "Concordance des temps",
            theme: "Now → then (reported)",
            french: "Le directeur du FMI a affirmé que l'inflation mondiale était alors à son point culminant depuis quarante ans.",
            reference: "The IMF director stated that global inflation was then at its highest point in forty years.",
            grammar_points: ["Now → then (discours indirect)", "Was + at its highest", "In + durée (record)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "concordance",
            lesson_title: "Concordance des Temps"
          },
          {
            id: 'en-gram-concord-9',
            category: "Concordance des temps",
            theme: "Past + past perfect",
            french: "Le chancelier allemand a expliqué que son gouvernement avait pris toutes les mesures nécessaires pour sécuriser l'approvisionnement énergétique.",
            reference: "The German chancellor explained that his government had taken all the necessary measures to secure the energy supply.",
            grammar_points: ["Past simple + past perfect (antériorité)", "Take measures (collocation)", "To + V (but)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "concordance",
            lesson_title: "Concordance des Temps"
          },
          {
            id: 'en-gram-concord-10',
            category: "Concordance des temps",
            theme: "Will → would",
            french: "Les diplomates européens pensaient que la guerre se terminerait en quelques semaines, mais le conflit s'est enlisé durablement.",
            reference: "European diplomats thought that the war would end within a few weeks, but the conflict has dragged on for a long time.",
            grammar_points: ["Will → would (concordance)", "Within + durée future", "Drag on (phrasal verb : s'éterniser)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "concordance",
            lesson_title: "Concordance des Temps"
          },
          // 14. QUANTIFIEURS
          {
            id: 'en-gram-quant-6',
            category: "Quantifieurs",
            theme: "Neither... nor",
            french: "Ni Pékin ni Washington n'ont jusqu'à présent accepté de revenir à la table des négociations sur le climat.",
            reference: "Neither Beijing nor Washington has so far agreed to return to the negotiating table on climate.",
            grammar_points: ["Neither... nor + verbe au singulier (sujet rapproché)", "So far + present perfect", "Agree to + V"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "quantifieurs",
            lesson_title: "Quantifieurs"
          },
          {
            id: 'en-gram-quant-7',
            category: "Quantifieurs",
            theme: "Several",
            french: "Plusieurs banques centrales ont décidé de coordonner leur politique monétaire face à la résurgence de l'inflation.",
            reference: "Several central banks have decided to coordinate their monetary policy in response to the resurgence of inflation.",
            grammar_points: ["Several + nom pluriel dénombrable", "In response to + nom", "Decide to + V"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "quantifieurs",
            lesson_title: "Quantifieurs"
          },
          {
            id: 'en-gram-quant-8',
            category: "Quantifieurs",
            theme: "Plenty of",
            french: "Les pays émergents disposent d'une abondance de ressources naturelles, mais peinent à les transformer en avantage économique durable.",
            reference: "Emerging countries have plenty of natural resources but struggle to turn them into a lasting economic advantage.",
            grammar_points: ["Plenty of + nom pluriel/indénombrable", "Turn into + nom (transformer en)", "Struggle to + V"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "quantifieurs",
            lesson_title: "Quantifieurs"
          },
          {
            id: 'en-gram-quant-9',
            category: "Quantifieurs",
            theme: "All + nom pluriel",
            french: "Tous les États membres de l'OTAN sont désormais tenus de consacrer un pourcentage minimal de leur PIB à la défense.",
            reference: "All NATO member states are now required to allocate a minimum percentage of their GDP to defense.",
            grammar_points: ["All + nom pluriel (sans 'of the')", "Are required to + V (obligation)", "Allocate + obj + to + nom"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "quantifieurs",
            lesson_title: "Quantifieurs"
          },
          {
            id: 'en-gram-quant-10',
            category: "Quantifieurs",
            theme: "Each + singulier",
            french: "Chaque pays signataire de l'accord de Paris doit soumettre tous les cinq ans une nouvelle contribution nationale.",
            reference: "Each country that has signed the Paris agreement must submit a new national contribution every five years.",
            grammar_points: ["Each + singulier + V au singulier", "Every + nombre + nom pluriel", "Has signed (present perfect)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "quantifieurs",
            lesson_title: "Quantifieurs"
          },
          // 15. SUBJONCTIF
          {
            id: 'en-gram-subj-6',
            category: "Subjonctif",
            theme: "Suggest that + base",
            french: "Les économistes ont suggéré que la Banque centrale européenne adopte une stratégie de communication plus transparente.",
            reference: "Economists have suggested that the European Central Bank adopt a more transparent communication strategy.",
            grammar_points: ["Suggest that + base verb (subjonctif)", "Pas de 's' à la 3e personne", "More + adj + nom"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "subjunctif",
            lesson_title: "Subjunctif et Structures Subjectives"
          },
          {
            id: 'en-gram-subj-7',
            category: "Subjonctif",
            theme: "Demand that + base",
            french: "Les manifestants ont exigé que le gouvernement organise immédiatement un référendum sur la réforme constitutionnelle.",
            reference: "Demonstrators demanded that the government immediately organize a referendum on the constitutional reform.",
            grammar_points: ["Demand that + base verb (subjonctif)", "Immediately + V (place adverbe)", "On + nom (sujet du référendum)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "subjunctif",
            lesson_title: "Subjunctif et Structures Subjectives"
          },
          {
            id: 'en-gram-subj-8',
            category: "Subjonctif",
            theme: "It is important that + base",
            french: "Il importe que les institutions multilatérales tiennent leurs engagements financiers envers les pays en développement.",
            reference: "It is important that multilateral institutions keep their financial commitments to developing countries.",
            grammar_points: ["It is important that + base verb", "Keep commitments (collocation)", "Commitments to + nom"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "subjunctif",
            lesson_title: "Subjunctif et Structures Subjectives"
          },
          {
            id: 'en-gram-subj-9',
            category: "Subjonctif",
            theme: "Wish + would",
            french: "Le secrétaire général de l'ONU souhaiterait que les puissances nucléaires renoncent à leur posture de dissuasion offensive.",
            reference: "The UN Secretary-General wishes that nuclear powers would give up their offensive deterrence posture.",
            grammar_points: ["Wish + would + base (regret/souhait)", "Give up + nom (renoncer à)", "Posture (faux ami)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "subjunctif",
            lesson_title: "Subjunctif et Structures Subjectives"
          },
          {
            id: 'en-gram-subj-10',
            category: "Subjonctif",
            theme: "As if + past",
            french: "Le gouvernement chinois agit comme si les sanctions occidentales n'avaient aucune incidence sur sa stratégie économique.",
            reference: "The Chinese government acts as if Western sanctions had no impact on its economic strategy.",
            grammar_points: ["As if + past (subjonctif)", "Construction hypothétique", "Have an impact on (collocation)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "subjunctif",
            lesson_title: "Subjunctif et Structures Subjectives"
          },
          // 16. INVERSIONS
          {
            id: 'en-gram-inv-6',
            category: "Inversions et emphase",
            theme: "Little did + sujet",
            french: "Les analystes financiers étaient loin d'imaginer que la faillite d'une banque régionale pourrait déclencher une telle panique.",
            reference: "Little did financial analysts imagine that the failure of a regional bank could trigger such a panic.",
            grammar_points: ["Little did + sujet + base (inversion)", "Construction emphatique", "Such + a + nom"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "inversions",
            lesson_title: "Inversions et Emphase"
          },
          {
            id: 'en-gram-inv-7',
            category: "Inversions et emphase",
            theme: "No sooner... than",
            french: "À peine la pandémie avait-elle pris fin que de nouvelles tensions sanitaires apparaissaient en Asie centrale.",
            reference: "No sooner had the pandemic ended than new health tensions emerged in Central Asia.",
            grammar_points: ["No sooner + had + V-en + than", "Inversion au pluperfect", "Central Asia (sans 'the')"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "inversions",
            lesson_title: "Inversions et Emphase"
          },
          {
            id: 'en-gram-inv-8',
            category: "Inversions et emphase",
            theme: "Such + was + nom",
            french: "L'ampleur de la crise migratoire était telle que les frontières européennes ont été temporairement rétablies dans plusieurs États membres.",
            reference: "Such was the scale of the migration crisis that European borders were temporarily reinstated in several member states.",
            grammar_points: ["Such + was + nom + that (inversion)", "Construction soutenue", "Were reinstated (passif)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "inversions",
            lesson_title: "Inversions et Emphase"
          },
          {
            id: 'en-gram-inv-9',
            category: "Inversions et emphase",
            theme: "Under no circumstances",
            french: "En aucun cas la Russie ne renoncera unilatéralement à son arsenal nucléaire stratégique.",
            reference: "Under no circumstances will Russia unilaterally give up its strategic nuclear arsenal.",
            grammar_points: ["Under no circumstances + auxiliaire + sujet", "Inversion après expression négative", "Give up (phrasal verb)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "inversions",
            lesson_title: "Inversions et Emphase"
          },
          {
            id: 'en-gram-inv-10',
            category: "Inversions et emphase",
            theme: "Nowhere",
            french: "Nulle part ailleurs en Europe la dette publique n'a augmenté aussi rapidement qu'en Italie au cours de la dernière décennie.",
            reference: "Nowhere else in Europe has public debt risen as quickly as in Italy over the past decade.",
            grammar_points: ["Nowhere + auxiliaire + sujet (inversion)", "As + adverbe + as (égalité)", "Over the past + durée"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "inversions",
            lesson_title: "Inversions et Emphase"
          },
          // 17. CONNECTEURS
          {
            id: 'en-gram-connect-6',
            category: "Connecteurs logiques",
            theme: "In contrast",
            french: "Le modèle scandinave repose sur une forte redistribution sociale. En revanche, les économies anglo-saxonnes privilégient la flexibilité du marché.",
            reference: "The Scandinavian model relies on strong social redistribution. In contrast, Anglo-Saxon economies prioritize market flexibility.",
            grammar_points: ["In contrast + virgule (opposition)", "Rely on + nom", "Prioritize (V transitif)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "connecteurs",
            lesson_title: "Connecteurs Logiques"
          },
          {
            id: 'en-gram-connect-7',
            category: "Connecteurs logiques",
            theme: "Owing to",
            french: "En raison des tensions diplomatiques persistantes, plusieurs sommets internationaux ont été reportés sine die.",
            reference: "Owing to persistent diplomatic tensions, several international summits have been postponed indefinitely.",
            grammar_points: ["Owing to + nom (cause, registre soutenu)", "Have been + V-en (present perfect passive)", "Indefinitely (= sine die)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "connecteurs",
            lesson_title: "Connecteurs Logiques"
          },
          {
            id: 'en-gram-connect-8',
            category: "Connecteurs logiques",
            theme: "Hence",
            french: "Les capitaux étrangers fuient progressivement les économies émergentes ; d'où la dépréciation observée sur la plupart des monnaies du Sud.",
            reference: "Foreign capital is gradually fleeing emerging economies; hence the depreciation observed in most Southern currencies.",
            grammar_points: ["Hence + nom (conséquence directe)", "Capital = indénombrable", "Observed (participe passé épithète)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "connecteurs",
            lesson_title: "Connecteurs Logiques"
          },
          {
            id: 'en-gram-connect-9',
            category: "Connecteurs logiques",
            theme: "Whilst",
            french: "Tandis que certains pays misent sur la transition énergétique, d'autres continuent d'exploiter intensivement leurs réserves de charbon.",
            reference: "Whilst some countries bet on the energy transition, others continue to intensively exploit their coal reserves.",
            grammar_points: ["Whilst (variante soutenue de 'while')", "Bet on + nom (parier sur)", "Intensively (place de l'adverbe)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "connecteurs",
            lesson_title: "Connecteurs Logiques"
          },
          {
            id: 'en-gram-connect-10',
            category: "Connecteurs logiques",
            theme: "All in all",
            french: "Dans l'ensemble, les négociations de Paris ont marqué une étape décisive dans la lutte contre le réchauffement climatique.",
            reference: "All in all, the Paris negotiations marked a decisive step in the fight against global warming.",
            grammar_points: ["All in all + virgule (conclusion globale)", "A step in + nom", "The fight against + nom"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "connecteurs",
            lesson_title: "Connecteurs Logiques"
          },
          // 18. VERBES IRRÉGULIERS
          {
            id: 'en-gram-irreg-6',
            category: "Verbes irréguliers",
            theme: "Drove (drive)",
            french: "La crise sanitaire a poussé des millions de salariés vers le télétravail, transformant durablement les modes d'organisation.",
            reference: "The health crisis drove millions of employees toward remote work, lastingly transforming organizational models.",
            grammar_points: ["Drove (past de drive, sens figuré : pousser)", "Toward + nom", "V-ing épithète (transforming)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "verbes-irreguliers",
            lesson_title: "Verbes Irréguliers"
          },
          {
            id: 'en-gram-irreg-7',
            category: "Verbes irréguliers",
            theme: "Took (take)",
            french: "L'Union européenne a pris des mesures sans précédent pour soutenir son industrie face à la concurrence chinoise.",
            reference: "The European Union took unprecedented measures to support its industry in the face of Chinese competition.",
            grammar_points: ["Took (past de take)", "In the face of + nom", "Take measures (collocation)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "verbes-irreguliers",
            lesson_title: "Verbes Irréguliers"
          },
          {
            id: 'en-gram-irreg-8',
            category: "Verbes irréguliers",
            theme: "Held (hold)",
            french: "La Banque centrale européenne a maintenu ses taux directeurs inchangés malgré la pression des marchés financiers.",
            reference: "The European Central Bank held its key rates unchanged despite the pressure of financial markets.",
            grammar_points: ["Held (past + V-en de hold)", "Despite + nom (≠ although)", "Unchanged (adjectif composé)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "verbes-irreguliers",
            lesson_title: "Verbes Irréguliers"
          },
          {
            id: 'en-gram-irreg-9',
            category: "Verbes irréguliers",
            theme: "Broke / chose",
            french: "Le gouvernement britannique a rompu avec la tradition diplomatique en choisissant de reconnaître unilatéralement le nouvel État.",
            reference: "The British government broke with diplomatic tradition by choosing to unilaterally recognize the new state.",
            grammar_points: ["Broke (past de break)", "Chose (past de choose)", "By + V-ing (manière)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "verbes-irreguliers",
            lesson_title: "Verbes Irréguliers"
          },
          {
            id: 'en-gram-irreg-10',
            category: "Verbes irréguliers",
            theme: "Sought / brought",
            french: "Les négociateurs ont cherché à apaiser les tensions et ont apporté de nouvelles propositions à la table des discussions.",
            reference: "The negotiators sought to ease tensions and brought new proposals to the discussion table.",
            grammar_points: ["Sought (past de seek)", "Brought (past de bring)", "Ease tensions (collocation)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "verbes-irreguliers",
            lesson_title: "Verbes Irréguliers"
          },
          // 19. CAUSATIVES
          {
            id: 'en-gram-caus-6',
            category: "Structures causatives",
            theme: "Have something repaired",
            french: "Le gouvernement français a fait réparer en urgence plusieurs centrales nucléaires affectées par des problèmes de corrosion.",
            reference: "The French government had several nuclear power plants repaired urgently after they were affected by corrosion issues.",
            grammar_points: ["Have + obj + V-en (faire faire)", "Repaired (past participle)", "Affected by + nom (passif)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "causatives",
            lesson_title: "Structures Causatives"
          },
          {
            id: 'en-gram-caus-7',
            category: "Structures causatives",
            theme: "Force somebody to V",
            french: "Les pressions économiques ont contraint plusieurs entreprises occidentales à quitter le marché russe en moins de six mois.",
            reference: "Economic pressures forced several Western companies to leave the Russian market in less than six months.",
            grammar_points: ["Force + somebody + to + V", "In less than + durée", "Pluriel 'pressures' (sens : multiples pressions)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "causatives",
            lesson_title: "Structures Causatives"
          },
          {
            id: 'en-gram-caus-8',
            category: "Structures causatives",
            theme: "Allow somebody to V",
            french: "L'accord-cadre signé à Doha permet aux deux parties de poursuivre les négociations sans interruption diplomatique.",
            reference: "The framework agreement signed in Doha allows both parties to continue negotiations without diplomatic interruption.",
            grammar_points: ["Allow + somebody + to + V", "Signed in + lieu (participe passé)", "Both parties (sans 'of the')"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "causatives",
            lesson_title: "Structures Causatives"
          },
          {
            id: 'en-gram-caus-9',
            category: "Structures causatives",
            theme: "Have somebody do (US)",
            french: "Le président américain a chargé son secrétaire d'État de rétablir les canaux diplomatiques avec Téhéran.",
            reference: "The American president had his Secretary of State restore diplomatic channels with Tehran.",
            grammar_points: ["Have + somebody + base verb (causatif US)", "Restore + nom", "Diplomatic channels (collocation)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "causatives",
            lesson_title: "Structures Causatives"
          },
          {
            id: 'en-gram-caus-10',
            category: "Structures causatives",
            theme: "Help (to) V",
            french: "L'aide internationale a permis à plusieurs pays africains de stabiliser leur balance commerciale après la crise sanitaire.",
            reference: "International aid helped several African countries to stabilize their trade balance after the health crisis.",
            grammar_points: ["Help + somebody + (to) + V", "'To' facultatif après help", "Trade balance (collocation)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "causatives",
            lesson_title: "Structures Causatives"
          },
          // 20. NUANCES LEXICALES
          {
            id: 'en-gram-lex-6',
            category: "Nuances lexicales",
            theme: "Remain vs stay",
            french: "Malgré les sanctions, l'économie russe demeure résiliente grâce à sa redirection vers les marchés asiatiques.",
            reference: "Despite sanctions, the Russian economy remains resilient thanks to its redirection toward Asian markets.",
            grammar_points: ["Remain (registre soutenu) vs stay (oral)", "Thanks to + nom", "Toward + nom (US) / towards (UK)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "nuances-lexicales",
            lesson_title: "Nuances Lexicales"
          },
          {
            id: 'en-gram-lex-7',
            category: "Nuances lexicales",
            theme: "A few vs few",
            french: "Quelques diplomates ont réussi à maintenir un canal de communication ouvert malgré la dégradation des relations bilatérales.",
            reference: "A few diplomats managed to keep a communication channel open despite the deterioration of bilateral relations.",
            grammar_points: ["A few (= quelques, positif)", "≠ few (peu, négatif)", "Keep + obj + adj (état)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "nuances-lexicales",
            lesson_title: "Nuances Lexicales"
          },
          {
            id: 'en-gram-lex-8',
            category: "Nuances lexicales",
            theme: "Prevent vs avoid",
            french: "Pour éviter une nouvelle crise des liquidités, les régulateurs ont imposé des exigences de fonds propres plus strictes aux banques.",
            reference: "To prevent another liquidity crisis, regulators imposed stricter capital requirements on banks.",
            grammar_points: ["Prevent (empêcher qu'un événement arrive)", "≠ avoid (éviter de subir)", "Impose + nom + on + nom"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "nuances-lexicales",
            lesson_title: "Nuances Lexicales"
          },
          {
            id: 'en-gram-lex-9',
            category: "Nuances lexicales",
            theme: "Recall vs remember",
            french: "Il convient de rappeler que la dette publique française a doublé en moins de quinze ans pour atteindre près de cent dix pour cent du PIB.",
            reference: "It is worth recalling that French public debt has doubled in less than fifteen years to reach nearly one hundred and ten percent of GDP.",
            grammar_points: ["Recall (rappeler à autrui, formel)", "≠ remember (se souvenir, soi-même)", "Has doubled (present perfect)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "nuances-lexicales",
            lesson_title: "Nuances Lexicales"
          },
          {
            id: 'en-gram-lex-10',
            category: "Nuances lexicales",
            theme: "Concern vs bother",
            french: "La crise migratoire continue de préoccuper les pays méditerranéens, qui voient leurs frontières maritimes constamment franchies.",
            reference: "The migration crisis continues to concern Mediterranean countries, which see their maritime borders constantly crossed.",
            grammar_points: ["Concern (préoccuper, soutenu)", "≠ bother (gêner, plus familier)", "See + obj + V-en (causatif perceptif)"],
            difficulty_level: "advanced",
            specialized: true,
            lesson_slug: "nuances-lexicales",
            lesson_title: "Nuances Lexicales"
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

  // Navigation functions (restreinte à la sous-liste filtrée par rubrique active)
  const goToPreviousSentence = useCallback(() => {
    if (!selectedPredefinedId || !currentSentence) return;

    const currentIndex = visibleSentences.findIndex(s => s.id === selectedPredefinedId);

    if (currentIndex > 0) {
      const previousSentence = visibleSentences[currentIndex - 1];
      loadPredefinedSentence(previousSentence.id);
    }
  }, [selectedPredefinedId, currentSentence, visibleSentences, loadPredefinedSentence]);

  const goToNextSentence = useCallback(() => {
    if (!selectedPredefinedId || !currentSentence) return;

    const currentIndex = visibleSentences.findIndex(s => s.id === selectedPredefinedId);

    if (currentIndex < visibleSentences.length - 1) {
      const nextSentence = visibleSentences[currentIndex + 1];
      loadPredefinedSentence(nextSentence.id);
    }
  }, [selectedPredefinedId, currentSentence, visibleSentences, loadPredefinedSentence]);


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

      // Navigation avec les flèches (seulement si pas dans textarea, et pas en mode examen actif)
      if (!currentSentence || event.target instanceof HTMLTextAreaElement) return;
      if (examPhase === 'active') return;

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
  }, [currentSentence, goToPreviousSentence, goToNextSentence, studentAnswer, isEvaluating, evaluateAnswer, examPhase]);

  const handleSelectGrammarTopic = useCallback((slug: string | null) => {
    setSelectedGrammarTopic(slug);
    // Charge la première phrase de la rubrique (ou la première phrase de la langue si "Toutes")
    const pool = slug
      ? predefinedSentences.filter(s => s.language === 'en' && s.lesson_slug === slug)
      : predefinedSentences.filter(s => s.language === 'en');
    if (pool.length > 0) {
      loadPredefinedSentence(pool[0].id);
    }
  }, [predefinedSentences, loadPredefinedSentence]);

  const showSidebar = language === 'en' && grammarTopics.length > 0 && examPhase !== 'active';

  return (
    <div className="min-h-screen bg-pr-gray-bg">
      {/* Layout principal : sidebar rubriques (anglais) + carte centrale */}
      <div className={`${showSidebar ? 'max-w-6xl' : 'max-w-3xl'} mx-auto px-6 py-4`}>
        <div className={showSidebar ? "lg:grid lg:grid-cols-[260px_minmax(0,1fr)] lg:gap-6" : ""}>

          {/* SIDEBAR — rubriques grammaticales (anglais uniquement, hors mode examen) */}
          {showSidebar && (
            <aside className="hidden lg:block">
              <div className="sticky top-4 bg-[#FFFEF8] rounded-2xl border border-dashed border-[rgba(78,55,30,0.22)] overflow-hidden shadow-[0_1px_0_rgba(78,55,30,0.08),0_8px_24px_rgba(78,55,30,0.06)]">
                <div className="px-4 py-3 border-b border-dashed border-[rgba(78,55,30,0.18)]">
                  <div className="carnet-eyebrow text-[10px] mb-0.5">Travailler un point</div>
                  <h2 className="font-lora text-[15px] text-carnet-ink leading-tight">Rubriques de grammaire</h2>
                </div>
                <nav className="max-h-[70vh] overflow-y-auto py-2">
                  <button
                    onClick={() => handleSelectGrammarTopic(null)}
                    className={`w-full text-left px-4 py-2 flex items-center justify-between gap-2 text-[12px] font-instrument transition-colors ${
                      selectedGrammarTopic === null
                        ? 'bg-[rgba(193,68,58,0.08)] text-carnet-red font-semibold'
                        : 'text-carnet-ink-soft hover:bg-[rgba(78,55,30,0.04)] hover:text-carnet-ink'
                    }`}
                  >
                    <span className="flex items-center gap-2 min-w-0">
                      <BookMarked className={`h-3.5 w-3.5 flex-shrink-0 ${selectedGrammarTopic === null ? 'text-carnet-red' : 'text-carnet-ink-mute'}`} />
                      <span className="truncate">Toutes les phrases</span>
                    </span>
                    <span className="text-[10px] tabular-nums text-carnet-ink-mute bg-[rgba(78,55,30,0.05)] border border-[rgba(78,55,30,0.12)] rounded-full px-1.5 py-0.5 flex-shrink-0">
                      {predefinedSentences.filter(s => s.language === 'en').length}
                    </span>
                  </button>
                  <div className="my-1 mx-3 border-t border-dashed border-[rgba(78,55,30,0.15)]" />
                  {grammarTopics.map(topic => {
                    const active = selectedGrammarTopic === topic.slug;
                    return (
                      <button
                        key={topic.slug}
                        onClick={() => handleSelectGrammarTopic(topic.slug)}
                        className={`w-full text-left px-4 py-2 flex items-center justify-between gap-2 text-[12px] font-instrument transition-colors ${
                          active
                            ? 'bg-[rgba(193,68,58,0.08)] text-carnet-red font-semibold'
                            : 'text-carnet-ink-soft hover:bg-[rgba(78,55,30,0.04)] hover:text-carnet-ink'
                        }`}
                      >
                        <span className="flex items-center gap-2 min-w-0">
                          <BookOpen className={`h-3.5 w-3.5 flex-shrink-0 ${active ? 'text-carnet-red' : 'text-carnet-ink-mute'}`} />
                          <span className="truncate">{topic.title}</span>
                        </span>
                        <span className={`text-[10px] tabular-nums rounded-full px-1.5 py-0.5 flex-shrink-0 border ${
                          active
                            ? 'bg-carnet-red text-[#FBF6EA] border-carnet-red'
                            : 'bg-[rgba(78,55,30,0.05)] text-carnet-ink-mute border-[rgba(78,55,30,0.12)]'
                        }`}>
                          {topic.count}
                        </span>
                      </button>
                    );
                  })}
                </nav>
                {selectedGrammarTopic && (
                  <div className="px-4 py-3 border-t border-dashed border-[rgba(78,55,30,0.18)] bg-[rgba(251,246,234,0.6)]">
                    <button
                      onClick={() => handleSelectGrammarTopic(null)}
                      className="w-full text-[11px] font-instrument font-semibold uppercase tracking-[0.08em] text-carnet-red hover:underline"
                    >
                      ← Voir toutes les phrases
                    </button>
                  </div>
                )}
              </div>
            </aside>
          )}

          {/* CARTE PRINCIPALE */}
          <div className="space-y-3">

        {/* CARTE UNIFIÉE : titre + langues + mode examen + phrase + nav + traduction */}
        <>
          <Card className="relative bg-[#FFFEF8] rounded-2xl border border-dashed border-[rgba(78,55,30,0.22)] overflow-hidden shadow-[0_1px_0_rgba(78,55,30,0.08),0_8px_24px_rgba(78,55,30,0.06)]">
            {/* Barre rouge supérieure : statique en idle/setup/summary, compte à rebours en active */}
            {examPhase === 'active' ? (
              <>
                <div className="absolute top-0 left-0 w-full h-[3px] bg-carnet-red/15"></div>
                <div
                  className="absolute top-0 left-0 h-[3px] bg-carnet-red transition-[width] duration-1000 ease-linear z-10"
                  style={{ width: `${(examQuestionTimer / QUESTION_DURATION) * 100}%` }}
                />
              </>
            ) : (
              <div className="absolute top-0 left-0 w-full h-[3px] bg-carnet-red"></div>
            )}

            {/* SECTION 1 (toujours visible) : Titre + sélecteur de langue + Mode examen */}
              <div className="flex items-center justify-between gap-3 px-5 sm:px-6 pt-4 pb-3 border-b border-dashed border-[rgba(78,55,30,0.18)] flex-wrap">
                <div className="flex items-center gap-4 flex-wrap">
                  <h1 className="font-lora text-xl text-carnet-ink leading-none">Thème grammatical</h1>
                  <ToggleGroup
                    type="single"
                    value={language}
                    onValueChange={(value) => {
                      if (value) {
                        const newLang = value as 'en' | 'de' | 'es';
                        setLanguage(newLang);
                        const firstSentence = predefinedSentences.find(s => s.language === newLang);
                        if (firstSentence) {
                          loadPredefinedSentence(firstSentence.id);
                        } else {
                          resetExercise();
                        }
                      }
                    }}
                    className="bg-[rgba(78,55,30,0.05)] rounded-lg p-0.5 border border-dashed border-[rgba(78,55,30,0.2)]"
                  >
                    <ToggleGroupItem value="de" className="rounded px-3 h-7 text-[12px] font-instrument font-medium text-carnet-ink-soft data-[state=on]:bg-[#FFFEF8] data-[state=on]:text-carnet-ink data-[state=on]:shadow-sm">
                      Allemand
                    </ToggleGroupItem>
                    <ToggleGroupItem value="en" className="rounded px-3 h-7 text-[12px] font-instrument font-medium text-carnet-ink-soft data-[state=on]:bg-[#FFFEF8] data-[state=on]:text-carnet-ink data-[state=on]:shadow-sm">
                      Anglais
                    </ToggleGroupItem>
                    <ToggleGroupItem value="es" className="rounded px-3 h-7 text-[12px] font-instrument font-medium text-carnet-ink-soft data-[state=on]:bg-[#FFFEF8] data-[state=on]:text-carnet-ink data-[state=on]:shadow-sm">
                      Espagnol
                    </ToggleGroupItem>
                  </ToggleGroup>
                </div>

                <div className="flex items-center gap-2">
                  {/* Compte à rebours par question (mode examen actif) */}
                  {examPhase === 'active' && (
                    <div className={`flex items-center gap-1 px-2 py-0.5 rounded-md text-[12px] font-mono border tabular-nums ${
                      examQuestionTimer <= 10
                        ? 'bg-carnet-red text-white border-carnet-red animate-pulse'
                        : 'bg-carnet-red-pale text-carnet-red border-carnet-red-soft'
                    }`}>
                      <Clock className="h-3 w-3" />
                      {examQuestionTimer}s
                    </div>
                  )}
                  {/* Indicateur progression série (mode examen actif) */}
                  {examPhase === 'active' && (
                    <div className="text-[11px] text-carnet-ink-mute tabular-nums hidden sm:flex items-center gap-1 font-instrument">
                      <span className="font-semibold text-carnet-ink">{examIndex + 1}</span>
                      <span className="opacity-50">/{examQueue.length}</span>
                    </div>
                  )}
                  <Button
                    size="sm"
                    onClick={() => examPhase === 'idle' ? openExamSetup() : exitExam()}
                    className={
                      examPhase !== 'idle'
                        ? "h-8 px-3 text-[12px] font-instrument bg-carnet-ink hover:bg-carnet-ink/90 text-[#FBF6EA] rounded-md flex items-center gap-1.5"
                        : "h-8 px-3 text-[12px] font-instrument bg-[#FFFEF8] border border-dashed border-[rgba(78,55,30,0.25)] text-carnet-ink-soft hover:bg-[rgba(193,68,58,0.08)] hover:text-carnet-red hover:border-[rgba(193,68,58,0.35)] rounded-md flex items-center gap-1.5"
                    }
                  >
                    {examPhase !== 'idle' ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5" />}
                    {examPhase !== 'idle' ? "Quitter" : "Mode examen"}
                  </Button>
                </div>
              </div>

            {/* SECTION 2+ (conditionnelle) : setup examen / récap examen / phrase + nav + traduction / empty state */}
            {examPhase === 'setup' ? (
              <div className="px-5 sm:px-6 py-7">
                <div className="text-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.25)] flex items-center justify-center mx-auto mb-3">
                    <Play className="h-5 w-5 text-carnet-red" />
                  </div>
                  <div className="carnet-eyebrow text-[10px] mb-1">Mode examen</div>
                  <h3 className="font-lora text-2xl text-carnet-ink mb-1">
                    Une minute, <em className="font-lora italic text-carnet-red">une phrase</em>.
                  </h3>
                  <p className="text-[13px] text-carnet-ink-soft font-instrument">Choisis ta configuration avant de démarrer.</p>
                </div>

                <div className="space-y-5 max-w-md mx-auto">
                  <div>
                    <label className="carnet-eyebrow text-[10px] mb-2 block">
                      Niveau de difficulté
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {([
                        { value: 'all', label: 'Toutes' },
                        { value: 'intermediate', label: 'Intermédiaire' },
                        { value: 'advanced', label: 'Avancé' },
                        { value: 'specialized', label: 'Spécialisé' },
                      ] as { value: ExamDifficulty; label: string }[]).map(opt => (
                        <button
                          key={opt.value}
                          onClick={() => setExamConfig(c => ({ ...c, difficulty: opt.value }))}
                          className={`h-10 rounded-md border text-[13px] font-instrument font-medium transition-all ${
                            examConfig.difficulty === opt.value
                              ? 'bg-carnet-red text-[#FBF6EA] border-carnet-red shadow-[0_2px_8px_rgba(196,90,53,0.25)]'
                              : 'bg-[#FFFEF8] text-carnet-ink-soft border-dashed border-[rgba(78,55,30,0.25)] hover:border-[rgba(193,68,58,0.4)] hover:text-carnet-red'
                          }`}
                        >
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="carnet-eyebrow text-[10px] mb-2 block">
                      Nombre de questions
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      {[5, 10, 20].map(n => (
                        <button
                          key={n}
                          onClick={() => setExamConfig(c => ({ ...c, questionCount: n }))}
                          className={`h-12 rounded-md border font-lora text-xl transition-all ${
                            examConfig.questionCount === n
                              ? 'bg-carnet-red text-[#FBF6EA] border-carnet-red shadow-[0_2px_8px_rgba(196,90,53,0.25)]'
                              : 'bg-[#FFFEF8] text-carnet-ink border-dashed border-[rgba(78,55,30,0.25)] hover:border-[rgba(193,68,58,0.4)] hover:text-carnet-red'
                          }`}
                        >
                          {n}
                        </button>
                      ))}
                    </div>
                    <p className="text-[11px] text-carnet-ink-mute font-instrument text-center mt-2">
                      Soit ~{examConfig.questionCount} minute{examConfig.questionCount > 1 ? 's' : ''} d'épreuve
                    </p>
                  </div>

                  <Button
                    onClick={startExam}
                    className="w-full h-12 bg-carnet-red hover:bg-carnet-red text-[#FBF6EA] rounded-lg font-instrument font-semibold shadow-[0_3px_10px_rgba(196,90,53,0.30)] hover:shadow-[0_5px_16px_rgba(196,90,53,0.40)] transition-all"
                  >
                    <Play className="h-4 w-4 mr-2" />
                    Démarrer
                  </Button>
                </div>
              </div>
            ) : examPhase === 'summary' ? (
              (() => {
                const total = examResults.length;
                const avg = total > 0 ? examResults.reduce((s, r) => s + r.score, 0) / total : 0;
                const max = total > 0 ? Math.max(...examResults.map(r => r.score)) : 0;
                const timeoutCount = examResults.filter(r => r.timedOut).length;
                return (
                  <div className="px-5 sm:px-6 py-7">
                    <div className="text-center mb-5">
                      <div className="w-12 h-12 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.25)] flex items-center justify-center mx-auto mb-3">
                        <CheckCircle className="h-6 w-6 text-carnet-red" />
                      </div>
                      <div className="carnet-eyebrow text-[10px] mb-1">Récapitulatif</div>
                      <h3 className="font-lora text-2xl text-carnet-ink mb-1">
                        Série <em className="font-lora italic text-carnet-red">terminée</em>.
                      </h3>
                      <p className="text-[13px] text-carnet-ink-soft font-instrument">
                        {total} question{total > 1 ? 's' : ''} · {timeoutCount} dépassement{timeoutCount > 1 ? 's' : ''} de temps
                      </p>
                    </div>

                    <div className="grid grid-cols-3 gap-2 mb-5 max-w-md mx-auto">
                      <div className="bg-[rgba(78,55,30,0.04)] rounded-lg p-3 text-center border border-dashed border-[rgba(78,55,30,0.22)]">
                        <div className="carnet-eyebrow text-[10px] mb-1">Moyenne</div>
                        <div className="font-lora text-2xl text-carnet-ink">{avg.toFixed(1)}<span className="text-base text-carnet-ink-mute">/10</span></div>
                      </div>
                      <div className="bg-[rgba(78,55,30,0.04)] rounded-lg p-3 text-center border border-dashed border-[rgba(78,55,30,0.22)]">
                        <div className="carnet-eyebrow text-[10px] mb-1">Meilleure</div>
                        <div className="font-lora text-2xl text-carnet-ink">{max}<span className="text-base text-carnet-ink-mute">/10</span></div>
                      </div>
                      <div className="bg-[rgba(78,55,30,0.04)] rounded-lg p-3 text-center border border-dashed border-[rgba(78,55,30,0.22)]">
                        <div className="carnet-eyebrow text-[10px] mb-1">Time-out</div>
                        <div className="font-lora text-2xl text-carnet-ink">{timeoutCount}</div>
                      </div>
                    </div>

                    {examResults.length > 0 && (
                      <div className="max-w-md mx-auto mb-5">
                        <div className="carnet-eyebrow text-[10px] mb-2">Détail par question</div>
                        <div className="space-y-1.5 max-h-[180px] overflow-y-auto pr-1">
                          {examResults.map((r, i) => (
                            <div key={i} className="flex items-center justify-between gap-2 px-3 py-2 bg-[rgba(78,55,30,0.03)] border border-dashed border-[rgba(78,55,30,0.18)] rounded-md text-[12px]">
                              <span className="truncate text-carnet-ink-soft flex-1 font-instrument">
                                <span className="carnet-hand italic text-carnet-red text-[15px] mr-1.5">{i + 1}.</span>
                                {r.french.length > 50 ? `${r.french.substring(0, 50)}…` : r.french}
                              </span>
                              <div className="flex items-center gap-1.5 flex-shrink-0">
                                {r.timedOut && (
                                  <span className="text-[9px] font-instrument uppercase tracking-wider text-carnet-red bg-[rgba(193,68,58,0.08)] border border-dashed border-[rgba(193,68,58,0.3)] px-1.5 py-0.5 rounded font-semibold">
                                    Time-out
                                  </span>
                                )}
                                <span className={`font-mono font-semibold tabular-nums ${
                                  r.score >= 7 ? 'text-carnet-ink' : r.score >= 4 ? 'text-carnet-ink-soft' : 'text-carnet-red'
                                }`}>
                                  {r.score}/10
                                </span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    <div className="flex gap-2 max-w-md mx-auto">
                      <Button
                        onClick={() => { setExamPhase('setup'); }}
                        className="flex-1 h-10 bg-carnet-red hover:bg-carnet-red text-[#FBF6EA] rounded-lg font-instrument font-semibold"
                      >
                        <Play className="h-4 w-4 mr-1.5" />
                        Refaire
                      </Button>
                      <Button
                        onClick={exitExam}
                        className="flex-1 h-10 bg-[#FFFEF8] border border-dashed border-[rgba(78,55,30,0.25)] text-carnet-ink-soft hover:bg-[rgba(78,55,30,0.05)] rounded-lg font-instrument font-semibold"
                      >
                        Quitter
                      </Button>
                    </div>
                  </div>
                );
              })()
            ) : currentSentence ? (
              <>
              {/* SECTION 2 : Bandeau PHRASE À TRADUIRE + badges + nav inline */}
              <div className="flex items-center justify-between gap-3 px-5 sm:px-6 pt-3 pb-2 flex-wrap">
                <div className="flex items-center gap-2.5">
                  <Languages className="h-4 w-4 text-carnet-red flex-shrink-0" />
                  <div className="carnet-eyebrow text-[10px]">
                    {showPerfectAnswer ? "Traduction correcte" : "Phrase à traduire"}
                  </div>
                  {currentSentence.specialized && (
                    <Badge className="bg-[rgba(193,68,58,0.08)] text-carnet-red border border-dashed border-[rgba(193,68,58,0.35)] hover:bg-[rgba(193,68,58,0.08)] rounded-full px-2 py-0 h-5 font-instrument font-semibold text-[9px] uppercase tracking-wider">Spécialisé</Badge>
                  )}
                  {currentSentence.difficulty_level && (
                    <Badge className={`${currentSentence.difficulty_level === 'advanced' ? 'bg-carnet-ink text-[#FBF6EA] border-carnet-ink' : 'bg-[rgba(78,55,30,0.05)] text-carnet-ink-soft border-dashed border-[rgba(78,55,30,0.22)]'} border rounded-full px-2 py-0 h-5 font-instrument font-semibold text-[9px] uppercase tracking-wider`}>
                      {currentSentence.difficulty_level === 'advanced' ? 'Avancé' : 'Intermédiaire'}
                    </Badge>
                  )}
                </div>

                {/* Bouton "Autre phrase" + nav arrows inline (caché en examen actif) */}
                {examPhase !== 'active' && (
                <div className="flex items-center gap-1.5">
                  <Select value={selectedPredefinedId} onValueChange={loadPredefinedSentence}>
                    <SelectTrigger
                      className="h-7 px-2 gap-1.5 text-[11px] font-instrument font-semibold uppercase tracking-[0.08em] text-carnet-ink-soft bg-[#FFFEF8] border border-dashed border-[rgba(78,55,30,0.25)] hover:border-[rgba(193,68,58,0.35)] hover:text-carnet-red rounded-md transition-colors w-auto [&>span]:line-clamp-1 [&>svg]:h-3 [&>svg]:w-3 [&>svg]:opacity-60"
                      aria-label="Choisir une autre phrase"
                    >
                      <BookMarked className="h-3 w-3 text-carnet-red flex-shrink-0" />
                      <span>Autre phrase</span>
                    </SelectTrigger>
                    <SelectContent className="max-h-[500px] min-w-[600px] bg-white border border-pr-gray-light shadow-xl rounded-xl">
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
                          <div className={`px-4 py-2.5 font-semibold text-[11px] uppercase tracking-[0.12em] border-b ${getCategoryColor(category)} flex items-center gap-2`}>
                            {getCategoryIcon(category)}
                            <span>{category}</span>
                            <span className="ml-auto text-[10px] font-semibold text-pr-gray-mid bg-white px-2 py-0.5 rounded-full border border-pr-gray-light">
                              {sentences.length}
                            </span>
                          </div>
                          <div className="space-y-1">
                            {sentences.map((sentence) => (
                              <SelectItem
                                key={sentence.id}
                                value={sentence.id}
                                className="mx-2 px-4 py-3 cursor-pointer hover:bg-carnet-red-pale focus:bg-carnet-red-pale transition-colors rounded-lg"
                              >
                                <div className="flex items-start gap-3 w-full">
                                  <div className="flex-shrink-0 mt-0.5">
                                    {sentence.specialized ? (
                                      <Star className="h-4 w-4 text-carnet-red" />
                                    ) : (
                                      <BookOpen className="h-4 w-4 text-pr-gray-mid" />
                                    )}
                                  </div>
                                  <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium text-pr-black leading-tight">
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

                  {selectedPredefinedId && (
                    <>
                      <div className="w-px h-4 bg-[rgba(78,55,30,0.2)] mx-0.5" />
                      <button
                        onClick={goToPreviousSentence}
                        disabled={visibleSentences.findIndex(s => s.id === selectedPredefinedId) <= 0}
                        className="p-1.5 rounded-md text-carnet-ink-mute hover:text-carnet-red hover:bg-[rgba(193,68,58,0.08)] disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-carnet-ink-mute transition-colors"
                        title="Phrase précédente (←)"
                        aria-label="Phrase précédente"
                      >
                        <ChevronLeft className="h-4 w-4" />
                      </button>
                      <span className="text-[11px] text-carnet-ink-mute tabular-nums font-instrument px-1 min-w-[40px] text-center">
                        <span className="font-semibold text-carnet-ink">{Math.max(0, visibleSentences.findIndex(s => s.id === selectedPredefinedId)) + 1}</span>
                        <span className="opacity-50"> / {visibleSentences.length}</span>
                      </span>
                      <button
                        onClick={goToNextSentence}
                        disabled={visibleSentences.findIndex(s => s.id === selectedPredefinedId) === visibleSentences.length - 1}
                        className="p-1.5 rounded-md text-carnet-ink-mute hover:text-carnet-red hover:bg-[rgba(193,68,58,0.08)] disabled:opacity-30 disabled:hover:bg-transparent disabled:hover:text-carnet-ink-mute transition-colors"
                        title="Phrase suivante (→)"
                        aria-label="Phrase suivante"
                      >
                        <ChevronRight className="h-4 w-4" />
                      </button>
                    </>
                  )}
                </div>
                )}
              </div>

              {/* Phrase à traduire (cliquable pour corriger / révéler la réponse) */}
              <div
                className="px-5 sm:px-6 pb-4 pt-1 cursor-pointer hover:bg-[rgba(78,55,30,0.04)] transition-colors"
                onClick={() => {
                  if (!isEvaluating) {
                    if (studentAnswer.trim()) {
                      evaluateAnswer();
                    } else {
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
                <p className="font-lora text-2xl md:text-[28px] text-carnet-ink leading-[1.3] text-center py-2 transition-all duration-300">
                  {showPerfectAnswer ? currentSentence.reference : currentSentence.french}
                </p>
              </div>

              {/* Séparateur pointillé entre phrase et zone de réponse */}
              <div className="border-t border-dashed border-[rgba(78,55,30,0.18)]" />

              {/* Section traduction — collée à la phrase */}
              <div className="px-5 sm:px-6 pt-3 pb-4">
                <div className="flex items-center justify-between mb-2 gap-3 flex-wrap">
                  <label className="carnet-eyebrow text-[10px] flex items-center gap-2">
                    <Code className="h-3.5 w-3.5 text-carnet-red" />
                    Votre traduction en {language === 'de' ? 'allemand' : language === 'en' ? 'anglais' : 'espagnol'}
                  </label>

                  {/* Toggle écrit / oral — compact */}
                  <div className="flex items-center gap-0.5 bg-[rgba(78,55,30,0.05)] p-0.5 rounded-md border border-dashed border-[rgba(78,55,30,0.2)]">
                    <button
                      onClick={() => setInputMode('text')}
                      className={`flex items-center gap-1.5 rounded px-2 py-1 text-[12px] font-instrument font-medium transition-all ${inputMode === 'text'
                        ? 'bg-[#FFFEF8] text-carnet-ink shadow-sm'
                        : 'bg-transparent text-carnet-ink-mute hover:bg-[#FFFEF8]/60'
                        }`}
                    >
                      <Keyboard className="h-3.5 w-3.5" />
                      <span className="hidden sm:inline">Écrit</span>
                    </button>
                    <button
                      onClick={() => setInputMode('voice')}
                      className={`flex items-center gap-1.5 rounded px-2 py-1 text-[12px] font-instrument font-medium transition-all ${inputMode === 'voice'
                        ? 'bg-[#FFFEF8] text-carnet-ink shadow-sm'
                        : 'bg-transparent text-carnet-ink-mute hover:bg-[#FFFEF8]/60'
                        }`}
                    >
                      <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
                      </svg>
                      <span className="hidden sm:inline">Oral</span>
                    </button>
                  </div>
                </div>

                <div className="relative">
                  {inputMode === 'text' ? (
                    <Textarea
                      value={studentAnswer}
                      onChange={(e) => setStudentAnswer(e.target.value)}
                      placeholder={`Écrivez votre traduction en ${language === 'de' ? 'allemand' : language === 'en' ? 'anglais' : 'espagnol'}…`}
                      className="min-h-[110px] text-lg resize-none p-3.5 rounded-lg border border-dashed border-[rgba(78,55,30,0.25)] focus:border-carnet-red focus:ring-2 focus:ring-carnet-red/20 transition-colors bg-[rgba(78,55,30,0.04)] text-carnet-ink placeholder:text-carnet-ink-mute font-instrument"
                      disabled={isEvaluating}
                    />
                  ) : (
                    <div className="space-y-3">
                      <VoiceRecorder
                        language={language}
                        onTranscriptionComplete={(text) => setStudentAnswer(text)}
                        disabled={isEvaluating}
                      />

                      {studentAnswer && (
                        <div>
                          <div className="flex items-center justify-between mb-1.5 gap-3">
                            <label className="text-[12px] font-instrument font-medium text-carnet-ink-soft">
                              Texte transcrit
                            </label>
                            <span className="text-[9px] font-instrument font-semibold uppercase tracking-[0.12em] text-carnet-red bg-[rgba(193,68,58,0.08)] border border-dashed border-[rgba(193,68,58,0.3)] px-2 py-0.5 rounded-full">
                              Éditable
                            </span>
                          </div>
                          <Textarea
                            value={studentAnswer}
                            onChange={(e) => setStudentAnswer(e.target.value)}
                            placeholder="Le texte transcrit apparaîtra ici et sera modifiable…"
                            className="min-h-[80px] text-base resize-none p-3 rounded-lg border border-dashed border-[rgba(78,55,30,0.25)] focus:border-carnet-red focus:ring-2 focus:ring-carnet-red/20 transition-colors bg-[#FFFEF8] text-carnet-ink placeholder:text-carnet-ink-mute font-instrument"
                            disabled={isEvaluating}
                          />
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Bouton corriger compact */}
                <Button
                  onClick={evaluateAnswer}
                  disabled={!studentAnswer.trim() || isEvaluating}
                  className="w-full mt-3 h-11 text-[14px] font-semibold text-white rounded-lg bg-carnet-red hover:bg-carnet-red shadow-[0_3px_10px_rgba(196,90,53,0.30)] hover:shadow-[0_5px_16px_rgba(196,90,53,0.40)] transition-all duration-200 disabled:opacity-50 disabled:shadow-none"
                >
                  {isEvaluating ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Correction en cours…
                    </>
                  ) : (
                    <>
                      <CheckCircle className="mr-2 h-4 w-4" />
                      Corriger ma traduction
                    </>
                  )}
                </Button>

                {/* Hint clavier minuscule en bas (caché en mode examen actif) */}
                {selectedPredefinedId && examPhase !== 'active' && (
                  <div className="text-[10px] font-instrument uppercase tracking-[0.10em] text-carnet-ink-mute text-center mt-2.5 opacity-80">
                    ← → flèches du clavier pour naviguer
                  </div>
                )}
                {/* Hint mode examen actif */}
                {examPhase === 'active' && (
                  <div className="text-[10px] font-instrument uppercase tracking-[0.10em] text-carnet-ink-mute text-center mt-2.5 opacity-80">
                    {feedbackLoaded ? "Passage à la question suivante…" : examQuestionTimer <= 10 ? "Temps presque écoulé !" : "Tape ta traduction et clique sur Corriger"}
                  </div>
                )}
              </div>
              </>
            ) : (
              <div className="flex flex-col items-center justify-center px-5 sm:px-6 py-10 text-carnet-ink-mute">
                <div className="w-12 h-12 rounded-xl bg-[rgba(193,68,58,0.08)] border border-dashed border-[rgba(193,68,58,0.3)] flex items-center justify-center mb-3">
                  <Languages className="h-5 w-5 text-carnet-red" />
                </div>
                <p className="font-lora text-lg text-carnet-ink mb-1">Aucune phrase sélectionnée</p>
                <p className="text-carnet-ink-mute text-[13px] font-instrument text-center">Choisissez une phrase dans le catalogue ci-dessous.</p>
              </div>
            )}
          </Card>

        </>

        {/* Section correction - Affichage immédiat de la réponse */}
        {showPerfectAnswer && currentSentence && (
          <div className="relative bg-[#FFFEF8] border border-dashed border-[rgba(78,55,30,0.22)] shadow-[0_1px_0_rgba(78,55,30,0.08),0_8px_24px_rgba(78,55,30,0.06)] mt-6 overflow-hidden rounded-2xl">
            <div className="absolute top-0 left-0 w-full h-[3px] bg-carnet-red"></div>
            <div className="bg-[rgba(251,246,234,0.7)] border-b border-dashed border-[rgba(78,55,30,0.18)] px-5 sm:px-7 pt-5 pb-4">
              <div className="flex items-center justify-between gap-3 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.25)] flex items-center justify-center flex-shrink-0">
                    <BookOpen className="h-5 w-5 text-carnet-red" />
                  </div>
                  <div>
                    <div className="carnet-eyebrow text-[10px]">Correction & analyse</div>
                    <h3 className="font-lora text-[20px] sm:text-[22px] text-carnet-ink leading-tight mt-0.5">
                      La <em className="font-lora italic text-carnet-red">référence</em>, point par point.
                    </h3>
                  </div>
                </div>
                <span className="text-[10px] font-instrument font-semibold text-carnet-red bg-[rgba(193,68,58,0.08)] border border-dashed border-[rgba(193,68,58,0.35)] px-2.5 py-1 rounded-full uppercase tracking-[0.12em]">
                  Référence
                </span>
              </div>
            </div>
            <div className="grid md:grid-cols-2">
              {/* Colonne Gauche : La Phrase Correcte */}
              <div className="p-5 sm:p-7 border-b md:border-b-0 md:border-r border-dashed border-[rgba(78,55,30,0.18)]">
                <div className="carnet-eyebrow text-[10px] mb-3">Traduction correcte</div>
                <div className="relative pl-4 border-l-[3px] border-carnet-red">
                  <p className="font-lora italic text-[19px] md:text-[21px] text-carnet-ink leading-[1.45]">
                    {currentSentence.reference}
                  </p>
                </div>

                {currentSentence.glossary && Object.keys(currentSentence.glossary).length > 0 && (
                  <div className="mt-6 pt-5 border-t border-dashed border-[rgba(78,55,30,0.18)]">
                    <h4 className="carnet-eyebrow text-[10px] mb-3 flex items-center gap-2">
                      <BookMarked className="h-3 w-3 text-carnet-red" />
                      Vocabulaire clé
                    </h4>
                    <div className="grid gap-0.5">
                      {Object.entries(currentSentence.glossary).map(([fr, de], index) => (
                        <div key={index} className="flex items-center justify-between text-[13px] font-instrument group hover:bg-[rgba(78,55,30,0.04)] px-2 py-1.5 rounded-md transition-colors">
                          <span className="text-carnet-ink-soft">{fr}</span>
                          <span className="flex-1 mx-3 border-t border-dashed border-[rgba(78,55,30,0.2)]"></span>
                          <span className="font-lora italic text-carnet-ink">{de}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Colonne Droite : Points techniques */}
              <div className="p-5 sm:p-7">
                {currentSentence.grammar_points && currentSentence.grammar_points.length > 0 && (
                  <div className="mb-6">
                    <h3 className="carnet-eyebrow text-[10px] mb-3 flex items-center gap-2">
                      <Target className="h-3 w-3 text-carnet-red" />
                      Points de grammaire
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {currentSentence.grammar_points.map((point, index) => (
                        <span key={index} className="inline-flex items-center px-3 py-1 rounded-full text-[12px] font-instrument font-medium bg-[rgba(78,55,30,0.04)] text-carnet-ink-soft border border-dashed border-[rgba(78,55,30,0.22)]">
                          {point}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {currentSentence.notes && currentSentence.notes.length > 0 && (
                  <div>
                    <h3 className="carnet-eyebrow text-[10px] mb-3 flex items-center gap-2">
                      <AlertCircle className="h-3 w-3 text-carnet-red" />
                      Points de vigilance
                    </h3>
                    <ul className="space-y-2">
                      {currentSentence.notes.map((note, index) => (
                        <li key={index} className="flex items-start gap-2.5 text-[13px] font-instrument text-carnet-ink-soft bg-[rgba(193,68,58,0.06)] p-3 rounded-lg border border-dashed border-[rgba(193,68,58,0.3)]">
                          <span className="carnet-hand italic text-carnet-red text-[16px] leading-none mt-0.5 flex-shrink-0" style={{ transform: 'rotate(-4deg)', display: 'inline-block' }}>!</span>
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
              <div className="p-4 border-t border-dashed border-[rgba(78,55,30,0.18)] bg-[rgba(251,246,234,0.7)] flex items-center justify-center gap-3">
                <div className="relative">
                  <div className="h-3 w-3 rounded-full bg-carnet-red animate-ping absolute"></div>
                  <div className="h-3 w-3 rounded-full bg-carnet-red relative"></div>
                </div>
                <span className="text-sm font-instrument text-carnet-ink-soft animate-pulse">
                  L'IA analyse votre réponse en détail…
                </span>
              </div>
            )}
          </div>
        )}

        {/* Section correction OpenAI - Affichage après chargement */}
        {evaluation && feedbackLoaded && (
          <div className="mt-6 animate-in slide-in-from-bottom-4 duration-700">
            {/* Copie corrigée — style carnet stylo rouge */}
            <div className="relative bg-[#FFFEF8] rounded-2xl border border-dashed border-[rgba(78,55,30,0.22)] overflow-hidden shadow-[0_1px_0_rgba(78,55,30,0.08),0_8px_24px_rgba(78,55,30,0.06)]">
              <div className="absolute top-0 left-0 w-full h-[3px] bg-carnet-red"></div>

              {/* En-tête : eyebrow + titre + score */}
              <div className="px-5 sm:px-7 pt-5 pb-4 border-b border-dashed border-[rgba(78,55,30,0.18)] flex items-center justify-between gap-4 flex-wrap">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.25)] flex items-center justify-center flex-shrink-0">
                    <PenTool className="h-5 w-5 text-carnet-red" />
                  </div>
                  <div>
                    <div className="carnet-eyebrow text-[10px]">Copie corrigée</div>
                    <h3 className="font-lora text-[20px] sm:text-[22px] text-carnet-ink leading-tight mt-0.5">
                      Ton thème, <em className="font-lora italic text-carnet-red">au stylo rouge</em>.
                    </h3>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="text-right">
                    <div className="carnet-eyebrow text-[10px]">Note</div>
                    <div className="font-lora italic text-[15px] text-carnet-ink-soft mt-0.5">
                      {evaluation.score >= 9 ? 'Excellent' : evaluation.score >= 7 ? 'Très bien' : evaluation.score >= 5 ? 'Correct' : 'À retravailler'}
                    </div>
                  </div>
                  <div className="relative">
                    <svg className="w-[58px] h-[58px] transform -rotate-90">
                      <circle cx="29" cy="29" r="25" stroke="rgba(78,55,30,0.15)" strokeWidth="4" fill="transparent" />
                      <circle
                        cx="29" cy="29" r="25"
                        stroke={evaluation.score >= 7 ? '#C1443A' : evaluation.score >= 5 ? '#C1443A' : '#8A7864'}
                        strokeOpacity={evaluation.score >= 5 ? 1 : 0.7}
                        strokeWidth="4" fill="transparent"
                        strokeDasharray={157}
                        strokeDashoffset={157 - (157 * evaluation.score) / 10}
                        strokeLinecap="round"
                        className="transition-all duration-1000 ease-out"
                      />
                    </svg>
                    <div className="absolute inset-0 flex flex-col items-center justify-center">
                      <span className="font-lora text-[20px] text-carnet-ink leading-none">{evaluation.score}</span>
                      <span className="text-[9px] text-carnet-ink-mute font-instrument leading-none mt-0.5">/ 10</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* HERO : Réponse de l'élève avec surlignage inline + version correcte */}
              <div className="px-5 sm:px-7 py-6">
                <div className="grid md:grid-cols-[1fr_auto_1fr] gap-4 md:gap-5 items-center">
                  {/* Ta réponse — surlignage inline par catégorie d'erreur */}
                  <div>
                    <div className="carnet-eyebrow text-[10px] mb-2">Ta réponse</div>
                    <p className="font-lora text-[17px] md:text-[19px] leading-snug text-carnet-ink">
                      {studentAnswer ? (
                        <>
                          «{' '}
                          {(() => {
                            const segments = buildHighlightedSegments(studentAnswer, evaluation.breakdown || []);
                            return segments.map((seg, i) => {
                              if (!seg.entry) return <span key={i}>{seg.text}</span>;
                              const style = ERROR_STYLES[seg.entry.type];
                              const tip = [seg.entry.label, seg.entry.explanation, seg.entry.correction ? `→ ${seg.entry.correction}` : ''].filter(Boolean).join(' · ');
                              return (
                                <mark
                                  key={i}
                                  title={tip}
                                  className={`${style.bg} ${style.text} border ${style.border} rounded px-0.5 cursor-help`}
                                >
                                  {seg.text}
                                </mark>
                              );
                            });
                          })()}
                          {' »'}
                        </>
                      ) : (
                        <span className="italic text-carnet-ink-mute">(pas de réponse)</span>
                      )}
                    </p>
                  </div>

                  {/* Flèche carnet-hand au milieu */}
                  <div className="hidden md:flex items-center justify-center text-carnet-red">
                    <span className="carnet-hand text-[42px] leading-none" style={{ transform: 'rotate(-8deg)', display: 'inline-block' }}>→</span>
                  </div>

                  {/* Version corrigée — stylo rouge */}
                  <div>
                    <div className="carnet-eyebrow text-[10px] text-carnet-red mb-2">Version corrigée</div>
                    <div className="border-l-[3px] border-carnet-red pl-3">
                      <p className="font-lora italic text-[17px] md:text-[19px] leading-snug text-carnet-ink">
                        {evaluation.corrected}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Couverture du sens — chaque segment du français : rendu / approximatif / oublié */}
                {evaluation.coverage && evaluation.coverage.length > 0 && (
                  <div className="mt-5 bg-[rgba(251,246,234,0.7)] border border-dashed border-[rgba(78,55,30,0.18)] rounded-xl px-4 py-3">
                    <div className="carnet-eyebrow text-[10px] mb-2.5 flex items-center gap-2">
                      <Languages className="h-3 w-3" />
                      Couverture du sens
                      {(() => {
                        const tot = evaluation.coverage.length;
                        const w = evaluation.coverage.reduce((a, s) => a + (s.status === 'present' ? 1 : s.status === 'altered' ? 0.5 : 0), 0);
                        return (
                          <span className="ml-auto normal-case tracking-normal font-instrument text-[11px] text-carnet-ink-soft">
                            {Math.round((w / tot) * 100)}% du sens rendu
                          </span>
                        );
                      })()}
                    </div>
                    <div className="flex flex-wrap gap-1.5">
                      {evaluation.coverage.map((seg, idx) => {
                        const cfg = seg.status === 'present'
                          ? { cls: 'bg-[rgba(34,139,87,0.12)] text-[#1f6f4a] border-[rgba(34,139,87,0.4)]', icon: '✓' }
                          : seg.status === 'altered'
                          ? { cls: 'bg-[rgba(202,138,4,0.15)] text-[#7C5A0A] border-[rgba(202,138,4,0.45)]', icon: '≈' }
                          : { cls: 'bg-[rgba(193,68,58,0.12)] text-carnet-red border-[rgba(193,68,58,0.45)]', icon: '✕' };
                        return (
                          <span
                            key={idx}
                            className={`inline-flex items-center gap-1.5 ${cfg.cls} border rounded-md px-2 py-1 text-[12px] font-instrument`}
                            title={seg.status === 'present' ? 'Sens rendu' : seg.status === 'altered' ? 'Tenté mais fautif' : 'Omis ou hors-sujet'}
                          >
                            <span className="font-bold leading-none">{cfg.icon}</span>
                            <span className={seg.status === 'missing' ? 'line-through opacity-80' : ''}>{seg.segment}</span>
                          </span>
                        );
                      })}
                    </div>
                  </div>
                )}

                {/* Détail du score — décomposition chiffrée */}
                {evaluation.breakdown && evaluation.breakdown.length > 0 && (
                  <div className="mt-5 bg-[rgba(251,246,234,0.7)] border border-dashed border-[rgba(78,55,30,0.18)] rounded-xl px-4 py-3">
                    <div className="carnet-eyebrow text-[10px] mb-2 flex items-center gap-2">
                      <Target className="h-3 w-3" />
                      Détail du score
                    </div>
                    <div className="flex items-center gap-1.5 flex-wrap font-instrument text-[13px] text-carnet-ink-soft">
                      <span className="font-semibold text-carnet-ink tabular-nums">10</span>
                      {evaluation.breakdown.map((entry, idx) => {
                        const style = ERROR_STYLES[entry.type];
                        return (
                          <React.Fragment key={idx}>
                            <span className="text-carnet-ink-mute">−</span>
                            <span
                              className={`inline-flex items-center gap-1 ${style.bg} ${style.text} border ${style.border} rounded-full px-2 py-0.5 text-[11px] font-semibold`}
                              title={entry.explanation}
                            >
                              <span className="tabular-nums">{formatPenalty(entry.penalty)}</span>
                              <span className="opacity-80">· {style.label}</span>
                            </span>
                          </React.Fragment>
                        );
                      })}
                      <span className="text-carnet-ink-mute">=</span>
                      <span className="font-semibold text-carnet-red tabular-nums text-[15px]">{evaluation.score}/10</span>
                    </div>
                  </div>
                )}

                {/* Badges erreurs */}
                <div className="mt-5 flex items-center gap-2 flex-wrap">
                  {evaluation.severity.major_errors.length === 0 && evaluation.severity.minor_errors.length === 0 ? (
                    <div className="flex items-center gap-2 text-carnet-red bg-[rgba(193,68,58,0.08)] border border-dashed border-[rgba(193,68,58,0.35)] px-3 py-1 rounded-full text-[11px] font-instrument font-semibold uppercase tracking-[0.08em]">
                      <CheckCircle className="h-3.5 w-3.5" />
                      <span>Sans faute</span>
                      <span className="carnet-hand text-base normal-case text-carnet-red ml-1" style={{ transform: 'rotate(-3deg)', display: 'inline-block' }}>bravo !</span>
                    </div>
                  ) : (
                    <>
                      {evaluation.severity.major_errors.length > 0 && (
                        <div className="flex items-center gap-1.5 bg-carnet-ink text-[#FBF6EA] px-3 py-1 rounded-full text-[11px] font-instrument font-semibold uppercase tracking-[0.08em]">
                          <AlertCircle className="h-3 w-3" />
                          {evaluation.severity.major_errors.length} majeure{evaluation.severity.major_errors.length > 1 ? 's' : ''}
                        </div>
                      )}
                      {evaluation.severity.minor_errors.length > 0 && (
                        <div className="flex items-center gap-1.5 bg-[rgba(193,68,58,0.1)] text-carnet-red border border-[rgba(193,68,58,0.3)] px-3 py-1 rounded-full text-[11px] font-instrument font-semibold uppercase tracking-[0.08em]">
                          <AlertCircle className="h-3 w-3" />
                          {evaluation.severity.minor_errors.length} mineure{evaluation.severity.minor_errors.length > 1 ? 's' : ''}
                        </div>
                      )}
                    </>
                  )}
                </div>
              </div>

              {/* Annotations : chaque erreur en style "stylo rouge dans la marge" */}
              {(evaluation.severity.major_errors.length > 0 || evaluation.severity.minor_errors.length > 0) && (
                <div className="px-5 sm:px-7 py-6 border-t border-dashed border-[rgba(78,55,30,0.18)] bg-[rgba(251,246,234,0.5)]">
                  <div className="carnet-eyebrow text-[10px] mb-4 flex items-center gap-2">
                    <span>Annotations dans la marge</span>
                    <span className="flex-1 border-t border-dashed border-[rgba(78,55,30,0.18)]"></span>
                  </div>
                  <ol className="space-y-5">
                    {[
                      ...evaluation.severity.major_errors.map(e => typeof e === 'string' ? { error: e, type: 'major' as const } : { ...e, type: 'major' as const }),
                      ...evaluation.severity.minor_errors.map(e => typeof e === 'string' ? { error: e, type: 'minor' as const } : { ...e, type: 'minor' as const })
                    ].map((err: any, index) => (
                      <li key={index} className="flex gap-3">
                        {/* Numéro carnet-hand dans la marge */}
                        <div className="flex-shrink-0 w-7 pt-0.5 text-center">
                          <span className="carnet-hand italic text-[22px] text-carnet-red leading-none" style={{ transform: 'rotate(-4deg)', display: 'inline-block' }}>
                            {index + 1}.
                          </span>
                        </div>
                        <div className="flex-1 pb-4 border-b border-dashed border-[rgba(78,55,30,0.12)] last:border-b-0 last:pb-0">
                          {typeof err === 'string' ? (
                            <p className="text-carnet-ink-soft text-[14px] font-instrument leading-relaxed">{err}</p>
                          ) : (
                            <div className="space-y-2">
                              {err.error && err.correction && (
                                <div className="flex items-baseline gap-3 flex-wrap">
                                  <span
                                    className="font-lora text-[15px] text-carnet-ink-mute"
                                    style={{ textDecoration: 'line-through', textDecorationColor: '#C1443A', textDecorationThickness: '2px' }}
                                  >
                                    {err.error}
                                  </span>
                                  <span className="carnet-hand italic text-[20px] text-carnet-red leading-snug">
                                    {err.correction}
                                  </span>
                                  {err.rule && (
                                    <span className="text-[10px] text-carnet-ink-mute font-instrument bg-[#FBF6EA] px-2 py-0.5 rounded-full border border-dashed border-[rgba(78,55,30,0.25)]">
                                      {err.rule}
                                    </span>
                                  )}
                                </div>
                              )}
                              {err.explanation && (
                                <p className="text-[13px] text-carnet-ink-soft font-instrument leading-relaxed">
                                  <span className="font-semibold text-carnet-ink mr-1">Pourquoi —</span>
                                  {err.explanation}
                                </p>
                              )}
                            </div>
                          )}
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* Renvoi vers la leçon correspondante (uniquement si la phrase cible un point de grammaire mappé) */}
              {language === 'en' && currentSentence?.lesson_slug && (
                <div className="bg-[rgba(193,68,58,0.05)] px-5 sm:px-7 py-5 border-t border-dashed border-[rgba(78,55,30,0.18)]">
                  <div className="flex items-start sm:items-center gap-4 flex-col sm:flex-row sm:justify-between">
                    <div className="flex items-start gap-3">
                      <BookOpen className="h-5 w-5 text-carnet-red flex-shrink-0 mt-0.5" />
                      <div>
                        <div className="carnet-eyebrow text-[10px] mb-1">Point de grammaire ciblé</div>
                        <div className="font-lora text-[16px] text-carnet-ink leading-tight">
                          {currentSentence.lesson_title || currentSentence.lesson_slug}
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <Link
                        to={`/formation/anglais/grammaire/${currentSentence.lesson_slug}`}
                        className="inline-flex items-center gap-1.5 bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument text-[12px] font-semibold uppercase tracking-[0.08em] px-4 py-2 rounded-full transition-colors"
                      >
                        Réviser la leçon
                        <ChevronRight className="h-3 w-3" />
                      </Link>
                      <Link
                        to={`/formation/anglais/grammaire/${currentSentence.lesson_slug}/exercices`}
                        className="inline-flex items-center gap-1.5 bg-[rgba(193,68,58,0.06)] hover:bg-[rgba(193,68,58,0.12)] text-carnet-red border border-[rgba(193,68,58,0.25)] font-instrument text-[12px] font-semibold uppercase tracking-[0.08em] px-4 py-2 rounded-full transition-colors"
                      >
                        Exercices
                      </Link>
                    </div>
                  </div>
                </div>
              )}

              {/* Bas de page : règles + conseil, style notes manuscrites */}
              {(evaluation.tips?.length > 0 || evaluation.grammar_rules?.length > 0) && (
                <div className="bg-[rgba(251,246,234,0.7)] px-5 sm:px-7 py-6 border-t border-dashed border-[rgba(78,55,30,0.18)] grid md:grid-cols-2 gap-6">
                  {evaluation.grammar_rules?.length > 0 && (
                    <div>
                      <div className="carnet-eyebrow text-[10px] mb-3 flex items-center gap-2">
                        <BookOpen className="h-3 w-3" />
                        Règles à retenir
                      </div>
                      <ul className="space-y-2">
                        {evaluation.grammar_rules.map((rule, idx) => (
                          <li key={idx} className="text-[13px] text-carnet-ink-soft font-instrument flex items-start gap-2 leading-relaxed">
                            <span className="carnet-hand text-[18px] text-carnet-red leading-none flex-shrink-0 mt-0.5" style={{ transform: 'rotate(-6deg)', display: 'inline-block' }}>✓</span>
                            <span>{rule}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {evaluation.tips?.length > 0 && (
                    <div>
                      <div className="carnet-eyebrow text-[10px] mb-3 flex items-center gap-2">
                        <Star className="h-3 w-3" />
                        Conseil du coach
                      </div>
                      <ul className="space-y-2">
                        {evaluation.tips.map((tip, idx) => (
                          <li key={idx} className="text-[13px] text-carnet-ink-soft font-instrument flex items-start gap-2 leading-relaxed">
                            <span className="carnet-hand text-[18px] text-carnet-red leading-none flex-shrink-0 mt-0.5" style={{ transform: 'rotate(4deg)', display: 'inline-block' }}>→</span>
                            <span>{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {/* Autres formulations valides — montrer que plusieurs traductions marchent */}
              {evaluation.severity?.accepted_variations?.length > 0 && (
                <div className="bg-[rgba(251,246,234,0.5)] px-5 sm:px-7 py-5 border-t border-dashed border-[rgba(78,55,30,0.18)]">
                  <div className="carnet-eyebrow text-[10px] mb-3 flex items-center gap-2">
                    <CheckCircle className="h-3 w-3 text-carnet-red" />
                    Autres formulations qui auraient marché
                  </div>
                  <ul className="space-y-2">
                    {evaluation.severity.accepted_variations.map((variation, idx) => (
                      <li key={idx} className="text-[13px] text-carnet-ink-soft font-instrument flex items-start gap-2 leading-relaxed">
                        <span className="text-carnet-red mt-0.5 flex-shrink-0">✓</span>
                        <span className="italic">«&nbsp;{variation}&nbsp;»</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeGrammaticalGenerator;
