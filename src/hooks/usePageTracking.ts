import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { posthog } from '@/integrations/posthog/client';

export const usePageTracking = () => {
  const { pathname } = useLocation();
  const { currentUser } = useAuth();

  useEffect(() => {
    // PostHog pageview (works for all users, even anonymous)
    if (posthog.__loaded) {
      posthog.capture('$pageview', { $current_url: window.location.href });
    }

    // Supabase page_visits (only for authenticated users)
    if (!currentUser) return;

    const trackPageVisit = async () => {
      try {
        await (supabase as any)
          .from('page_visits')
          .insert({
            user_id: currentUser.id,
            page_path: pathname,
            page_title: document.title,
          });
      } catch {
        // Silently fail - analytics should never break UX
      }
    };

    trackPageVisit();
  }, [pathname, currentUser]);
};
