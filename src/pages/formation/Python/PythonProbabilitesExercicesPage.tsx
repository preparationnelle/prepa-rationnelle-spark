import React, { useState } from 'react';
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
        enonce_latex: "Simuler $X$ = rang d'obtention de deux Pile consécutifs au pile ou face.\n\nOn lance une pièce de monnaie jusqu'à obtenir deux Pile consécutifs. On note $X$ le rang d'obtention de ce deuxième Pile consécutif.",
        correction: `import numpy.random as rd

def simulation_arret():
    pile_cons = 0
    rang = 0
    while pile_cons < 2:
        rang += 1
        if rd.random() < 0.5:   # Pile
            pile_cons += 1
        else:                   # Face
            pile_cons = 0
    return rang

for _ in range(10):
    print(simulation_arret())`
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
        enonce_latex: "On dispose d'une urne contenant initialement une boule rouge et une boule verte. À chaque étape, on tire une boule au hasard, on la remet dans l'urne et on ajoute une boule de la même couleur.\n\nSimuler ce processus sur $n$ étapes et analyser l'évolution de la composition de l'urne.",
        correction: `import numpy.random as rd

def renforcement(n):
    R = 1   # nombre de rouges
    V = 1   # nombre de vertes
    for k in range(n):
        if rd.random() < R / (R + V):
            R += 1
        else:
            V += 1
        print(R, V)
    return (R, V)

renforcement(10)`
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
        enonce_latex: "Une urne contient $3$ boules rouges et $7$ boules vertes. On tire sans remise jusqu'à obtenir la première boule rouge.\n\n$\\bullet$ $Z$ = rang d'apparition de la première boule rouge\n\n$\\bullet$ $Y_n$ = nombre de boules vertes tirées avant la première rouge",
        correction: `import numpy.random as rd

def simulation_urne():
    # 1 = rouge, 0 = verte (3 rouges + 7 vertes)
    urne = [1, 1, 1, 0, 0, 0, 0, 0, 0, 0]
    Z = 0
    Y = 0
    while urne[Z] == 0:
        Y += 1
        Z += 1
    return (Z + 1, Y)

# On mélange l'urne avec des indices aléatoires
for _ in range(5):
    print(simulation_urne())`
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
        enonce_latex: "Écrire une fonction qui simule la réalisation d'un événement $A$ de probabilité $p$.\n\nLa fonction doit retourner True si l'événement se réalise, False sinon.",
        correction: `import numpy.random as rd

def evenement(p):
    return rd.random() < p

# Tests : on estime la fréquence sur 1000 simulations
N = 1000
for p in [0.1, 0.5, 0.9]:
    S = 0
    for _ in range(N):
        if evenement(p):
            S += 1
    print(p, S / N)`
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
        enonce_latex: "Un animal gravit un escalier de $n$ marches. À chaque bond, il monte soit $1$ marche, soit $2$ marches (avec probabilité $\\frac{1}{2}$ pour chaque).\n\nSimuler ce processus et déterminer le nombre de bonds nécessaires pour atteindre la $n$-ième marche.",
        correction: `import numpy.random as rd

def sauts(n):
    pos = 0
    bonds = 0
    while pos < n:
        if rd.random() < 0.5:
            pos += 1
        else:
            pos += 2
        bonds += 1
    return bonds

for n in [5, 10, 15]:
    R = [sauts(n) for _ in range(100)]
    moyenne = sum(R) / len(R)
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
        enonce_latex: "$X$ et $Y$ suivent des lois géométriques de paramètres respectifs $p_1$ et $p_2$.\n\nEstimer $P(X = 2Y)$ par méthode de Monte-Carlo pour $p_1 = 0.3$ et $p_2 = 0.5$.",
        correction: `import numpy.random as rd

def geometrique(p):
    n = 1
    while rd.random() > p:
        n += 1
    return n

def estim(p1, p2, N):
    S = 0
    for _ in range(N):
        X = geometrique(p1)
        Y = geometrique(p2)
        if X == 2 * Y:
            S += 1
    return S / N

