import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { CheckCircle, Calendar, Star, Sparkles } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import PythonModuleLayout from '@/components/formation/PythonModuleLayout';
import ModuleNavigationCards from '@/components/formation/ModuleNavigationCards';
import { HeroContactForm } from '@/components/HeroContactForm';
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
  PythonCorrectionPanel,
  PythonCodeBlock,
  PythonExerciseGrid,
  PythonQCMLauncher,
  PythonSectionHeading,
  PythonExerciseWorkspace,
} from '@/components/formation/python/PythonExercisePage';
import PythonQCMPanel from '@/components/formation/python/PythonQCMPanel';

const PythonAnalyseExercicesPage = () => {
  const [searchParams] = useSearchParams();
  const { markExerciseAsSeen, markAsComplete } = usePythonProgress();
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);
  const [showQCM, setShowQCM] = useState(false);

  // États pour le QCM d'évaluation
  const [qcmAnswers, setQcmAnswers] = useState<{ [key: number]: string }>({});
  const [qcmSubmitted, setQcmSubmitted] = useState(false);
  const [qcmScore, setQcmScore] = useState<number | null>(null);

  // Evaluation state for code submissions
  const [evaluationResults, setEvaluationResults] = useState<{ [key: number]: EvaluationResult }>({});
  const moduleId = 'analyse';

  // Détecter le paramètre quiz dans l'URL
  useEffect(() => {
    const quizParam = searchParams.get('quiz');
    if (quizParam === 'true') {
      setShowQCM(true);
    }
  }, [searchParams]);

  // Marquer l'exercice comme vu dès son ouverture (corrigé toujours visible)
  useEffect(() => {
    if (selectedExercise) {
      markExerciseAsSeen(`python-analyse-exo-${selectedExercise}`);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedExercise]);

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
    markAsComplete('python-analyse-qcm', score);
  };

  // Fonction pour recommencer le QCM
  const restartQCM = () => {
    setQcmAnswers({});
    setQcmSubmitted(false);
    setQcmScore(null);
  };

  const handleNavigate = (newExerciseId: number) => {
    const exerciseExists = exercises.some(ex => ex.id === newExerciseId);
    if (exerciseExists) {
      setSelectedExercise(newExerciseId);
      window.scrollTo(0, 0);
    }
  };

  const qcmQuestions = [{
    id: 1,
    question: "Pourquoi utiliser assert f(a)*f(b)<0 au début de l'algorithme de dichotomie ?",
    options: ["A) Pour calculer la précision", "B) Pour garantir l'existence d'une racine par théorème des valeurs intermédiaires", "C) Pour initialiser c = (a+b)/2", "D) Pour retourner la valeur de f(c)"],
    answer: "B) Pour garantir l'existence d'une racine par théorème des valeurs intermédiaires"
  }, {
    id: 2,
    question: "La condition while b - a > precision dans la dichotomie signifie :",
    options: ["A) Arrêter quand l'intervalle est trop petit", "B) Continuer tant que la précision n'est pas atteinte", "C) Vérifier le signe de f(c)", "D) Initialiser a et b"],
    answer: "B) Continuer tant que la précision n'est pas atteinte"
  }, {
    id: 3,
    question: "Si f(a)*f(c) <= 0, on met généralement :",
    options: ["A) a = c (racine dans [a,c])", "B) b = c (racine dans [c,b])", "C) c = a + b", "D) Return c immédiatement"],
    answer: "A) a = c (racine dans [a,c])"
  }, {
    id: 4,
    question: "Quelle est la syntaxe correcte pour définir une fonction simple ?",
    options: ["A) def nom(x): return x**2", "B) nom(x) = x**2", "C) function nom(x): x**2", "D) def nom(x) x**2"],
    answer: "A) def nom(x): return x**2"
  }, {
    id: 5,
    question: "En ECG, on définit toujours une fonction avec :",
    options: ["A) def f(u): return 5*u + 3", "B) f = lambda u: 5*u + 3", "C) function f(u) = 5*u + 3", "D) f(u) := 5*u + 3"],
    answer: "A) def f(u): return 5*u + 3"
  }, {
    id: 6,
    question: "Quel est le résultat de np.abs(-5) ?",
    options: ["A) -5", "B) 5", "C) 0", "D) Erreur"],
    answer: "B) 5"
  }, {
    id: 7,
    question: "np.sin(np.pi/2) renvoie approx. :",
    options: ["A) 0", "B) 1", "C) -1", "D) π/2"],
    answer: "B) 1"
  }, {
    id: 8,
    question: "np.log(np.e) renvoie approx. :",
    options: ["A) 0", "B) 1", "C) e", "D) Erreur (log de e=1)"],
    answer: "B) 1"
  }, {
    id: 9,
    question: "np.floor(3.7) renvoie :",
    options: ["A) 3.0", "B) 4.0", "C) 3.7", "D) Erreur"],
    answer: "A) 3.0"
  }, {
    id: 10,
    question: "Dans le code suivant, quelle est la valeur finale de u après 4 itérations ?\nu = 1\ndef f(u):\n    return u/2 + 1\nfor k in range(4):\n    u = f(u)\nprint(u)",
    options: ["A) 1.9375", "B) 2.0", "C) 1.5", "D) 1.0"],
    answer: "A) 1.9375"
  }, {
    id: 11,
    question: "Dans u=2.4; n=0; while u < 10000: u=5*u+3; n+=1 – Pour quel n u >=10000 ?",
    options: ["A) 5", "B) 6", "C) 7", "D) 8"],
    answer: "C) 7"
  }, {
    id: 12,
    question: "Le code U=[]; u=2.4; for _ in range(5): U.append(u); u=5*u+3 donne U avec combien d'éléments ?",
    options: ["A) 4", "B) 5", "C) 6", "D) Erreur"],
    answer: "B) 5"
  }, {
    id: 13,
    question: "Pour u0=4, u_{n+1}=3u_n+1 si pair, (u_n+1)/2 si impair – Après 1 itération :",
    options: ["A) 13 (pair → 3*4+1=13)", "B) 2.5 (impair → (4+1)/2=2.5)", "C) 4", "D) Erreur %2"],
    answer: "A) 13 (pair → 3*4+1=13)"
  }, {
    id: 14,
    question: "Pour n=5, S1 = sum k^2 de 1 à 5 avec boucle : Résultat ?",
    options: ["A) 30", "B) 55", "C) 15", "D) 225"],
    answer: "B) 55"
  }, {
    id: 15,
    question: "S2 = sum([k**3 - 2*k for k in range(1,6)]) pour n=5 :",
    options: ["A) 225", "B) 200", "C) 190", "D) 210"],
    answer: "C) 190"
  }, {
    id: 16,
    question: "Pour n=5, m=4, S3 = np.sum([k**2 + j**3 for k in range(1,6) for j in range(1,5)]) :",
    options: ["A) 1100", "B) 1300", "C) 1500", "D) 1700"],
    answer: "D) 1700"
  }, {
    id: 17,
    question: "k=np.arange(1,6); np.sum(k**2) pour n=5 :",
    options: ["A) 55", "B) 30", "C) 15", "D) Erreur arange"],
    answer: "A) 55"
  }, {
    id: 18,
    question: "Dans def terme_suite(u0, n, f): u=u0; for _ in range(n): u=f(u); return u – Pour f définie par def f(u): return 5*u+3, u0=2.4, n=3 :",
    options: ["A) 78.0", "B) 15.0", "C) 2.4", "D) 390.3"],
    answer: "A) 78.0"
  }, {
    id: 19,
    question: "Dans l'exemple avec input n, U=4, boucle avec if U%2==0: U=3*U+1 else: (U+1)/2 – Pour n=2 :",
    options: ["A) 13", "B) 7", "C) 4", "D) Erreur type float/int"],
    answer: "B) 7"
  }, {
    id: 20,
    question: "Pourquoi S=0; for k in range(1,n+1): S += k**2 est préférable à liste pour grandes n ?",
    options: ["A) Moins mémoire", "B) Plus rapide", "C) Les deux", "D) Aucune différence"],
    answer: "C) Les deux"
  }];

  const exercises = [
    {
      id: 1,
      title: "Exercice 1 - Création de vecteurs",
      difficulty: "Facile",
      description: "En une seule ligne de commande, créer le vecteur x = (1, 1/4, 1/9, 1/16, ..., 1/100) sans saisir un à un les éléments.",
      color: "green",
      content: {
        objective: "\\text{Créer un vecteur avec des fractions de carrés}",
        isLatex: true,
        enonce: "En une seule ligne de commande, créer le vecteur x = (1, 1/4, 1/9, 1/16, ..., 1/100) sans saisir un à un les éléments.",
        enonce_latex: "\\text{En une seule ligne de commande, créer le vecteur } x = \\left(1, \\frac{1}{4}, \\frac{1}{9}, \\frac{1}{16}, \\ldots, \\frac{1}{100}\\right) \\text{ sans saisir un à un les éléments.}",
        correction: `import numpy as np
x = 1 / np.arange(1, 11)**2
print(x)`
      }
    },
    {
      id: 2,
      title: "Exercice 2 - Somme géométrique",
      difficulty: "Facile",
      description: "En une seule ligne de commande, calculer la somme ∑(n=0 à 10) 1/2ⁿ",
      color: "green",
      content: {
        objective: "\\text{Calculer une somme géométrique}",
        isLatex: true,
        enonce: "En une seule ligne de commande, calculer la somme ∑(n=0 à 10) 1/2ⁿ",
        enonce_latex: "\\text{En une seule ligne de commande, calculer la somme : } \\sum_{n=0}^{10} \\frac{1}{2^n}",
        correction: `import numpy as np
S = np.sum(1 / 2**np.arange(11))
print(S)`
      }
    },
    {
      id: 3,
      title: "Exercice 3 - Interprétation de commandes",
      difficulty: "Facile",
      description: "Interpréter les commandes utilisant np.ones(10) et np.cumsum() pour comprendre les opérations de cumul.",
      color: "green"
    },
    {
      id: 4,
      title: "Exercice 4 - Somme harmonique",
      difficulty: "Moyen",
      description: "Compléter la fonction Python pour calculer la somme harmonique définie par Sₙ = ∑(k=1 à n) 1/k",
      color: "orange",
      content: {
        objective: "\\text{Calculer la somme harmonique}",
        isLatex: true,
        enonce: "Compléter la fonction Python pour calculer la somme harmonique définie par Sₙ = ∑(k=1 à n) 1/k",
        enonce_latex: "\\text{Compléter la fonction Python pour calculer la somme harmonique définie par } S_n = \\sum_{k=1}^{n} \\frac{1}{k}",
        correction: `def somme_harmonique(n):
    S = 0
    for k in range(1, n + 1):
        S += 1 / k
    return S

# Exemple d'utilisation
n = int(input("Entrer n : "))
resultat = somme_harmonique(n)
print(f"S_{n} = {resultat}")`
      }
    },
    {
      id: 5,
      title: "Exercice 5 - Condition d'arrêt",
      difficulty: "Moyen",
      description: "Compléter le script Python pour afficher le premier entier naturel non nul n vérifiant n²e⁻ⁿ < 10⁻⁴",
      color: "orange",
      content: {
        objective: "\\text{Trouver le premier entier vérifiant une condition}",
        isLatex: true,
        enonce: "Compléter le script Python pour afficher le premier entier naturel non nul n vérifiant n²e⁻ⁿ < 10⁻⁴",
        enonce_latex: "\\text{Compléter le script Python pour afficher le premier entier naturel non nul } n \\text{ vérifiant } n^2 e^{-n} < 10^{-4}",
        correction: `import math

n = 1
while n**2 * math.exp(-n) >= 1e-4:
    n += 1

print(f"Le premier entier n vérifiant n²e^(-n) < 10^(-4) est : {n}")
print(f"Vérification : {n}² × e^(-{n}) = {n**2 * math.exp(-n):.2e}")`
      }
    },
    {
      id: 6,
      title: "Exercice 6 - Convergence de suite",
      difficulty: "Moyen",
      description: "Compléter la fonction Python pour trouver un entier naturel n vérifiant |uₙ - α| ≤ eps",
      color: "orange",
      content: {
        objective: "\\text{Trouver la convergence d'une suite}",
        isLatex: true,
        enonce: "Compléter la fonction Python pour trouver un entier naturel n vérifiant |uₙ - α| ≤ eps",
        enonce_latex: "\\text{Compléter la fonction Python pour trouver un entier naturel } n \\text{ vérifiant } |u_n - \\alpha| \\leq \\varepsilon",
        correction: `def convergence_suite(u_fonction, alpha, eps):
    n = 1
    while abs(u_fonction(n) - alpha) > eps:
        n += 1
    return n

# Exemple avec u_n = 1/n convergeant vers 0
def u(n):
    return 1/n

n_conv = convergence_suite(u, 0, 0.01)
print(f"Convergence atteinte pour n = {n_conv}")`
      }
    },
    {
      id: 7,
      title: "Exercice 7 - Approximation par récurrence",
      difficulty: "Moyen",
      description: "Compléter la fonction Python pour renvoyer une valeur approchée de α à eps près en utilisant une suite récurrente.",
      color: "orange",
      content: {
        objective: "\\text{Approximation par récurrence}",
        isLatex: true,
        enonce: "Compléter la fonction Python pour renvoyer une valeur approchée de α à eps près en utilisant une suite récurrente.",
        enonce_latex: "\\text{Compléter la fonction Python pour renvoyer une valeur approchée de } \\alpha \\text{ à } \\varepsilon \\text{ près en utilisant une suite récurrente.}",
        correction: `def approximation_recurrence(f, u0, alpha, eps, max_iter=1000):
    u = u0
    for n in range(max_iter):
        u_next = f(u)
        if abs(u_next - alpha) <= eps:
            return u_next, n+1
        u = u_next
    return u, max_iter

# Exemple : approximation de sqrt(2) avec f(x) = (x + 2/x)/2
def f(x):
    return (x + 2/x) / 2

resultat, iterations = approximation_recurrence(f, 1.0, 1.414213562, 1e-6)
print(f"Approximation : {resultat}, iterations : {iterations}")`
      }
    },
    {
      id: 8,
      title: "Exercice 8 - Suite définie par récurrence",
      difficulty: "Moyen",
      description: "Compléter la fonction Python pour calculer le terme uₙ d'une suite définie par récurrence avec f(t) = 1/(1+e^t)",
      color: "orange",
      content: {
        objective: "\\text{Calculer un terme d'une suite récurrente}",
        isLatex: true,
        enonce: "Compléter la fonction Python pour calculer le terme uₙ d'une suite définie par récurrence avec f(t) = 1/(1+e^t)",
        enonce_latex: "\\text{Compléter la fonction Python pour calculer le terme } u_n \\text{ d'une suite définie par récurrence avec } f(t) = \\frac{1}{1+e^t}",
        correction: `import math

def f(t):
    return 1 / (1 + math.exp(t))

def terme_suite_recurrence(u0, n):
    u = u0
    for _ in range(n):
        u = f(u)
    return u

# Exemple d'utilisation
u0 = 0.5
n = 10
resultat = terme_suite_recurrence(u0, n)
print(f"u_{n} = {resultat}")`
      }
    },
    {
      id: 9,
      title: "Exercice 9 - Tableau de suite",
      difficulty: "Moyen",
      description: "Compléter la fonction Python pour renvoyer un tableau contenant les m premiers termes de la suite (uₙ).",
      color: "orange",
      content: {
        objective: "\\text{Créer un tableau des termes d'une suite}",
        isLatex: true,
        enonce: "Compléter la fonction Python pour renvoyer un tableau contenant les m premiers termes de la suite (uₙ).",
        enonce_latex: "\\text{Compléter la fonction Python pour renvoyer un tableau contenant les } m \\text{ premiers termes de la suite } (u_n).",
        correction: `def tableau_suite(u_fonction, m):
    return [u_fonction(n) for n in range(1, m + 1)]

# Exemple avec u_n = n²
def u(n):
    return n**2

termes = tableau_suite(u, 10)
print(f"Les 10 premiers termes : {termes}")`
      }
    },
    {
      id: 10,
      title: "Exercice 10 - Approximation de série",
      difficulty: "Moyen",
      description: "Écrire un programme Python qui calcule une valeur approchée de la somme S = ∑(k=1 à ∞) 1/k² à ε près.",
      color: "orange",
      content: {
        objective: "\\text{Approximation d'une série infinie}",
        isLatex: true,
        enonce: "Écrire un programme Python qui calcule une valeur approchée de la somme S = ∑(k=1 à ∞) 1/k² à ε près.",
        enonce_latex: "\\text{Écrire un programme Python qui calcule une valeur approchée de la somme } S = \\sum_{k=1}^{\\infty} \\frac{1}{k^2} \\text{ à } \\varepsilon \\text{ près.}",
        correction: `def approximation_serie_carres(epsilon):
    S = 0
    k = 1
    terme = 1  # Premier terme 1/1²
    
    while terme >= epsilon:
        S += terme
        k += 1
        terme = 1 / (k**2)
    
    return S, k-1  # Retourne somme et nombre de termes

# Approximation à 10^-6 près
somme, nb_termes = approximation_serie_carres(1e-6)
print(f"Somme ≈ {somme}")
print(f"Nombre de termes : {nb_termes}")
print(f"Valeur théorique π²/6 ≈ {3.14159**2/6}")`
      }
    },
    {
      id: 11,
      title: "Exercice 11 - Somme exponentielle",
      difficulty: "Moyen",
      description: "Écrire une fonction Python qui calcule la somme ∑(k=1 à n) 2ᵏ/k pour un entier n donné.",
      color: "orange",
      content: {
        objective: "\\text{Calculer une somme exponentielle}",
        isLatex: true,
        enonce: "Écrire une fonction Python qui calcule la somme ∑(k=1 à n) 2ᵏ/k pour un entier n donné.",
        enonce_latex: "\\text{Écrire une fonction Python qui calcule la somme } \\sum_{k=1}^{n} \\frac{2^k}{k} \\text{ pour un entier } n \\text{ donné.}",
        correction: `def somme_exponentielle(n):
    S = 0
    for k in range(1, n + 1):
        S += (2**k) / k
    return S

# Version optimisée avec NumPy
import numpy as np

def somme_exponentielle_numpy(n):
    k = np.arange(1, n + 1)
    return np.sum((2**k) / k)

# Exemple d'utilisation
n = 10
resultat = somme_exponentielle(n)
print(f"Somme pour n={n} : {resultat}")`
      }
    },
    {
      id: 12,
      title: "Exercice 12 - Coefficient binomial",
      difficulty: "Moyen",
      description: "Définir une fonction binomiale(n, k) qui renvoie la valeur du coefficient binomial (n k).",
      color: "orange",
      content: {
        objective: "\\text{Calculer un coefficient binomial}",
        isLatex: true,
        enonce: "Définir une fonction binomiale(n, k) qui renvoie la valeur du coefficient binomial (n k).",
        enonce_latex: "\\text{Définir une fonction binomiale(n, k) qui renvoie la valeur du coefficient binomial } \\binom{n}{k}.",
        correction: `import math

def binomiale(n, k):
    if k > n or k < 0:
        return 0
    if k == 0 or k == n:
        return 1
    
    # Utilisation de la formule avec factorielles
    return math.factorial(n) // (math.factorial(k) * math.factorial(n - k))

# Version optimisée évitant les grandes factorielles
def binomiale_optimisee(n, k):
    if k > n or k < 0:
        return 0
    if k == 0 or k == n:
        return 1
    
    k = min(k, n - k)
    R = 1
    for j in range(k):
        R = R * (n - j) // (j + 1)
    return R

print(binomiale(10, 3))
print(binomiale_optimisee(20, 10))`
      }
    },
    {
      id: 13,
      title: "Exercice 13 - Factorielle seuil",
      difficulty: "Moyen",
      description: "Écrire un script Python qui calcule le plus petit entier naturel k tel que k! > 1 000 000.",
      color: "orange"
    },
    {
      id: 14,
      title: "Exercice 14 - Fonction par cas",
      difficulty: "Moyen",
      description: "Écrire un script Python qui évalue une fonction g(x) définie par cas selon la valeur de x.",
      color: "orange"
    },
    {
      id: 15,
      title: "Exercice 15 - Sommes doubles",
      difficulty: "Moyen",
      description: "Calculer des sommes doubles avec boucles imbriquées : ∑∑ 1/(k+i) et ∑∑ k×i.",
      color: "orange",
      content: {
        objective: "\\text{Calculer des sommes doubles avec boucles imbriquées}",
        isLatex: true,
        enonce: "Calculer des sommes doubles avec boucles imbriquées : ∑∑ 1/(k+i) et ∑∑ k×i.",
        enonce_latex: "\\text{Calculer des sommes doubles avec boucles imbriquées : } \\sum_{k} \\sum_{i} \\frac{1}{k+i} \\text{ et } \\sum_{k} \\sum_{i} k \\times i.",
        correction: `# Première somme double : ∑∑ 1/(k+j)
def somme_double_1(n, p):
    S = 0
    for k in range(1, n + 1):
        for j in range(1, p + 1):
            S += 1 / (k + j)
    return S

# Deuxième somme double : ∑∑ k×j
def somme_double_2(n, p):
    S = 0
    for k in range(1, n + 1):
        for j in range(1, p + 1):
            S += k * j
    return S

n, p = 5, 3
print(f"Somme 1 : {somme_double_1(n, p)}")
print(f"Somme 2 : {somme_double_2(n, p)}")`
      }
    },
    {
      id: 16,
      title: "Exercice 16 - Approximation de racine carrée",
      difficulty: "Moyen",
      description: "Implémenter la méthode de Babylone (ou méthode de Héron) pour approcher la racine carrée d'un nombre positif.",
      color: "orange",
      content: {
        objective: "\\text{Comprendre et implémenter une méthode itérative d'approximation de racine carrée}",
        isLatex: true,
        enonce: `On considère la suite définie pour a > 0 par :

u₀ = 1
uₙ₊₁ = (uₙ + a/uₙ)/2

1. Cette suite converge vers √a. En effet, si uₙ est proche de √a, alors a/uₙ l'est aussi, et leur moyenne l'est encore plus.

2. Écrire une fonction Python qui, pour un réel a > 0 et un seuil ε > 0, renvoie une valeur approchée de √a, obtenue en arrêtant l'itération dès que |uₙ₊₁ - uₙ| ≤ ε.

3. Tester cette fonction avec a = 2 et ε = 10⁻⁵. Comparer avec la valeur exacte de √2.`,
        enonce_latex: "\\text{On considère la suite définie pour } a > 0 \\text{ par :} \\\\ u_0 = 1 \\\\ u_{n+1} = \\frac{u_n + \\frac{a}{u_n}}{2} \\\\ \\text{1. Cette suite converge vers } \\sqrt{a}. \\text{ En effet, si } u_n \\text{ est proche de } \\sqrt{a}, \\text{ alors } \\frac{a}{u_n} \\text{ l'est aussi, et leur moyenne l'est encore plus.} \\\\ \\text{2. Écrire une fonction Python qui, pour un réel } a > 0 \\text{ et un seuil } \\varepsilon > 0, \\text{ renvoie une valeur approchée de } \\sqrt{a}, \\text{ obtenue en arrêtant l'itération dès que } |u_{n+1} - u_n| \\leq \\varepsilon. \\\\ \\text{3. Tester cette fonction avec } a = 2 \\text{ et } \\varepsilon = 10^{-5}. \\text{ Comparer avec la valeur exacte de } \\sqrt{2}.",
        correction: `import numpy as np

def racine(a, eps):
    assert a > 0, "a doit être strictement positif"
    
    u = 1.0
    x = 0.5 * (u + a/u)
    
    while abs(x - u) > eps:
        u = x
        x = 0.5 * (u + a/u)
    
    return x

# Test avec a = 2 et eps = 1e-5
a, eps = 2, 1e-5
approx = racine(a, eps)
exact = np.sqrt(a)

print(f"Approximation de √{a} : {approx}")
print(f"Valeur exacte : {exact}")
print(f"Erreur absolue : {abs(approx - exact)}")
`
      }
    },
    {
      id: 17,
      title: "Exercice 17 - Analyse de courbes",
      difficulty: "Facile",
      description: "Analyser les courbes tracées par un code Python utilisant matplotlib.",
      color: "green",
      content: {
        objective: "Interpréter les courbes tracées avec matplotlib",
        enonce: "Que fait le code suivant ?\n\nx = np.linspace(-1, 2, 100)\ny = np.exp(x)\nplt.plot(x, y), plt.plot(x, x), plt.show()\nplt.plot(y, x)",
        correction: "Le programme trace le graphe de la fonction exponentielle ainsi que de sa réciproque ln."
      }
    }
  ];

  return (
    <PythonModuleLayout>
      {!showQCM && !selectedExercise && (
        <>
          <PythonExerciseHero
            moduleLabel="Module 2 · Exercices"
            title={<>Exercices · <span className="text-carnet-red">Analyse numérique</span></>}
            subtitle="Suites, calcul numérique et fonctions : implémentez des algorithmes d'analyse en Python."
            annotation={"↗ ici, ça\ndevient sérieux"}
          />

          <PythonQCMLauncher
            description="Testez vos connaissances en analyse numérique"
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
          intro="Répondez aux 20 questions pour évaluer votre niveau sur l'analyse numérique."
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

      {selectedExercise && (
        <>
          {exercises[selectedExercise - 1].content ? (
            <PythonExerciseWorkspace
              current={selectedExercise}
              total={exercises.length}
              title={exercises[selectedExercise - 1].title}
              difficulty={exercises[selectedExercise - 1].difficulty}
              description={exercises[selectedExercise - 1].description}
              onBack={() => setSelectedExercise(null)}
              onPrev={() => {
                if (selectedExercise > 1) {
                  setSelectedExercise(selectedExercise - 1);
                  window.scrollTo(0, 0);
                }
              }}
              onNext={() => {
                if (selectedExercise < exercises.length) {
                  setSelectedExercise(selectedExercise + 1);
                  window.scrollTo(0, 0);
                }
              }}
              hasPrev={selectedExercise > 1}
              hasNext={selectedExercise < exercises.length}
              objective={
                <>
                  {exercises[selectedExercise - 1].content.isLatex ? (
                    <LatexRenderer latex={exercises[selectedExercise - 1].content.objective} />
                  ) : (
                    <p>{exercises[selectedExercise - 1].content.objective}</p>
                  )}
                  {(exercises[selectedExercise - 1].content.enonce_latex || exercises[selectedExercise - 1].content.enonce) && (
                    <div className="mt-3 pt-3 border-t border-dashed border-[rgba(78,55,30,0.15)]">
                      <div className="font-instrument text-[10px] font-semibold uppercase tracking-[0.12em] text-carnet-red mb-1.5">
                        Énoncé
                      </div>
                      {exercises[selectedExercise - 1].content.enonce_latex ? (
                        <LatexRenderer latex={exercises[selectedExercise - 1].content.enonce_latex} />
                      ) : (
                        <p className="whitespace-pre-line">{exercises[selectedExercise - 1].content.enonce}</p>
                      )}
                    </div>
                  )}
                </>
              }
              editor={
                <PythonCodeEditor
                  embedded
                  minHeight={240}
                  exerciseStatement={exercises[selectedExercise - 1].content.enonce_latex || exercises[selectedExercise - 1].content.enonce || exercises[selectedExercise - 1].content.objective}
                  expectedSolution={exercises[selectedExercise - 1].content.correction || ''}
                  moduleId={moduleId}
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
                exercises[selectedExercise - 1].content.correction ? (
                  <PythonCodeBlock code={exercises[selectedExercise - 1].content.correction} />
                ) : undefined
              }
            />
          ) : (
            <>
              <PythonExerciseTopBar
                current={selectedExercise}
                total={exercises.length}
                onBack={() => setSelectedExercise(null)}
                onPrev={() => {
                  if (selectedExercise > 1) {
                    setSelectedExercise(selectedExercise - 1);
                    window.scrollTo(0, 0);
                  }
                }}
                onNext={() => {
                  if (selectedExercise < exercises.length) {
                    setSelectedExercise(selectedExercise + 1);
                    window.scrollTo(0, 0);
                  }
                }}
                hasPrev={selectedExercise > 1}
                hasNext={selectedExercise < exercises.length}
              />
              <PythonExerciseDetailHeader
                number={selectedExercise}
                title={exercises[selectedExercise - 1].title}
                difficulty={exercises[selectedExercise - 1].difficulty}
              />
            </>
          )}

          <div>
            {/* Énoncés détaillés + corrigés — toujours visibles (jamais repliés) */}

            {selectedExercise === 3 && (
              <>
                <PythonStatementCard label="Énoncé · Exercice 3" icon="book">
                  <p className="font-semibold text-carnet-ink mb-3">Interprétation de commandes</p>
                  <p className="mb-3">Que calculent les commandes suivantes :</p>
                  <div className="space-y-3">
                    <div className="bg-carnet-paper-2 p-3 rounded-lg border border-[rgba(78,55,30,0.14)]">
                      <p className="font-semibold text-[13px] text-carnet-ink mb-1">(a)</p>
                      <code className="font-mono text-[13px] text-carnet-ink-soft">x = np.ones(10) ; y = np.cumsum(x)</code>
                    </div>
                    <div className="bg-carnet-paper-2 p-3 rounded-lg border border-[rgba(78,55,30,0.14)]">
                      <p className="font-semibold text-[13px] text-carnet-ink mb-1">(b)</p>
                      <code className="font-mono text-[13px] text-carnet-ink-soft">x = np.ones(10) ; y = np.sum(np.cumsum(x))</code>
                    </div>
                    <div className="bg-carnet-paper-2 p-3 rounded-lg border border-[rgba(78,55,30,0.14)]">
                      <p className="font-semibold text-[13px] text-carnet-ink mb-1">(c)</p>
                      <code className="font-mono text-[13px] text-carnet-ink-soft">x = np.ones(10) ; y = np.sum(np.cumsum(np.cumsum(x)))</code>
                    </div>
                  </div>
                </PythonStatementCard>

                <div className="mt-6">
                  <PythonCorrectionPanel>
                    <div className="px-6 md:px-8 py-5 space-y-5">
                      <div>
                        <h4 className="font-instrument font-semibold text-[14px] text-carnet-ink mb-2">(a) x = np.ones(10) ; y = np.cumsum(x)</h4>
                        <PythonCodeBlock code={`x = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]\ny = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]`} />
                        <p className="mt-3 font-instrument text-[14px] text-carnet-ink-soft">
                          <code className="font-mono">np.cumsum(x)</code> calcule les sommes cumulées : chaque élément est la somme des éléments précédents.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-instrument font-semibold text-[14px] text-carnet-ink mb-2">(b) x = np.ones(10) ; y = np.sum(np.cumsum(x))</h4>
                        <PythonCodeBlock code={`np.cumsum(x) = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\ny = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55`} />
                        <p className="mt-3 font-instrument text-[14px] text-carnet-ink-soft">
                          Cela calcule la somme des n premiers entiers : ∑(k=1 à 10) k = 10×11/2 = 55
                        </p>
                      </div>
                      <div>
                        <h4 className="font-instrument font-semibold text-[14px] text-carnet-ink mb-2">(c) x = np.ones(10) ; y = np.sum(np.cumsum(np.cumsum(x)))</h4>
                        <PythonCodeBlock code={`np.cumsum(x) = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\nnp.cumsum(np.cumsum(x)) = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55]\ny = 1 + 3 + 6 + 10 + ... + 55 = 220`} />
                        <p className="mt-3 font-instrument text-[14px] text-carnet-ink-soft">
                          Cela calcule la somme des nombres triangulaires : ∑(k=1 à 10) k(k+1)/2
                        </p>
                      </div>
                      <div className="p-4 bg-[rgba(193,68,58,0.04)] rounded-lg border border-[rgba(193,68,58,0.12)]">
                        <p className="font-instrument text-[14px] text-carnet-ink-soft">
                          <strong className="text-carnet-red">Astuce :</strong> La double somme cumulative permet de calculer des sommes de sommes,
                          très utile pour les séries de nombres triangulaires ou les calculs combinatoires.
                        </p>
                      </div>
                    </div>
                  </PythonCorrectionPanel>
                </div>
              </>
            )}

            {selectedExercise === 10 && (
              <>
                <PythonStatementCard label="Énoncé · Exercice 10" icon="book">
                  <p className="font-semibold text-carnet-ink mb-3">Approximation de série</p>
                  <p className="mb-2">On admet que pour tout n ∈ ℕ*, on a :</p>
                  <div className="text-center font-mono text-[15px] bg-carnet-paper-2 p-3 rounded-lg border border-[rgba(78,55,30,0.14)] mb-3">
                    0 ≤ ∑(k=1 à n) 1/k² + 1/n - S ≤ 1/n²
                  </div>
                  <p className="mb-2">où S = ∑(k=1 à ∞) 1/k²</p>
                  <p>Écrire un programme Python qui demande à l'utilisateur un réel positif ε (epsilon), puis calcule une valeur approchée de la somme S à ε près.</p>
                </PythonStatementCard>

                <div className="mt-6">
                  <PythonCorrectionPanel>
                    <div className="px-6 md:px-8 py-5 space-y-5">
                      <p className="font-instrument text-[14px] text-carnet-ink-soft">Voici deux versions du programme :</p>
                      <div>
                        <h4 className="font-instrument font-semibold text-[14px] text-carnet-ink mb-2">Version 1 — Avec NumPy</h4>
                        <PythonCodeBlock code={`import numpy as np\n\neps = float(input("Entrer la précision eps : "))\nn = 1\n\nwhile 1 / n**2 > eps:\n    n += 1\n\nk = np.arange(1, n + 1)\nS_approx = np.sum(1 / k**2) + 1 / n\n\nprint("Valeur approchée de S :", S_approx)`} />
                      </div>
                      <div>
                        <h4 className="font-instrument font-semibold text-[14px] text-carnet-ink mb-2">Version 2 — Avec boucle</h4>
                        <PythonCodeBlock code={`eps = float(input("Entrer la précision eps : "))\nn = 1\nS = 1  # car 1/1^2 = 1\n\nwhile 1 / n**2 > eps:\n    n += 1\n    S += 1 / n**2\n\nS_approx = S + 1 / n\nprint("Valeur approchée de S :", S_approx)`} />
                      </div>
                      <div className="p-4 bg-[rgba(193,68,58,0.04)] rounded-lg border border-[rgba(193,68,58,0.12)]">
                        <p className="font-instrument text-[14px] text-carnet-ink-soft"><strong className="text-carnet-red">Explication :</strong></p>
                        <ul className="font-instrument text-[14px] text-carnet-ink-soft mt-2 space-y-1">
                          <li>• On trouve n tel que 1/n² ≤ eps (condition d'arrêt)</li>
                          <li>• On calcule ∑(k=1 à n) 1/k²</li>
                          <li>• On ajoute 1/n pour obtenir l'approximation</li>
                          <li>• L'erreur est majorée par 1/n² ≤ eps</li>
                        </ul>
                      </div>
                    </div>
                  </PythonCorrectionPanel>
                </div>
              </>
            )}

            {selectedExercise === 13 && (
              <>
                <PythonStatementCard label="Énoncé · Exercice 13" icon="book">
                  <p className="font-semibold text-carnet-ink mb-3">Factorielle seuil</p>
                  <p className="mb-2">Écrire un script Python qui calcule le plus petit entier naturel k tel que la factorielle de k soit strictement supérieure à un million.</p>
                  <div className="text-center font-mono text-[15px] bg-carnet-paper-2 p-3 rounded-lg border border-[rgba(78,55,30,0.14)]">
                    Trouver le plus petit k tel que k! &gt; 1 000 000
                  </div>
                </PythonStatementCard>

                <div className="mt-6">
                  <PythonCorrectionPanel>
                    <div className="px-6 md:px-8 py-5 space-y-4">
                      <p className="font-instrument text-[14px] text-carnet-ink-soft">Voici le script complet :</p>
                      <PythonCodeBlock code={`k = 1\nfact = 1\n\nwhile fact <= 10**6:\n    k = k + 1\n    fact = fact * k\n\nprint(k)`} />
                      <div className="p-4 bg-[rgba(193,68,58,0.04)] rounded-lg border border-[rgba(193,68,58,0.12)]">
                        <p className="font-instrument text-[14px] text-carnet-ink-soft"><strong className="text-carnet-red">Explication :</strong></p>
                        <ul className="font-instrument text-[14px] text-carnet-ink-soft mt-2 space-y-1">
                          <li>• On initialise k à 1 et fact à 1</li>
                          <li>• Tant que fact ≤ 1 000 000, on incrémente k et on calcule k!</li>
                          <li>• On calcule la factorielle de manière itérative : fact = fact × k</li>
                          <li>• Dès que k! &gt; 1 000 000, on affiche k</li>
                        </ul>
                      </div>
                      <div className="p-4 bg-[rgba(193,68,58,0.04)] rounded-lg border border-[rgba(193,68,58,0.12)]">
                        <p className="font-instrument text-[14px] text-carnet-ink-soft">
                          <strong className="text-carnet-red">Résultat :</strong> Le plus petit entier k tel que k! &gt; 1 000 000 est k = 10.
                        </p>
                      </div>
                    </div>
                  </PythonCorrectionPanel>
                </div>
              </>
            )}

            {selectedExercise === 14 && (
              <>
                <PythonStatementCard label="Énoncé · Exercice 14" icon="book">
                  <p className="font-semibold text-carnet-ink mb-3">Fonction par cas</p>
                  <p className="mb-2">On considère la fonction g définie sur ℝ par :</p>
                  <div className="bg-carnet-paper-2 p-3 rounded-lg border border-[rgba(78,55,30,0.14)] mb-3 font-mono text-[14px] text-carnet-ink-soft">
                    <p>g(x) = 2 si x &lt; -1</p>
                    <p>g(x) = 0 si -1 ≤ x ≤ 1</p>
                    <p>g(x) = -2 si x &gt; 1</p>
                  </div>
                  <p>Écrire un script Python qui demande à l'utilisateur de saisir un réel x, puis qui affiche la valeur de g(x).</p>
                </PythonStatementCard>

                <div className="mt-6">
                  <PythonCorrectionPanel>
                    <div className="px-6 md:px-8 py-5 space-y-4">
                      <p className="font-instrument text-[14px] text-carnet-ink-soft">Voici le script complet :</p>
                      <PythonCodeBlock code={`x = float(input("Entrer un réel x : "))\n\nif x < -1:\n    print("g(x) =", 2)\nelif x <= 1:\n    print("g(x) =", 0)\nelse:\n    print("g(x) =", -2)`} />
                      <div className="p-4 bg-[rgba(193,68,58,0.04)] rounded-lg border border-[rgba(193,68,58,0.12)]">
                        <p className="font-instrument text-[14px] text-carnet-ink-soft"><strong className="text-carnet-red">Explication :</strong></p>
                        <ul className="font-instrument text-[14px] text-carnet-ink-soft mt-2 space-y-1">
                          <li>• On lit la valeur de x avec <code className="font-mono">float(input())</code></li>
                          <li>• On teste les conditions dans l'ordre logique</li>
                          <li>• <code className="font-mono">elif x &lt;= 1</code> couvre le cas -1 ≤ x ≤ 1</li>
                          <li>• <code className="font-mono">else</code> correspond au cas x &gt; 1</li>
                        </ul>
                      </div>
                    </div>
                  </PythonCorrectionPanel>
                </div>
              </>
            )}

            {selectedExercise === 15 && (
              <>
                <PythonStatementCard label="Énoncé · Exercice 15" icon="book">
                  <p className="font-semibold text-carnet-ink mb-3">Sommes doubles</p>
                  <p className="mb-2">Écrire des scripts Python pour calculer les sommes doubles suivantes :</p>
                  <div className="space-y-3">
                    <div className="bg-carnet-paper-2 p-3 rounded-lg border border-[rgba(78,55,30,0.14)]">
                      <p className="font-semibold text-[13px] text-carnet-ink mb-1">(a) Somme 1 :</p>
                      <p className="font-mono text-[13px] text-carnet-ink-soft">∑(k=1 à n) ∑(i=1 à k) 1/(k+i)</p>
                    </div>
                    <div className="bg-carnet-paper-2 p-3 rounded-lg border border-[rgba(78,55,30,0.14)]">
                      <p className="font-semibold text-[13px] text-carnet-ink mb-1">(b) Somme 2 :</p>
                      <p className="font-mono text-[13px] text-carnet-ink-soft">∑(k=1 à n) ∑(i=1 à p) k×i</p>
                    </div>
                  </div>
                </PythonStatementCard>

                <div className="mt-6">
                  <PythonCorrectionPanel>
                    <div className="px-6 md:px-8 py-5 space-y-5">
                      <div>
                        <h4 className="font-instrument font-semibold text-[14px] text-carnet-ink mb-2">(a) Première somme double</h4>
                        <PythonCodeBlock code={`n = int(input("Entrer n : "))\nS = 0\nfor k in range(1, n + 1):\n    for j in range(1, k + 1):\n        S += 1 / (k + j)\nprint(S)`} />
                      </div>
                      <div>
                        <h4 className="font-instrument font-semibold text-[14px] text-carnet-ink mb-2">(b) Deuxième somme double</h4>
                        <PythonCodeBlock code={`n = int(input("Entrer n : "))\np = int(input("Entrer p : "))\nS = 0\nfor k in range(1, n + 1):\n    for j in range(1, p + 1):\n        S += k * j\nprint(S)`} />
                      </div>
                      <div className="p-4 bg-[rgba(193,68,58,0.04)] rounded-lg border border-[rgba(193,68,58,0.12)]">
                        <p className="font-instrument text-[14px] text-carnet-ink-soft"><strong className="text-carnet-red">Explication :</strong></p>
                        <ul className="font-instrument text-[14px] text-carnet-ink-soft mt-2 space-y-1">
                          <li>• Les boucles imbriquées permettent de parcourir tous les couples (k, j)</li>
                          <li>• Dans (a), j varie de 1 à k pour chaque k</li>
                          <li>• Dans (b), j varie de 1 à p pour chaque k</li>
                          <li>• On accumule chaque terme dans la variable S</li>
                        </ul>
                      </div>
                    </div>
                  </PythonCorrectionPanel>
                </div>
              </>
            )}

            {selectedExercise === 16 && (
              <>
                <PythonStatementCard label="Énoncé · Exercice 16" icon="book">
                  <p className="font-semibold text-carnet-ink mb-3">Approximation de racine carrée</p>
                  <p className="mb-2">Implémenter la méthode de Babylone (ou méthode de Héron) pour approcher la racine carrée d'un nombre positif.</p>
                  <div className="text-center font-mono text-[15px] bg-carnet-paper-2 p-3 rounded-lg border border-[rgba(78,55,30,0.14)] mb-3">
                    On considère la suite définie pour a {`>`} 0 par :
                  </div>
                  <div className="bg-carnet-paper-2 p-3 rounded-lg border border-[rgba(78,55,30,0.14)] mb-3 font-mono text-[14px] text-carnet-ink-soft">
                    <p>u₀ = 1</p>
                    <p>uₙ₊₁ = (uₙ + a/uₙ)/2</p>
                  </div>
                  <p className="mb-2">1. Cette suite converge vers √a. En effet, si uₙ est proche de √a, alors a/uₙ l'est aussi, et leur moyenne l'est encore plus.</p>
                  <p className="mb-2">2. Écrire une fonction Python qui, pour un réel a {`>`} 0 et un seuil ε {`>`} 0, renvoie une valeur approchée de √a, obtenue en arrêtant l'itération dès que |uₙ₊₁ - uₙ| ≤ ε.</p>
                  <p>3. Tester cette fonction avec a = 2 et ε = 10⁻⁵. Comparer avec la valeur exacte de √2.</p>
                </PythonStatementCard>

                <div className="mt-6">
                  <PythonCorrectionPanel>
                    <div className="px-6 md:px-8 py-5 space-y-4">
                      <p className="font-instrument text-[14px] text-carnet-ink-soft">Voici la fonction complète :</p>
                      <PythonCodeBlock code={`import numpy as np\n\ndef racine(a, eps):\n    assert a > 0, "a doit être strictement positif"\n\n    u = 1.0\n    x = 0.5 * (u + a/u)\n\n    while abs(x - u) > eps:\n        u = x\n        x = 0.5 * (u + a/u)\n\n    return x\n\n# Test avec a = 2 et eps = 1e-5\na, eps = 2, 1e-5\napprox = racine(a, eps)\nexact = np.sqrt(a)\n\nprint(f"Approximation de √{a} : {approx}")\nprint(f"Valeur exacte : {exact}")\nprint(f"Erreur absolue : {abs(approx - exact)}")`} />
                      <div className="p-4 bg-[rgba(193,68,58,0.04)] rounded-lg border border-[rgba(193,68,58,0.12)]">
                        <p className="font-instrument text-[14px] text-carnet-ink-soft"><strong className="text-carnet-red">Explication :</strong></p>
                        <ul className="font-instrument text-[14px] text-carnet-ink-soft mt-2 space-y-1">
                          <li>• On initialise u à 1.0 (valeur initiale supposée)</li>
                          <li>• On calcule x = 0.5 * (u + a/u) pour obtenir le premier terme de la suite</li>
                          <li>• Tant que |x - u| {`>`} eps, on met à jour u et on recalcule x</li>
                          <li>• On retourne la valeur x qui est une approximation de √a</li>
                        </ul>
                      </div>
                    </div>
                  </PythonCorrectionPanel>
                </div>
              </>
            )}
            {/* Fallback */}
            {!exercises[selectedExercise - 1].content && ![3, 10, 13, 14, 15, 16].includes(selectedExercise) && (
              <div className="bg-white border border-[rgba(78,55,30,0.14)] rounded-2xl p-10 text-center text-carnet-ink-mute">
                Le contenu de cet exercice sera bientôt disponible.
              </div>
            )}
          </div>

          <PythonExerciseFooterNav
            current={selectedExercise}
            total={exercises.length}
            onPrev={() => {
              if (selectedExercise > 1) {
                setSelectedExercise(selectedExercise - 1);
                window.scrollTo(0, 0);
              }
            }}
            onNext={() => {
              if (selectedExercise < exercises.length) {
                setSelectedExercise(selectedExercise + 1);
                window.scrollTo(0, 0);
              } else {
                setSelectedExercise(null);
              }
            }}
            hasPrev={selectedExercise > 1}
            hasNext={selectedExercise < exercises.length}
          />

          <div className="mt-20 mb-12 relative overflow-hidden rounded-3xl bg-carnet-ink py-12 px-6 sm:px-12 md:py-20 shadow-2xl border border-carnet-red-dark/30">
            {/* Background Effects */}
            <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-carnet-red/20 rounded-full blur-[120px] animate-pulse"></div>
            <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-carnet-red/20 rounded-full blur-[100px] animate-pulse delay-1000"></div>

            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div className="text-left space-y-8">
                <div>
                  <Badge variant="outline" className="mb-4 bg-carnet-red-dark/50 text-carnet-paper border-carnet-red-dark/50 px-3 py-1 text-sm font-medium">
                    <Sparkles className="w-3.5 h-3.5 mr-2 text-carnet-red fill-carnet-red" />
                    Offre spéciale Étudiants
                  </Badge>
                  <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-carnet-paper leading-tight mb-4">
                    Une <span className="italic text-carnet-red font-lora">bonne méthode</span> rend la <span className="text-carnet-paper">progression inévitable</span>.
                  </h2>
                  <p className="text-lg text-carnet-paper/80 max-w-xl leading-relaxed">
                    Ne laissez pas les lacunes s'accumuler en Python. Remplissez ce formulaire pour obtenir votre programme personnalisé et un <span className="text-carnet-paper font-semibold border-b border-carnet-red/50">premier cours offert</span>.
                  </p>
                </div>

                <div className="space-y-4">
                  {[
                    { text: '3 créneaux restants cette semaine', icon: Calendar },
                    { text: 'Réponse rapide sous 24h', icon: CheckCircle },
                    { text: 'Cours 100% offert sans engagement', icon: Star }
                  ].map((item, i) => (
                    <div key={i} className="flex items-center gap-4 text-carnet-paper/90 group">
                      <div className="h-10 w-10 rounded-xl bg-carnet-red/10 border border-carnet-red/20 flex items-center justify-center text-carnet-red group-hover:bg-carnet-red/20 group-hover:text-carnet-red-soft transition-all duration-300">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <span className="font-medium">{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 bg-carnet-red/10 blur-3xl rounded-full transform rotate-3"></div>
                <HeroContactForm showContent={true} theme="orange" />
              </div>
            </div>
          </div>

          <ModuleNavigationCards
            currentModule={{
              id: 2,
              title: "Analyse",
              slug: "analyse",
              color: "blue"
            }}
            isExercisePage={true}
            totalExercises={exercises.length}
            currentExerciseId={selectedExercise}
            onNavigate={handleNavigate}
            isQuizMode={showQCM}
            nextModule={{
              id: 3,
              title: "Probabilités",
              slug: "probabilites"
            }}
          />
        </>
      )}
    </PythonModuleLayout>
  );
};

export default PythonAnalyseExercicesPage;