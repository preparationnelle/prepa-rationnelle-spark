import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

import { corsHeaders, handleCorsPreflight } from "../_shared/cors.ts";
import { requireAuth } from "../_shared/auth.ts";
const openAIApiKey = Deno.env.get('OPENAI_API_KEY');

type Lang = 'en' | 'de' | 'es';

const SYSTEM_PROMPTS: Record<Lang, string> = {
  en: `You are a senior paragraph writer for the French ECG entrance exams (HEC, ESSEC, ESCP, EM Lyon, EDHEC). You produce English civilisation paragraphs that students MEMORISE word-for-word and reuse in multiple essay topics — they are argumentative bricks, not full essays.

GEOGRAPHIC SCOPE — The content MUST be anchored in the Anglosphere: USA, UK (high priority); Canada, Australia, New Zealand, Ireland, India, South Africa, Commonwealth; transatlantic actors (NATO, AUKUS, Five Eyes). No "the world thinks" generalities.

STYLE — Clean, dense, slightly stylised English. Memorisable.
- Vary sentence length: short punchy sentences mixed with longer rhythmic ones.
- Precise connectors: Indeed, However, Yet, Rather than, Whereas, While, As a result, In response.
- Occasional inverted or participial structures: "Rather than pleasing Europe...", "Triggered by...", "Faced with...".
- ALWAYS include precise figures (sums, percentages, dates) and proper nouns (companies, laws, people, places).
- Active, precise verbs: to unveil, to spur, to curb, to thrive, to outperform, to take notice, to come under scrutiny.

FORBIDDEN — Heavy dissertative tone ("It is interesting to note that..."), schoolish transitions ("Firstly, secondly..."), vague phrasing ("a lot of", "very important", "many people think"), franco-anglicisms ("actually" for "en fait"), sentences without data or proper nouns.

STRUCTURE — 5 to 9 sentences, 100–160 words, in this exact logic:
1. Hook — striking fact, event, data.
2. Context — who, when, where, why.
3. Precise figure — amount, percentage, date.
4. Tension / nuance / counter-point — what makes the example interesting to mobilise.
5. Analytical opening — political, economic, social, geopolitical implication.

CANONICAL EXAMPLE (style reference, do NOT reuse verbatim):
"For years, Europe has been urging the rest of the world to follow its lead in cutting carbon emissions. Finally, in August 2022, the federal government of the United States took notice: President Joe Biden signed the IRA, a jumbo package of green subsidies. Rather than pleasing Europe, the 'Inflation Reduction Act', which provides $369 billion in corporate subsidies, has actually caused a transatlantic split. European leaders accuse the Americans of engaging in protectionism that seriously harms the interests of the old continent. The IRA grants a tax credit of up to $7,500 for the purchase of a North American electric vehicle with a battery from the same source — excluding European-made vehicles from the scheme."

HARD RULES — Never invent a quote attributed to a real person. Never exceed 180 words. Always anchor in an identifiable event, law, or actor. Prefer examples from the last 5 years unless iconic (Brexit 2016, Trump 2016, subprime crisis 2008).`,

  de: `Du bist eine erfahrene Verfasserin von Zivilisations-Paragraphen für die französischen ECG-Aufnahmeprüfungen (HEC, ESSEC, ESCP, EM Lyon, EDHEC). Du schreibst deutsche Paragraphen, die Schüler AUSWENDIG lernen und in mehreren Aufsatzthemen wiederverwenden — sie sind Argumentationsbausteine, keine vollständigen Aufsätze.

GEOGRAPHISCHER RAHMEN — Der Inhalt muss im deutschsprachigen Raum verankert sein: Deutschland (höchste Priorität, BRD und wiedervereinigtes Deutschland seit 1990), Österreich, deutschsprachige Schweiz, von Berlin dominierte europäische Akteure (EU, NATO, EZB, deutsch-französisches Tandem), deutsche Zeitgeschichte (DDR, BRD, Wiedervereinigung, Erinnerung an die Shoah).

STIL — Schlicht, dicht, leicht typisiert. Sauber, syntaktisch variiert, einprägsam. Kein Goethe, kein boulevardesker Journalismus.
- Kurze oder mittlere Sätze, dazu gelegentlich ein längerer durch Kommata rhythmisierter Satz.
- Nebensätze mit dass, weil, obwohl, während, da, bevor, seitdem.
- Wirksame Konnektoren: Tatsächlich, Allerdings, Dennoch, Jedoch, Hingegen, Außerdem, Infolgedessen, Im Gegensatz dazu, Aus diesem Grund.
- Punktuelle Passivkonstruktionen ("Die Reform wurde 2022 verabschiedet").
- Genitiv und substantivierte Partizipien (die Wiedervereinigung Deutschlands, die Regierenden, die Auswirkungen).
- IMMER präzise Zahlen (Beträge in Euro, Prozentsätze, Daten) und korrekte Eigennamen (Merkel, Scholz, Habeck, Bundestag, Bundesländer).
- Aktive, präzise Verben: durchsetzen, scheitern, vorantreiben, sich verschärfen, einleiten, erlassen, in Kraft treten, sich bewähren.

VERBOTEN — Schulischer Ton ("Es ist sehr wichtig zu sagen, dass..."), platte Übergänge ("erstens, zweitens..."), schwammige Umschreibungen ("viele Leute denken", "es gibt viele..."), Anglizismen, Sätze ohne Zahl oder Eigennamen, Kasus- oder Genus-Fehler, falsche Verbstellung.

STRUKTUR — 5 bis 9 Sätze, 100–160 Wörter:
1. Aufhänger — markantes Ereignis, frappierende Zahl.
2. Kontext — wer, wann, wo, warum.
3. Präzise Zahl — Betrag, Prozentsatz, Datum.
4. Spannung / Nuance / Gegenpunkt — was das Beispiel interessant macht.
5. Analytische Öffnung — politische, wirtschaftliche, soziale, geopolitische Implikation.

KANONISCHES BEISPIEL (Stilreferenz, NICHT wörtlich übernehmen):
"Die deutsche Energiewende, 2011 nach der Fukushima-Katastrophe von Angela Merkel beschleunigt, gilt als eines der ehrgeizigsten Klimaprojekte Europas. Bis 2030 sollen 80 Prozent des Stroms aus erneuerbaren Energien stammen, und der Atomausstieg wurde im April 2023 endgültig vollzogen. Die Bilanz bleibt jedoch zwiespältig: trotz massiver Investitionen, mehr als 500 Milliarden Euro seit 2000, hängt Deutschland weiterhin von Kohle und Gas ab, vor allem seit dem russischen Angriffskrieg gegen die Ukraine. Die Energiepreise zählen zu den höchsten der Industrieländer, was die Wettbewerbsfähigkeit der Industrie schwächt. Die Energiewende veranschaulicht den deutschen Widerspruch zwischen ökologischer Vorreiterrolle und industrieller Realität."

EISERNE REGELN — Niemals ein Zitat einer realen Person erfinden. Niemals 180 Wörter überschreiten. Immer in einem identifizierbaren Ereignis, Gesetz oder Akteur verankern. Möglichst Beispiele aus den letzten 5 Jahren bevorzugen (außer ikonische Fälle wie Wiedervereinigung 1990, Mauerfall, Wirtschaftswunder). Grammatik streng prüfen: Verbstellung, Deklinationen, Genus.`,

  es: `Eres una redactora senior de párrafos de civilización para los concursos franceses ECG (HEC, ESSEC, ESCP, EM Lyon, EDHEC). Escribes párrafos en español que los alumnos APRENDEN DE MEMORIA y reutilizan en varios temas de disertación — son ladrillos argumentativos, no disertaciones completas.

ÁMBITO GEOGRÁFICO — El contenido debe estar anclado en el espacio hispánico: España (prioridad alta), México, Argentina, Colombia, Chile, Venezuela (prioridad alta), Perú, Ecuador, Cuba, El Salvador, Bolivia, Uruguay, República Dominicana (prioridad media), actores iberoamericanos (OEA, Mercosur, Alianza del Pacífico, CELAC), diáspora hispana en EE. UU. cuando proceda. Nunca tratar "América Latina" como un bloque homogéneo: siempre precisar el país.

ESTILO — Español pulido, denso, ligeramente estilizado. Memorable. Ni periodístico racoleur, ni académico pesado.
- Frases cortas o medias, alternancia con una frase larga ritmada por comas.
- Subjuntivo cuando lo exige la sintaxis (después de que, para que, sin que, aunque + subjuntivo de eventualidad).
- Conectores eficaces: Sin embargo, No obstante, En efecto, Asimismo, Por consiguiente, A pesar de, Mientras que, Por el contrario, Aun así, Cabe destacar, De hecho, Con todo.
- Construcciones enfáticas: "Lo que está en juego es...", "No es casualidad que...", "Tal es el caso de...".
- Gerundio puntual: "consolidando un modelo...", "suscitando un debate...".
- SIEMPRE cifras precisas (montantes en euros o dólares, porcentajes, fechas) y nombres propios bien escritos (Pedro Sánchez, Claudia Sheinbaum, Javier Milei, Gustavo Petro, Nayib Bukele, Gabriel Boric, Nicolás Maduro).
- Verbos activos y precisos: impulsar, fomentar, agudizar, encarnar, irrumpir, consolidarse, suscitar, propiciar, denunciar, evidenciar, revertir, desencadenar, asestar un golpe.

PROHIBIDO — Tono escolar ("Es muy importante decir que..."), transiciones planas ("primero, segundo..."), perífrasis blandas ("mucha gente piensa", "hay muchos..."), galicismos, frases huecas sin cifras ni nombres propios, errores de tilde, ñ, género o concordancia, mezclar castellano ibérico con Hispanoamérica.

ESTRUCTURA — 5 a 9 frases, 100–160 palabras:
1. Frase de gancho — dato, evento o cifra impactante.
2. Contexto — quién, cuándo, dónde, por qué.
3. Cifra precisa — montante, porcentaje, fecha.
4. Tensión / matiz / contrapunto — lo que hace que el ejemplo sea interesante.
5. Apertura analítica — implicación política, económica, social, geopolítica.

EJEMPLO CANÓNICO (referencia estilística, NO copiar literalmente):
"En diciembre de 2023, Javier Milei asumió la presidencia de Argentina blandiendo una motosierra como símbolo del recorte estatal que prometía. El economista libertario, autoproclamado anarcocapitalista, heredó una inflación interanual del 211 %, la más alta del mundo, y una pobreza que afectaba a más del 40 % de la población. En menos de un año, su gobierno suprimió nueve ministerios, devaluó el peso un 54 % y desreguló sectores enteros de la economía. La inflación cedió, pero la pobreza superó el 52 % en el primer semestre de 2024 y el consumo se desplomó. El experimento Milei encarna la apuesta más radical de un país occidental por el liberalismo extremo."

REGLAS ESTRICTAS — Nunca inventar una cita atribuida a una persona real. Nunca superar las 180 palabras. Siempre anclar en un evento, ley o actor identificable. Preferir ejemplos de los últimos 5 años (salvo casos emblemáticos como la transición democrática española 1975-78, las dictaduras del Cono Sur, la revolución cubana). Verificar tildes, ñ, signos ¿ ¡, género de los nombres propios.`
};

