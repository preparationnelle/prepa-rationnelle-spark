
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"
};

const openAIApiKey = Deno.env.get("OPENAI_API_KEY");

// Base de phrases similaires par point grammatical enrichie
const SIMILAR_SENTENCES: Record<string, Record<string, string[]>> = {
  en: {
    "will have to + infinitive": [
      "Les entreprises devront s'adapter aux nouvelles réglementations d'ici 2025.",
      "Le parlement devra voter cette loi avant les vacances."
    ],
    "could have + past participle": [
      "Les prix de l'énergie auraient pu baisser avec de meilleures négociations.",
      "Cette crise aurait pu être évitée avec plus de prévoyance."
    ],
    "should have been + past participle": [
      "Les mesures de sécurité auraient dû être renforcées plus tôt.",
      "Ces informations auraient dû être communiquées au public."
    ],
    "present perfect": [
      "La croissance économique a ralenti ces derniers mois.",
      "Les investissements ont augmenté de 15% cette année."
    ],
    "if + past simple": [
      "Si les taux d'intérêt étaient plus bas, plus de gens achèteraient des maisons.",
      "Si le gouvernement investissait davantage, l'économie se porterait mieux."
    ]
  },
  de: {
    "führen zu + datif": [
      "Die Wirtschaftskrise führte zu höherer Arbeitslosigkeit.",
      "Klimawandel führt zu extremen Wetterereignissen."
    ],
    "planen + zu + infinitif": [
      "Die EU plant, neue Handelsabkommen zu schließen.",
      "Viele Städte planen, klimaneutral zu werden."
    ],
    "kritisieren + accusatif": [
      "Opposition kritisiert die Regierungspolitik scharf.",
      "Bürger kritisieren den Mangel an Transparenz."
    ],
    "génitif neutre": [
      "Die Diskussion eines neuen Gesetzes dauert lange.",
      "Die Umsetzung des Plans war erfolgreich."
    ],
    "verbe séparable": [
      "Die Regierung setzte das Programm sofort um.",
      "Experten stellten neue Theorien vor."
    ],
    "comparatif décliné": [
      "Wir brauchen strengere Maßnahmen gegen Korruption.",
      "Die Situation erfordert schnellere Entscheidungen."
    ],
    "subordonnée dass": [
      "Minister betonen, dass Reformen notwendig sind.",
      "Studien zeigen, dass die Lage sich verschlechtert."
    ],
    "begegnen + datif": [
      "Politiker müssen wachsender Kritik begegnen.",
      "Europa muss neuen Herausforderungen begegnen."
    ],
    "gegenüber + datif": [
      "Skepsis gegenüber neuen Technologien wächst.",
      "Vertrauen gegenüber den Institutionen sinkt."
    ],
    "verbe séparable aussetzen": [
      "Das Gericht setzte die Strafe zur Bewährung aus.",
      "Die Behörde setzte die Verhandlungen aus."
    ]
  },
  es: {
    "condicional compuesto": [
      "La economía habría crecido más con mejores políticas.",
      "Los precios habrían bajado con más competencia."
    ],
    "tendrá que + infinitive": [
      "El país tendrá que implementar reformas estructurales.",
      "La empresa tendrá que reducir sus costos operativos."
    ]
  }
};

const PROMPTS = {
  en: `Tu es un correcteur ECRICOME spécialisé en thèmes grammaticaux anglais. Analyse cette traduction avec un système de scoring amélioré :

SYSTÈME DE SCORING AMÉLIORÉ :
- Note de base : 10/10
- Déductions : 
  * -2 points : barbarisme, non-sens, charabia, omission majeure, gros contresens
  * -1 point : faute de grammaire mineure, erreur lexicale, orthographe, approximation
  * 0 point : synonymes acceptables, variations stylistiques valides

ACCEPTER LES SYNONYMES ET VARIATIONS :
- Les synonymes corrects ne doivent pas être pénalisés
- Les structures grammaticales équivalentes sont acceptables
- Seules les vraies erreurs doivent être sanctionnées

Identifie PRÉCISÉMENT les erreurs selon cette grille et suggère des phrases similaires pour travailler les points défaillants.

Réponds en JSON STRICT :
{
  "score": 8,
  "severity": {
    "major_errors": ["erreurs graves -2pts"],
    "minor_errors": ["erreurs mineures -1pt"],
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

  de: `Tu es un correcteur ECRICOME spécialisé en thèmes grammaticaux allemands. Tu analyses des phrases de presse géopolitique complexes. Utilise ce système de scoring amélioré :

SYSTÈME DE SCORING AMÉLIORÉ :
- Note de base : 10/10
- Déductions : 
  * -2 points : barbarisme, erreurs graves de déclinaison, ordre des mots incorrect, régime verbal faux
  * -1 point : erreurs mineures de grammaire, lexique, orthographe, accords
  * 0 point : synonymes acceptables, variations stylistiques valides

POINTS SPÉCIFIQUES À ANALYSER :
- führen zu + datif / constructions avec prépositions
- Déclinaisons (accusatif, datif, génitif) après articles et adjectifs
- Ordre des mots (verbes séparables, subordonnées)
- Régimes verbaux spécifiques (kritisieren + acc., begegnen + dat.)
- Comparatifs déclinés
- Constructions infinitives (planen zu, um... zu)

Accepte les synonymes et variations correctes. Identifie les points grammaticaux défaillants précisément.

Réponds en JSON STRICT avec la même structure que l'anglais.`,

  es: `Tu es un correcteur ECRICOME spécialisé en thèmes grammaticaux espagnols. Utilise le même système de scoring amélioré :

SYSTÈME DE SCORING AMÉLIORÉ :
- Note de base : 10/10
- Déductions : 
  * -2 points : barbarisme, erreurs graves de grammaire (subjonctif, ser/estar)
  * -1 point : erreurs mineures, lexique, orthographe
  * 0 point : synonymes acceptables, variations stylistiques valides

Accepte les synonymes et variations correctes. Identifie les points grammaticaux défaillants (subjonctif, ser/estar, por/para, etc.).

Réponds en JSON STRICT avec la structure de base.`
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
            content: `PHRASE FRANÇAISE: ${french}\nLANGUE CIBLE: ${language}\nTRADUCTION ATTENDUE: ${reference}\nRÉPONSE ÉTUDIANT: ${student}\nPOINTS GRAMMATICAUX TRAVAILLÉS: ${grammar_points?.join(', ') || 'Non spécifiés'}\n\nAnalyse précisément selon les critères ECRICOME et identifie les erreurs spécifiques aux constructions de presse géopolitique.` 
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
        major_errors: Array.isArray(output.severity?.major_errors) ? output.severity.major_errors : [],
        minor_errors: Array.isArray(output.severity?.minor_errors) ? output.severity.minor_errors : [],
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
