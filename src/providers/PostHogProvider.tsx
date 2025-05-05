
import React, { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { posthog, initPostHog } from '@/integrations/posthog/client';
import { useLocation } from 'react-router-dom';

/**
 * PostHogProvider integrates PostHog analytics with auth state and route changes
 */
const PostHogProvider: React.FC = () => {
  const { currentUser } = useAuth();
  const location = useLocation();

  // Initialize PostHog if needed
  useEffect(() => {
    console.log('Initializing PostHog from provider');
    initPostHog();
  }, []);

  // Identify user when auth state changes
  useEffect(() => {
    try {
      if (currentUser) {
        console.log('Identifying user in PostHogProvider:', currentUser.id);
        // Identify logged-in user
        posthog.identify(currentUser.id, {
          email: currentUser.email,
          name: currentUser.user_metadata?.first_name || 'Unknown User',
          $set_once: {
            first_seen_at: new Date().toISOString(),
          }
        });
      } else {
        console.log('Resetting user in PostHogProvider');
        // Reset for anonymous users
        posthog.reset();
      }
    } catch (error) {
      console.error('Error in PostHogProvider user identification:', error);
    }
  }, [currentUser]);

  // Track page views when route changes
  useEffect(() => {
    try {
      let url = window.origin + location.pathname;
      if (location.search) {
        url = url + location.search;
      }
      
      console.log('Tracking page view in PostHogProvider:', url);
      
      posthog.capture('$pageview', {
        $current_url: url,
        path: location.pathname,
        url: url,
        referrer: document.referrer
      });
    } catch (error) {
      console.error('Error tracking page view in PostHogProvider:', error);
    }
  }, [location.pathname, location.search]);

  return null; // This component doesn't render anything
};

export default PostHogProvider;
