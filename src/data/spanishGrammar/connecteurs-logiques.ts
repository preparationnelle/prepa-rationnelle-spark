import type { SpanishGrammarChapterContent } from './types';

// Chapitre 19 — Connecteurs Logiques. Quiz + flashcards niveau prépa ECG.
export const content: SpanishGrammarChapterContent = {
  slug: 'connecteurs-logiques',
  title: 'Connecteurs Logiques',
  chapterNumber: 19,
  quizTitle: 'Quiz — Connecteurs Logiques',
  quizQuestions: [
    {
      id: 1,
      question: "Quel connecteur exprime l'addition (« de plus, en outre ») ?",
      options: [
        { id: 'a', text: 'sin embargo', correct: false },
        { id: 'b', text: 'además', correct: true },
        { id: 'c', text: 'porque', correct: false },
        { id: 'd', text: 'es decir', correct: false },
      ],
      explanation:
        "« Además » (ainsi qu'« asimismo », « por otra parte ») ajoute un argument. « Sin embargo » marque l'opposition, « porque » la cause, « es decir » la reformulation.",
    },
    {
      id: 2,
      question: "Quel connecteur de cause ne peut PAS se placer en tête de phrase ?",
      options: [
        { id: 'a', text: 'porque', correct: true },
        { id: 'b', text: 'ya que', correct: false },
        { id: 'c', text: 'puesto que', correct: false },
        { id: 'd', text: 'dado que', correct: false },
      ],
      explanation:
        "« Porque » introduit une cause toujours après la principale. « Ya que », « puesto que », « dado que » et « como » peuvent, eux, ouvrir la phrase. Erreur fréquente à l'écrit.",
    },
    {
      id: 3,
      question: "Comment introduire une cause par un groupe nominal (« en raison de la crise ») ?",
      options: [
        { id: 'a', text: 'porque la crisis', correct: false },
        { id: 'b', text: 'debido a la crisis', correct: true },
        { id: 'c', text: 'así que la crisis', correct: false },
        { id: 'd', text: 'aunque la crisis', correct: false },
      ],
      explanation:
        "« Debido a + nom » (= en raison de) introduit une cause nominale. « Porque » exige un verbe conjugué : on ne dit pas « porque la crisis ».",
    },
    {
      id: 4,
      question: "Quel connecteur exprime la conséquence (« par conséquent ») ?",
      options: [
        { id: 'a', text: 'puesto que', correct: false },
        { id: 'b', text: 'a pesar de', correct: false },
        { id: 'c', text: 'por (lo) tanto', correct: true },
        { id: 'd', text: 'siempre que', correct: false },
      ],
      explanation:
        "« Por (lo) tanto », « por consiguiente », « así que », « de modo que » expriment la conséquence. « Puesto que » est causal, « a pesar de » concessif.",
    },
    {
      id: 5,
      question: "« Aunque llueve, salgo » : pourquoi l'indicatif (llueve) ?",
      options: [
        { id: 'a', text: "Parce qu'« aunque » exige toujours l'indicatif", correct: false },
        { id: 'b', text: "Parce que le fait est réel / constaté (il pleut effectivement)", correct: true },
        { id: 'c', text: "Parce que la phrase est négative", correct: false },
        { id: 'd', text: "Parce qu'« aunque » est un connecteur de cause", correct: false },
      ],
      explanation:
        "« Aunque + indicatif » présente un fait réel et avéré (= bien que / même si, c'est le cas). « Aunque + subjonctif » présente une concession hypothétique : Aunque llueva, saldré (même s'il pleuvait).",
    },
    {
      id: 6,
      question: "Quel connecteur d'opposition est suivi d'un nom ou d'un infinitif ?",
      options: [
        { id: 'a', text: 'sin embargo', correct: false },
        { id: 'b', text: 'no obstante', correct: false },
        { id: 'c', text: 'a pesar de', correct: true },
        { id: 'd', text: 'aunque', correct: false },
      ],
      explanation:
        "« A pesar de / pese a + nom ou infinitif » (= malgré) : A pesar de la lluvia, salimos. « Sin embargo » et « no obstante » relient deux propositions ; « aunque » est suivi d'un verbe conjugué.",
    },
    {
      id: 7,
      question: "Complétez : « Te lo explico ___ lo entiendas. » (pour que tu comprennes)",
      options: [
        { id: 'a', text: 'para que', correct: true },
        { id: 'b', text: 'porque', correct: false },
        { id: 'c', text: 'así que', correct: false },
        { id: 'd', text: 'puesto que', correct: false },
      ],
      explanation:
        "Le but s'exprime par « para que / a fin de que + SUBJONCTIF » (entiendas). Piège : ne pas confondre « para que » (but) avec « porque » (cause + indicatif).",
    },
    {
      id: 8,
      question: "Quel connecteur de condition est suivi du subjonctif ?",
      options: [
        { id: 'a', text: 'porque', correct: false },
        { id: 'b', text: 'siempre que', correct: true },
        { id: 'c', text: 'por lo tanto', correct: false },
        { id: 'd', text: 'asimismo', correct: false },
      ],
      explanation:
        "« Siempre que » et « con tal de que » (= pourvu que, à condition que) sont suivis du SUBJONCTIF : Te ayudo siempre que me lo pidas. « Siempre que + indicatif » signifierait « chaque fois que ».",
    },
    {
      id: 9,
      question: "Quel connecteur sert à reformuler / expliciter (« c'est-à-dire ») ?",
      options: [
        { id: 'a', text: 'por ejemplo', correct: false },
        { id: 'b', text: 'es decir', correct: true },
        { id: 'c', text: 'sin embargo', correct: false },
        { id: 'd', text: 'además', correct: false },
      ],
      explanation:
        "« Es decir » et « o sea » reformulent (= c'est-à-dire, autrement dit). « Por ejemplo » sert à l'illustration, « sin embargo » à l'opposition.",
    },
    {
      id: 10,
      question: "Quel groupe convient pour conclure une synthèse / dissertation ?",
      options: [
        { id: 'a', text: 'por otra parte / asimismo', correct: false },
        { id: 'b', text: 'en definitiva / en resumen / en conclusión', correct: true },
        { id: 'c', text: 'debido a / dado que', correct: false },
        { id: 'd', text: 'con tal de que / siempre que', correct: false },
      ],
      explanation:
        "Pour conclure : « en definitiva », « en resumen », « en conclusión », « para concluir ». Ces connecteurs de clôture sont très valorisés à l'épreuve écrite d'espagnol ECG.",
    },
  ],
  flashcards: [
    { id: 1, category: 'Addition', front: "Connecteurs d'addition (« de plus, par ailleurs ») ?", back: "además, asimismo, por otra parte, igualmente : Además, conviene precisar que…", hint: 'enrichir un argument' },
    { id: 2, category: 'Cause', front: "Principaux connecteurs de cause ?", back: "porque, ya que, puesto que, dado que, como, debido a (+ nom). « Porque » jamais en tête de phrase." },
    { id: 3, category: 'Cause', front: "Introduire une cause par un nom (« en raison de ») ?", back: "debido a / a causa de + nom : Debido a la crisis, bajó el consumo." },
    { id: 4, category: 'Conséquence', front: "Connecteurs de conséquence (« donc, par conséquent ») ?", back: "por (lo) tanto, por consiguiente, así que, de modo que, de ahí que : Llovía, así que nos quedamos." },
    { id: 5, category: 'Opposition', front: "Opposition entre deux propositions (« cependant ») ?", back: "sin embargo, no obstante, ahora bien : Es caro; sin embargo, lo compraré." },
    { id: 6, category: 'Concession', front: "« aunque » + indicatif vs + subjonctif ?", back: "+ indicatif = fait réel (Aunque llueve, salgo) ; + subjonctif = concession hypothétique (Aunque llueva, saldré)." },
    { id: 7, category: 'Concession', front: "« Malgré + nom / infinitif » ?", back: "a pesar de / pese a + nom ou infinitif : A pesar de los obstáculos, lo logró." },
    { id: 8, category: 'But', front: "Exprimer le but (« afin que ») ?", back: "para que / a fin de que + SUBJONCTIF : Lo repito para que lo entiendan.", hint: 'but → subjonctif' },
    { id: 9, category: 'Condition', front: "Condition restrictive (« pourvu que, à condition que ») ?", back: "siempre que / con tal de que / a condición de que + SUBJONCTIF : Te ayudo con tal de que estudies." },
    { id: 10, category: 'Reformulation', front: "Reformuler / expliciter (« c'est-à-dire ») ?", back: "es decir, o sea, dicho de otro modo, en otras palabras : Es decir, la tesis es discutible." },
    { id: 11, category: 'Exemple', front: "Introduire un exemple (« par exemple, comme ») ?", back: "por ejemplo, tal como, como muestra, a modo de ejemplo : Por ejemplo, el caso español lo prueba." },
    { id: 12, category: 'Conclusion', front: "Connecteurs de conclusion / synthèse ?", back: "en definitiva, en resumen, en conclusión, para concluir, en suma : En definitiva, podemos afirmar que…" },
  ],
};
