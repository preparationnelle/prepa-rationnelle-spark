
import React, { useState, useRef } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Code, Clipboard } from "lucide-react";

type Mode = "analyze" | "debug" | "improve";

function countLines(code: string) {
  return code.split(/\r\n|\r|\n/).length;
}

export const PythonTutorGenerator: React.FC = () => {
  const [code, setCode] = useState("");
  const [question, setQuestion] = useState("");
  const [libraries, setLibraries] = useState(""); // New field for libs/frameworks
  const [history, setHistory] = useState<{ mode: Mode, text: string }[]>([]);
  const [loading, setLoading] = useState<Mode | null>(null);
  const { toast } = useToast();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const isFormFilled = code.trim() && question.trim();

  // Copy improved code (if any) to clipboard
  function copyToClipboard(text: string) {
    navigator.clipboard.writeText(text).then(() =>
      toast({ title: "Code copié dans le presse-papier", variant: "success" })
    );
  }
  
  // Highlight code fences for suggestions (results with code)
  function formatMarkdownWithHighlight(md: string) {
    // Very basic markdown code block handling
    return md.split("\n").map((line, idx) => {
      if (line.trim().startsWith("```") || line.trim().endsWith("```")) {
        return null;
      }
      return <div key={idx} className="leading-snug font-mono whitespace-pre break-all">{line}</div>;
    });
  }

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
        body: JSON.stringify({ code, question, libraries, mode })
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
    setLibraries("");
    setHistory([]);
    setLoading(null);
    if (textareaRef.current) textareaRef.current.focus();
  };

  // Editor detail: line numbers
  const editorLines = Array.from({ length: countLines(code) || 1 });

  return (
    <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-[#141933] via-green-50/5 to-[#322b4d]">
      <CardHeader className="bg-gradient-to-r from-[#222d5f] via-[#26354a] to-emerald-700 text-white">
        <CardTitle className="flex items-center gap-3 text-2xl">
          <span className="p-2 bg-white/15 rounded-lg backdrop-blur-sm border border-white/10">
            <Code className="h-6 w-6 text-white" />
          </span>
          Assistant Python IA
        </CardTitle>
        <CardDescription className="text-green-100/80 mt-1">
          Analyse ton code Python, identifie les erreurs et reçois une version améliorée. Expérience type éditeur de code.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8 space-y-6">
        <form className="space-y-4" onSubmit={e => e.preventDefault()}>
          <div>
            <label htmlFor="code" className="block font-medium mb-1 text-white">
              <span>Ton code Python</span>
              <span className="ml-2 rounded bg-[#181f3b] text-xs px-2 py-0.5 text-[#6ae0e0] font-mono">Ctrl+Entrée pour valider</span>
            </label>
            <div className="relative rounded-lg overflow-hidden group">
              <div className="absolute top-0 left-0 h-full w-12 flex flex-col items-end pr-2 pt-2 select-none z-10 bg-transparent">
                {editorLines.map((_, i) => (
                  <span key={i} className="text-[#38405b] font-mono text-xs block h-5">{i + 1}</span>
                ))}
              </div>
              <Textarea
                id="code"
                name="code"
                ref={textareaRef}
                className="w-full min-h-[180px] bg-[#181f3b] text-[#e1e8f6] font-mono text-base border-0 pl-14 resize-vertical focus-visible:ring-2 focus-visible:ring-primary placeholder:text-[#457587]/50"
                rows={8}
                placeholder="Écris ici ton code Python... (avec indentation et commentaires si possible)"
                value={code}
                autoComplete="off"
                spellCheck={false}
                onChange={e => setCode(e.target.value)}
                onKeyDown={e => {
                  if ((e.ctrlKey || e.metaKey) && e.key === "Enter") {
                    e.preventDefault();
                    if (isFormFilled) handlePythonHelp("analyze");
                  }
                }}
                required
              />
            </div>
          </div>
          <div>
            <label htmlFor="question" className="block font-medium mb-1 text-white">Quelle est ta question ou le problème à résoudre ?</label>
            <Input
              id="question"
              name="question"
              className="bg-[#181f3b] text-[#e1e8f6] font-mono border border-[#293267] placeholder:text-[#6a8abf]/70"
              placeholder="Quelle partie du code te pose problème ? Que veux-tu améliorer ?"
              value={question}
              onChange={e => setQuestion(e.target.value)}
              required
              autoComplete="off"
            />
          </div>
          <div>
            <label htmlFor="libraries" className="block font-medium mb-1 text-white">
              Quelles bibliothèques/frameworks veux-tu utiliser ? (optionnel)
            </label>
            <Input
              id="libraries"
              name="libraries"
              className="bg-[#181f3b] text-[#e1e8f6] font-mono border border-[#293267] placeholder:text-[#6a8abf]/70"
              placeholder="ex : pandas, numpy, flask, requests, Python 3.11..."
              value={libraries}
              onChange={e => setLibraries(e.target.value)}
              autoComplete="off"
            />
          </div>
        </form>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button
            variant="secondary"
            onClick={() => handlePythonHelp("analyze")}
            disabled={loading !== null || !isFormFilled}
            className="font-bold"
          >
            {loading === "analyze" ? "Analyse..." : "Analyser le code"}
          </Button>
          <Button
            variant="outline"
            onClick={() => handlePythonHelp("debug")}
            disabled={loading !== null || !isFormFilled}
            className="font-bold"
          >
            {loading === "debug" ? "Recherche d'erreurs..." : "Trouver les erreurs"}
          </Button>
          <Button
            onClick={() => handlePythonHelp("improve")}
            disabled={loading !== null || !isFormFilled}
            className="bg-[#26d8b3] text-white font-bold hover:bg-[#20b69d]"
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
        <div className="mt-8">
          {history.length > 0 && (
            <div className="space-y-4">
              {history.map((item, idx) => (
                <div
                  key={idx}
                  className={
                    "relative bg-[#141933] border border-[#20294a] p-4 rounded-lg font-mono text-sm overflow-x-auto animate-fade-in"
                  }
                >
                  <div className="font-semibold mb-2 flex items-center">
                    {item.mode === "analyze" && (
                      <>
                        <Code className="mr-1 h-4 w-4" /> Analyse :
                      </>
                    )}
                    {item.mode === "debug" && (
                      <>
                        <Code className="mr-1 h-4 w-4" /> Recherche d'erreurs :
                      </>
                    )}
                    {item.mode === "improve" && (
                      <>
                        <Code className="mr-1 h-4 w-4" /> Suggestion d'amélioration :
                        <Button
                          variant="ghost"
                          className="ml-2 p-1 h-7 w-7"
                          onClick={() => copyToClipboard(item.text)}
                          title="Copier la suggestion"
                        >
                          <Clipboard className="w-4 h-4" />
                        </Button>
                      </>
                    )}
                  </div>
                  <div className="text-[#e1e8f6] selection:bg-[#30c57f]/50">
                    {item.text.includes("```")
                      ? formatMarkdownWithHighlight(item.text)
                      : <span>{item.text}</span>
                    }
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
