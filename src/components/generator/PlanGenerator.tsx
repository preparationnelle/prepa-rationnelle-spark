import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Loader2, Sparkles, FileText, Info, ListChecks } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

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

  const isCG = mode === 'culture-generale';

  const loadExample = () => {
    if (!subjectFromParent) {
      setTopic(isCG ? "L'homme est-il un animal comme les autres ?" : "La puissance américaine aujourd'hui");
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
      {/* Header + form */}
      <div className="carnet-card overflow-hidden">
        <div className="px-7 pt-7 pb-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
            <ListChecks className="h-5 w-5 text-carnet-red" />
          </div>
          <div>
            <div className="carnet-eyebrow text-[11px] mb-1">
              {isCG ? 'Culture générale' : 'Géopolitique'}
            </div>
            <h2 className="font-lora text-[26px] text-carnet-ink leading-none">
              Générateur de <em className="font-lora italic text-carnet-red">plan</em>
            </h2>
            <p className="text-carnet-ink-mute font-instrument text-sm mt-1.5">
              Un plan structuré en <span className="carnet-hl font-lora italic">trois parties</span> avec sous-parties, chiffres et exemples.
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
                <label htmlFor="plan-topic" className="font-lora text-[18px] text-carnet-ink">
                  Sujet <em className="font-lora italic text-carnet-red">à traiter</em>
                </label>
              </div>
              {subjectFromParent && (
                <span className="carnet-eyebrow text-[10px] inline-flex items-center px-2.5 py-1 bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.25)] rounded-full">
                  Sujet imposé
                </span>
              )}
            </div>
            <div className={`bg-carnet-paper-2 rounded-md border border-dashed transition-colors ${subjectFromParent ? 'border-[rgba(78,55,30,0.14)] opacity-90' : 'border-[rgba(78,55,30,0.18)] focus-within:border-carnet-red'}`}>
              <Input
                id="plan-topic"
                placeholder={isCG ? "Ex : L'homme est-il un animal comme les autres ?" : "Ex : La puissance américaine aujourd'hui"}
                value={topic}
                onChange={(e) => setTopic(e.target.value)}
                readOnly={!!subjectFromParent}
                className="h-12 border-0 bg-transparent rounded-md text-[15px] py-3 px-4 focus-visible:ring-0 font-instrument text-carnet-ink placeholder:text-carnet-ink-mute"
              />
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button
              onClick={handleGenerate}
              disabled={isGenerating || !topic.trim()}
              className="flex-1 bg-carnet-red hover:bg-carnet-red-deep text-carnet-paper rounded-md h-12 text-[15px] font-instrument font-semibold transition-all duration-200 disabled:opacity-50"
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
              className="bg-carnet-paper-2 text-carnet-ink-soft border border-dashed border-[rgba(78,55,30,0.18)] hover:bg-[rgba(193,68,58,0.06)] hover:text-carnet-red hover:border-[rgba(193,68,58,0.25)] rounded-md h-12 px-5 font-instrument font-medium transition-colors"
            >
              Exemple
            </Button>
          </div>

          {/* Tip */}
          <div className="bg-carnet-paper-2 rounded-md border border-dashed border-[rgba(78,55,30,0.18)] p-4 flex items-start gap-3">
            <Info className="h-4 w-4 text-carnet-red flex-shrink-0 mt-0.5" />
            <p className="font-instrument text-[13px] leading-relaxed text-carnet-ink-soft">
              <span className="font-semibold text-carnet-ink">Comment ça marche :</span> entre un sujet, le système génère un plan en trois parties avec sous-parties, chiffres précis, dates exactes et exemples concrets.
            </p>
          </div>
        </div>
      </div>

      {/* Result */}
      {plan && (
        <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="carnet-card overflow-hidden">
            <div className="px-6 pt-5 pb-3 flex items-center justify-between gap-3 flex-wrap">
              <div className="carnet-eyebrow text-[10px] flex items-center gap-2">
                <FileText className="h-3.5 w-3.5 text-carnet-red" />
                Structure de dissertation
              </div>
              {wordCount > 0 && (
                <span className="carnet-eyebrow text-[10px] inline-flex items-center px-2.5 py-1 bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.25)] rounded-full">
                  {wordCount} mots
                </span>
              )}
            </div>

            <div className="px-6 pb-6 space-y-5">
              {/* Title */}
              <div className="bg-carnet-paper-2 rounded-md p-5 border border-dashed border-[rgba(193,68,58,0.3)]">
                <div className="carnet-eyebrow text-[10px] mb-2">Sujet</div>
                <h3 className="font-lora italic text-xl text-carnet-ink leading-snug">
                  « {plan.title} »
                </h3>
              </div>

              {/* Introduction */}
              {plan.introduction && (
                <div className="space-y-2">
                  <div className="carnet-eyebrow text-[10px]">Introduction</div>
                  <div className="bg-carnet-paper-2 rounded-md p-5 border border-dashed border-[rgba(78,55,30,0.18)]">
                    <p className="font-instrument text-carnet-ink-soft text-[15px] leading-relaxed whitespace-pre-wrap">
                      {plan.introduction}
                    </p>
                  </div>
                </div>
              )}

              {/* Parts */}
              {plan.parts && plan.parts.length > 0 && (
                <div className="space-y-5">
                  {plan.parts.map((part, partIndex) => (
                    <div key={partIndex} className="space-y-3">
                      <div className="flex items-baseline gap-3">
                        <span className="carnet-hand text-[36px] text-carnet-red leading-none font-semibold">
                          {String(partIndex + 1).padStart(2, '0')}
                        </span>
                        <h3 className="font-lora text-[20px] text-carnet-ink leading-snug">
                          {part.title}
                        </h3>
                      </div>

                      {part.subparts && part.subparts.length > 0 && (
                        <div className="ml-12 space-y-2.5 border-l border-dashed border-[rgba(78,55,30,0.18)] pl-5">
                          {part.subparts.map((subpart, subpartIndex) => (
                            <div key={subpartIndex} className="bg-carnet-paper-2 rounded-md p-4 border border-dashed border-[rgba(78,55,30,0.18)]">
                              <h4 className="font-lora italic text-carnet-red mb-2 text-[15px]">
                                {subpart.title}
                              </h4>
                              <p className="font-instrument text-carnet-ink-soft whitespace-pre-wrap text-[14px] leading-relaxed">
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
                <div className="space-y-2">
                  <div className="carnet-eyebrow text-[10px]">Conclusion</div>
                  <div className="bg-carnet-paper-2 rounded-md p-5 border border-dashed border-[rgba(78,55,30,0.18)]">
                    <p className="font-instrument text-carnet-ink-soft text-[15px] leading-relaxed whitespace-pre-wrap">
                      {plan.conclusion}
                    </p>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
