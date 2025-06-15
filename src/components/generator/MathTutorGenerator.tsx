
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/components/ui/use-toast";
import { Calculator } from "lucide-react";

type Mode = "hint" | "explanation" | "answer";

interface MathTutorState {
  subject: string;
  correction: string;
  question: string;
  studentLevel: string;
}

export const MathTutorGenerator: React.FC = () => {
  const [form, setForm] = useState<MathTutorState>({
    subject: "",
    correction: "",
    question: "",
    studentLevel: "",
  });
  const [loading, setLoading] = useState<Mode | null>(null);
  const [response, setResponse] = useState<string>("");
  const [history, setHistory] = useState<{mode: Mode, text: string}[]>([]);
  const { toast } = useToast();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const isFormFilled = form.subject && form.correction && form.question && form.studentLevel;

  const fetchMathHelp = async (mode: Mode) => {
    if (!isFormFilled) {
      toast({ title: "Merci de remplir tous les champs", variant: "destructive" });
      return;
    }
    setLoading(mode);
    try {
      const resp = await fetch("/functions/v1/math-tutor-assistant", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, mode }),
      });
      const data = await resp.json();
      if (data.result) {
        setHistory(h => [...h, {mode, text: data.result}]);
        setResponse(data.result);
      } else {
        setResponse("Pas de réponse.");
      }
    } catch (e) {
      toast({ title: "Erreur", description: "Impossible de contacter l'IA", variant: "destructive" });
    }
    setLoading(null);
  };

  const reset = () => {
    setForm({ subject: "", correction: "", question: "", studentLevel: "" });
    setLoading(null);
    setResponse("");
    setHistory([]);
  };

  return (
    <Card className="overflow-hidden border-0 shadow-xl bg-gradient-to-br from-white via-sky-50/30 to-indigo-50/30">
      <CardHeader className="bg-gradient-to-r from-sky-600 to-indigo-600 text-white">
        <CardTitle className="flex items-center gap-3 text-2xl">
          <span className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
            <Calculator className="h-6 w-6" />
          </span>
          Prof de maths virtuel
        </CardTitle>
        <CardDescription className="text-sky-100 mt-1">
          Reçois un indice, des explications, ou la solution détaillée pour débloquer ton exercice.
        </CardDescription>
      </CardHeader>
      <CardContent className="p-8 space-y-6">
        <form className="space-y-4" onSubmit={e => e.preventDefault()}>
          <Textarea
            name="subject"
            label="Sujet de l'exercice"
            className="w-full"
            placeholder="Énonce l’exercice (ex : Résoudre x² - 5x + 6 = 0)"
            value={form.subject}
            onChange={handleChange}
            required
            rows={2}
          />
          <Textarea
            name="correction"
            label="Corrigé complet (si dispo)"
            className="w-full"
            placeholder="Coller ici le corrigé (optionnel mais recommandé pour une explication mieux adaptée)"
            value={form.correction}
            onChange={handleChange}
            required
            rows={2}
          />
          <Input
            name="question"
            className="w-full"
            placeholder="Quelle étape/quelle question te pose problème ?"
            value={form.question}
            onChange={handleChange}
            required
          />
          <Input
            name="studentLevel"
            className="w-full"
            placeholder="Ton niveau (ex : Terminale, 2e année prépa, Licence…) "
            value={form.studentLevel}
            onChange={handleChange}
            required
          />
        </form>
        <div className="flex flex-col sm:flex-row gap-3">
          <Button 
            variant="secondary" 
            onClick={() => fetchMathHelp("hint")} 
            loading={loading === "hint"}
            disabled={loading !== null || !isFormFilled}
          >
            Obtenir un indice
          </Button>
          <Button 
            variant="outline"
            onClick={() => fetchMathHelp("explanation")}
            loading={loading === "explanation"}
            disabled={loading !== null || !isFormFilled}
          >
            Explication simplifiée
          </Button>
          <Button 
            onClick={() => fetchMathHelp("answer")}
            loading={loading === "answer"}
            disabled={loading !== null || !isFormFilled}
          >
            Voir la réponse complète
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
            <div className="space-y-3">
              {history.map((item, idx) => (
                <div key={idx} className="bg-gray-50 p-4 rounded border">
                  <div className="font-medium mb-1">
                    {item.mode === "hint" && "Indice :"}
                    {item.mode === "explanation" && "Explication :"}
                    {item.mode === "answer" && "Réponse complète :"}
                  </div>
                  <div className="text-gray-700 whitespace-pre-line">{item.text}</div>
                </div>
              ))}
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};
