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
  { n: "01", t: "Ciblez le bon membre du jury", d: "Le jury est toujours composé de 3 membres aux profils distincts. Identifiez qui est le mieux placé pour répondre à votre question et adressez-la-lui directement." },
  { n: "02", t: "Partez de votre profil ou projet", d: "Commencez par « Dans le cadre de mon projet… » ou « Étant donné mon intérêt pour… » — la question paraît ainsi personnalisée et ancrée dans votre parcours." },
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
      <div className="bg-red-50 border-l-4 border-red-600 rounded-r p-4 mb-4">
        <p className="font-medium text-carnet-ink mb-1">Le principe clé : cibler le bon membre</p>
        <p className="text-sm text-carnet-ink-soft">
          Le jury est toujours composé de <strong>3 membres</strong>. La question la plus percutante
          est celle que vous adressez <em>à la bonne personne</em> — soit un membre avec qui vous
          partagez un parcours ou un point d'accroche, soit celui qui a abordé un sujet précis
          pendant l'entretien et mérite votre retour.
        </p>
      </div>
      <p className="font-medium text-carnet-ink mb-2">Une bonne question démontre :</p>
      <ul className="space-y-2">
        {[
          ["Préparation sérieuse", "vous avez travaillé au-delà des brochures officielles."],
          ["Curiosité authentique", "vous voulez vraiment comprendre, pas juste remplir un silence."],
          ["Vision à long terme", "vous vous projetez déjà comme futur étudiant dans cette école."],
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

    <MethodSection label="Section 04" title="Stratégie : cibler le bon membre du jury" icon={AlertTriangle}>
      <p className="text-carnet-ink-soft mb-6">
        Le jury est toujours composé de <strong className="text-carnet-ink">3 membres</strong>.
        Votre question doit aller à la personne la plus légitime pour y répondre — pas au jury en général.
        Deux déclencheurs pour identifier qui interroger.
      </p>
      <div className="space-y-5 mb-8">
        {[
          {
            n: "01",
            t: "Un point abordé pendant l'entretien",
            d: "Si un membre a mentionné un sujet précis — un projet, une expérience, un point de vue — rebondissez dessus. C'est la question la plus naturelle et la plus forte.",
            ex: '"Vous avez évoqué tout à l\'heure la refonte du tronc commun — comment se traduit-elle concrètement pour un étudiant en 1re année ?"',
            tag: "Déclencheur principal",
          },
          {
            n: "02",
            t: "Un parcours ou profil partagé",
            d: "Si un membre vient du programme grande école, d'une spécialisation ou d'un secteur qui résonne avec votre projet, adressez-lui une question sur son expertise spécifique : campus, pédagogie, stratégie de l'école, débouchés dans son domaine.",
            ex: '"En tant que responsable du programme, comment voyez-vous la place des spécialisations face aux doubles diplômes ?"',
            tag: "Déclencheur alternatif",
          },
        ].map((item) => (
          <div key={item.n} className="bg-white border border-carnet-rule/30 border-l-4 border-l-red-600 rounded-r-lg p-6">
            <div className="flex items-center gap-3 mb-3">
              <span className="font-dm-serif text-3xl text-red-600 leading-none">{item.n}</span>
              <div>
                <span className="text-xs font-medium text-red-600 bg-red-50 px-2 py-0.5 rounded-full">{item.tag}</span>
                <h4 className="font-dm-serif text-lg text-carnet-ink mt-1">{item.t}</h4>
              </div>
            </div>
            <p className="text-sm text-carnet-ink-soft mb-3">{item.d}</p>
            <div className="bg-red-50 border-l-4 border-red-600 rounded-r p-3">
              <p className="text-sm text-carnet-ink-soft italic">Exemple : {item.ex}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-carnet-page border border-carnet-rule/40 rounded-lg p-6">
        <h4 className="font-dm-serif text-lg text-carnet-ink mb-4">Adapter la question selon le profil du membre</h4>
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              profil: "Responsable du programme / école",
              icon: "🎓",
              sujets: ["Stratégie pédagogique", "Évolution du programme", "Campus et vie académique", "Différenciation vs autres écoles"],
            },
            {
              profil: "Professionnel / DRH entreprise",
              icon: "💼",
              sujets: ["Débouchés dans son secteur", "Ce qu'il recherche dans un jeune diplômé", "Collaboration école-entreprise", "Compétences clés valorisées"],
            },
            {
              profil: "Alumni / ancien étudiant",
              icon: "🏛️",
              sujets: ["Vie de campus au quotidien", "Ce qu'il ferait différemment", "Associations ou moments marquants", "Conseil pour la 1re année"],
            },
          ].map((item) => (
            <div key={item.profil} className="bg-white border border-carnet-rule/30 rounded-lg p-4">
              <div className="text-2xl mb-2">{item.icon}</div>
              <h5 className="font-medium text-carnet-ink text-sm mb-3">{item.profil}</h5>
              <ul className="space-y-1">
                {item.sujets.map((s) => (
                  <li key={s} className="flex items-start gap-2 text-xs text-carnet-ink-soft">
                    <CheckCircle className="w-3.5 h-3.5 text-red-600 mt-0.5 flex-shrink-0" strokeWidth={1.8} />
                    {s}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </MethodSection>
  </MethodologyShell>
);

export default QuestionsAuJuryPage;
