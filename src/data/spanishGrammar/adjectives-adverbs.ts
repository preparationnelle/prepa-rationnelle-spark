import type { SpanishGrammarChapterContent } from './types';

// Chapitre 10 — Adjectifs et Adverbes.
export const content: SpanishGrammarChapterContent = {
  slug: 'adjectives-adverbs',
  title: 'Adjectifs et Adverbes',
  chapterNumber: 10,
  quizTitle: 'Quiz — Adjectifs et Adverbes',
  quizQuestions: [
    {
      id: 1,
      question: "Complétez : « Es un ___ amigo. » (bueno — apocope devant un nom masculin singulier)",
      options: [
        { id: 'a', text: 'bueno', correct: false },
        { id: 'b', text: 'buen', correct: true },
        { id: 'c', text: 'buena', correct: false },
        { id: 'd', text: 'bien', correct: false },
      ],
      explanation:
        "« bueno » s'apocope en « buen » devant un nom masculin singulier : un buen amigo. Même règle pour malo → mal. Piège du correcteur : l'apocope ne se fait PAS au pluriel (buenos amigos) ni au féminin (buena amiga).",
    },
    {
      id: 2,
      question: "Que signifie « un gran hombre » (par opposition à « un hombre grande ») ?",
      options: [
        { id: 'a', text: 'un homme de grande taille', correct: false },
        { id: 'b', text: 'un grand homme (remarquable, illustre)', correct: true },
        { id: 'c', text: 'un homme gros', correct: false },
        { id: 'd', text: 'un homme âgé', correct: false },
      ],
      explanation:
        "Antéposé et apocopé (gran), l'adjectif a un sens figuré : un gran hombre = un homme illustre. Postposé (un hombre grande), il garde son sens propre : un homme de grande taille. La place change le sens.",
    },
    {
      id: 3,
      question: "Comment forme-t-on l'adverbe à partir de « rápido » ?",
      options: [
        { id: 'a', text: 'rápidomente', correct: false },
        { id: 'b', text: 'rápidamente', correct: true },
        { id: 'c', text: 'rápidemente', correct: false },
        { id: 'd', text: 'rápido', correct: false },
      ],
      explanation:
        "On part du féminin de l'adjectif (rápida) et on ajoute -mente : rápidamente. L'accent écrit de l'adjectif se conserve sur l'adverbe (rápidamente).",
    },
    {
      id: 4,
      question: "« Habló clara y ___ . » (deux adverbes en -mente coordonnés : rápido)",
      options: [
        { id: 'a', text: 'rápidamente', correct: true },
        { id: 'b', text: 'rápida', correct: false },
        { id: 'c', text: 'rápidomente', correct: false },
        { id: 'd', text: 'rápidamentemente', correct: false },
      ],
      explanation:
        "Quand deux adverbes en -mente sont coordonnés, seul le DERNIER porte le suffixe ; le premier reste au féminin : habló clara y rápidamente. Erreur fréquente : claramente y rápidamente.",
    },
    {
      id: 5,
      question: "Choisissez : « Estoy ___ cansado. » (intensité devant un adjectif)",
      options: [
        { id: 'a', text: 'mucho', correct: false },
        { id: 'b', text: 'muy', correct: true },
        { id: 'c', text: 'muchos', correct: false },
        { id: 'd', text: 'tanto', correct: false },
      ],
      explanation:
        "« muy » modifie un adjectif ou un adverbe (muy cansado, muy bien). « mucho » modifie un verbe ou un nom (trabajo mucho, mucho dinero). Exception : muy → mucho devant más/menos/mejor/peor (mucho mejor).",
    },
    {
      id: 6,
      question: "Quel est l'adverbe correspondant à l'adjectif « bueno » ?",
      options: [
        { id: 'a', text: 'buenamente', correct: false },
        { id: 'b', text: 'buen', correct: false },
        { id: 'c', text: 'bien', correct: true },
        { id: 'd', text: 'bueno', correct: false },
      ],
      explanation:
        "L'adverbe de « bueno » est irrégulier : c'est « bien » (et celui de « malo » est « mal »). Ne jamais dire buenamente. Distinguez : un buen libro (adjectif) / habla bien (adverbe).",
    },
    {
      id: 7,
      question: "« Es el ___ día del año. » (primero — apocope ordinal)",
      options: [
        { id: 'a', text: 'primero', correct: false },
        { id: 'b', text: 'primer', correct: true },
        { id: 'c', text: 'primera', correct: false },
        { id: 'd', text: 'uno', correct: false },
      ],
      explanation:
        "« primero » et « tercero » s'apocopent en « primer » / « tercer » devant un nom masculin singulier : el primer día, el tercer piso. Pas d'apocope au féminin (la primera vez).",
    },
    {
      id: 8,
      question: "Comment dit-on « cent livres » en espagnol ?",
      options: [
        { id: 'a', text: 'ciento libros', correct: false },
        { id: 'b', text: 'cien libros', correct: true },
        { id: 'c', text: 'ciento libros', correct: false },
        { id: 'd', text: 'cientos libros', correct: false },
      ],
      explanation:
        "« ciento » s'apocope en « cien » devant un nom (cien libros, cien personas) et devant mil/millones (cien mil). On garde « ciento » uniquement pour les nombres composés : ciento veinte (120).",
    },
    {
      id: 9,
      question: "Que signifie « un viejo amigo » (antéposé) ?",
      options: [
        { id: 'a', text: 'un ami âgé', correct: false },
        { id: 'b', text: 'un ami de longue date', correct: true },
        { id: 'c', text: 'un ami fatigué', correct: false },
        { id: 'd', text: 'un ancien ami devenu ennemi', correct: false },
      ],
      explanation:
        "Antéposé, « viejo » a un sens figuré : un viejo amigo = un ami de longue date. Postposé (un amigo viejo), il garde son sens propre : un ami âgé. Même logique pour pobre (¡pobre hombre! = malheureux / un hombre pobre = sans argent) et nuevo (un nuevo coche = un autre / un coche nuevo = neuf).",
    },
    {
      id: 10,
      question: "« Llegó la ___ casada. » (recién + participe)",
      options: [
        { id: 'a', text: 'reciente', correct: false },
        { id: 'b', text: 'recientemente', correct: false },
        { id: 'c', text: 'recién', correct: true },
        { id: 'd', text: 'recienta', correct: false },
      ],
      explanation:
        "Devant un participe passé, l'adverbe s'apocope en « recién » (invariable) : recién casada, recién llegado, recién nacido. « recientemente » s'emploie devant un verbe conjugué (ha llegado recientemente).",
    },
  ],
  flashcards: [
    { id: 1, category: 'Accord', front: "Accord de l'adjectif : règle de base ?", back: "L'adjectif s'accorde en genre ET en nombre avec le nom : una casa blanca, unos coches rojos. Adjectif qualifiant plusieurs noms de genres différents → masculin pluriel : la casa y el coche rojos.", hint: 'genre + nombre' },
    { id: 2, category: 'Apocope', front: "Adjectifs qui s'apocopent devant un nom masculin singulier", back: "buen(o), mal(o), primer(o), tercer(o), algún(o), ningún(o), un(o) : un buen día, el primer piso, algún libro, ningún problema." },
    { id: 3, category: 'Apocope', front: "Apocope de « grande » : quand et en quoi ?", back: "« grande » → « gran » devant TOUT nom singulier (masc. ou fém.) : un gran país, una gran idea. Au pluriel, pas d'apocope : grandes ideas.", hint: 'gran = sens figuré' },
    { id: 4, category: 'Apocope', front: "Apocope de « ciento » et « Santo »", back: "ciento → cien devant un nom et devant mil/millones (cien euros, cien mil). Santo → San devant la plupart des prénoms masc. (San Pedro), mais Santo Tomás, Santo Domingo." },
    { id: 5, category: 'Place', front: "« un gran hombre » vs « un hombre grande »", back: "Antéposé/apocopé = sens figuré (un grand homme = illustre). Postposé = sens propre (un homme de grande taille)." },
    { id: 6, category: 'Place', front: "Adjectifs qui changent de sens selon la place : pobre, viejo, antiguo, nuevo", back: "¡pobre hombre! (malheureux) / hombre pobre (sans argent) ; viejo amigo (de longue date) / amigo viejo (âgé) ; antiguo alumno (ancien) / mueble antiguo (vétuste) ; nuevo coche (un autre) / coche nuevo (neuf)." },
    { id: 7, category: 'Adverbes', front: "Former un adverbe en -mente", back: "Féminin de l'adjectif + -mente : lenta → lentamente ; fácil → fácilmente. L'accent écrit de l'adjectif se conserve.", hint: 'féminin + mente' },
    { id: 8, category: 'Adverbes', front: "Deux adverbes en -mente coordonnés", back: "Seul le dernier porte -mente, le premier reste au féminin : habló lenta y claramente." },
    { id: 9, category: 'Adverbes', front: "Adverbes irréguliers de bueno et malo", back: "bueno → bien ; malo → mal. Jamais buenamente/malamente dans ce sens : Cocina bien, conduce mal." },
    { id: 10, category: 'Intensité', front: "« muy » ou « mucho » ?", back: "muy + adjectif/adverbe (muy alto, muy bien) ; mucho + verbe/nom (come mucho, mucho tiempo). Devant más/menos/mejor/peor → mucho (mucho mejor)." },
    { id: 11, category: 'Intensité', front: "« tan » ou « tanto » ?", back: "tan + adjectif/adverbe (tan grande, tan rápido) ; tanto + nom/verbe (tanto dinero, trabaja tanto). Comparatif d'égalité : tan… como / tanto(s)… como." },
    { id: 12, category: 'Cas particuliers', front: "« recién » + participe et le superlatif absolu", back: "recién (invariable) devant un participe : recién casados, recién nacido (mais recientemente + verbe conjugué). Superlatif absolu en -ísimo : malísimo, facilísimo, riquísimo (voir fiche dédiée)." },
  ],
};
