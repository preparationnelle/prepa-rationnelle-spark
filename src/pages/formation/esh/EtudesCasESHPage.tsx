import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { MessageSquare, Home, ChevronRight, Building, TrendingUp, Globe, Users, Factory, Heart, Leaf, Brain } from 'lucide-react';
import ESHModuleNavigation from '@/components/formation/ESHModuleNavigation';

const EtudesCasESHPage = () => {
  return (
    <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden">
      {/* Floating elements - Blue bubbles */}
      <div className="absolute -z-10 top-20 left-10 w-32 h-32 bg-blue-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute -z-10 bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute -z-10 top-40 right-20 w-48 h-48 bg-blue-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute -z-10 bottom-40 left-20 w-56 h-56 bg-blue-200 rounded-full opacity-5 animate-pulse"></div>
      <div className="absolute -z-10 top-1/4 left-1/3 w-64 h-64 bg-blue-50 rounded-full opacity-10 animate-pulse-slow"></div>
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
            <Link to="/formation/esh" className="hover:text-foreground transition-colors">
              Formation ESH ECG
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Études de cas</span>
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
              <MessageSquare className="h-12 w-12" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Ressources ESH
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Appliquez vos connaissances théoriques à des situations concrètes et développez votre capacité d'analyse.
          </p>
        </div>

        {/* Contenu principal */}
        <div className="max-w-6xl mx-auto">
          {/* Introduction méthodologique */}
          <Card className="mb-8 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Pourquoi les études de cas en ESH ?</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 mb-6 text-center max-w-4xl mx-auto">
                Les études de cas constituent un outil pédagogique essentiel pour développer l'esprit critique et l'application pratique des concepts économiques et sociologiques.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Application pratique</h4>
                  <p className="text-sm text-gray-600">Transposer la théorie dans des situations réelles complexes</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Brain className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Analyse critique</h4>
                  <p className="text-sm text-gray-600">Développer l'esprit d'analyse et la prise de recul</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <MessageSquare className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Argumentation</h4>
                  <p className="text-sm text-gray-600">Construire des raisonnements solides et nuancés</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Études de cas par domaine */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
            {/* Cas d'entreprises */}
            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-purple-500">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Building className="h-5 w-5 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Cas d'entreprises</CardTitle>
                </div>
                <Badge variant="secondary" className="w-fit">Économie d'entreprise</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Analysez des stratégies d'entreprises, décisions d'investissement et adaptations aux marchés.
                </p>
                <div className="space-y-3">
                  <div className="border-l-2 border-purple-200 pl-4">
                    <h5 className="font-semibold text-purple-700">Exemple : Relocalisation industrielle</h5>
                    <p className="text-sm text-gray-600 mb-2">Une entreprise automobile face à la mondialisation</p>
                    <ul className="text-xs text-gray-500 space-y-1">
                      <li>• Analyse coûts de production</li>
                      <li>• Impact sur l'emploi local</li>
                      <li>• Stratégies de transition</li>
                    </ul>
                  </div>
                  <div className="border-l-2 border-purple-200 pl-4">
                    <h5 className="font-semibold text-purple-700">Exemple : Innovation disruptive</h5>
                    <p className="text-sm text-gray-600 mb-2">Transformation digitale d'une entreprise traditionnelle</p>
                    <ul className="text-xs text-gray-500 space-y-1">
                      <li>• Adoption de nouvelles technologies</li>
                      <li>• Changement de modèle économique</li>
                      <li>• Gestion des résistances internes</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Études de marché */}
            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-purple-500">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <TrendingUp className="h-5 w-5 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Études de marché</CardTitle>
                </div>
                <Badge variant="secondary" className="w-fit">Microéconomie appliquée</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Étudiez le fonctionnement des marchés, les comportements des consommateurs et les stratégies concurrentielles.
                </p>
                <div className="space-y-3">
                  <div className="border-l-2 border-purple-200 pl-4">
                    <h5 className="font-semibold text-purple-700">Exemple : Marché des smartphones</h5>
                    <p className="text-sm text-gray-600 mb-2">Concurrence oligopolistique et innovation</p>
                    <ul className="text-xs text-gray-500 space-y-1">
                      <li>• Structure de marché</li>
                      <li>• Stratégies de différenciation</li>
                      <li>• Impact des barrières à l'entrée</li>
                    </ul>
                  </div>
                  <div className="border-l-2 border-purple-200 pl-4">
                    <h5 className="font-semibold text-purple-700">Exemple : Crise énergétique</h5>
                    <p className="text-sm text-gray-600 mb-2">Fluctuations des prix et adaptation des acteurs</p>
                    <ul className="text-xs text-gray-500 space-y-1">
                      <li>• Élasticité-prix de la demande</li>
                      <li>• Politiques de substitution</li>
                      <li>• Impact sur l'inflation</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Politiques publiques */}
            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-purple-500">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Globe className="h-5 w-5 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Politiques publiques</CardTitle>
                </div>
                <Badge variant="secondary" className="w-fit">Macroéconomie appliquée</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Évaluez l'efficacité des interventions publiques et leurs impacts socio-économiques.
                </p>
                <div className="space-y-3">
                  <div className="border-l-2 border-purple-200 pl-4">
                    <h5 className="font-semibold text-purple-700">Exemple : Revenu minimum d'insertion</h5>
                    <p className="text-sm text-gray-600 mb-2">Politique sociale et incitations au travail</p>
                    <ul className="text-xs text-gray-500 space-y-1">
                      <li>• Effets sur l'emploi</li>
                      <li>• Coûts budgétaires</li>
                      <li>• Redistribution des revenus</li>
                    </ul>
                  </div>
                  <div className="border-l-2 border-purple-200 pl-4">
                    <h5 className="font-semibold text-purple-700">Exemple : Transition énergétique</h5>
                    <p className="text-sm text-gray-600 mb-2">Politiques environnementales et développement durable</p>
                    <ul className="text-xs text-gray-500 space-y-1">
                      <li>• Externalités environnementales</li>
                      <li>• Instruments économiques</li>
                      <li>• Acceptabilité sociale</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Questions sociales */}
            <Card className="hover:shadow-xl transition-all duration-300 border-l-4 border-l-purple-500">
              <CardHeader>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                    <Users className="h-5 w-5 text-purple-600" />
                  </div>
                  <CardTitle className="text-xl">Questions sociales</CardTitle>
                </div>
                <Badge variant="secondary" className="w-fit">Sociologie appliquée</Badge>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 mb-4">
                  Explorez les dynamiques sociales, les inégalités et les changements sociétaux.
                </p>
                <div className="space-y-3">
                  <div className="border-l-2 border-purple-200 pl-4">
                    <h5 className="font-semibold text-purple-700">Exemple : Travail et numérique</h5>
                    <p className="text-sm text-gray-600 mb-2">Transformation du monde du travail</p>
                    <ul className="text-xs text-gray-500 space-y-1">
                      <li>• Évolution des qualifications</li>
                      <li>• Nouvelles formes d'emploi</li>
                      <li>• Inégalités numériques</li>
                    </ul>
                  </div>
                  <div className="border-l-2 border-purple-200 pl-4">
                    <h5 className="font-semibold text-purple-700">Exemple : Vieillissement démographique</h5>
                    <p className="text-sm text-gray-600 mb-2">Enjeux sociaux et économiques du vieillissement</p>
                    <ul className="text-xs text-gray-500 space-y-1">
                      <li>• Systèmes de retraite</li>
                      <li>• Marché du travail</li>
                      <li>• Cohésion sociale</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Méthode d'analyse des études de cas */}
          <Card className="mb-8 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Méthode d'analyse des études de cas</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-purple-700">Phase de compréhension</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-purple-600 font-bold text-xs">1</span>
                      </div>
                      <div>
                        <strong className="text-purple-700">Lecture active</strong>
                        <p className="text-sm text-gray-600">Identifier les acteurs, enjeux et contexte</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-purple-600 font-bold text-xs">2</span>
                      </div>
                      <div>
                        <strong className="text-purple-700">Problématique</strong>
                        <p className="text-sm text-gray-600">Formuler clairement la question centrale</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-purple-600 font-bold text-xs">3</span>
                      </div>
                      <div>
                        <strong className="text-purple-700">Décomposition</strong>
                        <p className="text-sm text-gray-600">Isoler les dimensions économiques/sociologiques</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold text-lg mb-4 text-purple-700">Phase d'analyse</h4>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-purple-600 font-bold text-xs">4</span>
                      </div>
                      <div>
                        <strong className="text-purple-700">Mobilisation théorique</strong>
                        <p className="text-sm text-gray-600">Appliquer concepts et théories appropriés</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-purple-600 font-bold text-xs">5</span>
                      </div>
                      <div>
                        <strong className="text-purple-700">Analyse critique</strong>
                        <p className="text-sm text-gray-600">Évaluer limites et implications</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-6 h-6 bg-purple-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                        <span className="text-purple-600 font-bold text-xs">6</span>
                      </div>
                      <div>
                        <strong className="text-purple-700">Synthèse</strong>
                        <p className="text-sm text-gray-600">Construire réponse argumentée</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to action */}
          <div className="text-center">
            <Link to="/formation/esh">
              <Button size="lg" className="bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white px-8 py-3 text-lg">
                Retour à la formation ESH
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EtudesCasESHPage;
