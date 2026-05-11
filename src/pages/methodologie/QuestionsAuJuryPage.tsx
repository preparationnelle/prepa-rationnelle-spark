import React from 'react';
import { HelpCircle, CheckCircle, AlertTriangle, Target, Lightbulb, Sparkles, XCircle } from 'lucide-react';
import { MethodologyShell, MethodSection, MethodIntroCard } from '@/components/methodologie/MethodologyShell';

const categories = [
  {
    t: "Questions sur la pédagogie",
    icon: "🎓",
    qs: [
      "Comment évolue le programme sur les 3 prochaines années ?",
      "Quelle est la place de l'entrepreneuriat dans le cursus ?",
      "Comment se passe la transition entre la 1re et la 2e année ?",
      "Quels sont les cours qui différencient vraiment cette école des autres ?",
    ],
  },
  {
    t: "Questions sur l'international",
    icon: "🌍",
    qs: [
      "Quelle est la durée moyenne des séjours à l'international ?",
      "Quels sont les partenariats les plus recherchés par les étudiants ?",
      "Est-il possible de faire une double diplomation tout en restant sur le campus principal ?",
      "Quelle place tient l'anglais dans le quotidien des cours ?",
    ],
  },
  {
    t: "Questions sur la vie étudiante",
    icon: "🏛️",
    qs: [
      "Quel type de profil réussit le mieux dans cette école selon votre expérience ?",
      "Comment se structurent les associations les plus actives sur le campus ?",
      "Quel conseil donneriez-vous à un étudiant pour réussir sa première année ?",
      "Y a-t-il des événements annuels qui marquent particulièrement la vie de campus ?",
    ],
  },
  {
    t: "Questions sur les débouchés",
    icon: "💼",
    qs: [
      "Quels secteurs recrutent le plus vos diplômés ces dernières années ?",
      "Comment l'école accompagne-t-elle les étudiants dans leur recherche de stage ?",
      "Quelle est la force du réseau alumni dans le secteur [votre secteur cible] ?",
      "Y a-t-il des entreprises partenaires qui interviennent régulièrement dans les cours ?",
    ],
  },
];

const structure = [
  { n: "01", t: "Posez 2 à 3 questions maximum", d: "Au-delà, vous monopolisez le temps et semblez ne pas savoir quoi demander. La qualité prime sur la quantité." },
  { n: "02", t: "Partez de votre profil ou projet", d: "Commencez par « Dans le cadre de mon projet… » ou « Étant donné mon intérêt pour… » — la question paraît ainsi personnalisée." },
  { n: "03", t: "Montrez que vous avez cherché", d: "Référencez ce que vous avez déjà lu ou trouvé : « J'ai vu sur le site que… mais j'aimerais comprendre comment cela fonctionne en pratique. »" },
  { n: "04", t: "Écoutez vraiment la réponse", d: "Prenez des notes si possible, rebondissez sur ce que dit le jury — cela crée un vrai dialogue et laisse une forte impression finale." },
];

const bans = [
  ['"Non, tout était très clair, merci."', "Signal de désintérêt total — ne terminez jamais un entretien sans poser au moins une question."],
  ["Questions trouvables en 30 secondes sur le site", 'Montre un manque de préparation — évitez tout ce qui est dans le "À propos" de l\'école.'],
  ['"Quelles sont mes chances d\'admission ?"', "Inapproprié et embarrassant pour le jury qui ne peut pas répondre à ça."],
  ['"Vous proposez des notes de frais pour les sorties ?"', "Questions sur les avantages matériels — à bannir absolument."],
  ['"Ma question est un peu bête mais…"', "Ne vous excusez jamais avant une question — cela dévalue immédiatement ce qui suit."],
] as const;

