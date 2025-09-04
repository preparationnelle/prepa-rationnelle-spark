import React from 'react';

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, BookOpen, ChevronRight } from 'lucide-react';

const GenetifPage = () => {
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
            <span className="text-gray-900">Formation du Génitif</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-orange-100">
                <BookOpen className="h-8 w-8 text-orange-600" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Formation du Génitif
            </h1>
            <p className="text-lg text-gray-600">
              Maîtriser l'usage complexe du génitif pour exprimer la possession
            </p>
          </div>
        </div>
      </header>

      {/* Section Contenu */}
      <section className="py-8 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">

          {/* Introduction aux difficultés */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Complexité du génitif allemand</h2>
            <p className="text-gray-700 mb-4">
              L'usage complexe du génitif pour exprimer la possession constitue un défi majeur pour les apprenants. Avec des terminaisons spécifiques (-s, -es pour le masculin et neutre), le génitif nécessite une bonne maîtrise des déclinaisons et de la syntaxe allemande.
            </p>
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-300">
              <p className="text-gray-800 font-medium">Fréquence d'usage :</p>
              <p className="text-gray-700 mt-2">Le génitif est moins utilisé à l'oral qu'à l'écrit, mais essentiel pour la compréhension de textes complexes.</p>
            </div>
          </div>

          {/* Formation selon le genre */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Formation selon le genre</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-blue-700">Masculin :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Article : des</p>
                  <p>Nom : -(e)s</p>
                  <p>Exemple : der Mann → des Mann<span className="text-orange-600">es</span></p>
                  <p className="text-sm text-gray-700">(l'homme)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-green-700">Neutre :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Article : des</p>
                  <p>Nom : -(e)s</p>
                  <p>Exemple : das Buch → des Buch<span className="text-orange-600">es</span></p>
                  <p className="text-sm text-gray-700">(le livre)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-red-700">Féminin :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Article : der</p>
                  <p>Nom : - (pas de terminaison)</p>
                  <p>Exemple : die Frau → der Frau</p>
                  <p className="text-sm text-gray-700">(la femme)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Règles orthographiques */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Règles orthographiques</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Quand ajouter "-e" avant "-s" :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Noms se terminant par une consonne : der Tag → des Tag<span className="text-orange-600">es</span></li>
                    <li>Noms monosyllabiques : der Mann → des Mann<span className="text-orange-600">es</span></li>
                    <li>Noms étrangers : der Park → des Park<span className="text-orange-600">s</span></li>
                  </ul>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Cas particuliers :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <ul className="list-disc list-inside text-gray-700">
                    <li>Noms en -s, -ß, -x, -z : des Hauses (pas de -es supplémentaire)</li>
                    <li>Noms en -chen, -lein : des Büchleins (pas de -s)</li>
                    <li>Noms propres : Karls Buch (pas d'article au génitif)</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Usages principaux */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Usages principaux du génitif</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Possession :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Das Auto <span className="text-orange-600">des Mannes</span> ist neu.</p>
                  <p className="text-sm text-gray-700">(La voiture de l'homme est neuve.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Relation :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Der Bruder <span className="text-orange-600">meiner Mutter</span> wohnt in Berlin.</p>
                  <p className="text-sm text-gray-700">(Le frère de ma mère habite à Berlin.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Appartenance :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Die Blätter <span className="text-orange-600">des Baumes</span> sind gelb.</p>
                  <p className="text-sm text-gray-700">(Les feuilles de l'arbre sont jaunes.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Mesure/Quantité :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Ein Glas <span className="text-orange-600">des Weines</span> bitte.</p>
                  <p className="text-sm text-gray-700">(Un verre de vin s'il vous plaît.)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Génitif avec prépositions */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Génitif avec prépositions</h2>
            <p className="text-gray-700 mb-4">
              Certaines prépositions régissent toujours le génitif :
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Prépositions courantes :</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><span className="text-orange-600">während</span> - pendant : während des Sommers</li>
                  <li><span className="text-orange-600">wegen</span> - à cause de : wegen des Regens</li>
                  <li><span className="text-orange-600">statt</span> - au lieu de : statt des Essens</li>
                  <li><span className="text-orange-600">trotz</span> - malgré : trotz des Wetters</li>
                  <li><span className="text-orange-600">innerhalb</span> - à l'intérieur de : innerhalb der Stadt</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Exemples :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Wegen <span className="text-orange-600">des schlechten Wetters</span> bleiben wir zu Hause.</p>
                  <p className="text-sm text-gray-700">(À cause du mauvais temps, nous restons à la maison.)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg mt-2">
                  <p>Trotz <span className="text-orange-600">der Gefahr</span> geht er hinaus.</p>
                  <p className="text-sm text-gray-700">(Malgré le danger, il sort.)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Alternatives au génitif */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Alternatives au génitif</h2>
            <p className="text-gray-700 mb-4">
              À l'oral et dans la langue courante, le génitif est souvent remplacé par :
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">von + datif :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Das Haus <span className="text-orange-600">von meinem Bruder</span> ist groß.</p>
                  <p className="text-sm text-gray-700">(La maison de mon frère est grande.)</p>
                  <p className="text-xs text-gray-500">Au lieu de : Das Haus meines Bruders ist groß.</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Possessif :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><span className="text-orange-600">Sein</span> Bruder wohnt in Berlin.</p>
                  <p className="text-sm text-gray-700">(Son frère habite à Berlin.)</p>
                  <p className="text-xs text-gray-500">Au lieu de : Der Bruder von ihm wohnt in Berlin.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Erreurs fréquentes */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Erreurs fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Terminaison oubliée :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-red-500">❌ Das Buch des Mann.</p>
                  <p className="text-green-500">✓ Das Buch des Mannes.</p>
                  <p className="text-sm text-gray-700">(Masculin → -es)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Confusion avec l'accusatif :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-red-500">❌ Das Buch den Mann.</p>
                  <p className="text-green-500">✓ Das Buch des Mannes.</p>
                  <p className="text-sm text-gray-700">(Génitif, pas accusatif)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Article oublié :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-red-500">❌ Das Buch Mannes.</p>
                  <p className="text-green-500">✓ Das Buch des Mannes.</p>
                  <p className="text-sm text-gray-700">(Article contracté der + es = des)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Préposition incorrecte :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-red-500">❌ Wegen dem Regen...</p>
                  <p className="text-green-500">✓ Wegen des Regens...</p>
                  <p className="text-sm text-gray-700">(wegen + génitif)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Exercices pratiques */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Exercices pratiques</h2>
            <p className="text-gray-700 mb-4">
              Mettez en pratique la formation du génitif avec des exercices interactifs.
            </p>
            <div className="text-center">
              <Button variant="outline" className="border-orange-300 text-orange-700 hover:bg-orange-50" disabled>
                <FileText className="h-4 w-4 mr-2" />
                Exercices en développement
              </Button>
              <p className="text-sm text-gray-500 mt-2">Les exercices interactifs seront bientôt disponibles</p>
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

export default GenetifPage;

