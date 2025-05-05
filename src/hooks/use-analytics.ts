
import { posthog } from '@/integrations/posthog/client';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export function useAnalytics() {
  const location = useLocation();
  
  // Track page views when the route changes
  useEffect(() => {
    try {
      const url = window.location.href;
      console.log('Tracking page view:', location.pathname, url);
      
      posthog.capture('$pageview', {
        path: location.pathname,
        url: url,
        referrer: document.referrer,
        $current_url: url
      });
    } catch (error) {
      console.error('Error tracking page view:', error);
    }
  }, [location.pathname]);
  
  return {
    trackEvent: (eventName: string, properties?: Record<string, any>) => {
      try {
        console.log('Tracking event:', eventName, properties);
        posthog.capture(eventName, properties);
      } catch (error) {
        console.error('Error tracking event:', error);
      }
    },
    
    // Identify user with their ID and optional properties
    identify: (userId: string, properties?: Record<string, any>) => {
      try {
        console.log('Identifying user:', userId, properties);
        posthog.identify(userId, properties);
      } catch (error) {
        console.error('Error identifying user:', error);
      }
    },
    
    // Reset user identification (e.g., on logout)
    reset: () => {
      try {
        console.log('Resetting user identification');
        posthog.reset();
      } catch (error) {
        console.error('Error resetting user:', error);
      }
    },
    
    // Group users (for B2B applications)
    group: (groupType: string, groupKey: string, groupProperties?: Record<string, any>) => {
      try {
        console.log('Grouping user:', groupType, groupKey, groupProperties);
        posthog.group(groupType, groupKey, groupProperties);
      } catch (error) {
        console.error('Error grouping user:', error);
      }
    },
    
    // Get distinct ID for the current user
    getDistinctId: () => {
      try {
        const id = posthog.get_distinct_id();
        console.log('Getting distinct ID:', id);
        return id;
      } catch (error) {
        console.error('Error getting distinct ID:', error);
        return '';
      }
    }
  };
}
