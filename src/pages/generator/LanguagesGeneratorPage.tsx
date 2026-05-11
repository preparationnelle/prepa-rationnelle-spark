import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Switch } from '@/components/ui/switch';
import { FileText, Target, Save, Zap, Languages, Home, ChevronRight } from 'lucide-react';
import { LanguageParagraphGenerator } from '@/components/generator/LanguageParagraphGenerator';
import { ThemeGrammaticalGenerator } from '@/components/grammar/ThemeGrammaticalGenerator';

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
            <span className="carnet-eyebrow text-[11px]">Langues</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-14 lg:py-16">
        <header className="mb-12 max-w-[820px]">
          <div className="carnet-eyebrow mb-5">Langues · Avancé</div>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
              <Languages className="h-6 w-6 text-carnet-red" />
            </div>
            <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.05] text-carnet-ink tracking-tight">
              Générateur <em className="font-lora italic text-carnet-red">Langues</em>.
            </h1>
          </div>
          <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.6] text-carnet-ink-soft max-w-[640px]">
            Génère des paragraphes ou corrige tes <span className="carnet-hl font-lora italic">thèmes grammaticaux</span> avec l'IA.
          </p>
        </header>

        {/* Barre d'outils */}
        <div className="mb-6 carnet-card p-4">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <Tabs value={selectedTool} onValueChange={(v) => setSelectedTool(v as 'paragraph' | 'grammar')}>
              <TabsList className="grid w-auto grid-cols-2 bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] p-1 rounded-md h-auto">
                <TabsTrigger
                  value="paragraph"
                  className="flex items-center gap-2 px-4 py-2 rounded font-instrument text-sm font-semibold data-[state=active]:bg-carnet-red data-[state=active]:text-carnet-paper text-carnet-ink-soft transition-all"
                >
                  <FileText className="w-4 h-4" />
                  Paragraphe
                </TabsTrigger>
                <TabsTrigger
                  value="grammar"
                  className="flex items-center gap-2 px-4 py-2 rounded font-instrument text-sm font-semibold data-[state=active]:bg-carnet-red data-[state=active]:text-carnet-paper text-carnet-ink-soft transition-all"
                >
                  <Target className="w-4 h-4" />
                  Thème grammatical
                </TabsTrigger>
              </TabsList>
            </Tabs>

            <div className="flex items-center gap-4 flex-wrap">
              <div className="flex bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] rounded-md p-1">
                {(['allemand', 'anglais', 'espagnol'] as const).map((lang) => (
                  <button
                    key={lang}
                    onClick={() => setSelectedLanguage(lang)}
                    className={`flex items-center gap-2 px-3 py-1.5 rounded text-sm font-semibold font-instrument transition-colors ${
                      selectedLanguage === lang
                        ? 'bg-[rgba(193,68,58,0.08)] text-carnet-red'
                        : 'text-carnet-ink-mute hover:text-carnet-ink'
                    }`}
                  >
                    <span className="text-base">{getLanguageFlag(lang)}</span>
                    {lang.charAt(0).toUpperCase() + lang.slice(1)}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-carnet-ink-mute" />
                <Switch
                  checked={examMode}
                  onCheckedChange={setExamMode}
                  className="data-[state=checked]:bg-carnet-red"
                />
                <span className="text-sm text-carnet-ink-soft font-instrument">Mode examen</span>
              </div>

              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.12em] font-instrument border ${
                  autoSave
                    ? 'bg-[rgba(193,68,58,0.06)] text-carnet-red border-[rgba(193,68,58,0.2)]'
                    : 'bg-carnet-paper-2 text-carnet-ink-mute border-dashed border-[rgba(78,55,30,0.18)]'
                }`}
              >
                <Save className="w-3 h-3" />
                Auto-save {autoSave ? 'ON' : 'OFF'}
              </span>
            </div>
          </div>
        </div>

        {selectedTool === 'paragraph' ? (
          <div className="carnet-card overflow-hidden mb-6">
            <div className="px-6 py-5 border-b border-dashed border-[rgba(78,55,30,0.18)] bg-carnet-paper-2">
              <h2 className="font-lora text-[22px] text-carnet-ink">Sujet de paragraphe</h2>
            </div>
            <div className="p-6 sm:p-8">
              <LanguageParagraphGenerator language="fr" selectedLanguage={selectedLanguage} />
            </div>
          </div>
        ) : (
          <ThemeGrammaticalGenerator />
        )}

        {/* Section explicative */}
        <div className="carnet-card p-6 sm:p-8 text-center">
          <div className="flex items-baseline justify-center gap-4 mb-3">
            <span className="carnet-hand text-[36px] text-carnet-red leading-none font-semibold">?</span>
            <h2 className="font-lora text-[26px] text-carnet-ink leading-tight">
              Pourquoi travailler le <em className="font-lora italic text-carnet-red">thème grammatical</em> ?
            </h2>
          </div>
          <div className="flex justify-center mb-5">
            <div className="h-[2px] w-12 bg-carnet-ink rounded-full" />
          </div>
          <p className="text-base text-carnet-ink-soft font-instrument leading-[1.65] mb-6 max-w-3xl mx-auto">
            <span className="font-semibold text-carnet-ink">C'est capital pour les concours.</span> Le thème grammatical tombe régulièrement aux épreuves écrites et orales des Grandes Écoles de Commerce.
          </p>

          <div className="grid md:grid-cols-2 gap-4 max-w-3xl mx-auto text-left">
            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] rounded-md p-5">
              <h3 className="font-semibold text-carnet-ink mb-2 font-instrument">Apprentissage structuré</h3>
              <p className="text-sm leading-[1.65] text-carnet-ink-soft font-instrument">
                Maîtrise les constructions grammaticales complexes et les règles essentielles pour une expression parfaite.
              </p>
            </div>
            <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] rounded-md p-5">
              <h3 className="font-semibold text-carnet-ink mb-2 font-instrument">Phrases idiomatiques</h3>
              <p className="text-sm leading-[1.65] text-carnet-ink-soft font-instrument">
                Découvre des tournures idiomatiques naturelles pour enrichir ton vocabulaire et ton style.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LanguagesGeneratorPage;
