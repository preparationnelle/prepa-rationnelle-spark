import React from 'react';
import { Eye, CheckCircle, AlertTriangle, Target, Lightbulb, Smile, UserCheck } from 'lucide-react';
import { MethodologyShell, MethodSection, MethodIntroCard } from '@/components/methodologie/MethodologyShell';

const pillars = [
  { n: "01", t: "La posture", d: "Dos droit, épaules détendues, légèrement penché vers l'avant pour montrer l'intérêt. Évitez le dos voûté et les bras croisés qui ferment la communication." },
  { n: "02", t: "Le contact visuel", d: "Maintenez un contact visuel naturel (70% du temps). Regardez chaque membre du jury en alternance — ne fixez jamais un seul interlocuteur." },
  { n: "03", t: "Les gestes", d: "Gestes ouverts et mesurés pour illustrer vos propos. Mains visibles sur la table, pas de gesticulation excessive ni de mains cachées sous la table." },
  { n: "04", t: "L'expression faciale", d: "Sourire naturel à l'entrée et à la sortie. Expression engagée et intéressée pendant les échanges, hochements de tête pour montrer l'écoute active." },
];

const entree = [
  { t: "La poignée de main", d: "Ferme et courte (2-3 secondes), ni trop forte ni trop molle. Accompagnée systématiquement d'un sourire et d'un contact visuel direct." },
  { t: "L'installation", d: "Attendez qu'on vous propose de vous asseoir. Posez vos affaires calmement, sortez seulement ce dont vous avez besoin — stylo et éventuelles notes." },
  { t: "Les premières secondes", d: "La première impression se forme en 7 secondes. Votre énergie à l'entrée conditionne le ton de tout l'entretien qui suit." },
];

const erreurs = [
  { bad: "Bras croisés", cons: "Crée une barrière défensive — signal de fermeture ou de méfiance immédiate" },
  { bad: "Regard fuyant ou au plafond", cons: "Suggère le manque de confiance ou la recherche hasardeuse de ses réponses" },
  { bad: "Se toucher le visage fréquemment", cons: "Associé instinctivement au mensonge ou à l'anxiété par la plupart des observateurs" },
  { bad: "Agitation des jambes sous la table", cons: "Révèle le stress de manière perceptible, peut distraire les jurys assis face à vous" },
  { bad: "Micro-expressions négatives", cons: "Grimaces involontaires face à une question difficile trahissent l'inconfort" },
  { bad: "Sourire forcé et permanent", cons: "Paraît inauthentique et artificiel — pire que pas de sourire du tout" },
] as const;

