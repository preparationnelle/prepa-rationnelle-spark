
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { TrendingUp, Loader2, Sparkles, AlertCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/context/AuthContext';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CaseStudyDisplay } from './CaseStudyDisplay';

interface CaseStudyGeneratorProps {
  language: 'fr' | 'en';
}

export const CaseStudyGenerator = ({ language }: CaseStudyGeneratorProps) => {
  const [article, setArticle] = useState('');
  const [notion, setNotion] = useState('');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedCaseStudy, setGeneratedCaseStudy] = useState<string | null>(null);
  const [wordCount, setWordCount] = useState(0);
  const { toast } = useToast();
  const { currentUser } = useAuth();

  const loadExample = () => {
    setArticle("https://www.lemonde.fr/international/article/2024/01/15/tensions-en-mer-de-chine-meridionale_6210234_3210.html");
    setNotion("Rivalités de puissances et espaces maritimes");
  };

  const handleGenerate = async () => {
    if (!article.trim() || !notion.trim()) {
      toast({
        title: language === 'fr' ? "Erreur" : "Error",
        description: language === 'fr' ? "Veuillez remplir tous les champs" : "Please fill in all fields",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);

    try {
      const { data, error } = await supabase.functions.invoke('generate-case-study', {
        body: {
          article: article.trim(),
          notion: notion.trim(),
          userId: currentUser?.id || null,
          language: language,
        },
      });

      if (error) {
        console.error('Error generating case study:', error);
        toast({
          title: language === 'fr' ? "Erreur" : "Error",
          description: error.message || (language === 'fr' ? "Erreur lors de la génération" : "Generation error"),
          variant: "destructive",
        });
        return;
      }

      setGeneratedCaseStudy(data.caseStudy);
      setWordCount(data.wordCount);
      toast({
        title: language === 'fr' ? "Succès" : "Success",
        description: language === 'fr' ? "Étude de cas générée avec succès !" : "Case study generated successfully!",
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

  return (
    <div className="space-y-6">
      <Card className="bg-white rounded-2xl border border-pr-gray-light overflow-hidden shadow-[0_2px_12px_rgba(26,26,24,0.04)]">
        <div className="h-[3px] w-full bg-pr-orange" />
        <CardHeader className="bg-pr-gray-bg border-b border-pr-gray-light px-6 py-5">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-white border border-pr-orange-soft flex items-center justify-center">
              <TrendingUp className="h-5 w-5 text-pr-orange-dark" />
            </div>
            <div>
              <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pr-orange-dark mb-0.5">
                {language === 'fr' ? 'Géopolitique' : 'Geopolitics'}
              </div>
              <CardTitle className="font-dm-serif text-2xl text-pr-black leading-none">
                {language === 'fr' ? "Études de cas" : 'Case studies'}
              </CardTitle>
              <div className="text-pr-gray-mid text-[13px] mt-1">
                {language === 'fr' ? "Transformez un article d'actualité en étude de cas structurée." : 'Turn a news article into a structured case study.'}
              </div>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-6 sm:p-7 space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <Label htmlFor="article" className="text-[15px] font-semibold text-pr-black flex items-center gap-2">
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-pr-orange-pale text-pr-orange-dark text-[11px] font-bold">
                  1
                </span>
                {language === 'fr' ? 'Article (URL ou texte)' : 'Article (URL or text)'}
              </Label>
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-orange-dark bg-pr-orange-pale px-2.5 py-1 rounded-full">
                {language === 'fr' ? 'Requis' : 'Required'}
              </span>
            </div>
            <Textarea
              id="article"
              placeholder={language === 'fr' ? "Collez une URL d'article ou le texte complet…" : 'Paste an article URL or full text…'}
              value={article}
              onChange={(e) => setArticle(e.target.value)}
              className="min-h-[120px] resize-y border-pr-gray-light focus:border-pr-orange focus:ring-2 focus:ring-pr-orange/20 transition-colors rounded-xl text-[15px] leading-relaxed p-4 bg-white text-pr-black placeholder:text-pr-gray-mid"
            />
          </div>

          <div className="space-y-3">
            <Label htmlFor="notion" className="text-[15px] font-semibold text-pr-black flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-pr-orange-pale text-pr-orange-dark text-[11px] font-bold">
                2
              </span>
              {language === 'fr' ? 'Notion / thème géopolitique' : 'Geopolitical notion / theme'}
            </Label>
            <Input
              id="notion"
              placeholder={language === 'fr' ? 'Ex : Rivalités de puissances, frontières, ressources énergétiques…' : 'Ex: Power rivalries, borders, energy resources…'}
              value={notion}
              onChange={(e) => setNotion(e.target.value)}
              className="h-12 border-pr-gray-light focus:border-pr-orange focus:ring-2 focus:ring-pr-orange/20 transition-colors rounded-xl text-[15px] bg-white text-pr-black placeholder:text-pr-gray-mid"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button
              onClick={handleGenerate}
              disabled={isGenerating || !article.trim() || !notion.trim()}
              className="flex-1 h-12 text-[15px] bg-pr-orange hover:bg-pr-orange-dark text-white font-semibold rounded-xl shadow-[0_4px_14px_rgba(244,132,95,0.35)] hover:shadow-[0_6px_20px_rgba(196,90,53,0.4)] transition-all duration-200 disabled:opacity-50 disabled:shadow-none"
            >
              {isGenerating ? (
                <>
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                  {language === 'fr' ? 'Génération en cours…' : 'Generating…'}
                </>
              ) : (
                <>
                  <Sparkles className="h-4 w-4 mr-2" />
                  {language === 'fr' ? "Générer l'étude de cas" : 'Generate case study'}
                </>
              )}
            </Button>

            <Button
              onClick={loadExample}
              className="bg-white border border-pr-gray-light text-pr-gray-dark hover:bg-pr-orange-pale hover:text-pr-orange-dark hover:border-pr-orange-soft rounded-xl h-12 px-5 font-medium transition-colors"
            >
              {language === 'fr' ? 'Exemple' : 'Example'}
            </Button>
          </div>

          <Alert className="bg-pr-gray-bg border-pr-gray-light rounded-xl">
            <AlertCircle className="h-4 w-4 text-pr-orange" />
            <AlertDescription className="text-[14px] text-pr-gray-dark leading-relaxed">
              {language === 'fr'
                ? <><strong className="text-pr-black">Comment ça marche :</strong> entrez l'URL d'un article ou collez le texte, précisez le thème. L'IA génère une étude structurée avec contexte, chiffres clés, sujets de dissertation et analyse des acteurs.</>
                : <><strong className="text-pr-black">How it works:</strong> enter the URL of an article or paste the text, then specify the theme. The AI will generate a structured study with context, key figures, dissertation topics and actor analysis.</>
              }
            </AlertDescription>
          </Alert>
        </CardContent>
      </Card>

      {generatedCaseStudy && (
        <CaseStudyDisplay
          caseStudy={generatedCaseStudy}
          wordCount={wordCount}
          language={language}
        />
      )}
    </div>
  );
};
