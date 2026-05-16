import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { CheckCircle2, AlertCircle, Loader2, BookOpen, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import { supabase } from '@/integrations/supabase/client';

interface Props {
  subjectFromParent?: string;
  mode?: 'geopolitics' | 'culture-generale';
}

interface TermDefinition {
  term: string;
  userDefinition: string;
  score?: number;
  // For geopolitics mode
  recommendations?: string[];
  formalDefinition?: string;
  // For culture-generale mode (enriched feedback)
  strengths?: string[];
  improvements?: string[];
  missingElements?: string[];
  referenceDefinition?: string;
  alternativeAngles?: string[];
  suggestedReferences?: string[];
}

export const DefinitionTraining: React.FC<Props> = ({ subjectFromParent, mode = 'geopolitics' }) => {
  const [isExtractingTerms, setIsExtractingTerms] = useState(false);
  const [terms, setTerms] = useState<string[]>([]);
  const [definitions, setDefinitions] = useState<Map<string, TermDefinition>>(new Map());
  const [isEvaluating, setIsEvaluating] = useState(false);
  const [finalFeedback, setFinalFeedback] = useState<string | null>(null);
  const [globalScore, setGlobalScore] = useState<number | null>(null);
  const [transversalSuggestions, setTransversalSuggestions] = useState<string[]>([]);
  const { toast } = useToast();

  // Extract key terms from subject when it changes
  useEffect(() => {
    if (subjectFromParent) {
      extractTermsFromSubject(subjectFromParent);
    }
  }, [subjectFromParent]);

  const extractTermsFromSubject = async (subject: string) => {
    setIsExtractingTerms(true);
    setTerms([]);
    setDefinitions(new Map());
    setFinalFeedback(null);
    setGlobalScore(null);

    try {
      const { data, error } = await supabase.functions.invoke('extract-terms', {
        body: { subject },
      });

      if (error) {
        console.error('Supabase error:', error);
        throw error;
      }

      if (data && data.terms && Array.isArray(data.terms)) {
        setTerms(data.terms);
        // Initialize definitions map
        const initMap = new Map<string, TermDefinition>();
        data.terms.forEach((term: string) => {
          initMap.set(term, { term, userDefinition: '' });
        });
        setDefinitions(initMap);
        toast({
          title: 'Termes extraits',
          description: `${data.terms.length} terme(s) à définir`,
        });
      } else {
        throw new Error('Invalid response format');
      }
    } catch (error) {
      console.error('Error extracting terms:', error);
      toast({
        title: 'Extraction locale',
        description: 'Utilisation de l\'extraction locale des termes',
      });
      // Fallback: simple local extraction
      fallbackExtractTerms(subject);
    } finally {
      setIsExtractingTerms(false);
    }
  };

  const fallbackExtractTerms = (subject: string) => {
    // Simple local extraction: split on spaces and filter out pronouns, articles, etc.
    const stopWords = new Set([
      'le', 'la', 'les', 'un', 'une', 'des', 'du', 'de', 'et', 'ou', 'dans', 'sur', 'pour',
      'par', 'avec', 'en', 'au', 'aux', 'à', 'que', 'qui', 'dont', 'où', 'il', 'elle', 'ils',
      'elles', 'ce', 'ces', 'son', 'sa', 'ses', 'leur', 'leurs', 'depuis', 'vers', 'l', 'd',
      'cette', 'cet'
    ]);

    // Split by whitespace and common punctuation, preserving accented characters
    const words = subject
      .split(/[\s,;.!?'"()\[\]{}]+/)
      .map(w => w.trim())
      .filter(w => {
        const lowerWord = w.toLowerCase();
        return w.length >= 4 && !stopWords.has(lowerWord);
      });

    // Capitalize first letter, lowercase the rest, and remove duplicates
    const extractedTerms = Array.from(new Set(words)).map(
      w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
    );

    setTerms(extractedTerms);
    const initMap = new Map<string, TermDefinition>();
    extractedTerms.forEach(term => {
      initMap.set(term, { term, userDefinition: '' });
    });
    setDefinitions(initMap);
  };

  const handleDefinitionChange = (term: string, value: string) => {
    const updated = new Map(definitions);
    const existing = updated.get(term);
    if (existing) {
      updated.set(term, {
        ...existing,
        userDefinition: value,
      });
      setDefinitions(updated);
    }
  };

  const handleValidateAll = async () => {
    console.log('Validate button clicked');

    // Immediate visual feedback to confirm button is working
    toast({
      title: '🔍 Clic détecté',
      description: 'Vérification des définitions en cours...',
    });

    // Check if all terms have definitions
    const allDefined = Array.from(definitions.values()).every(
      def => def.userDefinition.trim().length > 0
    );

    if (!allDefined) {
      toast({
        title: 'Définitions incomplètes',
        description: 'Veuillez définir tous les termes avant de valider.',
        variant: 'destructive',
      });
      return;
    }

    setIsEvaluating(true);
    setFinalFeedback(null);
    setGlobalScore(null);

    try {
      const definitionsArray = Array.from(definitions.values()).map(def => ({
        term: def.term,
        definition: def.userDefinition,
      }));

      console.log('Calling evaluate-all-definitions with:', { subject: subjectFromParent, definitionsArray });

      const { data, error } = await supabase.functions.invoke('evaluate-all-definitions', {
        body: {
          subject: subjectFromParent,
          definitions: definitionsArray,
          mode: mode,
        },
      });

      if (error) {
        console.error('Supabase function error:', error);
        throw error;
      }

      console.log('Received evaluation data:', data);

      if (data) {
        setGlobalScore(data.globalScore || null);
        setFinalFeedback(data.globalFeedback || 'Évaluation terminée.');
        setTransversalSuggestions(data.transversalSuggestions || []);

        // Update individual feedback
        if (data.individualFeedback && Array.isArray(data.individualFeedback)) {
          const updated = new Map(definitions);
          data.individualFeedback.forEach((fb: any) => {
            const existing = updated.get(fb.term);
            if (existing) {
              updated.set(fb.term, {
                ...existing,
                score: fb.score || 0,
                // Geopolitics mode fields
                recommendations: fb.recommendations || [],
                formalDefinition: fb.formalDefinition || '',
                // Culture Générale mode fields
                strengths: fb.strengths || [],
                improvements: fb.improvements || [],
                missingElements: fb.missingElements || [],
                referenceDefinition: fb.referenceDefinition || '',
                alternativeAngles: fb.alternativeAngles || [],
                suggestedReferences: fb.suggestedReferences || [],
              });
            }
          });
          setDefinitions(updated);
        }

        toast({
          title: 'Évaluation terminée',
          description: `Score global: ${data.globalScore}/100`,
        });
      }
    } catch (error) {
      console.error('Error evaluating definitions:', error);
      toast({
        title: 'Erreur',
        description: 'Impossible d\'évaluer les définitions. Vérifiez la console pour plus de détails.',
        variant: 'destructive',
      });
    } finally {
      setIsEvaluating(false);
    }
  };

  if (!subjectFromParent) {
    return (
      <div className="carnet-card overflow-hidden">
        <div className="p-12 text-center">
          <BookOpen className="h-12 w-12 mx-auto mb-4 text-carnet-red opacity-70" />
          <h3 className="font-lora text-[22px] text-carnet-ink mb-2">
            Définis d'abord <em className="font-lora italic text-carnet-red">un sujet</em>
          </h3>
          <p className="font-instrument text-carnet-ink-mute text-sm">
            Sélectionne un sujet dans la zone principale pour commencer à définir ses termes clés.
          </p>
        </div>
      </div>
    );
  }

  if (isExtractingTerms) {
    return (
      <div className="carnet-card overflow-hidden">
        <div className="p-12 text-center">
          <Loader2 className="h-12 w-12 mx-auto mb-4 text-carnet-red animate-spin" />
          <h3 className="font-lora text-[22px] text-carnet-ink mb-2">
            Extraction des <em className="font-lora italic text-carnet-red">termes</em>…
          </h3>
          <p className="font-instrument text-carnet-ink-mute text-sm">Analyse du sujet en cours</p>
        </div>
      </div>
    );
  }

  if (terms.length === 0) {
    return (
      <div className="carnet-card overflow-hidden">
        <div className="p-12 text-center">
          <AlertCircle className="h-12 w-12 mx-auto mb-4 text-carnet-red opacity-70" />
          <h3 className="font-lora text-[22px] text-carnet-ink mb-2">Aucun terme extrait</h3>
          <p className="font-instrument text-carnet-ink-mute text-sm mb-5">
            Impossible d'extraire les termes de ce sujet.
          </p>
          <Button
            onClick={() => extractTermsFromSubject(subjectFromParent)}
            className="bg-carnet-red hover:bg-carnet-red-deep text-carnet-paper rounded-md h-10 px-5 font-instrument font-medium"
          >
            Réessayer
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="carnet-card overflow-hidden">
        <div className="px-7 pt-7 pb-6 flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] flex items-center justify-center flex-shrink-0">
            <BookOpen className="h-5 w-5 text-carnet-red" />
          </div>
          <div>
            <div className="carnet-eyebrow text-[11px] mb-1">
              {mode === 'culture-generale' ? 'Culture générale' : 'Géopolitique'}
            </div>
            <h2 className="font-lora text-[26px] text-carnet-ink leading-none">
              Définir les <em className="font-lora italic text-carnet-red">termes</em> du sujet
            </h2>
            <p className="text-carnet-ink-mute font-instrument text-sm mt-1.5">
              <span className="carnet-hl font-lora italic">{terms.length} terme{terms.length > 1 ? 's' : ''}</span> à définir pour cerner le sujet.
            </p>
          </div>
        </div>
      </div>

      {/* Terms list */}
      <div className="space-y-3">
        {terms.map((term, index) => {
          const def = definitions.get(term);
          return (
            <div key={term} className="carnet-card overflow-hidden">
              <div className="flex flex-col sm:flex-row sm:items-start p-4 gap-4">
                <div className="flex items-baseline gap-3 sm:w-52 shrink-0 pt-1">
                  <span className="carnet-hand text-[28px] text-carnet-red leading-none font-semibold">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  <div className="font-lora text-[17px] text-carnet-ink leading-tight">
                    {term}
                  </div>
                </div>

                <div className="flex-1 space-y-3 w-full">
                  <div className="relative bg-carnet-paper-2 rounded-md border border-dashed border-[rgba(78,55,30,0.18)] focus-within:border-carnet-red transition-colors">
                    <Textarea
                      value={def?.userDefinition || ''}
                      onChange={(e) => handleDefinitionChange(term, e.target.value)}
                      placeholder="Définition…"
                      className="min-h-[70px] resize-none border-0 bg-transparent rounded-md text-[14px] p-3 pr-10 leading-snug focus-visible:ring-0 font-instrument text-carnet-ink placeholder:text-carnet-ink-mute"
                    />
                    <div className="absolute bottom-1.5 right-2.5 text-[10px] text-carnet-ink-mute pointer-events-none font-instrument">
                      {def?.userDefinition.length || 0}
                    </div>
                  </div>

                  {(def?.score !== undefined || def?.recommendations || def?.formalDefinition || def?.strengths) && (
                    <div className="space-y-2.5">
                      {def?.score !== undefined && (
                        <div className="flex items-center gap-2">
                          <span className="carnet-eyebrow text-[10px] inline-flex items-center px-2.5 py-1 bg-[rgba(193,68,58,0.06)] border border-[rgba(193,68,58,0.25)] rounded-full text-carnet-red">
                            Note : {def.score}/100
                          </span>
                        </div>
                      )}

                      {mode === 'culture-generale' && (
                        <>
                          {def?.strengths && def.strengths.length > 0 && (
                            <div className="bg-carnet-paper-2 rounded-md p-3 border border-dashed border-[rgba(78,55,30,0.18)]">
                              <div className="carnet-eyebrow text-[10px] mb-1.5 flex items-center gap-1.5">
                                <CheckCircle2 className="h-3 w-3 text-carnet-red" />
                                Points forts
                              </div>
                              <ul className="space-y-1 font-instrument text-[13px] text-carnet-ink-soft">
                                {def.strengths.map((strength, idx) => (
                                  <li key={idx} className="flex gap-2"><span className="text-carnet-red mt-0.5">·</span><span className="leading-snug">{strength}</span></li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {def?.improvements && def.improvements.length > 0 && (
                            <div className="bg-carnet-paper-2 rounded-md p-3 border border-dashed border-[rgba(78,55,30,0.18)]">
                              <div className="carnet-eyebrow text-[10px] mb-1.5 flex items-center gap-1.5">
                                <Sparkles className="h-3 w-3 text-carnet-red" />
                                Axes d'amélioration
                              </div>
                              <ul className="space-y-1 font-instrument text-[13px] text-carnet-ink-soft">
                                {def.improvements.map((imp, idx) => (
                                  <li key={idx} className="flex gap-2"><span className="text-carnet-red mt-0.5">·</span><span className="leading-snug">{imp}</span></li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {def?.missingElements && def.missingElements.length > 0 && (
                            <div className="bg-carnet-paper-2 rounded-md p-3 border border-dashed border-[rgba(78,55,30,0.18)]">
                              <div className="carnet-eyebrow text-[10px] mb-1.5 flex items-center gap-1.5">
                                <AlertCircle className="h-3 w-3 text-carnet-red" />
                                Éléments manquants
                              </div>
                              <ul className="space-y-1 font-instrument text-[13px] text-carnet-ink-soft">
                                {def.missingElements.map((missing, idx) => (
                                  <li key={idx} className="flex gap-2"><span className="text-carnet-red mt-0.5">·</span><span className="leading-snug">{missing}</span></li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {def?.referenceDefinition && (
                            <div className="bg-carnet-paper-2 rounded-md p-3 border border-dashed border-[rgba(193,68,58,0.3)]">
                              <div className="carnet-eyebrow text-[10px] mb-1.5 flex items-center gap-1.5">
                                <BookOpen className="h-3 w-3 text-carnet-red" />
                                Définition de référence
                              </div>
                              <p className="font-lora italic text-[13px] text-carnet-ink leading-snug">{def.referenceDefinition}</p>
                            </div>
                          )}

                          {def?.alternativeAngles && def.alternativeAngles.length > 0 && (
                            <div className="bg-carnet-paper-2 rounded-md p-3 border border-dashed border-[rgba(78,55,30,0.18)]">
                              <div className="carnet-eyebrow text-[10px] mb-1.5">Pistes alternatives à explorer</div>
                              <ul className="space-y-1 font-instrument text-[13px] text-carnet-ink-soft">
                                {def.alternativeAngles.map((angle, idx) => (
                                  <li key={idx} className="flex gap-2"><span className="text-carnet-red mt-0.5">·</span><span className="leading-snug">{angle}</span></li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {def?.suggestedReferences && def.suggestedReferences.length > 0 && (
                            <div className="bg-carnet-paper-2 rounded-md p-3 border border-dashed border-[rgba(78,55,30,0.18)]">
                              <div className="carnet-eyebrow text-[10px] mb-1.5">Références suggérées</div>
                              <ul className="space-y-1 font-instrument text-[13px] text-carnet-ink-soft">
                                {def.suggestedReferences.map((ref, idx) => (
                                  <li key={idx} className="flex gap-2"><span className="text-carnet-red mt-0.5">·</span><span className="leading-snug">{ref}</span></li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </>
                      )}

                      {mode === 'geopolitics' && (
                        <>
                          {def?.recommendations && def.recommendations.length > 0 && (
                            <div className="bg-carnet-paper-2 rounded-md p-3 border border-dashed border-[rgba(78,55,30,0.18)]">
                              <div className="carnet-eyebrow text-[10px] mb-1.5">Recommandations</div>
                              <ul className="space-y-1 font-instrument text-[13px] text-carnet-ink-soft">
                                {def.recommendations.map((rec, idx) => (
                                  <li key={idx} className="flex gap-2"><span className="text-carnet-red mt-0.5">·</span><span className="leading-snug">{rec}</span></li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {def?.formalDefinition && (
                            <div className="bg-carnet-paper-2 rounded-md p-3 border border-dashed border-[rgba(193,68,58,0.3)]">
                              <div className="carnet-eyebrow text-[10px] mb-1.5">Définition formelle attendue</div>
                              <p className="font-lora italic text-[13px] text-carnet-ink leading-snug">{def.formalDefinition}</p>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Validate button */}
      <div className="flex justify-center pt-2">
        <Button
          onClick={handleValidateAll}
          disabled={isEvaluating}
          className="bg-carnet-red hover:bg-carnet-red-deep text-carnet-paper rounded-md px-8 h-12 text-[15px] font-instrument font-semibold transition-all duration-200 disabled:opacity-50"
        >
          {isEvaluating ? (
            <>
              <Loader2 className="h-4 w-4 mr-2 animate-spin" />
              Évaluation en cours…
            </>
          ) : (
            <>
              <Sparkles className="h-4 w-4 mr-2" />
              Valider et voir le feedback
            </>
          )}
        </Button>
      </div>

      {/* Global feedback */}
      {finalFeedback && (
        <div className="carnet-card overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="px-6 pt-5 pb-3">
            <div className="carnet-eyebrow text-[10px] flex items-center gap-2">
              <CheckCircle2 className="h-3.5 w-3.5 text-carnet-red" />
              Feedback global
            </div>
          </div>
          <div className="px-6 pb-6 space-y-4">
            {globalScore !== null && (
              <div className="text-center bg-carnet-paper-2 rounded-md p-6 border border-dashed border-[rgba(193,68,58,0.3)]">
                <div className="leading-none flex items-baseline justify-center">
                  <span className="carnet-hand text-[68px] text-carnet-red font-semibold leading-none">{globalScore}</span>
                  <span className="font-lora italic text-2xl text-carnet-ink-mute ml-1">/100</span>
                </div>
                <div className="carnet-eyebrow text-[10px] mt-2">Score global</div>
              </div>
            )}
            <div className="bg-carnet-paper-2 p-5 rounded-md border border-dashed border-[rgba(78,55,30,0.18)]">
              <div className="whitespace-pre-line font-instrument text-carnet-ink-soft leading-relaxed text-[14px]">
                {finalFeedback}
              </div>
            </div>

            {mode === 'culture-generale' && transversalSuggestions && transversalSuggestions.length > 0 && (
              <div className="bg-carnet-paper-2 p-5 rounded-md border border-dashed border-[rgba(193,68,58,0.3)]">
                <div className="carnet-eyebrow text-[10px] mb-3 flex items-center gap-2">
                  <Sparkles className="h-3.5 w-3.5 text-carnet-red" />
                  Suggestions transversales
                </div>
                <ul className="space-y-2">
                  {transversalSuggestions.map((suggestion, idx) => (
                    <li key={idx} className="flex items-start gap-2 font-instrument text-[14px] text-carnet-ink-soft">
                      <span className="text-carnet-red font-bold mt-0.5">→</span>
                      <span className="leading-relaxed">{suggestion}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default DefinitionTraining;
