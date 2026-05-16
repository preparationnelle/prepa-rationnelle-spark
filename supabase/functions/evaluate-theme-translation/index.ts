
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

import { corsHeaders, handleCorsPreflight } from "../_shared/cors.ts";
import { requireAuth } from "../_shared/auth.ts";
const openAIApiKey = Deno.env.get("OPENAI_API_KEY");

// Grille de notation commune à toutes les langues
const SCORING_GRID = `BARÈME OFFICIEL (note de base : 10/10, plancher : 0/10) :
  * -2 pts : FAUX SENS / CONTRESENS / BARBARISME — le sens est trahi (ex. "voted the bill" pour "passed the bill", "sensible" pour "sensitive", omission majeure qui change le message).
  * -2 pts : CONJUGAISON MAJEURE — temps incorrect qui change le sens, auxiliaire faux, accord sujet-verbe grave (ex. "will" au lieu de "would" en concordance, "has been sanctioning" au lieu de "has sanctioned").
  * -1 pt  : GRAMMAIRE — préposition fausse, ordre des mots, voix passive mal formée, article obligatoire omis, inversion ratée, omission de "to" / "that" structurel.
  * -0,5 pt : PETITE ERREUR (par occurrence, cumulable) — orthographe (chaque mot), mot inexact mais compréhensible, registre légèrement à côté, formulation lourde, ponctuation, accent oublié.

DÉCOMPOSITION EN SEGMENTS DE SENS (ÉTAPE OBLIGATOIRE, À FAIRE EN PREMIER) :
Découpe la phrase FRANÇAISE en 3 à 6 SEGMENTS DE SENS (groupes porteurs d'information : sujet, groupe verbal, compléments essentiels, subordonnées). Pour CHAQUE segment, détermine s'il est rendu dans la réponse de l'élève et renseigne le tableau "coverage" :
  * "present"  : le sens du segment est rendu correctement (même reformulé / synonymes / autre structure valide).
  * "altered"  : le segment est tenté mais fautif (faux sens partiel, grammaire, mauvais temps).
  * "missing"  : le segment est ABSENT, ou la réponse parle d'autre chose (hors-sujet) — le sens n'y est pas.

LE SCORE DÉCOULE DE LA COUVERTURE (RÈGLE PRIORITAIRE, NON NÉGOCIABLE) :
  * Couverture = (nb "present" + 0,5 × nb "altered") / nb total de segments.
  * Le score NE PEUT PAS dépasser couverture × 10. Exemple : si 2 segments sur 4 sont "missing", le score plafonne à 5/10 AVANT même les autres pénalités.
  * Réponse hors-sujet (tous les segments "missing", l'élève parle d'autre chose) → 0/10. Une phrase grammaticalement correcte mais qui ne traduit pas le français vaut 0.
  * Chaque segment "missing" ou "altered" génère AUSSI une entrée "breakdown" (false_meaning -2 si groupe de sens, grammar -1 si élément isolé).
INTERDICTION ABSOLUE : ne JAMAIS attribuer 10/10 si un seul segment n'est pas "present". Une phrase juste mais incomplète n'est PAS sans faute. Reformuler est libre ; omettre ou détourner le sens est lourdement sanctionné.

PRINCIPE DE LIBERTÉ (CRUCIAL) :
La référence est UNE bonne solution parmi d'autres. Si l'élève exprime le même sens avec d'autres mots, d'autres structures, ou un autre temps tout aussi valide, NE PÉNALISE PAS. Cela vaut pour la FORMULATION, jamais pour la COUVERTURE : reformuler est libre, omettre est sanctionné.

LOCALISATION OBLIGATOIRE :
Pour chaque erreur, fournis un "span" : un fragment **textuel exact** copié de la réponse de l'élève (sans modification, accents et casse identiques). Si l'erreur est une OMISSION (rien à pointer dans la réponse), mets "span": "" et précise dans "explanation" QUEL segment du français n'a pas été traduit.`;

