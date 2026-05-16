import type { SpanishGrammarChapterContent } from './types';

import { content as conjugaison } from './conjugaison';
import { content as syntaxeStructuresComplexes } from './syntaxe-structures-complexes';
import { content as serEstar } from './ser-estar';
import { content as prepositions } from './prepositions';
import { content as questions } from './questions';
import { content as negations } from './negations';
import { content as temporal } from './temporal';
import { content as pronouns } from './pronouns';
import { content as affectiveVerbs } from './affective-verbs';
import { content as adjectivesAdverbs } from './adjectives-adverbs';
import { content as subjonctif } from './subjonctif';
import { content as concordanceTemps } from './concordance-temps';
import { content as conditionnelles } from './conditionnelles';
import { content as styleIndirect } from './style-indirect';
import { content as relatives } from './relatives';
import { content as porPara } from './por-para';
import { content as periphrasesVerbales } from './periphrases-verbales';
import { content as comparatifsSuperlatifs } from './comparatifs-superlatifs';
import { content as connecteursLogiques } from './connecteurs-logiques';
import { content as theme } from './theme';

// Registre des contenus quiz & flashcards de la grammaire espagnole, indexé par slug.
// 20 chapitres — même contrat de données (voir ./types.ts).
const chapters: SpanishGrammarChapterContent[] = [
  conjugaison,
  syntaxeStructuresComplexes,
  serEstar,
  prepositions,
  questions,
  negations,
  temporal,
  pronouns,
  affectiveVerbs,
  adjectivesAdverbs,
  subjonctif,
  concordanceTemps,
  conditionnelles,
  styleIndirect,
  relatives,
  porPara,
  periphrasesVerbales,
  comparatifsSuperlatifs,
  connecteursLogiques,
  theme,
];

export const spanishGrammarContent: Record<string, SpanishGrammarChapterContent> = Object.fromEntries(
  chapters.map((c) => [c.slug, c]),
);

export const getSpanishGrammarChapter = (
  slug: string | undefined,
): SpanishGrammarChapterContent | undefined =>
  slug ? spanishGrammarContent[slug] : undefined;

export type { SpanishGrammarChapterContent } from './types';
