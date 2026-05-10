import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import PythonModuleLayout from '@/components/formation/PythonModuleLayout';
import ModuleNavigationCards from '@/components/formation/ModuleNavigationCards';
import { LatexRenderer } from '@/components/LatexRenderer';
import { usePythonProgress } from '@/hooks/usePythonProgress';
import PythonCodeEditor, { EvaluationResult } from '@/components/python/PythonCodeEditor';
import CodeEvaluationResult from '@/components/python/CodeEvaluationResult';
import {
  PythonExerciseHero,
  PythonExerciseTopBar,
  PythonExerciseDetailHeader,
  PythonExerciseFooterNav,
  PythonStatementCard,
  PythonCorrectionToggle,
  PythonCorrectionPanel,
  PythonCodeBlock,
  PythonExerciseGrid,
  PythonQCMLauncher,
  PythonSectionHeading,
} from '@/components/formation/python/PythonExercisePage';
import PythonQCMPanel from '@/components/formation/python/PythonQCMPanel';

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

  // Navigation clavier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedExercise) return;

      if (e.key === 'ArrowLeft' && selectedExercise > 1) {
        setSelectedExercise(selectedExercise - 1);
        window.scrollTo(0, 0);
      } else if (e.key === 'ArrowRight' && selectedExercise < exercices.length) {
        setSelectedExercise(selectedExercise + 1);
        window.scrollTo(0, 0);
      } else if (e.key === 'Escape') {
        setSelectedExercise(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedExercise]);


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

def puissance(A, n):
    P = np.eye(np.shape(A)[0])
    for _ in range(n):
        P = np.dot(P, A)
    return P

A = np.array([[1, 1], [0, 1]])
print(A)
print(puissance(A, 3))`
    }
  }, {
    id: 6,
    title: "Création de matrices par formule",
    difficulty: "Moyen",
    description: "Construire des matrices selon une formule avec une double boucle.",
    color: "blue",
    type: "exercise",
    content: {
      objective: "\\text{Créer des matrices définies par une formule sur leurs coefficients (double boucle)}",
      isLatex: true,
      enonce: "1. Créer la matrice C de taille 3×4 telle que C[k, j] = k - j. 2. Créer la matrice D de taille 4×3 telle que D[k, j] = (k+1)(j+1).",
      enonce_latex: "\\text{1. Créer la matrice } C \\text{ de taille } 3 \\times 4 \\text{ telle que } C_{k,j} = k - j : \\\\ C = \\begin{pmatrix} 0 & -1 & -2 & -3 \\\\ 1 & 0 & -1 & -2 \\\\ 2 & 1 & 0 & -1 \\end{pmatrix} \\\\ \\text{2. Créer la matrice } D \\text{ de taille } 4 \\times 3 \\text{ telle que } D_{k,j} = (k+1)(j+1) : \\\\ D = \\begin{pmatrix} 1 & 2 & 3 \\\\ 2 & 4 & 6 \\\\ 3 & 6 & 9 \\\\ 4 & 8 & 12 \\end{pmatrix}",
      correction: `import numpy as np

# 1. Matrice C : C[k, j] = k - j
C = np.zeros([3, 4])
for k in range(3):
    for j in range(4):
        C[k, j] = k - j
print(C)

# 2. Matrice D : D[k, j] = (k+1)(j+1)
D = np.zeros([4, 3])
for k in range(4):
    for j in range(3):
        D[k, j] = (k + 1) * (j + 1)
print(D)`
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

A = 3 * np.ones([3, 3]) + 2 * np.eye(3)
print(A)`
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

def diagdom(A):
    (n, p) = np.shape(A)
    for k in range(n):
        S = 0
        for j in range(n):
            if j != k:
                S = S + np.abs(A[k, j])
        if np.abs(A[k, k]) <= S:
            return False
    return True

M1 = np.array([[2, 1], [1, 2]])
M2 = np.array([[-4, 2, 1], [1, 6, 2], [1, -2, 5]])
print(diagdom(M1))   # False
print(diagdom(M2))   # True`
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
    for k in range(n):
        S = 0
        for j in range(p):
            S = S + A[k, j]
        if S != 1:
            return False
    return True

M1 = np.array([[2, 1], [1, 2]])
M2 = np.array([[1, 0], [0, 1]])
M3 = np.array([[0.5, 0.5], [0.3, 0.7]])
print(stoch(M1))   # False
print(stoch(M2))   # True
print(stoch(M3))   # True`
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
Z = np.ones([5, 5])
for k in range(1, 4):
    for j in range(1, 4):
        Z[k, j] = 0