// Prompts spécialisés pour chaque langue
const PROMPTS = {
  en: `Tu es un correcteur ECRICOME spécialisé en thèmes grammaticaux anglais. Tu analyses des phrases de presse géopolitique et économique complexes.

${SCORING_GRID}

ANALYSE PRÉCISE DE L'ÉCART :
Tu DOIS analyser mot par mot l'écart entre la réponse de l'étudiant et la phrase parfaite. Pour chaque erreur identifiée :

1. COMPARE la réponse étudiante avec la phrase de référence
2. IDENTIFIE précisément chaque erreur (mot, structure, temps)
3. EXPLIQUE pourquoi c'est incorrect
4. DONNE la correction exacte
5. INDIQUE la règle grammaticale

POINTS SPÉCIFIQUES À ANALYSER :
- Modaux (will have to, could have, should have been)
- Voix passive (is believed to have been, will be debated)
- Conditionnels (if + past simple, would + base verb)
- Present perfect vs past simple
- Registre journalistique et formel
- Collocations spécifiques à la presse

CONTEXTE GÉOPOLITIQUE :
- Vocabulaire spécialisé : sanctions, tensions, réformes, sommets
- Structures complexes : subordonnées, relatives
- Expressions idiomatiques journalistiques

EXPLICATION DÉTAILLÉE DES ERREURS :
Pour chaque erreur identifiée, tu DOIS expliquer :
1. QU'EST-CE QUE L'ERREUR : Description précise de l'erreur
2. POURQUOI C'EST INCORRECT : Explication grammaticale
3. COMMENT CORRIGER : Correction spécifique avec exemple
4. RÈGLE À RETENIR : Règle grammaticale générale

EXEMPLES D'ANALYSE PRÉCISE :
- Si l'étudiant écrit "The tensions is" au lieu de "The tensions have led to" :
  {
    "error": "Present perfect manquant",
    "explanation": "L'étudiant utilise le présent simple 'is' au lieu du present perfect 'have led to' pour exprimer une action passée avec conséquence présente.",
    "correction": "Remplacer 'is' par 'have led to' : 'The tensions have led to'",
    "rule": "Le present perfect (have/has + past participle) s'utilise pour les actions passées avec conséquence présente"
  }

- Si l'étudiant écrit "between Russia and Ukraine" au lieu de "between Russia and the Ukraine" :
  {
    "error": "Article défini manquant",
    "explanation": "En anglais, 'Ukraine' prend l'article défini 'the' dans le contexte géopolitique.",
    "correction": "Ajouter 'the' : 'between Russia and the Ukraine'",
    "rule": "Certains noms de pays prennent l'article défini 'the' en anglais"
  }

ACCEPTER LES SYNONYMES ET VARIATIONS :
- Les synonymes corrects ne doivent pas être pénalisés
- Les structures grammaticales équivalentes sont acceptables
- Seules les vraies erreurs doivent être sanctionnées
- Privilégier le registre formel et journalistique

Identifie PRÉCISÉMENT les erreurs selon cette grille et suggère des phrases similaires pour travailler les points défaillants.

Réponds en JSON STRICT (les champs "coverage" et "breakdown" sont OBLIGATOIRES) :
{
  "score": 7.5,
  "coverage": [
    { "segment": "L'Union européenne", "status": "present" },
    { "segment": "cherche à renforcer son autonomie stratégique", "status": "missing" },
    { "segment": "face aux défis mondiaux", "status": "missing" }
  ],
  "breakdown": [
    {
      "type": "false_meaning",
      "penalty": -2,
      "span": "voted the bill",
      "explanation": "En anglais, on dit 'pass a bill' (faire voter / adopter), pas 'vote a bill'.",
      "correction": "passed the bill",
      "rule": "Pass a bill / vote on a bill"
    },
    {
      "type": "minor",
      "penalty": -0.5,
      "span": "negociations",
      "explanation": "Manque le 't' : 'negotiations'.",
      "correction": "negotiations",
      "rule": "Orthographe : negotiation"
    }
  ],
  "severity": {
    "major_errors": [],
    "minor_errors": [],
    "accepted_variations": ["After eighteen months of bargaining...", "Following 18 months of talks..."]
  },
  "corrected": "Version corrigée de la phrase de l'élève",
  "reference": "Version parfaite",
  "grammar_rules": ["Règle 1", "Règle 2"],
  "tips": ["Conseil 1", "Conseil 2"],
  "weak_grammar_points": ["will have to", "passive voice"],
  "similar_sentences": ["Phrase 1 à travailler", "Phrase 2 à travailler"],
  "flashcard_rule": "Règle principale à retenir pour la flashcard"
}

TYPES AUTORISÉS pour "breakdown[].type" : "false_meaning" (-2), "major_conjugation" (-2), "grammar" (-1), "minor" (-0.5).
- "penalty" doit être un nombre NÉGATIF cohérent avec le type (-2, -2, -1 ou -0.5).
- "score" = max(0, 10 + somme des "penalty"). Arrondi à 0,5 près.
- Laisse "severity.major_errors" et "severity.minor_errors" VIDES — la rétrocompatibilité est gérée côté serveur à partir de "breakdown".
- "accepted_variations" : liste 2 à 4 formulations alternatives valides DIFFÉRENTES de la référence, qui auraient aussi obtenu 10/10.`,

  de: `Tu es un correcteur ECRICOME spécialisé en thèmes grammaticaux allemands. Tu analyses des phrases de presse géopolitique complexes avec un vocabulaire spécialisé.

${SCORING_GRID}

ANALYSE PRÉCISE DE L'ÉCART :
Tu DOIS analyser mot par mot l'écart entre la réponse de l'étudiant et la phrase parfaite. Pour chaque erreur identifiée :

1. COMPARE la réponse étudiante avec la phrase de référence
2. IDENTIFIE précisément chaque erreur (mot, structure, déclinaison)
3. EXPLIQUE pourquoi c'est incorrect
4. DONNE la correction exacte
5. INDIQUE la règle grammaticale

POINTS SPÉCIFIQUES À ANALYSER :
- führen zu + datif / constructions avec prépositions
- Déclinaisons (accusatif, datif, génitif) après articles et adjectifs
- Ordre des mots (verbes séparables, subordonnées)
- Régimes verbaux spécifiques (kritisieren + acc., begegnen + dat.)
- Comparatifs déclinés
- Constructions infinitives (planen zu, um... zu)
- Verbes séparables (darstellen, aussetzen, umsetzen)
- Subordonnées dass avec verbe en position finale

CONTEXTE GÉOPOLITIQUE ALLEMAND :
- Vocabulaire spécialisé : Energiewende, Bundesländer, Konjunkturpaket
- Structures complexes journalistiques
- Registre formel et politique

EXPLICATION DÉTAILLÉE DES ERREURS :
Pour chaque erreur identifiée, tu DOIS expliquer :
1. QU'EST-CE QUE L'ERREUR : Description précise de l'erreur
2. POURQUOI C'EST INCORRECT : Explication grammaticale
3. COMMENT CORRIGER : Correction spécifique avec exemple
4. RÈGLE À RETENIR : Règle grammaticale générale

EXEMPLES D'ANALYSE PRÉCISE :
- Si l'étudiant écrit "geopolitischen Spannungen" au lieu de "Die geopolitischen Spannungen" :
  {
    "error": "Article défini manquant dans la déclinaison",
    "explanation": "En allemand, les articles définis (der/die/das) se déclinent selon le genre, le nombre et le cas. Ici, il manque l'article 'Die' pour 'Spannungen'.",
    "correction": "Ajouter 'Die' : 'Die geopolitischen Spannungen' au lieu de 'geopolitischen Spannungen'",
    "rule": "Les articles définis en allemand se déclinent selon le genre, le nombre et le cas"
  }

- Si l'étudiant écrit "führen zu" au lieu de "führen zu + datif" :
  {
    "error": "Cas incorrect après 'führen zu'",
    "explanation": "La préposition 'zu' régit le datif en allemand. L'étudiant a utilisé l'accusatif au lieu du datif.",
    "correction": "Utiliser le datif : 'zu einer Neubewertung' au lieu de 'zu eine Neubewertung'",
    "rule": "La préposition 'zu' régit toujours le datif en allemand"
  }

- Si l'étudiant écrit "Die Regierung plant investieren" au lieu de "Die Regierung plant, zu investieren" :
  {
    "error": "Construction infinitive incorrecte",
    "explanation": "Après 'planen', on utilise la construction infinitive avec 'zu' + infinitif.",
    "correction": "Ajouter 'zu' : 'Die Regierung plant, zu investieren'",
    "rule": "Après 'planen', on utilise 'zu' + infinitif"
  }

ACCEPTER LES SYNONYMES ET VARIATIONS :
- Les synonymes corrects ne doivent pas être pénalisés
- Les structures grammaticales équivalentes sont acceptables
- Seules les vraies erreurs doivent être sanctionnées
- Privilégier le registre formel et journalistique

Accepte les synonymes et variations correctes. Identifie les points grammaticaux défaillants précisément.

Réponds en JSON STRICT avec la même structure que l'anglais.`,

  es: `Tu es un correcteur ECRICOME spécialisé en thèmes grammaticaux espagnols. Tu analyses des phrases de presse géopolitique complexes avec un vocabulaire spécialisé.

${SCORING_GRID}

ANALYSE PRÉCISE DE L'ÉCART :
Tu DOIS analyser mot par mot l'écart entre la réponse de l'étudiant et la phrase parfaite. Pour chaque erreur identifiée :

1. COMPARE la réponse étudiante avec la phrase de référence
2. IDENTIFIE précisément chaque erreur (mot, structure, conjugaison)
3. EXPLIQUE pourquoi c'est incorrect
4. DONNE la correction exacte
5. INDIQUE la règle grammaticale

POINTS SPÉCIFIQUES À ANALYSER :
- Subjonctif présent et imparfait (es importante que, es necesario que)
- Ser vs estar (états vs caractéristiques permanentes)
- Prépositions por/para, en/a (but vs cause, lieu vs direction)
- Conditionnel composé (habría + participio)
- Futur simple et composé
- Voix passive avec ser + participio
- Constructions infinitives (tener que, deber + infinitive)
- Registre formel et journalistique

CONTEXTE GÉOPOLITIQUE ESPAGNOL :
- Vocabulaire spécialisé : reformas, tensiones, cumbres, sanciones
- Structures complexes journalistiques
- Registre formel et politique

EXPLICATION DÉTAILLÉE DES ERREURS :
Pour chaque erreur identifiée, tu DOIS expliquer :
1. QU'EST-CE QUE L'ERREUR : Description précise de l'erreur
2. POURQUOI C'EST INCORRECT : Explication grammaticale
3. COMMENT CORRIGER : Correction spécifique avec exemple
4. RÈGLE À RETENIR : Règle grammaticale générale

EXEMPLES D'ANALYSE PRÉCISE :
- Si l'étudiant écrit "es importante que el gobierno toma" au lieu de "es importante que el gobierno tome" :
  {
    "error": "Subjonctif manquant après es importante que",
    "explanation": "Après les expressions d'importance (es importante que, es necesario que), on utilise le subjonctif présent, pas l'indicatif.",
    "correction": "Utiliser le subjonctif : 'tome' au lieu de 'toma'",
    "rule": "Après es importante que, es necesario que, on utilise le subjonctif présent"
  }

- Si l'étudiant écrit "para reducir" au lieu de "por reducir" :
  {
    "error": "Confusion entre por et para",
    "explanation": "Por exprime la cause, para exprime le but. Ici, on parle de la cause de la réduction.",
    "correction": "Utiliser 'por' : 'por reducir' au lieu de 'para reducir'",
    "rule": "Por = cause, para = but"
  }

- Si l'étudiant écrit "La situación está grave" au lieu de "La situación está grave pero no es irreversible" :
  {
    "error": "Confusion entre ser et estar",
    "explanation": "Estar + adjectif exprime un état temporaire, ser + adjectif exprime une caractéristique permanente.",
    "correction": "Utiliser 'está' pour l'état temporaire : 'La situación está grave'",
    "rule": "Estar = état temporaire, ser = caractéristique permanente"
  }

ACCEPTER LES SYNONYMES ET VARIATIONS :
- Les synonymes corrects ne doivent pas être pénalisés
- Les structures grammaticales équivalentes sont acceptables
- Seules les vraies erreurs doivent être sanctionnées
- Privilégier le registre formel et journalistique

Accepte les synonymes et variations correctes. Identifie les points grammaticaux défaillants précisément.

Réponds en JSON STRICT avec la même structure que l'anglais.`
};

