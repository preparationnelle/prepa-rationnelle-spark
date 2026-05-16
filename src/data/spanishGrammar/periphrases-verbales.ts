import type { SpanishGrammarChapterContent } from './types';

// Chapitre 17 — Périphrases Verbales. Quiz + flashcards niveau prépa ECG.
export const content: SpanishGrammarChapterContent = {
  slug: 'periphrases-verbales',
  title: 'Périphrases Verbales',
  chapterNumber: 17,
  quizTitle: 'Quiz — Périphrases Verbales',
  quizQuestions: [
    {
      id: 1,
      question: "Comment traduire le futur proche « Je vais étudier ce soir » ?",
      options: [
        { id: 'a', text: 'Estudio esta noche.', correct: false },
        { id: 'b', text: 'Voy a estudiar esta noche.', correct: true },
        { id: 'c', text: 'Vengo de estudiar esta noche.', correct: false },
        { id: 'd', text: 'Vuelvo a estudiar esta noche.', correct: false },
      ],
      explanation:
        "Le futur proche se rend par « ir a + infinitif ». Piège du correcteur : « ir » doit être conjugué (voy, vas, va…), jamais à l'infinitif.",
    },
    {
      id: 2,
      question: "« Acabo de llegar » signifie :",
      options: [
        { id: 'a', text: "Je finis d'arriver", correct: false },
        { id: 'b', text: "Je viens d'arriver", correct: true },
        { id: 'c', text: "Je vais arriver", correct: false },
        { id: 'd', text: "J'arrive enfin", correct: false },
      ],
      explanation:
        "« Acabar de + infinitif » exprime le passé récent (= venir de). Le faux ami à éviter : ce n'est pas « finir de » ici, mais bien « venir de ».",
    },
    {
      id: 3,
      question: "Comment traduire « Il est de nouveau en retard » avec une périphrase ?",
      options: [
        { id: 'a', text: 'Vuelve a llegar tarde.', correct: true },
        { id: 'b', text: 'Acaba de llegar tarde.', correct: false },
        { id: 'c', text: 'Va a llegar tarde.', correct: false },
        { id: 'd', text: 'Deja de llegar tarde.', correct: false },
      ],
      explanation:
        "« Volver a + infinitif » traduit l'idée de répétition (« de nouveau », « re- »). Piège : ne pas confondre avec « volver » seul (= revenir).",
    },
    {
      id: 4,
      question: "Traduisez : « Il travaille dans cette entreprise depuis deux ans. »",
      options: [
        { id: 'a', text: 'Trabaja desde dos años en esta empresa.', correct: false },
        { id: 'b', text: 'Lleva dos años trabajando en esta empresa.', correct: true },
        { id: 'c', text: 'Hace dos años trabajar en esta empresa.', correct: false },
        { id: 'd', text: 'Acaba dos años de trabajar en esta empresa.', correct: false },
      ],
      explanation:
        "« Llevar + durée + gérondif » exprime la durée d'une action qui continue. Piège classique : on n'emploie PAS l'infinitif après « lleva », mais le gérondif (trabajando).",
    },
    {
      id: 5,
      question: "« Sigue lloviendo » se traduit par :",
      options: [
        { id: 'a', text: 'Il va pleuvoir', correct: false },
        { id: 'b', text: 'Il vient de pleuvoir', correct: false },
        { id: 'c', text: 'Il continue de pleuvoir', correct: true },
        { id: 'd', text: 'Il a cessé de pleuvoir', correct: false },
      ],
      explanation:
        "« Seguir / continuar + gérondif » = continuer à / de. Piège : après « seguir » et « continuar » on met le gérondif, jamais « a + infinitif » comme en français.",
    },
    {
      id: 6,
      question: "Quelle périphrase exprime l'habitude (« il a l'habitude de se lever tôt ») ?",
      options: [
        { id: 'a', text: 'Acaba de levantarse temprano.', correct: false },
        { id: 'b', text: 'Suele levantarse temprano.', correct: true },
        { id: 'c', text: 'Está levantándose temprano.', correct: false },
        { id: 'd', text: 'Llega a levantarse temprano.', correct: false },
      ],
      explanation:
        "« Soler + infinitif » exprime l'habitude (suelo, sueles, suele…). Il n'existe qu'au présent et à l'imparfait. Le calque « tener la costumbre de » est lourd : préférez « soler ».",
    },
    {
      id: 7,
      question: "Comment distinguer l'obligation personnelle de l'obligation impersonnelle ?",
      options: [
        { id: 'a', text: "« Tener que + inf. » = personnelle ; « hay que + inf. » = impersonnelle", correct: true },
        { id: 'b', text: "« Hay que + inf. » = personnelle ; « tener que + inf. » = impersonnelle", correct: false },
        { id: 'c', text: "Les deux sont strictement équivalentes", correct: false },
        { id: 'd', text: "« Deber de + inf. » = obligation personnelle", correct: false },
      ],
      explanation:
        "« Tener que + inf. » vise un sujet précis (tengo que estudiar) ; « hay que + inf. » est impersonnel et invariable (hay que estudiar = il faut). Ne jamais conjuguer « hay que ».",
    },
    {
      id: 8,
      question: "« Deben de ser las tres » signifie :",
      options: [
        { id: 'a', text: "Il faut qu'il soit trois heures", correct: false },
        { id: 'b', text: "Il doit être environ trois heures (probabilité)", correct: true },
        { id: 'c', text: "Ils doivent être trois", correct: false },
        { id: 'd', text: "Ils ont dû être à trois heures", correct: false },
      ],
      explanation:
        "« Deber de + inf. » exprime la probabilité / supposition, alors que « deber + inf. » (sans « de ») exprime l'obligation. C'est une distinction très attendue au concours.",
    },
    {
      id: 9,
      question: "Quelle phrase exprime le début soudain d'une action (« il se mit à pleurer ») ?",
      options: [
        { id: 'a', text: 'Dejó de llorar.', correct: false },
        { id: 'b', text: 'Volvió a llorar.', correct: false },
        { id: 'c', text: 'Rompió a llorar.', correct: true },
        { id: 'd', text: 'Acabó de llorar.', correct: false },
      ],
      explanation:
        "« Romper a / echarse a / ponerse a + infinitif » marquent le début brusque d'une action. « Romper a llorar » = fondre en larmes. « Dejar de » serait au contraire la cessation.",
    },
    {
      id: 10,
      question: "Traduisez : « J'ai arrêté de fumer l'an dernier. »",
      options: [
        { id: 'a', text: 'Volví a fumar el año pasado.', correct: false },
        { id: 'b', text: 'Dejé de fumar el año pasado.', correct: true },
        { id: 'c', text: 'Acabé de fumar el año pasado.', correct: false },
        { id: 'd', text: 'Estuve fumando el año pasado.', correct: false },
      ],
      explanation:
        "« Dejar de + infinitif » = cesser de / arrêter de. Piège : « acabar de + inf. » signifie « venir de », pas « finir de » ni « arrêter de » dans ce sens.",
    },
  ],
  flashcards: [
    { id: 1, category: 'Futur', front: "Périphrase du futur proche (« je vais faire ») ?", back: "ir a + infinitif (verbe « ir » conjugué) : Voy a salir = Je vais sortir.", hint: 'voy / vas / va a + inf.' },
    { id: 2, category: 'Passé récent', front: "Comment dire « venir de + infinitif » ?", back: "acabar de + infinitif : Acabo de comer = Je viens de manger. (Pas « venir de » : faux ami.)" },
    { id: 3, category: 'Répétition', front: "Périphrase pour « de nouveau / re- » ?", back: "volver a + infinitif : Vuelvo a leerlo = Je le relis / Je le lis de nouveau." },
    { id: 4, category: 'Durée', front: "Traduire « depuis + durée » avec une action en cours ?", back: "llevar + durée + gérondif : Lleva dos años trabajando aquí = Il travaille ici depuis deux ans.", hint: 'lleva + tiempo + -ando/-iendo' },
    { id: 5, category: 'Continuité', front: "« Continuer à / de + infinitif » en espagnol ?", back: "seguir / continuar + GÉRONDIF (jamais l'infinitif) : Sigue estudiando = Il continue d'étudier." },
    { id: 6, category: 'Habitude', front: "Périphrase de l'habitude (« avoir l'habitude de ») ?", back: "soler + infinitif (présent ou imparfait seulement) : Suelo madrugar = J'ai l'habitude de me lever tôt." },
    { id: 7, category: 'Progressif', front: "Action en train de se dérouler (« être en train de ») ?", back: "estar + gérondif : Estoy leyendo = Je suis en train de lire." },
    { id: 8, category: 'Obligation', front: "Obligation personnelle vs impersonnelle ?", back: "tener que + inf. (personnelle, conjuguée) ≠ hay que + inf. (impersonnelle, invariable) = il faut." },
    { id: 9, category: 'Nuance', front: "« deber + inf. » vs « deber de + inf. » ?", back: "deber + inf. = obligation (Debes estudiar). deber de + inf. = probabilité (Debe de estar enfermo = Il doit être malade)." },
    { id: 10, category: 'Début', front: "Périphrases du début soudain d'une action ?", back: "ponerse a / echarse a / romper a + infinitif : Se puso a llorar / Rompió a llorar = Il se mit à pleurer." },
    { id: 11, category: 'Cessation', front: "« Cesser de / arrêter de + infinitif » ?", back: "dejar de + infinitif : Dejé de fumar = J'ai arrêté de fumer." },
    { id: 12, category: 'Imminence', front: "« Être sur le point de / parvenir à faire » ?", back: "estar a punto de + inf. (imminence) ; llegar a + inf. (parvenir à) : Estaba a punto de salir ; Llegó a ser presidente." },
  ],
};
