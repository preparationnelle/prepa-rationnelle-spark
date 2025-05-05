
import React, { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { posthog } from '@/integrations/posthog/client';
import { useLocation } from 'react-router-dom';

/**
 * PostHogProvider integrates PostHog analytics with auth state and route changes
 */
const PostHogProvider: React.FC = () => {
  const { currentUser } = useAuth();
  const location = useLocation();

  // Identify user when auth state changes
  useEffect(() => {
    if (currentUser) {
      // Identify logged-in user
      posthog.identify(currentUser.id, {
        email: currentUser.email,
        name: currentUser.user_metadata?.first_name || 'Unknown User'
      });
    } else {
      // Reset for anonymous users
      posthog.reset();
    }
  }, [currentUser]);

  // Track page views when route changes
  useEffect(() => {
    posthog.capture('$pageview', {
      path: location.pathname,
      url: window.location.href,
      referrer: document.referrer
    });
  }, [location.pathname]);

  return null; // This component doesn't render anything
};

export default PostHogProvider;
