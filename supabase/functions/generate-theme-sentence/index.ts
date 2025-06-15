
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"
};

// Pool de phrases (future : random plus large, txt ou db)
const POOL: Record<string, { french: string; reference: string; notes: string[] }[]> = {
  en: [
    {
      french: "Comme je n’ai pas vu mes parents depuis longtemps, j’irai passer le week-end prochain chez eux.",
      reference: "Since I haven't seen my parents for a long time, I'll spend next weekend at their place.",
      notes: ["proposition temporelle", "futur", "since", "double pronom"]
    },
    // ... Ajouter + de phrases/corpus, s'inspirer de la liste fournie ... 
  ],
  de: [
    {
      french: "Comme je n’ai pas vu mes parents depuis longtemps, j’irai passer le week-end prochain chez eux.",
      reference: "Da ich meine Eltern schon lange nicht mehr gesehen habe, werde ich das nächste Wochenende bei ihnen verbringen.",
      notes: ["Nebensatz", "Futur", "pronom"]
    }
    // ...
  ],
  es: [
    {
      french: "Comme je n’ai pas vu mes parents depuis longtemps, j’irai passer le week-end prochain chez eux.",
      reference: "Como hace mucho que no veo a mis padres, iré a pasar el próximo fin de semana con ellos.",
      notes: ["subordonnée", "futur", "pronom double"]
    }
    // ...
  ]
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  try {
    const { language } = await req.json();
    const pool = POOL[language] || POOL["en"];
    const phrase = pool[Math.floor(Math.random() * pool.length)];
    return new Response(JSON.stringify(phrase), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});
