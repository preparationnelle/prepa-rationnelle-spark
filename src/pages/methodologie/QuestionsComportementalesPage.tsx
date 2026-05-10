import React from 'react';
import { Star, CheckCircle, AlertTriangle, Target, Lightbulb, Users, Zap } from 'lucide-react';
import { MethodologyShell, MethodSection, MethodIntroCard } from '@/components/methodologie/MethodologyShell';

const starSteps = [
  { n: "S", t: "Situation", d: "Décrivez le contexte en 2-3 phrases : où, quand, avec qui, dans quel cadre. Soyez précis mais concis — cette étape ne doit pas dépasser 30 secondes." },
  { n: "T", t: "Task / Mission", d: "Quelle était votre mission, votre rôle, les objectifs à atteindre ? Montrez clairement votre niveau de responsabilité dans la situation." },
  { n: "A", t: "Action", d: "Quelles actions spécifiques avez-vous personnellement entreprises ? C'est le cœur de votre réponse — restez sur CE QUE VOUS avez fait, pas le groupe." },
  { n: "R", t: "Résultat", d: "Quel a été le résultat concret et mesurable ? Chiffres, impact, retours reçus. Un résultat chiffré multiplie par 3 l'impact de votre réponse." },
];

const categories = [
  {
    t: "Leadership & Initiative",
    qs: [
      '"Racontez une situation où vous avez pris une initiative."',
      '"Donnez un exemple de projet que vous avez lancé."',
      '"Comment avez-vous convaincu quelqu\'un de vous suivre ?"',
    ],
    keys: ["Montrez que vous avez agi sans être sollicité", "Valorisez l'impact collectif de votre initiative", "Mentionnez les obstacles surmontés en chemin"],
  },
  {
    t: "Gestion des conflits",
    qs: [
      '"Décrivez une situation de désaccord avec un collègue."',
      '"Comment avez-vous géré un conflit dans un groupe ?"',
      '"Parlez-moi d\'une décision difficile que vous avez dû prendre."',
    ],
    keys: ["Restez factuel et non émotionnel", "Montrez votre capacité d'écoute et d'empathie", "Valorisez la résolution, pas la victoire personnelle"],
  },
  {
    t: "Résilience & Échec",
    qs: [
      '"Parlez-moi d\'un échec et ce que vous en avez appris."',
      '"Décrivez un moment où vous avez dû vous adapter rapidement."',
      '"Comment avez-vous réagi face à une critique difficile ?"',
    ],
    keys: ["Choisissez un échec réel mais pas catastrophique", "L'apprentissage doit être plus présent que l'échec", "Montrez l'évolution concrète depuis cet épisode"],
  },
  {
    t: "Travail en équipe",
    qs: [
      '"Décrivez un projet mené en groupe."',
      '"Comment contribuez-vous à une équipe ?"',
      '"Parlez-moi d\'un succès collectif dont vous êtes fier."',
    ],
    keys: ["Montrez votre rôle spécifique au sein du groupe", "Valorisez la complémentarité des profils", "Ne vous attribuez pas tout le mérite du succès"],
  },
];

const exempleSTAR = {
  q: '"Parlez-moi d\'une situation où vous avez fait preuve de leadership."',
  s: "En terminale, j'étais responsable de l'organisation du gala de fin d'année — un événement réunissant 300 personnes avec un budget de 8 000€.",
  t: "Coordonner une équipe de 15 bénévoles, gérer les prestataires et assurer le bon déroulé de la soirée le jour J.",
  a: "J'ai mis en place des réunions hebdomadaires, réparti clairement les missions selon les compétences de chacun, et géré les imprévus — notamment un traiteur défaillant 3 jours avant l'événement que j'ai remplacé en 48h.",
  r: "L'événement a réuni 320 personnes, budget respecté à l'euro près. J'ai reçu les félicitations du proviseur et 90% de satisfaction dans le sondage post-événement.",
};