// Base de phrases similaires par point grammatical enrichie
const SIMILAR_SENTENCES: Record<string, Record<string, string[]>> = {
  en: {
    "will have to + infinitive": [
      "Les entreprises devront s'adapter aux nouvelles réglementations d'ici 2025.",
      "Le parlement devra voter cette loi avant les vacances.",
      "Les pays européens devront réduire leurs émissions de CO₂ de 55% d'ici 2030.",
      "Le gouvernement devra prendre des mesures drastiques pour lutter contre l'inflation."
    ],
    "could have + past participle": [
      "Les prix de l'énergie auraient pu baisser avec de meilleures négociations.",
      "Cette crise aurait pu être évitée avec plus de prévoyance.",
      "La récession aurait pu être évitée si les taux d'intérêt avaient été relevés plus tôt.",
      "Les tensions diplomatiques auraient pu être résolues par des négociations directes."
    ],
    "should have been + past participle": [
      "Les mesures de sécurité auraient dû être renforcées plus tôt.",
      "Ces informations auraient dû être communiquées au public.",
      "La réforme aurait dû être adoptée avant les élections.",
      "Les sanctions économiques auraient dû être imposées immédiatement."
    ],
    "present perfect": [
      "La croissance économique a ralenti ces derniers mois.",
      "Les investissements ont augmenté de 15% cette année.",
      "Le gouvernement a annoncé de nouvelles mesures pour stimuler l'économie.",
      "Les tensions géopolitiques ont affecté les marchés financiers."
    ],
    "if + past simple": [
      "Si les taux d'intérêt étaient plus bas, plus de gens achèteraient des maisons.",
      "Si le gouvernement investissait davantage, l'économie se porterait mieux.",
      "Si les sanctions étaient levées, le commerce international reprendrait.",
      "Si les réformes étaient adoptées, la croissance économique s'accélérerait."
    ],
    "passive voice": [
      "Le projet de loi sera débattu au Parlement lundi prochain.",
      "Les résultats du vote auraient dû être annoncés hier soir.",
      "Le système de cybersécurité aurait été piraté par un groupe étranger.",
      "Les artistes locaux ont été mis à l'honneur lors de la cérémonie."
    ],
    "modal verbs": [
      "Plusieurs pays pourraient imposer des restrictions supplémentaires.",
      "Selon plusieurs sources, le PDG pourrait démissionner dans les prochains jours.",
      "Il est peu probable que la réforme soit adoptée dans sa forme actuelle.",
      "Le ministre a probablement été averti avant la fuite des documents."
    ]
  },
  de: {
    "führen zu + datif": [
      "Die Wirtschaftskrise führte zu höherer Arbeitslosigkeit.",
      "Klimawandel führt zu extremen Wetterereignissen.",
      "Die Sanktionen führten zu einer Verschlechterung der Wirtschaftslage.",
      "Die Pandemie führte zu einer tiefgreifenden Wirtschaftskrise."
    ],
    "planen + zu + infinitif": [
      "Die EU plant, neue Handelsabkommen zu schließen.",
      "Viele Städte planen, klimaneutral zu werden.",
      "Die Regierung plant, die Steuern zu erhöhen.",
      "Das Unternehmen plant, neue Fabriken zu bauen."
    ],
    "kritisieren + accusatif": [
      "Opposition kritisiert die Regierungspolitik scharf.",
      "Bürger kritisieren den Mangel an Transparenz.",
      "Experten kritisieren die mangelnden Maßnahmen gegen den Klimawandel.",
      "Die Medien kritisieren die langsame Reaktion der Behörden."
    ],
    "génitif neutre": [
      "Die Diskussion eines neuen Gesetzes dauert lange.",
      "Die Umsetzung des Plans war erfolgreich.",
      "Die Verabschiedung des Haushalts verzögerte sich.",
      "Die Einführung der Reform stieß auf Widerstand."
    ],
    "verbe séparable": [
      "Die Regierung setzte das Programm sofort um.",
      "Experten stellten neue Theorien vor.",
      "Das Gericht setzte die Verhandlung aus.",
      "Die Behörde setzte die Zahlungen aus."
    ],
    "comparatif décliné": [
      "Wir brauchen strengere Maßnahmen gegen Korruption.",
      "Die Situation erfordert schnellere Entscheidungen.",
      "Die Krise erfordert bessere Lösungen.",
      "Die Reformen müssen umfassender sein."
    ],
    "subordonnée dass": [
      "Minister betonen, dass Reformen notwendig sind.",
      "Studien zeigen, dass die Lage sich verschlechtert.",
      "Experten warnen, dass die Krise sich verschärft.",
      "Analysten glauben, dass die Wirtschaft sich erholt."
    ],
    "begegnen + datif": [
      "Politiker müssen wachsender Kritik begegnen.",
      "Europa muss neuen Herausforderungen begegnen.",
      "Die Regierung muss den Protesten begegnen.",
      "Das Land muss der Krise begegnen."
    ],
    "gegenüber + datif": [
      "Skepsis gegenüber neuen Technologien wächst.",
      "Vertrauen gegenüber den Institutionen sinkt.",
      "Kritik gegenüber der Politik nimmt zu.",
      "Misstrauen gegenüber den Medien steigt."
    ],
    "verbe séparable aussetzen": [
      "Das Gericht setzte die Strafe zur Bewährung aus.",
      "Die Behörde setzte die Verhandlungen aus.",
      "Die Regierung setzte die Zahlungen aus.",
      "Das Unternehmen setzte die Produktion aus."
    ],
    "hervorheben + accusatif": [
      "Der Minister hat die Bedeutung der Zusammenarbeit hervorgehoben.",
      "Die Studie hat die Wichtigkeit der Reformen hervorgehoben.",
      "Der Präsident hat die Notwendigkeit der Maßnahmen hervorgehoben.",
      "Der Bericht hat die Dringlichkeit der Situation hervorgehoben."
    ]
  },
  es: {
    "condicional compuesto": [
      "La economía habría crecido más con mejores políticas.",
      "Los precios habrían bajado con más competencia.",
      "La crisis habría sido evitada con medidas preventivas.",
      "Las tensiones habrían disminuido con más diálogo."
    ],
    "tendrá que + infinitive": [
      "El país tendrá que implementar reformas estructurales.",
      "La empresa tendrá que reducir sus costos operativos.",
      "El gobierno tendrá que tomar medidas drásticas.",
      "Los bancos tendrán que adaptarse a las nuevas regulaciones."
    ],
    "subjuntivo presente": [
      "Es importante que el gobierno tome medidas inmediatas.",
      "Es necesario que las empresas reduzcan sus emisiones.",
      "Es urgente que se implementen las reformas.",
      "Es fundamental que se mejore la transparencia."
    ],
    "ser vs estar": [
      "La situación está grave pero no es irreversible.",
      "El gobierno es responsable pero está dividido.",
      "La economía está en crisis pero es sólida.",
      "Las medidas son necesarias y están siendo implementadas."
    ],
    "por vs para": [
      "El gobierno trabaja por el bienestar de los ciudadanos.",
      "Las reformas son necesarias para mejorar la economía.",
      "Los expertos luchan por la transparencia.",
      "Las medidas se toman para evitar la crisis."
    ],
    "voz pasiva": [
      "Los resultados fueron anunciados ayer por la tarde.",
      "Las medidas serán implementadas en los próximos meses.",
      "La ley fue aprobada por el parlamento.",
      "Los fondos serán distribuidos entre las regiones."
    ],
    "present perfect": [
      "La economía ha crecido significativamente este año.",
      "Los precios han aumentado debido a la inflación.",
      "El gobierno ha implementado nuevas medidas.",
      "Las tensiones han disminuido en los últimos meses."
    ],
    "futur simple": [
      "El país implementará las reformas el próximo año.",
      "La empresa reducirá sus costos operativos.",
      "El gobierno tomará medidas drásticas.",
      "Los bancos se adaptarán a las nuevas regulaciones."
    ],
    "constructions infinitives": [
      "El gobierno tiene que implementar las reformas.",
      "Las empresas deben reducir sus emisiones.",
      "Los expertos necesitan analizar la situación.",
      "Los ciudadanos quieren ver resultados."
    ],
    "subjonctif imparfait": [
      "Si el gobierno hubiera tomado medidas antes, la crisis se habría evitado.",
      "Si las empresas hubieran invertido más, la economía habría crecido.",
      "Si los expertos hubieran advertido, las consecuencias serían menores.",
      "Si las reformas hubieran sido implementadas, la situación sería mejor."
    ]
  }
};

