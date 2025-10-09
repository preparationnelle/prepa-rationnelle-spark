import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Home, ChevronRight, ArrowLeft, BookOpen, Target, Zap, Calculator, RotateCcw, ChevronLeft, ChevronRight as ChevronRightIcon } from 'lucide-react';
import { LatexRenderer } from '@/components/LatexRenderer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const flashcards = [
  {
    id: 1,
    category: "Définition des polynômes",
    front: "Qu'est-ce qu'un polynôme ?",
    back: "\\text{Un polynôme est une fonction définie sur } \\mathbb{R} \\text{ par une expression de la forme } P(x) = a_n x^n + a_{n-1} x^{n-1} + \\dots + a_1 x + a_0 \\text{ où les } a_i \\text{ sont des réels.}",
    explanation: "Expression algébrique finie avec coefficients réels et puissances entières positives"
  },
  {
    id: 2,
    category: "Définition des polynômes",
    front: "Définition du degré d'un polynôme",
    back: "\\text{Le degré d'un polynôme } P \\text{ est le plus grand entier } n \\text{ tel que le coefficient } a_n \\neq 0. \\text{ Noté } \\deg(P) = n.",
    explanation: "Le degré correspond à la puissance la plus élevée dont le coefficient n'est pas nul"
  },
  {
    id: 3,
    category: "Définition des polynômes",
    front: "Polynôme constant",
    back: "\\text{Un polynôme constant } P(x) = c \\text{ a pour degré } 0 \\text{ si } c \\neq 0, \\text{ et degré } -\\infty \\text{ si } c = 0.",
    explanation: "Convention spéciale pour le polynôme nul qui n'a pas de degré défini"
  },
  {
    id: 4,
    category: "Définition des polynômes",
    front: "Polynôme nul",
    back: "\\text{Le polynôme nul est défini par } P(x) = 0 \\text{ pour tout } x \\in \\mathbb{R}. \\text{ Il n'a pas de degré (degré } -\\infty\\text{).}",
    explanation: "Tous les coefficients sont nuls, c'est l'élément neutre pour l'addition"
  },
  {
    id: 5,
    category: "Opérations sur les polynômes",
    front: "Somme de deux polynômes",
    back: "\\text{Si } P = \\sum_{k=0}^n a_k x^k \\text{ et } Q = \\sum_{k=0}^m b_k x^k, \\text{ alors } P+Q = \\sum_{k=0}^{\\max(n,m)} (a_k + b_k) x^k",
    explanation: "Addition terme à terme des coefficients de mêmes degrés"
  },
  {
    id: 6,
    category: "Opérations sur les polynômes",
    front: "Produit de deux polynômes",
    back: "\\text{Si } P \\text{ et } Q \\text{ sont de degrés } n \\text{ et } m, \\text{ alors } \\deg(P\\times Q) = n + m, \\text{ et le coefficient de } x^k \\text{ est } \\sum_{i+j=k} a_i b_j",
    explanation: "Le degré du produit est la somme des degrés, coefficient de x^k obtenu par convolution"
  },
  {
    id: 7,
    category: "Racines des polynômes",
    front: "Définition d'une racine",
    back: "\\text{Un nombre } r \\text{ est racine de } P \\text{ si } P(r) = 0. \\text{ On dit aussi que } r \\text{ est zéro du polynôme.}",
    explanation: "Valeur où le polynôme s'annule"
  },
  {
    id: 8,
    category: "Racines des polynômes",
    front: "Multiplicité d'une racine",
    back: "\\text{Si } (x - r)^k \\text{ divise } P(x) \\text{ mais pas } (x - r)^{k+1}, \\text{ alors } r \\text{ est racine de multiplicité } k.",
    explanation: "Nombre de fois qu'un facteur linéaire apparaît dans la décomposition"
  },
  {
    id: 9,
    category: "Racines des polynômes",
    front: "Théorème de d'Alembert-Gauss",
    back: "\\text{Tout polynôme de degré } n \\geq 1 \\text{ admet au moins une racine dans } \\mathbb{C}.",
    explanation: "Fondement algébrique : les polynômes complexes ont toujours des racines"
  },
  {
    id: 10,
    category: "Division euclidienne",
    front: "Division euclidienne de polynômes",
    back: "\\text{Pour } P \\text{ et } D \\neq 0, \\text{ il existe uniques } Q \\text{ et } R \\text{ tels que } P = D\\times Q + R \\text{ avec } \\deg(R) < \\deg(D) \\text{ ou } R = 0.",
    explanation: "Analogue de la division euclidienne des entiers"
  },
  {
    id: 11,
    category: "Division euclidienne",
    front: "Condition sur le reste",
    back: "\\text{Dans } P = D\\times Q + R, \\text{ le reste } R \\text{ vérifie soit } R = 0, \\text{ soit } \\deg(R) < \\deg(D).",
    explanation: "Le degré du reste est strictement inférieur à celui du diviseur"
  },
  {
    id: 12,
    category: "Division euclidienne",
    front: "Algorithme de division polynomiale",
    back: "\\begin{array}{l} \\text{1. Aligner les termes de plus haut degré} \\\\[0.5em] \\text{2. Diviser le terme dominant de } P \\text{ par celui de } D \\\\[0.5em] \\text{3. Multiplier ce quotient par } D \\text{ et soustraire de } P \\\\[0.5em] \\text{4. Répéter avec le reste obtenu} \\end{array}",
    explanation: "Processus itératif similaire à la division des entiers"
  },
  {
    id: 13,
    category: "Dichotomie - Principe",
    front: "Principe de la dichotomie",
    back: "\\text{Méthode pour trouver une solution en divisant successivement l'intervalle de recherche en deux.}",
    explanation: "Stratégie « diviser pour régner » qui réduit l'espace de recherche par deux à chaque étape"
  },
  {
    id: 14,
    category: "Dichotomie - Principe",
    front: "Condition d'application de la dichotomie",
    back: "f \\text{ continue sur } [a,b], \\text{ } f(a) \\text{ et } f(b) \\text{ de signes opposés, alors il existe } c \\in ]a,b[ \\text{ tel que } f(c) = 0.",
    explanation: "Théorème des valeurs intermédiaires garantit l'existence d'une racine"
  },
  {
    id: 15,
    category: "Algorithme de dichotomie",
    front: "Initialisation de la dichotomie",
    back: "\\begin{array}{l} \\text{a}_0 = a, \\quad b_0 = b \\\\ \\text{c}_0 = \\frac{a_0 + b_0}{2} \\\\ \\epsilon \\text{ : précision souhaitée} \\end{array}",
    explanation: "Point de départ avec l'intervalle initial et le milieu"
  },
  {
    id: 16,
    category: "Algorithme de dichotomie",
    front: "Étape d'itération",
    back: "\\begin{cases} \\text{Si } f(c_n) = 0 & \\text{alors } c_n \\text{ est la racine} \\\\[0.5em] \\text{Si } f(a_n) \\times f(c_n) < 0 & \\text{alors } a_{n+1} = a_n, \\quad b_{n+1} = c_n \\\\[0.5em] \\text{Sinon} & \\text{alors } a_{n+1} = c_n, \\quad b_{n+1} = b_n \\end{cases}",
    explanation: "Le nouveau intervalle contient toujours la racine"
  },
  {
    id: 17,
    category: "Algorithme de dichotomie",
    front: "Critère d'arrêt",
    back: "\\text{Arrêter quand } |b_n - a_n| < \\epsilon \\text{ ou } |f(c_n)| < \\epsilon",
    explanation: "La précision souhaitée est atteinte"
  },
  {
    id: 18,
    category: "Algorithme de dichotomie",
    front: "Convergence de la dichotomie",
    back: "\\text{L'erreur est divisée par 2 à chaque itération : } |b_n - a_n| = \\frac{b-a}{2^n}",
    explanation: "Après n itérations, la précision est de (b-a)/2^n"
  },
  {
    id: 19,
    category: "Algorithme de dichotomie",
    front: "Avantages de la dichotomie",
    back: "\\begin{array}{l} \\text{• Convergence garantie} \\\\[0.3em] \\text{• Simple à implémenter} \\\\[0.3em] \\text{• Robuste (pas de problème de dérivée)} \\\\[0.3em] \\text{• Précision contrôlée} \\end{array}",
    explanation: "Méthode fiable et sans condition forte sur la fonction"
  },
  {
    id: 20,
    category: "Algorithme de dichotomie",
    front: "Limites de la dichotomie",
    back: "\\begin{array}{l} \\text{• Lente convergence (linéaire)} \\\\[0.3em] \\text{• Nécessite la continuité et le changement de signe} \\\\[0.3em] \\text{• Ne trouve qu'une racine à la fois} \\end{array}",
    explanation: "Moins efficace que les méthodes de Newton pour les fonctions dérivables"
  },
  {
    id: 21,
    category: "Python - Dichotomie",
    front: "Signature de la fonction dichotomie en Python",
    back: "\\text{def dichotomie(f, a, b, precision=1e-6):}",
    explanation: "Fonction qui prend en paramètres : la fonction f, l'intervalle [a,b], et la précision souhaitée"
  },
  {
    id: 22,
    category: "Python - Dichotomie",
    front: "Vérification du prérequis en Python",
    back: "\\text{assert f(a)*f(b) < 0, \"f(a) et f(b) doivent avoir des signes opposés\"}",
    explanation: "Assert vérifie que f(a) et f(b) sont de signes opposés avant de commencer l'algorithme"
  },
  {
    id: 23,
    category: "Python - Dichotomie",
    front: "Condition de la boucle while",
    back: "\\text{while b - a > precision:}",
    explanation: "On continue tant que l'intervalle est plus large que la précision souhaitée"
  },
  {
    id: 24,
    category: "Python - Dichotomie",
    front: "Calcul du milieu de l'intervalle",
    back: "\\text{c = (a + b) / 2}",
    explanation: "Le point milieu c est la moyenne arithmétique de a et b"
  },
  {
    id: 25,
    category: "Python - Dichotomie",
    front: "Test pour choisir le nouvel intervalle",
    back: "\\text{if f(a) * f(c) <= 0: b = c else: a = c}",
    explanation: "Si f(a) et f(c) ont des signes opposés, la racine est dans [a,c], sinon dans [c,b]"
  },
  {
    id: 26,
    category: "Python - Dichotomie",
    front: "Valeur retournée par la fonction",
    back: "\\text{return (a + b) / 2}",
    explanation: "On retourne le milieu du dernier intervalle comme approximation de la racine"
  },
  {
    id: 27,
    category: "Python - Dichotomie",
    front: "Exemple d'appel de la fonction",
    back: "\\text{r = dichotomie(f, 1, 2, 1e-6)}",
    explanation: "Cherche une racine de f dans [1,2] avec une précision de 10^(-6)"
  },
  {
    id: 28,
    category: "Python - Méthode de Babylone",
    front: "Formule récurrente de la méthode de Babylone",
    back: "u_{n+1} = \\frac{u_n + a/u_n}{2} \\text{ avec } u_0 = 1",
    explanation: "Suite qui converge vers √a en utilisant la moyenne de u_n et a/u_n"
  },
  {
    id: 29,
    category: "Python - Méthode de Babylone",
    front: "Initialisation de la méthode de Babylone",
    back: "\\text{u = 1.0; x = 0.5 * (u + a/u)}",
    explanation: "On démarre avec u=1 et on calcule la première itération x"
  },
  {
    id: 30,
    category: "Python - Méthode de Babylone",
    front: "Condition d'arrêt de la méthode de Babylone",
    back: "\\text{while abs(x - u) > eps:}",
    explanation: "On arrête quand la différence entre deux itérations successives est inférieure à epsilon"
  },
  {
    id: 31,
    category: "Python - Méthode de Babylone",
    front: "Itération de la méthode de Babylone",
    back: "\\text{u = x; x = 0.5 * (u + a/u)}",
    explanation: "À chaque itération, on met à jour u puis on calcule la nouvelle valeur x"
  },
  {
    id: 32,
    category: "Python - NumPy",
    front: "Fonction NumPy pour créer un intervalle",
    back: "\\text{np.linspace(a, b, n)}",
    explanation: "Crée n points uniformément répartis entre a et b"
  },
  {
    id: 33,
    category: "Python - NumPy",
    front: "Fonction NumPy pour la valeur absolue",
    back: "\\text{np.abs(x)}",
    explanation: "Calcule |x| pour un nombre ou un tableau"
  },
  {
    id: 34,
    category: "Python - NumPy",
    front: "Fonction NumPy pour la racine carrée",
    back: "\\text{np.sqrt(x)}",
    explanation: "Calcule √x, peut être utilisé pour vérifier la méthode de Babylone"
  },
  {
    id: 35,
    category: "Théorème des valeurs intermédiaires",
    front: "Énoncé du TVI",
    back: "\\text{Si } f \\text{ est continue sur } [a,b] \\text{ et } f(a) \\cdot f(b) < 0, \\text{ alors } \\exists c \\in ]a,b[ : f(c) = 0",
    explanation: "Garantit l'existence d'au moins une racine dans l'intervalle"
  },
  {
    id: 36,
    category: "Théorème des valeurs intermédiaires",
    front: "Hypothèse de continuité",
    back: "\\text{La fonction } f \\text{ doit être continue sur } [a,b]",
    explanation: "Sans continuité, le TVI ne s'applique pas et la dichotomie peut échouer"
  },
  {
    id: 37,
    category: "Théorème des valeurs intermédiaires",
    front: "Hypothèse de changement de signe",
    back: "f(a) \\text{ et } f(b) \\text{ doivent être de signes opposés : } f(a) \\cdot f(b) < 0",
    explanation: "Condition nécessaire pour garantir qu'une racine existe dans l'intervalle"
  },
  {
    id: 38,
    category: "Dichotomie - Applications",
    front: "Cas d'utilisation de la dichotomie",
    back: "\\begin{array}{l} \\text{• Résolution d'équations transcendantes} \\\\[0.3em] \\text{• Recherche de racines de polynômes} \\\\[0.3em] \\text{• Problèmes d'optimisation} \\\\[0.3em] \\text{• Calculs numériques en général} \\end{array}",
    explanation: "Méthode universelle applicable à tout type de fonction continue"
  },
  {
    id: 39,
    category: "Dichotomie - Applications",
    front: "Nombre d'itérations nécessaires",
    back: "n = \\lceil \\log_2\\left(\\frac{b-a}{\\epsilon}\\right) \\rceil",
    explanation: "Pour atteindre une précision ε dans l'intervalle [a,b], il faut environ log₂((b-a)/ε) itérations"
  },
  {
    id: 40,
    category: "Dichotomie - Applications",
    front: "Exemple de calcul du nombre d'itérations",
    back: "\\text{Pour } [a,b] = [1,2] \\text{ et } \\epsilon = 10^{-6} : n \\approx \\log_2(10^6) \\approx 20 \\text{ itérations}",
    explanation: "Avec un intervalle de longueur 1 et une précision de 10^(-6), environ 20 itérations suffisent"
  }
];

