export interface AdjectiveAdverbExercise {
  id: string;
  type: 'qcm' | 'choix' | 'complet';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  level: 'débutant' | 'intermédiaire' | 'avancé';
  category: string;
}

export const adjectivesAdverbsExercises: AdjectiveAdverbExercise[] = [
  // QCM - ACCORD DES ADJECTIFS
  {
    id: "adj_qcm_1",
    type: "qcm",
    question: "Quel est l'accord correct : 'Las casas _____' (Les maisons blanches)",
    options: ["a) blanco", "b) blanca", "c) blancos", "d) blancas"],
    correctAnswer: "d) blancas",
    explanation: "L'adjectif s'accorde en genre et nombre avec le nom : 'casas' (féminin pluriel) → 'blancas'.",
    level: "débutant",
    category: "Accord des adjectifs"
  },
  {
    id: "adj_qcm_2",
    type: "qcm",
    question: "Quel adjectif s'accorde correctement : 'Los libros _____' (Les livres intéressants)",
    options: ["a) interesante", "b) interesantes", "c) interesant", "d) interesants"],
    correctAnswer: "b) interesantes",
    explanation: "L'adjectif 'interesante' devient 'interesantes' au pluriel masculin.",
    level: "débutant",
    category: "Accord des adjectifs"
  },
  {
    id: "adj_qcm_3",
    type: "qcm",
    question: "Quel est l'accord correct : 'La ciudad _____' (La ville ancienne)",
    options: ["a) antiguo", "b) antigua", "c) antiguos", "d) antiguas"],
    correctAnswer: "b) antigua",
    explanation: "'Ciudad' est féminin singulier, donc l'adjectif prend la forme féminine singulière.",
    level: "débutant",
    category: "Accord des adjectifs"
  },
  {
    id: "adj_qcm_4",
    type: "qcm",
    question: "Quel adjectif convient : 'Un chico _____' (Un garçon intelligent)",
    options: ["a) inteligente", "b) inteligentes", "c) inteligent", "d) inteligenta"],
    correctAnswer: "a) inteligente",
    explanation: "'Chico' est masculin singulier, donc 'inteligente' reste inchangé car il se termine par '-e'.",
    level: "débutant",
    category: "Adjectifs invariables"
  },
  {
    id: "adj_qcm_5",
    type: "qcm",
    question: "Comment s'accorde 'feliz' avec 'Las niñas' ?",
    options: ["a) feliz", "b) felices", "c) feliza", "d) felizes"],
    correctAnswer: "b) felices",
    explanation: "'Feliz' est un adjectif terminé par '-z', il devient 'felices' au pluriel.",
    level: "débutant",
    category: "Accord des adjectifs"
  },

  // QCM - FORMATION DES ADVERBES
  {
    id: "adv_qcm_1",
    type: "qcm",
    question: "Comment forme-t-on l'adverbe à partir de 'rápido' ?",
    options: ["a) rápido", "b) rápidamente", "c) rápida", "d) rápidos"],
    correctAnswer: "b) rápidamente",
    explanation: "Pour former un adverbe, on ajoute '-mente' au féminin de l'adjectif : 'rápida' + 'mente' = 'rápidamente'.",
    level: "intermédiaire",
    category: "Formation des adverbes"
  },
  {
    id: "adv_qcm_2",
    type: "qcm",
    question: "Quel est l'adverbe correct de 'fácil' ?",
    options: ["a) fácil", "b) fácilmente", "c) facil", "d) facilmente"],
    correctAnswer: "b) fácilmente",
    explanation: "De 'fácil' (féminin invariable), on forme l'adverbe 'fácilmente'.",
    level: "intermédiaire",
    category: "Formation des adverbes"
  },
  {
    id: "adv_qcm_3",
    type: "qcm",
    question: "Comment forme-t-on l'adverbe de 'verdadero' ?",
    options: ["a) verdaderamente", "b) verdadera", "c) verdader", "d) verdaderamente"],
    correctAnswer: "a) verdaderamente",
    explanation: "De 'verdadero' → féminin 'verdadera' + 'mente' = 'verdaderamente'.",
    level: "intermédiaire",
    category: "Formation des adverbes"
  },
  {
    id: "adv_qcm_4",
    type: "qcm",
    question: "Quel est l'adverbe de quantité pour 'mucho' ?",
    options: ["a) mucho", "b) muchos", "c) muchas", "d) mucho reste inchangé"],
    correctAnswer: "d) mucho reste inchangé",
    explanation: "'Mucho' peut être utilisé comme adverbe de quantité sans changement.",
    level: "intermédiaire",
    category: "Adjectifs invariables"
  },

  // QCM - POSITION DES ADJECTIFS
  {
    id: "pos_qcm_1",
    type: "qcm",
    question: "Où placer l'adjectif 'bonito' : 'una casa _____' ?",
    options: ["a) bonita casa", "b) casa bonita", "c) bonita casas", "d) casas bonita"],
    correctAnswer: "b) casa bonita",
    explanation: "Les adjectifs descriptifs se placent généralement après le nom en espagnol.",
    level: "débutant",
    category: "Position des adjectifs"
  },
  {
    id: "pos_qcm_2",
    type: "qcm",
    question: "Où placer l'adjectif 'gran' : 'una _____' ?",
    options: ["a) grande casa", "b) casa grande", "c) gran casa", "d) casa gran"],
    correctAnswer: "c) gran casa",
    explanation: "'Gran' est la forme apocopée de 'grande' et se place avant le nom.",
    level: "intermédiaire",
    category: "Position des adjectifs"
  },
  {
    id: "pos_qcm_3",
    type: "qcm",
    question: "Quelle est la position correcte de 'primero' : 'el _____' ?",
    options: ["a) primer capítulo", "b) capítulo primero", "c) primera capítulo", "d) capítulo primera"],
    correctAnswer: "a) primer capítulo",
    explanation: "'Primero' s'apocope en 'primer' devant un nom masculin singulier.",
    level: "intermédiaire",
    category: "Position des adjectifs"
  },

  // QCM - COMPARATIFS ET SUPERLATIFS
  {
    id: "comp_qcm_1",
    type: "qcm",
    question: "Quel est le comparatif de supériorité de 'alto' ?",
    options: ["a) más alto", "b) altísimo", "c) tan alto", "d) menos alto"],
    correctAnswer: "a) más alto",
    explanation: "Le comparatif de supériorité se forme avec 'más + adjectif'.",
    level: "intermédiaire",
    category: "Comparatifs et superlatifs"
  },
  {
    id: "comp_qcm_2",
    type: "qcm",
    question: "Quel est le superlatif absolu de 'rápido' ?",
    options: ["a) más rápido", "b) rapidísimo", "c) tan rápido", "d) el más rápido"],
    correctAnswer: "b) rapidísimo",
    explanation: "Le superlatif absolu s'obtient en ajoutant '-ísimo' à l'adjectif.",
    level: "intermédiaire",
    category: "Comparatifs et superlatifs"
  },
  {
    id: "comp_qcm_3",
    type: "qcm",
    question: "Quelle est la forme comparative 'moins que' ?",
    options: ["a) más que", "b) menos que", "c) tan que", "d) como que"],
    correctAnswer: "b) menos que",
    explanation: "'Menos que' exprime l'infériorité dans les comparaisons.",
    level: "intermédiaire",
    category: "Comparatifs et superlatifs"
  },
  {
    id: "comp_qcm_4",
    type: "qcm",
    question: "Quel est le comparatif d'égalité de 'grande' ?",
    options: ["a) más grande", "b) tan grande", "c) grandísimo", "d) menos grande"],
    correctAnswer: "b) tan grande",
    explanation: "Le comparatif d'égalité se forme avec 'tan + adjectif + como'.",
    level: "intermédiaire",
    category: "Comparatifs et superlatifs"
  },

  // CHOIX MULTIPLES - ACCORD DES ADJECTIFS
  {
    id: "adj_choix_1",
    type: "choix",
    question: "Complétez : 'Los coches _____' (Les voitures rouges)",
    options: ["a) rojo", "b) roja", "c) rojos"],
    correctAnswer: "c) rojos",
    explanation: "'Coches' est masculin pluriel, donc l'adjectif devient 'rojos'.",
    level: "débutant",
    category: "Accord des adjectifs"
  },
  {
    id: "adj_choix_2",
    type: "choix",
    question: "Complétez : 'La mesa _____' (La table ronde)",
    options: ["a) redondo", "b) redonda", "c) redondos"],
    correctAnswer: "b) redonda",
    explanation: "'Mesa' est féminin singulier, donc 'redonda'.",
    level: "débutant",
    category: "Accord des adjectifs"
  },
  {
    id: "adj_choix_3",
    type: "choix",
    question: "Complétez : 'Unas flores _____' (Des fleurs belles)",
    options: ["a) bonito", "b) bonita", "c) bonitas"],
    correctAnswer: "c) bonitas",
    explanation: "'Flores' est féminin pluriel, donc 'bonitas'.",
    level: "débutant",
    category: "Accord des adjectifs"
  },
  {
    id: "adj_choix_4",
    type: "choix",
    question: "Complétez : 'El problema _____' (Le problème difficile)",
    options: ["a) difícil", "b) difíciles", "c) dificil"],
    correctAnswer: "a) difícil",
    explanation: "'Difícil' est invariable en genre et nombre.",
    level: "débutant",
    category: "Adjectifs invariables"
  },

  // CHOIX MULTIPLES - FORMATION DES ADVERBES
  {
    id: "adv_choix_1",
    type: "choix",
    question: "Complétez : 'Habla _____ de español.' (Il parle couramment l'espagnol)",
    options: ["a) fluido", "b) fluida", "c) fluidamente"],
    correctAnswer: "c) fluidamente",
    explanation: "Adverbe formé à partir de 'fluido' : 'fluida' + 'mente' = 'fluidamente'.",
    level: "intermédiaire",
    category: "Formation des adverbes"
  },
  {
    id: "adv_choix_2",
    type: "choix",
    question: "Complétez : 'Trabaja _____.' (Il travaille dur)",
    options: ["a) duro", "b) dura", "c) duramente"],
    correctAnswer: "c) duramente",
    explanation: "De 'duro' → féminin 'dura' + 'mente' = 'duramente'.",
    level: "intermédiaire",
    category: "Formation des adverbes"
  },
  {
    id: "adv_choix_3",
    type: "choix",
    question: "Complétez : 'Canta _____.' (Elle chante magnifiquement)",
    options: ["a) magnífico", "b) magnífica", "c) magníficamente"],
    correctAnswer: "c) magníficamente",
    explanation: "De 'magnífico' → 'magnífica' + 'mente' = 'magníficamente'.",
    level: "intermédiaire",
    category: "Formation des adverbes"
  },

  // CHOIX MULTIPLES - POSITION DES ADJECTIFS
  {
    id: "pos_choix_1",
    type: "choix",
    question: "Complétez : '_____ amigo mío' (Mon bon ami)",
    options: ["a) buen amigo", "b) amigo bueno", "c) buena amigo"],
    correctAnswer: "a) buen amigo",
    explanation: "'Buen' est l'apocope de 'bueno' devant un nom masculin.",
    level: "intermédiaire",
    category: "Position des adjectifs"
  },
  {
    id: "pos_choix_2",
    type: "choix",
    question: "Complétez : '_____ día' (Un beau jour)",
    options: ["a) bonito día", "b) día bonito", "c) buen día"],
    correctAnswer: "c) buen día",
    explanation: "'Buen' est utilisé pour les qualités appréciatives.",
    level: "intermédiaire",
    category: "Position des adjectifs"
  },
  {
    id: "pos_choix_3",
    type: "choix",
    question: "Complétez : 'una _____ noche' (Une mauvaise nuit)",
    options: ["a) mala noche", "b) noche mala", "c) mal noche"],
    correctAnswer: "a) mala noche",
    explanation: "Les adjectifs de jugement se placent généralement avant le nom.",
    level: "intermédiaire",
    category: "Position des adjectifs"
  },

  // CHOIX MULTIPLES - COMPARATIFS ET SUPERLATIFS
  {
    id: "comp_choix_1",
    type: "choix",
    question: "Complétez : 'Madrid es _____ que Barcelona.' (Madrid est plus grande que Barcelone)",
    options: ["a) más grande", "b) grandísima", "c) tan grande"],
    correctAnswer: "a) más grande",
    explanation: "Comparatif de supériorité : 'más + adjectif + que'.",
    level: "intermédiaire",
    category: "Comparatifs et superlatifs"
  },
  {
    id: "comp_choix_2",
    type: "choix",
    question: "Complétez : 'Esta es la _____ película del año.' (C'est le meilleur film de l'année)",
    options: ["a) mejor", "b) más buena", "c) buenísima"],
    correctAnswer: "a) mejor",
    explanation: "'Mejor' est le comparatif irrégulier de 'bueno'.",
    level: "intermédiaire",
    category: "Comparatifs et superlatifs"
  },
  {
    id: "comp_choix_3",
    type: "choix",
    question: "Complétez : 'Mi hermana es _____ que yo.' (Ma sœur est aussi grande que moi)",
    options: ["a) más alta", "b) tan alta", "c) altísima"],
    correctAnswer: "b) tan alta",
    explanation: "Comparatif d'égalité : 'tan + adjectif + como'.",
    level: "intermédiaire",
    category: "Comparatifs et superlatifs"
  },

  // MOTS À COMPLÉTER - ACCORD DES ADJECTIFS
  {
    id: "adj_complet_1",
    type: "complet",
    question: "Complétez : 'Ella es muy _____.' (Elle est très intelligente)",
    correctAnswer: "inteligente",
    explanation: "'Inteligente' ne change pas au féminin car il se termine par '-e'.",
    level: "débutant",
    category: "Adjectifs invariables"
  },
  {
    id: "adj_complet_2",
    type: "complet",
    question: "Complétez : 'Los niños están _____.' (Les enfants sont fatigués)",
    correctAnswer: "cansados",
    explanation: "'Cansados' : masculin pluriel de 'cansado'.",
    level: "débutant",
    category: "Accord des adjectifs"
  },
  {
    id: "adj_complet_3",
    type: "complet",
    question: "Complétez : 'La película fue _____.' (Le film était intéressant)",
    correctAnswer: "interesante",
    explanation: "'Interesante' reste inchangé car il se termine par '-e'.",
    level: "débutant",
    category: "Adjectifs invariables"
  },
  {
    id: "adj_complet_4",
    type: "complet",
    question: "Complétez : 'Compré zapatos _____.' (J'ai acheté des chaussures noires)",
    correctAnswer: "negros",
    explanation: "'Negros' : masculin pluriel de 'negro'.",
    level: "débutant",
    category: "Accord des adjectifs"
  },
  {
    id: "adj_complet_5",
    type: "complet",
    question: "Complétez : 'Mi hermana es _____.' (Ma sœur est sportive)",
    correctAnswer: "deportista",
    explanation: "'Deportista' est invariable en genre.",
    level: "débutant",
    category: "Adjectifs invariables"
  },

  // MOTS À COMPLÉTER - FORMATION DES ADVERBES
  {
    id: "adv_complet_1",
    type: "complet",
    question: "Complétez : 'Conduce muy _____.' (Il conduit très prudemment)",
    correctAnswer: "prudentemente",
    explanation: "De 'prudente' → 'prudente' (reste inchangé) + 'mente' = 'prudentemente'.",
    level: "intermédiaire",
    category: "Formation des adverbes"
  },
  {
    id: "adv_complet_2",
    type: "complet",
    question: "Complétez : 'Trabaja _____.' (Il travaille efficacement)",
    correctAnswer: "eficazmente",
    explanation: "De 'eficaz' → 'eficaz' (invariable) + 'mente' = 'eficazmente'.",
    level: "intermédiaire",
    category: "Formation des adverbes"
  },
  {
    id: "adv_complet_3",
    type: "complet",
    question: "Complétez : 'Habla _____.' (Elle parle clairement)",
    correctAnswer: "claramente",
    explanation: "De 'claro' → féminin 'clara' + 'mente' = 'claramente'.",
    level: "intermédiaire",
    category: "Formation des adverbes"
  },
  {
    id: "adv_complet_4",
    type: "complet",
    question: "Complétez : 'Vive _____.' (Il vit heureux)",
    correctAnswer: "felizmente",
    explanation: "De 'feliz' → 'feliz' (invariable) + 'mente' = 'felizmente'.",
    level: "intermédiaire",
    category: "Formation des adverbes"
  },

  // MOTS À COMPLÉTER - POSITION DES ADJECTIFS
  {
    id: "pos_complet_1",
    type: "complet",
    question: "Complétez : '_____ amigo' (Mon cher ami)",
    correctAnswer: "querido",
    explanation: "Les adjectifs affectifs comme 'querido' se placent avant le nom.",
    level: "intermédiaire",
    category: "Position des adjectifs"
  },
  {
    id: "pos_complet_2",
    type: "complet",
    question: "Complétez : 'un _____ día' (Un mauvais jour)",
    correctAnswer: "mal",
    explanation: "'Mal' est la forme apocopée de 'malo' devant un nom masculin.",
    level: "intermédiaire",
    category: "Position des adjectifs"
  },
  {
    id: "pos_complet_3",
    type: "complet",
    question: "Complétez : '_____ mano' (La main droite)",
    correctAnswer: "derecha",
    explanation: "Les adjectifs de position se placent généralement après le nom.",
    level: "intermédiaire",
    category: "Position des adjectifs"
  },

  // MOTS À COMPLÉTER - COMPARATIFS ET SUPERLATIFS
  {
    id: "comp_complet_1",
    type: "complet",
    question: "Complétez : 'Esta casa es _____ que la mía.' (Cette maison est plus chère que la mienne)",
    correctAnswer: "más cara",
    explanation: "Comparatif de supériorité : 'más + cara'.",
    level: "intermédiaire",
    category: "Comparatifs et superlatifs"
  },
  {
    id: "comp_complet_2",
    type: "complet",
    question: "Complétez : 'Es el _____ estudiante de la clase.' (C'est le meilleur étudiant de la classe)",
    correctAnswer: "mejor",
    explanation: "'Mejor' est le superlatif irrégulier de 'bueno'.",
    level: "intermédiaire",
    category: "Comparatifs et superlatifs"
  },
  {
    id: "comp_complet_3",
    type: "complet",
    question: "Complétez : 'Mi coche es _____ que el tuyo.' (Ma voiture est moins rapide que la tienne)",
    correctAnswer: "menos rápido",
    explanation: "Comparatif d'infériorité : 'menos + rápido + que'.",
    level: "intermédiaire",
    category: "Comparatifs et superlatifs"
  },
  {
    id: "comp_complet_4",
    type: "complet",
    question: "Complétez : 'Es la _____ persona del mundo.' (C'est la personne la plus gentille du monde)",
    correctAnswer: "más amable",
    explanation: "Superlatif relatif : 'el/la/los/las + más + adjectif'.",
    level: "avancé",
    category: "Comparatifs et superlatifs"
  },
  {
    id: "comp_complet_5",
    type: "complet",
    question: "Complétez : 'Hace un calor _____.' (Il fait une chaleur terrible)",
    correctAnswer: "terrible",
    explanation: "'Terrible' est déjà un superlatif absolu.",
    level: "intermédiaire",
    category: "Comparatifs et superlatifs"
  },

  // EXERCICES AVANCÉS - QCM
  {
    id: "adv_qcm_5",
    type: "qcm",
    question: "Quelle est la forme adverbiale de 'económico' ?",
    options: ["a) económicamente", "b) económica", "c) económicos", "d) economic"],
    correctAnswer: "a) económicamente",
    explanation: "De 'económico' → 'económica' + 'mente' = 'económicamente'.",
    level: "avancé",
    category: "Formation des adverbes"
  },
  {
    id: "comp_qcm_5",
    type: "qcm",
    question: "Quel est le comparatif irrégulier de 'malo' ?",
    options: ["a) más malo", "b) peor", "c) malísimo", "d) tan malo"],
    correctAnswer: "b) peor",
    explanation: "'Peor' est le comparatif irrégulier de 'malo'.",
    level: "avancé",
    category: "Comparatifs et superlatifs"
  },
  {
    id: "pos_qcm_4",
    type: "qcm",
    question: "Où se place 'santo' dans '_____ Tomás' ?",
    options: ["a) santo Tomás", "b) Tomás santo", "c) san Tomás", "d) Tomás san"],
    correctAnswer: "c) san Tomás",
    explanation: "'Santo' s'apocope en 'san' devant un nom masculin commençant par une voyelle ou 't'.",
    level: "avancé",
    category: "Position des adjectifs"
  },

  // EXERCICES AVANCÉS - CHOIX MULTIPLES
  {
    id: "adv_choix_4",
    type: "choix",
    question: "Complétez : 'Trabaja _____ para conseguir sus objetivos.' (Il travaille intensivement pour atteindre ses objectifs)",
    options: ["a) intenso", "b) intensa", "c) intensamente"],
    correctAnswer: "c) intensamente",
    explanation: "De 'intenso' → 'intensa' + 'mente' = 'intensamente'.",
    level: "avancé",
    category: "Formation des adverbes"
  },
  {
    id: "comp_choix_4",
    type: "choix",
    question: "Complétez : 'Este libro es _____ que el anterior.' (Ce livre est pire que le précédent)",
    options: ["a) más malo", "b) peor", "c) malísimo"],
    correctAnswer: "b) peor",
    explanation: "'Peor' est le comparatif irrégulier de 'malo'.",
    level: "avancé",
    category: "Comparatifs et superlatifs"
  },

  // EXERCICES AVANCÉS - MOTS À COMPLÉTER
  {
    id: "adv_complet_5",
    type: "complet",
    question: "Complétez : 'Se expresa _____ en público.' (Il s'exprime éloquemment en public)",
    correctAnswer: "elocuentemente",
    explanation: "De 'elocuente' → 'elocuente' (invariable) + 'mente' = 'elocuentemente'.",
    level: "avancé",
    category: "Formation des adverbes"
  },
  {
    id: "comp_complet_6",
    type: "complet",
    question: "Complétez : 'Es la persona _____ de la empresa.' (C'est la personne la plus compétente de l'entreprise)",
    correctAnswer: "más competente",
    explanation: "Superlatif relatif : 'el/la + más + adjectif'.",
    level: "avancé",
    category: "Comparatifs et superlatifs"
  }
];

export const adjectivesAdverbsExerciseCategories = [
  "Accord des adjectifs",
  "Formation des adverbes",
  "Adjectifs invariables",
  "Position des adjectifs",
  "Comparatifs et superlatifs"
];

export const getAdjectivesAdverbsExercisesByType = (type: string) => {
  return adjectivesAdverbsExercises.filter(exercise => exercise.type === type);
};

export const getAdjectivesAdverbsExercisesByCategory = (category: string) => {
  return adjectivesAdverbsExercises.filter(exercise => exercise.category === category);
};

export const getAdjectivesAdverbsExercisesByLevel = (level: string) => {
  return adjectivesAdverbsExercises.filter(exercise => exercise.level === level);
};
