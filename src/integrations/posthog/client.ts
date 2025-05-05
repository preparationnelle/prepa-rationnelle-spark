
import posthog from 'posthog-js';

// Initialize PostHog with project API key
export const initPostHog = () => {
  posthog.init(
    // Use the PostHog API key from their documentation
    'phc_pGAwikZ7KdqjbuCuY4f9FijQ959CiQGjc9PgH88b4vR',
    {
      api_host: 'https://eu.i.posthog.com', // EU host from documentation
      capture_pageview: false, // We'll handle this manually with React Router
      persistence: 'localStorage',
      autocapture: true, // Automatically capture clicks, form submissions etc.
      person_profiles: 'identified_only', // Only create profiles for identified users
      loaded: (posthog) => {
        if (process.env.NODE_ENV === 'development') posthog.debug();
      }
    }
  );
  
  return posthog;
};

// Export the PostHog instance
export { posthog };
