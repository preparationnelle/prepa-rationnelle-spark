import React from 'react';
import { OteriaPythonChapterTemplate } from '@/components/formation/OteriaPythonChapterTemplate';
import { CarnetCallout, CarnetCodeBlock } from '@/components/carnet';

const OteriaPythonBasesCoursPage: React.FC = () => {
  return (
    <OteriaPythonChapterTemplate
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
      <div className="space-y-12 font-instrument text-[15px] leading-[1.7] text-carnet-ink-soft max-w-none">

        {/* ─── INTRODUCTION ────────────────────────────────────────── */}
        <section>
          <h2 className="font-lora text-[30px] text-carnet-ink pb-2 mb-6 border-b border-dashed border-[rgba(78,55,30,0.18)]">
            Introduction
          </h2>
          <p className="mb-4">
            Python est un langage de programmation polyvalent, largement utilisé en informatique scientifique,
            en intelligence artificielle et en cybersécurité. Cette séance introduit les bases : types de données,
            boucles, fonctions, listes et librairies utiles.
          </p>

          <CarnetCallout variant="definition" label="Pourquoi Python ?">
            <ul className="list-disc list-inside space-y-1">
              <li><strong>Lisible :</strong> Syntaxe proche de l'anglais.</li>
              <li><strong>Polyvalent :</strong> Web, Data Science, Scripting, Cyber.</li>
              <li><strong>Communauté :</strong> Énormément de librairies disponibles.</li>
            </ul>
          </CarnetCallout>
        </section>

        {/* ─── PARTIE A : LIBRAIRIES ────────────────────────── */}
        <section>
          <h2 className="font-lora text-[30px] text-carnet-ink pb-2 mb-6 border-b border-dashed border-[rgba(78,55,30,0.18)]">
            A. Les principales librairies Python
          </h2>
          <p className="mb-6">
            En Python, les librairies sont des ensembles de fonctions prêtes à l'emploi.
            Elles évitent de « réinventer la roue » et accélèrent le travail pour le calcul,
            l'algèbre linéaire, la manipulation de données ou la visualisation.
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <CarnetCallout variant="definition" label="random (rd)">
              <p>Génération de nombres aléatoires.</p>
              <code className="text-sm bg-[rgba(78,55,30,0.06)] text-carnet-ink rounded px-1">import random as rd</code>
            </CarnetCallout>

            <CarnetCallout variant="definition" label="numpy (np)">
              <p>Calcul scientifique, matrices, algèbre linéaire.</p>
              <code className="text-sm bg-[rgba(78,55,30,0.06)] text-carnet-ink rounded px-1">import numpy as np</code>
            </CarnetCallout>

            <CarnetCallout variant="definition" label="matplotlib (plt)">
              <p>Tracé de graphiques et visualisation.</p>
              <code className="text-sm bg-[rgba(78,55,30,0.06)] text-carnet-ink rounded px-1">import matplotlib.pyplot as plt</code>
            </CarnetCallout>

            <CarnetCallout variant="definition" label="pandas (pd)">
              <p>Manipulation de données (DataFrames).</p>
              <code className="text-sm bg-[rgba(78,55,30,0.06)] text-carnet-ink rounded px-1">import pandas as pd</code>
            </CarnetCallout>
          </div>

          <CarnetCodeBlock label="Exemples d'importation">{`import random as rd
x = rd.randint(1, 6)  # Tire entre 1 et 6

import numpy as np
M = np.array([[1, 2], [3, 4]])

import matplotlib.pyplot as plt
plt.plot([1,2,3], [2,4,6])
# plt.show()

import pandas as pd
df = pd.DataFrame({"A":[1,2,3], "B":[4,5,6]})`}</CarnetCodeBlock>
        </section>

        {/* ─── PARTIE B : TYPES DE DONNÉES ────────────────────────── */}
        <section>
          <h2 className="font-lora text-[30px] text-carnet-ink pb-2 mb-6 border-b border-dashed border-[rgba(78,55,30,0.18)]">
            B. Types fondamentaux et variables
          </h2>

          <div className="mb-8">
            <h3 className="font-lora text-[22px] text-carnet-ink flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-carnet-red rounded-full"></span>
              B.1. Types simples
            </h3>

            <div className="overflow-x-auto mb-6">
              <table className="w-full border-collapse border border-[rgba(78,55,30,0.18)] text-sm">
                <thead>
                  <tr className="bg-carnet-paper-2">
                    <th className="border border-[rgba(78,55,30,0.18)] px-4 py-2 font-semibold text-carnet-ink">Type</th>
                    <th className="border border-[rgba(78,55,30,0.18)] px-4 py-2 font-semibold text-carnet-ink">Description</th>
                    <th className="border border-[rgba(78,55,30,0.18)] px-4 py-2 font-semibold text-carnet-ink">Exemple</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border border-[rgba(78,55,30,0.18)] px-4 py-2 font-mono text-carnet-red">int</td>
                    <td className="border border-[rgba(78,55,30,0.18)] px-4 py-2 text-carnet-ink-soft">Entier</td>
                    <td className="border border-[rgba(78,55,30,0.18)] px-4 py-2 font-mono text-carnet-ink-soft">x = 42</td>
                  </tr>
                  <tr className="bg-carnet-paper-2">
                    <td className="border border-[rgba(78,55,30,0.18)] px-4 py-2 font-mono text-carnet-red">float</td>
                    <td className="border border-[rgba(78,55,30,0.18)] px-4 py-2 text-carnet-ink-soft">Nombre à virgule (flottant)</td>
                    <td className="border border-[rgba(78,55,30,0.18)] px-4 py-2 font-mono text-carnet-ink-soft">pi = 3.14</td>
                  </tr>
                  <tr>
                    <td className="border border-[rgba(78,55,30,0.18)] px-4 py-2 font-mono text-carnet-red">bool</td>
                    <td className="border border-[rgba(78,55,30,0.18)] px-4 py-2 text-carnet-ink-soft">Booléen (Vrai/Faux)</td>
                    <td className="border border-[rgba(78,55,30,0.18)] px-4 py-2 font-mono text-carnet-ink-soft">flag = True</td>
                  </tr>
                  <tr className="bg-carnet-paper-2">
                    <td className="border border-[rgba(78,55,30,0.18)] px-4 py-2 font-mono text-carnet-red">str</td>
                    <td className="border border-[rgba(78,55,30,0.18)] px-4 py-2 text-carnet-ink-soft">Chaîne de caractères</td>
                    <td className="border border-[rgba(78,55,30,0.18)] px-4 py-2 font-mono text-carnet-ink-soft">msg = "Hello"</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <CarnetCallout variant="piege" label="Attention aux types">
              <code className="bg-[rgba(78,55,30,0.06)] text-carnet-paper rounded px-1">"123"</code> est une chaîne (str), pas un nombre ! <br />
              <code className="bg-[rgba(78,55,30,0.06)] text-carnet-paper rounded px-1">int("123")</code> convertit la chaîne en entier.
            </CarnetCallout>
          </div>

          <div className="mb-8">
            <h3 className="font-lora text-[22px] text-carnet-ink flex items-center gap-2 mb-4">
              <span className="w-1 h-6 bg-carnet-red rounded-full"></span>
              B.2. Opérateurs arithmétiques
            </h3>
            <p className="mb-4">
              Python supporte les opérations classiques : <code className="bg-[rgba(78,55,30,0.06)] text-carnet-ink rounded px-1">+</code>, <code className="bg-[rgba(78,55,30,0.06)] text-carnet-ink rounded px-1">-</code>, <code className="bg-[rgba(78,55,30,0.06)] text-carnet-ink rounded px-1">*</code>, <code className="bg-[rgba(78,55,30,0.06)] text-carnet-ink rounded px-1">/</code>.
            </p>
            <CarnetCallout variant="exemple" label="Opérateurs spécifiques">
              <ul className="list-disc list-inside space-y-1">
                <li><strong>Division entière (//) :</strong> <code className="bg-[rgba(78,55,30,0.06)] text-carnet-ink rounded px-1">7 // 2 = 3</code></li>
                <li><strong>Modulo (%) :</strong> <code className="bg-[rgba(78,55,30,0.06)] text-carnet-ink rounded px-1">7 % 2 = 1</code> (Reste de la division)</li>
                <li><strong>Puissance (**) :</strong> <code className="bg-[rgba(78,55,30,0.06)] text-carnet-ink rounded px-1">2 ** 3 = 8</code></li>
              </ul>
            </CarnetCallout>
          </div>
        </section>

        {/* ─── PARTIE C : LISTES ────────────────────────── */}
        <section>
          <h2 className="font-lora text-[30px] text-carnet-ink pb-2 mb-6 border-b border-dashed border-[rgba(78,55,30,0.18)]">
            C. Les Listes
          </h2>
          <CarnetCallout variant="definition" label="Liste">
            Une <strong>liste</strong> est une collection ordonnée et modifiable d'éléments. Elle se définit avec des crochets <code className="bg-[rgba(78,55,30,0.06)] text-carnet-ink rounded px-1">[]</code>.
          </CarnetCallout>

          <CarnetCodeBlock label="Manipulations de listes">{`L = [2, 4, 6]
L2 = list(range(5))        # [0,1,2,3,4]
L3 = [k**2 for k in range(5)] # [0,1,4,9,16] (Compréhension de liste)

L.append(8)     # Ajoute 8 à la fin -> [2, 4, 6, 8]
L.remove(4)     # Supprime le premier 4 -> [2, 6, 8]
premier = L[0]  # Accès au premier élément (indice 0)
n = len(L)      # Longueur de la liste`}</CarnetCodeBlock>
        </section>

        {/* ─── PARTIE D : STRUCTURES DE CONTRÔLE ────────────────────────── */}
        <section>
          <h2 className="font-lora text-[30px] text-carnet-ink pb-2 mb-6 border-b border-dashed border-[rgba(78,55,30,0.18)]">
            D. Structures de contrôle
          </h2>

          <div className="grid gap-6">
            <div>
              <h3 className="font-lora text-[20px] text-carnet-ink mb-2">D.1. Conditionnelle (if / elif / else)</h3>
              <CarnetCodeBlock label="Code Python">{`n = 5
if n % 2 == 0:
    print("Pair")
elif n > 10:
    print("Grand impair")
else:
    print("Petit impair")`}</CarnetCodeBlock>
            </div>

            <div>
              <h3 className="font-lora text-[20px] text-carnet-ink mb-2">D.2. Boucle for (bornée)</h3>
              <p className="text-sm mb-2 text-carnet-ink-mute">On sait à l'avance combien de tours on fait.</p>
              <CarnetCodeBlock label="Code Python">{`S = 0
for i in range(1, 4):  # i prends les valeurs 1, 2, 3 (4 est exclu)
    S += i
print(S) # 6`}</CarnetCodeBlock>
            </div>

            <div>
              <h3 className="font-lora text-[20px] text-carnet-ink mb-2">D.3. Boucle while (non bornée)</h3>
              <p className="text-sm mb-2 text-carnet-ink-mute">On répète tant qu'une condition est vraie.</p>
              <CarnetCodeBlock label="Code Python">{`n = 0
while 2**n < 1000:
    n += 1
print(n) # Affiche la plus petite puissance de 2 dépassant 1000`}</CarnetCodeBlock>
            </div>
          </div>
        </section>

        {/* ─── PARTIE E : FONCTIONS ────────────────────────── */}
        <section>
          <h2 className="font-lora text-[30px] text-carnet-ink pb-2 mb-6 border-b border-dashed border-[rgba(78,55,30,0.18)]">
            E. Fonctions
          </h2>
          <CarnetCallout variant="definition" label="Fonction">
            Un bloc de code réutilisable qui prend des <strong>paramètres</strong> en entrée et retourne un <strong>résultat</strong>.
          </CarnetCallout>

          <CarnetCodeBlock label="Définition d'une fonction">{`def somme_1_a_n(n):
    """Calcule la somme des entiers de 1 à n"""
    somme = 0
    for k in range(1, n+1):
        somme += k
    return somme

res = somme_1_a_n(10)
print(res) # 55`}</CarnetCodeBlock>

          <CarnetCallout variant="propriete" label="Portée des variables">
            Une variable créée à l'intérieur d'une fonction est <strong>locale</strong> : elle n'existe pas en dehors.
          </CarnetCallout>
        </section>

        {/* ─── FICHE MÉTHODE ────────────────────────── */}
        <section>
          <h2 className="font-lora text-[30px] text-carnet-ink pb-2 mb-6 border-b border-dashed border-[rgba(78,55,30,0.18)]">
            Fiche Méthode : Résoudre un problème
          </h2>

          <CarnetCallout variant="exemple" label="Méthode I.T.S">
            Pour écrire un algorithme, pensez toujours en 3 étapes :
            <ol className="list-decimal list-inside space-y-2 mt-2 font-medium">
              <li>
                <span className="text-carnet-red">Initialisation :</span> Définir les variables de départ (compteurs à 0, listes vides...).
              </li>
              <li>
                <span className="text-carnet-red">Traitement :</span> Le cœur du calcul (boucles, conditions).
              </li>
              <li>
                <span className="text-carnet-red">Sortie :</span> Renvoyer le résultat (return) ou l'afficher (print).
              </li>
            </ol>
          </CarnetCallout>
        </section>

      </div>
    </OteriaPythonChapterTemplate>
  );
};

export default OteriaPythonBasesCoursPage;
