import type { SpanishGrammarChapterContent } from './types';

// Chapitre 1 — Conjugaison et Temps Verbaux. Quiz & flashcards niveau prépa ECG.
export const content: SpanishGrammarChapterContent = {
  slug: 'conjugaison',
  title: 'Conjugaison et Temps Verbaux',
  chapterNumber: 1,
  quizTitle: 'Quiz — Conjugaison et Temps Verbaux',
  quizQuestions: [
    {
      id: 1,
      question: "Quelle est la 3e personne du singulier du passé simple de « hacer » ?",
      options: [
        { id: 'a', text: 'hació', correct: false },
        { id: 'b', text: 'hizo', correct: true },
        { id: 'c', text: 'hació', correct: false },
        { id: 'd', text: 'hacó', correct: false },
      ],
      explanation:
        "« hacer » est un pretérito fuerte : radical « hic- » + terminaisons sans accent (-e, -iste, -o…). La 3e pers. devient « hizo » (le c se change en z devant o). Piège classique : pas d'accent sur les pretéritos fuertes (hizo, pas hizó).",
    },
    {
      id: 2,
      question: "Complétez : « Ayer (yo) ___ a mi abuela. » (action ponctuelle achevée — visitar)",
      options: [
        { id: 'a', text: 'visitaba', correct: false },
        { id: 'b', text: 'visité', correct: true },
        { id: 'c', text: 'visitaría', correct: false },
        { id: 'd', text: 'visitara', correct: false },
      ],
      explanation:
        "Une action ponctuelle et achevée avec « ayer » exige le passé simple : visité. L'imparfait (visitaba) servirait pour une habitude ou une description, pas pour un fait unique daté.",
    },
    {
      id: 3,
      question: "Quel est le futur de « tener » à la 1re personne du singulier ?",
      options: [
        { id: 'a', text: 'teneré', correct: false },
        { id: 'b', text: 'tendré', correct: true },
        { id: 'c', text: 'tenaré', correct: false },
        { id: 'd', text: 'tendría', correct: false },
      ],
      explanation:
        "« tener » a un radical irrégulier au futur : « tendr- ». On ajoute un d : tendré, tendrás, tendrá… Même famille : poner → pondré, venir → vendré, salir → saldré, valer → valdré.",
    },
    {
      id: 4,
      question: "Conjuguez « dormir » au gérondif.",
      options: [
        { id: 'a', text: 'dormiendo', correct: false },
        { id: 'b', text: 'durmiendo', correct: true },
        { id: 'c', text: 'dormando', correct: false },
        { id: 'd', text: 'duermiendo', correct: false },
      ],
      explanation:
        "Les verbes en -IR à affaiblissement (o→u, e→i) modifient leur radical au gérondif : dormir → durmiendo, morir → muriendo, pedir → pidiendo, sentir → sintiendo.",
    },
    {
      id: 5,
      question: "« No ___ (tú) eso. » (ordre négatif — hacer)",
      options: [
        { id: 'a', text: 'haces', correct: false },
        { id: 'b', text: 'haz', correct: false },
        { id: 'c', text: 'hagas', correct: true },
        { id: 'd', text: 'hace', correct: false },
      ],
      explanation:
        "L'impératif négatif se forme TOUJOURS sur le subjonctif présent : No hagas eso. Piège : l'impératif affirmatif de hacer est « haz », mais à la forme négative on passe au subjonctif (no hagas).",
    },
    {
      id: 6,
      question: "Présent de l'indicatif de « pensar » à la 1re personne du singulier ?",
      options: [
        { id: 'a', text: 'penso', correct: false },
        { id: 'b', text: 'pienso', correct: true },
        { id: 'c', text: 'pinso', correct: false },
        { id: 'd', text: 'piensó', correct: false },
      ],
      explanation:
        "Verbe à diphtongue e→ie : la voyelle tonique du radical diphtongue à toutes les personnes sauf nous/vous : pienso, piensas, piensa, pensamos, pensáis, piensan.",
    },
    {
      id: 7,
      question: "Traduisez « Quand j'étais petit, j'allais souvent à la mer. »",
      options: [
        { id: 'a', text: 'Cuando fui pequeño, fui a menudo al mar.', correct: false },
        { id: 'b', text: 'Cuando era pequeño, iba a menudo al mar.', correct: true },
        { id: 'c', text: 'Cuando era pequeño, fui a menudo al mar.', correct: false },
        { id: 'd', text: 'Cuando fui pequeño, iba a menudo al mar.', correct: false },
      ],
      explanation:
        "Description (era pequeño) + habitude répétée (iba a menudo) → imparfait dans les deux cas. Le passé simple (fui) marquerait un fait unique daté, ce qui contredit « souvent » et « quand j'étais petit ».",
    },
    {
      id: 8,
      question: "Quel est le participe passé irrégulier de « escribir » ?",
      options: [
        { id: 'a', text: 'escribido', correct: false },
        { id: 'b', text: 'escrito', correct: true },
        { id: 'c', text: 'escripto', correct: false },
        { id: 'd', text: 'escrivido', correct: false },
      ],
      explanation:
        "Participe irrégulier : escribir → escrito. À retenir avec hacer → hecho, decir → dicho, ver → visto, poner → puesto, volver → vuelto, abrir → abierto, romper → roto.",
    },
    {
      id: 9,
      question: "« ___ (vosotros) la verdad. » (ordre affirmatif — decir)",
      options: [
        { id: 'a', text: 'Decid', correct: true },
        { id: 'b', text: 'Decir', correct: false },
        { id: 'c', text: 'Decíd', correct: false },
        { id: 'd', text: 'Dices', correct: false },
      ],
      explanation:
        "L'impératif affirmatif de « vosotros » se forme sur l'infinitif en remplaçant le -r final par -d : decir → decid, hablar → hablad, comer → comed. Aucun accent écrit ici.",
    },
    {
      id: 10,
      question: "Conditionnel de « poder » à la 1re personne du singulier ?",
      options: [
        { id: 'a', text: 'podería', correct: false },
        { id: 'b', text: 'podría', correct: true },
        { id: 'c', text: 'puedería', correct: false },
        { id: 'd', text: 'podaría', correct: false },
      ],
      explanation:
        "Le conditionnel utilise le même radical irrégulier que le futur : poder → podr- → podría. De même : saber → sabría, querer → querría, hacer → haría, decir → diría.",
    },
  ],
  flashcards: [
    { id: 1, category: 'Passé simple', front: "Les pretéritos fuertes : règle de formation ?", back: "Radical irrégulier + terminaisons SANS accent : -e, -iste, -o, -imos, -isteis, -ieron. Ex. tener → tuve, tuviste, tuvo…", hint: 'tuve, no tuvé' },
    { id: 2, category: 'Passé simple', front: "Passé simple irréguliers : tener, poder, poner, hacer, venir, querer ?", back: "tener → tuv-, poder → pud-, poner → pus-, hacer → hic- (hizo), venir → vin-, querer → quis-" },
    { id: 3, category: 'Passé simple', front: "Passé simple totalement irréguliers : ir et ser ?", back: "ir et ser ont la MÊME forme : fui, fuiste, fue, fuimos, fuisteis, fueron. Le contexte tranche." },
    { id: 4, category: 'Futur / Conditionnel', front: "Radicaux irréguliers du futur (et conditionnel) ?", back: "tener → tendr-, poner → pondr-, venir → vendr-, salir → saldr-, poder → podr-, saber → sabr-, hacer → har-, decir → dir-, querer → querr-, haber → habr-" },
    { id: 5, category: 'Futur / Conditionnel', front: "Le conditionnel se forme sur quel radical ?", back: "Sur le radical du FUTUR + terminaisons de l'imparfait des verbes en -ER/-IR : -ía, -ías, -ía, -íamos, -íais, -ían. poder → podría." },
    { id: 6, category: 'Diphtongues', front: "Diphtongue e→ie : à quelles personnes ?", back: "Toutes sauf nous/vous (radical atone). pensar → pienso, piensas, piensa, pensamos, pensáis, piensan." },
    { id: 7, category: 'Diphtongues', front: "Diphtongue o→ue et affaiblissement e→i : exemples ?", back: "o→ue : poder → puedo ; e→i : pedir → pido, pides, pide, pedimos, pedís, piden." },
    { id: 8, category: 'Impératif', front: "Comment former l'impératif négatif ?", back: "TOUJOURS sur le subjonctif présent : no hables, no hagas, no vengáis, no salgan." },
    { id: 9, category: 'Impératif', front: "Impératif affirmatif : tú et vosotros ?", back: "tú = 3e pers. sing. de l'indicatif (habla, come) sauf irréguliers (haz, di, ve, ven, pon, sal, ten, sé). vosotros = infinitif + -d (hablad, decid)." },
    { id: 10, category: 'Impératif', front: "Enclise des pronoms à l'impératif affirmatif ?", back: "Le pronom se SOUDE au verbe et un accent peut apparaître : dímelo, háblale, levántate. À l'impératif négatif il reste devant : no me lo digas." },
    { id: 11, category: 'Gérondif / Participe', front: "Gérondif des verbes en -IR à modification ?", back: "e→i, o→u : dormir → durmiendo, pedir → pidiendo, sentir → sintiendo, morir → muriendo, decir → diciendo." },
    { id: 12, category: 'Imparfait vs passé simple', front: "Imparfait ou passé simple : comment trancher ?", back: "Imparfait = description, habitude, action en cours (era, iba a menudo). Passé simple = fait ponctuel achevé, daté (ayer fui). Imparfait : seules formes irrégulières ser (era), ir (iba), ver (veía)." },
  ],
};
