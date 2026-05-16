import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import {
    Target,
    Loader2,
    Sparkles,
    CheckCircle2,
    AlertTriangle,
    TrendingUp,
    Lightbulb,
    Mic,
    Keyboard
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';
import { VoiceRecorder } from '@/components/voice/VoiceRecorder';

interface EvaluationResult {
    globalScore: number;
    pertinenceScore: number;
    efficaciteScore: number;
    originaliteScore: number;
    hookType: string;
    strengths: string[];
    improvements: string[];
    suggestions: string[];
    fatalErrors: string[];
    improvedProposal?: string;
}

interface CultureGeneraleHookEvaluatorProps {
    subjectFromParent?: string;
    year: 1 | 2;
}

export const CultureGeneraleHookEvaluator = ({ subjectFromParent, year }: CultureGeneraleHookEvaluatorProps) => {
    const [hook, setHook] = useState('');
    const [subject, setSubject] = useState(subjectFromParent || '');
    const [isEvaluating, setIsEvaluating] = useState(false);
    const [evaluation, setEvaluation] = useState<EvaluationResult | null>(null);
    const [isVoiceMode, setIsVoiceMode] = useState(false);
    const { toast } = useToast();
    const { currentUser } = useAuth();

    const loadExample = () => {
        if (!subjectFromParent) {
            setSubject(year === 1 ? "La liberté est-elle absence de contraintes ?" : "L'homme est-il un animal comme les autres ?");
        }
        if (year === 1) {
            setHook('Rousseau affirme dans Le Contrat social que « l\'obéissance à la loi qu\'on s\'est prescrite est liberté ». Cette formule paradoxale nous invite à repenser la liberté non comme simple absence d\'entraves, mais comme autonomie rationnelle. Comment concilier la soumission à des contraintes et l\'exercice d\'une liberté authentique ?');
        } else {
            setHook('Lorsque Pascal écrit que « l\'homme n\'est ni ange ni bête, et le malheur veut que qui veut faire l\'ange fait la bête », il dessine la frontière vacillante de notre humanité. Si l\'éthologie contemporaine prête aux grands singes culture, deuil et empathie, qu\'est-ce qui sépare encore l\'humain de l\'animal ? Le propre de l\'homme tient-il à une nature, ou à une vigilance toujours à reconquérir ?');
        }
    };

    const handleEvaluate = async () => {
        if (!hook.trim() || !subject.trim()) {
            toast({
                title: "Erreur",
                description: "Veuillez remplir au minimum l'accroche et le sujet",
                variant: "destructive",
            });
            return;
        }

        setIsEvaluating(true);

        try {
            const { data, error } = await supabase.functions.invoke('generate-culture-generale-hook', {
                body: {
                    hook: hook.trim(),
                    subject: subject.trim(),
                    year,
                    userId: currentUser?.id || null,
                },
            });

            if (error) {
                console.error('Error evaluating hook:', error);
                toast({
                    title: "Erreur",
                    description: error.message || "Erreur lors de l'évaluation",
                    variant: "destructive",
                });
                return;
            }

            setEvaluation(data);
            toast({
                title: "Succès",
                description: "Accroche évaluée avec succès !",
            });

        } catch (error) {
            console.error('Error:', error);
            toast({
                title: "Erreur",
                description: "Une erreur s'est produite lors de l'évaluation",
                variant: "destructive",
            });
        } finally {
            setIsEvaluating(false);
        }
    };

    return (
        <div className="space-y-6">
            {/* Header + form card — style carnet */}
            <div className="carnet-card overflow-hidden">
                <div className="px-7 pt-7 pb-5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
                        <Target className="h-5 w-5 text-carnet-red" />
                    </div>
                    <div>
                        <div className="carnet-eyebrow text-[11px] mb-1">Culture générale</div>
                        <h2 className="font-lora text-[26px] text-carnet-ink leading-none">
                            Évaluateur <em className="font-lora italic text-carnet-red">d'accroche</em>
                        </h2>
                        <p className="text-carnet-ink-mute font-instrument text-sm mt-1.5">
                            Évalue la pertinence de ton accroche de dissertation.
                        </p>
                    </div>
                </div>

                <hr className="carnet-divider mx-7" />

                <div className="px-7 pt-6 pb-7 space-y-6">
                    {/* Subject */}
                    <div className="space-y-3">
                        <div className="flex items-baseline justify-between gap-3 flex-wrap">
                            <div className="flex items-baseline gap-3">
                                <span className="carnet-hand text-[28px] text-carnet-red leading-none font-semibold">1</span>
                                <label htmlFor="hook-subject" className="font-lora text-[18px] text-carnet-ink">
                                    Sujet <em className="font-lora italic text-carnet-red">de dissertation</em>
                                </label>
                            </div>
                            {subjectFromParent && (
                                <span className="carnet-eyebrow text-[10px] inline-flex items-center px-2.5 py-1 bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.25)] rounded-full">
                                    Sujet imposé
                                </span>
                            )}
                        </div>
                        <div className={`flex bg-carnet-paper-2 rounded-md border border-dashed transition-colors ${subjectFromParent ? 'border-[rgba(78,55,30,0.14)] opacity-90' : 'border-[rgba(78,55,30,0.18)] focus-within:border-carnet-red'}`}>
                            <Input
                                id="hook-subject"
                                placeholder="Saisis ton sujet…"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                readOnly={!!subjectFromParent}
                                className="flex-1 border-0 bg-transparent h-12 py-3 px-4 text-base placeholder:text-carnet-ink-mute focus-visible:ring-0 rounded-md font-instrument text-carnet-ink"
                            />
                        </div>
                    </div>

                    {/* Hook */}
                    <div className="space-y-3">
                        <div className="flex items-baseline justify-between gap-3 flex-wrap">
                            <div className="flex items-baseline gap-3">
                                <span className="carnet-hand text-[28px] text-carnet-red leading-none font-semibold">2</span>
                                <label htmlFor="hook" className="font-lora text-[18px] text-carnet-ink">
                                    Ton <em className="font-lora italic text-carnet-red">accroche</em>
                                </label>
                            </div>
                            <Button
                                type="button"
                                size="sm"
                                onClick={() => setIsVoiceMode(!isVoiceMode)}
                                className="bg-carnet-paper-2 text-carnet-ink-soft border border-dashed border-[rgba(78,55,30,0.18)] hover:bg-[rgba(193,68,58,0.06)] hover:text-carnet-red hover:border-[rgba(193,68,58,0.25)] rounded-md font-instrument text-sm flex items-center gap-2 h-8 px-3"
                            >
                                {isVoiceMode ? (
                                    <>
                                        <Keyboard className="h-3.5 w-3.5" />
                                        <span>Écrit</span>
                                    </>
                                ) : (
                                    <>
                                        <Mic className="h-3.5 w-3.5" />
                                        <span>Oral</span>
                                    </>
                                )}
                            </Button>
                        </div>

                        {isVoiceMode ? (
                            <div className="min-h-[140px] flex items-center justify-center bg-carnet-paper-2 rounded-md border border-dashed border-[rgba(78,55,30,0.18)]">
                                <VoiceRecorder
                                    language="fr"
                                    onTranscriptionComplete={(text) => {
                                        setHook(text);
                                        setIsVoiceMode(false);
                                    }}
                                />
                            </div>
                        ) : (
                            <div className="bg-carnet-paper-2 rounded-md border border-dashed border-[rgba(78,55,30,0.18)] focus-within:border-carnet-red transition-colors">
                                <Textarea
                                    id="hook"
                                    placeholder="Écris ton accroche ici…"
                                    value={hook}
                                    onChange={(e) => setHook(e.target.value)}
                                    className="min-h-[140px] resize-y border-0 bg-transparent rounded-md text-[15px] leading-relaxed p-4 focus-visible:ring-0 font-instrument text-carnet-ink placeholder:text-carnet-ink-mute"
                                />
                            </div>
                        )}

                        <div className="text-[13px] text-carnet-ink-mute font-instrument">
                            <span className="font-semibold text-carnet-ink tabular-nums">{hook.length}</span> caractères · ~{Math.ceil(hook.length / 100)} lignes estimées
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <Button
                            onClick={handleEvaluate}
                            disabled={isEvaluating || !hook.trim() || !subject.trim()}
                            className="flex-1 bg-carnet-red hover:bg-carnet-red-deep text-carnet-paper rounded-md h-12 text-[15px] font-instrument font-semibold transition-all duration-200 disabled:opacity-50"
                        >
                            {isEvaluating ? (
                                <>
                                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                                    Évaluation en cours…
                                </>
                            ) : (
                                <>
                                    <Sparkles className="h-4 w-4 mr-2" />
                                    Évaluer mon accroche
                                </>
                            )}
                        </Button>

                        <Button
                            onClick={loadExample}
                            className="bg-carnet-paper-2 text-carnet-ink-soft border border-dashed border-[rgba(78,55,30,0.18)] hover:bg-[rgba(193,68,58,0.06)] hover:text-carnet-red hover:border-[rgba(193,68,58,0.25)] rounded-md h-12 px-5 font-instrument font-medium transition-colors"
                        >
                            Exemple
                        </Button>
                    </div>
                </div>
            </div>

            {/* Results */}
            {evaluation && (
                <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {/* Fatal Errors */}
                    {evaluation.fatalErrors.length > 0 && (
                        <div className="carnet-card overflow-hidden border-l-[3px] border-l-carnet-red">
                            <div className="px-6 py-5 flex items-start gap-3">
                                <AlertTriangle className="h-5 w-5 text-carnet-red flex-shrink-0 mt-0.5" />
                                <div className="flex-1">
                                    <div className="carnet-eyebrow text-[10px] mb-2">Erreurs critiques détectées</div>
                                    <ul className="space-y-1.5 font-instrument text-[14px] text-carnet-ink-soft">
                                        {evaluation.fatalErrors.map((error, idx) => (
                                            <li key={idx} className="flex gap-2">
                                                <span className="text-carnet-red mt-1">·</span>
                                                <span>{error}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    )}

                    {/* Global Score */}
                    <div className="carnet-card overflow-hidden">
                        <div className="p-7 flex items-center justify-between gap-4 flex-wrap">
                            <div>
                                <div className="carnet-eyebrow text-[10px] mb-1">Score global</div>
                                <div className="text-[14px] text-carnet-ink-mute font-instrument">
                                    Type d'accroche : <span className="carnet-hl font-lora italic text-carnet-ink">{evaluation.hookType}</span>
                                </div>
                            </div>
                            <div className="leading-none flex items-baseline">
                                <span className="carnet-hand text-[68px] text-carnet-red font-semibold leading-none">{evaluation.globalScore}</span>
                                <span className="font-lora italic text-2xl text-carnet-ink-mute ml-1">/20</span>
                            </div>
                        </div>
                    </div>

                    {/* Detailed Scores */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { label: 'Pertinence', value: evaluation.pertinenceScore, max: 8, hint: 'Adéquation au sujet' },
                            { label: 'Efficacité', value: evaluation.efficaciteScore, max: 6, hint: 'Concision & dynamisme' },
                            { label: 'Originalité', value: evaluation.originaliteScore, max: 6, hint: 'Culture & démarquage' },
                        ].map((s, idx) => (
                            <div key={idx} className="carnet-card p-5 text-center">
                                <div className="carnet-eyebrow text-[10px] mb-2">{s.label}</div>
                                <div className="leading-none flex items-baseline justify-center">
                                    <span className="carnet-hand text-[44px] text-carnet-red font-semibold">{s.value}</span>
                                    <span className="font-lora italic text-xl text-carnet-ink-mute ml-1">/{s.max}</span>
                                </div>
                                <div className="text-[12px] text-carnet-ink-mute mt-2 font-instrument">{s.hint}</div>
                            </div>
                        ))}
                    </div>

                    {/* Strengths */}
                    {evaluation.strengths.length > 0 && (
                        <div className="carnet-card overflow-hidden">
                            <div className="px-6 pt-5 pb-3">
                                <div className="carnet-eyebrow text-[10px] flex items-center gap-2">
                                    <CheckCircle2 className="h-3.5 w-3.5 text-carnet-red" />
                                    Points forts
                                </div>
                            </div>
                            <div className="px-6 pb-6">
                                <ul className="space-y-2.5">
                                    {evaluation.strengths.map((strength, idx) => (
                                        <li key={idx} className="flex items-start gap-3 font-instrument text-carnet-ink-soft text-[14px]">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-carnet-red flex-shrink-0" />
                                            <span className="leading-relaxed">{strength}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    {/* Improvements */}
                    {evaluation.improvements.length > 0 && (
                        <div className="carnet-card overflow-hidden">
                            <div className="px-6 pt-5 pb-3">
                                <div className="carnet-eyebrow text-[10px] flex items-center gap-2">
                                    <TrendingUp className="h-3.5 w-3.5 text-carnet-red" />
                                    Axes d'amélioration
                                </div>
                            </div>
                            <div className="px-6 pb-6">
                                <ul className="space-y-2.5">
                                    {evaluation.improvements.map((improvement, idx) => (
                                        <li key={idx} className="flex items-start gap-3 font-instrument text-carnet-ink-soft text-[14px]">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-carnet-red flex-shrink-0" />
                                            <span className="leading-relaxed">{improvement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    {/* Suggestions */}
                    {evaluation.suggestions.length > 0 && (
                        <div className="carnet-card overflow-hidden border-l-[3px] border-l-carnet-red">
                            <div className="px-6 pt-5 pb-3">
                                <div className="carnet-eyebrow text-[10px] flex items-center gap-2">
                                    <Lightbulb className="h-3.5 w-3.5 text-carnet-red" />
                                    Suggestions concrètes
                                </div>
                            </div>
                            <div className="px-6 pb-6">
                                <ul className="space-y-2.5">
                                    {evaluation.suggestions.map((suggestion, idx) => (
                                        <li key={idx} className="flex items-start gap-3 font-instrument text-carnet-ink-soft text-[14px]">
                                            <Lightbulb className="h-4 w-4 text-carnet-red mt-0.5 shrink-0" />
                                            <span className="leading-relaxed">{suggestion}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    )}

                    {/* Improved Proposal */}
                    {evaluation.improvedProposal && (
                        <div className="carnet-card overflow-hidden">
                            <div className="px-6 pt-5 pb-3">
                                <div className="carnet-eyebrow text-[10px] flex items-center gap-2">
                                    <Sparkles className="h-3.5 w-3.5 text-carnet-red" />
                                    Proposition d'accroche améliorée
                                </div>
                            </div>
                            <div className="px-6 pb-6 space-y-3">
                                <div className="bg-carnet-paper-2 p-6 rounded-md border border-dashed border-[rgba(193,68,58,0.3)]">
                                    <p className="font-lora italic text-[17px] leading-[1.65] text-carnet-ink">
                                        « {evaluation.improvedProposal} »
                                    </p>
                                </div>
                                <div className="text-[12px] text-carnet-red flex items-center gap-2 font-instrument font-medium">
                                    <CheckCircle2 className="h-3.5 w-3.5" />
                                    Version corrigée et optimisée
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};
