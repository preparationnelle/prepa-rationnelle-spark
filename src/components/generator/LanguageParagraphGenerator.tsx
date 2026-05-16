import React, { useState } from 'react';
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
  Lightbulb,
  Trash2,
  BookOpen,
  Wand2,
  Newspaper,
  LayoutGrid,
  Target,
} from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { downloadAsPDF, downloadAsText } from '@/utils/downloadUtils';
import { toast } from 'sonner';
import { MethodologyCard } from './paragraph/MethodologyCard';
import { ThemeGallery } from './paragraph/ThemeGallery';
import { AnnotatedParagraph, type BreakdownEntry, type BreakdownRole } from './paragraph/AnnotatedParagraph';
import { QualityScore } from './paragraph/QualityScore';
import { ENGLISH_THEMES, type ThemeEntry } from './paragraph/themes';

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
  breakdown: BreakdownEntry[];
  vocabulary: VocabularyItem[];
  variants: string;
}

const LANGUAGE_MAPPING: Record<SelectedLanguage, 'en' | 'de' | 'es'> = {
  anglais: 'en',
  allemand: 'de',
  espagnol: 'es',
};

const PARAGRAPH_LANG_ATTR: Record<SelectedLanguage, 'en' | 'de' | 'es'> = {
  anglais: 'en',
  allemand: 'de',
  espagnol: 'es',
};

const EXAMPLES: Record<SelectedLanguage, Array<{ article: string; keywords: string }>> = {
  anglais: [
    {
      article:
        "Donald Trump's return to the White House in January 2025 marked a sharp turn toward economic nationalism. Within his first 100 days, his administration unveiled sweeping tariffs on Chinese imports, cutting bilateral trade flows by an estimated 22% in Q2 2025. European partners, alarmed by the so-called 'Liberation Day' tariffs of April 2025, scrambled to draft retaliatory measures while quietly seeking exemptions for German cars and French luxury goods.",
      keywords: 'Trump 2.0, tariffs, transatlantic relations',
    },
    {
      article:
        "In November 2022, OpenAI unveiled ChatGPT, triggering a $100 billion drop in Google's market value within weeks. The generative AI race has since reshaped Big Tech: Microsoft poured another $10 billion into OpenAI in early 2023, while Alphabet rushed out Bard and then Gemini. Goldman Sachs estimated in 2024 that up to 300 million jobs worldwide could be exposed to automation by generative models.",
      keywords: 'ChatGPT, Big Tech, generative AI',
    },
    {
      article:
        "Britain's National Health Service, founded in 1948, has slid into the deepest crisis of its history. By early 2024, more than 7.5 million people were on waiting lists for routine treatment. Junior doctors staged the longest strike in NHS history in January 2024, demanding a 35% pay restoration. Successive Tory governments have failed to reverse a decade of underinvestment, leaving Keir Starmer's incoming Labour cabinet to inherit a service many Britons see as broken.",
      keywords: 'NHS, healthcare, UK, waiting lists',
    },
  ],
  allemand: [
    {
      article:
        'Die Bundestagswahl vom Februar 2025 hat Deutschland erschüttert: Friedrich Merz (CDU/CSU) wurde Kanzler, doch die AfD erzielte mit 20,8 % das beste Ergebnis ihrer Geschichte. In Ostdeutschland holte sie über 30 %. Die neue Koalition aus Union und SPD steht unter Druck, die Wirtschaft anzukurbeln, während die deutsche Industrie unter hohen Energiepreisen und chinesischer Konkurrenz leidet.',
      keywords: 'AfD, Polarisierung, Ostdeutschland',
    },
    {
      article:
        'Die deutsche Energiewende, 2011 nach Fukushima beschleunigt, gilt als eines der ehrgeizigsten Klimaprojekte Europas. Bis 2030 sollen 80 % des Stroms aus erneuerbaren Energien stammen, und der Atomausstieg wurde im April 2023 endgültig vollzogen. Trotzdem hängt Deutschland weiterhin von Kohle und Gas ab, vor allem seit dem russischen Angriffskrieg gegen die Ukraine.',
      keywords: 'Energiewende, Atomausstieg, Klimapolitik',
    },
  ],
  espagnol: [
    {
      article:
        'En 2024, Javier Milei completó su primer año como presidente de Argentina con un fuerte ajuste estatal. Cerró nueve ministerios, devaluó el peso un 54 % y la inflación interanual cayó del 211 % al 117 %. Sin embargo, la pobreza alcanzó un récord del 52,9 % en el primer semestre, y las protestas se multiplicaron en Buenos Aires y Córdoba.',
      keywords: 'Milei, ajuste, pobreza, motosierra',
    },
    {
      article:
        'Claudia Sheinbaum asumió la presidencia de México en octubre de 2024, convirtiéndose en la primera mujer en ocupar el cargo. Heredó del lopezobradorismo una economía estancada, una violencia récord —más de 30 000 homicidios anuales— y la presión arancelaria de Donald Trump. Su agenda combina continuidad con el partido Morena y un giro hacia la energía limpia.',
      keywords: 'Sheinbaum, México, primera mujer presidenta',
    },
  ],
};

