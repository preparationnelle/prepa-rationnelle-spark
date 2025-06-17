
import React, { useState, useEffect } from "react";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Languages, Brain } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { useAuth } from "@/context/AuthContext";
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import ThemeGrammarTips from "./ThemeGrammarTips";
import { GrammarErrorMemory } from "./GrammarErrorMemory";
import { SimilarSentencesGenerator } from "./SimilarSentencesGenerator";

type Language = "en" | "de" | "es";

interface ThemeSentence {
  french: string;
  reference: string;
  grammar_points: string[];
  notes: string[];
}

interface EvaluationResult {
  score: number;
  severity: {
    barbarism: string[];
    omission: string[];
    grammar: string[];
    lexicon: string[];
    spelling: string[];
    other: string[];
  };
  corrected: string;
  reference: string;
  grammar_rules: string[];
  tips: string[];
  weak_grammar_points: string[];
  similar_sentences: string[];
  flashcard_rule: string;
  german_analysis?: {
    declension_errors: string[];
    word_order_errors: string[];
  };
}

export const ThemeGrammaticalGenerator: React.FC = () => {
  const [language, setLanguage] = useState<Language>("en");
  const [sentence, setSentence] = useState<ThemeSentence | null>(null);
  const [student, setStudent] = useState("");
  const [result, setResult] = useState<EvaluationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [history, setHistory] = useState<string[]>([]);
  const [newError, setNewError] = useState<any>(null);
  const { toast } = useToast();
  const { currentUser } = useAuth();

  // Générer une nouvelle phrase
  const handleGenerate = async (chosenLanguage: Language = language, withHistory: string[] = history) => {
    setResult(null);
    setStudent("");
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-theme-sentence', {
        body: {
          language: chosenLanguage,
          history: withHistory
        }
      });

      if (error) throw error;
      setSentence(data);
      if (data?.reference && !withHistory.includes(data.reference)) {
        setHistory([...withHistory, data.reference]);
      }
    } catch (e: any) {
      console.error('Error generating sentence:', e);
      toast({ title: "Erreur", description: e.message, variant: "destructive" });
      setSentence(null);
    } finally {
      setLoading(false);
    }
  };

  // Évaluer la traduction
  const handleEvaluate = async () => {
    if (!sentence) return;
    setLoading(true);
    setResult(null);
    try {
      const { data, error } = await supabase.functions.invoke('evaluate-theme-translation', {
        body: {
          language,
          student,
          french: sentence.french,
          reference: sentence.reference,
          grammar_points: sentence.grammar_points
        }
      });
      
      if (error) throw error;
      
      const processedData = {
        ...data,
        severity: data.severity || {
          barbarism: [],
          omission: [],
          grammar: [],
          lexicon: [],
          spelling: [],
          other: []
        },
        grammar_rules: data.grammar_rules || [],
        tips: data.tips || [],
        weak_grammar_points: data.weak_grammar_points || [],
        similar_sentences: data.similar_sentences || [],
        flashcard_rule: data.flashcard_rule || "",
        german_analysis: data.german_analysis || null
      };
      
      setResult(processedData);

      // Si il y a des erreurs significatives, enregistrer dans la mémoire
      if (processedData.score < 8 && processedData.weak_grammar_points.length > 0) {
        const errorData = {
          grammar_point: processedData.weak_grammar_points[0], // Point principal
          rule: processedData.flashcard_rule,
          french_sentence: sentence.french,
          student_answer: student,
          correct_answer: processedData.reference,
          error_type: Object.keys(processedData.severity).find(key => 
            processedData.severity[key as keyof typeof processedData.severity].length > 0
          ) || 'other'
        };
        setNewError(errorData);
      }
    } catch (e: any) {
      console.error('Error evaluating translation:', e);
      toast({ title: "Erreur", description: e.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  // Pratiquer une phrase similaire
  const handlePracticeSentence = (practiceSentence: string) => {
    // Créer une phrase d'entraînement temporaire
    const tempSentence: ThemeSentence = {
      french: practiceSentence,
      reference: "", // Sera généré par l'IA lors de l'évaluation
      grammar_points: result?.weak_grammar_points || [],
      notes: ["Exercice de consolidation"]
    };
    setSentence(tempSentence);
    setStudent("");
    setResult(null);
    toast({
      title: "Phrase d'entraînement chargée",
      description: "Traduisez cette phrase pour consolider vos acquis"
    });
  };

  // Charge auto dès le montage ou si la langue change
  useEffect(() => {
    setHistory([]);
    handleGenerate(language, []);
  }, [language]);

  const langLabel: Record<Language, string> = {
    en: "Anglais",
    de: "Allemand",
    es: "Espagnol"
  };

  return (
    <div className="space-y-6">
      <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30">
        <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <Languages className="h-6 w-6" />
            </div>
            <div>
              <CardTitle className="text-2xl font-bold">Thème Grammatical Avancé 📝</CardTitle>
              <CardDescription className="text-blue-100 mt-1">
                Langue de presse avec analyse d'erreurs et mémoire d'apprentissage
              </CardDescription>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-8 space-y-6">
          <div className="flex items-center justify-between gap-4">
            <Tabs value={language} onValueChange={val => setLanguage(val as Language)}>
              <TabsList>
                <TabsTrigger value="en">🇬🇧 Anglais</TabsTrigger>
                <TabsTrigger value="de">🇩🇪 Allemand</TabsTrigger>
                <TabsTrigger value="es">🇪🇸 Espagnol</TabsTrigger>
              </TabsList>
            </Tabs>
            <Button onClick={() => handleGenerate(language, history)} disabled={loading}>
              {loading ? <Loader2 className="animate-spin h-5 w-5" /> : "Nouvelle phrase"}
            </Button>
          </div>

          {sentence && (
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-l-blue-500">
                <div className="mb-2">
                  <span className="font-semibold text-blue-700">À traduire :</span>
                  <span className="ml-2 text-lg">{sentence.french}</span>
                </div>
                {sentence.grammar_points && sentence.grammar_points.length > 0 && (
                  <div className="text-sm text-blue-600">
                    <strong>Points grammaticaux :</strong> {sentence.grammar_points.join(", ")}
                  </div>
                )}
                {sentence.notes && sentence.notes.length > 0 && (
                  <div className="text-xs text-muted-foreground mt-1">
                    Notes : {sentence.notes.join(", ")}
                  </div>
                )}
              </div>

              <textarea
                value={student}
                onChange={e => setStudent(e.target.value)}
                placeholder={`Votre traduction en ${langLabel[language]}…`}
                rows={3}
                className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              
              <Button
                onClick={handleEvaluate}
                disabled={loading || !student.trim()}
                className="w-full"
              >
                {loading ? <Loader2 className="animate-spin h-5 w-5 mr-2" /> : <Brain className="h-5 w-5 mr-2" />}
                Corriger et analyser
              </Button>
            </div>
          )}

          {result && (
            <div className="mt-8 space-y-6">
              <div className="flex items-center gap-4">
                <div className="font-bold text-lg">
                  Note : <span className={`rounded px-3 py-1 ${result.score >= 8 ? "bg-green-100 text-green-700" : result.score >= 6 ? "bg-orange-100 text-orange-700" : "bg-red-100 text-red-700"}`}>
                    {result.score}/10
                  </span>
                </div>
                {result.weak_grammar_points.length > 0 && (
                  <div className="text-sm text-orange-600 bg-orange-100 px-2 py-1 rounded">
                    {result.weak_grammar_points.length} point(s) à consolider
                  </div>
                )}
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-green-700">✅ Référence parfaite :</h4>
                  <div className="bg-green-50 p-3 rounded border-l-4 border-l-green-500">
                    {result.reference}
                  </div>
                </div>
                <div>
                  <h4 className="font-semibold mb-2 text-blue-700">📝 Votre version corrigée :</h4>
                  <div className="bg-blue-50 p-3 rounded border-l-4 border-l-blue-500">
                    {result.corrected}
                  </div>
                </div>
              </div>

              {/* Analyse des erreurs */}
              {Object.values(result.severity).some(arr => arr.length > 0) && (
                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <h4 className="font-semibold mb-2 text-red-700">🚨 Analyse des erreurs :</h4>
                  <ul className="list-disc ml-6 space-y-1">
                    {Object.entries(result.severity).map(([type, list]) =>
                      Array.isArray(list) && list.length > 0 ? (
                        <li key={type} className="text-red-600">
                          <span className="font-medium capitalize">{type} :</span> {list.join("; ")}
                        </li>
                      ) : null
                    )}
                  </ul>
                </div>
              )}

              {/* Analyse spécialisée allemand */}
              {language === "de" && result.german_analysis && (
                <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                  <h4 className="font-semibold text-yellow-800 mb-2">🇩🇪 Analyse spécialisée allemand :</h4>
                  {result.german_analysis.declension_errors?.length > 0 && (
                    <div className="mb-2">
                      <span className="font-medium text-yellow-700">Déclinaisons incorrectes :</span>
                      <ul className="list-disc ml-6 text-yellow-700">
                        {result.german_analysis.declension_errors.map((err, i) => <li key={i}>{err}</li>)}
                      </ul>
                    </div>
                  )}
                  {result.german_analysis.word_order_errors?.length > 0 && (
                    <div>
                      <span className="font-medium text-yellow-700">Erreurs d'ordre des mots :</span>
                      <ul className="list-disc ml-6 text-yellow-700">
                        {result.german_analysis.word_order_errors.map((err, i) => <li key={i}>{err}</li>)}
                      </ul>
                    </div>
                  )}
                </div>
              )}

              {result.grammar_rules && result.grammar_rules.length > 0 && (
                <div className="bg-purple-50 p-4 rounded-lg border border-purple-200">
                  <h4 className="font-semibold mb-2 text-purple-700">📚 Règles à réviser :</h4>
                  <ul className="list-disc ml-6 space-y-1">
                    {result.grammar_rules.map((r, i) => <li key={i} className="text-purple-600">{r}</li>)}
                  </ul>
                </div>
              )}

              {result.tips && result.tips.length > 0 && (
                <ThemeGrammarTips tips={result.tips} />
              )}
            </div>
          )}
        </CardContent>
      </Card>

      {/* Générateur de phrases similaires */}
      {result && result.weak_grammar_points.length > 0 && (
        <SimilarSentencesGenerator
          weakGrammarPoints={result.weak_grammar_points}
          similarSentences={result.similar_sentences}
          language={language}
          onPracticeSentence={handlePracticeSentence}
        />
      )}

      {/* Mémoire des erreurs */}
      <GrammarErrorMemory 
        language={language} 
        newError={newError}
      />
    </div>
  );
};
