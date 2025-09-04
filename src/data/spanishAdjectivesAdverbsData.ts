export interface AdjectiveAdverbSection {
  id: string;
  title: string;
  icon: string;
  description: string;
  level: string;
  content: {
    rules: string[];
    examples: Array<{
      spanish: string;
      french: string;
      explanation: string;
    }>;
    irregularities?: Array<{
      pattern: string;
      examples: string[];
      notes: string;
    }>;
    tips: string[];
  };
}

export const adjectiveAdverbSections: AdjectiveAdverbSection[] = [
  {
    id: "adjectifs-descriptifs",
    title: "Adjectifs descriptifs",
    icon: "🎨",
    description: "Adjectifs pour décrire les personnes et les choses",
    level: "Débutant",
    content: {
      rules: [
        "Les adjectifs s'accordent en genre et en nombre avec le nom qu'ils qualifient",
        "Formation du féminin: généralement -a pour les masculins en -o",
        "Formation du pluriel: ajout de -s ou -es selon la terminaison"
      ],
      examples: [
        {
          spanish: "Un chico alto → Una chica alta",
          french: "Un garçon grand → Une fille grande",
          explanation: "Accord en genre: masculin -o devient féminin -a"
        },
        {
          spanish: "Los libros interesantes → Las cosas interesantes",
          french: "Les livres intéressants → Les choses intéressantes",
          explanation: "Accord en nombre: ajout de -s au pluriel"
        }
      ],
      tips: [
        "Mémorisez d'abord les adjectifs de couleur et de taille",
        "Attention aux adjectifs invariables comme 'feliz' (heureux/heureuse)"
      ]
    }
  },
  {
    id: "adverbes-maniere",
    title: "Adverbes de manière",
    icon: "🏃",
    description: "Comment quelque chose se fait",
    level: "Intermédiaire",
    content: {
      rules: [
        "Formation en -mente: adjectif féminin + -mente",
        "Les adverbes sont invariables",
        "Placement généralement après le verbe"
      ],
      examples: [
        {
          spanish: "rápida + -mente = rápidamente",
          french: "rapide + -ment = rapidement",
          explanation: "Formation régulière avec le féminin de l'adjectif"
        },
        {
          spanish: "Habla claramente",
          french: "Il/Elle parle clairement",
          explanation: "L'adverbe modifie le verbe et reste invariable"
        }
      ],
      tips: [
        "Seuls certains adverbes peuvent être placés avant le verbe",
        "Évitez l'accumulation d'adverbes en -mente dans une phrase"
      ]
    }
  }
];

