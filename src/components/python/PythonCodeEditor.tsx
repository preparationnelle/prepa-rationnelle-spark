import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Loader2, Send } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

interface PythonCodeEditorProps {
    exerciseStatement: string;
    expectedSolution: string;
    moduleId: string;
    exerciseId: string;
    onEvaluationComplete?: (result: EvaluationResult) => void;
}

export interface EvaluationResult {
    isFunctional: boolean;
    score: number;
    feedback: string;
    suggestedCorrection: string;
}

const PythonCodeEditor: React.FC<PythonCodeEditorProps> = ({
    exerciseStatement,
    expectedSolution,
    moduleId,
    exerciseId,
    onEvaluationComplete
}) => {
    const [code, setCode] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const { toast } = useToast();

    const handleSubmit = async () => {
        if (!code.trim()) {
            toast({
                title: "Code vide",
                description: "Veuillez entrer votre code Python avant de soumettre.",
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
                    description: "Vous devez être connecté pour soumettre votre code.",
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
                throw new Error(response.error.message || 'Erreur lors de l\'évaluation');
            }

            const result: EvaluationResult = response.data;

            toast({
                title: "Évaluation terminée",
                description: `Note : ${result.score}/20`,
            });

            if (onEvaluationComplete) {
                onEvaluationComplete(result);
            }
        } catch (error: any) {
            console.error('Evaluation error:', error);
            toast({
                title: "Erreur",
                description: error.message || "Une erreur est survenue lors de l'évaluation.",
                variant: "destructive"
            });
        } finally {
            setIsLoading(false);
        }
    };

    const lines = code.split('\n');
    const lineCount = Math.max(lines.length, 1);

    return (
        <div className="mt-6 mb-4">
            <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-600">Votre code</span>
                <Button
                    onClick={handleSubmit}
                    disabled={isLoading || !code.trim()}
                    size="sm"
                    className="bg-gray-800 hover:bg-gray-900 text-white text-xs h-8 px-4"
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="h-3 w-3 mr-1.5 animate-spin" />
                            Évaluation...
                        </>
                    ) : (
                        <>
                            <Send className="h-3 w-3 mr-1.5" />
                            Valider
                        </>
                    )}
                </Button>
            </div>
            <div className="relative bg-[#1e293b] rounded-lg overflow-hidden border border-gray-700">
                <div className="flex">
                    {/* Line numbers */}
                    <div className="py-3 px-2 text-right select-none bg-[#0f172a] min-w-[32px]">
                        {Array.from({ length: lineCount }, (_, i) => (
                            <div key={i} className="text-gray-500 text-xs font-mono leading-5">
                                {i + 1}
                            </div>
                        ))}
                    </div>
                    {/* Editor */}
                    <textarea
                        value={code}
                        onChange={(e) => setCode(e.target.value)}
                        placeholder="# Écrivez votre code Python ici..."
                        className="flex-1 bg-transparent text-gray-100 font-mono text-sm p-3 min-h-[120px] resize-y outline-none placeholder-gray-500 leading-5"
                        spellCheck={false}
                        disabled={isLoading}
                    />
                </div>
            </div>
        </div>
    );
};

export default PythonCodeEditor;
