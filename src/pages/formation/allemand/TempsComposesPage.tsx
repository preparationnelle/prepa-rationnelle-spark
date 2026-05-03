import React from 'react';

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, BookOpen, ChevronRight } from 'lucide-react';

const TempsComposesPage = () => {
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
            <span className="text-gray-900">Formation des Temps Composés</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-orange-100">
                <BookOpen className="h-8 w-8 text-orange-600" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Formation des Temps Composés
            </h1>
            <p className="text-lg text-gray-600">
              Maîtriser les temps composés allemands pour une expression temporelle précise
            </p>
          </div>
        </div>
      </header>

      {/* Section Contenu */}
      <section className="py-8 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">

          {/* Introduction aux difficultés */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Difficultés des temps composés</h2>
            <p className="text-gray-700 mb-4">
              La formation des temps composés présente des difficultés particulières :
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li><strong>Choix de l'auxiliaire approprié</strong> ("haben" ou "sein")</li>
              <li><strong>Position de l'auxiliaire et du participe passé</strong> dans la phrase</li>
              <li><strong>Formation du participe passé</strong> des verbes forts et faibles</li>
            </ul>
          </div>

          {/* Choix de l'auxiliaire */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Règle 1 : Choix de l'auxiliaire (haben/sein)</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2 text-green-700">HABEN utilisent la majorité des verbes :</h3>
                <ul className="list-disc list-inside text-gray-700 ml-4">
                  <li>Verbes transitifs (avec COD)</li>
                  <li>Verbes réfléchis</li>
                  <li>Verbes impersonnels</li>
                  <li>Verbes de modalité</li>
                </ul>
                <div className="bg-gray-50 p-4 rounded-lg mt-2">
                  <p>Ich <span className="text-orange-600">habe</span> das Buch <span className="text-orange-600">gelesen</span>.</p>
                  <p className="text-sm text-gray-700">(J'ai lu le livre.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2 text-blue-700">SEIN utilisent certains verbes :</h3>
                <ul className="list-disc list-inside text-gray-700 ml-4">
                  <li>Verbes de mouvement (gehen, kommen, fahren, etc.)</li>
                  <li>Verbes de changement d'état (werden, aufwachen, etc.)</li>
                  <li>Verbes sein, bleiben, geschehen, passieren</li>
                </ul>
                <div className="bg-gray-50 p-4 rounded-lg mt-2">
                  <p>Ich <span className="text-orange-600">bin</span> nach Berlin <span className="text-orange-600">gefahren</span>.</p>
                  <p className="text-sm text-gray-700">(Je suis allé à Berlin.)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Formation du participe passé */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Règle 2 : Formation du participe passé</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-green-700">Verbes faibles (réguliers) :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Infinitif + <span className="text-orange-600">-(e)t</span></p>
                  <p>machen → ge<span className="text-orange-600">macht</span></p>
                  <p>lernen → ge<span className="text-orange-600">lernt</span></p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-blue-700">Verbes forts (irréguliers) :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Changement vocalique + <span className="text-orange-600">-en</span></p>
                  <p>gehen → ge<span className="text-orange-600">gangen</span></p>
                  <p>kommen → ge<span className="text-orange-600">kommen</span></p>
                </div>
              </div>
            </div>
          </div>

          {/* Position dans la phrase */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Règle 3 : Position dans la phrase</h2>
            <p className="text-gray-700 mb-4">
              Dans les propositions principales, l'auxiliaire conjugué occupe la 2ème position, le participe passé se place en fin :
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Parfait (présent) :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Sujet + Auxiliaire conjugué + Compléments + Participe passé</p>
                  <p>Ich <span className="text-orange-600">habe</span> gestern das Buch <span className="text-orange-600">gelesen</span>.</p>
                  <p className="text-sm text-gray-700">(J'ai lu le livre hier.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Plus-que-parfait :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Ich <span className="text-orange-600">hatte</span> das Buch schon <span className="text-orange-600">gelesen</span>.</p>
                  <p className="text-sm text-gray-700">(J'avais déjà lu le livre.)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Temps composés principaux */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Les temps composés principaux</h2>
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold mb-3">1. Le Parfait (Perfekt) :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium">Formation : haben/sein + Participe passé</p>
                  <p>Ich <span className="text-orange-600">habe</span> gearbeitet. (J'ai travaillé.)</p>
                  <p>Ich <span className="text-orange-600">bin</span> gegangen. (Je suis parti.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">2. Le Plus-que-parfait (Plusquamperfekt) :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium">Formation : hatte/war + Participe passé</p>
                  <p>Ich <span className="text-orange-600">hatte</span> gearbeitet. (J'avais travaillé.)</p>
                  <p>Ich <span className="text-orange-600">war</span> gegangen. (J'étais parti.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3">3. Le Futur II (Futur II) :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="font-medium">Formation : werden + Participe passé + haben/sein</p>
                  <p>Ich <span className="text-orange-600">werde</span> gearbeitet <span className="text-orange-600">haben</span>. (J'aurai travaillé.)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Erreurs fréquentes */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Erreurs fréquentes</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Mauvais choix d'auxiliaire :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-red-500">❌ Ich habe nach Hause gegangen.</p>
                  <p className="text-green-500">✓ Ich bin nach Hause gegangen.</p>
                  <p className="text-sm text-gray-700">(sein pour les verbes de mouvement)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Participe passé mal formé :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-red-500">❌ Ich habe gegessen das Essen.</p>
                  <p className="text-green-500">✓ Ich habe das Essen gegessen.</p>
                  <p className="text-sm text-gray-700">(participe passé en fin de phrase)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Oubli du préfixe "ge-" :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-red-500">❌ Ich habe machen das.</p>
                  <p className="text-green-500">✓ Ich habe das gemacht.</p>
                  <p className="text-sm text-gray-700">(participe passé complet)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Exercices pratiques */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Exercices pratiques</h2>
            <p className="text-gray-700 mb-4">
              Mettez en pratique la formation des temps composés avec des exercices interactifs.
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

export default TempsComposesPage;

