import type { SpanishGrammarChapterContent } from './types';

// Chapitre 5 — Questions et Interrogatifs. Quiz + flashcards rédigés à la main,
// au gabarit de qualité de subjonctif.ts.
export const content: SpanishGrammarChapterContent = {
  slug: 'questions',
  title: 'Questions et Interrogatifs',
  chapterNumber: 5,
  quizTitle: 'Quiz — Questions et Interrogatifs',
  quizQuestions: [
    {
      id: 1,
      question: "Quelle phrase est correctement accentuée et ponctuée ?",
      options: [
        { id: 'a', text: '¿Que quieres?', correct: false },
        { id: 'b', text: '¿Qué quieres?', correct: true },
        { id: 'c', text: 'Qué quieres?', correct: false },
        { id: 'd', text: '¿Qué quieres', correct: false },
      ],
      explanation:
        "L'interrogatif porte un accent écrit (qué) et la question est encadrée par ¿ … ? Oublier le ¿ initial ou l'accent est sanctionné par le correcteur.",
    },
    {
      id: 2,
      question: "Choisissez : « ¿___ es la capital de Perú ? »",
      options: [
        { id: 'a', text: 'Qué', correct: false },
        { id: 'b', text: 'Cuál', correct: true },
        { id: 'c', text: 'Cómo', correct: false },
        { id: 'd', text: 'Quién', correct: false },
      ],
      explanation:
        "Devant « ser » + nom, on emploie « cuál » pour un choix dans un ensemble : ¿Cuál es la capital ? « ¿Qué es… ? » demanderait une définition.",
    },
    {
      id: 3,
      question: "Quelle phrase demande une DÉFINITION (« qu'est-ce que c'est ») ?",
      options: [
        { id: 'a', text: '¿Cuál es tu problema?', correct: false },
        { id: 'b', text: '¿Qué es la fotosíntesis?', correct: true },
        { id: 'c', text: '¿Cuál prefieres?', correct: false },
        { id: 'd', text: '¿Quién es?', correct: false },
      ],
      explanation:
        "« ¿Qué es… ? » réclame une définition / une nature. « ¿Cuál es… ? » réclame une identification dans un ensemble. C'est le piège classique qué / cuál + ser.",
    },
    {
      id: 4,
      question: "Distinguez : laquelle de ces formes signifie « parce que » (réponse) ?",
      options: [
        { id: 'a', text: 'por qué', correct: false },
        { id: 'b', text: 'porque', correct: true },
        { id: 'c', text: 'el porqué', correct: false },
        { id: 'd', text: 'por que', correct: false },
      ],
      explanation:
        "« ¿Por qué? » = pourquoi (question) ; « porque » = parce que (cause) ; « el porqué » = le pourquoi (nom). Trois orthographes que le correcteur surveille de près.",
    },
    {
      id: 5,
      question: "Traduisez « D'où viens-tu ? » (préposition devant l'interrogatif)",
      options: [
        { id: 'a', text: '¿Dónde vienes de?', correct: false },
        { id: 'b', text: '¿De dónde vienes?', correct: true },
        { id: 'c', text: '¿Donde vienes?', correct: false },
        { id: 'd', text: '¿De donde vienes?', correct: false },
      ],
      explanation:
        "En espagnol la préposition se place TOUJOURS devant l'interrogatif (jamais à la fin comme en anglais) : ¿De dónde…?, ¿Con quién…?, ¿Para qué…?",
    },
    {
      id: 6,
      question: "Complétez l'interrogation indirecte : « No sé ___ ha venido. » (qui)",
      options: [
        { id: 'a', text: 'quien', correct: false },
        { id: 'b', text: 'quién', correct: true },
        { id: 'c', text: 'que', correct: false },
        { id: 'd', text: 'cual', correct: false },
      ],
      explanation:
        "Dans l'interrogation indirecte, l'interrogatif garde son accent écrit même sans ¿ ? : No sé quién ha venido. Dime cuándo llegas.",
    },
    {
      id: 7,
      question: "« ¿___ cuesta el billete ? » (quantité / prix)",
      options: [
        { id: 'a', text: 'Cómo', correct: false },
        { id: 'b', text: 'Cuándo', correct: false },
        { id: 'c', text: 'Cuánto', correct: true },
        { id: 'd', text: 'Cuál', correct: false },
      ],
      explanation:
        "« Cuánto » interroge sur la quantité / le prix : ¿Cuánto cuesta ? Il s'accorde devant un nom : ¿Cuántos años tienes ? ¿Cuántas personas hay ?",
    },
    {
      id: 8,
      question: "Quelle phrase ajoute une demande de confirmation correcte (« n'est-ce pas ? ») ?",
      options: [
        { id: 'a', text: 'Eres español, ¿verdad?', correct: true },
        { id: 'b', text: "Eres español, ¿n'est-ce pas?", correct: false },
        { id: 'c', text: 'Eres español, ¿qué?', correct: false },
        { id: 'd', text: 'Eres español, ¿cuál?', correct: false },
      ],
      explanation:
        "On confirme avec « ¿verdad? » ou « ¿no? » en fin de phrase : Eres español, ¿verdad? / Vienes, ¿no? C'est l'équivalent du « n'est-ce pas ? » français.",
    },
    {
      id: 9,
      question: "« ¿___ es tu profesor ? » Pour demander l'identité d'une personne.",
      options: [
        { id: 'a', text: 'Qué', correct: false },
        { id: 'b', text: 'Quién', correct: true },
        { id: 'c', text: 'Cuál', correct: false },
        { id: 'd', text: 'Cómo', correct: false },
      ],
      explanation:
        "« Quién » interroge sur une personne (identité). Au pluriel : ¿Quiénes son ? Ne pas confondre avec « cómo » (manière) : ¿Cómo es ? = comment est-il ?",
    },
    {
      id: 10,
      question: "Quelle phrase est une question rhétorique correctement formulée ?",
      options: [
        { id: 'a', text: '¿Quién no querría ser feliz?', correct: true },
        { id: 'b', text: 'Quién no querría ser feliz.', correct: false },
        { id: 'c', text: '¿Quien no querria ser feliz?', correct: false },
        { id: 'd', text: 'Por qué no querría ser feliz', correct: false },
      ],
      explanation:
        "La question rhétorique garde ¿ ? et l'accent (quién) : ¿Quién no querría ser feliz? Elle n'attend pas de réponse mais affirme implicitement.",
    },
  ],
  flashcards: [
    { id: 1, category: 'Accentuation', front: "Pourquoi « qué », « quién », « dónde » portent-ils un accent ?", back: "Accent diacritique : il distingue l'interrogatif/exclamatif du relatif ou de la conjonction. ¿Qué dices? vs Sé que vienes.", hint: 'interrogatif/exclamatif = accent' },
    { id: 2, category: 'Ponctuation', front: "Comment ponctue-t-on une question en espagnol ?", back: "Signe ouvrant ¿ + signe fermant ? : ¿Vienes mañana? Idem pour l'exclamation : ¡Qué bien!" },
    { id: 3, category: 'Qué / Cuál', front: "¿Qué? vs ¿Cuál? devant « ser »", back: "¿Qué es…? = définition/nature. ¿Cuál es…? = choix/identification dans un ensemble. ¿Cuál es tu número?" },
    { id: 4, category: 'Qué / Cuál', front: "¿Qué? ou ¿Cuál? directement devant un nom ?", back: "On préfère « qué » + nom : ¿Qué libro quieres? « cuál » + nom est rare et marqué régional." },
    { id: 5, category: 'Por qué', front: "Les quatre formes : por qué / porque / porqué / por que", back: "¿Por qué? = pourquoi (Q). Porque = parce que. El porqué = le motif (nom). Por que = par lequel (relatif + prép.)." },
    { id: 6, category: 'Prépositions', front: "Où place-t-on la préposition devant un interrogatif ?", back: "TOUJOURS avant l'interrogatif : ¿De dónde eres? ¿Con quién vas? ¿A qué hora? ¿Para qué sirve?" },
    { id: 7, category: 'Interrogatifs', front: "Liste des principaux interrogatifs", back: "qué, quién(es), cuál(es), cómo, cuándo, dónde, cuánto(a/os/as), por qué, para qué, adónde." },
    { id: 8, category: 'Cuánto', front: "Comment se comporte « cuánto » ?", back: "Il s'accorde devant un nom : ¿Cuántos años? ¿Cuántas chicas? Invariable comme adverbe : ¿Cuánto cuesta?" },
    { id: 9, category: 'Indirecte', front: "L'interrogatif garde-t-il son accent dans l'interrogation indirecte ?", back: "Oui, même sans ¿ ? : No sé qué hacer. Dime dónde estás. Pregunta cuándo vuelve." },
    { id: 10, category: 'Quién / Cómo', front: "¿Quién? vs ¿Cómo? pour une personne", back: "¿Quién es? = qui est-ce (identité). ¿Cómo es? = comment est-il (description). ¿Cómo está? = comment va-t-il (état)." },
    { id: 11, category: 'Confirmation', front: "Comment dire « n'est-ce pas ? » à la fin d'une phrase ?", back: "¿verdad? ou ¿no? : Hace frío, ¿verdad? Has terminado, ¿no? Évite tout calque du français." },
    { id: 12, category: 'Rhétorique', front: "Qu'est-ce qu'une question rhétorique en espagnol ?", back: "Question à valeur d'affirmation, sans réponse attendue, ponctuée normalement : ¿Quién no soñaría con eso?" },
  ],
};
