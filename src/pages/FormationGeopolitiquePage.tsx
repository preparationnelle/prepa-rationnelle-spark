import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link, useNavigate } from "react-router-dom";
import { Globe, Target, Newspaper, FileText, ExternalLink, Sparkles, CheckCircle, BookOpen } from 'lucide-react';
import { GeopoliticsGenerator } from '@/components/generator/GeopoliticsGenerator';
import { GeopoliticsFlashcards } from '@/components/GeopoliticsFlashcards';
import { GeopoliticsReferences } from '@/components/GeopoliticsReferences';

const FormationGeopolitiquePage = () => {
  const [language] = useState<'fr' | 'en'>('fr');
  const navigate = useNavigate();

  const programmeModules = [
    {
      id: 1,
      title: "Analyses géopolitiques",
      description: "Comprendre les logiques de puissance et les recompositions régionales pour éclairer l'actualité.",
      points: [
        "Relations internationales et géo‑économie",
        "Conflits contemporains et stratégies",
        "Ressources, climat et transitions",
      ],
      icon: Globe,
      color: "bg-orange-500",
    },
    {
      id: 2,
      title: "Veille & actualités",
      description: "Méthodes pour suivre, trier et analyser l'actualité pertinente pour les concours.",
      points: [
        "Cartes et indicateurs clés",
        "Notes de synthèse hebdomadaires",
        "Liens vers sources fiables",
      ],
      icon: Newspaper,
      color: "bg-amber-500",
    },
    {
      id: 3,
      title: "Méthodes de dissertation",
      description: "Du décodage du sujet au plan problématisé, avec exemples et connecteurs.",
      points: [
        "Analyse du sujet et enjeux",
        "Plans types et transitions",
        "Exemples contemporains commentés",
      ],
      icon: FileText,
      color: "bg-orange-600",
    },
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
          <div className="p-3 rounded-lg bg-orange-600 text-white">
            <Globe className="h-8 w-8" />
          </div>
          Formation Géopolitique
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Analysez les enjeux mondiaux contemporains avec une méthode claire et des outils modernes
        </p>
        <div className="flex justify-center gap-2 mt-4">
          <Badge variant="secondary">Niveau prépa</Badge>
          <Badge variant="outline">10–12 heures</Badge>
          <Badge className="bg-orange-600">Actualisée</Badge>
        </div>
      </div>

      {/* Navigation par Chapitres */}
      <div className="mb-10">
        <h2 className="text-center text-3xl font-bold text-gray-800 mb-8">Choisissez votre niveau d'étude</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Sélectionnez l'année correspondant à votre niveau pour accéder au programme détaillé des modules de géopolitique.
        </p>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card 
            className="p-6 hover:shadow-lg transition-all duration-200 bg-white cursor-pointer transform hover:-translate-y-1"
            onClick={() => navigate('/formation/geopolitique/premiere-annee')}
            role="button"
            tabIndex={0}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold text-blue-600">Première Année</h2>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">
                Modules 1 & 2 : Les grandes mutations du monde (1913 à nos jours) et la mondialisation contemporaine. Formation aux méthodes et concepts de base de la géopolitique.
              </p>
              <div className="bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg text-center hover:bg-blue-700 transition-colors">
                Accéder aux modules
              </div>
            </div>
          </Card>

          <Card 
            className="p-6 hover:shadow-lg transition-all duration-200 bg-white cursor-pointer transform hover:-translate-y-1"
            onClick={() => navigate('/formation/geopolitique/deuxieme-annee')}
            role="button"
            tabIndex={0}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-2xl font-semibold text-orange-600">Deuxième Année</h2>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">
                Modules 3 & 4 : Géodynamiques régionales de l'Union européenne, de l'Afrique, du Proche et Moyen-Orient, des Amériques et de l'Asie. Approche synthétique par aires géographiques.
              </p>
              <div className="bg-orange-600 text-white font-semibold py-3 px-4 rounded-lg text-center hover:bg-orange-700 transition-colors">
                Accéder aux modules
              </div>
            </div>
          </Card>
        </div>

        {/* Module transversal - Sujets probables */}
        <div className="mt-8 max-w-4xl mx-auto">
          <Card 
            className="p-6 hover:shadow-lg transition-all duration-200 bg-white cursor-pointer transform hover:-translate-y-1 border-l-4 border-green-500"
            onClick={() => navigate('/formation/geopolitique/sujets-probables')}
            role="button"
            tabIndex={0}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Target className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-semibold text-green-600">Pronostics géopolitiques 2025</h2>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">
                Découvrez les sujets les plus probables pour les concours 2025, analysés par des experts. Entraînez-vous avec des plans détaillés et des développements complets sur les thématiques prioritaires.
              </p>
              <div className="bg-green-600 text-white font-semibold py-3 px-4 rounded-lg text-center hover:bg-green-700 transition-colors">
                Découvrir les pronostics 2025
              </div>
            </div>
          </Card>
        </div>

        {/* Module transversal - Chronologie de l'Europe */}
        <div className="mt-8 max-w-4xl mx-auto">
          <Card 
            className="p-6 hover:shadow-lg transition-all duration-200 bg-white cursor-pointer transform hover:-translate-y-1 border-l-4 border-blue-500"
            onClick={() => navigate('/formation/geopolitique/chronologie-europe')}
            role="button"
            tabIndex={0}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold text-blue-600">Chronologie de l'Europe</h2>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">
                Maîtrisez l'histoire européenne de 1648 à nos jours : des traités de Westphalie à la construction européenne contemporaine. Tous les événements clés chronologiquement organisés.
              </p>
              <div className="bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg text-center hover:bg-blue-700 transition-colors">
                Explorer la chronologie européenne
              </div>
            </div>
          </Card>
        </div>

        {/* Module transversal - Amérique latine */}
        <div className="mt-8 max-w-4xl mx-auto">
          <Card 
            className="p-6 hover:shadow-lg transition-all duration-200 bg-white cursor-pointer transform hover:-translate-y-1 border-l-4 border-amber-500"
            onClick={() => navigate('/formation/geopolitique/amerique-latine')}
            role="button"
            tabIndex={0}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center">
                  <Globe className="w-6 h-6 text-amber-600" />
                </div>
                <h2 className="text-2xl font-semibold text-amber-600">Amérique latine</h2>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">
                Émergences, crises, intégrations régionales et géopolitique du sous-continent latino-américain. Entre rêve d'unité, influences extérieures et instabilités internes.
              </p>
              <div className="bg-amber-600 text-white font-semibold py-3 px-4 rounded-lg text-center hover:bg-amber-700 transition-colors">
                Accéder au cours →
              </div>
            </div>
          </Card>
        </div>
      </div>

      <Tabs defaultValue="programme" className="w-full">
        <TabsList className="grid w-full grid-cols-5 mb-8">
          <TabsTrigger value="programme">Programme</TabsTrigger>
          <TabsTrigger value="flashcards">Flashcards</TabsTrigger>
          <TabsTrigger value="generateurs">Générateur</TabsTrigger>
          <TabsTrigger value="references">Références</TabsTrigger>
          <TabsTrigger value="actualites">Actualités</TabsTrigger>
        </TabsList>

        {/* Programme */}
        <TabsContent value="programme">
          <div className="grid gap-6">
            {programmeModules.map((m) => (
              <Card key={m.id} className="border-2 hover:border-orange-500/50 transition-colors">
                <CardHeader>
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-lg ${m.color} text-white`}>
                      <m.icon className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="text-xl">{m.title}</CardTitle>
                      <p className="text-muted-foreground mt-1">{m.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                    {m.points.map((p, i) => (
                      <li key={i}>{p}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        {/* Références */}
        <TabsContent value="references">
          <GeopoliticsReferences />
        </TabsContent>

        {/* Générateur */}
        <TabsContent value="generateurs">
          <Card className="border-2 hover:border-orange-500/50 transition-colors mb-6">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-orange-600" />
                Générateur Géopolitique
              </CardTitle>
              <p className="text-muted-foreground">
                Entrez l'URL d'un PDF de cours ou collez un extrait pour générer automatiquement un cours structuré, des flashcards, des sujets de dissertation et une veille d'actualité.
              </p>
            </CardHeader>
            <CardContent>
              <GeopoliticsGenerator language={language} />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Flashcards */}
        <TabsContent value="flashcards">
          <Card className="border-2 hover:border-orange-500/50 transition-colors mb-6">
            <CardHeader>
              <CardTitle className="text-2xl">Les 200 mots de la géopolitique</CardTitle>
              <p className="text-muted-foreground">Cartes de révision avec définitions clés et nuances indispensables.</p>
            </CardHeader>
            <CardContent>
              <GeopoliticsFlashcards />
            </CardContent>
          </Card>
        </TabsContent>

        {/* Actualités */}
        <TabsContent value="actualites">
          <Card className="border-2 hover:border-orange-500/50 transition-colors">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Newspaper className="h-5 w-5 text-orange-600" />
                Suivi de l'actualité
              </CardTitle>
              <p className="text-muted-foreground">
                Restez informé des événements marquants et intégrez-les efficacement dans vos copies.
              </p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-4">
                {[
                  'Veille hebdomadaire thématisée',
                  "Cartes et chiffres clés à citer",
                  'Analyse rapide: faits → enjeux → impacts',
                ].map((item, i) => (
                  <div key={i} className="p-4 border rounded-lg flex items-start gap-2">
                    <CheckCircle className="h-4 w-4 text-orange-600 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{item}</p>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FormationGeopolitiquePage;