import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PythonModuleLayout from '@/components/formation/PythonModuleLayout';
import ModuleNavigationCards from '@/components/formation/ModuleNavigationCards';
import { LatexRenderer } from '@/components/LatexRenderer';
import { usePythonProgress } from '@/hooks/usePythonProgress';
import PythonCodeEditor, { EvaluationResult } from '@/components/python/PythonCodeEditor';
import CodeEvaluationResult from '@/components/python/CodeEvaluationResult';
import {
  PythonStatementCard,
  PythonCorrectionPanel,
  PythonCodeBlock,
  PythonExerciseGrid,
  PythonQCMLauncher,
  PythonExerciseHero,
  PythonSectionHeading,
  PythonExerciseWorkspace,
} from '@/components/formation/python/PythonExercisePage';
import PythonQCMPanel from '@/components/formation/python/PythonQCMPanel';

const PythonFondamentauxExercicesPage = () => {
  const [searchParams] = useSearchParams();
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);
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
      explanation: "La boucle 'for' est utilisée pour itérer un nombre défini de fois, souvent avec range(). Exemple : for k in range(5): répète 5 fois."
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
    for j in range(1, k + 1):
        S += 1 / (k + j)
print(S)`
    }
  }, {
    id: 2,
    title: "Exercice 2 - Produit double",
    difficulty: "Facile",
    description: "Calculer une somme de produits. Manipulation des boucles et variables.",
    color: "gray",
    content: {
      objective: "\\text{Calculer la somme : } \\sum_{k=1}^{n} \\sum_{j=1}^{p} k \\cdot j",
      isLatex: true,
      code: `n = int(input("Entrer n : "))
p = int(input("Entrer p : "))
S = 0
for k in range(1, n + 1):
    for j in range(1, p + 1):
        S += k * j
