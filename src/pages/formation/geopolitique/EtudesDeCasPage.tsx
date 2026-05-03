import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Home, ChevronRight, FileText, Users, Plane, Zap, Leaf, Globe, TrendingUp, AlertTriangle, Building, Coins, MapPin } from 'lucide-react';

const EtudesDeCasPage = () => {
  const caseStudies = [
    {
      id: 'migrations',
      title: 'Migrations',
      subtitle: 'Flux migratoires mondiaux',
      description: 'Analyse des migrations internationales : 304 millions de migrants en 2024, défis géopolitiques et conséquences démographiques.',
      icon: Users,
      color: 'blue',
      keyStats: ['304M migrants', '122M déplacés', '43,7M réfugiés'],
      route: '/formation/geopolitique/etudes-de-cas/migrations'
    },
    {
      id: 'tourisme',
      title: 'Tourisme',
      subtitle: 'Industrie touristique mondiale',
      description: 'Le tourisme comme facteur géopolitique : 1,8 trillion $ de recettes, overtourism et tourisme durable.',
      icon: Plane,
      color: 'green',
      keyStats: ['1,8T$ recettes', '75% pop mondiale', '250M retraités'],
      route: '/formation/geopolitique/etudes-de-cas/tourisme'
    },
    {
      id: 'transports',
      title: 'Transports',
      subtitle: 'Réseaux de transport mondiaux',
      description: 'Transport maritime, aérien et terrestre : 90% du commerce mondial par mer, concentration portuaire asiatique.',
      icon: Globe,
      color: 'purple',
      keyStats: ['11Md tonnes', '130K navires', '90% commerce'],
      route: '/formation/geopolitique/etudes-de-cas/transports'
    },
    {
      id: 'energie',
      title: 'Énergie',
      subtitle: 'Géopolitique énergétique',
      description: 'Production et consommation énergétiques : pétrole, gaz, renouvelables et transition énergétique.',
      icon: Zap,
      color: 'orange',
      keyStats: ['31% pétrole', '29% charbon', '15% hydraulique'],
      route: '/formation/geopolitique/etudes-de-cas/energie'
    },
    {
      id: 'metaux',
      title: 'Métaux',
      subtitle: 'Ressources métalliques',
      description: 'Course aux métaux critiques : fer, cuivre, terres rares et enjeux géopolitiques des batteries.',
      icon: Coins,
      color: 'gray',
      keyStats: ['3,2Md tonnes fer', '70% terres rares Chine', '22M tonnes cuivre'],
      route: '/formation/geopolitique/etudes-de-cas/metaux'
    },
    {
      id: 'foret',
      title: 'Forêt',
      subtitle: 'Ressources forestières mondiales',
      description: 'Déforestation et reforestation : 30% des terres mondiales, -5% depuis 2000, enjeux climatiques.',
      icon: Leaf,
      color: 'emerald',
      keyStats: ['30% terres', '-6,6M ha/an', '65% dans 10 pays'],
      route: '/formation/geopolitique/etudes-de-cas/foret'
    },
    {
      id: 'agroalimentaire',
      title: 'Système agroalimentaire',
      subtitle: 'Agriculture et alimentation mondiales',
      description: 'Production agricole mondiale : 600 millions d\'exploitations, firmes multinationales et sécurité alimentaire.',
      icon: Leaf,
      color: 'yellow',
      keyStats: ['600M exploitations', 'x3,5 exports', '75% Asie'],
      route: '/formation/geopolitique/etudes-de-cas/agroalimentaire'
    },
    {
      id: 'eau',
      title: 'Eau',
      subtitle: 'Ressources hydriques mondiales',
      description: 'Géopolitique de l\'eau : conflits, dessalement, pêche et aquaculture. 220 millions tonnes produits halieutiques.',
      icon: Globe,
      color: 'cyan',
      keyStats: ['220M tonnes pêche', '2% dessalement', '20K usines'],
      route: '/formation/geopolitique/etudes-de-cas/eau'
    },
    {
      id: 'economie',
      title: 'Économie',
      subtitle: 'Firmes transnationales et émergence',
      description: 'FTN, émergence des BRICS+ et hiérarchisation économique mondiale. 90 000 FTN, 30% production mondiale.',
      icon: TrendingUp,
      color: 'indigo',
      keyStats: ['90K FTN', '30% production', 'BRICS 30% PIB'],
      route: '/formation/geopolitique/etudes-de-cas/economie'
    },
    {
      id: 'russie',
      title: 'Russie',
      subtitle: 'Puissance énergétique eurasiatique',
      description: 'Russie post-sanctions : 15% gaz mondial, 10% pétrole, résilience via partenariats asiatiques.',
      icon: Globe,
      color: 'red',
      keyStats: ['15% gaz mondial', '10% pétrole', '150Md$ excédent'],
      route: '/formation/geopolitique/etudes-de-cas/russie'
    },
    {
      id: 'chine',
      title: 'Chine',
      subtitle: 'Puissance émergente globale',
      description: 'Ascension chinoise : PIB x8 en 30 ans, Belt and Road Initiative, 15% exports mondiaux.',
      icon: Building,
      color: 'red',
      keyStats: ['PIB x8', '15% exports', '3000Md$ réserves'],
      route: '/formation/geopolitique/etudes-de-cas/chine'
    },
    {
      id: 'crises',
      title: 'Crises',
      subtitle: 'Crises mondiales contemporaines',
      description: 'Mafias, flux illicites, désindustrialisation : 2000Md$ économie souterraine, défis pour la gouvernance mondiale.',
      icon: AlertTriangle,
      color: 'red',
      keyStats: ['2000Md$ illicite', '1,5% PIB mondial', '500-1000Md$ flux'],
      route: '/formation/geopolitique/etudes-de-cas/crises'
    },
    {
      id: 'urbanisation',
      title: 'Urbanisation',
      subtitle: 'Dynamiques urbaines mondiales',
      description: 'Métropolisation et mégalopolisation : 4,7 milliards d\'urbains, Tokyo 37M habitants, nouvelles géographies.',
      icon: Building,
      color: 'slate',
      keyStats: ['4,7Md urbains', '58% population', 'Tokyo 37M'],
      route: '/formation/geopolitique/etudes-de-cas/urbanisation'
    },
    {
      id: 'puissances',
      title: 'France',
      subtitle: 'Puissance mondiale contemporaine',
      description: 'Analyse de la France : économie (10e rang PIB PPA), hard power militaire, soft power francophone et défis structurels.',
      icon: Globe,
      color: 'blue',
      keyStats: ['2900Md$ PIB', '5e rang FTN', '50Md€ défense'],
      route: '/formation/geopolitique/etudes-de-cas/puissances'
    },
    {
      id: 'developpement-durable',
      title: 'Développement durable',
      subtitle: 'Défis environnementaux globaux',
      description: 'COP, croissance démographique, inégalités : 8,1 milliards d\'habitants, transition écologique mondiale.',
      icon: Leaf,
      color: 'green',
      keyStats: ['8,1Md habitants', 'Chine 30% CO2', 'COP30 2025'],
      route: '/formation/geopolitique/etudes-de-cas/developpement-durable'
    },
    {
      id: 'inegalites',
      title: 'Inégalités sociales',
      subtitle: 'Pauvreté et exclusions mondiales',
      description: 'Analyse des inégalités mondiales : 900 millions en pauvreté absolue, 1 milliard en bidonvilles, disparités sanitaires.',
      icon: Users,
      color: 'red',
      keyStats: ['900M pauvreté', '1Md bidonvilles', '11% population'],
      route: '/formation/geopolitique/etudes-de-cas/inegalites'
    },
    {
      id: 'frontieres',
      title: 'Frontières contemporaines',
      subtitle: 'Géopolitique des frontières',
      description: 'Renaissance des frontières dans la mondialisation : 35 000 km créés depuis 1991, murs, coopérations et enjeux sécuritaires.',
      icon: MapPin,
      color: 'green',
      keyStats: ['35K km créés', '20K km murs', '2000Md$ IDE'],
      route: '/formation/geopolitique/etudes-de-cas/frontieres'
    },
    {
      id: 'criminalite',
      title: 'Criminalité organisée',
      subtitle: 'Mafias et flux illicites',
      description: 'Économie criminelle mondiale : 2000 Mds$ (1,5% PIB), mafias transnationales, trafics et réponses géopolitiques.',
      icon: AlertTriangle,
      color: 'red',
      keyStats: ['2000Md$ économie', '1,5% PIB mondial', '8% exports'],
      route: '/formation/geopolitique/etudes-de-cas/criminalite'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap: { [key: string]: { bg: string; text: string; hover: string; badge: string } } = {
      blue: { bg: 'bg-blue-50', text: 'text-blue-700', hover: 'hover:bg-blue-100', badge: 'bg-blue-100 text-blue-700' },
      green: { bg: 'bg-green-50', text: 'text-green-700', hover: 'hover:bg-green-100', badge: 'bg-green-100 text-green-700' },
      purple: { bg: 'bg-purple-50', text: 'text-purple-700', hover: 'hover:bg-purple-100', badge: 'bg-purple-100 text-purple-700' },
      orange: { bg: 'bg-orange-50', text: 'text-orange-700', hover: 'hover:bg-orange-100', badge: 'bg-orange-100 text-orange-700' },
      gray: { bg: 'bg-gray-50', text: 'text-gray-700', hover: 'hover:bg-gray-100', badge: 'bg-gray-100 text-gray-700' },
      emerald: { bg: 'bg-emerald-50', text: 'text-emerald-700', hover: 'hover:bg-emerald-100', badge: 'bg-emerald-100 text-emerald-700' },
      yellow: { bg: 'bg-yellow-50', text: 'text-yellow-700', hover: 'hover:bg-yellow-100', badge: 'bg-yellow-100 text-yellow-700' },
      cyan: { bg: 'bg-cyan-50', text: 'text-cyan-700', hover: 'hover:bg-cyan-100', badge: 'bg-cyan-100 text-cyan-700' },
      indigo: { bg: 'bg-indigo-50', text: 'text-indigo-700', hover: 'hover:bg-indigo-100', badge: 'bg-indigo-100 text-indigo-700' },
      red: { bg: 'bg-red-50', text: 'text-red-700', hover: 'hover:bg-red-100', badge: 'bg-red-100 text-red-700' },
      slate: { bg: 'bg-slate-50', text: 'text-slate-700', hover: 'hover:bg-slate-100', badge: 'bg-slate-100 text-slate-700' }
    };
    return colorMap[color] || colorMap.gray;
  };

  return (
    <div className="min-h-screen bg-white">

      {/* Sticky Breadcrumb */}
      <nav className="sticky top-0 z-50 bg-white border-b border-border/40 relative z-10">
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
            <Link to="/formation/geopolitique" className="hover:text-foreground transition-colors">
              Formation Géopolitique
            </Link>
            <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
            <span className="text-foreground font-medium">Thèmes centraux essentiels</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-8">

        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="h-8 w-8 text-gray-600" />
            <h1 className="text-4xl font-bold text-gray-900">
              Thèmes centraux essentiels
            </h1>
          </div>
          <p className="text-lg text-gray-600 max-w-4xl">
            Maîtrisez les études de cas incontournables pour les concours de géopolitique. 
            Données actualisées 2024-2025, chiffres clés et analyses géopolitiques structurées.
          </p>
        </div>

        {/* Case Studies Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {caseStudies.map((study) => {
            const colors = getColorClasses(study.color);
            const IconComponent = study.icon;
            
            return (
              <Link 
                key={study.id} 
                to={study.route}
                className="block"
              >
                <Card className={`h-full ${colors.bg} border border-gray-200 ${colors.hover} transition-all duration-200 hover:shadow-md`}>
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <div className={`p-2 rounded-lg ${colors.badge}`}>
                        <IconComponent className="h-5 w-5" />
                      </div>
                      <div className="flex-1">
                        <CardTitle className={`text-lg ${colors.text} font-semibold`}>
                          {study.title}
                        </CardTitle>
                        <p className="text-sm text-gray-600 mt-1">
                          {study.subtitle}
                        </p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-gray-700 mb-4 leading-relaxed">
                      {study.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1">
                      {study.keyStats.map((stat, index) => (
                        <Badge 
                          key={index} 
                          variant="secondary" 
                          className="text-xs bg-white border border-gray-300 text-gray-700"
                        >
                          {stat}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Information note */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card className="border border-gray-200 bg-white">
            <CardContent className="p-6">
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-gray-600 mt-0.5" />
                <div>
                  <h3 className="font-semibold text-gray-900 mb-2">
                    Contenu structuré pour les concours
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    Chaque thème central présente les données essentielles, les enjeux géopolitiques, 
                    et les exemples concrets à maîtriser. Sources actualisées 2024-2025 avec 
                    références d'experts (L. Carroué, M. Stock, H. Védrine, etc.).
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default EtudesDeCasPage;