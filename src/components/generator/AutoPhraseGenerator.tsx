
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
    <Card className="mb-8 border border-gray-100 shadow-xl bg-white overflow-hidden">
      <CardHeader className="bg-white border-b border-gray-100 pb-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-orange-50 rounded-xl">
              <Target className="h-6 w-6 text-orange-600" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold text-gray-900">
                {language === 'fr' ? 'Zone de génération' : 'Generation Zone'}
              </CardTitle>
              <p className="text-gray-500 text-sm mt-1">
                {language === 'fr' ? 'Phrase de presse automatique à traduire' : 'Automatic press sentence to translate'}
              </p>
            </div>
          </div>
          <div className="hidden sm:block">
            <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-orange-50 text-orange-700 border border-orange-100">
              <Sparkles className="w-3 h-3 mr-1" />
              IA Powered
            </span>
          </div>
        </div>
      </CardHeader>

      <CardContent className="p-6 sm:p-8 space-y-8">
        {currentPhrase ? (
          <div className="space-y-6">
            {/* Phrase française */}
            <div className="group relative bg-white border border-gray-200 hover:border-orange-200 rounded-xl p-6 transition-all duration-300 hover:shadow-md">
              <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => copyToClipboard(currentPhrase.french)}
                  className="h-8 w-8 text-gray-400 hover:text-orange-600"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>

              <div className="flex items-center gap-2 mb-3">
                <PenTool className="h-4 w-4 text-orange-500" />
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  {language === 'fr' ? 'Phrase à traduire' : 'Sentence to translate'}
                </h3>
              </div>

              <p className="text-xl md:text-2xl font-medium text-gray-900 leading-relaxed font-serif">
                "{currentPhrase.french}"
              </p>
            </div>

            {/* Phrase de référence */}
            <div className="bg-gray-50 border border-gray-200 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-3">
                <BookOpen className="h-4 w-4 text-blue-500" />
                <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                  {language === 'fr' ? 'Traduction de référence' : 'Reference translation'}
                </h3>
              </div>
              <p className="text-lg text-gray-700 italic leading-relaxed">
                "{currentPhrase.reference}"
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Points grammaticaux */}
              {currentPhrase.grammar_points && currentPhrase.grammar_points.length > 0 && (
                <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="h-2 w-2 rounded-full bg-purple-500" />
                    <h3 className="text-sm font-semibold text-gray-900">
                      {language === 'fr' ? 'Points grammaticaux' : 'Grammar points'}
                    </h3>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {currentPhrase.grammar_points.map((point, index) => (
                      <span key={index} className="bg-purple-50 text-purple-700 px-3 py-1.5 rounded-lg text-sm font-medium border border-purple-100">
                        {point}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Notes explicatives */}
              {currentPhrase.notes && currentPhrase.notes.length > 0 && (
                <div className="bg-white border border-gray-100 rounded-xl p-5 shadow-sm">
                  <div className="flex items-center gap-2 mb-4">
                    <Lightbulb className="h-4 w-4 text-amber-500" />
                    <h3 className="text-sm font-semibold text-gray-900">
                      {language === 'fr' ? 'Notes explicatives' : 'Explanatory notes'}
                    </h3>
                  </div>
                  <ul className="space-y-2">
                    {currentPhrase.notes.map((note, index) => (
                      <li key={index} className="text-sm text-gray-600 flex items-start gap-2.5">
                        <span className="text-amber-500 mt-1.5 h-1.5 w-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                        <span className="leading-relaxed">{note}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        ) : (
          <div className="text-center py-12 bg-gray-50 rounded-xl border border-dashed border-gray-200">
            <div className="animate-pulse flex flex-col items-center">
              <div className="h-12 w-12 bg-gray-200 rounded-full mb-4"></div>
              <div className="h-4 w-48 bg-gray-200 rounded mb-2"></div>
              <div className="h-3 w-32 bg-gray-200 rounded"></div>
            </div>
          </div>
        )}

        {/* Bouton pour nouvelle phrase */}
        <div className="flex flex-col items-center pt-4 border-t border-gray-100 mt-8">
          <Button
            onClick={generatePhrase}
            disabled={isGenerating}
            size="lg"
            className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white px-8 py-6 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                {language === 'fr' ? 'Génération en cours...' : 'Generating...'}
              </>
            ) : (
              <>
                <RefreshCw className="mr-2 h-5 w-5" />
                {language === 'fr' ? 'Générer une nouvelle phrase' : 'Generate new sentence'}
              </>
            )}
          </Button>

          <p className="text-center text-xs text-gray-400 mt-4">
            {language === 'fr'
              ? 'Cliquez pour générer une phrase de presse à traduire'
              : 'Click to generate a press sentence to translate'
            }
          </p>
        </div>
      </CardContent>
    </Card>
  );
};
