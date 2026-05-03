import React, { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Sparkles, PenTool } from 'lucide-react';
import { LanguageParagraphGenerator } from '@/components/generator/LanguageParagraphGenerator';
import { GeneratorHero } from '@/components/generator/GeneratorHero';
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
    <div className="min-h-screen bg-pr-gray-bg">
      <div className="container mx-auto py-12 px-4">
        <div className="mb-10">
          <GeneratorHero
            badge="Langues · Paragraphes"
            badgeIcon={FileText}
            title="Générateur de"
            highlight="Paragraphes"
            subtitle="Colle un article de presse et génère automatiquement un paragraphe argumentatif structuré dans la langue de ton choix."
            breadcrumb="Paragraphes"
          />
        </div>

        {/* Sélecteur de langue */}
        <div className="flex justify-center mb-10">
          <Tabs value={selectedLanguage} onValueChange={(value) => setSelectedLanguage(value as any)} className="w-full max-w-md">
            <TabsList className="grid w-full grid-cols-3 bg-white border border-pr-gray-light p-1 rounded-xl h-auto">
              {languageOptions.map((lang) => (
                <TabsTrigger
                  key={lang.value}
                  value={lang.value}
                  className="data-[state=active]:bg-pr-orange data-[state=active]:text-white text-pr-gray-dark rounded-lg transition-all py-2 font-dm-sans text-sm font-medium"
                >
                  <span className="mr-2">{lang.flag}</span>
                  {lang.label}
                </TabsTrigger>
              ))}
            </TabsList>
          </Tabs>
        </div>

        {/* Carte rédaction — charte PR */}
        <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-pr-gray-light overflow-hidden">
          <div className="h-[3px] w-full bg-pr-orange" />
          <div className="px-6 py-5 border-b border-pr-gray-light bg-pr-gray-bg flex items-center justify-between flex-wrap gap-3">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-pr-orange-pale rounded-xl flex items-center justify-center">
                <PenTool className="h-5 w-5 text-pr-orange-dark" />
              </div>
              <div>
                <h2 className="font-dm-serif text-xl text-pr-black">Zone de rédaction</h2>
                <p className="font-dm-sans text-xs text-pr-gray-mid mt-0.5">Analyse et génération automatique</p>
              </div>
            </div>
            <span className="inline-flex items-center gap-1.5 bg-pr-orange-pale text-pr-orange-dark px-2.5 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.08em] font-dm-sans">
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
