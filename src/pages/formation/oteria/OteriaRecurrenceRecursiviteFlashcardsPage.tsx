import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, BookOpen, Target, Zap, Calculator, RotateCcw, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const flashcards = [
  {
    id: 1,
    category: "Sommes de base",
    front: "Somme des n premiers entiers",
    back: "\\sum_{i=1}^n i = \\frac{n(n+1)}{2}",
    explanation: "Formule fondamentale à connaître par cœur"
  },
  {
    id: 2,
    category: "Sommes de base", 
    front: "Somme des n premiers carrés",
    back: "\\sum_{i=1}^n i^2 = \\frac{n(n+1)(2n+1)}{6}",
    explanation: "Utile pour de nombreux calculs"
  },
  {
    id: 3,
    category: "Sommes de base",
    front: "Somme des n premiers cubes",
    back: "\\sum_{i=1}^n i^3 = \\left(\\frac{n(n+1)}{2}\\right)^2",
    explanation: "Remarquer que c'est le carré de la somme des entiers !"
  },
  {
    id: 4,
    category: "Sommes géométriques",
    front: "Somme géométrique de base",
    back: "\\sum_{i=0}^n q^i = \\begin{cases} n+1 & \\text{si } q=1 \\\\ \\frac{1-q^{n+1}}{1-q} & \\text{si } q \\neq 1 \\end{cases}",
    explanation: "Distinguer les cas q=1 et q≠1"
  },
  {
    id: 5,
    category: "Sommes géométriques",
    front: "Somme géométrique décalée",
    back: "\\sum_{i=m}^n q^i = q^m \\cdot \\frac{1-q^{n-m+1}}{1-q}",
    explanation: "Factoriser q^m pour se ramener au cas de base"
  },
  {
    id: 6,
    category: "Propriétés",
    front: "Linéarité des sommes",
    back: "\\sum_{i=1}^n (\\lambda x_i + \\mu y_i) = \\lambda \\sum_{i=1}^n x_i + \\mu \\sum_{i=1}^n y_i",
    explanation: "Propriété fondamentale pour décomposer les calculs"
  },
  {
    id: 7,
    category: "Changement d'indice",
    front: "Translation d'indice",
    back: "\\sum_{i=m}^n x_{i+r} = \\sum_{j=m+r}^{n+r} x_j \\quad \\text{avec } j = i + r",
    explanation: "Décaler les bornes de la même quantité r"
  },
  {
    id: 8,
    category: "Changement d'indice",
    front: "Inversion d'indice",
    back: "\\sum_{i=m}^n x_{r-i} = \\sum_{\\ell=r-n}^{r-m} x_\\ell \\quad \\text{avec } \\ell = r-i",
    explanation: "Attention : l'ordre des bornes s'inverse !"
  },
  {
    id: 9,
    category: "Sommes télescopiques",
    front: "Principe télescopique",
    back: "\\sum_{i=0}^n (u_{i+1} - u_i) = u_{n+1} - u_0",
    explanation: "La plupart des termes s'annulent, il ne reste que le premier et le dernier"
  },
  {
    id: 10,
    category: "Sommes doubles",
    front: "Indices indépendants",
    back: "\\sum_{i=1}^n \\sum_{j=1}^m x_{i,j} = \\sum_{j=1}^m \\sum_{i=1}^n x_{i,j}",
    explanation: "On peut échanger l'ordre des sommations"
  },
  {
    id: 11,
    category: "Sommes doubles",
    front: "Indices dépendants",
    back: "\\sum_{1 \\leq i \\leq j \\leq n} x_{i,j} = \\sum_{j=1}^n \\sum_{i=1}^j x_{i,j}",
    explanation: "Attention aux bornes quand les indices dépendent l'un de l'autre"
  },
  {
    id: 12,
    category: "Relation somme/produit",
    front: "Carré d'une somme",
    back: "\\left( \\sum_{i=1}^n x_i \\right)^2 = \\sum_{i=1}^n x_i^2 + 2 \\sum_{1 \\leq i < j \\leq n} x_i x_j",
    explanation: "Développement avec les termes carrés et les termes croisés"
  },
  {
    id: 13,
    category: "Produits",
    front: "Factorielle",
    back: "n! = \\prod_{i=1}^n i \\quad \\text{et} \\quad 0! = 1",
    explanation: "Produit des n premiers entiers, avec la convention 0! = 1"
  },
  {
    id: 14,
    category: "Produits",
    front: "Produit constant",
    back: "\\prod_{i=1}^n \\lambda = \\lambda^n",
    explanation: "n facteurs identiques donnent une puissance"
  },
  {
    id: 15,
    category: "Produits",
    front: "Distributivité du produit",
    back: "\\prod_{i=1}^n (x_i y_i) = \\left(\\prod_{i=1}^n x_i\\right)\\left(\\prod_{i=1}^n y_i\\right)",
    explanation: "Le produit des produits égale le produit des facteurs"
  },
  {
    id: 16,
    category: "Produits",
    front: "Produit télescopique",
    back: "\\prod_{i=0}^n \\frac{z_i}{z_{i+1}} = \\frac{z_0}{z_{n+1}}",
    explanation: "Les termes intermédiaires se simplifient"
  },
  {
    id: 17,
    category: "Coefficients binomiaux",
    front: "Définition",
    back: "\\binom{n}{p} = \\frac{n!}{p!(n-p)!} \\quad \\text{pour } 0 \\leq p \\leq n",
    explanation: "Nombre de façons de choisir p objets parmi n"
  },
  {
    id: 18,
    category: "Coefficients binomiaux",
    front: "Exemples pratiques",
    back: "\\binom{n}{2} = \\frac{n(n-1)}{2} \\quad \\binom{n}{3} = \\frac{n(n-1)(n-2)}{6}",
    explanation: "Formules simplifiées pour les cas fréquents"
  },
  {
    id: 19,
    category: "Coefficients binomiaux",
    front: "Symétrie",
    back: "\\binom{n}{p} = \\binom{n}{n-p}",
    explanation: "Choisir p objets = choisir lesquels ne pas prendre"
  },
  {
    id: 20,
    category: "Coefficients binomiaux",
    front: "Relation de Pascal",
    back: "\\binom{n}{p} = \\binom{n-1}{p-1} + \\binom{n-1}{p}",
    explanation: "Base du triangle de Pascal"
  },
  {
    id: 21,
    category: "Coefficients binomiaux",
    front: "Propriété multiplicative",
    back: "p\\binom{n}{p} = n \\binom{n-1}{p-1}",
    explanation: "Utile pour simplifier certaines sommes"
  },
  {
    id: 22,
    category: "Binôme de Newton",
    front: "Formule du binôme",
    back: "(a+b)^n = \\sum_{k=0}^n \\binom{n}{k} a^k b^{n-k}",
    explanation: "Développement d'une puissance d'une somme"
  },
  {
    id: 23,
    category: "Binôme de Newton",
    front: "Cas particulier : a=b=1",
    back: "\\sum_{k=0}^n \\binom{n}{k} = 2^n",
    explanation: "Somme de tous les coefficients binomiaux"
  },
  {
    id: 24,
    category: "Binôme de Newton",
    front: "Cas particulier : a=1, b=-1",
    back: "\\sum_{k=0}^n (-1)^k \\binom{n}{k} = 0 \\quad \\text{pour } n \\geq 1",
    explanation: "Somme alternée des coefficients binomiaux"
  },
  {
    id: 25,
    category: "Applications",
    front: "Somme pondérée des coefficients",
    back: "\\sum_{k=0}^{n} k \\binom{n}{k} = n \\cdot 2^{n-1}",
    explanation: "Utiliser k\\binom{n}{k} = n\\binom{n-1}{k-1}"
  },
  {
    id: 26,
    category: "Applications", 
    front: "Identité de Vandermonde",
    back: "\\sum_{k=0}^{n} \\binom{n}{k}^2 = \\binom{2n}{n}",
    explanation: "Somme des carrés des coefficients binomiaux"
  },
  {
    id: 27,
    category: "Applications",
    front: "Relation cubes/carrés",
    back: "\\left(\\sum_{k=1}^{n} k\\right)^2 = \\sum_{k=1}^{n} k^3",
    explanation: "Le carré de la somme des entiers égale la somme des cubes"
  },
  {
    id: 28,
    category: "Python - Sommes",
    front: "Calculer une somme avec range()",
    back: "\\text{sum([k for k in range(1, n+1)])} \\text{ ou } \\text{sum(range(1, n+1))}",
    explanation: "range(1, n+1) génère les entiers de 1 à n inclus"
  },
  {
    id: 29,
    category: "Python - Sommes",
    front: "Somme avec une boucle",
    back: "\\text{somme = 0}\\\\\\text{for k in range(1, n+1):}\\\\\\quad\\text{somme += k}",
    explanation: "Méthode classique pour accumuler une somme"
  },
  {
    id: 30,
    category: "Python - Sommes",
    front: "Somme avec condition",
    back: "\\text{sum([k for k in range(1, n+1) if k \\% 2 == 0])}",
    explanation: "Utiliser une condition dans la liste en compréhension"
  },
  {
    id: 31,
    category: "Python - Produits",
    front: "Calculer un produit avec boucle",
    back: "\\text{produit = 1}\\\\\\text{for k in range(1, n+1):}\\\\\\quad\\text{produit *= k}",
    explanation: "Initialiser à 1 et multiplier successivement"
  },
  {
    id: 32,
    category: "Python - Produits",
    front: "Calculer un produit avec NumPy",
    back: "\\text{import numpy as np}\\\\\\text{np.prod([k for k in range(1, n+1)])}",
    explanation: "NumPy fournit une fonction prod() efficace"
  },
  {
    id: 33,
    category: "Python - Factorielles",
    front: "Calculer n! avec math",
    back: "\\text{from math import factorial}\\\\\\text{factorial(n)}",
    explanation: "La fonction factorial() de math est optimisée"
  },
  {
    id: 34,
    category: "Python - Factorielles",
    front: "Simplifier n! / (n-k)!",
    back: "\\text{from math import perm}\\\\\\text{perm(n, k)} = \\frac{n!}{(n-k)!}",
    explanation: "perm() calcule les arrangements sans calculer les factorielles complètes"
  },
  {
    id: 35,
    category: "Python - Coefficients binomiaux",
    front: "Calculer C(n,k) avec math",
    back: "\\text{from math import comb}\\\\\\text{comb(n, k)} = \\binom{n}{k}",
    explanation: "comb() est disponible depuis Python 3.8"
  },
  {
    id: 36,
    category: "Python - Coefficients binomiaux",
    front: "Calculer C(n,k) avec factorielles",
    back: "\\text{from math import factorial}\\\\\\frac{\\text{factorial(n)}}{\\text{factorial(k) * factorial(n-k)}}",
    explanation: "Utiliser la définition directe des coefficients binomiaux"
  },
  {
    id: 37,
    category: "Python - Coefficients binomiaux",
    front: "Générer le triangle de Pascal",
    back: "\\text{[[comb(n,k) for k in range(n+1)] for n in range(m)]}",
    explanation: "Double liste en compréhension pour construire le triangle"
  },
  {
    id: 38,
    category: "Python - Binôme de Newton",
    front: "Développer (a+b)^n",
    back: "\\text{sum([comb(n,k) * a**k * b**(n-k) for k in range(n+1)])}",
    explanation: "Application directe de la formule du binôme"
  },
  {
    id: 39,
    category: "Python - Binôme de Newton",
    front: "Vérifier sum(C(n,k)) = 2^n",
    back: "\\text{sum([comb(n,k) for k in range(n+1)]) == 2**n}",
    explanation: "Test de la propriété fondamentale"
  },
  {
    id: 40,
    category: "Python - Puissances",
    front: "Calculer une puissance",
    back: "\\text{x**n ou pow(x, n)}",
    explanation: "** est l'opérateur de puissance en Python"
  },
  {
    id: 41,
    category: "Python - Séquences",
    front: "Générer une séquence arithmétique",
    back: "\\text{[a + k*r for k in range(n)]}",
    explanation: "a = premier terme, r = raison, n = nombre de termes"
  },
  {
    id: 42,
    category: "Python - Séquences",
    front: "Générer une séquence géométrique",
    back: "\\text{[a * q**k for k in range(n)]}",
    explanation: "a = premier terme, q = raison, n = nombre de termes"
  },
  {
    id: 43,
    category: "Python - Affichage",
    front: "Afficher avec format",
    back: "\\text{print(f\\\"Résultat : \\{variable\\}\\\")}",
    explanation: "f-string permet d'insérer des variables dans les chaînes"
  },
  {
    id: 44,
    category: "Python - Affichage",
    front: "Afficher avec précision",
    back: "\\text{print(f\\\"Valeur : \\{x:.4f\\}\\\")}",
    explanation: ".4f affiche 4 décimales pour un nombre flottant"
  },
  {
    id: 45,
    category: "Python - Listes",
    front: "Créer une liste avec compréhension",
    back: "\\text{[expression for variable in iterable if condition]}",
    explanation: "Syntaxe compacte pour créer des listes"
  },
  {
    id: 46,
    category: "Python - Listes",
    front: "Appliquer une fonction à tous les éléments",
    back: "\\text{[f(x) for x in liste]} \\text{ ou } \\text{list(map(f, liste))}",
    explanation: "map() applique une fonction à chaque élément"
  }
];

