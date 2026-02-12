import React, { useState } from 'react';
import { X, StickyNote, Trash2, Edit3, Check, ChevronDown, ChevronUp, Globe, BookOpen, FileText, Clock, Quote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { UserNote } from '@/hooks/useUserNotes';
import { motion, AnimatePresence } from 'framer-motion';

interface UserNotesSidebarProps {
    isOpen: boolean;
    onClose: () => void;
    notes: UserNote[];
    loading: boolean;
    onDeleteNote: (id: string) => void;
    onUpdateNote: (id: string, data: { note_content?: string; color?: string }) => void;
    currentPage: string;
}

const COLOR_OPTIONS = [
    { value: 'yellow', bg: 'bg-yellow-100', border: 'border-yellow-300', dot: 'bg-yellow-400' },
    { value: 'green', bg: 'bg-green-100', border: 'border-green-300', dot: 'bg-green-400' },
    { value: 'blue', bg: 'bg-blue-100', border: 'border-blue-300', dot: 'bg-blue-400' },
    { value: 'pink', bg: 'bg-pink-100', border: 'border-pink-300', dot: 'bg-pink-400' },
    { value: 'purple', bg: 'bg-purple-100', border: 'border-purple-300', dot: 'bg-purple-400' },
];

const NoteCard: React.FC<{
    note: UserNote;
    onDelete: () => void;
    onUpdate: (data: { note_content?: string; color?: string }) => void;
}> = ({ note, onDelete, onUpdate }) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editContent, setEditContent] = useState(note.note_content);
    const [expanded, setExpanded] = useState(false);

    const colorConfig = COLOR_OPTIONS.find(c => c.value === note.color) || COLOR_OPTIONS[0];

    const handleSave = () => {
        onUpdate({ note_content: editContent });
        setIsEditing(false);
    };

    const formatDate = (dateStr: string) => {
        const date = new Date(dateStr);
        return date.toLocaleDateString('fr-FR', {
            day: 'numeric',
            month: 'short',
            hour: '2-digit',
            minute: '2-digit',
        });
    };

    return (
        <motion.div
            layout
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className={cn(
                "rounded-xl border p-3 transition-all",
                colorConfig.bg,
                colorConfig.border
            )}
        >
            {/* Selected text */}
            {note.selected_text && (
                <div className="flex items-start gap-1.5 mb-2">
                    <Quote className="h-3 w-3 text-gray-400 mt-0.5 shrink-0" />
                    <p className="text-xs text-gray-500 italic line-clamp-2">
                        {note.selected_text}
                    </p>
                </div>
            )}

            {/* Note content */}
            {isEditing ? (
                <div className="space-y-2">
                    <textarea
                        value={editContent}
                        onChange={e => setEditContent(e.target.value)}
                        className="w-full p-2 text-sm rounded-lg border border-gray-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500/20 resize-none"
                        rows={3}
                        autoFocus
                    />
                    <div className="flex items-center gap-2">
                        <div className="flex items-center gap-1">
                            {COLOR_OPTIONS.map(c => (
                                <button
                                    key={c.value}
                                    onClick={() => onUpdate({ color: c.value })}
                                    className={cn(
                                        "h-5 w-5 rounded-full border-2 transition-transform",
                                        c.dot,
                                        note.color === c.value ? "scale-125 border-gray-600" : "border-transparent hover:scale-110"
                                    )}
                                />
                            ))}
                        </div>
                        <div className="flex-1" />
                        <button
                            onClick={() => setIsEditing(false)}
                            className="text-xs text-gray-500 hover:text-gray-700 px-2 py-1"
                        >
                            Annuler
                        </button>
                        <button
                            onClick={handleSave}
                            className="flex items-center gap-1 text-xs text-teal-700 bg-teal-50 hover:bg-teal-100 px-2 py-1 rounded-lg font-medium"
                        >
                            <Check className="h-3 w-3" />
                            Sauver
                        </button>
                    </div>
                </div>
            ) : (
                <p className="text-sm text-gray-800 leading-relaxed">
                    {note.note_content || <span className="italic text-gray-400">Pas de note</span>}
                </p>
            )}

            {/* AI explanation (collapsible) */}
            {note.ai_explanation && (
                <div className="mt-2">
                    <button
                        onClick={() => setExpanded(!expanded)}
                        className="flex items-center gap-1 text-xs text-teal-600 hover:text-teal-700 font-medium"
                    >
                        {expanded ? <ChevronUp className="h-3 w-3" /> : <ChevronDown className="h-3 w-3" />}
                        Explication IA
                    </button>
                    <AnimatePresence>
                        {expanded && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                className="overflow-hidden"
                            >
                                <div className="mt-2 p-2 bg-white/60 rounded-lg text-xs text-gray-600 leading-relaxed whitespace-pre-line">
                                    {note.ai_explanation}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            )}

            {/* Footer */}
            <div className="flex items-center justify-between mt-2 pt-2 border-t border-black/5">
                <span className="text-[10px] text-gray-400 flex items-center gap-1">
                    <Clock className="h-2.5 w-2.5" />
                    {formatDate(note.created_at)}
                </span>
                <div className="flex items-center gap-1">
                    <button
                        onClick={() => {
                            setEditContent(note.note_content);
                            setIsEditing(true);
                        }}
                        className="h-6 w-6 rounded-md hover:bg-black/5 flex items-center justify-center transition-colors"
                        title="Modifier"
                    >
                        <Edit3 className="h-3 w-3 text-gray-400" />
                    </button>
                    <button
                        onClick={onDelete}
                        className="h-6 w-6 rounded-md hover:bg-red-50 flex items-center justify-center transition-colors"
                        title="Supprimer"
                    >
                        <Trash2 className="h-3 w-3 text-red-400" />
                    </button>
                </div>
            </div>
        </motion.div>
    );
};

