
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import { useAuth } from "@/context/AuthContext";
import { Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

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
  const blob = new Blob([text], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `${schoolName.replace(/ /g, "_").toLowerCase()}_fiche.txt`;
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

  // Champs du questionnaire
  const [projetPro, setProjetPro] = useState("");
  const [interets, setInterets] = useState("");
  const [international, setInternational] = useState("");
  const [infosComplementaires, setInfosComplementaires] = useState("");

  const handleGenerate = async () => {
    if (!currentUser?.id) {
      toast({
        variant: "destructive",
        title: "Erreur",
        description: "Vous devez être connecté pour générer une fiche.",
      });
      return;
    }

    console.log("Début génération pour user:", currentUser.id);

    setLoading(true);
    setProfile(null);
    setFromCache(false);

    try {
      const requestBody = {
        school_slug: selected,
        user_id: currentUser.id,
        school_name: SCHOOL_OPTIONS.find((o) => o.slug === selected)?.name,
        user_infos: {
          projetPro,
          interets,
          international,
          infosComplementaires,
        }
      };

      console.log("Envoi de la requête:", requestBody);

      const response = await fetch("/functions/v1/generate-school-profile", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.VITE_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhhbWthcGhlbHNoc2F2Y2FjYmR5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDYwODc0MDQsImV4cCI6MjA2MTY2MzQwNH0.7G6hKGrmG_JmV_DZKyYCTmsS-soI0tofSKHA4fB8jAY'}`
        },
        body: JSON.stringify(requestBody),
      });

      console.log("Statut de réponse:", response.status);

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Erreur HTTP:", errorText);
        throw new Error(`Erreur ${response.status}: ${errorText}`);
      }

      const data = await response.json();
      console.log("Données reçues:", data);

      if (data.error) {
        throw new Error(data.error);
      }

      setProfile(data.data);
      setFromCache(Boolean(data.cached));
      
      toast({ 
        title: "Fiche générée !", 
        description: data.cached ? "Fiche issue du cache." : "Nouvelle fiche générée." 
      });

    } catch (error: any) {
      console.error("Erreur lors de la génération:", error);
      toast({ 
        variant: "destructive", 
        title: "Erreur", 
        description: error?.message || "Erreur inconnue lors de la génération." 
      });
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
            Sélectionne une école puis remplis ces quelques infos pour personnaliser ta fiche dynamique, prête à exploiter pour l'entretien.
          </span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="mb-4 flex flex-col gap-4">
          <label className="font-medium">École :</label>
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

          <div className="flex flex-col gap-2 bg-white/40 border border-border rounded p-4">
            <label className="font-medium" htmlFor="projetpro">Projet professionnel :</label>
            <Input
              id="projetpro"
              autoComplete="off"
              placeholder="Quel métier, secteur, rêve pro…"
              value={projetPro}
              onChange={(e) => setProjetPro(e.target.value)}
              disabled={loading}
            />
            <label className="font-medium" htmlFor="interets">Centres d'intérêt :</label>
            <Textarea
              id="interets"
              autoComplete="off"
              placeholder="Sports, assos, passions, engagement…"
              value={interets}
              onChange={(e) => setInterets(e.target.value)}
              rows={2}
              disabled={loading}
            />
            <label className="font-medium" htmlFor="international">International :</label>
            <Input
              id="international"
              autoComplete="off"
              placeholder="Séjours, échanges, langues étudiées, expériences à l'étranger…"
              value={international}
              onChange={(e) => setInternational(e.target.value)}
              disabled={loading}
            />
            <label className="font-medium" htmlFor="infoscomplementaires">Informations complémentaires :</label>
            <Textarea
              id="infoscomplementaires"
              autoComplete="off"
              placeholder="Tout autre élément pertinent pour affiner la recherche : association, passion, expérience, double-cursus…"
              value={infosComplementaires}
              onChange={(e) => setInfosComplementaires(e.target.value)}
              rows={2}
              disabled={loading}
            />
          </div>

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
                onClick={() =>
                  downloadTextAsPDF(
                    profile.text!,
                    SCHOOL_OPTIONS.find((o) => o.slug === selected)?.name || selected
                  )
                }
                aria-label="Exporter"
              >
                <Download className="w-4 h-4" />
              </Button>
            </div>
            <strong>Fiche générée :</strong>
            <div>{profile.text}</div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};
