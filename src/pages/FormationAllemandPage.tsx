
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Languages, BookOpen, Target, FileText, List, Play, ExternalLink, FlipHorizontal, Globe, Users, Leaf, Building, CheckCircle, Star, Home, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FormationAllemandPage = () => {
  const navigate = useNavigate();

  const generatorModules = [
    {
      id: 1,
      title: "Thèmes Grammaticaux",
      description: "Générateur et correcteur pour les thèmes de traduction avec phrases spécialisées et évaluation détaillée instantanée.",
      topics: [
        "Phrases de presse spécialisées",
        "Correction IA détaillée avec notation",
        "Règles de grammaire personnalisées",
        "Suivi des erreurs et progression"
      ],
      link: "/generator/theme-grammar",
      icon: Target,
      color: "bg-amber-500",
      badge: "Correction IA"
    },
    {
      id: 2,
      title: "Paragraphes Allemands",
      description: "Créez des paragraphes argumentatifs de 150 mots en allemand avec vocabulaire clé issu d'articles de presse.",
      topics: [
        "Paragraphes de 150 mots",
        "Vocabulaire spécialisé",
        "Analyse d'articles de presse",
        "Idées argumentatives structurées"
      ],
      link: "/generator/languages",
      icon: Languages,
      color: "bg-blue-500",
      badge: "Nouveau"
    }
  ];

  const mainModules = [
    {
      id: 1,
      title: "Grammatik",
      subtitle: "Grammaire Allemande",
      description: "Maîtrisez tous les points de grammaire essentiels : déclinaisons, propositions relatives, passif, structure de la phrase et verbes irréguliers.",
      features: [
        "6 fiches de grammaire complètes",
        "Exercices pratiques et exemples",
        "Toutes les formes de conjugaison",
        "Cartes de révision interactives"
      ],
      link: "/formation/allemand/grammaire",
      icon: BookOpen,
      color: "from-amber-500 to-amber-600",
      bgColor: "bg-amber-50",
      textColor: "text-amber-600",
      buttonColor: "bg-amber-600 hover:bg-amber-700"
    },
    {
      id: 2,
      title: "Landeskunde",
      subtitle: "Civilisation Allemande",
      description: "Découvrez l'Allemagne contemporaine : politique, démographie, écologie et géopolitique européenne.",
      features: [
        "4 modules thématiques actualisés",
        "Culture allemande contemporaine",
        "Géopolitique européenne",
        "Vocabulaire et flashcards"
      ],
      link: "/formation/allemand/civilisation",
      icon: Globe,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      textColor: "text-blue-600",
      buttonColor: "bg-blue-600 hover:bg-blue-700"
    },
    {
      id: 3,
      title: "Prüfungserfolg",
      subtitle: "Réussir les épreuves",
      description: "Maîtrisez les différentes épreuves du concours : laisser, colle et synthèse de texte. Techniques, méthodologie et conseils pratiques.",
      features: [
        "Techniques pour tous les examens",
        "Méthodologie et conseils",
        "Exemples pratiques",
        "Exercices concrets"
      ],
      link: "/formation/allemand/epreuves",
      icon: Target,
      color: "from-emerald-500 to-emerald-600",
      bgColor: "bg-emerald-50",
      textColor: "text-emerald-600",
      buttonColor: "bg-emerald-600 hover:bg-emerald-700"
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFF] relative overflow-hidden">
      {/* Floating elements - Subtle bubbles like Spanish page */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-red-200 rounded-full opacity-10 animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-blue-200 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-red-100 rounded-full opacity-10 animate-pulse-slow"></div>
      <div className="absolute bottom-40 left-20 w-56 h-56 bg-blue-200 rounded-full opacity-5 animate-pulse"></div>
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-red-50 rounded-full opacity-10 animate-pulse-slow"></div>
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
            <span className="text-foreground font-medium">Formation Allemand ECG</span>
          </div>
        </div>
      </nav>

      {/* Section Héro moderne */}
      <section className="bg-gradient-to-br from-red-50 via-white to-blue-50 py-16 px-4 sm:px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-2xl bg-amber-600 text-white shadow-lg">
                <Languages className="h-12 w-12" />
              </div>
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              <span className="text-amber-700 font-bold">
                Formation Allemand ECG
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              Formation complète d'allemand pour les concours des Grandes Écoles de Commerce : générateurs IA et fiches de grammaire détaillées
            </p>
            <div className="flex flex-wrap justify-center gap-3 mb-8">
              <Badge variant="secondary" className="px-4 py-2 text-sm font-medium">Niveau prépa</Badge>
              <Badge variant="outline" className="px-4 py-2 text-sm font-medium">Grammaire complète</Badge>
                                <Badge className="bg-amber-600 px-4 py-2 text-sm font-medium text-white">Allemand LV2</Badge>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                onClick={() => navigate('/formation/allemand/grammaire')}
              >
                <BookOpen className="mr-2 h-5 w-5" />
                Commencer la formation
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-2 border-gray-300 hover:border-amber-300 px-8 py-3 text-lg font-semibold hover:bg-amber-50 transition-all duration-300"
                onClick={() => navigate('/formation/allemand/civilisation')}
              >
                <Globe className="mr-2 h-5 w-5" />
                Explorer les modules
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Section Modules principaux avec design moderne */}
      <section className="py-16 px-4 sm:px-6 bg-gray-50 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6">
            Découvrez les <span className="text-amber-700 font-bold">modules de formation</span>
          </h2>


          <div className="w-full max-w-6xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {mainModules.map((module) => (
                <Link
                  key={module.id}
                  to={module.link}
                  className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group block border-2 border-gray-100 hover:border-gray-200"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <module.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-semibold text-xl mb-3 text-center">{module.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 text-center leading-relaxed">{module.description}</p>
                  <div className="space-y-2 text-xs mb-6">
                    {module.features.map((feature, index) => (
                      <div key={index} className="flex items-center justify-center text-amber-600">
                        <div className="w-1.5 h-1.5 rounded-full bg-amber-400 mr-2"></div>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-md hover:shadow-lg">
                    <module.icon className="mr-2 h-4 w-4" />
                    Accéder au module
                  </Button>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Section Générateurs IA modernisée */}
      <section className="py-16 px-4 sm:px-6 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-xl bg-amber-600 text-white shadow-lg">
                <Star className="h-8 w-8" />
              </div>
            </div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-4">
              <span className="text-amber-700 font-bold">Générateurs Intelligents</span>
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Outils IA pour l'entraînement pratique et la correction automatique
            </p>
          </div>

          <div className="grid gap-6 max-w-4xl mx-auto">
            {generatorModules.map((module) => (
              <Card key={module.id} className="border-2 border-gray-100 hover:border-orange-500/50 transition-all duration-300 shadow-md hover:shadow-xl group cursor-pointer">
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className={`p-4 rounded-xl ${module.color} text-white group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <module.icon className="h-8 w-8" />
                      </div>
                      <div>
                        <CardTitle className="flex items-center gap-2 mb-2">
                          <span className="text-xl font-semibold text-gray-800 group-hover:text-orange-600 transition-colors">
                            {module.title}
                          </span>
                          <Badge className="bg-amber-600 text-white">{module.badge}</Badge>
                        </CardTitle>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6 text-base leading-relaxed">{module.description}</p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-6">
                    {module.topics.map((topic, index) => (
                      <div key={index} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="mr-2 h-4 w-4 text-green-500 flex-shrink-0" />
                        <span>{topic}</span>
                      </div>
                    ))}
                  </div>
                  <Link to={module.link}>
                    <Button className={`w-full bg-amber-600 hover:bg-amber-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-md hover:shadow-lg`}>
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Accéder au générateur
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Section informative finale modernisée */}
      <section className="py-16 px-4 sm:px-6 bg-gradient-to-br from-red-50 via-white to-blue-50 relative z-10">
        <div className="container mx-auto max-w-6xl">
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 border border-gray-100">
            <div className="text-center mb-8">
              <div className="flex justify-center gap-4 mb-6">
                <div className="w-14 h-14 bg-amber-600 rounded-full flex items-center justify-center shadow-lg">
                  <BookOpen className="h-7 w-7 text-white" />
                </div>
                <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center shadow-lg">
                  <Globe className="h-7 w-7 text-white" />
                </div>
                <div className="w-14 h-14 bg-emerald-600 rounded-full flex items-center justify-center shadow-lg">
                  <Target className="h-7 w-7 text-white" />
                </div>
                <div className="w-14 h-14 bg-amber-600 rounded-full flex items-center justify-center shadow-lg">
                  <Star className="h-7 w-7 text-white" />
                </div>
              </div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
                <span className="text-amber-700 font-bold">Formation Complète Allemand ECG</span>
              </h3>
            </div>
            <p className="text-gray-700 leading-relaxed max-w-4xl mx-auto text-center text-base sm:text-lg">
              Formation complète d'allemand pour les concours ECG, structurée en quatre axes complémentaires :
                            <span className="font-semibold text-amber-600"> Outils IA pour l'entraînement</span>,
              <span className="font-semibold text-amber-600"> grammaire complète avec 6 fiches détaillées</span>,
              <span className="font-semibold text-blue-600"> civilisation allemande contemporaine</span> et
              <span className="font-semibold text-emerald-600"> méthodologie pour réussir les épreuves</span>.
              Chaque module comprend des exemples concrets, des exercices pratiques et des ressources actualisées
              pour une préparation optimale aux concours.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default FormationAllemandPage;
