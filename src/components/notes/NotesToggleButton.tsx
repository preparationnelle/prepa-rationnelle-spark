import React from 'react';
import { StickyNote } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useAuth } from '@/context/AuthContext';

interface NotesToggleButtonProps {
    notesCount: number;
    onClick: () => void;
    isOpen: boolean;
}

const NotesToggleButton: React.FC<NotesToggleButtonProps> = ({ notesCount, onClick, isOpen }) => {
    const { currentUser } = useAuth();

    if (!currentUser) return null;

    return (
        <button
            onClick={onClick}
            className={cn(
                "fixed bottom-20 right-4 z-[50] h-12 w-12 rounded-full shadow-lg flex items-center justify-center transition-all duration-200 group",
                isOpen
                    ? "bg-amber-500 text-white scale-110"
                    : "bg-white text-amber-600 hover:bg-amber-50 hover:shadow-xl border border-amber-200"
            )}
            title="Mes notes"
        >
            <StickyNote className="h-5 w-5" />
            {notesCount > 0 && !isOpen && (
                <span className="absolute -top-1 -right-1 h-5 w-5 bg-amber-500 text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-sm">
                    {notesCount > 9 ? '9+' : notesCount}
                </span>
            )}
        </button>
    );
};

export default NotesToggleButton;
