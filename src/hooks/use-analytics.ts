
import { posthog } from '@/integrations/posthog/client';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useAnalytics() {
  const location = useLocation();
  
  // Suivre les vues de page lorsque la route change
  useEffect(() => {
    try {
      posthog.capture('$pageview', {
        path: location.pathname,
        url: window.location.href,
        referrer: document.referrer
      });
    } catch (error) {
      console.error('Analytics pageview error:', error);
    }
  }, [location.pathname]);
  
  return {
    trackEvent: (eventName: string, properties?: Record<string, any>) => {
      try {
        posthog.capture(eventName, properties);
      } catch (error) {
        console.error(`Analytics event error (${eventName}):`, error);
      }
    },
    
    // Identifier l'utilisateur avec son ID et des propriétés optionnelles
    identify: (userId: string, properties?: Record<string, any>) => {
      try {
        posthog.identify(userId, properties);
      } catch (error) {
        console.error('Analytics identify error:', error);
      }
    },
    
    // Réinitialiser l'identification de l'utilisateur (par exemple, lors de la déconnexion)
    reset: () => {
      try {
        posthog.reset();
      } catch (error) {
        console.error('Analytics reset error:', error);
      }
    }
  };
}
