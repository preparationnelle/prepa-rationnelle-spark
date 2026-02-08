import React from 'react';
import { OteriaChapterTemplate } from '@/components/formation/OteriaChapterTemplate';
import { OteriaQCM } from '@/components/formation/OteriaQCM';

const qcmData = {
  title: "Matrices & Chaînes de Markov — QCM (20 questions)",
  questions: [
    {
      id: 1,
      question: "Quelle est la définition correcte d'une matrice carrée d'ordre $n$ ?",
      options: [
        { id: "a", text: "Une matrice avec $n$ lignes et $n$ colonnes", correct: true },
        { id: "b", text: "Une matrice avec $n$ lignes et $p$ colonnes différentes", correct: false },
        { id: "c", text: "Une matrice avec des éléments tous nuls", correct: false },
        { id: "d", text: "Une matrice avec une seule ligne", correct: false }
      ],
      explanation: "Une matrice carrée a le même nombre de lignes et de colonnes, soit $n \\times n$."
    },
    {
      id: 2,
      question: "Quelle est la formule du produit matriciel $AB$ pour des matrices compatibles ?",
      options: [
        { id: "a", text: "$(AB)_{i,j} = a_{i,j} + b_{i,j}$", correct: false },
        { id: "b", text: "$(AB)_{i,j} = a_{i,j} \\times b_{i,j}$", correct: false },
        { id: "c", text: "$(AB)_{i,j} = \\sum_{k} a_{i,k} b_{k,j}$", correct: true },
        { id: "d", text: "$(AB)_{i,j} = \\sum_{k} a_{k,i} b_{j,k}$", correct: false }
      ],
      explanation: "Le produit matriciel utilise la somme des produits des éléments des lignes et colonnes."
    },
    {
      id: 3,
      question: "Quelle propriété est vraie pour la matrice identité $I_n$ ?",
      options: [
        { id: "a", text: "$I_n A = 0$ pour toute matrice A", correct: false },
        { id: "b", text: "$I_n A = A$ et $A I_n = A$ pour toute matrice carrée A", correct: true },
        { id: "c", text: "$I_n$ est toujours nulle", correct: false },
        { id: "d", text: "$I_n$ n'existe que pour $n=1$", correct: false }
      ],
      explanation: "La matrice identité est l'élément neutre de la multiplication matricielle."
    },
    {
      id: 4,
      question: "Quelle matrice est dite triangulaire supérieure ?",
      options: [
        { id: "a", text: "Tous les éléments au-dessus de la diagonale sont nuls", correct: false },
        { id: "b", text: "Tous les éléments en dessous de la diagonale sont nuls", correct: true },
        { id: "c", text: "Tous les éléments de la diagonale sont nuls", correct: false },
        { id: "d", text: "Tous les éléments sont nuls sauf les coins", correct: false }
      ],
      explanation: "Dans une matrice triangulaire supérieure, les éléments sous la diagonale principale sont nuls."
    },
    {
      id: 5,
      question: "Quelle matrice est dite symétrique ?",
      options: [
        { id: "a", text: "$A = A^T$ (égale à sa transposée)", correct: true },
        { id: "b", text: "$A = -A^T$ (opposée à sa transposée)", correct: false },
        { id: "c", text: "$A A^T = I_n$", correct: false },
        { id: "d", text: "$A^T A = I_n$", correct: false }
      ],
      explanation: "Une matrice symétrique vérifie $A^T = A$, c'est-à-dire $a_{i,j} = a_{j,i}$ pour tous $i,j$."
    },
    {
      id: 6,
      question: "Quelle est la formule du déterminant d'une matrice $2 \\times 2$ ?",
      options: [
        { id: "a", text: "$\\det(A) = a_{11} + a_{22}$", correct: false },
        { id: "b", text: "$\\det(A) = a_{11} \\times a_{22}$", correct: false },
        { id: "c", text: "$\\det(A) = a_{11} - a_{22}$", correct: false },
        { id: "d", text: "$\\det(A) = a_{11}a_{22} - a_{12}a_{21}$", correct: true }
      ],
      explanation: "Pour une matrice $2 \\times 2$ $\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, $\\det = ad - bc$."
    },
    {
      id: 7,
      question: "Quand une matrice carrée est-elle inversible ?",
      options: [
        { id: "a", text: "Si elle est symétrique", correct: false },
        { id: "b", text: "Si son déterminant n'est pas nul", correct: true },
        { id: "c", text: "Si elle est triangulaire", correct: false },
        { id: "d", text: "Si elle est orthogonale", correct: false }
      ],
      explanation: "Une matrice carrée est inversible si et seulement si son déterminant est non nul."
    },
    {
      id: 8,
      question: "Quelle est la définition d'une valeur propre $\\lambda$ d'une matrice $A$ ?",
      options: [
        { id: "a", text: "Un élément diagonal ab $A$", correct: false },
        { id: "b", text: "Un scalaire tel qu'il existe $v \\neq 0$ avec $A v = \\lambda v$", correct: true },
        { id: "c", text: "La somme des éléments ab $A$", correct: false },
        { id: "d", text: "Le produit des éléments diagonaux ab $A$", correct: false }
      ],
      explanation: "$\\lambda$ est valeur propre si le système $(A - \\lambda I)v = 0$ admet une solution non triviale $v$."
    },
    {
      id: 9,
      question: "Quelle est la trace d'une matrice carrée ?",
      options: [
        { id: "a", text: "La somme de tous ses éléments", correct: false },
        { id: "b", text: "Le produit des éléments diagonaux", correct: false },
        { id: "c", text: "La somme des éléments de la diagonale principale", correct: true },
        { id: "d", text: "Le déterminant de la matrice", correct: false }
      ],
      explanation: "$\\text{tr}(A) = \\sum_{i=1}^n a_{i,i}$, la somme des éléments diagonaux."
    },
    {
      id: 10,
      question: "Quelle propriété est vraie pour la trace ?",
      options: [
        { id: "a", text: "$\\text{tr}(A + B) = \\text{tr}(A) - \\text{tr}(B)$", correct: false },
        { id: "b", text: "$\\text{tr}(AB) = \\text{tr}(BA)$", correct: true },
        { id: "c", text: "$\\text{tr}(A^T) = -\\text{tr}(A)$", correct: false },
        { id: "d", text: "$\\text{tr}(\\lambda A) = \\lambda \\text{tr}(A)$ seulement si $\\lambda > 0$", correct: false }
      ],
      explanation: "La trace est invariante par transposition et commute avec le produit matriciel."
    },
    {
      id: 11,
      question: "Quelle est la définition d'une matrice stochastique ?",
      options: [
        { id: "a", text: "Une matrice avec des éléments positifs ou nuls", correct: false },
        { id: "b", text: "Une matrice où chaque ligne somme à 1", correct: true },
        { id: "c", text: "Une matrice où chaque colonne somme à 1", correct: false },
        { id: "d", text: "Une matrice avec des éléments négatifs", correct: false }
      ],
      explanation: "Une matrice stochastique a des éléments $\\ge 0$ et chaque ligne somme à 1."
    },
    {
      id: 12,
      question: "Dans une chaîne de Markov, que représente la matrice de transition $P$ ?",
      options: [
        { id: "a", text: "Les probabilités d'être dans chaque état", correct: false },
        { id: "b", text: "Les probabilités de transition entre états", correct: true },
        { id: "c", text: "Le nombre d'états du système", correct: false },
        { id: "d", text: "La durée moyenne dans chaque état", correct: false }
      ],
      explanation: "$P_{i,j} = P(X_{n+1}=j | X_n=i)$, les probabilités de transition."
    },
    {
      id: 13,
      question: "Quelle est la formule d'évolution d'une chaîne de Markov ?",
      options: [
        { id: "a", text: "$\\pi^{(n+1)} = \\pi^{(n)} + P$", correct: false },
        { id: "b", text: "$\\pi^{(n+1)} = \\pi^{(n)} P$", correct: true },
        { id: "c", text: "$\\pi^{(n+1)} = \\pi^{(n)} P^n$", correct: false },
        { id: "d", text: "$\\pi^{(n+1)} = P \\pi^{(n)}$", correct: false }
      ],
      explanation: "La loi évolue par multiplication matricielle (vecteur ligne à gauche) : $\\pi^{(n+1)} = \\pi^{(n)} P$."
    },
    {
      id: 14,
      question: "Qu'est-ce qu'un vecteur stationnaire $\\pi$ d'une chaîne de Markov ?",
      options: [
        { id: "a", text: "Le vecteur initial du système", correct: false },
        { id: "b", text: "Un vecteur tel que $\\pi P = \\pi$", correct: true },
        { id: "c", text: "Un vecteur qui change à chaque étape", correct: false },
        { id: "d", text: "Le nombre d'états visités", correct: false }
      ],
      explanation: "Le vecteur stationnaire $\\pi$ satisfait $\\pi P = \\pi$ et représente $\\sum \\pi_i = 1$."
    },
    {
      id: 15,
      question: "Quelle matrice est dite orthogonale ?",
      options: [
        { id: "a", text: "$A^T = A$", correct: false },
        { id: "b", text: "$A^T = -A$", correct: false },
        { id: "c", text: "$A^T A = I_n$", correct: true },
        { id: "d", text: "$A A^T = I_n$", correct: false } // Also potentially true depending on definition context, but (c) is standard def
      ],
      explanation: "Une matrice orthogonale vérifie $A^T A = I_n$ (ou $A A^T = I_n$)."
    },
    {
      id: 16,
      question: "Quelle est la propriété fondamentale du déterminant ?",
      options: [
        { id: "a", text: "$\\det(A + B) = \\det(A) + \\det(B)$", correct: false },
        { id: "b", text: "$\\det(AB) = \\det(A) \\times \\det(B)$", correct: true },
        { id: "c", text: "$\\det(\\lambda A) = \\lambda^n \\det(A)$", correct: false },
        { id: "d", text: "$\\det(A^T) = -\\det(A)$", correct: false }
      ],
      explanation: "Le déterminant est multiplicatif : $\\det(AB) = \\det(A)\\det(B)$."
    },
    {
      id: 17,
      question: "Dans un système $Ax = b$, que représente le rang de $A$ ?",
      options: [
        { id: "a", text: "Le nombre de solutions du système", correct: false },
        { id: "b", text: "La dimension de l'espace engendré par les colonnes de $A$", correct: true },
        { id: "c", text: "Le nombre d'équations du système", correct: false },
        { id: "d", text: "Le nombre de variables du système", correct: false }
      ],
      explanation: "Le rang est la dimension de l'image de $A$, c'est-à-dire l'espace engendré par ses colonnes."
    },
    {
      id: 18,
      question: "Quelle méthode permet de résoudre un système triangulaire ?",
      options: [
        { id: "a", text: "La méthode de Cramer", correct: false },
        { id: "b", text: "La substitution ascendante ou descendante", correct: true },
        { id: "c", text: "L'inversion directe de la matrice", correct: false },
        { id: "d", text: "La méthode de Gauss-Jordan uniquement", correct: false }
      ],
      explanation: "Pour une matrice triangulaire, on résout par substitution successive (remontée ou descente)."
    },
    {
      id: 19,
      question: "Quelle est la propriété des matrices stochastiques régulières ?",
      options: [
        { id: "a", text: "Elles ont une seule valeur propre égale à 1", correct: false },
        { id: "b", text: "Elles convergent vers un vecteur stationnaire unique", correct: true },
        { id: "c", text: "Elles sont toujours orthogonales", correct: false },
        { id: "d", text: "Elles ont des éléments négatifs", correct: false }
      ],
      explanation: "Les matrices stochastiques régulières convergent vers une distribution stationnaire unique quel que soit l'état initial."
    },
    {
      id: 20,
      question: "Quelle application pratique utilise les chaînes de Markov ?",
      options: [
        { id: "a", text: "La résolution d'équations différentielles", correct: false },
        { id: "b", text: "La prédiction de la météo", correct: true },
        { id: "c", text: "Le calcul d'intégrales définies", correct: false },
        { id: "d", text: "La factorisation de nombres premiers", correct: false }
      ],
      explanation: "Les chaînes de Markov modélisent l'évolution de systèmes aléatoires à transitions probabilistes, comme la météo."
    }
  ]
};

const OteriaMatricesMarkovQCMPage: React.FC = () => {
  return (
    <OteriaChapterTemplate
      sessionNumber={11}
      sessionTitle="Matrices & Chaînes de Markov"
      description="Algèbre linéaire, calcul matriciel et introduction aux chaînes de Markov."
      slug="matrices-markov"
      duration="3h"
      level="Avancé"
      activeSection="quiz"
      previousSession={{ slug: 'integrales-monte-carlo', title: 'Intégrales' }}
      nextSession={{ slug: 'matrices-stochastiques', title: 'Matrices Stochastiques' }}
    >
      <OteriaQCM
        questions={qcmData.questions}
        title={qcmData.title}
        qcmId="oteria-matrices-markov"
      />
    </OteriaChapterTemplate>
  );
};

export default OteriaMatricesMarkovQCMPage;
