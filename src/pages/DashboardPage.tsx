
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Calendar, FileText, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useProgress } from '@/context/ProgressContext';

const DashboardPage = () => {
  const [submissions, setSubmissions] = useState([]);
  const { currentUser } = useAuth();
  const { progress, refreshProgress } = useProgress();

  useEffect(() => {
    const fetchSubmissions = async () => {
      if (currentUser) {
        const { data, error } = await supabase
          .from('submissions')
          .select('*')
          .eq('user_id', currentUser.id)
          .order('date', { ascending: false });

        if (error) {
          console.error("Error fetching submissions:", error);
        } else {
          console.log("Fetched submissions:", data);
          setSubmissions(data || []);
        }
      }
    };

    fetchSubmissions();
    refreshProgress(); // Refresh the progress when the dashboard loads
    
    // Set up a refresh interval to check for progress updates
    const progressInterval = setInterval(() => {
      refreshProgress();
    }, 60000); // Check every minute
    
    return () => {
      clearInterval(progressInterval);
    };
  }, [currentUser, refreshProgress]);

  const renderSubmissionsList = () => {
    if (submissions.length === 0) {
      return (
        <div className="text-center py-8 flex flex-col items-center">
          <FileText className="w-12 h-12 text-gray-300 mb-4" />
          <p className="text-gray-500 mb-2">Pas encore de soumissions</p>
          <Button variant="outline" asChild className="mt-4">
            <Link to="/submission">Créer un essai</Link>
          </Button>
        </div>
      );
    }

    return submissions.slice(0, 3).map((submission) => {
      let title = "Essai sans titre";
      try {
        if (submission.title) {
          title = submission.title;
        } else if (submission.texte && typeof submission.texte === 'string' && submission.texte.startsWith('{')) {
          try {
            const parsedTexte = JSON.parse(submission.texte);
            if (parsedTexte && typeof parsedTexte === 'object' && parsedTexte.title) {
              title = parsedTexte.title;
            }
          } catch(e) {
            console.error("Error parsing JSON text:", e);
          }
        } else if (submission.texte) {
          title = submission.texte.split(' ').slice(0, 5).join(' ') + '...';
        }
      } catch (e) {
        console.error("Error processing submission title:", e);
      }

      return (
        <Card key={submission.id} className="mb-3">
          <CardContent className="p-4">
            <div className="flex justify-between items-center">
              <div>
                <div className="flex items-center space-x-2">
                  <h3 className="font-semibold">{title}</h3>
                </div>
                <p className="text-sm text-muted-foreground">
                  {new Date(submission.date).toLocaleDateString('fr-FR', { 
                    day: 'numeric', month: 'long', year: 'numeric' 
                  })}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      );
    });
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Tableau de bord</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
        {/* Section Progression */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-1">Votre progression</h2>
            <p className="text-muted-foreground mb-4">Continuez sur votre lancée !</p>
            
            <div className="space-y-4">
              <div className="flex justify-between mb-1">
                <span>Niveau d'avancement</span>
                <span>{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
              <p className="text-sm text-muted-foreground mt-4">
                {progress === 0 
                  ? "Débutez votre parcours en rédigeant votre premier essai."
                  : progress < 30 
                    ? "Bon début ! Explorez les méthodes et fiches d'écoles pour progresser."
                    : progress < 60 
                      ? "Vous avancez bien ! Continuez à utiliser nos outils."
                      : progress < 100 
                        ? "Excellent progrès ! Plus que quelques étapes."
                        : "Félicitations ! Vous avez complété toutes les activités."}
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Section Soumissions Récentes */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-1">Récentes soumissions</h2>
            <p className="text-muted-foreground mb-4">Vos derniers essais</p>
            
            {renderSubmissionsList()}
          </CardContent>
        </Card>

        {/* Section Coaching */}
        <Card>
          <CardContent className="p-6">
            <h2 className="text-xl font-bold mb-1">Coaching individuel</h2>
            <p className="text-muted-foreground mb-4">Réservez une session personnalisée</p>
            
            <div className="text-center py-2 flex flex-col items-center">
              <Calendar className="w-10 h-10 text-primary mb-4" />
              <p className="text-center mb-4">
                Bénéficiez de l'expertise de nos coaches pour améliorer vos performances.
              </p>
              <Button asChild className="mt-2">
                <Link to="/coaching">Réserver une session</Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Section Actions Rapides */}
      <div className="mb-8">
        <h2 className="text-2xl font-bold mb-6">Actions rapides</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Soumettre un essai */}
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Rédiger un essai</h3>
              <p className="text-sm mb-6">Obtenez un feedback détaillé sur votre essai</p>
              <Button 
                variant="secondary" 
                className="w-full bg-black text-white hover:bg-gray-800"
                asChild
              >
                <Link to="/submission">Commencer</Link>
              </Button>
            </CardContent>
          </Card>

          {/* S'entraîner aux entretiens */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">S'entraîner aux entretiens</h3>
              <p className="text-sm mb-6">Préparez-vous à exceller</p>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/interview-simulator">Simuler</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Consulter les ressources */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Consulter les ressources</h3>
              <p className="text-sm mb-6">Accédez à notre bibliothèque</p>
              <Button variant="outline" className="w-full" asChild>
                <Link to="/questions">Explorer</Link>
              </Button>
            </CardContent>
          </Card>

          {/* Passer au Premium */}
          <Card>
            <CardContent className="p-6">
              <h3 className="text-lg font-semibold mb-2">Passer au Premium</h3>
              <p className="text-sm mb-6">Débloquez toutes les fonctionnalités</p>
              <Button variant="outline" className="w-full">
                Upgrade
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;
