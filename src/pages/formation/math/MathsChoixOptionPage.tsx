import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Home, BookOpen, Calculator, BookMarked, Award, TrendingUp, Zap, GraduationCap, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';

const MathsChoixOptionPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const checkUserPreference = async () => {
      try {
        const { data: { user } } = await supabase.auth.getUser();
        if (user) {
          const { data: preference } = await (supabase as any)
            .from('user_preferences')
            .select('math_option, math_year')
            .eq('user_id', user.id)
            .single();

          if (preference?.math_option && preference?.math_year) {
            const route = `/formation/maths-${preference.math_year}-${preference.math_option}`;
            navigate(route);
          }
        }
      } catch (error) {
        console.error('Error checking user preference:', error);
      }
    };

    checkUserPreference();
  }, [navigate]);

  const allModules = [
    {
      id: 'premiere-appliquees',
      year: 'premiere',
      type: 'appliquees',
      title: 'Maths Appliquées',
      subtitle: '1ère année - Voie pratique',
      description: 'Formation axée sur les applications pratiques, les méthodes de résolution et les cas concrets.',
      icon: Calculator,
      features: [
        'Applications pratiques et modélisation',
        'Méthodes de résolution pas à pas',
        'Cas concrets et business cases'
      ]
    },
    {
      id: 'premiere-approfondies',
      year: 'premiere',
      type: 'approfondies',
      title: 'Maths Approfondies',
      subtitle: '1ère année - Voie théorique',
      description: 'Programme complet pour la voie approfondie avec focus sur les démonstrations et concepts théoriques.',
      icon: BookOpen,
      features: [
        'Démonstrations rigoureuses',
        'Concepts théoriques avancés',
        'Préparation intensive aux concours'
      ]
    },
    {
      id: 'deuxieme-appliquees',
      year: 'deuxieme',
      type: 'appliquees',
      title: 'Maths Appliquées',
      subtitle: '2ème année - Voie avancée',
      description: 'Seconde année avec focus sur les applications industrielles et la résolution de problèmes complexes.',
      icon: TrendingUp,
      features: [
        'Applications industrielles',
        'Problèmes complexes et Big Data',
        'Outils informatiques avancés'
      ]
    },
    {
      id: 'deuxieme-approfondies',
      year: 'deuxieme',
      type: 'approfondies',
      title: 'Maths Approfondies',
      subtitle: '2ème année - Voie experte',
      description: 'Formation approfondie avec concepts mathématiques complexes et préparation intensive aux Parisiennes.',
      icon: Award,
      features: [
        'Concepts abstraits avancés',
        'Préparation concours niveau expert',
        'Sujets types Parisiennes'
      ]
    }
  ];

  const additionalModules = [
    {
      title: 'Terminale → Prépa',
      description: 'Réussir la transition : méthodes de travail, organisation et points clés à anticiper.',
      icon: GraduationCap,
      route: '/formation/math/terminale-vers-prepa',
      badge: 'Transition'
    },
    {
      title: 'Première → Deuxième année',
      description: 'Transition vers l\'ECG2 : révisions d\'été, objectifs, planning et ressources clés.',
      icon: ArrowRight,
      route: '/formation/math/premiere-vers-deuxieme',
      badge: 'ECG2'
    },
    {
      title: 'Méthodologie',
      description: 'Stratégies d\'apprentissage, gestion du temps et méthodes de résolution pour les concours.',
      icon: BookMarked,
      route: '/formation/maths-methodologie',
      badge: 'Conseils'
    }
  ];

  return (
    <div className="min-h-screen bg-[#F8FAFF]">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-muted-foreground">
            <Link to="/" className="flex items-center gap-1 hover:text-foreground transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <span className="mx-1 text-muted-foreground/50">›</span>
            <Link to="/formations" className="hover:text-foreground transition-colors">Toutes les formations</Link>
            <span className="mx-1 text-muted-foreground/50">›</span>
            <span className="text-blue-600 font-medium">Choix parcours Maths</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-12 px-4">
        {/* Header */}
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 tracking-tight">
            Votre parcours en <span className="text-blue-600">Mathématiques</span>
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Une formation d'excellence adaptée à votre niveau et à vos ambitions.
            Sélectionnez votre voie pour accéder aux ressources.
          </p>
        </div>

        {/* Modules Principaux */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto mb-20">
          {allModules.map((module) => {
            const route = `/formation/maths-${module.year}-${module.type}`;
            return (
              <Link key={module.id} to={route} className="group block h-full">
                <div className="h-full bg-white rounded-2xl p-8 border border-gray-100 shadow-sm hover:shadow-xl hover:border-blue-100 transition-all duration-300 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-bl-full -mr-8 -mt-8 opacity-50 group-hover:scale-110 transition-transform duration-500"></div>

                  <div className="flex items-start justify-between mb-6 relative z-10">
                    <div className="w-14 h-14 bg-blue-50 rounded-xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                      <module.icon className="h-7 w-7" />
                    </div>
                    <Badge variant="secondary" className="bg-gray-50 text-gray-600 border-gray-100 group-hover:bg-blue-50 group-hover:text-blue-700 transition-colors">
                      {module.year === 'premiere' ? '1ère Année' : '2ème Année'}
                    </Badge>
                  </div>

                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">
                      {module.title}
                    </h3>
                    <p className="text-sm font-medium text-blue-600 mb-4 uppercase tracking-wide">
                      {module.subtitle}
                    </p>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {module.description}
                    </p>

                    <div className="space-y-3 mb-8 bg-gray-50/50 rounded-xl p-5 border border-gray-100/50">
                      {module.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start gap-3">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mt-2 shrink-0"></div>
                          <span className="text-sm text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>

                    <Button className="w-full bg-white text-blue-600 border border-blue-200 hover:bg-blue-50 hover:border-blue-300 group-hover:bg-blue-600 group-hover:text-white group-hover:border-transparent transition-all duration-300 font-medium h-12 rounded-xl shadow-sm">
                      Accéder au cours
                      <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Modules Complémentaires */}
        <div className="mb-20">
          <div className="flex items-center gap-4 mb-10 max-w-6xl mx-auto px-4">
            <h2 className="text-2xl font-bold text-gray-900">Ressources & Transition</h2>
            <div className="h-px bg-gray-100 flex-1"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {additionalModules.map((module, index) => (
              <Link key={index} to={module.route} className="group block h-full">
                <div className="h-full bg-white rounded-xl p-6 border border-gray-100 shadow-sm hover:shadow-lg hover:border-blue-100 transition-all duration-300">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 bg-gray-50 rounded-lg flex items-center justify-center text-gray-500 group-hover:bg-blue-50 group-hover:text-blue-600 transition-colors">
                      <module.icon className="h-5 w-5" />
                    </div>
                    <Badge variant="outline" className="text-xs border-gray-200 text-gray-500 group-hover:border-blue-200 group-hover:text-blue-600 transition-colors">
                      {module.badge}
                    </Badge>
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">
                    {module.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 line-clamp-3">
                    {module.description}
                  </p>
                  <div className="flex items-center text-blue-600 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0 duration-300">
                    Découvrir <ArrowRight className="ml-1 h-3 w-3" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>

        {/* Générateur IA */}
        <div className="max-w-6xl mx-auto">
          <Link to="/generator/math" className="group block">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-3xl p-8 md:p-12 text-white shadow-xl shadow-blue-900/10 hover:shadow-2xl hover:scale-[1.01] transition-all duration-300 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none"></div>
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl -ml-10 -mb-10 pointer-events-none"></div>

              <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 md:gap-12 text-center md:text-left">
                <div className="shrink-0 bg-white/20 p-6 rounded-2xl backdrop-blur-sm border border-white/20">
                  <Zap className="h-10 w-10 text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex items-center justify-center md:justify-start gap-3 mb-3">
                    <h2 className="text-2xl md:text-3xl font-bold">Assistant IA Mathématiques</h2>
                    <Badge className="bg-white/20 hover:bg-white/30 text-white border-0 backdrop-blur-md">BETA</Badge>
                  </div>
                  <p className="text-blue-50 text-lg mb-6 max-w-2xl">
                    Posez vos questions sur n'importe quel théorème ou exercice.
                    Obtenez des démonstrations détaillées, des formules LaTeX et des explications pas à pas instantanément.
                  </p>

                  <div className="flex flex-wrap justify-center md:justify-start gap-3">
                    <span className="flex items-center text-sm bg-black/20 rounded-full px-3 py-1 border border-white/10">
                      <ChevronRight className="h-3 w-3 mr-1" /> Programme complet 1ère/2ème année
                    </span>
                    <span className="flex items-center text-sm bg-black/20 rounded-full px-3 py-1 border border-white/10">
                      <ChevronRight className="h-3 w-3 mr-1" /> Formules LaTeX
                    </span>
                  </div>
                </div>

                <div className="shrink-0">
                  <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 border-0 font-bold h-14 px-8 rounded-xl shadow-lg">
                    Essayer le générateur
                    <ChevronRight className="ml-2 h-5 w-5" />
                  </Button>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MathsChoixOptionPage;