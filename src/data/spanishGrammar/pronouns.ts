import type { SpanishGrammarChapterContent } from './types';

// Chapitre 8 — Pronoms.
export const content: SpanishGrammarChapterContent = {
  slug: 'pronouns',
  title: 'Pronoms',
  chapterNumber: 8,
  quizTitle: 'Quiz — Pronoms',
  quizQuestions: [
    {
      id: 1,
      question: "Dans « Le di el libro a María », que remplace « le » ?",
      options: [
        { id: 'a', text: "Le livre (COD)", correct: false },
        { id: 'b', text: "À María (COI)", correct: true },
        { id: 'c', text: "Le sujet", correct: false },
        { id: 'd', text: "Rien, c'est un explétif inutile", correct: false },
      ],
      explanation:
        "« le » est le pronom COI (complément d'objet indirect) reprenant « a María ». Le redoublement du COI par « le » est très fréquent et obligatoire dans bien des cas en espagnol.",
    },
    {
      id: 2,
      question: "Traduisez « Je le vois » (le = un livre, masculin COD) :",
      options: [
        { id: 'a', text: 'Le veo', correct: false },
        { id: 'b', text: 'Lo veo', correct: true },
        { id: 'c', text: 'Se veo', correct: false },
        { id: 'd', text: 'Veo lo', correct: false },
      ],
      explanation:
        "COD masculin de chose = « lo » : « Lo veo ». Le « leísmo » (« le veo » pour une personne masculine) est toléré, mais jamais pour une chose.",
    },
    {
      id: 3,
      question: "« Se lo dije » : pourquoi « se » et non « le » ?",
      options: [
        { id: 'a', text: "Parce que c'est un verbe pronominal", correct: false },
        { id: 'b', text: "« le/les » devient « se » devant « lo/la/los/las »", correct: true },
        { id: 'c', text: "C'est une faute, il faut « le lo »", correct: false },
        { id: 'd', text: "« se » est ici réfléchi", correct: false },
      ],
      explanation:
        "Quand le COI « le » ou « les » précède un COD « lo/la/los/las », il se transforme obligatoirement en « se » : « le lo » → « se lo ». « Se lo dije » = je le lui ai dit.",
    },
    {
      id: 4,
      question: "Place des pronoms à l'impératif affirmatif : « Dis-le-moi ! » :",
      options: [
        { id: 'a', text: 'Me lo di', correct: false },
        { id: 'b', text: 'Di me lo', correct: false },
        { id: 'c', text: 'Dímelo', correct: true },
        { id: 'd', text: 'Lo me dices', correct: false },
      ],
      explanation:
        "À l'impératif affirmatif, les pronoms sont enclitiques (soudés après le verbe) dans l'ordre COI + COD : di + me + lo = « dímelo ». L'accent écrit conserve l'accentuation d'origine.",
    },
    {
      id: 5,
      question: "Après préposition, « avec moi » se dit :",
      options: [
        { id: 'a', text: 'con mí', correct: false },
        { id: 'b', text: 'con yo', correct: false },
        { id: 'c', text: 'conmigo', correct: true },
        { id: 'd', text: 'con me', correct: false },
      ],
      explanation:
        "Les formes après préposition sont « mí », « ti », mais avec « con » on a les formes soudées « conmigo », « contigo », « consigo ». « con mí » est une faute.",
    },
    {
      id: 6,
      question: "« No lo sabía » — ici « lo » est :",
      options: [
        { id: 'a', text: "Un COD masculin singulier précis", correct: false },
        { id: 'b', text: "Le pronom neutre (reprend une idée / proposition)", correct: true },
        { id: 'c', text: "Un article", correct: false },
        { id: 'd', text: "Un pronom sujet", correct: false },
      ],
      explanation:
        "« lo » neutre reprend une idée entière, un attribut ou une proposition : « No lo sabía » = je ne le savais pas (cela). Il est invariable.",
    },
    {
      id: 7,
      question: "« Su casa » est ambigu. Pour préciser « sa maison à elle », on peut dire :",
      options: [
        { id: 'a', text: 'la casa suya', correct: false },
        { id: 'b', text: 'la casa de ella', correct: true },
        { id: 'c', text: 'la su casa', correct: false },
        { id: 'd', text: 'casa la ella', correct: false },
      ],
      explanation:
        "« su / suyo » peut renvoyer à usted, él, ella, ellos, ellas. Pour lever l'ambiguïté, on emploie « de él / de ella / de usted… » : « la casa de ella ».",
    },
    {
      id: 8,
      question: "Démonstratif d'éloignement (« cette montagne là-bas ») :",
      options: [
        { id: 'a', text: 'esta montaña', correct: false },
        { id: 'b', text: 'esa montaña', correct: false },
        { id: 'c', text: 'aquella montaña', correct: true },
        { id: 'd', text: 'aquí montaña', correct: false },
      ],
      explanation:
        "Trois degrés : « este » (près de moi), « ese » (près de toi), « aquel » (loin des deux). « aquella montaña » = cette montagne là-bas, au loin.",
    },
    {
      id: 9,
      question: "« Se me cayó el vaso » exprime :",
      options: [
        { id: 'a', text: "Un acte volontaire : j'ai jeté le verre", correct: false },
        { id: 'b', text: "Un événement involontaire : le verre m'est tombé", correct: true },
        { id: 'c', text: "Une voix passive : le verre a été tombé", correct: false },
        { id: 'd', text: "Un ordre", correct: false },
      ],
      explanation:
        "Le « se » d'involontarité déresponsabilise : « Se me cayó el vaso » = le verre m'est tombé (sans le faire exprès). Le verbe s'accorde avec « el vaso ».",
    },
    {
      id: 10,
      question: "« Se venden pisos » est un exemple de :",
      options: [
        { id: 'a', text: "« se » réfléchi", correct: false },
        { id: 'b', text: "« se » réciproque", correct: false },
        { id: 'c', text: "« se » passif / impersonnel", correct: true },
        { id: 'd', text: "« se » de substitution de COI", correct: false },
      ],
      explanation:
        "« Se + verbe + sujet » exprime la passive pronominale : « Se venden pisos » = on vend des appartements / appartements à vendre. Le verbe s'accorde avec « pisos » (pluriel).",
    },
  ],
  flashcards: [
    { id: 1, category: 'Sujets', front: "Le tutoiement et le vouvoiement de politesse", back: "tú / vos (voseo, Argentine) = tu ; usted + verbe à la 3e pers. = vous de politesse. « ¿Cómo está usted? »", hint: 'usted → 3e personne' },
    { id: 2, category: 'COD / COI', front: "Pronoms COD de 3e personne", back: "lo / la / los / las. Chose ou personne COD : « Lo veo » (le), « La veo » (la), « Los veo » (les)." },
    { id: 3, category: 'COD / COI', front: "Pronoms COI de 3e personne", back: "le / les (à lui, à elle, à eux). « Le di el libro » = je lui ai donné le livre." },
    { id: 4, category: 'COD / COI', front: "Le « leísmo » : qu'est-ce que c'est ?", back: "Emploi toléré de « le » comme COD pour une personne masculine : « Le vi » (= lo vi) pour « je l'ai vu (lui) ». Jamais pour une chose." },
    { id: 5, category: 'Double pronom', front: "Ordre des deux pronoms et règle du « se »", back: "COI avant COD ; « le/les » → « se » devant lo/la/los/las : Se lo dije = je le lui ai dit." },
    { id: 6, category: 'Place', front: "Place des pronoms avec infinitif / gérondif", back: "Avant le verbe conjugué OU soudés après l'infinitif/gérondif : « Voy a decírtelo » = « Te lo voy a decir »." },
    { id: 7, category: 'Place', front: "Pronoms à l'impératif affirmatif", back: "Enclise obligatoire : Dímelo, Háztelo, Dáselo. (À l'impératif négatif : avant le verbe — No me lo digas.)" },
    { id: 8, category: 'Après préposition', front: "Pronoms après préposition", back: "para mí, a ti, según él… mais con + moi/toi/soi = conmigo, contigo, consigo. « sí » = soi (réfléchi)." },
    { id: 9, category: 'Neutre', front: "Le pronom neutre « lo »", back: "Reprend une idée, un attribut ou une proposition entière, invariable : « ¿Es médico? — Sí, lo es. » / « No lo sé »." },
    { id: 10, category: 'Possessifs', front: "L'ambiguïté de « su / suyo »", back: "« su » = de usted, de él, de ella, de ellos… On précise avec « de él / de ella / de usted » : la casa de ella." },
    { id: 11, category: 'Démonstratifs', front: "Les trois degrés démonstratifs", back: "este (ici, près de moi), ese (près de toi), aquel (là-bas, loin des deux). Esta, esa, aquella au féminin." },
    { id: 12, category: 'Le « se »', front: "Les valeurs du « se »", back: "Réfléchi (se lava), réciproque (se aman), impersonnel/passif (se vende), involontaire (se me cayó), substitut de le/les (se lo dije)." },
  ],
};
