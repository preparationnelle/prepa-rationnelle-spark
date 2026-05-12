import React from 'react';

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, BookOpen, ChevronRight } from 'lucide-react';

const NegationPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Header Section */}
      <header className="border-b border-gray-200">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center text-sm text-gray-600">
            <Link to="/" className="flex items-center gap-1 hover:text-pr-black transition-colors">
              <BookOpen className="h-4 w-4" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-2" />
            <Link to="/formations" className="hover:text-pr-black transition-colors">
              Toutes les formations
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-2" />
            <Link to="/formation/allemand" className="hover:text-pr-black transition-colors">
              Formation Allemand
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-2" />
            <Link to="/formation/allemand-grammaire" className="hover:text-pr-black transition-colors">
              Grammaire
            </Link>
            <ChevronRight className="h-3 w-3 text-gray-400 mx-2" />
            <span className="text-gray-900">La Négation</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-gray-100">
                <BookOpen className="h-8 w-8 text-pr-black" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              La Négation et les Particules de Négation
            </h1>
            <p className="text-lg text-gray-600">
              Maîtriser l'usage de nicht, kein et les autres particules de négation
            </p>
          </div>
        </div>
      </header>

      {/* Section Contenu */}
      <section className="py-8 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">

          {/* Introduction à la négation */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-pr-black border-b border-gray-200 pb-2">Les particules de négation en allemand</h2>
            <p className="text-gray-700 mb-4">
              L'allemand utilise plusieurs particules de négation selon le contexte : <strong>nicht</strong> et <strong>kein</strong> sont les plus fréquentes,
              mais il existe aussi <strong>nie</strong>, <strong>niemand</strong>, <strong>nichts</strong>, etc.
            </p>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-orange-300">
              <p className="text-gray-800 font-medium">Règle générale :</p>
              <p className="text-gray-700 mt-2"><strong>nicht</strong> = négation générale | <strong>kein</strong> = négation d'un nom indéfini</p>
            </div>
          </div>

          {/* Nicht vs Kein */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-pr-black border-b border-gray-200 pb-2">Nicht vs Kein : quand utiliser quoi ?</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-green-700">NICHT pour :</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Noms définis : <span className="text-pr-black">der Mann → nicht der Mann</span></li>
                  <li>Verbes : <span className="text-pr-black">Ich esse → Ich esse nicht</span></li>
                  <li>Adjectifs : <span className="text-pr-black">Er ist groß → Er ist nicht groß</span></li>
                  <li>Adverbes : <span className="text-pr-black">Sehr schnell → Nicht sehr schnell</span></li>
                  <li>Prépositions : <span className="text-pr-black">Mit dem Auto → Nicht mit dem Auto</span></li>
                </ul>
                <div className="bg-gray-50 p-4 rounded-lg mt-3">
                  <p>Ich kaufe <span className="text-pr-black">nicht</span> das Auto.</p>
                  <p className="text-sm text-gray-700">(Je n'achète pas la voiture.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-carnet-red">KEIN pour :</h3>
                <ul className="list-disc list-inside text-gray-700 space-y-2">
                  <li>Noms indéfinis : <span className="text-pr-black">ein Mann → kein Mann</span></li>
                  <li>Noms sans article : <span className="text-pr-black">Brot → kein Brot</span></li>
                  <li>Quantifieurs : <span className="text-pr-black">viel Zeit → keine Zeit</span></li>
                </ul>
                <div className="bg-gray-50 p-4 rounded-lg mt-3">
                  <p>Ich habe <span className="text-pr-black">kein</span> Geld.</p>
                  <p className="text-sm text-gray-700">(Je n'ai pas d'argent.)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Position de nicht */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-pr-black border-b border-gray-200 pb-2">Position de "nicht" dans la phrase</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Négation totale (phrase complète) :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Sujet + Verbe + Compléments + <span className="text-pr-black">nicht</span></p>
                  <p>Ich esse das Brot <span className="text-pr-black">nicht</span>.</p>
                  <p className="text-sm text-gray-700">(Je ne mange pas le pain.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Négation partielle (élément spécifique) :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>nicht + Élément nié</p>
                  <p>Ich esse <span className="text-pr-black">nicht</span> das Brot, sondern den Kuchen.</p>
                  <p className="text-sm text-gray-700">(Je ne mange pas le pain, mais le gâteau.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Avec les temps composés :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Auxiliaire conjugué + Compléments + nicht + Participe passé</p>
                  <p>Ich habe das Buch <span className="text-pr-black">nicht</span> gelesen.</p>
                  <p className="text-sm text-gray-700">(Je n'ai pas lu le livre.)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Autres particules de négation */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-pr-black border-b border-gray-200 pb-2">Autres particules de négation</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Particules temporelles :</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p><span className="text-pr-black">nie</span> = jamais</p>
                    <p className="text-sm text-gray-700">Ich gehe nie ins Kino. (Je ne vais jamais au cinéma.)</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p><span className="text-pr-black">nie mehr</span> = ne... plus</p>
                    <p className="text-sm text-gray-700">Ich rauche nie mehr. (Je ne fume plus.)</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Particules pronominales :</h3>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p><span className="text-pr-black">niemand</span> = personne</p>
                    <p className="text-sm text-gray-700">Niemand ist da. (Personne n'est là.)</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p><span className="text-pr-black">nichts</span> = rien</p>
                    <p className="text-sm text-gray-700">Ich sehe nichts. (Je ne vois rien.)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Double négation interdite */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-pr-black border-b border-gray-200 pb-2">Attention : pas de double négation !</h2>
            <p className="text-gray-700 mb-4">
              Contrairement au français, l'allemand n'utilise pas la double négation. Une seule particule de négation suffit.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-red-600">❌ Incorrect :</h3>
                <div className="bg-red-50 p-4 rounded-lg">
                  <p>Ich sehe <span className="text-red-500">nicht nichts</span>.</p>
                  <p>Ich sehe <span className="text-red-500">kein Geld nicht</span>.</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-green-600">✅ Correct :</h3>
                <div className="bg-green-50 p-4 rounded-lg">
                  <p>Ich sehe <span className="text-green-500">nichts</span>.</p>
                  <p>Ich habe <span className="text-green-500">kein Geld</span>.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Erreurs fréquentes */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-pr-black border-b border-gray-200 pb-2">Erreurs fréquentes à éviter</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Confusion nicht/kein :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-red-500">❌ Ich habe nicht Geld.</p>
                  <p className="text-green-500">✓ Ich habe kein Geld.</p>
                  <p className="text-sm text-gray-700">(kein pour nom indéfini sans article)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Position de nicht incorrecte :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-red-500">❌ Ich esse nicht.</p>
                  <p className="text-green-500">✓ Ich esse das Brot nicht.</p>
                  <p className="text-sm text-gray-700">(nicht se place généralement en fin de phrase)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Double négation :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-red-500">❌ Ich sehe niemand nicht.</p>
                  <p className="text-green-500">✓ Ich sehe niemand.</p>
                  <p className="text-sm text-gray-700">(niemand contient déjà la négation)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Négation de kein :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-red-500">❌ Ich habe kein Geld nicht.</p>
                  <p className="text-green-500">✓ Ich habe kein Geld.</p>
                  <p className="text-sm text-gray-700">(kein est déjà négatif)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Exercices pratiques */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-pr-black border-b border-gray-200 pb-2">Exercices pratiques</h2>
            <p className="text-gray-700 mb-4">
              Mettez en pratique la négation allemande avec des exercices interactifs.
            </p>
            <div className="text-center">
              <Button variant="outline" className="border-orange-300 text-pr-black hover:bg-gray-50" disabled>
                <FileText className="h-4 w-4 mr-2" />
                Exercices en développement
              </Button>
              <p className="text-sm text-gray-500 mt-2">Les exercices interactifs seront bientôt disponibles</p>
            </div>
          </div>

          {/* Bouton retour */}
          <div className="text-center pb-8">
            <Link to="/formation/allemand-grammaire">
              <Button variant="outline" className="border-orange-300 text-pr-black hover:bg-gray-50">
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

export default NegationPage;

