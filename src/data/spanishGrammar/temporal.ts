import type { SpanishGrammarChapterContent } from './types';

// Chapitre 7 — Vocabulaire Temporel : Dates et Heures.
export const content: SpanishGrammarChapterContent = {
  slug: 'temporal',
  title: 'Vocabulaire Temporel : Dates et Heures',
  chapterNumber: 7,
  quizTitle: 'Quiz — Vocabulaire Temporel : Dates et Heures',
  quizQuestions: [
    {
      id: 1,
      question: "Comment dit-on « Il est une heure » ?",
      options: [
        { id: 'a', text: 'Son la una', correct: false },
        { id: 'b', text: 'Es la una', correct: true },
        { id: 'c', text: 'Es las una', correct: false },
        { id: 'd', text: 'Son las una', correct: false },
      ],
      explanation:
        "On utilise « es » (singulier) uniquement pour una hora : « Es la una ». Pour toutes les autres heures, on emploie « son » + l'article pluriel « las » : « Son las dos ».",
    },
    {
      id: 2,
      question: "« Il est deux heures et demie » se dit :",
      options: [
        { id: 'a', text: 'Es las dos y media', correct: false },
        { id: 'b', text: 'Son las dos y medio', correct: false },
        { id: 'c', text: 'Son las dos y media', correct: true },
        { id: 'd', text: 'Son las dos y la mitad', correct: false },
      ],
      explanation:
        "« Et demie » se dit « y media » (accord avec « media hora », sous-entendu). Le piège classique du correcteur est « medio » : on attend la forme féminine « media ».",
    },
    {
      id: 3,
      question: "« Il est trois heures moins le quart » se traduit par :",
      options: [
        { id: 'a', text: 'Son las tres menos cuarto', correct: true },
        { id: 'b', text: 'Es las tres menos cuarto', correct: false },
        { id: 'c', text: 'Son las dos menos cuarto', correct: false },
        { id: 'd', text: 'Son las tres menos un cuarto', correct: false },
      ],
      explanation:
        "« Moins le quart » = « menos cuarto » (sans article). On part de l'heure qui arrive : « las tres menos cuarto » (= 14h45). Ne pas confondre avec « las dos y cuarto » (2h15).",
    },
    {
      id: 4,
      question: "Comment précise-t-on « à quatre heures de l'après-midi » ?",
      options: [
        { id: 'a', text: 'a las cuatro por la tarde', correct: false },
        { id: 'b', text: 'a las cuatro de la tarde', correct: true },
        { id: 'c', text: 'a las cuatro en la tarde', correct: false },
        { id: 'd', text: 'a las cuatro a la tarde', correct: false },
      ],
      explanation:
        "Quand l'heure est précisée, le moment de la journée s'introduit par « de » : « las cuatro de la tarde ». On réserve « por la tarde » au moment sans heure (« Estudio por la tarde »).",
    },
    {
      id: 5,
      question: "« Le 12 octobre 2024 » s'écrit :",
      options: [
        { id: 'a', text: 'el 12 de octubre de 2024', correct: true },
        { id: 'b', text: 'el 12 octubre 2024', correct: false },
        { id: 'c', text: 'en 12 de octubre de 2024', correct: false },
        { id: 'd', text: 'el 12 de Octubre del 2024', correct: false },
      ],
      explanation:
        "Structure : « el » + jour + « de » + mois (minuscule) + « de » + année. « el 12 de octubre de 2024 ». Les mois ne prennent jamais de majuscule en espagnol.",
    },
    {
      id: 6,
      question: "Que signifie « El lunes voy al cine » ?",
      options: [
        { id: 'a', text: 'Le lundi (tous les lundis) je vais au cinéma', correct: false },
        { id: 'b', text: 'Lundi (prochain) je vais au cinéma', correct: true },
        { id: 'c', text: 'En semaine je vais au cinéma', correct: false },
        { id: 'd', text: 'Ce lundi passé je suis allé au cinéma', correct: false },
      ],
      explanation:
        "« El lunes » (singulier) = ce lundi-là / lundi prochain. « Los lunes » (pluriel) = tous les lundis. On ne met jamais de préposition « en » devant le jour : on dit « el lunes », pas « en lunes ».",
    },
    {
      id: 7,
      question: "« Vivo en Madrid desde hace tres años » signifie :",
      options: [
        { id: 'a', text: "Je vivrai à Madrid dans trois ans", correct: false },
        { id: 'b', text: "Je vis à Madrid depuis trois ans", correct: true },
        { id: 'c', text: "Je vivais à Madrid il y a trois ans", correct: false },
        { id: 'd', text: "J'ai vécu trois ans à Madrid", correct: false },
      ],
      explanation:
        "« Desde hace » + durée = « depuis » (durée écoulée, action qui continue). À distinguer de « desde » + date précise (« desde 2020 ») et de « hace tres años » seul = « il y a trois ans ».",
    },
    {
      id: 8,
      question: "Comment traduire « Cela fait deux heures que j'attends » ?",
      options: [
        { id: 'a', text: 'Hace dos horas que espero', correct: true },
        { id: 'b', text: 'Desde dos horas que espero', correct: false },
        { id: 'c', text: 'Hace dos horas espero', correct: false },
        { id: 'd', text: 'Por dos horas espero', correct: false },
      ],
      explanation:
        "Structure « Hace + durée + que + verbe au présent » = « Cela fait … que ». Le « que » est obligatoire. Équivalent : « Llevo dos horas esperando » (llevar + gérondif).",
    },
    {
      id: 9,
      question: "« Acabo de llegar » se traduit par :",
      options: [
        { id: 'a', text: "Je finis d'arriver", correct: false },
        { id: 'b', text: "Je viens d'arriver", correct: true },
        { id: 'c', text: "Je vais arriver", correct: false },
        { id: 'd', text: "J'arrive dans un instant", correct: false },
      ],
      explanation:
        "« Acabar de » + infinitif = passé récent « venir de ». « Acabo de llegar » = « je viens d'arriver ». Piège : ce n'est pas le sens littéral « finir de ».",
    },
    {
      id: 10,
      question: "« Le train part dans dix minutes » se dit :",
      options: [
        { id: 'a', text: 'El tren sale en diez minutos', correct: false },
        { id: 'b', text: 'El tren sale hace diez minutos', correct: false },
        { id: 'c', text: 'El tren sale dentro de diez minutos', correct: true },
        { id: 'd', text: 'El tren sale desde diez minutos', correct: false },
      ],
      explanation:
        "« Dentro de » + durée = « dans » (échéance future). « Dentro de diez minutos » = « dans dix minutes ». Le calque « en diez minutos » exprime plutôt la durée nécessaire pour faire quelque chose.",
    },
  ],
  flashcards: [
    { id: 1, category: "L'heure", front: "Dire l'heure : « es » ou « son » ?", back: "« Es la una » (une heure uniquement). « Son las dos / tres… » pour toutes les autres heures.", hint: 'es → 1h ; son → 2h+' },
    { id: 2, category: "L'heure", front: "« Et demie » et « et quart » en espagnol ?", back: "« y media » (et demie, féminin), « y cuarto » (et quart) : Son las cuatro y media. Son las cinco y cuarto." },
    { id: 3, category: "L'heure", front: "« Moins le quart » se dit comment ?", back: "« menos cuarto » (sans article). Son las ocho menos cuarto = 7h45. On part de l'heure qui arrive." },
    { id: 4, category: "L'heure", front: "« de la mañana » vs « por la mañana » ?", back: "« de la mañana / tarde / noche » quand l'heure est donnée (a las nueve de la mañana). « por la mañana » sans heure (Trabajo por la mañana)." },
    { id: 5, category: 'Dates', front: "Écrire une date complète en espagnol", back: "el + jour + de + mois (minuscule) + de + année : el 1 de mayo de 2025. Jamais de majuscule au mois." },
    { id: 6, category: 'Jours', front: "« el lunes » vs « los lunes » ?", back: "« el lunes » = lundi (prochain / ce lundi-là). « los lunes » = tous les lundis. Aucune préposition « en » devant le jour." },
    { id: 7, category: 'Durée', front: "Traduire « depuis » : deux structures clés", back: "« desde » + date/point précis (desde 2020). « desde hace » + durée (desde hace tres años = depuis trois ans)." },
    { id: 8, category: 'Durée', front: "« Cela fait … que » : deux tournures", back: "« Hace + durée + que + présent » (Hace dos años que vivo aquí) = « Llevo + durée + gérondif » (Llevo dos años viviendo aquí)." },
    { id: 9, category: 'Durée', front: "« hace » seul vs « desde hace »", back: "« hace tres años » = il y a trois ans (action ponctuelle révolue). « desde hace tres años » = depuis trois ans (action qui dure)." },
    { id: 10, category: 'Passé récent', front: "Traduire « venir de » + infinitif", back: "« acabar de » + infinitif : Acabo de comer = je viens de manger. Ne pas traduire par « finir de »." },
    { id: 11, category: 'Futur', front: "« dans X temps » (échéance future)", back: "« dentro de » + durée : Vuelvo dentro de una hora = je reviens dans une heure. « tardar en » + infinitif = mettre du temps à." },
    { id: 12, category: 'Saisons / mois', front: "Les quatre saisons en espagnol", back: "la primavera (printemps), el verano (été), el otoño (automne), el invierno (hiver). « en primavera », « en verano »…" },
  ],
};
