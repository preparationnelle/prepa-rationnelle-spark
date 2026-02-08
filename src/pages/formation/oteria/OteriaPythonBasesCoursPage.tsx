import React from 'react';
import { OteriaChapterTemplate } from '@/components/formation/OteriaChapterTemplate';
import { Link } from 'react-router-dom';
import {
  CodeBlock,
  DefinitionBlock,
  ExampleBlock,
  RemarkBlock,
  WarningBlock
} from '@/components/formation/AcademicBlocks';

const OteriaPythonBasesCoursPage: React.FC = () => {
  return (
    <OteriaChapterTemplate
      sessionNumber={2}
      sessionTitle="Bases de Python & Algorithmique"
      description="Apprentissage des fondamentaux de Python : types de données, boucles, fonctions et librairies essentielles"
      slug="python-bases"
      activeSection="course"
      duration="4h"
      level="Débutant"
      previousSession={{ slug: 'logique-fondamentale', title: 'Logique' }}
      nextSession={{ slug: 'recurrence-recursivite', title: 'Récurrence' }}
    >
      <div className="space-y-12 text-slate-700 leading-relaxed max-w-none">

        {/* ─── INTRODUCTION ────────────────────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Introduction
          </h2>
          <p className="mb-4">
            Python est un langage de programmation polyvalent, largement utilisé en informatique scientifique,
            en intelligence artificielle et en cybersécurité. Cette séance introduit les bases : types de données,
            boucles, fonctions, listes et librairies utiles.
          </p>

          <DefinitionBlock title="Pourquoi Python ?">
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Lisible :</strong> Syntaxe proche de l'anglais.</li>
              <li><strong>Polyvalent :</strong> Web, Data Science, Scripting, Cyber.</li>
              <li><strong>Communauté :</strong> Énormément de librairies disponibles.</li>
            </ul>
          </DefinitionBlock>
        </section>

        {/* ─── PARTIE A : LIBRAIRIES ────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            A. Les principales librairies Python
          </h2>
          <p className="mb-6">
            En Python, les librairies sont des ensembles de fonctions prêtes à l'emploi.
            Elles évitent de « réinventer la roue » et accélèrent le travail pour le calcul,
            l'algèbre linéaire, la manipulation de données ou la visualisation.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <DefinitionBlock title="random (rd)">
              <p>Génération de nombres aléatoires.</p>
              <code className="text-sm bg-slate-100 p-1 rounded">import random as rd</code>
            </DefinitionBlock>

            <DefinitionBlock title="numpy (np)">
              <p>Calcul scientifique, matrices, algèbre linéaire.</p>
              <code className="text-sm bg-slate-100 p-1 rounded">import numpy as np</code>
            </DefinitionBlock>

            <DefinitionBlock title="matplotlib (plt)">
              <p>Tracé de graphiques et visualisation.</p>
              <code className="text-sm bg-slate-100 p-1 rounded">import matplotlib.pyplot as plt</code>
            </DefinitionBlock>

            <DefinitionBlock title="pandas (pd)">
              <p>Manipulation de données (DataFrames).</p>
              <code className="text-sm bg-slate-100 p-1 rounded">import pandas as pd</code>
            </DefinitionBlock>
          </div>

          <CodeBlock
            title="Exemples d'importation"
            code={`import random as rd
x = rd.randint(1, 6)  # Tire entre 1 et 6

import numpy as np
M = np.array([[1, 2], [3, 4]])

import matplotlib.pyplot as plt
plt.plot([1,2,3], [2,4,6])
# plt.show()

import pandas as pd
df = pd.DataFrame({"A":[1,2,3], "B":[4,5,6]})`}
          />
        </section>

        {/* ─── PARTIE B : TYPES DE DONNÉES ────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            B. Types fondamentaux et variables
          </h2>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-slate-300 rounded-full"></span>
              B.1. Types simples
            </h3>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-slate-200 text-sm">
                <thead>
                  <tr className="bg-slate-50">
                    <th className="border border-slate-200 px-4 py-2 font-semibold text-slate-900">Type</th>
                    <th className="border border-slate-200 px-4 py-2 font-semibold text-slate-900">Description</th>
                    <th className="border border-slate-200 px-4 py-2 font-semibold text-slate-900">Exemple</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-slate-200 px-4 py-2 font-mono text-pink-600">int</td>
                    <td className="border border-slate-200 px-4 py-2">Entier</td>
                    <td className="border border-slate-200 px-4 py-2 font-mono">x = 42</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-200 px-4 py-2 font-mono text-pink-600">float</td>
                    <td className="border border-slate-200 px-4 py-2">Nombre à virgule (flottant)</td>
                    <td className="border border-slate-200 px-4 py-2 font-mono">pi = 3.14</td>
                  </tr>
                  <tr>
                    <td className="border border-slate-200 px-4 py-2 font-mono text-pink-600">bool</td>
                    <td className="border border-slate-200 px-4 py-2">Booléen (Vrai/Faux)</td>
                    <td className="border border-slate-200 px-4 py-2 font-mono">flag = True</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="border border-slate-200 px-4 py-2 font-mono text-pink-600">str</td>
                    <td className="border border-slate-200 px-4 py-2">Chaîne de caractères</td>
                    <td className="border border-slate-200 px-4 py-2 font-mono">msg = "Hello"</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <WarningBlock title="Attention aux types">
              <code>"123"</code> est une chaîne (str), pas un nombre ! <br />
              <code>int("123")</code> convertit la chaîne en entier.
            </WarningBlock>
          </div>

          <div className="mb-8">
            <h3 className="text-xl font-semibold text-slate-800 flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-slate-300 rounded-full"></span>
              B.2. Opérateurs arithmétiques
            </h3>
            <p className="mb-4">
              Python supporte les opérations classiques : <code>+</code>, <code>-</code>, <code>*</code>, <code>/</code>.
            </p>
            <ExampleBlock title="Opérateurs spécifiques">
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Division entière (//) :</strong> <code>7 // 2 = 3</code></li>
                <li><strong>Modulo (%) :</strong> <code>7 % 2 = 1</code> (Reste de la division)</li>
                <li><strong>Puissance (**) :</strong> <code>2 ** 3 = 8</code></li>
              </ul>
            </ExampleBlock>
          </div>
        </section>

        {/* ─── PARTIE C : LISTES ────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            C. Les Listes
          </h2>
          <DefinitionBlock title="Liste">
            Une <strong>liste</strong> est une collection ordonnée et modifiable d'éléments. Elle se définit avec des crochets <code>[]</code>.
          </DefinitionBlock>

          <CodeBlock
            title="Manipulations de listes"
            code={`L = [2, 4, 6]
L2 = list(range(5))        # [0,1,2,3,4]
L3 = [k**2 for k in range(5)] # [0,1,4,9,16] (Compréhension de liste)

L.append(8)     # Ajoute 8 à la fin -> [2, 4, 6, 8]
L.remove(4)     # Supprime le premier 4 -> [2, 6, 8]
premier = L[0]  # Accès au premier élément (indice 0)
n = len(L)      # Longueur de la liste`}
          />
        </section>

        {/* ─── PARTIE D : STRUCTURES DE CONTRÔLE ────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            D. Structures de contrôle
          </h2>

          <div className="grid gap-6">
            <div>
              <h3 className="font-semibold text-slate-800 mb-2">D.1. Conditionnelle (if / elif / else)</h3>
              <CodeBlock
                code={`n = 5
if n % 2 == 0:
    print("Pair")
elif n > 10:
    print("Grand impair")
else:
    print("Petit impair")`}
              />
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-2">D.2. Boucle for (bornée)</h3>
              <p className="text-sm mb-2 text-slate-600">On sait à l'avance combien de tours on fait.</p>
              <CodeBlock
                code={`S = 0
for i in range(1, 4):  # i prends les valeurs 1, 2, 3 (4 est exclu)
    S += i
print(S) # 6`}
              />
            </div>

            <div>
              <h3 className="font-semibold text-slate-800 mb-2">D.3. Boucle while (non bornée)</h3>
              <p className="text-sm mb-2 text-slate-600">On répète tant qu'une condition est vraie.</p>
              <CodeBlock
                code={`n = 0
while 2**n < 1000:
    n += 1
print(n) # Affiche la plus petite puissance de 2 dépassant 1000`}
              />
            </div>
          </div>
        </section>

        {/* ─── PARTIE E : FONCTIONS ────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            E. Fonctions
          </h2>
          <DefinitionBlock title="Fonction">
            Un bloc de code réutilisable qui prend des <strong>paramètres</strong> en entrée et retourne un <strong>résultat</strong>.
          </DefinitionBlock>

          <CodeBlock
            title="Définition d'une fonction"
            code={`def somme_1_a_n(n):
    """Calcule la somme des entiers de 1 à n"""
    somme = 0
    for k in range(1, n+1):
        somme += k
    return somme

res = somme_1_a_n(10)
print(res) # 55`}
          />

          <RemarkBlock title="Portée des variables">
            Une variable créée à l'intérieur d'une fonction est <strong>locale</strong> : elle n'existe pas en dehors.
          </RemarkBlock>
        </section>

        {/* ─── FICHE MÉTHODE ────────────────────────── */}
        <section>
          <h2 className="text-2xl font-bold text-slate-900 border-b border-slate-200 pb-2 mb-6">
            Fiche Méthode : Résoudre un problème
          </h2>

          <ExampleBlock title="Méthode I.T.S">
            Pour écrire un algorithme, pensez toujours en 3 étapes :
            <ol className="list-decimal list-inside space-y-2 mt-2 font-medium">
              <li>
                <span className="text-blue-600">Initialisation :</span> Définir les variables de départ (compteurs à 0, listes vides...).
              </li>
              <li>
                <span className="text-amber-600">Traitement :</span> Le cœur du calcul (boucles, conditions).
              </li>
              <li>
                <span className="text-emerald-600">Sortie :</span> Renvoyer le résultat (return) ou l'afficher (print).
              </li>
            </ol>
          </ExampleBlock>
        </section>

      </div>
    </OteriaChapterTemplate>
  );
};

export default OteriaPythonBasesCoursPage;
