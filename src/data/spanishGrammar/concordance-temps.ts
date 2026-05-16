import type { SpanishGrammarChapterContent } from './types';

// Chapitre 12 — Concordance des Temps.
export const content: SpanishGrammarChapterContent = {
  slug: 'concordance-temps',
  title: 'Concordance des Temps',
  chapterNumber: 12,
  quizTitle: 'Quiz — Concordance des Temps',
  quizQuestions: [
    {
      id: 1,
      question: "« Quiero que ___ pronto. » (venir — principal au présent)",
      options: [
        { id: 'a', text: 'vienes', correct: false },
        { id: 'b', text: 'vengas', correct: true },
        { id: 'c', text: 'vinieras', correct: false },
        { id: 'd', text: 'vendrás', correct: false },
      ],
      explanation:
        "Axe du présent : principal au présent (quiero) + verbe de volonté → présent du subjonctif dans la subordonnée : Quiero que vengas pronto.",
    },
    {
      id: 2,
      question: "« Quería que ___ pronto. » (venir — principal à l'imparfait)",
      options: [
        { id: 'a', text: 'vengas', correct: false },
        { id: 'b', text: 'vienes', correct: false },
        { id: 'c', text: 'vinieras', correct: true },
        { id: 'd', text: 'vendrías', correct: false },
      ],
      explanation:
        "Axe du passé : principal au passé (quería) → imparfait du subjonctif : Quería que vinieras. Comparez avec « Quiero que vengas » (axe du présent). C'est LE piège classique du thème.",
    },
    {
      id: 3,
      question: "Sur l'axe du passé, à quel temps se met la subordonnée au subjonctif ?",
      options: [
        { id: 'a', text: 'au présent du subjonctif', correct: false },
        { id: 'b', text: "à l'imparfait du subjonctif", correct: true },
        { id: 'c', text: "à l'indicatif présent", correct: false },
        { id: 'd', text: 'au conditionnel', correct: false },
      ],
      explanation:
        "Principal au passé (pretérito, imparfait, plus-que-parfait) ou au conditionnel → imparfait du subjonctif (-ra / -se). Règle d'or du thème : principal au passé → JAMAIS de présent du subjonctif.",
    },
    {
      id: 4,
      question: "« Le pedí que me ___ la verdad. » (decir)",
      options: [
        { id: 'a', text: 'diga', correct: false },
        { id: 'b', text: 'dice', correct: false },
        { id: 'c', text: 'dijera', correct: true },
        { id: 'd', text: 'diría', correct: false },
      ],
      explanation:
        "« pedí » (passé simple) → axe du passé → imparfait du subjonctif. decir : dijeron → dijera. La forme « diga » (présent du subjonctif) serait une faute de concordance.",
    },
    {
      id: 5,
      question: "« No creo que ___ razón. » (tener — opinion niée au présent)",
      options: [
        { id: 'a', text: 'tiene', correct: false },
        { id: 'b', text: 'tenga', correct: true },
        { id: 'c', text: 'tuviera', correct: false },
        { id: 'd', text: 'tendría', correct: false },
      ],
      explanation:
        "Verbe d'opinion à la forme négative (no creo que) → subjonctif ; principal au présent → présent du subjonctif : No creo que tenga razón.",
    },
    {
      id: 6,
      question: "« Me alegré de que ___ allí. » (estar — sentiment au passé)",
      options: [
        { id: 'a', text: 'estés', correct: false },
        { id: 'b', text: 'estuvieras', correct: true },
        { id: 'c', text: 'estás', correct: false },
        { id: 'd', text: 'estarías', correct: false },
      ],
      explanation:
        "Verbe de sentiment (me alegré de que) → subjonctif ; principal au passé (me alegré) → imparfait du subjonctif : Me alegré de que estuvieras allí.",
    },
    {
      id: 7,
      question: "Antériorité dans le présent : « Me alegro de que ___ venido. » (haber)",
      options: [
        { id: 'a', text: 'has', correct: false },
        { id: 'b', text: 'haya', correct: true },
        { id: 'c', text: 'hubiera', correct: false },
        { id: 'd', text: 'había', correct: false },
      ],
      explanation:
        "Action antérieure sur l'axe du présent → subjonctif passé : haya + participe. Me alegro de que hayas venido (= que tu sois venu).",
    },
    {
      id: 8,
      question: "Antériorité dans le passé : « Me alegré de que ___ venido. » (haber)",
      options: [
        { id: 'a', text: 'hayas', correct: false },
        { id: 'b', text: 'has', correct: false },
        { id: 'c', text: 'hubieras', correct: true },
        { id: 'd', text: 'habrías', correct: false },
      ],
      explanation:
        "Action antérieure sur l'axe du passé → plus-que-parfait du subjonctif : hubiera + participe. Me alegré de que hubieras venido.",
    },
    {
      id: 9,
      question: "« Te llamaré cuando ___ a casa. » (llegar — futur)",
      options: [
        { id: 'a', text: 'llegaré', correct: false },
        { id: 'b', text: 'llego', correct: false },
        { id: 'c', text: 'llegue', correct: true },
        { id: 'd', text: 'llegara', correct: false },
      ],
      explanation:
        "Principal au futur (te llamaré) + « cuando » à valeur future → présent du subjonctif : cuando llegue. On ne met jamais le futur après « cuando » dans ce cas.",
    },
    {
      id: 10,
      question: "Quelle phrase respecte la concordance des temps ?",
      options: [
        { id: 'a', text: 'Me dijo que venga mañana.', correct: false },
        { id: 'b', text: 'Me dijo que viniera al día siguiente.', correct: true },
        { id: 'c', text: 'Me dice que viniera mañana.', correct: false },
        { id: 'd', text: 'Me dijo que vendría que venga.', correct: false },
      ],
      explanation:
        "Principal au passé (me dijo) → imparfait du subjonctif (viniera) en style soutenu, jamais le présent du subjonctif (venga). Le piège (a) est l'erreur de thème la plus pénalisée.",
    },
  ],
  flashcards: [
    { id: 1, category: 'Principe', front: "Les deux axes de la concordance des temps", back: "Axe du présent : principal au présent/futur/passé composé → subjonctif présent. Axe du passé : principal au passé (pretérito, imparfait, PQP) ou conditionnel → imparfait du subjonctif.", hint: 'présent vs passé' },
    { id: 2, category: 'Axe du présent', front: "« Quiero que… » : quel temps dans la subordonnée ?", back: "Présent du subjonctif : Quiero que vengas. (volonté + principal au présent)" },
    { id: 3, category: 'Axe du passé', front: "« Quería que… » : quel temps dans la subordonnée ?", back: "Imparfait du subjonctif : Quería que vinieras. (principal au passé)" },
    { id: 4, category: 'Axe du passé', front: "Règle d'or du thème (faute la plus pénalisée)", back: "Principal au passé → JAMAIS de présent du subjonctif dans la subordonnée. On passe à l'imparfait du subjonctif (-ra / -se)." },
    { id: 5, category: 'Imparfait subj.', front: "Former l'imparfait du subjonctif", back: "3e pers. plur. du passé simple − -ron + -ra/-se : hablaron → hablara/hablase ; vinieron → viniera ; tuvieron → tuviera." },
    { id: 6, category: 'Déclencheurs', front: "Verbes qui déclenchent le subjonctif (à concorder)", back: "Volonté (querer, pedir, exigir), sentiment (alegrarse, temer), opinion niée (no creer, no pensar), jugement impersonnel (es necesario que). Le temps suit l'axe du verbe principal." },
    { id: 7, category: 'Antériorité', front: "Antériorité sur l'axe du présent", back: "Subjonctif passé : haya + participe. Me alegro de que hayas venido (action antérieure au présent)." },
    { id: 8, category: 'Antériorité', front: "Antériorité sur l'axe du passé", back: "Plus-que-parfait du subjonctif : hubiera + participe. Me alegré de que hubieras venido." },
    { id: 9, category: 'Style soutenu', front: "Style soutenu / écrit : variante -ra ou -se ?", back: "Les deux sont correctes (cantara / cantase). La forme en -ra est plus fréquente ; -se est plus littéraire. Cohérence dans une même copie." },
    { id: 10, category: 'Cuando + futur', front: "« cuando » à valeur future après un verbe au futur", back: "Présent du subjonctif, jamais le futur : Te llamaré cuando llegue. (axe du présent)" },
    { id: 11, category: 'Discours rapporté', front: "« Me dijo que… » : concordance ?", back: "Principal au passé → imparfait du subjonctif si subjonctif requis (Me dijo que viniera), conditionnel pour le futur du passé (Me dijo que vendría)." },
    { id: 12, category: 'Piège thème', front: "Erreur classique de thème à éviter absolument", back: "Ne pas calquer le français : « Il voulait que je vienne » → Quería que viniera (PAS « que venga »). Principal au passé impose l'imparfait du subjonctif." },
  ],
};
