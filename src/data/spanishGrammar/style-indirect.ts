import type { SpanishGrammarChapterContent } from './types';

// Chapitre 14 — Style Indirect (discours rapporté).
export const content: SpanishGrammarChapterContent = {
  slug: 'style-indirect',
  title: 'Style Indirect',
  chapterNumber: 14,
  quizTitle: 'Quiz — Style Indirect',
  quizQuestions: [
    {
      id: 1,
      question: "Discours direct : « Estoy cansado », dijo Juan. Au style indirect au passé : « Juan dijo que ___ cansado. »",
      options: [
        { id: 'a', text: 'está', correct: false },
        { id: 'b', text: 'estaba', correct: true },
        { id: 'c', text: 'estuvo', correct: false },
        { id: 'd', text: 'estaría', correct: false },
      ],
      explanation:
        "Verbe introducteur au passé (dijo) : le présent du discours direct passe à l'imparfait. estoy → estaba. Erreur classique du correcteur : laisser « está ».",
    },
    {
      id: 2,
      question: "« Vendré mañana », prometió. Au style indirect : « Prometió que ___ al día siguiente. »",
      options: [
        { id: 'a', text: 'vendrá', correct: false },
        { id: 'b', text: 'viene', correct: false },
        { id: 'c', text: 'vendría', correct: true },
        { id: 'd', text: 'vino', correct: false },
      ],
      explanation:
        "Concordance des temps : le futur (vendré) devient conditionnel (vendría) après un introducteur au passé. Le déictique « mañana » se transpose en « al día siguiente ».",
    },
    {
      id: 3,
      question: "Quel verbe introducteur impose le subjonctif dans la subordonnée (ordre rapporté) ?",
      options: [
        { id: 'a', text: 'decir que (affirmation)', correct: false },
        { id: 'b', text: 'pedir que', correct: true },
        { id: 'c', text: 'contar que', correct: false },
        { id: 'd', text: 'afirmar que', correct: false },
      ],
      explanation:
        "« Pedir que », « rogar que », « ordenar que » rapportent un ordre ou une demande : ils déclenchent le subjonctif. « Decir que » est ambigu : indicatif s'il rapporte une affirmation, subjonctif s'il rapporte un ordre.",
    },
    {
      id: 4,
      question: "Ordre direct : « ¡Ven aquí! », me dijo. Au style indirect au passé : « Me dijo que ___ allí. »",
      options: [
        { id: 'a', text: 'venga', correct: false },
        { id: 'b', text: 'vengo', correct: false },
        { id: 'c', text: 'viniera', correct: true },
        { id: 'd', text: 'venía', correct: false },
      ],
      explanation:
        "Un impératif rapporté après un introducteur au passé devient imparfait du subjonctif : ven → viniera. Le déictique « aquí » devient « allí ».",
    },
    {
      id: 5,
      question: "Question directe : « ¿Dónde vives? », me preguntó. Au style indirect : « Me preguntó dónde ___. »",
      options: [
        { id: 'a', text: 'vivía', correct: true },
        { id: 'b', text: 'vives', correct: false },
        { id: 'c', text: 'vivas', correct: false },
        { id: 'd', text: 'vivirías', correct: false },
      ],
      explanation:
        "Interrogation indirecte partielle : on garde le mot interrogatif (dónde, avec accent), pas de point d'interrogation, et concordance des temps : vives → vivía.",
    },
    {
      id: 6,
      question: "Question fermée : « ¿Tienes hambre? », me preguntó. Au style indirect : « Me preguntó ___ tenía hambre. »",
      options: [
        { id: 'a', text: 'que', correct: false },
        { id: 'b', text: 'si', correct: true },
        { id: 'c', text: 'qué', correct: false },
        { id: 'd', text: 'cuál', correct: false },
      ],
      explanation:
        "Une question totale (réponse oui/non) se rapporte avec « si » (= « si » conditionnel/interrogatif). Piège : ne pas confondre avec « qué » (interrogation partielle).",
    },
    {
      id: 7,
      question: "« Este libro es mío », dijo ella. Au style indirect au passé : « Dijo que ___ libro era suyo. »",
      options: [
        { id: 'a', text: 'este', correct: false },
        { id: 'b', text: 'ese', correct: false },
        { id: 'c', text: 'aquel', correct: true },
        { id: 'd', text: 'el', correct: false },
      ],
      explanation:
        "Transposition des déictiques et possessifs : este → aquel, mío → suyo (changement de locuteur). « era suyo » avec concordance (es → era).",
    },
    {
      id: 8,
      question: "« Te traje un regalo », me dijo. Au style indirect : « Me dijo que me ___ un regalo. »",
      options: [
        { id: 'a', text: 'trajo', correct: false },
        { id: 'b', text: 'había traído', correct: true },
        { id: 'c', text: 'traía', correct: false },
        { id: 'd', text: 'traería', correct: false },
      ],
      explanation:
        "Le passé simple (traje) devient plus-que-parfait (había traído) après un introducteur au passé. Noter aussi le verbe de mouvement : « traer » deviendrait « llevar » selon le point de vue du rapporteur.",
    },
    {
      id: 9,
      question: "« Hoy no puedo », dijo Ana ayer. Au style indirect : « Ana dijo que ___ no podía. »",
      options: [
        { id: 'a', text: 'hoy', correct: false },
        { id: 'b', text: 'aquel día', correct: true },
        { id: 'c', text: 'mañana', correct: false },
        { id: 'd', text: 'ahora', correct: false },
      ],
      explanation:
        "Transposition des déictiques temporels : hoy → aquel día, ahora → entonces, ayer → el día anterior, mañana → al día siguiente. Concordance : puedo → podía.",
    },
    {
      id: 10,
      question: "Quelle phrase au style indirect est correcte ?",
      options: [
        { id: 'a', text: 'Me preguntó que si quería café.', correct: false },
        { id: 'b', text: 'Me preguntó si quería café.', correct: true },
        { id: 'c', text: 'Me preguntó si quiero café.', correct: false },
        { id: 'd', text: 'Me preguntó que quería café.', correct: false },
      ],
      explanation:
        "Question fermée rapportée : « preguntar si » sans « que » devant « si », et concordance des temps (quiero → quería). « Me preguntó que si » est un calque fautif sanctionné.",
    },
  ],
  flashcards: [
    { id: 1, category: 'Concordance', front: "Style indirect : présent du discours direct + introducteur au passé → ?", back: "Imparfait. « Estoy cansado » → Dijo que estaba cansado.", hint: 'estoy → estaba' },
    { id: 2, category: 'Concordance', front: "Passé simple / passé composé + introducteur au passé → ?", back: "Plus-que-parfait. « Llegué tarde » → Dijo que había llegado tarde." },
    { id: 3, category: 'Concordance', front: "Futur du discours direct + introducteur au passé → ?", back: "Conditionnel. « Vendré » → Prometió que vendría." },
    { id: 4, category: 'Concordance', front: "Impératif rapporté + introducteur au passé → ?", back: "Imparfait du subjonctif. « ¡Ven! » → Me dijo que viniera." },
    { id: 5, category: 'Introducteurs', front: "« Pedir que », « ordenar que », « rogar que » + que → ?", back: "Subjonctif (ordre / demande rapportés) : Me pidió que viniera pronto." },
    { id: 6, category: 'Introducteurs', front: "« Decir que » : indicatif ou subjonctif ?", back: "Indicatif s'il rapporte une affirmation (Dijo que venía) ; subjonctif s'il rapporte un ordre (Dijo que viniera)." },
    { id: 7, category: 'Interrogation', front: "Rapporter une question fermée (réponse oui/non) ?", back: "« preguntar si » (sans « que ») : Me preguntó si tenía hambre." },
    { id: 8, category: 'Interrogation', front: "Rapporter une question partielle (qué, dónde, cuándo…) ?", back: "On garde le mot interrogatif accentué, pas de « ¿? » : Me preguntó dónde vivía." },
    { id: 9, category: 'Déictiques', front: "Transposition des déictiques temporels au passé ?", back: "hoy → aquel día ; ahora → entonces ; ayer → el día anterior ; mañana → al día siguiente." },
    { id: 10, category: 'Déictiques', front: "Transposition des déictiques spatiaux et démonstratifs ?", back: "aquí → allí ; este → aquel ; venir → ir ; traer → llevar." },
    { id: 11, category: 'Personnes', front: "Transposition des personnes et possessifs ?", back: "Le locuteur change : yo → él/ella, mío → suyo. « Es mío » → Dijo que era suyo." },
    { id: 12, category: 'Pièges', front: "Erreur fréquente sanctionnée par le correcteur ?", back: "« Me preguntó que si… » (calque) au lieu de « Me preguntó si… » ; et oublier la concordance des temps." },
  ],
};
