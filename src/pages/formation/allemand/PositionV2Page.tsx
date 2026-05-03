import React from 'react';

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, BookOpen, ChevronRight } from 'lucide-react';

const PositionV2Page = () => {
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
            <span className="text-gray-900">Règle de Position V2</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-orange-100">
                <BookOpen className="h-8 w-8 text-orange-600" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              La Règle de Position V2
            </h1>
            <p className="text-lg text-gray-600">
              Maîtriser la position rigide du verbe en allemand
            </p>
          </div>
        </div>
      </header>

      {/* Section Contenu */}
      <section className="py-8 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">

          {/* Introduction à la difficulté */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Le défi de la position V2</h2>
            <p className="text-gray-700 mb-4">
              La règle de la position V2 (verbe en deuxième position) constitue un défi grammatical constant. Dans une proposition principale, le verbe conjugué doit toujours occuper la deuxième position, quelle que soit la structure de la phrase. Cette rigidité contraste avec la flexibilité française et peut causer de nombreuses erreurs.
            </p>
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-300">
              <p className="text-gray-800 font-medium">Règle d'or :</p>
              <p className="text-gray-700 mt-2">Position 1 = Élément mis en relief | Position 2 = Verbe conjugué</p>
            </div>
          </div>

          {/* Structure de base */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Structure de base d'une phrase allemande</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Phrase déclarative normale :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><span className="text-orange-600">Position 1</span> | <span className="text-blue-600">Position 2 (Verbe)</span> | <span className="text-green-600">Compléments</span></p>
                  <p>Ich <span className="text-blue-600">esse</span> jeden Tag Suppe.</p>
                  <p className="text-sm text-gray-700">(Je mange de la soupe chaque jour.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Phrase avec complément en première position :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Jeden Tag <span className="text-blue-600">esse</span> ich Suppe.</p>
                  <p className="text-sm text-gray-700">(Chaque jour, je mange de la soupe.)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Différents types de phrases */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Application selon le type de phrase</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-blue-700">Phrases déclaratives :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Élément + Verbe conjugué + Compléments</p>
                  <p>Morgen <span className="text-orange-600">gehe</span> ich ins Kino.</p>
                  <p className="text-sm text-gray-700">(Demain, je vais au cinéma.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-green-700">Questions fermées (Ja/Nein) :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Verbe conjugué + Sujet + Compléments</p>
                  <p><span className="text-orange-600">Gehst</span> du morgen ins Kino?</p>
                  <p className="text-sm text-gray-700">(Vas-tu au cinéma demain ?)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-purple-700">Questions ouvertes (W-) :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Mot interrogatif + Verbe conjugué + Sujet + Compléments</p>
                  <p>Wann <span className="text-orange-600">gehst</span> du ins Kino?</p>
                  <p className="text-sm text-gray-700">(Quand vas-tu au cinéma ?)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-red-700">Impératif :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Verbe conjugué + Compléments</p>
                  <p><span className="text-orange-600">Geh</span> ins Kino!</p>
                  <p className="text-sm text-gray-700">(Va au cinéma !)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mise en relief */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">La mise en relief communicative</h2>
            <p className="text-gray-700 mb-4">
              La position 1 permet de mettre en relief différents éléments de la phrase :
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Mise en relief temporelle :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Morgen <span className="text-orange-600">gehe</span> ich ins Kino.</p>
                  <p className="text-sm text-gray-700">(Demain, je vais au cinéma.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Mise en relief sur l'objet :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Das Buch <span className="text-orange-600">lese</span> ich gerade.</p>
                  <p className="text-sm text-gray-700">(C'est le livre que je suis en train de lire.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Mise en relief sur la manière :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Schnell <span className="text-orange-600">esse</span> ich mein Frühstück.</p>
                  <p className="text-sm text-gray-700">(Je mange mon petit-déjeuner rapidement.)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Subordonnées : exception à la règle */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Exception : les subordonnées</h2>
            <p className="text-gray-700 mb-4">
              Dans les propositions subordonnées, le verbe conjugué se place en fin de phrase :
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Avec conjonction de subordination :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Ich weiß, dass du morgen ins Kino <span className="text-orange-600">gehst</span>.</p>
                  <p className="text-sm text-gray-700">(Je sais que tu vas au cinéma demain.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Avec pronom relatif :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Das ist der Film, den ich gestern <span className="text-orange-600">gesehen</span> habe.</p>
                  <p className="text-sm text-gray-700">(C'est le film que j'ai vu hier.)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Erreurs fréquentes */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Erreurs fréquentes à éviter</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Verbe en première position :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-red-500">❌ Gehe ich morgen ins Kino.</p>
                  <p className="text-green-500">✓ Morgen gehe ich ins Kino.</p>
                  <p className="text-sm text-gray-700">(Le verbe doit être en position 2)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Sujet et verbe séparés :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-red-500">❌ Morgen ich gehe ins Kino.</p>
                  <p className="text-green-500">✓ Morgen gehe ich ins Kino.</p>
                  <p className="text-sm text-gray-700">(Sujet après le verbe)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Ordre des mots dans les questions :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-red-500">❌ Du gehst morgen ins Kino?</p>
                  <p className="text-green-500">✓ Gehst du morgen ins Kino?</p>
                  <p className="text-sm text-gray-700">(Verbe en première position pour les questions fermées)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Confusion principale/subordonnée :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-red-500">❌ Ich weiß dass du gehst morgen ins Kino.</p>
                  <p className="text-green-500">✓ Ich weiß, dass du morgen ins Kino gehst.</p>
                  <p className="text-sm text-gray-700">(Verbe en fin de subordonnée)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Exercices pratiques */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Exercices pratiques</h2>
            <p className="text-gray-700 mb-4">
              Mettez en pratique la règle V2 avec des exercices interactifs.
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

export default PositionV2Page;

