import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, Play } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const OteriaMatricesMarkovExercicesPage = () => {
  return (
    <div className="min-h-screen bg-white">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-teal-600">
            <Link to="/" className="flex items-center gap-1 hover:text-teal-700 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <Link to="/articles/oteria-cyber-school" className="hover:text-teal-700 transition-colors">
              OTERIA Cyber School
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <Link to="/articles/oteria-cyber-school" className="hover:text-teal-700 transition-colors">
              Bachelor 1
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <span className="text-teal-600 font-medium">Chapitre 11 - Exercices</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <Play className="h-8 w-8 text-teal-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-teal-900">Exercices - Chapitre 11</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Matrices & chaînes de Markov
          </p>

          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/formation/oteria/matrices-markov-cours">
              <button className="inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                Cours associé
              </button>
            </Link>
            <Link to="/articles/oteria-cyber-school">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Retour au programme
              </button>
            </Link>
          </div>
        </div>

        {/* Contenu des exercices */}
        <div className="space-y-6">
          <Card className="border-0 shadow-lg bg-gradient-to-r from-blue-50 to-blue-100">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-blue-600 flex items-center gap-2">
                <Play className="h-6 w-6" />
                Exercices d'application
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Exercice 1 : Opérations de base avec numpy</h3>
                <p className="text-gray-700 mb-4">
                  Créez deux matrices A et B de dimensions 3x3 avec numpy. Calculez leur produit matriciel AB,
                  la transposée de A, et vérifiez que (AB)ᵀ = BᵀAᵀ.
                </p>
                <div className="bg-gray-50 p-4 rounded mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Rappel :</p>
                  <p className="text-sm text-gray-600">La transposée échange lignes et colonnes</p>
                </div>
                <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                  <p className="text-gray-600"># Votre code ici</p>
                  <p className="text-gray-600">import numpy as np</p>
                  <p className="text-gray-600"># ...</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Exercice 2 : Résolution de système linéaire</h3>
                <p className="text-gray-700 mb-4">
                  Résolvez le système suivant en utilisant numpy.linalg.solve() :
                  2x + y - z = 1
                  x - y + 2z = -2
                  3x + 2y + z = 3
                </p>
                <div className="bg-gray-50 p-4 rounded mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Système à résoudre :</p>
                  <p className="text-sm text-gray-600">A = [[2, 1, -1], [1, -1, 2], [3, 2, 1]]</p>
                  <p className="text-sm text-gray-600">b = [1, -2, 3]</p>
                </div>
                <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                  <p className="text-gray-600"># Votre code ici</p>
                  <p className="text-gray-600">import numpy as np</p>
                  <p className="text-gray-600"># ...</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Exercice 3 : Chaîne de Markov simple</h3>
                <p className="text-gray-700 mb-4">
                  Modélisez une chaîne de Markov à 2 états : "Étudiant" et "Dort". La matrice de transition P est :
                  - P(Étudiant→Étudiant) = 0.7
                  - P(Étudiant→Dort) = 0.3
                  - P(Dort→Étudiant) = 0.8
                  - P(Dort→Dort) = 0.2
                  Calculez l'état après 5 itérations en partant d'un étudiant.
                </p>
                <div className="bg-gray-50 p-4 rounded mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Formule :</p>
                  <p className="text-sm text-gray-600">État(t+1) = P × État(t)</p>
                </div>
                <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                  <p className="text-gray-600"># Votre code ici</p>
                  <p className="text-gray-600">import numpy as np</p>
                  <p className="text-gray-600"># ...</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-lg border border-blue-200">
                <h3 className="text-lg font-semibold text-blue-800 mb-3">Exercice 4 : Distribution stationnaire</h3>
                <p className="text-gray-700 mb-4">
                  Pour la chaîne de Markov de l'exercice 3, calculez la distribution stationnaire π
                  telle que π = πP. Vérifiez que π est un vecteur ligne de probabilités.
                </p>
                <div className="bg-gray-50 p-4 rounded mb-4">
                  <p className="text-sm font-medium text-gray-700 mb-2">Propriété :</p>
                  <p className="text-sm text-gray-600">La distribution stationnaire satisfait πP = π</p>
                </div>
                <div className="bg-gray-50 p-4 rounded font-mono text-sm">
                  <p className="text-gray-600"># Votre code ici</p>
                  <p className="text-gray-600">import numpy as np</p>
                  <p className="text-gray-600"># ...</p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Solutions */}
          <Card className="border-0 shadow-lg bg-gradient-to-r from-green-50 to-green-100">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-green-600 flex items-center gap-2">
                Solutions et corrections
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-white p-4 rounded-lg border border-green-200">
                <p className="text-green-800">
                  Les solutions détaillées seront publiées après la séance d'exercices.
                  N'hésitez pas à poser vos questions pendant la séance !
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default OteriaMatricesMarkovExercicesPage;
