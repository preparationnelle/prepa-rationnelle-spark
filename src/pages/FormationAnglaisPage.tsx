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
      color: 'bg-green-500',
      route: '/formation/anglais/civilisation/environment'
    },
    {
      id: 'politics-us-uk',
      title: 'Politics (United States & United Kingdom)',
      description: 'Political systems, elections, and contemporary political developments',
      icon: Crown,
      color: 'bg-blue-500',
      route: '/formation/anglais/civilisation/politics'
    },
    {
      id: 'geopolitics',
      title: 'Geopolitics and International Relations',
      description: 'Anglo-American foreign policy, international alliances, and global influence',
      icon: MapPin,
      color: 'bg-purple-500',
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
      color: 'bg-emerald-500',
      route: '/formation/anglais/civilisation/economy'
    },
    {
      id: 'health',
      title: 'Health and Healthcare Systems',
      description: 'Healthcare policies, public health crises, and medical innovations',
      icon: Heart,
      color: 'bg-red-500',
      route: '/formation/anglais/civilisation/health'
    },
    {
      id: 'education',
      title: 'Education and Culture Wars',
      description: 'Education systems, cultural debates, and academic controversies',
      icon: GraduationCap,
      color: 'bg-indigo-500',
      route: '/formation/anglais/civilisation/education'
    },
    {
      id: 'media',
      title: 'Media and Social Networks',
      description: 'Digital media, social platforms, and the information age',
      icon: Newspaper,
      color: 'bg-pink-500',
      route: '/formation/anglais/civilisation/media'
    },
    {
      id: 'justice',
      title: 'Justice and the Rule of Law',
      description: 'Legal systems, criminal justice, and constitutional law',
      icon: Scale,
      color: 'bg-gray-600',
      route: '/formation/anglais/civilisation/justice'
    },
    {
      id: 'inequalities',
      title: 'Social and Racial Inequalities',
      description: 'Social stratification, racial issues, and economic disparities',
      icon: Users,
      color: 'bg-yellow-600',
      route: '/formation/anglais/civilisation/inequalities'
    },
    {
      id: 'civil-rights',
      title: 'Civil Rights and Social Movements',
      description: 'Historical and contemporary social movements and civil rights',
      icon: Shield,
      color: 'bg-teal-500',
      route: '/formation/anglais/civilisation/civil-rights'
    },
    {
      id: 'brexit',
      title: 'Brexit and its Aftermath',
      description: 'Brexit process, consequences, and UK-EU relations',
      icon: Ship,
      color: 'bg-slate-600',
      route: '/formation/anglais/civilisation/brexit'
    },
    {
      id: 'commonwealth',
      title: 'The Commonwealth and Post-Colonial Legacy',
      description: 'Commonwealth relations and post-colonial developments',
      icon: Crown,
      color: 'bg-amber-600',
      route: '/formation/anglais/civilisation/commonwealth'
    },
    {
      id: 'civil-religion',
      title: 'Civil Religion and National Identity',
      description: 'National identity, patriotism, and civic culture',
      icon: Home,
      color: 'bg-rose-500',
      route: '/formation/anglais/civilisation/civil-religion'
    },
    {
      id: 'immigration',
      title: 'Immigration and Border Control',
      description: 'Immigration policies, border security, and demographic changes',
      icon: MapPin,
      color: 'bg-cyan-500',
      route: '/formation/anglais/civilisation/immigration'
    },
    {
      id: 'contemporary-crises',
      title: 'Major Contemporary Crises',
      description: 'Pandemic response, inflation, and other major contemporary challenges',
      icon: AlertTriangle,
      color: 'bg-red-600',
      route: '/formation/anglais/civilisation/crises'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-[#F8FAFF]/95 backdrop-blur supports-[backdrop-filter]:bg-[#F8FAFF]/60 border-b border-border/40">
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
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto mb-12">
          <Link to="/formation/anglais/methodologie-complete" className="block">
            <Card className="border-2 hover:border-green-500/50 transition-colors cursor-pointer h-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-green-500 text-white">
                      <PenTool className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        Méthodologie Complète
                        <Badge className="bg-green-500 text-white">7 étapes</Badge>
                      </CardTitle>
                      <h3 className="text-xl font-semibold text-gray-800 mt-1">
                        Méthode pour réussir en prépa ECG
                      </h3>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Méthode complète en 7 étapes pour réussir les épreuves d'anglais en prépa HEC : traduction, grammaire, essais, synthèses et colles.
                </p>
                <Button variant="outline" className="w-full">
                  <PenTool className="mr-2 h-4 w-4" />
                  Découvrir la méthode
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link to="/formation/anglais/civilisation" className="block">
            <Card className="border-2 hover:border-blue-500/50 transition-colors cursor-pointer h-full">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-blue-500 text-white">
                      <Globe className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        Civilisation
                        <Badge className="bg-blue-500 text-white">2025 Update</Badge>
                      </CardTitle>
                      <h3 className="text-xl font-semibold text-gray-800 mt-1">
                        Current Affairs & Culture
                      </h3>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  16 chapitres sur les enjeux contemporains du monde anglophone : politique, économie, société, technologie.
                </p>
                <Button variant="outline" className="w-full">
                  <Globe className="mr-2 h-4 w-4" />
                  Explorer la civilisation
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>

        {/* Outils et ressources */}
        <div className="mt-8 max-w-4xl mx-auto grid gap-6">
          <h2 className="text-2xl font-bold text-center mb-6">Outils et Ressources</h2>
          
          <Link to="/formation/anglais" className="block">
            <Card className="border-2 hover:border-purple-500/50 transition-colors cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-purple-500 text-white">
                      <BookOpen className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        Vocabulaire
                        <Badge className="bg-purple-500 text-white">200+ mots</Badge>
                      </CardTitle>
                      <h3 className="text-xl font-semibold text-gray-800 mt-1">
                        Flashcards et termes essentiels
                      </h3>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Plus de 200 expressions et termes indispensables pour réussir vos concours avec système de révision espacée.
                </p>
                <Button variant="outline" className="w-full">
                  <BookOpen className="mr-2 h-4 w-4" />
                  Réviser le vocabulaire
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link to="/generator/languages-unified" className="block">
            <Card className="border-2 hover:border-orange-500/50 transition-colors cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-orange-500 text-white">
                      <Wand2 className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        Générateurs IA
                        <Badge className="bg-orange-500 text-white">Premium</Badge>
                      </CardTitle>
                      <h3 className="text-xl font-semibold text-gray-800 mt-1">
                        Paragraphes et thèmes automatisés
                      </h3>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Générez automatiquement paragraphes argumentatifs et thèmes grammaticaux avec correction IA.
                </p>
                <Button variant="outline" className="w-full">
                  <Wand2 className="mr-2 h-4 w-4" />
                  Accéder aux générateurs
                </Button>
              </CardContent>
            </Card>
          </Link>

          <Link to="/formation/anglais/ressources" className="block">
            <Card className="border-2 hover:border-teal-500/50 transition-colors cursor-pointer">
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-teal-500 text-white">
                      <FileText className="h-6 w-6" />
                    </div>
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        Ressources
                        <Badge className="bg-teal-500 text-white">Complètes</Badge>
                      </CardTitle>
                      <h3 className="text-xl font-semibold text-gray-800 mt-1">
                        Outils complémentaires
                      </h3>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  Ressources complémentaires, liens utiles, et outils d'entraînement pour approfondir votre préparation.
                </p>
                <Button variant="outline" className="w-full">
                  <FileText className="mr-2 h-4 w-4" />
                  Consulter les ressources
                </Button>
              </CardContent>
            </Card>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FormationAnglaisPage;
