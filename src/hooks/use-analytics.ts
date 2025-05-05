
import { posthog } from '@/integrations/posthog/client';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useAnalytics() {
  const location = useLocation();
  
  // Track page views when the route changes
  useEffect(() => {
    posthog.capture('$pageview', {
      path: location.pathname,
      url: window.location.href,
      referrer: document.referrer
    });
  }, [location.pathname]);
  
  return {
    trackEvent: (eventName: string, properties?: Record<string, any>) => {
      posthog.capture(eventName, properties);
    },
    
    // Identify user with their ID and optional properties
    identify: (userId: string, properties?: Record<string, any>) => {
      posthog.identify(userId, properties);
    },
    
    // Reset user identification (e.g., on logout)
    reset: () => {
      posthog.reset();
    }
  };
}
