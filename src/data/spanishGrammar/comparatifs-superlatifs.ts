import type { SpanishGrammarChapterContent } from './types';

// Chapitre 18 — Comparatifs & Superlatifs. Quiz + flashcards niveau prépa ECG.
export const content: SpanishGrammarChapterContent = {
  slug: 'comparatifs-superlatifs',
  title: 'Comparatifs & Superlatifs',
  chapterNumber: 18,
  quizTitle: 'Quiz — Comparatifs & Superlatifs',
  quizQuestions: [
    {
      id: 1,
      question: "Comment traduire « Marie est plus grande que Paul » ?",
      options: [
        { id: 'a', text: 'María es más alta que Pablo.', correct: true },
        { id: 'b', text: 'María es más alta como Pablo.', correct: false },
        { id: 'c', text: 'María es tan alta que Pablo.', correct: false },
        { id: 'd', text: 'María es más alta de Pablo.', correct: false },
      ],
      explanation:
        "Comparatif de supériorité : « más + adjectif + que ». Piège du correcteur : devant un nom ou un pronom, c'est bien « que », pas « como » ni « de ».",
    },
    {
      id: 2,
      question: "Complétez : « Tengo ___ libros ___ tú. » (autant de … que)",
      options: [
        { id: 'a', text: 'tan … como', correct: false },
        { id: 'b', text: 'tantos … como', correct: true },
        { id: 'c', text: 'tanto … que', correct: false },
        { id: 'd', text: 'más … que', correct: false },
      ],
      explanation:
        "Comparatif d'égalité avec un nom : « tanto/-a/-os/-as + nom + como ». « Tanto » s'accorde avec le nom (tantos libros). « Tan … como » s'emploie devant un adjectif ou un adverbe.",
    },
    {
      id: 3,
      question: "« Hay más de cien personas » : pourquoi « de » et non « que » ?",
      options: [
        { id: 'a', text: "Parce que la phrase est négative", correct: false },
        { id: 'b', text: "Devant un nombre / une quantité chiffrée, on emploie « más de »", correct: true },
        { id: 'c', text: "« Más de » et « más que » sont interchangeables", correct: false },
        { id: 'd', text: "Parce que « personas » est féminin", correct: false },
      ],
      explanation:
        "Devant un nombre, on emploie « más de / menos de » (más de cien). « Más que / menos que » s'emploie dans une comparaison entre deux éléments. Distinction très testée.",
    },
    {
      id: 4,
      question: "Traduisez : « C'est plus difficile que je ne le pensais. »",
      options: [
        { id: 'a', text: 'Es más difícil que pensaba.', correct: false },
        { id: 'b', text: 'Es más difícil de lo que pensaba.', correct: true },
        { id: 'c', text: 'Es más difícil como pensaba.', correct: false },
        { id: 'd', text: 'Es más difícil del que pensaba.', correct: false },
      ],
      explanation:
        "Comparatif avec subordonnée portant sur une idée / un adjectif : « más … de lo que ». Avec un nom précis on dirait « del que / de la que ». Piège : ne pas mettre simplement « que ».",
    },
    {
      id: 5,
      question: "Quel est le comparatif irrégulier de « bueno » ?",
      options: [
        { id: 'a', text: 'más bueno', correct: false },
        { id: 'b', text: 'mejor', correct: true },
        { id: 'c', text: 'mayor', correct: false },
        { id: 'd', text: 'buenísimo', correct: false },
      ],
      explanation:
        "« Bueno » → « mejor » ; « malo » → « peor » ; « grande » → « mayor » ; « pequeño » → « menor ». On ne dit pas « más bueno » au sens de qualité.",
    },
    {
      id: 6,
      question: "« Es mi hermano ___ » : il a 25 ans, je suis plus jeune. (mayor / más viejo)",
      options: [
        { id: 'a', text: 'más viejo que yo', correct: false },
        { id: 'b', text: 'mayor que yo', correct: true },
        { id: 'c', text: 'más mayor que yo', correct: false },
        { id: 'd', text: 'el menor', correct: false },
      ],
      explanation:
        "Pour l'âge des personnes, on emploie « mayor / menor », pas « más viejo / más joven ». Et jamais « más mayor » : « mayor » est déjà un comparatif.",
    },
    {
      id: 7,
      question: "Comment former le superlatif relatif « le plus intelligent de la classe » ?",
      options: [
        { id: 'a', text: 'el más inteligente que la clase', correct: false },
        { id: 'b', text: 'el más inteligente de la clase', correct: true },
        { id: 'c', text: 'lo más inteligente en la clase', correct: false },
        { id: 'd', text: 'tan inteligente como la clase', correct: false },
      ],
      explanation:
        "Superlatif relatif : « el/la/los/las + (nom) + más/menos + adjectif + DE ». Le complément se construit avec « de », jamais « que » : el más inteligente de la clase.",
    },
    {
      id: 8,
      question: "Quel est le superlatif absolu de « rico » ?",
      options: [
        { id: 'a', text: 'ricísimo', correct: false },
        { id: 'b', text: 'riquísimo', correct: true },
        { id: 'c', text: 'ricoísimo', correct: false },
        { id: 'd', text: 'más rico', correct: false },
      ],
      explanation:
        "Modification orthographique devant -ísimo : -co → -quísimo (rico → riquísimo), -go → -guísimo (largo → larguísimo), -z → -císimo (feliz → felicísimo).",
    },
    {
      id: 9,
      question: "« Muy » et « -ísimo » peuvent-ils se cumuler ?",
      options: [
        { id: 'a', text: "Oui : « muy buenísimo » est correct", correct: false },
        { id: 'b', text: "Non : « -ísimo » porte déjà l'intensité, on ne dit pas « muy + ísimo »", correct: true },
        { id: 'c', text: "Oui, mais seulement à l'oral", correct: false },
        { id: 'd', text: "« Muy » remplace toujours « -ísimo »", correct: false },
      ],
      explanation:
        "« Muy + adjectif » et « adjectif + -ísimo » sont deux superlatifs absolus équivalents (muy alto = altísimo). On ne les cumule jamais : « muy altísimo » est fautif.",
    },
    {
      id: 10,
      question: "Traduisez : « Plus on étudie, plus on apprend. »",
      options: [
        { id: 'a', text: 'Más se estudia, más se aprende.', correct: false },
        { id: 'b', text: 'Cuanto más se estudia, más se aprende.', correct: true },
        { id: 'c', text: 'Tan más se estudia como se aprende.', correct: false },
        { id: 'd', text: 'Mientras más estudia que aprende.', correct: false },
      ],
      explanation:
        "Corrélation de proportion : « cuanto más … más … » (ou « cuanto menos … menos … »). En registre soutenu, on n'omet pas « cuanto ». Tournure attendue à l'écrit.",
    },
  ],
  flashcards: [
    { id: 1, category: 'Comparatif', front: "Comparatif de supériorité / d'infériorité ?", back: "más / menos + adjectif (ou nom/adverbe) + que : Es más rico que su hermano.", hint: 'más … que / menos … que' },
    { id: 2, category: 'Comparatif', front: "Comparatif d'égalité (devant adjectif/adverbe) ?", back: "tan + adjectif/adverbe + como : Es tan alto como tú = Il est aussi grand que toi." },
    { id: 3, category: 'Comparatif', front: "Comparatif d'égalité (devant un nom) ?", back: "tanto/-a/-os/-as + nom + como (accord avec le nom) : Tiene tantas dudas como yo." },
    { id: 4, category: 'Nombre', front: "« Plus de / moins de » + nombre ?", back: "más de / menos de + nombre (jamais « que ») : Más de mil personas = Plus de mille personnes." },
    { id: 5, category: 'Subordonnée', front: "Comparatif suivi d'une subordonnée ?", back: "de lo que (idée/adjectif) ; del que / de la que (nom) : Es más caro de lo que crees." },
    { id: 6, category: 'Irréguliers', front: "Comparatifs irréguliers de bueno / malo ?", back: "bueno → mejor ; malo → peor (pas « más bueno / más malo » au sens qualité)." },
    { id: 7, category: 'Irréguliers', front: "Comparatifs irréguliers de grande / pequeño ?", back: "grande → mayor ; pequeño → menor. Pour l'âge : mayor / menor (jamais « más mayor »)." },
    { id: 8, category: 'Superlatif', front: "Superlatif relatif (« le plus … de ») ?", back: "el/la/los/las (+ nom) + más/menos + adjectif + DE : la ciudad más grande de España.", hint: 'complément avec DE, pas « que »' },
    { id: 9, category: 'Superlatif', front: "Superlatif absolu : suffixe de base ?", back: "adjectif + -ísimo/-a : alto → altísimo ; fácil → facilísimo." },
    { id: 10, category: 'Orthographe', front: "Modifications devant -ísimo : -co / -go / -z ?", back: "rico → riquísimo ; largo → larguísimo ; feliz → felicísimo." },
    { id: 11, category: 'Intensité', front: "« muy » vs « -ísimo » : cumul possible ?", back: "Non. muy alto = altísimo (équivalents). « muy altísimo » est fautif." },
    { id: 12, category: 'Corrélation', front: "« Plus … plus … » / « un des meilleurs » ?", back: "cuanto más … más … (Cuanto más lees, más sabes) ; uno de los mejores = un des meilleurs." },
  ],
};