print(S)`
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
A2 = np.array([[k**2] for k in range(1, n + 1)])
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
    R = 1
    for j in range(1, k + 1):
        R = R * (n - j + 1) / j
    return int(R)`
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
      code: `import numpy.random as rd

secret = rd.randint(1, 21)   # entier entre 1 et 20
trouve = False

while not trouve:
    g = int(input("Devine le nombre (1-20) : "))
    if g < secret:
        print("Trop petit !")
    elif g > secret:
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

for k in range(1, 11):
    print(n, "x", k, "=", n * k)`
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
  }, {
    id: 16,
    title: "Exercice 16 - PGCD par algorithme d'Euclide",
    difficulty: "Avancé",
    description: "Calculer le PGCD de deux entiers naturels en utilisant l'algorithme d'Euclide (divisions successives).",
    color: "red",
    content: {
      objective: "\\text{Écrire une fonction qui retourne } \\mathrm{pgcd}(a,b) \\text{ par l'algorithme d'Euclide}",
      isLatex: true,
      code: `def pgcd(a, b):
    while b != 0:
        a, b = b, a % b
    return a

a = int(input("a = "))
b = int(input("b = "))
print("PGCD =", pgcd(a, b))`
    }
  }, {
    id: 17,
    title: "Exercice 17 - Test de primalité",
    difficulty: "Avancé",
    description: "Déterminer si un entier n ≥ 2 est premier en testant les diviseurs jusqu'à √n.",
    color: "red",
    content: {
      objective: "\\text{Écrire une fonction } \\mathtt{est\\_premier}(n) \\text{ qui retourne True si } n \\text{ est premier}",
      isLatex: true,
      code: `def est_premier(n):
    if n < 2:
        return False
    k = 2
    while k * k <= n:
        if n % k == 0:
            return False
        k += 1
    return True

n = int(input("Entrez n : "))
if est_premier(n):
    print(n, "est premier")
else:
    print(n, "n'est pas premier")`
    }
  }, {
    id: 18,
    title: "Exercice 18 - Conjecture de Syracuse",
    difficulty: "Avancé",
    description: "Calculer le temps de vol d'un entier u₀ (nombre d'itérations avant d'atteindre 1) selon la suite de Syracuse.",
    color: "red",
    content: {
      objective: "\\text{Pour } u_0 \\geq 1, \\text{ on définit } u_{n+1} = \\frac{u_n}{2} \\text{ si } u_n \\text{ pair, sinon } 3u_n + 1. \\text{ Trouver le plus petit } n \\text{ tel que } u_n = 1.",
      isLatex: true,
      code: `def temps_vol(u):
    n = 0
    while u != 1:
        if u % 2 == 0:
            u = u // 2
        else:
            u = 3 * u + 1
        n += 1
    return n

u0 = int(input("Entrez u0 : "))
print("Temps de vol =", temps_vol(u0))`
    }
  }, {
    id: 19,
    title: "Exercice 19 - Crible d'Ératosthène",
    difficulty: "Avancé",
    description: "Construire la liste de tous les nombres premiers inférieurs ou égaux à n par le crible d'Ératosthène.",
    color: "red",
    content: {
      objective: "\\text{Construire la liste des nombres premiers } \\leq n \\text{ par le crible d'Ératosthène}",
      isLatex: true,
      code: `n = int(input("Entrez n : "))

crible = [True] * (n + 1)
crible[0] = False
crible[1] = False

for k in range(2, n + 1):
    if crible[k]:
        j = k * k
        while j <= n:
            crible[j] = False
            j += k

premiers = [k for k in range(n + 1) if crible[k]]
print(premiers)`
    }
  }, {
    id: 20,
    title: "Exercice 20 - Décomposition en facteurs premiers",
    difficulty: "Avancé",
    description: "Décomposer un entier n ≥ 2 en produit de facteurs premiers et afficher la liste obtenue.",
    color: "red",
    content: {
      objective: "\\text{Écrire une fonction qui retourne la liste des facteurs premiers de } n \\geq 2",
      isLatex: true,
      code: `def facteurs(n):
    L = []
    k = 2
    while n > 1:
        while n % k == 0:
            L.append(k)
            n = n // k
        k += 1
    return L

n = int(input("Entrez n : "))
print("Facteurs premiers :", facteurs(n))`
    }
  }, {
    id: 21,
    title: "Exercice 21 - Triangle de Pascal",
    difficulty: "Avancé",
    description: "Construire le triangle de Pascal jusqu'à la ligne n et l'afficher ligne par ligne.",
    color: "red",
    content: {
      objective: "\\text{Construire les } n+1 \\text{ premières lignes du triangle de Pascal en utilisant } \\binom{k}{j} = \\binom{k-1}{j-1} + \\binom{k-1}{j}",
      isLatex: true,
      code: `n = int(input("Entrez n : "))

T = [[1]]
for k in range(1, n + 1):
    ligne = [1]
    for j in range(1, k):
        ligne.append(T[k - 1][j - 1] + T[k - 1][j])
    ligne.append(1)
    T.append(ligne)

for ligne in T:
    print(ligne)`
    }
  }, {
    id: 22,
    title: "Exercice 22 - Recherche dichotomique",
    difficulty: "Avancé",
    description: "Rechercher si un entier x appartient à une liste triée L par dichotomie. Retourne l'indice ou -1.",
    color: "red",
    content: {
      objective: "\\text{Écrire une fonction } \\mathtt{dicho}(L, x) \\text{ qui retourne l'indice de } x \\text{ dans } L \\text{ triée, ou } -1",
      isLatex: true,
      code: `def dicho(L, x):
    g = 0
    d = len(L) - 1
    while g <= d:
        m = (g + d) // 2
        if L[m] == x:
            return m
        elif L[m] < x:
            g = m + 1
        else:
            d = m - 1
    return -1

L = [1, 3, 5, 7, 9, 11, 14, 18, 22, 30]
x = int(input("Valeur cherchée : "))
print("Indice :", dicho(L, x))`
    }
  }, {
    id: 23,
    title: "Exercice 23 - Tri par insertion",
    difficulty: "Avancé",
    description: "Trier une liste d'entiers par ordre croissant en utilisant l'algorithme du tri par insertion.",
    color: "red",
    content: {
      objective: "\\text{Trier une liste } L \\text{ par insertion : à chaque étape, insérer } L[k] \\text{ à sa place dans } L[0..k-1]",
      isLatex: true,
      code: `def tri_insertion(L):
    n = len(L)
    for k in range(1, n):
        x = L[k]
        j = k - 1
        while j >= 0 and L[j] > x:
            L[j + 1] = L[j]
            j -= 1
        L[j + 1] = x
    return L

L = [5, 2, 9, 1, 7, 3, 8, 4, 6]
print("Liste triée :", tri_insertion(L))`
    }
  }];

  // Mark the exercise as seen as soon as it is opened (corrigé toujours visible)
  useEffect(() => {
    if (selectedExercise) {
      markExerciseAsSeen(`python-${moduleId}-exo-${selectedExercise}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedExercise]);

  // Keyboard navigation: ← / → between exercises
  useEffect(() => {
    if (!selectedExercise) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (!target) return;
      const tag = target.tagName;
      if (tag === 'INPUT' || tag === 'TEXTAREA' || (target as HTMLElement).isContentEditable) return;
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      if (e.key === 'ArrowRight' && selectedExercise < exercises.length) {
        e.preventDefault();
        setSelectedExercise(selectedExercise + 1);
        window.scrollTo(0, 0);
      } else if (e.key === 'ArrowLeft' && selectedExercise > 1) {
        e.preventDefault();
        setSelectedExercise(selectedExercise - 1);
        window.scrollTo(0, 0);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
    // `exercises` is a static literal (length never changes), so rebinding
    // only on selectedExercise is correct.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedExercise]);

  if (selectedExercise) {
    const ex = exercises[selectedExercise - 1];
    const hasPrev = selectedExercise > 1;
    const hasNext = selectedExercise < exercises.length;
    const isMultiPart = Boolean(ex.content.enonce_complet || ex.content.exercices);

    return (
      <PythonModuleLayout>
        <PythonExerciseWorkspace
          current={selectedExercise}
          total={exercises.length}
          title={ex.title}
          difficulty={ex.difficulty}
          description={ex.description}
          onBack={() => setSelectedExercise(null)}
          onPrev={() => {
            if (hasPrev) {
              setSelectedExercise(selectedExercise - 1);
              window.scrollTo(0, 0);
            }
          }}
          onNext={() => {
            if (hasNext) {
              setSelectedExercise(selectedExercise + 1);
              window.scrollTo(0, 0);
            }
          }}
          hasPrev={hasPrev}
          hasNext={hasNext}
          objective={
            ex.content.isLatex ? (
              <LatexRenderer latex={ex.content.objective} />
            ) : (
              <p>{ex.content.objective}</p>
            )
          }
          editor={
            <PythonCodeEditor
              embedded
              minHeight={240}
              exerciseStatement={ex.content.objective}
              expectedSolution={ex.content.code || ''}
              moduleId={String(moduleId)}
              exerciseId={String(selectedExercise)}
              onEvaluationComplete={(result) => {
                setEvaluationResults(prev => ({ ...prev, [selectedExercise]: result }));
                markExerciseAsSeen(`python-${moduleId}-exo-${selectedExercise}`);
              }}
            />
          }
          evaluationResult={
            evaluationResults[selectedExercise] ? (
              <CodeEvaluationResult result={evaluationResults[selectedExercise]} />
            ) : undefined
          }
          correction={
            !isMultiPart && ex.content.code ? (
              <PythonCodeBlock code={ex.content.code} />
            ) : undefined
          }
        />

        {ex.content.enonce_complet && (
          <>
            <PythonStatementCard label={ex.content.enonce_complet.titre} icon="book">
              <p className="mb-6">{ex.content.enonce_complet.introduction}</p>
              <div className="space-y-5">
                {ex.content.enonce_complet.parties.map((partie, index) => (
                  <div key={index} className="bg-[rgba(78,55,30,0.03)] rounded-xl border border-[rgba(78,55,30,0.10)] p-5">
                    <h4 className="text-[15px] font-semibold text-carnet-ink mb-3 flex items-center gap-2.5">
                      <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[rgba(193,68,58,0.08)] border border-[rgba(193,68,58,0.2)] text-[11px] font-bold text-carnet-red">
                        {partie.numero}
                      </span>
                      {partie.titre}
                    </h4>
                    <div className="text-carnet-ink-soft pl-[34px]">
                      <LatexRenderer latex={partie.enonce_latex} />
                    </div>
                    {partie.exemple_latex && (
                      <div className="mt-4 ml-[34px] px-4 py-3 bg-white rounded-lg border-l-[3px] border-carnet-red">
                        <p className="text-[10px] uppercase tracking-[0.12em] font-semibold text-carnet-red mb-1">Exemple</p>
                        <LatexRenderer latex={partie.exemple_latex} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </PythonStatementCard>

            <div className="space-y-5 mt-6">
              {Object.entries(ex.content.corrections).map(([key, correction]: [string, any]) => (
                <PythonCorrectionPanel key={key} title={correction.titre}>
                  <div className="px-6 md:px-8 pt-5 pb-1">
                    <p className="text-carnet-ink-soft text-[15px] leading-relaxed">
                      {correction.explication}
                    </p>
                  </div>
                  <PythonCodeBlock code={correction.code} caption="Code" />
                  <div className="px-6 md:px-8 py-4 bg-[rgba(193,68,58,0.04)] border-t border-[rgba(193,68,58,0.1)]">
                    <div className="text-[10px] uppercase tracking-[0.12em] font-semibold text-carnet-red mb-1">
                      Résultat attendu
                    </div>
                    <div className="text-carnet-ink-soft text-[15px]">
                      <LatexRenderer latex={correction.resultat_latex} />
                    </div>
                  </div>
                </PythonCorrectionPanel>
              ))}
            </div>
          </>
        )}

        {ex.content.exercices && (
          <div className="space-y-8 mt-8">
            {ex.content.exercices.map((exercice: any, index: number) => (
              <div key={index} className="space-y-4">
                <PythonStatementCard label={exercice.titre} icon="book">
                  {exercice.enonce_latex ? (
                    <div>
                      <LatexRenderer latex={exercice.enonce_latex} />
                      {exercice.exemple && (
                        <p className="mt-3 text-sm whitespace-pre-line text-carnet-ink-mute">
                          {exercice.exemple}
                        </p>
                      )}
                    </div>
                  ) : (
                    <p className="whitespace-pre-line">{exercice.enonce}</p>
                  )}
                </PythonStatementCard>

                <PythonCorrectionPanel>
                  <PythonCodeBlock code={exercice.correction} />
                </PythonCorrectionPanel>
              </div>
            ))}
          </div>
        )}

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
      </PythonModuleLayout>
    );
  }

  return (
    <PythonModuleLayout>
      {!showQCM && (
        <>
          <PythonExerciseHero
            moduleLabel="Module 0 · Exercices"
            title={<>Exercices · <span className="text-carnet-red">Fondamentaux</span></>}
            subtitle="Renforcez les bases de Python : variables, structures de contrôle, fonctions et algorithmes simples."
            annotation={"↘ on commence\npar les bases"}
          />

          <PythonQCMLauncher
            description="Testez vos connaissances sur les fondamentaux Python"
            onLaunch={() => setShowQCM(true)}
          />

          <PythonSectionHeading
            label="Liste"
            title="Exercices du module"
            className="mt-12"
          />

          <PythonExerciseGrid
            exercises={exercises.map((ex) => ({
              id: ex.id,
              title: ex.title,
              description: ex.description,
              difficulty: ex.difficulty,
            }))}
            onSelect={setSelectedExercise}
          />
        </>
      )}

      {showQCM && (
        <PythonQCMPanel
          intro="Répondez aux 20 questions pour évaluer votre niveau sur les fondamentaux Python."
          questions={qcmQuestions}
          answers={qcmAnswers}
          onAnswer={handleQCMAnswer}
          onSubmit={submitQCM}
          onRestart={restartQCM}
          onBack={() => {
            setShowQCM(false);
            setQcmSubmitted(false);
            setQcmAnswers({});
            setQcmScore(null);
          }}
          submitted={qcmSubmitted}
          score={qcmScore}
        />
      )}

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