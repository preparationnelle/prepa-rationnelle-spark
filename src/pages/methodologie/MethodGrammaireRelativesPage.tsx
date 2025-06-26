
import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, BookOpen, Target, AlertCircle } from "lucide-react";

export const MethodGrammaireRelativesPage = () => {
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
        Les Propositions Relatives en Allemand
      </h1>
      
      <Card className="mb-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-primary/20">
        <CardContent className="p-6">
          <p className="text-lg font-semibold mb-2">Maîtriser les propositions relatives</p>
          <p className="text-muted-foreground">
            Guide complet pour comprendre et utiliser correctement les propositions relatives en allemand.
          </p>
        </CardContent>
      </Card>

      <div className="space-y-6">
        {/* Les pronoms relatifs */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-primary">
              <BookOpen className="h-6 w-6" />
              1. Les pronoms relatifs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <p className="text-muted-foreground mb-4">
                Les pronoms relatifs se déclinent selon le genre, le nombre et le cas du nom qu'ils remplacent.
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 p-2 text-left">Cas</th>
                      <th className="border border-gray-300 p-2 text-left">Masculin</th>
                      <th className="border border-gray-300 p-2 text-left">Féminin</th>
                      <th className="border border-gray-300 p-2 text-left">Neutre</th>
                      <th className="border border-gray-300 p-2 text-left">Pluriel</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 p-2 font-semibold">Nominatif</td>
                      <td className="border border-gray-300 p-2">der</td>
                      <td className="border border-gray-300 p-2">die</td>
                      <td className="border border-gray-300 p-2">das</td>
                      <td className="border border-gray-300 p-2">die</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 font-semibold">Accusatif</td>
                      <td className="border border-gray-300 p-2">den</td>
                      <td className="border border-gray-300 p-2">die</td>
                      <td className="border border-gray-300 p-2">das</td>
                      <td className="border border-gray-300 p-2">die</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 font-semibold">Datif</td>
                      <td className="border border-gray-300 p-2">dem</td>
                      <td className="border border-gray-300 p-2">der</td>
                      <td className="border border-gray-300 p-2">dem</td>
                      <td className="border border-gray-300 p-2">denen</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 p-2 font-semibold">Génitif</td>
                      <td className="border border-gray-300 p-2">dessen</td>
                      <td className="border border-gray-300 p-2">deren</td>
                      <td className="border border-gray-300 p-2">dessen</td>
                      <td className="border border-gray-300 p-2">deren</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Formation des relatives */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-primary">
              <Target className="h-6 w-6" />
              2. Formation des propositions relatives
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <h4 className="font-semibold text-lg mb-2">Règle générale</h4>
              <p className="text-muted-foreground mb-4">
                Le pronom relatif s'accorde avec l'antécédent en genre et en nombre, mais son cas dépend de sa fonction dans la proposition relative.
              </p>
              
              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">Exemples :</h5>
                <ul className="space-y-2">
                  <li>
                    <strong>Der Mann, der kommt, ist mein Vater.</strong><br />
                    <span className="text-sm text-muted-foreground">
                      (L'homme qui vient est mon père.) - "der" = nominatif car sujet de "kommt"
                    </span>
                  </li>
                  <li>
                    <strong>Der Mann, den ich sehe, ist mein Vater.</strong><br />
                    <span className="text-sm text-muted-foreground">
                      (L'homme que je vois est mon père.) - "den" = accusatif car COD de "sehe"
                    </span>
                  </li>
                  <li>
                    <strong>Der Mann, dem ich helfe, ist mein Vater.</strong><br />
                    <span className="text-sm text-muted-foreground">
                      (L'homme à qui j'aide est mon père.) - "dem" = datif car "helfen" + datif
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Cas particuliers */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-primary">
              <AlertCircle className="h-6 w-6" />
              3. Cas particuliers
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-lg mb-2">Relatives avec prépositions</h4>
                <p className="text-muted-foreground mb-3">
                  Quand le pronom relatif suit une préposition, il prend le cas demandé par cette préposition.
                </p>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <ul className="space-y-2">
                    <li>
                      <strong>Das Haus, in dem ich wohne...</strong><br />
                      <span className="text-sm text-muted-foreground">
                        (La maison dans laquelle j'habite...) - "in" + datif
                      </span>
                    </li>
                    <li>
                      <strong>Der Stuhl, auf den ich sitze...</strong><br />
                      <span className="text-sm text-muted-foreground">
                        (La chaise sur laquelle je m'assieds...) - "auf" + accusatif (mouvement)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">Le génitif (dessen/deren)</h4>
                <p className="text-muted-foreground mb-3">
                  Exprime la possession ou l'appartenance.
                </p>
                <div className="bg-green-50 p-4 rounded-lg">
                  <ul className="space-y-2">
                    <li>
                      <strong>Der Mann, dessen Auto rot ist...</strong><br />
                      <span className="text-sm text-muted-foreground">
                        (L'homme dont la voiture est rouge...)
                      </span>
                    </li>
                    <li>
                      <strong>Die Frau, deren Kinder spielen...</strong><br />
                      <span className="text-sm text-muted-foreground">
                        (La femme dont les enfants jouent...)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-lg mb-2">Pronom relatif "was"</h4>
                <p className="text-muted-foreground mb-3">
                  Utilisé après les pronoms neutres (das, etwas, nichts, alles) et les superlatifs substantivés.
                </p>
                <div className="bg-yellow-50 p-4 rounded-lg">
                  <ul className="space-y-2">
                    <li>
                      <strong>Alles, was er sagt, ist wahr.</strong><br />
                      <span className="text-sm text-muted-foreground">
                        (Tout ce qu'il dit est vrai.)
                      </span>
                    </li>
                    <li>
                      <strong>Das Beste, was passieren konnte...</strong><br />
                      <span className="text-sm text-muted-foreground">
                        (Le mieux qui pouvait arriver...)
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Position du verbe */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-primary">
              <Target className="h-6 w-6" />
              4. Position du verbe conjugué
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-red-50 p-4 rounded-lg border-l-4 border-red-400">
                <h4 className="font-semibold text-red-800 mb-2">⚠️ Règle importante</h4>
                <p className="text-red-700">
                  Dans une proposition relative, le verbe conjugué se place toujours à la fin !
                </p>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">Exemples :</h5>
                <ul className="space-y-2">
                  <li>
                    <strong>✅ Der Mann, der gestern gekommen ist...</strong><br />
                    <span className="text-sm text-muted-foreground">
                      (L'homme qui est venu hier...)
                    </span>
                  </li>
                  <li>
                    <strong>✅ Das Buch, das ich gelesen habe...</strong><br />
                    <span className="text-sm text-muted-foreground">
                      (Le livre que j'ai lu...)
                    </span>
                  </li>
                  <li>
                    <strong>✅ Die Frau, mit der ich sprechen will...</strong><br />
                    <span className="text-sm text-muted-foreground">
                      (La femme avec qui je veux parler...)
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Exercices pratiques */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-2xl text-primary">
              <BookOpen className="h-6 w-6" />
              5. Méthode pour bien choisir le pronom relatif
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-blue-800 mb-3">🎯 Méthode en 3 étapes :</h4>
                <ol className="list-decimal list-inside space-y-2 text-blue-700">
                  <li><strong>Identifier l'antécédent</strong> (genre et nombre)</li>
                  <li><strong>Déterminer la fonction</strong> du pronom dans la relative</li>
                  <li><strong>Choisir le cas</strong> correspondant à cette fonction</li>
                </ol>
              </div>

              <div className="bg-gray-50 p-4 rounded-lg">
                <h5 className="font-medium mb-2">Exemple pratique :</h5>
                <p className="mb-2">
                  <em>"L'homme à qui je donne le livre est mon professeur."</em>
                </p>
                <ol className="list-decimal list-inside space-y-1 text-sm">
                  <li>Antécédent : "der Mann" (masculin singulier)</li>
                  <li>Fonction : complément d'objet indirect de "geben" (donner à quelqu'un)</li>
                  <li>Cas : datif → <strong>"dem"</strong></li>
                  <li>Résultat : <strong>"Der Mann, dem ich das Buch gebe, ist mein Lehrer."</strong></li>
                </ol>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Conseils pratiques */}
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl text-primary">💡 Conseils pratiques</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-green-800 mb-2">✅ À faire</h4>
                  <ul className="text-sm text-green-700 space-y-1">
                    <li>• Mémoriser le tableau des déclinaisons</li>
                    <li>• S'entraîner à identifier les fonctions</li>
                    <li>• Placer le verbe en fin de proposition</li>
                    <li>• Vérifier l'accord avec l'antécédent</li>
                  </ul>
                </div>

                <div className="bg-red-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-red-800 mb-2">❌ À éviter</h4>
                  <ul className="text-sm text-red-700 space-y-1">
                    <li>• Confondre avec l'article défini</li>
                    <li>• Oublier la position du verbe</li>
                    <li>• Négliger le cas requis par les prépositions</li>
                    <li>• Utiliser "was" avec des antécédents définis</li>
                  </ul>
                </div>
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
