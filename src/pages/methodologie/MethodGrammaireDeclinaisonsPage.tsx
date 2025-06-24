
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BookOpen } from "lucide-react";

export default function MethodGrammaireDeclinaisonsPage() {
  return (
    <div className="container max-w-5xl py-10 animate-fade-in bg-[#FFF9ED] min-h-screen">
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-br from-[#ff9100] to-orange-600 rounded-xl text-white shadow-lg">
            <BookOpen className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-extrabold text-[#ff9100]">
            Les Déclinaisons de l'Adjectif en Allemand
          </h1>
        </div>
        <p className="text-xl text-gray-600">
          Version remaniée, ré-expliquée et 100% reformulée
        </p>
      </div>

      <div className="space-y-8">
        {/* Types de déclinaison */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-orange-800">1. Trois types de déclinaison : quand les utiliser ?</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-orange-200">
                <thead>
                  <tr className="bg-orange-50">
                    <th className="border border-orange-200 p-3 text-left font-semibold">Type</th>
                    <th className="border border-orange-200 p-3 text-left font-semibold">Déterminant placé devant l'adjectif</th>
                    <th className="border border-orange-200 p-3 text-left font-semibold">Idée clé pour choisir</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-orange-200 p-3 font-semibold">Faible</td>
                    <td className="border border-orange-200 p-3">Article défini <em>der / die / das</em> ou proches : <em>dieser, jener, jeder, solcher, welcher</em>. Au pluriel : <em>alle, beide, sämtliche</em></td>
                    <td className="border border-orange-200 p-3">L'article porte déjà la marque du cas ; l'adjectif se contente de <em>-e</em> ou <em>-en</em>.</td>
                  </tr>
                  <tr className="bg-orange-25">
                    <td className="border border-orange-200 p-3 font-semibold">Mixte</td>
                    <td className="border border-orange-200 p-3">Article indéfini <em>ein/kein</em> ; adjectifs possessifs <em>mein, dein, sein, ihr, unser, euer, ihr</em></td>
                    <td className="border border-orange-200 p-3">Le déterminant indique le genre mais pas toujours le cas ; le premier adjectif "complète" l'information.</td>
                  </tr>
                  <tr>
                    <td className="border border-orange-200 p-3 font-semibold">Forte</td>
                    <td className="border border-orange-200 p-3">Aucun déterminant (ou des quantifieurs comme <em>viele, einige, ein paar</em>)</td>
                    <td className="border border-orange-200 p-3">L'adjectif doit assumer seul la marque du genre et du cas.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </CardContent>
        </Card>

        {/* Tableaux des terminaisons */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-orange-800">2. Tableaux des terminaisons</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-6">
            <p className="text-sm text-gray-600">
              Les exemples de noms changent pour varier : café (Kaffee m.), confiture (Marmelade f.), pain (Brot n.), boissons (Getränke pl.).
            </p>

            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3">a) Déclinaison faible — der / die / das + adj. + nom</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-orange-200">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-orange-200 p-2 text-left">Cas</th>
                      <th className="border border-orange-200 p-2 text-left">Masculin</th>
                      <th className="border border-orange-200 p-2 text-left">Féminin</th>
                      <th className="border border-orange-200 p-2 text-left">Neutre</th>
                      <th className="border border-orange-200 p-2 text-left">Pluriel</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-orange-200 p-2 font-medium">Nom.</td>
                      <td className="border border-orange-200 p-2"><em>der gute Kaffee</em></td>
                      <td className="border border-orange-200 p-2"><em>die gute Marmelade</em></td>
                      <td className="border border-orange-200 p-2"><em>das gute Brot</em></td>
                      <td className="border border-orange-200 p-2"><em>die guten Getränke</em></td>
                    </tr>
                    <tr className="bg-orange-25">
                      <td className="border border-orange-200 p-2 font-medium">Acc.</td>
                      <td className="border border-orange-200 p-2"><em>den guten Kaffee</em></td>
                      <td className="border border-orange-200 p-2"><em>die gute Marmelade</em></td>
                      <td className="border border-orange-200 p-2"><em>das gute Brot</em></td>
                      <td className="border border-orange-200 p-2"><em>die guten Getränke</em></td>
                    </tr>
                    <tr>
                      <td className="border border-orange-200 p-2 font-medium">Dat.</td>
                      <td className="border border-orange-200 p-2"><em>dem guten Kaffee</em></td>
                      <td className="border border-orange-200 p-2"><em>der guten Marmelade</em></td>
                      <td className="border border-orange-200 p-2"><em>dem guten Brot</em></td>
                      <td className="border border-orange-200 p-2"><em>den guten Getränken</em></td>
                    </tr>
                    <tr className="bg-orange-25">
                      <td className="border border-orange-200 p-2 font-medium">Gén.</td>
                      <td className="border border-orange-200 p-2"><em>des guten Kaffees</em></td>
                      <td className="border border-orange-200 p-2"><em>der guten Marmelade</em></td>
                      <td className="border border-orange-200 p-2"><em>des guten Brotes</em></td>
                      <td className="border border-orange-200 p-2"><em>der guten Getränke</em></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg mt-3">
                <p className="font-medium text-orange-800">À retenir :</p>
                <p className="text-gray-700">article = terminaison forte ; l'adjectif reste discret (-e/-en).</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3">b) Déclinaison mixte — ein/kein/possessif + adj. + nom</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-orange-200">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-orange-200 p-2 text-left">Cas</th>
                      <th className="border border-orange-200 p-2 text-left">Masculin</th>
                      <th className="border border-orange-200 p-2 text-left">Féminin</th>
                      <th className="border border-orange-200 p-2 text-left">Neutre</th>
                      <th className="border border-orange-200 p-2 text-left">Pluriel</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-orange-200 p-2 font-medium">Nom.</td>
                      <td className="border border-orange-200 p-2"><em>ein guter Kaffee</em></td>
                      <td className="border border-orange-200 p-2"><em>eine gute Marmelade</em></td>
                      <td className="border border-orange-200 p-2"><em>ein gutes Brot</em></td>
                      <td className="border border-orange-200 p-2"><em>keine guten Getränke</em></td>
                    </tr>
                    <tr className="bg-orange-25">
                      <td className="border border-orange-200 p-2 font-medium">Acc.</td>
                      <td className="border border-orange-200 p-2"><em>einen guten Kaffee</em></td>
                      <td className="border border-orange-200 p-2"><em>eine gute Marmelade</em></td>
                      <td className="border border-orange-200 p-2"><em>ein gutes Brot</em></td>
                      <td className="border border-orange-200 p-2"><em>keine guten Getränke</em></td>
                    </tr>
                    <tr>
                      <td className="border border-orange-200 p-2 font-medium">Dat.</td>
                      <td className="border border-orange-200 p-2"><em>einem guten Kaffee</em></td>
                      <td className="border border-orange-200 p-2"><em>einer guten Marmelade</em></td>
                      <td className="border border-orange-200 p-2"><em>einem guten Brot</em></td>
                      <td className="border border-orange-200 p-2"><em>keinen guten Getränken</em></td>
                    </tr>
                    <tr className="bg-orange-25">
                      <td className="border border-orange-200 p-2 font-medium">Gén.</td>
                      <td className="border border-orange-200 p-2"><em>eines guten Kaffees</em></td>
                      <td className="border border-orange-200 p-2"><em>einer guten Marmelade</em></td>
                      <td className="border border-orange-200 p-2"><em>eines guten Brotes</em></td>
                      <td className="border border-orange-200 p-2"><em>keiner guten Getränke</em></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg mt-3">
                <p className="font-medium text-orange-800">Astuce :</p>
                <p className="text-gray-700">dès qu'un "ein-mot" n'indique pas clairement le cas (ex. : ein), l'adjectif revêt la finale qui manque.</p>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-orange-700 mb-3">c) Déclinaison forte — adj. + nom (aucun déterminant)</h3>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-orange-200">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-orange-200 p-2 text-left">Cas</th>
                      <th className="border border-orange-200 p-2 text-left">Masculin</th>
                      <th className="border border-orange-200 p-2 text-left">Féminin</th>
                      <th className="border border-orange-200 p-2 text-left">Neutre</th>
                      <th className="border border-orange-200 p-2 text-left">Pluriel</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-orange-200 p-2 font-medium">Nom.</td>
                      <td className="border border-orange-200 p-2"><em>guter Kaffee</em></td>
                      <td className="border border-orange-200 p-2"><em>gute Marmelade</em></td>
                      <td className="border border-orange-200 p-2"><em>gutes Brot</em></td>
                      <td className="border border-orange-200 p-2"><em>gute Getränke</em></td>
                    </tr>
                    <tr className="bg-orange-25">
                      <td className="border border-orange-200 p-2 font-medium">Acc.</td>
                      <td className="border border-orange-200 p-2"><em>guten Kaffee</em></td>
                      <td className="border border-orange-200 p-2"><em>gute Marmelade</em></td>
                      <td className="border border-orange-200 p-2"><em>gutes Brot</em></td>
                      <td className="border border-orange-200 p-2"><em>gute Getränke</em></td>
                    </tr>
                    <tr>
                      <td className="border border-orange-200 p-2 font-medium">Dat.</td>
                      <td className="border border-orange-200 p-2"><em>gutem Kaffee</em></td>
                      <td className="border border-orange-200 p-2"><em>guter Marmelade</em></td>
                      <td className="border border-orange-200 p-2"><em>gutem Brot</em></td>
                      <td className="border border-orange-200 p-2"><em>guten Getränken</em></td>
                    </tr>
                    <tr className="bg-orange-25">
                      <td className="border border-orange-200 p-2 font-medium">Gén.</td>
                      <td className="border border-orange-200 p-2"><em>guten Kaffees</em></td>
                      <td className="border border-orange-200 p-2"><em>guter Marmelade</em></td>
                      <td className="border border-orange-200 p-2"><em>guten Brotes</em></td>
                      <td className="border border-orange-200 p-2"><em>guter Getränke</em></td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="bg-orange-50 p-3 rounded-lg mt-3">
                <p className="font-medium text-orange-800">Multiples adjectifs :</p>
                <p className="text-gray-700"><em>frischer süßer Bio-Kaffee</em> : tous les adjectifs reçoivent la même désinence forte.</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Règles et mémos */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-orange-800">3. Règles et mémos éclair</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-4">
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="font-medium mb-2">Repère du -s génitif :</p>
              <p className="text-gray-700">dès que le nom masculin/neutre prend -s/es au génitif, l'adjectif adopte -en (mixte & forte) ou garde -en (faible).</p>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="font-medium mb-2">Pluriel datif :</p>
              <p className="text-gray-700">toujours -n sur le nom s'il n'en possède pas déjà un (<em>den guten Getränken</em>).</p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="font-medium mb-2">Hiérarchie visuelle :</p>
              <ul className="text-gray-700 space-y-1">
                <li>• Article fort → Adjectif faible</li>
                <li>• Article "moyen" → Adjectif mixte</li>
                <li>• Pas d'article → Adjectif fort</li>
              </ul>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="font-medium mb-2">Vocabulaire "piège" :</p>
              <p className="text-gray-700"><em>mancher-</em> se décline comme les articles définis (singulier), tandis que <em>viele, einige, ein paar</em> déclenchent la forte.</p>
            </div>

            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="font-medium mb-2">Mémo mnémotechnique pour la forte :</p>
              <ul className="text-gray-700 space-y-1">
                <li>• <strong>NOM.</strong> : -er / -e / -es / -e</li>
                <li>• <strong>ACC.</strong> : seul masculin change → -en</li>
                <li>• <strong>DAT.</strong> : m pour masculin/neutre (em), r pour féminin (er), n pour pluriel (en)</li>
                <li>• <strong>GEN.</strong> : -en / -er / -en / -er</li>
              </ul>
            </div>
          </CardContent>
        </Card>

        {/* Exercices */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-orange-800">4. Exercices conseillés (pour s'entraîner)</CardTitle>
          </CardHeader>
          <CardContent className="pt-6 space-y-3">
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="font-medium mb-1">Transformez :</p>
              <p className="text-gray-700"><em>Ich trinke ___ (frisch, stark) Kaffee</em> → <em>Ich trinke frischen starken Kaffee</em> (forte, masculin accusatif).</p>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="font-medium mb-1">Traduisez en allemand :</p>
              <p className="text-gray-700">"Je n'achète pas de vieux vins." → <em>Ich kaufe keine alten Weine.</em> (mixte, pluriel accusatif).</p>
            </div>
            
            <div className="bg-orange-50 p-4 rounded-lg">
              <p className="font-medium mb-1">Remplissez le datif :</p>
              <p className="text-gray-700"><em>mit ___ (neu) Freunden</em> → <em>mit neuen Freunden</em> (faible, pluriel datif).</p>
            </div>
          </CardContent>
        </Card>

        {/* Verdict */}
        <Card className="border-2 border-orange-200">
          <CardHeader className="bg-gradient-to-r from-orange-100 to-amber-100">
            <CardTitle className="text-orange-800">5. Verdict</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <p className="mb-4">Si vous savez lire l'article, vous connaîtrez l'armure de l'adjectif :</p>
            <div className="space-y-2">
              <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
                <p className="text-green-700">• Article fort → adjectif léger.</p>
              </div>
              <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
                <p className="text-green-700">• Article léger → adjectif mixte.</p>
              </div>
              <div className="bg-green-50 border border-green-200 p-3 rounded-lg">
                <p className="text-green-700">• Pas d'article → adjectif complet.</p>
              </div>
            </div>
            <p className="mt-4 font-medium text-orange-800">Entraînez-vous régulièrement : la régularité vaut mieux que les listes apprises par cœur !</p>
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
