
import posthog from 'posthog-js';

// Initialize PostHog with project API key from env (skips silently when missing)
export const initPostHog = () => {
  if (typeof window === 'undefined') return posthog;
  if (posthog.__loaded) return posthog;

  const apiKey = import.meta.env.VITE_POSTHOG_KEY as string | undefined;
  const apiHost = (import.meta.env.VITE_POSTHOG_HOST as string | undefined) ?? 'https://eu.posthog.com';

  if (!apiKey) return posthog;

  const start = () => {
    posthog.init(apiKey, {
      api_host: apiHost,
      capture_pageview: false,
      persistence: 'localStorage',
      person_profiles: 'identified_only',
      autocapture: false,
      loaded: (ph) => {
        if (import.meta.env.DEV) ph.debug();
      },
    });
  };
  if ('requestIdleCallback' in window) {
    (window as any).requestIdleCallback(start, { timeout: 2000 });
  } else {
    setTimeout(start, 2000);
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
