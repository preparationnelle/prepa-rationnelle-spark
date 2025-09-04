import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Target, Home, ChevronRight, FileText, Brain, Lightbulb, CheckCircle } from 'lucide-react';
import ESHModuleNavigation from '@/components/formation/ESHModuleNavigation';

const MethodologieESHPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden">
      {/* Floating elements - Blue bubbles */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-blue-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-40 left-20 w-56 h-56 bg-blue-200 rounded-full opacity-5 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-blue-50 rounded-full opacity-10 animate-pulse-slow"></div>
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
            <Link to="/formation/esh" className="hover:text-foreground transition-colors">
              Formation ESH ECG
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Méthodologie</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 relative z-10">
        {/* Module Navigation */}
        <div className="mb-8">
          <ESHModuleNavigation />
        </div>

        {/* Hero Section */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="p-4 rounded-2xl bg-blue-600 text-white shadow-lg">
              <Target className="h-12 w-12" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Méthodologie ESH
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Maîtrisez les techniques et stratégies essentielles pour réussir les épreuves ESH des concours.
          </p>
        </div>

        {/* Contenu principal */}
        <div className="max-w-6xl mx-auto">
          {/* Section principale - 3 piliers méthodologiques */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
            {/* Analyse de documents */}
            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-purple-500">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <FileText className="h-5 w-5 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Analyse de documents</CardTitle>
                </div>
                <Badge variant="secondary" className="w-fit">Technique</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Apprendre à décortiquer et analyser efficacement tout type de document économique ou sociologique.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-purple-600">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    <span>Identification des enjeux</span>
                  </div>
                  <div className="flex items-center text-purple-600">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    <span>Analyse des arguments</span>
                  </div>
                  <div className="flex items-center text-purple-600">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    <span>Critique et synthèse</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Raisonnement économique */}
            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-purple-500">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Brain className="h-5 w-5 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Raisonnement économique</CardTitle>
                </div>
                <Badge variant="secondary" className="w-fit">Logique</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Développer une pensée structurée pour analyser les phénomènes économiques complexes.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-purple-600">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    <span>Causalité économique</span>
                  </div>
                  <div className="flex items-center text-purple-600">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    <span>Analyse coûts/avantages</span>
                  </div>
                  <div className="flex items-center text-purple-600">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    <span>Modélisation simplifiée</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Préparation aux colles */}
            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-purple-500">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Lightbulb className="h-5 w-5 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Préparation aux colles</CardTitle>
                </div>
                <Badge variant="secondary" className="w-fit">Pratique</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Techniques spécifiques pour briller lors des épreuves orales et des colles d'ESH.
                </p>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-purple-600">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    <span>Structuration de l'exposé</span>
                  </div>
                  <div className="flex items-center text-purple-600">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    <span>Gestion du temps</span>
                  </div>
                  <div className="flex items-center text-purple-600">
                    <CheckCircle className="mr-2 h-4 w-4" />
                    <span>Argumentation convaincante</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Section détaillée - Méthode pas à pas */}
          <Card className="mb-8 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Méthode d'analyse ESH - Étape par étape</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold text-sm">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-purple-700">Compréhension du sujet</h4>
                    <p className="text-gray-600 mb-2">Lire attentivement le sujet et identifier les notions clés, les enjeux et les limites temporelles.</p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      <li>• Repérer les mots-clés et concepts économiques/sociologiques</li>
                      <li>• Identifier le type d'épreuve (analyse, synthèse, dissertation)</li>
                      <li>• Délimiter le cadre temporel et spatial</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold text-sm">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-purple-700">Mobilisation des connaissances</h4>
                    <p className="text-gray-600 mb-2">Rappeler les concepts théoriques et faits économiques pertinents pour traiter le sujet.</p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      <li>• Sélectionner les théories économiques appropriées</li>
                      <li>• Mobiliser des exemples concrets et actualités</li>
                      <li>• Établir des liens entre micro et macroéconomie</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold text-sm">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-purple-700">Analyse et argumentation</h4>
                    <p className="text-gray-600 mb-2">Construire un raisonnement logique avec des arguments solides et des exemples pertinents.</p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      <li>• Développer une problématique claire</li>
                      <li>• Articuler thèse, arguments et exemples</li>
                      <li>• Prévoir les contre-arguments</li>
                    </ul>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <span className="text-purple-600 font-bold text-sm">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-lg mb-2 text-purple-700">Conclusion et ouverture</h4>
                    <p className="text-gray-600 mb-2">Synthétiser l'analyse et ouvrir sur des perspectives plus larges.</p>
                    <ul className="text-sm text-gray-500 space-y-1">
                      <li>• Répondre explicitement à la problématique</li>
                      <li>• Ouvrir sur des enjeux contemporains</li>
                      <li>• Maintenir une distance critique</li>
                    </ul>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Outils méthodologiques */}
          <Card className="mb-8 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Outils méthodologiques essentiels</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-purple-700">Pour l'analyse économique</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-purple-700">Courbes d'offre et demande</strong>
                        <p className="text-sm text-gray-600">Interprétation des variations et impacts des politiques</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-purple-700">Multiplicateur keynésien</strong>
                        <p className="text-sm text-gray-600">Effets des politiques budgétaires sur l'économie</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-purple-700">Équilibre général</strong>
                        <p className="text-sm text-gray-600">Interactions entre marchés et effets globaux</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-purple-700">Pour l'analyse sociologique</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-purple-700">Analyse des acteurs</strong>
                        <p className="text-sm text-gray-600">Intérêts, stratégies et rapports de force</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-purple-700">Variables contextuelles</strong>
                        <p className="text-sm text-gray-600">Facteurs historiques, culturels et institutionnels</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-purple-500 rounded-full mt-2 flex-shrink-0"></div>
                      <div>
                        <strong className="text-purple-700">Analyse critique</strong>
                        <p className="text-sm text-gray-600">Questionnement des normes et des représentations</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to action */}
          <div className="text-center">
            <Link to="/formation/esh/etudes-cas">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-3 text-lg">
                Pratiquer avec les études de cas
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MethodologieESHPage;
