import React from 'react';
import { Brain, CheckCircle, AlertTriangle, Lightbulb, Wind, Activity, Clock } from 'lucide-react';
import { MethodologyShell, MethodSection, MethodIntroCard } from '@/components/methodologie/MethodologyShell';

const techniques = [
  { n: "01", t: "Cohérence cardiaque (3-6-5)", d: "Inspirez 3 secondes, expirez 6 secondes, 5 fois de suite. À pratiquer juste avant d'entrer en salle pour calmer instantanément le système nerveux." },
  { n: "02", t: "Ancrage au présent", d: "Identifiez 5 objets visibles, 4 sons, 3 sensations physiques. Cette technique ramène le mental au moment présent et coupe la spirale d'angoisse." },
  { n: "03", t: "Reformulation positive", d: "Remplacez « je vais tout oublier » par « je suis préparé et capable ». Pratiquez cette reformulation chaque matin les 3 jours précédant l'entretien." },
  { n: "04", t: "Visualisation réussie", d: "Imaginez l'entretien en détail positif : jury bienveillant, réponses fluides, sortie de salle satisfait. 5 minutes par jour suffit." },
];

const phases = [
  {
    t: "La semaine avant",
    sub: "J-7 à J-2",
    l: [
      "Finalisez votre préparation, ne commencez rien de nouveau",
      "Dormez 8h minimum chaque nuit",
      "Faites 2-3 simulations chronométrées",
      "Préparez votre tenue et matériel à l'avance",
    ],
  },
  {
    t: "La veille",
    sub: "J-1",
    l: [
      "Relisez vos notes une dernière fois, pas plus",
      "Activité physique légère (marche, yoga)",
      "Couchez-vous tôt, évitez les écrans après 21h",
      "Préparez votre itinéraire et vérifiez les transports",
    ],
  },
  {
    t: "Le matin J",
    sub: "Jour J",
    l: [
      "Petit-déjeuner complet pour une énergie stable",
      "10 min de cohérence cardiaque",
      "Révision express de vos 3 points clés",
      "Partez avec 30 min d'avance minimum",
    ],
  },
];

const signs = [
  ["Voix qui tremble", "Parlez plus lentement, respirez profondément, baissez volontairement la voix d'un ton."],
  ["Trou de mémoire", "Prenez 3 secondes de silence, reformulez la question à voix haute, commencez par ce que vous savez."],
  ["Rougissement visible", "Acceptez-le mentalement sans y penser — le jury l'ignore généralement, c'est vous qui l'amplifiez."],
  ["Mains qui tremblent", "Posez-les à plat sur la table, ou tenez légèrement un stylo pour ancrer le geste."],
  ["Débit trop rapide", "Placez mentalement un point à la fin de chaque phrase et marquez une micro-pause avant de reprendre."],
  ["Blanc prolongé", "Dites « Permettez-moi de réfléchir une seconde » — les jurys apprécient cette honnêteté."],
] as const;

const GestionStressPage = () => (
  <MethodologyShell
    moduleLabel="Méthodologie · Module 09"
    icon={Brain}
    titlePrefix="Gestion"
    titleAccent="du Stress"
    intro="Transformez votre stress en énergie positive : techniques éprouvées pour aborder vos entretiens avec sérénité et confiance maximale."
    cta={{
      title: "Entraînez-vous sereinement",
      text: "Nos simulations d'entretien vous habituent à la pression pour que le jour J ne vous surprenne pas.",
    }}
  >
    <MethodIntroCard icon={Lightbulb} title="Le stress : ennemi ou allié ?">
      <p className="mb-3">
        Un niveau de stress modéré améliore les performances : il aiguise la concentration, accélère
        la réflexion et vous donne de l'énergie. Le problème n'est pas le stress lui-même,
        mais le stress non maîtrisé qui paralyse.
      </p>
      <p className="font-medium text-pr-black mb-2">Les deux types de stress :</p>
      <ul className="space-y-2">
        {[
          ["Eustress (positif)", "vous motive, vous garde alerte et réactif — cultivez-le."],
          ["Distress (négatif)", "vous paralyse, brouille les idées, nuit à l'expression — apprenez à le maîtriser."],
        ].map(([k, v]) => (
          <li key={k} className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-pr-orange mt-1 flex-shrink-0" strokeWidth={1.8} />
            <span><strong className="text-pr-black">{k} :</strong> {v}</span>
          </li>
        ))}
      </ul>
    </MethodIntroCard>

    <MethodSection label="Section 01" title="Techniques anti-stress immédiates" icon={Wind}>
      <p className="text-pr-gray-dark mb-6">Quatre techniques testées et approuvées par des coachs en performance mentale.</p>
      <div className="space-y-4">
        {techniques.map((s) => (
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

    <MethodSection label="Section 02" title="Préparation chronologique : J-7 au jour J" icon={Clock}>
      <div className="grid md:grid-cols-3 gap-5">
        {phases.map((p, i) => (
          <div key={p.t} className="bg-white border border-pr-gray-light rounded-lg p-6">
            <span className="font-dm-serif text-3xl text-pr-orange">{String(i + 1).padStart(2, '0')}</span>
            <h4 className="font-dm-serif text-lg text-pr-black mt-1">{p.t}</h4>
            <p className="text-xs uppercase tracking-wider text-pr-gray-mid mb-3">{p.sub}</p>
            <div className="h-px w-8 bg-pr-orange mb-4" />
            <ul className="space-y-2 text-sm text-pr-gray-dark">
              {p.l.map((item) => (
                <li key={item} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-pr-orange mt-0.5 flex-shrink-0" strokeWidth={1.8} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </MethodSection>

    <MethodSection label="Section 03" title="Gérer les signes de stress pendant l'entretien" icon={Activity}>
      <div className="space-y-3">
        {signs.map(([signe, remede], i) => (
          <div key={i} className="bg-white border border-pr-gray-light rounded-lg p-4 flex items-start gap-4">
            <div className="font-dm-serif text-3xl text-pr-orange leading-none flex-shrink-0 w-12 text-center">
              {String(i + 1).padStart(2, '0')}
            </div>
            <div className="flex-1">
              <h5 className="font-medium text-pr-black mb-1">{signe}</h5>
              <p className="text-sm text-pr-gray-mid">{remede}</p>
            </div>
          </div>
        ))}
      </div>
    </MethodSection>

    <MethodSection label="Section 04" title="Pensées négatives à bannir absolument" icon={AlertTriangle}>
      <div className="grid md:grid-cols-2 gap-5">
        {[
          {
            t: "Les pensées catastrophistes",
            l: ['"Je vais tout oublier"', '"Ils vont me détester"', '"Je suis le pire candidat"', '"C\'est foutu d\'avance"'],
          },
          {
            t: "Les comparaisons paralysantes",
            l: ["Surestimer le niveau des autres candidats", "Ruminer les entretiens précédents ratés", "S'imaginer le jury hostile ou partial", "Se persuader qu'on n'est pas légitime"],
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

export default GestionStressPage;
