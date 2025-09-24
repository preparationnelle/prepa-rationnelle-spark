import React from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, BookOpen, Target, Zap, Binary, Code, Calculator, FunctionSquare, Database } from 'lucide-react';

const OteriaPythonBasesCoursPage = () => {
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
            <Link to="/articles" className="hover:text-teal-700 transition-colors">
              Niveau
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <Link to="/articles/oteria-cyber-school" className="hover:text-teal-700 transition-colors">
              OTERIA Cyber School
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <span className="text-teal-600 font-medium">Chapitre 2 - Cours</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <Code className="h-8 w-8 text-teal-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-teal-900">Chapitre 2 : Bases de Python pour les mathématiques</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Apprentissage des fondamentaux de Python : types de données, boucles, fonctions et librairies essentielles
          </p>

          {/* Informations de chapitre */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Chapitre</span>
                  <span className="text-2xl font-bold text-blue-900">2</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Durée estimée</span>
                  <span className="text-2xl font-bold text-blue-900">4h</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Niveau</span>
                  <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    🟢 Débutant
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/formation/oteria/python-bases-exercices">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <Target className="h-4 w-4" />
                Exercices
              </button>
            </Link>
            <Link to="/formation/oteria/python-bases-flashcards">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <BookOpen className="h-4 w-4" />
                Flashcards
              </button>
            </Link>
            <Link to="/formation/oteria/python-bases-qcm">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <Zap className="h-4 w-4" />
                QCM
              </button>
            </Link>
            <Link to="/articles/oteria-cyber-school">
              <button className="inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Retour au programme
              </button>
            </Link>
          </div>
        </div>

        {/* Contenu du cours */}
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">
              Introduction
            </h2>
            <p className="text-blue-800 mb-6 leading-relaxed">
              Python est un langage de programmation polyvalent, largement utilisé en informatique scientifique,
              en intelligence artificielle et en cybersécurité. Cette séance introduit les bases : types de données,
              boucles, fonctions, listes et librairies utiles.
            </p>
          </div>

          {/* Librairies Python */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">
              Les principales librairies Python
            </h2>
            <p className="text-blue-800 mb-6 leading-relaxed">
              En Python, les librairies sont des ensembles de fonctions prêtes à l'emploi.
              Elles évitent de « réinventer la roue » et accélèrent le travail pour le calcul,
              l'algèbre linéaire, la manipulation de données ou la visualisation.
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="border border-gray-300 px-4 py-2 font-semibold">Nom</th>
                    <th className="border border-gray-300 px-4 py-2 font-semibold">Alias</th>
                    <th className="border border-gray-300 px-4 py-2 font-semibold">Utilité principale</th>
                    <th className="border border-gray-300 px-4 py-2 font-semibold">Exemples clés</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-center font-medium">random</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">rd</td>
                    <td className="border border-gray-300 px-4 py-2">Tirages aléatoires</td>
                    <td className="border border-gray-300 px-4 py-2">rd.randint()</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 text-center font-medium">numpy</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">np</td>
                    <td className="border border-gray-300 px-4 py-2">Calculs vectoriels/matriciels</td>
                    <td className="border border-gray-300 px-4 py-2">np.array(), np.sum()</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-center font-medium">matplotlib</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">plt</td>
                    <td className="border border-gray-300 px-4 py-2">Tracer des graphiques</td>
                    <td className="border border-gray-300 px-4 py-2">plt.plot(), plt.show()</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 text-center font-medium">pandas</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">pd</td>
                    <td className="border border-gray-300 px-4 py-2">Données type tableau/Excel</td>
                    <td className="border border-gray-300 px-4 py-2">pd.DataFrame(), pd.read_csv()</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold mb-4 text-blue-900">Exemples d'utilisation :</h3>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-teal-500">
              <pre className="text-sm text-gray-800 overflow-x-auto">
{`import random as rd
x = rd.randint(1, 6)  # Tire entre 1 et 6

import numpy as np
M = np.array([[1, 2], [3, 4]])

import matplotlib.pyplot as plt
plt.plot([1,2,3], [2,4,6])
plt.show()

import pandas as pd
df = pd.DataFrame({"A":[1,2,3], "B":[4,5,6]})`}
              </pre>
            </div>
          </div>

          {/* Types fondamentaux */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">
              Types fondamentaux et variables
            </h2>
            <p className="text-blue-800 mb-6 leading-relaxed">
              Les types de base de Python sont essentiels pour manipuler les données :
            </p>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="border border-gray-300 px-4 py-2 font-semibold">Type</th>
                    <th className="border border-gray-300 px-4 py-2 font-semibold">Exemple</th>
                    <th className="border border-gray-300 px-4 py-2 font-semibold">Particularité</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-center font-medium">int</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">a = 17</td>
                    <td className="border border-gray-300 px-4 py-2">Entier</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 text-center font-medium">float</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">y = 8.5</td>
                    <td className="border border-gray-300 px-4 py-2">Nombre à virgule</td>
                  </tr>
                  <tr>
                    <td className="border border-gray-300 px-4 py-2 text-center font-medium">bool</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">flag = (a == 2)</td>
                    <td className="border border-gray-300 px-4 py-2">Valeur True/False</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td className="border border-gray-300 px-4 py-2 text-center font-medium">str</td>
                    <td className="border border-gray-300 px-4 py-2 text-center">nom = "ESCP"</td>
                    <td className="border border-gray-300 px-4 py-2">Chaîne de caractères</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <h3 className="text-lg font-semibold mb-4 text-blue-900">🔍 Variables booléennes :</h3>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-teal-500 mb-6">
              <pre className="text-sm text-gray-800 overflow-x-auto">
{`A = 2
C = 3
E = (A == C)  # vaut False`}
              </pre>
            </div>

            <h3 className="text-lg font-semibold mb-4 text-blue-900">⚡ Opérateurs numériques :</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-gray-300 text-sm">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="border border-gray-300 px-3 py-2 font-semibold">Opérateur</th>
                    <th className="border border-gray-300 px-3 py-2 font-semibold">Usage</th>
                    <th className="border border-gray-300 px-3 py-2 font-semibold">Exemple</th>
                    <th className="border border-gray-300 px-3 py-2 font-semibold">Résultat</th>
                  </tr>
                </thead>
                <tbody>
                  <tr><td className="border border-gray-300 px-3 py-2 text-center">+</td><td className="border border-gray-300 px-3 py-2">Addition</td><td className="border border-gray-300 px-3 py-2 text-center">3 + 2</td><td className="border border-gray-300 px-3 py-2 text-center">5</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-3 py-2 text-center">-</td><td className="border border-gray-300 px-3 py-2">Soustraction</td><td className="border border-gray-300 px-3 py-2 text-center">5 - 8</td><td className="border border-gray-300 px-3 py-2 text-center">-3</td></tr>
                  <tr><td className="border border-gray-300 px-3 py-2 text-center">*</td><td className="border border-gray-300 px-3 py-2">Multiplication</td><td className="border border-gray-300 px-3 py-2 text-center">4 * 3</td><td className="border border-gray-300 px-3 py-2 text-center">12</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-3 py-2 text-center">/</td><td className="border border-gray-300 px-3 py-2">Division</td><td className="border border-gray-300 px-3 py-2 text-center">7 / 2</td><td className="border border-gray-300 px-3 py-2 text-center">3.5</td></tr>
                  <tr><td className="border border-gray-300 px-3 py-2 text-center">//</td><td className="border border-gray-300 px-3 py-2">Division entière</td><td className="border border-gray-300 px-3 py-2 text-center">7 // 2</td><td className="border border-gray-300 px-3 py-2 text-center">3</td></tr>
                  <tr className="bg-gray-50"><td className="border border-gray-300 px-3 py-2 text-center">%</td><td className="border border-gray-300 px-3 py-2">Modulo</td><td className="border border-gray-300 px-3 py-2 text-center">17 % 6</td><td className="border border-gray-300 px-3 py-2 text-center">5</td></tr>
                  <tr><td className="border border-gray-300 px-3 py-2 text-center">**</td><td className="border border-gray-300 px-3 py-2">Puissance</td><td className="border border-gray-300 px-3 py-2 text-center">2 ** 4</td><td className="border border-gray-300 px-3 py-2 text-center">16</td></tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Les listes */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">
              Les listes en Python
            </h2>
            <p className="text-blue-800 mb-6 leading-relaxed">
              Une liste est une séquence ordonnée d'éléments qui peut contenir différents types de données.
            </p>

            <h3 className="text-lg font-semibold mb-4 text-blue-900">Exemples d'utilisation :</h3>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-teal-500">
              <pre className="text-sm text-gray-800 overflow-x-auto">
{`L = [2, 4, 6]
L2 = list(range(5))        # [0,1,2,3,4]
L3 = [k**2 for k in range(5)] # [0,1,4,9,16]

L.append(8)     # Ajoute 8 à la fin
L.remove(4)     # Supprime le premier 4
premier = L[0]  # Accès au premier élément
n = len(L)      # Longueur de la liste`}
              </pre>
            </div>
          </div>

          {/* Structures de contrôle */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">
              Structures de contrôle : for, if, while
            </h2>

            <h3 className="text-lg font-semibold mb-4 text-blue-900">Boucle for :</h3>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-teal-500 mb-6">
              <pre className="text-sm text-gray-800 overflow-x-auto">
{`n = 3
S = 0
for i in range(1, n+1):
    for j in range(1, n+1):
        S += i*j
print(S)`}
              </pre>
            </div>

            <h3 className="text-lg font-semibold mb-4 text-blue-900">Condition if :</h3>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-teal-500 mb-6">
              <pre className="text-sm text-gray-800 overflow-x-auto">
{`n = 5
if n % 2 == 0:
    print("n est pair")
else:
    print("n est impair")`}
              </pre>
            </div>

            <h3 className="text-lg font-semibold mb-4 text-blue-900">Boucle while :</h3>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-teal-500">
              <pre className="text-sm text-gray-800 overflow-x-auto">
{`n = 0
while 3*n + 1 <= 5000:
    n += 1
print(n, 3*n + 1)`}
              </pre>
            </div>
          </div>

          {/* Scripts et fonctions */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">
              Scripts et fonctions en Python
            </h2>

            <h3 className="text-lg font-semibold mb-4 text-blue-900">Script :</h3>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-teal-500 mb-6">
              <pre className="text-sm text-gray-800 overflow-x-auto">
{`n = 10
somme = 0
for k in range(1, n+1):
    somme += k
print(f"La somme de 1 a {n} vaut {somme}")`}
              </pre>
            </div>

            <h3 className="text-lg font-semibold mb-4 text-blue-900">Fonction :</h3>
            <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-teal-500 mb-6">
              <pre className="text-sm text-gray-800 overflow-x-auto">
{`def somme_1_a_n(n):
    somme = 0
    for k in range(1, n+1):
        somme += k
    return somme

print(somme_1_a_n(10))   # 55
print(somme_1_a_n(100))  # 5050`}
              </pre>
            </div>
          </div>

          {/* Fiche méthode – Résoudre un exercice en Python */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">
              Fiche méthode – Résoudre un exercice en Python
            </h2>
            <h3 className="text-xl font-semibold mb-4 text-blue-900">Maîtriser la méthode de résolution</h3>

            {/* Plan de résolution en 3 étapes */}
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-4 text-blue-900">Plan de résolution en 3 étapes</h4>
              <p className="text-blue-800 mb-4">
                Décomposer en trois grandes étapes : <strong>Initialisation → Traitement → Sortie</strong>
              </p>
              
              <div className="overflow-x-auto">
                <table className="w-full border-collapse border border-blue-300 text-sm">
                  <thead>
                    <tr className="bg-blue-50">
                      <th className="border border-blue-300 px-4 py-2 font-semibold text-blue-900">Étape</th>
                      <th className="border border-blue-300 px-4 py-2 font-semibold text-blue-900">Script</th>
                      <th className="border border-blue-300 px-4 py-2 font-semibold text-blue-900">Fonction</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-blue-300 px-4 py-2 font-medium text-blue-900">Initialisation</td>
                      <td className="border border-blue-300 px-4 py-2 text-blue-800">Variables et compteurs avant la boucle</td>
                      <td className="border border-blue-300 px-4 py-2 text-blue-800">Paramètres d'entrée + compteurs locaux</td>
                    </tr>
                    <tr className="bg-blue-25">
                      <td className="border border-blue-300 px-4 py-2 font-medium text-blue-900">Traitement</td>
                      <td className="border border-blue-300 px-4 py-2 text-blue-800">Calculs, boucles, conditions</td>
                      <td className="border border-blue-300 px-4 py-2 text-blue-800">Même logique, mais variables locales</td>
                    </tr>
                    <tr>
                      <td className="border border-blue-300 px-4 py-2 font-medium text-blue-900">Sortie</td>
                      <td className="border border-blue-300 px-4 py-2 text-blue-800">print(...) (affichage à l'utilisateur)</td>
                      <td className="border border-blue-300 px-4 py-2 text-blue-800">return ... (valeur renvoyée à l'appelant)</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Détail des 3 étapes */}
            <div className="space-y-6">
              {/* 1. Initialisation */}
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-900 mb-3">1. Initialisation</h5>
                <p className="text-blue-800 mb-3 font-medium">Préparer les variables, compteurs, listes</p>
                <ul className="list-disc list-inside text-blue-700 space-y-1 text-sm">
                  <li>Toujours initialiser les compteurs à 0</li>
                  <li>Pour une liste : créer la structure vide (L = [])</li>
                  <li>Bien distinguer : input(), paramètres, variables locales</li>
                </ul>
              </div>

              {/* 2. Traitement */}
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-900 mb-3">2. Traitement</h5>
                <p className="text-blue-800 mb-3 font-medium">Mettre en œuvre l'algorithme</p>
                <ul className="list-disc list-inside text-blue-700 space-y-1 text-sm">
                  <li>Boucles (for ou while) pour répéter des calculs</li>
                  <li>Transformation ou calcul sur des listes</li>
                  <li>Utilisation de conditions (if) pour ajuster</li>
                </ul>
              </div>

              {/* 3. Sortie */}
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-900 mb-3">3. Sortie</h5>
                <p className="text-blue-800 mb-3 font-medium">Afficher ou retourner le résultat</p>
                <ul className="list-disc list-inside text-blue-700 space-y-1 text-sm">
                  <li>Script : utiliser print() pour l'utilisateur</li>
                  <li>Fonction : utiliser return pour l'appelant</li>
                  <li>Choisir le bon format : nombre, liste, chaîne...</li>
                </ul>
              </div>
            </div>

            {/* Astuce méthode */}
            <div className="bg-blue-100 p-4 rounded-lg border border-blue-300 mt-6">
              <h5 className="font-semibold text-blue-900 mb-2">💡 Astuce méthode</h5>
              <p className="text-blue-800 text-sm">
                Toujours écrire d'abord le plan sur papier avant de coder : Initialisation → Traitement → Sortie. 
                Tester avec plusieurs cas (petit, grand, valeurs limites).
              </p>
            </div>
          </div>

          {/* Les trois types d'exercices programmation fréquents */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">
              Les trois types d'exercices programmation fréquents
            </h2>
            <h3 className="text-xl font-semibold mb-4 text-blue-900">Reconnaître les types d'exercices</h3>
            
            <p className="text-blue-800 mb-6">
              Dans les sujets d'annales ou en contrôle, on retrouve presque toujours trois grandes familles d'exercices. 
              Les repérer aide à gagner du temps et à adopter la bonne stratégie.
            </p>

            {/* Tableau récapitulatif */}
            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-blue-300 text-sm">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="border border-blue-300 px-4 py-2 font-semibold text-blue-900">Type d'exercice</th>
                    <th className="border border-blue-300 px-4 py-2 font-semibold text-blue-900">Ce qu'on attend</th>
                    <th className="border border-blue-300 px-4 py-2 font-semibold text-blue-900">Points stratégiques</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-blue-300 px-4 py-2 font-medium text-blue-900">Créer un script ou une fonction</td>
                    <td className="border border-blue-300 px-4 py-2 text-blue-800">Structuration, logique</td>
                    <td className="border border-blue-300 px-4 py-2 text-blue-700">Initialisation → Traitement → Sortie, ne pas oublier les imports</td>
                  </tr>
                  <tr className="bg-blue-25">
                    <td className="border border-blue-300 px-4 py-2 font-medium text-blue-900">Compléter/comprendre un script</td>
                    <td className="border border-blue-300 px-4 py-2 text-blue-800">Lecture, rigueur, déduction</td>
                    <td className="border border-blue-300 px-4 py-2 text-blue-700">Tester à la main, suivre la logique</td>
                  </tr>
                  <tr>
                    <td className="border border-blue-300 px-4 py-2 font-medium text-blue-900">Interpréter une sortie</td>
                    <td className="border border-blue-300 px-4 py-2 text-blue-800">Analyse, synthèse, lien au cours</td>
                    <td className="border border-blue-300 px-4 py-2 text-blue-700">Faire le lien avec le programme, argumenter</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Détail des types */}
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-900 mb-2">Type 1 : Créer à partir de rien</h5>
                <p className="text-blue-800 text-sm mb-2">« Écrire un script qui réalise… », « Créer une fonction qui calcule… »</p>
                <ul className="list-disc list-inside text-blue-700 space-y-1 text-sm">
                  <li>Partir d'un énoncé et construire la totalité de la solution</li>
                  <li>Structurer selon : Initialisation → Traitement → Sortie</li>
                  <li>Ne pas oublier les imports de librairies</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-900 mb-2">Type 2 : Comprendre/Compléter</h5>
                <p className="text-blue-800 text-sm mb-2">« Que fait ce script ? », « Compléter la ligne manquante »</p>
                <ul className="list-disc list-inside text-blue-700 space-y-1 text-sm">
                  <li>Analyser un code fourni (en entier ou partiellement)</li>
                  <li>Comprendre la logique des variables</li>
                  <li>Retracer l'évolution ligne par ligne</li>
                </ul>
              </div>

              <div className="bg-blue-50 p-4 rounded-lg border border-blue-200">
                <h5 className="font-semibold text-blue-900 mb-2">Type 3 : Interpréter</h5>
                <p className="text-blue-800 text-sm mb-2">« Interpréter ce graphique », « Conclure sur la convergence »</p>
                <ul className="list-disc list-inside text-blue-700 space-y-1 text-sm">
                  <li>Lire, analyser et expliquer un résultat obtenu</li>
                  <li>Interpréter courbe, tableau, histogramme</li>
                  <li>Faire le lien avec les notions du cours</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Récapitulatif des commandes utiles */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">
              Récapitulatif des commandes utiles
            </h2>
            <h3 className="text-xl font-semibold mb-4 text-blue-900">Tableau récapitulatif complet</h3>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-blue-300 text-sm">
                <thead>
                  <tr className="bg-blue-50">
                    <th className="border border-blue-300 px-4 py-2 font-semibold text-blue-900">Action ou test</th>
                    <th className="border border-blue-300 px-4 py-2 font-semibold text-blue-900">Syntaxe Python</th>
                    <th className="border border-blue-300 px-4 py-2 font-semibold text-blue-900">Exemple</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-blue-300 px-4 py-2 text-blue-800">Affecter une valeur</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-900">=</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-700">A = 5</td>
                  </tr>
                  <tr className="bg-blue-25">
                    <td className="border border-blue-300 px-4 py-2 text-blue-800">Afficher une valeur</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-900">print(...)</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-700">print(A)</td>
                  </tr>
                  <tr>
                    <td className="border border-blue-300 px-4 py-2 text-blue-800">Connaître le type</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-900">type(...)</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-700">type(A)</td>
                  </tr>
                  <tr className="bg-blue-25">
                    <td className="border border-blue-300 px-4 py-2 text-blue-800">Addition</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-900">+</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-700">A + B</td>
                  </tr>
                  <tr>
                    <td className="border border-blue-300 px-4 py-2 text-blue-800">Soustraction</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-900">-</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-700">A - B</td>
                  </tr>
                  <tr className="bg-blue-25">
                    <td className="border border-blue-300 px-4 py-2 text-blue-800">Multiplication</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-900">*</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-700">A * B</td>
                  </tr>
                  <tr>
                    <td className="border border-blue-300 px-4 py-2 text-blue-800">Division réelle</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-900">/</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-700">A / B</td>
                  </tr>
                  <tr className="bg-blue-25">
                    <td className="border border-blue-300 px-4 py-2 text-blue-800">Division entière</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-900">//</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-700">A // B</td>
                  </tr>
                  <tr>
                    <td className="border border-blue-300 px-4 py-2 text-blue-800">Modulo (reste de division)</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-900">%</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-700">A % B</td>
                  </tr>
                  <tr className="bg-blue-25">
                    <td className="border border-blue-300 px-4 py-2 text-blue-800">Puissance</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-900">**</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-700">A ** B</td>
                  </tr>
                  <tr>
                    <td className="border border-blue-300 px-4 py-2 text-blue-800">Partie entière</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-900">int(...)</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-700">int(6.4)</td>
                  </tr>
                  <tr className="bg-blue-25">
                    <td className="border border-blue-300 px-4 py-2 text-blue-800">Entrée clavier utilisateur</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-900">input(...)</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-700">x = input("Entrer x : ")</td>
                  </tr>
                  <tr>
                    <td className="border border-blue-300 px-4 py-2 text-blue-800">Boucle for</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-900">for ... in range(...):</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-700">for i in range(1, 5, 2):</td>
                  </tr>
                  <tr className="bg-blue-25">
                    <td className="border border-blue-300 px-4 py-2 text-blue-800">Boucle while</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-900">while ...:</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-700">while A &lt; 5:</td>
                  </tr>
                  <tr>
                    <td className="border border-blue-300 px-4 py-2 text-blue-800">Condition if</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-900">if ...:</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-700">if A == 3:</td>
                  </tr>
                  <tr className="bg-blue-25">
                    <td className="border border-blue-300 px-4 py-2 text-blue-800">Condition elif</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-900">elif ...:</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-700">elif A &lt;= 6:</td>
                  </tr>
                  <tr>
                    <td className="border border-blue-300 px-4 py-2 text-blue-800">Condition else</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-900">else:</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-700">else:</td>
                  </tr>
                  <tr className="bg-blue-25">
                    <td className="border border-blue-300 px-4 py-2 text-blue-800">Inférieur</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-900">&lt;</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-700">A &lt; B</td>
                  </tr>
                  <tr>
                    <td className="border border-blue-300 px-4 py-2 text-blue-800">Supérieur</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-900">&gt;</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-700">A &gt; B</td>
                  </tr>
                  <tr className="bg-blue-25">
                    <td className="border border-blue-300 px-4 py-2 text-blue-800">Inférieur ou égal</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-900">&lt;=</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-700">A &lt;= B</td>
                  </tr>
                  <tr>
                    <td className="border border-blue-300 px-4 py-2 text-blue-800">Supérieur ou égal</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-900">&gt;=</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-700">A &gt;= B</td>
                  </tr>
                  <tr className="bg-blue-25">
                    <td className="border border-blue-300 px-4 py-2 text-blue-800">Égalité</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-900">==</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-700">A == B</td>
                  </tr>
                  <tr>
                    <td className="border border-blue-300 px-4 py-2 text-blue-800">Différence</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-900">!=</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-700">A != B</td>
                  </tr>
                  <tr className="bg-blue-25">
                    <td className="border border-blue-300 px-4 py-2 text-blue-800">Tester si pair</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-900">% 2 == 0</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-700">A % 2 == 0</td>
                  </tr>
                  <tr>
                    <td className="border border-blue-300 px-4 py-2 text-blue-800">Tester si impair</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-900">% 2 == 1</td>
                    <td className="border border-blue-300 px-4 py-2 font-mono text-blue-700">A % 2 == 1</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-between items-center bg-blue-50 p-6 rounded-lg">
            <Link to="/formation/oteria/logique-fondamentale-cours">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                ← Chapitre 1
              </button>
            </Link>
            <div className="flex gap-3">
              <Link to="/formation/oteria/python-bases-exercices">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                  <Target className="h-4 w-4" />
                  Exercices
                </button>
              </Link>
              <Link to="/formation/oteria/python-bases-flashcards">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                  <BookOpen className="h-4 w-4" />
                  Flashcards
                </button>
              </Link>
              <Link to="/formation/oteria/python-bases-qcm">
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                  <Zap className="h-4 w-4" />
                  QCM
                </button>
              </Link>
              <Link to="/articles/oteria-cyber-school">
                <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Retour au programme
                </button>
              </Link>
            </div>
            <div className="text-blue-600 font-medium">Chapitre suivant →</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OteriaPythonBasesCoursPage;
