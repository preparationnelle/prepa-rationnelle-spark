import React from 'react';
import { ThumbsDown, CheckCircle, AlertTriangle, Target, Lightbulb, RefreshCw, Layers } from 'lucide-react';
import { MethodologyShell, MethodSection, MethodIntroCard } from '@/components/methodologie/MethodologyShell';

const structure = [
  { n: "01", t: "Nommez le défaut clairement", d: "Évitez les formules vagues comme « je suis perfectionniste ». Choisissez un défaut réel et spécifique que vous pouvez défendre." },
  { n: "02", t: "Expliquez la manifestation concrète", d: "Donnez un exemple précis où ce défaut s'est manifesté dans votre parcours. Le concret est toujours plus crédible." },
  { n: "03", t: "Montrez la prise de conscience", d: "Expliquez comment vous avez identifié ce défaut — souvent grâce à un feedback, une expérience ou une réflexion personnelle." },
  { n: "04", t: "Présentez les actions correctives", d: "Décrivez ce que vous faites concrètement pour le corriger. Un défaut sans plan d'amélioration inquiète le jury." },
  { n: "05", t: "Montrez les progrès", d: "Indiquez l'évolution concrète depuis que vous travaillez sur ce point. Cela prouve votre capacité de développement." },
];

const bons = [
  {
    defaut: "Impatience face aux décisions lentes",
    explication: "J'ai parfois du mal à accepter que les processus de décision collective prennent du temps, surtout quand j'estime avoir une solution claire.",
    correction: "J'ai appris à structurer des synthèses claires pour accélérer les décisions sans imposer ma vision, et à mieux accepter le rythme des autres.",
  },
  {
    defaut: "Difficulté à déléguer",
    explication: "Dans mes projets associatifs, j'avais tendance à tout vouloir contrôler par peur de la qualité insuffisante du travail des autres.",
    correction: "J'ai mis en place des briefs précis et des points d'avancement réguliers, ce qui m'a permis de déléguer avec confiance tout en maintenant la qualité.",
  },
  {
    defaut: "Tendance à trop m'investir",
    explication: "Je m'engage parfois au-delà du raisonnable, ce qui peut nuire à mon organisation globale quand plusieurs projets s'accumulent.",
    correction: "J'ai appris à prioriser avec des outils de planification et à dire non à des engagements supplémentaires quand ma charge est déjà pleine.",
  },
];

const mauvais = [
  ['"Je suis perfectionniste"', "Trop prévisible — tous les candidats le disent, aucun jury n'y croit plus."],
  ['"Je travaille trop"', "Variante du perfectionniste, perçue comme une tentative déguisée de valorisation."],
  ['"Je n\'ai pas vraiment de défauts"', "Manque flagrant de maturité et d'introspection — éliminatoire."],
  ['"Mon défaut c\'est que je suis trop ambitieux"', "Qualité déguisée en défaut — le jury le voit et le juge négativement."],
  ["Un défaut rédhibitoire pour le poste visé", "Ne jamais choisir un défaut incompatible avec les exigences du métier."],
] as const;

