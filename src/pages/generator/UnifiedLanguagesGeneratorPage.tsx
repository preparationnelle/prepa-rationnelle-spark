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
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            Générateur
            <span className="block mt-2 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Langues
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Améliorez vos compétences en thème grammatical grâce à l'IA
          </p>
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