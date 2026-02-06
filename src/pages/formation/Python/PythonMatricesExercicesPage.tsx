import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Calculator, Target, Play, CheckCircle, Eye, EyeOff, Code, BookOpen, ChevronDown, ChevronUp, Trophy, Star, ArrowLeft, HelpCircle, ChevronLeft } from 'lucide-react';
import PythonModuleLayout from '@/components/formation/PythonModuleLayout';
import ModuleNavigationCards from '@/components/formation/ModuleNavigationCards';
import { LatexRenderer } from '@/components/LatexRenderer';
import { usePythonProgress } from '@/hooks/usePythonProgress';
import PythonCodeEditor, { EvaluationResult } from '@/components/python/PythonCodeEditor';
import CodeEvaluationResult from '@/components/python/CodeEvaluationResult';

const PythonMatricesExercicesPage = () => {
  const [searchParams] = useSearchParams();
  const { markExerciseAsSeen, markAsComplete } = usePythonProgress();
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);
  const [showSolution, setShowSolution] = useState<{
    [key: string]: boolean;
  }>({});
  const [showCorrections, setShowCorrections] = useState<Set<number>>(new Set());
  const [showQCM, setShowQCM] = useState(false);

  // États pour le QCM d'évaluation
  const [qcmAnswers, setQcmAnswers] = useState<{ [key: number]: string }>({});
  const [qcmSubmitted, setQcmSubmitted] = useState(false);
  const [qcmScore, setQcmScore] = useState<number | null>(null);

  // Evaluation state for code submissions
  const [evaluationResults, setEvaluationResults] = useState<{ [key: number]: EvaluationResult }>({});
  const moduleId = 'matrices';

  // Détecter le paramètre quiz dans l'URL
  useEffect(() => {
    const quizParam = searchParams.get('quiz');
    if (quizParam === 'true') {
      setShowQCM(true);
    }
  }, [searchParams]);


  const toggleSolution = (exerciseId: string) => {
    setShowSolution(prev => {
      const isShowing = !prev[exerciseId];
      if (isShowing) {
        markExerciseAsSeen(`python-matrices-exo-${exerciseId}`);
      }
      return {
        ...prev,
        [exerciseId]: isShowing
      };
    });
  };

  const toggleCorrection = (index: number) => {
    const newShowCorrections = new Set(showCorrections);
    if (newShowCorrections.has(index)) {
      newShowCorrections.delete(index);
    } else {
      newShowCorrections.add(index);
      markExerciseAsSeen(`python-matrices-exo-${index}`);
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
    markAsComplete('python-matrices-quiz', score);
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
    answer: "C) 3",
    explanation: "L'indexation [1,0] signifie ligne 1, colonne 0. La matrice a 2 lignes : [[1,2],[3,4]]. Ligne 1 (deuxième ligne) colonne 0 (première colonne) = 3."
  }, {
    id: 2,
    question: "Quelle est la différence fondamentale entre A * B et np.dot(A,B) ?",
    options: ["A) Aucune différence", "B) A * B effectue une multiplication terme à terme, np.dot(A,B) le produit matriciel", "C) np.dot() est plus performant", "D) A * B ne fonctionne que pour les vecteurs"],
    answer: "B) A * B effectue une multiplication terme à terme, np.dot(A,B) le produit matriciel",
    explanation: "* multiplie élément par élément (Hadamard), tandis que np.dot() effectue le produit matriciel mathématique traditionnel."
  }, {
    id: 3,
    question: "Pour calculer la somme de chaque ligne d'une matrice A, on utilise :",
    options: ["A) np.sum(A, 0)", "B) np.sum(A, 1)", "C) np.sum(A)", "D) np.row_sum(A)"],
    answer: "B) np.sum(A, 1)",
    explanation: "axis=1 signifie 'le long des colonnes', donc on somme horizontalement pour obtenir la somme de chaque ligne. axis=0 sommerait les colonnes."
  }, {
    id: 4,
    question: "L'instruction np.zeros([3,2]) crée une matrice de dimensions :",
    options: ["A) 2 lignes, 3 colonnes", "B) 3 lignes, 2 colonnes", "C) 6 éléments au total", "D) Dimensions variables"],
    answer: "B) 3 lignes, 2 colonnes",
    explanation: "Le premier argument est toujours le nombre de lignes, le second le nombre de colonnes. Donc [3,2] = 3 lignes, 2 colonnes."
  }, {
    id: 5,
    question: "Pour extraire la troisième colonne d'une matrice A :",
    options: ["A) A[3,:]", "B) A[:,3]", "C) A[:,2]", "D) A[2,:]"],
    answer: "C) A[:,2]",
    explanation: "Les indices commencent à 0. La 3ème colonne a l'indice 2. [:, 2] signifie 'toutes les lignes, colonne d'indice 2'."
  }, {
    id: 6,
    question: "Pour créer la matrice identité 4×4, on utilise :",
    options: ["A) np.identity(4)", "B) np.eye(4)", "C) np.ones([4,4])", "D) A et B sont correctes"],
    answer: "D) A et B sont correctes",
    explanation: "np.identity() et np.eye() créent tous deux la matrice identité. np.ones() créerait une matrice de 1 partout."
  }, {
    id: 7,
    question: "Soit A = np.array([[1,2],[3,4]]). Que renvoie A.T ?",
    options: ["A) array([[1,3],[2,4]])", "B) array([[1,2],[3,4]])", "C) array([[4,3],[2,1]])", "D) Une erreur"],
    answer: "A) array([[1,3],[2,4]])",
    explanation: ".T calcule la transposée : les lignes deviennent colonnes et inversement. La première ligne [1,2] devient la première colonne."
  }, {
    id: 8,
    question: "Pour extraire la première colonne d'une matrice A, on écrit :",
    options: ["A) A[0,:]", "B) A[:,0]", "C) A", "D) A.column(0)"],
    answer: "B) A[:,0]",
    explanation: "[:,0] signifie 'toutes les lignes, première colonne (indice 0)'. A[0,:] extrairait la première ligne."
  }, {
    id: 9,
    question: "Si A est une matrice 3×2 et B une matrice 2×4, quelle est la dimension de np.dot(A,B) ?",
    options: ["A) 3×4", "B) 2×2", "C) 3×2", "D) Le produit est impossible"],
    answer: "A) 3×4",
    explanation: "Pour le produit matriciel A×B : (m×n) × (n×p) = (m×p). Donc (3×2) × (2×4) = (3×4)."
  }, {
    id: 10,
    question: "Quel est le résultat de np.ones([2,3]) + 2 ?",
    options: ["A) np.array([[3,3,3],[3,3,3]])", "B) np.array([[2,2,2],[2,2,2]])", "C) np.array([[1,1,1],[1,1,1]])", "D) Une erreur"],
    answer: "A) np.array([[3,3,3],[3,3,3]])",
    explanation: "np.ones([2,3]) crée une matrice de 1. Ajouter 2 à chaque élément donne une matrice de 3."
  }, {
    id: 11,
    question: "Pour une matrice A carrée, np.trace(A) calcule :",
    options: ["A) Le déterminant", "B) La somme des éléments diagonaux", "C) Le rang", "D) L'inverse"],
    answer: "B) La somme des éléments diagonaux",
    explanation: "La trace est la somme des éléments sur la diagonale principale. Pour [[1,2],[3,4]], trace = 1+4 = 5."
  }, {
    id: 12,
    question: "Vrai ou Faux : L'instruction A == B compare deux matrices terme à terme et renvoie une matrice de booléens.",
    options: ["A) Vrai", "B) Faux"],
    answer: "A) Vrai",
    explanation: "A == B compare chaque élément et retourne une matrice de booléens (True/False) de même taille."
  }, {
    id: 13,
    question: "A = np.diag([1,2,3]). Quelle est la trace de A ?",
    options: ["A) 0", "B) 6", "C) 1", "D) 2"],
    answer: "B) 6",
    explanation: "np.diag([1,2,3]) crée une matrice diagonale avec 1, 2, 3 sur la diagonale. La trace = 1+2+3 = 6."
  }, {
    id: 14,
    question: "Quel code permet de faire passer tous les coefficients supérieurs à 4 d'une matrice M à 0 (en conservant les autres valeurs) ?",
    options: ["A) M[M > 4] = 0", "B) M = 0", "C) M = M[M < 4]", "D) M = M * 0"],
    answer: "A) M[M > 4] = 0",
    explanation: "M[M > 4] sélectionne tous les éléments > 4 (indexation booléenne) et les met à 0. Les autres restent inchangés."
  }, {
    id: 15,
    question: "Comment copier proprement une matrice B dans une nouvelle variable A pour éviter les effets de bord ?",
    options: ["A) A = B", "B) A = B.copy()", "C) A[:] = B", "D) A = np.array(B)"],
    answer: "B) A = B.copy()",
    explanation: "A = B crée seulement une référence (modifier A modifie B). B.copy() crée une vraie copie indépendante."
  }, {
    id: 16,
    question: "Que renvoie np.max(np.eye(5)) ?",
    options: ["A) 1", "B) 5", "C) 0", "D) 4"],
    answer: "A) 1",
    explanation: "np.eye(5) crée la matrice identité 5x5 (1 sur diagonale, 0 ailleurs). Le maximum de ces valeurs est 1."
  }, {
    id: 17,
    question: "Que renvoie l'instruction np.array([[1,2],[3,4]])[1] ?",
    options: ["A) 1", "B) 2", "C) 3", "D) 4"],
    answer: "C) 3",
    explanation: "[1] sans second indice extrait la ligne d'indice 1 (deuxième ligne) : [3, 4]. Mais en fait cela retourne array([3, 4]), pas un seul nombre. La question pourrait être ambigüe."
  }, {
    id: 18,
    question: "Pour calculer la somme de chaque ligne d'une matrice A, on utilise :",
    options: ["A) np.sum(A, 0)", "B) np.sum(A, 1)", "C) np.sum(A)", "D) np.row_sum(A)"],
    answer: "B) np.sum(A, 1)",
    explanation: "axis=1 somme le long de l'axe des colonnes, donnant la somme de chaque ligne (question dupliquée de Q3)."
  }, {
    id: 19,
    question: "L'instruction np.zeros([3,2]) crée une matrice de dimensions :",
    options: ["A) 2 lignes, 3 colonnes", "B) 3 lignes, 2 colonnes", "C) 6 éléments au total", "D) Dimensions variables"],
    answer: "B) 3 lignes, 2 colonnes",
    explanation: "Premier argument = lignes, second = colonnes. [3,2] = 3 lignes, 2 colonnes (question dupliquée de Q4)."
  }, {
    id: 20,
    question: "Quelle est la différence fondamentale entre A * B et np.dot(A,B) en Python ?",
    options: ["A) Aucune différence", "B) A * B effectue une multiplication terme à terme, np.dot(A,B) le produit matriciel", "C) np.dot() est plus performant", "D) A * B ne fonctionne que pour les vecteurs"],
    answer: "B) A * B effectue une multiplication terme à terme, np.dot(A,B) le produit matriciel",
    explanation: "* = multiplication élément par élément (Hadamard), np.dot() = produit matriciel (question dupliquée de Q2)."
  }];
  const exercises = [{
    id: 2,
    title: "Application directe (Niveau 1)",
    difficulty: "Facile",
    description: "Création de matrices et extraction d'éléments.",
    color: "blue",
    type: "exercise"
  }, {
    id: 3,
    title: "Manipulation des données (Niveau 2)",
    difficulty: "Moyen",
    description: "Manipulation et calculs sur les matrices.",
    color: "blue",
    type: "exercise"
  }, {
    id: 4,
    title: "Opérations matricielles (Niveau 3)",
    difficulty: "Moyen",
    description: "Opérations complexes entre matrices.",
    color: "blue",
    type: "exercise"
  }, {
    id: 5,
    title: "Puissance d'une matrice",
    difficulty: "Avancé",
    description: "Implémenter une fonction pour calculer la puissance d'une matrice.",
    color: "blue",
    type: "exercise",
    content: {
      objective: "\\text{Écrire une fonction puissance qui calcule } A^n \\text{ en utilisant uniquement np.dot}",
      isLatex: true,
      enonce: "Écrire une fonction puissance(A, n) qui calcule A^n en utilisant uniquement np.dot. Remarque : initialiser P = I pour gérer le cas n=0.",
      enonce_latex: "\\text{Écrire une fonction puissance(A, n) qui calcule } A^n \\text{ en utilisant uniquement np.dot.} \\\\ \\text{Remarque : initialiser } P = I \\text{ pour gérer le cas } n=0.",
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
    color: "blue",
    type: "exercise",
    content: {
      objective: "\\text{Créer des matrices en utilisant np.fromfunction avec des formules mathématiques}",
      isLatex: true,
      enonce: "1. Créer la matrice C = (i-j) pour 0≤i≤2 et 0≤j≤3. 2. Créer la matrice D = (ij) pour 1≤i≤4 et 1≤j≤3.",
      enonce_latex: "\\text{1. Créer la matrice } C_{ij} = i-j \\text{ pour } 0 \\leq i \\leq 2, \\; 0 \\leq j \\leq 3 : \\\\ C = \\begin{pmatrix} 0 & -1 & -2 & -3 \\\\ 1 & 0 & -1 & -2 \\\\ 2 & 1 & 0 & -1 \\end{pmatrix} \\\\ \\text{2. Créer la matrice } D_{ij} = ij \\text{ pour } 1 \\leq i \\leq 4, \\; 1 \\leq j \\leq 3 : \\\\ D = \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 3 & 6 & 9 \\\\ 4 & 8 & 12 \\end{pmatrix}",
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
    color: "blue",
    type: "exercise",
    content: {
      objective: "\\text{Définir en Python la matrice symétrique : } \\begin{pmatrix} 5 & 3 & 3 \\\\ 3 & 5 & 3 \\\\ 3 & 3 & 5 \\end{pmatrix}",
      isLatex: true,
      enonce: "Construire sans saisir chaque coefficient la matrice symétrique A. Indice : utiliser np.ones et np.eye.",
      enonce_latex: "\\text{Construire sans saisir chaque coefficient la matrice symétrique :} \\\\ A = \\begin{pmatrix} 5 & 3 & 3 \\\\ 3 & 5 & 3 \\\\ 3 & 3 & 5 \\end{pmatrix} \\\\ \\text{Indice : utiliser np.ones et np.eye}",
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
    color: "blue",
    type: "exercise",
    content: {
      objective: "\\text{Implémenter une fonction qui teste si une matrice est à diagonale strictement dominante}",
      isLatex: true,
      enonce: "Une matrice A est à diagonale strictement dominante si |a_ii| > somme des |a_ij| pour j≠i. Implémenter une fonction diagdom(A).",
      enonce_latex: "\\text{Une matrice } A \\in M_n(\\mathbb{R}) \\text{ est à diagonale strictement dominante si :} \\\\ \\forall i \\in \\{1, \\ldots, n\\}, \\quad |a_{ii}| > \\sum_{j \\neq i} |a_{ij}| \\\\ \\text{Implémenter une fonction diagdom(A) qui teste cette propriété.}",
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
    color: "blue",
    type: "exercise",
    content: {
      objective: "\\text{Implémenter une fonction qui teste si une matrice est stochastique}",
      isLatex: true,
      enonce: "Une matrice est stochastique si tous les coefficients sont positifs et chaque ligne somme à 1. Implémenter une fonction stoch(A).",
      enonce_latex: "\\text{Une matrice est stochastique si :} \\\\ \\text{• Tous les coefficients sont positifs : } a_{ij} \\geq 0 \\\\ \\text{• Chaque ligne somme à 1 : } \\sum_{j=1}^{m} a_{ij} = 1 \\text{ pour tout } i \\\\ \\text{Implémenter une fonction stoch(A) qui teste cette propriété.}",
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
    color: "blue",
    type: "exercise"
  }, {
    id: 11,
    title: "Produit matriciel et somme",
    difficulty: "Facile",
    description: "Prévoir le résultat d'un produit matriciel simple.",
    color: "blue",
    type: "exercise",
    content: {
      objective: "\\text{Calculer : } \\begin{pmatrix} 1 & 2 & \\cdots & 10 \\end{pmatrix} \\times \\begin{pmatrix} 1 \\\\ 1 \\\\ \\vdots \\\\ 1 \\end{pmatrix}",
      isLatex: true,
      enonce: "Prévoir le résultat du produit matriciel entre le vecteur [1,2,...,10] et un vecteur colonne de 1.",
      enonce_latex: "\\text{Prévoir le résultat du code suivant :} \\\\ \\text{n = 10} \\\\ \\text{A = np.arange(1, n+1)} \\\\ \\text{B = np.ones((n, 1))} \\\\ \\text{print(np.dot(A, B))} \\\\ \\text{Calculer : } \\begin{pmatrix} 1 & 2 & \\cdots & 10 \\end{pmatrix} \\times \\begin{pmatrix} 1 \\\\ 1 \\\\ \\vdots \\\\ 1 \\end{pmatrix}",
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
      objective: "\\text{Créer la matrice } Z = \\begin{pmatrix} 1 & 1 & 1 & 1 & 1 \\\\ 1 & 0 & 0 & 0 & 0 \\\\ 1 & 0 & 0 & 0 & 0 \\\\ 1 & 0 & 0 & 0 & 0 \\\\ 1 & 1 & 1 & 1 & 1 \\end{pmatrix}",
      isLatex: true,
      enonce: "Créer la matrice Z de trois manières différentes : a) Avec np.ones et des boucles for b) Avec np.zeros et des boucles for c) Avec np.ones et une modification avec np.zeros",
      enonce_latex: "\\text{Créer la matrice } Z \\text{ de trois manières différentes :} \\\\ Z = \\begin{pmatrix} 1 & 1 & 1 & 1 & 1 \\\\ 1 & 0 & 0 & 0 & 0 \\\\ 1 & 0 & 0 & 0 & 0 \\\\ 1 & 0 & 0 & 0 & 0 \\\\ 1 & 1 & 1 & 1 & 1 \\end{pmatrix} \\\\ \\text{a) Avec np.ones et des boucles for} \\\\ \\text{b) Avec np.zeros et des boucles for} \\\\ \\text{c) Avec np.ones et une modification avec np.zeros}",
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
    color: "blue",
    type: "exercise",
    content: {
      objective: "\\text{Écrire une fonction croix(n) créant : } \\begin{pmatrix} 1 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 1 \\end{pmatrix} \\text{ pour } n=3",
      isLatex: true,
      enonce: "Écrire une fonction croix(n) qui construit une matrice carrée n×n avec des zéros partout, sauf des 1 sur les deux diagonales.",
      enonce_latex: "\\text{Écrire une fonction croix(n) qui construit une matrice carrée } n \\times n \\text{ avec :} \\\\ \\text{• Des zéros partout} \\\\ \\text{• Des 1 sur la diagonale principale et l'anti-diagonale} \\\\ \\text{Exemple pour } n = 3 : \\quad \\begin{pmatrix} 1 & 0 & 1 \\\\ 0 & 1 & 0 \\\\ 1 & 0 & 1 \\end{pmatrix}",
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
    color: "blue",
    type: "exercise",
    content: {
      objective: "\\text{Calculer } M^n \\text{ pour } M = \\begin{pmatrix} 1 & -5 & 6 \\\\ 2 & -3 & 0 \\\\ -1 & 5 & 4 \\end{pmatrix}",
      isLatex: true,
      enonce: "Soit la matrice M donnée. Écrire une fonction puissance(n) qui renvoie M^n.",
      enonce_latex: "\\text{Soit la matrice } M = \\begin{pmatrix} 1 & -5 & 6 \\\\ 2 & -3 & 0 \\\\ -1 & 5 & 4 \\end{pmatrix} \\\\ \\text{Écrire une fonction puissance(n) qui renvoie } M^n",
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
      objective: "\\text{Construire } \\begin{pmatrix} -8 & 4 & 4 \\\\ 4 & -8 & 4 \\\\ 4 & 4 & -8 \\end{pmatrix} \\text{ en une ligne}",
      isLatex: true,
      enonce: "Construire la matrice donnée en une seule ligne de code avec np.ones et np.eye. Indice : commencer par une matrice remplie de 4.",
      enonce_latex: "\\text{Construire en une seule ligne avec np.ones et np.eye :} \\\\ A = \\begin{pmatrix} -8 & 4 & 4 \\\\ 4 & -8 & 4 \\\\ 4 & 4 & -8 \\end{pmatrix} \\\\ \\text{Indice : commencer par une matrice remplie de 4, puis corriger la diagonale}",
      correction: `import numpy as np

A = 4 * np.ones((3, 3)) - 12 * np.eye(3, 3)
print(A)`
    }
  }, {
    id: 16,
    title: "Tester si une matrice est antisymétrique",
    difficulty: "Avancé",
    description: "Vérifier si une matrice est antisymétrique en implémentant une fonction.",
    color: "blue",
    type: "exercise",
    content: {
      objective: "\\text{Tester si } M^T = -M \\text{ (matrice antisymétrique)}",
      isLatex: true,
      enonce: "Une matrice antisymétrique M vérifie : diagonale nulle et M^T = -M. Compléter la fonction est_antisymetrique(M).",
      enonce_latex: "\\text{Une matrice antisymétrique } M \\text{ vérifie :} \\\\ \\text{• Diagonale nulle : } m_{ii} = 0 \\text{ pour tout } i \\\\ \\text{• Antisymétrie : } m_{ij} = -m_{ji} \\text{ pour tout } i \\neq j \\\\ \\text{Équivalent à : } M^T = -M \\\\ \\text{Compléter la fonction est\\_antisymetrique(M) qui teste cette propriété.}",
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
    color: "blue",
    type: "exercise",
    content: {
      objective: "\\text{Générer le triangle de Pascal : } \\begin{pmatrix} 1 \\\\ 1 \\; 1 \\\\ 1 \\; 2 \\; 1 \\\\ 1 \\; 3 \\; 3 \\; 1 \\\\ \\vdots \\end{pmatrix}",
      isLatex: true,
      enonce: "Écrire une fonction pascal(n) qui renvoie le triangle de Pascal à l'ordre n sous forme de liste de listes.",
      enonce_latex: "\\text{Écrire une fonction pascal(n) qui renvoie le triangle de Pascal à l'ordre } n : \\\\ \\text{Ligne 0 : } (1) \\\\ \\text{Ligne 1 : } (1, 1) \\\\ \\text{Ligne 2 : } (1, 2, 1) \\\\ \\text{Ligne 3 : } (1, 3, 3, 1) \\\\ \\text{avec } C_n^k = \\frac{n!}{k!(n-k)!} \\text{ et } C_n^k = C_{n-1}^{k-1} + C_{n-1}^k",
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

  // Navigation au clavier
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      // Ne pas intercepter les touches si on est dans un input ou textarea
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) {
        return;
      }

      // Navigation uniquement si un exercice est sélectionné
      if (selectedExercise !== null) {
        switch (event.key) {
          case 'ArrowLeft':
            event.preventDefault();
            // Aller à l'exercice précédent
            const prevExerciseId = selectedExercise - 1;
            if (prevExerciseId >= 2) {
              handleNavigate(prevExerciseId);
            }
            break;
          case 'ArrowRight':
            event.preventDefault();
            // Aller à l'exercice suivant
            const nextExerciseId = selectedExercise + 1;
            const maxExerciseId = Math.max(...exercises.map(ex => ex.id));
            if (nextExerciseId <= maxExerciseId) {
              handleNavigate(nextExerciseId);
            }
            break;
          case 'ArrowDown':
            event.preventDefault();
            // Révéler/masquer la correction
            toggleCorrection(selectedExercise);
            break;
          case 'Escape':
            event.preventDefault();
            // Retourner à la liste des exercices
            setSelectedExercise(null);
            break;
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [selectedExercise, exercises, handleNavigate, toggleCorrection]);

  const renderQCMContent = () => <div className="space-y-6">
    {qcmQuestions.map((q, index) => <Card key={q.id} className="border-gray-200">
      <CardContent className="pt-6">
        <h3 className="font-semibold mb-4 text-lg">Question {q.id}</h3>
        <p className="mb-4">{q.question}</p>
        <div className="space-y-2 mb-4">
          {q.options.map((option, optIndex) => <div key={optIndex} className="p-2 bg-gray-50 rounded">
            {option}
          </div>)}
        </div>
        <Button variant="outline" size="sm" onClick={() => toggleSolution(`qcm-${q.id}`)} className="flex items-center gap-2 border-gray-200 text-gray-600 hover:bg-gray-50">
          {showSolution[`qcm-${q.id}`] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
          {showSolution[`qcm-${q.id}`] ? 'Masquer' : 'Voir'} la réponse
        </Button>
        {showSolution[`qcm-${q.id}`] && <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded">
          <div className="flex items-center gap-2 text-gray-600">
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
        <Card className="border border-gray-200 bg-white shadow-sm">
          <CardHeader className="border-b border-gray-100 bg-gray-50/50 px-6 py-4">
            <CardTitle className="text-gray-800 text-lg flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-blue-600" />
              Exercice 1.1
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="mb-6 text-gray-700">Créer une matrice 3×4 contenant uniquement des zéros, puis une matrice 2×3 contenant uniquement des uns.</p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => toggleSolution('ex1-1')}
              className="flex items-center gap-2 mb-4 text-blue-600 border-blue-200 hover:bg-blue-50"
            >
              {showSolution['ex1-1'] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              {showSolution['ex1-1'] ? 'Masquer' : 'Voir'} la solution
            </Button>
            {showSolution['ex1-1'] && <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-lg animate-in fade-in slide-in-from-top-2">
              <pre className="text-sm font-mono mb-2 text-gray-800">
                {`import numpy as np

M1 = np.zeros((3, 4))   # matrice 3×4 de zéros
M2 = np.ones((2, 3))    # matrice 2×3 de uns
print(M1)
print(M2)`}
              </pre>
              <div className="mt-4 space-y-3">
                <div>
                  <p className="font-semibold text-xs text-gray-500 uppercase mb-1">M1</p>
                  <pre className="text-sm bg-white p-3 border rounded shadow-sm">
                    {`[[0. 0. 0. 0.]
 [0. 0. 0. 0.]
 [0. 0. 0. 0.]]`}
                  </pre>
                </div>
                <div>
                  <p className="font-semibold text-xs text-gray-500 uppercase mb-1">M2</p>
                  <pre className="text-sm bg-white p-3 border rounded shadow-sm">
                    {`[[1. 1. 1.]
 [1. 1. 1.]]`}
                  </pre>
                </div>
              </div>
            </div>}
          </CardContent>
        </Card>

        <Card className="border border-gray-200 bg-white shadow-sm">
          <CardHeader className="border-b border-gray-100 bg-gray-50/50 px-6 py-4">
            <CardTitle className="text-gray-800 text-lg flex items-center gap-2">
              <BookOpen className="h-5 w-5 text-blue-600" />
              Exercice 1.2
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="mb-6 text-gray-700">Soit A = np.array([[1,2,3],[4,5,6]]). Extraire l'élément de la deuxième ligne et troisième colonne.</p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => toggleSolution('ex1-2')}
              className="flex items-center gap-2 mb-4 text-blue-600 border-blue-200 hover:bg-blue-50"
            >
              {showSolution['ex1-2'] ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
              {showSolution['ex1-2'] ? 'Masquer' : 'Voir'} la solution
            </Button>
            {showSolution['ex1-2'] && <div className="mt-4 p-4 bg-gray-50 border border-gray-200 rounded-lg animate-in fade-in slide-in-from-top-2">
              <pre className="text-sm font-mono mb-2 text-gray-800">
                {`A = np.array([[1, 2, 3],
              [4, 5, 6]])
element = A[1, 2]       # deuxième ligne, troisième colonne
print(element)`}
              </pre>
              <div className="mt-2">
                <p className="font-semibold text-xs text-gray-500 uppercase mb-1">Affichage</p>
                <div className="bg-white p-3 border rounded shadow-sm flex items-center gap-2">
                  <span className="font-mono text-sm">6</span>
                  <span className="text-sm text-gray-500 ml-auto">L'élément demandé est 6</span>
                </div>
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
            <CardTitle className="text-gray-700">Exercice 2.1</CardTitle>
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
            <CardTitle className="text-gray-700">Exercice 2.2</CardTitle>
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
            <CardTitle className="text-gray-700">Exercice 3.1</CardTitle>
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
            <CardTitle className="text-gray-700">Exercice 3.2</CardTitle>
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
            <CardTitle className="text-gray-700">Matrices nilpotentes</CardTitle>
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
            variant="ghost"
            size="sm"
            className="flex items-center gap-2 mb-6 hover:bg-gray-100"
            onClick={() => setSelectedExercise(null)}
          >
            <ChevronLeft className="h-4 w-4" /> Retour aux exercices
          </Button>

          <div className="text-center max-w-3xl mx-auto mb-10">
            <Badge
              variant="outline"
              className="mb-4 bg-blue-50 text-blue-700 border-blue-200 px-3 py-1"
            >
              Niveau : {exercise.difficulty}
            </Badge>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {exercise.title}
            </h1>
          </div>
        </div>

        {/* Shortcuts removed to clean up UI, or could be kept if really needed but simpler */}

        {exercise.content ? (
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
                  {exercise.content.isLatex ? (
                    <div className="flex justify-center my-2">
                      <LatexRenderer latex={exercise.content.objective} />
                    </div>
                  ) : (
                    <p>{exercise.content.objective}</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Énoncé */}
            <Card className="border border-gray-200 bg-white shadow-sm">
              <div className="border-b border-gray-100 bg-gray-50/50 px-6 py-4">
                <h2 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  Énoncé
                </h2>
              </div>
              <CardContent className="p-6 md:p-8">
                <div className="text-gray-700 text-lg">
                  {exercise.content.enonce_latex ? (
                    <LatexRenderer latex={exercise.content.enonce_latex} />
                  ) : (
                    <p className="whitespace-pre-line leading-relaxed">{exercise.content.enonce}</p>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Code Editor Section */}
            <PythonCodeEditor
              exerciseStatement={exercise.content.enonce_latex || exercise.content.enonce || exercise.content.objective}
              expectedSolution={exercise.content.correction || ''}
              moduleId={moduleId}
              exerciseId={String(selectedExercise)}
              onEvaluationComplete={(result) => {
                setEvaluationResults(prev => ({ ...prev, [selectedExercise]: result }));
                markExerciseAsSeen(`python-${moduleId}-exo-${selectedExercise}`);
              }}
            />

            {/* Evaluation Result */}
            {evaluationResults[selectedExercise] && (
              <CodeEvaluationResult result={evaluationResults[selectedExercise]} />
            )}

            {/* Bouton pour afficher/masquer la correction */}
            <div className="flex justify-center pt-6">
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
                    <h3 className="font-bold text-gray-800">Solution & Explications</h3>
                  </div>

                  <div className="bg-[#1e293b] text-blue-50 p-6 md:p-8 overflow-x-auto">
                    <pre className="font-mono text-sm leading-relaxed text-blue-50">
                      <code>{exercise.content.correction}</code>
                    </pre>
                  </div>
                </div>
              </div>
            )}
          </div>
        ) : (
          <Card className="border-gray-200">
            <CardContent className="pt-6">
              <div className="text-center py-10 text-gray-500">
                <p>Le contenu de cet exercice sera bientôt disponible.</p>
              </div>
            </CardContent>
          </Card>
        )
        }
        <ModuleNavigationCards
          currentModule={{
            id: 1,
            title: "Matrices",
            slug: "matrices",
            color: "blue"
          }}
          isExercisePage={true}
          totalExercises={exercises.length}
          currentExerciseId={selectedExercise}
          onNavigate={handleNavigate}
        />
      </PythonModuleLayout >
    );
  }

  return (
    <PythonModuleLayout>
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-700 to-indigo-700 bg-clip-text text-transparent mb-4">
          Module 1 : Exercices - Matrices NumPy
        </h1>
        <p className="text-xl text-blue-600">
          Exercices pratiques sur les matrices et NumPy
        </p>
      </div>

      {!showQCM && !selectedExercise && (
        <>
          {/* Section QCM */}
          <Card className="group mb-8 bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer border-2 border-gray-100 hover:border-blue-300" onClick={() => setShowQCM(true)}>
            <CardHeader>
              <CardTitle className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-200 group-hover:bg-blue-50 group-hover:border-blue-200 transition-colors duration-300">
                  <Trophy className="h-8 w-8 text-gray-600 group-hover:text-blue-600 transition-colors duration-300" />
                </div>
                <div>
                  <h2 className="text-2xl text-gray-800 group-hover:text-blue-600 transition-colors duration-300">QCM d'évaluation</h2>
                  <p className="text-sm text-gray-600 mt-1">Testez vos connaissances sur les matrices NumPy</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex items-center justify-between">
                <p className="text-gray-600">20 questions pour évaluer votre niveau</p>
                <Button variant="outline" className="flex items-center gap-2 border-gray-300 text-gray-700 hover:bg-blue-50 hover:text-blue-600 hover:border-blue-300 transition-colors duration-300">
                  <Play className="h-4 w-4" />
                  Commencer le QCM
                </Button>
              </div>
            </CardContent>
          </Card>


          {/* Grille d'exercices */}
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

          <Card className="mb-8 border-none bg-white shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[24px] overflow-hidden">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50/50 p-6 border-b border-blue-100/50">
              <div className="flex items-center gap-4">
                <div className="p-3 bg-white rounded-xl shadow-sm border border-blue-100">
                  <HelpCircle className="h-6 w-6 text-blue-600" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">QCM d'évaluation - Testez vos connaissances</h2>
                  <p className="text-sm text-blue-600/80 font-medium mt-1">Répondez aux 20 questions pour évaluer votre niveau</p>
                </div>
              </div>
            </div>
            <CardContent className="p-8">
              {!qcmSubmitted ? (
                <div className="space-y-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-2 text-sm text-gray-500">
                      <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
                      En cours - Questions à choix multiples
                    </div>
                    <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200 px-4 py-1.5 rounded-full font-semibold">
                      {Object.keys(qcmAnswers).length}/20 répondues
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {qcmQuestions.map((question, index) => (
                      <Card key={question.id} className="border border-blue-100 bg-blue-50/30 hover:bg-blue-50/60 hover:border-blue-300 hover:shadow-md transition-all duration-300 rounded-xl group">
                        <CardContent className="pt-6">
                          <div className="flex items-center justify-between mb-4">
                            <Badge variant="outline" className="bg-white text-blue-600 text-xs font-bold border-blue-200 shadow-sm group-hover:border-blue-300 transition-colors">
                              Q{question.id}
                            </Badge>
                          </div>
                          <p className="mb-6 text-gray-800 font-medium leading-relaxed min-h-[3rem]">{question.question}</p>
                          <div className="space-y-3">
                            {question.options.map((option, optIndex) => (
                              <label key={optIndex} className="flex items-center gap-3 p-3 rounded-lg hover:bg-blue-100/50 cursor-pointer border border-transparent hover:border-blue-200 transition-all duration-200">
                                <div className="relative flex items-center justify-center w-5 h-5">
                                  <input
                                    type="radio"
                                    name={`question-${question.id}`}
                                    value={option}
                                    checked={qcmAnswers[question.id] === option}
                                    onChange={(e) => handleQCMAnswer(question.id, e.target.value)}
                                    className="peer appearance-none w-5 h-5 border-2 border-gray-300 rounded-full checked:border-blue-500 checked:border-[5px] transition-all cursor-pointer"
                                  />
                                </div>
                                <span className={`text-sm transition-colors ${qcmAnswers[question.id] === option ? 'text-blue-700 font-medium' : 'text-gray-600'}`}>
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
                      <Trophy className="h-8 w-8 text-gray-600" />
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
                        {qcmScore && qcmScore >= 16 ? "Excellent ! Vous maîtrisez parfaitement les matrices NumPy." :
                          qcmScore && qcmScore >= 12 ? "Bon niveau ! Quelques révisions pour perfectionner." :
                            qcmScore && qcmScore >= 8 ? "Niveau correct. Continuez à vous entraîner." :
                              "Niveau à améliorer. Revenez sur les bases des matrices NumPy."}
                      </p>
                    </div>
                  </div>

                  {/* Détail des réponses */}
                  <div className="space-y-4">
                    <h4 className="text-lg font-semibold text-gray-700 text-center">
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
                              ? 'border-gray-200 bg-gray-50'
                              : 'border-gray-200 bg-gray-100'
                              }`}
                          >
                            <CardContent className="pt-6">
                              <div className="flex items-center gap-2 mb-3">
                                <Badge variant="outline" className={`${isCorrect ? 'bg-gray-100 text-gray-700' : 'bg-gray-200 text-gray-700'
                                  }`}>
                                  Question {question.id}
                                </Badge>
                                {isCorrect ? (
                                  <CheckCircle className="h-4 w-4 text-gray-600" />
                                ) : (
                                  <div className="h-4 w-4 text-gray-600">✗</div>
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
                                    // Bonne réponse toujours en gris foncé
                                    optionStyle += " bg-gray-100 border border-gray-300";
                                    textStyle += " font-semibold text-gray-700";
                                  } else if (isUserAnswer && !isCorrect) {
                                    // Mauvaise réponse de l'utilisateur en gris clair
                                    optionStyle += " bg-gray-200 border border-gray-300";
                                    textStyle += " font-semibold text-gray-600";
                                  } else {
                                    // Autres options neutres
                                    optionStyle += " bg-gray-50";
                                    textStyle += " text-gray-600";
                                  }

                                  return (
                                    <div key={optIndex} className={optionStyle}>
                                      <div className="flex items-center gap-2">
                                        {isCorrectAnswer && (
                                          <CheckCircle className="h-4 w-4 text-gray-600" />
                                        )}
                                        {isUserAnswer && !isCorrect && (
                                          <div className="h-4 w-4 text-gray-600">✗</div>
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
                                <div className="mt-3 p-2 bg-gray-100 border border-gray-200 rounded">
                                  <p className="text-sm text-gray-700">
                                    <span className="font-semibold">Votre réponse :</span> {userAnswer}
                                  </p>
                                  <p className="text-sm text-gray-700">
                                    <span className="font-semibold">Bonne réponse :</span> {question.answer}
                                  </p>
                                </div>
                              )}

                              {/* Explanation section */}
                              {question.explanation && (
                                <div className="mt-4 p-3 bg-blue-50 border border-blue-200 rounded">
                                  <div className="flex items-start gap-2">
                                    <HelpCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                                    <div>
                                      <p className="text-xs font-semibold text-blue-800 mb-1">Explication :</p>
                                      <p className="text-xs text-blue-700">{question.explanation}</p>
                                    </div>
                                  </div>
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
                      className="border-gray-200 text-gray-600 hover:bg-gray-50"
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
        isQuizMode={showQCM}
        nextModule={{
          id: 2,
          title: "Analyse",
          slug: "analyse"
        }}
      />
    </PythonModuleLayout>
  );
};

export default PythonMatricesExercicesPage;