import React from 'react';
import { OteriaChapterTemplate } from '@/components/formation/OteriaChapterTemplate';
import { ExerciseBlock, CodeBlock } from '@/components/formation/AcademicBlocks';
import { Badge } from "@/components/ui/badge";
import { LatexRenderer } from '@/components/LatexRenderer';

const OteriaProbabilitesExercicesPage = () => {
  const exercises = [
    {
      id: 1,
      title: "Lancer de dés",
      difficulty: "Facile",
      statement: (
        <div className="space-y-4">
          <p>On lance un dé équilibré à 6 faces.</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Quelle est la probabilité d'obtenir un 5 ?</li>
            <li>Quelle est la probabilité d'obtenir un nombre pair ?</li>
            <li>Quelle est la probabilité d'obtenir un nombre supérieur ou égal à 4 ?</li>
            <li>Quelle est la probabilité d'obtenir un nombre impair et supérieur à 3 ?</li>
          </ol>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <div>
            <p className="font-semibold mb-2">1. Probabilité d'obtenir un 5</p>
            <LatexRenderer latex="P(\{5\}) = \frac{1}{6}" block={true} />
            <p className="mt-2 text-sm text-slate-600">Il y a 1 cas favorable sur 6 possibles.</p>
          </div>
          <div>
            <p className="font-semibold mb-2">2. Probabilité d'obtenir un nombre pair</p>
            <p className="mb-2">Nombres pairs : {'{2, 4, 6}'}</p>
            <LatexRenderer latex="P(\text{pair}) = \frac{3}{6} = \frac{1}{2}" block={true} />
          </div>
          <div>
            <p className="font-semibold mb-2">3. Probabilité d'obtenir ≥ 4</p>
            <p className="mb-2">Nombres ≥ 4 : {'{4, 5, 6}'}</p>
            <LatexRenderer latex="P(X \geq 4) = \frac{3}{6} = \frac{1}{2}" block={true} />
          </div>
          <div>
            <p className="font-semibold mb-2">4. Probabilité d'obtenir un impair {'>'} 3</p>
            <p className="mb-2">Nombres impairs et {'>'}3 : {'{5}'}</p>
            <LatexRenderer latex="P(\text{impair et} > 3) = \frac{1}{6}" block={true} />
          </div>
        </div>
      )
    },
    {
      id: 2,
      title: "Tirage de cartes",
      difficulty: "Facile",
      statement: (
        <div className="space-y-4">
          <p>On tire une carte au hasard dans un jeu de 52 cartes (13 cartes par couleur : ♠, ♥, ♦, ♣).</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Quelle est la probabilité de tirer un As ?</li>
            <li>Quelle est la probabilité de tirer un cœur (♥) ?</li>
            <li>Quelle est la probabilité de tirer une figure (Valet, Dame, Roi) ?</li>
            <li>Quelle est la probabilité de tirer un As OU un cœur ?</li>
          </ol>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <div>
            <p className="font-semibold mb-2">1. Probabilité de tirer un As</p>
            <p className="mb-2">Il y a 4 As dans le jeu (un par couleur)</p>
            <LatexRenderer latex="P(\text{As}) = \frac{4}{52} = \frac{1}{13}" block={true} />
          </div>
          <div>
            <p className="font-semibold mb-2">2. Probabilité de tirer un cœur</p>
            <p className="mb-2">Il y a 13 cœurs dans le jeu</p>
            <LatexRenderer latex="P(\heartsuit) = \frac{13}{52} = \frac{1}{4}" block={true} />
          </div>
          <div>
            <p className="font-semibold mb-2">3. Probabilité de tirer une figure</p>
            <p className="mb-2">Il y a 3 figures par couleur × 4 couleurs = 12 figures</p>
            <LatexRenderer latex="P(\text{Figure}) = \frac{12}{52} = \frac{3}{13}" block={true} />
          </div>
          <div>
            <p className="font-semibold mb-2">4. Probabilité de tirer un As OU un cœur</p>
            <p className="mb-2">Utilisons la formule : <LatexRenderer latex="P(A \cup B) = P(A) + P(B) - P(A \cap B)" inline /></p>
            <LatexRenderer latex="P(\text{As} \cup \heartsuit) = \frac{4}{52} + \frac{13}{52} - \frac{1}{52} = \frac{16}{52} = \frac{4}{13}" block={true} />
            <p className="mt-2 text-sm text-slate-600">On soustrait P(As de cœur) car il est compté deux fois.</p>
          </div>
        </div>
      )
    },
    {
      id: 3,
      title: "Règle du produit",
      difficulty: "Moyen",
      statement: (
        <div className="space-y-4">
          <p>On lance deux dés équilibrés l'un après l'autre.</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Combien y a-t-il de résultats possibles au total ?</li>
            <li>Quelle est la probabilité d'obtenir un double (même résultat sur les deux dés) ?</li>
            <li>Quelle est la probabilité que la somme soit égale à 7 ?</li>
            <li>Quelle est la probabilité que les deux dés montrent des nombres pairs ?</li>
          </ol>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <div>
            <p className="font-semibold mb-2">1. Nombre de résultats possibles</p>
            <p className="mb-2">Règle du produit : 6 choix pour le 1er dé × 6 choix pour le 2ème</p>
            <LatexRenderer latex="\text{Total} = 6 \times 6 = 36 \text{ résultats possibles}" block={true} />
          </div>
          <div>
            <p className="font-semibold mb-2">2. Probabilité d'obtenir un double</p>
            <p className="mb-2">Doubles possibles : (1,1), (2,2), (3,3), (4,4), (5,5), (6,6) → 6 cas</p>
            <LatexRenderer latex="P(\text{double}) = \frac{6}{36} = \frac{1}{6}" block={true} />
          </div>
          <div>
            <p className="font-semibold mb-2">3. Probabilité que la somme soit 7</p>
            <p className="mb-2">Combinaisons donnant 7 : (1,6), (2,5), (3,4), (4,3), (5,2), (6,1) → 6 cas</p>
            <LatexRenderer latex="P(\text{somme} = 7) = \frac{6}{36} = \frac{1}{6}" block={true} />
          </div>
          <div>
            <p className="font-semibold mb-2">4. Probabilité que les deux soient pairs</p>
            <p className="mb-2">1er dé pair : {'{2,4,6}'} → P = 3/6 = 1/2</p>
            <p className="mb-2">2ème dé pair : {'{2,4,6}'} → P = 3/6 = 1/2</p>
            <p className="mb-2">Les lancers sont indépendants, donc :</p>
            <LatexRenderer latex="P(\text{les deux pairs}) = \frac{1}{2} \times \frac{1}{2} = \frac{1}{4}" block={true} />
          </div>
        </div>
      )
    },
    {
      id: 4,
      title: "Événements indépendants",
      difficulty: "Moyen",
      statement: (
        <div className="space-y-4">
          <p>Un système de sécurité comporte deux capteurs indépendants. Le capteur A détecte une intrusion avec une probabilité de 0.9, le capteur B avec une probabilité de 0.85.</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Quelle est la probabilité que les deux capteurs détectent l'intrusion ?</li>
            <li>Quelle est la probabilité qu'aucun des deux capteurs ne détecte l'intrusion ?</li>
            <li>Quelle est la probabilité qu'au moins un capteur détecte l'intrusion ?</li>
          </ol>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <div>
            <p className="font-semibold mb-2">1. Probabilité que les deux détectent</p>
            <p className="mb-2">Les capteurs sont indépendants, donc :</p>
            <LatexRenderer latex="P(A \cap B) = P(A) \times P(B) = 0.9 \times 0.85 = 0.765" block={true} />
            <p className="mt-2 text-sm text-slate-600">Il y a 76.5% de chances que les deux détectent.</p>
          </div>
          <div>
            <p className="font-semibold mb-2">2. Probabilité qu'aucun ne détecte</p>
            <p className="mb-2">P(A ne détecte pas) = 1 - 0.9 = 0.1</p>
            <p className="mb-2">P(B ne détecte pas) = 1 - 0.85 = 0.15</p>
            <LatexRenderer latex="P(\overline{A} \cap \overline{B}) = 0.1 \times 0.15 = 0.015" block={true} />
            <p className="mt-2 text-sm text-slate-600">Il n'y a que 1.5% de chances que les deux échouent.</p>
          </div>
          <div>
            <p className="font-semibold mb-2">3. Probabilité qu'au moins un détecte</p>
            <p className="mb-2">Méthode 1 (complémentaire) :</p>
            <LatexRenderer latex="P(\text{au moins un}) = 1 - P(\text{aucun}) = 1 - 0.015 = 0.985" block={true} />
            <p className="mt-3 mb-2">Méthode 2 (addition) :</p>
            <LatexRenderer latex="P(A \cup B) = P(A) + P(B) - P(A \cap B) = 0.9 + 0.85 - 0.765 = 0.985" block={true} />
            <p className="mt-2 text-sm text-slate-600">98.5% de chances qu'au moins un capteur détecte l'intrusion.</p>
          </div>
        </div>
      )
    },
    {
      id: 5,
      title: "Probabilités conditionnelles",
      difficulty: "Moyen",
      statement: (
        <div className="space-y-4">
          <p>Dans une entreprise, 60% des employés sont des femmes. Parmi les femmes, 40% occupent un poste de cadre. Parmi les hommes, 50% occupent un poste de cadre.</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Quelle est la probabilité qu'un employé choisi au hasard soit une femme cadre ?</li>
            <li>Quelle est la probabilité qu'un employé choisi au hasard soit cadre ?</li>
            <li>Sachant qu'un employé est cadre, quelle est la probabilité que ce soit une femme ?</li>
          </ol>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <div className="bg-slate-50 p-3 rounded mb-4 text-sm">
            <p className="font-semibold mb-2">Notations :</p>
            <p>• F = "l'employé est une femme" → P(F) = 0.6</p>
            <p>• H = "l'employé est un homme" → P(H) = 0.4</p>
            <p>• C = "l'employé est cadre"</p>
            <p>• P(C|F) = 0.4 et P(C|H) = 0.5</p>
          </div>
          <div>
            <p className="font-semibold mb-2">1. Probabilité d'être une femme cadre</p>
            <p className="mb-2">On cherche <LatexRenderer latex="P(F \cap C)" inline /></p>
            <LatexRenderer latex="P(F \cap C) = P(F) \times P(C|F) = 0.6 \times 0.4 = 0.24" block={true} />
            <p className="mt-2 text-sm text-slate-600">24% des employés sont des femmes cadres.</p>
          </div>
          <div>
            <p className="font-semibold mb-2">2. Probabilité d'être cadre</p>
            <p className="mb-2">Formule des probabilités totales :</p>
            <LatexRenderer latex="P(C) = P(F \cap C) + P(H \cap C)" block={true} />
            <LatexRenderer latex="P(C) = 0.6 \times 0.4 + 0.4 \times 0.5 = 0.24 + 0.2 = 0.44" block={true} />
            <p className="mt-2 text-sm text-slate-600">44% des employés sont cadres.</p>
          </div>
          <div>
            <p className="font-semibold mb-2">3. Probabilité d'être une femme sachant qu'on est cadre</p>
            <p className="mb-2">On cherche P(F|C) avec la formule de Bayes :</p>
            <LatexRenderer latex="P(F|C) = \frac{P(F \cap C)}{P(C)} = \frac{0.24}{0.44} \approx 0.545" block={true} />
            <p className="mt-2 text-sm text-slate-600">Environ 54.5% des cadres sont des femmes.</p>
          </div>
        </div>
      )
    },
    {
      id: 6,
      title: "Simulation avec Python",
      difficulty: "Difficile",
      statement: (
        <div className="space-y-4">
          <p>Écrire un programme Python pour simuler 10 000 lancers de deux dés et estimer :</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>La probabilité d'obtenir une somme égale à 7</li>
            <li>La probabilité d'obtenir un double</li>
            <li>Comparer les résultats avec les probabilités théoriques</li>
          </ol>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <CodeBlock
            language="python"
            title="Simulation Monte-Carlo dés"
            code={`import random

# Paramètres de simulation
n_simulations = 10000
compteur_somme_7 = 0
compteur_double = 0

# Simulation
for _ in range(n_simulations):
    de1 = random.randint(1, 6)
    de2 = random.randint(1, 6)
    somme = de1 + de2
    
    if somme == 7:
        compteur_somme_7 += 1
    
    if de1 == de2:
        compteur_double += 1

# Calcul des probabilités estimées
proba_somme_7_estimee = compteur_somme_7 / n_simulations
proba_double_estimee = compteur_double / n_simulations

# Probabilités théoriques
proba_somme_7_theorique = 6/36  # 1/6
proba_double_theorique = 6/36   # 1/6

# Affichage des résultats
print(f"Somme = 7:")
print(f"  Probabilité estimée: {proba_somme_7_estimee:.4f}")
print(f"  Probabilité théorique: {proba_somme_7_theorique:.4f}")
print(f"  Erreur: {abs(proba_somme_7_estimee - proba_somme_7_theorique):.4f}")

print(f"\\nDouble:")
print(f"  Probabilité estimée: {proba_double_estimee:.4f}")
print(f"  Probabilité théorique: {proba_double_theorique:.4f}")
print(f"  Erreur: {abs(proba_double_estimee - proba_double_theorique):.4f}")`}
          />
          <div className="bg-slate-50 p-4 rounded text-sm text-slate-700">
            <p className="font-semibold mb-2">Résultat attendu (exemple) :</p>
            <pre className="font-mono text-xs mb-2">{`Somme = 7:
  Probabilité estimée: 0.1672
  Probabilité théorique: 0.1667
  Erreur: 0.0005

Double:
  Probabilité estimée: 0.1658
  Probabilité théorique: 0.1667
  Erreur: 0.0009`}</pre>
            <p>Plus on augmente le nombre de simulations, plus l'estimation se rapproche de la valeur théorique (loi des grands nombres).</p>
          </div>
        </div>
      )
    },
    {
      id: 7,
      title: "Sécurité informatique - Mot de passe",
      difficulty: "Difficile",
      statement: (
        <div className="space-y-4">
          <p>Un mot de passe est composé de 6 caractères choisis parmi 26 lettres minuscules et 10 chiffres (36 possibilités par caractère). Un attaquant essaie de deviner le mot de passe en testant des combinaisons aléatoires.</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Combien y a-t-il de mots de passe possibles ?</li>
            <li>Quelle est la probabilité de trouver le bon mot de passe en un seul essai ?</li>
            <li>Si l'attaquant peut tester 1 million de mots de passe par seconde, combien de temps faut-il en moyenne pour trouver le mot de passe ?</li>
            <li>Si on ajoute des majuscules (26 lettres supplémentaires), comment change le temps d'attaque ?</li>
          </ol>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <div>
            <p className="font-semibold mb-2">1. Nombre de mots de passe possibles</p>
            <p className="mb-2">36 choix par position × 6 positions :</p>
            <LatexRenderer latex="\text{Total} = 36^6 = 2\,176\,782\,336 \approx 2.18 \times 10^9" block={true} />
            <p className="mt-2 text-sm text-slate-600">Plus de 2 milliards de combinaisons possibles.</p>
          </div>
          <div>
            <p className="font-semibold mb-2">2. Probabilité de réussite en un essai</p>
            <LatexRenderer latex="P(\text{succès}) = \frac{1}{36^6} \approx 4.6 \times 10^{-10}" block={true} />
            <p className="mt-2 text-sm text-slate-600">Probabilité extrêmement faible !</p>
          </div>
          <div>
            <p className="font-semibold mb-2">3. Temps moyen d'attaque</p>
            <p className="mb-2">En moyenne, il faut tester la moitié des combinaisons :</p>
            <LatexRenderer latex="\text{Essais moyens} = \frac{36^6}{2} \approx 1.09 \times 10^9" block={true} />
            <p className="mb-2">À 10⁶ essais/seconde :</p>
            <LatexRenderer latex="\text{Temps} = \frac{1.09 \times 10^9}{10^6} = 1090 \text{ secondes} \approx 18 \text{ minutes}" block={true} />
          </div>
          <div>
            <p className="font-semibold mb-2">4. Avec majuscules (62 caractères)</p>
            <p className="mb-2">Nouveau nombre de combinaisons :</p>
            <LatexRenderer latex="62^6 \approx 5.68 \times 10^{10}" block={true} />
            <p className="mb-2">Temps moyen :</p>
            <LatexRenderer latex="\text{Temps} = \frac{5.68 \times 10^{10}}{2 \times 10^6} \approx 28\,400 \text{ secondes} \approx 7.9 \text{ heures}" block={true} />
            <p className="mt-3 text-sm bg-amber-50 p-2 rounded border border-amber-200 text-amber-900">
              <strong>Conclusion :</strong> Ajouter des majuscules multiplie le temps d'attaque par 26 ! C'est pourquoi les mots de passe forts utilisent plusieurs types de caractères.
            </p>
          </div>
        </div>
      )
    },
    {
      id: 8,
      title: "Générateur aléatoire et tests",
      difficulty: "Difficile",
      statement: (
        <div className="space-y-4">
          <p>On souhaite tester la qualité d'un générateur de nombres pseudo-aléatoires en Python.</p>
          <ol className="list-decimal list-inside space-y-2 ml-4">
            <li>Écrire un programme qui génère 10 000 nombres aléatoires entre 0 et 1</li>
            <li>Calculer la proportion de nombres inférieurs à 0.3 et comparer à la théorie</li>
            <li>Calculer la moyenne et l'écart-type des nombres générés</li>
            <li>Créer un histogramme pour visualiser la distribution</li>
          </ol>
        </div>
      ),
      solution: (
        <div className="space-y-4">
          <CodeBlock
            language="python"
            title="Test générateur pseudo-aléatoire"
            code={`import random
import matplotlib.pyplot as plt
import numpy as np

# 1. Génération de 10 000 nombres aléatoires
n = 10000
nombres = [random.random() for _ in range(n)]

# 2. Proportion de nombres < 0.3
inferieurs_03 = sum(1 for x in nombres if x < 0.3)
proportion = inferieurs_03 / n
print(f"Proportion < 0.3: {proportion:.4f}")
print(f"Valeur théorique: 0.3000")
print(f"Écart: {abs(proportion - 0.3):.4f}\\n")

# 3. Moyenne et écart-type
moyenne = np.mean(nombres)
ecart_type = np.std(nombres)
print(f"Moyenne: {moyenne:.4f} (théorique: 0.5)")
print(f"Écart-type: {ecart_type:.4f} (théorique: {1/np.sqrt(12):.4f})\\n")

# 4. Histogramme
plt.figure(figsize=(10, 6))
plt.hist(nombres, bins=50, density=True, alpha=0.7, 
         color='blue', edgecolor='black')
plt.axhline(y=1, color='red', linestyle='--', 
           label='Distribution uniforme théorique')
plt.xlabel('Valeur')
plt.ylabel('Densité de probabilité')
plt.title('Distribution de 10 000 nombres pseudo-aléatoires')
plt.legend()
plt.grid(True, alpha=0.3)
plt.show()`}
          />
          <div className="bg-slate-50 p-4 rounded text-sm text-slate-700">
            <p className="font-semibold mb-3">Valeurs théoriques pour une loi uniforme sur [0,1] :</p>
            <ul className="space-y-2 text-sm ml-4 list-disc">
              <li><strong>Proportion &lt; 0.3 :</strong> Exactement 0.3 (30%)</li>
              <li><strong>Moyenne :</strong> 0.5</li>
              <li><strong>Écart-type :</strong> <LatexRenderer latex="1/\sqrt{12} \approx 0.2887" inline /></li>
              <li><strong>Densité :</strong> Constante égale à 1</li>
            </ul>
            <p className="mt-3">
              Un bon générateur aléatoire doit produire des résultats très proches de ces valeurs théoriques. Les écarts observés diminuent avec le nombre de tirages (loi des grands nombres).
            </p>
          </div>
        </div>
      )
    }
  ];

  return (
    <OteriaChapterTemplate
      sessionNumber={8}
      sessionTitle="Introduction aux probabilités"
      description="Génération d'aléatoire, Règles addition / multiplication, indépendance"
      slug="probabilites"
      duration="4h"
      level="Intermédiaire"
      activeSection="exercises"
      previousChapterLink="/formation/oteria/denombrement-exercices"
      nextChapterLink="/formation/oteria/variables-aleatoires-exercices"
    >
      <div className="space-y-8 max-w-none text-slate-700">

        {/* ─── OBJECTIFS ────────────────────────────────────────────── */}
        <div className="bg-slate-50 border border-slate-100 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Objectifs de la séance</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li>Comprendre la notion d'expérience aléatoire et d'univers</li>
            <li>Maîtriser le calcul de probabilités avec les règles d'addition et de multiplication</li>
            <li>Comprendre et manipuler la notion d'indépendance</li>
            <li>Utiliser les probabilités conditionnelles et la formule de Bayes</li>
            <li>Simuler des expériences aléatoires simples avec Python</li>
          </ul>
        </div>

        {/* ─── EXERCICES ────────────────────────────────────────────── */}
        {exercises.map((exercise) => (
          <ExerciseBlock
            key={exercise.id}
            number={exercise.id.toString()}
            title={exercise.title}
            solution={exercise.solution}
          >
            <div className="mb-4">
              <Badge
                className={`${exercise.difficulty === 'Facile' ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200' :
                  exercise.difficulty === 'Moyen' ? 'bg-amber-100 text-amber-800 hover:bg-amber-200' :
                    'bg-rose-100 text-rose-800 hover:bg-rose-200'
                  } mb-2`}
                variant="secondary"
              >
                {exercise.difficulty}
              </Badge>
              <div className="text-slate-700 leading-relaxed">
                {exercise.statement}
              </div>
            </div>
          </ExerciseBlock>
        ))}

      </div>
    </OteriaChapterTemplate>
  );
};

export default OteriaProbabilitesExercicesPage;
