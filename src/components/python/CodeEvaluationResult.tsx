import React, { useState } from 'react';
import { CheckCircle2, XCircle, ChevronDown, ChevronUp } from 'lucide-react';
import type { EvaluationResult } from './PythonCodeEditor';

interface CodeEvaluationResultProps {
    result: EvaluationResult;
}

const CodeEvaluationResult: React.FC<CodeEvaluationResultProps> = ({ result }) => {
    const { isFunctional, score, feedback, suggestedCorrection } = result;
    const [showCorrection, setShowCorrection] = useState(false);

    const getScoreBg = () => {
        if (score >= 16) return 'bg-green-100 text-green-800';
        if (score >= 12) return 'bg-blue-100 text-blue-800';
        if (score >= 8) return 'bg-amber-100 text-amber-800';
        return 'bg-red-100 text-red-800';
    };

    return (
        <div className="mb-6 animate-in fade-in duration-300">
            {/* Compact result bar */}
            <div className={`rounded-lg p-4 ${isFunctional ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200'}`}>
                <div className="flex items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        {isFunctional ? (
                            <CheckCircle2 className="h-5 w-5 text-green-600 flex-shrink-0" />
                        ) : (
                            <XCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                        )}
                        <div>
                            <span className={`text-sm font-semibold ${isFunctional ? 'text-green-800' : 'text-red-800'}`}>
                                {isFunctional ? 'Code fonctionnel' : 'À corriger'}
                            </span>
                        </div>
                    </div>
                    <div className={`px-3 py-1 rounded-full text-sm font-bold ${getScoreBg()}`}>
                        {score}/20
                    </div>
                </div>

                {/* Feedback */}
                <p className="text-sm text-gray-700 mt-3 leading-relaxed">{feedback}</p>

                {/* Toggle for correction */}
                {suggestedCorrection && (
                    <button
                        onClick={() => setShowCorrection(!showCorrection)}
                        className="mt-3 flex items-center gap-1 text-xs font-medium text-gray-500 hover:text-gray-700 transition-colors"
                    >
                        {showCorrection ? (
                            <>
                                <ChevronUp className="h-3 w-3" />
                                Masquer la correction suggérée
                            </>
                        ) : (
                            <>
                                <ChevronDown className="h-3 w-3" />
                                Voir une correction suggérée
                            </>
                        )}
                    </button>
                )}
            </div>

            {/* Suggested correction (collapsed by default) */}
            {showCorrection && suggestedCorrection && (
                <div className="mt-2 rounded-lg overflow-hidden border border-gray-200 animate-in slide-in-from-top-2 duration-200">
                    <div className="bg-gray-100 px-3 py-2 text-xs font-medium text-gray-600">
                        Correction suggérée
                    </div>
                    <div className="bg-[#1e293b] overflow-x-auto">
                        <pre className="text-gray-100 font-mono text-xs p-3 leading-5">
                            <code>{suggestedCorrection}</code>
                        </pre>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CodeEvaluationResult;