print(Z)

b) Avec np.zeros et des boucles for :
Z = np.zeros([5, 5])
for k in range(5):
    Z[k, 0] = 1
    Z[0, k] = 1
    Z[4, k] = 1
    Z[k, 4] = 1
print(Z)

c) Avec np.ones et une modification avec np.zeros :
Z = np.ones([5, 5])
Z[1:4, 1:4] = np.zeros([3, 3])
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
    M = np.zeros([n, n])
    for k in range(n):
        M[k, k] = 1
        M[k, n - 1 - k] = 1
    return M

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
    for k in range(n):
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

A = 4 * np.ones([3, 3]) - 12 * np.eye(3)
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
    (n, p) = np.shape(M)
    if n != p:
        return False
    for k in range(n):
        for j in range(n):
            if M[k, j] != -M[j, k]:
                return False
    return True

M1 = np.array([[0, 5, -2], [-5, 0, 3], [2, -3, 0]])
M2 = np.array([[1, 5, -2], [-5, 0, 3], [2, -3, 0]])
M3 = np.array([[0, 5, -2], [-4, 0, 3], [2, -3, 0]])
print(est_antisymetrique(M1))   # True
print(est_antisymetrique(M2))   # False (diagonale non nulle)
print(est_antisymetrique(M3))   # False`
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
    T = []
    for k in range(n):
        L = [1] * (k + 1)
        for j in range(1, k):
            L[j] = T[k-1][j-1] + T[k-1][j]
        T.append(L)
    return T

R = pascal(5)
for L in R:
    print(L)`
    }
  }, {
    id: 18,
    title: "Trace d'une matrice",
    difficulty: "Avancé",
    description: "Écrire une fonction qui calcule la trace d'une matrice carrée (somme des coefficients diagonaux).",
    color: "blue",
    type: "exercise",
    content: {
      objective: "\\text{Écrire une fonction } \\mathtt{trace}(A) \\text{ qui retourne } \\mathrm{tr}(A) = \\sum_{k=1}^{n} a_{k,k}",
      isLatex: true,
      enonce: "Écrire une fonction trace(A) qui retourne la trace d'une matrice carrée A, sans utiliser np.trace.",
      enonce_latex: "\\text{Soit } A \\in M_n(\\mathbb{R}). \\\\ \\text{Écrire une fonction } \\mathtt{trace}(A) \\text{ qui retourne :} \\\\ \\mathrm{tr}(A) = \\sum_{k=1}^{n} a_{k,k} \\\\ \\text{Contrainte : ne pas utiliser np.trace.}",
      correction: `import numpy as np

def trace(A):
    (n, p) = np.shape(A)
    S = 0
    for k in range(n):
        S = S + A[k, k]
    return S

A = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
print(trace(A))   # 15`
    }
  }, {
    id: 19,
    title: "Test de matrice symétrique",
    difficulty: "Avancé",
    description: "Implémenter une fonction qui teste si une matrice carrée est symétrique.",
    color: "blue",
    type: "exercise",
    content: {
      objective: "\\text{Tester si } A^T = A \\text{ (matrice symétrique)}",
      isLatex: true,
      enonce: "Une matrice carrée A est symétrique si A[k, j] = A[j, k] pour tout k, j. Écrire une fonction est_sym(A).",
      enonce_latex: "\\text{Une matrice } A \\in M_n(\\mathbb{R}) \\text{ est symétrique si :} \\\\ \\forall (k, j), \\quad a_{k,j} = a_{j,k} \\\\ \\text{Écrire une fonction } \\mathtt{est\\_sym}(A) \\text{ qui retourne True si } A \\text{ est symétrique.}",
      correction: `import numpy as np

def est_sym(A):
    (n, p) = np.shape(A)
    if n != p:
        return False
    for k in range(n):
        for j in range(n):
            if A[k, j] != A[j, k]:
                return False
    return True

M1 = np.array([[1, 2, 3], [2, 4, 5], [3, 5, 6]])
M2 = np.array([[1, 2, 3], [2, 4, 5], [3, 0, 6]])
print(est_sym(M1))   # True
print(est_sym(M2))   # False`
    }
  }, {
    id: 20,
    title: "Test de matrice triangulaire supérieure",
    difficulty: "Avancé",
    description: "Implémenter une fonction qui teste si une matrice carrée est triangulaire supérieure.",
    color: "blue",
    type: "exercise",
    content: {
      objective: "\\text{Tester si } a_{k,j} = 0 \\text{ pour tout } k > j",
      isLatex: true,
      enonce: "Une matrice est triangulaire supérieure si tous les coefficients sous la diagonale sont nuls. Écrire une fonction est_triang_sup(A).",
      enonce_latex: "\\text{Une matrice } A \\in M_n(\\mathbb{R}) \\text{ est triangulaire supérieure si :} \\\\ \\forall k > j, \\quad a_{k,j} = 0 \\\\ \\text{Écrire une fonction } \\mathtt{est\\_triang\\_sup}(A).",
      correction: `import numpy as np

def est_triang_sup(A):
    (n, p) = np.shape(A)
    if n != p:
        return False
    for k in range(n):
        for j in range(k):
            if A[k, j] != 0:
                return False
    return True

M1 = np.array([[1, 2, 3], [0, 4, 5], [0, 0, 6]])
M2 = np.array([[1, 2, 3], [4, 5, 6], [0, 0, 9]])
print(est_triang_sup(M1))   # True
print(est_triang_sup(M2))   # False`
    }
  }, {
    id: 21,
    title: "Déterminant et inverse d'une matrice 2×2",
    difficulty: "Avancé",
    description: "Calculer le déterminant et l'inverse d'une matrice 2×2 sans np.linalg.",
    color: "blue",
    type: "exercise",
    content: {
      objective: "\\text{Pour } A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}, \\text{ calculer } \\det(A) = ad - bc \\text{ puis } A^{-1}",
      isLatex: true,
      enonce: "1) Écrire une fonction det2(A) qui retourne le déterminant d'une matrice 2×2. 2) Écrire une fonction inv2(A) qui retourne l'inverse, ou None si A n'est pas inversible.",
      enonce_latex: "\\text{Pour } A = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix} : \\\\ \\text{1) Écrire } \\mathtt{det2}(A) \\text{ qui retourne } \\det(A) = ad - bc \\\\ \\text{2) Écrire } \\mathtt{inv2}(A) \\text{ qui retourne } A^{-1} = \\frac{1}{\\det(A)} \\begin{pmatrix} d & -b \\\\ -c & a \\end{pmatrix} \\\\ \\text{(retourner None si } \\det(A) = 0\\text{)}",
      correction: `import numpy as np

def det2(A):
    return A[0, 0] * A[1, 1] - A[0, 1] * A[1, 0]

def inv2(A):
    d = det2(A)
    if d == 0:
        return None
    B = np.zeros([2, 2])
    B[0, 0] = A[1, 1] / d
    B[0, 1] = -A[0, 1] / d
    B[1, 0] = -A[1, 0] / d
    B[1, 1] = A[0, 0] / d
    return B

A = np.array([[2, 1], [1, 3]])
print(det2(A))   # 5
print(inv2(A))`
    }
  }, {
    id: 22,
    title: "Suite récurrente matricielle",
    difficulty: "Avancé",
    description: "Calculer les n premiers termes d'une suite Uₖ₊₁ = A·Uₖ + B et afficher la liste obtenue.",
    color: "blue",
    type: "exercise",
    content: {
      objective: "\\text{Calculer } U_n \\text{ avec } U_{k+1} = A \\cdot U_k + B \\text{ pour } U_0 \\text{ donné}",
      isLatex: true,
      enonce: "Écrire une fonction suite(A, B, U0, n) qui retourne U_n défini par U_{k+1} = A·U_k + B.",
      enonce_latex: "\\text{Soient } A \\in M_p(\\mathbb{R}), B \\in M_{p,1}(\\mathbb{R}) \\text{ et } U_0 \\in M_{p,1}(\\mathbb{R}). \\\\ \\text{On définit la suite : } U_{k+1} = A \\cdot U_k + B \\\\ \\text{Écrire } \\mathtt{suite}(A, B, U_0, n) \\text{ qui retourne } U_n.",
      correction: `import numpy as np

def suite(A, B, U0, n):
    U = U0
    for k in range(n):
        U = np.dot(A, U) + B
    return U

A = np.array([[0.5, 0.5], [0.2, 0.8]])
B = np.array([[1], [0]])
U0 = np.array([[0], [0]])
print(suite(A, B, U0, 10))`
    }
  }, {
    id: 23,
    title: "Test si X est vecteur propre",
    difficulty: "Avancé",
    description: "Vérifier si un vecteur colonne X est un vecteur propre d'une matrice A, et retourner la valeur propre associée.",
    color: "blue",
    type: "exercise",
    content: {
      objective: "\\text{Tester si } AX = \\lambda X \\text{ pour un certain } \\lambda \\in \\mathbb{R}",
      isLatex: true,
      enonce: "Écrire une fonction vp(A, X) qui retourne la valeur propre associée si X est un vecteur propre de A, et None sinon. On suppose X non nul.",
      enonce_latex: "\\text{Soient } A \\in M_n(\\mathbb{R}) \\text{ et } X \\in M_{n,1}(\\mathbb{R}) \\text{ non nul.} \\\\ \\text{Écrire } \\mathtt{vp}(A, X) \\text{ qui :} \\\\ \\text{• retourne } \\lambda \\text{ si } AX = \\lambda X \\\\ \\text{• retourne None sinon} \\\\ \\text{Indice : prendre la 1\\`{e}re composante non nulle de } X \\text{ pour calculer } \\lambda \\text{ candidat.}",
      correction: `import numpy as np

def vp(A, X):
    Y = np.dot(A, X)
    (n, p) = np.shape(X)
    k = 0
    while X[k, 0] == 0:
        k = k + 1
    lam = Y[k, 0] / X[k, 0]
    for j in range(n):
        if Y[j, 0] != lam * X[j, 0]:
            return None
    return lam

A = np.array([[2, 0], [0, 3]])
X1 = np.array([[1], [0]])
X2 = np.array([[1], [1]])
print(vp(A, X1))   # 2.0
print(vp(A, X2))   # None`
    }
  }, {
    id: 24,
    title: "Matrice de Vandermonde",
    difficulty: "Avancé",
    description: "Construire la matrice de Vandermonde associée à n réels x_1, …, x_n.",
    color: "blue",
    type: "exercise",
    content: {
      objective: "\\text{Construire } V_{k,j} = x_k^{j} \\text{ pour } k, j \\in \\{0, \\ldots, n-1\\}",
      isLatex: true,
      enonce: "Écrire une fonction vandermonde(X) qui prend une liste de n réels et retourne la matrice de Vandermonde n×n associée.",
      enonce_latex: "\\text{Soit } X = (x_0, \\ldots, x_{n-1}) \\text{ une liste de } n \\text{ réels.} \\\\ \\text{La matrice de Vandermonde est :} \\\\ V = \\begin{pmatrix} 1 & x_0 & x_0^2 & \\cdots & x_0^{n-1} \\\\ 1 & x_1 & x_1^2 & \\cdots & x_1^{n-1} \\\\ \\vdots & \\vdots & \\vdots & & \\vdots \\\\ 1 & x_{n-1} & x_{n-1}^2 & \\cdots & x_{n-1}^{n-1} \\end{pmatrix} \\\\ \\text{Écrire } \\mathtt{vandermonde}(X).",
      correction: `import numpy as np

def vandermonde(X):
    n = len(X)
    V = np.zeros([n, n])
    for k in range(n):
        for j in range(n):
            V[k, j] = X[k] ** j
    return V

X = [1, 2, 3, 4]
print(vandermonde(X))`
    }
  }, {
    id: 25,
    title: "Combinaison linéaire de vecteurs colonnes",
    difficulty: "Avancé",
    description: "Calculer une combinaison linéaire α₁·V₁ + α₂·V₂ + … + αₚ·Vₚ à partir d'une matrice et d'une liste de coefficients.",
    color: "blue",
    type: "exercise",
    content: {
      objective: "\\text{Calculer } \\sum_{j=1}^{p} \\alpha_j V_j \\text{ où } V_j \\text{ est la } j\\text{-ième colonne de } M",
      isLatex: true,
      enonce: "Écrire une fonction combi(M, A) qui retourne la combinaison linéaire des colonnes de M avec les coefficients de A.",
      enonce_latex: "\\text{Soient } M \\in M_{n,p}(\\mathbb{R}) \\text{ et } A = (\\alpha_1, \\ldots, \\alpha_p). \\\\ \\text{Écrire } \\mathtt{combi}(M, A) \\text{ qui retourne le vecteur colonne :} \\\\ R = \\sum_{j=1}^{p} \\alpha_j \\cdot M[:, j-1] \\\\ \\text{Indice : initialiser } R \\text{ à un vecteur colonne nul.}",
      correction: `import numpy as np

def combi(M, A):
    (n, p) = np.shape(M)
    R = np.zeros([n, 1])
    for j in range(p):
        for k in range(n):
            R[k, 0] = R[k, 0] + A[j] * M[k, j]
    return R

M = np.array([[1, 2, 3], [4, 5, 6], [7, 8, 9]])
A = [1, 0, -1]
print(combi(M, A))`
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
              <BookOpen className="h-5 w-5 text-carnet-red" />
              Exercice 1.1
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="mb-6 text-gray-700">Créer une matrice 3×4 contenant uniquement des zéros, puis une matrice 2×3 contenant uniquement des uns.</p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => toggleSolution('ex1-1')}
              className="flex items-center gap-2 mb-4 text-carnet-red border-[rgba(193,68,58,0.3)] hover:bg-[rgba(193,68,58,0.06)]"
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
              <BookOpen className="h-5 w-5 text-carnet-red" />
              Exercice 1.2
            </CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <p className="mb-6 text-gray-700">Soit A = np.array([[1,2,3],[4,5,6]]). Extraire l'élément de la deuxième ligne et troisième colonne.</p>
            <Button
              variant="outline"
              size="sm"
              onClick={() => toggleSolution('ex1-2')}
              className="flex items-center gap-2 mb-4 text-carnet-red border-[rgba(193,68,58,0.3)] hover:bg-[rgba(193,68,58,0.06)]"
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

    const hasPrevious = selectedExercise > 1;
    const hasNext = selectedExercise < exercises.length;

    return (
      <PythonModuleLayout>
        <PythonExerciseTopBar
          current={selectedExercise}
          total={exercises.length}
          onBack={() => setSelectedExercise(null)}
          onPrev={() => {
            if (hasPrevious) {
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
          hasPrev={hasPrevious}
          hasNext={hasNext}
        />

        <PythonExerciseDetailHeader
          number={selectedExercise}
          title={exercise.title}
          difficulty={exercise.difficulty}
        />

        {exercise.content ? (
          <>
            <PythonStatementCard>
              {exercise.content.enonce_latex ? (
                <LatexRenderer latex={exercise.content.enonce_latex} />
              ) : (
                <div style={{ whiteSpace: 'pre-wrap' }}>{exercise.content.enonce}</div>
              )}
            </PythonStatementCard>

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

            {evaluationResults[selectedExercise] && (
              <CodeEvaluationResult result={evaluationResults[selectedExercise]} />
            )}

            <PythonCorrectionToggle
              isOpen={showCorrections.has(selectedExercise)}
              onToggle={() => toggleCorrection(selectedExercise)}
            />

            {showCorrections.has(selectedExercise) && exercise.content.correction && (
              <PythonCorrectionPanel>
                <PythonCodeBlock code={exercise.content.correction} />
              </PythonCorrectionPanel>
            )}

            <PythonExerciseFooterNav
              current={selectedExercise}
              total={exercises.length}
              onPrev={() => {
                if (hasPrevious) {
                  setSelectedExercise(selectedExercise - 1);
                  window.scrollTo(0, 0);
                }
              }}
              onNext={() => {
                if (hasNext) {
                  setSelectedExercise(selectedExercise + 1);
                  window.scrollTo(0, 0);
                } else {
                  setSelectedExercise(null);
                }
              }}
              hasPrev={hasPrevious}
              hasNext={hasNext}
            />
          </>
        ) : (
          <div className="bg-white border border-[rgba(78,55,30,0.14)] rounded-2xl p-10 text-center text-carnet-ink-mute">
            Le contenu de cet exercice sera bientôt disponible.
          </div>
        )}

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
      </PythonModuleLayout>
    );
  }

  return (
    <PythonModuleLayout>
      {!showQCM && (
        <PythonExerciseHero
          moduleLabel="Module 1 · Exercices"
          title={<>Exercices · <span className="text-carnet-red">Matrices NumPy</span></>}
          subtitle="Manipulez les matrices avec NumPy : création, indexation, opérations et applications pratiques."
          annotation={"↗ NumPy,\nl'arme secrète"}
        />
      )}

      {!showQCM && !selectedExercise && (
        <>
          <PythonQCMLauncher
            description="Testez vos connaissances sur les matrices et NumPy"
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
          intro="Répondez aux 20 questions pour évaluer votre niveau sur les matrices NumPy."
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