
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

export default function MethodGrammaireStructurePage() {
  return (
    <div className="container max-w-5xl py-10 animate-fade-in bg-[#FFF9ED] min-h-screen">
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-br from-[#ff9100] to-orange-600 rounded-xl text-white shadow-lg">
            <BookOpen className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-extrabold text-[#ff9100]">
            Structure de la Phrase Allemande : Guide Complet
          </h1>
        </div>
        <p className="text-xl text-gray-600">
          Maîtrisez les règles fondamentales de l'ordre des mots en allemand
        </p>
      </div>

      <div className="space-y-8">
        {/* Vue d'ensemble */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-orange-800">Vue d'Ensemble : Les Trois Positions du Verbe</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-orange-200">
                <thead>
                  <tr className="bg-orange-50">
                    <th className="border border-orange-200 p-3 text-left font-semibold">Position</th>
                    <th className="border border-orange-200 p-3 text-left font-semibold">Contexte</th>
                    <th className="border border-orange-200 p-3 text-left font-semibold">Exemple</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-orange-200 p-3">1ère</td>
                    <td className="border border-orange-200 p-3">Questions fermées, Impératif</td>
                    <td className="border border-orange-200 p-3 font-italic">Kommst du mit?</td>
                  </tr>
                  <tr className="bg-orange-25">
                    <td className="border border-orange-200 p-3">2ème</td>
                    <td className="border border-orange-200 p-3">Phrases déclaratives, Questions ouvertes</td>
                    <td className="border border-orange-200 p-3 font-italic">Ich komme morgen mit.</td>
                  </tr>
                  <tr>
                    <td className="border border-orange-200 p-3">Dernière</td>
                    <td className="border border-orange-200 p-3">Propositions subordonnées</td>
                    <td className="border border-orange-200 p-3 font-italic">Ich weiß, dass du mitkommst.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Position 1 */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-orange-800">Position 1 : Verbe en Première Position</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3">Questions fermées (Ja/Nein-Fragen)</h3>
              <p className="mb-2"><strong>Structure :</strong> VERBE + SUJET + AUTRES ÉLÉMENTS + ?</p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="font-medium mb-2">Exemples pratiques :</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• <em>Studierst du Medizin an der Universität?</em></li>
                  <li>• <em>Haben Sie schon einmal Deutschland besucht?</em></li>
                  <li>• <em>Wird das Konzert heute Abend stattfinden?</em></li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3">Mode impératif</h3>
              <p className="mb-2"><strong>Structure :</strong> VERBE + COMPLÉMENTS + !</p>
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="font-medium mb-2">Forme de politesse :</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• <em>Kommen Sie bitte in mein Büro!</em></li>
                    <li>• <em>Helfen Sie mir mit diesem Problem!</em></li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="font-medium mb-2">Forme familière :</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• <em>Mach deine Aufgaben sofort!</em></li>
                    <li>• <em>Erzähl mir von deinem Wochenende!</em></li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3">Conditionnelles sans "wenn" (Style soutenu)</h3>
              <p className="mb-2"><strong>Structure :</strong> VERBE (Subjonctif) + SUJET + AUTRES + , + CONSÉQUENCE</p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="font-medium mb-2">Transformations :</p>
                <div className="space-y-2 text-gray-700">
                  <p><em>Wenn du fleißig lernst, wirst du Erfolg haben.</em><br/>→ <em>Lernst du fleißig, wirst du Erfolg haben.</em></p>
                  <p><em>Wenn ich reich wäre, würde ich um die Welt reisen.</em><br/>→ <em>Wäre ich reich, würde ich um die Welt reisen.</em></p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Position 2 */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-orange-800">Position 2 : Verbe en Deuxième Position</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3">Phrases déclaratives</h3>
              <p className="mb-2"><strong>Structure :</strong> ÉLÉMENT 1 + VERBE + SUJET + AUTRES + PARTIE VERBALE NON CONJUGUÉE</p>
              <p className="mb-3">Mécanisme de la "klammer" (parenthèse verbale) :</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-orange-200">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-orange-200 p-2 text-left">Élément 1</th>
                      <th className="border border-orange-200 p-2 text-left">Verbe conjugué</th>
                      <th className="border border-orange-200 p-2 text-left">Mittelfeld (champ médian)</th>
                      <th className="border border-orange-200 p-2 text-left">Fin verbale</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-orange-200 p-2">Ich</td>
                      <td className="border border-orange-200 p-2">habe</td>
                      <td className="border border-orange-200 p-2">gestern meinem Bruder</td>
                      <td className="border border-orange-200 p-2">geholfen</td>
                    </tr>
                    <tr className="bg-orange-25">
                      <td className="border border-orange-200 p-2">Gestern</td>
                      <td className="border border-orange-200 p-2">habe</td>
                      <td className="border border-orange-200 p-2">ich meinem Bruder</td>
                      <td className="border border-orange-200 p-2">geholfen</td>
                    </tr>
                    <tr>
                      <td className="border border-orange-200 p-2">Meinem Bruder</td>
                      <td className="border border-orange-200 p-2">habe</td>
                      <td className="border border-orange-200 p-2">ich gestern</td>
                      <td className="border border-orange-200 p-2">geholfen</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3">Questions ouvertes (W-Fragen)</h3>
              <p className="mb-2"><strong>Structure :</strong> MOT INTERROGATIF + VERBE + SUJET + AUTRES + ?</p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="font-medium mb-2">Exemples avec différents interrogatifs :</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• <em>Warum gehst du nicht zur Schule?</em></li>
                  <li>• <em>Wessen Auto steht vor unserem Haus?</em></li>
                  <li>• <em>Womit beschäftigt sich dein Vater beruflich?</em></li>
                </ul>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3">Éléments verbaux non conjugués en fin de phrase</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-orange-200">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-orange-200 p-2 text-left">Type</th>
                      <th className="border border-orange-200 p-2 text-left">Exemple</th>
                      <th className="border border-orange-200 p-2 text-left">Élément final</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-orange-200 p-2">Participe passé</td>
                      <td className="border border-orange-200 p-2"><em>Er hat das Buch gelesen</em></td>
                      <td className="border border-orange-200 p-2">gelesen</td>
                    </tr>
                    <tr className="bg-orange-25">
                      <td className="border border-orange-200 p-2">Infinitif</td>
                      <td className="border border-orange-200 p-2"><em>Wir wollen morgen schwimmen</em></td>
                      <td className="border border-orange-200 p-2">schwimmen</td>
                    </tr>
                    <tr>
                      <td className="border border-orange-200 p-2">Particule séparable</td>
                      <td className="border border-orange-200 p-2"><em>Sie macht das Fenster auf</em></td>
                      <td className="border border-orange-200 p-2">auf</td>
                    </tr>
                    <tr className="bg-orange-25">
                      <td className="border border-orange-200 p-2">Prédicat nominal</td>
                      <td className="border border-orange-200 p-2"><em>Er wird Arzt</em></td>
                      <td className="border border-orange-200 p-2">Arzt</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Position finale */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-orange-800">Position Finale : Verbe en Dernière Position</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3">Propositions subordonnées</h3>
              <p className="mb-2"><strong>Structure :</strong> CONJONCTION + SUJET + COMPLÉMENTS + VERBE CONJUGUÉ</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-orange-200">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-orange-200 p-2 text-left">Conjonction</th>
                      <th className="border border-orange-200 p-2 text-left">Sens</th>
                      <th className="border border-orange-200 p-2 text-left">Exemple</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-orange-200 p-2">dass</td>
                      <td className="border border-orange-200 p-2">que</td>
                      <td className="border border-orange-200 p-2"><em>Ich denke, dass er heute kommt.</em></td>
                    </tr>
                    <tr className="bg-orange-25">
                      <td className="border border-orange-200 p-2">weil</td>
                      <td className="border border-orange-200 p-2">parce que</td>
                      <td className="border border-orange-200 p-2"><em>Er bleibt zu Hause, weil er krank ist.</em></td>
                    </tr>
                    <tr>
                      <td className="border border-orange-200 p-2">obwohl</td>
                      <td className="border border-orange-200 p-2">bien que</td>
                      <td className="border border-orange-200 p-2"><em>Sie arbeitet, obwohl sie müde ist.</em></td>
                    </tr>
                    <tr className="bg-orange-25">
                      <td className="border border-orange-200 p-2">damit</td>
                      <td className="border border-orange-200 p-2">pour que</td>
                      <td className="border border-orange-200 p-2"><em>Ich rufe an, damit du Bescheid weißt.</em></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3">Cas particuliers dans les subordonnées</h3>
              <div className="space-y-3">
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="font-medium mb-1">Double infinitif :</p>
                  <p className="text-gray-700"><em>...dass er hat kommen wollen.</em> (et non : *dass er kommen wollen hat*)</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="font-medium mb-1">Comparatifs :</p>
                  <p className="text-gray-700"><em>...dass sie größer ist als ich dachte.</em> (verbe avant "als")</p>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="font-medium mb-1">Constructions avec "oder nicht" :</p>
                  <p className="text-gray-700"><em>...ob er kommt oder nicht.</em> (verbe avant "oder nicht")</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ordre des éléments */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-orange-800">Ordre des Éléments : Principes Fondamentaux</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3">Principe 1 : Mise en relief par la position initiale</h3>
              <p className="mb-3">Impact communicatif selon l'élément placé en première position :</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-orange-200">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-orange-200 p-2 text-left">Élément initial</th>
                      <th className="border border-orange-200 p-2 text-left">Effet</th>
                      <th className="border border-orange-200 p-2 text-left">Exemple</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-orange-200 p-2">Sujet</td>
                      <td className="border border-orange-200 p-2">Neutre</td>
                      <td className="border border-orange-200 p-2"><em>Der Student lernt fleißig.</em></td>
                    </tr>
                    <tr className="bg-orange-25">
                      <td className="border border-orange-200 p-2">Temps</td>
                      <td className="border border-orange-200 p-2">Cadre temporel</td>
                      <td className="border border-orange-200 p-2"><em>Heute lernt der Student fleißig.</em></td>
                    </tr>
                    <tr>
                      <td className="border border-orange-200 p-2">COD</td>
                      <td className="border border-orange-200 p-2">Emphase sur l'objet</td>
                      <td className="border border-orange-200 p-2"><em>Diese Sprache lernt der Student fleißig.</em></td>
                    </tr>
                    <tr className="bg-orange-25">
                      <td className="border border-orange-200 p-2">Manière</td>
                      <td className="border border-orange-200 p-2">Emphase sur la méthode</td>
                      <td className="border border-orange-200 p-2"><em>Fleißig lernt der Student diese Sprache.</em></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3">Principe 2 : Position du sujet après inversion</h3>
              <p className="mb-2"><strong>Règle :</strong> Quand un autre élément que le sujet occupe la première position, le sujet suit immédiatement le verbe.</p>
              <p className="mb-3"><strong>Schéma :</strong> AUTRE ÉLÉMENT + VERBE + SUJET + RESTE</p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="font-medium mb-2">Exemples contrastés :</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• <em>Ich schreibe jeden Tag in mein Tagebuch.</em> (ordre normal)</li>
                  <li>• <em>Jeden Tag schreibe ich in mein Tagebuch.</em> (emphase temporelle)</li>
                  <li>• <em>In mein Tagebuch schreibe ich jeden Tag.</em> (emphase sur l'objet)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ordre des compléments */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-orange-800">Ordre des Compléments : Règles Détaillées</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3">Hiérarchie générale</h3>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="font-mono text-center text-lg">SUJET + PRONOMS + TEMPS + CAUSE + LIEU + MANIÈRE + COI + COD</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3">Règles spécifiques aux pronoms</h3>
              <div className="mb-4">
                <p className="font-medium mb-2">Ordre des pronoms personnels :</p>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <p className="font-mono text-center">NOMINATIF + ACCUSATIF + DATIF</p>
                </div>
              </div>
              <div className="bg-orange-50 p-4 rounded-lg mb-4">
                <p className="font-medium mb-2">Exemples :</p>
                <ul className="space-y-1 text-gray-700">
                  <li>• <em>Ich gebe es ihm.</em> (je le lui donne)</li>
                  <li>• <em>Sie erklärt es uns.</em> (elle nous l'explique)</li>
                  <li>• <em>Er zeigt sie ihnen.</em> (il la leur montre)</li>
                </ul>
              </div>
              <div>
                <p className="font-medium mb-2">Pronoms vs. noms :</p>
                <p className="mb-2"><strong>PRONOMS avant NOMS (toujours)</strong></p>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="font-medium mb-2">Comparaisons :</p>
                  <ul className="space-y-1 text-gray-700">
                    <li>• <em>Ich gebe dem Kind das Buch.</em> → <em>Ich gebe es dem Kind.</em></li>
                    <li>• <em>Ich gebe meinem Bruder Geld.</em> → <em>Ich gebe ihm Geld.</em></li>
                    <li>• <em>Ich gebe es ihm.</em> (pronom + pronom)</li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3">Compléments circonstanciels : T-L-M</h3>
              <p className="mb-3"><strong>Mnémotechnique :</strong> Temps - Lieu - Manière</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-orange-200">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-orange-200 p-2 text-left">Temps</th>
                      <th className="border border-orange-200 p-2 text-left">Lieu</th>
                      <th className="border border-orange-200 p-2 text-left">Manière</th>
                      <th className="border border-orange-200 p-2 text-left">Exemple complet</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-orange-200 p-2">gestern</td>
                      <td className="border border-orange-200 p-2">im Park</td>
                      <td className="border border-orange-200 p-2">allein</td>
                      <td className="border border-orange-200 p-2"><em>Ich bin gestern im Park allein spaziert.</em></td>
                    </tr>
                    <tr className="bg-orange-25">
                      <td className="border border-orange-200 p-2">jeden Morgen</td>
                      <td className="border border-orange-200 p-2">zur Schule</td>
                      <td className="border border-orange-200 p-2">mit dem Bus</td>
                      <td className="border border-orange-200 p-2"><em>Sie fährt jeden Morgen mit dem Bus zur Schule.</em></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3">Hiérarchie informationnelle</h3>
              <p className="mb-3"><strong>Principe :</strong> Plus une information est centrale au sens du verbe, plus elle se rapproche de la fin.</p>
              <div className="bg-orange-50 p-4 rounded-lg">
                <p className="font-medium mb-2">Exemples analytiques :</p>
                <p className="text-gray-700 mb-2"><em>Ich kaufe heute im Supermarkt für meine Familie frisches Gemüse.</em></p>
                <ul className="space-y-1 text-gray-700">
                  <li>• <strong>Noyau :</strong> Gemüse kaufen (information essentielle)</li>
                  <li>• <strong>Périphérie :</strong> heute, im Supermarkt (circonstances)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Négation */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-orange-800">La Négation avec "nicht" : Règles Précises</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3">Négation totale</h3>
              <p className="mb-2"><strong>Position :</strong> Dernier élément d'information</p>
              <div className="bg-orange-50 p-3 rounded-lg">
                <p><em>Sie versteht diese Theorie nicht.</em></p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3">Négation partielle</h3>
              <p className="mb-2"><strong>Position :</strong> Directement avant l'élément nié</p>
              <div className="bg-orange-50 p-3 rounded-lg">
                <p><em>Er arbeitet nicht in Berlin, sondern in München.</em></p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3">Respect des groupes syntaxiques</h3>
              <p className="mb-2"><strong>Groupes inséparables :</strong></p>
              <div className="space-y-2">
                <div className="bg-orange-50 p-3 rounded-lg">
                  <p>• <strong>Noyau verbal :</strong> <em>Ich kann nicht nach Hause gehen.</em></p>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <p>• <strong>Groupe prépositionnel :</strong> <em>Er denkt nicht an seine Probleme.</em></p>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <p>• <strong>Attribut :</strong> <em>Das Buch ist nicht interessant.</em></p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3">Positions interdites pour "nicht"</h3>
              <div className="space-y-2">
                <div className="bg-red-50 border border-red-200 p-3 rounded-lg">
                  <p className="text-red-700">❌ <em>Ich nicht gehe nach Hause.</em> (sépare sujet et verbe)</p>
                </div>
                <div className="bg-red-50 border border-red-200 p-3 rounded-lg">
                  <p className="text-red-700">❌ <em>Ich gehe nicht nach Hause.</em> (brise le noyau verbal)</p>
                </div>
                <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
                  <p className="text-green-700">✅ <em>Ich gehe nicht nach Hause.</em> (si on nie "nach Hause gehen")</p>
                </div>
                <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
                  <p className="text-green-700">✅ <em>Ich gehe heute nicht nach Hause.</em> (si on nie toute l'action)</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Ponctuation */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-orange-800">Ponctuation : Règles Strictes</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3">Virgules obligatoires</h3>
              <div className="space-y-4">
                <div>
                  <p className="font-medium mb-2">1. Principales / Subordonnées :</p>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <p>PRINCIPALE + , + SUBORDONNÉE<br/>
                    SUBORDONNÉE + , + PRINCIPALE</p>
                    <p className="mt-2 text-gray-700"><em>Ich glaube, dass du recht hast. Weil es regnet, bleiben wir zu Hause.</em></p>
                  </div>
                </div>
                <div>
                  <p className="font-medium mb-2">2. Énumérations :</p>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <p>ÉLÉMENT + , + ÉLÉMENT + , + ÉLÉMENT + und + DERNIER</p>
                    <p className="mt-2 text-gray-700"><em>Wir brauchen Mehl, Eier, Milch und Zucker.</em></p>
                  </div>
                </div>
                <div>
                  <p className="font-medium mb-2">3. Appositions :</p>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <p>NOM + , + APPOSITION + , + SUITE</p>
                    <p className="mt-2 text-gray-700"><em>Goethe, der berühmte deutsche Dichter, lebte in Weimar.</em></p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3">Virgules interdites</h3>
              <p className="mb-3">Contrairement au français :</p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-orange-200">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-orange-200 p-2 text-left">Français</th>
                      <th className="border border-orange-200 p-2 text-left">Allemand</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-orange-200 p-2">Hier, au bureau, j'ai travaillé.</td>
                      <td className="border border-orange-200 p-2"><em>Gestern habe ich im Büro gearbeitet.</em></td>
                    </tr>
                    <tr className="bg-orange-25">
                      <td className="border border-orange-200 p-2">Malheureusement, il pleut.</td>
                      <td className="border border-orange-200 p-2"><em>Leider regnet es.</em></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Synthèse */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-orange-800">Synthèse : Mécanismes Clés</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3">Les trois règles d'or</h3>
              <div className="space-y-2">
                <div className="bg-orange-50 p-3 rounded-lg">
                  <p><strong>Position du verbe = Type de phrase</strong> (déclarative, interrogative, subordonnée)</p>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <p><strong>Première position = Mise en relief</strong> (emphase communicative)</p>
                </div>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <p><strong>Fin de phrase = Information centrale</strong> (noyau sémantique)</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3">Erreurs fréquentes à éviter</h3>
              <div className="space-y-2">
                <div className="bg-red-50 border border-red-200 p-3 rounded-lg">
                  <p className="text-red-700">❌ Verbe conjugué mal placé dans les subordonnées</p>
                </div>
                <div className="bg-red-50 border border-red-200 p-3 rounded-lg">
                  <p className="text-red-700">❌ Séparation du noyau verbal par "nicht"</p>
                </div>
                <div className="bg-red-50 border border-red-200 p-3 rounded-lg">
                  <p className="text-red-700">❌ Virgules françaises dans les compléments circonstanciels</p>
                </div>
                <div className="bg-red-50 border border-red-200 p-3 rounded-lg">
                  <p className="text-red-700">❌ Mauvais ordre des pronoms personnels</p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3">Stratégies de mémorisation</h3>
              <div className="space-y-2">
                <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
                  <p className="text-green-700">• Visualiser la "klammer" (parenthèse verbale)</p>
                </div>
                <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
                  <p className="text-green-700">• Mémoriser T-L-M pour les circonstanciels</p>
                </div>
                <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
                  <p className="text-green-700">• Pratiquer les transformations (normale → emphase)</p>
                </div>
                <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
                  <p className="text-green-700">• Analyser le noyau verbal dans chaque phrase</p>
                </div>
              </div>
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
