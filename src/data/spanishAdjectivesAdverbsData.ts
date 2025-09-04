export interface AdjectiveAdverbSection {
  title: string;
  icon: string;
  description: string;
  content: string;
}

export const adjectiveAdverbSections: AdjectiveAdverbSection[] = [
  {
    title: "Adjectifs descriptifs",
    icon: "🎨",
    description: "Adjectifs pour décrire les personnes et les choses",
    content: "Content for descriptive adjectives"
  },
  {
    title: "Adverbes de manière",
    icon: "🏃",
    description: "Comment quelque chose se fait",
    content: "Content for manner adverbs"
  }
];

export type { AdjectiveAdverbSection };