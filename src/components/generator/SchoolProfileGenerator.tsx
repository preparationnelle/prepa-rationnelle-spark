
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";
import { Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const SCHOOL_OPTIONS = [
  { slug: "escp", name: "ESCP Business School" },
  { slug: "essec", name: "ESSEC Business School" },
  { slug: "hec", name: "HEC Paris" },
  { slug: "emlyon", name: "EM Lyon" },
  { slug: "skema", name: "SKEMA" },
  { slug: "edhec", name: "EDHEC" },
  { slug: "audencia", name: "Audencia" },
  { slug: "gem", name: "Grenoble EM" },
  { slug: "kedge", name: "KEDGE" },
  { slug: "neoma", name: "NEOMA" },
];

type SchoolProfileData = { text?: string };

function downloadTextAsPDF(text: string, schoolName: string) {
  // Simple fallback: create a text file download; can be replaced by jsPDF if needed
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${schoolName
    .replace(/ /g, "_")
    .toLowerCase()}_fiche.txt`;
  link.click();
  setTimeout(() => URL.revokeObjectURL(url), 1500);
}

export const SchoolProfileGenerator: React.FC = () => {
  const [selected, setSelected] = useState<string>(SCHOOL_OPTIONS[0].slug);
  const [profile, setProfile] = useState<SchoolProfileData | null>(null);
  const [loading, setLoading] = useState(false);
  const [fromCache, setFromCache] = useState(false);
  const { toast } = useToast();
  const { currentUser } = useAuth();

  const handleGenerate = async () => {
    setLoading(true);
    setProfile(null);
    setFromCache(false);
    try {
      const res = await fetch(
        "/functions/v1/generate-school-profile",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            school_slug: selected,
            user_id: currentUser?.id,
            school_name: SCHOOL_OPTIONS.find((o) => o.slug === selected)?.name,
          }),
        }
      );
      const data = await res.json();
      if (data.error) throw new Error(data.error);
      setProfile(data.data);
      setFromCache(Boolean(data.cached));
      toast({ title: "Fiche générée !", description: data.cached ? "Fiche issue du cache." : "Nouvelle fiche générée." });
    } catch (e: any) {
      toast({ variant: "destructive", title: "Erreur", description: e?.message || "Erreur inconnue." });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-xl mx-auto border-0 shadow-lg bg-gradient-to-br from-white via-blue-50 to-purple-50">
      <CardHeader>
        <CardTitle className="flex flex-col items-start gap-2">
          Générateur de fiche personnalisée d'école
          <span className="font-normal text-base text-muted-foreground">
            Sélectionne une école puis génère ta fiche dynamique, prête à exploiter pour l'entretien.
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex flex-col gap-2">
          <label className="font-medium">École :</label>
          <select
            className="p-2 border border-border rounded bg-background"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
            disabled={loading}
          >
            {SCHOOL_OPTIONS.map((school) => (
              <option key={school.slug} value={school.slug}>
                {school.name}
              </option>
            ))}
          </select>
          <Button
            onClick={handleGenerate}
            className="mt-3"
            disabled={loading || !selected}
          >
            {loading ? "Génération…" : "Générer la fiche"}
          </Button>
        </div>
        {profile?.text && (
          <div className="rounded-lg border border-muted bg-card/30 p-4 whitespace-pre-line mt-4 max-h-96 overflow-y-auto">
            <div className="mb-2 flex items-center gap-2">
              <span className="text-xs text-muted-foreground">
                {fromCache ? "Fiche issue du cache" : "Nouvelle génération"}
              </span>
              <Button
                variant="outline"
                size="icon"
                className="ml-auto"
                onClick={() => downloadTextAsPDF(profile.text!, SCHOOL_OPTIONS.find((o) => o.slug === selected)?.name || selected)}
                aria-label="Exporter"
              >
                <Download className="w-4 h-4" />
              </Button>
            </div>
            <strong>Fiche générée :</strong>
            <div>{profile.text}</div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
