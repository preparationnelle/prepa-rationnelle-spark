import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"
};

// Phrases spécialisées allemandes avec détails complets
const SPECIALIZED_GERMAN_SENTENCES = [
  {
    id: 1,
    french: "Les tensions géopolitiques entre la Russie et l'Ukraine ont conduit à une révision des politiques énergétiques européennes.",
    reference: "Die geopolitischen Spannungen zwischen Russland und der Ukraine haben zu einer Neubewertung der europäischen Energiepolitik geführt.",
    grammar_points: ["führen zu + datif", "zwischen + datif", "Adjectif faible pluriel"],
    notes: [
      "führen zu + datif : construction fixe",
      "zwischen + datif : préposition de lieu avec datif",
      "geopolitischen Spannungen : adjectif faible pluriel après article défini"
    ],
    glossary: {
      "Spannung": "tension",
      "führen zu": "conduire à",
      "Neubewertung": "révision",
      "Energiepolitik": "politique énergétique",
      "geopolitisch": "géopolitique"
    },
    mini_exercise: {
      question: "Complétez avec la forme correcte : Die Sanktionen führten zu ________ (Folge) für die russische Wirtschaft.",
      answer: "einer Folge",
      explanation: "führen zu + datif → einer Folge (datif féminin)"
    },
    difficulty_level: "intermediate"
  },
  {
    id: 2,
    french: "Le gouvernement allemand prévoit d'investir massivement dans les énergies renouvelables d'ici 2030.",
    reference: "Die deutsche Regierung plant, bis 2030 massiv in erneuerbare Energien zu investieren.",
    grammar_points: ["planen + zu + infinitif", "adjectif fort pluriel", "expression temporelle bis"],
    notes: [
      "planen, … zu + infinitif : construction infinitive",
      "erneuerbare Energien : adjectif fort pluriel sans article",
      "bis 2030 : expression temporelle"
    ],
    glossary: {
      "planen": "prévoir",
      "investieren": "investir",
      "bis": "d'ici",
      "erneuerbar": "renouvelable",
      "massiv": "massivement"
    },
    mini_exercise: {
      question: "Réécrivez en allemand : « L'entreprise prévoit de moderniser ses usines d'ici 2027. »",
      answer: "Das Unternehmen plant, bis 2027 seine Fabriken zu modernisieren.",
      explanation: "planen + zu + infinitif avec expression temporelle bis"
    },
    difficulty_level: "intermediate"
  },
  {
    id: 3,
    french: "Les ONG écologistes dénoncent l'absence de mesures contraignantes pour réduire les émissions de CO₂.",
    reference: "Umweltschutzorganisationen kritisieren das Fehlen verbindlicher Maßnahmen zur Reduzierung der CO₂-Emissionen.",
    grammar_points: ["kritisieren + accusatif", "gérondif nominal zur Reduzierung", "adjectif génitif"],
    notes: [
      "kritisieren + accusatif : verbe transitif",
      "zur Reduzierung : gérondif nominal (pour + infinitif substantivé)",
      "verbindlicher Maßnahmen : génitif pluriel"
    ],
    glossary: {
      "Fehlen": "absence",
      "verbindlich": "contraignant",
      "Maßnahme": "mesure",
      "Reduzierung": "réduction",
      "kritisieren": "critiquer/dénoncer"
    },
    mini_exercise: {
      question: "Mettez 'das Fehlen' au bon cas : Die Experten verurteilen _____ fehlender Kontrollen.",
      answer: "das Fehlen",
      explanation: "Accusatif direct après verurteilen"
    },
    difficulty_level: "advanced"
  },
  {
    id: 4,
    french: "Berlin a annoncé le lancement d'un nouveau plan de relance après la pandémie.",
    reference: "Berlin hat die Einführung eines neuen Konjunkturpakets nach der Pandemie angekündigt.",
    grammar_points: ["génitif neutre", "parfait", "ordre des mots"],
    notes: [
      "eines neuen Konjunkturpakets : génitif neutre après nom abstrait",
      "hat ... angekündigt : parfait avec haben",
      "nach der Pandemie : complément temporal"
    ],
    glossary: {
      "Einführung": "lancement",
      "Konjunkturpaket": "plan de relance",
      "ankündigen": "annoncer",
      "Pandemie": "pandémie"
    },
    mini_exercise: {
      question: "Transformez au génitif : « die Veröffentlichung / der Bericht » → Die Regierung verzögerte ____",
      answer: "die Veröffentlichung des Berichts",
      explanation: "Génitif masculin : des Berichts"
    },
    difficulty_level: "intermediate"
  },
  {
    id: 5,
    french: "La transition énergétique représente de grands défis en matière d'infrastructures et de financement.",
    reference: "Die Energiewende stellt große Herausforderungen in Bezug auf Infrastruktur und Finanzierung dar.",
    grammar_points: ["verbe séparable darstellen", "in Bezug auf + accusatif", "accusatif pluriel"],
    notes: [
      "darstellen : verbe séparable (stellt ... dar)",
      "in Bezug auf : préposition complexe + accusatif",
      "große Herausforderungen : accusatif pluriel"
    ],
    glossary: {
      "darstellen": "représenter",
      "Herausforderung": "défi",
      "in Bezug auf": "concernant",
      "Energiewende": "transition énergétique"
    },
    mini_exercise: {
      question: "Conjuguez au prétérit : Die Krise _______ für das Unternehmen ein Risiko ______.",
      answer: "stellte ... dar",
      explanation: "Verbe séparable au prétérit : stellte ... dar"
    },
    difficulty_level: "intermediate"
  },
  {
    id: 6,
    french: "Le ministre de l'Intérieur a réaffirmé la nécessité d'une politique migratoire plus stricte.",
    reference: "Der Innenminister hat die Notwendigkeit einer restriktiveren Migrationspolitik bekräftigt.",
    grammar_points: ["comparatif décliné", "génitif féminin", "parfait"],
    notes: [
      "restriktiveren : comparatif décliné au génitif féminin",
      "einer ... Migrationspolitik : génitif féminin",
      "hat ... bekräftigt : parfait"
    ],
    glossary: {
      "Notwendigkeit": "nécessité",
      "restriktiv": "strict",
      "bekräftigen": "réaffirmer",
      "Innenminister": "ministre de l'Intérieur"
    },
    mini_exercise: {
      question: "Mettez 'transparent' au comparatif génitif féminin : die Bedeutung ______ Kommunikation",
      answer: "einer transparenteren Kommunikation",
      explanation: "Comparatif + déclinaison génitif féminin"
    },
    difficulty_level: "advanced"
  },
  {
    id: 7,
    french: "Des experts avertissent que la hausse des températures affecte déjà la production agricole.",
    reference: "Experten warnen, dass der Temperaturanstieg die landwirtschaftliche Produktion bereits beeinträchtigt.",
    grammar_points: ["subordonnée dass", "ordre verbe final", "adverbe bereits"],
    notes: [
      "warnen, dass : verbe + subordonnée dass",
      "bereits beeinträchtigt : verbe en position finale",
      "bereits : adverbe de temps (déjà)"
    ],
    glossary: {
      "warnen": "avertir",
      "Temperaturanstieg": "hausse des températures",
      "beeinträchtigen": "affecter",
      "bereits": "déjà",
      "landwirtschaftlich": "agricole"
    },
    mini_exercise: {
      question: "Transformez en style dass : Der Bericht zeigt : die Trockenheit gefährdet bereits die Ernte.",
      answer: "Der Bericht zeigt, dass die Trockenheit bereits die Ernte gefährdet.",
      explanation: "Subordonnée dass avec verbe en position finale"
    },
    difficulty_level: "intermediate"
  },
  {
    id: 8,
    french: "La coalition discute d'une réforme des retraites pour faire face au vieillissement démographique.",
    reference: "Die Regierungskoalition diskutiert eine Reform des Rentensystems, um dem demografischen Wandel zu begegnen.",
    grammar_points: ["diskutieren + accusatif", "begegnen + datif", "um ... zu"],
    notes: [
      "diskutiert eine Reform : accusatif direct",
      "dem ... Wandel begegnen : begegnen + datif",
      "um ... zu begegnen : proposition finale"
    ],
    glossary: {
      "diskutieren": "discuter",
      "Reform": "réforme",
      "begegnen": "faire face",
      "Wandel": "mutation/changement",
      "Rentensystem": "système de retraites"
    },
    mini_exercise: {
      question: "Complétez avec le datif après begegnen : Die Stadt muss ___ steigenden Wohnkosten begegnen.",
      answer: "den steigenden Wohnkosten",
      explanation: "begegnen + datif pluriel"
    },
    difficulty_level: "advanced"
  },
  {
    id: 9,
    french: "Plusieurs Länder fédérés expriment leur scepticisme vis-à-vis des objectifs climatiques fixés par l'État fédéral.",
    reference: "Mehrere Bundesländer äußern Skepsis gegenüber den vom Bund festgelegten Klimazielen.",
    grammar_points: ["gegenüber + datif", "participe II adjectivé", "vom = von dem"],
    notes: [
      "gegenüber + datif : préposition + datif",
      "festgelegten : participe II utilisé comme adjectif",
      "vom Bund : contraction von + dem"
    ],
    glossary: {
      "äußern": "exprimer",
      "Skepsis": "scepticisme",
      "festlegen": "fixer",
      "Klimaziel": "objectif climatique",
      "Bundesland": "Land fédéré"
    },
    mini_exercise: {
      question: "Mettez 'Plan' au datif après gegenüber : Die Opposition zeigte sich kritisch _______ neu___ Plan.",
      answer: "gegenüber dem neuen Plan",
      explanation: "gegenüber + datif masculin"
    },
    difficulty_level: "advanced"
  },
  {
    id: 10,
    french: "La Cour constitutionnelle fédérale a suspendu l'application d'une loi controversée sur la protection des données.",
    reference: "Das Bundesverfassungsgericht hat die Anwendung eines umstrittenen Datenschutzgesetzes ausgesetzt.",
    grammar_points: ["verbe séparable aussetzen", "génitif neutre", "participe II adjectivé"],
    notes: [
      "hat ... ausgesetzt : verbe séparable au parfait",
      "eines ... Gesetzes : génitif neutre",
      "umstrittenen : participe II adjectivé décliné"
    ],
    glossary: {
      "aussetzen": "suspendre",
      "Datenschutz": "protection des données",
      "umstritten": "controversé",
      "Anwendung": "application",
      "Bundesverfassungsgericht": "Cour constitutionnelle fédérale"
    },
    mini_exercise: {
      question: "Conjuguez aussetzen au parfait avec wir : Wir _______ temporär alle Zahlungen ______.",
      answer: "haben ... ausgesetzt",
      explanation: "Verbe séparable au parfait : haben + participe + particule"
    },
    difficulty_level: "advanced"
  },
  // Nouvelles phrases ajoutées
  {
    id: 11,
    french: "L'Union européenne envisage d'imposer des sanctions économiques supplémentaires contre la Russie.",
    reference: "Die Europäische Union erwägt, zusätzliche Wirtschaftssanktionen gegen Russland zu verhängen.",
    grammar_points: ["erwägen + zu + infinitif", "gegen + accusatif", "adjectif fort pluriel"],
    notes: [
      "erwägen, ... zu + infinitif : construction infinitive",
      "gegen Russland : préposition + accusatif",
      "zusätzliche Wirtschaftssanktionen : adjectif fort pluriel"
    ],
    glossary: {
      "erwägen": "envisager",
      "verhängen": "imposer",
      "Wirtschaftssanktion": "sanction économique",
      "gegen": "contre",
      "zusätzlich": "supplémentaire"
    },
    mini_exercise: {
      question: "Complétez : Die Regierung erwägt, _____ (neue Maßnahmen) zu ergreifen.",
      answer: "neue Maßnahmen",
      explanation: "erwägen + zu + infinitif, adjectif fort pluriel"
    },
    difficulty_level: "intermediate"
  },
  {
    id: 12,
    french: "Les analystes financiers prédisent une récession économique pour le premier trimestre de 2024.",
    reference: "Finanzanalysten prognostizieren eine Wirtschaftsrezession für das erste Quartal 2024.",
    grammar_points: ["prognostizieren + accusatif", "für + accusatif", "superlatif neutre"],
    notes: [
      "prognostizieren eine Rezession : accusatif direct",
      "für das erste Quartal : pour + accusatif",
      "das erste Quartal : superlatif neutre"
    ],
    glossary: {
      "prognostizieren": "prédire",
      "Wirtschaftsrezession": "récession économique",
      "Quartal": "trimestre",
      "für": "pour",
      "Finanzanalyst": "analyste financier"
    },
    mini_exercise: {
      question: "Mettez au superlatif : Das ist _____ (gut) Ergebnis des Jahres.",
      answer: "das beste",
      explanation: "Superlatif neutre : das beste"
    },
    difficulty_level: "intermediate"
  },
  {
    id: 13,
    french: "Le chancelier allemand a souligné l'importance de renforcer la coopération transatlantique.",
    reference: "Der deutsche Bundeskanzler hat die Bedeutung der Stärkung der transatlantischen Zusammenarbeit hervorgehoben.",
    grammar_points: ["hervorheben + accusatif", "génitif féminin", "adjectif génitif"],
    notes: [
      "hat ... hervorgehoben : verbe séparable au parfait",
      "der Stärkung : génitif féminin",
      "transatlantischen Zusammenarbeit : adjectif génitif"
    ],
    glossary: {
      "hervorheben": "souligner",
      "Bedeutung": "importance",
      "Stärkung": "renforcement",
      "Zusammenarbeit": "coopération",
      "transatlantisch": "transatlantique"
    },
    mini_exercise: {
      question: "Transformez au génitif : Die Verbesserung _____ (die Qualität) ist wichtig.",
      answer: "der Qualität",
      explanation: "Génitif féminin : der Qualität"
    },
    difficulty_level: "advanced"
  },
  {
    id: 14,
    french: "Les entreprises technologiques investissent massivement dans l'intelligence artificielle.",
    reference: "Technologieunternehmen investieren massiv in künstliche Intelligenz.",
    grammar_points: ["investieren in + accusatif", "adjectif fort", "nom composé"],
    notes: [
      "investieren in künstliche Intelligenz : in + accusatif",
      "künstliche Intelligenz : adjectif fort sans article",
      "Technologieunternehmen : nom composé pluriel"
    ],
    glossary: {
      "investieren": "investir",
      "künstlich": "artificiel",
      "Intelligenz": "intelligence",
      "massiv": "massivement",
      "Technologieunternehmen": "entreprise technologique"
    },
    mini_exercise: {
      question: "Complétez : Die Firma investiert _____ (viel Geld) in Forschung.",
      answer: "viel Geld",
      explanation: "investieren in + accusatif"
    },
    difficulty_level: "intermediate"
  },
  {
    id: 15,
    french: "La crise climatique nécessite une action immédiate de la part de tous les pays industrialisés.",
    reference: "Die Klimakrise erfordert sofortiges Handeln von allen industrialisierten Ländern.",
    grammar_points: ["erfordern + accusatif", "von + datif", "participe II adjectivé"],
    notes: [
      "erfordert sofortiges Handeln : accusatif direct",
      "von allen Ländern : von + datif",
      "industrialisierten Ländern : participe II adjectivé"
    ],
    glossary: {
      "erfordern": "nécessiter",
      "sofortig": "immédiat",
      "Handeln": "action",
      "industrialisiert": "industrialisé",
      "Klimakrise": "crise climatique"
    },
    mini_exercise: {
      question: "Mettez au datif : Die Hilfe kommt _____ (alle Betroffenen).",
      answer: "von allen Betroffenen",
      explanation: "von + datif pluriel"
    },
    difficulty_level: "advanced"
  }
];

