import React, { useState, useRef, useEffect } from 'react';
import { X, Bot, Send, BookmarkPlus, Loader2, Quote, Sparkles } from 'lucide-react';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';
import { motion, AnimatePresence } from 'framer-motion';

interface AIExplainPanelProps {
    isOpen: boolean;
    onClose: () => void;
    selectedText: string;
    subject?: string;
    pageContext?: string;
    onSaveNote?: (text: string, explanation: string) => void;
}

const SUBJECT_LABELS: Record<string, { name: string; icon: string; gradient: string }> = {
    maths: { name: 'Assistant Maths', icon: '📐', gradient: 'from-blue-500 to-indigo-600' },
    geopolitique: { name: 'Atlas ECG', icon: '🌍', gradient: 'from-emerald-500 to-teal-600' },
    anglais: { name: 'Assistant Anglais', icon: '🇬🇧', gradient: 'from-red-500 to-rose-600' },
    esh: { name: 'Assistant ESH', icon: '📊', gradient: 'from-orange-500 to-amber-600' },
    python: { name: 'Assistant Python', icon: '💻', gradient: 'from-yellow-500 to-green-600' },
    cybersecurite: { name: 'Assistant Cyber', icon: '🔐', gradient: 'from-violet-500 to-purple-600' },
    espagnol: { name: 'Assistant Espagnol', icon: '🇪🇸', gradient: 'from-red-500 to-yellow-500' },
    'culture-generale': { name: 'Assistant CG', icon: '📚', gradient: 'from-pink-500 to-fuchsia-600' },
};

const DEFAULT_LABEL = { name: 'Majora AI', icon: '🤖', gradient: 'from-teal-400 to-emerald-500' };

