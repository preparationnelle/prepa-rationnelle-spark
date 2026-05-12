import React from 'react';
import { Fingerprint, CheckCircle, AlertTriangle, Target, Lightbulb, TrendingUp, XCircle, Sparkles } from 'lucide-react';
import { MethodologyShell, MethodSection, MethodIntroCard } from '@/components/methodologie/MethodologyShell';

const cliches = [
  {
    cat: "Les motivations scolaires",
    ex: "« J'ai toujours voulu intégrer une grande école de commerce »",
    pourquoi: "Environ 80 % des candidats disent exactement cela. Cette phrase ne dit rien sur vous.",
  },
  {
    cat: "Les associations",
    ex: "Avoir été vice-président de l'association humanitaire ou du BDE",
    pourquoi: "Des centaines de candidats ont ce profil. Si vous l'évoquez, il faut aller bien au-delà du titre.",
  },
  {
    cat: "Les atouts génériques",
    ex: "« Je suis curieux, rigoureux et j'aime le travail en équipe »",
    pourquoi: "Le jury entend cette trilogie dans la grande majorité des entretiens. Zéro valeur discriminante.",
  },
  {
    cat: "Les exemples d'écoles trop attendus",
    ex: "ESSEC : « Je veux aller à Singapour et travailler dans le luxe avec LVMH »",
    pourquoi: "C'est la réponse que le jury anticipe. Si ce n'est pas authentiquement votre projet, c'est contre-productif.",
  },
  {
    cat: "Les stages mal racontés",
    ex: "« J'ai fait un stage en entreprise et j'ai beaucoup appris »",
    pourquoi: "Sans détail, sans anecdote, sans résultat : ce passage est identique à celui de tous les autres.",
  },
];

const regles = [
  {
    n: "01",
    t: "Pensez en amont comme le jury",
    d: "Avant chaque réponse préparée, posez-vous la question : « Que vont dire les 400 autres candidats à cette même question ? » Puis construisez une réponse qui s'en éloigne — sans être artificielle.",
  },
  {
    n: "02",
    t: "Ancrez chaque point dans une anecdote précise",
    d: "Un détail concret — un prénom, un chiffre, une date, une situation — rend votre récit unique par définition. Personne d'autre n'a vécu exactement la même scène que vous.",
  },
  {
    n: "03",
    t: "Ne citez que ce qui est sincèrement le vôtre",
    d: "Si vous n'avez aucun attrait pour le luxe, ne parlez pas de LVMH à l'ESSEC. Si Singapour ne vous attire pas vraiment, ne le dites pas. Le jury détecte l'inconsistance immédiatement.",
  },
  {
    n: "04",
    t: "Transformez le commun en particulier",
    d: "Vous avez fait la même chose que d'autres ? Montrez ce que vous en avez tiré de différent. Ce n'est pas l'expérience qui vous différencie — c'est votre lecture de l'expérience.",
  },
  {
    n: "05",
    t: "Calibrez sur les valeurs de l'école, pas sur ses slogans",
    d: "Chaque école a des valeurs affichées et des valeurs réelles. Parler des valeurs affichées que tout candidat connaît ne différencie pas. Ce qui différencie : montrer que vous les avez observées dans des faits précis.",
  },
];

const avantApres = {
  question: "Parlez-moi de votre stage.",
  faible: {
    label: "Version que donnent 90 % des candidats",
    texte: "J'ai fait un stage dans un cabinet de conseil l'été dernier. J'ai travaillé sur des missions variées et j'ai appris énormément sur le fonctionnement d'une entreprise. C'était une expérience très enrichissante.",
  },
  forte: {
    label: "Version qui marque",
    texte: "Chez [Cabinet X], j'étais sur une mission de restructuration pour une ETI dans la distribution. Le troisième jour, on m'a confié la modélisation d'un scénario de cession — seul, sans filet. J'ai passé 14 heures à reconstruire la logique depuis zéro. Ce qui m'a le plus marqué, c'est que j'ai réalisé que l'incertitude ne me paralysait pas — au contraire. C'est là que j'ai compris que je voulais travailler dans des environnements où chaque journée est différente.",
  },
};

