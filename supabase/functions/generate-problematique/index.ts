import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

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
    const OPENAI_API_KEY = Deno.env.get('OPENAI_API_KEY');
    if (!OPENAI_API_KEY) {
      return new Response(JSON.stringify({ error: 'Clé API non configurée' }),
        { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    const { subject, mode } = await req.json();

    if (!subject || !subject.trim()) {
      return new Response(JSON.stringify({ error: 'Le champ "subject" est requis' }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
    }

    const isGeopolitics = mode === 'geopolitics';

    let prompt = '';
    let systemMessage = '';

    if (isGeopolitics) {
      systemMessage = 'Tu es un expert en géopolitique (HGGSP). Tu formules des problématiques précises et dialectiques.';
      prompt = `Tu es un expert en dissertation de Géopolitique pour les classes préparatoires ECG.
Ta mission : analyser un sujet de dissertation et formuler une problématique claire, percutante et dialectique.

SUJET À ANALYSER :
"${subject.trim()}"

INSTRUCTIONS POUR LA PROBLÉMATIQUE :
1. ANALYSE le sujet et IDENTIFIE les enjeux géopolitiques majeurs (Rivalités, Territoires, Puissance, Acteurs, Échelles).
2. FORMULE une problématique centrale sous forme de question.
3. La problématique doit mettre en tension le sujet (paradoxe, évolution, contradiction).
4. Elle doit permettre l'élaboration d'un plan en 2 ou 3 parties.
5. Elle doit être explicite et utiliser un vocabulaire géopolitique précis.

Réponds UNIQUEMENT avec la problématique formulée, sans introduction ni conclusion.`;
    } else {
      systemMessage = 'Tu es un expert en dissertation de Culture Générale pour les concours de prépa ECG.';
      prompt = `Tu es un expert en dissertation de Culture Générale (Lettres et Philosophie) pour les concours de prépa ECG.
Ta mission : analyser un sujet de dissertation et formuler une problématique claire, percutante et dialectique.

SUJET À ANALYSER :
"${subject.trim()}"

BASE DE CONNAISSANCES SUR LE CONCEPT DE "JUGER" :
... (Contexte "Juger" conservé implicitement ou tu peux le remettre si besoin, mais pour simplifier ici je garde le prompt original complet si possible, ou je le ré-injecte)
I. Ce que « juger » veut dire (opérations et portée)
• Opérer : attribuer, relier, qualifier (vrai/faux, juste/injuste, beau/laid), hiérarchiser.
• Comparer ou trancher ? Comparer prépare, trancher clôt. Le bon jugement sait quand s'arrêter.
• Juger ≠ condamner : sanctionner est un usage possible du jugement, pas son essence.
• Descartes : jugement = acte de la volonté appliquée à des idées plus ou moins claires. Risque majeur : l'assentiment précipité.
• Kant : juger = subsumer le particulier sous l'universel (entendement), et réfléchir sans concept prédonné (jugement réfléchissant, esthétique/téléologique).

II. Lignes de fracture conceptuelles
1. Juger / Comprendre / Décider (Comprendre explique ; juger évalue ; décider engage).
2. Juger / Connaître (Connaître établit du vrai ; juger valide une prétention).
3. Juger / Raisonner (Raisonner infère ; juger conclut).
4. Percevoir / Sentir / Juger.
5. Préjuger / Juger.

III. Typologie utile
De fait / de valeur ; Pratique (moral, politique, juridique) ; Singulier/Universel.

IV. Domaines d'exercice
Judiciaire (équité vs légalité), Moral, Politique, Social, Esthétique, Historique.

V. Obstacles et conditions
Obstacles : passions, intérêts, biais. Conditions : info, normes, courage, suspension.

INSTRUCTIONS POUR LA PROBLÉMATIQUE :
1. ANALYSE le sujet et IDENTIFIE les enjeux liés au concept de "juger".
2. FORMULE une problématique dialectique qui pose une tension conceptuelle.
3. La problématique doit commencer par "Comment...", "Dans quelle mesure...", "Faut-il..." ou formule similaire.
4. Elle doit intégrer au moins 2 aspects opposés du jugement.
5. Elle doit être FÉCONDE et PERTINENTE.

Réponds UNIQUEMENT avec la problématique formulée, sans explications supplémentaires.`;
    }

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${OPENAI_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          { role: 'system', content: systemMessage },
          { role: 'user', content: prompt },
        ],
        temperature: 0.6,
        max_tokens: 800,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(`Erreur OpenAI: ${response.status} - ${errorData.error?.message || 'Erreur inconnue'}`);
    }

    const data = await response.json();
    const problematique = data.choices?.[0]?.message?.content?.trim();

    if (!problematique) {
      throw new Error('La problématique générée est vide');
    }

    return new Response(JSON.stringify({ problematique }),
      { headers: { ...corsHeaders, 'Content-Type': 'application/json' } });

  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } });
  }
});