print(estim(0.3, 0.5, 10000))`
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
        enonce_latex: `On considère un mobile qui, à chaque unité de temps, avance d'une unité avec une probabilité égale à $\\frac{1}{2}$ ou recule d'une unité avec la même probabilité. Au départ, le mobile se situe en position $0$.

**1.** Écrire une fonction Python $\\texttt{position\\_finale(n)}$ qui simule ce déplacement et retourne la position finale.

**2.** Écrire une variante $\\texttt{passages\\_origine(n)}$ qui compte le nombre de fois où le mobile repasse par l'origine.

**3.** Écrire une fonction $\\texttt{temps\\_sortie(borne)}$ qui simule la marche jusqu'à ce que le mobile sorte de l'intervalle $[-\\text{borne}, \\text{borne}]$ et renvoie le nombre de pas.

**4.** Écrire une fonction $\\texttt{moyenne\\_position(n, essais)}$ qui calcule la moyenne des positions finales sur un grand nombre d'essais.`,
        corrections: [
          {
            title: "Correction 1 : Position Finale",
            code: `import numpy.random as rd

def position_finale(n):
    pos = 0
    for k in range(n):
        if rd.random() < 0.5:
            pos += 1
        else:
            pos -= 1
    return pos

print(position_finale(10))`
          },
          {
            title: "Correction 2 : Passages à l'Origine",
            code: `import numpy.random as rd

def passages_origine(n):
    pos = 0
    C = 0
    for k in range(n):
        if rd.random() < 0.5:
            pos += 1
        else:
            pos -= 1
        if pos == 0:
            C += 1
    return C

print(passages_origine(10))`
          },
          {
            title: "Correction 3 : Temps de Sortie d'Intervalle",
            code: `import numpy.random as rd

def temps_sortie(borne):
    pos = 0
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
            code: `import numpy.random as rd

def moyenne_position(n, N):
    S = 0
    for _ in range(N):
        pos = 0
        for k in range(n):
            if rd.random() < 0.5:
                pos += 1
            else:
                pos -= 1
        S += pos
    return S / N

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
        enonce_latex: `On lance indéfiniment une pièce équilibrée (Pile ou Face). On note $X$ la variable aléatoire égale au rang du lancer où, pour la première fois, on obtient deux Pile consécutifs.

Par exemple, si la suite des résultats est : Pile, Face, Face, Pile, Pile, ..., alors on a $X = 5$.

Compléter la fonction Python $\\texttt{simulX()}$ pour qu'elle simule les lancers et renvoie le nombre de lancers effectués (la valeur de $X$).`,
        correction: `import numpy.random as rd

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
        enonce_latex: `On considère une urne contenant au départ : $1$ boule rouge et $1$ boule verte.

On effectue une série de tirages avec remise, selon le protocole suivant :

- Si on tire une boule rouge, on la remet et on ajoute $2$ boules rouges dans l'urne.

- Si on tire une boule verte, on la remet et on ajoute $1$ rouge et $2$ vertes.

On note $Y_n$ la variable aléatoire égale au rang du tirage à l'issue duquel le nombre de boules vertes devient supérieur ou égal à $n$ (pour un entier $n \\geq 2$).

Compléter la fonction Python $\\texttt{simulY(n)}$ pour qu'elle simule ce processus et renvoie la valeur de $Y_n$.`,
        correction: `import numpy.random as rd

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
        enonce_latex: `Un animal doit gravir un escalier comportant $n$ marches. À chaque bond, il choisit au hasard de monter soit $1$ marche, soit $2$ marches, avec une probabilité égale.

Écrire une fonction Python $\\texttt{saut\\_escalier(n)}$ qui :

- Prend en argument un entier $n$ (le nombre de marches).

- Simule le comportement de l'animal.

- Retourne le nombre de bonds effectués pour atteindre (ou dépasser) la dernière marche.`,
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
        enonce_latex: `On souhaite compléter une collection de $n$ vignettes différentes. À chaque achat, on obtient une vignette choisie uniformément au hasard parmi les $n$ possibles (tirages indépendants avec remise).

**1.** Écrire une fonction $\\texttt{collection(n)}$ qui simule le processus et retourne le nombre d'achats nécessaires pour obtenir les $n$ vignettes distinctes.

**2.** Écrire une fonction $\\texttt{moyenne\\_achats(n, essais)}$ qui estime par Monte-Carlo le nombre moyen d'achats sur un grand nombre d'essais.

**3.** Écrire une fonction $\\texttt{compare\\_theorique(n)}$ qui compare l'estimation Monte-Carlo avec la valeur théorique $n \\times H_n$ (où $H_n = 1 + \\frac{1}{2} + \\ldots + \\frac{1}{n}$ est le $n$-ième nombre harmonique).

**4.** Écrire une fonction $\\texttt{histogramme\\_achats(n, essais)}$ qui trace l'histogramme du nombre d'achats sur un grand nombre d'essais.`,
        corrections: [
          {
            title: "Correction 1 : Simulation d'une collection",
            code: `import numpy.random as rd

def collection(n):
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
            code: `import numpy.random as rd

def collection(n):
    obtenues = set()
    achats = 0
    while len(obtenues) < n:
        vignette = rd.randint(1, n)
        obtenues.add(vignette)
        achats += 1
    return achats

def moyenne_achats(n, essais=10000):
    total = sum(collection(n) for _ in range(essais))
    return total / essais

# Test
print(f"Moyenne pour 10 vignettes : {moyenne_achats(10, 10000):.1f}")`
          },
          {
            title: "Correction 3 : Comparaison avec la valeur théorique",
            code: `import numpy.random as rd

def collection(n):
    obtenues = set()
    achats = 0
    while len(obtenues) < n:
        vignette = rd.randint(1, n)
        obtenues.add(vignette)
        achats += 1
    return achats

def compare_theorique(n, essais=10000):
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
            code: `import numpy.random as rd
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
        enonce_latex: `On considère un carré de côté $2$ centré à l'origine $[-1,1] \\times [-1,1]$ et le disque unité inscrit (de rayon $1$).

On tire $N$ points uniformément dans le carré. La proportion de points tombant dans le disque est une estimation de l'aire du disque divisée par l'aire du carré, soit $\\frac{\\pi}{4}$.

**1.** Écrire une fonction $\\texttt{estimer\\_pi(N)}$ qui tire $N$ points uniformes dans le carré et retourne une estimation de $\\pi$.

**2.** Écrire une fonction $\\texttt{convergence\\_pi(N\\_max, pas)}$ qui trace l'évolution de l'estimation de $\\pi$ en fonction du nombre de points tirés.

**3.** Écrire une fonction $\\texttt{intervalle\\_confiance(N, essais)}$ qui estime $\\pi$ plusieurs fois et calcule un intervalle de confiance à $95\\%$.

**4.** Écrire une fonction $\\texttt{visualiser\\_points(N)}$ qui affiche les points dans le carré (en bleu ceux dans le disque, en rouge ceux hors du disque).`,
        corrections: [
          {
            title: "Correction 1 : Estimation de pi",
            code: `import numpy.random as rd

def estimer_pi(N):
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
            code: `import numpy.random as rd
import matplotlib.pyplot as plt
import math

def convergence_pi(N_max, pas):
    estim = []
    points = []
    D = 0
    for k in range(1, N_max + 1):
        x = 2 * rd.random() - 1
        y = 2 * rd.random() - 1
        if x**2 + y**2 <= 1:
            D += 1
        if k % pas == 0:
            estim.append(4 * D / k)
            points.append(k)
    plt.plot(points, estim)
    plt.show()

convergence_pi(50000, 100)`
          },
          {
            title: "Correction 3 : Intervalle de confiance",
            code: `import numpy.random as rd
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
            code: `import numpy.random as rd
import matplotlib.pyplot as plt
import numpy as np

def visualiser_points(N):
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
            code: `import numpy.random as rd
import math

def expo(param):
    return -math.log(1 - rd.random()) / param

def simuler_file(n_clients, lam=1, mu=1.5):
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
            code: `import numpy.random as rd
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
    total = 0
    for _ in range(essais):
        attentes = simuler_file(n_clients, lam, mu)
        total += sum(attentes) / len(attentes)
    return total / essais

print(f"Temps moyen d'attente : {temps_moyen_attente(50):.3f}")`
          },
          {
            title: "Correction 3 : Longueur maximale de la file",
            code: `import numpy.random as rd
import math

def expo(param):
    return -math.log(1 - rd.random()) / param

def longueur_max_file(n_clients, lam, mu):
    A = []   # arrivées
    t = 0
    for _ in range(n_clients):
        t += expo(lam)
        A.append(t)

    F = []   # fins de service en attente
    fin = 0
    M = 0    # longueur max
    for k in range(len(A)):
        F = [f for f in F if f > A[k]]
        F.append(max(A[k], fin) + expo(mu))
        fin = F[-1]
        if len(F) > M:
            M = len(F)
    return M

print(longueur_max_file(100, 1, 1.5))`
          },
          {
            title: "Correction 4 : Taux d'occupation du guichet",
            code: `import numpy.random as rd
import math

def expo(param):
    return -math.log(1 - rd.random()) / param

def taux_occupation(n_clients, lam=1, mu=1.5):
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
            code: `import numpy.random as rd

def simuler_jeu(p):
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
            code: `import numpy.random as rd

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
            code: `import numpy.random as rd

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
    victoires = sum(simuler_set(p) for _ in range(essais))
    return victoires / essais

# Tests pour differentes valeurs de p
for p in [0.4, 0.45, 0.5, 0.55, 0.6]:
    prob = proba_victoire_set(p)
    print(f"p = {p} -> P(gagner set) = {prob:.3f}")`
          },
          {
            title: "Correction 4 : Courbe d'amplification",
            code: `import numpy.random as rd
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
            code: `import numpy.random as rd

def ruine(a, N, p):
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
            code: `import numpy.random as rd

def ruine(a, N, p):
    fortune = a
    while 0 < fortune < N:
        if rd.random() < p:
            fortune += 1
        else:
            fortune -= 1
    return fortune == 0

def proba_ruine(a, N, p, essais=10000):
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
            code: `import numpy.random as rd

def duree_partie_sim(a, N, p):
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
            code: `import numpy.random as rd
import matplotlib.pyplot as plt

def trajectoire(a, N, p):
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
    },
    {
      id: 16,
      title: "Simulation d'une loi binomiale",
      description: "Simuler X ~ B(n, p) comme somme de n Bernoulli, et estimer E[X] et V[X] par Monte-Carlo.",
      difficulty: "Avancé",
      badge: "Simulation",
      content: {
        objective: "\\text{Simuler } X \\sim \\mathcal{B}(n, p) \\text{ et estimer } E[X], V[X]",
        isLatex: true,
        enonce_latex: `Soit $X \\sim \\mathcal{B}(n, p)$. On rappelle que $X$ peut s'écrire comme la somme de $n$ variables de Bernoulli indépendantes de paramètre $p$.

\\textbf{1.} Écrire une fonction $\\texttt{binom(n, p)}$ qui simule $X$ par somme de Bernoulli.

\\textbf{2.} Écrire une fonction $\\texttt{esperance(n, p, N)}$ qui estime $E[X]$ sur $N$ simulations et la compare à la valeur théorique $np$.

\\textbf{3.} Écrire une fonction $\\texttt{variance(n, p, N)}$ qui estime $V[X]$ et la compare à $np(1-p)$.`,
        correction: `import numpy.random as rd

def binom(n, p):
    S = 0
    for k in range(n):
        if rd.random() < p:
            S = S + 1
    return S

def esperance(n, p, N):
    S = 0
    for k in range(N):
        S = S + binom(n, p)
    return S / N

def variance(n, p, N):
    L = []
    for k in range(N):
        L.append(binom(n, p))
    m = sum(L) / N
    S = 0
    for k in range(N):
        S = S + (L[k] - m) ** 2
    return S / N

print(esperance(20, 0.3, 10000))   # ~6
print(variance(20, 0.3, 10000))    # ~4.2`
      }
    },
    {
      id: 17,
      title: "Loi hypergéométrique",
      description: "Simuler le nombre de boules rouges obtenues lors de n tirages sans remise dans une urne.",
      difficulty: "Avancé",
      badge: "Simulation",
      content: {
        objective: "\\text{Simuler } X = \\text{nombre de rouges en } n \\text{ tirages sans remise dans une urne à } N \\text{ rouges et } M \\text{ vertes}",
        isLatex: true,
        enonce_latex: `Une urne contient $N$ boules rouges et $M$ boules vertes. On effectue $n$ tirages \\textbf{sans remise}. Soit $X$ le nombre de rouges obtenues.

Écrire une fonction $\\texttt{hyper(N, M, n)}$ qui simule $X$. On modélise les boules par des nombres : $1$ pour rouge, $0$ pour verte.`,
        correction: `import numpy.random as rd

def hyper(N, M, n):
    U = [1] * N + [0] * M
    X = 0
    for k in range(n):
        j = rd.randint(0, len(U))
        X = X + U[j]
        U.pop(j)
    return X

# Test : urne 5 rouges, 5 vertes, 4 tirages
S = 0
for k in range(10000):
    S = S + hyper(5, 5, 4)
print(S / 10000)   # ~2`
      }
    },
    {
      id: 18,
      title: "Approximation de π par Monte-Carlo",
      description: "Estimer π en tirant des points uniformes dans le carré [0,1]² et en comptant ceux dans le quart de cercle.",
      difficulty: "Avancé",
      badge: "Monte-Carlo",
      content: {
        objective: "\\text{Estimer } \\pi \\approx 4 \\cdot \\frac{\\text{points dans le quart de cercle}}{\\text{points totaux}}",
        isLatex: true,
        enonce_latex: `Pour estimer $\\pi$, on tire $N$ points $(X_k, Y_k)$ uniformes dans $[0, 1]^2$. On compte combien tombent dans le quart de disque $\\{x^2 + y^2 \\leq 1\\}$.

L'aire du quart de disque vaut $\\pi/4$, donc $\\pi \\approx 4 \\cdot \\dfrac{\\text{points dans le quart de cercle}}{N}$.

Écrire une fonction $\\texttt{estim\\_pi(N)}$ qui retourne cette estimation.`,
        correction: `import numpy.random as rd

def estim_pi(N):
    S = 0
    for k in range(N):
        x = rd.random()
        y = rd.random()
        if x ** 2 + y ** 2 <= 1:
            S = S + 1
    return 4 * S / N

print(estim_pi(10000))    # ~3.14
print(estim_pi(100000))   # ~3.14`
      }
    },
    {
      id: 19,
      title: "Maximum de n variables uniformes",
      description: "Étudier la loi de M = max(U₁, …, Uₙ) où les Uₖ sont uniformes sur [0, 1].",
      difficulty: "Avancé",
      badge: "Simulation",
      content: {
        objective: "\\text{Simuler } M = \\max(U_1, \\ldots, U_n) \\text{ et estimer } E[M]",
        isLatex: true,
        enonce_latex: `Soient $U_1, \\ldots, U_n$ des variables aléatoires indépendantes uniformes sur $[0, 1]$. On pose $M = \\max(U_1, \\ldots, U_n)$.

\\textbf{1.} Écrire une fonction $\\texttt{maxi(n)}$ qui simule une réalisation de $M$.

\\textbf{2.} Écrire une fonction $\\texttt{esp\\_max(n, N)}$ qui estime $E[M]$ et la compare à la valeur théorique $\\dfrac{n}{n+1}$.`,
        correction: `import numpy.random as rd

def maxi(n):
    M = 0
    for k in range(n):
        u = rd.random()
        if u > M:
            M = u
    return M

def esp_max(n, N):
    S = 0
    for k in range(N):
        S = S + maxi(n)
    return S / N

print(esp_max(5, 10000))    # ~0.833 (theorique : 5/6)
print(esp_max(10, 10000))   # ~0.909 (theorique : 10/11)`
      }
    },
    {
      id: 20,
      title: "Loi faible des grands nombres",
      description: "Visualiser la convergence de la moyenne empirique de n Bernoulli vers p en traçant la suite des moyennes.",
      difficulty: "Avancé",
      badge: "Simulation",
      content: {
        objective: "\\text{Vérifier empiriquement que } \\frac{1}{n} \\sum_{k=1}^{n} X_k \\to p \\text{ quand } n \\to \\infty",
        isLatex: true,
        enonce_latex: `Soient $X_1, X_2, \\ldots$ des Bernoulli i.i.d. de paramètre $p$. On note $\\bar{X}_n = \\dfrac{1}{n} \\sum_{k=1}^{n} X_k$ la moyenne empirique.

La loi faible des grands nombres dit que $\\bar{X}_n \\to p$.

Écrire une fonction $\\texttt{moyennes(n, p)}$ qui retourne la liste $[\\bar{X}_1, \\bar{X}_2, \\ldots, \\bar{X}_n]$.`,
        correction: `import numpy.random as rd

def moyennes(n, p):
    L = []
    S = 0
    for k in range(n):
        if rd.random() < p:
            S = S + 1
        L.append(S / (k + 1))
    return L

L = moyennes(1000, 0.3)
print(L[9])     # moyenne sur 10 tirages
print(L[99])    # moyenne sur 100 tirages
print(L[999])   # moyenne sur 1000 tirages, proche de 0.3`
      }
    },
    {
      id: 21,
      title: "Inégalité de Bienaymé-Tchebychev",
      description: "Vérifier empiriquement l'inégalité P(|X − E[X]| ≥ a) ≤ V[X]/a² pour une loi binomiale.",
      difficulty: "Avancé",
      badge: "Probabilités",
      content: {
        objective: "\\text{Vérifier empiriquement : } P(|X - E[X]| \\geq a) \\leq \\frac{V[X]}{a^2}",
        isLatex: true,
        enonce_latex: `Soit $X \\sim \\mathcal{B}(n, p)$, donc $E[X] = np$ et $V[X] = np(1-p)$.

L'inégalité de Bienaymé-Tchebychev dit : pour tout $a > 0$,
$$P(|X - np| \\geq a) \\leq \\dfrac{np(1-p)}{a^2}$$

Écrire une fonction $\\texttt{tchebychev(n, p, a, N)}$ qui estime $P(|X - np| \\geq a)$ par Monte-Carlo et affiche la borne théorique.`,
        correction: `import numpy.random as rd

def binom(n, p):
    S = 0
    for k in range(n):
        if rd.random() < p:
            S = S + 1
    return S

def tchebychev(n, p, a, N):
    m = n * p
    S = 0
    for k in range(N):
        X = binom(n, p)
        if abs(X - m) >= a:
            S = S + 1
    estim = S / N
    borne = n * p * (1 - p) / (a ** 2)
    print("P estimee :", estim)
    print("Borne BT  :", borne)

tchebychev(100, 0.5, 10, 10000)
tchebychev(100, 0.5, 20, 10000)`
      }
    },
    {
      id: 22,
      title: "Marche aléatoire en dimension 2",
      description: "Simuler une marche aléatoire dans le plan (4 directions équiprobables) et estimer la probabilité de retour à l'origine en n pas.",
      difficulty: "Avancé",
      badge: "Simulation",
      content: {
        objective: "\\text{Simuler une marche aléatoire 2D et estimer } P(\\text{retour en 0 en } n \\text{ pas})",
        isLatex: true,
        enonce_latex: `Un mobile part de l'origine $(0, 0)$. À chaque pas, il se déplace d'une unité dans une des quatre directions (haut, bas, gauche, droite) avec probabilité $1/4$ chacune.

\\textbf{1.} Écrire une fonction $\\texttt{marche2D(n)}$ qui simule $n$ pas et retourne True si le mobile est revenu à l'origine, False sinon.

\\textbf{2.} Écrire une fonction $\\texttt{proba\\_retour(n, N)}$ qui estime $P(\\text{retour})$ par Monte-Carlo.`,
        correction: `import numpy.random as rd

def marche2D(n):
    x = 0
    y = 0
    for k in range(n):
        u = rd.randint(0, 4)
        if u == 0:
            x = x + 1
        elif u == 1:
            x = x - 1
        elif u == 2:
            y = y + 1
        else:
            y = y - 1
    return x == 0 and y == 0

def proba_retour(n, N):
    S = 0
    for k in range(N):
        if marche2D(n):
            S = S + 1
    return S / N

print(proba_retour(10, 10000))
print(proba_retour(20, 10000))`
      }
    },
    {
      id: 23,
      title: "Algorithme du rejet — loi triangulaire",
      description: "Simuler une variable de densité f(x) = 2x sur [0, 1] par méthode du rejet.",
      difficulty: "Avancé",
      badge: "Monte-Carlo",
      content: {
        objective: "\\text{Simuler } X \\text{ de densité } f(x) = 2x \\text{ sur } [0, 1] \\text{ par rejet}",
        isLatex: true,
        enonce_latex: `On veut simuler une variable $X$ de densité $f(x) = 2x$ sur $[0, 1]$.

\\textbf{Méthode du rejet :} on tire $(U, V)$ uniforme dans $[0, 1] \\times [0, 2]$. Si $V \\leq f(U) = 2U$, on accepte $X = U$ ; sinon on recommence.

\\textbf{1.} Écrire une fonction $\\texttt{rejet()}$ qui retourne une réalisation de $X$.

\\textbf{2.} Estimer $E[X]$ par Monte-Carlo et comparer à la valeur théorique $\\int_0^1 x \\cdot 2x \\, dx = 2/3$.`,
        correction: `import numpy.random as rd

def rejet():
    U = rd.random()
    V = 2 * rd.random()
    while V > 2 * U:
        U = rd.random()
        V = 2 * rd.random()
    return U

def esp(N):
    S = 0
    for k in range(N):
        S = S + rejet()
    return S / N

print(esp(10000))   # ~0.667 (theorique : 2/3)`
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
        <PythonExerciseTopBar
          current={selectedExercise}
          total={exercices.length}
          onBack={handleBackToList}
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
          badges={exercise.badge ? [exercise.badge] : undefined}
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

            {showCorrections.has(selectedExercise) && (
              <div className="space-y-5">
                {exercise.content.correction && (
                  <PythonCorrectionPanel>
                    <PythonCodeBlock code={exercise.content.correction} />
                  </PythonCorrectionPanel>
                )}
                {exercise.content.corrections &&
                  exercise.content.corrections.map((corr, index) => (
                    <PythonCorrectionPanel key={index} title={corr.title}>
                      <PythonCodeBlock code={corr.code} />
                    </PythonCorrectionPanel>
                  ))}
              </div>
            )}

            <PythonExerciseFooterNav
              current={selectedExercise}
              total={exercices.length}
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
          <div className="bg-white border border-pr-gray-light rounded-2xl p-10 text-center text-pr-gray-mid">
            Contenu détaillé de l'exercice sera développé ici…
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
      {!showQCM && (
        <>
          <PythonExerciseHero
            moduleLabel="Module 3 · Exercices"
            title={<>Exercices · <span className="text-pr-orange">Probabilités</span></>}
            subtitle="Simulations Monte-Carlo, processus stochastiques et lois d'arrêt avec Python."
            annotation={"↘ Monte-Carlo,\nle classique"}
          />

          <PythonQCMLauncher
            description="Testez vos connaissances en probabilités et simulations"
            onLaunch={() => setShowQCM(true)}
          />

          <PythonSectionHeading
            label="Liste"
            title="Exercices du module"
            className="mt-12"
          />

          <PythonExerciseGrid
            exercises={exercices.map((ex) => ({
              id: ex.id,
              title: ex.title,
              description: ex.description,
              difficulty: ex.difficulty,
            }))}
            onSelect={handleStartExercise}
          />
        </>
      )}

      {showQCM && (
        <PythonQCMPanel
          intro="Répondez aux 20 questions pour évaluer votre niveau sur les probabilités."
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