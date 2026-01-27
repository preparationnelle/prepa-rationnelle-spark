import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Home, ChevronRight, Globe, Users, Briefcase, Cpu, Heart, GraduationCap, Newspaper, Scale, Ship, Crown, MapPin, Shield, TrendingUp, AlertTriangle, BookOpen, Zap, Palette, ArrowRight } from 'lucide-react';

const CivilisationOverviewPage = () => {
  const civilizationChapters = [
    {
      id: 'environment',
      title: 'Environment and Ecology',
      description: 'Climate change, green policies, and environmental challenges',
      icon: Globe,
      color: 'text-green-600',
      route: '/formation/anglais/civilisation/environment'
    },
    {
      id: 'politics-us-uk',
      title: 'Politics (US & UK)',
      description: 'Political systems, elections, and contemporary developments',
      icon: Crown,
      color: 'text-blue-600',
      route: '/formation/anglais/civilisation/politics'
    },
    {
      id: 'geopolitics',
      title: 'Geopolitics & International Relations',
      description: 'Foreign policy, alliances, and global influence',
      icon: MapPin,
      color: 'text-indigo-600',
      route: '/formation/anglais/civilisation/geopolitics'
    },
    {
      id: 'immigration',
      title: 'Immigration & Integration',
      description: 'Migration policies, multiculturalism, and social cohesion',
      icon: Globe,
      color: 'text-orange-600',
      route: '/formation/anglais/civilisation/immigration'
    },
    {
      id: 'education',
      title: 'Education Systems',
      description: 'Policies, university access, and social mobility',
      icon: GraduationCap,
      color: 'text-blue-600',
      route: '/formation/anglais/civilisation/education'
    },
    {
      id: 'gender-equality',
      title: 'Gender Equality',
      description: "Women's rights, LGBTQ+ issues, and social movements",
      icon: Heart,
      color: 'text-pink-600',
      route: '/formation/anglais/civilisation/gender-equality'
    },
    {
      id: 'ai-technology',
      title: 'AI and Technology',
      description: 'Tech revolution, AI ethics, and digital transformation',
      icon: Cpu,
      color: 'text-violet-600',
      route: '/formation/anglais/civilisation/technology'
    },
    {
      id: 'economy',
      title: 'Economy & Globalization',
      description: 'Economic systems, trade, and globalization impacts',
      icon: TrendingUp,
      color: 'text-emerald-600',
      route: '/formation/anglais/civilisation/economy'
    },
    {
      id: 'brexit',
      title: 'Brexit & Trade',
      description: 'Post-Brexit Britain, trade deals, and sovereignty',
      icon: Ship,
      color: 'text-blue-700',
      route: '/formation/anglais/civilisation/brexit'
    },
    {
      id: 'labor-markets',
      title: 'Labor Markets',
      description: 'Employment trends, gig economy, and future of work',
      icon: Briefcase,
      color: 'text-slate-600',
      route: '/formation/anglais/civilisation/labor-markets'
    },
    {
      id: 'media',
      title: 'Media & Communication',
      description: 'Social media, journalism, fake news, and democracy',
      icon: Newspaper,
      color: 'text-orange-500',
      route: '/formation/anglais/civilisation/media'
    },
    {
      id: 'polarization',
      title: 'Polarization',
      description: 'Political and cultural divides, causes and remedies',
      icon: Zap,
      color: 'text-red-600',
      route: '/formation/anglais/civilisation/polarization'
    },
    {
      id: 'health-systems',
      title: 'Healthcare Systems',
      description: 'Comparative analysis, policy reforms, and crises',
      icon: Heart,
      color: 'text-cyan-600',
      route: '/formation/anglais/civilisation/health-systems'
    },
    {
      id: 'justice',
      title: 'Justice & Rule of Law',
      description: 'Legal systems, criminal justice, and constitution',
      icon: Scale,
      color: 'text-slate-700',
      route: '/formation/anglais/civilisation/justice'
    },
    {
      id: 'inequalities',
      title: 'Social Inequalities',
      description: 'Stratification, racial issues, and economic disparities',
      icon: Users,
      color: 'text-amber-600',
      route: '/formation/anglais/civilisation/inequalities'
    },
    {
      id: 'civil-rights',
      title: 'Civil Rights',
      description: 'Historical and contemporary social movements',
      icon: Shield,
      color: 'text-teal-600',
      route: '/formation/anglais/civilisation/civil-rights'
    },
    {
      id: 'commonwealth',
      title: 'The Commonwealth',
      description: 'Relations, history, and post-colonial legacy',
      icon: Crown,
      color: 'text-purple-600',
      route: '/formation/anglais/civilisation/commonwealth'
    },
    {
      id: 'civil-religion',
      title: 'Civil Religion',
      description: 'National identity, patriotism, and civic culture',
      icon: Home,
      color: 'text-rose-600',
      route: '/formation/anglais/civilisation/civil-religion'
    },
    {
      id: 'contemporary-crises',
      title: 'Contemporary Crises',
      description: 'Pandemic, inflation, and major global challenges',
      icon: AlertTriangle,
      color: 'text-red-500',
      route: '/formation/anglais/civilisation/crises'
    },
    {
      id: 'culture-wars',
      title: 'Culture Wars',
      description: 'Cultural debates, identity politics, and shifts',
      icon: Palette,
      color: 'text-fuchsia-600',
      route: '/formation/anglais/civilisation/culture-wars'
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
              Formation <span className="text-orange-600">Anglais</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Civilisation</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-12 px-4 max-w-6xl">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4 tracking-tight text-gray-900">Current Affairs & Civilization</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Essential topics for understanding the English-speaking world. Updated for 2025.
          </p>
        </div>

        {/* Chapters Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 mb-20">
          {civilizationChapters.map((chapter) => (
            <Link key={chapter.id} to={chapter.route} className="group block h-full">
              <div className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors duration-200 h-full border border-transparent hover:border-gray-100">
                <div className={`mt-1 p-2 rounded-lg bg-gray-50 group-hover:bg-white transition-colors ${chapter.color}`}>
                  <chapter.icon className="h-6 w-6" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1 flex items-center gap-2">
                    {chapter.title}
                    <ArrowRight className="h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-gray-400" />
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {chapter.description}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Simple Info Section */}
        <div className="border-t border-gray-100 pt-12">
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h4 className="font-bold text-gray-900 mb-4">Why Study Civilization?</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="text-gray-400">•</span>
                  Crucial context for oral examinations and interviews
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400">•</span>
                  Cultural background for text analysis
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400">•</span>
                  Argumentative essay examples and evidence
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold text-gray-900 mb-4">2025 Focus Areas</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="flex gap-2">
                  <span className="text-gray-400">•</span>
                  Post-pandemic economic and social shifts
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400">•</span>
                  The impact of AI and technological revolution
                </li>
                <li className="flex gap-2">
                  <span className="text-gray-400">•</span>
                  Political polarization in Western democracies
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CivilisationOverviewPage;