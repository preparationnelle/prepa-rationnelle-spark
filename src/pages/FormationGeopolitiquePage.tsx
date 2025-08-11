
import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Link } from "react-router-dom";
import { Globe, Target, Newspaper, FileText, ExternalLink, Sparkles, CheckCircle } from 'lucide-react';
import { GeopoliticsGenerator } from '@/components/generator/GeopoliticsGenerator';
import { GeopoliticsFlashcards } from '@/components/GeopoliticsFlashcards';
import { GeopoliticsReferences } from '@/components/GeopoliticsReferences';

const FormationGeopolitiquePage = () => {
  const [language] = useState<'fr' | 'en'>('fr');

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

      <Tabs defaultValue="programme" className="w-full">
        <TabsList className="grid w-full grid-cols-6 mb-8">
          <TabsTrigger value="programme">Programme</TabsTrigger>
          <TabsTrigger value="flashcards">Flashcards</TabsTrigger>
          <TabsTrigger value="generateurs">Générateur</TabsTrigger>
          <TabsTrigger value="references">Références</TabsTrigger>
          <TabsTrigger value="actualites">Actualités</TabsTrigger>
          <TabsTrigger value="ressources">Ressources</TabsTrigger>
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

        {/* Ressources */}
        <TabsContent value="ressources">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Outils d'entraînement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Link to="/generator/geopolitics" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold mb-2">Générateur Géopolitique</h3>
                  <p className="text-sm text-muted-foreground">Créez des analyses et des fiches personnalisées</p>
                </Link>
                <Link to="/generator/geopolitics-unified" className="block p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold mb-2">Générateur Unifié</h3>
                  <p className="text-sm text-muted-foreground">Pipeline complet pour cours + sujets + veille</p>
                </Link>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>À propos de la formation</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Cette formation vise l'autonomie méthodologique et l'actualisation continue des connaissances. Elle combine cours structurés, veille et entraînement.
                </p>
                <Link to="/formations" className="inline-flex items-center gap-2 text-orange-700 hover:underline">
                  <ExternalLink className="h-4 w-4" />
                  Découvrir nos autres formations
                </Link>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FormationGeopolitiquePage;
