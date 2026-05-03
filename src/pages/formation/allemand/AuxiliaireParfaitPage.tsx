import React from 'react';

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, BookOpen, ChevronRight } from 'lucide-react';

const AuxiliaireParfaitPage = () => {
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
            <span className="text-gray-900">Choix de l'Auxiliaire au Parfait</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-orange-100">
                <BookOpen className="h-8 w-8 text-orange-600" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Choix de l'Auxiliaire au Parfait
            </h1>
            <p className="text-lg text-gray-600">
              Maîtriser la distinction haben/sein pour former le parfait
            </p>
          </div>
        </div>
      </header>

      {/* Section Contenu */}
      <section className="py-8 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">

          {/* Introduction à la difficulté */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">La distinction haben/sein</h2>
            <p className="text-gray-700 mb-4">
              La distinction entre "haben" et "sein" pour former le parfait constitue une difficulté majeure pour les apprenants. Contrairement au français qui utilise principalement "avoir", l'allemand utilise des critères précis pour choisir l'auxiliaire approprié.
            </p>
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-300">
              <p className="text-gray-800 font-medium">Règle générale :</p>
              <p className="text-gray-700 mt-2">HABEN pour la majorité des verbes | SEIN pour les verbes de mouvement/changement d'état</p>
            </div>
          </div>

          {/* HABEN : la majorité des verbes */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">HABEN : la majorité des verbes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3 text-green-700">Verbes transitifs (avec COD) :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Ich <span className="text-orange-600">habe</span> das Buch <span className="text-orange-600">gelesen</span>.</p>
                  <p className="text-sm text-gray-700">(J'ai lu le livre.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-blue-700">Verbes réfléchis :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Ich <span className="text-orange-600">habe</span> mich <span className="text-orange-600">gewaschen</span>.</p>
                  <p className="text-sm text-gray-700">(Je me suis lavé.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-purple-700">Verbes impersonnels :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Es <span className="text-orange-600">hat</span> <span className="text-orange-600">geregnet</span>.</p>
                  <p className="text-sm text-gray-700">(Il a plu.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-red-700">Verbes de modalité :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>Ich <span className="text-orange-600">habe</span> arbeiten <span className="text-orange-600">müssen</span>.</p>
                  <p className="text-sm text-gray-700">(J'ai dû travailler.)</p>
                </div>
              </div>
            </div>
          </div>

          {/* SEIN : verbes de mouvement et changement d'état */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">SEIN : verbes de mouvement et changement d'état</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-3 text-blue-700">Verbes de mouvement :</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p>gehen (aller) → Ich bin gegangen.</p>
                    <p className="text-sm text-gray-700">(Je suis allé.)</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p>kommen (venir) → Ich bin gekommen.</p>
                    <p className="text-sm text-gray-700">(Je suis venu.)</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p>fahren (aller en véhicule) → Ich bin gefahren.</p>
                    <p className="text-sm text-gray-700">(Je suis allé en voiture.)</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p>laufen (courir) → Ich bin gelaufen.</p>
                    <p className="text-sm text-gray-700">(J'ai couru.)</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-green-700">Verbes de changement d'état :</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p>aufstehen (se lever) → Ich bin aufgestanden.</p>
                    <p className="text-sm text-gray-700">(Je me suis levé.)</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p>aufwachen (se réveiller) → Ich bin aufgewacht.</p>
                    <p className="text-sm text-gray-700">(Je me suis réveillé.)</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p>sterben (mourir) → Er ist gestorben.</p>
                    <p className="text-sm text-gray-700">(Il est mort.)</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p>werden (devenir) → Sie ist Lehrerin geworden.</p>
                    <p className="text-sm text-gray-700">(Elle est devenue professeure.)</p>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-3 text-purple-700">Verbes spéciaux avec SEIN :</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p>sein (être) → Ich bin gewesen.</p>
                    <p className="text-sm text-gray-700">(J'ai été.)</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p>bleiben (rester) → Er ist geblieben.</p>
                    <p className="text-sm text-gray-700">(Il est resté.)</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p>geschehen (arriver) → Es ist geschehen.</p>
                    <p className="text-sm text-gray-700">(C'est arrivé.)</p>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-lg">
                    <p>passieren (arriver) → Es ist passiert.</p>
                    <p className="text-sm text-gray-700">(C'est arrivé.)</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Cas particuliers */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Cas particuliers à retenir</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Verbes de mouvement intransitifs :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>schwimmen (nager) → Ich bin geschwommen. (SEIN)</p>
                  <p>fliegen (voler) → Der Vogel ist geflogen. (SEIN)</p>
                  <p className="text-sm text-gray-700">Même sans destination précise, ces verbes utilisent SEIN.</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Verbes à particule séparable :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>aufstehen → Ich bin aufgestanden. (SEIN - mouvement)</p>
                  <p>einladen → Ich habe eingeladen. (HABEN - transitif)</p>
                  <p className="text-sm text-gray-700">Le choix dépend du verbe de base, pas de la particule.</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Verbes à double sens :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>fahren (aller en véhicule) → Ich bin gefahren. (SEIN)</p>
                  <p>fahren (conduire qq'un) → Ich habe ihn gefahren. (HABEN)</p>
                  <p className="text-sm text-gray-700">Transitif = HABEN | Intransitif = SEIN</p>
                </div>
              </div>
            </div>
          </div>

          {/* Erreurs fréquentes */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Erreurs fréquentes à éviter</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Verbes de mouvement avec HABEN :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-red-500">❌ Ich habe nach Berlin gegangen.</p>
                  <p className="text-green-500">✓ Ich bin nach Berlin gegangen.</p>
                  <p className="text-sm text-gray-700">(gehen = mouvement → SEIN)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Verbes réfléchis avec SEIN :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-red-500">❌ Ich bin mich gewaschen.</p>
                  <p className="text-green-500">✓ Ich habe mich gewaschen.</p>
                  <p className="text-sm text-gray-700">(verbes réfléchis → HABEN)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Confusion fahren transitif/intransitif :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-red-500">❌ Ich habe das Auto gefahren.</p>
                  <p className="text-green-500">✓ Ich bin mit dem Auto gefahren.</p>
                  <p className="text-sm text-gray-700">(aller en voiture → SEIN)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Verbes à particule séparable :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-red-500">❌ Ich habe aufgestanden.</p>
                  <p className="text-green-500">✓ Ich bin aufgestanden.</p>
                  <p className="text-sm text-gray-700">(aufstehen = mouvement → SEIN)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Mnémoniques */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Astuces mnémotechniques</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Groupe SEIN (mouvement/changement) :</h3>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <p className="font-medium">Sein pour : Mouvement + Changement d'État</p>
                  <p className="text-sm text-gray-700">gehen, kommen, fahren, laufen, aufstehen, sterben, werden, sein, bleiben...</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Règle générale :</h3>
                <div className="bg-blue-50 p-4 rounded-lg">
                  <p className="font-medium">En cas de doute → HABEN</p>
                  <p className="text-sm text-gray-700">La majorité des verbes utilisent HABEN, SEIN est l'exception.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Exercices pratiques */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Exercices pratiques</h2>
            <p className="text-gray-700 mb-4">
              Mettez en pratique le choix de l'auxiliaire au parfait avec des exercices interactifs.
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

export default AuxiliaireParfaitPage;

