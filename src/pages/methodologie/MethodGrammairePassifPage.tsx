
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

export default function MethodGrammairePassifPage() {
  return (
    <div className="container max-w-5xl py-10 animate-fade-in bg-[#FFF9ED] min-h-screen">
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-br from-[#ff9100] to-orange-600 rounded-xl text-white shadow-lg">
            <BookOpen className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-extrabold text-[#ff9100]">
            Le Passif en Allemand
          </h1>
        </div>
        <p className="text-xl text-gray-600">
          Version enrichie, inspirée du « prompt modèle », corrigé inclus
        </p>
      </div>

      <div className="space-y-8">
        {/* Quand l'utiliser */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-orange-800">1. Quand l'utiliser ?</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="mb-4">Le passif sert à mettre l'objet ou l'action au premier plan ; l'agent est secondaire, parfois absent.</p>
            <p className="mb-4">Il existe :</p>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-orange-200">
                <thead>
                  <tr className="bg-orange-50">
                    <th className="border border-orange-200 p-3 text-left font-semibold">Passif</th>
                    <th className="border border-orange-200 p-3 text-left font-semibold">Construction</th>
                    <th className="border border-orange-200 p-3 text-left font-semibold">Sens principal</th>
                    <th className="border border-orange-200 p-3 text-left font-semibold">Fréquence</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-orange-200 p-3">Action (Vorgangspassiv)</td>
                    <td className="border border-orange-200 p-3"><em>werden + Part. II</em></td>
                    <td className="border border-orange-200 p-3">L'action se déroule</td>
                    <td className="border border-orange-200 p-3">Très courant</td>
                  </tr>
                  <tr className="bg-orange-25">
                    <td className="border border-orange-200 p-3">État (Zustandspassiv)</td>
                    <td className="border border-orange-200 p-3"><em>sein + Part. II</em></td>
                    <td className="border border-orange-200 p-3">Le résultat est atteint</td>
                    <td className="border border-orange-200 p-3">Moins courant, impossible aux temps composés du passé</td>
                  </tr>
                  <tr>
                    <td className="border border-orange-200 p-3">Modal-passif</td>
                    <td className="border border-orange-200 p-3"><em>Modal + Part. II + werden</em></td>
                    <td className="border border-orange-200 p-3">Ce qui doit/peut/devrait se faire</td>
                    <td className="border border-orange-200 p-3">Très fréquent à l'écrit</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg mt-4">
              <p className="font-medium text-orange-800">Vue d'ensemble rapide :</p>
              <ul className="text-gray-700 space-y-1 mt-2">
                <li>• <em>werden</em> = work in progress.</li>
                <li>• <em>sein</em> = statut acquis.</li>
                <li>• Modal = possibilité / nécessité de l'action.</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Tableaux récapitulatifs */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-orange-800">2. Tableaux récapitulatifs</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3">2a. Vorgangspassiv (action) — modèle das Haus</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-orange-200">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-orange-200 p-3 text-left">Temps / Mode</th>
                      <th className="border border-orange-200 p-3 text-left">Forme à la 3ᵉ p. sg.</th>
                      <th className="border border-orange-200 p-3 text-left">Traduction possible</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-orange-200 p-3">Présent</td>
                      <td className="border border-orange-200 p-3"><em>Das Haus wird gebaut.</em></td>
                      <td className="border border-orange-200 p-3">La maison est en train d'être construite / on construit la maison.</td>
                    </tr>
                    <tr className="bg-orange-25">
                      <td className="border border-orange-200 p-3">Prétérit</td>
                      <td className="border border-orange-200 p-3"><em>Das Haus wurde gebaut.</em></td>
                      <td className="border border-orange-200 p-3">La maison fut / était construite.</td>
                    </tr>
                    <tr>
                      <td className="border border-orange-200 p-3">Parfait</td>
                      <td className="border border-orange-200 p-3"><em>Das Haus ist gebaut worden.</em></td>
                      <td className="border border-orange-200 p-3">La maison a été construite.</td>
                    </tr>
                    <tr className="bg-orange-25">
                      <td className="border border-orange-200 p-3">Plus-que-parfait</td>
                      <td className="border border-orange-200 p-3"><em>Das Haus war gebaut worden.</em></td>
                      <td className="border border-orange-200 p-3">La maison avait été construite.</td>
                    </tr>
                    <tr>
                      <td className="border border-orange-200 p-3">Futur I</td>
                      <td className="border border-orange-200 p-3"><em>Das Haus wird gebaut werden.</em></td>
                      <td className="border border-orange-200 p-3">La maison sera construite.</td>
                    </tr>
                    <tr className="bg-orange-25">
                      <td className="border border-orange-200 p-3">Infinitif présent</td>
                      <td className="border border-orange-200 p-3"><em>gebaut werden</em></td>
                      <td className="border border-orange-200 p-3">être construit(e)</td>
                    </tr>
                    <tr>
                      <td className="border border-orange-200 p-3">Infinitif passé</td>
                      <td className="border border-orange-200 p-3"><em>gebaut worden sein</em></td>
                      <td className="border border-orange-200 p-3">avoir été construit(e)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg mt-3">
                <p className="text-sm text-gray-700">
                  Notice style : au participe II de <em>werden</em> on écrit <em>worden</em> (sans ge-) après un autre participe II pour alléger : <em>ist gebaut worden</em>.
                </p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3">2b. Zustandspassiv (état) — même modèle</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-orange-200">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-orange-200 p-3 text-left">Temps</th>
                      <th className="border border-orange-200 p-3 text-left">Forme</th>
                      <th className="border border-orange-200 p-3 text-left">Idée</th>
                      <th className="border border-orange-200 p-3 text-left">Exemple</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-orange-200 p-3">Présent</td>
                      <td className="border border-orange-200 p-3"><em>ist gebaut</em></td>
                      <td className="border border-orange-200 p-3">état actuel</td>
                      <td className="border border-orange-200 p-3"><em>Das Haus ist gebaut.</em></td>
                    </tr>
                    <tr className="bg-orange-25">
                      <td className="border border-orange-200 p-3">Prétérit</td>
                      <td className="border border-orange-200 p-3"><em>war gebaut</em></td>
                      <td className="border border-orange-200 p-3">état passé</td>
                      <td className="border border-orange-200 p-3"><em>Das Haus war gebaut.</em></td>
                    </tr>
                    <tr>
                      <td className="border border-orange-200 p-3">Futur</td>
                      <td className="border border-orange-200 p-3"><em>wird gebaut sein</em></td>
                      <td className="border border-orange-200 p-3">état futur</td>
                      <td className="border border-orange-200 p-3"><em>Das Haus wird gebaut sein.</em></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-sm text-gray-600 mt-2">(Pas de parfait / plus-que-parfait.)</p>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3">2c. Passif avec modal</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-orange-200">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-orange-200 p-3 text-left">Modal</th>
                      <th className="border border-orange-200 p-3 text-left">Forme</th>
                      <th className="border border-orange-200 p-3 text-left">Sens</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-orange-200 p-3"><em>dürfen</em></td>
                      <td className="border border-orange-200 p-3"><em>Hier darf geraucht werden.</em></td>
                      <td className="border border-orange-200 p-3">Ici, il est permis de fumer.</td>
                    </tr>
                    <tr className="bg-orange-25">
                      <td className="border border-orange-200 p-3"><em>müssen</em></td>
                      <td className="border border-orange-200 p-3"><em>Der Antrag muss bearbeitet werden.</em></td>
                      <td className="border border-orange-200 p-3">La demande doit être traitée.</td>
                    </tr>
                    <tr>
                      <td className="border border-orange-200 p-3"><em>wollen</em></td>
                      <td className="border border-orange-200 p-3"><em>Die Jugend will verstanden werden.</em></td>
                      <td className="border border-orange-200 p-3">La jeunesse veut être comprise.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Gérer l'agent */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-orange-800">3. Gérer l'agent ou le moyen</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-orange-200">
                <thead>
                  <tr className="bg-orange-50">
                    <th className="border border-orange-200 p-3 text-left">Fonction</th>
                    <th className="border border-orange-200 p-3 text-left">Préposition</th>
                    <th className="border border-orange-200 p-3 text-left">Exemple</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-orange-200 p-3">Agent (humain ou personnifié)</td>
                    <td className="border border-orange-200 p-3"><em>von + Dat.</em></td>
                    <td className="border border-orange-200 p-3"><em>Der Text wird von den Studenten übersetzt.</em></td>
                  </tr>
                  <tr className="bg-orange-25">
                    <td className="border border-orange-200 p-3">Moyen / cause</td>
                    <td className="border border-orange-200 p-3"><em>durch + Acc.</em></td>
                    <td className="border border-orange-200 p-3"><em>Die Meldung wurde durch die Medien verbreitet.</em></td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="bg-red-50 border border-red-200 p-3 rounded-lg mt-4">
              <p className="text-red-700 font-medium">Jamais <em>bei</em> ! (faux calque de l'anglais <em>by</em>).</p>
            </div>
          </CardContent>
        </Card>

        {/* Règles clés */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-orange-800">4. Règles clés & astuces</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="font-medium mb-2">Passif impersonnel :</p>
              <p className="text-gray-700 mb-2">verbe sans COD accusatif → sujet <em>es</em> factice :</p>
              <p className="text-gray-700"><em>Es wurde viel gelacht.</em> → « On a beaucoup ri. »</p>
              <p className="text-gray-700"><em>es</em> disparaît en subordonnée : <em>... dass viel gelacht wurde.</em></p>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="font-medium mb-2">Choisir entre état et action :</p>
              <p className="text-gray-700">si vous pouvez ajouter « déjà » en français → <em>sein</em>.</p>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="font-medium mb-2">Participe II sans ge- :</p>
              <p className="text-gray-700">verbes en <em>-ieren</em> (<em>installieren → installiert</em>) et verbes à préverbe inséparable (<em>verkaufen → verkauft</em>).</p>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="font-medium mb-2">Subjonctif I (discours indirect) :</p>
              <p className="text-gray-700"><em>Er sagt, das Haus werde gebaut.</em></p>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="font-medium mb-2">Subjonctif II (irréel) :</p>
              <p className="text-gray-700"><em>Wenn Hilfe da wäre, würde das Problem schneller gelöst.</em></p>
            </div>
          </CardContent>
        </Card>

        {/* Exercices */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-orange-800">5. Exercices d'application (corrigé immédiat)</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3">A. Transformer à la voix passive-action</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-orange-200">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-orange-200 p-2 text-left">#</th>
                      <th className="border border-orange-200 p-2 text-left">Phrase active</th>
                      <th className="border border-orange-200 p-2 text-left">Corrigé</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-orange-200 p-2">1</td>
                      <td className="border border-orange-200 p-2"><em>Man öffnet das Fenster.</em></td>
                      <td className="border border-orange-200 p-2"><em>Das Fenster wird geöffnet.</em></td>
                    </tr>
                    <tr className="bg-orange-25">
                      <td className="border border-orange-200 p-2">2</td>
                      <td className="border border-orange-200 p-2"><em>Die Lehrer korrigierten die Klausuren.</em></td>
                      <td className="border border-orange-200 p-2"><em>Die Klausuren wurden korrigiert.</em></td>
                    </tr>
                    <tr>
                      <td className="border border-orange-200 p-2">3</td>
                      <td className="border border-orange-200 p-2"><em>Jemand hat den Fehler entdeckt.</em></td>
                      <td className="border border-orange-200 p-2"><em>Der Fehler ist entdeckt worden.</em></td>
                    </tr>
                    <tr className="bg-orange-25">
                      <td className="border border-orange-200 p-2">4</td>
                      <td className="border border-orange-200 p-2"><em>Die Polizei wird den Verdächtigen verhaften.</em></td>
                      <td className="border border-orange-200 p-2"><em>Der Verdächtige wird verhaftet werden.</em></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3">B. Choisir werden ou sein</h3>
              <p className="mb-2">Complétez :</p>
              <div className="bg-orange-50 p-4 rounded-lg space-y-2">
                <p>1. Die Tür ___ geschlossen (résultat visible).</p>
                <p>2. Die Tür ___ gerade geschlossen (action).</p>
                <p className="font-medium mt-3">Solution :</p>
                <p>1. ist 2. wird</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3">C. Modal + passif</h3>
              <p className="mb-2">Traduisez : « Ces documents doivent être archivés immédiatement. »</p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="font-medium">Solution :</p>
                <p><em>Diese Dokumente müssen sofort archiviert werden.</em></p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Verdict */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-orange-800">6. Verdict</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="space-y-2">
              <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
                <p className="text-green-700">• <em>werden + Part. II</em> : action en cours ou prévue.</p>
              </div>
              <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
                <p className="text-green-700">• <em>sein + Part. II</em> : état obtenu.</p>
              </div>
              <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
                <p className="text-green-700">• <em>Modal + Part. II + werden</em> : obligation/possibilité au passif.</p>
              </div>
              <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
                <p className="text-green-700">• Agent → <em>von</em>, moyen → <em>durch</em>.</p>
              </div>
              <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
                <p className="text-green-700">• Maîtrisez le passif impersonnel pour traduire le <em>on</em> français.</p>
              </div>
            </div>
            <div className="bg-orange-50 p-4 rounded-lg mt-4">
              <p className="font-medium text-orange-800">Entraînement rapide :</p>
              <p className="text-gray-700">prenez 5 phrases actives de vos notes, convertissez-les en passif-action, puis dites-les à voix haute en ajoutant l'agent (<em>von...</em>) ou en l'omettant. Votre automatisme passera au niveau supérieur !</p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-10 flex justify-center gap-4">
        <Link to="/methodologie/grammaire">
          <Button variant="outline" className="border-[#ff9100] text-[#ff9100] hover:bg-[#ff9100] hover:text-white">
            ← Retour aux fiches de grammaire
          </Button>
        </Link>
      </div>
    </div>
  );
}
