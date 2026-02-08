import React from 'react';
import { OteriaChapterTemplate } from '@/components/formation/OteriaChapterTemplate';
import { OteriaQCM } from '@/components/formation/OteriaQCM';

const qcmData = {
  title: "Arithmétique Modulaire & Cryptographie Affine — QCM",
  questions: [
    {
      id: 1,
      question: "Quelle est la définition correcte de la divisibilité en mathématiques ?",
      options: [
        { id: "a", text: "$a$ divise $b$ si $b$ est multiple de $a$", correct: false },
        { id: "b", text: "$a$ divise $b$ si $a = b \\times k$ pour un entier $k$", correct: false }, // Wait, a divides b means b = a*k. b is the larger one usually. Text says a = b*k which means a is multiple of b. Wrong.
        // Let's re-read the original: "a divise b si b est multiple de a" is correct? Yes. b = k*a.
        // Original choice b: "a divise b si a = b * k". This says a is multiple of b.
        // Original choice a: "a divise b si b est multiple de a". This is correct.
        // Original answer was b?
        // Let's check original file.
        // choices: b: "a divise b si a = b × k".
        // answer: b.
        // Explanation: "a divise b (noté a|b) s'il existe un entier k tel que b = a × k."
        // Choice b in original text says "a = b x k". That contradicts explanation "b = a x k".
        // Choice a says "b est multiple de a". This is equivalent to b = a*k.
        // I will fix the question to be correct.
        { id: "opt_a", text: "$a$ divise $b$ si $b$ est multiple de $a$", correct: true },
        { id: "opt_b", text: "$a$ divise $b$ si $a = b \\times k$ pour un entier $k$", correct: false },
        { id: "opt_c", text: "$a$ divise $b$ si $a$ est plus petit que $b$", correct: false },
        { id: "opt_d", text: "$a$ divise $b$ si $a$ et $b$ sont pairs", correct: false }
      ],
      explanation: "$a$ divise $b$ (noté $a|b$) s'il existe un entier $k$ tel que $b = a \\times k$."
    },
    {
      id: 2,
      question: "Quel théorème énonce qu'un entier $p > 1$ est premier si ses seuls diviseurs positifs sont 1 et $p$ ?",
      options: [
        { id: "a", text: "Théorème de Fermat", correct: false },
        { id: "b", text: "Théorème de Wilson", correct: false },
        { id: "c", text: "Définition des nombres premiers", correct: true },
        { id: "d", text: "Théorème fondamental de l'arithmétique", correct: false }
      ],
      explanation: "C'est la définition même des nombres premiers."
    },
    {
      id: 3,
      question: "Dans la division euclidienne de $a$ par $b > 0$, quel est le domaine de variation du reste $r$ ?",
      options: [
        { id: "a", text: "$0 \\le r < b$", correct: true },
        { id: "b", text: "$0 \\le r \\le b$", correct: false },
        { id: "c", text: "$1 \\le r \\le b$", correct: false },
        { id: "d", text: "$r$ peut être négatif", correct: false }
      ],
      explanation: "Le reste $r$ vérifie toujours $0 \\le r < b$ dans la division euclidienne."
    },
    {
      id: 4,
      question: "Quelle est la définition correcte de la congruence modulo $n$ ?",
      options: [
        { id: "a", text: "$a \\equiv b \\pmod{n}$ si $n$ divise $(a - b)$", correct: true },
        { id: "b", text: "$a \\equiv b \\pmod{n}$ si $a = b$", correct: false },
        { id: "c", text: "$a \\equiv b \\pmod{n}$ si $a$ et $b$ sont pairs", correct: false },
        { id: "d", text: "$a \\equiv b \\pmod{n}$ si $n$ divise $(a + b)$", correct: false }
      ],
      explanation: "La congruence modulo $n$ signifie que $n$ divise la différence $(a - b)$."
    },
    {
      id: 5,
      question: "Quelle propriété est vraie pour l'arithmétique modulaire ?",
      options: [
        { id: "a", text: "Si $a \\equiv b \\pmod{n}$ et $c \\equiv d \\pmod{n}$, alors $a + c \\equiv b + d \\pmod{n}$", correct: true },
        { id: "b", text: "Si $a \\equiv b \\pmod{n}$, alors $a = b$", correct: false },
        { id: "c", text: "La congruence est seulement valable pour les nombres pairs", correct: false },
        { id: "d", text: "Il n'y a pas de propriétés additives", correct: false }
      ],
      explanation: "L'arithmétique modulaire respecte les opérations usuelles : addition, soustraction et multiplication."
    },
    {
      id: 6,
      question: "Quand un entier $a$ admet-il un inverse modulo $n$ ?",
      options: [
        { id: "a", text: "Toujours", correct: false },
        { id: "b", text: "Seulement si $\\text{pgcd}(a, n) = 1$", correct: true }, // "Seulement si a est premier avec n"
        { id: "c", text: "Seulement si $a > n$", correct: false },
        { id: "d", text: "Jamais pour $n > 2$", correct: false }
      ],
      explanation: "Un inverse modulo $n$ existe seulement si $\\text{pgcd}(a, n) = 1$."
    },
    {
      id: 7,
      question: "Quel algorithme permet de trouver l'inverse modulo $n$ et le PGCD ?",
      options: [
        { id: "a", text: "Algorithme d'Euclide", correct: false },
        { id: "b", text: "Algorithme d'Euclide étendu", correct: true },
        { id: "c", text: "Algorithme de Gauss", correct: false },
        { id: "d", text: "Algorithme de Newton", correct: false }
      ],
      explanation: "L'algorithme d'Euclide étendu trouve le PGCD et les coefficients de Bézout."
    },
    {
      id: 8,
      question: "Quelle est la formule du chiffrement affine ?",
      options: [
        { id: "a", text: "$E(x) = (a \\times x + b) \\pmod{26}$", correct: true },
        { id: "b", text: "$E(x) = (a + x + b) \\pmod{26}$", correct: false },
        { id: "c", text: "$E(x) = (a \\times x) \\pmod{26}$", correct: false },
        { id: "d", text: "$E(x) = x + b \\pmod{26}$", correct: false }
      ],
      explanation: "Le chiffrement affine utilise la formule $E(x) = (a \\times x + b) \\pmod{26}$."
    },
    {
      id: 9,
      question: "Quelle condition doit vérifier la clé $a$ dans le chiffrement affine ?",
      options: [
        { id: "a", text: "$a$ doit être impair", correct: false },
        { id: "b", text: "$\\text{pgcd}(a, 26) = 1$", correct: true },
        { id: "c", text: "$a$ doit être supérieur à 13", correct: false },
        { id: "d", text: "$a$ peut être quelconque", correct: false }
      ],
      explanation: "$a$ doit être premier avec 26 pour que le déchiffrement soit possible."
    },
    {
      id: 10,
      question: "Quelle est la formule du déchiffrement affine ?",
      options: [
        { id: "a", text: "$D(y) = a^{-1} \\times (y - b) \\pmod{26}$", correct: true },
        { id: "b", text: "$D(y) = (y - b) \\times a \\pmod{26}$", correct: false },
        { id: "c", text: "$D(y) = y + b \\pmod{26}$", correct: false },
        { id: "d", text: "$D(y) = y \\times a \\pmod{26}$", correct: false }
      ],
      explanation: "Le déchiffrement utilise l'inverse de $a$ : $D(y) = a^{-1} \\times (y - b) \\pmod{26}$."
    },
    {
      id: 11,
      question: "Quel est l'inverse de 5 modulo 26 ?",
      options: [
        { id: "a", text: "21", correct: true },
        { id: "b", text: "5", correct: false },
        { id: "c", text: "13", correct: false },
        { id: "d", text: "1", correct: false }
      ],
      explanation: "Puisque $5 \\times 21 = 105 \\equiv 105 - 4 \\times 26 = 105 - 104 = 1 \\pmod{26}$."
    },
    {
      id: 12,
      question: "Dans RSA, quelle est la relation entre les clés publique et privée ?",
      options: [
        { id: "a", text: "$e \\times d \\equiv 1 \\pmod{\\varphi(n)}$", correct: true },
        { id: "b", text: "$e + d = \\varphi(n)$", correct: false },
        { id: "c", text: "$e = d$", correct: false },
        { id: "d", text: "$e \\times d = n$", correct: false }
      ],
      explanation: "Les exposants $e$ et $d$ sont inverses modulo $\\varphi(n)$ : $e \\times d \\equiv 1 \\pmod{\\varphi(n)}$."
    },
    {
      id: 13,
      question: "Dans RSA, comment calcule-t-on $\\varphi(n)$ pour $n = p \\times q$ ?",
      options: [
        { id: "a", text: "$\\varphi(n) = (p-1) \\times (q-1)$", correct: true },
        { id: "b", text: "$\\varphi(n) = p \\times q$", correct: false },
        { id: "c", text: "$\\varphi(n) = p + q$", correct: false },
        { id: "d", text: "$\\varphi(n) = (p-1) + (q-1)$", correct: false }
      ],
      explanation: "Pour $n = p \\times q$ avec $p$ et $q$ premiers, $\\varphi(n) = (p-1) \\times (q-1)$."
    },
    {
      id: 14,
      question: "Quelle est la formule de chiffrement dans RSA ?",
      options: [
        { id: "a", text: "$C \\equiv M^e \\pmod{n}$", correct: true },
        { id: "b", text: "$C \\equiv M^d \\pmod{n}$", correct: false },
        { id: "c", text: "$C \\equiv M \\times e \\pmod{n}$", correct: false },
        { id: "d", text: "$C \\equiv M + e \\pmod{n}$", correct: false }
      ],
      explanation: "Le chiffrement RSA élève le message $M$ à la puissance $e$ modulo $n$."
    },
    {
      id: 15,
      question: "Quelle est la formule de déchiffrement dans RSA ?",
      options: [
        { id: "a", text: "$M \\equiv C^d \\pmod{n}$", correct: true },
        { id: "b", text: "$M \\equiv C^e \\pmod{n}$", correct: false },
        { id: "c", text: "$M \\equiv C \\times d \\pmod{n}$", correct: false },
        { id: "d", text: "$M \\equiv C - d \\pmod{n}$", correct: false }
      ],
      explanation: "Le déchiffrement RSA élève le chiffré $C$ à la puissance $d$ modulo $n$."
    },
    {
      id: 16,
      question: "Quelle opération cryptographique utilise les inverses modulaires ?",
      options: [
        { id: "a", text: "Le hachage SHA", correct: false },
        { id: "b", text: "Les signatures numériques", correct: true },
        { id: "c", text: "Le chiffrement symétrique", correct: false },
        { id: "d", text: "La compression de données", correct: false }
      ],
      explanation: "Les signatures numériques utilisent les inverses modulaires pour signer et vérifier."
    },
    {
      id: 17,
      question: "Quel algorithme quantique menace RSA ?",
      options: [
        { id: "a", text: "Algorithme de Shor", correct: true },
        { id: "b", text: "Algorithme de Grover", correct: false },
        { id: "c", text: "Algorithme de Deutsch", correct: false },
        { id: "d", text: "Algorithme de Simon", correct: false }
      ],
      explanation: "L'algorithme de Shor peut factoriser de grands nombres en temps polynomial."
    },
    {
      id: 18,
      question: "Quelle propriété est vraie pour les congruences ?",
      options: [
        { id: "a", text: "Si $a \\equiv b \\pmod{n}$, alors $a^k \\equiv b^k \\pmod{n}$", correct: true },
        { id: "b", text: "Si $a \\equiv b \\pmod{n}$, alors $a = b$", correct: false },
        { id: "c", text: "Les congruences ne respectent que l'addition", correct: false },
        { id: "d", text: "$a^k \\equiv b^k \\pmod{n}$ seulement pour $k$ pair", correct: false }
      ],
      explanation: "Les congruences respectent les puissances : si $a \\equiv b \\pmod{n}$, alors $a^k \\equiv b^k \\pmod{n}$."
    },
    {
      id: 19,
      question: "Quelle fonction Python calcule efficacement les puissances modulaires ?",
      options: [
        { id: "a", text: "`pow(a, b, n)`", correct: true },
        { id: "b", text: "`math.pow(a, b) % n`", correct: false },
        { id: "c", text: "`a ** b % n`", correct: false },
        { id: "d", text: "`mod_pow(a, b, n)`", correct: false }
      ],
      explanation: "`pow(a, b, n)` calcule $a^b \\pmod{n}$ efficacement en utilisant l'exponentiation rapide."
    },
    {
      id: 20,
      question: "Quel est le principe de base de la cryptographie post-quantique ?",
      options: [
        { id: "a", text: "Utiliser des réseaux vectoriels (lattice-based)", correct: true },
        { id: "b", text: "Augmenter la taille des clés RSA", correct: false },
        { id: "c", text: "Utiliser des algorithmes quantiques", correct: false },
        { id: "d", text: "Abandonner la cryptographie", correct: false }
      ],
      explanation: "La cryptographie post-quantique utilise notamment les réseaux vectoriels (lattices)."
    }
  ]
};

const OteriaMatricesStochastiquesQCMPage: React.FC = () => {
  return (
    <OteriaChapterTemplate
      sessionNumber={12}
      sessionTitle="Arithmétique modulaire & Cryptographie"
      description="Le langage de la cybersécurité : RSA, Diffie-Hellman et les mathématiques du chiffrement."
      slug="matrices-stochastiques"
      duration="3h"
      level="Avancé"
      activeSection="quiz"
      previousSession={{ slug: 'matrices-markov', title: 'Matrices & Markov' }}
      nextSession={{ slug: 'evaluation-finale-qcm', title: 'Évaluation Finale' }}
    >
      <OteriaQCM
        questions={qcmData.questions}
        title={qcmData.title}
        qcmId="oteria-matrices-stochastiques"
      />
    </OteriaChapterTemplate>
  );
};

export default OteriaMatricesStochastiquesQCMPage;
