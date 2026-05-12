import React from 'react';
import { Globe, CheckCircle, AlertCircle, Lightbulb, MapPin, Briefcase, GraduationCap, Users, Star } from 'lucide-react';
import { MethodologyShell, MethodSection, MethodIntroCard } from '@/components/methodologie/MethodologyShell';

const formes = [
  {
    n: '01',
    t: 'Le stage à l\'étranger',
    icon: Briefcase,
    d: "C'est la forme la plus valorisée car elle combine international et expérience professionnelle concrète. Elle démontre votre capacité à travailler dans un autre contexte culturel et linguistique — pas seulement à y vivre.",
    liens: [
      { q: '"Parlez-moi de votre projet professionnel"', a: "Le stage à l'international peut être une étape dans votre trajectoire — il renforce une expertise sectorielle dans un marché étranger." },
      { q: '"Pourquoi cette école ?"', a: "Si l'école a des partenariats avec des entreprises dans votre pays cible, c'est un lien direct et crédible." },
      { q: '"Vous parlez de l\'international — qu\'est-ce que ça veut dire concrètement pour vous ?"', a: "Répondez avec le stage : pays, secteur, ce que vous avez appris professionnellement." },
    ],
  },
  {
    n: '02',
    t: 'Le semestre d\'échange',
    icon: GraduationCap,
    d: "Un échange académique dans une université partenaire. L'argument clé n'est pas de « découvrir une culture » — c'est de choisir des cours introuvables en France, de travailler en contexte académique international, et de comprendre comment une discipline est enseignée ailleurs.",
    liens: [
      { q: '"Pourquoi cette école ?"', a: "Citez les partenariats spécifiques qui correspondent à votre cible géographique ou académique." },
      { q: '"Comment envisagez-vous vos 3 ans ?"', a: "Intégrez l'échange dans votre feuille de route avec une logique : avant ou après votre stage stratégique." },
      { q: '"Qu\'est-ce que vous apporterait l\'international ?"', a: "Parlez de la confrontation à d'autres méthodes de travail, d'une perspective différente sur votre discipline, pas du tourisme." },
    ],
  },
  {
    n: '03',
    t: 'Les campus à l\'étranger',
    icon: MapPin,
    d: "Plusieurs écoles ont des campus permanents (Paris, Singapour, Berlin, São Paulo, Rabat…). C'est un argument fort car il montre que vous connaissez l'école en profondeur — pas seulement son classement, mais son déploiement géographique réel.",
    liens: [
      { q: '"Pourquoi cette école et pas une autre ?"', a: "Mentionner un campus spécifique en lien avec votre projet montre une préparation sérieuse." },
      { q: '"Vous parlez d\'ambition internationale — comment vous projetez-vous ?"', a: "Un campus à São Paulo ou à Singapour ancre votre projet dans des marchés concrets, pas abstraits." },
    ],
    exemples: [
      { e: 'ESCP', c: 'Campus à Paris, Berlin, Madrid, Turin, Varsovie, Londres — fort ancrage européen à citer, surtout le double diplôme franco-allemand ou franco-espagnol.' },
      { e: 'ESSEC', c: 'Campus à Singapour (Asia Pacific) et à Rabat — ESSEC Asia-Pacific est une référence pour les projets orientés Asie.' },
      { e: 'SKEMA', c: 'Campus à Paris, Sophia Antipolis, Lille, São Paulo, Raleigh (USA), Suzhou (Chine), Belo Horizonte, Dubaï.' },
      { e: 'KEDGE', c: 'Campus à Bordeaux, Marseille, Paris, Toulon, Shanghai, Dakar.' },
    ],
  },
  {
    n: '04',
    t: 'La double culture comme ressource',
    icon: Users,
    d: "Si vous avez grandi entre deux pays, avec des parents de nationalités différentes, ou vécu à l'étranger pendant plusieurs années, c'est une ressource à part entière — pas un simple détail biographique.",
    liens: [
      { q: '"Qui êtes-vous ?"', a: "Votre double culture construit votre identité — parlez du recul qu'elle vous donne, de la capacité à naviguer entre des codes différents." },
      { q: '"Qu\'est-ce qui vous différencie ?"', a: "Une perspective biculturelle est rare. Elle donne une capacité d'adaptation et une lecture différente des situations — ce que les entreprises internationales recherchent." },
      { q: '"Comment travaillez-vous en équipe ?"', a: "La double culture développe une intelligence des contextes et une sensibilité aux malentendus culturels — citez un exemple concret." },
    ],
  },
];

