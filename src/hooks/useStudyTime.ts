import { useState, useEffect, useRef, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';

interface StudyTimeData {
    currentSessionSeconds: number;
    totalWeekSeconds: number;
    weeklyRank: number | null;
    isTracking: boolean;
}

// Get ISO week number
const getWeekNumber = (date: Date): number => {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dayNum = d.getUTCDay() || 7;
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    return Math.ceil((((d.getTime() - yearStart.getTime()) / 86400000) + 1) / 7);
};

const INACTIVITY_TIMEOUT = 2 * 60 * 1000; // 2 minutes
const SAVE_INTERVAL = 30 * 1000; // 30 seconds

export const useStudyTime = (): StudyTimeData => {
    const { currentUser } = useAuth();
    const [currentSessionSeconds, setCurrentSessionSeconds] = useState(0);
    const [totalWeekSeconds, setTotalWeekSeconds] = useState(0);
    const [weeklyRank, setWeeklyRank] = useState<number | null>(null);
    const [isTracking, setIsTracking] = useState(false);

    const sessionIdRef = useRef<string | null>(null);
    const lastActivityRef = useRef<number>(Date.now());
    const isActiveRef = useRef(true);
    const intervalRef = useRef<NodeJS.Timeout | null>(null);
    const saveIntervalRef = useRef<NodeJS.Timeout | null>(null);

    // Create a new session
    const createSession = useCallback(async () => {
        if (!currentUser?.id) return;

        const now = new Date();
        const weekNumber = getWeekNumber(now);
        const year = now.getFullYear();

        try {
            const { data, error } = await (supabase as any)
                .from('study_sessions')
                .insert({
                    user_id: currentUser.id,
                    started_at: now.toISOString(),
                    week_number: weekNumber,
                    year: year,
                    duration_seconds: 0
                })
                .select('id')
                .single();

            if (error) {
                console.error('Error creating session:', error);
                return;
            }

            sessionIdRef.current = data.id;
            setIsTracking(true);
            setCurrentSessionSeconds(0);
        } catch (err) {
            console.error('Failed to create session:', err);
        }
    }, [currentUser?.id]);

    // Update session duration
    const updateSession = useCallback(async (finalUpdate = false) => {
        if (!sessionIdRef.current || !currentUser?.id) return;

        try {
            const updates: any = {
                duration_seconds: currentSessionSeconds
            };

            if (finalUpdate) {
                updates.ended_at = new Date().toISOString();
            }

            await (supabase as any)
                .from('study_sessions')
                .update(updates)
                .eq('id', sessionIdRef.current);
        } catch (err) {
            console.error('Failed to update session:', err);
        }
    }, [currentUser?.id, currentSessionSeconds]);

    // Fetch weekly stats and rank
    const fetchWeeklyStats = useCallback(async () => {
        if (!currentUser?.id) return;

        const now = new Date();
        const weekNumber = getWeekNumber(now);
        const year = now.getFullYear();

        try {
            // Get total seconds for this week
            const { data: sessionsData, error: sessionsError } = await (supabase as any)
                .from('study_sessions')
                .select('duration_seconds')
                .eq('user_id', currentUser.id)
                .eq('week_number', weekNumber)
                .eq('year', year);

            if (sessionsError) {
                console.error('Error fetching sessions:', sessionsError);
                return;
            }

            const total = (sessionsData || []).reduce(
                (acc: number, s: any) => acc + (s.duration_seconds || 0),
                0
            );
            setTotalWeekSeconds(total);

            // Get rank - fetch all users' totals for this week
            const { data: allData, error: allError } = await (supabase as any)
                .from('study_sessions')
                .select('user_id, duration_seconds')
                .eq('week_number', weekNumber)
                .eq('year', year);

            if (allError) {
                console.error('Error fetching leaderboard:', allError);
                return;
            }

            // Aggregate by user
            const userTotals: Record<string, number> = {};
            (allData || []).forEach((s: any) => {
                userTotals[s.user_id] = (userTotals[s.user_id] || 0) + (s.duration_seconds || 0);
            });

            // Sort and find rank
            const sorted = Object.entries(userTotals)
                .sort(([, a], [, b]) => b - a);

            const userRank = sorted.findIndex(([id]) => id === currentUser.id) + 1;
            setWeeklyRank(userRank > 0 ? userRank : null);
        } catch (err) {
            console.error('Failed to fetch weekly stats:', err);
        }
    }, [currentUser?.id]);

    // Handle user activity
    const handleActivity = useCallback(() => {
        lastActivityRef.current = Date.now();
        if (!isActiveRef.current) {
            isActiveRef.current = true;
            setIsTracking(true);
        }
    }, []);

    // Check for inactivity
    const checkInactivity = useCallback(() => {
        const now = Date.now();
        const timeSinceActivity = now - lastActivityRef.current;

        if (timeSinceActivity > INACTIVITY_TIMEOUT && isActiveRef.current) {
            isActiveRef.current = false;
            setIsTracking(false);
        }
    }, []);

    // Initialize tracking
    useEffect(() => {
        if (!currentUser?.id) return;

        // Create initial session
        createSession();
        fetchWeeklyStats();

        // Set up activity listeners
        const events = ['mousemove', 'keydown', 'click', 'scroll', 'touchstart'];
        events.forEach(event => {
            window.addEventListener(event, handleActivity, { passive: true });
        });

        // Increment timer every second when active
        intervalRef.current = setInterval(() => {
            checkInactivity();
            if (isActiveRef.current) {
                setCurrentSessionSeconds(prev => prev + 1);
            }
        }, 1000);

        // Save to database periodically
        saveIntervalRef.current = setInterval(() => {
            if (sessionIdRef.current) {
                updateSession();
            }
        }, SAVE_INTERVAL);

        // Handle page unload
        const handleUnload = () => {
            if (sessionIdRef.current) {
                // Use sendBeacon for reliable delivery
                const data = JSON.stringify({
                    session_id: sessionIdRef.current,
                    duration_seconds: currentSessionSeconds,
                    ended_at: new Date().toISOString()
                });
                navigator.sendBeacon('/api/end-session', data);

                // Also try direct update as fallback
                updateSession(true);
            }
        };

        window.addEventListener('beforeunload', handleUnload);

        return () => {
            events.forEach(event => {
                window.removeEventListener(event, handleActivity);
            });
            window.removeEventListener('beforeunload', handleUnload);

            if (intervalRef.current) clearInterval(intervalRef.current);
            if (saveIntervalRef.current) clearInterval(saveIntervalRef.current);

            // Final save on unmount
            updateSession(true);
        };
    }, [currentUser?.id, createSession, fetchWeeklyStats, handleActivity, checkInactivity, updateSession]);

    // Refresh weekly stats periodically
    useEffect(() => {
        if (!currentUser?.id) return;

        const refreshInterval = setInterval(() => {
            fetchWeeklyStats();
        }, 60 * 1000); // Every minute

        return () => clearInterval(refreshInterval);
    }, [currentUser?.id, fetchWeeklyStats]);

    return {
        currentSessionSeconds,
        totalWeekSeconds: totalWeekSeconds + currentSessionSeconds,
        weeklyRank,
        isTracking
    };
};

// Helper to format seconds to readable time
export const formatStudyTime = (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);

    if (hours > 0) {
        return `${hours}h${minutes > 0 ? minutes.toString().padStart(2, '0') : ''}`;
    }
    return `${minutes}min`;
};
