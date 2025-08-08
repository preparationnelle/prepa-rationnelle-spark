
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { Textarea } from '@/components/ui/textarea';
import { 
  FileText, 
  Target, 
  Plus, 
  Eye, 
  BookOpen, 
  CheckCircle, 
  RotateCcw, 
  Download, 
  Copy, 
  History, 
  HelpCircle, 
  Save,
  Flag,
  Zap,
  TrendingUp,
  Clock
} from 'lucide-react';
import { toast } from 'sonner';
import { LanguageParagraphGenerator } from '@/components/generator/LanguageParagraphGenerator';
import { ThemeGrammaticalGenerator } from '@/components/grammar/ThemeGrammaticalGenerator';

const LanguagesGeneratorPage = () => {
  // États principaux
  const [selectedTool, setSelectedTool] = useState<'paragraph' | 'grammar'>('grammar');
  const [selectedLanguage, setSelectedLanguage] = useState<'allemand' | 'anglais' | 'espagnol'>('anglais');
  const [examMode, setExamMode] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  const [sourceText, setSourceText] = useState('');
  const [userResponse, setUserResponse] = useState('');
  const [showHints, setShowHints] = useState(false);
  const [showGlossary, setShowGlossary] = useState(false);
  const [evaluationResult, setEvaluationResult] = useState<any>(null);

  // États de progression
  const [sessionStats, setSessionStats] = useState({
    phrasesDone: 0,
    averageScore: 0,
    currentStreak: 0,
    sessionGoal: 0
  });

  // Persistance dans localStorage
  useEffect(() => {
    const saved = localStorage.getItem('languagesGeneratorState');
    if (saved) {
      const state = JSON.parse(saved);
      setSelectedTool(state.selectedTool || 'grammar');
      setSelectedLanguage(state.selectedLanguage || 'anglais');
      setAutoSave(state.autoSave !== false);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('languagesGeneratorState', JSON.stringify({
      selectedTool,
      selectedLanguage,
      autoSave
    }));
  }, [selectedTool, selectedLanguage, autoSave]);

  // Auto-save
  useEffect(() => {
    if (autoSave && userResponse) {
      const timeoutId = setTimeout(() => {
        localStorage.setItem('languagesGeneratorResponse', userResponse);
        toast.success('Sauvegardé', {
          duration: 1000,
          position: 'bottom-right'
        });
      }, 1000);

      return () => clearTimeout(timeoutId);
    }
  }, [userResponse, autoSave]);

  // Raccourcis clavier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
        e.preventDefault();
        handleEvaluate();
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        handleNewPhrase();
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNewPhrase = () => {
    setSourceText('Nouvelle phrase générée...');
    setUserResponse('');
    setEvaluationResult(null);
    toast.success('Nouvelle phrase générée');
  };

  const handleEvaluate = () => {
    if (!userResponse.trim()) {
      toast.error('Veuillez saisir votre réponse');
      return;
    }

    // Simulation d'évaluation
    const mockResult = {
      score: Math.floor(Math.random() * 10) + 1,
      feedback: 'Excellente traduction ! Quelques petites erreurs mineures.',
      errors: ['Erreur 1', 'Erreur 2'],
      suggestions: ['Suggestion 1', 'Suggestion 2']
    };

    setEvaluationResult(mockResult);
    setSessionStats(prev => ({
      ...prev,
      phrasesDone: prev.phrasesDone + 1,
      averageScore: Math.round((prev.averageScore * prev.phrasesDone + mockResult.score) / (prev.phrasesDone + 1))
    }));

    toast.success('Évaluation terminée');
  };

  const handleReset = () => {
    setUserResponse('');
    setEvaluationResult(null);
    toast.info('Réponse réinitialisée');
  };

  const handleExport = (type: 'copy' | 'download') => {
    if (type === 'copy') {
      navigator.clipboard.writeText(userResponse);
      toast.success('Copié dans le presse-papiers');
    } else {
      const blob = new Blob([userResponse], { type: 'text/plain' });
      const url = URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `traduction_${selectedLanguage}_${new Date().toISOString().split('T')[0]}.txt`;
      a.click();
      URL.revokeObjectURL(url);
      toast.success('Fichier téléchargé');
    }
  };

  const getLanguageFlag = (lang: string) => {
    const flags = {
      allemand: '🇩🇪',
      anglais: '🇬🇧',
      espagnol: '🇪🇸'
    };
    return flags[lang as keyof typeof flags] || '🇬🇧';
  };

  return (
    <div className="min-h-screen bg-[#F0F8FF]">
      <div className="max-w-6xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Générateur Langues
        </h1>
          <p className="text-lg text-gray-600">
            Générez des paragraphes ou corrigez vos thèmes avec IA
        </p>
      </div>

        {/* Barre de navigation d'outil (sticky) */}
        <div className="sticky top-0 z-10 bg-white/80 backdrop-blur-sm border-b border-[#E6EEF9] mb-6">
          <div className="flex items-center justify-between py-4">
            {/* Tabs d'outils */}
            <Tabs value={selectedTool} onValueChange={(value) => setSelectedTool(value as 'paragraph' | 'grammar')}>
              <TabsList className="grid w-auto grid-cols-2 bg-gray-100 p-1 rounded-xl">
                <TabsTrigger 
                  value="paragraph" 
                  className="flex items-center gap-2 px-4 py-2 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-gray-900"
                >
                  <FileText className="w-4 h-4" />
                  Paragraphe
                </TabsTrigger>
                <TabsTrigger 
                  value="grammar" 
                  className="flex items-center gap-2 px-4 py-2 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-gray-900"
                >
                  <Target className="w-4 h-4" />
                  Thème grammatical
                </TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Contrôles à droite */}
            <div className="flex items-center gap-4">
              {/* Sélecteur de langue */}
              <div className="flex bg-gray-100 rounded-lg p-1">
                {(['allemand', 'anglais', 'espagnol'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                      selectedLanguage === lang 
                        ? 'bg-white shadow-sm text-gray-900' 
                        : 'text-gray-600 hover:text-gray-900'
                    }`}
                  >
                    <span className="text-base">{getLanguageFlag(lang)}</span>
                    {lang.charAt(0).toUpperCase() + lang.slice(1)}
                  </button>
                ))}
              </div>

              {/* Mode examen */}
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-gray-500" />
                <Switch
                  checked={examMode}
                  onCheckedChange={setExamMode}
                  className="data-[state=checked]:bg-orange-500"
                />
                <span className="text-sm text-gray-600">Mode examen</span>
              </div>

              {/* Auto-save */}
              <Badge 
                variant={autoSave ? "default" : "secondary"}
                className={`${autoSave ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}
              >
                <Save className="w-3 h-3 mr-1" />
                Auto-save {autoSave ? 'ON' : 'OFF'}
              </Badge>
            </div>
          </div>
        </div>

        {/* Grille principale */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
          {/* Colonne gauche - Source */}
          <Card className="bg-white rounded-2xl shadow-sm border border-[#E6EEF9]">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold text-gray-900">
                  {selectedTool === 'paragraph' ? 'Sujet de paragraphe' : 'Phrase à traduire'}
                </CardTitle>
                <div className="flex gap-2">
                  <Badge variant="outline" className="text-xs">Avancé</Badge>
                  <Badge variant="outline" className="text-xs">Spécialisé</Badge>
                </div>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              {sourceText ? (
                <div className="bg-gray-50 rounded-lg p-4 min-h-[120px]">
                  <p className="text-gray-700 leading-relaxed">{sourceText}</p>
                </div>
              ) : (
                <div className="bg-gray-50 rounded-lg p-4 min-h-[120px] flex items-center justify-center">
                  <p className="text-gray-500 text-center">
                    Cliquez sur "Nouvelle phrase" pour commencer
                  </p>
                </div>
              )}
              
              <div className="flex gap-2">
                <Button 
                  onClick={handleNewPhrase}
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                  <Plus className="w-4 h-4 mr-2" />
                  Nouvelle phrase
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={() => setShowHints(!showHints)}
                  className={showHints ? 'bg-blue-50 text-blue-700' : ''}
                >
                  <Eye className="w-4 h-4 mr-2" />
                  Indices
                </Button>
                <Button 
                  variant="ghost"
                  onClick={() => setShowGlossary(!showGlossary)}
                  className={showGlossary ? 'bg-blue-50 text-blue-700' : ''}
                >
                  <BookOpen className="w-4 h-4 mr-2" />
                  Glossaire
                </Button>
              </div>
            </CardContent>
          </Card>

          {/* Colonne droite - Réponse */}
          <Card className="bg-white rounded-2xl shadow-sm border border-[#E6EEF9]">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold text-gray-900">
                {selectedTool === 'paragraph' ? 'Votre paragraphe' : 'Votre traduction'}
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Textarea
                value={userResponse}
                onChange={(e) => setUserResponse(e.target.value)}
                placeholder="Tapez votre traduction ici..."
                className="min-h-[120px] resize-none border-gray-200 focus:border-orange-500 focus:ring-orange-500"
              />
              
              <div className="flex justify-end gap-2">
                <Button 
                  variant="ghost" 
                  onClick={handleReset}
                  className="text-gray-600 hover:text-gray-900"
                >
                  <RotateCcw className="w-4 h-4 mr-2" />
                  Reset
                </Button>
                <Button 
                  onClick={handleEvaluate}
                  className="bg-orange-500 hover:bg-orange-600 text-white"
                >
                  <CheckCircle className="w-4 h-4 mr-2" />
                  Évaluer
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Résultats d'évaluation */}
        {evaluationResult && (
          <Card className="bg-white rounded-2xl shadow-sm border border-[#E6EEF9] mb-6">
            <CardHeader className="pb-4">
              <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-500" />
                Correction détaillée
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Score</h4>
                  <div className="text-2xl font-bold text-orange-500">
                    {evaluationResult.score}/10
                  </div>
                  <p className="text-gray-600 mt-1">{evaluationResult.feedback}</p>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900 mb-2">Erreurs détectées</h4>
                  <ul className="space-y-1">
                    {evaluationResult.errors.map((error: string, index: number) => (
                      <li key={index} className="text-sm text-red-600 flex items-center gap-2">
                        <span className="w-1.5 h-1.5 bg-red-500 rounded-full"></span>
                        {error}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        )}

        {/* Barre d'action secondaire */}
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <div className="relative">
              <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
                <Download className="w-4 h-4 mr-2" />
                Exporter
              </Button>
              <div className="absolute top-full left-0 mt-1 bg-white rounded-lg shadow-lg border border-gray-200 py-1 min-w-[120px] hidden group-hover:block">
                <button 
                  onClick={() => handleExport('copy')}
                  className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2"
                >
                  <Copy className="w-4 h-4" />
                  Copier
                </button>
                <button 
                  onClick={() => handleExport('download')}
                  className="w-full px-3 py-2 text-left text-sm hover:bg-gray-50 flex items-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  Télécharger
                </button>
              </div>
            </div>
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              <History className="w-4 h-4 mr-2" />
              Historique
            </Button>
            <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
              <HelpCircle className="w-4 h-4 mr-2" />
              Aide
            </Button>
          </div>
        </div>

        {/* Progression */}
        <Card className="bg-white rounded-2xl shadow-sm border border-[#E6EEF9]">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold text-gray-900 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-blue-500" />
              Progression — {selectedLanguage.charAt(0).toUpperCase() + selectedLanguage.slice(1)}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{sessionStats.phrasesDone}</div>
                <div className="text-sm text-gray-600">Phrases</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-red-500">{sessionStats.averageScore}/10</div>
                <div className="text-sm text-gray-600">Moyenne</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{sessionStats.currentStreak}</div>
                <div className="text-sm text-gray-600">Série</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">{sessionStats.sessionGoal}%</div>
                <div className="text-sm text-gray-600">Objectif</div>
              </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-orange-500 h-2 rounded-full transition-all duration-300"
                style={{ width: `${Math.min(sessionStats.sessionGoal, 100)}%` }}
              ></div>
            </div>
            <div className="flex items-center gap-2 mt-2 text-sm text-gray-500">
              <Clock className="w-4 h-4" />
              Dernière session : {new Date().toLocaleDateString('fr-FR')}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default LanguagesGeneratorPage;
