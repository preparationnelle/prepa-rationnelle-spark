import React, { useState } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { BookOpen, Brain, Target, Layout, Zap } from 'lucide-react';
import { CultureGeneraleParagraphGenerator } from '@/components/generator/CultureGeneraleParagraphGenerator';
import { ThemeDefinitionGenerator } from '@/components/generator/ThemeDefinitionGenerator';
import { ProblematiquesGenerator } from '@/components/generator/ProblematiquesGenerator';

const CultureGeneraleGeneratorPage: React.FC = () => {
  const [selectedTool, setSelectedTool] = useState<'paragraph' | 'themes' | 'problematiques' | 'plans'>('problematiques');

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Bubbles background, cohérent avec le style du site */}
      <div className="absolute -z-10 top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-10 animate-pulse" />
      <div className="absolute -z-10 bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-10 animate-pulse-slow" />
      <div className="absolute -z-10 top-40 right-20 w-48 h-48 bg-orange-100 rounded-full opacity-10 animate-pulse-slow" />
      <div className="absolute -z-10 bottom-40 left-20 w-56 h-56 bg-orange-200 rounded-full opacity-5 animate-pulse" />

      <section className="py-12 px-4 relative z-10">
        <div className="container mx-auto max-w-7xl">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">
              <span className="text-black">Générateur </span>
              <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
                Culture Générale
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 max-w-3xl mx-auto">
              Un espace unique pour t'exercer: thèmes, problématiques, plans et rédaction de paragraphes.
            </p>
          </div>

          {/* Tabs pour sélectionner l'outil */}
          <div className="mb-8">
            <Card className="max-w-5xl mx-auto bg-white shadow-lg border border-gray-200">
              <CardContent className="p-4">
                <Tabs
                  value={selectedTool}
                  onValueChange={(value) => setSelectedTool(value as 'paragraph' | 'themes' | 'problematiques' | 'plans')}
                  className="w-full"
                >
                  <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 bg-gray-100 p-1 h-auto min-h-[60px]">
                    <TabsTrigger 
                      value="paragraph" 
                      className="flex items-center justify-center gap-2 data-[state=active]:bg-white data-[state=active]:text-orange-600 data-[state=active]:shadow-sm py-3 px-2 text-sm font-medium whitespace-normal break-words"
                    >
                      <BookOpen className="h-5 w-5 flex-shrink-0" />
                      <span className="text-center leading-tight">Rédacteur de paragraphe</span>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="themes" 
                      className="flex items-center justify-center gap-2 data-[state=active]:bg-white data-[state=active]:text-orange-600 data-[state=active]:shadow-sm py-3 px-2 text-sm font-medium whitespace-normal break-words"
                    >
                      <Target className="h-5 w-5 flex-shrink-0" />
                      <span className="text-center leading-tight">Définir des thèmes</span>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="problematiques" 
                      className="flex items-center justify-center gap-2 data-[state=active]:bg-white data-[state=active]:text-orange-600 data-[state=active]:shadow-sm py-3 px-2 text-sm font-medium whitespace-normal break-words"
                    >
                      <Brain className="h-5 w-5 flex-shrink-0" />
                      <span className="text-center leading-tight">Problématiques</span>
                    </TabsTrigger>
                    <TabsTrigger 
                      value="plans" 
                      className="flex items-center justify-center gap-2 data-[state=active]:bg-white data-[state=active]:text-orange-600 data-[state=active]:shadow-sm py-3 px-2 text-sm font-medium whitespace-normal break-words"
                    >
                      <Layout className="h-5 w-5 flex-shrink-0" />
                      <span className="text-center leading-tight">Déterminer des plans</span>
                    </TabsTrigger>
                  </TabsList>

                  {/* Contenu des onglets */}
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
                      <Card className="bg-white rounded-xl shadow-lg border border-gray-200">
                        <CardContent className="p-12 text-center">
                          <div className="w-16 h-16 bg-orange-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                            <Layout className="h-8 w-8 text-orange-600" />
                </div>
                          <h3 className="font-bold text-xl text-gray-900 mb-2">Déterminer des plans</h3>
                          <p className="text-gray-600 mb-4">Plans en 2 ou 3 parties, détaillés et argumentés.</p>
                          <div className="flex items-center justify-center gap-2 text-orange-600 font-medium">
                            <Zap className="h-4 w-4" />
                            <span>Bientôt disponible</span>
                </div>
                        </CardContent>
                      </Card>
                    </TabsContent>
              </div>
                </Tabs>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CultureGeneraleGeneratorPage;


