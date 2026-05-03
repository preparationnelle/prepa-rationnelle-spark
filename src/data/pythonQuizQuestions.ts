
export const fundamentalsQuizQuestions = [
  {
    id: 1,
    question: "Comment importer le module aléatoire de NumPy avec l'alias 'rd' ?",
    correctAnswers: ["import numpy.random as rd"],
    hint: "Syntaxe : import numpy.random as ...",
    explanation: "En ECG on utilise numpy.random (et non random standard) car il fournit rd.binomial, rd.geometric, rd.normal, etc."
  },
  {
    id: 2,
    question: "Comment importer numpy avec l'alias 'np' ?",
    correctAnswers: ["import numpy as np"],
    hint: "Même syntaxe que pour random",
    explanation: "NumPy s'importe toujours avec l'alias np dans les sujets ECG"
  },
  {
    id: 3,
    question: "Comment importer matplotlib.pyplot avec l'alias 'plt' ?",
    correctAnswers: ["import matplotlib.pyplot as plt"],
    hint: "Attention : c'est matplotlib.pyplot, pas juste matplotlib",
    explanation: "plt.plot() et plt.show() sont les deux commandes clés pour tracer des graphiques"
  },
  {
    id: 4,
    question: "Quelle est la valeur de 17 % 6 ?",
    correctAnswers: ["5"],
    hint: "% donne le reste de la division euclidienne",
    explanation: "17 = 2×6 + 5, donc le reste est 5"
  },
  {
    id: 5,
    question: "Quelle est la valeur de 2 ** 4 ?",
    correctAnswers: ["16"],
    hint: "** est l'opérateur de puissance en Python",
    explanation: "2⁴ = 2×2×2×2 = 16"
  },
  {
    id: 6,
    question: "Quelle est la valeur de 7 // 2 ?",
    correctAnswers: ["3"],
    hint: "// donne le quotient entier (sans reste)",
    explanation: "7 = 3×2 + 1, donc le quotient entier est 3"
  },
  {
    id: 7,
    question: "Quel est le type Python de la valeur True ?",
    correctAnswers: ["bool"],
    hint: "C'est le type des valeurs logiques True et False",
    explanation: "bool (booléen) ne contient que True ou False. Ex : flag = (a == 2)"
  },
  {
    id: 8,
    question: "Comment afficher la valeur de la variable S ?",
    correctAnswers: ["print(S)"],
    hint: "Utilisez la fonction native print()",
    explanation: "print(S) affiche le contenu de S dans la console"
  },
  {
    id: 9,
    question: "Comment définir une fonction f qui retourne x au carré ?",
    correctAnswers: ["def f(x): return x**2", "def f(x): return x*x"],
    hint: "Syntaxe : def nom(param): return ...",
    explanation: "def définit la fonction, return renvoie le résultat. x**2 est l'opérateur puissance."
  },
  {
    id: 10,
    question: "Comment ajouter l'entier 7 à la fin de la liste L ?",
    correctAnswers: ["L.append(7)"],
    hint: "Utilisez la méthode .append() des listes",
    explanation: "L.append(7) ajoute 7 en dernière position de la liste L"
  },
  {
    id: 11,
    question: "Comment obtenir le nombre d'éléments de la liste L ?",
    correctAnswers: ["len(L)"],
    hint: "Une fonction Python native donne la longueur",
    explanation: "len(L) retourne le nombre d'éléments de la liste L"
  },
  {
    id: 12,
    question: "Quelle est la première ligne d'un script qui calcule une somme (initialisation du compteur) ?",
    correctAnswers: ["S = 0"],
    hint: "On initialise toujours un compteur de somme à l'élément neutre de l'addition",
    explanation: "Tout calcul de somme commence par S = 0"
  },
  {
    id: 13,
    question: "Comment parcourir les entiers de 1 à n inclus avec une boucle for (variable k) ?",
    correctAnswers: ["for k in range(1, n+1):", "for k in range(1, n + 1):"],
    hint: "range(a, b) génère les entiers de a à b-1",
    explanation: "range(1, n+1) génère 1, 2, ..., n. On utilise k comme variable de boucle en ECG."
  },
  {
    id: 14,
    question: "Quelle structure répète des instructions tant qu'une condition est vraie ?",
    correctAnswers: ["while"],
    hint: "C'est l'alternative à for quand on ne connaît pas à l'avance le nombre de répétitions",
    explanation: "while condition: exécute le bloc tant que la condition est True"
  },
  {
    id: 15,
    question: "Dans une fonction, quelle instruction renvoie le résultat à l'appelant ?",
    correctAnswers: ["return"],
    hint: "C'est le mot-clé qui termine l'exécution de la fonction et transmet la valeur",
    explanation: "return valeur renvoie le résultat. Un script utilise print(), une fonction utilise return."
  }
];

