
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { useProgressTracker } from '@/hooks/useProgressTracker';

const ProgressContext = createContext<{
  progress: number;
  refreshProgress: () => Promise<void>;
  trackPageVisit: (pageType: string) => void;
}>({
  progress: 0,
  refreshProgress: async () => {},
  trackPageVisit: () => {},
});

export const useProgress = () => useContext(ProgressContext);

export const ProgressProvider = ({ children }: { children: React.ReactNode }) => {
  const [progress, setProgress] = useState(0);
  const { currentUser } = useAuth();
  const { trackPageVisit } = useProgressTracker();

  const refreshProgress = async () => {
    if (!currentUser) {
      setProgress(0);
      return;
    }
    
    const { data, error } = await supabase
      .from('progress')
      .select('progression')
      .eq('user_id', currentUser.id)
      .eq('module', 'main')
      .single();

    if (error && error.code !== 'PGSQL_NO_ROWS_RETURNED') {
      console.error('Erreur lors de la récupération de la progression:', error);
    } else if (data) {
      setProgress(data.progression || 0);
    } else {
      setProgress(0);
    }
  };

  useEffect(() => {
    refreshProgress();
  }, [currentUser]);

  const value = {
    progress,
    refreshProgress,
    trackPageVisit,
  };

  return (
    <ProgressContext.Provider value={value}>
      {children}
    </ProgressContext.Provider>
  );
};
