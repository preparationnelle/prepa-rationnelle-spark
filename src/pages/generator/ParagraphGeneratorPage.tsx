import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Languages } from 'lucide-react';
import { LanguageParagraphGenerator } from '@/components/generator/LanguageParagraphGenerator';

const ParagraphGeneratorPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<'allemand' | 'anglais' | 'espagnol'>('anglais');

  const languageOptions = [
    { value: 'anglais', label: 'Anglais', flag: 'EN' },
    { value: 'allemand', label: 'Allemand', flag: 'DE' },
    { value: 'espagnol', label: 'Espagnol', flag: 'ES' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100">
      {/* Header */}
      <div className="bg-white border-b border-gray-200 sticky top-0 z-10 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-6">
              <h1 className="text-xl font-semibold text-gray-900">Générateur de Paragraphes</h1>
              
              {/* Sélecteur de langue */}
              <Tabs value={selectedLanguage} onValueChange={(value) => setSelectedLanguage(value as any)}>
                <TabsList className="bg-gray-100">
                  {languageOptions.map((lang) => (
                    <TabsTrigger 
                      key={lang.value} 
                      value={lang.value}
                      className="data-[state=active]:bg-white"
                    >
                      {lang.label}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
            </div>

            <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-300">
              <Languages className="h-3 w-3 mr-1" />
              Génération de paragraphes
            </Badge>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="mb-6">
          <Card className="border-2 border-blue-200 bg-white">
            <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 border-b">
              <CardTitle className="text-2xl flex items-center gap-2 text-blue-800">
                <FileText className="h-6 w-6" />
                Générateur de Paragraphes Argumentatifs
              </CardTitle>
              <p className="text-sm text-blue-700 mt-2">
                Collez un article de presse et générez automatiquement un paragraphe argumentatif en {selectedLanguage}
              </p>
            </CardHeader>
            <CardContent className="p-6">
              <LanguageParagraphGenerator 
                language="fr" 
                selectedLanguage={selectedLanguage}
              />
            </CardContent>
          </Card>
        </div>

        {/* Info cards */}
        <div className="grid md:grid-cols-3 gap-4">
          <Card className="border border-blue-200">
            <CardContent className="p-4">
              <h3 className="font-semibold text-blue-900 mb-2">Comment utiliser</h3>
              <p className="text-sm text-gray-600">
                1. Collez un article de presse dans la zone de texte<br/>
                2. Ajoutez des mots-clés (optionnel)<br/>
                3. Cliquez sur "Générer"
              </p>
            </CardContent>
          </Card>

          <Card className="border border-blue-200">
            <CardContent className="p-4">
              <h3 className="font-semibold text-blue-900 mb-2">Langues disponibles</h3>
              <p className="text-sm text-gray-600">
                Anglais, Allemand et Espagnol<br/>
                Génération adaptée à chaque langue<br/>
                Vocabulaire de presse géopolitique
              </p>
            </CardContent>
          </Card>

          <Card className="border border-blue-200">
            <CardContent className="p-4">
              <h3 className="font-semibold text-blue-900 mb-2">Résultat</h3>
              <p className="text-sm text-gray-600">
                Paragraphe argumentatif structuré<br/>
                Points-clés extraits<br/>
                Prêt à utiliser dans vos essais
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ParagraphGeneratorPage;

