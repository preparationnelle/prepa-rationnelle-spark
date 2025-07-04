
import React, { useEffect } from 'react';
import { initPostHog } from '@/integrations/posthog/client';

/**
 * PostHogProvider simplifié qui n'interfère pas avec l'initialisation de l'app
 */
const PostHogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Initialize PostHog on component mount avec gestion d'erreur
  useEffect(() => {
    // Utiliser un setTimeout pour éviter les problèmes d'initialisation
    const timer = setTimeout(() => {
      try {
        console.log('Initializing PostHog...');
        initPostHog();
      } catch (error) {
        console.error('PostHog initialization failed:', error);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  return <>{children}</>;
};

export default PostHogProvider;
