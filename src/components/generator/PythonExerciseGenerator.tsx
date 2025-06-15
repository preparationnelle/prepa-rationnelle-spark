
import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { BookOpen, Sparkles } from "lucide-react";

type Difficulty = "Débutant" | "Intermédiaire" | "Avancé";
type Domain =
  | "Algèbre linéaire"
  | "Structures de données"
  | "Algorithmes"
  | "Manipulation de texte"
  | "Fichiers"
  | "Matrice"
  | "Autre";

// Structure d'un exercice généré :
interface PythonExercise {
  statement: string;
  template: string;
  hint?: string;
  solution?: string;
}

const difficulties: Difficulty[] = ["Débutant", "Intermédiaire", "Avancé"];
const domains: Domain[] = [
  "Matrice",
  "Algèbre linéaire",
  "Structures de données",
  "Algorithmes",
  "Manipulation de texte",
  "Fichiers",
  "Autre"
];

export const PythonExerciseGenerator: React.FC = () => {
  const [difficulty, setDifficulty] = useState<Difficulty>("Débutant");
  const [domain, setDomain] = useState<Domain>("Matrice");
  const [loading, setLoading] = useState(false);
  const [exercise, setExercise] = useState<PythonExercise | null>(null);
  const [userCode, setUserCode] = useState("");
  const [showHint, setShowHint] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Pour la démonstration, on mock l’API ici (branche facile par la suite sur edge function, voir doc Lovable !)
  async function fetchExercise() {
    setLoading(true);
    setShowHint(false);
    setError(null);
    setExercise(null);
    setUserCode("");
    try {
      // Simule une vraie réponse :
      await new Promise(res => setTimeout(res, 900));
      setExercise({
        statement:
          "Complète la fonction suivante pour déterminer si une matrice carrée (listes de listes d'entiers) est symétrique.",
        template:
          "def est_symetrique(matrice):\n    # TODO: compléter la fonction\n    pass",
        hint:
          "Indice : une matrice est symétrique si pour tout i, j on a matrice[i][j] == matrice[j][i]. Parcours la moitié supérieure ou inférieure.",
        solution:
          "def est_symetrique(matrice):\n    n = len(matrice)\n    for i in range(n):\n        for j in range(i, n):\n            if matrice[i][j] != matrice[j][i]:\n                return False\n    return True"
      });
    } catch (e) {
      setError("Erreur lors de la génération de l'exercice");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center py-6">
      <Card className="w-full max-w-2xl rounded-xl shadow-lg border-0 bg-gradient-to-br from-[#222c3b] via-[#2f3f5e] to-[#16655b] text-white">
        <CardHeader className="rounded-t-xl px-6 py-6 bg-gradient-to-r from-[#103454] via-[#274c7f] to-[#25b2ad] border-b-0">
          <CardTitle className="flex items-center gap-3 text-xl font-bold tracking-tight">
            <BookOpen className="h-6 w-6 text-white" /> Exercices Python IA
          </CardTitle>
          <CardDescription className="text-teal-100/90 mt-1 font-medium">
            Génère des exercices pratiques et écris tes fonctions Python directement dans la zone éditeur !
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 px-6 py-6">
          <div className="flex flex-col md:flex-row gap-3 md:items-end">
            <div>
              <label className="block font-semibold mb-1 text-teal-200 text-base">Niveau</label>
              <select
                value={difficulty}
                onChange={e => setDifficulty(e.target.value as Difficulty)}
                className="bg-[#19314a] border-0 rounded px-3 py-2 min-w-[140px] text-white shadow focus:ring-2 focus:ring-primary"
              >
                {difficulties.map(d => (
                  <option key={d} value={d}>{d}</option>
                ))}
              </select>
            </div>
            <div>
              <label className="block font-semibold mb-1 text-teal-200 text-base">Domaine</label>
              <select
                value={domain}
                onChange={e => setDomain(e.target.value as Domain)}
                className="bg-[#19314a] border-0 rounded px-3 py-2 min-w-[170px] text-white shadow focus:ring-2 focus:ring-primary"
              >
                {domains.map(dom => (
                  <option key={dom} value={dom}>{dom}</option>
                ))}
              </select>
            </div>
            <Button
              className="bg-gradient-to-r from-[#14d0c8] to-[#27b8ac] text-black font-semibold px-6 py-2 rounded-lg shadow hover:from-[#0abfb1] hover:to-[#0abfb1] hover:text-white transition"
              onClick={fetchExercise}
              disabled={loading}
            >
              {loading ? (
                <>
                  <Sparkles className="animate-spin mr-2" /> Génération...
                </>
              ) : (
                <>
                  <Sparkles className="mr-2" /> Générer un exercice
                </>
              )}
            </Button>
          </div>
          {error && (
            <div className="bg-red-200 text-red-800 p-2 rounded">Erreur : {error}</div>
          )}
          {exercise && (
            <div className="space-y-5">
              <div className="bg-[#162c3e]/70 rounded-xl p-5 shadow-inner">
                <div className="text-lg font-bold mb-2">Énoncé</div>
                <div className="whitespace-pre-line">{exercise.statement}</div>
              </div>
              <div>
                <div className="font-semibold text-[#c9ffff]/80 mb-1">Code à compléter :</div>
                <Textarea
                  className="min-h-[125px] bg-[#182b3a] text-[#e2f2ff] font-mono text-base border-0 px-4 py-2 rounded-xl leading-snug shadow-md placeholder:text-[#51dbf3]/80"
                  value={userCode || exercise.template}
                  onChange={e => setUserCode(e.target.value)}
                  spellCheck={false}
                  autoComplete="off"
                />
              </div>
              <div className="flex items-center gap-3 mt-2">
                <Button variant="outline" className="px-3 py-1" onClick={() => setShowHint(s => !s)}>
                  {showHint ? "Cacher l'indice" : "Indice"}
                </Button>
                <Button
                  variant="ghost"
                  className="px-3 py-1"
                  onClick={() => exercise.solution && window.alert(exercise.solution)}
                >
                  Voir la solution
                </Button>
              </div>
              {showHint && exercise.hint && (
                <div className="bg-[#13385d] rounded px-4 py-2 mt-2 text-cyan-200">{exercise.hint}</div>
              )}
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};
