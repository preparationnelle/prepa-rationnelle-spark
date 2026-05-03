import React, { useState, useEffect } from 'react';
import { Languages } from 'lucide-react';
import { LanguageParagraphGenerator } from '@/components/generator/LanguageParagraphGenerator';
import { ThemeGrammaticalGenerator } from '@/components/grammar/ThemeGrammaticalGenerator';
import { GeneratorHero } from '@/components/generator/GeneratorHero';

const UnifiedLanguagesGeneratorPage = () => {
  const [selectedTool, setSelectedTool] = useState<'paragraph' | 'grammar'>('grammar');
  const [selectedLanguage, setSelectedLanguage] = useState<'allemand' | 'anglais' | 'espagnol'>('anglais');
  const [autoSave, setAutoSave] = useState(true);

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
    localStorage.setItem(
      'languagesGeneratorState',
      JSON.stringify({ selectedTool, selectedLanguage, autoSave })
    );
  }, [selectedTool, selectedLanguage, autoSave]);

  return (
    <div className="min-h-screen bg-pr-gray-bg">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-12">
          <GeneratorHero
            badge="Langues"
            badgeIcon={Languages}
            title="Générateur"
            highlight="Langues"
            subtitle="Améliore tes compétences en thème grammatical grâce à l'IA."
            breadcrumb="Langues"
          />
        </div>

        {selectedTool === 'paragraph' ? (
          <div className="bg-white rounded-2xl border border-pr-gray-light overflow-hidden">
            <div className="h-[3px] w-full bg-pr-orange" />
            <div className="px-6 py-5 border-b border-pr-gray-light bg-pr-gray-bg">
              <h2 className="font-dm-serif text-xl text-pr-black">Dépose l'article</h2>
            </div>
            <div className="p-6 sm:p-8">
              <LanguageParagraphGenerator language="fr" selectedLanguage={selectedLanguage} />
            </div>
          </div>
        ) : (
          <ThemeGrammaticalGenerator />
        )}
      </div>
    </div>
  );
};

export default UnifiedLanguagesGeneratorPage;
