export interface ConjugationExercise {
  id: string;
  type: 'qcm' | 'choix' | 'complet';
  question: string;
  options?: string[];
  correctAnswer: string;
  explanation: string;
  level: 'débutant' | 'intermédiaire' | 'avancé';
  category: string;
}

export const conjugationExercises: ConjugationExercise[] = [
  // QCM - SUBJONCTIF PRÉSENT
  {
    id: "qcm1",
    type: "qcm",
    question: "Quel est le subjonctif présent correct pour \"hablar\" (je) ?",
    options: ["a) Hablo", "b) Hablara", "c) Hablaría", "d) Hable"],
    correctAnswer: "d) Hable",
    explanation: "Le subjonctif présent de 'hablar' à la 1ère personne du singulier est 'hable'.",
    level: "intermédiaire",
    category: "subjonctif présent"
  },
  {
    id: "qcm2",
    type: "qcm",
    question: "Quel est le subjonctif présent de \"tener\" (tu) ?",
    options: ["a) Tengas", "b) Tienes", "c) Tendrás", "d) Tenías"],
    correctAnswer: "a) Tengas",
    explanation: "Le subjonctif présent de 'tener' à la 2ème personne du singulier est 'tengas'.",
    level: "intermédiaire",
    category: "subjonctif présent"
  },
  {
    id: "qcm3",
    type: "qcm",
    question: "Quel est le subjonctif présent de \"ser\" (nous) ?",
    options: ["a) Seremos", "b) Somos", "c) Seamos", "d) Éramos"],
    correctAnswer: "c) Seamos",
    explanation: "Le subjonctif présent de 'ser' à la 1ère personne du pluriel est 'seamos'.",
    level: "intermédiaire",
    category: "subjonctif présent"
  },
  {
    id: "qcm4",
    type: "qcm",
    question: "Quel est le subjonctif présent de \"estar\" (vous) ?",
    options: ["a) Estéis", "b) Estaréis", "c) Estáis", "d) Estabais"],
    correctAnswer: "a) Estéis",
    explanation: "Le subjonctif présent de 'estar' à la 2ème personne du pluriel est 'estéis'.",
    level: "intermédiaire",
    category: "subjonctif présent"
  },
  {
    id: "qcm5",
    type: "qcm",
    question: "Quel est le subjonctif présent de \"hacer\" (il/elle) ?",
    options: ["a) Hacía", "b) Hará", "c) Hace", "d) Haga"],
    correctAnswer: "d) Haga",
    explanation: "Le subjonctif présent de 'hacer' à la 3ème personne du singulier est 'haga'.",
    level: "intermédiaire",
    category: "subjonctif présent"
  },

  // QCM - SUBJONCTIF IMPARFAIT
  {
    id: "qcm6",
    type: "qcm",
    question: "Quel est le subjonctif imparfait de \"hablar\" (je) ?",
    options: ["a) Hablaba", "b) Hablase", "c) Hablaría", "d) Hablara"],
    correctAnswer: "d) Hablara",
    explanation: "Le subjonctif imparfait de 'hablar' à la 1ère personne du singulier est 'hablara'.",
    level: "avancé",
    category: "subjonctif imparfait"
  },
  {
    id: "qcm7",
    type: "qcm",
    question: "Quel est le subjonctif imparfait de \"tener\" (tu) ?",
    options: ["a) Tendrías", "b) Tenías", "c) Tuvieras", "d) Tuvieses"],
    correctAnswer: "c) Tuvieras",
    explanation: "Le subjonctif imparfait de 'tener' à la 2ème personne du singulier est 'tuvieras'.",
    level: "avancé",
    category: "subjonctif imparfait"
  },
  {
    id: "qcm8",
    type: "qcm",
    question: "Quel est le subjonctif imparfait de \"ser\" (nous) ?",
    options: ["a) Seríamos", "b) Éramos", "c) Fuésemos", "d) Fuéramos"],
    correctAnswer: "d) Fuéramos",
    explanation: "Le subjonctif imparfait de 'ser' à la 1ère personne du pluriel est 'fuéramos'.",
    level: "avancé",
    category: "subjonctif imparfait"
  },

  // QCM - IMPÉRATIF
  {
    id: "qcm9",
    type: "qcm",
    question: "La forme impérative affirmative pour \"tú\" de \"comer\" est :",
    options: ["a) Coma", "b) Comes", "c) Comía", "d) Come"],
    correctAnswer: "d) Come",
    explanation: "L'impératif affirmatif de 'comer' à la 2ème personne du singulier (tú) est 'come'.",
    level: "intermédiaire",
    category: "impératif"
  },
  {
    id: "qcm10",
    type: "qcm",
    question: "L'impératif affirmatif de \"vivir\" (tú) est :",
    options: ["a) Vives", "b) Vivía", "c) Vivid", "d) Vive"],
    correctAnswer: "d) Vive",
    explanation: "L'impératif affirmatif de 'vivir' à la 2ème personne du singulier (tú) est 'vive'.",
    level: "intermédiaire",
    category: "impératif"
  },
  {
    id: "qcm11",
    type: "qcm",
    question: "L'impératif affirmatif de \"hacer\" (tú) est :",
    options: ["a) Hacía", "b) Haces", "c) Haga", "d) Haz"],
    correctAnswer: "d) Haz",
    explanation: "L'impératif affirmatif de 'hacer' à la 2ème personne du singulier (tú) est 'haz' (irrégulier).",
    level: "intermédiaire",
    category: "impératif"
  },

  // QCM - IMPÉRATIF NÉGATIF
  {
    id: "qcm12",
    type: "qcm",
    question: "L'impératif négatif de \"hablar\" (tú) est :",
    options: ["a) No hablarás", "b) No hablaba", "c) No habla", "d) No hables"],
    correctAnswer: "d) No hables",
    explanation: "L'impératif négatif pour 'tú' utilise le subjonctif présent : 'no hables'.",
    level: "intermédiaire",
    category: "impératif négatif"
  },
  {
    id: "qcm13",
    type: "qcm",
    question: "L'impératif négatif de \"comer\" (tú) est :",
    options: ["a) No comerás", "b) No come", "c) No comía", "d) No comas"],
    correctAnswer: "d) No comas",
    explanation: "L'impératif négatif de 'comer' pour 'tú' est 'no comas' (subjonctif présent).",
    level: "intermédiaire",
    category: "impératif négatif"
  },

  // QCM - GÉRONDIF
  {
    id: "qcm14",
    type: "qcm",
    question: "Quel est le gérondif de \"vivir\" ?",
    options: ["a) Vivirando", "b) Viviente", "c) Vivido", "d) Viviendo"],
    correctAnswer: "d) Viviendo",
    explanation: "Le gérondif de 'vivir' est 'viviendo' (terminaison -iendo pour les verbes en -ir).",
    level: "débutant",
    category: "gérondif"
  },
  {
    id: "qcm15",
    type: "qcm",
    question: "Quel est le gérondif de \"comer\" ?",
    options: ["a) Comiente", "b) Comerando", "c) D. Comido", "d) Comiendo"],
    correctAnswer: "d) Comiendo",
    explanation: "Le gérondif de 'comer' est 'comiendo' (terminaison -iendo pour les verbes en -er).",
    level: "débutant",
    category: "gérondif"
  },
  {
    id: "qcm16",
    type: "qcm",
    question: "Quel est le gérondif de \"hablar\" ?",
    options: ["a) Hablado", "b) Hablante", "c) Hablarando", "d) Hablando"],
    correctAnswer: "d) Hablando",
    explanation: "Le gérondif de 'hablar' est 'hablando' (terminaison -ando pour les verbes en -ar).",
    level: "débutant",
    category: "gérondif"
  },

  // QCM - CONDITIONNEL
  {
    id: "qcm17",
    type: "qcm",
    question: "Le conditionnel de \"hablar\" (je) est :",
    options: ["a) Hablaré", "b) Hablo", "c) Hablaba", "d) Hablaría"],
    correctAnswer: "d) Hablaría",
    explanation: "Le conditionnel de 'hablar' à la 1ère personne du singulier est 'hablaría'.",
    level: "intermédiaire",
    category: "conditionnel"
  },
  {
    id: "qcm18",
    type: "qcm",
    question: "Le conditionnel de \"tener\" (tu) est :",
    options: ["a) Tienes", "b) Tenías", "c) Tendrás", "d) Tendrías"],
    correctAnswer: "d) Tendrías",
    explanation: "Le conditionnel de 'tener' à la 2ème personne du singulier est 'tendrías'.",
    level: "intermédiaire",
    category: "conditionnel"
  },

  // QCM - CONDITIONNEL PASSÉ
  {
    id: "qcm19",
    type: "qcm",
    question: "Le conditionnel passé de \"hablar\" (je) est :",
    options: ["a) Hablé", "b) Hablaría", "c) Había hablado", "d) Habría hablado"],
    correctAnswer: "d) Habría hablado",
    explanation: "Le conditionnel passé se forme avec 'haber' au conditionnel + participe passé : 'habría hablado'.",
    level: "avancé",
    category: "conditionnel passé"
  },
  {
    id: "qcm20",
    type: "qcm",
    question: "Le conditionnel passé de \"tener\" (tu) est :",
    options: ["a) Tendrías", "b) Tuviste", "c) Habías tenido", "d) Habrías tenido"],
    correctAnswer: "d) Habrías tenido",
    explanation: "Le conditionnel passé de 'tener' à la 2ème personne est 'habrías tenido'.",
    level: "avancé",
    category: "conditionnel passé"
  },

  // QCM - CONCORDANCE DES TEMPS
  {
    id: "qcm21",
    type: "qcm",
    question: "Dans \"Si tuviera tiempo, viajaría\", quel mode est utilisé pour l'hypothèse ?",
    options: ["a) Impératif", "b) Indicatif", "c) Futur", "d) Subjonctif imparfait + conditionnel"],
    correctAnswer: "d) Subjonctif imparfait + conditionnel",
    explanation: "La structure 'Si + subjonctif imparfait + conditionnel' exprime une hypothèse irréelle.",
    level: "avancé",
    category: "concordance des temps"
  },
  {
    id: "qcm22",
    type: "qcm",
    question: "Pour la concordance des temps : Si la principale est au passé, la subordonnée au subjonctif est au :",
    options: ["a) Présent", "b) Futur", "c) Conditionnel", "d) Imparfait"],
    correctAnswer: "d) Imparfait",
    explanation: "En espagnol, quand la principale est au passé, la subordonnée au subjonctif se met à l'imparfait.",
    level: "avancé",
    category: "concordance des temps"
  },
  {
    id: "qcm23",
    type: "qcm",
    question: "Dans \"Espero que vengas\", quel mode est utilisé ?",
    options: ["a) Indicatif présent", "b) Subjonctif imparfait", "c) Conditionnel", "d) Subjonctif présent"],
    correctAnswer: "d) Subjonctif présent",
    explanation: "Après 'espero que', on utilise le subjonctif présent : 'vengas'.",
    level: "intermédiaire",
    category: "concordance des temps"
  },

  // CHOIX MULTIPLES - SUBJONCTIF PRÉSENT
  {
    id: "choix1",
    type: "choix",
    question: "\"Quiero que _____ (venir) conmigo.\"",
    options: ["a) vienes", "b) vendrás", "c) vengas"],
    correctAnswer: "c) vengas",
    explanation: "Après 'quiero que', on utilise le subjonctif présent. 'Vengas' est le subjonctif de 'venir'.",
    level: "intermédiaire",
    category: "subjonctif présent"
  },
  {
    id: "choix2",
    type: "choix",
    question: "\"Espero que _____ (ser) posible.\"",
    options: ["a) será", "b) es", "c) sea"],
    correctAnswer: "c) sea",
    explanation: "Après 'espero que', on utilise le subjonctif présent : 'sea'.",
    level: "intermédiaire",
    category: "subjonctif présent"
  },
  {
    id: "choix3",
    type: "choix",
    question: "\"Dudo que _____ (tener) razón.\"",
    options: ["a) tiene", "b) tendrá", "c) tenga"],
    correctAnswer: "c) tenga",
    explanation: "Après 'dudo que', on utilise le subjonctif présent : 'tenga'.",
    level: "intermédiaire",
    category: "subjonctif présent"
  },
  {
    id: "choix4",
    type: "choix",
    question: "\"Es importante que _____ (estudiar) todos los días.\"",
    options: ["a) estudias", "b) estudiarás", "c) estudies"],
    correctAnswer: "c) estudies",
    explanation: "Après 'es importante que', on utilise le subjonctif présent : 'estudies'.",
    level: "intermédiaire",
    category: "subjonctif présent"
  },
  {
    id: "choix5",
    type: "choix",
    question: "\"No creo que _____ (saber) la respuesta.\"",
    options: ["a) sabe", "b) sabrá", "c) sepa"],
    correctAnswer: "c) sepa",
    explanation: "Après 'no creo que', on utilise le subjonctif présent : 'sepa'.",
    level: "intermédiaire",
    category: "subjonctif présent"
  },

  // CHOIX MULTIPLES - SUBJONCTIF IMPARFAIT
  {
    id: "choix6",
    type: "choix",
    question: "\"Si _____ (ser) rico, compraría una casa.\"",
    options: ["a) sería", "b) soy", "c) fuera"],
    correctAnswer: "c) fuera",
    explanation: "Dans une hypothèse irréelle, on utilise le subjonctif imparfait 'fuera' après 'si'.",
    level: "avancé",
    category: "subjonctif imparfait"
  },
  {
    id: "choix7",
    type: "choix",
    question: "\"Si _____ (tener) tiempo, te ayudaría.\"",
    options: ["a) tendría", "b) tengo", "c) tuviera"],
    correctAnswer: "c) tuviera",
    explanation: "Dans une hypothèse irréelle, on utilise le subjonctif imparfait 'tuviera' après 'si'.",
    level: "avancé",
    category: "subjonctif imparfait"
  },
  {
    id: "choix8",
    type: "choix",
    question: "\"Si _____ (estar) aquí, lo verías.\"",
    options: ["a) estaría", "b) estoy", "c) estuviera"],
    correctAnswer: "c) estuviera",
    explanation: "Dans une hypothèse irréelle, on utilise le subjonctif imparfait 'estuviera' après 'si'.",
    level: "avancé",
    category: "subjonctif imparfait"
  },

  // CHOIX MULTIPLES - IMPÉRATIF
  {
    id: "choix9",
    type: "choix",
    question: "\"_____ (comer) tu comida.\" (impératif affirmatif pour tú)",
    options: ["a) Coma", "b) Comes", "c) Come"],
    correctAnswer: "c) Come",
    explanation: "L'impératif affirmatif de 'comer' pour 'tú' est 'come'.",
    level: "intermédiaire",
    category: "impératif"
  },
  {
    id: "choix10",
    type: "choix",
    question: "\"_____ (vivir) feliz.\" (impératif affirmatif pour tú)",
    options: ["a) Vives", "b) Vivirás", "c) Vive"],
    correctAnswer: "c) Vive",
    explanation: "L'impératif affirmatif de 'vivir' pour 'tú' est 'vive'.",
    level: "intermédiaire",
    category: "impératif"
  },

  // CHOIX MULTIPLES - IMPÉRATIF NÉGATIF
  {
    id: "choix11",
    type: "choix",
    question: "\"No _____ (hablar) ahora.\" (impératif négatif pour tú)",
    options: ["a) hablarás", "b) habla", "c) hables"],
    correctAnswer: "c) hables",
    explanation: "L'impératif négatif pour 'tú' utilise le subjonctif présent : 'no hables'.",
    level: "intermédiaire",
    category: "impératif négatif"
  },
  {
    id: "choix12",
    type: "choix",
    question: "\"No _____ (comer) eso.\" (impératif négatif pour tú)",
    options: ["a) come", "b) comerás", "c) comas"],
    correctAnswer: "c) comas",
    explanation: "L'impératif négatif de 'comer' pour 'tú' est 'no comas'.",
    level: "intermédiaire",
    category: "impératif négatif"
  },

  // CHOIX MULTIPLES - GÉRONDIF
  {
    id: "choix13",
    type: "choix",
    question: "\"Estoy _____ (comer) una manzana.\" (forme progressive)",
    options: ["a) comer", "b) comido", "c) comiendo"],
    correctAnswer: "c) comiendo",
    explanation: "La forme progressive utilise le gérondif : 'estoy comiendo' (je suis en train de manger).",
    level: "débutant",
    category: "gérondif"
  },
  {
    id: "choix14",
    type: "choix",
    question: "\"Está _____ (llover) mucho.\" (forme progressive)",
    options: ["a) llover", "b) llovido", "c) lloviendo"],
    correctAnswer: "c) lloviendo",
    explanation: "La forme progressive de 'llover' est 'está lloviendo'.",
    level: "débutant",
    category: "gérondif"
  },
  {
    id: "choix15",
    type: "choix",
    question: "\"Están _____ (estudiar) para el examen.\" (forme progressive)",
    options: ["a) estudiar", "b) estudiado", "c) estudiando"],
    correctAnswer: "c) estudiando",
    explanation: "La forme progressive de 'estudiar' est 'están estudiando'.",
    level: "débutant",
    category: "gérondif"
  },

  // CHOIX MULTIPLES - CONDITIONNEL
  {
    id: "choix16",
    type: "choix",
    question: "\"_____ (gustar) el chocolate.\" (conditionnel pour hypothèse)",
    options: ["a) Gustaría", "b) Gusta", "c) Gustaba"],
    correctAnswer: "a) Gustaría",
    explanation: "Le conditionnel 'gustaría' exprime une hypothèse ou une politesse.",
    level: "intermédiaire",
    category: "conditionnel"
  },
  {
    id: "choix17",
    type: "choix",
    question: "\"_____ (tener) tiempo para ayudarte.\" (conditionnel pour politesse)",
    options: ["a) Tenía", "b) Tendría", "c) Tengo"],
    correctAnswer: "b) Tendría",
    explanation: "Le conditionnel 'tendría' exprime une politesse ou une hypothèse.",
    level: "intermédiaire",
    category: "conditionnel"
  },

  // CHOIX MULTIPLES - CONDITIONNEL PASSÉ
  {
    id: "choix18",
    type: "choix",
    question: "\"_____ (hacer) la tarea si hubiera tenido tiempo.\" (conditionnel passé)",
    options: ["a) Haría", "b) Hice", "c) Habría hecho"],
    correctAnswer: "c) Habría hecho",
    explanation: "Le conditionnel passé se forme avec 'haber' au conditionnel + participe passé : 'habría hecho'.",
    level: "avancé",
    category: "conditionnel passé"
  },
  {
    id: "choix19",
    type: "choix",
    question: "\"_____ (venir) si me hubieras llamado.\" (conditionnel passé)",
    options: ["a) Habría venido", "b) Vendría", "c) Vine"],
    correctAnswer: "a) Habría venido",
    explanation: "Le conditionnel passé de 'venir' est 'habría venido'.",
    level: "avancé",
    category: "conditionnel passé"
  },

  // CHOIX MULTIPLES - CONCORDANCE DES TEMPS
  {
    id: "choix20",
    type: "choix",
    question: "\"Si hubiera sabido, _____ (venir) antes.\" (concordance des temps)",
    options: ["a) vendría", "b) habría venido", "c) vengo"],
    correctAnswer: "b) habría venido",
    explanation: "Après 'si hubiera sabido', on utilise le conditionnel passé : 'habría venido'.",
    level: "avancé",
    category: "concordance des temps"
  },

  // MOTS À COMPLÉTER - CONDITIONNEL PASSÉ
  {
    id: "complet1",
    type: "complet",
    question: "Si hubieras estudiado, _____ (aprobar) el examen. (conditionnel passé)",
    correctAnswer: "habrías aprobado",
    explanation: "Le conditionnel passé se forme avec 'haber' au conditionnel + participe passé : 'habrías aprobado'.",
    level: "avancé",
    category: "conditionnel passé"
  },
  {
    id: "complet2",
    type: "complet",
    question: "Si hubiera tenido dinero, _____ (comprar) la casa. (conditionnel passé)",
    correctAnswer: "habría comprado",
    explanation: "Le conditionnel passé de 'comprar' est 'habría comprado'.",
    level: "avancé",
    category: "conditionnel passé"
  },
  {
    id: "complet3",
    type: "complet",
    question: "Si hubieras llamado, _____ (venir) a tu fiesta. (conditionnel passé)",
    correctAnswer: "habría venido",
    explanation: "Le conditionnel passé de 'venir' est 'habría venido'.",
    level: "avancé",
    category: "conditionnel passé"
  },

  // MOTS À COMPLÉTER - IMPÉRATIF NÉGATIF
  {
    id: "complet4",
    type: "complet",
    question: "_____ (no hacer) eso, por favor. (impératif négatif pour tú)",
    correctAnswer: "no hagas",
    explanation: "L'impératif négatif pour 'tú' utilise le subjonctif présent : 'no hagas'.",
    level: "intermédiaire",
    category: "impératif négatif"
  },
  {
    id: "complet5",
    type: "complet",
    question: "_____ (no hablar) tan alto. (impératif négatif pour tú)",
    correctAnswer: "no hables",
    explanation: "L'impératif négatif de 'hablar' pour 'tú' est 'no hables'.",
    level: "intermédiaire",
    category: "impératif négatif"
  },
  {
    id: "complet6",
    type: "complet",
    question: "_____ (no comer) antes de la cena. (impératif négatif pour tú)",
    correctAnswer: "no comas",
    explanation: "L'impératif négatif de 'comer' pour 'tú' est 'no comas'.",
    level: "intermédiaire",
    category: "impératif négatif"
  },

  // MOTS À COMPLÉTER - SUBJONCTIF PRÉSENT
  {
    id: "complet7",
    type: "complet",
    question: "Espero que _____ (venir) mañana. (subjonctif présent)",
    correctAnswer: "vengas/venga",
    explanation: "Après 'espero que', on utilise le subjonctif présent. 'Vengas' (tú) ou 'venga' (usted).",
    level: "intermédiaire",
    category: "subjonctif présent"
  },
  {
    id: "complet8",
    type: "complet",
    question: "Quiero que _____ (ser) feliz. (subjonctif présent)",
    correctAnswer: "seas/sea",
    explanation: "Après 'quiero que', on utilise le subjonctif présent : 'seas' (tú) ou 'sea' (usted).",
    level: "intermédiaire",
    category: "subjonctif présent"
  },
  {
    id: "complet9",
    type: "complet",
    question: "Es importante que _____ (estudiar) todos los días. (subjonctif présent)",
    correctAnswer: "estudies/estudie",
    explanation: "Après 'es importante que', on utilise le subjonctif présent : 'estudies' (tú) ou 'estudie' (usted).",
    level: "intermédiaire",
    category: "subjonctif présent"
  },
  {
    id: "complet10",
    type: "complet",
    question: "_____ (ser) posible que llegue tarde. (subjonctif présent)",
    correctAnswer: "sea",
    explanation: "Après 'es posible que', on utilise le subjonctif présent : 'sea'.",
    level: "intermédiaire",
    category: "subjonctif présent"
  },

  // MOTS À COMPLÉTER - GÉRONDIF
  {
    id: "complet11",
    type: "complet",
    question: "Estaba _____ (llover) cuando salí. (gérondif)",
    correctAnswer: "lloviendo",
    explanation: "Le gérondif de 'llover' est 'lloviendo' (terminaison -iendo pour les verbes en -er).",
    level: "débutant",
    category: "gérondif"
  },
  {
    id: "complet12",
    type: "complet",
    question: "Estoy _____ (estudiar) para el examen. (gérondif)",
    correctAnswer: "estudiando",
    explanation: "Le gérondif de 'estudiar' est 'estudiando' (terminaison -ando pour les verbes en -ar).",
    level: "débutant",
    category: "gérondif"
  },
  {
    id: "complet13",
    type: "complet",
    question: "Están _____ (vivir) en Madrid. (gérondif)",
    correctAnswer: "viviendo",
    explanation: "Le gérondif de 'vivir' est 'viviendo' (terminaison -iendo pour les verbes en -ir).",
    level: "débutant",
    category: "gérondif"
  },

  // MOTS À COMPLÉTER - CONDITIONNEL
  {
    id: "complet14",
    type: "complet",
    question: "Si tuviera tiempo, _____ (viajar) por el mundo. (conditionnel)",
    correctAnswer: "viajaría",
    explanation: "Le conditionnel de 'viajar' à la 1ère personne du singulier est 'viajaría'.",
    level: "intermédiaire",
    category: "conditionnel"
  },
  {
    id: "complet15",
    type: "complet",
    question: "Si fuera rico, _____ (comprar) una casa grande. (conditionnel)",
    correctAnswer: "compraría",
    explanation: "Le conditionnel de 'comprar' à la 1ère personne du singulier est 'compraría'.",
    level: "intermédiaire",
    category: "conditionnel"
  },

  // MOTS À COMPLÉTER - SUBJONCTIF IMPARFAIT
  {
    id: "complet16",
    type: "complet",
    question: "Si _____ (tener) dinero, compraría un coche. (subjonctif imparfait)",
    correctAnswer: "tuviera",
    explanation: "Dans une hypothèse irréelle, on utilise le subjonctif imparfait 'tuviera' après 'si'.",
    level: "avancé",
    category: "subjonctif imparfait"
  },
  {
    id: "complet17",
    type: "complet",
    question: "Si _____ (estar) aquí, te ayudaría. (subjonctif imparfait)",
    correctAnswer: "estuviera",
    explanation: "Dans une hypothèse irréelle, on utilise le subjonctif imparfait 'estuviera' après 'si'.",
    level: "avancé",
    category: "subjonctif imparfait"
  },

  // MOTS À COMPLÉTER - IMPÉRATIF AFFIRMATIF
  {
    id: "complet18",
    type: "complet",
    question: "_____ (comer) tu comida ahora. (impératif affirmatif pour tú)",
    correctAnswer: "come",
    explanation: "L'impératif affirmatif de 'comer' pour 'tú' est 'come'.",
    level: "intermédiaire",
    category: "impératif"
  },
  {
    id: "complet19",
    type: "complet",
    question: "_____ (vivir) feliz. (impératif affirmatif pour tú)",
    correctAnswer: "vive",
    explanation: "L'impératif affirmatif de 'vivir' pour 'tú' est 'vive'.",
    level: "intermédiaire",
    category: "impératif"
  },
  {
    id: "complet20",
    type: "complet",
    question: "_____ (hacer) tu tarea. (impératif affirmatif pour tú)",
    correctAnswer: "haz",
    explanation: "L'impératif affirmatif de 'hacer' pour 'tú' est 'haz' (irrégulier).",
    level: "intermédiaire",
    category: "impératif"
  }
];

export const exerciseCategories = [
  "subjonctif présent",
  "subjonctif imparfait",
  "impératif",
  "impératif négatif",
  "gérondif",
  "conditionnel",
  "conditionnel passé",
  "concordance des temps"
];

export const getExercisesByCategory = (category: string) => {
  return conjugationExercises.filter(exercise => exercise.category === category);
};

export const getExercisesByLevel = (level: string) => {
  return conjugationExercises.filter(exercise => exercise.level === level);
};

export const getExercisesByType = (type: string) => {
  return conjugationExercises.filter(exercise => exercise.type === type);
}; 