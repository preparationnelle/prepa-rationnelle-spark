import React, { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { FileText, Target, Save, Zap, Languages } from 'lucide-react';
import { LanguageParagraphGenerator } from '@/components/generator/LanguageParagraphGenerator';
import { ThemeGrammaticalGenerator } from '@/components/grammar/ThemeGrammaticalGenerator';
import { GeneratorHero } from '@/components/generator/GeneratorHero';

const LanguagesGeneratorPage = () => {
  const [selectedTool, setSelectedTool] = useState<'paragraph' | 'grammar'>('grammar');
  const [selectedLanguage, setSelectedLanguage] = useState<'allemand' | 'anglais' | 'espagnol'>('anglais');
  const [examMode, setExamMode] = useState(false);
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

  const getLanguageFlag = (lang: string) => {
    const flags = { allemand: '🇩🇪', anglais: '🇬🇧', espagnol: '🇪🇸' };
    return flags[lang as keyof typeof flags] || '🇬🇧';
  };

  return (
    <div className="min-h-screen bg-pr-gray-bg">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="mb-12">
          <GeneratorHero
            badge="Langues · Avancé"
            badgeIcon={Languages}
            title="Générateur"
            highlight="Langues"
            subtitle="Génère des paragraphes ou corrige tes thèmes grammaticaux avec l'IA."
            breadcrumb="Langues"
          />
        </div>

        {/* Barre d'outils sticky */}
        <div className="sticky top-0 z-20 bg-pr-gray-bg/95 backdrop-blur supports-[backdrop-filter]:bg-pr-gray-bg/70 border-b border-pr-gray-light mb-6 -mx-4 px-4">
          <div className="flex items-center justify-between py-4 flex-wrap gap-4">
            {/* Tabs outils */}
            <Tabs value={selectedTool} onValueChange={(v) => setSelectedTool(v as 'paragraph' | 'grammar')}>
              <TabsList className="grid w-auto grid-cols-2 bg-white border border-pr-gray-light p-1 rounded-xl h-auto">
                <TabsTrigger
                  value="paragraph"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg font-dm-sans text-sm data-[state=active]:bg-pr-orange data-[state=active]:text-white text-pr-gray-dark transition-all"
                >
                  <FileText className="w-4 h-4" />
                  Paragraphe
                </TabsTrigger>
                <TabsTrigger
                  value="grammar"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg font-dm-sans text-sm data-[state=active]:bg-pr-orange data-[state=active]:text-white text-pr-gray-dark transition-all"
                >
                  <Target className="w-4 h-4" />
                  Thème grammatical
                </TabsTrigger>
              </TabsList>
            </Tabs>

            {/* Contrôles */}
            <div className="flex items-center gap-4 flex-wrap">
              {/* Sélecteur langue */}
              <div className="flex bg-white border border-pr-gray-light rounded-lg p-1">
                {(['allemand', 'anglais', 'espagnol'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded-md text-sm font-medium font-dm-sans transition-colors ${
                      selectedLanguage === lang
                        ? 'bg-pr-orange-pale text-pr-orange-dark'
                        : 'text-pr-gray-mid hover:text-pr-black'
                    }`}
                  >
                    <span className="text-base">{getLanguageFlag(lang)}</span>
                    {lang.charAt(0).toUpperCase() + lang.slice(1)}
                  </button>
                ))}
              </div>

              {/* Mode examen */}
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-pr-gray-mid" />
                <Switch
                  checked={examMode}
                  onCheckedChange={setExamMode}
                  className="data-[state=checked]:bg-pr-orange"
                />
                <span className="text-sm text-pr-gray-dark font-dm-sans">Mode examen</span>
              </div>

              {/* Auto-save */}
              <span
                className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.08em] font-dm-sans ${
                  autoSave ? 'bg-pr-orange-pale text-pr-orange-dark' : 'bg-pr-gray-bg text-pr-gray-mid'
                }`}
              >
                <Save className="w-3 h-3" />
                Auto-save {autoSave ? 'ON' : 'OFF'}
              </span>
            </div>
          </div>
        </div>

        {/* Contenu principal */}
        {selectedTool === 'paragraph' ? (
          <div className="bg-white rounded-2xl border border-pr-gray-light overflow-hidden mb-6">
            <div className="h-[3px] w-full bg-pr-orange" />
            <div className="px-6 py-5 border-b border-pr-gray-light bg-pr-gray-bg">
              <h2 className="font-dm-serif text-xl text-pr-black">Sujet de paragraphe</h2>
            </div>
            <div className="p-6 sm:p-8">
              <LanguageParagraphGenerator language="fr" selectedLanguage={selectedLanguage} />
            </div>
          </div>
        ) : (
          <ThemeGrammaticalGenerator />
        )}

        {/* Section explicative */}
        <div className="bg-white rounded-2xl border border-pr-gray-light overflow-hidden">
          <div className="h-[3px] w-full bg-pr-orange" />
          <div className="p-6 sm:p-8 text-center">
            <h2 className="font-dm-serif text-2xl text-pr-black mb-2">
              Pourquoi travailler le thème grammatical ?
            </h2>
            <div className="flex justify-center mb-5">
              <div className="h-[2px] w-10 bg-pr-orange rounded-full" />
            </div>
            <p className="text-base text-pr-gray-dark font-dm-sans leading-relaxed mb-6 max-w-3xl mx-auto">
              <span className="font-semibold text-pr-black">C'est capital pour les concours.</span> Le thème grammatical tombe régulièrement aux épreuves écrites et orales des Grandes Écoles de Commerce.
            </p>

            <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
              <div className="bg-pr-gray-bg rounded-xl p-5 border border-pr-gray-light">
                <h3 className="font-semibold text-pr-black mb-2 font-dm-sans">Apprentissage structuré</h3>
                <p className="text-sm leading-relaxed text-pr-gray-dark font-dm-sans">
                  Maîtrise les constructions grammaticales complexes et les règles essentielles pour une expression parfaite.
                </p>
              </div>
              <div className="bg-pr-gray-bg rounded-xl p-5 border border-pr-gray-light">
                <h3 className="font-semibold text-pr-black mb-2 font-dm-sans">Phrases idiomatiques</h3>
                <p className="text-sm leading-relaxed text-pr-gray-dark font-dm-sans">
                  Découvre des tournures idiomatiques naturelles pour enrichir ton vocabulaire et ton style.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguagesGeneratorPage;
