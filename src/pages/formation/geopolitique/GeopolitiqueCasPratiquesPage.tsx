import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Home, ChevronRight, FileText, Globe, Zap, Leaf, TrendingUp, AlertTriangle, Building, Coins, MapPin, Cpu, Ship, Shield, DollarSign, Snowflake, Users } from 'lucide-react';

const GeopolitiqueCasPratiquesPage = () => {
    const caseStudies = [
        {
            id: 'foret-amazonienne',
            title: 'Forêt Amazonienne',
            subtitle: '"Poumon de la planète" et enjeux',
            description: '"Poumon de la planète" face à la déforestation accélérée. 20% de surface déboisée, enjeux climatiques majeurs.',
            icon: TreePine,
            color: 'emerald',
            keyStats: ['20% surface déboisée', '10-15% émissions CO2', 'COP30 2025'],
            route: '/formation/geopolitique/etudes-de-cas/foret-amazonienne'
        },
        {
            id: 'antarctique',
            title: 'Antarctique',
            subtitle: 'Ressources et tensions',
            description: 'Ressources potentielles et traité de 1959. Tensions croissantes avec expansion chinoise et russe.',
            icon: Snowflake,
            color: 'blue',
            keyStats: ['90% eau douce', '14M km²', 'Traité 1959'],
            route: '/formation/geopolitique/etudes-de-cas/antarctique'
        },
        {
            id: 'canada',
            title: 'Canada - Guerre éco',
            subtitle: 'Ingérences et résilience',
            description: 'Ingérences chinoises et tariffs américains. Sécurité économique exposant 10-20% du PIB.',
            icon: Shield,
            color: 'red',
            keyStats: ['10-20% PIB exposé', 'Stratégie Indo-Pacifique', 'Tariffs US'],
            route: '/formation/geopolitique/etudes-de-cas/canada'
        },
        {
            id: 'dubai',
            title: 'Dubai / The Line',
            subtitle: 'Vision 2030 et diversification',
            description: 'Vision 2030 et NEOM. Diversification économique post-pétrole, hubs touristiques et logistiques.',
            icon: Building,
            color: 'yellow',
            keyStats: ['150M visiteurs 2030', '50% énergies renouv.', 'PIF 1000Md$'],
            route: '/formation/geopolitique/etudes-de-cas/dubai'
        },
        {
            id: 'suez',
            title: 'Canal de Suez',
            subtitle: 'Chokepoint maritime vital',
            description: 'Chokepoint vital pour 12% du commerce mondial. Sécurité maritime et enjeux historiques.',
            icon: Ship,
            color: 'blue',
            keyStats: ['12% commerce mondial', '50K navires/an', 'Sécurité maritime'],
            route: '/formation/geopolitique/etudes-de-cas/suez'
        },
        {
            id: 'tsmc',
            title: 'TSMC - Bouclier de Silicium',
            subtitle: 'Géopolitique des semi-conducteurs',
            description: 'L\'entreprise la plus indispensable au monde. 90% des puces avancées, "Silicon Shield" protégeant Taïwan, enjeux de sécurité nationale US et Chine.',
            icon: Cpu,
            color: 'red',
            keyStats: ['90% puces avancées', '60% fonderie mondiale', 'Usines Arizona'],
            route: '/formation/geopolitique/etudes-de-cas/tsmc'
        },
        {
            id: 'nvidia',
            title: 'NVIDIA - IA',
            subtitle: 'Guerre technologique',
            description: 'Leader en puces IA. Guerre technologique US-Chine, 80% du marché des GPU IA.',
            icon: Cpu,
            color: 'purple',
            keyStats: ['4000Md$ market cap', '80% marché GPU', 'Sanctions US'],
            route: '/formation/geopolitique/etudes-de-cas/nvidia'
        },
        {
            id: 'guerre-economique',
            title: 'Guerre économique',
            subtitle: 'Sanctions et stratégies',
            description: 'Sanctions, tariffs et chokepoints. Déstabilisation des chaînes d\'approvisionnement globales.',
            icon: DollarSign,
            color: 'red',
            keyStats: ['Tariffs Trump', 'Sanctions Russie', 'Déstabilisation'],
            route: '/formation/geopolitique/etudes-de-cas/guerre-economique'
        },
        {
            id: 'brics',
            title: 'BRICS',
            subtitle: 'Multipolarité émergente',
            description: '10 membres, 55% population mondiale. Multipolarité, dé-dollarisation et contrepoids au G7.',
            icon: Globe,
            color: 'orange',
            keyStats: ['10 membres', '55% population', '46% PIB PPA'],
            route: '/formation/geopolitique/etudes-de-cas/brics'
        }
    ];

    // Helper component specifically for TreePine icon to avoid import error if lucide-react version mismatch
    function TreePine(props: any) {
        return (
            <svg
                {...props}
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
            >
                <path d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7l6.7-7.3a1 1 0 0 1 1.4 0l6.7 7.3a1 1 0 0 1-.7 1.7H17Z" />
            </svg>
        )
    }

    const getColorClasses = (color: string) => {
        const colorMap: { [key: string]: { bg: string; text: string; hover: string; badge: string; border: string } } = {
            emerald: { bg: 'bg-emerald-50', text: 'text-emerald-700', hover: 'hover:bg-emerald-100', badge: 'bg-emerald-100 text-emerald-700', border: 'border-emerald-200' },
            blue: { bg: 'bg-blue-50', text: 'text-blue-700', hover: 'hover:bg-blue-100', badge: 'bg-blue-100 text-blue-700', border: 'border-blue-200' },
            red: { bg: 'bg-red-50', text: 'text-red-700', hover: 'hover:bg-red-100', badge: 'bg-red-100 text-red-700', border: 'border-red-200' },
            yellow: { bg: 'bg-yellow-50', text: 'text-yellow-700', hover: 'hover:bg-yellow-100', badge: 'bg-yellow-100 text-yellow-700', border: 'border-yellow-200' },
            purple: { bg: 'bg-purple-50', text: 'text-purple-700', hover: 'hover:bg-purple-100', badge: 'bg-purple-100 text-purple-700', border: 'border-purple-200' },
            orange: { bg: 'bg-orange-50', text: 'text-orange-700', hover: 'hover:bg-orange-100', badge: 'bg-orange-100 text-orange-700', border: 'border-orange-200' },
            gray: { bg: 'bg-gray-50', text: 'text-gray-700', hover: 'hover:bg-gray-100', badge: 'bg-gray-100 text-gray-700', border: 'border-gray-200' },
        };
        return colorMap[color] || colorMap.gray;
    };

    return (
        <div className="min-h-screen bg-gray-50">

            {/* Sticky Breadcrumb */}
            <nav className="sticky top-0 z-50 bg-white border-b border-border/40 w-full mb-8">
                <div className="container mx-auto px-4 py-2">
                    <div className="flex items-center text-xs text-muted-foreground">
                        <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
                            <Home className="h-3 w-3" />
                            <span>Accueil</span>
                        </Link>
                        <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
                        <Link to="/formation/geopolitique" className="hover:text-foreground transition-colors">
                            Formation Géopolitique
                        </Link>
                        <ChevronRight className="h-3 w-3 text-muted-foreground/50 mx-1" />
                        <span className="text-foreground font-medium">Cas Pratiques & Actualités</span>
                    </div>
                </div>
            </nav>

            <div className="container mx-auto px-4 pb-12">
                {/* Header */}
                <div className="mb-10 text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center justify-center p-3 bg-blue-100 rounded-2xl mb-4">
                        <FileText className="h-8 w-8 text-blue-600" />
                    </div>
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">
                        Études de Cas & Actualités
                    </h1>
                    <p className="text-lg text-gray-600">
                        Analyses détaillées de situations géopolitiques concrètes, d'entreprises stratégiques et de zones de tension actuelles. Des exemples précis pour enrichir vos copies.
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
                                className="block h-full"
                            >
                                <Card className={`h-full border ${colors.border} bg-white hover:shadow-lg hover:scale-[1.02] transition-all duration-300 group`}>
                                    <CardHeader className={`${colors.bg} border-b ${colors.border} pb-4`}>
                                        <div className="flex justify-between items-start">
                                            <div className={`p-2 rounded-lg bg-white bg-opacity-60`}>
                                                <IconComponent className={`h-6 w-6 ${colors.text}`} />
                                            </div>
                                            <Badge variant="outline" className="bg-white text-xs font-normal text-gray-500 border-gray-200">
                                                Cas Pratique
                                            </Badge>
                                        </div>
                                        <CardTitle className={`mt-3 text-xl ${colors.text} font-bold`}>
                                            {study.title}
                                        </CardTitle>
                                        <p className="text-sm text-gray-600 font-medium">
                                            {study.subtitle}
                                        </p>
                                    </CardHeader>
                                    <CardContent className="pt-4">
                                        <p className="text-sm text-gray-700 mb-5 leading-relaxed line-clamp-3">
                                            {study.description}
                                        </p>

                                        <div className="flex flex-wrap gap-2 mt-auto">
                                            {study.keyStats.map((stat, index) => (
                                                <span
                                                    key={index}
                                                    className="text-[10px] px-2 py-1 bg-gray-100 text-gray-600 rounded-md font-medium border border-gray-100"
                                                >
                                                    {stat}
                                                </span>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default GeopolitiqueCasPratiquesPage;
