
import React, { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { posthog, initPostHog } from '@/integrations/posthog/client';
import { useLocation } from 'react-router-dom';

/**
 * PostHogProvider integrates PostHog analytics with auth state and route changes
 */
const PostHogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser } = useAuth();
  const location = useLocation();

  // Initialize PostHog on component mount
  useEffect(() => {
    console.log('Initializing PostHog...');
    initPostHog();
  }, []);

  // Identify user when auth state changes
  useEffect(() => {
    console.log('Auth state changed in PostHog:', currentUser?.id);
    
    // Wait for PostHog to be fully loaded before proceeding
    const checkPostHogAndIdentify = () => {
      if (posthog.__loaded) {
        if (currentUser) {
          console.log('Identifying user in PostHog:', currentUser.id);
          posthog.identify(currentUser.id, {
            email: currentUser.email,
            name: currentUser.user_metadata?.first_name || 'Unknown User',
            $set_once: {
              first_seen_at: new Date().toISOString(),
            }
          });
        } else {
          console.log('Resetting PostHog for anonymous user');
          posthog.reset();
        }
      } else {
        console.log('PostHog not loaded yet, retrying...');
        setTimeout(checkPostHogAndIdentify, 100);
      }
    };

    checkPostHogAndIdentify();
  }, [currentUser]);

  // Track page views when route changes
  useEffect(() => {
    console.log('Route changed:', location.pathname);
    
    const trackPageView = () => {
      if (posthog.__loaded) {
        let url = window.origin + location.pathname;
        if (location.search) {
          url = url + location.search;
        }
        
        console.log('Tracking page view:', url);
        posthog.capture('$pageview', {
          $current_url: url,
          path: location.pathname,
          url: url,
          referrer: document.referrer
        });
      } else {
        console.log('PostHog not loaded for page tracking, retrying...');
        setTimeout(trackPageView, 100);
      }
    };

    trackPageView();
  }, [location.pathname, location.search]);

  return <>{children}</>;
};

export default PostHogProvider;
