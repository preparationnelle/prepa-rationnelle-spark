import React from 'react';

import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ArrowLeft, FileText, BookOpen, ChevronRight } from 'lucide-react';

const VerbesAParticulePage = () => {
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
            <span className="text-gray-900">Verbes à Particule Séparable</span>
          </div>

          <div className="mt-8 text-center">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-orange-100">
                <BookOpen className="h-8 w-8 text-orange-600" />
              </div>
            </div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Verbes à Particule Séparable
            </h1>
            <p className="text-lg text-gray-600">
              Maîtriser les verbes à particule séparable pour une grammaire allemande parfaite
            </p>
          </div>
        </div>
      </header>

      {/* Section Contenu */}
      <section className="py-8 px-4 sm:px-6">
        <div className="container mx-auto max-w-6xl">

          {/* Définition et difficulté */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Qu'est-ce qu'un verbe à particule séparable ?</h2>
            <p className="text-gray-700 mb-4">
              Les verbes à particule séparable créent des difficultés particulières. Lorsque conjugués, ces verbes se séparent : la partie conjuguée reste en deuxième position tandis que la particule se déplace en fin de phrase. Cette caractéristique oblige l'auditeur à attendre la fin de la phrase pour comprendre le sens exact du verbe.
            </p>
            <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-300">
              <p className="text-gray-800 font-medium">Exemple classique :</p>
              <p className="text-gray-700 mt-2">"aufmachen" (ouvrir) et "zumachen" (fermer) ne diffèrent que par la particule finale.</p>
            </div>
          </div>

          {/* Règle générale */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Règle générale de séparation</h2>
            <p className="text-gray-700 mb-4">
              Dans les propositions principales (phrases déclaratives, interrogatives fermées, impératif), la particule se détache et se place en fin de phrase :
            </p>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Au présent :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>aufstehen → Ich <span className="text-orange-600">stehe</span> früh <span className="text-orange-600">auf</span>.</p>
                  <p className="text-sm text-gray-700">(Je me lève tôt.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Au prétérit :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>aufstehen → Ich <span className="text-orange-600">stand</span> gestern früh <span className="text-orange-600">auf</span>.</p>
                  <p className="text-sm text-gray-700">(Je me suis levé tôt hier.)</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">À l'impératif :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p>aufstehen → <span className="text-orange-600">Steh</span> bitte <span className="text-orange-600">auf</span>!</p>
                  <p className="text-sm text-gray-700">(Lève-toi s'il te plaît !)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Exception : propositions subordonnées */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Exception : propositions subordonnées</h2>
            <p className="text-gray-700 mb-4">
              Dans les propositions subordonnées, le verbe conjugué se place en fin de phrase et la particule reste attachée au verbe :
            </p>
            <div className="bg-gray-50 p-4 rounded-lg">
              <p>Ich weiß, dass du jeden Morgen <span className="text-orange-600">aufstehst</span>.</p>
              <p className="text-sm text-gray-700">(Je sais que tu te lèves chaque matin.)</p>
            </div>
          </div>

          {/* Particules fréquentes */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Particules fréquentes</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold mb-3">Particules de direction :</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><span className="text-orange-600">ab</span> - descendre (absteigen)</li>
                  <li><span className="text-orange-600">auf</span> - monter (aufstehen)</li>
                  <li><span className="text-orange-600">ein</span> - entrer (einkaufen)</li>
                  <li><span className="text-orange-600">aus</span> - sortir (aussteigen)</li>
                  <li><span className="text-orange-600">zu</span> - fermer (zumachen)</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mb-3">Particules de mouvement :</h3>
                <ul className="space-y-2 text-gray-700">
                  <li><span className="text-orange-600">an</span> - commencer (anfangen)</li>
                  <li><span className="text-orange-600">mit</span> - participer (mitmachen)</li>
                  <li><span className="text-orange-600">vor</span> - présenter (vorstellen)</li>
                  <li><span className="text-orange-600">weg</span> - partir (weggehen)</li>
                  <li><span className="text-orange-600">zusammen</span> - réunir (zusammenkommen)</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Erreurs fréquentes */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Erreurs fréquentes à éviter</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold mb-2">Erreur de séparation :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-red-500">❌ Ich aufstehe jeden Morgen.</p>
                  <p className="text-green-500">✓ Ich stehe jeden Morgen auf.</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Oubli de la particule :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-red-500">❌ Ich stehe jeden Morgen.</p>
                  <p className="text-green-500">✓ Ich stehe jeden Morgen auf.</p>
                </div>
              </div>
              <div>
                <h3 className="font-semibold mb-2">Confusion avec les verbes inséparables :</h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700">Les verbes avec "be-", "ge-", "er-", "ver-", "zer-", "ent-", "emp-" sont généralement inséparables.</p>
                  <p>be<span className="text-orange-600">stehen</span> (inséparable) ≠ auf<span className="text-orange-600">stehen</span> (séparable)</p>
                </div>
              </div>
            </div>
          </div>

          {/* Exercices pratiques */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-8">
            <h2 className="text-xl font-bold mb-4 text-orange-600 border-b border-orange-200 pb-2">Exercices pratiques</h2>
            <p className="text-gray-700 mb-4">
              Mettez en pratique les verbes à particule séparable avec des exercices interactifs.
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
          {/* Boutons d'action */}
          <div className="flex justify-center gap-4 pb-8">
            <Link to="/formation/allemand-verbes-particules/exercices">
              <Button className="bg-orange-600 hover:bg-orange-700 text-white flex items-center gap-2">
                <FileText className="h-4 w-4" />
                Accéder aux exercices
              </Button>
            </Link>
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

export default VerbesAParticulePage;

