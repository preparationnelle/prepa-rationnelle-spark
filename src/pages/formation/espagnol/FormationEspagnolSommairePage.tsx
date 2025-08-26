import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { FileText, Home, ChevronRight, BookOpen, MessageSquare, Wand2, Target, CheckCircle } from 'lucide-react';

const FormationEspagnolSommairePage = () => {
  const [language] = useState<'fr' | 'en'>('fr');

  const generatorTools = [
    {
      id: 'paragraph',
      title: 'Générateur de Paragraphes',
      description: 'Créez des paragraphes argumentatifs en espagnol basés sur des articles de presse',
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
            <span className="text-foreground font-medium">Sommaire</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl bg-blue-600 text-white shadow-lg">
              <FileText className="h-12 w-12" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-orange-600 font-bold">
              Sommaire de la Formation
            </span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
            Guide complet pour naviguer dans votre formation espagnol ECG
          </p>
          <div className="flex flex-wrap justify-center gap-3 mb-8">
            <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">Guide complet</Badge>
            <Badge variant="outline" className="px-4 py-2 text-sm font-medium">4 étapes</Badge>
            <Badge className="bg-orange-600 px-4 py-2 text-sm font-medium text-white">Parcours recommandé</Badge>
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

        {/* Section Sommaire - Guide pas à pas */}
        <section className="py-16 px-4 sm:px-6 relative z-10 bg-gradient-to-br from-blue-50 via-white to-blue-100">
          <div className="container mx-auto max-w-6xl">
            <div className="grid gap-6 max-w-5xl mx-auto">
              {/* Étape 1: Modules principaux */}
              <Card className="border-2 border-blue-100 shadow-xl">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">1</span>
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                        Modules Principaux
                      </CardTitle>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        Les deux piliers fondamentaux de votre formation espagnol
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="flex items-center gap-3 mb-2">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                        <h3 className="font-semibold text-blue-800">Grammaire Espagnole</h3>
                      </div>
                      <p className="text-blue-700 text-sm">
                        Maîtrisez conjugaisons, syntaxe et structures avancées avec 6 fiches détaillées
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="flex items-center gap-3 mb-2">
                        <MessageSquare className="h-5 w-5 text-blue-600" />
                        <h3 className="font-semibold text-blue-800">Civilisation Hispanique</h3>
                      </div>
                      <p className="text-blue-700 text-sm">
                        Explorez l'Espagne et l'Amérique latine contemporaines pour vos épreuves
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Étape 2: Outils IA */}
              <Card className="border-2 border-blue-100 shadow-xl">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">2</span>
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                        Outils IA Intelligents
                      </CardTitle>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        Technologies avancées pour accélérer votre apprentissage
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="flex items-center gap-3 mb-2">
                        <MessageSquare className="h-5 w-5 text-blue-600" />
                        <h3 className="font-semibold text-blue-800">Générateur de Paragraphes</h3>
                      </div>
                      <p className="text-blue-700 text-sm">
                        Créez des paragraphes argumentatifs de 150 mots basés sur articles de presse
                      </p>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="flex items-center gap-3 mb-2">
                        <Wand2 className="h-5 w-5 text-blue-600" />
                        <h3 className="font-semibold text-blue-800">Générateur de Thèmes</h3>
                      </div>
                      <p className="text-blue-700 text-sm">
                        Entraînez-vous aux thèmes grammaticaux avec correction automatique
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Étape 3: Vocabulaire spécialisé */}
              <Card className="border-2 border-blue-100 shadow-xl">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">3</span>
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                        Vocabulaire Espagnol
                      </CardTitle>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        Maîtrisez le lexique essentiel pour vos épreuves de concours
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="bg-blue-50 p-6 rounded-lg border border-blue-200">
                    <div className="flex items-center gap-3 mb-3">
                      <MessageSquare className="h-6 w-6 text-blue-600" />
                      <h3 className="font-semibold text-blue-800 text-lg">Flashcards Interactives</h3>
                    </div>
                    <p className="text-blue-700 text-base leading-relaxed">
                      Plus de 70 termes et expressions classés par thématiques : institutions,
                      élections, partis, législation, administration et relations internationales.
                      Idéal pour maîtriser le vocabulaire spécifique aux concours ECG.
                    </p>
                  </div>
                </CardContent>
              </Card>

              {/* Étape 4: Ressources méthodologiques */}
              <Card className="border-2 border-blue-100 shadow-xl">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-lg">4</span>
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                        Méthodes et Ressources
                      </CardTitle>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        Techniques éprouvées pour réussir vos épreuves
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="flex items-center gap-3 mb-2">
                        <BookOpen className="h-5 w-5 text-blue-600" />
                        <h3 className="font-semibold text-blue-800">Méthodes Essentielles</h3>
                      </div>
                      <ul className="text-blue-700 text-sm space-y-1">
                        <li>• Version espagnole</li>
                        <li>• Thème espagnol</li>
                        <li>• Expression écrite</li>
                      </ul>
                    </div>
                    <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                      <div className="flex items-center gap-3 mb-2">
                        <Target className="h-5 w-5 text-blue-600" />
                        <h3 className="font-semibold text-blue-800">Préparation Concours</h3>
                      </div>
                      <ul className="text-blue-700 text-sm space-y-1">
                        <li>• Épreuves écrites</li>
                        <li>• Épreuves orales</li>
                        <li>• Civilisation hispanique</li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Guide de navigation */}
              <Card className="border-2 border-blue-100 shadow-xl bg-gradient-to-r from-blue-50 to-blue-100">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                      <ChevronRight className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-2xl font-bold text-gray-800 mb-2">
                        Parcours Recommandé
                      </CardTitle>
                      <p className="text-gray-600 text-lg leading-relaxed">
                        Suivez ce guide étape par étape pour optimiser votre apprentissage
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white font-bold text-sm">1</span>
                      </div>
                      <div>
                        <p className="text-gray-800 font-medium">Commencez par la Grammaire</p>
                        <p className="text-gray-600 text-sm">Maîtrisez les bases avec nos 6 fiches détaillées</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white font-bold text-sm">2</span>
                      </div>
                      <div>
                        <p className="text-gray-800 font-medium">Utilisez les Générateurs IA</p>
                        <p className="text-gray-600 text-sm">Entraînez-vous avec nos outils de correction automatique</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white font-bold text-sm">3</span>
                      </div>
                      <div>
                        <p className="text-gray-800 font-medium">Explorez la Civilisation</p>
                        <p className="text-gray-600 text-sm">Découvrez l'actualité hispanique pour vos dissertations</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center shadow-md">
                        <span className="text-white font-bold text-sm">4</span>
                      </div>
                      <div>
                        <p className="text-gray-800 font-medium">Perfectionnez-vous</p>
                        <p className="text-gray-600 text-sm">Utilisez méthodes et vocabulaire pour vos révisions finales</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FormationEspagnolSommairePage;