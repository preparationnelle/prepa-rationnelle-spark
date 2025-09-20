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

          {/* Méthodologie */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">
              Méthodologie : résoudre un exercice en Python
            </h2>
            <p className="text-blue-800 mb-4 font-semibold">Plan de résolution en 3 étapes :</p>
            <ul className="list-disc list-inside text-blue-800 space-y-2 mb-6">
              <li><strong>Initialisation :</strong> variables, compteurs, saisies</li>
              <li><strong>Traitement :</strong> boucles, conditions, calculs</li>
              <li><strong>Sortie :</strong> affichage ou valeur retournée</li>
            </ul>
          </div>

          {/* Types d'exercices */}
          <div className="bg-white rounded-xl shadow-lg p-8 mb-8 border border-blue-200">
            <h2 className="text-2xl font-bold mb-6 text-blue-900 border-b border-blue-200 pb-3">
              Trois types d'exercices fréquents
            </h2>
            <ul className="list-disc list-inside text-blue-800 space-y-3">
              <li><strong>Créer un script ou une fonction</strong></li>
              <li><strong>Compléter ou comprendre un script</strong></li>
              <li><strong>Interpréter une sortie</strong> (tableau, graphique, résultat numérique)</li>
            </ul>
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
