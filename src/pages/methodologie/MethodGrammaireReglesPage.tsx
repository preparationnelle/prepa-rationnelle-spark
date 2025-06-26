
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
        {/* 1. Construction des subordonnées */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-2xl text-orange-800">1. Construction des Subordonnées</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400 mb-4">
              <h4 className="font-semibold text-red-800 mb-2">⚠️ Règle principale</h4>
              <p className="text-red-700">
                Le verbe conjugué se place en dernière position dans les propositions subordonnées.
              </p>
            </div>

            <h4 className="font-semibold text-orange-700 mb-3">Conjonctions de subordination courantes :</h4>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="space-y-2">
                <p><strong>dass</strong> (que) : <em>Ich weiß, dass er kommt.</em></p>
                <p><strong>weil/da</strong> (parce que) : <em>Da ich Zeit habe, komme ich.</em></p>
                <p><strong>wenn</strong> (si/quand) : <em>Wenn du kommst, freue ich mich.</em></p>
              </div>
              <div className="space-y-2">
                <p><strong>als</strong> (quand - passé) : <em>Als er jung war, spielte er Fußball.</em></p>
                <p><strong>obwohl</strong> (bien que) : <em>Obwohl es regnet, gehen wir spazieren.</em></p>
              </div>
            </div>

            <div className="bg-red-50 p-4 rounded-lg">
              <h5 className="font-medium text-red-800 mb-2">❌ Erreurs fréquentes :</h5>
              <ul className="space-y-1 text-sm text-red-700">
                <li>❌ Weil er kommt morgen → ✅ Weil er morgen kommt</li>
                <li>❌ Als wir ihn angerufen haben → ✅ Als wir ihn anriefen</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* 2. Place du verbe (inversion) */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-2xl text-orange-800">2. Place du Verbe (Inversion)</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="bg-blue-50 p-4 rounded-lg mb-4">
              <h4 className="font-semibold text-blue-800 mb-2">Règle</h4>
              <p className="text-blue-700">
                Quand un complément ouvre la phrase, le sujet passe après le verbe conjugué.
              </p>
            </div>

            <h4 className="font-semibold text-orange-700 mb-3">Exemples :</h4>
            <ul className="space-y-1 mb-4">
              <li><em>Heute gehe ich ins Kino.</em></li>
              <li><em>In Deutschland wohnen viele Ausländer.</em></li>
              <li><em>Seit langem habe ich ihn nicht gesehen.</em></li>
            </ul>

            <div className="bg-red-50 p-4 rounded-lg">
              <h5 className="font-medium text-red-800 mb-2">❌ Erreurs fréquentes :</h5>
              <p className="text-sm text-red-700">❌ Heute ich gehe → ✅ Heute gehe ich</p>
            </div>
          </CardContent>
        </Card>

        {/* 3. Déclinaisons (cas) */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-2xl text-orange-800">3. Déclinaisons (Cas)</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <h4 className="font-semibold text-orange-700 mb-3">Déclinaisons des articles</h4>
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-orange-200">
                <thead>
                  <tr className="bg-orange-50">
                    <th className="border border-orange-200 p-3 text-left font-semibold">Cas</th>
                    <th className="border border-orange-200 p-3 text-left font-semibold">Masculin</th>
                    <th className="border border-orange-200 p-3 text-left font-semibold">Neutre</th>
                    <th className="border border-orange-200 p-3 text-left font-semibold">Féminin</th>
                    <th className="border border-orange-200 p-3 text-left font-semibold">Pluriel</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-orange-200 p-3 font-semibold">Nominatif</td>
                    <td className="border border-orange-200 p-3">der/ein</td>
                    <td className="border border-orange-200 p-3">das/ein</td>
                    <td className="border border-orange-200 p-3">die/eine</td>
                    <td className="border border-orange-200 p-3">die/-</td>
                  </tr>
                  <tr className="bg-orange-25">
                    <td className="border border-orange-200 p-3 font-semibold">Accusatif</td>
                    <td className="border border-orange-200 p-3">den/einen</td>
                    <td className="border border-orange-200 p-3">das/ein</td>
                    <td className="border border-orange-200 p-3">die/eine</td>
                    <td className="border border-orange-200 p-3">die/-</td>
                  </tr>
                  <tr>
                    <td className="border border-orange-200 p-3 font-semibold">Datif</td>
                    <td className="border border-orange-200 p-3">dem/einem</td>
                    <td className="border border-orange-200 p-3">dem/einem</td>
                    <td className="border border-orange-200 p-3">der/einer</td>
                    <td className="border border-orange-200 p-3">den/-n</td>
                  </tr>
                  <tr className="bg-orange-25">
                    <td className="border border-orange-200 p-3 font-semibold">Génitif</td>
                    <td className="border border-orange-200 p-3">des/eines</td>
                    <td className="border border-orange-200 p-3">des/eines</td>
                    <td className="border border-orange-200 p-3">der/einer</td>
                    <td className="border border-orange-200 p-3">der/-</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h4 className="font-semibold text-orange-700 mb-3">Verbes + Datif (fréquents) :</h4>
            <ul className="space-y-1 mb-4">
              <li><strong>helfen</strong> : <em>Ich helfe dem Mann</em></li>
              <li><strong>danken</strong> : <em>Ich danke dir</em></li>
              <li><strong>folgen</strong> : <em>Er folgt seinen Eltern</em></li>
              <li><strong>vertrauen</strong> : <em>Wir vertrauen den Politikern</em></li>
              <li><strong>gefallen</strong> : <em>Das gefällt mir</em></li>
            </ul>

            <div className="bg-red-50 p-4 rounded-lg">
              <h5 className="font-medium text-red-800 mb-2">❌ Erreurs fréquentes :</h5>
              <ul className="space-y-1 text-sm text-red-700">
                <li>❌ Ich helfe den Mann → ✅ Ich helfe dem Mann</li>
                <li>❌ Das gefällt mich → ✅ Das gefällt mir</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* 4. Prépositions et cas */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-2xl text-orange-800">4. Prépositions et Cas</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Prépositions + Accusatif</h4>
                <p className="mb-2"><strong>für, gegen, ohne, um, durch</strong></p>
                <ul className="text-sm space-y-1">
                  <li><em>für den Vater</em></li>
                  <li><em>ohne mich</em></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Prépositions + Datif</h4>
                <p className="mb-2"><strong>aus, bei, mit, nach, seit, von, zu</strong></p>
                <ul className="text-sm space-y-1">
                  <li><em>mit dem Auto</em></li>
                  <li><em>bei den Eltern</em></li>
                  <li><em>von einem Nachbarn</em></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Prépositions mixtes</h4>
                <p className="mb-2"><strong>an, auf, hinter, in, neben, über, unter, vor, zwischen</strong></p>
                <ul className="text-sm space-y-1">
                  <li><strong>Mouvement</strong> → <em>Ich gehe in die Stadt</em></li>
                  <li><strong>Position</strong> → <em>Ich wohne in der Stadt</em></li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 5. Temps verbaux */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-2xl text-orange-800">5. Temps Verbaux</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Parfait (langue parlée)</h4>
                <p className="mb-2"><strong>haben/sein + participe passé</strong></p>
                <ul className="text-sm space-y-1">
                  <li><em>Ich habe gearbeitet</em></li>
                  <li><em>Er ist gekommen</em></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Prétérit (langue écrite)</h4>
                <ul className="text-sm space-y-1">
                  <li><em>Er war jung</em></li>
                  <li><em>Sie ging zur Schule</em></li>
                </ul>
              </div>
            </div>

            <div className="bg-yellow-50 p-4 rounded-lg">
              <h4 className="font-semibold text-yellow-800 mb-2">Concordance des temps</h4>
              <p className="text-yellow-700">Dans les subordonnées au passé :</p>
              <p className="text-sm"><em>Als wir ihn anriefen, wartete er noch auf die Ergebnisse</em></p>
            </div>
          </CardContent>
        </Card>

        {/* 6. Infinitives avec "zu" */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-2xl text-orange-800">6. Infinitives avec "ZU"</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <h4 className="font-semibold text-orange-700 mb-3">Constructions courantes</h4>
            <ul className="space-y-2 mb-4">
              <li><strong>versuchen zu</strong> : <em>Ich versuche zu schlafen</em></li>
              <li><strong>beschließen zu</strong> : <em>Er beschloss zu bleiben</em></li>
              <li><strong>um... zu</strong> (pour) : <em>Ich komme, um zu helfen</em></li>
              <li><strong>ohne... zu</strong> (sans) : <em>Er ging weg, ohne zu grüßen</em></li>
            </ul>

            <div className="bg-red-50 p-4 rounded-lg">
              <h5 className="font-medium text-red-800 mb-2">⚠️ Attention</h5>
              <p className="text-red-700">Pas de zu avec les modaux !</p>
              <p className="text-sm">✅ Ich kann schwimmen (pas zu schwimmen)</p>
            </div>
          </CardContent>
        </Card>

        {/* 7. Subjonctif II */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-2xl text-orange-800">7. Subjonctif II (Hypothèse, Politesse)</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Formation</h4>
                <p className="mb-2"><strong>Würde + infinitif</strong> (forme courante) :</p>
                <ul className="text-sm space-y-1">
                  <li><em>Ich würde gern kommen</em></li>
                  <li><em>Wir würden das machen</em></li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-orange-700 mb-3">Formes courtes</h4>
                <ul className="text-sm space-y-1">
                  <li><strong>sein → wäre</strong> : <em>Wenn ich reich wäre...</em></li>
                  <li><strong>haben → hätte</strong> : <em>Wenn ich Zeit hätte...</em></li>
                  <li><strong>können → könnte</strong> : <em>Du könntest kommen</em></li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 8. Verbes à particules */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-2xl text-orange-800">8. Verbes à Particules</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <h4 className="font-semibold text-orange-700 mb-3">Particules séparables</h4>
            <div className="space-y-4">
              <div>
                <p><strong>Position</strong> : En fin de phrase principale</p>
                <ul className="text-sm space-y-1 ml-4">
                  <li><em>Er steht um 7 Uhr auf</em></li>
                  <li><em>Sie gibt das Buch zurück</em></li>
                </ul>
              </div>

              <div>
                <p><strong>Au parfait</strong> : Particule + ge + verbe</p>
                <ul className="text-sm space-y-1 ml-4">
                  <li><em>aufstehen → aufgestanden</em></li>
                  <li><em>zurückgeben → zurückgegeben</em></li>
                </ul>
              </div>

              <div>
                <p><strong>En subordonnée</strong> : Particule attachée</p>
                <p className="text-sm ml-4"><em>Ich weiß, dass er früh aufsteht</em></p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* 9. Pronoms relatifs */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-2xl text-orange-800">9. Pronoms Relatifs</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <h4 className="font-semibold text-orange-700 mb-3">Déclinaison selon la fonction</h4>
            <ul className="space-y-2">
              <li><strong>Sujet</strong> : <em>der Mann, der dort steht</em></li>
              <li><strong>COD</strong> : <em>das Buch, das ich lese</em></li>
              <li><strong>COI</strong> : <em>die Frau, der ich helfe</em></li>
              <li><strong>Génitif</strong> : <em>der Mann, dessen Auto kaputt ist</em></li>
            </ul>
          </CardContent>
        </Card>

        {/* 10. Comparatifs et superlatifs */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-2xl text-orange-800">10. Comparatifs et Superlatifs</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <h4 className="font-semibold text-orange-700 mb-3">Structures avec "je... desto"</h4>
            <p className="mb-2"><strong>Je + comparatif + verbe, desto + comparatif + verbe</strong></p>
            <ul className="space-y-2">
              <li><em>Je älter er wird, desto weiser wird er</em></li>
              <li><em>Je mehr ich lerne, desto besser werden meine Noten</em></li>
            </ul>
          </CardContent>
        </Card>

        {/* 11. Négation */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-2xl text-orange-800">11. Négation</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-orange-700 mb-3">"nicht" (négation générale)</h4>
                <p className="mb-2">Après COD défini</p>
                <p className="text-sm"><em>Ich kenne ihn nicht</em></p>
              </div>

              <div>
                <h4 className="font-semibold text-orange-700 mb-3">"kein" (négation nominale)</h4>
                <p className="mb-2">Devant noms indéfinis</p>
                <ul className="text-sm space-y-1">
                  <li><em>Ich habe keine Zeit</em></li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Erreurs fréquentes à éviter */}
        <Card className="border-2 border-red-300 bg-red-50">
          <CardHeader className="bg-gradient-to-r from-red-100 to-red-200">
            <CardTitle className="text-2xl text-red-800">❌ Erreurs Fréquentes à Éviter</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-red-700">
                <li>• Oubli de l'inversion après complément initial</li>
                <li>• Mauvais cas après prépositions ou verbes</li>
                <li>• Verbe mal placé en subordonnée</li>
                <li>• Confusion temps (parfait/prétérit)</li>
                <li>• Oubli du "zu" dans les infinitives</li>
                <li>• Mauvaise concordance des temps</li>
              </ul>
              <ul className="space-y-2 text-red-700">
                <li>• Particules séparables mal placées</li>
                <li>• Négation (nicht vs kein)</li>
                <li>• Pronoms relatifs mal déclinés</li>
                <li>• Ordre des mots dans les constructions complexes</li>
                <li>• Déclinaison des adjectifs épithètes</li>
                <li>• Régimes verbaux (prépositions fixes)</li>
              </ul>
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