const categories = [...new Set(flashcards.map(card => card.category))];

const OteriaRecurrenceRecursiviteFlashcardsPage = () => {
  const [currentCard, setCurrentCard] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [studyMode, setStudyMode] = useState("sequential"); // sequential, random
  const [shuffledCards, setShuffledCards] = useState(flashcards);

  const filteredCards = selectedCategory === "all" 
    ? shuffledCards
    : shuffledCards.filter(card => card.category === selectedCategory);

  useEffect(() => {
    if (studyMode === "random") {
      const shuffled = [...flashcards].sort(() => Math.random() - 0.5);
      setShuffledCards(shuffled);
    } else {
      setShuffledCards(flashcards);
    }
    setCurrentCard(0);
    setIsFlipped(false);
  }, [studyMode]);

  useEffect(() => {
    setCurrentCard(0);
    setIsFlipped(false);
  }, [selectedCategory]);

  // Navigation au clavier
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Empêcher le comportement par défaut pour les flèches
      if (['ArrowLeft', 'ArrowRight', ' ', 'Enter'].includes(e.key)) {
        e.preventDefault();
      }

      switch (e.key) {
        case 'ArrowLeft':
          prevCard();
          break;
        case 'ArrowRight':
          nextCard();
          break;
        case ' ':
        case 'Enter':
          flipCard();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentCard, isFlipped, filteredCards.length]);

  const nextCard = () => {
    if (currentCard < filteredCards.length - 1) {
      setCurrentCard(currentCard + 1);
      setIsFlipped(false);
    }
  };

  const prevCard = () => {
    if (currentCard > 0) {
      setCurrentCard(currentCard - 1);
      setIsFlipped(false);
    }
  };

  const flipCard = () => {
    setIsFlipped(!isFlipped);
  };

  const resetCards = () => {
    setCurrentCard(0);
    setIsFlipped(false);
    if (studyMode === "random") {
      const shuffled = [...flashcards].sort(() => Math.random() - 0.5);
      setShuffledCards(shuffled);
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Fil d'Ariane */}
      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-border/40">
        <div className="container mx-auto px-4 py-2">
          <div className="flex items-center text-xs text-teal-600">
            <Link to="/" className="flex items-center gap-1 hover:text-teal-700 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <Link to="/articles" className="hover:text-teal-700 transition-colors">
              Niveau
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <Link to="/articles/oteria-cyber-school" className="hover:text-teal-700 transition-colors">
              OTERIA Cyber School
            </Link>
            <ChevronRight className="h-3 w-3 text-teal-400 mx-1" />
            <span className="text-teal-600 font-medium">Chapitre 3 - Flashcards</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <Calculator className="h-8 w-8 text-teal-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-teal-900">Chapitre 3 : Flashcards - Sommes, produits et coefficients binomiaux</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-4">
            Mémorisez les formules essentielles avec ces cartes interactives
          </p>
          <div className="text-sm text-gray-600 mb-6 bg-blue-50 p-3 rounded-lg max-w-2xl mx-auto border border-blue-200">
            <span className="font-medium">Navigation au clavier :</span> ← Précédent | → Suivant | Espace/Entrée pour retourner la carte
          </div>

          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/formation/oteria/recurrence-recursivite-cours">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <BookOpen className="h-4 w-4" />
                Cours
              </button>
            </Link>
            <Link to="/formation/oteria/recurrence-recursivite-exercices">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <Target className="h-4 w-4" />
                Exercices
              </button>
            </Link>
            <Link to="/formation/oteria/recurrence-recursivite-qcm">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <Zap className="h-4 w-4" />
                QCM
              </button>
            </Link>
            <Link to="/articles/oteria-cyber-school">
              <button className="inline-flex items-center gap-2 bg-teal-600 text-white px-4 py-2 rounded-lg hover:bg-teal-700 transition-colors">
                <ArrowLeft className="h-4 w-4" />
                Retour au programme
              </button>
            </Link>
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Contrôles */}
          <div className="bg-white rounded-xl shadow-lg p-6 mb-8 border border-blue-200">
            <div className="grid md:grid-cols-3 gap-4">
              {/* Sélection de catégorie */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Catégorie</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                >
                  <option value="all">Toutes les catégories ({flashcards.length} cartes)</option>
                  {categories.map(category => (
                    <option key={category} value={category}>
                      {category} ({flashcards.filter(card => card.category === category).length} cartes)
                    </option>
                  ))}
                </select>
              </div>

              {/* Mode d'étude */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Mode d'étude</label>
                <select
                  value={studyMode}
                  onChange={(e) => setStudyMode(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                >
                  <option value="sequential">Séquentiel</option>
                  <option value="random">Aléatoire</option>
                </select>
              </div>

              {/* Boutons d'action */}
              <div className="flex items-end gap-2">
                <Button onClick={resetCards} variant="outline" className="flex-1">
                  <RotateCcw className="h-4 w-4 mr-2" />
                  Recommencer
                </Button>
              </div>
            </div>
          </div>

          {/* Indicateur de progression */}
          <div className="bg-white rounded-xl shadow-lg p-4 mb-8 border border-blue-200">
            <div className="flex items-center justify-between text-sm text-gray-600 mb-2">
              <span>Carte {currentCard + 1} sur {filteredCards.length}</span>
              <span>{Math.round(((currentCard + 1) / filteredCards.length) * 100)}% complété</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-teal-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentCard + 1) / filteredCards.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Carte de flashcard */}
          {filteredCards.length > 0 && (
            <div className="perspective-1000 mb-8">
              <Card 
                className="relative w-full h-96 cursor-pointer transform-style-preserve-3d transition-transform duration-700"
                style={{
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
                onClick={flipCard}
              >
                {/* Face avant */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <CardContent className="h-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-teal-50 to-blue-50 border-2 border-teal-200">
                    <div className="mb-4">
                      <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                        {filteredCards[currentCard].category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-bold text-center text-teal-900 mb-4">
                      {filteredCards[currentCard].front}
                    </h3>
                    <p className="text-center text-gray-600 text-sm">Cliquez pour voir la réponse</p>
                  </CardContent>
                </div>

                {/* Face arrière */}
                <div 
                  className="absolute inset-0 w-full h-full backface-hidden"
                  style={{ transform: 'rotateY(180deg)' }}
                >
                  <CardContent className="h-full flex flex-col justify-center items-center p-8 bg-gradient-to-br from-blue-50 to-teal-50 border-2 border-blue-200">
                    <div className="mb-4">
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        Formule
                      </span>
                    </div>
                    <div className="text-center mb-4">
                      <LatexRenderer latex={filteredCards[currentCard].back} block />
                    </div>
                    <p className="text-center text-gray-600 text-sm italic">
                      {filteredCards[currentCard].explanation}
                    </p>
                  </CardContent>
                </div>
              </Card>
            </div>
          )}

          {/* Contrôles de navigation */}
          <div className="flex items-center justify-between bg-white rounded-xl shadow-lg p-6 border border-blue-200">
            <Button
              onClick={prevCard}
              disabled={currentCard === 0}
              variant="outline"
              className="flex items-center gap-2"
            >
              <ChevronLeft className="h-4 w-4" />
              Précédent
            </Button>

            <div className="flex items-center gap-4">
              <Button
                onClick={flipCard}
                variant="default"
                className="bg-teal-600 hover:bg-teal-700"
              >
                {isFlipped ? 'Voir la question' : 'Voir la réponse'}
              </Button>
            </div>

            <Button
              onClick={nextCard}
              disabled={currentCard === filteredCards.length - 1}
              variant="outline"
              className="flex items-center gap-2"
            >
              Suivant
              <ChevronRightIcon className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex justify-between items-center bg-blue-50 p-6 rounded-lg mt-8 max-w-4xl mx-auto">
          <Link to="/formation/oteria/recurrence-recursivite-exercices">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              ← Exercices
            </button>
          </Link>
          <div className="flex gap-3">
            <Link to="/formation/oteria/recurrence-recursivite-cours">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <BookOpen className="h-4 w-4" />
                Cours
              </button>
            </Link>
            <Link to="/formation/oteria/recurrence-recursivite-qcm">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <Zap className="h-4 w-4" />
                QCM
              </button>
            </Link>
          </div>
          <div className="text-blue-600 font-medium">QCM →</div>
        </div>
      </div>

      <style>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}</style>
    </div>
  );
};

export default OteriaRecurrenceRecursiviteFlashcardsPage;
