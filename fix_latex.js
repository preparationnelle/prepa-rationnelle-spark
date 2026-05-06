const fs = require('fs');
const file = 'src/pages/formation/Python/PythonProbabilitesExercicesPage.tsx';
let content = fs.readFileSync(file, 'utf8');

const replacements = [
    {
        old: "\\text{Simuler } X = \\text{ rang d'obtention de deux Pile consécutifs au pile ou face.}\\n\\n\\text{On lance une pièce de monnaie jusqu'à obtenir deux Pile consécutifs. On note } X \\text{ le rang d'obtention de ce deuxième Pile consécutif.}",
        new: "Simuler $X$ = rang d'obtention de deux Pile consécutifs au pile ou face.\\n\\nOn lance une pièce de monnaie jusqu'à obtenir deux Pile consécutifs. On note $X$ le rang d'obtention de ce deuxième Pile consécutif."
    },
    {
        old: "\\text{On dispose d'une urne contenant initialement une boule rouge et une boule verte. À chaque étape, on tire une boule au hasard, on la remet dans l'urne et on ajoute une boule de la même couleur.}\\n\\n\\text{Simuler ce processus sur } n \\text{ étapes et analyser l'évolution de la composition de l'urne.}",
        new: "On dispose d'une urne contenant initialement une boule rouge et une boule verte. À chaque étape, on tire une boule au hasard, on la remet dans l'urne et on ajoute une boule de la même couleur.\\n\\nSimuler ce processus sur $n$ étapes et analyser l'évolution de la composition de l'urne."
    },
    {
        old: "\\text{Une urne contient } 3 \\text{ boules rouges et } 7 \\text{ boules vertes. On tire sans remise jusqu'à obtenir la première boule rouge.}\\n\\n\\bullet \\, Z = \\text{ rang d'apparition de la première boule rouge}\\n\\n\\bullet \\, Y_n = \\text{ nombre de boules vertes tirées avant la première rouge}",
        new: "Une urne contient $3$ boules rouges et $7$ boules vertes. On tire sans remise jusqu'à obtenir la première boule rouge.\\n\\n$\\bullet$ $Z$ = rang d'apparition de la première boule rouge\\n\\n$\\bullet$ $Y_n$ = nombre de boules vertes tirées avant la première rouge"
    },
    {
        old: "\\text{Écrire une fonction qui simule la réalisation d'un événement } A \\text{ de probabilité } p.\\n\\n\\text{La fonction doit retourner True si l'événement se réalise, False sinon.}",
        new: "Écrire une fonction qui simule la réalisation d'un événement $A$ de probabilité $p$.\\n\\nLa fonction doit retourner True si l'événement se réalise, False sinon."
    },
    {
        old: "\\text{Un animal gravit un escalier de } n \\text{ marches. À chaque bond, il monte soit } 1 \\text{ marche, soit } 2 \\text{ marches (avec probabilité } \\frac{1}{2} \\text{ pour chaque).}\\n\\n\\text{Simuler ce processus et déterminer le nombre de bonds nécessaires pour atteindre la } n\\text{-ième marche.}",
        new: "Un animal gravit un escalier de $n$ marches. À chaque bond, il monte soit $1$ marche, soit $2$ marches (avec probabilité $\\frac{1}{2}$ pour chaque).\\n\\nSimuler ce processus et déterminer le nombre de bonds nécessaires pour atteindre la $n$-ième marche."
    },
    {
        old: "X \\text{ et } Y \\text{ suivent des lois géométriques de paramètres respectifs } p_1 \\text{ et } p_2. \\\\ \\text{Estimer } P(X = 2Y) \\text{ par méthode de Monte-Carlo pour } p_1 = 0.3 \\text{ et } p_2 = 0.5.",
        new: "$X$ et $Y$ suivent des lois géométriques de paramètres respectifs $p_1$ et $p_2$.\\n\\nEstimer $P(X = 2Y)$ par méthode de Monte-Carlo pour $p_1 = 0.3$ et $p_2 = 0.5$."
    }
];

let changedCount = 0;
for (const r of replacements) {
    if (content.includes(r.old)) {
        content = content.replace(r.old, r.new);
        changedCount++;
    }
}
console.log(`Replaced ${changedCount} patterns.`);
fs.writeFileSync(file, content, 'utf8');
