import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Sparkles, PenTool, Home, ChevronRight } from 'lucide-react';
import { LanguageParagraphGenerator } from '@/components/generator/LanguageParagraphGenerator';
import { useProgress } from '@/context/ProgressContext';

const languageOptions = [
  { value: 'anglais', label: 'Anglais', flag: '🇬🇧' },
  { value: 'allemand', label: 'Allemand', flag: '🇩🇪' },
  { value: 'espagnol', label: 'Espagnol', flag: '🇪🇸' },
];

const ParagraphGeneratorPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<'allemand' | 'anglais' | 'espagnol'>('anglais');
  const { trackPageVisit } = useProgress();

  useEffect(() => {
    trackPageVisit('generator');
  }, [trackPageVisit]);

  return (
    <div className="min-h-screen carnet-paper">
      {/* Fil d'Ariane */}
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
            <span className="carnet-eyebrow text-[11px]">Paragraphes</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-14 lg:py-16">
        {/* Hero */}
        <header className="mb-12 max-w-[820px]">
          <div className="carnet-eyebrow mb-5">Feedback IA · Langues</div>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
              <FileText className="h-6 w-6 text-carnet-red" />
            </div>
            <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.05] text-carnet-ink tracking-tight">
              Générateur de <em className="font-lora italic text-carnet-red">Paragraphes</em>.
            </h1>
          </div>
          <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.6] text-carnet-ink-soft max-w-[640px]">
            Colle un article de presse <span className="font-instrument text-carnet-ink-mute">ou pioche un thème</span>, et génère un <span className="carnet-hl font-lora italic">paragraphe argumentatif structuré</span> dans la langue de ton choix.
          </p>
          <p className="font-instrument text-[14px] lg:text-[15px] text-carnet-ink-mute mt-3 max-w-[640px]">
            Méthode 5 étapes · 14 banques thématiques anglo-saxonnes · paragraphe annoté prêt à mémoriser.
          </p>
        </header>

        {/* Sélecteur de langue */}
        <div className="flex justify-center mb-10">
          <Tabs value={selectedLanguage} onValueChange={(value) => setSelectedLanguage(value as any)} className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-3 bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] p-1 rounded-md h-auto">
              {languageOptions.map((lang) => (
                <TabsTrigger
                  key={lang.value}
                  value={lang.value}
                  className="data-[state=active]:bg-carnet-red data-[state=active]:text-carnet-paper text-carnet-ink-soft rounded transition-all py-2 font-instrument text-sm font-semibold"
                >
                  <span className="mr-2">{lang.flag}</span>
                  {lang.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Carte rédaction — design carnet */}
        <div className="max-w-5xl mx-auto carnet-card overflow-hidden">
          <div className="px-6 py-5 border-b border-dashed border-[rgba(78,55,30,0.18)] bg-carnet-paper-2 flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center">
                <PenTool className="h-5 w-5 text-carnet-red" />
              </div>
              <div>
                <h2 className="font-lora text-[22px] text-carnet-ink">Zone de rédaction</h2>
                <p className="font-instrument text-[12px] text-carnet-ink-mute mt-0.5">Analyse et génération automatique</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 bg-[rgba(193,68,58,0.08)] text-carnet-red px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.12em] font-instrument border border-[rgba(193,68,58,0.2)]">
              <Sparkles className="h-3 w-3" />
              IA Powered
            </span>
          </div>
          <div className="p-6 sm:p-8">
            <LanguageParagraphGenerator language="fr" selectedLanguage={selectedLanguage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ParagraphGeneratorPage;