const QuestionsComportementalesPage = () => (
  <MethodologyShell
    moduleLabel="Méthodologie · Module 12"
    icon={Star}
    titlePrefix="Questions"
    titleAccent="Comportementales"
    intro="Maîtrisez la méthode STAR pour transformer vos expériences passées en arguments percutants et prouver vos compétences par des exemples concrets."
    cta={{
      title: "Préparez vos anecdotes avec un coach",
      text: "Nos coachs vous aident à identifier et structurer vos meilleures expériences pour maximiser l'impact en entretien.",
    }}
  >
    <MethodIntroCard icon={Lightbulb} title="Qu'est-ce qu'une question comportementale ?">
      <p className="mb-3">
        Les questions comportementales demandent de raconter des situations réelles passées pour
        prédire vos comportements futurs. Le principe : « le passé prédit l'avenir ». Le jury
        cherche des preuves concrètes, pas des déclarations d'intention.
      </p>
      <p className="font-medium text-pr-black mb-2">Reconnaître une question comportementale :</p>
      <ul className="space-y-2">
        {[
          ['"Parlez-moi d\'une situation où…"', "vous devez raconter un fait réel vécu."],
          ['"Donnez-moi un exemple de…"', "vous devez illustrer par une anecdote précise."],
          ['"Comment avez-vous géré…"', "vous devez décrire une action concrète passée."],
        ].map(([k, v]) => (
          <li key={k} className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-pr-orange mt-1 flex-shrink-0" strokeWidth={1.8} />
            <span><strong className="text-pr-black">{k}</strong> {v}</span>
          </li>
        ))}
      </ul>
    </MethodIntroCard>

    <MethodSection label="Section 01" title="La méthode STAR : votre structure universelle" icon={Target}>
      <p className="text-pr-gray-dark mb-6">Une grille en 4 étapes pour structurer n'importe quelle réponse comportementale en moins de 3 minutes.</p>
      <div className="space-y-4">
        {starSteps.map((s) => (
          <div key={s.n} className="bg-white border border-pr-gray-light border-l-4 border-l-pr-orange rounded-r-lg p-5 flex items-baseline gap-4">
            <span className="font-dm-serif text-3xl text-pr-orange leading-none w-8">{s.n}</span>
            <div>
              <h4 className="font-dm-serif text-lg text-pr-black mb-1">{s.t}</h4>
              <p className="text-sm text-pr-gray-dark">{s.d}</p>
            </div>
          </div>
        ))}
      </div>
    </MethodSection>

    <MethodSection label="Section 02" title="Les 4 grandes catégories de questions" icon={Users}>
      <div className="space-y-5">
        {categories.map((cat) => (
          <div key={cat.t} className="bg-white border border-pr-gray-light border-l-4 border-l-pr-orange rounded-r-lg p-6">
            <h4 className="font-dm-serif text-xl text-pr-black mb-5">{cat.t}</h4>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-pr-orange-dark bg-pr-orange-pale px-2 py-1 rounded">
                  Questions types
                </span>
                <ul className="mt-3 space-y-2 text-sm text-pr-gray-dark">
                  {cat.qs.map((q) => <li key={q}>— {q}</li>)}
                </ul>
              </div>
              <div>
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-pr-orange-dark bg-pr-orange-pale px-2 py-1 rounded">
                  Points clés à valoriser
                </span>
                <ul className="mt-3 space-y-2 text-sm text-pr-gray-dark">
                  {cat.keys.map((k) => (
                    <li key={k} className="flex items-start gap-2">
                      <CheckCircle className="w-4 h-4 text-pr-orange mt-0.5 flex-shrink-0" strokeWidth={1.8} />
                      {k}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MethodSection>

    <MethodSection label="Section 03" title="Exemple complet de réponse STAR" icon={Zap}>
      <div className="bg-white border border-pr-gray-light rounded-lg p-7">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-pr-orange-dark bg-pr-orange-pale px-2 py-1 rounded">
            Exemple Leadership
          </span>
        </div>
        <p className="text-sm text-pr-gray-mid mb-1 italic">— Question du jury :</p>
        <p className="font-dm-serif text-lg text-pr-black mb-6">{exempleSTAR.q}</p>
        <div className="space-y-4">
          {[
            { l: "S — Situation", c: exempleSTAR.s },
            { l: "T — Mission", c: exempleSTAR.t },
            { l: "A — Actions", c: exempleSTAR.a },
            { l: "R — Résultats", c: exempleSTAR.r },
          ].map(({ l, c }) => (
            <div key={l} className="bg-pr-orange-pale border-l-4 border-pr-orange rounded-r p-4">
              <p className="text-xs font-semibold uppercase tracking-wider text-pr-orange-dark mb-1">{l}</p>
              <p className="text-sm text-pr-gray-dark italic leading-relaxed">{c}</p>
            </div>
          ))}
        </div>
      </div>
    </MethodSection>

    <MethodSection label="Section 04" title="Erreurs classiques à éviter" icon={AlertTriangle}>
      <div className="grid md:grid-cols-2 gap-5">
        {[
          {
            t: "Problèmes de fond",
            l: [
              "Choisir une anecdote trop banale sans enjeu réel",
              'Utiliser le "nous" à la place du "je" — rôle flou',
              "Ne mentionner aucun résultat mesurable",
              "Inventer ou exagérer grossièrement l'expérience",
            ],
          },
          {
            t: "Problèmes de forme",
            l: [
              "Réponse trop longue (plus de 3 minutes)",
              "Rester dans le vague sans aucun détail concret",
              "Ne pas structurer la réponse — STAR ignoré",
              "Finir sans conclusion claire ni apprentissage",
            ],
          },
        ].map((g) => (
          <div key={g.t} className="bg-white border border-pr-gray-light rounded-lg p-6">
            <h4 className="font-dm-serif text-lg text-pr-black mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-pr-orange-dark" strokeWidth={1.8} />
              {g.t}
            </h4>
            <ul className="space-y-2 text-sm text-pr-gray-dark">
              {g.l.map((item) => <li key={item}>— {item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </MethodSection>
  </MethodologyShell>
);

export default QuestionsComportementalesPage;
