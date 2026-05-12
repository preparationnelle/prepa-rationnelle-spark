import React from 'react';
import { BookOpen, CheckCircle, Lightbulb, RefreshCw, Star, Target, Zap, AlertCircle } from 'lucide-react';
import { MethodologyShell, MethodSection, MethodIntroCard } from '@/components/methodologie/MethodologyShell';

const anecdoteTypes = [
  {
    n: '01',
    t: 'Leadership & initiative',
    d: "Une situation où vous avez pris les rênes, lancé quelque chose ou fédéré un groupe — même à petite échelle.",
    qs: ['"Donnez un exemple de leadership"', '"Parlez d\'une initiative que vous avez prise"', '"Êtes-vous plutôt chef ou exécutant ?"'],
  },
  {
    n: '02',
    t: 'Échec & résilience',
    d: "Un projet ou résultat qui n'a pas abouti comme prévu, avec ce que vous en avez appris et ce que vous avez changé ensuite.",
    qs: ['"Parlez-moi d\'un échec"', '"Comment réagissez-vous face à l\'adversité ?"', '"Quelle est votre plus grande leçon ?"'],
  },
  {
    n: '03',
    t: 'Collaboration & intelligence émotionnelle',
    d: "Un moment de travail en équipe ou de gestion d'un conflit, mettant en valeur votre capacité à vous adapter aux autres.",
    qs: ['"Comment travaillez-vous en équipe ?"', '"Avez-vous déjà géré un conflit ?"', '"Décrivez un projet collectif"'],
  },
  {
    n: '04',
    t: 'Dépassement de soi',
    d: "Une expérience hors de votre zone de confort — physique, intellectuelle ou émotionnelle — et ce qu'elle a révélé sur vous.",
    qs: ['"Quelle est votre plus grande réussite ?"', '"Décrivez un moment difficile"', '"Comment gérez-vous le stress ?"'],
  },
  {
    n: '05',
    t: 'Curiosité & apprentissage autonome',
    d: "Quelque chose que vous avez appris par vous-même — une compétence, un sujet, un projet — sans qu'on vous le demande.",
    qs: ['"Qu\'est-ce qui vous passionne ?"', '"Comment vous formez-vous en dehors des cours ?"', '"Quel est votre rapport à l\'apprentissage ?"'],
  },
  {
    n: '06',
    t: 'Défaut travaillé',
    d: "Une faiblesse réelle, la prise de conscience qui a suivi, et les actions concrètes que vous avez mises en place pour progresser.",
    qs: ['"Quel est votre principal défaut ?"', '"Comment travaillez-vous vos axes de progrès ?"', '"Citez une limite que vous avez surmontée"'],
  },
  {
    n: '07',
    t: 'Impact & engagement',
    d: "Une action qui a eu un effet mesurable sur d'autres — bénévolat, projet associatif, aide concrète à quelqu'un.",
    qs: ['"Quelles sont vos valeurs ?"', '"Comment contribuez-vous au collectif ?"', '"Parlez-moi d\'une expérience extra-scolaire significative"'],
  },
];

const starSteps = [
  { l: 'S', t: 'Situation', d: 'Contexte en 1-2 phrases maximum. Ancrez dans le réel : lieu, date, rôle.' },
  { l: 'T', t: 'Tension', d: 'Le vrai enjeu — pas juste une tâche, mais ce qui rendait la situation difficile ou non évidente.' },
  { l: 'A', t: 'Action', d: 'CE QUE VOUS avez fait concrètement, avec vos choix et leur logique. Utilisez "j\'ai" et non "on a".' },
  { l: 'R', t: 'Résultat + Réflexion', d: 'Un résultat mesurable si possible, puis ce que vous avez appris et changé durablement.' },
];

const adaptationExample = {
  anecdote: "Lors de ma terminale, j'étais responsable d'un gala de 300 personnes. À 3 jours de l'événement, notre prestataire son annulait. J'ai contacté 12 prestataires en 24h, négocié un tarif d'urgence, et coordonné un nouveau setup complet. Le gala a eu lieu. On a dégagé 4 000 € pour l'asso.",
  questions: [
    { q: '"Donnez un exemple de leadership"', angle: "→ Insistez sur la prise de décision rapide et la coordination d'équipe." },
    { q: '"Comment gérez-vous le stress ?"', angle: "→ Insistez sur le maintien du calme et la méthode face à l'urgence." },
    { q: '"Êtes-vous capable de résoudre des problèmes ?"', angle: "→ Insistez sur les 12 appels, la logique de résolution, le plan B." },
    { q: '"Quelles sont vos qualités ?"', angle: '→ Insistez sur la ténacité, la réactivité, la créativité sous pression.' },
    { q: '"Parlez d\'une réussite dont vous êtes fier"', angle: "→ Insistez sur l'impact final (gala réussi, 4 000 € récoltés)." },
  ],
};

