import React from 'react';

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, BookOpen, ChevronRight } from 'lucide-react';

const PhrasesInterrogativesPage = () => {
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
            <span className="text-gray-900">Phrases Interrogatives</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-orange-100">
                <BookOpen className="h-8 w-8 text-orange-600" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Les Phrases Interrogatives
            </h1>
            <p className="text-lg text-gray-600">
              Maîtriser les différents types de questions en allemand
            </p>
          </div>
        </div>
      </header>

      {/* Section Contenu */}
      <section className="py-8 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">

          {/* Introduction aux questions */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Les types de phrases interrogatives</h2>
            <p className="text-gray-700 mb-4">
              L'allemand distingue deux types principaux de questions : les questions fermées (oui/non) et les questions ouvertes (avec mots interrogatifs).
              Contrairement au français, le verbe conjugué se place en première position dans les questions fermées.
            </p>
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-300">
              <p className="text-gray-800 font-medium">Règle fondamentale :</p>
              <p className="text-gray-700 mt-2">Questions fermées = Verbe en 1ère position | Questions ouvertes = Mot interrogatif + Verbe en 2ème position</p>
            </div>
          </div>

          {/* Questions fermées (Ja/Nein) */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Questions fermées (Ja/Nein-Fragen)</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Structure de base :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Verbe conjugué + Sujet + Compléments + ?</p>
                  <p className="font-medium">Exemples :</p>
                  <p>Kommst du morgen? (Viens-tu demain ?)</p>
                  <p>Isst du Pizza? (Manges-tu de la pizza ?)</p>
                  <p>Hast du Zeit? (As-tu du temps ?)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Au passé composé :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Hast du das Buch gelesen? (As-tu lu le livre ?)</p>
                  <p>Bist du nach Berlin gefahren? (Es-tu allé à Berlin ?)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Avec verbes modaux :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Kannst du mir helfen? (Peux-tu m'aider ?)</p>
                  <p>Musst du arbeiten? (Dois-tu travailler ?)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Questions ouvertes (W-Fragen) */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Questions ouvertes (W-Fragen)</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Structure de base :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Mot interrogatif + Verbe conjugué + Sujet + Compléments + ?</p>
                  <p className="text-sm text-gray-700">(Le verbe reste en deuxième position)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mots interrogatifs courants */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Mots interrogatifs courants</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-blue-700">Questions sur les personnes/choses :</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><span className="text-orange-600">Wer?</span> - Qui ?</li>
                  <li className="ml-4">Wer kommt morgen? (Qui vient demain ?)</li>
                  <li><span className="text-orange-600">Was?</span> - Quoi ?</li>
                  <li className="ml-4">Was machst du? (Que fais-tu ?)</li>
                  <li><span className="text-orange-600">Wen?</span> - Qui ? (COD)</li>
                  <li className="ml-4">Wen siehst du? (Qui vois-tu ?)</li>
                  <li><span className="text-orange-600">Wem?</span> - À qui ? (COI)</li>
                  <li className="ml-4">Wem hilfst du? (À qui aides-tu ?)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-green-700">Questions sur le temps/lieu :</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><span className="text-orange-600">Wann?</span> - Quand ?</li>
                  <li className="ml-4">Wann kommst du? (Quand viens-tu ?)</li>
                  <li><span className="text-orange-600">Wo?</span> - Où ?</li>
                  <li className="ml-4">Wo wohnst du? (Où habites-tu ?)</li>
                  <li><span className="text-orange-600">Wohin?</span> - Où ? (direction)</li>
                  <li className="ml-4">Wohin gehst du? (Où vas-tu ?)</li>
                  <li><span className="text-orange-600">Woher?</span> - D'où ?</li>
                  <li className="ml-4">Woher kommst du? (D'où viens-tu ?)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-purple-700">Questions sur la manière :</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><span className="text-orange-600">Wie?</span> - Comment ?</li>
                  <li className="ml-4">Wie geht es dir? (Comment vas-tu ?)</li>
                  <li><span className="text-orange-600">Warum?</span> - Pourquoi ?</li>
                  <li className="ml-4">Warum bist du traurig? (Pourquoi es-tu triste ?)</li>
                  <li><span className="text-orange-600">Wieso?</span> - Pourquoi ?</li>
                  <li className="ml-4">Wieso hast du das gemacht? (Pourquoi as-tu fait ça ?)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-red-700">Questions sur la quantité :</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><span className="text-orange-600">Wie viel?</span> - Combien ? (non comptable)</li>
                  <li className="ml-4">Wie viel kostet das? (Combien ça coûte ?)</li>
                  <li><span className="text-orange-600">Wie viele?</span> - Combien ? (comptable)</li>
                  <li className="ml-4">Wie viele Bücher hast du? (Combien de livres as-tu ?)</li>
                  <li><span className="text-orange-600">Welcher/Welche/Welches?</span> - Quel/Quelle ?</li>
                  <li className="ml-4">Welches Buch liest du? (Quel livre lis-tu ?)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Questions indirectes */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Questions indirectes</h2>
            <p className="text-gray-700 mb-4">
              Dans les propositions subordonnées interrogatives, la structure change : pas de point d'interrogation,
              et le verbe passe en fin de proposition.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Avec conjonction :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Ich weiß nicht, <span className="text-orange-600">ob</span> du morgen kommst.</p>
                  <p className="text-sm text-gray-700">(Je ne sais pas si tu viens demain.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Avec mot interrogatif :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Ich weiß nicht, <span className="text-orange-600">wann</span> du morgen kommst.</p>
                  <p className="text-sm text-gray-700">(Je ne sais pas quand tu viens demain.)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Questions avec prépositions */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Questions avec prépositions</h2>
            <p className="text-gray-700 mb-4">
              Les prépositions se combinent souvent avec des mots interrogatifs pour former des locutions interrogatives.
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Préposition + mot interrogatif :</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p><span className="text-orange-600">Womit?</span> = Avec quoi ?</p>
                    <p className="text-sm text-gray-700">Womit schreibst du? (Avec quoi écris-tu ?)</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p><span className="text-orange-600">Worüber?</span> = Au sujet de quoi ?</p>
                    <p className="text-sm text-gray-700">Worüber sprecht ihr? (De quoi parlez-vous ?)</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p><span className="text-orange-600">Wofür?</span> = Pour quoi ?</p>
                    <p className="text-sm text-gray-700">Wofür brauchst du Geld? (Pour quoi as-tu besoin d'argent ?)</p>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <p><span className="text-orange-600">Woraus?</span> = De quoi ? (matière)</p>
                    <p className="text-sm text-gray-700">Woraus ist das gemacht? (De quoi est-ce fait ?)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Erreurs fréquentes */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Erreurs fréquentes à éviter</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Ordre des mots incorrect :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-red-500">❌ Du kommst morgen?</p>
                  <p className="text-green-500">✓ Kommst du morgen?</p>
                  <p className="text-sm text-gray-700">(Verbe en première position pour les questions fermées)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Confusion wo/wohin/woher :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-red-500">❌ Wo gehst du nach Berlin?</p>
                  <p className="text-green-500">✓ Wohin gehst du?</p>
                  <p className="text-sm text-gray-700">(wohin pour indiquer la direction)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Oubli de la déclinaison :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-red-500">❌ Wen hilfst du?</p>
                  <p className="text-green-500">✓ Wem hilfst du?</p>
                  <p className="text-sm text-gray-700">(wem pour COI avec helfen)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Point d'interrogation manquant :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-red-500">❌ Was machst du</p>
                  <p className="text-green-500">✓ Was machst du?</p>
                  <p className="text-sm text-gray-700">(Toutes les questions directes prennent un point d'interrogation)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Exercices pratiques */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Exercices pratiques</h2>
            <p className="text-gray-700 mb-4">
              Mettez en pratique les phrases interrogatives avec des exercices interactifs.
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

export default PhrasesInterrogativesPage;

