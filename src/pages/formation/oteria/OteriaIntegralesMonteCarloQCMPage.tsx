import React from 'react';
import { OteriaChapterTemplate } from '@/components/formation/OteriaChapterTemplate';
import { OteriaQCM } from '@/components/formation/OteriaQCM';

const qcmData = {
    title: "Intégrales & Méthodes de Monte Carlo — QCM",
    questions: [
        {
            id: 1,
            question: "Quelle est la définition géométrique de l'intégrale $\\int_a^b f(x)dx$ pour $f$ positive ?",
            options: [
                { id: "a", text: "La pente de la tangente", correct: false },
                { id: "b", text: "L'aire sous la courbe entre $a$ et $b$", correct: true },
                { id: "c", text: "La longueur de la courbe", correct: false },
                { id: "d", text: "Le volume de la courbe", correct: false }
            ],
            explanation: "L'intégrale correspond à l'aire algébrique délimitée par la courbe, l'axe des abscisses et les droites $x=a$ et $x=b$."
        },
        {
            id: 2,
            question: "Si $F$ est une primitive de $f$, alors $\\int_a^b f(x)dx$ vaut :",
            options: [
                { id: "a", text: "$F(b) + F(a)$", correct: false },
                { id: "b", text: "$F(b) - F(a)$", correct: true },
                { id: "c", text: "$f(b) - f(a)$", correct: false },
                { id: "d", text: "$F'(b) - F'(a)$", correct: false }
            ],
            explanation: "C'est le théorème fondamental de l'analyse."
        },
        {
            id: 3,
            question: "Quelle méthode permet d'approcher la valeur d'une intégrale en utilisant le hasard ?",
            options: [
                { id: "a", text: "Méthode des rectangles", correct: false },
                { id: "b", text: "Méthode de Monte Carlo", correct: true },
                { id: "c", text: "Méthode de Newton", correct: false },
                { id: "d", text: "Méthode des trapèzes", correct: false }
            ],
            explanation: "La méthode de Monte Carlo utilise des tirages aléatoires pour estimer l'aire, donc l'intégrale."
        },
        {
            id: 4,
            question: "Pour estimer $\\pi$ avec Monte Carlo, on tire des points dans un carré $[-1,1]^2$. Quelle proportion tombe dans le disque unitaire ?",
            options: [
                { id: "a", text: "$\\pi$", correct: false },
                { id: "b", text: "$\\pi/2$", correct: false },
                { id: "c", text: "$\\pi/4$", correct: true },
                { id: "d", text: "$1/\\pi$", correct: false }
            ],
            explanation: "L'aire du disque est $\\pi \\times 1^2 = \\pi$. L'aire du carré est $2 \\times 2 = 4$. Le ratio est $\\pi/4$."
        },
        {
            id: 5,
            question: "Quelle condition assure la convergence de l'estimateur de Monte Carlo ?",
            options: [
                { id: "a", text: "Nombre de tirages $N \\to \\infty$", correct: true },
                { id: "b", text: "$N$ est petit", correct: false },
                { id: "c", text: "La fonction est constante", correct: false },
                { id: "d", text: "L'intervalle est $[0,1]$", correct: false }
            ],
            explanation: "D'après la loi des grands nombres, la moyenne empirique converge vers l'espérance (l'intégrale) quand $N$ tend vers l'infini."
        },
        {
            id: 6,
            question: "Comment évolue la précision de la méthode de Monte Carlo avec $N$ ?",
            options: [
                { id: "a", text: "Proportionnelle à $N$", correct: false },
                { id: "b", text: "Proportionnelle à $1/N$", correct: false },
                { id: "c", text: "Proportionnelle à $1/\\sqrt{N}$", correct: true },
                { id: "d", text: "Exponentielle en $N$", correct: false }
            ],
            explanation: "L'écart-type de l'erreur décroît en $1/\\sqrt{N}$. Pour gagner une décimale, il faut multiplier $N$ par 100."
        },
        {
            id: 7,
            question: "Quelle fonction Python génère un nombre aléatoire uniforme sur $[0,1]$ ?",
            options: [
                { id: "a", text: "`random.uniform(0, 1)`", correct: false },
                { id: "b", text: "`random.random()`", correct: true },
                { id: "c", text: "`random.randint(0, 1)`", correct: false },
                { id: "d", text: "`np.arange(0, 1)`", correct: false }
            ],
            explanation: "`random.random()` (ou `np.random.rand()`) renvoie un float dans $[0, 1[$."
        },
        {
            id: 8,
            question: "Quelle est la primitive de $x^n$ (pour $n \\ne -1$) ?",
            options: [
                { id: "a", text: "$nx^{n-1}$", correct: false },
                { id: "b", text: "$\\frac{x^{n+1}}{n+1}$", correct: true },
                { id: "c", text: "$x^{n+1}$", correct: false },
                { id: "d", text: "$\\ln(x)$", correct: false }
            ],
            explanation: "La dérivée de $\\frac{x^{n+1}}{n+1}$ est $x^n$."
        },
        {
            id: 9,
            question: "Que vaut $\\int_0^1 e^x dx$ ?",
            options: [
                { id: "a", text: "$1$", correct: false },
                { id: "b", text: "$e$", correct: false },
                { id: "c", text: "$e - 1$", correct: true },
                { id: "d", text: "$0$", correct: false }
            ],
            explanation: "$[e^x]_0^1 = e^1 - e^0 = e - 1$."
        },
        {
            id: 10,
            question: "La méthode de Monte Carlo est-elle déterministe ?",
            options: [
                { id: "a", text: "Oui, elle donne toujours le même résultat", correct: false },
                { id: "b", text: "Non, le résultat dépend des tirages aléatoires", correct: true },
                { id: "c", text: "Seulement pour $N$ grand", correct: false },
                { id: "d", text: "Oui si la fonction est continue", correct: false }
            ],
            explanation: "Elle stochastique : deux exécutions donneront des résultats légèrement différents (sauf si on fixe la graine)."
        },
        {
            id: 11,
            question: "Quelle est la moyenne de la fonction `random()` sur un grand nombre de tirages ?",
            options: [
                { id: "a", text: "0.5", correct: true },
                { id: "b", text: "1", correct: false },
                { id: "c", text: "0", correct: false },
                { id: "d", text: "0.33", correct: false }
            ],
            explanation: "L'espérance d'une loi uniforme sur $[0,1]$ est $1/2$."
        },
        {
            id: 12,
            question: "Si on intègre une fonction impaire sur $[-a, a]$, le résultat est :",
            options: [
                { id: "a", text: "$2 \\int_0^a f(x)dx$", correct: false },
                { id: "b", text: "0", correct: true },
                { id: "c", text: "Infinie", correct: false },
                { id: "d", text: "Indéfini", correct: false }
            ],
            explanation: "Les aires positives et négatives se compensent exactement par symétrie."
        },
        {
            id: 13,
            question: "Quel théorème justifie l'approximation de Monte Carlo ?",
            options: [
                { id: "a", text: "Théorème de Thalès", correct: false },
                { id: "b", text: "Loi des grands nombres", correct: true },
                { id: "c", text: "Théorème de Pythagore", correct: false },
                { id: "d", text: "Théorème de Rolle", correct: false }
            ],
            explanation: "La moyenne empirique converge vers l'espérance mathématique (Loi Forte des Grands Nombres)."
        },
        {
            id: 14,
            question: "Pour calculer $\\int_a^b f(x) dx$ avec Monte Carlo, on approxime par :",
            options: [
                { id: "a", text: "$(b-a) \\times \\text{moyenne}(f(X_i))$", correct: true },
                { id: "b", text: "$\\text{moyenne}(f(X_i))$", correct: false },
                { id: "c", text: "$(b-a) \\times \\sum f(X_i)$", correct: false },
                { id: "d", text: "$\\sum f(X_i) / (b-a)$", correct: false }
            ],
            explanation: "L'intégrale est la valeur moyenne de la fonction multipliée par la largeur de l'intervalle."
        },
        {
            id: 15,
            question: "Quelle primitive est utilisée pour calculer l'aire d'un disque ?",
            options: [
                { id: "a", text: "$\\int \\sqrt{1-x^2} dx$", correct: true },
                { id: "b", text: "$\\int x^2 dx$", correct: false },
                { id: "c", text: "$\\int 1/x dx$", correct: false },
                { id: "d", text: "$\\int \\sin(x) dx$", correct: false }
            ],
            explanation: "L'équation du cercle $x^2+y^2=1$ donne $y = \\sqrt{1-x^2}$ pour la partie supérieure."
        }
    ]
};

const OteriaIntegralesMonteCarloQCMPage: React.FC = () => {
    return (
        <OteriaChapterTemplate
            sessionNumber={10}
            sessionTitle="Intégrales & Méthodes de Monte Carlo"
            description="Comprendre le lien entre intégrales et probabilités via la simulation."
            slug="integrales-monte-carlo"
            duration="3h"
            level="Avancé"
            activeSection="quiz"
            previousSession={{ slug: 'variables-aleatoires', title: 'Variables Aléatoires' }}
            nextSession={{ slug: 'matrices-markov', title: 'Matrices & Markov' }}
        >
            <OteriaQCM
                questions={qcmData.questions}
                title={qcmData.title}
                qcmId="oteria-integrales-monte-carlo"
            />
        </OteriaChapterTemplate>
    );
};

export default OteriaIntegralesMonteCarloQCMPage;