// Pool de phrases existantes (gardé pour compatibilité)
const PRESS_POOL: Record<string, { french: string; reference: string; grammar_points: string[]; notes: string[] }[]> = {
  en: [
    {
      french: "Le gouvernement devra prendre une décision avant la fin du mois.",
      reference: "The government will have to make a decision by the end of the month.",
      grammar_points: ["will have to + infinitive", "future obligation", "by + time expression"],
      notes: ["will have to = obligation future", "make a decision = collocation", "by the end = date butoir"]
    },
    {
      french: "Le taux de chômage aurait pu diminuer si des réformes avaient été mises en place plus tôt.",
      reference: "The unemployment rate could have decreased if reforms had been implemented earlier.",
      grammar_points: ["could have + past participle", "conditional past", "if + past perfect", "passive voice"],
      notes: ["could have = possibilité non réalisée", "if + past perfect → conditionnel passé", "reforms had been implemented = passive + past perfect"]
    },
    {
      french: "Les résultats du vote auraient dû être annoncés hier soir.",
      reference: "The election results should have been announced last night.",
      grammar_points: ["should have been + past participle", "passive voice", "obligation not fulfilled"],
      notes: ["should have been = reproche/obligation non réalisée", "election results = formule presse", "last night = hier soir"]
    },
    {
      french: "Les experts pensent que l'inflation a atteint son niveau le plus élevé depuis 20 ans.",
      reference: "Experts believe that inflation has reached its highest level in 20 years.",
      grammar_points: ["present perfect", "superlative", "believe that", "duration with present perfect"],
      notes: ["has reached = résultat encore valable", "highest level = superlatif", "in 20 years = durée avec present perfect"]
    },
    {
      french: "Avec la sécheresse, de nombreuses régions ont peut-être dû rationner l'eau.",
      reference: "Due to the drought, many regions may have had to ration water.",
      grammar_points: ["may have had to", "due to", "modal + past obligation"],
      notes: ["may have had to = obligation possible au passé", "due to = registre formel", "ration water = verbe transitif"]
    },
    {
      french: "Si les réseaux sociaux étaient mieux régulés, il y aurait moins de désinformation.",
      reference: "If social media were better regulated, there would be less misinformation.",
      grammar_points: ["if + past simple", "would + base verb", "passive voice", "less vs fewer"],
      notes: ["hypothèse irréelle au présent", "were better regulated = voix passive", "less misinformation = indénombrable"]
    },
    {
      french: "Selon plusieurs sources, le PDG pourrait démissionner dans les prochains jours.",
      reference: "According to several sources, the CEO might resign in the coming days.",
      grammar_points: ["according to", "might + base verb", "future possibility"],
      notes: ["According to = selon", "might = possibilité future", "in the coming days = style presse"]
    },
    {
      french: "Le projet de loi sera débattu au Parlement lundi prochain.",
      reference: "The bill will be debated in Parliament next Monday.",
      grammar_points: ["future passive", "bill vs law", "prepositions with institutions"],
      notes: ["will be debated = voix passive future", "bill = projet de loi", "in Parliament pas at"]
    },
    {
      french: "Le sommet sur le climat aurait dû se tenir plus tôt dans l'année.",
      reference: "The climate summit should have taken place earlier this year.",
      grammar_points: ["should have + past participle", "take place", "time expressions"],
      notes: ["should have = événement attendu non réalisé", "take place = se tenir", "earlier this year = plus tôt dans l'année"]
    },
    {
      french: "Le ministre a probablement été averti avant la fuite des documents.",
      reference: "The minister must have been warned before the documents leaked.",
      grammar_points: ["must have been + past participle", "passive voice", "probability in past"],
      notes: ["must have been = forte probabilité passée", "voix passive", "before + past simple"]
    },
    {
      french: "Plusieurs pays pourraient imposer des restrictions supplémentaires.",
      reference: "Several countries could impose further restrictions.",
      grammar_points: ["could + base verb", "future possibility", "further vs additional"],
      notes: ["could = possibilité future", "further restrictions = lexique presse", "impose = verbe transitif"]
    },
    {
      french: "Il est peu probable que la réforme soit adoptée dans sa forme actuelle.",
      reference: "It is unlikely that the reform will be passed in its current form.",
      grammar_points: ["it is unlikely that", "future passive", "probability expressions"],
      notes: ["It is unlikely = tournure impersonnelle", "will be passed = voix passive", "in its current form = idiome"]
    },
    {
      french: "Les artistes locaux ont été mis à l'honneur lors de la cérémonie.",
      reference: "Local artists were honoured during the ceremony.",
      grammar_points: ["passive voice", "past simple", "during vs in"],
      notes: ["were honoured = voix passive", "during the ceremony = durant", "to honour = mettre à l'honneur"]
    },
    {
      french: "Le système de cybersécurité aurait été piraté par un groupe étranger.",
      reference: "The cybersecurity system is believed to have been hacked by a foreign group.",
      grammar_points: ["is believed to have been", "passive reporting", "agent with by"],
      notes: ["tournure de discours rapporté passif", "cybersecurity system = nom composé", "by a foreign group = agent"]
    },
    {
      french: "Si l'accord avait été signé, les tensions auraient pu diminuer.",
      reference: "If the agreement had been signed, tensions might have decreased.",
      grammar_points: ["if + past perfect", "might have + past participle", "conditional past"],
      notes: ["irréel passé", "tensions = pluriel", "might have = possibilité non réalisée"]
    },
    {
      french: "La police a dû intervenir pour disperser les manifestants.",
      reference: "The police had to intervene to disperse the protesters.",
      grammar_points: ["had to + base verb", "past obligation", "police = plural"],
      notes: ["had to = obligation passée", "disperse = verbe transitif", "the police = pluriel en anglais"]
    }
  ],
  de: SPECIALIZED_GERMAN_SENTENCES.map(sentence => ({
    french: sentence.french,
    reference: sentence.reference,
    grammar_points: sentence.grammar_points,
    notes: sentence.notes
  })),
  es: [
    {
      french: "Le gouvernement devra prendre une décision avant la fin du mois.",
      reference: "El gobierno tendrá que tomar una decisión antes de fin de mes.",
      grammar_points: ["tendrá que + infinitive", "future obligation", "antes de"],
      notes: ["tendrá que = obligation future", "tomar una decisión = prendre una décision", "antes de fin de mes = avant la fin du mois"]
    },
    {
      french: "Le taux de chômage aurait pu diminuer si des réformes avaient été mises en place plus tôt.",
      reference: "La tasa de desempleo podría haber disminuido si se hubieran implementado reformas antes.",
      grammar_points: ["podría haber + participio", "condicional compuesto", "si + pluscuamperfecto", "voz pasiva"],
      notes: ["podría haber = possibilité non réalisée", "si + pluscuamperfecto", "se hubieran implementado = passif plus-que-parfait"]
    }
  ]
};

