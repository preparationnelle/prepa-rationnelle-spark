
import posthog from 'posthog-js';

// Initialize PostHog with project API key
export const initPostHog = () => {
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
        if (process.env.NODE_ENV === 'development') posthog.debug();
      }
    }
  );
  
  return posthog;
};

// Export the PostHog instance
export { posthog };
