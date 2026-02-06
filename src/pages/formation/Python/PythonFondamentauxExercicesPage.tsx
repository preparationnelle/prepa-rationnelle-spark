import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calculator, Target, Play, Code, BookOpen, ChevronDown, ChevronUp, ChevronLeft, HelpCircle, CheckCircle, Star } from 'lucide-react';
import PythonModuleLayout from '@/components/formation/PythonModuleLayout';
import ModuleNavigationCards from '@/components/formation/ModuleNavigationCards';
import { LatexRenderer } from '@/components/LatexRenderer';
import { usePythonProgress } from '@/hooks/usePythonProgress';
import PythonCodeEditor, { EvaluationResult } from '@/components/python/PythonCodeEditor';
import CodeEvaluationResult from '@/components/python/CodeEvaluationResult';

const PythonFondamentauxExercicesPage = () => {
  const [searchParams] = useSearchParams();
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);
  const [showCorrections, setShowCorrections] = useState<Set<number>>(new Set());
  const [showQCM, setShowQCM] = useState(false);

  // Progress tracking
  const { markExerciseAsSeen, markAsComplete, isExerciseSeen } = usePythonProgress();
  const moduleId = 0; // Module 0 = Fondamentaux

  // États pour le QCM d'évaluation
  const [qcmAnswers, setQcmAnswers] = useState<{ [key: number]: string }>({});
  const [qcmSubmitted, setQcmSubmitted] = useState(false);
  const [qcmScore, setQcmScore] = useState<number | null>(null);

  // Evaluation state for code submissions
  const [evaluationResults, setEvaluationResults] = useState<{ [key: number]: EvaluationResult }>({});

  // Détecter le paramètre quiz dans l'URL
  useEffect(() => {
    const quizParam = searchParams.get('quiz');
    if (quizParam === 'true') {
      setShowQCM(true);
    }
  }, [searchParams]);

  // Fonction pour gérer les réponses du QCM
  const handleQCMAnswer = (questionId: number, answer: string) => {
    setQcmAnswers(prev => ({
      ...prev,
      [questionId]: answer
    }));
  };

  // Fonction pour soumettre le QCM et calculer la note
  const submitQCM = () => {
    let correctAnswers = 0;
    qcmQuestions.forEach(question => {
      if (qcmAnswers[question.id] === question.answer) {
        correctAnswers++;
      }
    });
    const score = (correctAnswers / qcmQuestions.length) * 20;
    setQcmScore(score);
    setQcmSubmitted(true);

    // Mark quiz as complete with score
    markAsComplete(`python-${moduleId}-qcm`, score);
  };

  // Fonction pour recommencer le QCM
  const restartQCM = () => {
    setQcmAnswers({});
    setQcmSubmitted(false);
    setQcmScore(null);
  };

  const toggleCorrection = (exerciseIndex: number) => {
    const newShowCorrections = new Set(showCorrections);
    if (newShowCorrections.has(exerciseIndex)) {
      newShowCorrections.delete(exerciseIndex);
    } else {
      newShowCorrections.add(exerciseIndex);
      // Mark exercise as seen when showing correction (1-indexed)
      const exerciseId = `python-${moduleId}-exo-${exerciseIndex + 1}`;
      markExerciseAsSeen(exerciseId);
    }
    setShowCorrections(newShowCorrections);
  };

  const handleNavigate = (exerciseId: number) => {
    const exerciseExists = exercises.some(ex => ex.id === exerciseId);
    if (exerciseExists) {
      setSelectedExercise(exerciseId);
      window.scrollTo(0, 0);
    }
  };

  const qcmQuestions = [
    {
      id: 1,
      question: "Quel est le résultat de l'expression 3 + 4 * 2 en Python ?",
      options: ["A) 14", "B) 11", "C) 7", "D) Erreur"],
      answer: "B) 11",
      explanation: "En Python, la multiplication (*) a une priorité plus élevée que l'addition (+). Donc Python calcule d'abord 4 * 2 = 8, puis 3 + 8 = 11."
    },
    {
      id: 2,
      question: "Quelle est la syntaxe correcte pour définir une fonction en Python ?",
      options: ["A) function ma_fonction():", "B) def ma_fonction():", "C) func ma_fonction():", "D) define ma_fonction():"],
      answer: "B) def ma_fonction():",
      explanation: "Le mot-clé 'def' (definition) est utilisé pour définir une fonction en Python, suivi du nom de la fonction et de parenthèses."
    },
    {
      id: 3,
      question: "Quel type de données est retourné par l'expression 5 / 2 en Python 3 ?",
      options: ["A) int", "B) float", "C) str", "D) bool"],
      answer: "B) float",
      explanation: "En Python 3, l'opérateur / effectue toujours une division flottante, même avec des entiers. Le résultat de 5 / 2 est 2.5 (float). Pour une division entière, utilisez // qui donnerait 2."
    },
    {
      id: 4,
      question: "Quelle méthode permet d'ajouter un élément à une liste en Python ?",
      options: ["A) list.add()", "B) list.append()", "C) list.insert()", "D) list.push()"],
      answer: "B) list.append()",
      explanation: "La méthode append() ajoute un élément à la fin d'une liste. Exemple : ma_liste.append(5). Note : insert() permet d'insérer à une position spécifique."
    },
    {
      id: 5,
      question: "Quel mot-clé est utilisé pour créer une boucle conditionnelle en Python ?",
      options: ["A) for", "B) while", "C) loop", "D) repeat"],
      answer: "B) while",
      explanation: "Le mot-clé 'while' crée une boucle qui continue tant qu'une condition est vraie. 'for' est utilisé pour itérer sur une séquence, tandis que 'loop' et 'repeat' n'existent pas en Python."
    },
    {
      id: 6,
      question: "Quelle est la valeur de vérité de l'expression 5 > 3 and 2 < 4 ?",
      options: ["A) True", "B) False", "C) None", "D) Erreur"],
      answer: "A) True",
      explanation: "L'opérateur 'and' retourne True seulement si les deux conditions sont vraies. Ici, 5 > 3 est True ET 2 < 4 est True, donc le résultat final est True."
    },
    {
      id: 7,
      question: "Comment accéder au premier élément d'une liste nommée 'ma_liste' ?",
      options: ["A) ma_liste[0]", "B) ma_liste[1]", "C) ma_liste.first()", "D) ma_liste.get(1)"],
      answer: "A) ma_liste[0]",
      explanation: "En Python, l'indexation commence à 0. Le premier élément est donc accessible avec l'indice 0 : ma_liste[0]."
    },
    {
      id: 8,
      question: "Quel opérateur est utilisé pour la comparaison d'égalité en Python ?",
      options: ["A) =", "B) ==", "C) ===", "D) equals"],
      answer: "B) ==",
      explanation: "L'opérateur == teste l'égalité entre deux valeurs. Ne pas confondre avec = qui est utilisé pour l'affectation (assigner une valeur à une variable)."
    },
    {
      id: 9,
      question: "Quelle fonction permet de convertir une chaîne de caractères en entier ?",
      options: ["A) str()", "B) int()", "C) float()", "D) bool()"],
      answer: "B) int()",
      explanation: "La fonction int() convertit une valeur en entier. Exemple : int('42') retourne 42. Attention : int('3.14') produit une erreur, utilisez float() d'abord."
    },
    {
      id: 10,
      question: "Quel est le résultat de len([1, 2, 3, 4, 5]) ?",
      options: ["A) 4", "B) 5", "C) 6", "D) Erreur"],
      answer: "B) 5",
      explanation: "La fonction len() retourne le nombre d'éléments dans une liste. Cette liste contient 5 éléments : 1, 2, 3, 4 et 5."
    },
    {
      id: 11,
      question: "Quelle structure permet de répéter un bloc de code un nombre défini de fois ?",
      options: ["A) if", "B) while", "C) for", "D) repeat"],
      answer: "C) for",
      explanation: "La boucle 'for' est utilisée pour itérer un nombre défini de fois, souvent avec range(). Exemple : for i in range(5): répète 5 fois."
    },
    {
      id: 12,
      question: "Quel symbole est utilisé pour les commentaires en Python ?",
      options: ["A) //", "B) /* */", "C) #", "D) --"],
      answer: "C) #",
      explanation: "Le symbole # crée un commentaire sur une seule ligne. Tout ce qui suit # sur la même ligne est ignoré par Python. Pour les commentaires multi-lignes, on utilise trois guillemets '''."
    },
    {
      id: 13,
      question: "Quelle méthode permet de supprimer le dernier élément d'une liste ?",
      options: ["A) list.remove()", "B) list.pop()", "C) list.delete()", "D) list.clear()"],
      answer: "B) list.pop()",
      explanation: "La méthode pop() supprime et retourne le dernier élément d'une liste (ou l'élément à l'indice spécifié). remove() supprime la première occurrence d'une valeur spécifique."
    },
    {
      id: 14,
      question: "Quel est le résultat de 'Hello' + ' World' en Python ?",
      options: ["A) 'Hello World'", "B) 'HelloWorld'", "C) Erreur", "D) None"],
      answer: "B) 'HelloWorld'",
      explanation: "L'opérateur + concatène (colle) deux chaînes de caractères. Attention : il n'y a PAS d'espace dans 'Hello', donc le résultat est 'HelloWorld' sans espace au milieu."
    },
    {
      id: 15,
      question: "Quelle fonction permet d'obtenir la longueur d'une chaîne de caractères ?",
      options: ["A) size()", "B) length()", "C) len()", "D) count()"],
      answer: "C) len()",
      explanation: "La fonction len() retourne la longueur (nombre de caractères) d'une chaîne. Exemple : len('Hello') retourne 5."
    },
    {
      id: 16,
      question: "Quel mot-clé est utilisé pour définir une condition en Python ?",
      options: ["A) when", "B) if", "C) case", "D) switch"],
      answer: "B) if",
      explanation: "Le mot-clé 'if' permet de créer une condition. Exemple : if x > 0: print('positif'). On peut ajouter 'elif' et 'else' pour des conditions multiples."
    },
    {
      id: 17,
      question: "Quelle est la valeur de bool(0) en Python ?",
      options: ["A) True", "B) False", "C) 0", "D) None"],
      answer: "B) False",
      explanation: "En Python, 0 est considéré comme False dans un contexte booléen. Tous les autres nombres (positifs ou négatifs) sont True. De même, une liste vide [] est False."
    },
    {
      id: 18,
      question: "Comment créer une liste vide en Python ?",
      options: ["A) list = empty", "B) list = []", "C) list = ()", "D) list = {}"],
      answer: "B) list = []",
      explanation: "Les crochets [] créent une liste vide. () crée un tuple vide et {} crée un dictionnaire vide. Ne pas utiliser 'list' comme nom de variable car c'est un mot réservé."
    },
    {
      id: 19,
      question: "Quel est le résultat de 10 % 3 en Python ?",
      options: ["A) 3", "B) 1", "C) 0", "D) 3.33"],
      answer: "B) 1",
      explanation: "L'opérateur % (modulo) retourne le reste de la division entière. 10 divisé par 3 donne 3 avec un reste de 1, donc 10 % 3 = 1."
    },
    {
      id: 20,
      question: "Quelle fonction permet d'afficher du texte en console ?",
      options: ["A) console.log()", "B) echo()", "C) print()", "D) display()"],
      answer: "C) print()",
      explanation: "La fonction print() affiche du texte dans la console. Exemple : print('Bonjour') affiche 'Bonjour'. C'est la fonction la plus utilisée pour déboguer en Python."
    }
  ];

  const exercises = [{
    id: 1,
    title: "Exercice 1 - Double somme avec division",
    difficulty: "Facile",
    description: "Calculer une double somme avec division. Maîtriser les boucles imbriquées.",
    color: "gray",
    content: {
      objective: "\\text{Calculer la somme : } \\sum_{k=1}^{n} \\sum_{i=1}^{k} \\frac{1}{k+i}",
      isLatex: true,
      code: `n = int(input("Entrer n : "))
S = 0
for k in range(1, n + 1):
    for i in range(1, k + 1):
        S += 1 / (k + i)
print("Somme :", S)`
    }
  }, {
    id: 2,
    title: "Exercice 2 - Produit double",
    difficulty: "Facile",
    description: "Calculer une somme de produits. Manipulation des boucles et variables.",
    color: "gray",
    content: {
      objective: "\\text{Calculer la somme : } \\sum_{k=1}^{n} \\sum_{i=1}^{p} k \\cdot i",
      isLatex: true,
      code: `n = int(input("Entrer n : "))
p = int(input("Entrer p : "))
S = 0
for k in range(1, n + 1):
    for i in range(1, p + 1):
        S += k * i
print("Somme :", S)`
    }
  }, {
    id: 3,
    title: "Exercice 3 - Somme exponentielle",
    difficulty: "Moyen",
    description: "Créer une fonction pour calculer une somme exponentielle.",
    color: "orange",
    content: {
      objective: "\\text{Calculer la somme : } \\sum_{k=1}^{n} \\frac{2^k}{k}",
      isLatex: true,
      code: `def somme_exponentielle(n):
    S = 0
    for k in range(1, n + 1):
        S += (2 ** k) / k
    return S

n = int(input("Entrer un entier n : "))
resultat = somme_exponentielle(n)
print("Somme =", resultat)`
    }
  }, {
    id: 4,
    title: "Exercice 4 - Matrices avec NumPy",
    difficulty: "Moyen",
    description: "Création et manipulation de matrices avec NumPy. Accès aux lignes et colonnes.",
    color: "orange",
    content: {
      objective: "\\text{Maîtriser la création et manipulation de matrices avec NumPy}",
      isLatex: true,
      enonce_complet: {
        titre: "Énoncé complet - Matrices avec NumPy",
        introduction: "Dans cet exercice, nous allons créer différents types de matrices avec NumPy et apprendre à les manipuler.",
        parties: [
          {
            numero: 1,
            titre: "Matrice avec colonnes remplies par leur indice",
            enonce_latex: "\\text{Créer une matrice carrée } B \\in M_n(\\mathbb{R}) \\text{ telle que la colonne } j \\text{ soit remplie de } j.",
            exemple_latex: "\\text{Pour } n=3, \\text{ on doit obtenir } B = \\begin{pmatrix} 1 & 2 & 3 \\\\ 1 & 2 & 3 \\\\ 1 & 2 & 3 \\end{pmatrix}"
          },
          {
            numero: 2,
            titre: "Matrice colonne contenant les carrés",
            enonce_latex: "\\text{Créer une matrice colonne } A \\in M_{n,1}(\\mathbb{R}) \\text{ contenant les carrés } 1^2, 2^2, \\ldots, n^2.",
            exemple_latex: "\\text{Pour } n=4, \\text{ on doit obtenir } A = \\begin{pmatrix} 1 \\\\ 4 \\\\ 9 \\\\ 16 \\end{pmatrix}"
          },
          {
            numero: 3,
            titre: "Matrice explicite donnée",
            enonce_latex: "\\text{Créer et afficher la matrice } M = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix}"
          },
          {
            numero: 4,
            titre: "Matrice 3×3 et accès aux éléments",
            enonce_latex: "\\text{Créer une matrice } C \\in M_3(\\mathbb{R}) \\text{ contenant les entiers de 1 à 9, puis afficher la première ligne et la deuxième colonne.}",
            exemple_latex: "C = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{pmatrix}"
          }
        ]
      },
      corrections: {
        partie1: {
          titre: "Correction Partie 1 - Matrice avec colonnes par indice",
          explication: "Pour créer une matrice où chaque colonne j est remplie de la valeur j, on utilise la diffusion (broadcasting) de NumPy.",
          code: `import numpy as np

n = int(input("Entrer n : "))
# Méthode 1 : avec ones et broadcasting
L = np.ones((n, n), dtype=int)
indices = np.arange(1, n + 1)
B = L * indices
print("Matrice B :")
print(B)

# Méthode 2 : plus directe avec tile
B2 = np.tile(np.arange(1, n + 1), (n, 1))
print("\\nVérification avec méthode 2 :")
print(B2)`,
          resultat_latex: "\\text{Résultat pour } n=3 : \\quad B = \\begin{pmatrix} 1 & 2 & 3 \\\\ 1 & 2 & 3 \\\\ 1 & 2 & 3 \\end{pmatrix}"
        },
        partie2: {
          titre: "Correction Partie 2 - Matrice colonne des carrés",
          explication: "On génère les carrés avec np.arange puis on redimensionne en matrice colonne avec reshape.",
          code: `import numpy as np

n = int(input("Entrer n : "))
# Génération des carrés de 1 à n
A = np.arange(1, n + 1)**2
# Transformation en matrice colonne
A = A.reshape(n, 1)
print("Matrice colonne A :")
print(A)

# Méthode alternative
A2 = np.array([[i**2] for i in range(1, n + 1)])
print("\\nVérification :")
print(A2)`,
          resultat_latex: "\\text{Résultat pour } n=4 : \\quad A = \\begin{pmatrix} 1 \\\\ 4 \\\\ 9 \\\\ 16 \\end{pmatrix}"
        },
        partie3: {
          titre: "Correction Partie 3 - Matrice explicite",
          explication: "Création directe d'une matrice avec np.array en spécifiant tous les éléments.",
          code: `import numpy as np

# Création directe de la matrice
M = np.array([[1, 2, 3], [4, 5, 6]])
print("Matrice M :")
print(M)

# Informations sur la matrice
print(f"\\nDimensions : {M.shape}")
print(f"Nombre d'éléments : {M.size}")
print(f"Type des éléments : {M.dtype}")`,
          resultat_latex: "\\text{Résultat : } \\quad M = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\end{pmatrix}"
        },
        partie4: {
          titre: "Correction Partie 4 - Accès aux lignes et colonnes",
          explication: "Création d'une matrice 3×3 et utilisation de l'indexation pour accéder aux lignes et colonnes.",
          code: `import numpy as np

# Création de la matrice 3×3
C = np.arange(1, 10).reshape(3, 3)
print("Matrice C :")
print(C)

# Accès à la première ligne (index 0)
print("\\nPremière ligne :", C[0])

# Accès à la deuxième colonne (index 1)
print("Deuxième colonne :", C[:, 1])

# Informations supplémentaires
print("\\nÉlément C[1,2] :", C[1, 2])  # Élément ligne 2, colonne 3`,
          resultat_latex: "\\text{Matrice } C = \\begin{pmatrix} 1 & 2 & 3 \\\\ 4 & 5 & 6 \\\\ 7 & 8 & 9 \\end{pmatrix}, \\quad \\text{Première ligne : } (1, 2, 3), \\quad \\text{Deuxième colonne : } \\begin{pmatrix} 2 \\\\ 5 \\\\ 8 \\end{pmatrix}"
        }
      }
    }
  }, {
    id: 5,
    title: "Exercice 5 - Coefficient binomial",
    difficulty: "Moyen",
    description: "Implémenter le calcul du coefficient binomial.",
    color: "orange",
    content: {
      objective: "\\text{Calculer le coefficient binomial } \\binom{n}{k}",
      isLatex: true,
      code: `def binomiale(n, k):
    if k > n:
        return 0
    result = 1
    for i in range(1, k + 1):
        result = result * (n - i + 1) / i
    return int(result)`
    }
  }, {
    id: 6,
    title: "Exercice 6 - Puissance d'un nombre",
    difficulty: "Facile",
    description: "Calculer la puissance d'un nombre réel.",
    color: "gray",
    content: {
      objective: "\\text{Calculer } a^p \\text{ pour un réel } a \\text{ et un entier } p",
      isLatex: true,
      code: `a = float(input("Valeur de a : "))
p = int(input("Valeur de p : "))
résultat = a ** p
print("a élevé à la puissance p =", résultat)`
    }
  }, {
    id: 7,
    title: "Exercice 7 - Factorielle et seuil",
    difficulty: "Moyen",
    description: "Trouver le plus petit k tel que k! > 10^6.",
    color: "orange",
    content: {
      objective: "\\text{Trouver le plus petit } k \\text{ tel que } k! > 10^6",
      isLatex: true,
      code: `k = 1
fact = 1
while fact <= 10**6:
    k += 1
    fact *= k
print(k)`
    }
  }, {
    id: 8,
    title: "Exercice 8 - Fonction définie par morceaux",
    difficulty: "Facile",
    description: "Implémenter une fonction définie par morceaux.",
    color: "gray",
    content: {
      objective: "\\text{Définir la fonction } g(x) \\text{ par morceaux}",
      isLatex: true,
      code: `x = float(input("Entrer un réel x : "))
if x < -1:
    print("g(x) =", 2)
elif x <= 1:
    print("g(x) =", 0)
else:
    print("g(x) =", -2)`
    }
  }, {
    id: 9,
    title: "Exercice 9 - Partie entière",
    difficulty: "Facile",
    description: "Comprendre le fonctionnement d'une boucle while avec un compteur",
    color: "gray",
    content: {
      objective: "Analyser le comportement d'un code utilisant une boucle while",
      exercices: [{
        titre: "Analyse de code",
        enonce: "Que fait le code suivant ?\n\nx = float(input(\"Entrez un réel positif\"))\nn = 0\nwhile n <= x - 1:\n    n += 1\nprint(n)",
        correction: `# Le code calcule la partie entière d'un nombre positif
x = float(input("Entrez un réel positif"))
n = 0
while n <= x - 1:
    n += 1
print(n)

# Explication :
# La boucle incrémente n jusqu'à ce qu'il atteigne la partie entière de x.
# Par exemple :
# - Pour x = 3.7, n va jusqu'à 3
# - Pour x = 5.2, n va jusqu'à 5
# - Pour x = 2.0, n va jusqu'à 2`
      }]
    }
  }, {
    id: 10,
    title: "Exercice 10 - Résolution d'équation du 2ᵉ degré",
    difficulty: "Moyen",
    description: "Résoudre ax² + bx + c = 0 en utilisant le discriminant.",
    color: "orange",
    content: {
      objective: "\\text{Résoudre l'équation } ax^2 + bx + c = 0 \\text{ en calculant le discriminant}",
      isLatex: true,
      code: `import math

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
    }
  }, {
    id: 11,
    title: "Exercice 11 - Suite de Fibonacci",
    difficulty: "Facile",
    description: "Afficher les n premiers termes de la suite de Fibonacci : 0, 1, 1, 2, 3, 5, 8…",
    color: "gray",
    content: {
      objective: "\\text{Afficher les } n \\text{ premiers termes de la suite de Fibonacci}",
      isLatex: true,
      code: `n = int(input("Combien de termes de Fibonacci ? "))

a, b = 0, 1
for _ in range(n):
    print(a, end=" ")
    a, b = b, a + b`
    }
  }, {
    id: 12,
    title: "Exercice 12 - Pair ou impair",
    difficulty: "Facile",
    description: "Demande un entier et affiche s'il est pair ou impair.",
    color: "gray",
    content: {
      objective: "\\text{Déterminer si un nombre entier est pair ou impair}",
      isLatex: true,
      code: `n = int(input("Entrez un nombre : "))

if n % 2 == 0:
    print("Pair")
else:
    print("Impair")`
    }
  }, {
    id: 13,
    title: "Exercice 13 - Jeu du nombre secret",
    difficulty: "Moyen",
    description: "L'ordinateur choisit un nombre entre 1 et 20. L'utilisateur doit le deviner.",
    color: "orange",
    content: {
      objective: "\\text{Créer un jeu de devinette avec un nombre aléatoire entre 1 et 20}",
      isLatex: true,
      code: `import random

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
    }
  }, {
    id: 14,
    title: "Exercice 14 - Table de multiplication",
    difficulty: "Facile",
    description: "Demande un nombre n et affiche sa table de 1 à 10.",
    color: "gray",
    content: {
      objective: "\\text{Afficher la table de multiplication d'un nombre de 1 à 10}",
      isLatex: true,
      code: `n = int(input("Entrez un nombre : "))

for i in range(1, 11):
    print(n, "x", i, "=", n * i)`
    }
  }, {
    id: 15,
    title: "Exercice 15 - Maximum de deux nombres",
    difficulty: "Facile",
    description: "Demande deux entiers et affiche le plus grand.",
    color: "gray",
    content: {
      objective: "\\text{Trouver le maximum entre deux nombres entiers}",
      isLatex: true,
      code: `x = int(input("Premier nombre : "))
y = int(input("Deuxième nombre : "))

if x > y:
    print("Le plus grand est", x)
else:
    print("Le plus grand est", y)`
    }
  }];

  if (selectedExercise) {
    return <PythonModuleLayout>
      <div className="mb-8">
        <Button variant="ghost" size="sm" className="flex items-center gap-2 mb-6 hover:bg-gray-100" onClick={() => setSelectedExercise(null)}>
          <ChevronLeft className="h-4 w-4" /> Retour aux exercices
        </Button>

        <div className="text-center max-w-3xl mx-auto mb-10">
          <Badge variant="outline" className="mb-4 bg-blue-50 text-blue-700 border-blue-200 px-3 py-1">
            {exercises[selectedExercise - 1].difficulty}
          </Badge>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
            {exercises[selectedExercise - 1].title.replace(/^Exercice \d+ - /, '')}
          </h1>
          <p className="text-lg text-gray-600">
            {exercises[selectedExercise - 1].description}
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto space-y-8">
        <Card className="border border-gray-200 bg-white shadow-sm overflow-hidden">
          <div className="border-b border-gray-100 bg-gray-50/50 px-6 py-4">
            <h2 className="text-lg font-semibold text-gray-800 flex items-center gap-2">
              <Target className="h-5 w-5 text-blue-600" />
              Objectif de l'exercice
            </h2>
          </div>
          <CardContent className="p-6 md:p-8">
            <div className="text-gray-700 text-lg leading-relaxed">
              {exercises[selectedExercise - 1].content.isLatex ? (
                <div className="flex justify-center my-4">
                  <LatexRenderer latex={exercises[selectedExercise - 1].content.objective} />
                </div>
              ) : (
                <p>{exercises[selectedExercise - 1].content.objective}</p>
              )}
            </div>
          </CardContent>
        </Card>

        {/* Code Editor Section */}
        <PythonCodeEditor
          exerciseStatement={exercises[selectedExercise - 1].content.objective}
          expectedSolution={exercises[selectedExercise - 1].content.code || ''}
          moduleId={String(moduleId)}
          exerciseId={String(selectedExercise)}
          onEvaluationComplete={(result) => {
            setEvaluationResults(prev => ({ ...prev, [selectedExercise]: result }));
            // Mark exercise as seen when evaluated
            markExerciseAsSeen(`python-${moduleId}-exo-${selectedExercise}`);
          }}
        />

        {/* Evaluation Result */}
        {evaluationResults[selectedExercise] && (
          <CodeEvaluationResult result={evaluationResults[selectedExercise]} />
        )}

        {exercises[selectedExercise - 1].content.enonce_complet && (
          <div className="space-y-6">
            {/* Énoncé complet */}
            <Card className="border border-gray-200 bg-white shadow-sm">
              <div className="border-b border-gray-100 bg-gray-50/50 px-6 py-4">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  {exercises[selectedExercise - 1].content.enonce_complet.titre}
                </h2>
              </div>
              <CardContent>
                <p className="text-gray-700 mb-6">{exercises[selectedExercise - 1].content.enonce_complet.introduction}</p>

                <div className="space-y-6">
                  {exercises[selectedExercise - 1].content.enonce_complet.parties.map((partie, index) => (
                    <div key={index} className="bg-white rounded-lg border border-gray-200 p-6">
                      <h4 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                        <span className="flex h-6 w-6 items-center justify-center rounded-full bg-blue-100 text-xs font-bold text-blue-700">
                          {partie.numero}
                        </span>
                        {partie.titre}
                      </h4>
                      <div className="mb-4 text-gray-700 pl-8">
                        <LatexRenderer latex={partie.enonce_latex} />
                      </div>
                      {partie.exemple_latex && (
                        <div className="mt-4 ml-8 p-4 bg-gray-50 rounded-lg border-l-4 border-blue-200">
                          <p className="text-xs text-gray-500 uppercase tracking-wider font-semibold mb-2">Exemple</p>
                          <LatexRenderer latex={partie.exemple_latex} />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Bouton pour afficher/masquer les corrections */}
            <div className="flex justify-center">
              <Button
                onClick={() => toggleCorrection(selectedExercise)}
                variant="outline"
                className="border-blue-300 text-blue-600 hover:bg-blue-50"
              >
                {showCorrections.has(selectedExercise) ? (
                  <>
                    <ChevronUp className="h-4 w-4 mr-2" />
                    Masquer les corrections
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-4 w-4 mr-2" />
                    Voir les corrections détaillées
                  </>
                )}
              </Button>
            </div>

            {/* Corrections (conditionnelles) */}
            {showCorrections.has(selectedExercise) && (
              <div className="mt-8 pt-8 border-t border-gray-200 animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="bg-blue-50/50 rounded-xl border border-blue-100 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="p-2 bg-green-100 text-green-700 rounded-lg">
                      <CheckCircle className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Corrections détaillées
                    </h3>
                  </div>

                  <div className="space-y-8">
                    {Object.entries(exercises[selectedExercise - 1].content.corrections).map(([key, correction], index) => (
                      <div key={key} className="space-y-4 bg-white p-6 rounded-xl border border-blue-100 shadow-sm">
                        <h4 className="text-lg font-semibold text-gray-900 border-b border-gray-100 pb-3">
                          {correction.titre}
                        </h4>

                        <p className="text-gray-700 leading-relaxed">{correction.explication}</p>

                        <div className="relative">
                          <div className="absolute top-0 right-0 p-2 text-xs text-blue-200 font-mono">Python</div>
                          <div className="bg-[#1e293b] text-blue-50 rounded-lg p-5 overflow-x-auto shadow-inner">
                            <pre className="text-sm font-mono">
                              <code>{correction.code}</code>
                            </pre>
                          </div>
                        </div>

                        <div className="bg-green-50 p-4 rounded-lg border border-green-100 flex gap-3 items-start">
                          <div className="mt-1 h-2 w-2 rounded-full bg-green-500 shrink-0" />
                          <div>
                            <p className="text-xs text-green-700 uppercase tracking-wider font-bold mb-1">Résultat attendu</p>
                            <LatexRenderer latex={correction.resultat_latex} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        )}

        {exercises[selectedExercise - 1].content.exercices && (
          <div className="space-y-6">
            {exercises[selectedExercise - 1].content.exercices.map((exercice, index) => (
              <div key={index} className="space-y-4">
                {/* Énoncé */}
                <Card className="border-2 border-blue-300 bg-blue-50/50 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-blue-800">
                      <BookOpen className="h-6 w-6 text-blue-700" />
                      {exercice.titre}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-blue-800">
                      {(exercice as any).enonce_latex ? (
                        <div>
                          <LatexRenderer latex={(exercice as any).enonce_latex} />
                          {(exercice as any).exemple && (
                            <p className="mt-3 text-sm whitespace-pre-line">{(exercice as any).exemple}</p>
                          )}
                        </div>
                      ) : (
                        <p className="whitespace-pre-line">{exercice.enonce}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Bouton pour afficher/masquer la correction */}
                <div className="flex justify-center">
                  <Button
                    variant="ghost"
                    onClick={() => toggleCorrection(index + 100)} // Offset pour éviter les conflits avec les exercices principaux
                    className="group flex items-center gap-2 text-blue-600 hover:text-blue-700 hover:bg-blue-50 transition-all font-medium"
                  >
                    {showCorrections.has(index + 100) ? (
                      <>
                        <ChevronUp className="h-4 w-4" />
                        Masquer la correction
                      </>
                    ) : (
                      <>
                        <ChevronDown className="h-4 w-4 group-hover:translate-y-0.5 transition-transform" />
                        Voir la correction
                      </>
                    )}
                  </Button>
                </div>

                {/* Correction (affichée conditionnellement) */}
                {showCorrections.has(index + 100) && (
                  <div className="bg-gray-900 text-gray-100 rounded-xl p-6 overflow-x-auto shadow-inner animate-in fade-in slide-in-from-top-2">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-mono text-gray-400">SOLUTION PYTHON</span>
                    </div>
                    <pre className="text-sm font-mono">
                      <code>{exercice.correction}</code>
                    </pre>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {!exercises[selectedExercise - 1].content.exercices && !exercises[selectedExercise - 1].content.enonce_complet && (
          <div className="space-y-4">
            {/* Bouton pour afficher/masquer la correction */}
            <div className="flex justify-center pt-4">
              <Button
                onClick={() => toggleCorrection(selectedExercise)}
                className={`
                relative overflow-hidden transition-all duration-300 px-8 py-6 h-auto text-lg rounded-xl shadow-md
                ${showCorrections.has(selectedExercise)
                    ? 'bg-gray-100 text-gray-700 hover:bg-gray-200 border border-gray-200'
                    : 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:shadow-lg hover:scale-105'
                  }
              `}
              >
                {showCorrections.has(selectedExercise) ? (
                  <span className="flex items-center gap-2">
                    <ChevronUp className="h-5 w-5" />
                    Masquer la correction
                  </span>
                ) : (
                  <span className="flex items-center gap-2 font-semibold">
                    <span className="flex items-center justify-center p-1 bg-white/20 rounded-full">
                      <ChevronDown className="h-4 w-4" />
                    </span>
                    Voir la correction & Explications
                  </span>
                )}
              </Button>
            </div>

            {/* Correction (conditionnelle) */}
            {showCorrections.has(selectedExercise) && (
              <div className="animate-in fade-in slide-in-from-top-6 duration-500 mt-8">
                <div className="bg-white rounded-2xl border border-gray-200 shadow-xl overflow-hidden">
                  <div className="bg-gray-50/50 p-4 border-b border-gray-100 flex items-center gap-3">
                    <div className="p-2 bg-green-100 text-green-700 rounded-lg">
                      <Code className="h-5 w-5" />
                    </div>
                    <h3 className="font-bold text-gray-800">Solution Python</h3>
                  </div>

                  <div className="p-0">
                    <div className="bg-[#1e293b] text-blue-50 p-6 md:p-8 overflow-x-auto">
                      <pre className="font-mono text-sm leading-relaxed text-blue-50">
                        <code>{exercises[selectedExercise - 1].content.code}</code>
                      </pre>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <ModuleNavigationCards
        currentModule={{
          id: 0,
          title: "Fondamentaux",
          slug: "fondamentaux",
          color: "gray"
        }}
        isExercisePage={true}
        totalExercises={exercises.length}
        currentExerciseId={selectedExercise}
        onNavigate={handleNavigate}
      />
    </PythonModuleLayout>;
  }

  return (
    <PythonModuleLayout>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent mb-4">
          Module 0 : Exercices - Fondamentaux
        </h1>
        <p className="text-xl text-blue-600">
          Exercices pratiques sur les bases de Python
        </p>
      </div>


      {!showQCM && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {exercises.map(exercise => (
            <Card
              key={exercise.id}
              className="group relative cursor-pointer bg-white rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-gray-100 hover:border-blue-100 hover:-translate-y-1 h-full flex flex-col overflow-hidden"
              onClick={() => setSelectedExercise(exercise.id)}
            >
              <CardHeader className="flex-shrink-0 pb-2">
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 text-gray-400">
                    <Calculator className="h-6 w-6" />
                  </div>
                  <Badge variant="secondary" className="bg-gray-50 text-gray-600 border border-gray-100 font-medium px-3 py-1 rounded-full">
                    {exercise.difficulty}
                  </Badge>
                </div>
                <div>
                  <div className="text-xs font-bold tracking-wider text-blue-600 uppercase mb-1 opacity-80">
                    Exercice {exercise.id}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition-colors leading-tight">
                    {exercise.title.includes(' - ') ? exercise.title.split(' - ').slice(1).join(' - ') : exercise.title}
                  </h3>
                </div>
              </CardHeader>

              <CardContent className="flex-grow flex flex-col pt-0">
                <p className="text-gray-500 text-sm leading-relaxed mb-6 mt-2 flex-grow line-clamp-3">
                  {exercise.description}
                </p>
                <div className="mt-auto">
                  <Button className="w-full h-11 bg-gray-50 text-gray-900 border border-gray-200 hover:bg-blue-600 hover:text-white hover:border-transparent rounded-xl font-semibold transition-all duration-300 flex items-center justify-between px-4 group-hover:shadow-lg group-hover:shadow-blue-500/20">
                    <span>Commencer</span>
                    <Play className="h-4 w-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}

      {/* Section QCM */}
      {showQCM && (
        <>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center gap-2 mb-6"
            onClick={() => {
              setShowQCM(false);
              setQcmSubmitted(false);
              setQcmAnswers({});
              setQcmScore(null);
            }}
          >
            <ChevronLeft className="h-4 w-4" />
            Retour aux exercices
          </Button>

          <Card className="mb-8 border-none bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[24px] overflow-hidden">
            <CardHeader className="bg-gradient-to-r from-blue-50/50 to-white px-8 py-6 border-b border-blue-50">
              <CardTitle className="flex items-center gap-3 text-blue-900 text-xl">
                <div className="p-2 bg-blue-100 rounded-lg text-blue-600">
                  <HelpCircle className="h-6 w-6" />
                </div>
                QCM d'évaluation - Testez vos connaissances
              </CardTitle>
            </CardHeader>
            <CardContent className="p-8">
              {!qcmSubmitted ? (
                <div className="space-y-8">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-gray-600 font-medium text-lg">
                      Répondez aux 20 questions pour évaluer votre niveau sur les fondamentaux Python
                    </p>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 px-3 py-1 font-semibold">
                      {Object.keys(qcmAnswers).length}/20 répondues
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {qcmQuestions.map((question) => (
                      <Card key={question.id} className="border border-blue-100 bg-blue-50/30 hover:bg-blue-50/60 hover:border-blue-300 hover:shadow-md transition-all duration-300 rounded-xl group">
                        <CardContent className="pt-5 pb-5 px-6">
                          <div className="flex items-center gap-2 mb-3">
                            <Badge variant="outline" className="bg-white text-blue-600 text-xs font-bold border-blue-200 shadow-sm group-hover:border-blue-300 transition-colors">
                              Q{question.id}
                            </Badge>
                            {qcmAnswers[question.id] && (
                              <CheckCircle className="h-4 w-4 text-blue-500 animate-in zoom-in duration-300" />
                            )}
                          </div>
                          <p className="mb-4 text-gray-800 font-medium leading-relaxed">{question.question}</p>
                          <div className="space-y-2.5">
                            {question.options.map((option, optIndex) => (
                              <label key={optIndex} className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-100/50 cursor-pointer border border-transparent hover:border-blue-200 transition-all duration-200">
                                <div className="relative flex items-center justify-center">
                                  <input
                                    type="radio"
                                    name={`question-${question.id}`}
                                    value={option}
                                    checked={qcmAnswers[question.id] === option}
                                    onChange={(e) => handleQCMAnswer(question.id, e.target.value)}
                                    className="peer h-4 w-4 border-gray-300 text-blue-600 focus:ring-blue-500"
                                  />
                                </div>
                                <span className={`text-sm ${qcmAnswers[question.id] === option ? 'text-blue-700 font-semibold' : 'text-gray-600'}`}>
                                  {option}
                                </span>
                              </label>
                            ))}
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>

                  <div className="flex justify-center">
                    <Button
                      onClick={submitQCM}
                      disabled={Object.keys(qcmAnswers).length < 20}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-blue-500/20 transition-all transform hover:-translate-y-0.5"
                    >
                      <HelpCircle className="h-4 w-4 mr-2" />
                      Valider le QCM
                    </Button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  <div className="text-center space-y-4">
                    <div className="flex items-center justify-center gap-3">
                      <HelpCircle className="h-8 w-8 text-gray-600" />
                      <h3 className="text-2xl font-bold text-gray-700">Résultats du QCM</h3>
                    </div>

                    <div className="bg-gray-50 rounded-lg p-6 border-2 border-gray-200">
                      <div className="text-4xl font-bold text-gray-700 mb-2">
                        {qcmScore?.toFixed(1)}/20
                      </div>
                      <div className="flex items-center justify-center gap-2 mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-6 w-6 ${i < Math.floor((qcmScore || 0) / 4) ? 'text-gray-600 fill-current' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                      <p className="text-gray-700 font-medium">
                        {qcmScore && qcmScore >= 16 ? "Excellent ! Vous maîtrisez parfaitement les fondamentaux Python." :
                          qcmScore && qcmScore >= 12 ? "Bon niveau ! Quelques révisions pour perfectionner." :
                            qcmScore && qcmScore >= 8 ? "Niveau correct. Continuez à vous entraîner." :
                              "Niveau à améliorer. Revenez sur les bases des fondamentaux Python."}
                      </p>
                    </div>
                  </div>

                  {/* Detailed answer review with explanations */}
                  <div className="space-y-4 mt-8">
                    <h4 className="text-lg font-semibold text-gray-700 text-center mb-6">
                      Détail de vos réponses
                    </h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {qcmQuestions.map((question) => {
                        const userAnswer = qcmAnswers[question.id];
                        const isCorrect = userAnswer === question.answer;

                        return (
                          <Card
                            key={question.id}
                            className={`border-2 transition-colors ${isCorrect
                              ? 'border-green-200 bg-green-50'
                              : 'border-red-200 bg-red-50'
                              }`}
                          >
                            <CardContent className="pt-6">
                              <div className="flex items-center gap-2 mb-3">
                                <Badge variant="outline" className={`${isCorrect ? 'bg-green-100 text-green-700 border-green-300' : 'bg-red-100 text-red-700 border-red-300'
                                  }`}>
                                  Question {question.id}
                                </Badge>
                                {isCorrect ? (
                                  <CheckCircle className="h-4 w-4 text-green-600" />
                                ) : (
                                  <div className="h-4 w-4 text-red-600">✗</div>
                                )}
                              </div>

                              <p className="mb-4 text-sm font-medium">{question.question}</p>

                              <div className="space-y-2 mb-4">
                                {question.options.map((option, optIndex) => {
                                  const isUserAnswer = userAnswer === option;
                                  const isCorrectAnswer = question.answer === option;

                                  let optionStyle = "flex items-center gap-2 p-2 rounded text-sm";

                                  if (isCorrectAnswer) {
                                    optionStyle += " bg-green-100 border border-green-300 font-semibold text-green-700";
                                  } else if (isUserAnswer && !isCorrect) {
                                    optionStyle += " bg-red-100 border border-red-300 font-semibold text-red-700";
                                  } else {
                                    optionStyle += " bg-white text-gray-600";
                                  }

                                  return (
                                    <div key={optIndex} className={optionStyle}>
                                      <div className="flex items-center gap-2">
                                        {isCorrectAnswer && (
                                          <CheckCircle className="h-4 w-4 text-green-600" />
                                        )}
                                        {isUserAnswer && !isCorrect && (
                                          <div className="h-4 w-4 text-red-600">✗</div>
                                        )}
                                        {!isCorrectAnswer && !isUserAnswer && (
                                          <div className="h-4 w-4 text-gray-400">○</div>
                                        )}
                                      </div>
                                      <span>{option}</span>
                                    </div>
                                  );
                                })}
                              </div>

                              {/* Explanation section */}
                              <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded">
                                <div className="flex items-start gap-2">
                                  <HelpCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                  <div>
                                    <p className="text-xs font-semibold text-blue-800 mb-1">Explication :</p>
                                    <p className="text-xs text-blue-700">{question.explanation}</p>
                                  </div>
                                </div>
                              </div>
                            </CardContent>
                          </Card>
                        );
                      })}
                    </div>
                  </div>

                  <div className="flex gap-4 justify-center mt-8">
                    <Button
                      variant="outline"
                      onClick={restartQCM}
                      className="border-gray-300 text-gray-700 hover:bg-gray-50"
                    >
                      Recommencer le QCM
                    </Button>
                  </div>
                </div>
              )}
            </CardContent>
          </Card>
        </>
      )}

      {/* Navigation Card */}
      <ModuleNavigationCards
        currentModule={{
          id: 0,
          title: "Fondamentaux",
          slug: "fondamentaux",
          color: "gray"
        }}
        isExercisePage={true}
        totalExercises={exercises.length}
        currentExerciseId={selectedExercise}
        onNavigate={handleNavigate}
        isQuizMode={showQCM}
        nextModule={{
          id: 1,
          title: "Matrices",
          slug: "matrices"
        }}
      />
    </PythonModuleLayout>
  );
};

export default PythonFondamentauxExercicesPage;