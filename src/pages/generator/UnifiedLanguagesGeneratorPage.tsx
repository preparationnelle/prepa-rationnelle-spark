import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { 
  FileText, 
  Target, 
  Save,
  Zap
} from 'lucide-react';
import { toast } from 'sonner';
import { LanguageParagraphGenerator } from '@/components/generator/LanguageParagraphGenerator';
import { ThemeGrammaticalGenerator } from '@/components/grammar/ThemeGrammaticalGenerator';

const UnifiedLanguagesGeneratorPage = () => {
  // États principaux
  const [selectedTool, setSelectedTool] = useState<'paragraph' | 'grammar'>('grammar');
  const [selectedLanguage, setSelectedLanguage] = useState<'allemand' | 'anglais' | 'espagnol'>('anglais');
  const [examMode, setExamMode] = useState(false);
  const [autoSave, setAutoSave] = useState(true);
  // Ancien état lié à l'ancien outil de grammaire supprimé

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

  // Suppression des anciens handlers liés au faux générateur de grammaire

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

        {/* Contenu principal */}
        {selectedTool === 'paragraph' ? (
          <div className="grid grid-cols-1 gap-6 mb-6">
            <Card className="bg-white rounded-2xl shadow-sm border border-[#E6EEF9]">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <CardTitle className="text-lg font-semibold text-gray-900">
                    Déposez l'article
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <LanguageParagraphGenerator 
                  language="fr" 
                  selectedLanguage={selectedLanguage}
                />
              </CardContent>
            </Card>
          </div>
        ) : (
          <ThemeGrammaticalGenerator />
        )}
      </div>
    </div>
  );
};

export default UnifiedLanguagesGeneratorPage; 