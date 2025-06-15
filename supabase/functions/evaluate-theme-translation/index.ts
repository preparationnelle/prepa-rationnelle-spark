
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"
};

const openAIApiKey = Deno.env.get("OPENAI_API_KEY");

const PROMPTS = {
  en: `Tu es un correcteur ECRICOME spécialisé de thèmes grammaticaux anglais dans les concours d'entrée aux Grandes Écoles. 
Tu évalues la qualité d'une traduction française vers l'anglais. Reprends la grille suivante : 
- 4/4.5 = barbarisme, non-sens, charabia, franglais, omission de segment (traduction complètement fausse, non-naturelle ou calque total ou très grave omission)
- 3 = gros contresens ou faute majeure de grammaire ou omission de mot clé 
- 2 = faute de grammaire, faux-sens partiel, confusion
- 1 = erreur lexicale, mal dit, orthographe
Classe chaque erreur détectée dans une de ces catégories. 
Rends une note sur 10 : 10 correspond à une phrase parfaite, retire des points selon la gravité et le nombre (plusieurs erreurs possibles : priorité à la plus grave par groupe d'erreurs). 
Ensuite, fournis la version parfaite (référence), puis une version corrigée de la tentative élève, corrigée mais gardant autant que possible son vocabulaire/mots. 
Détaille pour chaque catégorie d'erreur trouvée ce qui n'allait pas. Liste enfin les règles grammaticales anglaises qui semblent fragiles. Ajoute 1-2 conseils personnalisés si possible.
Focus sur : temps verbaux, modaux, gérondif/infinitif, prépositions, articles.
RÉPONDRE OBLIGATOIREMENT EN JSON STRICT avec cette structure exacte :
{
  "score": 8,
  "severity": {
    "barbarism": ["exemple d'erreur"],
    "omission": [],
    "grammar": ["exemple de faute de grammaire"],
    "lexicon": [],
    "spelling": [],
    "other": []
  },
  "corrected": "Version corrigée de la traduction",
  "reference": "Version parfaite de référence",
  "grammar_rules": ["Règle 1", "Règle 2"],
  "tips": ["Conseil 1", "Conseil 2"]
}`,

  de: `Tu es un correcteur ECRICOME spécialisé de thèmes grammaticaux allemands dans les concours d'entrée aux Grandes Écoles. 
Tu évalues la qualité d'une traduction française vers l'allemand. Reprends la grille suivante : 
- 4/4.5 = barbarisme, non-sens, charabia, germanisme, omission de segment (traduction complètement fausse, non-naturelle ou calque total ou très grave omission)
- 3 = gros contresens ou faute majeure de grammaire ou omission de mot clé 
- 2 = faute de grammaire, faux-sens partiel, confusion
- 1 = erreur lexicale, mal dit, orthographe
Classe chaque erreur détectée dans une de ces catégories. 
Rends une note sur 10 : 10 correspond à une phrase parfaite, retire des points selon la gravité et le nombre (plusieurs erreurs possibles : priorité à la plus grave par groupe d'erreurs). 
Ensuite, fournis la version parfaite (référence), puis une version corrigée de la tentative élève, corrigée mais gardant autant que possible son vocabulaire/mots. 
Détaille pour chaque catégorie d'erreur trouvée ce qui n'allait pas. Liste enfin les règles grammaticales allemandes qui semblent fragiles. Ajoute 1-2 conseils personnalisés si possible.
ATTENTION SPÉCIALE ALLEMAND : 
- Déclinaisons (Nominatif, Accusatif, Datif, Génitif) : vérifie articles, adjectifs, pronoms
- Ordre des mots : verbe en 2e position, verbe à la fin dans subordonnées, particule séparable
- Temps : Perfekt vs Präteritum, subjonctif II
- Cas régi par prépositions et verbes
Ajoute une section "german_analysis" avec déclinaisons incorrectes et erreurs d'ordre des mots.
RÉPONDRE OBLIGATOIREMENT EN JSON STRICT avec cette structure exacte :
{
  "score": 8,
  "severity": {
    "barbarism": ["exemple d'erreur"],
    "omission": [],
    "grammar": ["exemple de faute de grammaire"],
    "lexicon": [],
    "spelling": [],
    "other": []
  },
  "corrected": "Version corrigée de la traduction",
  "reference": "Version parfaite de référence",
  "grammar_rules": ["Règle 1", "Règle 2"],
  "tips": ["Conseil 1", "Conseil 2"],
  "german_analysis": {
    "declension_errors": ["Erreur de déclinaison 1"],
    "word_order_errors": ["Erreur d'ordre 1"]
  }
}`,

  es: `Tu es un correcteur ECRICOME spécialisé de thèmes grammaticaux espagnols dans les concours d'entrée aux Grandes Écoles. 
Tu évalues la qualité d'une traduction française vers l'espagnol. Reprends la grille suivante : 
- 4/4.5 = barbarisme, non-sens, charabia, hispanisme, omission de segment (traduction complètement fausse, non-naturelle ou calque total ou très grave omission)
- 3 = gros contresens ou faute majeure de grammaire ou omission de mot clé 
- 2 = faute de grammaire, faux-sens partiel, confusion
- 1 = erreur lexicale, mal dit, orthographe
Classe chaque erreur détectée dans une de ces catégories. 
Rends une note sur 10 : 10 correspond à une phrase parfaite, retire des points selon la gravité et le nombre (plusieurs erreurs possibles : priorité à la plus grave par groupe d'erreurs). 
Ensuite, fournis la version parfaite (référence), puis une version corrigée de la tentative élève, corrigée mais gardant autant que possible son vocabulaire/mots. 
Détaille pour chaque catégorie d'erreur trouvée ce qui n'allait pas. Liste enfin les règles grammaticales espagnoles qui semblent fragiles. Ajoute 1-2 conseils personnalisés si possible.
Focus sur : subjonctif, ser/estar, por/para, concordance des temps, pronoms compléments.
RÉPONDRE OBLIGATOIREMENT EN JSON STRICT avec cette structure exacte :
{
  "score": 8,
  "severity": {
    "barbarism": ["exemple d'erreur"],
    "omission": [],
    "grammar": ["exemple de faute de grammaire"],
    "lexicon": [],
    "spelling": [],
    "other": []
  },
  "corrected": "Version corrigée de la traduction",
  "reference": "Version parfaite de référence",
  "grammar_rules": ["Règle 1", "Règle 2"],
  "tips": ["Conseil 1", "Conseil 2"]
}`
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  try {
    const { language, student, french, reference } = await req.json();
    
    console.log('Request received:', { language, student: student.substring(0, 50), french: french.substring(0, 50) });
    
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
          { role: "user", content: `FR: ${french}\nLANGUE CIBLE: ${language}\nATTENDU: ${reference}\nPROPOSITION: ${student}` }
        ],
        max_tokens: 1200,
        temperature: 0.1
      })
    });
    
    const completion = await completionRes.json();
    console.log('OpenAI response status:', completionRes.status);
    
    if (!completion.choices || !completion.choices[0] || !completion.choices[0].message) {
      throw new Error('Réponse OpenAI invalide');
    }
    
    const rawContent = completion.choices[0].message.content;
    console.log('Raw OpenAI content:', rawContent.substring(0, 200));
    
    let output;
    
    try {
      // Essayer de parser le JSON directement
      output = JSON.parse(rawContent);
      console.log('JSON parsed successfully');
    } catch (parseError) {
      console.log('JSON parse failed, trying to extract JSON from text:', parseError);
      
      // Essayer d'extraire le JSON du texte (au cas où il y aurait du texte avant/après)
      const jsonMatch = rawContent.match(/\{[\s\S]*\}/);
      if (jsonMatch) {
        try {
          output = JSON.parse(jsonMatch[0]);
          console.log('JSON extracted and parsed successfully');
        } catch (extractError) {
          console.log('JSON extraction failed:', extractError);
          throw new Error('Impossible de parser la réponse JSON');
        }
      } else {
        throw new Error('Aucun JSON trouvé dans la réponse');
      }
    }
    
    // Validation et création d'un fallback structuré
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
      german_analysis: language === 'de' ? {
        declension_errors: Array.isArray(output.german_analysis?.declension_errors) ? output.german_analysis.declension_errors : [],
        word_order_errors: Array.isArray(output.german_analysis?.word_order_errors) ? output.german_analysis.word_order_errors : []
      } : null
    };
    
    console.log('Final validated output:', JSON.stringify(validatedOutput, null, 2));
    
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
