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
            <Card className="bg-gradient-to-br from-white via-amber-50/30 to-white border border-amber-200">
                <CardHeader>
                    <CardTitle className="flex items-center gap-2 text-2xl font-bold bg-gradient-to-r from-amber-600 to-amber-500 bg-clip-text text-transparent">
                        <Lightbulb className="h-7 w-7 text-amber-600" />
                        Générateur de Paradoxe (Culture Générale)
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <Alert className="bg-amber-50 border-amber-200">
                        <Info className="h-4 w-4 text-amber-600" />
                        <AlertDescription className="text-sm text-gray-700">
                            <strong>Le paradoxe :</strong> C'est une tension apparemment contradictoire au cœur du sujet qui structure votre réflexion.
                            Il permet d'articuler les différentes dimensions du problème et de nourrir votre problématique.
                        </AlertDescription>
                    </Alert>
                </CardContent>
            </Card>

            {/* Input Form Card */}
            <Card className="bg-white rounded-xl shadow-lg border border-gray-200">
                <CardHeader>
                    <CardTitle className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                        <Sparkles className="h-5 w-5 text-amber-600" />
                        Analyser un sujet
                    </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                    {/* Subject Input */}
                    <div className="space-y-2">
                        <Label htmlFor="subject" className="text-sm font-medium text-gray-900 flex items-center gap-2">
                            Sujet de dissertation <span className="text-red-500">*</span>
                        </Label>
                        <Textarea
                            id="subject"
                            placeholder="Ex: La liberté est-elle absence de contraintes ?"
                            value={subject}
                            onChange={(e) => setSubject(e.target.value)}
                            readOnly={!!subjectFromParent}
                            className={`min-h-[120px] border-gray-300 focus:border-amber-500 focus:ring-amber-500 rounded-lg resize-none ${subjectFromParent ? 'bg-amber-50/50' : 'bg-gray-50'}`}
                        />
                        <p className="text-xs text-gray-500">
                            {subjectFromParent ? 'Sujet imposé depuis la page principale' : 'Entrez le sujet dont vous voulez identifier le paradoxe'}
                        </p>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                        <Button
                            type="button"
                            onClick={loadExample}
                            variant="outline"
                            className="flex items-center gap-2 border border-gray-300 bg-gray-100 text-gray-900 hover:bg-gray-50 hover:border-amber-500 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md"
                            disabled={isGenerating}
                        >
                            <Info className="h-4 w-4" />
                            Exemple
                        </Button>

                        <Button
                            type="button"
                            onClick={handleGenerate}
                            disabled={!subject.trim() || isGenerating}
                            className="flex items-center justify-center gap-2 flex-1 bg-gradient-to-r from-amber-600 to-amber-500 hover:from-amber-700 hover:to-amber-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 min-h-[44px]"
                        >
                            {isGenerating ? (
                                <>
                                    <Loader2 className="h-4 w-4 animate-spin" />
                                    <span>Génération en cours...</span>
                                </>
                            ) : (
                                <>
                                    <Lightbulb className="h-4 w-4" />
                                    <span>Générer le paradoxe</span>
                                </>
                            )}
                        </Button>
                    </div>
                </CardContent>
            </Card>

            {/* Result Card */}
            {paradoxResult && (
                <div className="space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-500">
                    {/* Paradox Statement */}
                    <Card className="bg-white rounded-xl shadow-lg border border-amber-200">
                        <CardHeader>
                            <div className="flex items-center justify-between">
                                <CardTitle className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                    <Lightbulb className="h-5 w-5 text-amber-600" />
                                    Paradoxe identifié
                                </CardTitle>
                                <Button
                                    onClick={handleCopy}
                                    variant="outline"
                                    size="sm"
                                    className="flex items-center gap-2"
                                >
                                    {copied ? (
                                        <>
                                            <Check className="h-4 w-4 text-green-600" />
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
                        <CardContent>
                            <div className="bg-gradient-to-r from-amber-50 to-amber-100 rounded-lg p-6 border border-amber-200">
                                <p className="text-lg font-semibold text-gray-900 leading-relaxed">
                                    {paradoxResult.paradox}
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Explanation */}
                    <Card className="bg-white rounded-xl shadow-lg border border-gray-200">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                <Info className="h-5 w-5 text-gray-600" />
                                Explication du paradoxe
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="prose max-w-none">
                                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                                    {paradoxResult.explanation}
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Exploitation */}
                    <Card className="bg-blue-50/50 rounded-xl shadow-lg border border-blue-200">
                        <CardHeader>
                            <CardTitle className="text-xl font-semibold text-gray-900 flex items-center gap-2">
                                <ListChecks className="h-5 w-5 text-blue-600" />
                                Pistes d'exploitation pour votre dissertation
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <div className="prose max-w-none">
                                <p className="text-gray-700 leading-relaxed whitespace-pre-line">
                                    {paradoxResult.exploitation}
                                </p>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Advice */}
                    <Alert className="bg-purple-50 border-purple-200">
                        <Sparkles className="h-4 w-4 text-purple-600" />
                        <AlertDescription className="text-sm text-gray-700">
                            <strong>Conseil méthodologique :</strong> Utilisez ce paradoxe comme fil conducteur de votre dissertation.
                            Il peut nourrir votre problématique et structurer votre plan dialectique. Pensez à l'exploiter dans votre introduction
                            et à le résoudre progressivement au fil de votre développement.
                        </AlertDescription>
                    </Alert>
                </div>
            )}
        </div>
    );
};
