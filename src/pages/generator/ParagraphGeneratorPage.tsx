import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { FileText, Languages, ChevronRight, Sparkles, BookOpen, PenTool } from 'lucide-react';
import { LanguageParagraphGenerator } from '@/components/generator/LanguageParagraphGenerator';
import { Link } from 'react-router-dom';
import { useProgress } from "@/context/ProgressContext";

const ParagraphGeneratorPage = () => {
  const [selectedLanguage, setSelectedLanguage] = useState<'allemand' | 'anglais' | 'espagnol'>('anglais');
  const { trackPageVisit } = useProgress();

  useEffect(() => {
    trackPageVisit('generator');
  }, [trackPageVisit]);

  const languageOptions = [
    { value: 'anglais', label: 'Anglais', flag: '🇬🇧' },
    { value: 'allemand', label: 'Allemand', flag: '🇩🇪' },
    { value: 'espagnol', label: 'Espagnol', flag: '🇪🇸' }
  ];

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">
      {/* Floating elements - Orange bubbles */}
      <div className="absolute -z-10 top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute -z-10 bottom-20 right-10 w-28 h-28 bg-orange-200 rounded-full opacity-15 animate-pulse-slow"></div>
      <div className="absolute -z-10 top-40 right-20 w-48 h-48 bg-orange-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute -z-10 bottom-40 left-20 w-56 h-56 bg-orange-200 rounded-full opacity-8 animate-pulse"></div>
      <div className="absolute -z-10 top-1/4 left-1/3 w-64 h-64 bg-orange-50 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute -z-10 top-3/4 right-1/4 w-40 h-40 bg-orange-100 rounded-full opacity-8 animate-pulse"></div>
      <div className="absolute -z-10 top-10 right-1/3 w-24 h-24 bg-orange-300 rounded-full opacity-12 animate-pulse-slow"></div>

      {/* Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-border/40">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center text-sm text-muted-foreground">
            <Link to="/" className="hover:text-orange-600 transition-colors">Accueil</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <Link to="/generator" className="hover:text-orange-600 transition-colors">Générateurs</Link>
            <ChevronRight className="h-4 w-4 mx-2" />
            <span className="text-foreground font-medium text-orange-600">Paragraphes</span>
          </div>
        </div>
      </nav>

      {/* Content */}
      <div className="container mx-auto py-12 px-4 relative z-10">
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center p-3 bg-orange-100 rounded-2xl mb-6 shadow-sm">
            <FileText className="h-10 w-10 text-orange-600" />
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Générateur de <span className="bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">Paragraphes</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed mb-8">
            Collez un article de presse et générez automatiquement un paragraphe argumentatif structuré dans la langue de votre choix.
          </p>

          {/* Sélecteur de langue */}
          <div className="flex justify-center mb-8">
            <Tabs value={selectedLanguage} onValueChange={(value) => setSelectedLanguage(value as any)} className="w-full max-w-md">
              <TabsList className="grid w-full grid-cols-3 bg-orange-50/50 border border-orange-100 p-1 rounded-xl">
                {languageOptions.map((lang) => (
                  <TabsTrigger
                    key={lang.value}
                    value={lang.value}
                    className="data-[state=active]:bg-white data-[state=active]:text-orange-600 data-[state=active]:shadow-sm rounded-lg transition-all duration-300"
                  >
                    <span className="mr-2">{lang.flag}</span>
                    {lang.label}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        </div>

        <div className="max-w-5xl mx-auto mb-12">
          <Card className="border border-gray-100 shadow-xl bg-white overflow-hidden">
            <CardHeader className="bg-white border-b border-gray-100 pb-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-orange-50 rounded-xl">
                    <PenTool className="h-6 w-6 text-orange-600" />
                  </div>
                  <div>
                    <CardTitle className="text-2xl font-bold text-gray-900">
                      Zone de rédaction
                    </CardTitle>
                    <p className="text-gray-500 text-sm mt-1">
                      Analyse et génération automatique
                    </p>
                  </div>
                </div>
                <Badge variant="outline" className="bg-orange-50 text-orange-700 border-orange-200 px-3 py-1">
                  <Sparkles className="h-3 w-3 mr-1" />
                  IA Powered
                </Badge>
              </div>
            </CardHeader>
            <CardContent className="p-6 sm:p-8">
              <LanguageParagraphGenerator
                language="fr"
                selectedLanguage={selectedLanguage}
              />
            </CardContent>
          </Card>
        </div>

        {/* Info cards */}
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          <Card className="border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <BookOpen className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Comment utiliser</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Collez simplement un article de presse, ajoutez quelques mots-clés optionnels pour guider l'IA, et obtenez un paragraphe structuré instantanément.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-purple-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <Languages className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Multi-langues</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Compatible avec l'Anglais, l'Allemand et l'Espagnol. L'IA utilise le vocabulaire spécifique et les connecteurs logiques adaptés à chaque langue.
              </p>
            </CardContent>
          </Card>

          <Card className="border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 bg-white group">
            <CardContent className="p-6">
              <div className="w-12 h-12 bg-green-50 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                <FileText className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Résultat optimisé</h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Obtenez un paragraphe argumentatif clair et concis (100-150 mots) ainsi que les points clés extraits pour faciliter votre apprentissage.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ParagraphGeneratorPage;

