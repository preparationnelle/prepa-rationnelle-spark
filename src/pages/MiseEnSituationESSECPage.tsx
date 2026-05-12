import React from 'react';
import { Lightbulb, Clock, Target, CheckCircle, AlertTriangle, Users, Brain } from 'lucide-react';
import { MethodologyShell, MethodSection, MethodIntroCard } from '@/components/methodologie/MethodologyShell';

const typesSituations = [
  {
    icon: Target,
    t: 'Vie d\'entreprise',
    desc: 'Le jury vous plonge dans un dilemme managérial ou stratégique d\'entreprise.',
    exemples: [
      'Vous êtes chef de projet et un de vos collaborateurs se comporte de manière irrespectueuse envers un stagiaire. Vos supérieurs semblent tolérer la situation. Que faites-vous ?',
      'Vous découvrez une erreur comptable significative commise par votre manager avant une réunion décisive. Comment réagissez-vous ?',
      'Un client important vous demande d\'adapter légèrement un rapport pour qu\'il présente ses résultats sous un jour plus favorable. Que décidez-vous ?',
    ],
  },
  {
    icon: Users,
    t: 'Vie associative',
    desc: 'La mise en situation se déroule dans le cadre d\'une association étudiante de l\'ESSEC.',
    exemples: [
      'Vous devenez trésorier d\'une association ESSEC. Vous découvrez que le précédent trésorier s\'est fait rembourser des frais illicites. La divulgation risque de menacer l\'existence même de l\'association. Comment gérez-vous la situation ?',
      'Vous organisez un événement caritatif et réalisez que la moitié du budget a été mal allouée. L\'événement a lieu dans 48h. Que faites-vous ?',
      'Un désaccord éclate au sein de votre bureau associatif sur une décision stratégique. Le vote est à égalité. Vous avez la voix décisive. Comment tranchez-vous ?',
    ],
  },
  {
    icon: Brain,
    t: 'Situation éthique et de valeurs',
    desc: 'Le jury teste votre boussole morale face à un conflit entre intérêt personnel et éthique.',
    exemples: [
      'On vous propose une promotion exceptionnelle dans votre entreprise, mais en contrepartie il vous est demandé de ne pas témoigner dans une affaire de harcèlement interne. Quelle est votre décision ?',
      'Votre équipe a remporté un contrat grâce à des informations confidentielles obtenues par inadvertance chez le concurrent. Vous seul le savez. Que faites-vous ?',
      'Vous observez qu\'une personne marginalisée, discrète, est systématiquement écartée des décisions d\'équipe lors des réunions. Vos collègues ne semblent pas s\'en apercevoir. Comment réagissez-vous ?',
    ],
  },
];

const criteres = [
  {
    t: 'Sens des valeurs et intégrité',
    d: 'Le jury ne cherche pas la "bonne" réponse universelle — il cherche quelqu\'un qui assume ses choix, les argumente et en mesure les conséquences. Une décision courageuse vaut mieux qu\'une réponse vague visant à plaire.',
  },
  {
    t: 'Capacité décisionnelle',
    d: 'Pouvez-vous prendre une décision dans l\'incertitude sans attendre un consensus mou ? L\'ESSEC forme des leaders qui agissent. Le jury sanctionne l\'indécision et l\'absence de positionnement clair.',
  },
  {
    t: 'Créativité et pragmatisme',
    d: 'Proposez-vous des solutions originales qui dépassent la dichotomie évidente ? Le jury apprécie les candidats qui voient des options que la plupart des gens n\'envisagent pas.',
  },
  {
    t: 'Logique et structure',
    d: 'Votre raisonnement est-il clair et articulé ? Même une bonne décision mal présentée perd de sa valeur. Commencez par identifier l\'enjeu central avant de développer votre réponse.',
  },
  {
    t: 'Gestion de l\'incertitude',
    d: 'La situation est volontairement incomplète ou ambiguë. Le jury observe comment vous gérez le manque d\'information : demandez-vous des précisions pertinentes ? Balisez-vous votre réponse avec des hypothèses explicites ?',
  },
];

const methode = [
  {
    t: 'Reformulez la situation',
    d: 'Avant tout, reformulez en une phrase ce que vous comprenez de la situation. Cela montre votre capacité d\'écoute et vous permet de vérifier que vous n\'avez pas mal interprété le scénario. Le jury vous corrigera si nécessaire.',
  },
  {
    t: 'Identifiez l\'enjeu central',
    d: 'Toute mise en situation ESSEC cache une tension de valeurs : loyauté vs éthique, performance vs intégrité, courage vs prudence. Nommez explicitement ce conflit avant de proposer votre réponse — c\'est ce que le jury attend.',
  },
  {
    t: 'Posez une question si vraiment nécessaire',
    d: 'Vous pouvez demander une précision utile (pas pour gagner du temps). Exemple : "Est-ce que je connais personnellement la personne impliquée ?" ou "Y a-t-il un supérieur hiérarchique disponible ?" Cela montre que vous pensez avant d\'agir.',
  },
  {
    t: 'Prenez position et argumentez',
    d: 'Évitez le "ça dépend" sans suite. Dites ce que vous feriez, pourquoi, et ce que vous êtes prêt à assumer. Mentionnez les risques de votre choix — montrer que vous les voyez renforce votre crédibilité plutôt que de l\'affaiblir.',
  },
  {
    t: 'Concluez en une phrase ferme',
    d: 'Terminez sur une prise de position claire. Le jury doit savoir exactement quelle décision vous prenez. Une conclusion floue efface la qualité du développement qui précède.',
  },
];

