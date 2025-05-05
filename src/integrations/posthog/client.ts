
import posthog from 'posthog-js';

// Initialize PostHog with project API key
export const initPostHog = () => {
  // Vérifier si posthog est déjà initialisé
  if (posthog.__loaded) {
    console.log('PostHog already initialized');
    return posthog;
  }
  
  try {
    posthog.init(
      // Your PostHog API key
      'phc_pGAwikZ7KdqjbuCuY4f9FijQ959CiQGjc9PgH88b4vR',
      {
        api_host: 'https://eu.i.posthog.com', // Updated to the new host URL
        capture_pageview: false, // We'll handle this manually with React Router
        persistence: 'localStorage',
        person_profiles: 'identified_only', // Only create profiles for identified users
        autocapture: true, // Automatically capture clicks, form submissions etc.
        loaded: (posthog) => {
          console.log('PostHog loaded successfully');
          if (process.env.NODE_ENV === 'development') posthog.debug();
        }
      }
    );
    
    console.log('PostHog initialization attempted');
  } catch (error) {
    console.error('Error initializing PostHog:', error);
  }
  
  return posthog;
};

// Export the PostHog instance
export { posthog };
