import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import { Globe, Target, FileText, Sparkles, BookOpen, Clock, Home, ChevronRight, PenTool } from 'lucide-react';

const FormationGeopolitiquePage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-[#F8FAFF]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F8FAFF]/60 border-b border-border/40">
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
            <span className="text-foreground font-medium">Formation Géopolitique</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Formation Géopolitique</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Analysez les enjeux mondiaux contemporains avec une méthode claire et des outils modernes
          </p>
        </div>

      {/* Navigation par Chapitres */}
      <div className="mb-10">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">Choisissez votre niveau d'étude</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Sélectionnez l'année correspondant à votre niveau pour accéder au programme détaillé des modules de géopolitique.
        </p>
        
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <Link to="/formation/geopolitique/premiere-annee" className="block">
            <Card className="border-2 hover:border-blue-500/50 transition-colors cursor-pointer h-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-blue-500 text-white">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        Première Année
                        <Badge className="bg-blue-500 text-white">Disponible</Badge>
                      </CardTitle>
                      <h3 className="text-xl font-semibold text-gray-800 mt-1">
                        Fondamentaux géopolitiques
                      </h3>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Bases fondamentales et méthodes géopolitiques. Découvrez les mutations mondiales depuis 1913 et maîtrisez les outils d'analyse essentiels.
                </p>
                <Button variant="outline" className="w-full">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Accéder aux modules
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link to="/formation/geopolitique/deuxieme-annee" className="block">
            <Card className="border-2 hover:border-orange-500/50 transition-colors cursor-pointer h-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-orange-500 text-white">
                      <Globe className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        Deuxième Année
                        <Badge className="bg-orange-500 text-white">Disponible</Badge>
                      </CardTitle>
                      <h3 className="text-xl font-semibold text-gray-800 mt-1">
                        Géodynamiques régionales
                      </h3>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Explorez les grandes régions du monde : Europe, Afrique, Amériques, Asie, Moyen-Orient. Analyses détaillées, chronologies et enjeux contemporains.
                </p>
                <Button variant="outline" className="w-full">
                  <Globe className="mr-2 h-4 w-4" />
                  Accéder aux modules
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Modules transversaux */}
        <div className="mt-8 max-w-4xl mx-auto grid gap-6">
          <Link to="/formation/geopolitique/sujets-probables" className="block">
            <Card className="border-2 hover:border-green-500/50 transition-colors cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-green-500 text-white">
                      <Target className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        Pronostics 2025
                        <Badge className="bg-green-500 text-white">Mis à jour</Badge>
                      </CardTitle>
                      <h3 className="text-xl font-semibold text-gray-800 mt-1">
                        Sujets probables géopolitiques
                      </h3>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Découvrez les sujets les plus probables pour les concours 2025, analysés par des experts. Plans détaillés et développements sur les thématiques prioritaires.
                </p>
                <Button variant="outline" className="w-full">
                  <Target className="mr-2 h-4 w-4" />
                  Découvrir les pronostics
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link to="/formation/geopolitique/etudes-de-cas" className="block">
            <Card className="border-2 hover:border-gray-500/50 transition-colors cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-gray-500 text-white">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        Études de cas
                        <Badge className="bg-gray-500 text-white">19 études</Badge>
                      </CardTitle>
                      <h3 className="text-xl font-semibold text-gray-800 mt-1">
                        Analyses thématiques essentielles
                      </h3>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Migrations, transports, énergies, ressources, crises et puissances. Données actualisées 2024-2025 avec chiffres clés et analyses géopolitiques.
                </p>
                <Button variant="outline" className="w-full">
                  <FileText className="mr-2 h-4 w-4" />
                  Explorer les études de cas
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link to="/formation/geopolitique/chronologies" className="block">
            <Card className="border-2 hover:border-indigo-500/50 transition-colors cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-indigo-500 text-white">
                      <Clock className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        Chronologies
                        <Badge className="bg-indigo-500 text-white">6 régions</Badge>
                      </CardTitle>
                      <h3 className="text-xl font-semibold text-gray-800 mt-1">
                        Repères historiques régionaux
                      </h3>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Europe, Moyen-Orient, Amériques, Asie, Afrique. Repères chronologiques essentiels de 1492 à 2025 pour maîtriser l'histoire contemporaine.
                </p>
                <Button variant="outline" className="w-full">
                  <Clock className="mr-2 h-4 w-4" />
                  Explorer les chronologies
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>

        {/* Outils et ressources */}
        <div className="mt-8 max-w-4xl mx-auto grid gap-6">
          <h2 className="text-2xl font-bold text-center mb-6">Outils et Ressources</h2>
          
          <Link to="/formation/geopolitique/flashcards" className="block">
            <Card className="border-2 hover:border-blue-500/50 transition-colors cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-blue-500 text-white">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        Flashcards
                        <Badge className="bg-blue-500 text-white">200 mots</Badge>
                      </CardTitle>
                      <h3 className="text-xl font-semibold text-gray-800 mt-1">
                        Vocabulaire géopolitique essentiel
                      </h3>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Cartes de révision avec définitions clés et nuances indispensables pour maîtriser le vocabulaire géopolitique.
                </p>
                <Button variant="outline" className="w-full">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Accéder aux flashcards
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link to="/generator/geopolitics-unified" className="block">
            <Card className="border-2 hover:border-orange-500/50 transition-colors cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-orange-500 text-white">
                      <Sparkles className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        Générateur IA
                        <Badge className="bg-orange-500 text-white">Premium</Badge>
                      </CardTitle>
                      <h3 className="text-xl font-semibold text-gray-800 mt-1">
                        Contenu géopolitique automatisé
                      </h3>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Générez automatiquement cours structurés, flashcards, sujets de dissertation et veille d'actualité à partir de vos sources.
                </p>
                <Button variant="outline" className="w-full">
                  <Sparkles className="mr-2 h-4 w-4" />
                  Accéder au générateur
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link to="/formation/geopolitique/references" className="block">
            <Card className="border-2 hover:border-purple-500/50 transition-colors cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-purple-500 text-white">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        Références
                        <Badge className="bg-purple-500 text-white">Thématiques</Badge>
                      </CardTitle>
                      <h3 className="text-xl font-semibold text-gray-800 mt-1">
                        Bibliographie complète
                      </h3>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Bibliographie thématique organisée avec ouvrages indispensables pour approfondir vos connaissances géopolitiques.
                </p>
                <Button variant="outline" className="w-full">
                  <FileText className="mr-2 h-4 w-4" />
                  Consulter les références
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link to="/formation/geopolitique/methodologie" className="block">
            <Card className="border-2 hover:border-emerald-500/50 transition-colors cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-emerald-500 text-white">
                      <PenTool className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        Méthodologie
                        <Badge className="bg-emerald-500 text-white">Prépa</Badge>
                      </CardTitle>
                      <h3 className="text-xl font-semibold text-gray-800 mt-1">
                        Méthodes de travail quotidien
                      </h3>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Apprenez à maîtriser les études de cas passe-partout, les dissertations types et les techniques d'entraînement efficaces.
                </p>
                <Button variant="outline" className="w-full">
                  <PenTool className="mr-2 h-4 w-4" />
                  Découvrir la méthodologie
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormationGeopolitiquePage;