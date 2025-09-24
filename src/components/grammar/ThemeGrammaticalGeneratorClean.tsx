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
    if (score >= 8) return 'text-green-600';
    if (score >= 6) return 'text-yellow-600';
    return 'text-red-600';
  };

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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header fixe et épuré */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Navigation des langues */}
            <div className="flex items-center gap-6">
              <h1 className="text-xl font-semibold text-gray-900">Générateur de Thèmes</h1>
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
                  🇩🇪 Allemand
                </ToggleGroupItem>
                <ToggleGroupItem value="en" className="data-[state=on]:bg-white data-[state=on]:shadow-sm">
                  🇬🇧 Anglais
                </ToggleGroupItem>
                <ToggleGroupItem value="es" className="data-[state=on]:bg-white data-[state=on]:shadow-sm">
                  🇪🇸 Espagnol
                </ToggleGroupItem>
              </ToggleGroup>
            </div>

            {/* Contrôles à droite */}
            <div className="flex items-center gap-3">
              {examMode && (
                <div className="flex items-center gap-2 px-3 py-1.5 bg-red-50 text-red-700 rounded-lg text-sm font-mono">
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
        </div>
      </div>

      {/* Statistiques de session - toujours visibles */}
      <div className="bg-white border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-3">
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

      {/* Layout principal en 3 colonnes fixes */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid lg:grid-cols-3 gap-6 h-[calc(100vh-200px)]">
          
          {/* Colonne 1 : Sélection de phrases */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <h2 className="text-lg font-medium text-gray-900 flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                Sélectionner une phrase
              </h2>
            </div>
            <div className="p-4 space-y-4 overflow-y-auto h-full">
              {/* Bouton génération aléatoire */}
              <Button
                onClick={generateNewSentence}
                disabled={isGenerating}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white"
              >
                {isGenerating ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Génération...
                  </>
                ) : (
                  <>
                    <Plus className="mr-2 h-4 w-4" />
                    Nouvelle phrase aléatoire
                  </>
                )}
              </Button>
            </div>
          </div>

          {/* Colonne 2 : Phrase source et traduction */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <h2 className="text-lg font-medium text-gray-900 flex items-center gap-2">
                <Languages className="h-5 w-5" />
                Phrase à traduire
              </h2>
            </div>
            <div className="p-4 space-y-4">
              {currentSentence ? (
                <>
                  {/* Phrase française */}
                  <div className="p-4 bg-blue-50 rounded-lg border">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium text-blue-700">Français</span>
                      <div className="flex gap-1">
                        {currentSentence.specialized && (
                          <Badge className="bg-orange-100 text-orange-700 text-xs">Spécialisé</Badge>
                        )}
                        {currentSentence.difficulty_level && (
                          <Badge variant={currentSentence.difficulty_level === 'advanced' ? 'destructive' : 'secondary'} className="text-xs">
                            {currentSentence.difficulty_level === 'advanced' ? 'Avancé' : 'Intermédiaire'}
                          </Badge>
                        )}
                      </div>
                    </div>
                    <p className="text-gray-900 text-lg leading-relaxed">{currentSentence.french}</p>
                  </div>

                  {/* Zone de traduction */}
                  <div className="space-y-3">
                    <label className="text-sm font-medium text-gray-700">
                      Votre traduction en {language === 'de' ? 'allemand' : language === 'en' ? 'anglais' : 'espagnol'} :
                    </label>
                    <Textarea
                      value={studentAnswer}
                      onChange={(e) => setStudentAnswer(e.target.value)}
                      placeholder={`Traduisez en ${language === 'de' ? 'allemand' : language === 'en' ? 'anglais' : 'espagnol'}...`}
                      className="min-h-[120px] text-base"
                      disabled={isEvaluating}
                    />
                  </div>

                  {/* Boutons d'action */}
                  <div className="flex gap-3">
                    <Button
                      onClick={() => {}}
                      disabled={!studentAnswer.trim() || isEvaluating}
                      className="flex-1 bg-green-600 hover:bg-green-700 text-white"
                    >
                      {isEvaluating ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Correction...
                        </>
                      ) : (
                        <>
                          <CheckCircle className="mr-2 h-4 w-4" />
                          Corriger
                        </>
                      )}
                    </Button>
                    <Button
                      variant="outline"
                      onClick={resetExercise}
                    >
                      <RefreshCw className="mr-2 h-4 w-4" />
                      Recommencer
                    </Button>
                  </div>
                </>
              ) : (
                <div className="flex flex-col items-center justify-center py-12 text-gray-500">
                  <Languages className="h-12 w-12 mb-4 text-gray-300" />
                  <p className="text-lg font-medium">Aucune phrase sélectionnée</p>
                  <p className="text-sm">Choisissez une phrase dans la colonne de gauche pour commencer</p>
                </div>
              )}
            </div>
          </div>

          {/* Colonne 3 : Correction et feedback */}
          <div className="bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
            <div className="p-4 border-b border-gray-200 bg-gray-50">
              <h2 className="text-lg font-medium text-gray-900 flex items-center gap-2">
                <Target className="h-5 w-5" />
                Correction et feedback
              </h2>
            </div>
            <div className="p-4 overflow-y-auto h-full">
              <div className="flex flex-col items-center justify-center py-12 text-gray-500">
                <Target className="h-12 w-12 mb-4 text-gray-300" />
                <p className="text-lg font-medium">Pas encore de correction</p>
                <p className="text-sm text-center">Traduisez une phrase et cliquez sur Corriger pour voir le feedback</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeGrammaticalGenerator;
