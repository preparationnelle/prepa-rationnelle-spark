import { DEFINITIONS, GLOSSARY, REFERENCES, HOOKS, SUBJECTS } from './knowledge-base.ts';
import type { Definition, GlossaryItem, Reference, HookExample } from './knowledge-base.ts';

function tokenize(text: string): string[] {
  return text
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .split(/[\s,;:.!?'"()\[\]{}\/\\-]+/)
    .filter(t => t.length > 2);
}

function scoreMatch(queryTokens: string[], text: string): number {
  const textLower = text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  const textTokens = new Set(tokenize(textLower));
  let score = 0;
  for (const qt of queryTokens) {
    if (textTokens.has(qt)) {
      score += 2;
    } else {
      for (const tt of textTokens) {
        if (tt.includes(qt) && qt.length > 3) {
          score += 0.5;
          break;
        }
        if (qt.includes(tt) && tt.length > 3) {
          score += 0.5;
          break;
        }
      }
    }
  }
  return score;
}

export interface RetrievalResult {
  definitions: Definition[];
  glossary: GlossaryItem[];
  references: Reference[];
  hooks: HookExample[];
  relatedSubjects: string[];
}

export function retrieveContext(query: string, conversationContext: string = ''): RetrievalResult {
  const fullText = `${query} ${conversationContext}`;
  const tokens = tokenize(fullText);

  if (tokens.length === 0) {
    return { definitions: [], glossary: [], references: [], hooks: [], relatedSubjects: [] };
  }

  const scoredDefs = DEFINITIONS
    .map(d => ({ item: d, score: scoreMatch(tokens, `${d.term} ${d.definition} ${d.source || ''}`) }))
    .filter(d => d.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(d => d.item);

  const scoredGlossary = GLOSSARY
    .map(g => ({ item: g, score: scoreMatch(tokens, `${g.term} ${g.definition}`) }))
    .filter(g => g.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 8)
    .map(g => g.item);

  const scoredRefs = REFERENCES
    .map(r => ({ item: r, score: scoreMatch(tokens, `${r.theme} ${r.refs.join(' ')}`) }))
    .filter(r => r.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(r => r.item);

  const scoredHooks = HOOKS
    .map(h => ({ item: h, score: scoreMatch(tokens, `${h.subject} ${h.hook}`) }))
    .filter(h => h.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 3)
    .map(h => h.item);

  const scoredSubjects = SUBJECTS
    .map(s => ({ subject: s, score: scoreMatch(tokens, s) }))
    .filter(s => s.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, 5)
    .map(s => s.subject);

  return {
    definitions: scoredDefs,
    glossary: scoredGlossary,
    references: scoredRefs,
    hooks: scoredHooks,
    relatedSubjects: scoredSubjects,
  };
}

export function formatContextForPrompt(result: RetrievalResult): string {
  const sections: string[] = [];

  if (result.definitions.length > 0) {
    sections.push('## DEFINITIONS PERTINENTES\n' +
      result.definitions.map(d =>
        `- ${d.term}: ${d.definition}${d.source ? ` (Source: ${d.source})` : ''}`
      ).join('\n'));
  }

  if (result.glossary.length > 0) {
    sections.push('## GLOSSAIRE PERTINENT\n' +
      result.glossary.map(g => `- ${g.term}: ${g.definition}`).join('\n'));
  }

  if (result.references.length > 0) {
    sections.push('## REFERENCES ACADEMIQUES PERTINENTES\n' +
      result.references.map(r =>
        `Theme "${r.theme}":\n${r.refs.map(ref => `  - ${ref}`).join('\n')}`
      ).join('\n'));
  }

  if (result.hooks.length > 0) {
    sections.push("## EXEMPLES D'ACCROCHES PERTINENTES\n" +
      result.hooks.map(h => `- Sujet "${h.subject}": ${h.hook}`).join('\n'));
  }

  if (result.relatedSubjects.length > 0) {
    sections.push('## SUJETS DE CONCOURS LIES\n' +
      result.relatedSubjects.map(s => `- ${s}`).join('\n'));
  }

  return sections.join('\n\n');
}
