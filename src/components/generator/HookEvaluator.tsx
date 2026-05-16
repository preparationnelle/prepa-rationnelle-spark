import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from '@/components/ui/select';
import {
    Target,
    Loader2,
    Sparkles,
    Info,
    CheckCircle2,
    AlertTriangle,
    TrendingUp,
    Lightbulb,
    BookOpenCheck
} from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';
import { geopoliticsSubjects, subjectsByCategory, getCategoryName } from '@/data/geopolitics-subjects';

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

interface HookEvaluatorProps {
    subjectFromParent?: string;
}

export const HookEvaluator = ({ subjectFromParent }: HookEvaluatorProps) => {
    const [hook, setHook] = useState('');
    const [subject, setSubject] = useState(subjectFromParent || '');
    const [isEvaluating, setIsEvaluating] = useState(false);
    const [evaluation, setEvaluation] = useState<EvaluationResult | null>(null);
    const { toast } = useToast();
    const { currentUser } = useAuth();

    const loadExample = () => {
        if (!subjectFromParent) {
            setSubject("L'Afrique dans la mondialisation depuis 1990");
        }
        setHook('The Economist titrait en 2013 "The New Scramble for Africa", faisant écho au partage colonial du continent à la fin du XIXᵉ siècle. Cette nouvelle ruée vers l\'Afrique traduit une reconfiguration des influences internationales, où les anciennes puissances coloniales doivent composer avec des acteurs émergents comme la Chine, la Russie ou la Turquie.');
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
            const { data, error } = await supabase.functions.invoke('evaluate-hook', {
                body: {
                    hook: hook.trim(),
                    subject: subject.trim(),
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
            {/* Input Card */}
            <Card className="bg-carnet-paper-2 rounded-2xl border border-pr-gray-light overflow-hidden shadow-[0_2px_12px_rgba(26,26,24,0.04)]">
                <div className="h-[3px] w-full bg-pr-black" />
                <CardHeader className="px-6 pt-5 pb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-pr-gray-bg border border-pr-black-soft flex items-center justify-center">
                            <Target className="h-5 w-5 text-pr-black" />
                        </div>
                        <div>
                            <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pr-black mb-0.5">
                                Géopolitique
                            </div>
                            <CardTitle className="font-dm-serif text-2xl text-pr-black leading-none">
                                Évaluateur d'accroche
                            </CardTitle>
                            <div className="text-pr-gray-mid text-[13px] mt-1">
                                Évaluez la pertinence de votre accroche de dissertation.
                            </div>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="space-y-6 px-6 pb-6">
                    {/* Subject */}
                    <div className="space-y-3">
                        <div className="flex items-center justify-between gap-3">
                            <Label htmlFor="subject" className="text-[15px] font-semibold text-pr-black flex items-center gap-2">
                                <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-pr-gray-bg text-pr-black text-[11px] font-bold">
                                    1
                                </span>
                                Sujet de dissertation
                            </Label>
                            {subjectFromParent && (
                                <Badge className="bg-pr-gray-bg text-pr-black border border-pr-black-soft hover:bg-pr-gray-bg rounded-full font-semibold text-[11px] uppercase tracking-wider">
                                    Sujet imposé
                                </Badge>
                            )}
                        </div>
                        <div className="relative">
                            <Input
                                id="subject"
                                placeholder="Saisissez votre sujet ou choisissez dans la liste…"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                readOnly={!!subjectFromParent}
                                className={`text-[15px] h-12 rounded-xl pr-12 ${subjectFromParent ? 'bg-pr-gray-bg/40 border-pr-black-pale text-pr-gray-dark' : 'bg-carnet-paper-2 border-pr-gray-light focus:border-pr-black focus:ring-2 focus:ring-pr-black/20'} text-pr-black placeholder:text-pr-gray-mid transition-colors`}
                            />
                            {!subjectFromParent && (
                                <div className="absolute top-1 right-1">
                                    <Select onValueChange={(value) => setSubject(value)} value={Object.values(subjectsByCategory).flat().includes(subject) ? subject : undefined}>
                                        <SelectTrigger className="w-10 h-10 p-0 flex justify-center items-center bg-transparent border-0 hover:bg-pr-gray-bg rounded-lg transition-colors" title="Choisir un sujet prédéfini">
                                            <BookOpenCheck className="h-4 w-4 text-pr-black" />
                                        </SelectTrigger>
                                        <SelectContent className="max-h-[400px] bg-carnet-paper-2 border border-pr-gray-light shadow-xl rounded-xl">
                                            {Object.entries(subjectsByCategory).map(([category, subjects]) => (
                                                <SelectGroup key={category}>
                                                    <SelectLabel className="font-semibold text-pr-black sticky top-0 bg-carnet-paper-2 z-10 py-2 text-[11px] uppercase tracking-[0.12em]">
                                                        {getCategoryName(category as keyof typeof subjectsByCategory)}
                                                    </SelectLabel>
                                                    {subjects.map((subjectText, idx) => (
                                                        <SelectItem key={`${category}-${idx}`} value={subjectText} className="cursor-pointer hover:bg-pr-gray-bg focus:bg-pr-gray-bg rounded-md text-pr-black">
                                                            {subjectText}
                                                        </SelectItem>
                                                    ))}
                                                </SelectGroup>
                                            ))}
                                        </SelectContent>
                                    </Select>
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Hook */}
                    <div className="space-y-3">
                        <Label htmlFor="hook" className="text-[15px] font-semibold text-pr-black flex items-center gap-2">
                            <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-pr-gray-bg text-pr-black text-[11px] font-bold">
                                2
                            </span>
                            Votre accroche
                        </Label>
                        <Textarea
                            id="hook"
                            placeholder="Entrez votre accroche ici…"
                            value={hook}
                            onChange={(e) => setHook(e.target.value)}
                            className="min-h-[140px] resize-y border-pr-gray-light focus:border-pr-black focus:ring-2 focus:ring-pr-black/20 bg-carnet-paper-2 rounded-xl text-[15px] leading-relaxed p-4 transition-colors text-pr-black placeholder:text-pr-gray-mid"
                        />
                        <div className="text-[13px] text-pr-gray-mid">
                            <span className="font-semibold text-pr-black tabular-nums">{hook.length}</span> caractères · ~{Math.ceil(hook.length / 100)} lignes estimées
                        </div>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <Button
                            onClick={handleEvaluate}
                            disabled={isEvaluating || !hook.trim() || !subject.trim()}
                            className="flex-1 bg-pr-black hover:bg-pr-black-dark text-white font-semibold rounded-xl h-12 text-[15px] shadow-[0_4px_14px_rgba(244,132,95,0.35)] hover:shadow-[0_6px_20px_rgba(196,90,53,0.4)] transition-all duration-200 disabled:opacity-50 disabled:shadow-none"
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
                            className="bg-carnet-paper-2 border border-pr-gray-light text-pr-gray-dark hover:bg-pr-gray-bg hover:text-pr-black hover:border-pr-black-soft rounded-xl h-12 px-5 font-medium transition-colors"
                        >
                            Exemple
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Results */}
            {evaluation && (
                <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {/* Fatal Errors */}
                    {evaluation.fatalErrors.length > 0 && (
                        <Alert className="border border-pr-black bg-pr-black text-white rounded-2xl">
                            <AlertTriangle className="h-5 w-5 text-white" />
                            <AlertDescription className="text-white">
                                <div className="font-semibold mb-2 uppercase tracking-[0.10em] text-[12px]">Erreurs critiques détectées</div>
                                <ul className="list-disc list-inside space-y-1 text-[14px] opacity-90">
                                    {evaluation.fatalErrors.map((error, idx) => (
                                        <li key={idx}>{error}</li>
                                    ))}
                                </ul>
                            </AlertDescription>
                        </Alert>
                    )}

                    {/* Global Score */}
                    <Card className="bg-carnet-paper-2 rounded-2xl border border-pr-gray-light overflow-hidden shadow-[0_2px_12px_rgba(26,26,24,0.04)]">
                        <div className={`h-[3px] w-full ${(evaluation.globalScore / 20) * 100 >= 70 ? 'bg-pr-black' : 'bg-pr-black-soft'}`} />
                        <CardContent className="p-6 sm:p-8">
                            <div className="flex items-center justify-between gap-4 flex-wrap">
                                <div>
                                    <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pr-black mb-1">
                                        Score global
                                    </div>
                                    <div className="text-[14px] text-pr-gray-mid">
                                        Type d'accroche : <span className="font-semibold text-pr-black">{evaluation.hookType}</span>
                                    </div>
                                </div>
                                <div className="font-dm-serif text-pr-black leading-none">
                                    <span className="text-5xl">{evaluation.globalScore}</span>
                                    <span className="text-2xl text-pr-gray-mid">/20</span>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Detailed Scores */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        {[
                            { label: 'Pertinence', value: evaluation.pertinenceScore, max: 8, hint: 'Adéquation au sujet' },
                            { label: 'Efficacité', value: evaluation.efficaciteScore, max: 6, hint: 'Concision & dynamisme' },
                            { label: 'Originalité', value: evaluation.originaliteScore, max: 6, hint: 'Culture & démarquage' },
                        ].map((s, idx) => (
                            <Card key={idx} className="rounded-2xl border border-pr-gray-light bg-carnet-paper-2 shadow-[0_2px_12px_rgba(26,26,24,0.04)]">
                                <CardContent className="p-5 text-center">
                                    <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pr-black mb-2">
                                        {s.label}
                                    </div>
                                    <div className="font-dm-serif text-pr-black leading-none">
                                        <span className="text-4xl">{s.value}</span>
                                        <span className="text-xl text-pr-gray-mid">/{s.max}</span>
                                    </div>
                                    <div className="text-[12px] text-pr-gray-mid mt-2">{s.hint}</div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Strengths */}
                    {evaluation.strengths.length > 0 && (
                        <Card className="bg-carnet-paper-2 rounded-2xl border border-pr-gray-light shadow-[0_2px_12px_rgba(26,26,24,0.04)]">
                            <CardHeader className="px-6 pt-5 pb-3">
                                <CardTitle className="text-[11px] font-semibold text-pr-gray-mid uppercase tracking-[0.14em] flex items-center gap-2">
                                    <CheckCircle2 className="h-3.5 w-3.5 text-pr-black" />
                                    Points forts
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="px-6 pb-6">
                                <ul className="space-y-2.5">
                                    {evaluation.strengths.map((strength, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-pr-gray-dark text-[14px]">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-pr-black flex-shrink-0"></span>
                                            <span className="leading-relaxed">{strength}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    )}

                    {/* Improvements */}
                    {evaluation.improvements.length > 0 && (
                        <Card className="bg-carnet-paper-2 rounded-2xl border border-pr-gray-light shadow-[0_2px_12px_rgba(26,26,24,0.04)]">
                            <CardHeader className="px-6 pt-5 pb-3">
                                <CardTitle className="text-[11px] font-semibold text-pr-gray-mid uppercase tracking-[0.14em] flex items-center gap-2">
                                    <TrendingUp className="h-3.5 w-3.5 text-pr-black" />
                                    Axes d'amélioration
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="px-6 pb-6">
                                <ul className="space-y-2.5">
                                    {evaluation.improvements.map((improvement, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-pr-gray-dark text-[14px]">
                                            <span className="mt-2 w-1.5 h-1.5 rounded-full bg-pr-black-soft flex-shrink-0"></span>
                                            <span className="leading-relaxed">{improvement}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    )}

                    {/* Suggestions */}
                    {evaluation.suggestions.length > 0 && (
                        <Card className="bg-carnet-paper-2 rounded-2xl border border-pr-gray-light border-l-[3px] border-l-pr-black shadow-[0_2px_12px_rgba(26,26,24,0.04)]">
                            <CardHeader className="px-6 pt-5 pb-3">
                                <CardTitle className="text-[11px] font-semibold text-pr-gray-mid uppercase tracking-[0.14em] flex items-center gap-2">
                                    <Lightbulb className="h-3.5 w-3.5 text-pr-black" />
                                    Suggestions concrètes
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="px-6 pb-6">
                                <ul className="space-y-2.5">
                                    {evaluation.suggestions.map((suggestion, idx) => (
                                        <li key={idx} className="flex items-start gap-3 text-pr-gray-dark text-[14px]">
                                            <Lightbulb className="h-4 w-4 text-pr-black mt-0.5 shrink-0" />
                                            <span className="leading-relaxed">{suggestion}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                        </Card>
                    )}

                    {/* Improved Proposal */}
                    {evaluation.improvedProposal && (
                        <Card className="bg-pr-gray-bg/60 border border-pr-black-pale rounded-2xl overflow-hidden">
                            <CardHeader className="px-6 pt-5 pb-3">
                                <CardTitle className="text-[11px] font-semibold text-pr-black uppercase tracking-[0.14em] flex items-center gap-2">
                                    <Sparkles className="h-3.5 w-3.5 text-pr-black" />
                                    Proposition d'accroche améliorée
                                </CardTitle>
                            </CardHeader>
                            <CardContent className="px-6 pb-6">
                                <div className="bg-carnet-paper-2 p-6 rounded-xl border border-pr-black-soft">
                                    <p className="font-lora italic text-[16px] leading-[1.6] text-pr-black">
                                        « {evaluation.improvedProposal} »
                                    </p>
                                </div>
                                <div className="mt-3 text-[12px] text-pr-black flex items-center gap-2 font-medium">
                                    <CheckCircle2 className="h-3.5 w-3.5" />
                                    Version corrigée et optimisée
                                </div>
                            </CardContent>
                        </Card>
                    )}
                </div>
            )}
        </div>
    );
};
