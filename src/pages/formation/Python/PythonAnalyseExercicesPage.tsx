import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { TrendingUp, Target, CheckCircle, Play, ChevronLeft, ChevronRight, Calculator, ArrowLeft, Code, BookOpen, ChevronDown, ChevronUp, Trophy, Star, HelpCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import PythonModuleLayout from '@/components/formation/PythonModuleLayout';
import ModuleNavigationCards from '@/components/formation/ModuleNavigationCards';
import { LatexRenderer } from '@/components/LatexRenderer';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const PythonAnalyseExercicesPage = () => {
  const [searchParams] = useSearchParams();
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);
  const [showCorrections, setShowCorrections] = useState<Set<number>>(new Set());
  const [showQCM, setShowQCM] = useState(false);

  // États pour le QCM d'évaluation
  const [qcmAnswers, setQcmAnswers] = useState<{ [key: number]: string }>({});
  const [qcmSubmitted, setQcmSubmitted] = useState(false);
  const [qcmScore, setQcmScore] = useState<number | null>(null);

  // Détecter le paramètre quiz dans l'URL
  useEffect(() => {
    const quizParam = searchParams.get('quiz');
    if (quizParam === 'true') {
      setShowQCM(true);
    }
  }, [searchParams]);

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
    question: "Quelle différence clé entre f = lambda u: 5*u + 3 et def f(u): return 5*u + 3 ?",
    options: ["A) Lambda ne peut pas être réutilisée", "B) Def permet une docstring et un corps multi-lignes, lambda est anonyme et simple", "C) Lambda importe automatiquement NumPy", "D) Def cause une erreur d'indentation"],
    answer: "B) Def permet une docstring et un corps multi-lignes, lambda est anonyme et simple"
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
    question: "Dans le code suivant, quelle est la valeur finale de u après 4 itérations ?\nu = 1\nf = lambda u: u/2 + 1\nfor i in range(4):\n    u = f(u)\nprint(u)",
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
    question: "Pour n=5, m=4, S3 = np.sum([i² + j³ for i in range(1,6) for j in range(1,5)]) :",
    options: ["A) 1100", "B) 1300", "C) 1500", "D) 1700"],
    answer: "D) 1700"
  }, {
    id: 17,
    question: "k=np.arange(1,6); np.sum(k**2) pour n=5 :",
    options: ["A) 55", "B) 30", "C) 15", "D) Erreur arange"],
    answer: "A) 55"
  }, {
    id: 18,
    question: "Dans def terme_suite(u0, n, f): u=u0; for _ in range(n): u=f(u); return u – Pour f=lambda u:5*u+3, u0=2.4, n=3 :",
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
    """Calcule la somme harmonique S_n = sum(1/k) pour k de 1 à n"""
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
    """Trouve le premier n tel que |u_n - alpha| <= eps"""
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
    """Approximation de alpha par récurrence u_{n+1} = f(u_n)"""
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
    """Fonction f(t) = 1/(1+e^t)"""
    return 1 / (1 + math.exp(t))

def terme_suite_recurrence(u0, n):
    """Calcule u_n avec u_{k+1} = f(u_k)"""
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
    """Renvoie un tableau des m premiers termes de la suite u_n"""
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
    """Approxime la somme de 1/k² avec précision epsilon"""
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
    """Calcule la somme de 2^k/k pour k de 1 à n"""
    S = 0
    for k in range(1, n + 1):
        S += (2**k) / k
    return S

# Version optimisée avec NumPy
import numpy as np

def somme_exponentielle_numpy(n):
    """Version NumPy plus efficace"""
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
    """Calcule le coefficient binomial C(n,k) = n!/(k!(n-k)!)"""
    if k > n or k < 0:
        return 0
    if k == 0 or k == n:
        return 1
    
    # Utilisation de la formule avec factorielles
    return math.factorial(n) // (math.factorial(k) * math.factorial(n - k))

# Version optimisée évitant les grandes factorielles
def binomiale_optimisee(n, k):
    """Version optimisée pour éviter les débordements"""
    if k > n or k < 0:
        return 0
    if k == 0 or k == n:
        return 1
    
    k = min(k, n - k)  # Utilise la symétrie
    resultat = 1
    for i in range(k):
        resultat = resultat * (n - i) // (i + 1)
    return resultat

# Exemples
print(f"C(10,3) = {binomiale(10, 3)}")
print(f"C(20,10) = {binomiale_optimisee(20, 10)}")`
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
        correction: `# Première somme double : ∑∑ 1/(k+i)
def somme_double_1(n, p):
    S = 0
    for k in range(1, n + 1):
        for i in range(1, p + 1):
            S += 1 / (k + i)
    return S

# Deuxième somme double : ∑∑ k×i  
def somme_double_2(n, p):
    S = 0
    for k in range(1, n + 1):
        for i in range(1, p + 1):
            S += k * i
    return S

# Exemples
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
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">
          Module 2 : Exercices - Analyse
        </h1>
        <p className="text-xl text-muted-foreground">
          Exercices pratiques sur l'analyse numérique avec Python
        </p>
      </div>

      {!showQCM && !selectedExercise && (
        <>
          {/* Section QCM */}
          <Card className="mb-8 hover:shadow-lg transition-shadow cursor-pointer border-2 border-gray-200 hover:border-gray-300" onClick={() => setShowQCM(true)}>
            <CardHeader className="bg-gray-50">
              <CardTitle className="flex items-center gap-3">
                <Trophy className="h-8 w-8 text-gray-600" />
                <div>
                  <h2 className="text-2xl text-gray-700">QCM d'évaluation</h2>
                  <p className="text-sm text-gray-600 mt-1">Testez vos connaissances en analyse numérique</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="pt-4">
              <div className="flex items-center justify-between">
                <p className="text-gray-600">20 questions pour évaluer votre niveau</p>
                <Button variant="outline" className="flex items-center gap-2 border-gray-200 text-gray-600 hover:bg-gray-50">
                  <Play className="h-4 w-4" />
                  Commencer le QCM
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-2">
                <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-300">Suites numériques</Badge>
                <p className="text-sm text-gray-600">
                  Étudier la convergence et les propriétés des suites
                </p>
              </div>
              <div className="space-y-2">
                <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-300">Calcul numérique</Badge>
                <p className="text-sm text-gray-600">
                  Implémenter des algorithmes de calcul numérique
                </p>
              </div>
              <div className="space-y-2">
                <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-300">Fonctions et limites</Badge>
                <p className="text-sm text-gray-600">
                  Approximations et calculs de fonctions
                </p>
              </div>
            </div>
          </div>

          {/* Grille d'exercices */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exercises.map((exercise) => (
              <Card
                key={exercise.id}
                className="group cursor-pointer bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 border-2 border-gray-100 hover:border-orange-300 h-full flex flex-col"
                onClick={() => setSelectedExercise(exercise.id)}
              >
                <CardHeader className="flex-shrink-0">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-gray-50 rounded-lg flex items-center justify-center border border-gray-200 group-hover:bg-orange-50 group-hover:border-orange-200 transition-colors duration-300">
                      <Calculator className="h-6 w-6 text-gray-600 group-hover:text-orange-600 transition-colors duration-300" />
                    </div>
                    <div>
                      <CardTitle className="text-lg text-gray-800 group-hover:text-orange-600 transition-colors duration-300">Exercice {exercise.id}</CardTitle>
                      <Badge variant="secondary" className="mt-1 bg-gray-100 text-gray-700 border border-gray-200">
                        {exercise.difficulty}
                      </Badge>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col">
                  <h3 className="font-semibold mb-2 text-gray-800 flex-grow">
                    {exercise.title.replace(`Exercice ${exercise.id} - `, '')}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4 flex-grow">
                    {exercise.description}
                  </p>
                  <div className="mt-auto">
                    <Button className="w-full bg-gray-600 hover:bg-orange-600 text-white font-medium transition-colors duration-300">
                      <Play className="h-4 w-4 mr-2" />
                      Commencer l'exercice
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

          <Card className="mb-8 border-2 border-gray-200 bg-gray-50 shadow-lg">
            <CardHeader>
              <CardTitle className="flex items-center gap-3 text-gray-700">
                <Trophy className="h-6 w-6" />
                QCM d'évaluation - Testez vos connaissances
              </CardTitle>
            </CardHeader>
            <CardContent>
              {!qcmSubmitted ? (
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-gray-700 font-medium">
                      Répondez aux 20 questions pour évaluer votre niveau sur l'analyse numérique
                    </p>
                    <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-300">
                      {Object.keys(qcmAnswers).length}/20 répondues
                    </Badge>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {qcmQuestions.map((question, index) => (
                      <Card key={question.id} className="border border-gray-200 hover:border-gray-300 transition-colors">
                        <CardContent className="pt-6">
                          <div className="flex items-center gap-2 mb-3">
                            <Badge variant="outline" className="bg-gray-100 text-gray-700 border-gray-300">
                              Question {question.id}
                            </Badge>
                            {qcmAnswers[question.id] && (
                              <CheckCircle className="h-4 w-4 text-gray-600" />
                            )}
                          </div>
                          <p className="mb-4 text-sm">{question.question}</p>
                          <div className="space-y-2">
                            {question.options.map((option, optIndex) => (
                              <label key={optIndex} className="flex items-center gap-2 p-2 rounded hover:bg-gray-50 cursor-pointer">
                                <input
                                  type="radio"
                                  name={`question-${question.id}`}
                                  value={option}
                                  checked={qcmAnswers[question.id] === option}
                                  onChange={(e) => handleQCMAnswer(question.id, e.target.value)}
                                  className="text-gray-600"
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
                      className="bg-gray-600 hover:bg-gray-700 text-white px-8 py-3"
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
                        {qcmScore && qcmScore >= 16 ? "Excellent ! Vous maîtrisez parfaitement l'analyse numérique." :
                          qcmScore && qcmScore >= 12 ? "Bon niveau ! Quelques révisions pour perfectionner." :
                            qcmScore && qcmScore >= 8 ? "Niveau correct. Continuez à vous entraîner." :
                              "Niveau à améliorer. Revenez sur les bases de l'analyse numérique."}
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

      {selectedExercise && (
        <div className="min-h-screen bg-background py-8">
          <div className="max-w-6xl mx-auto px-6">
            <div className="mb-8">
              <Button
                variant="outline"
                size="sm"
                className="flex items-center gap-2 mb-6"
                onClick={() => setSelectedExercise(null)}
              >
                <ArrowLeft className="h-4 w-4" />
                Retour aux exercices
              </Button>

              <div className="text-center mb-8">
                <h1 className="text-4xl font-bold text-gray-800 mb-4">
                  {exercises[selectedExercise - 1].title}
                </h1>
                <Badge variant="secondary" className="bg-gray-100 text-gray-700">
                  {exercises[selectedExercise - 1].difficulty}
                </Badge>
              </div>
            </div>

            {/* Exercices avec contenu structuré */}
            {(selectedExercise <= 2 || selectedExercise === 17) && exercises[selectedExercise - 1].content && (
              <>
                <Card className="mb-8 border-2 border-gray-200 bg-gray-50 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-gray-700">
                      <Calculator className="h-6 w-6" />
                      Objectif de l'exercice
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-gray-700 font-medium mb-4">
                      {exercises[selectedExercise - 1].content.isLatex ? (
                        <LatexRenderer latex={exercises[selectedExercise - 1].content.objective} />
                      ) : (
                        <p>{exercises[selectedExercise - 1].content.objective}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Énoncé */}
                <Card className="mb-8 border-2 border-gray-200 bg-gray-50 shadow-lg">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-gray-700">
                      <BookOpen className="h-6 w-6" />
                      Énoncé
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="text-gray-700">
                      {exercises[selectedExercise - 1].content.enonce_latex ? (
                        <LatexRenderer latex={exercises[selectedExercise - 1].content.enonce_latex} />
                      ) : (
                        <p className="whitespace-pre-line">{exercises[selectedExercise - 1].content.enonce}</p>
                      )}
                    </div>
                  </CardContent>
                </Card>

                {/* Bouton pour afficher/masquer la correction */}
                <div className="flex justify-center mb-6">
                  <Button
                    variant="outline"
                    onClick={() => toggleCorrection(selectedExercise)}
                    className="flex items-center gap-2 border-gray-200 text-gray-600 hover:bg-gray-50"
                  >
                    {showCorrections.has(selectedExercise) ? (
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
                {showCorrections.has(selectedExercise) && (
                  <Card className="mb-8 border-2 border-gray-200 bg-gray-50 shadow-lg">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-3 text-gray-700">
                        <Code className="h-6 w-6" />
                        Correction
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="bg-blue-900 text-blue-100 rounded-lg p-4 overflow-x-auto border border-blue-300">
                        <pre className="text-blue-100 text-sm font-mono">
                          <code>{exercises[selectedExercise - 1].content.correction}</code>
                        </pre>
                      </div>
                    </CardContent>
                  </Card>
                )}
              </>
            )}

            {/* Exercices existants - Niveau Facile */}
            {selectedExercise === 1 && !exercises[selectedExercise - 1].content && (
              <>
                {/* Exercice 1 */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-gray-700">
                      <Calculator className="h-6 w-6" />
                      Exercice 1
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      {/* Énoncé 1a */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3">(a) Création de vecteur</h3>
                        <div className="p-4 bg-slate-50 rounded-lg mb-4">
                          <p className="text-sm mb-2">En une seule ligne de commande, créer le vecteur :</p>
                          <div className="text-center text-lg font-mono bg-white p-3 rounded border">
                            x = (1, 1/4, 1/9, 1/16, ..., 1/100)
                          </div>
                          <p className="text-sm mt-2 text-muted-foreground">sans saisir un à un les éléments.</p>
                        </div>

                        <Accordion type="single" collapsible>
                          <AccordionItem value="correction-1a">
                            <AccordionTrigger className="text-gray-700 font-semibold">
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Voir la correction 1(a)
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-4">
                                <p className="text-sm">
                                  On pourrait proposer l'instruction suivante, en faisant des opérations coefficient par coefficient :
                                </p>
                                <div className="bg-slate-900 rounded-lg p-4">
                                  <pre className="text-gray-600 text-sm">
                                    <code>x = np.arange(1,11)**(-2)</code>
                                  </pre>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                  <p className="text-sm text-gray-700">
                                    <strong>⚠️ Attention :</strong> Python renvoie un message d'erreur, car on part d'un vecteur
                                    <code className="bg-white px-1 rounded">np.arange(1,11)</code> d'entiers pour obtenir un vecteur
                                    contenant a priori des flottants, ce que Python ne permet pas.
                                  </p>
                                </div>
                                <p className="text-sm">
                                  <strong>Solution :</strong> On va donc modifier le vecteur de départ pour qu'il contienne dès le début des flottants :
                                </p>
                                <div className="bg-slate-900 rounded-lg p-4">
                                  <pre className="text-gray-600 text-sm">
                                    <code>x = np.arange(1.,11.)**(-2)</code>
                                  </pre>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>

                      {/* Énoncé 1b */}
                      <div>
                        <h3 className="text-lg font-semibold mb-3">(b) Calcul de somme</h3>
                        <div className="p-4 bg-slate-50 rounded-lg mb-4">
                          <p className="text-sm mb-2">Compléter la commande précédente pour qu'elle renvoie :</p>
                          <div className="text-center text-lg font-mono bg-white p-3 rounded border">
                            ∑(k=1 à 10) 1/k²
                          </div>
                        </div>

                        <Accordion type="single" collapsible>
                          <AccordionItem value="correction-1b">
                            <AccordionTrigger className="text-gray-700 font-semibold">
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Voir la correction 1(b)
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-4">
                                <p className="text-sm">
                                  Il suffit d'ajouter la fonction <code className="bg-slate-100 px-1 rounded">np.sum()</code> :
                                </p>
                                <div className="bg-slate-900 rounded-lg p-4">
                                  <pre className="text-gray-600 text-sm">
                                    <code>np.sum(np.arange(1.,11.)**(-2))</code>
                                  </pre>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                  <p className="text-sm text-gray-700">
                                    Cette commande calcule la somme des 10 premiers termes de la série harmonique d'ordre 2.
                                  </p>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}

            {selectedExercise === 2 && (
              <>
                {/* Exercice 2 */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-gray-700">
                      <Calculator className="h-6 w-6" />
                      Exercice 2
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Calcul de somme géométrique</h3>
                        <div className="p-4 bg-slate-50 rounded-lg mb-4">
                          <p className="text-sm mb-2">En une seule ligne de commande, calculer la somme :</p>
                          <div className="text-center text-lg bg-white p-3 rounded border">
                            <LatexRenderer latex="\\sum_{n=0}^{10} \\frac{1}{2^n}" />
                          </div>
                        </div>

                        <Accordion type="single" collapsible>
                          <AccordionItem value="correction-2">
                            <AccordionTrigger className="text-gray-700 font-semibold">
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Voir la correction 2
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-4">
                                <p className="text-sm">
                                  La solution utilise les puissances de 2 avec NumPy :
                                </p>
                                <div className="bg-slate-900 rounded-lg p-4">
                                  <pre className="text-gray-600 text-sm">
                                    <code>np.sum(1 / 2**np.arange(11))</code>
                                  </pre>
                                </div>
                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                  <p className="text-sm text-gray-700">
                                    <strong>Explication :</strong>
                                  </p>
                                  <ul className="text-sm text-gray-700 mt-2 space-y-1">
                                    <li>• <code>np.arange(11)</code> crée [0, 1, 2, ..., 10]</li>
                                    <li>• <code>2**np.arange(11)</code> donne [1, 2, 4, 8, ..., 1024]</li>
                                    <li>• <code>1 / 2**np.arange(11)</code> produit [1, 1/2, 1/4, 1/8, ..., 1/1024]</li>
                                    <li>• <code>np.sum()</code> calcule la somme totale</li>
                                  </ul>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}

            {selectedExercise === 3 && (
              <>
                {/* Exercice 3 */}
                <Card className="mb-8">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-gray-700">
                      <Calculator className="h-6 w-6" />
                      Exercice 3
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">Interprétation de commandes</h3>
                        <div className="p-4 bg-slate-50 rounded-lg mb-4">
                          <p className="text-sm mb-3">Que calculent les commandes suivantes :</p>

                          <div className="space-y-3">
                            <div className="bg-white p-3 rounded border">
                              <p className="font-semibold text-sm mb-1">(a)</p>
                              <code className="text-sm">x = np.ones(10) ; y = np.cumsum(x)</code>
                            </div>

                            <div className="bg-white p-3 rounded border">
                              <p className="font-semibold text-sm mb-1">(b)</p>
                              <code className="text-sm">x = np.ones(10) ; y = np.sum(np.cumsum(x))</code>
                            </div>

                            <div className="bg-white p-3 rounded border">
                              <p className="font-semibold text-sm mb-1">(c)</p>
                              <code className="text-sm">x = np.ones(10) ; y = np.sum(np.cumsum(np.cumsum(x)))</code>
                            </div>
                          </div>
                        </div>

                        <Accordion type="single" collapsible>
                          <AccordionItem value="correction-3">
                            <AccordionTrigger className="text-gray-700 font-semibold">
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Voir la correction 3
                            </AccordionTrigger>
                            <AccordionContent>
                              <div className="space-y-6">
                                <div>
                                  <h4 className="font-semibold text-sm mb-2">(a) x = np.ones(10) ; y = np.cumsum(x)</h4>
                                  <div className="bg-slate-900 rounded-lg p-4 mb-3">
                                    <pre className="text-gray-600 text-sm">
                                      <code>x = [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]</code>
                                      <br />
                                      <code>y = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</code>
                                    </pre>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    <code>np.cumsum(x)</code> calcule les sommes cumulées : chaque élément est la somme des éléments précédents.
                                  </p>
                                </div>

                                <div>
                                  <h4 className="font-semibold text-sm mb-2">(b) x = np.ones(10) ; y = np.sum(np.cumsum(x))</h4>
                                  <div className="bg-slate-900 rounded-lg p-4 mb-3">
                                    <pre className="text-gray-600 text-sm">
                                      <code>np.cumsum(x) = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</code>
                                      <br />
                                      <code>y = 1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + 10 = 55</code>
                                    </pre>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    Cela calcule la somme des n premiers entiers : ∑(k=1 à 10) k = 10×11/2 = 55
                                  </p>
                                </div>

                                <div>
                                  <h4 className="font-semibold text-sm mb-2">(c) x = np.ones(10) ; y = np.sum(np.cumsum(np.cumsum(x)))</h4>
                                  <div className="bg-slate-900 rounded-lg p-4 mb-3">
                                    <pre className="text-gray-600 text-sm">
                                      <code>np.cumsum(x) = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]</code>
                                      <br />
                                      <code>np.cumsum(np.cumsum(x)) = [1, 3, 6, 10, 15, 21, 28, 36, 45, 55]</code>
                                      <br />
                                      <code>y = 1 + 3 + 6 + 10 + ... + 55 = 220</code>
                                    </pre>
                                  </div>
                                  <p className="text-sm text-muted-foreground">
                                    Cela calcule la somme des nombres triangulaires : ∑(k=1 à 10) k(k+1)/2
                                  </p>
                                </div>

                                <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                  <p className="text-sm text-gray-700">
                                    <strong>Astuce :</strong> La double somme cumulative permet de calculer des sommes de sommes,
                                    très utile pour les séries de nombres triangulaires ou les calculs combinatoires.
                                  </p>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}

            {/* Exercices 4-9 - Niveau Moyen */}
            {selectedExercise === 4 && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-gray-700">
                    <Calculator className="h-6 w-6" />
                    Exercice 4
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Somme harmonique</h3>
                      <div className="p-4 bg-slate-50 rounded-lg mb-4">
                        <p className="text-sm mb-2">Compléter la fonction Python suivante pour qu'elle :</p>
                        <ul className="text-sm space-y-1 mb-3">
                          <li>• prenne en argument un entier naturel non nul n ;</li>
                          <li>• renvoie la somme harmonique définie par :</li>
                        </ul>
                        <div className="text-center text-lg font-mono bg-white p-3 rounded border">
                          Sₙ = ∑(k=1 à n) 1/k
                        </div>
                      </div>

                      <Accordion type="single" collapsible>
                        <AccordionItem value="correction-4">
                          <AccordionTrigger className="text-gray-700 font-semibold">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Voir la correction 4
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4">
                              <p className="text-sm">
                                Voici la fonction complète pour calculer la somme harmonique :
                              </p>
                              <div className="bg-slate-900 rounded-lg p-4">
                                <pre className="text-gray-600 text-sm">
                                  <code>{`def sommeHarmonique(n):
    S = 0
    for k in range(1, n+1):
        S += 1 / k
    return S`}</code>
                                </pre>
                              </div>
                              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <p className="text-sm text-gray-700">
                                  <strong>Explication :</strong>
                                </p>
                                <ul className="text-sm text-gray-700 mt-2 space-y-1">
                                  <li>• On initialise S à 0</li>
                                  <li>• On parcourt k de 1 à n inclus avec <code>range(1, n+1)</code></li>
                                  <li>• On ajoute 1/k à S à chaque itération</li>
                                  <li>• On retourne la somme totale S</li>
                                </ul>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedExercise === 5 && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-gray-700">
                    <Calculator className="h-6 w-6" />
                    Exercice 5
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Condition d'arrêt</h3>
                      <div className="p-4 bg-slate-50 rounded-lg mb-4">
                        <p className="text-sm mb-2">Compléter le script Python suivant pour qu'il affiche le premier entier naturel non nul n vérifiant :</p>
                        <div className="text-center text-lg font-mono bg-white p-3 rounded border">
                          n²e⁻ⁿ &lt; 10⁻⁴
                        </div>
                      </div>

                      <Accordion type="single" collapsible>
                        <AccordionItem value="correction-5">
                          <AccordionTrigger className="text-gray-700 font-semibold">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Voir la correction 5
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4">
                              <p className="text-sm">
                                Voici le script complet utilisant une boucle while :
                              </p>
                              <div className="bg-slate-900 rounded-lg p-4">
                                <pre className="text-gray-600 text-sm">
                                  <code>{`import numpy as np

n = 1
while (n**2) * np.exp(-n) >= 10**(-4):
    n += 1
print(n)`}</code>
                                </pre>
                              </div>
                              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <p className="text-sm text-gray-700">
                                  <strong>Explication :</strong>
                                </p>
                                <ul className="text-sm text-gray-700 mt-2 space-y-1">
                                  <li>• On initialise n à 1</li>
                                  <li>• Tant que n²e⁻ⁿ ≥ 10⁻⁴, on incrémente n</li>
                                  <li>• On s'arrête dès que la condition n²e⁻ⁿ &lt; 10⁻⁴ est vérifiée</li>
                                  <li>• On affiche la valeur de n trouvée</li>
                                </ul>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedExercise === 6 && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-gray-700">
                    <Calculator className="h-6 w-6" />
                    Exercice 6
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Convergence de suite</h3>
                      <div className="p-4 bg-slate-50 rounded-lg mb-4">
                        <p className="text-sm mb-2">On considère une suite (uₙ) et un réel α tels que :</p>
                        <div className="text-center text-lg font-mono bg-white p-3 rounded border mb-3">
                          |uₙ - α| ≤ 1/2ⁿ
                        </div>
                        <p className="text-sm mb-2">Compléter la fonction Python suivante pour qu'elle :</p>
                        <ul className="text-sm space-y-1">
                          <li>• prenne en argument un réel strictement positif eps</li>
                          <li>• renvoie un entier naturel n vérifiant : |uₙ - α| ≤ eps</li>
                        </ul>
                      </div>

                      <Accordion type="single" collapsible>
                        <AccordionItem value="correction-6">
                          <AccordionTrigger className="text-gray-700 font-semibold">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Voir la correction 6
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4">
                              <p className="text-sm">
                                Voici la fonction complète :
                              </p>
                              <div className="bg-slate-900 rounded-lg p-4">
                                <pre className="text-gray-600 text-sm">
                                  <code>{`def entier(eps):
    n = 0
    while 1 / (2**n) > eps:
        n += 1
    return n`}</code>
                                </pre>
                              </div>
                              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <p className="text-sm text-gray-700">
                                  <strong>Explication :</strong>
                                </p>
                                <ul className="text-sm text-gray-700 mt-2 space-y-1">
                                  <li>• On initialise n à 0</li>
                                  <li>• Tant que 1/2ⁿ &gt; eps, on incrémente n</li>
                                  <li>• On s'arrête dès que 1/2ⁿ ≤ eps</li>
                                  <li>• Comme |uₙ - α| ≤ 1/2ⁿ, on a alors |uₙ - α| ≤ eps</li>
                                </ul>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedExercise === 7 && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-gray-700">
                    <Calculator className="h-6 w-6" />
                    Exercice 7
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Approximation par récurrence</h3>
                      <div className="p-4 bg-slate-50 rounded-lg mb-4">
                        <p className="text-sm mb-2">On suppose maintenant que (uₙ) est définie par récurrence par :</p>
                        <p className="text-sm mb-2">On suppose aussi que la fonction f est déjà codée en Python.</p>
                        <p className="text-sm mb-2">Compléter la fonction Python suivante pour qu'elle :</p>
                        <ul className="text-sm space-y-1">
                          <li>• prenne en argument un réel strictement positif eps</li>
                          <li>• renvoie une valeur approchée de α à eps près.</li>
                        </ul>
                      </div>

                      <Accordion type="single" collapsible>
                        <AccordionItem value="correction-7">
                          <AccordionTrigger className="text-gray-700 font-semibold">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Voir la correction 7
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4">
                              <p className="text-sm">
                                Voici la fonction complète :
                              </p>
                              <div className="bg-slate-900 rounded-lg p-4">
                                <pre className="text-gray-600 text-sm">
                                  <code>{`def valApprox(eps):
    n, u = 0, 2
    while 1 / (2**n) > eps:
        n += 1
        u = f(u)
    return u`}</code>
                                </pre>
                              </div>
                              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <p className="text-sm text-gray-700">
                                  <strong>Explication :</strong>
                                </p>
                                <ul className="text-sm text-gray-700 mt-2 space-y-1">
                                  <li>• On initialise n à 0 et u à 2 (valeur initiale supposée)</li>
                                  <li>• Tant que 1/2ⁿ &gt; eps, on incrémente n et on calcule u = f(u)</li>
                                  <li>• On s'arrête dès que la précision eps est atteinte</li>
                                  <li>• On retourne la valeur u qui est une approximation de α</li>
                                </ul>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedExercise === 8 && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-gray-700">
                    <Calculator className="h-6 w-6" />
                    Exercice 8
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Suite définie par récurrence</h3>
                      <div className="p-4 bg-slate-50 rounded-lg mb-4">
                        <p className="text-sm mb-2">Soit la fonction f : t ↦ 1/(1+eᵗ).</p>
                        <p className="text-sm mb-2">On considère la suite (uₙ) définie par :</p>
                        <div className="bg-white p-3 rounded border mb-3">
                          <p className="text-sm font-mono">u₀ = 0</p>
                          <p className="text-sm font-mono">uₙ₊₁ = f(uₙ)</p>
                        </div>
                        <p className="text-sm mb-2">Compléter la fonction Python suivante pour qu'elle :</p>
                        <ul className="text-sm space-y-1">
                          <li>• prenne en argument un entier naturel n ;</li>
                          <li>• renvoie le terme uₙ de la suite.</li>
                        </ul>
                      </div>

                      <Accordion type="single" collapsible>
                        <AccordionItem value="correction-8">
                          <AccordionTrigger className="text-gray-700 font-semibold">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Voir la correction 8
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4">
                              <p className="text-sm">
                                Voici la fonction complète :
                              </p>
                              <div className="bg-slate-900 rounded-lg p-4">
                                <pre className="text-gray-600 text-sm">
                                  <code>{`import numpy as np

def suite(n):
    u = 0
    for k in range(n):
        u = 1 / (1 + np.exp(u))
    return u`}</code>
                                </pre>
                              </div>
                              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <p className="text-sm text-gray-700">
                                  <strong>Explication :</strong>
                                </p>
                                <ul className="text-sm text-gray-700 mt-2 space-y-1">
                                  <li>• On initialise u à 0 (terme initial u₀)</li>
                                  <li>• On itère n fois en appliquant la relation de récurrence</li>
                                  <li>• À chaque étape, u devient f(u) = 1/(1+e^u)</li>
                                  <li>• On retourne le terme uₙ calculé</li>
                                </ul>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedExercise === 9 && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-gray-700">
                    <Calculator className="h-6 w-6" />
                    Exercice 9
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Tableau de suite</h3>
                      <div className="p-4 bg-slate-50 rounded-lg mb-4">
                        <p className="text-sm mb-2">On considère la suite (uₙ) définie par :</p>
                        <div className="bg-white p-3 rounded border mb-3">
                          <p className="text-sm font-mono">u₀ = 3/2</p>
                          <p className="text-sm font-mono">uₙ₊₁ = ln(1 + uₙ) + uₙ²</p>
                        </div>
                        <p className="text-sm mb-2">Compléter la fonction Python suivante pour qu'elle :</p>
                        <ul className="text-sm space-y-1">
                          <li>• prenne en argument un entier naturel m ;</li>
                          <li>• renvoie un tableau contenant les m premiers termes de la suite (uₙ).</li>
                        </ul>
                      </div>

                      <Accordion type="single" collapsible>
                        <AccordionItem value="correction-9">
                          <AccordionTrigger className="text-gray-700 font-semibold">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Voir la correction 9
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4">
                              <p className="text-sm">
                                Voici la fonction complète :
                              </p>
                              <div className="bg-slate-900 rounded-lg p-4">
                                <pre className="text-gray-600 text-sm">
                                  <code>{`import numpy as np

def premSuiteUTab(m):
    T = np.zeros(m)
    T[0] = 3/2
    for i in range(1, m):
        T[i] = np.log(1 + T[i - 1]) + T[i - 1] ** 2
    return T`}</code>
                                </pre>
                              </div>
                              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <p className="text-sm text-gray-700">
                                  <strong>Explication :</strong>
                                </p>
                                <ul className="text-sm text-gray-700 mt-2 space-y-1">
                                  <li>• On crée un tableau T de m zéros avec <code>np.zeros(m)</code></li>
                                  <li>• On initialise T[0] = 3/2 (terme initial)</li>
                                  <li>• On calcule chaque terme suivant avec la relation de récurrence</li>
                                  <li>• On utilise <code>np.log()</code> pour le logarithme naturel</li>
                                </ul>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {/* Nouveaux exercices 10-15 */}
            {selectedExercise === 10 && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-gray-700">
                    <Calculator className="h-6 w-6" />
                    Exercice 10
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Approximation de série</h3>
                      <div className="p-4 bg-slate-50 rounded-lg mb-4">
                        <p className="text-sm mb-2">On admet que pour tout n ∈ ℕ*, on a :</p>
                        <div className="text-center text-lg font-mono bg-white p-3 rounded border mb-3">
                          0 ≤ ∑(k=1 à n) 1/k² + 1/n - S ≤ 1/n²
                        </div>
                        <p className="text-sm mb-2">où S = ∑(k=1 à ∞) 1/k²</p>
                        <p className="text-sm">Écrire un programme Python qui demande à l'utilisateur un réel positif ε (epsilon), puis calcule une valeur approchée de la somme S à ε près.</p>
                      </div>

                      <Accordion type="single" collapsible>
                        <AccordionItem value="correction-10">
                          <AccordionTrigger className="text-gray-700 font-semibold">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Voir la correction 10
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4">
                              <p className="text-sm">
                                Voici deux versions du programme :
                              </p>

                              <div>
                                <h4 className="font-semibold text-sm mb-2">Version 1 - Avec NumPy</h4>
                                <div className="bg-slate-900 rounded-lg p-4">
                                  <pre className="text-gray-600 text-sm">
                                    <code>{`import numpy as np

eps = float(input("Entrer la précision eps : "))
n = 1

while 1 / n**2 > eps:
    n += 1

k = np.arange(1, n + 1)
S_approx = np.sum(1 / k**2) + 1 / n

print("Valeur approchée de S :", S_approx)`}</code>
                                  </pre>
                                </div>
                              </div>

                              <div>
                                <h4 className="font-semibold text-sm mb-2">Version 2 - Avec boucle</h4>
                                <div className="bg-slate-900 rounded-lg p-4">
                                  <pre className="text-gray-600 text-sm">
                                    <code>{`eps = float(input("Entrer la précision eps : "))
n = 1
S = 1  # car 1/1^2 = 1

while 1 / n**2 > eps:
    n += 1
    S += 1 / n**2

S_approx = S + 1 / n
print("Valeur approchée de S :", S_approx)`}</code>
                                  </pre>
                                </div>
                              </div>

                              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <p className="text-sm text-gray-700">
                                  <strong>Explication :</strong>
                                </p>
                                <ul className="text-sm text-gray-700 mt-2 space-y-1">
                                  <li>• On trouve n tel que 1/n² ≤ eps (condition d'arrêt)</li>
                                  <li>• On calcule ∑(k=1 à n) 1/k²</li>
                                  <li>• On ajoute 1/n pour obtenir l'approximation</li>
                                  <li>• L'erreur est majorée par 1/n² ≤ eps</li>
                                </ul>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedExercise === 11 && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-gray-700">
                    <Calculator className="h-6 w-6" />
                    Exercice 11
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Somme exponentielle</h3>
                      <div className="p-4 bg-slate-50 rounded-lg mb-4">
                        <p className="text-sm mb-2">Écrire une fonction Python <code>somme_exponentielle(n)</code> qui prend en paramètre un entier naturel n et retourne la valeur de la somme suivante :</p>
                        <div className="text-center text-lg font-mono bg-white p-3 rounded border mb-3">
                          ∑(k=1 à n) 2ᵏ/k
                        </div>
                        <p className="text-sm">Puis écrire un script principal qui demande à l'utilisateur de saisir un entier n, et affiche la valeur de cette somme.</p>
                      </div>

                      <Accordion type="single" collapsible>
                        <AccordionItem value="correction-11">
                          <AccordionTrigger className="text-gray-700 font-semibold">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Voir la correction 11
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4">
                              <p className="text-sm">
                                Voici la fonction et le script principal :
                              </p>
                              <div className="bg-slate-900 rounded-lg p-4">
                                <pre className="text-gray-600 text-sm">
                                  <code>{`def somme_exponentielle(n):
    S = 0
    for k in range(1, n + 1):
        S += (2 ** k) / k
    return S

# Script principal
n = int(input("Entrer un entier n : "))
resultat = somme_exponentielle(n)
print("Somme =", resultat)`}</code>
                                </pre>
                              </div>
                              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <p className="text-sm text-gray-700">
                                  <strong>Explication :</strong>
                                </p>
                                <ul className="text-sm text-gray-700 mt-2 space-y-1">
                                  <li>• La fonction parcourt k de 1 à n</li>
                                  <li>• À chaque étape, on calcule 2ᵏ/k et on l'ajoute à S</li>
                                  <li>• <code>2 ** k</code> calcule 2 puissance k</li>
                                  <li>• Le script principal appelle la fonction et affiche le résultat</li>
                                </ul>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedExercise === 12 && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-gray-700">
                    <Calculator className="h-6 w-6" />
                    Exercice 12
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Coefficient binomial</h3>
                      <div className="p-4 bg-slate-50 rounded-lg mb-4">
                        <p className="text-sm mb-2">Définir une fonction <code>binomiale(n, k)</code> qui renvoie la valeur du coefficient binomial (n k), défini par :</p>
                        <div className="bg-white p-3 rounded border mb-3">
                          <p className="text-sm font-mono">• 0 si k &gt; n</p>
                          <p className="text-sm font-mono">• 1 si k = 0</p>
                          <p className="text-sm font-mono">• n(n-1)...(n-k+1) / (1×2×...×k) si 1 ≤ k ≤ n</p>
                        </div>
                      </div>

                      <Accordion type="single" collapsible>
                        <AccordionItem value="correction-12">
                          <AccordionTrigger className="text-gray-700 font-semibold">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Voir la correction 12
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4">
                              <p className="text-sm">
                                Voici la fonction complète :
                              </p>
                              <div className="bg-slate-900 rounded-lg p-4">
                                <pre className="text-gray-600 text-sm">
                                  <code>{`def binomiale(n, k):
    if k > n:
        return 0
    result = 1
    for i in range(1, k + 1):
        result = result * (n - i + 1) / i
    return int(result)`}</code>
                                </pre>
                              </div>
                              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <p className="text-sm text-gray-700">
                                  <strong>Explication :</strong>
                                </p>
                                <ul className="text-sm text-gray-700 mt-2 space-y-1">
                                  <li>• Si k &gt; n, on retourne 0 directement</li>
                                  <li>• On initialise result à 1</li>
                                  <li>• On multiplie par (n-i+1) et divise par i pour chaque i de 1 à k</li>
                                  <li>• Cette méthode évite les calculs de factorielles qui peuvent être très grandes</li>
                                </ul>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedExercise === 13 && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-gray-700">
                    <Calculator className="h-6 w-6" />
                    Exercice 13
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Factorielle seuil</h3>
                      <div className="p-4 bg-slate-50 rounded-lg mb-4">
                        <p className="text-sm mb-2">Écrire un script Python qui calcule le plus petit entier naturel k tel que la factorielle de k soit strictement supérieure à un million.</p>
                        <div className="text-center text-lg font-mono bg-white p-3 rounded border">
                          Trouver le plus petit k tel que k! &gt; 1 000 000
                        </div>
                      </div>

                      <Accordion type="single" collapsible>
                        <AccordionItem value="correction-13">
                          <AccordionTrigger className="text-gray-700 font-semibold">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Voir la correction 13
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4">
                              <p className="text-sm">
                                Voici le script complet :
                              </p>
                              <div className="bg-slate-900 rounded-lg p-4">
                                <pre className="text-gray-600 text-sm">
                                  <code>{`k = 1
fact = 1

while fact <= 10**6:
    k = k + 1
    fact = fact * k

print(k)`}</code>
                                </pre>
                              </div>
                              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <p className="text-sm text-gray-700">
                                  <strong>Explication :</strong>
                                </p>
                                <ul className="text-sm text-gray-700 mt-2 space-y-1">
                                  <li>• On initialise k à 1 et fact à 1</li>
                                  <li>• Tant que fact ≤ 1 000 000, on incrémente k et on calcule k!</li>
                                  <li>• On calcule la factorielle de manière itérative : fact = fact × k</li>
                                  <li>• Dès que k! &gt; 1 000 000, on affiche k</li>
                                </ul>
                              </div>
                              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <p className="text-sm text-gray-700">
                                  <strong>Résultat :</strong> Le plus petit entier k tel que k! &gt; 1 000 000 est k = 10.
                                </p>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedExercise === 14 && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-gray-700">
                    <Calculator className="h-6 w-6" />
                    Exercice 14
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Fonction par cas</h3>
                      <div className="p-4 bg-slate-50 rounded-lg mb-4">
                        <p className="text-sm mb-2">On considère la fonction g définie sur ℝ par :</p>
                        <div className="bg-white p-3 rounded border mb-3">
                          <p className="text-sm font-mono">g(x) = 2 si x &lt; -1</p>
                          <p className="text-sm font-mono">g(x) = 0 si -1 ≤ x ≤ 1</p>
                          <p className="text-sm font-mono">g(x) = -2 si x &gt; 1</p>
                        </div>
                        <p className="text-sm">Écrire un script Python qui demande à l'utilisateur de saisir un réel x, puis qui affiche la valeur de g(x).</p>
                      </div>

                      <Accordion type="single" collapsible>
                        <AccordionItem value="correction-14">
                          <AccordionTrigger className="text-gray-700 font-semibold">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Voir la correction 14
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4">
                              <p className="text-sm">
                                Voici le script complet :
                              </p>
                              <div className="bg-slate-900 rounded-lg p-4">
                                <pre className="text-gray-600 text-sm">
                                  <code>{`x = float(input("Entrer un réel x : "))

if x < -1:
    print("g(x) =", 2)
elif x <= 1:
    print("g(x) =", 0)
else:
    print("g(x) =", -2)`}</code>
                                </pre>
                              </div>
                              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <p className="text-sm text-gray-700">
                                  <strong>Explication :</strong>
                                </p>
                                <ul className="text-sm text-gray-700 mt-2 space-y-1">
                                  <li>• On lit la valeur de x avec <code>float(input())</code></li>
                                  <li>• On teste les conditions dans l'ordre logique</li>
                                  <li>• <code>elif x &lt;= 1</code> couvre le cas -1 ≤ x ≤ 1</li>
                                  <li>• <code>else</code> correspond au cas x &gt; 1</li>
                                </ul>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedExercise === 15 && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-gray-700">
                    <Calculator className="h-6 w-6" />
                    Exercice 15
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Sommes doubles</h3>
                      <div className="p-4 bg-slate-50 rounded-lg mb-4">
                        <p className="text-sm mb-2">Écrire des scripts Python pour calculer les sommes doubles suivantes :</p>
                        <div className="space-y-3">
                          <div className="bg-white p-3 rounded border">
                            <p className="font-semibold text-sm mb-1">(a) Somme 1 :</p>
                            <p className="text-sm font-mono">∑(k=1 à n) ∑(i=1 à k) 1/(k+i)</p>
                          </div>
                          <div className="bg-white p-3 rounded border">
                            <p className="font-semibold text-sm mb-1">(b) Somme 2 :</p>
                            <p className="text-sm font-mono">∑(k=1 à n) ∑(i=1 à p) k×i</p>
                          </div>
                        </div>
                      </div>

                      <Accordion type="single" collapsible>
                        <AccordionItem value="correction-15">
                          <AccordionTrigger className="text-gray-700 font-semibold">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Voir la correction 15
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4">
                              <div>
                                <h4 className="font-semibold text-sm mb-2">(a) Première somme double</h4>
                                <div className="bg-slate-900 rounded-lg p-4">
                                  <pre className="text-gray-600 text-sm">
                                    <code>{`n = int(input("Entrer n : "))
S = 0
for k in range(1, n + 1):
    for i in range(1, k + 1):
        S += 1 / (k + i)
print("Somme :", S)`}</code>
                                  </pre>
                                </div>
                              </div>

                              <div>
                                <h4 className="font-semibold text-sm mb-2">(b) Deuxième somme double</h4>
                                <div className="bg-slate-900 rounded-lg p-4">
                                  <pre className="text-gray-600 text-sm">
                                    <code>{`n = int(input("Entrer n : "))
p = int(input("Entrer p : "))
S = 0
for k in range(1, n + 1):
    for i in range(1, p + 1):
        S += k * i
print("Somme :", S)`}</code>
                                  </pre>
                                </div>
                              </div>

                              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <p className="text-sm text-gray-700">
                                  <strong>Explication :</strong>
                                </p>
                                <ul className="text-sm text-gray-700 mt-2 space-y-1">
                                  <li>• Les boucles imbriquées permettent de parcourir tous les couples (k,i)</li>
                                  <li>• Dans (a), i varie de 1 à k pour chaque k</li>
                                  <li>• Dans (b), i varie de 1 à p pour chaque k</li>
                                  <li>• On accumule chaque terme dans la variable S</li>
                                </ul>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}

            {selectedExercise === 16 && (
              <Card className="mb-8">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3 text-gray-700">
                    <Calculator className="h-6 w-6" />
                    Exercice 16
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-6">
                    <div>
                      <h3 className="text-lg font-semibold mb-3">Approximation de racine carrée</h3>
                      <div className="p-4 bg-slate-50 rounded-lg mb-4">
                        <p className="text-sm mb-2">Implémenter la méthode de Babylone (ou méthode de Héron) pour approcher la racine carrée d'un nombre positif.</p>
                        <div className="text-center text-lg font-mono bg-white p-3 rounded border mb-3">
                          On considère la suite définie pour a {`>`} 0 par :
                        </div>
                        <div className="bg-white p-3 rounded border mb-3">
                          <p className="text-sm font-mono">u₀ = 1</p>
                          <p className="text-sm font-mono">uₙ₊₁ = (uₙ + a/uₙ)/2</p>
                        </div>
                        <p className="text-sm mb-2">1. Cette suite converge vers √a. En effet, si uₙ est proche de √a, alors a/uₙ l'est aussi, et leur moyenne l'est encore plus.</p>
                        <p className="text-sm mb-2">2. Écrire une fonction Python qui, pour un réel a {`>`} 0 et un seuil ε {`>`} 0, renvoie une valeur approchée de √a, obtenue en arrêtant l'itération dès que |uₙ₊₁ - uₙ| ≤ ε.</p>
                        <p className="text-sm mb-2">3. Tester cette fonction avec a = 2 et ε = 10⁻⁵. Comparer avec la valeur exacte de √2.</p>
                      </div>

                      <Accordion type="single" collapsible>
                        <AccordionItem value="correction-16">
                          <AccordionTrigger className="text-gray-700 font-semibold">
                            <CheckCircle className="h-4 w-4 mr-2" />
                            Voir la correction 16
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="space-y-4">
                              <p className="text-sm">
                                Voici la fonction complète :
                              </p>
                              <div className="bg-slate-900 rounded-lg p-4">
                                <pre className="text-gray-600 text-sm">
                                  <code>{`import numpy as np

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
`}</code>
                                </pre>
                              </div>
                              <div className="p-4 bg-gray-50 rounded-lg border border-gray-200">
                                <p className="text-sm text-gray-700">
                                  <strong>Explication :</strong>
                                </p>
                                <ul className="text-sm text-gray-700 mt-2 space-y-1">
                                  <li>• On initialise u à 1.0 (valeur initiale supposée)</li>
                                  <li>• On calcule x = 0.5 * (u + a/u) pour obtenir le premier terme de la suite</li>
                                  <li>• Tant que |x - u| {`>`} eps, on met à jour u et on recalcule x</li>
                                  <li>• On retourne la valeur u qui est une approximation de √a</li>
                                </ul>
                              </div>
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
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
          />
        </div>
      )}
    </PythonModuleLayout>
  );
};

export default PythonAnalyseExercicesPage;