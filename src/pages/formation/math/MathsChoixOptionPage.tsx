import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Home, BookOpen, Calculator, BookMarked, Target } from 'lucide-react';
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
            .select('math_option')
            .eq('user_id', user.id)
            .single();

          if (preference?.math_option) {
            navigate(preference.math_option === 'approfondies'
              ? '/formation/maths-approfondies'
              : '/formation/maths-appliquees');
          }
        }
      } catch (error) {
        console.error('Error checking user preference:', error);
      }
    };

    checkUserPreference();
  }, [navigate]);

  const handleOptionChoice = (option: 'approfondies' | 'appliquees') => {
    // Naviguer immédiatement
    navigate(option === 'approfondies'
      ? '/formation/maths-approfondies'
      : '/formation/maths-appliquees');
    // Enregistrer la préférence en base en arrière-plan
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (user) {
        (supabase as any)
          .from('user_preferences')
          .upsert({
            user_id: user.id,
            math_option: option,
            updated_at: new Date().toISOString()
          });
      }
    });
  };

  const mathOptions = [
    {
      id: 'approfondies',
      title: 'Maths Approfondies',
      description: 'Programme complet pour la voie approfondie en mathématiques, avec un focus sur les démonstrations et les concepts théoriques.',
      icon: BookOpen,
      color: 'bg-blue-600',
      bgColor: 'bg-blue-50',
      borderColor: 'border-blue-200',
      buttonColor: 'bg-blue-600 hover:bg-blue-700',
      features: [
        'Démonstrations rigoureuses',
        'Concepts théoriques avancés',
        'Exercices de concours',
        'Préparation ECG approfondie'
      ]
    },
    {
      id: 'appliquees',
      title: 'Maths Appliquées',
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
            <span className="text-foreground font-medium">Choix option Maths</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-4">Choisissez votre voie en mathématiques</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-6">
            Sélectionnez l'option qui correspond à votre parcours en prépa ECG.
            Ce choix sera mémorisé pour vos prochaines visites.
          </p>
          <Badge variant="outline" className="text-blue-600 border-blue-200 bg-blue-50/50">
            Prépa ECG - Mathématiques
          </Badge>
        </div>

        {/* Main Options */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto mb-12">
          {mathOptions.map((option) => (
            <Link
              key={option.id}
              to="#"
              onClick={(e) => {
                e.preventDefault();
                handleOptionChoice(option.id as 'approfondies' | 'appliquees');
              }}
              className={`bg-white rounded-xl p-8 shadow-md hover:shadow-xl transition-all duration-300 group block border-2 ${option.borderColor} hover:border-orange-200`}
            >
              <div className={`w-20 h-20 ${option.color} rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                <option.icon className="h-10 w-10 text-white" />
              </div>
              <h3 className="font-semibold text-2xl mb-4 text-center">{option.title}</h3>
              <p className="text-gray-600 mb-6 text-center leading-relaxed text-lg">{option.description}</p>

              <div className="grid grid-cols-2 gap-3 mb-6">
                {option.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${option.color.replace('bg-', 'bg-')}`}></div>
                    <span className="text-sm text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              <Button className={`w-full ${option.buttonColor} text-white font-medium transition-all duration-300 group-hover:scale-105 shadow-md hover:shadow-lg`}>
                <option.icon className="mr-2 h-4 w-4" />
                Accéder à la formation
              </Button>
            </Link>
          ))}
        </div>

        {/* Additional Modules */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8">Modules complémentaires</h2>
          <div className="grid gap-6 max-w-4xl mx-auto">
            {additionalModules.map((module, index) => (
              <Card
                key={index}
                className={`bg-gradient-to-r ${module.color === 'bg-blue-600' ? 'from-blue-50 to-indigo-50' : 'from-orange-50 to-red-50'} border-2 ${module.color === 'bg-blue-600' ? 'border-blue-200' : 'border-orange-200'} shadow-lg cursor-pointer hover:shadow-xl transition-all duration-300`}
                onClick={() => navigate(module.route)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === 'Enter' && navigate(module.route)}
              >
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className={`p-4 rounded-xl ${module.color} text-white shadow-lg`}>
                      <module.icon className="h-8 w-8" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <CardTitle className="text-2xl font-bold text-gray-800">
                          {module.title}
                        </CardTitle>
                        <Badge variant="outline" className={`${module.color === 'bg-blue-600' ? 'text-blue-600 border-blue-200 bg-blue-50/50' : 'text-orange-600 border-orange-200 bg-orange-50/50'}`}>
                          {module.badge}
                        </Badge>
                      </div>
                      <p className="text-gray-700 text-lg">{module.description}</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <Button
                    className={`${module.color === 'bg-blue-600' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-orange-600 hover:bg-orange-700'} text-white font-semibold py-3 px-8 transition-all duration-300 hover:scale-105 shadow-md hover:shadow-lg`}
                  >
                    <Target className="mr-2 h-4 w-4" />
                    {module.buttonText}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Information Section */}
        <Card className="border border-gray-200 bg-white/60 shadow-sm max-w-4xl mx-auto">
          <CardHeader>
            <CardTitle className="text-xl flex items-center gap-2 text-gray-800">
              <BookOpen className="h-5 w-5 text-orange-600" />
              Informations importantes
            </CardTitle>
          </CardHeader>
          <CardContent className="text-gray-700 space-y-4">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <Target className="h-4 w-4 text-orange-600" />
                  Choix de voie
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Voie approfondie : démonstrations théoriques</li>
                  <li>• Voie appliquée : méthodes pratiques</li>
                  <li>• Choix mémorisé automatiquement</li>
                  <li>• Possibilité de changer à tout moment</li>
                </ul>
              </div>
              <div className="space-y-3">
                <h3 className="font-semibold text-gray-800 mb-2 flex items-center gap-2">
                  <Calculator className="h-4 w-4 text-orange-600" />
                  Préparation ECG
                </h3>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• Contenu adapté aux concours</li>
                  <li>• Exercices progressifs</li>
                  <li>• Méthodologie de résolution</li>
                  <li>• Suivi personnalisé</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default MathsChoixOptionPage; 