
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"
};

const openAIApiKey = Deno.env.get("OPENAI_API_KEY");

// Base de phrases similaires par point grammatical
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
    "Konjunktiv II": [
      "Wenn die Wirtschaft stärker wäre, gäbe es weniger Arbeitslose.",
      "Falls mehr investiert worden wäre, hätte sich die Lage verbessert."
    ],
    "werden + müssen": [
      "Die Unternehmen werden ihre Strategien ändern müssen.",
      "Wir werden bis morgen eine Lösung finden müssen."
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

  de: `Tu es un correcteur ECRICOME spécialisé en thèmes grammaticaux allemands. Utilise le même système de scoring amélioré :

SYSTÈME DE SCORING AMÉLIORÉ :
- Note de base : 10/10
- Déductions : 
  * -2 points : barbarisme, erreurs graves de déclinaison, ordre des mots incorrect
  * -1 point : erreurs mineures de grammaire, lexique, orthographe
  * 0 point : synonymes acceptables, variations stylistiques valides

Accepte les synonymes et variations correctes. Identifie les points grammaticaux défaillants (déclinaisons, ordre des mots, Konjunktiv II, etc.).

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
    const { language, student, french, reference, grammar_points } = await req.json();
    
    const systemPrompt = PROMPTS[language as keyof typeof PROMPTS] || PROMPTS.en;
    
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
            content: `PHRASE FRANÇAISE: ${french}\nLANGUE CIBLE: ${language}\nTRADUCTION ATTENDUE: ${reference}\nRÉPONSE ÉTUDIANT: ${student}\nPOINTS GRAMMATICAUX TRAVAILLÉS: ${grammar_points?.join(', ') || 'Non spécifiés'}` 
          }
        ],
        max_tokens: 1500,
        temperature: 0.1
      })
    });
    
    const completion = await completionRes.json();
    
    if (!completion.choices?.[0]?.message?.content) {
      throw new Error('Réponse OpenAI invalide');
    }
    
    const rawContent = completion.choices[0].message.content;
    let output;
    
    try {
      output = JSON.parse(rawContent);
    } catch (parseError) {
      const jsonMatch = rawContent.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        output = JSON.parse(jsonMatch[0]);
      } else {
        throw new Error('Impossible de parser la réponse JSON');
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
    
    // Adapter le format de severity pour la compatibilité
    const validatedOutput = {
      score: Math.max(0, Math.min(10, output.score || 0)),
      severity: {
        barbarism: output.severity?.major_errors || [],
        omission: output.severity?.major_errors?.filter((e: string) => e.toLowerCase().includes('omission')) || [],
        grammar: [...(output.severity?.major_errors || []), ...(output.severity?.minor_errors || [])],
        lexicon: output.severity?.minor_errors?.filter((e: string) => e.toLowerCase().includes('lexical') || e.toLowerCase().includes('vocabulaire')) || [],
        spelling: output.severity?.minor_errors?.filter((e: string) => e.toLowerCase().includes('orthographe')) || [],
        other: output.severity?.accepted_variations || []
      },
      corrected: output.corrected || "Correction non disponible",
      reference: output.reference || reference,
      grammar_rules: Array.isArray(output.grammar_rules) ? output.grammar_rules : [],
      tips: Array.isArray(output.tips) ? output.tips : [],
      weak_grammar_points: Array.isArray(output.weak_grammar_points) ? output.weak_grammar_points : [],
      similar_sentences: similarSentences.slice(0, 3), // Max 3 phrases similaires
      flashcard_rule: output.flashcard_rule || "Règle à réviser",
      german_analysis: language === 'de' ? {
        declension_errors: output.severity?.major_errors?.filter((e: string) => e.toLowerCase().includes('déclinaison')) || [],
        word_order_errors: output.severity?.major_errors?.filter((e: string) => e.toLowerCase().includes('ordre')) || []
      } : null
    };
    
    return new Response(JSON.stringify(validatedOutput), { 
      headers: { ...corsHeaders, "Content-Type": "application/json" } 
    });
  } catch (e) {
    console.error('Error in evaluate function:', e);
    return new Response(JSON.stringify({ error: e.message }), { 
      status: 500, 
      headers: { ...corsHeaders, "Content-Type": "application/json" } 
    });
  }
});
