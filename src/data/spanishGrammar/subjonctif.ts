import type { SpanishGrammarChapterContent } from './types';

// Chapitre 11 — Le Subjonctif. Fiche de référence (contenu rédigé à la main),
// sert de gabarit de qualité pour les 19 autres chapitres.
export const content: SpanishGrammarChapterContent = {
  slug: 'subjonctif',
  title: 'Le Subjonctif',
  chapterNumber: 11,
  quizTitle: 'Quiz — Le Subjonctif',
  quizQuestions: [
    {
      id: 1,
      question: "Quelle est la 1re personne du singulier du présent du subjonctif de « tener » ?",
      options: [
        { id: 'a', text: 'teno', correct: false },
        { id: 'b', text: 'tenga', correct: true },
        { id: 'c', text: 'tiene', correct: false },
        { id: 'd', text: 'tener', correct: false },
      ],
      explanation:
        "On part du « yo » de l'indicatif (tengo), on retire le -o et on ajoute les terminaisons en -a : tenga. L'irrégularité de « tengo » se propage à tout le subjonctif.",
    },
    {
      id: 2,
      question: "Complétez : « Quiero que tú ___ pronto. » (venir)",
      options: [
        { id: 'a', text: 'vienes', correct: false },
        { id: 'b', text: 'vengas', correct: true },
        { id: 'c', text: 'venir', correct: false },
        { id: 'd', text: 'vendrás', correct: false },
      ],
      explanation:
        "« Querer que » exprime la volonté : il déclenche le subjonctif. venir → vengo → vengas.",
    },
    {
      id: 3,
      question: "Quel verbe fait partie des 6 irréguliers purs du subjonctif (acrostiche DISHES) ?",
      options: [
        { id: 'a', text: 'hablar', correct: false },
        { id: 'b', text: 'comer', correct: false },
        { id: 'c', text: 'saber', correct: true },
        { id: 'd', text: 'vivir', correct: false },
      ],
      explanation:
        "DISHES = Dar, Ir, Ser, Haber, Estar, Saber. saber → sepa, sepas, sepa…",
    },
    {
      id: 4,
      question: "« Cuando ___ a Madrid, te llamaré. » (llegar — action future)",
      options: [
        { id: 'a', text: 'llego', correct: false },
        { id: 'b', text: 'llegaré', correct: false },
        { id: 'c', text: 'llegue', correct: true },
        { id: 'd', text: 'llegaba', correct: false },
      ],
      explanation:
        "« Cuando » + action future incertaine → subjonctif présent : llegue. On ne met JAMAIS le futur après « cuando » dans ce cas.",
    },
    {
      id: 5,
      question: "Choisissez la forme correcte : « No creo que ___ verdad. » (ser)",
      options: [
        { id: 'a', text: 'es', correct: false },
        { id: 'b', text: 'sea', correct: true },
        { id: 'c', text: 'será', correct: false },
        { id: 'd', text: 'siendo', correct: false },
      ],
      explanation:
        "« No creer que » exprime le doute / la négation d'opinion → subjonctif. Attention : « Creo que » (affirmatif) prend l'indicatif (es).",
    },
    {
      id: 6,
      question: "Imparfait du subjonctif : sur quelle forme se construit-il ?",
      options: [
        { id: 'a', text: "La 1re personne du présent", correct: false },
        { id: 'b', text: "L'infinitif", correct: false },
        { id: 'c', text: "La 3e personne du pluriel du passé simple", correct: true },
        { id: 'd', text: "Le participe passé", correct: false },
      ],
      explanation:
        "On part de la 3e pers. du pluriel du passé simple, on retire -ron et on ajoute -ra/-se : hablaron → hablara/hablase ; tuvieron → tuviera.",
    },
    {
      id: 7,
      question: "« Si ___ tiempo, viajaría más. » (tener — hypothèse irréelle du présent)",
      options: [
        { id: 'a', text: 'tengo', correct: false },
        { id: 'b', text: 'tendría', correct: false },
        { id: 'c', text: 'tuviera', correct: true },
        { id: 'd', text: 'tenga', correct: false },
      ],
      explanation:
        "Hypothèse irréelle : « si » + imparfait du subjonctif → conditionnel. Si tuviera tiempo, viajaría más. Jamais « si » + conditionnel ni « si » + présent du subjonctif.",
    },
    {
      id: 8,
      question: "« Es importante que los alumnos ___ las reglas. » (conocer)",
      options: [
        { id: 'a', text: 'conocen', correct: false },
        { id: 'b', text: 'conozcan', correct: true },
        { id: 'c', text: 'conocían', correct: false },
        { id: 'd', text: 'conocer', correct: false },
      ],
      explanation:
        "Tournure impersonnelle de jugement « es importante que » → subjonctif. conocer → conozco → conozcan.",
    },
    {
      id: 9,
      question: "Quelle phrase est correcte ?",
      options: [
        { id: 'a', text: 'Espero que vienes mañana.', correct: false },
        { id: 'b', text: 'Espero que vengas mañana.', correct: true },
        { id: 'c', text: 'Espero que vendrás mañana.', correct: false },
        { id: 'd', text: 'Espero que venir mañana.', correct: false },
      ],
      explanation:
        "« Esperar que » (souhait) déclenche le subjonctif : Espero que vengas mañana.",
    },
    {
      id: 10,
      question: "« Me pidió que ___ la verdad. » (decir — principal au passé)",
      options: [
        { id: 'a', text: 'digo', correct: false },
        { id: 'b', text: 'diga', correct: false },
        { id: 'c', text: 'dijera', correct: true },
        { id: 'd', text: 'diría', correct: false },
      ],
      explanation:
        "Concordance des temps : principal au passé (pidió) + verbe de volonté → imparfait du subjonctif. decir → dijeron → dijera.",
    },
  ],
  flashcards: [
    { id: 1, category: 'Formation', front: "Présent du subjonctif : la méthode infaillible ?", back: "Partir du « yo » du présent de l'indicatif, retirer le -o, ajouter les terminaisons inversées (-AR → -e ; -ER/-IR → -a).", hint: 'hablo → habl- → hable' },
    { id: 2, category: 'Formation', front: "Terminaisons du présent du subjonctif (verbes en -AR)", back: "-e, -es, -e, -emos, -éis, -en — hablar → hable, hables, hable, hablemos, habléis, hablen" },
    { id: 3, category: 'Formation', front: "Terminaisons du présent du subjonctif (verbes en -ER / -IR)", back: "-a, -as, -a, -amos, -áis, -an — comer → coma ; vivir → viva" },
    { id: 4, category: 'Irréguliers', front: "Les 6 irréguliers purs du subjonctif (acrostiche)", back: "DISHES : Dar (dé), Ir (vaya), Ser (sea), Haber (haya), Estar (esté), Saber (sepa)" },
    { id: 5, category: 'Irréguliers', front: "tener au présent du subjonctif", back: "tenga, tengas, tenga, tengamos, tengáis, tengan (l'irrégularité de « tengo » se propage)" },
    { id: 6, category: 'Imparfait', front: "Comment former l'imparfait du subjonctif ?", back: "3e pers. plur. du passé simple − -ron + -ra/-se : hablaron → hablara/hablase ; tuvieron → tuviera" },
    { id: 7, category: 'Déclencheurs', front: "Verbes de volonté / souhait + que → ?", back: "Subjonctif : querer que, esperar que, pedir que, desear que… Quiero que vengas." },
    { id: 8, category: 'Déclencheurs', front: "« No creer que » / « No pensar que » + que → ?", back: "Subjonctif (doute). Mais « Creo que / Pienso que » affirmatifs → indicatif." },
    { id: 9, category: 'Déclencheurs', front: "Tournures impersonnelles de jugement + que → ?", back: "Subjonctif : es importante que, es necesario que, es posible que… Es necesario que estudies." },
    { id: 10, category: 'Déclencheurs', front: "« Cuando » + action future → ?", back: "Subjonctif présent (jamais le futur) : Cuando llegue, te llamaré." },
    { id: 11, category: 'Hypothèse', front: "Hypothèse irréelle du présent : structure ?", back: "Si + imparfait du subjonctif → conditionnel. Si tuviera tiempo, viajaría más." },
    { id: 12, category: 'Concordance', front: "Principal au passé + verbe de volonté : quel temps dans la subordonnée ?", back: "Imparfait du subjonctif. Me pidió que dijera la verdad." },
  ],
};