const buildingPlan = [
  { n: '01', t: 'Listez 15 expériences brutes', d: "Sans filtre : stages, asso, sport, voyage, projets perso, bénévolat, moments de famille. Incluez les petites choses — un bon tuteur à un camarade compte." },
  { n: '02', t: 'Sélectionnez 7 qui couvrent tous les types', d: "Vérifiez que vous avez au moins une anecdote par type (colonne de gauche). Si un type manque, cherchez une expérience oubliée ou requalifiez une existante." },
  { n: '03', t: 'Rédigez chacune en version longue (2 min)', d: "Écrivez la version complète en prose, à l'oral. Lisez-la à voix haute. Chronométrez. Ajustez jusqu'à ce que ça sonne naturel et dure exactement 2 minutes." },
  { n: '04', t: 'Créez une version courte (45 sec)', d: "Gardez : la tension + votre action clé + le résultat. Supprimez tout le contexte non essentiel. Cette version courte servira pour les questions rapides." },
  { n: '05', t: 'Mappez chaque anecdote sur 5 à 8 questions', d: "Pour chaque anecdote, notez les 5-8 questions auxquelles elle peut répondre et l'angle à adopter. Vous créez ainsi votre carte de navigation." },
  { n: '06', t: 'Entraînez-vous à switcher d\'angle en 30 secondes', d: "Exercice : un ami vous pose une question au hasard. Vous avez 5 secondes pour choisir quelle anecdote et quel angle — puis vous répondez." },
];

