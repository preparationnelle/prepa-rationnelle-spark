
import posthog from 'posthog-js';

// Initialize PostHog with project API key
export const initPostHog = () => {
  // Vérifier si PostHog est déjà initialisé pour éviter une double initialisation
  if (!posthog.__loaded) {
    try {
      posthog.init(
        // Utiliser une clé API valide ou une clé placeholder pour le développement
        'phc_placeholder_api_key', // Remplacer par votre vraie clé API PostHog
        {
          api_host: 'https://eu.posthog.com', // Ou votre URL auto-hébergée
          capture_pageview: false, // Nous gérons cela manuellement avec React Router
          persistence: 'localStorage',
          autocapture: true, // Capture automatiquement les clics, soumissions de formulaires, etc.
          loaded: (posthog) => {
            if (process.env.NODE_ENV === 'development') posthog.debug();
          },
          // Les propriétés problématiques ont été supprimées
          enable_recording_console_log: false
        }
      );
      console.log('PostHog initialized successfully');
    } catch (error) {
      console.error('Failed to initialize PostHog:', error);
    }
  }
  
  return posthog;
};

// Fonction utilitaire pour capturer des événements de manière sécurisée
export const captureEvent = (eventName, properties = {}) => {
  try {
    posthog.capture(eventName, properties);
  } catch (error) {
    console.error(`Failed to capture event ${eventName}:`, error);
  }
};

// Export the PostHog instance
export { posthog };
