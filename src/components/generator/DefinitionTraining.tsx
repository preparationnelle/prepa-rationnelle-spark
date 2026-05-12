import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Alert, AlertDescription } from '@/components/ui/alert';
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
      <Card className="bg-white/90 backdrop-blur-sm rounded-3xl border border-orange-100 shadow-2xl">
        <CardContent className="p-12 text-center">
          <BookOpen className="h-16 w-16 mx-auto mb-4 text-gray-400" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Définissez d'abord un sujet</h3>
          <p className="text-gray-600">
            Sélectionnez un sujet dans la zone principale pour commencer à définir ses termes clés.
          </p>
        </CardContent>
      </Card>
    );
  }

  if (isExtractingTerms) {
    return (
      <Card className="bg-white/90 backdrop-blur-sm rounded-3xl border border-orange-100 shadow-2xl">
        <CardContent className="p-12 text-center">
          <Loader2 className="h-16 w-16 mx-auto mb-4 text-pr-black animate-spin" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Extraction des termes...</h3>
          <p className="text-gray-600">Analyse du sujet en cours</p>
        </CardContent>
      </Card>
    );
  }

  if (terms.length === 0) {
    return (
      <Card className="bg-white/90 backdrop-blur-sm rounded-3xl border border-orange-100 shadow-2xl">
        <CardContent className="p-12 text-center">
          <AlertCircle className="h-16 w-16 mx-auto mb-4 text-gray-400" />
          <h3 className="text-xl font-bold text-gray-900 mb-2">Aucun terme extrait</h3>
          <p className="text-gray-600 mb-4">
            Impossible d'extraire les termes de ce sujet.
          </p>
          <Button
            onClick={() => extractTermsFromSubject(subjectFromParent)}
            className="bg-pr-black hover:bg-pr-black-dark text-white rounded-full"
          >
            Réessayer
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-6">
      {/* Header Card - Subject and Progress */}
      <Card className="bg-gradient-to-r from-orange-50 to-transparent border-gray-200 shadow-lg rounded-3xl overflow-hidden">
        <CardHeader className="pb-4">
          <CardTitle className="flex items-center gap-3 text-xl text-gray-900">
            <BookOpen className="h-6 w-6 text-pr-black" />
            Définir les termes du sujet
          </CardTitle>
          <div className="mt-2 text-sm text-gray-600">
            {terms.length} terme{terms.length > 1 ? 's' : ''} à définir
          </div>
        </CardHeader>
      </Card>

      {/* All Terms - Ultra Compact Layout */}
      <div className="grid grid-cols-1 gap-2">
        {terms.map((term, index) => {
          const def = definitions.get(term);
          return (
            <Card key={term} className="bg-white/90 backdrop-blur-sm rounded-lg border border-orange-100 shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-start p-3 gap-3">
                <div className="flex items-center gap-2 sm:w-48 shrink-0 pt-1">
                  <Badge className="bg-pr-gray-bg text-pr-gray-mid border-0 text-[10px] px-1.5 h-5 flex items-center justify-center min-w-[30px] font-dm-sans">
                    {index + 1}/{terms.length}
                  </Badge>
                  <span className="text-sm font-bold text-gray-900 leading-tight">
                    {term}
                  </span>
                </div>

                <div className="flex-1 space-y-2 w-full">
                  <div className="relative">
                    <Textarea
                      value={def?.userDefinition || ''}
                      onChange={(e) => handleDefinitionChange(term, e.target.value)}
                      placeholder={`Définition...`}
                      className="min-h-[60px] resize-none border border-gray-200 focus:border-pr-black focus:ring-1 focus:ring-pr-black bg-white rounded-md text-sm p-2 pr-12 leading-snug"
                    />
                    <div className="absolute bottom-1 right-2 text-[9px] text-gray-400 pointer-events-none">
                      {def?.userDefinition.length || 0}
                    </div>
                  </div>

                  {/* Individual Feedback (if available) */}
                  {(def?.score !== undefined || def?.recommendations || def?.formalDefinition || def?.strengths) && (
                    <div className="space-y-2">
                      {/* Score Badge */}
                      {def?.score !== undefined && (
                        <div className="flex items-center gap-2">
                          <div className={`px-3 py-1 rounded-full text-xs font-bold font-dm-sans ${def.score >= 80 ? 'bg-pr-gray-bg text-pr-black border border-pr-gray-light/30' :
                            def.score >= 60 ? 'bg-pr-gray-bg text-pr-gray-dark border border-pr-gray-light' :
                              'bg-pr-black/5 text-pr-black border border-pr-gray-light'
                            }`}>
                            Note : {def.score}/100
                          </div>
                        </div>
                      )}

                      {/* Culture Générale Mode - Rich Feedback */}
                      {mode === 'culture-generale' && (
                        <>
                          {/* Strengths */}
                          {def?.strengths && def.strengths.length > 0 && (
                            <div className="bg-pr-gray-bg/40 rounded-md p-2 border border-pr-black/20">
                              <div className="text-xs font-semibold text-pr-black mb-1 flex items-center gap-1 font-dm-sans">
                                <CheckCircle2 className="h-3 w-3" />
                                Points forts :
                              </div>
                              <ul className="text-xs text-pr-gray-dark space-y-1 ml-3 font-dm-sans">
                                {def.strengths.map((strength, idx) => (
                                  <li key={idx} className="list-disc leading-tight">{strength}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Improvements */}
                          {def?.improvements && def.improvements.length > 0 && (
                            <div className="bg-pr-gray-bg rounded-md p-2 border border-pr-gray-light">
                              <div className="text-xs font-semibold text-pr-black mb-1 flex items-center gap-1 font-dm-sans">
                                💡 Axes d'amélioration :
                              </div>
                              <ul className="text-xs text-pr-gray-dark space-y-1 ml-3 font-dm-sans">
                                {def.improvements.map((imp, idx) => (
                                  <li key={idx} className="list-disc leading-tight">{imp}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Missing Elements */}
                          {def?.missingElements && def.missingElements.length > 0 && (
                            <div className="bg-pr-gray-bg rounded-md p-2 border border-pr-gray-light/30">
                              <div className="text-xs font-semibold text-pr-black mb-1 flex items-center gap-1 font-dm-sans">
                                <AlertCircle className="h-3 w-3" />
                                Éléments manquants :
                              </div>
                              <ul className="text-xs text-pr-gray-dark space-y-1 ml-3 font-dm-sans">
                                {def.missingElements.map((missing, idx) => (
                                  <li key={idx} className="list-disc leading-tight">{missing}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Reference Definition */}
                          {def?.referenceDefinition && (
                            <div className="bg-white rounded-md p-2 border border-pr-gray-light">
                              <div className="text-xs font-semibold text-pr-black mb-1 flex items-center gap-1 font-dm-sans">
                                <BookOpen className="h-3 w-3" />
                                Définition de référence :
                              </div>
                              <p className="text-xs text-pr-gray-dark leading-tight italic font-dm-sans">{def.referenceDefinition}</p>
                            </div>
                          )}

                          {/* Alternative Angles */}
                          {def?.alternativeAngles && def.alternativeAngles.length > 0 && (
                            <div className="bg-pr-gray-bg rounded-md p-2 border border-pr-gray-light">
                              <div className="text-xs font-semibold text-pr-black mb-1 flex items-center gap-1 font-dm-sans">
                                🔍 Pistes alternatives à explorer :
                              </div>
                              <ul className="text-xs text-pr-gray-dark space-y-1 ml-3 font-dm-sans">
                                {def.alternativeAngles.map((angle, idx) => (
                                  <li key={idx} className="list-disc leading-tight">{angle}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Suggested References */}
                          {def?.suggestedReferences && def.suggestedReferences.length > 0 && (
                            <div className="bg-white rounded-md p-2 border border-pr-gray-light">
                              <div className="text-xs font-semibold text-pr-black mb-1 flex items-center gap-1 font-dm-sans">
                                📚 Références suggérées :
                              </div>
                              <ul className="text-xs text-pr-gray-dark space-y-1 ml-3 font-dm-sans">
                                {def.suggestedReferences.map((ref, idx) => (
                                  <li key={idx} className="list-disc leading-tight">{ref}</li>
                                ))}
                              </ul>
                            </div>
                          )}
                        </>
                      )}

                      {/* Geopolitics Mode - Simple Feedback */}
                      {mode === 'geopolitics' && (
                        <>
                          {/* Recommendations */}
                          {def?.recommendations && def.recommendations.length > 0 && (
                            <div className="bg-pr-gray-bg rounded-md p-2 border border-pr-gray-light">
                              <div className="text-xs font-semibold text-pr-black mb-1 font-dm-sans">💡 Recommandations :</div>
                              <ul className="text-xs text-pr-gray-dark space-y-1 ml-3 font-dm-sans">
                                {def.recommendations.map((rec, idx) => (
                                  <li key={idx} className="list-disc leading-tight">{rec}</li>
                                ))}
                              </ul>
                            </div>
                          )}

                          {/* Formal Definition */}
                          {def?.formalDefinition && (
                            <div className="bg-pr-gray-bg/40 rounded-md p-2 border border-pr-black/20">
                              <div className="text-xs font-semibold text-pr-black mb-1 font-dm-sans">✓ Définition formelle attendue :</div>
                              <p className="text-xs text-pr-gray-dark leading-tight font-dm-sans">{def.formalDefinition}</p>
                            </div>
                          )}
                        </>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </Card>
          );
        })}
      </div>

      {/* Validate Button */}
      <div className="flex justify-center pt-4">
        <Button
          onClick={handleValidateAll}
          disabled={isEvaluating}
          className="bg-pr-black hover:bg-pr-black-dark text-white font-semibold rounded-xl px-8 h-12 text-base shadow-[0_4px_14px_rgba(244,132,95,0.35)] hover:shadow-[0_6px_20px_rgba(196,90,53,0.4)] transition-all duration-300 font-dm-sans"
        >
          {isEvaluating ? (
            <>
              <Loader2 className="h-5 w-5 mr-2 animate-spin" />
              Évaluation en cours…
            </>
          ) : (
            <>
              <Sparkles className="h-5 w-5 mr-2" />
              Valider et voir le feedback
            </>
          )}
        </Button>
      </div>

      {/* Global Feedback Card */}
      {finalFeedback && (
        <div className="bg-white rounded-2xl border border-pr-gray-light overflow-hidden shadow-[0_2px_12px_rgba(26,26,24,0.04)] animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="h-[3px] w-full bg-pr-black" />
          <div className="bg-pr-gray-bg border-b border-pr-gray-light px-6 py-5 sm:px-8">
            <h3 className="flex items-center gap-3 font-dm-serif text-xl text-pr-black">
              <CheckCircle2 className="h-5 w-5 text-pr-black" />
              Feedback global
            </h3>
          </div>
          <div className="p-6 sm:p-8 space-y-4">
            {globalScore !== null && (
              <div className="text-center p-6 bg-pr-gray-bg rounded-2xl border border-pr-black/20">
                <div className="font-dm-serif text-6xl text-pr-black mb-2 leading-none">
                  {globalScore}<span className="text-3xl text-pr-black">/100</span>
                </div>
                <div className="text-xs uppercase tracking-[0.08em] text-pr-gray-mid font-semibold mt-2 font-dm-sans">Score global</div>
              </div>
            )}
            <div className="bg-pr-gray-bg p-6 rounded-2xl border border-pr-gray-light">
              <div className="whitespace-pre-line text-pr-gray-dark leading-relaxed font-dm-sans">
                {finalFeedback}
              </div>
            </div>

            {/* Transversal Suggestions (Culture Générale mode only) */}
            {mode === 'culture-generale' && transversalSuggestions && transversalSuggestions.length > 0 && (
              <div className="bg-pr-gray-bg/60 p-6 rounded-2xl border border-pr-black/20">
                <div className="text-sm font-bold text-pr-black mb-3 flex items-center gap-2 font-dm-sans">
                  <Sparkles className="h-4 w-4" />
                  Suggestions transversales pour améliorer l'ensemble
                </div>
                <ul className="space-y-2">
                  {transversalSuggestions.map((suggestion, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-sm text-pr-gray-dark font-dm-sans">
                      <span className="text-pr-black font-bold mt-0.5">→</span>
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
