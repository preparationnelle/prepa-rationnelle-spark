import { CheckCircle } from 'lucide-react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { PythonModuleQuiz } from '@/components/python/PythonModuleQuiz';
import { fundamentalsQuizQuestions } from '@/data/pythonQuizQuestions';
import PythonModuleLayout from '@/components/formation/PythonModuleLayout';
import ModuleNavigationCards from '@/components/formation/ModuleNavigationCards';
import { usePythonProgress } from '@/hooks/usePythonProgress';
import { Button } from '@/components/ui/button';
import { CarnetHero, CarnetSection, CarnetCallout, CarnetCodeBlock } from '@/components/carnet';

const PythonFundamentalsPage = () => {
  const { markAsComplete, isChapterComplete } = usePythonProgress();
  const chapterId = 'python-0-cours';
  const isComplete = isChapterComplete(chapterId);

  const handleComplete = () => {
    markAsComplete(chapterId);
  };

  return (
    <PythonModuleLayout>
      <CarnetHero
        eyebrow="00 · Module · Fondamentaux"
        title="Variables, types"
        accent="& opérations"
        tagline="Les briques de base de Python à automatiser avant tout exercice de concours."
        highlight="automatiser"
        handNote={'↘ les briques\nde base'}
      />

      {/* Objectifs du module */}
      <section className="carnet-card p-8 sm:p-10 mb-12">
        <div className="carnet-eyebrow mb-4">Objectifs du module</div>
        <hr className="carnet-divider mb-6" />
        <ul className="space-y-3 font-instrument text-[15px] text-carnet-ink-soft leading-[1.7]">
          {[
            'Comprendre pourquoi Python rapporte facilement des points au concours ECG.',
            'Maîtriser les bases du langage et les principales librairies utiles.',
            'Savoir écrire et structurer un script ou une fonction simple.',
            'Manipuler les listes et utiliser les boucles/conditions efficacement.',
            'Être capable de traiter tous les types d\'exercices classiques en Python au concours.',
          ].map((obj, i) => (
            <li key={i} className="flex items-start gap-3">
              <CheckCircle className="h-4 w-4 text-carnet-red mt-1 flex-shrink-0" />
              <span>{obj}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* Notion 1 — Pourquoi miser sur Python */}
      <CarnetSection
        number="01"
        title={<>Pourquoi miser sur <em className="font-lora italic text-carnet-red">Python</em>&nbsp;?</>}
        tilt="left"
      >
        <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-6">
          Quand on prépare les concours ECG, la tentation peut être forte de consacrer tout son temps aux chapitres « mathématiques » classiques. Pourtant, Python — souvent relégué au second plan — est un puissant levier de points trop souvent sous-estimé.
        </p>
        <div className="grid sm:grid-cols-2 gap-3 mb-6">
          <CarnetCallout variant="exemple" label="1 · Questions courtes, points rapides">
            <ul className="space-y-1 list-disc list-inside text-[14px]">
              <li>Compléter une ou deux lignes dans un script</li>
              <li>Corriger une erreur simple</li>
              <li>Écrire une mini-fonction à partir d'un énoncé clair</li>
            </ul>
            <p className="text-[13px] mt-2"><strong className="text-carnet-ink">En pratique :</strong> beaucoup moins de temps qu'un exercice de matrices.</p>
          </CarnetCallout>
          <CarnetCallout variant="exemple" label="2 · Un barème qui pèse">
            <p className="text-[14px]">La partie Python représente jusqu'à <strong className="text-carnet-ink">7 à 10 points</strong> du barème dans certaines épreuves.</p>
            <p className="text-[14px] mt-2">Faire l'essentiel, c'est gagner 4 à 5 points réels sur la note finale.</p>
          </CarnetCallout>
          <CarnetCallout variant="exemple" label="3 · Accessible à tous les profils">
            <p className="text-[14px]">Les questions de Python sont souvent indépendantes : tu peux les traiter même si tu as « sauté » une sous-question mathématique plus dure juste avant.</p>
          </CarnetCallout>
          <CarnetCallout variant="exemple" label="4 · Bonus universel">
            <ul className="space-y-1 list-disc list-inside text-[14px]">
              <li>Difficultés en maths → Python remonte ta note</li>
              <li>Déjà solide → moyen de viser l'excellence sans grand effort</li>
            </ul>
          </CarnetCallout>
        </div>
        <CarnetCallout variant="propriete" label="Stratégie gagnante : finir par Python">
          À la fin de l'épreuve, même si tu bloques sur des questions difficiles ou que le temps file, revenir sur les questions Python permet souvent de "gratter" quelques points supplémentaires rapidement, sans stress ni perte de temps.
        </CarnetCallout>
      </CarnetSection>

      {/* Notion 2 — Principales librairies */}
      <CarnetSection
        number="02"
        title="Les principales librairies Python (ECG)"
        tilt="right"
      >
        <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-6">
          En Python, les librairies sont des ensembles de fonctions prêtes à l'emploi. Elles évitent de "réinventer la roue" et accélèrent le travail pour le calcul, l'algèbre linéaire, la manipulation de données ou la visualisation.
        </p>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Nom</TableHead>
              <TableHead>Alias</TableHead>
              <TableHead>Utilité principale</TableHead>
              <TableHead>Exemples clés</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow><TableCell><code>numpy.random</code></TableCell><TableCell><code>rd</code></TableCell><TableCell>Tirages aléatoires (lois de proba)</TableCell><TableCell><code>rd.random()</code>, <code>rd.binomial()</code></TableCell></TableRow>
            <TableRow><TableCell><code>numpy</code></TableCell><TableCell><code>np</code></TableCell><TableCell>Calculs vectoriels/matriciels</TableCell><TableCell><code>np.array()</code>, <code>np.sum()</code></TableCell></TableRow>
            <TableRow><TableCell><code>matplotlib</code></TableCell><TableCell><code>plt</code></TableCell><TableCell>Tracer des graphiques</TableCell><TableCell><code>plt.plot()</code>, <code>plt.show()</code></TableCell></TableRow>
            <TableRow><TableCell><code>pandas</code></TableCell><TableCell><code>pd</code></TableCell><TableCell>Données type tableau/Excel</TableCell><TableCell><code>pd.DataFrame()</code></TableCell></TableRow>
          </TableBody>
        </Table>

        <div className="grid sm:grid-cols-2 gap-3 mt-8">
          <CarnetCallout variant="exemple" label="numpy.random (rd)">
            <p className="text-[13px] mb-2">Simuler des lois de probabilité.</p>
            <CarnetCodeBlock label="Code">{`import numpy.random as rd
x = rd.random()           # uniforme sur [0,1[
n = rd.binomial(10, 0.5)  # B(10, 0.5)`}</CarnetCodeBlock>
          </CarnetCallout>
          <CarnetCallout variant="exemple" label="numpy (np)">
            <p className="text-[13px] mb-2">Manipuler des tableaux de nombres.</p>
            <CarnetCodeBlock label="Code">{`import numpy as np
M = np.array([[1, 2], [3, 4]])`}</CarnetCodeBlock>
          </CarnetCallout>
          <CarnetCallout variant="exemple" label="matplotlib (plt)">
            <p className="text-[13px] mb-2">Créer des graphiques.</p>
            <CarnetCodeBlock label="Code">{`import matplotlib.pyplot as plt
plt.plot(x, y)
plt.show()`}</CarnetCodeBlock>
          </CarnetCallout>
          <CarnetCallout variant="exemple" label="pandas (pd)">
            <p className="text-[13px] mb-2">Données tableau (type Excel).</p>
            <CarnetCodeBlock label="Code">{`import pandas as pd
df = pd.DataFrame(data)`}</CarnetCodeBlock>
          </CarnetCallout>
        </div>
      </CarnetSection>

      {/* Notion 3 — Types fondamentaux et variables */}
      <CarnetSection
        number="03"
        title="Types fondamentaux et variables"
        tilt="left"
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type</TableHead>
              <TableHead>Exemple de déclaration</TableHead>
              <TableHead>Particularités</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow><TableCell><code>int</code></TableCell><TableCell><code>a = 17</code></TableCell><TableCell>Entier</TableCell></TableRow>
            <TableRow><TableCell><code>float</code></TableCell><TableCell><code>y = 8.5</code></TableCell><TableCell>Nombre à virgule</TableCell></TableRow>
            <TableRow><TableCell><code>bool</code></TableCell><TableCell><code>flag = (a == 2)</code></TableCell><TableCell>Vaut <code>True</code> / <code>False</code></TableCell></TableRow>
            <TableRow><TableCell><code>str</code></TableCell><TableCell><code>nom = "ESCP"</code></TableCell><TableCell>Chaîne de caractères</TableCell></TableRow>
          </TableBody>
        </Table>

        <div className="mt-6 mb-8">
          <CarnetCallout variant="propriete" label="Variables booléennes">
            <p className="mb-2"><code>A==2</code> signifie « A est-il égal à 2 ? »</p>
            <p><code>E = (A == C)</code> stocke <code>True</code> ou <code>False</code> dans <code>E</code> selon le test <code>A==C</code>.</p>
          </CarnetCallout>
        </div>

        <div className="carnet-eyebrow mb-4">Opérateurs numériques incontournables</div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Opérateur</TableHead>
              <TableHead>Usage</TableHead>
              <TableHead>Signification</TableHead>
              <TableHead>Exemple</TableHead>
              <TableHead>Résultat</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow><TableCell><code>+</code></TableCell><TableCell>a + b</TableCell><TableCell>Addition</TableCell><TableCell><code>3 + 2</code></TableCell><TableCell><code>5</code></TableCell></TableRow>
            <TableRow><TableCell><code>-</code></TableCell><TableCell>a - b</TableCell><TableCell>Soustraction</TableCell><TableCell><code>5 - 8</code></TableCell><TableCell><code>-3</code></TableCell></TableRow>
            <TableRow><TableCell><code>*</code></TableCell><TableCell>a * b</TableCell><TableCell>Multiplication</TableCell><TableCell><code>4 * 3</code></TableCell><TableCell><code>12</code></TableCell></TableRow>
            <TableRow><TableCell><code>/</code></TableCell><TableCell>a / b</TableCell><TableCell>Division (float)</TableCell><TableCell><code>7 / 2</code></TableCell><TableCell><code>3.5</code></TableCell></TableRow>
            <TableRow><TableCell><code>//</code></TableCell><TableCell>a // b</TableCell><TableCell>Division entière</TableCell><TableCell><code>7 // 2</code></TableCell><TableCell><code>3</code></TableCell></TableRow>
            <TableRow><TableCell><code>%</code></TableCell><TableCell>a % b</TableCell><TableCell>Modulo</TableCell><TableCell><code>17 % 6</code></TableCell><TableCell><code>5</code></TableCell></TableRow>
            <TableRow><TableCell><code>**</code></TableCell><TableCell>a ** b</TableCell><TableCell>Puissance</TableCell><TableCell><code>2 ** 4</code></TableCell><TableCell><code>16</code></TableCell></TableRow>
          </TableBody>
        </Table>
      </CarnetSection>

      {/* Notion 4 — Print et Input */}
      <CarnetSection
        number="04"
        title="Affichage et saisie"
        tilt="right"
      >
        <div className="grid sm:grid-cols-2 gap-3 mb-6">
          <CarnetCallout variant="exemple" label="L'instruction print">
            <p className="text-[13px] mb-2">Afficher du texte ou la valeur d'une variable à l'écran.</p>
            <CarnetCodeBlock label="Code">{`print("Bonjour tout le monde !")
a = 7
print(a)
print("La valeur de a est :", a)`}</CarnetCodeBlock>
          </CarnetCallout>
          <CarnetCallout variant="exemple" label="L'instruction input">
            <p className="text-[13px] mb-2">Demander à l'utilisateur d'entrer une valeur.</p>
            <CarnetCodeBlock label="Code">{`nom = input("Quel est votre nom ? ")
print("Bonjour, " + nom + " !")`}</CarnetCodeBlock>
          </CarnetCallout>
        </div>

        <CarnetCallout variant="piege" label="Conversion des types">
          <p className="mb-2"><code>input()</code> renvoie toujours une chaîne. Pour récupérer un nombre, il faut convertir explicitement&nbsp;:</p>
          <CarnetCodeBlock label="Code">{`n = int(input("Donne un nombre entier : "))
x = float(input("Donne un nombre décimal : "))`}</CarnetCodeBlock>
        </CarnetCallout>

        <div className="mt-6">
          <div className="carnet-eyebrow mb-3">Script complet — Exemple interactif</div>
          <CarnetCodeBlock label="Script">{`# Script pour saisir un entier et afficher la somme des entiers de 1 à n
n = int(input("Saisis un entier positif n : "))
somme = 0
for k in range(1, n+1):
    somme += k
print("La somme de 1 à", n, "vaut", somme)`}</CarnetCodeBlock>
        </div>
      </CarnetSection>

      {/* Notion 5 — Fonctions */}
      <CarnetSection
        number="05"
        title="Fonctions natives, numpy & personnalisées"
        tilt="left"
      >
        <div className="grid sm:grid-cols-2 gap-3 mb-6">
          <CarnetCallout variant="exemple" label="Fonctions toutes faites">
            <p className="text-[13px] mb-2">Python et numpy proposent beaucoup de fonctions prêtes à l'emploi.</p>
            <CarnetCodeBlock label="Code">{`import numpy as np
L = [3.1, 2.5, 7.6]

print(np.sum(L))     # Somme : 13.2
print(np.max(L))     # Maximum : 7.6
print(np.floor(L))   # Partie entière`}</CarnetCodeBlock>
          </CarnetCallout>
          <CarnetCallout variant="exemple" label="Fonctions personnalisées">
            <p className="text-[13px] mb-2">Quand aucune fonction prête ne correspond.</p>
            <CarnetCodeBlock label="Code">{`def f(x):
    return 7*x**3 + 1

def fpv(x, y, z):
    return 3*x + 100*y + 10000*z`}</CarnetCodeBlock>
          </CarnetCallout>
        </div>

        <CarnetCallout variant="propriete" label="Bonnes pratiques">
          <ul className="space-y-1 list-disc list-inside">
            <li>Le corps est indenté (4 espaces recommandés).</li>
            <li>Une fonction ECG = nom court, paramètres clairs, un seul <code>return</code>.</li>
            <li>Les fonctions natives/numpy sont optimisées : à privilégier dès que possible.</li>
            <li>Crée ta propre fonction quand tu dois effectuer un calcul original.</li>
          </ul>
        </CarnetCallout>
      </CarnetSection>

      {/* Notion 6 — Listes */}
      <CarnetSection
        number="06"
        title={<>Les <em className="font-lora italic text-carnet-red">listes</em> Python</>}
        tilt="right"
      >
        <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-6">
          Une liste est une séquence ordonnée d'éléments (nombres, textes…). C'est le type le plus utilisé pour stocker des données ou des résultats de calculs en Python.
        </p>

        <div className="grid sm:grid-cols-2 gap-3 mb-6">
          <CarnetCallout variant="exemple" label="Créer et remplir">
            <CarnetCodeBlock label="Code">{`L = [2, 4, 6]                  # En extension
L2 = list(range(5))            # [0,1,2,3,4]
L3 = [k**2 for k in range(5)]  # [0,1,4,9,16]`}</CarnetCodeBlock>
          </CarnetCallout>
          <CarnetCallout variant="exemple" label="Principales opérations">
            <CarnetCodeBlock label="Code">{`L.append(8)      # Ajout
L.remove(4)      # Suppression
premier = L[0]   # Premier élément
n = len(L)       # Longueur`}</CarnetCodeBlock>
          </CarnetCallout>
        </div>

        <div className="carnet-eyebrow mb-4">Tableau récapitulatif</div>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Opération</TableHead>
              <TableHead>Syntaxe</TableHead>
              <TableHead>Effet / Exemple</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow><TableCell>Création</TableCell><TableCell><code>L = [2,4,6]</code></TableCell><TableCell>Nouvelle liste</TableCell></TableRow>
            <TableRow><TableCell>Ajout</TableCell><TableCell><code>L.append(8)</code></TableCell><TableCell>[2,4,6,8]</TableCell></TableRow>
            <TableRow><TableCell>Suppression</TableCell><TableCell><code>L.remove(4)</code></TableCell><TableCell>[2,6,8]</TableCell></TableRow>
            <TableRow><TableCell>Indexation</TableCell><TableCell><code>L[0]</code></TableCell><TableCell>2 (premier élément)</TableCell></TableRow>
            <TableRow><TableCell>Concaténation</TableCell><TableCell><code>L1 + L2</code></TableCell><TableCell>[1,2,3,4]</TableCell></TableRow>
            <TableRow><TableCell>Répétition</TableCell><TableCell><code>[0]*3</code></TableCell><TableCell>[0,0,0]</TableCell></TableRow>
            <TableRow><TableCell>Tri</TableCell><TableCell><code>L.sort()</code>, <code>sorted(L)</code></TableCell><TableCell>Liste triée</TableCell></TableRow>
            <TableRow><TableCell>Appartenance</TableCell><TableCell><code>x in L</code></TableCell><TableCell><code>True</code> / <code>False</code></TableCell></TableRow>
          </TableBody>
        </Table>

        <div className="mt-6">
          <CarnetCallout variant="propriete" label="Application mathématique">
            <CarnetCodeBlock label="Code">{`S = sum(L)                    # Calcul de somme
moyenne = sum(L) / len(L)     # Moyenne
for x in L:                   # Itération
    print(x)`}</CarnetCodeBlock>
          </CarnetCallout>
        </div>
      </CarnetSection>

      {/* Notion 7 — Structures de contrôle */}
      <CarnetSection
        number="07"
        title="Structures de contrôle : for, if, while"
        tilt="left"
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Structure</TableHead>
              <TableHead>Utilité principale</TableHead>
              <TableHead>Syntaxe courte</TableHead>
              <TableHead>Exemple typique</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow><TableCell><strong>for</strong></TableCell><TableCell>Répéter pour chaque valeur</TableCell><TableCell><code>for k in range(...):</code></TableCell><TableCell>Double somme</TableCell></TableRow>
            <TableRow><TableCell><strong>if</strong></TableCell><TableCell>Tester une condition</TableCell><TableCell><code>if ...: elif ...: else:</code></TableCell><TableCell>Pair / impair</TableCell></TableRow>
            <TableRow><TableCell><strong>while</strong></TableCell><TableCell>Répéter tant que condition</TableCell><TableCell><code>while condition:</code></TableCell><TableCell>Recherche de seuil</TableCell></TableRow>
          </TableBody>
        </Table>

        <div className="grid md:grid-cols-3 gap-3 mt-6 mb-6">
          <CarnetCallout variant="exemple" label="Boucle for">
            <p className="text-[13px] mb-2">Quand on sait combien de fois répéter.</p>
            <CarnetCodeBlock label="Code">{`n = int(input("n ? "))
S = 0
for k in range(1, n+1):
    for j in range(1, n+1):
        S += k*j
print(S)`}</CarnetCodeBlock>
          </CarnetCallout>
          <CarnetCallout variant="exemple" label="Structure if">
            <p className="text-[13px] mb-2">Pour prendre des décisions.</p>
            <CarnetCodeBlock label="Code">{`n = 5
if n % 2 == 0:
    print("n est pair")
else:
    print("n est impair")`}</CarnetCodeBlock>
          </CarnetCallout>
          <CarnetCallout variant="exemple" label="Boucle while">
            <p className="text-[13px] mb-2">Quand on ne sait pas combien de fois.</p>
            <CarnetCodeBlock label="Code">{`n = 0
while 3*n + 1 <= 5000:
    n += 1
print(n, 3*n + 1)`}</CarnetCodeBlock>
          </CarnetCallout>
        </div>

        <CarnetCallout variant="propriete" label="Bonnes pratiques">
          <ul className="space-y-1 list-disc list-inside">
            <li><strong>for :</strong> préférer <code>range()</code> aux boucles à indice manuelles.</li>
            <li><strong>if :</strong> utiliser <code>elif</code> pour éviter l'imbrication excessive.</li>
            <li><strong>while :</strong> toujours prévoir une condition de sortie clairement commentée.</li>
          </ul>
        </CarnetCallout>
      </CarnetSection>

      {/* Notion 8 — Différence script/fonction */}
      <CarnetSection
        number="08"
        title={<>Script <em className="font-lora italic text-carnet-red">vs</em> fonction</>}
        tilt="right"
      >
        <div className="grid sm:grid-cols-2 gap-3 mb-6">
          <CarnetCallout variant="exemple" label="Script">
            <p className="text-[13px] mb-2">
              Ensemble d'instructions exécutées directement quand on lance le fichier. Effectue une tâche, mais n'est pas conçu pour être réutilisé facilement.
            </p>
            <CarnetCodeBlock label="Code">{`# Script qui calcule la somme de 1 à n
n = 10
somme = 0
for k in range(1, n+1):
    somme += k
print(f"La somme de 1 à {n} vaut {somme}")`}</CarnetCodeBlock>
          </CarnetCallout>
          <CarnetCallout variant="exemple" label="Fonction">
            <p className="text-[13px] mb-2">
              Bloc de code réutilisable, défini une seule fois, et appelable plusieurs fois avec des paramètres différents.
            </p>
            <CarnetCodeBlock label="Code">{`# Fonction qui calcule la somme de 1 à n
def somme_1_a_n(n):
    somme = 0
    for k in range(1, n+1):
        somme += k
    return somme

print(somme_1_a_n(10))    # Affiche 55
print(somme_1_a_n(100))   # Affiche 5050`}</CarnetCodeBlock>
          </CarnetCallout>
        </div>

        <CarnetCallout variant="propriete" label="L'intérêt principal des fonctions">
          <strong className="text-carnet-ink">Réutilisabilité et clarté du code.</strong> Impossible de réutiliser facilement un script pour une autre valeur sans modifier le code ou relancer l'exécution. Avec une fonction, on peut l'appeler autant de fois qu'on veut avec des paramètres différents.
        </CarnetCallout>
      </CarnetSection>

      {/* Notion 9 — Méthode de résolution */}
      <CarnetSection
        number="09"
        title="Méthode — résoudre un exercice en Python"
        tilt="left"
      >
        <CarnetCallout variant="propriete" label="Plan en 3 étapes" className="mb-6">
          Décomposer en trois grandes étapes : <strong className="text-carnet-ink">Initialisation → Traitement → Sortie</strong>.
        </CarnetCallout>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Étape</TableHead>
              <TableHead>Script</TableHead>
              <TableHead>Fonction</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow><TableCell><strong>Initialisation</strong></TableCell><TableCell>Variables et compteurs avant la boucle</TableCell><TableCell>Paramètres d'entrée + compteurs locaux</TableCell></TableRow>
            <TableRow><TableCell><strong>Traitement</strong></TableCell><TableCell>Calculs, boucles, conditions</TableCell><TableCell>Même logique, mais variables locales</TableCell></TableRow>
            <TableRow><TableCell><strong>Sortie</strong></TableCell><TableCell><code>print(...)</code> (à l'utilisateur)</TableCell><TableCell><code>return ...</code> (à l'appelant)</TableCell></TableRow>
          </TableBody>
        </Table>

        <div className="grid md:grid-cols-3 gap-3 mt-6 mb-6">
          <CarnetCallout variant="exemple" label="1 · Initialisation">
            <p className="text-[13px] mb-2">Préparer variables, compteurs, listes.</p>
            <ul className="text-[12px] space-y-1 list-disc list-inside">
              <li>Toujours initialiser les compteurs à 0</li>
              <li>Pour une liste : <code>L = []</code></li>
              <li>Distinguer <code>input()</code>, paramètres, variables locales</li>
            </ul>
          </CarnetCallout>
          <CarnetCallout variant="exemple" label="2 · Traitement">
            <p className="text-[13px] mb-2">Mettre en œuvre l'algorithme.</p>
            <ul className="text-[12px] space-y-1 list-disc list-inside">
              <li>Boucles (<code>for</code> ou <code>while</code>) pour répéter</li>
              <li>Transformation/calcul sur des listes</li>
              <li>Conditions (<code>if</code>) pour ajuster</li>
            </ul>
          </CarnetCallout>
          <CarnetCallout variant="exemple" label="3 · Sortie">
            <p className="text-[13px] mb-2">Afficher ou retourner le résultat.</p>
            <ul className="text-[12px] space-y-1 list-disc list-inside">
              <li>Script : <code>print()</code></li>
              <li>Fonction : <code>return</code></li>
              <li>Format : nombre, liste, chaîne…</li>
            </ul>
          </CarnetCallout>
        </div>

        <CarnetCallout variant="piege" label="Astuce méthode">
          Toujours écrire d'abord le plan sur papier avant de coder : <strong>Initialisation → Traitement → Sortie</strong>. Tester avec plusieurs cas (petit, grand, valeurs limites).
        </CarnetCallout>
      </CarnetSection>

      {/* Notion 10 — Types d'exercices */}
      <CarnetSection
        number="10"
        title="Les 3 types d'exercices fréquents en ECG"
        tilt="right"
      >
        <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-6">
          Dans les annales, on retrouve presque toujours trois grandes familles d'exercices. Les repérer aide à gagner du temps et à adopter la bonne stratégie.
        </p>

        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Type d'exercice</TableHead>
              <TableHead>Ce qu'on attend</TableHead>
              <TableHead>Points stratégiques</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow><TableCell><strong>Créer un script ou une fonction</strong></TableCell><TableCell>Structuration, logique</TableCell><TableCell>Initialisation → Traitement → Sortie, ne pas oublier les imports</TableCell></TableRow>
            <TableRow><TableCell><strong>Compléter / comprendre un script</strong></TableCell><TableCell>Lecture, rigueur, déduction</TableCell><TableCell>Tester à la main, suivre la logique</TableCell></TableRow>
            <TableRow><TableCell><strong>Interpréter une sortie</strong></TableCell><TableCell>Analyse, synthèse</TableCell><TableCell>Lien avec le programme, argumenter</TableCell></TableRow>
          </TableBody>
        </Table>

        <div className="grid md:grid-cols-3 gap-3 mt-6 mb-6">
          <CarnetCallout variant="exemple" label="Type 1 · Créer">
            <p className="text-[13px] mb-2">« Écrire un script qui réalise… », « Créer une fonction qui calcule… »</p>
            <ul className="text-[12px] space-y-1 list-disc list-inside">
              <li>Construire la totalité de la solution</li>
              <li>Initialisation → Traitement → Sortie</li>
              <li>Ne pas oublier les imports</li>
            </ul>
          </CarnetCallout>
          <CarnetCallout variant="exemple" label="Type 2 · Comprendre">
            <p className="text-[13px] mb-2">« Que fait ce script ? », « Compléter la ligne manquante »</p>
            <ul className="text-[12px] space-y-1 list-disc list-inside">
              <li>Analyser un code fourni</li>
              <li>Comprendre la logique des variables</li>
              <li>Retracer ligne par ligne</li>
            </ul>
          </CarnetCallout>
          <CarnetCallout variant="exemple" label="Type 3 · Interpréter">
            <p className="text-[13px] mb-2">« Interpréter ce graphique », « Conclure sur la convergence »</p>
            <ul className="text-[12px] space-y-1 list-disc list-inside">
              <li>Lire et expliquer un résultat</li>
              <li>Interpréter courbe / tableau</li>
              <li>Faire le lien avec le cours</li>
            </ul>
          </CarnetCallout>
        </div>

        <CarnetCallout variant="propriete" label="Stratégie gagnante">
          Entraîne-toi sur des annales en repérant à quelle catégorie appartient chaque question. Reconnaître rapidement le type d'exercice aide à organiser sa réflexion et à maximiser ses points le jour de l'épreuve.
        </CarnetCallout>
      </CarnetSection>

      {/* Notion 11 — Comment bien se préparer */}
      <CarnetSection
        number="11"
        title="Comment bien se préparer en Python"
        tilt="left"
      >
        <p className="font-instrument text-[15px] text-carnet-ink-soft leading-[1.7] mb-6">
          Réussir l'épreuve de Python aux concours ne tient pas du hasard. C'est une question de méthode, de rigueur, mais aussi de bonnes ressources.
        </p>

        <div className="grid sm:grid-cols-2 gap-3 mb-6">
          <CarnetCallout variant="exemple" label="1 · Se tester avec les flashcards">
            <p className="text-[13px] mb-2">L'entraînement régulier vérifie que les bases sont assimilées.</p>
            <ul className="text-[12px] space-y-1 list-disc list-inside">
              <li>Syntaxes clés (for, while, if, listes)</li>
              <li>Commandes par cœur</li>
              <li>Tester plusieurs fois, espacé</li>
            </ul>
          </CarnetCallout>
          <CarnetCallout variant="exemple" label="2 · Réviser avec des fiches">
            <p className="text-[13px] mb-2">Toutes les notions du programme à portée de main.</p>
            <ul className="text-[12px] space-y-1 list-disc list-inside">
              <li>Définitions et syntaxes claires</li>
              <li>Bonnes pratiques + astuces</li>
              <li>Révisions express avant l'épreuve</li>
            </ul>
          </CarnetCallout>
          <CarnetCallout variant="exemple" label="3 · S'entraîner sur les classiques">
            <p className="text-[13px] mb-2">Tous les scripts tombés ou susceptibles de tomber.</p>
            <ul className="text-[12px] space-y-1 list-disc list-inside">
              <li>Sommes, produits, suites, simulations</li>
              <li>Reconnaître au premier coup d'œil</li>
              <li>Adapter à une consigne nouvelle</li>
            </ul>
          </CarnetCallout>
          <CarnetCallout variant="exemple" label="4 · Développer son outil">
            <p className="text-[13px] mb-2">S'approprier l'outil de travail.</p>
            <ul className="text-[12px] space-y-1 list-disc list-inside">
              <li>Ajouter les scripts difficiles</li>
              <li>Noter les erreurs fréquentes</li>
              <li>Bibliothèque personnelle de bouts de code</li>
            </ul>
          </CarnetCallout>
        </div>

        <CarnetCallout variant="piege" label="Le kit de survie Python">
          <ul className="space-y-1 list-disc list-inside">
            <li>Une liste exhaustive des commandes, structures, syntaxes à connaître</li>
            <li>Les scripts classiques, déjà tombés ou repérés dans les annales</li>
            <li>Les fiches de cours synthétiques sur toutes les notions du programme</li>
            <li>La capacité de retrouver rapidement un exemple ou une structure type</li>
            <li>Et surtout, la compréhension de ce que tu fais (et non seulement le « par cœur »)</li>
          </ul>
        </CarnetCallout>
      </CarnetSection>

      {/* Notion 12 — Récapitulatif des commandes */}
      <CarnetSection
        number="12"
        title="Récapitulatif des commandes utiles"
        tilt="right"
      >
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Action ou test</TableHead>
              <TableHead>Syntaxe</TableHead>
              <TableHead>Exemple</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow><TableCell>Affecter une valeur</TableCell><TableCell><code>=</code></TableCell><TableCell><code>A = 5</code></TableCell></TableRow>
            <TableRow><TableCell>Afficher</TableCell><TableCell><code>print(...)</code></TableCell><TableCell><code>print(A)</code></TableCell></TableRow>
            <TableRow><TableCell>Connaître le type</TableCell><TableCell><code>type(...)</code></TableCell><TableCell><code>type(A)</code></TableCell></TableRow>
            <TableRow><TableCell>Addition</TableCell><TableCell><code>+</code></TableCell><TableCell><code>A + B</code></TableCell></TableRow>
            <TableRow><TableCell>Soustraction</TableCell><TableCell><code>-</code></TableCell><TableCell><code>A - B</code></TableCell></TableRow>
            <TableRow><TableCell>Multiplication</TableCell><TableCell><code>*</code></TableCell><TableCell><code>A * B</code></TableCell></TableRow>
            <TableRow><TableCell>Division réelle</TableCell><TableCell><code>/</code></TableCell><TableCell><code>A / B</code></TableCell></TableRow>
            <TableRow><TableCell>Division entière</TableCell><TableCell><code>//</code></TableCell><TableCell><code>A // B</code></TableCell></TableRow>
            <TableRow><TableCell>Modulo</TableCell><TableCell><code>%</code></TableCell><TableCell><code>A % B</code></TableCell></TableRow>
            <TableRow><TableCell>Puissance</TableCell><TableCell><code>**</code></TableCell><TableCell><code>A ** B</code></TableCell></TableRow>
            <TableRow><TableCell>Partie entière</TableCell><TableCell><code>int(...)</code></TableCell><TableCell><code>int(6.4)</code></TableCell></TableRow>
            <TableRow><TableCell>Entrée clavier</TableCell><TableCell><code>input(...)</code></TableCell><TableCell><code>x = input("Entrer x : ")</code></TableCell></TableRow>
            <TableRow><TableCell>Boucle for</TableCell><TableCell><code>for ... in range(...):</code></TableCell><TableCell><code>for k in range(1, 5, 2):</code></TableCell></TableRow>
            <TableRow><TableCell>Boucle while</TableCell><TableCell><code>while ...:</code></TableCell><TableCell><code>while A &lt; 5:</code></TableCell></TableRow>
            <TableRow><TableCell>Condition if</TableCell><TableCell><code>if ...:</code></TableCell><TableCell><code>if A == 3:</code></TableCell></TableRow>
            <TableRow><TableCell>Condition elif</TableCell><TableCell><code>elif ...:</code></TableCell><TableCell><code>elif A &lt;= 6:</code></TableCell></TableRow>
            <TableRow><TableCell>Condition else</TableCell><TableCell><code>else:</code></TableCell><TableCell><code>else:</code></TableCell></TableRow>
            <TableRow><TableCell>Inférieur / supérieur</TableCell><TableCell><code>&lt;</code> / <code>&gt;</code></TableCell><TableCell><code>A &lt; B</code></TableCell></TableRow>
            <TableRow><TableCell>Inférieur / supérieur ou égal</TableCell><TableCell><code>&lt;=</code> / <code>&gt;=</code></TableCell><TableCell><code>A &lt;= B</code></TableCell></TableRow>
            <TableRow><TableCell>Égalité / différence</TableCell><TableCell><code>==</code> / <code>!=</code></TableCell><TableCell><code>A == B</code></TableCell></TableRow>
            <TableRow><TableCell>Tester si pair</TableCell><TableCell><code>% 2 == 0</code></TableCell><TableCell><code>A % 2 == 0</code></TableCell></TableRow>
            <TableRow><TableCell>Tester si impair</TableCell><TableCell><code>% 2 == 1</code></TableCell><TableCell><code>A % 2 == 1</code></TableCell></TableRow>
          </TableBody>
        </Table>
      </CarnetSection>

      {/* Validation Button */}
      <div className="flex justify-center my-12">
        <Button
          onClick={handleComplete}
          size="lg"
          className={`text-base px-8 py-5 rounded-full transition-all font-instrument font-semibold ${
            isComplete
              ? 'bg-carnet-red hover:bg-carnet-red text-carnet-paper'
              : 'bg-carnet-ink hover:bg-carnet-red text-carnet-paper'
          }`}
          disabled={isComplete}
        >
          <CheckCircle className="mr-2 h-5 w-5" />
          {isComplete ? 'Chapitre terminé' : 'Terminer ce chapitre'}
        </Button>
      </div>

      {/* Quiz Section */}
      <PythonModuleQuiz
        title="Quiz Pratique - Module 0"
        questions={fundamentalsQuizQuestions}
        moduleColor="gray"
      />

      {/* Navigation vers les exercices */}
      <ModuleNavigationCards
        currentModule={{
          id: 0,
          title: 'Fondamentaux',
          slug: 'fondamentaux',
          color: 'gray',
        }}
        isExercisePage={false}
      />
    </PythonModuleLayout>
  );
};

export default PythonFundamentalsPage;
