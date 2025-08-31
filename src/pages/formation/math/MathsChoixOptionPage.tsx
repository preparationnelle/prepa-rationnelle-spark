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
      color: 'bg-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
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
      color: 'bg-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
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
      color: 'bg-blue-600',
      route: '/formation/math/terminale-vers-prepa',
      buttonText: 'Découvrir les conseils',
      badge: 'Transition'
    },
    {
      title: 'Première année → Deuxième année',
      description: 'Transition vers l\'ECG2: révisions d\'été, objectifs de rentrée, planning type et ressources clés pour démarrer fort.',
      icon: BookOpen,
      color: 'bg-blue-600',
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
    <div className="min-h-screen bg-white">
      {/* Fil d'Ariane */}
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
            <span className="text-foreground font-medium">Choix parcours Maths</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-gray-800">Choisissez votre parcours en mathématiques</h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Sélectionnez votre formation selon votre année et votre approche préférée.
          </p>
        </div>

        {/* Les 4 modules principaux - Style comme la page d'accueil */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-16">
          {allModules.map((module) => {
            const isAppliquees = module.type === 'appliquees';
            const iconBgColor = isAppliquees ? 'bg-blue-100' : 'bg-orange-100';
            const iconColor = isAppliquees ? 'text-blue-600' : 'text-orange-600';
            const borderHover = isAppliquees ? 'hover:border-blue-200' : 'hover:border-orange-200';
            const featureColor = isAppliquees ? 'text-blue-600' : 'text-orange-600';

            return (
              <Link
                key={module.id}
                to="#"
                onClick={(e) => {
                  e.preventDefault();
                  handleOptionChoice(module.year as 'premiere' | 'deuxieme', module.type as 'approfondies' | 'appliquees');
                }}
                className={`bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent ${borderHover} flex flex-col items-center text-center group`}
              >
                <div className={`w-16 h-16 ${iconBgColor} rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <module.icon className={`h-8 w-8 ${iconColor}`} />
                </div>
                <h3 className="font-semibold text-xl mb-2">{module.title}</h3>
                <p className="text-sm text-gray-600 mb-3">{module.description}</p>
                <div className="space-y-1 text-xs text-left w-full mb-4">
                  {module.features.slice(0, 3).map((feature, index) => (
                    <div key={index} className={`flex items-center ${featureColor}`}>
                      <span className="mr-2">✓</span>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className={`w-full ${isAppliquees ? 'bg-blue-600 hover:bg-blue-700' : 'bg-orange-600 hover:bg-orange-700'} text-white font-medium transition-colors`}>
                  Accéder à la formation
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
            );
          })}
        </div>

        {/* Modules complémentaires - Style comme la page d'accueil */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">Modules complémentaires</h2>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {additionalModules.map((module, index) => {
              const isBlue = module.color === 'bg-blue-600';
              const iconBgColor = isBlue ? 'bg-blue-100' : 'bg-orange-100';
              const iconColor = isBlue ? 'text-blue-600' : 'text-orange-600';
              const borderHover = isBlue ? 'hover:border-blue-200' : 'hover:border-orange-200';
              const badgeColor = isBlue ? 'text-blue-700 border-blue-200 bg-blue-50' : 'text-orange-700 border-orange-200 bg-orange-50';

              return (
                <div
                  key={index}
                  className={`bg-white rounded-xl p-6 shadow-md hover:shadow-2xl hover:scale-105 hover:-translate-y-1 transition-all duration-300 border border-transparent ${borderHover} flex flex-col items-center text-center group cursor-pointer`}
                  onClick={() => navigate(module.route)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && navigate(module.route)}
                >
                  <div className="flex items-center justify-between w-full mb-4">
                    <div className={`w-16 h-16 ${iconBgColor} rounded-full flex items-center justify-center group-hover:scale-110 transition-transform`}>
                      <module.icon className={`h-8 w-8 ${iconColor}`} />
                    </div>
                    <Badge variant="outline" className={`${badgeColor} text-xs px-3 py-1`}>
                      {module.badge}
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-xl mb-3 text-center">{module.title}</h3>
                  <p className="text-sm text-gray-600 mb-4 text-center">{module.description}</p>
                  <Button className={`w-full ${isBlue ? 'bg-blue-600 hover:bg-blue-700' : 'bg-orange-600 hover:bg-orange-700'} text-white font-medium transition-colors`}>
                    {module.buttonText}
                    <ChevronRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              );
            })}
          </div>
        </div>


      </div>
    </div>
  );
};

export default MathsChoixOptionPage; 