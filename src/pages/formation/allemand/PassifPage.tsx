import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from 'lucide-react';

const PassifPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center mb-6">
        <Link to="/formation/allemand" className="mr-4">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Le Passif en Allemand</h1>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Introduction au passif</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              En allemand, il existe deux formes principales du passif :
            </p>
            <ul className="list-disc list-inside space-y-2">
              <li>Le passif d'action (Vorgangspassiv) avec werden</li>
              <li>Le passif d'état (Zustandspassiv) avec sein</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Le passif d'action (Vorgangspassiv)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Le passif d'action se forme avec l'auxiliaire werden conjugué et le participe II du verbe.
              Il exprime une action en cours ou une transformation.
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Formation :</h3>
              <p className="mb-2">werden (conjugué) + Participe II</p>
              <h3 className="font-semibold mb-2">Exemples :</h3>
              <ul className="space-y-2">
                <li>Das Haus wird gebaut. (La maison est construite.)</li>
                <li>Der Brief wurde geschrieben. (La lettre a été écrite.)</li>
                <li>Die Tür wird geöffnet. (La porte est ouverte.)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Le passif d'état (Zustandspassiv)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Le passif d'état se forme avec l'auxiliaire sein conjugué et le participe II du verbe.
              Il exprime un état résultant d'une action terminée.
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Formation :</h3>
              <p className="mb-2">sein (conjugué) + Participe II</p>
              <h3 className="font-semibold mb-2">Exemples :</h3>
              <ul className="space-y-2">
                <li>Das Haus ist gebaut. (La maison est construite. - état final)</li>
                <li>Der Brief ist geschrieben. (La lettre est écrite. - c'est fait)</li>
                <li>Die Tür ist geöffnet. (La porte est ouverte. - état)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Le passif avec les verbes modaux</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Le passif peut être combiné avec des verbes modaux pour exprimer une possibilité, 
              une obligation ou une permission.
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Exemples :</h3>
              <ul className="space-y-2">
                <li>Der Text muss gelesen werden. (Le texte doit être lu.)</li>
                <li>Das Auto kann repariert werden. (La voiture peut être réparée.)</li>
                <li>Die Aufgabe soll gemacht werden. (Le devoir doit être fait.)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>L'agent au passif</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              En allemand, on distingue deux prépositions pour introduire l'agent au passif :
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">von + datif</h3>
                <p className="text-muted-foreground mb-2">Pour les personnes et les êtres animés</p>
                <div className="bg-muted p-4 rounded-lg">
                  <p>Das Buch wird von dem Autor geschrieben.</p>
                  <p className="text-sm text-muted-foreground">(Le livre est écrit par l'auteur.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">durch + accusatif</h3>
                <p className="text-muted-foreground mb-2">Pour les choses, les moyens, les causes</p>
                <div className="bg-muted p-4 rounded-lg">
                  <p>Die Tür wird durch den Wind geöffnet.</p>
                  <p className="text-sm text-muted-foreground">(La porte est ouverte par le vent.)</p>
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
              Mettez en pratique l'utilisation du passif avec ces exercices interactifs.
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

export default PassifPage; 