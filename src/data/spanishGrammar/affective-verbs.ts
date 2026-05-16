import type { SpanishGrammarChapterContent } from './types';

// Chapitre 9 — Verbes Particuliers et Tournures Affectives.
export const content: SpanishGrammarChapterContent = {
  slug: 'affective-verbs',
  title: 'Verbes Particuliers et Tournures Affectives',
  chapterNumber: 9,
  quizTitle: 'Quiz — Verbes Particuliers et Tournures Affectives',
  quizQuestions: [
    {
      id: 1,
      question: "« J'aime cette chanson » se traduit par :",
      options: [
        { id: 'a', text: 'Yo gusto esta canción', correct: false },
        { id: 'b', text: 'Me gusta esta canción', correct: true },
        { id: 'c', text: 'Me gusto esta canción', correct: false },
        { id: 'd', text: 'Me gustan esta canción', correct: false },
      ],
      explanation:
        "« Gustar » fonctionne à l'envers : le sujet grammatical est la chose aimée (« esta canción »), la personne est COI (« me »). Sujet singulier → « gusta ».",
    },
    {
      id: 2,
      question: "« J'aime les langues » :",
      options: [
        { id: 'a', text: 'Me gusta los idiomas', correct: false },
        { id: 'b', text: 'Me gustan los idiomas', correct: true },
        { id: 'c', text: 'Yo gusto los idiomas', correct: false },
        { id: 'd', text: 'Me gusto los idiomas', correct: false },
      ],
      explanation:
        "Le verbe s'accorde avec le sujet réel « los idiomas » (pluriel) → « gustan ». C'est l'erreur n°1 corrigée : oublier l'accord au pluriel.",
    },
    {
      id: 3,
      question: "Pour insister « MOI, j'aime le café » :",
      options: [
        { id: 'a', text: 'Yo me gusta el café', correct: false },
        { id: 'b', text: 'A mí me gusta el café', correct: true },
        { id: 'c', text: 'Mí gusta el café', correct: false },
        { id: 'd', text: 'A yo me gusta el café', correct: false },
      ],
      explanation:
        "On renforce avec « a + pronom tonique » qui redouble le COI : « A mí me gusta… », « A ti te gusta… ». Le « me » reste obligatoire ; « yo » est impossible ici.",
    },
    {
      id: 4,
      question: "« J'ai mal à la tête » se dit :",
      options: [
        { id: 'a', text: 'Me duele mi cabeza', correct: false },
        { id: 'b', text: 'Tengo dolor de mi cabeza', correct: false },
        { id: 'c', text: 'Me duele la cabeza', correct: true },
        { id: 'd', text: 'Duelo la cabeza', correct: false },
      ],
      explanation:
        "« Doler » se construit comme « gustar » et la partie du corps prend l'article défini, pas le possessif : « Me duele la cabeza ». Calquer « mi cabeza » est fautif.",
    },
    {
      id: 5,
      question: "« Il me manque deux euros » :",
      options: [
        { id: 'a', text: 'Yo falto dos euros', correct: false },
        { id: 'b', text: 'Me faltan dos euros', correct: true },
        { id: 'c', text: 'Me falta dos euros', correct: false },
        { id: 'd', text: 'Falto de dos euros', correct: false },
      ],
      explanation:
        "« Faltar » suit le modèle de « gustar ». Sujet réel « dos euros » (pluriel) → « faltan ». « Me faltan dos euros » = il me manque deux euros.",
    },
    {
      id: 6,
      question: "« Tu me manques » (tu me fais défaut, je m'ennuie de toi) :",
      options: [
        { id: 'a', text: 'Me faltas', correct: false },
        { id: 'b', text: 'Te echo de menos', correct: true },
        { id: 'c', text: 'Me extrañas', correct: false },
        { id: 'd', text: 'Te falto de menos', correct: false },
      ],
      explanation:
        "« Quelqu'un me manque » (affectif) = « echar de menos » ou « extrañar » (Am. lat.) : « Te echo de menos » / « Te extraño » = tu me manques. Construction directe, non inversée.",
    },
    {
      id: 7,
      question: "« Il est devenu riche (effort, processus) » :",
      options: [
        { id: 'a', text: 'Se hizo rico', correct: true },
        { id: 'b', text: 'Se puso rico', correct: false },
        { id: 'c', text: 'Se volvió rico de repente', correct: false },
        { id: 'd', text: 'Llegó rico', correct: false },
      ],
      explanation:
        "« Hacerse » = devenir par effort / évolution volontaire (richesse, profession, idéologie) : « Se hizo rico ». « Ponerse » = changement passager (Se puso rojo), « volverse » = changement involontaire et durable.",
    },
    {
      id: 8,
      question: "« Elle est devenue très pâle (subitement) » :",
      options: [
        { id: 'a', text: 'Se hizo muy pálida', correct: false },
        { id: 'b', text: 'Se volvió muy pálida', correct: false },
        { id: 'c', text: 'Se puso muy pálida', correct: true },
        { id: 'd', text: 'Llegó a ser muy pálida', correct: false },
      ],
      explanation:
        "« Ponerse » + adjectif = changement d'état passager et soudain (émotion, physique) : « Se puso pálida / nerviosa / roja ». Indispensable de le distinguer de « hacerse » et « volverse ».",
    },
    {
      id: 9,
      question: "« Il a fini par devenir directeur » (aboutissement d'un parcours) :",
      options: [
        { id: 'a', text: 'Se puso director', correct: false },
        { id: 'b', text: 'Llegó a ser director', correct: true },
        { id: 'c', text: 'Se volvió director', correct: false },
        { id: 'd', text: 'Se convirtió director', correct: false },
      ],
      explanation:
        "« Llegar a ser » = parvenir à devenir, aboutissement valorisant d'un parcours. « Convertirse en » exige la préposition « en » (se convirtió en director).",
    },
    {
      id: 10,
      question: "« D'habitude je me lève tôt » se traduit le mieux par :",
      options: [
        { id: 'a', text: 'Uso levantarme temprano', correct: false },
        { id: 'b', text: 'Suelo levantarme temprano', correct: true },
        { id: 'c', text: 'Soy soler levantarme temprano', correct: false },
        { id: 'd', text: 'Acostumbro de levantarme temprano', correct: false },
      ],
      explanation:
        "« Soler » + infinitif exprime l'habitude (« avoir l'habitude de »). « Suelo levantarme temprano » = d'habitude / généralement je me lève tôt. Verbe à diphtongue : o → ue (suelo).",
    },
  ],
  flashcards: [
    { id: 1, category: 'Gustar', front: "Le mécanisme de « gustar »", back: "Construction inversée : la chose aimée est sujet, la personne est COI. Me gusta el cine = j'aime le cinéma (litt. le cinéma me plaît).", hint: 'la chose = sujet' },
    { id: 2, category: 'Gustar', front: "Accord de « gustar » : gusta ou gustan ?", back: "Accord avec le sujet réel : « Me gusta el libro » (sing.) / « Me gustan los libros » (plur.). Avec un infinitif → toujours « gusta »." },
    { id: 3, category: 'Gustar', front: "Comment insister sur la personne ?", back: "« A + pronom tonique » redouble le COI : A mí me gusta, A ti te gusta, A él le gusta… Le pronom COI reste obligatoire." },
    { id: 4, category: 'Verbes type gustar', front: "Les principaux verbes construits comme « gustar »", back: "encantar, doler, faltar, quedar, parecer, interesar, apetecer, costar, hacer falta. Me encanta, Me duele, Me apetece…" },
    { id: 5, category: 'Verbes type gustar', front: "« encantar » : sens et nuance", back: "Adorer / aimer beaucoup, sans « mucho » (déjà intensif) : « Me encanta esta ciudad » = j'adore cette ville." },
    { id: 6, category: 'Doler', front: "Exprimer la douleur avec « doler »", back: "Modèle gustar + article défini sur la partie du corps : Me duele la cabeza, Me duelen los pies. Pas de possessif." },
    { id: 7, category: 'Quedar', front: "« quedar » et « quedarse »", back: "« quedar » = rester (il reste) / convenir d'un rendez-vous : Me quedan dos euros. Quedamos a las cinco. « quedarse » = rester (lieu/état) : Me quedo en casa." },
    { id: 8, category: 'Manquer', front: "Traduire « manquer » : deux cas", back: "Chose qui fait défaut → « faltar » (Me falta dinero). Personne qui manque affectivement → « echar de menos » / « extrañar » (Te echo de menos)." },
    { id: 9, category: 'Devenir', front: "« hacerse » vs « volverse »", back: "« hacerse » = devenir par effort/évolution (Se hizo médico, se hizo rico). « volverse » = changement involontaire et durable (Se volvió loco)." },
    { id: 10, category: 'Devenir', front: "« ponerse » vs « llegar a ser » / « convertirse en »", back: "« ponerse » + adj. = changement passager (Se puso nervioso). « llegar a ser » = parvenir à devenir. « convertirse EN » = se transformer en (+ en obligatoire)." },
    { id: 11, category: 'Habitude', front: "Exprimer l'habitude avec « soler »", back: "« soler » + infinitif = avoir l'habitude de. Suelo (o→ue) estudiar por la noche. À l'imparfait : Solía ir al gimnasio." },
    { id: 12, category: 'Affectifs pronominaux', front: "Verbes pronominaux à sens affectif fréquents", back: "alegrarse de (se réjouir de), aburrirse (s'ennuyer), enfadarse / enojarse (se fâcher), preocuparse por (s'inquiéter de), reírse de (se moquer de)." },
  ],
};
