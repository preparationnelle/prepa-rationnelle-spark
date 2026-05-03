import { useState, useEffect, useCallback } from 'react';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';
import { useLocation } from 'react-router-dom';

export interface UserNote {
    id: string;
    user_id: string;
    page_path: string;
    selected_text: string | null;
    note_content: string;
    subject: string | null;
    ai_explanation: string | null;
    position_data: any;
    color: string;
    created_at: string;
    updated_at: string;
}

interface UseUserNotesOptions {
    filterByPage?: boolean;
}

export function useUserNotes(options: UseUserNotesOptions = { filterByPage: true }) {
    const { currentUser } = useAuth();
    const location = useLocation();
    const [notes, setNotes] = useState<UserNote[]>([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const fetchNotes = useCallback(async () => {
        if (!currentUser) {
            setNotes([]);
            return;
        }

        setLoading(true);
        setError(null);

        try {
            let query = supabase
                .from('user_notes' as any)
                .select('*')
                .eq('user_id', currentUser.id)
                .order('created_at', { ascending: false });

            if (options.filterByPage) {
                query = query.eq('page_path', location.pathname);
            }

            const { data, error: fetchError } = await query;

            if (fetchError) throw fetchError;
            setNotes((data as any[] || []) as UserNote[]);
        } catch (err: any) {
            console.error('Error fetching notes:', err);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [currentUser, location.pathname, options.filterByPage]);

    useEffect(() => {
        fetchNotes();
    }, [fetchNotes]);

    const addNote = useCallback(async (data: {
        selected_text?: string;
        note_content: string;
        subject?: string;
        ai_explanation?: string;
        position_data?: any;
        color?: string;
    }) => {
        if (!currentUser) return null;

        try {
            const { data: newNote, error: insertError } = await supabase
                .from('user_notes' as any)
                .insert({
                    user_id: currentUser.id,
                    page_path: location.pathname,
                    selected_text: data.selected_text || null,
                    note_content: data.note_content,
                    subject: data.subject || null,
                    ai_explanation: data.ai_explanation || null,
                    position_data: data.position_data || null,
                    color: data.color || 'yellow',
                } as any)
                .select()
                .single();

            if (insertError) throw insertError;

            setNotes(prev => [newNote as any as UserNote, ...prev]);
            return newNote as any as UserNote;
        } catch (err: any) {
            console.error('Error adding note:', err);
            setError(err.message);
            return null;
        }
    }, [currentUser, location.pathname]);

    const updateNote = useCallback(async (id: string, data: {
        note_content?: string;
        ai_explanation?: string;
        color?: string;
    }) => {
        if (!currentUser) return false;

        try {
            const { error: updateError } = await supabase
                .from('user_notes' as any)
                .update({
                    ...data,
                    updated_at: new Date().toISOString(),
                } as any)
                .eq('id', id)
                .eq('user_id', currentUser.id);

            if (updateError) throw updateError;

            setNotes(prev => prev.map(note =>
                note.id === id ? { ...note, ...data, updated_at: new Date().toISOString() } : note
            ));
            return true;
        } catch (err: any) {
            console.error('Error updating note:', err);
            setError(err.message);
            return false;
        }
    }, [currentUser]);

    const deleteNote = useCallback(async (id: string) => {
        if (!currentUser) return false;

        try {
            const { error: deleteError } = await supabase
                .from('user_notes' as any)
                .delete()
                .eq('id', id)
                .eq('user_id', currentUser.id);

            if (deleteError) throw deleteError;

            setNotes(prev => prev.filter(note => note.id !== id));
            return true;
        } catch (err: any) {
            console.error('Error deleting note:', err);
            setError(err.message);
            return false;
        }
    }, [currentUser]);

    return {
        notes,
        loading,
        error,
        addNote,
        updateNote,
        deleteNote,
        refetch: fetchNotes,
    };
}
