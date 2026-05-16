import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';
import type { EvaluationResult } from './PythonCodeEditor';

interface CodeEvaluationResultProps {
    result: EvaluationResult;
}

const CodeEvaluationResult: React.FC<CodeEvaluationResultProps> = ({ result }) => {
    const { isFunctional, score, feedback, suggestedCorrection } = result;

    return (
        <div className="mb-6 animate-in fade-in duration-300 font-instrument">
            {/* Compact result bar */}
            <div className="carnet-card p-4">
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        {isFunctional ? (
                            <CheckCircle2 className="h-5 w-5 text-carnet-red flex-shrink-0" />
                        ) : (
                            <XCircle className="h-5 w-5 text-carnet-ink-mute flex-shrink-0" />
                        )}
                        <div>
                            <span
                                className={`text-sm font-semibold ${
                                    isFunctional
                                        ? 'text-carnet-red carnet-hl'
                                        : 'text-carnet-ink-mute'
                                }`}
                            >
                                {isFunctional ? 'Code fonctionnel' : 'À corriger'}
                            </span>
                        </div>
                    </div>
                    <div className="px-3 py-1 rounded-full text-sm font-semibold bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.2)] text-carnet-red">
                        {score}/20
                    </div>
                </div>

                {/* Feedback */}
                <p className="text-sm text-carnet-ink-soft mt-3 leading-relaxed">{feedback}</p>
            </div>

            {/* Suggested correction — toujours visible, jamais repliée */}
            {suggestedCorrection && (
                <div className="mt-3 rounded overflow-hidden border border-[rgba(78,55,30,0.18)]">
                    <div className="bg-carnet-paper-2 px-3 py-2 text-[10px] font-semibold uppercase tracking-[0.12em] text-carnet-red border-b border-dashed border-[rgba(78,55,30,0.18)]">
                        Correction suggérée
                    </div>
                    <div className="bg-carnet-ink overflow-x-auto">
                        <pre className="text-carnet-paper/90 font-mono text-xs p-3 leading-5">
                            <code>{suggestedCorrection}</code>
                        </pre>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CodeEvaluationResult;
