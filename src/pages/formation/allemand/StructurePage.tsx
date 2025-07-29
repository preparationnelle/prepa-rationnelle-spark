import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from 'lucide-react';

const StructurePage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center mb-6">
        <Link to="/formation/allemand" className="mr-4">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Structure de la Phrase</h1>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Les trois positions du verbe</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              En allemand, le verbe peut occuper trois positions différentes dans la phrase :
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Position 2 (V2)</h3>
                <p className="text-muted-foreground mb-2">Dans les phrases déclaratives principales</p>
                <div className="bg-muted p-4 rounded-lg">
                  <p>Ich <span className="text-primary">lese</span> ein Buch.</p>
                  <p className="text-sm text-muted-foreground">(Je lis un livre.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Position finale (Vf)</h3>
                <p className="text-muted-foreground mb-2">Dans les propositions subordonnées</p>
                <div className="bg-muted p-4 rounded-lg">
                  <p>Ich weiß, dass er ein Buch <span className="text-primary">liest</span>.</p>
                  <p className="text-sm text-muted-foreground">(Je sais qu'il lit un livre.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Position 1 (V1)</h3>
                <p className="text-muted-foreground mb-2">Dans les questions et les ordres</p>
                <div className="bg-muted p-4 rounded-lg">
                  <p><span className="text-primary">Liest</span> du ein Buch?</p>
                  <p className="text-sm text-muted-foreground">(Lis-tu un livre ?)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>La parenthèse verbale (Klammer)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              La parenthèse verbale est une caractéristique essentielle de la syntaxe allemande. 
              Elle est formée par le verbe conjugué et la partie invariable.
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Exemples :</h3>
              <ul className="space-y-2">
                <li>Ich <span className="text-primary">habe</span> das Buch <span className="text-primary">gelesen</span>.</li>
                <li>Er <span className="text-primary">steht</span> um 7 Uhr <span className="text-primary">auf</span>.</li>
                <li>Sie <span className="text-primary">wird</span> morgen <span className="text-primary">kommen</span>.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>L'ordre des compléments (T-L-M)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Les compléments suivent généralement l'ordre TeKaMoLo :
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Temporel (quand ?)</li>
              <li>Kausal (pourquoi ?)</li>
              <li>Modal (comment ?)</li>
              <li>Lokal (où ?)</li>
            </ul>
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Exemple :</h3>
              <p>Ich fahre <span className="text-primary">morgen</span> <span className="text-blue-500">wegen des Wetters</span> <span className="text-green-500">mit dem Bus</span> <span className="text-red-500">nach Berlin</span>.</p>
              <p className="text-sm text-muted-foreground">(Je vais demain à Berlin en bus à cause du temps.)</p>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>La négation avec "nicht"</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              La position de "nicht" dans la phrase dépend de ce qui est nié :
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Négation du verbe</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <p>Er <span className="text-primary">schläft nicht</span>.</p>
                  <p className="text-sm text-muted-foreground">(Il ne dort pas.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Négation d'un complément</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <p>Er fährt <span className="text-primary">nicht nach Berlin</span>.</p>
                  <p className="text-sm text-muted-foreground">(Il ne va pas à Berlin.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Négation avec "kein"</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <p>Er hat <span className="text-primary">kein</span> Auto.</p>
                  <p className="text-sm text-muted-foreground">(Il n'a pas de voiture.)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Exercices pratiques</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Mettez en pratique la structure de la phrase allemande avec ces exercices interactifs.
            </p>
            <Button className="w-full" disabled>
              <FileText className="h-4 w-4 mr-2" />
              Accéder aux exercices (Bientôt disponible)
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StructurePage; 