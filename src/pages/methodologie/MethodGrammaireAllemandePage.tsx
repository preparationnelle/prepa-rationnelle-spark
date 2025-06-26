
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Target, AlertCircle } from "lucide-react";

export const MethodGrammaireAllemandePage = () => {
  return (
    <div className="container max-w-4xl py-10 animate-fade-in bg-[#FFF9ED] min-h-screen">
      <div className="mb-6">
        <Link to="/methodologie/allemand">
          <Button variant="outline" className="mb-4 flex items-center gap-2">
            <ArrowLeft className="h-4 w-4" />
            Retour à la méthodologie allemand
          </Button>
        </Link>
      </div>
      
      <h1 className="text-4xl font-extrabold mb-8 text-[#ff9100] text-center">
        Conjugaison Allemande Complète
      </h1>
      
      <Card className="mb-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
        <CardContent className="p-6">
          <p className="text-lg font-semibold mb-2">Maîtriser tous les temps allemands</p>
          <p className="text-muted-foreground">
            Tableaux complets avec verbes réguliers, irréguliers et auxiliaires. Tout ce qu'il faut savoir !
          </p>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {/* Auxiliaires être et avoir */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-primary">
              <Target className="h-6 w-6" />
              1. Les auxiliaires (sein, haben, werden)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3">Sein (être) - Présent</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1 text-sm">
                    <p><strong>ich bin</strong> (je suis)</p>
                    <p><strong>du bist</strong> (tu es)</p>
                    <p><strong>er/sie/es ist</strong> (il/elle est)</p>
                  </div>
                  <div className="space-y-1 text-sm">
                    <p><strong>wir sind</strong> (nous sommes)</p>
                    <p><strong>ihr seid</strong> (vous êtes)</p>
                    <p><strong>sie/Sie sind</strong> (ils/vous êtes)</p>
                  </div>
                </div>
              </div>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-3">Haben (avoir) - Présent</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1 text-sm">
                    <p><strong>ich habe</strong> (j'ai)</p>
                    <p><strong>du hast</strong> (tu as)</p>
                    <p><strong>er/sie/es hat</strong> (il/elle a)</p>
                  </div>
                  <div className="space-y-1 text-sm">
                    <p><strong>wir haben</strong> (nous avons)</p>
                    <p><strong>ihr habt</strong> (vous avez)</p>
                    <p><strong>sie/Sie haben</strong> (ils/vous avez)</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-3">Werden (devenir) - Présent</h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1 text-sm">
                    <p><strong>ich werde</strong> (je deviens)</p>
                    <p><strong>du wirst</strong> (tu deviens)</p>
                    <p><strong>er/sie/es wird</strong> (il/elle devient)</p>
                  </div>
                  <div className="space-y-1 text-sm">
                    <p><strong>wir werden</strong> (nous devenons)</p>
                    <p><strong>ihr werdet</strong> (vous devenez)</p>
                    <p><strong>sie/Sie werden</strong> (ils/vous devenez)</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Présent */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-primary">
              <BookOpen className="h-6 w-6" />
              2. Le présent (Präsens)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Verbes réguliers - Exemple : lernen (apprendre)</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <p><strong>ich lerne</strong></p>
                    <p><strong>du lernst</strong></p>
                    <p><strong>er/sie/es lernt</strong></p>
                  </div>
                  <div className="space-y-1">
                    <p><strong>wir lernen</strong></p>
                    <p><strong>ihr lernt</strong></p>
                    <p><strong>sie/Sie lernen</strong></p>
                  </div>
                </div>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">⚠️ Verbes irréguliers importants</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm border-collapse border border-gray-300">
                    <thead>
                      <tr className="bg-gray-100">
                        <th className="border border-gray-300 p-2">Infinitif</th>
                        <th className="border border-gray-300 p-2">ich</th>
                        <th className="border border-gray-300 p-2">du</th>
                        <th className="border border-gray-300 p-2">er/sie/es</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td className="border border-gray-300 p-2"><strong>sprechen</strong></td>
                        <td className="border border-gray-300 p-2">spreche</td>
                        <td className="border border-gray-300 p-2"><strong>sprichst</strong></td>
                        <td className="border border-gray-300 p-2"><strong>spricht</strong></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2"><strong>fahren</strong></td>
                        <td className="border border-gray-300 p-2">fahre</td>
                        <td className="border border-gray-300 p-2"><strong>fährst</strong></td>
                        <td className="border border-gray-300 p-2"><strong>fährt</strong></td>
                      </tr>
                      <tr>
                        <td className="border border-gray-300 p-2"><strong>lesen</strong></td>
                        <td className="border border-gray-300 p-2">lese</td>
                        <td className="border border-gray-300 p-2"><strong>liest</strong></td>
                        <td className="border border-gray-300 p-2"><strong>liest</strong></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Parfait */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-primary">
              <Target className="h-6 w-6" />
              3. Le parfait (Perfekt)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-800 mb-2">Formation</h4>
                <p className="text-blue-700">
                  <strong>haben/sein + participe passé</strong>
                </p>
              </div>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-green-800 mb-2">Avec HABEN</h5>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Verbes transitifs (avec COD)</li>
                    <li>• Ich <strong>habe</strong> gelernt</li>
                    <li>• Du <strong>hast</strong> gegessen</li>
                    <li>• Er <strong>hat</strong> geschrieben</li>
                  </ul>
                </div>

                <div className="bg-yellow-50 p-4 rounded-lg">
                  <h5 className="font-semibold text-yellow-800 mb-2">Avec SEIN</h5>
                  <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Verbes de mouvement/changement</li>
                    <li>• Ich <strong>bin</strong> gegangen</li>
                    <li>• Du <strong>bist</strong> gekommen</li>
                    <li>• Er <strong>ist</strong> gefahren</li>
                  </ul>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-semibold mb-2">Formation du participe passé</h5>
                <div className="grid md:grid-cols-3 gap-4 text-sm">
                  <div>
                    <p className="font-medium">Verbes réguliers:</p>
                    <p>ge- + radical + -t</p>
                    <p><em>lernen → gelernt</em></p>
                  </div>
                  <div>
                    <p className="font-medium">Verbes irréguliers:</p>
                    <p>ge- + radical modifié + -en</p>
                    <p><em>sprechen → gesprochen</em></p>
                  </div>
                  <div>
                    <p className="font-medium">Verbes en -ieren:</p>
                    <p>pas de ge-</p>
                    <p><em>studieren → studiert</em></p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Prétérit */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-primary">
              <AlertCircle className="h-6 w-6" />
              4. Le prétérit (Präteritum)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Principalement utilisé à l'écrit et pour les auxiliaires.
              </p>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3">Auxiliaires au prétérit</h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <div>
                    <h5 className="font-medium mb-2">sein (war)</h5>
                    <div className="text-sm space-y-1">
                      <p>ich <strong>war</strong></p>
                      <p>du <strong>warst</strong></p>
                      <p>er <strong>war</strong></p>
                      <p>wir <strong>waren</strong></p>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">haben (hatte)</h5>
                    <div className="text-sm space-y-1">
                      <p>ich <strong>hatte</strong></p>
                      <p>du <strong>hattest</strong></p>
                      <p>er <strong>hatte</strong></p>
                      <p>wir <strong>hatten</strong></p>
                    </div>
                  </div>
                  <div>
                    <h5 className="font-medium mb-2">werden (wurde)</h5>
                    <div className="text-sm space-y-1">
                      <p>ich <strong>wurde</strong></p>
                      <p>du <strong>wurdest</strong></p>
                      <p>er <strong>wurde</strong></p>
                      <p>wir <strong>wurden</strong></p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Verbes de modalité au prétérit</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>können</strong> → konnte</p>
                    <p><strong>müssen</strong> → musste</p>
                    <p><strong>wollen</strong> → wollte</p>
                  </div>
                  <div>
                    <p><strong>dürfen</strong> → durfte</p>
                    <p><strong>sollen</strong> → sollte</p>
                    <p><strong>mögen</strong> → mochte</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Subjonctif II */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-primary">
              <BookOpen className="h-6 w-6" />
              5. Le subjonctif II (Konjunktiv II)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground">
                Utilisé pour exprimer l'irréel, la politesse, les souhaits.
              </p>

              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">Formation avec würde</h4>
                <p className="text-green-700 mb-2">
                  <strong>würde + infinitif</strong> (forme la plus courante)
                </p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <p><strong>ich würde</strong> gehen</p>
                    <p><strong>du würdest</strong> kommen</p>
                    <p><strong>er würde</strong> lernen</p>
                  </div>
                  <div className="space-y-1">
                    <p><strong>wir würden</strong> sprechen</p>
                    <p><strong>ihr würdet</strong> fahren</p>
                    <p><strong>sie würden</strong> arbeiten</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Formes spéciales</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div>
                    <p><strong>haben</strong> → hätte</p>
                    <p><strong>sein</strong> → wäre</p>
                    <p><strong>werden</strong> → würde</p>
                  </div>
                  <div>
                    <p><strong>können</strong> → könnte</p>
                    <p><strong>müssen</strong> → müsste</p>
                    <p><strong>dürfen</strong> → dürfte</p>
                  </div>
                </div>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-2">Exemples d'usage</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                  <li>• <strong>Wenn ich Zeit hätte, würde ich kommen.</strong> (Si j'avais le temps, je viendrais.)</li>
                  <li>• <strong>Könnten Sie mir helfen?</strong> (Pourriez-vous m'aider ?)</li>
                  <li>• <strong>Ich wäre gern reich.</strong> (J'aimerais être riche.)</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Futur */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-primary">
              <Target className="h-6 w-6" />
              6. Le futur (Futur I)
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-blue-400">
                <h4 className="font-semibold text-blue-800 mb-2">Formation</h4>
                <p className="text-blue-700">
                  <strong>werden + infinitif</strong>
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h4 className="font-semibold mb-2">Conjugaison complète</h4>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                  <div className="space-y-1">
                    <p><strong>ich werde</strong> lernen</p>
                    <p><strong>du wirst</strong> kommen</p>
                    <p><strong>er wird</strong> fahren</p>
                  </div>
                  <div className="space-y-1">
                    <p><strong>wir werden</strong> sprechen</p>
                    <p><strong>ihr werdet</strong> arbeiten</p>
                    <p><strong>sie werden</strong> gehen</p>
                  </div>
                </div>
              </div>

              <div className="bg-yellow-50 p-4 rounded-lg">
                <h4 className="font-semibold text-yellow-800 mb-2">Usage</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                  <li>• Actions futures : <em>Ich werde morgen kommen.</em></li>
                  <li>• Prédictions : <em>Es wird regnen.</em></li>
                  <li>• Promesses : <em>Ich werde dir helfen.</em></li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conseils pratiques */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">💡 Stratégies d'apprentissage</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-green-50 p-4 rounded-lg">
                <h4 className="font-semibold text-green-800 mb-2">✅ Techniques efficaces</h4>
                <ul className="text-sm text-green-700 space-y-1">
                  <li>• Apprendre par groupes de verbes</li>
                  <li>• Créer des phrases personnelles</li>
                  <li>• Réviser les irréguliers quotidiennement</li>
                  <li>• Utiliser les flashcards</li>
                </ul>
              </div>

              <div className="bg-red-50 p-4 rounded-lg">
                <h4 className="font-semibold text-red-800 mb-2">❌ Pièges à éviter</h4>
                <ul className="text-sm text-red-700 space-y-1">
                  <li>• Confondre haben/sein au parfait</li>
                  <li>• Oublier l'Umlaut (ä, ö, ü)</li>
                  <li>• Négliger la position du verbe</li>
                  <li>• Mal former le participe passé</li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 text-center">
        <Link to="/methodologie/allemand">
          <Button className="bg-[#ff9100] hover:bg-[#e8820e]">
            Retour à la méthodologie allemand
          </Button>
        </Link>
      </div>
    </div>
  );
};
