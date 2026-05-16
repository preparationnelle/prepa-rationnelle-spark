import type { SpanishGrammarChapterContent } from './types';

// Chapitre 6 — Négations. Quiz + flashcards rédigés à la main,
// au gabarit de qualité de subjonctif.ts.
export const content: SpanishGrammarChapterContent = {
  slug: 'negations',
  title: 'Négations',
  chapterNumber: 6,
  quizTitle: 'Quiz — Négations',
  quizQuestions: [
    {
      id: 1,
      question: "Quelle phrase exprime correctement « Je ne vois rien » ?",
      options: [
        { id: 'a', text: 'No veo nada.', correct: true },
        { id: 'b', text: 'Veo nada.', correct: false },
        { id: 'c', text: 'No veo algo.', correct: false },
        { id: 'd', text: 'Nada veo no.', correct: false },
      ],
      explanation:
        "Quand le négatif suit le verbe, le « no » devant le verbe est obligatoire : la double négation est correcte et exigée en espagnol — No veo nada.",
    },
    {
      id: 2,
      question: "Réécrivez « No viene nadie » en plaçant le négatif avant le verbe.",
      options: [
        { id: 'a', text: 'No nadie viene.', correct: false },
        { id: 'b', text: 'Nadie viene.', correct: true },
        { id: 'c', text: 'Nadie no viene.', correct: false },
        { id: 'd', text: 'Nadie viene no.', correct: false },
      ],
      explanation:
        "Si le mot négatif est placé AVANT le verbe, on supprime le « no » : Nadie viene. Garder « no » serait fautif (Nadie no viene est incorrect).",
    },
    {
      id: 3,
      question: "Complétez : « ___ he estado en Japón. » (jamais)",
      options: [
        { id: 'a', text: 'No nunca', correct: false },
        { id: 'b', text: 'Nunca', correct: true },
        { id: 'c', text: 'Nunca no', correct: false },
        { id: 'd', text: 'Jamás no', correct: false },
      ],
      explanation:
        "« Nunca » (ou « jamás ») avant le verbe se suffit à lui-même : Nunca he estado en Japón. Après le verbe : No he estado nunca en Japón.",
    },
    {
      id: 4,
      question: "Comment traduire « Moi non plus » (en réponse à une phrase négative) ?",
      options: [
        { id: 'a', text: 'Yo también', correct: false },
        { id: 'b', text: 'Yo tampoco', correct: true },
        { id: 'c', text: 'Yo no más', correct: false },
        { id: 'd', text: 'Yo ni', correct: false },
      ],
      explanation:
        "« Tampoco » = non plus (négatif de « también ») : —No me gusta. —A mí tampoco. Le calque « yo también » dans un contexte négatif est faux.",
    },
    {
      id: 5,
      question: "Complétez : « No tengo ___ tiempo ___ dinero. » (ni… ni…)",
      options: [
        { id: 'a', text: 'o … o', correct: false },
        { id: 'b', text: 'ni … ni', correct: true },
        { id: 'c', text: 'no … no', correct: false },
        { id: 'd', text: 'y … y', correct: false },
      ],
      explanation:
        "Coordination négative : No tengo ni tiempo ni dinero. On peut aussi commencer par « ni » : Ni tiempo ni dinero tengo.",
    },
    {
      id: 6,
      question: "Choisissez : « No quiero café ___ té. » (et non… : exclusion)",
      options: [
        { id: 'a', text: 'pero', correct: false },
        { id: 'b', text: 'sino', correct: false },
        { id: 'c', text: 'ni', correct: true },
        { id: 'd', text: 'y', correct: false },
      ],
      explanation:
        "Après une négation, « et » devient « ni » : No quiero café ni té. (« sino » servirait à corriger : No quiero café sino té = mais plutôt du thé.)",
    },
    {
      id: 7,
      question: "« No es médico ___ enfermero. » (mais au contraire)",
      options: [
        { id: 'a', text: 'pero', correct: false },
        { id: 'b', text: 'sino', correct: true },
        { id: 'c', text: 'ni', correct: false },
        { id: 'd', text: 'sin', correct: false },
      ],
      explanation:
        "« Sino » corrige après une négation (mais au contraire) : No es médico sino enfermero. « Pero » exprime une simple opposition (No es rico, pero es feliz).",
    },
    {
      id: 8,
      question: "Quelle phrase signifie « Il ne fume plus » ?",
      options: [
        { id: 'a', text: 'Todavía no fuma.', correct: false },
        { id: 'b', text: 'Ya no fuma.', correct: true },
        { id: 'c', text: 'No fuma ya más todavía.', correct: false },
        { id: 'd', text: 'Aún fuma.', correct: false },
      ],
      explanation:
        "« Ya no » = ne… plus (arrêt d'une action) : Ya no fuma. « Todavía no / aún no » = ne… pas encore : Todavía no ha llegado.",
    },
    {
      id: 9,
      question: "Traduisez « Il est parti sans rien dire ».",
      options: [
        { id: 'a', text: 'Se fue sin decir nada.', correct: true },
        { id: 'b', text: 'Se fue sin no decir nada.', correct: false },
        { id: 'c', text: 'Se fue sin decir algo.', correct: false },
        { id: 'd', text: 'Se fue no decir nada.', correct: false },
      ],
      explanation:
        "« Sin » + infinitif assume déjà la négation : on garde « nada », mais JAMAIS un « no » en plus — Se fue sin decir nada.",
    },
    {
      id: 10,
      question: "Complétez : « No hay ___ libro sobre la mesa. » (aucun)",
      options: [
        { id: 'a', text: 'ninguno', correct: false },
        { id: 'b', text: 'ningún', correct: true },
        { id: 'c', text: 'ninguna', correct: false },
        { id: 'd', text: 'nada', correct: false },
      ],
      explanation:
        "Devant un nom masculin singulier, « ninguno » s'apocope en « ningún » : No hay ningún libro. Au féminin : ninguna casa. Forme pleine seule : —¿Tienes libros? —Ninguno.",
    },
  ],
  flashcards: [
    { id: 1, category: 'Double négation', front: "Quand faut-il un « no » devant le verbe ?", back: "Quand le mot négatif (nada, nadie, nunca, tampoco…) est APRÈS le verbe : No veo nada. No viene nadie.", hint: 'négatif après le verbe → no + verbe' },
    { id: 2, category: 'Place', front: "Et si le négatif est AVANT le verbe ?", back: "On supprime « no » : Nadie viene. Nunca lo hago. Nada me importa. (« Nadie no viene » est fautif.)" },
    { id: 3, category: 'Adverbes', front: "Comment dire « jamais » ?", back: "Nunca ou jamás : Nunca lo olvidaré. Renforcé : nunca jamás (jamais de la vie)." },
    { id: 4, category: 'Pronoms', front: "« rien » et « personne » comme sujets / compléments ?", back: "Nada (chose), nadie (personne) : Nada cambió. No conozco a nadie (a personnel obligatoire)." },
    { id: 5, category: 'Adjectif', front: "« aucun » : ninguno / ningún / ninguna ?", back: "Ningún + nom masc. sing. (ningún problema), ninguna + fém. (ninguna duda). Pluriel quasi inexistant." },
    { id: 6, category: 'Tampoco', front: "Comment traduire « non plus » ?", back: "Tampoco (négatif de también) : Yo tampoco. No lo sabía y ella tampoco." },
    { id: 7, category: 'Coordination', front: "« ni… ni… » en espagnol ?", back: "No … ni … ni … : No tengo ni tiempo ni ganas. En tête : Ni él ni ella vinieron." },
    { id: 8, category: 'Et négatif', front: "Comment traduire « et » après une négation ?", back: "Par « ni » : No come carne ni pescado. (Pas « y ».)" },
    { id: 9, category: 'Sino / pero', front: "Différence entre « sino » et « pero » ?", back: "Sino corrige après négation (No es A sino B). Pero oppose sans annuler (No es rico, pero es feliz). Sino que + verbe conjugué." },
    { id: 10, category: 'Ya no / todavía no', front: "« ne… plus » vs « ne… pas encore » ?", back: "Ya no = ne plus (Ya no vive aquí). Todavía no / aún no = ne pas encore (Todavía no lo sé)." },
    { id: 11, category: 'Sin', front: "« sans » + infinitif : faut-il ajouter « no » ?", back: "Non, « sin » porte déjà la négation : Salió sin decir nada. Sin querer = sans le vouloir." },
    { id: 12, category: 'Subjonctif', front: "Négation d'opinion : quel mode dans la subordonnée ?", back: "No creo / no pienso que + subjonctif : No creo que sea verdad. (Affirmatif → indicatif : Creo que es verdad.)" },
  ],
};