const piegues = [
  {
    t: 'Le consensus mou',
    d: '"Je discuterais avec tout le monde et chercherais un accord collectif" — réponse typique qui ne dit rien. Le jury veut savoir QUE vous décidez, pas que vous consultez indéfiniment.',
  },
  {
    t: 'La réponse moralement parfaite',
    d: 'Ne donnez pas la réponse que vous pensez que le jury veut entendre. Les mises en situation sont conçues pour révéler votre vraie personnalité, pas votre conformisme. Assumez des positions nuancées mais tranchées.',
  },
  {
    t: 'L\'absence de structure',
    d: 'Parler en flux de conscience sans identifier l\'enjeu central, sans cadrer vos options, sans conclure nettement — c\'est le signal d\'un candidat qui panique. Prenez 5 secondes de silence pour organiser votre pensée.',
  },
];

const MiseEnSituationESSECPage = () => {
  return (
    <MethodologyShell
      moduleLabel="Format spécialisé · ESSEC"
      icon={Lightbulb}
      titlePrefix="Mise en situation"
      titleAccent="ESSEC"
      intro="Comprendre et maîtriser l'épreuve qui révèle vos valeurs au cœur de l'entretien de personnalité de l'ESSEC."
      cta={{
        title: 'Entraînez-vous sur les mises en situation',
        text: 'Nos coachs vous font passer des mises en situation ESSEC en conditions réelles et vous donnent un retour précis sur votre positionnement et votre logique.',
      }}
    >
      <MethodIntroCard icon={Clock} title="Comprendre la mise en situation ESSEC">
        <p className="mb-3">
          Au sein de l'entretien de personnalité de l'ESSEC (30 à 45 minutes), le jury vous soumet{' '}
          <strong className="text-pr-black">une ou plusieurs situations issues de cas réels ou fictifs</strong> — sans
          préparation préalable. L'exercice dure au maximum <strong className="text-pr-black">10 minutes</strong> et
          le jury peut vous demander d'approfondir une réponse pendant jusqu'à 5 minutes supplémentaires.
        </p>
        <p className="mb-3">
          Le scénario peut porter sur la <strong className="text-pr-black">vie d'entreprise</strong>, la{' '}
          <strong className="text-pr-black">vie associative</strong> (souvent dans le cadre d'associations ESSEC),
          ou une <strong className="text-pr-black">situation éthique</strong> mettant vos valeurs à l'épreuve.
        </p>
        <p>
          Ce n'est pas un exercice de management ou de cas strategy. C'est un révélateur de personnalité : comment
          réagissez-vous face à un dilemme moral ? Comment assumez-vous une décision difficile ? Que révèle votre
          premier réflexe sur ce que vous êtes vraiment ?
        </p>
      </MethodIntroCard>

      <MethodSection label="Section 01" title="Les 3 types de mises en situation" icon={Target}>
        <div className="space-y-6">
          {typesSituations.map((type) => (
            <div key={type.t} className="bg-white border border-pr-gray-light rounded-lg p-6">
              <h4 className="font-dm-serif text-lg text-pr-black mb-1 flex items-center gap-2">
                <type.icon className="w-5 h-5 text-pr-black" strokeWidth={1.6} />
                {type.t}
              </h4>
              <p className="text-sm text-pr-gray-dark mb-4 italic">{type.desc}</p>
              <div className="h-px w-8 bg-pr-black mb-4" />
              <div className="space-y-3">
                {type.exemples.map((ex, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <span className="font-dm-serif text-pr-black text-sm flex-shrink-0 mt-0.5">{i + 1}.</span>
                    <p className="text-sm text-pr-gray-dark leading-relaxed">{ex}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </MethodSection>

      <MethodSection label="Section 02" title="Ce que le jury évalue vraiment" icon={Brain}>
        <div className="space-y-4">
          {criteres.map((c, i) => (
            <div key={c.t} className="bg-white border border-pr-gray-light rounded-lg p-6 flex items-start gap-5">
              <span className="font-dm-serif text-3xl text-pr-black leading-none flex-shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h4 className="font-dm-serif text-lg text-pr-black mb-2">{c.t}</h4>
                <div className="h-px w-8 bg-pr-black mb-3" />
                <p className="text-sm text-pr-gray-dark leading-relaxed">{c.d}</p>
              </div>
            </div>
          ))}
        </div>
      </MethodSection>

      <MethodSection label="Section 03" title="Méthode pour répondre en 5 étapes" icon={CheckCircle}>
        <div className="space-y-4">
          {methode.map((step, i) => (
            <div key={step.t} className="bg-white border border-pr-gray-light rounded-lg p-6 flex items-start gap-5">
              <span className="font-dm-serif text-3xl text-pr-black leading-none flex-shrink-0">
                {String(i + 1).padStart(2, '0')}
              </span>
              <div>
                <h4 className="font-dm-serif text-lg text-pr-black mb-2">{step.t}</h4>
                <div className="h-px w-8 bg-pr-black mb-3" />
                <p className="text-sm text-pr-gray-dark leading-relaxed">{step.d}</p>
              </div>
            </div>
          ))}
        </div>
      </MethodSection>

      <MethodSection label="Section 04" title="Les 3 pièges à éviter absolument" icon={AlertTriangle}>
        <div className="space-y-4">
          {piegues.map((p, i) => (
            <div key={p.t} className="bg-white border border-pr-gray-light border-l-4 border-l-pr-black rounded-r-lg p-6">
              <h4 className="font-dm-serif text-lg text-pr-black mb-2 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 text-pr-black" strokeWidth={1.6} />
                {p.t}
              </h4>
              <div className="h-px w-8 bg-pr-black mb-3" />
              <p className="text-sm text-pr-gray-dark leading-relaxed">{p.d}</p>
            </div>
          ))}
        </div>
      </MethodSection>
    </MethodologyShell>
  );
};

export default MiseEnSituationESSECPage;
