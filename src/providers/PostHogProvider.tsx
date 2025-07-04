
import React, { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { posthog, initPostHog } from '@/integrations/posthog/client';
import { useLocation } from 'react-router-dom';

/**
 * PostHogProvider integrates PostHog analytics with auth state and route changes
 */
const PostHogProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { currentUser, loading } = useAuth();
  const location = useLocation();

  // Initialize PostHog on component mount with error handling
  useEffect(() => {
    try {
      console.log('Initializing PostHog...');
      initPostHog();
    } catch (error) {
      console.error('PostHog initialization failed:', error);
    }
  }, []);

  // Identify user when auth state changes - but only after auth is loaded
  useEffect(() => {
    if (loading) {
      console.log('Auth still loading, skipping PostHog user identification');
      return;
    }

    console.log('Auth state changed in PostHog:', currentUser?.id);
    
    // Wait for PostHog to be fully loaded before proceeding
    const checkPostHogAndIdentify = () => {
      try {
        if (typeof posthog !== 'undefined' && posthog && posthog.__loaded) {
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
      } catch (error) {
        console.error('PostHog user identification failed:', error);
      }
    };

    checkPostHogAndIdentify();
  }, [currentUser, loading]);

  // Track page views when route changes - with error handling
  useEffect(() => {
    if (loading) {
      console.log('Auth still loading, skipping PostHog page tracking');
      return;
    }

    console.log('Route changed:', location.pathname);
    
    const trackPageView = () => {
      try {
        if (typeof posthog !== 'undefined' && posthog && posthog.__loaded) {
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
      } catch (error) {
        console.error('PostHog page tracking failed:', error);
      }
    };

    trackPageView();
  }, [location.pathname, location.search, loading]);

  return <>{children}</>;
};

export default PostHogProvider;
