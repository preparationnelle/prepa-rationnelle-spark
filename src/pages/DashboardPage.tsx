
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent } from '@/components/ui/card';

const DashboardPage = () => {
  const [submissions, setSubmissions] = useState([]);
  const { currentUser } = useAuth();

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
          setSubmissions(data);
        }
      }
    };

    fetchSubmissions();
  }, [currentUser]);

  const renderSubmissionItem = (submission) => {
    let title = "Essai";
    try {
      const parsedTexte = JSON.parse(submission.texte);
      if (parsedTexte && typeof parsedTexte === 'object' && parsedTexte.title) {
        title = parsedTexte.title;
      }
    } catch (e) {
      title = submission.texte.split(' ').slice(0, 5).join(' ') + '...';
    }

    return (
      <li key={submission.id} className="mb-4">
        <Card>
          <CardContent className="pt-6">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold mb-1">{title}</h3>
                <p className="text-sm text-muted-foreground">
                  {new Date(submission.date).toLocaleDateString('fr-FR', { 
                    day: 'numeric', month: 'long', year: 'numeric' 
                  })}
                </p>
              </div>
              {submission.note && (
                <span className="bg-primary/10 text-primary text-sm font-medium px-2 py-1 rounded-full">
                  Note: {submission.note}/10
                </span>
              )}
            </div>
          </CardContent>
        </Card>
      </li>
    );
  };

  return (
    <div className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-8">Tableau de bord</h1>
      
      {submissions.length > 0 ? (
        <ul className="space-y-4">
          {submissions.map(renderSubmissionItem)}
        </ul>
      ) : (
        <div className="text-center py-12">
          <p className="text-lg text-gray-600">Aucun essai soumis pour le moment.</p>
          <p className="text-gray-500">
            Générez un plan ou soumettez un essai pour commencer.
          </p>
        </div>
      )}
    </div>
  );
};

export default DashboardPage;
