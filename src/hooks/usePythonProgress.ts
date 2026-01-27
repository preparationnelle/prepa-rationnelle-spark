import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { pythonFormationStructure, getTotalPythonChapters } from '@/data/python-formation-structure';

export const usePythonProgress = () => {
    const { currentUser } = useAuth();
    const [loading, setLoading] = useState(true);
    // Format: { 'item_id': { status: 'completed', score: 10, ... } }
    const [progressData, setProgressData] = useState<Record<string, any>>({});
    const [globalProgress, setGlobalProgress] = useState(0);
    const [progressRecordId, setProgressRecordId] = useState<string | null>(null);

    const fetchProgress = useCallback(async () => {
        if (!currentUser) {
            setLoading(false);
            return;
        }

        try {
            console.log("Fetching Python progress...");
            const { data, error } = await supabase
                .from('progress')
                .select('*')
                .eq('user_id', currentUser.id)
                .eq('module', 'formation_python')
                .limit(1)
                .maybeSingle();

            if (error) {
                console.error('Error fetching python progress:', error);
                return;
            }

            if (data) {
                console.log("Progress found:", data);
                const activities = (data.completed_activities as Record<string, any>) || {};
                setProgressData(activities);
                setGlobalProgress(data.progression || 0);
                setProgressRecordId(data.id);
            } else {
                console.log("No progress found");
                setProgressData({});
                setGlobalProgress(0);
                setProgressRecordId(null);
            }
        } catch (err) {
            console.error('Unexpected error fetching progress:', err);
        } finally {
            setLoading(false);
        }
    }, [currentUser]);

    const updateDB = async (newActivities: Record<string, any>) => {
        if (!currentUser) return;

        // Calculate new global progress
        const completedCount = Object.keys(newActivities).filter(k => newActivities[k]?.status === 'completed').length;
        const totalItems = getTotalPythonChapters();
        const newPercentage = totalItems > 0 ? Math.round((completedCount / totalItems) * 100) : 0;

        console.log("Saving progress...", { newActivities, newPercentage, progressRecordId });

        try {
            let error;

            if (progressRecordId) {
                // Update existing record
                const result = await supabase
                    .from('progress')
                    .update({
                        completed_activities: newActivities,
                        progression: newPercentage,
                        updated_at: new Date().toISOString()
                    })
                    .eq('id', progressRecordId);
                error = result.error;
            } else {
                // Double check if record exists (race condition)
                const existing = await supabase
                    .from('progress')
                    .select('id')
                    .eq('user_id', currentUser.id)
                    .eq('module', 'formation_python')
                    .limit(1)
                    .maybeSingle();

                if (existing.data) {
                    // Found it, update it
                    const result = await supabase
                        .from('progress')
                        .update({
                            completed_activities: newActivities,
                            progression: newPercentage,
                            updated_at: new Date().toISOString()
                        })
                        .eq('id', existing.data.id);
                    error = result.error;
                    setProgressRecordId(existing.data.id);
                } else {
                    // Insert new
                    const result = await supabase
                        .from('progress')
                        .insert({
                            user_id: currentUser.id,
                            module: 'formation_python',
                            completed_activities: newActivities,
                            progression: newPercentage
                        })
                        .select()
                        .single();

                    error = result.error;
                    if (result.data) {
                        setProgressRecordId(result.data.id);
                    }
                }
            }

            if (error) throw error;

            console.log("Saved successfully");
            setProgressData(newActivities);
            setGlobalProgress(newPercentage);
            // Toast handled by calling function or here? Original code had it here logic.
            // Let's keep it clean

        } catch (err) {
            console.error('Error updating progress:', err);
            toast.error("Erreur lors de la sauvegarde de la progression");
        }
    };

    const markAsComplete = async (itemId: string, score?: number) => {
        if (!currentUser) {
            toast.error("Vous devez être connecté pour sauvegarder votre progression");
            return;
        }

        const newActivities = {
            ...progressData,
            [itemId]: {
                status: 'completed',
                completed_at: new Date().toISOString(),
                score: score ?? progressData[itemId]?.score // keep existing score if not provided
            }
        };

        // UI Optimistic update could go here, but for safety we await DB
        await updateDB(newActivities);
        toast.success("Progression sauvegardée !");
    };

    const getModuleProgress = (moduleId: number) => {
        const module = pythonFormationStructure.find(m => m.id === moduleId);
        if (!module) return 0;

        const total = module.chapters.length;
        if (total === 0) return 0;

        const completed = module.chapters.filter(chapter =>
            progressData[chapter.id]?.status === 'completed'
        ).length;

        return Math.round((completed / total) * 100);
    };

    const isChapterComplete = (chapterId: string) => {
        return progressData[chapterId]?.status === 'completed';
    }

    useEffect(() => {
        fetchProgress();
    }, [currentUser, fetchProgress]);

    return {
        loading,
        progressData,
        globalProgress,
        markAsComplete,
        getModuleProgress,
        isChapterComplete,
        refresh: fetchProgress
    };
};
