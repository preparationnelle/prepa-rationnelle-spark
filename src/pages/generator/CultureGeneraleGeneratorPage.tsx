import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { BookOpen, Brain, Target, Layout, Zap, Library, Home, ChevronRight } from 'lucide-react';
import { CultureGeneraleParagraphGenerator } from '@/components/generator/CultureGeneraleParagraphGenerator';
import { ThemeDefinitionGenerator } from '@/components/generator/ThemeDefinitionGenerator';
import { ProblematiquesGenerator } from '@/components/generator/ProblematiquesGenerator';

type Tool = 'paragraph' | 'themes' | 'problematiques' | 'plans';

const tools = [
  { id: 'paragraph', icon: BookOpen, label: 'Rédacteur de paragraphe' },
  { id: 'themes', icon: Target, label: 'Définir des thèmes' },
  { id: 'problematiques', icon: Brain, label: 'Problématiques' },
  { id: 'plans', icon: Layout, label: 'Déterminer des plans' },
] as const;

const CultureGeneraleGeneratorPage: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<Tool>('problematiques');

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
            <span className="carnet-eyebrow text-[11px]">Culture Générale</span>
          </div>
        </div>
      </nav>

      <div className="mx-auto max-w-[1180px] pl-6 pr-6 lg:pl-[200px] lg:pr-16 py-14 lg:py-16">
        <header className="mb-12 max-w-[820px]">
          <div className="carnet-eyebrow mb-5">Feedback IA · Culture Générale</div>
          <div className="flex items-center gap-4 mb-5">
            <div className="w-14 h-14 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
              <Library className="h-6 w-6 text-carnet-red" />
            </div>
            <h1 className="font-lora text-[40px] sm:text-[52px] lg:text-[60px] leading-[1.05] text-carnet-ink tracking-tight">
              Générateur <em className="font-lora italic text-carnet-red">Culture Générale</em>.
            </h1>
          </div>
          <p className="font-instrument text-[17px] lg:text-[19px] leading-[1.6] text-carnet-ink-soft max-w-[640px]">
            Un espace unique pour t'exercer : <span className="carnet-hl font-lora italic">thèmes, problématiques, plans</span> et rédaction de paragraphes.
          </p>
        </header>

        <div className="max-w-5xl mx-auto carnet-card overflow-hidden">
          <div className="p-4 sm:p-6">
            <Tabs value={selectedTool} onValueChange={(v) => setSelectedTool(v as Tool)} className="w-full">
              <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] p-1 h-auto rounded-md">
                {tools.map((t) => (
                  <TabsTrigger
                    key={t.id}
                    value={t.id}
                    className="flex items-center justify-center gap-2 data-[state=active]:bg-carnet-red data-[state=active]:text-carnet-paper text-carnet-ink-soft py-2.5 px-2 text-sm font-semibold font-instrument whitespace-normal break-words rounded transition-all"
                  >
                    <t.icon className="h-4 w-4 flex-shrink-0" />
                    <span className="text-center leading-tight">{t.label}</span>
                  </TabsTrigger>
                ))}
              </TabsList>

              <div className="mt-6">
                <TabsContent value="paragraph" className="mt-0">
                  <CultureGeneraleParagraphGenerator />
                </TabsContent>

                <TabsContent value="themes" className="mt-0">
                  <ThemeDefinitionGenerator />
                </TabsContent>

                <TabsContent value="problematiques" className="mt-0">
                  <ProblematiquesGenerator />
                </TabsContent>

                <TabsContent value="plans" className="mt-0">
                  <div className="bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] rounded-md p-12 text-center">
                    <div className="w-16 h-16 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center mx-auto mb-5">
                      <Layout className="h-8 w-8 text-carnet-red" />
                    </div>
                    <h3 className="font-lora text-[24px] text-carnet-ink mb-2">
                      Déterminer des <em className="font-lora italic text-carnet-red">plans</em>
                    </h3>
                    <p className="text-carnet-ink-soft font-instrument mb-5">Plans en 2 ou 3 parties, détaillés et argumentés.</p>
                    <div className="inline-flex items-center gap-2 bg-[rgba(193,68,58,0.06)] text-carnet-red px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.12em] font-instrument border border-[rgba(193,68,58,0.2)]">
                      <Zap className="h-3.5 w-3.5" />
                      Bientôt disponible
                    </div>
                  </div>
                </TabsContent>
              </div>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CultureGeneraleGeneratorPage;
