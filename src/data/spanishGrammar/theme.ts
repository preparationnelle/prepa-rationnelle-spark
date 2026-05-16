import type { SpanishGrammarChapterContent } from './types';

// Chapitre 20 — Thème Grammatical. Technique de traduction français → espagnol :
// chasse aux gallicismes, pièges classiques de concours ECG.
export const content: SpanishGrammarChapterContent = {
  slug: 'theme',
  title: 'Thème Grammatical',
  chapterNumber: 20,
  quizTitle: 'Quiz — Thème Grammatical',
  quizQuestions: [
    {
      id: 1,
      question: "Traduisez : « On dit que la crise va durer. » — quelle est la meilleure traduction ?",
      options: [
        { id: 'a', text: 'On dice que la crisis va a durar.', correct: false },
        { id: 'b', text: 'Se dice que la crisis va a durar.', correct: true },
        { id: 'c', text: 'Uno dice que la crisis va a durar.', correct: false },
        { id: 'd', text: 'Ello dice que la crisis va a durar.', correct: false },
      ],
      explanation:
        "Le « on » indéfini avec un verbe de parole se rend par le passif réfléchi : se dice que. « On » ne se traduit JAMAIS par un mot espagnol (*on, *uno systématique) : c'est le gallicisme n°1 sanctionné par le correcteur.",
    },
    {
      id: 2,
      question: "Traduisez : « Il y a trois ans que j'étudie l'espagnol. »",
      options: [
        { id: 'a', text: 'Hay tres años que estudio español.', correct: false },
        { id: 'b', text: 'Hace tres años que estudio español.', correct: true },
        { id: 'c', text: 'Es tres años que estudio español.', correct: false },
        { id: 'd', text: 'Tiene tres años que estudio español.', correct: false },
      ],
      explanation:
        "Le « il y a » de durée se traduit par hace (verbe hacer), jamais par hay. Réflexe : hay = il y a d'existence (hay un libro) ; hace = il y a de temps écoulé (hace tres años).",
    },
    {
      id: 3,
      question: "Traduisez : « C'est Marie qui a téléphoné. » (mise en relief)",
      options: [
        { id: 'a', text: 'Es María que ha llamado.', correct: false },
        { id: 'b', text: 'Es María quien ha llamado.', correct: true },
        { id: 'c', text: "Está María que ha llamado.", correct: false },
        { id: 'd', text: "Es María lo que ha llamado.", correct: false },
      ],
      explanation:
        "La mise en relief « c'est … qui » se rend par ser + el que / quien (accord avec l'antécédent), pas par le « que » figé du français. Pour une personne : Es María quien ha llamado. On garde ser (jamais estar) dans cette tournure.",
    },
    {
      id: 4,
      question: "Traduisez : « Je n'ai pas vu Pierre depuis lundi. »",
      options: [
        { id: 'a', text: 'No he visto a Pedro desde hace el lunes.', correct: false },
        { id: 'b', text: 'No he visto a Pedro desde el lunes.', correct: true },
        { id: 'c', text: 'No he visto Pedro desde el lunes.', correct: false },
        { id: 'd', text: 'No he visto a Pedro desde que el lunes.', correct: false },
      ],
      explanation:
        "« Depuis » + date/point de départ = desde (desde el lunes). « Depuis » + durée = desde hace (desde hace dos días). « Depuis que » + verbe = desde que. Piège bonus : le « a » personnel devant Pedro (COD humain déterminé) est obligatoire.",
    },
    {
      id: 5,
      question: "Traduisez : « Quand j'étais petit, je jouais au foot tous les dimanches. »",
      options: [
        { id: 'a', text: 'Cuando fui pequeño, jugué al fútbol todos los domingos.', correct: false },
        { id: 'b', text: 'Cuando era pequeño, jugaba al fútbol todos los domingos.', correct: true },
        { id: 'c', text: 'Cuando era pequeño, jugué al fútbol todos los domingos.', correct: false },
        { id: 'd', text: 'Cuando estaba pequeño, jugaba al fútbol todos los domingos.', correct: false },
      ],
      explanation:
        "Description dans le passé + action habituelle → imparfait (era, jugaba), pas le passé simple qui marque l'action ponctuelle achevée. « Être petit » (âge/état durable) = ser pequeño, pas estar.",
    },
    {
      id: 6,
      question: "Traduisez : « Il est devenu médecin après dix ans d'efforts. »",
      options: [
        { id: 'a', text: 'Se puso médico después de diez años de esfuerzos.', correct: false },
        { id: 'b', text: 'Se volvió médico después de diez años de esfuerzos.', correct: false },
        { id: 'c', text: 'Llegó a ser médico después de diez años de esfuerzos.', correct: true },
        { id: 'd', text: 'Se hizo médico repentinamente después de diez años.', correct: false },
      ],
      explanation:
        "« Devenir » au terme d'un parcours, d'un effort progressif = llegar a ser. ponerse = changement d'état passager (se puso rojo) ; volverse = changement involontaire/profond ; hacerse = devenir par effort/volonté (souvent métier, sans l'idée d'aboutissement long) ; convertirse en = transformation radicale.",
    },
    {
      id: 7,
      question: "Traduisez : « Ma famille me manque. »",
      options: [
        { id: 'a', text: 'Mi familia me falta.', correct: false },
        { id: 'b', text: 'Echo de menos a mi familia.', correct: true },
        { id: 'c', text: 'Yo extraño de mi familia.', correct: false },
        { id: 'd', text: 'Mi familia me echa de menos.', correct: false },
      ],
      explanation:
        "« Manquer » au sens affectif (regretter une absence) = echar de menos a (ou extrañar en Amérique). faltar = manquer matériellement / faire défaut (me falta dinero). Ne pas confondre les deux : c'est un classique du thème.",
    },
    {
      id: 8,
      question: "Traduisez : « Cette nouvelle m'a rendu triste. »",
      options: [
        { id: 'a', text: 'Esta noticia me ha hecho triste.', correct: false },
        { id: 'b', text: 'Esta noticia me ha rendido triste.', correct: false },
        { id: 'c', text: 'Esta noticia me ha puesto triste.', correct: true },
        { id: 'd', text: 'Esta nueva me ha vuelto triste.', correct: false },
      ],
      explanation:
        "« Rendre + adjectif » (changement d'état) = poner + adjectif : me ha puesto triste. *hacer triste est un gallicisme. Avec un nom on dirait volver loco / hacer feliz, mais pour un état passager poner s'impose. Piège bonus : « nouvelle » = noticia (la nueva = la nouveauté).",
    },
    {
      id: 9,
      question: "Traduisez : « J'ai fait réparer ma voiture. » (factitif)",
      options: [
        { id: 'a', text: 'He reparado mi coche.', correct: false },
        { id: 'b', text: 'He hecho reparar mi coche.', correct: true },
        { id: 'c', text: 'He hecho reparado mi coche.', correct: false },
        { id: 'd', text: 'He dejado reparar mi coche.', correct: false },
      ],
      explanation:
        "Le « faire faire » factitif = hacer + infinitif (ou mandar + infinitif) : he hecho reparar el coche. Ne pas oublier l'infinitif après hecho (jamais le participe). Le sujet ne fait pas l'action lui-même : la nuance doit apparaître.",
    },
    {
      id: 10,
      question: "Traduisez : « J'aime beaucoup ce livre, mais il est trop long. »",
      options: [
        { id: 'a', text: 'Amo mucho este libro, pero es demasiado largo.', correct: false },
        { id: 'b', text: 'Me gusta mucho este libro, pero es demasiado largo.', correct: true },
        { id: 'c', text: 'Yo gusto mucho este libro, pero está demasiado largo.', correct: false },
        { id: 'd', text: 'Me gusta mucho este libro, pero es demasiado ancho.', correct: false },
      ],
      explanation:
        "Tournure affective : on dit me gusta el libro (le livre me plaît) — le sujet grammatical est el libro, pas yo. amar est réservé à l'amour ; gustar pour « aimer » une chose. Faux-ami : largo = long (pas large : large = ancho).",
    },
  ],
  flashcards: [
    { id: 1, category: 'Le « on »', front: "Traduire « On parle espagnol ici. »", back: "Aquí se habla español. Réflexe : « on » indéfini → passif réfléchi se + verbe (ou 1re pers. plur. / uno selon le sens). Jamais *on.", hint: "se + verbe à la 3e personne" },
    { id: 2, category: '« il y a »', front: "Traduire « Il y a deux mois qu'il est parti. »", back: "Hace dos meses que se fue. Réflexe : « il y a » de temps = hace ; « il y a » d'existence = hay." },
    { id: 3, category: 'Mise en relief', front: "Traduire « C'est toi qui as raison. »", back: "Eres tú quien tiene razón. Réflexe : « c'est … qui/que » = ser + el que / quien (accord), jamais le « que » figé du français." },
    { id: 4, category: 'Depuis', front: "« depuis » (date) vs « depuis » (durée) vs « depuis que »", back: "desde el lunes / desde hace dos años / desde que llegó. Réflexe : point de départ = desde ; durée = desde hace ; + verbe = desde que." },
    { id: 5, category: 'Temps du passé', front: "Imparfait français vs passé simple : quel réflexe ?", back: "Description, habitude, état durable → imperfecto (era, jugaba) ; action ponctuelle achevée → pretérito (fui, jugué). Cuando era niño, jugaba…" },
    { id: 6, category: 'Devenir', front: "Les 5 traductions de « devenir »", back: "ponerse (état passager : se puso rojo), volverse (involontaire : se volvió loco), hacerse (effort/volonté : se hizo rico), llegar a ser (aboutissement : llegó a ser director), convertirse en (transformation radicale)." },
    { id: 7, category: 'Manquer', front: "« Tu me manques » vs « il me manque de l'argent »", back: "Te echo de menos (affectif : echar de menos a) ≠ Me falta dinero (faire défaut : faltar). Ne jamais calquer *me faltas pour l'affectif." },
    { id: 8, category: 'Rendre + adj', front: "Traduire « Ça l'a rendu fou / triste. »", back: "Lo volvió loco / Lo puso triste. Réflexe : « rendre + adjectif » = volver / poner + adj selon l'intensité ; *hacer + adj = gallicisme à proscrire." },
    { id: 9, category: 'Factitif', front: "Traduire « Elle a fait construire une maison. »", back: "Hizo construir una casa (ou mandó construir). Réflexe : « faire faire » = hacer / mandar + INFINITIF (jamais participe)." },
    { id: 10, category: 'ser / estar — por / para', front: "Réflexes ser/estar et por/para", back: "ser = identité/origine/heure ; estar = lieu/état/résultat. por = cause/moyen/durée ; para = but/destinataire/échéance. Es médico / Está cansado ; Lo hago por ti / para ti." },
    { id: 11, category: '« a » personnel', front: "Quand mettre le « a » personnel ?", back: "Devant un COD personne (ou animal cher) déterminé : Veo a Pedro / Busco a mi hermano. Oubli très sanctionné. Pas de « a » devant chose : Veo la casa." },
    { id: 12, category: 'Faux-amis', front: "Faux-amis fréquents du thème", back: "sensible = raisonnable (sensible → sensato/sensible) ; éxito = succès (pas sortie) ; embarazada = enceinte ; sopa = soupe ; largo = long ; asistir a = assister à ; realizar = réaliser/effectuer." },
  ],
};
