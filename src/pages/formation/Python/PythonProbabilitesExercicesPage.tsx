import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { BarChart3, CheckCircle, Play, Code, ChevronDown, ChevronUp, Trophy, ArrowLeft, Target, HelpCircle, Star } from 'lucide-react';
import PythonModuleLayout from '@/components/formation/PythonModuleLayout';
import ModuleNavigationCards from '@/components/formation/ModuleNavigationCards';
import { LatexRenderer } from '@/components/LatexRenderer';
import { usePythonProgress } from '@/hooks/usePythonProgress';
import PythonCodeEditor, { EvaluationResult } from '@/components/python/PythonCodeEditor';
import CodeEvaluationResult from '@/components/python/CodeEvaluationResult';

const PythonProbabilitesExercicesPage = () => {
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);
  const [showCorrections, setShowCorrections] = useState<Set<number>>(new Set());
  const [showQCM, setShowQCM] = useState(false);

  // États pour le QCM d'évaluation
  const [qcmAnswers, setQcmAnswers] = useState<{ [key: number]: string }>({});
  const [qcmSubmitted, setQcmSubmitted] = useState(false);
  const [qcmScore, setQcmScore] = useState<number | null>(null);

  const { markExerciseAsSeen, markAsComplete } = usePythonProgress();

  // Evaluation state for code submissions
  const [evaluationResults, setEvaluationResults] = useState<{ [key: number]: EvaluationResult }>({});
  const moduleId = 'proba';

  // Navigation clavier
  React.useEffect(() => {
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

  const toggleCorrection = (index: number) => {
    const newShowCorrections = new Set(showCorrections);
    if (newShowCorrections.has(index)) {
      newShowCorrections.delete(index);
    } else {
      newShowCorrections.add(index);
      markExerciseAsSeen(`python-proba-exo-${index}`);
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
    markAsComplete('python-proba-qcm', score);
  };

  // Fonction pour recommencer le QCM
  const restartQCM = () => {
    setQcmAnswers({});
    setQcmSubmitted(false);
    setQcmScore(null);
  };

  const handleNavigate = (newExerciseId: number) => {
    const exerciseExists = exercices.some(ex => ex.id === newExerciseId);
    if (exerciseExists) {
      setSelectedExercise(newExerciseId);
      window.scrollTo(0, 0);
    }
  };

  const qcmQuestions = [{
    id: 1,
    question: "Quelle commande génère un réel uniforme sur [0,1[ ?",
    options: ["A) rd.randint(0,1)", "B) rd.random()", "C) np.random.uniform(0,1)", "D) rd.poisson(1)"],
    answer: "B) rd.random()"
  }, {
    id: 2,
    question: "rd.random(5) produit :",
    options: ["A) 5 réels uniformes sur [0,1[", "B) Un entier entre 1 et 5", "C) Une matrice 5x5", "D) Erreur (taille invalide)"],
    answer: "A) 5 réels uniformes sur [0,1["
  }, {
    id: 3,
    question: "Pour simuler un dé (1 à 6), la commande correcte est :",
    options: ["A) rd.random(6) + 1", "B) np.floor(6 * rd.random()) + 1", "C) rd.binomial(6, 0.5)", "D) rd.geometric(1/6)"],
    answer: "B) np.floor(6 * rd.random()) + 1"
  }, {
    id: 4,
    question: "Pour uniforme sur [2,5], on utilise :",
    options: ["A) (5-2)*rd.random() + 2", "B) rd.randint(2,5)", "C) rd.uniform(2,5)", "D) np.mean([2,5])"],
    answer: "A) (5-2)*rd.random() + 2"
  }, {
    id: 5,
    question: "rd.binomial(1, p) simule :",
    options: ["A) Bernoulli(p)", "B) Binomiale(n=1, p)", "C) Les deux (équivalent)", "D) Poisson(p)"],
    answer: "C) Les deux (équivalent)"
  }, {
    id: 6,
    question: "Pour Binomiale(n=10, p=0.3), commande :",
    options: ["A) rd.binomial(10, 0.3)", "B) sum(rd.random() < 0.3 for _ in range(10))", "C) Les deux possibles", "D) rd.poisson(3)"],
    answer: "C) Les deux possibles"
  }, {
    id: 7,
    question: "rd.randint(a, b+1) pour [a,b] discrète :",
    options: ["A) Oui, inclut b", "B) Non, exclut b", "C) Erreur si a > b", "D) Retourne float"],
    answer: "A) Oui, inclut b"
  }, {
    id: 8,
    question: "rd.geometric(p) retourne :",
    options: ["A) Rang première réussite (>=1)", "B) Nombre échecs avant succès", "C) Bernoulli(p)", "D) Erreur si p>1"],
    answer: "A) Rang première réussite (>=1)"
  }, {
    id: 9,
    question: "rd.poisson(lam) pour λ=2 :",
    options: ["A) Simule Poisson(2)", "B) Nécessite boucle pour λ", "C) Retourne float", "D) Equivalent à Binomiale(inf,0)"],
    answer: "A) Simule Poisson(2)"
  }, {
    id: 10,
    question: "Dans def bernoulli(p): return 1 if rd.random() <= p else 0 – C'est :",
    options: ["A) Correct pour Bernoulli(p)", "B) Incorrect, utilise binomial", "C) Erreur rd.random > p", "D) Retourne toujours 1"],
    answer: "A) Correct pour Bernoulli(p)"
  }, {
    id: 11,
    question: "Dans def geometrique(p): n=1; while rd.random() > p: n+=1; return n – C'est :",
    options: ["A) Rang première réussite", "B) Nombre échecs", "C) Boucle infinie si p=0", "D) Equivalent rd.geometric(p)"],
    answer: "A) Rang première réussite"
  }, {
    id: 12,
    question: "def binomiale(n,p): S=0; for _ in range(n): if rd.random() <= p: S+=1; return S – C'est :",
    options: ["A) Correct, lent pour grand n", "B) Utilise rd.binomial directement", "C) Erreur S initial 1", "D) Retourne probabilité"],
    answer: "A) Correct, lent pour grand n"
  }, {
    id: 13,
    question: "np.min(A) et np.max(A) pour échantillon A :",
    options: ["A) Valeurs extrêmes", "B) Moyenne et médiane", "C) Variance", "D) Somme"],
    answer: "A) Valeurs extrêmes"
  }, {
    id: 14,
    question: "np.mean(A) calcule :",
    options: ["A) Moyenne arithmétique", "B) Médiane (np.median)", "C) Les deux identiques si symétrique", "D) Ecart-type"],
    answer: "A) Moyenne arithmétique"
  }, {
    id: 15,
    question: "np.var(A) et np.std(A) :",
    options: ["A) Variance et écart-type", "B) Besoin ddof=1 pour échantillon", "C) Les deux", "D) Erreur sur array vide"],
    answer: "C) Les deux"
  }, {
    id: 16,
    question: "np.cumsum(A) retourne :",
    options: ["A) Sommes cumulées", "B) Somme totale (np.sum)", "C) Moyenne cumulée", "D) Erreur si A non numérique"],
    answer: "A) Sommes cumulées"
  }, {
    id: 17,
    question: "plt.plot(x,y) pour :",
    options: ["A) Courbe continue", "B) Barres (plt.bar)", "C) Histogramme", "D) Boîte moustaches"],
    answer: "A) Courbe continue"
  }, {
    id: 18,
    question: "Quelle commande crée une boîte à moustaches pour un échantillon A ?",
    options: ["A) plt.boxplot(A)", "B) plt.hist(A, density=True)", "C) plt.bar(range(len(A)), A)", "D) plt.plot(A, 'o')"],
    answer: "A) plt.boxplot(A)"
  }, {
    id: 19,
    question: "Pour estimer E[X], np.mean(rd.<loi>(..., size=N)) avec grand N :",
    options: ["A) Correct", "B) Nécessite variance", "C) Seulement pour lois continues", "D) Erreur size"],
    answer: "A) Correct"
  }, {
    id: 20,
    question: "Dans l'exemple de simulation pour estimer l'intégrale avec Monte-Carlo (approx_Jn), np.mean(y) où y = -x / (1 + np.exp(-n * x)) et x ~ exponential :",
    options: ["A) Estime espérance de la fonction", "B) Nécessite N=5000 pour précision", "C) Les deux", "D) Erreur si m petit"],
    answer: "C) Les deux"
  }];

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
  };

  const exercices = [
    {
      id: 1,
      title: "Loi d'arrêt aléatoire",
      description: "Simuler X = rang d'obtention de deux Pile consécutifs au pile ou face.",
      difficulty: "Intermédiaire",
      badge: "Simulation",
      content: {
        objective: "Simuler une variable aléatoire d'arrêt",
        isLatex: true,
        enonce_latex: "\\text{Simuler } X = \\text{ rang d'obtention de deux Pile consécutifs au pile ou face.}\n\n\\text{On lance une pièce de monnaie jusqu'à obtenir deux Pile consécutifs. On note } X \\text{ le rang d'obtention de ce deuxième Pile consécutif.}",
        correction: `import random

def simulation_arret():
    """Simule X = rang d'obtention de deux Pile consécutifs"""
    pile_consecutifs = 0
    rang = 0
    
    while pile_consecutifs < 2:
        rang += 1
        resultat = random.choice(['Pile', 'Face'])
        
        if resultat == 'Pile':
            pile_consecutifs += 1
        else:
            pile_consecutifs = 0
    
    return rang

# Test de la simulation
for _ in range(10):
    print(f"X = {simulation_arret()}")`
      }
    },
    {
      id: 2,
      title: "Processus de renforcement",
      description: "Simuler le processus de renforcement dans une urne avec règles spécifiques.",
      difficulty: "Intermédiaire",
      badge: "Algorithme",
      content: {
        objective: "Simuler un processus de renforcement dans une urne",
        isLatex: true,
        enonce_latex: "\\text{On dispose d'une urne contenant initialement une boule rouge et une boule verte. À chaque étape, on tire une boule au hasard, on la remet dans l'urne et on ajoute une boule de la même couleur.}\n\n\\text{Simuler ce processus sur } n \\text{ étapes et analyser l'évolution de la composition de l'urne.}",
        correction: `import random

def processus_renforcement(n):
    """Simule le processus de renforcement sur n étapes"""
    urn = ['rouge', 'verte']  # État initial
    
    for etape in range(n):
        # Tirage au hasard
        boule_tiree = random.choice(urn)
        
        # Ajout d'une boule de la même couleur
        urn.append(boule_tiree)
        
        # Statistiques
        rouges = urn.count('rouge')
        vertes = urn.count('verte')
        
        print(f"Étape {etape + 1}: {rouges} rouges, {vertes} vertes")
    
    return urn

# Test
resultat = processus_renforcement(10)`
      }
    },
    {
      id: 3,
      title: "Tirages dans une urne",
      description: "Simuler Z = rang d'apparition de la première boule rouge et Y_n = nombre de boules vertes.",
      difficulty: "Intermédiaire",
      badge: "Probabilités",
      content: {
        objective: "Simuler des variables aléatoires liées aux tirages dans une urne",
        isLatex: true,
        enonce_latex: "\\text{Une urne contient } 3 \\text{ boules rouges et } 7 \\text{ boules vertes. On tire sans remise jusqu'à obtenir la première boule rouge.}\n\n\\bullet \\, Z = \\text{ rang d'apparition de la première boule rouge}\n\n\\bullet \\, Y_n = \\text{ nombre de boules vertes tirées avant la première rouge}",
        correction: `import random

def simulation_urne():
    """Simule Z et Y_n pour les tirages dans l'urne"""
    urn = ['rouge'] * 3 + ['verte'] * 7  # 3 rouges, 7 vertes
    random.shuffle(urn)
    
    z = 0  # rang d'apparition de la première rouge
    y = 0  # nombre de vertes avant la première rouge
    
    for i, boule in enumerate(urn):
        if boule == 'rouge':
            z = i + 1
            break
        else:
            y += 1
    
    return z, y

# Test multiple
for _ in range(5):
    z, y = simulation_urne()
    print(f"Z = {z}, Y = {y}")`
      }
    },
    {
      id: 4,
      title: "Simulation d'un événement",
      description: "Simuler la réalisation d'un événement A de probabilité p avec Python.",
      difficulty: "Intermédiaire",
      badge: "Fondamental",
      content: {
        objective: "Simuler un événement de probabilité donnée",
        isLatex: true,
        enonce_latex: "\\text{Écrire une fonction qui simule la réalisation d'un événement } A \\text{ de probabilité } p.\n\n\\text{La fonction doit retourner True si l'événement se réalise, False sinon.}",
        correction: `import random

def simulation_evenement(p):
    """Simule un événement de probabilité p"""
    return random.random() < p

# Tests
probabilites = [0.1, 0.5, 0.9]
nb_tests = 1000

for p in probabilites:
    succes = sum(simulation_evenement(p) for _ in range(nb_tests))
    frequence = succes / nb_tests
    print(f"p = {p}: fréquence observée = {frequence:.3f}")`
      }
    },
    {
      id: 5,
      title: "Sauts aléatoires dans un escalier",
      description: "Un animal gravit un escalier de n marches en montant 1 ou 2 marches à chaque bond.",
      difficulty: "Intermédiaire",
      badge: "Simulation",
      content: {
        objective: "Simuler un processus de sauts aléatoires dans un escalier",
        isLatex: true,
        enonce_latex: "\\text{Un animal gravit un escalier de } n \\text{ marches. À chaque bond, il monte soit } 1 \\text{ marche, soit } 2 \\text{ marches (avec probabilité } \\frac{1}{2} \\text{ pour chaque).}\n\n\\text{Simuler ce processus et déterminer le nombre de bonds nécessaires pour atteindre la } n\\text{-ième marche.}",
        correction: `import random

def sauts_escalier(n):
    """Simule les sauts aléatoires dans un escalier de n marches"""
    position = 0
    nb_bonds = 0
    
    while position < n:
        saut = random.choice([1, 2])
        position += saut
        nb_bonds += 1
        
        if position > n:
            position = n  # On s'arrête exactement à la n-ième marche
    
    return nb_bonds

# Tests pour différents escaliers
for n in [5, 10, 15]:
    resultats = [sauts_escalier(n) for _ in range(100)]
    moyenne = sum(resultats) / len(resultats)
    print(f"Escalier {n} marches: {moyenne:.1f} bonds en moyenne")`
      }
    },
    {
      id: 6,
      title: "Simulation de lois géométriques",
      description: "Estimer P(X = 2Y) où X et Y suivent des lois géométriques par méthode de Monte-Carlo.",
      difficulty: "Intermédiaire",
      badge: "Monte-Carlo",
      content: {
        objective: "\\text{Estimer une probabilité par méthode de Monte-Carlo}",
        isLatex: true,
        enonce: "X et Y suivent des lois géométriques de paramètres respectifs p1 et p2.\n\nEstimer P(X = 2Y) par méthode de Monte-Carlo pour p1 = 0.3 et p2 = 0.5.",
        enonce_latex: "X \\text{ et } Y \\text{ suivent des lois géométriques de paramètres respectifs } p_1 \\text{ et } p_2. \\\\ \\text{Estimer } P(X = 2Y) \\text{ par méthode de Monte-Carlo pour } p_1 = 0.3 \\text{ et } p_2 = 0.5.",
        correction: `import random
import numpy as np

def loi_geometrique(p):
    """Simule une loi géométrique de paramètre p"""
    n = 1
    while random.random() > p:
        n += 1
    return n

def estimation_monte_carlo(p1, p2, nb_simulations=10000):
    """Estime P(X = 2Y) par méthode de Monte-Carlo"""
    succes = 0
    
    for _ in range(nb_simulations):
        x = loi_geometrique(p1)
        y = loi_geometrique(p2)
        
        if x == 2 * y:
            succes += 1
    
    return succes / nb_simulations

# Estimation
p1, p2 = 0.3, 0.5
prob_estimee = estimation_monte_carlo(p1, p2)
print(f"P(X = 2Y) ≈ {prob_estimee:.4f}")`
      }
    },
    {
      id: 7,
      title: "Marche aléatoire simple",
      description: "Simuler une marche aléatoire et compter les passages à l'origine.",
      difficulty: "Facile",
      badge: "Simulation",
      content: {
        objective: "Simuler une marche aléatoire simple et analyser ses propriétés.",
        isLatex: true,
        enonce_latex: `\\text{On considère un mobile qui, à chaque unité de temps, avance d'une unité avec une probabilité égale à } \\frac{1}{2} \\text{ ou recule d'une unité avec la même probabilité. Au départ, le mobile se situe en position } 0.

\\textbf{1.} \\text{ Écrire une fonction Python } \\texttt{position\\_finale(n)} \\text{ qui simule ce déplacement et retourne la position finale.}

\\textbf{2.} \\text{ Écrire une variante } \\texttt{passages\\_origine(n)} \\text{ qui compte le nombre de fois où le mobile repasse par l'origine.}

\\textbf{3.} \\text{ Écrire une fonction } \\texttt{temps\\_sortie(borne)} \\text{ qui simule la marche jusqu'à ce que le mobile sorte de l'intervalle } [-\\text{borne}, \\text{borne}] \\text{ et renvoie le nombre de pas.}

\\textbf{4.} \\text{ Écrire une fonction } \\texttt{moyenne\\_position(n, essais)} \\text{ qui calcule la moyenne des positions finales sur un grand nombre d'essais.}`,
        corrections: [
          {
            title: "Correction 1 : Position Finale",
            code: `import random as rd

def position_finale(n):
    pos = 0
    for i in range(n):
        if rd.random() < 0.5:
            pos += 1
        else:
            pos -= 1
    return pos

# Exemple de test :
print(position_finale(10))`
          },
          {
            title: "Correction 2 : Passages à l'Origine",
            code: `import random as rd

def passages_origine(n):
    pos = 0
    compte = 0
    for i in range(n):
        if rd.random() < 0.5:
            pos += 1
        else:
            pos -= 1
        if pos == 0:
            compte += 1
    return compte

# Exemple de test :
print(passages_origine(10))`
          },
          {
            title: "Correction 3 : Temps de Sortie d'Intervalle",
            code: `import random as rd

def temps_sortie(borne, pos=0):
    n = 0
    while -borne <= pos <= borne:
        if rd.random() < 0.5:
            pos += 1
        else:
            pos -= 1
        n += 1
    return n

print(temps_sortie(5))`
          },
          {
            title: "Correction 4 : Moyenne de la Position Finale",
            code: `import random as rd

def moyenne_position(n, essais=1000):
    total = 0
    for _ in range(essais):
        pos = 0
        for i in range(n):
            if rd.random() < 0.5:
                pos += 1
            else:
                pos -= 1
        total += pos
    return total / essais

# Sur 10000 essais pour une marche de 10 pas :
print(moyenne_position(10, 10000))`
          }
        ]
      }
    },
    {
      id: 8,
      title: "Loi d'arrêt aléatoire",
      description: "Simuler le rang d'obtention de deux Piles consécutifs.",
      difficulty: "Avancé",
      badge: "Simulation",
      content: {
        objective: "Simuler une variable aléatoire d'arrêt pour obtenir deux Piles consécutifs.",
        isLatex: true,
        enonce_latex: `\\text{On lance indéfiniment une pièce équilibrée (Pile ou Face). On note } X \\text{ la variable aléatoire égale au rang du lancer où, pour la première fois, on obtient deux Pile consécutifs.}

\\text{Par exemple, si la suite des résultats est : Pile, Face, Face, Pile, Pile, ..., alors on a } X = 5.

\\text{Compléter la fonction Python } \\texttt{simulX()} \\text{ pour qu'elle simule les lancers et renvoie le nombre de lancers effectués (la valeur de } X\\text{).}`,
        correction: `import random as rd

def simulX():
    tirs = 0
    pile = 0
    while pile < 2:
        if rd.random() < 0.5:  # On obtient Pile
            pile += 1
        else:                 # On obtient Face
            pile = 0
        tirs += 1
    return tirs

# Test de la simulation
print(f"Nombre de lancers pour obtenir deux Piles consécutifs : {simulX()}")`
      }
    },
    {
      id: 9,
      title: "Processus de renforcement dans une urne",
      description: "Simuler un processus de tirage avec renforcement jusqu'à atteindre n boules vertes.",
      difficulty: "Avancé",
      badge: "Simulation",
      content: {
        objective: "Simuler une variable d'arrêt dans un processus d'urne de Polya modifié.",
        isLatex: true,
        enonce_latex: `\\text{On considère une urne contenant au départ : } 1 \\text{ boule rouge et } 1 \\text{ boule verte.}

\\text{On effectue une série de tirages avec remise, selon le protocole suivant :}

\\bullet \\text{ Si on tire une boule rouge, on la remet et on ajoute } 2 \\text{ boules rouges dans l'urne.}

\\bullet \\text{ Si on tire une boule verte, on la remet et on ajoute } 1 \\text{ rouge et } 2 \\text{ vertes.}

\\text{On note } Y_n \\text{ la variable aléatoire égale au rang du tirage à l'issue duquel le nombre de boules vertes devient supérieur ou égal à } n \\text{ (pour un entier } n \\geq 2\\text{).}

\\text{Compléter la fonction Python } \\texttt{simulY(n)} \\text{ pour qu'elle simule ce processus et renvoie la valeur de } Y_n.`,
        correction: `import random as rd

def simulY(n):
    r = 1  # nombre de boules rouges
    v = 1  # nombre de boules vertes
    Y = 0
    while v < n:
        # On tire un numéro entre 1 et r+v
        numero_boule = rd.randint(1, r + v)
        if numero_boule <= r:  # On a tiré une rouge
            r += 2
        else:                  # On a tiré une verte
            r += 1
            v += 2
        Y += 1
    return Y

# Test pour n=10
print(f"Nombre de tirages pour atteindre 10 boules vertes : {simulY(10)}")`
      }
    },
    {
      id: 10,
      title: "Sauts aléatoires dans un escalier",
      description: "Simuler le nombre de sauts nécessaires pour gravir un escalier de n marches.",
      difficulty: "Intermédiaire",
      badge: "Simulation",
      content: {
        objective: "Simuler le comportement d'un animal qui monte un escalier par bonds de 1 ou 2 marches.",
        isLatex: true,
        enonce_latex: `\\text{Un animal doit gravir un escalier comportant } n \\text{ marches. À chaque bond, il choisit au hasard de monter soit } 1 \\text{ marche, soit } 2 \\text{ marches, avec une probabilité égale.}

\\text{Écrire une fonction Python } \\texttt{saut\\_escalier(n)} \\text{ qui :}

\\bullet \\text{ Prend en argument un entier } n \\text{ (le nombre de marches).}

\\bullet \\text{ Simule le comportement de l'animal.}

\\bullet \\text{ Retourne le nombre de bonds effectués pour atteindre (ou dépasser) la dernière marche.}`,
        correction: `import numpy.random as rd

def saut_escalier(n):
    marches = 0     # nombre de marches montées
    sauts = 0       # nombre de bonds effectués
    
    while marches < n:
        r = rd.random()
        if r < 0.5:
            marches += 1
        else:
            marches += 2
        sauts += 1
    
    return sauts

# Test pour un escalier de 20 marches
print(f"Nombre de sauts pour 20 marches : {saut_escalier(20)}")`
      }
    },
    {
      id: 11,
      title: "Problème du collectionneur",
      description: "Simuler le nombre d'achats nécessaires pour compléter une collection de n vignettes différentes.",
      difficulty: "Intermédiaire",
      badge: "Simulation",
      content: {
        objective: "Simuler le problème classique du collectionneur de coupons et estimer le nombre moyen d'achats.",
        isLatex: true,
        enonce_latex: `\\text{On souhaite compléter une collection de } n \\text{ vignettes différentes. À chaque achat, on obtient une vignette choisie uniformément au hasard parmi les } n \\text{ possibles (tirages indépendants avec remise).}

\\textbf{1.} \\text{ Écrire une fonction } \\texttt{collection(n)} \\text{ qui simule le processus et retourne le nombre d'achats nécessaires pour obtenir les } n \\text{ vignettes distinctes.}

\\textbf{2.} \\text{ Écrire une fonction } \\texttt{moyenne\\_achats(n, essais)} \\text{ qui estime par Monte-Carlo le nombre moyen d'achats sur un grand nombre d'essais.}

\\textbf{3.} \\text{ Écrire une fonction } \\texttt{compare\\_theorique(n)} \\text{ qui compare l'estimation Monte-Carlo avec la valeur théorique } n \\times H_n \\text{ (où } H_n = 1 + \\frac{1}{2} + \\ldots + \\frac{1}{n} \\text{ est le } n\\text{-ième nombre harmonique).}

\\textbf{4.} \\text{ Écrire une fonction } \\texttt{histogramme\\_achats(n, essais)} \\text{ qui trace l'histogramme du nombre d'achats sur un grand nombre d'essais.}`,
        corrections: [
          {
            title: "Correction 1 : Simulation d'une collection",
            code: `import random as rd

def collection(n):
    """Retourne le nombre d'achats pour compléter une collection de n vignettes"""
    obtenues = set()
    achats = 0
    while len(obtenues) < n:
        vignette = rd.randint(1, n)
        obtenues.add(vignette)
        achats += 1
    return achats

# Test
print(f"Achats pour 10 vignettes : {collection(10)}")`
          },
          {
            title: "Correction 2 : Estimation Monte-Carlo",
            code: `import random as rd

def collection(n):
    obtenues = set()
    achats = 0
    while len(obtenues) < n:
        vignette = rd.randint(1, n)
        obtenues.add(vignette)
        achats += 1
    return achats

def moyenne_achats(n, essais=10000):
    """Estime le nombre moyen d'achats par Monte-Carlo"""
    total = sum(collection(n) for _ in range(essais))
    return total / essais

# Test
print(f"Moyenne pour 10 vignettes : {moyenne_achats(10, 10000):.1f}")`
          },
          {
            title: "Correction 3 : Comparaison avec la valeur théorique",
            code: `import random as rd

def collection(n):
    obtenues = set()
    achats = 0
    while len(obtenues) < n:
        vignette = rd.randint(1, n)
        obtenues.add(vignette)
        achats += 1
    return achats

def compare_theorique(n, essais=10000):
    """Compare estimation MC avec la valeur theorique n*H_n"""
    # Nombre harmonique H_n
    H_n = sum(1/k for k in range(1, n+1))
    theorique = n * H_n
    
    estime = sum(collection(n) for _ in range(essais)) / essais
    
    print(f"n = {n}")
    print(f"Estimation MC : {estime:.2f}")
    print(f"Valeur theorique n*H_n : {theorique:.2f}")
    print(f"Erreur relative : {abs(estime - theorique)/theorique*100:.2f}%")

compare_theorique(20)`
          },
          {
            title: "Correction 4 : Histogramme",
            code: `import random as rd
import matplotlib.pyplot as plt

def collection(n):
    obtenues = set()
    achats = 0
    while len(obtenues) < n:
        vignette = rd.randint(1, n)
        obtenues.add(vignette)
        achats += 1
    return achats

def histogramme_achats(n, essais=5000):
    """Trace l'histogramme du nombre d'achats"""
    resultats = [collection(n) for _ in range(essais)]
    
    plt.hist(resultats, bins=30, density=True, alpha=0.7, color='steelblue')
    plt.axvline(sum(resultats)/len(resultats), color='red', linestyle='--', label='Moyenne')
    plt.xlabel("Nombre d'achats")
    plt.ylabel("Frequence")
    plt.title(f"Distribution du nombre d'achats (n={n})")
    plt.legend()
    plt.show()

histogramme_achats(20)`
          }
        ]
      }
    },
    {
      id: 12,
      title: "Estimation de pi par Monte-Carlo",
      description: "Utiliser la méthode de Monte-Carlo pour estimer la valeur de π avec des points aléatoires.",
      difficulty: "Facile",
      badge: "Monte-Carlo",
      content: {
        objective: "Estimer π par la méthode de Monte-Carlo en simulant des points uniformes dans un carré.",
        isLatex: true,
        enonce_latex: `\\text{On considère un carré de côté } 2 \\text{ centré à l'origine } [-1,1] \\times [-1,1] \\text{ et le disque unité inscrit (de rayon } 1\\text{).}

\\text{On tire } N \\text{ points uniformément dans le carré. La proportion de points tombant dans le disque est une estimation de l'aire du disque divisée par l'aire du carré, soit } \\frac{\\pi}{4}.

\\textbf{1.} \\text{ Écrire une fonction } \\texttt{estimer\\_pi(N)} \\text{ qui tire } N \\text{ points uniformes dans le carré et retourne une estimation de } \\pi.

\\textbf{2.} \\text{ Écrire une fonction } \\texttt{convergence\\_pi(N\\_max, pas)} \\text{ qui trace l'évolution de l'estimation de } \\pi \\text{ en fonction du nombre de points tirés.}

\\textbf{3.} \\text{ Écrire une fonction } \\texttt{intervalle\\_confiance(N, essais)} \\text{ qui estime } \\pi \\text{ plusieurs fois et calcule un intervalle de confiance à } 95\\%.

\\textbf{4.} \\text{ Écrire une fonction } \\texttt{visualiser\\_points(N)} \\text{ qui affiche les points dans le carré (en bleu ceux dans le disque, en rouge ceux hors du disque).}`,
        corrections: [
          {
            title: "Correction 1 : Estimation de pi",
            code: `import random as rd

def estimer_pi(N):
    """Estime pi par Monte-Carlo"""
    dans_disque = 0
    for _ in range(N):
        x = 2 * rd.random() - 1  # uniforme sur [-1, 1]
        y = 2 * rd.random() - 1
        if x**2 + y**2 <= 1:
            dans_disque += 1
    return 4 * dans_disque / N

# Test
print(f"Estimation avec 10000 points : {estimer_pi(10000):.4f}")`
          },
          {
            title: "Correction 2 : Convergence",
            code: `import random as rd
import matplotlib.pyplot as plt
import math

def convergence_pi(N_max, pas=100):
    """Trace la convergence de l'estimation de pi"""
    estimations = []
    points = []
    dans_disque = 0
    
    for i in range(1, N_max + 1):
        x = 2 * rd.random() - 1
        y = 2 * rd.random() - 1
        if x**2 + y**2 <= 1:
            dans_disque += 1
        if i % pas == 0:
            estimations.append(4 * dans_disque / i)
            points.append(i)
    
    plt.plot(points, estimations, label="Estimation")
    plt.axhline(y=math.pi, color='r', linestyle='--', label="pi reel")
    plt.xlabel("Nombre de points")
    plt.ylabel("Estimation de pi")
    plt.title("Convergence de l'estimation de pi")
    plt.legend()
    plt.show()

convergence_pi(50000)`
          },
          {
            title: "Correction 3 : Intervalle de confiance",
            code: `import random as rd
import numpy as np

def estimer_pi(N):
    dans_disque = 0
    for _ in range(N):
        x = 2 * rd.random() - 1
        y = 2 * rd.random() - 1
        if x**2 + y**2 <= 1:
            dans_disque += 1
    return 4 * dans_disque / N

def intervalle_confiance(N, essais=100):
    """Calcule un intervalle de confiance a 95% pour pi"""
    estimations = [estimer_pi(N) for _ in range(essais)]
    moyenne = np.mean(estimations)
    ecart_type = np.std(estimations)
    
    borne_inf = moyenne - 1.96 * ecart_type
    borne_sup = moyenne + 1.96 * ecart_type
    
    print(f"Moyenne : {moyenne:.4f}")
    print(f"IC 95% : [{borne_inf:.4f}, {borne_sup:.4f}]")
    return borne_inf, borne_sup

intervalle_confiance(10000, 200)`
          },
          {
            title: "Correction 4 : Visualisation des points",
            code: `import random as rd
import matplotlib.pyplot as plt
import numpy as np

def visualiser_points(N):
    """Affiche les points dans le carre et le disque"""
    x_in, y_in = [], []
    x_out, y_out = [], []
    
    for _ in range(N):
        x = 2 * rd.random() - 1
        y = 2 * rd.random() - 1
        if x**2 + y**2 <= 1:
            x_in.append(x)
            y_in.append(y)
        else:
            x_out.append(x)
            y_out.append(y)
    
    theta = np.linspace(0, 2*np.pi, 100)
    plt.plot(np.cos(theta), np.sin(theta), 'k-', linewidth=2)
    plt.scatter(x_in, y_in, s=1, c='blue', alpha=0.5)
    plt.scatter(x_out, y_out, s=1, c='red', alpha=0.5)
    plt.axis('equal')
    plt.title(f"pi = {4*len(x_in)/N:.4f}  (N={N})")
    plt.show()

visualiser_points(5000)`
          }
        ]
      }
    },
    {
      id: 13,
      title: "File d'attente à un guichet",
      description: "Simuler une file d'attente avec arrivées et services aléatoires pour estimer le temps moyen d'attente.",
      difficulty: "Avancé",
      badge: "Algorithme",
      content: {
        objective: "Modéliser et simuler une file d'attente simple pour estimer les temps d'attente et la longueur de la file.",
        isLatex: true,
        enonce_latex: `\\text{On modélise un guichet unique avec une file d'attente. Les clients arrivent un par un. Le temps entre deux arrivées suit une loi exponentielle de paramètre } \\lambda \\text{ (par exemple } \\lambda = 1\\text{). Le temps de service de chaque client suit une loi exponentielle de paramètre } \\mu \\text{ (par exemple } \\mu = 1.5\\text{).}

\\textbf{1.} \\text{ Écrire une fonction } \\texttt{simuler\\_file(n\\_clients, lam, mu)} \\text{ qui simule l'arrivée de } n \\text{ clients et retourne la liste des temps d'attente de chaque client.}

\\textbf{2.} \\text{ Écrire une fonction } \\texttt{temps\\_moyen\\_attente(n\\_clients, lam, mu, essais)} \\text{ qui estime le temps moyen d'attente par Monte-Carlo.}

\\textbf{3.} \\text{ Écrire une fonction } \\texttt{longueur\\_max\\_file(n\\_clients, lam, mu)} \\text{ qui calcule la longueur maximale de la file d'attente pendant la simulation.}

\\textbf{4.} \\text{ Écrire une fonction } \\texttt{taux\\_occupation(n\\_clients, lam, mu)} \\text{ qui calcule la proportion du temps pendant laquelle le guichet est occupé.}`,
        corrections: [
          {
            title: "Correction 1 : Simulation de la file d'attente",
            code: `import random as rd
import math

def expo(param):
    """Simule une loi exponentielle de parametre param"""
    return -math.log(1 - rd.random()) / param

def simuler_file(n_clients, lam=1, mu=1.5):
    """Simule la file et retourne les temps d'attente"""
    arrivees = []
    t = 0
    for _ in range(n_clients):
        t += expo(lam)     # temps inter-arrivee
        arrivees.append(t)
    
    attentes = []
    fin_service = 0
    
    for arrivee in arrivees:
        attente = max(0, fin_service - arrivee)
        attentes.append(attente)
        debut_service = arrivee + attente
        fin_service = debut_service + expo(mu)
    
    return attentes

# Test
attentes = simuler_file(20)
print(f"Temps d'attente moyen : {sum(attentes)/len(attentes):.2f}")`
          },
          {
            title: "Correction 2 : Estimation Monte-Carlo du temps moyen",
            code: `import random as rd
import math

def expo(param):
    return -math.log(1 - rd.random()) / param

def simuler_file(n_clients, lam=1, mu=1.5):
    arrivees = []
    t = 0
    for _ in range(n_clients):
        t += expo(lam)
        arrivees.append(t)
    attentes = []
    fin_service = 0
    for arrivee in arrivees:
        attente = max(0, fin_service - arrivee)
        attentes.append(attente)
        debut_service = arrivee + attente
        fin_service = debut_service + expo(mu)
    return attentes

def temps_moyen_attente(n_clients, lam=1, mu=1.5, essais=1000):
    """Estime le temps moyen d'attente par Monte-Carlo"""
    total = 0
    for _ in range(essais):
        attentes = simuler_file(n_clients, lam, mu)
        total += sum(attentes) / len(attentes)
    return total / essais

print(f"Temps moyen d'attente : {temps_moyen_attente(50):.3f}")`
          },
          {
            title: "Correction 3 : Longueur maximale de la file",
            code: `import random as rd
import math

def expo(param):
    return -math.log(1 - rd.random()) / param

def longueur_max_file(n_clients, lam=1, mu=1.5):
    """Calcule la longueur max de la file"""
    arrivees = []
    t = 0
    for _ in range(n_clients):
        t += expo(lam)
        arrivees.append(t)
    
    fins_service = []
    fin = 0
    max_file = 0
    
    for i, arrivee in enumerate(arrivees):
        # On retire les clients deja servis
        fins_service = [f for f in fins_service if f > arrivee]
        fins_service.append(max(arrivee, fin) + expo(mu))
        fin = fins_service[-1]
        max_file = max(max_file, len(fins_service))
    
    return max_file

# Test
print(f"Longueur max de la file : {longueur_max_file(100)}")`
          },
          {
            title: "Correction 4 : Taux d'occupation du guichet",
            code: `import random as rd
import math

def expo(param):
    return -math.log(1 - rd.random()) / param

def taux_occupation(n_clients, lam=1, mu=1.5):
    """Calcule la proportion du temps ou le guichet est occupe"""
    arrivees = []
    t = 0
    for _ in range(n_clients):
        t += expo(lam)
        arrivees.append(t)
    
    temps_occupe = 0
    fin_service = 0
    
    for arrivee in arrivees:
        debut = max(arrivee, fin_service)
        service = expo(mu)
        temps_occupe += service
        fin_service = debut + service
    
    temps_total = fin_service
    taux = temps_occupe / temps_total if temps_total > 0 else 0
    
    print(f"Taux d'occupation : {taux*100:.1f}%")
    print(f"Taux theorique (lambda/mu) : {lam/mu*100:.1f}%")
    return taux

taux_occupation(500)`
          }
        ]
      }
    },
    {
      id: 14,
      title: "Simulation d'un match de tennis",
      description: "Simuler un set de tennis et estimer la probabilité de victoire en fonction de la probabilité de gagner un point.",
      difficulty: "Intermédiaire",
      badge: "Simulation",
      content: {
        objective: "Simuler un jeu et un set de tennis pour étudier l'amplification des probabilités.",
        isLatex: true,
        enonce_latex: `\\text{Au tennis, un joueur A a une probabilité } p \\text{ de gagner chaque point contre le joueur B (et B gagne avec probabilité } 1-p\\text{). Un jeu se gagne quand un joueur atteint } 4 \\text{ points avec } 2 \\text{ points d'écart minimum (40-40 puis avantage puis jeu). Un set se gagne quand un joueur atteint } 6 \\text{ jeux avec } 2 \\text{ jeux d'écart, ou } 7\\text{-}6 \\text{ après un tie-break.}

\\textbf{1.} \\text{ Écrire une fonction } \\texttt{simuler\\_jeu(p)} \\text{ qui simule un jeu et retourne True si le joueur A gagne.}

\\textbf{2.} \\text{ Écrire une fonction } \\texttt{simuler\\_set(p)} \\text{ qui simule un set complet et retourne True si A gagne.}

\\textbf{3.} \\text{ Écrire une fonction } \\texttt{proba\\_victoire\\_set(p, essais)} \\text{ qui estime par Monte-Carlo la probabilité que A gagne le set.}

\\textbf{4.} \\text{ Écrire une fonction } \\texttt{courbe\\_amplification(essais)} \\text{ qui trace la probabilité de gagner un set en fonction de } p \\text{ dans } [0, 1].`,
        corrections: [
          {
            title: "Correction 1 : Simulation d'un jeu",
            code: `import random as rd

def simuler_jeu(p):
    """Simule un jeu de tennis, retourne True si A gagne"""
    points_A = 0
    points_B = 0
    
    while True:
        if rd.random() < p:
            points_A += 1
        else:
            points_B += 1
        
        # Verifier si le jeu est termine
        if points_A >= 4 and points_A - points_B >= 2:
            return True
        if points_B >= 4 and points_B - points_A >= 2:
            return False

# Test
victoires = sum(simuler_jeu(0.6) for _ in range(1000))
print(f"A gagne le jeu {victoires/10:.1f}% du temps (p=0.6)")`
          },
          {
            title: "Correction 2 : Simulation d'un set",
            code: `import random as rd

def simuler_jeu(p):
    points_A, points_B = 0, 0
    while True:
        if rd.random() < p:
            points_A += 1
        else:
            points_B += 1
        if points_A >= 4 and points_A - points_B >= 2:
            return True
        if points_B >= 4 and points_B - points_A >= 2:
            return False

def simuler_set(p):
    """Simule un set complet, retourne True si A gagne"""
    jeux_A = 0
    jeux_B = 0
    
    while True:
        if simuler_jeu(p):
            jeux_A += 1
        else:
            jeux_B += 1
        
        # Set classique
        if jeux_A >= 6 and jeux_A - jeux_B >= 2:
            return True
        if jeux_B >= 6 and jeux_B - jeux_A >= 2:
            return False
        
        # Tie-break a 6-6
        if jeux_A == 6 and jeux_B == 6:
            return simuler_jeu(p)  # simplifie

# Test
print(f"A gagne le set : {simuler_set(0.55)}")`
          },
          {
            title: "Correction 3 : Estimation Monte-Carlo",
            code: `import random as rd

def simuler_jeu(p):
    points_A, points_B = 0, 0
    while True:
        if rd.random() < p:
            points_A += 1
        else:
            points_B += 1
        if points_A >= 4 and points_A - points_B >= 2:
            return True
        if points_B >= 4 and points_B - points_A >= 2:
            return False

def simuler_set(p):
    jeux_A, jeux_B = 0, 0
    while True:
        if simuler_jeu(p):
            jeux_A += 1
        else:
            jeux_B += 1
        if jeux_A >= 6 and jeux_A - jeux_B >= 2:
            return True
        if jeux_B >= 6 and jeux_B - jeux_A >= 2:
            return False
        if jeux_A == 6 and jeux_B == 6:
            return simuler_jeu(p)

def proba_victoire_set(p, essais=5000):
    """Estime P(A gagne le set) par Monte-Carlo"""
    victoires = sum(simuler_set(p) for _ in range(essais))
    return victoires / essais

# Tests pour differentes valeurs de p
for p in [0.4, 0.45, 0.5, 0.55, 0.6]:
    prob = proba_victoire_set(p)
    print(f"p = {p} -> P(gagner set) = {prob:.3f}")`
          },
          {
            title: "Correction 4 : Courbe d'amplification",
            code: `import random as rd
import matplotlib.pyplot as plt
import numpy as np

def simuler_jeu(p):
    pa, pb = 0, 0
    while True:
        if rd.random() < p: pa += 1
        else: pb += 1
        if pa >= 4 and pa - pb >= 2: return True
        if pb >= 4 and pb - pa >= 2: return False

def simuler_set(p):
    ja, jb = 0, 0
    while True:
        if simuler_jeu(p): ja += 1
        else: jb += 1
        if ja >= 6 and ja - jb >= 2: return True
        if jb >= 6 and jb - ja >= 2: return False
        if ja == 6 and jb == 6: return simuler_jeu(p)

def courbe_amplification(essais=2000):
    """Trace P(gagner set) en fonction de p"""
    valeurs_p = np.linspace(0.1, 0.9, 30)
    probas_set = []
    
    for p in valeurs_p:
        v = sum(simuler_set(p) for _ in range(essais))
        probas_set.append(v / essais)
    
    plt.plot(valeurs_p, probas_set, 'b-o', markersize=4, label="P(gagner set)")
    plt.plot(valeurs_p, valeurs_p, 'r--', label="P(gagner point) = p")
    plt.xlabel("Probabilite de gagner un point (p)")
    plt.ylabel("Probabilite de gagner le set")
    plt.title("Amplification des probabilites au tennis")
    plt.legend()
    plt.grid(True, alpha=0.3)
    plt.show()

courbe_amplification()`
          }
        ]
      }
    },
    {
      id: 15,
      title: "Ruine du joueur",
      description: "Simuler le problème classique de la ruine du joueur et estimer la probabilité de ruine.",
      difficulty: "Avancé",
      badge: "Probabilités",
      content: {
        objective: "Simuler le problème de la ruine du joueur et étudier la probabilité de ruine en fonction de la fortune initiale.",
        isLatex: true,
        enonce_latex: `\\text{Un joueur dispose d'une fortune initiale } a. \\text{ À chaque tour, il mise } 1 \\text{ euro. Il gagne (fortune } +1\\text{) avec probabilité } p \\text{ et perd (fortune } -1\\text{) avec probabilité } 1-p. \\text{ Le jeu s'arrête quand sa fortune atteint } 0 \\text{ (ruine) ou } N \\text{ (objectif atteint).}

\\textbf{1.} \\text{ Écrire une fonction } \\texttt{ruine(a, N, p)} \\text{ qui simule une partie et retourne True si le joueur est ruiné (fortune } = 0\\text{).}

\\textbf{2.} \\text{ Écrire une fonction } \\texttt{proba\\_ruine(a, N, p, essais)} \\text{ qui estime la probabilité de ruine par Monte-Carlo.}

\\textbf{3.} \\text{ Écrire une fonction } \\texttt{duree\\_partie(a, N, p, essais)} \\text{ qui estime la durée moyenne d'une partie (nombre de tours).}

\\textbf{4.} \\text{ Écrire une fonction } \\texttt{trajectoire(a, N, p)} \\text{ qui trace l'évolution de la fortune du joueur au cours d'une partie.}`,
        corrections: [
          {
            title: "Correction 1 : Simulation d'une partie",
            code: `import random as rd

def ruine(a, N, p):
    """Simule une partie, retourne True si le joueur est ruine"""
    fortune = a
    while 0 < fortune < N:
        if rd.random() < p:
            fortune += 1
        else:
            fortune -= 1
    return fortune == 0

# Test
a, N, p = 10, 20, 0.5
print(f"Ruine : {ruine(a, N, p)}")`
          },
          {
            title: "Correction 2 : Estimation de la probabilite de ruine",
            code: `import random as rd

def ruine(a, N, p):
    fortune = a
    while 0 < fortune < N:
        if rd.random() < p:
            fortune += 1
        else:
            fortune -= 1
    return fortune == 0

def proba_ruine(a, N, p, essais=10000):
    """Estime la probabilite de ruine par Monte-Carlo"""
    ruines = sum(ruine(a, N, p) for _ in range(essais))
    estimation = ruines / essais
    
    # Formule theorique (p != 0.5)
    if abs(p - 0.5) > 1e-10:
        q = 1 - p
        theorique = (1 - (q/p)**a) / (1 - (q/p)**N)
        # P(ruine) = 1 - P(atteindre N)
        theorique = 1 - theorique
    else:
        theorique = 1 - a / N
    
    print(f"P(ruine) estimee : {estimation:.4f}")
    print(f"P(ruine) theorique : {theorique:.4f}")
    return estimation

proba_ruine(10, 30, 0.5)
proba_ruine(10, 30, 0.45)`
          },
          {
            title: "Correction 3 : Duree moyenne d'une partie",
            code: `import random as rd

def duree_partie_sim(a, N, p):
    """Simule une partie et retourne le nombre de tours"""
    fortune = a
    tours = 0
    while 0 < fortune < N:
        if rd.random() < p:
            fortune += 1
        else:
            fortune -= 1
        tours += 1
    return tours

def duree_partie(a, N, p, essais=5000):
    """Estime la duree moyenne d'une partie"""
    durees = [duree_partie_sim(a, N, p) for _ in range(essais)]
    moyenne = sum(durees) / len(durees)
    maximum = max(durees)
    
    print(f"a={a}, N={N}, p={p}")
    print(f"Duree moyenne : {moyenne:.1f} tours")
    print(f"Duree maximale : {maximum} tours")
    return moyenne

# Tests
duree_partie(5, 20, 0.5)
duree_partie(10, 20, 0.5)`
          },
          {
            title: "Correction 4 : Trajectoire de la fortune",
            code: `import random as rd
import matplotlib.pyplot as plt

def trajectoire(a, N, p):
    """Trace l'evolution de la fortune du joueur"""
    fortune = a
    fortunes = [fortune]
    
    while 0 < fortune < N:
        if rd.random() < p:
            fortune += 1
        else:
            fortune -= 1
        fortunes.append(fortune)
    
    plt.figure(figsize=(10, 5))
    plt.plot(fortunes, linewidth=1)
    plt.axhline(y=0, color='red', linestyle='--', label='Ruine')
    plt.axhline(y=N, color='green', linestyle='--', label=f'Objectif (N={N})')
    plt.axhline(y=a, color='gray', linestyle=':', alpha=0.5, label=f'Fortune initiale (a={a})')
    plt.xlabel("Nombre de tours")
    plt.ylabel("Fortune")
    resultat = "Ruine" if fortunes[-1] == 0 else "Objectif atteint"
    plt.title(f"Ruine du joueur (p={p}) - {resultat} en {len(fortunes)-1} tours")
    plt.legend()
    plt.grid(True, alpha=0.3)
    plt.show()

# Tracer 3 trajectoires
for _ in range(3):
    trajectoire(10, 30, 0.48)`
          }
        ]
      }
    }
  ];

  const handleStartExercise = (exerciceId: number) => {
    setSelectedExercise(exerciceId);
  };

  const handleBackToList = () => {
    setSelectedExercise(null);
  };

  const scrollToExercice = (exerciceId: number) => {
    const element = document.getElementById(`exercice-${exerciceId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  if (selectedExercise) {
    const exercise = exercices.find(ex => ex.id === selectedExercise);
    if (!exercise) return null;

    const hasPrevious = selectedExercise > 1;
    const hasNext = selectedExercise < exercices.length;

    return (
      <PythonModuleLayout>
        {/* Barre de navigation supérieure */}
        <div className="mb-6 sticky top-0 z-10 bg-white/95 backdrop-blur-sm border-b border-slate-200 -mx-8 px-8 py-4">
          <div className="flex items-center justify-between">
            <Button
              variant="outline"
              size="sm"
              className="flex items-center gap-2"
              onClick={handleBackToList}
            >
              <ArrowLeft className="h-4 w-4" />
              Retour aux exercices
            </Button>

            <div className="flex items-center gap-4">
              {/* Indicateur de progression */}
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-slate-700">
                  Exercice {selectedExercise} / {exercices.length}
                </span>
                <div className="w-32 h-2 bg-slate-200 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-gradient-to-r from-blue-500 to-purple-600 transition-all duration-300"
                    style={{ width: `${(selectedExercise / exercices.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Boutons de navigation */}
              <div className="flex items-center gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    if (hasPrevious) {
                      setSelectedExercise(selectedExercise - 1);
                      window.scrollTo(0, 0);
                    }
                  }}
                  disabled={!hasPrevious}
                  className="flex items-center gap-1"
                >
                  <ChevronDown className="h-4 w-4 rotate-90" />
                  Précédent
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => {
                    if (hasNext) {
                      setSelectedExercise(selectedExercise + 1);
                      window.scrollTo(0, 0);
                    }
                  }}
                  disabled={!hasNext}
                  className="flex items-center gap-1"
                >
                  Suivant
                  <ChevronDown className="h-4 w-4 -rotate-90" />
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Header simplifié */}
        <div className="mb-6 pb-4 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-bold text-slate-900 mb-2">
                Exercice {selectedExercise} - {exercise.title}
              </h1>
              <div className="flex items-center gap-2">
                <Badge variant="secondary" className="bg-slate-100 text-slate-600 text-xs">
                  {exercise.difficulty}
                </Badge>
                <Badge variant="secondary" className="bg-slate-100 text-slate-600 text-xs">
                  {exercise.badge}
                </Badge>
              </div>
            </div>

            {/* Raccourcis clavier - plus discrets */}
            <div className="text-xs text-slate-400 flex items-center gap-3">
              <div className="flex items-center gap-1">
                <kbd className="px-1.5 py-0.5 bg-slate-50 rounded text-slate-500 text-xs">←</kbd>
                <kbd className="px-1.5 py-0.5 bg-slate-50 rounded text-slate-500 text-xs">→</kbd>
              </div>
              <kbd className="px-1.5 py-0.5 bg-slate-50 rounded text-slate-500 text-xs">Esc</kbd>
            </div>
          </div>
        </div>

        {exercise.content ? (
          <>
            {/* Énoncé simplifié */}
            <Card className="mb-6 bg-white border border-slate-200 shadow-sm">
              <CardContent className="pt-6 pb-6">
                <div className="w-full">
                  {exercise.content.enonce_latex ? (
                    <div
                      className="text-slate-700 text-base leading-[1.8]"
                      style={{
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        hyphens: 'auto',
                        whiteSpace: 'normal'
                      }}
                    >
                      <LatexRenderer latex={exercise.content.enonce_latex} />
                    </div>
                  ) : (
                    <div
                      className="text-slate-700 text-base leading-[1.8]"
                      style={{
                        wordWrap: 'break-word',
                        overflowWrap: 'break-word',
                        whiteSpace: 'pre-wrap'
                      }}
                    >
                      {exercise.content.enonce}
                    </div>
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

            <div className="flex justify-center mb-4">
              <Button
                variant="outline"
                onClick={() => toggleCorrection(selectedExercise)}
                className="flex items-center gap-2 border-gray-200 text-gray-700 hover:bg-gray-50"
                size="sm"
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

            {showCorrections.has(selectedExercise) && (
              <>
                {exercise.content.correction && (
                  <Card className="mb-6 border border-gray-200 bg-gray-50">
                    <CardHeader className="pb-3">
                      <CardTitle className="flex items-center gap-2 text-gray-700 text-lg">
                        <CheckCircle className="h-5 w-5" />
                        Correction
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                        <pre className="text-gray-100 text-sm font-mono leading-relaxed">
                          <code>{exercise.content.correction}</code>
                        </pre>
                      </div>
                    </CardContent>
                  </Card>
                )}
                {exercise.content.corrections &&
                  exercise.content.corrections.map((corr, index) => (
                    <Card key={index} className="mb-4 border border-gray-200 bg-gray-50">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-2 text-gray-700 text-base">
                          <Code className="h-5 w-5" />
                          {corr.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                          <pre className="text-gray-100 text-sm font-mono leading-relaxed">
                            <code>{corr.code}</code>
                          </pre>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </>
            )}

            {/* Barre de navigation inférieure */}
            <div className="mt-8 pt-6 border-t border-slate-200">
              <div className="flex items-center justify-between">
                <Button
                  variant="outline"
                  onClick={() => {
                    if (hasPrevious) {
                      setSelectedExercise(selectedExercise - 1);
                      window.scrollTo(0, 0);
                    }
                  }}
                  disabled={!hasPrevious}
                  className="flex items-center gap-2"
                >
                  <ChevronDown className="h-4 w-4 rotate-90" />
                  Exercice précédent
                </Button>

                <div className="text-sm text-slate-600">
                  Exercice {selectedExercise} / {exercices.length}
                </div>

                <Button
                  variant="outline"
                  onClick={() => {
                    if (hasNext) {
                      setSelectedExercise(selectedExercise + 1);
                      window.scrollTo(0, 0);
                    } else {
                      setSelectedExercise(null);
                    }
                  }}
                  className="flex items-center gap-2"
                >
                  {hasNext ? (
                    <>
                      Exercice suivant
                      <ChevronDown className="h-4 w-4 -rotate-90" />
                    </>
                  ) : (
                    <>
                      Retour aux exercices
                      <ArrowLeft className="h-4 w-4 rotate-180" />
                    </>
                  )}
                </Button>
              </div>
            </div>
          </>
        ) : (
          <div className="space-y-6">
            <Card>
              <CardContent className="p-6">
                <p className="text-center text-muted-foreground">
                  Contenu détaillé de l'exercice sera développé ici...
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        <ModuleNavigationCards
          currentModule={{
            id: 3,
            title: "Probabilités",
            slug: "probabilites",
            color: "blue"
          }}
          isExercisePage={true}
          totalExercises={exercices.length}
          currentExerciseId={selectedExercise}
          onNavigate={handleNavigate}
        />
      </PythonModuleLayout>
    );
  }

  return (
    <PythonModuleLayout>
      <div className="mb-8">
        <div className="flex items-center gap-3 mb-4">
          <div className="p-3 rounded-lg bg-slate-100 text-slate-700 border border-slate-200">
            <BarChart3 className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-slate-800">Module 3 - Probabilités : Exercices</h1>
            <Badge variant="secondary" className="mt-3 bg-slate-100 text-slate-700 border border-slate-200 font-semibold px-4 py-2">Exercices</Badge>
          </div>
        </div>
        <p className="text-gray-700 mt-4">
          Exercices pratiques sur les probabilités et statistiques avec Python
        </p>
      </div>

      {!showQCM && !selectedExercise && (
        <>
          {/* Section QCM */}
          <Card className="mb-8 bg-white/70 backdrop-blur-sm border border-slate-200/60 shadow-sm rounded-2xl hover:shadow-lg transition-shadow cursor-pointer" onClick={() => setShowQCM(true)}>
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                <Trophy className="h-6 w-6" />
                QCM d'évaluation
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-slate-700 font-semibold mb-1">Testez vos connaissances en probabilités</p>
                  <p className="text-gray-600 text-sm">20 questions pour évaluer votre niveau</p>
                </div>
                <Button className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white">
                  <Play className="h-4 w-4" />
                  Commencer
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="mb-8 bg-white/70 backdrop-blur-sm border border-slate-200/60 shadow-sm rounded-2xl">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-slate-800 flex items-center gap-2">
                <Target className="h-6 w-6" />
                Objectifs des exercices
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-700">Simulation Monte-Carlo</p>
                    <p className="text-sm text-gray-700">
                      Implémenter des méthodes de simulation probabiliste
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-700">Processus stochastiques</p>
                    <p className="text-sm text-gray-700">
                      Étudier les chaînes et processus aléatoires
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-700">Loi d'arrêt</p>
                    <p className="text-sm text-gray-700">
                      Comprendre et appliquer les théorèmes d'arrêt
                    </p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Grille d'exercices */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exercices.map((exercice) => (
              <Card
                key={exercice.id}
                className="group relative cursor-pointer bg-white rounded-[20px] shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 border border-gray-100 hover:border-purple-100 hover:-translate-y-1 h-full flex flex-col overflow-hidden"
                onClick={() => handleStartExercise(exercice.id)}
              >
                <CardHeader className="flex-shrink-0 pb-2">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 bg-gray-50 rounded-2xl flex items-center justify-center group-hover:bg-purple-600 group-hover:text-white transition-all duration-300 text-gray-400">
                      <BarChart3 className="h-6 w-6" />
                    </div>
                    <Badge variant="secondary" className="bg-gray-50 text-gray-600 border border-gray-100 font-medium px-3 py-1 rounded-full">
                      {exercice.difficulty}
                    </Badge>
                  </div>
                  <div>
                    <div className="text-xs font-bold tracking-wider text-purple-600 uppercase mb-1 opacity-80">
                      Exercice {exercice.id}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors leading-tight">
                      {exercice.title}
                    </h3>
                  </div>
                </CardHeader>

                <CardContent className="flex-grow flex flex-col pt-0">
                  <p className="text-gray-500 text-sm leading-relaxed mb-6 mt-2 flex-grow line-clamp-3">
                    {exercice.description}
                  </p>
                  <div className="mt-auto">
                    <Button className="w-full h-11 bg-gray-50 text-gray-900 border border-gray-200 hover:bg-purple-600 hover:text-white hover:border-transparent rounded-xl font-semibold transition-all duration-300 flex items-center justify-between px-4 group-hover:shadow-lg group-hover:shadow-purple-500/20">
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
                <div className="space-y-4">
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
                        {qcmScore && qcmScore >= 16 ? "Excellent ! Vous maîtrisez parfaitement les probabilités et statistiques." :
                          qcmScore && qcmScore >= 12 ? "Bon niveau ! Quelques révisions pour perfectionner." :
                            qcmScore && qcmScore >= 8 ? "Niveau correct. Continuez à vous entraîner." :
                              "Niveau à améliorer. Revenez sur les bases des probabilités."}
                      </p>
                    </div>
                  </div>

                  <div className="flex gap-2 justify-center">
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

      <ModuleNavigationCards
        currentModule={{
          id: 3,
          title: "Probabilités",
          slug: "probabilites",
          color: "purple"
        }}
        isExercisePage={true}
        totalExercises={exercices.length}
        currentExerciseId={selectedExercise}
        onNavigate={handleNavigate}
        isQuizMode={showQCM}
      />
    </PythonModuleLayout>
  );
};

export default PythonProbabilitesExercicesPage;