const piegesToAvoid = [
  {
    p: '"J\'aime voyager et découvrir de nouvelles cultures"',
    explication: "C'est la réponse la plus banale qui soit. Le jury l'entend 20 fois par jour. Tout le monde aime voyager. Ce n'est pas un argument professionnel — c'est du tourisme.",
    alternative: "Remplacez par un projet concret : un marché que vous voulez comprendre, une langue que vous travaillez pour l'exercer professionnellement, un secteur qui existe différemment dans un autre pays.",
  },
  {
    p: '"Je veux m\'ouvrir à l\'international"',
    explication: '"S\'ouvrir" ne veut rien dire. C\'est vague, passif et démontre que vous n\'avez pas encore réfléchi à ce que l\'international représente dans votre projet.',
    alternative: "Soyez précis : quel pays, quel secteur, pourquoi ce marché a quelque chose à vous apprendre que la France n'a pas. L'international doit être une étape logique, pas une aspiration floue.",
  },
  {
    p: '"J\'ai fait un voyage au Japon et j\'ai adoré la culture"',
    explication: "Un séjour touristique, aussi enrichissant soit-il personnellement, n'est pas de l'expérience internationale au sens professionnel. Le jury ne cherche pas de la curiosité — il cherche de l'adaptabilité dans le travail.",
    alternative: "Si vous n'avez pas d'expérience professionnelle à l'étranger, parlez d'un échange scolaire, d'un projet académique en langue étrangère, ou d'un contact professionnel ou associatif avec des personnes d'autres pays.",
  },
  {
    p: '"Je veux aller à l\'international pour me forger un réseau mondial"',
    explication: "Cela sonne creux et opportuniste. Le réseau est une conséquence de votre engagement, pas un objectif en soi.",
    alternative: "Parlez de ce que vous allez apporter et apprendre dans ce contexte, pas de ce que vous allez en tirer.",
  },
];

const escpFocus = {
  titre: "Focus ESCP : l'ancrage européen comme argument stratégique",
  intro: "L'ESCP est la seule grande école de commerce au monde à avoir des campus permanents dans 6 pays européens. Cet ancrage n'est pas anecdotique — il structure le programme et l'identité de l'école.",
  points: [
    { t: "Le Master in Management est pan-européen par construction", d: "Les étudiants ESCP passent obligatoirement par au moins deux campus dans deux pays différents. Ce n'est pas une option — c'est l'ADN du programme." },
    { t: "Citez des spécificités nationales", d: "Berlin pour le management germanique et la rigueur opérationnelle, Madrid pour les marchés hispaniques et l'Amérique Latine, Turin pour le design et l'industrie, Varsovie pour l'Europe centrale émergente, Londres pour la finance et l'écosystème startup post-Brexit." },
    { t: "L'Europe comme territoire de projet", d: "Si votre projet professionnel touche un pays européen ou un marché transfrontalier, c'est l'argument le plus direct pour justifier le choix de l'ESCP. Soyez précis : quel campus, pourquoi ce marché, comment ça s'inscrit dans votre trajectoire." },
  ],
};

