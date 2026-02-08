import React from 'react';
import { OteriaChapterTemplate } from '@/components/formation/OteriaChapterTemplate';
import { OteriaQCM } from '@/components/formation/OteriaQCM';

const qcmData = {
    title: "Probabilités : Fondamentaux — QCM",
    questions: [
        {
            id: 1,
            question: "Si $A$ et $B$ sont disjoints (incompatibles), que vaut $P(A \\cup B)$ ?",
            options: [
                { id: "a", text: "$P(A) + P(B)$", correct: true },
                { id: "b", text: "$P(A) \\times P(B)$", correct: false },
                { id: "c", text: "$P(A) - P(B)$", correct: false },
                { id: "d", text: "0", correct: false }
            ],
            explanation: "Pour des événements disjoints, la probabilité de l'union est la somme des probabilités : $P(A \\cup B) = P(A) + P(B)$."
        },
        {
            id: 2,
            question: "Quelle est la définition de la probabilité conditionnelle $P_B(A)$ (sachant $B$) ?",
            options: [
                { id: "a", text: "$P(A \\cap B) / P(B)$", correct: true },
                { id: "b", text: "$P(A \\cup B) / P(B)$", correct: false },
                { id: "c", text: "$P(A) / P(B)$", correct: false },
                { id: "d", text: "$P(B) / P(A)$", correct: false }
            ],
            explanation: "Par définition, $P_B(A) = P(A|B) = \\frac{P(A \\cap B)}{P(B)}$ (avec $P(B) > 0$)."
        },
        {
            id: 3,
            question: "Deux événements $A$ et $B$ sont indépendants si :",
            options: [
                { id: "a", text: "$A \\cap B = \\emptyset$", correct: false },
                { id: "b", text: "$P(A \\cap B) = P(A) \\times P(B)$", correct: true },
                { id: "c", text: "$P(A \\cup B) = P(A) + P(B)$", correct: false },
                { id: "d", text: "$P(A) = P(B)$", correct: false }
            ],
            explanation: "L'indépendance est définie par $P(A \\cap B) = P(A) \\times P(B)$."
        },
        {
            id: 4,
            question: "Quelle formule donne la probabilité totale, si $(B_i)$ est un système complet d'événements ?",
            options: [
                { id: "a", text: "$P(A) = \\sum P(A \\cap B_i)$", correct: true },
                { id: "b", text: "$P(A) = \\sum P(A \\cup B_i)$", correct: false },
                { id: "c", text: "$P(A) = \\prod P(A | B_i)$", correct: false },
                { id: "d", text: "$P(A) = 1$", correct: false }
            ],
            explanation: "D'après la formule des probabilités totales : $P(A) = \\sum_i P(A \\cap B_i) = \\sum_i P(A|B_i)P(B_i)$."
        },
        {
            id: 5,
            question: "Que dit la formule de Bayes pour exprimer $P(B|A)$ ?",
            options: [
                { id: "a", text: "$P(B|A) = P(A|B)P(B) / P(A)$", correct: true },
                { id: "b", text: "$P(B|A) = P(A|B)P(A) / P(B)$", correct: false },
                { id: "c", text: "$P(B|A) = P(A \\cap B)$", correct: false },
                { id: "d", text: "$P(B|A) = 1 - P(A|B)$", correct: false }
            ],
            explanation: "Formule de Bayes : $P(B|A) = \\frac{P(A|B)P(B)}{P(A)}$."
        },
        {
            id: 6,
            question: "Si $P(A) = 0.3$, que vaut $P(\\bar{A})$ (événement contraire) ?",
            options: [
                { id: "a", text: "0.3", correct: false },
                { id: "b", text: "0.7", correct: true },
                { id: "c", text: "0", correct: false },
                { id: "d", text: "1", correct: false }
            ],
            explanation: "$P(\\bar{A}) = 1 - P(A) = 1 - 0.3 = 0.7$."
        },
        {
            id: 7,
            question: "Quelle est la probabilité d'obtenir un nombre pair avec un dé à 6 faces équilibré ?",
            options: [
                { id: "a", text: "1/6", correct: false },
                { id: "b", text: "1/3", correct: false },
                { id: "c", text: "1/2", correct: true },
                { id: "d", text: "2/3", correct: false }
            ],
            explanation: "Les nombres pairs sont {2, 4, 6}. Il y en a 3 sur 6 issues possibles. $3/6 = 1/2$."
        },
        {
            id: 8,
            question: "Si $A \\subset B$, quelle relation est vraie ?",
            options: [
                { id: "a", text: "$P(A) \\ge P(B)$", correct: false },
                { id: "b", text: "$P(A) \\le P(B)$", correct: true },
                { id: "c", text: "$P(A) = P(B)$", correct: false },
                { id: "d", text: "$P(A) + P(B) = 1$", correct: false }
            ],
            explanation: "Si $A$ est inclus dans $B$, alors la probabilité de $A$ est inférieure ou égale à celle de $B$ (croissance de la probabilité)."
        },
        {
            id: 9,
            question: "Que vaut $P(A \\cup B)$ dans le cas général (non disjoints) ?",
            options: [
                { id: "a", text: "$P(A) + P(B)$", correct: false },
                { id: "b", text: "$P(A) + P(B) - P(A \\cap B)$", correct: true },
                { id: "c", text: "$P(A) \\times P(B)$", correct: false },
                { id: "d", text: "$P(A) + P(B) + P(A \\cap B)$", correct: false }
            ],
            explanation: "Formule du crible (Poincaré) : $P(A \\cup B) = P(A) + P(B) - P(A \\cap B)$."
        },
        {
            id: 10,
            question: "Quelle est la probabilité de l'événement impossible $\\emptyset$ ?",
            options: [
                { id: "a", text: "0", correct: true },
                { id: "b", text: "1", correct: false },
                { id: "c", text: "0.5", correct: false },
                { id: "d", text: "Indéfini", correct: false }
            ],
            explanation: "$P(\\emptyset) = 0$ par définition."
        },
        {
            id: 11,
            question: "Une urne contient 3 boules rouges et 2 boules noires. Probabilité de tirer une rouge ?",
            options: [
                { id: "a", text: "2/5", correct: false },
                { id: "b", text: "3/5", correct: true },
                { id: "c", text: "1/2", correct: false },
                { id: "d", text: "3/2", correct: false }
            ],
            explanation: "Nombre de cas favorables (3) / Nombre de cas total (5) = $3/5$."
        },
        {
            id: 12,
            question: "Si $P(A) = 0.4, P(B) = 0.5$ et $A, B$ indépendants, que vaut $P(A \\cap B)$ ?",
            options: [
                { id: "a", text: "0.9", correct: false },
                { id: "b", text: "0.2", correct: true },
                { id: "c", text: "0.1", correct: false },
                { id: "d", text: "0.4", correct: false }
            ],
            explanation: "Indépendance $\\Rightarrow P(A \\cap B) = P(A) \\times P(B) = 0.4 \\times 0.5 = 0.2$."
        }
    ]
};

const OteriaProbabilitesQCMPage: React.FC = () => {
    return (
        <OteriaChapterTemplate
            sessionNumber={8}
            sessionTitle="Probabilités"
            description="Fondamentaux des probabilités : conditionnement, indépendance et formules de base."
            slug="probabilites"
            courseSlug="probabilites-introduction-cours"
            duration="3h"
            level="Débutant"
            activeSection="quiz"
            previousSession={{ slug: 'denombrement-paradoxes', title: 'Dénombrement' }}
            nextSession={{ slug: 'variables-aleatoires', title: 'Variables Aléatoires' }}
        >
            <OteriaQCM
                questions={qcmData.questions}
                title={qcmData.title}
                qcmId="oteria-probabilites"
            />
        </OteriaChapterTemplate>
    );
};

export default OteriaProbabilitesQCMPage;
