import React, { useEffect, useState } from 'react';
import { useAuth } from '@/context/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { supabase } from '@/integrations/supabase/client';
import { ArrowRight, Book, Calendar } from 'lucide-react';

interface Submission {
  id: string;
  title: string;
  date: Date;
  score: number;
}

const DashboardPage = () => {
  const { currentUser } = useAuth();
  const [submissions, setSubmissions] = useState<Submission[]>([]);
  const [progress, setProgress] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUserData = async () => {
      if (!currentUser) return;

      try {
        // Fetch recent submissions
        const { data: submissionsData, error } = await supabase
          .from('submissions')
          .select('*')
          .eq('user_id', currentUser.id)
          .order('date', { ascending: false })
          .limit(3);
        
        if (error) throw error;
        
        const formattedSubmissions: Submission[] = submissionsData?.map(data => ({
          id: data.id,
          title: data.title || 'Sans titre',
          date: new Date(data.date),
          score: data.note || 0
        })) || [];
        
        setSubmissions(formattedSubmissions);
        
        // Calculate progress (simple example)
        const progressValue = formattedSubmissions.length > 0 
          ? Math.min(Math.floor((formattedSubmissions.length / 10) * 100), 100)
          : 0;
        
        setProgress(progressValue);
      } catch (error) {
        console.error("Error fetching user data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [currentUser]);

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Tableau de bord</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        {/* Progress Card */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Votre progression</CardTitle>
            <CardDescription>Continuez sur votre lancée !</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span className="text-sm font-medium">Niveau d'avancement</span>
                <span className="text-sm font-medium">{progress}%</span>
              </div>
              <Progress value={progress} className="h-2" />
              {progress < 30 && (
                <p className="text-sm text-muted-foreground">Débutez votre parcours en générant votre premier plan.</p>
              )}
              {progress >= 30 && progress < 70 && (
                <p className="text-sm text-muted-foreground">Vous progressez bien ! Continuez à pratiquer.</p>
              )}
              {progress >= 70 && (
                <p className="text-sm text-muted-foreground">Excellent travail ! Vous maîtrisez presque tous les concepts.</p>
              )}
            </div>
          </CardContent>
        </Card>
        
        {/* Recent Submissions Card */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Récentes soumissions</CardTitle>
            <CardDescription>Vos derniers essais</CardDescription>
          </CardHeader>
          <CardContent>
            {loading ? (
              <p className="text-muted-foreground">Chargement...</p>
            ) : submissions.length > 0 ? (
              <ul className="space-y-3">
                {submissions.map((submission) => (
                  <li key={submission.id} className="flex justify-between items-center">
                    <div className="flex-1">
                      <p className="font-medium truncate">{submission.title}</p>
                      <p className="text-sm text-muted-foreground">
                        {submission.date.toLocaleDateString()} • Score: {submission.score}/10
                      </p>
                    </div>
                    <Button variant="ghost" size="icon" asChild>
                      <Link to={`/submissions/${submission.id}`}>
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </Button>
                  </li>
                ))}
              </ul>
            ) : (
              <div className="text-center py-6">
                <Book className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                <p className="text-muted-foreground">Pas encore de soumissions</p>
                <Button variant="outline" size="sm" className="mt-2" asChild>
                  <Link to="/generator">
                    Générer un plan
                  </Link>
                </Button>
              </div>
            )}
          </CardContent>
        </Card>
        
        {/* Coaching Card */}
        <Card>
          <CardHeader className="pb-2">
            <CardTitle>Coaching individuel</CardTitle>
            <CardDescription>Réservez une session personnalisée</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="text-center py-4">
              <Calendar className="mx-auto h-8 w-8 text-primary mb-2" />
              <p className="mb-4 text-muted-foreground">
                Bénéficiez de l'expertise de nos coaches pour améliorer vos performances.
              </p>
              <Button asChild>
                <Link to="/coaching">
                  Réserver une session
                </Link>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <h2 className="text-2xl font-semibold mb-4">Actions rapides</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card className="bg-primary text-primary-foreground">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-2">Générer un plan</h3>
            <p className="text-sm mb-4 opacity-90">Créez un plan structuré sur un sujet d'actualité</p>
            <Button variant="secondary" asChild>
              <Link to="/generator">
                Commencer
              </Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-2">Soumettre un essai</h3>
            <p className="text-sm text-muted-foreground mb-4">Recevez un feedback détaillé</p>
            <Button variant="outline" asChild>
              <Link to="/submission">
                Soumettre
              </Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-2">Consulter les ressources</h3>
            <p className="text-sm text-muted-foreground mb-4">Accédez à notre bibliothèque</p>
            <Button variant="outline" asChild>
              <Link to="/resources">
                Explorer
              </Link>
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-2">Passer au Premium</h3>
            <p className="text-sm text-muted-foreground mb-4">Débloquez toutes les fonctionnalités</p>
            <Button variant="outline" asChild>
              <Link to="/upgrade">
                Upgrade
              </Link>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardPage;
