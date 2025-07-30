import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from 'lucide-react';

const DeclinaisonsPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center mb-6">
        <Link to="/formation/allemand" className="mr-4">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Les Déclinaisons de l'Adjectif</h1>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Introduction aux déclinaisons</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              En allemand, les adjectifs se déclinent selon trois modèles différents : 
              la déclinaison faible, la déclinaison mixte et la déclinaison forte.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Déclinaison faible (der/die/das + adj.)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              La déclinaison faible est utilisée après les articles définis (der, die, das) 
              et les déterminants qui se déclinent comme eux.
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Exemple :</h3>
              <ul className="space-y-2">
                <li>der kleine Hund (le petit chien)</li>
                <li>die schöne Blume (la belle fleur)</li>
                <li>das neue Auto (la nouvelle voiture)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Déclinaison mixte (ein/kein + adj.)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              La déclinaison mixte est utilisée après les articles indéfinis (ein, eine) 
              et leurs formes négatives (kein, keine).
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Exemple :</h3>
              <ul className="space-y-2">
                <li>ein kleiner Hund (un petit chien)</li>
                <li>eine schöne Blume (une belle fleur)</li>
                <li>kein neues Auto (pas de nouvelle voiture)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Déclinaison forte (adj. seul)</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              La déclinaison forte est utilisée quand il n'y a pas d'article 
              ou quand l'article ne porte pas la marque de la déclinaison.
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Exemple :</h3>
              <ul className="space-y-2">
                <li>kleiner Hund (petit chien)</li>
                <li>schöne Blume (belle fleur)</li>
                <li>neues Auto (nouvelle voiture)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Tableaux de déclinaison</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div>
                <h3 className="font-semibold mb-2">Déclinaison faible</h3>
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-muted">
                      <th className="border p-2">Cas</th>
                      <th className="border p-2">Masculin</th>
                      <th className="border p-2">Féminin</th>
                      <th className="border p-2">Neutre</th>
                      <th className="border p-2">Pluriel</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border p-2">Nominatif</td>
                      <td className="border p-2">-e</td>
                      <td className="border p-2">-e</td>
                      <td className="border p-2">-e</td>
                      <td className="border p-2">-en</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Accusatif</td>
                      <td className="border p-2">-en</td>
                      <td className="border p-2">-e</td>
                      <td className="border p-2">-e</td>
                      <td className="border p-2">-en</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Datif</td>
                      <td className="border p-2">-en</td>
                      <td className="border p-2">-en</td>
                      <td className="border p-2">-en</td>
                      <td className="border p-2">-en</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Génitif</td>
                      <td className="border p-2">-en</td>
                      <td className="border p-2">-en</td>
                      <td className="border p-2">-en</td>
                      <td className="border p-2">-en</td>
                    </tr>
                  </tbody>
                </table>
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
              Mettez en pratique les déclinaisons avec ces exercices interactifs.
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

export default DeclinaisonsPage; 