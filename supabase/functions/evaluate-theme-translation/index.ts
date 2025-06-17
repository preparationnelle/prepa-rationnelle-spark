
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
  en: `Tu es un correcteur ECRICOME spécialisé en thèmes grammaticaux anglais. Analyse cette traduction et :

1. Identifie PRÉCISÉMENT les erreurs grammaticales selon cette grille :
- 4/4.5 points : barbarisme, non-sens, charabia, omission majeure
- 3 points : gros contresens, faute majeure de grammaire, omission de mot-clé
- 2 points : faute de grammaire, faux-sens partiel, confusion
- 1 point : erreur lexicale, orthographe, mal dit

2. Détermine quels points grammaticaux posent problème parmi : will have to, could have + pp, should have been, present perfect, if + past simple, passive voice, modals, etc.

3. Suggère des phrases similaires pour travailler les points défaillants.

Réponds en JSON STRICT :
{
  "score": 8,
  "severity": {
    "barbarism": ["erreur"],
    "omission": [],
    "grammar": ["erreur de grammaire"],
    "lexicon": [],
    "spelling": [],
    "other": []
  },
  "corrected": "Version corrigée",
  "reference": "Version parfaite",
  "grammar_rules": ["Règle 1", "Règle 2"],
  "tips": ["Conseil 1", "Conseil 2"],
  "weak_grammar_points": ["will have to", "passive voice"],
  "similar_sentences": ["Phrase 1 à travailler", "Phrase 2 à travailler"],
  "flashcard_rule": "Règle principale à retenir pour la flashcard"
}`,

  de: `Tu es un correcteur ECRICOME spécialisé en thèmes grammaticaux allemands. Analyse cette traduction selon la grille de notation et identifie les points grammaticaux défaillants (déclinaisons, ordre des mots, Konjunktiv II, etc.).

Réponds en JSON STRICT avec la même structure que l'anglais, plus :
{
  // ... structure de base ...
  "german_analysis": {
    "declension_errors": ["Erreur de déclinaison"],
    "word_order_errors": ["Erreur d'ordre"]
  }
}`,

  es: `Tu es un correcteur ECRICOME spécialisé en thèmes grammaticaux espagnols. Analyse cette traduction selon la grille de notation et identifie les points grammaticaux défaillants (subjonctif, ser/estar, por/para, etc.).

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
            content: `FR: ${french}\nLANGUE CIBLE: ${language}\nATTENDU: ${reference}\nPROPOSITION: ${student}\nPOINTS GRAMMATICAUX TRAVAILLÉS: ${grammar_points?.join(', ') || 'Non spécifiés'}` 
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
    
    const validatedOutput = {
      score: output.score || 0,
      severity: {
        barbarism: Array.isArray(output.severity?.barbarism) ? output.severity.barbarism : [],
        omission: Array.isArray(output.severity?.omission) ? output.severity.omission : [],
        grammar: Array.isArray(output.severity?.grammar) ? output.severity.grammar : [],
        lexicon: Array.isArray(output.severity?.lexicon) ? output.severity.lexicon : [],
        spelling: Array.isArray(output.severity?.spelling) ? output.severity.spelling : [],
        other: Array.isArray(output.severity?.other) ? output.severity.other : []
      },
      corrected: output.corrected || "Correction non disponible",
      reference: output.reference || reference,
      grammar_rules: Array.isArray(output.grammar_rules) ? output.grammar_rules : [],
      tips: Array.isArray(output.tips) ? output.tips : [],
      weak_grammar_points: Array.isArray(output.weak_grammar_points) ? output.weak_grammar_points : [],
      similar_sentences: similarSentences.slice(0, 3), // Max 3 phrases similaires
      flashcard_rule: output.flashcard_rule || "Règle à réviser",
      german_analysis: language === 'de' ? {
        declension_errors: Array.isArray(output.german_analysis?.declension_errors) ? output.german_analysis.declension_errors : [],
        word_order_errors: Array.isArray(output.german_analysis?.word_order_errors) ? output.german_analysis.word_order_errors : []
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
