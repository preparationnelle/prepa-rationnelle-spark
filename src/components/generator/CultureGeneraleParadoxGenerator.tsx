import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
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
                setSubject("L'homme est-il un animal comme les autres ?");
            }
        }
    };

    return (
        <div className="space-y-6">
            {/* Header + form */}
            <div className="carnet-card overflow-hidden">
                <div className="px-7 pt-7 pb-5 flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
                        <Lightbulb className="h-5 w-5 text-carnet-red" />
                    </div>
                    <div>
                        <div className="carnet-eyebrow text-[11px] mb-1">Culture générale</div>
                        <h2 className="font-lora text-[26px] text-carnet-ink leading-none">
                            Générateur de <em className="font-lora italic text-carnet-red">paradoxe</em>
                        </h2>
                        <p className="text-carnet-ink-mute font-instrument text-sm mt-1.5">
                            Une <span className="carnet-hl font-lora italic">tension structurante</span> au cœur de ton sujet pour articuler ta réflexion.
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
                                <label htmlFor="paradox-subject" className="font-lora text-[18px] text-carnet-ink">
                                    Sujet <em className="font-lora italic text-carnet-red">de dissertation</em>
                                </label>
                            </div>
                            {subjectFromParent && (
                                <span className="carnet-eyebrow text-[10px] inline-flex items-center px-2.5 py-1 bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.25)] rounded-full">
                                    Sujet imposé
                                </span>
                            )}
                        </div>
                        <div className={`bg-carnet-paper-2 rounded-md border border-dashed transition-colors ${subjectFromParent ? 'border-[rgba(78,55,30,0.14)] opacity-90' : 'border-[rgba(78,55,30,0.18)] focus-within:border-carnet-red'}`}>
                            <Textarea
                                id="paradox-subject"
                                placeholder="Ex : L'homme est-il un animal comme les autres ?"
                                value={subject}
                                onChange={(e) => setSubject(e.target.value)}
                                readOnly={!!subjectFromParent}
                                className="min-h-[120px] resize-y border-0 bg-transparent rounded-md text-[15px] leading-relaxed p-4 focus-visible:ring-0 font-instrument text-carnet-ink placeholder:text-carnet-ink-mute"
                            />
                        </div>
                        <p className="text-[13px] text-carnet-ink-mute font-instrument">
                            {subjectFromParent ? 'Sujet imposé depuis la page principale.' : 'Entre le sujet dont tu veux identifier le paradoxe.'}
                        </p>
                    </div>

                    {/* Actions */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-2">
                        <Button
                            type="button"
                            onClick={handleGenerate}
                            disabled={!subject.trim() || isGenerating}
                            className="flex-1 bg-carnet-red hover:bg-carnet-red-deep text-carnet-paper rounded-md h-12 text-[15px] font-instrument font-semibold transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2"
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
                            disabled={isGenerating}
                            className="bg-carnet-paper-2 text-carnet-ink-soft border border-dashed border-[rgba(78,55,30,0.18)] hover:bg-[rgba(193,68,58,0.06)] hover:text-carnet-red hover:border-[rgba(193,68,58,0.25)] rounded-md h-12 px-5 font-instrument font-medium transition-colors flex items-center gap-2"
                        >
                            <Info className="h-4 w-4" />
                            Exemple
                        </Button>
                    </div>
                </div>
            </div>

            {/* Result */}
            {paradoxResult && (
                <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {/* Paradox statement */}
                    <div className="carnet-card overflow-hidden">
                        <div className="px-6 pt-5 pb-3 flex items-center justify-between gap-3 flex-wrap">
                            <div className="carnet-eyebrow text-[10px] flex items-center gap-2">
                                <Lightbulb className="h-3.5 w-3.5 text-carnet-red" />
                                Paradoxe identifié
                            </div>
                            <Button
                                onClick={handleCopy}
                                size="sm"
                                className="bg-carnet-paper-2 text-carnet-ink-soft border border-dashed border-[rgba(78,55,30,0.18)] hover:bg-[rgba(193,68,58,0.06)] hover:text-carnet-red hover:border-[rgba(193,68,58,0.25)] rounded-md h-8 px-3 font-instrument text-sm flex items-center gap-2"
                            >
                                {copied ? (
                                    <>
                                        <Check className="h-3.5 w-3.5" />
                                        Copié
                                    </>
                                ) : (
                                    <>
                                        <Copy className="h-3.5 w-3.5" />
                                        Copier
                                    </>
                                )}
                            </Button>
                        </div>
                        <div className="px-6 pb-6">
                            <div className="bg-carnet-paper-2 p-6 rounded-md border border-dashed border-[rgba(193,68,58,0.3)]">
                                <p className="font-lora italic text-[18px] text-carnet-ink leading-[1.6]">
                                    « {paradoxResult.paradox} »
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Explanation */}
                    <div className="carnet-card overflow-hidden">
                        <div className="px-6 pt-5 pb-3">
                            <div className="carnet-eyebrow text-[10px] flex items-center gap-2">
                                <Info className="h-3.5 w-3.5 text-carnet-red" />
                                Explication du paradoxe
                            </div>
                        </div>
                        <div className="px-6 pb-6">
                            <p className="font-instrument text-carnet-ink-soft text-[15px] leading-relaxed whitespace-pre-line">
                                {paradoxResult.explanation}
                            </p>
                        </div>
                    </div>

                    {/* Exploitation */}
                    <div className="carnet-card overflow-hidden border-l-[3px] border-l-carnet-red">
                        <div className="px-6 pt-5 pb-3">
                            <div className="carnet-eyebrow text-[10px] flex items-center gap-2">
                                <ListChecks className="h-3.5 w-3.5 text-carnet-red" />
                                Pistes d'exploitation
                            </div>
                        </div>
                        <div className="px-6 pb-6">
                            <p className="font-instrument text-carnet-ink-soft text-[15px] leading-relaxed whitespace-pre-line">
                                {paradoxResult.exploitation}
                            </p>
                        </div>
                    </div>

                    {/* Advice */}
                    <div className="carnet-card overflow-hidden">
                        <div className="px-6 py-5 flex items-start gap-3">
                            <Sparkles className="h-4 w-4 text-carnet-red flex-shrink-0 mt-1" />
                            <div className="flex-1">
                                <div className="carnet-eyebrow text-[10px] mb-2">Conseil méthodologique</div>
                                <p className="font-instrument text-carnet-ink-soft text-[14px] leading-relaxed">
                                    Utilise ce paradoxe comme <span className="carnet-hl font-lora italic">fil conducteur</span> de ta dissertation. Il peut nourrir ta problématique et structurer ton plan dialectique. Pense à l'exploiter dans ton introduction et à le résoudre progressivement au fil du développement.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
