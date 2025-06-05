
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Loader2, Languages, Download, BookOpen } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { downloadAsPDF, downloadAsText } from '@/utils/downloadUtils';
import { useToast } from '@/hooks/use-toast';

interface LanguageParagraphGeneratorProps {
  language: 'fr' | 'en';
}

export const LanguageParagraphGenerator = ({ language }: LanguageParagraphGeneratorProps) => {
  const [article, setArticle] = useState('');
  const [idea, setIdea] = useState('');
  const [targetLanguage, setTargetLanguage] = useState<'en' | 'de' | 'es'>('en');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<string | null>(null);
  const { toast } = useToast();

  const handleGenerate = async () => {
    if (!article.trim() || !idea.trim()) {
      toast({
        title: language === 'fr' ? 'Erreur' : 'Error',
        description: language === 'fr' ? 
          'Veuillez remplir l\'article et l\'idée à développer.' : 
          'Please fill in both the article and the idea to develop.',
        variant: 'destructive',
      });
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-language-paragraph', {
        body: {
          article: article.trim(),
          idea: idea.trim(),
          language: targetLanguage,
        },
      });

      if (error) throw error;

      setResult(data.content);
      toast({
        title: language === 'fr' ? 'Succès' : 'Success',
        description: language === 'fr' ? 
          'Paragraphe généré avec succès!' : 
          'Paragraph generated successfully!',
      });
    } catch (error) {
      console.error('Error generating paragraph:', error);
      toast({
        title: language === 'fr' ? 'Erreur' : 'Error',
        description: language === 'fr' ? 
          'Erreur lors de la génération du paragraphe.' : 
          'Error generating paragraph.',
        variant: 'destructive',
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadPDF = async () => {
    if (!result) return;
    const timestamp = new Date().toISOString().split('T')[0];
    const languageNames = { en: 'anglais', de: 'allemand', es: 'espagnol' };
    await downloadAsPDF(
      result, 
      `paragraphe-${languageNames[targetLanguage]}-${timestamp}`, 
      `Paragraphe d'Argumentation - ${languageNames[targetLanguage].charAt(0).toUpperCase() + languageNames[targetLanguage].slice(1)}`
    );
  };

  const handleDownloadText = () => {
    if (!result) return;
    const timestamp = new Date().toISOString().split('T')[0];
    const languageNames = { en: 'anglais', de: 'allemand', es: 'espagnol' };
    downloadAsText(result, `paragraphe-${languageNames[targetLanguage]}-${timestamp}`);
  };

  const loadExample = () => {
    setArticle("Remote work, accelerated by the pandemic, is transforming work organization and geographical distribution of populations. More and more city dwellers are choosing to move to the provinces, taking advantage of the flexibility offered by companies. This phenomenon raises questions about the future of large cities and the revitalization of rural areas.");
    setIdea("Remote work is transforming modern society.");
    setTargetLanguage('en');
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Languages className="h-5 w-5" />
            {language === 'fr' ? 'Générateur de Paragraphes de Langues' : 'Language Paragraph Generator'}
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid gap-4">
            <div>
              <Label htmlFor="language-select">
                {language === 'fr' ? 'Langue cible' : 'Target Language'}
              </Label>
              <Select value={targetLanguage} onValueChange={(value: 'en' | 'de' | 'es') => setTargetLanguage(value)}>
                <SelectTrigger>
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="en">🇬🇧 Anglais / English</SelectItem>
                  <SelectItem value="de">🇩🇪 Allemand / Deutsch</SelectItem>
                  <SelectItem value="es">🇪🇸 Espagnol / Español</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <Label htmlFor="article">
                {language === 'fr' ? 'Article de presse' : 'Press Article'}
              </Label>
              <Textarea
                id="article"
                placeholder={language === 'fr' ? 
                  'Collez ici l\'article de presse à analyser...' : 
                  'Paste the press article to analyze here...'}
                value={article}
                onChange={(e) => setArticle(e.target.value)}
                rows={6}
              />
            </div>

            <div>
              <Label htmlFor="idea">
                {language === 'fr' ? 'Idée à développer' : 'Idea to Develop'}
              </Label>
              <Textarea
                id="idea"
                placeholder={language === 'fr' ? 
                  'Quelle idée voulez-vous développer à partir de cet article ?' : 
                  'What idea do you want to develop from this article?'}
                value={idea}
                onChange={(e) => setIdea(e.target.value)}
                rows={2}
              />
            </div>

            <div className="flex gap-2">
              <Button onClick={handleGenerate} disabled={loading} className="flex-1">
                {loading ? (
                  <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                ) : (
                  <BookOpen className="h-4 w-4 mr-2" />
                )}
                {language === 'fr' ? 'Générer le paragraphe' : 'Generate Paragraph'}
              </Button>
              <Button onClick={loadExample} variant="outline">
                {language === 'fr' ? 'Exemple' : 'Example'}
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {result && (
        <Card>
          <CardHeader>
            <div className="flex justify-between items-center">
              <CardTitle className="flex items-center gap-2">
                <BookOpen className="h-5 w-5" />
                {language === 'fr' ? 'Paragraphe Généré' : 'Generated Paragraph'}
              </CardTitle>
              <div className="flex gap-2">
                <Button onClick={handleDownloadText} variant="outline" size="sm">
                  <Download className="h-4 w-4 mr-1" />
                  TXT
                </Button>
                <Button onClick={handleDownloadPDF} size="sm">
                  <Download className="h-4 w-4 mr-1" />
                  PDF
                </Button>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="bg-gray-50 p-4 rounded-lg whitespace-pre-wrap">
              {result}
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
