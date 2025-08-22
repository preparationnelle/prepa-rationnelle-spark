import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { ChevronRight, Home, BookOpen, Globe, MapPin, Quote, AlertTriangle, Lightbulb, Flag, Users, Heart, Shield } from 'lucide-react';

const UnionEuropeennePageSimple = () => {
  const [loadedSections, setLoadedSections] = useState<Set<string>>(new Set());

  const loadSection = (sectionId: string) => {
    setLoadedSections(prev => new Set([...prev, sectionId]));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-gray-600">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formations" className="hover:text-gray-900 transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/geopolitique" className="hover:text-gray-900 transition-colors">
              Formation Géopolitique
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/geopolitique/deuxieme-annee" className="hover:text-gray-900 transition-colors">
              Deuxième Année
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Union européenne</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center items-center gap-4 mb-6">
            <div className="p-4 bg-blue-600 rounded-full">
              <Flag className="h-12 w-12 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
              Union européenne
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Intégrations, fragmentations et géopolitique européenne face aux défis contemporains.
          </p>

          {/* Plan de la dissertation */}
          <Card className="bg-white/80 backdrop-blur border-2 border-blue-300 shadow-xl">
            <CardHeader>
              <CardTitle className="text-xl text-blue-800 flex items-center justify-center gap-2">
                <BookOpen className="h-5 w-5" />
                Plan de la dissertation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-left max-w-2xl mx-auto">
                <div className="space-y-4">
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-amber-100 text-amber-800">I</Badge>
                    <span className="font-semibold">Historique de la construction européenne</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Badge variant="outline" className="bg-orange-100 text-orange-800">II</Badge>
                    <span className="font-semibold">Les défis contemporains de l'Union européenne</span>
                  </div>
                </div>
                <div className="ml-6 space-y-2 text-sm text-gray-600 mt-4">
                  <div><strong>I.1</strong> - L'idée de la construction européenne</div>
                  <div><strong>I.2</strong> - Coopération, rivalités et ingérences</div>
                  <div><strong>I.3</strong> - Modèle et puissance de l'Europe</div>
                  <div><strong>II.1</strong> - Les dépendances de l'Europe</div>
                  <div><strong>II.2</strong> - Une polycrise : typologie des défis</div>
                  <div><strong>II.3</strong> - Désillusions européennes</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation vers ressources */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <Link to="/formation/geopolitique/chronologie-europe">
            <Card className="h-full hover:shadow-lg transition-all duration-200 cursor-pointer border-2 border-transparent hover:border-blue-300">
              <CardContent className="p-6 text-center">
                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Quote className="h-6 w-6 text-gray-600" />
                </div>
                <h3 className="font-semibold mb-2">Chronologie</h3>
                <p className="text-sm text-gray-600">Histoire européenne de 1648 à nos jours</p>
              </CardContent>
            </Card>
          </Link>
          
          <Card className="h-full border-2 border-gray-200 opacity-75">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <BookOpen className="h-6 w-6 text-gray-400" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-500">Dissertations</h3>
              <p className="text-sm text-gray-400">Sujets et corrigés (à venir)</p>
            </CardContent>
          </Card>

          <Card className="h-full border-2 border-gray-200 opacity-75">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <Globe className="h-6 w-6 text-gray-400" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-500">Flashcards</h3>
              <p className="text-sm text-gray-400">Révision interactive (à venir)</p>
            </CardContent>
          </Card>
        </div>

        {/* Partie I */}
        <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <Globe className="h-6 w-6 text-blue-600" />
              I. Historique de la construction européenne
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="i1">
                <AccordionTrigger 
                  className="text-lg"
                  onClick={() => loadSection('i1')}
                >
                  I.1. L'idée de la construction européenne
                </AccordionTrigger>
                <AccordionContent>
                  {loadedSections.has('i1') ? (
                    <div className="space-y-6">
                      <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-400">
                        <h4 className="font-semibold text-blue-800 mb-4">Contenu en cours de chargement...</h4>
                        <p className="text-blue-700">
                          Le contenu détaillé de cette section sera chargé prochainement. 
                          Cette approche améliore les performances de la page en chargeant le contenu à la demande.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <p className="text-gray-500">Cliquez pour charger le contenu...</p>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="i2">
                <AccordionTrigger 
                  className="text-lg"
                  onClick={() => loadSection('i2')}
                >
                  I.2. Coopération, rivalités et ingérences
                </AccordionTrigger>
                <AccordionContent>
                  {loadedSections.has('i2') ? (
                    <div className="space-y-6">
                      <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-400">
                        <h4 className="font-semibold text-green-800 mb-4">Contenu en cours de chargement...</h4>
                        <p className="text-green-700">
                          Le contenu détaillé de cette section sera chargé prochainement.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <p className="text-gray-500">Cliquez pour charger le contenu...</p>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="i3">
                <AccordionTrigger 
                  className="text-lg"
                  onClick={() => loadSection('i3')}
                >
                  I.3. Modèle et puissance de l'Europe
                </AccordionTrigger>
                <AccordionContent>
                  {loadedSections.has('i3') ? (
                    <div className="space-y-6">
                      <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-400">
                        <h4 className="font-semibold text-purple-800 mb-4">Contenu en cours de chargement...</h4>
                        <p className="text-purple-700">
                          Le contenu détaillé de cette section sera chargé prochainement.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <p className="text-gray-500">Cliquez pour charger le contenu...</p>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Partie II */}
        <Card className="mt-8 border-2 border-orange-200 bg-gradient-to-br from-orange-50 to-red-50 shadow-lg">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-3">
              <AlertTriangle className="h-6 w-6 text-orange-600" />
              II. Les défis contemporains de l'Union européenne
            </CardTitle>
          </CardHeader>
          <CardContent>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="ii1">
                <AccordionTrigger 
                  className="text-lg"
                  onClick={() => loadSection('ii1')}
                >
                  II.1. Les dépendances de l'Europe
                </AccordionTrigger>
                <AccordionContent>
                  {loadedSections.has('ii1') ? (
                    <div className="space-y-6">
                      <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-400">
                        <h4 className="font-semibold text-orange-800 mb-4">Contenu en cours de chargement...</h4>
                        <p className="text-orange-700">
                          Le contenu détaillé de cette section sera chargé prochainement.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <p className="text-gray-500">Cliquez pour charger le contenu...</p>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ii2">
                <AccordionTrigger 
                  className="text-lg"
                  onClick={() => loadSection('ii2')}
                >
                  II.2. Une polycrise : typologie des défis
                </AccordionTrigger>
                <AccordionContent>
                  {loadedSections.has('ii2') ? (
                    <div className="space-y-6">
                      <div className="bg-red-50 p-6 rounded-lg border-l-4 border-red-400">
                        <h4 className="font-semibold text-red-800 mb-4">Contenu en cours de chargement...</h4>
                        <p className="text-red-700">
                          Le contenu détaillé de cette section sera chargé prochainement.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <p className="text-gray-500">Cliquez pour charger le contenu...</p>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="ii3">
                <AccordionTrigger 
                  className="text-lg"
                  onClick={() => loadSection('ii3')}
                >
                  II.3. Désillusions européennes
                </AccordionTrigger>
                <AccordionContent>
                  {loadedSections.has('ii3') ? (
                    <div className="space-y-6">
                      <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-400">
                        <h4 className="font-semibold text-gray-800 mb-4">Contenu en cours de chargement...</h4>
                        <p className="text-gray-700">
                          Le contenu détaillé de cette section sera chargé prochainement.
                        </p>
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-4">
                      <p className="text-gray-500">Cliquez pour charger le contenu...</p>
                    </div>
                  )}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </CardContent>
        </Card>

        {/* Note de développement */}
        <Card className="mt-8 bg-yellow-50 border-yellow-200">
          <CardContent className="p-6">
            <div className="flex items-center gap-3 text-yellow-800">
              <AlertTriangle className="h-5 w-5" />
              <p className="font-semibold">Version optimisée</p>
            </div>
            <p className="text-yellow-700 mt-2 text-sm">
              Cette version utilise un chargement à la demande pour améliorer les performances. 
              Le contenu complet sera progressivement intégré avec cette nouvelle approche.
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default UnionEuropeennePageSimple;