const UserNotesSidebar: React.FC<UserNotesSidebarProps> = ({
    isOpen,
    onClose,
    notes,
    loading,
    onDeleteNote,
    onUpdateNote,
    currentPage,
}) => {
    const [showAll, setShowAll] = useState(false);
    const pageNotes = notes;

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm z-[200]"
                        onClick={onClose}
                    />

                    {/* Sidebar */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 bottom-0 w-full sm:w-[380px] bg-white shadow-2xl z-[201] flex flex-col"
                    >
                        {/* Header */}
                        <div className="px-5 py-4 flex items-center justify-between border-b border-gray-100 bg-amber-50/50">
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 bg-amber-100 rounded-xl flex items-center justify-center">
                                    <StickyNote className="h-5 w-5 text-amber-600" />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800 text-base">Mes notes</h3>
                                    <p className="text-xs text-gray-500">
                                        {pageNotes.length} note{pageNotes.length !== 1 ? 's' : ''} sur cette page
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="h-8 w-8 rounded-lg hover:bg-gray-100 flex items-center justify-center transition-colors"
                            >
                                <X className="h-4 w-4 text-gray-500" />
                            </button>
                        </div>

                        {/* Notes list */}
                        <div className="flex-1 overflow-y-auto p-4 space-y-3">
                            {loading ? (
                                <div className="flex flex-col items-center justify-center py-12 gap-3">
                                    <div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center animate-pulse">
                                        <StickyNote className="h-4 w-4 text-amber-500" />
                                    </div>
                                    <p className="text-sm text-gray-400">Chargement...</p>
                                </div>
                            ) : pageNotes.length === 0 ? (
                                <div className="flex flex-col items-center justify-center py-12 gap-3 text-center">
                                    <div className="h-16 w-16 rounded-2xl bg-gray-50 flex items-center justify-center">
                                        <FileText className="h-8 w-8 text-gray-300" />
                                    </div>
                                    <p className="text-sm text-gray-500 font-medium">Aucune note sur cette page</p>
                                    <p className="text-xs text-gray-400 max-w-[200px]">
                                        Sélectionne du texte dans le cours pour ajouter une note ou demander une explication IA
                                    </p>
                                </div>
                            ) : (
                                <AnimatePresence mode="popLayout">
                                    {pageNotes.map(note => (
                                        <NoteCard
                                            key={note.id}
                                            note={note}
                                            onDelete={() => onDeleteNote(note.id)}
                                            onUpdate={(data) => onUpdateNote(note.id, data)}
                                        />
                                    ))}
                                </AnimatePresence>
                            )}
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default UserNotesSidebar;
