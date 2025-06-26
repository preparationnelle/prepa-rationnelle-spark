
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { BookOpen } from "lucide-react";

export const MethodGrammaireReglesPage = () => {
  return (
    <div className="container max-w-5xl py-10 animate-fade-in bg-[#FFF9ED] min-h-screen">
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-br from-[#ff9100] to-orange-600 rounded-xl text-white shadow-lg">
            <BookOpen className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-extrabold text-[#ff9100]">
            Règles de Grammaire Récurrentes en Allemand
          </h1>
        </div>
        <p className="text-xl text-gray-600">
          Les règles essentielles à maîtriser absolument
        </p>
      </div>
      
      <Card className="mb-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
        <CardContent className="p-6">
          <p className="text-lg font-semibold mb-2">Les règles essentielles à maîtriser</p>
          <p className="text-muted-foreground">
            Ces règles reviennent constamment dans les exercices et compositions. Une maîtrise parfaite est indispensable.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {/* Position du verbe */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="flex items-center gap-2 text-2xl text-orange-800">
              1. Position du verbe conjugué
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                <h4 className="font-semibold text-red-800 mb-2">⚠️ Règle fondamentale</h4>
                <p className="text-red-700">
                  En allemand, le verbe conjugué occupe TOUJOURS la 2ème position dans une phrase principale.
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-medium text-green-800 mb-2">✅ Correct</h5>
                  <ul className="space-y-1 text-sm text-green-700">
                    <li><strong>Ich gehe</strong> morgen ins Kino.</li>
                    <li><strong>Morgen gehe ich</strong> ins Kino.</li>
                    <li><strong>Ins Kino gehe ich</strong> morgen.</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h5 className="font-medium text-red-800 mb-2">❌ Incorrect</h5>
                  <ul className="space-y-1 text-sm text-red-700">
                    <li>Ich morgen gehe ins Kino.</li>
                    <li>Morgen ich gehe ins Kino.</li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Négation */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="flex items-center gap-2 text-2xl text-orange-800">
              2. La négation avec "nicht" et "kein"
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Règle "kein"</h4>
                <p className="text-blue-700 mb-2">
                  Utiliser <strong>"kein"</strong> pour nier un nom précédé d'un article indéfini ou sans article.
                </p>
                <ul className="text-sm text-blue-600 space-y-1">
                  <li>• Ich habe <strong>einen Hund</strong> → Ich habe <strong>keinen Hund</strong></li>
                  <li>• Er trinkt <strong>Bier</strong> → Er trinkt <strong>kein Bier</strong></li>
                </ul>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Règle "nicht"</h4>
                <p className="text-yellow-700 mb-2">
                  Utiliser <strong>"nicht"</strong> dans tous les autres cas.
                </p>
                <ul className="text-sm text-yellow-600 space-y-1">
                  <li>• Ich kenne <strong>den Mann</strong> → Ich kenne <strong>den Mann nicht</strong></li>
                  <li>• Das ist <strong>gut</strong> → Das ist <strong>nicht gut</strong></li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Trennbare Verben */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="flex items-center gap-2 text-2xl text-orange-800">
              3. Les verbes à particule séparable
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Les particules séparables se détachent du verbe et se placent en fin de phrase.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">Exemples courants :</h5>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium text-sm mb-1">ankommen (arriver)</p>
                    <p className="text-sm text-muted-foreground">Der Zug <strong>kommt</strong> um 8 Uhr <strong>an</strong>.</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-1">aufstehen (se lever)</p>
                    <p className="text-sm text-muted-foreground">Ich <strong>stehe</strong> früh <strong>auf</strong>.</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-1">einladen (inviter)</p>
                    <p className="text-sm text-muted-foreground">Er <strong>lädt</strong> uns <strong>ein</strong>.</p>
                  </div>
                  <div>
                    <p className="font-medium text-sm mb-1">fernsehen (regarder la TV)</p>
                    <p className="text-sm text-muted-foreground">Wir <strong>sehen</strong> abends <strong>fern</strong>.</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Subordonnées */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="flex items-center gap-2 text-2xl text-orange-800">
              4. Les propositions subordonnées
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                <h4 className="font-semibold text-red-800 mb-2">⚠️ Règle cruciale</h4>
                <p className="text-red-700">
                  Dans une subordonnée, le verbe conjugué va TOUJOURS à la fin !
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">Conjonctions courantes :</h5>
                <div className="grid md:grid-cols-3 gap-2 text-sm">
                  <div>• dass (que)</div>
                  <div>• weil (parce que)</div>
                  <div>• wenn (si/quand)</div>
                  <div>• als (quand - passé)</div>
                  <div>• obwohl (bien que)</div>
                  <div>• damit (pour que)</div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">Exemples :</h5>
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong>Ich weiß, dass er morgen kommt.</strong><br />
                    <span className="text-muted-foreground">(Je sais qu'il vient demain.)</span>
                  </li>
                  <li>
                    <strong>Wir bleiben zu Hause, weil es regnet.</strong><br />
                    <span className="text-muted-foreground">(Nous restons à la maison parce qu'il pleut.)</span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cas et déclinaisons */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="flex items-center gap-2 text-2xl text-orange-800">
              5. Les cas (Nominatif, Accusatif, Datif, Génitif)
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-medium text-green-800 mb-2">Nominatif - Le sujet</h5>
                  <p className="text-sm text-green-700">
                    <strong>Der Mann</strong> kommt.<br />
                    <em>(L'homme vient.)</em>
                  </p>
                </div>

                <div className="bg-blue-50 p-4 rounded-lg">
                  <h5 className="font-medium text-blue-800 mb-2">Accusatif - Le COD</h5>
                  <p className="text-sm text-blue-700">
                    Ich sehe <strong>den Mann</strong>.<br />
                    <em>(Je vois l'homme.)</em>
                  </p>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-medium text-yellow-800 mb-2">Datif - Le COI</h5>
                  <p className="text-sm text-yellow-700">
                    Ich helfe <strong>dem Mann</strong>.<br />
                    <em>(J'aide l'homme.)</em>
                  </p>
                </div>

                <div className="bg-purple-50 p-4 rounded-lg">
                  <h5 className="font-medium text-purple-800 mb-2">Génitif - Le complément du nom</h5>
                  <p className="text-sm text-purple-700">
                    Das Auto <strong>des Mannes</strong>.<br />
                    <em>(La voiture de l'homme.)</em>
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Verbes de modalité */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="flex items-center gap-2 text-2xl text-orange-800">
              6. Les verbes de modalité
            </CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-4">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-2 text-left">Verbe</th>
                      <th className="border border-gray-300 p-2 text-left">Sens</th>
                      <th className="border border-gray-300 p-2 text-left">Exemple</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2">können</td>
                      <td className="border border-gray-300 p-2">pouvoir (capacité)</td>
                      <td className="border border-gray-300 p-2">Ich kann schwimmen.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">müssen</td>
                      <td className="border border-gray-300 p-2">devoir (obligation)</td>
                      <td className="border border-gray-300 p-2">Ich muss arbeiten.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">dürfen</td>
                      <td className="border border-gray-300 p-2">avoir le droit</td>
                      <td className="border border-gray-300 p-2">Darf ich rauchen?</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">sollen</td>
                      <td className="border border-gray-300 p-2">devoir (conseil)</td>
                      <td className="border border-gray-300 p-2">Du sollst kommen.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">wollen</td>
                      <td className="border border-gray-300 p-2">vouloir</td>
                      <td className="border border-gray-300 p-2">Ich will schlafen.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2">mögen</td>
                      <td className="border border-gray-300 p-2">aimer bien</td>
                      <td className="border border-gray-300 p-2">Ich mag Kaffee.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conseils pratiques */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-2xl text-orange-800">💡 Conseils de révision</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">✅ Méthode efficace</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Réviser 15 min par jour minimum</li>
                  <li>• Faire des phrases d'exemple</li>
                  <li>• S'entraîner à l'oral</li>
                  <li>• Corriger systématiquement ses erreurs</li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">❌ Erreurs courantes</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Négliger la position du verbe</li>
                  <li>• Confondre nicht et kein</li>
                  <li>• Oublier les particules séparables</li>
                  <li>• Mélanger les cas</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 text-center">
        <Link to="/methodologie/grammaire">
          <Button variant="outline" className="border-[#ff9100] text-[#ff9100] hover:bg-[#ff9100] hover:text-white">
            ← Retour aux fiches de grammaire
          </Button>
        </Link>
      </div>
    </div>
  );
};
