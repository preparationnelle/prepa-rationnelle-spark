import React from 'react';
import { OteriaChapterTemplate } from '@/components/formation/OteriaChapterTemplate';
import {
  ExerciseBlock,
  CodeBlock,
  WarningBlock
} from '@/components/formation/AcademicBlocks';
import { Badge } from "@/components/ui/badge";

const OteriaPythonBasesExercicesPage = () => {
  const exercises = [
    {
      id: 1,
      title: "Types et variables",
      difficulty: "Facile",
      description: "Créez un script qui déclare trois variables de types différents (int, float, str) et les affiche.",
      solution: `# Exercice 1 : Types et variables
age = 25              # int
taille = 1.75         # float
nom = "Alice"         # str

print("Nom:", nom)
print("Âge:", age, "ans")
print("Taille:", taille, "m")`
    },
    {
      id: 2,
      title: "Opérateurs mathématiques",
      difficulty: "Facile",
      description: "Calculez et affichez le résultat de l'expression : (2 + 3) * 4 - 6 / 2",
      solution: `# Exercice 2 : Opérateurs mathématiques
resultat = (2 + 3) * 4 - 6 / 2
print("Le résultat est :", resultat)`
    },
    {
      id: 3,
      title: "Modulo et division entière",
      difficulty: "Facile",
      description: "Pour n = 17 et m = 6, calculez et affichez : quotient, reste, et vérifiez que n = quotient * m + reste",
      solution: `# Exercice 3 : Modulo et division entière
n = 17
m = 6

quotient = n // m    # Division entière
reste = n % m        # Modulo

print("n =", n, ", m =", m)
print("Quotient :", quotient)
print("Reste :", reste)
print("Vérification :", quotient, "*", m, "+", reste, "=", quotient*m + reste)`
    },
    {
      id: 4,
      title: "Création de listes",
      difficulty: "Moyen",
      description: "Créez trois listes différentes : une liste de nombres pairs de 0 à 10, une liste de carrés de 0 à 5, et une liste vide que vous remplirez avec une boucle.",
      solution: `# Exercice 4 : Création de listes
# Liste des nombres pairs de 0 à 10
pairs = [0, 2, 4, 6, 8, 10]
# ou avec une compréhension de liste
pairs = [x for x in range(0, 11, 2)]

# Liste des carrés de 0 à 5
carres = [x**2 for x in range(6)]

# Liste vide remplie avec une boucle
impairs = []
for i in range(1, 11, 2):
    impairs.append(i)

print("Nombres pairs :", pairs)
print("Carrés :", carres)
print("Nombres impairs :", impairs)`
    },
    {
      id: 5,
      title: "Manipulation de listes",
      difficulty: "Moyen",
      description: "À partir de la liste L = [1, 2, 3, 4, 5], ajoutez 6 à la fin, supprimez 3, et affichez le premier et dernier élément.",
      solution: `# Exercice 5 : Manipulation de listes
L = [1, 2, 3, 4, 5]

print("Liste initiale :", L)

# Ajouter 6 à la fin
L.append(6)
print("Après ajout de 6 :", L)

# Supprimer 3
L.remove(3)
print("Après suppression de 3 :", L)

# Afficher premier et dernier
print("Premier élément :", L[0])
print("Dernier élément :", L[-1])
print("Longueur :", len(L))`
    },
    {
      id: 6,
      title: "Boucle for simple",
      difficulty: "Facile",
      description: "Utilisez une boucle for pour afficher les nombres de 1 à 10 et leur carré.",
      solution: `# Exercice 6 : Boucle for simple
print("Nombre | Carré")
print("-" * 15)
for i in range(1, 11):
    print(i, "|", i**2)`
    },
    {
      id: 7,
      title: "Condition if-else",
      difficulty: "Facile",
      description: "Écrivez un script qui demande un nombre à l'utilisateur et indique s'il est pair ou impair.",
      solution: `# Exercice 7 : Condition if-else
n = int(input("Entrez un nombre : "))

if n % 2 == 0:
    print(n, "est pair")
else:
    print(n, "est impair")`
    },
    {
      id: 8,
      title: "Boucle while",
      difficulty: "Moyen",
      description: "Trouvez le plus petit nombre n tel que la somme des nombres de 1 à n dépasse 100.",
      solution: `# Exercice 8 : Boucle while
somme = 0
n = 0

while somme <= 100:
    n += 1
    somme += n

print("Le plus petit n est :", n)
print("Somme :", somme)
print("Vérification : somme de 1 à", n, "=", n*(n+1)//2)`
    },
    {
      id: 9,
      title: "Création de fonction",
      difficulty: "Moyen",
      description: "Créez une fonction qui calcule la factorielle d'un nombre n.",
      solution: `# Exercice 9 : Création de fonction
def factorielle(n):
    if n == 0 or n == 1:
        return 1
    else:
        resultat = 1
        for i in range(2, n + 1):
            resultat *= i
        return resultat

# Test de la fonction
print("Factorielle de 5 :", factorielle(5))
print("Factorielle de 7 :", factorielle(7))
print("Factorielle de 0 :", factorielle(0))`
    },
    {
      id: 10,
      title: "Utilisation de librairies",
      difficulty: "Moyen",
      description: "Utilisez les librairies random et math pour générer 5 nombres aléatoires entre 1 et 100 et calculer leur moyenne.",
      solution: `# Exercice 10 : Utilisation de librairies
import random as rd
import math

# Générer 5 nombres aléatoires
nombres = []
for i in range(5):
    nombres.append(rd.randint(1, 100))

# Calculer la moyenne
somme = sum(nombres)
moyenne = somme / len(nombres)

print("Nombres générés :", nombres)
print("Somme :", somme)
print("Moyenne :", round(moyenne, 2))`
    },
    {
      id: 11,
      title: "Résolution d'équation du 2ᵉ degré",
      difficulty: "Moyen",
      description: "Résoudre ax² + bx + c = 0 en utilisant le discriminant.",
      solution: `# Exercice 11 : Résolution d'équation du 2ᵉ degré
import math

a = float(input("a = "))
b = float(input("b = "))
c = float(input("c = "))

delta = b**2 - 4*a*c

if delta < 0:
    print("Pas de solution réelle")
elif delta == 0:
    x = -b / (2*a)
    print("Solution unique :", x)
else:
    x1 = (-b - math.sqrt(delta)) / (2*a)
    x2 = (-b + math.sqrt(delta)) / (2*a)
    print("Deux solutions :", x1, "et", x2)`
    },
    {
      id: 12,
      title: "Suite de Fibonacci",
      difficulty: "Facile",
      description: "Afficher les n premiers termes de la suite de Fibonacci : 0, 1, 1, 2, 3, 5, 8…",
      solution: `# Exercice 12 : Suite de Fibonacci
n = int(input("Combien de termes de Fibonacci ? "))

a, b = 0, 1
for _ in range(n):
    print(a, end=" ")
    a, b = b, a + b`
    },
    {
      id: 13,
      title: "Pair ou impair",
      difficulty: "Facile",
      description: "Demande un entier et affiche s'il est pair ou impair.",
      solution: `# Exercice 13 : Pair ou impair
n = int(input("Entrez un nombre : "))

if n % 2 == 0:
    print("Pair")
else:
    print("Impair")`
    },
    {
      id: 14,
      title: "Jeu du nombre secret",
      difficulty: "Moyen",
      description: "L'ordinateur choisit un nombre entre 1 et 20. L'utilisateur doit le deviner.",
      solution: `# Exercice 14 : Jeu du nombre secret
import random

secret = random.randint(1, 20)
trouve = False

while not trouve:
    guess = int(input("Devine le nombre (1-20) : "))
    if guess < secret:
        print("Trop petit !")
    elif guess > secret:
        print("Trop grand !")
    else:
        print("Bravo, tu as trouvé !")
        trouve = True`
    },
    {
      id: 15,
      title: "Table de multiplication",
      difficulty: "Facile",
      description: "Demande un nombre n et affiche sa table de 1 à 10.",
      solution: `# Exercice 15 : Table de multiplication
n = int(input("Entrez un nombre : "))

for i in range(1, 11):
    print(n, "x", i, "=", n * i)`
    },
    {
      id: 16,
      title: "Maximum de deux nombres",
      difficulty: "Facile",
      description: "Demande deux entiers et affiche le plus grand.",
      solution: `# Exercice 16 : Maximum de deux nombres
x = int(input("Premier nombre : "))
y = int(input("Deuxième nombre : "))

if x > y:
    print("Le plus grand est", x)
else:
    print("Le plus grand est", y)`
    }
  ];

  return (
    <OteriaChapterTemplate
      sessionNumber={2}
      sessionTitle="Bases de Python & Algorithmique"
      description="Mettez en pratique les concepts Python avec ces exercices progressifs"
      slug="python-bases"
      activeSection="exercises"
      duration="4h"
      level="Débutant"
    >
      <div className="space-y-8 max-w-none text-slate-700">

        {/* ─── OBJECTIFS ────────────────────────────────────────────── */}
        <div className="bg-slate-50 border border-slate-100 rounded-lg p-6 mb-8">
          <h2 className="text-lg font-bold text-slate-900 mb-4">Objectifs de la séance</h2>
          <ul className="list-disc list-inside space-y-2 text-sm text-slate-700">
            <li>Manipuler les variables et les types (int, float, bool, str)</li>
            <li>Utiliser les structures de contrôle (if/else, boucles for/while)</li>
            <li>Manipuler les listes et leurs méthodes principales</li>
            <li>Définir et utiliser des fonctions simples</li>
            <li>Importer et utiliser des modules (math, random)</li>
          </ul>
        </div>

        {/* ─── LISTE DES EXERCICES ──────────────────────────────────── */}
        {exercises.map((exercise) => (
          <ExerciseBlock
            key={exercise.id}
            number={exercise.id.toString()}
            title={exercise.title}
            solution={
              <CodeBlock
                code={exercise.solution}
                title={`Solution : ${exercise.title}`}
                language="python"
              />
            }
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
              <p className="text-slate-700 leading-relaxed">{exercise.description}</p>
            </div>
          </ExerciseBlock>
        ))}

        {/* ─── WARNINGS ─────────────────────────────────────────────── */}
        <WarningBlock title="Erreurs fréquentes à éviter">
          <ul className="list-none space-y-3">
            <li className="flex gap-2">
              <span className="text-red-500 font-bold">×</span>
              <span>
                Oublier l'indentation (4 espaces) qui définit les blocs de code en Python.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-500 font-bold">×</span>
              <span>
                Confondre l'opérateur d'affectation <code>=</code> avec l'opérateur de comparaison <code>==</code>.
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-500 font-bold">×</span>
              <span>
                Oublier que les indices de liste commencent à 0 (le premier élément est <code>L[0]</code>).
              </span>
            </li>
            <li className="flex gap-2">
              <span className="text-red-500 font-bold">×</span>
              <span>
                Tenter d'additionner des types incompatibles (ex: <code>"Age: " + 18</code> donne une erreur, il faut convertir : <code>"Age: " + str(18)</code>).
              </span>
            </li>
          </ul>
        </WarningBlock>

      </div>
    </OteriaChapterTemplate>
  );
};

export default OteriaPythonBasesExercicesPage;
