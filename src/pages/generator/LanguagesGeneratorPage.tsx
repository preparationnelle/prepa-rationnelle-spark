
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
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
  Zap
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
  // Nettoyage des anciens états liés au faux évaluateur

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

  // Suppression des anciens handlers de l'outil non-fonctionnel

  const getLanguageFlag = (lang: string) => {
    const flags = {
      allemand: '🇩🇪',
      anglais: '🇬🇧',
      espagnol: '🇪🇸'
    };
    return flags[lang as keyof typeof flags] || '🇬🇧';
  };

  const handleExport = (type: 'copy' | 'download') => {
    // Fonction temporaire - sera implémentée plus tard
    toast.info(`${type === 'copy' ? 'Copie' : 'Téléchargement'} - Fonction à implémenter`);
  };

  return (
    <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden">
      {/* Floating elements - Blue bubbles like FormationAllemandPage */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-15 animate-pulse"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-blue-100 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-40 left-20 w-56 h-56 bg-blue-200 rounded-full opacity-8 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-50 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-8 animate-pulse"></div>
      <div className="absolute top-10 right-1/3 w-24 h-24 bg-blue-300 rounded-full opacity-12 animate-pulse"></div>
      <div className="absolute bottom-10 left-1/4 w-36 h-36 bg-blue-100 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute top-1/2 right-10 w-20 h-20 bg-blue-200 rounded-full opacity-15 animate-pulse"></div>
      <div className="absolute top-1/3 left-10 w-28 h-28 bg-blue-100 rounded-full opacity-8 animate-pulse"></div>

      <div className="max-w-6xl mx-auto px-4 py-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 via-blue-700 to-blue-600 bg-clip-text text-transparent font-bold">
              Générateur Langues
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-5xl mx-auto">
            Générez des paragraphes ou corrigez vos thèmes avec IA
          </p>
      </div>

        {/* Barre de navigation d'outil (sticky) */}
        <div className="sticky top-0 z-20 bg-[#F8FAFF]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F8FAFF]/60 border-b border-border/40 mb-6">
          <div className="flex items-center justify-between py-4">
            {/* Tabs d'outils */}
            <Tabs value={selectedTool} onValueChange={(value) => setSelectedTool(value as 'paragraph' | 'grammar')}>
              <TabsList className="grid w-auto grid-cols-2 bg-blue-50 p-1 rounded-xl">
                <TabsTrigger
                  value="paragraph"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-blue-700"
                >
                  <FileText className="w-4 h-4" />
                  Paragraphe
                </TabsTrigger>
                <TabsTrigger
                  value="grammar"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg data-[state=active]:bg-white data-[state=active]:shadow-sm data-[state=active]:text-blue-700"
                >
                  <Target className="w-4 h-4" />
                  Thème grammatical
                </TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Contrôles à droite */}
            <div className="flex items-center gap-4">
              {/* Sélecteur de langue */}
              <div className="flex bg-blue-50 rounded-lg p-1">
                {(['allemand', 'anglais', 'espagnol'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                      selectedLanguage === lang
                        ? 'bg-white shadow-sm text-blue-700'
                        : 'text-blue-600 hover:text-blue-800'
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
                className={`${autoSave ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-600'}`}
              >
                <Save className="w-3 h-3 mr-1" />
                Auto-save {autoSave ? 'ON' : 'OFF'}
              </Badge>
            </div>
          </div>
        </div>

        {/* Contenu principal */}
        {selectedTool === 'paragraph' ? (
          <Card className="bg-white rounded-xl shadow-md border border-blue-200 hover:shadow-xl transition-all duration-300 mb-6">
            <CardHeader className="pb-4">
              <div className="flex items-center justify-between">
                <CardTitle className="text-lg font-semibold text-blue-700">
                  Sujet de paragraphe
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent className="space-y-4">
              <LanguageParagraphGenerator language="fr" selectedLanguage={selectedLanguage} />
            </CardContent>
          </Card>
        ) : (
          <ThemeGrammaticalGenerator />
        )}

        {/* Section explicative - Importance du thème grammatical */}
        <div className="bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 rounded-xl p-6 mb-6 border border-blue-200 shadow-sm">
          <div className="text-center">
            <h2 className="text-xl sm:text-2xl font-bold text-blue-800 mb-4">
              🎯 Pourquoi travailler le thème grammatical ?
            </h2>
            <div className="max-w-4xl mx-auto space-y-4 text-blue-700">
              <p className="text-lg leading-relaxed">
                <span className="font-semibold text-blue-800">C'est capital pour les concours !</span> Le thème grammatical tombe régulièrement aux épreuves écrites et orales des Grandes Écoles de Commerce.
              </p>
              <div className="grid md:grid-cols-2 gap-6 mt-6">
                <div className="bg-white/70 rounded-lg p-4 border border-blue-200">
                  <h3 className="font-semibold text-blue-800 mb-2">📚 Apprentissage structuré</h3>
                  <p className="text-sm leading-relaxed">
                    Maîtrisez les constructions grammaticales complexes et les règles linguistiques essentielles pour une expression parfaite.
                  </p>
                </div>
                <div className="bg-white/70 rounded-lg p-4 border border-blue-200">
                  <h3 className="font-semibold text-blue-800 mb-2">🎭 Phrases idiomatiques</h3>
                  <p className="text-sm leading-relaxed">
                    Découvrez et apprenez des tournures idiomatiques naturelles pour enrichir votre vocabulaire et votre style.
                  </p>
                </div>
              </div>
              <p className="text-base font-medium mt-4">
                💡 Chaque exercice vous rapproche d'une meilleure maîtrise linguistique !
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default LanguagesGeneratorPage;
