import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link, useNavigate } from "react-router-dom";
import { BookOpen, Wand2, MessageSquare, Globe, Users, Briefcase, Cpu, Heart, GraduationCap, Newspaper, Scale, Home, Ship, Crown, MapPin, Shield, TrendingUp, AlertTriangle, ChevronRight, PenTool, FileText } from 'lucide-react';

const FormationAnglaisPage = () => {
  const navigate = useNavigate();

  const civilizationChapters = [
    {
      id: 'environment',
      title: 'Environment and Ecology',
      description: 'Climate change, green policies, and environmental challenges in the English-speaking world',
      icon: Globe,
      color: 'bg-orange-600',
      route: '/formation/anglais/civilisation/environment'
    },
    {
      id: 'politics-us-uk',
      title: 'Politics (United States & United Kingdom)',
      description: 'Political systems, elections, and contemporary political developments',
      icon: Crown,
      color: 'bg-blue-600',
      route: '/formation/anglais/civilisation/politics'
    },
    {
      id: 'geopolitics',
      title: 'Geopolitics and International Relations',
      description: 'Anglo-American foreign policy, international alliances, and global influence',
      icon: MapPin,
      color: 'bg-orange-600',
      route: '/formation/anglais/civilisation/geopolitics'
    },
    {
      id: 'ai-technology',
      title: 'Artificial Intelligence and Technology',
      description: 'Tech revolution, AI ethics, and the digital transformation of society',
      icon: Cpu,
      color: 'bg-orange-500',
      route: '/formation/anglais/civilisation/technology'
    },
    {
      id: 'economy',
      title: 'Economy and Globalization',
      description: 'Economic systems, trade, and the impact of globalization',
      icon: TrendingUp,
      color: 'bg-blue-600',
      route: '/formation/anglais/civilisation/economy'
    },
    {
      id: 'health',
      title: 'Health and Healthcare Systems',
      description: 'Healthcare policies, public health crises, and medical innovations',
      icon: Heart,
      color: 'bg-orange-600',
      route: '/formation/anglais/civilisation/health'
    },
    {
      id: 'education',
      title: 'Education and Culture Wars',
      description: 'Education systems, cultural debates, and academic controversies',
      icon: GraduationCap,
      color: 'bg-blue-600',
      route: '/formation/anglais/civilisation/education'
    },
    {
      id: 'media',
      title: 'Media and Social Networks',
      description: 'Digital media, social platforms, and the information age',
      icon: Newspaper,
      color: 'bg-orange-600',
      route: '/formation/anglais/civilisation/media'
    },
    {
      id: 'justice',
      title: 'Justice and the Rule of Law',
      description: 'Legal systems, criminal justice, and constitutional law',
      icon: Scale,
      color: 'bg-blue-600',
      route: '/formation/anglais/civilisation/justice'
    },
    {
      id: 'inequalities',
      title: 'Social and Racial Inequalities',
      description: 'Social stratification, racial issues, and economic disparities',
      icon: Users,
      color: 'bg-orange-600',
      route: '/formation/anglais/civilisation/inequalities'
    },
    {
      id: 'civil-rights',
      title: 'Civil Rights and Social Movements',
      description: 'Historical and contemporary social movements and civil rights',
      icon: Shield,
      color: 'bg-blue-600',
      route: '/formation/anglais/civilisation/civil-rights'
    },
    {
      id: 'brexit',
      title: 'Brexit and its Aftermath',
      description: 'Brexit process, consequences, and UK-EU relations',
      icon: Ship,
      color: 'bg-orange-600',
      route: '/formation/anglais/civilisation/brexit'
    },
    {
      id: 'commonwealth',
      title: 'The Commonwealth and Post-Colonial Legacy',
      description: 'Commonwealth relations and post-colonial developments',
      icon: Crown,
      color: 'bg-blue-600',
      route: '/formation/anglais/civilisation/commonwealth'
    },
    {
      id: 'civil-religion',
      title: 'Civil Religion and National Identity',
      description: 'National identity, patriotism, and civic culture',
      icon: Home,
      color: 'bg-orange-600',
      route: '/formation/anglais/civilisation/civil-religion'
    },
    {
      id: 'immigration',
      title: 'Immigration and Border Control',
      description: 'Immigration policies, border security, and demographic changes',
      icon: MapPin,
      color: 'bg-blue-600',
      route: '/formation/anglais/civilisation/immigration'
    },
    {
      id: 'contemporary-crises',
      title: 'Major Contemporary Crises',
      description: 'Pandemic response, inflation, and other major contemporary challenges',
      icon: AlertTriangle,
      color: 'bg-orange-600',
      route: '/formation/anglais/civilisation/crises'
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
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
            <span className="text-foreground font-medium">Formation Anglais ECG</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Formation Anglais ECG</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Formation complète pour maîtriser l'anglais aux concours des Grandes Écoles de Commerce
          </p>
        </div>

        {/* Modules principaux */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-12">
          <Link
            to="/formation/espagnol/grammaire"
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group block border-2 border-orange-100 hover:border-orange-200"
          >
            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
              <BookOpen className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-semibold text-xl mb-3 text-center">Grammaire en Anglais</h3>
            <p className="text-sm text-gray-600 mb-4 text-center leading-relaxed">Maîtrisez les règles essentielles de grammaire anglaise pour les concours</p>
            <div className="space-y-2 text-xs mb-6">
              <div className="flex items-center justify-center text-orange-600">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mr-2"></div>
                <span>Temps verbaux complexes</span>
              </div>
              <div className="flex items-center justify-center text-orange-600">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mr-2"></div>
                <span>Structures syntaxiques</span>
              </div>
              <div className="flex items-center justify-center text-orange-600">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mr-2"></div>
                <span>Style et expression</span>
              </div>
            </div>
            <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-md hover:shadow-lg">
              <BookOpen className="mr-2 h-4 w-4" />
              Étudier la grammaire
            </Button>
          </Link>

          <Link
            to="/formation/anglais/methodologie-complete"
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group block border-2 border-orange-100 hover:border-orange-200"
          >
            <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
              <PenTool className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-semibold text-xl mb-3 text-center">Méthodologie Complète</h3>
            <p className="text-sm text-gray-600 mb-4 text-center leading-relaxed">Méthode complète en 7 étapes pour réussir les épreuves d'anglais en prépa HEC</p>
            <div className="space-y-2 text-xs mb-6">
              <div className="flex items-center justify-center text-orange-600">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mr-2"></div>
                <span>Traduction et grammaire</span>
              </div>
              <div className="flex items-center justify-center text-orange-600">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mr-2"></div>
                <span>Essais et synthèses</span>
              </div>
              <div className="flex items-center justify-center text-orange-600">
                <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mr-2"></div>
                <span>Préparation aux colles</span>
              </div>
            </div>
            <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-md hover:shadow-lg">
              <PenTool className="mr-2 h-4 w-4" />
              Découvrir la méthode
            </Button>
          </Link>

          <Link
            to="/formation/anglais/civilisation"
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group block border-2 border-blue-100 hover:border-blue-200"
          >
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
              <Globe className="h-8 w-8 text-white" />
            </div>
            <h3 className="font-semibold text-xl mb-3 text-center">Civilisation Anglophone</h3>
            <p className="text-sm text-gray-600 mb-4 text-center leading-relaxed">Enjeux contemporains du monde anglophone pour réussir les épreuves</p>
            <div className="space-y-2 text-xs mb-6">
              <div className="flex items-center justify-center text-blue-600">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                <span>Politique et société</span>
              </div>
              <div className="flex items-center justify-center text-blue-600">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                <span>Économie et technologie</span>
              </div>
              <div className="flex items-center justify-center text-blue-600">
                <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                <span>Culture et environnement</span>
              </div>
            </div>
            <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-md hover:shadow-lg">
              <Globe className="mr-2 h-4 w-4" />
              Explorer la civilisation
            </Button>
          </Link>

          <Link
            to="/formation/anglais/methodologie"
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

        {/* Outils et ressources */}
        <div className="mt-8 max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Outils et Ressources</h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <Link
              to="/formation/anglais/vocabulaire"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group block border-2 border-orange-100 hover:border-orange-200"
            >
              <div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <BookOpen className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-center">Vocabulaire Anglais</h3>
              <p className="text-sm text-gray-600 mb-4 text-center leading-relaxed">Maîtrisez le lexique essentiel pour vos épreuves de concours</p>
              <div className="space-y-2 text-xs mb-6">
                <div className="flex items-center justify-center text-orange-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mr-2"></div>
                  <span>200+ termes essentiels</span>
                </div>
                <div className="flex items-center justify-center text-orange-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mr-2"></div>
                  <span>Flashcards interactives</span>
                </div>
                <div className="flex items-center justify-center text-orange-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-orange-400 mr-2"></div>
                  <span>Système de révision</span>
                </div>
              </div>
              <Button className="w-full bg-orange-600 hover:bg-orange-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-md hover:shadow-lg">
                <BookOpen className="mr-2 h-4 w-4" />
                Réviser le vocabulaire
              </Button>
            </Link>

            <Link
              to="/generator/languages-unified"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group block border-2 border-blue-100 hover:border-blue-200"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <Wand2 className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-center">Générateurs IA</h3>
              <p className="text-sm text-gray-600 mb-4 text-center leading-relaxed">Paragraphes argumentatifs et thèmes grammaticaux automatisés</p>
              <div className="space-y-2 text-xs mb-6">
                <div className="flex items-center justify-center text-blue-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                  <span>Correction IA intégrée</span>
                </div>
                <div className="flex items-center justify-center text-blue-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                  <span>Génération instantanée</span>
                </div>
                <div className="flex items-center justify-center text-blue-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                  <span>Thèmes type concours</span>
                </div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-md hover:shadow-lg">
                <Wand2 className="mr-2 h-4 w-4" />
                Accéder aux générateurs
              </Button>
            </Link>

            <Link
              to="/formation/anglais/ressources"
              className="bg-white rounded-xl p-6 shadow-md hover:shadow-xl transition-all duration-300 group block border-2 border-blue-100 hover:border-blue-200"
            >
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:shadow-xl transition-all duration-300">
                <FileText className="h-8 w-8 text-white" />
              </div>
              <h3 className="font-semibold text-xl mb-3 text-center">Ressources Complètes</h3>
              <p className="text-sm text-gray-600 mb-4 text-center leading-relaxed">Outils complémentaires et liens utiles pour votre préparation</p>
              <div className="space-y-2 text-xs mb-6">
                <div className="flex items-center justify-center text-blue-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                  <span>Annales et corrigés</span>
                </div>
                <div className="flex items-center justify-center text-blue-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                  <span>Liens et références</span>
                </div>
                <div className="flex items-center justify-center text-blue-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2"></div>
                  <span>Outils d'entraînement</span>
                </div>
              </div>
              <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-md hover:shadow-lg">
                <FileText className="mr-2 h-4 w-4" />
                Consulter les ressources
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormationAnglaisPage;
