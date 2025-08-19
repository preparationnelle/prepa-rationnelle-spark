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
import { BarChart3, Target, Book, CheckCircle, Play, Code, Calculator, ChevronDown, ChevronUp, Trophy, Star, ArrowLeft } from 'lucide-react';
import PythonModuleLayout from '@/components/formation/PythonModuleLayout';
import ModuleNavigationCards from '@/components/formation/ModuleNavigationCards';

const PythonProbabilitesExercicesPage = () => {
  const [selectedExercise, setSelectedExercise] = useState<number | null>(null);
  const [showCorrections, setShowCorrections] = useState<Set<number>>(new Set());
  const [showQCM, setShowQCM] = useState(false);
  
  // États pour le QCM d'évaluation
  const [qcmAnswers, setQcmAnswers] = useState<{[key: number]: string}>({});
  const [qcmSubmitted, setQcmSubmitted] = useState(false);
  const [qcmScore, setQcmScore] = useState<number | null>(null);
  
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
        enonce: "Simuler X = rang d'obtention de deux Pile consécutifs au pile ou face.\n\nOn lance une pièce de monnaie jusqu'à obtenir deux Pile consécutifs. On note X le rang d'obtention de ce deuxième Pile consécutif.",
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
        enonce: "On dispose d'une urne contenant initialement une boule rouge et une boule verte. À chaque étape, on tire une boule au hasard, on la remet dans l'urne et on ajoute une boule de la même couleur.\n\nSimuler ce processus sur n étapes et analyser l'évolution de la composition de l'urne.",
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
        enonce: "Une urne contient 3 boules rouges et 7 boules vertes. On tire sans remise jusqu'à obtenir la première boule rouge.\n\n- Z = rang d'apparition de la première boule rouge\n- Y_n = nombre de boules vertes tirées avant la première rouge",
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
        enonce: "Écrire une fonction qui simule la réalisation d'un événement A de probabilité p.\n\nLa fonction doit retourner True si l'événement se réalise, False sinon.",
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
        enonce: "Un animal gravit un escalier de n marches. À chaque bond, il monte soit 1 marche, soit 2 marches (avec probabilité 1/2 pour chaque).\n\nSimuler ce processus et déterminer le nombre de bonds nécessaires pour atteindre la n-ième marche.",
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
        objective: "Estimer une probabilité par méthode de Monte-Carlo",
        enonce: "X et Y suivent des lois géométriques de paramètres respectifs p1 et p2.\n\nEstimer P(X = 2Y) par méthode de Monte-Carlo pour p1 = 0.3 et p2 = 0.5.",
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
        enonce: `On considère un mobile qui, à chaque unité de temps, avance d'une unité avec une probabilité égale à 1/2 ou recule d'une unité avec la même probabilité. Au départ, le mobile se situe en position 0.

1.  Écrire une fonction Python \`position_finale(n)\` qui simule ce déplacement et retourne la position finale.
2.  Écrire une variante \`passages_origine(n)\` qui compte le nombre de fois où le mobile repasse par l'origine.
3.  Écrire une fonction \`temps_sortie(borne)\` qui simule la marche jusqu’à ce que le mobile sorte de l’intervalle [-borne, borne] et renvoie le nombre de pas.
4.  Écrire une fonction \`moyenne_position(n, essais)\` qui calcule la moyenne des positions finales sur un grand nombre d'essais.`,
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
        enonce: `On lance indéfiniment une pièce équilibrée (Pile ou Face). On note X la variable aléatoire égale au rang du lancer où, pour la première fois, on obtient deux Pile consécutifs.

Par exemple, si la suite des résultats est : Pile, Face, Face, Pile, Pile, ..., alors on a X = 5.

Compléter la fonction Python \`simulX()\` pour qu'elle simule les lancers et renvoie le nombre de lancers effectués (la valeur de X).`,
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
        enonce: `On considère une urne contenant au départ : 1 boule rouge et 1 boule verte.

On effectue une série de tirages avec remise, selon le protocole suivant :
- Si on tire une boule rouge, on la remet et on ajoute 2 boules rouges dans l'urne.
- Si on tire une boule verte, on la remet et on ajoute 1 rouge et 2 vertes.

On note Y_n la variable aléatoire égale au rang du tirage à l'issue duquel le nombre de boules vertes devient supérieur ou égal à n (pour un entier n ≥ 2).

Compléter la fonction Python \`simulY(n)\` pour qu'elle simule ce processus et renvoie la valeur de Y_n.`,
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
        enonce: `Un animal doit gravir un escalier comportant n marches. À chaque bond, il choisit au hasard de monter soit 1 marche, soit 2 marches, avec une probabilité égale.

Écrire une fonction Python \`saut_escalier(n)\` qui :
- Prend en argument un entier n (le nombre de marches).
- Simule le comportement de l’animal.
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

    return (
      <PythonModuleLayout>
        <div className="mb-6">
          <Button 
            variant="outline" 
            size="sm" 
            className="flex items-center gap-2 mb-4" 
            onClick={handleBackToList}
          >
            <ArrowLeft className="h-4 w-4" />
            Retour aux exercices
          </Button>
          
          <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-indigo-50">
            <div className="p-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-indigo-500 text-white">
                  <BarChart3 className="h-5 w-5" />
                </div>
                <div>
                  <h1 className="text-xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                    Exercice {selectedExercise} - {exercise.title}
                  </h1>
                  <div className="flex items-center gap-2 mt-1">
                    <Badge variant="secondary" className="bg-indigo-100 text-indigo-700 text-xs">
                      {exercise.difficulty}
                    </Badge>
                    <Badge variant="secondary" className="bg-slate-100 text-slate-700 text-xs">
                      {exercise.badge}
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </div>

        {exercise.content ? (
          <>
            <Card className="mb-6">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-indigo-700 text-lg">
                  <Target className="h-5 w-5" />
                  Objectif
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <p className="text-slate-600 text-sm leading-relaxed bg-indigo-50 p-3 rounded-lg border border-indigo-100">
                  {exercise.content.objective}
                </p>
              </CardContent>
            </Card>

            <Card className="mb-6">
              <CardHeader className="pb-3">
                <CardTitle className="flex items-center gap-2 text-slate-700 text-lg">
                  <Book className="h-5 w-5" />
                  Énoncé
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="prose prose-sm max-w-none">
                  <pre className="text-slate-700 whitespace-pre-line text-sm leading-relaxed bg-slate-50 p-4 rounded-lg border">{exercise.content.enonce}</pre>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mb-4">
              <Button 
                variant="outline" 
                onClick={() => toggleCorrection(selectedExercise)}
                className="flex items-center gap-2 border-indigo-200 text-indigo-700 hover:bg-indigo-50"
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
              <Card className="mb-6 border border-green-200 bg-green-50">
                <CardHeader className="pb-3">
                  <CardTitle className="flex items-center gap-2 text-green-700 text-lg">
                    <CheckCircle className="h-5 w-5" />
                    Correction
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                    <pre className="text-green-400 text-sm font-mono leading-relaxed">
                      <code>{exercise.content.correction}</code>
                    </pre>
                  </div>
                </CardContent>
              </Card>
                )}
                {exercise.content.corrections &&
                  exercise.content.corrections.map((corr, index) => (
                    <Card key={index} className="mb-4 border border-green-200 bg-green-50">
                      <CardHeader className="pb-3">
                        <CardTitle className="flex items-center gap-2 text-green-700 text-base">
                          <Code className="h-5 w-5" />
                          {corr.title}
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="pt-0">
                        <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
                          <pre className="text-green-400 text-sm font-mono leading-relaxed">
                            <code>{corr.code}</code>
                          </pre>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </>
            )}
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
          color: "purple"
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
      {/* En-tête plus compact */}
      <Card className="border-0 shadow-lg bg-gradient-to-br from-slate-50 to-indigo-50 mb-6">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="p-2 rounded-lg bg-indigo-500 text-white">
              <BarChart3 className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Module 3 : Exercices - Probabilités
              </h1>
              <p className="text-muted-foreground text-sm">
                Exercices pratiques sur les probabilités et statistiques
              </p>
            </div>
          </div>
        </div>
      </Card>

      {!showQCM && !selectedExercise && (
        <>
          <Card className="mb-6 hover:shadow-lg transition-all duration-200 cursor-pointer border-indigo-200 hover:border-indigo-300" onClick={() => setShowQCM(true)}>
            <CardHeader className="bg-gradient-to-r from-indigo-50 to-blue-50 py-4">
              <CardTitle className="flex items-center gap-3">
                <Trophy className="h-6 w-6 text-indigo-600" />
                <div>
                  <h2 className="text-xl text-indigo-800">QCM d'évaluation</h2>
                  <p className="text-sm text-indigo-600 mt-1">20 questions • 15 min</p>
                </div>
              </CardTitle>
            </CardHeader>
            <CardContent className="py-3">
              <div className="flex items-center justify-between">
                <p className="text-muted-foreground text-sm">Testez vos connaissances en probabilités</p>
                <Button variant="outline" size="sm" className="flex items-center gap-2 text-indigo-600 border-indigo-200 hover:bg-indigo-50">
                  <Play className="h-4 w-4" />
                  Commencer
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {exercices.map((exercice) => (
              <Card key={exercice.id} className="border border-slate-200 hover:border-indigo-300 hover:shadow-md transition-all duration-200 cursor-pointer group"
                    onClick={() => handleStartExercise(exercice.id)}>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="p-1.5 rounded-md bg-indigo-500 text-white group-hover:bg-indigo-600 transition-colors">
                        <BarChart3 className="h-4 w-4" />
                      </div>
                      <div>
                        <CardTitle className="text-base">Ex. {exercice.id}</CardTitle>
                        <Badge variant="secondary" className="bg-indigo-100 text-indigo-700 text-xs">
                          {exercice.difficulty}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <h3 className="font-medium mb-2 text-slate-700 text-sm leading-tight">
                    {exercice.title}
                  </h3>
                  <p className="text-xs text-muted-foreground mb-3 line-clamp-2">
                    {exercice.description}
                  </p>
                  <Button size="sm" className="w-full bg-indigo-600 hover:bg-indigo-700 text-sm py-2">
                    <Play className="h-3 w-3 mr-2" />
                    Commencer
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

      <Card className="mb-8 border-2 border-purple-200 bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-3 text-purple-700">
            <Trophy className="h-6 w-6" />
            QCM d'évaluation - Testez vos connaissances
          </CardTitle>
        </CardHeader>
        <CardContent>
          {!qcmSubmitted ? (
            <div className="space-y-6">
              <div className="flex items-center justify-between mb-4">
                <p className="text-purple-700 font-medium">
                  Répondez aux 20 questions pour évaluer votre niveau sur les probabilités et statistiques
                </p>
                <Badge variant="outline" className="bg-purple-100 text-purple-700">
                  {Object.keys(qcmAnswers).length}/20 répondues
                </Badge>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                    {qcmQuestions.map((question) => (
                  <Card key={question.id} className="border border-purple-200 hover:border-purple-300 transition-colors">
                    <CardContent className="pt-4">
                      <div className="flex items-center gap-2 mb-2">
                        <Badge variant="outline" className="bg-purple-100 text-purple-700 text-xs">
                          Q{question.id}
                        </Badge>
                        {qcmAnswers[question.id] && (
                          <CheckCircle className="h-3 w-3 text-green-600" />
                        )}
                      </div>
                      <p className="mb-3 text-xs line-clamp-3">{question.question}</p>
                      <div className="space-y-1">
                        {question.options.map((option, optIndex) => (
                          <label key={optIndex} className="flex items-center gap-1 p-1 rounded hover:bg-purple-50 cursor-pointer">
                            <input
                              type="radio"
                              name={`question-${question.id}`}
                              value={option}
                              checked={qcmAnswers[question.id] === option}
                              onChange={(e) => handleQCMAnswer(question.id, e.target.value)}
                              className="text-purple-600 text-xs"
                            />
                            <span className="text-xs">{option.split(') ')[1] || option}</span>
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
                  className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-3"
                >
                  <Trophy className="h-4 w-4 mr-2" />
                  Valider le QCM
                </Button>
              </div>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="text-center space-y-2">
                <div className="flex items-center justify-center gap-2">
                  <Trophy className="h-6 w-6 text-yellow-600" />
                  <h3 className="text-lg font-bold text-purple-700">Résultats du QCM</h3>
                </div>
                
                <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-lg p-4 border-2 border-purple-200">
                  <div className="text-2xl font-bold text-purple-700 mb-2">
                    {qcmScore?.toFixed(1)}/20
                  </div>
                  <div className="flex items-center justify-center gap-1 mb-2">
                    {[...Array(5)].map((_, i) => (
                      <Star 
                        key={i} 
                        className={`h-4 w-4 ${i < Math.floor((qcmScore || 0) / 4) ? 'text-yellow-500 fill-current' : 'text-gray-300'}`} 
                      />
                    ))}
                  </div>
                  <p className="text-purple-700 text-sm">
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
                  className="border-purple-300 text-purple-700 hover:bg-purple-50 text-sm"
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
      />
    </PythonModuleLayout>
  );
};

export default PythonProbabilitesExercicesPage;