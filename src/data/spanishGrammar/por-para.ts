import type { SpanishGrammarChapterContent } from './types';

// Chapitre 16 — Por vs Para.
export const content: SpanishGrammarChapterContent = {
  slug: 'por-para',
  title: 'Por vs Para',
  chapterNumber: 16,
  quizTitle: 'Quiz — Por vs Para',
  quizQuestions: [
    {
      id: 1,
      question: "« Estudio mucho ___ aprobar el examen. » (= dans le but de réussir)",
      options: [
        { id: 'a', text: 'por', correct: false },
        { id: 'b', text: 'para', correct: true },
        { id: 'c', text: 'por que', correct: false },
        { id: 'd', text: 'para que', correct: false },
      ],
      explanation:
        "« Para » exprime le but, la finalité (+ infinitif quand le sujet est le même) : Estudio para aprobar. C'est la confusion n°1 sanctionnée par les correcteurs.",
    },
    {
      id: 2,
      question: "« Lo hice ___ ti, porque te quiero. » (= à cause de toi / pour toi, motif affectif)",
      options: [
        { id: 'a', text: 'para', correct: false },
        { id: 'b', text: 'por', correct: true },
        { id: 'c', text: 'porque', correct: false },
        { id: 'd', text: 'para que', correct: false },
      ],
      explanation:
        "« Por ti » = à cause de toi / pour l'amour de toi (cause, motivation). À comparer avec « Este regalo es para ti » (destinataire → para).",
    },
    {
      id: 3,
      question: "« Este regalo es ___ ti. » (= destiné à toi)",
      options: [
        { id: 'a', text: 'por', correct: false },
        { id: 'b', text: 'para', correct: true },
        { id: 'c', text: 'a', correct: false },
        { id: 'd', text: 'de', correct: false },
      ],
      explanation:
        "« Para » introduit le destinataire : Este regalo es para ti. Paire contrastive à connaître : « por ti » (cause) vs « para ti » (destinataire).",
    },
    {
      id: 4,
      question: "« Pasé ___ el parque para llegar antes. » (= à travers / en passant par)",
      options: [
        { id: 'a', text: 'para', correct: false },
        { id: 'b', text: 'por', correct: true },
        { id: 'c', text: 'a', correct: false },
        { id: 'd', text: 'en', correct: false },
      ],
      explanation:
        "« Por » exprime le lieu de passage / le trajet (à travers, le long de) : Pasé por el parque. Noter le « para » final = but.",
    },
    {
      id: 5,
      question: "« El informe estará listo ___ el lunes. » (= pour lundi, échéance)",
      options: [
        { id: 'a', text: 'por', correct: false },
        { id: 'b', text: 'para', correct: true },
        { id: 'c', text: 'en', correct: false },
        { id: 'd', text: 'a', correct: false },
      ],
      explanation:
        "« Para » indique l'échéance, la date limite : para el lunes (= au plus tard lundi). « Por el lunes » signifierait « aux alentours de lundi » (moment approximatif).",
    },
    {
      id: 6,
      question: "« Te cambio mi bici ___ tu móvil. » (= en échange de)",
      options: [
        { id: 'a', text: 'para', correct: false },
        { id: 'b', text: 'por', correct: true },
        { id: 'c', text: 'con', correct: false },
        { id: 'd', text: 'de', correct: false },
      ],
      explanation:
        "« Por » exprime l'échange, le prix : Lo compré por diez euros ; Te cambio mi bici por tu móvil.",
    },
    {
      id: 7,
      question: "« La novela fue escrita ___ Cervantes. » (complément d'agent du passif)",
      options: [
        { id: 'a', text: 'para', correct: false },
        { id: 'b', text: 'por', correct: true },
        { id: 'c', text: 'de', correct: false },
        { id: 'd', text: 'con', correct: false },
      ],
      explanation:
        "Au passif, le complément d'agent (= « par ») est introduit par « por » : fue escrita por Cervantes. Jamais « para » ici.",
    },
    {
      id: 8,
      question: "« ___ mí, esta decisión es un error. » (= selon moi, à mon avis)",
      options: [
        { id: 'a', text: 'Por', correct: false },
        { id: 'b', text: 'Para', correct: true },
        { id: 'c', text: 'Según para', correct: false },
        { id: 'd', text: 'A por', correct: false },
      ],
      explanation:
        "« Para mí » = à mon avis / selon moi (opinion). Ne pas confondre avec « por mí » (= en ce qui me concerne / à cause de moi).",
    },
    {
      id: 9,
      question: "« Todavía está ___ hacer los deberes. » (= il reste à faire)",
      options: [
        { id: 'a', text: 'para', correct: false },
        { id: 'b', text: 'por', correct: true },
        { id: 'c', text: 'a', correct: false },
        { id: 'd', text: 'de', correct: false },
      ],
      explanation:
        "« Estar por + infinitif » = rester à faire (action non encore accomplie) : Está por hacer. À distinguer de « estar para + infinitif » = être sur le point de / être d'humeur à.",
    },
    {
      id: 10,
      question: "Quelle locution figée est correcte ?",
      options: [
        { id: 'a', text: 'para fin (= enfin)', correct: false },
        { id: 'b', text: 'por supuesto (= bien sûr)', correct: true },
        { id: 'c', text: 'por siempre (= pour toujours, usuel)', correct: false },
        { id: 'd', text: 'para lo tanto (= donc)', correct: false },
      ],
      explanation:
        "Locutions figées à mémoriser : por fin (enfin), por supuesto (bien sûr), por cierto (au fait), por lo tanto (donc) ; para siempre (pour toujours), para colmo (pour couronner le tout).",
    },
  ],
  flashcards: [
    { id: 1, category: 'Para', front: "« para » : valeur fondamentale ?", back: "But / finalité, destination, destinataire, échéance : Estudio para aprobar ; es para ti ; para el lunes.", hint: 'flèche vers un objectif' },
    { id: 2, category: 'Por', front: "« por » : valeur fondamentale ?", back: "Cause / motif, trajet (à travers), échange/prix, agent du passif, durée approximative : Lo hice por ti ; pasé por el parque." },
    { id: 3, category: 'Contraste', front: "« por ti » vs « para ti » ?", back: "por ti = à cause de / pour l'amour de toi (cause) ; para ti = destiné à toi (destinataire)." },
    { id: 4, category: 'Para', front: "Exprimer une opinion (« selon moi ») ?", back: "« para mí » : Para mí, es un error. (≠ por mí = en ce qui me concerne)." },
    { id: 5, category: 'Por', front: "Le complément d'agent du passif (= « par ») ?", back: "« por » : La novela fue escrita por Cervantes. Jamais « para »." },
    { id: 6, category: 'Por', front: "Échange, prix, multiplication ?", back: "« por » : Lo compré por diez euros ; gracias por todo ; tres por cuatro." },
    { id: 7, category: 'Contraste', front: "« para el lunes » vs « por el lunes » ?", back: "para el lunes = échéance (au plus tard lundi) ; por el lunes = moment approximatif (vers lundi)." },
    { id: 8, category: 'Temps', front: "« por la mañana / por la tarde » : valeur ?", back: "Moment de la journée (durée approximative) : Estudio por la mañana. (Pas « para ».)" },
    { id: 9, category: 'Estar', front: "« estar para » vs « estar por » + infinitif ?", back: "estar para = être sur le point de / d'humeur à (No estoy para bromas) ; estar por = rester à faire (Está por hacer)." },
    { id: 10, category: 'Por + inf', front: "« por + infinitif » : deux sens ?", back: "Cause (Lo castigaron por mentir) ou action restant à accomplir (La casa está por construir)." },
    { id: 11, category: 'Locutions', front: "Locutions figées avec « por » ?", back: "por fin (enfin), por supuesto (bien sûr), por cierto (au fait), por lo tanto (donc), por si acaso (au cas où)." },
    { id: 12, category: 'Locutions', front: "Locutions figées avec « para » ?", back: "para siempre (pour toujours), para colmo (pour couronner le tout), no estar para bromas (ne pas être d'humeur à plaisanter)." },
  ],
};
