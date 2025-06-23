
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export default function MethodAllemandPage() {
  return (
    <div className="container max-w-4xl py-10 animate-fade-in space-y-8">
      <Card>
        <CardHeader>
          <CardTitle>Allemand – Choisissez votre méthodologie</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-4">
            <Link to="/methodologie/allemand/essai" className="w-full md:w-auto">
              <Button className="w-full md:w-48">Essai</Button>
            </Link>
            <Link to="/methodologie/allemand/synthese" className="w-full md:w-auto">
              <Button variant="outline" className="w-full md:w-48">Synthèse</Button>
            </Link>
          </div>
        </CardContent>
      </Card>

      <Separator />

      {/* Section Grammaire Allemande */}
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">Règles de grammaire allemande récurrentes à maîtriser</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          {/* 1. Construction des subordonnées */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-primary">1. CONSTRUCTION DES SUBORDONNÉES</h3>
            <div className="space-y-2">
              <h4 className="font-semibold">Règle principale</h4>
              <p>Le verbe conjugué se place en dernière position dans les propositions subordonnées.</p>
              
              <h4 className="font-semibold">Conjonctions de subordination courantes :</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>dass</strong> (que) : Ich weiß, dass er kommt.</li>
                <li><strong>weil/da</strong> (parce que) : Da ich Zeit habe, komme ich.</li>
                <li><strong>wenn</strong> (si/quand) : Wenn du kommst, freue ich mich.</li>
                <li><strong>als</strong> (quand - passé) : Als er jung war, spielte er Fußball.</li>
                <li><strong>obwohl</strong> (bien que) : Obwohl es regnet, gehen wir spazieren.</li>
              </ul>
              
              <h4 className="font-semibold">Erreurs fréquentes :</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>❌ Weil er kommt morgen → ✅ Weil er morgen kommt</li>
                <li>❌ Als wir ihn angerufen haben → ✅ Als wir ihn anriefen</li>
              </ul>
            </div>
          </div>

          {/* 2. Place du verbe */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-primary">2. PLACE DU VERBE (INVERSION)</h3>
            <div className="space-y-2">
              <h4 className="font-semibold">Règle</h4>
              <p>Quand un complément ouvre la phrase, le sujet passe après le verbe conjugué.</p>
              
              <h4 className="font-semibold">Exemples :</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Heute gehe ich ins Kino.</li>
                <li>In Deutschland wohnen viele Ausländer.</li>
                <li>Seit langem habe ich ihn nicht gesehen.</li>
              </ul>
              
              <h4 className="font-semibold">Erreurs fréquentes :</h4>
              <ul className="list-disc ml-6">
                <li>❌ Heute ich gehe → ✅ Heute gehe ich</li>
              </ul>
            </div>
          </div>

          {/* 3. Déclinaisons */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-primary">3. DÉCLINAISONS (CAS)</h3>
            <div className="space-y-2">
              <h4 className="font-semibold">Déclinaisons des articles</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-3 py-2">Cas</th>
                      <th className="border border-gray-300 px-3 py-2">Masculin</th>
                      <th className="border border-gray-300 px-3 py-2">Neutre</th>
                      <th className="border border-gray-300 px-3 py-2">Féminin</th>
                      <th className="border border-gray-300 px-3 py-2">Pluriel</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-semibold">Nominatif</td>
                      <td className="border border-gray-300 px-3 py-2">der/ein</td>
                      <td className="border border-gray-300 px-3 py-2">das/ein</td>
                      <td className="border border-gray-300 px-3 py-2">die/eine</td>
                      <td className="border border-gray-300 px-3 py-2">die/-</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-semibold">Accusatif</td>
                      <td className="border border-gray-300 px-3 py-2">den/einen</td>
                      <td className="border border-gray-300 px-3 py-2">das/ein</td>
                      <td className="border border-gray-300 px-3 py-2">die/eine</td>
                      <td className="border border-gray-300 px-3 py-2">die/-</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-semibold">Datif</td>
                      <td className="border border-gray-300 px-3 py-2">dem/einem</td>
                      <td className="border border-gray-300 px-3 py-2">dem/einem</td>
                      <td className="border border-gray-300 px-3 py-2">der/einer</td>
                      <td className="border border-gray-300 px-3 py-2">den/-n</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-semibold">Génitif</td>
                      <td className="border border-gray-300 px-3 py-2">des/eines</td>
                      <td className="border border-gray-300 px-3 py-2">des/eines</td>
                      <td className="border border-gray-300 px-3 py-2">der/einer</td>
                      <td className="border border-gray-300 px-3 py-2">der/-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h4 className="font-semibold">Verbes + Datif (fréquents) :</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>helfen</strong> : Ich helfe dem Mann</li>
                <li><strong>danken</strong> : Ich danke dir</li>
                <li><strong>folgen</strong> : Er folgt seinen Eltern</li>
                <li><strong>vertrauen</strong> : Wir vertrauen den Politikern</li>
                <li><strong>gefallen</strong> : Das gefällt mir</li>
              </ul>
              
              <h4 className="font-semibold">Erreurs fréquentes :</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>❌ Ich helfe den Mann → ✅ Ich helfe dem Mann</li>
                <li>❌ Das gefällt mich → ✅ Das gefällt mir</li>
              </ul>
            </div>
          </div>

          {/* 4. Prépositions et cas */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-primary">4. PRÉPOSITIONS ET CAS</h3>
            <div className="space-y-2">
              <h4 className="font-semibold">Prépositions + Accusatif</h4>
              <p>für, gegen, ohne, um, durch</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>für den Vater</li>
                <li>ohne mich</li>
              </ul>
              
              <h4 className="font-semibold">Prépositions + Datif</h4>
              <p>aus, bei, mit, nach, seit, von, zu</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>mit dem Auto</li>
                <li>bei den Eltern</li>
                <li>von einem Nachbarn</li>
              </ul>
              
              <h4 className="font-semibold">Prépositions mixtes (Acc./Dat.)</h4>
              <p>an, auf, hinter, in, neben, über, unter, vor, zwischen</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Mouvement (wohin?) → Accusatif : Ich gehe in die Stadt</li>
                <li>Position (wo?) → Datif : Ich wohne in der Stadt</li>
              </ul>
            </div>
          </div>

          {/* 5. Temps verbaux */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-primary">5. TEMPS VERBAUX</h3>
            <div className="space-y-2">
              <h4 className="font-semibold">Parfait vs Prétérit</h4>
              <p><strong>Parfait</strong> (langue parlée) : haben/sein + participe passé</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Ich habe gearbeitet</li>
                <li>Er ist gekommen</li>
              </ul>
              
              <p><strong>Prétérit</strong> (langue écrite, récit)</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Er war jung</li>
                <li>Sie ging zur Schule</li>
              </ul>
              
              <h4 className="font-semibold">Concordance des temps</h4>
              <p>Dans les subordonnées au passé :</p>
              <ul className="list-disc ml-6">
                <li>Als wir ihn anriefen, wartete er noch auf die Ergebnisse</li>
              </ul>
            </div>
          </div>

          {/* Sections suivantes condensées pour éviter un texte trop long */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-primary">6. INFINITIVES AVEC "ZU"</h3>
            <div className="space-y-2">
              <h4 className="font-semibold">Constructions courantes</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li><strong>versuchen zu</strong> : Ich versuche zu schlafen</li>
                <li><strong>beschließen zu</strong> : Er beschloss zu bleiben</li>
                <li><strong>um... zu</strong> (pour) : Ich komme, um zu helfen</li>
                <li><strong>ohne... zu</strong> (sans) : Er ging weg, ohne zu grüßen</li>
              </ul>
              <p><strong>Attention :</strong> Pas de zu avec les modaux !</p>
              <p>✅ Ich kann schwimmen (pas zu schwimmen)</p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-primary">7. SUBJONCTIF II (HYPOTHÈSE, POLITESSE)</h3>
            <div className="space-y-2">
              <h4 className="font-semibold">Formation</h4>
              <p><strong>Würde + infinitif</strong> (forme courante) :</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Ich würde gern kommen</li>
                <li>Wir würden das machen</li>
              </ul>
              
              <p><strong>Formes courtes</strong> (verbes fréquents) :</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>sein → wäre : Wenn ich reich wäre...</li>
                <li>haben → hätte : Wenn ich Zeit hätte...</li>
                <li>können → könnte : Du könntest kommen</li>
              </ul>
            </div>
          </div>

          {/* Erreurs fréquentes à éviter */}
          <div className="space-y-3 bg-red-50 p-4 rounded-lg">
            <h3 className="text-xl font-semibold text-red-700">ERREURS FRÉQUENTES À ÉVITER</h3>
            <ul className="list-disc ml-6 space-y-1 text-red-700">
              <li>Oubli de l'inversion après complément initial</li>
              <li>Mauvais cas après prépositions ou verbes</li>
              <li>Verbe mal placé en subordonnée</li>
              <li>Confusion temps (parfait/prétérit)</li>
              <li>Oubli du "zu" dans les infinitives</li>
              <li>Mauvaise concordance des temps</li>
              <li>Particules séparables mal placées</li>
              <li>Négation (nicht vs kein)</li>
              <li>Pronoms relatifs mal déclinés</li>
              <li>Ordre des mots dans les constructions complexes</li>
              <li>Déclinaison des adjectifs épithètes</li>
              <li>Régimes verbaux (prépositions fixes)</li>
              <li>Confusion passif d'action/état</li>
              <li>Double infinitif mal construit</li>
              <li>Subjonctif I/II dans le discours rapporté</li>
            </ul>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
