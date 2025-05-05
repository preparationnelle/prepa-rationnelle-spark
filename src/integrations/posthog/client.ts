
import posthog from 'posthog-js';

// Initialize PostHog with project API key
export const initPostHog = () => {
  posthog.init(
    // Replace this with your actual PostHog API key from your PostHog instance
    'phc_placeholder_api_key',
    {
      api_host: 'https://eu.posthog.com', // Or your self-hosted URL
      capture_pageview: false, // We'll handle this manually with React Router
      persistence: 'localStorage',
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
