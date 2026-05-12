
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RefreshCw, Target, Loader2, Copy, Check, Sparkles, BookOpen, Lightbulb, PenTool } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface AutoPhraseGeneratorProps {
  language: 'fr' | 'en';
  onPhraseGenerated?: (phrase: string, reference: string) => void;
}

interface GeneratedPhrase {
  french: string;
  reference: string;
  grammar_points: string[];
  notes: string[];
}

export const AutoPhraseGenerator = ({ language, onPhraseGenerated }: AutoPhraseGeneratorProps) => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [currentPhrase, setCurrentPhrase] = useState<GeneratedPhrase | null>(null);
  const [history, setHistory] = useState<string[]>([]);
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const generatePhrase = async () => {
    setIsGenerating(true);

    try {
      const { data, error } = await supabase.functions.invoke('generate-theme-sentence', {
        body: {
          language: language === 'fr' ? 'en' : 'de', // Pour générer des phrases EN ou DE vers FR
          history: history
        }
      });

      if (error) {
        console.error('Error generating phrase:', error);
        toast({
          title: language === 'fr' ? "Erreur" : "Error",
          description: language === 'fr' ? "Erreur lors de la génération" : "Error generating phrase",
          variant: "destructive",
        });
        return;
      }

      setCurrentPhrase(data);
      setHistory(prev => [...prev, data.reference].slice(-10)); // Garder les 10 dernières

      if (onPhraseGenerated) {
        onPhraseGenerated(data.french, data.reference);
      }

      toast({
        title: language === 'fr' ? "Nouvelle phrase générée !" : "New phrase generated!",
        description: language === 'fr' ? "Phrase de presse prête à traduire" : "Press sentence ready to translate",
      });

    } catch (error) {
      console.error('Error:', error);
      toast({
        title: language === 'fr' ? "Erreur" : "Error",
        description: language === 'fr' ? "Une erreur s'est produite" : "An error occurred",
        variant: "destructive",
      });
    } finally {
      setIsGenerating(false);
    }
  };

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
      toast({
        title: language === 'fr' ? "Copié !" : "Copied!",
        description: language === 'fr' ? "Phrase copiée dans le presse-papiers" : "Phrase copied to clipboard",
      });
    } catch (error) {
      console.error('Failed to copy:', error);
    }
  };

  // Générer une phrase automatiquement au chargement
  useEffect(() => {
    generatePhrase();
  }, []);

  return (
    <Card className="mb-8 border border-pr-gray-light bg-white overflow-hidden rounded-2xl shadow-[0_2px_12px_rgba(26,26,24,0.04)]">
      <div className="h-[3px] w-full bg-pr-black" />
      <CardHeader className="bg-pr-gray-bg border-b border-pr-gray-light px-6 py-5">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-white border border-pr-black-soft flex items-center justify-center">
              <Target className="h-5 w-5 text-pr-black" />
            </div>
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pr-black mb-0.5">
                {language === 'fr' ? 'Génération automatique' : 'Auto generation'}
              </div>
              <CardTitle className="font-dm-serif text-2xl text-pr-black leading-none">
                {language === 'fr' ? 'Phrase de presse à traduire' : 'Press sentence to translate'}
              </CardTitle>
            </div>
          </div>
          <span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-semibold uppercase tracking-[0.12em] bg-white text-pr-black border border-pr-black-soft">
            <Sparkles className="w-3 h-3 mr-1.5" />
            IA
          </span>
        </div>
      </CardHeader>

      <CardContent className="p-6 sm:p-7 space-y-6">
        {currentPhrase ? (
          <div className="space-y-5">
            {/* Phrase française */}
            <div className="group relative bg-white border border-pr-gray-light rounded-xl p-6 transition-colors hover:border-pr-black-soft">
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => copyToClipboard(currentPhrase.french)}
                  className="h-8 w-8 text-pr-gray-mid hover:text-pr-black hover:bg-pr-gray-bg"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <PenTool className="h-3.5 w-3.5 text-pr-black" />
                <h3 className="text-[11px] font-semibold text-pr-gray-mid uppercase tracking-[0.14em]">
                  {language === 'fr' ? 'Phrase à traduire' : 'Sentence to translate'}
                </h3>
              </div>

              <p className="font-lora text-xl md:text-2xl text-pr-black leading-[1.4]">
                « {currentPhrase.french} »
              </p>
            </div>

            {/* Phrase de référence */}
            <div className="bg-pr-gray-bg border border-pr-gray-light rounded-xl p-5 border-l-[3px] border-l-pr-black">
              <div className="flex items-center gap-2 mb-2">
                <BookOpen className="h-3.5 w-3.5 text-pr-black" />
                <h3 className="text-[11px] font-semibold text-pr-gray-mid uppercase tracking-[0.14em]">
                  {language === 'fr' ? 'Traduction de référence' : 'Reference translation'}
                </h3>
              </div>
              <p className="font-lora text-[16px] text-pr-gray-dark italic leading-relaxed">
                « {currentPhrase.reference} »
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {/* Points grammaticaux */}
              {currentPhrase.grammar_points && currentPhrase.grammar_points.length > 0 && (
                <div className="bg-white border border-pr-gray-light rounded-xl p-5">
                  <h3 className="text-[11px] font-semibold text-pr-gray-mid uppercase tracking-[0.14em] flex items-center gap-2 mb-3">
                    <Target className="h-3.5 w-3.5 text-pr-black" />
                    {language === 'fr' ? 'Points grammaticaux' : 'Grammar points'}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {currentPhrase.grammar_points.map((point, index) => (
                      <span key={index} className="bg-pr-gray-bg text-pr-gray-dark px-3 py-1 rounded-full text-[12px] font-medium border border-pr-gray-light">
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Notes explicatives */}
              {currentPhrase.notes && currentPhrase.notes.length > 0 && (
                <div className="bg-white border border-pr-gray-light rounded-xl p-5">
                  <h3 className="text-[11px] font-semibold text-pr-gray-mid uppercase tracking-[0.14em] flex items-center gap-2 mb-3">
                    <Lightbulb className="h-3.5 w-3.5 text-pr-black" />
                    {language === 'fr' ? 'Notes explicatives' : 'Explanatory notes'}
                  </h3>
                  <ul className="space-y-2">
                    {currentPhrase.notes.map((note, index) => (
                      <li key={index} className="text-[14px] text-pr-gray-dark flex items-start gap-2.5">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-pr-black flex-shrink-0" />
                        <span className="leading-relaxed">{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center py-12 bg-pr-gray-bg rounded-xl border border-dashed border-pr-gray-light">
            <div className="animate-pulse flex flex-col items-center">
              <div className="h-12 w-12 bg-pr-gray-light rounded-full mb-4"></div>
              <div className="h-4 w-48 bg-pr-gray-light rounded mb-2"></div>
              <div className="h-3 w-32 bg-pr-gray-light rounded"></div>
            </div>
          </div>
        )}

        {/* Bouton pour nouvelle phrase */}
        <div className="flex flex-col items-center pt-4 border-t border-pr-gray-light">
          <Button
            onClick={generatePhrase}
            disabled={isGenerating}
            className="bg-pr-black hover:bg-pr-black-dark text-white px-7 h-12 text-[15px] font-semibold rounded-xl shadow-[0_4px_14px_rgba(244,132,95,0.35)] hover:shadow-[0_6px_20px_rgba(196,90,53,0.4)] transition-all duration-200 disabled:opacity-50 disabled:shadow-none"
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                {language === 'fr' ? 'Génération en cours…' : 'Generating…'}
              </>
            ) : (
              <>
                <RefreshCw className="mr-2 h-4 w-4" />
                {language === 'fr' ? 'Générer une nouvelle phrase' : 'Generate new sentence'}
              </>
            )}
          </Button>

          <p className="text-center text-[12px] text-pr-gray-mid mt-3">
            {language === 'fr'
              ? 'Cliquez pour générer une phrase de presse à traduire.'
              : 'Click to generate a press sentence to translate.'
            }
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
