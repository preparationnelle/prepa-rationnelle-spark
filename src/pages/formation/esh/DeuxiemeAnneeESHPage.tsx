import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { TrendingUp, Home, ChevronRight, BarChart3, Globe, Clock } from 'lucide-react';
import ESHModuleNavigation from '@/components/formation/ESHModuleNavigation';

const DeuxiemeAnneeESHPage = () => {
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
            <span className="text-foreground font-medium">Deuxième année</span>
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
              <TrendingUp className="h-12 w-12" />
            </div>
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">
              Deuxième année ESH
            </span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-4xl mx-auto">
            Approfondissez vos connaissances en macroéconomie et analyse critique pour maîtriser les enjeux contemporains.
          </p>
        </div>

        {/* Contenu principal */}
        <div className="max-w-4xl mx-auto">

          {/* Module 3 détaillé */}
          <div className="space-y-6">
            {/* Module 3 - la mondialisation économique et financière */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-blue-200 group">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors flex-shrink-0">
                  <span className="font-bold text-blue-600 text-lg">3</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    La mondialisation économique et financière
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Analyser les mécanismes et les enjeux de la mondialisation économique et financière moderne
                  </p>
                </div>
              </div>
            </div>

            {/* Section principale - La dynamique de la mondialisation économique */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-blue-200">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-blue-800 mb-2">La dynamique de la mondialisation économique</h4>
                  <p className="text-gray-700 mb-4 text-base">Étudier l'ouverture des économies et les échanges internationaux</p>
                </div>
              </div>
            </div>

            {/* Chapitres du Module 3 - La dynamique de la mondialisation économique */}
            <div className="space-y-3 ml-8">
              {/* 3.1 L'ouverture des économies depuis le XIXe siècle : évolution et acteurs */}
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-102 transition-all duration-300 border border-transparent hover:border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600 text-sm">3.1</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-800 mb-1">L'ouverture des économies depuis le XIXe siècle : évolution et acteurs</h4>
                    <p className="text-sm text-gray-600 mb-3">Analyser l'évolution historique de l'ouverture économique et ses acteurs</p>
                    <div className="flex gap-2">
                      <Link to="/formation/esh/module3/ouverture-economies">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-3 h-7">
                          Introduction
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-50 text-xs py-1 px-3 h-7">
                        Accéder au module
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3.2 L'analyse économique des échanges internationaux */}
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-102 transition-all duration-300 border border-transparent hover:border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600 text-sm">3.2</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-800 mb-1">L'analyse économique des échanges internationaux</h4>
                    <p className="text-sm text-gray-600 mb-3">Comprendre les théories et les mécanismes des échanges commerciaux</p>
                    <div className="flex gap-2">
                      <Link to="/formation/esh/module3/analyse-echanges">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-3 h-7">
                          Introduction
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-50 text-xs py-1 px-3 h-7">
                        Accéder au module
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3.3 Régionalisation, gouvernance et régulations internationales */}
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-102 transition-all duration-300 border border-transparent hover:border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600 text-sm">3.3</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-800 mb-1">Régionalisation, gouvernance et régulations internationales</h4>
                    <p className="text-sm text-gray-600 mb-3">Étudier les accords régionaux et les institutions internationales</p>
                    <div className="flex gap-2">
                      <Link to="/formation/esh/module3/regionalisation-gouvernance">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-3 h-7">
                          Introduction
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-50 text-xs py-1 px-3 h-7">
                        Accéder au module
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section principale - La dynamique de la mondialisation financière */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-blue-200 mt-6">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-blue-800 mb-2">La dynamique de la mondialisation financière</h4>
                  <p className="text-gray-700 mb-4 text-base">Explorer les mécanismes financiers internationaux et leur évolution</p>
                </div>
              </div>
            </div>

            {/* Chapitres du Module 3 - La dynamique de la mondialisation financière */}
            <div className="space-y-3 ml-8">
              {/* 3.4 Balance des paiements, cours de change et systèmes de change */}
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-102 transition-all duration-300 border border-transparent hover:border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600 text-sm">3.4</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-800 mb-1">Balance des paiements, cours de change et systèmes de change</h4>
                    <p className="text-sm text-gray-600 mb-3">Analyser les mécanismes de change et la balance des paiements</p>
                    <div className="flex gap-2">
                      <Link to="/formation/esh/module3/balance-paiements">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-3 h-7">
                          Introduction
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-50 text-xs py-1 px-3 h-7">
                        Accéder au module
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3.5 L'évolution du système monétaire international depuis le XIXe siècle */}
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-102 transition-all duration-300 border border-transparent hover:border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600 text-sm">3.5</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-800 mb-1">L'évolution du système monétaire international depuis le XIXe siècle</h4>
                    <p className="text-sm text-gray-600 mb-3">Comprendre l'histoire des systèmes monétaires internationaux</p>
                    <div className="flex gap-2">
                      <Link to="/formation/esh/module3/evolution-systeme-monetaires">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-3 h-7">
                          Introduction
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-50 text-xs py-1 px-3 h-7">
                        Accéder au module
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3.6 Constitution et fonctionnement du marché international des capitaux */}
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-102 transition-all duration-300 border border-transparent hover:border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600 text-sm">3.6</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-800 mb-1">Constitution et fonctionnement du marché international des capitaux</h4>
                    <p className="text-sm text-gray-600 mb-3">Étudier les marchés financiers internationaux et leurs mécanismes</p>
                    <div className="flex gap-2">
                      <Link to="/formation/esh/module3/marche-capitaux">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-3 h-7">
                          Introduction
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-50 text-xs py-1 px-3 h-7">
                        Accéder au module
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section principale - L'intégration européenne */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-blue-200 mt-6">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-blue-800 mb-2">L'intégration européenne</h4>
                  <p className="text-gray-700 mb-4 text-base">Comprendre la construction et le fonctionnement de l'Union européenne</p>
                </div>
              </div>
            </div>

            {/* Chapitres du Module 3 - L'intégration européenne */}
            <div className="space-y-3 ml-8">
              {/* 3.7 La dynamique de la construction européenne */}
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-102 transition-all duration-300 border border-transparent hover:border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600 text-sm">3.7</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-800 mb-1">La dynamique de la construction européenne</h4>
                    <p className="text-sm text-gray-600 mb-3">Analyser le processus historique d'intégration européenne</p>
                    <div className="flex gap-2">
                      <Link to="/formation/esh/module3/construction-europeenne">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-3 h-7">
                          Introduction
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-50 text-xs py-1 px-3 h-7">
                        Accéder au module
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3.8 L'Europe économique et monétaire */}
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-102 transition-all duration-300 border border-transparent hover:border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600 text-sm">3.8</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-800 mb-1">L'Europe économique et monétaire</h4>
                    <p className="text-sm text-gray-600 mb-3">Comprendre l'Union économique et monétaire et ses institutions</p>
                    <div className="flex gap-2">
                      <Link to="/formation/esh/module3/europe-economique-monetaires">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-3 h-7">
                          Introduction
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-50 text-xs py-1 px-3 h-7">
                        Accéder au module
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3.9 L'Europe sociale */}
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-102 transition-all duration-300 border border-transparent hover:border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600 text-sm">3.9</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-800 mb-1">L'Europe sociale</h4>
                    <p className="text-sm text-gray-600 mb-3">Étudier les politiques sociales européennes et leurs enjeux</p>
                    <div className="flex gap-2">
                      <Link to="/formation/esh/module3/europe-sociale">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-3 h-7">
                          Introduction
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-50 text-xs py-1 px-3 h-7">
                        Accéder au module
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Module 4 détaillé */}
          <div className="space-y-6">
            {/* Module 4 - déséquilibres, régulation et action publique */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-blue-200 group">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors flex-shrink-0">
                  <span className="font-bold text-blue-600 text-lg">4</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Déséquilibres, régulation et action publique
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Analyser les mécanismes de régulation économique et l'intervention publique face aux déséquilibres
                  </p>
                </div>
              </div>
            </div>

            {/* Section principale - Équilibres et déséquilibres macroéconomiques */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-blue-200">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-blue-800 mb-2">Équilibres et déséquilibres macroéconomiques</h4>
                  <p className="text-gray-700 mb-4 text-base">Comprendre les mécanismes d'équilibre et de déséquilibre dans l'économie</p>
                </div>
              </div>
            </div>

            {/* Chapitres du Module 4 - Équilibres et déséquilibres macroéconomiques */}
            <div className="space-y-3 ml-8">
              {/* 4.1 L'inflation et le chômage */}
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-102 transition-all duration-300 border border-transparent hover:border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600 text-sm">4.1</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-800 mb-1">L'inflation et le chômage</h4>
                    <p className="text-sm text-gray-600 mb-3">Analyser les relations entre inflation et chômage dans l'économie</p>
                    <div className="flex gap-2">
                      <Link to="/formation/esh/module4/inflation-chomage">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-3 h-7">
                          Introduction
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-50 text-xs py-1 px-3 h-7">
                        Accéder au module
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4.2 L'équilibre macroéconomique à travers les modèles : IS-LM / IS-LM-BP / OGDG */}
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-102 transition-all duration-300 border border-transparent hover:border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600 text-sm">4.2</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-800 mb-1">L'équilibre macroéconomique à travers les modèles : IS-LM / IS-LM-BP / OGDG</h4>
                    <p className="text-sm text-gray-600 mb-3">Maîtriser les modèles d'équilibre macroéconomique et leurs applications</p>
                    <div className="flex gap-2">
                      <Link to="/formation/esh/module4/equilibre-macro">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-3 h-7">
                          Introduction
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-50 text-xs py-1 px-3 h-7">
                        Accéder au module
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section principale - L'intervention économique des pouvoirs publics */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-blue-200 mt-6">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-blue-800 mb-2">L'intervention économique des pouvoirs publics</h4>
                  <p className="text-gray-700 mb-4 text-base">Explorer les politiques publiques de régulation économique</p>
                </div>
              </div>
            </div>

            {/* Chapitres du Module 4 - L'intervention économique des pouvoirs publics */}
            <div className="space-y-3 ml-8">
              {/* 4.3 Fluctuations économiques et politiques de régulation des cycles */}
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-102 transition-all duration-300 border border-transparent hover:border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600 text-sm">4.3</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-800 mb-1">Fluctuations économiques et politiques de régulation des cycles</h4>
                    <p className="text-sm text-gray-600 mb-3">Comprendre les cycles économiques et les politiques de régulation</p>
                    <div className="flex gap-2">
                      <Link to="/formation/esh/module4/fluctuations-economiques">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-3 h-7">
                          Introduction
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-50 text-xs py-1 px-3 h-7">
                        Accéder au module
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4.4 Politiques structurelles et interventions de l'État face aux défaillances de marché */}
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-102 transition-all duration-300 border border-transparent hover:border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600 text-sm">4.4</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-800 mb-1">Politiques structurelles et interventions de l'État face aux défaillances de marché</h4>
                    <p className="text-sm text-gray-600 mb-3">Analyser les interventions publiques face aux défaillances du marché</p>
                    <div className="flex gap-2">
                      <Link to="/formation/esh/module4/politiques-structurelles">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-3 h-7">
                          Introduction
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-50 text-xs py-1 px-3 h-7">
                        Accéder au module
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4.5 Les contraintes auxquelles se heurtent les politiques économiques */}
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-102 transition-all duration-300 border border-transparent hover:border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600 text-sm">4.5</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-800 mb-1">Les contraintes auxquelles se heurtent les politiques économiques</h4>
                    <p className="text-sm text-gray-600 mb-3">Comprendre les limites et contraintes des politiques économiques</p>
                    <div className="flex gap-2">
                      <Link to="/formation/esh/module4/contraintes-politiques">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-3 h-7">
                          Introduction
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-50 text-xs py-1 px-3 h-7">
                        Accéder au module
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section principale - Les politiques sociales */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-blue-200 mt-6">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-blue-800 mb-2">Les politiques sociales</h4>
                  <p className="text-gray-700 mb-4 text-base">Explorer les politiques sociales et la justice sociale</p>
                </div>
              </div>
            </div>

            {/* Chapitres du Module 4 - Les politiques sociales */}
            <div className="space-y-3 ml-8">
              {/* 4.6 Justice sociale et légitimation de l'intervention publique */}
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-102 transition-all duration-300 border border-transparent hover:border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600 text-sm">4.6</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-800 mb-1">Justice sociale et légitimation de l'intervention publique</h4>
                    <p className="text-sm text-gray-600 mb-3">Analyser la légitimité des interventions publiques pour la justice sociale</p>
                    <div className="flex gap-2">
                      <Link to="/formation/esh/module4/justice-sociale">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-3 h-7">
                          Introduction
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-50 text-xs py-1 px-3 h-7">
                        Accéder au module
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4.7 Les politiques de lutte contre les inégalités */}
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-102 transition-all duration-300 border border-transparent hover:border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600 text-sm">4.7</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-800 mb-1">Les politiques de lutte contre les inégalités</h4>
                    <p className="text-sm text-gray-600 mb-3">Comprendre les politiques publiques de réduction des inégalités</p>
                    <div className="flex gap-2">
                      <Link to="/formation/esh/module4/lutte-inegalites">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-3 h-7">
                          Introduction
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-50 text-xs py-1 px-3 h-7">
                        Accéder au module
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 4.8 Etat-providence et protection sociale */}
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-102 transition-all duration-300 border border-transparent hover:border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600 text-sm">4.8</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-800 mb-1">Etat-providence et protection sociale</h4>
                    <p className="text-sm text-gray-600 mb-3">Analyser le rôle de l'Etat-providence dans la protection sociale</p>
                    <div className="flex gap-2">
                      <Link to="/formation/esh/module4/etat-providence">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-3 h-7">
                          Introduction
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-50 text-xs py-1 px-3 h-7">
                        Accéder au module
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Section méthodologie avancée */}
          <Card className="mb-8 hover:shadow-xl transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Méthodologie d'analyse pour la deuxième année</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <BarChart3 className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Analyse quantitative</h4>
                  <p className="text-sm text-gray-600">Maîtrise des indicateurs économiques et interprétation des données statistiques</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Perspective historique</h4>
                  <p className="text-sm text-gray-600">Compréhension des évolutions longues et des ruptures économiques</p>
                </div>
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-3">
                    <TrendingUp className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Analyse critique</h4>
                  <p className="text-sm text-gray-600">Évaluation des politiques publiques et de leurs impacts sociaux</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Call to action */}
          <div className="text-center">
            <Link to="/formation/esh/methodologie">
              <Button size="lg" className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white px-8 py-3 text-lg">
                Découvrir la méthodologie
                <ChevronRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeuxiemeAnneeESHPage;
