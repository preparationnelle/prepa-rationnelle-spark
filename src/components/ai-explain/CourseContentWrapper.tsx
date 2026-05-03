import React, { useRef, useState, useCallback } from 'react';
import TextSelectionPopover from '@/components/ai-explain/TextSelectionPopover';
import AIExplainPanel from '@/components/ai-explain/AIExplainPanel';
import UserNotesSidebar from '@/components/notes/UserNotesSidebar';
import NotesToggleButton from '@/components/notes/NotesToggleButton';
import { useUserNotes } from '@/hooks/useUserNotes';
import { useDetectSubject } from '@/hooks/useDetectSubject';
import { useAuth } from '@/context/AuthContext';
import { useLocation } from 'react-router-dom';

interface CourseContentWrapperProps {
    children: React.ReactNode;
    subject?: string;       // Override detected subject
    pageContext?: string;    // Override detected page context
}

const CourseContentWrapper: React.FC<CourseContentWrapperProps> = ({
    children,
    subject: subjectOverride,
    pageContext: pageContextOverride,
}) => {
    const { currentUser } = useAuth();
    const location = useLocation();
    const detectedSubject = useDetectSubject();
    const contentRef = useRef<HTMLDivElement>(null);

    const subject = subjectOverride || detectedSubject;
    const pageContext = pageContextOverride || `Page: ${location.pathname}`;

    // AI Explain panel state
    const [explainOpen, setExplainOpen] = useState(false);
    const [explainText, setExplainText] = useState('');

    // Notes sidebar state
    const [notesOpen, setNotesOpen] = useState(false);

    // Add note dialog state
    const [noteDialogOpen, setNoteDialogOpen] = useState(false);
    const [noteDialogText, setNoteDialogText] = useState('');
    const [noteInput, setNoteInput] = useState('');

    // Notes hook
    const { notes, loading, addNote, updateNote, deleteNote } = useUserNotes({ filterByPage: true });

    const handleExplain = useCallback((text: string) => {
        setExplainText(text);
        setExplainOpen(true);
    }, []);

    const handleAddNote = useCallback((text: string) => {
        setNoteDialogText(text);
        setNoteInput('');
        setNoteDialogOpen(true);
    }, []);

    const handleHighlight = useCallback(async (text: string) => {
        await addNote({
            selected_text: text,
            note_content: '',
            subject,
            color: 'yellow',
        });
    }, [addNote, subject]);

    const handleSaveNoteFromExplain = useCallback(async (text: string, explanation: string) => {
        await addNote({
            selected_text: text,
            note_content: 'Explication IA sauvegardée',
            subject,
            ai_explanation: explanation,
            color: 'blue',
        });
    }, [addNote, subject]);

    const handleSubmitNote = useCallback(async () => {
        if (!noteInput.trim() && !noteDialogText.trim()) return;
        await addNote({
            selected_text: noteDialogText || undefined,
            note_content: noteInput.trim() || 'Note sans commentaire',
            subject,
            color: 'yellow',
        });
        setNoteDialogOpen(false);
        setNoteInput('');
        setNoteDialogText('');
    }, [addNote, noteInput, noteDialogText, subject]);

    if (!currentUser) {
        return <>{children}</>;
    }

    return (
        <>
            {/* Content area with text selection detection */}
            <div ref={contentRef} className="relative">
                {children}
                <TextSelectionPopover
                    containerRef={contentRef}
                    onExplain={handleExplain}
                    onAddNote={handleAddNote}
                    onHighlight={handleHighlight}
                    subject={subject}
                />
            </div>

            {/* AI Explain Panel */}
            <AIExplainPanel
                isOpen={explainOpen}
                onClose={() => setExplainOpen(false)}
                selectedText={explainText}
                subject={subject}
                pageContext={pageContext}
                onSaveNote={handleSaveNoteFromExplain}
            />

            {/* Notes sidebar */}
            <UserNotesSidebar
                isOpen={notesOpen}
                onClose={() => setNotesOpen(false)}
                notes={notes}
                loading={loading}
                onDeleteNote={deleteNote}
                onUpdateNote={updateNote}
                currentPage={location.pathname}
            />

            {/* Notes toggle button */}
            <NotesToggleButton
                notesCount={notes.length}
                onClick={() => setNotesOpen(!notesOpen)}
                isOpen={notesOpen}
            />

            {/* Note dialog */}
            {noteDialogOpen && (
                <>
                    <div
                        className="fixed inset-0 bg-black/30 backdrop-blur-sm z-[300]"
                        onClick={() => setNoteDialogOpen(false)}
                    />
                    <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[301] w-[90%] max-w-md bg-white rounded-2xl shadow-2xl p-5">
                        <h3 className="text-base font-bold text-gray-800 mb-3">📝 Ajouter une note</h3>
                        {noteDialogText && (
                            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-3">
                                <p className="text-xs text-amber-700 italic line-clamp-2">
                                    « {noteDialogText} »
                                </p>
                            </div>
                        )}
                        <textarea
                            value={noteInput}
                            onChange={e => setNoteInput(e.target.value)}
                            placeholder="Écris ta note ici..."
                            className="w-full p-3 text-sm rounded-xl border border-gray-200 bg-gray-50 focus:bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 resize-none"
                            rows={4}
                            autoFocus
                        />
                        <div className="flex justify-end gap-2 mt-3">
                            <button
                                onClick={() => setNoteDialogOpen(false)}
                                className="px-4 py-2 text-sm text-gray-500 hover:text-gray-700 rounded-lg hover:bg-gray-50"
                            >
                                Annuler
                            </button>
                            <button
                                onClick={handleSubmitNote}
                                className="px-4 py-2 text-sm bg-teal-600 text-white rounded-lg hover:bg-teal-700 font-medium"
                            >
                                Sauvegarder
                            </button>
                        </div>
                    </div>
                </>
            )}
        </>
    );
};

export default CourseContentWrapper;
