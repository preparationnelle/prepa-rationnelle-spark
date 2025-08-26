import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Home, ChevronRight, Globe, Users, Briefcase, Cpu, Heart, GraduationCap, Newspaper, Scale, Ship, Crown, MapPin, Shield, TrendingUp, AlertTriangle, BookOpen } from 'lucide-react';

const CivilisationOverviewPage = () => {
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
            <Link to="/formation/anglais" className="hover:text-foreground transition-colors">
              Formation Anglais
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Civilisation</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Current Affairs and Civilization Topics</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Explore key contemporary issues and civilization topics essential for understanding the English-speaking world. 
            Updated with the latest developments and current affairs for 2025.
          </p>
          <div className="flex justify-center gap-2 mt-4">
            <Badge variant="secondary">16 Chapitres</Badge>
            <Badge variant="outline">2025 Update</Badge>
            <Badge className="bg-blue-600">Comprehensive</Badge>
          </div>
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mb-12">
          {civilizationChapters.map((chapter) => (
            <Link key={chapter.id} to={chapter.route} className="block">
              <Card className="h-full hover:shadow-lg transition-all duration-200 cursor-pointer border-l-4 border-l-transparent hover:border-l-primary">
                <CardHeader>
                  <div className="flex items-start gap-3">
                    <div className={`p-3 rounded-lg ${chapter.color} text-white`}>
                      <chapter.icon className="h-6 w-6" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-lg mb-2">{chapter.title}</CardTitle>
                      <p className="text-sm text-muted-foreground">{chapter.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    <Button variant="outline" className="w-full">
                      <BookOpen className="mr-2 h-4 w-4" />
                      Explore Chapter
                    </Button>
                    {chapter.id === 'environment' && (
                      <Link to="/formation/anglais/civilisation/environment/vocabulary">
                        <Button variant="outline" className="w-full bg-green-50 border-green-200 text-green-700 hover:bg-green-100">
                          <BookOpen className="mr-2 h-4 w-4" />
                          Vocabulary
                        </Button>
                      </Link>
                    )}
                               {chapter.id === 'politics-us-uk' && (
             <Link to="/formation/anglais/civilisation/politics/vocabulary">
               <Button variant="outline" className="w-full bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100">
                 <BookOpen className="mr-2 h-4 w-4" />
                 Vocabulary
               </Button>
             </Link>
           )}
           {chapter.id === 'geopolitics' && (
             <Link to="/formation/anglais/civilisation/geopolitics/vocabulary">
               <Button variant="outline" className="w-full bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100">
                 <BookOpen className="mr-2 h-4 w-4" />
                 Vocabulary
               </Button>
             </Link>
           )}
           {chapter.id === 'technology' && (
             <Link to="/formation/anglais/civilisation/technology/vocabulary">
               <Button variant="outline" className="w-full bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100">
                 <BookOpen className="mr-2 h-4 w-4" />
                 Vocabulary
               </Button>
             </Link>
           )}
           {chapter.id === 'economy' && (
             <Link to="/formation/anglais/civilisation/economy/vocabulary">
               <Button variant="outline" className="w-full bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100">
                 <BookOpen className="mr-2 h-4 w-4" />
                 Vocabulary
               </Button>
             </Link>
           )}
           {chapter.id === 'health' && (
             <Link to="/formation/anglais/civilisation/health/vocabulary">
               <Button variant="outline" className="w-full bg-teal-50 border-teal-200 text-teal-700 hover:bg-teal-100">
                 <BookOpen className="mr-2 h-4 w-4" />
                 Vocabulary
               </Button>
             </Link>
           )}
           {chapter.id === 'education' && (
             <Link to="/formation/anglais/civilisation/education/vocabulary">
               <Button variant="outline" className="w-full bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100">
                 <BookOpen className="mr-2 h-4 w-4" />
                 Vocabulary
               </Button>
             </Link>
           )}
           {chapter.id === 'media' && (
             <Link to="/formation/anglais/civilisation/media/vocabulary">
               <Button variant="outline" className="w-full bg-pink-50 border-pink-200 text-pink-700 hover:bg-pink-100">
                 <BookOpen className="mr-2 h-4 w-4" />
                 Vocabulary
               </Button>
             </Link>
           )}
           {chapter.id === 'justice' && (
             <Link to="/formation/anglais/civilisation/justice/vocabulary">
               <Button variant="outline" className="w-full bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100">
                 <BookOpen className="mr-2 h-4 w-4" />
                 Vocabulary
               </Button>
             </Link>
           )}
           {chapter.id === 'inequalities' && (
             <Link to="/formation/anglais/civilisation/inequalities/vocabulary">
               <Button variant="outline" className="w-full bg-red-50 border-red-200 text-red-700 hover:bg-red-100">
                 <BookOpen className="mr-2 h-4 w-4" />
                 Vocabulary
               </Button>
             </Link>
           )}
           {chapter.id === 'civil-rights' && (
             <Link to="/formation/anglais/civilisation/civil-rights/vocabulary">
               <Button variant="outline" className="w-full bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100">
                 <BookOpen className="mr-2 h-4 w-4" />
                 Vocabulary
               </Button>
             </Link>
           )}
           {chapter.id === 'brexit' && (
             <Link to="/formation/anglais/civilisation/brexit/vocabulary">
               <Button variant="outline" className="w-full bg-red-50 border-red-200 text-red-700 hover:bg-red-100">
                 <BookOpen className="mr-2 h-4 w-4" />
                 Vocabulary
               </Button>
             </Link>
           )}
           {chapter.id === 'commonwealth' && (
             <Link to="/formation/anglais/civilisation/commonwealth/vocabulary">
               <Button variant="outline" className="w-full bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100">
                 <BookOpen className="mr-2 h-4 w-4" />
                 Vocabulary
               </Button>
             </Link>
           )}
           {chapter.id === 'civil-religion' && (
             <Link to="/formation/anglais/civilisation/civil-religion/vocabulary">
               <Button variant="outline" className="w-full bg-purple-50 border-purple-200 text-purple-700 hover:bg-purple-100">
                 <BookOpen className="mr-2 h-4 w-4" />
                 Vocabulary
               </Button>
             </Link>
           )}
           {chapter.id === 'immigration' && (
             <Link to="/formation/anglais/civilisation/immigration/vocabulary">
               <Button variant="outline" className="w-full bg-blue-50 border-blue-200 text-blue-700 hover:bg-blue-100">
                 <BookOpen className="mr-2 h-4 w-4" />
                 Vocabulary
               </Button>
             </Link>
           )}
           {chapter.id === 'contemporary-crises' && (
             <Link to="/formation/anglais/civilisation/crises/vocabulary">
               <Button variant="outline" className="w-full bg-red-50 border-red-200 text-red-700 hover:bg-red-100">
                 <BookOpen className="mr-2 h-4 w-4" />
                 Vocabulary
               </Button>
             </Link>
           )}
           {chapter.id === 'ai-technology' && (
             <Link to="/formation/anglais/civilisation/ai-technology/vocabulary">
               <Button variant="outline" className="w-full bg-orange-50 border-orange-200 text-orange-700 hover:bg-orange-100">
                 <BookOpen className="mr-2 h-4 w-4" />
                 Vocabulary
               </Button>
             </Link>
           )}
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Information Card */}
        <Card className="max-w-4xl mx-auto bg-gradient-to-r from-blue-50 to-indigo-50 border-blue-200">
          <CardHeader>
            <CardTitle className="text-xl text-blue-800">Why Study Civilization?</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-6 text-sm">
              <div>
                <h4 className="font-semibold mb-2 text-blue-700">Essential for Success:</h4>
                <ul className="space-y-1 text-blue-600">
                  <li>• Current affairs knowledge for oral examinations</li>
                  <li>• Cultural context for text analysis</li>
                  <li>• Argumentative essay topics and examples</li>
                  <li>• Professional vocabulary and concepts</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold mb-2 text-blue-700">2025 Focus Areas:</h4>
                <ul className="space-y-1 text-blue-600">
                  <li>• Post-pandemic society and economics</li>
                  <li>• AI revolution and ethical challenges</li>
                  <li>• Climate action and green transition</li>
                  <li>• Political polarization and democracy</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default CivilisationOverviewPage;