
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

// Définit les valeurs de progression pour chaque type de page
const PROGRESS_VALUES = {
  method: 5, // Visiter une page méthode
  school: 3, // Visiter une fiche école
  generator: 10, // Utiliser le générateur
  submission: 8, // Soumettre un essai
  coaching: 7, // Réserver une session de coaching
  interview: 7 // Utiliser le simulateur d'entretien
};

// Plafond maximum de progression
const MAX_PROGRESS = 100;

export function useProgressTracker() {
  const { currentUser } = useAuth();
  const [isUpdating, setIsUpdating] = useState(false);
  
  // Fonction pour récupérer la progression actuelle
  const fetchCurrentProgress = async () => {
    if (!currentUser) return null;
    
    const { data, error } = await supabase
      .from('progress')
      .select('*')
      .eq('user_id', currentUser.id)
      .eq('module', 'main')
      .single();
      
    if (error && error.code !== 'PGSQL_NO_ROWS_RETURNED') {
      console.error('Erreur lors de la récupération de la progression:', error);
      return null;
    }
    
    return data;
  };
  
  // Fonction pour mettre à jour la progression
  const updateProgress = async (activityType) => {
    if (!currentUser || !PROGRESS_VALUES[activityType] || isUpdating) return;
    
    try {
      setIsUpdating(true);
      
      // Récupérer la progression actuelle
      const currentData = await fetchCurrentProgress();
      
      // Vérifier si l'utilisateur a déjà accompli cette activité
      const completedActivities = currentData?.completed_activities 
        ? JSON.parse(currentData.completed_activities) 
        : {};
        
      // Si l'activité a déjà été accomplie, ne rien faire
      if (completedActivities[activityType]) {
        setIsUpdating(false);
        return;
      }
      
      // Calculer la nouvelle progression
      const currentProgress = currentData?.progression || 0;
      const progressIncrement = PROGRESS_VALUES[activityType];
      let newProgress = currentProgress + progressIncrement;
      
      // Plafonner à MAX_PROGRESS
      if (newProgress > MAX_PROGRESS) newProgress = MAX_PROGRESS;
      
      // Marquer l'activité comme accomplie
      completedActivities[activityType] = true;
      
      // Mettre à jour ou insérer dans la base de données
      if (currentData) {
        const { error } = await supabase
          .from('progress')
          .update({ 
            progression: newProgress,
            completed_activities: JSON.stringify(completedActivities),
            updated_at: new Date()
          })
          .eq('id', currentData.id);
          
        if (error) {
          console.error('Erreur lors de la mise à jour de la progression:', error);
          toast.error('Impossible de mettre à jour votre progression');
        } else {
          console.log(`Progression mise à jour: ${newProgress}%`);
        }
      } else {
        // Première activité pour l'utilisateur, créer un nouvel enregistrement
        const { error } = await supabase
          .from('progress')
          .insert({ 
            user_id: currentUser.id,
            module: 'main',
            progression: newProgress,
            completed_activities: JSON.stringify(completedActivities)
          });
          
        if (error) {
          console.error('Erreur lors de la création de la progression:', error);
          toast.error('Impossible d\'enregistrer votre progression');
        } else {
          console.log(`Première activité enregistrée: ${newProgress}%`);
        }
      }
    } finally {
      setIsUpdating(false);
    }
  };

  // Fonction pour suivre une visite de page
  const trackPageVisit = (pageType) => {
    if (currentUser && PROGRESS_VALUES[pageType]) {
      updateProgress(pageType);
    }
  };

  return { trackPageVisit };
}
