import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { BookOpen, Wand2, MessageSquare } from 'lucide-react';
import { LanguageParagraphGenerator } from '@/components/generator/LanguageParagraphGenerator';
import { ThemeGrammaticalGenerator } from '@/components/grammar/ThemeGrammaticalGenerator';
import { SpanishVocabularyFlashcards } from '@/components/SpanishVocabularyFlashcards';

const FormationEspagnolPage = () => {
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

  const grammarTopics = [
    {
      title: 'Conjugaison et Temps',
      description: 'Maîtrisez les temps verbaux complexes : subjonctif, conditionnel, gérondif',
      items: ['Subjonctif présent et imparfait', 'Concordance des temps', 'Gérondif et participe', 'Ser vs Estar']
    },
    {
      title: 'Syntaxe Avancée',
      description: 'Structures syntaxiques sophistiquées pour enrichir votre expression',
      items: ['Propositions relatives', 'Expression de l\'hypothèse', 'Discours rapporté', 'Tournures idiomatiques']
    },
    {
      title: 'Vocabulaire Thématique',
      description: 'Lexique spécialisé par domaines pour les concours',
      items: ['Économie et société', 'Politique et institutions', 'Culture et arts', 'Environnement et développement']
    }
  ];

  return (
    <div className="container mx-auto py-8 px-4">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4 flex items-center justify-center gap-3">
          <div className="p-3 rounded-lg bg-orange-500 text-white">
            <BookOpen className="h-8 w-8" />
          </div>
          Formation Espagnol ECG
        </h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
          Formation complète pour exceller en espagnol aux concours des Grandes Écoles de Commerce
        </p>
        <div className="flex justify-center gap-2 mt-4">
          <Badge variant="secondary">Tous niveaux</Badge>
          <Badge variant="outline">6-8 heures</Badge>
          <Badge className="bg-orange-500">Complet</Badge>
        </div>
      </div>

      {/* Navigation principale vers les sections spécialisées */}
      <div className="grid md:grid-cols-2 gap-6 mb-12">
        <Link to="/formation/espagnol/grammaire">
          <Card className="h-full border-2 border-orange-200 hover:border-orange-400 transition-all duration-200 hover:shadow-lg cursor-pointer group">
            <CardHeader className="text-center">
              <div className="mx-auto p-4 rounded-xl bg-orange-500 text-white w-fit mb-4 group-hover:scale-105 transition-transform">
                <BookOpen className="h-10 w-10" />
              </div>
              <CardTitle className="text-2xl text-orange-700 group-hover:text-orange-800">Grammaire Espagnole</CardTitle>
              <p className="text-orange-600 mt-2">
                Conjugaisons, syntaxe et structures avancées pour maîtriser la langue espagnole
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-orange-600">
                  <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                  <span>Temps verbaux et conjugaisons</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-orange-600">
                  <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                  <span>Syntaxe et tournures idiomatiques</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-orange-600">
                  <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                  <span>Thèmes grammaticaux type concours</span>
                </div>
              </div>
              <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white">
                Accéder à la Grammaire
              </Button>
            </CardContent>
          </Card>
        </Link>

        <Link to="/formation/espagnol/civilisation">
          <Card className="h-full border-2 border-orange-200 hover:border-orange-400 transition-all duration-200 hover:shadow-lg cursor-pointer group">
            <CardHeader className="text-center">
              <div className="mx-auto p-4 rounded-xl bg-orange-500 text-white w-fit mb-4 group-hover:scale-105 transition-transform">
                <MessageSquare className="h-10 w-10" />
              </div>
              <CardTitle className="text-2xl text-orange-700 group-hover:text-orange-800">Civilisation Hispanique</CardTitle>
              <p className="text-orange-600 mt-2">
                Enjeux contemporains d'Espagne et d'Amérique latine pour réussir les épreuves
              </p>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-orange-600">
                  <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                  <span>Politique et démocratie</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-orange-600">
                  <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                  <span>Enjeux sociaux et égalité</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-orange-600">
                  <div className="w-2 h-2 rounded-full bg-orange-400"></div>
                  <span>Migrations et environnement</span>
                </div>
              </div>
              <Button className="w-full mt-4 bg-orange-500 hover:bg-orange-600 text-white">
                Accéder à la Civilisation
              </Button>
            </CardContent>
          </Card>
        </Link>
      </div>

      <Tabs defaultValue="programme" className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-8">
          <TabsTrigger value="programme">Programme</TabsTrigger>
          <TabsTrigger value="generateurs">Générateurs</TabsTrigger>
          <TabsTrigger value="vocabulaire">Vocabulaire</TabsTrigger>
          <TabsTrigger value="ressources">Ressources</TabsTrigger>
        </TabsList>

        <TabsContent value="programme">
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Programme Complet</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Un programme structuré pour maîtriser tous les aspects de l'espagnol nécessaires aux concours ECG
              </p>
            </div>

            <div className="grid gap-6">
              {grammarTopics.map((topic, index) => (
                <Card key={index} className="border-2 hover:border-orange-500/50 transition-colors">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-orange-100 text-orange-600">
                        <BookOpen className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{topic.title}</CardTitle>
                        <p className="text-muted-foreground mt-1">{topic.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                      {topic.items.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </TabsContent>

        <TabsContent value="generateurs">
          <div className="space-y-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold mb-4">Outils de Génération</h2>
              <p className="text-muted-foreground">
                Utilisez nos générateurs pour vous entraîner et améliorer votre niveau d'espagnol
              </p>
            </div>

            {generatorTools.map((tool) => (
              <Card key={tool.id} className="border-2 hover:border-orange-500/50 transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <tool.icon className="h-6 w-6 text-orange-600" />
                    {tool.title}
                  </CardTitle>
                  <p className="text-muted-foreground">{tool.description}</p>
                </CardHeader>
                <CardContent>
                  {tool.component}
                </CardContent>
              </Card>
            ))}
          </div>
        </TabsContent>

        <TabsContent value="vocabulaire">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Vocabulaire Politique Espagnol</CardTitle>
              <p className="text-muted-foreground">
                Plus de 70 termes et expressions politiques classés par thématiques : institutions, élections, partis, législation, administration et relations internationales
              </p>
            </CardHeader>
            <CardContent>
              <SpanishVocabularyFlashcards language={language} />
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="ressources">
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Méthodes Essentielles</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border rounded-lg bg-orange-50 border-orange-200">
                  <h3 className="font-semibold mb-2 text-orange-800">Version Espagnole</h3>
                  <p className="text-sm text-orange-700">Techniques de traduction du français vers l'espagnol</p>
                </div>
                <div className="p-4 border rounded-lg bg-orange-50 border-orange-200">
                  <h3 className="font-semibold mb-2 text-orange-800">Thème Espagnol</h3>
                  <p className="text-sm text-orange-700">Maîtriser la traduction de l'espagnol vers le français</p>
                </div>
                <div className="p-4 border rounded-lg bg-orange-50 border-orange-200">
                  <h3 className="font-semibold mb-2 text-orange-800">Expression Écrite</h3>
                  <p className="text-sm text-orange-700">Rédiger des essais argumentatifs en espagnol</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Préparation aux Concours</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold mb-2">Épreuves Écrites</h3>
                  <p className="text-sm text-muted-foreground">Stratégies spécifiques pour chaque type d'épreuve</p>
                </div>
                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold mb-2">Épreuves Orales</h3>
                  <p className="text-sm text-muted-foreground">Préparation aux colles et entretiens</p>
                </div>
                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                  <h3 className="font-semibold mb-2">Civilisation Hispanique</h3>
                  <p className="text-sm text-muted-foreground">Connaissances culturelles indispensables</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default FormationEspagnolPage;