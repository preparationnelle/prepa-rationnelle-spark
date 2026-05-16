import type { SpanishGrammarChapterContent } from './types';

// Chapitre 13 — Conditionnelles & Hypothèse.
export const content: SpanishGrammarChapterContent = {
  slug: 'conditionnelles',
  title: 'Conditionnelles & Hypothèse',
  chapterNumber: 13,
  quizTitle: 'Quiz — Conditionnelles & Hypothèse',
  quizQuestions: [
    {
      id: 1,
      question: "Hypothèse réelle : « Si ___ tiempo, te ayudo. » (tener)",
      options: [
        { id: 'a', text: 'tienes', correct: true },
        { id: 'b', text: 'tuvieras', correct: false },
        { id: 'c', text: 'tendrías', correct: false },
        { id: 'd', text: 'tengas', correct: false },
      ],
      explanation:
        "Hypothèse réelle (type 1) : si + présent de l'indicatif → présent / futur / impératif. Si tienes tiempo, te ayudo. Jamais de subjonctif présent après « si ».",
    },
    {
      id: 2,
      question: "Hypothèse irréelle du présent : « Si ___ tiempo, viajaría más. » (tener)",
      options: [
        { id: 'a', text: 'tengo', correct: false },
        { id: 'b', text: 'tendría', correct: false },
        { id: 'c', text: 'tuviera', correct: true },
        { id: 'd', text: 'tenga', correct: false },
      ],
      explanation:
        "Type 2 : si + imparfait du subjonctif → conditionnel. Si tuviera tiempo, viajaría más. RÈGLE D'OR : jamais « si » + conditionnel, jamais « si » + présent du subjonctif.",
    },
    {
      id: 3,
      question: "Hypothèse irréelle du passé : « Si lo ___ , habría venido. » (saber)",
      options: [
        { id: 'a', text: 'sabía', correct: false },
        { id: 'b', text: 'supiera', correct: false },
        { id: 'c', text: 'hubiera sabido', correct: true },
        { id: 'd', text: 'habría sabido', correct: false },
      ],
      explanation:
        "Type 3 : si + plus-que-parfait du subjonctif → conditionnel passé. Si lo hubiera sabido, habría venido. La conséquence peut aussi être « habría ido / hubiera ido ».",
    },
    {
      id: 4,
      question: "Quelle phrase est INTERDITE en espagnol ?",
      options: [
        { id: 'a', text: 'Si tuviera dinero, viajaría.', correct: false },
        { id: 'b', text: 'Si tendría dinero, viajaría.', correct: true },
        { id: 'c', text: 'Si tengo dinero, viajo.', correct: false },
        { id: 'd', text: 'Si hubiera tenido dinero, habría viajado.', correct: false },
      ],
      explanation:
        "RÈGLE D'OR absolue : jamais « si » + conditionnel (si tendría). La proposition introduite par « si » ne contient JAMAIS de conditionnel ni de présent du subjonctif. C'est la faute la plus sanctionnée.",
    },
    {
      id: 5,
      question: "« Habla ___ lo supiera todo. » (como si — comme s'il savait tout)",
      options: [
        { id: 'a', text: 'como si', correct: true },
        { id: 'b', text: 'como', correct: false },
        { id: 'c', text: 'como que', correct: false },
        { id: 'd', text: 'si como', correct: false },
      ],
      explanation:
        "« como si » introduit une comparaison hypothétique et se construit TOUJOURS avec l'imparfait du subjonctif (présent) ou le plus-que-parfait du subjonctif (passé) : Habla como si lo supiera todo.",
    },
    {
      id: 6,
      question: "« Se comporta como si no ___ nada. » (pasar — comme si rien ne s'était passé)",
      options: [
        { id: 'a', text: 'ha pasado', correct: false },
        { id: 'b', text: 'pasara', correct: false },
        { id: 'c', text: 'hubiera pasado', correct: true },
        { id: 'd', text: 'pasaría', correct: false },
      ],
      explanation:
        "« como si » + antériorité → plus-que-parfait du subjonctif : como si no hubiera pasado nada. Jamais d'indicatif ni de conditionnel après « como si ».",
    },
    {
      id: 7,
      question: "« ___ acaso llueve, lleva el paraguas. » (au cas où)",
      options: [
        { id: 'a', text: 'Por si', correct: true },
        { id: 'b', text: 'Como si', correct: false },
        { id: 'c', text: 'Si por', correct: false },
        { id: 'd', text: 'A si', correct: false },
      ],
      explanation:
        "« por si (acaso) » = au cas où ; il se construit avec l'indicatif présent (ou l'imparfait du subjonctif pour l'éventualité plus lointaine) : Lleva el paraguas por si llueve / por si lloviera.",
    },
    {
      id: 8,
      question: "« ___ haberlo sabido, no habría venido. » (hypothèse exprimée par « de » + infinitif)",
      options: [
        { id: 'a', text: 'Si', correct: false },
        { id: 'b', text: 'De', correct: true },
        { id: 'c', text: 'Como', correct: false },
        { id: 'd', text: 'Por', correct: false },
      ],
      explanation:
        "« de + infinitif » exprime une hypothèse équivalant à une conditionnelle : De haberlo sabido = Si lo hubiera sabido. Tournure soutenue très valorisée à l'écrit.",
    },
    {
      id: 9,
      question: "« ___ , no diría eso. » (à ta place : tournure « yo en tu lugar »)",
      options: [
        { id: 'a', text: 'Yo en tu lugar', correct: true },
        { id: 'b', text: 'Yo en tuyo lugar', correct: false },
        { id: 'c', text: 'A tu lugar yo', correct: false },
        { id: 'd', text: 'Yo a tu sitio', correct: false },
      ],
      explanation:
        "« Yo en tu lugar » ou « Yo que tú » expriment une hypothèse implicite + conditionnel : Yo en tu lugar / Yo que tú, no diría eso (= Si yo fuera tú, no diría eso).",
    },
    {
      id: 10,
      question: "Conséquence d'une hypothèse irréelle du passé : « Si hubiera estudiado, ___ el examen. » (aprobar)",
      options: [
        { id: 'a', text: 'aprobaría', correct: false },
        { id: 'b', text: 'apruebo', correct: false },
        { id: 'c', text: 'habría aprobado', correct: true },
        { id: 'd', text: 'aprobara', correct: false },
      ],
      explanation:
        "Type 3 : si + plus-que-parfait du subjonctif → conditionnel passé (ou plus-que-parfait du subjonctif). Si hubiera estudiado, habría aprobado (variante admise : hubiera aprobado).",
    },
  ],
  flashcards: [
    { id: 1, category: 'Type 1 — réel', front: "Hypothèse réelle : structure ?", back: "Si + présent de l'indicatif → présent / futur / impératif. Si tienes tiempo, ven. Si llueve, no saldremos.", hint: 'si + présent indicatif' },
    { id: 2, category: 'Type 2 — irréel présent', front: "Hypothèse irréelle du présent : structure ?", back: "Si + imparfait du subjonctif → conditionnel. Si tuviera tiempo, iría." },
    { id: 3, category: 'Type 3 — irréel passé', front: "Hypothèse irréelle du passé : structure ?", back: "Si + plus-que-parfait du subjonctif → conditionnel passé. Si hubiera sabido, habría venido (variante : hubiera ido)." },
    { id: 4, category: 'Règle d\'or', front: "Les deux constructions INTERDITES après « si »", back: "Jamais « si » + conditionnel (PAS si tendría) ni « si » + présent du subjonctif (PAS si tenga). C'est la faute la plus sanctionnée." },
    { id: 5, category: 'Conséquence', front: "Conséquence du type 3 : conditionnel passé exact", back: "habría + participe : Si hubiera sabido, habría venido. La langue admet aussi hubiera + participe (hubiera venido)." },
    { id: 6, category: 'Como si', front: "« como si » : quel mode toujours ?", back: "Toujours le subjonctif : imparfait du subjonctif (simultané) ou plus-que-parfait du subjonctif (antérieur). Habla como si lo supiera todo." },
    { id: 7, category: 'Como si', front: "« como si » + action antérieure", back: "Plus-que-parfait du subjonctif : Actúa como si no hubiera pasado nada." },
    { id: 8, category: 'Por si', front: "« por si (acaso) » = au cas où", back: "Indicatif présent ou imparfait du subjonctif : Lleva dinero por si lo necesitas / por si lo necesitaras." },
    { id: 9, category: 'De + infinitif', front: "« de + infinitif » : valeur ?", back: "Hypothèse soutenue équivalant à « si » : De haberlo sabido = Si lo hubiera sabido. De tener tiempo, iría." },
    { id: 10, category: 'Tournures', front: "« Yo que tú » / « Yo en tu lugar »", back: "Hypothèse implicite + conditionnel : Yo que tú, no lo haría = Si yo fuera tú, no lo haría." },
    { id: 11, category: 'Imparfait subj.', front: "Former l'imparfait du subjonctif (pour les conditionnelles)", back: "3e pers. plur. du passé simple − -ron + -ra/-se : tuvieron → tuviera/tuviese ; fueron → fuera ; supieron → supiera." },
    { id: 12, category: 'Synthèse', front: "Mémo des 3 « si » en une ligne", back: "(1) Si tienes, ven. (2) Si tuvieras, irías. (3) Si hubieras tenido, habrías ido. Jamais « si » + conditionnel/subjonctif présent." },
  ],
};