const LANGUAGE_DISPLAY: Record<SelectedLanguage, string> = {
  anglais: 'Anglais',
  allemand: 'Allemand',
  espagnol: 'Espagnol',
};

const emptyResult: GenerationResult = {
  angle: '',
  concoursTopics: [],
  paragraph: '',
  breakdown: [],
  vocabulary: [],
  variants: '',
};

const ALLOWED_ROLES: BreakdownRole[] = ['hook', 'context', 'figure', 'tension', 'opening'];

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
            translation: typeof item.translation === 'string' ? item.translation : '',
          };
        })
        .filter((item: VocabularyItem | null): item is VocabularyItem => !!item && !!item.term)
    : [];

  const breakdown: BreakdownEntry[] = Array.isArray(raw.breakdown)
    ? raw.breakdown
        .map((item: any): BreakdownEntry | null => {
          if (!item || typeof item.sentence !== 'string') return null;
          const role = typeof item.role === 'string' ? (item.role as BreakdownRole) : null;
          if (!role || !ALLOWED_ROLES.includes(role)) return null;
          const sentence = item.sentence.trim();
          if (!sentence) return null;
          return { sentence, role };
        })
        .filter((item: BreakdownEntry | null): item is BreakdownEntry => !!item)
    : [];

  return {
    angle: typeof raw.angle === 'string' ? raw.angle : '',
    concoursTopics: Array.isArray(raw.concoursTopics)
      ? raw.concoursTopics.filter((t: any) => typeof t === 'string' && t.trim()).map((t: string) => t.trim())
      : [],
    paragraph: typeof raw.paragraph === 'string' ? raw.paragraph.trim() : '',
    breakdown,
    vocabulary: vocab,
    variants: typeof raw.variants === 'string' ? raw.variants : '',
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
  const themeModeAvailable = selectedLanguage === 'anglais';
  const [mode, setMode] = useState<'article' | 'theme'>('article');
  const [article, setArticle] = useState('');
  const [keywords, setKeywords] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<GenerationResult | null>(null);
  const [copied, setCopied] = useState(false);

  const targetLanguage = LANGUAGE_MAPPING[selectedLanguage];
  const languageDisplay = LANGUAGE_DISPLAY[selectedLanguage];

  const activeMode: 'article' | 'theme' = themeModeAvailable ? mode : 'article';

  const callGenerate = async (payload: Record<string, unknown>) => {
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-language-paragraph', {
        body: payload,
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

  const handleGenerateFromArticle = async () => {
    if (!article.trim()) {
      toast.error('Colle un article pour générer le paragraphe.');
      return;
    }
    await callGenerate({
      article: article.trim(),
      keywords: keywords.trim() || undefined,
      language: targetLanguage,
      mode: 'article',
    });
  };

  const handleGenerateFromTheme = async (theme: ThemeEntry, angle: ThemeEntry['angles'][number]) => {
    await callGenerate({
      mode: 'theme',
      theme: theme.title,
      angle: angle.title,
      keywords: angle.keywords,
      language: targetLanguage,
    });
  };

  const handleDownloadPDF = async () => {
    if (!result) return;
    const timestamp = new Date().toISOString().split('T')[0];
    const content = buildExportContent(result, languageDisplay);
    await downloadAsPDF(
      content,
      `paragraphe-${selectedLanguage}-${timestamp}`,
      `Paragraphe d'argumentation — ${languageDisplay}`,
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
    toast.success('Paragraphe copié !');
  };

  const handleCopyParagraphOnly = async () => {
    if (!result?.paragraph) return;
    await navigator.clipboard.writeText(result.paragraph);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
    toast.success('Paragraphe seul copié !');
  };

  const loadExample = () => {
    const examples = EXAMPLES[selectedLanguage];
    const random = examples[Math.floor(Math.random() * examples.length)];
    setArticle(random.article);
    setKeywords(random.keywords);
  };

  const clearAll = () => {
    setArticle('');
    setKeywords('');
    setResult(null);
  };

  return (
    <div className="space-y-8">
      <MethodologyCard />

      {themeModeAvailable && (
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <span className="carnet-eyebrow text-[10.5px]">Mode de génération</span>
          </div>
          <div className="grid grid-cols-2 gap-2 bg-carnet-paper-2 border border-dashed border-[rgba(78,55,30,0.18)] p-1 rounded-md">
            <button
              type="button"
              onClick={() => setMode('article')}
              className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded transition-all font-instrument text-[13.5px] font-semibold ${
                activeMode === 'article'
                  ? 'bg-carnet-red text-carnet-paper'
                  : 'text-carnet-ink-soft hover:bg-[rgba(78,55,30,0.04)]'
              }`}
            >
              <Newspaper className="w-4 h-4" />
              J'ai un article
            </button>
            <button
              type="button"
              onClick={() => setMode('theme')}
              className={`flex items-center justify-center gap-2 py-2.5 px-3 rounded transition-all font-instrument text-[13.5px] font-semibold ${
                activeMode === 'theme'
                  ? 'bg-carnet-red text-carnet-paper'
                  : 'text-carnet-ink-soft hover:bg-[rgba(78,55,30,0.04)]'
              }`}
            >
              <LayoutGrid className="w-4 h-4" />
              Je pars d'un thème
            </button>
          </div>
        </div>
      )}

      {activeMode === 'article' ? (
        <div className="space-y-6">
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <Label
                htmlFor="article"
                className="font-instrument text-[14px] font-semibold text-carnet-ink flex items-center gap-2"
              >
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-carnet-red text-carnet-paper text-[11px] font-bold">
                  1
                </span>
                Article de presse
              </Label>
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-carnet-red bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.20)] px-2.5 py-1 rounded-sm font-instrument">
                Requis
              </span>
            </div>
            <Textarea
              id="article"
              placeholder={`Colle ici l'article de presse — le paragraphe sera produit en ${languageDisplay.toLowerCase()}.`}
              value={article}
              onChange={(e) => setArticle(e.target.value)}
              rows={6}
              className="min-h-[160px] border-dashed border-[rgba(78,55,30,0.18)] bg-carnet-paper-2 focus:border-carnet-red focus:ring-2 focus:ring-carnet-red/20 resize-y font-instrument text-[14.5px] leading-relaxed p-4 rounded-md text-carnet-ink placeholder:text-carnet-ink-mute transition-colors"
            />
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <Label
                htmlFor="keywords"
                className="font-instrument text-[14px] font-semibold text-carnet-ink flex items-center gap-2"
              >
                <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-[rgba(78,55,30,0.10)] text-carnet-ink-soft text-[11px] font-bold">
                  2
                </span>
                Mots-clés / angle
              </Label>
              <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-carnet-ink-mute bg-[rgba(78,55,30,0.06)] border border-dashed border-[rgba(78,55,30,0.18)] px-2.5 py-1 rounded-sm font-instrument">
                Optionnel
              </span>
            </div>
            <Input
              id="keywords"
              placeholder="Ex. : Trump 2.0, tariffs, transatlantic"
              value={keywords}
              onChange={(e) => setKeywords(e.target.value)}
              className="h-12 border-dashed border-[rgba(78,55,30,0.18)] bg-carnet-paper-2 focus:border-carnet-red focus:ring-2 focus:ring-carnet-red/20 font-instrument text-[14.5px] rounded-md text-carnet-ink placeholder:text-carnet-ink-mute transition-colors"
            />
            <p className="font-instrument text-[12.5px] text-carnet-ink-mute flex items-center gap-1.5 pl-1">
              <Lightbulb className="w-3.5 h-3.5 text-carnet-red" />
              Sépare par des virgules pour orienter l'angle. Optionnel mais conseillé.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-2">
            <Button
              onClick={handleGenerateFromArticle}
              disabled={loading || !article.trim()}
              className="bg-carnet-ink hover:bg-carnet-red text-carnet-paper font-instrument font-semibold text-[15px] h-12 px-7 rounded-md border-0 transition-colors flex-1 disabled:opacity-50"
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
                disabled={loading}
                className="border-dashed border-[rgba(78,55,30,0.18)] bg-carnet-paper-2 text-carnet-ink-soft hover:text-carnet-red hover:border-carnet-red hover:bg-[rgba(193,68,58,0.06)] font-instrument h-12 px-4 rounded-md font-medium transition-colors"
                title="Charger un exemple au hasard"
              >
                <Lightbulb className="w-4 h-4 mr-2" />
                Exemple
              </Button>
              <Button
                variant="outline"
                onClick={clearAll}
                disabled={loading}
                className="border-dashed border-[rgba(78,55,30,0.18)] bg-carnet-paper-2 text-carnet-ink-mute hover:text-carnet-red hover:border-carnet-red hover:bg-[rgba(193,68,58,0.06)] font-instrument h-12 px-4 rounded-md font-medium transition-colors"
                title="Tout effacer"
              >
                <Trash2 className="w-4 h-4 mr-2" />
                Effacer
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <ThemeGallery
          themes={ENGLISH_THEMES}
          onPick={handleGenerateFromTheme}
          loading={loading}
        />
      )}

      {result && (
        <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="carnet-card overflow-hidden">
            <div className="h-[3px] w-full bg-carnet-red" />

            <div className="px-6 py-5 sm:px-8 border-b border-dashed border-[rgba(78,55,30,0.18)] bg-carnet-paper-2">
              <div className="flex flex-wrap items-start justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.20)] flex items-center justify-center flex-shrink-0">
                    <Target className="w-5 h-5 text-carnet-red" />
                  </div>
                  <div>
                    <div className="carnet-eyebrow text-[10.5px] mb-0.5">Paragraphe ECG</div>
                    <h3 className="font-lora text-[26px] text-carnet-ink leading-none">
                      {languageDisplay}
                    </h3>
                  </div>
                </div>
                {result.angle && (
                  <div className="bg-carnet-paper-2 border border-dashed border-[rgba(193,68,58,0.30)] rounded-md px-4 py-2.5 max-w-full sm:max-w-md">
                    <span className="block carnet-eyebrow text-[10px] mb-1">Angle</span>
                    <span className="block font-lora italic text-[15px] text-carnet-red leading-snug">
                      {result.angle}
                    </span>
                  </div>
                )}
              </div>
            </div>

            <div className="p-6 sm:p-8 space-y-8">
              {result.concoursTopics.length > 0 && (
                <div className="space-y-3">
                  <Label className="carnet-eyebrow text-[10.5px] flex items-center gap-2">
                    <Target className="w-3.5 h-3.5 text-carnet-red" />
                    Sujets de concours mobilisables
                  </Label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {result.concoursTopics.map((topic, index) => {
                      const tiltClass =
                        index % 3 === 0
                          ? 'carnet-tilt-l'
                          : index % 3 === 1
                          ? 'carnet-tilt-r'
                          : '';
                      return (
                        <div
                          key={index}
                          className={`bg-[rgba(255,225,120,0.30)] border border-dashed border-[rgba(78,55,30,0.20)] rounded-sm p-3 ${tiltClass}`}
                        >
                          <p className="font-instrument text-[13px] text-carnet-ink leading-snug italic">
                            {topic}
                          </p>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}

              <div className="space-y-3">
                <div className="flex items-center justify-between gap-3">
                  <Label className="carnet-eyebrow text-[10.5px] flex items-center gap-2">
                    <FileText className="w-3.5 h-3.5 text-carnet-red" />
                    Paragraphe argumentatif
                  </Label>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleCopyParagraphOnly}
                    className="h-8 px-2.5 text-carnet-ink-mute hover:text-carnet-red hover:bg-[rgba(193,68,58,0.06)] font-instrument text-[12px]"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 mr-1" /> Copié
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5 mr-1" /> Copier
                      </>
                    )}
                  </Button>
                </div>
                <AnnotatedParagraph
                  paragraph={result.paragraph}
                  breakdown={result.breakdown}
                  lang={PARAGRAPH_LANG_ATTR[selectedLanguage]}
                />
              </div>

              <QualityScore paragraph={result.paragraph} />

              {result.vocabulary.length > 0 && (
                <div className="space-y-3">
                  <Label className="carnet-eyebrow text-[10.5px] flex items-center gap-2">
                    <BookOpen className="w-3.5 h-3.5 text-carnet-red" />
                    Vocabulaire clé à mémoriser
                  </Label>
                  <div className="bg-carnet-paper-2 rounded-md border border-dashed border-[rgba(78,55,30,0.18)] overflow-hidden">
                    <ul className="grid grid-cols-1 sm:grid-cols-2 divide-y divide-dashed divide-[rgba(78,55,30,0.14)] sm:divide-y-0">
                      {result.vocabulary.map((item, index) => {
                        const colIndex = index % 2;
                        const needsLeftBorder = colIndex === 1;
                        return (
                          <li
                            key={index}
                            className={`px-4 py-2.5 flex flex-wrap items-baseline gap-2 ${
                              needsLeftBorder ? 'sm:border-l sm:border-dashed sm:border-[rgba(78,55,30,0.14)]' : ''
                            }`}
                          >
                            <span
                              lang={PARAGRAPH_LANG_ATTR[selectedLanguage]}
                              className="font-lora italic text-[15px] text-carnet-red"
                            >
                              {item.term}
                            </span>
                            <span className="text-carnet-ink-mute">—</span>
                            <span className="font-instrument text-[13.5px] text-carnet-ink-soft">
                              {item.translation}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              )}

              {result.variants && (
                <div className="space-y-3">
                  <Label className="carnet-eyebrow text-[10.5px] flex items-center gap-2">
                    <Wand2 className="w-3.5 h-3.5 text-carnet-red" />
                    Variantes / extensions
                  </Label>
                  <div className="bg-carnet-paper-2 rounded-md p-5 border border-dashed border-[rgba(78,55,30,0.18)] border-l-[3px] border-l-carnet-red">
                    <p className="font-instrument text-[14.5px] text-carnet-ink-soft leading-relaxed whitespace-pre-wrap">
                      {result.variants}
                    </p>
                  </div>
                </div>
              )}

              <div className="flex flex-wrap gap-2.5 pt-5 border-t border-dashed border-[rgba(78,55,30,0.18)]">
                <Button
                  onClick={handleCopy}
                  variant="outline"
                  className="border-dashed border-[rgba(78,55,30,0.18)] bg-carnet-paper-2 text-carnet-ink-soft hover:text-carnet-red hover:border-carnet-red hover:bg-[rgba(193,68,58,0.06)] font-instrument h-11 px-4 rounded-md font-medium transition-colors flex-1 min-w-[140px]"
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
                  className="border-dashed border-[rgba(78,55,30,0.18)] bg-carnet-paper-2 text-carnet-ink-soft hover:text-carnet-red hover:border-carnet-red hover:bg-[rgba(193,68,58,0.06)] font-instrument h-11 px-4 rounded-md font-medium transition-colors flex-1 min-w-[140px]"
                >
                  <Download className="w-4 h-4 mr-2" />
                  Télécharger (.txt)
                </Button>
                <Button
                  onClick={handleDownloadPDF}
                  variant="outline"
                  className="border-dashed border-[rgba(78,55,30,0.18)] bg-carnet-paper-2 text-carnet-ink-soft hover:text-carnet-red hover:border-carnet-red hover:bg-[rgba(193,68,58,0.06)] font-instrument h-11 px-4 rounded-md font-medium transition-colors flex-1 min-w-[140px]"
                >
                  <FileText className="w-4 h-4 mr-2" />
                  Télécharger (PDF)
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
