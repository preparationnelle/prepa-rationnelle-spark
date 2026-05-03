import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";
import { retrieveContext, formatContextForPrompt } from './retrieval.ts';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
  'Access-Control-Allow-Methods': 'POST, OPTIONS',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();

    const openAIApiKey = Deno.env.get('OPENAI_API_KEY');
    if (!openAIApiKey) {
      console.error("Missing OPENAI_API_KEY");
      return new Response(
        JSON.stringify({ error: "Cle OPENAI_API_KEY manquante dans les secrets Supabase." }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    // Extract the latest user message for RAG retrieval
    const lastUserMessage = [...messages].reverse().find((m: { role: string; content: string }) => m.role === 'user');
    const queryText = lastUserMessage?.content || '';

    // Build conversation context from recent messages
    const recentContext = messages
      .slice(-4)
      .map((m: { content: string }) => m.content)
      .join(' ');

    // RAG: Retrieve relevant knowledge
    const retrievedContext = retrieveContext(queryText, recentContext);
    const contextBlock = formatContextForPrompt(retrievedContext);

    console.log(`[Atlas ECG] RAG: ${retrievedContext.definitions.length} defs, ${retrievedContext.glossary.length} glossary, ${retrievedContext.references.length} refs`);

    const systemPrompt = `Tu es Atlas ECG, un tuteur expert en Histoire, Geographie et Geopolitique du monde contemporain (HGG/HGGMC), specialement concu pour les etudiants de classe preparatoire ECG. Ton objectif est d'aider les etudiants a exceller aux concours (BCE/Ecricome).

## EXPERTISE & CONTENU
1. Tu as acces a l'integralite du programme officiel de 1ere et 2eme annee (Mondialisation, aires continentales, defis geopolitiques, France).
2. Tu maitrises la methodologie de la dissertation : accroche, definition des termes, problematique, plan detaille (3x3), et croquis de synthese.
3. Tu integres systematiquement des auteurs de reference (ex: Lacoste, Foucher, Badie, Nye, Carroue...), des concepts cles et des exemples precis.

## DIRECTIVES DE REPONSE
- Rigueur Academique : Ne reste jamais en surface. Reponds avec une analyse geopolitique (acteurs, enjeux, territoires, rapports de force).
- Si l'utilisateur pose une question de type FAQ (ex: "Comment gerer le temps?"), reponds avec des conseils concrets bases sur les rapports de jury des concours.
- Style : Formel, structure, et pedagogue. Utilise des connecteurs logiques.

## STRUCTURE TYPE D'UNE REPONSE DE CONTENU
1. Accroche/Contexte : Une date ou un fait d'actualite.
2. Definition & Enjeux : Pourquoi le sujet est-il crucial aujourd'hui?
3. Analyse Multi-scalaire : Analyse aux niveaux mondial, regional et local.
4. Reference : Citation d'un geographe ou d'un geopolitologue.

## REGLES
1. Tu tutoies l'etudiant
2. N'utilise JAMAIS de markdown gras (**texte**) ni italique (*texte*). Texte brut uniquement. C'est une règle stricte : aucun effet de style.
3. Utilise des tirets (-) pour les listes
4. Cite toujours les sources academiques quand tu mentionnes un concept ou un auteur
5. Si tu n'es pas sur d'une information, dis-le clairement
6. Tes réponses doivent être complètes et détaillées (pas de limite stricte de longueur), mais reste clair et va droit au but.
7. ILLUSTRE SYSTEMATIQUEMENT tes propos par des exemples précis et concrets.
8. Propose systematiquement des pistes de reflexion supplementaires

## BASE DE CONNAISSANCES (informations extraites du programme)
${contextBlock || 'Aucun contexte specifique retrouve pour cette question. Reponds avec tes connaissances generales en geopolitique ECG.'}

Utilise ces informations de la base de connaissances en priorite pour enrichir tes reponses. Cite les definitions exactes quand elles sont pertinentes. Mentionne les references bibliographiques correspondantes.`;

    const apiMessages = [
      { role: "system", content: systemPrompt },
      ...messages
    ];

    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 30000);

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${openAIApiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          model: 'gpt-4o-mini',
          messages: apiMessages,
          temperature: 0.6,
          max_tokens: 1000,
        }),
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ error: { message: 'Unknown error' } }));
        console.error("OpenAI API error:", errorData);
        return new Response(
          JSON.stringify({ error: `Erreur OpenAI: ${errorData.error?.message || 'Erreur API'}` }),
          { status: response.status, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      const data = await response.json();
      const text = data.choices?.[0]?.message?.content;

      if (!text) {
        console.error("No text generated:", data);
        return new Response(
          JSON.stringify({ error: "Aucune reponse generee par l'IA" }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      console.log(`[Atlas ECG] Reponse generee avec succes`);

      return new Response(
        JSON.stringify({ text }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    } catch (error) {
      clearTimeout(timeoutId);
      if (error.name === 'AbortError') {
        return new Response(
          JSON.stringify({ error: 'Timeout de la requete' }),
          { status: 408, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }
      throw error;
    }
  } catch (error) {
    console.error('Error in Atlas ECG assistant:', error);
    return new Response(
      JSON.stringify({ error: `Erreur serveur: ${error.message || 'Erreur inconnue'}` }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});
