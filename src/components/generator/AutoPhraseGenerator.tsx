
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { RefreshCw, Target, Loader2, Copy, Check } from 'lucide-react';
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
    <Card className="mb-6 border-orange-200 bg-gradient-to-r from-orange-50 to-orange-100">
      <CardHeader className="bg-gradient-to-r from-orange-600 to-orange-500 text-white rounded-t-lg">
        <CardTitle className="flex items-center gap-3">
          <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
            <Target className="h-6 w-6" />
          </div>
          <div>
            <div className="text-xl font-bold">
              {language === 'fr' ? 'Zone de génération' : 'Generation Zone'}
            </div>
            <div className="text-orange-100 text-sm font-normal mt-1">
              {language === 'fr' ? 'Phrase de presse automatique à traduire' : 'Automatic press sentence to translate'}
            </div>
          </div>
        </CardTitle>
      </CardHeader>
      
      <CardContent className="p-6 space-y-4">
        {currentPhrase ? (
          <div className="space-y-4">
            {/* Phrase française */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-sm font-semibold text-orange-700 mb-2">
                  {language === 'fr' ? 'Phrase à traduire (Français)' : 'Sentence to translate (French)'}
                </h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => copyToClipboard(currentPhrase.french)}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                </Button>
              </div>
              <p className="text-lg font-medium text-orange-900 italic">
                "{currentPhrase.french}"
              </p>
            </div>

            {/* Phrase de référence */}
            <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
              <h3 className="text-sm font-semibold text-orange-700 mb-2">
                {language === 'fr' ? 'Traduction de référence (Anglais)' : 'Reference translation (English)'}
              </h3>
              <p className="text-lg font-medium text-orange-900 italic">
                "{currentPhrase.reference}"
              </p>
            </div>

            {/* Points grammaticaux */}
            {currentPhrase.grammar_points && currentPhrase.grammar_points.length > 0 && (
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-orange-700 mb-2">
                  {language === 'fr' ? 'Points grammaticaux' : 'Grammar points'}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {currentPhrase.grammar_points.map((point, index) => (
                    <span key={index} className="bg-orange-100 text-orange-800 px-2 py-1 rounded text-sm">
                      {point}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Notes explicatives */}
            {currentPhrase.notes && currentPhrase.notes.length > 0 && (
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4">
                <h3 className="text-sm font-semibold text-orange-700 mb-2">
                  {language === 'fr' ? 'Notes explicatives' : 'Explanatory notes'}
                </h3>
                <ul className="space-y-1">
                  {currentPhrase.notes.map((note, index) => (
                    <li key={index} className="text-sm text-orange-800 flex items-start gap-2">
                      <span className="text-orange-600 mt-1">•</span>
                      <span>{note}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-8">
            <div className="animate-pulse text-muted-foreground">
              {language === 'fr' ? 'Génération de la première phrase...' : 'Generating first sentence...'}
            </div>
          </div>
        )}

        {/* Bouton pour nouvelle phrase */}
        <div className="flex justify-center pt-4">
          <Button 
            onClick={generatePhrase} 
            disabled={isGenerating}
            size="lg"
            className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
          >
            {isGenerating ? (
              <>
                <Loader2 className="mr-2 h-5 w-5 animate-spin" />
                {language === 'fr' ? 'Génération...' : 'Generating...'}
              </>
            ) : (
              <>
                <RefreshCw className="mr-2 h-5 w-5" />
                {language === 'fr' ? 'Nouvelle phrase' : 'New sentence'}
              </>
            )}
          </Button>
        </div>

        <p className="text-center text-sm text-muted-foreground">
          {language === 'fr' 
            ? 'Cliquez pour générer une phrase de presse à traduire'
            : 'Click to generate a press sentence to translate'
          }
        </p>
      </CardContent>
    </Card>
  );
};
