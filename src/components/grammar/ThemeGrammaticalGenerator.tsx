
import React, { useState } from "react";
import { Card, CardHeader, CardContent, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";
import { Loader2, Languages } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";

type Language = "en" | "de" | "es";

// Types for backend responses
interface ThemeSentence {
  french: string;
  reference: string;
  notes: string[];
}

interface EvaluationResult {
  score: number; // sur 10
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
  const { toast } = useToast();

  // Générer une nouvelle phrase
  const handleGenerate = async () => {
    setResult(null);
    setStudent("");
    setLoading(true);
    try {
      const { data, error } = await supabase.functions.invoke('generate-theme-sentence', {
        body: { language }
      });
      
      if (error) throw error;
      setSentence(data);
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
          reference: sentence.reference
        }
      });
      
      if (error) throw error;
      
      // Add fallback values to ensure the object structure is complete
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
        german_analysis: data.german_analysis || null
      };
      
      setResult(processedData);
    } catch (e: any) {
      console.error('Error evaluating translation:', e);
      toast({ title: "Erreur", description: e.message, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  // Label langues
  const langLabel: Record<Language, string> = {
    en: "Anglais",
    de: "Allemand",
    es: "Espagnol"
  };

  return (
    <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white via-blue-50/30 to-indigo-50/30">
      <CardHeader className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
            <Languages className="h-6 w-6" />
          </div>
          <div>
            <CardTitle className="text-2xl font-bold">Thème Grammatical 📝</CardTitle>
            <CardDescription className="text-blue-100 mt-1">
              Générateur et correcteur de thèmes pour concours, notation détaillée instantanée.
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
          <Button onClick={handleGenerate} disabled={loading}>
            {loading ? <Loader2 className="animate-spin h-5 w-5" /> : "Nouvelle phrase"}
          </Button>
        </div>
        {sentence && (
          <div className="space-y-2">
            <div>
              <span className="font-semibold text-blue-700">À traduire :</span> 
              <span className="ml-2">{sentence.french}</span>
            </div>
            <div className="text-sm text-muted-foreground">
              Structure : {sentence.notes && sentence.notes.join(", ")}
            </div>
            <textarea
              value={student}
              onChange={e => setStudent(e.target.value)}
              placeholder={`Votre traduction en ${langLabel[language]}…`}
              rows={3}
              className="w-full border rounded p-3 mt-2"
            />
            <Button 
              onClick={handleEvaluate} 
              className="mt-3"
              disabled={loading || !student.trim()}
            >
              {loading ? <Loader2 className="animate-spin h-5 w-5" /> : "Corriger"}
            </Button>
          </div>
        )}
        {result && (
          <div className="mt-8 space-y-5">
            <div className="font-bold text-lg">
              Note&nbsp;: <span className={`rounded px-2 py-1 ${result.score >= 8 ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`}>{result.score}/10</span>
            </div>
            <div>
              <b>Référence parfaite :</b><br />
              <span className="prose">{result.reference}</span>
            </div>
            <div>
              <b>Corrigé de votre traduction :</b><br />
              <span className="prose text-blue-800">{result.corrected}</span>
            </div>
            <div>
              <b>Bilan des erreurs :</b>
              <ul className="list-disc ml-8">
                {result.severity && Object.entries(result.severity).map(([type, list]) =>
                  Array.isArray(list) && list.length > 0 ? (
                    <li key={type}>
                      <span className="font-medium capitalize">{type}</span> : {list.join("; ")}
                    </li>
                  ) : null
                )}
              </ul>
            </div>
            
            {/* Analyse spécialisée allemand */}
            {language === "de" && result.german_analysis && (
              <div className="bg-yellow-50 p-4 rounded-lg border border-yellow-200">
                <b className="text-yellow-800">🇩🇪 Analyse spécialisée allemand :</b>
                {result.german_analysis.declension_errors && result.german_analysis.declension_errors.length > 0 && (
                  <div className="mt-2">
                    <span className="font-medium text-yellow-700">Déclinaisons incorrectes :</span>
                    <ul className="list-disc ml-6 text-yellow-700">
                      {result.german_analysis.declension_errors.map((err, i) => <li key={i}>{err}</li>)}
                    </ul>
                  </div>
                )}
                {result.german_analysis.word_order_errors && result.german_analysis.word_order_errors.length > 0 && (
                  <div className="mt-2">
                    <span className="font-medium text-yellow-700">Erreurs d'ordre des mots :</span>
                    <ul className="list-disc ml-6 text-yellow-700">
                      {result.german_analysis.word_order_errors.map((err, i) => <li key={i}>{err}</li>)}
                    </ul>
                  </div>
                )}
              </div>
            )}
            
            {result.grammar_rules && result.grammar_rules.length > 0 && (
              <div>
                <b>Règles à réviser :</b>
                <ul className="list-disc ml-8">
                  {result.grammar_rules.map((r, i) => <li key={i}>{r}</li>)}
                </ul>
              </div>
            )}
            {result.tips && result.tips.length > 0 && (
              <div className="mt-2 text-sm text-gray-600">
                <b>Conseils :</b>
                <ul className="list-disc ml-8">{result.tips.map((t, i) => <li key={i}>{t}</li>)}</ul>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