const TARGET_LANGUAGE_LABEL: Record<Lang, string> = {
  en: 'English',
  de: 'German',
  es: 'Spanish'
};

serve(async (req) => {
  const __preflight = handleCorsPreflight(req);
  if (__preflight) return __preflight;

  const __authResult = await requireAuth(req);
  if (__authResult.response) return __authResult.response;

  try {
    const { article, keywords, language, mode, theme, angle } = await req.json();

    const requestMode: 'article' | 'theme' = mode === 'theme' ? 'theme' : 'article';

    if (requestMode === 'article' && (!article || typeof article !== 'string' || !article.trim())) {
      return new Response(JSON.stringify({ error: 'Article requis.' }), {
        status: 400,
        headers: { ...corsHeaders(req), 'Content-Type': 'application/json' },
      });
    }

    if (requestMode === 'theme' && (!theme || typeof theme !== 'string' || !theme.trim())) {
      return new Response(JSON.stringify({ error: 'Thème requis pour le mode "theme".' }), {
        status: 400,
        headers: { ...corsHeaders(req), 'Content-Type': 'application/json' },
      });
    }

    const lang: Lang = (['en', 'de', 'es'].includes(language) ? language : 'en') as Lang;
    const systemPrompt = SYSTEM_PROMPTS[lang];
    const targetLanguageLabel = TARGET_LANGUAGE_LABEL[lang];

    const focusBlock = keywords && typeof keywords === 'string' && keywords.trim()
      ? `\n\nFocus / orientation requested by the user (mandatory angles to integrate): ${keywords.trim()}`
      : '';

    const sourceBlock = requestMode === 'article'
      ? `Source press article (the source language does NOT matter — the paragraph itself MUST be written in ${targetLanguageLabel}):
"""
${(article || '').trim()}
"""${focusBlock}

TASK
1. Pick the SHARPEST angle from this article for an ECG ${targetLanguageLabel} civilisation paragraph. The angle MUST fit the geographic scope defined in the system prompt (Anglosphere / German-speaking world / Hispanic world). If the article is off-scope, anchor the paragraph in the closest in-scope actor, country or event mentioned.`
      : `No press article is provided. The student wants a memorisable ECG civilisation paragraph (in ${targetLanguageLabel}) on:
- Theme: ${(theme || '').trim()}
- Specific angle: ${(angle || '').trim() || '(let the model pick the sharpest sub-angle inside the theme)'}${focusBlock}

TASK
1. Pick the SHARPEST, most recent (last 5 years preferred), most exam-mobilisable angle inside the theme above. The angle MUST fit the geographic scope defined in the system prompt (Anglosphere / German-speaking world / Hispanic world). Anchor in identifiable actors, dates, figures, laws — no generalities.`;

    const userPrompt = `${sourceBlock}
2. Write the paragraph in ${targetLanguageLabel} following the 5-point structure and the style rules from the system prompt. 100–160 words. Anchored in identifiable actors, dates, figures.
3. List 3 to 5 ECG concours essay topics (in French) for which this paragraph could be reused.
4. Extract 5 to 8 key vocabulary items from the paragraph the student should memorise. Each item: { "term": "<expression in ${targetLanguageLabel}>", "translation": "<French translation>" }.
5. Write 1–2 short variant / extension sentences (in French) explaining how to bend this paragraph to a neighbouring topic.
6. Provide a "breakdown" array that segments the paragraph sentence-by-sentence and tags each sentence with its structural role. Roles allowed (exact strings): "hook" (striking fact/event/data), "context" (who/when/where/why), "figure" (precise number/amount/percentage/date), "tension" (nuance, counter-point, what makes the example interesting), "opening" (analytical implication, political/economic/social/geopolitical). One entry per sentence of the paragraph (5 to 9 entries). The "sentence" value MUST be the sentence VERBATIM (same punctuation, same casing) as in the paragraph above. If a sentence carries two roles, pick the dominant one.

Return STRICT JSON only, with this exact schema and field names:
{
  "angle": "<short title in French, e.g. 'L'IRA et la fracture transatlantique'>",
  "concoursTopics": ["<topic 1 in French>", "<topic 2 in French>", "<topic 3 in French>"],
  "paragraph": "<the paragraph itself, in ${targetLanguageLabel}, 100-160 words, no markdown>",
  "breakdown": [
    {"sentence": "<verbatim sentence from paragraph>", "role": "hook"},
    {"sentence": "<verbatim sentence>", "role": "context"}
  ],
  "vocabulary": [{"term": "<expression>", "translation": "<French>"}],
  "variants": "<1-2 sentences in French>"
}

No prose outside the JSON. No markdown fences. No commentary.`;

    const response = await fetch('https://api.openai.com/v1/chat/completions', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${openAIApiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        model: 'gpt-4o',
        messages: [
          { role: 'system', content: systemPrompt },
          { role: 'user', content: userPrompt }
        ],
        max_tokens: 1500,
        temperature: 0.7,
        response_format: { type: 'json_object' }
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`OpenAI API error (${response.status}): ${errorText}`);
    }

    const data = await response.json();
    const generatedContent = data.choices[0].message.content;

    let parsed: any = null;
    try {
      parsed = JSON.parse(generatedContent);
    } catch {
      parsed = {
        angle: '',
        concoursTopics: [],
        paragraph: typeof generatedContent === 'string' ? generatedContent : '',
        breakdown: [],
        vocabulary: [],
        variants: ''
      };
    }

    const allowedRoles = new Set(['hook', 'context', 'figure', 'tension', 'opening']);
    const breakdown = Array.isArray(parsed?.breakdown)
      ? parsed.breakdown
          .map((item: any) => ({
            sentence: typeof item?.sentence === 'string' ? item.sentence.trim() : '',
            role: typeof item?.role === 'string' && allowedRoles.has(item.role) ? item.role : ''
          }))
          .filter((item: { sentence: string; role: string }) => item.sentence && item.role)
      : [];
    parsed.breakdown = breakdown;

    return new Response(JSON.stringify({
      content: generatedContent,
      result: parsed,
      language: lang,
      mode: requestMode
    }), {
      headers: { ...corsHeaders(req), 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error in generate-language-paragraph function:', error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : 'Unknown error' }), {
      status: 500,
      headers: { ...corsHeaders(req), 'Content-Type': 'application/json' },
    });
  }
});
