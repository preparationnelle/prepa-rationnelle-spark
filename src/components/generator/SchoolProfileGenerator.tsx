
import React, { useState } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/sonner";

export const SchoolProfileGenerator = () => {
  const [schoolName, setSchoolName] = useState("");
  const [schoolSlug, setSchoolSlug] = useState("");
  const [loading, setLoading] = useState(false);
  const [profile, setProfile] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleGenerate = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setProfile(null);
    if (!schoolName || !schoolSlug) {
      setError("Veuillez remplir le nom et le slug de l'école.");
      return;
    }
    setLoading(true);

    try {
      const user = supabase.auth.getUser
        ? (await supabase.auth.getUser()).data.user
        : null;
      const userId = user?.id || "anonymous";

      const { data, error: fnError } = await supabase.functions.invoke("generate-school-profile", {
        body: {
          school_name: schoolName,
          school_slug: schoolSlug,
          user_id: userId,
        },
      });

      if (fnError || data?.error) {
        setError(data?.error || "Une erreur est survenue");
        return;
      }
      setProfile(data.data?.text ? data.data.text : JSON.stringify(data.data));
      toast.success("Fiche générée avec succès");
    } catch (err: any) {
      setError(err.message || "Erreur inconnue");
    } finally {
      setLoading(false);
    }
  };

  return (
    <Card className="max-w-2xl mx-auto mb-10">
      <CardHeader>
        <CardTitle className="text-2xl mb-2">Générateur de fiche école IA</CardTitle>
        <CardDescription>
          Générez en quelques secondes une fiche synthétique et structurée pour préparer votre entretien : valeurs, assos, doubles diplômes, actus, etc.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleGenerate} className="space-y-4 mb-4">
          <div>
            <label className="font-medium">Nom de l'école</label>
            <Input
              placeholder="ex: HEC Paris"
              value={schoolName}
              onChange={e => setSchoolName(e.target.value)}
              disabled={loading}
              className="mt-1"
            />
          </div>
          <div>
            <label className="font-medium">Slug de l'école (ex: hec-paris)</label>
            <Input
              placeholder="ex: hec-paris"
              value={schoolSlug}
              onChange={e => setSchoolSlug(e.target.value)}
              disabled={loading}
              className="mt-1"
            />
          </div>
          <Button type="submit" disabled={loading} className="w-full">
            {loading ? "Génération en cours..." : "Générer la fiche"}
          </Button>
        </form>
        {error && (
          <div className="text-destructive text-sm my-3">{error}</div>
        )}
        {profile && (
          <div className="bg-muted rounded p-4 whitespace-pre-line text-sm border mt-4">
            {profile}
          </div>
        )}
      </CardContent>
    </Card>
  );
};
