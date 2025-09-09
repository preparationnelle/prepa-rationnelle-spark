
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Badge } from '@/components/ui/badge';
import { 
  Loader2, 
  Download, 
  Copy, 
  Check, 
  Sparkles, 
  FileText,
  Target,
  Lightbulb
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { downloadAsPDF, downloadAsText } from '@/utils/downloadUtils';
import { toast } from 'sonner';

interface LanguageParagraphGeneratorProps {
  language: 'fr' | 'en';
  selectedLanguage: 'allemand' | 'anglais' | 'espagnol';
}

interface GenerationResult {
  paragraph: string;
  bulletPoints: string[];
}

export const LanguageParagraphGenerator = ({ language, selectedLanguage }: LanguageParagraphGeneratorProps) => {
  const [article, setArticle] = useState('');
  const [keywords, setKeywords] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GenerationResult | null>(null);
  const [copied, setCopied] = useState(false);

  // Mapping des langues
  const languageMapping = {
    'anglais': 'en',
    'allemand': 'de', 
    'espagnol': 'es'
  };

  const targetLanguage = languageMapping[selectedLanguage];

  const handleGenerate = async () => {
    if (!article.trim()) {
      toast.error('Veuillez coller un article pour générer le paragraphe.');
      return;
    }

    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-language-paragraph', {
        body: {
          article: article.trim(),
          keywords: keywords.trim() || undefined,
          language: targetLanguage,
          mode: 'paragraph' // Nouveau mode pour le paragraphe
        },
      });

      if (error) throw error;

      // Parse le résultat
      const parsedResult = parseGenerationResult(data.content);
      setResult(parsedResult);
      
      toast.success('Paragraphe généré avec succès !');
    } catch (error) {
      console.error('Error generating paragraph:', error);
      toast.error('Erreur lors de la génération du paragraphe.');
    } finally {
      setLoading(false);
    }
  };

  const parseGenerationResult = (content: string): GenerationResult => {
    // Séparer le paragraphe et les bullet points
    const lines = content.split('\n').filter(line => line.trim());
    
    // Le premier bloc est le paragraphe
    const paragraph = lines[0] || '';
    
    // Les lignes suivantes sont les bullet points
    const bulletPoints = lines.slice(1)
      .filter(line => line.trim())
      .map(line => line.replace(/^[-•*]\s*/, '').trim())
      .filter(line => line.length > 0);

    return {
      paragraph,
      bulletPoints
    };
  };

  const handleDownloadPDF = async () => {
    if (!result) return;
    const timestamp = new Date().toISOString().split('T')[0];
    const content = `${result.paragraph}\n\nPoints clés :\n${result.bulletPoints.map(point => `• ${point}`).join('\n')}`;
    
    await downloadAsPDF(
      content, 
      `paragraphe-${selectedLanguage}-${timestamp}`, 
      `Paragraphe d'Argumentation - ${selectedLanguage.charAt(0).toUpperCase() + selectedLanguage.slice(1)}`
    );
  };

  const handleDownloadText = () => {
    if (!result) return;
    const timestamp = new Date().toISOString().split('T')[0];
    const content = `${result.paragraph}\n\nPoints clés :\n${result.bulletPoints.map(point => `• ${point}`).join('\n')}`;
    
    downloadAsText(content, `paragraphe-${selectedLanguage}-${timestamp}`);
  };

  const handleCopy = async () => {
    if (!result) return;
    const content = `${result.paragraph}\n\nPoints clés :\n${result.bulletPoints.map(point => `• ${point}`).join('\n')}`;
    
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast.success('Paragraphe copié dans le presse-papiers !');
  };

  const loadExample = () => {
    setArticle("Remote work, accelerated by the pandemic, is transforming work organization and geographical distribution of populations. More and more city dwellers are choosing to move to the provinces, taking advantage of the flexibility offered by companies. This phenomenon raises questions about the future of large cities and the revitalization of rural areas. According to a recent study by the Brookings Institution, 15% of Americans moved to smaller cities or rural areas in 2021, representing a significant demographic shift.");
    setKeywords("télétravail, démographie, villes, transformation");
  };

  const clearAll = () => {
    setArticle('');
    setKeywords('');
    setResult(null);
  };

  return (
    <div className="space-y-6">
      {/* Bloc Entrée */}
      <Card className="bg-white rounded-xl shadow-md border border-blue-200 hover:shadow-xl transition-all duration-300">
        <CardHeader className="pb-4">
          <CardTitle className="text-lg font-semibold text-blue-700 flex items-center gap-2">
            <FileText className="w-5 h-5 text-blue-500" />
            Déposez l'article
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {/* Champ Article */}
          <div className="space-y-2">
            <Label htmlFor="article" className="text-sm font-medium text-gray-700">
              Article de presse
            </Label>
            <Textarea
              id="article"
              placeholder="Collez ici l'article de presse à analyser..."
              value={article}
              onChange={(e) => setArticle(e.target.value)}
              rows={6}
              className="border-gray-200 focus:border-orange-500 focus:ring-orange-500 resize-none"
            />
          </div>

          {/* Champ Mots-clés */}
          <div className="space-y-2">
            <Label htmlFor="keywords" className="text-sm font-medium text-gray-700">
              Mots-clés / focus
            </Label>
            <Input
              id="keywords"
              placeholder="Exemple : politique, USA, immigration"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              className="border-gray-200 focus:border-orange-500 focus:ring-orange-500"
            />
            <p className="text-xs text-gray-500">
              Mots-clés séparés par des virgules pour orienter la génération
            </p>
          </div>

          {/* Boutons d'action */}
          <div className="flex gap-2 pt-2">
            <Button
              onClick={handleGenerate}
              disabled={loading || !article.trim()}
              className="bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white flex-1"
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Génération...
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4 mr-2" />
                  Générer le paragraphe
                </>
              )}
            </Button>
            <Button
              variant="ghost"
              onClick={loadExample}
              className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
            >
              <Lightbulb className="w-4 h-4 mr-2" />
              Exemple
            </Button>
            <Button
              variant="ghost"
              onClick={clearAll}
              className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
            >
              Effacer
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Bloc Sortie */}
      {result && (
        <Card className="bg-white rounded-xl shadow-md border border-blue-200 hover:shadow-xl transition-all duration-300">
          <CardHeader className="pb-4">
            <CardTitle className="text-lg font-semibold text-blue-700 flex items-center gap-2">
              <Target className="w-5 h-5 text-blue-500" />
              Paragraphe généré
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Paragraphe */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">
                Paragraphe argumentatif (100-150 mots)
              </Label>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <p className="text-gray-700 leading-relaxed whitespace-pre-wrap">
                  {result.paragraph}
                </p>
              </div>
            </div>

            {/* Bullet points */}
            <div className="space-y-2">
              <Label className="text-sm font-medium text-gray-700">
                Points clés
              </Label>
              <div className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                <ul className="space-y-2">
                  {result.bulletPoints.map((point, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <span className="w-1.5 h-1.5 bg-orange-500 rounded-full mt-2 flex-shrink-0"></span>
                      <span className="text-gray-700 text-sm">{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-2 pt-2">
              <Button
                onClick={handleCopy}
                variant="ghost"
                className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 mr-2" />
                    Copié !
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 mr-2" />
                    Copier
                  </>
                )}
              </Button>
              <Button
                onClick={handleDownloadText}
                variant="ghost"
                className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
              >
                <Download className="w-4 h-4 mr-2" />
                Télécharger
              </Button>
              <Button
                onClick={handleDownloadPDF}
                variant="ghost"
                className="text-blue-600 hover:text-blue-800 hover:bg-blue-50"
              >
                <FileText className="w-4 h-4 mr-2" />
                PDF
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
};
