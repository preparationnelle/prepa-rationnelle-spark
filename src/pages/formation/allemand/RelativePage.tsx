import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from 'lucide-react';

const RelativePage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center mb-6">
        <Link to="/formation/allemand" className="mr-4">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">La Proposition Relative</h1>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Introduction aux propositions relatives</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Les propositions relatives sont des propositions subordonnées qui servent à préciser 
              ou à décrire un élément de la proposition principale. Elles sont introduites par un pronom relatif.
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Les pronoms relatifs</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4">
              <div>
                <h3 className="font-semibold mb-2">Tableau des pronoms relatifs</h3>
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
                      <td className="border p-2">der</td>
                      <td className="border p-2">die</td>
                      <td className="border p-2">das</td>
                      <td className="border p-2">die</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Accusatif</td>
                      <td className="border p-2">den</td>
                      <td className="border p-2">die</td>
                      <td className="border p-2">das</td>
                      <td className="border p-2">die</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Datif</td>
                      <td className="border p-2">dem</td>
                      <td className="border p-2">der</td>
                      <td className="border p-2">dem</td>
                      <td className="border p-2">denen</td>
                    </tr>
                    <tr>
                      <td className="border p-2">Génitif</td>
                      <td className="border p-2">dessen</td>
                      <td className="border p-2">deren</td>
                      <td className="border p-2">dessen</td>
                      <td className="border p-2">deren</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Choix du pronom relatif</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Le choix du pronom relatif dépend de deux critères :
            </p>
            <ul className="list-disc list-inside space-y-2 mb-4">
              <li>Le genre et le nombre de l'antécédent (l'élément décrit)</li>
              <li>La fonction du pronom relatif dans la subordonnée</li>
            </ul>
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Exemples :</h3>
              <ul className="space-y-2">
                <li>Der Mann, <span className="text-primary">der</span> dort steht... (L'homme qui est là...)</li>
                <li>Die Frau, <span className="text-primary">die</span> ich sehe... (La femme que je vois...)</li>
                <li>Das Kind, <span className="text-primary">dem</span> ich helfe... (L'enfant que j'aide...)</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>La traduction de "dont"</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Le pronom relatif "dont" en français peut se traduire de différentes manières en allemand :
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Exemples :</h3>
              <ul className="space-y-2">
                <li>dessen/deren (génitif) : L'homme dont je connais le fils</li>
                <li>über + acc : Le film dont je parle</li>
                <li>von + dat : La personne dont j'ai besoin</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Les relatives participiales</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              En allemand, il est possible de transformer certaines propositions relatives 
              en constructions participiales, ce qui rend le style plus élégant.
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Exemple :</h3>
              <ul className="space-y-2">
                <li>Der Mann, der dort steht → Der dort stehende Mann</li>
                <li>Das Buch, das auf dem Tisch liegt → Das auf dem Tisch liegende Buch</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Exercices pratiques</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Mettez en pratique l'utilisation des propositions relatives avec ces exercices interactifs.
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

export default RelativePage; 