import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from '@/components/ui/card';
import { ChevronRight, Home, BookOpen, Calculator, BookMarked } from 'lucide-react';
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

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs font-medium text-gray-600">
            <Link to="/" className="flex items-center gap-1 hover:text-gray-900 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <Link to="/formations" className="hover:text-gray-900 transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-1" />
            <span className="text-gray-900 font-bold">Choix option Maths</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Choisissez votre voie en mathématiques</h1>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
          Sélectionnez l'option qui correspond à votre parcours en prépa ECG.
          Ce choix sera mémorisé pour vos prochaines visites.
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {/* Carte Maths Approfondies */}
          <Card 
            className="p-6 hover:shadow-lg transition-all duration-200 bg-white cursor-pointer transform hover:-translate-y-1"
            onClick={() => handleOptionChoice('approfondies')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleOptionChoice('approfondies')}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold text-blue-600">Maths Approfondies</h2>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">
                Programme complet pour la voie approfondie en mathématiques, 
                avec un focus sur les démonstrations et les concepts théoriques.
              </p>
              <div className="bg-blue-600 text-white font-semibold py-3 px-4 rounded-lg text-center hover:bg-blue-700 transition-colors">
                Accéder à la formation
              </div>
            </div>
          </Card>

          {/* Carte Maths Appliquées */}
          <Card 
            className="p-6 hover:shadow-lg transition-all duration-200 bg-white cursor-pointer transform hover:-translate-y-1"
            onClick={() => handleOptionChoice('appliquees')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && handleOptionChoice('appliquees')}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-green-600" />
                </div>
                <h2 className="text-2xl font-semibold text-green-600">Maths Appliquées</h2>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">
                Formation axée sur les applications pratiques des mathématiques,
                avec un accent sur les méthodes de résolution et les cas concrets.
              </p>
              <div className="bg-green-600 text-white font-semibold py-3 px-4 rounded-lg text-center hover:bg-green-700 transition-colors">
                Accéder à la formation
              </div>
            </div>
          </Card>
        </div>
        
        {/* Bloc Terminale vers la prépa */}
        <div className="mt-12 max-w-4xl mx-auto">
          <Card 
            className="p-6 hover:shadow-lg transition-all duration-200 bg-white cursor-pointer transform hover:-translate-y-1 border-l-4 border-violet-500"
            onClick={() => navigate('/formation/math/terminale-vers-prepa')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && navigate('/formation/math/terminale-vers-prepa')}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-violet-100 rounded-full flex items-center justify-center">
                  <Calculator className="w-6 h-6 text-violet-600" />
                </div>
                <h2 className="text-2xl font-semibold text-violet-700">Terminale → Prépa</h2>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">
                Conseils et ressources pour réussir la transition entre la Terminale et la prépa ECG : méthodes de travail, organisation, et points clés à anticiper en mathématiques.
              </p>
              <div className="border border-violet-500 text-violet-700 font-semibold py-3 px-4 rounded-lg text-center hover:bg-violet-50 transition-colors">
                Découvrir les conseils
              </div>
            </div>
          </Card>
        </div>

        {/* Bloc Première → Deuxième année */}
        <div className="mt-8 max-w-4xl mx-auto">
          <Card 
            className="p-6 hover:shadow-lg transition-all duration-200 bg-white cursor-pointer transform hover:-translate-y-1 border-l-4 border-blue-500"
            onClick={() => navigate('/formation/math/premiere-vers-deuxieme')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && navigate('/formation/math/premiere-vers-deuxieme')}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-blue-600" />
                </div>
                <h2 className="text-2xl font-semibold text-blue-700">Première année → Deuxième année</h2>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">
                Transition vers l'ECG2: révisions d'été, objectifs de rentrée, planning type et ressources clés pour démarrer fort.
              </p>
              <div className="border border-blue-500 text-blue-700 font-semibold py-3 px-4 rounded-lg text-center hover:bg-blue-50 transition-colors">
                Accéder au module
              </div>
            </div>
          </Card>
        </div>

        {/* Carte Méthodologie */}
        <div className="mt-8 max-w-4xl mx-auto">
          <Card 
            className="p-6 hover:shadow-lg transition-all duration-200 bg-white cursor-pointer transform hover:-translate-y-1 border-l-4 border-orange-500"
            onClick={() => navigate('/formation/maths-methodologie')}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && navigate('/formation/maths-methodologie')}
          >
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center">
                  <BookMarked className="w-6 h-6 text-orange-600" />
                </div>
                <h2 className="text-2xl font-semibold text-gray-800">Méthodologie</h2>
              </div>
              <p className="text-gray-600 mb-6 flex-grow">
                Articles et conseils pour optimiser votre préparation aux concours,
                avec des stratégies d'apprentissage et des méthodes de résolution.
              </p>
              <div className="border border-orange-500 text-orange-600 font-semibold py-3 px-4 rounded-lg text-center hover:bg-orange-50 transition-colors">
                Accéder à la méthodologie
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default MathsChoixOptionPage; 