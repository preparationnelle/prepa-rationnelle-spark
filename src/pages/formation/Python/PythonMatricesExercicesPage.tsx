import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calculator, Target, Play, CheckCircle, Eye, EyeOff, Code, BookOpen, ChevronDown, ChevronUp, Trophy, Star, ArrowLeft } from 'lucide-react';
import PythonModuleLayout from '@/components/formation/PythonModuleLayout';
import ModuleNavigationCards from '@/components/formation/ModuleNavigationCards';

const PythonMatricesExercicesPage = () => {
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);
  const [showSolution, setShowSolution] = useState<{
    [key: string]: boolean;
  }>({});
  const [showCorrections, setShowCorrections] = useState<Set<number>>(new Set());
  const [showQCM, setShowQCM] = useState(false);
  
  // États pour le QCM d'évaluation
  const [qcmAnswers, setQcmAnswers] = useState<{[key: number]: string}>({});
  const [qcmSubmitted, setQcmSubmitted] = useState(false);
  const [qcmScore, setQcmScore] = useState<number | null>(null);
  
  const toggleSolution = (exerciseId: string) => {
    setShowSolution(prev => ({
      ...prev,
      [exerciseId]: !prev[exerciseId]
    }));
  };
  
  const toggleCorrection = (index: number) => {
    const newShowCorrections = new Set(showCorrections);
    if (newShowCorrections.has(index)) {
      newShowCorrections.delete(index);
    } else {
      newShowCorrections.add(index);
    }
    setShowCorrections(newShowCorrections);
  };

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
  };

  // Fonction pour recommencer le QCM
  const restartQCM = () => {
    setQcmAnswers({});
    setQcmSubmitted(false);
    setQcmScore(null);
  };

  const handleNavigate = (newExerciseId: number) => {
    if (newExerciseId > 0 && newExerciseId <= exercises.length) {
      setSelectedExercise(newExerciseId);
      window.scrollTo(0, 0); // Scroll to top on navigation
    }
  };

  const qcmQuestions = [{
    id: 1,
    question: "Que renvoie l'instruction np.array([[1,2],[3,4]])[1,0] ?",
    options: ["A) 1", "B) 2", "C) 3", "D) 4"],
    answer: "C) 3"
  }, {
    id: 2,
    question: "Quelle est la différence fondamentale entre A * B et np.dot(A,B) ?",
    options: ["A) Aucune différence", "B) A * B effectue une multiplication terme à terme, np.dot(A,B) le produit matriciel", "C) np.dot() est plus performant", "D) A * B ne fonctionne que pour les vecteurs"],
    answer: "B) A * B effectue une multiplication terme à terme, np.dot(A,B) le produit matriciel"
  }, {
    id: 3,
    question: "Pour calculer la somme de chaque ligne d'une matrice A, on utilise :",
    options: ["A) np.sum(A, 0)", "B) np.sum(A, 1)", "C) np.sum(A)", "D) np.row_sum(A)"],
    answer: "B) np.sum(A, 1)"
  }, {
    id: 4,
    question: "L'instruction np.zeros([3,2]) crée une matrice de dimensions :",
    options: ["A) 2 lignes, 3 colonnes", "B) 3 lignes, 2 colonnes", "C) 6 éléments au total", "D) Dimensions variables"],
    answer: "B) 3 lignes, 2 colonnes"
  }, {
    id: 5,
    question: "Pour extraire la troisième colonne d'une matrice A :",
    options: ["A) A[3,:]", "B) A[:,3]", "C) A[:,2]", "D) A[2,:]"],
    answer: "C) A[:,2]"
  }, {
    id: 6,
    question: "Pour créer la matrice identité 4×4, on utilise :",
    options: ["A) np.identity(4)", "B) np.eye(4)", "C) np.ones([4,4])", "D) A et B sont correctes"],
    answer: "D) A et B sont correctes"
  }, {
    id: 7,
    question: "Soit A = np.array([[1,2],[3,4]]). Que renvoie A.T ?",
    options: ["A) array([[1,3],[2,4]])", "B) array([[1,2],[3,4]])", "C) array([[4,3],[2,1]])", "D) Une erreur"],
    answer: "A) array([[1,3],[2,4]])"
  }, {
    id: 8,
    question: "Pour extraire la première colonne d'une matrice A, on écrit :",
    options: ["A) A[0,:]", "B) A[:,0]", "C) A", "D) A.column(0)"],
    answer: "B) A[:,0]"
  }, {
    id: 9,
    question: "Si A est une matrice 3×2 et B une matrice 2×4, quelle est la dimension de np.dot(A,B) ?",
    options: ["A) 3×4", "B) 2×2", "C) 3×2", "D) Le produit est impossible"],
    answer: "A) 3×4"
  }, {
    id: 10,
    question: "Quel est le résultat de np.ones([2,3]) + 2 ?",
    options: ["A) np.array([[3,3,3],[3,3,3]])", "B) np.array([[2,2,2],[2,2,2]])", "C) np.array([[1,1,1],[1,1,1]])", "D) Une erreur"],
    answer: "A) np.array([[3,3,3],[3,3,3]])"
  }, {
    id: 11,
    question: "Pour une matrice A carrée, np.trace(A) calcule :",
    options: ["A) Le déterminant", "B) La somme des éléments diagonaux", "C) Le rang", "D) L'inverse"],
    answer: "B) La somme des éléments diagonaux"
  }, {
    id: 12,
    question: "Vrai ou Faux : L'instruction A == B compare deux matrices terme à terme et renvoie une matrice de booléens.",
    options: ["A) Vrai", "B) Faux"],
    answer: "A) Vrai"
  }, {
    id: 13,
    question: "A = np.diag([1,2,3]). Quelle est la trace de A ?",
    options: ["A) 0", "B) 6", "C) 1", "D) 2"],
    answer: "B) 6"
  }, {
    id: 14,
    question: "Quel code permet de faire passer tous les coefficients supérieurs à 4 d'une matrice M à 0 (en conservant les autres valeurs) ?",
    options: ["A) M[M > 4] = 0", "B) M = 0", "C) M = M[M < 4]", "D) M = M * 0"],
    answer: "A) M[M > 4] = 0"
  }, {
    id: 15,
    question: "Comment copier proprement une matrice B dans une nouvelle variable A pour éviter les effets de bord ?",
    options: ["A) A = B", "B) A = B.copy()", "C) A[:] = B", "D) A = np.array(B)"],
    answer: "B) A = B.copy()"
  }, {
    id: 16,
    question: "Que renvoie np.max(np.eye(5)) ?",
    options: ["A) 1", "B) 5", "C) 0", "D) 4"],
    answer: "A) 1"
  }, {
    id: 17,
    question: "Que renvoie l'instruction np.array([[1,2],[3,4]])[1] ?",
    options: ["A) 1", "B) 2", "C) 3", "D) 4"],
    answer: "C) 3"
  }, {
    id: 18,
    question: "Pour calculer la somme de chaque ligne d'une matrice A, on utilise :",
    options: ["A) np.sum(A, 0)", "B) np.sum(A, 1)", "C) np.sum(A)", "D) np.row_sum(A)"],
    answer: "B) np.sum(A, 1)"
  }, {
    id: 19,
    question: "L'instruction np.zeros([3,2]) crée une matrice de dimensions :",
    options: ["A) 2 lignes, 3 colonnes", "B) 3 lignes, 2 colonnes", "C) 6 éléments au total", "D) Dimensions variables"],
    answer: "B) 3 lignes, 2 colonnes"
  }, {
    id: 20,
    question: "Quelle est la différence fondamentale entre A * B et np.dot(A,B) en Python ?",
    options: ["A) Aucune différence", "B) A * B effectue une multiplication terme à terme, np.dot(A,B) le produit matriciel", "C) np.dot() est plus performant", "D) A * B ne fonctionne que pour les vecteurs"],
    answer: "B) A * B effectue une multiplication terme à terme, np.dot(A,B) le produit matriciel"
  }];
  const exercises = [{
    id: 2,
    title: "Application directe (Niveau 1)",
    difficulty: "Facile",
    description: "Création de matrices et extraction d'éléments.",
    color: "green",
    type: "exercise"
  }, {
    id: 3,
    title: "Manipulation des données (Niveau 2)",
    difficulty: "Moyen",
    description: "Manipulation et calculs sur les matrices.",
    color: "orange",
    type: "exercise"
  }, {
    id: 4,
    title: "Opérations matricielles (Niveau 3)",
    difficulty: "Moyen",
    description: "Opérations complexes entre matrices.",
    color: "orange",
    type: "exercise"
  }, {
    id: 5,
    title: "Puissance d'une matrice",
    difficulty: "Avancé",
    description: "Implémenter une fonction pour calculer la puissance d'une matrice.",
    color: "red",
    type: "exercise",
    content: {
      objective: "Écrire une fonction puissance qui prend en argument une matrice A et un entier n et qui renvoie A^n en utilisant uniquement np.dot",
      enonce: "Écrire une fonction puissance qui prend en argument une matrice A et un entier n et qui renvoie A^n. On n'utilisera que la fonction np.dot.\n\nRemarque : on initialise P à la matrice identité afin de gérer correctement le cas n=0.",
      correction: `import numpy as np

def puissance(A: np.ndarray, n: int) -> np.ndarray:
    """Renvoie A**n en utilisant uniquement np.dot."""
    P = np.eye(A.shape[0])   # initialise à A^0 = I
    for _ in range(n):
        P = np.dot(P, A)
    return P

# Exemple d'utilisation
A = np.array([[1, 1], [0, 1]])
print("A =\\n", A)
print("A^3 =\\n", puissance(A, 3))`
    }
  }, {
    id: 6,
    title: "Création de matrices avec fromfunction",
    difficulty: "Moyen",
    description: "Utiliser np.fromfunction pour créer des matrices selon des formules.",
    color: "orange",
    type: "exercise",
    content: {
      objective: "Créer des matrices en utilisant np.fromfunction avec des formules mathématiques",
      enonce: "1. Créer la matrice C = (i-j) pour 0≤i≤2 et 0≤j≤3, c'est-à-dire :\n[[ 0 -1 -2 -3]\n [ 1  0 -1 -2]\n [ 2  1  0 -1]]\n\n2. Créer la matrice D = (ij) pour 1≤i≤4 et 1≤j≤3, c'est-à-dire :\n[[ 1  2  3]\n [ 2  4  6]\n [ 3  6  9]\n [ 4  8 12]]",
      correction: `import numpy as np

# 1. Matrice C : C[i, j] = i - j
C = np.fromfunction(lambda i, j: i - j, shape=(3, 4), dtype=int)
print("Matrice C =\\n", C)

# 2. Matrice D : D[i, j] = (i+1)*(j+1)
D = np.fromfunction(lambda i, j: (i + 1) * (j + 1), shape=(4, 3), dtype=int)
print("Matrice D =\\n", D)`
    }
  }, {
    id: 7,
    title: "Construction de matrices symétriques",
    difficulty: "Moyen",
    description: "Créer des matrices symétriques sans saisir chaque coefficient.",
    color: "orange",
    type: "exercise",
    content: {
      objective: "Sans saisir chaque coefficient, définir en Python la matrice symétrique demandée",
      enonce: "Sans saisir chaque coefficient, définir en Python la matrice :\n[[5 3 3]\n [3 5 3]\n [3 3 5]]\n\nIndice : penser à utiliser np.ones et np.eye",
      correction: `import numpy as np

# Solution : A = 3 * matrice de uns + 2 * matrice identité
A = 3 * np.ones((3, 3), dtype=int) + 2 * np.eye(3, dtype=int)
print(A)

# Vérification
print("\\nVérification de la symétrie :")
print("A est symétrique :", np.array_equal(A, A.T))`
    }
  }, {
    id: 8,
    title: "Matrices à diagonale strictement dominante",
    difficulty: "Avancé",
    description: "Implémenter une fonction pour tester la dominance diagonale stricte.",
    color: "red",
    type: "exercise",
    content: {
      objective: "Implémenter une fonction qui teste si une matrice est à diagonale strictement dominante",
      enonce: "Une matrice A∈M_n(ℝ) est à diagonale strictement dominante si ∀i∈{1,…,n}, |a_ii| > ∑_{j≠i} |a_ij|.\n\nImplémenter une fonction diagdom(A) qui teste cette propriété.",
      correction: `import numpy as np

def diagdom(A: np.ndarray) -> bool:
    """Teste la dominance diagonale stricte de A."""
    n, p = A.shape
    if n != p:
        raise ValueError("A doit être carrée")
    for i in range(n):
        s = np.sum(np.abs(A[i, :])) - np.abs(A[i, i])
        if np.abs(A[i, i]) <= s:
            return False
    return True

# Tests
M1 = np.array([[2, 1], [1, 2]])
M2 = np.array([[-4, 2, 1], [1, 6, 2], [1, -2, 5]])

print("M1 est à diagonale dominante :", diagdom(M1))  # False
print("M2 est à diagonale dominante :", diagdom(M2))  # True`
    }
  }, {
    id: 9,
    title: "Matrices stochastiques",
    difficulty: "Avancé",
    description: "Implémenter une fonction pour tester si une matrice est stochastique.",
    color: "red",
    type: "exercise",
    content: {
      objective: "Implémenter une fonction qui teste si une matrice est stochastique",
      enonce: "Une matrice est stochastique si ses coefficients sont positifs et si chaque ligne somme à 1.\n\nImplémenter une fonction stoch(A) qui teste cette propriété.",
      correction: `import numpy as np

def stoch(A):
    (n, p) = np.shape(A)
    # On passe en revue toutes les lignes de A
    for i in range(n):
        # On calcule la somme des éléments de la ligne i
        S = 0
        for j in range(p):
            S = S + A[i, j]
        # On teste si la somme de la ligne i vaut 1
        if S != 1:
            return False
    return True

# Tests
M1 = np.array([[2, 1], [1, 2]])
M2 = np.array([[1, 0], [0, 1]])
M3 = np.array([[0.5, 0.5], [0.3, 0.7]])

print("M1 est stochastique :", stoch(M1))  # False
print("M2 est stochastique :", stoch(M2))  # True
print("M3 est stochastique :", stoch(M3))  # True`
    }
  }, {
    id: 10,
    title: "Matrices nilpotentes",
    difficulty: "Avancé",
    description: "Étude des matrices nilpotentes et de leur indice.",
    color: "red",
    type: "exercise"
  }, {
    id: 11,
    title: "Produit matriciel et somme",
    difficulty: "Facile",
    description: "Prévoir le résultat d'un produit matriciel simple.",
    color: "green",
    type: "exercise",
    content: {
      objective: "Comprendre le produit matriciel et son lien avec la somme",
      enonce: "Prévoir la réponse de la machine.\n\nn = 10\nA = np.arange(1, n+1)\nB = np.ones((n, 1))\nprint(np.dot(A, B))",
      correction: `La machine renvoie 55, il s'agit de la somme des 10 premiers entiers.

∑(k=1 à 10) k = (10 × (10 + 1))/2 = 55

En effet, par définition du produit matriciel :
[1  2  ...  10] × [1; 1; ...; 1] = [55]

Le produit d'un vecteur ligne par un vecteur colonne de 1 donne la somme des éléments du vecteur ligne.`
    }
  }, {
    id: 12,
    title: "Création d'une matrice Z",
    difficulty: "Moyen",
    description: "Créer une matrice spécifique en utilisant différentes méthodes.",
    color: "blue",
    type: "exercise",
    content: {
      objective: "Créer une matrice Z en utilisant np.ones, np.zeros et des boucles for.",
      enonce: `Créer la matrice Z suivante de trois manières différentes :
Z = 
[[1 1 1 1 1]
 [1 0 0 0 0]
 [1 0 0 0 0]
 [1 0 0 0 0]
 [1 1 1 1 1]]

a) Avec np.ones et des boucles for.
b) Avec np.zeros et des boucles for.
c) Avec np.ones et une modification avec np.zeros.`,
      correction: `a) Avec np.ones et des boucles for :
import numpy as np
Z = np.ones((5,5))
for i in range(1,4):
    for j in range(1,5):
        Z[i,j] = Z[i,j] - 1
print(Z)

b) Avec np.zeros et des boucles for :
Z = np.zeros((5,5))
for i in range(5):
    Z[i,0] = 1
    Z[0,i] = 1
    Z[4,i] = 1
    Z[i,4] = 1
print(Z)

c) Avec np.ones et une modification avec np.zeros :
Z = np.ones((5,5))
Z[1:4, 1:4] = np.zeros((3,3))
print(Z)`
    }
  }, {
    id: 13,
    title: "Fonction croix (diagonales à 1)",
    difficulty: "Avancé",
    description: "Construire une matrice avec des 1 sur les deux diagonales.",
    color: "red",
    type: "exercise",
    content: {
      objective: "Écrire une fonction qui crée une matrice carrée avec des 1 sur la diagonale principale et l'anti-diagonale.",
      enonce: `Écrire une fonction croix(n) qui construit une matrice carrée de taille n x n avec des zéros partout, sauf sur les deux diagonales où les coefficients valent 1.

Par exemple, pour n = 3, la matrice résultante est :
[[1 0 1]
 [0 1 0]
 [1 0 1]]`,
      correction: `import numpy as np

def croix(n):
    L = [[0 for j in range(n)] for i in range(n)]
    for i in range(n):
        L[i][i] = 1
        L[i][n - 1 - i] = 1
    return np.array(L)

print(croix(3))`
    }
  }, {
    id: 14,
    title: "Fonction puissance d'une matrice",
    difficulty: "Moyen",
    description: "Écrire une fonction pour calculer la puissance n-ième d'une matrice.",
    color: "orange",
    type: "exercise",
    content: {
      objective: "Implémenter une fonction qui calcule M^n pour une matrice M donnée.",
      enonce: `Soit la matrice M suivante :
M = np.array([[1, -5, 6], [2, -3, 0], [-1, 5, 4]])

Écrire une fonction puissance(n) qui renvoie la matrice M^n.`,
      correction: `import numpy as np

M = np.array([[1, -5, 6], [2, -3, 0], [-1, 5, 4]])

def puissance(n):
    H = np.eye(3)
    for i in range(n):
        H = np.dot(H, M)
    return H

print(puissance(4))`
    }
  }, {
    id: 15,
    title: "Construction de matrice en une ligne",
    difficulty: "Moyen",
    description: "Construire une matrice spécifique en une seule ligne de code.",
    color: "blue",
    type: "exercise",
    content: {
      objective: "Utiliser np.ones et np.eye pour construire une matrice en une seule ligne.",
      enonce: `Construire la matrice suivante en une seule ligne de code, à l’aide de np.ones et np.eye :
[[-8  4  4]
 [ 4 -8  4]
 [ 4  4 -8]]

Indice : commencez par une matrice remplie de 4, puis corrigez la diagonale.`,
      correction: `import numpy as np

A = 4 * np.ones((3, 3)) - 12 * np.eye(3, 3)
print(A)`
    }
  }, {
    id: 16,
    title: "Tester si une matrice est antisymétrique",
    difficulty: "Avancé",
    description: "Vérifier si une matrice est antisymétrique en implémentant une fonction.",
    color: "red",
    type: "exercise",
    content: {
      objective: "Implémenter une fonction qui teste si une matrice carrée est antisymétrique.",
      enonce: `On appelle matrice antisymétrique une matrice carrée M telle que :
- Tous les éléments diagonaux sont nuls.
- Pour tout i ≠ j, on a : M[i][j] = –M[j][i].

Compléter la fonction suivante pour qu’elle teste si une matrice est antisymétrique :
def est_antisymetrique(M):
    n = len(M)

    # Vérifier que la matrice est carrée
    for ligne in M:
        if len(ligne) != n:
            return False
    
    # Vérifier que la diagonale est nulle
    # ... à compléter
    
    # Vérifier la condition M[j][i] = -M[i][j]
    # ... à compléter

    return True`,
      correction: `import numpy as np

def est_antisymetrique(M):
    n = len(M)

    # Vérifie si la matrice est carrée
    for ligne in M:
        if len(ligne) != n:
            return False
    
    # Vérifie si la diagonale est nulle
    for i in range(n):
        if M[i][i] != 0:
            return False
    
    # Vérifie la condition M[j][i] = -M[i][j]
    for i in range(n):
        for j in range(n):
            if i != j and M[j][i] != -M[i][j]:
                return False
    return True

# --- Tests ---
M1 = np.array([[0, 5, -2], [-5, 0, 3], [2, -3, 0]])
M2 = np.array([[1, 5, -2], [-5, 0, 3], [2, -3, 0]])
M3 = np.array([[0, 5, -2], [-4, 0, 3], [2, -3, 0]])

print(f"M1 est antisymétrique : {est_antisymetrique(M1)}")
print(f"M2 est antisymétrique : {est_antisymetrique(M2)}")
print(f"M3 est antisymétrique : {est_antisymetrique(M3)}")`
    }
  }, {
    id: 17,
    title: "Triangle de Pascal",
    description: "Générer le triangle de Pascal jusqu'à l'ordre n.",
    difficulty: "Avancé",
    color: "red",
    type: "exercise",
    content: {
      objective: "Écrire une fonction qui génère le triangle de Pascal sous forme de liste de listes.",
      enonce: "Écrire en langage Python une fonction pascal(n) qui prend en argument un entier naturel n et qui renvoie en sortie la liste de listes représentant le triangle de Pascal à l’ordre n.",
      correction: `def pascal(n):
    triangle = []
    for i in range(n):
        row = [1] * (i + 1)
        if i > 1:
            for j in range(1, i):
                row[j] = triangle[i-1][j-1] + triangle[i-1][j]
        triangle.append(row)
    return triangle

# Test avec n=5 et affichage clair
triangle_result = pascal(5)
for row in triangle_result:
    print(row)`
    }
  }];
  const renderQCMContent = () => <div className="space-y-6">
      {qcmQuestions.map((q, index) => <Card key={q.id} className="border-blue-200">
          <CardContent className="pt-6">
            <h3 className="font-semibold mb-4 text-lg">Question {q.id}</h3>
            <p className="mb-4">{q.question}</p>
            <div className="space-y-2 mb-4">
              {q.options.map((option, optIndex) => <div key={optIndex} className="p-2 bg-gray-50 rounded">
                  {option}
                </div>)}
            </div>
            <Button variant="outline" size="sm" onClick={() => toggleSolution(`qcm-${q.id}`)} className="flex items-center gap-2">
              {showSolution[`qcm-${q.id}`] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              {showSolution[`qcm-${q.id}`] ? 'Masquer' : 'Voir'} la réponse
            </Button>
            {showSolution[`qcm-${q.id}`] && <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded">
                <div className="flex items-center gap-2 text-blue-600">
                  <CheckCircle className="h-4 w-4" />
                  <span className="font-semibold">Réponse correcte : {q.answer}</span>
                </div>
              </div>}
          </CardContent>
        </Card>)}
    </div>;
  const renderExerciseContent = () => {
    const exercise = exercises[selectedExercise! - 1];
    if (exercise.id === 2) {
      return <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-blue-600">Exercice 1.1</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Créer une matrice 3×4 contenant uniquement des zéros, puis une matrice 2×3 contenant uniquement des uns.</p>
              <Button variant="outline" size="sm" onClick={() => toggleSolution('ex1-1')} className="flex items-center gap-2 mb-4">
                {showSolution['ex1-1'] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                {showSolution['ex1-1'] ? 'Masquer' : 'Voir'} la solution
              </Button>
              {showSolution['ex1-1'] && <div className="mt-4 p-4 bg-gray-50 border rounded">
                  <pre className="text-sm font-mono mb-2">
                {`import numpy as np

M1 = np.zeros((3, 4))   # matrice 3×4 de zéros
M2 = np.ones((2, 3))    # matrice 2×3 de uns
print(M1)
print(M2)`}
                  </pre>
                  <div className="mt-2">
                    <p className="font-semibold">M1 :</p>
                    <pre className="text-sm bg-white p-2 border rounded">
                  {`[[0. 0. 0. 0.]
 [0. 0. 0. 0.]
 [0. 0. 0. 0.]]`}
                    </pre>
                    <p className="font-semibold mt-2">M2 :</p>
                    <pre className="text-sm bg-white p-2 border rounded">
                  {`[[1. 1. 1.]
 [1. 1. 1.]]`}
                    </pre>
                  </div>
                </div>}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-blue-600">Exercice 1.2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Soit A = np.array([[1,2,3],[4,5,6]]). Extraire l'élément de la deuxième ligne et troisième colonne.</p>
              <Button variant="outline" size="sm" onClick={() => toggleSolution('ex1-2')} className="flex items-center gap-2 mb-4">
                {showSolution['ex1-2'] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                {showSolution['ex1-2'] ? 'Masquer' : 'Voir'} la solution
              </Button>
              {showSolution['ex1-2'] && <div className="mt-4 p-4 bg-gray-50 border rounded">
                  <pre className="text-sm font-mono mb-2">
                {`A = np.array([[1, 2, 3],
              [4, 5, 6]])
element = A[1, 2]       # deuxième ligne, troisième colonne
print(element)`}
                  </pre>
                  <div className="mt-2">
                    <p className="font-semibold">Affichage :</p>
                    <pre className="text-sm bg-white p-2 border rounded">6</pre>
                    <p className="mt-2">Donc l'élément demandé est <strong>6</strong>.</p>
                  </div>
                </div>}
            </CardContent>
          </Card>
        </div>;
    }
    if (exercise.id === 3) {
      return <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-orange-700">Exercice 2.1</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Créer un vecteur contenant 10 valeurs uniformément réparties entre 0 et 1.</p>
              <Button variant="outline" size="sm" onClick={() => toggleSolution('ex2-1')} className="flex items-center gap-2 mb-4">
                {showSolution['ex2-1'] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                {showSolution['ex2-1'] ? 'Masquer' : 'Voir'} la solution
              </Button>
              {showSolution['ex2-1'] && <div className="mt-4 p-4 bg-gray-50 border rounded">
                  <pre className="text-sm font-mono mb-2">
                {`v = np.linspace(0, 1, 10)   # 10 valeurs uniformément réparties entre 0 et 1
print(v)`}
                  </pre>
                  <div className="mt-2">
                    <p className="font-semibold">Vecteur obtenu :</p>
                    <pre className="text-sm bg-white p-2 border rounded">
                  {`[0.         0.11111111 0.22222222 0.33333333 0.44444444
 0.55555556 0.66666667 0.77777778 0.88888889 1.        ]`}
                    </pre>
                  </div>
                </div>}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-orange-700">Exercice 2.2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Pour la matrice B = np.array([[10,20,30],[40,50,60]]), calculer la somme de chaque ligne et de chaque colonne.</p>
              <Button variant="outline" size="sm" onClick={() => toggleSolution('ex2-2')} className="flex items-center gap-2 mb-4">
                {showSolution['ex2-2'] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                {showSolution['ex2-2'] ? 'Masquer' : 'Voir'} la solution
              </Button>
              {showSolution['ex2-2'] && <div className="mt-4 p-4 bg-gray-50 border rounded">
                  <pre className="text-sm font-mono mb-2">
                {`B = np.array([[10, 20, 30],
              [40, 50, 60]])
row_sums = B.sum(axis=1)      # sommes par ligne
col_sums = B.sum(axis=0)      # sommes par colonne
print("Sommes des lignes :", row_sums)
print("Sommes des colonnes :", col_sums)`}
                  </pre>
                  <div className="mt-2">
                    <p className="font-semibold">Résultats :</p>
                    <pre className="text-sm bg-white p-2 border rounded">
                  {`Sommes des lignes : [ 60 150]
Sommes des colonnes : [50 70 90]`}
                    </pre>
                    <ul className="mt-2 text-sm">
                      <li>• Somme ligne 1 : <strong>60</strong></li>
                      <li>• Somme ligne 2 : <strong>150</strong></li>
                      <li>• Sommes colonnes : <strong>50</strong>, <strong>70</strong>, <strong>90</strong></li>
                    </ul>
                  </div>
                </div>}
            </CardContent>
          </Card>
        </div>;
    }
    if (exercise.id === 4) {
      return <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-orange-700">Exercice 3.1</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Soient A = np.array([[1,2],[3,4]]) et B = np.array([[2,1],[1,2]]). Calculer A + B, A * B et np.dot(A,B).</p>
              <Button variant="outline" size="sm" onClick={() => toggleSolution('ex3-1')} className="flex items-center gap-2 mb-4">
                {showSolution['ex3-1'] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                {showSolution['ex3-1'] ? 'Masquer' : 'Voir'} la solution
              </Button>
              {showSolution['ex3-1'] && <div className="mt-4 p-4 bg-gray-50 border rounded">
                  <pre className="text-sm font-mono mb-2">
                {`A = np.array([[1, 2],
              [3, 4]])
B = np.array([[2, 1],
              [1, 2]])

S = A + B          # addition
P_el = A * B       # produit terme à terme
P_mat = np.dot(A, B)  # produit matriciel

print("A + B =\\n", S)
print("A * B =\\n", P_el)
print("np.dot(A, B) =\\n", P_mat)`}
                  </pre>
                  <div className="mt-2 space-y-2">
                    <div>
                      <span className="font-semibold">A + B = </span>
                      <span className="font-mono">[[3 3][4 6]]</span>
                    </div>
                    <div>
                      <span className="font-semibold">A * B = </span>
                      <span className="font-mono">[[2 2][3 8]]</span>
                    </div>
                    <div>
                      <span className="font-semibold">np.dot(A,B) = </span>
                      <span className="font-mono">[[4 5][10 11]]</span>
                    </div>
                  </div>
                </div>}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-orange-700">Exercice 3.2</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Calculer la transposée de la matrice C = np.array([[1,2,3],[4,5,6],[7,8,9]]).</p>
              <Button variant="outline" size="sm" onClick={() => toggleSolution('ex3-2')} className="flex items-center gap-2 mb-4">
                {showSolution['ex3-2'] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                {showSolution['ex3-2'] ? 'Masquer' : 'Voir'} la solution
              </Button>
              {showSolution['ex3-2'] && <div className="mt-4 p-4 bg-gray-50 border rounded">
                  <pre className="text-sm font-mono mb-2">
                {`C = np.array([[1, 2, 3],
              [4, 5, 6],
              [7, 8, 9]])
C_T = C.T          # transposée
print(C_T)`}
                  </pre>
                  <div className="mt-2">
                    <p className="font-semibold">Transposée de C :</p>
                    <pre className="text-sm bg-white p-2 border rounded">
                  {`[[1 4 7]
 [2 5 8]
 [3 6 9]]`}
                    </pre>
                  </div>
                </div>}
            </CardContent>
          </Card>
        </div>;
    }
    if (exercise.id === 10) {
      return <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-orange-600">Matrices nilpotentes</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="mb-4">
                <p className="mb-4">
                  On rappelle qu'une matrice A∈Mn(ℝ) est dite nilpotente s'il existe un entier p∈{'{'}1,…,n{'}'} tel que A^p = 0.
                  Le plus petit de ces entiers est appelé indice de nilpotence de A.
                </p>
                <p className="mb-4">Expliquer comment fonctionne le programme suivant. </p>
              </div>
              <Button variant="outline" size="sm" onClick={() => toggleSolution('ex-nilp')} className="flex items-center gap-2 mb-4">
                {showSolution['ex-nilp'] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                {showSolution['ex-nilp'] ? 'Masquer' : 'Voir'} la solution
              </Button>
              {showSolution['ex-nilp'] && <div className="mt-4 p-4 bg-gray-50 border rounded">
                  <pre className="text-sm font-mono">
                {`import numpy as np

def Nilp(A):
    n = np.size(A, 0)
    B = np.copy(A)
    p = 1
    while np.sum(np.abs(B)) != 0 and p <= n:
        B = np.dot(B, A)
        p += 1
    if np.sum(np.abs(B)) == 0:
        print("La matrice est nilpotente d'indice", p)
    else:
        print("La matrice n'est pas nilpotente")`}
                  </pre>
                  <div className="mt-4">
                    <p className="text-sm text-muted-foreground">
                      Cette fonction teste si une matrice est nilpotente en calculant ses puissances successives jusqu'à obtenir la matrice nulle ou dépasser l'ordre n.
                    </p>
                  </div>
                </div>}
            </CardContent>
          </Card>
        </div>;
    }
    return <Card>
        <CardContent className="pt-6">
          <p className="text-muted-foreground">Contenu de l'exercice à venir...</p>
        </CardContent>
      </Card>;
  };
  if (selectedExercise) {
    const exercise = exercises.find(ex => ex.id === selectedExercise);
    if (!exercise) return null;
    return (
      <PythonModuleLayout>
        <div className="mb-8">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-2 mb-6" 
            onClick={() => setSelectedExercise(null)}
          >
            ← Retour aux exercices
          </Button>
          
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent mb-4">
              {exercise.title}
            </h1>
            <Badge 
              variant="secondary" 
              className={`${exercise.color === 'green' ? 'bg-blue-50 text-blue-600' : exercise.color === 'blue' ? 'bg-blue-100 text-blue-700' : exercise.color === 'red' ? 'bg-orange-50 text-orange-600' : 'bg-orange-100 text-orange-700'}`}
            >
              {exercise.difficulty}
            </Badge>
          </div>
        </div>

        {exercise.content ? (
          <>
            <Card className="mb-8 border-2 border-orange-200 bg-gradient-to-br from-orange-500 to-pink-50 shadow-lg">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-orange-600">
                  <Calculator className="h-6 w-6" />
                  Objectif de l'exercice
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-orange-600 font-medium mb-4">
                  {exercise.content.objective}
                </p>
              </CardContent>
            </Card>

            {/* Énoncé */}
            <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-50 to-indigo-50 shadow-lg mb-4">
              <CardHeader>
                <CardTitle className="flex items-center gap-3 text-blue-700">
                  <BookOpen className="h-6 w-6" />
                  Énoncé
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-blue-700 whitespace-pre-line">{exercise.content.enonce}</p>
              </CardContent>
            </Card>

            {/* Bouton pour afficher/masquer la correction */}
            <div className="flex justify-center mb-4">
              <Button 
                variant="outline" 
                onClick={() => toggleCorrection(0)}
                className="flex items-center gap-2 border-blue-200 text-blue-600 hover:bg-blue-50"
              >
                {showCorrections.has(0) ? (
                  <>
                    <ChevronUp className="h-4 w-4" />
                    Masquer la correction
                  </>
                ) : (
                  <>
                    <ChevronDown className="h-4 w-4" />
                    Voir la correction
                  </>
                )}
              </Button>
            </div>

            {/* Correction (affichée conditionnellement) */}
            {showCorrections.has(0) && (
              <Card className="border-2 border-blue-200 bg-gradient-to-br from-blue-500 to-emerald-50 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-blue-600">
                    <Code className="h-6 w-6" />
                    Correction
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="bg-gray-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-blue-600 text-sm font-mono">
                      <code>{exercise.content.correction}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
            )}
          </>
        ) : renderExerciseContent()}
        
        <ModuleNavigationCards 
          currentModule={{
            id: 1,
            title: "Matrices",
            slug: "matrices",
            color: "green"
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
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-500 to-blue-600 bg-clip-text text-transparent mb-4">
          Module 1 : Exercices - Matrices NumPy
        </h1>
        <p className="text-xl text-muted-foreground">
          Exercices pratiques sur les matrices et NumPy
        </p>
      </div>

      {!showQCM && !selectedExercise && (
        <>
          {/* Section QCM */}
          <Card className="mb-8 hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setShowQCM(true)}>
            <CardHeader className="bg-gradient-to-r from-blue-500 to-blue-50">
              <CardTitle className="flex items-center gap-3">
                <Trophy className="h-8 w-8 text-blue-600" />
                <div>
                  <h2 className="text-2xl text-blue-600">QCM d'évaluation</h2>
                  <p className="text-sm text-blue-600 mt-1">Testez vos connaissances sur les matrices NumPy</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex items-center justify-between">
                <p className="text-gray-600">20 questions pour évaluer votre niveau</p>
                <Button variant="outline" className="flex items-center gap-2">
                  <Play className="h-4 w-4" />
                  Commencer le QCM
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8">
        <CardHeader>
              <CardTitle className="flex items-center gap-3 text-blue-600">
                <Target className="h-6 w-6" />
                Objectifs des exercices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Badge variant="outline" className="mb-2">Création de matrices</Badge>
                  <p className="text-sm text-muted-foreground">
                    Maîtriser les différentes méthodes de création
                  </p>
                </div>
                <div className="space-y-2">
                  <Badge variant="outline" className="mb-2">Opérations matricielles</Badge>
                  <p className="text-sm text-muted-foreground">
                    Effectuer des calculs sur les matrices
                  </p>
                </div>
                <div className="space-y-2">
                  <Badge variant="outline" className="mb-2">Indexation</Badge>
                  <p className="text-sm text-muted-foreground">
                    Accéder et modifier les éléments des matrices
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Grille d'exercices */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exercises.map(exercise => (
              <Card 
                key={exercise.id} 
                className={`hover:shadow-lg transition-shadow cursor-pointer ${
                  exercise.color === 'green' ? 'border border-blue-200' : 
                  exercise.color === 'blue' ? 'border border-blue-200' : 
                  exercise.color === 'red' ? 'border border-orange-200' : 
                  'border border-orange-200'
                }`} 
                onClick={() => setSelectedExercise(exercise.id)}
              >
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <Calculator className={`h-6 w-6 ${
                      exercise.color === 'green' ? 'text-blue-600' : 
                      exercise.color === 'blue' ? 'text-blue-600' : 
                      exercise.color === 'red' ? 'text-orange-600' : 
                      'text-orange-600'
                    }`} />
                    <div>
                      <CardTitle className="text-lg">{exercise.title}</CardTitle>
                      <Badge variant="secondary" className={`mt-1 ${
                        exercise.color === 'green' ? 'bg-blue-50 text-blue-600' : 
                        exercise.color === 'blue' ? 'bg-blue-100 text-blue-700' : 
                        exercise.color === 'red' ? 'bg-orange-50 text-orange-600' : 
                        'bg-orange-100 text-orange-700'
                      }`}>
                        {exercise.difficulty}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground mb-4">
                    {exercise.description}
                  </p>
                  <Button className={`w-full ${
                    exercise.color === 'green' ? 'bg-blue-50 hover:bg-blue-50' : 
                    exercise.color === 'blue' ? 'bg-blue-600 hover:bg-blue-700' : 
                    exercise.color === 'red' ? 'bg-orange-50 hover:bg-orange-50' : 
                    'bg-orange-600 hover:bg-orange-700'
                  }`}>
                    <Play className="h-4 w-4 mr-2" />
                    Commencer l'exercice
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </>
      )}

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
            <ArrowLeft className="h-4 w-4" />
            Retour aux exercices
          </Button>

          <Card className="mb-8 border-2 border-blue-200 bg-gradient-to-br from-blue-500 to-blue-50 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-blue-600">
            <Trophy className="h-6 w-6" />
            QCM d'évaluation - Testez vos connaissances
          </CardTitle>
        </CardHeader>
        <CardContent>
          {!qcmSubmitted ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                    <p className="text-blue-600 font-medium">
                  Répondez aux 20 questions pour évaluer votre niveau sur les matrices NumPy
                </p>
                    <Badge variant="outline" className="bg-blue-50 text-blue-600">
                  {Object.keys(qcmAnswers).length}/20 répondues
                </Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {qcmQuestions.map((question, index) => (
                      <Card key={question.id} className="border border-blue-200 hover:border-blue-200 transition-colors">
                    <CardContent className="pt-6">
                      <div className="flex items-center gap-2 mb-3">
                            <Badge variant="outline" className="bg-blue-50 text-blue-600">
                          Question {question.id}
                        </Badge>
                        {qcmAnswers[question.id] && (
                          <CheckCircle className="h-4 w-4 text-blue-600" />
                        )}
                      </div>
                      <p className="mb-4 text-sm">{question.question}</p>
                      <div className="space-y-2">
                        {question.options.map((option, optIndex) => (
                              <label key={optIndex} className="flex items-center gap-2 p-2 rounded hover:bg-blue-50 cursor-pointer">
                            <input
                              type="radio"
                              name={`question-${question.id}`}
                              value={option}
                              checked={qcmAnswers[question.id] === option}
                              onChange={(e) => handleQCMAnswer(question.id, e.target.value)}
                                  className="text-blue-600"
                            />
                            <span className="text-sm">{option}</span>
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
                      className="bg-blue-50 hover:bg-blue-50 text-white px-8 py-3"
                >
                  <Trophy className="h-4 w-4 mr-2" />
                  Valider le QCM
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              {/* Résultats en haut */}
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-3">
                  <Trophy className="h-8 w-8 text-orange-600" />
                      <h3 className="text-2xl font-bold text-blue-600">Résultats du QCM</h3>
                </div>
                
                    <div className="bg-gradient-to-r from-blue-500 to-blue-50 rounded-lg p-6 border-2 border-blue-200">
                      <div className="text-4xl font-bold text-blue-600 mb-2">
                    {qcmScore?.toFixed(1)}/20
                  </div>
                  <div className="flex items-center justify-center gap-2 mb-4">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-6 w-6 ${i < Math.floor((qcmScore || 0) / 4) ? 'text-orange-600 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                      <p className="text-blue-600 font-medium">
                    {qcmScore && qcmScore >= 16 ? "Excellent ! Vous maîtrisez parfaitement les matrices NumPy." :
                     qcmScore && qcmScore >= 12 ? "Bon niveau ! Quelques révisions pour perfectionner." :
                     qcmScore && qcmScore >= 8 ? "Niveau correct. Continuez à vous entraîner." :
                     "Niveau à améliorer. Revenez sur les bases des matrices NumPy."}
                  </p>
                </div>
              </div>

              {/* Détail des réponses */}
              <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-blue-600 text-center">
                  Détail de vos réponses
                </h4>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {qcmQuestions.map((question) => {
                    const userAnswer = qcmAnswers[question.id];
                    const isCorrect = userAnswer === question.answer;
                    
                    return (
                      <Card 
                        key={question.id} 
                        className={`border-2 transition-colors ${
                          isCorrect 
                            ? 'border-blue-200 bg-gradient-to-br from-blue-500 to-emerald-50' 
                            : 'border-orange-200 bg-gradient-to-br from-orange-500 to-pink-50'
                        }`}
                      >
                        <CardContent className="pt-6">
                          <div className="flex items-center gap-2 mb-3">
                            <Badge variant="outline" className={`${
                              isCorrect ? 'bg-blue-50 text-blue-600' : 'bg-orange-50 text-orange-600'
                            }`}>
                              Question {question.id}
                            </Badge>
                            {isCorrect ? (
                              <CheckCircle className="h-4 w-4 text-blue-600" />
                            ) : (
                              <div className="h-4 w-4 text-orange-600">✗</div>
                            )}
                          </div>
                          
                          <p className="mb-4 text-sm font-medium">{question.question}</p>
                          
                          <div className="space-y-2">
                            {question.options.map((option, optIndex) => {
                              const isUserAnswer = userAnswer === option;
                              const isCorrectAnswer = question.answer === option;
                              
                              let optionStyle = "flex items-center gap-2 p-2 rounded";
                              let textStyle = "text-sm";
                              
                              if (isCorrectAnswer) {
                                // Bonne réponse toujours en vert
                                optionStyle += " bg-blue-50 border border-blue-200";
                                textStyle += " font-semibold text-blue-600";
                              } else if (isUserAnswer && !isCorrect) {
                                // Mauvaise réponse de l'utilisateur en rouge
                                optionStyle += " bg-orange-50 border border-orange-200";
                                textStyle += " font-semibold text-orange-600";
                              } else {
                                // Autres options neutres
                                optionStyle += " bg-gray-50";
                                textStyle += " text-gray-600";
                              }
                              
                              return (
                                <div key={optIndex} className={optionStyle}>
                                  <div className="flex items-center gap-2">
                                    {isCorrectAnswer && (
                                      <CheckCircle className="h-4 w-4 text-blue-600" />
                                    )}
                                    {isUserAnswer && !isCorrect && (
                                      <div className="h-4 w-4 text-orange-600">✗</div>
                                    )}
                                    {!isCorrectAnswer && !isUserAnswer && (
                                      <div className="h-4 w-4 text-gray-400">○</div>
                                    )}
                                  </div>
                                  <span className={textStyle}>{option}</span>
                                </div>
                              );
                            })}
                          </div>
                          
                          {!isCorrect && (
                            <div className="mt-3 p-2 bg-orange-50 border border-orange-200 rounded">
                              <p className="text-sm text-orange-600">
                                <span className="font-semibold">Votre réponse :</span> {userAnswer}
                              </p>
                              <p className="text-sm text-orange-600">
                                <span className="font-semibold">Bonne réponse :</span> {question.answer}
                              </p>
                            </div>
                          )}
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
              
              <div className="flex gap-4 justify-center">
                <Button 
                  variant="outline" 
                  onClick={restartQCM}
                      className="border-blue-200 text-blue-600 hover:bg-blue-50"
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

      {/* Navigation retour au cours */}
      <ModuleNavigationCards 
        currentModule={{
          id: 1,
          title: "Matrices",
          slug: "matrices",
          color: "green"
        }}
        isExercisePage={true}
        totalExercises={exercises.length}
        currentExerciseId={selectedExercise}
        onNavigate={handleNavigate}
      />
    </PythonModuleLayout>
  );
};

export default PythonMatricesExercicesPage;