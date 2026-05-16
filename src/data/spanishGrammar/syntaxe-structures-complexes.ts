import type { SpanishGrammarChapterContent } from './types';

// Chapitre 2 — Syntaxe et Structures Complexes. Quiz & flashcards niveau prépa ECG.
export const content: SpanishGrammarChapterContent = {
  slug: 'syntaxe-structures-complexes',
  title: 'Syntaxe et Structures Complexes',
  chapterNumber: 2,
  quizTitle: 'Quiz — Syntaxe et Structures Complexes',
  quizQuestions: [
    {
      id: 1,
      question: "Traduisez « C'est moi qui ai raison. »",
      options: [
        { id: 'a', text: 'Es yo que tengo razón.', correct: false },
        { id: 'b', text: 'Soy yo quien tiene razón.', correct: true },
        { id: 'c', text: 'Es mí quien tengo razón.', correct: false },
        { id: 'd', text: 'Es yo quien tengo razón.', correct: false },
      ],
      explanation:
        "Mise en relief : « ser » s'accorde avec le pronom sujet (soy yo), et le verbe de la relative s'accorde aussi (quien tiene). Piège : on ne calque pas « c'est… que » par « es… que » figé.",
    },
    {
      id: 2,
      question: "Traduisez « C'est à Madrid que je l'ai rencontré. »",
      options: [
        { id: 'a', text: 'Es en Madrid que lo conocí.', correct: false },
        { id: 'b', text: 'Fue en Madrid donde lo conocí.', correct: true },
        { id: 'c', text: 'Es en Madrid quien lo conocí.', correct: false },
        { id: 'd', text: 'Está en Madrid donde lo conocí.', correct: false },
      ],
      explanation:
        "Pour un lieu, la mise en relief utilise « donde » (pas « que »), et « ser » se met au même temps que la relative : Fue en Madrid donde lo conocí.",
    },
    {
      id: 3,
      question: "Traduisez « Il y a beaucoup de touristes. »",
      options: [
        { id: 'a', text: 'Hay muchos turistas.', correct: true },
        { id: 'b', text: 'Hace muchos turistas.', correct: false },
        { id: 'c', text: 'Están muchos turistas.', correct: false },
        { id: 'd', text: 'Es muchos turistas.', correct: false },
      ],
      explanation:
        "« Il y a » d'existence = « hay » (invariable, jamais d'accord : hay muchos turistas). « Hace » sert pour le temps écoulé (hace dos años) ou la météo (hace frío).",
    },
    {
      id: 4,
      question: "Traduisez « Il y a deux ans qu'il vit ici. »",
      options: [
        { id: 'a', text: 'Hay dos años que vive aquí.', correct: false },
        { id: 'b', text: 'Hace dos años que vive aquí.', correct: true },
        { id: 'c', text: 'Está dos años que vive aquí.', correct: false },
        { id: 'd', text: 'Hace dos años que vivía aquí.', correct: false },
      ],
      explanation:
        "Pour une durée écoulée on emploie « hace + temps + que » : Hace dos años que vive aquí. Le verbe reste au présent car l'action continue. Ne pas confondre avec « hay » (existence).",
    },
    {
      id: 5,
      question: "Traduisez « On parle espagnol ici. » (impersonnel)",
      options: [
        { id: 'a', text: 'On habla español aquí.', correct: false },
        { id: 'b', text: 'Se habla español aquí.', correct: true },
        { id: 'c', text: 'Uno habla español aquí.', correct: false },
        { id: 'd', text: 'Es hablado español aquí.', correct: false },
      ],
      explanation:
        "« On » se rend par la tournure pronominale impersonnelle « se + verbe » : Se habla español. Si le sujet est pluriel, le verbe s'accorde : Se venden casas.",
    },
    {
      id: 6,
      question: "Complétez : « Se ___ casas. » (vender — sujet pluriel)",
      options: [
        { id: 'a', text: 'vende', correct: false },
        { id: 'b', text: 'venden', correct: true },
        { id: 'c', text: 'vendido', correct: false },
        { id: 'd', text: 'vendiendo', correct: false },
      ],
      explanation:
        "Dans la passive pronominale (« se » + verbe), le verbe S'ACCORDE avec le sujet grammatical : Se venden casas (casas est pluriel). Piège classique : « se vende casas » est incorrect.",
    },
    {
      id: 7,
      question: "Traduisez « Le plus important, c'est la santé. »",
      options: [
        { id: 'a', text: 'El más importante es la salud.', correct: false },
        { id: 'b', text: 'Lo más importante es la salud.', correct: true },
        { id: 'c', text: 'La más importante es la salud.', correct: false },
        { id: 'd', text: 'Lo más importante está la salud.', correct: false },
      ],
      explanation:
        "« Lo + adjectif » exprime une notion abstraite (« ce qui est… », « le côté… ») : lo más importante, lo bueno, lo difícil. On n'emploie jamais l'article « el » devant un adjectif neutre.",
    },
    {
      id: 8,
      question: "Traduisez « Je ne vois personne. »",
      options: [
        { id: 'a', text: 'Veo a nadie.', correct: false },
        { id: 'b', text: 'No veo a nadie.', correct: true },
        { id: 'c', text: 'No veo nadie.', correct: false },
        { id: 'd', text: 'No veo a alguien.', correct: false },
      ],
      explanation:
        "La double négation est obligatoire en espagnol quand le mot négatif suit le verbe : No veo a nadie. On garde le « no » devant le verbe ET « nadie » après. Le « a » personnel s'impose aussi (a nadie).",
    },
    {
      id: 9,
      question: "Traduisez « Je veux que tu viennes. »",
      options: [
        { id: 'a', text: 'Quiero que vienes.', correct: false },
        { id: 'b', text: 'Quiero que vengas.', correct: true },
        { id: 'c', text: 'Quiero venir tú.', correct: false },
        { id: 'd', text: 'Te quiero venir.', correct: false },
      ],
      explanation:
        "Dans une complétive après un verbe de volonté avec deux sujets différents, l'espagnol exige « que + subjonctif » : Quiero que vengas. L'infinitif (« je veux venir ») n'est possible que si le sujet est le même.",
    },
    {
      id: 10,
      question: "Traduisez « Ce n'est pas que je ne veuille pas, c'est que je ne peux pas. »",
      options: [
        { id: 'a', text: 'No es que no quiero, es que no puedo.', correct: false },
        { id: 'b', text: 'No es que no quiera, es que no puedo.', correct: true },
        { id: 'c', text: 'No está que no quiera, es que no puedo.', correct: false },
        { id: 'd', text: 'No es que no quiera, está que no puedo.', correct: false },
      ],
      explanation:
        "La structure « no es que » + subjonctif (no quiera) introduit une cause écartée ; « es que » + indicatif (no puedo) donne la cause réelle. C'est un tour emphatique très fréquent à l'écrit.",
    },
  ],
  flashcards: [
    { id: 1, category: 'Mise en relief', front: "Traduire « c'est… qui / que » (personne) ?", back: "ser (accordé au pronom) + … + quien / el que / la que. Soy yo quien tiene razón. Fueron ellos los que vinieron." },
    { id: 2, category: 'Mise en relief', front: "Mise en relief d'un lieu / d'un moment ?", back: "Lieu → donde ; moment → cuando. Fue en Madrid donde lo conocí. Fue entonces cuando entendí." },
    { id: 3, category: 'Mise en relief', front: "Accord du verbe « ser » dans la mise en relief ?", back: "« ser » se met au même temps que la relative et s'accorde : Fui yo quien lo dijo. Son ellos los que mandan." },
    { id: 4, category: 'Il y a', front: "« Il y a » d'existence ?", back: "hay (invariable) : Hay muchos turistas. Hay un problema. Jamais d'accord en nombre." },
    { id: 5, category: 'Il y a', front: "« Il y a » + durée écoulée ?", back: "hace + temps + que + verbe : Hace dos años que vive aquí. (= cela fait deux ans qu'il vit ici)" },
    { id: 6, category: 'Tournures impersonnelles', front: "Traduire « on » (sens indéfini) ?", back: "se + verbe : Se habla español. Variantes : uno + verbe, ou 3e pers. plur. (Dicen que…)." },
    { id: 7, category: 'Tournures impersonnelles', front: "Accord du verbe dans la passive pronominale « se » ?", back: "Le verbe s'accorde avec le sujet : Se vende una casa / Se venden casas. (jamais « se vende casas »)" },
    { id: 8, category: 'Lo neutre', front: "« Lo + adjectif » : valeur ?", back: "Notion abstraite : « ce qui est… », « le côté… ». Lo importante, lo bueno, lo difícil de esto." },
    { id: 9, category: 'Lo neutre', front: "« Lo que » : emploi ?", back: "Pronom relatif neutre = « ce que / ce qui ». No entiendo lo que dices. Lo que importa es la salud." },
    { id: 10, category: 'Négation', front: "La double négation : règle ?", back: "Si le mot négatif suit le verbe, on garde « no » devant : No veo a nadie. No tengo nada. No viene nunca." },
    { id: 11, category: 'Complétives', front: "Complétive après verbe de volonté, deux sujets ?", back: "que + subjonctif : Quiero que vengas. Même sujet → infinitif : Quiero venir." },
    { id: 12, category: 'Tours emphatiques', front: "Structure « no es que… es que… » ?", back: "no es que + subjonctif (cause écartée) ; es que + indicatif (cause réelle). No es que no quiera, es que no puedo." },
  ],
};
