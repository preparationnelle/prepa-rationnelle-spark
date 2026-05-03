import React from 'react';

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, BookOpen, ChevronRight } from 'lucide-react';

const VerbesModauxComplexesPage = () => {
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
            <span className="text-gray-900">Verbes Modaux Complexes</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-orange-100">
                <BookOpen className="h-8 w-8 text-orange-600" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Verbes Modaux Complexes
            </h1>
            <p className="text-lg text-gray-600">
              Maîtriser les six verbes modaux allemands et leurs particularités
            </p>
          </div>
        </div>
      </header>

      {/* Section Contenu */}
      <section className="py-8 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">

          {/* Introduction */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Les six verbes modaux allemands</h2>
            <p className="text-gray-700 mb-4">
              Les six verbes modaux allemands (können, dürfen, müssen, sollen, wollen, mögen) présentent des conjugaisons irrégulières et des nuances sémantiques spécifiques. Leur conjugaison aux temps composés utilise l'infinitif au lieu du participe passé, ce qui constitue une exception grammaticale.
            </p>
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-300">
              <p className="text-gray-800 font-medium">Exception importante :</p>
              <p className="text-gray-700 mt-2">Contrairement aux autres verbes, les modaux utilisent leur infinitif aux temps composés.</p>
            </div>
          </div>

          {/* Les six verbes modaux */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Présentation des six verbes modaux</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-blue-700">können (pouvoir/capacité)</h3>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="font-medium">Présent : kann, kannst, kann, können, könnt, können</p>
                  <p>Ich <span className="text-orange-600">kann</span> Deutsch sprechen.</p>
                  <p className="text-sm text-gray-700">(Je peux parler allemand.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-red-700">dürfen (avoir le droit)</h3>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="font-medium">Présent : darf, darfst, darf, dürfen, dürft, dürfen</p>
                  <p>Du <span className="text-orange-600">darfst</span> hier rauchen.</p>
                  <p className="text-sm text-gray-700">(Tu as le droit de fumer ici.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-green-700">müssen (devoir/obligation)</h3>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="font-medium">Présent : muss, musst, muss, müssen, müsst, müssen</p>
                  <p>Er <span className="text-orange-600">muss</span> arbeiten.</p>
                  <p className="text-sm text-gray-700">(Il doit travailler.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-purple-700">sollen (devoir/conseil)</h3>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="font-medium">Présent : soll, sollst, soll, sollen, sollt, sollen</p>
                  <p>Sie <span className="text-orange-600">soll</span> mehr lernen.</p>
                  <p className="text-sm text-gray-700">(Elle devrait étudier davantage.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-orange-700">wollen (vouloir)</h3>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="font-medium">Présent : will, willst, will, wollen, wollt, wollen</p>
                  <p>Wir <span className="text-orange-600">wollen</span> verreisen.</p>
                  <p className="text-sm text-gray-700">(Nous voulons voyager.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-teal-700">mögen (aimer)</h3>
                <div className="bg-gray-50 p-4 rounded-lg mb-4">
                  <p className="font-medium">Présent : mag, magst, mag, mögen, mögt, mögen</p>
                  <p>Ich <span className="text-orange-600">mag</span> Schokolade.</p>
                  <p className="text-sm text-gray-700">(J'aime le chocolat.)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formation des temps composés */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Formation des temps composés</h2>
            <p className="text-gray-700 mb-4">
              Les verbes modaux forment leurs temps composés avec leur infinitif (et non leur participe passé) :
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Parfait (Perfekt) :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Auxiliaire haben + infinitif du modal + infinitif du verbe principal</p>
                  <p>Ich <span className="text-orange-600">habe</span> das <span className="text-orange-600">machen können</span>.</p>
                  <p className="text-sm text-gray-700">(J'ai pu le faire.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Plus-que-parfait :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Ich <span className="text-orange-600">hatte</span> das <span className="text-orange-600">machen können</span>.</p>
                  <p className="text-sm text-gray-700">(J'avais pu le faire.)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Double infinitif */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Le "double infinitif"</h2>
            <p className="text-gray-700 mb-4">
              Dans les subordonnées, les deux infinitifs se placent en fin de phrase :
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Avec weil (parce que) :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Er ist nicht gekommen, <span className="text-orange-600">weil</span> er hat <span className="text-orange-600">arbeiten müssen</span>.</p>
                  <p className="text-sm text-gray-700">(Il n'est pas venu parce qu'il a dû travailler.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Avec dass (que) :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Ich weiß, dass du das <span className="text-orange-600">hättest machen sollen</span>.</p>
                  <p className="text-sm text-gray-700">(Je sais que tu aurais dû le faire.)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Nuances sémantiques */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Nuances sémantiques importantes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Différenciation sollen/wollen :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><span className="text-purple-700">sollen</span> = devoir/conseil : Du sollst das machen. (Tu devrais le faire.)</p>
                  <p><span className="text-orange-700">wollen</span> = vouloir : Du willst das machen. (Tu veux le faire.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Différenciation können/mögen :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><span className="text-blue-700">können</span> = pouvoir/capacité : Ich kann schwimmen. (Je sais nager.)</p>
                  <p><span className="text-teal-700">mögen</span> = aimer : Ich mag schwimmen. (J'aime nager.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">dürfen au négatif :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Du <span className="text-red-700">darfst</span> nicht rauchen. (= Tu n'as pas le droit de fumer.)</p>
                  <p className="text-sm text-gray-700">Attention : pas de double négation !</p>
                </div>
              </div>
            </div>
          </div>

          {/* Erreurs fréquentes */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Erreurs fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Formation du parfait incorrecte :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-red-500">❌ Ich habe gekonnt das machen.</p>
                  <p className="text-green-500">✓ Ich habe das machen können.</p>
                  <p className="text-sm text-gray-700">(Utiliser l'infinitif, pas le participe passé)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Confusion sollen/wollen :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-red-500">❌ Du sollst kommen. (si c'est un désir)</p>
                  <p className="text-green-500">✓ Du willst kommen. (si c'est un désir)</p>
                  <p className="text-sm text-gray-700">(sollen = devoir/conseil, wollen = vouloir)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Double négation :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-red-500">❌ Du darfst nicht nicht rauchen.</p>
                  <p className="text-green-500">✓ Du darfst nicht rauchen.</p>
                  <p className="text-sm text-gray-700">(dürfen au négatif ne prend pas "nicht" supplémentaire)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Exercices pratiques */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Exercices pratiques</h2>
            <p className="text-gray-700 mb-4">
              Mettez en pratique les verbes modaux complexes avec des exercices interactifs.
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

export default VerbesModauxComplexesPage;

