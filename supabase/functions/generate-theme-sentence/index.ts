
import "https://deno.land/x/xhr@0.1.0/mod.ts";
import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type"
};

// Pool enrichi avec 15 phrases par langue, variées en structure grammaticale
const POOL: Record<string, { french: string; reference: string; notes: string[] }[]> = {
  en: [
    {
      french: "Comme je n’ai pas vu mes parents depuis longtemps, j’irai passer le week-end prochain chez eux.",
      reference: "Since I haven't seen my parents for a long time, I'll spend next weekend at their place.",
      notes: ["proposition temporelle", "futur", "since", "double pronom"]
    },
    {
      french: "Si j'avais su que le bus serait en retard, je serais parti plus tard.",
      reference: "If I had known the bus would be late, I would have left later.",
      notes: ["conditionnel passé", "hypothétique", "si"]
    },
    {
      french: "Il faut que tu finisses ton travail avant de sortir ce soir.",
      reference: "You have to finish your work before going out tonight.",
      notes: ["subjonctif", "obligation", "avant de"]
    },
    {
      french: "Malgré la pluie, ils décidèrent de continuer leur promenade.",
      reference: "Despite the rain, they decided to continue their walk.",
      notes: ["malgré", "prétérit", "structure contrastive"]
    },
    {
      french: "Je préfère que tu viennes avec nous demain.",
      reference: "I prefer that you come with us tomorrow.",
      notes: ["préférence", "subjonctif", "demande"]
    },
    {
      french: "À peine étaient-ils arrivés que la réunion commença.",
      reference: "Hardly had they arrived when the meeting started.",
      notes: ["inversion", "hardly", "past perfect", "when"]
    },
    {
      french: "Bien qu'il soit tard, elle a continué à travailler.",
      reference: "Although it was late, she kept working.",
      notes: ["although", "malgré", "structure concessive"]
    },
    {
      french: "C’est la plus belle ville que j’aie jamais vue.",
      reference: "It's the most beautiful city I have ever seen.",
      notes: ["superlatif", "present perfect", "ever"]
    },
    {
      french: "Il est probable qu’il viendra à la fête ce soir.",
      reference: "He is likely to come to the party tonight.",
      notes: ["likely to", "probabilité", "structure modale"]
    },
    {
      french: "En me promenant, j’ai rencontré un vieil ami.",
      reference: "While walking, I met an old friend.",
      notes: ["gérondif", "while", "passé composé"]
    },
    {
      french: "Plus tu étudies, meilleurs seront tes résultats.",
      reference: "The more you study, the better your results will be.",
      notes: ["comparatif", "the more... the better", "futur"]
    },
    {
      french: "Il s’est fait voler son portefeuille dans le métro.",
      reference: "He had his wallet stolen on the subway.",
      notes: ["have something done", "voix causative"]
    },
    {
      french: "Ce livre dont je t’ai parlé est passionnant.",
      reference: "This book I told you about is fascinating.",
      notes: ["proposition relative", "whose/that", "structure"]
    },
    {
      french: "Il n’a pas pu venir à cause des grèves.",
      reference: "He couldn’t come because of the strikes.",
      notes: ["because of", "inability", "cause"]
    },
    {
      french: "Peu importe ce qu’il dira, je resterai ici.",
      reference: "No matter what he says, I will stay here.",
      notes: ["no matter what", "futur", "subordination"]
    }
  ],
  de: [
    {
      french: "Comme je n’ai pas vu mes parents depuis longtemps, j’irai passer le week-end prochain chez eux.",
      reference: "Da ich meine Eltern schon lange nicht mehr gesehen habe, werde ich das nächste Wochenende bei ihnen verbringen.",
      notes: ["Nebensatz", "Futur", "Zeitangabe"]
    },
    {
      french: "Si j'avais su que le bus serait en retard, je serais parti plus tard.",
      reference: "Wenn ich gewusst hätte, dass der Bus verspätet sein würde, wäre ich später losgegangen.",
      notes: ["Konditionalsatz", "Konjunktiv II", "Vergangenheit"]
    },
    {
      french: "Il faut que tu finisses ton travail avant de sortir ce soir.",
      reference: "Du musst deine Arbeit beenden, bevor du heute Abend ausgehst.",
      notes: ["Modalität", "Bevor", "Abfolge"]
    },
    {
      french: "Malgré la pluie, ils décidèrent de continuer leur promenade.",
      reference: "Trotz des Regens beschlossen sie, ihren Spaziergang fortzusetzen.",
      notes: ["Trotz", "Hauptsatz", "Entscheidung"]
    },
    {
      french: "Je préfère que tu viennes avec nous demain.",
      reference: "Ich ziehe es vor, dass du morgen mit uns kommst.",
      notes: ["Präferenz", "Subjektivsatz"]
    },
    {
      french: "À peine étaient-ils arrivés que la réunion commença.",
      reference: "Kaum waren sie angekommen, begann die Besprechung.",
      notes: ["Kaum...als", "Vergangenheit", "Inversion"]
    },
    {
      french: "Bien qu'il soit tard, elle a continué à travailler.",
      reference: "Obwohl es spät ist, hat sie weitergearbeitet.",
      notes: ["Obwohl", "Konjunktion", "Gegenwart/Vergangenheit"]
    },
    {
      french: "C’est la plus belle ville que j’aie jamais vue.",
      reference: "Es ist die schönste Stadt, die ich je gesehen habe.",
      notes: ["Superlativ", "Relativsatz", "je...gesehen"]
    },
    {
      french: "Il est probable qu’il viendra à la fête ce soir.",
      reference: "Es ist wahrscheinlich, dass er heute Abend zur Party kommt.",
      notes: ["Wahrscheinlichkeit", "dass-Satz"]
    },
    {
      french: "En me promenant, j’ai rencontré un vieil ami.",
      reference: "Während ich spazieren ging, habe ich einen alten Freund getroffen.",
      notes: ["Während", "Präteritum", "Begegnung"]
    },
    {
      french: "Plus tu étudies, meilleurs seront tes résultats.",
      reference: "Je mehr du lernst, desto besser werden deine Ergebnisse sein.",
      notes: ["Je...desto", "Vergleich", "Futur"]
    },
    {
      french: "Il s’est fait voler son portefeuille dans le métro.",
      reference: "Ihm wurde seine Brieftasche in der U-Bahn gestohlen.",
      notes: ["Passiv", "Dativ", "Raub"]
    },
    {
      french: "Ce livre dont je t’ai parlé est passionnant.",
      reference: "Das Buch, von dem ich dir erzählt habe, ist spannend.",
      notes: ["Relativsatz", "von dem", "Beschreibung"]
    },
    {
      french: "Il n’a pas pu venir à cause des grèves.",
      reference: "Er konnte wegen der Streiks nicht kommen.",
      notes: ["Kausal", "wegen", "Modalität"]
    },
    {
      french: "Peu importe ce qu’il dira, je resterai ici.",
      reference: "Egal was er sagt, ich werde hier bleiben.",
      notes: ["Egal was", "Futur", "Subordination"]
    }
  ],
  es: [
    {
      french: "Comme je n’ai pas vu mes parents depuis longtemps, j’irai passer le week-end prochain chez eux.",
      reference: "Como hace mucho que no veo a mis padres, iré a pasar el próximo fin de semana con ellos.",
      notes: ["subordinada temporal", "futuro", "como"]
    },
    {
      french: "Si j'avais su que le bus serait en retard, je serais parti plus tard.",
      reference: "Si hubiera sabido que el autobús se retrasaría, habría salido más tarde.",
      notes: ["condicional pasado", "si", "pluscuamperfecto"]
    },
    {
      french: "Il faut que tu finisses ton travail avant de sortir ce soir.",
      reference: "Tienes que terminar tu trabajo antes de salir esta noche.",
      notes: ["obligación", "antes de", "estructura infinitiva"]
    },
    {
      french: "Malgré la pluie, ils décidèrent de continuer leur promenade.",
      reference: "A pesar de la lluvia, decidieron seguir con su paseo.",
      notes: ["a pesar de", "pretérito", "estructura concesiva"]
    },
    {
      french: "Je préfère que tu viennes avec nous demain.",
      reference: "Prefiero que vengas con nosotros mañana.",
      notes: ["subjuntivo", "preferencia", "futuro"]
    },
    {
      french: "À peine étaient-ils arrivés que la réunion commença.",
      reference: "Apenas llegaron cuando empezó la reunión.",
      notes: ["apenas...cuando", "pasado", "temporal"]
    },
    {
      french: "Bien qu'il soit tard, elle a continué à travailler.",
      reference: "Aunque era tarde, siguió trabajando.",
      notes: ["aunque", "concesiva", "pasado"]
    },
    {
      french: "C’est la plus belle ville que j’aie jamais vue.",
      reference: "Es la ciudad más bonita que he visto jamás.",
      notes: ["superlativo", "jamás", "haber visto"]
    },
    {
      french: "Il est probable qu’il viendra à la fête ce soir.",
      reference: "Es probable que venga a la fiesta esta noche.",
      notes: ["probabilidad", "subjuntivo", "futuro"]
    },
    {
      french: "En me promenant, j’ai rencontré un vieil ami.",
      reference: "Paseando, me encontré con un viejo amigo.",
      notes: ["gerundio", "encuentro", "pasado"]
    },
    {
      french: "Plus tu étudies, meilleurs seront tes résultats.",
      reference: "Cuanto más estudies, mejores serán tus resultados.",
      notes: ["cuanto más...mejor", "comparativo", "futuro"]
    },
    {
      french: "Il s’est fait voler son portefeuille dans le métro.",
      reference: "Le robaron la cartera en el metro.",
      notes: ["pasiva refleja", "robar", "lugar"]
    },
    {
      french: "Ce livre dont je t’ai parlé est passionnant.",
      reference: "El libro del que te hablé es apasionante.",
      notes: ["relativa", "del que", "descripción"]
    },
    {
      french: "Il n’a pas pu venir à cause des grèves.",
      reference: "No pudo venir por las huelgas.",
      notes: ["causa", "por", "imposibilidad"]
    },
    {
      french: "Peu importe ce qu’il dira, je resterai ici.",
      reference: "No importa lo que diga, me quedaré aquí.",
      notes: ["no importa", "futuro", "subordinada"]
    }
  ]
};

serve(async (req) => {
  if (req.method === "OPTIONS") return new Response(null, { headers: corsHeaders });
  try {
    const { language, history } = await req.json();
    const pool = POOL[language] || POOL["en"];
    // Si historique fourni, filtrer le pool pour ne pas répéter
    let available = pool;
    if (Array.isArray(history) && history.length > 0) {
      available = pool.filter(p =>
        !history.includes(p.reference)
      );
    }
    // Si toutes les phrases ont été utilisées, on repart de zéro
    if (available.length === 0) available = pool;
    const phrase = available[Math.floor(Math.random() * available.length)];
    return new Response(JSON.stringify(phrase), { headers: { ...corsHeaders, "Content-Type": "application/json" } });
  } catch (e) {
    return new Response(JSON.stringify({ error: e.message }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
  }
});
