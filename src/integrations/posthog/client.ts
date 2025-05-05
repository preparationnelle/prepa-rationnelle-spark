
import posthog from 'posthog-js';

// Initialize PostHog with project API key
export const initPostHog = () => {
  // Vérifier si PostHog est déjà initialisé pour éviter une double initialisation
  if (!posthog.__loaded) {
    try {
      posthog.init(
        // Utiliser la clé API fournie
        'phc_9BK4MNQcKCUUEOooDiLwBv0Og29ddhYx5Jjx3XJe0hZ', // Clé API PostHog
        {
          api_host: 'https://eu.posthog.com', 
          capture_pageview: false, // Nous gérons cela manuellement avec React Router
          persistence: 'localStorage',
          autocapture: true, // Capture automatiquement les clics, soumissions de formulaires, etc.
          loaded: (posthog) => {
            if (process.env.NODE_ENV === 'development') posthog.debug();
          },
          // Options simplifiées pour éviter les erreurs
          disable_session_recording: false,
          disable_persistence: false
        }
      );
      console.log('PostHog initialized successfully');
    } catch (error) {
      console.error('Failed to initialize PostHog:', error);
    }
  } else {
    console.log('PostHog already initialized, skipping initialization');
  }
  
  return posthog;
};

// Fonction utilitaire pour capturer des événements de manière sécurisée
export const captureEvent = (eventName, properties = {}) => {
  try {
    posthog.capture(eventName, properties);
    console.log(`Event captured: ${eventName}`, properties);
  } catch (error) {
    console.error(`Failed to capture event ${eventName}:`, error);
  }
};

// Export the PostHog instance
export { posthog };
