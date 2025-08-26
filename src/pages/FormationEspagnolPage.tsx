import React, { useState } from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { BookOpen, Wand2, MessageSquare, FileText, Target, ChevronRight, Languages } from 'lucide-react';
import { SpanishVocabularyFlashcards } from '@/components/SpanishVocabularyFlashcards';

const FormationEspagnolPage = () => {
  const [language] = useState<'fr' | 'en'>('fr');



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
              <div className="h-3 w-3">🏠</div>
              <span>Accueil</span>
            </Link>
            <span className="mx-1 text-muted-foreground/50">›</span>
            <Link to="/formations" className="hover:text-foreground transition-colors">
              Toutes les formations
            </Link>
            <span className="mx-1 text-muted-foreground/50">›</span>
            <span className="text-foreground font-medium">Formation Espagnol ECG</span>
          </div>
        </div>
      </nav>
      
      <div className="container mx-auto py-8 px-4 relative z-10">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl bg-orange-600 text-white shadow-lg">
              <Languages className="h-12 w-12" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
            <span className="text-orange-600 font-bold">
          Formation Espagnol ECG
            </span>
        </h1>
          <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
          Formation complète pour exceller en espagnol aux concours des Grandes Écoles de Commerce
        </p>


          {/* Section des boutons d'action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-2xl mx-auto">
            <Button
              size="lg"
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              onClick={() => window.location.href = '/formation/espagnol/grammaire'}
            >
              <BookOpen className="mr-2 h-5 w-5" />
              Commencer la formation
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-orange-300 hover:border-orange-400 px-8 py-3 text-lg font-semibold hover:bg-orange-50 transition-all duration-300"
              onClick={() => window.location.href = '/formation/espagnol/generateurs'}
            >
              <Wand2 className="mr-2 h-5 w-5" />
              Générateurs IA
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-300 hover:border-blue-400 px-8 py-3 text-lg font-semibold hover:bg-blue-50 transition-all duration-300"
              onClick={() => window.location.href = '/formation/espagnol/sommaire'}
            >
              <FileText className="mr-2 h-5 w-5" />
              Sommaire
            </Button>
          </div>
        </div>
      </div>

      {/* Section Modules principaux avec design moderne */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
            Découvrez les <span className="text-orange-600 font-bold">modules de formation</span>
          </h2>
          <p className="text-center text-gray-600 mb-10 max-w-2xl mx-auto text-base sm:text-lg">
            Choisissez votre domaine d'étude pour accéder à des contenus détaillés et structurés par thème.
          </p>

          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                              <Link
                  to="/formation/espagnol/grammaire"
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group block border-2 border-blue-100 hover:border-blue-200"
                >
                  <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <BookOpen className="h-8 w-8 text-white" />
              </div>
                  <h3 className="font-semibold text-xl mb-3 text-center">Grammaire Espagnole</h3>
                  <p className="text-sm text-gray-600 mb-4 text-center leading-relaxed">Conjugaisons, syntaxe et structures avancées pour maîtriser la langue espagnole</p>
                  <div className="space-y-2 text-xs mb-6">
                    <div className="flex items-center justify-center text-blue-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                  <span>Temps verbaux et conjugaisons</span>
                </div>
                    <div className="flex items-center justify-center text-blue-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                  <span>Syntaxe et tournures idiomatiques</span>
                </div>
                    <div className="flex items-center justify-center text-blue-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                  <span>Thèmes grammaticaux type concours</span>
                </div>
              </div>
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-md hover:shadow-lg">
                    <BookOpen className="mr-2 h-4 w-4" />
                Accéder à la Grammaire
              </Button>
        </Link>

              <Link
                to="/formation/espagnol/civilisation"
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group block border-2 border-blue-100 hover:border-blue-200"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <MessageSquare className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-xl mb-3 text-center">Civilisation Hispanique</h3>
                <p className="text-sm text-gray-600 mb-4 text-center leading-relaxed">Enjeux contemporains d'Espagne et d'Amérique latine pour réussir les épreuves</p>
                <div className="space-y-2 text-xs mb-6">
                  <div className="flex items-center justify-center text-blue-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                    <span>Politique et démocratie</span>
                  </div>
                  <div className="flex items-center justify-center text-blue-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                    <span>Enjeux sociaux et égalité</span>
                  </div>
                  <div className="flex items-center justify-center text-blue-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                    <span>Migrations et environnement</span>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-md hover:shadow-lg">
                  <MessageSquare className="mr-2 h-4 w-4" />
                  Accéder à la Civilisation
                </Button>
              </Link>

              <Link
                to="/formation/espagnol/methodologie"
                className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group block border-2 border-blue-100 hover:border-blue-200"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-xl mb-3 text-center">Méthodologie des Épreuves</h3>
                <p className="text-sm text-gray-600 mb-4 text-center leading-relaxed">Techniques et stratégies pour réussir les épreuves écrites et orales</p>
                <div className="space-y-2 text-xs mb-6">
                  <div className="flex items-center justify-center text-blue-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                    <span>Épreuves écrites (thème/version)</span>
                  </div>
                  <div className="flex items-center justify-center text-blue-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                    <span>Épreuves orales (colles)</span>
                  </div>
                  <div className="flex items-center justify-center text-blue-600">
                    <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                    <span>Gestion du temps et stress</span>
                  </div>
                </div>
                <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-md hover:shadow-lg">
                  <Target className="mr-2 h-4 w-4" />
                  Accéder à la Méthodologie
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>





      {/* Section Vocabulaire et Ressources */}
      <section className="py-16 px-4 sm:px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <Tabs defaultValue="ressources" className="w-full">
            <TabsList className="grid w-full grid-cols-2 mb-8 max-w-md mx-auto">
              <TabsTrigger value="vocabulaire" className="text-base font-medium">Vocabulaire</TabsTrigger>
              <TabsTrigger value="ressources" className="text-base font-medium">Ressources</TabsTrigger>
            </TabsList>

        <TabsContent value="vocabulaire">
              <div className="text-center py-12">
                <div className="max-w-4xl mx-auto">
                  <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
                    <MessageSquare className="h-12 w-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">Vocabulaire Espagnol</h3>
                  <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                    Maîtrisez le lexique essentiel pour vos épreuves de concours<br/>
                    <span className="text-lg text-blue-600 font-medium">Plus de 70 termes et expressions classés par thématiques</span>
                  </p>
                  <Button
                    onClick={() => window.location.href = '/formation/espagnol/vocabulaire'}
                    size="lg"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-12 py-4 text-xl font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105"
                  >
                    <MessageSquare className="mr-3 h-6 w-6" />
                    Explorer le Vocabulaire Complet
                    <div className="ml-3 text-lg">📚</div>
                  </Button>
                  <p className="text-base text-gray-500 mt-4">
                    Flashcards interactives • Institutions • Élections • Partis • Législation
                  </p>
                </div>
              </div>
        </TabsContent>

        <TabsContent value="ressources">
              <div className="grid md:grid-cols-2 gap-8">
                <Card className="border-2 border-blue-100 shadow-xl">
              <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-800 flex items-center">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                        <BookOpen className="h-5 w-5 text-white" />
                      </div>
                      Méthodes Essentielles
                    </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                    <div className="p-4 border rounded-lg bg-blue-50 border-blue-200 hover:bg-blue-100 transition-colors">
                      <h3 className="font-semibold mb-2 text-blue-800">Version Espagnole</h3>
                      <p className="text-sm text-blue-700">Techniques de traduction du français vers l'espagnol</p>
                </div>
                    <div className="p-4 border rounded-lg bg-blue-50 border-blue-200 hover:bg-blue-100 transition-colors">
                      <h3 className="font-semibold mb-2 text-blue-800">Thème Espagnol</h3>
                      <p className="text-sm text-blue-700">Maîtriser la traduction de l'espagnol vers le français</p>
                </div>
                    <div className="p-4 border rounded-lg bg-blue-50 border-blue-200 hover:bg-blue-100 transition-colors">
                      <h3 className="font-semibold mb-2 text-blue-800">Expression Écrite</h3>
                      <p className="text-sm text-blue-700">Rédiger des essais argumentatifs en espagnol</p>
                </div>
              </CardContent>
            </Card>

                <Card className="border-2 border-blue-100 shadow-xl">
              <CardHeader>
                    <CardTitle className="text-xl font-bold text-gray-800 flex items-center">
                      <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center mr-3">
                        <MessageSquare className="h-5 w-5 text-white" />
                      </div>
                      Préparation aux Concours
                    </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <h3 className="font-semibold mb-2 text-gray-800">Épreuves Écrites</h3>
                      <p className="text-sm text-gray-600">Stratégies spécifiques pour chaque type d'épreuve</p>
                </div>
                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <h3 className="font-semibold mb-2 text-gray-800">Épreuves Orales</h3>
                      <p className="text-sm text-gray-600">Préparation aux colles et entretiens</p>
                </div>
                <div className="p-4 border rounded-lg hover:bg-gray-50 transition-colors">
                      <h3 className="font-semibold mb-2 text-gray-800">Civilisation Hispanique</h3>
                      <p className="text-sm text-gray-600">Connaissances culturelles indispensables</p>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
      </div>
      </section>
    </div>
  );
};

export default FormationEspagnolPage;