const QuestionsAuJuryPage = () => (
  <MethodologyShell
    moduleLabel="Méthodologie · Module 16"
    icon={HelpCircle}
    titlePrefix="Vos Questions"
    titleAccent="au Jury"
    intro="Terminez chaque entretien sur une note forte : les questions que vous posez au jury révèlent autant votre personnalité que vos réponses."
    cta={{
      title: "Préparez un entretien complet",
      text: "Nos coachs vous aident à préparer des questions percutantes adaptées à chaque école cible.",
    }}
  >
    <MethodIntroCard icon={Lightbulb} title="Pourquoi cette étape est cruciale ?">
      <p className="mb-3">
        « Avez-vous des questions ? » conclut presque tous les entretiens. Répondre « non » est l'une
        des erreurs les plus fréquentes et les plus préjudiciables. Vos questions montrent votre
        curiosité, votre préparation et votre envie réelle d'intégrer l'école.
      </p>
      <p className="font-medium text-carnet-ink mb-2">Une bonne question démontre :</p>
      <ul className="space-y-2">
        {[
          ["Préparation sérieuse", "vous avez travaillé au-delà des brochures officielles."],
          ["Curiosité authentique", "vous voulez vraiment comprendre, pas juste remplir un silence."],
          ["Vision à long terme", "vous vous projetez déjà comme étudiant dans cette école."],
        ].map(([k, v]) => (
          <li key={k} className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" strokeWidth={1.8} />
            <span><strong className="text-carnet-ink">{k} :</strong> {v}</span>
          </li>
        ))}
      </ul>
    </MethodIntroCard>

    <MethodSection label="Section 01" title="4 catégories de questions à préparer" icon={Target}>
      <div className="space-y-5">
        {categories.map((cat) => (
          <div key={cat.t} className="bg-white border border-carnet-rule/30 border-l-4 border-l-red-600 rounded-r-lg p-6">
            <h4 className="font-dm-serif text-xl text-carnet-ink mb-4">{cat.t}</h4>
            <ul className="space-y-2 text-sm text-carnet-ink-soft">
              {cat.qs.map((q) => (
                <li key={q} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" strokeWidth={1.8} />
                  {q}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </MethodSection>

    <MethodSection label="Section 02" title="Comment bien poser ses questions" icon={Sparkles}>
      <p className="text-carnet-ink-soft mb-6">Quatre principes pour transformer cette étape en avantage concurrentiel.</p>
      <div className="space-y-4">
        {structure.map((s) => (
          <div key={s.n} className="bg-white border border-carnet-rule/30 border-l-4 border-l-red-600 rounded-r-lg p-5 flex items-baseline gap-4">
            <span className="font-dm-serif text-3xl text-red-600 leading-none">{s.n}</span>
            <div>
              <h4 className="font-dm-serif text-lg text-carnet-ink mb-1">{s.t}</h4>
              <p className="text-sm text-carnet-ink-soft">{s.d}</p>
            </div>
          </div>
        ))}
      </div>
    </MethodSection>

    <MethodSection label="Section 03" title="Questions à bannir absolument" icon={XCircle}>
      <div className="space-y-3">
        {bans.map(([question, raison], i) => (
          <div key={i} className="bg-white border border-carnet-rule/30 rounded-lg p-4 flex items-start gap-4">
            <div className="font-dm-serif text-3xl text-red-600 leading-none flex-shrink-0 w-12 text-center">
              {String(i + 1).padStart(2, '0')}
            </div>
            <div className="flex-1">
              <h5 className="font-medium text-carnet-ink mb-1">{question}</h5>
              <p className="text-sm text-carnet-ink-mute">{raison}</p>
            </div>
          </div>
        ))}
      </div>
    </MethodSection>

    <MethodSection label="Section 04" title="Stratégie : 3 questions universelles" icon={AlertTriangle}>
      <div className="grid md:grid-cols-3 gap-5">
        {[
          {
            n: "01",
            t: "La question personnelle au jury",
            q: '"Quel a été votre meilleur souvenir d\'étudiant dans cette école ?"',
            d: "Humanise l'échange, crée une connexion émotionnelle forte et vous donne des informations uniques sur la vie de campus.",
          },
          {
            n: "02",
            t: "La question sur l'évolution",
            q: '"Comment le programme a-t-il évolué ces 3 dernières années pour répondre aux transformations du monde professionnel ?"',
            d: "Montre votre vision stratégique et votre intérêt pour une école qui se renouvelle.",
          },
          {
            n: "03",
            t: "La question conseil",
            q: '"Quel conseil donneriez-vous à un étudiant entrant pour tirer le maximum de ses 3 ans ici ?"',
            d: "Prouve que vous vous projetez déjà comme futur étudiant et valorise l'expertise du jury.",
          },
        ].map((item) => (
          <div key={item.n} className="bg-white border border-carnet-rule/30 rounded-lg p-6">
            <span className="font-dm-serif text-3xl text-red-600">{item.n}</span>
            <h4 className="font-dm-serif text-lg text-carnet-ink mt-1 mb-3">{item.t}</h4>
            <div className="bg-red-50 border-l-4 border-red-600 rounded-r p-3 mb-3">
              <p className="text-sm text-carnet-ink-soft italic">{item.q}</p>
            </div>
            <p className="text-sm text-carnet-ink-soft">{item.d}</p>
          </div>
        ))}
      </div>
    </MethodSection>
  </MethodologyShell>
);

export default QuestionsAuJuryPage;
