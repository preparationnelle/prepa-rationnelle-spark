
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Code } from "lucide-react";

type Mode = "analyze" | "debug" | "improve";

export const PythonTutorGenerator: React.FC = () => {
  const [code, setCode] = useState("");
  const [question, setQuestion] = useState("");
  const [level, setLevel] = useState("");
  const [history, setHistory] = useState<{ mode: Mode, text: string }[]>([]);
  const [loading, setLoading] = useState<Mode | null>(null);
  const { toast } = useToast();

  const isFormFilled = code.trim() && question.trim() && level.trim();

  const handlePythonHelp = async (mode: Mode) => {
    if (!isFormFilled) {
      toast({ title: "Merci de remplir tous les champs", variant: "destructive" });
      return;
    }
    setLoading(mode);
    setHistory(h => [...h, { mode, text: "Analyse en cours..." }]);
    try {
      const resp = await fetch("/functions/v1/python-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ code, question, level, mode })
      });
      const data = await resp.json();
      let text = data.result || "Pas de réponse.";
      setHistory(h => [
        ...h.slice(0, h.length - 1), // remove "Analyse en cours..."
        { mode, text }
      ]);
    } catch (e) {
      toast({ title: "Erreur", description: "Impossible de contacter l'IA", variant: "destructive" });
      setHistory(h => [
        ...h.slice(0, h.length - 1),
        { mode, text: "Erreur lors de l'analyse." }
      ]);
    } finally {
      setLoading(null);
    }
  };

  const reset = () => {
    setCode("");
    setQuestion("");
    setLevel("");
    setHistory([]);
    setLoading(null);
  };

  return (
    <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white via-green-50/30 to-emerald-50/30">
      <CardHeader className="bg-gradient-to-r from-green-600 to-emerald-600 text-white">
        <CardTitle className="flex items-center gap-3 text-2xl">
          <span className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
            <Code className="h-6 w-6" />
          </span>
          Assistant Python IA
        </CardTitle>
        <CardDescription className="text-green-100 mt-1">
          Analyse ton code Python, identifie les erreurs et reçois des suggestions d'amélioration adaptées à ton niveau.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8 space-y-6">
        <form className="space-y-4" onSubmit={e => e.preventDefault()}>
          <div>
            <label htmlFor="code" className="block font-medium mb-1">Ton code Python</label>
            <Textarea
              id="code"
              name="code"
              className="w-full font-mono text-sm"
              rows={7}
              placeholder="# Colle ou écris ici ton code Python"
              value={code}
              onChange={e => setCode(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="question" className="block font-medium mb-1">Ta question</label>
            <Input
              id="question"
              name="question"
              placeholder="Quelle est ta question ou la partie que tu veux améliorer ?"
              value={question}
              onChange={e => setQuestion(e.target.value)}
              required
            />
          </div>
          <div>
            <label htmlFor="level" className="block font-medium mb-1">Ton niveau en Python</label>
            <Input
              id="level"
              name="level"
              placeholder="Ex: débutant, intermédiaire, avancé"
              value={level}
              onChange={e => setLevel(e.target.value)}
              required
            />
          </div>
        </form>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="secondary"
            onClick={() => handlePythonHelp("analyze")}
            disabled={loading !== null || !isFormFilled}
          >
            {loading === "analyze" ? "Analyse..." : "Analyser le code"}
          </Button>
          <Button
            variant="outline"
            onClick={() => handlePythonHelp("debug")}
            disabled={loading !== null || !isFormFilled}
          >
            {loading === "debug" ? "Recherche d'erreurs..." : "Trouver les erreurs"}
          </Button>
          <Button
            onClick={() => handlePythonHelp("improve")}
            disabled={loading !== null || !isFormFilled}
          >
            {loading === "improve" ? "Suggestions..." : "Proposer une version améliorée"}
          </Button>
          <Button
            variant="ghost"
            onClick={reset}
            disabled={loading !== null && !isFormFilled}
          >
            Réinitialiser
          </Button>
        </div>
        <div className="mt-6">
          {history.length > 0 && (
            <div className="space-y-4">
              {history.map((item, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded border font-mono text-sm whitespace-pre-line">
                  <div className="font-semibold mb-2">
                    {item.mode === "analyze" && "Analyse :"}
                    {item.mode === "debug" && "Recherche d'erreurs :"}
                    {item.mode === "improve" && "Suggestion d'amélioration :"}
                  </div>
                  <div className="text-gray-800">{item.text}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

