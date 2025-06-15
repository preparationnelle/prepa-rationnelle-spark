
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
La sortie sera du JSON strict!`,

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
Ajoute une section "Analyse spécialisée allemand" avec déclinaisons incorrectes et erreurs d'ordre des mots.
La sortie sera du JSON strict!`,

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
La sortie sera du JSON strict!`
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  try {
    const { language, student, french, reference } = await req.json();
    
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
        max_tokens: 800,
        temperature: 0.1
      })
    });
    
    const completion = await completionRes.json();
    let output;
    
    try {
      output = JSON.parse(completion.choices[0].message.content);
    } catch {
      // fallback brute : clean le texte et parse basique (si le modèle s'emmêle)
      output = {
        score: 0,
        severity: { barbarism: [], omission: [], grammar: [], lexicon: [], spelling: [], other: [] },
        corrected: "Erreur de correction",
        reference,
        grammar_rules: [],
        tips: ["La sortie n'est pas exploitable. Merci de réessayer."]
      };
    }
    
    return new Response(JSON.stringify(output), { 
      headers: { ...corsHeaders, "Content-Type": "application/json" } 
    });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { 
      status: 500, 
      headers: { ...corsHeaders, "Content-Type": "application/json" } 
    });
  }
});
