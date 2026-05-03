import React, { useState } from 'react';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { BookOpen, Brain, Target, Layout, Zap, Library } from 'lucide-react';
import { CultureGeneraleParagraphGenerator } from '@/components/generator/CultureGeneraleParagraphGenerator';
import { ThemeDefinitionGenerator } from '@/components/generator/ThemeDefinitionGenerator';
import { ProblematiquesGenerator } from '@/components/generator/ProblematiquesGenerator';
import { GeneratorHero } from '@/components/generator/GeneratorHero';

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
    <div className="min-h-screen bg-pr-gray-bg">
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="mb-12">
            <GeneratorHero
              badge="Culture Générale"
              badgeIcon={Library}
              title="Générateur"
              highlight="Culture Générale"
              subtitle="Un espace unique pour t'exercer : thèmes, problématiques, plans et rédaction de paragraphes."
              breadcrumb="Culture Générale"
            />
          </div>

          <div className="max-w-5xl mx-auto bg-white rounded-2xl border border-pr-gray-light overflow-hidden">
            <div className="h-[3px] w-full bg-pr-orange" />
            <div className="p-4 sm:p-6">
              <Tabs value={selectedTool} onValueChange={(v) => setSelectedTool(v as Tool)} className="w-full">
                <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 bg-pr-gray-bg border border-pr-gray-light p-1 h-auto rounded-xl">
                  {tools.map((t) => (
                    <TabsTrigger
                      key={t.id}
                      value={t.id}
                      className="flex items-center justify-center gap-2 data-[state=active]:bg-pr-orange data-[state=active]:text-white text-pr-gray-dark py-2.5 px-2 text-sm font-medium font-dm-sans whitespace-normal break-words rounded-lg transition-all"
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
                    <div className="bg-white rounded-xl border border-pr-gray-light p-12 text-center">
                      <div className="w-16 h-16 bg-pr-orange-pale rounded-2xl flex items-center justify-center mx-auto mb-5">
                        <Layout className="h-8 w-8 text-pr-orange-dark" />
                      </div>
                      <h3 className="font-dm-serif text-2xl text-pr-black mb-2">Déterminer des plans</h3>
                      <p className="text-pr-gray-dark font-dm-sans mb-5">Plans en 2 ou 3 parties, détaillés et argumentés.</p>
                      <div className="inline-flex items-center gap-2 bg-pr-orange-pale text-pr-orange-dark px-3 py-1.5 rounded-full text-[11px] font-semibold uppercase tracking-[0.08em] font-dm-sans">
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
      </section>
    </div>
  );
};

export default CultureGeneraleGeneratorPage;
