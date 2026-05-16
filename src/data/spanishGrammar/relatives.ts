import type { SpanishGrammarChapterContent } from './types';

// Chapitre 15 — Subordonnées Relatives.
export const content: SpanishGrammarChapterContent = {
  slug: 'relatives',
  title: 'Subordonnées Relatives',
  chapterNumber: 15,
  quizTitle: 'Quiz — Subordonnées Relatives',
  quizQuestions: [
    {
      id: 1,
      question: "Quel est le pronom relatif universel, sujet ou COD, sans préposition ?",
      options: [
        { id: 'a', text: 'quien', correct: false },
        { id: 'b', text: 'que', correct: true },
        { id: 'c', text: 'cual', correct: false },
        { id: 'd', text: 'cuyo', correct: false },
      ],
      explanation:
        "« Que » est le relatif passe-partout (personnes ou choses) en fonction sujet ou COD sans préposition : El libro que leo ; La mujer que canta.",
    },
    {
      id: 2,
      question: "Complétez : « El profesor ___ te hablé es muy exigente. » (= dont / de qui je t'ai parlé)",
      options: [
        { id: 'a', text: 'que', correct: false },
        { id: 'b', text: 'de quien', correct: true },
        { id: 'c', text: 'cuyo', correct: false },
        { id: 'd', text: 'lo que', correct: false },
      ],
      explanation:
        "Après une préposition (hablar de) et pour une personne, on emploie « de quien » (ou « del que / del cual »). Piège : « cuyo » traduit « dont » seulement quand il y a possession.",
    },
    {
      id: 3,
      question: "« Le ministre dont la politique est critiquée » : choisissez la bonne traduction.",
      options: [
        { id: 'a', text: 'El ministro que su política es criticada', correct: false },
        { id: 'b', text: 'El ministro cuya política es criticada', correct: true },
        { id: 'c', text: 'El ministro de quien la política es criticada', correct: false },
        { id: 'd', text: 'El ministro cuyo política es criticada', correct: false },
      ],
      explanation:
        "« Cuyo » exprime la possession (= dont le/la) et s'accorde avec le NOM POSSÉDÉ, pas avec le possesseur : política est féminin singulier → cuya. « que su » est un calque fautif lourdement sanctionné.",
    },
    {
      id: 4,
      question: "« No vino, ___ me sorprendió mucho. » (= ce qui m'a beaucoup surpris)",
      options: [
        { id: 'a', text: 'que', correct: false },
        { id: 'b', text: 'el que', correct: false },
        { id: 'c', text: 'lo cual', correct: true },
        { id: 'd', text: 'cuyo', correct: false },
      ],
      explanation:
        "« Lo cual » (ou « lo que ») est le relatif neutre : il reprend toute une idée / proposition précédente, pas un nom précis. Après une virgule on préfère « lo cual ».",
    },
    {
      id: 5,
      question: "« La ciudad ___ nací ha cambiado mucho. » (= où je suis né)",
      options: [
        { id: 'a', text: 'donde', correct: true },
        { id: 'b', text: 'que', correct: false },
        { id: 'c', text: 'cual', correct: false },
        { id: 'd', text: 'cuya', correct: false },
      ],
      explanation:
        "« Donde » (= en la que / en la cual) exprime le lieu. Alternative correcte : « La ciudad en la que nací ». « que » seul serait fautif ici (complément de lieu).",
    },
    {
      id: 6,
      question: "Après une préposition longue, registre soutenu : « La razón por ___ lo hizo es clara. »",
      options: [
        { id: 'a', text: 'que', correct: false },
        { id: 'b', text: 'la cual', correct: true },
        { id: 'c', text: 'cuya', correct: false },
        { id: 'd', text: 'quien', correct: false },
      ],
      explanation:
        "Avec une préposition (por) et pour une chose, on emploie « el/la cual » ou « el/la que ». « La cual » s'accorde avec « razón » (féminin). On évite « que » seul après préposition dans le registre soutenu.",
    },
    {
      id: 7,
      question: "Relative apposée à une personne (entre virgules) : « Mi hermano, ___ vive en Madrid, vendrá. »",
      options: [
        { id: 'a', text: 'que', correct: false },
        { id: 'b', text: 'quien', correct: true },
        { id: 'c', text: 'cuyo', correct: false },
        { id: 'd', text: 'lo que', correct: false },
      ],
      explanation:
        "Dans une relative explicative (entre virgules) renvoyant à une personne, « quien » est élégant et fréquent à l'écrit : Mi hermano, quien vive en Madrid, vendrá. « Que » reste possible mais « quien » est valorisé.",
    },
    {
      id: 8,
      question: "« Los autores ___ obras estudiamos son famosos. » (= dont nous étudions les œuvres)",
      options: [
        { id: 'a', text: 'cuyas', correct: true },
        { id: 'b', text: 'cuyos', correct: false },
        { id: 'c', text: 'que', correct: false },
        { id: 'd', text: 'de quienes', correct: false },
      ],
      explanation:
        "« Cuyo » s'accorde avec le possédé (obras = féminin pluriel) → cuyas, jamais avec le possesseur (autores). Los autores cuyas obras estudiamos.",
    },
    {
      id: 9,
      question: "« ___ que dijiste no es verdad. » (= ce que tu as dit)",
      options: [
        { id: 'a', text: 'El', correct: false },
        { id: 'b', text: 'Lo', correct: true },
        { id: 'c', text: 'La', correct: false },
        { id: 'd', text: 'Que', correct: false },
      ],
      explanation:
        "« Lo que » (neutre) traduit « ce que / ce qui » quand l'antécédent n'est pas un nom précis : Lo que dijiste no es verdad. Ne pas confondre avec « el que » (= celui qui).",
    },
    {
      id: 10,
      question: "« El hecho de que ___ tarde no cambia nada. » (llegar)",
      options: [
        { id: 'a', text: 'llegas', correct: false },
        { id: 'b', text: 'llegues', correct: true },
        { id: 'c', text: 'llegará', correct: false },
        { id: 'd', text: 'llegar', correct: false },
      ],
      explanation:
        "La locution « el hecho de que » est suivie du subjonctif : El hecho de que llegues tarde no cambia nada. C'est un point de difficulté récurrent aux concours.",
    },
  ],
  flashcards: [
    { id: 1, category: 'Que', front: "Le relatif universel sujet/COD sans préposition ?", back: "« que » (personnes ou choses) : El libro que leo ; La mujer que canta.", hint: 'passe-partout' },
    { id: 2, category: 'Quien', front: "Quand employer « quien / quienes » ?", back: "Pour les personnes : après préposition (la chica con quien hablo) ou en relative explicative (Mi padre, quien…)." },
    { id: 3, category: 'El cual', front: "« el que / el cual » : à quoi servent-ils ?", back: "Registre soutenu, après préposition longue, et pour lever une ambiguïté de genre/nombre : la razón por la cual…" },
    { id: 4, category: 'Cuyo', front: "Que traduit « cuyo » et avec quoi s'accorde-t-il ?", back: "« dont » possessif. S'accorde avec le NOM POSSÉDÉ : el autor cuya obra ; los autores cuyas obras." },
    { id: 5, category: 'Cuyo', front: "Erreur n°1 du correcteur sur « dont » possessif ?", back: "Le calque « que su » : « el ministro que su política » → FAUX. Il faut « el ministro cuya política »." },
    { id: 6, category: 'Neutre', front: "« lo que » vs « lo cual » ?", back: "Relatif neutre reprenant une idée/proposition. « lo cual » plutôt après virgule : No vino, lo cual me sorprendió." },
    { id: 7, category: 'Lieu', front: "Comment traduire le relatif de lieu « où » ?", back: "« donde » = « en el/la que ». La ciudad donde nací = la ciudad en la que nací." },
    { id: 8, category: 'Dont', front: "Traduire « dont » sans possession (de + verbe) ?", back: "« de quien / del que / del cual » : el profesor de quien te hablé. (Pas « cuyo » : il n'y a pas de possession.)" },
    { id: 9, category: 'Dont', front: "Traduire « dont » neutre (ce dont) ?", back: "« de lo que / de lo cual » : Eso es de lo que hablábamos." },
    { id: 10, category: 'Explicative', front: "Relative explicative vs déterminative ?", back: "Explicative entre virgules (info accessoire) ; déterminative sans virgule (restreint le sens). Ponctuation décisive." },
    { id: 11, category: 'Lo que', front: "Traduire « ce que / ce qui » antécédent imprécis ?", back: "« lo que » : Lo que dijiste no es verdad. Ne pas confondre avec « el que » (= celui qui)." },
    { id: 12, category: 'Subjonctif', front: "« el hecho de que » + verbe → quel mode ?", back: "Subjonctif : El hecho de que llegues tarde no cambia nada." },
  ],
};
