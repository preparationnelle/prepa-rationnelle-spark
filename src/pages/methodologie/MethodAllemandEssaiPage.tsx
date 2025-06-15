
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

export default function MethodAllemandEssaiPage() {
  return (
    <div className="container max-w-3xl py-10 animate-fade-in space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Allemand – Méthode Essai</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="mb-6 text-muted-foreground">
            Retrouvez prochainement ici la méthodologie complète pour réussir l’<b>essai</b> d’allemand en prépa ECG ! (Contenu à compléter)
          </p>
          {/* Ajoutez ici votre méthodologie d’essai, ou dites-moi ce que vous souhaitez afficher ! */}
        </CardContent>
      </Card>
    </div>
  );
}