const categories = [...new Set(flashcards.map(card => card.category))];

const OteriaPolynomesDichotomieFlashcardsPage = () => {
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
          <div className="flex items-center text-xs text-blue-600">
            <Link to="/" className="flex items-center gap-1 hover:text-blue-700 transition-colors">
              <Home className="h-3 w-3" />
              <span>Accueil</span>
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <Link to="/articles" className="hover:text-blue-700 transition-colors">
              Niveau
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <Link to="/articles/oteria-cyber-school" className="hover:text-blue-700 transition-colors">
              OTERIA Cyber School
            </Link>
            <ChevronRight className="h-3 w-3 text-blue-400 mx-1" />
            <span className="text-blue-600 font-medium">Séance 6 - Flashcards</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
              <Calculator className="h-8 w-8 text-blue-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-blue-900">Séance 6 : Flashcards - Polynômes & dichotomie</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-4">
            Degré, racines, division euclidienne, Algorithme de la dichotomie pour f(x)=0
          </p>
          <div className="text-sm text-gray-600 mb-6 bg-blue-50 p-3 rounded-lg max-w-2xl mx-auto border border-blue-200">
            <span className="font-medium">Navigation au clavier :</span> ← Précédent | → Suivant | Espace/Entrée pour retourner la carte
          </div>

          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/formation/oteria/polynomes-approximation-cours">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <BookOpen className="h-4 w-4" />
                Cours
              </button>
            </Link>
            <Link to="/formation/oteria/polynomes-exercices">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <Target className="h-4 w-4" />
                Exercices
              </button>
            </Link>
            <Link to="/articles/oteria-cyber-school">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
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
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                  className="w-full p-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
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
                className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                style={{ width: `${((currentCard + 1) / filteredCards.length) * 100}%` }}
              ></div>
            </div>
          </div>

          {/* Carte de flashcard */}
          {filteredCards.length > 0 && (
            <Card className="shadow-2xl mb-8">
              <CardContent className="p-8">
                <div className="mb-4">
                  <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                    {filteredCards[currentCard].category}
                  </span>
                </div>
                
                <div className="min-h-[300px] flex flex-col justify-center">
                  <div className="text-center mb-8">
                    <h3 className="text-xl font-semibold text-blue-900 mb-4">Question</h3>
                    <p className="text-lg text-blue-800">{filteredCards[currentCard].front}</p>
                  </div>

                  {isFlipped && (
                    <div className="border-t-2 border-green-200 pt-6 mt-6 animate-in fade-in duration-300">
                      <h3 className="text-xl font-semibold text-green-900 mb-4 text-center">Réponse</h3>
                      <div className="text-center mb-4">
                        <LatexRenderer latex={filteredCards[currentCard].back} block />
                      </div>
                      <p className="text-center text-gray-600 text-sm italic leading-relaxed mt-4">
                        {filteredCards[currentCard].explanation}
                      </p>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
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
                className="bg-blue-600 hover:bg-blue-700"
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
          <Link to="/formation/oteria/polynomes-exercices">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              ← Exercices
            </button>
          </Link>
          <div className="flex gap-3">
            <Link to="/formation/oteria/polynomes-approximation-cours">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <BookOpen className="h-4 w-4" />
                Cours
              </button>
            </Link>
            <Link to="/articles/oteria-cyber-school">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <ArrowLeft className="h-4 w-4" />
                Retour au programme
              </button>
            </Link>
          </div>
          <Link to="/formation/oteria/fonctions-variable-reelle-cours">
            <div className="text-blue-600 hover:text-blue-700 font-medium">Séance suivante →</div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OteriaPolynomesDichotomieFlashcardsPage;