const InternationalPage = () => (
  <MethodologyShell
    moduleLabel="Méthodologie · Module 18"
    icon={Globe}
    titlePrefix="Parler de l'"
    titleAccent="International"
    intro="L'international est un des rares sujets où vous pouvez relier en une seule réponse votre personnalité, votre projet professionnel et l'école. C'est un levier stratégique — à condition de l'utiliser avec précision."
    cta={{
      title: 'Travaillez votre argument international',
      text: 'Nos coachs vous aident à construire un discours cohérent sur l\'international, ancré dans votre projet et adapté à chaque école.',
    }}
  >
    <MethodIntroCard icon={Lightbulb} title="Pourquoi l'international est un levier clé">
      <p className="mb-3">
        Parler de l'international vous permet de toucher les trois piliers d'un entretien de
        personnalité en une seule réponse :
      </p>
      <div className="grid sm:grid-cols-3 gap-3 mb-4">
        {[
          { n: '01', t: 'Vous', d: 'Votre personnalité, vos expériences, ce qui vous a construit.' },
          { n: '02', t: 'Votre projet', d: 'Pourquoi l\'international est une étape logique dans votre trajectoire professionnelle.' },
          { n: '03', t: 'L\'école', d: 'Comment les ressources spécifiques de l\'école (campus, partenariats, échanges) servent votre projet.' },
        ].map((p) => (
          <div key={p.n} className="bg-red-50 border border-red-100 rounded-lg p-4">
            <div className="font-dm-serif text-2xl text-red-600 mb-1">{p.n}</div>
            <div className="font-semibold text-carnet-ink text-sm mb-1">{p.t}</div>
            <p className="text-xs text-carnet-ink-soft leading-relaxed">{p.d}</p>
          </div>
        ))}
      </div>
      <p className="text-sm text-carnet-ink-soft">
        C'est rare d'avoir un seul sujet qui fait ce travail. Mais pour que ça fonctionne,
        il faut que les trois niveaux soient présents et cohérents — pas juste "j'aime voyager".
      </p>
    </MethodIntroCard>

    <MethodSection label="Section 01" title="Les 4 formes d'expérience internationale" icon={Globe}>
      <div className="space-y-6">
        {formes.map((f) => {
          const Icon = f.icon;
          return (
            <div key={f.n} className="bg-white border border-carnet-rule/30 rounded-2xl p-6 hover:border-red-200 hover:shadow-md transition-all duration-300">
              <div className="flex items-start gap-4 mb-4">
                <span className="font-dm-serif text-4xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pr-black leading-none flex-shrink-0">{f.n}</span>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <Icon className="w-4 h-4 text-red-600 flex-shrink-0" strokeWidth={1.8} />
                    <h4 className="font-dm-serif text-xl text-carnet-ink">{f.t}</h4>
                  </div>
                  <div className="h-px w-10 bg-red-500 mb-3" />
                  <p className="text-sm text-carnet-ink-soft leading-relaxed">{f.d}</p>
                </div>
              </div>

              {f.exemples && (
                <div className="mb-4 bg-carnet-paper rounded-lg p-4 border border-carnet-rule/20">
                  <p className="text-xs font-semibold uppercase tracking-wider text-carnet-ink-mute mb-3">Exemples par école</p>
                  <div className="space-y-2">
                    {f.exemples.map((ex) => (
                      <div key={ex.e} className="flex items-start gap-3">
                        <span className="font-semibold text-red-600 text-sm flex-shrink-0 w-14">{ex.e}</span>
                        <p className="text-xs text-carnet-ink-soft leading-relaxed">{ex.c}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="space-y-3">
                <p className="text-xs font-semibold uppercase tracking-wider text-carnet-ink-mute">Comment l'utiliser en entretien</p>
                {f.liens.map((l) => (
                  <div key={l.q} className="bg-carnet-paper p-3 rounded-lg border border-carnet-rule/20">
                    <p className="text-xs font-medium text-carnet-ink mb-1">{l.q}</p>
                    <p className="text-xs text-carnet-ink-soft leading-relaxed">{l.a}</p>
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </MethodSection>

    <MethodSection label="Section 02" title="Focus ESCP : l'ancrage européen" icon={Star}>
      <div className="bg-white border border-carnet-rule/30 border-l-4 border-l-red-600 rounded-r-2xl p-6">
        <h4 className="font-dm-serif text-xl text-carnet-ink mb-2">{escpFocus.titre}</h4>
        <div className="h-px w-10 bg-red-500 mb-4" />
        <p className="text-sm text-carnet-ink-soft leading-relaxed mb-5">{escpFocus.intro}</p>
        <div className="space-y-4">
          {escpFocus.points.map((pt) => (
            <div key={pt.t} className="flex items-start gap-3">
              <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" strokeWidth={1.8} />
              <div>
                <p className="font-semibold text-sm text-carnet-ink mb-1">{pt.t}</p>
                <p className="text-sm text-carnet-ink-soft leading-relaxed">{pt.d}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MethodSection>

    <MethodSection label="Section 03" title="Pièges à éviter absolument" icon={AlertCircle}>
      <div className="space-y-4">
        {piegesToAvoid.map((item, i) => (
          <div key={i} className="bg-white border border-carnet-rule/30 border-l-4 border-l-red-500 rounded-r-2xl p-5">
            <h4 className="font-dm-serif text-lg text-carnet-ink mb-2">"{item.p}"</h4>
            <p className="text-sm text-carnet-ink-mute mb-3 leading-relaxed">
              <span className="font-semibold text-red-700 uppercase text-[10px] tracking-wider">Pourquoi ça ne marche pas · </span>
              {item.explication}
            </p>
            <p className="text-sm text-carnet-ink-soft leading-relaxed">
              <span className="font-semibold text-red-700 uppercase text-[10px] tracking-wider">À la place · </span>
              {item.alternative}
            </p>
          </div>
        ))}
      </div>
    </MethodSection>

    <MethodSection label="Section 04" title="Construire votre argument international" icon={GraduationCap}>
      <p className="text-carnet-ink-soft mb-6">
        Un argument international solide répond à ces quatre questions. Si vous ne pouvez pas répondre
        à l'une d'elles, votre argument n'est pas encore prêt.
      </p>
      <div className="space-y-4 mb-8">
        {[
          { n: '01', q: 'Quel pays ou marché ?', d: "Pas \"l'Asie\" — mais le Japon pour son industrie automobile de précision, ou Singapour comme hub régional pour votre secteur cible. La précision montre que vous avez réfléchi, pas rêvé." },
          { n: '02', q: 'Pourquoi ce pays est pertinent pour votre projet ?', d: "Quel avantage ce marché vous donne-t-il que la France ne peut pas vous donner ? Expertise sectorielle, langue, réseau, méthodes de travail différentes ?" },
          { n: '03', q: 'Quelle forme concrète prenez-vous votre expérience internationale ?', d: "Stage, échange, campus, double culture. Être précis sur la forme évite de sonner vague." },
          { n: '04', q: 'Comment cette école vous permet-elle de le réaliser ?', d: "Partenaire universitaire, campus dédié, programme bilingue, réseau alumni dans ce pays. La boucle se boucle : vous → votre projet → l'école." },
        ].map((item) => (
          <div key={item.n} className="bg-white border border-carnet-rule/30 rounded-2xl p-5 flex items-start gap-4 hover:border-red-200 hover:shadow-sm transition-all duration-300">
            <span className="font-dm-serif text-3xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pr-black leading-none flex-shrink-0">{item.n}</span>
            <div>
              <h4 className="font-dm-serif text-lg text-carnet-ink mb-1">{item.q}</h4>
              <p className="text-sm text-carnet-ink-soft leading-relaxed">{item.d}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-red-100 bg-gradient-to-br from-red-50/80 to-orange-50/40 p-6 shadow-sm">
        <div className="flex items-center gap-3 mb-4">
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-red-700 bg-white border border-red-100 px-2.5 py-1 rounded-full">
            Exemple complet
          </span>
          <h4 className="font-dm-serif text-lg text-carnet-ink">ESCP · Projet Finance d'entreprise</h4>
        </div>
        <div className="space-y-2 text-sm text-carnet-ink-soft leading-relaxed">
          <p><span className="font-semibold text-red-700">Vous :</span> "J'ai eu la chance de grandir avec un père allemand et une mère française — j'ai été exposé très tôt aux différences de culture d'entreprise entre les deux pays."</p>
          <p><span className="font-semibold text-red-700">Projet :</span> "Mon projet est de travailler en M&A dans un contexte franco-allemand ou européen — un secteur où la capacité à travailler en plusieurs langues et à naviguer entre des cultures de négociation différentes est déterminante."</p>
          <p><span className="font-semibold text-red-700">École :</span> "Le campus de Berlin de l'ESCP, et plus précisément le module de management franco-allemand, est une des rares formations qui traite ce sujet comme un avantage concurrentiel plutôt qu'une curiosité culturelle."</p>
        </div>
      </div>
    </MethodSection>
  </MethodologyShell>
);

export default InternationalPage;
