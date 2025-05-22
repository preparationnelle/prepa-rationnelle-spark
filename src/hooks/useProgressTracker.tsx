
import { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

// Defines progress values for each page type
const PROGRESS_VALUES = {
  method: 5, // Visiting a method page
  school: 3, // Visiting a school page
  generator: 10, // Using the generator
  submission: 8, // Submitting an essay
  coaching: 7, // Booking a coaching session
  interview: 7 // Using the interview simulator
};

// Maximum progress cap
const MAX_PROGRESS = 100;

export function useProgressTracker() {
  const { currentUser } = useAuth();
  const [isUpdating, setIsUpdating] = useState(false);
  
  // Function to fetch current progress
  const fetchCurrentProgress = async () => {
    if (!currentUser) return null;
    
    const { data, error } = await supabase
      .from('progress')
      .select('*')
      .eq('user_id', currentUser.id)
      .eq('module', 'main')
      .single();
      
    if (error && error.code !== 'PGSQL_NO_ROWS_RETURNED') {
      console.error('Error retrieving progress:', error);
      return null;
    }
    
    return data;
  };
  
  // Function to update progress
  const updateProgress = async (activityType: string) => {
    if (!currentUser || !PROGRESS_VALUES[activityType as keyof typeof PROGRESS_VALUES] || isUpdating) return;
    
    try {
      setIsUpdating(true);
      
      // Get current progress
      const currentData = await fetchCurrentProgress();
      
      // Parse completed activities
      const completedActivities = currentData?.completed_activities 
        ? (typeof currentData.completed_activities === 'string' 
            ? JSON.parse(currentData.completed_activities) 
            : currentData.completed_activities)
        : {};
        
      // If activity already completed, do nothing
      if (completedActivities[activityType]) {
        setIsUpdating(false);
        return;
      }
      
      // Calculate new progress
      const currentProgress = currentData?.progression || 0;
      const progressIncrement = PROGRESS_VALUES[activityType as keyof typeof PROGRESS_VALUES];
      let newProgress = currentProgress + progressIncrement;
      
      // Cap at MAX_PROGRESS
      if (newProgress > MAX_PROGRESS) newProgress = MAX_PROGRESS;
      
      // Mark activity as completed
      completedActivities[activityType] = true;
      
      if (currentData) {
        // Update existing record
        const { error } = await supabase
          .from('progress')
          .update({ 
            progression: newProgress,
            completed_activities: completedActivities,
            updated_at: new Date().toISOString()
          })
          .eq('id', currentData.id);
          
        if (error) {
          console.error('Error updating progress:', error);
          toast.error('Unable to update your progress');
        } else {
          console.log(`Progress updated: ${newProgress}%`);
        }
      } else {
        // First activity for user, create new record
        const { error } = await supabase
          .from('progress')
          .insert({ 
            user_id: currentUser.id,
            module: 'main',
            progression: newProgress,
            completed_activities: completedActivities
          })
          .select('id')
          .single();
          
        if (error) {
          console.error('Error creating progress record:', error);
          toast.error('Unable to record your progress');
        } else {
          console.log(`First activity recorded: ${newProgress}%`);
        }
      }
    } finally {
      setIsUpdating(false);
    }
  };

  // Function to track page visit
  const trackPageVisit = (pageType: string) => {
    if (currentUser && PROGRESS_VALUES[pageType as keyof typeof PROGRESS_VALUES]) {
      updateProgress(pageType);
    }
  };

  return { trackPageVisit };
}
