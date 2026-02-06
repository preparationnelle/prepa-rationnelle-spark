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

    const getScoreColor = (score: number, max: number) => {
        const percentage = (score / max) * 100;
        if (percentage >= 70) return 'text-orange-600';
        return 'text-gray-700';
    };

    const getScoreBgColor = (score: number, max: number) => {
        const percentage = (score / max) * 100;
        if (percentage >= 70) return 'bg-orange-50 border-orange-200';
        return 'bg-gray-50 border-gray-200';
    };

    return (
        <div className="space-y-6">
            {/* Input Card */}
            <Card className="bg-white/90 backdrop-blur-sm rounded-3xl border border-orange-100 shadow-2xl overflow-hidden">
                <CardHeader className="pb-6 bg-gradient-to-r from-orange-50/50 to-transparent">
                    <CardTitle className="flex items-center gap-4 text-2xl">
                        <div className="w-14 h-14 bg-gradient-to-br from-orange-400 to-orange-500 rounded-2xl flex items-center justify-center shadow-lg">
                            <Target className="h-7 w-7 text-white" />
                        </div>
                        <div>
                            <div className="font-bold text-gray-900">Évaluateur d'Accroche</div>
                            <div className="text-gray-600 text-base font-normal mt-1">
                                Évaluez la pertinence de votre accroche de dissertation de géopolitique
                            </div>
                        </div>
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 p-8">
                    <div className="space-y-5">
                        <Label htmlFor="subject" className="text-base font-semibold text-gray-900 flex items-center gap-2">
                            Sujet de dissertation
                        </Label>
                        <div className="relative">
                            <Input
                                id="subject"
                                placeholder="Saisissez votre sujet ou choisissez dans la liste..."
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                readOnly={!!subjectFromParent}
                                className={`flex-1 border-2 text-base h-12 rounded-2xl ${subjectFromParent ? 'bg-orange-50/50 border-orange-200 text-gray-700' : 'bg-white border-orange-200 focus:border-orange-500 focus:ring-orange-500'}`}
                            />
                            {subjectFromParent ? (
                                <div className="absolute top-3 right-3">
                                    <Badge variant="secondary" className="bg-orange-100 text-orange-700 hover:bg-orange-100 border-0 font-medium">Sujet Imposé</Badge>
                                </div>
                            ) : (
                                <div className="absolute top-1 right-1">
                                    <Select onValueChange={(value) => setSubject(value)} value={Object.values(subjectsByCategory).flat().includes(subject) ? subject : undefined}>
                                        <SelectTrigger className="w-10 h-10 p-0 flex justify-center items-center bg-transparent border-0 hover:bg-orange-50 rounded-xl transition-all duration-200" title="Choisir un sujet prédéfini">
                                            <BookOpenCheck className="h-5 w-5 text-orange-400" />
                                        </SelectTrigger>
                                        <SelectContent className="max-h-[400px]">
                                            {Object.entries(subjectsByCategory).map(([category, subjects]) => (
                                                <SelectGroup key={category}>
                                                    <SelectLabel className="font-bold text-orange-600 sticky top-0 bg-white z-10 py-2">
                                                        {getCategoryName(category as keyof typeof subjectsByCategory)}
                                                    </SelectLabel>
                                                    {subjects.map((subjectText, idx) => (
                                                        <SelectItem key={`${category}-${idx}`} value={subjectText} className="cursor-pointer">
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

                        <div className="space-y-3">
                            <Label htmlFor="hook" className="text-base font-semibold text-gray-900 flex items-center gap-2">
                                Votre accroche
                            </Label>
                            <Textarea
                                id="hook"
                                placeholder="Entrez votre accroche ici..."
                                value={hook}
                                onChange={(e) => setHook(e.target.value)}
                                className="min-h-[140px] resize-none border-2 border-orange-200 focus:border-orange-500 focus:ring-orange-500 bg-white rounded-2xl text-base"
                            />
                            <div className="text-sm text-gray-500">
                                {hook.length} caractères • ~{Math.ceil(hook.length / 100)} lignes estimées
                            </div>
                        </div>



                        <div className="flex gap-4 pt-4">
                            <Button
                                onClick={handleEvaluate}
                                disabled={isEvaluating || !hook.trim() || !subject.trim()}
                                className="flex-1 bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white font-bold rounded-full h-14 text-lg shadow-2xl hover:shadow-orange-500/50 transition-all duration-300 hover:scale-105"
                            >
                                {isEvaluating ? (
                                    <>
                                        <Loader2 className="h-5 w-5 mr-2 animate-spin" />
                                        Évaluation en cours...
                                    </>
                                ) : (
                                    <>
                                        <Sparkles className="h-5 w-5 mr-2" />
                                        Évaluer mon accroche
                                    </>
                                )}
                            </Button>

                            <Button
                                onClick={loadExample}
                                variant="outline"
                                className="px-8 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 rounded-full h-14 font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
                            >
                                Exemple
                            </Button>
                        </div>
                    </div>
                </CardContent>
            </Card>

            {/* Results Card */}
            {
                evaluation && (
                    <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                        {/* Fatal Errors */}
                        {evaluation.fatalErrors.length > 0 && (
                            <Alert className="border-2 border-orange-600 bg-orange-50 rounded-2xl">
                                <AlertTriangle className="h-5 w-5 text-orange-600" />
                                <AlertDescription className="text-gray-900">
                                    <div className="font-semibold mb-2 text-orange-600">Erreurs critiques détectées :</div>
                                    <ul className="list-disc list-inside space-y-1">
                                        {evaluation.fatalErrors.map((error, idx) => (
                                            <li key={idx}>{error}</li>
                                        ))}
                                    </ul>
                                </AlertDescription>
                            </Alert>
                        )}

                        {/* Global Score */}
                        <Card className={`rounded-3xl border-2 ${getScoreBgColor(evaluation.globalScore, 20)} shadow-xl`}>
                            <CardContent className="p-8">
                                <div className="flex items-center justify-between">
                                    <div>
                                        <div className="text-gray-700 font-semibold mb-1">Score Global</div>
                                        <div className="text-sm text-gray-600">
                                            Type d'accroche : <span className="font-semibold">{evaluation.hookType}</span>
                                        </div>
                                    </div>
                                    <div className={`text-6xl font-black ${getScoreColor(evaluation.globalScore, 20)}`}>
                                        {evaluation.globalScore}<span className="text-3xl">/20</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        {/* Detailed Scores */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                            <Card className="rounded-2xl border border-gray-200 bg-white shadow-md">
                                <CardContent className="p-6">
                                    <div className="text-center">
                                        <div className="text-gray-900 font-semibold mb-2">Pertinence</div>
                                        <div className="text-4xl font-black text-gray-900">
                                            {evaluation.pertinenceScore}<span className="text-xl text-gray-600">/8</span>
                                        </div>
                                        <div className="text-xs text-gray-500 mt-2">Adéquation au sujet</div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="rounded-2xl border border-gray-200 bg-white shadow-md">
                                <CardContent className="p-6">
                                    <div className="text-center">
                                        <div className="text-gray-900 font-semibold mb-2">Efficacité</div>
                                        <div className="text-4xl font-black text-gray-900">
                                            {evaluation.efficaciteScore}<span className="text-xl text-gray-600">/6</span>
                                        </div>
                                        <div className="text-xs text-gray-500 mt-2">Concision & dynamisme</div>
                                    </div>
                                </CardContent>
                            </Card>

                            <Card className="rounded-2xl border border-gray-200 bg-white shadow-md">
                                <CardContent className="p-6">
                                    <div className="text-center">
                                        <div className="text-gray-900 font-semibold mb-2">Originalité</div>
                                        <div className="text-4xl font-black text-gray-900">
                                            {evaluation.originaliteScore}<span className="text-xl text-gray-600">/6</span>
                                        </div>
                                        <div className="text-xs text-gray-500 mt-2">Culture & démarquage</div>
                                    </div>
                                </CardContent>
                            </Card>
                        </div>

                        {/* Strengths */}
                        {evaluation.strengths.length > 0 && (
                            <Card className="bg-white backdrop-blur-sm rounded-3xl border border-gray-200 shadow-md">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-xl text-gray-900">
                                        <CheckCircle2 className="h-6 w-6 text-orange-600" />
                                        Points forts
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {evaluation.strengths.map((strength, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-gray-800">
                                                <CheckCircle2 className="h-4 w-4 text-orange-600 mt-1 shrink-0" />
                                                <span>{strength}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        )}

                        {/* Improvements */}
                        {evaluation.improvements.length > 0 && (
                            <Card className="bg-white backdrop-blur-sm rounded-3xl border border-gray-200 shadow-md">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-xl text-gray-900">
                                        <TrendingUp className="h-6 w-6 text-gray-700" />
                                        Axes d'amélioration
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {evaluation.improvements.map((improvement, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-gray-800">
                                                <TrendingUp className="h-4 w-4 text-gray-600 mt-1 shrink-0" />
                                                <span>{improvement}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        )}

                        {/* Suggestions */}
                        {evaluation.suggestions.length > 0 && (
                            <Card className="bg-orange-50/50 backdrop-blur-sm rounded-3xl border border-orange-200 shadow-md">
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-xl text-gray-900">
                                        <Lightbulb className="h-6 w-6 text-orange-600" />
                                        Suggestions concrètes
                                    </CardTitle>
                                </CardHeader>
                                <CardContent>
                                    <ul className="space-y-2">
                                        {evaluation.suggestions.map((suggestion, idx) => (
                                            <li key={idx} className="flex items-start gap-2 text-gray-800">
                                                <Lightbulb className="h-4 w-4 text-orange-600 mt-1 shrink-0" />
                                                <span>{suggestion}</span>
                                            </li>
                                        ))}
                                    </ul>
                                </CardContent>
                            </Card>
                        )}

                        {/* Improved Proposal */}
                        {evaluation.improvedProposal && (
                            <Card className="bg-gradient-to-r from-orange-100 to-orange-50 border-2 border-orange-200 shadow-lg relative overflow-hidden">
                                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-300/20 rounded-full blur-2xl -mr-16 -mt-16"></div>
                                <CardHeader>
                                    <CardTitle className="flex items-center gap-3 text-xl text-orange-800">
                                        <Sparkles className="h-6 w-6 text-orange-600 animate-pulse" />
                                        Proposition d'Accroche Améliorée
                                    </CardTitle>
                                </CardHeader>
                                <CardContent className="relative z-10">
                                    <div className="bg-white/80 p-6 rounded-2xl border border-orange-100 italic text-lg leading-relaxed text-gray-800 shadow-sm">
                                        "{evaluation.improvedProposal}"
                                    </div>
                                    <div className="mt-4 text-sm text-orange-700 flex items-center gap-2 font-medium">
                                        <CheckCircle2 className="h-4 w-4" />
                                        Version corrigée et optimisée
                                    </div>
                                </CardContent>
                            </Card>
                        )}
                    </div>
                )
            }
        </div >
    );
};
