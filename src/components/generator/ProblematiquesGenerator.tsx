import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Brain, Loader2, Copy, Check, Sparkles, Info, AlertCircle, Lightbulb } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription } from '@/components/ui/alert';
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
  const title = isGeopolitics ? "Générateur de Problématiques (Géopolitique)" : "Générateur de Problématiques (Culture G.)";
  const placeholder = isGeopolitics
    ? "Ex: La Chine, une puissance révisionniste ?"
    : "Ex: Pensez-vous, comme l'a écrit Montaigne, qu'« il se trouve plus de différence de tel homme à tel homme que de tel animal à tel homme » ?";

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
      console.log('Generating problematique for subject:', subject.trim());

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

      console.log('Problematique generated successfully');

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
      setSubject('Pensez-vous, comme l\'a écrit Montaigne, qu\'« il se trouve plus de différence de tel homme à tel homme que de tel animal à tel homme » ?');
    }
  };

  return (
    <div className="space-y-6">
      {/* Header avec explication */}
      <Card className="bg-white rounded-2xl border border-pr-gray-light overflow-hidden shadow-[0_2px_12px_rgba(26,26,24,0.04)]">
        <div className="h-[3px] w-full bg-pr-black" />
        <CardHeader className="px-6 pt-5 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-pr-gray-bg border border-pr-black-soft flex items-center justify-center">
              <Brain className="h-5 w-5 text-pr-black" />
            </div>
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pr-black mb-0.5">
                {isGeopolitics ? 'Géopolitique' : 'Culture générale'}
              </div>
              <CardTitle className="font-dm-serif text-2xl text-pr-black leading-none">
                Générateur de problématique
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-6 pb-6">
          <Alert className="bg-pr-gray-bg/60 border-pr-black-pale rounded-xl">
            <Info className="h-4 w-4 text-pr-black" />
            <AlertDescription className="text-[14px] text-pr-gray-dark leading-relaxed">
              <strong className="text-pr-black">La problématique :</strong> question centrale qui structure votre dissertation.
              Elle doit être dialectique (tension), féconde (3 parties équilibrées) et pertinente (ancrée dans les enjeux du sujet).
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Formulaire */}
      <Card className="bg-white rounded-2xl border border-pr-gray-light shadow-[0_2px_12px_rgba(26,26,24,0.04)]">
        <CardHeader className="px-6 pt-5 pb-4">
          <CardTitle className="text-[15px] font-semibold text-pr-black flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-pr-black" />
            Analyser un sujet
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 px-6 pb-6">
          {/* Sujet */}
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
              placeholder={placeholder}
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              className="min-h-[120px] border-pr-gray-light focus:border-pr-black focus:ring-2 focus:ring-pr-black/20 transition-colors rounded-xl resize-y text-[15px] leading-relaxed p-4 bg-white text-pr-black placeholder:text-pr-gray-mid"
            />
            <p className="text-[13px] text-pr-gray-mid">
              Collez ici le sujet de dissertation dont vous voulez analyser la problématique.
            </p>
          </div>

          {/* Boutons */}
          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button
              type="button"
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleGenerate();
              }}
              disabled={!subject.trim() || loading}
              className="flex items-center justify-center gap-2 flex-1 bg-pr-black hover:bg-pr-black-dark text-white font-semibold rounded-xl shadow-[0_4px_14px_rgba(244,132,95,0.35)] hover:shadow-[0_6px_20px_rgba(196,90,53,0.4)] transition-all duration-200 disabled:opacity-50 disabled:shadow-none h-12 text-[15px]"
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
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                loadExample();
              }}
              className="flex items-center gap-2 bg-white border border-pr-gray-light text-pr-gray-dark hover:bg-pr-gray-bg hover:text-pr-black hover:border-pr-black-soft rounded-xl h-12 px-4 font-medium transition-colors"
              disabled={loading}
            >
              <Info className="h-4 w-4" />
              Exemple
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Résultat */}
      {problematique && (
        <Card className="bg-white rounded-2xl border border-pr-gray-light overflow-hidden shadow-[0_2px_12px_rgba(26,26,24,0.04)] animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="h-[3px] w-full bg-pr-black" />
          <CardHeader className="bg-pr-gray-bg border-b border-pr-gray-light px-6 py-5">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-white border border-pr-black-soft flex items-center justify-center">
                  <Lightbulb className="h-5 w-5 text-pr-black" />
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pr-black mb-0.5">
                    Problématique
                  </div>
                  <CardTitle className="font-dm-serif text-xl text-pr-black leading-none">
                    Question proposée
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
          <CardContent className="p-6 sm:p-7 space-y-5">
            <div className="bg-pr-gray-bg/60 rounded-xl p-6 border border-pr-black-pale">
              <p className="font-lora text-[18px] text-pr-black leading-[1.5]">
                {problematique}
              </p>
            </div>

            {/* Conseils */}
            <Alert className="bg-pr-gray-bg border-pr-gray-light rounded-xl">
              <AlertCircle className="h-4 w-4 text-pr-black" />
              <AlertDescription className="text-[14px] text-pr-gray-dark leading-relaxed">
                <strong className="text-pr-black">Évaluation :</strong> cette problématique est-elle dialectique ? Féconde ? Pertinente ?
                Elle devrait permettre un développement en trois parties équilibrées avec des arguments opposés.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      )}
    </div>
  );
};


