import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText } from 'lucide-react';

const RecurrentsPage = () => {
  return (
    <div className="container mx-auto py-8 px-4">
      <div className="flex items-center mb-6">
        <Link to="/formation/allemand" className="mr-4">
          <Button variant="ghost" size="sm">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Retour
          </Button>
        </Link>
        <h1 className="text-3xl font-bold">Points de Grammaire Récurrents</h1>
      </div>

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Les constructions subordonnées</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Les constructions subordonnées les plus fréquentes aux concours :
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Propositions avec "dass"</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <p>Ich glaube, <span className="text-primary">dass</span> er kommt.</p>
                  <p className="text-sm text-muted-foreground">(Je crois qu'il vient.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Propositions avec "weil"</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <p>Ich bleibe zu Hause, <span className="text-primary">weil</span> es regnet.</p>
                  <p className="text-sm text-muted-foreground">(Je reste à la maison parce qu'il pleut.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Propositions avec "wenn"</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <p><span className="text-primary">Wenn</span> es regnet, bleibe ich zu Hause.</p>
                  <p className="text-sm text-muted-foreground">(Quand/Si il pleut, je reste à la maison.)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Les prépositions et leurs cas</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Prépositions + Accusatif</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="mb-2">durch, für, gegen, ohne, um</p>
                  <p>Ich gehe <span className="text-primary">durch den</span> Park.</p>
                  <p className="text-sm text-muted-foreground">(Je traverse le parc.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Prépositions + Datif</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="mb-2">aus, bei, mit, nach, seit, von, zu</p>
                  <p>Ich komme <span className="text-primary">aus der</span> Schule.</p>
                  <p className="text-sm text-muted-foreground">(Je viens de l'école.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Prépositions mixtes</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="mb-2">an, auf, hinter, in, neben, über, unter, vor, zwischen</p>
                  <p>Ich stelle die Lampe <span className="text-primary">auf den</span> Tisch. (ACC - mouvement)</p>
                  <p>Die Lampe steht <span className="text-primary">auf dem</span> Tisch. (DAT - position)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Les verbes à particule séparable</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Les verbes à particule séparable sont très fréquents en allemand. La particule se détache 
              du verbe dans les phrases principales au présent et au prétérit.
            </p>
            <div className="bg-muted p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Exemples :</h3>
              <ul className="space-y-2">
                <li>aufstehen → Ich <span className="text-primary">stehe</span> früh <span className="text-primary">auf</span>.</li>
                <li>ankommen → Der Zug <span className="text-primary">kommt</span> pünktlich <span className="text-primary">an</span>.</li>
                <li>mitmachen → Er <span className="text-primary">macht</span> gerne <span className="text-primary">mit</span>.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Les verbes de modalité</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground mb-4">
              Les verbes de modalité expriment une modalité (possibilité, obligation, etc.) 
              et sont suivis d'un infinitif en fin de phrase.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">können (pouvoir)</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <p>Ich <span className="text-primary">kann</span> gut Deutsch <span className="text-primary">sprechen</span>.</p>
                  <p className="text-sm text-muted-foreground">(Je peux bien parler allemand.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">müssen (devoir)</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <p>Er <span className="text-primary">muss</span> viel <span className="text-primary">arbeiten</span>.</p>
                  <p className="text-sm text-muted-foreground">(Il doit beaucoup travailler.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">wollen (vouloir)</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <p>Sie <span className="text-primary">will</span> nach Berlin <span className="text-primary">fahren</span>.</p>
                  <p className="text-sm text-muted-foreground">(Elle veut aller à Berlin.)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Les erreurs fréquentes à éviter</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Position du verbe</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-red-500">❌ Ich weiß wo er geht.</p>
                  <p className="text-green-500">✓ Ich weiß, wo er hingeht.</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Accord du verbe</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-red-500">❌ Die Leute ist nett.</p>
                  <p className="text-green-500">✓ Die Leute sind nett.</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Choix de l'auxiliaire</h3>
                <div className="bg-muted p-4 rounded-lg">
                  <p className="text-red-500">❌ Ich habe nach Berlin gefahren.</p>
                  <p className="text-green-500">✓ Ich bin nach Berlin gefahren.</p>
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
              Mettez en pratique ces points de grammaire avec des exercices interactifs.
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

export default RecurrentsPage; 