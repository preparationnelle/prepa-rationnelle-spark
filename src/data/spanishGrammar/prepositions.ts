import type { SpanishGrammarChapterContent } from './types';

// Chapitre 4 — Prépositions et Locutions. Quiz + flashcards rédigés à la main,
// au gabarit de qualité de subjonctif.ts.
export const content: SpanishGrammarChapterContent = {
  slug: 'prepositions',
  title: 'Prépositions et Locutions',
  chapterNumber: 4,
  quizTitle: 'Quiz — Prépositions et Locutions',
  quizQuestions: [
    {
      id: 1,
      question: "Complétez : « Veo ___ mi hermano todos los días. » (le COD est une personne)",
      options: [
        { id: 'a', text: 'Ø (rien)', correct: false },
        { id: 'b', text: 'a', correct: true },
        { id: 'c', text: 'en', correct: false },
        { id: 'd', text: 'de', correct: false },
      ],
      explanation:
        "Le « a » personnel est obligatoire devant un COD de personne déterminée : Veo a mi hermano. Le correcteur sanctionne sa disparition (« Veo mi hermano » est un calque du français).",
    },
    {
      id: 2,
      question: "« Sueño ___ viajar a México. » Quelle préposition régit « soñar » ?",
      options: [
        { id: 'a', text: 'en', correct: false },
        { id: 'b', text: 'de', correct: false },
        { id: 'c', text: 'con', correct: true },
        { id: 'd', text: 'a', correct: false },
      ],
      explanation:
        "« Soñar con » = rêver de. La préposition espagnole ne calque jamais le « de » français : Sueño con viajar.",
    },
    {
      id: 3,
      question: "« Siempre pienso ___ ti. » Quelle préposition régit « pensar » (avoir à l'esprit) ?",
      options: [
        { id: 'a', text: 'en', correct: true },
        { id: 'b', text: 'de', correct: false },
        { id: 'c', text: 'con', correct: false },
        { id: 'd', text: 'a', correct: false },
      ],
      explanation:
        "« Pensar en » = penser à. Ne pas confondre avec « pensar de » (avoir une opinion sur) : ¿Qué piensas de la película ?",
    },
    {
      id: 4,
      question: "« Todo ___ tu decisión. » Quelle préposition régit « depender » ?",
      options: [
        { id: 'a', text: 'en', correct: false },
        { id: 'b', text: 'de', correct: true },
        { id: 'c', text: 'a', correct: false },
        { id: 'd', text: 'con', correct: false },
      ],
      explanation:
        "« Depender de » = dépendre de. Todo depende de tu decisión. Le régime prépositionnel est fixe et tombe régulièrement aux concours.",
    },
    {
      id: 5,
      question: "« No me acuerdo ___ su nombre. » Quelle préposition régit « acordarse » ?",
      options: [
        { id: 'a', text: 'a', correct: false },
        { id: 'b', text: 'en', correct: false },
        { id: 'c', text: 'de', correct: true },
        { id: 'd', text: 'con', correct: false },
      ],
      explanation:
        "« Acordarse de » = se souvenir de. No me acuerdo de su nombre. Synonyme sans préposition : recordar algo (recuerdo su nombre).",
    },
    {
      id: 6,
      question: "Comment traduire « Vivo chez mis padres » ?",
      options: [
        { id: 'a', text: 'Vivo a casa de mis padres', correct: false },
        { id: 'b', text: 'Vivo en casa de mis padres', correct: true },
        { id: 'c', text: 'Vivo en lo de mis padres con', correct: false },
        { id: 'd', text: 'Vivo chez mis padres', correct: false },
      ],
      explanation:
        "« Chez » n'a pas d'équivalent direct : on dit « en casa de » + personne (ou « a casa de » avec mouvement : Voy a casa de Ana). Calque interdit.",
    },
    {
      id: 7,
      question: "« ___ la lluvia, salimos a pasear. » Quelle locution traduit « malgré » ?",
      options: [
        { id: 'a', text: 'A pesar de', correct: true },
        { id: 'b', text: 'Gracias a', correct: false },
        { id: 'c', text: 'Debido a', correct: false },
        { id: 'd', text: 'En cuanto a', correct: false },
      ],
      explanation:
        "« A pesar de » = malgré. « Gracias a » = grâce à ; « debido a » = en raison de ; « en cuanto a » = quant à. Ne pas les interchanger.",
    },
    {
      id: 8,
      question: "Quelle locution traduit « en raison de / à cause de » (cause neutre) ?",
      options: [
        { id: 'a', text: 'A pesar de', correct: false },
        { id: 'b', text: 'En cuanto a', correct: false },
        { id: 'c', text: 'Debido a', correct: true },
        { id: 'd', text: 'Gracias a', correct: false },
      ],
      explanation:
        "« Debido a » = en raison de / à cause de : Debido a la crisis, bajó el consumo. « Gracias a » garde une valeur positive (grâce à).",
    },
    {
      id: 9,
      question: "Comment traduire « Voy ___ Madrid » (destination) ?",
      options: [
        { id: 'a', text: 'en Madrid', correct: false },
        { id: 'b', text: 'a Madrid', correct: true },
        { id: 'c', text: 'de Madrid', correct: false },
        { id: 'd', text: 'por Madrid', correct: false },
      ],
      explanation:
        "Avec un verbe de mouvement, la destination se construit avec « a » : Voy a Madrid. « En » indique le lieu où l'on est (Estoy en Madrid), jamais la destination.",
    },
    {
      id: 10,
      question: "« Se dirige ___ la salida. » Quelle préposition traduit « vers » (direction) ?",
      options: [
        { id: 'a', text: 'a / hacia', correct: true },
        { id: 'b', text: 'en', correct: false },
        { id: 'c', text: 'de', correct: false },
        { id: 'd', text: 'por', correct: false },
      ],
      explanation:
        "« Vers » (direction) = « hacia » ou « a » : Se dirige hacia / a la salida. « Hacia » insiste sur l'orientation, « a » sur le but atteint.",
    },
  ],
  flashcards: [
    { id: 1, category: 'A personnel', front: "Quand met-on le « a » personnel ?", back: "Devant un COD désignant une personne (ou animal cher) déterminée : Veo a Juan. Conozco a tu hermana.", hint: 'COD humain déterminé → a' },
    { id: 2, category: 'A personnel', front: "Quand OMET-on le « a » personnel ?", back: "Devant une personne indéterminée non spécifiée : Busco un médico (n'importe lequel) vs Busco a mi médico." },
    { id: 3, category: 'Régime', front: "« Rêver de » en espagnol ?", back: "Soñar con. Sueño con un mundo mejor. (Jamais « soñar de ».)", hint: 'soñar + CON' },
    { id: 4, category: 'Régime', front: "« Penser à » vs « penser de » ?", back: "Pensar en (avoir à l'esprit) : Pienso en ti. / Pensar de (opinion) : ¿Qué piensas de esto ?" },
    { id: 5, category: 'Régime', front: "« Dépendre de » en espagnol ?", back: "Depender de. Depende de las circunstancias. Le « de » est fixe." },
    { id: 6, category: 'Régime', front: "« Se souvenir de » : deux constructions ?", back: "Acordarse de algo (Me acuerdo de ti) OU recordar algo, sans préposition (Recuerdo tu cara)." },
    { id: 7, category: 'Régime', front: "« Faire attention à / remarquer » en espagnol ?", back: "Fijarse en. Fíjate en los detalles. (Et « fiarse de » = se fier à.)" },
    { id: 8, category: 'A / en / de', front: "Différence entre « ir a » et « estar en » ?", back: "A = destination avec mouvement (Voy a Roma). En = lieu où l'on se trouve (Estoy en Roma)." },
    { id: 9, category: 'Traduction', front: "Comment traduire « chez » ?", back: "Pas de mot unique : en casa de + personne (lieu), a casa de + personne (mouvement), al médico / al dentista (chez le pro)." },
    { id: 10, category: 'Traduction', front: "Comment traduire « dans » (à l'intérieur de) ?", back: "En : en la caja, en el coche. Pour « dans 3 jours » → dentro de tres días." },
    { id: 11, category: 'Locutions', front: "« Malgré », « grâce à », « à cause de », « quant à » ?", back: "A pesar de / pese a ; gracias a ; debido a / a causa de ; en cuanto a / respecto a." },
    { id: 12, category: 'Locutions', front: "Locutions de but et de fin : « afin de », « au lieu de » ?", back: "Con el fin de / a fin de + infinitif ; en lugar de / en vez de + infinitif. En vez de quejarte, actúa." },
  ],
};
