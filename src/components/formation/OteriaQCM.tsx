import React, { useState } from 'react';
import { CheckCircle, XCircle, Eye, EyeOff, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/context/AuthContext';
import { supabase } from '@/integrations/supabase/client';
import { cn } from '@/lib/utils';
import { LatexRenderer } from '@/components/LatexRenderer';

export interface QCMQuestion {
    id: number;
    question: string;
    options: {
        id: string;
        text: string;
        correct: boolean;
    }[];
    explanation: string;
}

interface OteriaQCMProps {
    questions: QCMQuestion[];
    title: string;
    qcmId: string; // Unique ID for saving results (e.g., 'oteria-session-3')
}

export const OteriaQCM: React.FC<OteriaQCMProps> = ({ questions, title, qcmId }) => {
    const { currentUser } = useAuth();
    const [answers, setAnswers] = useState<Record<number, string>>({});
    const [showResults, setShowResults] = useState(false);
    const [showExplanations, setShowExplanations] = useState(false);
    const [saveMessage, setSaveMessage] = useState('');

    const handleAnswerSelect = (questionId: number, optionId: string) => {
        setAnswers(prev => ({
            ...prev,
            [questionId]: optionId
        }));
    };

    const calculateScore = () => {
        let correct = 0;
        questions.forEach(question => {
            const selectedOption = question.options.find(opt => opt.id === answers[question.id]);
            if (selectedOption?.correct) {
                correct++;
            }
        });
        return { correct, total: questions.length };
    };

    const handleValidation = async () => {
        setShowResults(true);
        const { correct, total } = calculateScore();
        const scorePercentage = Math.round((correct / total) * 100);

        if (currentUser) {
            try {
                const { error } = await supabase
                    .from('qcm_results')
                    .insert({
                        user_id: currentUser.id,
                        qcm_id: qcmId,
                        title: title,
                        score: scorePercentage,
                        total_questions: total,
                        correct_answers: correct
                    });

                if (error) throw error;
                setSaveMessage('✓ Résultat enregistré dans votre dashboard');
            } catch (error) {
                console.error('Erreur sauvegarde:', error);
                setSaveMessage('Erreur lors de la sauvegarde du résultat.');
            }
        }
    };

    const resetQCM = () => {
        setAnswers({});
        setShowResults(false);
        setShowExplanations(false);
        setSaveMessage('');
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const { correct, total } = calculateScore();
    const scorePercentage = total > 0 ? Math.round((correct / total) * 100) : 0;
    const answeredCount = Object.keys(answers).length;

    return (
        <div className="max-w-4xl mx-auto space-y-8">
            {/* Header du QCM */}
            <div className="border border-slate-200 rounded-lg p-6 bg-white shadow-sm">
                <div className="flex items-center justify-between mb-4">
                    <h2 className="text-xl font-bold text-slate-900">
                        {title}
                    </h2>
                    {showResults && (
                        <div className={cn(
                            "px-4 py-2 rounded-full text-sm font-bold",
                            scorePercentage >= 80 && "bg-emerald-100 text-emerald-800",
                            scorePercentage >= 60 && scorePercentage < 80 && "bg-amber-100 text-amber-800",
                            scorePercentage < 60 && "bg-red-100 text-red-800"
                        )}>
                            {correct}/{total} ({scorePercentage}%)
                        </div>
                    )}
                </div>

                <div className="flex flex-wrap gap-3">
                    {!showResults ? (
                        <Button
                            onClick={handleValidation}
                            disabled={answeredCount < questions.length}
                            className="bg-slate-900 hover:bg-slate-800 text-white"
                        >
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Valider ({answeredCount}/{questions.length})
                        </Button>
                    ) : (
                        <>
                            <Button
                                onClick={() => setShowExplanations(!showExplanations)}
                                variant="outline"
                                className="border-slate-300 text-slate-700 hover:bg-slate-50"
                            >
                                {showExplanations ? <EyeOff className="h-4 w-4 mr-2" /> : <Eye className="h-4 w-4 mr-2" />}
                                {showExplanations ? 'Masquer' : 'Afficher'} les explications
                            </Button>
                            <Button
                                onClick={resetQCM}
                                variant="outline"
                                className="border-slate-300 text-slate-700 hover:bg-slate-50"
                            >
                                <RotateCcw className="h-4 w-4 mr-2" />
                                Recommencer
                            </Button>
                        </>
                    )}
                </div>

                {saveMessage && (
                    <div className={cn(
                        "mt-4 text-sm font-medium",
                        saveMessage.includes('Erreur') ? 'text-red-600' : 'text-emerald-600'
                    )}>
                        {saveMessage}
                    </div>
                )}
            </div>

            {/* Questions */}
            {questions.map((question, index) => {
                const userAnswer = answers[question.id];
                const isAnswered = userAnswer !== undefined;

                return (
                    <div key={question.id} className="border border-slate-200 rounded-lg overflow-hidden bg-white shadow-sm">
                        {/* Question header */}
                        <div className="bg-slate-50 border-b border-slate-200 px-6 py-4">
                            <div className="flex items-start gap-3">
                                <span className="flex-shrink-0 w-7 h-7 bg-slate-900 text-white rounded-full flex items-center justify-center text-sm font-bold">
                                    {index + 1}
                                </span>
                                <div className="text-slate-900 font-medium leading-relaxed pt-0.5">
                                    <LatexRenderer latex={question.question} />
                                </div>
                            </div>
                        </div>

                        {/* Choices */}
                        <div className="p-6 space-y-3">
                            {question.options.map((option) => {
                                const isSelected = userAnswer === option.id;
                                const isCorrect = option.correct;
                                const showCorrectAnswer = showResults && isCorrect;
                                const showWrongAnswer = showResults && isSelected && !isCorrect;

                                return (
                                    <div
                                        key={option.id}
                                        onClick={() => !showResults && handleAnswerSelect(question.id, option.id)}
                                        className={cn(
                                            "p-4 rounded-lg border-2 transition-all duration-200",
                                            !showResults && "cursor-pointer hover:border-slate-400",
                                            showResults && "cursor-default",
                                            showCorrectAnswer && "border-emerald-500 bg-emerald-50",
                                            showWrongAnswer && "border-red-500 bg-red-50",
                                            !showCorrectAnswer && !showWrongAnswer && isSelected && "border-slate-400 bg-slate-50",
                                            !showCorrectAnswer && !showWrongAnswer && !isSelected && "border-slate-200 bg-white"
                                        )}
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className={cn(
                                                "w-5 h-5 rounded-full border-2 flex items-center justify-center flex-shrink-0",
                                                showCorrectAnswer && "border-emerald-600 bg-emerald-600",
                                                showWrongAnswer && "border-red-600 bg-red-600",
                                                !showCorrectAnswer && !showWrongAnswer && isSelected && "border-slate-600 bg-slate-600",
                                                !showCorrectAnswer && !showWrongAnswer && !isSelected && "border-slate-300"
                                            )}>
                                                {(isSelected || showCorrectAnswer) && (
                                                    <div className="w-2 h-2 bg-white rounded-full"></div>
                                                )}
                                            </div>
                                            <span className={cn(
                                                "text-sm font-medium flex-1",
                                                showCorrectAnswer && "text-emerald-900",
                                                showWrongAnswer && "text-red-900",
                                                !showCorrectAnswer && !showWrongAnswer && "text-slate-700"
                                            )}>
                                                <LatexRenderer latex={option.text} />
                                            </span>
                                            {showCorrectAnswer && <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />}
                                            {showWrongAnswer && <XCircle className="h-5 w-5 text-red-600 flex-shrink-0" />}
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Explication */}
                        {showResults && showExplanations && (
                            <div className="px-6 pb-6">
                                <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                                    <h4 className="text-sm font-bold text-slate-900 mb-2 uppercase tracking-wide">
                                        💡 Explication
                                    </h4>
                                    <div className="text-sm text-slate-700 leading-relaxed">
                                        <LatexRenderer latex={question.explanation} />
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};