const AIExplainPanel: React.FC<AIExplainPanelProps> = ({
    isOpen,
    onClose,
    selectedText,
    subject,
    pageContext,
    onSaveNote,
}) => {
    const [explanation, setExplanation] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [followUp, setFollowUp] = useState('');
    const [saved, setSaved] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const label = SUBJECT_LABELS[subject || ''] || DEFAULT_LABEL;

    useEffect(() => {
        if (isOpen && selectedText) {
            fetchExplanation();
            setSaved(false);
        }
        return () => {
            setExplanation('');
            setError(null);
            setFollowUp('');
        };
    }, [isOpen, selectedText]);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [explanation]);

    const fetchExplanation = async (followUpQuestion?: string) => {
        setLoading(true);
        setError(null);

        try {
            const { data, error: fnError } = await supabase.functions.invoke('explain-selection', {
                body: {
                    selectedText,
                    subject: subject || 'general',
                    pageContext,
                    followUpQuestion,
                },
            });

            if (fnError) throw new Error(fnError.message);
            if (data?.error) throw new Error(data.error);

            if (followUpQuestion) {
                setExplanation(prev => prev + '\n\n---\n\n**Ta question :** ' + followUpQuestion + '\n\n' + (data?.text || ''));
            } else {
                setExplanation(data?.text || 'Aucune explication disponible.');
            }
        } catch (err: any) {
            console.error('AI Explain error:', err);
            setError(err.message || 'Erreur lors de la génération');
        } finally {
            setLoading(false);
        }
    };

    const handleFollowUp = (e: React.FormEvent) => {
        e.preventDefault();
        if (followUp.trim() && !loading) {
            fetchExplanation(followUp.trim());
            setFollowUp('');
        }
    };

    const handleSaveNote = () => {
        if (onSaveNote && explanation) {
            onSaveNote(selectedText, explanation);
            setSaved(true);
            setTimeout(() => setSaved(false), 2000);
        }
    };

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

                    {/* Panel */}
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed right-0 top-0 bottom-0 w-full sm:w-[450px] bg-white shadow-2xl z-[201] flex flex-col"
                    >
                        {/* Header */}
                        <div className={cn(
                            "px-5 py-4 flex items-center justify-between bg-gradient-to-r text-white",
                            label.gradient
                        )}>
                            <div className="flex items-center gap-3">
                                <div className="h-10 w-10 bg-white/20 rounded-xl flex items-center justify-center text-lg">
                                    {label.icon}
                                </div>
                                <div>
                                    <h3 className="font-bold text-base">{label.name}</h3>
                                    <p className="text-xs opacity-80">Explication contextuelle</p>
                                </div>
                            </div>
                            <button
                                onClick={onClose}
                                className="h-8 w-8 rounded-lg bg-white/20 hover:bg-white/30 flex items-center justify-center transition-colors"
                            >
                                <X className="h-4 w-4" />
                            </button>
                        </div>

                        {/* Selected text */}
                        <div className="px-5 py-3 bg-gray-50 border-b border-gray-100">
                            <div className="flex items-start gap-2">
                                <Quote className="h-4 w-4 text-gray-400 mt-0.5 shrink-0" />
                                <p className="text-sm text-gray-600 italic line-clamp-3">
                                    {selectedText}
                                </p>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="flex-1 overflow-y-auto p-5">
                            {error ? (
                                <div className="bg-red-50 border border-red-200 rounded-xl p-4 text-sm text-red-700">
                                    <p className="font-medium mb-1">Erreur</p>
                                    <p>{error}</p>
                                    <button
                                        onClick={() => fetchExplanation()}
                                        className="mt-2 text-red-800 underline text-xs hover:no-underline"
                                    >
                                        Réessayer
                                    </button>
                                </div>
                            ) : loading && !explanation ? (
                                <div className="flex flex-col items-center justify-center py-12 gap-3">
                                    <div className="h-12 w-12 rounded-full bg-gradient-to-br from-teal-400 to-emerald-500 flex items-center justify-center animate-pulse">
                                        <Sparkles className="h-6 w-6 text-white" />
                                    </div>
                                    <p className="text-sm text-gray-500">Analyse en cours...</p>
                                </div>
                            ) : (
                                <div className="prose prose-sm max-w-none">
                                    <div className="text-gray-800 leading-relaxed whitespace-pre-line text-sm">
                                        {explanation}
                                    </div>
                                    {loading && (
                                        <div className="flex items-center gap-2 mt-4 text-gray-400">
                                            <Loader2 className="h-4 w-4 animate-spin" />
                                            <span className="text-xs">Génération en cours...</span>
                                        </div>
                                    )}
                                    <div ref={messagesEndRef} />
                                </div>
                            )}
                        </div>

                        {/* Actions */}
                        {explanation && !error && (
                            <div className="px-5 py-3 border-t border-gray-100 bg-gray-50/50">
                                <button
                                    onClick={handleSaveNote}
                                    disabled={saved}
                                    className={cn(
                                        "w-full flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-sm font-medium transition-all mb-3",
                                        saved
                                            ? "bg-green-100 text-green-700"
                                            : "bg-amber-50 text-amber-700 hover:bg-amber-100 border border-amber-200"
                                    )}
                                >
                                    <BookmarkPlus className="h-4 w-4" />
                                    {saved ? '✓ Sauvegardé dans mes notes' : 'Sauvegarder dans mes notes'}
                                </button>

                                <form onSubmit={handleFollowUp} className="flex items-center gap-2">
                                    <input
                                        value={followUp}
                                        onChange={e => setFollowUp(e.target.value)}
                                        placeholder="Poser une question de suivi..."
                                        className="flex-1 px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-300"
                                        disabled={loading}
                                    />
                                    <button
                                        type="submit"
                                        disabled={loading || !followUp.trim()}
                                        className={cn(
                                            "h-10 w-10 rounded-xl flex items-center justify-center transition-all shrink-0",
                                            followUp.trim()
                                                ? "bg-teal-600 hover:bg-teal-700 text-white"
                                                : "bg-gray-100 text-gray-400"
                                        )}
                                    >
                                        <Send className="h-4 w-4" />
                                    </button>
                                </form>
                            </div>
                        )}
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default AIExplainPanel;
