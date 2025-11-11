import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { FileText, Home, ChevronRight, BookOpen, MessageSquare, Wand2, Target, CheckCircle } from 'lucide-react';
import Navigation from '@/components/Navigation';

const FormationArabeSommairePage = () => {
  const [language] = useState<'fr' | 'en'>('fr');

  const generatorTools = [
    {
      id: 'paragraph',
      title: 'Générateur de Paragraphes',
      description: 'Créez des paragraphes argumentatifs en arabe basés sur des articles de presse',
      icon: MessageSquare,
      component: null
    },
    {
      id: 'grammar',
      title: 'Générateur de Thèmes',
      description: 'Entraînez-vous aux thèmes grammaticaux avec correction automatique',
      icon: Wand2,
      component: null
    }
  ];

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden">
        {/* Floating elements - Blue and orange bubbles */}
        <div className="absolute -z-10 top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute -z-10 bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute -z-10 top-40 right-20 w-48 h-48 bg-orange-100 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute -z-10 bottom-40 left-20 w-56 h-56 bg-blue-200 rounded-full opacity-5 animate-pulse"></div>
        <div className="absolute -z-10 top-1/4 left-1/3 w-64 h-64 bg-orange-50 rounded-full opacity-10 animate-pulse-slow"></div>
        <div className="absolute -z-10 top-3/4 right-1/4 w-40 h-40 bg-blue-100 rounded-full opacity-5 animate-pulse"></div>

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
              <Link to="/formation/arabe" className="hover:text-foreground transition-colors">
                Arabe
              </Link>
              <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
              <span className="text-foreground">Sommaire</span>
            </div>
          </div>
        </nav>

        <div className="container mx-auto px-4 py-8 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
                  <BookOpen className="h-8 w-8 text-white" />
                </div>
              </div>
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
                <span className="text-black">Formation </span>
                <span className="text-orange-500">Arabe</span>
              </h1>
              <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto leading-relaxed">
                Préparation complète au concours SESAME - Arabe
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/">
                  <Badge variant="outline" className="px-4 py-2 border-orange-500 text-orange-600 hover:bg-orange-50">
                    <Home className="mr-2 h-4 w-4" />
                    Retour à l'accueil
                  </Badge>
                </Link>
                <Link to="/formations">
                  <Badge variant="outline" className="px-4 py-2 border-orange-500 text-orange-600 hover:bg-orange-50">
                    ← Toutes les formations
                  </Badge>
                </Link>
              </div>
            </div>

            {/* Main Content */}
            <div className="grid lg:grid-cols-3 gap-8 mb-12">
              {/* Grammar Section */}
              <Card className="hover:shadow-xl transition-all duration-300 border-orange-200 hover:border-orange-300">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
                  <CardTitle className="flex items-center text-orange-700">
                    <FileText className="mr-2 h-5 w-5" />
                    Grammaire
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">
                    Maîtrisez la grammaire arabe avec des exercices interactifs et des explications détaillées.
                  </p>
                  <Link to="/formation/arabe/grammaire">
                    <Badge className="bg-orange-500 hover:bg-orange-600 text-white cursor-pointer">
                      Explorer la grammaire →
                    </Badge>
                  </Link>
                </CardContent>
              </Card>

              {/* Civilization Section */}
              <Card className="hover:shadow-xl transition-all duration-300 border-orange-200 hover:border-orange-300">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
                  <CardTitle className="flex items-center text-orange-700">
                    <BookOpen className="mr-2 h-5 w-5" />
                    Civilisation
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">
                    Découvrez la civilisation et la culture arabes à travers l'histoire et l'actualité.
                  </p>
                  <Link to="/formation/arabe/civilisation">
                    <Badge className="bg-orange-500 hover:bg-orange-600 text-white cursor-pointer">
                      Explorer la civilisation →
                    </Badge>
                  </Link>
                </CardContent>
              </Card>

              {/* Vocabulary Section */}
              <Card className="hover:shadow-xl transition-all duration-300 border-orange-200 hover:border-orange-300">
                <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
                  <CardTitle className="flex items-center text-orange-700">
                    <Target className="mr-2 h-5 w-5" />
                    Vocabulaire
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <p className="text-gray-600 mb-4">
                    Enrichissez votre vocabulaire arabe avec des flashcards et des exercices thématiques.
                  </p>
                  <Link to="/formation/arabe/vocabulaire">
                    <Badge className="bg-orange-500 hover:bg-orange-600 text-white cursor-pointer">
                      Explorer le vocabulaire →
                    </Badge>
                  </Link>
                </CardContent>
              </Card>
            </div>

            {/* Generator Tools */}
            <Card className="mb-8 border-orange-200">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
                <CardTitle className="flex items-center text-orange-700">
                  <Wand2 className="mr-2 h-5 w-5" />
                  Outils de Génération
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-2 gap-6">
                  {generatorTools.map((tool) => (
                    <div key={tool.id} className="flex items-start space-x-4 p-4 rounded-lg border border-orange-100 hover:border-orange-300 transition-colors">
                      <div className="flex-shrink-0">
                        <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                          <tool.icon className="h-5 w-5 text-orange-600" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">{tool.title}</h4>
                        <p className="text-sm text-gray-600 mb-3">{tool.description}</p>
                        <Badge className="bg-orange-500 hover:bg-orange-600 text-white cursor-pointer">
                          Utiliser l'outil →
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* SESAME Preparation Section */}
            <Card className="border-orange-200">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50">
                <CardTitle className="flex items-center text-orange-700">
                  <CheckCircle className="mr-2 h-5 w-5" />
                  Préparation Concours SESAME
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <p className="text-gray-600 mb-4">
                  Préparez-vous efficacement aux épreuves d'arabe du concours SESAME avec notre programme complet.
                </p>
                <div className="grid md:grid-cols-3 gap-4">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <FileText className="h-6 w-6 text-orange-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">QCU/QCM</h4>
                    <p className="text-sm text-gray-600">Entraînement aux questions à choix multiple</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <BookOpen className="h-6 w-6 text-orange-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">Analyse documentaire</h4>
                    <p className="text-sm text-gray-600">Méthodologie pour les épreuves complexes</p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-2">
                      <Target className="h-6 w-6 text-orange-600" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-1">Réussite garantie</h4>
                    <p className="text-sm text-gray-600">Préparation optimale pour le concours</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default FormationArabeSommairePage;
