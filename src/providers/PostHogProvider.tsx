
import React, { useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { posthog, captureEvent } from '@/integrations/posthog/client';
import { useLocation } from 'react-router-dom';

/**
 * PostHogProvider intègre l'analytique PostHog avec l'état d'authentification et les changements de route
 */
const PostHogProvider: React.FC = () => {
  const { currentUser } = useAuth();
  const location = useLocation();

  // Identifier l'utilisateur lorsque l'état d'authentification change
  useEffect(() => {
    try {
      if (currentUser) {
        // Identifier l'utilisateur connecté
        posthog.identify(currentUser.id, {
          email: currentUser.email,
          name: currentUser.user_metadata?.first_name || 'Unknown User'
        });
        console.log('PostHog: User identified', currentUser.id);
      } else {
        // Réinitialiser pour les utilisateurs anonymes
        posthog.reset();
        console.log('PostHog: User reset (anonymous)');
      }
    } catch (error) {
      console.error('PostHog identification error:', error);
    }
  }, [currentUser]);

  // Suivre les vues de page lorsque la route change
  useEffect(() => {
    try {
      captureEvent('$pageview', {
        path: location.pathname,
        url: window.location.href,
        referrer: document.referrer
      });
      console.log('PostHog: Page view captured', location.pathname);
    } catch (error) {
      console.error('PostHog pageview error:', error);
    }
  }, [location.pathname]);

  return null; // Ce composant ne rend rien
};

export default PostHogProvider;