// Phrases spécialisées anglaises avec détails complets
const SPECIALIZED_ENGLISH_SENTENCES = [
  {
    id: 1,
    french: "Les tensions géopolitiques entre la Chine et les États-Unis ont conduit à une révision des politiques commerciales internationales.",
    reference: "The geopolitical tensions between China and the United States have led to a revision of international trade policies.",
    grammar_points: ["present perfect", "between + plural", "have led to", "revision of"],
    notes: [
      "have led to : present perfect pour action passée avec conséquence présente",
      "between China and the United States : between + deux entités",
      "revision of : nom + préposition",
      "international trade policies : adjectifs multiples"
    ],
    glossary: {
      "tensions": "tensions",
      "led to": "conduire à",
      "revision": "révision",
      "trade policies": "politiques commerciales",
      "geopolitical": "géopolitique"
    },
    mini_exercise: {
      question: "Complétez avec la forme correcte : The sanctions _____ (lead) to economic consequences.",
      answer: "have led",
      explanation: "present perfect : have + past participle"
    },
    difficulty_level: "intermediate"
  },
  {
    id: 2,
    french: "Le gouvernement britannique prévoit d'investir massivement dans les énergies renouvelables d'ici 2030.",
    reference: "The British government plans to invest heavily in renewable energies by 2030.",
    grammar_points: ["plans to + infinitive", "by + date", "heavily = adverbe"],
    notes: [
      "plans to + infinitive : construction infinitive",
      "by 2030 : expression temporelle",
      "heavily : adverbe de manière",
      "renewable energies : nom composé"
    ],
    glossary: {
      "plans": "prévoir",
      "invest": "investir",
      "by": "d'ici",
      "renewable": "renouvelable",
      "heavily": "massivement"
    },
    mini_exercise: {
      question: "Réécrivez en anglais : « L'entreprise prévoit de moderniser ses usines d'ici 2027. »",
      answer: "The company plans to modernize its factories by 2027.",
      explanation: "plans to + infinitive avec expression temporelle by"
    },
    difficulty_level: "intermediate"
  },
  {
    id: 3,
    french: "Les ONG environnementales dénoncent l'absence de mesures contraignantes pour réduire les émissions de CO₂.",
    reference: "Environmental NGOs denounce the lack of binding measures to reduce CO₂ emissions.",
    grammar_points: ["denounce + object", "lack of + noun", "to reduce = infinitive"],
    notes: [
      "denounce + object : verbe transitif",
      "lack of binding measures : nom + préposition",
      "to reduce : infinitive de but",
      "CO₂ emissions : nom composé"
    ],
    glossary: {
      "lack": "absence",
      "binding": "contraignant",
      "measures": "mesures",
      "reduce": "réduire",
      "denounce": "dénoncer"
    },
    mini_exercise: {
      question: "Mettez au bon temps : The government _____ (announce) new measures yesterday.",
      answer: "announced",
      explanation: "Past simple pour action passée précise"
    },
    difficulty_level: "advanced"
  },
  {
    id: 4,
    french: "Londres a annoncé le lancement d'un nouveau plan de relance après la pandémie.",
    reference: "London has announced the launch of a new recovery plan after the pandemic.",
    grammar_points: ["present perfect", "launch of", "after + noun"],
    notes: [
      "has announced : present perfect pour action récente",
      "launch of : nom + préposition",
      "after the pandemic : complément temporel",
      "recovery plan : nom composé"
    ],
    glossary: {
      "launch": "lancement",
      "recovery plan": "plan de relance",
      "announce": "annoncer",
      "pandemic": "pandémie"
    },
    mini_exercise: {
      question: "Transformez au passif : « The government will implement the reforms. »",
      answer: "The reforms will be implemented by the government.",
      explanation: "will be + past participle pour futur passif"
    },
    difficulty_level: "intermediate"
  },
  {
    id: 5,
    french: "Les experts estiment que la crise économique pourrait s'aggraver dans les prochains mois.",
    reference: "Experts believe that the economic crisis could worsen in the coming months.",
    grammar_points: ["believe that + clause", "could + base verb", "in the coming months"],
    notes: [
      "believe that : verbe de pensée + that",
      "could worsen : modal + base verb",
      "in the coming months : expression temporelle",
      "economic crisis : nom composé"
    ],
    glossary: {
      "believe": "estimer/croire",
      "worsen": "s'aggraver",
      "coming": "prochains",
      "crisis": "crise"
    },
    mini_exercise: {
      question: "Complétez avec le modal approprié : The situation _____ (get) worse.",
      answer: "could get",
      explanation: "could + base verb pour possibilité"
    },
    difficulty_level: "advanced"
  }
];

