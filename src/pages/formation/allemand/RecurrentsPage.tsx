import React from 'react';

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, BookOpen, ChevronRight } from 'lucide-react';

const RecurrentsPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="flex items-center gap-1 hover:text-pr-orange-dark transition-colors">
              <BookOpen className="h-4 w-4" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-2" />
            <Link to="/formations" className="hover:text-pr-orange-dark transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-2" />
            <Link to="/formation/allemand" className="hover:text-pr-orange-dark transition-colors">
              Formation Allemand
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-2" />
            <Link to="/formation/allemand-grammaire" className="hover:text-pr-orange-dark transition-colors">
              Grammaire
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-2" />
            <span className="text-gray-900">Points Récurrents</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-orange-100">
                <BookOpen className="h-8 w-8 text-pr-orange-dark" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Points Récurrents de Grammaire
            </h1>
            <p className="text-lg text-gray-600">
              Les règles de grammaire les plus fréquemment testées
            </p>
          </div>
        </div>
      </header>

      {/* Section Contenu */}
      <section className="py-8 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">

          {/* Les constructions subordonnées */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-pr-orange-dark border-b border-orange-200 pb-2">Les constructions subordonnées</h2>
            <p className="text-gray-700 mb-4">
              Les constructions subordonnées les plus fréquentes aux concours :
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Propositions avec "dass"</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Ich glaube, <span className="text-pr-orange-dark">dass</span> er kommt.</p>
                  <p className="text-sm text-gray-700">(Je crois qu'il vient.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Propositions avec "weil"</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Ich bleibe zu Hause, <span className="text-pr-orange-dark">weil</span> es regnet.</p>
                  <p className="text-sm text-gray-700">(Je reste à la maison parce qu'il pleut.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Propositions avec "wenn"</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p><span className="text-pr-orange-dark">Wenn</span> es regnet, bleibe ich zu Hause.</p>
                  <p className="text-sm text-gray-700">(Quand/Si il pleut, je reste à la maison.)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Les prépositions et leurs cas */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-pr-orange-dark border-b border-orange-200 pb-2">Les prépositions et leurs cas</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Prépositions + Accusatif</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2">durch, für, gegen, ohne, um</p>
                  <p>Ich gehe <span className="text-pr-orange-dark">durch den</span> Park.</p>
                  <p className="text-sm text-gray-700">(Je traverse le parc.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Prépositions + Datif</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2">aus, bei, mit, nach, seit, von, zu</p>
                  <p>Ich komme <span className="text-pr-orange-dark">aus der</span> Schule.</p>
                  <p className="text-sm text-gray-700">(Je viens de l'école.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Prépositions mixtes</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="mb-2">an, auf, hinter, in, neben, über, unter, vor, zwischen</p>
                  <p>Ich stelle die Lampe <span className="text-pr-orange-dark">auf den</span> Tisch. (ACC - mouvement)</p>
                  <p>Die Lampe steht <span className="text-pr-orange-dark">auf dem</span> Tisch. (DAT - position)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Les verbes à particule séparable */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-pr-orange-dark border-b border-orange-200 pb-2">Les verbes à particule séparable</h2>
            <p className="text-gray-700 mb-4">
              Les verbes à particule séparable sont très fréquents en allemand. La particule se détache 
              du verbe dans les phrases principales au présent et au prétérit.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <h3 className="font-semibold mb-2">Exemples :</h3>
              <ul className="space-y-2">
                <li>aufstehen → Ich <span className="text-pr-orange-dark">stehe</span> früh <span className="text-pr-orange-dark">auf</span>.</li>
                <li>ankommen → Der Zug <span className="text-pr-orange-dark">kommt</span> pünktlich <span className="text-pr-orange-dark">an</span>.</li>
                <li>mitmachen → Er <span className="text-pr-orange-dark">macht</span> gerne <span className="text-pr-orange-dark">mit</span>.</li>
              </ul>
            </div>
          </div>

          {/* Les verbes de modalité */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-pr-orange-dark border-b border-orange-200 pb-2">Les verbes de modalité</h2>
            <p className="text-gray-700 mb-4">
              Les verbes de modalité expriment une modalité (possibilité, obligation, etc.) 
              et sont suivis d'un infinitif en fin de phrase.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">können (pouvoir)</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Ich <span className="text-pr-orange-dark">kann</span> gut Deutsch <span className="text-pr-orange-dark">sprechen</span>.</p>
                  <p className="text-sm text-gray-700">(Je peux bien parler allemand.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">müssen (devoir)</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Er <span className="text-pr-orange-dark">muss</span> viel <span className="text-pr-orange-dark">arbeiten</span>.</p>
                  <p className="text-sm text-gray-700">(Il doit beaucoup travailler.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">wollen (vouloir)</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Sie <span className="text-pr-orange-dark">will</span> nach Berlin <span className="text-pr-orange-dark">fahren</span>.</p>
                  <p className="text-sm text-gray-700">(Elle veut aller à Berlin.)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Les erreurs fréquentes à éviter */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-pr-orange-dark border-b border-orange-200 pb-2">Les erreurs fréquentes à éviter</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Position du verbe</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-red-500">❌ Ich weiß wo er geht.</p>
                  <p className="text-green-500">✓ Ich weiß, wo er hingeht.</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Accord du verbe</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-red-500">❌ Die Leute ist nett.</p>
                  <p className="text-green-500">✓ Die Leute sind nett.</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Choix de l'auxiliaire</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-red-500">❌ Ich habe nach Berlin gefahren.</p>
                  <p className="text-green-500">✓ Ich bin nach Berlin gefahren.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Exercices pratiques */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-pr-orange-dark border-b border-orange-200 pb-2">Exercices pratiques</h2>
            <p className="text-gray-700 mb-4">
              Mettez en pratique ces points de grammaire avec des exercices interactifs.
            </p>
            <div className="text-center">
              <Button variant="outline" className="border-orange-300 text-pr-orange-dark hover:bg-orange-50" disabled>
                <FileText className="h-4 w-4 mr-2" />
                Exercices en développement
              </Button>
              <p className="text-sm text-gray-500 mt-2">Les exercices interactifs seront bientôt disponibles</p>
            </div>
          </div>

          {/* Bouton retour */}
          <div className="text-center pb-8">
            <Link to="/formation/allemand-grammaire">
              <Button variant="outline" className="border-orange-300 text-pr-orange-dark hover:bg-orange-50">
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

export default RecurrentsPage; 