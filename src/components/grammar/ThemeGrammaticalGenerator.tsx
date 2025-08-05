
import React, { useState, useCallback, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Loader2, Languages, Target, RefreshCw, Eye, EyeOff, Plus, CheckCircle, AlertCircle, BookOpen, Lightbulb, Timer, Save, Play, Pause, Clock, Trophy, Zap, ThumbsUp, ThumbsDown, Star, MessageSquare } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';
import { GrammarErrorMemory } from './GrammarErrorMemory';
import { SimilarSentencesGenerator } from './SimilarSentencesGenerator';
import { ProgressionTracker } from './ProgressionTracker';

interface ThemeSentence {
  french: string;
  reference: string;
  grammar_points: string[];
  notes?: string[];
  glossary?: Record<string, string>;
  mini_exercise?: {
    question: string;
    answer: string;
    explanation: string;
  };
  difficulty_level?: string;
  specialized?: boolean;
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
  const [newError, setNewError] = useState<any>(null);
  const [weakGrammarPoints, setWeakGrammarPoints] = useState<string[]>([]);
  const [similarSentences, setSimilarSentences] = useState<string[]>([]);
  const [history, setHistory] = useState<string[]>([]);
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

  const { currentUser } = useAuth();
  const { toast } = useToast();

  // Timer effect
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isTimerRunning && examMode) {
      interval = setInterval(() => {
        setTimer(prev => prev + 1);
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [isTimerRunning, examMode]);

  // Auto-save effect
  useEffect(() => {
    if (autoSave && studentAnswer.trim()) {
      const timeoutId = setTimeout(() => {
        localStorage.setItem(`theme-grammar-${language}`, studentAnswer);
      }, 1000);
      return () => clearTimeout(timeoutId);
    }
  }, [studentAnswer, autoSave, language]);

  // Load auto-saved answer
  useEffect(() => {
    const saved = localStorage.getItem(`theme-grammar-${language}`);
    if (saved && !currentSentence) {
      setStudentAnswer(saved);
    }
  }, [language, currentSentence]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const startExamMode = useCallback(() => {
    setExamMode(true);
    setIsTimerRunning(true);
    setTimer(0);
    toast({
      title: "Mode examen activé",
      description: "Le chronomètre est lancé. Concentrez-vous sur votre traduction !",
      variant: "default"
    });
  }, [toast]);

  const stopExamMode = useCallback(() => {
    setExamMode(false);
    setIsTimerRunning(false);
    toast({
      title: "Mode examen désactivé",
      description: `Temps total : ${formatTime(timer)}`,
      variant: "default"
    });
  }, [timer, toast]);

  const generateNewSentence = useCallback(async () => {
    if (isGenerating) return;

    setIsGenerating(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-theme-sentence', {
        body: { language, history }
      });

      if (error) throw error;

      if (data) {
        setCurrentSentence(data);
        setStudentAnswer('');
        setEvaluation(null);
        setShowHints(false);
        setShowMiniExercise(false);
        setNewError(null);
        setWeakGrammarPoints([]);
        setSimilarSentences([]);
        setCompletedSentence(false);
        
        // Start timer in exam mode
        if (examMode) {
          setIsTimerRunning(true);
          setTimer(0);
        }

        // Update history
        setHistory(prev => [...prev, data.reference]);

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
  }, [language, history, examMode, toast]);

  const analyzeGermanErrors = useCallback((studentAnswer: string, reference: string) => {
    const errors = {
      major_errors: [] as any[],
      minor_errors: [] as any[],
      accepted_variations: [] as string[]
    };

    // Analyse des erreurs communes en allemand
    const student = studentAnswer.toLowerCase();
    const ref = reference.toLowerCase();
    
    // Erreur 1: Article défini manquant
    if (ref.includes('die ') && !student.includes('die ')) {
      errors.major_errors.push({
        error: "Article défini 'die' manquant",
        explanation: "L'article défini 'die' est obligatoire en allemand pour marquer le genre et le cas",
        correction: "Ajouter 'die' devant le nom féminin ou pluriel",
        rule: "Die = article féminin nominatif/accusatif ou pluriel nominatif/accusatif"
      });
    }

    if (ref.includes('der ') && !student.includes('der ')) {
      errors.major_errors.push({
        error: "Article défini 'der' manquant",
        explanation: "L'article défini 'der' est obligatoire pour marquer le genre masculin ou le génitif féminin",
        correction: "Ajouter 'der' devant le nom masculin ou au génitif féminin",
        rule: "Der = article masculin nominatif ou génitif féminin/pluriel"
      });
    }

    if (ref.includes('das ') && !student.includes('das ')) {
      errors.major_errors.push({
        error: "Article défini 'das' manquant",
        explanation: "L'article défini 'das' est obligatoire pour marquer le genre neutre",
        correction: "Ajouter 'das' devant le nom neutre",
        rule: "Das = article neutre nominatif/accusatif"
      });
    }

    // Erreur 2: Préposition 'zu' avec mauvais cas
    if (student.includes('zu eine') && ref.includes('zu einer')) {
      errors.major_errors.push({
        error: "Cas incorrect après 'zu'",
        explanation: "La préposition 'zu' régit toujours le datif en allemand",
        correction: "Utiliser 'zu einer' (datif féminin) au lieu de 'zu eine' (accusatif)",
        rule: "La préposition 'zu' régit toujours le datif"
      });
    }

    // Erreur 3: Construction infinitive manquante
    if (ref.includes('zu ') && student.includes('plan') && !student.includes('zu')) {
      errors.major_errors.push({
        error: "Construction infinitive 'zu + infinitif' manquante",
        explanation: "Après 'planen', on utilise la construction infinitive avec 'zu' + infinitif",
        correction: "Ajouter 'zu' + infinitif : 'plant, zu + infinitif'",
        rule: "Après 'planen', 'vorhaben', 'versuchen' → zu + infinitif"
      });
    }

    // Erreur 4: Ordre des mots incorrect
    if (student.includes('haben') && student.includes('geführt') && 
        student.indexOf('haben') > student.indexOf('geführt')) {
      errors.minor_errors.push({
        error: "Ordre des mots au parfait incorrect",
        explanation: "Au parfait, l'auxiliaire 'haben' vient avant le participe passé",
        correction: "Ordre correct : haben + participe passé",
        rule: "Parfait = haben/sein + participe passé en fin de phrase"
      });
    }

    // Erreur 5: Mauvaise traduction de 'führen zu'
    if (student.includes('lead to') || student.includes('conduire')) {
      errors.minor_errors.push({
        error: "Traduction directe au lieu de 'führen zu'",
        explanation: "En allemand, 'conduire à' se traduit par 'führen zu' + datif",
        correction: "Utiliser 'führen zu' + datif",
        rule: "Führen zu + datif = conduire à, mener à"
      });
    }

    return errors;
  }, []);

  const generateFallbackEvaluation = useCallback((language: string, studentAnswer: string, reference: string) => {
    const fallbackData = {
      de: (() => {
        const analyzedErrors = analyzeGermanErrors(studentAnswer, reference);
        const totalErrors = analyzedErrors.major_errors.length + analyzedErrors.minor_errors.length;
        const score = Math.max(0, 10 - (analyzedErrors.major_errors.length * 2) - (analyzedErrors.minor_errors.length * 1));
        
        return {
          score: score,
          severity: analyzedErrors,
          corrected: reference,
          reference: reference,
          grammar_rules: ["Déclinaisons des articles", "Prépositions + cas", "Constructions infinitives", "Ordre des mots"],
          tips: [
            "Les articles définis se déclinent selon le genre, nombre et cas",
            "La préposition 'zu' régit toujours le datif",
            "Après 'planen' → zu + infinitif",
            "Au parfait : auxiliaire + participe passé en fin"
          ],
          weak_grammar_points: ["déclinaisons", "prépositions + cas", "infinitif"],
          similar_sentences: [
            "Die Regierung plant, neue Maßnahmen zu ergreifen.",
            "Experten kritisieren die mangelnde Transparenz.",
            "Die Krise führt zu wirtschaftlichen Problemen."
          ],
          flashcard_rule: "Les articles définis allemands : der/die/das se déclinent selon genre, nombre et cas"
        };
      })(),
      en: {
        score: 7,
        severity: {
          major_errors: [{
            error: "Temps verbal incorrect",
            explanation: "Le present perfect est utilisé pour des actions passées avec impact présent",
            correction: "Utiliser 'have/has + past participle' au lieu du simple past",
            rule: "Present perfect = have/has + past participle pour les actions passées avec conséquence présente"
          }],
          minor_errors: [{
            error: "Préposition incorrecte",
            explanation: "Certaines prépositions sont spécifiques au contexte géopolitique",
            correction: "Vérifier les collocations standard en anglais journalistique",
            rule: "Les prépositions varient selon le contexte (between...and, due to, according to)"
          }],
          accepted_variations: []
        },
        corrected: `${reference}`,
        reference: reference,
        grammar_rules: ["Present perfect", "Voix passive", "Modaux"],
        tips: [
          "Le present perfect exprime une action passée avec conséquence présente",
          "La voix passive est courante dans la presse pour l'objectivité"
        ],
        weak_grammar_points: ["present perfect", "passive voice"],
        similar_sentences: [
          "The government has announced new measures.",
          "Tensions have led to diplomatic crisis.",
          "The economy will have to adapt to changes."
        ],
        flashcard_rule: "Present perfect = have/has + past participle pour actions passées avec impact présent"
      },
      es: {
        score: 6,
        severity: {
          major_errors: [{
            error: "Subjonctif manquant",
            explanation: "Après 'es importante que', on utilise le subjonctif présent",
            correction: "Remplacer l'indicatif par le subjonctif",
            rule: "Après es importante que, es necesario que → subjonctif présent"
          }],
          minor_errors: [{
            error: "Confusion ser/estar",
            explanation: "Ser exprime une caractéristique permanente, estar un état temporaire",
            correction: "Utiliser 'estar' pour les états temporaires",
            rule: "Ser = permanent, estar = temporaire"
          }],
          accepted_variations: []
        },
        corrected: `${reference}`,
        reference: reference,
        grammar_rules: ["Subjonctif présent", "Ser vs estar", "Por vs para"],
        tips: [
          "Le subjonctif exprime la subjectivité, l'émotion, le doute",
          "Ser/estar : caractéristique vs état"
        ],
        weak_grammar_points: ["subjonctif", "ser/estar"],
        similar_sentences: [
          "Es importante que el gobierno tome medidas.",
          "La situación está grave pero no es irreversible.",
          "Las reformas son necesarias para la economía."
        ],
        flashcard_rule: "Après es importante que → subjonctif présent"
      }
    };

    return fallbackData[language as keyof typeof fallbackData] || fallbackData.en;
  }, []);

  const evaluateAnswer = useCallback(async () => {
    if (!currentSentence || !studentAnswer.trim() || isEvaluating) {
      return;
    }

    console.log(`🔍 Évaluation de la réponse en ${language}:`, {
      student: studentAnswer.trim(),
      french: currentSentence.french,
      reference: currentSentence.reference
    });

    setIsEvaluating(true);
    try {
      const { data, error } = await supabase.functions.invoke('evaluate-theme-translation', {
        body: {
          language,
          student: studentAnswer.trim(),
          french: currentSentence.french,
          reference: currentSentence.reference,
          grammar_points: currentSentence.grammar_points
        }
      });

      console.log('📊 Évaluation reçue:', { data, error });

      let evaluationData = data;

      // Si l'API échoue ou retourne des données incomplètes, utiliser les données de secours
      if (error || !data || !data.corrected || data.corrected === "Correction non disponible") {
        console.log('🔄 Utilisation des données de secours pour le feedback');
        evaluationData = generateFallbackEvaluation(language, studentAnswer.trim(), currentSentence.reference);
        
        toast({
          title: "Évaluation de secours",
          description: "L'IA principale n'est pas disponible, utilisation du système de correction de secours",
          variant: "default"
        });
      }

      if (!evaluationData) {
        throw new Error('Pas de données d\'évaluation disponibles');
      }

      console.log('✅ Évaluation terminée avec succès:', {
        score: evaluationData.score,
        major_errors: evaluationData.severity?.major_errors?.length || 0,
        minor_errors: evaluationData.severity?.minor_errors?.length || 0
      });

      setEvaluation(evaluationData);
      setWeakGrammarPoints(evaluationData.weak_grammar_points || []);
      setSimilarSentences(evaluationData.similar_sentences || []);
      setCompletedSentence(true);

      // Stop timer in exam mode
      if (examMode) {
        setIsTimerRunning(false);
      }

      // Update session stats
      setSessionStats(prev => ({
        totalExercises: prev.totalExercises + 1,
        averageScore: (prev.averageScore * prev.totalExercises + data.score) / (prev.totalExercises + 1),
        bestScore: Math.max(prev.bestScore, data.score),
        timeSpent: prev.timeSpent + timer
      }));

      // Sauvegarder l'erreur pour la mémoire si il y a des erreurs grammaticales
      if (data.severity?.major_errors?.length > 0 && currentUser?.id) {
        const grammarError = {
          grammar_point: data.weak_grammar_points?.[0] || currentSentence.grammar_points[0],
          rule: data.flashcard_rule || "Règle à réviser",
          french_sentence: currentSentence.french,
          student_answer: studentAnswer.trim(),
          correct_answer: data.corrected || currentSentence.reference,
          error_type: data.severity.major_errors[0] || "Erreur grammaticale"
        };
        setNewError(grammarError);
      }

      toast({
        title: `Score: ${data.score}/10`,
        description: data.score >= 8 ? "Excellente traduction !" : 
                    data.score >= 6 ? "Bonne traduction, quelques erreurs à corriger" :
                    "Traduction à retravailler, consultez les corrections",
        variant: data.score >= 6 ? "default" : "destructive"
      });

    } catch (error) {
      console.error('💥 Erreur complète lors de l\'évaluation:', error);
      toast({
        title: "Erreur d'évaluation",
        description: `Une erreur est survenue: ${error instanceof Error ? error.message : 'Erreur inconnue'}`,
        variant: "destructive"
      });
    } finally {
      setIsEvaluating(false);
    }
  }, [currentSentence, studentAnswer, language, currentUser, toast, examMode, timer]);

  const resetExercise = useCallback(() => {
    console.log('🔄 Reset de l\'exercice');
    setCurrentSentence(null);
    setStudentAnswer('');
    setEvaluation(null);
    setShowHints(false);
    setShowMiniExercise(false);
    setNewError(null);
    setWeakGrammarPoints([]);
    setSimilarSentences([]);
    setHistory([]);
    setCompletedSentence(false);
    if (examMode) {
      setIsTimerRunning(false);
      setTimer(0);
    }
    localStorage.removeItem(`theme-grammar-${language}`);
  }, [language, examMode]);

  const getScoreColor = (score: number) => {
    if (score >= 8) return 'text-green-600';
    if (score >= 6) return 'text-yellow-600';
    return 'text-red-600';
  };

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-8">
      {/* Header moderne avec navigation et stats */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-200">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
          {/* Navigation des langues */}
          <div className="flex flex-col sm:flex-row gap-4">
            <ToggleGroup
              type="single"
              value={language}
              onValueChange={(value) => {
                if (value) {
                  setLanguage(value as 'en' | 'de' | 'es');
                  resetExercise();
                }
              }}
              className="bg-white rounded-lg p-1 shadow-sm"
            >
              <ToggleGroupItem value="de" className="data-[state=on]:bg-blue-100 data-[state=on]:text-blue-800">
                🇩🇪 Allemand
              </ToggleGroupItem>
              <ToggleGroupItem value="en" className="data-[state=on]:bg-blue-100 data-[state=on]:text-blue-800">
                🇬🇧 Anglais
              </ToggleGroupItem>
              <ToggleGroupItem value="es" className="data-[state=on]:bg-blue-100 data-[state=on]:text-blue-800">
                🇪🇸 Espagnol
              </ToggleGroupItem>
            </ToggleGroup>

            {/* Contrôles d'examen */}
            <div className="flex gap-2">
              <Button
                variant={examMode ? "destructive" : "outline"}
                size="sm"
                onClick={examMode ? stopExamMode : startExamMode}
                className="flex items-center gap-2"
              >
                {examMode ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                {examMode ? "Arrêter" : "Mode examen"}
              </Button>
              
              {examMode && (
                <div className="flex items-center gap-1 px-3 py-1 bg-red-100 text-red-800 rounded-full font-mono">
                  <Clock className="h-4 w-4" />
                  {formatTime(timer)}
                </div>
              )}
            </div>
          </div>

          {/* Auto-save toggle */}
          <div className="flex items-center gap-2">
            <Button
              variant={autoSave ? "default" : "outline"}
              size="sm"
              onClick={() => setAutoSave(!autoSave)}
              className="flex items-center gap-2"
            >
              <Save className="h-4 w-4" />
              Auto-save {autoSave ? "ON" : "OFF"}
            </Button>
          </div>
        </div>

        {/* Statistiques de session */}
        {sessionStats.totalExercises > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-6">
            <div className="text-center p-4 bg-white rounded-lg border border-blue-200 shadow-sm">
              <div className="text-2xl font-bold text-blue-800">{sessionStats.totalExercises}</div>
              <div className="text-sm text-blue-600">Exercices</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-green-200 shadow-sm">
              <div className="text-2xl font-bold text-green-800">{sessionStats.averageScore.toFixed(1)}</div>
              <div className="text-sm text-green-600">Moyenne</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-purple-200 shadow-sm">
              <div className="text-2xl font-bold text-purple-800">{sessionStats.bestScore}</div>
              <div className="text-sm text-purple-600">Meilleur</div>
            </div>
            <div className="text-center p-4 bg-white rounded-lg border border-orange-200 shadow-sm">
              <div className="text-2xl font-bold text-orange-800">{formatTime(sessionStats.timeSpent)}</div>
              <div className="text-sm text-orange-600">Temps total</div>
            </div>
          </div>
        )}
      </div>

      {/* Progression tracker */}
      <ProgressionTracker 
        language={language}
        currentScore={evaluation?.score}
        completedSentence={completedSentence}
      />

      {/* Zone principale : Génération et exercice */}
      <div className="grid lg:grid-cols-3 gap-8">
        
        {/* Colonne 1 : Génération et phrase source */}
        <div className="space-y-6">
          {/* Bouton de génération */}
          <Card className="border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-amber-50 shadow-lg">
            <CardHeader className="pb-4">
              <CardTitle className="flex items-center gap-2 text-orange-800">
                <Target className="h-5 w-5" />
                Génération
                {language === 'de' && (
                  <Badge className="bg-purple-100 text-purple-800 border-purple-200">
                    Spécialisé
                  </Badge>
                )}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <Button
                onClick={generateNewSentence}
                disabled={isGenerating}
                size="lg"
                className="w-full bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white shadow-lg hover:shadow-xl transition-all"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                    Génération...
                  </>
                ) : (
                  <>
                    <Plus className="mr-2 h-5 w-5" />
                    Nouvelle phrase
                  </>
                )}
              </Button>
            </CardContent>
          </Card>

          {/* Phrase source */}
          {currentSentence && (
            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-blue-800">
                  <Languages className="h-5 w-5" />
                  Phrase à traduire
                  {currentSentence.difficulty_level && (
                    <Badge variant={currentSentence.difficulty_level === 'advanced' ? 'destructive' : 'secondary'}>
                      {currentSentence.difficulty_level === 'advanced' ? 'Avancé' : 'Intermédiaire'}
                    </Badge>
                  )}
                  {currentSentence.specialized && (
                    <Badge className="bg-purple-100 text-purple-800">
                      Spécialisé
                    </Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-white rounded-lg border border-blue-200 shadow-sm">
                  <p className="text-lg font-medium text-gray-800 leading-relaxed">
                    {currentSentence.french}
                  </p>
                </div>

                {/* Aides conditionnelles */}
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => setShowHints(!showHints)}
                    disabled={examMode}
                    className="flex-1 border-blue-300 text-blue-700 hover:bg-blue-100"
                  >
                    {showHints ? <EyeOff className="mr-2 h-4 w-4" /> : <Eye className="mr-2 h-4 w-4" />}
                    {showHints ? "Masquer" : "Indices"}
                  </Button>

                  {currentSentence.glossary && (
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setShowMiniExercise(!showMiniExercise)}
                      disabled={examMode}
                      className="flex-1 border-purple-300 text-purple-700 hover:bg-purple-100"
                    >
                      <BookOpen className="mr-2 h-4 w-4" />
                      Glossaire
                    </Button>
                  )}
                </div>

                {/* Indices et glossaire */}
                {showHints && currentSentence.notes && (
                  <div className="p-4 bg-yellow-50 rounded-lg border border-yellow-200">
                    <h4 className="font-medium text-yellow-800 mb-2">Indices :</h4>
                    <ul className="space-y-1 text-sm text-yellow-700">
                      {currentSentence.notes.map((note, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <Lightbulb className="h-4 w-4 mt-0.5 text-yellow-600" />
                          {note}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {showMiniExercise && currentSentence.glossary && (
                  <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                    <h4 className="font-medium text-purple-800 mb-2">Glossaire :</h4>
                    <div className="space-y-2 text-sm">
                      {Object.entries(currentSentence.glossary).map(([term, definition]) => (
                        <div key={term} className="flex justify-between">
                          <span className="font-medium text-purple-700">{term}</span>
                          <span className="text-purple-600">{definition}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          )}
        </div>

        {/* Colonne 2 : Zone de réponse */}
        <div className="space-y-6">
          {currentSentence && (
            <Card className="border-2 border-green-200 bg-gradient-to-br from-green-50 to-emerald-50 shadow-lg">
              <CardHeader className="pb-4">
                <CardTitle className="flex items-center gap-2 text-green-800">
                  <MessageSquare className="h-5 w-5" />
                  Votre traduction
                  {examMode && (
                    <Badge variant="destructive">
                      <Clock className="h-3 w-3 mr-1" />
                      {formatTime(timer)}
                    </Badge>
                  )}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Textarea
                  value={studentAnswer}
                  onChange={(e) => setStudentAnswer(e.target.value)}
                  placeholder="Tapez votre traduction ici..."
                  className="min-h-[120px] border-green-300 focus:border-green-500"
                  disabled={examMode && isTimerRunning}
                />
                
                <div className="flex gap-2">
                  <Button
                    onClick={evaluateAnswer}
                    disabled={!studentAnswer.trim() || isEvaluating}
                    className="flex-1 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white"
                  >
                    {isEvaluating ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Évaluation...
                      </>
                    ) : (
                      <>
                        <CheckCircle className="mr-2 h-4 w-4" />
                        Évaluer
                      </>
                    )}
                  </Button>
                  
                  <Button
                    variant="outline"
                    onClick={resetExercise}
                    className="border-green-300 text-green-700 hover:bg-green-100"
                  >
                    <RefreshCw className="mr-2 h-4 w-4" />
                    Reset
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Colonne 3 : Résultats et feedback */}
        <div className="space-y-6">
          {evaluation && (
            <>
              {/* Score et évaluation générale */}
              <Card className="border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg">
                <CardHeader className="pb-4">
                  <CardTitle className="flex items-center gap-2 text-purple-800">
                    <Trophy className="h-5 w-5" />
                    Résultats
                    <Badge className={`${getScoreColor(evaluation.score)} bg-white border`}>
                      {evaluation.score}/10
                    </Badge>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <Tabs defaultValue="correction" className="w-full">
                    <TabsList className="grid w-full grid-cols-2">
                      <TabsTrigger value="correction">Correction</TabsTrigger>
                      <TabsTrigger value="feedback">Feedback</TabsTrigger>
                    </TabsList>
                    
                    <TabsContent value="correction" className="space-y-4">
                      {/* Correction */}
                      <div className="bg-white p-4 rounded-lg border border-gray-200">
                        <h4 className="font-medium text-gray-800 mb-2">Correction :</h4>
                        <p className="text-gray-700">{evaluation.corrected}</p>
                      </div>

                      {/* Analyse des erreurs */}
                      {(evaluation.severity.major_errors.length > 0 || evaluation.severity.minor_errors.length > 0) && (
                        <div className="space-y-4">
                          <h4 className="font-semibold text-gray-800">Analyse détaillée des erreurs :</h4>
                          
                          {evaluation.severity.major_errors.length > 0 && (
                            <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                              <p className="text-sm font-medium text-red-700 mb-3">Erreurs graves (-2 points) :</p>
                              <div className="space-y-3">
                                {evaluation.severity.major_errors.map((error, index) => (
                                  <div key={index} className="bg-white p-3 rounded border border-red-200">
                                    {typeof error === 'string' ? (
                                      <p className="text-red-600 flex items-start">
                                        <span className="text-red-500 mr-2">•</span>
                                        {error}
                                      </p>
                                    ) : (
                                      <div className="space-y-2">
                                        <div className="flex items-start">
                                          <span className="text-red-500 mr-2">•</span>
                                          <div className="flex-1">
                                            <p className="text-red-800 font-medium">{error.error}</p>
                                            <p className="text-red-600 text-sm mt-1">
                                              <span className="font-medium">Pourquoi :</span> {error.explanation}
                                            </p>
                                            <p className="text-green-600 text-sm mt-1">
                                              <span className="font-medium">Correction :</span> {error.correction}
                                            </p>
                                            <p className="text-blue-600 text-sm mt-1">
                                              <span className="font-medium">Règle :</span> {error.rule}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {evaluation.severity.minor_errors.length > 0 && (
                            <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                              <p className="text-sm font-medium text-amber-700 mb-3">Erreurs mineures (-1 point) :</p>
                              <div className="space-y-3">
                                {evaluation.severity.minor_errors.map((error, index) => (
                                  <div key={index} className="bg-white p-3 rounded border border-amber-200">
                                    {typeof error === 'string' ? (
                                      <p className="text-amber-600 flex items-start">
                                        <span className="text-amber-500 mr-2">•</span>
                                        {error}
                                      </p>
                                    ) : (
                                      <div className="space-y-2">
                                        <div className="flex items-start">
                                          <span className="text-amber-500 mr-2">•</span>
                                          <div className="flex-1">
                                            <p className="text-amber-800 font-medium">{error.error}</p>
                                            <p className="text-amber-600 text-sm mt-1">
                                              <span className="font-medium">Pourquoi :</span> {error.explanation}
                                            </p>
                                            <p className="text-green-600 text-sm mt-1">
                                              <span className="font-medium">Correction :</span> {error.correction}
                                            </p>
                                            <p className="text-blue-600 text-sm mt-1">
                                              <span className="font-medium">Règle :</span> {error.rule}
                                            </p>
                                          </div>
                                        </div>
                                      </div>
                                    )}
                                  </div>
                                ))}
                              </div>
                            </div>
                          )}

                          {evaluation.severity.accepted_variations.length > 0 && (
                            <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                              <p className="text-sm font-medium text-green-700 mb-2">Variations acceptées :</p>
                              <ul className="space-y-1">
                                {evaluation.severity.accepted_variations.map((variation, index) => (
                                  <li key={index} className="text-green-600 flex items-start">
                                    <span className="text-green-500 mr-2">✓</span>
                                    {variation}
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </div>
                      )}
                    </TabsContent>

                    <TabsContent value="feedback" className="space-y-4">
                      {/* Feedback positif */}
                      <div className="bg-green-50 p-4 rounded-lg border border-green-200">
                        <div className="flex items-center gap-3 mb-3">
                          <ThumbsUp className="h-5 w-5 text-green-600" />
                          <h4 className="font-semibold text-green-800">Points forts :</h4>
                        </div>
                        <div className="space-y-2">
                          {(() => {
                            const positivePoints = [];
                            if (studentAnswer.toLowerCase().includes('have') || studentAnswer.toLowerCase().includes('has')) {
                              positivePoints.push("Utilisation correcte du present perfect");
                            }
                            if (evaluation.severity.accepted_variations.length > 0) {
                              positivePoints.push("Variations stylistiques acceptables");
                            }
                            if (positivePoints.length === 0) {
                              if (evaluation.score >= 6) {
                                positivePoints.push("Structure grammaticale solide");
                                positivePoints.push("Registre formel respecté");
                              } else {
                                positivePoints.push("Tentative de traduction complète");
                                positivePoints.push("Compréhension du sens général");
                              }
                            }
                            return positivePoints.slice(0, 3).map((point, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <CheckCircle className="h-4 w-4 text-green-600 mt-0.5" />
                                <p className="text-green-700">{point}</p>
                              </div>
                            ));
                          })()}
                        </div>
                      </div>

                      {/* Points à améliorer */}
                      <div className="bg-amber-50 p-4 rounded-lg border border-amber-200">
                        <div className="flex items-center gap-3 mb-3">
                          <ThumbsDown className="h-5 w-5 text-amber-600" />
                          <h4 className="font-semibold text-amber-800">Points à améliorer :</h4>
                        </div>
                        <div className="space-y-2">
                          {(() => {
                            const improvementPoints = [];
                            if (evaluation.severity.major_errors.length > 0) {
                              improvementPoints.push("Erreurs grammaticales majeures à corriger");
                            }
                            if (evaluation.severity.minor_errors.length > 0) {
                              improvementPoints.push("Précision lexicale à améliorer");
                            }
                            if (evaluation.score < 6) {
                              improvementPoints.push("Structure de phrase à retravailler");
                            }
                            return improvementPoints.map((point, index) => (
                              <div key={index} className="flex items-start gap-2">
                                <AlertCircle className="h-4 w-4 text-amber-600 mt-0.5" />
                                <p className="text-amber-700">{point}</p>
                              </div>
                            ));
                          })()}
                        </div>
                      </div>

                      {/* Conseils personnalisés */}
                      <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                        <div className="flex items-center gap-3 mb-3">
                          <Lightbulb className="h-5 w-5 text-blue-600" />
                          <h4 className="font-semibold text-blue-800">Conseils pour cette phrase :</h4>
                        </div>
                        <div className="space-y-2">
                          {evaluation.tips.slice(0, 2).map((tip, index) => (
                            <div key={index} className="flex items-start gap-2">
                              <Star className="h-4 w-4 text-blue-600 mt-0.5" />
                              <p className="text-blue-700 text-sm">{tip}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </TabsContent>
                  </Tabs>
                </CardContent>
              </Card>

              {/* Phrases similaires */}
              <SimilarSentencesGenerator 
                weakGrammarPoints={weakGrammarPoints}
                similarSentences={similarSentences}
                language={language}
                onPracticeSentence={() => {}}
              />

              {/* Mémoire des erreurs */}
              {newError && (
                <GrammarErrorMemory 
                  language={language}
                  newError={newError}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};
