import React, { useState, useEffect, useCallback, useRef } from 'react';
import { Bot, StickyNote, Highlighter, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/context/AuthContext';

interface TextSelectionPopoverProps {
    containerRef: React.RefObject<HTMLDivElement>;
    onExplain: (text: string) => void;
    onAddNote: (text: string) => void;
    onHighlight: (text: string) => void;
    subject?: string;
}

const TextSelectionPopover: React.FC<TextSelectionPopoverProps> = ({
    containerRef,
    onExplain,
    onAddNote,
    onHighlight,
    subject,
}) => {
    const { currentUser } = useAuth();
    const [visible, setVisible] = useState(false);
    const [position, setPosition] = useState({ top: 0, left: 0 });
    const [selectedText, setSelectedText] = useState('');
    const popoverRef = useRef<HTMLDivElement>(null);

    const handleMouseUp = useCallback(() => {
        if (!currentUser) return;

        // Small delay to let the selection settle
        setTimeout(() => {
            const selection = window.getSelection();
            if (!selection || selection.isCollapsed || !selection.toString().trim()) {
                return;
            }

            const text = selection.toString().trim();
            if (text.length < 3) return;

            // Check if selection is within our container
            const container = containerRef.current;
            if (!container) return;

            const anchorNode = selection.anchorNode;
            if (!anchorNode || !container.contains(anchorNode)) return;

            const range = selection.getRangeAt(0);
            const rect = range.getBoundingClientRect();
            const containerRect = container.getBoundingClientRect();

            setSelectedText(text);
            setPosition({
                top: rect.top - containerRect.top - 52,
                left: Math.min(
                    Math.max(rect.left - containerRect.left + rect.width / 2 - 100, 8),
                    containerRect.width - 220
                ),
            });
            setVisible(true);
        }, 10);
    }, [containerRef, currentUser]);

    const handleMouseDown = useCallback((e: MouseEvent) => {
        if (popoverRef.current && popoverRef.current.contains(e.target as Node)) {
            return;
        }
        setVisible(false);
    }, []);

    useEffect(() => {
        const container = containerRef.current;
        if (!container) return;

        container.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mousedown', handleMouseDown);

        return () => {
            container.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mousedown', handleMouseDown);
        };
    }, [containerRef, handleMouseUp, handleMouseDown]);

    if (!visible || !currentUser) return null;

    const subjectIcons: Record<string, string> = {
        maths: '📐',
        geopolitique: '🌍',
        anglais: '🇬🇧',
        esh: '📊',
        python: '💻',
        cybersecurite: '🔐',
        espagnol: '🇪🇸',
        'culture-generale': '📚',
    };

    return (
        <div
            ref={popoverRef}
            className="absolute z-[100] animate-in fade-in-0 zoom-in-95 duration-150"
            style={{ top: position.top, left: position.left }}
        >
            <div className="bg-carnet-paper-2 rounded-xl shadow-[0_8px_30px_rgba(26,26,24,0.12)] border border-carnet-rule p-1.5 flex items-center gap-1 font-dm-sans">
                <button
                    onClick={() => {
                        onExplain(selectedText);
                        setVisible(false);
                    }}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-pr-orange-dark hover:bg-pr-orange-pale transition-colors whitespace-nowrap"
                    title="Expliquer avec l'IA"
                >
                    <Bot className="h-4 w-4" />
                    <span className="hidden sm:inline">
                        {subjectIcons[subject || ''] || '🤖'} Expliquer
                    </span>
                    <span className="inline sm:hidden">
                        {subjectIcons[subject || ''] || '🤖'}
                    </span>
                </button>

                <div className="w-px h-6 bg-pr-gray-light" />

                <button
                    onClick={() => {
                        onAddNote(selectedText);
                        setVisible(false);
                    }}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-pr-gray-dark hover:bg-pr-gray-bg transition-colors whitespace-nowrap"
                    title="Ajouter une note"
                >
                    <StickyNote className="h-4 w-4" />
                    <span className="hidden sm:inline">Note</span>
                </button>

                <div className="w-px h-6 bg-pr-gray-light" />

                <button
                    onClick={() => {
                        onHighlight(selectedText);
                        setVisible(false);
                    }}
                    className="flex items-center gap-1.5 px-3 py-2 rounded-lg text-sm font-medium text-pr-orange hover:bg-pr-orange-pale transition-colors whitespace-nowrap"
                    title="Surligner"
                >
                    <Highlighter className="h-4 w-4" />
                    <span className="hidden sm:inline">Surligner</span>
                </button>
            </div>
        </div>
    );
};

export default TextSelectionPopover;
