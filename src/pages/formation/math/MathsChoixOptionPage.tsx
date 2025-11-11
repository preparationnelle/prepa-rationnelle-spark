import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Home, BookOpen, Calculator, BookMarked, Award, TrendingUp } from 'lucide-react';
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

  const handleOptionChoice = (year: 'premiere' | 'deuxieme', option: 'approfondies' | 'appliquees') => {
    const route = `/formation/maths-${year}-${option}`;
    // Naviguer immédiatement
    navigate(route);
    // Enregistrer la préférence en base en arrière-plan
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        (supabase as any)
          .from('user_preferences')
          .upsert({
            user_id: user.id,
            math_option: option,
            math_year: year,
            updated_at: new Date().toISOString()
          });
      }
    });
  };

  // Tous les modules regroupés pour une disposition en grille 2x2
  const allModules = [
    {
      id: 'premiere-appliquees',
      year: 'premiere',
      type: 'appliquees',
      title: 'Maths Appliquées - 1ère année',
      subtitle: 'Voie pratique',
      description: 'Formation axée sur les applications pratiques des mathématiques, avec un accent sur les méthodes de résolution et les cas concrets.',
      icon: Calculator,
      color: 'bg-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      buttonColor: 'bg-orange-600 hover:bg-orange-700',
      features: [
        'Applications pratiques',
        'Méthodes de résolution',
        'Cas concrets',
        'Préparation ECG appliquée'
      ]
    },
    {
      id: 'premiere-approfondies',
      year: 'premiere',
      type: 'approfondies',
      title: 'Maths Approfondies - 1ère année',
      subtitle: 'Voie théorique',
      description: 'Programme complet pour la voie approfondie en mathématiques, avec un focus sur les démonstrations et les concepts théoriques.',
      icon: BookOpen,
      color: 'bg-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      buttonColor: 'bg-orange-600 hover:bg-orange-700',
      features: [
        'Démonstrations rigoureuses',
        'Concepts théoriques avancés',
        'Exercices de concours',
        'Préparation ECG approfondie'
      ]
    },
    {
      id: 'deuxieme-appliquees',
      year: 'deuxieme',
      type: 'appliquees',
      title: 'Maths Appliquées - 2ème année',
      subtitle: 'Voie appliquée avancée',
      description: 'Deuxième année appliquée avec focus sur les applications industrielles et résolution de problèmes complexes.',
      icon: TrendingUp,
      color: 'bg-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      buttonColor: 'bg-orange-600 hover:bg-orange-700',
      features: [
        'Applications industrielles',
        'Problèmes complexes',
        'Outils informatiques avancés',
        'Préparation ECG appliquée'
      ]
    },
    {
      id: 'deuxieme-approfondies',
      year: 'deuxieme',
      type: 'approfondies',
      title: 'Maths Approfondies - 2ème année',
      subtitle: 'Voie théorique avancée',
      description: 'Formation approfondie de deuxième année avec concepts mathématiques complexes et préparation intensive aux concours ECG.',
      icon: Award,
      color: 'bg-orange-600',
      bgColor: 'bg-orange-50',
      borderColor: 'border-orange-200',
      buttonColor: 'bg-orange-600 hover:bg-orange-700',
      features: [
        'Concepts avancés',
        'Préparation concours intensive',
        'Démonstrations complexes',
        'ECG niveau expert'
      ]
    }
  ];

  const additionalModules = [
    {
      title: 'Terminale → Prépa',
      description: 'Conseils et ressources pour réussir la transition entre la Terminale et la prépa ECG : méthodes de travail, organisation, et points clés à anticiper en mathématiques.',
      icon: Calculator,
      color: 'bg-orange-600',
      route: '/formation/math/terminale-vers-prepa',
      buttonText: 'Découvrir les conseils',
      badge: 'Transition'
    },
    {
      title: 'Première année → Deuxième année',
      description: 'Transition vers l\'ECG2: révisions d\'été, objectifs de rentrée, planning type et ressources clés pour démarrer fort.',
      icon: BookOpen,
      color: 'bg-orange-600',
      route: '/formation/math/premiere-vers-deuxieme',
      buttonText: 'Accéder au module',
      badge: 'ECG2'
    },
    {
      title: 'Méthodologie',
      description: 'Articles et conseils pour optimiser votre préparation aux concours, avec des stratégies d\'apprentissage et des méthodes de résolution.',
      icon: BookMarked,
      color: 'bg-orange-600',
      route: '/formation/maths-methodologie',
      buttonText: 'Accéder à la méthodologie',
      badge: 'Conseils'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Floating bubbles - Thème mathématiques en orange */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-10 animate-pulse -z-10"></div>
      <div className="absolute bottom-20 right-10 w-28 h-28 bg-orange-300 rounded-full opacity-8 animate-pulse-slow -z-10"></div>
      <div className="absolute top-40 right-20 w-48 h-48 bg-orange-100 rounded-full opacity-6 animate-pulse-slow -z-10"></div>
      <div className="absolute bottom-40 left-20 w-56 h-56 bg-orange-200 rounded-full opacity-5 animate-pulse -z-10"></div>
      <div className="absolute top-1/4 left-1/3 w-64 h-64 bg-orange-50 rounded-full opacity-8 animate-pulse-slow -z-10"></div>
      <div className="absolute top-3/4 right-1/4 w-40 h-40 bg-orange-300 rounded-full opacity-6 animate-pulse -z-10"></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-orange-100 rounded-full opacity-8 animate-pulse-slow -z-10"></div>
      <div className="absolute bottom-1/3 right-5 w-36 h-36 bg-orange-200 rounded-full opacity-7 animate-pulse -z-10"></div>

      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border/40 relative z-10">
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
            <span className="text-foreground font-medium">Choix parcours Maths</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header avec style orange pour mathématiques */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="text-gray-800">Choisissez votre parcours en </span>
            <span className="text-orange-600">mathématiques</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sélectionnez votre formation selon votre année et votre approche préférée.
          </p>
        </div>

        {/* Les 4 modules principaux - Style comme la page d'accueil */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {allModules.map((module) => {
            const isAppliquees = module.type === 'appliquees';
            // Mathématiques en orange, autres matières en bleu
            const iconBgColor = 'bg-orange-100';
            const iconColor = 'text-orange-600';
            const featureColor = 'text-orange-600';

            const route = `/formation/maths-${module.year}-${module.type}`;
            const bgColor = 'bg-orange-50';
            const borderColor = 'border-orange-200';
            const shadowColor = 'shadow-orange-100/30';

            return (
              <Link
                key={module.id}
                to={route}
                className="block h-full"
              >
                <div className={`h-full bg-white shadow-lg ${shadowColor} hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-orange-400 hover:bg-orange-50/50 ${bgColor} rounded-2xl p-6 relative overflow-hidden group cursor-pointer`}>
                  <div className={`w-16 h-16 ${iconBgColor} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform relative z-10`}>
                  <module.icon className={`h-8 w-8 ${iconColor}`} />
                </div>
                  <h3 className="font-semibold text-xl mb-2 relative z-10">
                    {module.title.includes(' - ') ? (
                      <>
                        {module.title.split(' - ')[0]}<br />
                        {module.title.split(' - ')[1]}
                      </>
                    ) : (
                      module.title
                    )}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3 relative z-10">{module.description}</p>
                  <div className="space-y-1 text-xs text-left w-full mb-4 relative z-10">
                    {module.features.slice(0, 3).map((feature, index) => (
                      <div key={index} className={`flex items-center ${featureColor}`}>
                        <span className="mr-2">✓</span>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center relative z-10">
                    <Button className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform">
                      Accéder à la formation
                      <ChevronRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Modules complémentaires - Style comme la page d'accueil */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Modules complémentaires</h2>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {additionalModules.map((module, index) => {
              const iconBgColor = 'bg-orange-100';
              const iconColor = 'text-orange-600';
              const badgeColor = 'text-orange-700 border-orange-200 bg-orange-50';
              const bgColor = 'bg-orange-50';
              const borderColor = 'border-orange-200';
              const shadowColor = 'shadow-orange-100/30';

              return (
                <Link
                  key={index}
                  to={module.route}
                  className="block"
                >
                  <div className={`bg-white shadow-lg ${shadowColor} hover:shadow-2xl hover:scale-105 hover:-translate-y-2 transition-all duration-500 border border-gray-100 hover:border-orange-400 hover:bg-orange-50/50 ${bgColor} rounded-2xl p-6 relative overflow-hidden group cursor-pointer`}>
                    <div className="flex items-center justify-between w-full mb-4 relative z-10">
                      <div className={`w-16 h-16 ${iconBgColor} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform relative z-10`}>
                        <module.icon className={`h-8 w-8 ${iconColor}`} />
                      </div>
                      <Badge variant="outline" className={`${badgeColor} text-xs px-3 py-1 relative z-10`}>
                        {module.badge}
                      </Badge>
                    </div>
                    <h3 className="font-semibold text-xl mb-3 text-center relative z-10">{module.title}</h3>
                    <p className="text-sm text-gray-600 mb-4 text-center relative z-10">{module.description}</p>
                    <div className="flex justify-center relative z-10">
                      <Button className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 transform">
                        {module.buttonText}
                        <ChevronRight className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>


      </div>
    </div>
  );
};

export default MathsChoixOptionPage; 