// Phrases spécialisées espagnoles avec détails complets
const SPECIALIZED_SPANISH_SENTENCES = [
  {
    id: 1,
    french: "Les tensions géopolitiques entre l'Espagne et le Maroc ont conduit à une révision des politiques migratoires européennes.",
    reference: "Las tensiones geopolíticas entre España y Marruecos han llevado a una revisión de las políticas migratorias europeas.",
    grammar_points: ["present perfect", "entre + y", "han llevado a", "revisión de"],
    notes: [
      "han llevado a : present perfect pour action passée avec conséquence présente",
      "entre España y Marruecos : entre + y + entités",
      "revisión de : nom + préposition",
      "políticas migratorias : adjectifs multiples"
    ],
    glossary: {
      "tensiones": "tensions",
      "llevado a": "conduire à",
      "revisión": "révision",
      "políticas migratorias": "politiques migratoires",
      "geopolíticas": "géopolitiques"
    },
    mini_exercise: {
      question: "Complétez avec la forme correcte : Las sanciones _____ (llevar) a consecuencias económicas.",
      answer: "han llevado",
      explanation: "present perfect : haber + participio"
    },
    difficulty_level: "intermediate"
  },
  {
    id: 2,
    french: "Le gouvernement espagnol prévoit d'investir massivement dans les énergies renouvelables d'ici 2030.",
    reference: "El gobierno español prevé invertir masivamente en energías renovables para 2030.",
    grammar_points: ["prever + infinitive", "para + date", "masivamente = adverbe"],
    notes: [
      "prever + infinitive : construction infinitive",
      "para 2030 : expression temporelle",
      "masivamente : adverbe de manière",
      "energías renovables : nom composé"
    ],
    glossary: {
      "prever": "prévoir",
      "invertir": "investir",
      "para": "d'ici",
      "renovables": "renouvelables",
      "masivamente": "massivement"
    },
    mini_exercise: {
      question: "Réécrivez en espagnol : « L'entreprise prévoit de moderniser ses usines d'ici 2027. »",
      answer: "La empresa prevé modernizar sus fábricas para 2027.",
      explanation: "prever + infinitive avec expression temporelle para"
    },
    difficulty_level: "intermediate"
  },
  {
    id: 3,
    french: "Les ONG environnementales dénoncent l'absence de mesures contraignantes pour réduire les émissions de CO₂.",
    reference: "Las ONG ambientales denuncian la falta de medidas vinculantes para reducir las emisiones de CO₂.",
    grammar_points: ["denunciar + object", "falta de + noun", "para reducir = infinitive"],
    notes: [
      "denunciar + object : verbe transitif",
      "falta de medidas vinculantes : nom + préposition",
      "para reducir : infinitive de but",
      "emisiones de CO₂ : nom composé"
    ],
    glossary: {
      "falta": "absence",
      "vinculantes": "contraignantes",
      "medidas": "mesures",
      "reducir": "réduire",
      "denunciar": "dénoncer"
    },
    mini_exercise: {
      question: "Mettez au subjonctif : Es importante que el gobierno _____ (tomar) medidas.",
      answer: "tome",
      explanation: "Subjonctif présent après es importante que"
    },
    difficulty_level: "advanced"
  },
  {
    id: 4,
    french: "Madrid a annoncé le lancement d'un nouveau plan de relance après la pandémie.",
    reference: "Madrid ha anunciado el lanzamiento de un nuevo plan de recuperación tras la pandemia.",
    grammar_points: ["present perfect", "lanzamiento de", "tras + noun"],
    notes: [
      "ha anunciado : present perfect pour action récente",
      "lanzamiento de : nom + préposition",
      "tras la pandemia : complément temporel",
      "plan de recuperación : nom composé"
    ],
    glossary: {
      "lanzamiento": "lancement",
      "plan de recuperación": "plan de relance",
      "anunciar": "annoncer",
      "pandemia": "pandémie"
    },
    mini_exercise: {
      question: "Transformez au passif : « El gobierno implementará las reformas. »",
      answer: "Las reformas serán implementadas por el gobierno.",
      explanation: "serán + participio pour futur passif"
    },
    difficulty_level: "intermediate"
  },
  {
    id: 5,
    french: "Les experts estiment que la crise économique pourrait s'aggraver dans les prochains mois.",
    reference: "Los expertos estiman que la crisis económica podría agravarse en los próximos meses.",
    grammar_points: ["estimar que + clause", "podría + infinitive", "en los próximos meses"],
    notes: [
      "estimar que : verbe de pensée + que",
      "podría agravarse : conditionnel + verbe pronominal",
      "en los próximos meses : expression temporelle",
      "crisis económica : nom composé"
    ],
    glossary: {
      "estimar": "estimer",
      "agravarse": "s'aggraver",
      "próximos": "prochains",
      "crisis": "crise"
    },
    mini_exercise: {
      question: "Complétez avec le conditionnel : La situación _____ (empeorar) más.",
      answer: "podría empeorar",
      explanation: "podría + infinitive pour possibilité"
    },
    difficulty_level: "advanced"
  }
];

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  try {
    const { language, history } = await req.json();
    
    // Utiliser les phrases spécialisées pour toutes les langues
    let specializedSentences;
    switch (language) {
      case 'de':
        specializedSentences = SPECIALIZED_GERMAN_SENTENCES;
        break;
      case 'en':
        specializedSentences = SPECIALIZED_ENGLISH_SENTENCES;
        break;
      case 'es':
        specializedSentences = SPECIALIZED_SPANISH_SENTENCES;
        break;
      default:
        specializedSentences = SPECIALIZED_ENGLISH_SENTENCES; // fallback
    }
    
    let available = specializedSentences;
    
    // Filtrer selon l'historique pour éviter les répétitions
    if (Array.isArray(history) && history.length > 0) {
      available = specializedSentences.filter(p => !history.includes(p.reference));
    }
    
    // Si toutes vues, recommencer
    if (available.length === 0) available = specializedSentences;
    
    // Sélection aléatoire
    const sentence = available[Math.floor(Math.random() * available.length)];
    
    // Retourner la structure enrichie
    return new Response(JSON.stringify({
      french: sentence.french,
      reference: sentence.reference,
      grammar_points: sentence.grammar_points,
      notes: sentence.notes,
      glossary: sentence.glossary,
      mini_exercise: sentence.mini_exercise,
      difficulty_level: sentence.difficulty_level,
      specialized: true
    }), { 
      headers: { ...corsHeaders, "Content-Type": "application/json" } 
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { 
      status: 500, 
      headers: { ...corsHeaders, "Content-Type": "application/json" } 
    });
  }
});
