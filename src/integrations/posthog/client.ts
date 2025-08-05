
import posthog from 'posthog-js';

// Initialize PostHog with project API key
export const initPostHog = () => {
  if (typeof window !== 'undefined' && !posthog.__loaded) {
    console.log('Initializing PostHog...');
    
    posthog.init(
      'phc_pGAwikZ7KdqjbuCuY4f9FijQ959CiQGjc9PgH88b4vR',
      {
        api_host: 'https://eu.i.posthog.com',
        capture_pageview: false,
        persistence: 'localStorage',
        person_profiles: 'identified_only',
        autocapture: true,
        loaded: (posthog) => {
          console.log('PostHog loaded successfully');
          if (process.env.NODE_ENV === 'development') {
            posthog.debug();
          }
        }
      }
    );
  } else if (typeof window !== 'undefined' && posthog.__loaded) {
    console.log('PostHog already loaded');
  }
  
  return posthog;
};

// Test function to verify PostHog is working
export const testPostHog = () => {
  if (typeof window !== 'undefined') {
    console.log('Testing PostHog...');
    console.log('PostHog loaded?', posthog.__loaded);
    console.log('PostHog instance:', posthog);
    
    // Test capture
    try {
      posthog.capture('posthog_test_event', {
        test: true,
        timestamp: new Date().toISOString()
      });
      console.log('✅ PostHog test event sent successfully');
      return true;
    } catch (error) {
      console.error('❌ PostHog test failed:', error);
      return false;
    }
  }
  return false;
};

// Export the PostHog instance
export { posthog };