const ParlerDefautsPage = () => (
  <MethodologyShell
    moduleLabel="Méthodologie · Module 14"
    icon={ThumbsDown}
    titlePrefix="Parler de"
    titleAccent="ses Défauts"
    intro="Transformez la question la plus redoutée en moment de force : comment parler de vos faiblesses avec authenticité, maturité et intelligence stratégique."
    cta={{
      title: "Préparez vos réponses avec un coach",
      text: "Nos coachs vous aident à identifier les défauts les plus convaincants à présenter selon votre profil.",
    }}
  >
    <MethodIntroCard icon={Lightbulb} title="Pourquoi cette question est-elle un piège et une opportunité ?">
      <p className="mb-3">
        « Quels sont vos défauts ? » est l'une des questions les plus fréquentes et les plus mal répondues.
        Le jury ne cherche pas à vous éliminer — il teste votre capacité d'introspection, votre maturité
        et votre honnêteté. Une bonne réponse peut vous démarquer positivement.
      </p>
      <p className="font-medium text-pr-black mb-2">Ce que le jury évalue réellement :</p>
      <ul className="space-y-2">
        {[
          ["Honnêteté", "êtes-vous capable de vous remettre en question sincèrement ?"],
          ["Maturité", "avez-vous une conscience de vous-même suffisamment développée ?"],
          ["Capacité de progrès", "cherchez-vous activement à vous améliorer ?"],
        ].map(([k, v]) => (
          <li key={k} className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-pr-orange mt-1 flex-shrink-0" strokeWidth={1.8} />
            <span><strong className="text-pr-black">{k} :</strong> {v}</span>
          </li>
        ))}
      </ul>
    </MethodIntroCard>

    <MethodSection label="Section 01" title="Structure en 5 étapes pour une réponse parfaite" icon={Target}>
      <p className="text-pr-gray-dark mb-6">Une architecture qui transforme une faiblesse en preuve de maturité.</p>
      <div className="space-y-4">
        {structure.map((s) => (
          <div key={s.n} className="bg-white border border-pr-gray-light border-l-4 border-l-pr-orange rounded-r-lg p-5 flex items-baseline gap-4">
            <span className="font-dm-serif text-3xl text-pr-orange leading-none">{s.n}</span>
            <div>
              <h4 className="font-dm-serif text-lg text-pr-black mb-1">{s.t}</h4>
              <p className="text-sm text-pr-gray-dark">{s.d}</p>
            </div>
          </div>
        ))}
      </div>
    </MethodSection>

    <MethodSection label="Section 02" title="Exemples de réponses bien construites" icon={RefreshCw}>
      <div className="space-y-5">
        {bons.map((ex, i) => (
          <div key={i} className="bg-white border border-pr-gray-light rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-pr-orange-dark bg-pr-orange-pale px-2 py-1 rounded">
                Exemple {i + 1}
              </span>
            </div>
            <div className="space-y-3">
              <div className="bg-pr-orange-pale border-l-4 border-pr-orange rounded-r p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-pr-orange-dark mb-1">Le défaut</p>
                <p className="text-sm text-pr-gray-dark font-medium">{ex.defaut}</p>
              </div>
              <div className="bg-pr-gray-bg rounded p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-pr-orange-dark mb-1">Manifestation concrète</p>
                <p className="text-sm text-pr-gray-dark italic">{ex.explication}</p>
              </div>
              <div className="bg-pr-orange-pale border-l-4 border-pr-orange rounded-r p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-pr-orange-dark mb-1">Actions correctives</p>
                <p className="text-sm text-pr-gray-dark">{ex.correction}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MethodSection>

    <MethodSection label="Section 03" title="Réponses à bannir absolument" icon={AlertTriangle}>
      <div className="space-y-3">
        {mauvais.map(([rep, raison], i) => (
          <div key={i} className="bg-white border border-pr-gray-light rounded-lg p-4 flex items-start gap-4">
            <div className="font-dm-serif text-3xl text-pr-orange leading-none flex-shrink-0 w-12 text-center">
              {String(i + 1).padStart(2, '0')}
            </div>
            <div className="flex-1">
              <h5 className="font-medium text-pr-black mb-1">{rep}</h5>
              <p className="text-sm text-pr-gray-mid">{raison}</p>
            </div>
          </div>
        ))}
      </div>
    </MethodSection>

    <MethodSection label="Section 04" title="Combien de défauts présenter ?" icon={Layers}>
      <div className="bg-white border border-pr-gray-light rounded-lg p-7">
        <h4 className="font-dm-serif text-xl text-pr-black mb-2">La règle des 1 à 2 défauts</h4>
        <div className="h-px w-12 bg-pr-orange mb-6" />
        <div className="grid md:grid-cols-3 gap-5">
          {[
            { n: "1", t: "Si le jury demande « un défaut »", d: "Préparez en réalité 2 défauts bien structurés et choisissez le plus percutant selon le contexte de l'entretien." },
            { n: "2", t: "Si le jury demande « des défauts »", d: "Présentez-en 2 maximum, jamais 3 ou plus — vous risqueriez de vous noyer et de cumuler les points négatifs." },
            { n: "!", t: "Règle d'or", d: "Le deuxième défaut doit toujours être plus léger que le premier. Finissez sur une note de progression positive." },
          ].map((item) => (
            <div key={item.n} className="bg-pr-gray-bg rounded-lg p-5">
              <span className="font-dm-serif text-3xl text-pr-orange">{item.n}</span>
              <h5 className="font-medium text-pr-black mt-1 mb-2">{item.t}</h5>
              <p className="text-sm text-pr-gray-dark">{item.d}</p>
            </div>
          ))}
        </div>
      </div>
    </MethodSection>
  </MethodologyShell>
);

export default ParlerDefautsPage;
