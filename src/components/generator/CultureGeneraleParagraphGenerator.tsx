import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { BookOpen, Loader2, Copy, Check, Sparkles, Info, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { supabase } from '@/integrations/supabase/client';

export const CultureGeneraleParagraphGenerator = () => {
  const [details, setDetails] = useState('');
  const [loading, setLoading] = useState(false);
  const [paragraph, setParagraph] = useState<string | null>(null);
  const [wordCount, setWordCount] = useState(0);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!details.trim()) {
      toast({
        title: "Champ requis",
        description: "Veuillez décrire les détails de votre paragraphe.",
        variant: "destructive",
      });
      return;
    }

    setLoading(true);
    setParagraph(null);

    try {
      console.log('Calling generate-culture-paragraph edge function with details:', details.trim());

      const { data, error } = await supabase.functions.invoke('generate-culture-paragraph', {
        body: { details: details.trim() },
      });

      if (error) {
        throw new Error(error.message || "Erreur lors de l'appel à la fonction");
      }

      if (data.error) {
        throw new Error(data.error);
      }

      const generatedParagraph = data.paragraph;

      if (!generatedParagraph) {
        throw new Error("Le paragraphe généré est vide");
      }

      const wordCount = generatedParagraph.split(/\s+/).filter(Boolean).length;

      console.log('Paragraph generated successfully, word count:', wordCount);

      setParagraph(generatedParagraph);
      setWordCount(wordCount);

      toast({
        title: "Paragraphe généré !",
        description: `Votre paragraphe de culture générale a été généré avec succès (${wordCount} mots).`,
      });
    } catch (error: any) {
      console.error('Error generating paragraph:', error);
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
    if (paragraph) {
      navigator.clipboard.writeText(paragraph);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast({
        title: "Copié !",
        description: "Le paragraphe a été copié dans le presse-papiers.",
      });
    }
  };

  const loadExample = () => {
    setDetails(`Sujet : Pensez-vous, comme l'a écrit Montaigne, qu'« il se trouve plus de différence de tel homme à tel homme que de tel animal à tel homme » ?

Argument à développer : Pour saisir la proximité avec l'animal, il faut se détacher des a priori imposés par notre culture.

Contexte : Les paragraphes précédents ont montré que l'homme partage de nombreuses caractéristiques avec l'animal.

Référence : Montaigne, Essais`);
  };

  return (
    <div className="space-y-6">
      {/* Header avec explication */}
      <Card className="bg-carnet-paper-2 rounded-2xl border border-pr-gray-light overflow-hidden shadow-[0_2px_12px_rgba(26,26,24,0.04)]">
        <div className="h-[3px] w-full bg-pr-black" />
        <CardHeader className="px-6 pt-5 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-pr-gray-bg border border-pr-black-soft flex items-center justify-center">
              <BookOpen className="h-5 w-5 text-pr-black" />
            </div>
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pr-black mb-0.5">
                Culture générale
              </div>
              <CardTitle className="font-dm-serif text-2xl text-pr-black leading-none">
                Paragraphe de dissertation
              </CardTitle>
            </div>
          </div>
        </CardHeader>
        <CardContent className="px-6 pb-6">
          <Alert className="bg-pr-gray-bg/60 border-pr-black-pale rounded-xl">
            <Info className="h-4 w-4 text-pr-black" />
            <AlertDescription className="text-[14px] text-pr-gray-dark leading-relaxed">
              <strong className="text-pr-black">Comment faire un bon paragraphe ?</strong> Un paragraphe = une idée.
              Commence par une transition avec le précédent, développe ton argument, puis appuie-le avec une référence (1-2 max).
              Soigne l'écriture et fais des liens logiques entre les paragraphes.
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {/* Formulaire */}
      <Card className="bg-carnet-paper-2 rounded-2xl border border-pr-gray-light shadow-[0_2px_12px_rgba(26,26,24,0.04)]">
        <CardHeader className="px-6 pt-5 pb-4">
          <CardTitle className="text-[15px] font-semibold text-pr-black flex items-center gap-2">
            <Sparkles className="h-4 w-4 text-pr-black" />
            Informations pour la génération
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 px-6 pb-6">
          {/* Zone de détails */}
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <Label htmlFor="details" className="text-[15px] font-semibold text-pr-black flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-pr-gray-bg text-pr-black text-[11px] font-bold">
                  1
                </span>
                Détails du paragraphe à générer
              </Label>
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-black bg-pr-gray-bg px-2.5 py-1 rounded-full">
                Requis
              </span>
            </div>
            <Textarea
              id="details"
              placeholder={`Décrivez le paragraphe que vous voulez générer :

Sujet : Pensez-vous, comme l'a écrit Montaigne, qu'« il se trouve plus de différence de tel homme à tel homme que de tel animal à tel homme » ?

Argument : Pour saisir la proximité avec l'animal, il faut se détacher des a priori imposés par notre culture.

Contexte : Les paragraphes précédents ont montré que l'homme partage de nombreuses caractéristiques avec l'animal.

Référence : Montaigne, Essais`}
              value={details}
              onChange={(e) => setDetails(e.target.value)}
              className="min-h-[200px] border-pr-gray-light bg-carnet-paper-2 focus:border-pr-black focus:ring-2 focus:ring-pr-black/20 text-pr-black placeholder:text-pr-gray-mid rounded-xl resize-y text-[14px] leading-relaxed p-4 transition-colors"
            />
            <p className="text-[13px] text-pr-gray-mid">
              Plus vous donnez de détails (sujet, argument, contexte, références), mieux sera le paragraphe généré.
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
              disabled={!details.trim() || loading}
              className="flex items-center justify-center gap-2 flex-1 bg-pr-black hover:bg-pr-black-dark text-white font-semibold rounded-xl shadow-[0_4px_14px_rgba(244,132,95,0.35)] hover:shadow-[0_6px_20px_rgba(196,90,53,0.4)] transition-all duration-200 disabled:opacity-50 disabled:shadow-none h-12 text-[15px]"
            >
              {loading ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  <span>Génération en cours…</span>
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4" />
                  <span>Générer le paragraphe</span>
                </>
              )}
            </Button>

            <Button
              type="button"
              onClick={loadExample}
              className="flex items-center gap-2 bg-carnet-paper-2 border border-pr-gray-light text-pr-gray-dark hover:bg-pr-gray-bg hover:text-pr-black hover:border-pr-black-soft rounded-xl h-12 px-4 font-medium transition-colors"
              disabled={loading}
            >
              <Info className="h-4 w-4" />
              Exemple
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Résultat */}
      {paragraph && (
        <Card className="bg-carnet-paper-2 rounded-2xl border border-pr-gray-light overflow-hidden shadow-[0_2px_12px_rgba(26,26,24,0.04)] animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="h-[3px] w-full bg-pr-black" />
          <CardHeader className="bg-pr-gray-bg border-b border-pr-gray-light px-6 py-5">
            <div className="flex items-center justify-between gap-3 flex-wrap">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-carnet-paper-2 border border-pr-black-soft flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-pr-black" />
                </div>
                <div>
                  <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pr-black mb-0.5">
                    Paragraphe généré
                  </div>
                  <CardTitle className="font-dm-serif text-xl text-pr-black leading-none">
                    Culture générale
                  </CardTitle>
                </div>
              </div>
              <div className="flex items-center gap-2">
                {wordCount > 0 && (
                  <span className="text-[11px] font-semibold uppercase tracking-[0.10em] text-pr-gray-mid bg-carnet-paper-2 border border-pr-gray-light px-2.5 py-1 rounded-full">
                    {wordCount} mots
                  </span>
                )}
                <Button
                  onClick={handleCopy}
                  size="sm"
                  className="bg-carnet-paper-2 border border-pr-gray-light text-pr-gray-dark hover:bg-pr-gray-bg hover:text-pr-black hover:border-pr-black-soft rounded-lg flex items-center gap-2"
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
            </div>
          </CardHeader>
          <CardContent className="p-6 sm:p-7 space-y-5">
            <div className="bg-carnet-paper-2 rounded-xl p-6 border border-pr-gray-light">
              <p className="font-lora text-pr-black leading-[1.7] whitespace-pre-wrap text-[16px]">
                {paragraph}
              </p>
            </div>

            {/* Conseils */}
            <Alert className="bg-pr-gray-bg border-pr-gray-light rounded-xl">
              <AlertCircle className="h-4 w-4 text-pr-black" />
              <AlertDescription className="text-[14px] text-pr-gray-dark leading-relaxed">
                <strong className="text-pr-black">Conseils :</strong> Vérifie que le paragraphe commence bien par une transition,
                développe clairement l'argument, et utilise la référence de manière pertinente.
                N'oublie pas de souligner les titres d'œuvres dans ta copie finale.
              </AlertDescription>
            </Alert>
          </CardContent>
        </Card>
      )}
    </div>
  );
};

