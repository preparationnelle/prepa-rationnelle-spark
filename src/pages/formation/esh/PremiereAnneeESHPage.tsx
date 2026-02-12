import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen, Home, ChevronRight, TrendingUp, Users, Target, DollarSign, PieChart, Building, Clock } from 'lucide-react';

const PremiereAnneeESHPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 pt-16 pb-8">
        {/* Sticky Breadcrumb */}
        <nav className="sticky top-0 z-50 bg-gray-50/95 backdrop-blur supports-[backdrop-filter]:bg-gray-50/60 border-b border-border/40 relative z-10">
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
              <span className="text-foreground font-medium">Première année</span>
            </div>
          </div>
        </nav>

        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center border border-orange-200">
              <BookOpen className="h-6 w-6 text-orange-600" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900">
              Première année ESH
            </h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Maîtrisez les fondements de l'économie et de la sociologie pour réussir vos épreuves ESH
          </p>
        </div>

        {/* MODULES */}
        <div className="max-w-4xl mx-auto">
          <div className="space-y-4">

            {/* Module 1 - Les fondements de l'économie et de la sociologie */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-blue-200 group">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors flex-shrink-0">
                  <span className="font-bold text-blue-600 text-lg">1</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    Les fondements de l'économie et de la sociologie
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Comprendre les bases théoriques et méthodologiques de l'économie et de la sociologie
                  </p>
                </div>
              </div>
            </div>

            {/* Chapitres du Module 1 */}
            <div className="space-y-3 ml-8">
              {/* Section principale - Les fondements de l'économie */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-blue-200">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-blue-800 mb-2">Les fondements de l'économie</h4>
                    <p className="text-gray-700 mb-4 text-base">Découvrir les principes fondamentaux de l'économie et comprendre son rôle dans la société</p>
                  </div>
                </div>
              </div>

              {/* 1.1 Les acteurs et les grandes fonctions de l'économie */}
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-102 transition-all duration-300 border border-transparent hover:border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600 text-sm">1.1</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-800 mb-1">Les acteurs et les grandes fonctions de l'économie</h4>
                    <p className="text-sm text-gray-600 mb-3">Comprendre les différents acteurs économiques</p>
                    <div className="flex gap-2">
                      <Link to="/formation/esh/module1/acteurs-fonctions-economie">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-3 h-7">
                          Introduction
                        </Button>
                      </Link>
                      <Link to="/formation/esh/module1/acteurs-fonctions-economie/module">
                        <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-50 text-xs py-1 px-3 h-7">
                          Accéder au module
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* 1.2 La monnaie et le financement de l'économie */}
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-102 transition-all duration-300 border border-transparent hover:border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600 text-sm">1.2</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-800 mb-1">La monnaie et le financement de l'économie</h4>
                    <p className="text-sm text-gray-600 mb-3">Explorer le rôle de la monnaie et les mécanismes de financement</p>
                    <div className="flex gap-2">
                      <Link to="/formation/esh/module1/monnaie-financement-economie">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-3 h-7">
                          Introduction
                        </Button>
                      </Link>
                      <Link to="/formation/esh/module1/monnaie-financement-economie/module">
                        <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-50 text-xs py-1 px-3 h-7">
                          Accéder au module
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* 1.3 Les grands courants de la pensée économique */}
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-102 transition-all duration-300 border border-transparent hover:border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600 text-sm">1.3</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-800 mb-1">Les grands courants de la pensée économique depuis le XVIe siècle</h4>
                    <p className="text-sm text-gray-600 mb-3">Découvrir l'évolution historique de la pensée économique</p>
                    <div className="flex gap-2">
                      <Link to="/formation/esh/module1/courants-economiques">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-3 h-7">
                          Introduction
                        </Button>
                      </Link>
                      <Link to="/formation/esh/module1/courants-economiques/module">
                        <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-50 text-xs py-1 px-3 h-7">
                          Accéder au module
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section principale - Le comportement des agents et le fonctionnement du marché */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-blue-200">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-blue-800 mb-2">Le comportement des agents et le fonctionnement du marché</h4>
                    <p className="text-gray-700 mb-4 text-base">Analyser les comportements économiques et les mécanismes de marché</p>
                  </div>
                </div>
              </div>

              {/* 1.4 L'équilibre micro-économique */}
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-102 transition-all duration-300 border border-transparent hover:border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600 text-sm">1.4</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-800 mb-1">L'équilibre micro-économique du producteur et du consommateur</h4>
                    <p className="text-sm text-gray-600 mb-3">Étudier les équilibres individuels et leurs interactions</p>
                    <div className="flex gap-2">
                      <Link to="/formation/esh/module1/equilibre-micro">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-3 h-7">
                          Introduction
                        </Button>
                      </Link>
                      <Link to="/formation/esh/module1/equilibre-micro/module">
                        <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-50 text-xs py-1 px-3 h-7">
                          Accéder au module
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* 1.5 L'offre, la demande et l'équilibre du marché */}
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-102 transition-all duration-300 border border-transparent hover:border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600 text-sm">1.5</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-800 mb-1">L'offre, la demande et l'équilibre du marché en concurrence parfaite</h4>
                    <p className="text-sm text-gray-600 mb-3">Comprendre les mécanismes d'équilibre en concurrence parfaite</p>
                    <div className="flex gap-2">
                      <Link to="/formation/esh/module1/offre-demande">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-3 h-7">
                          Introduction
                        </Button>
                      </Link>
                      <Link to="/formation/esh/module1/offre-demande/module">
                        <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-50 text-xs py-1 px-3 h-7">
                          Accéder au module
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* 1.6 Les défaillances de marché */}
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-102 transition-all duration-300 border border-transparent hover:border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600 text-sm">1.6</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-800 mb-1">Les défaillances de marché</h4>
                    <p className="text-sm text-gray-600 mb-3">Analyser les situations où le marché ne fonctionne pas de manière optimale</p>
                    <div className="flex gap-2">
                      <Link to="/formation/esh/module1/defaillances-marche">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-3 h-7">
                          Introduction
                        </Button>
                      </Link>
                      <Link to="/formation/esh/module1/defaillances-marche/module">
                        <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-50 text-xs py-1 px-3 h-7">
                          Accéder au module
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* Section principale - Les fondements de la sociologie */}
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-blue-200">
                <div className="flex items-start gap-4">
                  <div className="flex-1">
                    <h4 className="text-xl font-bold text-blue-800 mb-2">Les fondements de la sociologie</h4>
                    <p className="text-gray-700 mb-4 text-base">Découvrir les origines et les principes fondamentaux de la sociologie</p>
                  </div>
                </div>
              </div>

              {/* 1.7 Les grands courants de la pensée sociologique */}
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-102 transition-all duration-300 border border-transparent hover:border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600 text-sm">1.7</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-800 mb-1">Les grands courants de la pensée sociologique depuis le XIXe siècle</h4>
                    <p className="text-sm text-gray-600 mb-3">Explorer l'évolution historique de la pensée sociologique</p>
                    <div className="flex gap-2">
                      <Link to="/formation/esh/module1/courants-sociologiques">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-3 h-7">
                          Introduction
                        </Button>
                      </Link>
                      <Link to="/formation/esh/module1/courants-sociologiques">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-3 h-7">
                          Introduction
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm" disabled className="border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed text-xs py-1 px-3 h-7 opacity-70">
                        Bientôt disponible
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 1.8 La pluralité des méthodes sociologiques */}
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-102 transition-all duration-300 border border-transparent hover:border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600 text-sm">1.8</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-800 mb-1">La pluralité des méthodes sociologiques</h4>
                    <p className="text-sm text-gray-600 mb-3">Découvrir les différentes approches méthodologiques en sociologie</p>
                    <div className="flex gap-2">
                      <Link to="/formation/esh/module1/methodes-sociologiques">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-3 h-7">
                          Introduction
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm" disabled className="border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed text-xs py-1 px-3 h-7 opacity-70">
                        Bientôt disponible
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Module 2 - La croissance et le développement depuis le XIXe siècle */}
            <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent hover:border-blue-200 group">
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-200 transition-colors flex-shrink-0">
                  <span className="font-bold text-blue-600 text-lg">2</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    La croissance et le développement depuis le XIXe siècle
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Analyser les transformations économiques, sociales et démographiques modernes
                  </p>
                </div>
              </div>
            </div>

            {/* Section principale - La croissance et le développement depuis le XIXe siècle */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-blue-200">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-blue-800 mb-2">La croissance et le développement depuis le XIXe siècle</h4>
                  <p className="text-gray-700 mb-4 text-base">Analyser les transformations économiques, sociales et démographiques modernes</p>
                </div>
              </div>
            </div>

            {/* Chapitres du Module 2 */}
            <div className="space-y-3 ml-8">
              {/* 2.1 La croissance économique */}
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-102 transition-all duration-300 border border-transparent hover:border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600 text-sm">2.1</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-800 mb-1">La croissance économique</h4>
                    <p className="text-sm text-gray-600 mb-3">Comprendre les mécanismes et les facteurs de la croissance économique</p>
                    <div className="flex gap-2">
                      <Link to="/formation/esh/module2/croissance-economique">
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

              {/* 2.2 Inégalités et stratégies de développement */}
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-102 transition-all duration-300 border border-transparent hover:border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600 text-sm">2.2</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-800 mb-1">Inégalités et stratégies de développement</h4>
                    <p className="text-sm text-gray-600 mb-3">Analyser les inégalités économiques et les politiques de développement</p>
                    <div className="flex gap-2">
                      <Link to="/formation/esh/module2/inegalites-developpement">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-3 h-7">
                          Introduction
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm" disabled className="border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed text-xs py-1 px-3 h-7 opacity-70">
                        Bientôt disponible
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2.3 La soutenabilité de la croissance et du développement */}
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-102 transition-all duration-300 border border-transparent hover:border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600 text-sm">2.3</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-800 mb-1">La soutenabilité de la croissance et du développement</h4>
                    <p className="text-sm text-gray-600 mb-3">Étudier les enjeux environnementaux et sociaux du développement durable</p>
                    <div className="flex gap-2">
                      <Link to="/formation/esh/module2/soutenabilite-croissance">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-3 h-7">
                          Introduction
                        </Button>
                      </Link>
                      <Link to="/formation/esh/module2/soutenabilite-croissance/module">
                        <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-50 text-xs py-1 px-3 h-7">
                          Accéder au module
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section principale - Les transformations des structures économiques, sociales et démographiques depuis le XIXe siècle */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-blue-200 mt-6">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-blue-800 mb-2">Les transformations des structures économiques, sociales et démographiques depuis le XIXe siècle</h4>
                  <p className="text-gray-700 mb-4 text-base">Explorer les grandes mutations structurelles de la société moderne</p>
                </div>
              </div>
            </div>

            {/* Sous-chapitres du Module 2 */}
            <div className="space-y-3 ml-8">
              {/* 2.4 Les transformations des structures économiques et financières */}
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-102 transition-all duration-300 border border-transparent hover:border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600 text-sm">2.4</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-800 mb-1">Les transformations des structures économiques et financières</h4>
                    <p className="text-sm text-gray-600 mb-3">Analyser l'évolution des systèmes économiques et financiers modernes</p>
                    <div className="flex gap-2">
                      <Link to="/formation/esh/module2/transformations-economiques-financieres">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-3 h-7">
                          Introduction
                        </Button>
                      </Link>
                      <Link to="/formation/esh/module2/transformations-economiques-financieres/module">
                        <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-50 text-xs py-1 px-3 h-7">
                          Accéder au module
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2.5 Mobilité sociale et transformations des structures sociales */}
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-102 transition-all duration-300 border border-transparent hover:border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600 text-sm">2.5</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-800 mb-1">Mobilité sociale et transformations des structures sociales</h4>
                    <p className="text-sm text-gray-600 mb-3">Étudier l'évolution des classes sociales et de la mobilité sociale</p>
                    <div className="flex gap-2">
                      <Link to="/formation/esh/module2/mobilite-sociale">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-3 h-7">
                          Introduction
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm" disabled className="border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed text-xs py-1 px-3 h-7 opacity-70">
                        Bientôt disponible
                      </Button>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2.6 Transformations démographiques et évolution des modes de vie */}
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-102 transition-all duration-300 border border-transparent hover:border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600 text-sm">2.6</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-800 mb-1">Transformations démographiques et évolution des modes de vie</h4>
                    <p className="text-sm text-gray-600 mb-3">Comprendre les changements démographiques et leurs impacts sur la société</p>
                    <div className="flex gap-2">
                      <Link to="/formation/esh/module2/transformations-demographiques">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-3 h-7">
                          Introduction
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm" disabled className="border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed text-xs py-1 px-3 h-7 opacity-70">
                        Bientôt disponible
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Section principale - Entreprise et organisations */}
            <div className="bg-gradient-to-r from-blue-50 to-blue-100 rounded-xl p-6 shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-blue-200 mt-6">
              <div className="flex items-start gap-4">
                <div className="flex-1">
                  <h4 className="text-xl font-bold text-blue-800 mb-2">Entreprise et organisations</h4>
                  <p className="text-gray-700 mb-4 text-base">Explorer l'évolution des formes d'organisation du travail et de l'entreprise</p>
                </div>
              </div>
            </div>

            {/* Sous-chapitres du Module 2 - Entreprise et organisations */}
            <div className="space-y-3 ml-8">
              {/* 2.7 Les transformations de l'entreprise et de sa gouvernance */}
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-102 transition-all duration-300 border border-transparent hover:border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600 text-sm">2.7</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-800 mb-1">Les transformations de l'entreprise et de sa gouvernance depuis le XIXe siècle</h4>
                    <p className="text-sm text-gray-600 mb-3">Évolution des formes d'organisation et de management des entreprises</p>
                    <div className="flex gap-2">
                      <Link to="/formation/esh/module2/transformations-entreprise">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-3 h-7">
                          Introduction
                        </Button>
                      </Link>
                      <Link to="/formation/esh/module2/transformations-entreprise/module">
                        <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-50 text-xs py-1 px-3 h-7">
                          Accéder au module
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2.8 Concurrence imparfaite et stratégies des firmes */}
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-102 transition-all duration-300 border border-transparent hover:border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600 text-sm">2.8</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-800 mb-1">Concurrence imparfaite et stratégies des firmes</h4>
                    <p className="text-sm text-gray-600 mb-3">Analyser les stratégies des entreprises dans un contexte de concurrence imparfaite</p>
                    <div className="flex gap-2">
                      <Link to="/formation/esh/module2/concurrence-imparfaite">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-3 h-7">
                          Introduction
                        </Button>
                      </Link>
                      <Link to="/formation/esh/module2/concurrence-imparfaite/module">
                        <Button variant="outline" size="sm" className="border-gray-300 text-gray-600 hover:bg-gray-50 text-xs py-1 px-3 h-7">
                          Accéder au module
                        </Button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>

              {/* 2.9 Éléments de sociologie du travail et des organisations */}
              <div className="bg-white rounded-lg p-4 shadow-sm hover:shadow-md hover:scale-102 transition-all duration-300 border border-transparent hover:border-blue-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="font-bold text-blue-600 text-sm">2.9</span>
                  </div>
                  <div className="flex-1">
                    <h4 className="text-base font-semibold text-gray-800 mb-1">Éléments de sociologie du travail et des organisations</h4>
                    <p className="text-sm text-gray-600 mb-3">Comprendre les dynamiques sociales au sein des organisations de travail</p>
                    <div className="flex gap-2">
                      <Link to="/formation/esh/module2/sociologie-travail">
                        <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white text-xs py-1 px-3 h-7">
                          Introduction
                        </Button>
                      </Link>
                      <Button variant="outline" size="sm" disabled className="border-gray-200 text-gray-400 bg-gray-50 cursor-not-allowed text-xs py-1 px-3 h-7 opacity-70">
                        Bientôt disponible
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Call to action */}
        <div className="text-center mt-12">
          <Link to="/formation/esh/deuxieme-annee">
            <Button size="lg" className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-3 text-lg">
              Passer à la deuxième année
              <ChevronRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PremiereAnneeESHPage;
