import React from 'react';
import { Zap, CheckCircle, AlertTriangle, Target, Lightbulb, Shield, MessageSquare } from 'lucide-react';
import { MethodologyShell, MethodSection, MethodIntroCard } from '@/components/methodologie/MethodologyShell';

const types = [
  { n: "01", t: "Questions paradoxales", d: '« Si vous êtes si bien, pourquoi postulez-vous ici et pas à HEC ? » — cherche à voir si vous vous déstabilisez ou si vous gardez le cap.' },
  { n: "02", t: "Questions provocatrices", d: '« Votre dossier est moyen, qu\'est-ce qui vous fait penser que vous méritez une place ? » — teste votre résistance et votre confiance en vous.' },
  { n: "03", t: "Questions absurdes", d: '« Si vous étiez un animal, lequel seriez-vous ? » — évalue votre créativité, votre réactivité et votre capacité à rester calme face à l\'inattendu.' },
  { n: "04", t: "Questions-pièges rhétoriques", d: '« Vous dites que vous aimez le travail d\'équipe, mais d\'après votre CV vous semblez très solitaire, non ? » — cherche une contradiction à exploiter.' },
];

const method = [
  { n: "01", t: "Ne pas réagir immédiatement", d: "Prenez 2-3 secondes. Le silence court est perçu comme de la maturité, pas de la faiblesse. Respirez." },
  { n: "02", t: "Reformuler sans accepter le piège", d: "« Ce que je comprends de votre question… » — recadrez avant de répondre, sans accepter les prémisses fausses." },
  { n: "03", t: "Répondre avec assurance", d: "Donnez une réponse directe et assumée. L'hésitation aggrave la situation, la clarté rassure le jury." },
  { n: "04", t: "Rebondir positivement", d: "Transformez l'attaque en opportunité de montrer une qualité. « Cette question me permet justement de vous montrer que… »" },
];

const exemples = [
  {
    q: '"Votre projet professionnel me semble très flou et peu réaliste."',
    bad: "Bredouiller des excuses, accepter la critique, s'effondrer.",
    good: "« Je comprends ce que vous voulez dire. Permettez-moi de vous donner plus de précisions sur la faisabilité que j'ai étudiée… » — puis développez vos recherches concrètes.",
  },
  {
    q: '"Pourquoi pas Sciences Po plutôt qu\'une école de commerce ?"',
    bad: "Paniquer, critiquer Sciences Po, sembler déstabilisé.",
    good: "« Les deux voies sont excellentes, mais mon projet [précis] m'oriente vers un environnement business et un réseau d'entreprises — ce que cette école offre parfaitement. »",
  },
  {
    q: '"Si vous étiez un animal, lequel seriez-vous ?"',
    bad: 'Rire nerveusement ou dire « Je ne sais pas ».',
    good: "« Un aigle — j'aime prendre de la hauteur pour analyser une situation globalement avant de plonger sur l'essentiel. » — choisissez un animal qui valorise une qualité réelle.",
  },
  {
    q: '"Vous avez l\'air d\'un candidat très scolaire, manque d\'originalité non ?"',
    bad: "Accepter la critique et chercher à vous défendre maladroitement.",
    good: "« La rigueur et l'originalité ne s'opposent pas. Mon [expérience X] montre précisément comment j'ai su innover dans un cadre exigeant. »",
  },
];

const QuestionsDestabilisantesPage = () => (
  <MethodologyShell
    moduleLabel="Méthodologie · Module 13"
    icon={Zap}
    titlePrefix="Questions"
    titleAccent="Déstabilisantes"
    intro="Apprenez à désamorcer les questions pièges et provocatrices avec calme et assurance — transformez chaque attaque en opportunité de vous valoriser."
    cta={{
      title: "Entraînez-vous face à la pression",
      text: "Nos simulations incluent des questions déstabilisantes pour vous préparer à toutes les surprises du jury.",
    }}
  >
    <MethodIntroCard icon={Lightbulb} title="Pourquoi les jurys posent-ils des questions déstabilisantes ?">
      <p className="mb-3">
        Les questions déstabilisantes ne sont pas là pour vous piéger gratuitement — elles testent
        votre gestion émotionnelle, votre confiance en vous et votre capacité à rester cohérent sous pression.
        Un futur manager doit savoir gérer des interlocuteurs difficiles.
      </p>
      <p className="font-medium text-carnet-ink mb-2">Ce que le jury observe :</p>
      <ul className="space-y-2">
        {[
          ["Résilience émotionnelle", "gardez-vous votre calme face à l'inconfort ?"],
          ["Confiance en soi", "restez-vous debout quand on remet en question votre valeur ?"],
          ["Agilité cognitive", "pouvez-vous rebondir vite avec des arguments structurés ?"],
        ].map(([k, v]) => (
          <li key={k} className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" strokeWidth={1.8} />
            <span><strong className="text-carnet-ink">{k} :</strong> {v}</span>
          </li>
        ))}
      </ul>
    </MethodIntroCard>

    <MethodSection label="Section 01" title="Les 4 types de questions déstabilisantes" icon={Target}>
      <div className="space-y-4">
        {types.map((s) => (
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

    <MethodSection label="Section 02" title="Méthode en 4 étapes pour désamorcer" icon={Shield}>
      <div className="space-y-4">
        {method.map((s) => (
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

    <MethodSection label="Section 03" title="Exemples de réponses réussies" icon={MessageSquare}>
      <div className="space-y-5">
        {exemples.map((ex, i) => (
          <div key={i} className="bg-carnet-paper-2 border border-carnet-rule rounded-lg p-6">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-red-700 bg-red-50 px-2 py-1 rounded">
                Exemple {i + 1}
              </span>
            </div>
            <p className="text-sm text-carnet-ink-mute mb-1 italic">— Question du jury :</p>
            <p className="font-dm-serif text-lg text-carnet-ink mb-5">{ex.q}</p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-carnet-paper rounded p-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-red-700">À éviter</span>
                <p className="mt-2 text-sm text-carnet-ink-soft">{ex.bad}</p>
              </div>
              <div className="bg-red-50 border-l-4 border-red-600 rounded-r p-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-red-700">Bonne réponse</span>
                <p className="mt-2 text-sm text-carnet-ink-soft">{ex.good}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </MethodSection>

    <MethodSection label="Section 04" title="Erreurs fatales face à la déstabilisation" icon={AlertTriangle}>
      <div className="grid md:grid-cols-2 gap-5">
        {[
          {
            t: "Réactions émotionnelles",
            l: [
              "Se mettre sur la défensive agressivement",
              "S'excuser ou se dévaloriser spontanément",
              "Rire nerveusement pour meubler",
              "Montrer de l'irritation ou de la colère",
            ],
          },
          {
            t: "Erreurs de fond",
            l: [
              "Accepter les prémisses fausses de la question",
              "Changer de position pour plaire au jury",
              "Contredire ce qu'on a dit précédemment",
              "Fuir la question par une réponse hors sujet",
            ],
          },
        ].map((g) => (
          <div key={g.t} className="bg-carnet-paper-2 border border-carnet-rule rounded-lg p-6">
            <h4 className="font-dm-serif text-lg text-carnet-ink mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-red-700" strokeWidth={1.8} />
              {g.t}
            </h4>
            <ul className="space-y-2 text-sm text-carnet-ink-soft">
              {g.l.map((item) => <li key={item}>— {item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </MethodSection>
  </MethodologyShell>
);

export default QuestionsDestabilisantesPage;
