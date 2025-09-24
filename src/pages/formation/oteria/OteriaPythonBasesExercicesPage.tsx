import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Home,
  ChevronRight,
  ArrowLeft,
  BookOpen,
  Target,
  Zap,
  Code,
  Calculator,
  CheckCircle,
  XCircle,
  Eye,
  EyeOff
} from 'lucide-react';

const OteriaPythonBasesExercicesPage = () => {
  const [showSolutions, setShowSolutions] = useState<{ [key: number]: boolean }>({});

  const toggleSolution = (exerciseId: number) => {
    setShowSolutions(prev => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }));
  };

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

print(f"Nom: {nom}")
print(f"Âge: {age} ans")
print(f"Taille: {taille} m")`
    },
    {
      id: 2,
      title: "Opérateurs mathématiques",
      difficulty: "Facile",
      description: "Calculez et affichez le résultat de l'expression : (2 + 3) * 4 - 6 / 2",
      solution: `# Exercice 2 : Opérateurs mathématiques
resultat = (2 + 3) * 4 - 6 / 2
print(f"Le résultat est : {resultat}")
print(f"Vérification : {2+3} * 4 = {5*4} = {20}")
print(f"20 - 6/2 = 20 - {6/2} = {20-3} = 17")`
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

print(f"n = {n}, m = {m}")
print(f"Quotient : {quotient}")
print(f"Reste : {reste}")
print(f"Vérification : {quotient} * {m} + {reste} = {quotient*m + reste}")`
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

print(f"Nombres pairs : {pairs}")
print(f"Carrés : {carres}")
print(f"Nombres impairs : {impairs}")`
    },
    {
      id: 5,
      title: "Manipulation de listes",
      difficulty: "Moyen",
      description: "À partir de la liste L = [1, 2, 3, 4, 5], ajoutez 6 à la fin, supprimez 3, et affichez le premier et dernier élément.",
      solution: `# Exercice 5 : Manipulation de listes
L = [1, 2, 3, 4, 5]

print(f"Liste initiale : {L}")

# Ajouter 6 à la fin
L.append(6)
print(f"Après ajout de 6 : {L}")

# Supprimer 3
L.remove(3)
print(f"Après suppression de 3 : {L}")

# Afficher premier et dernier
print(f"Premier élément : {L[0]}")
print(f"Dernier élément : {L[-1]}")
print(f"Longueur : {len(L)}")`
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
    print(f"{i:6} | {i**2:5}")`
    },
    {
      id: 7,
      title: "Condition if-else",
      difficulty: "Facile",
      description: "Écrivez un script qui demande un nombre à l'utilisateur et indique s'il est pair ou impair.",
      solution: `# Exercice 7 : Condition if-else
n = int(input("Entrez un nombre : "))

if n % 2 == 0:
    print(f"{n} est pair")
else:
    print(f"{n} est impair")`
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

print(f"Le plus petit n est : {n}")
print(f"Somme : {somme}")
print(f"Vérification : somme de 1 à {n} = {n*(n+1)//2}")`
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
print(f"Factorielle de 5 : {factorielle(5)}")
print(f"Factorielle de 7 : {factorielle(7)}")
print(f"Factorielle de 0 : {factorielle(0)}")`
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

print(f"Nombres générés : {nombres}")
print(f"Somme : {somme}")
print(f"Moyenne : {moyenne:.2f}")`
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
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
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
            <span className="text-teal-600 font-medium">Chapitre 2 - Exercices</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <Calculator className="h-8 w-8 text-teal-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-teal-900">Chapitre 2 : Exercices - Bases de Python</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Mettez en pratique les concepts Python avec ces exercices progressifs
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
                  <span className="text-sm text-blue-600 font-medium mb-1">Nombre d'exercices</span>
                  <span className="text-2xl font-bold text-blue-900">16</span>
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
            <Link to="/formation/oteria/python-bases-cours">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <BookOpen className="h-4 w-4" />
                Cours
              </button>
            </Link>
            <Link to="/formation/oteria/python-bases-flashcards">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <Target className="h-4 w-4" />
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

        {/* Liste des exercices */}
        <div className="max-w-4xl mx-auto">
          {exercises.map((exercise) => (
            <Card key={exercise.id} className="mb-6 border border-blue-200 shadow-lg">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                      Exercice {exercise.id} : {exercise.title}
                    </h3>
                    <Badge
                      className={`${
                        exercise.difficulty === 'Facile' ? 'bg-green-100 text-green-800' :
                        exercise.difficulty === 'Moyen' ? 'bg-yellow-100 text-yellow-800' :
                        'bg-red-100 text-red-800'
                      }`}
                    >
                      {exercise.difficulty}
                    </Badge>
                  </div>
                  <Button
                    onClick={() => toggleSolution(exercise.id)}
                    variant="outline"
                    className="flex items-center gap-2"
                  >
                    {showSolutions[exercise.id] ? (
                      <>
                        <EyeOff className="h-4 w-4" />
                        Masquer
                      </>
                    ) : (
                      <>
                        <Eye className="h-4 w-4" />
                        Solution
                      </>
                    )}
                  </Button>
                </div>

                <div className="mb-4">
                  <p className="text-gray-800 leading-relaxed">{exercise.description}</p>
                </div>

                {showSolutions[exercise.id] && (
                  <div className="mt-4 pt-4 border-t border-gray-200">
                    <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                      <CheckCircle className="h-5 w-5" />
                      Solution proposée :
                    </h4>
                    <div className="bg-gray-50 p-4 rounded-lg border-l-4 border-green-500">
                      <pre className="text-sm text-gray-800 overflow-x-auto whitespace-pre-wrap">
                        {exercise.solution}
                      </pre>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Section méthodologie */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-teal-50 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Méthodologie de résolution</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-blue-800">Plan de résolution :</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• <strong>Lire attentivement</strong> l'énoncé</li>
                    <li>• <strong>Identifier</strong> les variables nécessaires</li>
                    <li>• <strong>Choisir</strong> la structure appropriée (boucle, condition)</li>
                    <li>• <strong>Tester</strong> avec des valeurs simples</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-blue-800">Erreurs fréquentes :</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Oublier l'indentation (4 espaces)</li>
                    <li>• Confusion entre = et ==</li>
                    <li>• Indices de listes commençant à 0</li>
                    <li>• Types incompatibles dans les opérations</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation finale */}
        <div className="flex justify-between items-center bg-blue-50 p-6 rounded-lg mt-8">
          <Link to="/formation/oteria/logique-fondamentale-exercices">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              ← Chapitre 1
            </button>
          </Link>
          <div className="flex gap-3">
            <Link to="/formation/oteria/python-bases-cours">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <BookOpen className="h-4 w-4" />
                Cours
              </button>
            </Link>
            <Link to="/formation/oteria/python-bases-flashcards">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <Target className="h-4 w-4" />
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
  );
};

export default OteriaPythonBasesExercicesPage;
