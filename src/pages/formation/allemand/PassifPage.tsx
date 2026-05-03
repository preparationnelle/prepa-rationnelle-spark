import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, ChevronRight } from 'lucide-react';

const PassifPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="flex items-center gap-1 hover:text-orange-600 transition-colors">
              <BookOpen className="h-4 w-4" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-2" />
            <Link to="/formations" className="hover:text-orange-600 transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-2" />
            <Link to="/formation/allemand" className="hover:text-orange-600 transition-colors">
              Formation Allemand
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-2" />
            <Link to="/formation/allemand-grammaire" className="hover:text-orange-600 transition-colors">
              Grammaire
        </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-2" />
            <span className="text-gray-900">Le Passif</span>
      </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-orange-100">
                <BookOpen className="h-8 w-8 text-orange-600" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Le Passif en Allemand
            </h1>
            <p className="text-lg text-gray-600">
              Formation et utilisation du passif en allemand
            </p>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="py-8">
        <div className="container mx-auto px-4 max-w-4xl">

          {/* 1. Quand l'utiliser ? */}
          <section className="mb-8">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">1. Quand l'utiliser ?</h2>

              <p className="text-gray-700 mb-4">
                Le passif sert à mettre l'objet ou l'action au premier plan ; l'agent est secondaire, parfois absent.
              </p>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 bg-white">
                  <thead>
                    <tr className="bg-orange-50">
                      <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">Passif</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">Construction</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">Sens principal</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">Fréquence</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium text-gray-900">Action (Vorgangspassiv)</td>
                      <td className="border border-gray-300 p-3 text-gray-700">werden + Part. II</td>
                      <td className="border border-gray-300 p-3 text-gray-700">L'action se déroule</td>
                      <td className="border border-gray-300 p-3 text-gray-700">Très courant</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium text-gray-900">État (Zustandspassiv)</td>
                      <td className="border border-gray-300 p-3 text-gray-700">sein + Part. II</td>
                      <td className="border border-gray-300 p-3 text-gray-700">Le résultat est atteint</td>
                      <td className="border border-gray-300 p-3 text-gray-700">Moins courant, impossible aux temps composés du passé</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium text-gray-900">Modal-passif</td>
                      <td className="border border-gray-300 p-3 text-gray-700">Modal + Part. II + werden</td>
                      <td className="border border-gray-300 p-3 text-gray-700">Ce qui doit/peut/devrait se faire</td>
                      <td className="border border-gray-300 p-3 text-gray-700">Très fréquent à l'écrit</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-300">
                <p className="text-sm text-gray-700">
                  <strong>Vue d'ensemble rapide :</strong>
                  <br />• werden = work in progress.
                  <br />• sein = statut acquis.
                  <br />• Modal = possibilité / nécessité de l'action.
                </p>
              </div>
            </div>
          </section>

          {/* 2. Tableaux récapitulatifs */}
          <section className="mb-8">
            <div className="bg-white rounded-lg border border-gray-200 p-6">
              <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">2. Tableaux récapitulatifs</h2>

              {/* 2a. Vorgangspassiv (action) */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                  2a. Vorgangspassiv (action) — modèle <span className="font-mono">das Haus</span>
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 bg-white">
                    <thead>
                      <tr className="bg-orange-50">
                        <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">Temps / Mode</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">Forme à la 3ᵉ p. sg.</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">Traduction possible</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium text-gray-900">Présent</td>
                        <td className="border border-gray-300 p-3 font-mono text-gray-700">Das Haus wird gebaut.</td>
                        <td className="border border-gray-300 p-3 text-gray-700">La maison est en train d'être construite / on construit la maison.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium text-gray-900">Prétérit</td>
                        <td className="border border-gray-300 p-3 font-mono text-gray-700">Das Haus wurde gebaut.</td>
                        <td className="border border-gray-300 p-3 text-gray-700">La maison fut / était construite.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium text-gray-900">Parfait</td>
                        <td className="border border-gray-300 p-3 font-mono text-gray-700">Das Haus ist gebaut worden.</td>
                        <td className="border border-gray-300 p-3 text-gray-700">La maison a été construite.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium text-gray-900">Plus-que-parfait</td>
                        <td className="border border-gray-300 p-3 font-mono text-gray-700">Das Haus war gebaut worden.</td>
                        <td className="border border-gray-300 p-3 text-gray-700">La maison avait été construite.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium text-gray-900">Futur I</td>
                        <td className="border border-gray-300 p-3 font-mono text-gray-700">Das Haus wird gebaut werden.</td>
                        <td className="border border-gray-300 p-3 text-gray-700">La maison sera construite.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium text-gray-900">Infinitif présent</td>
                        <td className="border border-gray-300 p-3 font-mono text-gray-700">gebaut werden</td>
                        <td className="border border-gray-300 p-3 text-gray-700">être construit(e)</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium text-gray-900">Infinitif passé</td>
                        <td className="border border-gray-300 p-3 font-mono text-gray-700">gebaut worden sein</td>
                        <td className="border border-gray-300 p-3 text-gray-700">avoir été construit(e)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-3 p-3 bg-gray-100 rounded-lg border border-gray-300">
                  <p className="text-sm text-gray-700 italic">
                    <strong>Notice style :</strong> au participe II de werden on écrit worden (sans ge-) après un autre participe II pour alléger : ist gebaut worden.
                  </p>
                </div>
              </div>

              {/* 2b. Zustandspassiv (état) */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                  2b. Zustandspassiv (état) — même modèle
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 bg-white">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">Temps</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">Forme</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">Idée</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">Exemple</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium text-gray-900">Présent</td>
                        <td className="border border-gray-300 p-3 font-mono text-gray-700">ist gebaut</td>
                        <td className="border border-gray-300 p-3 text-gray-700">état actuel</td>
                        <td className="border border-gray-300 p-3 font-mono text-gray-700">Das Haus ist gebaut.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium text-gray-900">Prétérit</td>
                        <td className="border border-gray-300 p-3 font-mono text-gray-700">war gebaut</td>
                        <td className="border border-gray-300 p-3 text-gray-700">état passé</td>
                        <td className="border border-gray-300 p-3 font-mono text-gray-700">Das Haus war gebaut.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium text-gray-900">Futur</td>
                        <td className="border border-gray-300 p-3 font-mono text-gray-700">wird gebaut sein</td>
                        <td className="border border-gray-300 p-3 text-gray-700">état futur</td>
                        <td className="border border-gray-300 p-3 font-mono text-gray-700">Das Haus wird gebaut sein.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className="mt-3 p-3 bg-gray-100 rounded-lg border border-gray-300">
                  <p className="text-sm text-gray-700 italic">(Pas de parfait / plus-que-parfait.)</p>
                </div>
              </div>

              {/* 2c. Passif avec modal */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4 border-b border-gray-300 pb-2">
                  2c. Passif avec modal
                </h3>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 bg-white">
                    <thead>
                      <tr className="bg-orange-50">
                        <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">Modal</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">Forme</th>
                        <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">Sens</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium text-gray-900">dürfen</td>
                        <td className="border border-gray-300 p-3 font-mono text-gray-700">Hier darf geraucht werden.</td>
                        <td className="border border-gray-300 p-3 text-gray-700">Ici, il est permis de fumer.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium text-gray-900">müssen</td>
                        <td className="border border-gray-300 p-3 font-mono text-gray-700">Der Antrag muss bearbeitet werden.</td>
                        <td className="border border-gray-300 p-3 text-gray-700">La demande doit être traitée.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-medium text-gray-900">wollen</td>
                        <td className="border border-gray-300 p-3 font-mono text-gray-700">Die Jugend will verstanden werden.</td>
                        <td className="border border-gray-300 p-3 text-gray-700">La jeunesse veut être comprise.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* 3. Gérer l'agent ou le moyen */}
          <section className="mb-10">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-sm">3</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">Gérer l'agent ou le moyen</h2>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 bg-white">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">Fonction</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">Préposition</th>
                      <th className="border border-gray-300 p-3 text-left font-semibold text-gray-900">Exemple</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium text-gray-900">Agent (humain ou personnifié)</td>
                      <td className="border border-gray-300 p-3 text-gray-700">von + Dat.</td>
                      <td className="border border-gray-300 p-3 font-mono text-gray-700">Der Text wird von den Studenten übersetzt.</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-3 font-medium text-gray-900">Moyen / cause</td>
                      <td className="border border-gray-300 p-3 text-gray-700">durch + Acc.</td>
                      <td className="border border-gray-300 p-3 font-mono text-gray-700">Die Meldung wurde durch die Medien verbreitet.</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="mt-4 p-3 bg-red-50 rounded-lg border border-red-200">
                <p className="text-sm text-red-800">
                  <strong>JAMAIS bei !</strong> (faux calque de l'anglais by).
                </p>
              </div>
            </div>
          </section>

          {/* 4. Règles clés & astuces */}
          <section className="mb-10">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-sm">4</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">Règles clés & astuces</h2>
              </div>

              <div className="space-y-4">
                <div className="p-4 bg-white rounded-lg border border-gray-300">
                  <h4 className="font-bold text-gray-900 mb-2">Passif impersonnel :</h4>
                  <p className="text-gray-700 mb-2">
                    verbe sans COD accusatif → sujet es factice :
                  </p>
                  <div className="bg-gray-50 p-3 rounded border-l-4 border-orange-500">
                    <p className="font-mono text-gray-800 mb-1">Es wurde viel gelacht.</p>
                    <p className="text-sm text-gray-700">→ « On a beaucoup ri. »</p>
                  </div>
                  <p className="text-sm text-gray-600 mt-1">
                    es disparaît en subordonnée : <span className="font-mono">... dass viel gelacht wurde.</span>
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg border border-gray-300">
                  <h4 className="font-bold text-gray-900 mb-2">Choisir entre état et action :</h4>
                  <p className="text-gray-700">
                    si vous pouvez ajouter « déjà » en français → sein.
                  </p>
                </div>

                <div className="p-4 bg-white rounded-lg border border-gray-300">
                  <h4 className="font-bold text-gray-900 mb-2">Participe II sans ge- :</h4>
                  <p className="text-gray-700">
                    verbes en -ieren (<span className="font-mono">installieren → installiert</span>) et verbes à préverbe inséparable (<span className="font-mono">verkaufen → verkauft</span>).
                  </p>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-white rounded-lg border border-gray-300">
                    <h4 className="font-bold text-gray-900 mb-2">Subjonctif I (discours indirect) :</h4>
                    <p className="font-mono text-gray-800">Er sagt, das Haus werde gebaut.</p>
                  </div>

                  <div className="p-4 bg-white rounded-lg border border-gray-300">
                    <h4 className="font-bold text-gray-900 mb-2">Subjonctif II (irréel) :</h4>
                    <p className="font-mono text-gray-800">Wenn Hilfe da wäre, würde das Problem schneller gelöst.</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 5. Exercices d'application */}
          <section className="mb-10">
            <div className="bg-gray-50 rounded-lg p-6 border border-gray-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-sm">5</span>
                </div>
                <h2 className="text-xl font-bold text-gray-900">Exercices d'application (corrigé immédiat)</h2>
              </div>

              {/* Exercice A */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">A. Transformer à la voix passive-action</h3>

                <div className="space-y-4">
                  {[
                    { num: 1, phrase: "Man öffnet das Fenster.", answer: "Das Fenster wird geöffnet." },
                    { num: 2, phrase: "Die Lehrer korrigierten die Klausuren.", answer: "Die Klausuren wurden korrigiert." },
                    { num: 3, phrase: "Jemand hat den Fehler entdeckt.", answer: "Der Fehler ist entdeckt worden." },
                    { num: 4, phrase: "Die Polizei wird den Verdächtigen verhaften.", answer: "Der Verdächtige wird verhaftet werden." }
                  ].map((item) => (
                    <div key={item.num} className="bg-white p-4 rounded-lg border border-gray-300">
                      <div className="flex items-center gap-3 mb-2">
                        <span className="font-bold text-orange-600">#{item.num}</span>
                        <span className="text-gray-700">{item.phrase}</span>
                      </div>
                      <div className="bg-green-50 p-3 rounded border-l-4 border-green-500">
                        <span className="font-mono text-green-800 font-semibold">{item.answer}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Exercice B */}
              <div className="mb-8">
                <h3 className="text-lg font-bold text-gray-900 mb-4">B. Choisir werden ou sein</h3>

            <div className="space-y-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-300">
                    <div className="mb-3">
                      <span className="text-gray-700">Complétez :</span>
                    </div>
                    <div className="space-y-2 mb-4">
                      <div>1. Die Tür ___ geschlossen (résultat visible).</div>
                      <div>2. Die Tür ___ gerade geschlossen (action).</div>
                    </div>
                    <div className="bg-green-50 p-3 rounded border-l-4 border-green-500">
                      <span className="font-semibold text-green-800">Solution :</span>
                      <div className="mt-1">
                        <div>1. <span className="font-mono">ist</span></div>
                        <div>2. <span className="font-mono">wird</span></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Exercice C */}
              <div>
                <h3 className="text-lg font-bold text-gray-900 mb-4">C. Modal + passif</h3>

                <div className="bg-white p-4 rounded-lg border border-gray-300">
                  <div className="mb-3">
                    <span className="text-gray-700">Traduisez : « Ces documents doivent être archivés immédiatement. »</span>
                  </div>
                  <div className="bg-green-50 p-3 rounded border-l-4 border-green-500">
                    <span className="font-semibold text-green-800">Solution :</span>
                    <div className="mt-1">
                      <span className="font-mono text-green-900">Diese Dokumente müssen sofort archiviert werden.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* 6. Verdict */}
          <section className="mb-10">
            <div className="bg-orange-50 rounded-lg p-6 border border-orange-200">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-orange-600 font-bold text-sm">6</span>
                </div>
                <h2 className="text-xl font-bold text-blue-900">Verdict</h2>
              </div>

              <div className="space-y-3 text-gray-700">
                <p>• <strong>werden + Part. II :</strong> action en cours ou prévue.</p>
                <p>• <strong>sein + Part. II :</strong> état obtenu.</p>
                <p>• <strong>Modal + Part. II + werden :</strong> obligation/possibilité au passif.</p>
                <p>• <strong>Agent → von, moyen → durch.</strong></p>
                <p>• <strong>Maîtrisez le passif impersonnel</strong> pour traduire le on français.</p>
              </div>

              <div className="mt-4 p-4 bg-white rounded-lg border border-orange-300">
                <p className="font-semibold text-blue-800">
                  Entraînement rapide : prenez 5 phrases actives de vos notes, convertissez-les en passif-action, puis dites-les à voix haute en ajoutant l'agent (von...) ou en l'omettant. Votre automatisme passera au niveau supérieur !
                </p>
              </div>
            </div>
          </section>

          {/* Bouton retour */}
          <div className="text-center pb-8">
            <Link to="/formation/allemand-grammaire">
              <Button variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-50">
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

export default PassifPage; 