const LangageNonVerbalPage = () => (
  <MethodologyShell
    moduleLabel="Méthodologie · Module 11"
    icon={Eye}
    titlePrefix="Langage"
    titleAccent="Non-verbal"
    intro="Maîtrisez les signaux silencieux qui convainquent autant que vos mots : posture, regard, gestuelle et expressions pour dégager confiance et authenticité."
    cta={{
      title: "Travaillez votre impact non-verbal",
      text: "Nos simulations vidéo vous permettent d'observer et de corriger votre langage corporel avant le jour J.",
    }}
  >
    <MethodIntroCard icon={Lightbulb} title="Pourquoi le non-verbal est-il décisif ?">
      <p className="mb-3">
        Selon la règle de Mehrabian, 55% de la communication passe par le corps, 38% par la voix,
        et seulement 7% par les mots. En entretien, votre langage corporel peut valider — ou contredire —
        chacune de vos réponses.
      </p>
      <p className="font-medium text-carnet-ink mb-2">Ce que le jury lit dans votre corps :</p>
      <ul className="space-y-2">
        {[
          ["Confiance en soi", "posture droite, gestes ouverts, regard direct et stable."],
          ["Authenticité", "cohérence entre vos mots et votre expression corporelle."],
          ["Écoute active", "hochements de tête, contact visuel, légère inclinaison du buste vers l'avant."],
        ].map(([k, v]) => (
          <li key={k} className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-red-600 mt-1 flex-shrink-0" strokeWidth={1.8} />
            <span><strong className="text-carnet-ink">{k} :</strong> {v}</span>
          </li>
        ))}
      </ul>
    </MethodIntroCard>

    <MethodSection label="Section 01" title="Les 4 piliers du langage non-verbal" icon={Target}>
      <p className="text-carnet-ink-soft mb-6">Les quatre dimensions corporelles à maîtriser absolument avant votre entretien.</p>
      <div className="space-y-4">
        {pillars.map((s) => (
          <div key={s.n} className="bg-carnet-paper-2 border border-carnet-rule/30 border-l-4 border-l-red-600 rounded-r-lg p-5 flex items-baseline gap-4">
            <span className="font-dm-serif text-3xl text-red-600 leading-none">{s.n}</span>
            <div>
              <h4 className="font-dm-serif text-lg text-carnet-ink mb-1">{s.t}</h4>
              <p className="text-sm text-carnet-ink-soft">{s.d}</p>
            </div>
          </div>
        ))}
      </div>
    </MethodSection>

    <MethodSection label="Section 02" title="Les premiers instants : entrée et installation" icon={UserCheck}>
      <div className="grid md:grid-cols-3 gap-5">
        {entree.map((e, i) => (
          <div key={e.t} className="bg-carnet-paper-2 border border-carnet-rule rounded-lg p-6">
            <span className="font-dm-serif text-3xl text-red-600">{String(i + 1).padStart(2, '0')}</span>
            <h4 className="font-dm-serif text-lg text-carnet-ink mt-1 mb-1">{e.t}</h4>
            <div className="h-px w-8 bg-red-600 mb-4" />
            <p className="text-sm text-carnet-ink-soft">{e.d}</p>
          </div>
        ))}
      </div>
    </MethodSection>

    <MethodSection label="Section 03" title="Erreurs corporelles à éviter absolument" icon={AlertTriangle}>
      <div className="space-y-3">
        {erreurs.map(({ bad, cons }, i) => (
          <div key={i} className="bg-carnet-paper-2 border border-carnet-rule/30 rounded-lg p-4 flex items-start gap-4">
            <div className="font-dm-serif text-3xl text-red-600 leading-none flex-shrink-0 w-12 text-center">
              {String(i + 1).padStart(2, '0')}
            </div>
            <div className="flex-1">
              <h5 className="font-medium text-carnet-ink mb-1">{bad}</h5>
              <p className="text-sm text-carnet-ink-mute">{cons}</p>
            </div>
          </div>
        ))}
      </div>
    </MethodSection>

    <MethodSection label="Section 04" title="Plan d'entraînement sur 2 semaines" icon={Smile}>
      <div className="bg-carnet-paper-2 border border-carnet-rule/30 rounded-lg p-7">
        <h4 className="font-dm-serif text-xl text-carnet-ink mb-2">Développez votre présence corporelle</h4>
        <div className="h-px w-12 bg-red-600 mb-6" />
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              t: "Semaine 1 : Prise de conscience",
              l: [
                "Enregistrez-vous en vidéo pendant une simulation de 5 min",
                "Observez posture, gestes et regard objectivement",
                "Identifiez vos 3 principaux tics corporels",
                "Pratiquez devant un miroir quotidiennement 10 min",
              ],
            },
            {
              t: "Semaine 2 : Correction & ancrage",
              l: [
                "Simulez avec un proche et demandez un feedback précis",
                "Exercice « ancre » : posture de confiance 2 min avant chaque simulation",
                "Travaillez le contact visuel dans vos conversations quotidiennes",
                "Nouvelle vidéo pour mesurer les progrès",
              ],
            },
          ].map((s) => (
            <div key={s.t}>
              <span className="text-[10px] font-semibold uppercase tracking-[0.16em] text-red-700 bg-red-50 px-2 py-1 rounded">
                {s.t}
              </span>
              <ul className="mt-3 space-y-2 text-sm text-carnet-ink-soft">
                {s.l.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" strokeWidth={1.8} />
                    {item}
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

export default LangageNonVerbalPage;
