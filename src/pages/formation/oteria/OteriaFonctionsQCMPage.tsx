import React from 'react';
import { OteriaChapterTemplate } from '@/components/formation/OteriaChapterTemplate';
import { OteriaQCM } from '@/components/formation/OteriaQCM';

// Données du QCM
const qcmData = {
  title: "Fonctions et Python — QCM",
  questions: [
    {
      id: 1,
      question: "Quelle fonction Python trace une courbe ?",
      options: [
        { id: "a", text: "`np.plot(x, y)`", correct: false },
        { id: "b", text: "`plt.plot(x, y)`", correct: true },
        { id: "c", text: "`matplotlib.draw(x, y)`", correct: false },
        { id: "d", text: "`np.draw(x, y)`", correct: false }
      ],
      explanation: "`plt.plot(x, y)` de `matplotlib.pyplot` trace une courbe."
    },
    {
      id: 2,
      question: "Quelle fonction crée un intervalle avec numpy ?",
      options: [
        { id: "a", text: "`np.range(a, b, n)`", correct: false },
        { id: "b", text: "`np.linspace(a, b, n)`", correct: true },
        { id: "c", text: "`np.interval(a, b, n)`", correct: false },
        { id: "d", text: "`np.create(a, b, n)`", correct: false }
      ],
      explanation: "`np.linspace(a, b, n)` crée n points uniformément répartis entre a et b."
    },
    {
      id: 3,
      question: "Comment calculer $e^x$ en Python ?",
      options: [
        { id: "a", text: "`np.power(e, x)`", correct: false },
        { id: "b", text: "`np.exp(x)`", correct: true },
        { id: "c", text: "`np.e ** x`", correct: false },
        { id: "d", text: "`np.exponent(x)`", correct: false }
      ],
      explanation: "`np.exp(x)` calcule l'exponentielle $e^x$."
    },
    {
      id: 4,
      question: "La constante $\\pi$ en numpy s'écrit :",
      options: [
        { id: "a", text: "`np.PI`", correct: false },
        { id: "b", text: "`np.pi`", correct: true },
        { id: "c", text: "`numpy.pi()`", correct: false },
        { id: "d", text: "`math.pi`", correct: false }
      ],
      explanation: "La constante $\\pi$ est accessible avec `np.pi` (ou `math.pi`)."
    },
    {
      id: 5,
      question: "Quelle fonction calcule le logarithme népérien ?",
      options: [
        { id: "a", text: "`np.ln(x)`", correct: false },
        { id: "b", text: "`np.log(x)`", correct: true },
        { id: "c", text: "`np.log10(x)`", correct: false },
        { id: "d", text: "`np.logarithm(x)`", correct: false }
      ],
      explanation: "`np.log(x)` calcule le logarithme népérien (ln)."
    },
    {
      id: 6,
      question: "Une fonction $f$ est paire si :",
      options: [
        { id: "a", text: "$f(-x) = -f(x)$", correct: false },
        { id: "b", text: "$f(-x) = f(x)$", correct: true },
        { id: "c", text: "$f(x+T) = f(x)$", correct: false },
        { id: "d", text: "$f(x) = x^2$", correct: false }
      ],
      explanation: "$f$ est paire si $f(-x) = f(x)$, la courbe est symétrique par rapport à l'axe des ordonnées."
    },
    {
      id: 7,
      question: "Une fonction $f$ est impaire si :",
      options: [
        { id: "a", text: "$f(-x) = f(x)$", correct: false },
        { id: "b", text: "$f(-x) = -f(x)$", correct: true },
        { id: "c", text: "$f(x) = -x$", correct: false },
        { id: "d", text: "$f(x+T) = f(x)$", correct: false }
      ],
      explanation: "$f$ est impaire si $f(-x) = -f(x)$, la courbe est symétrique par rapport à l'origine."
    },
    {
      id: 8,
      question: "Comment calculer la racine carrée $\\sqrt{x}$ en Python ?",
      options: [
        { id: "a", text: "`np.root(x)`", correct: false },
        { id: "b", text: "`np.sqrt(x)`", correct: true },
        { id: "c", text: "`np.square_root(x)`", correct: false },
        { id: "d", text: "`x ** 0.5`", correct: false }
      ],
      explanation: "`np.sqrt(x)` calcule $\\sqrt{x}$. (`x ** 0.5` fonctionne aussi)."
    },
    {
      id: 9,
      question: "La valeur de `np.floor(3.7)` est :",
      options: [
        { id: "a", text: "3", correct: false },
        { id: "b", text: "4", correct: false },
        { id: "c", text: "3.7", correct: false },
        { id: "d", text: "3.0", correct: true }
      ],
      explanation: "`np.floor(3.7)` retourne 3.0 (partie entière inférieure, float)."
    },
    {
      id: 10,
      question: "Le TVI affirme que si $f$ est continue sur $[a,b]$ :",
      options: [
        { id: "a", text: "$f$ est dérivable", correct: false },
        { id: "b", text: "Pour tout $\\lambda$ entre $f(a)$ et $f(b)$, $\\exists c, f(c) = \\lambda$", correct: true },
        { id: "c", text: "$f$ est constante", correct: false },
        { id: "d", text: "$f$ est monotone", correct: false }
      ],
      explanation: "Le TVI garantit que $f$ prend toutes les valeurs intermédiaires entre $f(a)$ et $f(b)$."
    },
    {
      id: 11,
      question: "Comment afficher une grille sur un graphique ?",
      options: [
        { id: "a", text: "`plt.show_grid()`", correct: false },
        { id: "b", text: "`plt.grid(True)`", correct: true },
        { id: "c", text: "`plt.display_grid()`", correct: false },
        { id: "d", text: "`plt.enable_grid()`", correct: false }
      ],
      explanation: "`plt.grid(True)` active la grille."
    },
    {
      id: 12,
      question: "L'inégalité triangulaire pour la valeur absolue est :",
      options: [
        { id: "a", text: "$|x+y| = |x| + |y|$", correct: false },
        { id: "b", text: "$|x+y| \\ge |x| + |y|$", correct: false },
        { id: "c", text: "$|x+y| \\le |x| + |y|$", correct: true },
        { id: "d", text: "$|x+y| \\le |x| - |y|$", correct: false }
      ],
      explanation: "$\\forall x,y \\in \\mathbb{R}, |x+y| \\le |x| + |y|$."
    },
    {
      id: 13,
      question: "Quelle fonction calcule le cosinus en Python ?",
      options: [
        { id: "a", text: "`np.cosine(x)`", correct: false },
        { id: "b", text: "`np.cos(x)`", correct: true },
        { id: "c", text: "`math.cos(x)`", correct: false },
        { id: "d", text: "`np.trig_cos(x)`", correct: false }
      ],
      explanation: "`np.cos(x)` calcule le cosinus (en radians)."
    },
    {
      id: 14,
      question: "Une application $f:E\\to F$ est injective si :",
      options: [
        { id: "a", text: "$\\forall y\\in F, \\exists x\\in E, f(x)=y$", correct: false },
        { id: "b", text: "$f(x_1)=f(x_2) \\Rightarrow x_1=x_2$", correct: true },
        { id: "c", text: "$\\forall x\\in E, f(x)\\in F$", correct: false },
        { id: "d", text: "$f$ est continue", correct: false }
      ],
      explanation: "L'injectivité signifie que tout élément de l'arrivée a au plus un antécédent."
    },
    {
      id: 15,
      question: "Comment ajouter un titre à un graphique ?",
      options: [
        { id: "a", text: "`plt.name('title')`", correct: false },
        { id: "b", text: "`plt.title('title')`", correct: true },
        { id: "c", text: "`plt.header('title')`", correct: false },
        { id: "d", text: "`plt.set_title('title')`", correct: false }
      ],
      explanation: "`plt.title(...)` définit le titre."
    },
    {
      id: 16,
      question: "Une bijection est :",
      options: [
        { id: "a", text: "Une injection seulement", correct: false },
        { id: "b", text: "Une surjection seulement", correct: false },
        { id: "c", text: "Une injection ET une surjection", correct: true },
        { id: "d", text: "Une fonction continue", correct: false }
      ],
      explanation: "Bijective = Injective + Surjective."
    },
    {
      id: 17,
      question: "La valeur de `np.abs(-5.3)` est :",
      options: [
        { id: "a", text: "-5.3", correct: false },
        { id: "b", text: "5.3", correct: true },
        { id: "c", text: "5", correct: false },
        { id: "d", text: "-5", correct: false }
      ],
      explanation: "`np.abs` retourne la valeur absolue."
    },
    {
      id: 18,
      question: "Quelle loi de Morgan est correcte ?",
      options: [
        { id: "a", text: "$\\overline{A \\cap B} = \\overline{A} \\cap \\overline{B}$", correct: false },
        { id: "b", text: "$\\overline{A \\cap B} = \\overline{A} \\cup \\overline{B}$", correct: true },
        { id: "c", text: "$\\overline{A \\cup B} = \\overline{A} \\cup \\overline{B}$", correct: false },
        { id: "d", text: "$\\overline{A \\cap B} = A \\cup B$", correct: false }
      ],
      explanation: "Le complémentaire de l'intersection est l'union des complémentaires."
    },
    {
      id: 19,
      question: "Comment calculer $\\sin(\\pi/2)$ en Python ?",
      options: [
        { id: "a", text: "`np.sin(90)`", correct: false },
        { id: "b", text: "`np.sin(np.pi/2)`", correct: true },
        { id: "c", text: "`np.sin(180)`", correct: false },
        { id: "d", text: "`np.sine(np.pi/2)`", correct: false }
      ],
      explanation: "Les fonctions trigonométriques utilisent des radians."
    },
    {
      id: 20,
      question: "Théorème de la bijection monotone : si $f$ est continue et strictement monotone sur $I$ :",
      options: [
        { id: "a", text: "$f$ est dérivable", correct: false },
        { id: "b", text: "$f$ est bijective de $I$ sur $f(I)$", correct: true },
        { id: "c", text: "$f$ est périodique", correct: false },
        { id: "d", text: "$f$ est constante", correct: false }
      ],
      explanation: "Elle réalise une bijection de l'intervalle de départ vers l'intervalle image."
    }
  ]
};

const OteriaFonctionsQCMPage: React.FC = () => {
  return (
    <OteriaChapterTemplate
      sessionNumber={5}
      sessionTitle="Fonctions de la variable réelle"
      description="Testez vos connaissances sur les fonctions, limites, continuité et Python (NumPy/Matplotlib)."
      slug="fonctions-variable-reelle"
      duration="2h"
      level="Débutant"
      activeSection="quiz"
      previousSession={{ slug: 'suites-numeriques', title: 'Suites numériques' }}
      nextSession={{ slug: 'polynomes-approximation', title: 'Polynômes et approximation' }}
    >
      <OteriaQCM
        questions={qcmData.questions}
        title={qcmData.title}
        qcmId="oteria-fonctions-qcm"
      />
    </OteriaChapterTemplate>
  );
};

export default OteriaFonctionsQCMPage;
