export interface NegationsExercise {
  id: string;
  type: 'qcm' | 'choix' | 'complet';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  level: 'débutant' | 'intermédiaire' | 'avancé';
  category: string;
}

export const negationsExercises: NegationsExercise[] = [
  // QCM - Négations simples (10 questions)
  {
    id: "neg_qcm_1",
    type: "qcm",
    question: "Complétez : ___ tengo dinero.",
    options: ["a) No", "b) Nada", "c) Nadie", "d) Nunca"],
    correctAnswer: "a) No",
    explanation: "'No' est la négation simple qui se place devant le verbe.",
    level: "débutant",
    category: "négation simple"
  },
  {
    id: "neg_qcm_2",
    type: "qcm",
    question: "Choisissez la forme correcte : ___ viene a la fiesta.",
    options: ["a) No", "b) Nadie", "c) Nada", "d) Ningún"],
    correctAnswer: "b) Nadie",
    explanation: "'Nadie' signifie 'personne' et fonctionne comme sujet ou complément.",
    level: "intermédiaire",
    category: "pronoms négatifs"
  },
  {
    id: "neg_qcm_3",
    type: "qcm",
    question: "Complétez : ___ he visto esa película.",
    options: ["a) No", "b) Nunca", "c) Jamás", "d) Tampoco"],
    correctAnswer: "b) Nunca",
    explanation: "'Nunca' signifie 'jamais' et exprime une négation temporelle.",
    level: "intermédiaire",
    category: "adverbes négatifs"
  },
  {
    id: "neg_qcm_4",
    type: "qcm",
    question: "Identifiez la forme correcte : No quiero ___ .",
    options: ["a) algo", "b) nada", "c) alguien", "d) nadie"],
    correctAnswer: "b) nada",
    explanation: "'Nada' s'utilise après 'no' pour renforcer la négation.",
    level: "intermédiaire",
    category: "double négation"
  },
  {
    id: "neg_qcm_5",
    type: "qcm",
    question: "Choisissez l'option correcte : ___ libro me gusta.",
    options: ["a) No", "b) Ningún", "c) Nada", "d) Nadie"],
    correctAnswer: "b) Ningún",
    explanation: "'Ningún' s'accorde avec le nom masculin singulier qui suit.",
    level: "intermédiaire",
    category: "adjectifs négatifs"
  },
  {
    id: "neg_qcm_6",
    type: "qcm",
    question: "Complétez : ___ me gusta el café ___ el té.",
    options: ["a) No... ni", "b) Ni... no", "c) No... o", "d) Ni... ni"],
    correctAnswer: "d) Ni... ni",
    explanation: "'Ni... ni' exprime une double négation coordinative.",
    level: "avancé",
    category: "coordination négative"
  },
  {
    id: "neg_qcm_7",
    type: "qcm",
    question: "Quelle est la forme correcte : A mí ___ me gusta.",
    options: ["a) no", "b) tampoco", "c) también", "d) ni"],
    correctAnswer: "b) tampoco",
    explanation: "'Tampoco' signifie 'moi non plus' et exprime l'accord négatif.",
    level: "intermédiaire",
    category: "accord négatif"
  },
  {
    id: "neg_qcm_8",
    type: "qcm",
    question: "Complétez : No viene ___ Juan ___ María.",
    options: ["a) no... no", "b) ni... ni", "c) o... o", "d) y... y"],
    correctAnswer: "b) ni... ni",
    explanation: "'Ni... ni' coordonne des éléments dans une phrase négative.",
    level: "avancé",
    category: "coordination négative"
  },
  {
    id: "neg_qcm_9",
    type: "qcm",
    question: "Choisissez l'option correcte : No he visto a ___ .",
    options: ["a) alguien", "b) nadie", "c) algo", "d) nada"],
    correctAnswer: "b) nadie",
    explanation: "'Nadie' s'utilise après 'no' pour les personnes.",
    level: "intermédiaire",
    category: "double négation"
  },
  {
    id: "neg_qcm_10",
    type: "qcm",
    question: "Identifiez la forme correcte : ___ casa me gusta.",
    options: ["a) Ninguna", "b) Ningún", "c) No", "d) Nada"],
    correctAnswer: "a) Ninguna",
    explanation: "'Ninguna' s'accorde avec le nom féminin singulier 'casa'.",
    level: "intermédiaire",
    category: "adjectifs négatifs"
  },
  // QCM - Négations complexes (10 questions)
  {
    id: "neg_qcm_11",
    type: "qcm",
    question: "Transformez en négatif : Alguien viene. → ___ viene ___.",
    options: ["a) No... nadie", "b) Nadie... no", "c) No... alguien", "d) Nadie"],
    correctAnswer: "a) No... nadie",
    explanation: "On peut utiliser 'no' + 'nadie' ou simplement 'nadie' en début de phrase.",
    level: "avancé",
    category: "transformation négative"
  },
  {
    id: "neg_qcm_12",
    type: "qcm",
    question: "Choisissez la forme correcte : No he comprado ___ en absoluto.",
    options: ["a) algo", "b) nada", "c) alguien", "d) nadie"],
    correctAnswer: "b) nada",
    explanation: "'Nada en absoluto' renforce l'idée de négation totale.",
    level: "avancé",
    category: "renforcement négatif"
  },
  {
    id: "neg_qcm_13",
    type: "qcm",
    question: "Complétez : ___ en mi vida he visto algo así.",
    options: ["a) Nunca", "b) No", "c) Jamás", "d) Tampoco"],
    correctAnswer: "a) Nunca",
    explanation: "'Nunca en mi vida' est une expression d'emphase négative.",
    level: "avancé",
    category: "expressions négatives"
  },
  {
    id: "neg_qcm_14",
    type: "qcm",
    question: "Identifiez l'option correcte : No quiero ___ más café.",
    options: ["a) no", "b) nada", "c) ni", "d) más"],
    correctAnswer: "d) más",
    explanation: "'No... más' signifie 'ne... plus'.",
    level: "intermédiaire",
    category: "cessation"
  },
  {
    id: "neg_qcm_15",
    type: "qcm",
    question: "Complétez : ___ siquiera me saludó.",
    options: ["a) No", "b) Ni", "c) Nunca", "d) Nada"],
    correctAnswer: "b) Ni",
    explanation: "'Ni siquiera' signifie 'même pas' et exprime une négation emphatique.",
    level: "avancé",
    category: "emphase négative"
  },
  {
    id: "neg_qcm_16",
    type: "qcm",
    question: "Choisissez la forme correcte : No tengo ___ idea.",
    options: ["a) ninguna", "b) ningún", "c) no", "d) nada"],
    correctAnswer: "a) ninguna",
    explanation: "'Ninguna' s'accorde avec 'idea' (féminin singulier).",
    level: "intermédiaire",
    category: "adjectifs négatifs"
  },
  {
    id: "neg_qcm_17",
    type: "qcm",
    question: "Complétez : No me gusta ___ el fútbol ___ el tenis.",
    options: ["a) o... o", "b) ni... ni", "c) y... y", "d) no... no"],
    correctAnswer: "b) ni... ni",
    explanation: "'Ni... ni' coordonne des éléments niés.",
    level: "avancé",
    category: "coordination négative"
  },
  {
    id: "neg_qcm_18",
    type: "qcm",
    question: "Identifiez l'option correcte : No he estudiado ___ .",
    options: ["a) algo", "b) nada", "c) alguien", "d) nadie"],
    correctAnswer: "b) nada",
    explanation: "'Nada' complète la négation après 'no'.",
    level: "débutant",
    category: "double négation"
  },
  {
    id: "neg_qcm_19",
    type: "qcm",
    question: "Complétez : A él ___ le gusta la música.",
    options: ["a) también", "b) tampoco", "c) no", "d) ni"],
    correctAnswer: "b) tampoco",
    explanation: "'Tampoco' exprime l'accord avec une négation précédente.",
    level: "intermédiaire",
    category: "accord négatif"
  },
  {
    id: "neg_qcm_20",
    type: "qcm",
    question: "Choisissez la forme correcte : No hay ___ en la nevera.",
    options: ["a) algo", "b) nada", "c) alguien", "d) nadie"],
    correctAnswer: "b) nada",
    explanation: "'Nada' est utilisé pour les choses après une négation.",
    level: "débutant",
    category: "double négation"
  },

  // Mots à compléter - Négations (20 questions)
  {
    id: "neg_complet_1",
    type: "complet",
    question: "___ tengo tiempo para estudiar. (négation simple)",
    correctAnswer: "No",
    explanation: "'No' est la négation simple qui se place devant le verbe.",
    level: "débutant",
    category: "négation simple"
  },
  {
    id: "neg_complet_2",
    type: "complet",
    question: "___ ha llamado por teléfono. (personne)",
    correctAnswer: "Nadie",
    explanation: "'Nadie' signifie 'personne'.",
    level: "intermédiaire",
    category: "pronoms négatifs"
  },
  {
    id: "neg_complet_3",
    type: "complet",
    question: "___ he visto esa película. (jamais)",
    correctAnswer: "Nunca",
    explanation: "'Nunca' signifie 'jamais'.",
    level: "intermédiaire",
    category: "adverbes négatifs"
  },
  {
    id: "neg_complet_4",
    type: "complet",
    question: "No quiero ___. (rien)",
    correctAnswer: "nada",
    explanation: "'Nada' signifie 'rien' et renforce la négation.",
    level: "intermédiaire",
    category: "double négation"
  },
  {
    id: "neg_complet_5",
    type: "complet",
    question: "___ alumno entendió la lección. (aucun masculin)",
    correctAnswer: "Ningún",
    explanation: "'Ningún' s'utilise devant un nom masculin singulier.",
    level: "intermédiaire",
    category: "adjectifs négatifs"
  },
  {
    id: "neg_complet_6",
    type: "complet",
    question: "___ alumna vino a clase. (aucune féminine)",
    correctAnswer: "Ninguna",
    explanation: "'Ninguna' s'utilise devant un nom féminin singulier.",
    level: "intermédiaire",
    category: "adjectifs négatifs"
  },
  {
    id: "neg_complet_7",
    type: "complet",
    question: "A mí ___ me gusta el café. (moi non plus)",
    correctAnswer: "tampoco",
    explanation: "'Tampoco' signifie 'moi non plus' ou 'non plus'.",
    level: "intermédiaire",
    category: "accord négatif"
  },
  {
    id: "neg_complet_8",
    type: "complet",
    question: "No me gusta ___ el fútbol ___ el tenis. (ni... ni)",
    correctAnswer: "ni",
    explanation: "'Ni... ni' coordonne des éléments dans une négation.",
    level: "avancé",
    category: "coordination négative"
  },
  {
    id: "neg_complet_9",
    type: "complet",
    question: "No he visto a ___ hoy. (personne)",
    correctAnswer: "nadie",
    explanation: "'Nadie' après 'no' renforce la négation pour les personnes.",
    level: "intermédiaire",
    category: "double négation"
  },
  {
    id: "neg_complet_10",
    type: "complet",
    question: "___ más quiero estudiar. (ne... plus)",
    correctAnswer: "No",
    explanation: "'No... más' signifie 'ne... plus'.",
    level: "intermédiaire",
    category: "cessation"
  },
  {
    id: "neg_complet_11",
    type: "complet",
    question: "___ siquiera me habló. (même pas)",
    correctAnswer: "Ni",
    explanation: "'Ni siquiera' signifie 'même pas'.",
    level: "avancé",
    category: "emphase négative"
  },
  {
    id: "neg_complet_12",
    type: "complet",
    question: "No tengo ___ idea. (aucune féminine)",
    correctAnswer: "ninguna",
    explanation: "'Ninguna' s'accorde avec 'idea' (féminin).",
    level: "intermédiaire",
    category: "adjectifs négatifs"
  },
  {
    id: "neg_complet_13",
    type: "complet",
    question: "___ en mi vida he visto eso. (jamais de ma vie)",
    correctAnswer: "Nunca",
    explanation: "'Nunca en mi vida' est une expression emphatique.",
    level: "avancé",
    category: "expressions négatives"
  },
  {
    id: "neg_complet_14",
    type: "complet",
    question: "No he comprado ___ en absoluto. (rien du tout)",
    correctAnswer: "nada",
    explanation: "'Nada en absoluto' renforce la négation.",
    level: "avancé",
    category: "renforcement négatif"
  },
  {
    id: "neg_complet_15",
    type: "complet",
    question: "No viene ___ Juan ___ María. (coordination)",
    correctAnswer: "ni",
    explanation: "'Ni... ni' coordonne Juan et María dans la négation.",
    level: "avancé",
    category: "coordination négative"
  },
  {
    id: "neg_complet_16",
    type: "complet",
    question: "No hay ___ en la casa. (personne)",
    correctAnswer: "nadie",
    explanation: "'Nadie' pour les personnes après 'no hay'.",
    level: "intermédiaire",
    category: "double négation"
  },
  {
    id: "neg_complet_17",
    type: "complet",
    question: "No tengo ___ problema. (aucun masculin)",
    correctAnswer: "ningún",
    explanation: "'Ningún' devant 'problema' (masculin).",
    level: "intermédiaire",
    category: "adjectifs négatifs"
  },
  {
    id: "neg_complet_18",
    type: "complet",
    question: "___ iré a esa fiesta. (jamais)",
    correctAnswer: "Jamás",
    explanation: "'Jamás' est plus emphatique que 'nunca'.",
    level: "avancé",
    category: "adverbes négatifs"
  },
  {
    id: "neg_complet_19",
    type: "complet",
    question: "No he hecho ___ malo. (rien de mal)",
    correctAnswer: "nada",
    explanation: "'Nada malo' signifie 'rien de mal'.",
    level: "intermédiaire",
    category: "double négation"
  },
  {
    id: "neg_complet_20",
    type: "complet",
    question: "A ella ___ le gusta bailar. (elle non plus)",
    correctAnswer: "tampoco",
    explanation: "'Tampoco' exprime l'accord négatif.",
    level: "intermédiaire",
    category: "accord négatif"
  }
];

export const negationsExerciseCategories = [
  "négation simple",
  "pronoms négatifs",
  "adverbes négatifs",
  "adjectifs négatifs",
  "double négation",
  "coordination négative",
  "accord négatif",
  "cessation",
  "emphase négative",
  "expressions négatives",
  "renforcement négatif",
  "transformation négative"
];

export const getNegationsExercisesByType = (type: NegationsExercise['type']) => {
  return negationsExercises.filter(exercise => exercise.type === type);
};

export const getNegationsExercisesByCategory = (category: string) => {
  return negationsExercises.filter(exercise => exercise.category === category);
};

export const getNegationsExercisesByLevel = (level: NegationsExercise['level']) => {
  return negationsExercises.filter(exercise => exercise.level === level);
};