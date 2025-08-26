import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { BookOpen, Wand2, MessageSquare, Home, ChevronRight } from 'lucide-react';
import { LanguageParagraphGenerator } from '@/components/generator/LanguageParagraphGenerator';
import { ThemeGrammaticalGenerator } from '@/components/grammar/ThemeGrammaticalGenerator';

const FormationEspagnolGenerateursPage = () => {
  const [language] = useState<'fr' | 'en'>('fr');

  const generatorTools = [
    {
      id: 'paragraph',
      title: 'Générateur de Paragraphes',
      description: 'Créez des paragraphes argumentatifs en espagnol basés sur des articles de presse',
      icon: MessageSquare,
      component: <LanguageParagraphGenerator language={language} selectedLanguage="espagnol" />
    },
    {
      id: 'grammar',
      title: 'Générateur de Thèmes',
      description: 'Entraînez-vous aux thèmes grammaticaux avec correction automatique',
      icon: Wand2,
      component: <ThemeGrammaticalGenerator />
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden">
      {/* Floating elements - Blue and orange bubbles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-orange-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-40 left-20 w-56 h-56 bg-blue-200 rounded-full opacity-5 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-orange-50 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-5 animate-pulse"></div>

      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-[#F8FAFF]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F8FAFF]/60 border-b border-border/40 relative z-10">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formations" className="hover:text-foreground transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <Link to="/formation/espagnol" className="hover:text-foreground transition-colors">
              Formation Espagnol ECG
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Générateurs IA</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl bg-blue-600 text-white shadow-lg">
              <Wand2 className="h-12 w-12" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-orange-600 font-bold">
              Générateurs IA
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Outils IA pour l'entraînement pratique et la correction automatique
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">Correction automatique</Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm font-medium">Entraînement IA</Badge>
            <Badge className="bg-orange-600 px-4 py-2 text-sm font-medium text-white">Technologie avancée</Badge>
          </div>

          {/* Navigation buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <Link to="/formation/espagnol">
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 shadow-md hover:shadow-lg">
                ← Retour à la formation
              </button>
            </Link>
          </div>
        </div>

        {/* Section Générateurs IA */}
        <section className="py-16 px-4 sm:px-6 relative z-10">
          <div className="container mx-auto max-w-6xl">
            <div className="grid gap-6 max-w-4xl mx-auto">
              {generatorTools.map((tool) => (
                <Card key={tool.id} className="border-2 border-blue-100 hover:border-blue-500/50 transition-all duration-300 shadow-md hover:shadow-xl group cursor-pointer">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <div className="p-4 rounded-xl bg-blue-600 text-white group-hover:scale-110 transition-transform duration-300 shadow-lg">
                          <tool.icon className="h-8 w-8" />
                        </div>
                        <div>
                          <CardTitle className="flex items-center gap-2 mb-2">
                            <span className="text-xl font-semibold text-gray-800 group-hover:text-blue-600 transition-colors">
                              {tool.title}
                            </span>
                            <Badge className="bg-orange-600 text-white">IA</Badge>
                          </CardTitle>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6 text-base leading-relaxed">{tool.description}</p>
                    {tool.component}
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FormationEspagnolGenerateursPage;