
import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Languages } from "lucide-react";

export default function MethodAllemandPage() {
  return (
    <div className="container max-w-4xl py-10 animate-fade-in space-y-8">
      <div className="text-center mb-10">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="p-3 bg-gradient-to-br from-[#ff9100] to-orange-600 rounded-xl text-white shadow-lg">
            <Languages className="h-8 w-8" />
          </div>
          <h1 className="text-4xl font-extrabold text-[#ff9100]">
            Allemand – Choisissez votre méthodologie
          </h1>
        </div>
      </div>

      <Card>
        <CardContent className="pt-6">
          <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
            <Link to="/methodologie/allemand/essai" className="w-full md:w-auto">
              <Button className="w-full md:w-48 bg-[#ff9100] hover:bg-orange-600">Essai</Button>
            </Link>
            <Link to="/methodologie/allemand/synthese" className="w-full md:w-auto">
              <Button variant="outline" className="w-full md:w-48 border-[#ff9100] text-[#ff9100] hover:bg-[#ff9100] hover:text-white">Synthèse</Button>
            </Link>
            <Link to="/methodologie/grammaire" className="w-full md:w-auto">
              <Button className="w-full md:w-48 bg-[#ff9100] hover:bg-orange-600">Fiches de Grammaire</Button>
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

          {/* 6. Infinitives avec "zu" */}
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

          {/* 7. Subjonctif II */}
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

          {/* 8. Verbes à particules */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-primary">8. VERBES À PARTICULES</h3>
            <div className="space-y-2">
              <h4 className="font-semibold">Particules séparables</h4>
              <p>Position : En fin de phrase principale</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Er steht um 7 Uhr auf</li>
                <li>Sie gibt das Buch zurück</li>
              </ul>
              
              <p><strong>Au parfait :</strong> Particule + ge + verbe</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>aufstehen → aufgestanden</li>
                <li>zurückgeben → zurückgegeben</li>
              </ul>
              
              <p><strong>En subordonnée :</strong> Particule attachée</p>
              <ul className="list-disc ml-6">
                <li>Ich weiß, dass er früh aufsteht</li>
              </ul>
            </div>
          </div>

          {/* 9. Pronoms relatifs */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-primary">9. PRONOMS RELATIFS</h3>
            <div className="space-y-2">
              <h4 className="font-semibold">Déclinaison selon la fonction</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Sujet : der Mann, der dort steht</li>
                <li>COD : das Buch, das ich lese</li>
                <li>COI : die Frau, der ich helfe</li>
                <li>Génitif : der Mann, dessen Auto kaputt ist</li>
              </ul>
            </div>
          </div>

          {/* 10. Comparatifs et superlatifs */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-primary">10. COMPARATIFS ET SUPERLATIFS</h3>
            <div className="space-y-2">
              <h4 className="font-semibold">Structures avec "je... desto"</h4>
              <p>Je + comparatif + verbe, desto + comparatif + verbe</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Je älter er wird, desto weiser wird er</li>
                <li>Je mehr ich lerne, desto besser werden meine Noten</li>
              </ul>
            </div>
          </div>

          {/* 11. Négation */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-primary">11. NÉGATION</h3>
            <div className="space-y-2">
              <h4 className="font-semibold">"Nicht" vs "kein"</h4>
              <p><strong>nicht</strong> (négation générale) : après COD défini</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Ich kenne ihn nicht</li>
              </ul>
              
              <p><strong>kein</strong> (négation nominale) : devant noms indéfinis</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Ich habe keine Zeit</li>
              </ul>
            </div>
          </div>

          {/* 12. Constructions courantes à retenir */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-primary">12. CONSTRUCTIONS COURANTES À RETENIR</h3>
            <div className="space-y-2">
              <h4 className="font-semibold">Expressions de temps</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>seit + présent : Seit drei Jahren lerne ich Deutsch</li>
                <li>vor + datif : vor zwei Jahren</li>
                <li>in + datif (futur) : in einem Jahr</li>
              </ul>
              
              <h4 className="font-semibold">Verbes de modalité</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>müssen (falloir) : Du musst kommen</li>
                <li>sollen (devoir moral) : Du sollst das machen</li>
                <li>können (pouvoir) : Ich kann schwimmen</li>
              </ul>
              
              <h4 className="font-semibold">Constructions avec "es"</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>es fällt mir schwer (j'ai du mal à)</li>
                <li>es ist wichtig, dass... (il est important que)</li>
                <li>es gibt (il y a)</li>
              </ul>
            </div>
          </div>

          {/* 13. Voix passive */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-primary">13. VOIX PASSIVE</h3>
            <div className="space-y-2">
              <h4 className="font-semibold">Passif d'action (Vorgangspassiv)</h4>
              <p>Formation : werden + participe passé</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Présent : Das Buch wird gelesen</li>
                <li>Parfait : Das Buch ist gelesen worden</li>
                <li>Prétérit : Das Buch wurde gelesen</li>
              </ul>
              
              <h4 className="font-semibold">Passif d'état (Zustandspassiv)</h4>
              <p>Formation : sein + participe passé</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Die Tür ist geöffnet (état résultant)</li>
              </ul>
              
              <h4 className="font-semibold">Complément d'agent :</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>von + datif (agent animé) : von dem Lehrer</li>
                <li>durch + accusatif (moyen) : durch den Wind</li>
              </ul>
            </div>
          </div>

          {/* 14. Adjectifs épithètes */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-primary">14. ADJECTIFS ÉPITHÈTES</h3>
            <div className="space-y-2">
              <h4 className="font-semibold">Déclinaison forte (sans article)</h4>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300 text-sm">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-3 py-2">Cas</th>
                      <th className="border border-gray-300 px-3 py-2">Masc.</th>
                      <th className="border border-gray-300 px-3 py-2">Neutre</th>
                      <th className="border border-gray-300 px-3 py-2">Fém.</th>
                      <th className="border border-gray-300 px-3 py-2">Pluriel</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-semibold">Nom.</td>
                      <td className="border border-gray-300 px-3 py-2">guter</td>
                      <td className="border border-gray-300 px-3 py-2">gutes</td>
                      <td className="border border-gray-300 px-3 py-2">gute</td>
                      <td className="border border-gray-300 px-3 py-2">gute</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-semibold">Acc.</td>
                      <td className="border border-gray-300 px-3 py-2">guten</td>
                      <td className="border border-gray-300 px-3 py-2">gutes</td>
                      <td className="border border-gray-300 px-3 py-2">gute</td>
                      <td className="border border-gray-300 px-3 py-2">gute</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-semibold">Dat.</td>
                      <td className="border border-gray-300 px-3 py-2">gutem</td>
                      <td className="border border-gray-300 px-3 py-2">gutem</td>
                      <td className="border border-gray-300 px-3 py-2">guter</td>
                      <td className="border border-gray-300 px-3 py-2">guten</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-3 py-2 font-semibold">Gén.</td>
                      <td className="border border-gray-300 px-3 py-2">guten</td>
                      <td className="border border-gray-300 px-3 py-2">guten</td>
                      <td className="border border-gray-300 px-3 py-2">guter</td>
                      <td className="border border-gray-300 px-3 py-2">guter</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h4 className="font-semibold">Déclinaison faible (avec article défini)</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>der gute Mann, das gute Kind, die gute Frau</li>
                <li>den guten Mann, dem guten Mann</li>
              </ul>
              
              <h4 className="font-semibold">Déclinaison mixte (avec ein, mein, etc.)</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>ein guter Mann, eine gute Frau</li>
                <li>meinem guten Freund</li>
              </ul>
            </div>
          </div>

          {/* 15. Propositions participiales */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-primary">15. PROPOSITIONS PARTICIPIALES</h3>
            <div className="space-y-2">
              <h4 className="font-semibold">Participe présent</h4>
              <p>Formation : infinitif + -d</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>der kommende Zug (le train qui arrive)</li>
                <li>die arbeitenden Menschen (les gens qui travaillent)</li>
              </ul>
              
              <h4 className="font-semibold">Participe passé adjectivé</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>ein geschriebener Brief (une lettre écrite)</li>
                <li>die geschlossene Tür (la porte fermée)</li>
              </ul>
            </div>
          </div>

          {/* 16. Discours rapporté */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-primary">16. DISCOURS RAPPORTÉ (SUBJONCTIF I)</h3>
            <div className="space-y-2">
              <h4 className="font-semibold">Formation et usage</h4>
              <p>Subjonctif I : pour rapporter des paroles</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Er sagte, er habe keine Zeit</li>
                <li>Sie behauptete, sie sei krank</li>
              </ul>
              
              <p>Si forme identique à l'indicatif → Subjonctif II :</p>
              <ul className="list-disc ml-6">
                <li>Sie sagten, sie hätten keine Zeit (au lieu de haben)</li>
              </ul>
            </div>
          </div>

          {/* 17. Constructions avec double infinitif */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-primary">17. CONSTRUCTIONS AVEC DOUBLE INFINITIF</h3>
            <div className="space-y-2">
              <h4 className="font-semibold">Verbes de modalité au parfait</h4>
              <p>Ordre : haben + infinitif + infinitif modal</p>
              <ul className="list-disc ml-6 space-y-1">
                <li>Ich habe kommen können (j'ai pu venir)</li>
                <li>Er hat arbeiten müssen (il a dû travailler)</li>
              </ul>
              
              <h4 className="font-semibold">Verbes de perception</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Ich habe ihn kommen sehen (je l'ai vu venir)</li>
                <li>Wir haben sie singen hören (nous l'avons entendue chanter)</li>
              </ul>
            </div>
          </div>

          {/* 18. Constructions avec "lassen" */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-primary">18. CONSTRUCTIONS AVEC "LASSEN"</h3>
            <div className="space-y-2">
              <h4 className="font-semibold">Sens causatif (faire faire)</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Ich lasse das Auto reparieren (je fais réparer la voiture)</li>
                <li>Er lässt sich die Haare schneiden (il se fait couper les cheveux)</li>
              </ul>
              
              <h4 className="font-semibold">Sens permissif (laisser)</h4>
              <ul className="list-disc ml-6">
                <li>Die Mutter lässt das Kind spielen (la mère laisse l'enfant jouer)</li>
              </ul>
            </div>
          </div>

          {/* 19. Constructions avec "haben/sein + zu + infinitif" */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-primary">19. CONSTRUCTIONS AVEC "HABEN/SEIN + ZU + INFINITIF"</h3>
            <div className="space-y-2">
              <h4 className="font-semibold">Obligation/Possibilité</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Ich habe noch viel zu tun (j'ai encore beaucoup à faire)</li>
                <li>Das ist nicht zu verstehen (ce n'est pas à comprendre/compréhensible)</li>
              </ul>
            </div>
          </div>

          {/* 20. Gérondif et participe présent */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-primary">20. GÉRONDIF ET PARTICIPE PRÉSENT</h3>
            <div className="space-y-2">
              <h4 className="font-semibold">Constructions avec beim, beim, während</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Beim Lesen lernt man viel (en lisant, on apprend beaucoup)</li>
                <li>Während des Essens sprechen wir nicht (pendant que nous mangeons)</li>
              </ul>
            </div>
          </div>

          {/* 21. Propositions consécutives et comparatives */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-primary">21. PROPOSITIONS CONSÉCUTIVES ET COMPARATIVES</h3>
            <div className="space-y-2">
              <h4 className="font-semibold">so... dass (si... que)</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Er ist so müde, dass er schläft</li>
              </ul>
              
              <h4 className="font-semibold">als ob/als wenn (comme si)</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Er tut, als ob er mich nicht kennen würde</li>
                <li>Er tut, als würde er mich nicht kennen</li>
              </ul>
            </div>
          </div>

          {/* 22. Expressions idiomatiques récurrentes */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-primary">22. EXPRESSIONS IDIOMATIQUES RÉCURRENTES</h3>
            <div className="space-y-2">
              <h4 className="font-semibold">Constructions avec es</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Es fällt mir schwer zu... (j'ai du mal à...)</li>
                <li>Es geht um... (il s'agit de...)</li>
                <li>Es handelt sich um... (il s'agit de...)</li>
                <li>Es kommt darauf an... (cela dépend de...)</li>
              </ul>
              
              <h4 className="font-semibold">Constructions avec datif</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Das gefällt mir sehr (cela me plaît beaucoup)</li>
                <li>Das passiert mir oft (cela m'arrive souvent)</li>
                <li>Es tut mir leid (je suis désolé)</li>
              </ul>
            </div>
          </div>

          {/* 23. Conjonctions et connecteurs logiques */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-primary">23. CONJONCTIONS ET CONNECTEURS LOGIQUES</h3>
            <div className="space-y-2">
              <h4 className="font-semibold">Conjonctions de coordination</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>aber (mais) : Ich komme, aber ich bin müde</li>
                <li>denn (car) : Ich bleibe, denn es regnet</li>
                <li>sondern (mais au contraire) : Nicht heute, sondern morgen</li>
              </ul>
              
              <h4 className="font-semibold">Conjonctions à double éléments</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>nicht nur... sondern auch (non seulement... mais aussi)</li>
                <li>entweder... oder (soit... soit)</li>
                <li>weder... noch (ni... ni)</li>
                <li>sowohl... als auch (aussi bien... que)</li>
              </ul>
            </div>
          </div>

          {/* 24. Structures temporelles complexes */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-primary">24. STRUCTURES TEMPORELLES COMPLEXES</h3>
            <div className="space-y-2">
              <h4 className="font-semibold">Antériorité avec nachdem</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Nachdem er gegessen hatte, ging er spazieren</li>
                <li>Nachdem sie angekommen ist, ruft sie an</li>
              </ul>
              
              <h4 className="font-semibold">Simultanéité avec während</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>Während ich arbeite, hört er Musik</li>
              </ul>
              
              <h4 className="font-semibold">Postériorité avec bevor/ehe</h4>
              <ul className="list-disc ml-6">
                <li>Bevor du gehst, räum auf</li>
              </ul>
            </div>
          </div>

          {/* 25. Constructions avec prépositions complexes */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-primary">25. CONSTRUCTIONS AVEC PRÉPOSITIONS COMPLEXES</h3>
            <div className="space-y-2">
              <h4 className="font-semibold">Prépositions à sens figuré</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>trotz + génitif (malgré) : trotz des Regens</li>
                <li>wegen + génitif (à cause de) : wegen der Krise</li>
                <li>aufgrund + génitif (en raison de) : aufgrund seiner Erfahrung</li>
              </ul>
              
              <h4 className="font-semibold">Prépositions + infinitif</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>um... zu (pour) : um zu lernen</li>
                <li>ohne... zu (sans) : ohne zu sprechen</li>
                <li>anstatt... zu (au lieu de) : anstatt zu arbeiten</li>
              </ul>
            </div>
          </div>

          {/* 26. Régimes verbaux particuliers */}
          <div className="space-y-3">
            <h3 className="text-xl font-semibold text-primary">26. RÉGIMES VERBAUX PARTICULIERS</h3>
            <div className="space-y-2">
              <h4 className="font-semibold">Verbes + préposition fixe</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>denken an + acc. : Ich denke an dich</li>
                <li>sich interessieren für + acc. : Er interessiert sich für Sport</li>
                <li>sich beschäftigen mit + dat. : Sie beschäftigt sich mit Musik</li>
                <li>bestehen aus + dat. : Das Team besteht aus zehn Spielern</li>
              </ul>
              
              <h4 className="font-semibold">Constructions réfléchies</h4>
              <ul className="list-disc ml-6 space-y-1">
                <li>sich freuen auf + acc. (se réjouir de - futur)</li>
                <li>sich freuen über + acc. (se réjouir de - présent)</li>
                <li>sich ärgern über + acc. (s'énerver contre)</li>
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
