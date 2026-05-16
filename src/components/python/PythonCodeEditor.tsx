import React, {
    useState,
    useRef,
    useEffect,
    useImperativeHandle,
    forwardRef,
    KeyboardEvent,
} from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, Send } from 'lucide-react';
import { cn } from '@/lib/utils';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface PythonCodeEditorProps {
    exerciseStatement: string;
    expectedSolution: string;
    moduleId: string;
    exerciseId: string;
    onEvaluationComplete?: (result: EvaluationResult) => void;
    onStateChange?: (state: { isLoading: boolean; hasCode: boolean }) => void;
    embedded?: boolean;
    minHeight?: number;
    autoFocus?: boolean;
}

export interface EvaluationResult {
    isFunctional: boolean;
    score: number;
    feedback: string;
    suggestedCorrection: string;
}

export interface PythonCodeEditorHandle {
    submit: () => void;
}

const PythonCodeEditor = forwardRef<PythonCodeEditorHandle, PythonCodeEditorProps>(({
    exerciseStatement,
    expectedSolution,
    moduleId,
    exerciseId,
    onEvaluationComplete,
    onStateChange,
    embedded = false,
    minHeight = 200,
    autoFocus = false,
}, ref) => {
    const [code, setCode] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();
    const textareaRef = useRef<HTMLTextAreaElement | null>(null);

    useEffect(() => {
        setCode('');
    }, [exerciseId, moduleId]);

    useEffect(() => {
        if (autoFocus && textareaRef.current) {
            textareaRef.current.focus();
        }
    }, [autoFocus, exerciseId]);

    useEffect(() => {
        onStateChange?.({ isLoading, hasCode: code.trim().length > 0 });
    }, [isLoading, code, onStateChange]);

    const handleSubmit = async () => {
        if (!code.trim()) {
            toast({
                title: "Code vide",
                description: "Écris ton code Python avant de valider.",
                variant: "destructive"
            });
            return;
        }

        setIsLoading(true);

        try {
            const { data: { session } } = await supabase.auth.getSession();

            if (!session) {
                toast({
                    title: "Non connecté",
                    description: "Tu dois être connecté pour soumettre ton code.",
                    variant: "destructive"
                });
                return;
            }

            const response = await supabase.functions.invoke('evaluate-python-code', {
                body: {
                    exerciseStatement,
                    expectedSolution,
                    userCode: code,
                    moduleId,
                    exerciseId
                }
            });

            if (response.error) {
                throw new Error(response.error.message || "Erreur lors de l'évaluation");
            }

            const result: EvaluationResult = response.data;

            toast({
                title: "Évaluation terminée",
                description: `Note : ${result.score}/20`,
            });

            if (onEvaluationComplete) {
                onEvaluationComplete(result);
            }
        } catch (error) {
            console.error('Evaluation error:', error);
            toast({
                title: "Erreur",
                description: error instanceof Error ? error.message : "Une erreur est survenue lors de l'évaluation.",
                variant: "destructive"
            });
        } finally {
            setIsLoading(false);
        }
    };

    useImperativeHandle(ref, () => ({ submit: handleSubmit }));

    const handleKeyDown = (e: KeyboardEvent<HTMLTextAreaElement>) => {
        if ((e.metaKey || e.ctrlKey) && e.key === 'Enter') {
            e.preventDefault();
            handleSubmit();
        }
    };

    const lines = code.split('\n');
    const lineCount = Math.max(lines.length, 1);

    const editor = (
        <div
            className="relative bg-carnet-ink rounded overflow-hidden border border-[rgba(78,55,30,0.18)] flex-1 flex flex-col"
            style={{ minHeight }}
        >
            <div className="flex flex-1">
                <div className="py-3 px-2 text-right select-none bg-black/30 min-w-[32px]">
                    {Array.from({ length: lineCount }, (_, i) => (
                        <div key={i} className="text-carnet-paper/40 text-xs font-mono leading-5">
                            {i + 1}
                        </div>
                    ))}
                </div>
                <textarea
                    ref={textareaRef}
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="# Écris ton code Python ici…  (⌘/Ctrl + ↵ pour valider)"
                    className="flex-1 bg-transparent text-carnet-paper/90 font-mono text-sm p-3 pb-14 resize-none outline-none placeholder:text-carnet-paper/40 leading-5 w-full"
                    spellCheck={false}
                    disabled={isLoading}
                    style={{ minHeight }}
                />
            </div>

            {/* Floating Valider — anchored bottom-right inside the code zone */}
            <Button
                onClick={handleSubmit}
                disabled={isLoading || !code.trim()}
                size="sm"
                className="absolute bottom-3 right-3 bg-carnet-red hover:bg-carnet-red-deep text-carnet-paper text-xs h-9 px-4 rounded-full font-instrument font-semibold gap-1.5 disabled:opacity-40 disabled:bg-carnet-ink-mute"
            >
                {isLoading ? (
                    <>
                        <Loader2 className="h-3.5 w-3.5 animate-spin" />
                        Évaluation…
                    </>
                ) : (
                    <>
                        <Send className="h-3.5 w-3.5" />
                        Valider
                        <kbd className="ml-1 hidden sm:inline-flex items-center gap-0.5 text-[10px] opacity-80 font-sans">
                            ⌘↵
                        </kbd>
                    </>
                )}
            </Button>
        </div>
    );

    if (embedded) {
        return (
            <div className="flex flex-col flex-1 h-full font-instrument">
                {editor}
            </div>
        );
    }

    return (
        <div className={cn('mt-6 mb-4 font-instrument')}>
            {editor}
        </div>
    );
});

PythonCodeEditor.displayName = 'PythonCodeEditor';

export default PythonCodeEditor;
