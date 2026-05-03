
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
  Lightbulb,
  RefreshCw,
  Trash2
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
    <div className="space-y-8">
      {/* Bloc Entrée */}
      <div className="space-y-6">
        {/* Champ Article */}
        <div className="space-y-3">
          <Label htmlFor="article" className="text-base font-semibold text-gray-900 flex items-center gap-2">
            Article de presse
            <span className="text-xs font-normal text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">Requis</span>
          </Label>
          <Textarea
            id="article"
            placeholder="Collez ici l'article de presse à analyser..."
            value={article}
            onChange={(e) => setArticle(e.target.value)}
            rows={3}
            className="min-h-[100px] border-gray-200 focus:border-orange-500 focus:ring-orange-500 resize-y text-base leading-relaxed p-4 rounded-xl shadow-sm"
          />
        </div>

        {/* Champ Mots-clés */}
        <div className="space-y-3">
          <Label htmlFor="keywords" className="text-base font-semibold text-gray-900 flex items-center gap-2">
            Mots-clés / focus
            <span className="text-xs font-normal text-gray-500 bg-gray-100 px-2 py-0.5 rounded-full">Optionnel</span>
          </Label>
          <Input
            id="keywords"
            placeholder="Exemple : politique, USA, immigration"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            className="h-12 border-gray-200 focus:border-orange-500 focus:ring-orange-500 text-base rounded-xl shadow-sm"
          />
          <p className="text-sm text-gray-500 flex items-center gap-1">
            <Lightbulb className="w-3 h-3 text-orange-500" />
            Séparez les mots-clés par des virgules pour orienter la génération
          </p>
        </div>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-4 pt-4 border-t border-gray-100">
          <Button
            onClick={handleGenerate}
            disabled={loading || !article.trim()}
            className="bg-gradient-to-r from-orange-600 to-orange-500 hover:from-orange-700 hover:to-orange-600 text-white shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02] h-12 px-8 text-lg font-semibold rounded-xl flex-1"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Génération en cours...
              </>
            ) : (
              <>
                <Sparkles className="w-5 h-5 mr-2" />
                Générer le paragraphe
              </>
            )}
          </Button>

          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={loadExample}
              className="border-gray-200 text-gray-600 hover:text-orange-600 hover:bg-orange-50 h-12 px-4 rounded-xl"
              title="Charger un exemple"
            >
              <Lightbulb className="w-4 h-4 mr-2" />
              Exemple
            </Button>
            <Button
              variant="outline"
              onClick={clearAll}
              className="border-gray-200 text-gray-600 hover:text-red-600 hover:bg-red-50 h-12 px-4 rounded-xl"
              title="Tout effacer"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Effacer
            </Button>
          </div>
        </div>
      </div>

      {/* Bloc Sortie */}
      {result && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-orange-100 to-amber-50 rounded-2xl transform rotate-1 scale-[1.01] opacity-50 -z-10"></div>
            <Card className="bg-white rounded-2xl shadow-xl border border-orange-100 overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-orange-50 to-white border-b border-orange-100 pb-6">
                <CardTitle className="text-xl font-bold text-gray-900 flex items-center gap-3">
                  <div className="p-2 bg-orange-100 rounded-lg">
                    <Target className="w-6 h-6 text-orange-600" />
                  </div>
                  Résultat généré
                </CardTitle>
              </CardHeader>
              <CardContent className="p-6 sm:p-8 space-y-8">
                {/* Paragraphe */}
                <div className="space-y-3">
                  <Label className="text-sm font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                    <FileText className="w-4 h-4" />
                    Paragraphe argumentatif
                  </Label>
                  <div className="bg-white rounded-xl p-6 border border-gray-100 shadow-sm relative group">
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={handleCopy}
                        className="h-8 w-8 text-gray-400 hover:text-orange-600"
                      >
                        {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                      </Button>
                    </div>
                    <p className="text-gray-800 leading-relaxed whitespace-pre-wrap text-lg font-serif">
                      {result.paragraph}
                    </p>
                  </div>
                </div>

                {/* Bullet points */}
                <div className="space-y-3">
                  <Label className="text-sm font-semibold text-gray-500 uppercase tracking-wider flex items-center gap-2">
                    <Target className="w-4 h-4" />
                    Points clés à retenir
                  </Label>
                  <div className="bg-orange-50/50 rounded-xl p-6 border border-orange-100">
                    <ul className="space-y-3">
                      {result.bulletPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0 shadow-sm"></span>
                          <span className="text-gray-700 text-base">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Actions */}
                <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100">
                  <Button
                    onClick={handleCopy}
                    variant="outline"
                    className="border-gray-200 text-gray-700 hover:text-orange-600 hover:border-orange-200 hover:bg-orange-50 flex-1"
                  >
                    {copied ? (
                      <>
                        <Check className="w-4 h-4 mr-2" />
                        Copié !
                      </>
                    ) : (
                      <>
                        <Copy className="w-4 h-4 mr-2" />
                        Copier le texte
                      </>
                    )}
                  </Button>
                  <Button
                    onClick={handleDownloadText}
                    variant="outline"
                    className="border-gray-200 text-gray-700 hover:text-orange-600 hover:border-orange-200 hover:bg-orange-50 flex-1"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger (.txt)
                  </Button>
                  <Button
                    onClick={handleDownloadPDF}
                    variant="outline"
                    className="border-gray-200 text-gray-700 hover:text-orange-600 hover:border-orange-200 hover:bg-orange-50 flex-1"
                  >
                    <FileText className="w-4 h-4 mr-2" />
                    Télécharger (PDF)
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      )}
    </div>
  );
};
