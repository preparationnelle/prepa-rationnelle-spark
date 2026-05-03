import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, ChevronRight, Target, FileText } from 'lucide-react';

const RelativePage = () => {
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
                <h1 className="text-3xl font-bold text-gray-900">Les Propositions Relatives en Allemand</h1>
                <p className="text-gray-600 mt-1">Maîtrise des pronoms relatifs et leur utilisation</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* 1. Les pronoms relatifs de base */}
          <section className="mb-10">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-sm">1</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  Les pronoms relatifs de base
                </h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 bg-white">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">Cas \ Genre</th>
                      <th className="border border-gray-300 p-3 text-center font-semibold text-gray-900">Masculin</th>
                      <th className="border border-gray-300 p-3 text-center font-semibold text-gray-900">Féminin</th>
                      <th className="border border-gray-300 p-3 text-center font-semibold text-gray-900">Neutre</th>
                      <th className="border border-gray-300 p-3 text-center font-semibold text-gray-900">Pluriel</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium text-gray-900">Nominatif</td>
                      <td className="border border-gray-300 p-3 font-mono text-gray-700 text-center">der</td>
                      <td className="border border-gray-300 p-3 font-mono text-gray-700 text-center">die</td>
                      <td className="border border-gray-300 p-3 font-mono text-gray-700 text-center">das</td>
                      <td className="border border-gray-300 p-3 font-mono text-gray-700 text-center">die</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium text-gray-900">Accusatif</td>
                      <td className="border border-gray-300 p-3 font-mono text-gray-700 text-center">den</td>
                      <td className="border border-gray-300 p-3 font-mono text-gray-700 text-center">die</td>
                      <td className="border border-gray-300 p-3 font-mono text-gray-700 text-center">das</td>
                      <td className="border border-gray-300 p-3 font-mono text-gray-700 text-center">die</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium text-gray-900">Datif</td>
                      <td className="border border-gray-300 p-3 font-mono text-gray-700 text-center">dem</td>
                      <td className="border border-gray-300 p-3 font-mono text-gray-700 text-center">der</td>
                      <td className="border border-gray-300 p-3 font-mono text-gray-700 text-center">dem</td>
                      <td className="border border-gray-300 p-3 font-mono text-gray-700 text-center">denen</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium text-gray-900">Génitif</td>
                      <td className="border border-gray-300 p-3 font-mono text-gray-700 text-center">dessen</td>
                      <td className="border border-gray-300 p-3 font-mono text-gray-700 text-center">deren</td>
                      <td className="border border-gray-300 p-3 font-mono text-gray-700 text-center">dessen</td>
                      <td className="border border-gray-300 p-3 font-mono text-gray-700 text-center">deren</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 p-4 bg-orange-50 rounded-lg border border-orange-200">
                <p className="text-sm text-orange-800">
                  <strong>À retenir :</strong> Identiques à l'article défini der/die/das - sauf datif pluriel (denen) et génitif (dessen/deren).
                </p>
              </div>
            </div>
          </section>

          {/* 2. Choisir le bon pronom relatif */}
          <section className="mb-10">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-sm">2</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  Choisir le bon pronom relatif
                </h2>
              </div>

            <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg border border-gray-300">
                  <h4 className="font-bold text-gray-900 mb-2">Genre = celui de l'antécédent</h4>
                  <p className="text-gray-700 mb-3">Le pronom relatif s'accorde en genre avec le nom qu'il remplace.</p>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-mono text-gray-800">das Haus, das ich kaufe (neutre → das)</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-300">
                  <h4 className="font-bold text-gray-900 mb-2">Cas = fonction dans la relative</h4>
                  <ul className="space-y-2 text-gray-700">
                    <li>• <strong>Sujet</strong> → nominatif</li>
                    <li>• <strong>COD</strong> → accusatif</li>
                    <li>• <strong>COI</strong> ou après préposition datif → datif</li>
                    <li>• <strong>Complément du nom</strong> → génitif</li>
            </ul>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-300">
                  <h4 className="font-bold text-gray-900 mb-2">Génitif : dessen/deren</h4>
                  <p className="text-gray-700 mb-3">Le substantif qui suit n'a pas d'article.</p>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <p className="font-mono text-gray-800">Die Firma, deren Chef krank ist...</p>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-300">
                  <h4 className="font-bold text-gray-900 mb-2">Préposition + relatif</h4>
                  <p className="text-gray-700 mb-3">La préposition précède le pronom relatif.</p>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-mono text-gray-800">die Couch, auf der er liegt</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-2">Pour les choses → on peut employer <strong>wo-</strong> + prép. (worauf)</p>
                </div>
              </div>
            </div>
          </section>
          {/* 3. Remplacer « dont » en allemand */}
          <section className="mb-10">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-sm">3</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  Remplacer « dont » en allemand
                </h2>
          </div>

            <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 bg-white">
                  <thead>
                  <tr className="bg-orange-50">
                      <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">Valeur de « dont »</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">Construction allemande</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">Exemple</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium text-gray-900">Complément du nom</td>
                      <td className="border border-gray-300 p-3 font-mono text-gray-700">dessen / deren</td>
                      <td className="border border-gray-300 p-3 text-gray-700">Der Film, dessen Regisseur berühmt ist...</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium text-gray-900">COI avec von</td>
                      <td className="border border-gray-300 p-3 font-mono text-gray-700">von dem / denen → wovon</td>
                      <td className="border border-gray-300 p-3 text-gray-700">Die Idee, von der ich spreche...</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium text-gray-900">Autre préposition</td>
                      <td className="border border-gray-300 p-3 font-mono text-gray-700">prép. + relatif</td>
                      <td className="border border-gray-300 p-3 text-gray-700">Die Stadt, in der er wohnt...</td>
                    </tr>
                  </tbody>
                </table>
            </div>
            </div>
          </section>

          {/* 4. Exercices d'application */}
          <section className="mb-10">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-sm">4</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  Exercices d'application
                </h2>
              </div>

              <div className="space-y-6">
                <div className="bg-white p-4 rounded-lg border border-gray-300">
                  <h4 className="font-bold text-gray-900 mb-3">Complétez avec le pronom relatif approprié :</h4>
                  <div className="space-y-3">
                    <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                      <span className="font-bold text-orange-600 min-w-[2rem]">#1</span>
                      <span className="flex-1 text-gray-700">Das Gesetz, ... der Bundestag verabschiedet hat</span>
                      <span className="font-mono text-orange-700 font-bold bg-orange-100 px-3 py-1 rounded">das</span>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                      <span className="font-bold text-orange-600 min-w-[2rem]">#2</span>
                      <span className="flex-1 text-gray-700">Die Freundin, ... ich ein Buch geschenkt habe</span>
                      <span className="font-mono text-orange-700 font-bold bg-orange-100 px-3 py-1 rounded">der</span>
                    </div>
                    <div className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg">
                      <span className="font-bold text-orange-600 min-w-[2rem]">#3</span>
                      <span className="flex-1 text-gray-700">Die Kinder, ... ich bei den Hausaufgaben half</span>
                      <span className="font-mono text-orange-700 font-bold bg-orange-100 px-3 py-1 rounded">denen</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white p-4 rounded-lg border border-gray-300">
                  <h4 className="font-bold text-gray-900 mb-3">Traduisez avec « dont » :</h4>
                  <div className="space-y-3">
                    <div className="border border-gray-200 rounded-lg p-4">
                      <div className="mb-2">
                        <span className="font-semibold text-gray-800">Français :</span>
                        <span className="ml-2 text-gray-700">"Le livre dont je t'ai parlé"</span>
                      </div>
              <div>
                        <span className="font-semibold text-orange-700">Allemand :</span>
                        <span className="ml-2 font-mono text-orange-800">"Das Buch, von dem ich dir erzählt habe"</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Règles et mémos éclair */}
          <section className="mb-10">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-sm">5</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  Règles et mémos éclair
                </h2>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border border-gray-300">
                  <h4 className="font-bold text-gray-900 mb-2">Ponctuation des relatives</h4>
                  <p className="text-gray-700 mb-2">Virgules avant et après la proposition relative quand elle s'insère dans la phrase.</p>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-mono text-gray-800">Der Roman, den ich liebe, ist alt.</p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-lg border border-gray-300">
                  <h4 className="font-bold text-gray-900 mb-2">Verbe à la fin</h4>
                  <p className="text-gray-700 mb-2">Dans les propositions subordonnées (dont les relatives), le verbe se place toujours à la fin.</p>
                  <div className="bg-orange-50 p-3 rounded-lg">
                    <p className="font-mono text-gray-800">..., die Stadt, die ich besuche.</p>
                  </div>
                </div>

                <div className="p-4 bg-white rounded-lg border border-gray-300">
                  <h4 className="font-bold text-gray-900 mb-2">Antécédent à distance</h4>
                  <p className="text-gray-700 mb-2">Terminez la proposition principale quand une relative longue couperait le groupe verbal.</p>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p className="font-mono text-gray-800">Ich suche das Buch nicht, das du empfohlen hast.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6. Verdict */}
          <section className="mb-10">
            <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-sm">6</span>
                </div>
                <h2 className="text-xl font-bold text-orange-900">Verdict</h2>
              </div>

              <div className="space-y-3 text-gray-700">
                <p>• <strong>Genre = antécédent, cas = fonction ;</strong> retenez surtout dessen/deren et denen.</p>
                <p>• <strong>« Dont » → génitif</strong> ou construction avec préposition.</p>
                <p>• <strong>Prépositions + relatifs :</strong> préposition précède toujours le pronom relatif.</p>

                <div className="mt-4 p-4 bg-white rounded-lg border border-orange-300">
                  <p className="font-semibold text-orange-800">
                    Entraînez-vous régulièrement : la régularité vaut mieux que les listes apprises par cœur !
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Boutons d'action */}
          <div className="text-center pb-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/formation/allemand-relative/exercices">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 flex items-center gap-2">
                  <Target className="h-5 w-5" />
                  Exercices interactifs
                </Button>
              </Link>
              <Link to="/formation/allemand-grammaire">
                <Button variant="outline" className="border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Retour à la grammaire
                </Button>
              </Link>
            </div>
          </div>
          {/* 3. Choisir le bon pronom */}
          <section className="mb-10">
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">3. Choisir le bon pronom</h2>

            <div className="space-y-4">
              <div>
                <p className="text-gray-700 mb-3"><strong>Genre =</strong> celui de l'antécédent</p>
                <div className="bg-gray-50 p-3 rounded-lg mb-4 border-l-4 border-orange-300">
                  <p className="font-mono text-gray-800">das Haus, das ich kaufe (neutre → das).</p>
                </div>
              </div>

              <div>
                <p className="text-gray-700 mb-3"><strong>Cas =</strong> fonction dans la relative</p>
                <ul className="list-disc list-inside space-y-2 text-gray-700 mb-4">
                  <li>Sujet → nominatif</li>
                  <li>COD → accusatif</li>
                  <li>COI ou après prép. datif → datif</li>
                  <li>Complément du nom → génitif</li>
              </ul>
              </div>

              <div>
                <p className="text-gray-700 mb-3"><strong>Génitif :</strong> le substantif qui suit n'a pas d'article.</p>
                <div className="bg-orange-50 p-3 rounded-lg mb-4 border-l-4 border-orange-300">
                  <p className="font-mono text-gray-800">Die Firma, deren Chef krank ist ...</p>
                </div>
              </div>

              <div>
                <p className="text-gray-700 mb-3"><strong>Préposition + relatif :</strong> la préposition précède le pronom.</p>
                <div className="bg-gray-50 p-3 rounded-lg mb-4 border-l-4 border-orange-300">
                  <p className="font-mono text-gray-800">die Couch, auf der er liegt</p>
                </div>
                <p className="text-sm text-gray-600">Pour les choses → on peut employer <strong>wo-</strong> + prép. (worauf).</p>
              </div>
            </div>
          </div>

          {/* 4. Remplacer « dont » */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">4. Remplacer « dont »</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 mb-6">
                <thead>
                  <tr className="bg-orange-50">
                    <th className="border border-gray-300 p-3 text-left font-bold text-gray-900">Valeur de « dont »</th>
                    <th className="border border-gray-300 p-3 text-left font-bold text-gray-900">Construction allemande</th>
                    <th className="border border-gray-300 p-3 text-left font-bold text-gray-900">Exemple</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 text-gray-700">Complément du nom</td>
                    <td className="border border-gray-300 p-3 text-gray-700">dessen / deren</td>
                    <td className="border border-gray-300 p-3 text-gray-700">Der Film, dessen Regisseur berühmt ist...</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 text-gray-700">COI avec von</td>
                    <td className="border border-gray-300 p-3 text-gray-700">von dem / denen → wovon</td>
                    <td className="border border-gray-300 p-3 text-gray-700">Die Idee, von der ich spreche / wovon ich spreche...</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 text-gray-700">Complément avec prép. autre que von</td>
                    <td className="border border-gray-300 p-3 text-gray-700">prép. + relatif</td>
                    <td className="border border-gray-300 p-3 text-gray-700">Die Stadt, in der er wohnt...</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 5. Relatives participiales */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">5. Relatives participiales</h2>

            <div className="space-y-4">
              <p className="text-gray-700">
                On remplace <strong>der/die/das ... wurde_hat_ist + Part. II</strong> par un groupe adjectival devant le nom.
              </p>

              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-300">
                <p className="text-gray-700 mb-2">Le participe ou l'adjectif se décline selon le groupe nominal.</p>
                <div className="bg-white p-3 rounded border-l-4 border-orange-300">
                  <p className="font-mono text-gray-800 mb-2">Der Artikel, der im Mai veröffentlicht wurde</p>
                  <p className="text-orange-700 font-semibold">→ Der im Mai veröffentlichte Artikel</p>
                </div>
              </div>
            </div>
          </div>

          {/* 6. Exercices & corrigés */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">6. Exercices & corrigés</h2>

            {/* Exercice A */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4 text-gray-800">A. Complétez avec le pronom relatif approprié</h3>

              <div className="space-y-3">
                {[
                  { num: 1, phrase: "Das Gesetz, ... der Bundestag im November verabschiedet hat, ...", answer: "das" },
                  { num: 2, phrase: "Die Freundin, ... ich ein Buch geschenkt habe, ...", answer: "der" },
                  { num: 3, phrase: "Die Kinder, ... ich bei den Hausaufgaben half, ...", answer: "denen" },
                  { num: 4, phrase: "Der Lehrer, ... ich nach dem Problem fragte, ...", answer: "den" },
                  { num: 5, phrase: "Das Praktikum, ... sie sich interessiert, ...", answer: "für das (wofür possible)" },
                  { num: 6, phrase: "Wer ist die Person, mit ... du gesprochen hast?", answer: "der" },
                  { num: 7, phrase: "... Freund Max, ... in der Heinrich-Heine-Straße wohnt.", answer: "der" },
                  { num: 8, phrase: "... Freund Max, ... ich die CD zurückbringen muss.", answer: "dem" },
                  { num: 9, phrase: "... Freund Max, ... du doch auch kennst.", answer: "den" },
                  { num: 10, phrase: "Gillian und David, ... Mutter krank ist, ...", answer: "deren" },
                  { num: 11, phrase: "Die Stadt, ... ich hinfahren möchte, ...", answer: "in die" },
                  { num: 12, phrase: "Ich habe einen Hund, ... Augen blau sind.", answer: "dessen" },
                  { num: 13, phrase: "Neufundländer sind Hunde, ... Leute im Wasser retten.", answer: "die" },
                  { num: 14, phrase: "Matthias, mit ... Bruder ich befreundet bin, ...", answer: "dessen" },
                  { num: 15, phrase: "Der Erste Weltkrieg, ... wir 2014 gedenken, ...", answer: "dessen" }
                ].map((item) => (
                  <div key={item.num} className="flex items-center gap-4 p-3 bg-gray-50 rounded-lg border-l-4 border-orange-300">
                    <span className="font-bold text-orange-600 min-w-[2rem]">#{item.num}</span>
                    <span className="flex-1 text-gray-700">{item.phrase}</span>
                    <span className="font-mono text-orange-700 font-bold bg-orange-100 px-3 py-1 rounded">
                      {item.answer}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Exercice B */}
            <div className="mb-8">
              <h3 className="text-lg font-bold mb-4 text-gray-800">B. Traduisez les phrases avec « dont »</h3>

              <div className="space-y-4">
                {[
                  { fr: "Ce livre, dont le titre est Au Bonheur des Dames, ...", de: "Dieses Buch, dessen Titel „Au Bonheur des Dames\" ist, ..." },
                  { fr: "Les enfants dont je m'occupe, ...", de: "Die Kinder, um die ich mich kümmere, ..." },
                  { fr: "L'amie dont je te parle, ...", de: "Die Freundin, von der ich dir erzähle, ..." },
                  { fr: "L'amie dont j'ai pris le livre, ...", de: "Die Freundin, deren Buch ich genommen habe, ..." },
                  { fr: "L'événement dont je me souviens, ...", de: "Das Ereignis, an das ich mich erinnere, ..." }
                ].map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                    <div className="mb-2">
                      <span className="font-semibold text-gray-800">Français :</span>
                      <span className="ml-2 text-gray-700">{item.fr}</span>
                    </div>
                    <div>
                      <span className="font-semibold text-orange-700">Allemand :</span>
                      <span className="ml-2 font-mono text-orange-800">{item.de}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Exercice C */}
            <div>
              <h3 className="text-lg font-bold mb-4 text-gray-800">C. Transformez en relative participiale</h3>

              <div className="space-y-4">
                {[
                  {
                    original: "Der Roman, der von diesem Autor geschrieben wurde, ...",
                    participial: "Der von diesem Autor geschriebene Roman ..."
                  },
                  {
                    original: "Die Vögel, die den ganzen Tag singen, ...",
                    participial: "Die den ganzen Tag singenden Vögel ..."
                  }
                ].map((item, index) => (
                  <div key={index} className="border border-gray-200 rounded-lg p-4 bg-gray-50">
                    <div className="mb-3">
                      <span className="font-semibold text-gray-700">Phrase originale :</span>
                      <div className="mt-1 p-2 bg-white rounded border-l-4 border-orange-300 font-mono text-gray-800">
                        {item.original}
                      </div>
                    </div>
                    <div>
                      <span className="font-semibold text-orange-700">Version participiale :</span>
                      <div className="mt-1 p-2 bg-orange-50 rounded border-l-4 border-orange-300 font-mono text-orange-800">
                        {item.participial}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* 7. Verdict */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">7. Verdict</h2>

            <div className="space-y-4 text-gray-700">
              <p>• <strong>Genre = antécédent, cas = fonction ;</strong> retenez surtout dessen/deren et denen.</p>
              <p>• <strong>« Dont » → génitif</strong> ou construction avec préposition.</p>
              <p>• <strong>Allégez vos phrases</strong> avec la relative participiale : participe + déclinaison devant le nom.</p>

              <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-300 mt-6">
                <p className="font-semibold text-orange-700 mb-2">Entraînement express :</p>
                <p>Prenez trois phrases françaises avec « dont », deux avec « sur lequel / à laquelle », une avec « où », et traduisez-les à l'oral ; vérifiez ensuite avec la grille ci-dessus.</p>
                <p className="font-bold text-orange-800 mt-2">Bonne pratique !</p>
              </div>
            </div>
          </div>

          {/* Boutons d'action */}
          <div className="text-center pb-8">
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link to="/formation/allemand-relative/exercices">
                <Button className="bg-orange-600 hover:bg-orange-700 text-white px-6 py-3 flex items-center gap-2">
                  <BookOpen className="h-5 w-5" />
                  Exercices interactifs
                </Button>
              </Link>
              <Link to="/formation/allemand-grammaire">
                <Button variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-50 px-6 py-3 flex items-center gap-2">
                  <ArrowLeft className="h-4 w-4" />
                  Retour à la grammaire
                </Button>
              </Link>
            </div>
          </div>
          </section>
        </div>
      </main>
    </div>
  );
};

export default RelativePage; 