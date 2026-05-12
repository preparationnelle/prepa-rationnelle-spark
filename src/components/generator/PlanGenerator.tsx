import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Loader2, Sparkles, FileText, Info, ListChecks } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { Alert, AlertDescription } from '@/components/ui/alert';

interface PlanPart {
  title: string;
  subparts: Array<{
    title: string;
    content: string;
  }>;
}

interface PlanData {
  title: string;
  introduction: string;
  parts: PlanPart[];
  conclusion: string;
}

interface PlanGeneratorProps {
  subjectFromParent?: string;
  mode?: 'geopolitics' | 'culture-generale';
}

export const PlanGenerator = ({ subjectFromParent, mode = 'geopolitics' }: PlanGeneratorProps) => {
  const [topic, setTopic] = useState(subjectFromParent || '');
  const [isGenerating, setIsGenerating] = useState(false);
  const [plan, setPlan] = useState<PlanData | null>(null);
  const [wordCount, setWordCount] = useState(0);
  const { toast } = useToast();

  const loadExample = () => {
    if (!subjectFromParent) {
      setTopic("La puissance américaine aujourd'hui");
    }
  };

  const handleGenerate = async () => {
    if (!topic.trim()) {
      toast({
        title: "Erreur",
        description: "Veuillez saisir un sujet",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    setPlan(null);

    try {
      const { data, error } = await supabase.functions.invoke('generate-plan', {
        body: {
          topic: topic.trim(),
          language: 'fr',
          mode: mode,
        },
      });

      if (error) {
        console.error('Error generating plan:', error);
        toast({
          title: "Erreur",
          description: error.message || "Erreur lors de la génération du plan",
          variant: "destructive",
        });
        return;
      }

      if (data.error) {
        toast({
          title: "Erreur",
          description: data.error,
          variant: "destructive",
        });
        return;
      }

      setPlan(data.plan);
      setWordCount(data.wordCount || 0);
      toast({
        title: "Succès",
        description: "Plan généré avec succès !",
      });

    } catch (error) {
      console.error('Error:', error);
      toast({
        title: "Erreur",
        description: "Une erreur s'est produite",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  return (
    <div className="space-y-6">
      <Card className="bg-white rounded-2xl border border-pr-gray-light overflow-hidden shadow-[0_2px_12px_rgba(26,26,24,0.04)]">
        <div className="h-[3px] w-full bg-pr-black" />
        <CardHeader className="px-6 pt-5 pb-4 bg-pr-gray-bg border-b border-pr-gray-light">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-white border border-pr-black-soft flex items-center justify-center">
              <ListChecks className="h-5 w-5 text-pr-black" />
            </div>
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pr-black mb-0.5">
                {mode === 'culture-generale' ? 'Culture générale' : 'Géopolitique'}
              </div>
              <CardTitle className="font-dm-serif text-2xl text-pr-black leading-none">
                Générateur de plan
              </CardTitle>
              <div className="text-pr-gray-mid text-[13px] mt-1">
                Plan structuré en 3 parties avec sous-parties, chiffres et exemples.
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 sm:p-7 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <Label htmlFor="topic" className="text-[15px] font-semibold text-pr-black flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-pr-gray-bg text-pr-black text-[11px] font-bold">
                  1
                </span>
                Sujet
              </Label>
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-black bg-pr-gray-bg px-2.5 py-1 rounded-full">
                Requis
              </span>
            </div>
            <Input
              id="topic"
              placeholder="Ex : La puissance américaine aujourd'hui, La Chine puissance révisionniste…"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
              className="h-12 border-pr-gray-light focus:border-pr-black focus:ring-2 focus:ring-pr-black/20 transition-colors rounded-xl text-[15px] bg-white text-pr-black placeholder:text-pr-gray-mid"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button
              onClick={handleGenerate}
              disabled={isGenerating || !topic.trim()}
              className="flex-1 bg-pr-black hover:bg-pr-black-dark text-white font-semibold rounded-xl h-12 text-[15px] shadow-[0_4px_14px_rgba(244,132,95,0.35)] hover:shadow-[0_6px_20px_rgba(196,90,53,0.4)] transition-all duration-200 disabled:opacity-50 disabled:shadow-none"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  Génération en cours…
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  Générer le plan
                </>
              )}
            </Button>

            <Button
              onClick={loadExample}
              className="bg-white border border-pr-gray-light text-pr-gray-dark hover:bg-pr-gray-bg hover:text-pr-black hover:border-pr-black-soft rounded-xl h-12 px-5 font-medium transition-colors"
            >
              Exemple
            </Button>
          </div>

          <Alert className="bg-pr-gray-bg border-pr-gray-light rounded-xl">
            <Info className="h-4 w-4 text-pr-black" />
            <AlertDescription className="text-[14px] text-pr-gray-dark leading-relaxed">
              <strong className="text-pr-black">Comment ça marche :</strong> entrez un sujet, le système génère un plan structuré en 3 parties avec sous-parties.
              Chiffres précis, statistiques, dates exactes et exemples concrets sont inclus pour chaque partie.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Affichage du plan généré */}
      {plan && (
        <Card className="bg-white rounded-2xl border border-pr-gray-light shadow-[0_2px_12px_rgba(26,26,24,0.04)] overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="h-[3px] w-full bg-pr-black" />
          <CardHeader className="bg-pr-gray-bg border-b border-pr-gray-light px-6 py-5">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-pr-black-soft flex items-center justify-center">
                  <FileText className="h-5 w-5 text-pr-black" />
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pr-black mb-0.5">
                    Plan généré
                  </div>
                  <CardTitle className="font-dm-serif text-xl text-pr-black leading-none">
                    Structure de dissertation
                  </CardTitle>
                </div>
              </div>
              {wordCount > 0 && (
                <span className="text-[11px] font-semibold uppercase tracking-[0.10em] text-pr-gray-mid bg-white border border-pr-gray-light px-2.5 py-1 rounded-full">
                  {wordCount} mots
                </span>
              )}
            </div>
          </CardHeader>
          <CardContent className="p-6 sm:p-7 space-y-5">
            {/* Titre */}
            <div className="bg-pr-gray-bg/60 rounded-xl p-5 border border-pr-black-pale">
              <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pr-black mb-1">Sujet</div>
              <h2 className="font-dm-serif text-xl text-pr-black leading-snug">{plan.title}</h2>
            </div>

            {/* Introduction */}
            {plan.introduction && (
              <div className="bg-pr-gray-bg rounded-xl p-5 border border-pr-gray-light">
                <h3 className="text-[11px] font-semibold text-pr-gray-mid uppercase tracking-[0.14em] mb-2">Introduction</h3>
                <p className="text-pr-gray-dark text-[15px] leading-relaxed whitespace-pre-wrap">{plan.introduction}</p>
              </div>
            )}

            {/* Parties */}
            {plan.parts && plan.parts.length > 0 && (
              <div className="space-y-5">
                {plan.parts.map((part, partIndex) => (
                  <div key={partIndex} className="space-y-3">
                    <div className="rounded-xl p-4 bg-white border border-pr-gray-light border-l-[3px] border-l-pr-black">
                      <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pr-black mb-1">
                        Partie {partIndex + 1}
                      </div>
                      <h3 className="font-dm-serif text-lg text-pr-black leading-snug">
                        {part.title}
                      </h3>
                    </div>

                    {part.subparts && part.subparts.length > 0 && (
                      <div className="ml-3 space-y-2.5">
                        {part.subparts.map((subpart, subpartIndex) => (
                          <div key={subpartIndex} className="p-4 bg-white rounded-lg border border-pr-gray-light">
                            <h4 className="font-semibold text-pr-black mb-2 text-[15px]">
                              {subpart.title}
                            </h4>
                            <p className="text-pr-gray-dark whitespace-pre-wrap text-[14px] leading-relaxed">
                              {subpart.content}
                            </p>
                          </div>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            )}

            {/* Conclusion */}
            {plan.conclusion && (
              <div className="bg-pr-gray-bg rounded-xl p-5 border border-pr-gray-light">
                <h3 className="text-[11px] font-semibold text-pr-gray-mid uppercase tracking-[0.14em] mb-2">Conclusion</h3>
                <p className="text-pr-gray-dark text-[15px] leading-relaxed whitespace-pre-wrap">{plan.conclusion}</p>
              </div>
            )}
          </CardContent>
        </Card>
      )}
    </div>
  );
};

