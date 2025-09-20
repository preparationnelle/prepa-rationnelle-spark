import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Home,
  ChevronRight,
  ArrowLeft,
  BookOpen,
  Target,
  Zap,
  Code,
  RotateCcw,
  Shuffle,
  ChevronLeft as ChevronLeftIcon,
  ChevronRight as ChevronRightIcon,
  Eye,
  EyeOff,
  Lightbulb
} from 'lucide-react';

interface PythonCard {
  id: number;
  front: string;
  back: string;
  category: string;
}

const OteriaPythonBasesFlashcardsPage = () => {
  const pythonData: PythonCard[] = [
    { id: 1, front: "Que signifie 'import random as rd' ?", back: "Importer la librairie random avec l'alias rd pour simplifier l'écriture.", category: "Librairies" },
    { id: 2, front: "Quelle fonction utilise-t-on pour générer un nombre aléatoire entre 1 et 6 ?", back: "rd.randint(1, 6) avec random importé comme rd.", category: "Librairies" },
    { id: 3, front: "Comment créer un tableau NumPy simple [[1,2],[3,4]] ?", back: "M = np.array([[1, 2], [3, 4]]) avec numpy importé comme np.", category: "Librairies" },
    { id: 4, front: "Quelle commande affiche un graphique avec matplotlib ?", back: "plt.show() après avoir défini le graphique.", category: "Librairies" },
    { id: 5, front: "Comment créer un DataFrame pandas simple ?", back: "df = pd.DataFrame({'A':[1,2,3], 'B':[4,5,6]})", category: "Librairies" },

    { id: 6, front: "Quel type Python représente les entiers ?", back: "Le type int (par exemple : a = 17).", category: "Types" },
    { id: 7, front: "Quel type Python représente les nombres à virgule ?", back: "Le type float (par exemple : y = 8.5).", category: "Types" },
    { id: 8, front: "Quel type Python représente les valeurs vrai/faux ?", back: "Le type bool (par exemple : flag = (a == 2)).", category: "Types" },
    { id: 9, front: "Quel type Python représente les chaînes de caractères ?", back: "Le type str (par exemple : nom = 'ESCP').", category: "Types" },
    { id: 10, front: "Comment créer une variable booléenne qui teste si A == C ?", back: "E = (A == C) où A et C sont des variables définies.", category: "Types" },

    { id: 11, front: "Quel opérateur représente l'addition en Python ?", back: "Le symbole + (exemple : 3 + 2 = 5).", category: "Opérateurs" },
    { id: 12, front: "Quel opérateur représente la soustraction en Python ?", back: "Le symbole - (exemple : 5 - 8 = -3).", category: "Opérateurs" },
    { id: 13, front: "Quel opérateur représente la multiplication en Python ?", back: "Le symbole * (exemple : 4 * 3 = 12).", category: "Opérateurs" },
    { id: 14, front: "Quel opérateur représente la division en Python ?", back: "Le symbole / (exemple : 7 / 2 = 3.5).", category: "Opérateurs" },
    { id: 15, front: "Quel opérateur représente la division entière en Python ?", back: "Le symbole // (exemple : 7 // 2 = 3).", category: "Opérateurs" },

    { id: 16, front: "Quel opérateur représente le modulo (reste de division) ?", back: "Le symbole % (exemple : 17 % 6 = 5).", category: "Opérateurs" },
    { id: 17, front: "Quel opérateur représente la puissance en Python ?", back: "Le symbole ** (exemple : 2 ** 4 = 16).", category: "Opérateurs" },
    { id: 18, front: "Comment calculer 2 élevé à la puissance 4 en Python ?", back: "2 ** 4 qui donne 16.", category: "Opérateurs" },
    { id: 19, front: "Quel est le résultat de 7 % 6 ?", back: "1 (car 7 = 1*6 + 1).", category: "Opérateurs" },
    { id: 20, front: "Quel est le résultat de 7 // 2 ?", back: "3 (division entière de 7 par 2).", category: "Opérateurs" },

    { id: 21, front: "Comment créer une liste simple [2, 4, 6] ?", back: "L = [2, 4, 6] directement.", category: "Listes" },
    { id: 22, front: "Comment créer une liste des nombres de 0 à 4 ?", back: "L2 = list(range(5)) qui donne [0,1,2,3,4].", category: "Listes" },
    { id: 23, front: "Comment créer une liste des carrés de 0 à 4 ?", back: "L3 = [k**2 for k in range(5)] qui donne [0,1,4,9,16].", category: "Listes" },
    { id: 24, front: "Quelle méthode ajoute un élément à la fin d'une liste ?", back: "L.append(element) ajoute element à la fin de L.", category: "Listes" },
    { id: 25, front: "Quelle méthode supprime le premier élément spécifique d'une liste ?", back: "L.remove(element) supprime le premier element trouvé.", category: "Listes" },

    { id: 26, front: "Comment accéder au premier élément d'une liste L ?", back: "L[0] (les indices commencent à 0).", category: "Listes" },
    { id: 27, front: "Quelle fonction donne la longueur d'une liste L ?", back: "len(L) retourne le nombre d'éléments.", category: "Listes" },
    { id: 28, front: "Comment créer une liste vide en Python ?", back: "L = [] ou L = list().", category: "Listes" },
    { id: 29, front: "Comment ajouter plusieurs éléments à une liste ?", back: "L.extend([a, b, c]) ou utiliser une boucle avec append.", category: "Listes" },
    { id: 30, front: "Comment inverser l'ordre d'une liste L ?", back: "L.reverse() ou L[::-1] pour créer une nouvelle liste.", category: "Listes" },

    { id: 31, front: "Quelle est la syntaxe de base d'une boucle for en Python ?", back: "for variable in sequence: instruction(s)", category: "Boucles" },
    { id: 32, front: "Comment créer une boucle for de 1 à n inclus ?", back: "for i in range(1, n+1):", category: "Boucles" },
    { id: 33, front: "Comment créer une boucle for de 0 à n-1 ?", back: "for i in range(n):", category: "Boucles" },
    { id: 34, front: "Quelle est la syntaxe d'une condition if-else ?", back: "if condition: instruction(s) else: instruction(s)", category: "Conditions" },
    { id: 35, front: "Comment tester si un nombre n est pair ?", back: "if n % 2 == 0:", category: "Conditions" },

    { id: 36, front: "Comment tester si un nombre n est impair ?", back: "if n % 2 != 0: ou if n % 2 == 1:", category: "Conditions" },
    { id: 37, front: "Quelle est la syntaxe de base d'une boucle while ?", back: "while condition: instruction(s)", category: "Boucles" },
    { id: 38, front: "Comment créer une boucle infinie avec while ?", back: "while True: (attention aux conditions d'arrêt)", category: "Boucles" },
    { id: 39, front: "Comment sortir d'une boucle (for ou while) ?", back: "break pour sortir complètement, continue pour passer à l'itération suivante.", category: "Boucles" },
    { id: 40, front: "Comment créer une boucle imbriquée (double boucle) ?", back: "Une boucle for/while à l'intérieur d'une autre.", category: "Boucles" },

    { id: 41, front: "Quelle est la syntaxe pour définir une fonction en Python ?", back: "def nom_fonction(paramètres): instruction(s) return valeur", category: "Fonctions" },
    { id: 42, front: "Comment appeler une fonction définie ?", back: "nom_fonction(arguments) où arguments correspondent aux paramètres.", category: "Fonctions" },
    { id: 43, front: "Qu'est-ce qu'un paramètre dans une fonction ?", back: "Une variable qui reçoit une valeur lors de l'appel de la fonction.", category: "Fonctions" },
    { id: 44, front: "Qu'est-ce qu'un argument dans une fonction ?", back: "La valeur passée à un paramètre lors de l'appel.", category: "Fonctions" },
    { id: 45, front: "Quand utilise-t-on return dans une fonction ?", back: "Pour retourner une valeur qui peut être utilisée après l'appel.", category: "Fonctions" },

    { id: 46, front: "Quelle est la différence entre print() et return ?", back: "print() affiche à l'écran, return renvoie une valeur pour utilisation future.", category: "Fonctions" },
    { id: 47, front: "Comment créer une fonction sans paramètre ?", back: "def ma_fonction():", category: "Fonctions" },
    { id: 48, front: "Comment créer une fonction avec plusieurs paramètres ?", back: "def ma_fonction(param1, param2, ...):", category: "Fonctions" },
    { id: 49, front: "Qu'est-ce qu'un script Python ?", back: "Un fichier .py contenant du code exécutable séquentiellement.", category: "Scripts" },
    { id: 50, front: "Comment exécuter un script Python depuis le terminal ?", back: "python nom_du_script.py ou python3 nom_du_script.py", category: "Scripts" }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [cards, setCards] = useState(pythonData);
  const [progress, setProgress] = useState(0);

  // Calcul du progrès
  useEffect(() => {
    setProgress(((currentIndex + 1) / cards.length) * 100);
  }, [currentIndex, cards.length]);

  // Navigation avec les touches
  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      switch (event.code) {
        case 'Space':
        case 'Enter':
          event.preventDefault();
          setIsFlipped(!isFlipped);
          break;
        case 'ArrowLeft':
          event.preventDefault();
          goToPrevious();
          break;
        case 'ArrowRight':
          event.preventDefault();
          goToNext();
          break;
        case 'KeyS':
          event.preventDefault();
          shuffleCards();
          break;
        case 'KeyR':
          event.preventDefault();
          resetCards();
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [isFlipped, currentIndex]);

  const goToNext = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % cards.length);
    setIsFlipped(false);
  }, [cards.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + cards.length) % cards.length);
    setIsFlipped(false);
  }, [cards.length]);

  const shuffleCards = () => {
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const resetCards = () => {
    setCards(pythonData);
    setCurrentIndex(0);
    setIsFlipped(false);
  };

  const currentCard = cards[currentIndex];

  const getCategoryColor = (category: string) => {
    const colors: { [key: string]: string } = {
      "Librairies": "bg-blue-100 text-blue-800",
      "Types": "bg-green-100 text-green-800",
      "Opérateurs": "bg-purple-100 text-purple-800",
      "Listes": "bg-yellow-100 text-yellow-800",
      "Boucles": "bg-red-100 text-red-800",
      "Conditions": "bg-indigo-100 text-indigo-800",
      "Fonctions": "bg-pink-100 text-pink-800",
      "Scripts": "bg-teal-100 text-teal-800"
    };
    return colors[category] || "bg-gray-100 text-gray-800";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-teal-50">
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
            <span className="text-teal-600 font-medium">Chapitre 2 - Flashcards</span>
          </div>
        </div>
      </nav>

      <div className="container mx-auto py-8 px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="flex justify-center mb-4">
            <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center">
              <Code className="h-8 w-8 text-teal-600" />
            </div>
          </div>
          <h1 className="text-3xl font-bold mb-4 text-teal-900">Chapitre 2 : Flashcards - Bases de Python</h1>
          <p className="text-lg text-blue-800 max-w-3xl mx-auto mb-6">
            Révisez les concepts clés des bases de Python avec des flashcards interactives
          </p>

          {/* Informations de chapitre */}
          <div className="max-w-2xl mx-auto mb-6">
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Chapitre</span>
                  <span className="text-2xl font-bold text-blue-900">2</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Durée estimée</span>
                  <span className="text-2xl font-bold text-blue-900">4h</span>
                </div>
                <div className="flex flex-col items-center">
                  <span className="text-sm text-blue-600 font-medium mb-1">Niveau</span>
                  <span className="inline-flex items-center gap-2 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                    🟢 Débutant
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="flex gap-3 justify-center flex-wrap">
            <Link to="/formation/oteria/python-bases-cours">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <BookOpen className="h-4 w-4" />
                Cours
              </button>
            </Link>
            <Link to="/formation/oteria/python-bases-exercices">
              <button className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <Target className="h-4 w-4" />
                Exercices
              </button>
            </Link>
            <Link to="/formation/oteria/python-bases-qcm">
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

        {/* Barre de progrès */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-700">Progression</span>
            <span className="text-sm font-medium text-teal-800">{currentIndex + 1} / {cards.length}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div
              className="bg-gradient-to-r from-blue-500 to-teal-500 h-2.5 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>

        {/* Contrôles principaux */}
        <div className="max-w-2xl mx-auto mb-6">
          <div className="flex justify-center gap-3 mb-4">
            <Button
              onClick={shuffleCards}
              variant="outline"
              className="flex items-center gap-2 bg-white/80 backdrop-blur-sm hover:bg-white hover:scale-105 transition-all duration-200"
            >
              <Shuffle className="h-4 w-4" />
              Mélanger (S)
            </Button>
            <Button
              onClick={resetCards}
              variant="outline"
              className="flex items-center gap-2 bg-white/80 backdrop-blur-sm hover:bg-white hover:scale-105 transition-all duration-200"
            >
              <RotateCcw className="h-4 w-4" />
              Recommencer (R)
            </Button>
            <Button
              onClick={() => setShowHelp(!showHelp)}
              variant="outline"
              className="flex items-center gap-2 bg-white/80 backdrop-blur-sm hover:bg-white hover:scale-105 transition-all duration-200"
            >
              <Lightbulb className="h-4 w-4" />
              Aide
            </Button>
          </div>

          {/* Aide aux raccourcis */}
          {showHelp && (
            <Card className="mb-4 bg-blue-50 border-blue-200">
              <CardContent className="p-4">
                <h3 className="font-semibold text-blue-900 mb-3">Raccourcis clavier :</h3>
                <div className="grid grid-cols-2 gap-2 text-sm text-blue-700">
                  <div><kbd className="bg-blue-100 px-2 py-1 rounded">Espace</kbd> ou <kbd className="bg-blue-100 px-2 py-1 rounded">Entrée</kbd> : Retourner la carte</div>
                  <div><kbd className="bg-blue-100 px-2 py-1 rounded">←</kbd> <kbd className="bg-blue-100 px-2 py-1 rounded">→</kbd> : Navigation</div>
                  <div><kbd className="bg-blue-100 px-2 py-1 rounded">S</kbd> : Mélanger</div>
                  <div><kbd className="bg-blue-100 px-2 py-1 rounded">R</kbd> : Recommencer</div>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Carte principale */}
        <div className="max-w-2xl mx-auto mb-6">
          <Card
            className="min-h-[450px] cursor-pointer transform transition-all duration-500 hover:scale-105 bg-white/90 backdrop-blur-sm shadow-xl"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <CardContent className="h-full flex flex-col justify-center items-center p-6 relative">
              {/* Badge catégorie */}
              <div className="absolute top-4 right-4">
                <Badge className={getCategoryColor(currentCard.category)} variant="secondary">
                  {currentCard.category}
                </Badge>
              </div>

              {/* Indicateur de face */}
              <div className="absolute top-4 left-4 flex items-center gap-2">
                {isFlipped ? (
                  <>
                    <Eye className="h-4 w-4 text-green-600" />
                    <span className="text-sm font-medium text-green-600">Réponse</span>
                  </>
                ) : (
                  <>
                    <EyeOff className="h-4 w-4 text-teal-800" />
                    <span className="text-sm font-medium text-teal-800">Question</span>
                  </>
                )}
              </div>

              {/* Contenu de la carte centré au milieu */}
              <div className="flex-1 flex flex-col justify-center items-center w-full max-w-lg mx-auto text-center">
                <div className="text-2xl font-bold text-gray-900 leading-relaxed text-center mb-6">
                  {isFlipped ? currentCard.back : currentCard.front}
                </div>

                {isFlipped && (
                  <div className="text-lg text-gray-600 bg-gray-50 rounded-lg p-4 border-l-4 border-teal-500 text-center mb-6">
                    <strong>Question :</strong> {currentCard.front}
                  </div>
                )}

                <div className="text-sm text-gray-500 text-center">
                  Cliquez ou appuyez sur Espace pour retourner
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation */}
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center">
            <Button
              onClick={goToPrevious}
              variant="outline"
              className="flex items-center gap-2 bg-white/80 backdrop-blur-sm hover:bg-white px-6 py-3"
            >
              <ChevronLeftIcon className="h-5 w-5" />
              Précédent
            </Button>

            <div className="text-sm text-gray-600 bg-white/80 backdrop-blur-sm rounded-lg px-4 py-2">
              {currentIndex + 1} sur {cards.length}
            </div>

            <Button
              onClick={goToNext}
              variant="outline"
              className="flex items-center gap-2 bg-white/80 backdrop-blur-sm hover:bg-white px-6 py-3"
            >
              Suivant
              <ChevronRightIcon className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Section informative */}
        <div className="max-w-4xl mx-auto mt-12">
          <Card className="border-2 border-blue-200 bg-gradient-to-r from-blue-50 to-teal-50 shadow-lg">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-blue-900 mb-4">Conseils pour l'apprentissage de Python</h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <h4 className="font-semibold text-blue-800">Technique de révision :</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Commencez par la question (plus accessible)</li>
                    <li>• Tentez de répondre avant de retourner</li>
                    <li>• Utilisez les catégories pour regrouper les concepts</li>
                    <li>• Pratiquez le code après chaque carte</li>
                  </ul>
                </div>
                <div className="space-y-3">
                  <h4 className="font-semibold text-blue-800">Pour les concours :</h4>
                  <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Maîtrisez les types et opérateurs de base</li>
                    <li>• Comprenez les boucles et conditions</li>
                    <li>• Sachez manipuler les listes efficacement</li>
                    <li>• Révisez régulièrement avec les flashcards</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Navigation finale */}
        <div className="flex justify-between items-center bg-blue-50 p-6 rounded-lg mt-8">
          <Link to="/formation/oteria/logique-fondamentale-flashcards">
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              ← Chapitre 1
            </button>
          </Link>
          <div className="flex gap-3">
            <Link to="/formation/oteria/python-bases-cours">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <BookOpen className="h-4 w-4" />
                Cours
              </button>
            </Link>
            <Link to="/formation/oteria/python-bases-exercices">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <Target className="h-4 w-4" />
                Exercices
              </button>
            </Link>
            <Link to="/formation/oteria/python-bases-qcm">
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm">
                <Zap className="h-4 w-4" />
                QCM
              </button>
            </Link>
            <Link to="/articles/oteria-cyber-school">
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Retour au programme
              </button>
            </Link>
          </div>
          <div className="text-blue-600 font-medium">Chapitre suivant →</div>
        </div>
      </div>
    </div>
  );
};

export default OteriaPythonBasesFlashcardsPage;
