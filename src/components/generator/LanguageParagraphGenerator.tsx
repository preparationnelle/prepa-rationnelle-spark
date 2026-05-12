
import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import {
  Loader2,
  Download,
  Copy,
  Check,
  Sparkles,
  FileText,
  Target,
  Lightbulb,
  Trash2,
  BookOpen,
  Compass,
  Wand2
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { downloadAsPDF, downloadAsText } from '@/utils/downloadUtils';
import { toast } from 'sonner';

type SelectedLanguage = 'allemand' | 'anglais' | 'espagnol';

interface LanguageParagraphGeneratorProps {
  language: 'fr' | 'en';
  selectedLanguage: SelectedLanguage;
}

interface VocabularyItem {
  term: string;
  translation: string;
}

interface GenerationResult {
  angle: string;
  concoursTopics: string[];
  paragraph: string;
  vocabulary: VocabularyItem[];
  variants: string;
}

const LANGUAGE_MAPPING: Record<SelectedLanguage, 'en' | 'de' | 'es'> = {
  anglais: 'en',
  allemand: 'de',
  espagnol: 'es'
};

const PARAGRAPH_LANG_ATTR: Record<SelectedLanguage, string> = {
  anglais: 'en',
  allemand: 'de',
  espagnol: 'es'
};

const EXAMPLES: Record<SelectedLanguage, { article: string; keywords: string }> = {
  anglais: {
    article:
      "Donald Trump's return to the White House in January 2025 marked a sharp turn toward economic nationalism. Within his first 100 days, his administration unveiled sweeping tariffs on Chinese imports, cutting bilateral trade flows by an estimated 22% in Q2 2025. European partners, alarmed by the so-called 'Liberation Day' tariffs of April 2025, scrambled to draft retaliatory measures while quietly seeking exemptions for German cars and French luxury goods.",
    keywords: 'Trump 2.0, tariffs, transatlantic relations'
  },
  allemand: {
    article:
      "Die Bundestagswahl vom Februar 2025 hat Deutschland erschüttert: Friedrich Merz (CDU/CSU) wurde Kanzler, doch die AfD erzielte mit 20,8 % das beste Ergebnis ihrer Geschichte. In Ostdeutschland holte sie über 30 %. Die neue Koalition aus Union und SPD steht unter Druck, die Wirtschaft anzukurbeln, während die deutsche Industrie unter hohen Energiepreisen und chinesischer Konkurrenz leidet.",
    keywords: 'AfD, Polarisierung, Ostdeutschland'
  },
  espagnol: {
    article:
      'En 2024, Javier Milei completó su primer año como presidente de Argentina con un fuerte ajuste estatal. Cerró nueve ministerios, devaluó el peso un 54 % y la inflación interanual cayó del 211 % al 117 %. Sin embargo, la pobreza alcanzó un récord del 52,9 % en el primer semestre, y las protestas se multiplicaron en Buenos Aires y Córdoba.',
    keywords: 'Milei, ajuste, pobreza, motosierra'
  }
};

const LANGUAGE_DISPLAY: Record<SelectedLanguage, string> = {
  anglais: 'Anglais',
  allemand: 'Allemand',
  espagnol: 'Espagnol'
};

const emptyResult: GenerationResult = {
  angle: '',
  concoursTopics: [],
  paragraph: '',
  vocabulary: [],
  variants: ''
};

function coerceResult(raw: any): GenerationResult {
  if (!raw || typeof raw !== 'object') return emptyResult;
  const vocab = Array.isArray(raw.vocabulary)
    ? raw.vocabulary
        .map((item: any) => {
          if (!item) return null;
          if (typeof item === 'string') {
            const [term, ...rest] = item.split(/[:—–-]/);
            return { term: (term || '').trim(), translation: rest.join(':').trim() };
          }
          return {
            term: typeof item.term === 'string' ? item.term : '',
            translation: typeof item.translation === 'string' ? item.translation : ''
          };
        })
        .filter((item: VocabularyItem | null): item is VocabularyItem => !!item && !!item.term)
    : [];

  return {
    angle: typeof raw.angle === 'string' ? raw.angle : '',
    concoursTopics: Array.isArray(raw.concoursTopics)
      ? raw.concoursTopics.filter((t: any) => typeof t === 'string' && t.trim()).map((t: string) => t.trim())
      : [],
    paragraph: typeof raw.paragraph === 'string' ? raw.paragraph.trim() : '',
    vocabulary: vocab,
    variants: typeof raw.variants === 'string' ? raw.variants : ''
  };
}

function buildExportContent(result: GenerationResult, languageDisplay: string): string {
  const lines: string[] = [];
  if (result.angle) {
    lines.push(`Angle : ${result.angle}`);
    lines.push('');
  }
  if (result.concoursTopics.length) {
    lines.push('Sujets de concours mobilisables :');
    result.concoursTopics.forEach((t) => lines.push(`• ${t}`));
    lines.push('');
  }
  lines.push(`Paragraphe (${languageDisplay}) :`);
  lines.push(result.paragraph);
  lines.push('');
  if (result.vocabulary.length) {
    lines.push('Vocabulaire clé :');
    result.vocabulary.forEach((v) => lines.push(`• ${v.term} — ${v.translation}`));
    lines.push('');
  }
  if (result.variants) {
    lines.push('Variantes / extensions :');
    lines.push(result.variants);
  }
  return lines.join('\n');
}

export const LanguageParagraphGenerator = ({ language, selectedLanguage }: LanguageParagraphGeneratorProps) => {
  const [article, setArticle] = useState('');
  const [keywords, setKeywords] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GenerationResult | null>(null);
  const [copied, setCopied] = useState(false);

  const targetLanguage = LANGUAGE_MAPPING[selectedLanguage];
  const languageDisplay = LANGUAGE_DISPLAY[selectedLanguage];

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
          mode: 'paragraph'
        },
      });

      if (error) throw error;

      let parsed: GenerationResult = emptyResult;
      if (data?.result && typeof data.result === 'object') {
        parsed = coerceResult(data.result);
      } else if (typeof data?.content === 'string') {
        try {
          parsed = coerceResult(JSON.parse(data.content));
        } catch {
          parsed = { ...emptyResult, paragraph: data.content };
        }
      }

      if (!parsed.paragraph) {
        toast.error('Réponse vide du modèle, réessayez.');
        return;
      }

      setResult(parsed);
      toast.success('Paragraphe généré avec succès !');
    } catch (error) {
      console.error('Error generating paragraph:', error);
      toast.error('Erreur lors de la génération du paragraphe.');
    } finally {
      setLoading(false);
    }
  };

  const handleDownloadPDF = async () => {
    if (!result) return;
    const timestamp = new Date().toISOString().split('T')[0];
    const content = buildExportContent(result, languageDisplay);
    await downloadAsPDF(
      content,
      `paragraphe-${selectedLanguage}-${timestamp}`,
      `Paragraphe d'argumentation — ${languageDisplay}`
    );
  };

  const handleDownloadText = () => {
    if (!result) return;
    const timestamp = new Date().toISOString().split('T')[0];
    const content = buildExportContent(result, languageDisplay);
    downloadAsText(content, `paragraphe-${selectedLanguage}-${timestamp}`);
  };

  const handleCopy = async () => {
    if (!result) return;
    const content = buildExportContent(result, languageDisplay);
    await navigator.clipboard.writeText(content);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast.success('Paragraphe copié dans le presse-papiers !');
  };

  const handleCopyParagraphOnly = async () => {
    if (!result?.paragraph) return;
    await navigator.clipboard.writeText(result.paragraph);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast.success('Paragraphe seul copié !');
  };

  const loadExample = () => {
    const ex = EXAMPLES[selectedLanguage];
    setArticle(ex.article);
    setKeywords(ex.keywords);
  };

  const clearAll = () => {
    setArticle('');
    setKeywords('');
    setResult(null);
  };

  const wordCount = result?.paragraph
    ? result.paragraph.split(/\s+/).filter(Boolean).length
    : 0;

  return (
    <div className="space-y-10">
      {/* ───────────── Bloc Entrée ───────────── */}
      <div className="space-y-7">
        {/* Champ Article */}
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <Label htmlFor="article" className="text-[15px] font-semibold text-pr-black flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-pr-gray-bg text-pr-black text-[11px] font-bold">
                1
              </span>
              Article de presse
            </Label>
            <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-black bg-pr-gray-bg px-2.5 py-1 rounded-full">
              Requis
            </span>
          </div>
          <Textarea
            id="article"
            placeholder={`Collez ici l'article de presse — le paragraphe sera produit en ${languageDisplay.toLowerCase()}.`}
            value={article}
            onChange={(e) => setArticle(e.target.value)}
            rows={5}
            className="min-h-[140px] border-pr-gray-light bg-white focus:border-pr-black focus:ring-2 focus:ring-pr-black/20 resize-y text-[15px] leading-relaxed p-4 rounded-xl text-pr-black placeholder:text-pr-gray-mid transition-colors"
          />
        </div>

        {/* Champ Mots-clés */}
        <div className="space-y-3">
          <div className="flex items-center justify-between gap-3">
            <Label htmlFor="keywords" className="text-[15px] font-semibold text-pr-black flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded-md bg-pr-gray-bg text-pr-gray-dark text-[11px] font-bold">
                2
              </span>
              Mots-clés / angle
            </Label>
            <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-gray-mid bg-pr-gray-bg px-2.5 py-1 rounded-full">
              Optionnel
            </span>
          </div>
          <Input
            id="keywords"
            placeholder="Ex. : politique, USA, immigration"
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            className="h-12 border-pr-gray-light bg-white focus:border-pr-black focus:ring-2 focus:ring-pr-black/20 text-[15px] rounded-xl text-pr-black placeholder:text-pr-gray-mid transition-colors"
          />
          <p className="text-[13px] text-pr-gray-mid flex items-center gap-1.5 pl-1">
            <Lightbulb className="w-3.5 h-3.5 text-pr-black" />
            Séparez par des virgules pour orienter l'angle du paragraphe.
          </p>
        </div>

        {/* Boutons d'action */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <Button
            onClick={handleGenerate}
            disabled={loading || !article.trim()}
            className="bg-pr-black hover:bg-pr-black-dark text-white shadow-[0_4px_14px_rgba(244,132,95,0.35)] hover:shadow-[0_6px_20px_rgba(196,90,53,0.4)] transition-all duration-200 h-12 px-7 text-[15px] font-semibold rounded-xl flex-1 disabled:opacity-50 disabled:shadow-none"
          >
            {loading ? (
              <>
                <Loader2 className="w-5 h-5 mr-2 animate-spin" />
                Génération en cours…
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
              className="border-pr-gray-light bg-white text-pr-gray-dark hover:text-pr-black hover:border-pr-black-soft hover:bg-pr-gray-bg h-12 px-4 rounded-xl font-medium transition-colors"
              title="Charger un exemple"
            >
              <Lightbulb className="w-4 h-4 mr-2" />
              Exemple
            </Button>
            <Button
              variant="outline"
              onClick={clearAll}
              className="border-pr-gray-light bg-white text-pr-gray-mid hover:text-pr-black hover:border-pr-gray-mid hover:bg-pr-gray-bg h-12 px-4 rounded-xl font-medium transition-colors"
              title="Tout effacer"
            >
              <Trash2 className="w-4 h-4 mr-2" />
              Effacer
            </Button>
          </div>
        </div>
      </div>

      {/* ───────────── Bloc Sortie ───────────── */}
      {result && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <Card className="bg-white rounded-2xl border border-pr-gray-light overflow-hidden shadow-[0_2px_12px_rgba(26,26,24,0.04)]">
            {/* Bandeau supérieur orange */}
            <div className="h-[3px] w-full bg-pr-black" />

            <CardHeader className="bg-pr-gray-bg border-b border-pr-gray-light px-6 py-5 sm:px-8">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-white border border-pr-black-soft">
                    <Target className="w-5 h-5 text-pr-black" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold uppercase tracking-[0.14em] text-pr-black mb-0.5">
                      Paragraphe ECG
                    </div>
                    <CardTitle className="font-dm-serif text-2xl text-pr-black leading-none">
                      {languageDisplay}
                    </CardTitle>
                  </div>
                </div>
                {result.angle && (
                  <div className="bg-white border border-pr-gray-light rounded-xl px-4 py-2.5 max-w-full sm:max-w-md">
                    <span className="block text-[10px] font-semibold uppercase tracking-[0.12em] text-pr-black mb-1">
                      Angle
                    </span>
                    <span className="block text-[14px] text-pr-black font-medium leading-snug">
                      {result.angle}
                    </span>
                  </div>
                )}
              </div>
            </CardHeader>

            <CardContent className="p-6 sm:p-8 space-y-8">
              {/* Sujets de concours mobilisables */}
              {result.concoursTopics.length > 0 && (
                <div className="space-y-3">
                  <Label className="text-[11px] font-semibold text-pr-gray-mid uppercase tracking-[0.14em] flex items-center gap-2">
                    <Compass className="w-3.5 h-3.5 text-pr-black" />
                    Sujets de concours mobilisables
                  </Label>
                  <div className="bg-pr-gray-bg/60 rounded-xl p-5 border border-pr-black-pale">
                    <ul className="space-y-2.5">
                      {result.concoursTopics.map((topic, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <span className="w-1.5 h-1.5 bg-pr-black rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-pr-black text-[15px] leading-snug">{topic}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {/* Paragraphe */}
              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <Label className="text-[11px] font-semibold text-pr-gray-mid uppercase tracking-[0.14em] flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-pr-black" />
                    Paragraphe argumentatif
                  </Label>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.10em] text-pr-gray-mid bg-pr-gray-bg px-2.5 py-1 rounded-full">
                    {wordCount} mots
                  </span>
                </div>
                <div className="bg-white rounded-xl p-6 sm:p-7 border border-pr-gray-light relative group">
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={handleCopyParagraphOnly}
                      className="h-8 w-8 text-pr-gray-mid hover:text-pr-black hover:bg-pr-gray-bg"
                      title="Copier le paragraphe seul"
                    >
                      {copied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                    </Button>
                  </div>
                  <p
                    lang={PARAGRAPH_LANG_ATTR[selectedLanguage]}
                    className="font-lora text-pr-black leading-[1.7] whitespace-pre-wrap text-[17px]"
                  >
                    {result.paragraph}
                  </p>
                </div>
              </div>

              {/* Vocabulaire clé */}
              {result.vocabulary.length > 0 && (
                <div className="space-y-3">
                  <Label className="text-[11px] font-semibold text-pr-gray-mid uppercase tracking-[0.14em] flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-pr-black" />
                    Vocabulaire clé à mémoriser
                  </Label>
                  <div className="bg-pr-gray-bg rounded-xl border border-pr-gray-light overflow-hidden">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 divide-pr-gray-light">
                      {result.vocabulary.map((item, index) => {
                        const colIndex = index % 2;
                        const needsLeftBorder = colIndex === 1;
                        return (
                          <li
                            key={index}
                            className={`px-4 py-2.5 flex items-baseline gap-2 ${
                              needsLeftBorder ? 'sm:border-l sm:border-pr-gray-light' : ''
                            }`}
                          >
                            <span
                              lang={PARAGRAPH_LANG_ATTR[selectedLanguage]}
                              className="font-semibold text-pr-black"
                            >
                              {item.term}
                            </span>
                            <span className="text-pr-gray-mid">—</span>
                            <span className="text-pr-gray-dark text-[14px]">{item.translation}</span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              )}

              {/* Variantes / extensions */}
              {result.variants && (
                <div className="space-y-3">
                  <Label className="text-[11px] font-semibold text-pr-gray-mid uppercase tracking-[0.14em] flex items-center gap-2">
                    <Wand2 className="w-3.5 h-3.5 text-pr-black" />
                    Variantes / extensions
                  </Label>
                  <div className="bg-white rounded-xl p-5 border border-pr-gray-light border-l-[3px] border-l-pr-black">
                    <p className="text-pr-gray-dark text-[15px] leading-relaxed whitespace-pre-wrap">
                      {result.variants}
                    </p>
                  </div>
                </div>
              )}

              {/* Actions */}
              <div className="flex flex-wrap gap-2.5 pt-5 border-t border-pr-gray-light">
                <Button
                  onClick={handleCopy}
                  variant="outline"
                  className="border-pr-gray-light bg-white text-pr-gray-dark hover:text-pr-black hover:border-pr-black-soft hover:bg-pr-gray-bg h-11 px-4 rounded-xl font-medium transition-colors flex-1 min-w-[140px]"
                >
                  {copied ? (
                    <>
                      <Check className="w-4 h-4 mr-2" />
                      Copié !
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4 mr-2" />
                      Tout copier
                    </>
                  )}
                </Button>
                <Button
                  onClick={handleDownloadText}
                  variant="outline"
                  className="border-pr-gray-light bg-white text-pr-gray-dark hover:text-pr-black hover:border-pr-black-soft hover:bg-pr-gray-bg h-11 px-4 rounded-xl font-medium transition-colors flex-1 min-w-[140px]"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger (.txt)
                </Button>
                <Button
                  onClick={handleDownloadPDF}
                  variant="outline"
                  className="border-pr-gray-light bg-white text-pr-gray-dark hover:text-pr-black hover:border-pr-black-soft hover:bg-pr-gray-bg h-11 px-4 rounded-xl font-medium transition-colors flex-1 min-w-[140px]"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Télécharger (PDF)
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </div>
  );
};