const singularite = [
  {
    profil: "Vous avez une passion atypique",
    conseil: "Ne la cachez pas par peur d'être jugé. Une passion vraie — escalade, philosophie médiévale, radio associative — est un différenciateur net si vous la reliez à une compétence ou une valeur.",
  },
  {
    profil: "Vous avez vécu une expérience difficile",
    conseil: "Les épreuves bien racontées (redoublement, échec, période compliquée) montrent une maturité que les parcours lisses ne donnent pas. Ce n'est pas une faiblesse — c'est votre matériau.",
  },
  {
    profil: "Votre projet est moins conventionnel",
    conseil: "Entrepreneuriat dans un secteur peu représenté, carrière à l'international dans un pays « non standard », reconversion… Les jurys s'en souviennent précisément parce que ça sort de la moyenne.",
  },
  {
    profil: "Vous êtes passé par un lycée ou une région peu représentés",
    conseil: "Ce contexte est souvent un atout de différenciation sous-utilisé. Il dit quelque chose de votre trajectoire, de votre indépendance, de votre capacité à aller chercher ce que vous voulez.",
  },
];

const SeDifferencierPage = () => (
  <MethodologyShell
    moduleLabel="Méthodologie · Module 18"
    icon={Fingerprint}
    titlePrefix="Se Différencier"
    titleAccent="en Entretien"
    intro="Le jury voit des centaines de candidats. La vraie question n'est pas « Suis-je bon ? » — c'est « Suis-je mémorable ? » Voici comment construire une présence qui ne ressemble à personne d'autre."
    cta={{
      title: "Construisez votre singularité avec nos coachs",
      text: "Nos coachs vous aident à identifier ce qui vous rend unique et à le mettre en scène efficacement face au jury.",
    }}
  >
    <MethodIntroCard icon={Lightbulb} title="Le problème central : vous ne vous différenciez pas de vous-même">
      <p className="mb-3">
        La plupart des candidats préparent de bonnes réponses. Mais ils préparent les mêmes bonnes réponses
        que les autres. Le jury, après 50 entretiens dans la journée, peut anticiper mot pour mot ce que
        vous allez dire — avant même que vous ouvriez la bouche.
      </p>
      <div className="bg-red-50 border-l-4 border-red-600 rounded-r p-4 mb-4">
        <p className="font-medium text-carnet-ink mb-1">Le réflexe à développer</p>
        <p className="text-sm text-carnet-ink-soft">
          Avant chaque réponse préparée, posez-vous : <em>« Combien d'autres candidats vont dire exactement
          cela ? »</em> Si la réponse est "beaucoup", reconstruisez votre version à partir de ce qui est
          uniquement vôtre — une anecdote, un détail, une lecture personnelle.
        </p>
      </div>
      <p className="font-medium text-carnet-ink mb-2">Ce que cherche vraiment le jury :</p>
      <ul className="space-y-2">
        {[
          ["Une personnalité lisible", "pas une liste de qualités génériques, mais une cohérence entre votre parcours, vos choix et votre projet."],
          ["De l'authenticité", "une réponse sincèrement vôtre, même imparfaite, vaut mieux qu'une réponse parfaite empruntée."],
          ["Un candidat mémorable", "après 80 entretiens, ce dont le jury se souvient, c'est de ce qui était unique — jamais de ce qui était commun."],
        ].map(([k, v]) => (
          <li key={k} className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" strokeWidth={1.8} />
            <span><strong className="text-carnet-ink">{k} :</strong> {v}</span>
          </li>
        ))}
      </ul>
    </MethodIntroCard>

    <MethodSection label="Section 01" title="Les 5 clichés que le jury connaît par cœur" icon={XCircle}>
      <p className="text-carnet-ink-soft mb-6">
        Ces réponses ne sont pas fausses — elles sont simplement identiques à celles des centaines de candidats
        qui vous précèdent. Les éviter (ou les transformer) est le premier niveau de différenciation.
      </p>
      <div className="space-y-4">
        {cliches.map((c, i) => (
          <div key={i} className="bg-carnet-paper-2 border border-carnet-rule rounded-lg p-5 flex items-start gap-4">
            <div className="font-dm-serif text-3xl text-red-600 leading-none flex-shrink-0 w-12 text-center">
              {String(i + 1).padStart(2, '0')}
            </div>
            <div className="flex-1">
              <p className="text-xs font-semibold uppercase tracking-wide text-red-600 mb-1">{c.cat}</p>
              <div className="bg-carnet-paper border border-carnet-rule/30 rounded p-3 mb-2">
                <p className="text-sm text-carnet-ink-soft italic">{c.ex}</p>
              </div>
              <p className="text-sm text-carnet-ink-mute">{c.pourquoi}</p>
            </div>
          </div>
        ))}
      </div>
    </MethodSection>

    <MethodSection label="Section 02" title="La narration précise : votre arme principale" icon={Target}>
      <p className="text-carnet-ink-soft mb-6">
        Un détail concret est unique par définition. Personne d'autre n'a vécu exactement votre scène, avec
        vos mots, dans votre contexte. La précision est la forme la plus simple — et la plus efficace — de différenciation.
      </p>
      <div className="bg-white border border-carnet-rule/30 rounded-lg p-7 mb-5">
        <div className="flex items-center gap-2 mb-5">
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-red-700 bg-red-50 px-2 py-1 rounded">
            {avantApres.question}
          </span>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          <div className="bg-carnet-paper rounded p-5">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-carnet-ink-mute">{avantApres.faible.label}</span>
            <p className="mt-3 text-sm text-carnet-ink-soft italic leading-relaxed">{avantApres.faible.texte}</p>
          </div>
          <div className="bg-red-50 border-l-4 border-red-600 rounded-r p-5">
            <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-red-700">{avantApres.forte.label}</span>
            <p className="mt-3 text-sm text-carnet-ink-soft italic leading-relaxed">{avantApres.forte.texte}</p>
          </div>
        </div>
      </div>
      <div className="bg-carnet-page border border-carnet-rule/40 rounded-lg p-5">
        <p className="font-medium text-carnet-ink mb-3">Ce que fait la version forte :</p>
        <ul className="space-y-2">
          {[
            "Un lieu, une mission, un contexte précis — pas « un cabinet de conseil »",
            "Un moment clé raconté comme une scène — le troisième jour, 14 heures",
            "Une prise de conscience personnelle — pas un résultat générique",
            "Un lien vers le projet ou les valeurs — pourquoi ça change quelque chose pour la suite",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-carnet-ink-soft">
              <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" strokeWidth={1.8} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </MethodSection>

    <MethodSection label="Section 03" title="Votre singularité : ce qui ne ressemble à personne" icon={Sparkles}>
      <p className="text-carnet-ink-soft mb-6">
        Certains profils sous-estiment ce qui les rend uniques parce que ça leur semble "normal" — c'est exactement là que se cache souvent le différenciateur.
      </p>
      <div className="grid md:grid-cols-2 gap-5">
        {singularite.map((s) => (
          <div key={s.profil} className="bg-white border border-carnet-rule/30 border-l-4 border-l-red-600 rounded-r-lg p-5">
            <h4 className="font-dm-serif text-base text-carnet-ink mb-2">{s.profil}</h4>
            <p className="text-sm text-carnet-ink-soft">{s.conseil}</p>
          </div>
        ))}
      </div>
    </MethodSection>

    <MethodSection label="Section 04" title="5 règles pour se différencier" icon={TrendingUp}>
      <p className="text-carnet-ink-soft mb-6">Des principes opérationnels à appliquer lors de votre préparation — et à tester à voix haute.</p>
      <div className="space-y-4">
        {regles.map((r) => (
          <div key={r.n} className="bg-white border border-carnet-rule/30 border-l-4 border-l-red-600 rounded-r-lg p-5 flex items-baseline gap-4">
            <span className="font-dm-serif text-3xl text-red-600 leading-none">{r.n}</span>
            <div>
              <h4 className="font-dm-serif text-lg text-carnet-ink mb-1">{r.t}</h4>
              <p className="text-sm text-carnet-ink-soft">{r.d}</p>
            </div>
          </div>
        ))}
      </div>
    </MethodSection>

    <MethodSection label="Section 05" title="Le test final : êtes-vous remplaçable ?" icon={AlertTriangle}>
      <div className="bg-carnet-paper-2 border border-carnet-rule rounded-lg p-6">
        <p className="text-carnet-ink-soft mb-6">
          Pour chaque réponse préparée, posez-vous ces trois questions avant le jour J.
        </p>
        <div className="space-y-4">
          {[
            {
              q: "Un autre candidat pourrait-il donner exactement la même réponse ?",
              verdict: "Si oui → ajoutez un détail concret ou une anecdote personnelle.",
            },
            {
              q: "Ma réponse contient-elle au moins un élément que personne d'autre ne peut dire ?",
              verdict: "Si non → trouvez le détail, le chiffre, la scène, l'émotion qui est uniquement la vôtre.",
            },
            {
              q: "Je cite cet exemple parce que c'est ce qu'on attend de moi, ou parce que c'est vraiment le mien ?",
              verdict: "Si c'est pour plaire → retirez-le. Le jury détecte l'insincérité, et ça nuit plus que ça n'aide.",
            },
          ].map((item, i) => (
            <div key={i} className="border border-carnet-rule/30 rounded-lg p-4">
              <p className="font-medium text-carnet-ink mb-2 text-sm">{item.q}</p>
              <div className="flex items-start gap-2">
                <AlertTriangle className="w-3.5 h-3.5 text-red-600 mt-0.5 flex-shrink-0" strokeWidth={1.8} />
                <p className="text-xs text-carnet-ink-mute">{item.verdict}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </MethodSection>
  </MethodologyShell>
);

export default SeDifferencierPage;
