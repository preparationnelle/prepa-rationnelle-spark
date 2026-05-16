import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Brain, Loader2, Copy, Check, Sparkles, Info, AlertCircle, Lightbulb } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface ProblematiquesGeneratorProps {
  mode?: 'culture-generale' | 'geopolitics';
  subjectFromParent?: string;
}

export const ProblematiquesGenerator = ({ mode = 'culture-generale', subjectFromParent }: ProblematiquesGeneratorProps) => {
  const [subject, setSubject] = useState(subjectFromParent || '');
  const [loading, setLoading] = useState(false);
  const [problematique, setProblematique] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const isGeopolitics = mode === 'geopolitics';
  const placeholder = isGeopolitics
    ? "Ex : La Chine, une puissance révisionniste ?"
    : "Ex : L'homme est-il un animal comme les autres ?";

  const handleGenerate = async () => {
    if (!subject.trim()) {
      toast({
        title: "Champ requis",
        description: "Veuillez entrer un sujet de dissertation.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setProblematique(null);

    try {
      const { data, error } = await supabase.functions.invoke('generate-problematique', {
        body: { subject: subject.trim(), mode: isGeopolitics ? 'geopolitics' : 'culture_generale' },
      });

      if (error) {
        throw new Error(error.message || "Erreur lors de l'appel à la fonction");
      }

      if (data.error) {
        throw new Error(data.error);
      }

      const generatedProblematique = data.problematique;

      if (!generatedProblematique) {
        throw new Error("La problématique générée est vide");
      }

      setProblematique(generatedProblematique);

      toast({
        title: "Problématique générée !",
        description: "Votre problématique de dissertation a été formulée avec succès.",
      });
    } catch (error: any) {
      console.error('Error generating problematique:', error);
      const errorMessage = error?.message || error?.error?.message || error?.toString() || "Une erreur s'est produite lors de la génération.";
      toast({
        title: "Erreur",
        description: errorMessage,
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleCopy = () => {
    if (problematique) {
      navigator.clipboard.writeText(problematique);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast({
        title: "Copié !",
        description: "La problématique a été copiée dans le presse-papiers.",
      });
    }
  };

  const loadExample = () => {
    if (isGeopolitics) {
      setSubject("L'Union Européenne, une puissance sans puissance ?");
    } else {
      setSubject("L'homme est-il un animal comme les autres ?");
    }
  };

  return (
    <div className="space-y-6">
      {/* Header + form */}
      <div className="carnet-card overflow-hidden">
        <div className="px-7 pt-7 pb-5 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
            <Brain className="h-5 w-5 text-carnet-red" />
          </div>
          <div>
            <div className="carnet-eyebrow text-[11px] mb-1">
              {isGeopolitics ? 'Géopolitique' : 'Culture générale'}
            </div>
            <h2 className="font-lora text-[26px] text-carnet-ink leading-none">
              Générateur de <em className="font-lora italic text-carnet-red">problématique</em>
            </h2>
            <p className="text-carnet-ink-mute font-instrument text-sm mt-1.5">
              Une question <span className="carnet-hl font-lora italic">dialectique, féconde et pertinente</span> pour structurer ta dissertation.
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
                <label htmlFor="problematique-subject" className="font-lora text-[18px] text-carnet-ink">
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
                id="problematique-subject"
                placeholder={placeholder}
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                readOnly={!!subjectFromParent}
                className="min-h-[120px] resize-y border-0 bg-transparent rounded-md text-[15px] leading-relaxed p-4 focus-visible:ring-0 font-instrument text-carnet-ink placeholder:text-carnet-ink-mute"
              />
            </div>
            <p className="text-[13px] text-carnet-ink-mute font-instrument">
              {subjectFromParent ? 'Sujet imposé depuis la page principale.' : 'Colle ici le sujet dont tu veux analyser la problématique.'}
            </p>
          </div>

          {/* Actions */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button
              type="button"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); handleGenerate(); }}
              disabled={!subject.trim() || loading}
              className="flex-1 bg-carnet-red hover:bg-carnet-red-deep text-carnet-paper rounded-md h-12 text-[15px] font-instrument font-semibold transition-all duration-200 disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Analyse en cours…</span>
                </>
              ) : (
                <>
                  <Brain className="h-4 w-4" />
                  <span>Générer la problématique</span>
                </>
              )}
            </Button>

            <Button
              type="button"
              onClick={(e) => { e.preventDefault(); e.stopPropagation(); loadExample(); }}
              disabled={loading}
              className="bg-carnet-paper-2 text-carnet-ink-soft border border-dashed border-[rgba(78,55,30,0.18)] hover:bg-[rgba(193,68,58,0.06)] hover:text-carnet-red hover:border-[rgba(193,68,58,0.25)] rounded-md h-12 px-5 font-instrument font-medium transition-colors flex items-center gap-2"
            >
              <Info className="h-4 w-4" />
              Exemple
            </Button>
          </div>
        </div>
      </div>

      {/* Result */}
      {problematique && (
        <div className="space-y-5 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="carnet-card overflow-hidden">
            <div className="px-6 pt-5 pb-3 flex items-center justify-between gap-3 flex-wrap">
              <div className="carnet-eyebrow text-[10px] flex items-center gap-2">
                <Lightbulb className="h-3.5 w-3.5 text-carnet-red" />
                Problématique proposée
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
                  « {problematique} »
                </p>
              </div>
            </div>
          </div>

          {/* Advice */}
          <div className="carnet-card overflow-hidden">
            <div className="px-6 py-5 flex items-start gap-3">
              <AlertCircle className="h-4 w-4 text-carnet-red flex-shrink-0 mt-1" />
              <div className="flex-1">
                <div className="carnet-eyebrow text-[10px] mb-2">Évaluation</div>
                <p className="font-instrument text-carnet-ink-soft text-[14px] leading-relaxed">
                  Cette problématique est-elle <span className="carnet-hl font-lora italic">dialectique, féconde et pertinente</span> ? Elle devrait permettre un développement en trois parties équilibrées avec des arguments opposés.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
