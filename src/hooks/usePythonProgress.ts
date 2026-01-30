import { useState, useEffect, useCallback } from 'react';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';
import { pythonFormationStructure, getTotalPythonChapters, getModuleExerciseCount } from '@/data/python-formation-structure';

// Weight constants for progress calculation
const COURSE_WEIGHT = 0.25;
const QUIZ_WEIGHT = 0.25;
const EXERCISES_WEIGHT = 0.50;

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

    // Calculate weighted global progress
    const calculateGlobalProgress = (activities: Record<string, any>) => {
        let totalModuleProgress = 0;
        const moduleCount = pythonFormationStructure.length;

        for (const module of pythonFormationStructure) {
            totalModuleProgress += calculateModuleProgress(module.id, activities);
        }

        return moduleCount > 0 ? Math.round(totalModuleProgress / moduleCount) : 0;
    };

    // Calculate weighted progress for a single module
    const calculateModuleProgress = (moduleId: number, activities: Record<string, any>) => {
        const coursId = `python-${moduleId}-cours`;
        const qcmId = `python-${moduleId}-qcm`;
        const exerciseCount = getModuleExerciseCount(moduleId);

        // Course: 25%
        const courseComplete = activities[coursId]?.status === 'completed' ? 1 : 0;
        const courseProgress = courseComplete * COURSE_WEIGHT * 100;

        // Quiz: 25%
        const quizComplete = activities[qcmId]?.status === 'completed' ? 1 : 0;
        const quizProgress = quizComplete * QUIZ_WEIGHT * 100;

        // Exercises: 50% (split among all exercises)
        let exercisesCompleted = 0;
        for (let i = 1; i <= exerciseCount; i++) {
            const exoId = `python-${moduleId}-exo-${i}`;
            if (activities[exoId]?.status === 'completed') {
                exercisesCompleted++;
            }
        }
        const exerciseProgress = exerciseCount > 0
            ? (exercisesCompleted / exerciseCount) * EXERCISES_WEIGHT * 100
            : 0;

        return Math.round(courseProgress + quizProgress + exerciseProgress);
    };

    const updateDB = async (newActivities: Record<string, any>, showToast = true) => {
        if (!currentUser) return;

        // Calculate new global progress using weighted formula
        const newPercentage = calculateGlobalProgress(newActivities);

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

        } catch (err) {
            console.error('Error updating progress:', err);
            if (showToast) {
                toast.error("Erreur lors de la sauvegarde de la progression");
            }
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

    // Mark an exercise as seen (when viewing correction)
    const markExerciseAsSeen = async (exerciseId: string) => {
        if (!currentUser) return;

        // Skip if already completed
        if (progressData[exerciseId]?.status === 'completed') return;

        const newActivities = {
            ...progressData,
            [exerciseId]: {
                status: 'completed',
                completed_at: new Date().toISOString()
            }
        };

        await updateDB(newActivities, false); // silent save for exercises
    };

    // Get module progress using weighted calculation
    const getModuleProgress = (moduleId: number) => {
        return calculateModuleProgress(moduleId, progressData);
    };

    const isChapterComplete = (chapterId: string) => {
        return progressData[chapterId]?.status === 'completed';
    };

    const isExerciseSeen = (exerciseId: string) => {
        return progressData[exerciseId]?.status === 'completed';
    };

    useEffect(() => {
        fetchProgress();
    }, [currentUser, fetchProgress]);

    return {
        loading,
        progressData,
        globalProgress,
        markAsComplete,
        markExerciseAsSeen,
        getModuleProgress,
        isChapterComplete,
        isExerciseSeen,
        refresh: fetchProgress
    };
};
