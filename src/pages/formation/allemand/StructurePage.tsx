import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, ChevronRight } from 'lucide-react';

const StructurePage = () => {
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
            <span className="text-gray-900">Structure de la Phrase</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-orange-100">
                <BookOpen className="h-8 w-8 text-orange-600" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Structure de la Phrase Allemande
            </h1>
            <p className="text-lg text-gray-600">
              Ordre des mots et structure des phrases allemandes
            </p>
          </div>
        </div>
      </header>



      {/* Section Contenu */}
      <section className="py-8 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">

          {/* Vue d'Ensemble : Les Trois Positions du Verbe */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Vue d'Ensemble : Les Trois Positions du Verbe</h2>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300">
                <thead>
                  <tr className="bg-orange-100">
                    <th className="border border-gray-300 p-3 text-left font-bold">Position</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Contexte</th>
                    <th className="border border-gray-300 p-3 text-left font-bold">Exemple</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold bg-gray-50">1ère</td>
                    <td className="border border-gray-300 p-3">Questions fermées, Impératif</td>
                    <td className="border border-gray-300 p-3 font-mono">Kommst du mit?</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold bg-gray-50">2ème</td>
                    <td className="border border-gray-300 p-3">Phrases déclaratives, Questions ouvertes</td>
                    <td className="border border-gray-300 p-3 font-mono">Ich komme morgen mit.</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 p-3 font-semibold bg-gray-50">Dernière</td>
                    <td className="border border-gray-300 p-3">Propositions subordonnées</td>
                    <td className="border border-gray-300 p-3 font-mono">Ich weiß, dass du mitkommst.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Position 1 : Verbe en Première Position */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8 border border-orange-100">
            <h2 className="text-2xl font-bold mb-6 text-orange-700 border-b border-orange-200 pb-2">Position 1 : Verbe en Première Position</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-3 text-orange-700">Questions fermées (Ja/Nein-Fragen)</h3>
                <p className="text-gray-700 mb-3"><strong>Structure :</strong> VERBE + SUJET + AUTRES ÉLÉMENTS + ?</p>
                <div className="bg-orange-50 p-4 rounded-lg mb-4">
                  <p className="text-sm text-orange-800 mb-2">Exemples pratiques :</p>
                  <ul className="space-y-2 font-mono text-orange-900">
                    <li>• Studierst du Medizin an der Universität?</li>
                    <li>• Haben Sie schon einmal Deutschland besucht?</li>
                    <li>• Wird das Konzert heute Abend stattfinden?</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 text-orange-700">Mode impératif</h3>
                <p className="text-gray-700 mb-3"><strong>Structure :</strong> VERBE + COMPLÉMENTS + !</p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <p className="text-sm text-green-800 mb-2 font-semibold">Forme de politesse :</p>
                    <ul className="space-y-1 font-mono text-green-900 text-sm">
                      <li>• Kommen Sie bitte in mein Büro!</li>
                      <li>• Helfen Sie mir mit diesem Problem!</li>
                    </ul>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg">
                    <p className="text-sm text-orange-800 mb-2 font-semibold">Forme familière :</p>
                    <ul className="space-y-1 font-mono text-orange-900 text-sm">
                      <li>• Mach deine Aufgaben sofort!</li>
                      <li>• Erzähl mir von deinem Wochenende!</li>
                    </ul>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 text-orange-700">Conditionnelles sans "wenn" (Style soutenu)</h3>
                <p className="text-gray-700 mb-3"><strong>Structure :</strong> VERBE (Subjonctif) + SUJET + AUTRES + , + CONSÉQUENCE</p>

                <div className="bg-purple-50 p-4 rounded-lg mb-4">
                  <p className="text-sm text-purple-800 mb-3 font-semibold">Transformations :</p>
                  <div className="space-y-3">
                    <div className="border-l-4 border-purple-500 pl-4">
                      <p className="font-mono text-gray-800">Wenn du fleißig lernst, wirst du Erfolg haben.</p>
                      <p className="text-purple-700 font-semibold">→ Lernst du fleißig, wirst du Erfolg haben.</p>
                    </div>
                    <div className="border-l-4 border-purple-500 pl-4">
                      <p className="font-mono text-gray-800">Wenn ich reich wäre, würde ich um die Welt reisen.</p>
                      <p className="text-purple-700 font-semibold">→ Wäre ich reich, würde ich um die Welt reisen.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Position 2 : Verbe en Deuxième Position */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8 border border-orange-100">
            <h2 className="text-2xl font-bold mb-6 text-orange-700 border-b border-orange-200 pb-2">Position 2 : Verbe en Deuxième Position</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-3 text-orange-700">Phrases déclaratives</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Structure :</strong> ÉLÉMENT 1 + VERBE + SUJET + AUTRES + PARTIE VERBALE NON CONJUGUÉE
                </p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 text-orange-700">Mécanisme de la "klammer" (parenthèse verbale) :</h3>

                <div className="bg-orange-50 p-4 rounded-lg mb-4">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-orange-100">
                        <th className="border border-gray-300 p-2 text-center">Élément 1</th>
                        <th className="border border-gray-300 p-2 text-center">Verbe conjugué</th>
                        <th className="border border-gray-300 p-2 text-center">Mittelfeld (champ médian)</th>
                        <th className="border border-gray-300 p-2 text-center">Fin verbale</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2 text-center font-mono">Ich</td>
                        <td className="border border-gray-300 p-2 text-center font-mono text-orange-700 font-bold">habe</td>
                        <td className="border border-gray-300 p-2 text-center font-mono">gestern meinem Bruder</td>
                        <td className="border border-gray-300 p-2 text-center font-mono text-orange-700 font-bold">geholfen</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 text-center font-mono">Gestern</td>
                        <td className="border border-gray-300 p-2 text-center font-mono text-orange-700 font-bold">habe</td>
                        <td className="border border-gray-300 p-2 text-center font-mono">ich meinem Bruder</td>
                        <td className="border border-gray-300 p-2 text-center font-mono text-orange-700 font-bold">geholfen</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2 text-center font-mono">Meinem Bruder</td>
                        <td className="border border-gray-300 p-2 text-center font-mono text-orange-700 font-bold">habe</td>
                        <td className="border border-gray-300 p-2 text-center font-mono">ich gestern</td>
                        <td className="border border-gray-300 p-2 text-center font-mono text-orange-700 font-bold">geholfen</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 text-orange-700">Questions ouvertes (W-Fragen)</h3>
                <p className="text-gray-700 mb-3"><strong>Structure :</strong> MOT INTERROGATIF + VERBE + SUJET + AUTRES + ?</p>

                <div className="bg-orange-50 p-4 rounded-lg mb-4">
                  <p className="text-sm text-orange-800 mb-2">Exemples avec différents interrogatifs :</p>
                  <ul className="space-y-2 font-mono text-orange-900">
                    <li>• Warum gehst du nicht zur Schule?</li>
                    <li>• Wessen Auto steht vor unserem Haus?</li>
                    <li>• Womit beschäftigt sich dein Vater beruflich?</li>
              </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 text-orange-700">Éléments verbaux non conjugués en fin de phrase</h3>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-green-100">
                        <th className="border border-gray-300 p-3 text-left font-bold">Type</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Exemple</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Élément final</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3">Participe passé</td>
                        <td className="border border-gray-300 p-3 font-mono">Er hat das Buch gelesen</td>
                        <td className="border border-gray-300 p-3 font-mono text-green-700 font-bold">gelesen</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Infinitif</td>
                        <td className="border border-gray-300 p-3 font-mono">Wir wollen morgen schwimmen</td>
                        <td className="border border-gray-300 p-3 font-mono text-green-700 font-bold">schwimmen</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Particule séparable</td>
                        <td className="border border-gray-300 p-3 font-mono">Sie macht das Fenster auf</td>
                        <td className="border border-gray-300 p-3 font-mono text-green-700 font-bold">auf</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Prédicat nominal</td>
                        <td className="border border-gray-300 p-3 font-mono">Er wird Arzt</td>
                        <td className="border border-gray-300 p-3 font-mono text-green-700 font-bold">Arzt</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>

          {/* Position Finale : Verbe en Dernière Position */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8 border border-orange-100">
            <h2 className="text-2xl font-bold mb-6 text-orange-700 border-b border-orange-200 pb-2">Position Finale : Verbe en Dernière Position</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-3 text-orange-700">Propositions subordonnées</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Structure :</strong> CONJONCTION + SUJET + COMPLÉMENTS + VERBE CONJUGUÉ
                </p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 mb-6">
                    <thead>
                      <tr className="bg-purple-100">
                        <th className="border border-gray-300 p-3 text-left font-bold">Conjonction</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Sens</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Exemple</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3">dass</td>
                        <td className="border border-gray-300 p-3">que</td>
                        <td className="border border-gray-300 p-3 font-mono">Ich denke, dass er heute kommt.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">weil</td>
                        <td className="border border-gray-300 p-3">parce que</td>
                        <td className="border border-gray-300 p-3 font-mono">Er bleibt zu Hause, weil er krank ist.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">obwohl</td>
                        <td className="border border-gray-300 p-3">bien que</td>
                        <td className="border border-gray-300 p-3 font-mono">Sie arbeitet, obwohl sie müde ist.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">damit</td>
                        <td className="border border-gray-300 p-3">pour que</td>
                        <td className="border border-gray-300 p-3 font-mono">Ich rufe an, damit du Bescheid weißt.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 text-orange-700">Cas particuliers dans les subordonnées</h3>

                <div className="space-y-4">
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <p className="font-semibold text-red-800 mb-2">Double infinitif :</p>
                    <p className="font-mono text-red-900">...dass er hat kommen wollen. (et non : *dass er kommen wollen hat*)</p>
                  </div>

                  <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
                    <p className="font-semibold text-orange-800 mb-2">Comparatifs :</p>
                    <p className="font-mono text-orange-900">...dass sie größer ist als ich dachte. (verbe avant "als")</p>
                  </div>

                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <p className="font-semibold text-green-800 mb-2">Constructions avec "oder nicht" :</p>
                    <p className="font-mono text-green-900">...ob er kommt oder nicht. (verbe avant "oder nicht")</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ordre des Éléments : Principes Fondamentaux */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8 border border-orange-100">
            <h2 className="text-2xl font-bold mb-6 text-orange-700 border-b border-orange-200 pb-2">Ordre des Éléments : Principes Fondamentaux</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-3 text-orange-700">Principe 1 : Mise en relief par la position initiale</h3>
                <p className="text-gray-700 mb-3">Impact communicatif selon l'élément placé en première position :</p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 mb-4">
                    <thead>
                      <tr className="bg-orange-100">
                        <th className="border border-gray-300 p-3 text-left font-bold">Élément initial</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Effet</th>
                        <th className="border border-gray-300 p-3 text-left font-bold">Exemple</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3">Sujet</td>
                        <td className="border border-gray-300 p-3">Neutre</td>
                        <td className="border border-gray-300 p-3 font-mono">Der Student lernt fleißig.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Temps</td>
                        <td className="border border-gray-300 p-3">Cadre temporel</td>
                        <td className="border border-gray-300 p-3 font-mono">Heute lernt der Student fleißig.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">COD</td>
                        <td className="border border-gray-300 p-3">Emphase sur l'objet</td>
                        <td className="border border-gray-300 p-3 font-mono">Diese Sprache lernt der Student fleißig.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3">Manière</td>
                        <td className="border border-gray-300 p-3">Emphase sur la méthode</td>
                        <td className="border border-gray-300 p-3 font-mono">Fleißig lernt der Student diese Sprache.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 text-orange-700">Principe 2 : Position du sujet après inversion</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Règle :</strong> Quand un autre élément que le sujet occupe la première position, le sujet suit immédiatement le verbe.
                </p>
                <p className="text-gray-700 mb-3">
                  <strong>Schéma :</strong> AUTRE ÉLÉMENT + VERBE + SUJET + RESTE
                </p>

                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-800 mb-3 font-semibold">Exemples contrastés :</p>
                  <ul className="space-y-2 font-mono text-green-900">
                    <li>• Ich schreibe jeden Tag in mein Tagebuch. (ordre normal)</li>
                    <li>• Jeden Tag schreibe ich in mein Tagebuch. (emphase temporelle)</li>
                    <li>• In mein Tagebuch schreibe ich jeden Tag. (emphase sur l'objet)</li>
            </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Ordre des Compléments : Règles Détaillées */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8 border border-orange-100">
            <h2 className="text-2xl font-bold mb-6 text-orange-700 border-b border-orange-200 pb-2">Ordre des Compléments : Règles Détaillées</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-3 text-orange-700">Hiérarchie générale</h3>
                <p className="text-gray-700 mb-3"><strong>SUJET + PRONOMS + TEMPS + CAUSE + LIEU + MANIÈRE + COI + COD</strong></p>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 text-orange-700">Règles spécifiques aux pronoms</h3>
                <p className="text-gray-700 mb-3"><strong>Ordre des pronoms personnels :</strong></p>
                <p className="text-gray-700 mb-3">NOMINATIF + ACCUSATIF + DATIF</p>

                <div className="bg-orange-50 p-4 rounded-lg mb-4">
                  <p className="text-sm text-orange-800 mb-2 font-semibold">Exemples :</p>
                  <ul className="space-y-2 font-mono text-orange-900">
                    <li>• Ich gebe es ihm. (je le lui donne)</li>
                    <li>• Sie erklärt es uns. (elle nous l'explique)</li>
                    <li>• Er zeigt sie ihnen. (il la leur montre)</li>
                  </ul>
                </div>

                <div className="bg-green-50 p-4 rounded-lg">
                  <p className="text-sm text-green-800 mb-2 font-semibold">Pronoms vs. noms :</p>
                  <p className="text-green-900 mb-2"><strong>PRONOMS</strong> avant <strong>NOMS</strong> (toujours)</p>
                  <p className="text-sm text-green-800 mb-2">Comparaisons :</p>
                  <ul className="space-y-1 font-mono text-green-900 text-sm">
                    <li>• Ich gebe dem Kind das Buch. → Ich gebe es dem Kind.</li>
                    <li>• Ich gebe meinem Bruder Geld. → Ich gebe ihm Geld.</li>
                    <li>• Ich gebe es ihm. (pronom + pronom)</li>
                  </ul>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 text-orange-700">Compléments circonstanciels : T-L-M</h3>
                <p className="text-gray-700 mb-3"><strong>Mnémotechnique :</strong> Temps - Lieu - Manière</p>

                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-gray-300 mb-4">
                    <thead>
                      <tr className="bg-purple-100">
                        <th className="border border-gray-300 p-3 text-center font-bold"></th>
                        <th className="border border-gray-300 p-3 text-center font-bold">Temps</th>
                        <th className="border border-gray-300 p-3 text-center font-bold">Lieu</th>
                        <th className="border border-gray-300 p-3 text-center font-bold">Manière</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-3 font-semibold">Exemple complet</td>
                        <td className="border border-gray-300 p-3 font-mono text-purple-700">gestern</td>
                        <td className="border border-gray-300 p-3 font-mono text-purple-700">im Park</td>
                        <td className="border border-gray-300 p-3 font-mono text-purple-700">allein</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-mono" colSpan="4">Ich bin gestern im Park allein spaziert.</td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-3 font-mono" colSpan="4">Sie fährt jeden Morgen mit dem Bus zur Schule.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 text-orange-700">Hiérarchie informationnelle</h3>
                <p className="text-gray-700 mb-3">
                  <strong>Principe :</strong> Plus une information est centrale au sens du verbe, plus elle se rapproche de la fin.
                </p>

                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="text-sm text-orange-800 mb-2 font-semibold">Exemples analytiques :</p>
                  <div className="bg-white p-3 rounded border-l-4 border-orange-500">
                    <p className="font-mono text-gray-800 mb-1">Ich kaufe heute im Supermarkt für meine Familie frisches Gemüse.</p>
                    <ul className="text-sm text-gray-700 ml-4">
                      <li>• Noyau : <strong>Gemüse kaufen</strong> (information essentielle)</li>
                      <li>• Périphérie : heute, im Supermarkt (circonstances)</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* La Négation avec "nicht" : Règles Précises */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8 border border-orange-100">
            <h2 className="text-2xl font-bold mb-6 text-orange-700 border-b border-orange-200 pb-2">La Négation avec "nicht" : Règles Précises</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-3 text-orange-700">Négation totale</h3>
                <p className="text-gray-700 mb-3"><strong>Position :</strong> Dernier élément d'information</p>
                <div className="bg-green-50 p-3 rounded-lg">
                  <p className="font-mono text-green-800">Sie versteht diese Theorie nicht.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 text-orange-700">Négation partielle</h3>
                <p className="text-gray-700 mb-3"><strong>Position :</strong> Directement avant l'élément nié</p>
                <div className="bg-orange-50 p-3 rounded-lg">
                  <p className="font-mono text-orange-800">Er arbeitet nicht in Berlin, sondern in München.</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 text-orange-700">Respect des groupes syntaxiques</h3>
                <p className="text-gray-700 mb-3"><strong>Groupes inséparables :</strong></p>

                <div className="space-y-3">
                  <div className="bg-orange-50 p-3 rounded-lg border-l-4 border-orange-500">
                    <p className="font-mono text-orange-900">• Noyau verbal : Ich kann nicht nach Hause gehen.</p>
                  </div>
                  <div className="bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
                    <p className="font-mono text-purple-900">• Groupe prépositionnel : Er denkt nicht an seine Probleme.</p>
                  </div>
                  <div className="bg-red-50 p-3 rounded-lg border-l-4 border-red-500">
                    <p className="font-mono text-red-900">• Attribut : Das Buch ist nicht interessant.</p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 text-red-700">Positions interdites pour "nicht"</h3>

                <div className="bg-red-50 p-4 rounded-lg border border-red-200">
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <span className="text-red-600 font-bold">❌</span>
                      <span className="font-mono text-red-900">Ich nicht gehe nach Hause.</span>
                      <span className="text-sm text-red-700">(sépare sujet et verbe)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-red-600 font-bold">❌</span>
                      <span className="font-mono text-red-900">Ich gehe nicht nach Hause.</span>
                      <span className="text-sm text-red-700">(brise le noyau verbal)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600 font-bold">✅</span>
                      <span className="font-mono text-green-900">Ich gehe nicht nach Hause.</span>
                      <span className="text-sm text-green-700">(si on nie "nach Hause gehen")</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-green-600 font-bold">✅</span>
                      <span className="font-mono text-green-900">Ich gehe heute nicht nach Hause.</span>
                      <span className="text-sm text-green-700">(si on nie toute l'action)</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Ponctuation : Règles Strictes */}
          <div className="bg-white rounded-xl p-8 shadow-lg mb-8 border border-orange-100">
            <h2 className="text-2xl font-bold mb-6 text-orange-700 border-b border-orange-200 pb-2">Ponctuation : Règles Strictes</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-3 text-green-700">Virgules obligatoires</h3>

                <div className="space-y-4">
                  <div>
                    <p className="text-gray-700 mb-2"><strong>1. Principales / Subordonnées :</strong></p>
                    <p className="text-gray-700 mb-2">PRINCIPALE + , + SUBORDONNÉE</p>
                    <p className="text-gray-700 mb-2">SUBORDONNÉE + , + PRINCIPALE</p>
                    <div className="bg-green-50 p-3 rounded-lg font-mono text-green-900">
                      Ich glaube, dass du recht hast. Weil es regnet, bleiben wir zu Hause.
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-700 mb-2"><strong>2. Énumérations :</strong></p>
                    <p className="text-gray-700 mb-2">ÉLÉMENT + , + ÉLÉMENT + , + ÉLÉMENT + und + DERNIER</p>
                    <div className="bg-green-50 p-3 rounded-lg font-mono text-green-900">
                      Wir brauchen Mehl, Eier, Milch und Zucker.
                    </div>
                  </div>

                  <div>
                    <p className="text-gray-700 mb-2"><strong>3. Appositions :</strong></p>
                    <p className="text-gray-700 mb-2">NOM + , + APPOSITION + , + SUITE</p>
                    <div className="bg-green-50 p-3 rounded-lg font-mono text-green-900">
                      Goethe, der berühmte deutsche Dichter, lebte in Weimar.
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 text-red-700">Virgules interdites</h3>
                <p className="text-gray-700 mb-3">Contrairement au français :</p>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-500">
                    <p className="font-semibold text-red-800 mb-2">Français</p>
                    <p className="font-mono text-red-900">Hier, au bureau, j'ai travaillé.</p>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <p className="font-semibold text-green-800 mb-2">Allemand</p>
                    <p className="font-mono text-green-900">Gestern habe ich im Büro gearbeitet.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Synthèse : Mécanismes Clés */}
          <div className="bg-gradient-to-r from-orange-50 to-blue-50 rounded-xl p-8 shadow-lg mb-8 border border-orange-200">
            <h2 className="text-2xl font-bold mb-6 text-orange-700 border-b border-orange-200 pb-2">Synthèse : Mécanismes Clés</h2>

            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-bold mb-3 text-orange-700">Les trois règles d'or</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li><strong>Position du verbe = Type de phrase</strong> (déclarative, interrogative, subordonnée)</li>
                  <li><strong>Première position = Mise en relief</strong> (emphase communicative)</li>
                  <li><strong>Fin de phrase = Information centrale</strong> (noyau sémantique)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 text-red-700">Erreurs fréquentes à éviter</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>❌ Verbe conjugué mal placé dans les subordonnées</li>
                  <li>❌ Séparation du noyau verbal par "nicht"</li>
                  <li>❌ Virgules françaises dans les compléments circonstanciels</li>
                  <li>❌ Mauvais ordre des pronoms personnels</li>
                </ul>
              </div>

              <div>
                <h3 className="text-lg font-bold mb-3 text-green-700">Stratégies de mémorisation</h3>
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>• Visualiser la "klammer" (parenthèse verbale)</li>
                  <li>• Mémoriser T-L-M pour les circonstanciels</li>
                  <li>• Pratiquer les transformations (normale → emphase)</li>
                  <li>• Analyser le noyau verbal dans chaque phrase</li>
                </ul>
              </div>
            </div>
          </div>

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
      </section>
    </div>
  );
};

export default StructurePage; 