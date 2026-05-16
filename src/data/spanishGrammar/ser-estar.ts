import type { SpanishGrammarChapterContent } from './types';

// Chapitre 3 — Ser vs Estar et Constructions. Quiz & flashcards niveau prépa ECG.
export const content: SpanishGrammarChapterContent = {
  slug: 'ser-estar',
  title: 'Ser vs Estar et Constructions',
  chapterNumber: 3,
  quizTitle: 'Quiz — Ser vs Estar et Constructions',
  quizQuestions: [
    {
      id: 1,
      question: "Complétez : « Mi hermano ___ médico. »",
      options: [
        { id: 'a', text: 'está', correct: false },
        { id: 'b', text: 'es', correct: true },
        { id: 'c', text: 'hay', correct: false },
        { id: 'd', text: 'tiene', correct: false },
      ],
      explanation:
        "La profession définit l'identité, l'essence : on emploie « ser ». Es médico, es profesora. Piège : on n'utilise pas l'article (es médico, pas « es un médico » sans qualificatif).",
    },
    {
      id: 2,
      question: "Complétez : « El concierto ___ en el teatro. »",
      options: [
        { id: 'a', text: 'está', correct: false },
        { id: 'b', text: 'es', correct: true },
        { id: 'c', text: 'hay', correct: false },
        { id: 'd', text: 'queda', correct: false },
      ],
      explanation:
        "Localiser un ÉVÉNEMENT (= « avoir lieu ») se dit avec « ser » : El concierto es en el teatro. En revanche on localise un OBJET ou une personne avec « estar » : El teatro está en el centro.",
    },
    {
      id: 3,
      question: "Que signifie « Pedro está listo » ?",
      options: [
        { id: 'a', text: 'Pedro est intelligent.', correct: false },
        { id: 'b', text: 'Pedro est prêt.', correct: true },
        { id: 'c', text: 'Pedro est fatigué.', correct: false },
        { id: 'd', text: 'Pedro est malin.', correct: false },
      ],
      explanation:
        "« listo » change de sens : ser listo = être intelligent/malin (qualité) ; estar listo = être prêt (état ponctuel). Ici « está » impose « être prêt ».",
    },
    {
      id: 4,
      question: "Complétez : « La sopa ___ muy rica. » (= elle est délicieuse)",
      options: [
        { id: 'a', text: 'es', correct: false },
        { id: 'b', text: 'está', correct: true },
        { id: 'c', text: 'hay', correct: false },
        { id: 'd', text: 'tiene', correct: false },
      ],
      explanation:
        "Avec « rico », ser rico = être riche (argent) ; estar rico = être délicieux (goût perçu). Pour parler d'un plat savoureux : la sopa está muy rica.",
    },
    {
      id: 5,
      question: "Complétez : « ___ un libro sobre la mesa. »",
      options: [
        { id: 'a', text: 'Está', correct: false },
        { id: 'b', text: 'Hay', correct: true },
        { id: 'c', text: 'Es', correct: false },
        { id: 'd', text: 'Tiene', correct: false },
      ],
      explanation:
        "On présente l'EXISTENCE d'un élément indéterminé (un libro) avec « hay ». « Está » s'emploie pour situer un élément déjà identifié : El libro está sobre la mesa.",
    },
    {
      id: 6,
      question: "Quelle phrase exprime une action (passif d'action) ?",
      options: [
        { id: 'a', text: 'La puerta está cerrada.', correct: false },
        { id: 'b', text: 'La puerta fue cerrada por el guardia.', correct: true },
        { id: 'c', text: 'La puerta es cerrada siempre.', correct: false },
        { id: 'd', text: 'La puerta está cerrando.', correct: false },
      ],
      explanation:
        "Passif d'action = ser + participe (+ por) : La puerta fue cerrada por el guardia. « estar + participe » (está cerrada) décrit le RÉSULTAT, l'état, pas l'action elle-même.",
    },
    {
      id: 7,
      question: "Que signifie « Mi tío es aburrido » ?",
      options: [
        { id: 'a', text: "Mon oncle s'ennuie.", correct: false },
        { id: 'b', text: 'Mon oncle est ennuyeux.', correct: true },
        { id: 'c', text: 'Mon oncle est fatigué.', correct: false },
        { id: 'd', text: 'Mon oncle est occupé.', correct: false },
      ],
      explanation:
        "« aburrido » : ser aburrido = être ennuyeux (caractère permanent) ; estar aburrido = s'ennuyer (état momentané). « es » impose le caractère : il est ennuyeux.",
    },
    {
      id: 8,
      question: "Complétez : « Estos coches se ___ en Alemania. » (passive pronominale — fabricar)",
      options: [
        { id: 'a', text: 'fabrica', correct: false },
        { id: 'b', text: 'fabrican', correct: true },
        { id: 'c', text: 'fabricado', correct: false },
        { id: 'd', text: 'es fabricado', correct: false },
      ],
      explanation:
        "La passive pronominale « se + verbe » s'accorde avec le sujet : coches est pluriel → se fabrican. C'est la tournure passive la plus naturelle en espagnol courant.",
    },
    {
      id: 9,
      question: "Complétez : « Hoy ___ a 15 de mayo. » (la date)",
      options: [
        { id: 'a', text: 'es', correct: false },
        { id: 'b', text: 'estamos', correct: true },
        { id: 'c', text: 'hay', correct: false },
        { id: 'd', text: 'son', correct: false },
      ],
      explanation:
        "Locution figée avec « estar » pour la date du jour : Estamos a 15 de mayo. (On peut aussi dire « Hoy es 15 de mayo » avec ser, mais la tournure « estamos a + jour » est idiomatique.)",
    },
    {
      id: 10,
      question: "Que signifie « Las manzanas están verdes » (contexte : fruits) ?",
      options: [
        { id: 'a', text: 'Les pommes sont de couleur verte.', correct: false },
        { id: 'b', text: 'Les pommes ne sont pas mûres.', correct: true },
        { id: 'c', text: 'Les pommes sont délicieuses.', correct: false },
        { id: 'd', text: 'Les pommes sont rares.', correct: false },
      ],
      explanation:
        "Avec « verde », ser verde = être de couleur verte (qualité) ; estar verde = ne pas être mûr (état). « están » indique donc que les pommes ne sont pas mûres.",
    },
  ],
  flashcards: [
    { id: 1, category: 'Principe', front: "Ser ou estar : le principe de base ?", back: "ser = essence, identité, caractéristique permanente. estar = état, situation, résultat, localisation d'objets/personnes." },
    { id: 2, category: 'Localisation', front: "Localiser un objet/personne vs un événement ?", back: "Objet/personne → estar : El teatro está en el centro. Événement (avoir lieu) → ser : El concierto es en el teatro." },
    { id: 3, category: 'Adjectifs à double sens', front: "listo : ser vs estar ?", back: "ser listo = être intelligent/malin. estar listo = être prêt." },
    { id: 4, category: 'Adjectifs à double sens', front: "bueno : ser vs estar ?", back: "ser bueno = être bon / gentil (qualité morale). estar bueno = être savoureux ou en bonne santé/séduisant." },
    { id: 5, category: 'Adjectifs à double sens', front: "rico : ser vs estar ?", back: "ser rico = être riche (argent). estar rico = être délicieux (goût)." },
    { id: 6, category: 'Adjectifs à double sens', front: "aburrido : ser vs estar ?", back: "ser aburrido = être ennuyeux (caractère). estar aburrido = s'ennuyer (état momentané)." },
    { id: 7, category: 'Adjectifs à double sens', front: "verde : ser vs estar ?", back: "ser verde = être de couleur verte. estar verde = ne pas être mûr (fruit) / être novice." },
    { id: 8, category: 'Voix passive', front: "Passif d'action vs passif d'état ?", back: "Action : ser + participe (+ por) : fue construido por… État/résultat : estar + participe : está construido." },
    { id: 9, category: 'Voix passive', front: "La passive pronominale avec « se » ?", back: "se + verbe accordé au sujet : Se fabrican coches. Tournure passive la plus naturelle à l'oral et à l'écrit." },
    { id: 10, category: 'Hay vs está', front: "hay vs está : différence ?", back: "hay = existence d'un élément indéterminé : Hay un libro. está = localisation d'un élément déterminé : El libro está aquí." },
    { id: 11, category: 'Locutions avec estar', front: "Locutions idiomatiques avec estar ?", back: "estar de pie/de viaje/de moda, estar a punto de + inf., estar para + inf., estar por + inf., Estamos a 15 de mayo." },
    { id: 12, category: 'Pièges', front: "Profession / nationalité : ser ou estar ?", back: "Toujours ser : Es médico, es española. Sans article si pas de qualificatif : Es médico (mais Es un médico excelente)." },
  ],
};