export const matricesQuizQuestions = [
  {
    id: 1,
    question: "Comment importer NumPy avec l'alias 'np' ?",
    correctAnswers: ["import numpy as np"],
    hint: "Utilisez 'import ... as ...'",
    explanation: "Cette convention permet d'utiliser np.fonction() au lieu de numpy.fonction()"
  },
  {
    id: 2,
    question: "Comment créer la matrice [[1, 2], [3, 4]] avec NumPy ?",
    correctAnswers: ["np.array([[1, 2], [3, 4]])", "A = np.array([[1, 2], [3, 4]])"],
    hint: "Utilisez np.array() avec des listes imbriquées",
    explanation: "np.array() convertit une liste Python en array NumPy"
  },
  {
    id: 3,
    question: "Comment accéder à l'élément de la première ligne, deuxième colonne de la matrice A ?",
    correctAnswers: ["A[0, 1]", "A[0][1]"],
    hint: "Les indices commencent à 0",
    explanation: "A[ligne, colonne] ou A[ligne][colonne] pour accéder aux éléments"
  },
  {
    id: 4,
    question: "Comment calculer la somme de tous les éléments de la matrice A ?",
    correctAnswers: ["np.sum(A)", "A.sum()"],
    hint: "Utilisez np.sum() ou la méthode .sum()",
    explanation: "np.sum() calcule la somme de tous les éléments d'un array"
  },
  {
    id: 5,
    question: "Comment créer une matrice 2×3 remplie de zéros ?",
    correctAnswers: ["np.zeros([2, 3])", "np.zeros((2, 3))"],
    hint: "Utilisez np.zeros() avec les dimensions",
    explanation: "np.zeros([lignes, colonnes]) crée une matrice de zéros"
  }
];

export const analyseQuizQuestions = [
  {
    id: 1,
    question: "Comment calculer la somme des carrés de 1 à 5 avec une liste ?",
    correctAnswers: ["sum([k**2 for k in range(1, 6)])", "sum([k*k for k in range(1, 6)])"],
    hint: "Utilisez une liste en compréhension avec sum()",
    explanation: "La compréhension de liste génère [k**2 for k in range(1, 6)]"
  },
  {
    id: 2,
    question: "Comment calculer le produit des nombres de 1 à 4 avec une boucle ?",
    correctAnswers: ["P = 1\nfor k in range(1, 5): P *= k", "P = 1; for k in range(1, 5): P *= k"],
    hint: "Initialise P à 1, puis multiplie dans une boucle",
    explanation: "Pour un produit, on initialise à 1 (élément neutre) et on accumule avec *="
  },
  {
    id: 3,
    question: "Comment appliquer la relation de récurrence u(n+1) = 5u(n) + 3 à partir de u = 2 ?",
    correctAnswers: ["u = 5*u + 3", "u = 5 * u + 3"],
    hint: "Remplace u par la nouvelle valeur selon la formule",
    explanation: "On met à jour u selon la relation de récurrence"
  },
  {
    id: 4,
    question: "Comment calculer le cosinus de π avec NumPy ?",
    correctAnswers: ["np.cos(np.pi)"],
    hint: "Utilisez np.cos() avec la constante np.pi",
    explanation: "np.cos(np.pi) = -1 (cosinus de 180 degrés)"
  },
  {
    id: 5,
    question: "Comment définir une fonction qui calcule x³ - 2x ?",
    correctAnswers: ["def f(x): return x**3 - 2*x", "def f(x):\n    return x**3 - 2*x"],
    hint: "Utilisez def avec return et l'opérateur **",
    explanation: "** est l'opérateur de puissance en Python"
  }
];
