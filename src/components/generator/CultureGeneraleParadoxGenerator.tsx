import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Lightbulb, Loader2, Sparkles, Info, Copy, Check, ListChecks } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';

interface ParadoxResult {
    paradox: string;
    explanation: string;
    exploitation: string;
}

interface CultureGeneraleParadoxGeneratorProps {
    subjectFromParent?: string;
    year: 1 | 2;
}

export const CultureGeneraleParadoxGenerator = ({ subjectFromParent, year }: CultureGeneraleParadoxGeneratorProps) => {
    const [subject, setSubject] = useState(subjectFromParent || '');
    const [isGenerating, setIsGenerating] = useState(false);
    const [paradoxResult, setParadoxResult] = useState<ParadoxResult | null>(null);
    const [copied, setCopied] = useState(false);
    const { toast } = useToast();
    const { currentUser } = useAuth();

    const handleGenerate = async () => {
        if (!subject.trim()) {
            toast({
                title: "Erreur",
                description: "Veuillez saisir un sujet de dissertation.",
                variant: "destructive",
            });
            return;
        }

        setIsGenerating(true);
        setParadoxResult(null);

        try {
            const { data, error } = await supabase.functions.invoke('generate-culture-generale-paradox', {
                body: {
                    subject: subject.trim(),
                    year,
                    userId: currentUser?.id || null,
                },
            });

            if (error) {
                console.error('Error generating paradox:', error);
                toast({
                    title: "Erreur",
                    description: error.message || "Erreur lors de la génération",
                    variant: "destructive",
                });
                return;
            }

            setParadoxResult(data);
            toast({
                title: "Paradoxe généré !",
                description: "Le paradoxe a été formulé avec succès.",
            });

        } catch (error) {
            console.error('Error:', error);
            toast({
                title: "Erreur",
                description: "Une erreur s'est produite lors de la génération",
                variant: "destructive",
            });
        } finally {
            setIsGenerating(false);
        }
    };

    const handleCopy = () => {
        if (paradoxResult) {
            navigator.clipboard.writeText(paradoxResult.paradox);
            setCopied(true);
            setTimeout(() => setCopied(false), 2000);
            toast({
                title: "Copié !",
                description: "Le paradoxe a été copié dans le presse-papiers.",
            });
        }
    };

    const loadExample = () => {
        if (!subjectFromParent) {
            if (year === 1) {
                setSubject("La technique est-elle libératrice ou aliénante ?");
            } else {
                setSubject("Peut-on se juger soi-même ?");
            }
        }
    };

    return (
        <div className="space-y-6">
            {/* Header Card */}
            <Card className="bg-white rounded-2xl border border-pr-gray-light overflow-hidden shadow-[0_2px_12px_rgba(26,26,24,0.04)]">
                <div className="h-[3px] w-full bg-pr-black" />
                <CardHeader className="px-6 pt-5 pb-4">
                    <div className="flex items-center gap-3">
                        <div className="w-11 h-11 rounded-xl bg-pr-gray-bg border border-pr-black-soft flex items-center justify-center">
                            <Lightbulb className="h-5 w-5 text-pr-black" />
                        </div>
                        <div>
                            <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pr-black mb-0.5">
                                Culture générale
                            </div>
                            <CardTitle className="font-dm-serif text-2xl text-pr-black leading-none">
                                Générateur de paradoxe
                            </CardTitle>
                        </div>
                    </div>
                </CardHeader>
                <CardContent className="px-6 pb-6">
                    <Alert className="bg-pr-gray-bg/60 border-pr-black-pale rounded-xl">
                        <Info className="h-4 w-4 text-pr-black" />
                        <AlertDescription className="text-[14px] text-pr-gray-dark leading-relaxed">
                            <strong className="text-pr-black">Le paradoxe :</strong> c'est une tension apparemment contradictoire au cœur du sujet qui structure votre réflexion.
                            Il permet d'articuler les différentes dimensions du problème et de nourrir votre problématique.
                        </AlertDescription>
                    </Alert>
                </CardContent>
            </Card>

            {/* Input Form Card */}
            <Card className="bg-white rounded-2xl border border-pr-gray-light shadow-[0_2px_12px_rgba(26,26,24,0.04)]">
                <CardHeader className="px-6 pt-5 pb-4">
                    <CardTitle className="text-[15px] font-semibold text-pr-black flex items-center gap-2">
                        <Sparkles className="h-4 w-4 text-pr-black" />
                        Analyser un sujet
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6 px-6 pb-6">
                    {/* Subject Input */}
                    <div className="space-y-3">
                        <div className="flex items-center justify-between gap-3">
                            <Label htmlFor="subject" className="text-[15px] font-semibold text-pr-black flex items-center gap-2">
                                <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-pr-gray-bg text-pr-black text-[11px] font-bold">
                                    1
                                </span>
                                Sujet de dissertation
                            </Label>
                            <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-black bg-pr-gray-bg px-2.5 py-1 rounded-full">
                                Requis
                            </span>
                        </div>
                        <Textarea
                            id="subject"
                            placeholder="Ex : La liberté est-elle absence de contraintes ?"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            readOnly={!!subjectFromParent}
                            className={`min-h-[120px] border-pr-gray-light focus:border-pr-black focus:ring-2 focus:ring-pr-black/20 rounded-xl resize-y text-[15px] leading-relaxed p-4 transition-colors text-pr-black placeholder:text-pr-gray-mid ${subjectFromParent ? 'bg-pr-gray-bg/40' : 'bg-white'}`}
                        />
                        <p className="text-[13px] text-pr-gray-mid">
                            {subjectFromParent ? 'Sujet imposé depuis la page principale.' : 'Entrez le sujet dont vous voulez identifier le paradoxe.'}
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <Button
                            type="button"
                            onClick={handleGenerate}
                            disabled={!subject.trim() || isGenerating}
                            className="flex items-center justify-center gap-2 flex-1 bg-pr-black hover:bg-pr-black-dark text-white font-semibold rounded-xl shadow-[0_4px_14px_rgba(244,132,95,0.35)] hover:shadow-[0_6px_20px_rgba(196,90,53,0.4)] transition-all duration-200 disabled:opacity-50 disabled:shadow-none h-12 text-[15px]"
                        >
                            {isGenerating ? (
                                <>
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                    <span>Génération en cours…</span>
                                </>
                            ) : (
                                <>
                                    <Lightbulb className="h-4 w-4" />
                                    <span>Générer le paradoxe</span>
                                </>
                            )}
                        </Button>

                        <Button
                            type="button"
                            onClick={loadExample}
                            className="flex items-center gap-2 bg-white border border-pr-gray-light text-pr-gray-dark hover:bg-pr-gray-bg hover:text-pr-black hover:border-pr-black-soft rounded-xl h-12 px-4 font-medium transition-colors"
                            disabled={isGenerating}
                        >
                            <Info className="h-4 w-4" />
                            Exemple
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Result Card */}
            {paradoxResult && (
                <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {/* Paradox Statement */}
                    <Card className="bg-white rounded-2xl border border-pr-gray-light overflow-hidden shadow-[0_2px_12px_rgba(26,26,24,0.04)]">
                        <div className="h-[3px] w-full bg-pr-black" />
                        <CardHeader className="bg-pr-gray-bg border-b border-pr-gray-light px-6 py-5">
                            <div className="flex items-center justify-between gap-3 flex-wrap">
                                <div className="flex items-center gap-3">
                                    <div className="w-10 h-10 rounded-xl bg-white border border-pr-black-soft flex items-center justify-center">
                                        <Lightbulb className="h-5 w-5 text-pr-black" />
                                    </div>
                                    <div>
                                        <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pr-black mb-0.5">
                                            Paradoxe identifié
                                        </div>
                                        <CardTitle className="font-dm-serif text-xl text-pr-black leading-none">
                                            Tension structurante
                                        </CardTitle>
                                    </div>
                                </div>
                                <Button
                                    onClick={handleCopy}
                                    size="sm"
                                    className="bg-white border border-pr-gray-light text-pr-gray-dark hover:bg-pr-gray-bg hover:text-pr-black hover:border-pr-black-soft rounded-lg flex items-center gap-2"
                                >
                                    {copied ? (
                                        <>
                                            <Check className="h-4 w-4" />
                                            Copié
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="h-4 w-4" />
                                            Copier
                                        </>
                                    )}
                                </Button>
                            </div>
                        </CardHeader>
                        <CardContent className="p-6 sm:p-7">
                            <div className="bg-pr-gray-bg/60 rounded-xl p-6 border border-pr-black-pale">
                                <p className="font-lora text-[18px] text-pr-black leading-[1.5]">
                                    {paradoxResult.paradox}
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Explanation */}
                    <Card className="bg-white rounded-2xl border border-pr-gray-light shadow-[0_2px_12px_rgba(26,26,24,0.04)]">
                        <CardHeader className="px-6 pt-5 pb-3">
                            <CardTitle className="text-[11px] font-semibold text-pr-gray-mid uppercase tracking-[0.14em] flex items-center gap-2">
                                <Info className="h-3.5 w-3.5 text-pr-black" />
                                Explication du paradoxe
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="px-6 pb-6">
                            <p className="text-pr-gray-dark text-[15px] leading-relaxed whitespace-pre-line">
                                {paradoxResult.explanation}
                            </p>
                        </CardContent>
                    </Card>

                    {/* Exploitation */}
                    <Card className="bg-white rounded-2xl border border-pr-gray-light border-l-[3px] border-l-pr-black shadow-[0_2px_12px_rgba(26,26,24,0.04)]">
                        <CardHeader className="px-6 pt-5 pb-3">
                            <CardTitle className="text-[11px] font-semibold text-pr-gray-mid uppercase tracking-[0.14em] flex items-center gap-2">
                                <ListChecks className="h-3.5 w-3.5 text-pr-black" />
                                Pistes d'exploitation
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="px-6 pb-6">
                            <p className="text-pr-gray-dark text-[15px] leading-relaxed whitespace-pre-line">
                                {paradoxResult.exploitation}
                            </p>
                        </CardContent>
                    </Card>

                    {/* Advice */}
                    <Alert className="bg-pr-gray-bg border-pr-gray-light rounded-xl">
                        <Sparkles className="h-4 w-4 text-pr-black" />
                        <AlertDescription className="text-[14px] text-pr-gray-dark leading-relaxed">
                            <strong className="text-pr-black">Conseil méthodologique :</strong> utilisez ce paradoxe comme fil conducteur de votre dissertation.
                            Il peut nourrir votre problématique et structurer votre plan dialectique. Pensez à l'exploiter dans votre introduction
                            et à le résoudre progressivement au fil de votre développement.
                        </AlertDescription>
                    </Alert>
                </div>
            )}
        </div>
    );
};
