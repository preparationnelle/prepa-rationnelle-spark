
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"
};

const openAIApiKey = Deno.env.get("OPENAI_API_KEY");

// Prompts spécialisés pour chaque langue
const PROMPTS = {
  en: `Tu es un correcteur ECRICOME spécialisé en thèmes grammaticaux anglais. Tu analyses des phrases de presse géopolitique et économique complexes. Utilise ce système de scoring amélioré :

SYSTÈME DE SCORING AMÉLIORÉ :
- Note de base : 10/10
- Déductions : 
  * -2 points : barbarisme, non-sens, charabia, omission majeure, gros contresens, erreur de structure
  * -1 point : faute de grammaire mineure, erreur lexicale, orthographe, approximation, registre incorrect
  * 0 point : synonymes acceptables, variations stylistiques valides, registre approprié

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

Réponds en JSON STRICT :
{
  "score": 8,
  "severity": {
    "major_errors": [
      {
        "error": "Description précise de l'erreur",
        "explanation": "Pourquoi c'est incorrect",
        "correction": "Comment corriger",
        "rule": "Règle à retenir"
      }
    ],
    "minor_errors": [
      {
        "error": "Description précise de l'erreur",
        "explanation": "Pourquoi c'est incorrect", 
        "correction": "Comment corriger",
        "rule": "Règle à retenir"
      }
    ],
    "accepted_variations": ["variantes acceptées"]
  },
  "corrected": "Version corrigée",
  "reference": "Version parfaite",
  "grammar_rules": ["Règle 1", "Règle 2"],
  "tips": ["Conseil 1", "Conseil 2"],
  "weak_grammar_points": ["will have to", "passive voice"],
  "similar_sentences": ["Phrase 1 à travailler", "Phrase 2 à travailler"],
  "flashcard_rule": "Règle principale à retenir pour la flashcard"
}`,

  de: `Tu es un correcteur ECRICOME spécialisé en thèmes grammaticaux allemands. Tu analyses des phrases de presse géopolitique complexes avec un vocabulaire spécialisé. Utilise ce système de scoring amélioré :

SYSTÈME DE SCORING AMÉLIORÉ :
- Note de base : 10/10
- Déductions : 
  * -2 points : barbarisme, erreurs graves de déclinaison, ordre des mots incorrect, régime verbal faux, contresens
  * -1 point : erreurs mineures de grammaire, lexique, orthographe, accords, registre
  * 0 point : synonymes acceptables, variations stylistiques valides, registre approprié

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

  es: `Tu es un correcteur ECRICOME spécialisé en thèmes grammaticaux espagnols. Tu analyses des phrases de presse géopolitique complexes avec un vocabulaire spécialisé. Utilise ce système de scoring amélioré :

SYSTÈME DE SCORING AMÉLIORÉ :
- Note de base : 10/10
- Déductions : 
  * -2 points : barbarisme, erreurs graves de grammaire (subjonctif, ser/estar, contresens)
  * -1 point : erreurs mineures, lexique, orthographe, registre
  * 0 point : synonymes acceptables, variations stylistiques valides, registre approprié

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
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  
  try {
    console.log('Received request for evaluation');
    
    const requestBody = await req.json();
    console.log('Request body:', requestBody);
    
    const { language, student, french, reference, grammar_points } = requestBody;
    
    // Validation des paramètres requis
    if (!language || !student || !french || !reference) {
      console.error('Missing required parameters');
      return new Response(JSON.stringify({ 
        error: 'Paramètres manquants: language, student, french, reference sont requis' 
      }), { 
        status: 400, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
      });
    }

    if (!openAIApiKey) {
      console.error('OpenAI API key not configured');
      return new Response(JSON.stringify({ 
        error: 'Clé API OpenAI non configurée' 
      }), { 
        status: 500, 
        headers: { ...corsHeaders, "Content-Type": "application/json" } 
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

INSTRUCTIONS D'ANALYSE :
1. COMPARE mot par mot la réponse de l'étudiant avec la phrase parfaite
2. IDENTIFIE chaque erreur spécifique (mot manquant, temps incorrect, structure fausse)
3. POUR CHAQUE ERREUR, donne :
   - L'erreur précise
   - L'explication grammaticale
   - La correction exacte
   - La règle à retenir
4. CALCULE le score : 10 points - 2 points par erreur grave - 1 point par erreur mineure
5. ACCEPTE les variations correctes et synonymes valides

Analyse précisément selon les critères ECRICOME et identifie TOUTES les erreurs spécifiques aux constructions de presse géopolitique.` 
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
    
    // Retourner exactement la structure attendue par le frontend
    const validatedOutput = {
      score: Math.max(0, Math.min(10, Number(output.score) || 0)),
      severity: {
        major_errors: Array.isArray(output.severity?.major_errors) ? 
          output.severity.major_errors.map(error => {
            if (typeof error === 'string') {
              return {
                error: error,
                explanation: "Erreur grammaticale majeure",
                correction: "Vérifiez la structure de la phrase",
                rule: "Règle grammaticale à réviser"
              };
            }
            return error;
          }) : [],
        minor_errors: Array.isArray(output.severity?.minor_errors) ? 
          output.severity.minor_errors.map(error => {
            if (typeof error === 'string') {
              return {
                error: error,
                explanation: "Erreur grammaticale mineure",
                correction: "Vérifiez le vocabulaire et la grammaire",
                rule: "Règle grammaticale à réviser"
              };
            }
            return error;
          }) : [],
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
      headers: { ...corsHeaders, "Content-Type": "application/json" } 
    });
  } catch (e) {
    console.error('Error in evaluate function:', e);
    return new Response(JSON.stringify({ 
      error: 'Une erreur est survenue lors de l\'évaluation',
      details: e.message 
    }), { 
      status: 500, 
      headers: { ...corsHeaders, "Content-Type": "application/json" } 
    });
  }
});
