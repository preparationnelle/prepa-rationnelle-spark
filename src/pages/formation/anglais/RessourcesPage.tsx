import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { 
  Home, 
  ChevronRight, 
  FileText,
  ArrowLeft,
  BookOpen,
  Globe,
  Users,
  Briefcase,
  Cpu,
  Heart,
  GraduationCap,
  Newspaper,
  Scale,
  Ship,
  Crown,
  MapPin,
  Shield,
  TrendingUp,
  AlertTriangle,
  ExternalLink,
  Download,
  Play,
  Target
} from 'lucide-react';

const RessourcesPage = () => {
  const resources = [
    {
      category: "📚 Ressources de base",
      items: [
        {
          title: "BBC Learning English",
          description: "Cours gratuits, vidéos et exercices de la BBC",
          url: "https://www.bbc.co.uk/learningenglish",
          type: "Site web officiel"
        },
        {
          title: "British Council",
          description: "Ressources pédagogiques et tests de niveau",
          url: "https://learnenglish.britishcouncil.org",
          type: "Institution officielle"
        },
        {
          title: "Cambridge Dictionary",
          description: "Dictionnaire en ligne avec prononciation",
          url: "https://dictionary.cambridge.org",
          type: "Dictionnaire"
        }
      ]
    },
    {
      category: "🎯 Préparation aux concours",
      items: [
        {
          title: "Annales des concours ECG",
          description: "Sujets et corrigés des années précédentes",
          url: "#",
          type: "Annales"
        },

        {
          title: "Vocabulaire spécialisé",
          description: "Listes thématiques par domaine de civilisation",
          url: "#",
          type: "Vocabulaire"
        }
      ]
    },
    {
      category: "📰 Actualité et civilisation",
      items: [
        {
          title: "The Economist",
          description: "Magazine économique et politique de référence",
          url: "https://www.economist.com",
          type: "Presse"
        },
        {
          title: "The Guardian",
          description: "Journal britannique progressiste",
          url: "https://www.theguardian.com",
          type: "Presse"
        },
        {
          title: "BBC News",
          description: "Actualités britanniques et internationales",
          url: "https://www.bbc.com/news",
          type: "Presse"
        },
        {
          title: "NPR",
          description: "Radio publique américaine",
          url: "https://www.npr.org",
          type: "Radio"
        }
      ]
    },
    {
      category: "🎬 Médias et culture",
      items: [
        {
          title: "TED Talks",
          description: "Conférences inspirantes en anglais",
          url: "https://www.ted.com",
          type: "Vidéos"
        },
        {
          title: "Netflix - Documentaires",
          description: "Sélection de documentaires en anglais",
          url: "https://www.netflix.com",
          type: "Streaming"
        },
        {
          title: "YouTube - Chaînes éducatives",
          description: "Chaînes spécialisées en histoire et politique",
          url: "https://www.youtube.com",
          type: "Vidéos"
        }
      ]
    },
    {
      category: "🛠️ Outils d'entraînement",
      items: [
        {
          title: "Quiz de civilisation",
          description: "Tests interactifs par thématique",
          url: "#",
          type: "Quiz"
        },
        {
          title: "Exercices de grammaire",
          description: "Pratique des structures complexes",
          url: "#",
          type: "Exercices"
        },
        {
          title: "Simulateur d'épreuves",
          description: "Conditions réelles de concours",
          url: "#",
          type: "Simulation"
        }
      ]
    }
  ];

  const quickLinks = [
    {
      title: "Civilisation",
      description: "Tous les modules de civilisation",
      icon: Globe,
      color: "bg-blue-600",
      route: "/formation/anglais/civilisation"
    },
    {
      title: "Vocabulaire",
      description: "Flashcards et termes essentiels",
      icon: BookOpen,
      color: "bg-purple-600",
              route: "/formation/anglais"
    },

  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-50 via-white to-blue-50">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-gray-600">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formation/anglais" className="hover:text-gray-900 transition-colors">
              Formation Anglais
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Ressources</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        {/* En-tête */}
        <div className="text-center mb-10">
          <div className="flex justify-center mb-4">
            <Link to="/formation/anglais">
              <Button variant="outline" className="flex items-center gap-2">
                <ArrowLeft className="h-4 w-4" />
                Retour à la formation
              </Button>
            </Link>
          </div>
          
          <h1 className="text-4xl font-bold text-gray-900 mb-4 flex items-center justify-center gap-3">
            <div className="p-3 rounded-lg bg-teal-600 text-white">
              <FileText className="h-9 w-9" />
            </div>
            Ressources Complémentaires
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Outils, liens utiles et ressources d'entraînement pour approfondir votre préparation à l'anglais
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">Formation complète</Badge>
            <Badge variant="outline">Ressources gratuites</Badge>
            <Badge className="bg-teal-600">Niveau Prépa</Badge>
          </div>
        </div>

        {/* Liens rapides */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Accès rapide</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {quickLinks.map((link) => (
              <Link key={link.title} to={link.route} className="block">
                <Card className="border-2 hover:border-teal-500/50 transition-colors cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className={`p-3 rounded-lg ${link.color} text-white`}>
                        <link.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <CardTitle className="text-xl">{link.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{link.description}</p>
                      </div>
                    </div>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>

        {/* Ressources par catégorie */}
        <div className="space-y-8">
          {resources.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span>{category.category.split(' ')[0]}</span>
                <span className="text-gray-700">{category.category.split(' ').slice(1).join(' ')}</span>
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((resource, resourceIndex) => (
                  <Card key={resourceIndex} className="border-2 border-teal-200 bg-gradient-to-r from-teal-50 to-blue-50">
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div className="flex-1">
                          <CardTitle className="text-lg text-teal-800 mb-2">{resource.title}</CardTitle>
                          <p className="text-sm text-gray-700 mb-3">{resource.description}</p>
                          <Badge variant="outline" className="text-teal-700 border-teal-300">
                            {resource.type}
                          </Badge>
                        </div>
                      </div>
                    </CardHeader>
                    <CardContent>
                      {resource.url === "#" ? (
                        <Button variant="outline" className="w-full" disabled>
                          <Play className="mr-2 h-4 w-4" />
                          Bientôt disponible
                        </Button>
                      ) : (
                        <a 
                          href={resource.url} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="block"
                        >
                          <Button variant="outline" className="w-full">
                            <ExternalLink className="mr-2 h-4 w-4" />
                            Accéder
                          </Button>
                        </a>
                      )}
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Section conseils */}
        <Card className="mt-12 border-2 border-teal-200 bg-gradient-to-r from-teal-50 to-blue-50">
          <CardHeader>
            <CardTitle className="text-2xl flex items-center gap-2 text-teal-800">
              <Target className="h-6 w-6" />
              Conseils d'utilisation
            </CardTitle>
          </CardHeader>
          <CardContent className="text-teal-700 space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-teal-900 mb-3">🎯 Stratégie de révision :</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-400 mt-1.5 flex-shrink-0"></span>
                    <span>Utilisez les ressources de presse pour l'actualité</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-400 mt-1.5 flex-shrink-0"></span>
                    <span>Pratiquez régulièrement avec les outils d'entraînement</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-400 mt-1.5 flex-shrink-0"></span>
                    <span>Immergez-vous dans la culture anglophone</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-teal-900 mb-3">📚 Ressources prioritaires :</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-400 mt-1.5 flex-shrink-0"></span>
                    <span>BBC Learning English pour la grammaire</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-400 mt-1.5 flex-shrink-0"></span>
                    <span>The Economist pour la civilisation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="w-2 h-2 rounded-full bg-teal-400 mt-1.5 flex-shrink-0"></span>
                    <span>TED Talks pour la compréhension orale</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RessourcesPage; 