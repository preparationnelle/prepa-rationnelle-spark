import React, { useEffect, useMemo, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { CheckCircle2, AlertCircle, Loader2 } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { findCanonicalDefinition, GEOPOLITICS_DEFINITIONS } from '@/data/geopoliticsDefinitions';
import { supabase } from '@/integrations/supabase/client';

interface Props {
  language?: 'fr' | 'en';
}

export const DefinitionTraining: React.FC<Props> = ({ language = 'fr' }) => {
  const [term, setTerm] = useState('Mondialisation');
  const [userDefinition, setUserDefinition] = useState('');
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [feedback, setFeedback] = useState<string | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const [covered, setCovered] = useState<string[]>([]);
  const [missing, setMissing] = useState<string[]>([]);
  const [showReference, setShowReference] = useState(false);
  const { toast } = useToast();

  const canonical = useMemo(() => findCanonicalDefinition(term), [term]);

  useEffect(() => {
    // Reset the evaluation panel when the term changes
    setFeedback(null);
    setScore(null);
    setCovered([]);
    setMissing([]);
    setUserDefinition('');
    setShowReference(false);
  }, [term]);

  const normalize = (s: string) =>
    s
      .toLowerCase()
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .replace(/[^a-z0-9\s-]/g, ' ')
      .replace(/\s+/g, ' ') // collapse spaces
      .trim();

  const frenchStopWords = new Set([
    'de','la','le','les','du','des','un','une','et','en','dans','sur','par','pour','que','qui','au','aux','avec','ou','d\'','l\'','à','est','aupres','plus','moins','dont','ainsi','vers','entre','ses','son','sa','leurs','leur','the','of','to','in','on'
  ]);

  const extractKeywords = (text: string): string[] => {
    const tokens = normalize(text).split(' ');
    const freq = new Map<string, number>();
    for (const t of tokens) {
      if (t.length < 4) continue;
      if (frenchStopWords.has(t)) continue;
      freq.set(t, (freq.get(t) || 0) + 1);
    }
    return Array.from(freq.entries())
      .sort((a, b) => b[1] - a[1])
      .slice(0, 12)
      .map(([t]) => t);
  };

  const handleEvaluate = async () => {
    setFeedback(null);
    setScore(null);
    setCovered([]);
    setMissing([]);

    if (!userDefinition.trim()) {
      toast({ title: 'Erreur', description: 'Veuillez proposer une définition.', variant: 'destructive' });
      return;
    }

    setIsEvaluating(true);

    const ref = canonical?.definition ?? '';
    const refKeys = extractKeywords(ref);
    const userNorm = normalize(userDefinition);

    const coveredNow: string[] = [];
    const missingNow: string[] = [];
    let hits = 0;
    for (const k of refKeys) {
      if (userNorm.includes(k)) {
        coveredNow.push(k);
        hits += 1;
      } else {
        missingNow.push(k);
      }
    }

    // simple length/clarity heuristic
    const words = userNorm.split(' ').filter(Boolean).length;
    let base = Math.round((hits / Math.max(refKeys.length, 1)) * 80); // 80 pts coverage
    if (words >= 20 && words <= 80) base += 20; // 20 pts concision
    const finalScore = Math.max(0, Math.min(100, base));

    const fb = [
      `Couverture des points clés: ${hits}/${refKeys.length}.`,
      words < 15
        ? 'Définition trop courte: ajoute le contexte et la portée.'
        : words > 100
        ? 'Définition trop longue: vise 30-60 mots.'
        : 'Longueur appropriée.',
      coveredNow.length
        ? `Bien vu: ${coveredNow.slice(0, 6).join(', ')}${coveredNow.length > 6 ? '…' : ''}`
        : 'Commence par poser la nature du concept puis ses effets/portée.',
      missingNow.length
        ? `À intégrer: ${missingNow.slice(0, 6).join(', ')}${missingNow.length > 6 ? '…' : ''}`
        : 'Tu couvres l’essentiel des mots-clés attendus.',
    ].join('\n');

    // Tentative API d'abord, sinon fallback local
    try {
      const { data, error } = await supabase.functions.invoke('evaluate-definition', {
        body: {
          term,
          userDefinition: userDefinition.trim(),
          referenceDefinition: ref,
          language,
        },
      });

      if (!error && data && (typeof data.score === 'number' || typeof data.feedback === 'string')) {
        setCovered(coveredNow);
        setMissing(missingNow);
        setScore(typeof data.score === 'number' ? data.score : finalScore);
        setFeedback(data.feedback || fb);
        setShowReference(true);
      } else {
        setCovered(coveredNow);
        setMissing(missingNow);
        setScore(finalScore);
        setFeedback(fb);
        setShowReference(true);
      }
    } catch (_) {
      setCovered(coveredNow);
      setMissing(missingNow);
      setScore(finalScore);
      setFeedback(fb);
      setShowReference(true);
    } finally {
      setIsEvaluating(false);
    }
  };

  return (
    <Card className="bg-white shadow-sm border border-blue-200">
      <CardHeader className="pb-6 border-b border-blue-100 bg-gradient-to-r from-blue-50 to-blue-100/40">
        <CardTitle className="text-xl text-[#0F172A]">S'entraîner à définir les termes</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="term">Terme</Label>
              <Select value={term} onValueChange={setTerm}>
                <SelectTrigger className="bg-white border-blue-200 focus:border-blue-500 focus:ring-blue-500">
                  <SelectValue placeholder="Choisir un terme" />
                </SelectTrigger>
                <SelectContent>
                  {GEOPOLITICS_DEFINITIONS.map((d) => (
                    <SelectItem key={d.term} value={d.term}>{d.term}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <div className="flex items-center gap-2 text-xs text-blue-800">
                <Button type="button" variant="outline" className="h-7 px-2 border-blue-200" onClick={() => {
                  const idx = GEOPOLITICS_DEFINITIONS.findIndex(x => x.term === term);
                  const prev = (idx - 1 + GEOPOLITICS_DEFINITIONS.length) % GEOPOLITICS_DEFINITIONS.length;
                  setTerm(GEOPOLITICS_DEFINITIONS[prev].term);
                }}>Précédent</Button>
                <Button type="button" variant="outline" className="h-7 px-2 border-blue-200" onClick={() => {
                  const idx = GEOPOLITICS_DEFINITIONS.findIndex(x => x.term === term);
                  const next = (idx + 1) % GEOPOLITICS_DEFINITIONS.length;
                  setTerm(GEOPOLITICS_DEFINITIONS[next].term);
                }}>Suivant</Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="user-definition">Votre définition</Label>
              <Textarea
                id="user-definition"
                value={userDefinition}
                onChange={(e) => setUserDefinition(e.target.value)}
                placeholder="Proposez une définition claire, précise et sourcée si possible."
                className="min-h-[160px] bg-white border-blue-200 focus:border-blue-500 focus:ring-blue-500"
              />
            </div>

            <div className="flex gap-3">
              <Button onClick={handleEvaluate} disabled={isEvaluating || !userDefinition.trim()} className="rounded-xl bg-blue-600 hover:bg-blue-700">
                {isEvaluating ? (
                  <>
                    <Loader2 className="h-4 w-4 mr-2 animate-spin" />
                    Correction…
                  </>
                ) : (
                  <>
                    <CheckCircle2 className="h-4 w-4 mr-2" />
                    Corriger immédiatement
                  </>
                )}
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <Label>Référence attendue</Label>
              {showReference ? (
                <div className="p-4 rounded-lg border border-blue-200 bg-blue-50 text-sm text-slate-800">
                  {canonical?.definition ?? '—'}
                  {canonical?.source && (
                    <div className="text-xs text-blue-700 mt-2">Source: {canonical.source}</div>
                  )}
                </div>
              ) : (
                <Alert className="border border-blue-200 bg-blue-50">
                  <AlertDescription className="text-slate-800 text-sm">
                    La référence est masquée. Proposez d’abord votre définition puis cliquez sur « Corriger immédiatement » pour l’afficher.
                  </AlertDescription>
                </Alert>
              )}
            </div>

            {feedback && (
              <div className="space-y-4">
                <Alert className="border border-blue-200 bg-blue-50">
                  <AlertDescription className="whitespace-pre-line text-slate-900">
                    {typeof score === 'number' ? `Score: ${score}/100\n` : ''}
                    {feedback}
                  </AlertDescription>
                </Alert>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="p-3 rounded-lg border border-blue-200 bg-blue-50">
                    <div className="font-semibold text-blue-900 mb-1">Points couverts</div>
                    <div className="text-blue-900">{covered.length ? covered.join(', ') : '—'}</div>
                  </div>
                  <div className="p-3 rounded-lg border border-blue-200 bg-white">
                    <div className="font-semibold text-blue-900 mb-1">Points manquants</div>
                    <div className="text-blue-900/80">{missing.length ? missing.join(', ') : '—'}</div>
                  </div>
                </div>
                <div className="p-4 rounded-lg border border-blue-200 bg-blue-50">
                  <div className="font-semibold text-blue-900 mb-1">Exemple de définition attendue</div>
                  <div className="text-slate-800">{canonical?.definition ?? '—'}</div>
                </div>
              </div>
            )}

            {!feedback && (
              <Alert className="border border-blue-200 bg-blue-50">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription className="text-slate-800 text-sm">
                  Saisissez votre définition puis cliquez sur « Corriger immédiatement ». Une correction locale est fournie (sans appel API), avec score indicatif, points couverts/manquants et un exemple attendu.
                </AlertDescription>
              </Alert>
            )}
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default DefinitionTraining;


