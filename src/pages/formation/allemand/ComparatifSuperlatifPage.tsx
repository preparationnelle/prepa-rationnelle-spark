import React from 'react';

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, BookOpen, ChevronRight } from 'lucide-react';

const ComparatifSuperlatifPage = () => {
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
            <span className="text-gray-900">Comparatif et Superlatif</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-orange-100">
                <BookOpen className="h-8 w-8 text-orange-600" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Les Formes du Comparatif et du Superlatif
            </h1>
            <p className="text-lg text-gray-600">
              Maîtriser la comparaison des adjectifs et adverbes en allemand
            </p>
          </div>
        </div>
      </header>

      {/* Section Contenu */}
      <section className="py-8 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">

          {/* Introduction aux degrés de comparaison */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Les degrés de comparaison</h2>
            <p className="text-gray-700 mb-4">
              L'allemand utilise trois degrés pour comparer les qualités : le positif (forme de base), le comparatif (plus... que)
              et le superlatif (le plus... de tous). Les règles de formation sont similaires à celles du français,
              mais avec quelques particularités importantes.
            </p>
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-300">
              <p className="text-gray-800 font-medium">Règle générale :</p>
              <p className="text-gray-700 mt-2">Adjectif régulier : -er (comparatif) / am -sten (superlatif)</p>
            </div>
          </div>

          {/* Formation du comparatif */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Formation du comparatif</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Règle générale pour les adjectifs réguliers :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Adjectif + <span className="text-orange-600">-er</span> + als (que)</p>
                  <p className="font-medium">Exemples :</p>
                  <p>schnell → schnell<span className="text-orange-600">er</span> als (plus rapide que)</p>
                  <p>groß → größ<span className="text-orange-600">er</span> als (plus grand que)</p>
                  <p>teuer → teur<span className="text-orange-600">er</span> als (plus cher que)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Avec les adverbes :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Er läuft schnell<span className="text-orange-600">er</span> als ich. (Il court plus vite que moi.)</p>
                  <p>Sie singt schön<span className="text-orange-600">er</span> als du. (Elle chante plus joliment que toi.)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formation du superlatif */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Formation du superlatif</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Superlatif attribut (prédicat) :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>am + adjectif + <span className="text-orange-600">-sten</span> + -en</p>
                  <p>Das ist das schnell<span className="text-orange-600">ste</span> Auto. (C'est la voiture la plus rapide.)</p>
                  <p>Er ist der groß<span className="text-orange-600">te</span> Schüler. (C'est l'élève le plus grand.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Superlatif épithète (devant nom) :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Adjectif + <span className="text-orange-600">-sten</span> + article + nom</p>
                  <p>Das schnell<span className="text-orange-600">ste</span> Auto (La voiture la plus rapide)</p>
                  <p>Der schön<span className="text-orange-600">ste</span> Tag (Le plus beau jour)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Avec les adverbes :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>am schnell<span className="text-orange-600">sten</span> (le plus vite)</p>
                  <p>Sie läuft am schnell<span className="text-orange-600">sten</span>. (Elle court le plus vite.)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Adjectifs irréguliers */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Adjectifs irréguliers importants</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-blue-700">Adjectifs courants irréguliers :</h3>
                <div className="space-y-2">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p>gut (bon) → besser → am besten</p>
                    <p className="text-sm text-gray-700">Das Essen ist besser als gestern. (La nourriture est meilleure qu'hier.)</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p>viel (beaucoup) → mehr → am meisten</p>
                    <p className="text-sm text-gray-700">Er arbeitet mehr als ich. (Il travaille plus que moi.)</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p>gern (volontiers) → lieber → am liebsten</p>
                    <p className="text-sm text-gray-700">Ich trinke lieber Tee. (Je préfère boire du thé.)</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-green-700">Autres irréguliers :</h3>
                <div className="space-y-2">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p>hoch (haut) → höher → am höchsten</p>
                    <p className="text-sm text-gray-700">Der Berg ist höher. (La montagne est plus haute.)</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p>nah (proche) → näher → am nächsten</p>
                    <p className="text-sm text-gray-700">Das Haus ist näher. (La maison est plus proche.)</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p>groß (grand) → größer → am größten</p>
                    <p className="text-sm text-gray-700">Berlin ist größer als München. (Berlin est plus grande que Munich.)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Comparatif d'égalité et d'infériorité */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Comparatif d'égalité et d'infériorité</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Comparatif d'égalité :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>genauso/so + adjectif + wie (aussi... que)</p>
                  <p>Er ist genauso groß <span className="text-orange-600">wie</span> ich. (Il est aussi grand que moi.)</p>
                  <p>Sie ist so intelligent <span className="text-orange-600">wie</span> du. (Elle est aussi intelligente que toi.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Comparatif d'infériorité :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>weniger + adjectif + als (moins... que)</p>
                  <p>Das Haus ist weniger groß <span className="text-orange-600">als</span> das andere. (La maison est moins grande que l'autre.)</p>
                  <p>Er arbeitet weniger schnell <span className="text-orange-600">als</span> sie. (Il travaille moins vite qu'elle.)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Déclinaison au comparatif et superlatif */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Déclinaison au comparatif et superlatif</h2>
            <p className="text-gray-700 mb-4">
              Les formes comparatives et superlatives se déclinent comme les adjectifs normaux selon leur position dans la phrase.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Superlatif épithète (devant nom) :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Das schön<span className="text-orange-600">ste</span> Haus (La plus belle maison - nominatif)</p>
                  <p>Der schön<span className="text-orange-600">sten</span> Häuser (Des plus belles maisons - génitif)</p>
                  <p>Die schön<span className="text-orange-600">sten</span> Häuser (Les plus belles maisons - accusatif)</p>
                  <p>Den schön<span className="text-orange-600">sten</span> Häusern (Aux plus belles maisons - datif)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Comparatif épithète :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Ein schön<span className="text-orange-600">eres</span> Haus (Une plus belle maison - nominatif)</p>
                  <p>Eines schön<span className="text-orange-600">eren</span> Hauses (D'une plus belle maison - génitif)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Erreurs fréquentes */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Erreurs fréquentes à éviter</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Oubli de la déclinaison :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-red-500">❌ Das schönste Haus</p>
                  <p className="text-green-500">✓ Das schönste Haus (nominatif)</p>
                  <p className="text-sm text-gray-700">(Le superlatif épithète prend la terminaison appropriée)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Confusion comparatif/superlatif :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-red-500">❌ Er ist der größter Schüler.</p>
                  <p className="text-green-500">✓ Er ist der größte Schüler.</p>
                  <p className="text-sm text-gray-700">(Superlatif attribut : der + adjectif + -ste)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Superlatif sans "am" :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-red-500">❌ Sie läuft schnellsten.</p>
                  <p className="text-green-500">✓ Sie läuft am schnellsten.</p>
                  <p className="text-sm text-gray-700">(Superlatif d'adverbe : am + adjectif + -sten)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Comparatif irrégulier oublié :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-red-500">❌ Das Essen ist gute.</p>
                  <p className="text-green-500">✓ Das Essen ist besser.</p>
                  <p className="text-sm text-gray-700">(gut → besser, pas de -er régulier)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Exercices pratiques */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Exercices pratiques</h2>
            <p className="text-gray-700 mb-4">
              Mettez en pratique le comparatif et le superlatif avec des exercices interactifs.
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

export default ComparatifSuperlatifPage;