const BanqueAnecdotesPage = () => (
  <MethodologyShell
    moduleLabel="Méthodologie · Module 17"
    icon={BookOpen}
    titlePrefix="Banque d'"
    titleAccent="Anecdotes"
    intro="Construisez 7 anecdotes polyvalentes qui couvrent 90 % des questions de personnalité — peu importe l'école ou le jury."
    cta={{
      title: 'Construisez votre banque avec un coach',
      text: 'Nos coachs vous aident à identifier, structurer et travailler vos 7 anecdotes clés pour chaque école cible.',
    }}
  >
    <MethodIntroCard icon={Lightbulb} title="Le principe : préparer moins, répondre mieux">
      <p className="mb-3">
        La plupart des candidats préparent 30 réponses différentes pour 30 questions différentes.
        Résultat : des réponses mécaniques, des blancs en cas de question inattendue, et une fatigue
        mentale le jour J.
      </p>
      <p className="mb-3">
        La banque d'anecdotes inverse la logique : vous préparez <strong className="text-carnet-ink">7 histoires très solides</strong>,
        chacune adaptable à 5-8 questions différentes selon l'angle que vous choisissez.
        Au lieu de chercher une réponse, vous cherchez <em>l'angle</em> — ce qui est bien plus rapide
        et plus naturel sous pression.
      </p>
      <div className="bg-red-50 border-l-4 border-red-600 rounded-r p-4">
        <p className="font-medium text-carnet-ink mb-1">La règle des 90 %</p>
        <p className="text-sm text-carnet-ink-soft">
          7 anecdotes bien choisies couvrent en moyenne <strong>90 % des questions</strong> posées
          dans les entretiens BCE/Ecricome. Les 10 % restants (questions très techniques sur l'école
          ou l'actualité) ne nécessitent pas d'anecdote — ils appellent une opinion ou une connaissance.
        </p>
      </div>
    </MethodIntroCard>

    <MethodSection label="Section 01" title="Les 7 types d'anecdotes à construire" icon={Target}>
      <p className="text-carnet-ink-soft mb-6">
        Chaque type couvre une famille de questions. Une anecdote bien construite dans chaque
        catégorie suffit — l'objectif n'est pas la quantité mais la profondeur.
      </p>
      <div className="space-y-4">
        {anecdoteTypes.map((a) => (
          <div key={a.n} className="bg-white border border-carnet-rule/30 border-l-4 border-l-red-600 rounded-r-lg p-5">
            <div className="flex items-baseline gap-3 mb-2">
              <span className="font-dm-serif text-3xl text-red-600 leading-none flex-shrink-0">{a.n}</span>
              <h4 className="font-dm-serif text-lg text-carnet-ink">{a.t}</h4>
            </div>
            <p className="text-sm text-carnet-ink-soft leading-relaxed mb-3">{a.d}</p>
            <div className="flex flex-wrap gap-2">
              {a.qs.map((q) => (
                <span key={q} className="text-xs bg-red-50 text-red-700 border border-red-100 rounded-full px-3 py-1">
                  {q}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </MethodSection>

    <MethodSection label="Section 02" title="Structurer chaque anecdote : la méthode STAR+" icon={Star}>
      <p className="text-carnet-ink-soft mb-6">
        Utilisez une version renforcée de STAR — le "+" transforme le Résultat en <strong className="text-carnet-ink">Résultat + Réflexion</strong>,
        ce qui est ce que le jury cherche vraiment : pas juste ce qui s'est passé, mais ce que vous en avez fait.
      </p>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {starSteps.map((s) => (
          <div key={s.l} className="bg-white border border-carnet-rule/30 rounded-2xl p-5 text-center hover:border-red-200 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300">
            <div className="font-dm-serif text-5xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pr-black mb-1 leading-none">{s.l}</div>
            <div className="h-px w-6 bg-red-500 mx-auto mb-3 mt-2" />
            <div className="font-medium text-carnet-ink mb-1 text-sm">{s.t}</div>
            <p className="text-xs text-carnet-ink-mute leading-relaxed">{s.d}</p>
          </div>
        ))}
      </div>

      <div className="bg-white border border-carnet-rule/30 rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-4">
          <AlertCircle className="w-4 h-4 text-red-600 flex-shrink-0" strokeWidth={1.8} />
          <h4 className="font-dm-serif text-lg text-carnet-ink">Les 3 erreurs de structure les plus fréquentes</h4>
        </div>
        <div className="space-y-3">
          {[
            { e: 'Trop de contexte, pas assez d\'action', f: "Le jury ne veut pas comprendre toute l'histoire — il veut voir CE QUE VOUS AVEZ FAIT. Limitez la Situation à 2 phrases max." },
            { e: 'Utiliser "on" à la place de "je"', f: '"On a décidé" efface votre rôle. Précisez systématiquement ce que vous, personnellement, avez fait et décidé.' },
            { e: 'Omettre la réflexion finale', f: "Un résultat sans apprentissage reste une anecdote plate. Finissez toujours par : \"Ce que ça m'a appris, c'est que...\" ou \"Depuis, je...\"" },
          ].map((item) => (
            <div key={item.e} className="bg-carnet-paper p-4 rounded-lg border border-carnet-rule/20">
              <p className="font-semibold text-sm text-red-700 mb-1">{item.e}</p>
              <p className="text-sm text-carnet-ink-soft">{item.f}</p>
            </div>
          ))}
        </div>
      </div>
    </MethodSection>

    <MethodSection label="Section 03" title="Une anecdote, cinq questions : l'adaptabilité en pratique" icon={RefreshCw}>
      <p className="text-carnet-ink-soft mb-6">
        Même anecdote, cinq angles différents. L'anecdote ne change pas — seul l'élément mis en valeur varie
        selon ce que la question cherche à révéler.
      </p>

      <div className="bg-white border border-carnet-rule/30 border-l-4 border-l-red-600 rounded-r-lg p-6 mb-5">
        <div className="flex items-center gap-2 mb-3">
          <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-red-700 bg-red-50 border border-red-100 px-2.5 py-1 rounded-full">
            L'anecdote
          </span>
        </div>
        <p className="text-sm text-carnet-ink leading-relaxed italic">
          "{adaptationExample.anecdote}"
        </p>
      </div>

      <div className="space-y-3">
        {adaptationExample.questions.map((item, i) => (
          <div key={i} className="bg-white border border-carnet-rule/30 rounded-lg p-4 flex items-start gap-4">
            <span className="font-dm-serif text-2xl text-red-600 leading-none flex-shrink-0 w-8 text-center">{String(i + 1).padStart(2, '0')}</span>
            <div className="flex-1">
              <p className="font-medium text-carnet-ink text-sm mb-1">{item.q}</p>
              <p className="text-sm text-carnet-ink-soft">{item.angle}</p>
            </div>
          </div>
        ))}
      </div>
    </MethodSection>

    <MethodSection label="Section 04" title="Plan d'action pour construire votre banque" icon={Zap}>
      <p className="text-carnet-ink-soft mb-6">
        Six étapes concrètes pour passer de zéro à une banque opérationnelle en 1 semaine.
      </p>
      <div className="space-y-4">
        {buildingPlan.map((step) => (
          <div key={step.n} className="bg-white border border-carnet-rule/30 rounded-2xl p-5 flex items-start gap-4 hover:border-red-200 hover:shadow-sm transition-all duration-300">
            <span className="font-dm-serif text-3xl text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-pr-black leading-none flex-shrink-0">{step.n}</span>
            <div>
              <h4 className="font-dm-serif text-lg text-carnet-ink mb-1">{step.t}</h4>
              <p className="text-sm text-carnet-ink-soft leading-relaxed">{step.d}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 relative overflow-hidden rounded-2xl border border-red-100 bg-gradient-to-br from-red-50/80 to-orange-50/40 p-6 shadow-sm">
        <div className="flex items-start gap-3 mb-4">
          <CheckCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" strokeWidth={1.8} />
          <h4 className="font-dm-serif text-lg text-carnet-ink">Le test de la banque complète</h4>
        </div>
        <p className="text-sm text-carnet-ink-soft mb-4">
          Votre banque est prête quand vous pouvez répondre oui à chacun de ces points :
        </p>
        <ul className="space-y-2">
          {[
            "Chacune de mes 7 anecdotes dure exactement 90 secondes à l'oral",
            "Je peux adapter chaque anecdote à au moins 5 questions différentes",
            "Aucune anecdote ne commence par 'On a...' — elles commencent toutes par 'J'ai...' ou 'J'étais...'",
            "Chaque anecdote se termine par une leçon ou un changement de comportement",
            "Je peux passer d'une anecdote à l'autre en moins de 5 secondes de réflexion",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2 text-sm text-carnet-ink-soft">
              <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" strokeWidth={1.8} />
              {item}
            </li>
          ))}
        </ul>
      </div>
    </MethodSection>
  </MethodologyShell>
);

export default BanqueAnecdotesPage;
