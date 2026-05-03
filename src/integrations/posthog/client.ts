
import posthog from 'posthog-js';

// Initialize PostHog with project API key
export const initPostHog = () => {
  if (typeof window !== 'undefined' && !posthog.__loaded) {
    // Initialise PostHog après que le thread est idle pour ne pas bloquer le first paint
    const start = () => {
      posthog.init(
        'phx_WuSstYiK9zBuLMrTxDi0qzKp9tGLA9p0aaH2XnQ4BcQ1emk',
        {
          api_host: 'https://eu.posthog.com',
          capture_pageview: false,
          persistence: 'localStorage',
          person_profiles: 'identified_only',
          // désactive l'autocapture pour réduire le bruit et la charge
          autocapture: false,
          loaded: (ph) => {
            if (process.env.NODE_ENV === 'development') {
              ph.debug();
            }
          }
        }
      );
    };
    if ('requestIdleCallback' in window) {
      (window as any).requestIdleCallback(start, { timeout: 2000 });
    } else {
      setTimeout(start, 2000);
    }
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
