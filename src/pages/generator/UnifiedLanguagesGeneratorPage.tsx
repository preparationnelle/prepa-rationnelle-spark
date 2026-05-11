import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Languages, Home, ChevronRight } from 'lucide-react';
import { LanguageParagraphGenerator } from '@/components/generator/LanguageParagraphGenerator';
import { ThemeGrammaticalGenerator } from '@/components/grammar/ThemeGrammaticalGenerator';

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
    <div className="min-h-screen carnet-paper">
      <nav className="sticky top-0 z-40 carnet-paper-plain border-b border-dashed border-[rgba(78,55,30,0.18)]">
        <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-3">
          <div className="flex items-center font-instrument text-[12px] text-carnet-ink-mute flex-wrap">
            <Link to="/" className="flex items-center gap-1 hover:text-carnet-red transition-colors">
              <Home className="h-3.5 w-3.5" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <Link to="/generator" className="hover:text-carnet-red transition-colors">Générateurs</Link>
            <ChevronRight className="h-3 w-3 mx-2 opacity-50" />
            <span className="carnet-eyebrow text-[11px]">Langues unifié</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-14 lg:py-16">
        <header className="mb-12 max-w-[820px]">
          <div className="carnet-eyebrow mb-5">Feedback IA · Langues</div>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
              <Languages className="h-6 w-6 text-carnet-red" />
            </div>
            <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.05] text-carnet-ink tracking-tight">
              Générateur <em className="font-lora italic text-carnet-red">Langues</em>.
            </h1>
          </div>
          <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.6] text-carnet-ink-soft max-w-[640px]">
            Améliore tes compétences en <span className="carnet-hl font-lora italic">thème grammatical</span> grâce à l'IA.
          </p>
        </header>

        {selectedTool === 'paragraph' ? (
          <div className="carnet-card overflow-hidden">
            <div className="px-6 py-5 border-b border-dashed border-[rgba(78,55,30,0.18)] bg-carnet-paper-2">
              <h2 className="font-lora text-[22px] text-carnet-ink">Dépose l'article</h2>
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