serve(async (req) => {
  const __preflight = handleCorsPreflight(req);
  if (__preflight) return __preflight;

  const __authResult = await requireAuth(req);
  if (__authResult.response) return __authResult.response;

  try {
    console.log('Received request for evaluation');
    
    const requestBody = await req.json();
    console.log('Request body:', requestBody);
    
    const { language, student, french, reference, grammar_points } = requestBody;
    
    // Validation des paramètres requis (hors 'student' : géré séparément)
    if (!language || !french || !reference) {
      console.error('Missing required parameters');
      return new Response(JSON.stringify({
        error: 'Paramètres manquants: language, french, reference sont requis'
      }), {
        status: 400,
        headers: { ...corsHeaders(req), "Content-Type": "application/json" }
      });
    }

    // Réponse vide / quasi vide → 0/10 immédiat, sans appel IA (pas de 10/10 par absence d'erreur)
    if (!student || String(student).trim().length === 0) {
      const emptyOutput = {
        score: 0,
        breakdown: [{
          type: "false_meaning",
          label: "Faux sens",
          penalty: -10,
          span: "",
          explanation: "Aucune traduction fournie : la totalité du sens de la phrase française est omise.",
          correction: reference,
          rule: "Une copie blanche ou vide ne peut pas obtenir de points.",
        }],
        severity: {
          major_errors: [{
            error: "Aucune traduction fournie",
            explanation: "La totalité du sens de la phrase française est omise.",
            correction: reference,
            rule: "Une copie blanche ne peut pas obtenir de points.",
          }],
          minor_errors: [],
          accepted_variations: [],
        },
        corrected: reference,
        reference,
        grammar_rules: [],
        tips: ["Propose une traduction, même imparfaite : une copie blanche vaut 0."],
        weak_grammar_points: [],
        similar_sentences: [],
        flashcard_rule: "Toujours tenter une traduction complète.",
      };
      return new Response(JSON.stringify(emptyOutput), {
        headers: { ...corsHeaders(req), "Content-Type": "application/json" }
      });
    }

    if (!openAIApiKey) {
      console.error('OpenAI API key not configured');
      return new Response(JSON.stringify({ 
        error: 'Clé API OpenAI non configurée' 
      }), { 
        status: 500, 
        headers: { ...corsHeaders(req), "Content-Type": "application/json" } 
      });
    }
    
    const systemPrompt = PROMPTS[language as keyof typeof PROMPTS] || PROMPTS.en;
    
    console.log('Making OpenAI API call');
    
    const completionRes = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${openAIApiKey}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        response_format: { type: "json_object" },
        messages: [
          { role: "system", content: systemPrompt },
          {
            role: "user",
            content: `ANALYSE PRÉCISE REQUISE :

PHRASE FRANÇAISE : ${french}
LANGUE CIBLE : ${language}
PHRASE PARFAITE (RÉFÉRENCE) : ${reference}
RÉPONSE DE L'ÉTUDIANT : ${student}
POINTS GRAMMATICAUX TRAVAILLÉS : ${grammar_points?.join(', ') || 'Non spécifiés'}

PROCESSUS D'ANALYSE :
1. Juge d'abord l'ÉQUIVALENCE SÉMANTIQUE : la phrase de l'élève dit-elle la même chose que le français ? Si OUI, n'invente pas d'erreur juste parce que les mots diffèrent de la référence.
2. Identifie chaque erreur réelle et classe-la dans une des 4 catégories du barème :
   - false_meaning (-2), major_conjugation (-2), grammar (-1), minor (-0.5).
3. Pour chaque erreur, donne un "span" qui est un fragment textuel EXACT de la réponse de l'élève (copie-colle, casse identique). Pour une OMISSION, mets "span": "".
4. Calcule score = max(0, 10 + somme des penalties). Arrondi à 0,5 près.
5. Renseigne "accepted_variations" : 2 à 4 formulations alternatives valides qui auraient eu 10/10, différentes de la référence.
6. Si la traduction est parfaite ou sémantiquement équivalente sans faute, "breakdown" doit être un tableau VIDE et "score" = 10.

Sois RIGOUREUX sur les pénalités, GÉNÉREUX sur l'équivalence sémantique.`
          }
        ],
        max_tokens: 1500,
        temperature: 0.1
      })
    });
    
    if (!completionRes.ok) {
      console.error('OpenAI API error:', completionRes.status, completionRes.statusText);
      const errorText = await completionRes.text();
      console.error('OpenAI error response:', errorText);
      throw new Error(`Erreur API OpenAI: ${completionRes.status}`);
    }
    
    const completion = await completionRes.json();
    console.log('OpenAI response received');
    
    if (!completion.choices?.[0]?.message?.content) {
      console.error('Invalid OpenAI response structure:', completion);
      throw new Error('Réponse OpenAI invalide');
    }
    
    const rawContent = completion.choices[0].message.content;
    console.log('Raw OpenAI content:', rawContent);
    
    let output;
    
    try {
      output = JSON.parse(rawContent);
    } catch (parseError) {
      console.log('Initial JSON parse failed, trying to extract JSON from response');
      const jsonMatch = rawContent.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        try {
          output = JSON.parse(jsonMatch[0]);
        } catch (extractError) {
          console.error('Failed to parse extracted JSON:', extractError);
          throw new Error('Impossible de parser la réponse JSON');
        }
      } else {
        console.error('No JSON found in response:', rawContent);
        throw new Error('Aucun JSON trouvé dans la réponse');
      }
    }
    
    // Enrichir avec des phrases similaires selon les points faibles détectés
    const weakPoints = output.weak_grammar_points || [];
    const similarSentences = [];
    const languagePool = SIMILAR_SENTENCES[language] || {};
    
    for (const point of weakPoints) {
      if (languagePool[point]) {
        similarSentences.push(...languagePool[point].slice(0, 2)); // Max 2 phrases par point
      }
    }
    
    // === Normalisation du breakdown ===
    const ALLOWED_TYPES: Record<string, number> = {
      false_meaning: -2,
      major_conjugation: -2,
      grammar: -1,
      minor: -0.5,
    };
    const TYPE_LABELS: Record<string, string> = {
      false_meaning: "Faux sens",
      major_conjugation: "Conjugaison majeure",
      grammar: "Grammaire",
      minor: "Petite erreur",
    };
    const rawBreakdown = Array.isArray(output.breakdown) ? output.breakdown : [];
    let breakdown = rawBreakdown
      .map((item: any) => {
        const type = typeof item?.type === "string" && item.type in ALLOWED_TYPES ? item.type : null;
        if (!type) return null;
        const expectedPenalty = ALLOWED_TYPES[type];
        const rawPenalty = Number(item?.penalty);
        const penalty = Number.isFinite(rawPenalty) && rawPenalty < 0 ? rawPenalty : expectedPenalty;
        return {
          type,
          label: TYPE_LABELS[type],
          penalty,
          span: typeof item?.span === "string" ? item.span : "",
          explanation: typeof item?.explanation === "string" ? item.explanation : "",
          correction: typeof item?.correction === "string" ? item.correction : "",
          rule: typeof item?.rule === "string" ? item.rule : "",
        };
      })
      .filter(Boolean);

    // Fallback : si gpt-4o-mini a renvoyé l'ancien format (uniquement severity.{major,minor}_errors),
    // on reconstruit un breakdown approximatif pour que le front affiche quand même quelque chose.
    if (breakdown.length === 0) {
      const fallbackMajors = Array.isArray(output.severity?.major_errors) ? output.severity.major_errors : [];
      const fallbackMinors = Array.isArray(output.severity?.minor_errors) ? output.severity.minor_errors : [];
      const toEntry = (e: any, isMajor: boolean) => {
        const text = typeof e === "string" ? e : "";
        const explanation = typeof e?.explanation === "string" ? e.explanation : text;
        const correction = typeof e?.correction === "string" ? e.correction : "";
        const rule = typeof e?.rule === "string" ? e.rule : "";
        const errorLabel = typeof e?.error === "string" ? e.error : "";
        // Heuristique pour le type : si "conjug" dans la description → major_conjugation,
        // sinon major = false_meaning, minor = grammar par défaut.
        const haystack = `${errorLabel} ${explanation} ${rule}`.toLowerCase();
        let type: keyof typeof ALLOWED_TYPES;
        if (isMajor) {
          type = /conjug|temps|tense|auxiliaire/.test(haystack) ? "major_conjugation" : "false_meaning";
        } else {
          type = /orthographe|spelling|accent|registre/.test(haystack) ? "minor" : "grammar";
        }
        return {
          type,
          label: TYPE_LABELS[type],
          penalty: ALLOWED_TYPES[type],
          span: "",
          explanation: explanation || errorLabel,
          correction,
          rule,
        };
      };
      breakdown = [
        ...fallbackMajors.map((e: any) => toEntry(e, true)),
        ...fallbackMinors.map((e: any) => toEntry(e, false)),
      ];
    }

    // Score préliminaire : si l'IA en a donné un, on le respecte. Sinon on le recalcule.
    const computedScore = breakdown.reduce((acc: number, e: any) => acc + e.penalty, 10);
    const llmScore = Number(output.score);
    let preliminaryScore = Math.max(
      0,
      Math.min(10, Number.isFinite(llmScore) ? llmScore : computedScore)
    );

    // === GARDE-FOU COUVERTURE SÉMANTIQUE (déterministe, prioritaire) ===
    // Le score ne peut PAS dépasser (couverture du sens) × 10. Un hors-sujet = 0.
    const rawCoverage = Array.isArray(output.coverage) ? output.coverage : [];
    const coverageSegments = rawCoverage
      .map((c: any) => {
        const status = typeof c?.status === "string" ? c.status.toLowerCase() : "";
        const segment = typeof c?.segment === "string" ? c.segment : "";
        if (!segment) return null;
        if (status !== "present" && status !== "altered" && status !== "missing") return null;
        return { segment, status };
      })
      .filter(Boolean);

    if (coverageSegments.length > 0) {
      const total = coverageSegments.length;
      const weight = coverageSegments.reduce(
        (acc: number, s: any) => acc + (s.status === "present" ? 1 : s.status === "altered" ? 0.5 : 0),
        0
      );
      const semanticCoverage = weight / total;
      const cap = Math.round(semanticCoverage * 10 * 2) / 2; // plafond, arrondi 0,5
      const missing = coverageSegments.filter((s: any) => s.status === "missing");
      const altered = coverageSegments.filter((s: any) => s.status === "altered");

      if (preliminaryScore > cap) {
        // Liste explicite des segments non rendus, visible dans le détail du score
        const missingList = missing.map((s: any) => `« ${s.segment} »`).join(" ; ");
        breakdown.push({
          type: "false_meaning",
          label: TYPE_LABELS["false_meaning"],
          penalty: -(Math.round((preliminaryScore - cap) * 2) / 2) || -0.5,
          span: "",
          explanation:
            missing.length === total
              ? `Hors-sujet : la traduction ne rend AUCUN des segments de sens de la phrase française.`
              : `Segments du sens non traduits (omis ou détournés) : ${missingList}. Couverture du sens ≈ ${Math.round(semanticCoverage * 100)} %.`,
          correction: reference,
          rule: "Le score est plafonné par la part du sens réellement rendue. Une phrase juste mais incomplète, ou hors-sujet, ne peut pas obtenir une bonne note.",
        });
        preliminaryScore = cap;
      }
    } else {
      // FALLBACK (coverage absent) : garde-fou grossier par nombre de mots, durci.
      const countWords = (s: string) => (s || "").trim().split(/\s+/).filter(Boolean).length;
      const wRef = countWords(reference);
      const wStu = countWords(student);
      const coverageRatio = wRef > 0 ? Math.min(1, wStu / wRef) : 1;
      if (coverageRatio < 0.7) {
        const cap = Math.max(0, Math.min(10, Math.round(coverageRatio * 10 * 2) / 2));
        if (preliminaryScore > cap) {
          breakdown.push({
            type: "false_meaning",
            label: TYPE_LABELS["false_meaning"],
            penalty: -(Math.round((preliminaryScore - cap) * 2) / 2) || -0.5,
            span: "",
            explanation: `Traduction manifestement incomplète : ≈ ${Math.round(coverageRatio * 100)} % de la longueur attendue seulement. Les segments non traduits comptent comme des omissions.`,
            correction: reference,
            rule: "Une traduction doit rendre l'intégralité du sens. Toute omission est pénalisée.",
          });
          preliminaryScore = cap;
        }
      }
    }

    // === PLANCHER LEXICAL DÉTERMINISTE (toujours actif, indépendant de l'IA) ===
    // Mesure brute : quelle part des mots de contenu de la référence se retrouve
    // dans la réponse de l'élève ? Détecte les hors-sujet même si l'IA est trop gentille.
    {
      const STOP = new Set([
        "the","a","an","of","to","in","on","at","for","and","or","but","is","are","was","were",
        "be","been","being","by","with","as","that","this","it","its","their","his","her","they",
        "le","la","les","un","une","des","de","du","et","ou","à","au","aux","en","dans","sur","ce",
        "der","die","das","ein","eine","und","oder","zu","den","dem","im","el","los","las","y","o",
      ]);
      const norm = (s: string) =>
        (s || "")
          .toLowerCase()
          .replace(/[^\p{L}\p{N}\s]/gu, " ")
          .split(/\s+/)
          .filter((w) => w.length > 2 && !STOP.has(w));
      const refTokens = norm(reference);
      const stuSet = new Set(norm(student));
      if (refTokens.length >= 3 && stuSet.size > 0) {
        const shared = refTokens.filter((t) => stuSet.has(t)).length;
        const lexCoverage = shared / refTokens.length; // 0 = aucun mot-clé commun
        // En dessous de 30 % de mots-clés communs : presque sûrement hors-sujet/omission massive.
        if (lexCoverage < 0.3) {
          const lexCap = Math.round(lexCoverage * 10 * 2) / 2; // ex. 0% -> 0, 20% -> 2
          if (preliminaryScore > lexCap) {
            breakdown.push({
              type: "false_meaning",
              label: TYPE_LABELS["false_meaning"],
              penalty: -(Math.round((preliminaryScore - lexCap) * 2) / 2) || -0.5,
              span: "",
              explanation: `Très faible recouvrement avec la phrase attendue (≈ ${Math.round(lexCoverage * 100)} % des mots-clés). La réponse omet l'essentiel du sens ou est hors-sujet.`,
              correction: reference,
              rule: "Une traduction qui ne reprend presque aucun élément de sens de la phrase source ne peut pas obtenir de points.",
            });
            preliminaryScore = lexCap;
          }
        }
      }
    }

    const finalScore = Math.max(0, Math.min(10, preliminaryScore));

    // Rétrocompat : dériver severity.major_errors / minor_errors depuis le breakdown
    const derivedMajor = breakdown
      .filter((e: any) => e.penalty <= -2)
      .map((e: any) => ({
        error: e.span ? `${e.label} : "${e.span}"` : e.label,
        explanation: e.explanation,
        correction: e.correction,
        rule: e.rule,
      }));
    const derivedMinor = breakdown
      .filter((e: any) => e.penalty > -2)
      .map((e: any) => ({
        error: e.span ? `${e.label} : "${e.span}"` : e.label,
        explanation: e.explanation,
        correction: e.correction,
        rule: e.rule,
      }));

    // Retourner exactement la structure attendue par le frontend
    const validatedOutput = {
      score: finalScore,
      breakdown,
      coverage: coverageSegments,
      severity: {
        major_errors: derivedMajor,
        minor_errors: derivedMinor,
        accepted_variations: Array.isArray(output.severity?.accepted_variations) ? output.severity.accepted_variations : []
      },
      corrected: String(output.corrected || "Correction non disponible"),
      reference: String(output.reference || reference),
      grammar_rules: Array.isArray(output.grammar_rules) ? output.grammar_rules : [],
      tips: Array.isArray(output.tips) ? output.tips : [],
      weak_grammar_points: Array.isArray(output.weak_grammar_points) ? output.weak_grammar_points : [],
      similar_sentences: similarSentences.slice(0, 3), // Max 3 phrases similaires
      flashcard_rule: String(output.flashcard_rule || "Règle à réviser")
    };
    
    console.log('Validated output:', validatedOutput);
    
    return new Response(JSON.stringify(validatedOutput), { 
      headers: { ...corsHeaders(req), "Content-Type": "application/json" } 
    });
  } catch (e) {
    console.error('Error in evaluate function:', e);
    return new Response(JSON.stringify({ 
      error: 'Une erreur est survenue lors de l\'évaluation',
      details: e.message 
    }), { 
      status: 500, 
      headers: { ...corsHeaders(req), "Content-Type": "application/json" } 
    });
  }
});
