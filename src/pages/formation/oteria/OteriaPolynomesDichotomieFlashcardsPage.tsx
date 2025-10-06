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
    back: "Un polynôme est une fonction définie sur \\mathbb{R} par une expression de la forme P(x) = a_n x^n + a_{n-1} x^{n-1} + \\dots + a_1 x + a_0 où les a_i sont des réels.",
    explanation: "Expression algébrique finie avec coefficients réels et puissances entières positives"
  },
  {
    id: 2,
    category: "Définition des polynômes",
    front: "Définition du degré d'un polynôme",
    back: "Le degré d'un polynôme P est le plus grand entier n tel que le coefficient a_n ≠ 0. Noté deg(P) = n.",
    explanation: "Le degré correspond à la puissance la plus élevée dont le coefficient n'est pas nul"
  },
  {
    id: 3,
    category: "Définition des polynômes",
    front: "Polynôme constant",
    back: "Un polynôme constant P(x) = c a pour degré 0 si c ≠ 0, et degré -∞ si c = 0.",
    explanation: "Convention spéciale pour le polynôme nul qui n'a pas de degré défini"
  },
  {
    id: 4,
    category: "Définition des polynômes",
    front: "Polynôme nul",
    back: "Le polynôme nul est défini par P(x) = 0 pour tout x réel. Il n'a pas de degré (degré -∞).",
    explanation: "Tous les coefficients sont nuls, c'est l'élément neutre pour l'addition"
  },
  {
    id: 5,
    category: "Opérations sur les polynômes",
    front: "Somme de deux polynômes",
    back: "Si P = \\sum_{k=0}^n a_k x^k et Q = \\sum_{k=0}^m b_k x^k, alors P+Q = \\sum_{k=0}^{\\max(n,m)} (a_k + b_k) x^k",
    explanation: "Addition terme à terme des coefficients de mêmes degrés"
  },
  {
    id: 6,
    category: "Opérations sur les polynômes",
    front: "Produit de deux polynômes",
    back: "Si P et Q sont de degrés n et m, alors deg(P×Q) = n + m, et le coefficient de x^k est \\sum_{i+j=k} a_i b_j",
    explanation: "Le degré du produit est la somme des degrés, coefficient de x^k obtenu par convolution"
  },
  {
    id: 7,
    category: "Racines des polynômes",
    front: "Définition d'une racine",
    back: "Un nombre r est racine de P si P(r) = 0. On dit aussi que r est zéro du polynôme.",
    explanation: "Valeur où le polynôme s'annule"
  },
  {
    id: 8,
    category: "Racines des polynômes",
    front: "Multiplicité d'une racine",
    back: "Si (x - r)^k divise P(x) mais pas (x - r)^{k+1}, alors r est racine de multiplicité k.",
    explanation: "Nombre de fois qu'un facteur linéaire apparaît dans la décomposition"
  },
  {
    id: 9,
    category: "Racines des polynômes",
    front: "Théorème de d'Alembert-Gauss",
    back: "Tout polynôme de degré n ≥ 1 admet au moins une racine dans \\mathbb{C}.",
    explanation: "Fondement algébrique : les polynômes complexes ont toujours des racines"
  },
  {
    id: 10,
    category: "Division euclidienne",
    front: "Division euclidienne de polynômes",
    back: "Pour P et D ≠ 0, il existe uniques Q et R tels que P = D×Q + R avec deg(R) < deg(D) ou R = 0.",
    explanation: "Analogue de la division euclidienne des entiers"
  },
  {
    id: 11,
    category: "Division euclidienne",
    front: "Condition sur le reste",
    back: "Dans P = D×Q + R, le reste R vérifie soit R = 0, soit deg(R) < deg(D).",
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
    back: "Méthode pour trouver une solution en divisant successivement l'intervalle de recherche en deux.",
    explanation: "Stratégie « diviser pour régner » qui réduit l'espace de recherche par deux à chaque étape"
  },
  {
    id: 14,
    category: "Dichotomie - Principe",
    front: "Condition d'application de la dichotomie",
    back: "f continue sur [a,b], f(a) et f(b) de signes opposés, alors il existe c ∈ ]a,b[ tel que f(c) = 0.",
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
            <span className="text-teal-600 font-medium">Séance 6 - Flashcards</span>
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
          <h1 className="text-3xl font-bold mb-4 text-teal-900">Séance 6 : Flashcards - Polynômes & dichotomie</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-4">
            Degré, racines, division euclidienne, Algorithme de la dichotomie pour f(x)=0
          </p>
          <div className="text-sm text-gray-600 mb-6 bg-blue-50 p-3 rounded-lg max-w-2xl mx-auto border border-blue-200">
            <span className="font-medium">Navigation au clavier :</span> ← Précédent | → Suivant | Espace/Entrée pour retourner la carte
          </div>

          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/formation/oteria/polynomes-dichotomie-cours">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <BookOpen className="h-4 w-4" />
                Cours
              </button>
            </Link>
            <Link to="/formation/oteria/polynomes-dichotomie-exercices">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <Target className="h-4 w-4" />
                Exercices
              </button>
            </Link>
            <Link to="/formation/oteria/polynomes-dichotomie-qcm">
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
                className="relative w-full h-[500px] cursor-pointer transform-style-preserve-3d transition-transform duration-700 overflow-hidden"
                style={{
                  transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
                }}
                onClick={flipCard}
              >
                {/* Face avant */}
                <div className="absolute inset-0 w-full h-full backface-hidden">
                  <CardContent className="h-full flex flex-col justify-center items-center p-6 bg-gradient-to-br from-teal-50 to-blue-50 border-2 border-teal-200 overflow-y-auto">
                    <div className="mb-4 flex-shrink-0">
                      <span className="bg-teal-100 text-teal-800 px-3 py-1 rounded-full text-sm font-medium">
                        {filteredCards[currentCard].category}
                      </span>
                    </div>
                    <div className="flex-1 flex flex-col justify-center items-center min-h-0">
                      <h3 className="text-xl font-bold text-center text-teal-900 mb-4 leading-tight">
                        {filteredCards[currentCard].front}
                      </h3>
                      <p className="text-center text-gray-600 text-sm">Cliquez pour voir la réponse</p>
                    </div>
                  </CardContent>
                </div>

                {/* Face arrière */}
                <div
                  className="absolute inset-0 w-full h-full backface-hidden"
                  style={{ transform: 'rotateY(180deg)' }}
                >
                  <CardContent className="h-full flex flex-col justify-center items-center p-6 bg-gradient-to-br from-blue-50 to-teal-50 border-2 border-blue-200 overflow-y-auto">
                    <div className="mb-4 flex-shrink-0" style={{ transform: 'rotateY(180deg)' }}>
                      <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                        Définition/Concept
                      </span>
                    </div>
                    <div className="flex-1 flex flex-col justify-center items-center min-h-0 w-full" style={{ transform: 'rotateY(180deg)' }}>
                      <div className="text-center mb-4 w-full max-w-full">
                        <LatexRenderer latex={filteredCards[currentCard].back} block />
                      </div>
                      <p className="text-center text-gray-600 text-sm italic leading-relaxed">
                        {filteredCards[currentCard].explanation}
                      </p>
                    </div>
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
          <Link to="/formation/oteria/polynomes-dichotomie-exercices">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              ← Exercices
            </button>
          </Link>
          <div className="flex gap-3">
            <Link to="/formation/oteria/polynomes-dichotomie-cours">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <BookOpen className="h-4 w-4" />
                Cours
              </button>
            </Link>
            <Link to="/formation/oteria/polynomes-dichotomie-qcm">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <Zap className="h-4 w-4" />
                QCM
              </button>
            </Link>
          </div>
          <div className="text-blue-600 font-medium">QCM →</div>
        </div>
      </div>

      <style dangerouslySetInnerHTML={{
        __html: `
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
      `}} />
    </div>
  );
};

export default OteriaPolynomesDichotomieFlashcardsPage;
