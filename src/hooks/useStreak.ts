import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';

interface DayActivity {
    date: string;
    dayName: string;
    isActive: boolean;
}

interface StreakData {
    streak: number;
    isLoading: boolean;
    lastActivityDate: string | null;
    last7Days: DayActivity[];
    recordActivity: () => Promise<void>;
}

// Get day name in French
const getDayName = (date: Date): string => {
    const days = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];
    return days[date.getDay()];
};

export const useStreak = (): StreakData => {
    const { currentUser } = useAuth();
    const [streak, setStreak] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const [lastActivityDate, setLastActivityDate] = useState<string | null>(null);
    const [last7Days, setLast7Days] = useState<DayActivity[]>([]);

    // Record today's activity
    const recordActivity = useCallback(async () => {
        if (!currentUser?.id) return;

        try {
            const today = new Date().toISOString().split('T')[0];

            const { error } = await (supabase as any)
                .from('user_activity')
                .upsert(
                    { user_id: currentUser.id, activity_date: today },
                    { onConflict: 'user_id,activity_date', ignoreDuplicates: true }
                );

            if (error && !error.message?.includes('duplicate')) {
                console.error('Error recording activity:', error);
            }
        } catch (err) {
            console.error('Failed to record activity:', err);
        }
    }, [currentUser?.id]);

    // Calculate streak and last 7 days from activity history
    const calculateStreak = useCallback(async () => {
        if (!currentUser?.id) {
            setIsLoading(false);
            return;
        }

        try {
            const { data, error } = await (supabase as any)
                .from('user_activity')
                .select('activity_date')
                .eq('user_id', currentUser.id)
                .order('activity_date', { ascending: false })
                .limit(365);

            if (error) {
                console.error('Error fetching activity:', error);
                setIsLoading(false);
                return;
            }

            // Build last 7 days array
            const today = new Date();
            today.setHours(0, 0, 0, 0);

            const activityDates = new Set(
                (data || []).map((d: any) => d.activity_date)
            );

            const sevenDays: DayActivity[] = [];
            for (let i = 6; i >= 0; i--) {
                const date = new Date(today);
                date.setDate(date.getDate() - i);
                const dateStr = date.toISOString().split('T')[0];
                sevenDays.push({
                    date: dateStr,
                    dayName: getDayName(date),
                    isActive: activityDates.has(dateStr)
                });
            }
            setLast7Days(sevenDays);

            if (!data || data.length === 0) {
                setStreak(0);
                setIsLoading(false);
                return;
            }

            // Calculate consecutive days
            let currentStreak = 0;

            const yesterday = new Date(today);
            yesterday.setDate(yesterday.getDate() - 1);

            const lastActivity = new Date(data[0].activity_date);
            lastActivity.setHours(0, 0, 0, 0);

            setLastActivityDate(data[0].activity_date);

            // If last activity is older than yesterday, streak is broken
            if (lastActivity < yesterday) {
                setStreak(0);
                setIsLoading(false);
                return;
            }

            // Count consecutive days
            let expectedDate = lastActivity;

            for (const record of data) {
                const activityDate = new Date(record.activity_date);
                activityDate.setHours(0, 0, 0, 0);

                if (activityDate.getTime() === expectedDate.getTime()) {
                    currentStreak++;
                    expectedDate = new Date(expectedDate);
                    expectedDate.setDate(expectedDate.getDate() - 1);
                } else if (activityDate < expectedDate) {
                    break;
                }
            }

            setStreak(currentStreak);
        } catch (err) {
            console.error('Failed to calculate streak:', err);
        } finally {
            setIsLoading(false);
        }
    }, [currentUser?.id]);

    // Record activity and calculate streak on mount
    useEffect(() => {
        const initStreak = async () => {
            await recordActivity();
            await calculateStreak();
        };

        if (currentUser?.id) {
            initStreak();
        } else {
            setIsLoading(false);
        }
    }, [currentUser?.id, recordActivity, calculateStreak]);

    return { streak, isLoading, lastActivityDate, last7Days, recordActivity };
};
