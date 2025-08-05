import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { LanguageParagraphGenerator } from '@/components/generator/LanguageParagraphGenerator';
import { ThemeGrammaticalGenerator } from '@/components/grammar/ThemeGrammaticalGenerator';
import { FileText, Target } from 'lucide-react';

const UnifiedLanguagesGeneratorPage = () => {
  const [selectedTool, setSelectedTool] = useState<'paragraph' | 'grammar'>('grammar');
  const [language] = useState<'fr' | 'en'>('fr');

  const tools = [
    {
      id: 'paragraph',
      title: 'Paragraphe',
      description: 'Générez des paragraphes argumentatifs de 150 mots en anglais, allemand ou espagnol avec vocabulaire clé',
      icon: FileText,
      color: 'from-blue-500 to-blue-600',
      component: <LanguageParagraphGenerator language={language} />
    },
    {
      id: 'grammar',
      title: 'Thème grammatical',
      description: 'Générateur et correcteur de thèmes de traduction avec notation détaillée instantanée',
      icon: Target,
      color: 'from-orange-500 to-red-500',
      component: <ThemeGrammaticalGenerator />
    }
  ];

  const currentTool = tools.find(tool => tool.id === selectedTool);

  return (
    <div className="min-h-screen bg-white">
      <div className="container mx-auto py-12 px-4 max-w-6xl">
        {/* En-tête moderne et centré */}
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Générateur Langues
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-medium">
            Générez des paragraphes ou corrigez vos thèmes avec IA
          </p>
        </div>



        {/* Contenu de l'outil sélectionné */}
        <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden">
          {currentTool?.component}
        </div>

        {/* Section supplémentaire à la fin de la page */}
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Carte Paragraphe */}
            <Card className="cursor-pointer transition-all duration-300 border-0 shadow-xl hover:shadow-2xl hover:-translate-y-2 bg-white hover:bg-gray-50">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-blue-500 to-blue-600 flex items-center justify-center shadow-lg">
                  <FileText className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-3">
                  Paragraphe
                </CardTitle>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Générez des paragraphes argumentatifs de 150 mots en anglais, allemand ou espagnol avec vocabulaire clé
                </p>
              </CardHeader>
              <CardContent className="pt-0 pb-8">
                <Button 
                  className="w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300 bg-gray-100 hover:bg-gray-200 text-gray-700"
                  onClick={() => setSelectedTool('paragraph')}
                >
                  Sélectionner cet outil
                </Button>
              </CardContent>
            </Card>

            {/* Carte Thème grammatical */}
            <Card className="cursor-pointer transition-all duration-300 border-0 shadow-xl hover:shadow-2xl hover:-translate-y-2 ring-4 ring-orange-200 bg-gradient-to-br from-orange-50 to-red-50">
              <CardHeader className="text-center pb-4">
                <div className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center shadow-lg">
                  <Target className="h-10 w-10 text-white" />
                </div>
                <CardTitle className="text-2xl font-bold text-gray-900 mb-3">
                  Thème grammatical
                </CardTitle>
                <p className="text-gray-600 text-lg leading-relaxed">
                  Générateur et correcteur de thèmes de traduction avec notation détaillée instantanée
                </p>
              </CardHeader>
              <CardContent className="pt-0 pb-8">
                <Button 
                  className="w-full py-4 text-lg font-semibold rounded-xl transition-all duration-300 bg-gradient-to-r from-orange-500 to-red-500 hover:from-orange-600 hover:to-red-600 text-white shadow-lg"
                  onClick={() => setSelectedTool('grammar')}
                >
                  Outil sélectionné
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnifiedLanguagesGeneratorPage; 