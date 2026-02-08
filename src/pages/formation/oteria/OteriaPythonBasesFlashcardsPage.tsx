import React from 'react';
import { OteriaMinimalistChapterTemplate } from '@/components/formation/OteriaMinimalistChapterTemplate';
import { MathFlashcards } from '@/components/MathFlashcards';
import { MathFlashcard } from '@/data/mathFlashcardsData';

interface PythonCard {
  id: number;
  front: string;
  back: string;
  category: string;
}

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
  { id: 43, front: "Qu'est-ce un paramètre dans une fonction ?", back: "Une variable qui reçoit une valeur lors de l'appel de la fonction.", category: "Fonctions" },
  { id: 44, front: "Qu'est-ce un argument dans une fonction ?", back: "La valeur passée à un paramètre lors de l'appel.", category: "Fonctions" },
  { id: 45, front: "Quand utilise-t-on return dans une fonction ?", back: "Pour retourner une valeur qui peut être utilisée après l'appel.", category: "Fonctions" },

  { id: 46, front: "Quelle est la différence entre print() et return ?", back: "print() affiche à l'écran, return renvoie une valeur pour utilisation future.", category: "Fonctions" },
  { id: 47, front: "Comment créer une fonction sans paramètre ?", back: "def ma_fonction():", category: "Fonctions" },
  { id: 48, front: "Comment créer une fonction avec plusieurs paramètres ?", back: "def ma_fonction(param1, param2, ...):", category: "Fonctions" },
  { id: 49, front: "Qu'est-ce qu'un script Python ?", back: "Un fichier .py contenant du code exécutable séquentiellement.", category: "Scripts" },
  { id: 50, front: "Comment exécuter un script Python depuis le terminal ?", back: "python nom_du_script.py ou python3 nom_du_script.py", category: "Scripts" }
];

const OteriaPythonBasesFlashcardsPage: React.FC = () => {
  const adaptedFlashcards: MathFlashcard[] = pythonData.map(card => ({
    id: card.id,
    front: card.front,
    back: card.back,
    category: card.category,
    chapter: 2,
    difficulty: 'facile', // Default difficulty as not specified in source
  }));

  return (
    <OteriaMinimalistChapterTemplate
      sessionNumber={2}
      sessionTitle="Types & structures de contrôle Python"
      description="int, float, str, list, erreurs de flottants, Boucles if/for/while, fonctions def, Librairies : math, random, numpy"
      slug="python-bases"
      duration="4h"
      level="Débutant"
      activeSection="flashcards"
      previousSession={{ slug: 'logique-fondamentale', title: 'Logique fondamentale' }}
      nextSession={{ slug: 'recurrence-recursivite', title: 'Récurrence & récursivité' }}
    >
      <MathFlashcards
        flashcards={adaptedFlashcards}
        title="Flashcards — Bases Python"
        chapterNumber={2}
        hideHeader={false}
      />
    </OteriaMinimalistChapterTemplate>
  );
};

export default OteriaPythonBasesFlashcardsPage;
