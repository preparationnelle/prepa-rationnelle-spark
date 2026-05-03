import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, ChevronRight, Target, FileText } from 'lucide-react';

const DeclinaisonsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-4 mb-4">
              <Link to="/formation/allemand-grammaire" className="flex items-center gap-2 text-gray-600 hover:text-orange-600 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                <span className="text-sm">Retour à la grammaire</span>
        </Link>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-orange-50 rounded-lg flex items-center justify-center border border-orange-100">
                <BookOpen className="h-6 w-6 text-orange-600" />
              </div>
              <div>
                <h1 className="text-3xl font-bold text-gray-900">Les Déclinaisons de l'Adjectif en Allemand</h1>
                <p className="text-gray-600 mt-1">Version remaniée, ré-expliquée et reformulée</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* 1. Trois types de déclinaison */}
          <section className="mb-10">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-sm">1</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  Trois types de d&eacute;clinaison : quand les utiliser ?
                </h2>
            </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 bg-white">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">Type</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">D&eacute;terminant plac&eacute; devant l&apos;adjectif</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">Id&eacute;e cl&eacute; pour choisir</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium text-gray-900">Faible</td>
                      <td className="border border-gray-300 p-3 text-gray-700">Article défini der / die / das ou proches : dieser, jener, jeder, solcher, welcher. Au pluriel : alle, beide, sämtliche</td>
                      <td className="border border-gray-300 p-3 text-gray-700">L&apos;article porte déjà la marque du cas ; l&apos;adjectif se contente de -e ou -en.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium text-gray-900">Mixte</td>
                      <td className="border border-gray-300 p-3 text-gray-700">Article indéfini ein/kein ; adjectifs possessifs mein, dein, sein, ihr, unser, euer, ihr</td>
                      <td className="border border-gray-300 p-3 text-gray-700">Le déterminant indique le genre mais pas toujours le cas ; le premier adjectif &quot;complète&quot; l&apos;information.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium text-gray-900">Forte</td>
                      <td className="border border-gray-300 p-3 text-gray-700">Aucun déterminant (ou des quantifieurs comme viele, einige, ein paar)</td>
                      <td className="border border-gray-300 p-3 text-gray-700">L&apos;adjectif doit assumer seul la marque du genre et du cas.</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 2. Tableaux des terminaisons */}
          <section className="mb-10">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-sm">2</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  Tableaux des terminaisons
                </h2>
              </div>

              <div className="space-y-8">
                {/* Déclinaison faible */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                    a) D&eacute;clinaison faible &mdash; der / die / das + adj. + nom
                  </h3>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 bg-white">
                      <thead>
                        <tr className="bg-orange-50">
                          <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">Cas</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">Masculin</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">F&eacute;minin</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">Neutre</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">Pluriel</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium text-gray-900">Nom.</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">der gute Kaffee</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">die gute Marmelade</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">das gute Brot</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">die guten Getränke</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium text-gray-900">Acc.</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">den guten Kaffee</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">die gute Marmelade</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">das gute Brot</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">die guten Getränke</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium text-gray-900">Dat.</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">dem guten Kaffee</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">der guten Marmelade</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">dem guten Brot</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">den guten Getränken</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium text-gray-900">Gén.</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">des guten Kaffees</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">der guten Marmelade</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">des guten Brotes</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">der guten Getränke</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <p className="text-sm text-orange-800 italic">
                      À retenir : article = terminaison forte ; l&apos;adjectif reste discret (-e/-en).
                    </p>
                  </div>
                </div>

                {/* Déclinaison mixte */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                    b) D&eacute;clinaison mixte &mdash; ein/kein/possessif + adj. + nom
                  </h3>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 bg-white">
                      <thead>
                        <tr className="bg-gray-100">
                          <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">Cas</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">Masculin</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">F&eacute;minin</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">Neutre</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">Pluriel</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium text-gray-900">Nom.</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">ein guter Kaffee</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">eine gute Marmelade</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">ein gutes Brot</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">keine guten Getränke</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium text-gray-900">Acc.</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">einen guten Kaffee</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">eine gute Marmelade</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">ein gutes Brot</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">keine guten Getränke</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium text-gray-900">Dat.</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">einem guten Kaffee</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">einer guten Marmelade</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">einem guten Brot</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">keinen guten Getränken</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium text-gray-900">Gén.</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">eines guten Kaffees</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">einer guten Marmelade</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">eines guten Brotes</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">keiner guten Getränke</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-3 p-3 bg-gray-100 rounded-lg border border-gray-300">
                    <p className="text-sm text-gray-700 italic">
                      Astuce : dès qu&apos;un &quot;ein-mot&quot; n&apos;indique pas clairement le cas (ex. : ein), l&apos;adjectif revêt la finale qui manque.
                    </p>
                  </div>
                </div>

                {/* Déclinaison forte */}
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                    c) D&eacute;clinaison forte &mdash; adj. + nom (aucun d&eacute;terminant)
                  </h3>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse border border-gray-300 bg-white">
                      <thead>
                        <tr className="bg-orange-50">
                          <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">Cas</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">Masculin</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">F&eacute;minin</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">Neutre</th>
                          <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">Pluriel</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium text-gray-900">Nom.</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">guter Kaffee</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">gute Marmelade</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">gutes Brot</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">gute Getränke</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium text-gray-900">Acc.</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">guten Kaffee</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">gute Marmelade</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">gutes Brot</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">gute Getränke</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium text-gray-900">Dat.</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">gutem Kaffee</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">guter Marmelade</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">gutem Brot</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">guten Getränken</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 p-3 font-medium text-gray-900">Gén.</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">guten Kaffees</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">guter Marmelade</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">guten Brotes</td>
                          <td className="border border-gray-300 p-3 font-mono text-gray-700">guter Getränke</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="mt-3 p-3 bg-orange-50 rounded-lg border border-orange-200">
                    <p className="text-sm text-orange-800 italic">
                      Multiples adjectifs : frischer süßer Bio-Kaffee : tous les adjectifs reçoivent la même désinence forte.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Règles et mémos éclair */}
          <section className="mb-10">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-sm">3</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  R&egrave;gles et m&eacute;mos &eacute;clair
                </h2>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border border-gray-300">
                  <h4 className="font-bold text-gray-900 mb-2">Repère du -s génitif :</h4>
                  <p className="text-gray-700">
                    dès que le nom masculin/neutre prend -s/es au génitif, l&apos;adjectif adopte -en (mixte &amp; forte) ou garde -en (faible).
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg border border-gray-300">
                  <h4 className="font-bold text-gray-900 mb-2">Pluriel datif :</h4>
                  <p className="text-gray-700">
                    toujours -n sur le nom s'il n'en possède pas déjà un (den guten Getränken).
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg border border-gray-300">
                  <h4 className="font-bold text-gray-900 mb-2">Hiérarchie visuelle :</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• Article fort → Adjectif faible</li>
                    <li>• Article "moyen" → Adjectif mixte</li>
                    <li>• Pas d'article → Adjectif fort</li>
                  </ul>
                </div>

                <div className="p-4 bg-white rounded-lg border border-gray-300">
                  <h4 className="font-bold text-gray-900 mb-2">Vocabulaire "piège" :</h4>
                  <p className="text-gray-700">
                    mancher- se décline comme les articles définis (singulier), tandis que viele, einige, ein paar déclenchent la forte.
                  </p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-orange-50 rounded-lg border border-orange-200">
                <h4 className="font-bold text-orange-800 mb-3">Mémo mnémotechnique pour la forte</h4>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                  <div className="text-center">
                    <div className="font-bold text-orange-700 mb-1">NOM.</div>
                    <div className="text-sm text-gray-700">-er / -e / -es / -e</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-orange-700 mb-1">ACC.</div>
                    <div className="text-sm text-gray-700">seul masculin change → -en</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-orange-700 mb-1">DAT.</div>
                    <div className="text-sm text-gray-700">m pour masculin/neutre (em), r pour féminin (er), n pour pluriel (en)</div>
                  </div>
                  <div className="text-center">
                    <div className="font-bold text-orange-700 mb-1">GEN.</div>
                    <div className="text-sm text-gray-700">-en / -er / -en / -er</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 4. Exercices conseillés */}
          <section className="mb-10">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-sm">4</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  Exercices conseill&eacute;s (pour s&apos;entra&icirc;ner)
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg border border-gray-300">
                  <h4 className="font-bold text-gray-900 mb-3">Transformez :</h4>
                  <div>
                    <p className="text-gray-700">Ich trinke ___ (frisch, stark) Kaffee</p>
                    <p className="font-mono text-orange-700 font-semibold">→ Ich trinke frischen starken Kaffee</p>
                    <span className="text-xs text-gray-600">(forte, masculin accusatif)</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-300">
                  <h4 className="font-bold text-gray-900 mb-3">Traduisez en allemand :</h4>
                  <div>
                    <p className="text-gray-700">"Je n'achète pas de vieux vins."</p>
                    <p className="font-mono text-orange-700 font-semibold">→ Ich kaufe keine alten Weine.</p>
                    <span className="text-xs text-gray-600">(mixte, pluriel accusatif)</span>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-300">
                  <h4 className="font-bold text-gray-900 mb-3">Remplissez le datif :</h4>
                  <div>
                    <p className="text-gray-700">mit ___ (neu) Freunden</p>
                    <p className="font-mono text-orange-700 font-semibold">→ mit neuen Freunden</p>
                    <span className="text-xs text-gray-600">(faible, pluriel datif)</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Verdict */}
          <section className="mb-10">
            <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-sm">5</span>
                </div>
                <h2 className="text-xl font-bold text-orange-900">Verdict</h2>
              </div>

              <div className="space-y-3 text-gray-700">
                <p>
                  Si vous savez lire l&apos;article, vous connaîtrez l&apos;armure de l&apos;adjectif :
                </p>
                <ul className="space-y-2 ml-4">
                  <li>• <strong>Article fort → adjectif léger.</strong></li>
                  <li>• <strong>Article léger → adjectif mixte.</strong></li>
                  <li>• <strong>Pas d'article → adjectif complet.</strong></li>
                </ul>
                <div className="mt-4 p-4 bg-white rounded-lg border border-orange-300">
                  <p className="font-semibold text-orange-800">
                    Entraînez-vous régulièrement : la régularité vaut mieux que les listes apprises par cœur !
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Bouton retour */}
          <div className="text-center pb-8">
            <Link to="/formation/allemand-grammaire">
              <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Retour à la grammaire
            </Button>
            </Link>
          </div>
      </div>
      </main>
    </div>
  );
};

export default DeclinaisonsPage; 